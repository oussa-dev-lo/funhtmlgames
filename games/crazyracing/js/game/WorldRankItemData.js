var touch;
! function(t) {
    var n = function() {
        return function() {
            this.id = "", this.score = "", this.name = "", this.icon = "", this.rank = 0
        }
    }();
    t.WorldRankItemData = n
}(touch || (touch = {}));