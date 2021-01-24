function waitAsync(t, e) {
    return new Promise(function(a, s) {
        setTimeout(function() {
            e && e(), a()
        }, t)
    })
}

function closure(t) {
    for (var e = [], a = 1; a < arguments.length; a++) e[a - 1] = arguments[a];
    return function() {
        for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
        return t.apply(null, e.concat(a))
    }
}
var __reflect = this && this.__reflect || function(t, e, a) {
        t.__class__ = e, a ? a.push(e) : a = [e], t.__types__ = t.__types__ ? a.concat(t.__types__) : a
    },
    __extends = this && this.__extends || function(t, e) {
        function a() {
            this.constructor = t
        }
        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        a.prototype = e.prototype, t.prototype = new a
    },
    __awaiter = this && this.__awaiter || function(t, e, a, s) {
        return new(a || (a = Promise))(function(i, o) {
            function r(t) {
                try {
                    h(s.next(t))
                } catch (e) {
                    o(e)
                }
            }

            function n(t) {
                try {
                    h(s["throw"](t))
                } catch (e) {
                    o(e)
                }
            }

            function h(t) {
                t.done ? i(t.value) : new a(function(e) {
                    e(t.value)
                }).then(r, n)
            }
            h((s = s.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        function a(t) {
            return function(e) {
                return s([t, e])
            }
        }

        function s(a) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (i = 1, o && (r = o[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(r = r.call(o, a[1])).done) return r;
                switch (o = 0, r && (a = [0, r.value]), a[0]) {
                    case 0:
                    case 1:
                        r = a;
                        break;
                    case 4:
                        return h.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        h.label++, o = a[1], a = [0];
                        continue;
                    case 7:
                        a = h.ops.pop(), h.trys.pop();
                        continue;
                    default:
                        if (r = h.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                            h.label = a[1];
                            break
                        }
                        if (6 === a[0] && h.label < r[1]) {
                            h.label = r[1], r = a;
                            break
                        }
                        if (r && h.label < r[2]) {
                            h.label = r[2], h.ops.push(a);
                            break
                        }
                        r[2] && h.ops.pop(), h.trys.pop();
                        continue
                }
                a = e.call(t, h)
            } catch (s) {
                a = [6, s], o = 0
            } finally {
                i = r = 0
            }
            if (5 & a[0]) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var i, o, r, n, h = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n
    },
    Emiter = function() {
        function t() {
            this.maps = {}, this.uid = 0, this._duringEmit = !1
        }
        return t.prototype.add = function(t, e, a, s, i) {
            a = a || null, s = s || 0;
            var o = this.uid++,
                r = this.maps[t] || [];
            return r.push([o, e, a, s, i]), this.maps[t] = r, r.sort(function(t, e) {
                return t[3] < e[3]
            }), o
        }, t.prototype.on = function(t, e, a, s) {
            return this.add(t, e, a, s, !1)
        }, t.prototype.once = function(t, e, a, s) {
            return this.add(t, e, a, s, !0)
        }, t.prototype.race = function(t, e, a, s) {
            for (var i = this, o = [], r = !1, n = function(t) {
                    for (var s = [], n = 1; n < arguments.length; n++) s[n - 1] = arguments[n];
                    r = !0, o.forEach(function(t) {
                        return i.rm(t[0], t[1])
                    }), e.apply(a, [t].concat(s))
                }, h = 0, l = t; h < l.length; h++) {
                var c = l[h];
                if (r) break;
                o.push([this.once(c, closure(n, c), a, s), c])
            }
        }, t.prototype.rm = function(t, e) {
            for (var a = e ? [e] : Object.keys(this.maps), s = 0, i = a; s < i.length; s++) {
                var o = i[s],
                    r = this.maps[o];
                if (r) {
                    this._duringEmit && (this.maps[o] = r = r.concat());
                    for (var n = 0; n < r.length;) {
                        var h = r[n],
                            l = h[0];
                        h[1], h[2], h[3], h[4];
                        if (l == t) return r.splice(n, 1), !0;
                        n++
                    }
                }
            }
            return !1
        }, t.prototype.rmall = function(t) {
            void 0 == t ? this.maps = {} : delete this.maps[t]
        }, t.prototype.emit = function(e, a) {
            var s = this.maps[e];
            if (s && s.length > 0) {
                for (var i = 0; i < s.length;) {
                    var o = s[i],
                        r = (o[0], o[1]),
                        n = o[2],
                        h = (o[3], o[4]);
                    h ? s.splice(i, 1) : i++, this._duringEmit = !0;
                    var l = r.call(n, a);
                    if (this._duringEmit = !1, l == t.CONST["break"]) break
                }
                return !0
            }
            return !1
        }, t.CONST = {
            "break": {}
        }, t
    }();
__reflect(Emiter.prototype, "Emiter");
var Facade = function() {
    function t() {
        this._responders = [], this._commands = {}, t.inst = this, this.emiter = new Emiter
    }
    return t.prototype.registResponser = function(t) {
        if (this._responders.some(function(e) {
                return e.res == t
            })) throw "this responser has been registed already!";
        for (var e = t.listResponse(), a = [], s = function(e) {
                var s = i.emiter.on(e, function(a) {
                    t.doResponse(e, a)
                });
                a.push({
                    name: e,
                    id: s
                })
            }, i = this, o = 0, r = e; o < r.length; o++) {
            var n = r[o];
            s(n)
        }
        this._responders.push({
            res: t,
            ids: a
        })
    }, t.prototype.unregistResponser = function(t) {
        for (var e = 0, a = this._responders; e < a.length; e++) {
            var s = a[e];
            if (s.res == t) {
                for (var i = s.ids, o = 0, r = i; o < r.length; o++) {
                    var n = r[o];
                    this.emiter.rm(n.id, n.name)
                }
                this._responders.splice(this._responders.indexOf(s), 1);
                break
            }
        }
    }, t.prototype.registCommand = function(t, e) {
        if (this._commands[t]) throw "cmd has been registed already!!!";
        var a = this.emiter.on(t, function(a) {
            (new e).excute(a, t)
        });
        this._commands[t] = a
    }, t.prototype.unregistCommand = function(t) {
        var e = this._commands[t];
        e && this.emiter.rm(e, t)
    }, t.prototype.notify = function(t, e) {
        return this.emiter.emit(t, e)
    }, t.prototype.dispose = function() {
        this.emiter.rmall(), this._responders.length = 0
    }, t
}();
__reflect(Facade.prototype, "Facade"), egret.Bitmap.prototype.pos = function(t, e, a, s) {
    this.x = t, this.y = e, this.width = a, this.height = s, this.anchorOffsetX = a / 2, this.anchorOffsetY = s / 2
};
var GameScene = function(t) {
    function e() {
        var e = t.call(this) || this;
        if (e.CarState = [], e.NumLockTT = [], e.NumLockTT_S = [], e.MapState = [], e.PeopleNow = [], e.HouseState = [], e.LevelState = [], e.MarkPointX = [], e.MarkPointY = [], e.BirthPointX = [], e.BirthPointY = [], e.BirthPointR = [], e.ToCity = ["NEW YORK", "LONDON", "HONG KONG", "DELHI", "HANOI", "MEXICO CITY", "BANGKOK", "PARIS", "SAO PAULAO", "BARCELONA", "WARSAW", "MOSCOW", "TOKYO", "LAS VEGAS", "MANILA", "BERLIN", "JOHANNESBURG", "HAVANA", "SAN FRANCISCO", "MILAN"], e.StartTalk = ["Take me away!", "C'mon,let's get going!", "Meet me over here!", "Hurry,I'm late!", "Pick me up!", "Get here,pronto!"], e.EndTalk = ["I am Leaving", "See You Later", "Thank You"], e.HeroPrice = [0, 0, 0, 500, 500, 500, 1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 1e4, 11e3, 12e3], e.BgImage = [], e.MapImage = [], e.CarImage = [], e.CarImage2 = [], e.MarkImage = [], e.HeroImage = [], e.OverImage = [], e.RankImage = [], e.HeroImage2 = [], e.InterImage = [], e.PeopleImage = [], e.UnlockImage = [], e.UILabel = [], e.AssEssLabel = [], e.GameBoxID = 9, e.GameBoxNum = [], e.GameBoxImage = [], e.GameCenterImage = [], e.CarBody = [], e.CarShape = [], e.Stuff = [], e.Connect = new GameConnect, e.GameDate = new GameMessage, e.LoadGameScore(), 0 == e.NowHeroTT || void 0 == e.NowHeroTT) {
            e.NumGateTT = 1, e.NowHeroTT = 1, e.NumMoneyTT = 100, e.NumGoldTT = 0, e.NumDeadTT = 0, e.NumPickTT = 0, e.NumPeopleTT = 0, e.FirstBoy = 1, e.NumLockTT[0] = 1;
            for (var a = 1; 18 > a; a++) e.NumLockTT[a] = 0;
            e.SaveGameScore(), e.Connect.UpLoadScore(e.NumPeopleTT)
        } else e.FirstBoy = 0;
        e.iPhoneH = e.Connect.GetiPhoneH(), e.iPhoneW = e.Connect.GetiPhoneW(), e.PlatForm = e.Connect.GetPlatForm(), e.SuperMan = e.Connect.isSuper(), console.log("SM: " + e.SuperMan);
        for (var s = [], a = 3; 18 > a; a++) 0 == e.NumLockTT[a] && s.push(a);
        e.NumMoneyTT >= e.HeroPrice[s[0]] ? e.GameNum2 = 4 : e.GameNum2 = 0, e.choose = 1, e.NumFriends = 0, e.GameNum = 0, e.VideoState = 0, e.NumTimeAD = 300, e.NumStyleAD = 1, e.GameBoxNow = 0, e.RankKill = 0;
        for (var i = e.Connect.GetUserScore(1), a = 0; a < i.length; a++) i[a] > 1e5 && e.RankKill++;
        e.touchEnabled = !0, e.StageWidth = egret.MainContext.instance.stage.stageWidth, e.StageHeight = egret.MainContext.instance.stage.stageHeight, console.log("StageWidth: " + e.StageWidth + "StageHeight: " + e.StageHeight);
        var o = new egret.Timer(10);
        o.addEventListener(egret.TimerEvent.TIMER, e.TimerTick, e), o.start();
        var r = new egret.Timer(100);
        return r.addEventListener(egret.TimerEvent.TIMER, e.DrawAction, e), r.start(), e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, e.TouchBegin, e), e.addEventListener(egret.TouchEvent.TOUCH_MOVE, e.TouchMoved, e), e.addEventListener(egret.TouchEvent.TOUCH_END, e.TouchEnded, e), 0 != e.iPhoneW && (e.x = e.iPhoneW), e.factor = 50, e.WorldStep = 30, e.CreateWorld(), e.InitGame(), e
    }
    return __extends(e, t), e.prototype.InitGame = function() {
        if (this.PutThePicture(), 0 == this.choose);
        else if (100 == this.choose) {
            this.BuyHero = this.NowHeroTT, this.ShopNum = 0, this.BeginX = 0, this.TouchNum = 0, this.NumFriends = this.Connect.getInviteCount(), this.GameNum2 >= 4 && (this.GameNum2 = 0), this.InterImage[0].pos(320, 568, this.StageWidth + 30, this.StageHeight + 30), this.InterImage[1].pos(320, 228, 300, 300), this.InterImage[2].pos(320, 228, 300, 300), this.InterImage[3].pos(320, 228, 240, 240), this.InterImage[4].pos(316, 240, 67, 120), this.InterImage[5].pos(320, 228, 67, 120), this.InterImage[6].pos(110, 140, 84, 88), this.InterImage[7].pos(410, 1020, 280, 128), this.InterImage[9].pos(300, 920, 20, 20), this.InterImage[10].pos(340, 920, 20, 20), this.InterImage[11].pos(100, 60, 64, 56), this.InterImage[12].pos(400, 999, 56, 56), this.InterImage[13].pos(170, 1020, 162, 128), 0 == this.ShopNum ? this.InterImage[9].texture = RES.getRes("shoppage2_png") : 1 == this.ShopNum && (this.InterImage[10].texture = RES.getRes("shoppage2_png"));
            for (var t = 0; 18 > t; t++) 9 > t ? (this.RankImage[t].pos(160 + 160 * Math.floor(t % 3), 508 + 160 * Math.floor(t / 3), 120, 120), this.HeroImage2[t].pos(160 + 160 * Math.floor(t % 3), 520 + 160 * Math.floor(t / 3), 56, 100), this.HeroImage[t].pos(160 + 160 * Math.floor(t % 3), 508 + 160 * Math.floor(t / 3), 56, 100), this.UnlockImage[t].pos(160 + 160 * Math.floor(t % 3), 508 + 160 * Math.floor(t / 3), 120, 120)) : (this.RankImage[t].pos(this.StageWidth + 160 + 160 * Math.floor((t - 9) % 3), 508 + 160 * Math.floor((t - 9) / 3), 120, 120), this.HeroImage2[t].pos(this.StageWidth + 160 + 160 * Math.floor((t - 9) % 3), 520 + 160 * Math.floor((t - 9) / 3), 56, 100), this.HeroImage[t].pos(this.StageWidth + 160 + 160 * Math.floor((t - 9) % 3), 508 + 160 * Math.floor((t - 9) / 3), 56, 100), this.UnlockImage[t].pos(this.StageWidth + 160 + 160 * Math.floor((t - 9) % 3), 508 + 160 * Math.floor((t - 9) / 3), 120, 120)), this.HeroImage2[t].rotation = 45, this.HeroImage[t].rotation = 45;
            for (var t = 0; 18 > t; t++) 1 == this.NumLockTT[t] && (this.UnlockImage[t].visible = !1, egret.Tween.get(this.HeroImage[t], {
                loop: !0
            }).to({
                y: this.HeroImage[t].y + 6
            }, 1800, egret.Ease.getBackIn(-2)).to({
                y: this.HeroImage[t].y
            }, 1e3).to({}, 400));
            this.InterImage[8].pos(this.UnlockImage[this.NowHeroTT - 1].x, this.UnlockImage[this.NowHeroTT - 1].y, 120, 120), this.RankLayer.x = -this.ShopNum * this.StageWidth, this.RankLayer.height = 440, this.RankLayer.width = 2 * this.StageWidth;
            for (var t = 0; 3 > t; t++) this.UILabel[t].text = "3 / 10", this.UILabel[t].textColor = 16777215, this.UILabel[t].anchorOffsetY = this.UILabel[t].height / 2;
            this.UILabel[0].text = this.NumMoneyTT + "", this.UILabel[0].size = 34, this.UILabel[0].x = 148, this.UILabel[0].y = 60, this.UILabel[0].anchorOffsetX = 0, this.InterImage[12].visible = !1, this.UILabel[1].visible = !1, this.UILabel[1].size = 30, this.UILabel[1].x = 400, this.UILabel[1].y = 1046, this.UILabel[1].anchorOffsetX = this.UILabel[1].width / 2, this.UILabel[2].size = 26, this.UILabel[2].x = 320, this.UILabel[2].y = 405, this.UILabel[2].text = "Speed: " + (40 + 10 * this.NowHeroTT) + " km/h", this.UILabel[2].anchorOffsetX = this.UILabel[2].width / 2, this.InterImage[1].alpha = .4, egret.Tween.get(this.InterImage[1], {
                loop: !0
            }).to({
                rotation: -360
            }, 1e4), egret.Tween.get(this.InterImage[2], {
                loop: !0
            }).to({
                rotation: 360
            }, 1e4)
        } else if (1 == this.choose) {
            this.TouchNum = 0, this.MoneyNum = 0, this.RankNow = 0, this.RankNum = 0, this.TimerNum = 0, this.SoundNum = 0, this.MapNum = 0, this.StartNum = 0, this.HeroState = 0, this.PeopleNum = 0, this.PeopleNum2 = 0, this.PeopleNumState = 0, this.LevelNum = 0, this.LevelNum2 = 0, this.LevelNow = 0, this.TouchNow = 0, this.MapSpeed = 0, this.GameState = 0, this.MoveCanNot = 0, this.HeroTurnNum = 1, this.PeopleNow = [], this.MarkPointX = [], this.MarkPointY = [], this.BirthPointX = [], this.BirthPointY = [], this.BirthPointR = [], this.HouseState = [], this.LevelState = [], this.WorldStep = 30, this.world.gravity = [0, 0];
            for (var t = 0; 50 > t; t++) this.CarState[t] = 0;
            egret.TextField.default_fontFamily = "ziti", this.GameNum >= 3 ? this.InterImage[6].visible = !0 : this.InterImage[6].visible = !1, this.GameNum2 >= 4 ? this.InterImage[this.BlockNum + 9].visible = !0 : this.InterImage[this.BlockNum + 9].visible = !1, this.InterImage[0].pos(320, 166, 490, 150), this.InterImage[1].pos(320, 450, 304, 55), this.InterImage[2].pos(515, 988, 120, 128), this.InterImage[3].pos(125, 820, 120, 128), this.InterImage[4].pos(515, 820, 120, 128), this.InterImage[5].pos(125, 988, 120, 128), this.InterImage[6].pos(180, 929, 40, 40), this.InterImage[this.BlockNum + 9].pos(460, 765, 40, 40), egret.Tween.get(this.InterImage[1], {
                loop: !0
            }).to({
                alpha: .5
            }, 1500).to({
                alpha: 1
            }, 1500), 0 == this.PlatForm && egret.Tween.get(this.InterImage[3], {
                loop: !0
            }).to({
                scaleX: .95,
                scaleY: .95
            }, 600).to({
                scaleX: 1,
                scaleY: 1
            }, 600);
            for (var t = 7; t < this.BlockNum + 9; t++) this.InterImage[t].visible = !1, 7 == t ? this.InterImage[t].pos(216, 60, 54, 54) : t < this.BlockNum + 8 ? (this.InterImage[t].pos(230 + (t - 8) * (180 / this.BlockNum), 60, 180 / this.BlockNum, 30), this.InterImage[t].anchorOffsetX = 0) : this.InterImage[t].pos(424, 60, 54, 54);
            for (var t = 0; 2 > t; t++) this.UILabel[t].visible = !1, this.UILabel[t].text = this.NumGateTT + t + "", this.UILabel[t].size = 28, this.UILabel[t].textColor = 0, this.UILabel[t].y = 60, this.UILabel[t].anchorOffsetX = this.UILabel[t].width / 2, this.UILabel[t].anchorOffsetY = this.UILabel[t].height / 2;
            this.UILabel[0].x = this.InterImage[7].x, this.UILabel[1].x = this.InterImage[this.BlockNum + 8].x, this.UILabel[2].text = "LEVEL " + this.NumGateTT, this.UILabel[2].size = 26, this.UILabel[2].textColor = 16777215, this.UILabel[2].x = 320, this.UILabel[2].y = 120, this.UILabel[2].anchorOffsetX = this.UILabel[2].width / 2, this.UILabel[2].anchorOffsetY = this.UILabel[2].height / 2, this.UILabel[3].text = this.ToCity[Math.floor((this.NumGate - 1) / 4)] + "", this.UILabel[3].size = 40, this.UILabel[3].textColor = 16777215, this.UILabel[3].x = 320, this.UILabel[3].y = 166, this.UILabel[3].anchorOffsetX = this.UILabel[3].width / 2, this.UILabel[3].anchorOffsetY = this.UILabel[3].height / 2;
            var e = 4 * Math.floor((this.NumGateTT - 1) / 4) + 5;
            if (this.UILabel[4].text = "NEXT CITY NO LEVEL " + e, this.UILabel[4].size = 26, this.UILabel[4].textColor = 14851e3, this.UILabel[4].x = 320, this.UILabel[4].y = 212, this.UILabel[4].anchorOffsetX = this.UILabel[4].width / 2, this.UILabel[4].anchorOffsetY = this.UILabel[4].height / 2, this.NumGate > 13)
                for (var t = 0; 4 > t; t++) this.BgImage[t].pos(1024 + 2048 * Math.floor(t % 2), 1024 + 2048 * Math.floor(t / 2), 2049, 2049);
            else this.BgImage[0].pos(1024, 1024, 2049, 2049), this.BgImage[1].pos(1024, 3072, 2049, 2049);
            var a = this.GameDate.GetHeroPointX(),
                s = this.GameDate.GetHeroPointY();
            a < this.StageWidth / 2 ? this.MapLayer.x = 0 - this.iPhoneW : this.MapLayer.x = -a + 320, s > 4096 - this.StageHeight ? this.MapLayer.y = -(4096 - this.StageHeight) : this.MapLayer.y = -s + 428, this.NumGate > 13 ? this.MapLayer.width = 4096 : this.MapLayer.width = 2048, this.MapLayer.height = 4096, this.HeroLayer.x = a, this.HeroLayer.y = s + 140, this.HeroLayer.width = 56, this.HeroLayer.height = 100, this.HeroLayer.anchorOffsetX = this.HeroLayer.width / 2, this.HeroLayer.anchorOffsetY = this.HeroLayer.height / 2, this.HeroImage[3].visible = !1, this.HeroImage[1].pos(a, s + 140, 56, 100), this.HeroImage[2].pos(a, s + 140, 2, 2), this.HeroImage2[0].pos(a, s + 152, 56, 100), this.HeroImage[3].pos(28, 92, 53, 47), this.CreateHero(a, s + 140, 56, 100), this.Trailing.emitterX = this.HeroLayer.x, this.Trailing.emitterY = this.HeroLayer.y + 25, this.Trailing.start(), this.PlayGame();
            var i = this.Connect.getLoginDays();
            i >= 2 && 0 == this.NumLockTT[1] && (this.NumLockTT[1] = 1, this.SaveGameScore(), egret.setTimeout(this.ShowTipView, this, 500, "Unlock New Car Now !")), i >= 3 && 0 == this.NumLockTT[2] && (this.NumLockTT[2] = 1, this.SaveGameScore(), egret.setTimeout(this.ShowTipView, this, 500, "Unlock New Car Now !"));
            var o = RES.getRes("soundbg_mp3");
            this.Soundbg = o.play(0)
        }
    }, e.prototype.LoadResource = function() {
        if (0 == this.choose);
        else if (100 == this.choose) {
            for (var t = 0; 3 > t; t++) this.UILabel[t] = new egret.TextField;
            this.RankLayer = new egret.DisplayObjectContainer, this.InterImage[0] = new egret.Bitmap(RES.getRes("shopbg1_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("shoplight1_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("shoplight1_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("shoplight2_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("car11_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("car12_png")), this.InterImage[6] = new egret.Bitmap(RES.getRes("shopbtn1_png")), this.InterImage[7] = new egret.Bitmap(RES.getRes("shopbtn2_png")), this.InterImage[8] = new egret.Bitmap(RES.getRes("shopselect_png")), this.InterImage[9] = new egret.Bitmap(RES.getRes("shoppage1_png")), this.InterImage[10] = new egret.Bitmap(RES.getRes("shoppage1_png")), this.InterImage[11] = new egret.Bitmap(RES.getRes("nummoney_png")), this.InterImage[12] = new egret.Bitmap(RES.getRes("nummoney_png")), this.InterImage[13] = new egret.Bitmap(RES.getRes("shopfree_png"));
            for (var t = 0; 18 > t; t++) this.RankImage[t] = new egret.Bitmap(RES.getRes("shopbg2_png")), this.HeroImage2[t] = new egret.Bitmap(RES.getRes("car" + (t + 1) + "1_png")), this.HeroImage[t] = new egret.Bitmap(RES.getRes("car" + (t + 1) + "2_png")), this.UnlockImage[t] = new egret.Bitmap(RES.getRes("shopunlock_png"))
        } else if (1 == this.choose) {
            this.MapLayer = new egret.DisplayObjectContainer, this.HeroLayer = new egret.DisplayObjectContainer, this.NumGateTT > 80 ? this.NumGate = (this.NumGateTT - 80) % 70 + 10 : this.NumGate = this.NumGateTT, this.GameDate.SetGateMessage(this.NumGate), this.BlockNum = this.GameDate.GetBlockNum(), this.InterImage[0] = new egret.Bitmap(RES.getRes("titleview1_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("titlebtn1_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("titlebtn2_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("titlebtn3_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("titlebtn4_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("titlebtn5_png")), this.InterImage[6] = new egret.Bitmap(RES.getRes("titlewarn1_png")), this.InterImage[7] = new egret.Bitmap(RES.getRes("inter0_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("titlebtn2_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("titlebtn3_png"));
            for (var t = 8; t < this.BlockNum + 8; t++) this.InterImage[t] = new egret.Bitmap(RES.getRes("inter1_png"));
            this.InterImage[this.BlockNum + 8] = new egret.Bitmap(RES.getRes("inter4_png")), this.InterImage[this.BlockNum + 9] = new egret.Bitmap(RES.getRes("titlewarn2_png"));
            var e = 0;
            e = this.NumGate > 13 ? 4 : 2;
            for (var t = 0; e > t; t++) this.BgImage[t] = new egret.Bitmap(RES.getRes("mapbg_png"));
            this.HeroImage[1] = new egret.Bitmap(RES.getRes("car" + this.NowHeroTT + "2_png")), this.HeroImage[2] = new egret.Bitmap(RES.getRes("car12_png")), this.HeroImage[3] = new egret.Bitmap(RES.getRes("herobrake_png")), this.HeroImage2[0] = new egret.Bitmap(RES.getRes("car" + this.NowHeroTT + "1_png"));
            for (var t = 0; 5 > t; t++) this.UILabel[t] = new egret.TextField;
            this.Trailing = new particle.GravityParticleSystem(RES.getRes("trailing_png"), RES.getRes("trailing_json"))
        }
    }, e.prototype.PutThePicture = function() {
        if (this.LoadResource(), 0 == this.choose);
        else if (100 == this.choose) {
            for (var t = 0; 14 > t; t++) this.addChild(this.InterImage[t]);
            for (var t = 0; 3 > t; t++) this.addChild(this.UILabel[t]);
            this.addChild(this.RankLayer);
            for (var t = 0; 18 > t; t++) this.RankLayer.addChild(this.RankImage[t]), this.RankLayer.addChild(this.HeroImage2[t]), this.RankLayer.addChild(this.HeroImage[t]), this.RankLayer.addChild(this.UnlockImage[t]), this.RankLayer.addChild(this.InterImage[8])
        } else if (1 == this.choose) {
            this.addChild(this.MapLayer);
            for (var t = 0; t < this.GameDate.GetBlockNum() + 9; t++) this.addChild(this.InterImage[t]);
            this.addChild(this.InterImage[this.BlockNum + 9]), this.setChildIndex(this.InterImage[7], 9);
            for (var t = 0; 5 > t; t++) this.addChild(this.UILabel[t]);
            var e = 0;
            e = this.NumGate > 13 ? 4 : 2;
            for (var t = 0; e > t; t++) this.MapLayer.addChild(this.BgImage[t]);
            this.MapLayer.addChild(this.HeroImage2[0]), this.MapLayer.addChild(this.Trailing), this.MapLayer.addChild(this.HeroLayer), this.HeroLayer.addChild(this.HeroImage[3]), this.MapLayer.addChild(this.HeroImage[2]), this.MapLayer.addChild(this.HeroImage[1])
        }
    }, e.prototype.ReleaseGame = function() {
        0 == this.choose || 1 == this.choose && (this.Soundbg.stop(), this.world.clear());
        for (var t = 0; t <= this.TimerNum; t++) egret.clearTimeout(t);
        egret.Tween.removeAllTweens(), this.removeChildren()
    }, e.prototype.TimerTick = function() {
        0 == this.choose || 100 == this.choose || 1 == this.choose && (0 == this.GameState || (1 == this.GameState ? (this.HeroTurn(), this.DrawHero(), this.DrawMap(), this.CheckImage()) : 2 == this.GameState && 0 == this.TurnNum && (this.PeopleNumState++, this.PeopleNumState % 3 == 1 && (this.ShopNum += this.StartNum, this.ShopNum >= this.MoneyNum && (this.ShopNum = this.MoneyNum, this.TurnNum = 1), this.AssEssLabel[1].text = "$" + Math.floor(this.ShopNum), this.AssEssLabel[1].anchorOffsetX = this.AssEssLabel[1].width / 2))))
    }, e.prototype.DrawAction = function() {
        0 == this.choose || 1 == this.choose, this.CheckADVideo()
    }, e.prototype.DrawMap = function() {
        if (1 != this.TouchNum && this.LevelNow <= 2 * this.BlockNum) {
            var t = 0;
            t = this.NumGate > 13 ? 4096 : 2048, this.HeroLayer.x > this.StageWidth / 2 && this.HeroLayer.x < t - this.StageWidth / 2 && (this.MapLayer.x = -this.HeroLayer.x + 320), this.HeroLayer.y <= 3528 && this.HeroLayer.y >= 568 && (this.MapLayer.y = -this.HeroLayer.y + 568)
        }
    }, e.prototype.HeroTurn = function() {
        1 != this.TouchNum && (1 == this.HeroTurnNum || (2 == this.HeroTurnNum || 5 == this.HeroTurnNum ? this.HeroLayer.rotation -= .273 * this.MapSpeed : (3 == this.HeroTurnNum || 4 == this.HeroTurnNum) && (this.HeroLayer.rotation += .273 * this.MapSpeed)))
    }, e.prototype.DrawHero = function() {
        if (this.DrawPeople(), 1 != this.TouchNum) {
            0 == this.TouchNow ? (0 == this.HeroImage[3].visible && (this.HeroImage[3].visible = !0), this.MapSpeed > 1.5 ? this.MapSpeed -= .8 : this.MapSpeed = 1.5) : 1 == this.TouchNow ? (1 == this.HeroImage[3].visible && (this.HeroImage[3].visible = !1), this.MapSpeed < 12.5 + .35 * this.NowHeroTT ? this.MapSpeed += .5 : this.MapSpeed = 12.5 + .35 * this.NowHeroTT) : this.MapSpeed = 0, this.HeroLayer.x += this.MapSpeed * Math.sin(this.HeroLayer.rotation * Math.PI / 180), this.HeroLayer.y -= this.MapSpeed * Math.cos(this.HeroLayer.rotation * Math.PI / 180), 0 == this.HeroState ? (this.HeroBody.position[0] = this.HeroLayer.x / this.factor, this.HeroBody.position[1] = (this.StageHeight - this.HeroLayer.y) / this.factor, this.HeroBody.angle = -this.HeroLayer.rotation / 180 * Math.PI, this.HeroBody.updateAABB()) : (this.WorldStep *= .96, this.HeroLayer.x = this.HeroImage[0].x, this.HeroLayer.y = this.HeroImage[0].y, this.HeroLayer.rotation = this.HeroImage[0].rotation, this.WorldStep < 1 && this.ShowFail()), this.Trailing.emitterX = this.HeroLayer.x - 25 * Math.sin(this.HeroLayer.rotation / 180 * Math.PI), this.Trailing.emitterY = this.HeroLayer.y + 25 * Math.cos(this.HeroLayer.rotation / 180 * Math.PI), this.HeroImage2[0].x = this.HeroLayer.x, this.HeroImage2[0].y = this.HeroLayer.y + 12, this.HeroImage2[0].rotation = this.HeroLayer.rotation;
            for (var t = 1; 3 > t; t++) this.HeroImage[t].x = this.HeroLayer.x, this.HeroImage[t].y = this.HeroLayer.y, this.HeroImage[t].rotation = this.HeroLayer.rotation
        }
    }, e.prototype.DrawPeople = function() {
        if (!(this.LevelNow / 2 >= this.BlockNum) && 1 == this.TouchNum) {
            if (this.PeopleNumState++, 0 != this.LevelNow) var t = this.LevelNow / 2;
            else var t = 0;
            this.PeopleImage[t].texture = RES.getRes("people" + this.PeopleNow[t] + (Math.floor(this.PeopleNumState / 15) % 2 + 1) + "_png")
        }
    }, e.prototype.TimerCar = function(t, e, a) {
        if (1 == this.choose && 1 != this.HeroState && 2 != this.GameState) {
            for (var s = -1, i = 0; 50 > i; i++)
                if (0 == this.CarState[i]) {
                    s = i;
                    break
                }
            if (-1 != s) {
                this.CarState[s] = 1;
                var o = Math.randInt(1, 6);
                this.CarImage2[s] = new egret.Bitmap(RES.getRes("crash" + o + "1_png")), this.MapLayer.addChildAt(this.CarImage2[s], this.MapLayer.getChildIndex(this.HeroImage2[0])), this.CarImage2[s].rotation = a + 90;
                var r = 0,
                    n = 0;
                0 == a ? n = 35 : 90 == a ? r = -35 : 180 == a || -180 == a ? n = -35 : -90 == a && (r = 35), this.CarImage2[s].pos(t + r, e + n, 56, 100), this.CreateCar(t + r, e + n, a + 90, s, "crash" + o + "2_png"), this.TimerNum = egret.setTimeout(this.TimerCar, this, Math.randInt(3e3, 5e3), t, e, a)
            }
        }
    }, e.prototype.DrawCar = function() {
        for (var t = 0; 50 > t; t++)
            if (this.CarState[t] >= 1 && (this.CarImage2[t].x = this.CarImage[t].x, this.CarImage2[t].y = this.CarImage[t].y + 10, this.CarImage2[t].rotation = this.CarImage[t].rotation, 1 == this.CarState[t])) {
                var e = Math.abs(this.CarImage2[t].x - this.HeroImage2[0].x),
                    a = Math.abs(this.CarImage2[t].y - this.HeroImage2[0].y);
                if (18e3 > e * e + a * a) {
                    var s = RES.getRes("soundbeep_mp3");
                    s.play(0, 1), this.CarState[t] = 2
                }
            }
    }, e.prototype.CheckImage = function() {
        for (var t = this, e = 0; e < this.MapNum; e++) {
            var a = this.GameDate.GetBlockMessage(e),
                s = this.GameDate.GetBlockMessageR(e);
            if (0 == this.MapState[e] && this.ImageInImage(this.HeroImage[2], this.MapImage[e]))
                if (this.MapState[e] = 1, 1 == a && 1 != this.HeroTurnNum) this.HeroLayer.rotation = 90 * Math.round(this.HeroLayer.rotation / 90), this.HeroTurnNum = 1;
                else if (2 == a) {
                this.TouchNum = 1, this.PeopleNumState = 0, this.HeroImage[3].visible = !0, this.LevelNum2++, this.NumPeopleTT++;
                var i = RES.getRes("soundpick_mp3");
                i.play(0, 1);
                var o = this.LookPoint(),
                    r = 0,
                    n = 0;
                1 == o ? r = 26 : 2 == o ? r = -26 : 3 == o ? n = 26 : 4 == o && (n = -26), egret.Tween.get(this.PeopleImage[this.LevelNow / 2]).to({
                    x: this.HeroLayer.x + r,
                    y: this.HeroLayer.y + n
                }, 1200).to({
                    alpha: 0
                }, 300), egret.setTimeout(function() {
                    var e = RES.getRes("sounddoor1_mp3");
                    if (e.play(0, 1), egret.setTimeout(function() {
                            var t = RES.getRes("sounddoor2_mp3");
                            t.play(0, 1)
                        }, t, 100), t.InterImage[8 + t.LevelNow / 2].texture = RES.getRes("inter2_png"), t.TouchNum = 0, t.MapSpeed = 1.5, 1 == t.TouchNow) {
                        var e = RES.getRes("soundstart_mp3");
                        e.play(0, 1)
                    }
                }, this, 1500)
            } else if (3 == a) {
                this.TouchNum = 1, this.PeopleNumState = 0, this.HeroImage[3].visible = !0, this.NumPickTT += 1;
                var i = RES.getRes("sounddrop_mp3");
                i.play(0, 1);
                var r = 0,
                    n = 0,
                    h = 0,
                    l = 0;
                if (this.LevelNum2 >= this.BlockNum) this.EndedX - this.HeroLayer.x > 100 ? (h = 140, r = 26, this.PeopleImage[this.LevelNow / 2].rotation = 0) : this.HeroLayer.x - this.EndedX > 100 ? (h = -140, r = -26, this.PeopleImage[this.LevelNow / 2].rotation = -180) : this.EndedY - this.HeroLayer.y > 100 ? (n = 26, l = 140, this.PeopleImage[this.LevelNow / 2].rotation = 90) : this.HeroLayer.y - this.EndedY > 100 && (n = -26, l = -140, this.PeopleImage[this.LevelNow / 2].rotation = -90);
                else {
                    var o = this.LookPoint();
                    1 == o ? (r = 26, h = 140, this.PeopleImage[this.LevelNow / 2].rotation = 0) : 3 == o ? (n = 26, l = 140, this.PeopleImage[this.LevelNow / 2].rotation = 90) : 2 == o ? (r = -26, h = -140, this.PeopleImage[this.LevelNow / 2].rotation = -180) : 4 == o && (n = -26, l = -140, this.PeopleImage[this.LevelNow / 2].rotation = -90)
                }
                this.PeopleImage[this.LevelNow / 2].alpha = 1, this.PeopleImage[this.LevelNow / 2].x = this.HeroLayer.x + r, this.PeopleImage[this.LevelNow / 2].y = this.HeroLayer.y + n, egret.Tween.get(this.PeopleImage[this.LevelNow / 2]).to({
                    x: this.HeroLayer.x + h,
                    y: this.HeroLayer.y + l
                }, 1200), egret.setTimeout(function() {
                    t.TouchNum = 0, t.MapSpeed = 1.5, t.InterImage[8 + t.LevelNow / 2].texture = RES.getRes("inter3_png"), t.LevelNow += 2;
                    var e = new particle.GravityParticleSystem(RES.getRes("money_png"), RES.getRes("money_json"));
                    t.MapLayer.addChild(e), e.emitterX = t.HeroImage[1].x, e.emitterY = t.HeroImage[1].y, e.start(), e.emissionTime = 100;
                    var a = RES.getRes("soundadd_mp3");
                    a.play(0, 1);
                    var s = Math.randInt(20, 50),
                        i = new egret.TextField;
                    t.MapLayer.addChild(i), i.text = "+" + s, i.size = 40, i.scaleX = .3, i.scaleY = .3, i.textColor = 16777215, i.stroke = 2, i.strokeColor = 0, i.x = t.HeroLayer.x, i.y = t.HeroLayer.y - 70, i.anchorOffsetX = i.width / 2, i.anchorOffsetY = i.height / 2, egret.Tween.get(i).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(i).to({
                        alpha: 1
                    }, 300).to({}, 800).to({
                        y: i.y - 80,
                        alpha: 0
                    }, 500);
                    for (var o = [], r = 3; 18 > r; r++) 0 == t.NumLockTT[r] && o.push(r);
                    var n = 0;
                    if (t.NumMoneyTT < t.HeroPrice[o[0]] && (n = 1), t.NumMoneyTT += s, t.NumGoldTT += s, t.MoneyNum += s, 0 != o.length && t.NumMoneyTT >= t.HeroPrice[o[0]] && 1 == n && (t.GameNum2 = 4), 1 == t.TouchNow) {
                        var a = RES.getRes("soundstart_mp3");
                        a.play(0, 1)
                    }
                }, this, 600), this.LevelNum2 < this.BlockNum && egret.setTimeout(this.ShowTalk, this, Math.randInt(2e3, 2e3), this.StartTalk[Math.randInt(0, 5)])
            } else if (4 == a) this.HeroLayer.rotation = 90 * Math.round(this.HeroLayer.rotation / 90), 180 == s || -180 == s || -90 == s ? this.GameDate.GetBlockMessageX(e) > this.HeroLayer.x ? this.HeroTurnNum = 3 : this.HeroTurnNum = 5 : (0 == s || 90 == s) && (this.GameDate.GetBlockMessageX(e) > this.HeroLayer.x ? this.HeroTurnNum = 5 : this.HeroTurnNum = 3);
            else if (10 == a) egret.Tween.get(this.UnlockImage[0]).to({
                scaleX: 1.5,
                scaleY: 1.5,
                alpha: 0
            }, 400);
            else if (11 == a) {
                var i = RES.getRes("soundwin_mp3");
                i.play(0, 1), this.TouchNow = 0, this.MoveCanNot = 1, egret.Tween.get(this.UnlockImage[1]).to({
                    scaleX: 1.5,
                    scaleY: 1.5,
                    alpha: 0
                }, 400), this.InterImage[8 + this.BlockNum].texture = RES.getRes("inter0_png"), this.LevelNow += 1, egret.setTimeout(function() {
                    t.ShowResult()
                }, this, 2e3)
            }
        }
        for (var e = 0; e < this.LevelNum; e++) 0 == this.LevelState[e] && this.ImageInImage(this.HeroImage[2], this.MarkImage[e]) && (this.LevelState[e] = 1, egret.Tween.get(this.MarkImage[e + 1]).to({
            scaleX: 1.6,
            scaleY: 1.6,
            alpha: 0
        }, 400), egret.Tween.get(this.MarkImage[e]).to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: 0
        }, 400))
    }, e.prototype.LookPoint = function() {
        for (var t = [], e = 0; e < this.MarkPointX.length; e++)
            if (0 == this.HouseState[e] && Math.abs(this.MarkPointX[e] - this.HeroLayer.x) <= 250 && Math.abs(this.MarkPointY[e] - this.HeroLayer.y) <= 250) {
                t[0] = this.MarkPointX[e], t[1] = this.MarkPointY[e], this.HouseState[e] = 1;
                break
            }
        return t[0] > this.HeroLayer.x + 40 && Math.abs(t[1] - this.HeroLayer.y) < 20 ? 1 : t[0] < this.HeroLayer.x - 40 && Math.abs(t[1] - this.HeroLayer.y) < 20 ? 2 : t[1] > this.HeroLayer.y + 40 && Math.abs(t[0] - this.HeroLayer.x) < 20 ? 3 : t[1] < this.HeroLayer.y - 40 && Math.abs(t[0] - this.HeroLayer.x) < 20 ? 4 : 5
    }, e.prototype.PlayGame = function() {
        for (var t = [], e = [], a = [], s = [], i = [], o = [], r = [], n = [], h = 0; h < this.GameDate.GetLengthMessage(); h++) {
            var l = this.GameDate.GetBlockMessageX(h),
                c = this.GameDate.GetBlockMessageY(h),
                u = this.GameDate.GetBlockMessageR(h),
                p = this.GameDate.GetBlockMessage(h);
            if (2 == p || 3 == p) {
                this.MarkImage[this.LevelNum] = new egret.Bitmap(RES.getRes("map2-1_png")), this.MapLayer.addChildAt(this.MarkImage[this.LevelNum], this.MapLayer.getChildIndex(this.HeroImage2[0]));
                var g = 0,
                    m = 0,
                    d = 0,
                    f = 0;
                0 == u ? (m = 70, f = -20) : 90 == u ? (g = -70, d = 20) : -90 == u ? (g = 70, d = -20) : (180 == u || -180 == u) && (m = -70, f = 20), this.MarkImage[this.LevelNum].pos(l + g, c + m, 40, 40), this.MarkImage[this.LevelNum + 1] = new egret.Bitmap(RES.getRes("map" + p + "_png")), this.MapLayer.addChildAt(this.MarkImage[this.LevelNum + 1], this.MapLayer.getChildIndex(this.HeroImage[1])), this.MarkImage[this.LevelNum + 1].pos(l, c, 140, 140), this.MarkImage[this.LevelNum + 1].rotation = u, this.LevelState[this.LevelNum] = 0, this.LevelState[this.LevelNum + 1] = 1, egret.Tween.get(this.MarkImage[this.LevelNum + 1], {
                    loop: !0
                }).to({
                    y: c + f,
                    x: l + d
                }, 500).to({
                    y: c,
                    x: l
                }, 500, egret.Ease.getBackIn(-1)), this.LevelNum += 2, this.MapImage[this.MapNum] = new egret.Bitmap(RES.getRes("map" + p + "_png")), this.MapLayer.addChildAt(this.MapImage[this.MapNum], this.MapLayer.getChildIndex(this.HeroImage[1])), this.MapImage[this.MapNum].pos(l, c, 140, 140), this.MapImage[this.MapNum].rotation = u, this.MapImage[this.MapNum].visible = !1, this.MapState[this.MapNum] = 0, 2 == p ? (t.push(l), e.push(c), s.push(u)) : 3 == p && (i.push(l), o.push(c)), this.MapNum++
            } else if (7 == p || 8 == p || 17 == p || 18 == p) this.MapImage[this.MapNum] = new egret.Bitmap(RES.getRes("map" + p + "_png")), this.MapLayer.addChildAt(this.MapImage[this.MapNum], this.MapLayer.getChildIndex(this.HeroImage2[0])), this.MapImage[this.MapNum].pos(l, c, this.MapImage[this.MapNum].width, this.MapImage[this.MapNum].height), this.MapImage[this.MapNum].rotation = u, this.MapState[this.MapNum] = 1, this.MapNum++, this.MarkPointX.push(l), this.MarkPointY.push(c), this.HouseState.push(0), a.push(u), r.push(0), n.push(p), this.PeopleNum % 2 == 0, this.PeopleNum++;
            else if (5 == p || 6 == p || 9 == p || p >= 12 && 17 > p) {
                if (9 == p) {
                    this.MapImage[this.MapNum] = new egret.Bitmap(RES.getRes("map9-1_png")), this.MapLayer.addChildAt(this.MapImage[this.MapNum], this.MapLayer.getChildIndex(this.HeroImage2[0])), this.MapImage[this.MapNum].pos(l, c, 280, 420), this.MapImage[this.MapNum].rotation = u;
                    var g = 0,
                        m = 0;
                    0 == u ? g = -70 : 180 == u || -180 == u ? g = 70 : 90 == u ? m = -70 : -90 == u && (m = 70), this.CreateRect(l + g, c + m, u), this.MapImage[this.MapNum] = new egret.Bitmap(RES.getRes("map9-2_png")), this.MapLayer.addChildAt(this.MapImage[this.MapNum], this.MapLayer.getChildIndex(this.MapImage[this.MapNum])), this.MapImage[this.MapNum].pos(l, c, 280, 420), this.MapImage[this.MapNum].rotation = u, this.BirthPointX.push(l), this.BirthPointY.push(c), this.BirthPointR.push(u)
                } else this.MapImage[this.MapNum] = new egret.Bitmap(RES.getRes("map" + p + "_png")), p >= 12 && 17 > p ? this.MapLayer.addChildAt(this.MapImage[this.MapNum], this.MapLayer.getChildIndex(this.MapImage[0])) : this.MapLayer.addChildAt(this.MapImage[this.MapNum], this.MapLayer.getChildIndex(this.HeroImage2[0])), this.MapImage[this.MapNum].pos(l, c, this.MapImage[this.MapNum].width, this.MapImage[this.MapNum].height), this.MapImage[this.MapNum].rotation = u;
                p >= 12 && 17 > p && (this.EndedX = l, this.EndedY = c), this.MapState[this.MapNum] = 1, this.MapNum++
            } else this.MapImage[this.MapNum] = new egret.Bitmap(RES.getRes("map" + p + "_png")), 10 == p || 11 == p ? (this.MapLayer.addChildAt(this.MapImage[this.MapNum], this.MapLayer.getChildIndex(this.HeroImage[1])), 10 == p ? (this.UnlockImage[0] = new egret.Bitmap(RES.getRes("map10-1_png")), this.MapLayer.addChildAt(this.UnlockImage[0], this.MapLayer.getChildIndex(this.HeroImage[1])), this.UnlockImage[0].alpha = 0, this.UnlockImage[0].pos(l, c, 140, 140), this.UnlockImage[0].rotation = u) : 11 == p && (this.UnlockImage[1] = new egret.Bitmap(RES.getRes("map11-1_png")), this.MapLayer.addChildAt(this.UnlockImage[1], this.MapLayer.getChildIndex(this.HeroImage[1])), this.UnlockImage[1].pos(l, c, 140, 140), this.UnlockImage[1].rotation = u)) : this.MapLayer.addChildAt(this.MapImage[this.MapNum], this.MapLayer.getChildIndex(this.HeroImage2[0])), this.MapImage[this.MapNum].pos(l, c, this.MapImage[this.MapNum].width, this.MapImage[this.MapNum].height), this.MapImage[this.MapNum].rotation = u, this.MapState[this.MapNum] = 0, this.MapNum++
        }
        for (var h = 0; h < this.BirthPointX.length; h++) this.TimerCar(this.BirthPointX[h], this.BirthPointY[h], this.BirthPointR[h]);
        for (var h = 0; h < t.length; h++)
            for (var y = 0; y < this.MarkPointX.length; y++) {
                var I = t[h] - this.MarkPointX[y],
                    _ = e[h] - this.MarkPointY[y],
                    S = i[h] - this.MarkPointX[y],
                    v = o[h] - this.MarkPointY[y];
                if (Math.sqrt(S * S + v * v) <= 223 && (r[y] = 1), 0 == r[y] && Math.sqrt(I * I + _ * _) <= 223) {
                    var k = Math.floor(5 * Math.random() + 1);
                    this.PeopleNow.push(k), this.PeopleImage[this.PeopleNum2] = new egret.Bitmap(RES.getRes("people" + k + "1_png")), this.MapLayer.addChild(this.PeopleImage[this.PeopleNum2]);
                    var R = 0,
                        B = 0;
                    (7 == n[y] || 17 == n[y] || 18 == n[y]) && (0 == a[y] ? R = 70 : 90 == a[y] ? B = 70 : 180 == a[y] || -180 == a[y] ? R = -70 : -90 == a[y] && (B = -70)), this.PeopleImage[this.PeopleNum2].pos(this.MarkPointX[y] + R, this.MarkPointY[y] + B, 40, 46), this.PeopleImage[this.PeopleNum2].rotation = a[y], this.PeopleNum2++
                }
            }
        this.PeopleNum = 0
    }, e.prototype.CreateWorld = function() {
        this.world = new p2.World({
            gravity: [0, 0]
        }), this.world.on("beginContact", this.BeginContact, this), this.world.defaultContactMaterial.friction = 0, egret.Ticker.getInstance().register(function(t) {
            this.world.step(this.WorldStep / 1e3);
            for (var e = this.world.bodies.length, a = 0; e > a; a++) {
                var s = this.world.bodies[a],
                    i = s.displays[0];
                i && (i.x = s.position[0] * this.factor, i.y = this.StageHeight - s.position[1] * this.factor, i.rotation = 360 - 180 * s.angle / Math.PI)
            }
            1 == this.choose && this.DrawCar()
        }, this)
    }, e.prototype.BeginContact = function(t) {
        var e = t.bodyA,
            a = t.bodyB;
        if (-1 == e.id && a.id >= 10);
        else if (e.id >= 10 && -1 == a.id) {
            this.TouchNow = 2, this.HeroBody.velocity[1] = 1;
            var s = t.contactEquations[0];
            if (-1 == s.bodyA) var i = s.contactPointA[0] * this.factor,
                o = s.contactPointA[1] * this.factor;
            else var i = s.contactPointB[0] * this.factor,
                o = s.contactPointB[1] * this.factor;
            if (0 == this.HeroState) {
                var r = RES.getRes("soundcollision_mp3");
                r.play(0, 1);
                var n = new egret.Bitmap(RES.getRes("bump_png"));
                this.MapLayer.addChild(n), n.pos(this.HeroLayer.x + i, this.HeroLayer.y - o, 56, 56), n.scaleX = 0, n.scaleY = 0, egret.Tween.get(n).to({
                    scaleX: 2.5,
                    scaleY: 2.5
                }, 400).to({
                    alpha: 0
                }, 200)
            }
            this.HeroState = 1
        } - 2 == e.id && a.id >= 10 ? (this.world.removeBody(a), this.MapLayer.removeChild(a.displays[0]), this.MapLayer.removeChild(this.CarImage2[a.id - 10]), this.CarState[a.id - 10] = 0) : -2 == a.id && e.id >= 10 && (this.world.removeBody(e), this.MapLayer.removeChild(e.displays[0]), this.MapLayer.removeChild(this.CarImage2[e.id - 10]), this.CarState[e.id - 10] = 0), e.id >= 10 && a.id >= 10 && 0 == this.HeroState && (this.world.removeBody(a), this.MapLayer.removeChild(a.displays[0]), this.MapLayer.removeChild(this.CarImage2[a.id - 10]), this.CarState[a.id - 10] = 0, this.world.removeBody(e), this.MapLayer.removeChild(e.displays[0]), this.MapLayer.removeChild(this.CarImage2[e.id - 10]), this.CarState[e.id - 10] = 0, console.log("执行了  尴尬!!"))
    }, e.prototype.CreateHero = function(t, e, a, s) {
        this.HeroImage[0] = new egret.Bitmap(RES.getRes("car12_png")), this.HeroImage[0].pos(t, e, 56, 100), this.MapLayer.addChild(this.HeroImage[0]), this.HeroImage[0].visible = !1, this.HeroBody = new p2.Body({
            mass: 1,
            position: [t / this.factor, (this.StageHeight - e) / this.factor]
        }), this.HeroShape = new p2.Rectangle(50 / this.factor, 90 / this.factor), this.HeroBody.addShape(this.HeroShape), this.HeroBody.displays = [this.HeroImage[0]], this.HeroBody.id = -1, this.HeroBody.damping = 0, this.world.addBody(this.HeroBody)
    }, e.prototype.CreateCar = function(t, e, a, s, i) {
        this.CarImage[s] = new egret.Bitmap(RES.getRes(i)), this.MapLayer.addChildAt(this.CarImage[s], this.MapLayer.getChildIndex(this.HeroImage[1])), this.CarImage[s].pos(t, e, 56, 100), this.CarBody[s] = new p2.Body({
            mass: 1,
            position: [t / this.factor, (this.StageHeight - e) / this.factor],
            sensor: 1
        }), this.CarShape[s] = new p2.Rectangle(50 / this.factor, 90 / this.factor), this.CarBody[s].addShape(this.CarShape[s]), this.CarBody[s].displays = [this.CarImage[s]], this.CarBody[s].id = 10 + s, this.CarBody[s].damping = 0, this.CarBody[s].angle = -a / 180 * Math.PI;
        var o = a - 90;
        0 == o ? this.CarBody[s].velocity[0] = 4 : 90 == o ? this.CarBody[s].velocity[1] = -4 : -180 == o || 180 == o ? this.CarBody[s].velocity[0] = -4 : -90 == o && (this.CarBody[s].velocity[1] = 4), this.world.addBody(this.CarBody[s])
    }, e.prototype.CreateRect = function(t, e, a) {
        var s = new egret.Bitmap(RES.getRes("map1_png"));
        this.MapLayer.addChildAt(s, this.MapLayer.getChildIndex(this.HeroImage[1])), s.pos(t, e, 20, 100), s.visible = !1;
        var i = new p2.Body({
                mass: 1,
                position: [t / this.factor, (this.StageHeight - e) / this.factor],
                sensor: 1
            }),
            o = new p2.Rectangle(20 / this.factor, 100 / this.factor);
        i.addShape(o), i.displays = [s], i.id = -2, o.sensor = !0, i.angle = -a / 180 * Math.PI, this.world.addBody(i)
    }, e.prototype.ShowTipView = function(t) {
        var e = new egret.Bitmap(RES.getRes("showtipsbg_png"));
        this.addChild(e), e.alpha = 0, e.scaleX = .3, e.scaleY = .3, e.pos(320, 500, 432, 82);
        var a = new egret.TextField;
        this.addChild(a), a.size = 28, a.x = 320, a.y = 500, a.text = t, a.textColor = 862853, a.alpha = 0, a.scaleX = .3, a.scaleY = .3, a.anchorOffsetX = a.width / 2, a.anchorOffsetY = a.height / 2, egret.Tween.get(e).to({
            scaleX: 1,
            scaleY: 1
        }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(a).to({
            scaleX: 1,
            scaleY: 1
        }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(e).to({
            alpha: 1
        }, 300).to({}, 800).to({
            y: e.y - 120,
            alpha: 0
        }, 500), egret.Tween.get(a).to({
            alpha: 1
        }, 300).to({}, 800).to({
            y: a.y - 120,
            alpha: 0
        }, 500);
        var s = RES.getRes("soundwarn_mp3");
        s.play(0, 1)
    }, e.prototype.ShowTalk = function(t) {
        var e = new egret.DisplayObjectContainer;
        this.addChild(e), e.scaleX = 0, e.scaleY = 0, e.width = 470, e.height = 110, e.x = 320, e.y = 150, e.anchorOffsetX = 235, e.anchorOffsetY = 55;
        var a = new egret.Bitmap(RES.getRes("gameview_png"));
        e.addChild(a), a.pos(235, 55, 470, 110);
        var s = new egret.Bitmap(RES.getRes("people" + this.PeopleNow[this.LevelNow / 2] + "_png"));
        e.addChild(s), s.pos(74, 48, 82, 82);
        var i = new egret.TextField;
        e.addChild(i), i.size = 30, i.x = 294, i.y = 55, i.text = t, i.textColor = 16777215, i.anchorOffsetX = i.width / 2, i.anchorOffsetY = i.height / 2, egret.Tween.get(e).to({
            scaleX: 1,
            scaleY: 1
        }, 600, egret.Ease.getBackOut(1)).to({}, 1500).to({
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        }, 400, egret.Ease.getBackIn(1));
        var o = RES.getRes("soundmessage_mp3");
        o.play(0, 1), this.PeopleNum++
    }, e.prototype.ShowAssess = function() {
        this.RankNow = 1, this.TouchNum = 0, this.RankImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), this.RankImage[1] = new egret.Bitmap(RES.getRes("result_png")), this.RankImage[2] = new egret.Bitmap(RES.getRes("shopbtn1_png")), this.RankImage[3] = new egret.Bitmap(RES.getRes("titlebtn3_png")), this.RankImage[4] = new egret.Bitmap(RES.getRes("nummoney_png")), this.ScoreLabel = new egret.TextField;
        for (var t = 0; 5 > t; t++) this.addChild(this.RankImage[t]);
        this.addChild(this.ScoreLabel), this.ScoreLabel.x = 155, this.ScoreLabel.y = 60, this.ScoreLabel.size = 36, this.ScoreLabel.textColor = 16777215, this.ScoreLabel.text = "" + this.NumMoneyTT, this.ScoreLabel.anchorOffsetX = 0, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2;
        for (var t = 0; 5 > t; t++) this.AssEssLabel[t] = new egret.TextField, this.addChild(this.AssEssLabel[t]), this.AssEssLabel[t].text = "1200 KM" + this.NumMoneyTT, this.AssEssLabel[t].x = 375, this.AssEssLabel[t].y = 342 + 78 * t, this.AssEssLabel[t].size = 30, this.AssEssLabel[t].textColor = 0, this.AssEssLabel[t].anchorOffsetX = 0, this.AssEssLabel[t].anchorOffsetY = this.AssEssLabel[t].height / 2;
        var e = 0,
            a = 0;
        0 != this.NumPeopleTT && (e = (this.NumPeopleTT - this.NumDeadTT) / this.NumPeopleTT, a = Math.floor(this.NumDeadTT / this.NumPeopleTT * 100)), this.AssEssLabel[0].text = this.NumPeopleTT + "", this.AssEssLabel[1].text = this.NumGoldTT + " $", this.AssEssLabel[2].text = 6 * this.NumPeopleTT + " KM", this.AssEssLabel[3].text = this.NumDeadTT + " ", this.AssEssLabel[4].text = " (" + a + "%)", this.AssEssLabel[4].size = 24, this.AssEssLabel[4].x = 375 + this.AssEssLabel[3].width / 2, this.AssEssLabel[4].y = this.AssEssLabel[3].y + this.AssEssLabel[3].height / 2, this.AssEssLabel[4].anchorOffsetY = this.AssEssLabel[4].height, e >= .9 ? this.TouchNum = 4 : e > .7 ? this.TouchNum = 3 : e > .6 ? this.TouchNum = 2 : e > .3 ? this.TouchNum = 1 : this.TouchNum = 0;
        for (var t = 5; t < 6 + this.TouchNum; t++) this.RankImage[t] = new egret.Bitmap(RES.getRes("resultstar_png")), this.addChild(this.RankImage[t]), this.RankImage[t].pos(393 + 39 * (t - 6), 652, 34, 31);
        this.RankImage[0].pos(320, 568, this.StageWidth + 30, this.StageHeight + 30), this.RankImage[1].pos(320, 460, 480, 485), this.RankImage[2].pos(220, 868, 120, 128), this.RankImage[3].pos(420, 868, 120, 128), this.RankImage[4].pos(100, 60, 64, 56)
    }, e.prototype.EndAssEss = function() {
        this.RankNow = 0;
        for (var t = 0; t < 6 + this.TouchNum; t++) this.removeChild(this.RankImage[t]);
        for (var t = 0; 5 > t; t++) this.removeChild(this.AssEssLabel[t]);
        this.removeChild(this.ScoreLabel)
    }, e.prototype.ShowRank = function() {
        this.RankNow = 2, this.RankLayer = new egret.DisplayObjectContainer, this.Scroller = new egret.ScrollView, this.RankImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), 0 == this.RankNum ? this.RankImage[1] = new egret.Bitmap(RES.getRes("rankbtn2_png")) : this.RankImage[1] = new egret.Bitmap(RES.getRes("rankbtn1_png")), this.RankImage[2] = new egret.Bitmap(RES.getRes("shopbtn1_png")), this.RankImage[3] = new egret.Bitmap(RES.getRes("rankme_png")), this.RankImage[4] = new egret.Bitmap(RES.getRes("rankmark_png")), this.RankImage[5] = new egret.Bitmap(RES.getRes("titlebtn3_png")), this.RankImage[6] = new egret.Bitmap(RES.getRes("rankshare_png"));
        for (var t = 0; 7 > t; t++) this.addChild(this.RankImage[t]);
        this.RankLabel = new egret.TextField, this.addChild(this.RankLabel), this.RankImage[0].pos(320, 568, this.StageWidth + 20, this.StageHeight + 20), this.RankImage[1].pos(320, 160, 480, 72), this.RankImage[2].pos(126, 996, 90, 98), this.RankImage[3].pos(380, 994, 360, 80), 0 == this.RankNum ? this.RankImage[4].pos(268, 143, 18, 18) : this.RankImage[4].pos(492, 143, 18, 18), this.RankImage[5].pos(320, 568, 120, 128), this.RankImage[6].pos(320, 700, 263, 93);
        var e = [],
            a = [],
            s = [];
        0 == this.RankNum ? (e = this.Connect.GetUserName(1), a = this.Connect.GetUserImage(1), s = this.Connect.GetUserScore(1), this.RankImage[5].visible = !1, this.RankImage[6].visible = !1, this.RankKill > 0 && (e.splice(0, this.RankKill), a.splice(0, this.RankKill), s.splice(0, this.RankKill))) : (e = this.Connect.GetUserName(2), a = this.Connect.GetUserImage(2), s = this.Connect.GetUserScore(2), this.RankImage[5].visible = !1, this.RankImage[6].visible = !1, e.length <= 3 && (this.RankImage[5].visible = !0, this.RankImage[6].visible = !0)), this.RankLabel.x = 520, this.RankLabel.y = 994, this.RankLabel.size = 30, this.RankLabel.textColor = 0, this.RankLabel.text = "" + this.Connect.GetMyRank(), this.RankLabel.anchorOffsetX = this.RankLabel.width, this.RankLabel.anchorOffsetY = this.RankLabel.height / 2;
        for (var i, o, r, n, h, l, c = function(t) {
                i = new egret.Bitmap(RES.getRes("rankbg_png")), u.RankLayer.addChild(i), i.pos(320, 90 * t, 480, 80), 3 > t ? (o = new egret.Bitmap(RES.getRes("rankview" + (t + 1) + "_png")), u.RankLayer.addChild(o), o.pos(115, 90 * t, 50, 62)) : (r = new egret.TextField, u.RankLayer.addChild(r), r.x = 115, r.y = 90 * t, r.text = t + 1 + "", r.size = 30, r.textColor = 0, r.anchorOffsetX = r.width / 2, r.anchorOffsetY = r.height / 2), n = new egret.Bitmap(RES.getRes("rankpeople_png")), u.RankLayer.addChild(n), n.pos(525, 90 * t, 28, 28);
                var c = new egret.Bitmap;
                u.RankLayer.addChild(c), c.pos(190, 90 * t, 66, 66), RES.getResByUrl(a[t], function(t) {
                    c.texture = t
                }, u, RES.ResourceItem.TYPE_IMAGE), h = new egret.TextField, u.RankLayer.addChild(h), h.x = 240, h.y = 90 * t, h.size = 22, h.textColor = 0, h.text = "" + e[t], h.width > 180 && (h.width = 180), h.wordWrap = !0, h.anchorOffsetY = h.height / 2, l = new egret.TextField, u.RankLayer.addChild(l), l.x = 500, l.y = 90 * t, l.size = 34, l.textColor = 0, l.text = s[t] + "", l.anchorOffsetX = l.width, l.anchorOffsetY = l.height / 2
            }, u = this, t = 0; t < e.length; t++) c(t);
        this.RankLayer.x = 0, this.RankLayer.y = 40, this.RankLayer.width = 600, this.RankLayer.height = 90 * e.length, this.Scroller.x = 0, this.Scroller.y = 216, this.Scroller.width = 640, this.Scroller.height = 710, this.Scroller.setContent(this.RankLayer), this.addChild(this.Scroller)
    }, e.prototype.EndRank = function() {
        this.RankNow = 0;
        for (var t = 0; 7 > t; t++) this.removeChild(this.RankImage[t]);
        this.removeChild(this.RankLabel), this.RankLayer.removeChildren(), this.removeChild(this.Scroller)
    }, e.prototype.MoveOrNot = function() {
        this.ReleaseGame(), this.choose = 1, this.InitGame()
    }, e.prototype.ShowGameCenter = function(t, e) {
        var a = this;
        if (1 != this.PlatForm) {
            this.GameCenterLayer = new egret.DisplayObjectContainer;
            for (var s = 0; 5 > s; s++) this.GameCenterImage[s] = new egret.Bitmap(RES.getRes("gamecenter" + (s + 1) + "_png")), this.GameCenterLayer.addChild(this.GameCenterImage[s]);
            this.addChild(this.GameCenterLayer), this.GameCenterImage[2].alpha = 0, this.GameCenterImage[3].alpha = 0, this.GameCenterImage[0].pos(t, e, 200, 200), this.GameCenterImage[1].pos(t + 2, e - 30, 86, 52), this.GameCenterImage[2].pos(t + 2, e - 30, 86, 52), this.GameCenterImage[3].pos(t + 2, e - 30, 86, 52), this.GameCenterImage[4].pos(t - 40, e + 18, 24, 41), this.GameCenterImage[4].anchorOffsetY = 40, this.GameCenterLayer.y = -600, egret.Tween.get(this.GameCenterLayer).to({}, 300).to({
                y: 0
            }, 1e3, egret.Ease.getBackOut(1)), egret.Tween.get(this.GameCenterImage[1], {
                loop: !0
            }).to({}, 500).to({
                alpha: 0
            }, 0).to({}, 1e3).to({
                alpha: 1
            }, 0), egret.Tween.get(this.GameCenterImage[2], {
                loop: !0
            }).to({}, 500).to({
                alpha: 1
            }, 0).to({}, 500).to({
                alpha: 0
            }, 0).to({}, 500), egret.Tween.get(this.GameCenterImage[3], {
                loop: !0
            }).to({}, 1e3).to({
                alpha: 1
            }, 0).to({}, 500).to({
                alpha: 0
            }, 0), egret.Tween.get(this.GameCenterImage[4], {
                loop: !0
            }).to({}, 2e3).to({
                rotation: 15
            }, 100).to({
                rotation: -15
            }, 200).to({
                rotation: 0
            }, 100), egret.setTimeout(function() {
                egret.Tween.get(a.GameCenterLayer, {
                    loop: !0
                }).to({}, 3e3).to({
                    y: -20
                }, 200, egret.Ease.getBackOut(0)).to({
                    y: 0
                }, 200, egret.Ease.getBackIn(0)).to({
                    y: -20
                }, 200, egret.Ease.getBackOut(0)).to({
                    y: 0
                }, 200, egret.Ease.getBackIn(0))
            }, this, 800)
        }
    }, e.prototype.ShowGameBox = function() {
        this.GameBoxNow = 1, this.GameBoxLayer = new egret.DisplayObjectContainer, this.GameBoxImage[0] = new egret.Bitmap(RES.getRes("gameboxbg1_png")), this.GameBoxImage[1] = new egret.Bitmap(RES.getRes("gameboxbg2_png")), this.GameBoxImage[2] = new egret.Bitmap(RES.getRes("gameboxbg3_png")), this.GameBoxImage[3] = new egret.Bitmap(RES.getRes("gameboxtitle_png")), this.GameBoxImage[4] = new egret.Bitmap(RES.getRes("gameboxbtn1_png")), this.GameBoxImage[5] = new egret.Bitmap(RES.getRes("gameboxphoto_png")), this.GameBoxImage[6] = new egret.Bitmap(RES.getRes("gameboxview2_png")), this.addChild(this.GameBoxLayer);
        for (var t = 0; 7 > t; t++) this.GameBoxLayer.addChild(this.GameBoxImage[t]);
        this.GameBoxImage[0].pos(320, 140, this.StageWidth + 60, 300), this.GameBoxImage[1].pos(320, 710, this.StageWidth + 60, 900), this.GameBoxImage[2].pos(320, 240, this.StageWidth, 82), this.GameBoxImage[3].pos(320, 100, 140, 160), this.GameBoxImage[4].pos(50 - this.iPhoneW, 60, 40, 60), this.GameBoxImage[5].pos(570 + this.iPhoneW, 66, 88, 88), this.GameBoxImage[6].pos(170 - this.iPhoneW, 240, 220, 32);
        var e = new egret.Bitmap;
        this.GameBoxLayer.addChild(e), e.pos(570 + this.iPhoneW, 66, 80, 80), RES.getResByUrl(this.Connect.GetMyImage(), function(t) {
            e.texture = t
        }, this, RES.ResourceItem.TYPE_IMAGE), this.GameBoxLayer.x = -this.StageWidth, egret.Tween.get(this.GameBoxLayer).to({
            x: 0
        }, 300), this.GameBoxList = new egret.DisplayObjectContainer;
        for (var a = this.Connect.GetMyGameName(), s = this.Connect.GetMyGameNum(), t = 0; t < a.length; t++) this.GameBoxNum[t] = t + 1;
        this.GameBoxNum.sort(this.randomSort);
        for (var t = 0; t < a.length; t++) {
            var i = new egret.Bitmap(RES.getRes("gameboxview1_png"));
            this.GameBoxList.addChild(i), i.pos(320, 112 * t + 10, 560, 112);
            var o = new egret.Bitmap(RES.getRes("moregame" + this.GameBoxNum[t] + "_png"));
            this.GameBoxList.addChild(o), o.pos(104, 112 * t + 10, 88, 88);
            var r = new egret.TextField;
            this.GameBoxList.addChild(r), r.x = 166, r.y = 112 * t + 6, r.text = a[this.GameBoxNum[t] - 1], r.size = 36, r.textColor = 0, r.anchorOffsetX = 0, r.anchorOffsetY = r.height / 2;
            var n = new egret.TextField;
            this.GameBoxList.addChild(n), n.x = 172, n.y = 112 * t + 40, n.size = 17, n.textColor = 6710886, n.bold = !0, n.text = s[this.GameBoxNum[t] - 1] + Math.floor(500 * Math.random()) + "K Players", n.anchorOffsetX = 0, n.anchorOffsetY = n.height / 2;
            var h = new egret.Bitmap(RES.getRes("gameboxbtn2_png"));
            if (this.GameBoxList.addChild(h), h.pos(525, 112 * t + 10, 152, 96), h.name = "" + this.GameBoxNum[t], h.touchEnabled = !0, h.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.GameBoxTouchBegin, this), h.addEventListener(egret.TouchEvent.TOUCH_END, this.GameBoxTouchEnd, this), this.GameBoxNum[t] == this.GameBoxID && (h.texture = RES.getRes("gameboxbtn3_png")), 3 > t) {
                var l = new egret.Bitmap(RES.getRes("gameboxview3_png"));
                this.GameBoxList.addChild(l), l.pos(67, 112 * t - 8, 60, 60)
            }
        }
        this.GameBoxList.x = 0, this.GameBoxList.y = 60, this.GameBoxList.width = 600, this.GameBoxList.height = 112 * a.length + 60, this.Scroller = new egret.ScrollView, this.Scroller.x = 0, this.Scroller.y = 282, this.Scroller.width = 640, this.Scroller.height = 856, this.Scroller.setContent(this.GameBoxList), this.GameBoxLayer.addChild(this.Scroller)
    }, e.prototype.randomSort = function(t, e) {
        return Math.random() > .5 ? -1 : 1
    }, e.prototype.CloseGameBox = function() {
        var t = this;
        this.GameBoxNow = 0, egret.Tween.get(this.GameBoxLayer).to({
            x: -this.StageWidth
        }, 300), egret.setTimeout(function() {
            t.GameBoxList.removeChildren(), t.GameBoxLayer.removeChildren()
        }, this, 300)
    }, e.prototype.GameBoxTouchBegin = function(t) {
        var e = this,
            a = t.target;
        this.SetColor(a, 2), egret.setTimeout(function() {
            e.SetColor(a, 1)
        }, this, 200), t.stopPropagation();
        var s = RES.getRes("soundpress_mp3");
        s.play(0, 1)
    }, e.prototype.GameBoxTouchEnd = function(t) {
        var e = t.target,
            a = +e.name;
        a == this.GameBoxID ? this.Connect.showChoose() : this.Connect.OpenMyGame(a)
    }, e.prototype.ShowFail = function() {
        this.GameState = 3, this.NumDeadTT += 1, this.OverImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), this.OverImage[1] = new egret.Bitmap(RES.getRes("overbtn3_png")), this.OverImage[2] = new egret.Bitmap(RES.getRes("nummoney_png"));
        for (var t = 0; 3 > t; t++) this.addChild(this.OverImage[t]);
        this.ScoreLabel = new egret.TextField, this.addChild(this.ScoreLabel), this.ScoreLabel.text = this.NumMoneyTT + "", this.ScoreLabel.x = 100 - this.iPhoneW, this.ScoreLabel.y = 110, this.ScoreLabel.size = 40, this.ScoreLabel.textColor = 16777215, this.ScoreLabel.anchorOffsetX = 0, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2;
        for (var t = 0; 2 > t; t++) this.AssEssLabel[t] = new egret.TextField, this.addChild(this.AssEssLabel[t]), this.AssEssLabel[t].text = "LEVELCOMPLETE", this.AssEssLabel[t].x = 320, this.AssEssLabel[t].anchorOffsetY = this.AssEssLabel[t].height / 2;
        this.AssEssLabel[0].text = "$" + this.MoneyNum, this.AssEssLabel[0].size = 70, this.AssEssLabel[0].textColor = 16777215, this.AssEssLabel[0].y = 230, this.AssEssLabel[0].anchorOffsetX = this.AssEssLabel[0].width / 2, this.AssEssLabel[1].text = "CASH EARNED", this.AssEssLabel[1].size = 60, this.AssEssLabel[1].textColor = 16777215, this.AssEssLabel[1].y = 340, this.AssEssLabel[1].anchorOffsetX = this.AssEssLabel[1].width / 2, this.OverImage[0].pos(320, 568, this.StageWidth + 30, this.StageHeight + 30), this.OverImage[1].pos(320, 900, 358, 55), this.OverImage[2].pos(60 - this.iPhoneW, 110, 64, 56), this.SaveGameScore(), this.Connect.UpLoadScore(this.NumPeopleTT), this.Connect.setCurentScore(this.NumPeopleTT), this.ShowGameCenter(530 + this.iPhoneW, 220), this.ShowADNow(1)
    }, e.prototype.ShowResult = function() {
        var t = this;
        this.MoveCanNot = 0, this.GameState = 2, this.PeopleNum = 0, this.ShopNum = 0, this.GameNum++;
        for (var e = [], a = 3; 18 > a; a++) 0 == this.NumLockTT[a] && e.push(a);
        0 != e.length && this.NumMoneyTT >= this.HeroPrice[e[0]] && this.GameNum2++, this.OverImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), this.OverImage[1] = new egret.Bitmap(RES.getRes("overbg_png")), this.OverImage[2] = new egret.Bitmap(RES.getRes("overbtn1_png")), this.OverImage[3] = new egret.Bitmap(RES.getRes("overbtn2_png")), this.OverImage[4] = new egret.Bitmap(RES.getRes("nummoney_png")), this.OverImage[5] = new egret.Bitmap(RES.getRes("overview_png")), this.OverImage[6] = new egret.Bitmap(RES.getRes("people" + this.PeopleNow[this.PeopleNow.length - 1] + "_png"));
        for (var a = 0; 7 > a; a++) this.addChild(this.OverImage[a]);
        this.ScoreLabel = new egret.TextField, this.addChild(this.ScoreLabel), this.ScoreLabel.text = this.NumMoneyTT + "", this.ScoreLabel.x = 100 - this.iPhoneW, this.ScoreLabel.y = 110, this.ScoreLabel.size = 40, this.ScoreLabel.textColor = 16777215, this.ScoreLabel.anchorOffsetX = 0, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2;
        for (var a = 0; 3 > a; a++) this.AssEssLabel[a] = new egret.TextField, this.addChild(this.AssEssLabel[a]), this.AssEssLabel[a].text = "LEVELCOMPLETE", this.AssEssLabel[a].x = 320, this.AssEssLabel[a].anchorOffsetY = this.AssEssLabel[a].height / 2;
        this.AssEssLabel[0].text = "LEVEL " + this.NumGateTT + " COMPLETE", this.AssEssLabel[0].size = 46, this.AssEssLabel[0].textColor = 16777215, this.AssEssLabel[0].y = 200, this.AssEssLabel[0].anchorOffsetX = this.AssEssLabel[0].width / 2, this.AssEssLabel[1].text = "$" + this.ShopNum, this.AssEssLabel[1].size = 50, this.AssEssLabel[1].textColor = 1517647, this.AssEssLabel[1].y = 350, this.AssEssLabel[1].anchorOffsetX = this.AssEssLabel[1].width / 2, this.StartNum = this.MoneyNum / 10, this.PeopleNumState = 0, this.TurnNum = 0;
        var s = RES.getRes("soundmoney_mp3");
        s.play(0, 1), this.AssEssLabel[2].text = "CASH EARNED", this.AssEssLabel[2].size = 40, this.AssEssLabel[2].textColor = 1517647, this.AssEssLabel[2].y = 480, this.AssEssLabel[2].anchorOffsetX = this.AssEssLabel[2].width / 2, this.OverImage[3].visible = !1, this.OverImage[0].pos(320, 568, this.StageWidth + 30, this.StageHeight + 30), this.OverImage[1].pos(320, 480, 460, 460), this.OverImage[2].pos(320, 620, 280, 128), this.OverImage[3].pos(320, 810, 355, 55), this.OverImage[4].pos(60 - this.iPhoneW, 110, 64, 56), this.OverImage[5].pos(320, 1e3, 425, 127), this.OverImage[6].pos(178, 990, 98, 98), egret.setTimeout(function() {
            t.OverImage[3].visible = !0
        }, this, 500), this.NumGateTT++, this.SaveGameScore(), this.Connect.UpLoadScore(this.NumPeopleTT), this.Connect.setCurentScore(this.NumPeopleTT), this.NumGateTT >= 5 && this.NumGateTT < 20 && this.Connect.OpenMyBot(), this.ShowGameCenter(530 + this.iPhoneW, 350), this.ShowADNow(1)
    }, e.prototype.EndResult = function() {
        this.MoveCanNot = 0
    }, e.prototype.ShowADNow = function(t) {
        0 == t ? 1 == platform.hasRAD() ? (this.Connect.ShowADVideo(), this.VideoState = -1) : this.ShowTipView("Ads is not ready") : 1 == t && this.NumTimeAD >= 300 && (this.NumStyleAD++, 1 == platform.hasIAD() ? (this.NumTimeAD = 0, this.Connect.ShowADChaping()) : console.log("无插屏广告"))
    }, e.prototype.CheckADVideo = function() {
        var t = this;
        if (this.NumTimeAD++, -1 == this.VideoState)
            if (this.VideoState = this.Connect.GetADVideoState(), console.log(this.VideoState + "LALA"), 0 == this.VideoState);
            else if (1 == this.VideoState)
            if (this.NumTimeAD = 0, 1 == this.SuperMan && this.Connect.ShowADChaping().then(function() {
                    t.NumTimeAD = 0
                }), 100 == this.choose) {
                for (var e = [], a = 3; 18 > a; a++) 0 == this.NumLockTT[a] && e.push(a);
                var s = 0;
                this.NumMoneyTT < this.HeroPrice[e[0]] && (s = 1), this.NumMoneyTT += 500, this.NumGoldTT += 500, egret.setTimeout(this.ShowTipView, this, 600, "You get $500"), this.UILabel[0].text = this.NumMoneyTT + "", this.SaveGameScore(), 0 != e.length && this.NumMoneyTT >= this.HeroPrice[e[0]] && 1 == s && (this.GameNum2 = 4)
            } else if (1 == this.choose && 2 == this.GameState) {
            this.PeopleNum = 1, this.TurnNum = 1, this.SetColor(this.OverImage[2], 2), this.AssEssLabel[1].text = "$" + 5 * this.MoneyNum, this.AssEssLabel[1].anchorOffsetX = this.AssEssLabel[1].width / 2;
            for (var e = [], a = 3; 18 > a; a++) 0 == this.NumLockTT[a] && e.push(a);
            var s = 0;
            this.NumMoneyTT < this.HeroPrice[e[0]] && (s = 1), this.NumGoldTT += 4 * this.MoneyNum, this.NumMoneyTT += 4 * this.MoneyNum, this.ScoreLabel.text = this.NumMoneyTT + "", this.ScoreLabel.anchorOffsetX = 0, 0 != e.length && this.NumMoneyTT >= this.HeroPrice[e[0]] && 1 == s && (this.GameNum2 = 4);
            var i = new particle.GravityParticleSystem(RES.getRes("money_png"), RES.getRes("money_json"));
            this.addChild(i), i.emitterX = 320, i.emitterY = 568, i.start(), i.emissionTime = 100, this.SaveGameScore()
        }
    }, e.prototype.PointInImage = function(t, e, a) {
        return t > a.x - a.width / 2 && t < a.x + a.width / 2 && e > a.y - a.height / 2 && e < a.y + a.height / 2 ? !0 : !1
    }, e.prototype.ImageInImage = function(t, e) {
        return t.x - t.width / 2 < e.x + e.width / 2 && t.x + t.width / 2 > e.x - e.width / 2 && t.y - t.height / 2 < e.y + e.height / 2 && t.y + t.height / 2 > e.y - e.height / 2 ? !0 : !1
    }, e.prototype.PointInRect = function(t, e, a, s, i) {
        return i.x > t && i.x < t + a && i.y > e && i.y < e + s ? !0 : !1
    }, e.prototype.SetColor = function(t, e) {
        var a = [];
        1 == e ? a = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0] : 2 == e && (a = [1, 0, 0, 0, -60, 0, 1, 0, 0, -60, 0, 0, 1, 0, -60, 0, 0, 0, 1, 0]);
        var s = new egret.ColorMatrixFilter(a);
        t.filters = [s]
    }, e.prototype.SaveGameScore = function() {
        this.NowHeroTT != this.NowHeroTT_S && (egret.localStorage.setItem("NowHero2", this.NowHeroTT + ""), this.NowHeroTT_S = this.NowHeroTT), this.NumPeopleTT != this.NumPeopleTT_S && (egret.localStorage.setItem("NumPeople2", this.NumPeopleTT + ""), this.NumPeopleTT_S = this.NumPeopleTT), this.NumDeadTT != this.NumDeadTT_S && (egret.localStorage.setItem("NumDead2", this.NumDeadTT + ""), this.NumDeadTT_S = this.NumDeadTT), this.NumPickTT != this.NumPickTT_S && (egret.localStorage.setItem("NumPick2", this.NumPickTT + ""), this.NumPickTT_S = this.NumPickTT), this.NumGoldTT != this.NumGoldTT_S && (egret.localStorage.setItem("NumGold2", this.NumGoldTT + ""), this.NumGoldTT_S = this.NumGoldTT), this.NumMoneyTT != this.NumMoneyTT_S && (egret.localStorage.setItem("NumMoney2", this.NumMoneyTT + ""), this.NumMoneyTT_S = this.NumMoneyTT), this.NumGateTT != this.NumGateTT_S && (egret.localStorage.setItem("NumGate2", this.NumGateTT + ""), this.NumGateTT_S = this.NumGateTT);
        for (var t = 0; 18 > t; t++) this.NumLockTT[t] != this.NumLockTT_S[t] && (egret.localStorage.setItem("NumLock" + (t + 1), this.NumLockTT[t] + ""), this.NumLockTT_S[t] = this.NumLockTT[t])
    }, e.prototype.LoadGameScore = function() {
        this.NowHeroTT = +egret.localStorage.getItem("NowHero2"), this.NowHeroTT_S = this.NowHeroTT, this.NumPeopleTT = +egret.localStorage.getItem("NumPeople2"), this.NumPeopleTT_S = this.NumPeopleTT, this.NumMoneyTT = +egret.localStorage.getItem("NumMoney2"), this.NumMoneyTT_S = this.NumMoneyTT, this.NumGoldTT = +egret.localStorage.getItem("NumGold2"), this.NumGoldTT_S = this.NumGoldTT, this.NumDeadTT = +egret.localStorage.getItem("NumDead2"), this.NumDeadTT_S = this.NumDeadTT, this.NumPickTT = +egret.localStorage.getItem("NumPick2"), this.NumPickTT_S = this.NumPickTT, this.NumGateTT = +egret.localStorage.getItem("NumGate2"), this.NumGateTT_S = this.NumGateTT;
        for (var t = 0; 18 > t; t++) this.NumLockTT[t] = +egret.localStorage.getItem("NumLock" + (t + 1)), this.NumLockTT_S[t] = this.NumLockTT[t]
    }, e.prototype.TouchBegin = function(t) {
        var e = this;
        if (0 == this.MoveCanNot) {
            var a = new egret.Point(t.stageX / 2 - this.iPhoneW / 2, t.stageY / 2);
            if (0 == this.choose);
            else if (100 == this.choose) {
                if (this.PointInRect(34, 48, 40, 44, a)) {
                    this.SetColor(this.InterImage[6], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else if (this.PointInRect(135, 476, 140, 64, a)) {
                    this.SetColor(this.InterImage[7], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else if (this.PointInRect(44, 476, 81, 64, a)) {
                    this.SetColor(this.InterImage[13], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else if (this.PointInRect(0 - this.iPhoneW / 2, 224, this.StageWidth / 2, 220, a)) {
                    this.BeginX = a.x, this.BeginY = a.y, this.TouchNum = a.x, this.TouchNow = 1;
                    for (var i = 0; 9 > i; i++)
                        if (this.PointInRect(50 + 80 * Math.floor(i % 3), 224 + 80 * Math.floor(i / 3), 60, 60, a)) {
                            i = 9 * this.ShopNum + i, this.SetColor(this.HeroImage2[i], 2), this.SetColor(this.HeroImage[i], 2), this.SetColor(this.UnlockImage[i], 2);
                            var s = RES.getRes("soundpress_mp3");
                            s.play(0, 1)
                        }
                }
            } else if (1 == this.choose)
                if (2 == this.RankNow) {
                    if (this.PointInRect(40, 473, 45, 49, a)) {
                        this.SetColor(this.RankImage[2], 2);
                        var s = RES.getRes("soundpress_mp3");
                        s.play(0, 1)
                    } else if (this.PointInRect(27, 35, 121, 69, a) && 0 == this.RankNum) {
                        var s = RES.getRes("soundpress_mp3");
                        s.play(0, 1), this.RankNum = 1, this.EndRank(), this.ShowRank()
                    } else if (this.PointInRect(151, 35, 139, 70, a) && 1 == this.RankNum) {
                        var s = RES.getRes("soundpress_mp3");
                        s.play(0, 1), this.RankNum = 0, this.EndRank(), this.ShowRank()
                    } else if (this.PointInRect(93, 251, 192, 185, a) && 1 == this.RankImage[5].visible) {
                        this.SetColor(this.RankImage[5], 2);
                        var s = RES.getRes("soundpress_mp3");
                        s.play(0, 1)
                    }
                } else if (1 == this.RankNow) {
                if (this.PointInRect(80, 402, 60, 64, a)) {
                    this.SetColor(this.RankImage[2], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else if (this.PointInRect(180, 402, 60, 64, a)) {
                    this.SetColor(this.RankImage[3], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                }
            } else if (0 == this.GameState)
                if (this.PointInRect(227, 462, 60, 64, a)) {
                    this.SetColor(this.InterImage[2], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else if (this.PointInRect(32, 378, 60, 64, a)) {
                this.SetColor(this.InterImage[3], 2);
                var s = RES.getRes("soundpress_mp3");
                s.play(0, 1)
            } else if (this.PointInRect(227, 378, 60, 64, a)) {
                this.SetColor(this.InterImage[4], 2);
                var s = RES.getRes("soundpress_mp3");
                s.play(0, 1)
            } else if (this.PointInRect(32, 462, 60, 64, a)) {
                this.SetColor(this.InterImage[5], 2);
                var s = RES.getRes("soundpress_mp3");
                s.play(0, 1)
            } else if (this.PointInRect(37, 45, 245, 75, a));
            else {
                this.InterImage[1].visible = !1, egret.Tween.get(this.InterImage[0]).to({
                    y: -234
                }, 600);
                for (var i = 2; 5 > i; i++) egret.Tween.get(this.UILabel[i]).to({
                    y: this.UILabel[i].y - 400
                }, 600);
                egret.Tween.get(this.InterImage[3]).to({
                    x: this.InterImage[3].x - 300,
                    alpha: 0
                }, 400, egret.Ease.getBackIn(1)), egret.Tween.get(this.InterImage[4]).to({
                    x: this.InterImage[4].x + 300,
                    alpha: 0
                }, 400, egret.Ease.getBackIn(1)), egret.Tween.get(this.InterImage[5]).to({}, 80).to({
                    x: this.InterImage[5].x - 300,
                    alpha: 0
                }, 400, egret.Ease.getBackIn(1)), egret.Tween.get(this.InterImage[2]).to({}, 80).to({
                    x: this.InterImage[2].x + 300,
                    alpha: 0
                }, 400, egret.Ease.getBackIn(1)), egret.Tween.get(this.InterImage[6]).to({}, 80).to({
                    x: this.InterImage[6].x - 300,
                    alpha: 0
                }, 400, egret.Ease.getBackIn(1)), egret.Tween.get(this.InterImage[this.BlockNum + 9]).to({
                    x: this.InterImage[this.BlockNum + 9].x + 300,
                    alpha: 0
                }, 400, egret.Ease.getBackIn(1)), egret.Tween.get(this.UnlockImage[0]).to({
                    alpha: 1
                }, 200), this.GameState = 1, this.TouchNow = 1, this.TouchNum = 0;
                var s = RES.getRes("soundstart_mp3");
                s.play(0, 1), egret.setTimeout(function() {
                    for (var t = 6; t < e.BlockNum + 9; t++) e.InterImage[t].visible = !0;
                    e.UILabel[0].visible = !0, e.UILabel[1].visible = !0
                }, this, 600)
            } else if (1 == this.GameState) {
                if (0 == this.HeroState) {
                    this.TouchNow = 1, this.HeroImage[3].visible = !1;
                    var s = RES.getRes("soundstart_mp3");
                    s.play(0, 1)
                }
            } else if (2 == this.GameState) {
                if (1 == this.GameBoxNow) {
                    if (this.PointInRect(-this.iPhoneW / 2, 0, 40, 50, a)) {
                        this.SetColor(this.GameBoxImage[4], 2);
                        var s = RES.getRes("soundpress_mp3");
                        s.play(0, 1)
                    }
                    return
                }
                if (this.PointInRect(45, 269, 228, 91, a) && 0 == this.PeopleNum) {
                    this.SetColor(this.OverImage[2], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else if (this.PointInRect(61, 375, 196, 56, a) && 1 == this.OverImage[3].visible) {
                    this.SetColor(this.OverImage[3], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else if (this.PointInRect(35, 468, 250, 63, a)) {
                    this.SetColor(this.OverImage[5], 2), this.SetColor(this.OverImage[6], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else if (this.PointInRect(230 + this.iPhoneW / 2, 130, 70, 90, a) && 0 == this.PlatForm) {
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                }
                this.HeroTurnNum = 0
            } else if (3 == this.GameState) {
                if (1 == this.GameBoxNow) {
                    if (this.PointInRect(-this.iPhoneW / 2, 0, 40, 50, a)) {
                        this.SetColor(this.GameBoxImage[4], 2);
                        var s = RES.getRes("soundpress_mp3");
                        s.play(0, 1)
                    }
                    return
                }
                if (this.PointInRect(230 + this.iPhoneW / 2, 65, 70, 90, a) && 0 == this.PlatForm) {
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                } else {
                    this.SetColor(this.OverImage[1], 2);
                    var s = RES.getRes("soundpress_mp3");
                    s.play(0, 1)
                }
                this.HeroTurnNum = 0
            }
        }
    }, e.prototype.TouchMoved = function(t) {
        var e = new egret.Point(t.stageX / 2 - this.iPhoneW / 2, t.stageY / 2);
        if (100 == this.choose && this.PointInRect(0 - this.iPhoneW / 2, 224, this.StageWidth / 2, 220, e) && this.TouchNow >= 1) {
            var a = e.x - this.TouchNum;
            Math.abs(a) > 5 && (this.RankLayer.x = this.RankLayer.x + 2 * a, this.TouchNum = e.x)
        }
    }, e.prototype.TouchEnded = function(t) {
        var e = this;
        if (0 == this.MoveCanNot) {
            var a = new egret.Point(t.stageX / 2 - this.iPhoneW / 2, t.stageY / 2);
            if (0 == this.choose);
            else if (100 == this.choose) {
                if (this.SetColor(this.InterImage[6], 1), this.SetColor(this.InterImage[7], 1), this.SetColor(this.InterImage[13], 1), this.TouchNow = 0, this.PointInRect(34, 48, 40, 44, a)) this.ReleaseGame(), this.choose = 1, this.InitGame();
                else if (this.PointInRect(44, 476, 81, 64, a)) this.ShowADNow(0);
                else if (this.PointInRect(135, 476, 140, 64, a)) 1 == this.NumLockTT[this.BuyHero - 1] ? (this.NowHeroTT = this.BuyHero, this.SaveGameScore(), this.ReleaseGame(), this.choose = 1, this.InitGame()) : 2 == this.BuyHero || 3 == this.BuyHero ? this.ShowTipView("Please Play Tomorrow.") : this.NumMoneyTT >= this.HeroPrice[this.BuyHero - 1] ? (this.NumMoneyTT -= this.HeroPrice[this.BuyHero - 1], this.InterImage[7].texture = RES.getRes("shopbtn2_png"), this.InterImage[12].visible = !1, this.UILabel[1].visible = !1, this.UILabel[2].visible = !1, this.NumLockTT[this.BuyHero - 1] = 1, this.UnlockImage[this.BuyHero - 1].visible = !1, this.NowHeroTT = this.BuyHero, this.UILabel[0].text = this.NumMoneyTT + "", this.ShowTipView("Unlock Now!"), egret.Tween.get(this.HeroImage[this.BuyHero - 1], {
                    loop: !0
                }).to({
                    y: this.HeroImage[this.BuyHero - 1].y + 6
                }, 1800, egret.Ease.getBackIn(-2)).to({
                    y: this.HeroImage[this.BuyHero - 1].y
                }, 1e3).to({}, 400), this.SaveGameScore()) : this.ShowTipView("Your money is not enough");
                else if (this.PointInRect(0 - this.iPhoneW / 2, 224, this.StageWidth / 2, 220, a))
                    if (a.x - this.BeginX >= 5) 1 == this.ShopNum ? (this.ShopNum = 0, this.InterImage[9].texture = RES.getRes("shoppage2_png"), this.InterImage[10].texture = RES.getRes("shoppage1_png"), egret.Tween.get(this.RankLayer).to({
                        x: 0
                    }, 300)) : egret.Tween.get(this.RankLayer).to({
                        x: 0
                    }, 200);
                    else if (this.BeginX - a.x >= 5) 0 == this.ShopNum ? (this.ShopNum = 1, this.InterImage[9].texture = RES.getRes("shoppage1_png"), this.InterImage[10].texture = RES.getRes("shoppage2_png"), egret.Tween.get(this.RankLayer).to({
                    x: -this.StageWidth
                }, 300)) : egret.Tween.get(this.RankLayer).to({
                    x: -this.StageWidth
                }, 200);
                else {
                    for (var s = 0; 18 > s; s++) this.SetColor(this.HeroImage2[s], 1), this.SetColor(this.HeroImage[s], 1), this.SetColor(this.UnlockImage[s], 1);
                    for (var s = 0; 9 > s; s++) this.PointInRect(50 + 80 * Math.floor(s % 3), 224 + 80 * Math.floor(s / 3), 60, 60, a) && (s = 9 * this.ShopNum + s, this.BuyHero = s + 1, this.InterImage[4].texture = RES.getRes("car" + this.BuyHero + "1_png"), this.InterImage[5].texture = RES.getRes("car" + this.BuyHero + "2_png"), this.InterImage[8].pos(this.UnlockImage[s].x, this.UnlockImage[s].y, 120, 120), 1 == this.NumLockTT[s] ? (this.InterImage[12].visible = !1, this.UILabel[1].visible = !1, this.UILabel[2].text = "Speed: " + (50 + 10 * s) + " km/h", this.UILabel[2].anchorOffsetX = this.UILabel[2].width / 2, this.InterImage[7].texture = RES.getRes("shopbtn2_png")) : 1 == s || 2 == s ? (this.InterImage[7].texture = RES.getRes("shopbtn3_png"), this.InterImage[12].texture = RES.getRes("numlogin_png"), this.InterImage[12].width = 56, this.InterImage[12].visible = !0, this.InterImage[12].anchorOffsetX = 28, this.UILabel[1].visible = !0, this.UILabel[1].text = this.Connect.getLoginDays() + " / " + (s + 1), this.UILabel[1].anchorOffsetX = this.UILabel[1].width / 2, this.UILabel[2].text = "Login for " + (s + 1) + " days you can get it", this.UILabel[2].anchorOffsetX = this.UILabel[2].width / 2) : (this.InterImage[7].texture = RES.getRes("shopbtn3_png"), this.InterImage[12].texture = RES.getRes("nummoney_png"), this.InterImage[12].width = 64, this.InterImage[12].visible = !0, this.InterImage[12].anchorOffsetX = 32, this.UILabel[1].visible = !0, this.UILabel[1].text = this.HeroPrice[s] + "", this.UILabel[1].anchorOffsetX = this.UILabel[1].width / 2, this.UILabel[2].text = "Speed: " + (50 + 10 * s) + " km/h", this.UILabel[2].anchorOffsetX = this.UILabel[2].width / 2))
                }
            } else if (1 == this.choose)
                if (2 == this.RankNow)
                    if (this.SetColor(this.RankImage[2], 1), this.SetColor(this.RankImage[1], 1), this.PointInRect(40, 473, 45, 49, a)) {
                        for (var s = 0; 6 > s; s++) this.InterImage[s].visible = !0;
                        for (var s = 2; 5 > s; s++) this.UILabel[s].visible = !0;
                        this.GameNum >= 3 ? this.InterImage[6].visible = !0 : this.InterImage[6].visible = !1, this.GameNum2 >= 4 ? this.InterImage[this.BlockNum + 9].visible = !0 : this.InterImage[this.BlockNum + 9].visible = !1, this.EndRank()
                    } else this.PointInRect(39, 47, 116, 49, a) && 0 == this.RankNum || this.PointInRect(156, 48, 123, 49, a) && 1 == this.RankNum || this.PointInRect(93, 251, 192, 185, a) && 1 == this.RankImage[5].visible && (this.SetColor(this.RankImage[5], 1), this.Connect.ShareGame());
            else if (1 == this.RankNow)
                if (this.SetColor(this.RankImage[2], 1), this.SetColor(this.RankImage[3], 1), this.PointInRect(80, 402, 60, 64, a)) {
                    for (var s = 0; 6 > s; s++) this.InterImage[s].visible = !0;
                    for (var s = 2; 5 > s; s++) this.UILabel[s].visible = !0;
                    this.GameNum2 >= 4 ? this.InterImage[this.BlockNum + 9].visible = !0 : this.InterImage[this.BlockNum + 9].visible = !1, this.EndAssEss()
                } else this.PointInRect(180, 402, 60, 64, a) && this.Connect.ShareGame();
            else if (0 == this.GameState) {
                for (var s = 2; 6 > s; s++) this.SetColor(this.InterImage[s], 1);
                if (this.PointInRect(227, 462, 60, 64, a)) {
                    for (var s = 0; 7 > s; s++) this.InterImage[s].visible = !1;
                    this.InterImage[this.BlockNum + 9].visible = !1;
                    for (var s = 2; 5 > s; s++) this.UILabel[s].visible = !1;
                    this.ShowRank()
                } else if (this.PointInRect(32, 378, 60, 64, a)) this.Connect.ShareGame();
                else if (this.PointInRect(227, 378, 60, 64, a)) this.ReleaseGame(), this.choose = 100, this.InitGame();
                else if (this.PointInRect(32, 462, 60, 64, a)) {
                    for (var s = 0; 7 > s; s++) this.InterImage[s].visible = !1;
                    for (var s = 2; 5 > s; s++) this.UILabel[s].visible = !1;
                    this.InterImage[this.BlockNum + 9].visible = !1, this.GameNum = 0, this.ShowAssess()
                } else this.PointInRect(37, 45, 245, 75, a)
            } else if (1 == this.GameState) 0 == this.HeroState && (this.TouchNow = 0, this.HeroImage[3].visible = !0);
            else if (2 == this.GameState) {
                if (this.SetColor(this.OverImage[3], 1), this.SetColor(this.OverImage[5], 1), this.SetColor(this.OverImage[6], 1), 0 == this.PeopleNum && this.SetColor(this.OverImage[2], 1), 0 != this.HeroTurnNum) return;
                if (1 == this.GameBoxNow) return this.SetColor(this.GameBoxImage[4], 1), void(this.PointInRect(-this.iPhoneW / 2, 0, 40, 50, a) && this.CloseGameBox());
                this.PointInRect(45, 269, 228, 91, a) && 0 == this.PeopleNum ? this.ShowADNow(0) : this.PointInRect(61, 375, 196, 56, a) && 1 == this.OverImage[3].visible ? (this.ReleaseGame(), this.choose = 1, this.InitGame()) : this.PointInRect(35, 468, 250, 63, a) ? this.Connect.showChoose().then(function() {
                    e.ReleaseGame(), e.choose = 1, e.InitGame()
                }) : this.PointInRect(230 + this.iPhoneW / 2, 130, 70, 90, a) && 0 == this.PlatForm && this.ShowGameBox()
            } else if (3 == this.GameState && 0 == this.HeroTurnNum) {
                if (1 == this.GameBoxNow) return this.SetColor(this.GameBoxImage[4], 1), void(this.PointInRect(-this.iPhoneW / 2, 0, 40, 50, a) && this.CloseGameBox());
                this.PointInRect(230 + this.iPhoneW / 2, 65, 70, 90, a) && 0 == this.PlatForm ? this.ShowGameBox() : (this.ReleaseGame(), this.choose = 1, this.InitGame())
            }
        }
    }, e
}(egret.Sprite);
__reflect(GameScene.prototype, "GameScene");
var BasePlatform = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.challenge_info = null, e.isNewPlayer = !1, e.playerType = "old", e.appId = "2217370948579234", e.appName = "Pick Me Up!", e.switchGameInfo = null, e.invite_skin_data = null, e.entry = "normal", e.$remoteData = null, e
    }
    return __extends(e, t), e.prototype.needAccount = function() {
        return !1
    }, e.prototype.initSDK = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.initRemoteData()];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, e.prototype.setLoadingProgress = function(t) {}, e.prototype.startGame = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, e.prototype.getToken = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, null]
            })
        })
    }, Object.defineProperty(e.prototype, "userInfo", {
        get: function() {
            return {
                name: "terran",
                id: "122",
                photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1919308798192205&height=256&width=256&ext=1556338068&hash=AeT6AJodDv0PCryf",
                friends: [],
                lang: "en_US"
            }
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.getContextId = function() {
        return ""
    }, e.prototype.getPlayerId = function() {
        return "terran"
    }, e.prototype.hasIAD = function() {
        return !0
    }, e.prototype.showIAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, e.prototype.hasRAD = function() {
        return !0
    }, e.prototype.showRAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, e.prototype.suportAD = function() {
        return !0
    }, e.prototype.getFriends = function() {
        return []
    }, e.prototype.invite = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, e.prototype.share = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, !0]
            })
        })
    }, e.prototype.choose = function(t, e, a) {
        return void 0 === e && (e = !1), void 0 === a && (a = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, !1]
            })
        })
    }, e.prototype.switchCtx = function(t, e) {
        return void 0 === e && (e = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, !0]
            })
        })
    }, e.prototype.createCtx = function(t, e) {
        return void 0 === e && (e = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, !0]
            })
        })
    }, e.prototype.getContextPlayers = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, []]
            })
        })
    }, e.prototype.switchGame = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, e.prototype.updateStatues = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, e.prototype.listResponse = function() {
        return []
    }, e.prototype.doResponse = function(t, e) {}, e.prototype.log = function(t, e, a) {
        void 0 === a && (a = 1), console.log("name", t, "data", JSON.stringify(e))
    }, e.prototype.getPlatFormiOS = function() {
        return !1
    }, e.prototype.getWorldEntries = function() {
        return []
    }, e.prototype.getWorldEntriesAsync = function() {
        return Promise.resolve([])
    }, e.prototype.getWorldFriendEntries = function() {
        return []
    }, e.prototype.getWorldFriendEntriesAsync = function() {
        return Promise.resolve([])
    }, e.prototype.getWorldSelfEntry = function() {
        return null
    }, e.prototype.getHighScore = function() {
        return +egret.localStorage.getItem("hight_score1") || 0
    }, e.prototype.setHighScore = function(t, e) {
        egret.localStorage.setItem("hight_score1", t + "")
    }, e.prototype.initRemoteData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a, s, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, this.getData(["user_info1"])];
                    case 1:
                        t = o.sent(), e = {};
                        try {
                            e = JSON.parse(t.user_info1)
                        } catch (r) {}
                        a = null;
                        try {
                            a = JSON.parse(localStorage.getItem("local_user_info_" + this.getPlayerId()))
                        } catch (r) {}
                        return s = a && +a.w__tsp || -1, i = e && +e.w__tsp || 0, s > i && (e = a, console.log("use local user_info", s, i)), this.$remoteData = e || {}, [2]
                }
            })
        })
    }, e.prototype.syncRemoteData = function(t) {
        return void 0 === t && (t = !1), __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return this.$remoteData.w__tsp = Date.now(), e = JSON.stringify(this.$remoteData), [4, this.setData({
                            user_info1: e
                        }, t)];
                    case 1:
                        return a.sent(), localStorage.setItem("local_user_info_" + this.getPlayerId(), e), [2]
                }
            })
        })
    }, e.prototype.cr = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return this.$remoteData = {}, [4, this.syncRemoteData(!0)];
                    case 1:
                        return t.sent(), this.emit("cr_data"), [2]
                }
            })
        })
    }, Object.defineProperty(e.prototype, "remoteData", {
        get: function() {
            return this.$remoteData
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.getData = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            var e, a, s, i;
            return __generator(this, function(o) {
                for (e = {}, a = 0, s = t; a < s.length; a++) i = s[a], e[i] = egret.localStorage.getItem(i);
                return [2, e]
            })
        })
    }, e.prototype.setData = function(t, e) {
        return void 0 === e && (e = !1), __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(a) {
                for (e in t) egret.localStorage.setItem(e, t[e]);
                return [2]
            })
        })
    }, e.prototype.canAdd2HomeScreen = function() {
        return !0
    }, e.prototype.add2HomeScreen = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, {
                    res: !0,
                    code: ""
                }]
            })
        })
    }, e.prototype.checkBotSubscribe = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, {
                    result: !0
                }]
            })
        })
    }, e.prototype.suportIAP = function() {
        return !1
    }, e.prototype.purchaseAsync = function(t, e) {
        return void 0 === e && (e = ""), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, !1]
            })
        })
    }, e.prototype.hasPurchased = function(t) {
        return !1
    }, e
}(Emiter);
__reflect(BasePlatform.prototype, "BasePlatform", ["IResponder"]);
var Main = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), egret.ImageLoader.crossOrigin = "anonymous", e
    }
    return __extends(e, t), e.prototype.onAddToStage = function(t) {
        this.applyConsole(), egret.lifecycle.addLifecycleListener(function(t) {
            t.onUpdate = function() {}
        }), egret.lifecycle.onPause = function() {
            egret.ticker.pause()
        }, egret.lifecycle.onResume = function() {
            egret.ticker.resume()
        }, this.runGame()["catch"](function(t) {
            console.log(t)
        })
    }, e.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return App.startup(this.stage), platform = PlatformFactory.create(), platform.log(Constant.LogEvent.game_loading, {
                            type: "initialized"
                        }), [4, this.loadResource()];
                    case 1:
                        return t.sent(), [4, RES.getResAsync("description_json")];
                    case 2:
                        return t.sent(), platform.setLoadingProgress(1), [4, platform.initSDK()];
                    case 3:
                        return t.sent(), console.log("init---"), [4, platform.startGame(["2217370948579234_2217373611912301", "2217370948579234_2217373948578934", "2217370948579234_2217374045245591"], ["2217370948579234_2217374128578916", "2217370948579234_2217374285245567", "2217370948579234_2217374355245560"])];
                    case 4:
                        return t.sent(), app.http.checkSuper()["catch"](function(t) {
                            return console.log("check super error")
                        }), [4, platform.checkBotSubscribe()];
                    case 5:
                        return t.sent(), [4, app.connect.addShortcut()];
                    case 6:
                        return t.sent(), this.PlayGame(), platform.log(Constant.LogEvent.game_loading, {
                            type: "ready"
                        }), app.notify(Constant.Notify.game_ready), [2]
                }
            })
        })
    }, e.prototype.PlayGame = function() {
        var t = new GameScene;
        this.addChild(t), this.stage.removeChild(this.LoadView);
        var e = new egret.TextField;
        this.addChild(e), e.x = egret.MainContext.instance.stage.stageWidth / 2, e.y = egret.MainContext.instance.stage.stageHeight - 25, e.size = 16, e.textColor = 7633807, e.text = $T_GAME_VERSION, e.anchorOffsetX = e.width / 2, e.anchorOffsetY = e.height / 2
    }, e.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 4, , 5]), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        return e.sent(), [4, RES.loadGroup("loading")];
                    case 2:
                        return e.sent(), platform.setLoadingProgress(.1), this.LoadView = new LoadingUI, this.stage.addChild(this.LoadView), [4, RES.loadGroup("preload", 0, this.LoadView)];
                    case 3:
                        return e.sent(), platform.setLoadingProgress(.8), [3, 5];
                    case 4:
                        return t = e.sent(), console.error(t), [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }, e.prototype.applyConsole = function() {
        var t = this,
            e = (console.log, "e3sdsfs3eee"),
            a = "true" == egret.localStorage.getItem(e),
            s = null,
            i = function(t) {
                egret.Capabilities.runtimeType == egret.RuntimeType.WEB && egret.Capabilities.isMobile && (t ? s ? s.showSwitch() : s = new window.VConsole : s && s.hideSwitch())
            };
        i(a), Object.defineProperty(window, "$dev", {
            get: function() {
                return a
            },
            set: function(t) {
                egret.localStorage.setItem(e, t), a = t, i(t)
            },
            configurable: !0
        });
        var o = 0,
            r = 0;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
            50 == Math.abs(Math.clamp(e.stageX - t.stage.stageWidth / 2, -50, 50)) || e.stageY >= 50 || (r++, clearTimeout(o), o = setTimeout(function() {
                r >= 5 && ($dev = !$dev), r = 0
            }, 200))
        }, this)
    }, e
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var App = function(t) {
    function e(e) {
        var a = t.call(this) || this;
        return a.stage = e, a._busyCount = 0, a._busy_timer = 0, a.event = new Emiter, a
    }
    return __extends(e, t), e.prototype.init = function() {
        this.http = new HttpService, this.storager = new Storager, this.model = new GameModel, this.connect = new GameConnect
    }, e.startup = function(t) {
        var a = new e(t);
        return Object.defineProperty(window, "app", {
            get: function() {
                return a
            },
            configurable: !0
        }), a.init(), a.registCommand(Constant.Notify.startup, StartupCmd), a.notify(Constant.Notify.startup), a
    }, e.prototype.busy = function() {
        egret.clearTimeout(this._busy_timer), egret.setTimeout(this.busyTimerOut, this, 2e4), 0 == this._busyCount++ && (this._busyInst = new BusyIndicator, this.stage.addChild(this._busyInst), this._busyInst.x = this.stage.stageWidth >> 1, this._busyInst.y = this.stage.stageHeight >> 1)
    }, e.prototype.rmBusy = function() {
        --this._busyCount <= 0 && this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
    }, e.prototype.busyTimerOut = function() {
        this._busyCount = 0, this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
    }, e.prototype.toast = function(t, e, a) {
        void 0 === e && (e = 1e3), void 0 === a && (a = 200)
    }, e
}(Facade);
__reflect(App.prototype, "App");
var Constant;
! function(t) {
    var e;
    ! function(t) {
        t[t.startup = 0] = "startup", t[t.game_ready = 1] = "game_ready", t[t.game_over = 2] = "game_over"
    }(e = t.Notify || (t.Notify = {})), t.context_template = {
        heart: "heart",
        challenge: "challenge",
        challenge_result: "challenge_result",
        auto_choose: "auto_choose",
        skin_invite: "skin_invite",
        home_share: "home_share"
    }, t.LogEvent = {
        add_home_screen: "add_home_screen",
        game_loading: "game_loading",
        play_times: "play_times",
        level: "level",
        dead: "dead"
    }, t.SAME_CONTEXT = "SAME_CONTEXT", t.USER_INPUT = "USER_INPUT"
}(Constant || (Constant = {}));
var GameModel = function() {
    function t() {
        this.lastContextualScore = 1, this.play_times = 0, this.isSuper = !1, this.invite_skin_share_count = 0
    }
    return t
}();
__reflect(GameModel.prototype, "GameModel");
var GameOverCmd = function() {
    function t() {}
    return t.prototype.excute = function(t, e) {
        var a = +t;
        console.log("enter GameOverCmd"), app.model.play_times++;
        var s = platform.isNewPlayer ? "New_Play_Times" : "Old_Play_Times";
        if (platform.log(Constant.LogEvent.play_times, {
                result: app.model.play_times,
                type: s
            }), platform.log(Constant.LogEvent.level, {
                result: a
            }), app.model.lastContextualScore = t, platform instanceof PlatformFB) {
            if (FBInstant.context.getID()) {
                var i = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1;
                i || ShareHelper.sendLeadboardUpdate(t)["catch"](function(t) {
                    console.log("challenge failed:", t)
                })
            }
            FBInstant.setSessionData({
                nickname: platform.userInfo.name,
                playerInfo: {
                    head: platform.userInfo.photo,
                    lang: platform.userInfo.lang,
                    score: platform.getHighScore()
                }
            })
        }
    }, t
}();
__reflect(GameOverCmd.prototype, "GameOverCmd", ["ICommand"]);
var GameReadyCmd = function() {
    function t() {
        this._lastContextId = null, this._contextLeaderBoard = null
    }
    return t.prototype.excute = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                return console.log("enter GameReadyCmd"), platform instanceof PlatformFB && (console.log("platform.entry", platform.entry), t = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1, t || this.watchContextIfChanged()), platform.getContextId() && 0 == platform.entry.indexOf("bot_") && (app.connect.pendingChallengePost = !0), !platform.getContextId() || platform.entry != Constant.context_template.auto_choose && platform.entry != Constant.context_template.skin_invite && platform.entry != Constant.context_template.home_share || (app.connect.pendingChallengePost = !0), platform.getContextId() && "group_rank" == platform.entry && (app.connect.pendingChallengePost = !0), app.http.reportFriends()["catch"](function(t) {
                    return console.log("report friends failed:", t)
                }), app.http.reportSwitchGame()["catch"](function(t) {}), app.http.getRecommendGames()["catch"](function(t) {}), app.http.reportIfFromSkinShare()["catch"](function(t) {}), app.http.getSkinShareCount()["catch"](function(t) {}), [2]
            })
        })
    }, t.prototype.showChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB) || FBInstant.context.getID()) return [3, 5];
                        app.busy(), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                    case 2:
                        return t = a.sent(), ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                    case 3:
                        return e = a.sent(), [3, 4];
                    case 4:
                        app.rmBusy(), a.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }, t.prototype.watchContextIfChanged = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a, s, i, o, r, n;
            return __generator(this, function(h) {
                switch (h.label) {
                    case 0:
                        t = FBInstant.player.getName(), e = app.model, h.label = 1;
                    case 1:
                        if (a = FBInstant.context.getID(), !a) return [3, 13];
                        if (s = "context." + a, a == this._lastContextId) return [3, 8];
                        console.log("context changes detected"), h.label = 2;
                    case 2:
                        return h.trys.push([2, 6, , 7]), this._lastContextId = a, i = this, [4, FBInstant.getLeaderboardAsync(s)];
                    case 3:
                        return i._contextLeaderBoard = h.sent(), e.lastContextualScore = 1, console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(e.lastContextualScore, "")];
                    case 4:
                        return h.sent(), console.log("sending update ..."), [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: s,
                            text: t + " joined this game"
                        })];
                    case 5:
                        return h.sent(), [3, 7];
                    case 6:
                        return o = h.sent(), console.log("rank msg failed:", o), [3, 7];
                    case 7:
                        console.log("all done!"), h.label = 8;
                    case 8:
                        if (r = app.connect.getCurentScore() || 0, !(r > e.lastContextualScore)) return [3, 13];
                        h.label = 9;
                    case 9:
                        return h.trys.push([9, 12, , 13]), console.log("score changed!"), e.lastContextualScore = r, console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(e.lastContextualScore, "")];
                    case 10:
                        return h.sent(), console.log("sending update ..."), [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: s,
                            text: t + " scored " + r,
                            data: {
                                ss: "hhh"
                            }
                        })];
                    case 11:
                        return h.sent(), console.log("all done!"), [3, 13];
                    case 12:
                        return n = h.sent(), console.log("score changed update failed:", n), [3, 13];
                    case 13:
                        return [4, waitAsync(3e3)];
                    case 14:
                        return h.sent(), [3, 1];
                    case 15:
                        return [2]
                }
            })
        })
    }, t
}();
__reflect(GameReadyCmd.prototype, "GameReadyCmd", ["ICommand"]);
var StartupCmd = function() {
    function t() {}
    return t.prototype.excute = function(t, e) {
        app.registCommand(Constant.Notify.game_over, GameOverCmd), app.registCommand(Constant.Notify.game_ready, GameReadyCmd)
    }, t
}();
__reflect(StartupCmd.prototype, "StartupCmd", ["ICommand"]);
var BusyIndicator = function(t) {
    function e() {
        var e = t.call(this) || this;
        e.autoClose = !1;
        var a = RES.getRes("loading_indicator_png");
        return e._bmp = new egret.Bitmap(a), e._bmp.anchorOffsetX = a.textureWidth >> 1, e._bmp.anchorOffsetY = a.textureHeight >> 1, e.addChild(e._bmp), e.width = e.height = 0, e
    }
    return __extends(e, t), e.prototype.$onAddToStage = function(e, a) {
        t.prototype.$onAddToStage.call(this, e, a), egret.Tween.get(this._bmp, {
            loop: !0
        }).to({
            rotation: 180
        }, 1e3).to({
            rotation: 360
        }, 1e3)
    }, e.prototype.$onRemoveFromStage = function() {
        t.prototype.$onRemoveFromStage.call(this), egret.Tween.removeTweens(this._bmp)
    }, e
}(egret.Sprite);
__reflect(BusyIndicator.prototype, "BusyIndicator");
var GameConnect = function() {
    function t() {
        this._deadCount = 0, this.pendingChallengePost = !1, this.Init()
    }
    return t.prototype.Init = function() {
        t.iPhoneH = 0, t.iPhoneW = 0, t.NowLanguage = 1, t.OpenAdWall = 0, t.ADVideoState = 0, t.NowGate = 1, this.LoginGame()
    }, t.prototype.LoginGame = function() {}, t.prototype.OpenWallOrNot = function() {
        return t.OpenAdWall
    }, t.prototype.GetiPhoneH = function() {
        var t = egret.MainContext.instance.stage.stageHeight;
        return (t - 1136) / 2
    }, t.prototype.GetiPhoneW = function() {
        var t = egret.MainContext.instance.stage.stageWidth;
        return (t - 640) / 2
    }, t.prototype.GetLanguage = function() {
        return t.NowLanguage
    }, t.prototype.OpenMyGame = function(t) {
        1 == t ? platform.switchGame("631070910729163") : 2 == t ? platform.switchGame("2291347300982909") : 3 == t ? platform.switchGame("433407643886357") : 4 == t ? platform.switchGame("2395498987440880") : 5 == t ? platform.switchGame("2723386147774745") : 6 == t ? platform.switchGame("2382175652015239") : 7 == t ? platform.switchGame("1823980364406142") : 8 == t ? platform.switchGame("217972749313878") : 9 == t ? platform.switchGame("2217370948579234") : 10 == t ? platform.switchGame("1930765820368347") : 11 == t ? platform.switchGame("531290454104019") : 12 == t ? platform.switchGame("2688978951321971") : platform.switchGame("143095279886626")
    }, t.prototype.GetMyGameName = function() {
        var t = ["Flip Bottle", "Road Turn", "Traffic Go", "Train Snake", "Dig It", "Bomb Balls 3D", "Cheese Up", "Slap King", "Pick Me Home", "Jumpz", "Rope Help", "Water Flow", "Road Race.io"];
        return t
    }, t.prototype.GetMyGameNum = function() {
        var t = [6500, 6e3, 5e3, 3e3, 3e3, 3e3, 2500, 2e3, 2e3, 1e3, 1e3, 800, 500];
        return t
    }, t.prototype.OpenMyBot = function() {
        platform.checkBotSubscribe()
    }, t.prototype.GetPlatForm = function() {
        return 1 == platform.getPlatFormiOS() ? 1 : 0
    }, t.prototype.ShareGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, ShareHelper.sendGenericUpdate(Constant.context_template.home_share, null, !0)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, t.prototype.ChallengeGame = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, platform.createCtx(t)];
                    case 1:
                        return e = a.sent(), this.pendingChallengePost = !0, [2, e]
                }
            })
        })
    }, t.prototype.CreateGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return t = platform.getContextId(), console.log("contextID: " + t), [4, platform.switchCtx(t)];
                    case 1:
                        return e = a.sent(), [2, e]
                }
            })
        })
    }, t.prototype.ShowADChaping = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.log("开启插屏广告"), [4, platform.showIAD()];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, t.prototype.ShowADVideo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return console.log("开启视频广告"), t.ADVideoState = -1, platform.hasRAD() ? platform.showRAD().then(function() {
                    t.ADVideoState = 1
                })["catch"](function() {
                    t.ADVideoState = 0
                }) : t.ADVideoState = 0, [2]
            })
        })
    }, t.prototype.GetADVideoState = function() {
        return t.ADVideoState
    }, t.prototype.SignInGameCenter = function() {
        console.log("登录排行榜")
    }, t.prototype.UpLoadScore = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return console.log("上传分数"), [4, platform.setHighScore(t)];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.UpSessionScore = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return console.log("上传会话分数"), [2]
            })
        })
    }, t.prototype.GetMyID = function() {
        return platform.userInfo.id
    }, t.prototype.GetMyName = function() {
        return platform.userInfo.name
    }, t.prototype.GetMyImage = function() {
        return platform.userInfo.photo
    }, t.prototype.GetMyRank = function() {
        var t = platform.getWorldSelfEntry();
        return t ? t.originalRank : 999999
    }, t.prototype.GetFriendRankList = function() {
        return platform.getWorldFriendEntries()
    }, t.prototype.GetWorldRankList = function() {
        return platform.getWorldEntries()
    }, t.prototype.GetUserName = function(t) {
        return 1 == t ? this.GetWorldRankList().map(function(t) {
            return t.name
        }) : this.GetFriendRankList().map(function(t) {
            return t.name
        })
    }, t.prototype.GetUserID = function(t) {
        return 1 == t ? this.GetWorldRankList().map(function(t) {
            return t.id
        }) : this.GetFriendRankList().map(function(t) {
            return t.id
        })
    }, t.prototype.GetUserImage = function(t) {
        return 1 == t ? this.GetWorldRankList().map(function(t) {
            return t.photo
        }) : this.GetFriendRankList().map(function(t) {
            return t.photo
        })
    }, t.prototype.GetUserScore = function(t) {
        return 1 == t ? this.GetWorldRankList().map(function(t) {
            return t.score
        }) : this.GetFriendRankList().map(function(t) {
            return t.score
        })
    }, t.prototype.canaAutoEnterGame = function() {
        return !platform.isNewPlayer && !!platform.getContextId()
    }, t.prototype.onGameStart = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]), [4, this.addShortcut()];
                    case 1:
                        return e.sent(), [3, 3];
                    case 2:
                        return t = e.sent(), console.log("shortcut error:", t), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.readData = function() {
        var t = platform.remoteData.game_db || {};
        return t
    }, t.prototype.setData = function(t) {
        platform.remoteData.game_db = t, platform.syncRemoteData()
    }, t.prototype.onGameOver = function(t) {
        app.notify(Constant.Notify.game_over, t)
    }, t.prototype.onDead = function(t) {
        platform.log(Constant.LogEvent.dead, {
            result: ++this._deadCount
        })
    }, t.prototype.setCurentScore = function(e) {
        t.NowGate = e
    }, t.prototype.getCurentScore = function() {
        var e = t.NowGate;
        return e
    }, t.prototype.getInviteCount = function() {
        return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []), platform.remoteData.skin_invites.length
    }, t.prototype.pullInviteCount = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, app.http.getSkinShareCount()];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, t.prototype.inviteForSkin = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []), [4, platform.choose(["NEW_CONTEXT_ONLY"], !0, Constant.context_template.skin_invite)];
                    case 1:
                        if (t = a.sent()) {
                            if (e = platform.getContextId(), -1 != platform.remoteData.skin_invites.indexOf(e)) return app.toast("Duplicated, try another person"), [2, !1];
                            platform.remoteData.skin_invites.push(e), platform.syncRemoteData(), ShareHelper.sendGenericUpdate(Constant.context_template.skin_invite)
                        }
                        return [2, !0]
                }
            })
        })
    }, t.prototype.showChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB)) return [3, 5];
                        app.busy(), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                    case 2:
                        return t = a.sent(), ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                    case 3:
                        return e = a.sent(), [3, 4];
                    case 4:
                        app.rmBusy(), a.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }, t.prototype.suportIAP = function() {
        return !1
    }, t.prototype.purchaseRemoveAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.purchaseAsync("1")];
                    case 1:
                        return t = e.sent(), [2, t]
                }
            })
        })
    }, t.prototype.hasPurchasedRemoveAD = function() {
        return platform.hasPurchased("1")
    }, t.prototype.getLeaderboardByLevel = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        this.leaderBoad && this.leaderBoad.name == "level_l_" + t || (this.leaderBoad = new LeaderBoard("level_l_" + t, "LOWER_IS_BETTER", 999), this.leaderBoad.setFriends(platform.getFriends())), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, this.leaderBoad.initializeAsync(!1, !0)];
                    case 2:
                        return a.sent(), [3, 4];
                    case 3:
                        return e = a.sent(), console.log("fuck", e), [3, 4];
                    case 4:
                        return [2, this.leaderBoad]
                }
            })
        })
    }, t.prototype.onLevelStart = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return console.log("请求" + t + "关数据"), platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(t)] : [2];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.getLevelRanks = function(t, e, a) {
        return void 0 === a && (a = !1), __awaiter(this, void 0, void 0, function() {
            var s, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return console.log("得到" + t + "关数据"), platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(t)] : (platform.setHighScore(e), [2, platform.getWorldFriendEntries()]);
                    case 1:
                        return s = o.sent(), a || this.leaderBoad.setScore(e), i = s.getConnectedPlayerEntries(), console.log("getLevelRanks", i.length), [2, i.length > 0 ? i : null]
                }
            })
        })
    }, t.prototype.getVersion = function() {
        return $T_GAME_VERSION
    }, t.prototype.challengePost = function(t, e) {
        ShareHelper.challengePost(t, e)
    }, t.prototype.challengeShare = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, ShareHelper.challengeShare(t, e)];
                    case 1:
                        return a.sent(), [2]
                }
            })
        })
    }, t.prototype.getChallengeLevel = function() {
        return platform.challenge_info && platform.challenge_info.level || -1
    }, t.prototype.hasContext = function() {
        return !!platform.getContextId()
    }, t.prototype.canAutoChallengePost = function() {
        var t = this.pendingChallengePost;
        return console.log("canAutoChallengePost", t), this.pendingChallengePost = !1, t
    }, t.prototype.getRecommendGamesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t = this;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return app.model.recommendGames ? [3, 2] : [4, new Promise(function(e) {
                            app.event.on("game_recommend_ready", function() {
                                e()
                            }, t)
                        })];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2, app.model.recommendGames]
                }
            })
        })
    }, t.prototype.onRecommendGameTapped = function(t) {
        platform.switchGame(t)
    }, t.prototype.getLoginDays = function() {
        var t = platform.remoteData.login_day_count;
        return t ? t : 0
    }, t.prototype.isSuper = function() {
        return 1 == app.model.isSuper ? 1 : 0
    }, t.prototype.addShortcut = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return console.log("addShortcut...."), console.log(platform.remoteData.add_hs_refuse_count), console.log(platform.remoteData.add_hs), console.log(platform.canAdd2HomeScreen()), platform.remoteData.add_hs_refuse_count >= 2 ? [2] : 0 != platform.remoteData.add_hs ? [2] : (t = platform.canAdd2HomeScreen()) ? (e = platform.playerType, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: e,
                            result: -1
                        }), [4, platform.add2HomeScreen()]) : [2];
                    case 1:
                        return a = s.sent(), a.res ? (platform.remoteData.add_hs = 1, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: e,
                            result: 1
                        })) : (a.code == Constant.USER_INPUT ? platform.remoteData.add_hs_refuse_count++ : platform.remoteData.add_hs = 2, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: e,
                            result: 0,
                            code: a.code
                        })), platform.syncRemoteData(), [2]
                }
            })
        })
    }, t
}();
__reflect(GameConnect.prototype, "GameConnect"), Date.prototype.format = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var a in e) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[a] : ("00" + e[a]).substr(("" + e[a]).length)));
    return t
}, Date.week = function(t) {
    void 0 === t && (t = 2521);
    var e = -252e5,
        a = ~~((Date.now() + e + 864e5) / 6048e5) - t - 1;
    return a
}, Date.days = function(t) {
    void 0 === t && (t = 0);
    var e = -252e5,
        a = ~~((Date.now() + e + 864e5) / 864e5) - t - 1;
    return a
}, egret.DisplayObject.prototype.removeFromParent = function() {
    this.parent && this.parent.removeChild(this)
}, String.prototype.substitute = function(t) {
    return this.replace(/\{(.+?)\}/gi, function(e, a) {
        return t[a]
    })
}, Array.prototype.random = function(t) {
    if (void 0 === t && (t = !1), 0 == this.length) return null;
    var e = Math.floor(this.length * Math.random());
    this[e];
    return t && this.splice(e, 1), this[e]
}, Array.prototype.choice = function(t) {
    if (0 == this.length) return null;
    void 0 == t && (t = function(t) {
        return t
    });
    for (var e = this.reduce(function(e, a) {
            return e + t(a)
        }, 0) * Math.random(), a = this.length, s = 0; a > s; s++) {
        var i = t(this[s]);
        if (i > e) return this[s];
        e -= i
    }
    return this[a - 1]
}, Array.prototype.unique = function() {
    for (var t = [], e = 0; e < this.length;) {
        this[e];
        t.indexOf(this[e]) >= 0 ? this.splice(e, 1) : t.push(this[e++])
    }
    return this
}, Array.prototype.sorton = function(t, e) {
    return void 0 === e && (e = !0), this.sort(function(a, s) {
        var i = a[t] || 0,
            o = s[t] || 0,
            r = i > o ? 1 : o > i ? -1 : 0;
        return e || (r *= -1), r
    })
}, Array.prototype.shuffle = function() {
    for (var t = this.length - 1; t > 0; t--) {
        var e = Math.floor(Math.random() * (t + 1));
        a = [this[e], this[t]], this[t] = a[0], this[e] = a[1]
    }
    return this;
    var a
}, Array.prototype.rm = function(t) {
    for (var e = "function" == typeof t ? t : function(e) {
            return e == t
        }, a = 0; a < this.length;) {
        var s = this[a];
        if (e(s)) return this.splice(a, 1), !0;
        a++
    }
    return !1
}, Array.prototype.next = function() {
    return (void 0 == this._iter_index || this._iter_index >= this.length) && (this._iter_index = 0), this[this._iter_index++]
}, Math.randInt = function(t, e) {
    return void 0 === t && (t = 0), void 0 === e && (e = 10), Math.floor(Math.random() * (e - t + 1)) + t
}, Math.clamp = function(t, e, a) {
    return Math.max(e, Math.min(t, a))
};
var GameMessage = function() {
    function t() {
        this.BlockState = [], this.BlockRotate = [], this.BlockStateX = [], this.BlockStateY = []
    }
    return t.prototype.SetGateMessage = function(t) {
        switch (t) {
            case 1:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 10, 5, 1, 1, 1, 7, 1, 1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 3, 5, 11, 1, 1, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 980, 770, 770, 770, 770, 770, 560, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 560, 770, 770, 770, 770, 770, 770], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 2660, 2940, 2800, 2730, 2800, 3570, 2800, 3080, 2520, 2380, 2240, 2240, 2100, 3150, 2170, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 910, 980, 700, 630, 280, 140, 0];
                break;
            case 2:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 7, 2, 1, 1, 11, 13, 5, 3, 1, 1, 9, 9], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180], this.BlockStateX = [910, 910, 910, 910, 910, 910, 910, 910, 840, 910, 770, 560, 560, 1120, 1190, 1190, 1190, 1190, 1190, 1190, 1330, 1470, 1610, 1050, 1190, 910, 1750, 770, 1190, 630, 490, 1190, 490, 910, 1190, 1190, 1190, 1190, 770, 840, 1190, 1190, 1190, 930, 1190, 1190, 1190, 1190, 280, 1960], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2870, 2380, 2380, 2730, 2450, 2310, 2100, 1960, 1820, 1680, 1540, 1400, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 140, 1820, 1820, 0, 1820, 3570, 1260, 1120, 980, 840, 2170, 2380, 700, 560, 700, 980, 1050, 980, 420, 280, 1820, 1820];
                break;
            case 3:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 2, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 5, 3, 11, 1, 1, 6, 16], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [840, 840, 840, 840, 840, 840, 840, 840, 840, 630, 840, 840, 840, 840, 840, 840, 980, 700, 1120, 560, 1260, 1400, 420, 1540, 1680, 280, 70, 1890, 840, 840, 840, 910, 1120, 1470, 1540, 1260, 1540, 1540, 1540, 560, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 840, 1750], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 3080, 3010, 3500, 2800, 2660, 2520, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2240, 2100, 1960, 1750, 1680, 1610, 1400, 1680, 1260, 1120, 980, 2030, 840, 700, 560, 420, 280, 1050, 980, 770, 140, 0, 2380, 980];
                break;
            case 4:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 8, 10, 1, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 6, 6, 4, 1, 1, 4, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 5, 10, 15, 9, 9, 3, 9, 9, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, -90, -90, 0, 0, -180, -90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [840, 840, 840, 840, 840, 840, 840, 840, 1050, 840, 840, 840, 840, 840, 840, 560, 700, 840, 420, 280, 980, 1820, 980, 1120, 1260, 1400, 840, 840, 840, 560, 700, 840, 980, 1120, 1260, 1400, 1540, 420, 280, 1540, 1540, 1680, 840, 840, 910, 1120, 1260, 1680, 1540, 1680, 840, 840, 1470, 1540, 1120, 1470, 1260, 1120, 980, 840, 700, 630, 560, 1400, 1260, 1960, 980, 2240, 1050, 70, 1890, 980, 1890, 70, 1540, 420, 840, 280, 700, 560, 140, 420, 280, 140, 0, 0], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 3150, 3570, 2940, 3220, 3080, 2800, 2660, 2520, 2520, 2520, 2520, 2520, 980, 980, 2520, 2520, 2520, 2520, 2380, 2240, 2100, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1120, 980, 1960, 1820, 1680, 1470, 1400, 1400, 980, 2520, 2520, 2590, 1960, 1330, 840, 980, 630, 560, 560, 560, 560, 560, 560, 560, 980, 980, 980, 560, 1330, 280, 1960, 1960, 560, 2520, 2520, 980, 560, 980, 560, 980, 980, 560, 980, 980, 980, 980, 560];
                break;
            case 5:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 7, 1, 1, 1, 1, 1, 9, 1, 6, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 10, 13, 3, 5, 11, 8], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -90, 90, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [420, 420, 420, 420, 420, 420, 420, 420, 420, 490, 770, 910, 1330, 1120, 1400, 1400, 1120, 1400, 1400, 1400, 1540, 1680, 1890, 1260, 1400, 1400, 1400, 1400, 1120, 980, 840, 700, 210, 560, 420, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1400, 1400, 1400, 1750, 1960, 1400, 1400, 1400, 1330, 630, 840, 980, 1120, 560, 560, 560, 560, 560, 1190, 420, 420, 840, 560, 560, 560, 1190], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2730, 3010, 3010, 3080, 2800, 2660, 3290, 2520, 2380, 2240, 2240, 2240, 2240, 2240, 2240, 2100, 1960, 1820, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1680, 1540, 1400, 1750, 1750, 1750, 1260, 1120, 910, 770, 840, 840, 840, 560, 420, 280, 140, 0, 3080, 2870, 3640, 350, 420, 210, 140, 1400];
                break;
            case 6:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 4, 1, 1, 1, 1, 4, 8, 10, 2, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 11, 3, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 210, 420, 560, 700, 840, 1120, 1260, 1400, 1540, 1680, 1890, 980, 980, 980, 1050, 1260, 1400, 1540, 1540, 1750, 770, 980, 980, 1750, 1400, 1260, 1120, 980, 700, 770, 700, 700, 700, 700, 700, 700, 700, 700, 700, 920, 700, 700, 980], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2520, 2380, 2240, 2030, 1960, 1960, 1960, 1540, 1890, 3220, 3570, 3150, 1610, 1540, 1540, 1540, 1540, 1260, 1470, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 840, 700, 910, 2800];
                break;
            case 7:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 10, 8, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 4, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 9, 7, 3, 8, 2, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 9, 14, 11, 3], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 90, 0, -180, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -180, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0], this.BlockStateX = [350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 420, 700, 770, 770, 770, 770, 840, 350, 980, 770, 1400, 1050, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1400, 1050, 1190, 910, 1750, 1330, 1470, 1470, 1610, 280, 1960, 560, 1050, 490, 770, 490, 1470, 770, 770, 1470, 1470, 1190, 1190, 1120, 1330, 1610, 1750, 1960, 1680, 1470, 280, 490, 1330, 560, 770, 910, 1050, 1190, 1540, 1330, 1540, 1190, 1050, 910, 770, 560, 910, 490, 490, 490, 1050, 630, 1050, 770, 1050, 1050, 1050, 1050, 490, 1050, 240, 490, 490], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2450, 2450, 2660, 2800, 2940, 3080, 3570, 3570, 2800, 2870, 3570, 3640, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 1750, 2100, 2100, 2100, 2100, 2100, 1960, 2100, 2100, 2100, 2100, 1610, 1680, 1260, 1680, 1400, 2100, 3220, 3360, 3360, 3220, 1680, 3640, 3220, 3220, 3220, 3220, 3220, 2520, 2450, 1400, 1330, 980, 1050, 980, 980, 980, 980, 910, 560, 630, 560, 560, 560, 560, 490, 1680, 280, 140, 0, 1120, 2100, 700, 2100, 1330, 840, 420, 280, 2100, 70, 140, 140, 210];
                break;
            case 8:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 2, 10, 6, 1, 1, 4, 1, 4, 1, 4, 4, 1, 1, 1, 1, 1, 9, 9, 1, 1, 6, 1, 7, 3, 1, 1, 1, 4, 1, 1, 8, 1, 1, 1, 4, 2, 1, 1, 1, 1, 9, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 16, 11, 1, 1, 1, 3, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, -180, 0, 90, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, -90, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [910, 910, 910, 910, 560, 700, 840, 420, 280, 1540, 980, 1120, 1260, 1400, 910, 910, 910, 700, 910, 910, 910, 910, 910, 910, 840, 910, 560, 770, 560, 1540, 1050, 1190, 1330, 1610, 1610, 70, 2030, 1680, 1820, 910, 1610, 1400, 1610, 1610, 1610, 1610, 1540, 1330, 1190, 1190, 1960, 1050, 910, 700, 1120, 630, 630, 630, 630, 140, 490, 350, 770, 630, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1960, 630, 630, 890, 630, 630, 630, 630, 630, 630], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3360, 3220, 3080, 3010, 2940, 2940, 3640, 3500, 2800, 2660, 2310, 2520, 2310, 2660, 2590, 2590, 2660, 2660, 2660, 2380, 2240, 3500, 3500, 3500, 3500, 2660, 2100, 2170, 2100, 1960, 1820, 1680, 1470, 1400, 1400, 1610, 70, 1400, 1400, 1330, 1400, 1120, 980, 840, 700, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 560, 420, 490, 350, 280, 140, 0, 490, 560];
                break;
            case 9:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 8, 10, 2, 5, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 9, 9, 1, 4, 1, 1, 1, 1, 1, 1, 7, 1, 6, 6, 3, 4, 1, 1, 1, 1, 1, 8, 2, 4, 1, 4, 1, 1, 4, 1, 1, 14, 3, 1, 1, 1, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, -180, 0, -180, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, -180, 180, 0, 0, 180, 0, 0, 90, 0, 0, 0, 90, 0, 0, 0, 90], this.BlockStateX = [350, 350, 350, 350, 350, 350, 350, 350, 140, 350, 350, 350, 350, 420, 700, 770, 770, 770, 630, 910, 490, 1050, 350, 1190, 140, 770, 1190, 1050, 350, 1400, 770, 770, 770, 910, 630, 490, 140, 1400, 770, 840, 1050, 1190, 1330, 1470, 1750, 1750, 1190, 1750, 770, 770, 1260, 1680, 1750, 1750, 1750, 1750, 1750, 1960, 1750, 1680, 1470, 1120, 1330, 1330, 1120, 1470, 1610, 1700, 1700, 1750, 1890, 2030, 1750], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 3220, 3430, 3150, 3220, 2940, 2730, 2590, 2380, 2240, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 1540, 1680, 1680, 1680, 2100, 1960, 1820, 1680, 1680, 1680, 1680, 1680, 1680, 1400, 1190, 1120, 1120, 1120, 1120, 1400, 1680, 910, 1540, 2100, 1680, 1120, 1190, 1820, 1960, 2100, 2240, 2380, 1540, 1610, 2590, 2660, 2730, 2660, 3080, 3010, 3080, 3080, 2800, 3080, 3080, 3080, 3080, 3080];
                break;
            case 10:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 8, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 7, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 2, 5, 5, 5, 5, 6, 6, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 7, 1, 6, 1, 4, 1, 1, 1, 1, 1, 15, 3, 5, 11, 1, 9], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 90, 0, -180, 0, 0, 0, 0, 90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, -90, 90, 90, 90, 90, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90], this.BlockStateX = [420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 630, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1750, 1750, 1540, 1400, 1260, 1120, 980, 840, 700, 490, 700, 490, 840, 980, 1120, 1260, 1400, 420, 1470, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 1400, 1330, 910, 1120, 1120, 910, 980, 980, 980, 980, 980, 1400, 1610, 1680, 1680, 1400, 1610, 1260, 1120, 840, 700, 980, 980, 1470, 1680, 980, 560, 350, 280, 280, 280, 280, 280, 560, 280, 280, 280, 980, 980], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 3430, 2800, 2940, 2660, 2450, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2310, 2030, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1890, 1540, 1610, 1540, 1540, 1540, 1540, 2170, 2870, 2380, 2240, 2100, 1820, 1680, 1400, 1260, 2520, 2660, 2800, 2940, 3080, 3290, 1750, 1960, 2380, 2380, 1960, 1960, 2380, 1960, 1120, 980, 840, 1540, 1470, 1260, 1120, 840, 910, 840, 840, 840, 840, 700, 560, 1120, 1050, 1540, 840, 770, 560, 420, 280, 140, 0, 280, 350, 420, 140, 420, 210];
                break;
            case 11:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 10, 2, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 9, 9, 7, 3, 1, 1, 8, 2, 1, 1, 1, 1, 1, 1, 1, 14, 11, 3], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 180, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, -180, -180, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1400, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1540, 1610, 1260, 1190, 1190, 1190, 1190, 1750, 1960, 1470, 1330, 1190, 1470, 1330, 1190, 1330, 1260, 1540, 1540, 910, 980, 910, 910, 910, 840, 560, 490, 490, 490, 490, 490, 1750, 980, 1330, 1470, 1050, 630, 770, 1610, 350, 140, 1750, 1960, 980, 1960, 1820, 1610, 1190, 1610, 1400, 1190, 490, 490, 490, 490, 490, 490, 490, 700, 490, 490], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 2940, 2800, 2940, 3430, 2870, 3080, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1470, 1680, 1330, 1120, 980, 840, 700, 2520, 2520, 2520, 2520, 2520, 2100, 2100, 2100, 840, 350, 350, 770, 1260, 910, 1120, 1400, 1540, 1750, 1750, 1540, 1400, 1260, 1120, 980, 2100, 2520, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 2100, 2100, 1680, 1610, 560, 560, 560, 490, 840, 700, 560, 420, 280, 140, 0, 420, 280, 420];
                break;
            case 12:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 10, 8, 2, 4, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 7, 1, 1, 1, 3, 6, 1, 4, 1, 1, 1, 1, 4, 4, 4, 1, 8, 2, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 9, 14, 11, 3], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, -90, 180, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, -90, 0, 180, 0, 0, 0, 0, -90, 90, 0, 0, -90, 90, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0], this.BlockStateX = [1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1610, 1330, 1260, 1260, 980, 1190, 840, 1680, 1470, 1680, 490, 700, 840, 840, 840, 840, 840, 840, 840, 420, 420, 840, 420, 210, 420, 420, 420, 420, 840, 420, 490, 700, 840, 980, 1680, 1190, 1330, 1610, 1680, 840, 910, 1680, 1680, 1680, 1610, 1400, 1260, 1120, 980, 840, 700, 980, 980, 980, 980, 420, 490, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1610, 1680, 1680, 1680, 1680, 980, 980, 980, 980, 980, 1400, 1680, 1680], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2870, 2870, 3080, 3220, 3500, 3430, 3500, 3570, 3150, 3080, 3430, 3500, 3990, 3640, 3360, 3220, 3080, 2940, 3780, 3220, 3080, 2730, 2940, 2940, 2800, 2660, 2520, 2870, 3500, 2380, 2170, 2100, 2100, 2100, 2100, 2170, 2450, 2450, 2240, 2310, 2100, 1960, 1820, 1680, 1470, 1400, 1400, 1400, 1400, 1400, 1400, 1540, 1750, 1260, 1120, 1120, 1330, 980, 770, 700, 700, 700, 700, 700, 700, 630, 420, 280, 140, 0, 980, 840, 560, 420, 210, 350, 280, 420];
                break;
            case 13:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 10, 8, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 7, 3, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 6, 6, 8, 2, 7, 3, 4, 1, 1, 1, 1, 15, 5, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 180, 0, 0, 0, 0, -90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 180, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 180, -90, 90, -180, 90, 90, 0, 0, 0, 0, 0, 90, 90], this.BlockStateX = [350, 350, 350, 350, 350, 350, 350, 770, 770, 770, 770, 420, 700, 770, 770, 770, 770, 770, 770, 770, 770, 770, 630, 700, 420, 420, 910, 1050, 1190, 1330, 1680, 1680, 1470, 1400, 1330, 1330, 1330, 1470, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1260, 980, 1330, 1190, 350, 140, 350, 910, 1050, 1190, 1470, 1610, 1750, 630, 490, 350, 140, 1610, 1960, 1470, 1750, 1190, 1050, 910, 630, 490, 350, 140, 1330, 1960, 560, 770, 770, 770, 1330, 1330, 910, 1050, 1190, 630, 1470, 1610, 490, 1750, 350, 140, 1960, 770, 1330, 1050, 1120, 1540, 1470, 980, 1610, 1750, 1890, 2030, 1470, 1400, 1750], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 2240, 2660, 2380, 2520, 3010, 2870, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 420, 1120, 420, 910, 770, 490, 420, 420, 420, 420, 490, 770, 420, 910, 1120, 1260, 1400, 3500, 3500, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 3010, 3150, 1540, 3500, 3570, 3220, 3150, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 1820, 2380, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1680, 1820, 2100, 2030, 1820, 2380, 1820, 2380, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 630, 420, 2100, 3500, 3430, 3500, 3500, 3500, 3500, 3220, 3500, 3500];
                break;
            case 14:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 17, 3, 2, 7, 11, 3, 14, 9, 1, 1, 1, 1, 1, 1, 9, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, -180, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 180, 90, 0, 90, 180, -90, 180, 90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, -90, 90, 90, 90, 90, 0, -90, 0, 0, 0, 0, 0, 0, 90, 0], this.BlockStateX = [560, 560, 560, 560, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1330, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1120, 980, 1330, 700, 770, 700, 700, 700, 770, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2310, 2380, 2380, 2380, 2380, 2380, 2450, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2170, 2100, 2100, 2100, 2380, 2520, 2170, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3920, 4060, 560, 560, 980, 1400, 1400, 700, 1890, 2380, 2730, 3360, 2520, 2100, 2590, 770, 560, -70, 140, 280, 420, 560, 840, 980, 1120, 1260, 1540, 1680, 1820, 1960, 2100, 2240, 2520, 2660, 2800, 3010, 1050, 980, 3010, 2940, 3290, 3080, 3010, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2800, 2730, 2730, 2730, 2660, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 630, 630, 700, 1050, 700, 910, 1190, 1330, 1540, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1540, 1330, 1190, 1050, 910, 770, 560, 490, 490, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2520, 2590, 2590, 2590, 2590, 2590, 2590, 2660, 2870, 3010, 3150, 3430, 3430, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3500, 3150, 2730, 2100, 1050, 1050, 1610, 1050, 490, 1680, 2590, 3010, 3430, 3010, 2940, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 420, 630, 490, 280, 3430, 3430, 3150, 3220, 3010, 2870, 2730, 2450, 2310, 2170, 1820, 2030];
                break;
            case 15:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 10, 11, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 2, 8, 3, 18, 2, 7, 3, 17, 8, 2, 3, 12], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 90, 180, 90, 0, -90, 0, 90, 180, 90, 90, 0, 90, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 90, -90, -90, -90, 90, 90, -90, 90, 90, 0], this.BlockStateX = [560, 560, 560, 560, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1610, 1680, 1680, 1680, 1960, 1750, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3150, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3150, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1610, 1680, 1680, 1680, 1680, 1610, 1330, 1330, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2590, 2660, 2660, 2660, 2660, 2660, 2940, 3080, 2730, 3220, 3360, 3500, 3640, 3780, 3920, 4060, 560, 980, 1680, 2450, 3220, 2170, 560, 1120, 1680, 1540, 2170, 2660, 2940, 560, 3430, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 560, 350, 2800, 2730, 1820, 1890, 1400, 1330, 1890, 1960, 3220, 3220], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2660, 2660, 2660, 2660, 2660, 2730, 2940, 3080, 3220, 3500, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2170, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2030, 1820, 1680, 1540, 1400, 1260, 1050, 980, 980, 980, 980, 980, 1050, 1260, 1400, 1540, 1680, 1890, 1890, 1610, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1470, 1260, 1120, 980, 840, 700, 420, 420, 490, 420, 420, 420, 420, 420, 420, 420, 3290, 2660, 3080, 3500, 2800, 2100, 1470, 980, 1260, 1540, 1540, 910, 420, 3500, 420, 2870, 2660, 2520, 2380, 2240, 1960, 1820, 1680, 1400, 1260, 1120, 980, 770, 3430, 3220, 3080, 2940, 2800, 2520, 2380, 2240, 1960, 1820, 1680, 1540, 1330, 2100, 2870, 2940, 3500, 3710, 2100, 2310, 980, 770, 1750, 1540, 420, 560];
                break;
            case 16:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 8, 17, 3, 2, 7, 11, 3, 18, 16, 13, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 180, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -90, 0, 90, 180, 90, 0, -90, 0, 0, 90, 90, 0, -180, -90, -90, 90, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 910, 1400, 1470, 1400, 910, 770, 560, 490, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1050, 1190, 1190, 1050, 1470, 1610, 1750, 2380, 1890, 2380, 2030, 2170, 2450, 2450, 2450, 2450, 2450, 2100, 2450, 2100, 2450, 2450, 2450, 2450, 2450, 2310, 2450, 2590, 2730, 2870, 3010, 3430, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3360, 3150, 3010, 2870, 2730, 2590, 3430, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 490, 350, 210, 70, 630, 630, 1050, 1470, 1050, 490, 1470, 2450, 2800, 3430, 2590, 630, 420, 2030, 2100, 3430, 3640, 700, 1050, 2730, 3220, 1050, 4200, 3990, 3850, 3710, 3570, 3290, 3150, 3010, 2870, 2730, 2590, 2310, 2170, 2030, 1820, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2590, 2520, 2310, 2100, 2030, 2030, 1960, 1750, 1610, 1470, 1260, 1190, 1190, 1190, 1190, 1190, 2590, 2590, 2030, 2030, 1190, 1190, 1190, 3080, 1190, 1260, 1190, 1190, 1470, 1610, 1750, 1890, 2030, 3220, 2310, 3500, 2170, 2870, 2730, 2590, 2450, 3570, 3570, 3570, 3570, 3570, 3570, 3150, 3570, 3500, 3290, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 700, 630, 630, 630, 630, 630, 910, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 3570, 3150, 2590, 2310, 2030, 1610, 1190, 1960, 3570, 1960, 630, 2870, 2940, 980, 1190, 3010, 3080, 630, 630, 420, 1470, 350, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1400, 1610, 1750, 1890, 2170, 2310, 2450, 2730, 2870, 3010, 3150, 3290, 3500];
                break;
            case 17:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 7, 2, 3, 18, 2, 8, 11, 3, 14], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 180, 90, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 90, 0, -180, 0, 0, 90, 90, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 630, 630, 630, 910, 1050, 1190, 1330, 1470, 1680, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1820, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3080, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3080, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 770, 770, 770, 840, 1050, 1190, 840, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3990, 4130, 630, 630, 980, 1750, 2520, 3150, 2520, 770, 2520, -70, 140, 280, 420, 490, 770, 910, 1050, 1190, 1330, 1470, 1610, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3290, 3430, 3570, 3710, 3920, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 1190, 1260, 3150, 3360, 770, 560, 3500, 3360, 3290], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2240, 2730, 2590, 2450, 2170, 2170, 2170, 2170, 2170, 2240, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1400, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 770, 910, 1050, 1260, 490, 490, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 3500, 2590, 2170, 2590, 3570, 2870, 1330, 910, 490, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, -140, 70, 210, 350, 630, 770, 910, 1050, 1190, 1470, 1610, 1750, 1890, 2100, 1960, 2170, 1680, 1750, 700, 770, 490, 490, 210];
                break;
            case 18:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 6, 6, 6, 2, 8, 3, 17, 1, 7, 11, 3, 12, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 6, 2], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 180, 180, -90, 0, 90, 0, 0, 0, 0, 180, -90, 0, 0, 0, 180, -180, 0, -180, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 980, 770, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3290, 3080, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1470, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1470, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2730, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2520, 2730, 2380, 2240, 2030, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 700, 700, 700, 1330, 2660, 3360, 3360, 2380, 1400, 1960, 1960, 1960, 1960, 1960, 2800, 2380, 1960, 700, 490, 3360, 3570, -350, 1610, 1960, 1960, 2170, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 4200, 3990, 3850, 3710, 3570, 3500, 3220, 3080, 2940, 2660, 2520, 2380, 2240, 2100, 1820, 1680, 1540, 1260, 1120, 910, 1960, 1960, 1960, 1960, 1400], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 490, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 560, 490, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1260, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1260, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3150, 3080, 3150, 3150, 3080, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 3570, 3220, 1470, 490, 490, 1190, 2170, 3570, 2170, 1190, 1050, 910, 770, 630, 2170, 3150, 2170, 2940, 3010, 980, 910, 4060, 3080, 1610, 1750, 1750, 4130, 3920, 3780, 3710, 3430, 3290, 3010, 2870, 2730, 2520, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 350, 210, 70, 490, 3010];
                break;
            case 19:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 6, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 8, 3, 17, 2, 7, 3, 14, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 90, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 90, 0, -90, 0, 0, 0, 90, 90, -90, 0, 90, 180, -90, 180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, -180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -180, 90, 90, -90, 90, 0, 0, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 910, 1050, 1260, 1400, 0, 1750, 1680, 1750, 1680, 1470, 1330, 1190, 1050, 910, 770, 560, 560, 840, 910, 910, 910, 910, 910, 910, 910, 840, 560, 560, 770, 910, 1050, 1190, 1330, 1470, 1680, 1820, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3430, 3360, 3430, 3430, 3430, 2170, 3360, 3150, 3010, 2870, 2730, 2590, 2450, 2240, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2240, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3570, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3640, 3850, 3990, 4130, 630, 630, 1050, 1750, 1050, 910, 910, 910, 770, 1050, 770, 910, 2170, 3430, 2800, 2170, 2800, 3570, 1120, 1330, 1470, 1610, 1890, 2030, 2310, 2450, 2170, 2590, 2730, 2940, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 630, 840, 1330, 1260, 2590, 2660, 3570, 3360, 3570], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2730, 2520, 2450, 2450, 2380, 2100, 0, 1750, 1960, 1610, 1400, 1330, 1330, 1330, 1330, 1330, 1330, 1400, 1680, 1680, 1470, 1330, 1190, 1050, 910, 770, 630, 420, 420, 700, 770, 770, 770, 770, 770, 770, 700, 420, 350, 350, 350, 350, 350, 350, 350, 350, 350, 770, 420, 630, 910, 1050, 1610, 1260, 1330, 1330, 1330, 1330, 1330, 1330, 1400, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3220, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 2590, 3220, 3010, 2870, 2730, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1260, 1190, 1190, 1190, 3430, 3570, 2450, 1680, 1330, 1470, 910, 630, 770, 770, 1330, 1190, 350, 770, 1330, 2450, 3290, 2170, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 4060, 3850, 3710, 3570, 3430, 3150, 3010, 2870, 2730, 2520, 2870, 2940, 770, 560, 1330, 1120, 1820, 1820, 1610];
                break;
            case 20:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 4, 1, 4, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 9, 6, 5, 5, 5, 5, 5, 5, 5, 5, 2, 7, 3, 17, 2, 8, 3, 15, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 180, -90, 90, 0, 180, -90, 0, 0, 90, 0, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 90, 180, 90, 90, 180, 90, 0, -90, 0, 90, 90, 180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 180, 90, -90, 0, -180, 0, -180, 0, 0, 0, -180, 0, 0, 180, 0, 90], this.BlockStateX = [770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 840, 1050, 1190, 1400, 1470, 1470, 1470, 1400, 1120, 1050, 1120, 1330, 1470, 1610, 1750, 1890, 2100, 2170, 2170, 2170, 2240, 2450, 2590, 2730, 2870, 3010, 3290, 3220, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3220, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 840, 770, 770, 770, 770, 770, 770, 840, 1120, 1260, 1540, 1680, 1960, 2030, 2030, 2100, 2310, 2520, 2590, 2590, 2590, 2590, 2660, 2870, 3010, 3220, 3290, 3290, 3290, 3290, 3290, 3360, 3570, 3710, 3850, 3990, 4130, 770, 770, 1120, 1470, 1330, 1610, 2170, 2730, 3290, 1820, 770, 2310, 2940, 3290, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 2520, 2730, 2870, 3010, 3150, 3430, 3570, 3710, 3850, 4060, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 3430, 3150, 1820, 1820, 1820, 1820, 770, 560, 3290, 3500, 770, 560, 3290, 3570, 3570], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2730, 2520, 2450, 2450, 2520, 2730, 2870, 3010, 3220, 3220, 3010, 2800, 2730, 2730, 2730, 2730, 2730, 2800, 3010, 3150, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3010, 3500, 3290, 3150, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1820, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1680, 1470, 1330, 1190, 1050, 910, 770, 560, 560, 840, 840, 560, 560, 770, 910, 1120, 1190, 1120, 910, 770, 630, 490, 280, 210, 210, 280, 490, 630, 770, 910, 1050, 1260, 1330, 1330, 1330, 1330, 1330, 3570, 3290, 2450, 2870, 2730, 2730, 3150, 3570, 2590, 1750, 1120, 1190, 210, 700, 1190, 1400, 1540, 1610, 1890, 2030, 2170, 2310, 2450, 2590, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3920, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2310, 2100, 1960, 1890, 1610, 1470, 1330, 1190, 980, 1750, 1610, 1890, 2590, 2590, 2590, 2870, 1610, 1890, 2800, 2870, 2870, 2940, 1330, 1400, 980, 910, 1330];
                break;
            case 21:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 7, 3, 18, 2, 8, 11, 3, 14, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 6, 6, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, 180, 90, 180, 180, -90, 180, 90, 0, 0, 0, 90, 90, 180, -180, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 180, 90], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1190, 1260, 1260, 1190, 980, 840, 630, 560, 560, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 2030, 2100, 2100, 2100, 2030, 1750, 1750, 1960, 2100, 2240, 2380, 2590, 2660, 2660, 2660, 2590, 2380, 2240, 2030, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 2030, 2240, 2380, 2520, 2660, 2800, 2940, 3220, 3220, 3150, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 700, 700, 1260, 910, 560, 1400, 2100, 1890, 2100, 2660, 2310, 1960, 2660, 3220, 700, 490, 1750, 1680, 1960, 2170, 3220, 3220, 2940, 4130, 3920, 3780, 3640, 3500, 3360, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1820, 1680, 1540, 1400, 1120, 980, 840, 700, 560, 420, 70, 280, 1190, 1400, 1540, 1680, 1820, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3360, 3500, 3640, 3780, 4130, 3920, 3220, 1960, 2310], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2870, 2800, 2730, 2520, 2380, 2170, 2100, 2100, 2030, 1820, 1680, 1540, 1400, 1260, 1120, 980, 770, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1120, 1260, 1470, 1470, 1190, 1120, 1120, 1120, 1120, 1190, 1400, 1540, 1680, 1890, 1960, 1960, 2030, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3220, 3080, 3430, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 3500, 3360, 2450, 2100, 1330, 700, 910, 1120, 1330, 1540, 1960, 2450, 3500, 2450, 3010, 3080, 700, 490, 3010, 2940, 420, 630, 630, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 1120];
                break;
            case 22:
                this.BlockState = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 4, 1, 1, 1, 6, 10, 8, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 7, 3, 8, 2, 6, 12, 3, 11], this.BlockRotate = [0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, -180, 90, 0, 0, 90, 90, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 90, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 90, -180, 0, 0, 0, 180, 0, -90, -90], this.BlockStateX = [420, 420, 420, 420, 420, 490, 700, 840, 980, 1120, 1260, 1610, 1400, 1400, 1610, 1260, 1120, 980, 840, 630, 1680, 630, 1470, 1820, 1960, 2170, 1400, 420, 840, 910, 1120, 1120, 1120, 1120, 560, 560, 840, 980, 1120, 1120, 1120, 1120, 1260, 1120, 1400, 1120, 1120, 1120, 1610, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1610, 1400, 1260, 1120, 980, 840, 700, 490, 420, 420, 420, 420, 420, 490, 770, 840, 770, 560, 280, 140, 0, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 770, 560, 1470, 1680, 420, 700, 630, 280], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3290, 3220, 3220, 3220, 3220, 3220, 3150, 3220, 2800, 2870, 2800, 2800, 2800, 2800, 2730, 3500, 2170, 3430, 3500, 3500, 1890, 3220, 3640, 3430, 3220, 3360, 3080, 2940, 2660, 2520, 2380, 2100, 2100, 2100, 2520, 2380, 2240, 2100, 1960, 2100, 3500, 3640, 3850, 2030, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 490, 420, 420, 420, 420, 420, 420, 490, 700, 840, 980, 1120, 1260, 1470, 1470, 1260, 1050, 980, 980, 980, 980, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 280, 70, 2800, 2100, 2450, 2380, 1680, 1610, 840, 700, 980, 980];
                break;
            case 23:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 4, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 8, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 17, 3, 6, 18, 2, 14, 3, 11, 5, 5, 5, 5, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, -180, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 90, 0], this.BlockStateX = [1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1330, 1540, 1750, 1820, 1820, 1890, 2100, 2310, 2380, 2380, 2380, 2450, 2730, 2800, 2800, 2800, 2800, 3220, 3080, 2870, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3150, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3010, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1750, 1680, 1750, 1960, 2100, 2240, 2450, 2520, 1260, 1820, 2450, 2240, 2100, 1960, 1680, 1540, 1330, 1260, 1260, 1260, 1260, 1260, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 4060, 1260, 1610, 1820, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 1470, 3220, 3220, 3710, 3500, 3500, 3710, 3500, 1050, 1260, 1260, 3500, 3080, 1260, 3150, 3500], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2660, 2730, 2940, 3080, 3290, 3360, 3290, 3080, 2940, 2800, 2590, 2590, 2800, 2940, 3080, 3220, 3500, 3500, 3430, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 490, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1890, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1890, 1680, 1470, 1400, 1400, 1400, 1330, 1120, 560, 840, 910, 840, 840, 840, 840, 840, 770, 420, 280, 140, 0, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 3570, 3010, 3080, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 2170, 4060, 3500, 2940, 2870, 2170, 1470, 1400, 490, 490, 210, 630, 630, 560, 3500, 2240];
                break;
            case 24:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 8, 2, 17, 3, 7, 2, 18, 3, 1, 2, 8, 11, 3, 13, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -90, 90, 180, 90, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 90, 90, 0, 180, -180, 0, 0, 0, -180, -90, -90, 0, 0, 0, -90, 90, -180, 0, -180, -90, 90, 0, -180, -90, 90, 0, -180, -90, 90, 0, -180, -90, 90], this.BlockStateX = [840, 840, 840, 840, 840, 840, 840, 840, 840, 910, 1120, 1260, 1400, 1890, 1960, 1960, 1960, 1890, 1400, 1260, 1050, 980, 1050, 1260, 1400, 1540, 1680, 1820, 1540, 1680, 1680, 1540, 1960, 2100, 2240, 2380, 2520, 2730, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2870, 3080, 3220, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 840, 1540, 1960, 1540, 1540, 2800, 3150, 3500, 2450, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 4130, 3920, 3780, 3640, 3360, 3220, 3080, 2940, 2660, 2520, 2170, 2380, 1190, 1260, 1260, 1330, 2590, 2800, 3710, 3500, 0, 3500, 3710, 910, 1260, 1260, 840, 2800, 2660, 2940, 2800, 1540, 1540, 1400, 1680, 1540, 1540, 1400, 1680, 1540, 1540, 1400, 1680, 3500, 3500, 3360, 3640], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2660, 2660, 2660, 2590, 2380, 2240, 2100, 1890, 1820, 1820, 1750, 1540, 1330, 1260, 1260, 1260, 1260, 1260, 2660, 2660, 1820, 1820, 1260, 1260, 1260, 1260, 1260, 1330, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 3080, 2660, 2240, 1820, 1260, 1750, 3360, 1750, 560, 770, 980, 1120, 1400, 1540, 1680, 1960, 2100, 2240, 2380, 2520, 2800, 2940, 3080, 3220, 3360, 3570, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 2450, 2660, 1050, 1260, 2030, 2100, 2100, 2030, 560, 840, 910, 560, 560, 280, 3500, 1610, 1750, 1750, 1890, 2520, 2800, 2660, 2660, 1680, 1960, 1820, 1820, 1120, 1400, 1260, 1260, 1610, 1890, 1750, 1750];
                break;
            case 25:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 8, 2, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 7, 3, 17, 2, 18, 3, 8, 2, 13, 5, 3, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 90, 90, -90, 90, 90, 0, 0, 0, 0], this.BlockStateX = [420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 490, 770, 840, 840, 840, 840, 910, 1190, 1260, 1260, 1260, 1260, 1330, 1610, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1610, 1330, 1330, 1540, 1960, 1820, 2100, 2240, 2380, 2590, 2660, 2660, 3080, 2940, 2730, 3220, 3360, 3570, 3640, 3640, 3640, 3640, 3640, 3360, 3640, 3570, 3220, 3080, 2940, 2800, 2660, 2450, 2450, 2660, 2800, 2940, 3080, 3220, 3360, 3570, 3220, 3640, 3570, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 1960, 1960, 420, 1960, 2030, 1960, 1960, 1050, 1260, 1400, 1540, 1820, 2100, 1960, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3360, 3500, 3640, 3710, 3850, 3990, 4200, 420, 210, 420, 840, 1260, 3640, 3990, 3780, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 560, 700, 210, 1470, 1680, 2240, 2310, 3080, 3010, 3220, 3290, 1750, 1960, 1960, 1960], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1610, 1470, 1260, 1120, 980, 840, 490, 490, 840, 980, 1120, 1260, 1470, 1610, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 3010, 3010, 2730, 2660, 2660, 2660, 2660, 2660, 2660, 2730, 2940, 3080, 3360, 3360, 3290, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 1960, 2380, 2030, 1960, 1960, 1960, 1960, 1960, 1890, 1610, 1540, 1540, 1540, 1540, 1540, 1540, 1470, 2310, 1260, 910, 840, 840, 840, 840, 840, 840, 840, 840, 840, 280, 420, 1120, 560, 770, 140, 0, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2240, 2310, 2310, 2310, 2310, 3500, 2520, 2450, 700, 700, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1890, 1960, 2870, 2660, 1750, 1960, 1330, 1540, 490, 560, 490, 280];
                break;
            case 26:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 3, 10, 2, 18, 2, 17, 3, 5, 8, 2, 12, 3, 5, 11, 6, 6, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, -180, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, -90, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 0, 0, 90, 90, 0, -180, 0, -90, 90, 0, 90, 90, 90, 90, -90, 90], this.BlockStateX = [1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1050, 770, 770, 980, 1400, 1260, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3570, 3640, 3570, 3220, 3010, 2940, 2940, 2940, 2940, 3360, 3010, 3290, 3360, 3290, 3080, 2940, 3360, 2730, 2660, 2660, 2660, 2590, 2240, 2100, 1960, 1750, 1680, 1680, 1680, 1680, 1680, 1680, 1750, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3430, 3220, 3080, 3430, 2940, 2240, 2100, 2800, 2660, 2520, 2380, 2240, 2100, 1750, 1750, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3920, 4060, 4200, 4340, 4480, 4620, 1960, 1960, 2380, 3360, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 1330, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 1680, 1750, 1120, 1120, 2590, 2660, 1470, 1680, 1680, 3080, 3150, 3360, 3360, 3290, 3570, 2240, 2240, 2240], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 630, 910, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 910, 700, 490, 420, 490, 700, 840, 1260, 1120, 1820, 1470, 1610, 1960, 2170, 2240, 2240, 980, 2170, 1960, 1820, 1680, 1470, 1400, 1400, 1400, 1470, 1680, 1820, 1960, 2100, 2240, 2380, 2590, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2730, 3080, 3080, 3010, 3080, 3500, 3500, 3080, 3080, 3080, 3080, 3080, 3080, 3150, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3080, 3500, 1400, 420, 490, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3920, 4130, 2800, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 700, 840, 770, 980, 3430, 2730, 770, 980, 1750, 1820, 1680, 2870, 2660, 3220, 3500, 3500, 3500, 2660, 3080, 3500];
                break;
            case 27:
                this.BlockState = [1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 4, 4, 1, 1, 4, 1, 4, 1, 4, 4, 1, 4, 1, 1, 1, 4, 1, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 8, 2, 10, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 9, 1, 1, 1, 9, 1, 1, 1, 1, 9, 3, 7, 17, 2, 18, 3, 8, 2, 16, 3, 5, 11], this.BlockRotate = [0, 0, 0, 0, 180, 0, 0, 180, 0, 0, 0, 180, 0, 0, 0, 0, 180, 0, 0, 180, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 0, 0, 0, -180, 90, -90, 0, 0, 0, -180, 0, -180, 0, 90, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, -90, 90, -90, -90, -90, 0, 0, 0, 0, 0, 0], this.BlockStateX = [350, 350, 350, 350, 420, 700, 770, 840, 1050, 1190, 1400, 1540, 1750, 1890, 2240, 2310, 2380, 2030, 2660, 2800, 3010, 3220, 3150, 3290, 3010, 3360, 3430, 3640, 3640, 2870, 2730, 2590, 2450, 2310, 2100, 2100, 2380, 2380, 2170, 2030, 1820, 1680, 1400, 1260, 980, 910, 910, 910, 910, 980, 1260, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 560, 770, 350, 1890, 2030, 2170, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3500, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 1050, 910, 1750, 280, 490, 630, 770, 1190, 1400, 3080, 3010, 3290, 3220, 2030, 1960, 700, 910, 1120, 1330, 1330, 1330], this.BlockStateY = [4060, 3920, 3780, 3640, 3430, 3290, 3080, 2870, 2800, 2800, 2730, 2450, 2380, 2380, 2310, 2100, 1890, 2380, 1750, 1470, 1400, 1330, 560, 560, 560, 1050, 560, 910, 630, 420, 560, 560, 560, 560, 630, 910, 1050, 1330, 1400, 1400, 1470, 1890, 2030, 2310, 2310, 1960, 1820, 1680, 1540, 1330, 1190, 980, 840, 700, 560, 420, 280, 140, 0, 3080, 3010, 3640, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 1050, 910, 770, 630, 280, 560, 70, 1680, 2100, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1400, 1610, 350, 560, 1610, 1400, 2100, 2030, 770, 840, 910, 560];
                break;
            case 28:
                this.BlockState = [1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 8, 2, 6, 18, 3, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 6, 5, 5, 7, 2, 6, 6, 11, 3, 15, 6, 6, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 90, 180, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, -90, 0, 180, 90, -90, 0, 90, -90, -90, 0, 0, -90, 0], this.BlockStateX = [700, 700, 700, 700, 700, 700, 770, 700, 980, 1190, 1540, 1680, 1330, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1890, 1750, 1540, 1400, 1260, 1120, 910, 840, 840, 910, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3430, 3500, 3430, 3500, 3500, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 700, 700, 980, 1050, 2590, 3570, 3360, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 1470, 1400, 840, 2380, 1890, 2240, 2310, 3500, 3010, 140], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3010, 3220, 2940, 3010, 3360, 3360, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2730, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2590, 2310, 2240, 2240, 2240, 2240, 2170, 1960, 1820, 1610, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1470, 1260, 770, 1120, 980, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 3500, 3290, 2730, 2940, 3360, 3010, 2940, 4130, 3920, 3780, 3640, 3500, 3220, 3080, 2940, 2800, 2520, 2380, 2240, 2100, 1890, 2520, 2800, 2660, 3220, 3500, 2030, 2240, 1820, 1540, 700, 700, 420, 1120, 700, 700];
                break;
            case 29:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 10, 8, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 7, 3, 18, 2, 17, 3, 8, 2, 15, 11, 3], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -180, -180, -180, -180, 0, 180, 90, -90, 0, 0, 0], this.BlockStateX = [3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3640, 3430, 3290, 3150, 3010, 2870, 2660, 2660, 2940, 3010, 3010, 3010, 3010, 3010, 3010, 3080, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2800, 2730, 2730, 2730, 2730, 2730, 2660, 2380, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2240, 1960, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1820, 1540, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1400, 1190, 1050, 910, 770, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 910, 560, 840, 910, 910, 910, 910, 3710, 3500, 3710, 70, 210, 350, 490, 630, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3920, 1890, 1470, 980, 1190, 1330, 1610, 1750, 2030, 2170, 2310, 2450, 2590, 2870, 3010, 3150, 3290, 3430, 3710, 3850, 4060, 2940, 2730, 2520, 2310, 1260, 1470, 910, 840, 700, 910, 910], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2590, 2520, 2520, 2520, 2520, 2520, 2590, 2870, 2870, 2660, 2520, 2380, 2240, 2100, 1960, 1750, 1680, 1610, 1400, 1260, 1120, 980, 840, 630, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1610, 1750, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 630, 630, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 3010, 3080, 3080, 3080, 3080, 3010, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 560, 910, 770, 420, 280, 140, 0, 3500, 2870, 2800, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 840, 840, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 910, 980, 1960, 2030, 1750, 1820, 2870, 3080, 490, 280, 490];
                break;
            case 30:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 10, 6, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 3, 14, 2, 17, 3, 7, 2, 17, 3, 8, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, -180, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 90, -90, 0, 90, 90, 90, -90, 90, 180, -90, -180, -90, 0, 0, 0, 0, 90, 90, -90, -90, -90, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90], this.BlockStateX = [560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1330, 1330, 1120, 980, 840, 560, 560, 630, 560, 560, 560, 560, 560, 560, 840, 630, 980, 1190, 1260, 1330, 1540, 1680, 1890, 1960, 2380, 2240, 2030, 2520, 2660, 2800, 2940, 3080, 3430, 2310, 3430, 3220, 3220, 3080, 2940, 2800, 2660, 2450, 2100, 1960, 1820, 1610, 1540, 1540, 1610, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3360, 3360, 3360, 3290, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1610, 1540, 1540, 1540, 560, 560, 350, 980, 980, 560, 1610, 910, 2870, 2870, 2520, 3360, 2730, 1540, 1960, 2030, 560, 350, 560, 2310, 2380, 2030, 1960, 2940, 3010, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2590, 2520, 2520, 2520, 2450, 2170, 2100, 2100, 2100, 1820, 1680, 2030, 1540, 1400, 1260, 1120, 980, 840, 560, 630, 560, 630, 840, 1050, 1120, 1120, 1050, 840, 560, 560, 630, 560, 560, 560, 560, 560, 630, 1330, 910, 560, 980, 980, 980, 980, 980, 1050, 1400, 1400, 1400, 1470, 1680, 1820, 2030, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2380, 2520, 2660, 2170, 2800, 2940, 3080, 3220, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3570, 3780, 3920, 4060, 3500, 3150, 2870, 2520, 2100, 1260, 1120, 560, 560, 980, 2100, 2800, 3500, 3780, 3500, 3220, 2800, 1050, 980, 350, 560, 1610, 1400, 2310, 2100, -70, 140, 280, 420, 700, 840, 1120, 1260, 1400, 1610, 1330, 1540, 1680, 1820, 1960, 2240, 2380, 2660, 2800, 2940, 3080, 3290];
                break;
            case 31:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 10, 8, 2, 7, 3, 18, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 16, 3, 5, 11, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 180, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0], this.BlockStateX = [1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1400, 1190, 1050, 840, 770, 770, 770, 770, 770, 770, 1050, 840, 1190, 1330, 1470, 1610, 1820, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1960, 2240, 2380, 2590, 2730, 2870, 3010, 3150, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2660, 2660, 2870, 3010, 3150, 3290, 3570, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 1470, 1260, 1470, 2100, 1890, 2870, 2940, 2520, 2730, 2870, 3010, 3150, 3290, 3430, 3710, 3850, 4060, 3360, 3570, 3570, 3570, 3570], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1890, 1820, 1820, 1750, 1540, 1400, 1260, 1120, 980, 840, 560, 630, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3150, 3150, 2870, 2800, 2800, 2800, 2800, 2800, 2800, 2730, 2520, 2380, 2240, 2100, 1960, 1820, 1610, 1540, 1540, 1540, 1540, 1470, 1190, 1120, 1120, 1120, 1120, 840, 1050, 700, 560, 420, 280, 140, 0, 3570, 2450, 2380, 1750, 1820, 2590, 2800, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 700, 700, 770, 420, 2030];
                break;
            case 32:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 4, 4, 1, 4, 4, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 8, 2, 7, 3, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 17, 2, 16, 11, 5, 3], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, 0, 0, -90, 0, 90, 0, 0, 180, -90, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 90, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 420, 630, 770, 910, 1050, 1260, 1330, 1330, 1330, 1260, 980, 980, 1190, 1470, 1610, 1750, 1890, 2030, 2240, 2730, 2380, 2660, 2730, 2800, 3080, 3150, 3150, 3220, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3220, 3150, 3150, 3150, 3150, 3080, 2800, 2730, 2730, 2730, 2660, 2380, 2310, 2310, 2310, 2310, 2240, 1960, 1890, 1890, 1890, 1890, 1820, 1540, 1470, 1470, 1470, 1470, 1400, 1120, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 350, 140, 350, 2520, 2730, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3920, 4130, 3570, 3360, 3570, 1260, 1050, 1050, 1050], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2590, 2520, 2520, 2520, 2520, 2590, 2800, 2940, 3080, 3290, 3290, 3010, 2940, 2940, 2940, 2940, 2940, 2940, 3010, 3080, 3290, 3290, 2940, 2730, 2730, 2940, 3080, 3290, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 630, 840, 980, 1120, 1260, 1470, 1470, 1260, 1120, 980, 770, 770, 980, 1120, 1260, 1400, 1610, 1610, 1400, 1260, 1120, 980, 770, 770, 980, 1120, 1260, 1400, 1610, 1610, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 3570, 2870, 2800, 2940, 2870, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2450, 2380, 1050, 840, 1190, 1120];
                break;
            case 33:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 6, 6, 10, 8, 2, 17, 3, 8, 2, 13, 11, 5, 3], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 180, 90, 0, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1190, 910, 910, 1120, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3570, 3570, 3290, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3360, 3290, 3570, 3570, 3080, 2940, 2800, 2660, 2520, 2380, 2170, 2100, 2100, 2100, 2100, 2100, 2030, 1820, 1680, 1540, 1400, 1190, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 4060, 3220, 3220, 2100, 3220, 1260, 1680, 1750, 3010, 3220, 3010, 3220, 910, 1120, 1120, 1120], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2730, 3010, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3150, 3430, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 840, 490, 490, 770, 840, 840, 840, 840, 840, 840, 910, 1120, 1260, 1400, 1540, 1680, 1890, 1960, 1960, 1960, 1960, 1890, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 840, 1470, 3080, 3570, 2870, 3080, 2310, 2240, 1120, 1050, 770, 630, 910, 840];
                break;
            case 34:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 4, 4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 8, 2, 10, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 9, 7, 3, 6, 6, 17, 2, 6, 18, 3, 8, 2, 15, 3, 5, 11, 6, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 180, -90, 90, 0, 180, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 90, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, -180, 0, 180, 0, 180, 90, 90, 0, -180, 0, 0, 180, 0, 0, 0, 0, 0, 90], this.BlockStateX = [420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 700, 490, 840, 1050, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1190, 1400, 1540, 1750, 1890, 2170, 2310, 2590, 2730, 3010, 3150, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3150, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 2240, 3010, 2730, 2590, 2380, 2170, 2030, 0, 1960, 2100, 1750, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 210, 420, 420, 70, 280, 560, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3990, 1470, 1820, 1680, 2380, 2520, 2730, 910, 1120, 420, 1120, 1470, 1540, 3500, 3710, 3500, 2870, 3080, 1890, 1680, 1680, 1680, 2100, 1470], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 420, 490, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3290, 3010, 3010, 3290, 3290, 3010, 3010, 3290, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 630, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 1540, 2170, 2170, 1890, 1820, 1750, 1330, 0, 1540, 1540, 1190, 980, 840, 700, 560, 420, 280, 140, 0, 2940, 2870, 3570, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 1540, 1540, 1540, 1540, 1540, 1540, 2170, 2240, 2520, 2520, 3150, 3360, 2520, 2030, 1960, 1190, 1260, 840, 840, 910, 490, 1540, 3360];
                break;
            case 35:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 8, 2, 7, 3, 17, 2, 18, 3, 8, 14, 3, 11, 6, 6, 2], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 90, -90, 0, 0, 0, 180, -180, 180, 0, 0, 0, 0, -90, 90, 0], this.BlockStateX = [3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3150, 3430, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 630, 910, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 1050, 1330, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1470, 1750, 1820, 1820, 1820, 1820, 1820, 1890, 2100, 2240, 2380, 2590, 2660, 2660, 2660, 2730, 2940, 3150, 3290, 3570, 3640, 3640, 3640, 3640, 3640, 3640, 3570, 3360, 3220, 3080, 2940, 2800, 2590, 2520, 2520, 2520, 2520, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 3080, 2730, 2660, 770, 980, 1190, 1400, 2870, 2660, 3430, 2730, 2520, 2520, 2310, 2310, 3640], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2730, 3010, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3150, 3430, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 770, 770, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2590, 2590, 2380, 2240, 2100, 1960, 1820, 1610, 1540, 1540, 1540, 1610, 1820, 1960, 2100, 2310, 2380, 2310, 2030, 1890, 1680, 1540, 1400, 1260, 1120, 980, 770, 700, 700, 700, 700, 700, 630, 420, 280, 140, 0, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 910, 3500, 2870, 3080, 1190, 1120, 1890, 1960, 2030, 2100, 1610, 350, 420, 210, 3080, 1540, 1540];
                break;
            case 36:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 10, 8, 2, 7, 3, 8, 2, 4, 4, 4, 4, 6, 17, 3, 8, 2, 12, 5, 11, 3], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, 90, 90, 90, 90, 0, 180, -90, 90, 180, 0, 0, 90, 90, -90, -90, 0, 0, 0, 0], this.BlockStateX = [420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1890, 1960, 1960, 1960, 1960, 1680, 1890, 1540, 1400, 1190, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1190, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2450, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2590, 2800, 2940, 3080, 3220, 3360, 3570, 3640, 3640, 3640, 3360, 3080, 3080, 3080, 3360, 4060, 3780, 2030, 3920, 3640, 3570, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 910, 840, 910, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2590, 2660, 2660, 2660, 2660, 1820, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 4060, 1120, 420, 770, 840, 1820, 1890, 2310, 2520, 3570, 3150, 3150, 3570, 3640, 3360, 3430, 2730, 2660, 2450, 2660, 2660, 2660], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2590, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2590, 2800, 2940, 3080, 3220, 3500, 3430, 3500, 3500, 3430, 3220, 3080, 2940, 2800, 2660, 2380, 2240, 2100, 1890, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1890, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3430, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2940, 2660, 2240, 2380, 2100, 1820, 1540, 1540, 2170, 1540, 1540, 1330, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1190, 980, 770, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 630, 420, 280, 140, 0, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2520, 3500, 2310, 2520, 1610, 1820, 3010, 3080, 2730, 2590, 1890, 1750, 1540, 1610, 1820, 1470, 1260, 280, 350, 140, 280];
                break;
            case 37:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 2, 8, 7, 3, 18, 2, 15, 11, 3, 5, 5, 6, 5, 5, 6, 5, 5, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, -90, -90, -180, -180, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0], this.BlockStateX = [2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2310, 2590, 2660, 2730, 2940, 3080, 3220, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2940, 2730, 2660, 2660, 2660, 2660, 2590, 2380, 2170, 2100, 2100, 2100, 2100, 2030, 1750, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3920, 4130, 2240, 2660, 2450, 3010, 2940, 2310, 2100, 1890, 1680, 1680, 1680, 1680, 1680, 2660, 2660, 2660, 3500, 3500, 3500], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2590, 2380, 2170, 2100, 2100, 2100, 2030, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 560, 560, 560, 630, 840, 980, 1120, 1260, 1470, 1540, 1610, 1820, 1960, 2100, 2240, 2450, 2450, 2100, 2240, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 3570, 2310, 2380, 770, 560, 1960, 2030, 630, 420, 700, 1190, 980, 1120, 1190, 980, 1120, 980, 1190, 1120];
                break;
            case 38:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 9, 10, 8, 2, 17, 3, 18, 2, 6, 7, 3, 8, 2, 5, 6, 14, 3, 11, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 90, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, -180, 0, 0, 90, 0, 0, 0, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 90, -90, 90, 90, 0, -90, 90, -90, -90, 90, 90, 0, 0, 0, 0], this.BlockStateX = [560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 980, 980, 630, 910, 980, 980, 980, 980, 1050, 1260, 1400, 1540, 1750, 1820, 1820, 1750, 1540, 1400, 1260, 1050, 980, 980, 1050, 1260, 1400, 1540, 1680, 1890, 2240, 2030, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2450, 2380, 2450, 2660, 2800, 2940, 3080, 3220, 3430, 3430, 3220, 3080, 2940, 2800, 2660, 2450, 2310, 2100, 1960, 1820, 1680, 1470, 1470, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3570, 3570, 3290, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 70, 210, 350, 490, 630, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2100, 560, 980, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3850, 560, 350, 560, 1330, 1260, 2240, 2310, 3360, 3010, 3080, 2030, 1960, 2940, 3220, 3430, 3220, 3220, 560], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 700, 840, 490, 490, 980, 1120, 1260, 1400, 1610, 1680, 1680, 1680, 1750, 1960, 2100, 2310, 2380, 2380, 2380, 2450, 2660, 2800, 3010, 3080, 3080, 3080, 3080, 3150, 3500, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2940, 2730, 2660, 2660, 2660, 2660, 2590, 2380, 2170, 2100, 2100, 2100, 2100, 2100, 2030, 1750, 1680, 1680, 1680, 1680, 1680, 1610, 1330, 1260, 1260, 1260, 1260, 1190, 910, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 910, 1190, 1190, 980, 840, 700, 560, 420, 280, 140, 0, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3570, 2380, 2310, 2170, 2380, 3290, 3500, 3080, 2310, 2100, 1470, 1260, 1680, 840, 490, 560, 350, 2380];
                break;
            case 39:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 10, 8, 2, 17, 3, 5, 5, 5, 18, 2, 7, 3, 8, 2, 14, 3, 11, 5, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -180, 180, 0, 0, 0, -90, 0, 90, 90], this.BlockStateX = [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1120, 1400, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1540, 1820, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1960, 2240, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2380, 2590, 2730, 2870, 3010, 3220, 3290, 3290, 3220, 3010, 2870, 2660, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2660, 2870, 3010, 3150, 3290, 3430, 3710, 3640, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3640, 3430, 3290, 3150, 2940, 2870, 2870, 2870, 2870, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3920, 4130, 2590, 3710, 1050, 840, 1050, 1680, 1890, 1050, 1470, 1890, 2100, 2310, 2800, 2590, 3500, 3710, 3290, 3220, 2870, 3430, 2590], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 630, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2730, 2730, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 630, 840, 980, 1120, 1260, 1400, 1540, 1680, 1890, 1960, 1960, 1960, 1960, 1890, 1680, 1540, 1330, 1260, 1260, 1330, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 3010, 3080, 3080, 3080, 3080, 3080, 2800, 3010, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 770, 700, 700, 700, 630, 420, 280, 140, 0, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 3500, 2660, 2590, 1680, 1610, 1190, 1190, 1190, 980, 1050, 2660, 2730, 2730, 2660, 420, 700, 350, 700, 1960];
                break;
            case 40:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 2, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 7, 3, 18, 2, 17, 3, 8, 3, 2, 11, 5, 13, 6, 6, 6, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, -90, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, -90, 90, 90, -90], this.BlockStateX = [560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 630, 910, 980, 980, 980, 980, 980, 1050, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2590, 2590, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1330, 1330, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2870, 2940, 2940, 2940, 2940, 3010, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3010, 2940, 2940, 2870, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1330, 1260, 1260, 1260, 1260, 1330, 1540, 1680, 1820, 1960, 2170, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 560, 560, 350, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 2240, 2170, 3150, 3360, 2380, 2310, 1050, 2240, 1260, 2240, 2240, 2030, 1890, 1890, 1890, 1890], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2590, 2590, 2800, 2940, 3080, 3220, 3360, 3570, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3570, 3290, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3150, 2870, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2870, 3080, 3220, 3360, 3500, 3710, 3710, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1750, 1750, 1960, 2100, 2310, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2310, 2100, 1960, 1820, 1680, 1470, 1400, 1400, 1400, 1400, 1330, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 3500, 2730, 2800, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 4060, 3010, 3220, 3360, 3290, 2170, 2380, 1960, 910, 1890, 700, 980, 910, 2380, 2800, 3640, 3220];
                break;
            case 41:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 10, 8, 2, 5, 3, 7, 5, 6, 6, 6, 6, 8, 17, 3, 2, 18, 2, 12, 2, 18, 17, 3, 3, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 90, -180, 0, 180, 0, 180, 0, 0, 0, 180, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0], this.BlockStateX = [420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1190, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1190, 1400, 1540, 1680, 1820, 1960, 2100, 2450, 2240, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2450, 2240, 2100, 1960, 1680, 1680, 1750, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 700, 1680, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3920, 2520, 420, 210, 420, 420, 2800, 3570, 3360, 3360, 1120, 2520, 1680, 910, 2310, 2520, 3360, 1470, 1120, 1890, 1680, 2730, 910, 1120, 1680, 1680], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1050, 980, 980, 980, 980, 980, 980, 1050, 980, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2870, 2940, 2940, 2940, 2520, 2380, 2870, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 2100, 2660, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2660, 3570, 2800, 2730, 2870, 560, 2450, 1050, 2100, 2100, 2100, 2100, 1540, 2520, 2590, 2520, 2520, 1470, 280, 2450, 770, 2520, 2450, 350, 210];
                break;
            case 42:
                this.BlockState = [1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 8, 2, 9, 1, 1, 1, 1, 1, 1, 9, 6, 17, 3, 18, 2, 7, 3, 1, 1, 1, 1, 1, 1, 6, 6, 18, 2, 15, 3, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, -90, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, -180, 180, 0, 180, -180, 0, 0, 0, 0, 0, 0, 0, 90, -90, -180, 0, 0, 0, 0], this.BlockStateX = [1540, 1540, 1540, 1540, 1540, 1540, 1470, 1260, 1120, 980, 770, 770, 1050, 1120, 1120, 1120, 1120, 1120, 1050, 770, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1120, 1260, 1400, 1610, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1750, 2030, 2170, 2380, 2520, 2660, 2800, 2940, 3150, 3290, 3570, 3640, 3640, 3640, 3640, 3640, 3570, 3290, 3150, 2940, 2800, 2660, 2520, 2380, 2170, 2100, 2100, 2100, 2100, 2100, 2100, 2170, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 1540, 910, 1120, 280, 420, 560, 700, 840, 980, 1120, 1330, 700, 1890, 1680, 1470, 1680, 3850, 3640, 1680, 1680, 1680, 2100, 3640, 3640, 2660, 2660, 2310, 2100, 3150, 3360, 3360], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3150, 3080, 3080, 3080, 3150, 3430, 3430, 3220, 3080, 2940, 2800, 2660, 2450, 2310, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 3010, 3010, 2590, 2520, 2520, 2240, 2520, 2520, 2590, 2870, 2870, 2380, 2240, 2100, 1960, 1820, 1610, 1610, 1890, 1960, 1960, 1960, 1960, 1960, 1890, 1680, 1540, 1400, 1260, 1120, 980, 770, 700, 700, 700, 700, 700, 700, 630, 420, 280, 140, 0, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3080, 3570, 2800, 2730, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1470, 2240, 2310, 2100, 2030, 2520, 2660, 2800, 2800, 2520, 2660, 2520, 1960, 1540, 1470, 350, 420, 210];
                break;
            case 43:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 10, 8, 2, 17, 3, 18, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 18, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 3, 14, 11, 6, 6, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, -180, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 180, 0, 0], this.BlockStateX = [350, 350, 350, 350, 350, 350, 350, 350, 420, 630, 770, 910, 1050, 1190, 1330, 1470, 1610, 1820, 1890, 1890, 1610, 1820, 1400, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1260, 980, 910, 910, 910, 910, 910, 910, 1190, 980, 1330, 1470, 1610, 1750, 1890, 2100, 2170, 2170, 2170, 2170, 2100, 1820, 1750, 1750, 1750, 1820, 2030, 2170, 2310, 2450, 2590, 2730, 2940, 3010, 3010, 3010, 3010, 3080, 3290, 3570, 3570, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2800, 2730, 2730, 2800, 3010, 3220, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 350, 770, 840, 1120, 1330, 700, 910, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3990, 3290, 3360, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3990, 3290, 3500, 3290, 3010, 3570, 350], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2870, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2870, 3080, 3220, 3500, 3430, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1890, 1750, 1540, 1400, 1260, 1120, 980, 840, 560, 630, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1470, 1610, 1820, 1960, 2100, 2310, 2380, 2380, 2380, 2380, 2380, 2380, 2450, 2660, 2800, 2940, 3080, 3290, 3360, 3080, 2940, 3290, 2800, 2660, 2520, 2380, 2240, 2100, 1890, 1820, 1820, 1820, 1750, 1540, 1400, 1190, 1120, 1050, 840, 700, 560, 420, 280, 140, 0, 3500, 2590, 2800, 2240, 2170, 980, 910, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 3150, 3360, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 560, 490, 420, 2800, 2800, 3010];
                break;
            case 44:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 10, 8, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 17, 3, 18, 2, 14, 3, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, -90, 90, -90, 0, 0, 0, 0, 0], this.BlockStateX = [420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3570, 3640, 3640, 3640, 3640, 3640, 3570, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1190, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1190, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3570, 3570, 3360, 3150, 3080, 3080, 3080, 3010, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1470, 3080, 1400, 1400, 1400, 1400, 1400, 1400, 420, 210, 420, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 3220, 3150, 910, 1120, 1610, 1400, 1400], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2310, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2310, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1610, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1610, 1890, 1960, 1890, 1680, 1540, 1400, 1050, 980, 980, 980, 980, 980, 980, 980, 980, 980, 910, 1260, 700, 560, 420, 280, 140, 0, 3500, 2800, 2730, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 4060, 2240, 3360, 3150, 3360, 1820, 1750, 560, 630, 420];
                break;
            case 45:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 8, 2, 7, 3, 18, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 16, 11, 3, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, -90, 0, 0, 0, 0], this.BlockStateX = [350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 420, 630, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3010, 2870, 3360, 3150, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1540, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1540, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3430, 3640, 3290, 3640, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1260, 1120, 840, 770, 770, 770, 770, 770, 770, 770, 770, 770, 350, 140, 350, 1260, 1470, 2170, 2240, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 560, 770, 770, 770], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2170, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2170, 2380, 2520, 2660, 2800, 3080, 3080, 3010, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3010, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1470, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 980, 1330, 980, 1050, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 1050, 1330, 1330, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 3570, 2730, 2660, 2590, 2520, 1610, 1400, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 210, 1400, 980, 770, 490, 770, 840];
                break;
            case 46:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 8, 2, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 7, 3, 18, 2, 12, 3, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, -180, 0, 90, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 90, -180, 0, 0, 0, 0, 0, 0], this.BlockStateX = [560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 630, 840, 1540, 980, 1120, 1260, 1470, 1540, 1540, 1540, 1540, 1610, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3570, 3640, 3640, 3640, 3640, 3570, 3360, 3220, 3080, 2940, 2730, 2590, 2310, 2240, 2240, 2240, 2240, 2310, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3640, 3570, 3640, 3640, 3640, 3640, 3570, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2170, 2100, 2100, 2100, 2100, 2030, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 630, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1540, 1750, 1820, 1820, 1820, 1820, 1820, 1820, 3640, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 560, 770, 560, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3850, 3640, 2030, 2240, 1540, 1820, 1820], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2450, 2380, 3220, 2380, 2380, 2380, 2450, 2660, 2800, 2940, 3080, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3080, 2940, 2800, 2660, 2450, 2380, 2380, 2380, 2380, 2450, 2730, 2730, 2520, 2380, 2240, 2100, 1890, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1540, 1750, 1400, 1260, 1120, 980, 770, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1120, 1260, 1400, 1610, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1680, 1610, 1400, 1260, 1050, 980, 980, 980, 980, 980, 980, 910, 700, 560, 420, 280, 140, 0, 3220, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 4060, 3570, 2800, 2730, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3500, 2380, 1820, 2940, 2870, 2380, 2310, 630, 700, 490];
                break;
            case 47:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 4, 4, 1, 4, 1, 13, 10, 7, 2, 6, 5, 9, 9, 17, 5, 3, 6, 8, 2, 9, 9, 1, 1, 1, 6, 6, 18, 2, 5, 9, 1, 1, 1, 1, 1, 1, 9, 6, 5, 4, 6, 5, 6, 17, 3, 5, 3, 1, 11, 1, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 180, 90, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 90, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 90, 90, 0, -90, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 180, 0, 180, 180, -90, 90, 0, 180, 0, 0, 0, 0, -90, 0, -90, 0, -90, 0, 0, 0, 0, 0, 0, 90, -90, -90, 90, 0, 90, 0, 90, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1820, 1610, 1470, 1400, 1190, 1190, 1470, 1540, 1540, 1540, 1540, 1610, 1820, 1960, 2100, 2240, 2380, 2590, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2590, 2310, 2310, 2520, 2660, 2800, 2940, 3150, 3290, 3010, 3430, 3640, 3710, 3710, 3710, 3710, 3430, 3710, 3290, 3640, 3150, 2940, 2870, 2940, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3500, 3780, 3850, 3850, 3850, 3780, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2590, 2590, 2590, 2660, 2870, 3080, 3150, 3080, 2870, 2730, 2590, 2450, 2380, 2240, 2100, 1960, 1820, 1750, 1540, 980, 1540, 1820, 1820, 1890, 1890, 1610, 1470, 1330, 1190, 980, 910, 910, 910, 910, 910, 1260, 1050, 1260, 910, 770, 630, 490, 280, 210, 210, 210, 210, 210, 630, 280, 560, 3010, 630, 1820, 630, 630, 1190, 2100, 2100, 2100, 1540, 2100, 1820, 1540, 2590, 1820, 3570, 420, 1890, 1680, 1890, 1890, 1890, 2100, 2100, 2870, 2660, 2660, 2660, 3080, 3150, 2940, 3920, 3710, 3290, 3150, 3430, 3360, 3640, 2170, 3850, 560, 560, 560, 560, 560, 560, 560, 560, 910, 630, 1540, 210, 2030, 1540, 2240, 3850, 630, 630, 630, 630, 630, 630], this.BlockStateY = [3990, 4060, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2590, 2590, 2590, 2660, 2940, 2940, 2730, 2590, 2450, 2310, 2100, 2030, 2030, 2030, 2030, 2030, 2100, 2310, 2870, 2660, 2730, 2520, 2450, 3010, 3220, 3220, 2940, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2940, 3150, 3290, 3150, 3430, 3850, 3570, 3850, 3780, 3850, 3780, 3570, 3360, 3290, 3220, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1680, 1540, 1330, 1190, 1050, 840, 770, 770, 770, 770, 770, 770, 840, 1050, 1190, 1330, 1540, 1610, 1540, 1330, 1120, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1120, 1610, 1400, 1400, 770, 1190, 980, 700, 700, 700, 700, 770, 980, 1120, 1190, 1330, 1400, 1750, 2100, 2030, 2100, 2100, 2100, 2100, 2030, 1820, 1680, 1540, 1400, 1260, 700, 1050, 910, 770, 490, 1400, 420, 560, 700, 1890, 2170, 1820, 1400, 2310, 1400, 1120, 1050, 1400, 2100, 490, 3500, 3150, 3080, 3940, 3150, 1610, 2450, 2450, 2380, 2520, 2660, 3080, 2870, 2100, 2100, 2100, 2100, 2100, 2520, 3850, 1190, 1050, 1190, 2660, 2450, 2310, 2170, 2030, 1890, 1750, 1540, 2100, 2100, 1400, 1470, 2030, 2380, 840, 1120, 560, 490, 280, 280, 140, 0];
                break;
            case 48:
                this.BlockState = [1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 10, 7, 2, 1, 1, 4, 1, 1, 4, 4, 1, 4, 1, 1, 4, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 17, 3, 5, 6, 6, 5, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 8, 2, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 17, 3, 5, 5, 6, 6, 6, 4, 1, 4, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 9, 1, 1, 1, 1, 17, 2, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 15, 3, 1, 11], this.BlockRotate = [0, 0, 0, 0, -180, 0, 0, -90, 0, 0, 0, 180, 0, 0, 0, -180, 0, 0, 0, 180, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, -90, 90, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 180, 0, 0, 0, 0, -180, 90, -180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, -90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, -180, 0, 0, 0, 180, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 90, 0, 90], this.BlockStateX = [2170, 2170, 2170, 2170, 2240, 2520, 2590, 2520, 2310, 2590, 2170, 2800, 2590, 2240, 2100, 1890, 1820, 1820, 1750, 1470, 1120, 1330, 1050, 910, 700, 630, 630, 630, 630, 280, 980, 630, 630, 630, 630, 490, 770, 630, 630, 630, 630, 700, 420, 630, 2590, 2170, 630, 630, 980, 1050, 1120, 1330, 1470, 1610, 1750, 1890, 2030, 3010, 1610, 1680, 3150, 3430, 2170, 2240, 2380, 2520, 2660, 2800, 3080, 3080, 3080, 3080, 3080, 3080, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3080, 3290, 3920, 3430, 3640, 3780, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3710, 3500, 3500, 3500, 3500, 3080, 2380, 3010, 2940, 2870, 2660, 2520, 2450, 2310, 2170, 2030, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 1890, 1750, 1890, 1820, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 420, 420, 700, 770, 770, 840, 1050, 1190, 1400, 1540, 1750, 1890, 2030, 2170, 2310, 2450, 2170, 2240, 2590, 2380], this.BlockStateY = [4060, 3920, 3780, 3640, 3430, 3290, 3080, 2730, 2660, 2940, 3500, 3010, 2940, 2660, 2660, 2730, 3080, 2940, 3290, 3430, 3780, 3710, 3780, 3780, 3710, 3500, 3360, 3220, 3080, 3010, 3010, 2940, 2800, 2660, 2520, 3010, 3010, 2450, 2310, 2170, 2030, 1820, 2170, 2100, 3010, 3710, 3430, 3080, 1820, 2030, 2240, 2310, 2310, 2310, 2310, 2310, 2310, 2380, 2100, 2310, 3430, 3430, 2310, 2310, 2310, 2310, 2310, 2310, 2590, 2730, 2870, 3010, 3080, 3220, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1960, 1960, 1960, 1960, 1960, 1960, 1750, 1610, 1470, 1330, 1190, 980, 910, 1330, 1260, 2030, 1330, 2450, 2800, 2310, 980, 1190, 1400, 1470, 1470, 1470, 1470, 1470, 1470, 1890, 1750, 1610, 1470, 1050, 1400, 1260, 1470, 1470, 1680, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1400, 1120, 980, 770, 630, 420, 350, 350, 420, 700, 770, 770, 770, 770, 770, 770, 560, 770, 770, 770];
                break;
            case 49:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 9, 1, 1, 9, 1, 1, 1, 1, 1, 1, 8, 2, 1, 1, 1, 1, 9, 1, 1, 1, 1, 9, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 7, 3, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 9, 1, 1, 9, 1, 1, 1, 8, 2, 1, 4, 4, 1, 1, 4, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 7, 3, 9, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 18, 2, 4, 4, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 14, 3, 11, 4, 9, 1, 9, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, -90, 0, -180, 0, 0, 0, 90, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -180, 180, 0, 90, 0, 0, -90, 180, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 180, 180, 0, 90, 0, -90, 0], this.BlockStateX = [2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 1610, 1820, 1890, 2450, 2170, 2240, 2030, 2030, 2030, 2030, 2240, 2030, 2030, 2030, 2030, 2030, 1610, 1820, 1890, 2170, 2240, 2450, 2030, 2030, 2030, 2030, 2100, 2310, 2450, 2590, 2730, 2940, 3010, 3010, 3010, 3010, 2940, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 2660, 2660, 2870, 3150, 3500, 3290, 3570, 3570, 3570, 3570, 3570, 3780, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3220, 3430, 3710, 3920, 3010, 2870, 2730, 2870, 2800, 2590, 2380, 2240, 2030, 1890, 770, 1750, 1610, 1750, 1750, 1750, 1750, 1750, 1750, 1540, 1400, 1260, 1120, 980, 1120, 770, 1050, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 910, 1120, 700, 910, 1050, 1260, 1400, 1540, 1120, 1120, 1120, 1120, 1120, 1330, 1120, 1050, 770, 700, 700, 630, 350, 280, 280, 280, 280, 280, 280, 350, 560, 700, 840, 910, 1120, 910, 770, 1190, 1190, 1190, 1400, 1190, 1190, 1120, 700, 700, 700, 700], this.BlockStateY = [3990, 4060, 3920, 3780, 3640, 3500, 3360, 3220, 3710, 3570, 3080, 2940, 2800, 3010, 3010, 3010, 3010, 3010, 3010, 2730, 2590, 2450, 2310, 2520, 2450, 2170, 2030, 1890, 1750, 1890, 1890, 1890, 1890, 1890, 1890, 1610, 1470, 1330, 1190, 980, 910, 910, 910, 910, 980, 1190, 1260, 1400, 1540, 2660, 1960, 1820, 2380, 2240, 2100, 1960, 2450, 1680, 2660, 2380, 2310, 2310, 2240, 2310, 2030, 1890, 1750, 1610, 1470, 1820, 1750, 1400, 1260, 1120, 980, 840, 700, 560, 350, 280, 280, 770, 770, 770, 770, 280, 280, 280, 490, 280, 280, 350, 630, 700, 700, 630, 700, 700, 280, 1120, 910, 770, 630, 490, 700, 700, 700, 700, 700, 560, 350, 350, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 1050, 1120, 1470, 1470, 1470, 1470, 1470, 1470, 1750, 2030, 1890, 2240, 2100, 2030, 2100, 2450, 2450, 2240, 2100, 1890, 1890, 2100, 2800, 2660, 2520, 2380, 2240, 3010, 3080, 3080, 3080, 3080, 3150, 3920, 3920, 3640, 3500, 3360, 3360, 3500, 3640, 3850, 2730, 2940, 3430, 3220];
                break;
            case 50:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 7, 10, 2, 4, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 8, 3, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 2, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 8, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 9, 1, 1, 1, 1, 17, 2, 4, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 4, 1, 1, 13, 3, 1, 1, 11], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, -90, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, -90, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, -90, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 180, 0, -90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1190, 1680, 1890, 1890, 1820, 1610, 1470, 1330, 1190, 1190, 1050, 910, 630, 1190, 1190, 1190, 1190, 700, 700, 910, 1120, 1120, 1190, 910, 770, 700, 630, 420, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 630, 420, 560, 350, 770, 910, 1050, 1190, 1330, 1470, 1610, 1680, 1680, 1680, 1680, 1680, 1680, 1820, 1960, 2100, 2170, 2310, 2450, 2590, 2380, 2450, 2800, 2870, 2870, 2870, 2870, 2800, 2520, 2450, 2450, 2450, 2450, 2450, 2450, 2520, 3430, 2730, 2870, 2940, 3080, 3220, 3290, 3500, 3500, 3500, 3500, 3500, 3500, 3080, 3920, 3360, 3640, 3710, 3500, 3500, 3500, 3500, 3710, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3080, 3290, 3430, 3920, 3640, 3710, 3500, 3500, 3710, 3500, 3430, 3220, 3010, 2870, 2660, 2520, 2380, 2240, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1260, 1120, 980, 1120, 1120, 560, 1120, 1120, 560, 840, 630, 560, 560, 350, 560, 560, 560, 560], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2240, 3150, 3500, 3080, 2660, 2590, 2590, 2590, 2590, 2940, 2590, 2590, 2870, 2800, 2660, 2520, 2380, 2660, 3080, 3150, 3220, 3640, 3430, 3710, 3710, 3710, 3710, 3640, 3430, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1750, 1820, 2240, 2170, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 2170, 1330, 1960, 1820, 1680, 1540, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1540, 1750, 1820, 2380, 2240, 2100, 2030, 2590, 2730, 2940, 3640, 3500, 3360, 3220, 3080, 3850, 3850, 3920, 3920, 3920, 3920, 3920, 3150, 3640, 3500, 3360, 3220, 3080, 2940, 3150, 3150, 3150, 3150, 3150, 2800, 2660, 2520, 2380, 2520, 2450, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 1330, 1330, 1330, 1330, 1330, 1330, 980, 840, 980, 910, 630, 560, 630, 910, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 1260, 700, 700, 1050, 910, 560, 980, 910, 420, 280, 560, 630, 210, 70, 420];
                break;
            case 51:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 8, 2, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 4, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 3, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 8, 4, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 17, 3, 1, 1, 1, 4, 4, 4, 1, 4, 4, 1, 1, 1, 18, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 3, 1, 4, 11, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, -90, 0, 0, 180, 0, 0, 0, 0, 0, 90, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, -180, 90, -90, 0, 0, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, -180, 90, -90, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -180, 90, -90, 0, 0, 90, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 180, 0, -180, 0, -90, 0, 0, 0, 0, 90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 90, 0], this.BlockStateX = [2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2170, 2380, 2380, 2380, 2380, 2450, 2660, 2800, 2940, 3150, 2800, 3150, 2870, 3220, 3080, 2800, 2800, 2800, 2870, 3360, 3570, 3220, 3220, 3220, 3220, 3220, 3220, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3850, 3640, 3640, 3640, 3640, 3640, 3640, 3360, 3920, 3500, 3710, 3640, 3640, 3640, 3640, 3640, 3850, 3570, 3360, 3220, 3080, 2870, 2870, 3150, 3150, 2940, 2800, 2660, 2520, 2380, 2240, 2450, 2450, 2450, 2450, 2450, 2450, 2170, 2030, 1960, 1750, 1750, 2030, 2030, 2100, 2100, 2100, 2100, 1820, 1890, 2100, 1750, 1610, 1470, 1260, 1260, 1540, 1610, 1540, 630, 1330, 1190, 1120, 1190, 1120, 980, 840, 560, 560, 560, 560, 560, 560, 560, 560, 140, 980, 350, 420, 700, 770, 560, 560, 560, 630, 910, 1050, 1330, 1330, 1120, 980, 840, 700, 490, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1750, 1890, 2030, 2170, 1820, 1890, 2310, 2520, 2170, 2590], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 3570, 3150, 3080, 2800, 2660, 2520, 2310, 2240, 2240, 2240, 2310, 2940, 2590, 2730, 3570, 3570, 3290, 3150, 3010, 3500, 3570, 3500, 3920, 3150, 3710, 3570, 3430, 3290, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 2590, 1120, 2520, 1890, 1750, 1610, 1470, 1680, 1680, 1680, 1680, 1400, 1260, 1120, 980, 840, 1120, 630, 560, 560, 560, 630, 910, 1050, 1330, 1400, 1400, 1400, 1400, 1400, 1400, 1820, 980, 1610, 1470, 1330, 1190, 1400, 1400, 1400, 1470, 1750, 1890, 2660, 2450, 2310, 2240, 2100, 2730, 2380, 2450, 2730, 2730, 2730, 2800, 3080, 3220, 3430, 3640, 3640, 3710, 3710, 3710, 3500, 3710, 3710, 3710, 3290, 3430, 3150, 3010, 2870, 2730, 2590, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2310, 2170, 2030, 1820, 1680, 1400, 1260, 980, 910, 910, 910, 910, 840, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 280, 490, 490, 420, 490, 210];
                break;
            case 52:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 8, 5, 2, 9, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 6, 7, 3, 5, 18, 2, 17, 3, 5, 5, 8, 2, 13, 3, 11, 4, 1, 4, 1, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 180, 180, 0, -90, 90, 90, -90, 90, -180, 0, 0, 0, -180, 0, 0, 0, 0, 180, 0, 90, 0, 0], this.BlockStateX = [420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 700, 490, 840, 980, 1120, 980, 1330, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1540, 1400, 1400, 1330, 1050, 980, 1050, 1400, 1400, 1680, 1820, 1960, 2100, 2240, 2380, 2590, 2590, 2310, 2240, 2240, 2240, 2240, 2240, 2240, 2310, 2520, 2660, 2800, 2940, 3150, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3290, 3570, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3360, 3220, 3570, 3080, 2940, 2800, 2660, 2520, 2380, 1260, 2030, 1680, 1680, 1680, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 4060, 420, 630, 420, 420, 910, 2240, 1260, 1540, 1400, 1680, 1680, 2660, 1890, 1400, 3220, 3640, 1890, 1960, 1820, 2590, 2660, 3850, 3640, 3640, 3220, 3850, 3640, 1890, 1680, 1680, 2170, 1120, 1750, 1680, 1680], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 560, 630, 560, 560, 560, 2100, 630, 840, 980, 1120, 1330, 1470, 1610, 1750, 1820, 2100, 2240, 2450, 2450, 2240, 1890, 1820, 1960, 1820, 1820, 1820, 1820, 1820, 1820, 1890, 2310, 2310, 1960, 1820, 1680, 1540, 1400, 1260, 1050, 980, 980, 980, 980, 1050, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 560, 560, 630, 560, 560, 560, 560, 560, 560, 1820, 910, 560, 420, 280, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 3500, 2660, 2660, 2590, 1400, 2100, 1400, 1400, 1190, 1400, 700, 2100, 1400, 1190, 2730, 2730, 2030, 1820, 1820, 1190, 980, 2030, 1960, 2800, 2590, 980, 910, 490, 560, 350, 630, 1400, 910, 140, 0];
                break;
            case 53:
                this.BlockState = [1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 10, 8, 2, 4, 17, 3, 5, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 18, 2, 6, 6, 17, 3, 8, 2, 15, 3, 5, 11], this.BlockRotate = [0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 0, 0, 90, 0, 180, 0, 180, 0, 180, -90, 0, 0, 0, -180, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 90, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 180, 0, -90, 90, -90, 90, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -180, 0, 0, 180, 0, 180, -180, -180, 0, 0, 0, 0], this.BlockStateX = [420, 420, 420, 490, 420, 420, 770, 840, 840, 840, 910, 1120, 1330, 1400, 1400, 1400, 1400, 1470, 1750, 1890, 2170, 2310, 2590, 2730, 3010, 3080, 3080, 3010, 2730, 2730, 2730, 2940, 3080, 3220, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3150, 3080, 3080, 3080, 3080, 3080, 3080, 3010, 2240, 2380, 1960, 1960, 2030, 1890, 1610, 1540, 1540, 1540, 1470, 1050, 1260, 980, 980, 980, 980, 980, 980, 980, 1400, 840, 350, 490, 630, 770, 910, 1050, 1190, 1330, 1470, 1610, 1820, 840, 1400, 420, 1120, 1190, 2590, 3010, 3080, 2940, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3780, 3990, 3710, 3500, 3500, 3080, 2870, 3080, 2170, 1960, 1190, 980, 980, 980], this.BlockStateY = [4060, 3920, 3780, 3290, 3640, 3500, 3150, 2940, 2800, 2660, 2310, 2240, 2310, 2660, 2800, 2940, 3080, 3290, 3290, 3010, 2870, 2590, 2450, 2170, 2170, 2380, 2520, 2730, 2870, 3150, 1610, 3220, 3220, 3220, 3150, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 490, 490, 700, 840, 980, 1120, 1260, 1400, 1610, 1260, 1260, 1680, 1540, 1330, 1890, 1890, 1680, 1540, 1400, 1190, 1050, 1120, 840, 700, 560, 420, 280, 140, 0, 2520, 2520, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 3570, 2450, 2240, 1330, 3010, 3220, 3220, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 2590, 2520, 910, 910, 1330, 1400, 1610, 1680, 700, 700, 770, 560];
                break;
            case 54:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 8, 2, 6, 6, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 9, 8, 3, 17, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 7, 3, 8, 2, 11, 3, 14], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, -90, 0, -180, 0, 0, 0, 0, 0, 90, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -90, -180, 90, 90, 180, -90, 0, 0, 90, 0, 180, -90, 0, -90, 180, -90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 0, 0, 0, 0, 0, 0, 0, -90, -90, 90, -180, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, -180, -90, -90, 0], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3220, 3500, 3500, 3500, 3500, 3080, 3430, 3430, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1890, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 2100, 1890, 2240, 2380, 2520, 2660, 2800, 3010, 3150, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3010, 2940, 2940, 2940, 2940, 2940, 2870, 2660, 2520, 2380, 2240, 2100, 1890, 1820, 1820, 1820, 1820, 1540, 1400, 1260, 1750, 1120, 910, 840, 840, 840, 840, 840, 910, 1120, 1330, 1400, 1400, 1400, 1330, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 700, 490, 700, 700, 1260, 1820, 1680, 1820, 1960, 2660, 3500, 2590, 1820, 1820, 2520, 3500, 2940, 2450, 1820, 1330, 840, 840, 2590, 2590, 2590, 2590, -280, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 3150, 3220, 2030, 1820, 4130, 3920, 3780, 3640, 3360, 3220, 3080, 2800, 2660, 2520, 2380, 2170, 3220, 3150, 630, 840, 490, 700, 770], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 3640, 3360, 2940, 3080, 3220, 3640, 2730, 3570, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3570, 3360, 3220, 3080, 2940, 2800, 2100, 2520, 2380, 2240, 1820, 1890, 1820, 1820, 1820, 1820, 1820, 1890, 2170, 2170, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 350, 280, 350, 560, 700, 840, 980, 1120, 1330, 1400, 1400, 1400, 1400, 1400, 1330, 1120, 980, 840, 700, 420, 420, 420, 490, 420, 490, 700, 840, 980, 1120, 1260, 1470, 1540, 1610, 1820, 1960, 2100, 2310, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 3530, 3010, 2940, 2870, 2660, 2520, 2660, 2800, 2660, 2660, 3150, 3640, 3080, 2240, 1820, 1470, 770, 1400, 840, 420, 980, 2380, 4130, 3920, 3500, 3780, 70, 3360, 3220, 3080, 2940, 2800, 2520, 2380, 2170, 1890, 2100, 2240, 2520, 2800, 2940, 3080, 3220, 3430, 2870, 2660, 2240, 2170, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 70, 280, 770, 840, 2380, 2380, 2100];
                break;
            case 55:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 7, 2, 3, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 17, 2, 17, 3, 8, 2, 1, 11, 3, 13, 10], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, -180, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, -180, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 180, -90, 0, 0, 180, 90, 0, 180, 0, -90, 180, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 180, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, -90, -90, 90, -90, 0, -90, -90, 0, 0], this.BlockStateX = [1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1890, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3430, 3500, 3500, 3500, 3500, 3220, 3080, 3430, 2940, 2800, 2590, 2450, 2240, 2100, 1960, 1540, 1680, 1400, 1260, 1120, 980, 840, 980, 630, 840, 630, 1190, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1190, 980, 700, 700, 700, 770, 700, 770, 980, 1120, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2870, 2800, 2800, 2800, 2870, 3080, 3220, 3360, 3640, 3640, 3640, 3640, 3570, 3640, 3640, 3220, 3640, 2940, 3080, 3570, 3360, 2800, 2660, 2520, 2310, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 1820, 2170, 1890, 1820, 1820, 1820, 1820, 1820, 1820, 1540, 1400, 1750, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 1820, 1820, 2730, 3500, 2240, 1260, 1260, 700, 1960, 3360, 2800, 3640, 3010, 2240, 1820, 1190, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 1260, 3500, 1610, 1820, 3500, 3710, 1050, 1260, 1400, 1540, 1680, 1960, 2100, 2380, 2520, 2660, 3010, 2800, 1050, 1260, 3080, 3010, 3220, 3150, 0, 560, 700, 700, 1820], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2590, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2590, 2800, 2940, 3080, 3220, 3640, 3640, 3570, 3640, 3640, 3570, 3290, 3220, 3220, 3220, 3220, 3220, 3220, 3080, 3220, 3220, 3220, 3640, 3290, 3640, 3570, 3570, 3220, 2800, 2940, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1190, 1120, 1820, 1400, 1680, 1190, 1540, 2030, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2030, 1820, 1680, 1540, 1400, 1260, 1050, 980, 1050, 1260, 1400, 1540, 1750, 1820, 1820, 1820, 1540, 1120, 1260, 1400, 1750, 980, 840, 420, 700, 420, 420, 490, 420, 420, 420, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1540, 1750, 1750, 1400, 1260, 1120, 980, 840, 700, 420, 420, 490, 420, 420, 420, 420, 420, 420, 420, 420, 420, 3640, 2870, 2520, 3010, 3430, 3220, 1890, 1610, 2100, 1400, 1400, 1400, 420, 1050, 1050, 420, 1470, 1680, 1820, 1960, 2240, 2380, 2660, 2800, 3010, 3360, 3360, 2800, 2730, 3290, 3220, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 2310, 2240, 1190, 980, 210, 420, 420, 420, 420, 140, 3530];
                break;
            case 56:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 2, 7, 8, 3, 7, 2, 17, 3, 8, 2, 11, 3, 16, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 9, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 0, -90, 0, 90, -90, 90, 90, 90, 90, 180, 0, 0, 0, 90, 90, -90, -90, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 90, 0], this.BlockStateX = [770, 770, 770, 770, 770, 770, 770, 770, 770, 840, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2100, 2170, 2170, 2170, 2450, 2240, 2590, 2730, 2870, 3010, 3150, 3290, 3570, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 700, 630, 630, 630, 700, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3220, 3290, 3220, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 490, 350, 210, 70, 770, 770, 1610, 2590, 3570, 2450, 630, 2100, 2100, 1120, 1050, 2800, 2870, 3780, 3570, 420, 630, 2380, 2450, 630, 840, 910, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 2660, 2660, 2660, 1610, 2660, 2660, 2660, 2660, 2660], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2800, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2800, 3010, 3150, 3290, 3570, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3150, 3500, 3290, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1820, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1680, 1470, 1330, 1190, 980, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 840, 630, 420, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 3530, 3010, 2730, 3570, 2450, 1750, 1260, 910, 350, 2730, 2520, 3360, 3570, 2240, 2170, 1400, 1330, 700, 910, 350, 350, 70, 3780, 3570, 3430, 3290, 3150, 3010, 2870, 2590, 2450, 2310, 1890, 2170, 2030, 2100, 2380, 1610, 1470, 1120, 1330];
                break;
            case 57:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 2, 3, 7, 18, 2, 2, 8, 11, 3, 15, 5, 5, 5, 5, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 18, 3, 10], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 180, 180, -90, -90, 0, 0, 90, 180, 90, 0, 0, 90, 90, -180, 180, 0, -180, 180, 180, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3360, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1680, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1680, 1890, 2030, 2170, 2310, 2520, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 630, 630, 1680, 3430, 3430, 3010, 1960, 1610, 1610, 2100, 2590, 3080, 420, 630, 1260, 1190, 3640, 3430, 1610, 1820, 2590, 2590, 2870, 2590, 2450, 2730, 2590, -70, 140, 280, 420, 980, 560, 700, 840, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2170, 4130, 3920, 3780, 3640, 3500, 3290, 3150, 3010, 2870, 2730, 2450, 2310, 2170, 2030, 1890, 1750, 1470, 1330, 1190, 980, 2100, 2030, 630], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 490, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3710, 3780, 3780, 3780, 3780, 3780, 3780, 3780, 3780, 3780, 3780, 3710, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1050, 980, 980, 980, 980, 1050, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3500, 3640, 3920, 4060, 3430, 2100, 420, 1330, 3080, 3780, 3780, 3430, 1400, 980, 1400, 420, 2730, 2660, 420, 210, 1540, 1610, 2100, 2170, 2940, 2800, 2660, 3640, 3780, 3780, 3850, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3570, 3780, 3500];
                break;
            case 58:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 10, 8, 2, 3, 18, 2, 7, 17, 3, 2, 8, 11, 3, 12, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, -90, 0, -180, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 90, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 90, 0, -90, 0, 90, 180, 90, 90, 180, 0, 180, 90, 180, -90, -180, 90, -90, -90, 0, -180, -90, 90, 0, 0, 0, 0, -180, 90, 90, -180, 180, 180, 0, 180, -180, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1120, 1330, 1400, 1400, 1400, 1330, 1120, 980, 840, 560, 560, 560, 630, 560, 560, 560, 980, 840, 630, 1120, 1330, 1400, 1400, 1400, 1470, 1680, 1820, 2030, 2100, 2100, 2100, 2380, 2520, 2170, 2660, 2800, 2940, 3080, 3220, 3500, 3430, 3500, 3500, 3500, 3430, 3220, 3010, 2940, 2940, 2870, 2660, 2450, 2380, 2380, 2380, 2380, 2380, 2380, 2450, 2660, 2800, 2940, 3080, 3220, 3360, 3570, 3640, 3640, 3570, 3360, 3220, 3080, 2940, 2800, 2660, 2520, 2310, 2240, 2240, 2240, 2240, 2310, 2520, 2660, 2870, 2940, 2870, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1400, 1400, 1470, 1400, 1400, 1400, 700, 1050, 1400, 1050, 560, 980, 1400, 1750, 2870, 3500, 2940, 2380, 3010, 3640, 2940, 2240, 2590, 2590, 1960, 2240, 2240, 2100, 2380, 700, 490, 700, 560, 770, 2660, 2590, 2590, 2380, 2240, 2030, 1400, 1400, 1190, 1400, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2590, 2590, 2520, 2310, 2170, 2030, 1820, 1750, 1750, 1750, 1330, 1470, 1190, 1680, 1050, 910, 770, 490, 490, 560, 490, 560, 770, 910, 1050, 1260, 1330, 1330, 1260, 1050, 910, 770, 490, 490, 560, 490, 490, 490, 490, 490, 910, 560, 770, 1050, 1190, 1400, 1470, 1400, 1190, 1050, 840, 770, 840, 1050, 1190, 1330, 1470, 1610, 1750, 1960, 2030, 2030, 2030, 2030, 2030, 2030, 2100, 2310, 2450, 2660, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2800, 3010, 3150, 3290, 3430, 3640, 3710, 3710, 3640, 3430, 3220, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3570, 3430, 3220, 3710, 3850, 3990, 3080, 2590, 2170, 1750, 1120, 490, 910, 1330, 490, 980, 1120, 1260, 2030, 2380, 2730, 2940, 3710, 3150, 3150, 3010, 3290, 3150, 3150, 3500, 2870, 2800, 1190, 1260, 490, 280, 1680, 1750, 3500, 3430, 3570, 3430, 3290, 4130, 2240, 2030, 1890, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 350, 210, 0, 3640, 3430, 3290, 3150, 3010, 2870, 2590, 2450, 2310, 2170, 1890, 1680];
                break;
            case 59:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 4, 1, 4, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 10, 8, 2, 17, 3, 7, 2, 17, 3, 6, 8, 2, 1, 1, 11, 3, 15], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, -90, 90, -180, 0, 0, 0, 0, -90, 0, 90, 0, 0, 180, 0, 0, 0, 180, 0, -90, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 90, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 180, 180, 90, 90, 0, 0, 0, 90, 180, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, -90, 90, 0, 180, -180, 0, 180, -180, -180, 0, 0, -180, -180, 0], this.BlockStateX = [910, 910, 910, 910, 910, 910, 910, 910, 840, 560, 560, 840, 910, 910, 910, 840, 490, 560, 490, 490, 560, 770, 980, 1330, 1120, 1470, 1680, 1750, 1750, 1750, 1750, 1680, 1470, 1260, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1260, 1470, 1610, 1820, 1890, 2310, 2170, 1960, 2450, 2660, 2730, 2730, 2730, 2730, 2730, 2660, 2450, 2310, 2100, 2030, 2030, 2030, 2030, 2030, 2100, 2380, 2450, 2450, 2450, 2520, 2730, 2870, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3360, 3080, 3010, 3080, 3290, 3570, 3570, 3500, 3570, 3570, 3570, 3570, 3570, 910, 910, 490, 1260, 1750, 1190, 1540, 2310, 2730, 2030, 2450, 2940, 3430, 3570, 0, 210, 350, 770, 630, 490, 1050, 1330, 1470, 1680, 1960, 2170, 2310, 2590, 2730, 2870, 3010, 3150, 3290, 3570, 3710, 3850, 4060, 910, 700, 910, 1470, 1540, 1680, 1890, 2660, 2450, 3010, 3640, 3430, 3570, 3570, 3570, 3570, 3360], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 2940, 2800, 2520, 2380, 2170, 2030, 1890, 1680, 1330, 1540, 1190, 1050, 840, 770, 700, 350, 420, 350, 420, 630, 770, 910, 1050, 1260, 1330, 1400, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2940, 3010, 3010, 3080, 3290, 3570, 3570, 3500, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2520, 2450, 2450, 2380, 2170, 2030, 1890, 1750, 1610, 1400, 1260, 1050, 910, 770, 560, 490, 490, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2100, 2240, 2450, 2660, 2730, 3150, 3010, 2800, 3290, 3430, 3570, 3710, 3850, 3290, 2030, 1190, 350, 840, 2030, 3010, 3570, 3010, 1820, 910, 490, 1260, 2940, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 3500, 3150, 3080, 560, 350, 3290, 3360, 1050, 980, 2450, 1470, 1540, 3990, 4130, 3570, 3430, 3360];
                break;
            case 60:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 10, 7, 2, 3, 18, 2, 8, 3, 17, 11, 3, 14, 2, 8, 9, 1, 1, 1, 1, 1, 1, 9, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 5, 5, 5, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, -90, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, 180, 90, 0, 0, -90, -90, -90, 180, -90, 0, 0, -180, 180, 90, 90, 0, -180, 0, -180, 0, 0, 0, -90, 90, 90, 0, 0, 0, 0, 0, 0, -90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 180, 0, -90, 90, 180], this.BlockStateX = [840, 840, 840, 840, 840, 840, 840, 840, 840, 910, 1190, 1260, 1190, 980, 840, 700, 420, 490, 420, 420, 420, 420, 420, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 2030, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2170, 2380, 2520, 2660, 2800, 2940, 3150, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 3220, 1960, 2100, 3150, 2940, 2800, 2660, 2520, 2310, 2310, 2590, 2380, 2660, 2240, 2590, 1820, 1680, 1540, 1330, 1260, 1260, 1260, 1260, 1260, 560, 1190, 980, 840, 560, 630, 560, 560, 560, 560, 560, 560, 560, 560, 840, 840, 1050, 420, 420, 1330, 2100, 2660, 3220, 3220, 2940, 2520, 2240, 1260, 910, 560, 840, 1470, 1260, 1750, 1680, 3220, 3430, 3220, 3430, 560, 560, 840, 1960, 2030, 910, 910, 910, 910, 910, 910, 910, 910, 910, 4130, 3920, 3780, 3640, 3500, 3360, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 1960, 1820, 1680, 1470, 3220, 3080, 3360, 3220, 2100, 1960, 2240, 2100], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2800, 2800, 3010, 3220, 3290, 3290, 3290, 2870, 3220, 3010, 2730, 2590, 2450, 2310, 2170, 1960, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1960, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3640, 3710, 3710, 3710, 3710, 3710, 3640, 3430, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 490, 490, 840, 770, 770, 770, 770, 840, 1120, 1120, 490, 910, 490, 560, 490, 490, 490, 560, 770, 910, 1050, 1190, 1330, 770, 1540, 1610, 1610, 630, 1540, 1330, 1190, 1050, 910, 490, 350, 210, 70, 3430, 2940, 3290, 2800, 2170, 1890, 2380, 3710, 3010, 1330, 770, 770, 490, 980, 1610, 630, 3500, 3010, 3080, 1890, 1680, 3360, 3430, 980, 1050, 210, 350, 350, 490, 280, 980, 1190, 1330, 1470, 1750, 2030, 2170, 2520, 2310, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2520, 2660, 2660, 2800, 2520, 2660, 2660, 2800];
                break;
            case 61:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 4, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 3, 17, 8, 2, 18, 3, 2, 7, 11, 3, 16, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, -180, 90, -90, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 90, 0, -90, -90, 0, 0, 90, 90, 0, -90, -90, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 180, 90, -90, 0, 0, 0, -180, -90, -90, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1190, 1260, 1260, 1260, 2100, 1540, 1330, 1960, 1680, 1820, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2310, 2310, 2590, 2590, 2380, 2240, 2100, 1960, 1820, 1610, 1540, 1540, 1540, 1540, 1540, 1470, 1260, 1120, 910, 840, 840, 840, 840, 910, 1120, 1260, 1400, 1540, 1750, 1820, 1890, 2100, 2310, 2450, 2660, 2800, 2940, 3150, 3220, 3220, 2660, 2940, 3150, 2800, 2520, 2380, 2240, -350, -350, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 700, 700, 1260, 2310, 3360, 2800, 2170, 1540, 840, 1330, 2800, 3220, 1960, 980, 1050, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 3360, 3570, 1960, 1890, 630, 840, 3220, 3430, 700, 840, 910, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540, 1540], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2800, 2730, 2800, 3010, 3150, 3290, 3570, 3570, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2590, 2380, 2310, 2310, 2310, 2310, 2310, 2380, 2660, 2800, 3080, 3150, 3150, 3150, 3150, 3150, 3080, 2870, 2730, 2590, 2450, 2310, 2100, 2030, 2030, 1960, 1750, 1610, 1470, 1330, 1120, 1050, 1050, 1050, 1050, 1120, 1330, 1540, 1610, 1540, 1260, 1190, 1190, 1190, 1120, 910, 770, 490, 490, 560, 490, 490, 490, 490, 1540, 1400, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 3080, 3500, 3150, 3570, 2940, 2310, 3150, 2590, 1540, 1050, 1190, 700, 490, 2940, 2730, 1540, 1750, 1890, 2030, 2170, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3710, 3850, 3990, 4130, 2730, 2800, 2940, 3150, 1400, 1330, 840, 910, 490, 490, 210, 1680, 1470, 1330, 1190, 910, 770, 630, 350, 210, -70, 70];
                break;
            case 62:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 2, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 6, 6, 6, 3, 17, 2, 7, 3, 18, 2, 8, 11, 3, 12], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 90, 0, 0, 0, -90, -180, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, -90, 180, 90, 0, 0, 90, 90, -90, 90, 90, -90, 180, 180, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 980, 1050, 1050, 980, 700, 630, 630, 700, 630, 630, 630, 910, 630, 1050, 1540, 1190, 1330, 1680, 1890, 2030, 2240, 2310, 2590, 2380, 2730, 2870, 3080, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3080, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1540, 1470, 1470, 1470, 1470, 1540, 1750, 1890, 2100, 2100, 1820, 1750, 1750, 1750, 1750, 1820, 2030, 2170, 2380, 2450, 2450, 2450, 2450, 2450, 2870, 2730, 2520, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 630, 630, 420, -70, 140, 280, 420, 560, 700, 840, 980, 1190, 1330, 1610, 1750, 1890, 2030, 2240, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 1050, 1260, 2800, 1470, 2800, 630, 420, 2660, 2590, 1820, 1890, 2170, 2100, 3430, 3430, 3640], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2520, 2310, 2170, 1960, 1820, 1610, 1470, 700, 1190, 1050, 910, 630, 1330, 630, 700, 630, 630, 980, 1050, 1050, 980, 770, 490, 560, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1820, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1960, 2170, 2310, 2450, 2590, 2800, 2870, 2870, 2800, 2520, 2520, 2730, 2870, 3010, 3150, 3360, 3430, 3430, 3360, 3150, 3010, 2870, 2730, 2590, 2310, 2310, 2380, 2310, 2310, 2380, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3990, 4130, 3500, 2940, 3010, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 1540, 1330, 1190, 1050, 910, 770, 490, 350, 210, -70, 140, 1120, 1330, 1470, 1610, 1750, 2030, 2170, 2450, 2590, 2730, 2870, 3080, 2240, 630, 1890, 2240, 2310, 980, 1050, 490, 280, 1890, 1680, 3430, 3640, 3570, 3220, 3080];
                break;
            case 63:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 5, 5, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 8, 2, 17, 3, 2, 7, 3, 17, 2, 7, 11, 3, 15, 10], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 180, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 180, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 90, 0, 0, -90, -90, 0, 0, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, -90, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -90, 90, 0, 0, -180, 0, 0, -180, 0, 0, 0, 0, 90, 90, 0, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 980, 1050, 1050, 1050, 1050, 1050, 1470, 1470, 1470, 1470, 1120, 1400, 1470, 1540, 1820, 1960, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3360, 3010, 3360, 1890, 3080, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3080, 3360, 3360, 3150, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 560, 490, 490, 490, 560, 770, 980, 1120, 1400, 1470, 1470, 1470, 1470, 1470, 1890, 1540, 1750, 2030, 2240, 2380, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3990, 4130, 630, 1050, 1470, 2450, 3010, 3010, 3150, 1960, 490, 1470, 1890, 3010, 0, 210, 350, 490, 770, 910, 1190, 1330, 1610, 1750, 1470, 2240, 2030, 2870, 3150, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 420, 630, 1680, 1470, 3010, 3220, 490, 280, 1470, 1260, 3430, 3290, 3290, 630], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2590, 2590, 2800, 2940, 3080, 3220, 3360, 2940, 3080, 3220, 3360, 3570, 3570, 2800, 2450, 2450, 2730, 2800, 2800, 2800, 2800, 2800, 2800, 2940, 2800, 2870, 2800, 3150, 3080, 3150, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1610, 1610, 1890, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1960, 1890, 1680, 1540, 1400, 1190, 1120, 1190, 1470, 1470, 1260, 1120, 980, 840, 700, 420, 490, 420, 420, 490, 770, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 3360, 3080, 3080, 2800, 2240, 2940, 1960, 1960, 1470, 980, 420, 840, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 2660, 3080, 3080, 2800, 2800, -70, 140, 280, 420, 560, 700, 980, 1120, 1260, 1400, 1540, 1680, 1820, 2100, 2240, 2380, 2520, 1960, 840, 2800, 2730, 2730, 2660, 2450, 2520, 1540, 1610, 630, 700, 840, 840, 560, 3500];
                break;
            case 64:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 9, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 6, 11, 3, 13, 1, 8, 2, 3, 17, 2, 7, 18, 3, 2, 7, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, 180, -90, 0, 90, 0, -90, 180, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, -180, 90, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 180, 90, 90, 0, 0, 0, 0, 90, 90, 180, -180, -90, -90, 0, -180, 0, -180, 0, -180, 0, 0, 90, -90, 90, -90], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 1050, 1050, 840, 700, 490, 420, 420, 420, 420, 420, 420, 420, 420, 420, 700, 840, 490, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3080, 3220, 3430, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1330, 1260, 1260, 1260, 1330, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2730, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2730, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1190, 1120, 1120, 1120, 1190, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 700, 700, 770, 420, 1820, 3500, 2100, 1260, 2100, 2800, 1750, 1120, 1960, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2940, 3080, 3220, 3360, 3640, 3780, 3500, 3290, 3150, 3150, 2030, 490, 700, 1050, 980, 3500, 3710, 1680, 1610, 2800, 3010, 2030, 2030, 2030, 2030, 3920, 4060, 3640, 3360, 2940, 2660], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2590, 2310, 2240, 2240, 2170, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 560, 560, 630, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3500, 3500, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2940, 2730, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2590, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1050, 980, 980, 980, 980, 980, 980, 980, 980, 980, 1050, 1260, 1400, 1540, 1750, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 3430, 3500, 2240, 1260, 560, 1470, 3500, 3150, 2660, 1820, 980, 1330, 1820, 4130, 3920, 3780, 3640, 3360, 3220, 3080, 2940, 2800, 2520, 2380, 2240, 2030, 3360, 3640, 2520, 2800, -70, 140, 280, 420, 700, 1120, 1260, 1470, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1540, 840, 2940, 2870, 560, 350, 980, 910, 3710, 3500, 2240, 2310, 420, 700, 840, 1120, 1820, 1820, 1820, 1820, 1820, 1820];
                break;
            case 65:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 10, 2, 7, 3, 17, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 8, 3, 17, 7, 2, 6, 5, 5, 5, 5, 5, 5, 5, 5, 11, 3, 14, 1, 1, 1, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 90, 0, 0, 180, 0, 0, 0, -90, 0, 0, 0, -180, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 180, 0, 0, 90, 90, 0, -90, 90, 0, 180, 90, 180, -90, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -90, 90, 90, 90, -90, -90, 0, 90, -90, 90, -90, 90, -90, 90, -90, 0, 0, 0, 0, 0, 0, 0], this.BlockStateX = [490, 490, 490, 490, 490, 490, 490, 490, -350, 770, -280, 490, -280, 770, 490, -280, 490, 490, 560, 770, 910, 490, 1120, 1120, 770, 770, 840, 770, 770, 770, 840, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2100, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2100, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 770, 490, 560, 910, 560, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2800, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 490, 770, 770, 2170, 490, 840, 1470, 2170, 1260, 1260, 2730, 2730, 2450, 3570, 3150, 490, 490, 280, 1260, 1190, 1540, 1750, 1890, 2030, 2310, 2450, 2590, 2870, 3010, 3150, 3360, 1540, 1750, 1890, 2030, 2310, 2450, 2590, 2870, 3010, 3150, 3360, 1610, 1680, 3220, 3150, 3290, 3220, 2730, 2870, 2590, 2870, 2590, 2310, 2030, 2310, 2030, 2730, 2730, 2940, 490, 490, 490, 490], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 700, 2870, 70, 2870, 350, 2310, 2450, 560, 2310, 2170, 1680, 1610, 1610, 2030, 1680, 1960, 2590, 2450, 2100, 2730, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3360, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1120, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 490, 770, 980, 490, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3640, 3710, 3710, 3710, 3640, 3430, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 490, 350, 210, 70, 3220, 3080, 2590, 1890, 2450, 1610, 3430, 2310, 1050, 490, 350, 630, 490, 1260, 3710, 3500, 2100, 2170, 3430, 3640, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 1050, 840, 490, 280, 3920, 3710, 2730, 2170, 2170, 1470, 1470, 2170, 2170, 1470, 1470, 630, 770, 770, 3010, 2730, 2590, 1890];
                break;
            case 66:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 8, 3, 17, 2, 7, 3, 18, 2, 8, 11, 13, 3, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 5, 5, 5, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, -90, 90, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, -180, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -180, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 180, -90, 180, 90, 0, 90, 180, -90, -90, 180, 180, 90, 0, -180, 0, -180, 180, -180, 180, -180, -90, -90, 90, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -180, 0, -180, 0, 180, 0, -180], this.BlockStateX = [3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3360, 3150, 2940, 2870, 2940, 3150, 3290, 3500, 3570, 3570, 3570, 3500, 3220, 3150, 3080, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1120, 1050, 980, 770, 630, 420, 350, 350, 420, 630, 770, 910, 1050, 1190, 1330, 1470, 1680, 1750, 1750, 1750, 1820, 2030, 2170, 2310, 2520, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2520, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 840, 1050, 840, 1120, 1190, 1190, 1190, 1190, 1260, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3570, 3710, 3850, 3990, 4130, 3430, 3430, 2870, 3570, 3150, 2170, 1050, 700, 350, 1050, 1750, 2170, 2590, 1890, 1050, 1190, 1190, 1610, 3430, 3640, 3150, 3360, 1050, 1260, 2590, 2800, 910, 980, 2450, 2170, 2170, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1960, 2170, 2310, 2450, 2730, 3010, 3150, 3290, 3430, 3640, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 1610, 1610, 1610, 1610], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2730, 2520, 2450, 2380, 2170, 1960, 1890, 1890, 1820, 1610, 1470, 1330, 1120, 980, 770, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 560, 770, 980, 1050, 1050, 1120, 1330, 1470, 1680, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1680, 1470, 1330, 1190, 980, 910, 910, 910, 980, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2800, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2800, 2870, 2520, 2520, 2730, 3010, 3150, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3220, 3570, 2170, 1470, 840, 490, 700, 1050, 1330, 1750, 1330, 910, 2170, 2870, 2870, 2730, 3010, 3570, 2870, 2940, 700, 770, 840, 770, 1610, 1540, 2870, 3080, 3570, 3290, 3570, 4130, 3920, 3780, 3710, 3430, 3290, 3150, 3010, 2730, 2590, 2450, 2310, 2100, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 1540, 1330, 1190, 1050, 770, 630, 350, 210, 70, -140, 350, 630, 770, 1050, 2730, 3010, 3430, 3710];
                break;
            case 67:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 2, 8, 3, 17, 2, 7, 3, 18, 2, 8, 11, 3, 12, 1], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 90, 0, 0, -90, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 90, 0, -90, 180, -90, -90, 180, 90, 180, -90, 180, 90, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, 180, 0, -180, 0, -180, -90, 90, 90, 90, 180, 0, 90, 90, 0, 0], this.BlockStateX = [3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3360, 3150, 3010, 2870, 2660, 2590, 2590, 2590, 2660, 2870, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3150, 3360, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1120, 1050, 1050, 1120, 1330, 1540, 1540, 1330, 1190, 1050, 910, 700, 630, 630, 630, 630, 630, 630, 630, 700, 910, 1050, 1190, 1330, 1540, 1610, 1610, 630, 1540, 1330, 1190, 1050, 910, 630, 700, 630, 700, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3570, 3710, 3850, 3990, 3430, 3430, 2940, 2590, 3010, 3430, 2450, 1050, 1330, 910, 630, 1120, 1610, 1120, 630, 1890, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 3430, 3640, 3430, 3640, 1400, 1470, 1400, 1330, 630, 420, 2800, 2520, 2450, 2940], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2590, 2590, 2590, 2520, 2310, 2170, 2030, 1820, 1750, 1750, 1750, 1680, 1470, 1330, 1190, 1050, 910, 770, 490, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 560, 770, 910, 1120, 1190, 1120, 840, 770, 770, 770, 770, 840, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2100, 2170, 2170, 2170, 2170, 2240, 2450, 2590, 3150, 2800, 2870, 2870, 2870, 2870, 3290, 2940, 3430, 3640, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3570, 3290, 2590, 2170, 1750, 1120, 490, 910, 770, 770, 1470, 2170, 2380, 2870, 3360, 3710, 1890, 3220, 2030, 2170, 2310, 2450, 2730, 2870, 1610, 1470, 1330, 1190, 980, 3500, 3290, 3150, 3010, 2730, 2590, 2450, 2310, 2030, 1890, 1750, 1540, 2030, 2310, 2730, 3010, 3080, 3150, 1400, 1470, 490, 280, 2170, 1960, 3220, 3150, 3710, 3710, 3430, 3010];
                break;
            case 68:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 4, 4, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 6, 5, 5, 2, 7, 3, 18, 2, 8, 3, 17, 2, 8, 11, 3, 13, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 5, 5], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 90, 180, 0, 0, 0, 0, 0, -90, 0, -180, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 0, -90, 0, 90, -90, -90, 90, 0, 90, 180, -90, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, -90, 180, 90, -90, 0, 0, -90, 90, 90, 90, 90, -90, 180, -180, 180, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 180, 90, -90], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1190, 1260, 1330, 1540, 1680, 1890, 1960, 1960, 1960, 1960, 1890, 1680, 1540, 1400, 1260, 1120, 770, 980, 700, 700, 700, 770, 980, 1120, 1330, 1330, 1120, 980, 770, 770, 980, 1120, 1260, 1400, 1540, 1890, 1890, 1610, 1680, 1610, 1820, 1960, 2100, 2240, 2380, 2590, 2660, 2660, 2660, 2660, 2730, 2940, 3080, 3360, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2730, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 700, 700, 980, 1610, 1960, 1610, 700, 1400, 1050, 1050, 2100, 2660, 3010, 3360, 3010, 2660, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 2170, 2380, 2520, 2800, 2940, 3080, 3220, 3500, 3640, 3780, 3920, 4130, 3500, 3220, 3360, 2800, 2520, 700, 490, 1190, 1260, 1190, 1120, 3150, 3080, 3360, 3570, 2660, 2660, 2870, 2590, 2800, 2940, 3080, 3220, 3500, 3640, 3780, 3920, 4130, 3360, 3500, 3220], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2590, 2660, 2870, 3080, 3150, 3150, 3080, 2870, 2730, 2590, 2450, 2240, 2170, 2170, 2170, 2170, 2170, 2100, 2170, 1890, 1750, 1610, 1400, 1330, 1330, 1260, 980, 910, 910, 840, 560, 490, 490, 490, 490, 490, 560, 840, 980, 490, 1260, 1330, 1330, 1330, 1330, 1330, 1260, 1050, 910, 770, 630, 420, 350, 350, 1050, 420, 630, 770, 910, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2940, 3010, 3010, 3080, 3290, 3430, 3570, 3710, 3850, 3990, 4130, 3500, 3150, 2590, 3150, 2660, 2170, 1750, 490, 910, 1330, 1330, 770, 350, 1400, 3010, 3220, 3920, 3710, 3570, 3430, 3290, 3010, 2870, 2730, 2590, 2450, 2310, 2030, 1890, 1750, 1540, 2030, 2310, 3010, 3290, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 2940, 3010, 2170, 1960, 490, 280, 350, 560, 1820, 1750, 3640, 3430, 3360, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240];
                break;
            case 69:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 4, 4, 4, 4, 1, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 5, 5, 6, 6, 6, 5, 5, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 10, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 5, 5, 5, 5, 2, 7, 3, 18, 2, 7, 3, 17, 2, 8, 11, 3, 16], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 90, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 180, 0, 180, 0, 0, -90, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, -90, 180, 90, 90, 0, 180, 90, -90, 0, 180, -90, 180, 90, 0, 180, 180, -90, -90, 0, 180, 180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 180, 0, 180, 0, 180, 0, 180, 0, 0, -90, 90, 90, 90, 90, 90, 90, -90, 0, 0, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 980, 1120, 1400, 1470, 1470, 1470, 1400, 1190, 1050, 910, 700, 630, 630, 700, 980, 1120, 1400, 1470, 1400, 1190, 1050, 910, 630, 350, 420, 420, 700, 350, 770, 1470, 840, 1610, 1050, 1330, 1190, 1750, 1890, 3500, 3500, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1820, 1750, 1750, 1820, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3570, 3500, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1820, 1750, 1750, 1750, 1750, 1820, 2030, 2170, 2310, 2450, 2590, 2730, 2940, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 630, 1470, 1050, 630, 1470, 910, 350, 1330, 1610, 3010, 3010, 2310, 3150, 3010, 3010, 2310, 1750, 2310, 3010, 3010, 3570, 3150, 2310, 3010, 3010, 1750, 2520, 3010, 3010, 3010, 630, -70, 140, 280, 420, 490, 770, 910, 1050, 1190, 1400, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 630, 420, 1050, 1120, 3290, 3220, 3290, 3220, 2310, 2240, 3010, 3010, 2800], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2660, 2940, 2940, 2730, 2590, 2450, 2240, 2170, 2170, 2170, 2100, 1890, 1750, 1540, 1400, 1120, 980, 770, 420, 350, 350, 350, 350, 770, 420, 980, 980, 630, 350, 630, 700, 630, 630, 630, 630, 630, 630, 700, 980, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1120, 1330, 1470, 1680, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 2030, 1820, 2170, 2310, 2520, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2660, 2870, 3010, 3150, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2450, 2310, 2170, 2030, 1890, 1610, 1470, 1330, 1190, 910, 770, 490, 350, 210, 70, 3150, 2590, 2170, 1750, 770, 350, 700, 630, 630, 490, 770, 630, 1050, 910, 1190, 1050, 1400, 1750, 1610, 1890, 2170, 2590, 2590, 2450, 2730, 3010, 3570, 3010, 2170, 1400, 3500, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 0, 210, 350, 490, 770, 910, 1190, 1330, 1470, 1610, 1890, 2030, 2170, 2310, 2450, 2730, 2870, 3010, 3220, 2450, 2730, 1610, 1890, 910, 1190, 490, 770, 2940, 3010, 350, 140, 630, 420, 1750, 1540, 3570, 3780, 1260, 1960, 1890];
                break;
            case 70:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 5, 5, 5, 5, 5, 5, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 5, 5, 2, 8, 3, 17, 7, 2, 17, 3, 2, 7, 11, 3, 15], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 90, 0, -90, 0, 0, 0, -180, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 90, 90, -180, 180, 90, 0, 90, 180, -90, -90, 180, -90, 180, 90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 180, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 90, -90, 90, -90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 180, 0, 180, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 90, -90, 0, 0, 90, 90, 0, 180, -90, 90, 0, -180, -90, -90, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 1260, 1260, 1050, 560, 490, 560, 910, 1050, 910, 770, 770, 910, 1050, 1190, 1960, 1680, 1330, 1470, 1960, 1610, 1750, 1680, 1610, 1610, 1890, 2030, 2170, 2310, 2520, 2590, 2590, 2590, 2590, 2660, 2870, 3150, 3150, 3080, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3080, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1540, 1470, 1470, 1540, 1820, 1820, 1610, 1330, 1050, 1120, 1050, 1330, 1120, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3150, 3010, 3360, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 490, 350, 210, 70, 630, 630, 980, 980, 490, 1050, 1750, 1610, 1610, 2100, 2590, 2870, 3150, 2310, 1610, 1470, 1330, 1050, 2310, 3430, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2450, 2310, 2310, 2310, 2310, 2310, 2520, 2730, 2870, 3010, 3290, 3570, 3710, 3850, 3990, 4200, 3570, 3290, 3290, 3010, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2310, 2310, 140, 350, 490, 630, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1960, 1330, 1470, 1190, 630, 420, 2030, 1960, 2940, 3150, 1750, 1820, 3430, 3640, 770, 1050, 1120], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2800, 2660, 2450, 2310, 2030, 1960, 1890, 1680, 1470, 2380, 2380, 1960, 1960, 1400, 1400, 1400, 1400, 1330, 1050, 1400, 1400, 1050, 1400, 1400, 1750, 1260, 1540, 1820, 1820, 1820, 1820, 1750, 1540, 1400, 1260, 1120, 910, 840, 1260, 1120, 910, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2450, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2590, 2800, 2940, 3150, 3150, 2870, 2800, 2800, 3080, 2870, 3220, 3500, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 420, 420, 490, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 3430, 3290, 2380, 1960, 1680, 1400, 1400, 1260, 1540, 1820, 1400, 840, 2100, 2520, 2800, 2940, 2800, 3150, 3500, 2100, 1050, 1260, 1400, 1540, 1680, 1960, 2100, 2240, 2380, 2660, 2800, 2940, 3080, 3220, 3360, 3640, 3780, 3920, 3500, 4130, 2380, 3360, 2660, 3640, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 1610, 1400, 1260, 1120, 980, 700, 560, 280, 140, -70, 280, 560, 700, 980, 1680, 1960, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2660, 2730, 1820, 1610, 1890, 1960, 3710, 3500, 1610, 1680, 420, 420, 140];
                break;
            case 71:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 8, 3, 17, 2, 7, 3, 18, 2, 8, 11, 3, 13, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 90, 90, 180, -90, -90, 0, 0, 90, 0, 0, 0, 90, 180, 180, 0, 90, 180, -90, -90, -90, -90, -90, 180, 0, 90, 180, 180, 180, 90, 0, 0, 180, -180, 0, 0, 0, -180, 180, -180, -180, -180, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 2800, 2660, 3290, 3080, 2940, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1330, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1260, 1330, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3290, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3360, 3290, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1610, 1540, 1540, 1540, 1540, 1540, 1540, 1820, 1610, 1960, 2100, 2240, 2380, 2520, 2660, 2870, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2870, 2660, 2520, 2380, 2240, 2100, 1890, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1820, 1890, 2100, 2240, 2450, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 2520, 700, 700, 1120, 2100, 2100, 2170, 3360, 2520, 2100, 2100, 1260, 2170, 2100, 1820, 1820, 2100, 2100, 2100, 1260, 2170, 3360, 2520, 2100, 2100, 2100, 2240, 2520, 1540, 2170, 2940, 2100, 2100, 2100, 700, 490, 3360, 3570, 1260, 1050, 1540, 1750, 2940, 3150, 2520, 2520, 2310, 2520, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2730, 2590, 2380, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2380, 2590, 2730, 2870, 3010, 3150, 3290, 3570, 3570, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1960, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 1960, 1750, 1610, 1470, 1330, 1190, 1050, 770, 840, 770, 770, 770, 770, 770, 770, 840, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2170, 2450, 2590, 2730, 2870, 3010, 3220, 3290, 3290, 3290, 3290, 3290, 3220, 3010, 2870, 2730, 2590, 2450, 2170, 1890, 1750, 1610, 1470, 1260, 1190, 1190, 1260, 1470, 1610, 1750, 1890, 2170, 2450, 2590, 2730, 2870, 3010, 3150, 3430, 3710, 3850, 3990, 3500, 3220, 2310, 2450, 2520, 2310, 2940, 3570, 3570, 2520, 2800, 490, 2520, 2450, 1610, 2520, 2520, 2520, 980, 1190, 1260, 3290, 2520, 3290, 2520, 2030, 1750, 1400, 770, 1890, 2520, 2520, 2520, 2730, 2800, 2660, 2590, 1750, 1820, 980, 1050, 3010, 2940, 3080, 2940, 2800, 4130, 1820, 1610, 1470, 1330, 1050, 910, 630, 350, 210, 70, -140, 2520, 2730, 2870, 3010, 3150, 3430, 3710, 3850, 3990, 4200];
                break;
            case 72:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 4, 1, 1, 1, 4, 4, 4, 4, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 7, 2, 3, 17, 2, 8, 3, 18, 11, 3, 14, 2, 7, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 9, 1, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, -180, 90, 0, 0, 0, 0, 180, 0, 180, 0, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -90, 90, 0, 0, -90, -90, 90, 90, 180, -180, 90, 90, 0, 90, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 910, 1050, 1190, 1330, 1540, 1610, 1610, 1680, 1890, 2100, 2100, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 560, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3220, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3220, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1820, 1680, 1470, 1260, 1260, 1190, 1190, 1470, 1680, 1820, 2100, 2240, 2450, 2730, 2660, 2730, 2800, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3990, 4130, 630, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 980, 420, 630, 1680, 1750, 2030, 1960, 3290, 3500, 3570, 3360, 3360, 1540, 1470, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, -70, 140, 280, 420, 490, 770, 910, 1050, 1400, 1190, 630], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2730, 2520, 2450, 2450, 2450, 2450, 2380, 2170, 2030, 1820, 1750, 1680, 1400, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1260, 1050, 910, 700, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2520, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2590, 2660, 2940, 3010, 3080, 3640, 3290, 3430, 3710, 3640, 3360, 3220, 2940, 2870, 3150, 2940, 3290, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 0, 210, 350, 490, 770, 910, 1050, 1190, 1470, 1610, 1750, 1890, 2100, 1330, 630, 3080, 3010, 1330, 1540, 630, 420, 1890, 1820, 3570, 3570, 3290, 3710, 3500, 3780, 3570, 3430, 3290, 3150, 3010, 2730, 2450, 2310, 2170, 1960, 2590, 2870, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730];
                break;
            case 73:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 7, 2, 3, 18, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 8, 2, 3, 18, 2, 8, 11, 3, 15, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 6, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 0, 0, 0, -180, 90, -90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 180, 0, 180, 0, 0, -90, 90, 180, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 180], this.BlockStateX = [3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3150, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 2800, 3010, 2660, 2520, 2310, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2310, 2590, 2660, 2660, 2660, 2590, 2380, 2240, 2100, 1960, 1820, 1680, 1470, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1470, 1680, 1890, 1890, 1680, 1540, 1260, 1120, 910, 910, 1190, 1190, 630, 980, 840, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 3500, 3710, 3500, 2660, 2730, 1610, 1820, 1960, 2100, 2380, 2520, 2660, 2800, 2940, 3220, 3360, 3500, 3640, 3780, 3990, 3080, 2240, 1610, 1820, 1960, 2100, 2380, 2520, 2660, 2800, 2940, 3220, 3360, 3500, 3640, 3780, 3990, 3080, 2240, 2030, 2240, 1400, 1190, 1540, 1610, 560, 560, 350, 280, 490, 630, 770, 910, 1050, 1190, 1330, 1540, 1680, 1960, 1750, 1400, 1260], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2520, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 490, 560, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2520, 2660, 2870, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3360, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 420, 350, 420, 700, 770, 770, 770, 770, 840, 1120, 1260, 1540, 1680, 1610, 1610, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3990, 4130, 3570, 3010, 2940, 490, 280, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2310, 2380, 2100, 2170, 770, 560, 3010, 2730, 2660, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400];
                break;
            case 74:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 6, 6, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 9, 6, 11, 3, 12, 8, 2, 3, 17, 2, 7, 3, 18, 2, 8], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 180, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, -180, 0, 0, 0, 0, 0, 90, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 180, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, -90, 0, 0, 0, 0, -180, -90, -90, 90, 90, 90, -90], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1120, 1260, 1470, 1540, 1540, 1540, 1820, 1610, 1960, 2100, 2240, 2380, 2590, 2730, 3010, 3150, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2940, 2730, 2660, 2590, 2380, 2240, 2100, 1890, 1820, 1820, 1750, 1540, 1400, 1260, 1120, 980, 770, 700, 700, 770, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3430, 3500, 3500, 3220, 3430, 3080, 2940, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 700, -70, 140, 280, 420, 560, 840, 980, 1120, 1260, 1400, 1680, 1820, 1960, 2100, 2310, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 4200, 3990, 3850, 3710, 3640, 3360, 3220, 3080, 2940, 2800, 2520, 2380, 2100, 2310, 700, 1540, 3500, 2660, 1190, 1190, 2730, 2940, 3080, 3220, 3360, 3640, 3780, 3920, 4130, 3500, 630, 910, 910, 490, 700, 3500, 3710, 2030, 2100, 1050, 980, 3150, 3080], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2800, 2730, 2730, 2730, 2800, 3010, 3150, 3290, 3570, 3500, 3570, 3570, 3570, 3570, 3500, 3220, 3220, 3500, 3500, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2100, 2030, 2030, 2030, 2100, 2310, 2520, 2590, 2590, 2590, 2520, 2310, 2170, 1960, 1890, 1890, 1890, 1890, 1890, 1820, 1610, 1470, 1260, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1120, 910, 770, 490, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 3570, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 3010, 2520, 2310, 2170, 2030, 1750, 1610, 1470, 1330, 1050, 700, 910, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 2310, 3010, 3010, 2310, 2310, 1890, 1190, 840, 840, 840, 840, 840, 840, 840, 840, 840, 840, 490, 490, 210, 3220, 3150, 3220, 3290, 2590, 2800, 1190, 980, 1190, 1400];
                break;
            case 75:
                this.BlockState = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 2, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 6, 6, 6, 3, 17, 2, 7, 3, 18, 2, 8, 11, 3, 16], this.BlockRotate = [0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, 180, 0, 0, 0, -90, 0, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 0, 0, 90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 90, -90, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, 90, 90, 90, -90, 90, 0, -180, -90, -90, -90, 90, 90, 90, 90, 90, 0], this.BlockStateX = [630, 630, 630, 630, 630, 700, 910, 1050, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3360, 3150, 3430, 3430, 3430, 3430, 3430, 3360, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 420, 420, 700, 840, 1120, 770, 770, 1120, 910, 770, 490, 560, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1680, 1750, 1750, 1750, 1750, 1750, 1820, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3360, 3080, 2940, 2730, 2590, 2380, 2310, 2310, 2380, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3990, 4130, 630, 1190, 1120, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2730, 2030, 2730, 2730, 2030, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 2030, 2730, 2730, 2730, 3430, 3640, 1610, 1680, 770, 840, 2520, 2450, 3640, 3500, 3430], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3360, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3220, 3290, 3010, 2870, 2730, 2590, 2450, 2240, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2240, 2520, 2520, 1820, 1680, 2310, 2030, 1400, 1330, 1330, 1050, 1260, 910, 700, 630, 630, 630, 630, 630, 630, 700, 910, 1050, 1190, 1330, 1470, 1680, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1750, 1680, 1470, 1330, 1190, 1050, 840, 840, 1120, 1190, 1190, 1120, 910, 770, 560, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 3570, 3290, 3500, 1120, 1330, 1470, 1610, 1890, 2030, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3430, 3570, 3710, 3850, 4060, -70, 140, 280, 350, 630, 770, 910, 1050, 1330, 1470, 1610, 1890, 2030, 2310, 2450, 2590, 2730, 2870, 3010, 3150, 3430, 3570, 3710, 3850, 4060, 3290, 3290, 2170, 2170, -70, 140, 280, 420, 490, 770, 910, 1050, 1190, 1330, 630, 1750, 1750, 1190, 490, 2870, 2940, 2170, 2380, 1330, 1120, 1750, 1540, 490, 490, 210];
                break;
            case 76:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 4, 1, 1, 4, 4, 1, 4, 4, 1, 1, 4, 4, 1, 4, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 4, 1, 1, 4, 4, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 10, 9, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 9, 6, 2, 8, 3, 7, 2, 7, 3, 18, 2, 8, 3, 18, 2, 7, 11, 3, 12, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 9, 6], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, -90, 0, 0, 0, -180, 90, 0, 0, -90, 0, 0, -180, 90, 0, 0, -90, 0, 0, -180, 0, 0, -180, 90, 0, 0, 0, 0, 0, -90, 90, 180, 0, 0, 0, 0, -90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 90, 0, -90, 90, 0, 0, 180, -90, 90, 0, 0, -90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, 90, 0, 0, 0, 0, -90, 90, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 90, -90, 90, -90, 90, -90, 0, -180, 0, -180, -90, -90, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 90, 90], this.BlockStateX = [490, 490, 490, 490, 490, 490, 490, 490, 490, 560, 770, 980, 1050, 980, 770, 490, 490, 560, 490, 490, 490, 490, 490, 490, 490, 770, 910, 560, 1050, 1260, 1330, 1260, 1050, 840, 840, 1050, 1190, 1540, 1540, 1330, 1260, 1260, 1470, 1610, 1820, 1820, 1610, 1400, 1330, 1260, 980, 980, 1190, 1330, 1470, 1610, 1820, 1820, 1540, 1540, 1750, 1890, 2030, 2170, 2380, 2450, 2450, 2450, 2520, 2730, 2870, 3010, 3150, 3430, 3360, 3430, 3430, 3430, 3430, 3430, 3360, 3150, 3010, 2870, 2730, 2520, 2450, 2380, 2100, 2030, 2030, 2100, 2380, 2520, 2730, 2870, 3080, 3220, 3500, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3570, 3500, 3220, 3080, 2800, 2450, 2030, 2310, 2170, 2660, 1820, 1750, 1750, 490, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, -140, 1470, 1190, 1050, 910, 770, 630, 350, 210, 70, 1610, 1750, 1960, 2940, 3150, 3290, 3430, 3710, 3850, 3990, 4200, 3570, 490, 280, 490, 280, 1330, 1260, 1260, 1190, 3150, 3080, 2030, 2240, 3570, 3780, 1960, 2240, 2310, 490, 1330, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 2170], this.BlockStateY = [4060, 3920, 3780, 3640, 3500, 3360, 3220, 3080, 2940, 2730, 2660, 2590, 2380, 2170, 2100, 1680, 1820, 2030, 1540, 1400, 1260, 1120, 980, 840, 700, 420, 420, 490, 420, 490, 700, 910, 980, 1050, 1330, 1400, 1400, 1470, 1750, 1400, 1890, 2170, 2240, 2240, 2310, 2590, 2660, 2730, 2940, 3150, 3290, 3570, 3640, 3640, 3640, 3640, 3570, 3290, 3150, 2870, 2800, 2800, 2800, 2800, 2870, 3080, 3220, 3360, 3570, 3640, 3640, 3640, 3640, 3080, 3570, 3360, 3220, 2940, 2800, 2660, 2450, 2380, 2380, 2380, 2380, 2310, 2100, 1890, 1750, 1540, 1400, 1190, 1190, 1470, 1540, 1540, 1610, 1890, 1890, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 490, 490, 770, 770, 420, 420, 420, 420, 490, 350, 140, 70, 3500, 1750, 1960, 2100, 2240, 2520, 2660, 2800, 2940, 4270, 3080, 3220, 3360, 3500, 3780, 3920, 4060, 3640, 2380, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 3150, 3220, 910, 980, 1400, 1610, 3640, 3850, 3640, 3850, 1400, 1470, 840, 910, 420, 420, 140, 700, 700, 3570, 3360, 3220, 3080, 2940, 2660, 2520, 2380, 2170, 2800];
                break;
            case 77:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 9, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 6, 6, 6, 6, 6, 6, 2, 8, 3, 17, 2, 7, 3, 18, 2, 8, 3, 17, 2, 7, 11, 3, 16], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 180, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, -90, 0, 90, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, -180, 90, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 90, -90, 90, 180, 0, 0, -90, 90, 90, 90, -180, -180, 180, 0, 0, -180, 90, -90, 180, 180, 0], this.BlockStateX = [560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1400, 1610, 1610, 1400, 1190, 1120, 1120, 1120, 1120, 1120, 1050, 840, 700, 490, 420, 490, 700, 840, 980, 1120, 1260, 1400, 1540, 1750, 1750, 1540, 1330, 1260, 1260, 1260, 1260, 840, 1190, 980, 630, 840, 630, 980, 1120, 1260, 1400, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3430, 3220, 3500, 3500, 3430, 3220, 3080, 2940, 2800, 2660, 2520, 2380, 2170, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2030, 1750, 1750, 1960, 2100, 2310, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2380, 2450, 2660, 2800, 2940, 3080, 3220, 3430, 3500, 3430, 3220, 3010, 3010, 3220, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 560, 2730, 2940, 3080, 3220, 3360, 3640, 3780, 3920, 4130, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 2660, 70, 280, 420, 560, 700, 840, 980, 1260, 1400, 1540, 1680, 1890, -70, 140, 280, 420, 560, 700, 840, 980, 1120, 1260, 1470, 1400, 1540, 1120, 560, 2660, 2660, 2660, 3500, 560, 350, 770, 840, 910, 840, 3500, 3710, 2100, 1890, 2380, 2590, 3150, 3080, 3500, 3500, 3290], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2590, 2590, 2590, 2590, 2590, 2660, 2940, 3010, 2940, 2730, 2590, 2450, 2310, 2170, 1960, 1890, 1890, 1820, 1610, 1400, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1400, 1680, 1750, 1680, 1470, 1330, 1190, 1050, 770, 840, 770, 700, 350, 420, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 420, 350, 630, 770, 980, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1120, 1330, 1470, 1610, 1750, 1890, 2030, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3220, 3360, 3640, 3710, 3710, 3640, 3430, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1890, 1750, 1610, 1400, 1330, 1330, 1330, 1330, 1330, 1400, 1610, 1820, 1890, 1960, 2240, 2310, 2380, 2590, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3990, 4130, 3500, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2870, 2100, 1890, 1750, 1610, 1470, 1190, 910, 770, 630, 490, 210, 70, -140, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 2240, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 350, 350, 2240, 560, 350, 1050, 1330, 2870, 3080, 3150, 1890, 1680, 350, 140, 700, 630, 1960, 1890, 2450, 2520, 1330, 1540, 3640, 3500, 3360];
                break;
            case 78:
                this.BlockState = [1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 4, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 4, 1, 4, 4, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 6, 6, 6, 6, 6, 6, 2, 7, 3, 18, 2, 7, 3, 18, 2, 8, 3, 18, 2, 8, 11, 3, 15, 1, 4, 4, 4], this.BlockRotate = [0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 0, 0, -180, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, -180, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -180, 0, -180, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, -90, 0, -180, 0, 0, 90, 0, -90, -180, 90, -90, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, -180, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 90, -90, -90, 90, 180, 0, -90, 0, 0, 180, -180, 0, -180, 90, -90, 0, -180, 0, 0, 180, -180, 0, 0, 0, 0, -90, 180, -90], this.BlockStateX = [560, 560, 560, 560, 560, 560, 630, 560, 560, 560, 840, 980, 1190, 1330, 1540, 1750, 1820, 1820, 1750, 1540, 1330, 1260, 1260, 1330, 1540, 1680, 1820, 1960, 2100, 2240, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3500, 3500, 3430, 3500, 3500, 3430, 3220, 3080, 2870, 2800, 2730, 2520, 2380, 2170, 2100, 2100, 2100, 2100, 2100, 2100, 2170, 2380, 2520, 2660, 2800, 2940, 3080, 3220, 3360, 3570, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3640, 3570, 3290, 3150, 2870, 2800, 2800, 2800, 2730, 2450, 2380, 2380, 2380, 2380, 2380, 2310, -350, 1890, 2100, 1750, 1470, -350, 1330, 1050, 1050, -350, 980, 1400, 1400, 1470, 1750, 1750, 1540, 1400, 1260, 1120, 980, 840, 700, 420, 490, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 560, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 2450, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 3150, 1960, 2100, 2240, 2520, 2660, 2940, 3080, 3220, 3430, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 910, 2450, 3150, 2450, 3150, 2800, 2380, 910, 560, 350, 1260, 1470, 3500, 3710, 2520, 2450, 3640, 3850, 2380, 2170, 1400, 1610, 420, 420, 630, -350, -350, -280, 1330], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 2800, 3150, 3010, 3290, 2730, 2730, 2660, 2380, 2310, 2380, 2590, 2730, 2940, 3010, 3080, 3290, 3430, 3640, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3710, 3290, 3430, 3640, 3150, 3010, 2800, 2730, 2730, 2800, 3010, 3220, 3290, 3290, 3220, 3010, 2870, 2730, 2590, 2450, 2310, 2100, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 2030, 1960, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 420, 420, 700, 840, 1050, 1190, 1330, 1540, 1540, 1330, 1190, 1050, 910, 770, 560, 630, 560, 490, 840, 840, 420, 560, 560, 980, 490, 770, 1330, 1470, 1680, 1820, 2100, 2170, 2170, 2170, 2170, 2170, 2170, 2170, 1890, 2100, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 490, 350, 210, 70, 3500, 2520, 2730, 2870, 3010, 3150, 3430, 3570, 3850, 3990, 4200, 3360, 3150, 3010, 2870, 2590, 2450, 2310, 2170, 1890, 1750, 1610, 1400, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 3500, 3290, 3150, 3010, 2870, 2590, 2450, 2310, 2030, 1890, 1750, 1610, 1400, 2730, 3710, 2730, 3290, 2030, 1190, 1190, 2170, 3080, 3150, 3360, 3290, 3220, 3290, 2030, 2240, 1190, 1260, 840, 910, 1470, 1400, 420, 560, 560, 700, 630, 840, 1120];
                break;
            case 79:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 4, 4, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 9, 6, 9, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 2, 8, 3, 17, 2, 7, 3, 18, 2, 8, 3, 18, 2, 8, 11, 3, 14], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, -90, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, -180, 0, 90, 0, -90, 0, 0, 0, -180, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, -90, 90, 0, 0, 180, 0, -90, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, -90, -90, 0, 0, 0, 0, 0, 0, 0, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 180, 180, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, -90, -90, 90, 0, 0, -180, -180, 90, -90, 0, -180, 0, 0, -90, 90, 90, -90, -90, -90, 0], this.BlockStateX = [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 770, 980, 1120, 1330, 1400, 1400, 1400, 1400, 1400, 1470, 1680, 1820, 1960, 2100, 2310, 2380, 2380, 2380, 2380, 2380, 2450, 2660, 2800, 3010, 3080, 3080, 3080, 3080, 3080, 3080, 3150, 3430, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3430, 3220, 3080, 2870, 2730, 2450, 2380, 2310, 2100, 1960, 1820, 1610, 1470, 1260, 1120, 980, 840, 630, 560, 560, 560, 560, 560, 560, 630, 840, 980, 1120, 1260, 1470, 1610, 1890, 1960, 2030, 2240, 2450, 2520, 2590, 2800, 3290, 3080, 2940, 3360, 3360, 3360, 2940, 3290, 3080, 2800, 2660, 2520, 2380, 2240, 2100, 1960, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 560, 420, 280, 140, 0, 700, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 1890, 2590, 2800, 2940, 3220, 3360, 3640, 3780, 3920, 4130, 3080, 3500, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 3080, 700, 490, 1400, 1610, 2730, 2660, 3500, 3710, 2380, 2170, 770, 840, 2310, 2240, 700, 910, 980], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2730, 2520, 2450, 2450, 2520, 2730, 2870, 3010, 3150, 3290, 3500, 3570, 3570, 3570, 3570, 3500, 3290, 3150, 3010, 2870, 2730, 2520, 2450, 2450, 2520, 2730, 2870, 3010, 3150, 3290, 3430, 3640, 3640, 3430, 3290, 3150, 3010, 2870, 2730, 2590, 2450, 2310, 2170, 2030, 1820, 1750, 1750, 1820, 2100, 2100, 1890, 1680, 1610, 1610, 1610, 1680, 1960, 2030, 2030, 2030, 2030, 1960, 1750, 1610, 1470, 1330, 1190, 1050, 840, 770, 770, 770, 770, 840, 1120, 1120, 910, 700, 630, 700, 910, 1120, 1190, 1120, 1190, 1190, 910, 770, 630, 350, 420, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 3570, 3080, 2870, 2730, 2590, 2310, 2170, 1890, 1750, 1610, 1400, 2450, 2030, 4130, 3920, 3780, 3710, 3430, 3290, 3150, 3010, 2800, 3570, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 2940, 560, 770, 910, 1050, 1330, 1470, 1610, 1890, 2030, 2240, 1750, 1190, 3080, 3150, 3290, 3220, 2450, 2660, 2520, 2590, 1820, 1890, 2030, 1820, 630, 840, 350, 350, 490];
                break;
            case 80:
                this.BlockState = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 9, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 1, 1, 1, 1, 1, 1, 1, 9, 6, 6, 6, 6, 6, 6, 6, 6, 2, 8, 3, 18, 2, 7, 3, 18, 2, 8, 3, 17, 2, 8, 11, 3, 16], this.BlockRotate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, -90, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, -180, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, -90, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, -180, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 180, 90, -90, 90, -90, 90, 90, -90, 0, 0, 0, 0, 180, 0, 0, -180, 0, -180, 180, -180, 90, 90, 180, 180, 0], this.BlockStateX = [630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 700, 1120, 1120, 910, 910, 700, 630, 630, 630, 630, 630, 630, 630, 630, 630, 630, 910, 700, 1050, 1190, 1330, 1470, 1610, 1820, 1890, 1820, 1610, 1470, 1330, 1190, 980, 910, 980, 1190, 1330, 1470, 1610, 1750, 1890, 2030, 2240, 2310, 2310, 2310, 2310, 2380, 2590, 2730, 2870, 3010, 3150, 3360, 3430, 3430, 3430, 3430, 3430, 3430, 3430, 3360, 3080, 3010, 2940, 3010, 3010, 2660, 2590, 2590, 2590, 2520, 2310, 2170, 2030, 1890, 1680, 1610, 1610, 1610, 1610, 1610, 1610, 1610, 1680, 1890, 2100, 2170, 2170, 2170, 2240, 2450, 2590, 2730, 2870, 3010, 3220, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 3290, 630, 910, 910, 910, 910, 910, 910, 910, 910, 910, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 3290, 2520, 2730, 2870, 3010, 3150, 3430, 3570, 3710, 3920, 3290, 910, 910, 1330, 1330, 1330, 2800, 2800, 630, 420, 630, 420, 1890, 1680, 2310, 2520, 3010, 3220, 1610, 1820, 2940, 2870, 3290, 3290, 3080], this.BlockStateY = [4130, 3990, 3850, 3710, 3570, 3430, 3290, 3150, 3010, 2870, 2660, 2520, 2240, 2590, 2170, 2100, 1890, 1750, 1610, 1470, 1330, 1190, 1050, 910, 770, 630, 350, 420, 350, 350, 350, 350, 350, 420, 630, 840, 910, 910, 910, 910, 980, 1190, 1400, 1470, 1470, 1470, 1470, 1470, 1470, 1470, 1400, 1190, 1050, 910, 770, 560, 490, 490, 490, 490, 490, 560, 770, 910, 1050, 1190, 1330, 1470, 1610, 1820, 1820, 1610, 1120, 1470, 1330, 1120, 1330, 1470, 1610, 1820, 1890, 1890, 1890, 1890, 1960, 2170, 2310, 2450, 2590, 2730, 2870, 3010, 3220, 3290, 3220, 3010, 2870, 2730, 2520, 2450, 2450, 2450, 2450, 2450, 2520, 2730, 2870, 3010, 3150, 3290, 3430, 3570, 3710, 3850, 3990, 3500, 3220, 3010, 2870, 2730, 2450, 2310, 2030, 1890, 1680, 2030, 1820, 1680, 1610, 1330, 1190, 1050, 770, 630, 490, 210, 70, -140, 2030, 1820, 1680, 1540, 1400, 1260, 1120, 980, 840, 700, 630, 350, 210, 140, -70, 4130, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2590, 2170, 350, 910, 1470, 490, 1050, 3010, 3080, 1470, 1540, 700, 630, 770, 840, 1470, 1540, 2310, 2240, 2450, 2240, 3640, 3430, 3290]
        }
    }, t.prototype.GetLengthMessage = function() {
        return this.BlockState.length
    }, t.prototype.GetBlockNum = function() {
        for (var t = 0, e = 0; e < this.BlockState.length; e++) 2 == this.BlockState[e] && t++;
        return t
    }, t.prototype.GetHeroPointX = function() {
        for (var t = 0; t < this.BlockState.length; t++)
            if (10 == this.BlockState[t]) return this.BlockStateX[t]
    }, t.prototype.GetHeroPointY = function() {
        for (var t = 0; t < this.BlockState.length; t++)
            if (10 == this.BlockState[t]) return this.BlockStateY[t]
    }, t.prototype.GetBlockMessage = function(t) {
        return this.BlockState[t]
    }, t.prototype.GetBlockMessageR = function(t) {
        return this.BlockRotate[t]
    }, t.prototype.GetBlockMessageX = function(t) {
        return this.BlockStateX[t]
    }, t.prototype.GetBlockMessageY = function(t) {
        return this.BlockStateY[t]
    }, t
}();
__reflect(GameMessage.prototype, "GameMessage");
var Http = function() {
    function t() {}
    return t.prototype.encodeValue = function(t, e) {
        return e instanceof Array ? this.encodeArray(t, e) : encodeURIComponent(t) + "=" + encodeURIComponent(e)
    }, t.prototype.encodeArray = function(t, e) {
        return t ? 0 == e.length ? encodeURIComponent(t) + "=" : e.map(function(e) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e)
        }).join("&") : ""
    }, t.prototype.toString = function(t) {
        if (!t) return "";
        var e = [];
        for (var a in t) e.push(this.encodeValue(a, t[a]));
        return e.join("&")
    }, t.prototype.request = function(t) {
        var e = new XMLHttpRequest;
        e.responseType = "arraybuffer" !== t.responseType ? "text" : "arraybuffer", e.timeout = t.timeout || 0, e.onerror = function(a) {
            console.log("[http][" + t.method + "][error] [" + e.status + ":" + e.statusText + "] " + t.url), t.onerror && t.onerror(a)
        }, e.onabort = function(e) {
            console.log("[http][" + t.method + "][abort] " + t.url), t.onabort && t.onabort()
        }, e.onprogress = function(e) {
            e && e.lengthComputable && t.onprogress && t.onprogress(e.loaded / e.total)
        }, e.onload = function(a) {
            var s = void 0 !== e.status ? e.status : 200;
            if (200 === s || 204 === s || 0 === s) {
                var i = e.response || e.responseText;
                console.log("[http][" + t.method + "][loaded] " + t.url + ":" + i), t.onload(i)
            } else console.log("[http][" + t.method + "][error] [" + e.status + ":" + e.statusText + "] " + t.url), t.onerror && t.onerror(a)
        };
        var a = this.toString(t.data),
            s = t.url;
        if ("GET" == t.method && a && (s = t.url + "?" + a, a = null), e.open(t.method, s, !0), "POST" == t.method && (t.rawData ? (e.setRequestHeader("Content-Type", "application/json"), a = JSON.stringify(t.rawData)) : e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), t.headers)
            for (var i = 0; i < t.headers.length; i++) e.setRequestHeader(t.headers[i++], t.headers[i]);
        return e.send(a), console.log("[http][" + t.method + "] " + t.url + ":" + JSON.stringify(t.data)), e
    }, t.prototype.post = function(t, e) {
        var a = this;
        return new Promise(function(s, i) {
            a.request({
                url: t,
                data: e,
                method: "POST",
                onload: s,
                onerror: i,
                ontimeout: i
            })
        })
    }, t.prototype.get = function(t, e) {
        var a = this;
        return new Promise(function(s, i) {
            a.request({
                url: t,
                data: e,
                method: "GET",
                onload: s,
                onerror: i,
                ontimeout: i
            })
        })
    }, t
}();
__reflect(Http.prototype, "Http");
var Storager = function() {
    function t(t) {
        void 0 === t && (t = "global"), this.id = t
    }
    return t.prototype.set = function(t, e) {
        "object" == typeof e && (e = JSON.stringify(e)), egret.localStorage.setItem(this.id + "_" + t, e)
    }, t.prototype.get = function(t, e) {
        return egret.localStorage.getItem(this.id + "_" + t) || e || null
    }, t.prototype.rm = function(t) {
        egret.localStorage.removeItem(this.id + "_" + t)
    }, t.prototype.json = function(t, e) {
        void 0 === e && (e = null);
        var a, s = egret.localStorage.getItem(this.id + "_" + t);
        try {
            a = JSON.parse(s)
        } catch (i) {
            $dev && console.log("json failed")
        }
        return a || e || null
    }, t.clear = function() {
        egret.localStorage.clear()
    }, t
}();
__reflect(Storager.prototype, "Storager");
var ad;
! function(t) {
    var e = function(t) {
        function e(e, a) {
            void 0 === a && (a = !0);
            var s = t.call(this) || this;
            return s.ids = e, s._adInstance = null, s._isStart = !1, s._watch_count = 0, s.suportAD() && a && s.preloadAD(), s
        }
        return __extends(e, t), e.prototype.suportAD = function() {
            throw "should be implemented in subclass!"
        }, e.prototype.getName = function() {
            throw "should be implemented in subclass!"
        }, e.prototype.getADInstanceAsync = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    return [2, null]
                })
            })
        }, e.prototype.hasAD = function() {
            return !!this._adInstance
        }, e.prototype.preloadAD = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t, e, a, s, i, o, r, n, h, l = this;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            if (this._isStart) return [2];
                            this._isStart = !0, t = "", e = this.ids.concat(), a = 0, s = null, c.label = 1;
                        case 1:
                            if (s) return [3, 24];
                            i = a++ % e.length, c.label = 2;
                        case 2:
                            return c.trys.push([2, 22, , 23]), [4, this.getADInstanceAsync(e[i])];
                        case 3:
                            s = c.sent(), t = "", console.log(this.getName() + " create suc:" + i), o = 0, c.label = 4;
                        case 4:
                            if (this._adInstance || !s) return [3, 21];
                            c.label = 5;
                        case 5:
                            return c.trys.push([5, 14, , 20]), [4, s.loadAsync()];
                        case 6:
                            c.sent(), t = "", this._adInstance = s, this.emit("ad_ready"), console.log(this.getName() + " load suc"), c.label = 7;
                        case 7:
                            return [4, new Promise(function(t, e) {
                                return l.once("show_ad", t)
                            })];
                        case 8:
                            c.sent(), c.label = 9;
                        case 9:
                            return c.trys.push([9, 11, , 12]), [4, this._adInstance.showAsync()];
                        case 10:
                            return c.sent(), t = "", console.log(this.getName() + " show suc"), this.emit("show_result", {
                                result: !0,
                                level: i
                            }), a = 0, this._adInstance = null, s = null, [3, 13];
                        case 11:
                            return r = c.sent(), console.log(this.getName() + " show failed," + r.code + "," + r.message), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 2,
                                code: r.code,
                                msg: r.message,
                                lastError: t
                            }), t = r.code + ":2", this.emit("show_result", {
                                result: !1,
                                err: r,
                                level: i
                            }), "ADS_NOT_LOADED" == r.code ? (this._adInstance = null, o = 0, [3, 13]) : "PENDING_REQUEST" != r.code && "UNKNOWN" != r.code && "RATE_LIMITED" != r.code ? (this._adInstance = null, s = null, [3, 13]) : [3, 12];
                        case 12:
                            return [3, 7];
                        case 13:
                            return [3, 20];
                        case 14:
                            return n = c.sent(), console.log(this.getName() + " load failed," + n.code + "," + n.message), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 1,
                                code: n.code,
                                msg: n.message,
                                lastError: t
                            }), t = n.code + ":1", "ADS_FREQUENT_LOAD" != n.code ? [3, 16] : [4, new Promise(function(t) {
                                return setTimeout(t, 18e5)
                            })];
                        case 15:
                            return c.sent(), [3, 21];
                        case 16:
                            return "INVALID_PARAM" != n.code ? [3, 17] : (s = null, [3, 21]);
                        case 17:
                            return [4, new Promise(function(t) {
                                return setTimeout(t, 31e3)
                            })];
                        case 18:
                            c.sent(), c.label = 19;
                        case 19:
                            return [3, 20];
                        case 20:
                            return [3, 4];
                        case 21:
                            return [3, 23];
                        case 22:
                            return h = c.sent(), console.log(this.getName() + " create failed," + h.code + "," + i), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 0,
                                code: h.code,
                                msg: h.message,
                                lastError: t
                            }), t = h.code + ":0", "CLIENT_UNSUPPORTED_OPERATION" == h.code || "ADS_TOO_MANY_INSTANCES" == h.code ? [2] : [3, 23];
                        case 23:
                            return [3, 1];
                        case 24:
                            return [2]
                    }
                })
            })
        }, e.prototype.showAD = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t, e = this;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (!this.hasAD()) throw "no ad ready";
                            return t = this.emit("show_ad"), t ? [4, new Promise(function(t, a) {
                                e.once("show_result", function(s) {
                                    e.emit("ad_show", {
                                        type: e.getName(),
                                        result: ++e._watch_count,
                                        level: s.level
                                    }), s.result ? t() : a(s.err)
                                })
                            })] : [2];
                        case 1:
                            return a.sent(), [2]
                    }
                })
            })
        }, e
    }(Emiter);
    __reflect(e.prototype, "Advertise");
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t), e.prototype.getName = function() {
            return "iad"
        }, e.prototype.suportAD = function() {
            var t = FBInstant.getSupportedAPIs();
            return t.indexOf("getInterstitialAdAsync") > -1
        }, e.prototype.getADInstanceAsync = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, FBInstant.getInterstitialAdAsync(t)];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }, e
    }(e);
    t.InterstitialAD = a, __reflect(a.prototype, "ad.InterstitialAD");
    var s = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t), e.prototype.getName = function() {
            return "rad"
        }, e.prototype.suportAD = function() {
            var t = FBInstant.getSupportedAPIs();
            return t.indexOf("getRewardedVideoAsync") > -1
        }, e.prototype.getADInstanceAsync = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, FBInstant.getRewardedVideoAsync(t)];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }, e
    }(e);
    t.RewardedVideoAD = s, __reflect(s.prototype, "ad.RewardedVideoAD")
}(ad || (ad = {}));
var LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.createView(), e
    }
    return __extends(e, t), e.prototype.createView = function() {
        this.LoadImage = new egret.Bitmap(RES.getRes("loading_png")), this.addChild(this.LoadImage), this.StageWidth = egret.MainContext.instance.stage.stageWidth, this.LoadImage.x = (this.StageWidth - 920) / 2, this.LoadImage.width = 920, this.LoadImage.height = 1136;
        var t = new egret.Bitmap(RES.getRes("loading2_png"));
        this.addChild(t), t.x = this.StageWidth / 2, t.y = 568, t.width = 96, t.height = 96, t.anchorOffsetX = 48, t.anchorOffsetY = 48, t.rotation = 0, egret.Tween.get(t, {
            loop: !0
        }).to({
            rotation: 360
        }, 2e3)
    }, e.prototype.onProgress = function(t, e) {}, e
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var HttpService = function() {
    function t() {
        this.game_id = 70, this.host = "https://fb-api.capjoy.com", this._server = new Http
    }
    return Object.defineProperty(t.prototype, "server", {
        get: function() {
            return this._server
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.reportFriends = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return platform instanceof PlatformFB && platform.getFriends().length > 0 ? (t = {
                            action: "friends",
                            playerId: platform.getPlayerId(),
                            payload: platform.getFriends().map(function(t) {
                                return t.getID()
                            })
                        }, [4, this._server.post("https://fb-bot.capjoy.com/api/v0/upload_" + this.game_id, {
                            data: JSON.stringify(t)
                        })]) : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.reportSwitchGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return platform.switchGameInfo && platform.isNewPlayer ? [4, this._server.post(this.host + "/fbapi/v0/ads/report/" + platform.switchGameInfo.appId + "/" + platform.appId + "/" + platform.getPlayerId(), {
                            v: $T_GAME_VERSION
                        })["catch"](function(t) {
                            return console.log(t)
                        })] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.checkSuper = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a, s, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        t = this.host + "/fbapi/v0/testCase_" + this.game_id, o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), s = (a = JSON).parse, [4, this._server.post(t, {
                            nickname: platform.userInfo.name,
                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                            timezoneOffset: (new Date).getTimezoneOffset(),
                            playerId: platform.getPlayerId(),
                            appId: platform.appId
                        })];
                    case 2:
                        return e = s.apply(a, [o.sent()]), 0 == e.error && (app.model.isSuper = 1 == +e.data), [3, 4];
                    case 3:
                        return i = o.sent(), console.log("check super failed"), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    }, t.prototype.getRecommendGames = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a, s, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = this.host + "/fbapi/v0/getRecommendGames", e = {
                            playerId: platform.userInfo.id,
                            nickname: platform.userInfo.name,
                            appId: platform.appId,
                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                            deviceOS: platform instanceof PlatformFB ? FBInstant.getPlatform() : "IOS",
                            timezoneOffset: (new Date).getTimezoneOffset()
                        }, i = (s = JSON).parse, [4, this._server.post(t, e)];
                    case 1:
                        return a = i.apply(s, [o.sent()]), 0 == a.error ? (app.model.recommendGames = a.data && a.data.ads || null, app.event.emit("game_recommend_ready")) : console.log("getRecommendGames  error:", a.msg), [2]
                }
            })
        })
    }, t.prototype.reportIfFromSkinShare = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return platform.invite_skin_data && platform.isNewPlayer ? (t = this.host + "/api/game/v0/shareUpdate_" + this.game_id, [4, this._server.post(t, {
                            v: $T_GAME_VERSION,
                            playerId: platform.getPlayerId(),
                            sharePlayerId: platform.invite_skin_data.playerId,
                            type: "share"
                        })["catch"](function(t) {
                            return console.log(t)
                        })]) : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.getSkinShareCount = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a, s, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        t = 0, o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), e = this.host + "/api/game/v0/shareGet_" + this.game_id, [4, this._server.post(e, {
                            v: $T_GAME_VERSION,
                            playerId: platform.getPlayerId(),
                            type: "share"
                        })];
                    case 2:
                        return a = o.sent(), s = JSON.parse(a), t = +s.data.count || 0, [3, 4];
                    case 3:
                        return i = o.sent(), console.log(i), [3, 4];
                    case 4:
                        return app.model.invite_skin_share_count = t, [2]
                }
            })
        })
    }, t
}();
__reflect(HttpService.prototype, "HttpService");
var LeaderBoard = function(t) {
    function e(e, a, s) {
        void 0 === a && (a = "HIGHER_IS_BETTER"), void 0 === s && (s = 0);
        var i = t.call(this) || this;
        return i.name = e, i.sortType = a, i.defaultScore = s, i._selfEntry = null, i._entries = null, i._friendEntries = null, i._preInitialized = !1, i._preInitializing = !1, i._initialized = !1, i._initializing = !1, i._friends = null, i
    }
    return __extends(e, t), e.prototype.preInitializeAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a = this;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return this._preInitialized ? [2] : this._preInitializing ? [4, new Promise(function(t) {
                            a.once("preInitialized", t)
                        })] : [3, 2];
                    case 1:
                        return s.sent(), [2];
                    case 2:
                        return this._preInitializing = !0, t = this, [4, FBInstant.getLeaderboardAsync(this.name)];
                    case 3:
                        return t._leaderboard = s.sent(), [4, this._leaderboard.getPlayerEntryAsync()];
                    case 4:
                        return e = s.sent(), e ? this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(e) : this._selfEntry = RankPlayerVO.createFromContextPlayer(FBInstant.player), this._preInitialized = !0, this._preInitializing = !1, this.emit("preInitialized"), console.log("leaderboard preInitialized", this.name), [2]
                }
            })
        })
    }, Object.defineProperty(e.prototype, "initialized", {
        get: function() {
            return this.initialized
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.initializeAsync = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            var a, s, i, o = this;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return this._initialized ? [2] : this._initializing ? [4, new Promise(function(t) {
                            o.once("initialized", t)
                        })] : [3, 2];
                    case 1:
                        return r.sent(), [2];
                    case 2:
                        return this._initializing = !0, [4, this.preInitializeAsync()];
                    case 3:
                        r.sent(), r.label = 4;
                    case 4:
                        return r.trys.push([4, 9, , 10]), a = t, a ? [4, this.getEntriesAsync()] : [3, 6];
                    case 5:
                        a = r.sent(), r.label = 6;
                    case 6:
                        return s = e, s ? [4, this.getConnectedPlayerEntriesAsync()] : [3, 8];
                    case 7:
                        s = r.sent(), r.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        return i = r.sent(), console.log("排行榜数据错误"), [3, 10];
                    case 10:
                        return this._initialized = !0, this._initializing = !1, this.emit("initialized"), console.log("leaderboard initialized", this.name), [2]
                }
            })
        })
    }, e.prototype.getEntriesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, this.preInitializeAsync()];
                    case 1:
                        return a.sent(), this._entries ? [3, 3] : (t = this._leaderboard, [4, t.getEntriesAsync(100, 0)]);
                    case 2:
                        e = a.sent(), this._entries = e.map(function(t) {
                            return RankPlayerVO.createFromLeaderBoardEntry(t)
                        }), a.label = 3;
                    case 3:
                        return [2, this._entries || []]
                }
            })
        })
    }, e.prototype.getEntries = function() {
        return this._entries || []
    }, e.prototype.getConnectedPlayerEntriesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a, s;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, this.preInitializeAsync()];
                    case 1:
                        return i.sent(), this._friendEntries ? [3, 3] : (t = this._leaderboard, [4, t.getConnectedPlayerEntriesAsync(100, 0)]);
                    case 2:
                        e = i.sent(), this._friendEntries = e.map(function(t) {
                            return RankPlayerVO.createFromLeaderBoardEntry(t)
                        }), a = FBInstant.player.getID(), s = this._friendEntries.findIndex(function(t) {
                            return t.id == a
                        }), -1 == s && (this._friendEntries.push(RankPlayerVO.createFromContextPlayer(FBInstant.player)), this._friendEntries.forEach(function(t, e) {
                            return t.originalRank = e + 1
                        })), this.bindFriends(), i.label = 3;
                    case 3:
                        return [2, this._friendEntries || []]
                }
            })
        })
    }, e.prototype.getConnectedPlayerEntries = function() {
        return this._friendEntries || []
    }, e.prototype.refreshRankList = function(t, e, a) {
        var s = FBInstant.player.getID(),
            i = t.findIndex(function(t) {
                return t.id == s
            });
        if (-1 != i) {
            var o = t[i];
            o.score = e, o.extraData = a, t.sorton("score", "LOWER_IS_BETTER" == this.sortType), t.forEach(function(t, e) {
                return t.originalRank = e + 1
            })
        } else if (t.length > 0 && e > t[t.length - 1].score) {
            var o = RankPlayerVO.createFromContextPlayer(FBInstant.player);
            o.score = e, o.extraData = a, t.push(o), t.sorton("score", "LOWER_IS_BETTER" == this.sortType), t.forEach(function(t, e) {
                return t.originalRank = e + 1
            })
        }
    }, e.prototype.setScore = function(t, e) {
        var a = this;
        if (!this._preInitialized) throw "doesn't preInitialized";
        if (!(t < this._selfEntry.score)) {
            this._selfEntry.score = t, this._selfEntry.extraData = e, this._entries && this.refreshRankList(this._entries, t, e), this._friendEntries && this.refreshRankList(this._friendEntries, t, e);
            var s = function() {
                return __awaiter(a, void 0, void 0, function() {
                    var a;
                    return __generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, this.preInitializeAsync()];
                            case 1:
                                return s.sent(), console.log("setScoreAsync", t), [4, this._leaderboard.setScoreAsync(t, JSON.stringify(e))];
                            case 2:
                                return a = s.sent(), this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(a), console.log("setScoreAsync suc"), [2]
                        }
                    })
                })
            };
            s()
        }
    }, e.prototype.getScore = function() {
        if (!this._preInitialized) throw "doesn't preInitialized";
        return this._selfEntry.score
    }, e.prototype.setFriends = function(t) {
        this._friends = t, this.bindFriends()
    }, e.prototype.bindFriends = function() {
        if (this._friends && this._friendEntries) {
            var t = {},
                e = this._friends;
            e.forEach(function(e) {
                return t[e.getID()] = RankPlayerVO.createFromContextPlayer(e)
            }), t[FBInstant.player.getID()] = RankPlayerVO.createFromContextPlayer(FBInstant.player);
            var a = this._friendEntries;
            a.forEach(function(e) {
                var a = t[e.id];
                a && (e.name = a.name, e.photo = a.photo, delete t[e.id])
            });
            for (var s in t) a.push(t[s]), t[s].score = this.defaultScore;
            a.sorton("score", "LOWER_IS_BETTER" == this.sortType), a.forEach(function(t, e) {
                return t.originalRank = e + 1
            })
        }
    }, e.prototype.getSelfEntry = function() {
        return this._selfEntry
    }, e
}(Emiter);
__reflect(LeaderBoard.prototype, "LeaderBoard");
var PlatformDev = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t), e.prototype.needAccount = function() {
        return !0
    }, e.prototype.getWorldFriendEntries = function() {
        for (var t = [], e = 1; t.length < 1;) {
            var a = new RankPlayerVO;
            a.id = "player" + e, a.name = "abc" + e, a.photo = "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1919308798192205&height=256&width=256&ext=1556338068&hash=AeT6AJodDv0PCryf", a.score = 1 + Math.floor(100 * Math.random()), t.push(a), e++
        }
        return t
    }, e
}(BasePlatform);
__reflect(PlatformDev.prototype, "PlatformDev");
var PlatformFactory = function() {
    function t() {}
    return t.create = function() {
        return window.FBInstant ? new PlatformFB : new PlatformDev
    }, t
}();
__reflect(PlatformFactory.prototype, "PlatformFactory");
var PlatformFB = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e._canAdd2HomeScreen = !1, e._isDateReady = !1, e._isFetching = !1, e._userInfo = {
            name: "",
            id: "",
            photo: "",
            friends: [],
            lang: "en_US"
        }, e._isPaymentsReady = !1, e
    }
    return __extends(e, t), e.prototype.getFriends = function() {
        return this._friends || []
    }, e.prototype.initSDK = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a = this;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return $T_FB_INITIALIZED ? [3, 2] : [4, FBInstant.initializeAsync()];
                    case 1:
                        s.sent(), s.label = 2;
                    case 2:
                        return this._worldRank = new LeaderBoard("world2"), t = function(t) {
                            t.code && (t.nick = FBInstant.player.getName(), a.log("platform_error", t))
                        }, this._worldRank.on("error", t, this), e = function(t) {
                            a.log("platform_api", t)
                        }, this._worldRank.on("api", e, this), this.fetchData(), [2]
                }
            })
        })
    }, e.prototype.fetchData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e = this;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return this._isDateReady ? [2] : this._isFetching ? [4, new Promise(function(t, a) {
                            e.once("data_ready", t)
                        })] : [3, 2];
                    case 1:
                        return a.sent(), [2];
                    case 2:
                        return a.trys.push([2, 4, , 5]), this._isFetching = !0, [4, this.initRemoteData()];
                    case 3:
                        return a.sent(), this._isDateReady = !0, [3, 5];
                    case 4:
                        return t = a.sent(), console.log("fetchData error", t.code || t.msg || t), [3, 5];
                    case 5:
                        return this._isFetching = !1, this.emit("data_ready"), [2]
                }
            })
        })
    }, e.prototype.setLoadingProgress = function(t) {
        $T_PROGRESS = Math.max($T_PROGRESS, 100 * t)
    }, e.prototype.startGame = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            var a, s, i, o, r, n, h, l, c, u, p = this;
            return __generator(this, function(g) {
                switch (g.label) {
                    case 0:
                        return [4, FBInstant.startGameAsync()];
                    case 1:
                        return g.sent(), this.initPayments(), console.log("startGameAsync", Date.now()), a = FBInstant.getEntryPointData(), console.log("entry_data", JSON.stringify(a)), this.challenge_info = a && a.challenge_info, this.challenge_info ? [4, FBInstant.context.getPlayersAsync()] : [3, 3];
                    case 2:
                        s = g.sent(), i = {}, o = {}, s.forEach(function(t) {
                            i[t.getID()] = t.getPhoto(), o[t.getID()] = t.getName()
                        }), this.challenge_info.opponents.forEach(function(t) {
                            t.name = o[t.playerId] || "unkonw", t.photo = i[t.playerId] || "default-portrait_png"
                        }), g.label = 3;
                    case 3:
                        this.switchGameInfo = a && a.switchGameInfo || null, this.invite_skin_data = a && a.invite_skin_data, this.invite_skin_data && this.invite_skin_data.playerId == FBInstant.player.getID() && (this.invite_skin_data = null), g.label = 4;
                    case 4:
                        return g.trys.push([4, 6, , 7]), r = this, [4, FBInstant.player.getConnectedPlayersAsync()];
                    case 5:
                        return r._friends = g.sent(), [3, 7];
                    case 6:
                        return n = g.sent(), this._friends = [], [3, 7];
                    case 7:
                        h = this._friends.map(function(t) {
                            return t.getID()
                        }), this._userInfo = {
                            id: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            photo: FBInstant.player.getPhoto(),
                            friends: h,
                            lang: FBInstant.getLocale()
                        }, g.label = 8;
                    case 8:
                        return g.trys.push([8, 10, , 11]), l = this, [4, FBInstant.canCreateShortcutAsync()];
                    case 9:
                        return l._canAdd2HomeScreen = g.sent(), [3, 11];
                    case 10:
                        return c = g.sent(), console.log("canCreateShortcutAsync failed"), [3, 11];
                    case 11:
                        return console.log("can add sc", this._canAdd2HomeScreen), [4, this.fetchData()];
                    case 12:
                        return g.sent(), this.isNewPlayer = void 0 == this.$remoteData.gold, this.playerType = this.isNewPlayer ? "new" : "old", this.isNewPlayer && (this.$remoteData.gold = 0, this.$remoteData.add_hs = 0, this.$remoteData.add_hs_refuse_count = 0, this.$remoteData.context_ids = [], this.$remoteData.h_score = 0, this.$remoteData.iap_inventory = [], this.$remoteData.game_db = {}, this.$remoteData.skin_invites = [], this.syncRemoteData()), this.$remoteData.last_login_dayth ? Date.days() != this.$remoteData.last_login_dayth && (this.$remoteData.login_day_count++, this.$remoteData.last_login_dayth = Date.days(), this.syncRemoteData()) : (this.$remoteData.last_login_dayth = Date.days(), this.$remoteData.login_day_count = 1, this.syncRemoteData()), console.log("login_days"), this._worldRank.setFriends(this._friends), [4, this._worldRank.initializeAsync(!0, !0)];
                    case 13:
                        return g.sent(), FBInstant.setSessionData({
                            nickname: this._userInfo.name,
                            playerInfo: {
                                head: this._userInfo.photo,
                                lang: this._userInfo.lang,
                                score: this.$remoteData.h_score
                            }
                        }), -1 == FBInstant.getPlatform().indexOf("WEB") ? (this.iad = new ad.InterstitialAD(t, !0), this.iad.on("ad_failed", function(t) {
                            return p.log("ad_failed", t)
                        }), this.iad.on("ad_show", function(t) {
                            return p.log("iad_times", t)
                        }), this.rad = new ad.RewardedVideoAD(e, !0), this.rad.on("ad_failed", function(t) {
                            return p.log("ad_failed", t)
                        }), this.rad.on("ad_show", function(t) {
                            return p.log("rad_times", t)
                        })) : (console.log("WEB & MOBILE_WEB video ad skiped!"), this.iad = new ad.InterstitialAD(t, !0), this.iad.on("ad_failed", function(t) {
                            return p.log("ad_failed", t)
                        }), this.iad.on("ad_show", function(t) {
                            return p.log("iad_times", t)
                        })), u = a ? a.type : "normal", "normal" == u && FBInstant.context.getID() && (u = "group_rank"), platform.log("entry_point", {
                            entry: u,
                            play_type: this.playerType
                        }), this.entry = u, console.log("entry", u), [2]
                }
            })
        })
    }, e.prototype.getPlatFormiOS = function() {
        return "IOS" == FBInstant.getPlatform() ? !0 : !1
    }, e.prototype.getWorldEntries = function() {
        return this._worldRank.getEntries()
    }, e.prototype.getWorldEntriesAsync = function() {
        return this._worldRank.getEntriesAsync()
    }, e.prototype.getWorldFriendEntries = function() {
        return this._worldRank.getConnectedPlayerEntries()
    }, e.prototype.getWorldFriendEntriesAsync = function() {
        return this._worldRank.getConnectedPlayerEntriesAsync()
    }, e.prototype.getWorldSelfEntry = function() {
        return this._worldRank.getSelfEntry()
    }, e.prototype.getHighScore = function() {
        return this._worldRank.getScore() || this.$remoteData.h_score
    }, e.prototype.setHighScore = function(t, e) {
        console.log("seth", t), t > this.$remoteData.h_score && (this.$remoteData.h_score = t, this.syncRemoteData()), this._worldRank.setScore(t, e)
    }, e.prototype.hasAD = function() {
        return this.hasRAD() || this.hasIAD()
    }, e.prototype.showAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return this.hasRAD() ? [4, this.showRAD()] : [3, 2];
                    case 1:
                        return t.sent(), [3, 4];
                    case 2:
                        return this.hasIAD() ? [4, this.showIAD()] : [3, 4];
                    case 3:
                        t.sent(), t.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.hasRAD = function() {
        return this.rad && this.rad.hasAD()
    }, e.prototype.showRAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = this.rad, t ? [4, this.rad.showAD()] : [3, 2];
                    case 1:
                        t = e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.hasIAD = function() {
        return this.iad && this.iad.hasAD()
    }, e.prototype.showIAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = this.iad, t ? [4, this.iad.showAD()] : [3, 2];
                    case 1:
                        t = e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.getToken = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                return t = FBInstant.player.getName() || "unknow", e = {
                    playerId: this._signedPlayerInfo.getPlayerID(),
                    signature: this._signedPlayerInfo.getSignature(),
                    photo: FBInstant.player.getPhoto(),
                    nickname: t
                }, [2, e]
            })
        })
    }, Object.defineProperty(e.prototype, "userInfo", {
        get: function() {
            return this._userInfo
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.getContextId = function() {
        return FBInstant.context.getID()
    }, e.prototype.getPlayerId = function() {
        return FBInstant.player.getID()
    }, e.prototype.choose = function(t, e, a) {
        return void 0 === e && (e = !1), void 0 === a && (a = "default"), __awaiter(this, void 0, void 0, function() {
            var s;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        this.log("create_detail", {
                            phase: 0,
                            place: a
                        }), void 0 == t && (t = ["NEW_CONTEXT_ONLY"]), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, FBInstant.context.chooseAsync({
                            filters: t,
                            minSize: e ? 3 : 2
                        })];
                    case 2:
                        return i.sent(), [3, 4];
                    case 3:
                        return s = i.sent(), console.log("choose result", JSON.stringify(s)), s.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.log("create_detail", {
                            phase: 1,
                            place: a
                        }), this.emit("context_changed"), [2, !0]
                }
            })
        })
    }, e.prototype.switchCtx = function(t, e) {
        return void 0 === e && (e = "default"), __awaiter(this, void 0, void 0, function() {
            var a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        this.log("switch_detail", {
                            phase: 0,
                            place: e
                        }), s.label = 1;
                    case 1:
                        return s.trys.push([1, 3, , 4]), [4, FBInstant.context.switchAsync(t)];
                    case 2:
                        return s.sent(), [3, 4];
                    case 3:
                        return a = s.sent(), console.log("switchCtx result", JSON.stringify(a)), a.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.emit("context_changed"), this.log("switch_detail", {
                            phase: 1,
                            place: e
                        }), [2, !0]
                }
            })
        })
    }, e.prototype.createCtx = function(t, e) {
        return void 0 === e && (e = "default"), __awaiter(this, void 0, void 0, function() {
            var a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        this.log("create_detail", {
                            phase: 0,
                            place: e
                        }), s.label = 1;
                    case 1:
                        return s.trys.push([1, 3, , 4]), [4, FBInstant.context.createAsync(t)];
                    case 2:
                        return s.sent(), [3, 4];
                    case 3:
                        return a = s.sent(), console.log("createCtx result", JSON.stringify(a)), a.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.emit("context_changed"), this.log("create_detail", {
                            phase: 1,
                            place: e
                        }), [2, !0]
                }
            })
        })
    }, e.prototype.getContextPlayers = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        t = [], a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, FBInstant.context.getPlayersAsync()];
                    case 2:
                        return t = a.sent(), [3, 4];
                    case 3:
                        return e = a.sent(), console.log("getContextPlayers error", JSON.stringify(e)), [3, 4];
                    case 4:
                        return [2, t]
                }
            })
        })
    }, e.prototype.switchGame = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            var a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return a = {
                            switchGameInfo: {
                                appId: this.appId,
                                appName: this.appName
                            },
                            type: this.appName
                        }, [4, FBInstant.switchGameAsync(t, Object.assign(a, e))];
                    case 1:
                        return s.sent(), [2]
                }
            })
        })
    }, e.prototype.updateStatues = function(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            var a, s, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        a = 0, o.label = 1;
                    case 1:
                        if (!(3 > a)) return [3, 8];
                        s = !1, o.label = 2;
                    case 2:
                        return o.trys.push([2, 4, , 5]), [4, FBInstant.updateAsync({
                            action: e.action || "CUSTOM",
                            cta: e.cta || "Play now",
                            image: e.image,
                            text: e.text || "Play with me!",
                            template: e.template || "game_result",
                            data: t,
                            strategy: e.strategy || "IMMEDIATE",
                            notification: e.notification || "NO_PUSH"
                        })];
                    case 3:
                        return o.sent(), [3, 5];
                    case 4:
                        return i = o.sent(), s = !0, console.log("updateStatues failed", a, JSON.stringify(i)), [3, 5];
                    case 5:
                        return s ? [4, waitAsync(500)] : [3, 8];
                    case 6:
                        o.sent(), o.label = 7;
                    case 7:
                        return a++, [3, 1];
                    case 8:
                        return [2]
                }
            })
        })
    }, e.prototype.share = function(t) {
        return void 0 === t && (t = {}), __awaiter(this, void 0, void 0, function() {
            var e, a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        e = !0, s.label = 1;
                    case 1:
                        return s.trys.push([1, 3, , 4]), console.log("share..."), [4, FBInstant.shareAsync({
                            intent: "INVITE",
                            image: t.img || RES.getRes("share_png").toDataURL("image/png"),
                            text: t.text || "Hey buddy, I found an awesome game. I'm sure you'll love it.",
                            data: t.data || null
                        })];
                    case 2:
                        return s.sent(), [3, 4];
                    case 3:
                        return a = s.sent(), e = !1, [3, 4];
                    case 4:
                        return [2, e]
                }
            })
        })
    }, e.prototype.log = function(e, a, s) {
        void 0 === s && (s = 1), t.prototype.log.call(this, e, a, s), a = a || {}, a._appVersion = $T_GAME_VERSION, a.playerId = FBInstant.player.getID(), a.playerName = FBInstant.player.getName(), FBInstant.logEvent(e, s, a)
    }, e.prototype.getData = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            var e, a, s;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        e = null, a = 5, i.label = 1;
                    case 1:
                        if (e || !(a-- > 0)) return [3, 6];
                        i.label = 2;
                    case 2:
                        return i.trys.push([2, 4, , 5]), [4, FBInstant.player.getDataAsync(t)];
                    case 3:
                        return e = i.sent(), [3, 5];
                    case 4:
                        return s = i.sent(), [3, 5];
                    case 5:
                        return [3, 1];
                    case 6:
                        return [2, e || {}]
                }
            })
        })
    }, e.prototype.setData = function(t, e) {
        return void 0 === e && (e = !1), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, FBInstant.player.setDataAsync(t)];
                    case 1:
                        return a.sent(), e ? [4, FBInstant.player.flushDataAsync()] : [3, 3];
                    case 2:
                        a.sent(), a.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, e.prototype.canAdd2HomeScreen = function() {
        return this._canAdd2HomeScreen
    }, e.prototype.add2HomeScreen = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]), [4, FBInstant.createShortcutAsync()];
                    case 1:
                        return e.sent(), [3, 3];
                    case 2:
                        return t = e.sent(), console.log("add 2 Home Screen result", JSON.stringify(t)), [2, {
                            res: !1,
                            code: t.code
                        }];
                    case 3:
                        return [2, {
                            res: !0,
                            code: ""
                        }]
                }
            })
        })
    }, e.prototype.suportIAP = function() {
        return this._isPaymentsReady
    }, e.prototype.getCatalogAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        t = null, a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, FBInstant.payments.getCatalogAsync()];
                    case 2:
                        return t = a.sent(), console.log(JSON.stringify(t)), [3, 4];
                    case 3:
                        return e = a.sent(), console.log("getCatalogAsync error:" + e.code || e.message || e), [3, 4];
                    case 4:
                        return [2, t]
                }
            })
        })
    }, e.prototype.purchaseAsync = function(t, e) {
        return void 0 === e && (e = ""), __awaiter(this, void 0, void 0, function() {
            var a, s, i, o, r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!this._isPaymentsReady) return [2, !1];
                        a = !1, s = FBInstant.getPlatform(), this.log("buyProduct", {
                            phase: 0,
                            productId: t,
                            platform: s
                        }), n.label = 1;
                    case 1:
                        return n.trys.push([1, 4, , 5]), i = {}, i.productID = t, e && (i.developerPayload = i.developerPayload), [4, FBInstant.payments.purchaseAsync(i)];
                    case 2:
                        return o = n.sent(), this.log("buyProduct", {
                            phase: 1,
                            productId: t,
                            platform: s
                        }), [4, FBInstant.payments.consumePurchaseAsync(o.purchaseToken)];
                    case 3:
                        return n.sent(), this.addIAPInventroy(o.productID), this.log("buyProduct", {
                            phase: 2,
                            productId: t,
                            platform: s
                        }), a = !0, [3, 5];
                    case 4:
                        return r = n.sent(), console.log("purchaseAsync error:" + r.code || r.message || r), this.log("buyProduct", {
                            phase: -1,
                            productId: t,
                            platform: s,
                            code: r.code
                        }), [3, 5];
                    case 5:
                        return [2, a]
                }
            })
        })
    }, e.prototype.checkPurchaseAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a, s, i, o, r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!this._isPaymentsReady) return [2, null];
                        t = FBInstant.getPlatform(), e = null, n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, FBInstant.payments.getPurchasesAsync()];
                    case 2:
                        return e = n.sent(), [3, 4];
                    case 3:
                        return a = n.sent(), console.log("getPurchasesAsync error:" + a.code || a.message || a), [3, 4];
                    case 4:
                        s = 0, i = e, n.label = 5;
                    case 5:
                        if (!(s < i.length)) return [3, 10];
                        o = i[s], n.label = 6;
                    case 6:
                        return n.trys.push([6, 8, , 9]), [4, FBInstant.payments.consumePurchaseAsync(o.purchaseToken)];
                    case 7:
                        return n.sent(), this.addIAPInventroy(o.productID), this.log("checkPurchase", {
                            phase: 1,
                            productId: o.productID,
                            platform: t
                        }), [3, 9];
                    case 8:
                        return r = n.sent(), console.log("checkPurchase error:" + r.code || r.message || r), this.log("checkPurchase", {
                            phase: -1,
                            platform: t,
                            code: r.code
                        }), [3, 9];
                    case 9:
                        return s++, [3, 5];
                    case 10:
                        return [2]
                }
            })
        })
    }, e.prototype.initPayments = function() {
        var t = this;
        if (-1 != FBInstant.getSupportedAPIs().indexOf("payments.purchaseAsync") && "IOS" != FBInstant.getPlatform()) {
            var e = FBInstant.getPlatform();
            this.log("paymentsReady", {
                phase: 0,
                platform: e
            }), FBInstant.payments.onReady(function() {
                t._isPaymentsReady = !0, t.log("paymentsReady", {
                    phase: 1,
                    platform: e
                }), t.checkPurchaseAsync()
            })
        }
    }, e.prototype.addIAPInventroy = function(t) {
        this.remoteData.iap_inventory || (this.remoteData.iap_inventory = []), this.remoteData.iap_inventory.push(t), this.syncRemoteData()
    }, e.prototype.hasPurchased = function(t) {
        var e = this.remoteData.iap_inventory;
        return e && -1 != e.indexOf(t)
    }, e.prototype.checkBotSubscribe = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, a, s;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        t = null, i.label = 1;
                    case 1:
                        return i.trys.push([1, 5, , 6]), [4, FBInstant.player.canSubscribeBotAsync()];
                    case 2:
                        return e = i.sent(), console.log("can subscribe:", e), e ? (this.log("bot_subscribe", {
                            result: -1
                        }), [4, FBInstant.player.subscribeBotAsync()]) : [3, 4];
                    case 3:
                        a = i.sent(), this.log("bot_subscribe", {
                            result: 1
                        }), t = {
                            result: !0
                        }, i.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        return s = i.sent(), this.log("bot_subscribe", {
                            result: 0
                        }), t = {
                            result: !1,
                            code: s.code,
                            msg: s.message
                        }, [3, 6];
                    case 6:
                        return [2, t]
                }
            })
        })
    }, e
}(BasePlatform);
__reflect(PlatformFB.prototype, "PlatformFB");
var RankPlayerVO = function() {
    function t() {
        this.name = "", this.photo = "", this.score = 0, this.id = "", this.tip = "", this.originalRank = 0
    }
    return Object.defineProperty(t.prototype, "skin", {
        get: function() {
            return this.extraData && this.extraData.skin || 1
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.toJSON = function() {
        return {
            id: this.id,
            score: this.score,
            extraData: this.extraData
        }
    }, t.createFromJSON = function(e) {
        var a = new t;
        if (a.id = e.id, a.score = e.score, "string" == typeof e.extraData) try {
            a.extraData = JSON.parse(e.extraData)
        } catch (s) {} else a.extraData = e.extraData;
        return a
    }, t.createFromLeaderBoardEntry = function(e) {
        var a = e.getPlayer(),
            s = new t;
        s.name = a.getName(), s.photo = a.getPhoto(), s.id = a.getID(), s.score = e.getScore();
        var i = e.getExtraData(),
            o = null;
        try {
            i && (o = JSON.parse(i))
        } catch (r) {
            console.log(r)
        }
        return s.extraData = o, s.originalRank = e.getRank(), s
    }, t.createFromContextPlayer = function(e) {
        var a = new t;
        return a.name = e.getName(), a.photo = e.getPhoto(), a.id = e.getID(), a
    }, t
}();
__reflect(RankPlayerVO.prototype, "RankPlayerVO");
var ShareHelper;
! function(t) {
    function e(t) {
        var e = this;
        return new Promise(function(a, s) {
            t.once("ready_2_draw", function() {
                console.log("ready_2_draw");
                var e = new egret.RenderTexture;
                e.drawToTexture(t, new egret.Rectangle(0, 0, 600, 314)), t.removeFromParent();
                var s = e.toDataURL("image/png");
                e.dispose(), a(s)
            }, e), app.stage.addChildAt(t, 0), t.y = app.stage.stageHeight + 10
        })
    }

    function a(t, a, s) {
        return __awaiter(this, void 0, void 0, function() {
            var i, o, r, n, h, l;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return i = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: a
                        }, o = {
                            level: t,
                            senderId: i.playerId,
                            opponents: [i]
                        }, r = s ? "Hey, " + s + ", m" : "M", n = r + "y score is " + a + "! Can you do better?", h = new ShareImage, [4, e(h.InitShareImage1(t, i.photo, a))];
                    case 1:
                        return l = c.sent(), console.log("r done"), o.opponents.forEach(function(t) {
                            delete t.photo, delete t.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge"
                        }, {
                            challenge_info: o
                        }), {
                            image: l,
                            text: "[Level " + t + "] " + n,
                            template: "challenge",
                            cta: "CHALLENGE"
                        })];
                    case 2:
                        return c.sent(), [2]
                }
            })
        })
    }

    function s(t, a, s, i) {
        return __awaiter(this, void 0, void 0, function() {
            var o, r, n, h, l, c, u;
            return __generator(this, function(p) {
                switch (p.label) {
                    case 0:
                        return o = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: a
                        }, r = s || "you", n = "you" == r ? "you" : "they", h = o.name + " has challenged " + r + ", " + n + " are neck and neck!", o.score > i.score ? h = o.name + " has failed to challenge " + r + ", " + r + " win!" : o.score < i.score && (h = o.name + " has succeeded in passing " + r + ". Come and challenge " + o.name), console.log("r image"), l = new ShareImage, [4, e(l.InitShareImage2(t, [o.photo, i.photo], [a, i.score]))];
                    case 1:
                        return c = p.sent(), console.log("r done"), u = {
                            level: t,
                            senderId: o.playerId,
                            opponents: [i, o]
                        }, u.opponents.forEach(function(t) {
                            delete t.photo, delete t.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge_result"
                        }, {
                            challenge_info: u
                        }), {
                            image: c,
                            text: "[Level " + t + "] " + h,
                            cta: "Play",
                            template: "challenge_result"
                        })];
                    case 2:
                        return p.sent(), [2]
                }
            })
        })
    }

    function i(t, a, s) {
        return __awaiter(this, void 0, void 0, function() {
            var i, o, r, n, h, l, c;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return i = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: a
                        }, o = s.find(function(t) {
                            return t.playerId == i.playerId
                        }), o ? i.score < o.score && Object.assign(o, i) : s.push(i), s.sorton("score", !0), s.forEach(function(t, e) {
                            return t.rankIndex = e
                        }), r = {
                            level: t,
                            senderId: i.playerId,
                            opponents: s
                        }, n = s.findIndex(function(t) {
                            return t.playerId == i.playerId
                        }), h = [], s.length <= 6 ? h = s : 6 > n ? h = s.slice(0, 6) : (h = s.slice(0, 5), h.push(s[n]), n = 5), l = new ShareImage, [4, e(l.InitShareImage(t, n, h))];
                    case 1:
                        return c = u.sent(), console.log("r done"), r.opponents.forEach(function(t) {
                            delete t.photo, delete t.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge_leaderboard"
                        }, {
                            challenge_info: r
                        }), {
                            image: c,
                            text: "[Level " + t + "] " + platform.userInfo.name + " scored " + i.score + "s",
                            cta: "Play",
                            template: "challenge_leaderboard"
                        })];
                    case 2:
                        return u.sent(), [2]
                }
            })
        })
    }

    function o() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(a) {
                return t = [{
                    playerId: "1838821619562248",
                    name: "six",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.5
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.8
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.3
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 2.3
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 2.6
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: .3
                }], e = new ShareImage, app.stage.addChild(e.InitShareImage(10, 0, t)), [2]
            })
        })
    }

    function r(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            var o, r, n, h, l, c, u, p, c, g, m;
            return __generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        return platform instanceof PlatformFB ? "SOLO" == FBInstant.context.getType() ? [2] : (o = app.model, r = platform.challenge_info, platform.challenge_info = null, n = FBInstant.context.isSizeBetween(3, null), h = n && n.answer, [4, FBInstant.context.getPlayersAsync()]) : [2];
                    case 1:
                        if (l = d.sent() || [], l = l.filter(function(t) {
                                return t.getID() != FBInstant.player.getID()
                            }), r && !(r.senderId == platform.userInfo.id && r.opponents.length <= 2)) return [3, 6];
                        c = "", !h && l.length > 0 && (c = l[0].getName()), console.log("sending challenge"), d.label = 2;
                    case 2:
                        return d.trys.push([2, 4, , 5]), [4, a(t, e, c)];
                    case 3:
                        return d.sent(), [3, 5];
                    case 4:
                        return u = d.sent(), console.log("sending challenge failed", u), [3, 5];
                    case 5:
                        return console.log("sending challenge done"), [3, 16];
                    case 6:
                        if (1 != r.opponents.length) return [3, 11];
                        p = r.opponents[0], console.log("sending challenge result"), c = h ? p.name : "", d.label = 7;
                    case 7:
                        return d.trys.push([7, 9, , 10]), [4, s(t, e, c, p)];
                    case 8:
                        return d.sent(), [3, 10];
                    case 9:
                        return g = d.sent(), console.log("sending challenge result failed", g), [3, 10];
                    case 10:
                        return console.log("sending challenge result done"), [3, 16];
                    case 11:
                        console.log("sending challenge leaderbooard"), d.label = 12;
                    case 12:
                        return d.trys.push([12, 14, , 15]), [4, i(t, e, r.opponents)];
                    case 13:
                        return d.sent(), [3, 15];
                    case 14:
                        return m = d.sent(), console.log("sending challenge leaderbooard failed", m), [3, 15];
                    case 15:
                        console.log("sending challenge leaderbooard done"), d.label = 16;
                    case 16:
                        return [2]
                }
            })
        })
    }

    function n(t, e) {
        return __awaiter(this, void 0, void 0, function() {
            var a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return s.trys.push([0, 2, , 3]), [4, Promise.race([Promise.all([new Promise(function(t) {
                            return setTimeout(t, 3e3)
                        }), r(t, e)]), new Promise(function(t) {
                            return setTimeout(t, 6e3)
                        })])];
                    case 1:
                        return s.sent(), [3, 3];
                    case 2:
                        return a = s.sent(), console.log("error", a), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }

    function h(t) {
        return __awaiter(this, void 0, void 0, function() {
            var e, a, s, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB)) return [2];
                        if ("SOLO" == FBInstant.context.getType()) return [2];
                        e = app.model, a = "context." + FBInstant.context.getID(), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, FBInstant.getLeaderboardAsync(a)];
                    case 2:
                        return s = o.sent(), s.setScoreAsync(t, ""), [3, 4];
                    case 3:
                        return i = o.sent(), [3, 4];
                    case 4:
                        return [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: a
                        })];
                    case 5:
                        return o.sent(), [2]
                }
            })
        })
    }

    function l(t, a, s) {
        return void 0 === s && (s = !1), __awaiter(this, void 0, void 0, function() {
            var i, o, r, n, h;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        i = ["Hi, I'm waiting for you.", "Are you a good taxi driver?", "I need you to take me home!"], l.label = 1;
                    case 1:
                        return l.trys.push([1, 7, , 8]), o = new ShareImage, r = o.InitShareCommon("share" + Math.randInt(1, 3) + "_jpg", FBInstant.player.getPhoto()), [4, e(r)];
                    case 2:
                        return n = l.sent(), console.log("r img done"), s ? [3, 4] : [4, platform.updateStatues(Object.assign({
                            type: t
                        }, a), {
                            text: i.random(),
                            image: n,
                            cta: "Play",
                            template: t
                        })];
                    case 3:
                        return l.sent(), [3, 6];
                    case 4:
                        return [4, platform.share({
                            img: n,
                            text: i.random(),
                            cta: "Play",
                            data: Object.assign({
                                type: t
                            }, a)
                        })];
                    case 5:
                        l.sent(), l.label = 6;
                    case 6:
                        return [3, 8];
                    case 7:
                        return h = l.sent(), console.log("update Failed" + JSON.stringify(h)), [3, 8];
                    case 8:
                        return [2]
                }
            })
        })
    }

    function c(t, a) {
        return __awaiter(this, void 0, void 0, function() {
            var s, i, o, r, n, h;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return s = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: a
                        }, i = {
                            level: t,
                            senderId: s.playerId,
                            opponents: [s]
                        }, o = "My score is " + a + "s! Can you do better?", console.log("r image"), r = new ShareImage, [4, e(r.InitShareImage1(t, s.photo, a))];
                    case 1:
                        return n = l.sent(), console.log("r done"), i.opponents.forEach(function(t) {
                            delete t.photo, delete t.name
                        }), [4, platform.share({
                            img: n,
                            text: "[Level " + t + "] " + o,
                            cta: "CHALLENGE",
                            data: Object.assign({
                                type: "challenge"
                            }, {
                                challenge_info: i
                            })
                        })];
                    case 2:
                        return h = l.sent(), [2, h]
                }
            })
        })
    }
    t.testl = o, t.challengePost = n, t.sendLeadboardUpdate = h, t.sendGenericUpdate = l, t.challengeShare = c
}(ShareHelper || (ShareHelper = {})), egret.Bitmap.prototype.pos = function(t, e, a, s) {
    this.x = t, this.y = e, this.width = a, this.height = s, this.anchorOffsetX = a / 2, this.anchorOffsetY = s / 2
};
var ShareImage = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.UserName = [], e.UserID = [], e.UserImage = [], e.UserScore = [], e.x = 20, e.y = 500, e
    }
    return __extends(e, t), e.prototype.InitShareCommon = function(t, e) {
        this.NumReady = 1, this.NumReadyNow = 0;
        var a = new egret.Bitmap(RES.getRes(t));
        return this.addChild(a), a.pos(300, 157, 600, 314), this.CreateImageHead2(80, 80, e), this
    }, e.prototype.InitShareImage1 = function(t, e, a) {
        return this.NumReady = 1, this.NumReadyNow = 0, this.CreateImageBg("share_challenge_bg1_png", t, 1), this.CreateImageHead(300, 100, e, 1, 0), this.CreateLabelScore(25, 150, a, 1), this
    }, e.prototype.InitShareImage2 = function(t, e, a) {
        return this.NumReady = 2, this.NumReadyNow = 0, console.log("shareimgphoto:" + e), console.log("shareimgscore:" + a), this.CreateImageBg("share_challenge_bg2_png", t, 2), a[0] <= a[1] ? this.CreateImageKing(135, 167, 1) : this.CreateImageKing(465, 167, 2), this.CreateLabelScore(135, 280, a[0], 2), this.CreateLabelScore(465, 280, a[1], 2), this.CreateImageHead(135, 167, e[0], 1, 0), this.CreateImageHead(465, 167, e[1], 1, 0), this
    }, e.prototype.InitShareImage = function(t, e, a) {
        var s = a.length;
        s > 6 && (s = 6), this.NumIndex = e, this.NumReady = s, this.NumReadyNow = 0;
        var i = a.map(function(t) {
                return t.name
            }),
            o = a.map(function(t) {
                return t.photo
            }),
            r = a.map(function(t) {
                return t.score
            });
        return this.CreateImageBg("share_challenge_bg3_png", t, 3), 3 == s ? (this.CreateImageKing(300, 140, 2), this.CreateLabelScore(120, 280, r[1], 3), this.CreateLabelScore(300, 280, r[0], 3), this.CreateLabelScore(480, 280, r[2], 3), this.CreateLabelName(120, 238, i[1], 1), this.CreateLabelName(300, 238, i[0], 0), this.CreateLabelName(480, 238, i[2], 2), this.CreateImageHead(120, 140, o[1], 3, 2), this.CreateImageHead(300, 140, o[0], 2, 1), this.CreateImageHead(480, 140, o[2], 3, 3)) : 4 == s ? (this.CreateImageKing(90, 140, 2), this.CreateLabelScore(90, 280, r[0], 3), this.CreateLabelScore(230, 280, r[1], 3), this.CreateLabelScore(370, 280, r[2], 3), this.CreateLabelScore(510, 280, r[3], 3), this.CreateLabelName(90, 238, i[0], 0), this.CreateLabelName(230, 238, i[1], 1), this.CreateLabelName(370, 238, i[2], 2), this.CreateLabelName(510, 238, i[3], 3), this.CreateImageHead(90, 140, o[0], 2, 1), this.CreateImageHead(230, 140, o[1], 3, 2), this.CreateImageHead(370, 140, o[2], 3, 3), this.CreateImageHead(510, 140, o[3], 3, 4)) : 5 == s ? (this.CreateImageKing(80, 140, 2), this.CreateLabelScore(80, 280, r[0], 3), this.CreateLabelScore(340, 90, r[1], 3), this.CreateLabelScore(540, 90, r[2], 3), this.CreateLabelScore(340, 220, r[3], 3), this.CreateLabelScore(540, 220, r[4], 3), this.CreateLabelName(80, 238, i[0], 0), this.CreateLabelName(260, 155, i[1], 1), this.CreateLabelName(440, 155, i[2], 2), this.CreateLabelName(260, 285, i[3], 3), this.CreateLabelName(440, 285, i[4], 4), this.CreateImageHead(80, 140, o[0], 2, 1), this.CreateImageHead(260, 90, o[1], 3, 2), this.CreateImageHead(440, 90, o[2], 3, 3), this.CreateImageHead(260, 220, o[3], 3, 4), this.CreateImageHead(440, 220, o[4], 3, 5)) : (this.CreateImageKing(260, 90, 3), this.CreateLabelScore(160, 90, r[1], 3), this.CreateLabelScore(340, 90, r[0], 3), this.CreateLabelScore(520, 90, r[2], 3), this.CreateLabelScore(160, 220, r[3], 3), this.CreateLabelScore(340, 220, r[4], 3), this.CreateLabelScore(520, 220, r[5], 3), this.CreateLabelName(80, 150, i[1], 1), this.CreateLabelName(260, 150, i[0], 0), this.CreateLabelName(440, 150, i[2], 2), this.CreateLabelName(80, 280, i[3], 3), this.CreateLabelName(260, 280, i[4], 4), this.CreateLabelName(440, 280, i[5], 5), this.CreateImageHead(80, 90, o[1], 3, 2), this.CreateImageHead(260, 90, o[0], 3, 1), this.CreateImageHead(440, 90, o[2], 3, 3), this.CreateImageHead(80, 220, o[3], 3, 4), this.CreateImageHead(260, 220, o[4], 3, 5), this.CreateImageHead(440, 220, o[5], 3, 6)), this
    }, e.prototype.CreateImageBg = function(t, e, a) {
        var s = new egret.Bitmap(RES.getRes(t));
        this.addChild(s), s.pos(300, 157, 600, 314);
        var i = new egret.TextField;
        this.addChild(i), i.textColor = 16767243, i.size = 35, i.bold = !0, i.text = "LEVEL " + e, 1 == a ? (i.x = 25, i.y = 50, i.anchorOffsetX = 0) : 2 == a ? (i.x = 300, i.y = 50, i.size = 40, i.anchorOffsetX = i.width / 2) : 3 == a && (i.x = 580, i.y = 28, i.size = 32, i.anchorOffsetX = i.width), i.anchorOffsetY = i.height / 2
    }, e.prototype.CreateImageKing = function(t, e, a) {
        var s = new egret.Bitmap(RES.getRes("share_crown_png"));
        this.addChild(s), e -= 1 == a ? 105 : 2 == a ? 85 : 55, s.pos(t, e, 66, 58)
    }, e.prototype.CreateImageHead = function(t, e, a, s, i) {
        var o = this,
            r = 150;
        2 == s ? r = 104 : 3 == s && (r = 72);
        var n = new egret.Bitmap;
        this.addChild(n), n.pos(t, e, r, r), RES.getResByUrl(a, function(t) {
            n.texture = t;
            var e = new egret.Shape;
            e.graphics.beginFill(255), e.graphics.drawCircle(n.x, n.y, r / 2), e.graphics.endFill(), o.addChild(e), n.mask = e, o.NumReadyNow++, o.NumReadyNow >= o.NumReady && (console.log("准备好绘图了"), o.dispatchEventWith("ready_2_draw"))
        }, this, RES.ResourceItem.TYPE_IMAGE);
        var h = new egret.Bitmap(RES.getRes("share_challenge_head" + s + "_png"));
        if (this.addChild(h), h.pos(t, e, h.width, h.height), s > 1) {
            var l = new egret.TextField;
            this.addChild(l), l.x = t, 2 == s ? l.y = e + 53 : l.y = e + 30, l.bold = !0, l.text = i + "", l.size = 22, l.anchorOffsetX = l.width / 2, l.anchorOffsetY = l.height / 2
        }
    }, e.prototype.CreateImageHead2 = function(t, e, a) {
        var s = this,
            i = 100,
            o = new egret.Bitmap;
        this.addChild(o), o.pos(t, e, i, i), RES.getResByUrl(a, function(t) {
            o.texture = t;
            var e = new egret.Shape;
            e.graphics.beginFill(255), e.graphics.drawCircle(o.x, o.y, i / 2), e.graphics.endFill(), s.addChild(e), o.mask = e, s.NumReadyNow++, s.NumReadyNow >= s.NumReady && (console.log("准备好绘图了"), s.dispatchEventWith("ready_2_draw"))
        }, this, RES.ResourceItem.TYPE_IMAGE);
        var r = new egret.Bitmap(RES.getRes("sharehead_png"));
        this.addChild(r), r.pos(t, e, 118, 118)
    }, e.prototype.CreateLabelScore = function(t, e, a, s) {
        var i = new egret.TextField;
        this.addChild(i), i.x = t, i.y = e, i.bold = !0, i.text = a + " s", 1 == s ? (i.size = 40, i.anchorOffsetX = 0) : 2 == s ? (i.size = 36, i.anchorOffsetX = i.width / 2) : (i.size = 24, i.anchorOffsetX = i.width / 2), i.anchorOffsetY = i.height / 2
    }, e.prototype.CreateLabelName = function(t, e, a, s) {
        var i = new egret.TextField;
        this.addChild(i), i.x = t, i.y = e, i.text = a, i.size = 17, i.width > 130 && (i.width = 130), i.wordWrap = !0, s == this.NumIndex && (i.textColor = 16767243), i.anchorOffsetX = i.width / 2, i.anchorOffsetY = i.height / 2
    }, e
}(egret.Sprite);
__reflect(ShareImage.prototype, "ShareImage");