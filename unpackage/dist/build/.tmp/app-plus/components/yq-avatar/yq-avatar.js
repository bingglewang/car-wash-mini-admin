(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/yq-avatar/yq-avatar"], {
    "061d": function (t, i, e) {
        "use strict";
        e.r(i);
        var a = e("e9ef"), s = e("9430");
        for (var n in s) "default" !== n && function (t) {
            e.d(i, t, function () {
                return s[t]
            })
        }(n);
        e("0b92");
        var h = e("2877"), r = Object(h["a"])(s["default"], a["a"], a["b"], !1, null, null, null);
        i["default"] = r.exports
    }, "0b92": function (t, i, e) {
        "use strict";
        var a = e("e531"), s = e.n(a);
        s.a
    }, "65ba": function (t, i, e) {
        "use strict";
        (function (t) {
            Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
            var a = s(e("a34a"));

            function s(t) {
                return t && t.__esModule ? t : {default: t}
            }

            function n(t, i, e, a, s, n, h) {
                try {
                    var r = t[n](h), o = r.value
                } catch (l) {
                    return void e(l)
                }
                r.done ? i(o) : Promise.resolve(o).then(a, s)
            }

            function h(t) {
                return function () {
                    var i = this, e = arguments;
                    return new Promise(function (a, s) {
                        var h = t.apply(i, e);

                        function r(t) {
                            n(h, a, s, r, o, "next", t)
                        }

                        function o(t) {
                            n(h, a, s, r, o, "throw", t)
                        }

                        r(void 0)
                    })
                }
            }

            var r = 50, o = {
                name: "yq-avatar",
                data: function () {
                    return {
                        cvsStyleHeight: "0px",
                        styleDisplay: "none",
                        styleTop: "-10000px",
                        prvTop: "-10000px",
                        imgStyle: {},
                        showOper: !0
                    }
                },
                props: {avatarSrc: "", avatarStyle: "", selWidth: "", selHeight: "", quality: ""},
                created: function () {
                    var i = this;
                    this.ctxCanvas = t.createCanvasContext("avatar-factory", this), this.ctxCanvasOper = t.createCanvasContext("oper-canvas", this), this.ctxCanvasPrv = t.createCanvasContext("prv-canvas", this), this.qlty = parseInt(this.quality) || .9, t.showTabBar({
                        complete: function (t) {
                            i.moreHeight = "showTabBar:ok" === t.errMsg ? 50 : 0, i.fWindowResize()
                        }
                    })
                },
                methods: {
                    fGetImgData: function () {
                        var i = this;
                        return new Promise(function (e, a) {
                            var s = i.prvX, n = i.prvY, h = i.prvWidth, r = i.prvHeight;
                            s *= i.pixelRatio, n *= i.pixelRatio, h *= i.pixelRatio, r *= i.pixelRatio, t.canvasGetImageData({
                                canvasId: "prv-canvas",
                                x: s,
                                y: n,
                                width: h,
                                height: r,
                                success: function (t) {
                                    e(t.data)
                                },
                                fail: function (t) {
                                    a(t)
                                }
                            }, i)
                        })
                    }, fColorChange: function () {
                        var i = h(a.default.mark(function i(e) {
                            var s, n, h, r, o, l, c, u, p, f, d, v, g, w, m, y, x, I, H, S, b, T, W, P, D, R, C;
                            return a.default.wrap(function (i) {
                                while (1) switch (i.prev = i.next) {
                                    case 0:
                                        if (s = Date.now(), !(s - this.prvTm < 20)) {
                                            i.next = 3;
                                            break
                                        }
                                        return i.abrupt("return");
                                    case 3:
                                        if (this.prvTm = s, t.showLoading({mask: !0}), this.prvImgData) {
                                            i.next = 11;
                                            break
                                        }
                                        return i.next = 8, this.fGetImgData().catch(function (i) {
                                            t.showLoading({title: "error_read", duration: 2e3})
                                        });
                                    case 8:
                                        if (this.prvImgData = i.sent) {
                                            i.next = 10;
                                            break
                                        }
                                        return i.abrupt("return");
                                    case 10:
                                        this.target = new Uint8ClampedArray(this.prvImgData.length);
                                    case 11:
                                        if (n = this.prvImgData, h = this.target, r = e.detail.value, 0 === r) h = n; else for (r = (r + 100) / 200, r < .005 && (r = 0), r > .995 && (r = 1), b = n.length - 1; b >= 0; b -= 4) o = n[b - 3] / 255, l = n[b - 2] / 255, c = n[b - 1] / 255, y = Math.max(o, l, c), m = Math.min(o, l, c), v = y - m, y === m ? p = 0 : y === o && l >= c ? p = (l - c) / v * 60 : y === o && l < c ? p = (l - c) / v * 60 + 360 : y === l ? p = (c - o) / v * 60 + 120 : y === c && (p = (o - l) / v * 60 + 240), d = (y + m) / 2, 0 === d || y === m ? f = 0 : 0 < d && d <= .5 ? f = v / (2 * d) : d > .5 && (f = v / (2 - 2 * d)), n[b] && (u = n[b]), r < .5 ? f = f * r / .5 : r > .5 && (f = 2 * f + 2 * r - f * r / .5 - 1), 0 === f ? o = l = c = Math.round(255 * d) : (d < .5 ? w = d * (1 + f) : d >= .5 && (w = d + f - d * f), g = 2 * d - w, x = p / 360, I = x + 1 / 3, H = x, S = x - 1 / 3, T = function (t) {
                                            return t < 0 ? t + 1 : t > 1 ? t - 1 : t
                                        }, W = function (t) {
                                            return t < 1 / 6 ? g + 6 * (w - g) * t : t >= 1 / 6 && t < .5 ? w : t >= .5 && t < 2 / 3 ? g + 6 * (w - g) * (2 / 3 - t) : g
                                        }, o = I = Math.round(255 * W(T(I))), l = H = Math.round(255 * W(T(H))), c = S = Math.round(255 * W(T(S)))), u && (h[b] = u), h[b - 3] = o, h[b - 2] = l, h[b - 1] = c;
                                        P = this.prvX, D = this.prvY, R = this.prvWidth, C = this.prvHeight, this.ctxCanvasPrv.setFillStyle("black"), this.ctxCanvasPrv.fillRect(P, D, R, C), this.ctxCanvasPrv.draw(!0), P *= this.pixelRatio, D *= this.pixelRatio, R *= this.pixelRatio, C *= this.pixelRatio, t.canvasPutImageData({
                                            canvasId: "prv-canvas",
                                            x: P,
                                            y: D,
                                            width: R,
                                            height: C,
                                            data: h,
                                            success: function (t) {
                                            },
                                            fail: function () {
                                                t.showLoading({title: "error_put", duration: 2e3})
                                            },
                                            complete: function (i) {
                                                t.hideLoading()
                                            }
                                        }, this);
                                    case 22:
                                    case"end":
                                        return i.stop()
                                }
                            }, i, this)
                        }));

                        function e(t) {
                            return i.apply(this, arguments)
                        }

                        return e
                    }(), fWindowResize: function () {
                        var i = this, e = t.getSystemInfoSync();
                        this.platform = e.platform, this.pixelRatio = e.pixelRatio, this.windowWidth = e.windowWidth, "android" === this.platform ? this.windowHeight = e.screenHeight + e.statusBarHeight : this.windowHeight = e.windowHeight + this.moreHeight, this.pxRatio = this.windowWidth / 750, this.cvsStyleHeight = this.windowHeight - r + "px";
                        var a = this.avatarStyle;
                        if (a && !0 !== a && (a = a.trim())) {
                            a = a.split(";");
                            var s = {}, n = !0, h = !1, o = void 0;
                            try {
                                for (var l, c = a[Symbol.iterator](); !(n = (l = c.next()).done); n = !0) {
                                    var u = l.value;
                                    if (u) {
                                        if (u = u.trim().split(":"), u[1].indexOf("upx") >= 0) {
                                            var p = u[1].trim().split(" ");
                                            for (var f in p) p[f] && p[f].indexOf("upx") >= 0 && (p[f] = parseFloat(p[f]) * this.pxRatio + "px");
                                            u[1] = p.join(" ")
                                        }
                                        s[u[0].trim()] = u[1].trim()
                                    }
                                }
                            } catch (d) {
                                h = !0, o = d
                            } finally {
                                try {
                                    n || null == c.return || c.return()
                                } finally {
                                    if (h) throw o
                                }
                            }
                            this.imgStyle = s
                        }
                        a = this.selStyle || {}, this.selWidth && this.selHeight && (a.width = this.selWidth.indexOf("upx") >= 0 ? parseInt(this.selWidth) * this.pxRatio + "px" : this.selWidth, a.height = this.selHeight.indexOf("upx") >= 0 ? parseInt(this.selHeight) * this.pxRatio + "px" : this.selHeight), a.top = (this.windowHeight - parseInt(a.height) - r) / 2 + "px", a.left = (this.windowWidth - parseInt(a.width)) / 2 + "px", this.selStyle = a, "flex" === this.styleDisplay && setTimeout(function () {
                            i.fDrawInit(!0)
                        }, 200), this.fHideImg()
                    }, fUpload: function () {
                        var i = this;
                        if (!this.fUploading) {
                            this.fUploading = !0, setTimeout(function () {
                                i.fUploading = !1
                            }, 1e3);
                            var e = this.selStyle, a = parseInt(e.left), s = parseInt(e.top), n = parseInt(e.width),
                                h = parseInt(e.height);
                            t.showLoading({mask: !0}), this.styleDisplay = "none", this.styleTop = "-10000px", this.fHideImg(), t.canvasToTempFilePath({
                                x: a,
                                y: s,
                                width: n,
                                height: h,
                                canvasId: "avatar-factory",
                                fileType: "png",
                                quality: this.qlty,
                                success: function (t) {
                                    t = t.tempFilePath, i.$emit("upload", t)
                                },
                                fail: function () {
                                    t.showLoading({title: "error1", duration: 2e3})
                                },
                                complete: function () {
                                    t.hideLoading(), t.showTabBar()
                                }
                            }, this)
                        }
                    }, fPrvUpload: function () {
                        var i = this;
                        if (!this.fPrvUploading) {
                            this.fPrvUploading = !0, setTimeout(function () {
                                i.fPrvUploading = !1
                            }, 1e3);
                            var e = this.selStyle, a = parseInt(e.width), s = parseInt(e.height), n = this.prvX,
                                h = this.prvY, r = this.prvWidth, o = this.prvHeight;
                            t.showLoading({mask: !0}), this.styleDisplay = "none", this.styleTop = "-10000px", this.fHideImg(), t.canvasToTempFilePath({
                                x: n,
                                y: h,
                                width: r,
                                height: o,
                                destWidth: a,
                                destHeight: s,
                                canvasId: "prv-canvas",
                                fileType: "png",
                                quality: this.qlty,
                                success: function (t) {
                                    t = t.tempFilePath, i.$emit("upload", t)
                                },
                                fail: function () {
                                    t.showLoading({title: "error_prv", duration: 2e3})
                                },
                                complete: function () {
                                    t.hideLoading(), t.showTabBar()
                                }
                            }, this)
                        }
                    }, fDrawImage: function () {
                        var t = Date.now();
                        if (!(t - this.drawTm < 20)) {
                            this.drawTm = t;
                            var i = this.ctxCanvas;
                            i.fillRect(0, 0, this.windowWidth, this.windowHeight - r), i.translate(this.posWidth + this.useWidth / 2, this.posHeight + this.useHeight / 2), i.scale(this.scaleSize, this.scaleSize), i.rotate(this.rotateDeg * Math.PI / 180), i.drawImage(this.imgPath, -this.useWidth / 2, -this.useHeight / 2, this.useWidth, this.useHeight), i.draw(!1)
                        }
                    }, fHideImg: function () {
                        this.prvImg = "", this.prvTop = "-10000px", this.showOper = !0, this.prvImgData = null, this.target = null
                    }, fPreview: function () {
                        var i = this;
                        if (!this.fPreviewing) {
                            this.fPreviewing = !0, setTimeout(function () {
                                i.fPreviewing = !1
                            }, 1e3);
                            var e = this.selStyle, a = parseInt(e.left), s = parseInt(e.top), n = parseInt(e.width),
                                h = parseInt(e.height);
                            t.showLoading({mask: !0}), t.canvasToTempFilePath({
                                x: a,
                                y: s,
                                width: n,
                                height: h,
                                canvasId: "avatar-factory",
                                fileType: "png",
                                quality: this.qlty,
                                success: function (t) {
                                    t = t.tempFilePath;
                                    var e = i.ctxCanvasPrv, a = i.windowWidth, s = parseInt(i.cvsStyleHeight),
                                        n = parseInt(i.selStyle.width), h = parseInt(i.selStyle.height), r = a - 40,
                                        o = s - 80, l = r / n, c = h * l;
                                    c < o ? (n = r, h = c) : (l = o / h, n *= l, h = o), e.setFillStyle("black"), e.fillRect(0, 0, a, s), i.prvX = a = (a - n) / 2, i.prvY = s = (s - h) / 2, i.prvWidth = n, i.prvHeight = h, e.drawImage(t, a, s, n, h), e.draw(!1), "android" != i.platform && (i.showOper = !1), i.prvTop = "0"
                                },
                                fail: function () {
                                    t.showLoading({title: "error2", duration: 2e3})
                                },
                                complete: function () {
                                    t.hideLoading()
                                }
                            }, this)
                        }
                    }, fDrawInit: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i = this.windowWidth,
                            e = this.windowHeight, a = this.imgWidth, s = this.imgHeight, n = a / s, h = i - 40,
                            o = e - r - 80;
                        this.pixelRatio;
                        n < 1 ? s < o ? (h = a, o = s) : (o = o, h = o * n) : a < h ? (h = a, o = s) : (h = h, o = h / n), this.scaleSize = 1, this.rotateDeg = 0, this.posWidth = (i - h) / 2, this.posHeight = (e - o - r) / 2, this.useWidth = h, this.useHeight = o;
                        var l = this.selStyle, c = parseInt(l.left), u = parseInt(l.top), p = parseInt(l.width),
                            f = parseInt(l.height), d = (this.canvas, this.canvasOper, this.ctxCanvas),
                            v = this.ctxCanvasOper;
                        v.setLineWidth(3), v.setStrokeStyle("grey"), v.setGlobalAlpha(.3), v.setFillStyle("grey"), v.strokeRect(c, u, p, f), v.fillRect(0, 0, this.windowWidth, u), v.fillRect(0, u, c, f), v.fillRect(0, u + f, this.windowWidth, this.windowHeight - f - u - r), v.fillRect(c + p, u, this.windowWidth - p - c, f), v.draw(!1), t && (this.styleDisplay = "flex", this.styleTop = "0", d.setFillStyle("black"), this.fDrawImage())
                    }, fSelect: function () {
                        var i = this;
                        this.fSelecting || (this.fSelecting = !0, setTimeout(function () {
                            i.fSelecting = !1
                        }, 500), t.chooseImage({
                            count: 1,
                            sizeType: ["original", "compressed"],
                            sourceType: ["album", "camera"],
                            success: function (e) {
                                t.showLoading({mask: !0});
                                var a = i.imgPath = e.tempFilePaths[0];
                                t.getImageInfo({
                                    src: a, success: function (e) {
                                        i.imgWidth = e.width, i.imgHeight = e.height, i.path = a, t.hideTabBar({
                                            complete: function () {
                                                setTimeout(function () {
                                                    i.fDrawInit(!0)
                                                }, 200)
                                            }
                                        })
                                    }, fail: function () {
                                        t.showLoading({title: "error3", duration: 2e3})
                                    }, complete: function () {
                                        t.hideLoading()
                                    }
                                })
                            }
                        }))
                    }, fStart: function (t) {
                        var i = t.touches, e = i[0], a = i[1];
                        if (this.touch0 = e, this.touch1 = a, a) {
                            var s = a.x - e.x, n = a.y - e.y;
                            this.fgDistance = Math.sqrt(s * s + n * n)
                        }
                    }, fMove: function (t) {
                        var i = t.touches, e = i[0], a = i[1];
                        if (a) {
                            var s = a.x - e.x, n = a.y - e.y, h = Math.sqrt(s * s + n * n),
                                r = .005 * (h - this.fgDistance);
                            this.scaleSize + r > .3 && this.scaleSize + r < 4 && (this.scaleSize += r), this.fgDistance = h, a.x !== e.x && (s = (this.touch1.y - this.touch0.y) / (this.touch1.x - this.touch0.x), n = (a.y - e.y) / (a.x - e.x), this.rotateDeg += 180 * Math.atan((n - s) / (1 + s * n)) / Math.PI, this.touch0 = e, this.touch1 = a), this.fDrawImage()
                        } else if (this.touch0) {
                            var o = e.x - this.touch0.x, l = e.y - this.touch0.y;
                            Math.abs(o) < 100 && (this.posWidth += o), Math.abs(l) < 100 && (this.posHeight += l), this.touch0 = e, this.fDrawImage()
                        }
                    }, fEnd: function (t) {
                        var i = t.touches, e = i && i[0];
                        i && i[1];
                        e ? this.touch0 = e : (this.touch0 = null, this.touch1 = null)
                    }, btop: function (t) {
                        return new Promise(function (i, e) {
                            var a = t.split(","), s = a[0].match(/:(.*?);/)[1], n = atob(a[1]), h = n.length,
                                r = new Uint8Array(h);
                            while (h--) r[h] = n.charCodeAt(h);
                            return i((window.URL || window.webkitURL).createObjectURL(new Blob([r], {type: s})))
                        })
                    }
                }
            };
            i.default = o
        }).call(this, e("6e42")["default"])
    }, 9430: function (t, i, e) {
        "use strict";
        e.r(i);
        var a = e("65ba"), s = e.n(a);
        for (var n in a) "default" !== n && function (t) {
            e.d(i, t, function () {
                return a[t]
            })
        }(n);
        i["default"] = s.a
    }, e531: function (t, i, e) {
    }, e9ef: function (t, i, e) {
        "use strict";
        var a = function () {
            var t = this, i = t.$createElement, e = (t._self._c, t.__get_style([t.imgStyle]));
            t.$mp.data = Object.assign({}, {$root: {s0: e}})
        }, s = [];
        e.d(i, "a", function () {
            return a
        }), e.d(i, "b", function () {
            return s
        })
    }
}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/yq-avatar/yq-avatar-create-component',
    {
        'components/yq-avatar/yq-avatar-create-component': (function (module, exports, __webpack_require__) {
            __webpack_require__('6e42')['createComponent'](__webpack_require__("061d"))
        })
    },
    [['components/yq-avatar/yq-avatar-create-component']]
]);                
