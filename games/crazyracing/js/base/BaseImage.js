var BaseImage = function() {
    function e() {}
    return e.getShareImg = function(e, t, a, n) {
        var g = document.createElement("img");
        g.src = "./res/skin/fx.jpg", g.onload = function() {
            var e = document.createElement("canvas");
            e.width = g.width, e.height = g.height;
            e.getContext("2d").drawImage(g, 0, 0, g.width, g.height);
            var t = e.toDataURL("image/png");
            GameBaseData.isDebug, n && n(t)
        }
    }, e.getHeadImg = function(e, t) {
        var a = document.createElement("img");
        a.setAttribute("crossOrigin", "anonymous"), a.src = e, a.onload = function() {
            var e = document.createElement("canvas");
            e.width = 256, e.height = 256;
            e.getContext("2d").drawImage(a, 0, 0, 256, 256);
            var n = e.toDataURL("image/png");
            GameBaseData.isDebug && console.log(n), t && t(n)
        }
    }, e.a = 0, e.doImage = 0, e
}();