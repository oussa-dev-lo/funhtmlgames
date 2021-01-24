var HttpPost = function() {
    function e() {}
    return e.HttpPost_GetTerrace = function(e, t, a) {
        var r = {
            uid: e,
            nickName: t,
            terrace: "ios"
        };
        this.serversData(this.urlSevrves + this._GetTerrace, JSON.stringify(r), a)
    }, e.serversData = function(e, t, a) {
        var r = new XMLHttpRequest;
        r.onreadystatechange = function() {
            if (4 == r.readyState && r.status >= 200 && r.status < 400) {
                var e = r.responseText;
                GameBaseData.isDebug && console.log(e), e = JSON.parse(e), a && a(e)
            }
        }, r.onerror = function(e) {
            a && a(e)
        }, r.ontimeout = function() {
            a && a("Timeout")
        }, GameBaseData.isDebug && console.log("httpPost=>" + e + "     data=>config=" + t), r.open("POST", e, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.send("config=" + t)
    }, e.urlSevrves = "https://facebook.miguapp.cc/Crazy-Car/", e._GetTerrace = "getTerrace.do", e
}();