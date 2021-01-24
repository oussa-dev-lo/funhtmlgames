function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);

      // Set AdMobAds options:
      admob.setOptions({
        publisherId:           "ca-app-pub-4103102141266934/7746576930",  // Required
        interstitialAdId:      "ca-app-pub-4103102141266934/7419273871",  // Optional
        autoShowBanner:        true,                                      // Optional
        autoShowRInterstitial: true,                                     // Optional

      });

      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();

      // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)


    }
    function InterstitialAd(){
          admob.requestInterstitialAd();
    }
    document.addEventListener("deviceready", onDeviceReady, false);
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        var g, h = !0,
            l, n, q, r, t, v = {
                caches: {
                    audio: {},
                    json: {},
                    text: {},
                    threeObject: {},
                    threeJson: {},
                    threeTexture: {}
                },
                pa: function(a, b) {
                    return a in v.caches && b in v.caches[a] ? v.caches[a][b] : null
                },
                qa: function(a, b, c) {
                    if (a in v.caches) v.caches[a][b] = c;
                    else throw "Invalid cache: " + a;
                },
                dc: function(a) {
                    return v.pa("threeObject", a)
                },
                tc: function(a, b) {
                    v.qa("threeObject", a, b)
                },
                ta: function(a) {
                    return v.pa("threeJson", a)
                },
                sc: function(a, b) {
                    v.qa("threeJson", a, b)
                },
                ga: function(a) {
                    return v.pa("threeTexture", a)
                },
                uc: function(a, b) {
                    v.qa("threeTexture",
                        a, b)
                },
                wb: function(a) {
                    return v.pa("json", a)
                },
                qc: function(a, b) {
                    v.qa("json", a, b)
                },
                cc: function(a) {
                    return v.pa("text", a)
                },
                rc: function(a, b) {
                    v.qa("text", a, b)
                },
                ka: function(a) {
                    return v.pa("audio", a)
                },
                Eb: function(a, b) {
                    v.qa("audio", a, b)
                }
            };

        function w() {
            this.manager = new THREE.LoadingManager;
            this.m = v;
            this.C = new THREE.ObjectLoader(this.manager);
            this.B = new THREE.JSONLoader(this.manager);
            this.I = new THREE.TextureLoader(this.manager);
            this.o = new x(this.manager);
            this.A = new y(this.manager);
            this.manager.onLoad = function() {
                this.onLoad()
            }.bind(this);
            this.manager.onProgress = function(a, b, c) {
                this.onProgress(a, b, c)
            }.bind(this)
        }
        w.prototype.onProgress = function() {};
        w.prototype.onLoad = function() {};
        w.prototype.constructor = w;

        function aa(a, b, c) {
            a.C.load(c, function(a) {
                this.m.tc(b, a)
            }.bind(a))
        }

        function ba(a, b, c) {
            a.B.load(c, function(a) {
                this.m.sc(b, a)
            }.bind(a))
        }

        function z(a, b, c) {
            a.I.load(c, function(a) {
                this.m.uc(b, a)
            }.bind(a))
        }

        function A(a, b, c) {
            a.o.load(c, function(a) {
                this.m.qc(b, a)
            }.bind(a))
        }

        function B(a, b, c) {
            a.A.load(c, function(a) {
                this.m.rc(b, a)
            }.bind(a))
        }

        function ca(a, b, c) {
            a.manager.itemStart(c[0]);
            var d = new Howl({
                src: c,
                onload: function() {
                    this.m.Eb(b, d);
                    this.manager.itemEnd(c[0])
                }.bind(a),
                onloaderror: function() {
                    console.log("error loading", b, c, arguments);
                    this.m.Eb(b, d);
                    this.manager.itemEnd(c[0])
                }.bind(a)
            })
        }

        function C() {}
        g = C.prototype;
        g.screen = null;
        g.load = function(a) {
            a()
        };
        g.init = function() {};
        g.show = function() {};
        g.xb = function() {};

        function D() {
            this.m = {};
            this.o = null;
            this.C = document.getElementById("screens");
            this.B = document.getElementById("conversionTarget");
            window.addEventListener("resize", this.A.bind(this))
        }
        D.prototype.add = function(a, b) {
            var c = v.cc("tpl_" + a);
            c && (this.B.innerHTML = c, this.C.appendChild(this.B.firstChild));
            var d = Array.prototype.splice.call(arguments, 2);
            this.m[a] = new b;
            this.m[a].screen = document.getElementById(a);
            this.m[a].load(function() {
                this.m[a].init.apply(this.m[a], d)
            }.bind(this))
        };
        D.prototype.start = function(a) {
            var b = Array.prototype.splice.call(arguments, 1);
            if (this.m[a]) {
                for (var c = document.querySelectorAll("#screens .screen"), d = 0; d < c.length; d++) c[d].classList.remove("show");
                this.o && this.m[this.o] && this.m[this.o].xb();
                this.o = a;
                this.m[a].screen && (this.m[a].screen.classList.add("show"), this.A());
                this.m[a].show.apply(this.m[a], b)
            } else console.warn('No state "' + a + '"')
        };

        function E() {
            var a = q;
            return a.o && a.m[a.o] ? a.m[a.o] : null
        }
        D.prototype.A = function() {
            if (h) {
                for (var a = Math.min(1, window.innerWidth / 640, window.innerHeight / 960), b = document.querySelectorAll(".scale"), c = 0; c < b.length; c++) b[c].style.transform = "scale3d(" + a + ", " + a + ", 1)";
                window.innerWidth < window.innerHeight ? document.getElementById("turnDevice").classList.add("hide") : document.getElementById("turnDevice").classList.remove("hide")
            }
        };

        function x(a) {
            this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
            this.withCredentials = !1
        }
        x.prototype.constructor = x;
        x.prototype.load = function(a, b, c, d) {
            var e = new THREE.XHRLoader(this.manager);
            e.setWithCredentials(this.withCredentials);
            e.load(a, function(a) {
                try {
                    var c = JSON.parse(a)
                } catch (e) {
                    if (d) d(e);
                    else throw e;
                }
                b(c)
            }, c, d)
        };

        function y(a) {
            this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
            this.withCredentials = !1
        }
        y.prototype.constructor = y;
        y.prototype.load = function(a, b, c, d) {
            var e = new THREE.XHRLoader(this.manager);
            e.setWithCredentials(this.withCredentials);
            e.load(a, function(a) {
                b(a)
            }, c, d)
        };

        function F(a, b) {
            this.Ia = a;
            this.ra = b ? window.sessionStorage : window.localStorage
        }
        Object.defineProperties(F.prototype, {
            locked: {
                get: function() {
                    var a;
                    try {
                        a = this.ra.getItem(this.Ia)
                    } catch (b) {
                        a = null
                    }
                    return a ? !1 : !0
                },
                set: function(a) {
                    try {
                        a ? this.ra.removeItem(this.Ia) : this.ra.setItem(this.Ia, this.Ia)
                    } catch (b) {}
                }
            }
        });

        function G(a, b) {
            this.m = a;
            this.ra = b ? window.sessionStorage : window.localStorage
        }
        G.prototype.getItem = function(a, b) {
            var c;
            try {
                c = this.ra.getItem(this.m + a)
            } catch (d) {
                c = b
            }
            return null === c ? b : c
        };
        G.prototype.setItem = function(a, b) {
            try {
                this.ra.setItem(this.m + a, b)
            } catch (c) {}
        };

        function H() {
            var a = !1,
                b = navigator.userAgent || navigator.vendor || window.opera;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
                    4))) a = !0;
            return a
        }

        function I() {}
        I.prototype = Object.create(C.prototype);
        I.prototype.constructor = I;
        I.prototype.show = function() {
            this.m = new w;
            this.m.onLoad = function() {
                da();
                l = v.ka("music_01");
                l.volume(.4);
                l.loop(!0);
                l.play();
                n = v.ka("collect_01");
                q.add("menu", J);
                q.add("game", K);
                q.add("highscore", L);
                q.add("charSelect", M);
                q.add("instructions", N);
                q.add("gameOver", O);
                q.start("menu")
            }.bind(this);
            this.m.onProgress = function(a, c, d) {
                this.screen.querySelector(".percent").innerHTML = Math.round(c / d * 100) + "%"
            }.bind(this);
            var a = v.wb("preload");
            "audio threeObject threeJson threeTexture text json".split(" ").forEach(function(b) {
                b in
                    a && a[b].forEach(function(a) {
                        if ("series" in a)
                            for (var d = a.series.start; d < a.series.start + a.series.count; d++) {
                                var e = ("00000000000000000" + d).substr(-a.series.pad),
                                    f = {};
                                Object.getOwnPropertyNames(a).forEach(function(b) {
                                    "series" != b && ("string" == typeof a[b] ? f[b] = a[b].replace("%n", e) : Array.isArray(a[b]) ? (f[b] = [], a[b].forEach(function(a, c) {
                                        f[b][c] = a.replace("%n", e)
                                    })) : console.error("unsupported type " + typeof typeof a[b]))
                                }, this);
                                P(this, b, f)
                            } else P(this, b, a)
                    }, this)
            }, this)
        };

        function P(a, b, c) {

            switch (b) {
                case "audio":
                    ca(a.m, c.id, c.urls);
                    break;
                case "threeObject":
                    aa(a.m, c.id, c.url);
                    break;
                case "threeJson":
                    ba(a.m, c.id, c.url);
                    break;
                case "threeTexture":
                    z(a.m, c.id, c.url);
                    break;
                case "json":
                    A(a.m, c.id, c.url);
                    break;
                case "text":
                    B(a.m, c.id, c.url);
                    break;
                default:
                    console.warn("unsupported type :" + b)
            }
        }

        function da() {


            var a = document.getElementById("mute");
            a.classList.remove("hide");
            a.addEventListener("click", function() {
                a.classList.toggle("muted");
                a.classList.contains("muted") ? Howler.mute(!0) : Howler.mute(!1)
            })
        }

        function J() {}
        J.prototype = Object.create(C.prototype);
        g = J.prototype;
        g.constructor = J;
        g.init = function() {
            this.m = new F("alvinrunner3dpowerupsinstructions", !0);
            this.C = this.screen.querySelector("button.play");
            this.C.addEventListener("click", this.Yb.bind(this));
            this.B = this.screen.querySelector("button.instructions");
            this.B.addEventListener("click", this.nb.bind(this));
            this.A = this.screen.querySelector("button.highscore");
            this.A.addEventListener("click", this.Zb.bind(this))
        };
        g.show = function() {
            r.track("menue")
        };
        g.Yb = function() {
            n.play();
            this.m.locked ? (this.m.locked = !1, this.nb()) : q.start("charSelect")
        };
        g.nb = function() {
            n.play();
            //q.start("instructions")
        };
        g.Zb = function() {
            n.play();
            q.start("highscore")
        };

        function M() {}
        M.prototype = Object.create(C.prototype);
        g = M.prototype;
        g.constructor = M;
        g.init = function() {
            this.m = this.screen.querySelector("button.alvin");
            this.m.addEventListener("click", this.vc.bind(this));
            this.o = this.screen.querySelector("button.simon");
            this.o.addEventListener("click", this.wc.bind(this))
        };
        g.show = function() {
            r.track("charakter-auswahl")
        };
        g.vc = function() {
            n.play();
            q.start("game", "alvin")
        };
        g.wc = function() {
            n.play();
            q.start("game", "simon")
        };

        function L() {}
        L.prototype = Object.create(C.prototype);
        L.prototype.constructor = L;
        L.prototype.init = function() {
            this.m = this.screen.querySelector(".frame");
            this.B = this.screen.querySelector(".templates .entry");
            this.A = this.screen.querySelector("button.back");
            this.A.addEventListener("click", this.o.bind(this))
        };
        L.prototype.o = function() {
            n.play();
            q.start("menu")
        };
        L.prototype.show = function() {
            for (r.track("highscore"); this.m.firstChild;) this.m.removeChild(this.m.firstChild);
            r.addOnceListener(FSToggoApi.event.LOADED, function(a) {
                var b = 100,
                    c = t.getItem("name", null),
                    d = t.getItem("score", 0);
                this.screen.querySelector(".yourScore .name").innerHTML = c;
                for (var e = 0; e < a.length; e++) {
                    var f = this.B.cloneNode(!0);
                    f.querySelector(".position").innerHTML = a[e].position + ".";
                    f.querySelector(".score").innerHTML = a[e].score;
                    f.querySelector(".name").innerHTML = a[e].nickName;
                    a[e].nickName ==
                        c && a[e].score == d && b > a[e].position && (b = a[e].position);
                    10 > e && this.m.appendChild(f)
                }
                100 > b ? (this.screen.querySelector(".yourScore .position").innerHTML = b + ".", this.screen.querySelector(".yourScore").classList.remove("hide")) : d ? (this.screen.querySelector(".yourScore .position").innerHTML = "99+", this.screen.querySelector(".yourScore .score").innerHTML = d, this.screen.querySelector(".yourScore").classList.remove("hide")) : this.screen.querySelector(".yourScore").classList.add("hide")
            }.bind(this));
            r.pullScores(99)
        };

        function N() {
            this.data = [{
                "class": "step-01",
                text: "Simon hat f\u00fcr einen Wettbewerb ein cooles Superhelden-Skateboard namens Munk-Mobil erfunden. "
            }, {
                "class": "step-02",
                sound: v.ka("intro_02"),
                text: "Alvin m\u00f6chte seinem Bruder beim Wettbewerb helfen. Ist doch Ehrensache unter Superhelden!"
            }, {
                "class": "step-03",
                sound: v.ka("intro_03"),
                text: "Simon ist jetzt der fantastische Munk-Man! Damit Alvin ihm nicht die Show stiehlt, ist sein Kost\u00fcm eher ungew\u00f6hnlich..."
            }, {
                "class": "step-04",
                sound: v.ka("intro_04"),
                text: "Jetzt muss das Munk-Mobil noch auf der Rennstrecke getestet werden. Hilfst du Alvin und Simon?"
            }, {
                "class": "step-05",
                text: {
                    desktop: "Weiche den Hindernissen aus. Mit den Pfeiltasten steuerst du nach links und rechts.",
                    mobile: "Weiche den Hindernissen aus. Wische nach links oder rechts, um zu steuern."
                }
            }, {
                "class": "step-06",
                text: {
                    desktop: "Mit den Pfeiltasten springst oder duckst du dich.",
                    mobile: "Wische mit dem Finger nach oben oder unten, um zu springen oder dich zu ducken."
                }
            }, {
                "class": "step-07",
                text: "Sammle M\u00fcnzen um deine Spezialf\u00e4higkeit aufzuladen. Simon kann einen Magneten aktivieren."
            }, {
                "class": "step-08",
                text: " Alvin kann die Zeit verlangsamen um besser ausweichen zu k\u00f6nnen"
            }];
            this.m = 0
        }
        N.prototype = Object.create(C.prototype);
        g = N.prototype;
        g.constructor = N;
        g.init = function() {
            this.o = this.screen.querySelector("button.next");
            this.o.addEventListener("click", this.hc.bind(this));
            this.o = this.screen.querySelector("button.prev");
            this.o.addEventListener("click", this.oc.bind(this));
            this.A = this.screen.querySelector("button.play");
            this.A.addEventListener("click", this.Xb.bind(this))
        };
        g.show = function() {
            l.fade(.4, .2, 500);
            this.m = 0;
            var a = this.screen.querySelector(".image");
            this.data.forEach(function(b) {
                a.classList.remove(b["class"])
            }.bind(this));
            Q(this, 0)
        };
        g.xb = function() {
            l.fade(.2, .4, 500)
        };
        g.hc = function() {
            n.play();
            Q(this, 1)
        };
        g.oc = function() {
            n.play();
            Q(this, -1)
        };

        function Q(a, b) {
            var c = a.screen.querySelector(".buttons"),
                d = a.m;
            a.m += b;
            0 > a.m ? a.m = 0 : a.m > a.data.length - 1 && (a.m = a.data.length - 1);
            var e = a.screen.querySelector(".image"),
                f = a.screen.querySelector(".text");
            "sound" in a.data[d] && a.data[d].sound.stop();
            "sound" in a.data[a.m] && a.data[a.m].sound.play();
            e.classList.remove(a.data[d]["class"]);
            e.classList.add(a.data[a.m]["class"]);
            "string" == typeof a.data[a.m].text ? f.innerHTML = a.data[a.m].text : H() ? f.innerHTML = a.data[a.m].text.mobile : f.innerHTML = a.data[a.m].text.desktop;
            c.classList.remove("first");
            c.classList.remove("last");
            0 == a.m ? c.classList.add("first") : a.m == a.data.length - 1 && c.classList.add("last");
            r.track("anleitung-" + (a.m + 1))
        }
        g.Xb = function() {
            n.play();
            q.start("charSelect")
        };

        function O() {
            this.o = !1;
            this.score = 0
        }
        O.prototype = Object.create(C.prototype);
        g = O.prototype;
        g.constructor = O;
        g.init = function() {
            this.C = this.screen.querySelector("button.play");
            this.C.addEventListener("click", this.Vb.bind(this));
            this.B = this.screen.querySelector("button.instructions");
            this.B.addEventListener("click", this.Wb.bind(this));
            this.A = this.screen.querySelector("button.highscore");
            this.A.addEventListener("click", this.mb.bind(this));
            this.I = this.screen.querySelector("button.upload");
            this.I.addEventListener("click", this.Jb.bind(this));
            /*
            this.m = this.screen.querySelector("input.name");
            this.m.addEventListener("keypress",
                function(a) {
                    13 === a.which && (n.play(), this.m.blur(), this.Jb())
                }.bind(this));
            this.m.addEventListener("focus", function() {
                h = !1
            }.bind(this));
            this.m.addEventListener("blur", function() {
                h = !0
            }.bind(this))
            */
        };
        g.show = function(a) {
            this.o = !1;
            a ? (this.score = a, this.screen.classList.remove("noNameEntry"), v.ka("highscore_01").play()) : (this.score = 0, this.screen.classList.add("noNameEntry"));
            this.screen.querySelector("p.score").innerHTML = this.score
        };
        g.Vb = function() {
            n.play();
            q.start("charSelect")
        };
        g.Wb = function() {
            n.play();
            //q.start("instructions")
        };
        g.mb = function() {
            n.play();
            q.start("highscore")
        };
        g.Jb = function() {
            n.play();
            var a = this.m.value.trim();
            1 > a.length ? this.m.value = "" : this.o || (this.o = !0, t.setItem("score", this.score), t.setItem("name", a), r.addOnceListener(FSToggoApi.event.ADDED, function() {
                this.mb()
            }.bind(this)), r.addOnceListener(FSToggoApi.event.ERROR_BADWORD, function() {
                this.screen.querySelector(".nameEntryScreen input.name").value = "";
                this.o = !1
            }.bind(this)), r.pushScore(a, this.score))
        };

        function K() {
            this.W = {
                alvin: 1,
                simon: 2
            };
            this.o = ["c-3", "c-2", "c-1", "c-go"];
            this.m = 0
        }
        K.prototype = Object.create(C.prototype);
        K.prototype.constructor = K;
        K.prototype.init = function() {
            this.eb = this.screen.querySelector(".score");
            this.B = this.screen.querySelector(".countDown");
            this.C = this.screen.querySelector(".flagHolder");
            this.I = this.screen.querySelector(".flag");
            this.Fa = this.screen.querySelector("button.powerupButton");
            this.cb = this.screen.querySelector(".powerupButtonActive");
            this.bb = this.screen.querySelector(".powerupFg");
            this.Z = new R(H(), this)
        };
        K.prototype.show = function(a) {
            r.track("play");
            this.eb.innerHTML = 0;
            this.Z.start(this.W[a || "alvin"])
        };

        function ea() {
            var a = E();
            a.m = -1;
            a.C.classList.add("show");
            window.setTimeout(function() {
                this.I.classList.add("animate")
            }.bind(a), 100);
            a.A()
        }
        K.prototype.A = function() {
            var a = this.m;
            this.m++;
            0 <= a && a < this.o.length && this.B.classList.remove(this.o[a]);
            this.m == this.o.length - 1 && (this.I.classList.remove("animate"), window.setTimeout(function() {
                this.C.classList.remove("show")
            }.bind(this), 1E3));
            this.m < this.o.length && (this.B.classList.add(this.o[this.m]), window.setTimeout(this.A.bind(this), 1E3))
        };
        window.addEventListener("load", function() {
            q = new D;
            r = new FSToggoApi("alvinrunner3dpowerups");
            t = new G("alvinrunner3dpowerups", !1);
            var a = new w;
            a.onLoad = function() {
                q.add("preloader", I);
                q.start("preloader")
            };
            B(a, "tpl_preloader", "tpl/preloader.tpl");
            A(a, "preload", "data/preload.json");
            z(a, "preloadImg", "assets/img/loading.jpg");
            z(a, "turnDeviceImg", "assets/img/turn_device.jpg")
        });

        function R(a, b) {



            this.Rb = new THREE.Vector3(0, 2.5, 2);
            this.Sb = new THREE.Vector3(0, .5, -4);
            this.Ub = !a || !1;
            this.jb = !1;
            this.C = this.m = this.A = this.W = this.Sa = null;
            this.I = [];
            this.needsUpdate = this.running = !1;
            this.mc = 25;
            this.ca = 0;
            this.P = b;
            this.Ba = new SheepFX;
            this.Ba.setParticleSize(window.innerHeight * window.devicePixelRatio);
            this.fa = {
                U: null
            };
            this.o = {
                Cc: null,
                Gc: null,
                enabled: !1,
                fps: 0,
                Wa: 0,
                yb: 0,
                zb: 0,
                Ec: 0,
                Za: 0,
                Qa: !1,
                Ab: [],
                ea: 0
            };
            this.i = {
                ia: null,
                D: new THREE.Object3D,
                ba: 1,
                ua: null,
                wa: null,
                va: null,
                T: !1,
                score: 0,
                speed: 15,
                step: .2,
                lc: 1,
                V: "center",
                hb: 10,
                O: new THREE.Raycaster,
                Bc: 0,
                aa: !1,
                X: !1,
                Ea: !0,
                la: 0,
                ha: .6,
                ec: .25,
                ac: function() {
                    this.aa = !0;
                    this.Ea = this.X = !1;
                    this.la = 15 * this.ha / this.speed;
                    this.D.na = 2
                },
                $b: function() {
                    this.X = !0;
                    this.Ea = this.aa = !1;
                    this.la = 15 * this.ha / this.speed;
                    this.D.na = 0
                },
                ja: {
                    L: null,
                    ca: 0
                },
                v: {
                    U: 0,
                    rb: 1,
                    type: null,
                    Ra: null,
                    da: 0,
                    length: 7,
                    $: 0,
                    Mb: .02,
                    Ob: 8,
                    Nb: 8,
                    Kb: .4,
                    Lb: .7,

                    activate: function() {



                        .9999 < this.i.v.$ && (this.i.v.$ = 0, this.i.v.type = 1 == this.i.ba ? this.i.v.rb : this.i.v.U, this.i.v.da = this.i.v.length)
                    }.bind(this)
                },
                ma: {
                    mesh: null,
                    xa: 0,
                    Bb: 1,
                    Pb: 3
                }
            };
            this.B = {
                Ca: null,
                lb: 20,
                N: []
            };
            this.oa = {
                list: [],
                update: function(a) {
                    for (var b = this.oa.list, e = this.oa.list.length, f = 0; f < e; f++) b[f].update(a)
                }.bind(this)
            };
            this.j = {
                $a: new THREE.MeshLambertMaterial({
                    color: 16777215,
                    transparent: !1,
                    side: THREE.DoubleSide
                }),
                ab: new THREE.MeshLambertMaterial({
                    color: 16777215,
                    transparent: !0,
                    alphaTest: .3
                }),
                gc: new THREE.MeshBasicMaterial({
                    color: 0,
                    transparent: !1
                }),
                textures: {
                    sb: null,
                    tb: null,
                    qb: null,
                    Gb: null,
                    Ib: null,
                    vb: null,
                    ob: null
                },
                u: {
                    R: null,
                    S: null,
                    K: null,
                    ub: null,
                    fb: null,
                    Da: null
                },
                materials: {
                    Ac: new THREE.MeshLambertMaterial({
                        color: 16777215
                    }),
                    Ua: new THREE.MeshLambertMaterial({
                        color: 16777215,
                        skinning: !0
                    }),
                    Va: new THREE.MeshLambertMaterial({
                        color: 16777215,
                        skinning: !0
                    }),
                    pb: new THREE.MeshLambertMaterial({
                        color: 16777215,
                        skinning: !0
                    }),
                    Fb: new THREE.MeshBasicMaterial({
                        color: 16777215,
                        fog: !1
                    }),
                    Hb: new THREE.MeshBasicMaterial({
                        color: 22015,
                        blending: THREE.AdditiveBlending,
                        transparent: !0,
                        side: THREE.DoubleSide
                    }),
                    Ja: new THREE.MeshBasicMaterial({
                        color: 16777215,
                        blending: THREE.AdditiveBlending,
                        transparent: !0,
                        side: THREE.DoubleSide
                    })
                }
            };
            this.key = {
                up: !1,
                Ma: !1,
                left: !1,
                right: !1,
                w: !1,
                a: !1,
                s: !1,
                d: !1,
                gb: !1,
                kc: !1,
                jc: !1,
                fc: null
            };
            this.key.Dc = 0;
            this.key.Fc = 0;
            this.key.ib = 0;
            this.key.Xa = 0;
            this.Qb = this.update.bind(this);
            this.Tb = new THREE.Clock;
            document.addEventListener("keydown", function(a) {
                this.key.fc = a;
                38 !== a.keyCode || this.key.up || (this.key.up = !0);
                40 !== a.keyCode || this.key.Ma || (this.key.Ma = !0);
                37 === a.keyCode && (this.key.left = !0);
                39 === a.keyCode && (this.key.right = !0);
                87 === a.keyCode && (this.key.w = !0);
                65 === a.keyCode &&
                    (this.key.a = !0);
                83 === a.keyCode && (this.key.s = !0);
                68 === a.keyCode && (this.key.d = !0);
                81 === a.keyCode && (this.key.q = !0);
                69 === a.keyCode && (this.key.e = !0);
                32 === a.keyCode && (this.key.gb = !0);
                33 === a.keyCode && (this.key.kc = !0);
                34 === a.keyCode && (this.key.jc = !0);
                38 !== a.keyCode && 40 !== a.keyCode && 37 !== a.keyCode && 39 !== a.keyCode && 32 !== a.keyCode || 32 === a.keyCode && "INPUT" == document.activeElement.tagName || a.preventDefault()
            }.bind(this), !1);
            fa(this)
        }
        g = R.prototype;
        g.init = function() {
            this.L = new THREE.WebGLRenderer({
                antialias: this.Ub
            });
            this.L.setPixelRatio(window.devicePixelRatio);
            this.L.setSize(window.innerWidth, window.innerHeight);
            this.L.domElement.setAttribute("id", "renderer");
            this.L.setClearColor("#75c9ff");
            this.L.autoClear = !1;
            this.canvas = document.getElementById("canvas");
            this.canvas.firstChild ? this.canvas.replaceChild(this.L.domElement, this.canvas.firstChild) : this.canvas.appendChild(this.L.domElement);
            this.scene = new THREE.Scene;
            this.scene.fog = new THREE.Fog("#4eabe6",
                80, 100);
            this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, .1, 1E3);
            this.za = new THREE.Object3D;
            this.za.add(this.camera);
            this.i.ia = new THREE.Object3D;
            this.scene.add(this.i.ia);
            this.i.ia.add(this.za);
            this.za.rotation.y = THREE.Math.degToRad(180);
            this.i.ia.add(this.i.D);
            this.i.ua = new THREE.Object3D;
            this.i.D.add(this.i.ua);
            this.i.ua.position.y = .5;
            this.i.ua.position.z = 5;
            this.i.wa = new THREE.Object3D;
            this.i.D.add(this.i.wa);
            this.i.wa.position.x = -1;
            this.i.wa.position.y = .5;
            this.i.wa.position.z =
                .5;
            this.i.va = new THREE.Object3D;
            this.i.D.add(this.i.va);
            this.i.va.position.x = 1;
            this.i.va.position.y = .5;
            this.i.va.position.z = .5;
            this.j.$a.map.anisotropy = this.L.getMaxAnisotropy();
            var a = new THREE.DirectionalLight("rgb(255,255,255)", .3);
            a.position.set(.2, 1, .5);
            this.scene.add(a);
            a = new THREE.AmbientLight("rgb(255, 247, 242)", .2);
            this.scene.add(a);
            var a = new THREE.CircleGeometry(4, 24),
                b = new THREE.MeshBasicMaterial({
                    color: 0,
                    transparent: !0,
                    opacity: .1
                });
            this.i.shadow = new THREE.Mesh(a, b);
            this.j.u.K.skeleton.bones[1].add(this.i.shadow);
            this.i.shadow.rotation.x = THREE.Math.degToRad(-90);
            this.i.shadow.position.y = -10;
            this.i.shadow.position.z = -.5;
            this.j.u.K.skeleton.bones[1].add(this.j.u.R);
            this.j.u.K.skeleton.bones[1].add(this.j.u.S);
            this.j.u.R.position.z = -.7;
            this.j.u.S.position.z = -.7;
            this.j.u.K.position.y = .8;
            this.Ha = new THREE.Scene;
            this.fa.U = this.Ba.effectFromJson(this.j.json.bc, this.j.textures.vb);
            this.fa.U.frustumCulled = !1;
            this.fa.U.emitters[0].disable();
            this.Ha.add(this.fa.U);
            this.i.ma.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1,
                1), this.j.materials.Ja);
            this.i.ma.mesh.rotation.x = 90 * .0174533;
            this.i.ma.mesh.position.set(0, .2, -10);
            this.j.materials.Ja.opacity = 0;
            this.Ha.add(this.i.ma.mesh);
            a = new THREE.CylinderGeometry(0, .1, 4, 4, 1, !0);
            b = new THREE.MeshBasicMaterial;
            b.side = THREE.DoubleSide;
            b.depthTest = !1;
            this.B.Ca = new THREE.Object3D;
            this.Ha.add(this.B.Ca);
            for (var c = 0; c < this.B.lb; c++) {
                var d = new THREE.Mesh(a, b);
                this.B.Ca.add(d);
                this.B.N.push(d);
                this.B.N[c].visible = !1;
                this.B.N[c].Cb = 7;
                d.position.z = -10 - c / this.B.lb * 10;
                d.rotation.x = .5 * -Math.PI
            }
            "highp" !=
            this.L.capabilities.precision ? (this.j.u.K.skeleton.bones[1].add(this.j.u.Da), this.j.u.Da.rotation.y = THREE.Math.degToRad(-180), this.j.u.Da.scale.set(2, 4, 10)) : this.i.ja.L = ga(this, this.j.u.K.skeleton.bones[1]);
            ha(this, this.i.ba);
            this.scene.add(this.j.u.fb);
            this.camera.position.copy(this.Rb);
            window.addEventListener("resize", this.ic.bind(this), !0);
            this.Aa = new Hammer(this.L.domElement);
            this.Aa.get("swipe").set({
                direction: Hammer.DIRECTION_ALL,
                threshold: 10
            });
            this.Aa.on("swipeleft", function() {
                S(this, "left");
                this.o.ea++
            }.bind(this));
            this.Aa.on("swiperight", function() {
                S(this, "right");
                this.o.ea++
            }.bind(this));
            this.Aa.on("swipeup", function() {





                0 == this.i.aa && S(this, "up");
                this.o.ea++
            }.bind(this));
            this.Aa.on("swipedown", function() {

                0 == this.i.X && S(this, "down");
                this.o.ea++
            }.bind(this));
            this.o.enabled && (console.log(this.L), a = document.createElement("button"), this.P.screen.appendChild(a), a.style.position = "absolute", a.style.right = "5px", a.style.top = "120px", a.style.width = "120px", a.innerHTML = "Save Testing Info", a.style.right =
                "5px", a.style.backgroundColor = "white", a.style.zIndex = "10000", a.onclick = function() {
                    var a = this.generateUUID(),
                        b = "testingInfo-" + a,
                        c = this.o.Ab,
                        a = JSON.stringify({
                            game: "Alvin Hover " + gameinfo.version,
                            date: new Date,
                            loops: this.o.Za,
                            twitch: this.o.ea,
                            id: a,
                            info: navigator.userAgent,
                            fps: (this.o.Wa / this.o.Za).toFixed(2),
                            prec: this.L.getPrecision(),
                            collisions: c
                        }, null, "\t");
                    saveAs(new Blob([a], {
                        type: "json;charset=utf-8"
                    }), b + ".json")
                }.bind(this));
            this.P.cb.addEventListener("click", function() {
                this.i.v.activate()
            }.bind(this))
        };











        function ia(a) {








             var b = a.j.M.Y.filter(function(a) {


                return "road_easy_straight_1" === a.name
            })[0];
            a.A = T(a, b);
            a.A.La();
            a.A.inUse = !0;
            a.A.ya();
            a.I = [];
            for (b = 0; b < a.j.M.Y.length; b++) 0 == a.j.M.Y[b].inUse && a.I.push(a.j.M.Y[b]);
            b = THREE.Math.randInt(0, a.I.length - 1);
            a.m = T(a, a.I[b]);
            a.m.mesh.rotation.z = a.A.mesh.rotation.z;
            a.m.mesh.rotation.z += a.A.Ya.z;
            a.m.mesh.position.set(a.A.J[a.A.J.length - 1].x, a.A.J[a.A.J.length - 1].y, a.A.J[a.A.J.length - 1].z);
            a.m.La();
            a.m.inUse = !0;
            a.m.ya();
            a.I = [];
            for (b = 0; b < a.j.M.Y.length; b++) 0 == a.j.M.Y[b].inUse &&
                a.I.push(a.j.M.Y[b]);
            b = THREE.Math.randInt(0, a.I.length - 1);
            a.C = T(a, a.I[b]);
            a.C.mesh.rotation.z = a.m.mesh.rotation.z;
            a.C.mesh.rotation.z += a.m.Ya.z;
            a.C.mesh.position.set(a.m.J[a.m.J.length - 1].x, a.m.J[a.m.J.length - 1].y, a.m.J[a.m.J.length - 1].z);
            a.C.La();
            a.C.inUse = !0;
            a.C.ya();
            var c = a.A.Ga.getTangentAt(a.i.step).normalize(),
                b = new THREE.Vector3,
                d = new THREE.Vector3(0, 0, 1);
            b.crossVectors(d, c).normalize();
            c = Math.acos(d.dot(c));
            d = new THREE.Quaternion;
            d.setFromAxisAngle(b, c);
            a.i.ia.quaternion.copy(d);
            ja(a)
        }

        function T(a, b) {
            var c = b.mesh;
            a.scene.add(c);
            c.rotation.x = THREE.Math.degToRad(-90);



            return b
        }

        function ja(a) {
            U(a.j.u.K.G, "riding", 0);
            U(a.j.u.R.G, "riding", 0);
            U(a.j.u.S.G, "riding", 0);
            a.i.step = .2;
            a.i.speed = 15;
            a.i.T = !1;
            a.i.V = "center";
            a.i.v.type = null;
            a.i.v.$ = 0;
            V(a);
            a.j.audio.magnet.stop();
            a.i.aa = !1;
            a.i.X = !1;
            a.i.D.na = 0;
            W(a, "up");
            W(a, "down");
            W(a, "left");
            W(a, "right");
            a.za.position.copy(a.i.D.position);
            a.i.D.position.x = 0;
            a.i.D.position.y = 0;
            a.i.score = 0
        }



        /*
         ---------- gameOver ---------
         facebook ads RewardedVideoAd
        */

        g.reset = function() {

setTimeout(function(){ InterstitialAd(); }, 2); // timer dyal rewarded video

            this.running = this.needsUpdate = !1;
            this.scene.remove(this.A.mesh);
            this.scene.remove(this.m.mesh);
            this.scene.remove(this.C.mesh);
            this.A.inUse = !1;
            this.m.inUse = !1;
            this.C.inUse = !1;
            null != this.W && (this.scene.remove(this.W.mesh), this.W.inUse = !1);
            this.W = this.C = this.m = this.A = null;
            q.start("gameOver", Math.round(this.i.score))


             /*  ----------- and ----------------- */





 









        };
        g.start = function(a) {
            this.P = E();
            ha(this, a);
            ia(this);
            this.needsUpdate = !0;
            this.update();
            this.i.v.da = 0;
            1 == this.i.ba ? (this.P.cb.style.backgroundPosition = "-407px -1px", this.P.Fa.style.backgroundPosition = "-213px -1px") : (this.P.cb.style.backgroundPosition = "-491px -1px", this.P.Fa.style.backgroundPosition = "-310px -1px");
            ea();
            setTimeout(function() {
                this.running = !0;
                1 == this.i.ba ? this.j.audio.spawn_alvin.play() : 2 == this.i.ba && this.j.audio.spawn_simon.play()
            }.bind(this), 3E3)
        };
        g.ic = function() {
            this.Ba && this.Ba.setParticleSize(window.innerHeight * window.devicePixelRatio);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.L.setSize(window.innerWidth, window.innerHeight)
        };

        function W(a, b) {
            "up" == b && (a.key.up = !1, a.key.ib = 0);
            "down" == b && (a.key.Ma = !1, a.key.Xa = 0);
            "left" == b && (a.key.left = !1);
            "right" == b && (a.key.right = !1)
        }

        function ka(a) {
            for (var b = new THREE.Geometry, c = 0; c < a.length; c++) a[c].updateMatrix(), b.merge(a[c].geometry, a[c].matrix);
            return b
        }

        function X(a, b) {
            a.G = new THREE.AnimationMixer(a);
            for (var c = 0; c < a.geometry.animations.length; ++c) a.G.clipAction(a.geometry.animations[c]);
            a.G.clipAction("riding").reset().setEffectiveWeight(1).play();
            b.push(a.G);
            a.G.Pa = a.G.clipAction("riding")
        }

        function U(a, b, c) {
            a.Pa != a.clipAction(b) && (a.stopAllAction(), a.Pa.crossFadeTo(a.clipAction(b), c, !1).play(), a.Pa = a.clipAction(b))
        }

        function Y(a, b, c, d, e) {
            U(b, c, d);
            setTimeout(function() {
                this.i.T || b.Pa != b.clipAction(c) || U(b, "riding", d)
            }.bind(a), 1E3 * (e + d))
        }

        function ha(a, b) {
            1 == b ? (a.j.u.R.visible = !0, a.j.u.S.visible = !1, a.i.ba = 1) : 2 == b && (a.j.u.R.visible = !1, a.j.u.S.visible = !0, a.i.ba = 2)
        }

        function ga(a, b) {
            var c = [],
                d = THREE.Math.degToRad(270),
                d = 1 * Math.cos(d),
                e = THREE.Math.degToRad(390),
                f = 1 * Math.cos(e),
                e = 1 * Math.sin(e),
                k = THREE.Math.degToRad(510),
                u = 1 * Math.cos(k),
                u = 1 * Math.cos(k),
                k = 1 * Math.sin(k);
            c.push(new THREE.Vector3(u, k + -1, 0), new THREE.Vector3(d, k + -1, 6), new THREE.Vector3(f, e + -1, 0));
            d = new THREE.TrailRenderer(a.scene, !1);
            f = THREE.TrailRenderer.createBaseMaterial();
            f.uniforms.headColor.value = new THREE.Vector4(0, .8, 1, .7);
            f.uniforms.tailColor.value = new THREE.Vector4(0, 0, 0, 0);
            d.initialize(f,
                7, !1, 1, c, b);
            d.activate();
            return d
        }
        g.generateUUID = function() {
            var a = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) {
                var c = (a + 16 * Math.random()) % 16 | 0;
                a = Math.floor(a / 16);
                return ("x" == b ? c : c & 3 | 8).toString(16)
            })
        };

        function la(a) {


            if (0 >= a.i.v.da) {
                if (a.Z == a.i.v.$) return;
                a.Z = a.i.v.$;
                var b = "polygon(50% 50%, 50% 0%";
                .25 < a.Z && (b += ", 100% 0%, 100% 50%");
                .5 < a.Z && (b += ", 100% 100%, 50% 100%");
                .75 < a.Z && (b += ", 0% 100%, 0% 50%");
                1 == a.Z && (b += ", 0% 0%, 50% 0%");
                b += ", " + Math.round(50 * (3 * Math.sin(a.Z * Math.PI * 2) + 1)) + "% " + Math.round(100 - 50 * (3 * Math.cos(a.Z * Math.PI * 2) + 1)) + "%";
                a.P.bb.style.clipPath = b + ")";
                a.fill = 1 == a.Z ? 0 : 1
            } else a.fill = 1 - a.i.v.da / a.i.v.length;
            b = "polygon(50% 50%, 50% 0%";
            .25 < a.fill && (b += ", 100% 0%, 100% 50%");
            .5 < a.fill &&
                (b += ", 100% 100%, 50% 100%");
            .75 < a.fill && (b += ", 0% 100%, 0% 50%");
            1 == a.fill && (b += ", 0% 0%, 50% 0%");
            b += ", " + Math.round(50 * (3 * Math.sin(a.fill * Math.PI * 2) + 1)) + "% " + Math.round(100 - 50 * (3 * Math.cos(a.fill * Math.PI * 2) + 1)) + "%";
            b += ")";
            a.P.Fa.style.clipPath = b;
            if (a.P.Fa.style.clipPath != b && a.P.bb.style.clipPath != b) {
                if (0 >= a.i.v.da) {
                    if (a.kb == a.i.v.$) return;
                    a.kb = a.i.v.$;
                    a.P.bb.style.clip = "rect(" + 104 * (1 - a.kb) + "px 104px 104px 0px)";
                    a.fill = 1 == a.Z ? 0 : 1
                } else a.fill = 1 - a.i.v.da / a.i.v.length;
                a.P.Fa.style.clip = "rect(0px 95px " +
                    95 * a.fill + "px 0px)"
            }
        }

        function fa(a) {


            

            a.j.textures = {};
            a.j.audio = {};
            a.j.json = {};
            a.Ta = !/iP[ao]d|iPhone/i.test(navigator.userAgent);
            var b, c, d;
            d = "collect_01 crash_01 crouch_01 jump_01 laneSwitch_left laneSwitch_right scream_alvin scream_simon spawn_alvin spawn_simon start_01 magnet slowdown speedup".split(" ");
            for (b = 0; b < d.length; b++) a.j.audio[d[b]] = v.ka(d[b]);
            a.j.audio.magnet._loop = !0;
            a.j.audio.magnet._volume = .3;
            a.j.audio.slowdown._volume = .6;
            a.j.audio.speedup._volume = .6;
            a.j.json.bc = v.wb("fx_magnet");
            b = v.ga("atlas_01");
            b.magFilter =
                THREE.LinearFilter;
            b.minFilter = THREE.NearestMipMapNearestFilter;
            a.j.$a.map = b;
            a.j.ab.map = b;
            b = v.ga("tex_alvin");
            a.j.textures.sb = b;
            a.j.materials.Ua.map = a.j.textures.sb;
            a.j.materials.Ua.map.minFilter = THREE.LinearFilter;
            b = v.ga("skydome");
            a.j.textures.Gb = b;
            a.j.materials.Fb.map = a.j.textures.Gb;
            b = v.ga("tex_simon");
            a.j.textures.tb = b;
            a.j.materials.Va.map = a.j.textures.tb;
            a.j.materials.Va.map.minFilter = THREE.LinearFilter;
            b = v.ga("tex_hoverboard");
            a.j.textures.qb = b;
            a.j.materials.pb.map = a.j.textures.qb;
            b = v.ga("tex_trail");
            a.j.textures.Ib = b;
            a.j.materials.Hb.map = a.j.textures.Ib;
            b = v.ga("tex_particle");
            a.j.textures.vb = b;
            b = v.ga("tex_aura");
            a.j.textures.ob = b;
            a.j.materials.Ja.map = a.j.textures.ob;
            c = v.ta("alvin");
            a.j.u.R = new THREE.SkinnedMesh(c, a.j.materials.Ua, a.Ta);
            a.j.u.R.scale.set(2.5, 2.5, 2.5);
            X(a.j.u.R, a.oa.list);
            a.j.u.R.G.clipAction("crash").setLoop(THREE.LoopOnce).clampWhenFinished = !0;
            a.j.u.R.visible = !1;
            c = v.ta("coin");
            a.j.u.ub = new THREE.Mesh(c, a.j.ab);
            c = v.ta("sky");
            a.j.u.fb = new THREE.Mesh(c, a.j.materials.Fb);
            c = v.ta("trail_fallback");
            a.j.u.Da = new THREE.Mesh(c, a.j.materials.Hb);
            c = v.ta("simon");
            a.j.u.S = new THREE.SkinnedMesh(c, a.j.materials.Va, a.Ta);
            a.j.u.S.scale.set(2.5, 2.5, 2.5);
            X(a.j.u.S, a.oa.list);
            a.j.u.S.G.clipAction("crash").setLoop(THREE.LoopOnce).clampWhenFinished = !0;
            a.j.u.S.visible = !1;
            c = v.ta("hoverboard");
            a.j.u.K = new THREE.SkinnedMesh(c, a.j.materials.pb, a.Ta);
            a.j.u.K.scale.set(.09, .09, .09);
            X(a.j.u.K, a.oa.list);
            a.j.u.K.G.clipAction("crash").setLoop(THREE.LoopOnce).clampWhenFinished = !0;
            a.i.D.add(a.j.u.K);
            d = v.dc("roads");
            a.j.M = {
                Y: [],
                Oa: [],
                Na: []
            };
            for (b = 0; b < d.children.length; b++) {
                c = d.children[b].geometry;
                for (var e = [], f = [], k = [], u = [], m = 0; m < d.children[b].children.length; m++) {
                    var p = d.children[b].children[m].name.substring(0, d.children[b].children[m].name.indexOf("_"));
                    "waypoint" == p ? f.push({
                        F: {
                            x: d.children[b].children[m].position.x,
                            y: d.children[b].children[m].position.z,
                            z: -d.children[b].children[m].position.y
                        },
                        pc: d.children[b].children[m].rotation
                    }) : "coin" == p ? k.push({
                        F: {
                            x: d.children[b].children[m].position.x,
                            y: d.children[b].children[m].position.y,
                            z: d.children[b].children[m].position.z
                        }
                    }) : "collision" == p ? e.push(d.children[b].children[m]) : "deco" == p && u.push(d.children[b].children[m])
                }
                f.sort(function(a, b) {
                    return a.F.z > b.F.z ? -1 : a.F.z < b.F.z ? 1 : 0
                });
                k.sort(function(a, b) {
                    return a.F.z + a.F.x > b.F.z + b.F.x ? -1 : a.F.z + a.F.x < b.F.z + b.F.x ? 1 : 0
                });
                for (p = m = 0; p < f.length - 1; p++) var ma = new THREE.Vector3(f[p].F.x, f[p].F.y, f[p].F.z),
                    na = new THREE.Vector3(f[p + 1].F.x, f[p + 1].F.y, f[p + 1].F.z),
                    m = m + ma.distanceTo(na);
                0 < u.length ? dec = ka(u) : dec = null;
                e = ka(e);
                c = new oa(c, e, a.j.$a, a.j.ab,
                    a.j.gc, a.j.u.ub, f);
                c.H = k;
                c.name = d.children[b].name;
                c.Db = m;
                c.o();
                k = c.name.substr(c.name.indexOf("_") + 1, 4);
                "easy" == k ? a.j.M.Y.push(c) : "medi" == k ? a.j.M.Oa.push(c) : "hard" == k && a.j.M.Na.push(c)
            }
            a.init();
            a.jb = !0
        }
        g.update = function() {
            la(this);
            this.needsUpdate && requestAnimationFrame(this.Qb);
            var a = this.Tb.getDelta();
            this.delta = a = 1 * THREE.Math.clamp(a, .001, .03);
            this.o.enabled && (this.o.Za++, this.o.Wa += 1 / a, 1 == this.o.Qa && (this.i.score > this.o.yb && (this.o.yb = Math.round(this.i.score)), this.i.speed > this.o.zb && (this.o.zb = this.i.speed.toFixed(2)), this.reset(), this.o.Qa = !1));
            if (this.jb) {
                !this.i.T && this.running && this.getInput();
                var b = a;
                pa(this, a);
                a = this.delta;
                this.oa.update(a);
                if (null != this.i.ja.L) this.i.ja.ca += this.delta,
                    .01 < this.i.ja.ca && (this.i.ja.L.advance(), this.i.ja.ca = 0), this.i.ja.L.updateHead();
                else {
                    var c = THREE.Math.clamp(20 * (this.i.speed - 14.9), 0, 10);
                    this.j.u.Da.scale.set(1.8, 1, c)
                }
                this.j.u.K.skeleton.bones[4].rotateY(40 * a);
                this.j.u.K.skeleton.bones[7].rotateY(40 * a);
                this.j.u.K.skeleton.bones[10].rotateY(-40 * a);
                this.j.u.K.skeleton.bones[13].rotateY(-40 * a);
                this.i.shadow.position.y = -8 - 8 * this.i.D.position.y;
                c = Math.abs(.2 * this.i.D.position.y);
                this.i.shadow.scale.set(.45 * (1 - c), 1 * (1 - c), 1 * (1 - c));
                this.camera.lookAt(this.Sb);
                this.za.position.lerp(this.i.D.position, 5 * a);
                this.j.u.fb.position.copy(this.i.ia.getWorldPosition());
                this.i.T || qa(this, a);
                !this.i.T && this.running ? (this.i.score += 1 * b, 35 > this.i.speed && (this.i.speed += .1 * a), this.ca += b, 1 < this.ca && (this.ca = 0, this.P.eb.innerHTML = Math.round(this.i.score))) : this.i.T && (!this.o.Qa && this.running && setTimeout(function() {
                    this.o.Qa = !0
                }.bind(this), 3E3), !this.o.enabled && this.running && setTimeout(function() {
                    this.reset()
                }.bind(this), 3E3), this.running = !1, U(this.j.u.K.G, "crash", .1), U(this.j.u.R.G,
                    "crash", .1), U(this.j.u.S.G, "crash", .1));
                void 0 != this.A && this.A.xc(this)
            }
            this.Ba.update(a);
            ra(this);
            sa(this, a);
            ta(this, a);
            this.i.v.Ra = this.i.v.type;
            this.L.render(this.scene, this.camera);
            this.L.render(this.Ha, this.camera)
        };

        function qa(a, b) {


              


            if (1 < a.i.step) {
                var c = a.i.speed / 10;
                null != a.W && (a.Sa = a.W, a.Sa.inUse = !1, a.scene.remove(a.Sa.mesh));
                a.W = a.A;
                a.A = a.m;
                a.A.ya();
                a.m = a.C;
                a.m.ya();
                a.I = [];
                for (var d = 0; d < a.j.M.Y.length; d++) 0 == a.j.M.Y[d].inUse && "road_easy_straight_1" != a.j.M.Y[d].name && a.I.push(a.j.M.Y[d]);
                if (1.7 < c)
                    for (d = 0; d < a.j.M.Oa.length; d++) 0 == a.j.M.Oa[d].inUse && a.I.push(a.j.M.Oa[d]);
                if (2.2 < c)
                    for (d = 0; d < a.j.M.Na.length; d++) 0 == a.j.M.Na[d].inUse && a.I.push(a.j.M.Na[d]);
                c = THREE.Math.randInt(0, a.I.length - 1);
                a.C = T(a, a.I[c]);
                a.C.mesh.rotation.z =
                    a.m.mesh.rotation.z;
                a.C.mesh.rotation.z += a.m.Ya.z;
                a.C.mesh.position.set(a.m.J[a.m.J.length - 1].x, a.m.J[a.m.J.length - 1].y, a.m.J[a.m.J.length - 1].z);
                a.C.La();
                a.C.inUse = !0;
                a.C.ya();
                --a.i.step;
                1.5 < a.i.step && (a.i.step = 0)
            }
            a.i.la -= b;
            a.i.la < -a.i.ec ? a.i.Ea = !0 : 0 > a.i.la && 1 == a.i.aa && 0 == a.i.Ea ? (a.i.aa = !1, a.i.D.na = 0, W(a, "up"), W(a, "down")) : 0 > a.i.la && 1 == a.i.X && 0 == a.i.Ea && (a.i.X = !1, a.i.D.na = 0, W(a, "down"), W(a, "up"));
            d = a.A.Ga.getTangentAt(a.i.step).normalize();
            d.y = 0;
            var c = new THREE.Vector3,
                e = new THREE.Vector3(0, 0, 1);
            c.crossVectors(e, d).normalize();
            d = Math.acos(e.dot(d));
            e = new THREE.Quaternion;
            e.setFromAxisAngle(c, d);
            a.i.ia.quaternion.slerp(e, 5 * b);
            a.i.ia.position.copy(a.A.Ga.getPointAt(a.i.step));
            if (a.running) {
                a.i.step += a.i.speed * b / a.A.Db;
                c = new THREE.Vector3;
                c.copy(a.i.D.getWorldPosition());
                c.y += .5;
                d = [];
                d.push(a.A.sa);
                null != a.W && d.push(a.W.sa);
                var e = new THREE.Vector3,
                    f = a.i.ua.getWorldPosition();
                e.x = f.x - c.x;
                e.y = f.y - c.y;
                e.z = f.z - c.z;
                e.normalize();
                a.i.O.set(c, e);
                a.i.O.near = .1;
                a.i.O.far = 1;
                f = a.i.O.intersectObjects(d);
                0 < f.length && (a.i.T = !0);
                f = a.i.ua.getWorldPosition();
                e.x = f.x - c.x;
                e.y = f.y - c.y + 1;
                e.z = f.z - c.z;
                e.normalize();
                f = new THREE.Vector3(c.x, c.y + 1, c.z);
                a.i.O.set(f, e);
                a.i.O.near = .1;
                a.i.O.far = 1;
                f = a.i.O.intersectObjects(d);
                0 < f.length && !a.i.X && (a.i.T = !0);
                f = a.i.va.getWorldPosition();
                e.x = f.x - c.x;
                e.y = f.y - c.y;
                e.z = f.z - c.z;
                e.normalize();
                a.i.O.set(c, e);
                a.i.O.near = .1;
                a.i.O.far = 2;
                f = a.i.O.intersectObjects(d);
                a.i.yc = 0 < f.length ? !0 : !1;
                f = a.i.wa.getWorldPosition();
                e.x = f.x - c.x;
                e.y = f.y - c.y;
                e.z = f.z - c.z;
                e.normalize();
                a.i.O.set(c, e);
                a.i.O.near = .1;
                a.i.O.far = 2;
                f = a.i.O.intersectObjects(d);
                a.i.zc = 0 < f.length ? !0 : !1;
                1 == a.i.T && (a.j.audio.crash_01.play(), 1 == a.i.ba ? a.j.audio.scream_alvin.play() : 2 == a.i.ba && a.j.audio.scream_simon.play());
                a.o.enabled && 1 == a.i.T && a.o.Ab.push({
                    score: Math.round(a.i.score),
                    speed: a.i.speed.toFixed(2),
                    activeRoad: a.A.name,
                    nextRoad: a.m.name,
                    lastRoad: a.W.name,
                    lane: a.i.V
                })
            }
            a.i.T || ("center" == a.i.V && a.i.D.position.lerp(new THREE.Vector3(0, a.i.D.na, 0), b * a.i.hb), "left" == a.i.V && a.i.D.position.lerp(new THREE.Vector3(2, a.i.D.na,
                0), b * a.i.hb), "right" == a.i.V && a.i.D.position.lerp(new THREE.Vector3(-2, a.i.D.na, 0), b * a.i.hb))
        }
        g.getInput = function() {
            this.key.gb && (this.i.v.activate(), this.key.gb = !1);
            this.key.left && (S(this, "left"), this.o.ea++, W(this, "left"));
            this.key.right && (S(this, "right"), this.o.ea++, W(this, "right"));
            this.key.up && 0 == this.key.ib && 0 == this.i.aa && (S(this, "up"), this.key.ib++, this.o.ea++);
            this.key.Ma && 0 == this.key.Xa && 0 == this.i.X && (S(this, "down"), this.key.Xa++, this.o.ea++)
        };

        function S(a, b) {
            a.i.T || ("left" == b ? ("center" == a.i.V && (a.i.V = "left", a.j.audio.laneSwitch_left.play(), a.i.X || a.i.aa || Z(a, "left")), "right" == a.i.V && (a.i.V = "center", a.j.audio.laneSwitch_left.play(), a.i.X || a.i.aa || Z(a, "left"))) : "right" == b ? ("center" == a.i.V && (a.i.V = "right", a.j.audio.laneSwitch_right.play(), a.i.X || a.i.aa || Z(a, "right")), "left" == a.i.V && (a.i.V = "center", a.j.audio.laneSwitch_right.play(), a.i.X || a.i.aa || Z(a, "right"))) : "up" == b ? (a.i.ac(), a.j.audio.jump_01.play(), Z(a, "jump")) : "down" == b && (a.i.$b(), a.j.audio.crouch_01.play(),
                Z(a, "crouch")))
        }

        function Z(a, b) {
            "jump" == b ? (Y(a, a.j.u.K.G, b, .3, a.i.ha - .3), Y(a, a.j.u.R.G, b, .2, a.i.ha - .2), Y(a, a.j.u.S.G, b, .2, a.i.ha - .2)) : "crouch" == b ? (Y(a, a.j.u.K.G, b, .1, a.i.ha), Y(a, a.j.u.R.G, b, .1, a.i.ha), Y(a, a.j.u.S.G, b, .1, a.i.ha)) : (Y(a, a.j.u.K.G, b, .25, .1), Y(a, a.j.u.R.G, b, .2, .2), Y(a, a.j.u.S.G, b, .2, .2))
        }

        function pa(a, b) {
            if (null != a.i.v.type)
                if (a.i.T && (a.i.v.type = null, a.j.audio.magnet.stop(), V(a)), a.i.v.da -= a.delta, 0 > a.i.v.da) a.i.v.type = null, V(a), a.i.v.Ra === a.i.v.U && a.j.audio.magnet.stop();
                else switch (a.i.v.type) {
                    case a.i.v.U:
                        if (void 0 == a.A) break;
                        a.i.v.Ra !== a.i.v.type && a.j.audio.magnet.play();
                        var c = a.i.D.getWorldPosition();
                        c.add(a.i.D.getWorldDirection());
                        for (var d = a.A.H, e = 0; e < d.length; e++)
                            if (!d[e].Ka && c.distanceTo(d[e].getWorldPosition()) < a.i.v.Ob) {
                                var f = d[e].parent,
                                    k = f.parent;
                                THREE.SceneUtils.detach(d[e],
                                    f, k);
                                d[e].position.lerp(c, b * a.i.v.Nb);
                                d[e].updateMatrixWorld();
                                THREE.SceneUtils.attach(d[e], k, f)
                            }
                        break;
                    case a.i.v.rb:
                        if (a.delta *= a.i.v.Kb, 1 == l._rate)
                            for (c = a.i.v.Lb, l.rate(c), a.j.audio.slowdown.play(), d = 0; d < Howler._howls.length - 2; d++) 11 != d && (Howler._howls[d]._rate = c)
                }
        }

        function ra(a) {
            a.i.D.parent.updateMatrixWorld();
            a.i.D.updateMatrixWorld();
            var b = a.i.D.getWorldPosition();
            b.y += 1;
            a.fa.U.position.copy(b);
            a.i.v.Ra != a.i.v.type && (null == a.i.v.type ? a.fa.U.emitters[0].disable() : a.i.v.type == a.i.v.U ? a.fa.U.emitters[0].enable() : a.fa.U.emitters[0].disable())
        }

        function sa(a, b) {
            var c = a.i.D.getWorldPosition();
            c.y += .3;
            a.i.ma.mesh.position.copy(c);
            c = a.i.ma;
            c.xa -= b;
            a.i.v.type == a.i.v.U && 0 > c.xa && (c.xa = c.Bb);
            if (0 < c.xa) {
                var d = c.xa / c.Bb;
                a.j.materials.Ja.opacity = Math.sin(3.14159265359 * d);
                d *= a.i.ma.Pb;
                c.mesh.rotation.z += b;
                c.mesh.scale.set(d, d, d)
            }
        }

        function ta(a, b) {
            if (a.i.T) {
                if (a.B.N[0].visible)
                    for (var c = 0; c < a.B.N.length; c++) a.B.N[c].visible = !1
            } else {
                a.B.Ca.position.copy(a.camera.getWorldPosition());
                a.B.Ca.rotation.copy(a.camera.getWorldRotation());
                c = (a.i.speed - 15) / 10;
                1 < c && (c = 1);
                for (var c = a.B.N.length * c, d = 0, d = 0; d < c; d++)
                    if (a.B.N[d].position.z += 10 * b, a.B.N[d].position.z > a.B.N[d].Cb) {
                        a.B.N[d].visible = !0;
                        a.B.N[d].position.z = -3;
                        a.B.N[d].Cb = 7 + 2 * Math.random();
                        var e = new THREE.Vector2(Math.random() - .5, Math.random() - .5);
                        0 == e.length() && (e.x = 1);
                        e.normalize();
                        e.multiplyScalar(3);
                        a.B.N[d].position.x = e.x;
                        a.B.N[d].position.y = e.y
                    }
            }
        }

        function V(a) {
            if (1 != l._rate)
                for (l.rate(1), a.j.audio.speedup.play(), a = 0; a < Howler._howls.length; a++) Howler._howls[a]._rate = 1
        }

        function oa(a, b, c, d, e, f, k) {
            var u = dec;
            this.inUse = !1;
            this.direction = this.name = "";
            this.Ga = null;
            this.H = [];
            this.Ya = k[k.length - 1].pc;
            this.mesh = new THREE.Mesh(a, c);
            this.m = u;
            this.sa = b;
            this.J = [];
            this.Db = 0;
            this.A = f;
            null != this.sa && (this.sa = new THREE.Mesh(b, e), this.mesh.add(this.sa), this.sa.material.visible = !1);
            null != this.m && (this.m = new THREE.Mesh(u, d), this.mesh.add(this.m));
            this.o = function() {
                for (var a = [], b = 0; b < this.H.length; b++) {
                    var c = this.H[b],
                        d = new THREE.Mesh(this.A.geometry, this.m.material);
                    this.mesh.add(d);
                    d.rotation.x = THREE.Math.degToRad(90);
                    d.rotation.y = THREE.Math.degToRad(10 * b);
                    d.position.set(c.F.x, c.F.y, c.F.z);
                    d.nc = new THREE.Vector3(c.F.x, c.F.y, c.F.z);
                    d.Ka = !1;
                    a.push(d)
                }
                this.H = a
            };
            this.ya = function() {
                for (var a = 0; a < this.H.length; a++) this.H[a].visible = !0, this.H[a].Ka = !1, this.H[a].position.copy(this.H[a].nc), this.H[a].scale.set(1, 1, 1)
            };
            this.xc = function(a) {
                for (var b = 0; b < this.H.length; b++) {
                    if (this.H[b].getWorldPosition().distanceTo(a.i.D.getWorldPosition()) < a.i.lc && !this.H[b].Ka) {
                        null == a.i.v.type && (a.i.v.$ +=
                            a.i.v.Mb, .999 < a.i.v.$ && (a.i.v.$ = 1));
                        a.j.audio.collect_01.play();
                        this.H[b].scale.set(1.8, 1.8, 1.8);
                        this.H[b].position.z += .2;
                        this.H[b].position.y += 1;
                        var c = this.H[b];
                        a.i.score += a.mc;
                        a.P.eb.innerHTML = Math.round(a.i.score);
                        c.Ka = !0;
                        setTimeout(function() {
                            c.visible = !1
                        }.bind(this), 100)
                    }
                    this.H[b].rotation.y += 3 * a.delta
                }
            };
            this.La = function() {
                this.J = [];
                for (var a = 0; a < k.length; a++) {
                    var b = new THREE.Vector3(k[a].F.x + this.mesh.position.x, k[a].F.y + this.mesh.position.y, k[a].F.z + this.mesh.position.z),
                        b = new THREE.Vector3(b.x -
                            this.mesh.position.x, b.y - this.mesh.position.y, b.z - this.mesh.position.z),
                        c = new THREE.Quaternion;
                    c.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.mesh.rotation.z);
                    b = b.applyQuaternion(c);
                    b = new THREE.Vector3(b.x + this.mesh.position.x, b.y + this.mesh.position.y, b.z + this.mesh.position.z);
                    this.J.push(b)
                }
                this.Ga = new THREE.CatmullRomCurve3;
                this.Ga.points = this.J
            }
        };

    }
};