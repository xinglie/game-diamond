define('app/explain',['magix'],function(require,exports,module){
/*Magix */
/*
    author:xinglie.lkf@taobao.com
 */

var Magix = require('magix');
Magix.applyStyle('k694',".k694-body{color:#fff;line-height:26px}.k694-title{font-size:24px;font-weight:700;margin:30px auto 10px;text-align:center}.k694-cnt{top:83px;left:28px;width:373px}.k694-cnt,.k694-start{position:absolute}.k694-start{top:340px;left:179px}");
module.exports = Magix.View.extend({
    tmpl: "<div class=\"k694-body\"><div class=\"k694-title\">独立(粒)钻石</div><span class=\"k694-cnt\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 独立钻石起源于法国，是一种风靡世界的益智游戏与中国发明的“华容道”、匈牙利人发明的“魔方”， 并称为“智力游戏办的三大不可思议”<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 它类似于跳棋，但不能走步，只能跳。走棋时棋 时棋子跳过相邻的棋子到空位上，并把跳过的棋子吃掉。棋子可以沿棋盘的格线横跳、纵跳，但不能斜跳 <a href=\"http://baike.baidu.com/link?url=Y89UVVwKi6EoiGnuYAGVH78PV5NjcJVtJL4wALCqbEUr67Hyq89LeX9bnCHFWd5zNFYAM6qESkMkhJj6Qrg4kq\" target=\"_blank\">了解更多</a><br/><br/>该游戏基于<a href=\"https://github.com/thx/magix\" target=\"_blank\">Magix</a>制作，Magix是一个<a href=\"https://github.com/thx/magix/issues/11\" target=\"_blank\">区块管理框架</a> </span><button class=\"k694-start kb71-btn\" mx-click=\"start()\">开始游戏</button></div>",
    render: function() {
        var me = this;
        me.setHTML(me.id, me.tmpl);
    },
    'start<click>': function() {
        this.owner.mountView('app/game');
    }
});
});