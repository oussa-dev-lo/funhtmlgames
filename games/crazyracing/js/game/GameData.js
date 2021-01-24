var touch, __extends = this && this.__extends || function() {
    var e = function(t, a) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
            })(t, a)
    };
    return function(t, a) {
        function n() {
            this.constructor = t
        }
        e(t, a), t.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype, new n)
    }
}();
! function(e) {
    var t = function(t) {
        function a() {
            var e = t.call(this) || this;
            e._star = 0, e._diamond = 0, e._record = 0, e._record2 = 2, e._homescreen = 0, e._skinUnlocks = [0], e._videoNums = null, e._showSkinIndex = 0, e._isMusicOn = !1, e._isSoundOn = !1, e._dailyVaild = !1, e._dailyCount = 0, e._weekCount = 0, e._onlineTime = 0, e._onlineIndex = 0, e._storeTime = 0, e._loginCar = 0, e._model2Score = 0;
            var a = Laya.LocalStorage.getItem("skin_unlock");
            if (a) {
                a.split(",").forEach(function(t) {
                    var a = parseInt(t); - 1 == e._skinUnlocks.indexOf(a) && e._skinUnlocks.push(a)
                })
            }
            var n = Laya.LocalStorage.getItem("videoNums");
            if (n) {
                e._videoNums = new Array;
                n.split(",").forEach(function(t) {
                    e._videoNums.push(parseInt(t))
                })
            } else e._videoNums = new Array;
            var o = Laya.LocalStorage.getItem("record");
            if (o) {
                var i = GameBaseData.uncompileStr(o),
                    r = parseInt(i);
                e._record = r != r ? 0 : r
            }
            var s = Laya.LocalStorage.getItem("record2");
            if (s) {
                var i = GameBaseData.uncompileStr(s),
                    r = parseInt(i);
                e._record2 = r != r ? 0 : r
            }
            var l = Laya.LocalStorage.getItem("homescreen");
            l && (e._homescreen = parseInt(l));
            var c = Laya.LocalStorage.getItem("showSkinIndex");
            c && (e._showSkinIndex = parseInt(c));
            var u = Laya.LocalStorage.getItem("diamond");
            e._diamond = u ? parseInt(u) : 0;
            var d = Laya.LocalStorage.getItem("star");
            if (d) {
                var i = GameBaseData.uncompileStr(d),
                    r = parseInt(i);
                e._star = r != r ? 0 : r
            } else e._star = 0;
            var _ = Laya.LocalStorage.getItem("isMusicOn");
            e.isMusicOn = "false" != _;
            var m = Laya.LocalStorage.getItem("isSoundOn");
            e.isSoundOn = "false" != m;
            var g = Laya.LocalStorage.getItem("dailyDate");
            if (g) {
                var h = new Date;
                e._dailyVaild = g != h.toDateString()
            } else e._dailyVaild = !0;
            var y = Laya.LocalStorage.getItem("dailyCount");
            y ? (e._dailyCount = parseInt(y), e._dailyVaild && e._dailyCount >= 7 && (e._dailyCount = 0)) : e._dailyCount = 0;
            var p = Laya.LocalStorage.getItem("weekCount");
            e._weekCount = p ? parseInt(p) : 0, 7 == e._dailyCount && e._dailyVaild && (e._weekCount++, Laya.LocalStorage.setItem("weekCount", e._weekCount.toString()), e._dailyCount = 0);
            var S = Laya.LocalStorage.getItem("onlineDate"),
                f = !1,
                I = new Date;
            S && (f = S != I.toDateString(), GameBaseData.clearUidToShare()), Laya.LocalStorage.setItem("onlineDate", I.toDateString());
            var L = Laya.LocalStorage.getItem("onlineTime");
            L && (e._onlineTime = f ? 0 : parseInt(L));
            var v = Laya.LocalStorage.getItem("onlineIndex");
            v && (e._onlineIndex = f ? 0 : parseInt(v));
            var k = Laya.LocalStorage.getItem("loginCar");
            e._loginCar = k ? parseInt(k) : 0;
            var b = Laya.LocalStorage.getItem("model2Score");
            return e._model2Score = b ? parseInt(b) : 0, e
        }
        return __extends(a, t), a.prototype.getObj = function() {
            var e = GameBaseData.compileStr(this._star.toString()),
                t = GameBaseData.compileStr(this._record.toString()),
                a = GameBaseData.compileStr(this._record2.toString());
            return {
                uid: "",
                skin_unlock: this._skinUnlocks.toString(),
                videoNums: this._videoNums.toString(),
                record: t,
                record2: a,
                diamond: this._diamond.toString(),
                star: e,
                dailyDate: Laya.LocalStorage.getItem("dailyDate"),
                pkDate: Laya.LocalStorage.getItem("pkDate"),
                dailyCount: this._dailyCount.toString(),
                onlineDate: Laya.LocalStorage.getItem("onlineDate"),
                onlineTime: this._onlineTime.toString(),
                onlineIndex: this._onlineIndex.toString(),
                weekCount: this._weekCount.toString(),
                loginCar: this._loginCar.toString(),
                model2Score: this._model2Score.toString()
            }
        }, a.prototype.saveFBobj = function() {
            if (GameBaseData.isDebug && console.log("setFBInfo"), GameBaseData.isFBSDK) {
                var e = this.getObj();
                FBInstant.player.setDataAsync({
                    ballData: e
                }).then(FBInstant.player.flushDataAsync).then(function() {
                    GameBaseData.isDebug && console.log("FB data has save")
                })
            }
        }, a.prototype.setFbObj = function(e) {
            var t = this,
                a = e.skin_unlock;
            if (this._skinUnlocks = [], a) {
                this._skinUnlocks = [];
                a.split(",").forEach(function(e) {
                    var a = parseInt(e); - 1 == t._skinUnlocks.indexOf(a) && t._skinUnlocks.push(a)
                })
            }
            var n = e.videoNums;
            if (this._videoNums = [], n) {
                this._videoNums = new Array;
                n.split(",").forEach(function(e) {
                    t._videoNums.push(parseInt(e))
                })
            } else this._videoNums = new Array;
            var o = e.record;
            if (o) {
                var i = GameBaseData.uncompileStr(o),
                    r = parseInt(i);
                this._record = r != r ? 0 : r
            }
            var s = e.record2;
            if (s) {
                var i = GameBaseData.uncompileStr(s),
                    r = parseInt(i);
                this._record2 = r != r ? 0 : r
            }
            var l = e.diamond;
            this._diamond = l ? parseInt(l) : 400;
            var c = e.star;
            if (c) {
                var i = GameBaseData.uncompileStr(c),
                    r = parseInt(i);
                this._star = r != r ? 0 : r
            } else this._star = 0;
            var u = e.dailyDate;
            if (u) {
                var d = new Date;
                this._dailyVaild = u != d.toDateString()
            } else this._dailyVaild = !0;
            var _ = e.dailyCount;
            _ ? (this._dailyCount = parseInt(_), this._dailyVaild && this._dailyCount >= 7 && (this._dailyCount = 0)) : this._dailyCount = 0;
            var m = e.weekCount;
            this._weekCount = m ? parseInt(m) : 0, 7 == this._dailyCount && this._dailyVaild && (this._weekCount++, Laya.LocalStorage.setItem("weekCount", this._weekCount.toString()), this._dailyCount = 0);
            var g = e.onlineDate,
                h = !1,
                y = new Date;
            g && (h = g != y.toDateString(), GameBaseData.clearUidToShare()), Laya.LocalStorage.setItem("onlineDate", y.toDateString());
            var p = e.onlineTime;
            p && (this._onlineTime = h ? 0 : parseInt(p));
            var S = e.onlineIndex;
            S && (this._onlineIndex = h ? 0 : parseInt(S));
            var f = e.loginCar;
            this._loginCar = f ? parseInt(f) : 0;
            var I = e.model2Score;
            this._model2Score = I ? parseInt(I) : 0
        }, Object.defineProperty(a, "instance", {
            get: function() {
                return null == a._instance && (GameBaseData.isDebug && console.log("1 GameData  instance()"), a._instance = new a), a._instance
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.destroy = function() {}, Object.defineProperty(a.prototype, "star", {
            get: function() {
                return this._star
            },
            set: function(e) {
                this._star = e;
                var t = GameBaseData.compileStr("" + e);
                Laya.LocalStorage.setItem("star", t)
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.setAddStar = function(e) {
            this._star += e;
            var t = GameBaseData.compileStr("" + this._star);
            Laya.LocalStorage.setItem("star", t), this.saveFBobj()
        }, Object.defineProperty(a.prototype, "diamond", {
            get: function() {
                return this._diamond
            },
            set: function(e) {
                this._diamond = e, Laya.LocalStorage.setItem("diamond", this._diamond.toString())
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.setAddDiamond = function(e) {
            this._diamond += e, Laya.LocalStorage.setItem("diamond", this._diamond.toString()), this.saveFBobj()
        }, Object.defineProperty(a.prototype, "record", {
            get: function() {
                return this._record
            },
            set: function(e) {
                this._record = e;
                var t = GameBaseData.compileStr("" + e);
                Laya.LocalStorage.setItem("record", t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "record2", {
            get: function() {
                return this._record2
            },
            set: function(e) {
                this._record2 = e;
                var t = GameBaseData.compileStr("" + e);
                Laya.LocalStorage.setItem("record2", t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "homeScreen", {
            get: function() {
                return this._homescreen
            },
            set: function(e) {
                this._homescreen = e, Laya.LocalStorage.setItem("homescreen", this._homescreen.toString())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "showSkinIndex", {
            get: function() {
                return this._showSkinIndex
            },
            set: function(e) {
                this._showSkinIndex = e, Laya.LocalStorage.setItem("showSkinIndex", this._showSkinIndex.toString())
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.randomSkinIndex = function() {
            var t = e.MathUtil.randomInt(0, this._skinUnlocks.length - 1);
            this._showSkinIndex = this._skinUnlocks[t]
        }, a.prototype.unlockSkin = function(e) {
            if (-1 == this._skinUnlocks.indexOf(e)) {
                this._skinUnlocks.push(e);
                var t = this._skinUnlocks.toString();
                Laya.LocalStorage.setItem("skin_unlock", t), this.saveFBobj()
            }
        }, a.prototype.getUnlockSkins = function() {
            return this._skinUnlocks
        }, a.prototype.addVideoNum = function(e, t, a) {}, Object.defineProperty(a.prototype, "videoNums", {
            get: function() {
                return this._videoNums
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "isMusicOn", {
            get: function() {
                return this._isMusicOn
            },
            set: function(e) {
                this._isMusicOn = e, Laya.LocalStorage.setItem("isMusicOn", e ? "true" : "false")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "isSoundOn", {
            get: function() {
                return this._isSoundOn
            },
            set: function(e) {
                this._isSoundOn = e, Laya.LocalStorage.setItem("isSoundOn", e ? "true" : "false")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "dailyVaild", {
            get: function() {
                return this._dailyVaild
            },
            set: function(e) {
                this._dailyVaild = e;
                var t = new Date;
                Laya.LocalStorage.setItem("dailyDate", t.toDateString()), this._dailyCount++, Laya.LocalStorage.setItem("dailyCount", this._dailyCount.toString())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "dailyCount", {
            get: function() {
                return this._dailyCount
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "weekCount", {
            get: function() {
                return this._weekCount
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "onlineTime", {
            get: function() {
                return this._onlineTime
            },
            set: function(e) {
                this._onlineTime = e, this._storeTime++, this._storeTime >= 10 && (this._storeTime = 0, Laya.LocalStorage.setItem("onlineTime", this._onlineTime.toString()))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "onlineIndex", {
            get: function() {
                return this._onlineIndex
            },
            set: function(e) {
                this._onlineIndex = e, Laya.LocalStorage.setItem("onlineIndex", this._onlineIndex.toString())
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.setLoginCar = function(e) {
            this._loginCar = e, Laya.LocalStorage.setItem("loginCar", this._loginCar.toString())
        }, a.prototype.getLoginCar = function() {
            return this._loginCar
        }, a.prototype.setModel2Score = function(e) {
            this._model2Score = e, Laya.LocalStorage.setItem("model2Score", this._model2Score.toString())
        }, a.prototype.getModel2Score = function() {
            return this._model2Score
        }, a._instance = null, a
    }(Laya.EventDispatcher);
    e.GameData = t
}(touch || (touch = {}));