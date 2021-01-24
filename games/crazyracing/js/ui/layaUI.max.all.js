var ui, __extends = this && this.__extends || function() {
        var e = function(t, i) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                })(t, i)
        };
        return function(t, i) {
            function n() {
                this.constructor = t
            }
            e(t, i), t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;
! function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            View.regComponent("touch.Button", touch.Button), t.prototype.createChildren.call(this), this.createView(e.AwardDialogUI.uiView)
        }, i.uiView = {
            type: "Dialog",
            props: {
                width: 670,
                visible: !0,
                height: 900
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 670,
                    skin: "index/rank_bg.png",
                    sizeGrid: "64,25,68,22",
                    height: 688
                },
                compId: 2
            }, {
                type: "Label",
                props: {
                    y: 18,
                    x: -1,
                    width: 671,
                    text: "Award",
                    height: 56,
                    font: "yahei",
                    align: "center"
                },
                compId: 5
            }, {
                type: "Label",
                props: {
                    y: 85,
                    x: 86,
                    width: 132,
                    var: "tfDiamond",
                    text: "100",
                    height: 56,
                    font: "yaheib",
                    align: "left"
                },
                compId: 80
            }, {
                type: "Image",
                props: {
                    y: 89,
                    x: 27,
                    skin: "index/diamond.png"
                },
                compId: 81
            }, {
                type: "Box",
                props: {
                    y: 74,
                    x: 20,
                    width: 640,
                    height: 302
                },
                compId: 56,
                child: [{
                    type: "Image",
                    props: {
                        y: 268,
                        x: 638,
                        width: 641,
                        skin: "index/rank_2.png",
                        sizeGrid: "36,36,38,28",
                        rotation: 180,
                        height: 200
                    },
                    compId: 57
                }, {
                    type: "Image",
                    props: {
                        y: 169,
                        x: 130,
                        skin: "index/diamond.png",
                        scaleY: .6,
                        scaleX: .6
                    },
                    compId: 58
                }, {
                    type: "Image",
                    props: {
                        y: 213,
                        x: 12,
                        width: 614,
                        skin: "index/rank_1.png",
                        height: 50
                    },
                    compId: 86
                }, {
                    type: "Label",
                    props: {
                        y: 212,
                        x: 25,
                        width: 971,
                        valign: "middle",
                        text: "Get free diamonds for watch video.",
                        scaleY: .6,
                        scaleX: .6,
                        height: 74,
                        fontSize: 40,
                        font: "Microsoft YaHei",
                        color: "#c6d6e7",
                        bold: !0,
                        align: "left"
                    },
                    compId: 59
                }, {
                    type: "Label",
                    props: {
                        y: 173,
                        x: 168,
                        text: "X100",
                        scaleY: .5,
                        scaleX: .5,
                        font: "yahei"
                    },
                    compId: 60
                }, {
                    type: "Button",
                    props: {
                        y: 145,
                        x: 534,
                        width: 150,
                        visible: !1,
                        var: "btnAward00",
                        stateNum: 1,
                        skin: "index/qq_lvdi.png",
                        sizeGrid: "15,15,15,15",
                        runtime: "touch.Button",
                        pivotY: 25,
                        pivotX: 75,
                        height: 50
                    },
                    compId: 76,
                    child: [{
                        type: "Label",
                        props: {
                            y: 7,
                            x: 9,
                            width: 261,
                            valign: "middle",
                            text: "Get",
                            scaleY: .5,
                            scaleX: .5,
                            height: 74,
                            fontSize: 40,
                            font: "Microsoft YaHei",
                            bold: !0,
                            align: "center"
                        },
                        compId: 77
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 145,
                        x: 534,
                        width: 150,
                        visible: !1,
                        var: "btnAward0",
                        stateNum: 1,
                        skin: "index/qq_huidi.png",
                        sizeGrid: "15,15,15,15",
                        runtime: "touch.Button",
                        pivotY: 25,
                        pivotX: 75,
                        height: 50
                    },
                    compId: 61,
                    child: [{
                        type: "Label",
                        props: {
                            y: 7,
                            x: 9,
                            width: 261,
                            var: "txtAward0",
                            valign: "middle",
                            text: "Tomorrow",
                            scaleY: .5,
                            scaleX: .5,
                            height: 74,
                            fontSize: 40,
                            font: "Microsoft YaHei",
                            bold: !0,
                            align: "center"
                        },
                        compId: 62
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 106.5,
                        x: 25,
                        skin: "index/qq_video.png",
                        scaleY: 1.2,
                        scaleX: 1.2
                    },
                    compId: 63
                }, {
                    type: "Label",
                    props: {
                        y: 120,
                        x: 130,
                        text: "Watch video",
                        scaleY: .7,
                        scaleX: .7,
                        fontSize: 50,
                        font: "Microsoft YaHei",
                        color: "#c6d6e7",
                        bold: !0
                    },
                    compId: 64
                }]
            }, {
                type: "Box",
                props: {
                    y: 340,
                    x: 20,
                    width: 640,
                    height: 302
                },
                compId: 55,
                child: [{
                    type: "Image",
                    props: {
                        y: 276,
                        x: 638,
                        width: 641,
                        skin: "index/rank_2.png",
                        sizeGrid: "36,46,38,32",
                        rotation: 180,
                        height: 200
                    },
                    compId: 46
                }, {
                    type: "Image",
                    props: {
                        y: 162,
                        x: 128,
                        skin: "index/diamond.png",
                        scaleY: .6,
                        scaleX: .6
                    },
                    compId: 50
                }, {
                    type: "Image",
                    props: {
                        y: 219,
                        x: 12,
                        width: 614,
                        skin: "index/rank_1.png",
                        height: 50
                    },
                    compId: 85
                }, {
                    type: "Label",
                    props: {
                        y: 218,
                        x: 25,
                        width: 971,
                        valign: "middle",
                        text: "Get into the game every day.",
                        scaleY: .6,
                        scaleX: .6,
                        height: 74,
                        fontSize: 40,
                        font: "Microsoft YaHei",
                        color: "#c6d6e7",
                        bold: !0,
                        align: "left"
                    },
                    compId: 52
                }, {
                    type: "Label",
                    props: {
                        y: 169,
                        x: 165,
                        text: "X200",
                        scaleY: .5,
                        scaleX: .5,
                        font: "yahei"
                    },
                    compId: 51
                }, {
                    type: "Button",
                    props: {
                        y: 147,
                        x: 534,
                        width: 150,
                        visible: !1,
                        var: "btnAward11",
                        stateNum: 1,
                        skin: "index/qq_lvdi.png",
                        sizeGrid: "15,15,15,15",
                        runtime: "touch.Button",
                        pivotY: 25,
                        pivotX: 75,
                        height: 50
                    },
                    compId: 74,
                    child: [{
                        type: "Label",
                        props: {
                            y: 7,
                            x: 9,
                            width: 261,
                            valign: "middle",
                            text: "Get",
                            scaleY: .5,
                            scaleX: .5,
                            height: 74,
                            fontSize: 40,
                            font: "Microsoft YaHei",
                            bold: !0,
                            align: "center"
                        },
                        compId: 75
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 145,
                        x: 534,
                        width: 150,
                        visible: !1,
                        var: "btnAward1",
                        stateNum: 1,
                        skin: "index/qq_huidi.png",
                        sizeGrid: "15,15,15,15",
                        runtime: "touch.Button",
                        pivotY: 25,
                        pivotX: 75,
                        height: 50
                    },
                    compId: 53,
                    child: [{
                        type: "Label",
                        props: {
                            y: 7,
                            x: 9,
                            width: 261,
                            var: "txtAward1",
                            valign: "middle",
                            text: "Tomorrow",
                            scaleY: .5,
                            scaleX: .5,
                            height: 74,
                            fontSize: 40,
                            font: "Microsoft YaHei",
                            bold: !0,
                            align: "center"
                        },
                        compId: 54
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 108,
                        x: 25,
                        skin: "index/qq_signin.png",
                        scaleY: 1.2,
                        scaleX: 1.2
                    },
                    compId: 48
                }, {
                    type: "Label",
                    props: {
                        y: 120,
                        x: 130,
                        text: "Login game",
                        scaleY: .7,
                        scaleX: .7,
                        fontSize: 50,
                        font: "Microsoft YaHei",
                        color: "#c6d6e7",
                        bold: !0
                    },
                    compId: 49
                }, {
                    type: "Image",
                    props: {
                        y: 111,
                        x: 372,
                        var: "imgCar",
                        skin: "index/c6tip.png",
                        scaleY: 2,
                        scaleX: 2
                    },
                    compId: 87
                }]
            }, {
                type: "Box",
                props: {
                    y: 504,
                    x: 20,
                    width: 640,
                    visible: !1,
                    height: 302
                },
                compId: 65,
                child: [{
                    type: "Image",
                    props: {
                        y: 274,
                        x: 638,
                        width: 641,
                        skin: "index/rank_2.png",
                        sizeGrid: "36,46,38,26",
                        rotation: 180,
                        height: 200
                    },
                    compId: 66
                }, {
                    type: "Image",
                    props: {
                        y: 167.5,
                        x: 130,
                        skin: "index/diamond.png",
                        scaleY: .6,
                        scaleX: .6
                    },
                    compId: 67
                }, {
                    type: "Image",
                    props: {
                        y: 218,
                        x: 11,
                        width: 614,
                        skin: "index/rank_1.png",
                        height: 50
                    },
                    compId: 84
                }, {
                    type: "Label",
                    props: {
                        y: 216,
                        x: 25,
                        width: 971,
                        valign: "middle",
                        text: "Click to choose a friend and play game.",
                        scaleY: .6,
                        scaleX: .6,
                        height: 74,
                        fontSize: 40,
                        font: "Microsoft YaHei",
                        color: "#c6d6e7",
                        bold: !0,
                        align: "left"
                    },
                    compId: 68
                }, {
                    type: "Label",
                    props: {
                        y: 172,
                        x: 165,
                        text: "X100",
                        scaleY: .5,
                        scaleX: .5,
                        font: "yahei"
                    },
                    compId: 69
                }, {
                    type: "Button",
                    props: {
                        y: 145,
                        x: 534,
                        width: 150,
                        var: "btnAward22",
                        stateNum: 1,
                        skin: "index/qq_lvdi.png",
                        sizeGrid: "15,15,15,15",
                        runtime: "touch.Button",
                        pivotY: 25,
                        pivotX: 75,
                        height: 50
                    },
                    compId: 70,
                    child: [{
                        type: "Label",
                        props: {
                            y: 7,
                            x: 9,
                            width: 261,
                            var: "txtAward2",
                            valign: "middle",
                            text: "Get",
                            scaleY: .5,
                            scaleX: .5,
                            height: 74,
                            fontSize: 40,
                            font: "Microsoft YaHei",
                            bold: !0,
                            align: "center"
                        },
                        compId: 71
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 145,
                        x: 534,
                        width: 150,
                        visible: !1,
                        var: "btnAward2",
                        stateNum: 1,
                        skin: "index/qq_huidi.png",
                        sizeGrid: "15,15,15,15",
                        runtime: "touch.Button",
                        pivotY: 25,
                        pivotX: 75,
                        height: 50
                    },
                    compId: 78,
                    child: [{
                        type: "Label",
                        props: {
                            y: 7,
                            x: 9,
                            width: 261,
                            valign: "middle",
                            text: "Tomorrow",
                            scaleY: .5,
                            scaleX: .5,
                            height: 74,
                            fontSize: 40,
                            font: "Microsoft YaHei",
                            bold: !0,
                            align: "center"
                        },
                        compId: 79
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 105,
                        x: 25,
                        skin: "index/qq_friend.png",
                        scaleY: 1.2,
                        scaleX: 1.2
                    },
                    compId: 72
                }, {
                    type: "Label",
                    props: {
                        y: 120,
                        x: 130,
                        text: "Play with friend",
                        scaleY: .7,
                        scaleX: .7,
                        fontSize: 50,
                        font: "Microsoft YaHei",
                        color: "#c6d6e7",
                        bold: !0
                    },
                    compId: 73
                }]
            }, {
                type: "Button",
                props: {
                    y: 744,
                    x: 53.5,
                    width: 669,
                    visible: !0,
                    var: "btnClose",
                    stateNum: 3,
                    runtime: "touch.Button",
                    pivotY: 19,
                    pivotX: 56,
                    height: 62
                },
                compId: 4,
                child: [{
                    type: "Label",
                    props: {
                        y: 6,
                        x: 252.5,
                        text: "BACK",
                        scaleY: 1,
                        scaleX: 1,
                        fontSize: 40,
                        font: "yaheib",
                        bold: !0,
                        align: "center"
                    },
                    compId: 82
                }]
            }],
            loadList: ["index/rank_bg.png", "index/diamond.png", "index/rank_2.png", "index/rank_1.png", "index/qq_lvdi.png", "index/qq_huidi.png", "index/qq_video.png", "index/qq_signin.png", "index/c6tip.png", "index/qq_friend.png"],
            loadList3D: []
        }, i
    }(Dialog);
    e.AwardDialogUI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            View.regComponent("touch.Button", touch.Button), View.regComponent("ui.MenuRankItem2UI", e.MenuRankItem2UI), t.prototype.createChildren.call(this), this.createView(e.GameViewUI.uiView)
        }, i.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                fontSize: 35,
                bottom: 0
            },
            compId: 1,
            child: [{
                type: "Label",
                props: {
                    y: 363,
                    var: "tfScore",
                    text: "Top3",
                    scaleY: 1,
                    scaleX: 1,
                    pivotY: 30,
                    layoutEnabled: !0,
                    font: "yahei",
                    centerX: 0,
                    align: "center"
                },
                compId: 9
            }, {
                type: "Label",
                props: {
                    y: 171,
                    var: "tfLevel",
                    text: "1",
                    scaleY: 1,
                    scaleX: 1,
                    layoutEnabled: !0,
                    font: "yahei",
                    centerX: 0,
                    align: "center"
                },
                compId: 327
            }, {
                type: "Label",
                props: {
                    y: 83,
                    x: 269,
                    var: "tfL",
                    text: "Level:",
                    scaleY: 1.2,
                    scaleX: 1.2,
                    layoutEnabled: !0,
                    font: "yaheib",
                    centerX: 0,
                    align: "center"
                },
                compId: 329
            }, {
                type: "Label",
                props: {
                    y: 251,
                    x: 286,
                    var: "tfS",
                    text: "Goal:",
                    scaleY: 1.2,
                    scaleX: 1.2,
                    layoutEnabled: !0,
                    font: "yaheib",
                    centerX: 0,
                    align: "center"
                },
                compId: 328
            }, {
                type: "ProgressBar",
                props: {
                    y: 846.5,
                    x: 684,
                    width: 600,
                    var: "myProgress",
                    value: .8,
                    skin: "index/progress1.png",
                    sizeGrid: "15,12,11,28",
                    scaleY: 1,
                    scaleX: 1,
                    rotation: -90
                },
                compId: 288,
                child: [{
                    type: "Image",
                    props: {
                        y: -11,
                        x: 667,
                        width: 33,
                        skin: "index/p4.png",
                        scaleY: 1,
                        scaleX: 1.42,
                        rotation: 90,
                        height: 69
                    },
                    compId: 289
                }, {
                    type: "Image",
                    props: {
                        y: -10,
                        x: 0,
                        width: 28,
                        var: "myImage",
                        skin: "index/p3.png",
                        rotation: 90,
                        pivotY: 18,
                        pivotX: 16,
                        height: 37
                    },
                    compId: 290
                }]
            }, {
                type: "Box",
                props: {
                    var: "boxFinalScore",
                    top: -65,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 27,
                child: [{
                    type: "Image",
                    props: {
                        top: -2,
                        skin: "core/black_mask.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        sizeGrid: "10,10,10,10"
                    },
                    compId: 28
                }, {
                    type: "Box",
                    props: {
                        y: -1,
                        x: 0,
                        width: 749,
                        visible: !0,
                        var: "NextBox",
                        height: 1334
                    },
                    compId: 231,
                    child: [{
                        type: "Box",
                        props: {
                            y: 0,
                            x: 0,
                            visible: !0,
                            var: "boxTop"
                        },
                        compId: 356,
                        child: [{
                            type: "Image",
                            props: {
                                y: 658,
                                x: 284,
                                var: "rank1",
                                skin: "game/f1_0.png",
                                pivotY: 242
                            },
                            compId: 292
                        }, {
                            type: "Image",
                            props: {
                                y: 658,
                                x: 143,
                                var: "rank2",
                                skin: "game/f1_1.png",
                                pivotY: 188
                            },
                            compId: 324
                        }, {
                            type: "Image",
                            props: {
                                y: 656,
                                x: 460,
                                var: "rank3",
                                skin: "game/f1_2.png",
                                pivotY: 131
                            },
                            compId: 323
                        }, {
                            type: "Box",
                            props: {
                                y: 327,
                                x: 166,
                                var: "boxRank"
                            },
                            compId: 291,
                            child: [{
                                type: "Image",
                                props: {
                                    y: -165,
                                    x: 146.5,
                                    var: "rankHG",
                                    skin: "game/f1_3.png"
                                },
                                compId: 325
                            }, {
                                type: "Box",
                                props: {
                                    y: -50,
                                    x: 162,
                                    var: "rankHGHead",
                                    scaleY: 1.2,
                                    scaleX: 1.2,
                                    name: "box0"
                                },
                                compId: 313,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 2,
                                        x: 6,
                                        width: 73,
                                        name: "rankImage",
                                        height: 73
                                    },
                                    compId: 314
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 4,
                                        width: 77,
                                        skin: "index/img_player_frame.png",
                                        height: 77
                                    },
                                    compId: 315
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 97.68,
                                        x: 42,
                                        wordWrap: !0,
                                        width: 372,
                                        valign: "middle",
                                        text: "123111",
                                        scaleY: .53,
                                        scaleX: .5,
                                        pivotY: 28,
                                        pivotX: 186,
                                        name: "rankName",
                                        height: 56,
                                        fontSize: 40,
                                        color: "#f5ff05",
                                        align: "center"
                                    },
                                    compId: 316
                                }]
                            }, {
                                type: "Box",
                                props: {
                                    y: 21.97999999999999,
                                    x: 7,
                                    name: "box1"
                                },
                                compId: 308,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 2,
                                        x: 2,
                                        width: 73,
                                        name: "rankImage",
                                        height: 73
                                    },
                                    compId: 309
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        skin: "index/img_player_frame.png",
                                        scaleY: .5,
                                        scaleX: .5
                                    },
                                    compId: 310
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 88,
                                        x: -41,
                                        wordWrap: !0,
                                        width: 322,
                                        valign: "middle",
                                        text: "456aaaaaaa",
                                        scaleY: .53,
                                        scaleX: .5,
                                        name: "rankName",
                                        height: 56,
                                        fontSize: 40,
                                        color: "#7adaec",
                                        align: "center"
                                    },
                                    compId: 312
                                }]
                            }, {
                                type: "Box",
                                props: {
                                    y: 79.32,
                                    x: 330,
                                    name: "box2"
                                },
                                compId: 317,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 2,
                                        x: 2,
                                        width: 73,
                                        name: "rankImage",
                                        height: 73
                                    },
                                    compId: 318
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        skin: "index/img_player_frame.png",
                                        scaleY: .5,
                                        scaleX: .5
                                    },
                                    compId: 319
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 88,
                                        x: -36,
                                        wordWrap: !0,
                                        width: 307,
                                        valign: "middle",
                                        text: "789",
                                        scaleY: .53,
                                        scaleX: .5,
                                        name: "rankName",
                                        height: 56,
                                        fontSize: 40,
                                        color: "#e26037",
                                        align: "center"
                                    },
                                    compId: 320
                                }]
                            }]
                        }, {
                            type: "Label",
                            props: {
                                y: 728,
                                x: 123,
                                width: 245,
                                var: "tfRank",
                                text: "5th",
                                scaleY: 2,
                                scaleX: 2,
                                height: 56,
                                font: "yaheib",
                                align: "center"
                            },
                            compId: 345
                        }, {
                            type: "Image",
                            props: {
                                y: 661,
                                x: 328,
                                width: 37,
                                skin: "index/pk_jinx.png",
                                height: 34
                            },
                            compId: 379
                        }, {
                            type: "Label",
                            props: {
                                y: 670,
                                x: 359,
                                text: "+60",
                                scaleY: .5,
                                scaleX: .5,
                                font: "yaheib"
                            },
                            compId: 380
                        }, {
                            type: "Image",
                            props: {
                                y: 658,
                                x: 162,
                                width: 37,
                                skin: "index/pk_jinx.png",
                                height: 34
                            },
                            compId: 376
                        }, {
                            type: "Label",
                            props: {
                                y: 667,
                                x: 193,
                                text: "+50",
                                scaleY: .5,
                                scaleX: .5,
                                font: "yaheib"
                            },
                            compId: 375
                        }, {
                            type: "Image",
                            props: {
                                y: 658,
                                x: 484,
                                width: 37,
                                skin: "index/pk_jinx.png",
                                height: 34
                            },
                            compId: 377
                        }, {
                            type: "Label",
                            props: {
                                y: 667,
                                x: 512,
                                text: "+40",
                                scaleY: .5,
                                scaleX: .5,
                                font: "yaheib"
                            },
                            compId: 378
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 0,
                            x: 0,
                            width: 751,
                            var: "boxContinue",
                            pivotY: -90,
                            pivotX: -50,
                            height: 1210
                        },
                        compId: 326,
                        child: [{
                            type: "Image",
                            props: {
                                y: 760,
                                x: -49,
                                skin: "game/f2.jpg"
                            },
                            compId: 321
                        }, {
                            type: "Image",
                            props: {
                                y: 819.5,
                                x: 14,
                                var: "cheLock",
                                skin: "index/c2.png",
                                scaleY: 1.2,
                                scaleX: 1.2
                            },
                            compId: 370
                        }, {
                            type: "Image",
                            props: {
                                y: 768,
                                x: 89,
                                var: "imgSuo",
                                skin: "index/lock.png",
                                scaleY: .8,
                                scaleX: .8
                            },
                            compId: 374
                        }, {
                            type: "Image",
                            props: {
                                y: 842,
                                x: 202,
                                width: 62,
                                visible: !1,
                                var: "IBest",
                                skin: "index/pk_jinx.png",
                                height: 58
                            },
                            compId: 322
                        }, {
                            type: "Label",
                            props: {
                                y: 869,
                                x: 317.5,
                                width: 116,
                                visible: !1,
                                var: "tfBestScore1",
                                valign: "bottom",
                                text: "60",
                                pivotY: 23,
                                pivotX: 100,
                                height: 46,
                                fontSize: 35,
                                font: "Microsoft YaHei",
                                color: "#ec6004",
                                bold: !0,
                                align: "right"
                            },
                            compId: 369
                        }, {
                            type: "Label",
                            props: {
                                y: 874,
                                x: 338,
                                width: 116,
                                visible: !1,
                                var: "tfBestScore2",
                                valign: "bottom",
                                text: "/100",
                                pivotY: 28,
                                height: 46,
                                fontSize: 35,
                                font: "Microsoft YaHei",
                                color: "#ffffff",
                                align: "left"
                            },
                            compId: 66
                        }, {
                            type: "Button",
                            props: {
                                width: 150,
                                visible: !1,
                                var: "btnOnlineReward",
                                stateNum: 1,
                                skin: "game/f3.png",
                                runtime: "touch.Button",
                                pivotY: 51,
                                pivotX: 51,
                                height: 150,
                                centerY: 269,
                                centerX: 199
                            },
                            compId: 68
                        }, {
                            type: "Button",
                            props: {
                                width: 324,
                                var: "btnBack",
                                top: 1010,
                                stateNum: 1,
                                skin: "index/btn_common5.png",
                                runtime: "touch.Button",
                                pivotY: 50,
                                pivotX: 162,
                                height: 100,
                                centerX: -50
                            },
                            compId: 29,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 0,
                                    x: 2,
                                    width: 321,
                                    valign: "middle",
                                    text: "Continue",
                                    scaleY: 1,
                                    scaleX: 1,
                                    height: 96,
                                    font: "yahei",
                                    align: "center"
                                },
                                compId: 247
                            }]
                        }, {
                            type: "Button",
                            props: {
                                width: 398,
                                var: "btnInvite",
                                top: 1133,
                                stateNum: 1,
                                skin: "index/btn_common4.png",
                                sizeGrid: "25,9,25,11",
                                runtime: "touch.Button",
                                pivotY: 50,
                                pivotX: 200,
                                height: 100,
                                centerX: -51
                            },
                            compId: 367,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 495,
                                    valign: "middle",
                                    text: "Play with friend",
                                    scaleY: .8,
                                    scaleX: .8,
                                    height: 118,
                                    font: "yahei",
                                    align: "center"
                                },
                                compId: 368
                            }]
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 783,
                            x: 416,
                            width: 327,
                            visible: !1,
                            var: "boxScore",
                            pivotY: -10,
                            pivotX: 163,
                            height: 123
                        },
                        compId: 371,
                        child: [{
                            type: "Image",
                            props: {
                                skin: "index/pk_jinx.png"
                            },
                            compId: 372,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 61.5,
                                    x: 131,
                                    var: "tfBestScore",
                                    text: "+10",
                                    font: "yaheib"
                                },
                                compId: 373
                            }]
                        }]
                    }, {
                        type: "Button",
                        props: {
                            visible: !1,
                            var: "btnShare",
                            stateNum: 1,
                            skin: "index/btn_share.png",
                            runtime: "touch.Button",
                            centerY: -392,
                            centerX: 305
                        },
                        compId: 284,
                        child: [{
                            type: "Label",
                            props: {
                                y: 119,
                                x: -48,
                                width: 240,
                                visible: !1,
                                valign: "middle",
                                text: "00:00:00",
                                scaleY: .9,
                                scaleX: .9,
                                font: "yahei",
                                color: "#ffffff",
                                align: "center"
                            },
                            compId: 286
                        }, {
                            type: "Image",
                            props: {
                                y: 5,
                                x: 5,
                                visible: !1,
                                var: "imgAward",
                                skin: "index/qq_i_2.png"
                            },
                            compId: 287
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 758,
                            x: 225,
                            width: 300,
                            visible: !0,
                            var: "btnAllRank",
                            stateNum: 1,
                            runtime: "touch.Button",
                            height: 100,
                            centerX: 0
                        },
                        compId: 459,
                        child: [{
                            type: "Label",
                            props: {
                                y: 31,
                                x: 55,
                                width: 245,
                                var: "toAllRank",
                                text: "All Ranking>>",
                                scaleY: .85,
                                scaleX: .8,
                                height: 56,
                                font: "yaheib",
                                align: "center"
                            },
                            compId: 452
                        }]
                    }, {
                        type: "Box",
                        props: {
                            width: 749,
                            var: "singleMode",
                            height: 1334
                        },
                        compId: 408,
                        child: [{
                            type: "Label",
                            props: {
                                y: 682,
                                x: 0,
                                width: 500,
                                var: "tfFinalScore",
                                valign: "middle",
                                text: "5000",
                                scaleY: 1.5,
                                scaleX: 1.5,
                                font: "yaheib",
                                align: "center"
                            },
                            compId: 405
                        }, {
                            type: "Label",
                            props: {
                                y: 125,
                                x: 386,
                                width: 600,
                                var: "tfFinalScore1",
                                valign: "middle",
                                text: "Best record:0",
                                pivotY: 28,
                                pivotX: 300,
                                height: 60,
                                font: "yaheib",
                                align: "center"
                            },
                            compId: 406
                        }, {
                            type: "Label",
                            props: {
                                y: 93,
                                x: 33,
                                var: "tfFinalScore2",
                                valign: "middle",
                                text: "Congratulation",
                                scaleY: 1.5,
                                scaleX: 1.5,
                                font: "yaheib",
                                align: "center"
                            },
                            compId: 407
                        }, {
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                visible: !0,
                                var: "singleBoxTop"
                            },
                            compId: 434,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 658,
                                    x: 284,
                                    var: "singleRank1",
                                    skin: "game/f1_0.png",
                                    pivotY: 242
                                },
                                compId: 435
                            }, {
                                type: "Image",
                                props: {
                                    y: 658,
                                    x: 143,
                                    var: "singleRank2",
                                    skin: "game/f1_1.png",
                                    pivotY: 188
                                },
                                compId: 436
                            }, {
                                type: "Image",
                                props: {
                                    y: 656,
                                    x: 460,
                                    var: "singleRank3",
                                    skin: "game/f1_2.png",
                                    pivotY: 131
                                },
                                compId: 437
                            }, {
                                type: "Box",
                                props: {
                                    y: 327,
                                    x: 166,
                                    var: "singleRank"
                                },
                                compId: 438,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: -165,
                                        x: 146.5,
                                        var: "singleRankHG",
                                        skin: "game/f1_3.png"
                                    },
                                    compId: 439
                                }, {
                                    type: "Box",
                                    props: {
                                        y: -50,
                                        x: 162,
                                        scaleY: 1.2,
                                        scaleX: 1.2,
                                        name: "box0"
                                    },
                                    compId: 440,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            y: 2,
                                            x: 6,
                                            width: 73,
                                            name: "rankImage",
                                            height: 73
                                        },
                                        compId: 441
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 4,
                                            width: 77,
                                            skin: "index/img_player_frame.png",
                                            height: 77
                                        },
                                        compId: 442
                                    }, {
                                        type: "Label",
                                        props: {
                                            y: 97.68,
                                            x: 42,
                                            wordWrap: !0,
                                            width: 372,
                                            valign: "middle",
                                            text: "123111",
                                            scaleY: .53,
                                            scaleX: .5,
                                            pivotY: 28,
                                            pivotX: 186,
                                            name: "rankName",
                                            height: 56,
                                            fontSize: 40,
                                            color: "#f5ff05",
                                            align: "center"
                                        },
                                        compId: 443
                                    }]
                                }, {
                                    type: "Box",
                                    props: {
                                        y: 21.97999999999999,
                                        x: 7,
                                        name: "box1"
                                    },
                                    compId: 444,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            y: 2,
                                            x: 2,
                                            width: 73,
                                            name: "rankImage",
                                            height: 73
                                        },
                                        compId: 445
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            skin: "index/img_player_frame.png",
                                            scaleY: .5,
                                            scaleX: .5
                                        },
                                        compId: 446
                                    }, {
                                        type: "Label",
                                        props: {
                                            y: 88,
                                            x: -41,
                                            wordWrap: !0,
                                            width: 322,
                                            valign: "middle",
                                            text: "456aaaaaaa",
                                            scaleY: .53,
                                            scaleX: .5,
                                            name: "rankName",
                                            height: 56,
                                            fontSize: 40,
                                            color: "#7adaec",
                                            align: "center"
                                        },
                                        compId: 447
                                    }]
                                }, {
                                    type: "Box",
                                    props: {
                                        y: 79.32,
                                        x: 330,
                                        name: "box2"
                                    },
                                    compId: 448,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            y: 2,
                                            x: 2,
                                            width: 73,
                                            name: "rankImage",
                                            height: 73
                                        },
                                        compId: 449
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            skin: "index/img_player_frame.png",
                                            scaleY: .5,
                                            scaleX: .5
                                        },
                                        compId: 450
                                    }, {
                                        type: "Label",
                                        props: {
                                            y: 88,
                                            x: -36,
                                            wordWrap: !0,
                                            width: 307,
                                            valign: "middle",
                                            text: "789",
                                            scaleY: .53,
                                            scaleX: .5,
                                            name: "rankName",
                                            height: 56,
                                            fontSize: 40,
                                            color: "#e26037",
                                            align: "center"
                                        },
                                        compId: 451
                                    }]
                                }]
                            }]
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        width: 750,
                        visible: !1,
                        var: "OS_Menu",
                        height: 1334
                    },
                    compId: 204,
                    child: [{
                        type: "Image",
                        props: {
                            y: 511,
                            x: 32,
                            width: 686,
                            skin: "core/bg_grid.png",
                            height: 420,
                            sizeGrid: "60,60,60,60"
                        },
                        compId: 205
                    }, {
                        type: "Image",
                        props: {
                            y: 641,
                            x: 63,
                            width: 191,
                            var: "OS_Menu_Head",
                            skin: "index/img_player_frame.png",
                            name: "imgHead",
                            height: 176
                        },
                        compId: 220
                    }, {
                        type: "Button",
                        props: {
                            y: 1161,
                            x: 222,
                            width: 308,
                            var: "OS_Menu_Close",
                            stateNum: 1,
                            runtime: "touch.Button",
                            height: 100
                        },
                        compId: 207,
                        child: [{
                            type: "Label",
                            props: {
                                y: 0,
                                x: 2,
                                width: 308,
                                text: "NO THANKS",
                                scaleY: 1,
                                scaleX: 1,
                                height: 96,
                                font: "yahei",
                                align: "center"
                            },
                            compId: 246
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 546,
                            x: 36,
                            width: 677,
                            var: "OS_Menu_bg",
                            height: 354
                        },
                        compId: 213
                    }, {
                        type: "Button",
                        props: {
                            width: 378,
                            visible: !0,
                            var: "OS_Menu_Share",
                            stateNum: 1,
                            skin: "index/btn_common5.png",
                            sizeGrid: "35,21,35,20",
                            runtime: "touch.Button",
                            pivotY: 59,
                            pivotX: 189,
                            height: 117,
                            centerY: 414,
                            centerX: -3
                        },
                        compId: 218,
                        child: [{
                            type: "Label",
                            props: {
                                y: 30.5,
                                x: 5,
                                width: 373,
                                text: "SHARE",
                                scaleY: 1,
                                scaleX: 1,
                                height: 56,
                                font: "yahei",
                                align: "center"
                            },
                            compId: 219
                        }]
                    }, {
                        type: "Label",
                        props: {
                            y: 554,
                            x: 87,
                            width: 580,
                            var: "OS_Menu_top",
                            valign: "middle",
                            text: "LEVEL MODEL",
                            stroke: 0,
                            height: 56,
                            fontSize: 56,
                            font: "Microsoft YaHei",
                            color: "#000000",
                            bold: !0,
                            align: "center"
                        },
                        compId: 223,
                        child: [{
                            type: "Label",
                            props: {
                                y: -5,
                                x: -3,
                                width: 580,
                                var: "OS_Menu_topB",
                                valign: "middle",
                                text: "LEVEL MODEL",
                                stroke: 0,
                                height: 56,
                                fontSize: 56,
                                font: "Microsoft YaHei",
                                color: "#ffffff",
                                bold: !0,
                                align: "center"
                            },
                            compId: 224
                        }]
                    }, {
                        type: "Label",
                        props: {
                            y: 692.5,
                            x: 130,
                            width: 580,
                            var: "OS_Menu_Score",
                            valign: "middle",
                            text: "4",
                            stroke: 0,
                            scaleY: 1.5,
                            scaleX: 1.5,
                            height: 56,
                            fontSize: 40,
                            font: "Microsoft YaHei",
                            color: "#000000",
                            bold: !0,
                            align: "center"
                        },
                        compId: 225,
                        child: [{
                            type: "Label",
                            props: {
                                y: -2,
                                x: -3,
                                width: 580,
                                var: "OS_Menu_ScoreB",
                                valign: "middle",
                                text: "4",
                                stroke: 0,
                                height: 56,
                                fontSize: 40,
                                font: "Microsoft YaHei",
                                color: "#ffffff",
                                bold: !0,
                                align: "center"
                            },
                            compId: 226
                        }]
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    width: 750,
                    var: "boxGuide",
                    height: 470,
                    centerY: 203,
                    centerX: 0
                },
                compId: 33,
                child: [{
                    type: "Image",
                    props: {
                        y: -196,
                        x: 0,
                        skin: "game/guide_bg.png"
                    },
                    compId: 31
                }, {
                    type: "Image",
                    props: {
                        skin: "game/arrow.png",
                        centerY: 101,
                        centerX: 200
                    },
                    compId: 50
                }, {
                    type: "Image",
                    props: {
                        skin: "game/arrow.png",
                        scaleX: -1,
                        centerY: 102,
                        centerX: -200
                    },
                    compId: 51
                }, {
                    type: "Image",
                    props: {
                        y: 61,
                        x: 263,
                        skin: "game/go.png"
                    },
                    compId: 52,
                    child: [{
                        type: "Image",
                        props: {
                            y: 98,
                            x: -16,
                            skin: "game/forword.png"
                        },
                        compId: 82
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 322,
                        x: 180,
                        skin: "game/finger.png"
                    },
                    compId: 32
                }]
            }, {
                type: "Box",
                props: {
                    y: -3,
                    x: 0,
                    width: 750,
                    visible: !1,
                    var: "boxTip",
                    height: 1334
                },
                compId: 249,
                child: [{
                    type: "Image",
                    props: {
                        y: 373,
                        x: 550,
                        width: 200,
                        skin: "index/tips_bg_gird.png",
                        sizeGrid: "30,30,30,30",
                        height: 80
                    },
                    compId: 250
                }, {
                    type: "Image",
                    props: {
                        y: 384,
                        x: 561,
                        width: 60,
                        var: "imgTip",
                        skin: "index/p3.png",
                        name: "imgHead",
                        height: 60
                    },
                    compId: 251
                }, {
                    type: "Image",
                    props: {
                        y: 359,
                        x: 543,
                        skin: "index/qq_i_2.png"
                    },
                    compId: 254
                }, {
                    type: "Label",
                    props: {
                        y: 392,
                        x: 621,
                        width: 166,
                        valign: "middle",
                        text: "UnLock",
                        stroke: 0,
                        scaleY: .7,
                        scaleX: .7,
                        height: 56,
                        fontSize: 56,
                        font: "yahei",
                        color: "#000000",
                        bold: !0,
                        align: "center"
                    },
                    compId: 257
                }]
            }, {
                type: "Box",
                props: {
                    var: "biao",
                    top: 124,
                    scaleY: 1,
                    scaleX: 1,
                    left: 0
                },
                compId: 346,
                child: [{
                    type: "Image",
                    props: {
                        y: 145.7661868335669,
                        x: 132,
                        var: "biao_tiao1",
                        skin: "index/biao_tiao1.png",
                        pivotY: 7
                    },
                    compId: 352
                }, {
                    type: "Image",
                    props: {
                        y: 142.7661868335669,
                        x: 133,
                        width: 0,
                        visible: !0,
                        var: "biao_tiao3",
                        skin: "index/biao_tiao3.png"
                    },
                    compId: 354
                }, {
                    type: "Image",
                    props: {
                        y: 142.7661868335669,
                        x: 134,
                        width: 0,
                        visible: !0,
                        var: "biao_tiao4",
                        skin: "index/biao_tiao4.png"
                    },
                    compId: 357
                }, {
                    type: "Image",
                    props: {
                        y: 141.7661868335669,
                        x: 130,
                        var: "biao_tiao2",
                        skin: "index/biao_tiao2.png"
                    },
                    compId: 353
                }, {
                    type: "Image",
                    props: {
                        y: 131,
                        x: 324,
                        skin: "index/biao_ping.png",
                        rotation: -10
                    },
                    compId: 358
                }, {
                    type: "Image",
                    props: {
                        skin: "index/biao_pan.png"
                    },
                    compId: 349
                }, {
                    type: "Image",
                    props: {
                        y: 96,
                        x: 101,
                        width: 22,
                        var: "biao_zhen",
                        skin: "index/biao_zhen.png",
                        pivotY: 71,
                        pivotX: 11,
                        height: 83
                    },
                    compId: 350
                }, {
                    type: "Label",
                    props: {
                        y: 161,
                        x: 101,
                        width: 126,
                        var: "biao_speed",
                        valign: "middle",
                        text: "0",
                        scaleY: .5,
                        scaleX: .5,
                        pivotY: 28,
                        pivotX: 63,
                        height: 56,
                        font: "yaheib",
                        color: "#ffffff",
                        align: "center"
                    },
                    compId: 351
                }]
            }, {
                type: "Image",
                props: {
                    y: 62,
                    x: 66,
                    width: 131,
                    var: "testEff",
                    skin: "index/pk_jinx.png",
                    pivotY: 62,
                    pivotX: 66,
                    height: 123
                },
                compId: 363
            }, {
                type: "Image",
                props: {
                    y: 62,
                    x: 61,
                    width: 122,
                    visible: !1,
                    var: "N2oEff",
                    skin: "index/SF4_dds_0187.png",
                    pivotY: 62,
                    pivotX: 61,
                    height: 123
                },
                compId: 365
            }, {
                type: "Image",
                props: {
                    width: 750,
                    visible: !1,
                    var: "spEff",
                    skin: "index/eff_sp.png",
                    pivotY: 594,
                    pivotX: 375,
                    height: 1188,
                    centerY: 143,
                    centerX: 0
                },
                compId: 366
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    name: "eff"
                },
                compId: 364
            }, {
                type: "Box",
                props: {
                    visible: !1,
                    var: "unlockCar",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 381,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        top: -2,
                        skin: "core/black_mask.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        sizeGrid: "10,10,10,10"
                    },
                    compId: 382
                }, {
                    type: "Image",
                    props: {
                        y: 694,
                        x: 375,
                        width: 200,
                        visible: !1,
                        var: "uc_guang",
                        skin: "index/guang.png",
                        scaleY: 2,
                        scaleX: 2,
                        pivotY: 100,
                        pivotX: 100,
                        height: 200
                    },
                    compId: 383
                }, {
                    type: "Image",
                    props: {
                        y: 694,
                        x: 375,
                        width: 150,
                        visible: !1,
                        var: "uc_car",
                        skin: "index/c2.png",
                        pivotY: 55,
                        pivotX: 75,
                        height: 109
                    },
                    compId: 384
                }, {
                    type: "Button",
                    props: {
                        y: 1056,
                        width: 752,
                        visible: !1,
                        var: "uc_nothanks",
                        stateNum: 1,
                        runtime: "touch.Button",
                        pivotY: 820,
                        pivotX: 375,
                        height: 1043,
                        centerX: 0
                    },
                    compId: 388,
                    child: [{
                        type: "Label",
                        props: {
                            y: 930,
                            x: 216,
                            width: 401,
                            valign: "middle",
                            text: "No thanks",
                            scaleY: .8,
                            scaleX: .8,
                            height: 96,
                            font: "yaheib",
                            color: "#ffffff",
                            align: "center"
                        },
                        compId: 389
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 1082,
                        width: 324,
                        visible: !1,
                        var: "uc_share",
                        stateNum: 1,
                        skin: "index/btn_common5.png",
                        runtime: "touch.Button",
                        pivotY: 50,
                        pivotX: 162,
                        height: 100,
                        centerX: 0
                    },
                    compId: 385,
                    child: [{
                        type: "Label",
                        props: {
                            y: 0,
                            x: 2,
                            width: 321,
                            valign: "middle",
                            text: "Share",
                            scaleY: 1,
                            scaleX: 1,
                            height: 96,
                            font: "yahei",
                            align: "center"
                        },
                        compId: 386
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 653,
                        x: 380,
                        width: 1,
                        var: "uc_lock",
                        rotation: 0,
                        pivotY: 0,
                        pivotX: 0,
                        height: 1
                    },
                    compId: 390
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !1,
                    var: "boxRevive",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 393,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        top: -2,
                        skin: "core/black_mask.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        sizeGrid: "10,10,10,10"
                    },
                    compId: 394
                }, {
                    type: "Button",
                    props: {
                        y: 981,
                        x: 375,
                        width: 296,
                        visible: !0,
                        var: "btnClose",
                        stateNum: 1,
                        skin: "comp/button.png",
                        runtime: "touch.Button",
                        height: 100,
                        centerY: 314,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 395,
                    child: [{
                        type: "Label",
                        props: {
                            y: 0,
                            x: 2,
                            width: 308,
                            text: "NO THANKS",
                            scaleY: 1,
                            scaleX: 1,
                            height: 96,
                            font: "yaheib",
                            align: "center"
                        },
                        compId: 396
                    }]
                }, {
                    type: "Label",
                    props: {
                        width: 200,
                        var: "tfReviveCountdown",
                        text: "10",
                        scaleY: 2.5,
                        scaleX: 2.5,
                        font: "yaheib",
                        centerY: -59,
                        centerX: 8,
                        align: "center"
                    },
                    compId: 397
                }, {
                    type: "Button",
                    props: {
                        width: 394,
                        visible: !0,
                        var: "btnWatchVideo",
                        stateNum: 1,
                        skin: "index/btn_common5.png",
                        sizeGrid: "30,7,25,9",
                        runtime: "touch.Button",
                        height: 127,
                        centerY: 171,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 398,
                    child: [{
                        type: "Label",
                        props: {
                            y: 35.5,
                            x: 45,
                            text: "CONTINUE",
                            font: "yahei"
                        },
                        compId: 399
                    }]
                }, {
                    type: "Label",
                    props: {
                        text: "CONTINUE?",
                        font: "yaheib",
                        centerY: -241,
                        centerX: 4
                    },
                    compId: 400
                }, {
                    type: "Label",
                    props: {
                        text: "SCORE",
                        scaleY: .8,
                        scaleX: .8,
                        font: "yaheib",
                        centerY: -460,
                        centerX: 0
                    },
                    compId: 401
                }, {
                    type: "Label",
                    props: {
                        var: "reScore",
                        text: "0",
                        font: "yaheib",
                        centerY: -380,
                        centerX: 0
                    },
                    compId: 402
                }]
            }, {
                type: "Box",
                props: {
                    width: 200,
                    visible: !1,
                    var: "boxReviving",
                    height: 200,
                    centerY: 2,
                    centerX: 0
                },
                compId: 403,
                child: [{
                    type: "Label",
                    props: {
                        y: 26,
                        x: 30,
                        width: 100,
                        var: "tfReviving",
                        text: "3",
                        scaleY: 2,
                        scaleX: 2,
                        font: "yaheib",
                        align: "center"
                    },
                    compId: 404
                }]
            }, {
                type: "Box",
                props: {
                    y: 311,
                    width: 750,
                    visible: !1,
                    var: "boxSRank",
                    right: 0,
                    left: 0,
                    height: 757
                },
                compId: 462,
                child: [{
                    type: "Image",
                    props: {
                        y: -1e3,
                        skin: "core/black_mask.png",
                        right: 0,
                        left: 0,
                        height: 3e3,
                        sizeGrid: "10,10,10,10"
                    },
                    compId: 500
                }, {
                    type: "Button",
                    props: {
                        y: 20,
                        x: 118.5,
                        width: 233,
                        var: "rankWorld",
                        stateNum: 2,
                        runtime: "touch.Button",
                        height: 72,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 463,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            skin: "index/rank_yes.png",
                            sizeGrid: "37,40,0,26",
                            name: "on"
                        },
                        compId: 464
                    }, {
                        type: "Label",
                        props: {
                            y: 0,
                            width: 273,
                            valign: "middle",
                            text: "World",
                            scaleY: .7,
                            scaleX: .7,
                            name: "onL",
                            height: 93,
                            fontSize: 20,
                            font: "yaheib",
                            centerX: 0,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 465
                    }, {
                        type: "Image",
                        props: {
                            y: 5,
                            x: 0,
                            skin: "index/rank_no.png",
                            sizeGrid: "37,40,0,26",
                            name: "off"
                        },
                        compId: 466
                    }, {
                        type: "Label",
                        props: {
                            y: 5,
                            width: 278,
                            valign: "middle",
                            text: "World",
                            scaleY: .7,
                            scaleX: .7,
                            name: "offL",
                            height: 87,
                            fontSize: 20,
                            font: "yahei",
                            centerX: -2,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 467
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 20,
                        x: 341.5,
                        width: 233,
                        var: "rankFriend",
                        runtime: "touch.Button",
                        height: 72,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 468,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            skin: "index/rank_yes.png",
                            sizeGrid: "37,40,0,26",
                            name: "on"
                        },
                        compId: 469
                    }, {
                        type: "Label",
                        props: {
                            y: 5,
                            width: 236,
                            valign: "middle",
                            text: "Friend",
                            scaleY: .7,
                            scaleX: .7,
                            name: "onL",
                            height: 93,
                            fontSize: 20,
                            font: "yaheib",
                            centerX: 7,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 470
                    }, {
                        type: "Image",
                        props: {
                            y: 5,
                            x: 0,
                            skin: "index/rank_no.png",
                            sizeGrid: "37,40,0,26",
                            name: "off"
                        },
                        compId: 471
                    }, {
                        type: "Label",
                        props: {
                            y: 5,
                            width: 270,
                            valign: "middle",
                            text: "Friend",
                            scaleY: .7,
                            scaleX: .7,
                            name: "offL",
                            height: 85,
                            fontSize: 20,
                            font: "yahei",
                            centerX: -3,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 472
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 50,
                        x: 0,
                        width: 750,
                        skin: "index/rank_bg.png",
                        sizeGrid: "33,31,36,38",
                        height: 710
                    },
                    compId: 479
                }, {
                    type: "Box",
                    props: {
                        y: 61,
                        x: 13,
                        width: 725,
                        visible: !0,
                        var: "longRank",
                        height: 690
                    },
                    compId: 495,
                    child: [{
                        type: "Button",
                        props: {
                            y: 638,
                            x: 362,
                            width: 200,
                            visible: !0,
                            var: "btnLongInvite",
                            stateNum: 1,
                            skin: "index/rank_invite.png",
                            runtime: "touch.Button",
                            pivotY: 33,
                            pivotX: 100,
                            height: 66
                        },
                        compId: 496
                    }, {
                        type: "MenuRankItem2",
                        props: {
                            y: 476,
                            x: -1,
                            var: "myRank",
                            runtime: "ui.MenuRankItem2UI"
                        },
                        compId: 497
                    }, {
                        type: "List",
                        props: {
                            y: 0,
                            x: 0,
                            width: 725,
                            var: "longRankList",
                            spaceY: 20,
                            spaceX: 20,
                            scaleX: 1,
                            repeatY: 4,
                            repeatX: 1,
                            height: 476
                        },
                        compId: 498,
                        child: [{
                            type: "MenuRankItem2",
                            props: {
                                renderType: "render",
                                runtime: "ui.MenuRankItem2UI"
                            },
                            compId: 499
                        }]
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 1008,
                        x: 375,
                        width: 750,
                        var: "sRankback",
                        runtime: "touch.Button",
                        height: 500,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 506,
                    child: [{
                        type: "Label",
                        props: {
                            y: 5,
                            width: 236,
                            valign: "middle",
                            text: "BACK",
                            scaleY: 1.2,
                            scaleX: 1.2,
                            name: "back",
                            height: 93,
                            fontSize: 20,
                            font: "yaheib",
                            centerX: 7,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 508
                    }]
                }]
            }],
            animations: [{
                nodes: [{
                    target: 32,
                    keyframes: {
                        x: [{
                            value: 180,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 32,
                            key: "x",
                            index: 0
                        }, {
                            value: 520,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 32,
                            key: "x",
                            index: 20
                        }, {
                            value: 180,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 32,
                            key: "x",
                            index: 40
                        }]
                    }
                }, {
                    target: 354,
                    keyframes: {
                        width: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 354,
                            key: "width",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 354,
                            key: "width",
                            index: 40
                        }]
                    }
                }, {
                    target: 357,
                    keyframes: {
                        width: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 357,
                            key: "width",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 357,
                            key: "width",
                            index: 40
                        }]
                    }
                }, {
                    target: 9,
                    keyframes: {
                        y: [{
                            value: 333,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 9,
                            key: "y",
                            index: 0
                        }],
                        pivotY: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 9,
                            key: "pivotY",
                            index: 0
                        }]
                    }
                }, {
                    target: 346,
                    keyframes: {
                        y: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 346,
                            key: "y",
                            index: 0
                        }],
                        x: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 346,
                            key: "x",
                            index: 0
                        }],
                        bottom: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 346,
                            key: "bottom",
                            index: 0
                        }]
                    }
                }],
                name: "aniGuide",
                id: 1,
                frameRate: 24,
                action: 0
            }],
            loadList: ["index/progress1.png", "index/p4.png", "index/p3.png", "core/black_mask.png", "game/f1_0.png", "game/f1_1.png", "game/f1_2.png", "game/f1_3.png", "index/img_player_frame.png", "index/pk_jinx.png", "game/f2.jpg", "index/c2.png", "index/lock.png", "game/f3.png", "index/btn_common5.png", "index/btn_common4.png", "index/btn_share.png", "index/qq_i_2.png", "core/bg_grid.png", "game/guide_bg.png", "game/arrow.png", "game/go.png", "game/forword.png", "game/finger.png", "index/tips_bg_gird.png", "index/biao_tiao1.png", "index/biao_tiao3.png", "index/biao_tiao4.png", "index/biao_tiao2.png", "index/biao_ping.png", "index/biao_pan.png", "index/biao_zhen.png", "index/SF4_dds_0187.png", "index/eff_sp.png", "index/guang.png", "comp/button.png", "index/rank_yes.png", "index/rank_no.png", "index/rank_bg.png", "index/rank_invite.png", "MenuRankItem2.ui"],
            loadList3D: []
        }, i
    }(View);
    e.GameViewUI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            t.prototype.createChildren.call(this), this.createView(e.IndexBgViewUI.uiView)
        }, i.uiView = {
            type: "View",
            props: {
                x: 50,
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    visible: !0,
                    var: "bg1",
                    top: -10,
                    skin: "core/black_mask1.png",
                    sizeGrid: "10,10,10,10",
                    right: -4,
                    left: -4,
                    bottom: -10
                },
                compId: 3
            }, {
                type: "Image",
                props: {
                    y: 300,
                    x: 0,
                    width: 750,
                    visible: !0,
                    var: "bg2",
                    skin: "index/bg.png",
                    height: 740
                },
                compId: 125
            }],
            loadList: ["core/black_mask1.png", "index/bg.png"],
            loadList3D: []
        }, i
    }(View);
    e.IndexBgViewUI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            View.regComponent("touch.Button", touch.Button), View.regComponent("ui.MenuRankItem1UI", e.MenuRankItem1UI), View.regComponent("ui.MenuRankItem2UI", e.MenuRankItem2UI), t.prototype.createChildren.call(this), this.createView(e.IndexViewUI.uiView)
        }, i.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    top: 85,
                    skin: "index/logo.png",
                    left: 45
                },
                compId: 23
            }, {
                type: "Button",
                props: {
                    y: 71,
                    x: 62,
                    visible: !1,
                    var: "btnSettingOpen",
                    stateNum: 1,
                    skin: "index/img_sound.png",
                    runtime: "touch.Button",
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 66
            }, {
                type: "Button",
                props: {
                    y: 71,
                    x: 62,
                    visible: !1,
                    var: "btnSettingClose",
                    stateNum: 1,
                    skin: "index/img_sound1.png",
                    runtime: "touch.Button",
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 96
            }, {
                type: "Button",
                props: {
                    visible: !0,
                    var: "btnAward",
                    stateNum: 1,
                    skin: "index/btn_share.png",
                    runtime: "touch.Button",
                    centerY: -193,
                    centerX: 316
                },
                compId: 84,
                child: [{
                    type: "Label",
                    props: {
                        y: 119,
                        x: -48,
                        width: 240,
                        visible: !1,
                        var: "tfNextRewardTime",
                        valign: "middle",
                        text: "00:00:00",
                        scaleY: .9,
                        scaleX: .9,
                        font: "yahei",
                        color: "#ffffff",
                        align: "center"
                    },
                    compId: 87
                }, {
                    type: "Image",
                    props: {
                        y: 5,
                        x: 5,
                        visible: !1,
                        var: "imgAward",
                        skin: "index/qq_i_2.png"
                    },
                    compId: 95
                }]
            }, {
                type: "Button",
                props: {
                    width: 350,
                    visible: !0,
                    var: "btnStart1",
                    stateNum: 1,
                    skin: "index/btn_common4.png",
                    sizeGrid: "0,20,0,22",
                    runtime: "touch.Button",
                    labelFont: "yahei",
                    height: 90,
                    gray: !1,
                    centerY: 331,
                    centerX: 0
                },
                compId: 196,
                child: [{
                    type: "Image",
                    props: {
                        y: 13,
                        x: 14,
                        skin: "index/an5.png"
                    },
                    compId: 198
                }, {
                    type: "Label",
                    props: {
                        y: 0,
                        width: 405,
                        valign: "middle",
                        text: "PLAY SINGLE",
                        scaleY: .6,
                        scaleX: .6,
                        height: 150,
                        font: "yahei",
                        color: "#000000",
                        centerX: 28,
                        anchorX: 0,
                        align: "center"
                    },
                    compId: 197
                }]
            }, {
                type: "Button",
                props: {
                    width: 350,
                    visible: !0,
                    var: "btnStart",
                    stateNum: 1,
                    skin: "index/btn_common5.png",
                    sizeGrid: "0,20,0,22",
                    runtime: "touch.Button",
                    labelFont: "yahei",
                    height: 90,
                    gray: !1,
                    centerY: 220,
                    centerX: 0
                },
                compId: 48,
                child: [{
                    type: "Image",
                    props: {
                        y: 12,
                        x: 8,
                        skin: "index/an4.png"
                    },
                    compId: 195
                }, {
                    type: "Label",
                    props: {
                        y: -1,
                        width: 379,
                        valign: "middle",
                        text: "PLAY MULTI",
                        scaleY: .6,
                        scaleX: .6,
                        height: 152,
                        font: "yahei",
                        color: "#000000",
                        centerX: 22,
                        anchorX: 0,
                        align: "center"
                    },
                    compId: 126
                }]
            }, {
                type: "Box",
                props: {
                    y: 469,
                    x: 291
                },
                compId: 208,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: -35,
                        skin: "index/biao_ping.png",
                        scaleY: .7,
                        scaleX: .7
                    },
                    compId: 209
                }, {
                    type: "Image",
                    props: {
                        y: 63,
                        x: -36,
                        skin: "index/zhangai.png"
                    },
                    compId: 210
                }, {
                    type: "Image",
                    props: {
                        y: 26,
                        x: 17,
                        skin: "index/nengli.png"
                    },
                    compId: 211
                }, {
                    type: "Image",
                    props: {
                        y: 26,
                        x: 211,
                        width: 194,
                        var: "accLen",
                        skin: "index/nenglihui.png",
                        scaleX: -1
                    },
                    compId: 212
                }, {
                    type: "Image",
                    props: {
                        y: 76,
                        x: 17,
                        skin: "index/nengli.png"
                    },
                    compId: 213
                }, {
                    type: "Image",
                    props: {
                        y: 76,
                        x: 211,
                        width: 194,
                        var: "antLen",
                        skin: "index/nenglihui.png",
                        scaleX: -1
                    },
                    compId: 214
                }, {
                    type: "Label",
                    props: {
                        y: 10,
                        x: 17,
                        text: "Accelerate",
                        scaleY: .3,
                        scaleX: .3,
                        font: "yaheib"
                    },
                    compId: 215
                }, {
                    type: "Label",
                    props: {
                        y: 61,
                        x: 17,
                        text: "Anti decay",
                        scaleY: .3,
                        scaleX: .3,
                        font: "yaheib"
                    },
                    compId: 216
                }]
            }, {
                type: "Box",
                props: {
                    var: "boxUnlock",
                    scaleY: .7,
                    scaleX: .7,
                    centerY: 170,
                    centerX: 0
                },
                compId: 207,
                child: [{
                    type: "Label",
                    props: {
                        y: -28,
                        x: 69,
                        width: 392,
                        var: "unlockTxt",
                        text: "100/100",
                        scaleY: .5,
                        scaleX: .5,
                        height: 56,
                        font: "yaheib",
                        align: "center"
                    },
                    compId: 172
                }, {
                    type: "Image",
                    props: {
                        y: -49,
                        x: -53,
                        skin: "index/lock.png",
                        scaleY: .8,
                        scaleX: .8
                    },
                    compId: 171
                }, {
                    type: "Image",
                    props: {
                        y: -42,
                        x: 3,
                        var: "unlockDIa",
                        skin: "index/diamond.png",
                        scaleY: 1,
                        scaleX: 1
                    },
                    compId: 194
                }, {
                    type: "Image",
                    props: {
                        y: -48,
                        x: 3,
                        var: "unlockStar",
                        skin: "index/pk_jinx.png",
                        scaleY: .4,
                        scaleX: .4
                    },
                    compId: 174
                }]
            }, {
                type: "Button",
                props: {
                    visible: !0,
                    var: "btnHelp",
                    stateNum: 1,
                    skin: "index/wenhao.png",
                    runtime: "touch.Button",
                    labelStrokeColor: "#cd1714",
                    labelFont: "yahei",
                    centerX: 316,
                    bottom: 291
                },
                compId: 163
            }, {
                type: "Button",
                props: {
                    width: 350,
                    visible: !1,
                    var: "btnTry",
                    stateNum: 1,
                    skin: "index/btn_common5.png",
                    sizeGrid: "26,20,28,17",
                    runtime: "touch.Button",
                    labelStrokeColor: "#cd1714",
                    labelFont: "yahei",
                    height: 90,
                    centerY: 220,
                    centerX: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 24.5,
                        x: 16,
                        skin: "index/video.png"
                    },
                    compId: 88
                }, {
                    type: "Label",
                    props: {
                        y: -1,
                        x: 0,
                        width: 379,
                        valign: "middle",
                        text: "PLAY MULTI",
                        scaleY: .6,
                        scaleX: .6,
                        height: 152,
                        font: "yahei",
                        color: "#000000",
                        centerX: 22,
                        anchorX: 0,
                        align: "center"
                    },
                    compId: 199
                }]
            }, {
                type: "Button",
                props: {
                    width: 350,
                    visible: !1,
                    var: "btnTry1",
                    stateNum: 1,
                    skin: "index/btn_common4.png",
                    sizeGrid: "26,20,28,17",
                    runtime: "touch.Button",
                    labelStrokeColor: "#cd1714",
                    labelFont: "yahei",
                    height: 90,
                    centerY: 331,
                    centerX: 0
                },
                compId: 200,
                child: [{
                    type: "Image",
                    props: {
                        y: 24.5,
                        x: 16,
                        skin: "index/video.png"
                    },
                    compId: 205
                }, {
                    type: "Label",
                    props: {
                        y: -1,
                        x: 0,
                        width: 379,
                        valign: "middle",
                        text: "PLAY SINGLE",
                        scaleY: .6,
                        scaleX: .6,
                        height: 152,
                        font: "yahei",
                        color: "#000000",
                        centerX: 22,
                        anchorX: 0,
                        align: "center"
                    },
                    compId: 206
                }]
            }, {
                type: "Button",
                props: {
                    y: 751,
                    x: 20,
                    var: "btnLeft",
                    stateNum: 1,
                    skin: "index/rank_left.png",
                    runtime: "touch.Button",
                    name: "btnLeft"
                },
                compId: 123
            }, {
                type: "Button",
                props: {
                    y: 780,
                    x: 670,
                    var: "btnRight",
                    stateNum: 1,
                    skin: "index/rank_right.png",
                    scaleX: 1,
                    runtime: "touch.Button",
                    rotation: 0,
                    pivotY: 30,
                    pivotX: 58,
                    name: "btnRight"
                },
                compId: 124
            }, {
                type: "Box",
                props: {
                    y: 1083,
                    x: 0,
                    width: 750,
                    var: "boxRank",
                    height: 650,
                    bottom: -399
                },
                compId: 97,
                child: [{
                    type: "Button",
                    props: {
                        y: 20,
                        x: 118.5,
                        width: 233,
                        var: "rankWorld",
                        stateNum: 2,
                        runtime: "touch.Button",
                        height: 72,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 99,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            skin: "index/rank_yes.png",
                            sizeGrid: "37,40,0,26",
                            name: "on"
                        },
                        compId: 108
                    }, {
                        type: "Label",
                        props: {
                            y: 0,
                            width: 273,
                            valign: "middle",
                            text: "World",
                            scaleY: .7,
                            scaleX: .7,
                            name: "onL",
                            height: 93,
                            fontSize: 20,
                            font: "yaheib",
                            centerX: 0,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 103
                    }, {
                        type: "Image",
                        props: {
                            y: 5,
                            x: 0,
                            skin: "index/rank_no.png",
                            sizeGrid: "37,40,0,26",
                            name: "off"
                        },
                        compId: 107
                    }, {
                        type: "Label",
                        props: {
                            y: 5,
                            width: 278,
                            valign: "middle",
                            text: "World",
                            scaleY: .7,
                            scaleX: .7,
                            name: "offL",
                            height: 87,
                            fontSize: 20,
                            font: "yahei",
                            centerX: -2,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 127
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 20,
                        x: 341.5,
                        width: 233,
                        var: "rankFriend",
                        runtime: "touch.Button",
                        height: 72,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 100,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            skin: "index/rank_yes.png",
                            sizeGrid: "37,40,0,26",
                            name: "on"
                        },
                        compId: 109
                    }, {
                        type: "Label",
                        props: {
                            y: 5,
                            width: 236,
                            valign: "middle",
                            text: "Friend",
                            scaleY: .7,
                            scaleX: .7,
                            name: "onL",
                            height: 93,
                            fontSize: 20,
                            font: "yaheib",
                            centerX: 7,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 106
                    }, {
                        type: "Image",
                        props: {
                            y: 5,
                            x: 0,
                            skin: "index/rank_no.png",
                            sizeGrid: "37,40,0,26",
                            name: "off"
                        },
                        compId: 110
                    }, {
                        type: "Label",
                        props: {
                            y: 5,
                            width: 270,
                            valign: "middle",
                            text: "Friend",
                            scaleY: .7,
                            scaleX: .7,
                            name: "offL",
                            height: 85,
                            fontSize: 20,
                            font: "yahei",
                            centerX: -3,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 128
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: -18,
                        x: 495,
                        visible: !0,
                        var: "btnShowMore",
                        stateNum: 1,
                        skin: "index/rank_show.png",
                        sizeGrid: "30,56,29,56",
                        labelStrokeColor: "#cd1714",
                        labelFont: "yahei"
                    },
                    compId: 111,
                    child: [{
                        type: "Image",
                        props: {
                            y: 23.5,
                            x: 209,
                            skin: "index/rank_up.png"
                        },
                        compId: 112
                    }, {
                        type: "Label",
                        props: {
                            y: 0,
                            x: 0,
                            width: 404,
                            valign: "middle",
                            text: "Show more",
                            scaleY: .5,
                            scaleX: .5,
                            height: 125,
                            fontSize: 20,
                            font: "yahei",
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 113
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: -18,
                        x: 495,
                        visible: !0,
                        var: "btnShowLess",
                        stateNum: 1,
                        skin: "index/rank_show.png",
                        sizeGrid: "30,56,29,56",
                        labelStrokeColor: "#cd1714",
                        labelFont: "yahei"
                    },
                    compId: 114,
                    child: [{
                        type: "Image",
                        props: {
                            y: 32,
                            x: 220,
                            skin: "index/rank_up.png",
                            rotation: 180,
                            pivotY: 9,
                            pivotX: 12
                        },
                        compId: 115
                    }, {
                        type: "Label",
                        props: {
                            y: 0,
                            x: 0,
                            width: 410,
                            valign: "middle",
                            text: "Show less",
                            scaleY: .5,
                            scaleX: .5,
                            height: 125,
                            fontSize: 20,
                            font: "yahei",
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 116
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 50,
                        x: 0,
                        width: 750,
                        skin: "index/rank_bg.png",
                        sizeGrid: "33,31,36,38",
                        height: 710
                    },
                    compId: 98
                }, {
                    type: "Box",
                    props: {
                        y: 64,
                        x: 13,
                        width: 726,
                        visible: !0,
                        var: "shortRank",
                        name: "shortRank",
                        height: 177
                    },
                    compId: 135,
                    child: [{
                        type: "Image",
                        props: {
                            y: -6,
                            x: -1,
                            width: 173,
                            skin: "index/img_player_frame1.png",
                            height: 190
                        },
                        compId: 139
                    }, {
                        type: "Image",
                        props: {
                            y: 67,
                            x: 16,
                            skin: "index/pk_jinx.png",
                            scaleY: .4,
                            scaleX: .4
                        },
                        compId: 136
                    }, {
                        type: "Label",
                        props: {
                            y: 100,
                            x: 72,
                            width: 192,
                            var: "shortStarNum",
                            valign: "middle",
                            text: "0",
                            scaleY: .5,
                            scaleX: .5,
                            pivotY: 28,
                            height: 56,
                            fontSize: 40,
                            font: "yahei",
                            color: "#000000",
                            bold: !0,
                            align: "left"
                        },
                        compId: 137
                    }, {
                        type: "Box",
                        props: {
                            y: 38,
                            x: 86,
                            width: 172,
                            var: "duanwei",
                            pivotY: 38,
                            pivotX: 86,
                            height: 76
                        },
                        compId: 149,
                        child: [{
                            type: "Image",
                            props: {
                                y: 1.5,
                                x: 53,
                                skin: "index/dw0.png"
                            },
                            compId: 156
                        }, {
                            type: "Image",
                            props: {
                                y: 2,
                                x: 50.5,
                                visible: !1,
                                skin: "index/dw1.png"
                            },
                            compId: 157
                        }, {
                            type: "Image",
                            props: {
                                y: 4.5,
                                x: 45.5,
                                visible: !1,
                                skin: "index/dw2.png"
                            },
                            compId: 158
                        }, {
                            type: "Image",
                            props: {
                                y: 1,
                                x: 43.5,
                                visible: !1,
                                skin: "index/dw3.png"
                            },
                            compId: 159
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 38,
                                visible: !1,
                                skin: "index/dw4.png"
                            },
                            compId: 160
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 37,
                                visible: !1,
                                skin: "index/dw5.png"
                            },
                            compId: 161
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 151,
                            x: 115,
                            width: 134,
                            var: "btnShortShare",
                            stateNum: 1,
                            skin: "index/rank_invite.png",
                            runtime: "touch.Button",
                            pivotY: 33,
                            pivotX: 100,
                            height: 47
                        },
                        compId: 138
                    }, {
                        type: "List",
                        props: {
                            y: 0,
                            x: 177,
                            width: 549,
                            var: "shortRankList",
                            spaceY: 18,
                            spaceX: 20,
                            scaleX: 1,
                            repeatY: 1,
                            repeatX: 4,
                            height: 170
                        },
                        compId: 129,
                        child: [{
                            type: "MenuRankItem1",
                            props: {
                                renderType: "render",
                                runtime: "ui.MenuRankItem1UI"
                            },
                            compId: 132
                        }]
                    }, {
                        type: "Label",
                        props: {
                            y: 90,
                            x: -1,
                            width: 192,
                            visible: !1,
                            var: "shortStarNumTemp",
                            valign: "middle",
                            text: "0",
                            scaleY: 1,
                            scaleX: 1,
                            pivotY: 28,
                            height: 56,
                            fontSize: 40,
                            font: "yahei",
                            color: "#000000",
                            bold: !0,
                            align: "center"
                        },
                        compId: 173
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 61,
                        x: 13,
                        width: 725,
                        visible: !1,
                        var: "longRank",
                        height: 690
                    },
                    compId: 140,
                    child: [{
                        type: "Button",
                        props: {
                            y: 605,
                            x: 262,
                            width: 200,
                            var: "btnLongInvite",
                            stateNum: 1,
                            skin: "index/rank_invite.png",
                            height: 66
                        },
                        compId: 144
                    }, {
                        type: "MenuRankItem2",
                        props: {
                            y: 476,
                            x: -1,
                            var: "myRank",
                            runtime: "ui.MenuRankItem2UI"
                        },
                        compId: 147
                    }, {
                        type: "List",
                        props: {
                            y: 0,
                            x: 0,
                            width: 725,
                            var: "longRankList",
                            spaceY: 20,
                            spaceX: 20,
                            scaleX: 1,
                            repeatY: 4,
                            repeatX: 1,
                            height: 476
                        },
                        compId: 145,
                        child: [{
                            type: "MenuRankItem2",
                            props: {
                                renderType: "render",
                                runtime: "ui.MenuRankItem2UI"
                            },
                            compId: 148
                        }]
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    width: 750,
                    visible: !1,
                    var: "helpView",
                    top: 0,
                    left: 0,
                    height: 1334
                },
                compId: 165,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 750,
                        visible: !0,
                        top: 0,
                        skin: "core/black_mask.png",
                        left: -4,
                        height: 1800,
                        sizeGrid: "10,10,10,10"
                    },
                    compId: 166
                }, {
                    type: "Image",
                    props: {
                        y: 130,
                        x: 49,
                        width: 537,
                        skin: "index/help.jpg",
                        scaleY: 1.2,
                        scaleX: 1.2,
                        height: 914
                    },
                    compId: 167
                }, {
                    type: "Label",
                    props: {
                        y: 50,
                        x: 252,
                        text: "RULES",
                        scaleY: 1.3,
                        scaleX: 1.3,
                        fontSize: 40,
                        font: "yaheib",
                        bold: !0,
                        align: "center"
                    },
                    compId: 170
                }, {
                    type: "Button",
                    props: {
                        width: 750,
                        var: "btHelpBack",
                        stateNum: 1,
                        height: 1800
                    },
                    compId: 168,
                    child: [{
                        type: "Label",
                        props: {
                            y: 1250,
                            x: 292,
                            text: "BACK",
                            scaleY: 1,
                            scaleX: 1,
                            fontSize: 40,
                            font: "yaheib",
                            bold: !0,
                            align: "center"
                        },
                        compId: 175
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    visible: !1,
                    var: "boxTry"
                },
                compId: 177,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 750,
                        top: 0,
                        skin: "core/black_mask.png",
                        left: 0,
                        height: 1886,
                        sizeGrid: "10,10,10,10"
                    },
                    compId: 193
                }, {
                    type: "Image",
                    props: {
                        width: 750,
                        top: 0,
                        skin: "core/black_mask.png",
                        left: 0,
                        height: 1886,
                        sizeGrid: "10,10,10,10"
                    },
                    compId: 183
                }, {
                    type: "Image",
                    props: {
                        y: 475,
                        width: 690,
                        skin: "index/loadingBG.png",
                        sizeGrid: "10,10,10,10",
                        left: 30
                    },
                    compId: 184,
                    child: [{
                        type: "Label",
                        props: {
                            y: -1,
                            x: 0,
                            width: 351,
                            valign: "middle",
                            text: "Congratulations",
                            scaleY: 1,
                            scaleX: 1,
                            height: 113,
                            font: "yahei",
                            color: "#000000",
                            centerX: 0,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 188
                    }, {
                        type: "Label",
                        props: {
                            y: 112,
                            width: 351,
                            valign: "middle",
                            text: "Watch video to\\ngive you a trial",
                            scaleY: .6,
                            scaleX: .6,
                            height: 113,
                            font: "yahei",
                            color: "#000000",
                            centerX: -6,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 189
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 694,
                        x: 225,
                        var: "tryche7",
                        skin: "index/c7.png",
                        scaleY: 2,
                        scaleX: 2
                    },
                    compId: 192
                }, {
                    type: "Image",
                    props: {
                        y: 694.5,
                        x: 225,
                        var: "tryche8",
                        skin: "index/c8.png",
                        scaleY: 2,
                        scaleX: 2
                    },
                    compId: 191
                }, {
                    type: "Image",
                    props: {
                        y: 877,
                        x: 491,
                        skin: "index/after.png"
                    },
                    compId: 190
                }, {
                    type: "Button",
                    props: {
                        y: 963,
                        width: 350,
                        visible: !0,
                        var: "tryOk",
                        stateNum: 1,
                        skin: "index/btn_common5.png",
                        sizeGrid: "0,20,0,22",
                        runtime: "touch.Button",
                        labelFont: "yahei",
                        height: 100,
                        gray: !1,
                        centerX: 0
                    },
                    compId: 185,
                    child: [{
                        type: "Label",
                        props: {
                            y: -1,
                            width: 351,
                            valign: "middle",
                            text: "OK",
                            scaleY: 1,
                            scaleX: 1,
                            height: 113,
                            font: "yahei",
                            color: "#000000",
                            centerX: 0,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 186
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 1083,
                        width: 357,
                        visible: !0,
                        var: "tryBack",
                        stateNum: 1,
                        runtime: "touch.Button",
                        labelStrokeColor: "#ffffffff",
                        height: 98,
                        centerX: 0
                    },
                    compId: 179,
                    child: [{
                        type: "Label",
                        props: {
                            y: -1,
                            x: 0,
                            width: 351,
                            valign: "middle",
                            text: "NO THANKS",
                            scaleY: .7,
                            scaleX: .7,
                            height: 113,
                            font: "yaheib",
                            color: "#000000",
                            centerX: 0,
                            anchorX: 0,
                            align: "center"
                        },
                        compId: 187
                    }]
                }]
            }],
            loadList: ["index/logo.png", "index/img_sound.png", "index/img_sound1.png", "index/btn_share.png", "index/qq_i_2.png", "index/btn_common4.png", "index/an5.png", "index/btn_common5.png", "index/an4.png", "index/biao_ping.png", "index/zhangai.png", "index/nengli.png", "index/nenglihui.png", "index/lock.png", "index/diamond.png", "index/pk_jinx.png", "index/wenhao.png", "index/video.png", "index/rank_left.png", "index/rank_right.png", "index/rank_yes.png", "index/rank_no.png", "index/rank_show.png", "index/rank_up.png", "index/rank_bg.png", "index/img_player_frame1.png", "index/dw0.png", "index/dw1.png", "index/dw2.png", "index/dw3.png", "index/dw4.png", "index/dw5.png", "index/rank_invite.png", "MenuRankItem1.ui", "MenuRankItem2.ui", "core/black_mask.png", "index/help.jpg", "index/loadingBG.png", "index/c7.png", "index/c8.png", "index/after.png"],
            loadList3D: []
        }, i
    }(View);
    e.IndexViewUI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            t.prototype.createChildren.call(this), this.createView(e.LoadingDialogUI.uiView)
        }, i.uiView = {
            type: "Dialog",
            props: {
                width: 755,
                height: 1334
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    width: 200,
                    skin: "core/black_mask.png",
                    height: 200,
                    centerY: 0,
                    centerX: 0,
                    sizeGrid: "10,10,10,10"
                },
                compId: 2,
                child: [{
                    type: "Label",
                    props: {
                        width: 254,
                        valign: "middle",
                        text: "Loading\\nplease wait",
                        scaleY: .8,
                        scaleX: .8,
                        leading: -10,
                        layoutEnabled: !0,
                        height: 116,
                        fontSize: 25,
                        font: "yahei",
                        color: "#ffffff",
                        centerY: -4,
                        centerX: -2,
                        align: "center"
                    },
                    compId: 4
                }]
            }],
            loadList: ["core/black_mask.png"],
            loadList3D: []
        }, i
    }(Dialog);
    e.LoadingDialogUI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            View.regComponent("touch.MatchItem", touch.MatchItem), t.prototype.createChildren.call(this), this.createView(e.MatchDialogUI.uiView)
        }, i.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                left: 0,
                isShowEffect: !1,
                isPopupCenter: !1,
                height: 1800
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    width: 750,
                    top: 0,
                    skin: "core/black_mask.png",
                    left: 0,
                    height: 1800,
                    sizeGrid: "10,10,10,10"
                },
                compId: 15
            }, {
                type: "Image",
                props: {
                    y: 406,
                    width: 690,
                    skin: "index/loadingBG.png",
                    sizeGrid: "10,10,10,10",
                    left: 30
                },
                compId: 14
            }, {
                type: "ProgressBar",
                props: {
                    y: 495,
                    x: 45,
                    width: 660,
                    var: "pbProgress",
                    skin: "index/progress.png",
                    sizeGrid: "0,131,0,50"
                },
                compId: 4
            }, {
                type: "List",
                props: {
                    y: 563,
                    x: 94,
                    width: 600,
                    var: "listPlayer",
                    spaceY: 40,
                    spaceX: 40,
                    height: 350
                },
                compId: 10,
                child: [{
                    type: "MatchItem",
                    props: {
                        runtime: "touch.MatchItem",
                        name: "render"
                    },
                    compId: 11
                }]
            }, {
                type: "Label",
                props: {
                    y: 428,
                    x: 186,
                    text: "Matching",
                    font: "yahei",
                    align: "center"
                },
                compId: 12
            }, {
                type: "Label",
                props: {
                    y: 428,
                    x: 464,
                    var: "tfProgress",
                    text: "0%",
                    font: "yahei",
                    align: "left"
                },
                compId: 13
            }],
            loadList: ["core/black_mask.png", "index/loadingBG.png", "index/progress.png", "MatchItem.ui"],
            loadList3D: []
        }, i
    }(View);
    e.MatchDialogUI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            t.prototype.createChildren.call(this), this.createView(e.MatchItemUI.uiView)
        }, i.uiView = {
            type: "View",
            props: {
                width: 160,
                height: 160
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    y: 80,
                    x: 80,
                    width: 146,
                    skin: "index/img_player_frame1.png",
                    height: 146,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 6
            }, {
                type: "Image",
                props: {
                    y: 80,
                    x: 81,
                    width: 129,
                    var: "imgWait",
                    skin: "index/img_loading.png",
                    height: 133,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 3
            }, {
                type: "Image",
                props: {
                    y: 8,
                    x: 7,
                    width: 146,
                    var: "imgHead",
                    height: 146
                },
                compId: 4
            }, {
                type: "Image",
                props: {
                    y: 4,
                    x: 4,
                    var: "imgFrame",
                    skin: "index/img_player_frame.png"
                },
                compId: 5
            }],
            animations: [{
                nodes: [{
                    target: 3,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 90,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "rotation",
                            index: 20,
                            functions: []
                        }, {
                            value: 180,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "rotation",
                            index: 40
                        }, {
                            value: 270,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "rotation",
                            index: 60
                        }, {
                            value: 360,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 3,
                            key: "rotation",
                            index: 80
                        }]
                    }
                }],
                name: "aniWait",
                id: 1,
                frameRate: 24,
                action: 0
            }],
            loadList: ["index/img_player_frame1.png", "index/img_loading.png", "index/img_player_frame.png"],
            loadList3D: []
        }, i
    }(View);
    e.MatchItemUI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            t.prototype.createChildren.call(this), this.createView(e.MenuRankItem1UI.uiView)
        }, i.uiView = {
            type: "View",
            props: {
                width: 120,
                height: 150
            },
            compId: 1,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    width: 120,
                    var: "rootbox",
                    scaleY: 1,
                    scaleX: 1,
                    height: 150
                },
                compId: 37,
                child: [{
                    type: "Image",
                    props: {
                        y: 2,
                        x: 17,
                        width: 86,
                        var: "rHead",
                        skin: "index/img_player_frame1.png",
                        height: 86
                    },
                    compId: 43
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 15,
                        width: 90,
                        skin: "index/img_player_frame.png",
                        height: 90
                    },
                    compId: 46
                }, {
                    type: "Label",
                    props: {
                        y: 110,
                        x: 60,
                        wordWrap: !0,
                        width: 120,
                        var: "rName",
                        valign: "middle",
                        text: "aaaaaaaaaavvvvvvbbbbbbbb",
                        pivotY: 20,
                        pivotX: 60,
                        overflow: "scroll",
                        height: 40,
                        fontSize: 20,
                        bold: !0,
                        align: "center"
                    },
                    compId: 44
                }, {
                    type: "Image",
                    props: {
                        y: 150,
                        x: 25,
                        width: 131,
                        skin: "index/pk_jinx.png",
                        scaleY: .2,
                        scaleX: .2,
                        name: "starBg",
                        height: 123,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 39
                }, {
                    type: "Label",
                    props: {
                        y: 150,
                        x: 82,
                        wordWrap: !0,
                        width: 192,
                        var: "rScore",
                        valign: "middle",
                        text: "13567",
                        scaleY: .4,
                        scaleX: .4,
                        pivotY: 20,
                        pivotX: 105,
                        overflow: "scroll",
                        height: 49,
                        fontSize: 20,
                        font: "yahei",
                        bold: !0,
                        align: "left"
                    },
                    compId: 45
                }]
            }],
            loadList: ["index/img_player_frame1.png", "index/img_player_frame.png", "index/pk_jinx.png"],
            loadList3D: []
        }, i
    }(View);
    e.MenuRankItem1UI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            t.prototype.createChildren.call(this), this.createView(e.MenuRankItem2UI.uiView)
        }, i.uiView = {
            type: "View",
            props: {
                width: 726,
                height: 100
            },
            compId: 1,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    width: 726,
                    var: "rootbox",
                    scaleY: 1,
                    scaleX: 1,
                    renderType: "render",
                    height: 100
                },
                compId: 37,
                child: [{
                    type: "Image",
                    props: {
                        width: 726,
                        visible: !1,
                        var: "otherBg",
                        skin: "index/rank_1.png",
                        height: 100
                    },
                    compId: 55
                }, {
                    type: "Image",
                    props: {
                        width: 726,
                        visible: !1,
                        var: "myBG",
                        skin: "index/rank_2.png",
                        height: 100
                    },
                    compId: 56
                }, {
                    type: "Label",
                    props: {
                        y: 50,
                        x: 35,
                        wordWrap: !0,
                        width: 176,
                        var: "rRank",
                        valign: "middle",
                        scaleY: .4,
                        scaleX: .4,
                        pivotY: 125,
                        pivotX: 88,
                        overflow: "scroll",
                        height: 250,
                        fontSize: 30,
                        font: "yahei",
                        bold: !0,
                        align: "center"
                    },
                    compId: 46
                }, {
                    type: "Image",
                    props: {
                        y: 7,
                        x: 75,
                        width: 86,
                        var: "rHead",
                        skin: "index/img_player_frame1.png",
                        height: 86
                    },
                    compId: 43
                }, {
                    type: "Image",
                    props: {
                        y: 5,
                        x: 73,
                        width: 90,
                        skin: "index/img_player_frame.png",
                        height: 90
                    },
                    compId: 54
                }, {
                    type: "Label",
                    props: {
                        y: 68,
                        x: 179,
                        wordWrap: !0,
                        width: 235,
                        var: "rName",
                        valign: "middle",
                        text: "name",
                        pivotY: 25,
                        overflow: "scroll",
                        height: 50,
                        fontSize: 25,
                        bold: !0,
                        align: "left"
                    },
                    compId: 44
                }, {
                    type: "Label",
                    props: {
                        y: 22,
                        x: 179,
                        wordWrap: !0,
                        width: 235,
                        var: "rLevel",
                        valign: "middle",
                        text: "level-1",
                        pivotY: 15,
                        overflow: "scroll",
                        height: 30,
                        fontSize: 25,
                        color: "#c6d6e7",
                        bold: !0,
                        align: "left"
                    },
                    compId: 57
                }, {
                    type: "Image",
                    props: {
                        y: 50,
                        x: 554,
                        var: "starBg",
                        skin: "index/pk_jinx.png",
                        scaleY: .3,
                        scaleX: .3,
                        name: "starBg",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 39
                }, {
                    type: "Label",
                    props: {
                        y: 52,
                        x: 583,
                        wordWrap: !1,
                        width: 302,
                        var: "rScore",
                        valign: "middle",
                        text: "0",
                        scaleY: .5,
                        scaleX: .5,
                        pivotY: 44,
                        pivotX: 0,
                        overflow: "scroll",
                        height: 88,
                        fontSize: 30,
                        font: "yahei",
                        bold: !0,
                        align: "left"
                    },
                    compId: 45
                }, {
                    type: "Box",
                    props: {
                        y: 13,
                        x: 428,
                        width: 100,
                        var: "duanwei",
                        height: 70
                    },
                    compId: 47,
                    child: [{
                        type: "Image",
                        props: {
                            y: 1.5,
                            x: 17,
                            skin: "index/dw0.png"
                        },
                        compId: 48
                    }, {
                        type: "Image",
                        props: {
                            y: 2,
                            x: 14.5,
                            visible: !1,
                            skin: "index/dw1.png"
                        },
                        compId: 49
                    }, {
                        type: "Image",
                        props: {
                            y: 3,
                            x: 10.5,
                            visible: !1,
                            skin: "index/dw2.png"
                        },
                        compId: 50
                    }, {
                        type: "Image",
                        props: {
                            y: 1,
                            x: 6.5,
                            visible: !1,
                            skin: "index/dw3.png"
                        },
                        compId: 51
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 2,
                            visible: !1,
                            skin: "index/dw4.png"
                        },
                        compId: 52
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            visible: !1,
                            skin: "index/dw5.png"
                        },
                        compId: 53
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 0,
                        x: 68,
                        width: 100,
                        var: "rankBtn",
                        height: 100
                    },
                    compId: 64,
                    child: [{
                        type: "Image",
                        props: {
                            y: 62,
                            x: 8,
                            var: "rankPlay",
                            skin: "index/play.png"
                        },
                        compId: 60
                    }, {
                        type: "Image",
                        props: {
                            y: 63,
                            x: 8,
                            var: "rankShare",
                            skin: "index/share.png"
                        },
                        compId: 61
                    }]
                }]
            }],
            loadList: ["index/rank_1.png", "index/rank_2.png", "index/img_player_frame1.png", "index/img_player_frame.png", "index/pk_jinx.png", "index/dw0.png", "index/dw1.png", "index/dw2.png", "index/dw3.png", "index/dw4.png", "index/dw5.png", "index/play.png", "index/share.png"],
            loadList3D: []
        }, i
    }(View);
    e.MenuRankItem2UI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            View.regComponent("touch.Notice", touch.Notice), t.prototype.createChildren.call(this), this.createView(e.NoticeUI.uiView)
        }, i.uiView = {
            type: "Dialog",
            props: {
                width: 600,
                runtime: "touch.Notice",
                height: 60
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    width: 600,
                    var: "imgBG",
                    skin: "index/tips_bg_gird.png",
                    sizeGrid: "10,30,10,30",
                    height: 60,
                    centerY: 0,
                    centerX: 0
                },
                compId: 2
            }, {
                type: "Label",
                props: {
                    width: 600,
                    var: "tfNotice",
                    text: "Click anywhere",
                    strokeColor: "#10668d",
                    stroke: 2,
                    fontSize: 36,
                    font: "Microsoft YaHei",
                    color: "#ffffff",
                    centerY: -6,
                    centerX: 0,
                    bold: !0,
                    align: "center"
                },
                compId: 3
            }],
            loadList: ["index/tips_bg_gird.png"],
            loadList3D: []
        }, i
    }(Dialog);
    e.NoticeUI = t
}(ui || (ui = {})),
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t), i.prototype.createChildren = function() {
            t.prototype.createChildren.call(this), this.createView(e.TipDialogUI.uiView)
        }, i.uiView = {
            type: "Dialog",
            props: {
                y: 0,
                x: 0,
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 686,
                    visible: !1,
                    skin: "core/bg_grid.png",
                    height: 588,
                    sizeGrid: "60,60,60,60"
                },
                compId: 13
            }],
            loadList: ["core/bg_grid.png"],
            loadList3D: []
        }, i
    }(Dialog);
    e.TipDialogUI = t
}(ui || (ui = {}));