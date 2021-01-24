var touch;
! function(n) {
    var a = function() {
        function a() {}
        return a.init = function() {}, a.destory = function() {
            this._wx = null
        }, a.playMusic = function(a, u, o) {
            n.GameData.instance.isMusicOn && (this._bgPlaying = !0, Laya.SoundManager.stopMusic(), Laya.SoundManager.playMusic(a, u ? 0 : 1, o))
        }, a.stopMusic = function() {
            Laya.SoundManager.stopMusic(), this._bgPlaying = !1
        }, a.playSound = function(a) {
            n.GameData.instance.isSoundOn && Laya.SoundManager.playSound(a, 1)
        }, a.stopSound = function(n) {
            Laya.SoundManager.stopSound(n)
        }, a._wx = null, a._bgUrl = "", a._bgComplete = null, a._bgAudio = null, a._bgPlaying = !1, a._soundDic = new Laya.Dictionary, a._musicVolume = 1, a._soundVolume = 1, a
    }();
    n.SoundManager = a
}(touch || (touch = {}));