/**
 * 全屏加载蒙层
 * @module bb.modules:View/common/FullLoading.js
 * @return {View}
 */
define(['jquery', 'underscore', 'backbone','bootstrap',
'text!/static/a2/js/bb.modules/tpl/common/FullLoading.html'
], function($, _, Backbone,bootstrap,LoadingTpl) {
    var selector = '.full-loading';

    return Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        show:function (){
            return $(selector).modal('show');
        },
        hide:function(){
            return $(selector).modal('hide');
        },
        destory:function(){
            return $('.full-loading').remove();
        },
        render: function() {
            if($(selector).size() === 0){
                return $('body').append(LoadingTpl);
            }
        }
    });
});
