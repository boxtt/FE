var Playground = function (obj) {
    this.array1 = [];
    this.array2 = [];
    this._id=0;
    this.focus = {};
    this.init = () => {
        for (var i = 0; i < obj.array1.length; i++) {
            this.array1.push(new ResizeableImage(obj.array1[i].src, obj.array1[i].x, obj.array1[i].y, obj.array1[i].w, 'array1', this.getUniqueID(), this.updateFocus));
        }
        for (var j = 0; j < obj.array2.length; j++) {
            this.array2.push(new ResizeableImage(obj.array2[j].src, obj.array2[j].x, obj.array2[j].y, obj.array2[j].w, 'array2', this.getUniqueID(), this.updateFocus));
        }

        $('#btn-add-1').on('click', () => {
            this.array1.push(new ResizeableImage('./img/image.jpg', 250, 100, 40, 'array1', this.getUniqueID(), this.updateFocus));
        })
        $('#btn-add-2').on('click', () => {
            this.array2.push(new ResizeableImage('./img/image.jpg', 200, 200, 40, 'array2', this.getUniqueID(), this.updateFocus));
            this.array2.push(new ResizeableImage('./img/image.jpg', 300, 200, 40, 'array2', this.getUniqueID(), this.updateFocus));
        })
        $('#btn-del').on('click', (e) => {
            this.doDelete();
        })

    }
    this.doDelete = () => {
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
    this.updateFocus = (e) => {
        this.focus = {cate: e.currentTarget.cate, id: e.currentTarget.id};
        for (var i = 0; i < this.array1.length; i++) {
            this.array1[i].setFocus(false);
        }
        for (var j = 0; j < this.array2.length; j++) {
            this.array2[j].setFocus(false);
        }
        if (this.focus.cate == 'array1') {
            for (var k = 0; k < this.array1.length; k++) {
                if (this.focus.id==this.array1[k].id) {
                    this.array1[k].setFocus(true);
                    break;
                }
            }
        } else {
            for (var k = 0; k < this.array2.length; k++) {
                if (this.focus.id==this.array2[k].id) {
                    this.array2[k].setFocus(true);
                    break;
                }
            }
        }
        console.log('focus:', this.focus);
    }
    this.getUniqueID=function () {
        return this._id++;
    }

    return this.init();
}