/**
 * bs4 常用插件封装
 */
define(
    /*公共组件*/

    ['jquery', "/static/a2/js/bb.modules/view/common/Page.js","loading","text!/static/a2/js/common/map_plugin.html", 'papaparse','cookie', 'select2'],
    function($, Page, Loading, MapPlugin, CsvPlugin,cookie, select2) {
        return {
            init : function() {
                loading = new Loading();

                // 分页模块渲染及跳转
                if($("#bs4_page_box").length) {
                    pager = new Page({
                        el: $('#bs4_page_box'),
                        options: {
                            totalRows: $("#bs4_page_box").data('totalrows'),
                            nowPage: $("#bs4_page_box").data('nowpage'),
                            listRows: $("#bs4_page_box").data('listrows'),
                            totalPages: $("#bs4_page_box").data('totalpages')
                        }
                    }).on('View:Page:change', function (page_num) {
                        url = location.href;
                        url = url.replace(/\&*?p=\d{1,}/, '');
                        location.href = /\?/.test(url) ? url + "&p=" + page_num : url + "?p=" + page_num;
                    });
                }


                //时间插件渲染 （支持vue）
                $("[data-datetimepickerbox]").each(function(){
                    var format = $(this).data('format');
                    format = format ? format : 'Y-m-d H:i';
                    var timepicker = (/H/.test(format) || /i/.test(format) || /s/.test(format)) ? true : false;
                    $(this).datetimepicker({timepicker:timepicker,format: format,maxDate:window.maxDate,scrollInput:false,
                        onChangeDateTime:function (current_time,$input) {
                            /*是否回填vue*/
                            var name = $input.attr('data-model');

                            /*最大支持三级*/
                            if(name){
                                var params = name.split('.');
                                if(params.length == 1){
                                    window.vm[params[0]] = current_time? current_time.dateFormat(format): '';
                                } else if(params.length == 2){
                                    window.vm[params[0]][params[1]] = current_time? current_time.dateFormat(format) : '';
                                } else if(params.length == 3){
                                    window.vm[params[0]][params[1]][params[2]] = current_time? current_time.dateFormat(format) : '';
                                }
                            }
                        }});
                });

                // 省市联动
                if($(".province_and_city_box").length) {
                    $.ajax({
                        url : '/tools/feg/getCityId',
                        type : 'get',
                        dataType : 'json',
                        data : {},
                        async : false,
                        success: function(res) {
                            if(res.ec == 200) {
                                window.province_and_cities = res.cities;
                                window.province_option = '';
                                window.first_province_city_option = '';
                                var n=0;
                                for(var i in window.province_and_cities){
                                    window.province_option += '<option value="'+window.province_and_cities[i]['v']+'">'+window.province_and_cities[i]['d']+'</option>';
                                    /*
                                    if(n == 0) {
                                        for(var k in window.province_and_cities[i]['c']){
                                            first_province_city_option += '<option value="'+window.province_and_cities[i]['c'][k]['v']+'">'+window.province_and_cities[i]['c'][k]['d']+'</option>';
                                        }
                                    }
                                    n++;
                                    */
                                }
                            }else{
                                $.tip(res.em,'error');
                            }
                        },
                        error : function () {
                            $.tip('省市数据加载失败','error');
                        }
                    });

                    function cityback(obj) {
                        var pid = obj.val();
                        var city_option = '<option value="">请选择</option>';
                        if(window.province_and_cities[pid] && window.province_and_cities[pid]['c']) {
                            for(var i in window.province_and_cities[pid]['c']){
                                city_option += '<option value="'+window.province_and_cities[pid]['c'][i]['v']+'">'+window.province_and_cities[pid]['c'][i]['d']+'</option>';
                            }
                        }
                        obj.parents(".province_and_city_box").find(".city").html(city_option);
                    }

                    $(".province_and_city_box").each(function(){
                        $(this).addClass("filter-block ").addClass("form-group");
                        var province_name = $(this).attr("province_name"),
                            city_name = $(this).attr("city_name"),
                            must_select = $(this).attr('must_select') == '1' ? "form-item-autocheck" : "",
                            must_select_attr = $(this).attr('must_select') == '1' ? 'form-item-select-must' : "",
                            now_province = $(this).attr("now_province"),
                            now_city = $(this).attr("now_city");
                            disabled = $(this).attr("disabled");

                        var content = '<label>省份 '+'<select title="省份" class="form-control-inline province '+must_select+'" name="'+province_name+'" '+must_select_attr+'><option value="">请选择</option>'+window.province_option+ '</select>'+'</label><label> &nbsp;&nbsp;城市 '+'<select title="城市" class="form-control-inline city '+must_select+'" name="'+city_name+'" '+must_select_attr+'><option value="">请选择</option>'+first_province_city_option+'</select>'+'</label>';
                        content += ''
                        $(this).html(content);

                        if(now_province) {
                            $(this).find(".province").prop("value",now_province);
                            cityback($(this).find(".province"));
                            now_city && $(this).find(".city").prop("value",now_city);
                        }

                        if(disabled) {
                            $(this).find(".province").prop("disabled",disabled);
                            $(this).find(".city").prop("disabled",disabled);
                        }

                    });
                    $(".province_and_city_box").on("change",".province",function(){ cityback($(this)); });
                }

                // 表单自动提交
                $("[data-target-form]").each(function(){
                    var formObj = $("#"+$(this).attr("data-target-form")),
                        success = formObj.attr('success');
                        submit_btn = $(this);

                    submit_btn.click(function(){
                        var can_submit = true,itemObj=formObj.find(".form-item-autocheck"),item_num = itemObj.length;
                        //formObj.find(".form-item-autocheck").each(function(){
                        for(var i=0;i<item_num;i++) {
                            var self = itemObj.eq(i);
                            if(self.attr("form-item-input-must") !== undefined){
                                console.log('input-must:'+$.trim(self.val()) );
                                if( !$.trim(self.val()) ){
                                    $.tip(self.attr('title')+"不能为空",'error');
                                    can_submit = false;
                                    break;
                                }
                            }

                            if(self.attr("form-item-radio-must") !== undefined){
                                if(!self.find("input:checked").length){
                                    $.tip(self.attr('title')+"未选择",'error');
                                    can_submit = false;
                                    break;
                                }
                            }
                            if(self.attr("form-item-checkbox-must") !== undefined){
                                if(!self.find("input:checked").length){
                                    $.tip(self.attr('title')+"未选择",'error');
                                    can_submit = false;
                                    break;
                                }
                            }

                            if(self.attr("form-item-select-must") !== undefined){
                                if($.trim(self.val()) == ''){
                                    $.tip(self.attr('title')+"未选择",'error');
                                    can_submit = false;
                                    break;
                                }
                            }

                            if(self.attr("form-item-number") !== undefined){
                                var number_reg = /^(0)|([1-9]\d*)$/;
                                if(!number_reg.test($.trim(self.val()))){
                                    $.tip(self.attr('title')+"必须是数字",'error');
                                    can_submit = false;
                                    break;
                                }
                            }

                            if(self.attr("form-item-date") !== undefined){
                                var simple_date_reg = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
                                if(!simple_date_reg.test($.trim(self.val()))){
                                    $.tip(self.attr('title')+"必须是日期格式:yyyy-mm-dd|yyyy/mm/dd|yyyy.mm.dd",'error');
                                    can_submit = false;
                                    break;
                                }
                            }

                            if(self.attr("form-item-datetime") !== undefined){
                                var simple_date_reg = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}\s\d{2}\:\d{2}$/;
                                if(!simple_date_reg.test($.trim(self.val()))){
                                    $.tip(self.attr('title')+"必须是日期时间yyyy(-|/|.)mm(-|/|.)dd hh:ii格式",'error');
                                    can_submit = false;
                                    break;
                                }
                            }

                            if(self.attr("form-item-maxlength") !== undefined){
                                var maxlen = parseInt(self.attr("form-item-maxlength"));
                                if($.trim(self.val()).length > maxlen){
                                    $.tip(self.attr('title')+"超出了"+maxlen+"个字符",'error');
                                    can_submit = false;
                                    break;
                                }
                            }

                            if(self.attr("form-item-minlength") !== undefined){
                                var maxlen = parseInt(self.attr("form-item-minlength"));
                                if($.trim(self.val()).length < maxlen){
                                    $.tip(self.attr('title')+"少于了"+maxlen+"个字符",'error');
                                    can_submit = false;
                                    break;
                                }
                            }

                        }

                        window.auto_form_data = formObj.serializeObject();
                        console.log(window.auto_form_data);

                        // 专门处理checkbox
                        $(".checkbox_group").each(function(){
                            var self = $(this);
                            if(self.find(":checked").length){
                                var checkbox_name = $(this).find(":checked").eq(0).attr("name");
                                window.auto_form_data[checkbox_name] = [];
                                self.find(":checked").each(function(){
                                    window.auto_form_data[checkbox_name].push($(this).val());
                                });
                            }
                        });

                        // 专门处理select2 的 多选
                        $(".select2-plugin").each(function(){
                            var self = $(this);
                            var self_name = self.attr("name");
                            window.auto_form_data[self_name] = self.val();
                        });

                        // 特殊表单[csv上传,]支持
                        $("[data-special-name]").each(function(){
                            var special_name = $(this).data("special-name"),
                                special_value = $(this).data("value");
                            if($(this).data("autocheck")){
                                if(!special_name || !special_value){
                                    $.tip(special_name+'不能为空','error');
                                    can_submit = false;
                                }
                            }
                            window.auto_form_data[special_name] = special_value;

                        });
                        console.log(window.auto_form_data);

                        if(!can_submit) {
                            return false;
                        }

                        if(formObj.data('form_avoid_multiclick')){
                            $.tip('不要重复多次提交,请稍后再试','error');
                            return false;
                        }else{
                            formObj.data('form_avoid_multiclick',1);
                        }

                        var submit_type = formObj.attr('type').toLowerCase() == 'post' ? 'post' : 'get';

                        window.auto_form_data['momo_csrf_token'] = $.cookie('momo_csrf_token'); // 用于防止csrf
                        $.ajax({
                            url : formObj.data('url'),
                            type : 'post',
                            dataType : 'json',
                            data : window.auto_form_data,
                            success: function(res) {
                                if(res.ec == 200) {
                                    $.tip(res.em,'success');
                                    if(res.redirect_url) {
                                        setTimeout(function(){
                                            location.href=res.redirect_url;
                                        },1000);
                                    }else if(success == 'reload'){
                                        setTimeout(function(){
                                            location.reload();
                                        },1000);
                                    }else if(success == 'none'){
                                        console.log('none');
                                    }else if(success){
                                        location.href = success;
                                    }
                                }else{
                                    if(res.ec == 403 && res.auth_redirect_url) {
                                        setTimeout(function () {
                                            location.href = res.auth_redirect_url;
                                        }, 1000);
                                    }
                                    $.tip(res.em,'error');
                                }
                                setTimeout(function(){formObj.data('form_avoid_multiclick',0)},5000);
                            },
                            error : function () {
                                $.tip('操作失败','error');
                                setTimeout(function(){formObj.data('form_avoid_multiclick',0)},5000);
                            }
                        });

                    });
                });


                // 快速操作
                $("#quick_op_confirm_box_btn").click(function(){
                    var self = $(this),
                        url = self.data('url'),
                        param = self.data('param'),
                        success = self.data('success'),
                        callback = self.data('callback'),
                        op_click = self.data('op_click'),
                        quick_op_reason = $("#quick_op_confirm_box").find("#quick_op_reason").val();

                    if(!url) {
                        $.tip('非法操作','error');
                        return ;
                    }
                    param['quick_op_reason'] = quick_op_reason;

                    if(!op_click) {
                        $(this).data('op_click',1);
                        $.ajax({
                            url : url,
                            type : 'post',
                            dataType : 'json',
                            data: param,
                            success : function(res) {
                                if(res.ec == 200) {
                                    self.data('url','');
                                    $.tip(res.em,'success');
                                    $("#quick_op_confirm_box").modal({show:false});
                                    if(success=='reload') {
                                        setTimeout(function(){location.reload();},2000);

                                    }else if (success == 'none'){
                                        setTimeout(function(){$("#quick_op_confirm_box").modal('hide');},300);

                                    }else if(success){
                                        setTimeout(function(){location.href=success;},2000);

                                    }

                                    if(callback) {
                                        eval(callback);
                                    }

                                }else{
                                    $.tip(res.em,'error');
                                }
                                setTimeout(function(){self.data('op_click',0)},1000);
                            },
                            error : function() {
                                $.tip('操作失败','error');
                                setTimeout(function(){self.data('op_click',0)},1000);
                            }

                        });
                    }
                });


                $("body").on('click',".quick_op",function(){
                    var self = $(this),
                        param = $(this).data('param'),
                        url = $(this).data('url'),
                        success = $(this).data('success'),
                        callback = $(this).data('callback'),
                        confirm = $(this).data('confirm'),
                        reasontip = $(this).data('reasontip'),
                        need_reason = $(this).data('need-reason'),
                        confirm_btn = $("#quick_op_confirm_box_btn"),
                        confirm_title = $(this).data('confirm-title');
                    reasontip = reasontip ? reasontip : '请输入理由';

                    confirm_title = confirm_title ? confirm_title : '你确定要做该操作吗?';
                    param = param ? param : {};
                    param['momo_csrf_token'] = $.cookie('momo_csrf_token'); // 用于防止csrf

                    if(confirm) {
                        confirm_btn.data('param',param);
                        confirm_btn.data('success',success);
                        confirm_btn.data('callback',callback);
                        confirm_btn.data('url',url);
                        if(need_reason== '1') {
                            var html = confirm_title+'<br/>'+'<textarea class="form-control" style="width:100%;height:80px" id="quick_op_reason" placeholder="'+reasontip+'"></textarea>';
                            $("#quick_op_confirm_box_tip").html(html);
                        }else{
                            $("#quick_op_confirm_box_tip").html(confirm_title);
                        }
                        $("#quick_op_confirm_box").modal();
                    }else{
                        var op_click = $(this).data('op_click');
                        if(!op_click) {
                            $(this).data('op_click',1);
                            $.ajax({
                                url : url,
                                type : 'post',
                                dataType : 'json',
                                data: param,
                                success : function(res) {
                                    if(res.ec == 200) {
                                        $.tip(res.em,'success');
                                        if(success=='reload') {
                                            setTimeout(function(){location.reload();},2000);
                                        }else if (success == 'none'){
                                            setTimeout(function(){$("#quick_op_confirm_box").modal('hide');},300);
                                        }else if(success){
                                            setTimeout(function(){location.href=success;},2000);
                                        }

                                        if(callback) {
                                            eval(callback)
                                        }

                                    }else{
                                        $.tip(res.em,'error');
                                    }
                                    setTimeout(function(){self.data('op_click',0)},1000);
                                },
                                error : function() {
                                    $.tip('操作失败','error');
                                    setTimeout(function(){self.data('op_click',0)},1000);
                                }

                            });
                        }else{
                            $.tip('请勿重复操作','error');
                        }
                    }
                });

                /*解决webuploader上传插件和模态框冲突问题 （渲染位置错误）*/
                $(".modal").each(function(){
                    var item = $(this);
                    item.css('display', 'block');
                    item.addClass("webuploader-element-invisible");

                    item.on('show.bs.modal', function (event) {
                        item.removeClass("webuploader-element-invisible");
                    });
                });

                //上传图插件渲染
                $(".picupload-plugin").each(function(){
                    var item = $(this);
                    uploadImg(item)
                });
                //上传非图片文件
                $(".fileupload-plugin, .audioupload-plugin, .videoupload-plugin").each(function(){
                    var item = $(this);
                    uploadOther(item)
                });

                function uploadImg(item){
                    var api = item.data('api');
                    var input = item.data('input');
                    var ext = item.data('ext');
                    var autocheck = item.data('autocheck');
                    var guid = item.data('guid');
                    var url = item.data('url');
                    /*如果input的话 初始input*/
                    if(input){
                        if (autocheck == 1) {
                            var html = '<input class="form-item-autocheck" title="图片" type="hidden" name="' + input + '" value="' + guid + '" form-item-input-must=""/>';
                        } else {
                            var html = '<input type="hidden" name="' + input + '" value="' + guid + '"/>';
                        }
                        item.append(html);
                    }

                    if(ext!== undefined) {
                        var ext_html = '<input type="hidden" name="pic_ext" value="' + ext + '"/>';
                        item.append(ext_html);
                    }
                    /*添加默认值*/
                    if(url) {
                        item.parent().append('<div><img src="'+url+'" style="width:120px" /> &nbsp;&nbsp;&nbsp;<span class="picuploader_cancel_pic" style="color:red;cursor:pointer" data-inputname="'+input+'">X</span></div>');
                    }else if(guid){
                        item.parent().append('<div><code>当前guid: '+ guid + '</code>&nbsp;&nbsp;&nbsp;<span class="picuploader_cancel_pic" style="color:red;cursor:pointer" data-inputname="'+input+'">X</span></div>');
                    }

                    $(".picuploader_cancel_pic").click(function(){
                        var self = $(this);
                        var input_name = $(this).data('inputname');
                        $(".picupload-plugin").find("input[name='"+input_name+"']").val('');
                        self.parent().remove();
                    });
                    //var fileList
                    item.pictureupload({
                        server: api,
                        resize: false,
                        auto: true,
                        fileList: true,
                        compress:false,
                        pick: {
                            id: '#' + item.attr('id'),
                            multiple: false
                        }
                    }).on("uploadStart.bs.pictureupload", function () {
                        loading.show();
                        $.tip("开始上传", "alert");
                    }).on("uploadSuccess.bs.pictureupload", function (e, this_obj, file, response) {
                        loading.hide();
                        if (response.ec == 200) {
                            $.tip("上传成功", "alert");
                            item.parent().find(".picuploader_cancel_pic").click();
                            // 服务器返回
                            item.data('guid', response.guid);
                            item.data('url', response.url);

                            /*清除默认值*/
                            item.parent().children('code').remove();
                            item.parent().children('img').remove();

                            if(input){
                                $("input[name='"+ input +"']").val(response.guid);
                            }

                            if(ext!== undefined){
                                item.find("input[name='pic_ext']").val(response.type);
                            }
                        } else {
                            item.find('.pictureupload-file-list').children('li[data-picture-upload-id="' + file.id + '"]').remove();
                            $.tip("上传失败：" + response.em, "alert");
                        }
                    }).on("uploadError.bs.pictureupload", function(e, this_obj, file) {
                        loading.hide();
                        item.find('.pictureupload-file-list').children('li[data-picture-upload-id="' + file.id + '"]').remove();
                        $.tip("上传失败，请重试！", "alert");
                    });
                }

                function uploadOther(item){
                    var api = item.data('api');
                    var input = item.data('input');
                    var autocheck = item.data('autocheck');
                    var guid = item.data('guid');

                    var type = item.attr('class');
                    /*如果input的话 初始input*/
                    if(input){
                        if (autocheck == 1) {
                            var html = '<input class="form-item-autocheck" title="文件" type="hidden" name="' + input + '" value="' + guid + '" form-item-input-must=""/>';
                        } else {
                            var html = '<input type="hidden" name="' + input + '" value="' + guid + '"/>';
                        }
                        item.append(html);
                    }
                    /*添加默认值*/
                    if(guid){
                        /*因为上传插件问题导致dom节点混乱。只能如此*/
                        item.parent().append('<code>当前guid: '+ guid + '</code>');
                    }
                    //var fileList
                    item.fileupload({
                        server: api,
                        resize: false,
                        auto: true,
                        fileList: false,
                        pick: {
                            id: '#' + item.attr('id'),
                            multiple: false
                        }
                    }).on("uploadStart.bs.fileupload", function () {
                        loading.show();
                        $.tip("开始上传", "alert");
                    }).on("uploadSuccess.bs.fileupload", function (e, this_obj, file, response) {
                        loading.hide();
                        if (response.ec == 200) {
                            if(!response.guid){
                                $.tip("上传失败： 返回值不存在guid！", "alert");
                                return;
                            }
                            $.tip("上传成功", "alert");
                            /*清除默认值显示*/
                            item.parent().children('code').remove();
                            /*如果定义表单 填入value值*/
                            if(input){
                                $("input[name='"+ input +"']").val(response.guid);
                            }
                            /*向div填值*/
                            item.data('guid', response.guid);
                            /*回调显示*/
                            if(response.url){
                                item.data('url', response.url);
                                switch(type){
                                    case 'videoupload-plugin':
                                        item.data('pic_url', response.pic_url);
                                        var html = '<div class="upload-result video-upload-show"><img src="' + response.pic_url + '"><div><a href="'+ response.url +'" target="_blank">点击查看视频</a></div></div>';
                                        break;
                                    case 'audioupload-plugin':
                                        var html = '<div class="upload-result video-upload-show"><audio controls><source src="'+ response.url+ '" type="audio/mpeg">您的浏览器不支持 audio 元素。 </audio></embed></div>';
                                        break;
                                    case 'fileupload-plugin':
                                        var html = '<div class="upload-result"><a href="' + response.url + '">文件下载链接</a></div>';
                                        break;
                                    default:
                                        var html = '<div class="upload-result"><a href="' + response.url + '">文件下载链接</a></div>';
                                }
                                item.children('.upload-result').remove();
                                item.append(html);
                            }
                        } else {
                            $.tip("上传失败：" + response.em, "alert");
                        }
                    });
                }

                /*加载地图组件*/
                $('#map-plugin').html(MapPlugin);

                /*加载csv解析插件*/
                $(".csv-parse-plugin").each(function(){
                    var item = $(this);

                    var html = '<button type="button" class="btn btn-info plu-csv-btn">点击上传csv</button>' +
                                '<input type="file" class="plu-csv-file" size="28" accept="text/csv"/>' +
                                '<br style="clear:both"> ';
                    item.append(html);
                });
                /*监控csv解析插件*/
                $(".plu-csv-file").change(function () {
                    var file = $(this);
                    console.log(file);
                    var plugin = file.parent();
                    file.parse({
                        config: {
                            complete: function (results, file) {
                                console.log(results.data);
                                plugin.data('value', results.data);//组件框数据回填
                            }
                        }
                    });
                });

                /*select2 插件初始化*/
                $('.select2-plugin').select2();
            }
        }

    });