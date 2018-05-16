/**
 * 分页插件封装
 * @module bb.modules:View/common/Page.js
 *
 * @example {
 *              totalRows:24234,
 *              nowPage:132,
 *              listRows:20,
 *              totalPages:20
 *          }
 * @return {View}
 */
define(['jquery', 'underscore', 'backbone'
], function($, _, Backbone) {
    return Backbone.View.extend({
        initialize: function(ops) {
            this.options = ops.options || {};
            this.render();
            this.$el.addClass('clearfix paging-bar');
            this.$el.on('changePage', function(type, page) {
                this.trigger('View:Page:change', page);
            }.bind(this));
        },
        destroy:function(){
            this.$el.off('changePage');
            this.$el.html('');
            delete this;
        },
        render: function() {
            pageTemplate.render({
                $box: this.$el,
                data: {
                    page: this.options
                },
                isSkip: false,
                isJump: true,
                btnText: '跳转',
                isDecodeURIComponent: true
            });
        }
    });
});
