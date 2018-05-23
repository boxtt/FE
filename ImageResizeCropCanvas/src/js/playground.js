var Playground = function (obj) {
    this.array1 = [];
    this.array2 = [];
    this._id = 0;
    this.focus = {};
    this.rdis = $('#wallpaper')[0].clientWidth / $('.component')[0].clientWidth;
    this.init = function () {
        console.log(this.rdis);
        $('#wallpaper').css('width', '100%');
        var one = document.getElementsByClassName('one')[0];
        var two = document.getElementsByClassName('two')[0];
        var _this = this;

        for (let i = 0; i < obj.array1.length; i++) {
            let id = this.getUniqueID();
            var item = document.createElement('button');
            item.id = 'one_' + (id);
            item.setAttribute('class', 'photo-btn');

            item.innerText = "独照" + (i + 1);
            item.onclick = function () {
                _this.setShow('array1', [id]);
                console.log(i);
            };
            one.appendChild(item);
            this.array1.push(new ResizeableImage(obj.array1[i].src, obj.array1[i].x, obj.array1[i].y, obj.array1[i].w, 'array1', id, this.setToInputs.bind(this), this.setFocusByDOM.bind(this)));
        }
        for (let j = 0; j < obj.array2.length; j = j + 2) {
            let id1 = this.getUniqueID();
            let id2 = this.getUniqueID();
            var item = document.createElement('button');
            item.id = 'two_' + (id1);
            item.setAttribute('class', 'photo-btn');
            item.innerText = "合照" + ((j + 2) / 2);
            item.onclick = function () {
                _this.setShow('array2', [id1, id2]);
            };
            two.appendChild(item);

            this.array2.push(new ResizeableImage(obj.array2[j].src, obj.array2[j].x, obj.array2[j].y, obj.array2[j].w, 'array2', id1, this.setToInputs.bind(this), this.setFocusByDOM.bind(this)));
            this.array2.push(new ResizeableImage(obj.array2[j + 1].src, obj.array2[j + 1].x, obj.array2[j + 1].y, obj.array2[j + 1].w, 'array2', id2, this.setToInputs.bind(this), this.setFocusByDOM.bind(this)));
        }


        $('#input_x').on('change', function (e) {
            let item = _this.seekItem(_this[_this.focus.cate], _this.focus.id);
            item.setX(Math.round(parseInt(e.target.value)/_this.rdis));
        });
        $('#input_y').on('change', function (e) {
            let item = _this.seekItem(_this[_this.focus.cate], _this.focus.id);
            item.setY(Math.round(parseInt(e.target.value)/_this.rdis));

        });
        $('#input_w').on('change', function (e) {
            let item = _this.seekItem(_this[_this.focus.cate], _this.focus.id);
            item.setW(Math.round(parseInt(e.target.value)/_this.rdis));

            $('#input_h')[0].value = Math.round(item.h*_this.rdis);


        });
        $('#hide_all').on('click', function () {
            _this._updateShow('none');
        });
        $('#show_all').on('click', function () {
            _this._updateShow('all');
        })
        $('#btn-add-1').on('click', function () {
            let id = _this.getUniqueID();
            var item = document.createElement('button');
            item.id = 'one_' + (id);
            item.setAttribute('class', 'photo-btn');

            item.innerText = "独照" + (_this.array1.length + 1);
            item.onclick = function () {
                _this.setShow('array1', [id]);
            };
            one.appendChild(item);

            _this.array1.push(new ResizeableImage('./img/image.jpg', 250, 100, 40, 'array1', id, _this.setToInputs.bind(_this), _this.setFocusByDOM.bind(_this)));

        })
        $('#btn-add-2').on('click', function () {
            let id1 = _this.getUniqueID();
            let id2 = _this.getUniqueID();
            var item = document.createElement('button');
            item.id = 'two_' + (id1);
            item.setAttribute('class', 'photo-btn');
            item.innerText = "合照" + ((_this.array2.length + 2) / 2);
            item.onclick = function () {
                _this.setShow('array2', [id1, id2]);
            };
            two.appendChild(item);

            _this.array2.push(new ResizeableImage('./img/image.jpg', 200, 200, 40, 'array2', id1, _this.setToInputs.bind(_this), _this.setFocusByDOM.bind(_this)));
            _this.array2.push(new ResizeableImage('./img/image.jpg', 300, 200, 40, 'array2', id2, _this.setToInputs.bind(_this), _this.setFocusByDOM.bind(_this)));
        })
        $('#btn-del').on('click', function (e) {
            _this.doDelete();
        })

    }
    this.doDelete = function () {
        if (this.show.cate == 'array1') {
            for (var i = 0; i < this.array1.length; i++) {
                if (this.array1[i].id == this.show.id[0]) {
                    $('#one_' + this.array1[i].id).remove();
                    this.array1[i].remove();
                    this.array1.splice(i, 1);
                    break;
                }
            }
        } else {
            for (var i = 0; i < this.array2.length; i++) {
                if (this.array2[i].id == this.show.id[0] ) {
                    if ($('#two_' + this.array2[i].id)) {
                        $('#two_' + this.array2[i].id).remove();
                    }
                    this.array2[i].remove();
                    this.array2.splice(i, 1);

                }
                if (this.array2[i].id == this.show.id[1] ) {
                    if ($('#two_' + this.array2[i].id)) {
                        $('#two_' + this.array2[i].id).remove();
                    }
                    this.array2[i].remove();
                    this.array2.splice(i, 1);

                }
            }


        }
    }
    this._updateFocus = function () {
        for (var i = 0; i < this.array1.length; i++) {
            this.array1[i].setFocus(false);
        }
        for (var j = 0; j < this.array2.length; j++) {
            this.array2[j].setFocus(false);
        }
        if (this.focus.cate == 'array1') {
            for (var k = 0; k < this.array1.length; k++) {
                if (this.focus.id == this.array1[k].id) {
                    this.array1[k].setFocus(true);
                    break;
                }
            }
        } else {
            for (var k = 0; k < this.array2.length; k++) {
                if (this.focus.id == this.array2[k].id) {
                    this.array2[k].setFocus(true);
                    break;
                }
            }
        }
        console.log('focus:', this.focus);
    }
    this._updateShow = function (cate, array) {
        var b;
        if (cate == 'all') {
            b = true;
        } else {
            b = false;
        }
        for (var i = 0; i < this.array1.length; i++) {
            this.array1[i].setShow(b);
            $('#one_' + this.array1[i].id).removeClass('active');

        }
        for (var j = 0; j < this.array2.length; j++) {
            this.array2[j].setShow(b);
            $('#two_' + this.array2[j].id).removeClass('active');
        }
        if (cate == 'array1') {
            for (let k = 0; k < this.array1.length; k++) {
                if (array[0] == this.array1[k].id) {
                    this.array1[k].setShow(true);
                    $('#one_' + this.array1[k].id).addClass('active');
                    break;
                }
            }
        } else if (cate == 'array2') {
            for (let k = 0; k < this.array2.length; k++) {
                if (array[0] == this.array2[k].id || array[1] == this.array2[k].id) {
                    this.array2[k].setShow(true);
                    $('#two_' + this.array2[k].id).addClass('active');

                }
            }
        } else {
            console.log("世界尽头")

        }
    }
    this.setToInputs = function (cate, id, x, y, w, h) {
        if (cate == this.focus.cate && id == this.focus.id) {
            $('#input_x')[0].value = Math.round(x*this.rdis);
            $('#input_y')[0].value = Math.round(y*this.rdis);
            $('#input_w')[0].value = Math.round(w*this.rdis);
            $('#input_h')[0].value = Math.round(h*this.rdis);
        }
    }
    this.setFocusByDOM = function (e) {
        console.log('!')
        this.focus = {cate: e.currentTarget.cate, id: e.currentTarget.id};
        this._updateFocus();
    }
    this.setFocus = function (cate, id) {
        this.focus = {cate: cate, id: id};
        this._updateFocus();
    }
    this.setShow = function (cate, array) {
        this.show = {cate: cate, id: array};
        this._updateShow(cate, array);
    }
    this.getUniqueID = function () {
        return this._id++;
    }
    this.seekItem = function (array, id) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == id) {
                return array[i];
            }
        }
    }
    return this.init();
}