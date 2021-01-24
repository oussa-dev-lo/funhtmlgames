var touch;
! function(e) {
    ! function(e) {
        e[e.WAIT = 0] = "WAIT", e[e.GAME = 1] = "GAME", e[e.GAME_OVER = 2] = "GAME_OVER"
    }(e.EGameState || (e.EGameState = {}));
    var a = function() {
        function e() {}
        return e.ACCELERATE_BLOCK = "AccelerateBlock", e.BOX = "Box", e.AI_COUNT = 5, e.DST_ANGLES = [new Laya.Vector4(-150, 0, 0, 0), new Laya.Vector4(150, 0, 0, 0), new Laya.Vector4(0, 150, 0, 0), new Laya.Vector4(0, -0, 0, 0), new Laya.Vector4(-150, 150, 0, 0), new Laya.Vector4(150, 150, 0, 0), new Laya.Vector4(-150, -0, 0, 0), new Laya.Vector4(150, -0, 0, 0)], e.BEND_TIMES = [1e4, 1e4, 7e3, 1e4, 11500, 1e4, 11500, 1e4], e.MAX_BOX_NUM = 25, e.MAX_ACCELERATE_BLOCL_NUM = 10, e.MAX_BUILD_NUM = 8, e.MAX_DEA_POINT_NUM = 10, e.FALL_BACK_LENGTH = 10, e.FORWARD_LENGTH = -40, e.REBORN_POS = 40, e.EndPointZ = -1200, e.CarShowMax = 8, e
    }();
    e.GameDefine = a
}(touch || (touch = {}));