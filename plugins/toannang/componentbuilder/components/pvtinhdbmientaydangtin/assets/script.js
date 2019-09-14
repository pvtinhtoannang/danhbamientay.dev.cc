/*! Select2 4.0.9 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t
    } : n(jQuery)
}(function (u) {
    var e = function () {
        if (u && u.fn && u.fn.select2 && u.fn.select2.amd) var e = u.fn.select2.amd;
        var t, n, r, h, o, s, f, g, m, v, y, _, i, a, w;

        function b(e, t) {
            return i.call(e, t)
        }

        function l(e, t) {
            var n, r, i, o, s, a, l, c, u, d, p, h = t && t.split("/"), f = y.map, g = f && f["*"] || {};
            if (e) {
                for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && w.test(e[s]) && (e[s] = e[s].replace(w, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), u = 0; u < e.length; u++) if ("." === (p = e[u])) e.splice(u, 1), u -= 1; else if (".." === p) {
                    if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
                    0 < u && (e.splice(u - 1, 2), u -= 2)
                }
                e = e.join("/")
            }
            if ((h || g) && f) {
                for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
                    if (r = n.slice(0, u).join("/"), h) for (d = h.length; 0 < d; d -= 1) if (i = (i = f[h.slice(0, d).join("/")]) && i[r]) {
                        o = i, a = u;
                        break
                    }
                    if (o) break;
                    !l && g && g[r] && (l = g[r], c = u)
                }
                !o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"))
            }
            return e
        }

        function A(t, n) {
            return function () {
                var e = a.call(arguments, 0);
                return "string" != typeof e[0] && 1 === e.length && e.push(null), s.apply(h, e.concat([t, n]))
            }
        }

        function x(t) {
            return function (e) {
                m[t] = e
            }
        }

        function D(e) {
            if (b(v, e)) {
                var t = v[e];
                delete v[e], _[e] = !0, o.apply(h, t)
            }
            if (!b(m, e) && !b(_, e)) throw new Error("No " + e);
            return m[e]
        }

        function c(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function S(e) {
            return e ? c(e) : []
        }

        return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, _ = {}, i = Object.prototype.hasOwnProperty, a = [].slice, w = /\.js$/, f = function (e, t) {
            var n, r = c(e), i = r[0], o = t[1];
            return e = r[1], i && (n = D(i = l(i, o))), i ? e = n && n.normalize ? n.normalize(e, function (t) {
                return function (e) {
                    return l(e, t)
                }
            }(o)) : l(e, o) : (i = (r = c(e = l(e, o)))[0], e = r[1], i && (n = D(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, g = {
            require: function (e) {
                return A(e)
            }, exports: function (e) {
                var t = m[e];
                return void 0 !== t ? t : m[e] = {}
            }, module: function (e) {
                return {
                    id: e, uri: "", exports: m[e], config: function (e) {
                        return function () {
                            return y && y.config && y.config[e] || {}
                        }
                    }(e)
                }
            }
        }, o = function (e, t, n, r) {
            var i, o, s, a, l, c, u, d = [], p = typeof n;
            if (c = S(r = r || e), "undefined" == p || "function" == p) {
                for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1) if ("require" === (o = (a = f(t[l], c)).f)) d[l] = g.require(e); else if ("exports" === o) d[l] = g.exports(e), u = !0; else if ("module" === o) i = d[l] = g.module(e); else if (b(m, o) || b(v, o) || b(_, o)) d[l] = D(o); else {
                    if (!a.p) throw new Error(e + " missing " + o);
                    a.p.load(a.n, A(r, !0), x(o), {}), d[l] = m[o]
                }
                s = n ? n.apply(m[e], d) : void 0, e && (i && i.exports !== h && i.exports !== m[e] ? m[e] = i.exports : s === h && u || (m[e] = s))
            } else e && (m[e] = n)
        }, t = n = s = function (e, t, n, r, i) {
            if ("string" == typeof e) return g[e] ? g[e](t) : D(f(e, S(t)).f);
            if (!e.splice) {
                if ((y = e).deps && s(y.deps, y.callback), !t) return;
                t.splice ? (e = t, t = n, n = null) : e = h
            }
            return t = t || function () {
            }, "function" == typeof n && (n = r, r = i), r ? o(h, e, t, n) : setTimeout(function () {
                o(h, e, t, n)
            }, 4), s
        }, s.config = function (e) {
            return s(e)
        }, t._defined = m, (r = function (e, t, n) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            t.splice || (n = t, t = []), b(m, e) || b(v, e) || (v[e] = [e, t, n])
        }).amd = {jQuery: !0}, e.requirejs = t, e.require = n, e.define = r), e.define("almond", function () {
        }), e.define("jquery", [], function () {
            var e = u || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
        }), e.define("select2/utils", ["jquery"], function (o) {
            var i = {};

            function u(e) {
                var t = e.prototype, n = [];
                for (var r in t) {
                    "function" == typeof t[r] && "constructor" !== r && n.push(r)
                }
                return n
            }

            i.Extend = function (e, t) {
                var n = {}.hasOwnProperty;

                function r() {
                    this.constructor = e
                }

                for (var i in t) n.call(t, i) && (e[i] = t[i]);
                return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
            }, i.Decorate = function (r, i) {
                var e = u(i), t = u(r);

                function o() {
                    var e = Array.prototype.unshift, t = i.prototype.constructor.length, n = r.prototype.constructor;
                    0 < t && (e.call(arguments, r.prototype.constructor), n = i.prototype.constructor), n.apply(this, arguments)
                }

                i.displayName = r.displayName, o.prototype = new function () {
                    this.constructor = o
                };
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    o.prototype[s] = r.prototype[s]
                }

                function a(e) {
                    var t = function () {
                    };
                    e in o.prototype && (t = o.prototype[e]);
                    var n = i.prototype[e];
                    return function () {
                        return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments)
                    }
                }

                for (var l = 0; l < e.length; l++) {
                    var c = e[l];
                    o.prototype[c] = a(c)
                }
                return o
            };

            function e() {
                this.listeners = {}
            }

            e.prototype.on = function (e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }, e.prototype.trigger = function (e) {
                var t = Array.prototype.slice, n = t.call(arguments, 1);
                this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, e.prototype.invoke = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) e[n].apply(this, t)
            }, i.Observable = e, i.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++) {
                    t += Math.floor(36 * Math.random()).toString(36)
                }
                return t
            }, i.bind = function (e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }, i._convertData = function (e) {
                for (var t in e) {
                    var n = t.split("-"), r = e;
                    if (1 !== n.length) {
                        for (var i = 0; i < n.length; i++) {
                            var o = n[i];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in r || (r[o] = {}), i == n.length - 1 && (r[o] = e[t]), r = r[o]
                        }
                        delete e[t]
                    }
                }
                return e
            }, i.hasScroll = function (e, t) {
                var n = o(t), r = t.style.overflowX, i = t.style.overflowY;
                return (r !== i || "hidden" !== i && "visible" !== i) && ("scroll" === r || "scroll" === i || (n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth))
            }, i.escapeMarkup = function (e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e]
                })
            }, i.appendMany = function (e, t) {
                if ("1.7" === o.fn.jquery.substr(0, 3)) {
                    var n = o();
                    o.map(t, function (e) {
                        n = n.add(e)
                    }), t = n
                }
                e.append(t)
            }, i.__cache = {};
            var n = 0;
            return i.GetUniqueElementId = function (e) {
                var t = e.getAttribute("data-select2-id");
                return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++n), t = n.toString())), t
            }, i.StoreData = function (e, t, n) {
                var r = i.GetUniqueElementId(e);
                i.__cache[r] || (i.__cache[r] = {}), i.__cache[r][t] = n
            }, i.GetData = function (e, t) {
                var n = i.GetUniqueElementId(e);
                return t ? i.__cache[n] && null != i.__cache[n][t] ? i.__cache[n][t] : o(e).data(t) : i.__cache[n]
            }, i.RemoveData = function (e) {
                var t = i.GetUniqueElementId(e);
                null != i.__cache[t] && delete i.__cache[t], e.removeAttribute("data-select2-id")
            }, i
        }), e.define("select2/results", ["jquery", "./utils"], function (h, f) {
            function r(e, t, n) {
                this.$element = e, this.data = n, this.options = t, r.__super__.constructor.call(this)
            }

            return f.Extend(r, f.Observable), r.prototype.render = function () {
                var e = h('<ul class="select2-results__options" role="listbox"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e
            }, r.prototype.clear = function () {
                this.$results.empty()
            }, r.prototype.displayMessage = function (e) {
                var t = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                    r = this.options.get("translations").get(e.message);
                n.append(t(r(e.args))), n[0].className += " select2-results__message", this.$results.append(n)
            }, r.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, r.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var r = e.results[n], i = this.option(r);
                        t.push(i)
                    }
                    this.$results.append(t)
                } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
            }, r.prototype.position = function (e, t) {
                t.find(".select2-results").append(e)
            }, r.prototype.sort = function (e) {
                return this.options.get("sorter")(e)
            }, r.prototype.highlightFirstItem = function () {
                var e = this.$results.find(".select2-results__option[aria-selected]"),
                    t = e.filter("[aria-selected=true]");
                0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, r.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (e) {
                    var r = h.map(e, function (e) {
                        return e.id.toString()
                    });
                    t.$results.find(".select2-results__option[aria-selected]").each(function () {
                        var e = h(this), t = f.GetData(this, "data"), n = "" + t.id;
                        null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, r) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                    })
                })
            }, r.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e)},
                    n = this.option(t);
                n.className += " loading-results", this.$results.prepend(n)
            }, r.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, r.prototype.option = function (e) {
                var t = document.createElement("li");
                t.className = "select2-results__option";
                var n = {role: "option", "aria-selected": "false"},
                    r = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                for (var i in (null != e.element && r.call(e.element, ":disabled") || null == e.element && e.disabled) && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) {
                    var o = n[i];
                    t.setAttribute(i, o)
                }
                if (e.children) {
                    var s = h(t), a = document.createElement("strong");
                    a.className = "select2-results__group";
                    h(a);
                    this.template(e, a);
                    for (var l = [], c = 0; c < e.children.length; c++) {
                        var u = e.children[c], d = this.option(u);
                        l.push(d)
                    }
                    var p = h("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                    p.append(l), s.append(a), s.append(p)
                } else this.template(e, t);
                return f.StoreData(t, "data", e), t
            }, r.prototype.bind = function (t, e) {
                var l = this, n = t.id + "-results";
                this.$results.attr("id", n), t.on("results:all", function (e) {
                    l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                }), t.on("results:append", function (e) {
                    l.append(e.data), t.isOpen() && l.setClasses()
                }), t.on("query", function (e) {
                    l.hideMessages(), l.showLoading(e)
                }), t.on("select", function () {
                    t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem())
                }), t.on("unselect", function () {
                    t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem())
                }), t.on("open", function () {
                    l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
                }), t.on("close", function () {
                    l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
                }), t.on("results:toggle", function () {
                    var e = l.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }), t.on("results:select", function () {
                    var e = l.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = f.GetData(e[0], "data");
                        "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {data: t})
                    }
                }), t.on("results:previous", function () {
                    var e = l.getHighlightedResults(), t = l.$results.find("[aria-selected]"), n = t.index(e);
                    if (!(n <= 0)) {
                        var r = n - 1;
                        0 === e.length && (r = 0);
                        var i = t.eq(r);
                        i.trigger("mouseenter");
                        var o = l.$results.offset().top, s = i.offset().top, a = l.$results.scrollTop() + (s - o);
                        0 === r ? l.$results.scrollTop(0) : s - o < 0 && l.$results.scrollTop(a)
                    }
                }), t.on("results:next", function () {
                    var e = l.getHighlightedResults(), t = l.$results.find("[aria-selected]"), n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                        var r = t.eq(n);
                        r.trigger("mouseenter");
                        var i = l.$results.offset().top + l.$results.outerHeight(!1),
                            o = r.offset().top + r.outerHeight(!1), s = l.$results.scrollTop() + o - i;
                        0 === n ? l.$results.scrollTop(0) : i < o && l.$results.scrollTop(s)
                    }
                }), t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted")
                }), t.on("results:message", function (e) {
                    l.displayMessage(e)
                }), h.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                    var t = l.$results.scrollTop(), n = l.$results.get(0).scrollHeight - t + e.deltaY,
                        r = 0 < e.deltaY && t - e.deltaY <= 0, i = e.deltaY < 0 && n <= l.$results.height();
                    r ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : i && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
                    var t = h(this), n = f.GetData(this, "data");
                    "true" !== t.attr("aria-selected") ? l.trigger("select", {
                        originalEvent: e,
                        data: n
                    }) : l.options.get("multiple") ? l.trigger("unselect", {
                        originalEvent: e,
                        data: n
                    }) : l.trigger("close", {})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
                    var t = f.GetData(this, "data");
                    l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
                        data: t,
                        element: h(this)
                    })
                })
            }, r.prototype.getHighlightedResults = function () {
                return this.$results.find(".select2-results__option--highlighted")
            }, r.prototype.destroy = function () {
                this.$results.remove()
            }, r.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e), n = this.$results.offset().top,
                        r = e.offset().top, i = this.$results.scrollTop() + (r - n), o = r - n;
                    i -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(i)
                }
            }, r.prototype.template = function (e, t) {
                var n = this.options.get("templateResult"), r = this.options.get("escapeMarkup"), i = n(e, t);
                null == i ? t.style.display = "none" : "string" == typeof i ? t.innerHTML = r(i) : h(t).append(i)
            }, r
        }), e.define("select2/keys", [], function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, r, i) {
            function o(e, t) {
                this.$element = e, this.options = t, o.__super__.constructor.call(this)
            }

            return r.Extend(o, r.Observable), o.prototype.render = function () {
                var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != r.GetData(this.$element[0], "old-tabindex") ? this._tabindex = r.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e
            }, o.prototype.bind = function (e, t) {
                var n = this, r = e.id + "-results";
                this.container = e, this.$selection.on("focus", function (e) {
                    n.trigger("focus", e)
                }), this.$selection.on("blur", function (e) {
                    n._handleBlur(e)
                }), this.$selection.on("keydown", function (e) {
                    n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault()
                }), e.on("results:focus", function (e) {
                    n.$selection.attr("aria-activedescendant", e.data._resultId)
                }), e.on("selection:update", function (e) {
                    n.update(e.data)
                }), e.on("open", function () {
                    n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", r), n._attachCloseHandler(e)
                }), e.on("close", function () {
                    n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e)
                }), e.on("enable", function () {
                    n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false")
                }), e.on("disable", function () {
                    n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true")
                })
            }, o.prototype._handleBlur = function (e) {
                var t = this;
                window.setTimeout(function () {
                    document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
                }, 1)
            }, o.prototype._attachCloseHandler = function (e) {
                n(document.body).on("mousedown.select2." + e.id, function (e) {
                    var t = n(e.target).closest(".select2");
                    n(".select2.select2-container--open").each(function () {
                        this != t[0] && r.GetData(this, "element").select2("close")
                    })
                })
            }, o.prototype._detachCloseHandler = function (e) {
                n(document.body).off("mousedown.select2." + e.id)
            }, o.prototype.position = function (e, t) {
                t.find(".selection").append(e)
            }, o.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, o.prototype.update = function (e) {
                throw new Error("The `update` method must be defined in child classes.")
            }, o
        }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, r) {
            function i() {
                i.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(i, t), i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
            }, i.prototype.bind = function (t, e) {
                var n = this;
                i.__super__.bind.apply(this, arguments);
                var r = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", r).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", r), this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("focus", function (e) {
                }), this.$selection.on("blur", function (e) {
                }), t.on("focus", function (e) {
                    t.isOpen() || n.$selection.trigger("focus")
                })
            }, i.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title")
            }, i.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }, i.prototype.selectionContainer = function () {
                return e("<span></span>")
            }, i.prototype.update = function (e) {
                if (0 !== e.length) {
                    var t = e[0], n = this.$selection.find(".select2-selection__rendered"), r = this.display(t, n);
                    n.empty().append(r);
                    var i = t.title || t.text;
                    i ? n.attr("title", i) : n.removeAttr("title")
                } else this.clear()
            }, i
        }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (i, e, l) {
            function n(e, t) {
                n.__super__.constructor.apply(this, arguments)
            }

            return l.Extend(n, e), n.prototype.render = function () {
                var e = n.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
            }, n.prototype.bind = function (e, t) {
                var r = this;
                n.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                    r.trigger("toggle", {originalEvent: e})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
                    if (!r.options.get("disabled")) {
                        var t = i(this).parent(), n = l.GetData(t[0], "data");
                        r.trigger("unselect", {originalEvent: e, data: n})
                    }
                })
            }, n.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title")
            }, n.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }, n.prototype.selectionContainer = function () {
                return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }, n.prototype.update = function (e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e[n], i = this.selectionContainer(), o = this.display(r, i);
                        i.append(o);
                        var s = r.title || r.text;
                        s && i.attr("title", s), l.StoreData(i[0], "data", r), t.push(i)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    l.appendMany(a, t)
                }
            }, n
        }), e.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
            }

            return t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
            }, t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (1 < t.length || n) return e.call(this, t);
                this.clear();
                var r = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(r)
            }, t
        }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (i, r, a) {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                    r._handleClear(e)
                }), t.on("keypress", function (e) {
                    r._handleKeyboardClear(e, t)
                })
            }, e.prototype._handleClear = function (e, t) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        t.stopPropagation();
                        var r = a.GetData(n[0], "data"), i = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var o = {data: r};
                        if (this.trigger("clear", o), o.prevented) this.$element.val(i); else {
                            for (var s = 0; s < r.length; s++) if (o = {data: r[s]}, this.trigger("unselect", o), o.prevented) return void this.$element.val(i);
                            this.$element.trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }
            }, e.prototype._handleKeyboardClear = function (e, t, n) {
                n.isOpen() || t.which != r.DELETE && t.which != r.BACKSPACE || this._handleClear(t)
            }, e.prototype.update = function (e, t) {
                if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
                    var n = this.options.get("translations").get("removeAllItems"),
                        r = i('<span class="select2-selection__clear" title="' + n() + '">&times;</span>');
                    a.StoreData(r[0], "data", t), this.$selection.find(".select2-selection__rendered").prepend(r)
                }
            }, e
        }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (r, a, l) {
            function e(e, t, n) {
                e.call(this, t, n)
            }

            return e.prototype.render = function (e) {
                var t = r('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = t, this.$search = t.find("input");
                var n = e.call(this);
                return this._transferTabIndex(), n
            }, e.prototype.bind = function (e, t, n) {
                var r = this, i = t.id + "-results";
                e.call(this, t, n), t.on("open", function () {
                    r.$search.attr("aria-controls", i), r.$search.trigger("focus")
                }), t.on("close", function () {
                    r.$search.val(""), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
                }), t.on("enable", function () {
                    r.$search.prop("disabled", !1), r._transferTabIndex()
                }), t.on("disable", function () {
                    r.$search.prop("disabled", !0)
                }), t.on("focus", function (e) {
                    r.$search.trigger("focus")
                }), t.on("results:focus", function (e) {
                    e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
                }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                    r.trigger("focus", e)
                }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                    r._handleBlur(e)
                }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                    if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented(), e.which === l.BACKSPACE && "" === r.$search.val()) {
                        var t = r.$searchContainer.prev(".select2-selection__choice");
                        if (0 < t.length) {
                            var n = a.GetData(t[0], "data");
                            r.searchRemoveChoice(n), e.preventDefault()
                        }
                    }
                }), this.$selection.on("click", ".select2-search--inline", function (e) {
                    r.$search.val() && e.stopPropagation()
                });
                var o = document.documentMode, s = o && o <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                    s ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                    if (s && "input" === e.type) r.$selection.off("input.search input.searchcheck"); else {
                        var t = e.which;
                        t != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && r.handleSearch(e)
                    }
                })
            }, e.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, e.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text)
            }, e.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus")
            }, e.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, e.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", {data: t}), this.$search.val(t.text), this.handleSearch()
            }, e.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").width() : e = .75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", e)
            }, e
        }), e.define("select2/selection/eventRelay", ["jquery"], function (s) {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this,
                    i = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                    o = ["opening", "closing", "selecting", "unselecting", "clearing"];
                e.call(this, t, n), t.on("*", function (e, t) {
                    if (-1 !== s.inArray(e, i)) {
                        t = t || {};
                        var n = s.Event("select2:" + e, {params: t});
                        r.$element.trigger(n), -1 !== s.inArray(e, o) && (t.prevented = n.isDefaultPrevented())
                    }
                })
            }, e
        }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
            function r(e) {
                this.dict = e || {}
            }

            return r.prototype.all = function () {
                return this.dict
            }, r.prototype.get = function (e) {
                return this.dict[e]
            }, r.prototype.extend = function (e) {
                this.dict = t.extend({}, e.all(), this.dict)
            }, r._cache = {}, r.loadPath = function (e) {
                if (!(e in r._cache)) {
                    var t = n(e);
                    r._cache[e] = t
                }
                return new r(r._cache[e])
            }, r
        }), e.define("select2/diacritics", [], function () {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Œ": "OE",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "œ": "oe",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ώ": "ω",
                "ς": "σ",
                "’": "'"
            }
        }), e.define("select2/data/base", ["../utils"], function (r) {
            function n(e, t) {
                n.__super__.constructor.call(this)
            }

            return r.Extend(n, r.Observable), n.prototype.current = function (e) {
                throw new Error("The `current` method must be defined in child classes.")
            }, n.prototype.query = function (e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }, n.prototype.bind = function (e, t) {
            }, n.prototype.destroy = function () {
            }, n.prototype.generateResultId = function (e, t) {
                var n = e.id + "-result-";
                return n += r.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + r.generateChars(4), n
            }, n
        }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, a, l) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }

            return a.Extend(n, e), n.prototype.current = function (e) {
                var n = [], r = this;
                this.$element.find(":selected").each(function () {
                    var e = l(this), t = r.item(e);
                    n.push(t)
                }), e(n)
            }, n.prototype.select = function (i) {
                var o = this;
                if (i.selected = !0, l(i.element).is("option")) return i.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (e) {
                    var t = [];
                    (i = [i]).push.apply(i, e);
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n].id;
                        -1 === l.inArray(r, t) && t.push(r)
                    }
                    o.$element.val(t), o.$element.trigger("change")
                }); else {
                    var e = i.id;
                    this.$element.val(e), this.$element.trigger("change")
                }
            }, n.prototype.unselect = function (i) {
                var o = this;
                if (this.$element.prop("multiple")) {
                    if (i.selected = !1, l(i.element).is("option")) return i.element.selected = !1, void this.$element.trigger("change");
                    this.current(function (e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var r = e[n].id;
                            r !== i.id && -1 === l.inArray(r, t) && t.push(r)
                        }
                        o.$element.val(t), o.$element.trigger("change")
                    })
                }
            }, n.prototype.bind = function (e, t) {
                var n = this;
                (this.container = e).on("select", function (e) {
                    n.select(e.data)
                }), e.on("unselect", function (e) {
                    n.unselect(e.data)
                })
            }, n.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    a.RemoveData(this)
                })
            }, n.prototype.query = function (r, e) {
                var i = [], o = this;
                this.$element.children().each(function () {
                    var e = l(this);
                    if (e.is("option") || e.is("optgroup")) {
                        var t = o.item(e), n = o.matches(r, t);
                        null !== n && i.push(n)
                    }
                }), e({results: i})
            }, n.prototype.addOptions = function (e) {
                a.appendMany(this.$element, e)
            }, n.prototype.option = function (e) {
                var t;
                e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                var n = l(t), r = this._normalizeItem(e);
                return r.element = t, a.StoreData(t, "data", r), n
            }, n.prototype.item = function (e) {
                var t = {};
                if (null != (t = a.GetData(e[0], "data"))) return t;
                if (e.is("option")) t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                }; else if (e.is("optgroup")) {
                    t = {text: e.prop("label"), children: [], title: e.prop("title")};
                    for (var n = e.children("option"), r = [], i = 0; i < n.length; i++) {
                        var o = l(n[i]), s = this.item(o);
                        r.push(s)
                    }
                    t.children = r
                }
                return (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], "data", t), t
            }, n.prototype._normalizeItem = function (e) {
                e !== Object(e) && (e = {id: e, text: e});
                return null != (e = l.extend({}, {text: ""}, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), l.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e)
            }, n.prototype.matches = function (e, t) {
                return this.options.get("matcher")(e, t)
            }, n
        }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, f, g) {
            function r(e, t) {
                this._dataToConvert = t.get("data") || [], r.__super__.constructor.call(this, e, t)
            }

            return f.Extend(r, e), r.prototype.bind = function (e, t) {
                r.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert))
            }, r.prototype.select = function (n) {
                var e = this.$element.find("option").filter(function (e, t) {
                    return t.value == n.id.toString()
                });
                0 === e.length && (e = this.option(n), this.addOptions(e)), r.__super__.select.call(this, n)
            }, r.prototype.convertToOptions = function (e) {
                var t = this, n = this.$element.find("option"), r = n.map(function () {
                    return t.item(g(this)).id
                }).get(), i = [];

                function o(e) {
                    return function () {
                        return g(this).val() == e.id
                    }
                }

                for (var s = 0; s < e.length; s++) {
                    var a = this._normalizeItem(e[s]);
                    if (0 <= g.inArray(a.id, r)) {
                        var l = n.filter(o(a)), c = this.item(l), u = g.extend(!0, {}, a, c), d = this.option(u);
                        l.replaceWith(d)
                    } else {
                        var p = this.option(a);
                        if (a.children) {
                            var h = this.convertToOptions(a.children);
                            f.appendMany(p, h)
                        }
                        i.push(p)
                    }
                }
                return i
            }, r
        }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, o) {
            function n(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
            }

            return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
                var t = {
                    data: function (e) {
                        return o.extend({}, e, {q: e.term})
                    }, transport: function (e, t, n) {
                        var r = o.ajax(e);
                        return r.then(t), r.fail(n), r
                    }
                };
                return o.extend({}, t, e, !0)
            }, n.prototype.processResults = function (e) {
                return e
            }, n.prototype.query = function (n, r) {
                var i = this;
                null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var t = o.extend({type: "GET"}, this.ajaxOptions);

                function e() {
                    var e = t.transport(t, function (e) {
                        var t = i.processResults(e, n);
                        i.options.get("debug") && window.console && console.error && (t && t.results && o.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), r(t)
                    }, function () {
                        "status" in e && (0 === e.status || "0" === e.status) || i.trigger("results:message", {message: "errorLoading"})
                    });
                    i._request = e
                }

                "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
            }, n
        }), e.define("select2/data/tags", ["jquery"], function (u) {
            function e(e, t, n) {
                var r = n.get("tags"), i = n.get("createTag");
                void 0 !== i && (this.createTag = i);
                var o = n.get("insertTag");
                if (void 0 !== o && (this.insertTag = o), e.call(this, t, n), u.isArray(r)) for (var s = 0; s < r.length; s++) {
                    var a = r[s], l = this._normalizeItem(a), c = this.option(l);
                    this.$element.append(c)
                }
            }

            return e.prototype.query = function (e, c, u) {
                var d = this;
                this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
                    for (var r = t.results, i = 0; i < r.length; i++) {
                        var o = r[i], s = null != o.children && !e({results: o.children}, !0);
                        if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || s) return !n && (t.data = r, void u(t))
                    }
                    if (n) return !0;
                    var a = d.createTag(c);
                    if (null != a) {
                        var l = d.option(a);
                        l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(r, a)
                    }
                    t.results = r, u(t)
                }) : e.call(this, c, u)
            }, e.prototype.createTag = function (e, t) {
                var n = u.trim(t.term);
                return "" === n ? null : {id: n, text: n}
            }, e.prototype.insertTag = function (e, t, n) {
                t.unshift(n)
            }, e.prototype._removeOldTags = function (e) {
                this.$element.find("option[data-select2-tag]").each(function () {
                    this.selected || u(this).remove()
                })
            }, e
        }), e.define("select2/data/tokenizer", ["jquery"], function (d) {
            function e(e, t, n) {
                var r = n.get("tokenizer");
                void 0 !== r && (this.tokenizer = r), e.call(this, t, n)
            }

            return e.prototype.bind = function (e, t, n) {
                e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }, e.prototype.query = function (e, t, n) {
                var r = this;
                t.term = t.term || "";
                var i = this.tokenizer(t, this.options, function (e) {
                    var t = r._normalizeItem(e);
                    if (!r.$element.find("option").filter(function () {
                        return d(this).val() === t.id
                    }).length) {
                        var n = r.option(t);
                        n.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([n])
                    }
                    !function (e) {
                        r.trigger("select", {data: e})
                    }(t)
                });
                i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger("focus")), t.term = i.term), e.call(this, t, n)
            }, e.prototype.tokenizer = function (e, t, n, r) {
                for (var i = n.get("tokenSeparators") || [], o = t.term, s = 0, a = this.createTag || function (e) {
                    return {id: e.term, text: e.term}
                }; s < o.length;) {
                    var l = o[s];
                    if (-1 !== d.inArray(l, i)) {
                        var c = o.substr(0, s), u = a(d.extend({}, t, {term: c}));
                        null != u ? (r(u), o = o.substr(s + 1) || "", s = 0) : s++
                    } else s++
                }
                return {term: o}
            }, e
        }), e.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
            }

            return e.prototype.query = function (e, t, n) {
                t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: t.term, params: t}
                }) : e.call(this, t, n)
            }, e
        }), e.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
            }

            return e.prototype.query = function (e, t, n) {
                t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: t.term, params: t}
                }) : e.call(this, t, n)
            }, e
        }), e.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("select", function () {
                    r._checkIfMaximumSelected()
                })
            }, e.prototype.query = function (e, t, n) {
                var r = this;
                this._checkIfMaximumSelected(function () {
                    e.call(r, t, n)
                })
            }, e.prototype._checkIfMaximumSelected = function (e, n) {
                var r = this;
                this.current(function (e) {
                    var t = null != e ? e.length : 0;
                    0 < r.maximumSelectionLength && t >= r.maximumSelectionLength ? r.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: r.maximumSelectionLength}
                    }) : n && n()
                })
            }, e
        }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }

            return e.Extend(n, e.Observable), n.prototype.render = function () {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$dropdown = e
            }, n.prototype.bind = function () {
            }, n.prototype.position = function (e, t) {
            }, n.prototype.destroy = function () {
                this.$dropdown.remove()
            }, n
        }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (o, e) {
            function t() {
            }

            return t.prototype.render = function (e) {
                var t = e.call(this),
                    n = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t
            }, t.prototype.bind = function (e, t, n) {
                var r = this, i = t.id + "-results";
                e.call(this, t, n), this.$search.on("keydown", function (e) {
                    r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented()
                }), this.$search.on("input", function (e) {
                    o(this).off("keyup")
                }), this.$search.on("keyup input", function (e) {
                    r.handleSearch(e)
                }), t.on("open", function () {
                    r.$search.attr("tabindex", 0), r.$search.attr("aria-controls", i), r.$search.trigger("focus"), window.setTimeout(function () {
                        r.$search.trigger("focus")
                    }, 0)
                }), t.on("close", function () {
                    r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur")
                }), t.on("focus", function () {
                    t.isOpen() || r.$search.trigger("focus")
                }), t.on("results:all", function (e) {
                    null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"))
                }), t.on("results:focus", function (e) {
                    e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
                })
            }, t.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, t.prototype.showSearch = function (e, t) {
                return !0
            }, t
        }), e.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, r) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, r)
            }

            return e.prototype.append = function (e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t)
            }, e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t
            }, e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), r = t.length - 1; 0 <= r; r--) {
                    var i = t[r];
                    this.placeholder.id === i.id && n.splice(r, 1)
                }
                return n
            }, e
        }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
            function e(e, t, n, r) {
                this.lastParams = {}, e.call(this, t, n, r), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return e.prototype.append = function (e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
            }, e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("query", function (e) {
                    r.lastParams = e, r.loading = !0
                }), t.on("query:append", function (e) {
                    r.lastParams = e, r.loading = !0
                }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
            }, e.prototype.loadMoreIfNeeded = function () {
                var e = n.contains(document.documentElement, this.$loadingMore[0]);
                if (!this.loading && e) {
                    var t = this.$results.offset().top + this.$results.outerHeight(!1);
                    this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore()
                }
            }, e.prototype.loadMore = function () {
                this.loading = !0;
                var e = n.extend({}, {page: 1}, this.lastParams);
                e.page++, this.trigger("query:append", e)
            }, e.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more
            }, e.prototype.createLoadingMore = function () {
                var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                    t = this.options.get("translations").get("loadingMore");
                return e.html(t(this.lastParams)), e
            }, e
        }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
            function e(e, t, n) {
                this.$dropdownParent = n.get("dropdownParent") || f(document.body), e.call(this, t, n)
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("open", function () {
                    r._showDropdown(), r._attachPositioningHandler(t)
                }), t.on("close", function () {
                    r._hideDropdown(), r._detachPositioningHandler(t)
                }), t.on("results:all", function () {
                    r._positionDropdown(), r._resizeDropdown()
                }), t.on("results:append", function () {
                    r._positionDropdown(), r._resizeDropdown()
                }), t.on("results:message", function () {
                    r._positionDropdown(), r._resizeDropdown()
                }), t.on("select", function () {
                    r._positionDropdown(), r._resizeDropdown()
                }), t.on("unselect", function () {
                    r._positionDropdown(), r._resizeDropdown()
                }), this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation()
                })
            }, e.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove()
            }, e.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n
            }, e.prototype.render = function (e) {
                var t = f("<span></span>"), n = e.call(this);
                return t.append(n), this.$dropdownContainer = t
            }, e.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach()
            }, e.prototype._attachPositioningHandler = function (e, t) {
                var n = this, r = "scroll.select2." + t.id, i = "resize.select2." + t.id,
                    o = "orientationchange.select2." + t.id, s = this.$container.parents().filter(a.hasScroll);
                s.each(function () {
                    a.StoreData(this, "select2-scroll-position", {x: f(this).scrollLeft(), y: f(this).scrollTop()})
                }), s.on(r, function (e) {
                    var t = a.GetData(this, "select2-scroll-position");
                    f(this).scrollTop(t.y)
                }), f(window).on(r + " " + i + " " + o, function (e) {
                    n._positionDropdown(), n._resizeDropdown()
                })
            }, e.prototype._detachPositioningHandler = function (e, t) {
                var n = "scroll.select2." + t.id, r = "resize.select2." + t.id, i = "orientationchange.select2." + t.id;
                this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + r + " " + i)
            }, e.prototype._positionDropdown = function () {
                var e = f(window), t = this.$dropdown.hasClass("select2-dropdown--above"),
                    n = this.$dropdown.hasClass("select2-dropdown--below"), r = null, i = this.$container.offset();
                i.bottom = i.top + this.$container.outerHeight(!1);
                var o = {height: this.$container.outerHeight(!1)};
                o.top = i.top, o.bottom = i.top + o.height;
                var s = this.$dropdown.outerHeight(!1), a = e.scrollTop(), l = e.scrollTop() + e.height(),
                    c = a < i.top - s, u = l > i.bottom + s, d = {left: i.left, top: o.bottom},
                    p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var h = p.offset();
                d.top -= h.top, d.left -= h.left, t || n || (r = "below"), u || !c || t ? !c && u && t && (r = "below") : r = "above", ("above" == r || t && "below" !== r) && (d.top = o.top - h.top - s), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
            }, e.prototype._resizeDropdown = function () {
                var e = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
            }, e.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, e
        }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(e, t, n, r) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, r)
            }

            return e.prototype.showSearch = function (e, t) {
                return !(function e(t) {
                    for (var n = 0, r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.children ? n += e(i.children) : n++
                    }
                    return n
                }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
            }, e
        }), e.define("select2/dropdown/selectOnClose", ["../utils"], function (o) {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("close", function (e) {
                    r._handleSelectOnClose(e)
                })
            }, e.prototype._handleSelectOnClose = function (e, t) {
                if (t && null != t.originalSelect2Event) {
                    var n = t.originalSelect2Event;
                    if ("select" === n._type || "unselect" === n._type) return
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                    var i = o.GetData(r[0], "data");
                    null != i.element && i.element.selected || null == i.element && i.selected || this.trigger("select", {data: i})
                }
            }, e
        }), e.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("select", function (e) {
                    r._selectTriggered(e)
                }), t.on("unselect", function (e) {
                    r._selectTriggered(e)
                })
            }, e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                n && (n.ctrlKey || n.metaKey) || this.trigger("close", {originalEvent: n, originalSelect2Event: t})
            }, e
        }), e.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (e) {
                    var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"), n
                }, inputTooShort: function (e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                }, loadingMore: function () {
                    return "Loading more results…"
                }, maximumSelected: function (e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searching…"
                }, removeAllItems: function () {
                    return "Remove all items"
                }
            }
        }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (c, u, d, p, h, f, g, m, v, y, s, t, _, $, w, b, A, x, D, S, E, C, O, T, q, L, I, j, e) {
            function n() {
                this.reset()
            }

            return n.prototype.apply = function (e) {
                if (null == (e = c.extend(!0, {}, this.defaults, e)).dataAdapter) {
                    if (null != e.ajax ? e.dataAdapter = w : null != e.data ? e.dataAdapter = $ : e.dataAdapter = _, 0 < e.minimumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, x)), 0 < e.maximumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, D)), 0 < e.maximumSelectionLength && (e.dataAdapter = y.Decorate(e.dataAdapter, S)), e.tags && (e.dataAdapter = y.Decorate(e.dataAdapter, b)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = y.Decorate(e.dataAdapter, A)), null != e.query) {
                        var t = u(e.amdBase + "compat/query");
                        e.dataAdapter = y.Decorate(e.dataAdapter, t)
                    }
                    if (null != e.initSelection) {
                        var n = u(e.amdBase + "compat/initSelection");
                        e.dataAdapter = y.Decorate(e.dataAdapter, n)
                    }
                }
                if (null == e.resultsAdapter && (e.resultsAdapter = d, null != e.ajax && (e.resultsAdapter = y.Decorate(e.resultsAdapter, T)), null != e.placeholder && (e.resultsAdapter = y.Decorate(e.resultsAdapter, O)), e.selectOnClose && (e.resultsAdapter = y.Decorate(e.resultsAdapter, I))), null == e.dropdownAdapter) {
                    if (e.multiple) e.dropdownAdapter = E; else {
                        var r = y.Decorate(E, C);
                        e.dropdownAdapter = r
                    }
                    if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, L)), e.closeOnSelect && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, j)), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) {
                        var i = u(e.amdBase + "compat/dropdownCss");
                        e.dropdownAdapter = y.Decorate(e.dropdownAdapter, i)
                    }
                    e.dropdownAdapter = y.Decorate(e.dropdownAdapter, q)
                }
                if (null == e.selectionAdapter) {
                    if (e.multiple ? e.selectionAdapter = h : e.selectionAdapter = p, null != e.placeholder && (e.selectionAdapter = y.Decorate(e.selectionAdapter, f)), e.allowClear && (e.selectionAdapter = y.Decorate(e.selectionAdapter, g)), e.multiple && (e.selectionAdapter = y.Decorate(e.selectionAdapter, m)), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) {
                        var o = u(e.amdBase + "compat/containerCss");
                        e.selectionAdapter = y.Decorate(e.selectionAdapter, o)
                    }
                    e.selectionAdapter = y.Decorate(e.selectionAdapter, v)
                }
                e.language = this._resolveLanguage(e.language), e.language.push("en");
                for (var s = [], a = 0; a < e.language.length; a++) {
                    var l = e.language[a];
                    -1 === s.indexOf(l) && s.push(l)
                }
                return e.language = s, e.translations = this._processTranslations(e.language, e.debug), e
            }, n.prototype.reset = function () {
                function a(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function (e) {
                        return t[e] || e
                    })
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: y.escapeMarkup,
                    language: {},
                    matcher: function e(t, n) {
                        if ("" === c.trim(t.term)) return n;
                        if (n.children && 0 < n.children.length) {
                            for (var r = c.extend(!0, {}, n), i = n.children.length - 1; 0 <= i; i--) null == e(t, n.children[i]) && r.children.splice(i, 1);
                            return 0 < r.children.length ? r : e(t, r)
                        }
                        var o = a(n.text).toUpperCase(), s = a(t.term).toUpperCase();
                        return -1 < o.indexOf(s) ? n : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function (e) {
                        return e
                    },
                    templateResult: function (e) {
                        return e.text
                    },
                    templateSelection: function (e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, n.prototype.applyFromElement = function (e, t) {
                var n = e.language, r = this.defaults.language, i = t.prop("lang"),
                    o = t.closest("[lang]").prop("lang"),
                    s = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(r), this._resolveLanguage(o));
                return e.language = s, e
            }, n.prototype._resolveLanguage = function (e) {
                if (!e) return [];
                if (c.isEmptyObject(e)) return [];
                if (c.isPlainObject(e)) return [e];
                var t;
                t = c.isArray(e) ? e : [e];
                for (var n = [], r = 0; r < t.length; r++) if (n.push(t[r]), "string" == typeof t[r] && 0 < t[r].indexOf("-")) {
                    var i = t[r].split("-")[0];
                    n.push(i)
                }
                return n
            }, n.prototype._processTranslations = function (e, t) {
                for (var n = new s, r = 0; r < e.length; r++) {
                    var i = new s, o = e[r];
                    if ("string" == typeof o) try {
                        i = s.loadPath(o)
                    } catch (e) {
                        try {
                            o = this.defaults.amdLanguageBase + o, i = s.loadPath(o)
                        } catch (e) {
                            t && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.')
                        }
                    } else i = c.isPlainObject(o) ? new s(o) : o;
                    n.extend(i)
                }
                return n
            }, n.prototype.set = function (e, t) {
                var n = {};
                n[c.camelCase(e)] = t;
                var r = y._convertData(n);
                c.extend(!0, this.defaults, r)
            }, new n
        }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (r, d, i, p) {
            function e(e, t) {
                if (this.options = e, null != t && this.fromElement(t), null != t && (this.options = i.applyFromElement(this.options, t)), this.options = i.apply(this.options), t && t.is("input")) {
                    var n = r(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = p.Decorate(this.options.dataAdapter, n)
                }
            }

            return e.prototype.fromElement = function (e) {
                var t = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), p.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")), p.StoreData(e[0], "tags", !0)), p.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")), p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
                var n = {};

                function r(e, t) {
                    return t.toUpperCase()
                }

                for (var i = 0; i < e[0].attributes.length; i++) {
                    var o = e[0].attributes[i].name, s = "data-";
                    if (o.substr(0, s.length) == s) {
                        var a = o.substring(s.length), l = p.GetData(e[0], a);
                        n[a.replace(/-([a-z])/g, r)] = l
                    }
                }
                d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e[0].dataset && (n = d.extend(!0, {}, e[0].dataset, n));
                var c = d.extend(!0, {}, p.GetData(e[0]), n);
                for (var u in c = p._convertData(c)) -1 < d.inArray(u, t) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = c[u]);
                return this
            }, e.prototype.get = function (e) {
                return this.options[e]
            }, e.prototype.set = function (e, t) {
                this.options[e] = t
            }, e
        }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (i, c, u, r) {
            var d = function (e, t) {
                null != u.GetData(e[0], "select2") && u.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this);
                var n = e.attr("tabindex") || 0;
                u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
                var r = this.options.get("dataAdapter");
                this.dataAdapter = new r(e, this.options);
                var i = this.render();
                this._placeContainer(i);
                var o = this.options.get("selectionAdapter");
                this.selection = new o(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, i);
                var s = this.options.get("dropdownAdapter");
                this.dropdown = new s(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, i);
                var a = this.options.get("resultsAdapter");
                this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var l = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                    l.trigger("selection:update", {data: e})
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(e[0], "select2", this), e.data("select2", this)
            };
            return u.Extend(d, u.Observable), d.prototype._generateId = function (e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }, d.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }, d.prototype._resolveWidth = function (e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var r = this._resolveWidth(e, "style");
                    return null != r ? r : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var i = e.outerWidth(!1);
                    return i <= 0 ? "auto" : i + "px"
                }
                if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
                var o = e.attr("style");
                if ("string" != typeof o) return null;
                for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                    var c = s[a].replace(/\s/g, "").match(n);
                    if (null !== c && 1 <= c.length) return c[1]
                }
                return null
            }, d.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, d.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                        t.trigger("selection:update", {data: e})
                    })
                }), this.$element.on("focus.select2", function (e) {
                    t.trigger("focus", e)
                }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != e ? (this._observer = new e(function (e) {
                    i.each(e, t._syncA), i.each(e, t._syncS)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }, d.prototype._registerDataEvents = function () {
                var n = this;
                this.dataAdapter.on("*", function (e, t) {
                    n.trigger(e, t)
                })
            }, d.prototype._registerSelectionEvents = function () {
                var n = this, r = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    n.toggleDropdown()
                }), this.selection.on("focus", function (e) {
                    n.focus(e)
                }), this.selection.on("*", function (e, t) {
                    -1 === i.inArray(e, r) && n.trigger(e, t)
                })
            }, d.prototype._registerDropdownEvents = function () {
                var n = this;
                this.dropdown.on("*", function (e, t) {
                    n.trigger(e, t)
                })
            }, d.prototype._registerResultsEvents = function () {
                var n = this;
                this.results.on("*", function (e, t) {
                    n.trigger(e, t)
                })
            }, d.prototype._registerEvents = function () {
                var n = this;
                this.on("open", function () {
                    n.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    n.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    n.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    n.$container.addClass("select2-container--disabled")
                }), this.on("blur", function () {
                    n.$container.removeClass("select2-container--focus")
                }), this.on("query", function (t) {
                    n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) {
                        n.trigger("results:all", {data: e, query: t})
                    })
                }), this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (e) {
                        n.trigger("results:append", {data: e, query: t})
                    })
                }), this.on("keypress", function (e) {
                    var t = e.which;
                    n.isOpen() ? t === r.ESC || t === r.TAB || t === r.UP && e.altKey ? (n.close(), e.preventDefault()) : t === r.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === r.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === r.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === r.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === r.ENTER || t === r.SPACE || t === r.DOWN && e.altKey) && (n.open(), e.preventDefault())
                })
            }, d.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, d.prototype._syncSubtree = function (e, t) {
                var n = !1, r = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t) if (t.addedNodes && 0 < t.addedNodes.length) for (var i = 0; i < t.addedNodes.length; i++) {
                        t.addedNodes[i].selected && (n = !0)
                    } else t.removedNodes && 0 < t.removedNodes.length && (n = !0); else n = !0;
                    n && this.dataAdapter.current(function (e) {
                        r.trigger("selection:update", {data: e})
                    })
                }
            }, d.prototype.trigger = function (e, t) {
                var n = d.__super__.trigger, r = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === t && (t = {}), e in r) {
                    var i = r[e], o = {prevented: !1, name: e, args: t};
                    if (n.call(this, i, o), o.prevented) return void (t.prevented = !0)
                }
                n.call(this, e, t)
            }, d.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, d.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, d.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, d.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, d.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus")
            }, d.prototype.focus = function (e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, d.prototype.enable = function (e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }, d.prototype.data = function () {
                this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current(function (e) {
                    t = e
                }), t
            }, d.prototype.val = function (e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                var t = e[0];
                i.isArray(t) && (t = i.map(t, function (e) {
                    return e.toString()
                })), this.$element.val(t).trigger("change")
            }, d.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, d.prototype.render = function () {
                var e = i('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), u.StoreData(e[0], "element", this.$element), e
            }, d
        }), e.define("jquery-mousewheel", ["jquery"], function (e) {
            return e
        }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (i, e, o, t, s) {
            if (null == i.fn.select2) {
                var a = ["open", "close", "destroy"];
                i.fn.select2 = function (t) {
                    if ("object" == typeof (t = t || {})) return this.each(function () {
                        var e = i.extend(!0, {}, t);
                        new o(i(this), e)
                    }), this;
                    if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                    var n, r = Array.prototype.slice.call(arguments, 1);
                    return this.each(function () {
                        var e = s.GetData(this, "select2");
                        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, r)
                    }), -1 < i.inArray(t, a) ? this : n
                }
            }
            return null == i.fn.select2.defaults && (i.fn.select2.defaults = t), o
        }), {define: e.define, require: e.require}
    }(), t = e.require("jquery.select2");
    return u.fn.select2.amd = e, t
});

$('.category').select2(
    {language: "vi"});
$('.location_id').select2({
    placeholder: {
        id: '-1', // the value of the option
        text: 'Chọn loại hình'
    }
});
$('.location_id').select2(
    {language: "vi"});
$('.province').select2({
    placeholder: {
        id: '-1', // the value of the option
        text: 'Chọn tỉnh / thành phố'
    }
});
$('.district').select2({
    placeholder: {
        id: '-1', // the value of the option
        text: 'Chọn quận / huyện'
    }
});
$('.ward').select2({
    placeholder: {
        id: '-1', // the value of the option
        text: 'Chọn phường / xã'
    }
});
/**
 * FileUploader
 * Copyright (c) 2017 Innostudio.de
 * Website: http://innostudio.de/fileuploader/
 * Version: 1.3 (01-Sep-2017)
 * Requires: jQuery v1.7.1 or later
 * License: https://innostudio.de/fileuploader/documentation/#license
 */
!function ($) {
    "use strict";
    $.fn.fileuploader = function (q) {
        return this.each(function (t, r) {
            var s = $(r), p = null, o = null, l = null, sl = [], n = $.extend(!0, {}, $.fn.fileuploader.defaults, q),
                f = {
                    init: function () {
                        return s.closest(".fileuploader").length || s.wrap('<div class="fileuploader"></div>'), p = s.closest(".fileuploader"), f.set("attrOpts"), f.isSupported() ? (!n.beforeRender || !$.isFunction(n.beforeRender) || !1 !== n.beforeRender(p, s)) && (f.redesign(), n.files && f.files.append(n.files), f.rendered = !0, n.afterRender && $.isFunction(n.afterRender) && n.afterRender(l, p, o, s), void (f.disabled || f.bindUnbindEvents(!0))) : (n.onSupportError && $.isFunction(n.onSupportError) && n.onSupportError(p, s), !1)
                    }, bindUnbindEvents: function (e) {
                        e && f.bindUnbindEvents(!1), s[e ? "on" : "off"](f._assets.getAllEvents(), f.onEvent), n.changeInput && o !== s && o[e ? "on" : "off"]("click", f.clickHandler), n.dragDrop && n.dragDrop.container.length && (n.dragDrop.container[e ? "on" : "off"]("drag dragstart dragend dragover dragenter dragleave drop", function (e) {
                            e.preventDefault()
                        }), n.dragDrop.container[e ? "on" : "off"]("drop", f.dragDrop.onDrop), n.dragDrop.container[e ? "on" : "off"]("dragover", f.dragDrop.onDragEnter), n.dragDrop.container[e ? "on" : "off"]("dragleave", f.dragDrop.onDragLeave)), f.isUploadMode() && n.clipboardPaste && $(window)[e ? "on" : "off"]("paste", f.clipboard.paste), s.closest("form")[e ? "on" : "off"]("reset", f.reset)
                    }, redesign: function () {
                        if (o = s, n.theme && p.addClass("fileuploader-theme-" + n.theme), n.changeInput) {
                            switch ((typeof n.changeInput).toLowerCase()) {
                                case"boolean":
                                    o = $('<div class="fileuploader-input"><div class="fileuploader-input-caption"><span>' + f._assets.textParse(n.captions.feedback) + '</span></div><div class="fileuploader-input-button"><span>' + f._assets.textParse(n.captions.button) + "</span></div></div>");
                                    break;
                                case"string":
                                    " " != n.changeInput && (o = $(f._assets.textParse(n.changeInput, n)));
                                    break;
                                case"object":
                                    o = $(n.changeInput);
                                    break;
                                case"function":
                                    o = $(n.changeInput(s, p, n, f._assets.textParse))
                            }
                            s.after(o), s.css({
                                position: "absolute",
                                "z-index": "-9999",
                                height: "0",
                                width: "0",
                                padding: "0",
                                margin: "0",
                                "line-height": "0",
                                outline: "0",
                                border: "0",
                                opacity: "0"
                            })
                        }
                        n.thumbnails && f.thumbnails.create(), n.dragDrop && (n.dragDrop = "object" != typeof n.dragDrop ? {container: null} : n.dragDrop, n.dragDrop.container = n.dragDrop.container ? $(n.dragDrop.container) : o)
                    }, clickHandler: function (e) {
                        e.preventDefault(), f.clipboard._timer ? f.clipboard.clean() : s.click()
                    }, onEvent: function (e) {
                        switch (e.type) {
                            case"focus":
                                p && p.addClass("fileuploader-focused");
                                break;
                            case"blur":
                                p && p.removeClass("fileuploader-focused");
                                break;
                            case"change":
                                f.onChange.call(this)
                        }
                        n.listeners && $.isFunction(n.listeners[e.type]) && n.listeners[e.type].call(s, p)
                    }, set: function (e, t) {
                        switch (e) {
                            case"attrOpts":
                                for (var i = ["limit", "maxSize", "fileMaxSize", "extensions", "changeInput", "theme", "addMore", "listInput", "files"], r = 0; r < i.length; r++) {
                                    var a = "data-fileuploader-" + i[r];
                                    if (f._assets.hasAttr(a)) switch (i[r]) {
                                        case"changeInput":
                                        case"addMore":
                                        case"listInput":
                                            n[i[r]] = ["true", "false"].indexOf(s.attr(a)) > -1 ? "true" == s.attr(a) : s.attr(a);
                                            break;
                                        case"extensions":
                                            n[i[r]] = s.attr(a).replace(/ /g, "").split(",");
                                            break;
                                        case"files":
                                            n[i[r]] = JSON.parse(s.attr(a));
                                            break;
                                        default:
                                            n[i[r]] = s.attr(a)
                                    }
                                    s.removeAttr(a)
                                }
                                null == s.attr("disabled") && null == s.attr("readonly") && 0 !== n.limit || (f.disabled = !0), (!n.limit || n.limit && n.limit >= 2) && (s.attr("multiple", "multiple"), n.inputNameBrackets && "[]" != s.attr("name").slice(-2) && s.attr("name", s.attr("name") + "[]")), !0 === n.listInput && (n.listInput = $('<input type="hidden" name="fileuploader-list-' + s.attr("name").replace("[]", "").split("[").pop().replace("]", "") + '">').insertBefore(s)), "string" == typeof n.listInput && 0 == $(n.listInput).length && (n.listInput = $('<input type="hidden" name="' + n.listInput + '">').insertBefore(s)), f.set("disabled", f.disabled), !n.fileMaxSize && n.maxSize && (n.fileMaxSize = n.maxSize);
                                break;
                            case"disabled":
                                f.disabled = t, p[f.disabled ? "addClass" : "removeClass"]("fileuploader-disabled"), s[f.disabled ? "attr" : "removeAttr"]("disabled", "disabled"), f.rendered && f.bindUnbindEvents(!t);
                                break;
                            case"feedback":
                                t || (t = f._assets.textParse(f._itFl.length > 0 ? n.captions.feedback2 : n.captions.feedback, {length: f._itFl.length})), $(!o.is(":file")) && o.find(".fileuploader-input-caption span").html(t);
                                break;
                            case"input":
                                var l = f._assets.copyAllAttributes($('<input type="file">'), s, !0);
                                f.bindUnbindEvents(!1), s.after(s = l).remove(), f.bindUnbindEvents(!0);
                                break;
                            case"prevInput":
                                sl.length > 0 && (f.bindUnbindEvents(!1), sl[t].remove(), sl.splice(t, 1), s = sl[sl.length - 1], f.bindUnbindEvents(!0));
                                break;
                            case"nextInput":
                                l = f._assets.copyAllAttributes($('<input type="file">'), s);
                                f.bindUnbindEvents(!1), sl.length > 0 && 0 == sl[sl.length - 1].get(0).files.length ? s = sl[sl.length - 1] : (-1 == sl.indexOf(s) && sl.push(s), sl.push(l), s.after(s = l)), f.bindUnbindEvents(!0);
                                break;
                            case"listInput":
                                n.listInput && n.listInput.val(null === t ? f.files.list(!0) : t)
                        }
                    }, onChange: function (e, t) {
                        var i = s.get(0).files;
                        if (t) {
                            if (!t.length) return f.set("input", ""), f.files.clear(), !1;
                            i = t
                        }
                        if (f.clipboard._timer && f.clipboard.clean(), !f.isDefaultMode() || (f.reset(), 0 != i.length)) {
                            if (n.beforeSelect && $.isFunction(n.beforeSelect) && 0 == n.beforeSelect(i, l, p, o, s)) return !1;
                            for (var r = 0, a = 0; a < i.length; a++) {
                                var d = i[a], u = f._itFl[f.files.add(d, "choosed")], c = f.files.check(u, i, 0 == a);
                                if (!0 === c) n.thumbnails && f.thumbnails.item(u), f.isUploadMode() && f.upload.prepare(u), n.onSelect && $.isFunction(n.onSelect) && n.onSelect(u, l, p, o, s), r++; else if (f.files.remove(u, !0), c[2] || (f.isDefaultMode() && (f.set("input", ""), f.reset(), c[3] = !0), c[1] && n.dialogs.alert(c[1], u, l, p, o, s)), c[3]) break
                            }
                            f.isUploadMode() && r > 0 && f.set("input", ""), f.set("feedback", null), f.isAddMoreMode() && r > 0 && f.set("nextInput"), f.set("listInput", null), n.afterSelect && $.isFunction(n.afterSelect) && n.afterSelect(l, p, o, s)
                        }
                    }, thumbnails: {
                        create: function () {
                            null != n.thumbnails.beforeShow && $.isFunction(n.thumbnails.beforeShow) && n.thumbnails.beforeShow(p, o, s);
                            var e = $(f._assets.textParse(n.thumbnails.box)).appendTo(n.thumbnails.boxAppendTo ? n.thumbnails.boxAppendTo : p);
                            l = e.is(n.thumbnails._selectors.list) ? e : e.find(n.thumbnails._selectors.list), n.thumbnails._selectors.popup_open && l.on("click", n.thumbnails._selectors.popup_open, function (e) {
                                e.preventDefault();
                                var t = $(this).closest(n.thumbnails._selectors.item), o = f.files.find(t);
                                o && o.html.hasClass("file-has-popup") && f.thumbnails.popup(o)
                            }), f.isUploadMode() && n.thumbnails._selectors.start && l.on("click", n.thumbnails._selectors.start, function (e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item), o = f.files.find(t);
                                o && f.upload.send(o, !0)
                            }), f.isUploadMode() && n.thumbnails._selectors.retry && l.on("click", n.thumbnails._selectors.retry, function (e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item), o = f.files.find(t);
                                o && f.upload.retry(o)
                            }), n.thumbnails._selectors.remove && l.on("click", n.thumbnails._selectors.remove, function (e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item), o = f.files.find(t),
                                    i = function (e) {
                                        f.files.remove(o)
                                    };
                                o && (o.upload && "successful" != o.upload.status ? f.upload.cancel(o) : n.thumbnails.removeConfirmation ? n.dialogs.confirm(f._assets.textParse(n.captions.removeConfirmation, o), i) : i())
                            })
                        }, clear: function () {
                            l && l.html("")
                        }, item: function (e) {
                            e.icon = f.thumbnails.generateFileIcon(e.format, e.extension), e.image = '<div class="fileuploader-item-image fileuploader-loading"></div>', e.progressBar = f.isUploadMode() ? '<div class="fileuploader-progressbar"><div class="bar"></div></div>' : "", e.html = $(f._assets.textParse(e.appended && n.thumbnails.item2 ? n.thumbnails.item2 : n.thumbnails.item, e)), e.progressBar = e.html.find(".fileuploader-progressbar"), e.html.addClass("file-type-" + (e.format ? e.format : "no") + " file-ext-" + (e.extension ? e.extension : "no")), e.html[n.thumbnails.itemPrepend ? "prependTo" : "appendTo"](l), f.thumbnails.renderThumbnail(e), e.renderThumbnail = function (t) {
                                f.thumbnails.renderThumbnail(e, !0, t)
                            }, e.popup = {
                                open: function () {
                                    f.thumbnails.popup(e)
                                }
                            }, null != n.thumbnails.onItemShow && $.isFunction(n.thumbnails.onItemShow) && n.thumbnails.onItemShow(e, l, p, o, s)
                        }, generateFileIcon: function (e, t) {
                            var o = '<div style="${style}" class="fileuploader-item-icon${class}"><i>' + (t || "") + "</i></div>",
                                i = f._assets.textToColor(t);
                            i && (f._assets.isBrightColor(i) && (o = o.replace("${class}", " is-bright-color")), o = o.replace("${style}", "background-color: " + i));
                            return o.replace("${style}", "").replace("${class}", "")
                        }, renderThumbnail: function (e, t, i) {
                            var r = e.html.find(".fileuploader-item-image"), a = e.data && e.data.readerSkip,
                                d = function (t) {
                                    var i = $(t);
                                    i.is("img") && i.on("load error", function (t) {
                                        "error" == t.type && u(), c(), null != n.thumbnails.onImageLoaded && $.isFunction(n.thumbnails.onImageLoaded) && n.thumbnails.onImageLoaded(e, l, p, o, s)
                                    }), i.is("canvas") && null != n.thumbnails.onImageLoaded && $.isFunction(n.thumbnails.onImageLoaded) && n.thumbnails.onImageLoaded(e, l, p, o, s), r.removeClass("fileuploader-no-thumbnail fileuploader-loading").html(i)
                                }, u = function () {
                                    r.addClass("fileuploader-no-thumbnail"), r.removeClass("fileuploader-loading").html(e.icon)
                                }, c = function () {
                                    var t = 0;
                                    if (e && f._pfrL.indexOf(e) > -1) for (f._pfrL.splice(f._pfrL.indexOf(e), 1); t < f._pfrL.length;) {
                                        if (f._itFl.indexOf(f._pfrL[t]) > -1) {
                                            f.thumbnails.renderThumbnail(f._pfrL[t], !0);
                                            break
                                        }
                                        f._pfrL.splice(t, 1), t++
                                    }
                                };
                            if (r.length) {
                                if (e.image = r, ["image", "video", "audio", "astext"].indexOf(e.format) > -1 && f.isFileReaderSupported() && !a && (e.appended || n.thumbnails.startImageRenderer || t)) {
                                    if (n.thumbnails.synchronImages && (-1 == f._pfrL.indexOf(e) && !t && f._pfrL.push(e), f._pfrL.length > 1 && !t)) return;
                                    var h = function (t, o) {
                                        var i = t.nodeName && "img" == t.nodeName.toLocaleLowerCase(),
                                            a = i ? t.src : t;
                                        if (n.thumbnails.canvasImage) {
                                            var l = document.createElement("canvas"), p = l.getContext("2d"),
                                                s = i ? t : new Image, h = function () {
                                                    var e = n.thumbnails.canvasImage.height ? n.thumbnails.canvasImage.height : r.height(),
                                                        t = n.thumbnails.canvasImage.width ? n.thumbnails.canvasImage.width : r.width(),
                                                        o = s.height / e, i = s.width / t, a = o < i ? o : i,
                                                        h = s.height / a, m = s.width / a,
                                                        g = Math.ceil(Math.log(s.width / m) / Math.log(2));
                                                    if (l.height = e, l.width = m, s.width < l.width || s.height < l.height || g <= 1) {
                                                        var v = s.width < l.width ? l.width / 2 - s.width / 2 : s.width > l.width ? -(s.width - l.width) / 2 : 0,
                                                            b = s.height < l.height ? l.height / 2 - s.height / 2 : 0;
                                                        p.drawImage(s, v, b, s.width, s.height)
                                                    } else {
                                                        var w = document.createElement("canvas"), $ = w.getContext("2d");
                                                        w.width = .5 * s.width, w.height = .5 * s.height, $.fillStyle = "#fff", $.fillRect(0, 0, w.width, w.height), $.drawImage(s, 0, 0, w.width, w.height), $.drawImage(w, 0, 0, .5 * w.width, .5 * w.height), p.drawImage(w, 0, 0, .5 * w.width, .5 * w.height, 0, 0, m, h)
                                                    }
                                                    f._assets.isBlankCanvas(l) ? u() : d(l), c()
                                                }, m = function (e) {
                                                    u(), c(), s = null
                                                };
                                            if ("image" == e.format && o && e.reader.node) return s = e.reader.node, h();
                                            if (!a) return m();
                                            if (i) return h.call(t);
                                            s.onload = h, s.onerror = m, e.data && e.data.readerCrossOrigin && s.setAttribute("crossOrigin", e.data.readerCrossOrigin), s.src = a
                                        } else d('<img src="' + a + '" draggable="false">')
                                    };
                                    return i ? h(i) : f.files.read(e, function () {
                                        e.reader.node && n.thumbnails.popup && e.html.addClass("file-has-popup"), !e.reader.node || "image" != e.format && "video" != e.format ? (u(), c()) : h(e.reader.frame || e.reader.src, !0)
                                    })
                                }
                                u()
                            } else c()
                        }, popup: function (e) {
                            if (n.thumbnails.popup && n.thumbnails._selectors.popup) {
                                p.find(n.thumbnails._selectors.popup).length && $.each(f._itFl, function (e, t) {
                                    t.popup && t.popup.close && t.popup.close()
                                });
                                var t = e.popup.html || $(f._assets.textParse(n.thumbnails.popup.template, e)),
                                    i = e.popup.html !== t, r = function () {
                                        var t = e.popup.html.find(".fileuploader-popup-preview"), o = t.find(".node"),
                                            i = t.find(".tools"), n = o.find("> *"), r = t.height() - i.outerHeight(!0);
                                        o.css({height: "100%"}), n && r > n.outerHeight() && (r = n.outerHeight()), o.css({height: r})
                                    }, a = function (t) {
                                        27 == (t.which || t.keyCode) && e.popup && e.popup.close && e.popup.close()
                                    };
                                t.show().appendTo(p), e.popup.html = t, e.popup.close = function () {
                                    e.reader.node && e.reader.node.pause && e.reader.node.pause(), $(window).off("keyup", a), $(window).off("resize", r), e.popup.editor && e.popup.editor.cropper && e.popup.editor.cropper.hide(), e.popup.html && n.thumbnails.popup.onHide && $.isFunction(n.thumbnails.popup.onHide) ? n.thumbnails.popup.onHide(e, l, p, o, s) : e.popup.html && e.popup.html.remove(), delete e.popup.close
                                }, e.reader.node && (i && t.find(".fileuploader-popup-preview .node").html(e.reader.node), e.reader.node.controls = !0, e.reader.node.currentTime = 0, e.reader.node.play && e.reader.node.play()), $(window).on("keyup", a), $(window).on("resize", r), r.call(), setTimeout(function () {
                                    r.call()
                                }, 10), e.editor && e.popup.editor && e.popup.editor.hasChanges ? (e.popup.editor && e.popup.editor.rotation && f.editor.rotate(e, e.editor.rotation || 0, !0), e.popup.editor && e.popup.editor.cropper && (e.popup.editor.cropper.hide(!0), setTimeout(function () {
                                    f.editor.crop(e, e.editor.crop ? $.extend({}, e.editor.crop) : e.popup.editor.cropper.setDefaultData())
                                }, 100))) : e.popup.editor = {}, n.thumbnails.popup.onShow && $.isFunction(n.thumbnails.popup.onShow) && n.thumbnails.popup.onShow(e, l, p, o, s)
                            }
                        }
                    }, editor: {
                        rotate: function (e, t, o) {
                            if (!(e.popup && void 0 !== e.popup.html)) {
                                var i = e.editor.rotation || 0;
                                return e.editor.rotation = t || i + 90
                            }
                            if (!e.popup.editor.isAnimating) {
                                e.popup.editor.isAnimating = !0;
                                var n = e.popup.html.find(".node"), r = n.find("> img"),
                                    a = {rotation: i = e.popup.editor.rotation || 0, scale: e.popup.editor.scale || 1};
                                e.popup.editor.cropper && e.popup.editor.cropper.$template.hide(), e.popup.editor.rotation = o ? t : i + 90, e.popup.editor.scale = (n.height() / r[[90, 270].indexOf(e.popup.editor.rotation) > -1 ? "width" : "height"]()).toFixed(3), r.height() * e.popup.editor.scale > n.width() && [90, 270].indexOf(e.popup.editor.rotation) > -1 && (e.popup.editor.scale = n.width() / r.height()), e.popup.editor.scale > 1 && (e.popup.editor.scale = 1), $(a).animate({
                                    rotation: e.popup.editor.rotation,
                                    scale: e.popup.editor.scale
                                }, {
                                    duration: o ? 1 : 300, easing: "swing", step: function (e, t) {
                                        var o = r.css("-webkit-transform") || r.css("-moz-transform") || r.css("transform") || "none",
                                            i = 0, n = 1, a = t.prop;
                                        if ("none" !== o) {
                                            var l = o.split("(")[1].split(")")[0].split(","), p = l[0], s = l[1];
                                            i = "rotation" == a ? e : Math.round(Math.atan2(s, p) * (180 / Math.PI)), n = "scale" == a ? e : Math.round(10 * Math.sqrt(p * p + s * s)) / 10
                                        }
                                        r.css({
                                            "-webkit-transform": "rotate(" + i + "deg) scale(" + n + ")",
                                            "-moz-transform": "rotate(" + i + "deg) scale(" + n + ")",
                                            transform: "rotate(" + i + "deg) scale(" + n + ")"
                                        })
                                    }, always: function () {
                                        delete e.popup.editor.isAnimating, e.popup.editor.cropper && !o && (e.popup.editor.cropper.setDefaultData(), e.popup.editor.cropper.init("rotation"))
                                    }
                                }), e.popup.editor.rotation >= 360 && (e.popup.editor.rotation = 0), e.popup.editor.rotation != e.editor.rotation && (e.popup.editor.hasChanges = !0)
                            }
                        }, crop: function (e, t) {
                            if (!(e.popup && void 0 !== e.popup.html)) return e.editor.crop = t || e.editor.crop;
                            if (e.popup.editor.cropper) t && (e.popup.editor.cropper.crop = t), e.popup.editor.cropper.init(t); else {
                                var o = e.popup.html.find(".node > img"),
                                    i = $('<div class="fileuploader-cropper"><div class="fileuploader-cropper-area"><div class="point point-a"></div><div class="point point-b"></div><div class="point point-c"></div><div class="point point-d"></div><div class="point point-e"></div><div class="point point-f"></div><div class="point point-g"></div><div class="point point-h"></div><div class="area-move"></div><div class="area-image"></div></div></div>'),
                                    r = i.find(".fileuploader-cropper-area");
                                e.popup.editor.cropper = {
                                    $imageEl: o,
                                    $template: i,
                                    $editor: r,
                                    isCropping: !1,
                                    crop: t || null,
                                    init: function (t) {
                                        var o = e.popup.editor.cropper, r = o.$imageEl.position(),
                                            a = o.$imageEl[0].getBoundingClientRect().width,
                                            l = o.$imageEl[0].getBoundingClientRect().height,
                                            p = e.popup.editor.rotation && [90, 270].indexOf(e.popup.editor.rotation) > -1 ? e.popup.editor.scale : 1;
                                        if (o.hide(), o.crop || o.setDefaultData(), 0 == a || 0 == l) return o.hide(!0);
                                        o.isCropping || (o.$imageEl.clone().appendTo(o.$template.find(".area-image")), o.$imageEl.parent().append(i)), o.$template.hide().css({
                                            left: r.left,
                                            top: r.top,
                                            width: a,
                                            height: l
                                        }).fadeIn(150), o.$editor.hide(), clearTimeout(o._editorAnimationTimeout), o._editorAnimationTimeout = setTimeout(function () {
                                            if (delete o._editorAnimationTimeout, o.$editor.fadeIn(250), e.editor.crop && $.isPlainObject(t) && (o.resize(), o.crop.left = o.crop.left * o.crop.cfWidth * p, o.crop.width = o.crop.width * o.crop.cfWidth * p, o.crop.top = o.crop.top * o.crop.cfHeight * p, o.crop.height = o.crop.height * o.crop.cfHeight * p), (!e.editor.crop || "rotation" == t) && n.editor.cropper && n.editor.cropper.ratio && "resize" != t) {
                                                var i = n.editor.cropper.ratio,
                                                    r = f._assets.ratioToPx(o.crop.width, o.crop.height, i);
                                                r && (o.crop.width = Math.min(o.crop.width, r[0]), o.crop.left = (o.$template.width() - o.crop.width) / 2, o.crop.height = Math.min(o.crop.height, r[1]), o.crop.top = (o.$template.height() - o.crop.height) / 2)
                                            }
                                            o.drawPlaceHolder(o.crop)
                                        }, 400), o.isCropping || o.$template.on("drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel", function (e) {
                                            e.preventDefault()
                                        }), n.editor.cropper && n.editor.cropper.showGrid && o.$editor.addClass("has-grid"), o.$imageEl.attr("draggable", "false"), o.$template.on("mousedown touchstart", o.mousedown), $(window).on("resize", o.resize), o.isCropping = !0, e.popup.editor.hasChanges = !0
                                    },
                                    setDefaultData: function () {
                                        var t = e.popup.editor.cropper, o = t.$imageEl, i = o.width(), n = o.height(),
                                            r = e.popup.editor.rotation && [90, 270].indexOf(e.popup.editor.rotation) > -1,
                                            a = e.popup.editor.scale || 1;
                                        return t.crop = {
                                            left: 0,
                                            top: 0,
                                            width: r ? n * a : i,
                                            height: r ? i * a : n,
                                            cfWidth: i / t.$imageEl.prop("naturalWidth"),
                                            cfHeight: n / t.$imageEl.prop("naturalHeight")
                                        }, null
                                    },
                                    hide: function (t) {
                                        var o = e.popup.editor.cropper;
                                        t && (o.$template.hide(), o.$editor.hide()), o.$imageEl.attr("draggable", ""), o.$template.off("mousedown touchstart", o.mousedown), $(window).off("resize", o.resize)
                                    },
                                    resize: function (t) {
                                        var o = e.popup.editor.cropper, i = o.$imageEl;
                                        i.width() > 0 && (t ? (o.$template.hide(), clearTimeout(o._resizeTimeout), o._resizeTimeout = setTimeout(function () {
                                            delete o._resizeTimeout;
                                            var e = i.width() / i.prop("naturalWidth"),
                                                t = i.height() / i.prop("naturalHeight");
                                            o.crop.left = o.crop.left / o.crop.cfWidth * e, o.crop.width = o.crop.width / o.crop.cfWidth * e, o.crop.top = o.crop.top / o.crop.cfHeight * t, o.crop.height = o.crop.height / o.crop.cfHeight * t, o.crop.cfWidth = e, o.crop.cfHeight = t, o.init("resize")
                                        }, 400)) : (o.crop.cfWidth = i.width() / i.prop("naturalWidth"), o.crop.cfHeight = i.height() / i.prop("naturalHeight")))
                                    },
                                    drawPlaceHolder: function (t) {
                                        var o = e.popup.editor.cropper, i = e.popup.editor.rotation || 0,
                                            n = e.popup.editor.scale || 1, r = [0, 0];
                                        t && (t = $.extend({}, t), i && (r = [180 == i || 270 == i ? -100 : 0, 90 == i || 180 == i ? -100 : 0]), o.$editor.css(t), o.$editor.find(".area-image img").removeAttr("style").css({
                                            width: o.$imageEl.width(),
                                            height: o.$imageEl.height(),
                                            left: -1 * o.$editor.position().left,
                                            top: -1 * o.$editor.position().top,
                                            "-webkit-transform": "rotate(" + i + "deg) scale(" + n + ") translateX(" + r[0] + "%) translateY(" + r[1] + "%)",
                                            "-moz-transform": "rotate(" + i + "deg) scale(" + n + ") translateX(" + r[0] + "%) translateY(" + r[1] + "%)",
                                            transform: "rotate(" + i + "deg) scale(" + n + ") translateX(" + r[0] + "%) translateY(" + r[1] + "%)"
                                        }))
                                    },
                                    mousedown: function (t) {
                                        var o = t.originalEvent.touches && t.originalEvent.touches[0] ? "touchstart" : "mousedown",
                                            i = $(t.target), n = e.popup.editor.cropper, r = {
                                                x: ("mousedown" == o ? t.pageX : t.originalEvent.touches[0].pageX) - n.$template.offset().left,
                                                y: ("mousedown" == o ? t.pageY : t.originalEvent.touches[0].pageY) - n.$template.offset().top
                                            }, a = function () {
                                                n.pointData = {
                                                    el: i,
                                                    x: r.x,
                                                    y: r.y,
                                                    xEditor: r.x - n.crop.left,
                                                    yEditor: r.y - n.crop.top,
                                                    left: n.crop.left,
                                                    top: n.crop.top,
                                                    width: n.crop.width,
                                                    height: n.crop.height
                                                }, i.is(".area-move") && (n.isMoving = !0), i.is(".point") && (n.isResizing = !0), (n.isMoving || n.isResizing) && (n.$editor.addClass("moving"), $("body").css({
                                                    "-webkit-user-select": "none",
                                                    "-moz-user-select": "none",
                                                    "-ms-user-select": "none",
                                                    "user-select": "none"
                                                }), $(window).on("mousemove touchmove", n.mousemove))
                                            };
                                        "mousedown" == o && a(), "touchstart" == o && (n.isTouchLongPress = !0, setTimeout(function () {
                                            n.isTouchLongPress && (delete n.isTouchLongPress, a())
                                        }, 500)), $(window).on("mouseup touchend", n.mouseup)
                                    },
                                    mousemove: function (t) {
                                        var o = t.originalEvent.touches && t.originalEvent.touches[0] ? "touchstart" : "mousedown",
                                            i = ($(t.target), e.popup.editor.cropper), r = {
                                                x: ("mousedown" == o ? t.pageX : t.originalEvent.touches[0].pageX) - i.$template.offset().left,
                                                y: ("mousedown" == o ? t.pageY : t.originalEvent.touches[0].pageY) - i.$template.offset().top
                                            };
                                        if (i.isMoving) {
                                            var a = r.x - i.pointData.xEditor, l = r.y - i.pointData.yEditor;
                                            a + i.crop.width > i.$template.width() && (a = i.$template.width() - i.crop.width), a < 0 && (a = 0), l + i.crop.height > i.$template.height() && (l = i.$template.height() - i.crop.height), l < 0 && (l = 0), i.crop.left = a, i.crop.top = l
                                        }
                                        if (i.isResizing) {
                                            var p, s = i.pointData.el.attr("class").substr("point point-".length),
                                                d = i.crop.left + i.crop.width, u = i.crop.top + i.crop.height,
                                                c = (n.editor.cropper && n.editor.cropper.minWidth || 0) * i.crop.cfWidth,
                                                h = (n.editor.cropper && n.editor.cropper.minWidth || 0) * i.crop.cfHeight,
                                                m = n.editor.cropper ? n.editor.cropper.ratio : null;
                                            if (c > i.$template.width() && (c = i.$template.width()), h > i.$template.height() && (h = i.$template.height()), ("a" == s || "b" == s || "c" == s) && !p && (i.crop.top = r.y, i.crop.top < 0 && (i.crop.top = 0), i.crop.height = u - i.crop.top, i.crop.top > i.crop.top + i.crop.height && (i.crop.top = u, i.crop.height = 0), i.crop.height < h && (i.crop.top = u - h, i.crop.height = h), (p = m ? f._assets.ratioToPx(i.crop.width, i.crop.height, m) : null) && (i.crop.width = p[0], "a" != s && "b" != s || (i.crop.left = Math.max(0, i.pointData.left + (i.pointData.width - i.crop.width) / ("b" == s ? 2 : 1))), i.crop.left + i.crop.width > i.$template.width()))) {
                                                var g = i.$template.width() - i.crop.left;
                                                i.crop.width = g, i.crop.height = g / p[2] * p[3], i.crop.top = u - i.crop.height
                                            }
                                            if (("e" == s || "f" == s || "g" == s) && !p && (i.crop.height = r.y - i.crop.top, i.crop.height + i.crop.top > i.$template.height() && (i.crop.height = i.$template.height() - i.crop.top), i.crop.height < h && (i.crop.height = h), (p = m ? f._assets.ratioToPx(i.crop.width, i.crop.height, m) : null) && (i.crop.width = p[0], "f" != s && "g" != s || (i.crop.left = Math.max(0, i.pointData.left + (i.pointData.width - i.crop.width) / ("f" == s ? 2 : 1))), i.crop.left + i.crop.width > i.$template.width()))) {
                                                g = i.$template.width() - i.crop.left;
                                                i.crop.width = g, i.crop.height = g / p[2] * p[3]
                                            }
                                            if (("c" == s || "d" == s || "e" == s) && !p && (i.crop.width = r.x - i.crop.left, i.crop.width + i.crop.left > i.$template.width() && (i.crop.width = i.$template.width() - i.crop.left), i.crop.width < c && (i.crop.width = c), (p = m ? f._assets.ratioToPx(i.crop.width, i.crop.height, m) : null) && (i.crop.height = p[1], "c" != s && "d" != s || (i.crop.top = Math.max(0, i.pointData.top + (i.pointData.height - i.crop.height) / ("d" == s ? 2 : 1))), i.crop.top + i.crop.height > i.$template.height()))) {
                                                var v = i.$template.height() - i.crop.top;
                                                i.crop.height = v, i.crop.width = v / p[3] * p[2]
                                            }
                                            if (("a" == s || "g" == s || "h" == s) && !p && (i.crop.left = r.x, i.crop.left > i.$template.width() && (i.crop.left = i.$template.width()), i.crop.left < 0 && (i.crop.left = 0), i.crop.width = d - i.crop.left, i.crop.left > i.crop.left + i.crop.width && (i.crop.left = d, i.crop.width = 0), i.crop.width < c && (i.crop.left = d - c, i.crop.width = c), (p = m ? f._assets.ratioToPx(i.crop.width, i.crop.height, m) : null) && (i.crop.height = p[1], "a" != s && "h" != s || (i.crop.top = Math.max(0, i.pointData.top + (i.pointData.height - i.crop.height) / ("h" == s ? 2 : 1))), i.crop.top + i.crop.height > i.$template.height()))) {
                                                v = i.$template.height() - i.crop.top;
                                                i.crop.height = v, i.crop.width = v / p[3] * p[2], i.crop.left = d - i.crop.width
                                            }
                                        }
                                        i.drawPlaceHolder(i.crop)
                                    },
                                    mouseup: function (t) {
                                        var o = e.popup.editor.cropper;
                                        0 != o.$editor.width() && 0 != o.$editor.height() || o.init(o.setDefaultData()), delete o.isTouchLongPress, delete o.isMoving, delete o.isResizing, o.$editor.removeClass("moving"), $("body").css({
                                            "-webkit-user-select": "",
                                            "-moz-user-select": "",
                                            "-ms-user-select": "",
                                            "user-select": ""
                                        }), $(window).off("mousemove touchmove", o.mousemove), $(window).off("mouseup touchend", o.mouseup)
                                    }
                                }, e.popup.editor.cropper.init()
                            }
                        }, save: function (e, t, i) {
                            if (e.popup && void 0 !== e.popup.html) {
                                if (!e.popup.editor.hasChanges) return;
                                var r = e.popup.editor.scale || 1;
                                e.editor.rotation = e.popup.editor.rotation || 0, e.popup.editor.cropper && (e.editor.crop = e.popup.editor.cropper.crop, e.editor.crop.width = e.editor.crop.width / e.popup.editor.cropper.crop.cfWidth / r, e.editor.crop.left = e.editor.crop.left / e.popup.editor.cropper.crop.cfWidth / r, e.editor.crop.height = e.editor.crop.height / e.popup.editor.cropper.crop.cfHeight / r, e.editor.crop.top = e.editor.crop.top / e.popup.editor.cropper.crop.cfHeight / r)
                            } else e.editor.rotation = e.editor.rotation || 0;
                            var a = document.createElement("canvas"), d = a.getContext("2d"), u = e.reader.node,
                                c = [0, 180];
                            a.width = c.indexOf(e.editor.rotation) > -1 ? u.naturalWidth : u.naturalHeight, a.height = c.indexOf(e.editor.rotation) > -1 ? u.naturalHeight : u.naturalWidth;
                            var h = e.editor.rotation * Math.PI / 180, m = .5 * a.width, g = .5 * a.height;
                            if (d.translate(m, g), d.rotate(h), d.translate(.5 * -u.naturalWidth, .5 * -u.naturalHeight), d.drawImage(u, 0, 0), d.setTransform(1, 0, 0, 1, 0, 0), e.editor.crop) {
                                var v = d.getImageData(e.editor.crop.left, e.editor.crop.top, e.editor.crop.width * (a.width / u[c.indexOf(e.editor.rotation) > -1 ? "naturalWidth" : "naturalHeight"]), e.editor.crop.height * (a.height / u[c.indexOf(e.editor.rotation) > -1 ? "naturalHeight" : "naturalWidth"]));
                                a.width = e.editor.crop.width, a.height = e.editor.crop.height, d.putImageData(v, 0, 0)
                            }
                            var b = e.type || "image/jpeg", w = n.editor.quality || 99, $ = a.toDataURL(b, w / 100),
                                x = function (r, a) {
                                    var d = t ? new Blob([window.atob(r.split(",")[1])], {
                                        type: b,
                                        encoding: "utf-8"
                                    }) : r;
                                    f.thumbnails.renderThumbnail(e, !0, a || r), i && i(d, e, l, p, o, s), null != n.editor.onSave && "function" == typeof n.editor.onSave && n.editor.onSave(d, e, l, p, o, s), f.set("listInput", null)
                                };
                            if (n.editor.maxWidth && t) {
                                var _ = new Image, y = document.createElement("canvas"), F = y.getContext("2d"),
                                    D = a.width, I = a.height, k = (n.editor.maxWidth, I / n.editor.maxHeight),
                                    T = D / n.editor.maxWidth, E = k > T ? k : T, L = I / E, S = D / E;
                                _.src = $, _.onload = function () {
                                    y.width = S, y.height = L, F.drawImage(_, 0, 0, S, L), $ = y.toDataURL(b, w / 100), y = F = null, x($, _)
                                }, a.width = S, a.height = L
                            } else x($);
                            a = d = null
                        }
                    }, upload: {
                        prepare: function (e, t) {
                            e.upload = {
                                url: n.upload.url,
                                data: n.upload.data || {},
                                formData: new FormData,
                                type: n.upload.type || "POST",
                                enctype: n.upload.enctype || "multipart/form-data",
                                cache: !1,
                                contentType: !1,
                                processData: !1,
                                status: null,
                                send: function () {
                                    f.upload.send(e, !0)
                                },
                                cancel: function () {
                                    f.upload.cancel(e)
                                },
                                retry: function () {
                                    f.upload.retry(e)
                                }
                            }, e.upload.formData.append(s.attr("name"), e.file, !!e.name && e.name), (n.upload.start || t) && f.upload.send(e, t)
                        }, send: function (e, t) {
                            if (e.upload) {
                                var i = function (t) {
                                    e.html.removeClass("upload-pending upload-loading upload-cancelled upload-failed upload-success").addClass("upload-" + (t || e.upload.status))
                                }, r = function () {
                                    var t = 0;
                                    if (f._pfuL.length > 0) for (f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1); t < f._pfuL.length;) {
                                        if (f._itFl.indexOf(f._pfuL[t]) > -1 && f._pfuL[t].upload && !f._pfuL[t].upload.$ajax) {
                                            f.upload.send(f._pfuL[t], !0);
                                            break
                                        }
                                        f._pfuL.splice(t, 1), t++
                                    }
                                };
                                if (n.upload.synchron) if (e.upload.status = "pending", e.html && i(), t) f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1); else if (-1 == f._pfuL.indexOf(e) && f._pfuL.push(e), f._pfuL.length > 1) return;
                                if (n.upload.beforeSend && $.isFunction(n.upload.beforeSend) && !1 === n.upload.beforeSend(e, l, p, o, s)) return i(), void r();
                                if (p.addClass("fileuploader-is-uploading"), e.upload.$ajax && e.upload.$ajax.abort(), delete e.upload.$ajax, delete e.upload.send, e.upload.status = "loading", e.html && (n.thumbnails._selectors.start && e.html.find(n.thumbnails._selectors.start).remove(), i()), e.upload.data) for (var a in e.upload.data) e.upload.formData.append(a, e.upload.data[a]);
                                e.upload.data = e.upload.formData, e.upload.xhr = function () {
                                    var t = $.ajaxSettings.xhr(), o = new Date;
                                    return t.upload && t.upload.addEventListener("progress", function (t) {
                                        e.upload.$ajax && (e.upload.$ajax.total = t.total, e.upload.$ajax.xhrStartedAt = o), f.upload.progressHandling(t, e, o)
                                    }, !1), t
                                }, e.upload.complete = function (e, t) {
                                    r();
                                    var i = !0;
                                    $.each(f._itFl, function (e, t) {
                                        t.upload && t.upload.$ajax && (i = !1)
                                    }), i && (p.removeClass("fileuploader-is-uploading"), null != n.upload.onComplete && "function" == typeof n.upload.onComplete && n.upload.onComplete(l, p, o, s, e, t))
                                }, e.upload.success = function (t, r, a) {
                                    f.upload.progressHandling(null, e, e.upload.$ajax.xhrStartedAt, !0), e.uploaded = !0, delete e.upload, e.upload = {
                                        status: "successful",
                                        resend: function () {
                                            f.upload.retry(e)
                                        }
                                    }, e.html && i(), null != n.upload.onSuccess && $.isFunction(n.upload.onSuccess) && n.upload.onSuccess(t, e, l, p, o, s, r, a), f.set("listInput", null)
                                }, e.upload.error = function (t, r, a) {
                                    e.uploaded = !1, e.upload.status = "cancelled" == e.upload.status ? e.upload.status : "failed", delete e.upload.$ajax, e.html && i(), null != n.upload.onError && $.isFunction(n.upload.onError) && n.upload.onError(e, l, p, o, s, t, r, a)
                                }, e.upload.$ajax = $.ajax(e.upload)
                            }
                        }, cancel: function (e) {
                            e && e.upload && (e.upload.status = "cancelled", e.upload.$ajax && e.upload.$ajax.abort(), delete e.upload.$ajax, f.files.remove(e))
                        }, retry: function (e) {
                            e && e.upload && (e.html && n.thumbnails._selectors.retry && e.html.find(n.thumbnails._selectors.retry).remove(), f.upload.prepare(e, !0))
                        }, progressHandling: function (e, t, i, r) {
                            if (!e && r && t.upload.$ajax && (e = {
                                total: t.upload.$ajax.total,
                                loaded: t.upload.$ajax.total,
                                lengthComputable: !0
                            }), e.lengthComputable) {
                                var a = e.loaded, d = e.total, u = Math.round(100 * a / d),
                                    c = ((new Date).getTime() - i.getTime()) / 1e3, h = c ? a / c : 0, m = d - a,
                                    g = c ? m / h : null, v = {
                                        loaded: a,
                                        loadedInFormat: f._assets.bytesToText(a),
                                        total: d,
                                        totalInFormat: f._assets.bytesToText(d),
                                        percentage: u,
                                        secondsElapsed: c,
                                        secondsElapsedInFormat: f._assets.secondsToText(c, !0),
                                        bytesPerSecond: h,
                                        bytesPerSecondInFormat: f._assets.bytesToText(h) + "/s",
                                        remainingBytes: m,
                                        remainingBytesInFormat: f._assets.bytesToText(m),
                                        secondsRemaining: g,
                                        secondsRemainingInFormat: f._assets.secondsToText(g, !0)
                                    };
                                v.percentage > 99 && !r && (v.percentage = 99), n.upload.onProgress && $.isFunction(n.upload.onProgress) && n.upload.onProgress(v, t, l, p, o, s)
                            }
                        }
                    }, dragDrop: {
                        onDragEnter: function (e) {
                            clearTimeout(f.dragDrop._timer), n.dragDrop.container.addClass("fileuploader-dragging"), f.set("feedback", f._assets.textParse(n.captions.drop)), null != n.dragDrop.onDragEnter && $.isFunction(n.dragDrop.onDragEnter) && n.dragDrop.onDragEnter(e, l, p, o, s)
                        }, onDragLeave: function (e) {
                            clearTimeout(f.dragDrop._timer), f.dragDrop._timer = setTimeout(function (e) {
                                if (!f.dragDrop._dragLeaveCheck(e)) return !1;
                                n.dragDrop.container.removeClass("fileuploader-dragging"), f.set("feedback", null), null != n.dragDrop.onDragLeave && $.isFunction(n.dragDrop.onDragLeave) && n.dragDrop.onDragLeave(e, l, p, o, s)
                            }, 100, e)
                        }, onDrop: function (e) {
                            clearTimeout(f.dragDrop._timer), n.dragDrop.container.removeClass("fileuploader-dragging"), f.set("feedback", null), e && e.originalEvent && e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length && (f.isUploadMode() ? f.onChange(e, e.originalEvent.dataTransfer.files) : s.prop("files", e.originalEvent.dataTransfer.files)), null != n.dragDrop.onDrop && $.isFunction(n.dragDrop.onDrop) && n.dragDrop.onDrop(e, l, p, o, s)
                        }, _dragLeaveCheck: function (e) {
                            var t = $(e.currentTarget);
                            return !(!t.is(n.dragDrop.container) && n.dragDrop.container.find(t).length)
                        }
                    }, clipboard: {
                        paste: function (e) {
                            if (f._assets.isIntoView(o) && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items && e.originalEvent.clipboardData.items.length) {
                                var t = e.originalEvent.clipboardData.items;
                                f.clipboard.clean();
                                for (var i = 0; i < t.length; i++) if (-1 !== t[i].type.indexOf("image") || -1 !== t[i].type.indexOf("text/uri-list")) {
                                    var r = t[i].getAsFile(), a = new Date, l = function (e) {
                                        return e < 10 && (e = "0" + e), e
                                    }, p = n.clipboardPaste > 1 ? n.clipboardPaste : 2e3;
                                    r && (r._name = "Clipboard " + a.getFullYear() + "-" + l(a.getMonth() + 1) + "-" + l(a.getDate()) + " " + l(a.getHours()) + "-" + l(a.getMinutes()) + "-" + l(a.getSeconds()), r._name += -1 != r.type.indexOf("/") ? "." + r.type.split("/")[1].toString().toLowerCase() : ".png", f.set("feedback", f._assets.textParse(n.captions.paste, {ms: p / 1e3})), f.clipboard._timer = setTimeout(function () {
                                        f.set("feedback", null), f.onChange(e, [r])
                                    }, p - 2))
                                }
                            }
                        }, clean: function () {
                            f.clipboard._timer && (clearTimeout(f.clipboard._timer), delete f.clipboard._timer, f.set("feedback", null))
                        }
                    }, files: {
                        add: function (e, t) {
                            var o, i, r = e._name || e.name, a = e.size, l = f._assets.bytesToText(a), p = e.type,
                                d = p ? p.split("/", 1).toString().toLowerCase() : "",
                                u = -1 != r.indexOf(".") ? r.split(".").pop().toLowerCase() : "",
                                c = r.substr(0, r.length - (-1 != r.indexOf(".") ? u.length + 1 : u.length)),
                                h = e.data || {}, m = (e = e.file || e, Date.now());
                            return f._itFl.push({
                                name: r,
                                title: c,
                                size: a,
                                size2: l,
                                type: p,
                                format: d,
                                extension: u,
                                data: h,
                                file: e,
                                reader: {
                                    read: function (e, t, o) {
                                        return f.files.read(i, e, t, o)
                                    }
                                },
                                id: m,
                                input: "choosed" == t ? s : null,
                                html: null,
                                choosed: "choosed" == t,
                                appended: "appended" == t,
                                uploaded: "uploaded" == t
                            }), o = f._itFl.length - 1, (i = f._itFl[o]).remove = function () {
                                f.files.remove(i)
                            }, n.editor && "image" == d && (i.editor = {
                                rotate: function (e) {
                                    f.editor.rotate(i, e)
                                }, cropper: function (e) {
                                    f.editor.crop(i, e)
                                }, save: function (e, t) {
                                    f.editor.save(i, t, e)
                                }
                            }), o
                        }, read: function (e, t, i, r) {
                            if (f.isFileReaderSupported()) {
                                var a = new FileReader, d = e.choosed, u = function () {
                                    var t = e.reader._callbacks;
                                    delete e.reader._callbacks, delete e.reader._FileReader;
                                    for (var i = 0; i < t.length; i++) $.isFunction(t[i]) && t[i](e, l, p, o, s);
                                    n.onFileRead && $.isFunction(n.onFileRead) && n.onFileRead(e, l, p, o, s)
                                };
                                if ((!e.reader.src && !e.reader._FileReader || r) && (e.reader = {
                                    _FileReader: a,
                                    _callbacks: [],
                                    read: e.reader.read
                                }), e.reader.src && !r) return t && $.isFunction(t) ? t(e, l, p, o, s) : null;
                                if (t && e.reader._callbacks && (e.reader._callbacks.push(t), e.reader._callbacks.length > 1)) return;
                                if ("astext" == e.format) a.onload = function (t) {
                                    var o = document.createElement("div");
                                    e.reader.node = o, e.reader.src = t.target.result, e.reader.length = t.target.result.length, o.innerHTML = e.reader.src.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), u()
                                }, a.onerror = function () {
                                    u(), e.reader = {read: e.reader.read}
                                }, d ? a.readAsText(e.file) : $.ajax({
                                    url: e.file, success: function (e) {
                                        a.onload({target: {result: e}})
                                    }, error: function () {
                                        a.onerror()
                                    }
                                }); else if ("image" == e.format) a.onload = function (t) {
                                    var o = new Image;
                                    e.data && e.data.readerCrossOrigin && o.setAttribute("crossOrigin", e.data.readerCrossOrigin), o.src = t.target.result + (r && !d ? (-1 == t.target.result.indexOf("?") ? "?" : "&") + "d=" + Date.now() : ""), o.onload = function () {
                                        e.reader.node = o, e.reader.src = o.src, e.reader.width = o.width, e.reader.height = o.height, e.reader.ratio = f._assets.pxToRatio(e.reader.width, e.reader.height), u()
                                    }, o.onerror = function () {
                                        u(), e.reader = {read: e.reader.read}
                                    }
                                }, a.onerror = function () {
                                    u(), e.reader = {read: e.reader.read}
                                }, d ? a.readAsDataURL(e.file) : a.onload({target: {result: e.file}}); else if ("video" == e.format || "audio" == e.format) {
                                    var c, h = document.createElement(e.format), m = h.canPlayType(e.type);
                                    URL && "" !== m ? (c = d ? URL.createObjectURL(e.file) : e.file, h.onloadedmetadata = function () {
                                        e.reader.node = h, e.reader.src = h.src, e.reader.duration = h.duration, e.reader.duration2 = f._assets.secondsToText(h.duration), "video" == e.format && (e.reader.width = h.videoWidth, e.reader.height = h.videoHeight, e.reader.ratio = f._assets.pxToRatio(e.reader.width, e.reader.height))
                                    }, h.onerror = function () {
                                        u(), e.reader = {read: e.reader.read}
                                    }, h.onloadeddata = function () {
                                        if ("video" == e.format) {
                                            var t = document.createElement("canvas"), o = t.getContext("2d");
                                            t.width = h.videoWidth, t.height = h.videoHeight, o.drawImage(h, 0, 0, t.width, t.height), e.reader.frame = f._assets.isBlankCanvas(t) ? null : t.toDataURL(), t = o = null
                                        }
                                        u()
                                    }, setTimeout(function () {
                                        h.src = c
                                    }, 100)) : (u(), e.reader = {read: e.reader.read})
                                } else a.onload = function (t) {
                                    e.reader.src = t.target.result, e.reader.length = t.target.result.length, u()
                                }, a.onerror = function (t) {
                                    u(), e.reader = {read: e.reader.read}
                                }, d ? a[i || "readAsBinaryString"](e.file) : u()
                            } else t && t(e, l, p, o, s);
                            return null
                        }, list: function (e, t, i) {
                            var r = [];
                            return $.each(f._itFl, function (o, i) {
                                if (i.upload && !i.uploaded) return !0;
                                var n = i;
                                if ((t || e) && (n = (n.choosed ? "0:/" : "") + (t && null !== f.files.getItemAttr(i, t) ? f.files.getItemAttr(i, t) : i["string" == typeof i.file ? "file" : "name"])), e && (n = {file: n}, i.editor && (i.editor.crop || i.editor.rotation) && (n.editor = {}, i.editor.rotation && (n.editor.rotation = i.editor.rotation), i.editor.crop && (n.editor.crop = i.editor.crop)), i.data && i.data.listProps)) for (var a in i.data.listProps) n[a] = i.data.listProps[a];
                                r.push(n)
                            }), r = n.onListInput && $.isFunction(n.onListInput) ? n.onListInput(r, f._itFl, n.listInput, l, p, o, s) : r, e ? JSON.stringify(r) : r
                        }, check: function (e, t, i) {
                            var r = ["warning", null, !1, !1];
                            if (null != n.limit && i && t.length + f._itFl.length - 1 > n.limit) return r[1] = f._assets.textParse(n.captions.errors.filesLimit), r[3] = !0, r;
                            if (null != n.maxSize && i) {
                                var a = 0;
                                if ($.each(f._itFl, function (e, t) {
                                    a += t.size
                                }), a -= e.size, $.each(t, function (e, t) {
                                    a += t.size
                                }), a > Math.round(1e6 * n.maxSize)) return r[1] = f._assets.textParse(n.captions.errors.filesSizeAll), r[3] = !0, r
                            }
                            if (null != n.onFilesCheck && $.isFunction(n.onFilesCheck) && i && !1 === n.onFilesCheck(t, n, l, p, o, s)) return r[3] = !0, r;
                            if (null != n.extensions && -1 == $.inArray(e.extension, n.extensions) && -1 == $.inArray(e.type, n.extensions)) return r[1] = f._assets.textParse(n.captions.errors.filesType, e), r;
                            if (null != n.fileMaxSize && e.size > 1e6 * n.fileMaxSize) return r[1] = f._assets.textParse(n.captions.errors.fileSize, e), r;
                            if (4096 == e.size && "" == e.type) return r[1] = f._assets.textParse(n.captions.errors.folderUpload, e), r;
                            if (!n.skipFileNameCheck) {
                                a = !1;
                                if ($.each(f._itFl, function (o, i) {
                                    if (i != e && 1 == i.choosed && i.file && i.name == e.name) return a = !0, i.file.size != e.size || i.file.type != e.type || e.file.lastModified && i.file.lastModified && i.file.lastModified != e.file.lastModified || !(t.length > 1) ? (r[1] = f._assets.textParse(n.captions.errors.fileName, e), r[2] = !1) : r[2] = !0, !1
                                }), a) return r
                            }
                            return !0
                        }, append: function (e) {
                            if ((e = $.isArray(e) ? e : [e]).length) {
                                for (var t, i = 0; i < e.length; i++) t = f._itFl[f.files.add(e[i], "appended")], n.thumbnails && f.thumbnails.item(t);
                                return f.set("feedback", null), f.set("listInput", null), n.afterSelect && $.isFunction(n.afterSelect) && n.afterSelect(l, p, o, s), 1 != e.length || t
                            }
                        }, find: function (e) {
                            var t = null;
                            return $.each(f._itFl, function (o, i) {
                                if (i.html && i.html.is(e)) return t = i, !1
                            }), t
                        }, remove: function (e, t) {
                            if (t || !n.onRemove || !$.isFunction(n.onRemove) || !1 !== n.onRemove(e, l, p, o, s)) {
                                if (e.html && (n.thumbnails.onItemRemove && $.isFunction(n.thumbnails.onItemRemove) && !t ? n.thumbnails.onItemRemove(e.html, l, p, o, s) : e.html.remove()), e.upload && e.upload.$ajax && e.upload.cancel && e.upload.cancel(), e.popup && e.popup.html && e.popup.html.remove(), e.reader.src && (e.reader.node = null, URL.revokeObjectURL(e.reader.src)), e.input) {
                                    var i = !0;
                                    $.each(f._itFl, function (o, n) {
                                        if (e != n && (e.input == n.input || t && e.input.get(0).files.length > 1)) return i = !1, !1
                                    }), i && (f.isAddMoreMode() && sl.length > 1 ? (f.set("nextInput"), sl.splice(sl.indexOf(e.input), 1), e.input.remove()) : f.set("input", ""))
                                }
                                f._pfrL.indexOf(e) > -1 && f._pfrL.splice(f._pfrL.indexOf(e), 1), f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1), f._itFl.indexOf(e) > -1 && f._itFl.splice(f._itFl.indexOf(e), 1), e = null, 0 == f._itFl.length && f.reset(), f.set("feedback", null), f.set("listInput", null)
                            }
                        }, getItemAttr: function (e, t) {
                            var o = null;
                            return e && (void 0 !== e[t] ? o = e[t] : e.data && void 0 !== e.data[t] && (o = e.data[t])), o
                        }, clear: function (e) {
                            for (var t = 0; t < f._itFl.length;) {
                                var i = f._itFl[t];
                                e || !i.appended ? (i.html && i.html && f._itFl[t].html.remove(), i.upload && i.upload.$ajax && f.upload.cancel(i), f._itFl.splice(t, 1)) : t++
                            }
                            f.set("feedback", null), f.set("listInput", null), 0 == f._itFl.length && n.onEmpty && $.isFunction(n.onEmpty) && n.onEmpty(l, p, o, s)
                        }
                    }, reset: function (e) {
                        e && (f.clipboard._timer && f.clipboard.clean(), $.each(sl, function (e, t) {
                            e < sl.length && t.remove()
                        }), sl = [], f.set("input", "")), f._itRl = [], f._pfuL = [], f._pfrL = [], f.files.clear(e)
                    }, destroy: function () {
                        f.reset(!0), f.bindUnbindEvents(!1), s.removeAttr("style"), s.insertBefore(".fileuploader"), s.prop("FileUploader", null), p.remove(), p = o = l = null
                    }, _assets: {
                        bytesToText: function (e) {
                            if (0 == e) return "0 Byte";
                            var t = Math.floor(Math.log(e) / Math.log(1e3));
                            return (e / Math.pow(1e3, t)).toPrecision(3) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t]
                        }, secondsToText: function (e, t) {
                            e = parseInt(Math.round(e), 10);
                            var o = Math.floor(e / 3600), i = Math.floor((e - 3600 * o) / 60), n = "";
                            return (o > 0 || !t) && (n += (o < 10 ? "0" : "") + o + (t ? "h " : ":")), (i > 0 || !t) && (n += (i < 10 && !t ? "0" : "") + i + (t ? "m " : ":")), n += ((e = e - 3600 * o - 60 * i) < 10 && !t ? "0" : "") + e + (t ? "s" : "")
                        }, pxToRatio: function (e, t) {
                            var o = function (e, t) {
                                return 0 == t ? e : o(t, e % t)
                            }, i = o(e, t);
                            return [e / i, t / i]
                        }, ratioToPx: function (e, t, o) {
                            return (o = (o + "").split(":")).length < 2 ? null : [t / o[1] * o[0], e / o[0] * o[1], o[0], o[1]]
                        }, hasAttr: function (e, t) {
                            var o = (t = t || s).attr(e);
                            return !(!o || void 0 === o)
                        }, copyAllAttributes: function (e, t) {
                            return $.each(t.get(0).attributes, function () {
                                "required" != this.name && "type" != this.name && e.attr(this.name, this.value)
                            }), t.get(0).FileUploader && (e.get(0).FileUploader = t.get(0).FileUploader), e
                        }, getAllEvents: function (e) {
                            e = e || s;
                            var t = [];
                            for (var o in e = e.get ? e.get(0) : e) 0 === o.indexOf("on") && t.push(o.slice(2));
                            return -1 == t.indexOf("change") && t.push("change"), t.join(" ")
                        }, isIntoView: function (e) {
                            var t = $(window).scrollTop(), o = t + window.innerHeight, i = e.offset().top,
                                n = i + e.outerHeight();
                            return t < i && o > n
                        }, isBlankCanvas: function (e) {
                            var t, o = document.createElement("canvas");
                            return o.width = e.width, o.height = e.height, t = e.toDataURL() == o.toDataURL(), o = null, t
                        }, textParse: function (text, opts, noOptions) {
                            switch (opts = noOptions ? opts || {} : $.extend({}, {
                                limit: n.limit,
                                maxSize: n.maxSize,
                                fileMaxSize: n.fileMaxSize,
                                extensions: n.extensions ? n.extensions.join(", ") : null,
                                captions: n.captions
                            }, opts), typeof text) {
                                case"string":
                                    text = text.replace(/\$\{(.*?)\}/g, function (match, a) {
                                        var a = a.replace(/ /g, ""),
                                            r = void 0 !== opts[a] && null != opts[a] ? opts[a] : "";
                                        if (a.indexOf(".") > -1 || a.indexOf("[]") > -1) {
                                            var x = a.substr(0, a.indexOf(".") > -1 ? a.indexOf(".") : a.indexOf("[") > -1 ? a.indexOf("[") : a.length),
                                                y = a.substring(x.length);
                                            if (opts[x]) try {
                                                r = eval('opts["' + x + '"]' + y)
                                            } catch (e) {
                                                r = ""
                                            }
                                        }
                                        return r = $.isFunction(r) ? f._assets.textParse(r) : r, r || ""
                                    });
                                    break;
                                case"function":
                                    text = f._assets.textParse(text(opts, l, p, o, s, f._assets.textParse), opts, noOptions)
                            }
                            return opts = null, text
                        }, textToColor: function (e) {
                            if (!e || 0 == e.length) return !1;
                            for (var t = 0, o = 0; t < e.length; o = e.charCodeAt(t++) + ((o << 5) - o)) ;
                            t = 0;
                            for (var i = "#"; t < 3; i += ("00" + (o >> 2 * t++ & 255).toString(16)).slice(-2)) ;
                            return i
                        }, isBrightColor: function (e) {
                            return function (e) {
                                var t, o,
                                    i = (t = e) && t.constructor == Array && 3 == t.length ? t : (o = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(o[1]), parseInt(o[2]), parseInt(o[3])] : (o = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [2.55 * parseFloat(o[1]), 2.55 * parseFloat(o[2]), 2.55 * parseFloat(o[3])] : (o = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16)] : (o = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(o[1] + o[1], 16), parseInt(o[2] + o[2], 16), parseInt(o[3] + o[3], 16)] : "undefined" != typeof colors ? colors[$.trim(t).toLowerCase()] : null;
                                return i ? .2126 * i[0] + .7152 * i[1] + .0722 * i[2] : null
                            }(e) > 194
                        }
                    }, isSupported: function () {
                        return s && s.get(0).files
                    }, isFileReaderSupported: function () {
                        return window.File && window.FileList && window.FileReader
                    }, isDefaultMode: function () {
                        return !n.upload && !n.addMore
                    }, isAddMoreMode: function () {
                        return !n.upload && n.addMore
                    }, isUploadMode: function () {
                        return n.upload
                    }, _itFl: [], _pfuL: [], _pfrL: [], disabled: !1, locked: !1, rendered: !1
                };
            return n.enableApi && s.prop("FileUploader", {
                open: function () {
                    s.trigger("click")
                }, getOptions: function () {
                    return n
                }, getParentEl: function () {
                    return p
                }, getInputEl: function () {
                    return s
                }, getNewInputEl: function () {
                    return o
                }, getListEl: function () {
                    return l
                }, getListInputEl: function () {
                    return n.listInput
                }, getFiles: function () {
                    return f._itFl
                }, getChoosedFiles: function () {
                    return f._itFl.filter(function (e) {
                        return e.choosed
                    })
                }, getAppendedFiles: function () {
                    return f._itFl.filter(function (e) {
                        return e.appended
                    })
                }, getUploadedFiles: function () {
                    return f._itFl.filter(function (e) {
                        return e.uploaded
                    })
                }, getFileList: function (e, t) {
                    return f.files.list(e, t, !0)
                }, updateFileList: function () {
                    return f.set("listInput", null), !0
                }, setOption: function (e, t) {
                    return n[e] = t, !0
                }, findFile: function (e) {
                    return f.files.find(e)
                }, append: function (e) {
                    return f.files.append(e)
                }, remove: function (e) {
                    return e = e.jquery ? f.files.find(e) : e, f._itFl.indexOf(e) > -1 && (f.files.remove(e), !0)
                }, uploadStart: function () {
                    var e = this.getChoosedFiles() || [];
                    if (f.isUploadMode() && e.length > 0 && !e[0].uploaded) for (var t = 0; t < e.length; t++) f.upload.send(e[t])
                }, reset: function () {
                    return f.reset(!0), !0
                }, disable: function (e) {
                    return f.set("disabled", !0), e && (f.locked = !0), !0
                }, enable: function () {
                    return f.set("disabled", !1), f.locked = !1, !0
                }, destroy: function () {
                    return f.destroy(), !0
                }, isEmpty: function () {
                    return 0 == f._itFl.length
                }, isDisabled: function () {
                    return f.disabled
                }, isRendered: function () {
                    return f.rendered
                }, assets: f._assets, getPluginMode: function () {
                    return f.isDefaultMode() ? "default" : f.isAddMoreMode() ? "addMore" : f.isUploadMode() ? "upload" : void 0
                }
            }), f.init(), this
        })
    }, window.$.fileuploader = {
        getInstance: function (e) {
            return (e.prop ? e : $(e)).prop("FileUploader")
        }
    }, $.fn.fileuploader.defaults = {
        limit: null,
        maxSize: null,
        fileMaxSize: null,
        extensions: null,
        changeInput: !0,
        inputNameBrackets: !0,
        theme: "default",
        thumbnails: {
            box: '<div class="fileuploader-items"><ul class="fileuploader-items-list"></ul></div>',
            boxAppendTo: null,
            item: '<li class="fileuploader-item"><div class="columns"><div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div><div class="column-title"><div title="${name}">${name}</div><span>${size2}</span></div><div class="column-actions"><a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a></div></div><div class="progress-bar2">${progressBar}<span></span></div></li>',
            item2: '<li class="fileuploader-item"><div class="columns"><div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div><a href="${file}" target="_blank"><div class="column-title"><div title="${name}">${name}</div><span>${size2}</span></div></a><div class="column-actions"><a href="${file}" class="fileuploader-action fileuploader-action-download" title="${captions.download}" download><i></i></a><a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a></div></div></li>',
            popup: {
                template: function (e) {
                    return '<div class="fileuploader-popup"><div class="fileuploader-popup-preview"><div class="node ${format}">${reader.node}</div><div class="tools"><ul><li><span>${captions.name}:</span><h5>${name}</h5></li><li><span>${captions.type}:</span><h5>${extension.toUpperCase()}</h5></li><li><span>${captions.size}:</span><h5>${size2}</h5></li>' + (e.reader && e.reader.width ? "<li><span>${captions.dimensions}:</span><h5>${reader.width}x${reader.height}px</h5></li>" : "") + (e.reader && e.reader.duration ? "<li><span>${captions.duration}:</span><h5>${reader.duration2}</h5></li>" : "") + '<li class="separator"></li>' + ("image" == e.format && e.reader.src && e.editor ? '<li><a data-action="crop"><i></i><span>${captions.crop}</span></a></li><li><a data-action="rotate-cw"><i></i><span>${captions.rotate}</span></a></li>' : "") + '<li><a data-action="remove"><i></i><span>${captions.remove}</span></a></li></ul><div class="buttons"><a class="fileuploader-popup-button" data-action="cancel">${captions.cancel}</a><a class="fileuploader-popup-button button-success" data-action="save">${captions.confirm}</a></div></div></div></div>'
                }, onShow: function (e) {
                    e.popup.html.on("click", '[data-action="crop"]', function (t) {
                        e.editor && e.editor.cropper()
                    }).on("click", '[data-action="rotate-cw"]', function (t) {
                        e.editor && e.editor.rotate()
                    }).on("click", '[data-action="remove"]', function (t) {
                        e.popup.close(), e.remove()
                    }).on("click", '[data-action="cancel"]', function (t) {
                        e.popup.close()
                    }).on("click", '[data-action="save"]', function (t) {
                        e.editor && e.editor.save(), e.popup.close()
                    })
                }, onHide: function (e) {
                    var t = e.popup.html;
                    t.fadeOut(200, function () {
                        t.remove()
                    })
                }
            },
            itemPrepend: !1,
            removeConfirmation: !0,
            startImageRenderer: !0,
            synchronImages: !0,
            canvasImage: !0,
            _selectors: {
                list: ".fileuploader-items-list",
                item: ".fileuploader-item",
                start: ".fileuploader-action-start",
                retry: ".fileuploader-action-retry",
                remove: ".fileuploader-action-remove",
                popup: ".fileuploader-popup",
                popup_open: ".fileuploader-action-popup"
            },
            beforeShow: null,
            onItemShow: null,
            onItemRemove: function (e) {
                e.children().animate({opacity: 0}, 200, function () {
                    setTimeout(function () {
                        e.slideUp(200, function () {
                            e.remove()
                        })
                    }, 100)
                })
            },
            onImageLoaded: null
        },
        editor: !1,
        files: null,
        upload: null,
        dragDrop: !0,
        addMore: !1,
        skipFileNameCheck: !1,
        clipboardPaste: !0,
        listInput: !0,
        enableApi: !1,
        listeners: null,
        onSupportError: null,
        beforeRender: null,
        afterRender: null,
        beforeSelect: null,
        onFilesCheck: null,
        onFileRead: null,
        onSelect: null,
        afterSelect: null,
        onListInput: null,
        onRemove: null,
        onEmpty: null,
        dialogs: {
            alert: function (e) {
                return alert(e)
            }, confirm: function (e, t) {
                confirm(e) && t()
            }
        },
        captions: {
            button: function (e) {
                return "Choose " + (1 == e.limit ? "File" : "Files")
            },
            feedback: function (e) {
                return "Choose " + (1 == e.limit ? "file" : "files") + " to upload"
            },
            feedback2: function (e) {
                return e.length + " " + (e.length > 1 ? " files were" : " file was") + " chosen"
            },
            confirm: "Xác nhận",
            cancel: "Hủy",
            name: "Name",
            type: "Type",
            size: "Size",
            dimensions: "Dimensions",
            duration: "Duration",
            crop: "Crop",
            rotate: "Rotate",
            download: "Download",
            remove: "Xóa",
            drop: "Kéo file cần upload vào đây",
            paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
            removeConfirmation: "Bạn muốn xóa file này ?",
            errors: {
                filesLimit: "Xin lỗi! Bạn chỉ được tải lên tối đa ${limit} ảnh",
                filesType: "Only ${extensions} files are allowed to be uploaded.",
                fileSize: "${name} Files dung lượng lớn vượt giới hạn cho phép ! Vui lòng chọn file có kích thước tối đa ${fileMaxSize}MB.",
                filesSizeAll: "Files dung lượng lớn vượt giới hạn cho phép ! Vui lòng chọn file có kích thước tối đa ${maxSize} MB.",
                fileName: "File đã được chọn trước đó ${name}.",
                folderUpload: "You are not allowed to upload folders."
            }
        }
    }
}(jQuery);
$('input[name="files-images"]').fileuploader({
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
    changeInput: ' ',
    fileMaxSize: 2,
    limit: 5,
    maxSize: 2,
    theme: 'thumbnails',
    enableApi: true,
    addMore: true,
    thumbnails: {
        box: '<div class="fileuploader-items">' +
            '<ul class="fileuploader-items-list">' +
            '<li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner">+</div></li>' +
            '</ul>' +
            '</div>',
        item: '<li class="fileuploader-item">' +
            '<div class="fileuploader-item-inner">' +
            '<div class="thumbnail-holder">${image}</div>' +
            '<div class="actions-holder">' +
            '<a class="fileuploader-action fileuploader-action-sort" title="${captions.sort}"><i></i></a>' +
            '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' +
            '<span class="fileuploader-action-popup"></span>' +
            '</div>' +
            '<div class="progress-holder">${progressBar}</div>' +
            '</div>' +
            '</li>',
        item2: '<li class="fileuploader-item">' +
            '<div class="fileuploader-item-inner">' +
            '<div class="thumbnail-holder">${image}</div>' +
            '<div class="actions-holder">' +
            '<a class="fileuploader-action fileuploader-action-sort" title="${captions.sort}"><i></i></a>' +
            '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' +
            '<span class="fileuploader-action-popup"></span>' +
            '</div>' +
            '</div>' +
            '</li>',
        startImageRenderer: true,
        canvasImage: false,
        _selectors: {
            list: '.fileuploader-items-list',
            item: '.fileuploader-item',
            start: '.fileuploader-action-start',
            retry: '.fileuploader-action-retry',
            remove: '.fileuploader-action-remove',
            sorter: '.fileuploader-action-sort'
        },
        onItemShow: function (item, listEl) {
            var plusInput = listEl.find('.fileuploader-thumbnails-input');

            plusInput.insertAfter(item.html);

            if (item.format == 'image') {
                item.html.find('.fileuploader-item-icon').hide();
            }
        }
    },
    afterRender: function (listEl, parentEl, newInputEl, inputEl) {
        var plusInput = listEl.find('.fileuploader-thumbnails-input'),
            api = $.fileuploader.getInstance(inputEl.get(0));

        plusInput.on('click', function () {
            api.open();
        });
    },
});


/*!
 *
 *    jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 *    Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 *    Version: v3.1.92
 *    Url: https://xdsoft.net/jodit/
 *    License(s): GPL-2.0-or-later
 *
 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Jodit = t() : e.Jodit = t()
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var i = o[n] = {i: n, l: !1, exports: {}};
            return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }

        var o = {};
        return t.m = e, t.c = o, t.d = function (e, o, n) {
            t.o(e, o) || Object.defineProperty(e, o, {configurable: !1, enumerable: !0, get: n})
        }, t.n = function (e) {
            var o = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(o, "a", o), o
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/build/", t(t.s = 21)
    }([function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(2), i = o(3), r = {}, s = r.toString, a = r.hasOwnProperty;
        t.isIE = function () {
            return -1 != navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent)
        };
        var l = 1;
        t.$$ = function (e, o) {
            var n;
            if (!/:scope/.test(e) || !t.isIE() || "undefined" != typeof HTMLDocument && o instanceof HTMLDocument) n = o.querySelectorAll(e); else {
                var i = o.id, r = i || "_selector_id_" + ("" + Math.random()).slice(2) + l++;
                e = e.replace(/:scope/g, "#" + r), !i && o.setAttribute("id", r), n = o.parentNode.querySelectorAll(e), i || o.removeAttribute("id")
            }
            return [].slice.call(n)
        }, t.isWindow = function (e) {
            return null !== e && e === e.window
        }, t.type = function (e) {
            return null === e ? "null" : "object" == typeof e || "function" == typeof e ? r[s.call(e)] || "object" : typeof e
        }, t.each = function (e, t) {
            var o, n, i;
            if (Array.isArray(e)) {
                for (o = e.length, i = 0; o > i; i += 1) if (!1 === t.call(e[i], i, e[i])) return !1
            } else for (n = Object.keys(e), i = 0; n.length > i; i += 1) if (!1 === t.call(e[n[i]], n[i], e[n[i]])) return !1;
            return e
        }, t.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol", "HTMLDocument", "Window", "HTMLElement", "HTMLBodyElement", "Text", "DocumentFragment", "DOMStringList"], function (e, t) {
            r["[object " + t + "]"] = t.toLowerCase()
        }), t.inArray = function (e, t) {
            return -1 !== t.indexOf(e)
        }, t.isPlainObject = function (e) {
            return !("object" != typeof e || e.nodeType || t.isWindow(e) || e.constructor && !a.call(e.constructor.prototype, "isPrototypeOf"))
        }, t.extend = function () {
            for (var e = [], o = 0; arguments.length > o; o++) e[o] = arguments[o];
            var n, i, r, s, a, l, c, p, f = e[0] || {}, h = 1, m = e.length, v = !1;
            for ("boolean" == typeof f && (v = f, f = e[h] || {}, h += 1), "object" != typeof f && "function" === t.type(f) && (f = {}), h === m && (f = this, h += 1), h; m > h; h += 1) if (null !== (n = e[h]) && void 0 !== n) for (p = Object.keys(n), c = 0; p.length > c; c += 1) i = p[c], r = f[i], s = n[i], f !== s && (v && s && (t.isPlainObject(s) && !(s instanceof u) || Array.isArray(s) && !(s instanceof d)) ? (a = Array.isArray(s), a ? (a = !1, l = r && Array.isArray(r) ? r : []) : l = r && t.isPlainObject(r) ? r : {}, f[i] = t.extend(v, l, s)) : void 0 !== s && (f[i] = s));
            return f
        }, t.trim = function (e) {
            return e.replace(n.SPACE_REG_EXP_START, "").replace(n.SPACE_REG_EXP_END, "")
        }, t.colorToHex = function (e) {
            if ("rgba(0, 0, 0, 0)" === e || "" === e) return !1;
            if (!e) return "#000000";
            if ("#" === e.substr(0, 1)) return e;
            var t, o, n, i, r,
                s = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e);
            if (!s) return "#000000";
            for (o = parseInt(s[2], 10), n = parseInt(s[3], 10), i = parseInt(s[4], 10), r = i | n << 8 | o << 16, t = r.toString(16).toUpperCase(); 6 > t.length;) t = "0" + t;
            return s[1] + "#" + t
        }, t.normalizeColor = function (e) {
            var o, n = ["#"], i = t.colorToHex(e);
            if (!i) return !1;
            if (i = t.trim(i.toUpperCase()), i = i.substr(1), 3 === i.length) {
                for (o = 0; 3 > o; o += 1) n.push(i[o]), n.push(i[o]);
                return n.join("")
            }
            return i.length > 6 && (i = i.substr(0, 6)), "#" + i
        }, t.normalizeSize = function (e) {
            return /^[0-9]+$/.test("" + e) ? e + "px" : "" + e
        }, t.getContentWidth = function (e, t) {
            var o = function (e) {
                return parseInt(e, 10)
            }, n = t.getComputedStyle(e);
            return e.offsetWidth - o(n.getPropertyValue("padding-left") || "0") - o(n.getPropertyValue("padding-right") || "0")
        }, t.ctrlKey = function (e) {
            if (-1 !== navigator.userAgent.indexOf("Mac OS X")) {
                if (e.metaKey && !e.altKey) return !0
            } else if (e.ctrlKey && !e.altKey) return !0;
            return !1
        };
        var c = function (e) {
            return "file:" === window.location.protocol && /^\/\//.test(e) && (e = "https:" + e), e
        };
        t.appendScript = function (e, t, o, n) {
            void 0 === o && (o = "");
            var i = n.createElement("script");
            i.className = o, i.type = "text/javascript", i.charset = "utf-8", void 0 !== t && i.addEventListener("load", t, !1), i.src = c(e), n.body.appendChild(i)
        }, t.dom = function (e, t) {
            if (e instanceof t.defaultView.HTMLElement) return e;
            var o = t.createElement("div");
            o.innerHTML = e;
            var n = o.firstChild === o.lastChild && o.firstChild ? o.firstChild : o;
            return n.parentNode && n.parentNode.removeChild(n), n
        }, t.hexToRgb = function (e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, o, n) {
                return t + t + o + o + n + n
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16)} : null
        }, t.clear = function (e, o) {
            return void 0 === o && (o = !1), e = t.trim(e).replace(n.INVISIBLE_SPACE_REG_EXP, "").replace(/[\s]*class=""/g, ""), o && (e = e.replace(/<p[^>]*>[\s\n\r\t]*(&nbsp;|<br>|<br\/>)?[\s\n\r\t]*<\/p>[\n\r]*/g, "")), e
        }, t.isURL = function (e) {
            return RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
        }, t.pathNormalize = function (e) {
            return e.replace(/([^:])[\\\/]+/g, "$1/")
        }, t.urlNormalize = function (e) {
            return e.replace(/([^:])[\\\/]+/g, "$1/")
        }, t.isHTML = function (e) {
            return /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(e)
        }, t.isHTMLFromWord = function (e) {
            return -1 !== e.search(/<meta.*?Microsoft Excel\s[\d].*?>/) || -1 !== e.search(/<meta.*?Microsoft Word\s[\d].*?>/) || -1 !== e.search(/style="[^"]*mso-/) && -1 !== e.search(/<font/)
        }, t.humanSizeToBytes = function (e) {
            if (/^[0-9.]+$/.test("" + e)) return parseFloat(e);
            var t = e.substr(-2, 2).toUpperCase(), o = ["KB", "MB", "GB", "TB"],
                n = parseFloat(e.substr(0, e.length - 2));
            return -1 !== o.indexOf(t) ? n * Math.pow(1024, o.indexOf(t) + 1) : parseInt(e, 10)
        }, t.parseQuery = function (e) {
            var t, o, n = {}, i = e.substr(1).split("&");
            for (t = 0; i.length > t; t += 1) o = i[t].split("="), n[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
            return n
        }, t.convertMediaURLToVideoEmbed = function (e, o, n) {
            if (void 0 === o && (o = 400), void 0 === n && (n = 345), !t.isURL(e)) return e;
            var i = document.createElement("a"), r = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
            switch (i.href = e, o || (o = 400), n || (n = 345), i.hostname) {
                case"www.vimeo.com":
                case"vimeo.com":
                    return r.test(e) ? e.replace(r, '<iframe width="' + o + '" height="' + n + '" src="//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : e;
                case"youtube.com":
                case"www.youtube.com":
                case"youtu.be":
                case"www.youtu.be":
                    var s = i.search ? t.parseQuery(i.search) : {v: i.pathname.substr(1)};
                    return s.v ? '<iframe width="' + o + '" height="' + n + '" src="//www.youtube.com/embed/' + s.v + '" frameborder="0" allowfullscreen></iframe>' : e
            }
            return e
        }, t.browser = function (e) {
            var t = navigator.userAgent.toLowerCase(),
                o = /(firefox)[\s\/]([\w.]+)/.exec(t) || /(chrome)[\s\/]([\w.]+)/.exec(t) || /(webkit)[\s\/]([\w.]+)/.exec(t) || /(opera)(?:.*version)[\s\/]([\w.]+)/.exec(t) || /(msie)[\s]([\w.]+)/.exec(t) || /(trident)\/([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") || [];
            return "version" === e ? o[2] : "webkit" === e ? "chrome" === o[1] || "webkit" === o[1] : "ff" === e ? "firefox" === o[1] : "msie" === e ? "trident" === o[1] || "msie" === o[1] : o[1] === e
        }, t.offset = function (e, o, n, i) {
            void 0 === i && (i = !1);
            var r, s, a = e.getBoundingClientRect(), l = n.body, c = n.documentElement,
                d = n.defaultView || n.parentWindow, u = d.pageYOffset || c.scrollTop || l.scrollTop,
                p = d.pageXOffset || c.scrollLeft || l.scrollLeft, f = c.clientTop || l.clientTop || 0,
                h = c.clientLeft || l.clientLeft || 0;
            if (!i && o && o.options && o.options.iframe && o.iframe) {
                var m = t.offset(o.iframe, o, o.ownerDocument, !0), v = m.top, g = m.left;
                r = a.top + v, s = a.left + g
            } else r = a.top + u - f, s = a.left + p - h;
            return {top: Math.round(r), left: Math.round(s), width: a.width, height: a.height}
        }, t.camelCase = function (e) {
            return e.replace(/([-_])(.)/g, function (e, t, o) {
                return o.toUpperCase()
            })
        }, t.fromCamelCase = function (e) {
            return e.replace(/([A-Z]+)/g, function (e, t) {
                return "-" + t.toLowerCase()
            })
        }, t.htmlspecialchars = function (e) {
            var t = document.createElement("div");
            return t.innerText = e, t.innerHTML
        }, t.debounce = function (e, t, o, n) {
            3 === arguments.length && "boolean" != typeof o && (n = o, o = !1);
            var i = 0;
            return function () {
                var r = arguments;
                n = n || this, (o && !i || !t) && e.apply(n, r), t && (clearTimeout(i), i = window.setTimeout(function () {
                    o || e.apply(n, r), i = 0
                }, t))
            }
        }, t.throttle = function (e, t, o) {
            var n, i, r, s = null;
            return function () {
                if (n = arguments, i = !0, o = o || this, !t) return void e.apply(o, n);
                s || (r = function () {
                    i ? (e.apply(o, n), i = !1, s = setTimeout(r, t)) : s = null
                })()
            }
        }, t.normilizeCSSValue = function (e, t) {
            switch (e) {
                case"font-weight":
                    return "bold" === t ? 700 : t
            }
            return t
        }, t.css = function (e, o, n, i) {
            void 0 === i && (i = !1);
            var r = /^left|top|bottom|right|width|min|max|height|margin|padding|font-size/i;
            if (t.isPlainObject(o) || void 0 !== n) {
                var s = function (e, o, n) {
                    void 0 !== n && null !== n && r.test(o) && /^[\-+]?[0-9.]+$/.test("" + n) && (n = parseInt("" + n, 10) + "px"), void 0 !== n && t.css(e, o, void 0, !0) !== t.normilizeCSSValue(o, n) && (e.style[o] = n)
                };
                if (t.isPlainObject(o)) {
                    var a = Object.keys(o), l = void 0;
                    for (l = 0; a.length > l; l += 1) s(e, t.camelCase(a[l]), o[a[l]])
                } else s(e, t.camelCase(o), n);
                return ""
            }
            var c = t.fromCamelCase(o), d = e.ownerDocument, u = !!d && (d.defaultView || d.parentWindow),
                p = e.style[o],
                f = void 0 !== p && "" !== p ? p : u && !i ? u.getComputedStyle(e).getPropertyValue(c) : "";
            return r.test(o) && /^[\-+]?[0-9.]+px$/.test("" + f) && (f = parseInt(f, 10)), t.normilizeCSSValue(o, f)
        }, t.asArray = function (e) {
            return Array.isArray(e) ? e : [e]
        }, t.splitArray = function (e) {
            return "string" == typeof e ? e.split(/[,\s]+/) : e
        }, t.sprintf = function () {
            for (var e = [], t = 0; arguments.length > t; t++) e[t] = arguments[t];
            var o = /%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g, n = e, i = 0,
                r = n[i++], s = function (e, t, o, n) {
                    var i = t > e.length ? Array(1 + t - e.length >>> 0).join(o) : "";
                    return n ? e + i : i + e
                }, a = function (e, t, o, n, i) {
                    var r = n - e.length;
                    return r > 0 && (e = o || !i ? s(e, n, " ", o) : e.slice(0, t.length) + s("", r, "0", !0) + e.slice(t.length)), e
                }, l = function (e, t, o, n, i, r, l) {
                    var c = e >>> 0;
                    o = o && c && {2: "0b", 8: "0", 16: "0x"}[t] || "";
                    var d = o + s(c.toString(t), r || 0, "0", !1);
                    return a(d, o, n, i, l)
                }, c = function (e, t, o, n, i) {
                    return null != n && (e = e.slice(0, n)), a(e, "", t, o, i)
                };
            return r.replace(o, function (e, t, o, r, d, u, p) {
                if ("%%" == e) return "%";
                for (var f = !1, h = "", m = !1, v = !1, g = 0; o && o.length > g; g++) switch (o.charAt(g)) {
                    case" ":
                        h = " ";
                        break;
                    case"+":
                        h = "+";
                        break;
                    case"-":
                        f = !0;
                        break;
                    case"0":
                        m = !0;
                        break;
                    case"#":
                        v = !0
                }
                if (r = r ? "*" === r ? +n[i++] : "*" === ("" + r)[0] ? +n[("" + r).slice(1, -1)] : +r : 0, 0 > r && (r = -r, f = !0), !isFinite(r)) throw Error("sprintf: (minimum-)width must be finite");
                u = u ? "*" === u ? +n[i++] : "*" === u[0] ? +n[u.slice(1, -1)] : +u : "fFeE".indexOf(p) > -1 ? 6 : "d" == p ? 0 : void 0;
                var _ = t ? n[t.slice(0, -1)] : n[i++];
                switch (p) {
                    case"s":
                        return c(_ + "", f, r, u, m);
                    case"c":
                        return c(String.fromCharCode(+_), f, r, u, m);
                    case"b":
                        return l(_, 2, v, f, r, u, m);
                    case"o":
                        return l(_, 8, v, f, r, u, m);
                    case"x":
                        return l(_, 16, v, f, r, u, m);
                    case"X":
                        return l(_, 16, v, f, r, u, m).toUpperCase();
                    case"u":
                        return l(_, 10, v, f, r, u, m);
                    case"i":
                    case"d":
                        var b = parseInt("" + _, 10), y = 0 > b ? "-" : h;
                        return _ = y + s(Math.abs(b) + "", u, "0", !1), a(_, y, f, r, m);
                    case"e":
                    case"E":
                    case"f":
                    case"F":
                    case"g":
                    case"G":
                        var b = +_, y = 0 > b ? "-" : h,
                            w = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(p.toLowerCase())],
                            C = ["toString", "toUpperCase"]["eEfFgG".indexOf(p) % 2];
                        return _ = y + Math.abs(b)[w](u), a(_, y, f, r, m)[C]();
                    default:
                        return e
                }
            })
        }, t.val = function (e, t, o) {
            var n = e.querySelector(t);
            return n ? (o && (n.value = o), n.value) : ""
        }, t.defaultLanguage = function (e) {
            return "auto" === e || void 0 === e ? document.documentElement.lang || navigator.language && navigator.language.substr(0, 2) || !!navigator.browserLanguage && navigator.browserLanguage.substr(0, 2) || "en" : e
        }, t.normalizeNode = function (e) {
            if (e) {
                if (e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && e.parentNode) for (; e.nextSibling && e.nextSibling.nodeType === Node.TEXT_NODE;) null !== e.nextSibling.nodeValue && (e.nodeValue += e.nextSibling.nodeValue), e.nodeValue = e.nodeValue.replace(n.INVISIBLE_SPACE_REG_EXP, ""), e.parentNode.removeChild(e.nextSibling); else t.normalizeNode(e.firstChild);
                t.normalizeNode(e.nextSibling)
            }
        }, t.cleanFromWord = function (e) {
            -1 !== e.indexOf("<html ") && (e = e.substring(e.indexOf("<html "), e.length), e = e.substring(0, e.lastIndexOf("</html>") + 7));
            var t = "";
            try {
                var o = document.createElement("div");
                o.innerHTML = e;
                var n = [];
                o.firstChild && i.Dom.all(o, function (e) {
                    switch (e.nodeType) {
                        case Node.ELEMENT_NODE:
                            "FONT" === e.nodeName ? i.Dom.unwrap(e) : [].slice.call(e.attributes).forEach(function (t) {
                                -1 === ["src", "href", "rel", "content"].indexOf(t.name.toLowerCase()) && e.removeAttribute(t.name)
                            });
                            break;
                        case Node.TEXT_NODE:
                            break;
                        default:
                            n.push(e)
                    }
                }), n.forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }), t = o.innerHTML
            } catch (e) {
            }
            return t && (e = t), e.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "")
        }, t.applyStyles = function (e) {
            if (-1 === e.indexOf("<html ")) return e;
            e = e.substring(e.indexOf("<html "), e.length), e = e.substring(0, e.lastIndexOf("</html>") + 7);
            var o = document.createElement("iframe");
            o.style.display = "none", document.body.appendChild(o);
            var n = "", i = [], r = [];
            try {
                var s = o.contentDocument || (o.contentWindow ? o.contentWindow.document : null);
                if (s) {
                    s.open(), s.write(e), s.close(), s.styleSheets.length && (r = s.styleSheets[s.styleSheets.length - 1].cssRules);
                    for (var a = 0; r.length > a; a += 1) !function (e) {
                        if ("" === r[e].selectorText) return "continue";
                        i = t.$$(r[e].selectorText, s.body), i.forEach(function (t) {
                            t.style.cssText += r[e].style.cssText.replace(/mso-[a-z\-]+:[\s]*[^;]+;/g, "").replace(/border[a-z\-]*:[\s]*[^;]+;/g, "")
                        })
                    }(a);
                    n = s.firstChild ? s.body.innerHTML : ""
                }
            } catch (e) {
            } finally {
                o.parentNode && o.parentNode.removeChild(o)
            }
            return n && (e = n), e.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "")
        }, t.inView = function (e, t, o) {
            var n = e.getBoundingClientRect(), i = n.top, r = n.height, s = e;
            do {
                if (s && s.parentNode) {
                    if (s = s.parentNode, n = s.getBoundingClientRect(), n.bottom >= i == 0) return !1;
                    if (n.top >= i + r) return !1
                }
            } while (s && s != t && s.parentNode);
            return o.documentElement.clientHeight >= i
        }, t.scrollIntoView = function (e, o, n) {
            t.inView(e, o, n) || (o.clientHeight !== o.scrollHeight && (o.scrollTop = e.offsetTop), t.inView(e, o, n) || e.scrollIntoView())
        }, t.getXPathByElement = function (e, o) {
            if (!e || 1 != e.nodeType) return "";
            if (!e.parentNode || o === e) return "";
            if (e.id) return "//*[@id='" + e.id + "']";
            var n = [].filter.call(e.parentNode.childNodes, function (t) {
                return t.nodeName === e.nodeName
            });
            return t.getXPathByElement(e.parentNode, o) + "/" + e.nodeName.toLowerCase() + (n.length > 1 ? "[" + ([].indexOf.call(n, e) + 1) + "]" : "")
        }, t.dataBind = function (e, t, o) {
            var n = e.JoditDataBindkey;
            if (n || (n = {}, Object.defineProperty(e, "JoditDataBindkey", {
                enumerable: !1,
                configurable: !0,
                value: n
            })), void 0 === o) return n[t];
            n[t] = o
        }, t.isLicense = function (e) {
            return "string" == typeof e && 32 === e.length && /^[a-z0-9]+$/.test(e)
        }, t.normalizeLicense = function (e, t) {
            void 0 === t && (t = 8);
            for (var o = []; e.length;) o.push(e.substr(0, t)), e = e.substr(t);
            return o[1] = o[1].replace(/./g, "*"), o[2] = o[2].replace(/./g, "*"), o.join("-")
        };
        var d = function () {
            function e(e) {
                var o = this;
                this.length = 0, t.extend(!0, this, e), this.length = e.length;
                var n = Array.prototype;
                ["map", "forEach", "reduce", "push", "pop", "shift", "unshift", "slice", "splice"].forEach(function (e) {
                    o[e] = n[e]
                })
            }

            return e.prototype.toString = function () {
                for (var e = [], t = 0; this.length > t; t += 1) e[t] = this[t];
                return "" + e
            }, e
        }();
        t.JoditArray = d;
        var u = function () {
            function e(e) {
                t.extend(!0, this, e)
            }

            return e
        }();
        t.JoditObject = u, t.getRange = function () {
            var e = window.getSelection().getRangeAt(0);
            return [e.startContainer, e.startOffset, e.endContainer, e.endOffset]
        }, t.innerWidth = function (e, t) {
            var o = t.getComputedStyle(e), n = e.clientWidth;
            return n -= parseFloat(o.paddingLeft || "0") + parseFloat(o.paddingRight || "0")
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(2), i = o(0), r = o(6), s = o(10), a = s.Widget.TabsWidget, l = s.Widget.FileSelectorWidget, c = o(5),
            d = o(3), u = function () {
                function e() {
                    this.license = "", this.preset = "custom", this.presets = {
                        inline: {
                            inline: !0,
                            toolbar: !1,
                            toolbarInline: !0,
                            popup: {selection: ["bold", "underline", "italic", "ul", "ol", "outdent", "indent", "\n", "fontsize", "brush", "paragraph", "link", "align", "cut", "dots"]},
                            showXPathInStatusbar: !1,
                            showCharsCounter: !1,
                            showWordsCounter: !1,
                            showPlaceholder: !1
                        }
                    }, this.ownerDocument = document, this.ownerWindow = window, this.zIndex = 0, this.readonly = !1, this.activeButtonsInReadOnly = ["source", "fullsize", "print", "about", "dots", "selectall"], this.toolbarButtonSize = "middle", this.inline = !1, this.theme = "default", this.saveModeInStorage = !1, this.saveHeightInStorage = !1, this.spellcheck = !0, this.editorCssClass = !1, this.triggerChangeEvent = !0, this.width = "auto", this.minWidth = "200px", this.maxWidth = "100%", this.height = "auto", this.minHeight = 200, this.direction = "", this.language = "auto", this.debugLanguage = !1, this.i18n = "en", this.tabIndex = -1, this.toolbar = !0, this.showTooltip = !0, this.showTooltipDelay = 500, this.useNativeTooltip = !1, this.enter = n.PARAGRAPH, this.defaultMode = n.MODE_WYSIWYG, this.useSplitMode = !1, this.colors = {
                        greyscale: ["#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF"],
                        palette: ["#980000", "#FF0000", "#FF9900", "#FFFF00", "#00F0F0", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF"],
                        full: ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#733554", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"]
                    }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraButtons = [], this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = ["source", "|", "bold", "strikethrough", "underline", "italic", "|", "superscript", "subscript", "|", "ul", "ol", "|", "outdent", "indent", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "file", "video", "table", "link", "|", "align", "undo", "redo", "\n", "cut", "hr", "eraser", "copyformat", "|", "symbol", "fullsize", "selectall", "print", "about"], this.buttonsMD = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "hr", "eraser", "copyformat", "fullsize", "dots"], this.buttonsSM = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "eraser", "copyformat", "fullsize", "dots"], this.buttonsXS = ["bold", "image", "|", "brush", "paragraph", "|", "align", "|", "undo", "redo", "|", "eraser", "dots"], this.events = {}, this.textIcons = !1
                }

                return e
            }();
        t.Config = u, t.OptionsDefault = function (e) {
            var t = this, o = this;
            if (void 0 !== e && "object" == typeof e) {
                var n = function (e, s) {
                    if ("preset" === s && void 0 !== r.Jodit.defaultOptions.presets[e.preset]) {
                        var a = r.Jodit.defaultOptions.presets[e.preset];
                        Object.keys(a).forEach(n.bind(t, a))
                    }
                    o[s] = "object" != typeof r.Jodit.defaultOptions[s] || Array.isArray(r.Jodit.defaultOptions[s]) ? e[s] : i.extend(!0, {}, r.Jodit.defaultOptions[s], e[s])
                };
                Object.keys(e).forEach(n.bind(this, e))
            }
        }, u.prototype.controls = {
            print: {
                exec: function (e) {
                    var t = window.open("", "PRINT");
                    t && (e.options.iframe ? (e.events.fire("generateDocumentStructure.iframe", t.document), t.document.body.innerHTML = e.getEditorValue()) : (t.document.write("<!doctype html><html><head><title></title></head><body>" + e.getEditorValue() + "</body></html>"), t.document.close()), t.focus(), t.print(), t.close())
                }, mode: n.MODE_SOURCE + n.MODE_WYSIWYG
            },
            about: {
                exec: function (e) {
                    var t = e.getInstance("Dialog");
                    t.setTitle(e.i18n("About Jodit")), t.setContent('<div class="jodit_about">                    <div>' + e.i18n("Jodit Editor") + " v." + e.getVersion() + " </div><div>" + e.i18n("License: %s", i.isLicense(e.options.license) ? i.normalizeLicense(e.options.license) : e.i18n("Free Non-commercial Version")) + '</div><div><a href="https://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a></div><div><a href="https://xdsoft.net/jodit/doc/" target="_blank">' + e.i18n("Jodit User's Guide") + "</a> " + e.i18n("contains detailed help for using") + "</div><div>" + e.i18n("For information about the license, please go to our website:") + '</div><div><a href="https://xdsoft.net/jodit/license.html" target="_blank">http://xdsoft.net/jodit/license.html</a></div>' + (i.isLicense(e.options.license) ? "" : '<div><a href="https://xdsoft.net/jodit/buy.html" target="_blank">' + e.i18n("Buy full version") + "</a></div>") + "<div>" + e.i18n("Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.") + "</div></div>"), t.open()
                }, tooltip: "About Jodit", mode: n.MODE_SOURCE + n.MODE_WYSIWYG
            },
            hr: {command: "insertHorizontalRule", tags: ["hr"], tooltip: "Insert Horizontal Line"},
            image: {
                popup: function (e, t, o, n) {
                    var r = null;
                    return t && t.nodeType !== Node.TEXT_NODE && ("IMG" === t.tagName || i.$$("img", t).length) && (r = "IMG" === t.tagName ? t : i.$$("img", t)[0]), l(e, {
                        filebrowser: function (t) {
                            if (t.files && t.files.length) {
                                var o = void 0;
                                for (o = 0; t.files.length > o; o += 1) e.selection.insertImage(t.baseurl + t.files[o])
                            }
                            n()
                        }, upload: function (t) {
                            var o;
                            if (t.files && t.files.length) for (o = 0; t.files.length > o; o += 1) e.selection.insertImage(t.baseurl + t.files[o]);
                            n()
                        }, url: function (t, o) {
                            var s = r || i.dom('<img src=""/>', e.editorDocument);
                            s.setAttribute("src", t), s.setAttribute("alt", o), r || e.selection.insertImage(s), n()
                        }
                    }, r, n)
                }, tags: ["img"], tooltip: "Insert Image"
            },
            file: {
                popup: function (e, t, o, n) {
                    var r = function (t, o) {
                        void 0 === o && (o = ""), e.selection.insertNode(i.dom('<a href="' + t + '" title="' + o + '">' + (o || t) + "</a>", e.editorDocument))
                    }, s = null;
                    return t && ("A" === t.nodeName || d.Dom.closest(t, "A", e.editor)) && (s = "A" === t.nodeName ? t : d.Dom.closest(t, "A", e.editor)), l(e, {
                        filebrowser: function (e) {
                            if (e.files && e.files.length) {
                                var t = void 0;
                                for (t = 0; e.files.length > t; t += 1) r(e.baseurl + e.files[t])
                            }
                            n()
                        }, upload: function (e) {
                            var t;
                            if (e.files && e.files.length) for (t = 0; e.files.length > t; t += 1) r(e.baseurl + e.files[t]);
                            n()
                        }, url: function (e, t) {
                            s ? (s.setAttribute("href", e), s.setAttribute("title", t)) : r(e, t), n()
                        }
                    }, s, n, !1)
                }, tags: ["a"], tooltip: "Insert file"
            },
            video: {
                popup: function (e, t, o, n) {
                    var r = i.dom('<form class="jodit_form">\n                        <input required name="code" placeholder="http://" type="url"/>\n                        <button type="submit">' + e.i18n("Insert") + "</button>\n                        </form>", e.ownerDocument),
                        s = i.dom('<form class="jodit_form">\n                        <textarea required name="code" placeholder="' + e.i18n("Embed code") + '"></textarea>\n                        <button type="submit">' + e.i18n("Insert") + "</button>\n                        </form>", e.ownerDocument),
                        l = {}, d = e.selection.save(), u = function (t) {
                            e.selection.restore(d), e.selection.insertHTML(t), n()
                        };
                    return e.options.textIcons ? (l[e.i18n("Link")] = r, l[e.i18n("Code")] = s) : (l[c.ToolbarIcon.getIcon("link") + "&nbsp;" + e.i18n("Link")] = r, l[c.ToolbarIcon.getIcon("source") + "&nbsp;" + e.i18n("Code")] = s), s.addEventListener("submit", function (e) {
                        return e.preventDefault(), i.trim(i.val(s, "textarea[name=code]")) ? (u(i.val(s, "textarea[name=code]")), !1) : (s.querySelector("textarea[name=code]").focus(), s.querySelector("textarea[name=code]").classList.add("jodit_error"), !1)
                    }), r.addEventListener("submit", function (e) {
                        return e.preventDefault(), i.isURL(i.val(r, "input[name=code]")) ? (u(i.convertMediaURLToVideoEmbed(i.val(r, "input[name=code]"))), !1) : (r.querySelector("input[name=code]").focus(), r.querySelector("input[name=code]").classList.add("jodit_error"), !1)
                    }), a(e, l)
                }, tags: ["iframe"], tooltip: "Insert youtube/vimeo video"
            }
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.INVISIBLE_SPACE = "\ufeff", t.INVISIBLE_SPACE_REG_EXP = /[\uFEFF]/g, t.INVISIBLE_SPACE_REG_EXP_END = /[\uFEFF]+$/g, t.INVISIBLE_SPACE_REG_EXP_START = /^[\uFEFF]+/g, t.SPACE_REG_EXP = /[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_START = /^[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_END = /[\s\n\t\r\uFEFF\u200b]+$/g, t.IS_BLOCK = /^(PRE|DIV|P|LI|H[1-6]|BLOCKQUOTE|TD|TH|TABLE|BODY|HTML|FIGCAPTION|FIGURE)$/i, t.IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB)$/, t.KEY_BACKSPACE = 8, t.KEY_TAB = 9, t.KEY_ENTER = 13, t.KEY_ESC = 27, t.KEY_LEFT = 37, t.KEY_UP = 38, t.KEY_RIGHT = 39, t.KEY_DOWN = 40, t.KEY_DELETE = 46, t.KEY_F = 70, t.KEY_R = 82, t.KEY_H = 72, t.KEY_Y = 89, t.KEY_V = 86, t.KEY_Z = 90, t.KEY_F3 = 114, t.NEARBY = 5, t.ACCURACY = 10, t.BR = "br", t.PARAGRAPH = "P", t.MODE_WYSIWYG = 1, t.MODE_SOURCE = 2, t.MODE_SPLIT = 3, t.URL_LIST = -1 != navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent) ? "url" : "text/uri-list", t.TEXT_PLAIN = -1 != navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent) ? "text" : "text/plain", t.TEXT_HTML = -1 != navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent) ? "text" : "text/html", t.MARKER_CLASS = "jodit_selection_marker", t.EMULATE_DBLCLICK_TIMEOUT = 300, t.JODIT_SELECTED_CELL_MARKER = "data-jodit-selected-cell", t.INSERT_AS_HTML = "insert_as_html", t.INSERT_CLEAR_HTML = "insert_clear_html", t.INSERT_AS_TEXT = "insert_as_text", t.INSERT_ONLY_TEXT = "insert_only_text"
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(2), i = o(0);
        t.Dom = function () {
            function e() {
            }

            return e.detach = function (e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            }, e.unwrap = function (e) {
                var t = e.parentNode, o = e;
                if (t) {
                    for (; o.firstChild;) t.insertBefore(o.firstChild, o);
                    t.removeChild(o)
                }
            }, e.each = function (t, o) {
                var n = t.firstChild;
                if (n) for (; n;) {
                    if (!1 === o.call(n, n) || !1 === e.each(n, o)) return !1;
                    n = e.next(n, function (e) {
                        return !!e
                    }, t)
                }
                return !0
            }, e.create = function (e, t, o) {
                var n;
                return e = e.toLowerCase(), "text" === e ? n = o.createTextNode("string" == typeof t ? t : "") : (n = o.createElement(e), void 0 !== t && (n.innerHTML = t)), n
            }, e.replace = function (e, t, o, n, r) {
                void 0 === o && (o = !1), void 0 === n && (n = !1);
                var s = "string" == typeof t ? r.createElement(t) : t;
                if (!n) for (; e.firstChild;) s.appendChild(e.firstChild);
                return o && i.each(e.attributes, function (e, t) {
                    s.setAttribute(t.name, t.nodeValue)
                }), e.parentNode && e.parentNode.replaceChild(s, e), s
            }, e.isCell = function (t, o) {
                return e.isNode(t, o) && /^(td|th)$/i.test(t.nodeName)
            }, e.isImage = function (t, o) {
                return e.isNode(t, o) && /^(img|svg|picture|canvas)$/i.test(t.nodeName)
            }, e.isBlock = function (e) {
                return !!e && "string" == typeof e.nodeName && n.IS_BLOCK.test(e.nodeName)
            }, e.isInlineBlock = function (e) {
                return !!e && e.nodeType === Node.ELEMENT_NODE && -1 !== ["inline", "inline-block"].indexOf("" + i.css(e, "display"))
            }, e.canSplitBlock = function (e, t) {
                return e && e instanceof t.HTMLElement && this.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && void 0 !== e.style && !/^(fixed|absolute)/i.test(e.style.position)
            }, e.prev = function (t, o, n, i) {
                return void 0 === i && (i = !0), e.find(t, o, n, !1, "previousSibling", !!i && "lastChild")
            }, e.next = function (t, o, n, i) {
                return void 0 === i && (i = !0), e.find(t, o, n, void 0, void 0, i ? "firstChild" : "")
            }, e.find = function (t, o, n, i, r, s) {
                if (void 0 === i && (i = !1), void 0 === r && (r = "nextSibling"), void 0 === s && (s = "firstChild"), i && o(t)) return t;
                var a, l = t;
                do {
                    if (a = l[r], o(a)) return a || !1;
                    if (s && a && a[s]) {
                        var c = e.find(a[s], o, a, !0, r, s);
                        if (c) return c
                    }
                    a || (a = l.parentNode), l = a
                } while (l && l !== n);
                return !1
            }, e.findWithCurrent = function (t, o, n, i, r) {
                void 0 === i && (i = "nextSibling"), void 0 === r && (r = "firstChild");
                var s = t;
                do {
                    if (o(s)) return s || !1;
                    if (r && s && s[r]) {
                        var a = e.findWithCurrent(s[r], o, s, i, r);
                        if (a) return a
                    }
                    for (; s && !s[i] && s !== n;) s = s.parentNode;
                    s && s[i] && s !== n && (s = s[i])
                } while (s && s !== n);
                return !1
            }, e.isEmptyTextNode = function (e) {
                return e && e.nodeType === Node.TEXT_NODE && (!e.nodeValue || 0 === e.nodeValue.replace(n.INVISIBLE_SPACE_REG_EXP, "").length)
            }, e.isEmpty = function (t) {
                var o = /^(img|svg|canvas|input|textarea|form)$/;
                return !t || (t.nodeType === Node.TEXT_NODE ? null === t.nodeValue || 0 === i.trim(t.nodeValue).length : !t.nodeName.toLowerCase().match(o) && e.each(t, function (e) {
                    if (e && e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && 0 !== i.trim(e.nodeValue).length || e && e.nodeType === Node.ELEMENT_NODE && e.nodeName.toLowerCase().match(o)) return !1
                }))
            }, e.isNode = function (e, t) {
                return "object" == typeof t ? e instanceof t.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            }, e.up = function (e, t, o) {
                var n = e;
                if (!e) return !1;
                do {
                    if (t(n)) return n;
                    if (n === o || !n.parentNode) break;
                    n = n.parentNode
                } while (n && n !== o);
                return !1
            }, e.closest = function (t, o, n) {
                var i;
                return i = "function" == typeof o ? o : o instanceof RegExp ? function (e) {
                    return o.test(e.nodeName)
                } : function (e) {
                    return RegExp("^(" + o + ")$", "i").test(e.nodeName)
                }, e.up(t, i, n)
            }, e.after = function (e, t) {
                var o = e.parentNode;
                o && (o.lastChild === e ? o.appendChild(t) : o.insertBefore(t, e.nextSibling))
            }, e.moveContent = function (e, t, o) {
                void 0 === o && (o = !1);
                var i = e.ownerDocument.createDocumentFragment();
                [].slice.call(e.childNodes).forEach(function (e) {
                    e.nodeType === Node.TEXT_NODE && e.nodeValue === n.INVISIBLE_SPACE || i.appendChild(e)
                }), o && t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
            }, e.all = function (t, o, n) {
                void 0 === n && (n = !1);
                var i = t.childNodes ? Array.prototype.slice.call(t.childNodes) : [];
                if (o(t)) return t;
                n && (i = i.reverse()), i.forEach(function (t) {
                    e.all(t, o, n)
                })
            }, e.wrapInline = function (t, o, n) {
                var i, r = t, s = t, a = n.selection.save(), l = !1;
                do {
                    l = !1, (i = r.previousSibling) && !e.isBlock(i) && (l = !0, r = i)
                } while (l);
                do {
                    l = !1, (i = s.nextSibling) && !e.isBlock(i) && (l = !0, s = i)
                } while (l);
                var c = "string" == typeof o ? n.editorDocument.createElement(o) : o;
                r.parentNode && r.parentNode.insertBefore(c, r);
                for (var d = r; d && (d = r.nextSibling, c.appendChild(r), r !== s && d);) r = d;
                return n.selection.restore(a), c
            }, e.wrap = function (e, t, o) {
                var n = o.selection.save(), i = "string" == typeof t ? o.editorDocument.createElement(t) : t;
                return e.parentNode ? (e.parentNode.insertBefore(i, e), i.appendChild(e), o.selection.restore(n), i) : null
            }, e.findInline = function (t, o, n) {
                var i = t, r = null;
                do {
                    if (!i) break;
                    if ((r = o ? i.previousSibling : i.nextSibling) || !i.parentNode || i.parentNode === n || !e.isInlineBlock(i.parentNode)) break;
                    i = i.parentNode
                } while (!r);
                for (; r && e.isInlineBlock(r) && (o ? r.lastChild : r.firstChild);) r = o ? r.lastChild : r.firstChild;
                return r
            }, e.contains = function (e, t) {
                for (; t.parentNode;) {
                    if (t.parentNode === e) return !0;
                    t = t.parentNode
                }
                return !1
            }, e.isOrContains = function (t, o, n) {
                return void 0 === n && (n = !1), o && t && (t === o && !n || e.contains(t, o))
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(6);
        t.Component = function () {
            function e(e) {
                var t = this;
                this.__whoLocked = "", this.isLocked = function () {
                    return "" !== t.__whoLocked
                }, this.isLockedNotBy = function (e) {
                    return t.isLocked() && t.__whoLocked !== e
                }, this.__modulesInstances = {}, this.__isFullSize = !1, this.isFullSize = function () {
                    return t.__isFullSize
                }, e && (this.jodit = e, e instanceof n.Jodit && this.jodit.components && this.jodit.components.push(this))
            }

            return e.prototype.destruct = function () {
            }, e.prototype.getInstance = function (e, t) {
                if (void 0 === n.Jodit.modules[e]) throw Error("Need real module name");
                return void 0 === this.__modulesInstances[e] && (this.__modulesInstances[e] = new n.Jodit.modules[e](this, t)), this.__modulesInstances[e]
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }(), i = this && this.__assign || Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; n > o; o++) {
                t = arguments[o];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = o(4), s = o(0), a = o(2), l = o(3), c = function (e) {
            function t(t, o, n) {
                void 0 === o && (o = "li"), void 0 === n && (n = "jodit_toolbar_btn");
                var i = e.call(this, t) || this;
                return i.parentToolbar = null, i.container = i.jodit.ownerDocument.createElement(o), i.container.classList.add(n), i
            }

            return n(t, e), t.prototype.createIcon = function (e, t) {
                var o = t ? t.icon || t.name : e;
                if (!this.jodit.options.textIcons) {
                    var n = this.jodit.events.fire("getIcon", o, t, e), i = void 0;
                    return t && t.iconURL && void 0 === n ? (i = s.dom("<i></i>", this.jodit.ownerDocument), i.style.backgroundImage = "url(" + t.iconURL + ")") : (void 0 === n && (n = v.getIcon(v.exists(o) ? o : "empty")), i = s.dom(n, this.jodit.ownerDocument)), i.classList.add("jodit_icon", "jodit_icon_" + e), i
                }
                return s.dom('<span class="jodit_icon">' + this.jodit.i18n(t ? t.name : e) + "</span>", this.jodit.ownerDocument)
            }, t
        }(r.Component), d = function (e) {
            function t(o, n, i, r) {
                void 0 === r && (r = "jodit_toolbar_popup");
                var s = e.call(this, o, "div", r) || this;
                return s.target = n, s.current = i, s.className = r, s.isOpened = !1, s.close = function (e) {
                    s.isOpened && (e && l.Dom.isOrContains(s.container, e instanceof t ? e.target : e) || (s.isOpened = !1, s.jodit.events.off("closeAllPopups", s.close), s.doClose(), s.container.parentNode && s.container.parentNode.removeChild(s.container), s.jodit.selection && s.jodit.selection.removeMarkers()))
                }, s.container.setAttribute("data-editor_id", o.id), s.jodit.events.on(s.container, "mousedown touchstart", function (e) {
                    e.stopPropagation()
                }), s
            }

            return n(t, e), t.prototype.doOpen = function (e) {
                e && (l.Dom.detach(this.container), this.container.innerHTML = '<span class="jodit_popup_triangle"></span>', this.container.appendChild(s.dom(e, this.jodit.ownerDocument)), this.container.style.display = "block", this.container.style.marginLeft = null)
            }, t.prototype.open = function (e, t, o) {
                void 0 === o && (o = !1), this.jodit.events.fire("beforeOpenPopup closeAllPopups", this, e), o || this.jodit.events.on("closeAllPopups", this.close), this.container.classList.add(this.className + "-open"), this.doOpen(e), this.target.appendChild(this.container), void 0 !== t && this.container.classList.toggle("jodit_right", t), !o && this.parentToolbar && this.jodit.events.fire(this.parentToolbar, "afterOpenPopup", this.container), this.isOpened = !0
            }, t.prototype.doClose = function () {
            }, t
        }(c);
        t.ToolbarPopup = d;
        var u = function (e) {
            function t(t, o, n, i) {
                void 0 === i && (i = "jodit_toolbar_list");
                var r = e.call(this, t, o, n, i) || this;
                return r.target = o, r.current = n, r.className = i, r.defaultControl = {
                    template: function (e, t, o) {
                        return r.jodit.i18n(o)
                    }
                }, r
            }

            return n(t, e), t.prototype.doClose = function () {
                this.toolbar && this.toolbar.destruct()
            }, t.prototype.doOpen = function (e) {
                var t = this;
                this.toolbar = new g(this.jodit);
                var o = "string" == typeof e.list ? e.list.split(/[\s,]/) : e.list;
                s.each(o, function (o, n) {
                    var r;
                    if (void 0 !== t.jodit.options.controls[n]) r = new p(t.jodit, i({name: "" + n}, t.jodit.options.controls[n]), t.current); else if (void 0 !== t.jodit.options.controls[o] && "object" == typeof n) r = new p(t.jodit, i({name: "" + o}, t.jodit.options.controls[o], n), t.current); else {
                        r = new p(t.jodit, {
                            name: "" + o,
                            exec: e.exec,
                            command: e.command,
                            isActive: e.isActiveChild,
                            isDisable: e.isDisableChild,
                            args: [e.args && e.args[0] || o, e.args && e.args[1] || n]
                        }, t.current);
                        var s = e.template || t.defaultControl.template;
                        r.textBox.innerHTML = s(t.jodit, o, n)
                    }
                    t.toolbar.appendChild(r)
                }), this.container.appendChild(this.toolbar.container), this.container.style.marginLeft = null, this.toolbar.checkActiveButtons()
            }, t
        }(d);
        t.ToolbarList = u;
        var p = function (e) {
            function t(t, o, n) {
                var i = e.call(this, t) || this;
                i.__disabled = !1, i.__actived = !1, i.checkActiveStatus = function (e, t) {
                    var o = 0, n = 0;
                    return Object.keys(e).forEach(function (r) {
                        var a = e[r];
                        "function" == typeof a ? a(i.jodit, "" + s.css(t, r)) && (o += 1) : -1 !== a.indexOf("" + s.css(t, r)) && (o += 1), n += 1
                    }), n === o
                }, i.onMouseDown = function (e) {
                    if (e.stopImmediatePropagation(), e.preventDefault(), i.disable) return !1;
                    var t = i.control;
                    if (t.list) {
                        var o = new u(i.jodit, i.container, i.target);
                        o.parentToolbar = i.parentToolbar, o.open(t), i.jodit.events.fire("closeAllPopups", o.container)
                    } else if (void 0 !== t.exec && "function" == typeof t.exec) t.exec(i.jodit, i.target || !!i.jodit.selection && i.jodit.selection.current(), t, e, i.container), i.jodit.events.fire("synchro"), i.parentToolbar && i.parentToolbar.immedateCheckActiveButtons(), i.jodit.events.fire("closeAllPopups afterExec"); else if (void 0 !== t.popup && "function" == typeof t.popup) {
                        var n = new d(i.jodit, i.container, i.target);
                        n.parentToolbar = i.parentToolbar, !1 !== i.jodit.events.fire(s.camelCase("before-" + t.name + "-OpenPopup"), i.target || !!i.jodit.selection && i.jodit.selection.current(), t, n) && n.open(t.popup(i.jodit, i.target || !!i.jodit.selection && i.jodit.selection.current(), t, n.close, i)), i.jodit.events.fire(s.camelCase("after-" + t.name + "-OpenPopup") + " closeAllPopups", n.container)
                    } else (t.command || t.name) && (i.jodit.execCommand(t.command || t.name, t.args && t.args[0] || !1, t.args && t.args[1] || null), i.jodit.events.fire("closeAllPopups"))
                }, i.control = o, i.target = n, i.anchor = i.jodit.ownerDocument.createElement("a"), i.container.appendChild(i.anchor), t.options.showTooltip && o.tooltip && (t.options.useNativeTooltip ? i.anchor.setAttribute("title", i.jodit.i18n(o.tooltip) + (o.hotkeys ? "<br>" + s.asArray(o.hotkeys).join(" ") : "")) : i.tooltip = new f(i)), i.textBox = i.jodit.ownerDocument.createElement("span"), i.anchor.appendChild(i.textBox);
                var r = o.name.replace(/[^a-zA-Z0-9]/g, "_");
                if (o.getContent && "function" == typeof o.getContent) l.Dom.detach(i.container), i.container.appendChild(s.dom(o.getContent(i.jodit, o, i), i.jodit.ownerDocument)); else {
                    if (o.list && i.anchor) {
                        var a = i.jodit.ownerDocument.createElement("span");
                        a.classList.add("jodit_with_dropdownlist-trigger"), i.container.classList.add("jodit_with_dropdownlist"), i.anchor.appendChild(a)
                    }
                    i.textBox.appendChild(i.createIcon(r, o))
                }
                return i.container.classList.add("jodit_toolbar_btn-" + r), o.isInput ? i.container.classList.add("jodit_toolbar-input") : i.jodit.events.on(i.container, "mousedown touchend", i.onMouseDown), i
            }

            return n(t, e), Object.defineProperty(t.prototype, "disable", {
                get: function () {
                    return this.__disabled
                }, set: function (e) {
                    this.__disabled = e, this.container.classList.toggle("jodit_disabled", e), e ? this.container.hasAttribute("disabled") || this.container.setAttribute("disabled", "disabled") : this.container.hasAttribute("disabled") && this.container.removeAttribute("disabled")
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "active", {
                get: function () {
                    return this.__actived
                }, set: function (e) {
                    this.__actived = e, this.container.classList.toggle("jodit_active", e)
                }, enumerable: !0, configurable: !0
            }), t.prototype.isDisable = function () {
                var e = void 0 === this.control || void 0 === this.control.mode ? a.MODE_WYSIWYG : this.control.mode,
                    t = e === a.MODE_SPLIT || e === this.jodit.getRealMode();
                return "function" == typeof this.control.isDisable && (t = t && !this.control.isDisable(this.jodit, this.control, this)), this.jodit.options.readonly && -1 === this.jodit.options.activeButtonsInReadOnly.indexOf(this.control.name) && (t = !1), !t
            }, t.prototype.isActive = function () {
                var e = this;
                if ("function" == typeof this.control.isActive) return this.control.isActive(this.jodit, this.control, this);
                var t = !!this.jodit.selection && this.jodit.selection.current();
                if (!t) return !1;
                var o, n, i;
                return !(!(this.control.tags || this.control.options && this.control.options.tags) || (o = this.control.tags || this.control.options && this.control.options.tags, n = t, !l.Dom.up(n, function (e) {
                    if (e && -1 !== o.indexOf(e.nodeName.toLowerCase())) return !0
                }, this.jodit.editor))) || !(!(this.control.css || this.control.options && this.control.options.css) || (i = this.control.css || this.control.options && this.control.options.css, n = t, !l.Dom.up(n, function (t) {
                    if (t && t.nodeType !== Node.TEXT_NODE) return e.checkActiveStatus(i, t)
                }, this.jodit.editor)))
            }, t.prototype.destruct = function () {
                this.jodit.events.off(this.container)
            }, t
        }(c);
        t.ToolbarButton = p;
        var f = function () {
            function e(e) {
                var t = this;
                this.button = e, this.timeout = 0, this.show = function () {
                    var e = function () {
                        t.button.container.appendChild(t.container), t.container.style.marginLeft = -(t.container.offsetWidth - t.button.container.offsetWidth) / 2 + "px"
                    }, o = t.button.jodit.options.showTooltipDelay;
                    t.button.jodit.events.fire("hideTooltip"), o ? t.timeout = window.setTimeout(e, o) : e()
                }, this.hide = function () {
                    window.clearTimeout(t.timeout), t.container.parentNode && t.container.parentNode.removeChild(t.container)
                }, e.control.tooltip && (this.container = e.jodit.ownerDocument.createElement("div"), this.container.classList.add("jodit_tooltip"), this.container.innerHTML = e.jodit.i18n(e.control.tooltip) + (e.control.hotkeys ? "<br>" + s.asArray(e.control.hotkeys).join(" ") : ""), e.jodit.events.on(e.anchor, "mouseenter", this.show).on(e.anchor, "mouseleave", this.hide).on("change updateToolbar scroll hidePopup closeAllPopups hideTooltip", this.hide))
            }

            return e
        }();
        t.Tooltip = f;
        var h = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.container.classList.add("jodit_toolbar_btn-break"), o
            }

            return n(t, e), t
        }(c);
        t.ToolbarBreak = h;
        var m = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.container.classList.add("jodit_toolbar_btn-separator"), o
            }

            return n(t, e), t
        }(c);
        t.ToolbarSeparator = m;
        var v = function () {
            function e() {
            }

            return e.exists = function (t) {
                return void 0 !== e.icons[t]
            }, e.getIcon = function (t, o) {
                return void 0 === o && (o = "<span></span>"), void 0 !== e.icons[t] ? e.icons[t] : o
            }, e.icons = {}, e
        }();
        t.ToolbarIcon = v;
        var g = function (e) {
            function t(t) {
                var o = e.call(this, t, "ul", "jodit_toolbar") || this;
                return o.__buttons = [], o.__getControlType = function (e) {
                    var t;
                    if ("string" != typeof e) t = i({name: "empty"}, e), void 0 !== o.jodit.options.controls[t.name] && (t = i({}, o.jodit.options.controls[t.name], t)); else {
                        var n = e.split(/\./), r = o.jodit.options.controls;
                        n.length > 1 && void 0 !== o.jodit.options.controls[n[0]] && (r = o.jodit.options.controls[n[0]], e = n[1]), t = void 0 !== r[e] ? i({name: e}, r[e]) : {
                            name: e,
                            command: e,
                            tooltip: e
                        }
                    }
                    return t
                }, o.immedateCheckActiveButtons = function () {
                    o.jodit.isLocked() || (o.__buttons.filter(function (e) {
                        return e instanceof p
                    }).forEach(function (e) {
                        e.disable = e.isDisable(), e.disable || (e.active = e.isActive()), "function" == typeof e.control.getLabel && e.control.getLabel(o.jodit, e.control, e)
                    }), o.jodit.events && o.jodit.events.fire("updateToolbar"))
                }, o.checkActiveButtons = s.debounce(o.immedateCheckActiveButtons, o.jodit.defaultTimeout), o.closeAll = function () {
                    o.jodit.events.fire("closeAllPopups")
                }, o.afterOpen = function (e) {
                    var t = s.offset(o.jodit.container, o.jodit, o.jodit.ownerDocument, !0),
                        n = s.offset(e, o.jodit, o.jodit.ownerDocument, !0), i = s.css(e, "marginLeft"), r = 0;
                    if (n.left + n.width > t.left + t.width && (r = -(n.left + n.width - (t.left + t.width)), s.css(e, {marginLeft: r + i}), n = s.offset(e, o.jodit, o.jodit.ownerDocument, !0)), t.left > n.left && (n.left + n.width > t.left + t.width ? s.css(e, {width: t.width}) : (r = t.left - n.left, s.css(e, {marginLeft: r + i}))), r) {
                        var a = e.querySelector(".jodit_popup_triangle");
                        a && (a.style.marginLeft = -r + "px")
                    }
                }, o.listenEvents = "changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart", o.initEvents = function () {
                    o.jodit.events.on(o.jodit.ownerWindow, "mousedown touchend", o.closeAll).on(o, "afterOpenPopup", o.afterOpen).on(o.listenEvents, o.checkActiveButtons).on("afterSetMode focus", o.immedateCheckActiveButtons)
                }, o.initEvents(), o
            }

            return n(t, e), t.prototype.getButtonsList = function () {
                return this.__buttons.map(function (e) {
                    return e instanceof p ? e.control.name : ""
                }).filter(function (e) {
                    return "" !== e
                })
            }, t.prototype.appendChild = function (e) {
                this.__buttons.push(e), e.parentToolbar = this, this.container.appendChild(e.container)
            }, t.prototype.removeChild = function (e) {
                var t = this.__buttons.indexOf(e);
                -1 !== t && (this.__buttons.splice(t, 1), e.container.parentNode === this.container && this.container.removeChild(e.container)), e.parentToolbar = null
            }, t.prototype.build = function (e, t, o) {
                var n = this, i = !1;
                this.clear(), ("string" == typeof e ? e.split(/[,\s]+/) : e).map(this.__getControlType).forEach(function (e) {
                    var t = null;
                    if (-1 === n.jodit.options.removeButtons.indexOf(e.name)) {
                        switch (e.name) {
                            case"\n":
                                t = new h(n.jodit);
                                break;
                            case"|":
                                i || (i = !0, t = new m(n.jodit));
                                break;
                            default:
                                i = !1, t = new p(n.jodit, e, o)
                        }
                        t && n.appendChild(t)
                    }
                }), this.container.parentNode !== t && t.appendChild(this.container), this.immedateCheckActiveButtons()
            }, t.prototype.clear = function () {
                var e = this;
                this.__buttons.slice().forEach(function (t) {
                    e.removeChild(t), t.destruct()
                }), this.__buttons.length = 0
            }, t.prototype.destruct = function () {
                e.prototype.destruct.call(this), this.jodit.events.off(this.jodit.ownerWindow, "mousedown touchstart", this.closeAll).off(this, "afterOpenPopup", this.afterOpen).off(this.listenEvents, this.checkActiveButtons).off("afterSetMode focus", this.immedateCheckActiveButtons), this.clear()
            }, t
        }(c);
        t.ToolbarCollection = g
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(4), r = o(13), s = o(9), a = o(3), l = o(11), c = o(2), d = o(0), u = o(0), p = o(1), f = o(5),
            h = o(28), m = o(16), v = o(17);
        t.Jodit = function (e) {
            function t(o, n) {
                var i = e.call(this) || this;
                if (i.version = "3.1.92", i.components = [], i.storage = new m.Storage(new m.localStorageProvider), i.iframe = null, i.__plugins = {}, i.__defaultStyleDisplayKey = "data-jodit-default-style-display", i.__defaultClassesKey = "data-jodit-default-classes", i.isDestructed = !1, i.commands = {}, i.__selectionLocked = null, i.isLockedNotBy = function (e) {
                    return i.isLocked() && i.__whoLocked !== e
                }, i.mode = c.MODE_WYSIWYG, i.getVersion = function () {
                    return i.version
                }, i.buffer = {}, i.options = new p.OptionsDefault(n), i.editorDocument = i.options.ownerDocument, i.editorWindow = i.options.ownerWindow, i.ownerDocument = i.options.ownerDocument, i.ownerWindow = i.options.ownerWindow, i.events = new l.EventsNative(i.ownerDocument), "string" == typeof o) try {
                    i.element = i.ownerDocument.querySelector(o)
                } catch (e) {
                    throw Error('String "' + o + '" should be valid HTML selector')
                } else i.element = o;
                if (!i.element || "object" != typeof i.element || i.element.nodeType !== Node.ELEMENT_NODE || !i.element.cloneNode) throw Error('Element "' + o + '" should be string or HTMLElement instance');
                i.options.events && Object.keys(i.options.events).forEach(function (e) {
                    i.events.on(e, i.options.events[e])
                }), i.selection = new r.Select(i), i.uploader = new s.Uploader(i), i.observer = new v.Observer(i), i.container = d.dom('<div contenteditable="false" class="jodit_container" />', i.ownerDocument);
                var a = null;
                i.options.inline && (-1 === ["TEXTAREA", "INPUT"].indexOf(i.element.nodeName) && (i.container = i.element, i.element.setAttribute(i.__defaultClassesKey, "" + i.element.className), a = i.container.innerHTML, i.container.innerHTML = ""), i.container.classList.add("jodit_inline"), i.container.classList.add("jodit_container")), i.container.classList.add("jodit_" + (i.options.theme || "default") + "_theme"), i.options.zIndex && (i.container.style.zIndex = "" + parseInt("" + i.options.zIndex, 10)), i.workplace = d.dom('<div contenteditable="false" class="jodit_workplace" />', i.ownerDocument), i.progress_bar = d.dom('<div class="jodit_progress_bar"><div></div></div>', i.ownerDocument), i.toolbar = new f.ToolbarCollection(i), i.options.toolbar && i.toolbar.build(d.splitArray(i.options.buttons).concat(i.options.extraButtons), i.container), i.container.classList.add("jodit_toolbar_size-" + (-1 !== ["middle", "large", "small"].indexOf(i.options.toolbarButtonSize.toLowerCase()) ? i.options.toolbarButtonSize.toLowerCase() : "middle")), i.options.textIcons && i.container.classList.add("jodit_text_icons"), i.events.on(i.ownerWindow, "resize", function () {
                    i.events && i.events.fire("resize")
                }), i.container.appendChild(i.workplace), i.statusbar = new h.StatusBar(i, i.container), i.workplace.appendChild(i.progress_bar), i.element.parentNode && i.element !== i.container && i.element.parentNode.insertBefore(i.container, i.element), i.helper = u, i.id = i.element.getAttribute("id") || "" + (new Date).getTime(), i.initPlugines(), i.__createEditor(), i.element !== i.container ? i.setElementValue() : null !== a && i.setEditorValue(a), t.instances[i.id] = i;
                var g = i.options.defaultMode;
                if (i.options.saveModeInStorage) {
                    var _ = i.storage.get("jodit_default_mode");
                    null !== _ && (g = parseInt(_, 10))
                }
                i.setMode(g), i.options.readonly && i.setReadOnly(!0);
                try {
                    i.editorDocument.execCommand("defaultParagraphSeparator", !1, i.options.enter.toLowerCase())
                } catch (e) {
                }
                try {
                    i.editorDocument.execCommand("enableObjectResizing", !1, !1)
                } catch (e) {
                }
                try {
                    i.editorDocument.execCommand("enableInlineTableEditing", !1, !1)
                } catch (e) {
                }
                return i.events.fire("afterInit", i), i
            }

            return n(t, e), t.prototype.initPlugines = function () {
                var e = this,
                    o = Array.isArray(this.options.disablePlugins) ? this.options.disablePlugins.map(function (e) {
                        return e.toLowerCase()
                    }) : this.options.disablePlugins.toLowerCase().split(/[\s,]+/);
                Object.keys(t.plugins).forEach(function (n) {
                    -1 === o.indexOf(n.toLowerCase()) && (e.__plugins[n] = new t.plugins[n](e))
                })
            }, t.prototype.__createEditor = function () {
                var e = this;
                !1 !== this.events.fire("createEditor") && (this.editor = d.dom('<div class="jodit_wysiwyg" contenteditable aria-disabled="false" tabindex="' + this.options.tabIndex + '"></div>', this.ownerDocument), this.workplace.appendChild(this.editor)), this.options.editorCssClass && this.editor.classList.add(this.options.editorCssClass), this.events.on("synchro", function () {
                    e.setEditorValue()
                }).on(this.editor, "selectionchange selectionstart keydown keyup keypress mousedown mouseup mousepress click copy cut dragstart drop dragover paste resize touchstart touchend focus blur", function (t) {
                    if (!e.options.readonly && e.events && e.events.fire) {
                        if (!1 === e.events.fire(t.type, t)) return !1;
                        e.setEditorValue()
                    }
                }), this.options.spellcheck && this.editor.setAttribute("spellcheck", "true"), this.options.direction && (this.editor.style.direction = "rtl" === this.options.direction.toLowerCase() ? "rtl" : "ltr"), this.element !== this.container && (this.element.style.display && this.element.setAttribute(this.__defaultStyleDisplayKey, this.element.style.display), this.element.style.display = "none"), this.options.triggerChangeEvent && this.events.on("change", d.debounce(function () {
                    e.events.fire(e.element, "change")
                }, this.defaultTimeout))
            }, t.prototype.destruct = function () {
                var e = this;
                if (!this.isDestructed && (this.isDestructed = !0, !1 !== this.events.fire("beforeDestruct") && this.editor)) {
                    var o = this.value;
                    this.element !== this.container ? this.element.hasAttribute(this.__defaultStyleDisplayKey) ? (this.element.style.display = this.element.getAttribute(this.__defaultStyleDisplayKey), this.element.removeAttribute(this.__defaultStyleDisplayKey)) : this.element.style.display = "" : this.element.hasAttribute(this.__defaultClassesKey) && (this.element.className = this.element.getAttribute(this.__defaultClassesKey) || "", this.element.removeAttribute(this.__defaultClassesKey)), this.element.hasAttribute("style") && !this.element.getAttribute("style") && this.element.removeAttribute("style"), Object.keys(this.__plugins).forEach(function (t) {
                        void 0 !== e.__plugins && void 0 !== e.__plugins[t] && void 0 !== e.__plugins[t].destruct && "function" == typeof e.__plugins[t].destruct && e.__plugins[t].destruct(), delete e.__plugins[t]
                    }), this.components.forEach(function (e) {
                        void 0 !== e.destruct && "function" == typeof e.destruct && e.destruct()
                    }), delete this.selection, this.events.off(this.ownerWindow), this.events.off(this.ownerDocument), this.events.off(this.ownerDocument.body), this.events.off(this.element), this.events.off(this.editor), this.events.destruct(), delete this.events, this.workplace.parentNode && this.workplace.parentNode.removeChild(this.workplace), this.editor.parentNode && this.editor.parentNode.removeChild(this.editor), this.iframe && this.iframe.parentNode && this.iframe.parentNode.removeChild(this.iframe), this.container.parentNode && this.container !== this.element && this.container.parentNode.removeChild(this.container), delete this.editor, delete this.workplace, this.container === this.element && (this.element.innerHTML = o), delete t.instances[this.id], delete this.container
                }
            }, t.prototype.getElementValue = function () {
                return void 0 !== this.element.value ? this.element.value : this.element.innerHTML
            }, t.prototype.getNativeEditorValue = function () {
                return this.editor ? this.editor.innerHTML : this.getElementValue()
            }, t.prototype.getEditorValue = function (e) {
                void 0 === e && (e = !0);
                var t;
                if (void 0 !== (t = this.events.fire("beforeGetValueFromEditor"))) return t;
                t = this.getNativeEditorValue().replace(c.INVISIBLE_SPACE_REG_EXP, ""), e && (t = t.replace(/<span[^>]+id="jodit_selection_marker_[^>]+><\/span>/g, "")), "<br>" === t && (t = "");
                var o = {value: t};
                return this.events.fire("afterGetValueFromEditor", o), o.value
            }, t.prototype.getEditorText = function () {
                if (this.editor) return this.editor.innerText;
                var e = this.ownerDocument.createElement("div");
                return e.innerHTML = this.getElementValue(), e.innerText
            }, t.prototype.setElementValue = function (e) {
                if ("string" != typeof e && void 0 !== e) throw Error("value must be string");
                void 0 !== e ? this.element !== this.container && (void 0 !== this.element.value ? this.element.value = e : this.element.innerHTML = e) : e = this.getElementValue(), e !== this.getEditorValue() && this.setEditorValue(e)
            }, t.prototype.setEditorValue = function (e) {
                if (this.editor) {
                    if ("string" != typeof e && void 0 !== e) throw Error("value must be string");
                    void 0 !== e && this.editor.innerHTML !== e && (this.editor.innerHTML = e);
                    var t = this.getElementValue(), o = this.getEditorValue();
                    t !== o && (this.setElementValue(o), this.events.fire("change", o, t))
                }
            }, Object.defineProperty(t.prototype, "value", {
                get: function () {
                    return this.getEditorValue()
                }, set: function (e) {
                    this.setEditorValue(e)
                }, enumerable: !0, configurable: !0
            }), t.prototype.execCustomCommands = function (e, t, o) {
                var n = this;
                if (void 0 === t && (t = !1), void 0 === o && (o = null), e = e.toLowerCase(), void 0 !== this.commands[e]) {
                    var i = void 0;
                    return this.commands[e].forEach(function (r) {
                        var s;
                        s = "function" == typeof r ? r : r.exec;
                        var a = s.call(n, e, t, o);
                        void 0 !== a && (i = a)
                    }), i
                }
            }, t.prototype.registerCommand = function (e, t) {
                var o = this, n = e.toLowerCase();
                if (void 0 === this.commands[n] && (this.commands[n] = []), this.commands[n].push(t), "function" != typeof t) {
                    var i = this.options.commandToHotkeys[n] || this.options.commandToHotkeys[e] || t.hotkeys;
                    i && this.events.off(d.asArray(i).map(function (e) {
                        return e + ".hotkey"
                    }).join(" ")).on(d.asArray(i).map(function (e) {
                        return e + ".hotkey"
                    }).join(" "), function () {
                        return o.execCommand(n)
                    })
                }
            }, t.prototype.execCommand = function (e, t, o) {
                if (void 0 === t && (t = !1), void 0 === o && (o = null), !this.options.readonly || "selectall" === e) {
                    var n;
                    if (e = e.toLowerCase(), n = this.events.fire("beforeCommand", e, t, o), !1 !== n && (n = this.execCustomCommands(e, t, o)), !1 !== n) switch (this.selection.focus(), e) {
                        case"selectall":
                            this.selection.select(this.editor, !0);
                            break;
                        default:
                            try {
                                n = this.editorDocument.execCommand(e, t, o)
                            } catch (e) {
                            }
                    }
                    return this.events.fire("afterCommand", e, t, o), this.setEditorValue(), n
                }
            }, t.prototype.lock = function (e) {
                void 0 === e && (e = "any"), this.isLocked() || (this.__whoLocked = e, this.__selectionLocked = this.selection.save(), this.editor.classList.add("jodit_disabled"))
            }, t.prototype.unlock = function () {
                this.isLocked() && (this.__whoLocked = "", this.editor.classList.remove("jodit_disabled"), this.__selectionLocked && this.selection.restore(this.__selectionLocked))
            }, t.prototype.getMode = function () {
                return this.mode
            }, t.prototype.isEditorMode = function () {
                return this.getRealMode() === c.MODE_WYSIWYG
            }, t.prototype.getRealMode = function () {
                return this.getMode() !== c.MODE_SPLIT ? this.getMode() : a.Dom.isOrContains(this.editor, this.ownerDocument.activeElement) || a.Dom.isOrContains(this.toolbar.container, this.ownerDocument.activeElement) ? c.MODE_WYSIWYG : c.MODE_SOURCE
            }, t.prototype.setMode = function (e) {
                var t = this, o = this.getMode(), n = {mode: parseInt("" + e, 10)},
                    i = ["jodit_wysiwyg_mode", "jodit_source_mode", "jodit_split_mode"];
                !1 !== this.events.fire("beforeSetMode", n) && (this.mode = d.inArray(n.mode, [c.MODE_SOURCE, c.MODE_WYSIWYG, c.MODE_SPLIT]) ? n.mode : c.MODE_WYSIWYG, this.options.saveModeInStorage && this.storage.set("jodit_default_mode", this.mode), i.forEach(function (e) {
                    t.container.classList.remove(e)
                }), this.container.classList.add(i[this.mode - 1]), o !== this.getMode() && this.events.fire("afterSetMode"))
            }, t.prototype.toggleMode = function () {
                var e = this.getMode();
                d.inArray(e + 1, [c.MODE_SOURCE, c.MODE_WYSIWYG, this.options.useSplitMode ? c.MODE_SPLIT : 9]) ? e += 1 : e = c.MODE_WYSIWYG, this.setMode(e)
            }, t.prototype.i18n = function (e) {
                for (var o = this, n = [], i = 1; arguments.length > i; i++) n[i - 1] = arguments[i];
                var r, s = void 0 !== this.options && this.options.debugLanguage, a = function (e) {
                        return n.length ? d.sprintf.apply(o, [e].concat(n)) : e
                    },
                    l = "auto" === t.defaultOptions.language ? d.defaultLanguage(t.defaultOptions.language) : t.defaultOptions.language,
                    c = d.defaultLanguage(this.options ? this.options.language : l);
                return r = void 0 !== this.options && void 0 !== t.lang[c] ? t.lang[c] : void 0 !== t.lang[l] ? t.lang[l] : t.lang.en, void 0 !== this.options && void 0 !== this.options.i18n[c] && this.options.i18n[c][e] ? a(this.options.i18n[c][e]) : "string" == typeof r[e] && r[e] ? a(r[e]) : s ? "{" + e + "}" : a("string" == typeof t.lang.en[e] && t.lang.en[e] ? t.lang.en[e] : e)
            }, t.prototype.setReadOnly = function (e) {
                this.options.readonly = e, e ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.events && this.events.fire("readonly", e)
            }, t.prototype.getReadOnly = function () {
                return this.options.readonly
            }, t.prototype.toggleFullSize = function (e) {
                void 0 === e && (e = !this.__isFullSize), e !== this.__isFullSize && (this.__isFullSize = e, this.events && this.events.fire("toggleFullSize", e))
            }, Object.defineProperty(t.prototype, "defaultTimeout", {
                get: function () {
                    return this.options && this.options.observer ? this.options.observer.timeout : t.defaultOptions.observer.timeout
                }, enumerable: !0, configurable: !0
            }), t.Array = function (e) {
                return new d.JoditArray(e)
            }, t.Object = function (e) {
                return new d.JoditObject(e)
            }, t.plugins = {}, t.modules = {}, t.instances = {}, t.lang = {}, t
        }(i.Component)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }(), i = this && this.__assign || Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; n > o; o++) {
                t = arguments[o];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = o(6), s = o(4), a = o(1), l = o(0), c = o(5), d = o(2), u = o(11);
        a.Config.prototype.dialog = {zIndex: 100002, resizable: !0, draggable: !0, fullsize: !1, fullsizeButton: !1};
        var p = function (e) {
            function t(t, o) {
                void 0 === o && (o = {});
                var n = e.call(this, t) || this;
                n.lockSelect = function () {
                    n.dialogbox.classList.add("jodit_dialog_box-moved")
                }, n.unlockSelect = function () {
                    n.dialogbox.classList.remove("jodit_dialog_box-moved")
                }, n.destinition = document.body, n.document = document, n.window = window, n.destroyAfterClose = !1, n.moved = !1, n.iSetMaximization = !1, n.resizeble = !1, n.draggable = !1, n.startX = 0, n.startY = 0, n.startPoint = {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0
                }, n.__isDestructed = !1, n.close = function (e) {
                    n.__isDestructed || (e && (e.stopImmediatePropagation(), e.preventDefault()), n.jodit && n.jodit.events && n.jodit.events.fire(n, "beforeClose"), n.dialogbox.classList && n.dialogbox.classList.remove("active"), n.iSetMaximization && n.maximization(!1), n.destroyAfterClose && n.destruct(), n.jodit && n.jodit.events && n.jodit.events.fire(n, "afterClose"))
                }, t && t instanceof r.Jodit && (n.window = t.ownerWindow, n.document = t.ownerDocument, t.events.on("beforeDestruct", function () {
                    n.destruct()
                })), n.events = t && t.events ? t.events : new u.EventsNative;
                var s = n;
                s.options = t && t.options ? t.options.dialog : a.Config.prototype.dialog, s.options = i({}, s.options, o), s.dialogbox = l.dom('<div style="z-index:' + s.options.zIndex + '" class="jodit jodit_dialog_box"><div class="jodit_dialog_overlay"></div><div class="jodit_dialog"><div class="jodit_dialog_header non-selected"><div class="jodit_dialog_header-title"></div><a href="javascript:void(0)" title="Close" class="jodit_dialog_header-button jodit_close">' + (r.Jodit.modules.Toolbar ? r.Jodit.modules.ToolbarIcon.getIcon("cancel") : "&times;") + '</a></div><div class="jodit_dialog_content"></div><div class="jodit_dialog_footer"></div>' + (s.options.resizable ? '<div class="jodit_dialog_resizer"></div>' : "") + "</div></div>", n.document), t && t.id && s.dialogbox.setAttribute("data-editor_id", t.id), Object.defineProperty(s.dialogbox, "__jodit_dialog", {value: s}), s.dialog = s.dialogbox.querySelector(".jodit_dialog"), s.resizer = s.dialogbox.querySelector(".jodit_dialog_resizer"), s.jodit && s.jodit.options && s.jodit.options.textIcons && s.dialogbox.classList.add("jodit_text_icons"), s.dialogbox_header = s.dialogbox.querySelector(".jodit_dialog_header>.jodit_dialog_header-title"), s.dialogbox_content = s.dialogbox.querySelector(".jodit_dialog_content"), s.dialogbox_footer = s.dialogbox.querySelector(".jodit_dialog_footer"), s.dialogbox_close = s.dialogbox.querySelector(".jodit_dialog_header>a.jodit_close"), s.dialogbox_fullsize = l.dom('<a href="javascript:void(0)" class="jodit_dialog_header-button jodit_dialog_header_fullsize">' + c.ToolbarIcon.getIcon(o.fullsize ? "shrink" : "fullsize") + "</a>", n.document), s.destinition.appendChild(s.dialogbox), s.dialogbox.addEventListener("close_dialog", s.close), s.dialogbox_close.addEventListener("mousedown", s.close), s.dialogbox_fullsize.addEventListener("click", function () {
                    var e = s.maximization();
                    s.dialogbox_fullsize.innerHTML = c.ToolbarIcon.getIcon(e ? "shrink" : "fullsize")
                }), s.events.on(n.window, "mousemove", s.onMouseMove.bind(s)).on(n.window, "mouseup", s.onMouseUp.bind(s)).on(n.window, "keydown", s.onKeyDown.bind(s)).on(n.window, "resize", s.onResize.bind(s));
                var d = s.dialogbox.querySelector(".jodit_dialog_header");
                return d && d.addEventListener("mousedown", s.onHeaderMouseDown.bind(s)), s.options.resizable && s.resizer.addEventListener("mousedown", s.onResizerMouseDown.bind(s)), n
            }

            return n(t, e), t.prototype.setSize = function (e, t) {
                e && l.css(this.dialog, "width", e), t && l.css(this.dialog, "height", t)
            }, t.prototype.setPosition = function (e, t) {
                var o = this.window.innerWidth, n = this.window.innerHeight, i = o / 2 - this.dialog.offsetWidth / 2,
                    r = n / 2 - this.dialog.offsetHeight / 2;
                void 0 !== e && void 0 !== t && (this.offsetX = e, this.offsetY = t, this.moved = Math.abs(e - i) > 100 || Math.abs(t - r) > 100), this.dialog.style.left = (e || i) + "px", this.dialog.style.top = (t || r) + "px"
            }, t.prototype.setElements = function (e, t) {
                var o = this, n = [];
                l.asArray(t).forEach(function (t) {
                    var i = l.dom(t, o.document);
                    n.push(i), i.parentNode !== e && e.appendChild(i)
                }), [].slice.call(e.childNodes).forEach(function (t) {
                    -1 === n.indexOf(t) && e.removeChild(t)
                })
            }, t.prototype.setTitle = function (e) {
                this.setElements(this.dialogbox_header, e)
            }, t.prototype.setContent = function (e) {
                this.setElements(this.dialogbox_content, e)
            }, t.prototype.setFooter = function (e) {
                this.setElements(this.dialogbox_footer, e), this.dialog.classList.toggle("with_footer", !!e)
            }, t.prototype.getZIndex = function () {
                return parseInt(this.dialogbox.style.zIndex || "0", 10)
            }, t.prototype.getMaxZIndexDialog = function () {
                var e, t, o = 0, n = this;
                return l.$$(".jodit_dialog_box", this.destinition).forEach(function (i) {
                    e = i.__jodit_dialog, t = parseInt(l.css(i, "zIndex"), 10), e.isOpened() && !isNaN(t) && t > o && (n = e, o = t)
                }), n
            }, t.prototype.setMaxZIndex = function () {
                var e = 0, t = 0;
                l.$$(".jodit_dialog_box", this.destinition).forEach(function (o) {
                    t = parseInt(l.css(o, "zIndex"), 10), e = Math.max(isNaN(t) ? 0 : t, e)
                }), this.dialogbox.style.zIndex = "" + (e + 1)
            }, t.prototype.maximization = function (e) {
                return "boolean" != typeof e && (e = !this.dialogbox.classList.contains("jodit_dialog_box-fullsize")), this.dialogbox.classList.toggle("jodit_dialog_box-fullsize", e), [this.destinition, this.destinition.parentNode].forEach(function (t) {
                    t && t.classList && t.classList.toggle("jodit_fullsize_box", e)
                }), this.iSetMaximization = e, e
            }, t.prototype.open = function (e, t, o, n) {
                this.jodit && this.jodit.events && !1 === this.jodit.events.fire(this, "beforeOpen") || (this.destroyAfterClose = !0 === o, this.options.fullsizeButton && this.dialogbox_close.parentNode && this.dialogbox_close.parentNode.appendChild(this.dialogbox_fullsize), void 0 !== t && this.setTitle(t), e && this.setContent(e), this.dialogbox.classList.add("active"), n && this.dialogbox.classList.add("jodit_modal"), this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex(), this.options.fullsize && this.maximization(!0), this.jodit && this.jodit.events && this.jodit.events.fire(this, "afterOpen"))
            }, t.prototype.isOpened = function () {
                return !this.__isDestructed && this.dialogbox.classList.contains("active")
            }, t.prototype.onMouseUp = function () {
                (this.draggable || this.resizeble) && (this.draggable = !1, this.resizeble = !1, this.unlockSelect(), this.jodit && this.jodit.events && this.jodit.events.fire(this, "endResize endMove"))
            }, t.prototype.onHeaderMouseDown = function (e) {
                var t = e.target;
                !this.options.draggable || t && t.nodeName.match(/^(INPUT|SELECT)$/) || (this.draggable = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.x = l.css(this.dialog, "left"), this.startPoint.y = l.css(this.dialog, "top"), this.setMaxZIndex(), e.preventDefault(), this.lockSelect(), this.jodit && this.jodit.events && this.jodit.events.fire(this, "startMove"))
            }, t.prototype.onMouseMove = function (e) {
                this.draggable && this.options.draggable && (this.setPosition(this.startPoint.x + e.clientX - this.startX, this.startPoint.y + e.clientY - this.startY), this.jodit && this.jodit.events && this.jodit.events.fire(this, "move", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation(), e.preventDefault()), this.resizeble && this.options.resizable && (this.setSize(this.startPoint.w + e.clientX - this.startX, this.startPoint.h + e.clientY - this.startY), this.jodit && this.jodit.events && this.jodit.events.fire(this, "resizeDialog", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation(), e.preventDefault())
            }, t.prototype.onKeyDown = function (e) {
                if (this.isOpened() && e.which === d.KEY_ESC) {
                    var t = this.getMaxZIndexDialog();
                    t ? t.close() : this.close(), e.stopImmediatePropagation()
                }
            }, t.prototype.onResize = function () {
                !this.options.resizable || this.moved || !this.isOpened() || this.offsetX || this.offsetY || this.setPosition()
            }, t.prototype.destruct = function () {
                this.__isDestructed || (this.dialogbox && this.dialogbox.parentNode && this.dialogbox.parentNode.removeChild(this.dialogbox), delete this.dialogbox, this.jodit && this.jodit.events || this.events.destruct(), this.__isDestructed = !0)
            }, t.prototype.onResizerMouseDown = function (e) {
                this.resizeble = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.jodit.events && this.jodit.events.fire(this, "startResize")
            }, t
        }(s.Component);
        t.Dialog = p, t.Alert = function (e, t, o, n) {
            void 0 === n && (n = "jodit_alert"), "function" == typeof t && (o = t, t = void 0);
            var i = new p, s = l.dom('<div class="' + n + '"></div>', i.document),
                a = l.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + c.ToolbarIcon.getIcon("cancel") + "<span>" + r.Jodit.prototype.i18n("Ok") + "</span></a>", i.document);
            return s.appendChild(l.dom(e, i.document)), a.addEventListener("click", function () {
                o && "function" == typeof o && !1 === o(i) || i.close()
            }), i.setFooter([a]), i.open(s, t || "&nbsp;", !0, !0), a.focus(), i
        }, r.Jodit.Alert = t.Alert, t.Promt = function (e, t, o, n) {
            var i = new p,
                s = l.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + c.ToolbarIcon.getIcon("cancel") + "<span>" + r.Jodit.prototype.i18n("Cancel") + "</span></a>", i.document),
                a = l.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + c.ToolbarIcon.getIcon("check") + "<span>" + r.Jodit.prototype.i18n("Ok") + "</span></a>", i.document),
                d = l.dom('<form class="jodit_promt"></form>', i.document), u = l.dom("<input autofocus/>", i.document),
                f = l.dom("<label></label>", i.document);
            "function" == typeof t && (o = t, t = void 0), n && u.setAttribute("placeholder", n), f.appendChild(l.dom(e, i.document)), d.appendChild(f), d.appendChild(u), s.addEventListener("click", i.close, !1);
            var h = function () {
                o && "function" == typeof o && !1 === o(u.value) || i.close()
            };
            return a.addEventListener("click", h), d.addEventListener("submit", function () {
                return h(), !1
            }), i.setFooter([a, s]), i.open(d, t || "&nbsp;", !0, !0), u.focus(), i
        }, r.Jodit.Promt = t.Promt, t.Confirm = function (e, t, o) {
            var n = new p, i = l.dom('<form class="jodit_promt"></form>', n.document),
                s = l.dom("<label></label>", n.document);
            "function" == typeof t && (o = t, t = void 0), s.appendChild(l.dom(e, n.document)), i.appendChild(s);
            var a = l.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + c.ToolbarIcon.getIcon("cancel") + "<span>" + r.Jodit.prototype.i18n("Cancel") + "</span></a>", n.document);
            a.addEventListener("click", function () {
                o && o(!1), n.close()
            });
            var d = function () {
                    o && o(!0), n.close()
                },
                u = l.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + c.ToolbarIcon.getIcon("check") + "<span>" + r.Jodit.prototype.i18n("Yes") + "</span></a>", n.document);
            return u.addEventListener("click", d), i.addEventListener("submit", function () {
                return d(), !1
            }), n.setFooter([u, a]), n.open(i, t || "&nbsp;", !0, !0), u.focus(), n
        }, r.Jodit.Confirm = t.Confirm
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(4);
        t.Plugin = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return t.events.on("afterInit", o.afterInit.bind(o, t)).on("beforeDestruct", o.beforeDestruct.bind(o, t)), o
            }

            return n(t, e), t.prototype.beforeDestruct = function (e) {
            }, t
        }(i.Component)
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(6), i = o(14), r = o(1), s = o(0), a = o(2), l = o(13);
        r.Config.prototype.enableDragAndDropFileToEditor = !0, r.Config.prototype.uploader = {
            url: "",
            insertImageAsBase64URI: !1,
            imagesExtensions: ["jpg", "png", "jpeg", "gif"],
            headers: null,
            data: null,
            format: "json",
            prepareData: function (e) {
                return e
            },
            isSuccess: function (e) {
                return e.success
            },
            getMessage: function (e) {
                return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join(" ") : ""
            },
            process: function (e) {
                return e.data
            },
            error: function (e) {
                this.jodit.events.fire("errorMessage", e.message, "error", 4e3)
            },
            defaultHandlerSuccess: function (e) {
                var t = this;
                e.files && e.files.length && e.files.forEach(function (o, n) {
                    var i = e.isImages && e.isImages[n] ? ["img", "src"] : ["a", "href"], r = i[0], s = i[1],
                        a = t.jodit.editorDocument.createElement(r);
                    a.setAttribute(s, e.baseurl + o), "a" === r && (a.innerText = e.baseurl + o), "img" === r ? t.selection.insertImage(a) : t.selection.insertNode(a)
                })
            },
            defaultHandlerError: function (e) {
                this.jodit.events.fire("errorMessage", e.message)
            },
            contentType: function (e) {
                return (void 0 === this.jodit.ownerWindow.FormData || "string" == typeof e) && "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }, t.Uploader = function () {
            function e(e, t) {
                var o = this;
                this.path = "", this.source = "default", this.jodit = e, this.selection = e instanceof n.Jodit ? e.selection : new l.Select(e), this.options = s.extend(!0, {}, r.Config.prototype.uploader, e instanceof n.Jodit ? e.options.uploader : null, t), e instanceof n.Jodit && e.options.enableDragAndDropFileToEditor && e.options.uploader && (e.options.uploader.url || e.options.uploader.insertImageAsBase64URI) && e.events.on("afterInit", function () {
                    o.bind(e.editor)
                })
            }

            return e.prototype.buildData = function (e) {
                if (this.options.buildData && "function" == typeof this.options.buildData) return this.options.buildData.call(this, e);
                if (void 0 !== this.jodit.ownerWindow.FormData) {
                    if (e instanceof FormData) return e;
                    if ("string" == typeof e) return e;
                    var t = new FormData;
                    return Object.keys(e).forEach(function (o) {
                        t.append(o, e[o])
                    }), t
                }
                return e
            }, e.prototype.send = function (e, t) {
                var o = this, n = this.buildData(e), r = function (e) {
                    return new i.Ajax(o.jodit || o, {
                        xhr: function () {
                            var e = new XMLHttpRequest;
                            return void 0 !== o.jodit.ownerWindow.FormData && e.upload ? e.upload.addEventListener("progress", function (e) {
                                if (e.lengthComputable) {
                                    var t = e.loaded / e.total;
                                    t *= 100, o.jodit.progress_bar.style.display = "block", o.jodit.progress_bar.style.width = t + "%", 100 === t && (o.jodit.progress_bar.style.display = "none")
                                }
                            }, !1) : o.jodit.progress_bar.style.display = "none", e
                        },
                        method: "POST",
                        data: e,
                        url: o.options.url,
                        headers: o.options.headers,
                        queryBuild: o.options.queryBuild,
                        contentType: o.options.contentType.call(o, e),
                        dataType: o.options.format || "json"
                    }).send().then(t).catch(function (e) {
                        o.options.error.call(o, e)
                    })
                };
                return n instanceof Promise ? n.then(r).catch(function (e) {
                    o.options.error.call(o, e)
                }) : r(n)
            }, e.prototype.sendFiles = function (e, t, o, n) {
                var i = this;
                if (!e) return Promise.reject(Error("Need files"));
                var r = this, a = [].slice.call(e);
                if (!a.length) return Promise.reject(Error("Need files"));
                var l = [];
                if (this.options.insertImageAsBase64URI) {
                    var c, d = void 0, u = this;
                    for (d = 0; a.length > d; d += 1) !function () {
                        if ((c = a[d]) && c.type) {
                            var e = c.type.match(/\/([a-z0-9]+)/i), o = e[1] ? e[1].toLowerCase() : "";
                            if (-1 !== u.options.imagesExtensions.indexOf(o)) {
                                var n = new FileReader;
                                l.push(new Promise(function (e, o) {
                                    n.onerror = o, n.onloadend = function () {
                                        var o = {baseurl: "", files: [n.result], isImages: [!0]};
                                        "function" == typeof (t || r.options.defaultHandlerSuccess) && (t || r.options.defaultHandlerSuccess).call(r, o), e(o)
                                    }, n.readAsDataURL(c)
                                })), a[d] = null
                            }
                        }
                    }()
                }
                if (a = a.filter(function (e) {
                    return e
                }), a.length) {
                    var p = new FormData;
                    p.append("path", r.path), p.append("source", r.source);
                    for (var f = void 0, d = 0; a.length > d; d += 1) if ((f = a[d]) && f.type) {
                        var h = f.type.match(/\/([a-z0-9]+)/i), m = h[1] ? h[1].toLowerCase() : "";
                        p.append("files[" + d + "]", a[d], a[d].name || ("" + Math.random()).replace(".", "") + "." + m)
                    }
                    n && n(p), r.options.data && s.isPlainObject(r.options.data) && Object.keys(r.options.data).forEach(function (e) {
                        p.append(e, r.options.data[e])
                    }), r.options.prepareData.call(this, p), l.push(r.send(p, function (e) {
                        if (!i.options.isSuccess.call(r, e)) return void (o || r.options.defaultHandlerError).call(r, Error(r.options.getMessage.call(r, e)));
                        "function" == typeof (t || r.options.defaultHandlerSuccess) && (t || r.options.defaultHandlerSuccess).call(r, r.options.process.call(r, e))
                    }).then(function () {
                        i.jodit.events && i.jodit.events.fire("filesWereUploaded")
                    }))
                }
                return Promise.all(l)
            }, e.prototype.setPath = function (e) {
                this.path = e
            }, e.prototype.setSource = function (e) {
                this.source = e
            }, e.dataURItoBlob = function (e) {
                var t, o = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0],
                    i = new ArrayBuffer(o.length), r = new Uint8Array(i);
                for (t = 0; o.length > t; t += 1) r[t] = o.charCodeAt(t);
                return new Blob([r], {type: n})
            }, e.prototype.bind = function (t, o, i) {
                var r = this, l = this, c = function (t) {
                    var c, d, u, p = function (e) {
                        d && (e.append("extension", u), e.append("mimetype", d.type))
                    };
                    if (t.clipboardData && t.clipboardData.files && t.clipboardData.files.length) return r.sendFiles(t.clipboardData.files, o, i), !1;
                    if (s.browser("ff") || s.isIE()) {
                        if (t.clipboardData && !t.clipboardData.types.length && t.clipboardData.types[0] !== a.TEXT_PLAIN) {
                            var f = s.dom('<div tabindex="-1" style="left: -9999px; top: 0; width: 0; height: 100%; line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;" contenteditable="true"></div>', r.jodit.ownerDocument);
                            r.jodit.ownerDocument.body.appendChild(f);
                            var h = r.jodit && r.jodit instanceof n.Jodit ? r.jodit.selection.save() : null,
                                m = function () {
                                    return h && r.jodit && r.jodit instanceof n.Jodit && r.jodit.selection.restore(h)
                                };
                            f.focus(), setTimeout(function () {
                                var t = f.firstChild;
                                if (f.parentNode && f.parentNode.removeChild(f), t && t.hasAttribute("src")) {
                                    var n = t.getAttribute("src") || "";
                                    m(), l.sendFiles([e.dataURItoBlob(n)], o, i)
                                }
                            }, 200)
                        }
                    } else if (t.clipboardData && t.clipboardData.items && t.clipboardData.items.length) for (c = 0; t.clipboardData.items.length > c; c += 1) if ("file" === t.clipboardData.items[c].kind && "image/png" === t.clipboardData.items[c].type) {
                        if (d = t.clipboardData.items[c].getAsFile()) {
                            var v = d.type.match(/\/([a-z0-9]+)/i);
                            u = v[1] ? v[1].toLowerCase() : "", r.sendFiles([d], o, i, p)
                        }
                        t.preventDefault();
                        break
                    }
                };
                this.jodit && this.jodit.editor !== t ? l.jodit.events.on(t, "paste", c) : l.jodit.events.on("beforePaste", c);
                var d = function (e) {
                    return e.dataTransfer && e.dataTransfer.files && 0 !== e.dataTransfer.files.length
                };
                l.jodit.events.on(t, "dragend dragover dragenter dragleave drop", function (e) {
                    e.preventDefault()
                }).on(t, "dragover", function (e) {
                    d(e) && (t.classList.contains("jodit_draghover") || t.classList.add("jodit_draghover"), e.preventDefault())
                }).on(t, "dragend", function (e) {
                    d(e) && (t.classList.contains("jodit_draghover") && t.classList.remove("jodit_draghover"), e.preventDefault())
                }).on(t, "drop", function (e) {
                    t.classList.remove("jodit_draghover"), d(e) && (e.preventDefault(), e.stopImmediatePropagation(), r.sendFiles(e.dataTransfer.files, o, i))
                });
                var u = t.querySelector("input[type=file]");
                u && l.jodit.events.on(u, "change", function () {
                    l.sendFiles(this.files, o, i).then(function () {
                        u.value = "", /safari/i.test(navigator.userAgent) || (u.type = "", u.type = "file")
                    })
                })
            }, e.prototype.uploadRemoteImage = function (e, t, o) {
                var n = this, i = this;
                i.send({action: "fileUploadRemote", url: e}, function (e) {
                    if (i.options.isSuccess.call(i, e)) "function" == typeof t ? t.call(i, n.options.process.call(n, e)) : n.options.defaultHandlerSuccess.call(i, n.options.process.call(n, e)); else if ("function" == typeof (o || i.options.defaultHandlerError)) return void (o || n.options.defaultHandlerError).call(i, Error(i.options.getMessage.call(n, e)))
                })
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(6), i = o(0), r = o(3), s = o(9);
        !function (e) {
            e.ColorPickerWidget = function (e, t, o) {
                var s = i.normalizeColor(o), a = i.dom('<div class="jodit_colorpicker"></div>', e.ownerDocument),
                    l = e.options.textIcons ? "" : n.Jodit.modules.ToolbarIcon.getIcon("eye"),
                    c = e.options.textIcons ? "<span>" + e.i18n("eraser") + "</span>" : n.Jodit.modules.ToolbarIcon.getIcon("eraser"),
                    d = function (e) {
                        var t = [];
                        return i.isPlainObject(e) ? Object.keys(e).forEach(function (o) {
                            t.push('<div class="jodit_colorpicker_group jodit_colorpicker_group-' + o + '">'), t.push(d(e[o])), t.push("</div>")
                        }) : Array.isArray(e) && e.forEach(function (e) {
                            t.push("<a " + (s === e ? ' class="active" ' : "") + ' title="' + e + '" style="background-color:' + e + '" data-color="' + e + '" href="javascript:void(0)">' + (s === e ? l : "") + "</a>")
                        }), t.join("")
                    };
                return a.appendChild(i.dom("<div>" + d(e.options.colors) + "</div>", e.ownerDocument)), a.appendChild(i.dom("<a " + (e.options.textIcons ? 'class="jodit_text_icon"' : "") + ' data-color="" href="javascript:void(0)">' + c + "</a>", e.ownerDocument)), e.events.on(a, "mousedown touchend", function (o) {
                    o.stopPropagation();
                    var s = o.target;
                    if ("SVG" !== s.tagName.toUpperCase() && "PATH" !== s.tagName.toUpperCase() || !s.parentNode || (s = r.Dom.closest(s.parentNode, "A", e.editor)), "A" === s.tagName.toUpperCase()) {
                        var l = a.querySelector("a.active");
                        l && (l.classList.remove("active"), l.innerHTML = "");
                        var c = s.getAttribute("data-color") || "";
                        if (c) {
                            s.innerHTML = n.Jodit.modules.ToolbarIcon.getIcon("eye"), s.classList.add("active");
                            var d = i.hexToRgb(c);
                            d && (s.firstChild.style.fill = "rgb(" + (255 - d.r) + "," + (255 - d.g) + "," + (255 - d.b) + ")")
                        }
                        t && "function" == typeof t && t(c), o.preventDefault()
                    }
                }), a
            }, e.TabsWidget = function (e, t, o) {
                var n = i.dom('<div class="jodit_tabs"></div>', e.ownerDocument),
                    r = i.dom('<div class="jodit_tabs_wrapper"></div>', e.ownerDocument),
                    s = i.dom('<div class="jodit_tabs_buttons"></div>', e.ownerDocument), a = {}, l = "", c = 0;
                return n.appendChild(s), n.appendChild(r), i.each(t, function (t, n) {
                    var d = i.dom('<div class="jodit_tab"></div>', e.ownerDocument),
                        u = i.dom('<a href="javascript:void(0);"></a>', e.ownerDocument);
                    l || (l = t), u.innerHTML = e.i18n(t), s.appendChild(u), d.appendChild("function" != typeof n ? i.dom(n, e.ownerDocument) : i.dom('<div class="jodit_tab_empty"></div>', e.ownerDocument)), r.appendChild(d), e.events.on(u, "mousedown touchend", function (a) {
                        return i.$$("a", s).forEach(function (e) {
                            e.classList.remove("active")
                        }), i.$$(".jodit_tab", r).forEach(function (e) {
                            e.classList.remove("active")
                        }), u.classList.add("active"), d.classList.add("active"), "function" == typeof n && n.call(e), a.stopPropagation(), o && (o.__activeTab = t), !1
                    }), a[t] = {button: u, tab: d}, c += 1
                }), c ? (i.$$("a", s).forEach(function (e) {
                    e.style.width = (100 / c).toFixed(10) + "%"
                }), o && o.__activeTab && a[o.__activeTab] ? (a[o.__activeTab].button.classList.add("active"), a[o.__activeTab].tab.classList.add("active")) : (a[l].button.classList.add("active"), a[l].tab.classList.add("active")), n) : n
            }, e.FileSelectorWidget = function (t, o, r, a, l) {
                void 0 === l && (l = !0);
                var c, d = {};
                if (o.upload && t.options.uploader && (t.options.uploader.url || t.options.uploader.insertImageAsBase64URI)) {
                    var u = i.dom('<div class="jodit_draganddrop_file_box"><strong>' + t.i18n(l ? "Drop image" : "Drop file") + "</strong><span><br> " + t.i18n("or click") + '</span><input type="file" accept="' + (l ? "image/*" : "*") + 'image/*" tabindex="-1" dir="auto" multiple=""/></div>', t.ownerDocument);
                    new s.Uploader(t).bind(u, function (e) {
                        "function" == typeof o.upload && o.upload.call(t, {baseurl: e.baseurl, files: e.files})
                    }, function (e) {
                        t.events.fire("errorMessage", e.message)
                    });
                    var p = t.options.textIcons ? "" : n.Jodit.modules.ToolbarIcon.getIcon("upload");
                    d[p + t.i18n("Upload")] = u
                }
                if (o.filebrowser && (t.options.filebrowser.ajax.url || t.options.filebrowser.items.url)) {
                    var p = t.options.textIcons ? "" : n.Jodit.modules.ToolbarIcon.getIcon("folder");
                    d[p + t.i18n("Browse")] = function () {
                        a && a(), o.filebrowser && t.getInstance("FileBrowser").open(o.filebrowser, l)
                    }
                }
                if (o.url) {
                    var f = i.dom('<form onsubmit="return false;" class="jodit_form"><input type="text" required name="url" placeholder="http://"/><input type="text" name="text" placeholder="' + t.i18n("Alternative text") + '"/><div style="text-align: right"><button>' + t.i18n("Insert") + "</button></div></form>", t.ownerDocument),
                        h = f.querySelector("button"), m = f.querySelector("input[name=url]");
                    c = null, r && r.nodeType !== Node.TEXT_NODE && ("IMG" === r.tagName || i.$$("img", r).length) && (c = "IMG" === r.tagName ? r : i.$$("img", r)[0], i.val(f, "input[name=url]", c.getAttribute("src")), i.val(f, "input[name=text]", c.getAttribute("alt")), h.innerText = t.i18n("Update")), r && r.nodeType !== Node.TEXT_NODE && "A" === r.nodeName && (i.val(f, "input[name=url]", r.getAttribute("href") || ""), i.val(f, "input[name=text]", r.getAttribute("title") || ""), h.innerText = t.i18n("Update")), f.addEventListener("submit", function (e) {
                        return e.preventDefault(), e.stopPropagation(), i.val(f, "input[name=url]") ? ("function" == typeof o.url && o.url.call(t, i.val(f, "input[name=url]"), i.val(f, "input[name=text]")), !1) : (m.focus(), m.classList.add("jodit_error"), !1)
                    }, !1);
                    var p = t.options.textIcons ? "" : n.Jodit.modules.ToolbarIcon.getIcon("link");
                    d[p + " URL"] = f
                }
                return e.TabsWidget(t, d)
            }
        }(t.Widget || (t.Widget = {}))
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function e() {
                this.__store = {}
            }

            return e.prototype.get = function (e, t) {
                if (void 0 !== this.__store[t]) return this.__store[t][e]
            }, e.prototype.indexOf = function (e, t, o) {
                var n = this.get(e, t);
                if (n) for (var i = 0; n.length > i; i += 1) if (n[i].originalCallback === o) return i;
                return !1
            }, e.prototype.namespaces = function () {
                return Object.keys(this.__store)
            }, e.prototype.events = function (e) {
                return this.__store[e] ? Object.keys(this.__store[e]) : []
            }, e.prototype.set = function (e, t, o, n) {
                void 0 === n && (n = !1), void 0 === this.__store[t] && (this.__store[t] = {}), void 0 === this.__store[t][e] && (this.__store[t][e] = []), n ? this.__store[t][e].unshift(o) : this.__store[t][e].push(o)
            }, e
        }();
        t.EventsNative = function () {
            function e(e) {
                var t = this;
                this.__defaultNameSpace = "JoditEventDefaultNamespace", this.__key = "__JoditEventsNativeNamespaces", this.current = [], this.doc = document, this.prepareEvent = function (e) {
                    e.cancelBubble || (e.type.match(/^touch/) && e.changedTouches && e.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach(function (t) {
                        Object.defineProperty(e, t, {value: e.changedTouches[0][t], configurable: !0, enumerable: !0})
                    }), e.originalEvent || (e.originalEvent = e), "paste" === e.type && void 0 === e.clipboardData && t.doc.defaultView.clipboardData && Object.defineProperty(e, "clipboardData", {
                        get: function () {
                            return t.doc.defaultView.clipboardData
                        }, configurable: !0, enumerable: !0
                    }))
                }, this.__stopped = [], e && (this.doc = e), this.__key += (new Date).getTime()
            }

            return e.prototype.eachEvent = function (e, t) {
                var o = this;
                e.split(/[\s,]+/).forEach(function (e) {
                    var n = e.split(".");
                    t.call(o, n[0], n[1] || o.__defaultNameSpace)
                })
            }, e.prototype.getStore = function (e) {
                if (void 0 === e[this.__key]) {
                    var t = new n;
                    Object.defineProperty(e, this.__key, {enumerable: !1, configurable: !0, value: t})
                }
                return e[this.__key]
            }, e.prototype.clearStore = function (e) {
                void 0 !== e[this.__key] && delete e[this.__key]
            }, e.prototype.on = function (e, t, o, n, i) {
                var r = this;
                void 0 === i && (i = !1);
                var s = "string" == typeof e ? this : e, a = "string" == typeof t ? t : e, l = o;
                void 0 === l && "function" == typeof t && (l = t);
                var c = this.getStore(s);
                if ("string" != typeof a || "" === a) throw Error("Need events names");
                if ("function" != typeof l) throw Error("Need event handler");
                if (Array.isArray(s)) return s.forEach(function (e) {
                    r.on(e, a, l, n)
                }), this;
                var d = "function" == typeof s.addEventListener, u = this, p = function () {
                    return l && l.apply(this, arguments)
                };
                return d && (p = function (e) {
                    if (u.prepareEvent(e), l && !1 === l.call(this, e)) return e.preventDefault(), e.stopImmediatePropagation(), !1
                }, n && (p = function (e) {
                    u.prepareEvent(e);
                    for (var t = e.target; t && t !== this;) {
                        if (t.matches(n)) {
                            if (Object.defineProperty(e, "target", {
                                value: t,
                                configurable: !0,
                                enumerable: !0
                            }), l && !1 === l.call(t, e)) return e.preventDefault(), !1;
                            return
                        }
                        t = t.parentNode
                    }
                })), this.eachEvent(a, function (e, t) {
                    if ("" === e) throw Error("Need event name");
                    if (!1 === c.indexOf(e, t, l)) {
                        var o = {event: e, originalCallback: l, syntheticCallback: p};
                        c.set(e, t, o, i), t !== r.__defaultNameSpace && c.set(e, r.__defaultNameSpace, o, i), d && s.addEventListener(e, p, !1)
                    }
                }), this
            }, e.prototype.off = function (e, t, o) {
                var n = this, i = "string" == typeof e ? this : e, r = "string" == typeof t ? t : e,
                    s = this.getStore(i), a = o;
                if ("string" != typeof r || !r) return s.namespaces().forEach(function (e) {
                    n.off(i, "." + e)
                }), this.clearStore(i), this;
                void 0 === a && "function" == typeof t && (a = t);
                var l = "function" == typeof i.removeEventListener, c = function (e) {
                    l && i.removeEventListener(e.event, e.syntheticCallback, !1)
                }, d = function (e, t) {
                    if ("" !== e) {
                        var o = s.get(e, t);
                        if (o && o.length) {
                            var i = !1;
                            if ("function" != typeof a) o.forEach(c), o.length = 0, i = !0; else {
                                var r = s.indexOf(e, t, a);
                                !1 !== r && (c(o[r]), o.splice(r, 1), i = !0)
                            }
                            i && t !== n.__defaultNameSpace && d(e, n.__defaultNameSpace)
                        }
                    } else s.events(t).forEach(function (e) {
                        "" !== e && d(e, t)
                    })
                };
                return this.eachEvent(r, function (e, t) {
                    t === n.__defaultNameSpace ? s.namespaces().forEach(function (t) {
                        d(e, t)
                    }) : d(e, t)
                }), this
            }, e.prototype.triggerNativeEvent = function (e, t) {
                var o = this.doc.createEvent("HTMLEvents");
                "string" == typeof t ? o.initEvent(t, !0, !0) : (o.initEvent(t.type, t.bubbles, t.cancelable), ["screenX", "screenY", "clientX", "clientY", "target", "srcElement", "currentTarget", "timeStamp", "which", "keyCode"].forEach(function (e) {
                    Object.defineProperty(o, e, {value: t[e], enumerable: !0})
                }), Object.defineProperty(o, "originalEvent", {value: t, enumerable: !0})), e.dispatchEvent(o)
            }, e.prototype.stopPropagation = function (e, t) {
                var o = this, n = "string" == typeof e ? this : e, i = "string" == typeof e ? e : t;
                if ("string" != typeof i) throw Error("Need event names");
                var r = this.getStore(n);
                this.eachEvent(i, function (e, t) {
                    var n = r.get(e, t);
                    n && o.__stopped.push(n)
                })
            }, e.prototype.removeStop = function (e) {
                if (e) {
                    var t = this.__stopped.indexOf(e);
                    -1 !== t && this.__stopped.splice(t, 1)
                }
            }, e.prototype.isStopped = function (e) {
                return void 0 !== e && -1 !== this.__stopped.indexOf(e)
            }, e.prototype.fire = function (e, t) {
                for (var o = this, n = [], i = 2; arguments.length > i; i++) n[i - 2] = arguments[i];
                var r, s = void 0, a = "string" == typeof e ? this : e, l = "string" == typeof e ? e : t,
                    c = "string" == typeof e ? [t].concat(n) : n, d = "function" == typeof a.dispatchEvent;
                if (!d && "string" != typeof l) throw Error("Need events names");
                var u = this.getStore(a);
                return "string" != typeof l && d ? this.triggerNativeEvent(a, t) : this.eachEvent(l, function (e, t) {
                    if (d) o.triggerNativeEvent(a, e); else {
                        var n = u.get(e, t);
                        if (n) try {
                            n.every(function (t) {
                                return !o.isStopped(n) && (o.current.push(e), r = t.syntheticCallback.apply(a, c), o.current.pop(), void 0 !== r && (s = r), !0)
                            })
                        } finally {
                            o.removeStop(n)
                        }
                    }
                }), s
            }, e.prototype.destruct = function () {
                this.off(this)
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.Component = o(4).Component, t.Ajax = o(14).Ajax, t.ContextMenu = o(15).ContextMenu, t.Cookie = o(60).Cookie;
        var n = o(7);
        t.Dialog = n.Dialog, t.Alert = n.Alert, t.Confirm = n.Confirm, t.Promt = n.Promt, t.Dom = o(3).Dom, t.EventsNative = o(11).EventsNative, t.FileBrowser = o(61).FileBrowser, t.Helpers = o(0), t.ImageEditor = o(62).ImageEditor, t.Observer = o(17).Observer, t.Select = o(13).Select, t.Snapshot = o(18).Snapshot, t.Table = o(20).Table;
        var i = o(5);
        t.ToolbarIcon = i.ToolbarIcon, t.ToolbarCollection = i.ToolbarCollection, t.ToolbarButton = i.ToolbarButton, t.Stack = o(19).Stack, t.Uploader = o(9).Uploader
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(2), r = o(4), s = o(0), a = o(3), l = o(2), c = o(2);
        t.Select = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isMarker = function (e) {
                    return a.Dom.isNode(e, t.jodit.editorWindow) && e.nodeType === Node.ELEMENT_NODE && "SPAN" === e.nodeName && e.hasAttribute("data-" + i.MARKER_CLASS)
                }, t.marker = function (e, o) {
                    void 0 === e && (e = !1);
                    var n = null;
                    o && (n = o.cloneRange(), n.collapse(e));
                    var r = t.jodit.editorDocument.createElement("span");
                    return r.id = i.MARKER_CLASS + "_" + +new Date + "_" + ("" + Math.random()).slice(2), r.style.lineHeight = "0", r.style.display = "none", r.setAttribute("data-" + i.MARKER_CLASS, e ? "start" : "end"), r.appendChild(t.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE)), n && a.Dom.isOrContains(t.jodit.editor, e ? n.startContainer : n.endContainer) && n.insertNode(r), r
                }, t.focus = function () {
                    var e = t.jodit;
                    if (!t.isFocused()) {
                        if (e.options.iframe && s.isIE()) for (var o = 0; 1e5 > o && "complete" !== e.editorDocument.readyState;) o++;
                        e.iframe && e.iframe.focus(), e.editorWindow.focus(), e.editor.focus();
                        var n = e.editorWindow.getSelection(), i = e.editorDocument.createRange();
                        return n.rangeCount && t.current() || (i.setStart(e.editor, 0), i.collapse(!0), n.removeAllRanges(), n.addRange(i)), !0
                    }
                    return !1
                }, t.eachSelection = function (e) {
                    var o = t.jodit.editorWindow.getSelection();
                    if (o.rangeCount) {
                        var n = o.getRangeAt(0), i = [],
                            r = n.startContainer === t.jodit.editor ? t.jodit.editor.childNodes[n.startOffset] : n.startContainer,
                            s = n.endContainer === t.jodit.editor ? t.jodit.editor.childNodes[n.endOffset - 1] : n.endContainer;
                        a.Dom.find(r, function (e) {
                            return !e || e === t.jodit.editor || a.Dom.isEmptyTextNode(e) || t.isMarker(e) || i.push(e), e === s
                        }, t.jodit.editor, !0, "nextSibling", !1);
                        var l = function (o) {
                            if (o.nodeName.match(/^(UL|OL)$/)) return [].slice.call(o.childNodes).forEach(l);
                            if ("LI" === o.nodeName) if (o.firstChild) o = o.firstChild; else {
                                var n = t.jodit.editorDocument.createTextNode(c.INVISIBLE_SPACE);
                                o.appendChild(n), o = n
                            }
                            e(o)
                        };
                        0 === i.length && a.Dom.isEmptyTextNode(r) && i.push(r), i.forEach(l)
                    }
                }, t.applyCSS = function (e, o, n) {
                    void 0 === o && (o = "span");
                    var r, l = function (e) {
                        return null !== e && !a.Dom.isEmptyTextNode(e) && !t.isMarker(e)
                    }, c = function (e) {
                        return "FONT" !== e.nodeName && e.nodeType === Node.ELEMENT_NODE && (s.isPlainObject(n) && !1 !== s.each(n, function (t, o) {
                            var n = s.css(e, t, void 0, !0);
                            return null !== n && "" !== n && -1 !== o.indexOf(("" + n).toLowerCase())
                        }) || "function" == typeof n && n(t.jodit, e))
                    }, d = function (e) {
                        return (RegExp("^" + e.nodeName + "$", "i").test(o) || !(!n || !c(e))) && l(e)
                    }, u = function (t) {
                        d(t) && ("SPAN" === t.nodeName && e && Object.keys(e).forEach(function (o) {
                            0 === r || s.css(t, o) == s.normilizeCSSValue(o, e[o]) ? (s.css(t, o, ""), void 0 === r && (r = 0)) : (s.css(t, o, e[o]), void 0 === r && (r = 1))
                        }), a.Dom.isBlock(t) || t.getAttribute("style") && "SPAN" === t.nodeName || (a.Dom.unwrap(t), void 0 === r && (r = 0)))
                    };
                    if (t.isCollapsed()) {
                        var p = !1;
                        if (t.current() && a.Dom.closest(t.current(), o, t.jodit.editor)) {
                            p = !0;
                            var f = a.Dom.closest(t.current(), o, t.jodit.editor);
                            f && t.setCursorAfter(f)
                        }
                        if ("SPAN" === o.toUpperCase() || !p) {
                            var h = t.jodit.editorDocument.createElement(o);
                            h.appendChild(t.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE)), t.insertNode(h, !1, !1), "SPAN" === o.toUpperCase() && e && s.css(h, e), t.setCursorIn(h)
                        }
                    } else {
                        var m = t.save();
                        s.normalizeNode(t.jodit.editor.firstChild), t.jodit.editorDocument.execCommand("fontsize", !1, 7), s.$$('font[size="7"]', t.jodit.editor).forEach(function (n) {
                            if (a.Dom.next(n, l, n.parentNode) || a.Dom.prev(n, l, n.parentNode) || !d(n.parentNode) || n.parentNode === t.jodit.editor || a.Dom.isBlock(n.parentNode) && !i.IS_BLOCK.test(o)) if (n.firstChild && !a.Dom.next(n.firstChild, l, n) && !a.Dom.prev(n.firstChild, l, n) && d(n.firstChild)) u(n.firstChild); else if (a.Dom.closest(n, d, t.jodit.editor)) {
                                var c = t.jodit.editorDocument.createRange(), p = a.Dom.closest(n, d, t.jodit.editor);
                                c.setStartBefore(p), c.setEndBefore(n);
                                var f = c.extractContents();
                                f.textContent && s.trim(f.textContent).length || !f.firstChild || a.Dom.unwrap(f.firstChild), p.parentNode && p.parentNode.insertBefore(f, p), c.setStartAfter(n), c.setEndAfter(p);
                                var h = c.extractContents();
                                h.textContent && s.trim(h.textContent).length || !h.firstChild || a.Dom.unwrap(h.firstChild), a.Dom.after(p, h), u(p)
                            } else {
                                var m = [], v = void 0;
                                n.firstChild && a.Dom.find(n.firstChild, function (e) {
                                    return e && d(e) ? (void 0 === v && (v = !0), m.push(e)) : void 0 === v && (v = !1), !1
                                }, n, !0), m.forEach(a.Dom.unwrap), v || (void 0 === r && (r = 1), 1 === r && s.css(a.Dom.replace(n, o, !1, !1, t.jodit.editorDocument), e && "SPAN" === o.toUpperCase() ? e : {}))
                            } else u(n.parentNode);
                            n.parentNode && a.Dom.unwrap(n)
                        }), t.restore(m)
                    }
                }, t
            }

            return n(t, e), t.prototype.remove = function () {
                var e = this.jodit.editorWindow.getSelection();
                if (this.current()) for (var t = 0; e.rangeCount > t; t += 1) e.getRangeAt(t).deleteContents(), e.getRangeAt(t).collapse(!0)
            }, t.prototype.insertCursorAtPoint = function (e, t) {
                var o, n = this.jodit.editorDocument;
                this.removeMarkers();
                try {
                    var i = null;
                    if (n.caretPositionFromPoint ? (o = n.caretPositionFromPoint(e, t), i = n.createRange(), i.setStart(o.offsetNode, o.offset)) : n.caretRangeFromPoint && (o = n.caretRangeFromPoint(e, t), i = n.createRange(), i.setStart(o.startContainer, o.startOffset)), i && void 0 !== this.jodit.editorWindow.getSelection) {
                        i.collapse(!0);
                        var r = this.jodit.editorWindow.getSelection();
                        r.removeAllRanges(), r.addRange(i)
                    } else if (void 0 !== n.body.createTextRange) {
                        var s = n.body.createTextRange();
                        s.moveToPoint(e, t);
                        var a = s.duplicate();
                        a.moveToPoint(e, t), s.setEndPoint("EndToEnd", a), s.select()
                    }
                    return !0
                } catch (e) {
                }
                return !1
            }, t.prototype.removeMarkers = function () {
                s.$$("span[data-" + i.MARKER_CLASS + "]", this.jodit.editor).forEach(function (e) {
                    e.parentNode && e.parentNode.removeChild(e)
                })
            }, t.prototype.restore = function (e) {
                var t = this;
                if (void 0 === e && (e = []), Array.isArray(e)) {
                    var o = this.jodit.editorWindow.getSelection();
                    o.removeAllRanges(), e.forEach(function (e) {
                        var n = t.jodit.editorDocument.createRange(), i = t.jodit.editor.querySelector("#" + e.endId),
                            r = t.jodit.editor.querySelector("#" + e.startId);
                        if (r) {
                            if (e.collapsed || !i) {
                                var s = r.previousSibling;
                                s && s.nodeType === Node.TEXT_NODE ? n.setStart(s, s.nodeValue ? s.nodeValue.length : 0) : n.setStartBefore(r), r.parentNode && r.parentNode.removeChild(r), n.collapse(!0)
                            } else n.setStartAfter(r), r.parentNode && r.parentNode.removeChild(r), n.setEndBefore(i), i.parentNode && i.parentNode.removeChild(i);
                            o.addRange(n)
                        }
                    })
                }
            }, t.prototype.save = function () {
                var e = this.jodit.editorWindow.getSelection();
                if (!e.rangeCount) return [];
                var t, o, n, i = [], r = e.rangeCount, s = [];
                for (t = 0; r > t; t += 1) s[t] = e.getRangeAt(t), s[t].collapsed ? (o = this.marker(!0, s[t]), i[t] = {
                    startId: o.id,
                    collapsed: !0,
                    startMarker: o.outerHTML
                }) : (o = this.marker(!0, s[t]), n = this.marker(!1, s[t]), i[t] = {
                    startId: o.id,
                    endId: n.id,
                    collapsed: !1,
                    startMarker: o.outerHTML,
                    endMarker: n.outerHTML
                });
                for (e.removeAllRanges(), t = r - 1; t >= 0; --t) {
                    var a = this.jodit.editorDocument.getElementById(i[t].startId);
                    if (a) if (i[t].collapsed) s[t].setStartAfter(a), s[t].collapse(!0); else if (s[t].setStartBefore(a), i[t].endId) {
                        var l = this.jodit.editorDocument.getElementById(i[t].endId);
                        l && s[t].setEndAfter(l)
                    }
                    try {
                        e.addRange(s[t].cloneRange())
                    } catch (e) {
                    }
                }
                return i
            }, t.prototype.isCollapsed = function () {
                var e, t = this.jodit.editorWindow.getSelection();
                for (e = 0; t.rangeCount > e; e += 1) if (!t.getRangeAt(e).collapsed) return !1;
                return !0
            }, t.prototype.isFocused = function () {
                return this.jodit.editorDocument.hasFocus && this.jodit.editorDocument.hasFocus() && this.jodit.editor === this.jodit.editorDocument.activeElement
            }, t.prototype.current = function (e) {
                if (void 0 === e && (e = !0), this.jodit.getRealMode() === i.MODE_WYSIWYG && void 0 !== this.jodit.editorWindow.getSelection) {
                    var t = this.jodit.editorWindow.getSelection();
                    if (t && t.rangeCount > 0) {
                        var o = t.getRangeAt(0), n = o.startContainer, r = !1, s = function (e) {
                            return r ? e.lastChild : e.firstChild
                        };
                        if (n.nodeType !== Node.TEXT_NODE && (n = o.startContainer.childNodes[o.startOffset], n || (n = o.startContainer.childNodes[o.startOffset - 1], r = !0), n && t.isCollapsed && n.nodeType !== Node.TEXT_NODE)) if (!r && n.previousSibling && n.previousSibling.nodeType === Node.TEXT_NODE) n = n.previousSibling; else if (e) for (var l = s(n); l;) {
                            if (l && l.nodeType === Node.TEXT_NODE) {
                                n = l;
                                break
                            }
                            l = s(l)
                        }
                        if (n && a.Dom.isOrContains(this.jodit.editor, n)) return n
                    }
                }
                return !1
            }, t.prototype.insertNode = function (e, t, o) {
                if (void 0 === t && (t = !0), void 0 === o && (o = !0), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                if (this.focus(), !this.jodit.editorWindow.getSelection) throw Error("Jodit does'n support this browser");
                var n = this.jodit.editorWindow.getSelection();
                if (this.isCollapsed() || this.jodit.execCommand("Delete"), n.rangeCount) {
                    var i = n.getRangeAt(0);
                    a.Dom.isOrContains(this.jodit.editor, i.commonAncestorContainer) ? (i.deleteContents(), i.insertNode(e)) : this.jodit.editor.appendChild(e)
                } else this.jodit.editor.appendChild(e);
                t && this.setCursorAfter(e), o && this.jodit.events && this.jodit.events.fire("synchro"), this.jodit.events && this.jodit.events.fire("afterInsertNode", e)
            }, t.prototype.insertHTML = function (e) {
                if ("" !== e) {
                    var t, o, n = this.jodit.editorDocument.createElement("div"),
                        i = this.jodit.editorDocument.createDocumentFragment();
                    if (!this.isFocused() && this.jodit.isEditorMode() && this.focus(), e instanceof this.jodit.editorWindow.Node ? a.Dom.isNode(e, this.jodit.editorWindow) && n.appendChild(e) : n.innerHTML = "" + e, this.jodit.isEditorMode() || !1 !== this.jodit.events.fire("insertHTML", n.innerHTML)) {
                        for (t = n.lastChild; n.firstChild;) t = n.firstChild, i.appendChild(n.firstChild);
                        for (this.insertNode(i, !1), t ? this.setCursorAfter(t) : this.setCursorIn(i), o = this.jodit.editor.lastChild; o && o.nodeType === Node.TEXT_NODE && o.previousSibling && o.nodeValue && /^\s*$/.test(o.nodeValue);) o = o.previousSibling;
                        t && (o && t === o && t.nodeType === Node.ELEMENT_NODE && this.jodit.editor.appendChild(this.jodit.editorDocument.createElement("br")), this.setCursorAfter(t))
                    }
                }
            }, t.prototype.insertImage = function (e, t) {
                void 0 === t && (t = {});
                var o = "string" == typeof e ? s.dom('<img src=""/>', this.jodit.editorDocument) : s.dom(e, this.jodit.editorDocument);
                "string" == typeof e && o.setAttribute("src", e);
                var n = "" + this.jodit.options.imageDefaultWidth;
                n && "auto" !== n && 0 > (n + "").indexOf("px") && 0 > (n + "").indexOf("%") && (n += "px"), t.width = n, t && "object" == typeof t && s.each(t, function (e, t) {
                    o.style[t] = e
                });
                var i = function () {
                    (o.offsetHeight > o.naturalHeight || o.offsetWidth > o.naturalWidth) && (o.style.width = "", o.style.height = ""), o.removeEventListener("load", i)
                };
                o.addEventListener("load", i), o.complete && i(), this.insertNode(o), this.jodit.events.fire("afterInsertImage", o)
            }, t.prototype.setCursorAfter = function (e) {
                var t = this;
                if (!(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                if (!a.Dom.up(e, function (e) {
                    return e === t.jodit.editor || e && e.parentNode === t.jodit.editor
                }, this.jodit.editor)) throw Error("Node element must be in editor");
                var o = this.jodit.editorDocument.createRange(), n = !1;
                return e.nodeType !== Node.TEXT_NODE ? (n = this.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE), o.setStartAfter(e), o.insertNode(n), o.selectNode(n)) : o.setEnd(e, null !== e.nodeValue ? e.nodeValue.length : 0), o.collapse(!1), this.selectRange(o), n
            }, t.prototype.cursorInTheEdge = function (e, t) {
                var o = this.jodit.editorWindow.getSelection(), n = o.rangeCount ? o.getRangeAt(0) : null;
                if (!n) return null;
                var i = e ? n.startContainer : n.endContainer, r = function (o) {
                    return e ? a.Dom.prev(o, function (e) {
                        return !!e
                    }, t) : a.Dom.next(o, function (e) {
                        return !!e
                    }, t)
                }, s = function (e) {
                    for (; e;) if ((e = r(e)) && !a.Dom.isEmptyTextNode(e) && "BR" !== e.nodeName) return !1
                };
                if (i.nodeType === Node.TEXT_NODE) {
                    var c = i.nodeValue || "";
                    if (e && n.startOffset > c.length - c.replace(l.INVISIBLE_SPACE_REG_EXP_START, "").length) return !1;
                    if (!e && n.startOffset < c.replace(l.INVISIBLE_SPACE_REG_EXP_END, "").length) return !1;
                    if (!1 === s(i)) return !1
                }
                var d = this.current(!1);
                return d && a.Dom.isOrContains(t, d, !0) ? !(!e && n.startContainer.childNodes[n.startOffset] && d && !a.Dom.isEmptyTextNode(d)) && !1 !== s(d) : null
            }, t.prototype.setCursorBefore = function (e) {
                var t = this;
                if (!(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                if (!a.Dom.up(e, function (e) {
                    return e === t.jodit.editor || e && e.parentNode === t.jodit.editor
                }, this.jodit.editor)) throw Error("Node element must be in editor");
                var o = this.jodit.editorDocument.createRange(), n = !1;
                return e.nodeType !== Node.TEXT_NODE ? (n = this.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE), o.setStartBefore(e), o.collapse(!0), o.insertNode(n), o.selectNode(n)) : o.setStart(e, null !== e.nodeValue ? e.nodeValue.length : 0), o.collapse(!0), this.selectRange(o), n
            }, t.prototype.setCursorIn = function (e, t) {
                var o = this;
                if (void 0 === t && (t = !1), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                if (!a.Dom.up(e, function (e) {
                    return e === o.jodit.editor || e && e.parentNode === o.jodit.editor
                }, this.jodit.editor)) throw Error("Node element must be in editor");
                var n = this.jodit.editorDocument.createRange(), r = e, s = e;
                do {
                    if (r.nodeType === Node.TEXT_NODE) break;
                    s = r, r = t ? r.firstChild : r.lastChild
                } while (r);
                if (!r) {
                    var l = this.jodit.editorDocument.createTextNode(i.INVISIBLE_SPACE);
                    /^(img|br|input)$/i.test(s.nodeName) ? r = s : (s.appendChild(l), s = l)
                }
                return n.selectNodeContents(r || s), n.collapse(t), this.selectRange(n), s
            }, t.prototype.selectRange = function (e) {
                var t = this.jodit.editorWindow.getSelection();
                t.removeAllRanges(), t.addRange(e), this.jodit.events.fire("changeSelection")
            }, t.prototype.select = function (e, t) {
                var o = this;
                if (void 0 === t && (t = !1), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                if (!a.Dom.up(e, function (e) {
                    return e === o.jodit.editor || e && e.parentNode === o.jodit.editor
                }, this.jodit.editor)) throw Error("Node element must be in editor");
                var n = this.jodit.editorDocument.createRange();
                n[t ? "selectNodeContents" : "selectNode"](e), this.selectRange(n)
            }, t.prototype.getHTML = function () {
                var e = this.jodit.editorWindow.getSelection();
                if (e.rangeCount > 0) {
                    var t = e.getRangeAt(0), o = t.cloneContents(), n = this.jodit.editorDocument.createElement("div");
                    return n.appendChild(o), n.innerHTML
                }
                return ""
            }, t
        }(r.Component)
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(1), i = o(0);
        n.Config.prototype.defaultAjaxOptions = {
            dataType: "json",
            method: "GET",
            url: "",
            data: null,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {"X-REQUESTED-WITH": "XMLHttpRequest"},
            withCredentials: !0,
            xhr: function () {
                return new ("undefined" == typeof XDomainRequest ? XMLHttpRequest : XDomainRequest)
            }
        }, t.Ajax = function () {
            function e(e, t) {
                var o = this;
                this.success_response_codes = [200, 201, 202], this.jodit = e, this.options = i.extend(!0, {}, n.Config.prototype.defaultAjaxOptions, t), this.options.xhr && (this.xhr = this.options.xhr()), e && e.events && e.events.on("beforeDestruct", function () {
                    o.abort()
                })
            }

            return e.prototype.__buildParams = function (e, t) {
                if (this.options.queryBuild && "function" == typeof this.options.queryBuild) return this.options.queryBuild.call(this, e, t);
                if ("string" == typeof e || this.jodit.ownerWindow.FormData && e instanceof this.jodit.ownerWindow.FormData) return e;
                var o, n, i, r = [];
                for (o in e) e.hasOwnProperty(o) && (n = t ? t + "[" + o + "]" : o, i = e[o], r.push("object" == typeof i ? this.__buildParams(i, n) : encodeURIComponent(n) + "=" + encodeURIComponent(i)));
                return r.join("&")
            }, e.prototype.abort = function () {
                return this.xhr.abort(), this
            }, e.prototype.send = function () {
                var e = this;
                return new Promise(function (t, o) {
                    var n = function (t) {
                        switch (e.options.dataType) {
                            case"json":
                                try {
                                    t = JSON.parse(t)
                                } catch (t) {
                                    return void o.call(e.xhr, t)
                                }
                        }
                        return t
                    };
                    if (e.xhr.onabort = function () {
                        o(Error(e.xhr.statusText))
                    }, e.xhr.onerror = function () {
                        o(Error(e.xhr.statusText))
                    }, e.xhr.ontimeout = function () {
                        o(Error(e.xhr.statusText))
                    }, e.xhr.onload = function () {
                        e.response = e.xhr.responseText, e.status = e.xhr.status, t.call(e.xhr, n(e.response))
                    }, e.xhr.onreadystatechange = function () {
                        if (e.xhr.readyState === XMLHttpRequest.DONE) {
                            var i = e.xhr.responseText;
                            e.response = i, e.status = e.xhr.status, e.success_response_codes.indexOf(e.xhr.status) > -1 ? t.call(e.xhr, n(i)) : o.call(e.xhr, Error(e.xhr.statusText || e.jodit.i18n("Connection error!")))
                        }
                    }, e.xhr.withCredentials = e.options.withCredentials || !1, !e.options.url) throw Error("Need URL for AJAX request");
                    e.xhr.open(e.options.method || "get", e.options.url, !0), e.options.contentType && e.xhr.setRequestHeader && e.xhr.setRequestHeader("Content-type", e.options.contentType), e.options.headers && e.xhr.setRequestHeader && i.each(e.options.headers, function (t, o) {
                        e.xhr.setRequestHeader(t, o)
                    }), setTimeout(function () {
                        e.xhr.send(e.options.data ? e.__buildParams(e.options.data) : void 0)
                    }, 0)
                })
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(4), r = o(0), s = o(5);
        t.ContextMenu = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.hide = function () {
                    o.context.classList.remove("jodit_context_menu-show"), o.jodit.ownerWindow.removeEventListener("mouseup", o.hide)
                }, o.context = r.dom('<div data-editor_id="' + o.jodit.id + '" class="jodit_context_menu"></div>', t.ownerDocument), t.ownerDocument.body.appendChild(o.context), o
            }

            return n(t, e), t.prototype.destruct = function () {
                this.context && this.context.parentNode && this.context.parentNode.removeChild(this.context)
            }, t.prototype.show = function (e, t, o, n) {
                var i = this, a = this;
                Array.isArray(o) && (n && (this.context.style.zIndex = "" + n), this.context.innerHTML = "", o.forEach(function (e) {
                    if (e) {
                        var t = r.dom('<a href="javascript:void(0)">' + (e.icon ? s.ToolbarIcon.getIcon(e.icon) : "") + "<span></span></a>", i.jodit.ownerDocument),
                            o = t.querySelector("span");
                        t.addEventListener("click", function (t) {
                            return e.exec && e.exec.call(a, t), a.hide(), !1
                        }), o.innerText = a.jodit.i18n(e.title || ""), a.context.appendChild(t)
                    }
                }), r.css(a.context, {
                    left: e,
                    top: t
                }), this.jodit.ownerWindow.addEventListener("mouseup", a.hide), this.context.classList.add("jodit_context_menu-show"))
            }, t
        }(i.Component)
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(0);
        t.localStorageProvider = function () {
            function e() {
            }

            return e.prototype.set = function (e, t) {
                localStorage.setItem(e, "" + t)
            }, e.prototype.get = function (e) {
                return localStorage.getItem(e)
            }, e
        }(), t.Storage = function () {
            function e(e) {
                this.provider = e, this.prefix = "Jodit_"
            }

            return e.prototype.set = function (e, t) {
                this.provider.set(n.camelCase(this.prefix + e), t)
            }, e.prototype.get = function (e) {
                return this.provider.get(n.camelCase(this.prefix + e))
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(4), s = o(18), a = o(19), l = o(0);
        i.Config.prototype.observer = {timeout: 100};
        var c = function () {
            function e(e, t, o) {
                this.observer = o, this.oldValue = e, this.newValue = t
            }

            return e.prototype.undo = function () {
                this.observer.snapshot.restore(this.oldValue)
            }, e.prototype.redo = function () {
                this.observer.snapshot.restore(this.newValue)
            }, e
        }();
        t.Command = c, t.Observer = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                o.onChangeStack = function () {
                    o.__newValue = o.snapshot.make(), s.Snapshot.equal(o.__newValue, o.__startValue) || (o.stack.push(new c(o.__startValue, o.__newValue, o)), o.__startValue = o.__newValue, o.changeStack())
                }, o.stack = new a.Stack, o.snapshot = new s.Snapshot(t);
                var n = l.debounce(o.onChangeStack, t.defaultTimeout);
                return t.events.on("afterInit", function () {
                    o.__startValue = o.snapshot.make(), t.events.on("changeSelection selectionstart selectionchange mousedown mouseup keydown keyup", function () {
                        o.__startValue.html === o.jodit.getNativeEditorValue() && (o.__startValue = o.snapshot.make())
                    }).on("change", function () {
                        o.snapshot.isBlocked || n()
                    })
                }), o
            }

            return n(t, e), t.prototype.redo = function () {
                this.stack.redo() && (this.__startValue = this.snapshot.make(), this.changeStack())
            }, t.prototype.undo = function () {
                this.stack.undo() && (this.__startValue = this.snapshot.make(), this.changeStack())
            }, t.prototype.clear = function () {
                this.__startValue = this.snapshot.make(), this.stack.clear(), this.changeStack()
            }, t.prototype.changeStack = function () {
                this.jodit && this.jodit.events && this.jodit.events.fire("changeStack")
            }, t
        }(r.Component)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(4), r = o(3);
        t.Snapshot = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isBlocked = !1, t
            }

            return n(t, e), t.countNodesBeforeInParent = function (e) {
                if (!e.parentNode) return 0;
                var t, o = e.parentNode.childNodes, n = 0, i = null;
                for (t = 0; o.length > t; t += 1) {
                    if (!i || o[t].nodeType === Node.TEXT_NODE && "" === o[t].textContent || i.nodeType === Node.TEXT_NODE && o[t].nodeType === Node.TEXT_NODE || (n += 1), o[t] === e) return n;
                    i = o[t]
                }
                return 0
            }, t.prototype.calcHierarchyLadder = function (e) {
                var o = [];
                if (!e || !e.parentNode || !r.Dom.isOrContains(this.jodit.editor, e)) return [];
                for (; e && e !== this.jodit.editor;) e && o.push(t.countNodesBeforeInParent(e)), e = e.parentNode;
                return o.reverse()
            }, t.strokeOffset = function (e, t) {
                for (; e && e.nodeType === Node.TEXT_NODE;) (e = e.previousSibling) && e.nodeType === Node.TEXT_NODE && null !== e.textContent && (t += e.textContent.length);
                return t
            }, t.prototype.make = function () {
                var e = {html: "", range: {startContainer: [], startOffset: 0, endContainer: [], endOffset: 0}};
                e.html = this.jodit.getNativeEditorValue();
                var o = this.jodit.editorWindow.getSelection();
                if (o && o.rangeCount) {
                    var n = o.getRangeAt(0), i = this.calcHierarchyLadder(n.startContainer),
                        r = t.strokeOffset(n.startContainer, n.startOffset),
                        s = this.calcHierarchyLadder(n.endContainer), a = t.strokeOffset(n.endContainer, n.endOffset);
                    i.length || n.startContainer === this.jodit.editor || (r = 0), s.length || n.endContainer === this.jodit.editor || (a = 0), e.range = {
                        startContainer: i,
                        startOffset: r,
                        endContainer: s,
                        endOffset: a
                    }
                }
                return e
            }, t.prototype.getElementByLadder = function (e) {
                var t, o = this.jodit.editor;
                for (t = 0; o && e.length > t; t += 1) o = o.childNodes[e[t]];
                return o
            }, t.equal = function (e, t) {
                return e.html === t.html && JSON.stringify(e.range) === JSON.stringify(t.range)
            }, t.prototype.restore = function (e) {
                this.isBlocked = !0, this.jodit.setEditorValue(e.html);
                try {
                    if (e.range) {
                        var t = this.jodit.editorDocument.createRange();
                        t.setStart(this.getElementByLadder(e.range.startContainer), e.range.startOffset), t.setEnd(this.getElementByLadder(e.range.endContainer), e.range.endOffset), this.jodit.selection.selectRange(t)
                    }
                } catch (e) {
                }
                this.isBlocked = !1
            }, t
        }(i.Component)
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.Stack = function () {
            function e() {
                this.commands = [], this.stackPosition = -1
            }

            return e.prototype.clearRedo = function () {
                this.commands.length = this.stackPosition + 1
            }, e.prototype.clear = function () {
                this.commands.length = 0, this.stackPosition = -1
            }, e.prototype.push = function (e) {
                this.clearRedo(), this.commands.push(e), this.stackPosition += 1
            }, e.prototype.undo = function () {
                return !!this.canUndo() && (this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, !0)
            }, e.prototype.redo = function () {
                return !!this.canRedo() && (this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), !0)
            }, e.prototype.canUndo = function () {
                return this.stackPosition >= 0
            }, e.prototype.canRedo = function () {
                return this.commands.length - 1 > this.stackPosition
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(0), i = o(2), r = o(3);
        t.Table = function () {
            function e() {
            }

            return e.addSelected = function (e) {
                e.setAttribute(i.JODIT_SELECTED_CELL_MARKER, "1")
            }, e.restoreSelection = function (e) {
                e.removeAttribute(i.JODIT_SELECTED_CELL_MARKER)
            }, e.getAllSelectedCells = function (e) {
                return e ? n.$$("td[" + i.JODIT_SELECTED_CELL_MARKER + "],th[" + i.JODIT_SELECTED_CELL_MARKER + "]", e) : []
            }, e.getRowsCount = function (e) {
                return e.rows.length
            }, e.getColumnsCount = function (t) {
                return e.formalMatrix(t).reduce(function (e, t) {
                    return Math.max(e, t.length)
                }, 0)
            }, e.formalMatrix = function (e, t) {
                for (var o = [[]], n = Array.prototype.slice.call(e.rows), i = 0, r = void 0; n.length > i; i += 1) {
                    var s = Array.prototype.slice.call(n[i].cells);
                    for (r = 0; s.length > r; r += 1) if (!1 === function (e, n) {
                        void 0 === o[n] && (o[n] = []);
                        for (var i, r, s = e.colSpan, a = e.rowSpan, l = 0; o[n][l];) l += 1;
                        for (r = 0; a > r; r += 1) for (i = 0; s > i; i += 1) {
                            if (void 0 === o[n + r] && (o[n + r] = []), t && !1 === t(e, n + r, l + i, s, a)) return !1;
                            o[n + r][l + i] = e
                        }
                    }(s[r], i)) return o
                }
                return o
            }, e.formalCoordinate = function (t, o, n) {
                void 0 === n && (n = !1);
                var i = 0, r = 0, s = 1, a = 1;
                return e.formalMatrix(t, function (e, t, l, c, d) {
                    if (o === e) return i = t, r = l, s = c || 1, a = d || 1, n && (r += (c || 1) - 1, i += (d || 1) - 1), !1
                }), [i, r, s, a]
            }, e.appendRow = function (t, o, i) {
                void 0 === o && (o = !1), void 0 === i && (i = !0);
                var r, s = e.getColumnsCount(t), a = t.ownerDocument.createElement("tr");
                for (r = 0; s > r; r += 1) a.appendChild(t.ownerDocument.createElement("td"));
                i && o && o.nextSibling ? o.parentNode && o.parentNode.insertBefore(a, o.nextSibling) : !i && o ? o.parentNode && o.parentNode.insertBefore(a, o) : (n.$$(":scope>tbody", t)[0] || t).appendChild(a)
            }, e.removeRow = function (t, o) {
                var i, s = e.formalMatrix(t), a = t.rows[o];
                n.each(s[o], function (e, n) {
                    if (i = !1, 0 > o - 1 || s[o - 1][e] !== n) if (s[o + 1] && s[o + 1][e] === n) {
                        if (n.parentNode === a && n.parentNode.nextSibling) {
                            i = !0;
                            for (var l = e + 1; s[o + 1][l] === n;) l += 1;
                            var c = r.Dom.next(n.parentNode, function (e) {
                                return e && e.nodeType === Node.ELEMENT_NODE && "TR" === e.nodeName
                            }, t);
                            s[o + 1][l] ? c.insertBefore(n, s[o + 1][l]) : c.appendChild(n)
                        }
                    } else n.parentNode && n.parentNode.removeChild(n); else i = !0;
                    if (i && (n.parentNode === a || n !== s[o][e - 1])) {
                        var d = n.rowSpan;
                        d - 1 > 1 ? n.setAttribute("rowspan", "" + (d - 1)) : n.removeAttribute("rowspan")
                    }
                }), a && a.parentNode && a.parentNode.removeChild(a)
            }, e.appendColumn = function (t, o, n) {
                void 0 === n && (n = !0);
                var i, r = e.formalMatrix(t);
                for (void 0 === o && (o = e.getColumnsCount(t) - 1), i = 0; r.length > i; i += 1) {
                    var s = t.ownerDocument.createElement("td"), a = r[i][o], l = !1;
                    n ? (r[i] && a && o + 1 >= r[i].length || a !== r[i][o + 1]) && (a.nextSibling ? a.parentNode && a.parentNode.insertBefore(s, a.nextSibling) : a.parentNode && a.parentNode.appendChild(s), l = !0) : (0 > o - 1 || r[i][o] !== r[i][o - 1] && r[i][o].parentNode) && (a.parentNode && a.parentNode.insertBefore(s, r[i][o]), l = !0), l || r[i][o].setAttribute("colspan", "" + (parseInt(r[i][o].getAttribute("colspan") || "1", 10) + 1))
                }
            }, e.removeColumn = function (t, o) {
                var i, r = e.formalMatrix(t);
                n.each(r, function (e, t) {
                    var n = t[o];
                    if (i = !1, 0 > o - 1 || r[e][o - 1] !== n ? t.length > o + 1 && r[e][o + 1] === n ? i = !0 : n.parentNode && n.parentNode.removeChild(n) : i = !0, i && (0 > e - 1 || n !== r[e - 1][o])) {
                        var s = n.colSpan;
                        s - 1 > 1 ? n.setAttribute("colspan", "" + (s - 1)) : n.removeAttribute("colspan")
                    }
                })
            }, e.getSelectedBound = function (t, o) {
                var n, i, r, s = [[1 / 0, 1 / 0], [0, 0]], a = e.formalMatrix(t);
                for (n = 0; a.length > n; n += 1) for (i = 0; a[n].length > i; i += 1) -1 !== o.indexOf(a[n][i]) && (s[0][0] = Math.min(n, s[0][0]), s[0][1] = Math.min(i, s[0][1]), s[1][0] = Math.max(n, s[1][0]), s[1][1] = Math.max(i, s[1][1]));
                for (n = s[0][0]; s[1][0] >= n; n += 1) for (r = 1, i = s[0][1]; s[1][1] >= i; i += 1) {
                    for (; a[n][i - r] && a[n][i] === a[n][i - r];) s[0][1] = Math.min(i - r, s[0][1]), s[1][1] = Math.max(i - r, s[1][1]), r += 1;
                    for (r = 1; a[n][i + r] && a[n][i] === a[n][i + r];) s[0][1] = Math.min(i + r, s[0][1]), s[1][1] = Math.max(i + r, s[1][1]), r += 1;
                    for (r = 1; a[n - r] && a[n][i] === a[n - r][i];) s[0][0] = Math.min(n - r, s[0][0]), s[1][0] = Math.max(n - r, s[1][0]), r += 1;
                    for (r = 1; a[n + r] && a[n][i] === a[n + r][i];) s[0][0] = Math.min(n + r, s[0][0]), s[1][0] = Math.max(n + r, s[1][0]), r += 1
                }
                return s
            }, e.normalizeTable = function (t) {
                var o, n, i, r, s = [], a = e.formalMatrix(t);
                for (n = 0; a[0].length > n; n += 1) {
                    for (i = 1e6, r = !1, o = 0; a.length > o; o += 1) if (void 0 !== a[o][n]) {
                        if (2 > a[o][n].colSpan) {
                            r = !0;
                            break
                        }
                        i = Math.min(i, a[o][n].colSpan)
                    }
                    if (!r) for (o = 0; a.length > o; o += 1) void 0 !== a[o][n] && e.__mark(a[o][n], "colspan", a[o][n].colSpan - i + 1, s)
                }
                for (o = 0; a.length > o; o += 1) {
                    for (i = 1e6, r = !1, n = 0; a[o].length > n; n += 1) if (void 0 !== a[o][n]) {
                        if (2 > a[o][n].rowSpan) {
                            r = !0;
                            break
                        }
                        i = Math.min(i, a[o][n].rowSpan)
                    }
                    if (!r) for (n = 0; a[o].length > n; n += 1) void 0 !== a[o][n] && e.__mark(a[o][n], "rowspan", a[o][n].rowSpan - i + 1, s)
                }
                for (o = 0; a.length > o; o += 1) for (n = 0; a[o].length > n; n += 1) void 0 !== a[o][n] && (a[o][n].hasAttribute("rowspan") && 1 === a[o][n].rowSpan && a[o][n].removeAttribute("rowspan"), a[o][n].hasAttribute("colspan") && 1 === a[o][n].colSpan && a[o][n].removeAttribute("colspan"), a[o][n].hasAttribute("class") && !a[o][n].getAttribute("class") && a[o][n].removeAttribute("class"));
                e.__unmark(s)
            }, e.mergeSelected = function (t) {
                var o, r = e.getSelectedBound(t, e.getAllSelectedCells(t)), s = 0, a = null, l = 0, c = [], d = 0,
                    u = 0, p = [];
                r && (r[0][0] - r[1][0] || r[0][1] - r[1][1]) && (e.formalMatrix(t, function (t, i, f, h, m) {
                    if (!(r[0][0] > i || i > r[1][0] || r[0][1] > f || f > r[1][1])) {
                        if (o = t, o.__i_am_already_was) return;
                        o.__i_am_already_was = !0, i === r[0][0] && o.style.width && (s += o.offsetWidth), "" !== n.trim(t.innerHTML.replace(/<br(\/)?>/g, "")) && c.push(t.innerHTML), h > 1 && (d += h - 1), m > 1 && (u += m - 1), a ? e.__mark(o, "remove", 1, p) : (a = t, l = f)
                    }
                }), d = r[1][1] - r[0][1] + 1, u = r[1][0] - r[0][0] + 1, a && (d > 1 && e.__mark(a, "colspan", d, p), u > 1 && e.__mark(a, "rowspan", u, p), s && (e.__mark(a, "width", (s / t.offsetWidth * 100).toFixed(i.ACCURACY) + "%", p), l && e.setColumnWidthByDelta(t, l, 0, !0, p)), a.innerHTML = c.join("<br/>"), delete a.__i_am_already_was, e.__unmark(p), e.normalizeTable(t), n.each([].slice.call(t.rows), function (e, t) {
                    t.cells.length || t.parentNode.removeChild(t)
                })))
            }, e.splitHorizontal = function (t) {
                var o, n, i, s, a, l = [];
                e.getAllSelectedCells(t).forEach(function (c) {
                    n = t.ownerDocument.createElement("td"), n.appendChild(t.ownerDocument.createElement("br")), i = t.ownerDocument.createElement("tr"), o = e.formalCoordinate(t, c), 2 > c.rowSpan ? (e.formalMatrix(t, function (t, n, i) {
                        o[0] === n && o[1] !== i && t !== c && e.__mark(t, "rowspan", t.rowSpan + 1, l)
                    }), r.Dom.after(r.Dom.closest(c, "tr", t), i), i.appendChild(n)) : (e.__mark(c, "rowspan", c.rowSpan - 1, l), e.formalMatrix(t, function (e, n, i) {
                        n > o[0] && o[0] + c.rowSpan > n && o[1] > i && e.parentNode.rowIndex === n && (a = e), n > o[0] && e === c && (s = t.rows[n])
                    }), a ? r.Dom.after(a, n) : s.insertBefore(n, s.firstChild)), c.colSpan > 1 && e.__mark(n, "colspan", c.colSpan, l), e.__unmark(l), e.restoreSelection(c)
                }), this.normalizeTable(t)
            }, e.splitVertical = function (t) {
                var o, n, s, a = [];
                e.getAllSelectedCells(t).forEach(function (l) {
                    o = e.formalCoordinate(t, l), 2 > l.colSpan ? e.formalMatrix(t, function (t, n, i) {
                        o[1] === i && o[0] !== n && t !== l && e.__mark(t, "colspan", t.colSpan + 1, a)
                    }) : e.__mark(l, "colspan", l.colSpan - 1, a), n = t.ownerDocument.createElement("td"), n.appendChild(t.ownerDocument.createElement("br")), l.rowSpan > 1 && e.__mark(n, "rowspan", l.rowSpan, a);
                    var c = l.offsetWidth;
                    r.Dom.after(l, n), s = c / t.offsetWidth / 2, e.__mark(l, "width", (100 * s).toFixed(i.ACCURACY) + "%", a), e.__mark(n, "width", (100 * s).toFixed(i.ACCURACY) + "%", a), e.__unmark(a), e.restoreSelection(l)
                }), e.normalizeTable(t)
            }, e.__mark = function (e, t, o, n) {
                n.push(e), e.__marked_value || (e.__marked_value = {}), e.__marked_value[t] = void 0 === o ? 1 : o
            }, e.__unmark = function (e) {
                e.forEach(function (e) {
                    e.__marked_value && (n.each(e.__marked_value, function (t, o) {
                        switch (t) {
                            case"remove":
                                e.parentNode && e.parentNode.removeChild(e);
                                break;
                            case"rowspan":
                                o > 1 ? e.setAttribute("rowspan", o) : e.removeAttribute("rowspan");
                                break;
                            case"colspan":
                                o > 1 ? e.setAttribute("colspan", o) : e.removeAttribute("colspan");
                                break;
                            case"width":
                                e.style.width = o
                        }
                        delete e.__marked_value[t]
                    }), delete e.__marked_value)
                })
            }, e.setColumnWidthByDelta = function (t, o, n, r, s) {
                var a, l, c, d = e.formalMatrix(t);
                for (a = 0; d.length > a; a += 1) l = d[a][o].offsetWidth, c = (l + n) / t.offsetWidth * 100, e.__mark(d[a][o], "width", c.toFixed(i.ACCURACY) + "%", s);
                r || e.__unmark(s)
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        o(22), o(23);
        var n = o(6), i = o(5), r = o(2), s = o(29), a = o(12), l = o(70), c = o(76), d = o(1);
        Object.keys(r).forEach(function (e) {
            n.Jodit[e] = r[e]
        });
        var u = function (e) {
            return "__esModule" !== e
        };
        Object.keys(c).filter(u).forEach(function (e) {
            i.ToolbarIcon.icons[e.replace("_", "-")] = c[e]
        }), Object.keys(a).filter(u).forEach(function (e) {
            n.Jodit.modules[e] = a[e]
        }), Object.keys(s).filter(u).forEach(function (e) {
            n.Jodit.plugins[e] = s[e]
        }), Object.keys(l).filter(u).forEach(function (e) {
            n.Jodit.lang[e] = l[e]
        }), n.Jodit.defaultOptions = new d.Config, d.OptionsDefault.prototype = n.Jodit.defaultOptions, e.exports = n.Jodit
    }, function (e, t) {
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), o(24), o(25), function (e) {
            e.matches || (e.matches = void 0 !== e.matchesSelector ? e.matchesSelector : function (e) {
                var t = this.ownerDocument.querySelectorAll(e), o = this;
                return Array.prototype.some.call(t, function (e) {
                    return e === o
                })
            })
        }(Element.prototype)
    }, function (e, t) {
        "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (e) {
            "use strict";
            if ("Element" in e) {
                var t = e.Element.prototype, o = Object, n = String.prototype.trim || function () {
                    return this.replace(/^\s+|\s+$/g, "")
                }, i = Array.prototype.indexOf || function (e) {
                    for (var t = 0, o = this.length; o > t; t++) if (t in this && this[t] === e) return t;
                    return -1
                }, r = function (e, t) {
                    this.name = e, this.code = DOMException[e], this.message = t
                }, s = function (e, t) {
                    if ("" === t) throw new r("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(t)) throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return i.call(e, t)
                }, a = function (e) {
                    for (var t = n.call(e.getAttribute("class") || ""), o = t ? t.split(/\s+/) : [], i = 0, r = o.length; r > i; i++) this.push(o[i]);
                    this._updateClassName = function () {
                        e.setAttribute("class", "" + this)
                    }
                }, l = a.prototype = [], c = function () {
                    return new a(this)
                };
                if (r.prototype = Error.prototype, l.item = function (e) {
                    return this[e] || null
                }, l.contains = function (e) {
                    return e += "", -1 !== s(this, e)
                }, l.add = function () {
                    var e, t = arguments, o = 0, n = t.length, i = !1;
                    do {
                        e = t[o] + "", -1 === s(this, e) && (this.push(e), i = !0)
                    } while (++o < n);
                    i && this._updateClassName()
                }, l.remove = function () {
                    var e, t, o = arguments, n = 0, i = o.length, r = !1;
                    do {
                        for (e = o[n] + "", t = s(this, e); -1 !== t;) this.splice(t, 1), r = !0, t = s(this, e)
                    } while (++n < i);
                    r && this._updateClassName()
                }, l.toggle = function (e, t) {
                    e += "";
                    var o = this.contains(e), n = o ? !0 !== t && "remove" : !1 !== t && "add";
                    return n && this[n](e), !0 === t || !1 === t ? t : !o
                }, l.toString = function () {
                    return this.join(" ")
                }, o.defineProperty) {
                    var d = {get: c, enumerable: !0, configurable: !0};
                    try {
                        o.defineProperty(t, "classList", d)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (d.enumerable = !1, o.defineProperty(t, "classList", d))
                    }
                } else o.prototype.__defineGetter__ && t.__defineGetter__("classList", c)
            }
        }(window.self), function () {
            "use strict";
            var e = document.createElement("_");
            if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
                var t = function (e) {
                    var t = DOMTokenList.prototype[e];
                    DOMTokenList.prototype[e] = function (e) {
                        var o, n = arguments.length;
                        for (o = 0; n > o; o++) e = arguments[o], t.call(this, e)
                    }
                };
                t("add"), t("remove")
            }
            if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
                var o = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function (e, t) {
                    return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e)
                }
            }
            e = null
        }())
    }, function (e, t, o) {
        "use strict";
        e.exports = o(26).polyfill()
    }, function (e, t, o) {
        (function (t) {
            !function (t, o) {
                e.exports = function () {
                    "use strict";

                    function e(e) {
                        var t = typeof e;
                        return null !== e && ("object" === t || "function" === t)
                    }

                    function o(e) {
                        return "function" == typeof e
                    }

                    function n(e) {
                        R = e
                    }

                    function i(e) {
                        H = e
                    }

                    function r() {
                        return void 0 !== B ? function () {
                            B(a)
                        } : s()
                    }

                    function s() {
                        var e = setTimeout;
                        return function () {
                            return e(a, 1)
                        }
                    }

                    function a() {
                        for (var e = 0; P > e; e += 2) (0, X[e])(X[e + 1]), X[e] = void 0, X[e + 1] = void 0;
                        P = 0
                    }

                    function l(e, t) {
                        var o = this, n = new this.constructor(d);
                        void 0 === n[$] && q(n);
                        var i = o._state;
                        if (i) {
                            var r = arguments[i - 1];
                            H(function () {
                                return x(i, n, r, o._result)
                            })
                        } else C(o, n, e, t);
                        return n
                    }

                    function c(e) {
                        var t = this;
                        if (e && "object" == typeof e && e.constructor === t) return e;
                        var o = new t(d);
                        return _(o, e), o
                    }

                    function d() {
                    }

                    function u() {
                        return new TypeError("You cannot resolve a promise with itself")
                    }

                    function p() {
                        return new TypeError("A promises callback cannot return that same promise.")
                    }

                    function f(e) {
                        try {
                            return e.then
                        } catch (e) {
                            return Q.error = e, Q
                        }
                    }

                    function h(e, t, o, n) {
                        try {
                            e.call(t, o, n)
                        } catch (e) {
                            return e
                        }
                    }

                    function m(e, t, o) {
                        H(function (e) {
                            var n = !1, i = h(o, t, function (o) {
                                n || (n = !0, t !== o ? _(e, o) : y(e, o))
                            }, function (t) {
                                n || (n = !0, w(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                            !n && i && (n = !0, w(e, i))
                        }, e)
                    }

                    function v(e, t) {
                        t._state === J ? y(e, t._result) : t._state === Z ? w(e, t._result) : C(t, void 0, function (t) {
                            return _(e, t)
                        }, function (t) {
                            return w(e, t)
                        })
                    }

                    function g(e, t, n) {
                        t.constructor === e.constructor && n === l && t.constructor.resolve === c ? v(e, t) : n === Q ? (w(e, Q.error), Q.error = null) : void 0 === n ? y(e, t) : o(n) ? m(e, t, n) : y(e, t)
                    }

                    function _(t, o) {
                        t === o ? w(t, u()) : e(o) ? g(t, o, f(o)) : y(t, o)
                    }

                    function b(e) {
                        e._onerror && e._onerror(e._result), E(e)
                    }

                    function y(e, t) {
                        e._state === G && (e._result = t, e._state = J, 0 !== e._subscribers.length && H(E, e))
                    }

                    function w(e, t) {
                        e._state === G && (e._state = Z, e._result = t, H(b, e))
                    }

                    function C(e, t, o, n) {
                        var i = e._subscribers, r = i.length;
                        e._onerror = null, i[r] = t, i[r + J] = o, i[r + Z] = n, 0 === r && e._state && H(E, e)
                    }

                    function E(e) {
                        var t = e._subscribers, o = e._state;
                        if (0 !== t.length) {
                            for (var n = void 0, i = void 0, r = e._result, s = 0; t.length > s; s += 3) n = t[s], i = t[s + o], n ? x(o, n, i, r) : i(r);
                            e._subscribers.length = 0
                        }
                    }

                    function j(e, t) {
                        try {
                            return e(t)
                        } catch (e) {
                            return Q.error = e, Q
                        }
                    }

                    function x(e, t, n, i) {
                        var r = o(n), s = void 0, a = void 0, l = void 0, c = void 0;
                        if (r) {
                            if (s = j(n, i), s === Q ? (c = !0, a = s.error, s.error = null) : l = !0, t === s) return void w(t, p())
                        } else s = i, l = !0;
                        t._state !== G || (r && l ? _(t, s) : c ? w(t, a) : e === J ? y(t, s) : e === Z && w(t, s))
                    }

                    function T(e, t) {
                        try {
                            t(function (t) {
                                _(e, t)
                            }, function (t) {
                                w(e, t)
                            })
                        } catch (t) {
                            w(e, t)
                        }
                    }

                    function S() {
                        return ee++
                    }

                    function q(e) {
                        e[$] = ee++, e._state = void 0, e._result = void 0, e._subscribers = []
                    }

                    function D() {
                        return Error("Array Methods must be provided an Array")
                    }

                    function I(e) {
                        return new te(this, e).promise
                    }

                    function N(e) {
                        var t = this;
                        return new t(z(e) ? function (o, n) {
                            for (var i = e.length, r = 0; i > r; r++) t.resolve(e[r]).then(o, n)
                        } : function (e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        })
                    }

                    function L(e) {
                        var t = this, o = new t(d);
                        return w(o, e), o
                    }

                    function A() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }

                    function k() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }

                    function M() {
                        var e = void 0;
                        if (void 0 !== t) e = t; else if ("undefined" != typeof self) e = self; else try {
                            e = Function("return this")()
                        } catch (e) {
                            throw Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var o = e.Promise;
                        if (o) {
                            var n = null;
                            try {
                                n = Object.prototype.toString.call(o.resolve())
                            } catch (e) {
                            }
                            if ("[object Promise]" === n && !o.cast) return
                        }
                        e.Promise = oe
                    }

                    var O = void 0;
                    O = Array.isArray ? Array.isArray : function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    };
                    var z = O, P = 0, B = void 0, R = void 0, H = function (e, t) {
                            X[P] = e, X[P + 1] = t, 2 === (P += 2) && (R ? R(a) : K())
                        }, W = "undefined" != typeof window ? window : void 0, F = W || {},
                        V = F.MutationObserver || F.WebKitMutationObserver,
                        Y = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                        U = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                        X = Array(1e3), K = void 0;
                    K = Y ? function () {
                        return function () {
                            return process.nextTick(a)
                        }
                    }() : V ? function () {
                        var e = 0, t = new V(a), o = document.createTextNode("");
                        return t.observe(o, {characterData: !0}), function () {
                            o.data = e = ++e % 2
                        }
                    }() : U ? function () {
                        var e = new MessageChannel;
                        return e.port1.onmessage = a, function () {
                            return e.port2.postMessage(0)
                        }
                    }() : void 0 === W ? function () {
                        try {
                            var e = Function("return this")().require("vertx");
                            return B = e.runOnLoop || e.runOnContext, r()
                        } catch (e) {
                            return s()
                        }
                    }() : s();
                    var $ = Math.random().toString(36).substring(2), G = void 0, J = 1, Z = 2, Q = {error: null},
                        ee = 0, te = function () {
                            function e(e, t) {
                                this._instanceConstructor = e, this.promise = new e(d), this.promise[$] || q(this.promise), z(t) ? (this.length = t.length, this._remaining = t.length, this._result = Array(this.length), 0 === this.length ? y(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && y(this.promise, this._result))) : w(this.promise, D())
                            }

                            return e.prototype._enumerate = function (e) {
                                for (var t = 0; this._state === G && e.length > t; t++) this._eachEntry(e[t], t)
                            }, e.prototype._eachEntry = function (e, t) {
                                var o = this._instanceConstructor, n = o.resolve;
                                if (n === c) {
                                    var i = f(e);
                                    if (i === l && e._state !== G) this._settledAt(e._state, t, e._result); else if ("function" != typeof i) this._remaining--, this._result[t] = e; else if (o === oe) {
                                        var r = new o(d);
                                        g(r, e, i), this._willSettleAt(r, t)
                                    } else this._willSettleAt(new o(function (t) {
                                        return t(e)
                                    }), t)
                                } else this._willSettleAt(n(e), t)
                            }, e.prototype._settledAt = function (e, t, o) {
                                var n = this.promise;
                                n._state === G && (this._remaining--, e === Z ? w(n, o) : this._result[t] = o), 0 === this._remaining && y(n, this._result)
                            }, e.prototype._willSettleAt = function (e, t) {
                                var o = this;
                                C(e, void 0, function (e) {
                                    return o._settledAt(J, t, e)
                                }, function (e) {
                                    return o._settledAt(Z, t, e)
                                })
                            }, e
                        }(), oe = function () {
                            function e(t) {
                                this[$] = S(), this._result = this._state = void 0, this._subscribers = [], d !== t && ("function" != typeof t && A(), this instanceof e ? T(this, t) : k())
                            }

                            return e.prototype.catch = function (e) {
                                return this.then(null, e)
                            }, e.prototype.finally = function (e) {
                                var t = this, o = t.constructor;
                                return t.then(function (t) {
                                    return o.resolve(e()).then(function () {
                                        return t
                                    })
                                }, function (t) {
                                    return o.resolve(e()).then(function () {
                                        throw t
                                    })
                                })
                            }, e
                        }();
                    return oe.prototype.then = l, oe.all = I, oe.race = N, oe.resolve = c, oe.reject = L, oe._setScheduler = n, oe._setAsap = i, oe._asap = H, oe.polyfill = M, oe.Promise = oe, oe
                }()
            }()
        }).call(t, o(27))
    }, function (e, t) {
        var o;
        o = function () {
            return this
        }();
        try {
            o = o || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (o = window)
        }
        e.exports = o
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(4);
        t.StatusBar = function (e) {
            function t(t, o) {
                var n = e.call(this, t) || this;
                return n.target = o, n.container = t.ownerDocument.createElement("div"), n.container.classList.add("jodit_statusbar"), o.appendChild(n.container), n.hide(), n
            }

            return n(t, e), t.prototype.hide = function () {
                this.container && (this.container.style.display = "none")
            }, t.prototype.show = function () {
                this.container && (this.container.style.display = "block")
            }, t.prototype.append = function (e, t) {
                void 0 === t && (t = !1);
                var o = this.jodit.ownerDocument.createElement("div");
                o.classList.add("jodit_statusbar_item"), t && o.classList.add("jodit_statusbar_item-right"), o.appendChild(e), this.container.appendChild(o), this.show(), this.jodit.events.fire("resize")
            }, t.prototype.destruct = function () {
                e.prototype.destruct.call(this), this.container.parentNode && this.container.parentNode.removeChild(this.container)
            }, t
        }(i.Component)
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.addNewLine = o(30).addNewLine, t.autofocus = o(31).autofocus, t.backspace = o(32).backspace, t.bold = o(33).bold, t.cleanHTML = o(34).cleanHTML, t.color = o(35).color, o(36), t.enter = o(37).enter, t.errorMessages = o(38).errorMessages, t.font = o(39).font, t.formatBlock = o(40).formatBlock, t.fullsize = o(41).fullsize, t.iframe = o(42).iframe, t.indent = o(43).indent, t.imageProcessor = o(44).imageProcessor, t.imageProperties = o(45).imageProperties, t.inlinePopup = o(46).inlinePopup, t.justify = o(47).justify, t.link = o(48).link, t.mobile = o(49).mobile, t.orderedlist = o(50).orderedlist, t.paste = o(51).paste, t.placeholder = o(52).placeholder, t.redoundo = o(53).redoundo, t.resizer = o(54).resizer, t.size = o(55).size, t.source = o(56).source, t.symbols = o(57).symbols, t.hotkeys = o(58).hotkeys, t.table = o(59).TableProcessor, t.tableKeyboardNavigation = o(63).tableKeyboardNavigation, t.search = o(64).search, t.sticky = o(65).sticky, t.stat = o(66).stat, t.xpath = o(67).xpath, t.DragAndDrop = o(68).DragAndDrop, t.pasteStorage = o(69).pasteStorage
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            if (e.options.addNewLine) {
                var t, o,
                    n = r.dom('<div role="button" tabIndex="-1" title="' + e.i18n("Break") + '" class="jodit-add-new-line"><span>' + s.ToolbarIcon.getIcon("enter") + "</span></div>", e.ownerDocument),
                    i = RegExp("^(" + e.options.addNewLineTagsTriggers.join("|") + ")$", "i"), l = !1, c = !1, d = !1,
                    u = function () {
                        e.options.readonly || e.isLocked() || e.container.classList.contains("jodit_popup_active") || (clearTimeout(t), n.classList.toggle("jodit-add-new-line_after", !c), n.style.display = "block", n.style.width = e.editor.clientWidth + "px", l = !1)
                    }, p = function () {
                        clearTimeout(t), d = !1, n.style.display = "none", l = !0
                    }, f = function (e) {
                        return null !== e && a.Dom.isBlock(e) && !/^(img|table|iframe|hr)$/i.test(e.nodeName)
                    }, h = function () {
                        l || d || (clearTimeout(t), t = window.setTimeout(p, 500))
                    };
                e.events.on("beforeDestruct", function () {
                    n.parentNode && n.parentNode.removeChild(n)
                }).on("afterInit", function () {
                    e.container.appendChild(n), e.events.on(n, "mousemove", function (e) {
                        e.stopPropagation()
                    }).on(n, "mousedown touchstart", function (t) {
                        var n = e.editorDocument.createElement(e.options.enter);
                        c && o && o.parentNode ? o.parentNode.insertBefore(n, o) : e.editor.appendChild(n), e.selection.setCursorIn(n), e.setEditorValue(), p(), t.preventDefault()
                    })
                }).on("afterInit", function () {
                    e.events.on(e.editor, "scroll", function () {
                        p()
                    }).on(e.container, "mouseleave", h).on(n, "mouseenter", function () {
                        clearTimeout(t), d = !0
                    }).on(n, "mouseleave", function () {
                        d = !1
                    }).on(e.editor, "dblclick", function (t) {
                        if (e.options.addNewLineOnDBLClick && t.target === e.editor && e.selection.isCollapsed()) {
                            var o = r.offset(e.editor, e, e.editorDocument), n = t.pageY - e.editorWindow.pageYOffset,
                                i = e.editorDocument.createElement(e.options.enter);
                            Math.abs(n - o.top) < Math.abs(n - (o.height + o.top)) && e.editor.firstChild ? e.editor.insertBefore(i, e.editor.firstChild) : e.editor.appendChild(i), e.selection.setCursorIn(i), e.setEditorValue(), p(), t.preventDefault()
                        }
                    }).on(e.editor, "mousemove", r.debounce(function (t) {
                        var s = e.editorDocument.elementFromPoint(t.pageX - e.editorWindow.pageXOffset, t.pageY - e.editorWindow.pageYOffset);
                        if ((!s || !a.Dom.isOrContains(n, s)) && s && a.Dom.isOrContains(e.editor, s)) {
                            if (!(s && s.nodeName.match(i) && a.Dom.isOrContains(e.editor, s) || (s = a.Dom.closest(s, i, e.editor)))) return void h();
                            if (s.nodeName.match(i)) {
                                var l = a.Dom.up(s, a.Dom.isBlock, e.editor);
                                l && l !== e.editor && (s = l)
                            }
                            var d = r.offset(e.editor, e, e.editorDocument), p = r.offset(s, e, e.editorDocument),
                                m = !1;
                            10 > Math.abs(t.pageY - p.top) && (m = p.top, 20 > m - d.top || (m -= 15), c = !0), 10 > Math.abs(t.pageY - (p.top + p.height)) && (m = p.top + p.height, 25 > d.top + d.height - m || (m += 15), c = !1), !1 !== m && (c && !a.Dom.prev(s, f, e.editor) || !c && !a.Dom.next(s, f, e.editor)) ? (n.style.top = m + "px", o = s, u()) : (o = !1, h())
                        }
                    }, e.defaultTimeout))
                })
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(0), s = o(5), a = o(3);
        i.Config.prototype.addNewLine = !0, i.Config.prototype.addNewLineOnDBLClick = !0, i.Config.prototype.addNewLineTagsTriggers = ["table", "iframe", "img", "hr", "jodit"], t.addNewLine = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t;
            e.events.on("afterInit", function () {
                e.options.autofocus && (e.defaultTimeout ? t = window.setTimeout(e.selection.focus, 300) : e.selection.focus())
            }).on("mousedown", function (t) {
                e.isEditorMode() && t.target && r.Dom.isBlock(t.target) && !t.target.childNodes.length && (e.editor === t.target ? e.selection.focus() : e.selection.setCursorIn(t.target))
            }).on("beforeDestruct", function () {
                clearTimeout(t)
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(3);
        i.Config.prototype.autofocus = !1, t.autofocus = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = function (t) {
                var o, n = t;
                r.normalizeNode(t);
                do {
                    var a = n.innerHTML.replace(i.INVISIBLE_SPACE_REG_EXP, "");
                    if (a.length && "<br>" !== a || s.Dom.isCell(n, e.editorWindow) || !n.parentNode || t === e.editor) break;
                    o = n.parentNode, n.parentNode.removeChild(n), n = o
                } while (n && n !== e.editor)
            }, o = function (t, n, r) {
                if (t.node && t.node.nodeType === Node.TEXT_NODE && "string" == typeof t.node.nodeValue) {
                    for (var a = n ? t.node.nodeValue.length : 0, l = a, c = t.node.nodeValue, d = n ? -1 : 1; a >= 0 && c.length >= a && c[a + (n ? -1 : 0)] === i.INVISIBLE_SPACE;) a += d;
                    a !== l && (n ? c = c.substr(0, a) + c.substr(l) : (c = c.substr(0, l) + c.substr(a), a = l), t.node.nodeValue = c), r.setStart(t.node, a), r.collapse(!0), e.selection.selectRange(r);
                    var u = s.Dom.findInline(t.node, n, e.editor);
                    if (c.length) {
                        var p = !1;
                        if (n ? a && (p = !0) : c.length > a && (p = !0), p) return !0
                    } else r.setStartBefore(t.node), r.collapse(!0), e.selection.selectRange(r), t.node && t.node.parentNode && t.node.parentNode.removeChild(t.node), t.node = u;
                    if (u && (s.Dom.isInlineBlock(u) && (u = n ? u.lastChild : u.firstChild), u && u.nodeType === Node.TEXT_NODE)) return t.node = u, o(t, n, r)
                }
            };
            e.events.on("afterCommand", function (t) {
                if ("delete" === t) {
                    var o = e.selection.current();
                    if (o && o.firstChild && "BR" === o.firstChild.nodeName && o.removeChild(o.firstChild), !(r.trim(e.editor.innerText) || e.editor.querySelector("img") || o && s.Dom.closest(o, "table", e.editor))) {
                        e.editor.innerHTML = "";
                        var n = e.selection.setCursorIn(e.editor);
                        n.parentNode && n.parentNode.removeChild(n)
                    }
                }
            }).on("keydown", function (n) {
                if (n.which === i.KEY_BACKSPACE || n.which === i.KEY_DELETE) {
                    var a = n.which === i.KEY_BACKSPACE;
                    if (e.selection.isFocused() || e.selection.focus(), !e.selection.isCollapsed()) return e.execCommand("Delete"), !1;
                    var l = e.editorWindow.getSelection(), c = !!l.rangeCount && l.getRangeAt(0);
                    if (!c) return !1;
                    var d = e.ownerDocument.createTextNode(i.INVISIBLE_SPACE),
                        u = e.editorDocument.createElement("span"),
                        p = /^(IMG|BR|IFRAME|SCRIPT|INPUT|TEXTAREA|TABLE|HR)$/, f = function (e) {
                            return null === e.nodeName.match(/^(TD|TH|TR|TABLE|LI)$/) && (!(!s.Dom.isEmpty(e) && null === e.nodeName.match(p)) || !(e.nodeType === Node.TEXT_NODE && !s.Dom.isEmptyTextNode(e)) && (!e.childNodes.length || [].slice.call(e.childNodes).every(f)))
                        };
                    try {
                        if (c.insertNode(d), !s.Dom.isOrContains(e.editor, d)) return !1;
                        var h = s.Dom.up(d, s.Dom.isBlock, e.editor), m = s.Dom.findInline(d, a, e.editor);
                        if (m) {
                            var v = {node: m};
                            if (void 0 !== o(v, a, c)) return;
                            if ((m = v.node || d.parentNode) === e.editor) return !1;
                            if (m && p.test(m.nodeName)) return m.parentNode && m.parentNode.removeChild(m), !1
                        }
                        if (h && h.nodeName.match(/^(TD)$/)) return !1;
                        var g = a ? s.Dom.prev(m || d, s.Dom.isBlock, e.editor) : s.Dom.next(m || d, s.Dom.isBlock, e.editor);
                        if (!g && h && h.parentNode) {
                            g = e.editorDocument.createElement(e.options.enter);
                            for (var v = h; v && v.parentNode && v.parentNode !== e.editor;) v = v.parentNode;
                            v.parentNode && v.parentNode.insertBefore(g, v)
                        } else if (g && f(g)) return g.parentNode && g.parentNode.removeChild(g), !1;
                        if (g) {
                            var _ = e.selection.setCursorIn(g, !a);
                            e.selection.insertNode(u, !1, !1), _.nodeType === Node.TEXT_NODE && _.nodeValue === i.INVISIBLE_SPACE && _.parentNode && _.parentNode.removeChild(_)
                        }
                        if (h) {
                            if (t(h), g && h.parentNode && (h.nodeName === g.nodeName && h.parentNode && g.parentNode && h.parentNode !== e.editor && g.parentNode !== e.editor && h.parentNode !== g.parentNode && h.parentNode.nodeName === g.parentNode.nodeName && (h = h.parentNode, g = g.parentNode), s.Dom.moveContent(h, g, !a), r.normalizeNode(g)), g && "LI" === g.nodeName) {
                                var b = s.Dom.closest(g, "Ul|OL", e.editor);
                                if (b) {
                                    var y = b.nextSibling;
                                    y && y.nodeName === b.nodeName && b !== y && (s.Dom.moveContent(y, b, !a), y.parentNode && y.parentNode.removeChild(y))
                                }
                            }
                            return t(h), !1
                        }
                    } finally {
                        if (d.parentNode && d.nodeValue === i.INVISIBLE_SPACE && d.parentNode.removeChild(d), u && s.Dom.isOrContains(e.editor, u, !0)) {
                            var _ = e.selection.setCursorBefore(u);
                            u.parentNode && u.parentNode.removeChild(u), _ && _.parentNode && (s.Dom.findInline(_, !0, _.parentNode) || s.Dom.findInline(_, !0, _.parentNode)) && _.parentNode.removeChild(_)
                        }
                        e.setEditorValue()
                    }
                    return !1
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(2), r = o(0), s = o(3);
        t.backspace = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = function (t) {
                var o = r.Jodit.defaultOptions.controls[t], n = i({}, o.css), s = {};
                return Object.keys(n).forEach(function (e) {
                    s[e] = Array.isArray(n[e]) ? n[e][0] : n[e]
                }), e.selection.applyCSS(s, o.tags ? o.tags[0] : void 0, o.css), e.setEditorValue(), !1
            };
            e.registerCommand("bold", {exec: t, hotkeys: "ctrl+b"}), e.registerCommand("italic", {
                exec: t,
                hotkeys: "ctrl+i"
            }), e.registerCommand("underline", {
                exec: t,
                hotkeys: "ctrl+u"
            }), e.registerCommand("strikethrough", {exec: t})
        }

        var i = this && this.__assign || Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; n > o; o++) {
                t = arguments[o];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = o(6), s = o(1);
        s.Config.prototype.controls.bold = {
            tagRegExp: /^(strong|b)$/i,
            tags: ["strong", "b"],
            css: {"font-weight": ["bold", "700"]},
            tooltip: "Bold"
        }, s.Config.prototype.controls.italic = {
            tagRegExp: /^(em|i)$/i,
            tags: ["em", "i"],
            css: {"font-style": "italic"},
            tooltip: "Italic"
        }, s.Config.prototype.controls.underline = {
            tagRegExp: /^(u)$/i,
            tags: ["u"],
            css: {"text-decoration": "underline"},
            tooltip: "Underline"
        }, s.Config.prototype.controls.strikethrough = {
            tagRegExp: /^(s)$/i,
            tags: ["s"],
            css: {"text-decoration": "line-through"},
            tooltip: "Strike through"
        }, t.bold = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            e.options.cleanHTML.cleanOnPaste && e.events.on("processPaste", function (e, t) {
                return s.cleanFromWord(t)
            });
            var t, o = /([^\[]*)\[([^\]]+)]/, n = /[\s]*,[\s]*/, i = /^(.*)[\s]*=[\s]*(.*)$/, c = function (e) {
                var t = {};
                return "string" == typeof e ? (e.split(n).map(function (e) {
                    e = s.trim(e);
                    var r = o.exec(e), a = {}, l = function (e) {
                        e = s.trim(e);
                        var t = i.exec(e);
                        t ? a[t[1]] = t[2] : a[e] = !0
                    };
                    if (r) {
                        var c = r[2].split(n);
                        r[1] && (c.forEach(l), t[r[1].toUpperCase()] = a)
                    } else t[e.toUpperCase()] = !0
                }), t) : !!e && (Object.keys(e).forEach(function (o) {
                    t[o.toUpperCase()] = e[o]
                }), t)
            }, d = c(e.options.cleanHTML.allowTags), u = c(e.options.cleanHTML.denyTags), p = function (e, t) {
                void 0 === t && (t = !1);
                for (var o = t ? e.nextSibling : e.previousSibling; o;) {
                    if (o.nodeType === Node.ELEMENT_NODE || !a.Dom.isEmptyTextNode(o)) return !0;
                    o = t ? o.nextSibling : o.previousSibling
                }
                return !1
            }, f = function (o) {
                return !(o.nodeType === Node.TEXT_NODE || !(d && !d[o.nodeName] || u && u[o.nodeName])) || !(!t || "BR" !== o.nodeName || !p(o) || p(o, !0) || a.Dom.up(o, a.Dom.isBlock, e.editor) === a.Dom.up(t, a.Dom.isBlock, e.editor)) || e.options.cleanHTML.removeEmptyElements && !1 !== t && o.nodeType === Node.ELEMENT_NODE && null !== o.nodeName.match(l.IS_INLINE) && !e.selection.isMarker(o) && 0 === s.trim(o.innerHTML).length && !a.Dom.isOrContains(o, t)
            };
            e.events.on("change afterSetMode afterInit mousedown keydown", s.debounce(function () {
                if (!e.isDestructed && e.isEditorMode()) {
                    t = e.selection.current();
                    var o = null, n = [], i = !1, r = 0, s = e.options.cleanHTML.replaceOldTags;
                    if (s && t) {
                        var l = Object.keys(s).join("|");
                        if (e.selection.isCollapsed()) {
                            var c = a.Dom.closest(t, l, e.editor);
                            if (c) {
                                var u = e.selection.save(), p = s[c.nodeName.toLowerCase()] || s[c.nodeName];
                                a.Dom.replace(c, p, !0, !1, e.editorDocument), e.selection.restore(u)
                            }
                        }
                    }
                    var h = function (e) {
                        if (e) {
                            if (f(e)) return n.push(e), h(e.nextSibling);
                            if (d && !0 !== d[e.nodeName] && e.attributes && e.attributes.length) {
                                var t = [];
                                for (r = 0; e.attributes.length > r; r += 1) (!d[e.nodeName][e.attributes[r].name] || !0 !== d[e.nodeName][e.attributes[r].name] && d[e.nodeName][e.attributes[r].name] !== e.attributes[r].value) && t.push(e.attributes[r].name);
                                t.length && (i = !0), t.forEach(function (t) {
                                    e.removeAttribute(t)
                                })
                            }
                            h(e.firstChild), h(e.nextSibling)
                        }
                    };
                    e.editor.firstChild && (o = e.editor.firstChild), h(o), n.forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), (n.length || i) && e.events && e.events.fire("syncho")
                }
            }, e.options.cleanHTML.timeout)).on("keyup", function () {
                if (!e.options.readonly) {
                    var t = e.selection.current();
                    if (t) {
                        var o = a.Dom.up(t, a.Dom.isBlock, e.editor);
                        o && a.Dom.all(o, function (o) {
                            o.nodeType === Node.TEXT_NODE && null !== o.nodeValue && r.INVISIBLE_SPACE_REG_EXP.test(o.nodeValue) && 0 !== o.nodeValue.replace(r.INVISIBLE_SPACE_REG_EXP, "").length && (o.nodeValue = o.nodeValue.replace(r.INVISIBLE_SPACE_REG_EXP, ""), o === t && e.selection.isCollapsed() && e.selection.setCursorAfter(o))
                        })
                    }
                }
            }).on("keyup", function () {
                if (e.selection.isCollapsed()) {
                    var t = e.selection.current();
                    if (t && t.nodeType === Node.TEXT_NODE && t.nodeValue !== r.INVISIBLE_SPACE) for (; t = a.Dom.findInline(t, !0, e.editor);) t && t.nodeType === Node.TEXT_NODE && t.nodeValue && t.nodeValue.match(r.INVISIBLE_SPACE_REG_EXP) && (t.nodeValue = t.nodeValue.replace(r.INVISIBLE_SPACE_REG_EXP, ""))
                }
            }).on("afterCommand", function (t) {
                var o, n, i = e.selection;
                switch (t.toLowerCase()) {
                    case"inserthorizontalrule":
                        (o = e.editor.querySelector("hr[id=null]")) && (n = a.Dom.next(o, a.Dom.isBlock, e.editor, !1), n || (n = e.editorDocument.createElement(e.options.enter)) && a.Dom.after(o, n), i.setCursorIn(n));
                        break;
                    case"removeformat":
                        n = i.current();
                        var l = function (t) {
                            switch (t.nodeType) {
                                case Node.ELEMENT_NODE:
                                    a.Dom.each(t, l), "FONT" === t.nodeName ? a.Dom.unwrap(t) : ([].slice.call(t.attributes).forEach(function (e) {
                                        -1 === ["src", "href", "rel", "content"].indexOf(e.name.toLowerCase()) && t.removeAttribute(e.name)
                                    }), s.normalizeNode(t));
                                    break;
                                case Node.TEXT_NODE:
                                    e.options.cleanHTML.replaceNBSP && t.nodeType === Node.TEXT_NODE && null !== t.nodeValue && t.nodeValue.match(r.SPACE_REG_EXP) && (t.nodeValue = t.nodeValue.replace(r.SPACE_REG_EXP, " "));
                                    break;
                                default:
                                    t.parentNode && t.parentNode.removeChild(t)
                            }
                        };
                        if (i.isCollapsed()) for (; n && n.nodeType !== Node.ELEMENT_NODE && n !== e.editor;) l(n), n && (n = n.parentNode); else e.selection.eachSelection(function (e) {
                            l(e)
                        })
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(2), s = o(0), a = o(3), l = o(2);
        i.Config.prototype.cleanHTML = {
            timeout: 300,
            removeEmptyElements: !0,
            replaceNBSP: !0,
            cleanOnPaste: !0,
            replaceOldTags: {i: "em", b: "strong"},
            allowTags: !1,
            denyTags: !1
        }, i.Config.prototype.controls.eraser = {command: "removeFormat", tooltip: "Clear Formatting"}, t.cleanHTML = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = function (t, o, n) {
                var r = i.normalizeColor(n);
                switch (t) {
                    case"background":
                        e.selection.applyCSS({backgroundColor: r || ""});
                        break;
                    case"forecolor":
                        e.selection.applyCSS({color: r || ""})
                }
                return e.setEditorValue(), !1
            };
            e.registerCommand("forecolor", t), e.registerCommand("background", t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(0), r = o(1), s = o(10), a = s.Widget.TabsWidget, l = s.Widget.ColorPickerWidget, c = o(3);
        r.Config.prototype.controls.brush = {
            isActive: function (e, t, o) {
                var n = e.selection.current(), r = o.container.querySelector("svg");
                if (n) {
                    var s = c.Dom.closest(n, function (t) {
                        return c.Dom.isBlock(t) || c.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE
                    }, e.editor) || e.editor, a = "" + i.css(s, "color"), l = "" + i.css(s, "background-color");
                    if (a !== "" + i.css(e.editor, "color")) return r && (r.style.fill = a), !0;
                    if (l !== "" + i.css(e.editor, "background-color")) return r && (r.style.fill = l), !0
                }
                return r && r.style.fill && (r.style.fill = null), !1
            }, popup: function (e, t, o, n) {
                var r, s = "", d = "", u = null;
                t && t !== e.editor && c.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE && (s = "" + i.css(t, "color"), d = "" + i.css(t, "background-color"), u = t);
                var p = l(e, function (t) {
                    u ? u.style.backgroundColor = t : e.execCommand("background", !1, t), n()
                }, d), f = l(e, function (t) {
                    u ? u.style.color = t : e.execCommand("forecolor", !1, t), n()
                }, s);
                return r = "background" === e.options.colorPickerDefaultTab ? {Background: p, Text: f} : {
                    Text: f,
                    Background: p
                }, a(e, r, u)
            }, tooltip: "Fill color or set the text color"
        }, t.color = n
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(1), i = o(3), r = o(0),
            s = ["fontWeight", "fontStyle", "fontSize", "color", "margin", "padding", "borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "textDecorationLine", "fontFamily"],
            a = function (e, t, o, n) {
                var i = r.css(o, t);
                return i == n[t] && (i = o.parentNode && o !== e.editor && o.parentNode !== e.editor ? a(e, t, o.parentNode, n) : void 0), i
            }, l = function (e, t, o) {
                var n = {};
                return t && s.forEach(function (i) {
                    n[i] = a(e, i, t, o), i.match(/border(Style|Color)/) && !n.borderWidth && (n[i] = void 0)
                }), n
            };
        n.Config.prototype.controls.copyformat = {
            exec: function (e, t) {
                if (t) if (e.buffer.copyformat) e.buffer.copyformat = !1, e.events.off(e.editor, "mouseup.copyformat"); else {
                    var o = {}, n = i.Dom.up(t, function (e) {
                        return e && e.nodeType !== Node.TEXT_NODE
                    }, e.editor) || e.editor, a = e.editorDocument.createElement("span");
                    e.editor.appendChild(a), s.forEach(function (e) {
                        o[e] = r.css(a, e)
                    }), a !== e.editor && a.parentNode && a.parentNode.removeChild(a);
                    var c = l(e, n, o), d = function () {
                        e.buffer.copyformat = !1;
                        var t = e.selection.current();
                        t && ("IMG" === t.nodeName ? r.css(t, c) : e.selection.applyCSS(c)), e.events.off(e.editor, "mouseup.copyformat")
                    };
                    e.events.on(e.editor, "mouseup.copyformat", d), e.buffer.copyformat = !0
                }
            }, isActive: function (e) {
                return !!e.buffer.copyformat
            }, tooltip: "Paint format"
        }
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            e.events.on("keydown", function (o) {
                if (o.which === r.KEY_ENTER) {
                    var n = e.events.fire("beforeEnter", o);
                    if (void 0 !== n) return n;
                    e.selection.isCollapsed() || e.execCommand("Delete"), e.selection.focus();
                    var a = e.selection.current(!1), l = e.editorWindow.getSelection(),
                        c = l.rangeCount ? l.getRangeAt(0) : e.editorDocument.createRange();
                    a && a !== e.editor || (e.selection.current(), a = e.editorDocument.createTextNode(r.INVISIBLE_SPACE), l.rangeCount ? c.insertNode(a) : e.editor.appendChild(a), c.selectNode(a), c.collapse(!1), l.removeAllRanges(), l.addRange(c));
                    var d = !!a && s.Dom.up(a, s.Dom.isBlock, e.editor);
                    if (e.options.enter.toLowerCase() === r.BR.toLowerCase() || o.shiftKey || s.Dom.closest(a, "PRE|BLOCKQUOTE", e.editor)) {
                        var u = e.editorDocument.createElement("br");
                        return e.selection.insertNode(u, !0), i.scrollIntoView(u, e.editor, e.editorDocument), !1
                    }
                    if (!d && a && !s.Dom.prev(a, function (t) {
                        return s.Dom.isBlock(t) || !!t && s.Dom.isImage(t, e.ownerWindow)
                    }, e.editor)) {
                        var p = a;
                        if (s.Dom.up(p, function (t) {
                            t && t.hasChildNodes() && t !== e.editor && (p = t)
                        }, e.editor), d = s.Dom.wrapInline(p, e.options.enter, e), s.Dom.isEmpty(d)) {
                            var f = e.editorDocument.createElement("br");
                            d.appendChild(f), e.selection.setCursorBefore(f)
                        }
                        c = l.rangeCount ? l.getRangeAt(0) : e.editorDocument.createRange()
                    }
                    var h = !1, m = !1, v = !1;
                    if (d) {
                        if (!s.Dom.canSplitBlock(d, e.editorWindow)) {
                            var u = e.editorDocument.createElement("br");
                            return e.selection.insertNode(u, !1), e.selection.setCursorAfter(u), !1
                        }
                        if ((h = "LI" === d.nodeName) && s.Dom.isEmpty(d)) {
                            var g = !1, _ = s.Dom.closest(d, "ol|ul", e.editor);
                            if (s.Dom.prev(d, function (e) {
                                return e && "LI" === e.nodeName
                            }, _)) if (s.Dom.next(d, function (e) {
                                return e && "LI" === e.nodeName
                            }, _)) {
                                var b = e.editorDocument.createRange();
                                b.setStartBefore(_), b.setEndAfter(d);
                                var y = b.extractContents();
                                _.parentNode && _.parentNode.insertBefore(y, _), g = e.selection.setCursorBefore(_)
                            } else g = e.selection.setCursorAfter(_); else g = e.selection.setCursorBefore(_);
                            return d.parentNode && d.parentNode.removeChild(d), t.insertParagraph(e, g), !i.$$("li", _).length && _.parentNode && _.parentNode.removeChild(_), !1
                        }
                        if (e.selection.cursorInTheEdge(!0, d)) return m = e.selection.setCursorBefore(d), t.insertParagraph(e, m, h ? "li" : e.options.enter, d.style), e.selection.setCursorIn(d, !0), !1;
                        if (!1 === e.selection.cursorInTheEdge(!1, d)) {
                            var b = e.editorDocument.createRange();
                            b.setStartBefore(d), b.setEnd(c.startContainer, c.startOffset);
                            var y = b.extractContents();
                            d.parentNode && d.parentNode.insertBefore(y, d), e.selection.setCursorIn(d, !0)
                        } else m = e.selection.setCursorAfter(d)
                    } else v = !0;
                    return (v || m) && t.insertParagraph(e, m, h ? "li" : e.options.enter, d ? d.style : void 0), !1
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(0), r = o(2), s = o(3);
        t.insertParagraph = function (e, t, o, n) {
            o || (o = e.options.enter.toLowerCase());
            var r = e.editorDocument.createElement(o), s = e.editorDocument.createElement("br");
            r.appendChild(s), n && n.cssText && r.setAttribute("style", n.cssText), e.selection.insertNode(r, !1, !1), e.selection.setCursorBefore(s);
            var a = e.editorDocument.createRange();
            return a.setStartBefore(s), a.collapse(!0), e.selection.selectRange(a), t && t.parentNode && t.parentNode.removeChild(t), i.scrollIntoView(r, e.editor, e.editorDocument), e.events && e.events.fire("synchro"), r
        }, t.enter = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            if (e.options.showMessageErrors) {
                var t, o = r.dom('<div class="jodit_error_box_for_messages"></div>', e.ownerDocument), n = function () {
                    t = 5, [].slice.call(o.childNodes).forEach(function (n) {
                        r.css(o, "bottom", t + "px"), t += n.offsetWidth + e.options.showMessageErrorOffsetPx
                    })
                };
                e.workplace.appendChild(o), e.events.on("errorMessage", function (t, i, s) {
                    var a = r.dom('<div class="active ' + (i || "") + '">' + t + "</div>", e.ownerDocument);
                    o.appendChild(a), n(), setTimeout(function () {
                        a.classList.remove("active"), setTimeout(function () {
                            o.removeChild(a), n()
                        }, 300)
                    }, s || e.options.showMessageErrorTime)
                })
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(0);
        i.Config.prototype.showMessageErrors = !0, i.Config.prototype.showMessageErrorTime = 3e3, i.Config.prototype.showMessageErrorOffsetPx = 3, t.errorMessages = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = function (t, o, n) {
                switch (t) {
                    case"fontsize":
                        e.selection.applyCSS({fontSize: i.normalizeSize(n)});
                        break;
                    case"fontname":
                        e.selection.applyCSS({fontFamily: n})
                }
                return e.setEditorValue(), !1
            };
            e.registerCommand("fontsize", t), e.registerCommand("fontname", t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(0), r = o(1), s = o(3);
        r.Config.prototype.controls.fontsize = {
            command: "fontSize",
            list: ["8", "9", "10", "11", "12", "14", "16", "18", "24", "30", "36", "48", "60", "72", "96"],
            template: function (e, t, o) {
                return o
            },
            tooltip: "Font size",
            isActiveChild: function (e, t) {
                var o = e.selection.current();
                if (o) {
                    var n = s.Dom.closest(o, function (t) {
                        return s.Dom.isBlock(t) || s.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE
                    }, e.editor) || e.editor, r = i.css(n, "font-size");
                    return !(!r || !t.args || "" + t.args[1] != "" + r)
                }
                return !1
            },
            isActive: function (e) {
                var t = e.selection.current();
                if (t) {
                    var o = s.Dom.closest(t, function (t) {
                        return s.Dom.isBlock(t) || s.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE
                    }, e.editor) || e.editor;
                    return "" + i.css(o, "font-size") != "" + i.css(e.editor, "font-size")
                }
                return !1
            }
        }, r.Config.prototype.controls.font = {
            command: "fontname",
            exec: function (e, t, o) {
                e.execCommand(o.command, !1, o.args ? o.args[0] : void 0)
            },
            list: {
                "Helvetica,sans-serif": "Helvetica",
                "Arial,Helvetica,sans-serif": "Arial",
                "Georgia,serif": "Georgia",
                "Impact,Charcoal,sans-serif": "Impact",
                "Tahoma,Geneva,sans-serif": "Tahoma",
                "'Times New Roman',Times,serif": "Times New Roman",
                "Verdana,Geneva,sans-serif": "Verdana"
            },
            template: function (e, t, o) {
                return '<span style="font-family: ' + t + '">' + o + "</span>"
            },
            isActiveChild: function (e, t) {
                var o = e.selection.current(), n = function (e) {
                    return e.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9]+/g, ",")
                };
                if (o) {
                    var r = s.Dom.closest(o, function (t) {
                        return s.Dom.isBlock(t) || s.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE
                    }, e.editor) || e.editor, a = "" + i.css(r, "font-family");
                    return !(!a || !t.args || n("" + t.args[0]) !== n(a))
                }
                return !1
            },
            isActive: function (e) {
                var t = e.selection.current();
                if (t) {
                    var o = s.Dom.closest(t, function (t) {
                        return s.Dom.isBlock(t) || s.Dom.isNode(t, e.editorWindow) && t.nodeType === Node.ELEMENT_NODE
                    }, e.editor) || e.editor;
                    return "" + i.css(o, "font-family") != "" + i.css(e.editor, "font-family")
                }
                return !1
            },
            tooltip: "Font family"
        }, t.font = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            e.registerCommand("formatblock", function (t, o, n) {
                e.selection.focus();
                var s = !1;
                if (e.selection.eachSelection(function (t) {
                    var o = e.selection.save(), r = !!t && i.Dom.up(t, i.Dom.isBlock, e.editor);
                    if (r && "LI" !== r.nodeName || !t || (r = i.Dom.wrapInline(t, e.options.enter, e)), !r) return e.selection.restore(o), !1;
                    r.tagName.match(/TD|TH|TBODY|TABLE|THEAD/i) ? e.selection.isCollapsed() ? i.Dom.wrapInline(t, n, e) : e.selection.applyCSS({}, n) : n === e.options.enter.toLowerCase() && r.parentNode && "LI" === r.parentNode.nodeName ? i.Dom.unwrap(r) : i.Dom.replace(r, n, !0, !1, e.editorDocument), s = !0, e.selection.restore(o)
                }), !s) {
                    var a = e.editorDocument.createElement(n);
                    a.innerHTML = r.INVISIBLE_SPACE, e.selection.insertNode(a, !1), e.selection.setCursorIn(a)
                }
                return e.setEditorValue(), !1
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(3), r = o(2);
        o(1).Config.prototype.controls.paragraph = {
            command: "formatBlock",
            getLabel: function (e, t, o) {
                var n = e.selection.current();
                if (n && e.options.textIcons) {
                    var r = i.Dom.closest(n, i.Dom.isBlock, e.editor) || e.editor, s = r.nodeName.toLowerCase();
                    t.data && t.data.currentValue !== s && t.list && t.list[s] && (o.textBox.innerHTML = "<span>" + t.list[s] + "</span>", o.textBox.firstChild.classList.add("jodit_icon"), t.data.currentValue = s)
                }
                return !1
            },
            exec: function (e, t, o) {
                e.execCommand(o.command, !1, o.args ? o.args[0] : void 0)
            },
            data: {currentValue: "left"},
            list: {
                p: "Normal",
                h1: "Heading 1",
                h2: "Heading 2",
                h3: "Heading 3",
                h4: "Heading 4",
                blockquote: "Quote"
            },
            isActiveChild: function (e, t) {
                var o = e.selection.current();
                if (o) {
                    var n = i.Dom.closest(o, i.Dom.isBlock, e.editor);
                    return n && n !== e.editor && void 0 !== t.args && n.nodeName.toLowerCase() === t.args[0]
                }
                return !1
            },
            isActive: function (e, t) {
                var o = e.selection.current();
                if (o) {
                    var n = i.Dom.closest(o, i.Dom.isBlock, e.editor);
                    return n && n !== e.editor && void 0 !== t.list && "p" !== n.nodeName.toLowerCase() && void 0 !== t.list[n.nodeName.toLowerCase()]
                }
                return !1
            },
            template: function (e, t, o) {
                return "<" + t + ' class="jodit_list_element"><span>' + e.i18n(o) + "</span></" + t + "></li>"
            },
            tooltip: "Insert format block"
        }, t.formatBlock = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = !1, o = 0, n = 0, i = !1, s = function () {
                e.events && (t ? (o = r.css(e.container, "height"), n = r.css(e.container, "width"), r.css(e.container, {
                    height: e.ownerWindow.innerHeight,
                    width: e.ownerWindow.innerWidth
                }), i = !0) : i && r.css(e.container, {height: o || "auto", width: n || "auto"}))
            }, a = function (o) {
                if (void 0 === o && (o = !e.container.classList.contains("jodit_fullsize")), e.options.fullsize = !!o, t = o, e.container.classList.toggle("jodit_fullsize", o), e.toolbar && r.css(e.toolbar.container, "width", "auto"), e.options.globalFullsize) {
                    for (var n = e.container.parentNode; n && !(n instanceof Document);) n.classList.toggle("jodit_fullsize_box", o), n = n.parentNode;
                    s()
                }
                e.events.fire("afterResize")
            };
            e.options.globalFullsize && e.events.on(e.ownerWindow, "resize", s), e.events.on("afterInit", function () {
                e.toggleFullSize(e.options.fullsize)
            }).on("toggleFullSize", a).on("beforeDestruct", function () {
                a(!1)
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(0), s = o(5), a = o(2);
        i.Config.prototype.fullsize = !1, i.Config.prototype.globalFullsize = !0, i.Config.prototype.controls.fullsize = {
            exec: function (e) {
                e.toggleFullSize()
            }, isActive: function (e) {
                return e.isFullSize()
            }, getLabel: function (e, t, o) {
                var n = e.isFullSize() ? "shrink" : "fullsize";
                o.textBox.innerHTML = e.options.textIcons ? "<span>" + e.i18n(n) + "</span>" : s.ToolbarIcon.getIcon(n), o.textBox.firstChild.classList.add("jodit_icon")
            }, tooltip: "Open editor in fullsize", mode: a.MODE_SOURCE + a.MODE_WYSIWYG
        }, t.fullsize = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            e.events.on("afterSetMode", function () {
                e.isEditorMode() && e.selection.focus()
            }).on("generateDocumentStructure.iframe", function (t) {
                if (t.open(), t.write('<!DOCTYPE html>\n                    <html dir="' + e.options.direction + '" class="jodit" lang="' + r.defaultLanguage(e.options.language) + '">\n                        <head>\n                            ' + (e.options.iframeBaseUrl ? '<base href="' + e.options.iframeBaseUrl + '"/>' : "") + '\n                        </head>\n                        <body class="jodit_wysiwyg" style="outline:none" contenteditable="true"></body>\n                    </html>'), t.close(), e.options.iframeCSSLinks && e.options.iframeCSSLinks.forEach(function (e) {
                    var o = r.dom('<link rel="stylesheet" href="' + e + '">', t);
                    t.head.appendChild(o)
                }), e.options.iframeStyle) {
                    var o = t.createElement("style");
                    o.innerHTML = e.options.iframeStyle, t.head.appendChild(o)
                }
            }).on("createEditor", function () {
                if (e.options.iframe) {
                    e.iframe = e.ownerDocument.createElement("iframe"), e.iframe.style.display = "block", e.iframe.src = "about:blank", e.iframe.className = "jodit_wysiwyg_iframe", e.iframe.frameBorder = "0", e.iframe.setAttribute("allowtransparency", "true"), e.iframe.setAttribute("tabindex", "0"), e.iframe.setAttribute("frameborder", "0"), e.workplace.appendChild(e.iframe);
                    var t = e.iframe.contentWindow.document;
                    if (e.events.fire("generateDocumentStructure.iframe", t), e.editorDocument = t, e.editorWindow = e.iframe.contentWindow, e.editor = t.body, "auto" === e.options.height) {
                        t.documentElement.style.overflowY = "hidden";
                        var o = r.throttle(function () {
                            e.editor && e.iframe && "auto" === e.options.height && r.css(e.iframe, "height", e.editor.offsetHeight)
                        }, e.defaultTimeout / 2);
                        e.events.on("change afterInit afterSetMode resize", o).on([e.iframe, e.editorWindow, t.documentElement], "load", o).on(t, "readystatechange DOMContentLoaded", o)
                    }
                    return function (e) {
                        e.matches || (e.matches = Element.prototype.matches)
                    }(e.editorWindow.Element.prototype), e.events.on(e.editorDocument.documentElement, "mousedown touchend", function () {
                        e.selection.isFocused() || (e.selection.focus(), e.selection.setCursorIn(e.editor))
                    }).on(e.editorWindow, "mousedown touchstart keydown keyup touchend click mouseup mousemove scroll", function (t) {
                        e.events && e.events.fire && e.events.fire(window, t)
                    }), !1
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(0);
        i.Config.prototype.iframe = !1, i.Config.prototype.iframeBaseUrl = "", i.Config.prototype.iframeStyle = 'html{margin: 0px;min-height: 100%;}body{box-sizing: border-box;font-size: 13px;    line-height: 1.6;padding:10px;background:transparent;color:#000;position:relative;z-index: 2;user-select:auto;margin:0px;overflow:auto;}table{width:100%;border: none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}td[data-jodit-selected-cell],th[data-jodit-selected-cell]{border: 1px double #1e88e5}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}', i.Config.prototype.iframeCSSLinks = [], t.iframe = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = function (t) {
                return e.selection.eachSelection(function (o) {
                    var n = e.selection.save(), i = !!o && r.Dom.up(o, r.Dom.isBlock, e.editor);
                    if (!i && o && (i = r.Dom.wrapInline(o, e.options.enter, e)), !i) return e.selection.restore(n), !1;
                    if (i && i.style) {
                        var s = i.style.marginLeft ? parseInt(i.style.marginLeft, 10) : 0;
                        s += e.options.indentMargin * ("outdent" === t ? -1 : 1), i.style.marginLeft = s > 0 ? s + "px" : "", i.getAttribute("style") || i.removeAttribute("style")
                    }
                    e.selection.restore(n)
                }), e.setEditorValue(), !1
            };
            e.registerCommand("indent", {exec: t, hotkeys: "ctrl+]"}), e.registerCommand("outdent", {
                exec: t,
                hotkeys: "ctrl+["
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(3);
        i.Config.prototype.controls.indent = {tooltip: "Increase Indent"}, i.Config.prototype.controls.outdent = {
            isDisable: function (e) {
                var t = e.selection.current();
                if (t) {
                    var o = r.Dom.closest(t, r.Dom.isBlock, e.editor);
                    if (o && o.style && o.style.marginLeft) return 0 >= parseInt(o.style.marginLeft, 10)
                }
                return !0
            }, tooltip: "Decrease Indent"
        }, i.Config.prototype.indentMargin = 10, t.indent = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            e.events.on("change afterInit", i.debounce(function () {
                e.editor && i.$$("img", e.editor).forEach(function (t) {
                    t[r] || (t[r] = !0, t.complete || t.addEventListener("load", function o() {
                        e.events && e.events.fire && e.events.fire("resize"), t.removeEventListener("load", o)
                    }), e.events.on(t, "mousedown touchstart", function () {
                        e.selection.select(t)
                    }))
                })
            }, e.defaultTimeout))
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(0), r = "__jodit_imageprocessor_binded";
        t.imageProcessor = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = function (t) {
                var o = this;
                if (!e.options.readonly) {
                    t && t.stopImmediatePropagation();
                    var n, r = this, d = new a.Dialog(e),
                        f = s.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + l.ToolbarIcon.getIcon("cancel") + "<span>" + e.i18n("Cancel") + "</span></a>", e.ownerDocument),
                        h = s.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + l.ToolbarIcon.getIcon("check") + "<span>" + e.i18n("Ok") + "</span></a>", e.ownerDocument),
                        m = {remove: s.dom('<a href="javascript:void(0)" class="jodit_button">' + l.ToolbarIcon.getIcon("bin") + " " + e.i18n("Delete") + "</a>", e.ownerDocument)},
                        v = s.dom('<form class="jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-2-5"><div class="jodit_properties_view_box"><div style="' + (e.options.image.showPreview ? "" : "display:none") + '" class="jodit_properties_image_view"><img class="imageViewSrc" src="" alt=""/></div><div style="' + (e.options.image.editSize ? "" : "display:none") + '" class="jodit_form_group jodit_properties_image_sizes"><input type="number" class="imageWidth"/><a class="jodit_lock_helper jodit_lock_size" href="javascript:void(0)">' + l.ToolbarIcon.getIcon("lock") + '</a><input type="number" class="imageHeight"/></div></div></div><div class="jodit_col-lg-3-5 tabsbox"></div></div></form>', e.ownerDocument),
                        g = s.dom('<div style="' + (e.options.image.editMargins ? "" : "display:none") + '" class="jodit_form_group"><label>' + e.i18n("Margins") + '</label><div class="jodit_grid"><input class="jodit_col-lg-1-5 margins marginTop" data-id="marginTop" type="text" placeholder="' + e.i18n("top") + '"/><a style="text-align: center;" class="jodit_lock_helper jodit_lock_margin jodit_col-lg-1-5" href="javascript:void(0)">' + l.ToolbarIcon.getIcon("lock") + '</a><input disabled="true" class="jodit_col-lg-1-5 margins marginRight" data-id="marginRight" type="text" placeholder="' + e.i18n("right") + '"/><input disabled="true" class="jodit_col-lg-1-5 margins marginBottom" data-id="marginBottom" type="text" placeholder="' + e.i18n("bottom") + '"/><input disabled="true" class="jodit_col-lg-1-5 margins marginLeft" data-id="marginLeft" type="text" placeholder="' + e.i18n("left") + '"/></div></div><div style="' + (e.options.image.editStyle ? "" : "display:none") + '" class="jodit_form_group"><label>' + e.i18n("Styles") + '</label><input type="text" class="style"/></div><div style="' + (e.options.image.editClass ? "" : "display:none") + '" class="jodit_form_group"><label for="classes">' + e.i18n("Classes") + '</label><input type="text" class="classes"/></div><div style="' + (e.options.image.editId ? "" : "display:none") + '" class="jodit_form_group"><label for="id">Id</label><input type="text" class="id"/></div><div style="' + (e.options.image.editBorderRadius ? "" : "display:none") + '" class="jodit_form_group"><label for="border_radius">Border radius</label><input type="number" class="border_radius"/></div><div style="' + (e.options.image.editAlign ? "" : "display:none") + '" class="jodit_form_group"><label for="align">' + e.i18n("Align") + '</label><select class="select align"><option value="">' + e.i18n("--Not Set--") + '</option><option value="left">' + e.i18n("Left") + '</option><option value="center">' + e.i18n("Center") + '</option><option value="right">' + e.i18n("Right") + "</option></optgroup></select></div>", e.ownerDocument),
                        _ = s.dom('<div style="' + (e.options.image.editSrc ? "" : "display:none") + '" class="jodit_form_group"><label>' + e.i18n("Src") + '</label><div class="jodit_input_group"><input type="text" class="imageSrc"/>' + (e.options.filebrowser.ajax.url || e.options.uploader.url ? '<div class="jodit_input_group-buttons">' + (e.options.filebrowser.ajax.url || e.options.uploader.url ? '<a class="jodit_button jodit_rechange" href="javascript:void(0)">' + l.ToolbarIcon.getIcon("image") + "</a>" : "") + (e.options.image.useImageEditor && void 0 !== i.Jodit.modules.ImageEditor && e.options.filebrowser.ajax.url ? '<a class="jodit_button jodit_use_image_editor" href="javascript:void(0)">' + l.ToolbarIcon.getIcon("crop") + "</a>" : "") + "</div>" : "") + '</div></div><div style="' + (e.options.image.editTitle ? "" : "display:none") + '" class="jodit_form_group"><label for="imageTitle">' + e.i18n("Title") + '</label><input type="text" class="imageTitle"/></div><div style="' + (e.options.image.editAlt ? "" : "display:none") + '" class="jodit_form_group"><label for="imageAlt">' + e.i18n("Alternative") + '</label><input type="text" class="imageAlt"/></div><div style="' + (e.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><label for="imageLink">' + e.i18n("Link") + '</label><input type="text" class="imageLink"/></div><div style="' + (e.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><input type="checkbox" class="imageLinkOpenInNewTab"/> ' + e.i18n("Open link in new tab") + "</div>", e.ownerDocument),
                        b = r.naturalWidth / r.naturalHeight || 1, y = v.querySelector(".imageWidth"),
                        w = v.querySelector(".imageHeight"), C = function () {
                            r.style.cssFloat && -1 !== ["left", "right"].indexOf(r.style.cssFloat.toLowerCase()) ? s.val(v, ".align", s.css(r, "float")) : "block" === s.css(r, "display") && "auto" === r.style.marginLeft && "auto" === r.style.marginRight && s.val(v, ".align", "center")
                        }, E = function () {
                            s.val(v, ".border_radius", "" + (parseInt(r.style.borderRadius || "0", 10) || "0"))
                        }, j = function () {
                            s.val(v, ".id", r.getAttribute("id") || "")
                        }, x = function () {
                            s.val(v, ".style", r.getAttribute("style") || "")
                        }, T = function () {
                            s.val(v, ".classes", (r.getAttribute("class") || "").replace(/jodit_focused_image[\s]*/, ""))
                        }, S = function () {
                            if (e.options.image.editMargins) {
                                var t = !1;
                                s.$$(".margins", v).forEach(function (e) {
                                    var o = e.getAttribute("data-id") || "", n = r.style[o];
                                    n && (/^[0-9]+(px)?$/.test(n) && (n = parseInt(n, 10)), e.value = "" + n || "", t || "marginTop" === o || e.value === s.val(v, ".marginTop") || (t = !0))
                                }), A = !t;
                                var o = v.querySelector(".jodit_lock_margin");
                                o && (o.innerHTML = l.ToolbarIcon.getIcon(A ? "lock" : "unlock")), s.$$(".margins:not(.marginTop)", v).forEach(function (e) {
                                    return A ? e.setAttribute("disabled", "true") : e.removeAttribute("disabled")
                                })
                            }
                        }, q = function () {
                            y.value = "" + r.offsetWidth, w.value = "" + r.offsetHeight
                        }, D = function () {
                            r.hasAttribute("title") && s.val(v, ".imageTitle", r.getAttribute("title") || ""), r.hasAttribute("alt") && s.val(v, ".imageAlt", r.getAttribute("alt") || "");
                            var t = c.Dom.closest(r, "a", e.editor);
                            t && (s.val(v, ".imageLink", t.getAttribute("href") || ""), v.querySelector(".imageLinkOpenInNewTab").checked = "_blank" === t.getAttribute("target"))
                        }, I = function () {
                            s.val(v, ".imageSrc", r.getAttribute("src") || "");
                            var e = v.querySelector(".imageViewSrc");
                            e && e.setAttribute("src", r.getAttribute("src") || "")
                        }, N = function () {
                            I(), D(), q(), S(), T(), j(), E(), C(), x()
                        }, L = !0, A = !0, k = {}, M = v.querySelector(".tabsbox");
                    k[e.i18n("Image")] = _, k[e.i18n("Advanced")] = g, M && M.appendChild(u(e, k)), N(), e.events.on(d, "afterClose", function () {
                        d.destruct(), r.parentNode && e.options.image.selectImageAfterClose && e.selection.select(r)
                    }), m.remove.addEventListener("click", function () {
                        r.parentNode && r.parentNode.removeChild(r), d.close()
                    }), e.options.image.useImageEditor && s.$$(".jodit_use_image_editor", _).forEach(function (t) {
                        e.events.on(t, "mousedown touchstart", function () {
                            var t = r.getAttribute("src") || "", o = e.ownerDocument.createElement("a"),
                                n = function () {
                                    if (o.host !== location.host) return void a.Confirm(e.i18n("You can only edit your own images. Download this image on the host?"), function (t) {
                                        t && e.uploader && e.uploader.uploadRemoteImage("" + o.href, function (t) {
                                            a.Alert(e.i18n("The image has been successfully uploaded to the host!"), function () {
                                                "string" == typeof t.newfilename && (r.setAttribute("src", t.baseurl + t.newfilename), I())
                                            })
                                        }, function (t) {
                                            a.Alert(e.i18n("There was an error loading %s", t.message))
                                        })
                                    })
                                };
                            o.href = t, e.getInstance("FileBrowser").getPathByUrl("" + o.href, function (n, i, s) {
                                e.getInstance("FileBrowser").openImageEditor(o.href, i, n, s, function () {
                                    var e = (new Date).getTime();
                                    r.setAttribute("src", t + (-1 !== t.indexOf("?") ? "" : "?") + "&_tmp=" + e), I()
                                }, function (e) {
                                    a.Alert(e.message)
                                })
                            }, function (e) {
                                a.Alert(e.message, n)
                            })
                        })
                    }), s.$$(".jodit_rechange", _).forEach(function (t) {
                        t.addEventListener("mousedown", function (o) {
                            t.classList.toggle("active");
                            var n = new l.ToolbarPopup(e, t);
                            n.open(p(e, {
                                upload: function (e) {
                                    e.files && e.files.length && r.setAttribute("src", e.baseurl + e.files[0]), N(), n.close()
                                }, filebrowser: function (e) {
                                    e && e.files && Array.isArray(e.files) && e.files.length && (r.setAttribute("src", e.files[0]), n.close(), N())
                                }
                            }, r, n.close), !0), o.stopPropagation()
                        })
                    });
                    var O = v.querySelector(".jodit_lock_helper.jodit_lock_size"),
                        z = v.querySelector(".jodit_lock_helper.jodit_lock_margin");
                    O && O.addEventListener("click", function () {
                        L = !L, this.innerHTML = l.ToolbarIcon.getIcon(L ? "lock" : "unlock"), e.events.fire(y, "change")
                    }), z && z.addEventListener("click", function () {
                        A = !A, this.innerHTML = l.ToolbarIcon.getIcon(A ? "lock" : "unlock"), A ? s.$$(".margins", v).forEach(function (e) {
                            e.matches(".marginTop") || e.setAttribute("disabled", "true")
                        }) : s.$$(".margins", v).forEach(function (e) {
                            e.matches(".marginTop") || e.removeAttribute("disabled")
                        })
                    });
                    var P = function (e) {
                        var t = parseInt(y.value, 10), o = parseInt(w.value, 10);
                        e.target === y ? w.value = "" + Math.round(t / b) : y.value = "" + Math.round(o * b)
                    };
                    return e.events.on([y, w], "change keydown mousedown paste", function (t) {
                        L && (e.defaultTimeout ? (clearTimeout(n), n = window.setTimeout(P.bind(o, t), e.defaultTimeout)) : P(t))
                    }), d.setTitle([e.i18n("Image properties"), m.remove]), d.setContent(v), f.addEventListener("click", function () {
                        d.close()
                    }), h.addEventListener("click", function () {
                        if (e.options.image.editStyle && (s.val(v, ".style") ? r.setAttribute("style", s.val(v, ".style")) : r.removeAttribute("style")), !s.val(v, ".imageSrc")) return r.parentNode && r.parentNode.removeChild(r), void d.close();
                        r.setAttribute("src", s.val(v, ".imageSrc")), r.style.borderRadius = "0" !== s.val(v, ".border_radius") && /^[0-9]+$/.test(s.val(v, ".border_radius")) ? s.val(v, ".border_radius") + "px" : "", s.val(v, ".imageTitle") ? r.setAttribute("title", s.val(v, ".imageTitle")) : r.removeAttribute("title"), s.val(v, ".imageAlt") ? r.setAttribute("alt", s.val(v, ".imageAlt")) : r.removeAttribute("alt");
                        var t = c.Dom.closest(r, "a", e.editor);
                        s.val(v, ".imageLink") ? (t || (t = c.Dom.wrap(r, "a", e)), t.setAttribute("href", s.val(v, ".imageLink")), v.querySelector(".imageLinkOpenInNewTab").checked ? t.setAttribute("target", "_blank") : t.removeAttribute("target")) : t && t.parentNode && t.parentNode.replaceChild(r, t);
                        var o = function (e) {
                            return e = s.trim(e), /^[0-9]+$/.test(e) ? e + "px" : e
                        };
                        y.value === "" + r.offsetWidth && w.value === "" + r.offsetHeight || s.css(r, {
                            width: s.trim(y.value) ? o(y.value) : null,
                            height: s.trim(w.value) ? o(w.value) : null
                        }), e.options.image.editMargins && (A ? s.css(r, "margin", o(s.val(v, ".marginTop"))) : s.$$(".margins", v).forEach(function (e) {
                            var t = e.getAttribute("data-id") || "";
                            s.css(r, t, o(e.value))
                        })), e.options.image.editClass && (s.val(v, ".classes") ? r.setAttribute("class", s.val(v, ".classes")) : r.removeAttribute("class")), e.options.image.editId && (s.val(v, ".id") ? r.setAttribute("id", s.val(v, ".id")) : r.removeAttribute("id"));
                        var n = function () {
                            "block" === s.css(r, "display") && s.css(r, "display", ""), "auto" === r.style.marginLeft && "auto" === r.style.marginRight && (r.style.marginLeft = "", r.style.marginRight = "")
                        };
                        e.options.image.editAlign && (s.val(v, ".align") ? -1 !== ["right", "left"].indexOf(s.val(v, ".align").toLowerCase()) ? (s.css(r, "float", s.val(v, ".align")), n()) : (s.css(r, "float", ""), s.css(r, {
                            display: "block",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        })) : (s.css(r, "float") && -1 !== ["right", "left"].indexOf(("" + s.css(r, "float")).toLowerCase()) && s.css(r, "float", ""), n())), r.getAttribute("style") || r.removeAttribute("style"), e.setEditorValue(), d.close()
                    }), d.setFooter([h, f]), d.setSize(500), d.open(), t && t.preventDefault(), !1
                }
            };
            e.events.on("afterInit", function () {
                e.options.image.openOnDblClick ? e.events.on(e.editor, "dblclick", t, "img") : e.events.on(e.editor, "dblclick", function (t) {
                    t.stopImmediatePropagation(), e.selection.select(this)
                }, "img")
            }).on("openImageProperties", function (e) {
                t.call(e)
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(6), r = o(1), s = o(0), a = o(7), l = o(5), c = o(3), d = o(10), u = d.Widget.TabsWidget,
            p = d.Widget.FileSelectorWidget;
        r.Config.prototype.image = {
            openOnDblClick: !0,
            editSrc: !0,
            useImageEditor: !0,
            editTitle: !0,
            editAlt: !0,
            editLink: !0,
            editSize: !0,
            editBorderRadius: !0,
            editMargins: !0,
            editClass: !0,
            editStyle: !0,
            editId: !0,
            editAlign: !0,
            showPreview: !0,
            selectImageAfterClose: !0
        }, t.imageProperties = n
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(8), r = o(5), s = o(0), a = o(20), l = o(1), c = o(10), d = c.Widget.ColorPickerWidget,
            u = c.Widget.TabsWidget, p = o(3);
        l.Config.prototype.toolbarInline = !0, l.Config.prototype.toolbarInlineDisableFor = [], l.Config.prototype.popup = {
            a: [{
                name: "eye", tooltip: "Open link", exec: function (e, t) {
                    var o = t.getAttribute("href");
                    t && o && e.ownerWindow.open(o)
                }
            }, {name: "link", tooltip: "Edit link", icon: "pencil"}, "unlink", "brush", "file"],
            img: [{
                name: "bin", tooltip: "Delete", exec: function (e, t) {
                    t.parentNode && (t.parentNode.removeChild(t), e.events.fire("hidePopup"))
                }
            }, {
                name: "pencil", exec: function (e, t) {
                    "img" === t.tagName.toLowerCase() && e.events.fire("openImageProperties", t)
                }, tooltip: "Edit"
            }, {
                name: "valign", list: ["Top", "Middle", "Bottom"], tooltip: "Vertical align", exec: function (e, t, o) {
                    if ("img" === t.tagName.toLowerCase()) {
                        var n = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                        s.css(t, "vertical-align", n)
                    }
                }
            }, {
                name: "left", list: ["Left", "Right", "Center", "Normal"], exec: function (e, t, o) {
                    if ("img" === t.tagName.toLowerCase()) {
                        var n = function () {
                            "block" === s.css(t, "display") && s.css(t, "display", ""), "auto" === t.style.marginLeft && "auto" === t.style.marginRight && (t.style.marginLeft = "", t.style.marginRight = "")
                        }, i = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                        "normal" !== i ? -1 !== ["right", "left"].indexOf(i) ? (s.css(t, "float", i), n()) : (s.css(t, "float", ""), s.css(t, {
                            display: "block",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        })) : (s.css(t, "float") && -1 !== ["right", "left"].indexOf(s.css(t, "float").toLowerCase()) && s.css(t, "float", ""), n())
                    }
                }, tooltip: "Horizontal align"
            }],
            table: [{
                name: "brush", popup: function (e, t) {
                    var o, n, i, r, l, c, p = a.Table.getAllSelectedCells(t);
                    return !!p.length && (r = s.css(p[0], "color"), c = s.css(p[0], "background-color"), l = s.css(p[0], "border-color"), o = d(e, function (t) {
                        p.forEach(function (e) {
                            s.css(e, "background-color", t)
                        }), e.setEditorValue()
                    }, c), n = d(e, function (t) {
                        p.forEach(function (e) {
                            s.css(e, "color", t)
                        }), e.setEditorValue()
                    }, r), i = d(e, function (t) {
                        p.forEach(function (e) {
                            s.css(e, "border-color", t)
                        }), e.setEditorValue()
                    }, l), u(e, {Background: o, Text: n, Border: i}))
                }, tooltip: "Background"
            }, {
                name: "valign", list: ["Top", "Middle", "Bottom"], exec: function (e, t, o) {
                    var n = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                    a.Table.getAllSelectedCells(t).forEach(function (e) {
                        s.css(e, "vertical-align", n)
                    })
                }, tooltip: "Vertical align"
            }, {
                name: "splitv",
                list: {tablesplitv: "Split vertical", tablesplitg: "Split horizontal"},
                tooltip: "Split"
            }, {name: "align", icon: "left"}, "\n", {
                name: "merge",
                command: "tablemerge",
                tooltip: "Merge"
            }, {
                name: "addcolumn",
                list: {tableaddcolumnbefore: "Insert column before", tableaddcolumnafter: "Insert column after"},
                exec: function (e, t, o) {
                    e.execCommand(o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "", !1, t)
                },
                tooltip: "Add column"
            }, {
                name: "addrow",
                list: {tableaddrowbefore: "Insert row above", tableaddrowafter: "Insert row below"},
                exec: function (e, t, o) {
                    e.execCommand(o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "", !1, t)
                },
                tooltip: "Add row"
            }, {
                name: "bin",
                list: {
                    tablebin: "Delete table",
                    tablebinrow: "Delete row",
                    tablebincolumn: "Delete column",
                    tableempty: "Empty cell"
                },
                exec: function (e, t, o) {
                    e.execCommand(o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "", !1, t)
                },
                tooltip: "Delete"
            }]
        }, t.inlinePopup = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.isShown = !1, o.calcWindSizes = function () {
                    var e = o.jodit.ownerWindow, t = o.jodit.ownerDocument.documentElement,
                        n = o.jodit.ownerDocument.body, i = e.pageYOffset || t.scrollTop || n.scrollTop,
                        r = t.clientTop || n.clientTop || 0, s = e.pageXOffset || t.scrollLeft || n.scrollLeft,
                        a = t.clientLeft || n.clientLeft || 0;
                    return {left: a, top: r, width: t.clientWidth + s - a, height: t.clientHeight + i - r}
                }, o.calcPosition = function (e, t) {
                    var n = e.left + e.width / 2;
                    o.target.style.left = n + "px", o.target.style.top = e.top + e.height + 10 + "px", o.jodit.isFullSize() && (o.target.style.zIndex = "" + s.css(o.jodit.container, "zIndex"));
                    var i = o.container.offsetWidth / 2, r = -i;
                    o.popup.container.classList.remove("jodit_toolbar_popup-inline-top"), e.top + e.height + 10 + o.container.offsetHeight > t.height && (o.target.style.top = e.top - o.container.offsetHeight - 10 + "px", o.popup.container.classList.add("jodit_toolbar_popup-inline-top")), 0 > n - i && (r = -(e.width / 2 + e.left)), n + i > t.width && (r = -(o.container.offsetWidth - (t.width - n))), o.container.style.marginLeft = r + "px"
                }, o.showPopup = function (e, t, n) {
                    if (!o.jodit.options.toolbarInline || !o.jodit.options.popup[t.toLowerCase()]) return !1;
                    if (o.isExcludedTarget(t)) return !0;
                    o.isShown = !0, o.isTargetAction = !0;
                    var i = o.calcWindSizes();
                    return o.target.parentNode || o.jodit.ownerDocument.body.appendChild(o.target), o.toolbar.build(o.jodit.options.popup[t.toLowerCase()], o.container, n), o.popup.open(o.container, !1, !0), o.calcPosition(e(), i), !0
                }, o.hidePopup = function (e) {
                    e && (e instanceof o.jodit.editorWindow.Node || e instanceof r.ToolbarPopup) && p.Dom.isOrContains(o.target, e instanceof r.ToolbarPopup ? e.target : e) || (o.isTargetAction = !1, o.isShown = !1, o.popup.close(), o.target.parentNode && o.target.parentNode.removeChild(o.target))
                }, o.isSelectionStarted = !1, o.onSelectionEnd = s.debounce(function () {
                    o.jodit.isEditorMode() && (o.isSelectionStarted && (o.isTargetAction || o.onChangeSelection()), o.isSelectionStarted = !1, o.isTargetAction = !1)
                }, o.jodit.defaultTimeout), o.isTargetAction = !1, o.isSelectionPopup = !1, o.onSelectionStart = function (e) {
                    if (o.jodit.isEditorMode() && (o.isTargetAction = !1, o.isSelectionPopup = !1, !o.isSelectionStarted)) {
                        var t = Object.keys(o.jodit.options.popup).join("|"),
                            n = "IMG" === e.target.nodeName ? e.target : p.Dom.closest(e.target, t, o.jodit.editor);
                        n && o.showPopup(function () {
                            return s.offset(n, o.jodit, o.jodit.editorDocument)
                        }, n.nodeName, n) || (o.isSelectionStarted = !0)
                    }
                }, o.onChangeSelection = function () {
                    if (o.jodit.options.toolbarInline && o.jodit.isEditorMode() && !o.hideIfCollapsed() && void 0 !== o.jodit.options.popup.selection) {
                        var e = o.jodit.editorWindow.getSelection();
                        if (e.rangeCount) {
                            o.isSelectionPopup = !0;
                            var t = e.getRangeAt(0);
                            o.showPopup(function () {
                                return s.offset(t, o.jodit, o.jodit.editorDocument)
                            }, "selection")
                        }
                    }
                }, o.checkIsTargetEvent = function () {
                    o.isTargetAction ? o.isTargetAction = !1 : o.hidePopup()
                }, o.toolbar = new r.ToolbarCollection(t), o.target = t.ownerDocument.createElement("div"), o.container = t.ownerDocument.createElement("div"), o.target.classList.add("jodit_toolbar_popup-inline-target"), o.popup = new r.ToolbarPopup(t, o.target, void 0, "jodit_toolbar_popup-inline"), o
            }

            return n(t, e), t.prototype.isExcludedTarget = function (e) {
                return -1 !== s.splitArray(this.jodit.options.toolbarInlineDisableFor).map(function (e) {
                    return e.toLowerCase()
                }).indexOf(e.toLowerCase())
            }, t.prototype.hideIfCollapsed = function () {
                return !!this.jodit.selection.isCollapsed() && (this.hidePopup(), !0)
            }, t.prototype.afterInit = function (e) {
                var t = this;
                e.events.on(this.target, "mousedown keydown touchstart", function (e) {
                    e.stopPropagation()
                }).on("beforeOpenPopup hidePopup", this.hidePopup).on("getDiffButtons.mobile", function (o) {
                    if (t.toolbar === o) return s.splitArray(e.options.buttons).filter(function (e) {
                        return "|" !== e && "\n" !== e
                    }).filter(function (e) {
                        return 0 > t.toolbar.getButtonsList().indexOf(e)
                    })
                }).on("selectionchange", this.onChangeSelection).on("afterCommand resize afterExec", function () {
                    t.isShown && t.isSelectionPopup && t.onChangeSelection()
                }).on("showPopup", function (e, o) {
                    var n = ("string" == typeof e ? e : e.nodeName).toLowerCase();
                    t.isSelectionPopup = !1, t.showPopup(o, n, "string" == typeof e ? void 0 : e)
                }).on("mousedown keydown touchstart", this.onSelectionStart).on([e.ownerWindow], "scroll", this.hidePopup).on([e.ownerWindow], "mouseup keyup touchend", this.onSelectionEnd).on([e.ownerWindow], "mousedown keydown touchstart", this.checkIsTargetEvent)
            }, t.prototype.beforeDestruct = function (t) {
                this.popup.destruct(), this.toolbar.destruct(), this.target.parentNode && this.target.parentNode.removeChild(this.target), t.events.off([t.ownerWindow], "scroll", this.hidePopup).off([t.ownerWindow], "mouseup keyup touchend", this.onSelectionEnd).off([t.ownerWindow], "mousedown keydown touchstart", this.checkIsTargetEvent), e.prototype.destruct.call(this)
            }, t
        }(i.Plugin)
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = function (t) {
                var o = function (o) {
                    if (o instanceof e.editorWindow.HTMLElement) switch (t.toLowerCase()) {
                        case"justifyfull":
                            o.style.textAlign = "justify";
                            break;
                        case"justifyright":
                            o.style.textAlign = "right";
                            break;
                        case"justifyleft":
                            o.style.textAlign = "left";
                            break;
                        case"justifycenter":
                            o.style.textAlign = "center"
                    }
                };
                return e.selection.focus(), e.selection.eachSelection(function (t) {
                    if (!t && e.editor.querySelector(".jodit_selected_cell")) return i.$$(".jodit_selected_cell", e.editor).forEach(o), !1;
                    if (t instanceof e.editorWindow.Node) {
                        var n = !!t && r.Dom.up(t, r.Dom.isBlock, e.editor);
                        !n && t && (n = r.Dom.wrapInline(t, e.options.enter, e)), o(n)
                    }
                }), !1
            };
            e.registerCommand("justifyfull", t), e.registerCommand("justifyright", t), e.registerCommand("justifyleft", t), e.registerCommand("justifycenter", t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(0), r = o(3), s = o(1), a = o(5);
        s.Config.prototype.controls.align = {
            name: "left",
            tooltip: "Align",
            getLabel: function (e, t, o) {
                var n = e.selection.current();
                if (n) {
                    var s = r.Dom.closest(n, r.Dom.isBlock, e.editor) || e.editor, l = "" + i.css(s, "text-align");
                    t.defaultValue && -1 !== t.defaultValue.indexOf(l) && (l = "left"), t.data && t.data.currentValue !== l && t.list && -1 !== t.list.indexOf(l) && (o.textBox.innerHTML = e.options.textIcons ? "<span>" + l + "</span>" : a.ToolbarIcon.getIcon(l, ""), o.textBox.firstChild.classList.add("jodit_icon"), t.data.currentValue = l)
                }
                return !1
            },
            isActive: function (e, t) {
                var o = e.selection.current();
                if (o && t.defaultValue) {
                    var n = r.Dom.closest(o, r.Dom.isBlock, e.editor) || e.editor;
                    return -1 === t.defaultValue.indexOf("" + i.css(n, "text-align"))
                }
                return !1
            },
            defaultValue: ["left", "start", "inherit"],
            data: {currentValue: "left"},
            list: ["center", "left", "right", "justify"]
        }, s.Config.prototype.controls.center = {
            command: "justifyCenter",
            tags: ["center"],
            css: {"text-align": "center"},
            tooltip: "Align Center"
        }, s.Config.prototype.controls.justify = {
            command: "justifyFull",
            css: {"text-align": "justify"},
            tooltip: "Align Justify"
        }, s.Config.prototype.controls.left = {
            command: "justifyLeft",
            css: {"text-align": "left"},
            tooltip: "Align Left"
        }, s.Config.prototype.controls.right = {
            command: "justifyRight",
            css: {"text-align": "right"},
            tooltip: "Align Right"
        }, t.justify = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            e.options.link.followOnDblClick && e.events.on("afterInit", function () {
                e.events.on(e.editor, "dblclick", function (e) {
                    var t = this.getAttribute("href");
                    t && (location.href = t, e.preventDefault())
                }, "a")
            }), e.options.link.processPastedLink && e.events.on("processPaste", function (t, o) {
                if (r.isURL(o)) {
                    var n = r.convertMediaURLToVideoEmbed(o);
                    if (n !== o) return r.dom(n, e.editorDocument);
                    var i = e.editorDocument.createElement("a");
                    return i.setAttribute("href", o), i.innerText = o, e.options.link.openLinkDialogAfterPost && setTimeout(function () {
                    }, 100), i
                }
            }), e.options.link.removeLinkAfterFormat && e.events.on("afterCommand", function (t) {
                var o, n, i = e.selection;
                "removeFormat" === t && (n = i.current(), n && "A" !== n.nodeName && (n = s.Dom.closest(n, "A", e.editor)), n && "A" === n.nodeName && (n.innerHTML === n.innerText ? o = e.editorDocument.createTextNode(n.innerHTML) : (o = e.editorDocument.createElement("span"), o.innerHTML = n.innerHTML), n.parentNode && (n.parentNode.replaceChild(o, n), e.selection.setCursorIn(o, !0))))
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(0), s = o(3);
        i.Config.prototype.link = {
            followOnDblClick: !0,
            processVideoLink: !0,
            processPastedLink: !0,
            openLinkDialogAfterPost: !0,
            removeLinkAfterFormat: !0
        }, i.Config.prototype.controls.unlink = {
            exec: function (e, t) {
                var o = s.Dom.closest(t, "A", e.editor);
                o && s.Dom.unwrap(o), e.events.fire("hidePopup")
            }
        }, i.Config.prototype.controls.link = {
            isActive: function (e) {
                var t = e.selection.current();
                return t && !1 !== s.Dom.closest(t, "a", e.editor)
            }, popup: function (e, t, o, n) {
                var i = e.editorWindow.getSelection(),
                    a = r.dom('<form class="jodit_form"><input required type="text" name="url" placeholder="http://" type="text"/><input name="text" placeholder="' + e.i18n("Text") + '" type="text"/><label><input name="target" type="checkbox"/> ' + e.i18n("Open in new tab") + '</label><label><input name="nofollow" type="checkbox"/> ' + e.i18n("No follow") + '</label><div style="text-align: right"><button class="jodit_unlink_button" type="button">' + e.i18n("Unlink") + '</button> &nbsp;&nbsp;<button class="jodit_link_insert_button" type="submit"></button></div><form/>', e.ownerDocument);
                t = !(!t || !s.Dom.closest(t, "A", e.editor)) && s.Dom.closest(t, "A", e.editor);
                var l = a.querySelector(".jodit_link_insert_button"), c = a.querySelector(".jodit_unlink_button");
                t ? (r.val(a, "input[name=url]", t.getAttribute("href") || ""), r.val(a, "input[name=text]", t.innerText), a.querySelector("input[name=target]").checked = "_blank" === t.getAttribute("target"), a.querySelector("input[name=nofollow]").checked = "nofollow" === t.getAttribute("rel"), l && (l.innerHTML = e.i18n("Update"))) : (c && (c.style.display = "none"), r.val(a, "input[name=text]", "" + i), l && (l.innerHTML = e.i18n("Insert")));
                var d = e.selection.save();
                return c && c.addEventListener("mousedown", function (o) {
                    t && s.Dom.unwrap(t), e.selection.restore(d), n(), o.preventDefault()
                }), a.addEventListener("submit", function (o) {
                    o.preventDefault(), e.selection.restore(d);
                    var i = t || e.editorDocument.createElement("a");
                    return r.val(a, "input[name=url]") ? (i.setAttribute("href", r.val(a, "input[name=url]")), i.innerText = r.val(a, "input[name=text]"), a.querySelector("input[name=target]").checked ? i.setAttribute("target", "_blank") : i.removeAttribute("target"), a.querySelector("input[name=nofollow]").checked ? i.setAttribute("rel", "nofollow") : i.removeAttribute("rel"), t || e.selection.insertNode(i), n(), !1) : (a.querySelector("input[name=url]").focus(), a.querySelector("input[name=url]").classList.add("jodit_error"), !1)
                }), a
            }, tags: ["a"], tooltip: "Insert link"
        }, t.link = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t, o = 0, n = a.splitArray(e.options.buttons);
            e.events.on("touchend", function (n) {
                n.changedTouches.length && (t = (new Date).getTime()) - o > e.options.mobileTapTimeout && (o = t, e.selection.insertCursorAtPoint(n.changedTouches[0].clientX, n.changedTouches[0].clientY))
            }).on("getDiffButtons.mobile", function (t) {
                if (t === e.toolbar) return a.splitArray(e.options.buttons).filter(function (e) {
                    return 0 > n.indexOf(e)
                })
            }), e.options.toolbarAdaptive && e.events.on("resize afterInit", function () {
                if (e.options.toolbar) {
                    var t = e.container.offsetWidth, o = [];
                    "" + (o = a.splitArray(e.options.sizeLG > t ? e.options.sizeMD > t ? e.options.sizeSM > t ? e.options.buttonsXS : e.options.buttonsSM : e.options.buttonsMD : e.options.buttons)) != "" + n && (n = o, e.toolbar.build(n.concat(e.options.extraButtons), e.container))
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(5), s = o(2), a = o(0);
        i.Config.prototype.mobileTapTimeout = 300, i.Config.prototype.toolbarAdaptive = !0, i.Config.prototype.controls.dots = {
            mode: s.MODE_SOURCE + s.MODE_WYSIWYG,
            popup: function (e, t, o, n, i) {
                var s = o.data;
                return void 0 === s && (s = {
                    container: e.ownerDocument.createElement("div"),
                    toolbar: new r.ToolbarCollection(e),
                    rebuild: function () {
                        var t = e.events.fire("getDiffButtons.mobile", i.parentToolbar);
                        t && s && s.toolbar.build(a.splitArray(t), s.container)
                    }
                }, s.container.style.width = "100px", o.data = s), s.rebuild(), s.container
            }
        }, t.mobile = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            e.events.on("afterCommand", function (t) {
                if (/insert(un)?orderedlist/i.test(t)) {
                    var o = i.Dom.up(e.selection.current(), function (e) {
                        return e && /^UL|OL$/i.test(e.nodeName)
                    }, e.editor);
                    if (o && o.parentNode && "P" === o.parentNode.nodeName) {
                        var n = e.selection.save();
                        i.Dom.unwrap(o.parentNode), [].slice.call(o.childNodes).forEach(function (e) {
                            e.lastChild && e.lastChild.nodeType === Node.ELEMENT_NODE && "BR" === e.lastChild.nodeName && e.removeChild(e.lastChild)
                        }), e.selection.restore(n)
                    }
                    e.setEditorValue()
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(3), r = o(1);
        r.Config.prototype.controls.ul = {
            command: "insertUnorderedList",
            controlName: "ul",
            tags: ["ul"],
            tooltip: "Insert Unordered List"
        }, r.Config.prototype.controls.ol = {
            command: "insertOrderedList",
            controlName: "ol",
            tags: ["ol"],
            tooltip: "Insert Ordered List"
        }, t.orderedlist = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = "", o = function (e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.innerText
            }, n = function (t, o, n, s, a) {
                if (void 0 === s && (s = "Clean"), void 0 === a && (a = "Insert only Text"), !e.events || !1 !== e.events.fire("beforeOpenPasteDialog", t, o, n, s, a)) {
                    var l = i.Confirm('<div style="word-break: normal; white-space: normal">' + t + "</div>", o, n);
                    l.dialogbox.setAttribute("data-editor_id", e.id);
                    var c = r.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + e.i18n("Keep") + "</span></a>", l.document),
                        d = r.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + e.i18n(s) + "</span></a>", l.document),
                        u = r.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + e.i18n(a) + "</span></a>", l.document),
                        p = r.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + e.i18n("Cancel") + "</span></a>", l.document);
                    return e.events.on(c, "click", function () {
                        l.close(), n && n(!0)
                    }), e.events.on(d, "click", function () {
                        l.close(), n && n(!1)
                    }), e.events.on(u, "click", function () {
                        l.close(), n && n(0)
                    }), e.events.on(p, "click", function () {
                        l.close()
                    }), l.setFooter([c, d, a ? u : "", p]), e.events && e.events.fire("afterOpenPasteDialog", l, t, o, n, s, a), l
                }
            }, s = function (t, n) {
                switch (n) {
                    case a.INSERT_CLEAR_HTML:
                        t = r.cleanFromWord(t);
                        break;
                    case a.INSERT_ONLY_TEXT:
                        t = o(t);
                        break;
                    case a.INSERT_AS_TEXT:
                        t = r.htmlspecialchars(t)
                }
                e.selection.insertHTML(t)
            }, l = function (o, i) {
                if (r.isHTML(o) && t !== c(o)) return e.events.stopPropagation("beforePaste"), o = c(o), n(e.i18n("Your code is similar to HTML. Keep as HTML?"), e.i18n("Paste as HTML"), function (t) {
                    var n = a.INSERT_AS_HTML;
                    !1 === t && (n = a.INSERT_AS_TEXT), 0 === t && (n = a.INSERT_ONLY_TEXT), "drop" === i.type && e.selection.insertCursorAtPoint(i.clientX, i.clientY), s(o, n), e.setEditorValue()
                }, "Insert as Text"), !1
            }, c = function (e) {
                var t = e.search(/<!--StartFragment-->/i);
                -1 !== t && (e = e.substr(t + 20));
                var o = e.search(/<!--EndFragment-->/i);
                return -1 !== o && (e = e.substr(0, o)), e
            }, d = function (e) {
                return e.clipboardData ? e.clipboardData : e.dataTransfer
            };
            e.events.on("copy cut", function (n) {
                var i = e.selection.getHTML(), r = d(n) || d(e.editorWindow) || d(n.originalEvent);
                r.setData(a.TEXT_PLAIN, o(i)), r.setData(a.TEXT_HTML, i), t = i, "cut" === n.type && (e.selection.remove(), e.selection.focus()), n.preventDefault(), e.events.fire("afterCopy", i)
            }).on("paste", function (o) {
                if (!1 === e.events.fire("beforePaste", o)) return o.preventDefault(), !1;
                if (o && d(o)) {
                    var n = void 0, i = d(o).types, l = "", u = "";
                    if (Array.isArray(i) || "domstringlist" === r.type(i)) for (n = 0; i.length > n; n += 1) l += i[n] + ";"; else l = i;
                    /text\/html/i.test(l) ? u = d(o).getData("text/html") : /text\/rtf/i.test(l) && r.browser("safari") ? u = d(o).getData("text/rtf") : /text\/plain/i.test(l) && !r.browser("mozilla") ? u = d(o).getData(a.TEXT_PLAIN) : /text/i.test(l) && r.isIE && (u = d(o).getData(a.TEXT_PLAIN)), (u instanceof e.editorWindow.Node || "" !== r.trim(u)) && (u = c(u), t !== u && (u = e.events.fire("processPaste", o, u)), ("string" == typeof u || u instanceof e.editorWindow.Node) && ("drop" === o.type && e.selection.insertCursorAtPoint(o.clientX, o.clientY), s(u, e.options.defaultActionOnPaste)), o.preventDefault(), o.stopPropagation())
                }
                return !1 !== e.events.fire("afterPaste", o) && void 0
            }), e.options.askBeforePasteHTML && e.events.on("beforePaste", function (e) {
                if (e && d(e).getData(a.TEXT_PLAIN)) {
                    var t = d(e).getData(a.TEXT_PLAIN);
                    return l(t, e)
                }
            }), e.options.askBeforePasteFromWord && e.events.on("beforePaste", function (i) {
                if (i && d(i).getData && d(i).getData(a.TEXT_HTML)) {
                    var s = function (s) {
                        if (r.isHTML(s) && t !== c(s)) return r.isHTMLFromWord(s) ? n(e.i18n("The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?"), e.i18n("Word Paste Detected"), function (t) {
                            !0 === t && (s = r.applyStyles(s), e.options.beautifyHTML && e.ownerWindow.html_beautify && (s = e.ownerWindow.html_beautify(s))), !1 === t && (s = r.cleanFromWord(s)), 0 === t && (s = o(r.cleanFromWord(s))), e.selection.insertHTML(s), e.setEditorValue()
                        }) : l(s, i), !1
                    };
                    if (d(i).types && -1 !== [].slice.call(d(i).types).indexOf("text/html")) {
                        var u = d(i).getData(a.TEXT_HTML);
                        return s(u)
                    }
                    if ("drop" !== i.type) {
                        var p = r.dom('<div tabindex="-1" style="left: -9999px; top: 0; width: 0; height: 100%; line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;" contenteditable="true"></div>', e.ownerDocument);
                        e.container.appendChild(p);
                        var f = e.selection.save();
                        p.focus();
                        var h = 0, m = function () {
                            p.parentNode && p.parentNode.removeChild(p), e.selection.restore(f)
                        }, v = function () {
                            if (h += 1, p.childNodes && p.childNodes.length > 0) {
                                var t = p.innerHTML;
                                m(), !1 !== s(t) && e.selection.insertHTML(t)
                            } else 5 > h ? setTimeout(function () {
                                v()
                            }, 20) : m()
                        };
                        v()
                    }
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(7), r = o(0), s = o(1), a = o(2);
        s.Config.prototype.askBeforePasteHTML = !0, s.Config.prototype.askBeforePasteFromWord = !0, s.Config.prototype.defaultActionOnPaste = a.INSERT_AS_HTML, s.Config.prototype.controls.cut = {
            command: "cut",
            isDisable: function (e) {
                var t = e.editorWindow.getSelection();
                return !t || t.isCollapsed
            },
            tooltip: "Cut selection"
        }, t.paste = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            if (e.options.showPlaceholder) {
                this.destruct = function () {
                    i.parentNode && i.parentNode.removeChild(i)
                };
                var t = function () {
                        if (i.parentNode && !e.options.readonly) {
                            var t = 0, o = 0, n = e.editorWindow.getComputedStyle(e.editor);
                            if (e.editor.firstChild && e.editor.firstChild.nodeType === Node.ELEMENT_NODE) {
                                var r = e.editorWindow.getComputedStyle(e.editor.firstChild);
                                t = parseInt(r.getPropertyValue("margin-top"), 10), o = parseInt(r.getPropertyValue("margin-left"), 10), i.style.fontSize = parseInt(r.getPropertyValue("font-size"), 10) + "px", i.style.lineHeight = r.getPropertyValue("line-height")
                            } else i.style.fontSize = parseInt(n.getPropertyValue("font-size"), 10) + "px", i.style.lineHeight = n.getPropertyValue("line-height");
                            s.css(i, {
                                display: "block",
                                marginTop: Math.max(parseInt(n.getPropertyValue("margin-top"), 10), t),
                                marginLeft: Math.max(parseInt(n.getPropertyValue("margin-left"), 10), o)
                            })
                        }
                    }, o = function () {
                        i.parentNode && (i.style.display = "none")
                    }, n = s.debounce(function () {
                        if (null !== i.parentNode && e.editor) {
                            if (e.getRealMode() !== r.MODE_WYSIWYG) return o();
                            var n = e.getEditorValue();
                            n && !/^<(p|div|h[1-6])><\/\1>$/.test(n) ? o() : t()
                        }
                    }, e.defaultTimeout / 10),
                    i = s.dom('<span style="display: none;" class="jodit_placeholder">' + e.i18n(e.options.placeholder) + "</span>", e.ownerDocument);
                "rtl" === e.options.direction && (i.style.right = "0px", i.style.direction = "rtl"), e.options.useInputsPlaceholder && e.element.hasAttribute("placeholder") && (i.innerHTML = e.element.getAttribute("placeholder") || ""), e.events.on("readonly", function (e) {
                    e ? o() : n()
                }).on("afterInit", function () {
                    e.workplace.appendChild(i), n(), e.events.fire("placeholder", i.innerHTML), e.events.on("change keyup mouseup keydown mousedown afterSetMode", n).on(window, "load", n)
                })
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(2), s = o(0);
        i.Config.prototype.showPlaceholder = !0, i.Config.prototype.useInputsPlaceholder = !0, i.Config.prototype.placeholder = "Type something", t.placeholder = n
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(2), r = o(1), s = o(4);
        r.Config.prototype.controls.redo = {
            mode: i.MODE_SPLIT, isDisable: function (e) {
                return !e.observer.stack.canRedo()
            }, tooltip: "Redo"
        }, r.Config.prototype.controls.undo = {
            mode: i.MODE_SPLIT, isDisable: function (e) {
                return !e.observer.stack.canUndo()
            }, tooltip: "Undo"
        }, t.redoundo = function (e) {
            function t(t) {
                var o = e.call(this, t) || this, n = function (e) {
                    return t.getRealMode() === i.MODE_WYSIWYG && o.jodit.observer[e](), !1
                };
                return t.registerCommand("redo", {
                    exec: n,
                    hotkeys: "ctrl+y,ctrl+shift+z"
                }), t.registerCommand("undo", {exec: n, hotkeys: "ctrl+z"}), o
            }

            return n(t, e), t
        }(s.Component)
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t, o, n, i, a, l, c, d, u, p, f, h = !1, m = !1, v = !1, g = 0,
                _ = s.dom('<div data-editor_id="' + e.id + '" style="display:none" class="jodit_resizer"><i class="jodit_resizer-topleft"></i><i class="jodit_resizer-topright"></i><i class="jodit_resizer-bottomright"></i><i class="jodit_resizer-bottomleft"></i><span>100x100</span></div>', e.ownerDocument),
                b = _.getElementsByTagName("span")[0], y = function () {
                    m = !1, v = !1, o = null, _.style.display = "none"
                }, w = function (t, o) {
                    e.options.resizer.showSize && (b.style.opacity = "1", b.innerHTML = t + " x " + o, window.clearTimeout(g), g = window.setTimeout(function () {
                        b.style.opacity = "0"
                    }, 1e3))
                }, C = function () {
                    if (v && o && _) {
                        var t = s.offset(o, e, e.editorDocument), n = parseInt(_.style.left || "0", 10),
                            i = parseInt(_.style.top || "0", 10), r = _.offsetWidth, a = _.offsetHeight;
                        i === t.top - 1 && n === t.left - 1 && r === o.offsetWidth && a === o.offsetHeight || (_.style.top = t.top - 1 + "px", _.style.left = t.left - 1 + "px", _.style.width = o.offsetWidth + "px", _.style.height = o.offsetHeight + "px", e.events && (e.events.fire(o, "changesize"), isNaN(n) || e.events.fire("resize")))
                    }
                }, E = function () {
                    e.options.readonly || (_.parentNode || e.ownerDocument.body.appendChild(_), v = !0, _.style.display = "block", e.isFullSize() && (_.style.zIndex = "" + s.css(e.container, "zIndex")), C())
                }, j = function (t) {
                    var n;
                    if ("IFRAME" === t.tagName) if (t.parentNode && t.parentNode.getAttribute("data-jodit_iframe_wrapper")) t = t.parentNode; else {
                        n = s.dom('<jodit data-jodit-temp="1" contenteditable="false" draggable="true" data-jodit_iframe_wrapper="1"></jodit>', e.editorDocument), n.style.display = "inline-block" === t.style.display ? "inline-block" : "block", n.style.width = t.offsetWidth + "px", n.style.height = t.offsetHeight + "px", t.parentNode && t.parentNode.insertBefore(n, t), n.appendChild(t);
                        var i = t;
                        e.events.on(n, "changesize", function () {
                            i.setAttribute("width", n.offsetWidth + "px"), i.setAttribute("height", n.offsetHeight + "px")
                        }), t = n
                    }
                    var r;
                    e.events.on(t, "dragstart", y).on(t, "mousedown", function (e) {
                        s.isIE() && "IMG" === t.nodeName && e.preventDefault()
                    }).on(t, "mousedown touchstart", function () {
                        h || (h = !0, o = t, E(), "IMG" !== o.tagName || o.complete || o.addEventListener("load", function e() {
                            C(), o && o.removeEventListener("load", e)
                        }), clearTimeout(r)), r = window.setTimeout(function () {
                            h = !1
                        }, 400)
                    })
                };
            s.$$("i", _).forEach(function (r) {
                e.events.on(r, "mousedown touchstart", function (s) {
                    if (!o || !o.parentNode) return y(), !1;
                    t = r, s.preventDefault(), s.stopImmediatePropagation(), a = o.offsetWidth, l = o.offsetHeight, c = a / l, m = !0, n = s.clientX, i = s.clientY, e.events.fire("hidePopup"), e.lock("resizer")
                })
            }), e.events.on("readonly", function (e) {
                e && y()
            }).on("beforeDestruct", function () {
                _.parentNode && _.parentNode.removeChild(_)
            }).on("afterInit", function () {
                e.events.on(e.editor, "keydown", function (t) {
                    v && t.keyCode === r.KEY_DELETE && o && "table" !== o.tagName.toLowerCase() && ("JODIT" !== o.tagName ? e.selection.select(o) : (o.parentNode && o.parentNode.removeChild(o), y(), t.preventDefault()))
                }).on(e.ownerWindow, "mousemove touchmove", function (r) {
                    if (m) {
                        if (p = r.clientX - n, f = r.clientY - i, !o) return;
                        var h = t.className;
                        "IMG" === o.tagName ? (p ? (u = a + (h.match(/left/) ? -1 : 1) * p, d = Math.round(u / c)) : (d = l + (h.match(/top/) ? -1 : 1) * f, u = Math.round(d * c)), u > s.innerWidth(e.editor, e.ownerWindow) && (u = s.innerWidth(e.editor, e.ownerWindow), d = Math.round(u / c))) : (u = a + (h.match(/left/) ? -1 : 1) * p, d = l + (h.match(/top/) ? -1 : 1) * f), u > e.options.resizer.min_width && (o.style.width = _.parentNode.offsetWidth > u ? u + "px" : "100%"), d > e.options.resizer.min_height && (o.style.height = d + "px"), C(), w(o.offsetWidth, o.offsetHeight), r.stopImmediatePropagation()
                    }
                }).on(e.ownerWindow, "resize", function () {
                    v && C()
                }).on(e.ownerWindow, "mouseup keydown touchend", function (t) {
                    v && !h && (m ? (e.unlock(), m = !1, e.setEditorValue(), t.stopImmediatePropagation()) : y())
                }).on([e.ownerWindow, e.editor], "scroll", function () {
                    v && !m && y()
                })
            }).on("afterGetValueFromEditor", function (e) {
                e.value = e.value.replace(/<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>[\s\n\r]*<\/iframe>.*?)<\/jodit>/gi, "$1")
            }).on("change afterInit afterSetMode", s.debounce(function () {
                v && (o && o.parentNode ? C() : y()), s.$$("img, table, iframe", e.editor).forEach(function (t) {
                    e.getMode() !== r.MODE_SOURCE && !t.__jodit_resizer_binded && ("IFRAME" === t.tagName && e.options.useIframeResizer || "IMG" === t.tagName && e.options.useImageResizer || "TABLE" === t.tagName && e.options.useTableResizer) && (t.__jodit_resizer_binded = !0, j(t))
                })
            }, e.defaultTimeout))
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(2), s = o(0);
        i.Config.prototype.useIframeResizer = !0, i.Config.prototype.useTableResizer = !0, i.Config.prototype.useImageResizer = !0, i.Config.prototype.resizer = {
            showSize: !0,
            min_width: 10,
            min_height: 10
        }, t.resizer = n
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            var t = function (t) {
                i.css(e.container, "height", t), e.options.saveHeightInStorage && e.storage.set("height", t)
            }, o = function (t) {
                return i.css(e.container, "width", t)
            }, n = function (t) {
                return i.css(e.workplace, "height", t)
            };
            if ("auto" !== e.options.height && (e.options.allowResizeX || e.options.allowResizeY)) {
                var r = i.dom('<div class="jodit_editor_resize" ><a href="javascript:void(0)"></a></div>', e.ownerDocument),
                    s = {x: 0, y: 0, w: 0, h: 0}, a = !1;
                e.events.on(r, "mousedown touchstart", function (t) {
                    a = !0, s.x = t.clientX, s.y = t.clientY, s.w = e.container.offsetWidth, s.h = e.container.offsetHeight, e.lock(), t.preventDefault()
                }).on(e.ownerWindow, "mousemove touchmove", i.throttle(function (n) {
                    a && (t(e.options.allowResizeY ? s.h + n.clientY - s.y : s.h), o(e.options.allowResizeX ? s.w + n.clientX - s.x : s.w), d(), e.events.fire("resize"))
                }, e.defaultTimeout / 10)).on(e.ownerWindow, "mouseup touchsend", function () {
                    a && (a = !1, e.unlock())
                }).on("afterInit", function () {
                    e.container.appendChild(r)
                }).on("toggleFullSize", function (e) {
                    r.style.display = e ? "none" : "block"
                })
            }
            var l = function () {
                return (e.options.toolbar ? e.toolbar.container.offsetHeight : 0) + (e.statusbar ? e.statusbar.container.offsetHeight : 0)
            }, c = function () {
                if (e.container && e.container.parentNode) {
                    var t = i.css(e.container, "minHeight") - l();
                    [e.workplace, e.iframe, e.editor].map(function (o) {
                        var n = o === e.editor ? t - 2 : t;
                        o && i.css(o, "minHeight", n), e.events.fire("setMinHeight", n)
                    })
                }
            }, d = function () {
                c(), e.container && ("auto" !== e.options.height || e.isFullSize()) && n(e.container.offsetHeight - l())
            }, u = i.debounce(d, e.defaultTimeout);
            e.events.on("toggleFullSize", function (t) {
                t || "auto" !== e.options.height || (n("auto"), c())
            }).on("afterInit", function () {
                i.css(e.editor, {minHeight: "100%"}), i.css(e.container, {
                    minHeight: e.options.minHeight,
                    minWidth: e.options.minWidth,
                    maxWidth: e.options.maxWidth
                });
                var n = e.options.height;
                if (e.options.saveHeightInStorage && "auto" !== n) {
                    var r = e.storage.get("height");
                    r && (n = r)
                }
                t(n), o(e.options.width), d()
            }, void 0, void 0, !0).on(window, "load", u).on("afterInit resize updateToolbar scroll afterResize", u)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(0), r = o(1);
        r.Config.prototype.allowResizeX = !1, r.Config.prototype.allowResizeY = !0, t.size = n
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(2), s = o(0), a = o(4), l = o(2);
        i.Config.prototype.beautifyHTML = !0, i.Config.prototype.useAceEditor = !0, i.Config.prototype.sourceEditorNativeOptions = {
            showGutter: !0,
            theme: "ace/theme/idle_fingers",
            mode: "ace/mode/html",
            wrap: !0,
            highlightActiveLine: !0
        }, i.Config.prototype.sourceEditorCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/ace/1.3.1/ace.js"], i.Config.prototype.beautifyHTMLCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify.min.js", "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify-html.min.js"], i.Config.prototype.controls.source = {
            mode: r.MODE_SPLIT,
            exec: function (e) {
                e.toggleMode()
            },
            isActive: function (e) {
                return e.getRealMode() === r.MODE_SOURCE
            },
            tooltip: "Change mode"
        }, t.source = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.className = "jodit_ace_editor", o.loadNext = function (e, t, n, i) {
                    if (void 0 === n && (n = "aceReady"), void 0 === i && (i = o.className), n && void 0 === t[e] && o.jodit && o.jodit.events) return o.jodit.events && o.jodit.events.fire(n), void (o.jodit.events && o.jodit.events.fire(o.jodit.ownerWindow, n));
                    void 0 !== t[e] && s.appendScript(t[e], function () {
                        o.loadNext(e + 1, t, n, i)
                    }, i, o.jodit.ownerDocument)
                }, o.fromWYSIWYG = function (e) {
                    if (void 0 === e && (e = !1), !o.__lock || !0 === e) {
                        o.__lock = !0;
                        var t = o.jodit.getEditorValue(!1);
                        t !== o.getMirrorValue() && o.setMirrorValue(t), o.__lock = !1
                    }
                }, o.insertHTML = function (e) {
                    if (o.mirror.selectionStart || 0 === o.mirror.selectionStart) {
                        var t = o.mirror.selectionStart, n = o.mirror.selectionEnd;
                        o.mirror.value = o.mirror.value.substring(0, t) + e + o.mirror.value.substring(n, o.mirror.value.length)
                    } else o.mirror.value += o.mirror;
                    o.toWYSIWYG()
                }, o.__lock = !1, o.toWYSIWYG = function () {
                    o.__lock || (o.__lock = !0, o.jodit.setEditorValue(o.getMirrorValue()), o.__lock = !1)
                }, o.autosize = s.debounce(function () {
                    o.mirror.style.height = "auto", o.mirror.style.height = o.mirror.scrollHeight + "px"
                }, o.jodit.defaultTimeout), o.getNormalPosition = function (e, t) {
                    for (var o = e; o > 0;) {
                        if (o--, "<" === t[o] && void 0 !== t[o + 1] && t[o + 1].match(/[\w\/]+/i)) return o;
                        if (">" === t[o]) return e
                    }
                    return e
                }, o.tempMarkerStart = "{start-jodit-selection}", o.tempMarkerStartReg = /{start-jodit-selection}/g, o.tempMarkerEnd = "{end-jodit-selection}", o.tempMarkerEndReg = /{end-jodit-selection}/g, o.__clear = function (e) {
                    return e.replace(r.INVISIBLE_SPACE_REG_EXP, "")
                }, o.selInfo = [], o.selectAll = function () {
                    o.mirror.select()
                }, o.onSelectAll = function (e) {
                    if ("selectall" === e.toLowerCase() && o.jodit.getRealMode() === l.MODE_SOURCE) return o.selectAll(), !1
                }, o.getSelectionStart = function () {
                    return o.mirror.selectionStart
                }, o.getSelectionEnd = function () {
                    return o.mirror.selectionEnd
                }, o.setMirrorSelectionRange = function (e, t) {
                    o.mirror.setSelectionRange(e, t)
                }, o.saveSelection = function () {
                    if (o.jodit.getRealMode() === r.MODE_WYSIWYG) o.selInfo = o.jodit.selection.save() || [], o.jodit.setEditorValue(), o.fromWYSIWYG(!0); else {
                        o.selInfo.length = 0;
                        var e = o.getMirrorValue();
                        if (o.getSelectionStart() === o.getSelectionEnd()) {
                            var t = o.jodit.selection.marker(!0);
                            o.selInfo[0] = {startId: t.id, collapsed: !0, startMarker: t.outerHTML};
                            var n = o.getNormalPosition(o.getSelectionStart(), o.getMirrorValue());
                            o.setMirrorValue(e.substr(0, n) + o.__clear(o.selInfo[0].startMarker) + e.substr(n))
                        } else {
                            var i = o.jodit.selection.marker(!0), s = o.jodit.selection.marker(!1);
                            o.selInfo[0] = {
                                startId: i.id,
                                endId: s.id,
                                collapsed: !1,
                                startMarker: o.__clear(i.outerHTML),
                                endMarker: o.__clear(s.outerHTML)
                            };
                            var n = o.getNormalPosition(o.getSelectionStart(), e),
                                a = o.getNormalPosition(o.getSelectionEnd(), e);
                            o.setMirrorValue(e.substr(0, n) + o.selInfo[0].startMarker + e.substr(n, a - n) + o.selInfo[0].endMarker + e.substr(a))
                        }
                        o.toWYSIWYG()
                    }
                }, o.restoreSelection = function () {
                    if (o.selInfo.length) {
                        if (o.jodit.getRealMode() === r.MODE_WYSIWYG) return o.__lock = !0, o.jodit.selection.restore(o.selInfo), void (o.__lock = !1);
                        var e = o.getMirrorValue(), t = 0, n = 0;
                        try {
                            o.selInfo[0].startMarker && (e = e.replace(/<span[^>]+data-jodit_selection_marker="start"[^>]*>[<>]*?<\/span>/gim, o.tempMarkerStart)), o.selInfo[0].endMarker && (e = e.replace(/<span[^>]+data-jodit_selection_marker="end"[^>]*>[<>]*?<\/span>/gim, o.tempMarkerEnd)), o.jodit.ownerWindow.html_beautify && o.jodit.options.beautifyHTML && (e = o.jodit.ownerWindow.html_beautify(e)), t = e.indexOf(o.tempMarkerStart), n = t, e = e.replace(o.tempMarkerStartReg, ""), o.selInfo[0].collapsed && -1 !== t || (n = e.indexOf(o.tempMarkerEnd), -1 === t && (t = n)), e = e.replace(o.tempMarkerEndReg, "")
                        } finally {
                            e = e.replace(o.tempMarkerEndReg, "").replace(o.tempMarkerStartReg, "")
                        }
                        o.setMirrorValue(e), o.setMirrorSelectionRange(t, n), o.toWYSIWYG(), o.setFocusToMirror()
                    }
                }, o.mirrorContainer = s.dom('<div class="jodit_source"/>', o.jodit.ownerDocument), o.mirror = s.dom('<textarea class="jodit_source_mirror"/>', o.jodit.ownerDocument), t.events.on(o.mirror, "mousedown keydown touchstart input", s.debounce(o.toWYSIWYG, t.defaultTimeout)).on(o.mirror, "change keydown mousedown touchstart input", o.autosize).on("afterSetMode", o.autosize).on(o.mirror, "mousedown focus", function (e) {
                    t.events.fire(e.type, e)
                }), t.events.on("setMinHeight", function (e) {
                    o.mirror && s.css(o.mirror, "minHeight", e)
                }).on("insertHTML", function (e) {
                    if (!t.options.readonly && !o.jodit.isEditorMode()) return o.insertHTML(e), !1
                }).on("aceInited", function () {
                    t.options.readonly && o.aceEditor && o.aceEditor.setReadOnly(!0)
                }, void 0, void 0, !0).on("readonly", function (e) {
                    e ? o.mirror.setAttribute("readonly", "true") : o.mirror.removeAttribute("readonly"), o.aceEditor && o.aceEditor.setReadOnly(e)
                }).on("placeholder", function (e) {
                    o.mirror.setAttribute("placeholder", e)
                }).on("afterInit aceInited", function () {
                    t.events.on("beforeSetMode", o.saveSelection).on("afterSetMode", o.restoreSelection)
                }).on("afterInit", function () {
                    o.mirrorContainer.appendChild(o.mirror), t.workplace.appendChild(o.mirrorContainer), o.autosize(), t.options.beautifyHTML && void 0 === t.ownerWindow.html_beautify && !s.$$("script.beutyfy_html_jodit_helper", t.ownerDocument.body).length && o.loadNext(0, t.options.beautifyHTMLCDNUrlsJS, !1, "beutyfy_html_jodit_helper"), t.options.useAceEditor && o.replaceMirrorToACE()
                }).on("beforeCommand", o.onSelectAll).on("change afterInit", o.fromWYSIWYG), o
            }

            return n(t, e), t.prototype.getMirrorValue = function () {
                return this.mirror.value
            }, t.prototype.setMirrorValue = function (e) {
                this.mirror.value = e
            }, t.prototype.setFocusToMirror = function () {
                this.mirror.focus()
            }, t.prototype.replaceMirrorToACE = function () {
                var e, t, o = this, n = this.jodit, i = function () {
                    t && n.getRealMode() === r.MODE_SOURCE && (n.events.fire("canRedo", t.hasRedo()), n.events.fire("canUndo", t.hasUndo()))
                }, a = function (t) {
                    return e.session.getLine(t).length
                }, l = function () {
                    for (var t = e.session.getLength(), o = [], n = 0, i = 0; t > i; i++) n += a(i), i > 0 && (n += 1), o[i] = n;
                    return o
                }, c = function (e) {
                    var t = l();
                    if (t[0] >= e) return {row: 0, column: e};
                    for (var o = 1, n = 1; t.length > n; n++) e > t[n] && (o = n + 1);
                    return {row: o, column: e - t[o - 1] - 1}
                }, d = function (t, o) {
                    var n = c(t), i = c(o);
                    e.getSelection().setSelectionRange({start: n, end: i})
                }, u = function (e, t) {
                    return l()[e] - a(e) + t
                }, p = function () {
                    if (void 0 === e && void 0 !== o.jodit.ownerWindow.ace) {
                        var a = s.dom('<div class="jodit_source_mirror-fake"/>', o.jodit.ownerDocument);
                        o.mirrorContainer.insertBefore(a, o.mirrorContainer.firstChild), o.aceEditor = e = o.jodit.ownerWindow.ace.edit(a), e.setTheme(n.options.sourceEditorNativeOptions.theme), e.renderer.setShowGutter(n.options.sourceEditorNativeOptions.showGutter), e.getSession().setMode(n.options.sourceEditorNativeOptions.mode), e.setHighlightActiveLine(n.options.sourceEditorNativeOptions.highlightActiveLine), e.getSession().setUseWrapMode(!0), e.setOption("indentedSoftWrap", !1), e.setOption("wrap", n.options.sourceEditorNativeOptions.wrap), e.getSession().setUseWorker(!1), e.$blockScrolling = 1 / 0, e.setOptions({maxLines: 1 / 0}), e.on("change", o.toWYSIWYG), e.on("focus", function (e) {
                            n.events.fire("focus", e)
                        }), e.on("mousedown", function (e) {
                            n.events.fire("mousedown", e)
                        }), o.mirror.style.display = "none", t = e.getSession().getUndoManager(), o.setMirrorValue = function (t) {
                            e.setValue(n.options.beautifyHTML && n.ownerWindow.html_beautify ? n.ownerWindow.html_beautify(t) : t), e.clearSelection(), i()
                        }, o.jodit.getRealMode() !== r.MODE_WYSIWYG && o.setMirrorValue(o.getMirrorValue()), o.getMirrorValue = function () {
                            return e.getValue()
                        }, o.setFocusToMirror = function () {
                            e.focus()
                        }, o.getSelectionStart = function () {
                            var t = e.selection.getRange();
                            return u(t.start.row, t.start.column)
                        }, o.getSelectionEnd = function () {
                            var t = e.selection.getRange();
                            return u(t.end.row, t.end.column)
                        }, o.selectAll = function () {
                            e.selection.selectAll()
                        }, o.insertHTML = function (t) {
                            var o = e.selection.getCursor(), n = e.session.insert(o, t);
                            e.selection.setRange({start: o, end: n}, !1)
                        }, o.setMirrorSelectionRange = function (e, t) {
                            d(e, t)
                        }, n.events.on("afterResize", function () {
                            e.resize()
                        }).fire("aceInited", n)
                    }
                };
                n.events.on(this.jodit.ownerWindow, "aceReady", p).on("aceReady", p).on("afterSetMode", function () {
                    n.getRealMode() !== r.MODE_SOURCE && n.getMode() !== r.MODE_SPLIT || (o.fromWYSIWYG(), p())
                }).on("beforeCommand", function (o) {
                    if (n.getRealMode() !== r.MODE_WYSIWYG && ("redo" === o || "undo" === o) && t) return t["has" + o.substr(0, 1).toUpperCase() + o.substr(1)] && e[o](), i(), !1
                }), p(), void 0 !== this.jodit.ownerWindow.ace || s.$$("script." + this.className, this.jodit.ownerDocument.body).length || this.loadNext(0, n.options.sourceEditorCDNUrlsJS, "aceReady", this.className)
            }, t
        }(a.Component)
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = o(1), i = o(7), r = o(0), s = o(2);
        n.Config.prototype.usePopupForSpecialCharacters = !1, n.Config.prototype.specialCharacters = ["!", "&quot;", "#", "$", "%", "&amp;", "'", "(", ")", "*", "+", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&raquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"], n.Config.prototype.controls.symbol = {
            icon: "omega",
            hotkeys: "ctrl+shift+i",
            tooltip: "Insert Special Character",
            popup: function (e, t, o, n) {
                var r = e.events.fire("generateSpecialCharactersTable.symbols");
                if (r) {
                    if (e.options.usePopupForSpecialCharacters) {
                        var s = e.ownerDocument.createElement("div");
                        return s.classList.add("jodit_symbols"), s.appendChild(r), e.events.on(r, "close_dialog", n), s
                    }
                    var a = i.Alert(r, e.i18n("Select Special Character"), void 0, "jodit_symbols"),
                        l = r.querySelector("a");
                    l && l.focus(), e.events.on("beforeDestruct", function () {
                        a && a.close()
                    })
                }
            }
        }, t.symbols = function () {
            function e(e) {
                var t = this;
                this.countInRow = 17, e.events.on("generateSpecialCharactersTable.symbols", function () {
                    for (var o = r.dom('<div class="jodit_symbols-container"><div class="jodit_symbols-container_table"><table><tbody></tbody></table></div><div class="jodit_symbols-container_preview"><div class="jodit_symbols-preview"></div></div></div>', e.ownerDocument), n = o.querySelector(".jodit_symbols-preview"), i = o.querySelector("table"), a = i.tBodies[0], l = [], c = 0; e.options.specialCharacters.length > c;) {
                        for (var d = e.ownerDocument.createElement("tr"), u = 0; t.countInRow > u && e.options.specialCharacters.length > c; u += 1, c += 1) {
                            var p = e.ownerDocument.createElement("td"),
                                f = r.dom('<a data-index="' + c + '" data-index-j="' + u + '" href="javascript:void(0)" role="option" tabindex="-1">' + e.options.specialCharacters[c] + "</a>", e.ownerDocument);
                            l.push(f), p.appendChild(f), d.appendChild(p)
                        }
                        a.appendChild(d)
                    }
                    var h = t;
                    return e.events.on(l, "focus", function () {
                        n.innerHTML = this.innerHTML
                    }).on(l, "mousedown", function (t) {
                        this && "A" === this.nodeName && (e.selection.focus(), e.selection.insertHTML(this.innerHTML), e.events.fire(this, "close_dialog"), t && t.preventDefault(), t && t.stopImmediatePropagation())
                    }).on(l, "mouseenter", function () {
                        this && "A" === this.nodeName && this.focus()
                    }).on(l, "keydown", function (t) {
                        var o = t.target;
                        if (o && "A" === o.nodeName) {
                            var n = parseInt(o.getAttribute("data-index") || "0", 0),
                                i = parseInt(o.getAttribute("data-index-j") || "0", 0), r = void 0;
                            switch (t.which) {
                                case s.KEY_UP:
                                case s.KEY_DOWN:
                                    r = t.which === s.KEY_UP ? n - h.countInRow : n + h.countInRow, void 0 === l[r] && (r = t.which === s.KEY_UP ? Math.floor(l.length / h.countInRow) * h.countInRow + i : i) > l.length - 1 && (r -= h.countInRow), l[r] && l[r].focus();
                                    break;
                                case s.KEY_RIGHT:
                                case s.KEY_LEFT:
                                    r = t.which === s.KEY_LEFT ? n - 1 : n + 1, void 0 === l[r] && (r = t.which === s.KEY_LEFT ? l.length - 1 : 0), l[r] && l[r].focus();
                                    break;
                                case s.KEY_ENTER:
                                    e.events.fire(o, "mousedown"), t.stopImmediatePropagation(), t.preventDefault()
                            }
                        }
                    }), o
                })
            }

            return e
        }()
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(4), s = o(0);
        i.Config.prototype.commandToHotkeys = {
            removeFormat: "ctrl+shift+m",
            insertOrderedList: "ctrl+shift+7",
            insertUnorderedList: "ctrl+shift+8",
            selectall: "ctrl+a"
        }, t.hotkeys = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.specialKeys = {
                    8: "backspace",
                    9: "tab",
                    10: "return",
                    13: "return",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    19: "pause",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "insert",
                    46: "del",
                    59: ";",
                    61: "=",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    112: "f1",
                    113: "f2",
                    114: "f3",
                    115: "f4",
                    116: "f5",
                    117: "f6",
                    118: "f7",
                    119: "f8",
                    120: "f9",
                    121: "f10",
                    122: "f11",
                    123: "f12",
                    144: "numlock",
                    145: "scroll",
                    173: "-",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, o.shiftNums = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ": ",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                }, o.possible = {}, o.onKeyPress = function (e) {
                    var t = "keypress" !== e.type && o.specialKeys[e.which],
                        n = String.fromCharCode(e.which).toLowerCase(), i = "";
                    e.metaKey && !e.ctrlKey && (i += "ctrl+"), ["alt", "ctrl", "shift"].forEach(function (o) {
                        e[o + "Key"] && t !== o && (i += o + "+")
                    }), e.metaKey && i.indexOf("alt+ctrl+shift+") > -1 && (i = i.replace("alt+ctrl+shift+", "hyper+")), t ? o.possible[i + t] = !0 : (o.possible[i + n] = !0, o.shiftNums[n] && (o.possible[i + o.shiftNums[n]] = !0), "shift+" === i && (o.possible[o.shiftNums[n]] = !0))
                }, Object.keys(t.options.commandToHotkeys).forEach(function (e) {
                    var o = t.options.commandToHotkeys[e];
                    o && t.events.off(s.asArray(o).map(function (e) {
                        return e + ".hotkey"
                    }).join(" ")).on(s.asArray(o).map(function (e) {
                        return e + ".hotkey"
                    }).join(" "), function () {
                        return t.execCommand(e)
                    })
                }), t.events.on("afterInit", function () {
                    var e = function (e) {
                        var t = !0;
                        if (Object.keys(o.possible).forEach(function (n) {
                            !1 === o.jodit.events.fire(n, e.type) && (t = !1)
                        }), !t) return !1
                    }, n = !1, i = o;
                    t.events.on("keydown", function (o) {
                        if (i.possible = {}, i.onKeyPress(o), !1 === e(o)) return n = !0, t.events.stopPropagation("keydown"), !1
                    }, void 0, void 0, !0).on("keyup", function () {
                        if (n) return n = !1, t.events.stopPropagation("keyup"), !1
                    }, void 0, void 0, !0)
                }), o
            }

            return n(t, e), t
        }(r.Component)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(2), r = o(0), s = o(1), a = o(12);
        s.Config.prototype.useTableProcessor = !0, s.Config.prototype.useExtraClassesOptions = !0, s.Config.prototype.controls.table = {
            data: {
                cols: 10,
                rows: 10,
                classList: {
                    "table table-bordered": "Bootstrap Bordered",
                    "table table-striped": "Bootstrap Striped",
                    "table table-dark": "Bootstrap Dark"
                }
            }, popup: function (e, t, o, n, i) {
                var s, l, c, d, u = 1, p = 1, f = o.data && o.data.rows ? o.data.rows : 10,
                    h = o.data && o.data.cols ? o.data.cols : 10,
                    m = r.dom('<form class="jodit_form jodit_form_inserter"><label><span>1</span> &times; <span>1</span></label><div class="jodit_form-table-creator-box"><div class="jodit_form-container"></div><div class="jodit_form-options">' + function () {
                        if (!e.options.useExtraClassesOptions) return "";
                        var t = [];
                        if (o.data) {
                            var n = o.data.classList;
                            Object.keys(n).forEach(function (e) {
                                t.push('<label><input value="' + e + '" type="checkbox"/>' + n[e] + "</label>")
                            })
                        }
                        return t.join("")
                    }() + "</div></div></form>", e.ownerDocument), v = m.querySelectorAll("span")[0],
                    g = m.querySelectorAll("span")[1], _ = m.querySelector(".jodit_form-container"),
                    b = m.querySelector(".jodit_form-table-creator-box"), y = m.querySelector(".jodit_form-options"),
                    w = [], C = function (t) {
                        var o = t * h;
                        if (w.length > o) {
                            for (s = o; w.length > s; s += 1) _.removeChild(w[s]), delete w[s];
                            w.length = o
                        }
                        for (s = 0; o > s; s += 1) w[s] || (d = e.ownerDocument.createElement("div"), d.setAttribute("data-index", "" + s), w.push(d));
                        w.forEach(function (e) {
                            _.appendChild(e)
                        });
                        var n = (w[0].offsetWidth || 18) * h;
                        _.style.width = n + "px", b.style.width = n + y.offsetWidth + 1 + "px"
                    };
                return _.addEventListener("mousemove", function (e, t) {
                    var o = e.target;
                    if (o && "DIV" === o.tagName) {
                        for (c = void 0 === t || isNaN(t) ? parseInt(o.getAttribute("data-index") || "0", 10) : t || 0, u = Math.ceil((c + 1) / h), p = c % h + 1, s = 0; w.length > s; s += 1) w[s].className = s % h + 1 > p || u < Math.ceil((s + 1) / h) ? "" : "hovered";
                        g.innerText = "" + p, v.innerText = "" + u
                    }
                }), e.events.on(_, "touchstart mousedown", function (t) {
                    var o = t.target, i = e.editorDocument;
                    if (t.preventDefault(), t.stopImmediatePropagation(), "DIV" === o.tagName) {
                        c = parseInt(o.getAttribute("data-index") || "0", 10), u = Math.ceil((c + 1) / h), p = c % h + 1;
                        var d = i.createElement("table");
                        d.style.width = "100%";
                        var f, m, v, g = null;
                        for (s = 1; u >= s; s += 1) {
                            for (f = i.createElement("tr"), l = 1; p >= l; l += 1) m = i.createElement("td"), g || (g = m), v = i.createElement("br"), m.appendChild(v), f.appendChild(i.createTextNode("\n")), f.appendChild(i.createTextNode("\t")), f.appendChild(m);
                            d.appendChild(i.createTextNode("\n")), d.appendChild(f)
                        }
                        var _ = e.selection.current();
                        if (_ && e.selection.isCollapsed()) {
                            var b = a.Dom.closest(_, a.Dom.isBlock, e.editor);
                            b && b !== e.editor && !b.nodeName.match(/^TD|TH|TBODY|TABLE|THEADER|TFOOTER$/) && e.selection.setCursorAfter(b)
                        }
                        r.$$("input[type=checkbox]:checked", y).forEach(function (e) {
                            e.value.split(/[\s]+/).forEach(function (e) {
                                d.classList.add(e)
                            })
                        }), e.selection.insertNode(i.createTextNode("\n")), e.selection.insertNode(d, !1), g && (e.selection.setCursorIn(g), r.scrollIntoView(g, e.editor, e.editorDocument)), n()
                    }
                }).off(i.parentToolbar, "afterOpenPopup.tableGenerator").on(i.parentToolbar, "afterOpenPopup.tableGenerator", function () {
                    C(f), w[0] && (w[0].className = "hovered")
                }), m
            }, tooltip: "Insert table"
        }, t.TableProcessor = function (e) {
            function t(o) {
                var n = e.call(this, o) || this;
                return n.__key = "table_processor_observer", n.__selectMode = !1, n.__resizerDelta = 0, n.__drag = !1, n.__addResizer = function () {
                    if (!n.__resizerHandler && !(n.__resizerHandler = n.jodit.container.querySelector(".jodit_table_resizer"))) {
                        n.__resizerHandler = r.dom('<div class="jodit_table_resizer"></div>', n.jodit.ownerDocument);
                        var e = 0;
                        n.jodit.events.on(n.__resizerHandler, "mousedown touchstart", function (t) {
                            n.__drag = !0, e = t.clientX, n.jodit.lock(n.__key), n.__resizerHandler.classList.add("jodit_table_resizer-moved");
                            var o, r = n.__workTable.getBoundingClientRect();
                            if (n.__minX = 0, n.__maxX = 1e6, null !== n.__wholeTable) r = n.__workTable.parentNode.getBoundingClientRect(), n.__minX = r.left, n.__maxX = r.left + r.width; else {
                                var s = a.Table.formalCoordinate(n.__workTable, n.__workCell, !0);
                                a.Table.formalMatrix(n.__workTable, function (e, t, r) {
                                    s[1] === r && (o = e.getBoundingClientRect(), n.__minX = Math.max(o.left + i.NEARBY / 2, n.__minX)), s[1] + 1 === r && (o = e.getBoundingClientRect(), n.__maxX = Math.min(o.left + o.width - i.NEARBY / 2, n.__maxX))
                                })
                            }
                            return !1
                        }).on(n.jodit.ownerWindow, "mousemove touchmoove", function (t) {
                            if (n.__drag) {
                                var o = t.clientX;
                                n.__minX > o && (o = n.__minX), o > n.__maxX && (o = n.__maxX), n.__resizerDelta = o - e, n.__resizerHandler.style.left = o + "px", n.jodit.editorWindow.getSelection().removeAllRanges(), t.preventDefault && t.preventDefault()
                            }
                        }), n.jodit.container.appendChild(n.__resizerHandler)
                    }
                }, n.onExecCommand = function (e) {
                    if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(e)) {
                        e = e.replace("table", "");
                        var t = a.Table.getAllSelectedCells(n.jodit.editor);
                        if (t.length) {
                            var o = t.shift();
                            if (!o) return;
                            var i = a.Dom.closest(o, "table", n.jodit.editor);
                            switch (e) {
                                case"splitv":
                                    a.Table.splitVertical(i);
                                    break;
                                case"splitg":
                                    a.Table.splitHorizontal(i);
                                    break;
                                case"merge":
                                    a.Table.mergeSelected(i);
                                    break;
                                case"empty":
                                    a.Table.getAllSelectedCells(n.jodit.editor).forEach(function (e) {
                                        return e.innerHTML = ""
                                    });
                                    break;
                                case"bin":
                                    i.parentNode && i.parentNode.removeChild(i);
                                    break;
                                case"binrow":
                                    a.Table.removeRow(i, o.parentNode.rowIndex);
                                    break;
                                case"bincolumn":
                                    a.Table.removeColumn(i, o.cellIndex);
                                    break;
                                case"addcolumnafter":
                                case"addcolumnbefore":
                                    a.Table.appendColumn(i, o.cellIndex, "addcolumnafter" === e);
                                    break;
                                case"addrowafter":
                                case"addrowbefore":
                                    a.Table.appendRow(i, o.parentNode, "addrowafter" === e)
                            }
                        }
                        return !1
                    }
                }, o.options.useTableProcessor ? (o.events.on(n.jodit.ownerWindow, "mouseup touchend", function () {
                    if ((n.__selectMode || n.__drag) && (n.__selectMode = !1, n.jodit.unlock()), n.__resizerHandler && n.__drag) {
                        if (n.__drag = !1, n.__resizerHandler.classList.remove("jodit_table_resizer-moved"), null === n.__wholeTable) {
                            var e = [];
                            a.Table.setColumnWidthByDelta(n.__workTable, a.Table.formalCoordinate(n.__workTable, n.__workCell, !0)[1], n.__resizerDelta, !0, e);
                            var i = a.Dom.next(n.__workCell, t.isCell, n.__workCell.parentNode);
                            a.Table.setColumnWidthByDelta(n.__workTable, a.Table.formalCoordinate(n.__workTable, i)[1], -n.__resizerDelta, !1, e)
                        } else {
                            var s = n.__workTable.offsetWidth,
                                l = r.getContentWidth(n.__workTable.parentNode, n.jodit.editorWindow);
                            if (!1 === n.__wholeTable) n.__workTable.style.width = (s + n.__resizerDelta) / l * 100 + "%"; else {
                                var c = parseInt(n.jodit.editorWindow.getComputedStyle(n.__workTable).marginLeft || "0", 10);
                                n.__workTable.style.width = (s - n.__resizerDelta) / l * 100 + "%", n.__workTable.style.marginLeft = (c + n.__resizerDelta) / l * 100 + "%"
                            }
                        }
                        o.setEditorValue(), o.selection.focus()
                    }
                }).on(n.jodit.ownerWindow, "scroll", function () {
                    if (n.__drag) {
                        var e = a.Dom.up(n.__workCell, function (e) {
                            return e && "TABLE" === e.nodeName
                        }, o.editor);
                        if (e) {
                            var t = e.getBoundingClientRect();
                            n.__resizerHandler.style.top = t.top + "px"
                        }
                    }
                }).on(n.jodit.ownerWindow, "mousedown touchend", function (e) {
                    var t = a.Dom.closest(e.originalEvent.target, "TD|TH", n.jodit.editor), o = null;
                    t instanceof n.jodit.editorWindow.HTMLTableCellElement && (o = a.Dom.closest(t, "table", n.jodit.editor)), o ? n.__deSelectAll(o, t instanceof n.jodit.editorWindow.HTMLTableCellElement && t) : n.__deSelectAll()
                }).on("afterGetValueFromEditor", function (e) {
                    e.value = e.value.replace(RegExp("([s]*)" + i.JODIT_SELECTED_CELL_MARKER + '="1"', "g"), "")
                }).on("change afterCommand afterSetMode", function () {
                    r.$$("table", o.editor).forEach(function (e) {
                        e[n.__key] || n.observe(e)
                    })
                }).on("beforeSetMode", function () {
                    a.Table.getAllSelectedCells(o.editor).forEach(function (e) {
                        a.Table.restoreSelection(e), a.Table.normalizeTable(a.Dom.closest(e, "table", o.editor))
                    })
                }).on("keydown", function (e) {
                    e.which === i.KEY_TAB && r.$$("table", o.editor).forEach(function (e) {
                        n.__deSelectAll(e)
                    })
                }).on("beforeCommand", n.onExecCommand.bind(n)), n) : n
            }

            return n(t, e), t.prototype.__deSelectAll = function (e, t) {
                var o = a.Table.getAllSelectedCells(e || this.jodit.editor);
                o.length && o.forEach(function (e) {
                    t && t === e || a.Table.restoreSelection(e)
                })
            }, t.isCell = function (e) {
                return !!e && /^TD|TH$/i.test(e.nodeName)
            }, t.prototype.__setWorkCell = function (e, t) {
                void 0 === t && (t = null), this.__wholeTable = t, this.__workCell = e, this.__workTable = a.Dom.up(e, function (e) {
                    return e && "TABLE" === e.nodeName
                }, this.jodit.editor)
            }, t.prototype.__calcResizerPosition = function (e, o, n, s) {
                void 0 === n && (n = 0), void 0 === s && (s = 0);
                var l = r.offset(o, this.jodit, this.jodit.editorDocument);
                if (n > i.NEARBY && l.width - n > i.NEARBY) this.__resizerHandler.style.display = "none"; else {
                    var c = r.offset(e, this.jodit, this.jodit.editorDocument);
                    if (this.__resizerHandler.style.left = (n > i.NEARBY ? l.left + l.width : l.left) + s + "px", this.__resizerHandler.style.height = c.height + "px", this.__resizerHandler.style.top = c.top + "px", this.__resizerHandler.style.display = "block", n > i.NEARBY) this.__setWorkCell(o, !!a.Dom.next(o, t.isCell, o.parentNode) && null); else {
                        var d = a.Dom.prev(o, t.isCell, o.parentNode);
                        d ? this.__setWorkCell(d) : this.__setWorkCell(o, !0)
                    }
                }
            }, t.prototype.observe = function (e) {
                var o = this;
                e[this.__key] = !0;
                var n;
                this.jodit.events.on(e, "mousedown touchstart", function (i) {
                    if (!o.jodit.options.readonly) {
                        var r = a.Dom.up(i.target, t.isCell, e);
                        r && r instanceof o.jodit.editorWindow.HTMLElement && (r.firstChild || r.appendChild(o.jodit.editorDocument.createElement("br")), n = r, a.Table.addSelected(r), o.__selectMode = !0)
                    }
                }).on(e, "mouseleave", function (e) {
                    o.__resizerHandler && o.__resizerHandler !== e.relatedTarget && (o.__resizerHandler.style.display = "none")
                }).on(e, "mousemove touchmove", function (i) {
                    if (!o.jodit.options.readonly && !o.__drag && !o.jodit.isLockedNotBy(o.__key)) {
                        var s = a.Dom.up(i.target, t.isCell, e);
                        if (s) if (o.__selectMode) {
                            s !== n && (o.jodit.lock(o.__key), o.jodit.editorWindow.getSelection().removeAllRanges(), i.preventDefault && i.preventDefault()), o.__deSelectAll(e);
                            for (var l = a.Table.getSelectedBound(e, [s, n]), c = a.Table.formalMatrix(e), d = l[0][0]; l[1][0] >= d; d += 1) for (var u = l[0][1]; l[1][1] >= u; u += 1) a.Table.addSelected(c[d][u]);
                            var p = c[l[1][0]][l[1][1]], f = c[l[0][0]][l[0][1]];
                            o.jodit.events.fire("showPopup", e, function () {
                                var e = r.offset(f, o.jodit, o.jodit.editorDocument),
                                    t = r.offset(p, o.jodit, o.jodit.editorDocument);
                                return {
                                    left: e.left,
                                    top: e.top,
                                    width: t.left - e.left + t.width,
                                    height: t.top - e.top + t.height
                                }
                            }), i.stopPropagation()
                        } else o.__calcResizerPosition(e, s, i.offsetX)
                    }
                }), this.__addResizer()
            }, t
        }(a.Component)
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.Cookie = function () {
            function e() {
            }

            return e.prototype.set = function (e, t, o) {
                var n, i;
                o ? (i = new Date, i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3), n = "; expires=" + i.toUTCString()) : n = "", document.cookie = e + "=" + t + n + "; path=/"
            }, e.prototype.get = function (e) {
                var t, o, n = e + "=", i = document.cookie.split(";");
                for (t = 0; i.length > t; t += 1) {
                    for (o = i[t]; " " === o.charAt(0);) o = o.substring(1, o.length);
                    if (0 === o.indexOf(n)) return o.substring(n.length, o.length)
                }
                return null
            }, e.prototype.remove = function (e) {
                this.set(e, "", -1)
            }, e
        }()
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }(), i = this && this.__assign || Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; n > o; o++) {
                t = arguments[o];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = o(6), s = o(4), a = o(7), l = o(1), c = o(0), d = o(5), u = o(15), p = o(9), f = o(14), h = o(2),
            m = o(11), v = o(16);
        l.Config.prototype.filebrowser = {
            filter: function (e, t) {
                return t = t.toLowerCase(), "string" == typeof e ? -1 !== e.toLowerCase().indexOf(t) : "string" == typeof e.name ? -1 !== e.name.toLowerCase().indexOf(t) : "string" != typeof e.file || -1 !== e.file.toLowerCase().indexOf(t)
            },
            sortBy: "changed",
            sort: function (e, t, o) {
                var n, i, r = function (e, t) {
                    return t > e ? -1 : e > t ? 1 : 0
                };
                if ("string" == typeof e) return r(e.toLowerCase(), t.toLowerCase());
                if (void 0 === e[o] || "name" === o) return "string" == typeof e.name ? r(e.name.toLowerCase(), t.name.toLowerCase()) : "string" == typeof e.file ? r(e.file.toLowerCase(), t.file.toLowerCase()) : 0;
                switch (o) {
                    case"changed":
                        return n = new Date(e.changed), i = new Date(t.changed), i.getTime() - n.getTime();
                    case"size":
                        return c.humanSizeToBytes(e.size) - c.humanSizeToBytes(t.size)
                }
                return 0
            },
            editImage: !0,
            preview: !0,
            showPreviewNavigation: !0,
            showSelectButtonInPreview: !0,
            contextMenu: !0,
            howLongShowMsg: 3e3,
            createNewFolder: !0,
            deleteFolder: !0,
            moveFolder: !0,
            moveFile: !0,
            showFoldersPanel: !0,
            width: 763,
            height: 400,
            buttons: ["filebrowser.upload", "filebrowser.remove", "filebrowser.update", "filebrowser.select", "filebrowser.edit", "|", "filebrowser.tiles", "filebrowser.list", "|", "filebrowser.filter", "|", "filebrowser.sort"],
            view: null,
            isSuccess: function (e) {
                return e.success
            },
            getMessage: function (e) {
                return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join(" ") : ""
            },
            showFileName: !0,
            showFileSize: !0,
            showFileChangeTime: !0,
            getThumbTemplate: function (e, t, o) {
                var n, i = "", r = "", s = "" + (new Date).getTime();
                void 0 !== e.file && (i = e.file, r = e.file), e.thumb && (r = e.thumb), n = '<div class="' + _ + '-info">\n            ' + (this.options.showFileName ? '<span class="' + _ + '-info-filename">' + i + "</span>" : "") + "\n            " + (this.options.showFileSize && e.size ? '<span class="' + _ + '-info-filesize">' + e.size + "</span>" : "") + "\n            " + (this.options.showFileChangeTime && e.changed ? '<span class="' + _ + '-info-filechanged">' + e.changed + "</span>" : "") + "\n        </div>";
                var a = c.urlNormalize(t.baseurl + t.path + i);
                return '<a data-is-file="' + (e.isImage ? 0 : 1) + '" draggable="true" class="' + _ + '" href="' + a + '" data-source="' + o + '" data-path="' + c.pathNormalize(t.path ? t.path + "/" : "/") + '" data-name="' + i + '" title="' + i + '" data-url="' + a + '">\n            <img data-is-file="' + (e.isImage ? 0 : 1) + '" data-src="' + a + '" src="' + c.urlNormalize(t.baseurl + t.path + r) + "?_tmst=" + s + '" alt="' + i + '"/>\n            ' + (this.options.showFileName || this.options.showFileSize && e.size || this.options.showFileChangeTime && e.changed ? n : "") + "\n        </a>"
            },
            ajax: {
                url: "",
                async: !0,
                data: {},
                cache: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                method: "POST",
                processData: !0,
                dataType: "json",
                headers: {},
                prepareData: function (e) {
                    return e
                },
                process: function (e) {
                    return e
                }
            },
            create: {data: {action: "folderCreate"}},
            getLocalFileByUrl: {data: {action: "getLocalFileByUrl"}},
            resize: {data: {action: "imageResize"}},
            crop: {data: {action: "imageCrop"}},
            move: {data: {action: "fileMove"}},
            fileRemove: {data: {action: "fileRemove"}},
            folderRemove: {data: {action: "folderRemove"}},
            items: {data: {action: "files"}},
            folder: {data: {action: "folders"}},
            permissions: {data: {action: "permissions"}},
            uploader: null
        }, l.Config.prototype.controls.filebrowser = {
            upload: {
                icon: "plus", exec: function () {
                }, isDisable: function (e) {
                    return !e.canI("FileUpload")
                }, getContent: function (e, t) {
                    var o = c.dom('<span class="jodit_upload_button">' + d.ToolbarIcon.getIcon("plus") + '<input type="file" accept="' + (e.buffer.fileBrowserOnlyImages ? "image/*" : "*") + '" tabindex="-1" dir="auto" multiple=""/></span>', e.ownerDocument),
                        n = o.querySelector("input");
                    return e.events.on("updateToolbar", function () {
                        t && t.isDisable && (t.isDisable(e, t) ? n.setAttribute("disabled", "disabled") : n.removeAttribute("disabled"))
                    }).fire("bindUploader.filebrowser", o), o
                }
            }, remove: {
                icon: "bin", isDisable: function (e) {
                    return 0 === e.getActiveElements().length || !e.canI("FileRemove")
                }, exec: function (e) {
                    e.events.fire("fileRemove.filebrowser")
                }
            }, update: {
                exec: function (e) {
                    e.events.fire("update.filebrowser")
                }
            }, select: {
                icon: "check", isDisable: function (e) {
                    return 0 === e.getActiveElements().length
                }, exec: function (e) {
                    e.events.fire("select.filebrowser")
                }
            }, edit: {
                icon: "pencil", isDisable: function (e) {
                    var t = e.getActiveElements();
                    return 1 !== t.length || "1" === t[0].getAttribute("data-is-file") || !(e.canI("ImageCrop") || e.canI("ImageResize"))
                }, exec: function (e) {
                    e.events.fire("edit.filebrowser")
                }
            }, tiles: {
                icon: "th", isActive: function (e) {
                    return "tiles" === e.buffer.fileBrowserView
                }, exec: function (e) {
                    e.events.fire("view.filebrowser", "tiles")
                }
            }, list: {
                icon: "th-list", isActive: function (e) {
                    return "list" === e.buffer.fileBrowserView
                }, exec: function (e) {
                    e.events.fire("view.filebrowser", "list")
                }
            }, filter: {
                isInput: !0, getContent: function (e) {
                    var t = c.dom('<input class="jodit_input" placeholder="' + e.i18n("Filter") + '"/>', e.ownerDocument);
                    return e.events.on(t, "keydown mousedown", c.debounce(function () {
                        e.events.fire("filter.filebrowser", t.value)
                    }, e.defaultTimeout)), t
                }
            }, sort: {
                isInput: !0, getContent: function (e) {
                    var t = c.dom('<select class="jodit_input"><option value="changed">' + e.i18n("Sort by changed") + '</option><option value="name">' + e.i18n("Sort by name") + '</option><option value="size">' + e.i18n("Sort by size") + "</option></select>", e.ownerDocument);
                    return e.events.on("sort.filebrowser", function (e) {
                        t.value !== e && (t.value = e)
                    }).on(t, "change", function () {
                        e.events.fire("sort.filebrowser", t.value)
                    }), t
                }
            }
        };
        var g = "default", _ = "jodit_filebrowser_files_item";
        t.FileBrowser = function (e) {
            function t(t, o) {
                void 0 === o && (o = {});
                var n = e.call(this, t) || this;
                n.currentPath = "", n.currentSource = g, n.currentBaseUrl = "", n.storage = new v.Storage(new v.localStorageProvider), n.__currentPermissions = null, n.editorDocument = document, n.editorWindow = window, n.view = "tiles", n.sortBy = "changed", n.dragger = !1, n.filterWord = "", n.getPathByUrl = function (e, t, o) {
                    var i = n;
                    n.options.getLocalFileByUrl.data.url = e, n.send("getLocalFileByUrl", function (e) {
                        i.options.isSuccess(e) ? t(e.data.path, e.data.name, e.data.source) : o(Error(n.options.getMessage(e)))
                    }, function (e) {
                        o(e)
                    })
                }, n.loadItems = function (e, t) {
                    var o = n;
                    return o.options.items.data.path = e, o.options.items.data.source = t, o.files.classList.add("active"), o.files.appendChild(o.loader.cloneNode(!0)), o.send("items", function (e) {
                        var t = o.options.items.process;
                        if (t || (t = n.options.ajax.process), t) {
                            var i = t.call(o, e);
                            o.generateItemsBox(i.data.sources), o.someSelectedWasChanged()
                        }
                    }, function (e) {
                        a.Alert(e.message), o.errorHandler(e)
                    })
                }, n.create = function (e, t, o) {
                    return n.options.create.data.source = o, n.options.create.data.path = t, n.options.create.data.name = e, n.send("create", function (e) {
                        n.options.isSuccess(e) ? (n.currentPath = t, n.currentSource = o, n.loadTree(t, o)) : n.status(n.options.getMessage(e))
                    }, function (e) {
                        n.status(e.message)
                    })
                }, n.move = function (e, t, o) {
                    return n.options.move.data.from = e, n.options.move.data.path = t, n.options.move.data.source = o, n.send("move", function (e) {
                        n.options.isSuccess(e) ? n.loadTree(t, o) : n.status(n.options.getMessage(e))
                    }, function (e) {
                        n.status(e.message)
                    })
                }, n.close = function () {
                    n.dialog.close()
                }, n.onlyImages = !1, n.open = function (e, t) {
                    return void 0 === t && (t = !1), n.onlyImages = t, n.buffer.fileBrowserOnlyImages = t, new Promise(function (t) {
                        if (!n.options.items.url) throw Error("Need set options.filebrowser.ajax.url");
                        var o = 0;
                        n.events.off(n.files, "dblclick").on(n.files, "dblclick", n.onSelect(e), "a").on(n.files, "touchstart", function () {
                            var t = (new Date).getTime();
                            h.EMULATE_DBLCLICK_TIMEOUT > t - o && n.onSelect(e)(), o = t
                        }, "a").off("select.filebrowser").on("select.filebrowser", n.onSelect(e));
                        var i = n.ownerDocument.createElement("div");
                        n.toolbar.build(n.options.buttons, i), n.dialog.dialogbox_header.classList.add("jodit_filebrowser_title_box"), n.dialog.open(n.browser, i), n.events.fire("sort.filebrowser", n.sortBy), n.loadTree(n.currentPath, n.currentSource).then(t)
                    })
                }, n.errorHandler = function (e) {
                    n.status(e instanceof Error ? n.i18n(e.message) : n.options.getMessage(e))
                }, n.uploadHandler = function () {
                    n.loadItems(n.currentPath, n.currentSource)
                }, n.openImageEditor = function (e, t, o, i, r, s) {
                    return n.getInstance("ImageEditor").open(e, function (e, a, l, c) {
                        void 0 === n.options[a.action] && (n.options[a.action] = {}), void 0 === n.options[a.action].data && (n.options[a.action].data = {action: a.action}), n.options[a.action].data.newname = e || t, n.options[a.action].data.box = a.box, n.options[a.action].data.path = o, n.options[a.action].data.name = t, n.options[a.action].data.source = i, n.send(a.action, function (e) {
                            n.options.isSuccess(e) ? (n.loadTree(n.currentPath, n.currentSource), l(), r && r()) : (c(Error(n.options.getMessage(e))), s && s(Error(n.options.getMessage(e))))
                        }, function (e) {
                            c(e), s && s(e)
                        })
                    })
                };
                var s = n, f = t ? t.ownerDocument : document, b = t ? t.editorDocument : f;
                t && (n.id = t.id), n.ownerDocument = f, n.ownerWindow = t ? t.ownerWindow : window, n.progress_bar = t ? t.progress_bar : document.createElement("div"), n.editor = t ? t.editor : document.createElement("div"), n.events = t ? t.events : new m.EventsNative(f), n.buffer = t ? t.buffer : {}, s.options = new l.OptionsDefault(c.extend(!0, {}, r.Jodit.defaultOptions.filebrowser, o, s.jodit ? s.jodit.options.filebrowser : void 0)), s.dialog = new a.Dialog(t || s, {fullsizeButton: !0}), s.toolbar = new d.ToolbarCollection(s), s.loader = c.dom('<div class="jodit_filebrowser_loader"><i class="jodit_icon-loader"></i></div>', f), s.browser = c.dom('<div class="jodit_filebrowser non-selected">' + (s.options.showFoldersPanel ? '<div class="jodit_filebrowser_tree"></div>' : "") + '<div class="jodit_filebrowser_files"></div><div class="jodit_filebrowser_status"></div></div>', f), s.status_line = s.browser.querySelector(".jodit_filebrowser_status"), s.tree = s.browser.querySelector(".jodit_filebrowser_tree"), s.files = s.browser.querySelector(".jodit_filebrowser_files"), s.events.on("view.filebrowser", function (e) {
                    e !== s.view && (s.view = e, s.buffer.fileBrowserView = e, s.files.classList.remove("jodit_filebrowser_files_view-tiles"), s.files.classList.remove("jodit_filebrowser_files_view-list"), s.files.classList.add("jodit_filebrowser_files_view-" + s.view), s.storage.set("jodit_filebrowser_view", s.view))
                }).on("sort.filebrowser", function (e) {
                    e !== s.sortBy && (s.sortBy = e, n.storage.set("jodit_filebrowser_sortby", s.sortBy), s.loadItems(s.currentPath, s.currentSource))
                }).on("filter.filebrowser", function (e) {
                    e !== s.filterWord && (s.filterWord = e, s.loadItems(s.currentPath, s.currentSource))
                }).on("fileRemove.filebrowser", function () {
                    n.getActiveElements().length && a.Confirm(s.i18n("Are you shure?"), "", function (e) {
                        if (e) {
                            var t = [];
                            s.getActiveElements().forEach(function (e) {
                                t.push(s.fileRemove(s.currentPath, e.getAttribute("data-name") || "", e.getAttribute("data-source") || ""))
                            }), Promise.all(t).then(function () {
                                s.someSelectedWasChanged(), s.loadTree(s.currentPath, s.currentSource)
                            })
                        }
                    })
                }).on("edit.filebrowser", function () {
                    var e = n.getActiveElements();
                    1 === e.length && s.openImageEditor(e[0].getAttribute("href") || "", e[0].getAttribute("data-name") || "", e[0].getAttribute("data-path") || "", e[0].getAttribute("data-source") || "")
                }).on("update.filebrowser", function () {
                    s.loadTree(n.currentPath, n.currentSource)
                }).on(s.tree, "click", function (e) {
                    var t = this.parentNode, o = t.getAttribute("data-path") || "";
                    return a.Confirm(s.i18n("Are you shure?"), "", function (e) {
                        e && s.folderRemove(o, t.getAttribute("data-name") || "", t.getAttribute("data-source") || "").then(function () {
                            s.loadTree(s.currentPath, s.currentSource)
                        })
                    }), e.stopImmediatePropagation(), !1
                }, "a>i.remove").on(s.tree, "click", function () {
                    var e = this;
                    this.classList.contains("addfolder") ? a.Promt(s.i18n("Enter Directory name"), s.i18n("Create directory"), function (t) {
                        s.create(t, e.getAttribute("data-path") || "", e.getAttribute("data-source") || "")
                    }, s.i18n("type name")) : (s.currentPath = this.getAttribute("data-path") || "", s.currentSource = this.getAttribute("data-source") || "", s.loadTree(s.currentPath, s.currentSource))
                }, "a").on(n.tree, "dragstart", function () {
                    s.dragger = this
                }, "a").on(n.tree, "drop", function () {
                    if (s.options.moveFolder && s.dragger) {
                        var e = s.dragger.getAttribute("data-path") || "";
                        if (!s.options.moveFolder && s.dragger.classList.contains("jodit_filebrowser_tree_item")) return !1;
                        if (s.dragger.classList.contains(_) && (e += s.dragger.getAttribute("data-name"), !s.options.moveFile)) return !1;
                        s.move(e, this.getAttribute("data-path") || "", this.getAttribute("data-source") || "")
                    }
                }, "a");
                var y = new u.ContextMenu(n.jodit || n);
                if (s.events.on(s.files, "contextmenu", function (e) {
                    var t = this;
                    if (s.options.contextMenu) {
                        var o = this;
                        return y.show(e.pageX, e.pageY, [!("1" === o.getAttribute("data-is-file") || !s.options.editImage || !s.canI("ImageResize") && !s.canI("ImageCrop")) && {
                            icon: "pencil",
                            title: "Edit",
                            exec: function () {
                                s.openImageEditor(o.getAttribute("href") || "", o.getAttribute("data-name") || "", o.getAttribute("data-path") || "", o.getAttribute("data-source") || "")
                            }
                        }, !!s.canI("FileRemove") && {
                            icon: "bin", title: "Delete", exec: function () {
                                s.fileRemove(s.currentPath, o.getAttribute("data-name") || "", o.getAttribute("data-source") || ""), s.someSelectedWasChanged(), s.loadTree(s.currentPath, s.currentSource)
                            }
                        }, !!s.options.preview && {
                            icon: "eye", title: "Preview", exec: function () {
                                var e = o.getAttribute("href") || "", n = new a.Dialog(s),
                                    i = c.dom('<div class="jodit_filebrowser_preview"><i class="jodit_icon-loader"></i></div>', f),
                                    r = f.createElement("img"), l = function () {
                                        var a = function () {
                                            if (t.removeEventListener("load", a), i.innerHTML = "", s.options.showPreviewNavigation) {
                                                var u = c.dom('<a href="javascript:void(0)" class="jodit_filebrowser_preview_navigation jodit_filebrowser_preview_navigation-next">' + d.ToolbarIcon.getIcon("angle-right") + "</a>", f),
                                                    p = c.dom('<a href="javascript:void(0)" class="jodit_filebrowser_preview_navigation jodit_filebrowser_preview_navigation-prev">' + d.ToolbarIcon.getIcon("angle-left") + "</a>", f);
                                                o.previousSibling && o.previousSibling.classList && o.previousSibling.classList.contains(_) && i.appendChild(p), o.nextSibling && o.nextSibling.classList && o.nextSibling.classList.contains(_) && i.appendChild(u), s.events.on([u, p], "click", function () {
                                                    o = this.classList.contains("jodit_filebrowser_preview_navigation-next") ? o.nextSibling : o.previousSibling, i.innerHTML = '<i class="jodit_icon-loader"></i>', e = o.getAttribute("href") || "", r.setAttribute("src", e), l()
                                                })
                                            }
                                            i.appendChild(r), n.setPosition()
                                        };
                                        r.addEventListener("load", a), r.complete && a()
                                    };
                                l(), r.setAttribute("src", e), n.setContent(i), n.open()
                            }
                        }, {
                            icon: "upload", title: "Download", exec: function () {
                                var e = o.getAttribute("href");
                                e && s.ownerWindow.open(e)
                            }
                        }], s.dialog.getZIndex() + 1), e.stopPropagation(), e.preventDefault(), !1
                    }
                }, "a").on(s.files, "click", function (e) {
                    c.ctrlKey(e) || (n.getActiveElements().forEach(function (e) {
                        e.classList.remove("active")
                    }), s.someSelectedWasChanged())
                }).on(s.files, "click", function (e) {
                    return c.ctrlKey(e) || s.getActiveElements().forEach(function (e) {
                        e.classList.remove("active")
                    }), this.classList.toggle("active"), s.someSelectedWasChanged(), e.stopPropagation(), !1
                }, "a").on(s.dialog.dialogbox, "drop", function (e) {
                    return e.preventDefault()
                }), n.dialog.setSize(n.options.width, n.options.height), n.options.getLocalFileByUrl = c.extend(!0, {}, n.options.ajax, n.options.getLocalFileByUrl), n.options.crop = c.extend(!0, {}, n.options.ajax, n.options.crop), n.options.resize = c.extend(!0, {}, n.options.ajax, n.options.resize), n.options.create = c.extend(!0, {}, n.options.ajax, n.options.create), n.options.move = c.extend(!0, {}, n.options.ajax, n.options.move), n.options.fileRemove = c.extend(!0, {}, n.options.ajax, n.options.fileRemove), n.options.folderRemove = c.extend(!0, {}, n.options.ajax, n.options.folderRemove), n.options.folder = c.extend(!0, {}, n.options.ajax, n.options.folder), n.options.items = c.extend(!0, {}, n.options.ajax, n.options.items), n.options.permissions = c.extend(!0, {}, n.options.ajax, n.options.permissions), n.view = n.storage.get("jodit_filebrowser_view") && null === n.options.view ? "list" === n.storage.get("jodit_filebrowser_view") ? "list" : "tiles" : "list" === n.options.view ? "list" : "tiles", n.files.classList.add("jodit_filebrowser_files_view-" + n.view), s.buffer.fileBrowserView = n.view, n.sortBy = -1 !== ["changed", "name", "size"].indexOf(n.options.sortBy) ? n.options.sortBy : "changed", n.storage.get("jodit_filebrowser_sortby") && (n.sortBy = -1 !== ["changed", "name", "size"].indexOf(n.storage.get("jodit_filebrowser_sortby") || "") ? n.storage.get("jodit_filebrowser_sortby") || "" : "changed"), n.currentBaseUrl = c.$$("base", b).length ? c.$$("base", b)[0].getAttribute("href") || "" : location.protocol + "//" + location.host, void 0 !== r.Jodit.modules.Uploader) {
                    var w = c.extend(!0, {}, r.Jodit.defaultOptions.uploader, s.options.uploader, n.jodit && n.jodit.options && null !== n.jodit.options.uploader ? i({}, n.jodit.options.uploader) : {});
                    n.uploader = new p.Uploader(n.jodit || n, w), n.uploader.setPath(n.currentPath), n.uploader.setSource(n.currentSource), n.uploader.bind(n.browser, n.uploadHandler, n.errorHandler), n.events.on("bindUploader.filebrowser", function (e) {
                        n.uploader.bind(e, n.uploadHandler, n.errorHandler)
                    })
                }
                return n
            }

            return n(t, e), t.prototype.canI = function (e) {
                return null !== this.__currentPermissions && (void 0 === this.__currentPermissions["allow" + e] || this.__currentPermissions["allow" + e])
            }, t.prototype.i18n = function (e) {
                return this.jodit ? this.jodit.i18n(e) : r.Jodit.prototype.i18n(e)
            }, t.prototype.getRealMode = function () {
                return h.MODE_WYSIWYG
            }, t.prototype.isOpened = function () {
                return this.dialog.isOpened() && "none" !== this.browser.style.display
            }, t.prototype.status = function (e, t) {
                var o = this;
                clearTimeout(this.statustimer), this.status_line.classList.remove("success"), this.status_line.classList.add("active"), this.status_line.innerHTML = e, t && this.status_line.classList.add("success"), this.statustimer = window.setTimeout(function () {
                    o.status_line.classList.remove("active")
                }, this.options.howLongShowMsg)
            }, t.prototype.generateFolderTree = function (e) {
                var t = this, o = [];
                c.each(e, function (e, n) {
                    e && e !== g && o.push('<div class="jodit_filebrowser_source_title">' + e + "</div>"), n.folders.forEach(function (i) {
                        var r = '<a draggable="draggable" class="jodit_filebrowser_tree_item" href="javascript:void(0)" data-path="' + c.pathNormalize(n.path + i) + '/" data-source="' + e + '"><span>' + i + "</span>";
                        t.options.deleteFolder && ".." !== i && "." !== i && (r += '<i class="remove" data-path="' + c.pathNormalize(n.path + i + "/") + '">&times;</i>'), r += "</a>", o.push(r)
                    }), t.options.createNewFolder && t.canI("FolderCreate") && o.push('<a class="jodit_button addfolder" href="javascript:void(0)" data-path="' + c.pathNormalize(n.path + name) + '/" data-source="' + e + '">' + d.ToolbarIcon.getIcon("plus") + " " + t.i18n("Add folder") + "</a>")
                }), this.tree.innerHTML = o.join("")
            }, t.prototype.generateItemsBox = function (e) {
                var t = this, o = [];
                c.each(e, function (e, n) {
                    e && e !== g && o.push('<div class="jodit_filebrowser_source_title">' + e + (n.path ? " - " + n.path : "") + "</div>"), n.files && n.files.length ? ("function" == typeof t.options.sort && n.files.sort(function (e, o) {
                        return t.options.sort(e, o, t.sortBy, t.jodit)
                    }), n.files.forEach(function (i) {
                        (void 0 === t.options.filter || t.options.filter(i, t.filterWord)) && (t.onlyImages && void 0 !== i.isImage && !i.isImage || o.push(t.options.getThumbTemplate.call(t, i, n, e)))
                    })) : o.push("<div>" + t.i18n("There are no files") + "</div>")
                }), this.files.innerHTML = o.join("")
            }, t.prototype.getActiveElements = function () {
                return c.$$(":scope>a.active", this.files)
            }, t.prototype.someSelectedWasChanged = function () {
                this.events.fire("changeSelection")
            }, t.prototype.send = function (e, t, o) {
                var n = c.extend(!0, {}, this.options.ajax, void 0 !== this.options[e] ? this.options[e] : this.options.ajax);
                return n.prepareData && (n.data = n.prepareData.call(this, n.data)), new f.Ajax(this.jodit || this, n).send().then(t).catch(o)
            }, t.prototype.loadPermissions = function (e, t) {
                var o = this, n = this;
                return n.options.permissions.data.path = e, n.options.permissions.data.source = t, n.options.permissions.url ? n.send("permissions", function (e) {
                    var t = n.options.permissions.process;
                    if (t || (t = o.options.ajax.process), t) {
                        var i = t.call(n, e);
                        i.data.permissions && (o.__currentPermissions = i.data.permissions)
                    }
                }, function (e) {
                    a.Alert(e.message), n.errorHandler(e)
                }) : Promise.resolve()
            }, t.prototype.loadTree = function (e, t) {
                var o = this;
                return this.loadPermissions(e, t).then(function () {
                    var n = o;
                    n.options.folder.data.path = e, n.options.folder.data.source = t, n.uploader && (n.uploader.setPath(e), n.uploader.setSource(t));
                    var i = [];
                    return n.options.showFoldersPanel && (n.options.folder.url ? (n.tree.classList.add("active"), n.tree.innerHTML = "", n.tree.appendChild(n.loader.cloneNode(!0)), i.push(o.send("folder", function (e) {
                        var t = n.options.folder.process;
                        if (t || (t = o.options.ajax.process), t) {
                            var i = t.call(n, e);
                            n.generateFolderTree(i.data.sources)
                        }
                    }, function () {
                        n.errorHandler(Error(n.jodit.i18n("Error on load folders")))
                    }))) : n.tree.classList.remove("active")), i.push(o.loadItems(e, t)), Promise.all(i)
                })
            }, t.prototype.fileRemove = function (e, t, o) {
                var n = this;
                return this.options.fileRemove.data.path = e, this.options.fileRemove.data.name = t, this.options.fileRemove.data.source = o, this.send("fileRemove", function (e) {
                    n.options.remove.process && (e = n.options.remove.process.call(n, e)), n.options.isSuccess(e) ? (n.someSelectedWasChanged(), n.status(n.options.getMessage(e), !0)) : n.status(n.options.getMessage(e))
                }, function (e) {
                    n.status(e.message)
                })
            }, t.prototype.folderRemove = function (e, t, o) {
                var n = this;
                return this.options.folderRemove.data.path = e, this.options.folderRemove.data.name = t, this.options.folderRemove.data.source = o, this.send("folderRemove", function (e) {
                    n.options.remove.process && (e = n.options.remove.process.call(n, e)), n.options.isSuccess(e) ? (n.someSelectedWasChanged(), n.status(n.options.getMessage(e), !0)) : n.status(n.options.getMessage(e))
                }, function (e) {
                    n.status(e.message)
                })
            }, t.prototype.onSelect = function (e) {
                var t = this;
                return function () {
                    var o = t.getActiveElements();
                    if (o.length) {
                        var n = [];
                        o.forEach(function (e) {
                            var t = e.getAttribute("data-url");
                            t && n.push(t)
                        }), t.close(), "function" == typeof e && e({baseurl: "", files: n})
                    }
                    return !1
                }
            }, Object.defineProperty(t.prototype, "defaultTimeout", {
                get: function () {
                    return this.jodit ? this.jodit.defaultTimeout : r.Jodit.defaultOptions.observer.timeout
                }, enumerable: !0, configurable: !0
            }), t
        }(s.Component)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(4), r = o(1), s = o(0), a = o(5), l = o(7), c = o(6);
        r.Config.prototype.imageeditor = {
            closeAfterSave: !1,
            width: "85%",
            height: "85%",
            crop: !0,
            resize: !0,
            resizeUseRatio: !0,
            resizeMinWidth: 20,
            resizeMinHeight: 20,
            cropUseRatio: !0,
            cropDefaultWidth: "70%",
            cropDefaultHeight: "70%"
        }, t.ImageEditor = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.resizeUseRatio = !0, o.cropUseRatio = !0, o.clicked = !1, o.activeTab = "resize", o.hide = function () {
                    o.dialog.close()
                }, o.calcValueByPercent = function (e, t) {
                    var o, n = "" + t, i = parseFloat("" + e);
                    return (o = /^[\-+]?[0-9]+(px)?$/.exec(n)) ? parseInt(n, 10) : (o = /^([\-+]?[0-9.]+)%$/.exec(n), o ? Math.round(i * (parseFloat(o[1]) / 100)) : i || 0)
                }, o.calcCropBox = function () {
                    var e = .8 * o.crop_box.parentNode.offsetWidth, t = .8 * o.crop_box.parentNode.offsetHeight, n = e,
                        i = t;
                    e > o.naturalWidth && t > o.naturalHeight ? (n = o.naturalWidth, i = o.naturalHeight) : o.ratio > e / t ? (n = e, i = o.naturalHeight * (e / o.naturalWidth)) : (n = o.naturalWidth * (t / o.naturalHeight), i = t), s.css(o.crop_box, {
                        width: n,
                        height: i
                    })
                }, o.showCrop = function () {
                    o.cropImage && (o.calcCropBox(), o.new_w = o.calcValueByPercent(o.cropImage.offsetWidth || o.image.offsetWidth, o.options.cropDefaultWidth), o.new_h = o.cropUseRatio ? o.new_w / o.ratio : o.calcValueByPercent(o.cropImage.offsetHeight || o.image.offsetHeight, o.options.cropDefaultHeight), s.css(o.cropHandler, {
                        backgroundImage: "url(" + o.cropImage.getAttribute("src") + ")",
                        width: o.new_w,
                        height: o.new_h,
                        left: (o.cropImage.offsetWidth || o.image.offsetWidth) / 2 - o.new_w / 2,
                        top: (o.cropImage.offsetHeight || o.image.offsetHeight) / 2 - o.new_h / 2
                    }), o.jodit.events.fire(o.cropHandler, "updatesize"))
                }, o.cropBox = {x: 0, y: 0, w: 0, h: 0}, o.updateCropBox = function () {
                    if (o.cropImage) {
                        var e = o.cropImage.offsetWidth / o.naturalWidth,
                            t = o.cropImage.offsetHeight / o.naturalHeight;
                        o.cropBox.x = s.css(o.cropHandler, "left") / e, o.cropBox.y = s.css(o.cropHandler, "top") / t, o.cropBox.w = o.cropHandler.offsetWidth / e, o.cropBox.h = o.cropHandler.offsetHeight / t, o.sizes.innerText = o.cropBox.w.toFixed(0) + "x" + o.cropBox.h.toFixed(0)
                    }
                }, o.resizeBox = {w: 0, h: 0}, o.updateResizeBox = function () {
                    o.resizeBox.w = o.image.offsetWidth || o.naturalWidth, o.resizeBox.h = o.image.offsetHeight || o.naturalHeight
                }, o.open = function (e, t) {
                    return new Promise(function (n) {
                        var i = (new Date).getTime();
                        o.image = o.jodit.ownerDocument.createElement("img"), s.$$("img,.jodit_icon-loader", o.resize_box).forEach(function (e) {
                            e.parentNode && e.parentNode.removeChild(e)
                        }), s.$$("img,.jodit_icon-loader", o.crop_box).forEach(function (e) {
                            e.parentNode && e.parentNode.removeChild(e)
                        }), s.css(o.cropHandler, "background", "transparent"), o.onSave = t, o.resize_box.appendChild(s.dom('<i class="jodit_icon-loader"></i>', o.jodit.ownerDocument)), o.crop_box.appendChild(s.dom('<i class="jodit_icon-loader"></i>', o.jodit.ownerDocument)), /\?/.test(e) ? e += "&_tst=" + i : e += "?_tst=" + i, o.image.setAttribute("src", e), o.dialog.open();
                        var r = function () {
                            o.image.removeEventListener("load", r), o.naturalWidth = o.image.naturalWidth, o.naturalHeight = o.image.naturalHeight, o.widthInput.value = "" + o.naturalWidth, o.heightInput.value = "" + o.naturalHeight, o.ratio = o.naturalWidth / o.naturalHeight, o.resize_box.appendChild(o.image), o.cropImage = o.image.cloneNode(), o.crop_box.appendChild(o.cropImage), s.$$(".jodit_icon-loader", o.editor).forEach(function (e) {
                                e.parentNode && e.parentNode.removeChild(e)
                            }), "crop" === o.activeTab && o.showCrop(), o.jodit.events.fire(o.resizeHandler, "updatesize"), o.jodit.events.fire(o.cropHandler, "updatesize"), o.dialog.setPosition(), o.jodit.events.fire("afterImageEditor"), n(o.dialog)
                        };
                        o.image.addEventListener("load", r), o.image.complete && r()
                    })
                }, o.setHandlers = function () {
                    var e = o;
                    e.jodit.events.on([e.editor.querySelector(".jodit_bottomright"), e.cropHandler], "mousedown", function (t) {
                        e.target = t.target || t.srcElement, t.preventDefault(), t.stopImmediatePropagation(), e.clicked = !0, e.start_x = t.clientX, e.start_y = t.clientY, "crop" === e.activeTab ? (e.top_x = s.css(e.cropHandler, "left"), e.top_y = s.css(e.cropHandler, "top"), e.width = e.cropHandler.offsetWidth, e.height = e.cropHandler.offsetHeight) : (e.width = e.image.offsetWidth, e.height = e.image.offsetHeight)
                    }).off(o.jodit.ownerWindow, ".jodit_image_editor" + e.jodit.id).on(o.jodit.ownerWindow, "mousemove.jodit_image_editor" + e.jodit.id, s.throttle(function (t) {
                        e.clicked && (e.diff_x = t.clientX - e.start_x, e.diff_y = t.clientY - e.start_y, "resize" === e.activeTab && e.resizeUseRatio || "crop" === e.activeTab && e.cropUseRatio ? e.diff_x ? (e.new_w = e.width + e.diff_x, e.new_h = Math.round(e.new_w / e.ratio)) : (e.new_h = e.height + e.diff_y, e.new_w = Math.round(e.new_h * e.ratio)) : (e.new_w = e.width + e.diff_x, e.new_h = e.height + e.diff_y), "resize" === e.activeTab ? (e.new_w > e.options.resizeMinWidth && (s.css(e.image, "width", e.new_w + "px"), e.widthInput.value = "" + e.new_w), e.new_h > e.options.resizeMinHeight && (s.css(e.image, "height", e.new_h + "px"), e.heightInput.value = "" + e.new_h), o.jodit.events.fire(e.resizeHandler, "updatesize")) : (e.target !== e.cropHandler ? (e.top_x + e.new_w > e.cropImage.offsetWidth && (e.new_w = e.cropImage.offsetWidth - e.top_x), e.top_y + e.new_h > e.cropImage.offsetHeight && (e.new_h = e.cropImage.offsetHeight - e.top_y), s.css(e.cropHandler, {
                            width: e.new_w,
                            height: e.new_h
                        })) : (e.top_x + e.diff_x + e.cropHandler.offsetWidth > e.cropImage.offsetWidth && (e.diff_x = e.cropImage.offsetWidth - e.top_x - e.cropHandler.offsetWidth), s.css(e.cropHandler, "left", e.top_x + e.diff_x), e.top_y + e.diff_y + e.cropHandler.offsetHeight > e.cropImage.offsetHeight && (e.diff_y = e.cropImage.offsetHeight - e.top_y - e.cropHandler.offsetHeight), s.css(e.cropHandler, "top", e.top_y + e.diff_y)), o.jodit.events.fire(e.cropHandler, "updatesize")), t.stopImmediatePropagation())
                    }, 5)).on(o.jodit.ownerWindow, "resize.jodit_image_editor" + e.jodit.id, function () {
                        o.jodit.events.fire(e.resizeHandler, "updatesize"), e.showCrop(), o.jodit.events.fire(e.cropHandler, "updatesize")
                    }).on(o.jodit.ownerWindow, "mouseup.jodit_image_editor" + e.jodit.id + " keydown.jodit_image_editor" + e.jodit.id, function (t) {
                        e.clicked && (e.clicked = !1, t.stopImmediatePropagation())
                    }), s.$$(".jodit_btn_group", e.editor).forEach(function (t) {
                        var o = t.querySelector("input");
                        e.jodit.events.on(t, "click change", function () {
                            var n = this;
                            s.$$("button", t).forEach(function (e) {
                                return e.classList.remove("active")
                            }), n.classList.add("active"), o.checked = !!n.getAttribute("data-yes"), e.jodit.events.fire(o, "change")
                        }, "button")
                    }), e.jodit.events.on(o.editor, "click", function () {
                        s.$$(".jodit_image_editor_slider,.jodit_image_editor_area", e.editor).forEach(function (e) {
                            return e.classList.remove("active")
                        });
                        var t = this.parentNode;
                        t.classList.add("active"), e.activeTab = t.getAttribute("data-area") || "";
                        var o = e.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_" + e.activeTab);
                        o && o.classList.add("active"), "crop" === e.activeTab && e.showCrop()
                    }, ".jodit_image_editor_slider-title").on(e.widthInput, "change mousedown keydown", s.debounce(function () {
                        var t, n = parseInt(e.widthInput.value, 10);
                        n > e.jodit.options.resizer.min_width && (s.css(e.image, "width", n + "px"), e.resizeUseRatio && (t = Math.round(n / e.ratio)) > e.jodit.options.resizer.min_height && (s.css(e.image, "height", t + "px"), e.heightInput.value = "" + t)), o.jodit.events.fire(e.resizeHandler, "updatesize")
                    }, 200)).on(e.heightInput, "change mousedown keydown", s.debounce(function () {
                        var t, n = parseInt(e.heightInput.value, 10);
                        n > e.jodit.options.resizer.min_height && (s.css(e.image, "height", n + "px"), e.resizeUseRatio && (t = Math.round(n * e.ratio)) > e.jodit.options.resizer.min_width && (s.css(e.image, "width", t + "px"), e.widthInput.value = "" + t)), o.jodit.events.fire(e.resizeHandler, "updatesize")
                    }, 200));
                    var t = e.editor.querySelector(".jodit_image_editor_keep_spect_ratio");
                    t && t.addEventListener("change", function () {
                        e.resizeUseRatio = t.checked
                    });
                    var n = e.editor.querySelector(".jodit_image_editor_keep_spect_ratio_crop");
                    n && n.addEventListener("change", function () {
                        e.cropUseRatio = n.checked
                    }), e.jodit.events.on(e.resizeHandler, "updatesize", function () {
                        s.css(e.resizeHandler, {
                            top: 0,
                            left: 0,
                            width: (e.image.offsetWidth || e.naturalWidth) + "px",
                            height: (e.image.offsetHeight || e.naturalHeight) + "px"
                        }), o.updateResizeBox()
                    }).on(e.cropHandler, "updatesize", function () {
                        if (e.cropImage) {
                            var t = s.css(e.cropHandler, "left"), o = s.css(e.cropHandler, "top"),
                                n = e.cropHandler.offsetWidth, i = e.cropHandler.offsetHeight;
                            0 > t && (t = 0), 0 > o && (o = 0), t + n > e.cropImage.offsetWidth && (n = e.cropImage.offsetWidth - t, e.cropUseRatio && (i = n / e.ratio)), o + i > e.cropImage.offsetHeight && (i = e.cropImage.offsetHeight - o, e.cropUseRatio && (n = i * e.ratio)), s.css(e.cropHandler, {
                                width: n,
                                height: i,
                                left: t,
                                top: o,
                                backgroundPosition: -t - 1 + "px " + (-o - 1) + "px",
                                backgroundSize: e.cropImage.offsetWidth + "px " + e.cropImage.offsetHeight + "px"
                            }), e.updateCropBox()
                        }
                    }), e.buttons.forEach(function (t) {
                        t.addEventListener("mousedown", function (e) {
                            e.stopImmediatePropagation()
                        }), t.addEventListener("click", function () {
                            var o = {action: e.activeTab, box: "resize" === e.activeTab ? e.resizeBox : e.cropBox};
                            switch (t.getAttribute("data-action")) {
                                case"saveas":
                                    l.Promt(e.jodit.i18n("Enter new name"), e.jodit.i18n("Save in new file"), function (t) {
                                        if (!s.trim(t)) return l.Alert(e.jodit.i18n("The name should not be empty")), !1;
                                        e.onSave(t, o, e.hide, function (e) {
                                            l.Alert(e)
                                        })
                                    });
                                    break;
                                case"save":
                                    e.onSave(void 0, o, e.hide, function (e) {
                                        l.Alert(e)
                                    });
                                    break;
                                case"reset":
                                    "resize" === e.activeTab ? (s.css(e.image, {
                                        width: null,
                                        height: null
                                    }), e.widthInput.value = "" + e.naturalWidth, e.heightInput.value = "" + e.naturalHeight, e.jodit.events.fire(e.resizeHandler, "updatesize")) : e.showCrop()
                            }
                        })
                    })
                }, o.options = t && t.options ? t.options.imageeditor : c.Jodit.defaultOptions.imageeditor, o.resizeUseRatio = o.options.resizeUseRatio, o.cropUseRatio = o.options.cropUseRatio, o.buttons = [s.dom('<button data-action="reset" type="button" class="jodit_btn">' + a.ToolbarIcon.getIcon("update") + " " + t.i18n("Reset") + "</button>", t.ownerDocument), s.dom('<button data-action="save" type="button" class="jodit_btn jodit_btn_success">' + a.ToolbarIcon.getIcon("save") + " " + t.i18n("Save") + "</button>", t.ownerDocument), s.dom('<button data-action="saveas" type="button" class="jodit_btn jodit_btn_success">' + a.ToolbarIcon.getIcon("save") + " " + t.i18n("Save as ...") + "</button>", t.ownerDocument)], o.activeTab = o.options.resize ? "resize" : "crop", o.editor = s.dom('<form class="jodit_image_editor jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-3-4">' + (o.options.resize ? '<div class="jodit_image_editor_area jodit_image_editor_area_resize active">                                <div class="jodit_image_editor_box"></div>                                <div class="jodit_image_editor_resizer">                                    <i class="jodit_bottomright"></i>                                </div>                            </div>' : "") + (o.options.crop ? '<div class="jodit_image_editor_area jodit_image_editor_area_crop' + (o.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_box">                                    <div class="jodit_image_editor_croper">                                        <i class="jodit_bottomright"></i>                                        <i class="jodit_sizes"></i>                                    </div>                                </div>                            </div>' : "") + '</div><div class="jodit_col-lg-1-4">' + (o.options.resize ? '<div data-area="resize" class="jodit_image_editor_slider active">                                <div class="jodit_image_editor_slider-title">' + a.ToolbarIcon.getIcon("resize") + t.i18n("Resize") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_width">' + t.i18n("Width") + '</label>                                        <input type="number" class="jodit_image_editor_width"/>                                    </div>                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_height">' + t.i18n("Height") + '</label>                                        <input type="number" class="jodit_image_editor_height"/>                                    </div>                                    <div class="jodit_form_group">                                        <label>' + t.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (o.resizeUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio"/>                                            <button type="button"  data-yes="1" class="jodit_col6 jodit_btn jodit_btn_success ' + (o.resizeUseRatio ? "active" : "") + '">' + t.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn' + (o.resizeUseRatio ? "" : "active") + '">' + t.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + (o.options.crop ? '<div data-area="crop" class="jodit_image_editor_slider' + (o.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_slider-title">' + a.ToolbarIcon.getIcon("crop") + t.i18n("Crop") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label>' + t.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (o.cropUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio_crop"/>                                            <button type="button" data-yes="1" class="jodit_col6 jodit_btn jodit_btn_success ' + (o.cropUseRatio ? "active" : "") + '">' + t.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn ' + (o.cropUseRatio ? "" : "active") + '">' + t.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + "</div></div></form>", t.ownerDocument), o.widthInput = o.editor.querySelector(".jodit_image_editor_width"), o.heightInput = o.editor.querySelector(".jodit_image_editor_height"), o.resize_box = o.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_resize .jodit_image_editor_box"), o.crop_box = o.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box"), o.sizes = o.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_sizes"), o.resizeHandler = o.editor.querySelector(".jodit_image_editor_resizer"), o.cropHandler = o.editor.querySelector(".jodit_image_editor_croper"), o.dialog = new l.Dialog(t), o.dialog.setContent(o.editor), o.dialog.setSize(o.options.width, o.options.height), o.dialog.setTitle(o.buttons), o.setHandlers(), o
            }

            return n(t, e), t
        }(i.Component)
    }, function (e, t, o) {
        "use strict";

        function n(e) {
            e.events.on("keydown", function (t) {
                var o, n;
                if ((t.which === i.KEY_TAB || t.which === i.KEY_LEFT || t.which === i.KEY_RIGHT || t.which === i.KEY_UP || t.which === i.KEY_DOWN) && (o = e.selection.current(), n = r.Dom.up(o, function (e) {
                    return e && e.nodeName && /^td|th$/i.test(e.nodeName)
                }, e.editor))) {
                    var s = e.editorWindow.getSelection(),
                        a = s.rangeCount ? s.getRangeAt(0) : e.editorDocument.createRange();
                    if (t.which === i.KEY_TAB || o === n || (t.which !== i.KEY_LEFT && t.which !== i.KEY_UP || !(r.Dom.prev(o, function (e) {
                        return t.which === i.KEY_UP ? e && "BR" === e.nodeName : !!e
                    }, n) || t.which !== i.KEY_UP && o.nodeType === Node.TEXT_NODE && 0 !== a.startOffset)) && (t.which !== i.KEY_RIGHT && t.which !== i.KEY_DOWN || !(r.Dom.next(o, function (e) {
                        return t.which === i.KEY_DOWN ? e && "BR" === e.nodeName : !!e
                    }, n) || t.which !== i.KEY_DOWN && o.nodeType === Node.TEXT_NODE && o.nodeValue && a.startOffset !== o.nodeValue.length))) {
                        var l = r.Dom.up(n, function (e) {
                            return e && /^table$/i.test(e.nodeName)
                        }, e.editor), c = null;
                        switch (t.which) {
                            case i.KEY_TAB:
                            case i.KEY_LEFT:
                                var d = t.which === i.KEY_LEFT || t.shiftKey ? "prev" : "next";
                                (c = r.Dom[d](n, function (e) {
                                    return e && /^td|th$/i.test(e.tagName)
                                }, l)) || (r.Table.appendRow(l, "next" !== d && l.querySelector("tr"), "next" === d), c = r.Dom[d](n, function (t) {
                                    return t && r.Dom.isCell(t, e.editorWindow)
                                }, l));
                                break;
                            case i.KEY_UP:
                            case i.KEY_DOWN:
                                var u = 0, p = 0, f = r.Table.formalMatrix(l, function (e, t, o) {
                                    e === n && (u = t, p = o)
                                });
                                t.which === i.KEY_UP ? void 0 !== f[u - 1] && (c = f[u - 1][p]) : void 0 !== f[u + 1] && (c = f[u + 1][p])
                        }
                        if (c) {
                            if (c.firstChild) t.which === i.KEY_TAB ? e.selection.select(c, !0) : e.selection.setCursorIn(c, t.which === i.KEY_RIGHT || t.which === i.KEY_DOWN); else {
                                var h = e.editorDocument.createElement("br");
                                c.appendChild(h), e.selection.setCursorBefore(h)
                            }
                            return !1
                        }
                    }
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(2), r = o(12);
        t.tableKeyboardNavigation = n
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(0), s = o(12), a = o(2), l = o(2);
        i.Config.prototype.useSearch = !0, t.search = function (e) {
            function t(o) {
                var n = e.call(this, o) || this;
                if (n.template = '<div class="jodit_search"><div class="jodit_search_box"><div class="jodit_search_inputs"><input tabindex="0" class="jodit_search-query" placeholder="' + n.jodit.i18n("Search for") + '" type="text"/><input tabindex="0" class="jodit_search-replace" placeholder="' + n.jodit.i18n("Replace with") + '" type="text"/></div><div class="jodit_search_counts"><span>0/0</span></div><div class="jodit_search_buttons"><button tabindex="0" type="button" class="jodit_search_buttons-next">' + s.ToolbarIcon.getIcon("angle-down") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-prev">' + s.ToolbarIcon.getIcon("angle-up") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-cancel">' + s.ToolbarIcon.getIcon("cancel") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-replace">' + n.jodit.i18n("Replace") + "</button></div></div></div>", n.eachMap = function (e, t, o) {
                    s.Dom.findWithCurrent(e, function (e) {
                        return !!e && !0 === t(e)
                    }, n.jodit.editor, o ? "nextSibling" : "previousSibling", o ? "firstChild" : "lastChild")
                }, n.updateCounters = function () {
                    if (n.isOpened) {
                        n.counterBox.style.display = n.queryInput.value.length ? "inline-block" : "none";
                        var e = n.jodit.editorWindow.getSelection(),
                            t = e.rangeCount ? e.getRangeAt(0) : n.jodit.editorDocument.createRange(),
                            o = n.calcCounts(n.queryInput.value, t);
                        n.counterBox.innerText = o.join("/")
                    }
                }, n.calcCounts = function (e, t) {
                    void 0 === t && (t = !1);
                    for (var o = 0, i = 0, r = [], s = !1, a = n.jodit.editor.firstChild; a && e.length;) if (s = n.find(a, e, !0, 0, s || n.jodit.editorDocument.createRange())) {
                        if (n.boundAlreadyWas(s, r)) break;
                        r.push(s), a = s.startContainer, i += 1, t && n.boundAlreadyWas(t, [s]) && (o = i)
                    } else a = null;
                    return [o, i]
                }, n.findAndReplace = function (e, t) {
                    var o = n.jodit.editorWindow.getSelection(),
                        i = o.rangeCount ? o.getRangeAt(0) : n.jodit.editorDocument.createRange(),
                        r = n.find(e, t, !0, 0, i);
                    if (r && r.startContainer && r.endContainer) {
                        var s = n.jodit.editorDocument.createRange();
                        try {
                            if (r && r.startContainer && r.endContainer) {
                                s.setStart(r.startContainer, r.startOffset), s.setEnd(r.endContainer, r.endOffset), s.deleteContents();
                                var a = n.jodit.editorDocument.createTextNode(n.replaceInput.value);
                                s.insertNode(a), n.jodit.selection.select(a), n.tryScrollToElement(a)
                            }
                        } catch (e) {
                        }
                        return !0
                    }
                    return !1
                }, n.findAndSelect = function (e, t, o) {
                    var i = n.jodit.editorWindow.getSelection(),
                        r = i.rangeCount ? i.getRangeAt(0) : n.jodit.editorDocument.createRange(),
                        s = n.find(e, t, o, 0, r);
                    if (s && s.startContainer && s.endContainer) {
                        var a = n.jodit.editorDocument.createRange();
                        try {
                            a.setStart(s.startContainer, s.startOffset), a.setEnd(s.endContainer, s.endOffset), n.jodit.selection.selectRange(a)
                        } catch (e) {
                        }
                        return n.tryScrollToElement(s.startContainer), n.current = s.startContainer, n.updateCounters(), !0
                    }
                    return !1
                }, n.find = function (e, o, i, a, l) {
                    if (e && o.length) {
                        var c = "", d = {startContainer: null, startOffset: null, endContainer: null, endOffset: null};
                        if (n.eachMap(e, function (e) {
                            if (e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && e.nodeValue.length) {
                                var n = e.nodeValue;
                                i || e !== l.startContainer ? i && e === l.endContainer && (n = a ? n.substr(0, l.startOffset) : n.substr(l.endOffset)) : n = a ? n.substr(l.endOffset) : n.substr(0, l.startOffset);
                                var u = i ? c + n : n + c, p = t.findSomePartOfString(o, u, i);
                                if (!1 !== p) {
                                    var f = t.findSomePartOfString(o, n, i);
                                    !0 === f ? f = r.trim(o) : !1 === f && !0 === (f = t.findSomePartOfString(n, o, i)) && (f = r.trim(n));
                                    var h = t.getSomePartOfStringIndex(o, n, i) || 0;
                                    if ((i && !a || !i && a) && e.nodeValue.length - n.length > 0 && (h += e.nodeValue.length - n.length), null === d.startContainer && (d.startContainer = e, d.startOffset = h), !0 === p) return d.endContainer = e, d.endOffset = h, d.endOffset += f.length, !0;
                                    c = u
                                } else c = "", d = {
                                    startContainer: null,
                                    startOffset: null,
                                    endContainer: null,
                                    endOffset: null
                                }
                            } else s.Dom.isBlock(e) && "" !== c && (c = i ? c + " " : " " + c);
                            return !1
                        }, i), d.startContainer && d.endContainer) return d;
                        if (!a) return n.current = i ? n.jodit.editor.firstChild : n.jodit.editor.lastChild, n.find(n.current, o, i, a + 1, l)
                    }
                    return !1
                }, n.isOpened = !1, n.open = function (e) {
                    void 0 === e && (e = !1), n.isOpened || (n.searchBox.classList.add("jodit_search-active"), n.isOpened = !0), n.jodit.events.fire("hidePopup"), n.searchBox.classList.toggle("jodit_search-and-replace", e), n.current = n.jodit.selection.current(), n.selInfo = n.jodit.selection.save();
                    var t = "" + n.jodit.ownerWindow.getSelection();
                    t && (n.queryInput.value = t), n.updateCounters(), t ? n.queryInput.select() : n.queryInput.focus()
                }, n.selInfo = null, n.current = !1, n.close = function () {
                    n.isOpened && (n.selInfo && (n.jodit.selection.restore(n.selInfo), n.selInfo = null), n.searchBox.classList.remove("jodit_search-active"), n.isOpened = !1)
                }, o.options.useSearch) {
                    var i = n;
                    i.searchBox = r.dom(i.template, o.ownerDocument), i.queryInput = i.searchBox.querySelector("input.jodit_search-query"), i.replaceInput = i.searchBox.querySelector("input.jodit_search-replace"), i.closeButton = i.searchBox.querySelector(".jodit_search_buttons-cancel"), i.nextButton = i.searchBox.querySelector(".jodit_search_buttons-next"), i.prevButton = i.searchBox.querySelector(".jodit_search_buttons-prev"), i.replaceButton = i.searchBox.querySelector(".jodit_search_buttons-replace"), i.counterBox = i.searchBox.querySelector(".jodit_search_counts span"), o.events.on(i.closeButton, "click", n.close).on(i.queryInput, "mousedown", function () {
                        o.selection.isFocused() && (o.selection.removeMarkers(), i.selInfo = o.selection.save())
                    }).on(i.replaceButton, "click", function (e) {
                        i.findAndReplace(o.selection.current() || o.editor.firstChild, i.queryInput.value), n.updateCounters(), e.preventDefault(), e.stopImmediatePropagation()
                    }).on([i.nextButton, i.prevButton], "click", function (e) {
                        o.events.fire(i.nextButton === this ? "searchNext" : "searchPrevious"), e.preventDefault(), e.stopImmediatePropagation()
                    }).on(n.queryInput, "keydown", r.debounce(function (e) {
                        switch (e.which) {
                            case a.KEY_ENTER:
                                e.preventDefault(), e.stopImmediatePropagation(), o.events.fire("searchNext") && n.close();
                                break;
                            default:
                                n.updateCounters()
                        }
                    }, n.jodit.defaultTimeout)).on(n.jodit.container, "keydown", function (e) {
                        if (o.getRealMode() === l.MODE_WYSIWYG) switch (e.which) {
                            case a.KEY_ESC:
                                n.close();
                                break;
                            case a.KEY_F3:
                                i.queryInput.value && (o.events.fire(e.shiftKey ? "searchPrevious" : "searchNext"), e.preventDefault())
                        }
                    }).on("beforeSetMode", function () {
                        n.close()
                    }).on("afterInit", function () {
                        o.workplace.appendChild(n.searchBox)
                    }).on("keydown mousedown", function () {
                        n.selInfo && (o.selection.removeMarkers(), n.selInfo = null), n.isOpened && (n.current = n.jodit.selection.current(), n.updateCounters())
                    }).on("searchNext searchPrevious", function () {
                        return i.findAndSelect(o.selection.current() || o.editor.firstChild, i.queryInput.value, "searchNext" === o.events.current[o.events.current.length - 1])
                    }).on("search", function (e, t) {
                        void 0 === t && (t = !0), o.execCommand("search", e, t)
                    }), o.registerCommand("search", {
                        exec: function (e, t, n) {
                            return void 0 === n && (n = !0), i.findAndSelect(o.selection.current() || o.editor.firstChild, t, n), !1
                        }
                    }), o.registerCommand("openSearchDialog", {
                        exec: function () {
                            return i.open(), !1
                        }, hotkeys: "ctrl+f"
                    }), o.registerCommand("openReplaceDialog", {
                        exec: function () {
                            return o.options.readonly || i.open(!0), !1
                        }, hotkeys: "ctrl+h"
                    })
                }
                return n
            }

            return n(t, e), t.getSomePartOfStringIndex = function (e, t, o) {
                return void 0 === o && (o = !0), this.findSomePartOfString(e, t, o, !0)
            }, t.findSomePartOfString = function (e, t, o, n) {
                void 0 === o && (o = !0), void 0 === n && (n = !1), e = r.trim(e.toLowerCase().replace(a.SPACE_REG_EXP, " ")), t = t.toLowerCase();
                for (var i = o ? 0 : t.length - 1, s = o ? 0 : e.length - 1, l = null, c = o ? 1 : -1, d = [], u = 0; void 0 !== t[i]; i += c) {
                    var p = e[s] === t[i];
                    if (p || null !== l && a.SPACE_REG_EXP.test(t[i]) ? (null !== l && o || (l = i), d.push(t[i]), p && (u += 1, s += c)) : (l = null, d.length = 0, u = 0, s = o ? 0 : e.length - 1), u === e.length) return !n || l
                }
                return n ? null !== l && l : !!d.length && (o ? d.join("") : d.reverse().join(""))
            }, t.prototype.boundAlreadyWas = function (e, t) {
                return t.some(function (t) {
                    return t.startContainer === e.startContainer && t.endContainer === e.endContainer && t.startOffset === e.startOffset && t.endOffset === e.endOffset
                }, !1)
            }, t.prototype.tryScrollToElement = function (e) {
                var t = s.Dom.closest(e, function (e) {
                    return e && e.nodeType === Node.ELEMENT_NODE
                }, this.jodit.editor);
                t || (t = s.Dom.prev(e, function (e) {
                    return e && e.nodeType === Node.ELEMENT_NODE
                }, this.jodit.editor)), t && t !== this.jodit.editor && t.scrollIntoView()
            }, t
        }(s.Component)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(0), r = o(4), s = o(1), a = o(2);
        s.Config.prototype.toolbarSticky = !0, s.Config.prototype.toolbarDisableStickyForMobile = !0, s.Config.prototype.toolbarStickyOffset = 0, t.sticky = function (e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.isToolbarSticked = !1, o.createDummy = function (e) {
                    o.dummyBox || (o.dummyBox = o.jodit.ownerDocument.createElement("div"), o.dummyBox.classList.add("jodit_sticky-dummy_toolbar"), o.jodit.container.insertBefore(o.dummyBox, e))
                }, o.addSticky = function (e) {
                    o.isToolbarSticked || (o.createDummy(e), o.jodit.container.classList.add("jodit_sticky"), o.isToolbarSticked = !0), i.css(e, {
                        top: o.jodit.options.toolbarStickyOffset,
                        width: o.jodit.container.offsetWidth
                    }), i.css(o.dummyBox, {height: e.offsetHeight})
                }, o.removeSticky = function (e) {
                    o.isToolbarSticked && (i.css(e, {
                        width: "",
                        top: ""
                    }), o.jodit.container.classList.remove("jodit_sticky"), o.isToolbarSticked = !1)
                }, t.events.on("afterInit", function () {
                    t.events.on(t.ownerWindow, "scroll wheel mousewheel resize", function () {
                        var e = t.ownerWindow.pageYOffset || t.ownerDocument.documentElement.scrollTop,
                            n = i.offset(t.container, t, t.ownerDocument, !0),
                            r = t.getMode() === a.MODE_WYSIWYG && e + t.options.toolbarStickyOffset > n.top && n.top + n.height > e + t.options.toolbarStickyOffset && !(t.options.toolbarDisableStickyForMobile && o.isMobile());
                        t.options.toolbarSticky && t.options.toolbar && (r ? o.addSticky(t.toolbar.container) : o.removeSticky(t.toolbar.container)), t.events.fire("toggleSticky", r)
                    })
                }), o
            }

            return n(t, e), t.prototype.isMobile = function () {
                return this.jodit && this.jodit.options && this.jodit.container && this.jodit.options.sizeSM >= this.jodit.container.offsetWidth
            }, t
        }(r.Component)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(1), r = o(8), s = o(0), a = o(2);
        i.Config.prototype.showCharsCounter = !0, i.Config.prototype.showWordsCounter = !0, t.stat = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.calc = s.throttle(function () {
                    var e = t.jodit.getEditorText();
                    t.jodit.options.showCharsCounter && (t.charCounter.innerText = t.jodit.i18n("Chars: %d", e.replace(a.SPACE_REG_EXP, "").length)), t.jodit.options.showWordsCounter && (t.wordCounter.innerText = t.jodit.i18n("Words: %d", e.replace(a.INVISIBLE_SPACE_REG_EXP, "").split(a.SPACE_REG_EXP).filter(function (e) {
                        return e.length
                    }).length))
                }, t.jodit.defaultTimeout), t
            }

            return n(t, e), t.prototype.afterInit = function () {
                this.jodit.options.showCharsCounter && (this.charCounter = this.jodit.ownerDocument.createElement("span"), this.jodit.statusbar.append(this.charCounter, !0)), this.jodit.options.showWordsCounter && (this.wordCounter = this.jodit.ownerDocument.createElement("span"), this.jodit.statusbar.append(this.wordCounter, !0)), this.jodit.events.on("change", this.calc), this.calc()
            }, t
        }(r.Plugin)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }(), i = this && this.__assign || Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; n > o; o++) {
                t = arguments[o];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = o(1), s = o(8), a = o(0), l = o(3), c = o(5), d = o(2), u = o(15);
        r.Config.prototype.controls.selectall = {
            icon: "select-all",
            command: "selectall",
            tooltip: "Select all"
        }, r.Config.prototype.showXPathInStatusbar = !0, t.xpath = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onContext = function (e, o) {
                    return t.menu || (t.menu = new u.ContextMenu(t.jodit)), t.menu.show(o.clientX, o.clientY, [{
                        icon: "bin",
                        title: e === t.jodit.editor ? "Clear" : "Remove",
                        exec: function () {
                            e !== t.jodit.editor ? e.parentNode && e.parentNode.removeChild(e) : t.jodit.value = "", t.jodit.setEditorValue()
                        }
                    }, {
                        icon: "select-all", title: "Select", exec: function () {
                            t.jodit.selection.select(e)
                        }
                    }]), !1
                }, t.onSelectPath = function (e, o) {
                    t.jodit.selection.focus();
                    var n = o.target.getAttribute("data-path") || "/";
                    if ("/" === n) return t.jodit.execCommand("selectall"), !1;
                    try {
                        var i = t.jodit.editorDocument.evaluate(n, t.jodit.editor, null, XPathResult.ANY_TYPE, null).iterateNext();
                        if (i) return t.jodit.selection.select(i), !1
                    } catch (e) {
                    }
                    return t.jodit.selection.select(e), !1
                }, t.tpl = function (e, o, n, i) {
                    var r = a.dom('<li><a role="button" data-path="' + o + '" href="javascript:void(0)" title="' + i + '" tabindex="-1">' + n + "</a></li>", t.jodit.ownerDocument),
                        s = r.firstChild;
                    return t.jodit.events.on(s, "click", t.onSelectPath.bind(t, e)).on(s, "contextmenu", t.onContext.bind(t, e)), r
                }, t.appendSelectAll = function () {
                    var e = new c.ToolbarButton(t.jodit, i({name: "selectall"}, t.jodit.options.controls.selectall, {tooltip: ""}));
                    t.container.insertBefore(e.container, t.container.firstChild)
                }, t.calcPathImd = function () {
                    var e = t.jodit.selection.current(), o = 0;
                    t.container.innerHTML = d.INVISIBLE_SPACE, e && l.Dom.up(e, function (e) {
                        if (t.jodit.editor !== e && e.nodeType !== Node.TEXT_NODE) {
                            var n = e.nodeName.toLowerCase(),
                                i = a.getXPathByElement(e, t.jodit.editor).replace(/^\//, ""),
                                r = t.tpl(e, i, n, t.jodit.i18n("Select %s", n));
                            t.container.insertBefore(r, t.container.firstChild)
                        }
                        o += 1
                    }, t.jodit.editor), t.appendSelectAll()
                }, t.calcPath = a.debounce(t.calcPathImd, 2 * t.jodit.defaultTimeout), t
            }

            return n(t, e), t.prototype.afterInit = function () {
                var e = this;
                this.jodit.options.showXPathInStatusbar && (this.container = this.jodit.ownerDocument.createElement("ul"), this.container.classList.add("jodit_xpath"), this.jodit.statusbar.append(this.container), this.jodit.events.on("mouseup change keydown changeSelection", this.calcPath).on("afterSetMode afterInit", function () {
                    e.jodit.getRealMode() === d.MODE_WYSIWYG ? e.calcPath() : (e.container.innerHTML = d.INVISIBLE_SPACE, e.appendSelectAll())
                }), this.calcPath())
            }, t
        }(s.Plugin)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(8), r = o(0), s = o(2), a = o(3);
        t.DragAndDrop = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isFragmentFromEditor = !1, t.isCopyMode = !1, t.startDragPoint = {
                    x: 0,
                    y: 0
                }, t.draggable = null, t.onDragEnd = function () {
                    t.draggable && (t.draggable.parentNode && t.draggable.parentNode.removeChild(t.draggable), t.draggable = null), t.isCopyMode = !1
                }, t.onDrag = r.throttle(function (e) {
                    t.draggable && (t.draggable.parentNode || t.jodit.ownerDocument.body.appendChild(t.draggable), t.jodit.events.fire("hidePopup"), r.css(t.draggable, {
                        left: e.clientX + 20,
                        top: e.clientY + 20
                    }))
                }, 10), t.bufferRange = null, t.onDragStart = function (e) {
                    var o = e.target;
                    if (t.onDragEnd(), t.isFragmentFromEditor = a.Dom.isOrContains(t.jodit.editor, o, !0), t.isCopyMode = !t.isFragmentFromEditor || r.ctrlKey(e), t.isFragmentFromEditor) {
                        var n = t.jodit.editorWindow.getSelection(), i = n.rangeCount ? n.getRangeAt(0) : null;
                        i && (t.bufferRange = i.cloneRange())
                    } else t.bufferRange = null;
                    t.startDragPoint.x = e.clientX, t.startDragPoint.y = e.clientY, o.nodeType === Node.ELEMENT_NODE && o.matches(".jodit_filebrowser_files_item") && (o = o.querySelector("img")), "IMG" === o.nodeName && (t.draggable = o.cloneNode(!0), r.dataBind(t.draggable, "target", o), r.css(t.draggable, {
                        "z-index": 1e14,
                        position: "fixed",
                        display: "inlin-block",
                        left: t.startDragPoint.x,
                        top: t.startDragPoint.y,
                        width: o.offsetWidth,
                        height: o.offsetHeight
                    }))
                }, t.getDataTransfer = function (e) {
                    return e.dataTransfer
                }, t.getText = function (e) {
                    var o = t.getDataTransfer(e);
                    return o.getData(s.TEXT_HTML) || o.getData(s.TEXT_PLAIN)
                }, t.onDrop = function (e) {
                    if (!e.dataTransfer.files || !e.dataTransfer.files.length) {
                        if (!t.isFragmentFromEditor && !t.draggable) return t.jodit.events.fire("paste", e), e.preventDefault(), e.stopPropagation(), !1;
                        var o = t.jodit.editorWindow.getSelection(),
                            n = t.bufferRange || (o.rangeCount ? o.getRangeAt(0) : null), i = null;
                        if (!t.draggable && n) i = t.isCopyMode ? n.cloneContents() : n.extractContents(); else if (t.draggable) if (t.isCopyMode) {
                            var s = "1" === t.draggable.getAttribute("data-is-file") ? ["a", "href"] : ["img", "src"],
                                a = s[0], l = s[1];
                            i = t.jodit.editorDocument.createElement(a), i.setAttribute(l, t.draggable.getAttribute("data-src") || t.draggable.getAttribute("src") || ""), "a" === a && (i.innerText = i.getAttribute(l) || "")
                        } else i = r.dataBind(t.draggable, "target"); else t.getText(e) && (i = r.dom(t.getText(e), t.jodit.editorDocument));
                        o.removeAllRanges(), t.jodit.selection.insertCursorAtPoint(e.clientX, e.clientY), i && (t.jodit.selection.insertNode(i, !1, !1), n && i.firstChild && i.lastChild && (n.setStartBefore(i.firstChild), n.setEndAfter(i.lastChild), t.jodit.selection.selectRange(n), t.jodit.events.fire("synchro")), "IMG" === i.nodeName && t.jodit.events && t.jodit.events.fire("afterInsertImage", i)), e.preventDefault(), e.stopPropagation()
                    }
                    t.isFragmentFromEditor = !1
                }, t
            }

            return n(t, e), t.prototype.afterInit = function () {
                this.jodit.events.on(window, "dragover", this.onDrag).on([window, this.jodit.editorDocument, this.jodit.editor], "dragstart", this.onDragStart).on("drop", this.onDrop).on(window, "dragend drop mouseup", this.onDragEnd)
            }, t.prototype.beforeDestruct = function () {
                this.onDragEnd()
            }, t
        }(i.Plugin)
    }, function (e, t, o) {
        "use strict";
        var n = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            };
            return function (t, o) {
                function n() {
                    this.constructor = t
                }

                e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = o(8), r = o(7), s = o(2), a = o(0);
        t.pasteStorage = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.currentIndex = 0, t.paste = function () {
                    if (t.jodit.selection.focus(), t.jodit.selection.insertHTML(t.list[t.currentIndex]), 0 !== t.currentIndex) {
                        var e = t.list[0];
                        t.list[0] = t.list[t.currentIndex], t.list[t.currentIndex] = e
                    }
                    t.dialog.close(), t.jodit.setEditorValue()
                }, t.onKeyDown = function (e) {
                    var o = t.currentIndex;
                    if (-1 !== [s.KEY_UP, s.KEY_DOWN, s.KEY_ENTER].indexOf(e.which)) {
                        if (e.which === s.KEY_UP && (0 === o ? o = t.list.length - 1 : o -= 1), e.which === s.KEY_DOWN && (o === t.list.length - 1 ? o = 0 : o += 1), e.which === s.KEY_ENTER) return void t.paste();
                        o !== t.currentIndex && t.selectIndex(o), e.stopImmediatePropagation(), e.preventDefault()
                    }
                }, t.selectIndex = function (e) {
                    [].slice.call(t.listBox.childNodes).forEach(function (o, n) {
                        o.classList.remove("jodit_active"), e === n && (o.classList.add("jodit_active"), t.previewBox.innerHTML = t.list[e], o.focus())
                    }), t.currentIndex = e
                }, t.showDialog = function () {
                    2 > t.list.length || (t.dialog || t.createDialog(), t.listBox.innerHTML = "", t.previewBox.innerHTML = "", t.list.forEach(function (e, o) {
                        var n = t.jodit.ownerDocument.createElement("a");
                        n.innerText = o + 1 + ". " + e.replace(s.SPACE_REG_EXP, ""), n.addEventListener("keydown", t.onKeyDown), n.setAttribute("href", "javascript:void(0)"), n.setAttribute("data-index", "" + o), n.setAttribute("tab-index", "-1"), t.listBox.appendChild(n)
                    }), t.dialog.open(), setTimeout(function () {
                        t.selectIndex(0)
                    }, 100))
                }, t.list = [], t
            }

            return n(t, e), t.prototype.createDialog = function () {
                var e = this;
                this.dialog = new r.Dialog(this.jodit);
                var t = a.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + this.jodit.i18n("Paste") + "</span></a>", this.jodit.ownerDocument);
                t.addEventListener("click", this.paste);
                var o = a.dom('<a href="javascript:void(0)" style="float:right; margin-right: 10px;" class="jodit_button"><span>' + this.jodit.i18n("Cancel") + "</span></a>", this.jodit.ownerDocument);
                o.addEventListener("click", this.dialog.close), this.container = this.jodit.ownerDocument.createElement("div"), this.container.classList.add("jodit_paste_storage"), this.listBox = this.jodit.ownerDocument.createElement("div"), this.previewBox = this.jodit.ownerDocument.createElement("div"), this.container.appendChild(this.listBox), this.container.appendChild(this.previewBox), this.dialog.setTitle(this.jodit.i18n("Choose Content to Paste")), this.dialog.setContent(this.container), this.dialog.setFooter([t, o]), this.jodit.events.on(this.listBox, "click dblclick", function (t) {
                    var o = t.target;
                    return o && "A" === o.nodeName && o.hasAttribute("data-index") && e.selectIndex(parseInt(o.getAttribute("data-index") || "0", 10)), "dblclick" === t.type && e.paste(), !1
                }, "a")
            }, t.prototype.afterInit = function () {
                var e = this;
                this.jodit.events.on("afterCopy", function (t) {
                    -1 !== e.list.indexOf(t) && e.list.splice(e.list.indexOf(t), 1), e.list.unshift(t), e.list.length > 5 && (e.list.length = 5)
                }), this.jodit.registerCommand("showPasteStorage", {exec: this.showDialog, hotkeys: "ctrl+shift+v"})
            }, t
        }(i.Plugin)
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.de = o(71).default, t.en = o(72).default, t.fr = o(73).default, t.ru = o(74).default, t.ar = o(75).default
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            "Type something": "Bitte geben Sie einen Text ein",
            Advanced: "Fortgeschritten",
            "About Jodit": "Über Jodit",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "Freie Nicht-kommerzielle Version",
            "Jodit User's Guide": "Das Jodit Benutzerhandbuch",
            "contains detailed help for using": "beinhaltet ausführliche Informationen wie Sie den Editor verwenden können.",
            "For information about the license, please go to our website:": "Für Lizenz-Informationen, besuchen Sie bitte unsere Webseite:",
            "Buy full version": "Vollversion kaufen",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.",
            Anchor: "Anker",
            "Open in new tab": "In neuer Registerkarte öffnen",
            "Open editor in fullsize": "Editor in voller Größe öffnen",
            "Clear Formatting": "Formatierung löschen",
            "Fill color or set the text color": "Füllfarbe oder Textfarbe ändern",
            Redo: "Wiederholen",
            Undo: "Rückgängig machen",
            Bold: "Fett",
            Italic: "Kursiv",
            "Insert Unordered List": "Ungeordnete Liste einfügen",
            "Insert Ordered List": "Sortierte Liste einfügen",
            "Align Center": "Mittig ausrichten",
            "Align Justify": "Blocksatz",
            "Align Left": "Links ausrichten",
            "Align Right": "Rechts ausrichten",
            "Insert Horizontal Line": "Horizontale Linie einfügen",
            "Insert Image": "Bild einfügen",
            "Insert file": "Datei einfügen",
            "Insert youtube/vimeo video": "Youtube/vimeo Video einfügen",
            "Insert link": "Link einfügen",
            "Font size": "Schriftgröße",
            "Font family": "Schriftfamilie",
            "Insert format block": "Formatblock einfügen",
            Normal: "Normal",
            "Heading 1": "Überschrift 1",
            "Heading 2": "Überschrift 2",
            "Heading 3": "Überschrift 3",
            "Heading 4": "Überschrift 4",
            Quote: "Zitat",
            Code: "Code",
            Insert: "Einfügen",
            "Insert table": "Tabelle einfügen",
            "Decrease Indent": "Einzug verkleinern",
            "Increase Indent": "Einzug vergrößern",
            "Select Special Character": "Sonderzeichen auswählen",
            "Insert Special Character": "Sonderzeichen einfügen",
            "Paint format": "Format kopieren",
            "Change mode": "Änderungsmodus",
            Margins: "Ränder",
            top: "Oben",
            right: "Rechts",
            bottom: "Unten",
            left: "Links",
            Styles: "CSS Stiel",
            Classes: "CSS Klassen",
            Align: "Ausrichten",
            Right: "Rechts",
            Center: "Zentriert",
            Left: "Links",
            "--Not Set--": "Keine",
            Src: "Pfad",
            Title: "Titel",
            Alternative: "Alternativer Text",
            Link: "Link",
            "Open link in new tab": "Link in neuem Tab öffnen",
            Image: "Bild",
            file: "Datei",
            Advansed: "Erweitert",
            "Image properties": "Bildeigenschaften",
            Cancel: "Abbrechen",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Es scheint als dass Sie HTML-Text einfügen möchten",
            "Paste as HTML": "Als HTML einfügen?",
            Keep: "Original speichern",
            Clean: "Säubern",
            "Insert as Text": "Als Text einfügen",
            "Word Paste Detected": "InWord formatierter Text erkannt",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?",
            "Insert only Text": "Als Text einfügen",
            "File Browser": "Dateibrowser",
            "Error on load list": "Fehler beim Laden der Liste",
            "Error on load folders": "Fehler beim Laden der Ordner",
            "Are you shure?": "Sind Sie sicher?",
            "Enter Directory name": "Geben Sie den Verzeichnisnamen ein",
            "Create directory": "Verzeichnis erstellen",
            "type name": "Typname",
            "Drop image": "Bild hier hinziehen",
            "Drop file": "Datei löschen",
            "or click": "oder hier klicken",
            "Alternative text": "Alternativtext",
            Browse: "Auswählen",
            Upload: "Hochladen",
            Background: "Hintergrund",
            Text: "Text",
            Top: "Oben",
            Middle: "Mittig",
            Bottom: "Unten",
            "Insert column before": "Spalte einfügen vor",
            "Insert column after": "Spalte einfügen nach",
            "Insert row above": "Zeile einfügen oberhalb",
            "Insert row below": "Zeile unterhalb einfügen",
            "Delete table": "Tabelle löschen",
            "Delete row": "Zeile löschen",
            "Delete column": "Spalte löschen",
            "Empty cell": "Leere Zelle",
            Delete: "Löschen",
            "Strike through": "Durchschlagen",
            Underline: "Unterstreichen",
            Break: "Pause",
            "Search for": "Suche nach",
            "Replace with": "Ersetzen durch",
            Replace: "Ersetzen",
            Edit: "Bearbeiten",
            "Vertical align": "Vertikale Ausrichtung",
            "Horizontal align": "Horizontale Ausrichtung",
            Filter: "filter",
            "Sort by changed": "Sortieren nach geändert",
            "Sort by name": "Nach Name sortieren",
            "Sort by size": "Nach Größe sortiert",
            "Add folder": "Ordner hinzufügen",
            "Split vertical": "Split vertikal",
            "Split horizontal": "Split horizontally",
            Merge: "Verschmelzen",
            "Add column": "Spalte hinzufügen",
            "Add row": "Zeile hinzufügen",
            Border: "Rand",
            "Embed code": "Code einbetten",
            Update: "Aktualisieren",
            superscript: "hochgestellt",
            subscript: "Index",
            "Cut selection": "Auswahl ausschneid",
            Paste: "Einfügen",
            "Choose Content to Paste": "Wählen Sie Inhalt zum Einfügen",
            "Chars: %d": "Zeichen: %d",
            "Words: %d": "Wörter: %d",
            All: "Wählen Sie Alle aus",
            "Select %s": "Markieren: %s",
            "Select all": "Wählen Sie Alle aus",
            source: "HTML",
            bold: "Fett gedruckt",
            italic: "kursiv",
            brush: "Bürste",
            link: "Verknüpfung",
            undo: "rückgängig machen",
            redo: "wiederholen",
            table: "Tabelle",
            image: "Bild",
            eraser: "Radiergummi",
            paragraph: "Absatz",
            fontsize: "Schriftgröße",
            video: "Video",
            font: "Schriftart",
            about: "Über",
            print: "drucken",
            symbol: "Symbol",
            underline: "unterstreichen",
            strikethrough: "durchgestrichen",
            indent: "Einzug",
            outdent: "Aussenseiter",
            fullsize: "Vollgröße",
            shrink: "schrumpfen",
            copyformat: "Format kopierenт",
            hr: "die Linie",
            ul: "Liste von",
            ol: "Nummerierte Liste",
            cut: "Schnitt",
            selectall: "Wählen Sie Alle aus",
            "Open link": "Link öffnen",
            "Edit link": "Link bearbeiten",
            "No follow": "Nofollow-Attribut",
            Unlink: "Link entfernen",
            " URL": "URL",
            Reset: "Wiederherstellen",
            Save: "Speichern",
            "Save as ...": "Speichern als",
            Resize: "Ändern Sie die Größe",
            Crop: "Größe anpassen",
            Width: "Breite",
            Height: "Höhe",
            "Keep Aspect Ratio": "Halten Sie Proportionen",
            Yes: "Ja",
            No: "Nein",
            Remove: "Entfernen",
            Select: "Markieren",
            "You can only edit your own images. Download this image on the host?": "Sie können nur Ihre eigenen Bilder bearbeiten. Laden Sie dieses Bild auf dem Host herunter?",
            "The image has been successfully uploaded to the host!": "Das Bild wurde erfolgreich auf den Server hochgeladen!null"
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {"Type something": "Start writing..."}
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            "Type something": "Ecrivez ici",
            "About Jodit": "A propos de Jodit",
            "Jodit Editor": "Editeur Jodit",
            "Free Non-commercial Version": "Version gratuite, non commerciale",
            "Jodit User's Guide": "Guide de l'utilisateur",
            "contains detailed help for using": "Aide détaillée à l'utilisation",
            "For information about the license, please go to our website:": "Consulter la licence sur notre site web:",
            "Buy full version": "Acheter la version complète",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.",
            Anchor: "Ancre",
            "Open in new tab": "Ouvrir dans un nouvel onglet",
            "Open editor in fullsize": "Ouvrir l'éditeur en pleine page",
            "Clear Formatting": "Supprimer le formattage",
            "Fill color or set the text color": "Modifier la couleur du fond ou du texte",
            Redo: "Refaire",
            Undo: "Défaire",
            Bold: "Gras",
            Italic: "Italique",
            "Insert Unordered List": "Liste non ordonnée",
            "Insert Ordered List": "Liste ordonnée",
            "Align Center": "Centrer",
            "Align Justify": "Justifier",
            "Align Left": "Aligner à gauche ",
            "Align Right": "Aligner à droite",
            "Insert Horizontal Line": "Insérer une ligne horizontale",
            "Insert Image": "Insérer une image",
            "Insert file": "Insérer un fichier",
            "Insert youtube/vimeo video": "Insérer une vidéo",
            "Insert link": "Insérer un lien",
            "Font size": "Taille des caractères",
            "Font family": "Famille des caractères",
            "Insert format block": "Bloc formatté",
            Normal: "Normal",
            "Heading 1": "Titre 1",
            "Heading 2": "Titre 2",
            "Heading 3": "Titre 3",
            "Heading 4": "Titre 4",
            Quote: "Citation",
            Code: "Code",
            Insert: "Insérer",
            "Insert table": "Insérer un tableau",
            "Decrease Indent": "Diminuer le retrait",
            "Increase Indent": "Retrait plus",
            "Select Special Character": "Sélectionnez un caractère spécial",
            "Insert Special Character": "Insérer un caractère spécial",
            "Paint format": "Cloner le format",
            "Change mode": "Mode wysiwyg <-> code html",
            Margins: "Marges",
            top: "haut",
            right: "droite",
            bottom: "Bas",
            left: "gauche",
            Styles: "Styles",
            Classes: "Classes",
            Align: "Alignement",
            Right: "Droite",
            Center: "Centre",
            Left: "Gauche",
            "--Not Set--": "--Non disponible--",
            Src: "Source",
            Title: "Titre",
            Alternative: "Alternative",
            Filter: "Filtre",
            Link: "Lien",
            "Open link in new tab": "Ouvrir le lien dans un nouvel onglet",
            Image: "Image",
            file: "fichier",
            Advanced: "Avancé",
            "Image properties": "Propriétés de l'image",
            Cancel: "Effacer",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?",
            "Paste as HTML": "Coller en HTML?",
            Keep: "Sauvegarder l'original",
            Clean: "Nettoyer",
            "Insert as Text": "Coller en tant que texte",
            "Word Paste Detected": "C'est peut-être un fragment de Word ou Excel",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Le contenu que vous insérez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?",
            "Insert only Text": "Coller le texte seulement",
            "File Browser": "Explorateur de fichiers",
            "Error on load list": "Erreur de liste de chargement",
            "Error on load folders": "Erreur de dossier de chargement",
            "Are you shure?": "Etes-vous sûrs ?",
            "Enter Directory name": "Entrer le non de dossier",
            "Create directory": "Créer un dossier",
            "type name": "type de fichier",
            "Drop image": "Coller une image",
            "Drop file": "Déposer un fichier",
            "or click": "ou cliquer",
            "Alternative text": "Texte de remplacemement",
            Browse: "Chercher",
            Upload: "Charger",
            Background: "Arrière-plan",
            Text: "Texte",
            Top: "Haut",
            Middle: "Milieu",
            Bottom: "Bas",
            "Insert column before": "Insérer une colonne avant",
            "Insert column after": "Insérer une colonne après",
            "Insert row above": "Insérer une ligne en dessus",
            "Insert row below": "Insérer une ligne en dessous",
            "Delete table": "Supprimer le tableau",
            "Delete row": "Supprimer la ligne",
            "Delete column": "Supprimer la colonne",
            "Empty cell": "Vider la cellule",
            "Chars: %d": "Symboles: %d",
            "Words: %d": "Mots: %d",
            "Strike through": "Frapper à travers",
            Underline: "Souligner",
            superscript: "exposant",
            subscript: "indice",
            "Cut selection": "Couper la sélection",
            "Select all": "Tout sélectionner",
            Break: "Pause",
            "Search for": "Rechercher",
            "Replace with": "Remplacer par",
            Replace: "Remplacer",
            Paste: "Coller",
            "Choose Content to Paste": "Choisissez le contenu à coller",
            source: "la source",
            bold: "graisseux",
            italic: "italique",
            brush: "verser",
            link: "lien",
            undo: "abolir",
            redo: "prêt",
            table: "graphique",
            image: "Image",
            eraser: "la gommen",
            paragraph: "clause",
            fontsize: "taille de police",
            video: "Video",
            font: "police",
            about: "à propos de l'éditeur",
            print: "impression",
            symbol: "caractère",
            underline: "souligné",
            strikethrough: "barré",
            indent: "indentation",
            outdent: "indifférent",
            fullsize: "taille réelle",
            shrink: "taille conventionnelle",
            copyformat: "Format de copie",
            hr: "la ligne",
            ul: "Liste des",
            ol: "Liste numérotée",
            cut: "Couper",
            selectall: "Sélectionner tout",
            "Open link": "Ouvrir le lien",
            "Edit link": "Modifier le lien",
            "No follow": "Attribut Nofollow",
            Unlink: "Supprimer le lien",
            " URL": "URL",
            Reset: "Restaurer",
            Save: "Sauvegarder",
            "Save as ...": "Enregistrer sous",
            Resize: "Changer la taille",
            Crop: "Taille de garniture",
            Width: "Largeur",
            Height: "Hauteur",
            "Keep Aspect Ratio": "Garder les proportions",
            Yes: "Oui",
            No: "Non",
            Remove: "Supprimer",
            Select: "Mettre en évidence",
            "Select %s": "Mettre en évidence: %s",
            Update: "Mettre à jour",
            "Vertical align": "Alignement vertical",
            Merge: "aller",
            "Add column": "Ajouter une colonne",
            "Add row": "Ajouter une rangée",
            Delete: "Effacer",
            "Horizontal align": "Alignement horizontal",
            "Sort by changed": "Trier par modifié",
            "Sort by name": "Trier par nom",
            "Sort by size": "Classer par taille",
            "Add folder": "Ajouter le dossier",
            "You can only edit your own images. Download this image on the host?": "Vous ne pouvez éditer que vos propres images. Téléchargez cette image sur l'hôte?",
            "The image has been successfully uploaded to the host!": "L'image a été téléchargée avec succès sur le serveur!null"
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            "Type something": "Напишите что-либо",
            "About Jodit": "О Jodit",
            "Jodit Editor": "Редактор Jodit",
            "Free Non-commercial Version": "Версия для не коммерческого использования",
            "Jodit User's Guide": "Jodit Руководство пользователя",
            "contains detailed help for using": "содержит детальную информацию по использованию",
            "For information about the license, please go to our website:": "Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:",
            "Buy full version": "Купить полную версию",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.",
            Anchor: "Анкор",
            "Open in new tab": "Открывать ссылку в новой вкладке",
            "Open editor in fullsize": "Открыть редактор в полном размере",
            "Clear Formatting": "Очистить форматирование",
            "Fill color or set the text color": "Цвет заливки или цвет текста",
            Redo: "Повтор",
            Undo: "Отмена",
            Bold: "Жирный",
            Italic: "Наклонный",
            "Insert Unordered List": "Вставка маркированного списка",
            "Insert Ordered List": "Вставить нумерованный список",
            "Align Center": "Выровнять по центру",
            "Align Justify": "Выровнять по ширине",
            "Align Left": "Выровнять по левому краю",
            "Align Right": "Выровнять по правому краю",
            "Insert Horizontal Line": "Вставить горизонтальную линию",
            "Insert Image": "Вставить изображение",
            "Insert file": "Вставить файл",
            "Insert youtube/vimeo video": "Вставьте видео",
            "Insert link": "Вставить ссылку",
            "Font size": "Размер шрифта",
            "Font family": "Шрифт",
            "Insert format block": "Вставить блочный элемент",
            Normal: "Нормальный текст",
            "Heading 1": "Заголовок 1",
            "Heading 2": "Заголовок 2",
            "Heading 3": "Заголовок 3",
            "Heading 4": "Заголовок 4",
            Quote: "Цитата",
            Code: "Код",
            Insert: "Вставить",
            "Insert table": "Вставить таблицу",
            "Decrease Indent": "Уменьшить отступ",
            "Increase Indent": "Увеличить отступ",
            "Select Special Character": "Выберите специальный символ",
            "Insert Special Character": "Вставить специальный символ",
            "Paint format": "Формат краски",
            "Change mode": "Источник",
            Margins: "Отступы",
            top: "сверху",
            right: "справа",
            bottom: "снизу",
            left: "слева",
            Styles: "Стили",
            Classes: "Классы",
            Align: "Выравнивание",
            Right: "По правому краю",
            Center: "По центру",
            Left: "По левому краю",
            "--Not Set--": "--не устанавливать--",
            Src: "src",
            Title: "Заголовок",
            Alternative: "Альтернативный текст (alt)",
            Link: "Ссылка",
            "Open link in new tab": "Открывать ссылку в новом окне",
            Image: "Изображение",
            file: "Файл",
            Advanced: "Расширенные",
            "Image properties": "Свойства изображения",
            Cancel: "Отмена",
            Ok: "Ок",
            "Your code is similar to HTML. Keep as HTML?": "Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?",
            "Paste as HTML": "Вставить как HTML?",
            Keep: "Сохранить оригинал",
            Clean: "Почистить",
            "Insert as Text": "Вставить как текст",
            "Insert only Text": "Вставить только текст",
            "Word Paste Detected": "Возможно это фрагмент Word или Excel",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Контент который вы вставляете поступает из документа Microsoft Word / Excel. Вы хотите сохранить формат или очистить его?",
            "File Browser": "Браузер файлов",
            "Error on load list": "Ошибка при загрузке списка изображений",
            "Error on load folders": "Ошибка при загрузке списка директорий",
            "Are you shure?": "Вы уверены?",
            "Enter Directory name": "Введите название директории",
            "Create directory": "Создать директорию",
            "type name": "введите название",
            "Drop image": "Перетащите сюда изображение",
            "Drop file": "Перетащите сюда файл",
            "or click": "или нажмите",
            "Alternative text": "Альтернативный текст",
            Browse: "Сервер",
            Upload: "Загрузка",
            Background: "Фон",
            Text: "Текст",
            Top: " К верху",
            Middle: "По середине",
            Bottom: "К низу",
            "Insert column before": "Вставить столбец до",
            "Insert column after": "Вставить столбец после",
            "Insert row above": "Вставить ряд выше",
            "Insert row below": "Вставить ряд ниже",
            "Delete table": "Удалить таблицу",
            "Delete row": "Удалять ряд",
            "Delete column": "Удалить столбец",
            "Empty cell": "Отчистить ячейку",
            source: "HTML",
            bold: "жирный",
            italic: "курсив",
            brush: "заливка",
            link: "ссылка",
            undo: "отменить",
            redo: "повторить",
            table: "таблица",
            image: "изображение",
            eraser: "очистить",
            paragraph: "параграф",
            fontsize: "размер шрифта",
            video: "видео",
            font: "шрифт",
            about: "о редакторе",
            print: "печать",
            symbol: "символ",
            underline: "подчеркнутый",
            strikethrough: "перечеркнутый",
            indent: "отступ",
            outdent: "выступ",
            fullsize: "во весь экран",
            shrink: "обычный размер",
            copyformat: "Копировать формат",
            hr: "линия",
            ul: "Список",
            ol: "Нумерованный список",
            cut: "Вырезать",
            selectall: "Выделить все",
            "Embed code": "Код",
            "Open link": "Открыть ссылку",
            "Edit link": "Редактировать ссылку",
            "No follow": "Атрибут nofollow",
            Unlink: "Убрать ссылку",
            Update: "Обновить",
            " URL": "URL",
            Edit: "Редактировать",
            "Horizontal align": "Горизонтальное выравнивание",
            Filter: "Фильтр",
            "Sort by changed": "По изменению",
            "Sort by name": "По имени",
            "Sort by size": "По размеру",
            "Add folder": "Добавить папку",
            Reset: "Восстановить",
            Save: "Сохранить",
            "Save as ...": "Сохранить как",
            Resize: "Изменить размер",
            Crop: "Обрезать размер",
            Width: "Ширина",
            Height: "Высота",
            "Keep Aspect Ratio": "Сохранять пропорции",
            Yes: "Да",
            No: "Нет",
            Remove: "Удалить",
            Select: "Выделить",
            "Chars: %d": "Символов: %d",
            "Words: %d": "Слов: %d",
            All: "Выделить все",
            "Select %s": "Выделить: %s",
            "Select all": "Выделить все",
            "Vertical align": "Вертикальное выравнивание",
            Split: "Разделить",
            "Split vertical": "Разделить по вертикали",
            "Split horizontal": "Разделить по горизонтали",
            Merge: "Объеденить в одну",
            "Add column": "Добавить столбец",
            "Add row": "Добавить строку",
            Delete: "Удалить",
            Border: "Рамка",
            "License: %s": "Лицензия: %s",
            "Strike through": "Перечеркнуть",
            Underline: "Подчеркивание",
            superscript: "верхний индекс",
            subscript: "индекс",
            "Cut selection": "Вырезать",
            Break: "Разделитель",
            "Search for": "Найти",
            "Replace with": "Заменить на",
            Replace: "Заменить",
            Paste: "Вставить",
            "Choose Content to Paste": "Выбрать контент для вставки",
            "You can only edit your own images. Download this image on the host?": "Вы можете редактировать только свои собственные изображения. Загрузить это изображение на ваш сервер?",
            "The image has been successfully uploaded to the host!": "Изображение успешно загружено на сервер!"
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            "Type something": "إبدأ في الكتابة...",
            "About Jodit": "حول جوديت",
            "Jodit Editor": "محرر جوديت",
            "Free Non-commercial Version": "الإصدار الغير تجاري مجاني",
            "Jodit User's Guide": "دليل مستخدم جوديت",
            "contains detailed help for using": "يحتوي على مساعدة مفصلة للاستخدام",
            "For information about the license, please go to our website:": "للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:",
            "Buy full version": "شراء النسخة الكاملة",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.",
            Anchor: "مِرْساة",
            "Open in new tab": "فتح في نافذة جديدة",
            "Open editor in fullsize": "فتح المحرر في الحجم الكامل",
            "Clear Formatting": "مسح التنسيق",
            "Fill color or set the text color": "ملء اللون أو تعيين لون النص",
            Redo: "إعادة",
            Undo: "تراجع",
            Bold: "عريض",
            Italic: "مائل",
            "Insert Unordered List": "إدراج قائمة غير مرتبة",
            "Insert Ordered List": "إدراج قائمة مرتبة",
            "Align Center": "محاذاة للوسط",
            "Align Justify": "محاذاة مثبتة",
            "Align Left": "محاذاة لليسار",
            "Align Right": "محاذاة لليمين",
            "Insert Horizontal Line": "إدراج خط أفقي",
            "Insert Image": "إدراج صورة",
            "Insert file": "ادخال الملف",
            "Insert youtube/vimeo video": "إدراج فيديو يوتيوب/فيميو ",
            "Insert link": "إدراج رابط",
            "Font size": "حجم الخط",
            "Font family": "نوع الخط",
            "Insert format block": "إدراج كتلة تنسيق",
            Normal: "عادي",
            "Heading 1": "عنوان 1",
            "Heading 2": "عنوان 2",
            "Heading 3": "عنوان 3",
            "Heading 4": "عنوان 4",
            Quote: "إقتباس",
            Code: "كود",
            Insert: "إدراج",
            "Insert table": "إدراج جدول",
            "Decrease Indent": "تقليل المسافة البادئة",
            "Increase Indent": "زيادة المسافة البادئة",
            "Select Special Character": "تحديد أحرف خاصة",
            "Insert Special Character": "إدراج حرف خاص",
            "Paint format": "تنسيق الرسم",
            "Change mode": "تغيير الوضع",
            Margins: "هوامش",
            top: "أعلى",
            right: "يمين",
            bottom: "أسفل",
            left: "يسار",
            Styles: "الأنماط",
            Classes: "الطبقات",
            Align: "محاذاة",
            Right: "اليمين",
            Center: "الوسط",
            Left: "اليسار",
            "--Not Set--": "--غير مضبوط--",
            Src: "Src",
            Title: "العنوان",
            Alternative: "العنوان البديل",
            Link: "الرابط",
            "Open link in new tab": "افتح الرابط في نافذة جديدة",
            Image: "الصورة",
            file: "ملف",
            Advanced: "متقدم",
            "Image properties": "خصائص الصورة",
            Cancel: "إلغاء",
            Ok: "حسنا",
            "File Browser": "متصفح الملفات",
            "Error on load list": "حدث خطأ في تحميل القائمة ",
            "Error on load folders": "حدث خطأ في تحميل المجلدات",
            "Are you shure?": "هل أنت واثق؟",
            "Enter Directory name": "أدخل اسم المجلد",
            "Create directory": "إنشاء مجلد",
            "type name": "أكتب إسم",
            "Drop image": "إسقاط صورة",
            "Drop file": "إسقاط الملف",
            "or click": "أو أنقر",
            "Alternative text": "النص البديل",
            Upload: "رفع",
            Browse: "تصفح",
            Background: "الخلفية",
            Text: "نص",
            Top: "أعلى",
            Middle: "الوسط",
            Bottom: "الأسفل",
            "Insert column before": "إدراج عمود قبل",
            "Insert column after": "إدراج عمود بعد",
            "Insert row above": "إدراج صف أعلى",
            "Insert row below": "إدراج صف أسفل",
            "Delete table": "حذف الجدول",
            "Delete row": "حذف الصف",
            "Delete column": "حذف العمود",
            "Empty cell": "خلية فارغة",
            "Chars: %d": "%d حرف",
            "Words: %d": "%d كلام",
            "Strike through": "اضرب من خلال",
            Underline: "أكد",
            superscript: "حرف فوقي",
            subscript: "مخطوطة",
            "Cut selection": "قطع الاختيار",
            "Select all": "اختر الكل",
            Break: "استراحة",
            "Search for": "البحث عن",
            "Replace with": "استبدل ب",
            Replace: "يحل محل",
            Paste: "معجون",
            "Choose Content to Paste": "اختر محتوى للصق",
            source: "مصدر",
            bold: "بالخط العريض",
            italic: "مائل",
            brush: "شغل",
            link: "صلة",
            undo: "إلغاء",
            redo: "كرر",
            table: "طاولة",
            image: "صورة",
            eraser: "نظيف",
            paragraph: "فقرة",
            fontsize: "حجم الخط",
            video: "فيديو",
            font: "الخط",
            about: "حول المحرر",
            print: "طباعة",
            symbol: "رمز",
            underline: "أكد",
            strikethrough: "شطب",
            indent: "المسافة البادئة",
            outdent: "نتوء",
            fullsize: "ملء الشاشة",
            shrink: "الحجم التقليدي",
            copyformat: "نسخ التنسيق",
            hr: "الخط",
            ul: "قائمة",
            ol: "قائمة مرقمة",
            cut: "قطع",
            selectall: "اختر الكل",
            "Embed code": "قانون",
            "Open link": "فتح الرابط",
            "Edit link": "تعديل الرابط",
            "No follow": "سمة Nofollow",
            Unlink: "إزالة الرابط",
            Update: "تحديث",
            " URL": "URL",
            Edit: "تحرير",
            "Horizontal align": "محاذاة أفقية",
            Filter: "فلتر",
            "Sort by changed": "عن طريق التغيير",
            "Sort by name": "بالاسم",
            "Sort by size": "حسب الحجم",
            "Add folder": "إضافة مجلد",
            Reset: "إعادة",
            Save: "احتفظ",
            "Save as ...": "حفظ باسم",
            Resize: "تغيير الحجم",
            Crop: "حجم القطع",
            Width: "عرض",
            Height: "ارتفاع",
            "Keep Aspect Ratio": "حافظ على النسب",
            Yes: "أن",
            No: "لا",
            Remove: "حذف",
            Select: "تميز",
            "Select %s": "تميز %s",
            "Vertical align": "محاذاة عمودية",
            Split: "انشق، مزق",
            Merge: "اذهب",
            "Add column": "أضف العمود",
            "Add row": "اضف سطر",
            "License: %s": "رخصة %s",
            Delete: "حذف",
            "Split vertical": "انقسام عمودي",
            "Split horizontal": "تقسيم أفقي",
            Border: "الحدود",
            "Your code is similar to HTML. Keep as HTML?": "يشبه الكود الخاص بك HTML. تبقي كما HTML؟",
            "Paste as HTML": "الصق ك HTML",
            Keep: "احتفظ",
            "Insert as Text": "إدراج كنص",
            "Insert only Text": "إدراج النص فقط",
            "You can only edit your own images. Download this image on the host?": "يمكنك فقط تحرير صورك الخاصة. تحميل هذه الصورة على المضيف؟",
            "The image has been successfully uploaded to the host!": "تم تحميل الصورة بنجاح على الخادم!"
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.about = o(77), t.addcolumn = o(78), t.addrow = o(79), t.angle_left = o(80), t.angle_down = o(81), t.angle_right = o(82), t.angle_up = o(83), t.arrows_alt = o(84), t.arrows_h = o(85), t.attachment = o(86), t.bin = o(87), t.dots = o(88), t.bold = o(89), t.brush = o(90), t.cancel = o(91), t.center = o(92), t.chain_broken = o(93), t.check_square = o(94), t.check = o(95), t.copyformat = o(96), t.crop = o(97), t.cut = o(98), t.dedent = o(99), t.enter = o(100), t.eraser = o(101), t.eye = o(102), t.file = o(103), t.folder = o(104), t.font = o(105), t.fontsize = o(106), t.fullsize = o(107), t.hr = o(108), t.image = o(109), t.info_circle = o(110), t.italic = o(111), t.justify = o(112), t.left = o(113), t.link = o(114), t.lock = o(115), t.menu = o(116), t.merge = o(117), t.ol = o(118), t.paragraph = o(119), t.pencil = o(120), t.plus = o(121), t.redo = o(122), t.resize = o(123), t.resizer = o(124), t.right = o(125), t.save = o(126), t.select_all = o(127), t.shrink = o(128), t.source = o(129), t.splitg = o(130), t.splitv = o(131), t.strikethrough = o(132), t.subscript = o(133), t.superscript = o(134), t.table = o(135), t.th_list = o(136), t.th = o(137), t.ul = o(138), t.underline = o(139), t.undo = o(140), t.unlink = o(141), t.unlock = o(142), t.update = o(143), t.upload = o(144), t.valign = o(145), t.video = o(146), t.outdent = o(147), t.indent = o(148), t.print = o(149), t.omega = o(150)
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 18.151 18.151"><g><g><path d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"></path><path d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"></path><polygon points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 "></polygon></g></g></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 432 432"><g><g><polygon points="203.688,96 0,96 0,144 155.688,144 "></polygon><polygon points="155.719,288 0,288 0,336 203.719,336 "></polygon><rect x="252" y="96"></rect><rect></rect><rect x="252" y="288"></rect><rect y="384"></rect><path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z"></path><polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176 "></polygon></g></g></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xml:space="preserve"><circle cx="12" cy="12" r="2.2"></circle><circle cx="12" cy="5" r="2.2"></circle><circle cx="12" cy="19" r="2.2"></circle></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 16 16"><path d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 128 128" xml:space="preserve"><g><polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125 16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594 112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125 "></polygon></g></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M883 1056q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23zm781-864v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 312.000000 312.000000"><g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z"></path><path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z"></path><path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"></path><path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z"></path></g></svg>'
    }, function (e, t) {
        e.exports = '<svg role="img" viewBox="0 0 1792 1792"><path d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 24 24" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title></title><desc></desc><defs></defs><g><g transform="translate(-251.000000, -443.000000)"><g transform="translate(215.000000, 119.000000)"></g><path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"></path></g></g></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 18 18"><g fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(-381.000000, -381.000000)"><g transform="translate(381.000000, 381.000000)"><path d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"></path></g></g></g></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 48 48"><path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"></path><path d="M0 0h48v48h-48z" fill="none"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 48 48"><path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"></path><path d="M0 0h48v48h-48z" fill="none"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg viewBox="0 0 270 270"><path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"></path></svg>'
    }])
});


$('#content').each(function () {
    var editor = new Jodit(this);
    editor.value = '';
});


$('#category').on('select2:select', function (e) {
    var id = $(this).val();
    if (id == '1') {
        var url = 'frontend-get-property';
        $('#area-box').css('opacity', '1');
    } else {
        var url = '/frontend-get-locations-bycategory/' + id;
        $('#area-box').css('opacity', '0');
    }
    $.ajax({
        url: url,
        type: "GET",
    }).done(function (data) {
        $('#location_id').empty();
        $.each(data, function (key, value) {
            $('#location_id').append('<option value="' + value.id + '" selected="">' + value.name + '</option>');
        });
    });
});

$('#province').on('select2:select', function () {
    var id = $(this).val();
    var url = '/backend-district/' + id;

    $.ajax({
        url: url,
        type: "GET",
    }).done(function (data) {
        $('#district').empty();
        $.each(data, function (key, value) {
            $('#district').append('<option value="' + value.id + '" selected="">' + value.name + '</option>');
        });
    });
});
$('#district').on('select2:select', function () {
    var id = $(this).val();
    var url = '/backend-ward/' + id;

    $.ajax({
        url: url,
        type: "GET",
    }).done(function (data) {
        $('#ward').empty();
        $.each(data, function (key, value) {
            $('#ward').append('<option value="' + value.id + '" selected="">' + value.name + '</option>');
        });
    });
});


/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
!function (e) {
    e(["jquery"], function (e) {
        return function () {
            function t(e, t, n) {
                return g({type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t})
            }

            function n(t, n) {
                return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v)
            }

            function o(e, t, n) {
                return g({type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t})
            }

            function s(e) {
                C = e
            }

            function i(e, t, n) {
                return g({
                    type: O.success,
                    iconClass: m().iconClasses.success,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }

            function a(e, t, n) {
                return g({
                    type: O.warning,
                    iconClass: m().iconClasses.warning,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }

            function r(e, t) {
                var o = m();
                v || n(o), u(e, o, t) || l(o)
            }

            function c(t) {
                var o = m();
                return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove())
            }

            function l(t) {
                for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t)
            }

            function u(t, n, o) {
                var s = !(!o || !o.force) && o.force;
                return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function () {
                        h(t)
                    }
                }), !0)
            }

            function d(t) {
                return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v
            }

            function p() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                }
            }

            function f(e) {
                C && C(e)
            }

            function g(t) {
                function o(e) {
                    return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function s() {
                    c(), u(), d(), p(), g(), C(), l(), i()
                }

                function i() {
                    var e = "";
                    switch (t.iconClass) {
                        case"toast-success":
                        case"toast-info":
                            e = "polite";
                            break;
                        default:
                            e = "assertive"
                    }
                    I.attr("aria-live", e)
                }

                function a() {
                    E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0)
                    }), E.onclick && I.click(function (e) {
                        E.onclick(e), b()
                    })
                }

                function r() {
                    I.hide(), I[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing,
                        complete: E.onShown
                    }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = (new Date).getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)))
                }

                function c() {
                    t.iconClass && I.addClass(E.toastClass).addClass(y)
                }

                function l() {
                    E.newestOnTop ? v.prepend(I) : v.append(I)
                }

                function u() {
                    if (t.title) {
                        var e = t.title;
                        E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M)
                    }
                }

                function d() {
                    if (t.message) {
                        var e = t.message;
                        E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B)
                    }
                }

                function p() {
                    E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j))
                }

                function g() {
                    E.progressBar && (q.addClass(E.progressClass), I.prepend(q))
                }

                function C() {
                    E.rtl && I.addClass("rtl")
                }

                function O(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === w) return !0;
                        w = t.message
                    }
                    return !1
                }

                function b(t) {
                    var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
                        o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
                        s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
                    if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({
                        duration: o,
                        easing: s,
                        complete: function () {
                            h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date, f(P)
                        }
                    })
                }

                function D() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = (new Date).getTime() + F.maxHideTime)
                }

                function H() {
                    clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing
                    })
                }

                function x() {
                    var e = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
                    q.width(e + "%")
                }

                var E = m(), y = t.iconClass || E.iconClass;
                if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
                    T++, v = n(E, !0);
                    var k = null, I = e("<div/>"), M = e("<div/>"), B = e("<div/>"), q = e("<div/>"),
                        j = e(E.closeHtml), F = {intervalId: null, hideEta: null, maxHideTime: null},
                        P = {toastId: T, state: "visible", startTime: new Date, options: E, map: t};
                    return s(), r(), a(), f(P), E.debug && console && console.log(P), I
                }
            }

            function m() {
                return e.extend({}, p(), b.options)
            }

            function h(e) {
                v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0))
            }

            var v, C, w, T = 0, O = {error: "error", info: "info", success: "success", warning: "warning"}, b = {
                clear: r,
                remove: c,
                error: t,
                getContainer: n,
                info: o,
                options: {},
                subscribe: s,
                success: i,
                version: "2.1.3",
                warning: a
            };
            return b
        }()
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
});

//# sourceMappingURL=toastr.js.map

function formSubmit() {
    Command: toastr["success"]("Đăng tin thành công?");

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": 0,
        "extendedTimeOut": 0,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "tapToDismiss": false
    }
}


/*
 *  jquery-maskmoney - v3.1.1
 *  jQuery plugin to mask data entry in the input text in the form of money (currency)
 *  https://github.com/plentz/jquery-maskmoney
 *
 *  Made by Diego Plentz
 *  Under MIT License
 */

!function ($) {
    "use strict";

    function e(e, t) {
        var n = "";
        return e.indexOf("-") > -1 && (e = e.replace("-", ""), n = "-"), e.indexOf(t.prefix) > -1 && (e = e.replace(t.prefix, "")), e.indexOf(t.suffix) > -1 && (e = e.replace(t.suffix, "")), n + t.prefix + e + t.suffix
    }

    function t(e, t) {
        return t.allowEmpty && "" === e ? "" : t.reverse ? a(e, t) : n(e, t)
    }

    function n(t, n) {
        var a, i, o, l = t.indexOf("-") > -1 && n.allowNegative ? "-" : "", s = t.replace(/[^0-9]/g, "");
        return a = r(s.slice(0, s.length - n.precision), l, n), n.precision > 0 && (i = s.slice(s.length - n.precision), o = new Array(n.precision + 1 - i.length).join(0), a += n.decimal + o + i), e(a, n)
    }

    function a(t, n) {
        var a, i = t.indexOf("-") > -1 && n.allowNegative ? "-" : "", o = t.replace(n.prefix, "").replace(n.suffix, ""),
            l = o.split(n.decimal)[0], s = "";
        if ("" === l && (l = "0"), a = r(l, i, n), n.precision > 0) {
            var c = o.split(n.decimal);
            c.length > 1 && (s = c[1]), a += n.decimal + s;
            var u = Number.parseFloat(l + "." + s).toFixed(n.precision).toString().split(n.decimal)[1];
            a = a.split(n.decimal)[0] + "." + u
        }
        return e(a, n)
    }

    function r(e, t, n) {
        return e = e.replace(/^0*/g, ""), "" === (e = e.replace(/\B(?=(\d{3})+(?!\d))/g, n.thousands)) && (e = "0"), t + e
    }

    $.browser || ($.browser = {}, $.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()), $.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase()), $.browser.opera = /opera/.test(navigator.userAgent.toLowerCase()), $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase()), $.browser.device = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    var i = {
        prefix: "",
        suffix: "",
        affixesStay: !0,
        thousands: ",",
        decimal: ".",
        precision: 2,
        allowZero: !1,
        allowNegative: !1,
        doubleClickSelection: !0,
        allowEmpty: !1,
        bringCaretAtEndOnFocus: !0
    }, o = {
        destroy: function () {
            return $(this).unbind(".maskMoney"), $.browser.msie && (this.onpaste = null), this
        }, applyMask: function (e) {
            return t(e, $(this).data("settings"))
        }, mask: function (e) {
            return this.each(function () {
                var t = $(this);
                return "number" == typeof e && t.val(e), t.trigger("mask")
            })
        }, unmasked: function () {
            return this.map(function () {
                var e, t = $(this).val() || "0", n = -1 !== t.indexOf("-");
                return $(t.split(/\D/).reverse()).each(function (t, n) {
                    if (n) return e = n, !1
                }), t = t.replace(/\D/g, ""), t = t.replace(new RegExp(e + "$"), "." + e), n && (t = "-" + t), parseFloat(t)
            })
        }, unmaskedWithOptions: function () {
            return this.map(function () {
                var e = $(this).val() || "0", t = $(this).data("settings") || i,
                    n = new RegExp(t.thousandsForUnmasked || t.thousands, "g");
                return e = e.replace(n, ""), parseFloat(e)
            })
        }, init: function (n) {
            return n = $.extend($.extend({}, i), n), this.each(function () {
                function a() {
                    var e, t, n, a, r, i = x.get(0), o = 0, l = 0;
                    return "number" == typeof i.selectionStart && "number" == typeof i.selectionEnd ? (o = i.selectionStart, l = i.selectionEnd) : (t = document.selection.createRange()) && t.parentElement() === i && (a = i.value.length, e = i.value.replace(/\r\n/g, "\n"), (n = i.createTextRange()).moveToBookmark(t.getBookmark()), (r = i.createTextRange()).collapse(!1), n.compareEndPoints("StartToEnd", r) > -1 ? o = l = a : (o = -n.moveStart("character", -a), o += e.slice(0, o).split("\n").length - 1, n.compareEndPoints("EndToEnd", r) > -1 ? l = a : (l = -n.moveEnd("character", -a), l += e.slice(0, l).split("\n").length - 1))), {
                        start: o,
                        end: l
                    }
                }

                function r() {
                    var e = !(x.val().length >= x.attr("maxlength") && x.attr("maxlength") >= 0), t = a(), n = t.start,
                        r = t.end, i = !(t.start === t.end || !x.val().substring(n, r).match(/\d/)),
                        o = "0" === x.val().substring(0, 1);
                    return e || i || o
                }

                function i(e) {
                    w.formatOnBlur || x.each(function (t, n) {
                        if (n.setSelectionRange) n.focus(), n.setSelectionRange(e, e); else if (n.createTextRange) {
                            var a = n.createTextRange();
                            a.collapse(!0), a.moveEnd("character", e), a.moveStart("character", e), a.select()
                        }
                    })
                }

                function o(e) {
                    var n, a = x.val().length;
                    x.val(t(x.val(), w)), n = x.val().length, w.reverse || (e -= a - n), i(e)
                }

                function l() {
                    var e = x.val();
                    if (!w.allowEmpty || "" !== e) {
                        var n = e.indexOf(w.decimal);
                        if (w.precision > 0) if (n < 0) e += w.decimal + new Array(w.precision + 1).join(0); else {
                            var a = e.slice(0, n), r = e.slice(n + 1);
                            e = a + w.decimal + r + new Array(w.precision + 1 - r.length).join(0)
                        } else n > 0 && (e = e.slice(0, n));
                        x.val(t(e, w))
                    }
                }

                function s() {
                    var e = x.val();
                    return w.allowNegative ? "" !== e && "-" === e.charAt(0) ? e.replace("-", "") : "-" + e : e
                }

                function c(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }

                function u(e) {
                    var t = (e = e || window.event).which || e.charCode || e.keyCode, n = w.decimal.charCodeAt(0);
                    return void 0 !== t && (!(t < 48 || t > 57) || t === n && w.reverse ? !!r() && ((t !== n || !d()) && (!!w.formatOnBlur || (c(e), p(e), !1))) : g(t, e))
                }

                function d() {
                    return !v() && f()
                }

                function v() {
                    var e = x.val().length, t = a();
                    return 0 === t.start && t.end === e
                }

                function f() {
                    return x.val().indexOf(w.decimal) > -1
                }

                function p(e) {
                    var t, n, r, i, l = (e = e || window.event).which || e.charCode || e.keyCode, s = "";
                    l >= 48 && l <= 57 && (s = String.fromCharCode(l)), n = (t = a()).start, r = t.end, i = x.val(), x.val(i.substring(0, n) + s + i.substring(r, i.length)), o(n + 1)
                }

                function g(e, t) {
                    return 45 === e ? (x.val(s()), !1) : 43 === e ? (x.val(x.val().replace("-", "")), !1) : 13 === e || 9 === e || (!(!$.browser.mozilla || 37 !== e && 39 !== e || 0 !== t.charCode) || (c(t), !0))
                }

                function m() {
                    setTimeout(function () {
                        l()
                    }, 0)
                }

                function h() {
                    return (parseFloat("0") / Math.pow(10, w.precision)).toFixed(w.precision).replace(new RegExp("\\.", "g"), w.decimal)
                }

                var w, b, x = $(this);
                w = $.extend({}, n), w = $.extend(w, x.data()), x.data("settings", w), $.browser.device && x.attr("type", "tel"), x.unbind(".maskMoney"), x.bind("keypress.maskMoney", u), x.bind("keydown.maskMoney", function (e) {
                    var t, n, r, i, l, s = (e = e || window.event).which || e.charCode || e.keyCode;
                    return void 0 !== s && (t = a(), n = t.start, r = t.end, 8 !== s && 46 !== s && 63272 !== s || (c(e), i = x.val(), n === r && (8 === s ? "" === w.suffix ? n -= 1 : (l = i.split("").reverse().join("").search(/\d/), r = 1 + (n = i.length - l - 1)) : r += 1), x.val(i.substring(0, n) + i.substring(r, i.length)), o(n), !1))
                }), x.bind("blur.maskMoney", function (t) {
                    if ($.browser.msie && u(t), w.formatOnBlur && x.val() !== b && p(t), "" === x.val() && w.allowEmpty) x.val(""); else if ("" === x.val() || x.val() === e(h(), w)) w.allowZero ? w.affixesStay ? x.val(e(h(), w)) : x.val(h()) : x.val(""); else if (!w.affixesStay) {
                        var n = x.val().replace(w.prefix, "").replace(w.suffix, "");
                        x.val(n)
                    }
                    x.val() !== b && x.change()
                }), x.bind("focus.maskMoney", function () {
                    b = x.val(), l();
                    var e, t = x.get(0);
                    w.selectAllOnFocus ? t.select() : t.createTextRange && w.bringCaretAtEndOnFocus && ((e = t.createTextRange()).collapse(!1), e.select())
                }), x.bind("click.maskMoney", function () {
                    var e, t = x.get(0);
                    w.selectAllOnFocus || (t.setSelectionRange && w.bringCaretAtEndOnFocus ? (e = x.val().length, t.setSelectionRange(e, e)) : x.val(x.val()))
                }), x.bind("dblclick.maskMoney", function () {
                    var e, t, n = x.get(0);
                    n.setSelectionRange && w.bringCaretAtEndOnFocus ? (t = x.val().length, e = w.doubleClickSelection ? 0 : t, n.setSelectionRange(e, t)) : x.val(x.val())
                }), x.bind("cut.maskMoney", m), x.bind("paste.maskMoney", m), x.bind("mask.maskMoney", l)
            })
        }
    };
    $.fn.maskMoney = function (e) {
        return o[e] ? o[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void $.error("Method " + e + " does not exist on jQuery.maskMoney") : o.init.apply(this, arguments)
    }
}(window.jQuery || window.Zepto);


$(function () {
    $('#price').maskMoney();
	$('#area').maskMoney();
})