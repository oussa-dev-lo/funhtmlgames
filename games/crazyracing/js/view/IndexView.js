var touch, __extends = this && this.__extends || function() {
    var a = function(t, e) {
        return (a = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(a, t) {
                a.__proto__ = t
            } || function(a, t) {
                for (var e in t) t.hasOwnProperty(e) && (a[e] = t[e])
            })(t, e)
    };
    return function(t, e) {
        function n() {
            this.constructor = t
        }
        a(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
}();
! function(a) {
    var t = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n._main = null, n._RankType = 0, n._boxRankBottom = 0, n._scene = null, n._camera = null, n._light = null, n._carList = [], n._carParent = null, n._3dParent = null, n._selectCarID = 0, n._selectCarAngle = 0, n._targetPoint = null, n._isTouch = !1, n._touchPosX = 0, n._weiYanList = [], n._weiYanChange = !1, n._carGround = null, n._datas = null, n._scaleA = 1.3, n._scaleB = 1.5, n._bgView = null, n._MaterialList = [], n._carShowMax = 6, n._touchAngle = 0, n._targetCar = null, n.curTryChe = 7, n.curMySelect = 0, n._main = e, n.btnStart.clickHandler = Laya.Handler.create(n, n.onStart, null, !1), n.btnTry.clickHandler = Laya.Handler.create(n, n.onStart, null, !1), n.btnStart1.clickHandler = Laya.Handler.create(n, n.onStart1, null, !1), n.btnTry1.clickHandler = Laya.Handler.create(n, n.onStart1, null, !1), n.btnSettingOpen.clickHandler = Laya.Handler.create(n, n.onSetting, null, !1), n.btnSettingClose.clickHandler = Laya.Handler.create(n, n.onSetting, null, !1), n.rankWorld.clickHandler = Laya.Handler.create(n, n.onRankWorld, null, !1), n.rankFriend.clickHandler = Laya.Handler.create(n, n.onRankFriend, null, !1), n.btnShowMore.clickHandler = Laya.Handler.create(n, n.onShowRank, null, !1), n.btnShowLess.clickHandler = Laya.Handler.create(n, n.onShowRank, null, !1), n.btnLeft.clickHandler = Laya.Handler.create(n, n.onLeftCar, null, !1), n.btnRight.clickHandler = Laya.Handler.create(n, n.onRightCar, null, !1), n.btnHelp.clickHandler = Laya.Handler.create(n, n.onOpenHelp, null, !1), n.btHelpBack.clickHandler = Laya.Handler.create(n, n.onCloseHelp, null, !1), n.btnShortShare.clickHandler = Laya.Handler.create(n, n.onShareInvite, null, !1), n.btnLongInvite.clickHandler = Laya.Handler.create(n, n.onShareInvite, null, !1), n.btnAward.clickHandler = Laya.Handler.create(n, n.onAward, null, !1), n.initList(), 0 == a.GameDefine.AI_COUNT ? (n.btnHelp.visible = !1, a.GameData.instance.isMusicOn = !1, a.GameData.instance.isSoundOn = !1, n.btnSettingOpen.visible = a.GameData.instance.isMusicOn, n.btnSettingClose.visible = a.GameData.instance.isMusicOn) : (n.btnSettingOpen.visible = a.GameData.instance.isMusicOn, n.btnSettingClose.visible = !n.btnSettingOpen.visible), n.setRankType(!0), n.btnShowLess.visible = !1, n._boxRankBottom = n.boxRank.bottom, n.myRank.myBG.visible = !0, n.helpView.visible = !1, GameBaseData.FBEventCar(16), Laya.stage.on(Laya.Event.MOUSE_DOWN, n, n.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, n, n.onMouseUp), Laya.stage.on(Laya.Event.MOUSE_MOVE, n, n.onMouseMove), Laya.timer.loop(50, n, n.onLoop), n._bgView = new a.IndexBgView(n), Laya.stage.addChild(n._bgView), n.init3DScene(), n.tryOk.clickHandler = Laya.Handler.create(n, n.onTryOk, null, !1), n.tryBack.clickHandler = Laya.Handler.create(n, n.onTryBack, null, !1), n
        }
        return __extends(e, t), e.prototype.initList = function() {
            this.addStar(), this.shortRankList.hScrollBarSkin = "", this.longRankList.vScrollBarSkin = "", this.shortRankList.array = new Array(0), this.longRankList.array = new Array(0), this.shortRankList.renderHandler = Laya.Handler.create(this, this.onShortRankItem, null, !1), this.longRankList.renderHandler = Laya.Handler.create(this, this.onLongRankItem, null, !1), this.shortRankList.array = new Array(0), this.shortRankList.scrollTo(0), this.longRankList.array = new Array(0), this.longRankList.scrollTo(0)
        }, e.prototype.initTestRankData = function() {
            var a = this;
            GameBaseData.getMyRank(function() {
                GameBaseData.isDebug && console.log(GameBaseData.myRank), a.upDataMyRankUI(0 == a._RankType)
            }, function() {}), GameBaseData.getRankList(0, function() {
                GameBaseData.isDebug && console.log(GameBaseData.allRank), a.upDataRankUI(0 == a._RankType, !0, !1)
            }, function() {}), GameBaseData.getFriendList(0, function() {
                GameBaseData.isDebug && console.log(GameBaseData.friendRank)
            }, function() {})
        }, e.prototype.init3DScene = function() {
            this._3dParent = new Laya.MeshSprite3D, this._scene = new Laya.Scene, Laya.stage.addChild(this._scene), this._camera = new Laya.Camera, this._scene.addChild(this._camera), this._camera.viewport = new Laya.Viewport(this.x, this.y, this.width, this.height), this._camera.transform.translate(new Laya.Vector3(0, 2.8, 4), !1), this._camera.transform.rotate(new Laya.Vector3(-18, 0, 0), !0, !1), this._light = new Laya.PointLight, this._light.transform.position = new Laya.Vector3(0, 20, 0), this._light.range = 100, this._light.attenuation = new Laya.Vector3(0, 0, 0), this._scene.addChild(this._light), this._scene.addChild(this._3dParent), this.initCar()
        }, e.prototype.initCar = function() {
            if (null == this._carGround) {
                var t = Laya.Mesh.load("res/scene/yuanpan-yuanpan.lm"),
                    e = new a.CustomMaterial;
                e.setTransparent(), e.setDiffuseTexture(Laya.Texture2D.load("res/scene/yuanpan.png")), e.setHasLight(!1), this._carGround = new Laya.MeshSprite3D(t), this._carGround.meshRender.sharedMaterial = e, this._3dParent.addChild(this._carGround)
            }
            this._carGround.transform.position = new Laya.Vector3(0, -.1, -3), this._carGround.transform.scale = new Laya.Vector3(1.7, 1, 1.7);
            for (m = 0; m < 12; m++) {
                var n = Laya.Mesh.load("res/scene/guang-guang.lm"),
                    i = new a.CustomMaterial;
                i.setDiffuseTexture(Laya.Texture2D.load("res/scene/guang.png")), i.setTransparent(), i.setHasLight(!0), i.setColor(new Laya.Vector4(1, 1, 1, .8));
                var s = new Laya.MeshSprite3D(n);
                s.meshRender.sharedMaterial = i;
                var r = .633 * Math.cos(30 * m * Math.PI / 180),
                    o = .633 * Math.sin(30 * m * Math.PI / 180);
                s.transform.position = new Laya.Vector3(r, .06, o), s.transform.scale = new Laya.Vector3(1.5, 2, 1.5), this._carGround.addChild(s)
            }
            this._carParent = new Laya.MeshSprite3D, this._carParent.transform.position = new Laya.Vector3(0, 0, -7.7), this._targetPoint = new Laya.Vector3(0, 0, .7);
            for (var l = 0, c = 0, h = 0, m = 0; m < a.GameDefine.CarShowMax; m++) {
                l = 20 * -m + 90;
                y = this.creatCar(Math.floor(m), 0);
                c = 5 * Math.cos(l * Math.PI / 180), h = 5 * Math.sin(l * Math.PI / 180), y.transform.position = new Laya.Vector3(c, .5 * m, h), y.transform.rotate(new Laya.Vector3(0, 90, 0), !0, !1), y.transform.scale = new Laya.Vector3(1.4, 1.4, 1.4), this._carList.push(y), this._carParent.addChild(y), this._3dParent.addChild(this._carParent)
            }
            this._carParent.transform.localRotationEuler.y;
            for (var d = 0, m = 0; m < a.GameDefine.CarShowMax; m++) {
                var y;
                (y = this._carParent.getChildAt(m)).transform.rotation = new Laya.Quaternion(0, 1, 0, 1), (d = -this._carParent.transform.position.z - y.transform.position.z) > 11.2 && (d = 11.2), y.transform.scale = new Laya.Vector3(this._scaleA - (d - 10.5) * this._scaleB, this._scaleA - (d - 10.5) * this._scaleB, this._scaleA - (d - 10.5) * this._scaleB), this._MaterialList[m].setColor(new Laya.Vector4(1, 1, 1, this._scaleA - (d - 10.5) * this._scaleB * 3))
            }
            GameBaseData.modelScore, a.GameData.instance.showSkinIndex > 0 && (this._selectCarAngle = -20 * (a.GameData.instance.showSkinIndex - 1), this._carParent.transform.localRotationEuler = new Laya.Vector3(0, this._selectCarAngle, 0), this.onRightCar()), this.startRotaen()
        }, e.prototype.creatCar = function(t, e) {
            var n = Laya.Sprite3D.instantiate(GameBaseData._carList[t]),
                i = n.getChildAt(0).getChildAt(0),
                s = n.getChildAt(0).getChildAt(1),
                r = n.getChildAt(0).getChildAt(2);
            GameBaseData.isDebug && console.log(i.name);
            var o = new a.CustomMaterial;
            o.setDiffuseTexture(GameBaseData._carSkinList[t]), o.setHasLight(!0), o.setTransparent(), this._MaterialList.push(o), i.meshRender.material = o, s.meshRender.material = o, r.meshRender.material = o, n.getChildAt(0).transform.rotate(new Laya.Vector3(0, -145, 0), !1, !1), n.transform.localPosition = new Laya.Vector3(0, 0, 0);
            return n.getChildAt(0).getComponentByType(Laya.Animator).enable = !1, n
        }, e.prototype.creatYW = function(t, e) {
            var n = Laya.Mesh.load("res/scene/weiyanpian.lm"),
                i = new a.CustomMaterial;
            i.setTransparent(), i.setDiffuseTexture(Laya.Texture2D.load("res/tail/weiyan_" + t + ".png")), i.setHasLight(!1), i.setHasAlphaTest(!0);
            var s = new Laya.MeshSprite3D(n);
            s.meshRender.sharedMaterial = i, s.transform.localScale = new Laya.Vector3(1, 1, .2), s.transform.position = new Laya.Vector3(0, .12, .55), e.addChild(s), this._weiYanList.push(s)
        }, e.prototype.nextCar = function(t) {
            t ? this._selectCarAngle += 20 : this._selectCarAngle -= 20;
            var e = this._carParent.transform.localRotationEuler.y,
                n = 0,
                i = function() {
                    for (var s = 0; s < a.GameDefine.CarShowMax; s++) {
                        var r = this._carParent.getChildAt(s);
                        r.transform.rotation = new Laya.Quaternion(0, 1, 0, 1), (n = -this._carParent.transform.position.z - r.transform.position.z) > 11.2 && (n = 11.2), r.transform.position = new Laya.Vector3(r.transform.position.x, Math.abs(.5 * s + .5 * e / 20), r.transform.position.z), r.transform.scale = new Laya.Vector3(this._scaleA - (n - 10.5) * this._scaleB, this._scaleA - (n - 10.5) * this._scaleB, this._scaleA - (n - 10.5) * this._scaleB), this._MaterialList[s].setColor(new Laya.Vector4(1, 1, 1, this._scaleA - (n - 10.5) * this._scaleB * 3))
                    }
                    t ? e < this._selectCarAngle && ((e += 2) >= this._selectCarAngle && (e = this._selectCarAngle, this._carParent.timer.clear(this, i), this.startRotaen()), this._carParent.transform.localRotationEuler = new Laya.Vector3(0, e, 0)) : e > this._selectCarAngle && ((e -= 2) <= this._selectCarAngle && (e = this._selectCarAngle, this._carParent.timer.clear(this, i), this.startRotaen()), this._carParent.transform.localRotationEuler = new Laya.Vector3(0, e, 0))
                };
            this._carParent.timer.loop(10, this, i)
        }, e.prototype.onLeftCar = function() {
            this._selectCarAngle < 0 && this.nextCar(!0)
        }, e.prototype.onRightCar = function() {
            this._selectCarAngle > -20 * (a.GameDefine.CarShowMax - 1) && this.nextCar(!1)
        }, e.prototype.setCarIndex = function(t) {
            var e = this._carParent.transform.localRotationEuler.y,
                n = 0,
                i = function() {
                    for (var t = 0; t < a.GameDefine.CarShowMax; t++) {
                        var s = this._carParent.getChildAt(t);
                        s.transform.rotation = new Laya.Quaternion(0, 1, 0, 1), (n = -this._carParent.transform.position.z - s.transform.position.z) > 11.2 && (n = 11.2), s.transform.position = new Laya.Vector3(s.transform.position.x, Math.abs(.5 * t + .5 * e / 20), s.transform.position.z), s.transform.scale = new Laya.Vector3(this._scaleA - (n - 10.5) * this._scaleB, this._scaleA - (n - 10.5) * this._scaleB, this._scaleA - (n - 10.5) * this._scaleB), this._MaterialList[t].setColor(new Laya.Vector4(1, 1, 1, this._scaleA - (n - 10.5) * this._scaleB * 3))
                    }
                    e < this._selectCarAngle ? ((e += 2) >= this._selectCarAngle && (e = this._selectCarAngle, this._carParent.timer.clear(this, i), this.startRotaen()), this._carParent.transform.localRotationEuler = new Laya.Vector3(0, e, 0)) : e > this._selectCarAngle ? ((e -= 2) <= this._selectCarAngle && (e = this._selectCarAngle, this._carParent.timer.clear(this, i), this.startRotaen()), this._carParent.transform.localRotationEuler = new Laya.Vector3(0, e, 0)) : (this._carParent.timer.clear(this, i), this.startRotaen())
                };
            this._carParent.timer.loop(10, this, i)
        }, e.prototype.onLoop = function() {
            this._weiYanChange = !this._weiYanChange;
            for (var t = -Math.round(this._selectCarAngle / 20), e = 0; e < a.GameDefine.CarShowMax; e++) this._weiYanList[e] && this._weiYanList[e].transform && (e == t ? (this._weiYanList[e].active = !0, this._weiYanChange ? this._weiYanList[e].transform.localScale = new Laya.Vector3(1, 1, .2) : this._weiYanList[e].transform.localScale = new Laya.Vector3(1, 1, .3)) : this._weiYanList[e].active = !1);
            a.TipDialog.canCreateShortcut && 0 == a.TipDialog.homeScreenState && this._main.event(a.GameEvent.OPEN_TIP, 3), this.updateOnlineReward()
        }, e.prototype.onMouseDown = function() {
            Laya.stage.mouseY > 800 || (this._isTouch = !0, this._touchPosX = Laya.stage.mouseX, this._touchAngle = this._carParent.transform.localRotationEuler.y)
        }, e.prototype.onMouseUp = function() {
            if (!(Laya.stage.mouseY > 800) || this._isTouch) {
                this._isTouch = !1;
                var a = 20 * Math.round(this._selectCarAngle / 20);
                this._selectCarAngle = a, this.setCarIndex(1)
            }
        }, e.prototype.onMouseMove = function() {
            if (!(Laya.stage.mouseY > 800) && this._isTouch) {
                this.stopRotaen();
                var t = Laya.stage.mouseX - this._touchPosX,
                    e = 0;
                this._selectCarAngle = this._touchAngle + 20 * t / 300, this._selectCarAngle > 0 && (this._selectCarAngle = 0), this._selectCarAngle < -20 * (a.GameDefine.CarShowMax - 1) && (this._selectCarAngle = -20 * (a.GameDefine.CarShowMax - 1));
                for (var n = 0; n < a.GameDefine.CarShowMax; n++) {
                    var i = this._carParent.getChildAt(n);
                    i.transform.rotation = new Laya.Quaternion(0, 1, 0, 1), (e = -this._carParent.transform.position.z - i.transform.position.z) > 11.2 && (e = 11.2), i.transform.position = new Laya.Vector3(i.transform.position.x, Math.abs(.5 * n + .5 * this._selectCarAngle / 20), i.transform.position.z), i.transform.scale = new Laya.Vector3(this._scaleA - (e - 10.5) * this._scaleB, this._scaleA - (e - 10.5) * this._scaleB, this._scaleA - (e - 10.5) * this._scaleB), this._MaterialList[n].setColor(new Laya.Vector4(1, 1, 1, this._scaleA - (e - 10.5) * this._scaleB * 3))
                }
                this._carParent.transform.localRotationEuler = new Laya.Vector3(0, this._selectCarAngle, 0)
            }
        }, e.prototype.stopRotaen = function() {
            this._targetCar && this._targetCar.timer.clearAll(this._targetCar)
        }, e.prototype.startRotaen = function() {
            var t = this;
            this._targetCar && (this._targetCar.timer.clearAll(this._targetCar), this._targetCar = null);
            var e = Math.abs(Math.round(this._selectCarAngle / 20));
            a.GameData.instance.showSkinIndex = e, this.doUnlock(), this._targetCar = this._carList[e], this._targetCar.timer.loop(10, this._targetCar, function() {
                t._targetCar.transform.rotate(new Laya.Vector3(0, .5, 0), !0, !1), t._carGround.transform.rotate(new Laya.Vector3(0, .5, 0), !0, !1)
            })
        }, e.prototype.addStar = function() {
            var t = this,
                e = a.GameData.instance.star - GameBaseData.modelScore;
            this.shortStarNum.text = "" + e;
            for (var n = GameBaseData.getScoreToDW(e), i = 0; i < 6; i++) this.duanwei.getChildAt(i).visible = i == n;
            GameBaseData.modelScore > 0 && (this.shortStarNumTemp.visible = !0, this.shortStarNumTemp.text = "+" + GameBaseData.modelScore, this.shortStarNumTemp.y = 90, Laya.Tween.to(this.shortStarNumTemp, {
                y: 30
            }, 1e3, Laya.Ease.expoOut, Laya.Handler.create(this, function() {
                t.shortStarNumTemp.alpha = 1, Laya.Tween.to(t.shortStarNumTemp, {
                    alpha: 0
                }, 300, Laya.Ease.expoOut, Laya.Handler.create(t, function() {
                    t.shortStarNumTemp.visible = !1, GameBaseData.modelScore = 0, t.initTestRankData(), t.upDataRankUI(0 == t._RankType, !1, !1), t.shortStarNum.text = "" + (a.GameData.instance.star - GameBaseData.modelScore)
                }))
            })))
        }, e.prototype.doUnlock = function() {
            7 == a.GameData.instance.showSkinIndex ? a.GameData.instance.diamond < a.GameConfig.UNLOCK_CAR_CONFIG[a.GameData.instance.showSkinIndex] ? (this.btnStart.visible = !1, this.btnStart1.visible = !1, this.btnTry.visible = !0, this.btnTry1.visible = !0, this.boxUnlock.visible = !0, this.unlockStar.visible = !1, this.unlockDIa.visible = !0, this.unlockTxt.text = a.GameData.instance.diamond + "/" + a.GameConfig.UNLOCK_CAR_CONFIG[a.GameData.instance.showSkinIndex]) : (this.btnStart.visible = !0, this.btnStart1.visible = !0, this.btnTry.visible = !1, this.btnTry1.visible = !1, this.boxUnlock.visible = !1) : 5 == a.GameData.instance.showSkinIndex && 2 == a.GameData.instance.getLoginCar() ? (this.btnStart.visible = !0, this.btnStart1.visible = !0, this.btnTry.visible = !1, this.btnTry1.visible = !1, this.boxUnlock.visible = !1) : a.GameData.instance.star < a.GameConfig.UNLOCK_CAR_CONFIG[a.GameData.instance.showSkinIndex] ? (this.btnStart.visible = !1, this.btnStart1.visible = !1, this.btnTry.visible = !0, this.btnTry1.visible = !0, this.boxUnlock.visible = !0, this.unlockStar.visible = !0, this.unlockDIa.visible = !1, this.unlockTxt.text = a.GameData.instance.star + "/" + a.GameConfig.UNLOCK_CAR_CONFIG[a.GameData.instance.showSkinIndex]) : (this.btnStart.visible = !0, this.btnStart1.visible = !0, this.btnTry.visible = !1, this.btnTry1.visible = !1, this.boxUnlock.visible = !1), this.accLen.scaleX = -1, this.antLen.scaleX = -1, Laya.Tween.to(this.accLen, {
                scaleX: a.GameConfig.ACC_CAR_CONFIG[a.GameData.instance.showSkinIndex] / 10 - 1
            }, 1e3, Laya.Ease.expoOut, Laya.Handler.create(this, function() {})), Laya.Tween.to(this.antLen, {
                scaleX: a.GameConfig.ANT_CAR_CONFIG[a.GameData.instance.showSkinIndex] / 10 - 1
            }, 1e3, Laya.Ease.expoOut, Laya.Handler.create(this, function() {}))
        }, e.prototype.onAward = function() {
            this._main.event(a.GameEvent.OPEN_GIFT)
        }, e.prototype.destroy = function() {
            null != this.btnStart.clickHandler && (this.btnStart.clickHandler.recover(), this.btnStart.clickHandler = null), null != this.btnTry.clickHandler && (this.btnTry.clickHandler.recover(), this.btnTry.clickHandler = null), null != this.btnStart1.clickHandler && (this.btnStart1.clickHandler.recover(), this.btnStart1.clickHandler = null), null != this.btnTry1.clickHandler && (this.btnTry1.clickHandler.recover(), this.btnTry1.clickHandler = null), null != this.btnSettingOpen.clickHandler && (this.btnSettingOpen.clickHandler.recover(), this.btnSettingOpen.clickHandler = null), null != this.btnSettingClose.clickHandler && (this.btnSettingClose.clickHandler.recover(), this.btnSettingClose.clickHandler = null), null != this.rankWorld.clickHandler && (this.rankWorld.clickHandler.recover(), this.rankWorld.clickHandler = null), null != this.rankFriend.clickHandler && (this.rankFriend.clickHandler.recover(), this.rankFriend.clickHandler = null), null != this.btnShowMore.clickHandler && (this.btnShowMore.clickHandler.recover(), this.btnShowMore.clickHandler = null), null != this.btnShowLess.clickHandler && (this.btnShowLess.clickHandler.recover(), this.btnShowLess.clickHandler = null), null != this.tryOk.clickHandler && (this.tryOk.clickHandler.recover(), this.tryOk.clickHandler = null), null != this.tryBack.clickHandler && (this.tryBack.clickHandler.recover(), this.tryBack.clickHandler = null), null != this.btnAward.clickHandler && (this.btnAward.clickHandler.recover(), this.btnAward.clickHandler = null), this._main = null, this.destroy3d()
        }, e.prototype.destroy3d = function() {
            null != this._camera && (this._camera.destroy(), this._camera = null), null != this._scene && (Laya.stage.removeChild(this._scene), this._scene = null), null != this._bgView && (Laya.stage.removeChild(this._bgView), this._bgView.destroy(), this._bgView = null)
        }, e.prototype.onTryOk = function() {
            this.curMySelect = this.curTryChe, this.boxTry.visible = !1, this._watchVideoTry(GameBaseData.modelType)
        }, e.prototype.onTryBack = function() {
            console.log("onTryBack"), this.boxTry.visible = !1, this.curMySelect = a.GameData.instance.showSkinIndex, this._onLevelFB(GameBaseData.modelType)
        }, e.prototype.onStart1 = function() {
            GameBaseData.modelType = 1, a.GameData.instance.record < 1 ? a.Notice.show("Unlock after finish multi mode") : (0 == a.GameData.instance.record && (a.GameData.instance.record2 = 2), this.btnTry.visible ? (this.curMySelect = a.GameData.instance.showSkinIndex, this._watchVideoTry(1)) : GameBaseData.firstTimes > 1 && (a.GameData.instance.star < a.GameConfig.UNLOCK_CAR_CONFIG[6] || a.GameData.instance.diamond < a.GameConfig.UNLOCK_CAR_CONFIG[7]) ? (GameBaseData.firstTimes = -1, this.boxTry.visible = !0, this.curTryChe = 0 == a.MathUtil.randomInt(0, 1) ? 6 : 7, this.tryche7.visible = 6 == this.curTryChe, a.GameData.instance.star >= a.GameConfig.UNLOCK_CAR_CONFIG[6] && (this.tryche7.visible = !1), this.tryche8.visible = !this.tryche7.visible) : (this.curMySelect = a.GameData.instance.showSkinIndex, this._onLevelFB(1)))
        }, e.prototype.onStart = function() {
            GameBaseData.modelType = 0, 0 == a.GameData.instance.record && (a.GameData.instance.record2 = 2), this.btnTry.visible ? (this.curMySelect = a.GameData.instance.showSkinIndex, this._watchVideoTry(0)) : GameBaseData.firstTimes > 1 && (a.GameData.instance.star < a.GameConfig.UNLOCK_CAR_CONFIG[6] || a.GameData.instance.diamond < a.GameConfig.UNLOCK_CAR_CONFIG[7]) ? (GameBaseData.firstTimes = -1, this.boxTry.visible = !0, this.curTryChe = 0 == a.MathUtil.randomInt(0, 1) ? 6 : 7, this.tryche7.visible = 6 == this.curTryChe, a.GameData.instance.star >= a.GameConfig.UNLOCK_CAR_CONFIG[6] && (this.tryche7.visible = !1), this.tryche8.visible = !this.tryche7.visible) : (this.curMySelect = a.GameData.instance.showSkinIndex, this._onLevelFB(0))
        }, e.prototype._onLevelFB = function(t) {
            GameBaseData._selectCar = Math.floor(this.curMySelect), GameBaseData._selectSkin = 0, GameBaseData.modelType = t, 0 == t ? this._main.event(a.GameEvent.ENTER_GAME1) : this._main.event(a.GameEvent.ENTER_GAME2), GameBaseData.initGameLv(), GameBaseData.levelMax = 20, a.GameData.instance.record < 2 ? GameBaseData.levelMax = 50 : a.GameData.instance.record < 5 ? GameBaseData.levelMax = 40 : a.GameData.instance.record < 10 && (GameBaseData.levelMax = 30)
        }, e.prototype._watchVideoTry = function(a) {
            var t = this,
                e = GameBaseData.getVideoFlag(1);
            if (e < 0) return GameBaseData.FBEventCar(29), t._onLevelFB(a), void(GameBaseData.isDebug && console.log("无广告！"));
            GameBaseData.FBEventCar(6), e >= 10 ? GameBaseData.PlayCPGG2(function() {}, function() {
                GameBaseData.watchVideo = 1, GameBaseData.FBEventCar(9), t._onLevelFB(a)
            }, function() {
                GameBaseData.FBEventCar(10), t._onLevelFB(a)
            }, function() {
                GameBaseData.FBEventCar(10), t._onLevelFB(a)
            }) : GameBaseData.playVideo2(function() {
                GameBaseData.watchVideo = 1, GameBaseData.FBEventCar(7), t._onLevelFB(a)
            }, function() {
                GameBaseData.FBEventCar(8), t._onLevelFB(a)
            }, function() {
                GameBaseData.FBEventCar(8), t._onLevelFB(a)
            }, function() {})
        }, e.prototype.onOpenHelp = function() {
            this.helpView.visible = !0
        }, e.prototype.onCloseHelp = function() {
            this.helpView.visible = !1
        }, e.prototype.onShareInvite = function() {
            GameBaseData.FBEventCar(21), GameBaseData.FBShareFriend_startGame(function() {
                GameBaseData.gameOverTurnFriend(a.GameData.instance.star, "MULTI")
            }, function() {})
        }, e.prototype.onWorldRank = function() {
            this._main.event(a.GameEvent.OPEN_WORLD_RANK)
        }, e.prototype.onFriendRank = function() {
            this._main.event(a.GameEvent.OPEN_RANK)
        }, e.prototype.onRankWorld = function() {
            0 != this._RankType && this.setRankType(!0)
        }, e.prototype.onRankFriend = function() {
            1 != this._RankType && this.setRankType(!1)
        }, e.prototype.setRankType = function(a) {
            var t = this.rankWorld.getChildByName("off");
            t.visible = !a, (t = this.rankWorld.getChildByName("offL")).visible = !a, (t = this.rankWorld.getChildByName("on")).visible = a, (t = this.rankWorld.getChildByName("onL")).visible = a, (t = this.rankFriend.getChildByName("off")).visible = a, (t = this.rankFriend.getChildByName("offL")).visible = a, (t = this.rankFriend.getChildByName("on")).visible = !a, (t = this.rankFriend.getChildByName("onL")).visible = !a, this._RankType = a ? 0 : 1, this.upDataRankUI(a, this.shortRank.visible, !1), GameBaseData.isDebug && console.log(a, this.shortRank.visible)
        }, e.prototype.onShowRank = function() {
            var a = this;
            this.btnShowMore.visible ? (this.shortRank.visible = !1, Laya.Tween.to(this.boxRank, {
                bottom: this._boxRankBottom + 500
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                a.btnShowMore.visible = !1, a.btnShowLess.visible = !0, a.longRank.visible = !0, a.upDataRankUI(0 == a._RankType, !1, !1)
            }))) : (this.longRank.visible = !1, Laya.Tween.to(this.boxRank, {
                bottom: this._boxRankBottom
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                a.btnShowMore.visible = !0, a.btnShowLess.visible = !1, a.shortRank.visible = !0, a.upDataRankUI(0 == a._RankType, !0, !1)
            })))
        }, e.prototype.upDataRankUI = function(a, t, e) {
            var n = this;
            if (a) {
                if (e || null == GameBaseData.allRank || 0 == GameBaseData.allRank.length) {
                    return void GameBaseData.getRankList(0, function() {
                        n._datas = GameBaseData.allRank, n.shortRankList.array = new Array(n._datas.length), n.longRankList.array = new Array(n._datas.length), n.shortRankList.scrollTo(0), n.longRankList.scrollTo(0)
                    }, function() {})
                }
                this._datas = GameBaseData.allRank
            } else {
                if (e || null == GameBaseData.friendRank || 0 == GameBaseData.friendRank.length) {
                    return void GameBaseData.getFriendList(0, function() {
                        n._datas = GameBaseData.friendRank, n.shortRankList.array = new Array(n._datas.length), n.longRankList.array = new Array(n._datas.length), n.shortRankList.scrollTo(0), n.longRankList.scrollTo(0)
                    }, function() {})
                }
                this._datas = GameBaseData.friendRank
            }
            this.shortRankList.array = new Array(this._datas.length), this.longRankList.array = new Array(this._datas.length), this.shortRankList.scrollTo(0), this.longRankList.scrollTo(0), t || this.upDataMyRankUI(a)
        }, e.prototype.upDataMyRankUI = function(t) {
            var e = this,
                n = null;
            if (t) {
                if (null == GameBaseData.myRank) return void GameBaseData.getMyRank(function() {
                    e.upDataMyRankUI(!0)
                }, function() {});
                n = GameBaseData.myRank
            } else {
                if (null == GameBaseData.myRank_friend) return;
                n = GameBaseData.myRank_friend
            }
            this.myRank.rRank.text = "" + (n.rank + 1), this.myRank.rHead.skin = n.pic, this.myRank.rName.text = n.name, this.myRank.rScore.text = n.score, n.eData && n.eData.level && (this.myRank.rLevel.text = "level-" + n.eData.level, a.GameData.instance.record < parseInt(n.eData.level) - 2 && (a.GameData.instance.record = parseInt(n.eData.level) - 1), a.GameData.instance.star < parseInt(n.score) - 170 && (a.GameData.instance.star = parseInt(n.score)));
            for (var i = GameBaseData.getScoreToDW(n.score), s = 0; s < 6; s++) this.myRank.duanwei.getChildAt(s).visible = s == i;
            this.myRank.rankBtn.visible = 0 != this._RankType, this.myRank.rankPlay.visible = !1, !this.myRank.rankBtn.clickHandler && GameBaseData.myRank_friend && (this.myRank.rankBtn.clickHandler = Laya.Handler.create(this, this.onRankBtnPlay_rdata, [GameBaseData.myRank_friend], !1))
        }, e.prototype.onShortRankItem = function(a, t) {
            if (null != a && null != a && null != this._datas) {
                var e = this._datas[t];
                a.rHead.skin = null, a.rHead.skin = e.pic, a.rName.text = e.name, a.rScore.text = e.score
            }
        }, e.prototype.onLongRankItem = function(a, t) {
            if (null != a && null != a && null != this._datas) {
                var e = this._datas[t];
                a.rHead.skin = null, a.rHead.skin = e.pic, a.rName.text = e.name, a.rRank.text = "" + (e.rank + 1), a.rScore.text = e.score, e.eData && e.eData.level && (a.rLevel.text = "Level-" + e.eData.level);
                for (var n = GameBaseData.getScoreToDW(e.score), i = 0; i < 6; i++) a.duanwei.getChildAt(i).visible = i == n;
                (e.rank + 1) % 2 == 0 ? a.otherBg.visible = !0 : a.otherBg.visible = !1, a.rankBtn.clickHandler && a.rankBtn.clickHandler.recover(), a.rankBtn.clickHandler = Laya.Handler.create(this, this.onRankBtnPlay, [t], !1), a.rankBtn.visible = 0 != this._RankType, e.uuid == GameBaseData.UID ? (a.rankPlay.visible = !1, a.rankShare.visible = !0) : (a.rankPlay.visible = !0, a.rankShare.visible = !1)
            }
        }, e.prototype.onSetting = function() {
            0 == a.GameDefine.AI_COUNT || (a.GameData.instance.isMusicOn ? a.GameData.instance.isSoundOn = a.GameData.instance.isMusicOn = !1 : a.GameData.instance.isSoundOn = a.GameData.instance.isMusicOn = !0, this.btnSettingOpen.visible = a.GameData.instance.isMusicOn, this.btnSettingClose.visible = !this.btnSettingOpen.visible)
        }, e.prototype.onRankBtnPlay = function(a) {
            var t = this._datas[a];
            this.onRankBtnPlay_rdata(t)
        }, e.prototype.onRankBtnPlay_rdata = function(a) {
            if (GameBaseData.isDebug && console.log("排行榜点击"), a.uuid == GameBaseData.UID) {
                if (GameBaseData.isFBSDK) {
                    var t = {
                        contextType: 0,
                        contextID: null,
                        contextFromID: FBInstant.player.getID()
                    };
                    GameBaseData.FBShare(t, null), GameBaseData.FBEventCar(20)
                }
            } else {
                var e = this;
                GameBaseData.PKFriend(a.uuid, function() {
                    GameBaseData.FBEventCar(19), e._onLevelFB(0)
                })
            }
            GameBaseData.isDebug && console.log(a)
        }, e.prototype.updateOnlineReward = function() {
            this.btnAward.visible = !1, a.GameData.instance.record > 0 && (this.btnAward.visible = !0), this.imgAward.visible = !1;
            for (var t = a.GameData.instance.onlineIndex, e = 0; e < a.GameConfig.ONLINE_GIFT.length; e++) {
                var n = a.GameConfig.ONLINE_GIFT[e];
                if (!(n.index <= t)) {
                    n.time <= a.GameData.instance.onlineTime && (this.imgAward.visible = !0);
                    break
                }
            }
            a.GameData.instance.dailyVaild && (this.imgAward.visible = !0)
        }, e
    }(ui.IndexViewUI);
    a.IndexView = t
}(touch || (touch = {}));