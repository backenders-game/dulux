/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (t, e) {
    function i() {
      return ++n
    }
  
    function s(t) {
      return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }
    var n = 0,
      a = /#.*$/;
    t.widget("ui.tabs", {
      version: "1.10.2",
      delay: 300,
      options: {
        active: null,
        collapsible: !1,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null
      },
      _create: function () {
        var e = this,
          i = this.options;
        this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
          t(this).is(".ui-state-disabled") && e.preventDefault()
        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
          t(this).closest("li").is(".ui-state-disabled") && this.blur()
        }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
          return e.tabs.index(t)
        }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
      },
      _initialActive: function () {
        var i = this.options.active,
          s = this.options.collapsible,
          n = location.hash.substring(1);
        return null === i && (n && this.tabs.each(function (s, a) {
          return t(a).attr("aria-controls") === n ? (i = s, !1) : e
        }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
      },
      _getCreateEventData: function () {
        return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : t()
        }
      },
      _tabKeydown: function (i) {
        var s = t(this.document[0].activeElement).closest("li"),
          n = this.tabs.index(s),
          a = !0;
        if (!this._handlePageNav(i)) {
          switch (i.keyCode) {
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
              n++;
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.LEFT:
              a = !1, n--;
              break;
            case t.ui.keyCode.END:
              n = this.anchors.length - 1;
              break;
            case t.ui.keyCode.HOME:
              n = 0;
              break;
            case t.ui.keyCode.SPACE:
              return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
            case t.ui.keyCode.ENTER:
              return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
            default:
              return
          }
          i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
            this.option("active", n)
          }, this.delay))
        }
      },
      _panelKeydown: function (e) {
        this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
      },
      _handlePageNav: function (i) {
        return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
      },
      _findNextTab: function (e, i) {
        function s() {
          return e > n && (e = 0), 0 > e && (e = n), e
        }
        for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
        return e
      },
      _focusNextTab: function (t, e) {
        return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
      },
      _setOption: function (t, i) {
        return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
      },
      _tabId: function (t) {
        return t.attr("aria-controls") || "ui-tabs-" + i()
      },
      _sanitizeSelector: function (t) {
        return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
      },
      refresh: function () {
        var e = this.options,
          i = this.tablist.children(":has(a[href])");
        e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
          return i.index(t)
        }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
      },
      _refresh: function () {
        this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
          "aria-selected": "false",
          tabIndex: -1
        }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
          "aria-expanded": "false",
          "aria-hidden": "true"
        }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
          "aria-selected": "true",
          tabIndex: 0
        }), this._getPanelForTab(this.active).show().attr({
          "aria-expanded": "true",
          "aria-hidden": "false"
        })) : this.tabs.eq(0).attr("tabIndex", 0)
      },
      _processTabs: function () {
        var e = this;
        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
          role: "tab",
          tabIndex: -1
        }), this.anchors = this.tabs.map(function () {
          return t("a", this)[0]
        }).addClass("ui-tabs-anchor").attr({
          role: "presentation",
          tabIndex: -1
        }), this.panels = t(), this.anchors.each(function (i, n) {
          var a, o, r, h = t(n).uniqueId().attr("id"),
            l = t(n).closest("li"),
            u = l.attr("aria-controls");
          s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), u && l.data("ui-tabs-aria-controls", u), l.attr({
            "aria-controls": a.substring(1),
            "aria-labelledby": h
          }), o.attr("aria-labelledby", h)
        }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
      },
      _getList: function () {
        return this.element.find("ol,ul").eq(0)
      },
      _createPanel: function (e) {
        return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
      },
      _setupDisabled: function (e) {
        t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
        for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
        this.options.disabled = e
      },
      _setupEvents: function (e) {
        var i = {
          click: function (t) {
            t.preventDefault()
          }
        };
        e && t.each(e.split(" "), function (t, e) {
          i[e] = "_eventHandler"
        }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
          keydown: "_tabKeydown"
        }), this._on(this.panels, {
          keydown: "_panelKeydown"
        }), this._focusable(this.tabs), this._hoverable(this.tabs)
      },
      _setupHeightStyle: function (e) {
        var i, s = this.element.parent();
        "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
          var e = t(this),
            s = e.css("position");
          "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
        }), this.element.children().not(this.panels).each(function () {
          i -= t(this).outerHeight(!0)
        }), this.panels.each(function () {
          t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
        }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
          i = Math.max(i, t(this).height("").height())
        }).height(i))
      },
      _eventHandler: function (e) {
        var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          a = n.closest("li"),
          o = a[0] === s[0],
          r = o && i.collapsible,
          h = r ? t() : this._getPanelForTab(a),
          l = s.length ? this._getPanelForTab(s) : t(),
          u = {
            oldTab: s,
            oldPanel: l,
            newTab: r ? t() : a,
            newPanel: h
          };
        e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, u))
      },
      _toggle: function (e, i) {
        function s() {
          a.running = !1, a._trigger("activate", e, i)
        }
  
        function n() {
          i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
        }
        var a = this,
          o = i.newPanel,
          r = i.oldPanel;
        this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
          i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
        }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
          "aria-expanded": "false",
          "aria-hidden": "true"
        }), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
          return 0 === t(this).attr("tabIndex")
        }).attr("tabIndex", -1), o.attr({
          "aria-expanded": "true",
          "aria-hidden": "false"
        }), i.newTab.attr({
          "aria-selected": "true",
          tabIndex: 0
        })
      },
      _activate: function (e) {
        var i, s = this._findActive(e);
        s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
          target: i,
          currentTarget: i,
          preventDefault: t.noop
        }))
      },
      _findActive: function (e) {
        return e === !1 ? t() : this.tabs.eq(e)
      },
      _getIndex: function (t) {
        return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
          t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
        }), this.tabs.each(function () {
          var e = t(this),
            i = e.data("ui-tabs-aria-controls");
          i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
        }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
      },
      enable: function (i) {
        var s = this.options.disabled;
        s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
          return t !== i ? t : null
        }) : t.map(this.tabs, function (t, e) {
          return e !== i ? e : null
        })), this._setupDisabled(s))
      },
      disable: function (i) {
        var s = this.options.disabled;
        if (s !== !0) {
          if (i === e) s = !0;
          else {
            if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
            s = t.isArray(s) ? t.merge([i], s).sort() : [i]
          }
          this._setupDisabled(s)
        }
      },
      load: function (e, i) {
        e = this._getIndex(e);
        var n = this,
          a = this.tabs.eq(e),
          o = a.find(".ui-tabs-anchor"),
          r = this._getPanelForTab(a),
          h = {
            tab: a,
            panel: r
          };
        s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
          setTimeout(function () {
            r.html(t), n._trigger("load", i, h)
          }, 1)
        }).complete(function (t, e) {
          setTimeout(function () {
            "abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
          }, 1)
        })))
      },
      _ajaxSettings: function (e, i, s) {
        var n = this;
        return {
          url: e.attr("href"),
          beforeSend: function (e, a) {
            return n._trigger("beforeLoad", i, t.extend({
              jqXHR: e,
              ajaxSettings: a
            }, s))
          }
        }
      },
      _getPanelForTab: function (e) {
        var i = t(e).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i))
      }
    })
  })(jQuery);; /*})'"*/ ; /*})'"*/
  /*! jQuery UI - v1.10.2 - 2013-03-14
   * http://jqueryui.com
   * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
  (function (t) {
    var e = 0,
      i = {},
      s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
      version: "1.10.2",
      options: {
        active: 0,
        animate: {},
        collapsible: !1,
        event: "click",
        header: "> li > :first-child,> :not(li):even",
        heightStyle: "auto",
        icons: {
          activeHeader: "ui-icon-triangle-1-s",
          header: "ui-icon-triangle-1-e"
        },
        activate: null,
        beforeActivate: null
      },
      _create: function () {
        var e = this.options;
        this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
      },
      _getCreateEventData: function () {
        return {
          header: this.active,
          panel: this.active.length ? this.active.next() : t(),
          content: this.active.length ? this.active.next() : t()
        }
      },
      _createIcons: function () {
        var e = this.options.icons;
        e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
      },
      _destroyIcons: function () {
        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
      },
      _destroy: function () {
        var t;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
          /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
          /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), "content" !== this.options.heightStyle && t.css("height", "")
      },
      _setOption: function (t, e) {
        return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined)
      },
      _keydown: function (e) {
        if (!e.altKey && !e.ctrlKey) {
          var i = t.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(e.target),
            a = !1;
          switch (e.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              a = this.headers[(n + 1) % s];
              break;
            case i.LEFT:
            case i.UP:
              a = this.headers[(n - 1 + s) % s];
              break;
            case i.SPACE:
            case i.ENTER:
              this._eventHandler(e);
              break;
            case i.HOME:
              a = this.headers[0];
              break;
            case i.END:
              a = this.headers[s - 1]
          }
          a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault())
        }
      },
      _panelKeyDown: function (e) {
        e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
      },
      refresh: function () {
        var e = this.options;
        this._processPanels(), (e.active === !1 && e.collapsible === !0 || !this.headers.length) && (e.active = !1, this.active = t()), e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
      },
      _processPanels: function () {
        this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
      },
      _refresh: function () {
        var i, s = this.options,
          n = s.heightStyle,
          a = this.element.parent(),
          o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
        this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (e) {
          var i = t(this),
            s = i.attr("id"),
            n = i.next(),
            a = n.attr("id");
          s || (s = o + "-header-" + e, i.attr("id", s)), a || (a = o + "-panel-" + e, n.attr("id", a)), i.attr("aria-controls", a), n.attr("aria-labelledby", s)
        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
          "aria-selected": "false",
          tabIndex: -1
        }).next().attr({
          "aria-expanded": "false",
          "aria-hidden": "true"
        }).hide(), this.active.length ? this.active.attr({
          "aria-selected": "true",
          tabIndex: 0
        }).next().attr({
          "aria-expanded": "true",
          "aria-hidden": "false"
        }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = a.height(), this.element.siblings(":visible").each(function () {
          var e = t(this),
            s = e.css("position");
          "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
        }), this.headers.each(function () {
          i -= t(this).outerHeight(!0)
        }), this.headers.next().each(function () {
          t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
        }).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function () {
          i = Math.max(i, t(this).css("height", "").height())
        }).height(i))
      },
      _activate: function (e) {
        var i = this._findActive(e)[0];
        i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
          target: i,
          currentTarget: i,
          preventDefault: t.noop
        }))
      },
      _findActive: function (e) {
        return "number" == typeof e ? this.headers.eq(e) : t()
      },
      _setupEvents: function (e) {
        var i = {
          keydown: "_keydown"
        };
        e && t.each(e.split(" "), function (t, e) {
          i[e] = "_eventHandler"
        }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
          keydown: "_panelKeyDown"
        }), this._hoverable(this.headers), this._focusable(this.headers)
      },
      _eventHandler: function (e) {
        var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          a = n[0] === s[0],
          o = a && i.collapsible,
          r = o ? t() : n.next(),
          h = s.next(),
          l = {
            oldHeader: s,
            oldPanel: h,
            newHeader: o ? t() : n,
            newPanel: r
          };
        e.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
      },
      _toggle: function (e) {
        var i = e.newPanel,
          s = this.prevShow.length ? this.prevShow : e.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
          "aria-expanded": "false",
          "aria-hidden": "true"
        }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
          return 0 === t(this).attr("tabIndex")
        }).attr("tabIndex", -1), i.attr({
          "aria-expanded": "true",
          "aria-hidden": "false"
        }).prev().attr({
          "aria-selected": "true",
          tabIndex: 0
        })
      },
      _animate: function (t, e, n) {
        var a, o, r, h = this,
          l = 0,
          c = t.length && (!e.length || t.index() < e.index()),
          u = this.options.animate || {},
          d = c && u.down || u,
          p = function () {
            h._toggleComplete(n)
          };
        return "number" == typeof d && (r = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (a = t.show().outerHeight(), e.animate(i, {
          duration: r,
          easing: o,
          step: function (t, e) {
            e.now = Math.round(t)
          }
        }), t.hide().animate(s, {
          duration: r,
          easing: o,
          complete: p,
          step: function (t, i) {
            i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(a - e.outerHeight() - l), l = 0)
          }
        }), undefined) : e.animate(i, r, o, p) : t.animate(s, r, o, p)
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel;
        e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
      }
    })
  })(jQuery);; /*})'"*/ ; /*})'"*/