var Playground = function (obj) {
    this.array1 = [];
    this.array2 = [];
    this._id = 0;
    this.focus = {};
    this.rdis = $('#wallpaper')[0].clientWidth / $('.component')[0].clientWidth;
    this.init = function () {
        console.log(this.rdis);
        $('#wallpaper').css('width','100%');
        var one = document.getElementsByClassName('one')[0];
        var two = document.getElementsByClassName('two')[0];
        var _this = this;

        for (let i = 0; i < obj.array1.length; i++) {
            let id = this.getUniqueID();
            var item = document.createElement('div');
            item.id = 'one_' + (id);
            item.innerText = "独照" + (i + 1);
            item.onclick = function () {
                _this.setFocus('array1', id);
                console.log(i);
            };
            one.appendChild(item);
            this.array1.push(new ResizeableImage(obj.array1[i].src, obj.array1[i].x, obj.array1[i].y, obj.array1[i].w, 'array1', id, this.setFocusByDOM.bind(this)));
        }
        for (let j = 0; j < obj.array2.length; j = j + 2) {
            let id1 = this.getUniqueID();
            let id2 = this.getUniqueID();
            var item = document.createElement('div');
            item.id = 'two' + (id1);
            item.innerText = "合照" + ((j + 2) / 2);
            item.onclick = function () {
                _this.setFocus('array2', id1);
                _this.setFocus('array2', id2);
            };
            two.appendChild(item);

            this.array2.push(new ResizeableImage(obj.array2[j].src, obj.array2[j].x, obj.array2[j].y, obj.array2[j].w, 'array2', id1, this.setFocusByDOM.bind(this)));
            this.array2.push(new ResizeableImage(obj.array2[j + 1].src, obj.array2[j + 1].x, obj.array2[j + 1].y, obj.array2[j + 1].w, 'array2', id2, this.setFocusByDOM.bind(this)));
        }

        $('#btn-add-1').on('click', function () {
            this.array1.push(new ResizeableImage('./img/image.jpg', 250, 100, 40, 'array1', this.getUniqueID(), this.setFocusByDOM.bind(this)));
        })
        $('#btn-add-2').on('click', function () {
            this.array2.push(new ResizeableImage('./img/image.jpg', 200, 200, 40, 'array2', this.getUniqueID(), this.setFocusByDOM.bind(this)));
            this.array2.push(new ResizeableImage('./img/image.jpg', 300, 200, 40, 'array2', this.getUniqueID(), this.setFocusByDOM.bind(this)));
        })
        $('#btn-del').on('click', function (e) {
            this.doDelete();
        })

    }
    this.doDelete = function () {
        if (this.focus.cate == 'array1') {
            for (var i = 0; i < this.array1.length; i++) {
                if (this.array1[i].id == this.focus.id) {
                    this.array1[i].remove();
                    this.array1.splice(i, 1);
                    break;
                }
            }
        } else {
            for (var i = 0; i < this.array2.length; i++) {
                if (this.array2[i].id == this.focus.id) {
                    this.array2[i].remove();
                    this.array2.splice(i, 1);
                    break;
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
    this.setFocusByDOM = function (e) {
        this.focus = {cate: e.currentTarget.cate, id: e.currentTarget.id};
        this._updateFocus();
    }
    this.setFocus = function (cate, id) {
        this.focus = {cate: cate, id: id};
        this._updateFocus();
    }
    this.getUniqueID = function () {
        return this._id++;
    }

    return this.init();
}