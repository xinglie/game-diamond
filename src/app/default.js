define('app/default',['magix'],function(require,exports,module){
/*Magix */
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
Magix.applyStyle('kb71',"*{margin:0;padding:0}body{line-height:1.5;background:#333;-ms-text-autospace:ideograph-alpha ideograph-numeric ideograph-parenthesis;text-spacing:ideograph-alpha ideograph-numeric ideograph-parenthesis}img{border:0;vertical-align:middle}p{word-wrap:break-word}ol,ul{list-style:none}a{color:#a6a6a6;text-decoration:none;transition:All 1s ease;-webkit-transition:All 1s ease;-moz-transition:All 1s ease;-ms-transition:All 1s ease;-o-transition:All 1s ease}a:hover{color:#fff}.kb71-btn{box-sizing:content-box;display:inline-block;border:1px solid #ddd;*border:0 none;border-radius:2px;*margin-right:.3em;margin-bottom:0;padding:0 10px;*padding:1px 10px;width:auto;height:21px;line-height:21px;font-size:12px;font-weight:700;cursor:pointer;border-bottom-color:#bbb!important;background-color:#f4f4f4;background-repeat:repeat-x;background-image:linear-gradient(180deg,#f8f8f8,#eee)}.kb71-btn,.kb71-btn:hover,.kb71-btn:visited{color:#333!important}.kb71-btn:hover{box-shadow:none;background-color:#ededed;background-image:linear-gradient(180deg,#f2f2f2,#e6e6e6)}.kb71-btn:active,.kb71-btn:hover{background-repeat:repeat-x}.kb71-btn:active{background-color:#ebebeb;background-image:linear-gradient(180deg,#e6e6e6,#f2f2f2)}.kb71-playground{width:430px;height:430px;margin:20px auto;border:1px solid #777;position:relative;background-color:#000}.kb71-active{position:absolute;display:none}");
module.exports = Magix.View.extend({
    tmpl: "<div mx-view=\"app/explain\" class=\"kb71-playground\"></div><img src=\"src/images/active.gif\" class=\"kb71-active\" id=\"active\"/>",
    render: function() {
        var me = this;
        me.setHTML(me.id, me.tmpl);
    },
    'toTop<click>': function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }
});
});