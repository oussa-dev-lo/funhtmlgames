var touch, __extends = this && this.__extends || function() {
    var t = function(e, a) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a])
            })(e, a)
    };
    return function(e, a) {
        function o() {
            this.constructor = e
        }
        t(e, a), e.prototype = null === a ? Object.create(a) : (o.prototype = a.prototype, new o)
    }
}();
! function(t) {
    var e = function(e) {
        function a(t) {
            var a = e.call(this) || this;
            return a._main = null, a._playerInfos = null, a._curTime = 0, a._curHeld = 0, a.headTextrue2dList = [], a._loadingAssets = [], a._loadHeadOver = !1, a._main = t, a._playerInfos = new Array, a.setPlayerInfo(), a.listPlayer.array = new Array(a._playerInfos.length), a.listPlayer.renderHandler = Laya.Handler.create(a, a.onRenderItem, null, !1), Laya.timer.frameLoop(1, a, a.onLoop), a
        }
        return __extends(a, e), a.prototype.setPlayerInfo = function() {
            this._loadHeadOver = !1;
            var e = GameBaseData.getMatchData();
            GameBaseData.isDebug && console.log(e);
            var a = t.Pool.get("MatchPlayerData", t.MatchPlayerData);
            a.icon = e[0].pic, a.matchTime = 0, this._playerInfos.push(a);
            for (o = 1; o < t.GameDefine.AI_COUNT + 1; o++) {
                (r = t.Pool.get("MatchPlayerData", t.MatchPlayerData)).icon = e[o].pic, r.matchTime = t.MathUtil.randomInt(0, 3e3), this._playerInfos.push(r)
            }
            for (var o = 0, n = this._playerInfos.length; o < n; o++) {
                var r = this._playerInfos[o],
                    s = Math.floor(Math.random() * n),
                    i = Math.floor(Math.random() * n);
                this.changeList(this._playerInfos, s, i)
            }
            this._curTime = 0
        }, a.prototype.changeList = function(t, e, a) {
            if (e != a) {
                var o = t[e];
                t[e] = t[a], t[a] = o
            }
        }, a.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        }, a.prototype.onRenderItem = function(t, e) {
            if (!(null == t || e >= this._playerInfos.length)) {
                var a = this._playerInfos[e];
                t.setData(a.icon, a.matchTime)
            }
        }, a.prototype.onLoop = function() {
            this._curTime += Laya.timer.delta;
            for (var e = this._playerInfos.length, a = 0, o = 0; o < e; o++) {
                this._playerInfos[o].matchTime <= this._curTime && a++
            }
            var n = 100 * a / e;
            this.tfProgress.text = Math.floor(n) + "%", this.pbProgress.value = n / 100, a >= e && (Laya.timer.clear(this, this.onLoop), Laya.timer.once(500, this._main, this._main.event, [t.GameEvent.MATCH_OVER]))
        }, a.prototype.onAssetLoaded = function() {
            GameBaseData.isDebug && console.log("头像this._loadingAssets.lengt=" + this._loadingAssets.length), this._loadingAssets.shift(), 0 == this._loadingAssets.length && (GameBaseData.isDebug && console.log("头像全部载入完毕"), GameBaseData.matchPlayerHead = this.headTextrue2dList, this._loadHeadOver = !0)
        }, a
    }(ui.MatchDialogUI);
    t.MatchDialog = e
}(touch || (touch = {}));