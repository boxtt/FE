var resizeableImage = function (image_target, x, y, w) {
    // Some variable and settings
    this.$container = null;
    this.orig_src = new Image();
    this.image_target = $(image_target).get(0);
    this.event_state = {};
    this.constrain = true;
    this.min_width = 5;// Change as required
    this.min_height = 5;
    this.max_width = 800; // Change as required
    this.max_height = 900;
    this.resize_canvas = document.createElement('canvas');
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;

    this.init = function () {
        // When resizing, we will always use this copy of the original as the base
        // this.image_target.width = w;
        // this.image_target.height.h;

        this.orig_src.src = this.image_target.src;

        // Wrap the image with the container and add resize handles
        $(image_target).wrap('<div class="resize-container"></div>')
            .before('<span class="resize-handle resize-handle-nw"></span>')
            .before('<span class="resize-handle resize-handle-ne"></span>')
            .after('<span class="resize-handle resize-handle-se"></span>')
            .after('<span class="resize-handle resize-handle-sw"></span>');

        // Assign the container to a variable
        this.$container = $(image_target).parent('.resize-container');

        // Add events
        this.$container.on('mousedown touchstart', '.resize-handle', this.startResize);
        this.$container.on('mousedown touchstart', 'img', this.startMoving);
        this.$container.css("left", x);
        this.$container.css("top", y);
        this.resizeImage(w, w / this.orig_src.width * this.orig_src.height);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=w / this.orig_src.width * this.orig_src.height;
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

        // This is a fix for mobile safari
        // For some reason it does not allow a direct copy of the touches property
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

        // Position image differently depending on the corner dragged and constraints
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
            top = mouse.y;
            if (this.constrain || e.shiftKey) {
                top = mouse.y - ((width / this.orig_src.width * this.orig_src.height) - height);
            }
        } else if ($(this.event_state.evnt.target).hasClass('resize-handle-ne')) {
            width = mouse.x - this.event_state.container_left;
            height = this.event_state.container_height - (mouse.y - this.event_state.container_top);
            left = this.event_state.container_left;
            top = mouse.y;
            if (this.constrain || e.shiftKey) {
                top = mouse.y - ((width / this.orig_src.width * this.orig_src.height) - height);
            }
        }

        // Optionally maintain aspect ratio
        if (this.constrain || e.shiftKey) {
            height = width / this.orig_src.width * this.orig_src.height;
        }

        if (width > this.min_width && height > this.min_height && width < this.max_width && height < this.max_height) {
            // To improve performance you might limit how often resizeImage() is called
            this.resizeImage(width, height);
            // Without this Firefox will not re-calculate the the image dimensions until drag end
            this.$container.offset({'left': left, 'top': top});
        }

        this.x=this.$container.css("left");
        this.y=this.$container.css("top");
        this.w=width
        this.h=height;
    }

    this.resizeImage = function (width, height) {
        this.resize_canvas.width = width;
        this.resize_canvas.height = height;
        this.resize_canvas.getContext('2d').drawImage(this.orig_src, 0, 0, width, height);
        console.log(width, height);
        $(this.image_target).attr('src', this.resize_canvas.toDataURL("image/png"));
    };

    this.startMoving = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.saveEventState(e);
        console.log(this.$container.offset().left, this.$container.offset().top);
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
        // Watch for pinch zoom gesture while moving
        if (this.event_state.touches && this.event_state.touches.length > 1 && touches.length > 1) {
            var width = this.event_state.container_width, height = this.event_state.container_height;
            var a = this.event_state.touches[0].clientX - this.event_state.touches[1].clientX;
            a = a * a;
            var b = this.event_state.touches[0].clientY - this.event_state.touches[1].clientY;
            b = b * b;
            var dist1 = Math.sqrt(a + b);

            a = e.originalEvent.touches[0].clientX - touches[1].clientX;
            a = a * a;
            b = e.originalEvent.touches[0].clientY - touches[1].clientY;
            b = b * b;
            var dist2 = Math.sqrt(a + b);

            var ratio = dist2 / dist1;

            width = width * ratio;
            height = height * ratio;
            // To improve performance you might limit how often resizeImage() is called
            // resizeImage(width, height);
        }
    };

    // crop = function () {
    //     //Find the part of the image that is inside the crop box
    //     var crop_canvas,
    //         left = $('.overlay').offset().left - this.$container.offset().left,
    //         top = $('.overlay').offset().top - this.$container.offset().top,
    //         width = $('.overlay').width(),
    //         height = $('.overlay').height();
    //
    //     crop_canvas = document.createElement('canvas');
    //     crop_canvas.width = width;
    //     crop_canvas.height = height;
    //
    //     crop_canvas.getContext('2d').drawImage(image_target, left, top, width, height, 0, 0, width, height);
    //     window.open(crop_canvas.toDataURL("image/png"));
    // }

    this.init();
    return this;

};

