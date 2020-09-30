function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}


var mybody = document.getElementsByTagName('body')[0];

var startX, startY, moveEndX, moveEndY, X, Y;

mybody.addEventListener('touchstart', function (e) {

    // e.preventDefault();

    startX = e.touches[0].pageX;

    startY = e.touches[0].pageY;

}, false);

mybody.addEventListener('touchmove', function (e) {

    // e.preventDefault();

    moveEndX = e.changedTouches[0].pageX;

    moveEndY = e.changedTouches[0].pageY;

    X = moveEndX - startX;

    Y = moveEndY - startY;

    if (Math.abs(X) > Math.abs(Y) && X > 0) { // right



    } else if (Math.abs(X) > Math.abs(Y) && X < 0) { // left


    } else if (Math.abs(Y) > Math.abs(X) && Y > 0) { // down



    } else if (Math.abs(Y) > Math.abs(X) && Y < 0) { // up



    }
});

