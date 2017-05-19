'#snippet';
/*
    author:xinglie.lkf@taobao.com
 */
'ref@./default.css';
var Magix = require('magix');
Magix.applyStyle('@explain.css');
module.exports = Magix.View.extend({
    tmpl: '@explain.html',
    render: function() {
        var me = this;
        me.updater.digest();
    },
    'start<click>': function() {
        this.owner.mountView('@./game');
    }
});