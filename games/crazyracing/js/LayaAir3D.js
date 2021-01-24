var LayaAir3D = function() {
    function a() {
        this._resCount = 0, Laya3D.init(touch.Config.SCREEN_WIDTH, touch.Config.SCREEN_HEIGHT, !0), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, UIConfig.closeDialogOnSide = !1, touch.SoundManager.init(), Laya.loader.load(["res/atlas/core.atlas"], Laya.Handler.create(this, this.onAtlasLoadComplete)), Laya.loader.load(["res/atlas/index.atlas"], Laya.Handler.create(this, this.onAtlasLoadComplete)), Laya.loader.load(["res/atlas/game.atlas"], Laya.Handler.create(this, this.onAtlasLoadComplete)), Laya.loader.load(["res/atlas/head.atlas"], Laya.Handler.create(this, this.onAtlasLoadComplete));
        var a = new Laya.BitmapFont;
        a.loadFont("font/yahei.fnt", new Laya.Handler(this, this.onFontLoaded, ["yahei", a]));
        var e = new Laya.BitmapFont;
        e.loadFont("font/yaheib.fnt", new Laya.Handler(this, this.onFontLoaded, ["yaheib", e]))
    }
    return a.prototype.onAtlasLoadComplete = function(a) {
        a ? (this._resCount++, this.checkLoadedComplete()) : alert("资源加载失败！")
    }, a.prototype.onFontLoaded = function(a, e) {
        Laya.Text.registerBitmapFont(a, e), this._resCount++, this.checkLoadedComplete()
    }, a.prototype.checkLoadedComplete = function() {
        if (this._resCount >= 6) new touch.GameModule;
        else GameBaseData.isFBSDK && FBInstant.setLoadingProgress(Math.floor(20 * this._resCount / 5))
    }, a
}();
new LayaAir3D;