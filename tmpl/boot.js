'#exclude(define)';
'@./libs/sea.js';
'@./libs/zepto.js';
'@./libs/magix.js';
'@./libs/dragdrop.js';
'@./app/default.js';
'@./app/explain.js';
'@./app/game.js';

(function(){
    var M=require('magix');
    M.boot({defaultView:'app/default'});
})();