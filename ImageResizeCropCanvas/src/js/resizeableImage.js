var ResizeableImage = function (img_src, x, y, w, cate, id, callback, callbackFocus) {
    this.id = id;
    this.$container = null;
    this.orig_src = new Image();
    this.img_src = img_src;
    this.event_state = {};
    /*元素大小控制*/
    this.min_width = 5;
    this.min_height = 5;
    this.max_width = 800;
    this.max_height = 900;
    /*元素基本的信息，对基本信息赋值请使用set方法*/
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;


    this.loadImage = function () {
        var _this = this;
        var img = document.createElement('img');
        img.src = this.img_src;
        img.id = id;
        img.cate = cate;
        var component = document.getElementsByClassName('component')[0];

        component.appendChild(img);
        $(img).on('load', _this.init.bind(_this));
    }
    this.init = function (e) {
        var _this=this;
        var img = e.currentTarget;
        this.orig_src.src = this.img_src;
        this.image_target = img;
        $(img).on('load', function () {
        });
        $(this.image_target).wrap('<div class="resize-container"></div>')
            .before('<span class="resize-handle resize-handle-nw"></span>')
            .before('<span class="resize-handle resize-handle-ne"></span>')
            .after('<span class="resize-handle resize-handle-se"></span>')
            .after('<span class="resize-handle resize-handle-sw"></span>');

        this.$container = $(this.image_target).parent('.resize-container');

        // Add events
        this.$container.on('mousedown touchstart', '.resize-handle', this.startResize);
        this.$container.on('mousedown touchstart', 'img', this.startMoving);
        this.$container.on('click', 'img', function (e) {
            callbackFocus(e);
            _this.updateDataFromDOM();
        });
        this.$container.on('setdata', () => {
            this.$container.css("left", this.x);
            this.$container.css("top", this.y);
            $(this.image_target).css('width', this.w);
            $(this.image_target).css('height', this.h);

        });

        this.$container.css("left", x);
        this.$container.css("top", y);
        this.resizeImage(w, w / this.orig_src.width * this.orig_src.height);
        this.updateDataFromDOM();
    };
    this.startResize = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.saveEventState(e);
        $(document).on('mousemove touchmove', this.resizing);
        $(document).on('mouseup touchend', this.endResize);

    };
    this.endResize = (e) => {
        e.preventDefault();
        $(document).off('mouseup touchend', this.endResize);
        $(document).off('mousemove touchmove', this.resizing);
    };
    this.saveEventState = (e) => {
        // Save the initial event details and container state
        this.event_state.container_width = this.$container.width();
        this.event_state.container_height = this.$container.height();
        this.event_state.container_left = this.$container.offset().left;
        this.event_state.container_top = this.$container.offset().top;
        this.event_state.mouse_x = (e.clientX || e.pageX || e.originalEvent.touches[0].clientX) + $(window).scrollLeft();
        this.event_state.mouse_y = (e.clientY || e.pageY || e.originalEvent.touches[0].clientY) + $(window).scrollTop();
        if (typeof e.originalEvent.touches !== 'undefined') {
            this.event_state.touches = [];
            $.each(e.originalEvent.touches, function (i, ob) {
                this.event_state.touches[i] = {};
                this.event_state.touches[i].clientX = 0 + ob.clientX;
                this.event_state.touches[i].clientY = 0 + ob.clientY;
            });
        }
        this.event_state.evnt = e;

    };
    this.resizing = (e) => {
        var mouse = {}, width, height, left, top, offset = this.$container.offset();
        mouse.x = (e.clientX || e.pageX || e.originalEvent.touches[0].clientX) + $(window).scrollLeft();
        mouse.y = (e.clientY || e.pageY || e.originalEvent.touches[0].clientY) + $(window).scrollTop();

        if ($(this.event_state.evnt.target).hasClass('resize-handle-se')) {
            width = mouse.x - this.event_state.container_left;
            height = mouse.y - this.event_state.container_top;
            left = this.event_state.container_left;
            top = this.event_state.container_top;
        } else if ($(this.event_state.evnt.target).hasClass('resize-handle-sw')) {
            width = this.event_state.container_width - (mouse.x - this.event_state.container_left);
            height = mouse.y - this.event_state.container_top;
            left = mouse.x;
            top = this.event_state.container_top;
        } else if ($(this.event_state.evnt.target).hasClass('resize-handle-nw')) {
            width = this.event_state.container_width - (mouse.x - this.event_state.container_left);
            height = this.event_state.container_height - (mouse.y - this.event_state.container_top);
            left = mouse.x;
            top = mouse.y - ((width / this.orig_src.width * this.orig_src.height) - height);
        } else if ($(this.event_state.evnt.target).hasClass('resize-handle-ne')) {
            width = mouse.x - this.event_state.container_left;
            height = this.event_state.container_height - (mouse.y - this.event_state.container_top);
            left = this.event_state.container_left;
            top = mouse.y - ((width / this.orig_src.width * this.orig_src.height) - height);
        }
        height = width / this.orig_src.width * this.orig_src.height;
        if (width > this.min_width && height > this.min_height && width < this.max_width && height < this.max_height) {
            this.resizeImage(width, height);
            this.$container.offset({'left': left, 'top': top});
        }
        this.updateDataFromDOM();

    }
    this.resizeImage = function (width, height) {
        $(this.image_target).css('width', width);
        $(this.image_target).css('height', height);
    };
    this.startMoving = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.saveEventState(e);
        console.log(this.x, this.y, this.w, this.h);
        $(document).on('mousemove touchmove', this.moving);
        $(document).on('mouseup touchend', this.endMoving);
    };
    this.endMoving = (e) => {
        e.preventDefault();
        $(document).off('mouseup touchend', this.endMoving);
        $(document).off('mousemove touchmove', this.moving);
    };
    this.moving = (e) => {
        var mouse = {}, touches;
        e.preventDefault();
        e.stopPropagation();

        touches = e.originalEvent.touches;

        mouse.x = (e.clientX || e.pageX || touches[0].clientX) + $(window).scrollLeft();
        mouse.y = (e.clientY || e.pageY || touches[0].clientY) + $(window).scrollTop();
        this.$container.offset({
            'left': mouse.x - (this.event_state.mouse_x - this.event_state.container_left),
            'top': mouse.y - (this.event_state.mouse_y - this.event_state.container_top)
        });

        this.updateDataFromDOM();
    };
    this.updateDataFromDOM = () => {
        this.x = parseInt(this.$container.css("left"));
        this.y = parseInt(this.$container.css("top"));
        this.w = parseInt($(this.image_target).css("width"));
        this.h = parseInt($(this.image_target).css("height"));
        callback(cate, id, this.x, this.y, this.w, this.h);
    }
    this.setX = (x) => {
        this.x = x;
        this.$container.trigger('setdata');

    }
    this.setY = (y) => {
        this.y = y;
        this.$container.trigger('setdata');

    }
    this.setW = (w) => {
        this.w = w;
        this.h = Math.round(w / this.orig_src.width * this.orig_src.height);
        this.$container.trigger('setdata');

    }
    this.setH = (h) => {
        this.w = Math.round(h / this.orig_src.height * this.orig_src.width);
        this.h = h
        this.$container.trigger('setdata');

    }
    this.setFocus = (b) => {
        this.isFocus = b;
        if (b) {
            this.$container.addClass('active');
        } else {
            this.$container.removeClass('active');

        }
    }
    this.setShow = (b) => {
        this.isShow = b;
        if (b) {
            this.$container.addClass('show');
        } else {
            this.$container.removeClass('show');

        }
    }
    this.remove = () => {
        this.$container.unbind();
        this.$container.remove();
    }
    this.loadImage();
    return this;

};

