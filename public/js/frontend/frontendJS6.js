/*!
 * Bootstrap v3.0.2 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */

if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); + function (a) {
    "use strict";
  
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var c in b)
        if (void 0 !== a.style[c]) return {
          end: b[c]
        }
    }
    a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one(a.support.transition.end, function () {
        c = !0
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end)
      };
      return setTimeout(e, b), this
    }, a(function () {
      a.support.transition = b()
    })
  }(jQuery), + function (a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
      c = function (c) {
        a(c).on("click", b, this.close)
      };
    c.prototype.close = function (b) {
      function c() {
        f.trigger("closed.bs.alert").remove()
      }
      var d = a(this),
        e = d.attr("data-target");
      e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
      var f = a(e);
      b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function (b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.alert");
        e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
      })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
      return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
  }(jQuery), + function (a) {
    "use strict";
    var b = function (c, d) {
      this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
    };
    b.DEFAULTS = {
      loadingText: "loading..."
    }, b.prototype.setState = function (a) {
      var b = "disabled",
        c = this.$element,
        d = c.is("input") ? "val" : "html",
        e = c.data();
      a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function () {
        "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
      }, 0)
    }, b.prototype.toggle = function () {
      var a = this.$element.closest('[data-toggle="buttons"]');
      if (a.length) {
        var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
        "radio" === b.prop("type") && a.find(".active").removeClass("active")
      }
      this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof c && c;
        e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
      })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
      return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
      var c = a(b.target);
      c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
  }(jQuery), + function (a) {
    "use strict";
    var b = function (b, c) {
      this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
      interval: 5e3,
      pause: "hover",
      wrap: !0
    }, b.prototype.cycle = function (b) {
      return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function () {
      return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function (b) {
      var c = this,
        d = this.getActiveIndex();
      return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function () {
        c.to(b)
      }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function (b) {
      return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function () {
      return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function () {
      return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function (b, c) {
      var d = this.$element.find(".item.active"),
        e = c || d[b](),
        f = this.interval,
        g = "next" == b ? "left" : "right",
        h = "next" == b ? "first" : "last",
        i = this;
      if (!e.length) {
        if (!this.options.wrap) return;
        e = this.$element.find(".item")[h]()
      }
      this.sliding = !0, f && this.pause();
      var j = a.Event("slide.bs.carousel", {
        relatedTarget: e[0],
        direction: g
      });
      if (!e.hasClass("active")) {
        if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active")
          })), a.support.transition && this.$element.hasClass("slide")) {
          if (this.$element.trigger(j), j.isDefaultPrevented()) return;
          e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
              i.$element.trigger("slid")
            }, 0)
          }).emulateTransitionEnd(600)
        } else {
          if (this.$element.trigger(j), j.isDefaultPrevented()) return;
          d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
        }
        return f && this.cycle(), this
      }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
          g = "string" == typeof c ? c : f.slide;
        e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
      })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
      return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
      var c, d = a(this),
        e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
        f = a.extend({}, e.data(), d.data()),
        g = d.attr("data-slide-to");
      g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function () {
      a('[data-ride="carousel"]').each(function () {
        var b = a(this);
        b.carousel(b.data())
      })
    })
  }(jQuery), + function (a) {
    "use strict";
    var b = function (c, d) {
      this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
      toggle: !0
    }, b.prototype.dimension = function () {
      var a = this.$element.hasClass("width");
      return a ? "width" : "height"
    }, b.prototype.show = function () {
      if (!this.transitioning && !this.$element.hasClass("in")) {
        var b = a.Event("show.bs.collapse");
        if (this.$element.trigger(b), !b.isDefaultPrevented()) {
          var c = this.$parent && this.$parent.find("> .panel > .in");
          if (c && c.length) {
            var d = c.data("bs.collapse");
            if (d && d.transitioning) return;
            c.collapse("hide"), d || c.data("bs.collapse", null)
          }
          var e = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
          var f = function () {
            this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition) return f.call(this);
          var g = a.camelCase(["scroll", e].join("-"));
          this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
        }
      }
    }, b.prototype.hide = function () {
      if (!this.transitioning && this.$element.hasClass("in")) {
        var b = a.Event("hide.bs.collapse");
        if (this.$element.trigger(b), !b.isDefaultPrevented()) {
          var c = this.dimension();
          this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
          var d = function () {
            this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
          };
          return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
        }
      }
    }, b.prototype.toggle = function () {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.collapse"),
          f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
        e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
      })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
      return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
      var c, d = a(this),
        e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
        f = a(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : d.data(),
        i = d.attr("data-parent"),
        j = i && a(i);
      g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
  }(jQuery), + function (a) {
    "use strict";
  
    function b() {
      a(d).remove(), a(e).each(function (b) {
        var d = c(a(this));
        d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
      })
    }
  
    function c(b) {
      var c = b.attr("data-target");
      c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
      var d = c && a(c);
      return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop",
      e = "[data-toggle=dropdown]",
      f = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
      };
    f.prototype.toggle = function (d) {
      var e = a(this);
      if (!e.is(".disabled, :disabled")) {
        var f = c(e),
          g = f.hasClass("open");
        if (b(), !g) {
          if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
          f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus()
        }
        return !1
      }
    }, f.prototype.keydown = function (b) {
      if (/(38|40|27)/.test(b.keyCode)) {
        var d = a(this);
        if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
          var f = c(d),
            g = f.hasClass("open");
          if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
          var h = a("[role=menu] li:not(.divider):visible a", f);
          if (h.length) {
            var i = h.index(h.filter(":focus"));
            38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
          }
        }
      }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function (b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("dropdown");
        d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
      })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
      return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
      a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
  }(jQuery), + function (a) {
    "use strict";
    var b = function (b, c) {
      this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    b.DEFAULTS = {
      backdrop: !0,
      keyboard: !0,
      show: !0
    }, b.prototype.toggle = function (a) {
      return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function (b) {
      var c = this,
        d = a.Event("show.bs.modal", {
          relatedTarget: b
        });
      this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
        var d = a.support.transition && c.$element.hasClass("fade");
        c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
        var e = a.Event("shown.bs.modal", {
          relatedTarget: b
        });
        d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
          c.$element.focus().trigger(e)
        }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
      }))
    }, b.prototype.hide = function (b) {
      b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function () {
      a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
        this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
      }, this))
    }, b.prototype.escape = function () {
      this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
        27 == a.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function () {
      var a = this;
      this.$element.hide(), this.backdrop(function () {
        a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
      })
    }, b.prototype.removeBackdrop = function () {
      this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function (b) {
      var c = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
        var d = a.support.transition && c;
        if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function (a) {
            a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
          }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
        d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
      } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function (c, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
        f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
      })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
      return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
      var c = a(this),
        d = c.attr("href"),
        e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
        f = e.data("modal") ? "toggle" : a.extend({
          remote: !/#/.test(d) && d
        }, e.data(), c.data());
      b.preventDefault(), e.modal(f, this).one("hide", function () {
        c.is(":visible") && c.focus()
      })
    }), a(document).on("show.bs.modal", ".modal", function () {
      a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
      a(document.body).removeClass("modal-open")
    })
  }(jQuery), + function (a) {
    "use strict";
    var b = function (a, b) {
      this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1
    }, b.prototype.init = function (b, c, d) {
      this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
      for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
        var g = e[f];
        if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
        else if ("manual" != g) {
          var h = "hover" == g ? "mouseenter" : "focus",
            i = "hover" == g ? "mouseleave" : "blur";
          this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
        }
      }
      this.options.selector ? this._options = a.extend({}, this.options, {
        trigger: "manual",
        selector: ""
      }) : this.fixTitle()
    }, b.prototype.getDefaults = function () {
      return b.DEFAULTS
    }, b.prototype.getOptions = function (b) {
      return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
        show: b.delay,
        hide: b.delay
      }), b
    }, b.prototype.getDelegateOptions = function () {
      var b = {},
        c = this.getDefaults();
      return this._options && a.each(this._options, function (a, d) {
        c[a] != d && (b[a] = d)
      }), b
    }, b.prototype.enter = function (b) {
      var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
      return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function () {
        "in" == c.hoverState && c.show()
      }, c.options.delay.show), void 0) : c.show()
    }, b.prototype.leave = function (b) {
      var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
      return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function () {
        "out" == c.hoverState && c.hide()
      }, c.options.delay.hide), void 0) : c.hide()
    }, b.prototype.show = function () {
      var b = a.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
        if (this.$element.trigger(b), b.isDefaultPrevented()) return;
        var c = this.tip();
        this.setContent(), this.options.animation && c.addClass("fade");
        var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
          e = /\s?auto?\s?/i,
          f = e.test(d);
        f && (d = d.replace(e, "") || "top"), c.detach().css({
          top: 0,
          left: 0,
          display: "block"
        }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
        var g = this.getPosition(),
          h = c[0].offsetWidth,
          i = c[0].offsetHeight;
        if (f) {
          var j = this.$element.parent(),
            k = d,
            l = document.documentElement.scrollTop || document.body.scrollTop,
            m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
            n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
            o = "body" == this.options.container ? 0 : j.offset().left;
          d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
        }
        var p = this.getCalculatedOffset(d, g, h, i);
        this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
      }
    }, b.prototype.applyPlacement = function (a, b) {
      var c, d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
      isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
      var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
      if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
        var k = 0;
        a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
      } else this.replaceArrow(j - f, j, "top");
      c && d.offset(a)
    }, b.prototype.replaceArrow = function (a, b, c) {
      this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function () {
      var a = this.tip(),
        b = this.getTitle();
      a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function () {
      function b() {
        "in" != c.hoverState && d.detach()
      }
      var c = this,
        d = this.tip(),
        e = a.Event("hide.bs." + this.type);
      return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
    }, b.prototype.fixTitle = function () {
      var a = this.$element;
      (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function () {
      return this.getTitle()
    }, b.prototype.getPosition = function () {
      var b = this.$element[0];
      return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
        width: b.offsetWidth,
        height: b.offsetHeight
      }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
      return "bottom" == a ? {
        top: b.top + b.height,
        left: b.left + b.width / 2 - c / 2
      } : "top" == a ? {
        top: b.top - d,
        left: b.left + b.width / 2 - c / 2
      } : "left" == a ? {
        top: b.top + b.height / 2 - d / 2,
        left: b.left - c
      } : {
        top: b.top + b.height / 2 - d / 2,
        left: b.left + b.width
      }
    }, b.prototype.getTitle = function () {
      var a, b = this.$element,
        c = this.options;
      return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function () {
      return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function () {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function () {
      this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function () {
      this.enabled = !0
    }, b.prototype.disable = function () {
      this.enabled = !1
    }, b.prototype.toggleEnabled = function () {
      this.enabled = !this.enabled
    }, b.prototype.toggle = function (b) {
      var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
      c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function () {
      this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof c && c;
        e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
      })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
      return a.fn.tooltip = c, this
    }
  }(jQuery), + function (a) {
    "use strict";
    var b = function (a, b) {
      this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
      return b.DEFAULTS
    }, b.prototype.setContent = function () {
      var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
      a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function () {
      return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function () {
      var a = this.$element,
        b = this.options;
      return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function () {
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function () {
      return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof c && c;
        e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
      })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
      return a.fn.popover = c, this
    }
  }(jQuery), + function (a) {
    "use strict";
  
    function b(c, d) {
      var e, f = a.proxy(this.process, this);
      this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }
    b.DEFAULTS = {
      offset: 10
    }, b.prototype.refresh = function () {
      var b = this.$element[0] == window ? "offset" : "position";
      this.offsets = a([]), this.targets = a([]);
      var c = this;
      this.$body.find(this.selector).map(function () {
        var d = a(this),
          e = d.data("target") || d.attr("href"),
          f = /^#\w/.test(e) && a(e);
        return f && f.length && [
          [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
        ] || null
      }).sort(function (a, b) {
        return a[0] - b[0]
      }).each(function () {
        c.offsets.push(this[0]), c.targets.push(this[1])
      })
    }, b.prototype.process = function () {
      var a, b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        d = c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
      if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
      for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
      this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
      var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
      d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
      })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
      return a.fn.scrollspy = c, this
    }, a(window).on("load", function () {
      a('[data-spy="scroll"]').each(function () {
        var b = a(this);
        b.scrollspy(b.data())
      })
    })
  }(jQuery), + function (a) {
    "use strict";
    var b = function (b) {
      this.element = a(b)
    };
    b.prototype.show = function () {
      var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");
      if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
        var e = c.find(".active:last a")[0],
          f = a.Event("show.bs.tab", {
            relatedTarget: e
          });
        if (b.trigger(f), !f.isDefaultPrevented()) {
          var g = a(d);
          this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
            b.trigger({
              type: "shown.bs.tab",
              relatedTarget: e
            })
          })
        }
      }
    }, b.prototype.activate = function (b, c, d) {
      function e() {
        f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
      }
      var f = c.find("> .active"),
        g = d && a.support.transition && f.hasClass("fade");
      g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
      })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
      return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
      b.preventDefault(), a(this).tab("show")
    })
  }(jQuery), + function (a) {
    "use strict";
    var b = function (c, d) {
      this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
      offset: 0
    }, b.prototype.checkPositionWithEventLoop = function () {
      setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function () {
      if (this.$element.is(":visible")) {
        var c = a(document).height(),
          d = this.$window.scrollTop(),
          e = this.$element.offset(),
          f = this.options.offset,
          g = f.top,
          h = f.bottom;
        "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
        var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
        this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
          top: document.body.offsetHeight - h - this.$element.height()
        }))
      }
    };
    var c = a.fn.affix;
    a.fn.affix = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof c && c;
        e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
      })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
      return a.fn.affix = c, this
    }, a(window).on("load", function () {
      a('[data-spy="affix"]').each(function () {
        var b = a(this),
          c = b.data();
        c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
      })
    })
  }(jQuery);; /*})'"*/ ; /*})'"*/
  ! function (t, e) {
    "use strict";
    if ("undefined" != typeof module && module.exports) {
      var n = "undefined" != typeof process,
        o = n && "electron" in process.versions;
      o ? t.BootstrapDialog = e(t.jQuery) : module.exports = e(require("jquery"), require("bootstrap"))
    } else "function" == typeof define && define.amd ? define("bootstrap-dialog", ["jquery", "bootstrap"], function (t) {
      return e(t)
    }) : t.BootstrapDialog = e(t.jQuery)
  }(this, function (t) {
    "use strict";
    var e = t.fn.modal.Constructor,
      n = function (t, n) {
        e.call(this, t, n)
      };
    n.getModalVersion = function () {
      var e = null;
      return e = "undefined" == typeof t.fn.modal.Constructor.VERSION ? "v3.1" : /3\.2\.\d+/.test(t.fn.modal.Constructor.VERSION) ? "v3.2" : /3\.3\.[1,2]/.test(t.fn.modal.Constructor.VERSION) ? "v3.3" : "v3.3.4"
    }, n.ORIGINAL_BODY_PADDING = parseInt(t("body").css("padding-right") || 0, 10), n.METHODS_TO_OVERRIDE = {}, n.METHODS_TO_OVERRIDE["v3.1"] = {}, n.METHODS_TO_OVERRIDE["v3.2"] = {
      hide: function (e) {
        if (e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented()) {
          this.isShown = !1;
          var n = this.getGlobalOpenedDialogs();
          0 === n.length && this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
        }
      }
    }, n.METHODS_TO_OVERRIDE["v3.3"] = {
      setScrollbar: function () {
        var t = n.ORIGINAL_BODY_PADDING;
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
      },
      resetScrollbar: function () {
        var t = this.getGlobalOpenedDialogs();
        0 === t.length && this.$body.css("padding-right", n.ORIGINAL_BODY_PADDING)
      },
      hideModal: function () {
        this.$element.hide(), this.backdrop(t.proxy(function () {
          var t = this.getGlobalOpenedDialogs();
          0 === t.length && this.$body.removeClass("modal-open"), this.resetAdjustments(), this.resetScrollbar(), this.$element.trigger("hidden.bs.modal")
        }, this))
      }
    }, n.METHODS_TO_OVERRIDE["v3.3.4"] = t.extend({}, n.METHODS_TO_OVERRIDE["v3.3"]), n.prototype = {
      constructor: n,
      getGlobalOpenedDialogs: function () {
        var e = [];
        return t.each(o.dialogs, function (t, n) {
          n.isRealized() && n.isOpened() && e.push(n)
        }), e
      }
    }, n.prototype = t.extend(n.prototype, e.prototype, n.METHODS_TO_OVERRIDE[n.getModalVersion()]);
    var o = function (e) {
      this.defaultOptions = t.extend(!0, {
        id: o.newGuid(),
        buttons: [],
        data: {},
        onshow: null,
        onshown: null,
        onhide: null,
        onhidden: null
      }, o.defaultOptions), this.indexedButtons = {}, this.registeredButtonHotkeys = {}, this.draggableData = {
        isMouseDown: !1,
        mouseOffset: {}
      }, this.realized = !1, this.opened = !1, this.initOptions(e), this.holdThisInstance()
    };
    return o.BootstrapDialogModal = n, o.NAMESPACE = "bootstrap-dialog", o.TYPE_DEFAULT = "type-default", o.TYPE_INFO = "type-info", o.TYPE_PRIMARY = "type-primary", o.TYPE_SUCCESS = "type-success", o.TYPE_WARNING = "type-warning", o.TYPE_DANGER = "type-danger", o.DEFAULT_TEXTS = {}, o.DEFAULT_TEXTS[o.TYPE_DEFAULT] = "Information", o.DEFAULT_TEXTS[o.TYPE_INFO] = "Information", o.DEFAULT_TEXTS[o.TYPE_PRIMARY] = "Information", o.DEFAULT_TEXTS[o.TYPE_SUCCESS] = "Success", o.DEFAULT_TEXTS[o.TYPE_WARNING] = "Warning", o.DEFAULT_TEXTS[o.TYPE_DANGER] = "Danger", o.DEFAULT_TEXTS.OK = "OK", o.DEFAULT_TEXTS.CANCEL = "Cancel", o.DEFAULT_TEXTS.CONFIRM = "Confirmation", o.SIZE_NORMAL = "size-normal", o.SIZE_SMALL = "size-small", o.SIZE_WIDE = "size-wide", o.SIZE_LARGE = "size-large", o.BUTTON_SIZES = {}, o.BUTTON_SIZES[o.SIZE_NORMAL] = "", o.BUTTON_SIZES[o.SIZE_SMALL] = "", o.BUTTON_SIZES[o.SIZE_WIDE] = "", o.BUTTON_SIZES[o.SIZE_LARGE] = "btn-lg", o.ICON_SPINNER = "glyphicon glyphicon-asterisk", o.defaultOptions = {
      type: o.TYPE_PRIMARY,
      size: o.SIZE_NORMAL,
      cssClass: "",
      title: null,
      message: null,
      nl2br: !0,
      closable: !0,
      closeByBackdrop: !0,
      closeByKeyboard: !0,
      spinicon: o.ICON_SPINNER,
      autodestroy: !0,
      draggable: !1,
      animate: !0,
      description: "",
      tabindex: -1
    }, o.configDefaultOptions = function (e) {
      o.defaultOptions = t.extend(!0, o.defaultOptions, e)
    }, o.dialogs = {}, o.openAll = function () {
      t.each(o.dialogs, function (t, e) {
        e.open()
      })
    }, o.closeAll = function () {
      t.each(o.dialogs, function (t, e) {
        e.close()
      })
    }, o.getDialog = function (t) {
      var e = null;
      return "undefined" != typeof o.dialogs[t] && (e = o.dialogs[t]), e
    }, o.setDialog = function (t) {
      return o.dialogs[t.getId()] = t, t
    }, o.addDialog = function (t) {
      return o.setDialog(t)
    }, o.moveFocus = function () {
      var e = null;
      t.each(o.dialogs, function (t, n) {
        e = n
      }), null !== e && e.isRealized() && e.getModal().focus()
    }, o.METHODS_TO_OVERRIDE = {}, o.METHODS_TO_OVERRIDE["v3.1"] = {
      handleModalBackdropEvent: function () {
        return this.getModal().on("click", {
          dialog: this
        }, function (t) {
          t.target === this && t.data.dialog.isClosable() && t.data.dialog.canCloseByBackdrop() && t.data.dialog.close()
        }), this
      },
      updateZIndex: function () {
        var e = 1040,
          n = 1050,
          i = 0;
        t.each(o.dialogs, function (t, e) {
          i++
        });
        var s = this.getModal(),
          a = s.data("bs.modal").$backdrop;
        return s.css("z-index", n + 20 * (i - 1)), a.css("z-index", e + 20 * (i - 1)), this
      },
      open: function () {
        return !this.isRealized() && this.realize(), this.getModal().modal("show"), this.updateZIndex(), this
      }
    }, o.METHODS_TO_OVERRIDE["v3.2"] = {
      handleModalBackdropEvent: o.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,
      updateZIndex: o.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,
      open: o.METHODS_TO_OVERRIDE["v3.1"].open
    }, o.METHODS_TO_OVERRIDE["v3.3"] = {}, o.METHODS_TO_OVERRIDE["v3.3.4"] = t.extend({}, o.METHODS_TO_OVERRIDE["v3.1"]), o.prototype = {
      constructor: o,
      initOptions: function (e) {
        return this.options = t.extend(!0, this.defaultOptions, e), this
      },
      holdThisInstance: function () {
        return o.addDialog(this), this
      },
      initModalStuff: function () {
        return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()), this.getModal().append(this.getModalDialog()), this.getModalDialog().append(this.getModalContent()), this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()), this
      },
      createModal: function () {
        var e = t('<div class="modal" role="dialog" aria-hidden="true"></div>');
        return e.prop("id", this.getId()), e.attr("aria-labelledby", this.getId() + "_title"), e
      },
      getModal: function () {
        return this.$modal
      },
      setModal: function (t) {
        return this.$modal = t, this
      },
      createModalDialog: function () {
        return t('<div class="modal-dialog"></div>')
      },
      getModalDialog: function () {
        return this.$modalDialog
      },
      setModalDialog: function (t) {
        return this.$modalDialog = t, this
      },
      createModalContent: function () {
        return t('<div class="modal-content"></div>')
      },
      getModalContent: function () {
        return this.$modalContent
      },
      setModalContent: function (t) {
        return this.$modalContent = t, this
      },
      createModalHeader: function () {
        return t('<div class="modal-header"></div>')
      },
      getModalHeader: function () {
        return this.$modalHeader
      },
      setModalHeader: function (t) {
        return this.$modalHeader = t, this
      },
      createModalBody: function () {
        return t('<div class="modal-body"></div>')
      },
      getModalBody: function () {
        return this.$modalBody
      },
      setModalBody: function (t) {
        return this.$modalBody = t, this
      },
      createModalFooter: function () {
        return t('<div class="modal-footer"></div>')
      },
      getModalFooter: function () {
        return this.$modalFooter
      },
      setModalFooter: function (t) {
        return this.$modalFooter = t, this
      },
      createDynamicContent: function (t) {
        var e = null;
        return e = "function" == typeof t ? t.call(t, this) : t, "string" == typeof e && (e = this.formatStringContent(e)), e
      },
      formatStringContent: function (t) {
        return this.options.nl2br ? t.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />") : t
      },
      setData: function (t, e) {
        return this.options.data[t] = e, this
      },
      getData: function (t) {
        return this.options.data[t]
      },
      setId: function (t) {
        return this.options.id = t, this
      },
      getId: function () {
        return this.options.id
      },
      getType: function () {
        return this.options.type
      },
      setType: function (t) {
        return this.options.type = t, this.updateType(), this
      },
      updateType: function () {
        if (this.isRealized()) {
          var t = [o.TYPE_DEFAULT, o.TYPE_INFO, o.TYPE_PRIMARY, o.TYPE_SUCCESS, o.TYPE_WARNING, o.TYPE_DANGER];
          this.getModal().removeClass(t.join(" ")).addClass(this.getType())
        }
        return this
      },
      getSize: function () {
        return this.options.size
      },
      setSize: function (t) {
        return this.options.size = t, this.updateSize(), this
      },
      updateSize: function () {
        if (this.isRealized()) {
          var e = this;
          this.getModal().removeClass(o.SIZE_NORMAL).removeClass(o.SIZE_SMALL).removeClass(o.SIZE_WIDE).removeClass(o.SIZE_LARGE), this.getModal().addClass(this.getSize()), this.getModalDialog().removeClass("modal-sm"), this.getSize() === o.SIZE_SMALL && this.getModalDialog().addClass("modal-sm"), this.getModalDialog().removeClass("modal-lg"), this.getSize() === o.SIZE_WIDE && this.getModalDialog().addClass("modal-lg"), t.each(this.options.buttons, function (n, o) {
            var i = e.getButton(o.id),
              s = ["btn-lg", "btn-sm", "btn-xs"],
              a = !1;
            if ("string" == typeof o.cssClass) {
              var d = o.cssClass.split(" ");
              t.each(d, function (e, n) {
                -1 !== t.inArray(n, s) && (a = !0)
              })
            }
            a || (i.removeClass(s.join(" ")), i.addClass(e.getButtonSize()))
          })
        }
        return this
      },
      getCssClass: function () {
        return this.options.cssClass
      },
      setCssClass: function (t) {
        return this.options.cssClass = t, this
      },
      getTitle: function () {
        return this.options.title
      },
      setTitle: function (t) {
        return this.options.title = t, this.updateTitle(), this
      },
      updateTitle: function () {
        if (this.isRealized()) {
          var t = null !== this.getTitle() ? this.createDynamicContent(this.getTitle()) : this.getDefaultText();
          this.getModalHeader().find("." + this.getNamespace("title")).html("").append(t).prop("id", this.getId() + "_title")
        }
        return this
      },
      getMessage: function () {
        return this.options.message
      },
      setMessage: function (t) {
        return this.options.message = t, this.updateMessage(), this
      },
      updateMessage: function () {
        if (this.isRealized()) {
          var t = this.createDynamicContent(this.getMessage());
          this.getModalBody().find("." + this.getNamespace("message")).html("").append(t)
        }
        return this
      },
      isClosable: function () {
        return this.options.closable
      },
      setClosable: function (t) {
        return this.options.closable = t, this.updateClosable(), this
      },
      setCloseByBackdrop: function (t) {
        return this.options.closeByBackdrop = t, this
      },
      canCloseByBackdrop: function () {
        return this.options.closeByBackdrop
      },
      setCloseByKeyboard: function (t) {
        return this.options.closeByKeyboard = t, this
      },
      canCloseByKeyboard: function () {
        return this.options.closeByKeyboard
      },
      isAnimate: function () {
        return this.options.animate
      },
      setAnimate: function (t) {
        return this.options.animate = t, this
      },
      updateAnimate: function () {
        return this.isRealized() && this.getModal().toggleClass("fade", this.isAnimate()), this
      },
      getSpinicon: function () {
        return this.options.spinicon
      },
      setSpinicon: function (t) {
        return this.options.spinicon = t, this
      },
      addButton: function (t) {
        return this.options.buttons.push(t), this
      },
      addButtons: function (e) {
        var n = this;
        return t.each(e, function (t, e) {
          n.addButton(e)
        }), this
      },
      getButtons: function () {
        return this.options.buttons
      },
      setButtons: function (t) {
        return this.options.buttons = t, this.updateButtons(), this
      },
      getButton: function (t) {
        return "undefined" != typeof this.indexedButtons[t] ? this.indexedButtons[t] : null
      },
      getButtonSize: function () {
        return "undefined" != typeof o.BUTTON_SIZES[this.getSize()] ? o.BUTTON_SIZES[this.getSize()] : ""
      },
      updateButtons: function () {
        return this.isRealized() && (0 === this.getButtons().length ? this.getModalFooter().hide() : this.getModalFooter().show().find("." + this.getNamespace("footer")).html("").append(this.createFooterButtons())), this
      },
      isAutodestroy: function () {
        return this.options.autodestroy
      },
      setAutodestroy: function (t) {
        this.options.autodestroy = t
      },
      getDescription: function () {
        return this.options.description
      },
      setDescription: function (t) {
        return this.options.description = t, this
      },
      setTabindex: function (t) {
        return this.options.tabindex = t, this
      },
      getTabindex: function () {
        return this.options.tabindex
      },
      updateTabindex: function () {
        return this.isRealized() && this.getModal().attr("tabindex", this.getTabindex()), this
      },
      getDefaultText: function () {
        return o.DEFAULT_TEXTS[this.getType()]
      },
      getNamespace: function (t) {
        return o.NAMESPACE + "-" + t
      },
      createHeaderContent: function () {
        var e = t("<div></div>");
        return e.addClass(this.getNamespace("header")), e.append(this.createTitleContent()), e.prepend(this.createCloseButton()), e
      },
      createTitleContent: function () {
        var e = t("<div></div>");
        return e.addClass(this.getNamespace("title")), e
      },
      createCloseButton: function () {
        var e = t("<div></div>");
        e.addClass(this.getNamespace("close-button"));
        var n = t('<button class="close">&times;</button>');
        return e.append(n), e.on("click", {
          dialog: this
        }, function (t) {
          t.data.dialog.close()
        }), e
      },
      createBodyContent: function () {
        var e = t("<div></div>");
        return e.addClass(this.getNamespace("body")), e.append(this.createMessageContent()), e
      },
      createMessageContent: function () {
        var e = t("<div></div>");
        return e.addClass(this.getNamespace("message")), e
      },
      createFooterContent: function () {
        var e = t("<div></div>");
        return e.addClass(this.getNamespace("footer")), e
      },
      createFooterButtons: function () {
        var e = this,
          n = t("<div></div>");
        return n.addClass(this.getNamespace("footer-buttons")), this.indexedButtons = {}, t.each(this.options.buttons, function (t, i) {
          i.id || (i.id = o.newGuid());
          var s = e.createButton(i);
          e.indexedButtons[i.id] = s, n.append(s)
        }), n
      },
      createButton: function (e) {
        var n = t('<button class="btn"></button>');
        return n.prop("id", e.id), n.data("button", e), "undefined" != typeof e.icon && "" !== t.trim(e.icon) && n.append(this.createButtonIcon(e.icon)), "undefined" != typeof e.label && n.append(e.label), n.addClass("undefined" != typeof e.cssClass && "" !== t.trim(e.cssClass) ? e.cssClass : "btn-default"), "undefined" != typeof e.hotkey && (this.registeredButtonHotkeys[e.hotkey] = n), n.on("click", {
          dialog: this,
          $button: n,
          button: e
        }, function (t) {
          var e = t.data.dialog,
            n = t.data.$button,
            o = n.data("button");
          return o.autospin && n.toggleSpin(!0), "function" == typeof o.action ? o.action.call(n, e, t) : void 0
        }), this.enhanceButton(n), "undefined" != typeof e.enabled && n.toggleEnable(e.enabled), n
      },
      enhanceButton: function (t) {
        return t.dialog = this, t.toggleEnable = function (t) {
          var e = this;
          return "undefined" != typeof t ? e.prop("disabled", !t).toggleClass("disabled", !t) : e.prop("disabled", !e.prop("disabled")), e
        }, t.enable = function () {
          var t = this;
          return t.toggleEnable(!0), t
        }, t.disable = function () {
          var t = this;
          return t.toggleEnable(!1), t
        }, t.toggleSpin = function (e) {
          var n = this,
            o = n.dialog,
            i = n.find("." + o.getNamespace("button-icon"));
          return "undefined" == typeof e && (e = !(t.find(".icon-spin").length > 0)), e ? (i.hide(), t.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))) : (i.show(), t.find(".icon-spin").remove()), n
        }, t.spin = function () {
          var t = this;
          return t.toggleSpin(!0), t
        }, t.stopSpin = function () {
          var t = this;
          return t.toggleSpin(!1), t
        }, this
      },
      createButtonIcon: function (e) {
        var n = t("<span></span>");
        return n.addClass(this.getNamespace("button-icon")).addClass(e), n
      },
      enableButtons: function (e) {
        return t.each(this.indexedButtons, function (t, n) {
          n.toggleEnable(e)
        }), this
      },
      updateClosable: function () {
        return this.isRealized() && this.getModalHeader().find("." + this.getNamespace("close-button")).toggle(this.isClosable()), this
      },
      onShow: function (t) {
        return this.options.onshow = t, this
      },
      onShown: function (t) {
        return this.options.onshown = t, this
      },
      onHide: function (t) {
        return this.options.onhide = t, this
      },
      onHidden: function (t) {
        return this.options.onhidden = t, this
      },
      isRealized: function () {
        return this.realized
      },
      setRealized: function (t) {
        return this.realized = t, this
      },
      isOpened: function () {
        return this.opened
      },
      setOpened: function (t) {
        return this.opened = t, this
      },
      handleModalEvents: function () {
        return this.getModal().on("show.bs.modal", {
          dialog: this
        }, function (t) {
          var e = t.data.dialog;
          if (e.setOpened(!0), e.isModalEvent(t) && "function" == typeof e.options.onshow) {
            var n = e.options.onshow(e);
            return n === !1 && e.setOpened(!1), n
          }
        }), this.getModal().on("shown.bs.modal", {
          dialog: this
        }, function (t) {
          var e = t.data.dialog;
          e.isModalEvent(t) && "function" == typeof e.options.onshown && e.options.onshown(e)
        }), this.getModal().on("hide.bs.modal", {
          dialog: this
        }, function (t) {
          var e = t.data.dialog;
          if (e.setOpened(!1), e.isModalEvent(t) && "function" == typeof e.options.onhide) {
            var n = e.options.onhide(e);
            return n === !1 && e.setOpened(!0), n
          }
        }), this.getModal().on("hidden.bs.modal", {
          dialog: this
        }, function (e) {
          var n = e.data.dialog;
          n.isModalEvent(e) && "function" == typeof n.options.onhidden && n.options.onhidden(n), n.isAutodestroy() && (n.setRealized(!1), delete o.dialogs[n.getId()], t(this).remove()), o.moveFocus()
        }), this.handleModalBackdropEvent(), this.getModal().on("keyup", {
          dialog: this
        }, function (t) {
          27 === t.which && t.data.dialog.isClosable() && t.data.dialog.canCloseByKeyboard() && t.data.dialog.close()
        }), this.getModal().on("keyup", {
          dialog: this
        }, function (e) {
          var n = e.data.dialog;
          if ("undefined" != typeof n.registeredButtonHotkeys[e.which]) {
            var o = t(n.registeredButtonHotkeys[e.which]);
            !o.prop("disabled") && o.focus().trigger("click")
          }
        }), this
      },
      handleModalBackdropEvent: function () {
        return this.getModal().on("click", {
          dialog: this
        }, function (e) {
          t(e.target).hasClass("modal-backdrop") && e.data.dialog.isClosable() && e.data.dialog.canCloseByBackdrop() && e.data.dialog.close()
        }), this
      },
      isModalEvent: function (t) {
        return "undefined" != typeof t.namespace && "bs.modal" === t.namespace
      },
      makeModalDraggable: function () {
        return this.options.draggable && (this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown", {
          dialog: this
        }, function (t) {
          var e = t.data.dialog;
          e.draggableData.isMouseDown = !0;
          var n = e.getModalDialog().offset();
          e.draggableData.mouseOffset = {
            top: t.clientY - n.top,
            left: t.clientX - n.left
          }
        }), this.getModal().on("mouseup mouseleave", {
          dialog: this
        }, function (t) {
          t.data.dialog.draggableData.isMouseDown = !1
        }), t("body").on("mousemove", {
          dialog: this
        }, function (t) {
          var e = t.data.dialog;
          e.draggableData.isMouseDown && e.getModalDialog().offset({
            top: t.clientY - e.draggableData.mouseOffset.top,
            left: t.clientX - e.draggableData.mouseOffset.left
          })
        })), this
      },
      realize: function () {
        return this.initModalStuff(), this.getModal().addClass(o.NAMESPACE).addClass(this.getCssClass()), this.updateSize(), this.getDescription() && this.getModal().attr("aria-describedby", this.getDescription()), this.getModalFooter().append(this.createFooterContent()), this.getModalHeader().append(this.createHeaderContent()), this.getModalBody().append(this.createBodyContent()), this.getModal().data("bs.modal", new n(this.getModal(), {
          backdrop: "static",
          keyboard: !1,
          show: !1
        })), this.makeModalDraggable(), this.handleModalEvents(), this.setRealized(!0), this.updateButtons(), this.updateType(), this.updateTitle(), this.updateMessage(), this.updateClosable(), this.updateAnimate(), this.updateSize(), this.updateTabindex(), this
      },
      open: function () {
        return !this.isRealized() && this.realize(), this.getModal().modal("show"), this
      },
      close: function () {
        return !this.isRealized() && this.realize(), this.getModal().modal("hide"), this
      }
    }, o.prototype = t.extend(o.prototype, o.METHODS_TO_OVERRIDE[n.getModalVersion()]), o.newGuid = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var e = 16 * Math.random() | 0,
          n = "x" === t ? e : 3 & e | 8;
        return n.toString(16)
      })
    }, o.show = function (t) {
      return new o(t).open()
    }, o.alert = function () {
      var e = {},
        n = {
          type: o.TYPE_PRIMARY,
          title: null,
          message: null,
          closable: !1,
          draggable: !1,
          buttonLabel: o.DEFAULT_TEXTS.OK,
          callback: null
        };
      return e = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? t.extend(!0, n, arguments[0]) : t.extend(!0, n, {
        message: arguments[0],
        callback: "undefined" != typeof arguments[1] ? arguments[1] : null
      }), new o({
        type: e.type,
        title: e.title,
        message: e.message,
        closable: e.closable,
        draggable: e.draggable,
        data: {
          callback: e.callback
        },
        onhide: function (t) {
          !t.getData("btnClicked") && t.isClosable() && "function" == typeof t.getData("callback") && t.getData("callback")(!1)
        },
        buttons: [{
          label: e.buttonLabel,
          action: function (t) {
            return t.setData("btnClicked", !0), "function" == typeof t.getData("callback") && t.getData("callback").call(this, !0) === !1 ? !1 : t.close()
          }
        }]
      }).open()
    }, o.confirm = function () {
      var e = {},
        n = {
          type: o.TYPE_PRIMARY,
          title: null,
          message: null,
          closable: !1,
          draggable: !1,
          btnCancelLabel: o.DEFAULT_TEXTS.CANCEL,
          btnOKLabel: o.DEFAULT_TEXTS.OK,
          btnOKClass: null,
          callback: null
        };
      return e = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? t.extend(!0, n, arguments[0]) : t.extend(!0, n, {
        message: arguments[0],
        closable: !1,
        buttonLabel: o.DEFAULT_TEXTS.OK,
        callback: "undefined" != typeof arguments[1] ? arguments[1] : null
      }), null === e.btnOKClass && (e.btnOKClass = ["btn", e.type.split("-")[1]].join("-")), new o({
        type: e.type,
        title: e.title,
        message: e.message,
        closable: e.closable,
        draggable: e.draggable,
        data: {
          callback: e.callback
        },
        buttons: [{
          label: e.btnCancelLabel,
          action: function (t) {
            return "function" == typeof t.getData("callback") && t.getData("callback").call(this, !1) === !1 ? !1 : t.close()
          }
        }, {
          label: e.btnOKLabel,
          cssClass: e.btnOKClass,
          action: function (t) {
            return "function" == typeof t.getData("callback") && t.getData("callback").call(this, !0) === !1 ? !1 : t.close()
          }
        }]
      }).open()
    }, o.warning = function (t, e) {
      return new o({
        type: o.TYPE_WARNING,
        message: t
      }).open()
    }, o.danger = function (t, e) {
      return new o({
        type: o.TYPE_DANGER,
        message: t
      }).open()
    }, o.success = function (t, e) {
      return new o({
        type: o.TYPE_SUCCESS,
        message: t
      }).open()
    }, o
  });; /*})'"*/ ; /*})'"*/
  /*!
   * jQuery Cookie Plugin v1.4.1
   * https://github.com/carhartl/jquery-cookie
   *
   * Copyright 2013 Klaus Hartl
   * Released under the MIT license
   */
  (function (factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD
      define(['jquery'], factory);
    } else if (typeof exports === 'object') {
      // CommonJS
      factory(require('jquery'));
    } else {
      // Browser globals
      factory(jQuery);
    }
  }(function ($) {
  
    var pluses = /\+/g;
  
    function encode(s) {
      return config.raw ? s : encodeURIComponent(s);
    }
  
    function decode(s) {
      return config.raw ? s : decodeURIComponent(s);
    }
  
    function stringifyCookieValue(value) {
      return encode(config.json ? JSON.stringify(value) : String(value));
    }
  
    function parseCookieValue(s) {
      if (s.indexOf('"') === 0) {
        // This is a quoted cookie as according to RFC2068, unescape...
        s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      }
  
      try {
        // Replace server-side written pluses with spaces.
        // If we can't decode the cookie, ignore it, it's unusable.
        // If we can't parse the cookie, ignore it, it's unusable.
        s = decodeURIComponent(s.replace(pluses, ' '));
        return config.json ? JSON.parse(s) : s;
      } catch (e) {}
    }
  
    function read(s, converter) {
      var value = config.raw ? s : parseCookieValue(s);
      return $.isFunction(converter) ? converter(value) : value;
    }
  
    var config = $.cookie = function (key, value, options) {
  
      // Write
  
      if (value !== undefined && !$.isFunction(value)) {
        options = $.extend({}, config.defaults, options);
  
        if (typeof options.expires === 'number') {
          var days = options.expires,
            t = options.expires = new Date();
          t.setTime(+t + days * 864e+5);
        }
  
        return (document.cookie = [
          encode(key), '=', stringifyCookieValue(value),
          options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
          options.path ? '; path=' + options.path : '',
          options.domain ? '; domain=' + options.domain : '',
          options.secure ? '; secure' : ''
        ].join(''));
      }
  
      // Read
  
      var result = key ? undefined : {};
  
      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling $.cookie().
      var cookies = document.cookie ? document.cookie.split('; ') : [];
  
      for (var i = 0, l = cookies.length; i < l; i++) {
        var parts = cookies[i].split('=');
        var name = decode(parts.shift());
        var cookie = parts.join('=');
  
        if (key && key === name) {
          // If second argument (value) is a function it's a converter...
          result = read(cookie, value);
          break;
        }
  
        // Prevent storing a cookie that we couldn't decode.
        if (!key && (cookie = read(cookie)) !== undefined) {
          result[name] = cookie;
        }
      }
  
      return result;
    };
  
    config.defaults = {};
  
    $.removeCookie = function (key, options) {
      if ($.cookie(key) === undefined) {
        return false;
      }
  
      // Must not alter options, thus extending a fresh object...
      $.cookie(key, '', $.extend({}, options, {
        expires: -1
      }));
      return !$.cookie(key);
    };
  
  }));
  
  ; /*})'"*/ ; /*})'"*/
  /*
   * jquery-match-height 0.7.0 by @liabru
   * http://brm.io/jquery-match-height/
   * License MIT
   */
  ! function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(function (t) {
    var e = -1,
      o = -1,
      i = function (t) {
        return parseFloat(t) || 0
      },
      a = function (e) {
        var o = 1,
          a = t(e),
          n = null,
          r = [];
        return a.each(function () {
          var e = t(this),
            a = e.offset().top - i(e.css("margin-top")),
            s = r.length > 0 ? r[r.length - 1] : null;
          null === s ? r.push(e) : Math.floor(Math.abs(n - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), n = a
        }), r
      },
      n = function (e) {
        var o = {
          byRow: !0,
          property: "height",
          target: null,
          remove: !1
        };
        return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
      },
      r = t.fn.matchHeight = function (e) {
        var o = n(e);
        if (o.remove) {
          var i = this;
          return this.css(o.property, ""), t.each(r._groups, function (t, e) {
            e.elements = e.elements.not(i)
          }), this
        }
        return this.length <= 1 && !o.target ? this : (r._groups.push({
          elements: this,
          options: o
        }), r._apply(this, o), this)
      };
    r.version = "0.7.0", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
      r._afterUpdate = null, r._rows = a, r._parse = i, r._parseOptions = n, r._apply = function (e, o) {
        var s = n(o),
          h = t(e),
          l = [h],
          c = t(window).scrollTop(),
          p = t("html").outerHeight(!0),
          d = h.parents().filter(":hidden");
        return d.each(function () {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
          }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
            var e = t(this),
              o = e.css("display");
            "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
              display: o,
              "padding-top": "0",
              "padding-bottom": "0",
              "margin-top": "0",
              "margin-bottom": "0",
              "border-top-width": "0",
              "border-bottom-width": "0",
              height: "100px",
              overflow: "hidden"
            })
          }), l = a(h), h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
          })), t.each(l, function (e, o) {
            var a = t(o),
              n = 0;
            if (s.target) n = s.target.outerHeight(!1);
            else {
              if (s.byRow && a.length <= 1) return void a.css(s.property, "");
              a.each(function () {
                var e = t(this),
                  o = e.attr("style"),
                  i = e.css("display");
                "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                var a = {
                  display: i
                };
                a[s.property] = "", e.css(a), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
              })
            }
            a.each(function () {
              var e = t(this),
                o = 0;
              s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, n - o + "px"))
            })
          }), d.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
          }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
          this
      }, r._applyDataApi = function () {
        var e = {};
        t("[data-match-height], [data-mh]").each(function () {
          var o = t(this),
            i = o.attr("data-mh") || o.attr("data-match-height");
          i in e ? e[i] = e[i].add(o) : e[i] = o
        }), t.each(e, function () {
          this.matchHeight(!0)
        })
      };
    var s = function (e) {
      r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
        r._apply(this.elements, this.options)
      }), r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function (i, a) {
      if (a && "resize" === a.type) {
        var n = t(window).width();
        if (n === e) return;
        e = n;
      }
      i ? -1 === o && (o = setTimeout(function () {
        s(a), o = -1
      }, r._throttle)) : s(a)
    }, t(r._applyDataApi), t(window).bind("load", function (t) {
      r._update(!1, t)
    }), t(window).bind("resize orientationchange", function (t) {
      r._update(!0, t)
    })
  });; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-api.js
   * @desc API functions from flourish theme
   * - Utility functions for theme
   **/
  (function ($) {
    Drupal.flTheme = {};
  
    //Flourish theme specific scripts
    Drupal.behaviors.flourishApi = {
      attach: function (context, settings) {}
    };
  
    /****
     * @desc Helper function freplacing static HTML tag with SVG
     * Helpful if you want to move IMG tag with some SVG element.
     */
    Drupal.theme.icoSvgReplace = function (svgSelector, svgName) {
      $(svgSelector).each(function (e) {
        $(this).once("flIcoSvg").replaceWith("<svg class='ico-icon " + svgName + "'><use xlink:href='#" + svgName + "'></use></svg>");
      });
    };
    /****
     * @desc Helper function freplacing static HTML tag with SVG
     * Helpful if you want to move IMG tag with some SVG element.
     */
    Drupal.theme.svgReplace = function (svgSelector, svgName) {
      var $svg_path = Drupal.settings.basePath + "profiles/flourish/themes/custom/flourish_rem/images/svg/fl-icos-defs.svg";
      $(svgSelector).each(function (e) {
        $(this).once("flSvg").replaceWith("<svg class='fl-svg " + svgName + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='" + $svg_path + "#" + svgName + "'></use></svg>");
      });
    };
  
    /****
     * @desc Helper function freplacing static HTML tag with SVG
     * Helpful if you want to move IMG tag with some SVG element.
     */
    Drupal.theme.svgAppend = function (svgSelector, svgName) {
      var $svg_path = Drupal.settings.basePath + "profiles/flourish/themes/custom/flourish_rem/images/svg/fl-icos-defs.svg";
      $(svgSelector).each(function (e) {
        $(this).once("flSvg").append("<svg class='fl-svg " + svgName + "'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='" + $svg_path + "#" + svgName + "'></use></svg>");
      });
    };
  
    /****
     * @desc add loader
     */
    Drupal.theme.addLoader = function () {
      var filterThrobber = "<div id='global-throbber' class='global-throbber'><div class='ajax-progress-throbber'><div class='throbber'></div></div></div>";
      $("body").append(filterThrobber);
      $("#global-throbber").fadeTo("fast", 0.5);
    };
    /****
     * @desc add loader
     */
    Drupal.theme.removeLoader = function () {
      $("#global-throbber").remove();
    };
  
    /****
     * @desc Helper function for message dialogs
     */
    Drupal.theme.flmsg = function (messageTxt, titleTxt) {
      BootstrapDialog.closeAll();
      var dialog = new BootstrapDialog({
        message: messageTxt,
        title: Drupal.t("Information"),
        cssClass: "fl-dialog",
        onshown: function (dialogRef) {
          setTimeout(function () {
            dialogRef.close();
          }, 3000);
        }
      });
      dialog.realize();
      dialog.open();
    };
  
  
    Drupal.flTheme.get_surface_value = function () {
      var surface_value = [];
      $("input[name='surface_usage']:checked").each(function () {
        surface_value.push(this.value);
      });
      return surface_value.join(",");
    };
  
  
    Drupal.flTheme.get_surface_filter_area = function () {
      var surface_count = $("input[name=surface_usage]:checked").length,
        surface_value = [];
      if (surface_count == 0) {
        surface_value.push({
          "id": "notset",
          "label": "notset"
        });
      } else if (surface_count == 1) {
        $("input[name='surface_usage']:checked").each(function () {
          surface_value.push({
            "id": this.value,
            "label": $(this).attr("data-label")
          });
        });
      } else {
        surface_value.push({
          "id": "multiple",
          "label": Drupal.t("Surface")
        });
      }
      return surface_value;
    };
  
    Drupal.flTheme.set_filter_area = function (room_type_id, room_type_label, surface_id, surface_label) {
      var label_content = "",
        filterReset = $(".filter-region .filter-reset");
      label_content += "<div class='fl-color-filters'>";
      if ($("input:radio[name='room_type']").length) {
        if ((room_type_label != "notset") && (room_type_id != undefined)) {
          label_content += "<div id='selected_room_type' class='fl-color-selections'><span class='fltr-selection' id='" + room_type_id + "' data-tid='" + room_type_id + "'>" + room_type_label + "<a class='remove reset-filter reset-color-filter-room-type' id='" + room_type_id + "' data-tid='" + room_type_id + "' data-field='selected_room_type' data-fname='" + room_type_label + "'>x</a></span></div>";
        }
      }
      if ($("input:checkbox[name='surface_usage']").length) {
        if ((surface_label != "notset") && (surface_id != undefined)) {
          label_content += "<div id='selected_surface' class='fl-color-selections'><span class='fltr-selection' id='" + surface_id + "' data-tid='" + surface_id + "'>" + surface_label + "<a class='remove reset-filter reset-color-filter-surface' id='" + surface_id + "' data-tid='" + surface_id + "' data-field='selected_surface' data-fname='" + surface_label + "'>x</a></span></div>";
          label_content += "</div>";
        }
      }
      $(".page-colors-listing #filter-selections").html(label_content);
      if ($(".filter-selections .fltr-selection").length > 0) {
        filterReset.show();
      } else {
        filterReset.hide();
      }
    };
  
    //Set Hue visible for filters
    Drupal.flTheme.set_hue_based_on_filter = function () {
      var hasContent = 1;
  
      var current_url = window.location.href;
      if (current_url.indexOf("product") === -1) {
        $(".color-box").each(function () {
          var hid = $(this).attr("data-id");
          var hue_count = $("input#hue_count_" + hid).val();
          if (hue_count == 0) {
            $(this).addClass("not-available");
          } else {
            $(this).removeClass("not-available");
          }
        });
      }
      $(".color-box").each(function () {
        if (($(this).hasClass("not-available")) && ($(this).hasClass("selected"))) {
          hasContent = 0;
          $(".sub-color-tab").hide();
          $(".main-color-tab").hide();
        }
      });
      if (hasContent == 0) {
        $("#color-box-container").hide();
        $(".main-color-tab").hide();
        $(".color-box").each(function () {
          if (!$(this).hasClass("not-available")) {
            $(this).addClass("selected");
            $(this).trigger("click");
            return false;
          }
        });
      }
    };
    /**Utility function to set style: css color inline based on contrast*/
    Drupal.flTheme.setTextColor = function () {
      $(".color-text").each(function (index, value) {
        $element = $(this);
        setElementTextColor($element);
      });
    };
  
    // Adds the product to shopping list.	
    $("body").on("click", ".add-to-shoppinglist", function () {
      var nid = $(this).data("nid");
      var size = $(this).data("size");
      var quantity = $(this).data("quantity");
      var color = $(this).data("color");
      var product_package = $(this).data("product-package");
      $.ajax({
        context: this,
        cache: false,
        type: 'GET',
        data: {
          nid: nid,
          size: size,
          quantity: quantity,
          color: color,
          product_package: product_package
        },
        url: "/ajax/add-to-shoppinglist",
        success: function () {
          notificationBars.notifyShoppingList(Drupal.settings.navbar_details.sl_notification_text,
            Drupal.settings.navbar_details.sl_notification_link_text,
            Drupal.settings.navbar_details.sl_url);
        },
        error: Â functionÂ(request, Â status, Â error) Â {
          Drupal.theme("flmsg", Drupal.t("Error: Item has not been added to your shopping list"));
        },
      });
    });
  
    // On modal show and hide toggle class.
    $(".modal").on("shown.bs.modal", function () {
      $("html, body").addClass("modal-open");
    });
    $(".modal").on("hidden.bs.modal", function () {
      $("html, body").removeClass("modal-open");
    });
  
  }(jQuery));
  
  var $ = jQuery;
  
  function eventAnaly() {
    if (typeof $("#colourInfo > a").data("colorname") != "undefined" && $("#colourInfo > a").data("colorname") != "") {
      analyticsEventCall("Colour picker", "Read more", upperFirsctchar($("#colourInfo > a").data("colorname")) + "|" + $("#colourInfo > a").data("glcolorid"), undefined, false);
    }
  }
  
  
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  
  function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == "block" || e.style.display == "") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
    $(document).ready(function () {
      $("#color-detail-info").hide();
    });
  }
  
  function toggle_color_text(id) {
    if ($("." + id).is(":visible")) {
      $(".color-box-child").css("width", 61);
    } else {
      $(".color-box-child").css("width", 150);
      $(".color-box-child").each(function (index, value) {
        var rgb = $(this).attr("data-id"),
          bg_text = contrastingColor(rgb);
        $(this).css("color", "#" + bg_text);
        $(this).css("stroke", "#" + bg_text);
      });
    }
    $("." + id).toggle();
  }
  
  
  function close_color_info() {
    $("#color-detail-info").hide();
  }
  
  
  function show_color_info(rgb, title) {
    var bg_text = contrastingColor(rgb);
    $("#color-detail-info").show();
    $("#color-info-name").html(title);
    $("#selected_rgb").val(rgb);
    $("#selected_rgb_title").val(title);
    $("#color-info-bg").css({
      "background-color": "#" + rgb,
      "color": "#" + bg_text
    });
    return false;
  }
  
  function filter_product_rgb() {
    var rgb = $("#selected_rgb").val(),
      title = escape($("#selected_rgb_title").val()),
      path = window.location.pathname,
      url = path + "?mefibs-form-cmi-products-rgb-field_rgb_value=" + rgb;
    $.cookie("cmi_rgb_title", title, {
      path: "/"
    });
    $("#edit-mefibs-form-cmi-products-rgb-field-rgb-value").val(rgb);
    $("#product-selected-color-text").html(unescape(title));
    var bg_text_current = contrastingColor(rgb);
    $("#product-selected-color").css("background-color", "#" + rgb);
    $("#product-selected-color-text").css("color", "#" + bg_text_current);
    $("#edit-mefibs-form-cmi-products-rgb-field-rgb-value").trigger("change");
    close_color_info();
    get_hue_rgb_panel();
    $("#product-selected-color-text-clear").show();
  }
  
  
  function get_product_rgb() {
    var rgb = $("#selected_rgb").val(),
      title = escape($("#selected_rgb_title").val()),
      url = "/cmi-products?mefibs-form-cmi-products-rgb-field_rgb_value=" + rgb;
    $.cookie("cmi_rgb_title", title, {
      path: "/"
    });
    window.location.href = url;
  }
  
  
  function get_hue_rgb_panel() {
    $("#hue-rgb-panel-selector,.view-id-color_display").show();
    $("#display_color_product").slideToggle();
  }
  
  
  function contrastingColor(color) {
    return (luma(color) >= 165) ? "666" : "FFF";
  }
  
  // color can be a hx string or an array of RGB values 0-255
  function luma(color) {
    var rgb = (typeof color === "string") ? hexToRGBArray(color) : color;
    return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]); // SMPTE C, Rec. 709 weightings
  }
  
  
  function getQueryParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  
  
  function renderColors() {
    $(".view-id-search_colors .view-content .color-box-child").add(".view-id-multilingual_search .view-content .color-box-child").each(function (index, value) {
      var rgb = $(this).attr("data-rgb");
      $(this).addClass("col-md-2 col-xs-12");
      $(this).css("background-color", "#" + rgb);
    });
  }
  
  //Function that validates email address through a regular expression.
  function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
      return true;
    } else {
      return false;
    }
  }
  
  //Function to convert 1st chaaracter to uppercase
  function upperFirsctchar(str) {
    if (isNaN(parseInt(str))) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }
  
  
  function setElementTextColor($element) {
    var rgb = $element.attr("data-rgb"),
      bg_text = contrastingColor(rgb);
    $element.css("color", "#" + bg_text);
    $element.css("stroke", "#" + bg_text);
  }
  
  
  function getScrapbookCount() {
    $.ajax({
      type: "GET",
      dataType: "text",
      url: Drupal.settings.basePath + "get-scrapbook-count",
      success: function (data) {
        $(".desktop-icon div a span").html(data);
      }
    });
  }
  
  
  function attachAddToScrapbook() {
    $("body").on("click", ".scrap-book-add-color", function () {
      $element = $(this);
      var cid = $element.attr("data-colorid"),
        type = $element.attr("data-type");
      if ($("body").hasClass("page-node")) {
        if (typeof $(".page-header").text() != "undefined" && $(".page-header").text() != "") {
          analyticsEventCall("Scrapbook", "Save colour", $(".page-header").text() + " | " + cid, undefined, false);
        }
      } else if ($("body").hasClass("page-colors-listing")) {
        if (typeof $(".colour-info-link").data("colorname") != "undefined" && $(".colour-info-link").data("colorname") != "") {
          analyticsEventCall("Scrapbook", "Save colour", $(".colour-info-link").data("colorname") + " | " + cid, undefined, false);
        }
      }
      var url = Drupal.settings.basePath + "platform-scrapbook-add-ajax?cid=" + cid + "&type=" + type;
  
      xhr = $.ajax({
        type: "GET",
        dataType: "html",
        context: this,
        url: url,
        success: function (data) {
          var objColor = JSON.parse(data),
            objSize = objColor.data.size;
          $(".desktop-icon div a span").html(objSize);
          Drupal.theme("flmsg", Drupal.t("We've added your colour to 'My Notes'."));
          $element.addClass("fl-in-sb");
          $(".scrap-color-" + cid).addClass("fl-in-sb");
          $(".color-box-child-" + cid).attr("data-scrap", "set").addClass("fl-cb-in-sb");
  
        }
      });
    });
  }
  
  
  function contrastingColor(color) {
    return (luma(color) >= 165) ? "666" : "FFF";
  }
  
  // color can be a hx string or an array of RGB values 0-255
  function luma(color) {
    var rgb = (typeof color === "string") ? hexToRGBArray(color) : color;
    return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]); // SMPTE C, Rec. 709 weightings
  }
  
  /***/
  function flpad(str, max) {
    str = str.toString();
    return str.length < max ? flpad("0" + str, max) : str;
  }
  
  /***/
  function hexToRGBArray(color) {
    if (color.length !== 6) {
      color = flpad(color, 6);
    }
    if (color.length === 3) {
      color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2);
    }
  
    var rgb = [];
    for (var i = 0; i <= 2; i++)
      rgb[i] = parseInt(color.substr(i * 2, 2), 16);
    return rgb;
  }
  
  
  function set_color_scrap_book(colorid, type, current) {
    var xhr;
    var cid = colorid;
    if ($("body").hasClass("page-colors-listing")) {
      if (typeof $("#colourInfo > a").data("colorname") != "undefined" && $("#colourInfo > a").data("colorname") != "") {
        analyticsEventCall("Scrapbook", "Save colour", upperFirsctchar($("#colourInfo > a").data("colorname")) + " | " + cid, undefined, false);
      }
    }
    var url = Drupal.settings.basePath + "platform-scrapbook-add-ajax?cid=" + cid + "&type=" + type;
    xhr = $.ajax({
      type: "GET",
      dataType: "html",
      url: url,
      success: function (data) {
        var objColor = JSON.parse(data),
          objSize = objColor.data.size;
        $(".desktop-icon div a span").html(objSize);
        notificationBars.notifyFavourites(Drupal.settings.navbar_details.sb_color_notification_text,
          Drupal.settings.navbar_details.sb_notification_link_text,
          Drupal.settings.navbar_details.sb_url);
        var currentclass = current.getAttribute("class");
        currentclass = currentclass + " fl-in-sb";
        current.setAttribute("class", currentclass);
        var currentdColorid = current.getAttribute("data-colorid");
        //set teal for info section
        $(".scrap-color-" + currentdColorid).addClass("fl-in-sb");
        $(".color-box-child-" + currentdColorid).attr("data-scrap", "set").addClass("fl-cb-in-sb");
      }
    });
  }
  
  /****
   * @desc Product status modal
   */
  Drupal.theme.productStatusMsg = function (messageTxt) {
    var msg = "<div id='productStatusModal' class='modal fade productStatus-modal in' role='dialog' aria-hidden='false' style='display: block;'>" + "<div class='modal-dialog productStatus-modal__dialog'>" + "<div class='modal-content productStatus-modal__content'>" + "<a class='close productStatus-modal__close' data-dismiss='modal' title='close'>" + "<svg class='icon icon-close-big'>" + "<use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#icon-close-big'></use>" + "</svg>" + "</a>" + "<div class='row'>" + "<div class='col-xs-9'>" + "<p class='productStatus-modal__description'>" + messageTxt + "</p>" + "<p class='productStatus-modal__description'>" + Drupal.t('Please try a different size') + "</p>" + "</div>" + "<div class='col-xs-12'>" + "<p class='productStatus-modal__description productStatus_border text-center'>" + Drupal.t("Or") + "</p>" + "<p class='text-center'><a class='green-btn-link' href='/" + Drupal.settings.site_lang + "/" + Drupal.t('storefinder') + "'>" + Drupal.t('Find it in our physical store') + "</a></p>" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>";
    $("body").append(msg);
    $("#productStatusModal").modal("toggle");
  };
  
  /**
   * @desc Language Selector modal
   */
  Drupal.theme.languageSelector = function (multilingulaData) {
    var lang_switcher_modal = "<div id='languageModal' class='modal fade language-modal' role='dialog' style='display: block; padding-right: 17px;'>" +
      "<div class='modal-dialog language-modal__dialog'>" +
      "<div class='modal-content language-modal__content'>" +
      "<div class='language-modal__options'>" +
      "<button type='button' data-dismiss='modal' value='" + multilingulaData['other_lang'] + "' class='btn btn-secondary language-modal__option language-modal__change'>" + multilingulaData['alsoInLangName'] + "</button>" +
      "<span class='margin-bottom-xs' style='display: block;'></span>" +
      "<button type='button' data-dismiss='modal' value='" + Drupal.settings.site_lang + "' class='btn btn-secondary language-modal__option language-modal__change'>" + multilingulaData['continueToLangName'] + "</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    $("body").append(lang_switcher_modal);
    $("#languageModal").modal({
      backdrop: "static",
      keyboard: false
    });
  };
  
  // Clear the filters.
  function clear_filters() {
    $.ajax({
      type: "POST",
      url: Drupal.settings.basePath + 'reset-filters/ajax',
    });
  }; /*})'"*/ ; /*})'"*/
  (function ($) {
    Drupal.behaviors.flQuestions = {
      attach: function (context, settings) {
        if ($('.top-menu-search').length) {
          $('.top-menu-search').attr('data-toggle', 'modal');
          $('.top-menu-search').attr('data-target', '.search-Modal');
        }
      }
    };
  
    // Manual crop image cache issue, adding query parameter to the Img URL
    window.addEventListener("load", function (event) {
      if ($('.manualcrop-preview img').length > 0) {
        var manualcrop_preview_img = $('.manualcrop-preview img').attr('src');
        manualcrop_preview_img = manualcrop_preview_img + ((manualcrop_preview_img.indexOf('?') == -1) ? '?tr=' + new Date().getTime() : '&tr=' + new Date().getTime());
        $('.manualcrop-preview img').attr('src', manualcrop_preview_img);
      }
  
      if ($('.manualcrop-preview-cropped img').length > 0) {
        var manualcrop_preview_cropped = $('.manualcrop-preview-cropped img').attr('src');
        manualcrop_preview_cropped = manualcrop_preview_cropped + ((manualcrop_preview_cropped.indexOf('?') == -1) ? '?tr=' + new Date().getTime() : '&tr=' + new Date().getTime());
        $('.manualcrop-preview-cropped img').attr('src', manualcrop_preview_cropped);
      }
    });
  
  
    $('.manualcrop-style-select').change(function () {
      if ($('.manualcrop-instantpreview img').length > 0) {
        var manualcrop_instantpreview = $('.manualcrop-instantpreview img').attr('src');
        manualcrop_instantpreview = manualcrop_instantpreview + ((manualcrop_instantpreview.indexOf('?') == -1) ? '?tr=' + new Date().getTime() : '&tr=' + new Date().getTime());
        $('.manualcrop-instantpreview img').attr('src', manualcrop_instantpreview);
      }
  
      if ($('.manualcrop-image-holder img').length > 0) {
        var manualcrop_image_holder = $('.manualcrop-image-holder img').attr('src');
        manualcrop_image_holder = manualcrop_image_holder + ((manualcrop_image_holder.indexOf('?') == -1) ? '?tr=' + new Date().getTime() : '&tr=' + new Date().getTime());
        $('.manualcrop-image-holder img').attr('src', manualcrop_image_holder);
      }
    });
  }(jQuery));; /*})'"*/ ; /*})'"*/
  (function ($) {
  
    Drupal.behaviors.panopolyMagic = {
      attach: function (context, settings) {
  
        /**
         * Title Hax for Panopoly
         *
         * Replaces the markup of a node title pane with
         * the h1.title page element
         */
        if ($.trim($('.pane-node-title .pane-content').html()) == $.trim($('h1.title').html())) {
          $('.pane-node-title .pane-content').html('');
          $('h1.title').hide().clone().prependTo('.pane-node-title .pane-content');
          $('.pane-node-title h1.title').show();
        }
  
      }
    }
  
  })(jQuery);
  
  (function ($) {
    // Used to only update preview after changes stop for a second.
    var timer;
  
    // Used to make sure we don't wrap Drupal.wysiwygAttach() more than once.
    var wrappedWysiwygAttach = false;
  
    // Triggers the CTools autosubmit on the given form. If timeout is passed,
    // it'll set a timeout to do the actual submit rather than calling it directly
    // and return the timer handle.
    function triggerSubmit(form, timeout) {
      var $form = $(form),
        preview_widget = $('#panopoly-form-widget-preview'),
        submit;
      if (!preview_widget.hasClass('panopoly-magic-loading')) {
        preview_widget.addClass('panopoly-magic-loading');
        submit = function () {
          $form.find('.ctools-auto-submit-click').click();
        };
        if (typeof timeout === 'number') {
          return setTimeout(submit, timeout);
        } else {
          submit();
        }
      }
    }
  
    // Used to cancel a submit. It'll clear the timer and the class marking the
    // loading operation.
    function cancelSubmit(form, timer) {
      var $form = $(form),
        preview_widget = $('#panopoly-form-widget-preview');
      preview_widget.removeClass('panopoly-magic-loading');
      clearTimeout(timer);
    }
  
    function onWysiwygChangeFactory(editorId) {
      return function () {
        var textarea = $('#' + editorId),
          form = textarea.get(0).form;
  
        if (textarea.hasClass('panopoly-textarea-autosubmit')) {
          // Wait a second and then submit.
          cancelSubmit(form, timer);
          timer = triggerSubmit(form, 1000);
        }
      };
    }
  
    // A function to run before Drupal.wysiwygAttach() with the same arguments.
    function beforeWysiwygAttach(context, params) {
      var editorId = params.field,
        editorType = params.editor,
        format = params.format;
  
      if (Drupal.settings.wysiwyg.configs[editorType] && Drupal.settings.wysiwyg.configs[editorType][format]) {
        wysiwygConfigAlter(params, Drupal.settings.wysiwyg.configs[editorType][format]);
      }
    }
  
    // Wouldn't it be great if WYSIWYG gave us an alter hook to change the
    // settings of the editor before it was attached? Well, we'll just have to
    // roll our own. :-)
    function wysiwygConfigAlter(params, config) {
      var editorId = params.field,
        editorType = params.editor,
        onWysiwygChange = onWysiwygChangeFactory(editorId);
  
      switch (editorType) {
        case 'markitup':
          $.each(['afterInsert', 'onEnter'], function (index, funcName) {
            config[funcName] = onWysiwygChange;
          });
          break;
  
        case 'tinymce':
          config['setup'] = function (editor) {
            editor.onChange.add(onWysiwygChange);
            editor.onKeyUp.add(onWysiwygChange);
          }
          break;
      }
    }
  
    // Used to wrap a function with a beforeFunc (we use it for wrapping
    // Drupal.wysiwygAttach()).
    function wrapFunctionBefore(parent, name, beforeFunc) {
      var originalFunc = parent[name];
      parent[name] = function () {
        beforeFunc.apply(this, arguments);
        return originalFunc.apply(this, arguments);
      };
    }
  
    /**
     * Improves the Auto Submit Experience for CTools Modals
     */
    Drupal.behaviors.panopolyMagicAutosubmit = {
      attach: function (context, settings) {
        // Replaces click with mousedown for submit so both normal and ajax work.
        $('.ctools-auto-submit-click', context)
          // Exclude the 'Style' type form because then you have to press the
          // "Next" button multiple times.
          // @todo: Should we include the places this works rather than excluding?
          .filter(function () {
            return $(this).closest('form').attr('id').indexOf('panels-edit-style-type-form') !== 0;
          })
          .click(function (event) {
            if ($(this).hasClass('ajax-processed')) {
              event.stopImmediatePropagation();
              $(this).trigger('mousedown');
              return false;
            }
          });
  
        // e.keyCode: key
        var discardKeyCode = [
          16, // shift
          17, // ctrl
          18, // alt
          20, // caps lock
          33, // page up
          34, // page down
          35, // end
          36, // home
          37, // left arrow
          38, // up arrow
          39, // right arrow
          40, // down arrow
          9, // tab
          13, // enter
          27 // esc
        ];
  
        // Special handling for link field widgets. This ensures content which is ahah'd in still properly autosubmits.
        $('.field-widget-link-field input:text', context).addClass('panopoly-textfield-autosubmit').addClass('ctools-auto-submit-exclude');
  
        // Handle text fields and textareas.
        $('.panopoly-textfield-autosubmit, .panopoly-textarea-autosubmit', context)
          .once('ctools-auto-submit')
          .bind('keyup blur', function (e) {
            var $element;
            $element = $('.widget-preview .pane-title', context);
  
            cancelSubmit(e.target.form, timer);
  
            // Filter out discarded keys.
            if (e.type !== 'blur' && $.inArray(e.keyCode, discardKeyCode) > 0) {
              return;
            }
  
            // Set a timer to submit the form a second after the last activity.
            timer = triggerSubmit(e.target.form, 1000);
          });
  
        // Handle WYSIWYG fields.
        if (!wrappedWysiwygAttach && typeof Drupal.wysiwygAttach == 'function') {
          wrapFunctionBefore(Drupal, 'wysiwygAttach', beforeWysiwygAttach);
          wrappedWysiwygAttach = true;
  
          // Since the Drupal.behaviors run in a non-deterministic order, we can
          // never be sure that we wrapped Drupal.wysiwygAttach() before it was
          // used! So, we look for already attached editors so we can detach and
          // re-attach them.
          $('.panopoly-textarea-autosubmit', context)
            .once('panopoly-magic-wysiwyg')
            .each(function () {
              var editorId = this.id,
                instance = Drupal.wysiwyg.instances[editorId],
                format = instance ? instance.format : null,
                trigger = instance ? instance.trigger : null;
  
              if (instance && instance.editor != 'none') {
                params = Drupal.settings.wysiwyg.triggers[trigger];
                if (params) {
                  Drupal.wysiwygDetach(context, params[format]);
                  Drupal.wysiwygAttach(context, params[format]);
                }
              }
            });
        }
  
        // Handle autocomplete fields.
        $('.panopoly-autocomplete-autosubmit', context)
          .once('ctools-auto-submit')
          .bind('keyup blur', function (e) {
            // Detect when a value is selected via TAB or ENTER.
            if (e.type === 'blur' || e.keyCode === 13) {
              // We defer the submit call so that it happens after autocomplete has
              // had a chance to fill the input with the selected value.
              triggerSubmit(e.target.form, 0);
            }
          });
  
        // Prevent ctools auto-submit from firing when changing text formats.
        $(':input.filter-list').addClass('ctools-auto-submit-exclude');
  
      }
    }
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/
  (function ($) {
  
    Drupal.behaviors.PanelsAccordionStyle = {
      attach: function (context, settings) {
        for (region_id in Drupal.settings.accordion) {
          var accordion = Drupal.settings.accordion[region_id];
          jQuery('#' + region_id).accordion(accordion.options);
        }
      }
    }
  
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/
  (function ($) {
    Drupal.behaviors.platform_content_hub = {
      attach: function (context, settings) {
        // Donot translate all page content.
        if ($(".switcher .selected ").length) {
          $('html').addClass('notranslate');
          $('.field-article-body, .node-page,.node-campaign-hub, .campaign-content').addClass('translate');
        }
        // Show default translation for node pages.
        if ($('#block-gtranslate-gtranslate').length) {
          if (window.location.search.substring(6) != null) {
            var reqlang = window.location.search.split('lang=');
            var lang_string = Drupal.settings.site_lang;
            var reqlang2 = "|";
            var reqlang3 = reqlang[1];
            var res = lang_string.concat(reqlang2, reqlang3);
            doGTranslate(res);
            $("a.nturl").each(function (index) {
              var onclick_text = 'doGTranslate(';
              var onclick_text = onclick_text.concat("'", res, "');$(this).parent().parent().find('div.selected a').html($(this).html());return false;");
              if ($(this).attr("onClick") == onclick_text) {
                var lang_div = $(this).html();
                $(".switcher .selected a").html(lang_div);
              };
            });
          }
        }
        if ($('#platform-content-hub-list-form').length) {
          $('#platform-content-hub-list-form input[type="radio"]').change(function () {
            window.location.pathname = '/admin/content/contenthub/' + $('#platform-content-hub-list-form input[type="radio"]:checked').val();
          });
        }
        // Confirmation popup.
        if ($('.page-admin-content-contenthub-trending-content').length) {
          $('body', context).once().on('click', '#request-confirm', function () {
            var msg = $(this).data("msg");
            var path = $(this).data("path");
            var r = confirm(msg);
            if (r == true) {
              window.location.pathname = path;
            }
          });
        }
      }
    }
  })(jQuery);; /*})'"*/ ; /*})'"*/
  (function ($) {
  
    Drupal.behaviors.initModalFormsLogin = {
      attach: function (context, settings) {
        if ($(window).width() > 766) {
          $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-modal-forms-login', function () {
            this.href = this.href.replace(/user\/login/, 'modal_forms/nojs/login');
          }).addClass('ctools-use-modal ctools-modal-modal-popup-medium');
        }
      }
    };
  
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/
  (function ($) {
  
    Drupal.behaviors.initModalFormsRegister = {
      attach: function (context, settings) {
        if ($(window).width() > 766) {
          var reg_link = Drupal.settings.custom_links.register_link_alias;
          var reg_link_url = Drupal.settings.custom_links.register_link_alias_url
          $("a[href*='/user/register'], a[href*='?q=user/register'], a[href*='" + reg_link_url + "'], a[href*='?q=" + reg_link + "']", context).once('init-modal-forms-register', function () {
            this.href = this.href.replace(/user\/register/, 'modal_forms/nojs/register');
            if (reg_link != "user/register") {
              this.href = this.href.replace(reg_link, 'modal_forms/nojs/register');
            }
          }).addClass('ctools-use-modal ctools-modal-modal-popup-medium');
  
          $("a[href*='consent-popup-social'], a[href*='?q=consent-popup-social']", context).once('init-modal-forms-register', function () {
            this.href = this.href.replace(/consent-popup-social/, 'consent-popup-social/nojs');
          }).addClass('ctools-use-modal ctools-modal-modal-popup-medium');
  
          $("a[href*='consent-popup'], a[href*='?q=consent-popup']", context).once('init-modal-forms-register', function () {
            this.href = this.href.replace(/consent-popup/, 'consent-popup/nojs');
          }).addClass('ctools-use-modal ctools-modal-modal-popup-medium');
  
  
        }
      }
    };
  
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/
  (function ($) {
  
    Drupal.behaviors.initModalFormsPassword = {
      attach: function (context, settings) {
        if ($(window).width() > 766) {
          $("a[href*='/user/password'], a[href*='?q=user/password']", context).once('init-modal-forms-password', function () {
            this.href = this.href.replace(/user\/password/, 'modal_forms/nojs/password');
          }).addClass('ctools-use-modal ctools-modal-modal-popup-medium');
        }
      }
    };
  
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/
  /*!
      Colorbox 1.6.4
      license: MIT
      http://www.jacklmoore.com/colorbox
  */
  (function (t, e, i) {
    function n(i, n, o) {
      var r = e.createElement(i);
      return n && (r.id = Z + n), o && (r.style.cssText = o), t(r)
    }
  
    function o() {
      return i.innerHeight ? i.innerHeight : t(i).height()
    }
  
    function r(e, i) {
      i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function (e) {
        var n;
        return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e]
      }, this.get = function (e) {
        var i = this.value(e);
        return t.isFunction(i) ? i.call(this.el, this) : i
      }
    }
  
    function h(t) {
      var e = W.length,
        i = (A + t) % e;
      return 0 > i ? e + i : i
    }
  
    function a(t, e) {
      return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10))
    }
  
    function s(t, e) {
      return t.get("photo") || t.get("photoRegex").test(e)
    }
  
    function l(t, e) {
      return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
    }
  
    function d(t) {
      "contains" in x[0] && !x[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), x.focus())
    }
  
    function c(t) {
      c.str !== t && (x.add(v).removeClass(c.str).addClass(t), c.str = t)
    }
  
    function g(e) {
      A = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function () {
        var i = t.data(this, Y),
          n = new r(this, i);
        return n.get("rel") === e
      }), A = W.index(_.el), -1 === A && (W = W.add(_.el), A = W.length - 1)) : W = t(_.el)
    }
  
    function u(i) {
      t(e).trigger(i), ae.triggerHandler(i)
    }
  
    function f(i) {
      var o;
      if (!G) {
        if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !U) {
          U = $ = !0, c(_.get("className")), x.css({
            visibility: "hidden",
            display: "block",
            opacity: ""
          }), I = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({
            width: "",
            height: ""
          }).append(I), j = T.height() + k.height() + b.outerHeight(!0) - b.height(), D = C.width() + H.width() + b.outerWidth(!0) - b.width(), N = I.outerHeight(!0), z = I.outerWidth(!0);
          var h = a(_.get("initialWidth"), "x"),
            s = a(_.get("initialHeight"), "y"),
            l = _.get("maxWidth"),
            f = _.get("maxHeight");
          _.w = Math.max((l !== !1 ? Math.min(h, a(l, "x")) : h) - z - D, 0), _.h = Math.max((f !== !1 ? Math.min(s, a(f, "y")) : s) - N - j, 0), I.css({
            width: "",
            height: _.h
          }), J.position(), u(ee), _.get("onOpen"), O.add(F).hide(), x.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function () {
            e.removeEventListener("focus", d, !0)
          })), _.get("returnFocus") && ae.one(re, function () {
            t(_.el).focus()
          })
        }
        var p = parseFloat(_.get("opacity"));
        v.css({
          opacity: p === p ? p : "",
          cursor: _.get("overlayClose") ? "pointer" : "",
          visibility: "visible"
        }).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w()
      }
    }
  
    function p() {
      x || (V = !1, E = t(i), x = n(se).attr({
        id: Y,
        "class": t.support.opacity === !1 ? Z + "IE" : "",
        role: "dialog",
        tabindex: "-1"
      }).hide(), v = n(se, "Overlay").hide(), L = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), y = n(se, "Wrapper"), b = n(se, "Content").append(F = n(se, "Title"), R = n(se, "Current"), P = t('<button type="button"/>').attr({
        id: Z + "Previous"
      }), K = t('<button type="button"/>').attr({
        id: Z + "Next"
      }), S = t('<button type="button"/>').attr({
        id: Z + "Slideshow"
      }), L), B = t('<button type="button"/>').attr({
        id: Z + "Close"
      }), y.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({
        "float": "left"
      }), M = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(R).add(S)), e.body && !x.parent().length && t(e.body).append(v, x.append(y, M))
    }
  
    function m() {
      function i(t) {
        t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this))
      }
      return x ? (V || (V = !0, K.click(function () {
        J.next()
      }), P.click(function () {
        J.prev()
      }), B.click(function () {
        J.close()
      }), v.click(function () {
        _.get("overlayClose") && J.close()
      }), t(e).bind("keydown." + Z, function (t) {
        var e = t.keyCode;
        U && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), U && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()))
      }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1
    }
  
    function w() {
      var e, o, r, h = J.prep,
        d = ++le;
      if ($ = !0, q = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - N - j : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - z - D : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - z - D, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - N - j, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function () {
          L.show()
        }, 100), _.get("inline")) {
        var c = t(e).eq(0);
        r = t("<div>").hide().insertBefore(c), ae.one(he, function () {
          r.replaceWith(c)
        }), h(c)
      } else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), q = _.get("createImg"), t(q).addClass(Z + "Photo").bind("error." + Z, function () {
        h(n(se, "Error").html(_.get("imgError")))
      }).one("load", function () {
        d === le && setTimeout(function () {
          var e;
          _.get("retinaImage") && i.devicePixelRatio > 1 && (q.height = q.height / i.devicePixelRatio, q.width = q.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function () {
            q.height -= q.height * e, q.width -= q.width * e
          }, _.mw && q.width > _.mw && (e = (q.width - _.mw) / q.width, o()), _.mh && q.height > _.mh && (e = (q.height - _.mh) / q.height, o())), _.h && (q.style.marginTop = Math.max(_.mh - q.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[A + 1]) && (q.style.cursor = "pointer", t(q).bind("click." + Z, function () {
            J.next()
          })), q.style.width = q.width + "px", q.style.height = q.height + "px", h(q)
        }, 1)
      }), q.src = e) : e && M.load(e, _.get("data"), function (e, i) {
        d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents())
      })
    }
    var v, x, y, b, T, C, H, k, W, E, I, M, L, F, R, S, K, P, B, O, _, j, D, N, z, A, q, U, $, G, Q, J, V, X = {
        html: !1,
        photo: !1,
        iframe: !1,
        inline: !1,
        transition: "elastic",
        speed: 300,
        fadeOut: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        opacity: .9,
        preloading: !0,
        className: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0,
        closeButton: !0,
        fastIframe: !0,
        open: !1,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
        retinaImage: !1,
        retinaUrl: !1,
        retinaSuffix: "@2x.$1",
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",
        returnFocus: !0,
        trapFocus: !0,
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        rel: function () {
          return this.rel
        },
        href: function () {
          return t(this).attr("href")
        },
        title: function () {
          return this.title
        },
        createImg: function () {
          var e = new Image,
            i = t(this).data("cbox-img-attrs");
          return "object" == typeof i && t.each(i, function (t, i) {
            e[t] = i
          }), e
        },
        createIframe: function () {
          var i = e.createElement("iframe"),
            n = t(this).data("cbox-iframe-attrs");
          return "object" == typeof n && t.each(n, function (t, e) {
            i[t] = e
          }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullscreen = !0, i
        }
      },
      Y = "colorbox",
      Z = "cbox",
      te = Z + "Element",
      ee = Z + "_open",
      ie = Z + "_load",
      ne = Z + "_complete",
      oe = Z + "_cleanup",
      re = Z + "_closed",
      he = Z + "_purge",
      ae = t("<a/>"),
      se = "div",
      le = 0,
      de = {},
      ce = function () {
        function t() {
          clearTimeout(h)
        }
  
        function e() {
          (_.get("loop") || W[A + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")))
        }
  
        function i() {
          S.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), x.removeClass(a + "off").addClass(a + "on")
        }
  
        function n() {
          t(), ae.unbind(ne, e).unbind(ie, t), S.html(_.get("slideshowStart")).unbind(s).one(s, function () {
            J.next(), i()
          }), x.removeClass(a + "on").addClass(a + "off")
        }
  
        function o() {
          r = !1, S.hide(), t(), ae.unbind(ne, e).unbind(ie, t), x.removeClass(a + "off " + a + "on")
        }
        var r, h, a = Z + "Slideshow_",
          s = "click." + Z;
        return function () {
          r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), S.show())
        }
      }();
    t[Y] || (t(p), J = t.fn[Y] = t[Y] = function (e, i) {
      var n, o = this;
      return e = e || {}, t.isFunction(o) && (o = t("<a/>"), e.open = !0), o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function () {
        var i = t.data(this, Y) || {};
        t.data(this, Y, t.extend(i, e))
      }).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o
    }, J.position = function (e, i) {
      function n() {
        T[0].style.width = k[0].style.width = b[0].style.width = parseInt(x[0].style.width, 10) - D + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(x[0].style.height, 10) - j + "px"
      }
      var r, h, s, l = 0,
        d = 0,
        c = x.offset();
      if (E.unbind("resize." + Z), x.css({
          top: -9e4,
          left: -9e4
        }), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, x.css({
          position: "fixed"
        })) : (l = h, d = s, x.css({
          position: "absolute"
        })), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - z - D - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - z - D, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - N - j - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - N - j, 0) / 2), x.css({
          top: c.top,
          left: c.left,
          visibility: "visible"
        }), y[0].style.width = y[0].style.height = "9999px", r = {
          width: _.w + z + D,
          height: _.h + N + j,
          top: l,
          left: d
        }, e) {
        var g = 0;
        t.each(r, function (t) {
          return r[t] !== de[t] ? (g = e, void 0) : void 0
        }), e = g
      }
      de = r, e || x.css(r), x.dequeue().animate(r, {
        duration: e || 0,
        complete: function () {
          n(), $ = !1, y[0].style.width = _.w + z + D + "px", y[0].style.height = _.h + N + j + "px", _.get("reposition") && setTimeout(function () {
            E.bind("resize." + Z, J.position)
          }, 1), t.isFunction(i) && i()
        },
        step: n
      })
    }, J.resize = function (t) {
      var e;
      U && (t = t || {}, t.width && (_.w = a(t.width, "x") - z - D), t.innerWidth && (_.w = a(t.innerWidth, "x")), I.css({
        width: _.w
      }), t.height && (_.h = a(t.height, "y") - N - j), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = I.scrollTop(), I.css({
        height: "auto"
      }), _.h = I.height()), I.css({
        height: _.h
      }), e && I.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")))
    }, J.prep = function (i) {
      function o() {
        return _.w = _.w || I.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w
      }
  
      function a() {
        return _.h = _.h || I.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h
      }
      if (U) {
        var d, g = "none" === _.get("transition") ? 0 : _.get("speed");
        I.remove(), I = n(se, "LoadedContent").append(i), I.hide().appendTo(M.show()).css({
          width: o(),
          overflow: _.get("scrolling") ? "auto" : "hidden"
        }).css({
          height: a()
        }).prependTo(b), M.hide(), t(q).css({
          "float": "none"
        }), c(_.get("className")), d = function () {
          function i() {
            t.support.opacity === !1 && x[0].style.removeAttribute("filter")
          }
          var n, o, a = W.length;
          U && (o = function () {
            clearTimeout(Q), L.hide(), u(ne), _.get("onComplete")
          }, F.html(_.get("title")).show(), I.show(), a > 1 ? ("string" == typeof _.get("current") && R.html(_.get("current").replace("{current}", A + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > A ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || A ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function () {
            var i, n = W[this],
              o = new r(n, t.data(n, Y)),
              h = o.get("href");
            h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h)
          })) : O.hide(), _.get("iframe") ? (n = _.get("createIframe"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({
            src: _.get("href"),
            "class": Z + "Iframe"
          }).one("load", o).appendTo(I), ae.one(he, function () {
            n.src = "//about:blank"
          }), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? x.fadeTo(g, 1, i) : i())
        }, "fade" === _.get("transition") ? x.fadeTo(g, 0, function () {
          J.position(0, d)
        }) : J.position(g, d)
      }
    }, J.next = function () {
      !$ && W[1] && (_.get("loop") || W[A + 1]) && (A = h(1), f(W[A]))
    }, J.prev = function () {
      !$ && W[1] && (_.get("loop") || A) && (A = h(-1), f(W[A]))
    }, J.close = function () {
      U && !G && (G = !0, U = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), x.stop().fadeTo(_.get("fadeOut") || 0, 0, function () {
        x.hide(), v.hide(), u(he), I.remove(), setTimeout(function () {
          G = !1, u(re), _.get("onClosed")
        }, 1)
      }))
    }, J.remove = function () {
      x && (x.stop(), t[Y].close(), x.stop(!1, !0).remove(), v.remove(), G = !1, x = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z))
    }, J.element = function () {
      return t(_.el)
    }, J.settings = X)
  })(jQuery, document, window);; /*})'"*/ ; /*})'"*/
  /**
   * @file
   * Colorbox module init js.
   */
  
  (function ($) {
  
    Drupal.behaviors.initColorbox = {
      attach: function (context, settings) {
        if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
          return;
        }
  
        if (settings.colorbox.mobiledetect && window.matchMedia) {
          // Disable Colorbox for small screens.
          var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
          if (mq.matches) {
            return;
          }
        }
  
        // Use "data-colorbox-gallery" if set otherwise use "rel".
        settings.colorbox.rel = function () {
          if ($(this).data('colorbox-gallery')) {
            return $(this).data('colorbox-gallery');
          } else {
            return $(this).attr('rel');
          }
        };
  
        $('.colorbox', context)
          .once('init-colorbox')
          .colorbox(settings.colorbox);
  
        $(context).bind('cbox_complete', function () {
          Drupal.attachBehaviors('#cboxLoadedContent');
        });
      }
    };
  
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/
  /**
   * @file
   * Colorbox module style js.
   */
  
  (function ($) {
  
    Drupal.behaviors.initColorboxDefaultStyle = {
      attach: function (context, settings) {
        $(context).bind('cbox_complete', function () {
          // Only run if there is a title.
          if ($('#cboxTitle:empty', context).length == false) {
            $('#cboxLoadedContent img', context).bind('mouseover', function () {
              $('#cboxTitle', context).slideDown();
            });
            $('#cboxOverlay', context).bind('mouseover', function () {
              $('#cboxTitle', context).slideUp();
            });
          } else {
            $('#cboxTitle', context).hide();
          }
        });
      }
    };
  
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/
  /**
   * @file
   * Colorbox module load js.
   */
  (function ($) {
  
    Drupal.behaviors.initColorboxLoad = {
      attach: function (context, settings) {
        if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
          return;
        }
  
        if (settings.colorbox.mobiledetect && window.matchMedia) {
          // Disable Colorbox for small screens.
          var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
          if (mq.matches) {
            return;
          }
        }
  
        $.urlParams = function (url) {
          var p = {},
            e,
            a = /\+/g, // Regex for replacing addition symbol with a space.
            r = /([^&=]+)=?([^&]*)/g,
            d = function (s) {
              return decodeURIComponent(s.replace(a, ' '));
            },
            q = url.split('?');
          while (e = r.exec(q[1])) {
            e[1] = d(e[1]);
            e[2] = d(e[2]);
            switch (e[2].toLowerCase()) {
              case 'true':
              case 'yes':
                e[2] = true;
                break;
              case 'false':
              case 'no':
                e[2] = false;
                break;
            }
            if (e[1] == 'width') {
              e[1] = 'innerWidth';
            }
            if (e[1] == 'height') {
              e[1] = 'innerHeight';
            }
            p[e[1]] = e[2];
          }
          return p;
        };
        $('.colorbox-load', context)
          .once('init-colorbox-load', function () {
            var params = $.urlParams($(this).attr('href'));
            $(this).colorbox($.extend({}, settings.colorbox, params));
          });
      }
    };
  
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/
  (function ($) {
    Drupal.behaviors.flourishSolr = {
      attach: function (context, settings) {
        var set_delete_cookie = 1;
        // Highlight the hue being selected after page refresh.
        setTimeout(function () {
          var urlHashColor = window.location.hash.substr(1);
          // When the cookie "color_hue_reset" sets and url hashcolor is empty.
          if ($("body").hasClass("page-colors-listing") && $.cookie("color_hue_reset") === '1' && urlHashColor === '') {
            urlHashColor = '/';
          }
  
          //Clearing color hue filters intially before setting.
          if (typeof (Drupal.settings.remove_color_hue_selector) !== "undefined" && Drupal.settings.remove_color_hue_selector === true) {
            $(".colors-hue-selectors").find('.colors-hue-selector').removeClass("selected");
          }
  
          // Replace space with dot in color name
          if (urlHashColor.indexOf(' ') >= 0) {
            urlHashColor = urlHashColor.split(' ').join('.');
          }
          if (!urlHashColor == "" && typeof (Drupal.settings.clp_selected_color_hue) !== "undefined") {
            if (urlHashColor == Drupal.settings.clp_selected_color_hue) {
              $(".colors-hue-selectors").find(".cid-" + urlHashColor).addClass("selected");
              show_filters_section();
            }
          } else if (!urlHashColor == "" && typeof (Drupal.settings.clp_selected_color_hue) === "undefined") {
            $(".cid-" + urlHashColor + " button").trigger("click");
          } else if (typeof (Drupal.settings.clp_selected_color_hue) !== "undefined") {
            var clpSelectedColorHue = Drupal.settings.clp_selected_color_hue;
            if (clpSelectedColorHue.indexOf(' ') >= 0) {
              clpSelectedColorHue = clpSelectedColorHue.split(' ').join('.');
            }
            if ($(".fl-sticky-affix").length && $(".colors-hue-selectors").find(".cid-" + clpSelectedColorHue).hasClass("not-available")) {
              $(".colors-hue-selectors").find(".cid-" + clpSelectedColorHue).removeClass("selected");
            } else {
              location.hash = clpSelectedColorHue;
              $(".colors-hue-selectors").find(".cid-" + clpSelectedColorHue).addClass("selected");
              $(".cid-" + clpSelectedColorHue + " button").trigger("click");
            }
            show_filters_section();
          }
        }, 0);
  
        //Color travelers
        $(".color-travels-options li .travel-option").on("click", function (e) {
          $(".color-travels-options .travel-option").removeClass("on");
  
          $("#color-box-container").
          removeClass("color-box-type-grid").
          removeClass("color-box-type-list").
          addClass("color-box-type-" + $(this).data("type"));
  
          $("#color-box-container .travel-" + $(this).data("type") + "-view").addClass("on");
          e.preventDefault();
        });
  
        // Function to add hue id to url.
        function add_hue_to_url(color) {
          _cidRef = $(".cid-" + color);
          if (!_cidRef.hasClass("not-available")) {
            location.hash = color;
          }
          if (_cidRef.hasClass("selected")) {
            _cidRef.find(".solr-color-box-button").unbind("mousedown");
            clear_filters();
            remove_hash_from_url();
            set_delete_cookie = 0;
            // Remove the default selection white color when user unselect it.
            // Set the cookie to prevent entering into if condition.
            // Look at the flourish_colors_listing_solr.module @ line no 355.
            setCookie('color_hue_reset', 1, 1);
            location.reload();
          }
        }
  
        // Hide color swatches when no hue selected.
        var hue_selected = 0;
        setTimeout(function () {
          $(".flourish-colors-listing .colors-hue-selectors .color-box").once("hue-selected").each(function () {
            if ($(this).hasClass("selected")) {
              hue_selected++;
            }
            if (hue_selected == 0) {
              $(".flourish-colors-listing .colors-content, .flourish-colors-listing .colors-listing-box").hide();
            } else {
              $(".flourish-colors-listing .colors-content, .flourish-colors-listing .colors-listing-box").show();
            }
          });
        }, 0);
  
        // Update filter values on click of filter link
        $(".color-product-type", context).add(".color-room-type", context).add(".color-surface", context).add(".color-finish", context).on("click", function (event) {
          show_selected_filter_names();
          var tabId = $(event.target).parents("[id]:eq(2)").attr("id");
          $.cookie("activeTab", tabId);
        });
  
        $(".flourish-colors-listing #hue-selector .solr-color-box-button").once("colorHue").on("mousedown", function (e) {
          switch (e.which) {
            case 1:
              color = $(this).text();
              add_hue_to_url(color);
              break;
            case 3:
              //Right Mouse button pressed
              e.preventDefault();
              e.stopPropagation();
              break;
          }
        });
        // Clicking x on color details banner
        $(".flourish-colors-listing #hue-container").add(".flourish-colors-listing #hue-collection").on("click", ".color-detail-close", function () {
          $(".color-box-child").removeClass("selected");
          $(".color-box-child > div.scrap-book-color").remove();
          $(this).parents("div.rowInfo").slideUp();
          $(this).parents("div.rowInfo").remove();
        });
  
        //Toggle preview & swatch for mobile
        $("body").on("click", ".flourish-colors-listing #hue-container a.option-swatch, .flourish-colors-listing #hue-collection a.option-swatch, .color-node-box a.option-swatch", function (e) {
          $type = $(this).data("type");
          if ($type == "swatch") {
            $(this).data("type", "preview");
            $(this).children("label").html(Drupal.t("Preview"));
            $(this).parents(".rowInfo").removeClass("row-swatch-info").addClass("row-preview-info");
          } else {
            $(this).data("type", "swatch");
            $(this).children("label").html(Drupal.t("Swatch"));
            $(this).parents(".rowInfo").removeClass("row-preview-info").addClass("row-swatch-info");
          }
          e.preventDefault();
        });
        // Click on sub color
        $(".color-box-child", context).once("colorBox").on("click", function (e) {
          //Redirect to color detail page
          if ($("body").hasClass("node-type-color") || $("body").hasClass("page-search") || $("body").hasClass("node-type-article")) {
            return true;
          }
          if ($(this).hasClass("selected")) {
            return false;
          }
          var me = $(this);
          pTag = $(this).children("p");
          if (pTag.length > 0) {
            colorIcon = pTag.attr("style");
          }
          block = $(this).parent(".rowBox");
          if (block.next(".rowInfo").length > 0) {
            // Prevent browser to follow the link.
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
          $("body").addClass("page-loading");
          $(".color-box-child").removeClass("selected");
          $(".color-box-child > div.scrap-book-color").remove();
          $("div.rowInfo").remove();
          $(this).addClass("selected");
          if ($(this).attr("data-scrap") == "set") {
            scrap_in_class = "fl-in-sb";
          } else {
            scrap_in_class = "";
          }
          colorname = $(this).attr("data-title").replace(/\//g, "-");
          colorid = $(this).attr("data-colorid");
          colorrgb = $(this).attr("data-id");
          var use_v2_api = Drupal.settings.use_v2_api;
          cccid = '';
          if ($(this).attr("data-cccid")) {
            cccid = '-' + $(this).attr("data-cccid");
          }
  
          $(this).prepend("<div onclick = \"set_color_scrap_book(colorid = \'" + colorid + "\',type=\'color\', data = this)\" class=\"scrap-book-color scrap-book-add-color icon-scrap-book hidden-xs color-text " + scrap_in_class + " scrap-color-" + colorid + "  data-type=\"color\"  data-colorid=" + colorid + " data-rgb=" + colorrgb + " style=\"" + colorIcon + "\"></div>");
          if (me.data("requestRunning")) {
            return;
          }
          me.data("requestRunning", true);
          var product_nid = getUrlParams()['product'];
          product_nid = decodeURI(product_nid);
          if (typeof product_nid === 'undefined') {
            product_nid = 'NotSet';
          }
          var lang = Drupal.settings.site_lang;
          $.ajax({
            cache: false,
            url: encodeURI(Drupal.settings.basePath + Drupal.settings.pathPrefix + "flourish-colors-listing-banner/" + colorid + cccid + "/" + colorname + "/" + colorrgb + "/" + lang + "/" + product_nid),
            success: function (result) {
              block.after(result);
              $(".rowInfo").not(":first").remove();
              $(".rowInfo").slideDown();
              setTimeout(function () {
                $(".rowInfo .equi-height").matchHeight();
                $(".rowInfo .color-image img").css("max-height", "100%");
                if ($(".color-box-child .scrap-book-add-color").hasClass("fl-in-sb")) {
                  $(".fl-color-expend-box .scrap-book-add-color").addClass("fl-in-sb");
                }
  
                if ($(".fl-color-expend-box .scrap-book-add-color").hasClass("fl-in-sb")) {
                  $(".color-box-child .scrap-book-add-color").addClass("fl-in-sb");
                }
  
                //Reduce font size for lengthy color names
                if (navigator.userAgent.match(/(iPad)/)) {
                  if ($(".fl-color-expend-box h2.color-text").text().length > 25) {
                    $(".fl-color-expend-box h2.color-text").css("font-size", "18px");
                  } else {
                    $(".fl-color-expend-box h2.color-text").css("font-size", "24px");
                  }
                }
              }, 1000);
              $("html, body").animate({
                scrollTop: ($(".rowInfo.fl-color-expend-box").offset().top - 150)
              }, 1000);
              //Drupal.attachBehaviors(document, Drupal.settings);
  
              //Tester products dataLayer push
              var flourish_dataLayer = {};
              flourish_dataLayer.products = {};
              var delta = 0;
              $(".testers-panels--colour-swatch .row .testers-panel").each(function () {
                var testerPrdName = $(this).attr("data-tester-title");
                var testerPrdGlobalId = $(this).attr("data-tester-globalid");
                var testerCategory = $(this).attr("data-tester-type");
                var testerSize = $(this).find(".testers-panel__size").attr("data-tester-size");
  
                flourish_dataLayer['products'] = { // add [delta] when wet and dry both are added
                  "productInfo": {
                    "productID": testerPrdGlobalId,
                    "productName": testerPrdName,
                    "size": testerSize,
                    "colourID": $(this).parents(".testers-panels--colour-swatch").attr("data-tester-colorid"),
                    "colourName": $(this).parents(".testers-panels--colour-swatch").attr("data-tester-color"),
                    "colourCollection": $(this).parents(".testers-panels--colour-swatch").attr("data-tester-collection")
                  },
                  "category": {
                    "primaryCategory": testerCategory
                  }
                };
                delta++;
              });
              //Pushing Tester Products to dataLayer
              if (typeof flourish_dataLayer.products != 'undefined') {
                if (Object.keys(flourish_dataLayer.products).length > 0) {
                  flourish_dataLayer.event = 'ga-productimpression';
                  dataLayer.push(flourish_dataLayer);
                }
              }
            },
            complete: function () {
              me.data("requestRunning", false);
            },
            error: function () {}
          });
          // Prevent browser to follow the link.
          e.preventDefault();
          e.stopPropagation();
          return false;
        });
  
        //Inspiration filters
        //remove selected room type filter
        $("body").on("click", ".reset-color-filter-inspiration-room-type", function () {
          var roomTypeIdUncheck = $(this).attr("data-tid");
          $("#edit-field-cateogry-tid-1-" + roomTypeIdUncheck).prop("checked", false);
          $("#edit-field-cateogry-tid-1-all").prop("checked", true);
          $('input[type=radio][name="field_cateogry_tid_1"]').trigger("change");
        });
        //remove selected room type filter
        $("body").on("click", ".reset-color-filter-inspiration-family", function () {
          var familyIdUncheck = $(this).attr("data-tid");
          $("#edit-field-color-hue-tid-" + familyIdUncheck).prop("checked", false);
          $("#edit-field-color-hue-tid-all").prop("checked", true);
          $('input[type=radio][name="field_color_hue_tid"]').trigger("change");
        });
  
        var color_family_label = "notset";
        $("#edit-field-cateogry-tid-1 > div > input:radio[name=field_cateogry_tid_1], #edit-field-color-hue-tid > div > input:radio[name=field_color_hue_tid]")
          .on("change", function (event) {
            var tabId = $(event.target).closest(".fl-filter-item").attr("id");
            $.cookie("activeTab", tabId);
  
            var room_type_id = $("input:radio[name=field_cateogry_tid_1]:checked").val();
            if (room_type_id != "All") {
              room_type_label = $("input:radio[name=field_cateogry_tid_1]:checked").next("label").text();
            } else {
              room_type_label = "notset";
            }
            var color_family_id = $("input:radio[name=field_color_hue_tid]:checked").val();
            if (color_family_id != "All") {
              color_family_label = $("input:radio[name=field_color_hue_tid]:checked").next("label").text();
            } else {
              color_family_label = "notset";
            }
            set_filter_inspiration(room_type_id, room_type_label, color_family_id, color_family_label);
          });
        //Delete cookie when user navigates to another page.
        $(window).on("beforeunload", function () {
          if (set_delete_cookie == 1) {
            deleteCookie('color_hue_reset');
          }
        });
      }
    }
  }(jQuery));
  
  /** This behavior will create an overlay throbber for the 
   * duration of ajax requests
   */
  (function ($) {
    Drupal.behaviors.exoveGlobalThrobber = {
      attach: function (context) {
        // Overlay global throbber HTML, 
        // this is what we actually show for the end user
        var div = "<div id=\"global-throbber\" class=\"global-throbber\"><div class=\"ajax-progress-throbber\"><div class=\"throbber\"></div></div></div>";
  
        // jQuery Ajax Events need to be triggered on the document element
        // This is triggered on the beginning of an jQuery AJAX request
        $(document).ajaxSend(function (event, request, settings) {
  
          // Add throbber on system or views ajax calls
          // Most core and contrib module callbacks will use these urls.
          var system_url = '/system/ajax';
          var views_url = '/views/ajax';
          // Check is_multilingual and language code.
          if (typeof Drupal.settings.drupal_multilingual != 'undefined' && Drupal.settings.drupal_multilingual) {
            var system_url = '/' + Drupal.settings.site_lang + '/system/ajax';
            var views_url = '/' + Drupal.settings.site_lang + '/views/ajax';
          }
          if (settings.url == system_url || settings.url == views_url) {
            // If not yet added, if multiple AJAX requests are fired
            if ($("#global-throbber").length == 0) {
              // Add the overlay div to the beginning of the page, 
              // and fade it in halfway
              $("body").append(div);
              $("#global-throbber").fadeTo("fast", 0.5);
            }
          }
        });
  
        // Again, needs to be triggered on the document element
        // This is triggered on the completion of an jQuery AJAX request
        $(document).ajaxComplete(function (event, request, settings) {
          // Enable all disabled elements, by using the class 
          // that we added on the ajaxSend Event.
          // Then we can remove the class that we added for this procedure
          // We added a disabled class for theming, also remove that.
          $("input.global-throbber-disabled").removeAttr("disabled", "disabled").removeClass("global-throbber-disabled").removeClass("disabled");
          // Remove throbber container added to the beginning of the body
          $("#global-throbber").remove();
          // Set color hue selector removal false, if any of the color hue selected.
          var base_url = Drupal.settings.basePath + Drupal.settings.pathPrefix;
          if (typeof (Drupal.settings.remove_color_hue_selector) !== "undefined" && settings.url === base_url + 'system/ajax') {
            Drupal.settings.remove_color_hue_selector = false;
          }
        });
      }
    };
  }(jQuery));
  
  /**  
   * This behavior is related to colour combination section
   */
  (function ($) {
    Drupal.behaviors.colourCombination = {
      attach: function (context, settings) {
  
        spanTag = $(".colour-group__swatch").children("span");
        sbIcon = spanTag.attr("style");
        $(".colour-group__swatch .scrapbook-icon").attr("style", sbIcon);
  
      }
    }
  }(jQuery));
  
  /*****************************************************************************************/
  jQuery(document).ready(function () {
    var xhr;
    var xhr_surface;
    var xhr_location;
    var color_filter_data;
    var scrap_in_class;
    $ = jQuery;
    var bg_text;
  
    //get color from url and make default
    get_url_color();
    if ($(".color-node-box").length > 0) {
      $(".color-node-box > .color-swatch + div .color-swatch, .color-node-box > .color-swatch + div .color-swatch, .color-image .color-node-box > .color-swatch + div .color-swatch, .color-node-box > .color-swatch + div .color-image").matchHeight();
    }
    // Add article to recent views
    if ($("body").hasClass("node-type-article")) {
      article_id = $("body").attr("class").match(/\d+/);
      add_article_color_cookies_solr(article_id[0], "article");
    }
  
    //remove selected product filter
    $("body").on("click", ".reset-color-filter-product-type", function () {
      $("input:checkbox[name=\"color_product_type\"]").each(function () {
        this.checked = false;
      });
      $("#selected_product_type").html("");
      var surface_ids = "";
      var room_type_id = "";
      var product_type_id = "";
      if ($("body").hasClass("page-colors-listing")) {
        var util = {};
        var current_path = window.location.pathname;
        util.post = function () {
          var $form = $("<form>", {
            action: current_path,
            method: "post"
          });
  
          $("<input>").attr({
            type: "hidden",
            name: "product_type_filters_reset_link",
            value: "Reset Product Type Filters",
          }).appendTo($form);
          $body = $(document.body);
          $form.appendTo($body);
          $form.submit();
        }
        util.post();
      }
    });
  
    //remove selected finish filter
    $("body").on("click", ".reset-color-filter-finish", function () {
      $("input:checkbox[name=\"color_finish\"]").each(function () {
        this.checked = false;
      });
      $("#selected_finish").html("");
      if ($("body").hasClass("page-colors-listing")) {
        var util = {};
        var current_path = window.location.pathname;
        util.post = function () {
          var $form = $("<form>", {
            action: current_path,
            method: "post"
          });
  
          $("<input>").attr({
            type: "hidden",
            name: "finish_filters_reset_link",
            value: "Reset Finish Filters"
          }).appendTo($form);
          $body = $(document.body);
          $form.appendTo($body);
          $form.submit();
        };
        util.post();
        // Google Event tracking on remove finish filter.       
        analyticsEventCall('Colour picker', 'Click remove filter', 'Remove finish filter', $(this).attr('id'), false);
      }
    });
  
    //remove selected surface filter
    $("body").on("click", ".reset-color-filter-room-type", function () {
      $("input:checkbox[name=\"color_room_type\"]").each(function () {
        this.checked = false;
      });
      $("#selected_room_type").html("");
      var surface_ids = "";
      var room_type_id = "";
      if ($("body").hasClass("page-colors-listing")) {
        var util = {};
        var current_path = window.location.pathname;
        util.post = function () {
          var $form = $("<form>", {
            action: current_path,
            method: "post"
          });
  
          $("<input>").attr({
            type: "hidden",
            name: "room_type_filters_reset_link",
            value: "Reset Room Type Filters",
          }).appendTo($form);
          $body = $(document.body);
          $form.appendTo($body);
          $form.submit();
        }
        util.post();
        // Google Event tracking on remove location filter.       
        analyticsEventCall('Colour picker', 'Click remove filter', 'Remove location filter', $(this).attr('id'), false);
      }
    });
    //remove selected surface filter
    $("body").on("click", ".reset-color-filter-surface", function () {
      $("input:checkbox[name=\"color_surface_usage\"]").each(function () {
        this.checked = false;
      });
      $("#selected_surface").html("");
      var surface_ids = "";
      var room_type_id = "";
      var surface_filter_reset = $(this).attr("data-tid");
      if ($("body").hasClass("page-colors-listing")) {
        var util = {};
        var current_path = window.location.pathname;
        util.post = function () {
          var $form = $("<form>", {
            action: current_path,
            method: "post"
          });
  
          $("<input>").attr({
            type: "hidden",
            name: "surface_usage_filters_reset_link",
            value: surface_filter_reset,
          }).appendTo($form);
          $body = $(document.body);
          $form.appendTo($body);
          $form.submit();
        }
        util.post();
        // Google Event tracking on remove surface filter.       
        analyticsEventCall('Colour picker', 'Click remove filter', 'Remove surface filter', $(this).attr('id'), false);
      }
    });
    //remove all filters
    $("body").on("click", ".filter-reset", function (e) {
      e.preventDefault();
      if ($("body").hasClass("page-colors-listing")) {
        var current_path = window.location.pathname;
        var util = {};
        util.post = function () {
          var $form = $("<form>", {
            action: current_path,
            method: "post"
          });
  
          $("<input>").attr({
            type: "hidden",
            name: "filters_reset_link",
            value: "Reset Filters",
          }).appendTo($form);
          $body = $(document.body);
          $form.appendTo($body);
          $form.submit();
          // Google Event tracking on reset all filters.       
          analyticsEventCall('Colour picker', 'Click reset all filters', 'Reset all filters', undefined, false);
        }
        util.post();
        $.removeCookie("ClpActiveFilterCategory");
      }
    });
  
    show_selected_filter_names();
  
    if ($("body").hasClass("page-colors-listing")) {
      var product_id = getParameterByName("product");
      if (!$.isNumeric(product_id)) {
        $(".color-box").removeClass("selected");
        $(".product-available:first").trigger("click");
      }
    }
  
    if ($("body").hasClass("node-type-color") && $("div").hasClass("row-swatch-info")) {
      var color_div = $('div.row-swatch-info').find('.scrap-book-add-color');
      colorid = color_div.attr("data-colorid");
      checkColorInScrapbook(colorid, color_div);
      if (colorid != null) add_article_color_cookies_solr(colorid, "color");
    }
  
    //Getting recently visited block in ajax
    if ($("body").hasClass("node-type-color")) {
      getRecentlyvisitedBlock();
    }
  
  });
  /* Function to show default color selected, if url contains tag */
  function get_url_color() {
  
    var url = window.location.href;
    var hash = url.substring(url.indexOf("#") + 1);
    if (url == hash) return;
    var specialChars = "&";
    for (i = 0; i < specialChars.length; i++) {
      if (url.indexOf(specialChars[i]) > -1) {} else {
        var url = Drupal.settings.basePath + "colors-listing-ajax-qm";
        var urlRedirect = Drupal.settings.basePath + "colors-listing";
        $.post(urlRedirect, {
            color_url: hash,
          },
          function (data, textStatus) {});
      }
    }
  }
  
  
  function show_selected_filter_names() {
    var room_type_id = room_type_label = product_type_id = product_type_label = surface_id = surface_label = finish_id = finish_label = "notset";
    //get selected product type
    product_type_id = $("input:radio[name=color_product_type]:checked").val();
    if (product_type_id != "all") {
      product_type_label = $("input:radio[name=color_product_type]:checked").attr("value");
    }
    //get selected room type
    room_type_id = $("input:radio[name=color_room_type]:checked").val();
    if (room_type_id != "all") {
      room_type_label = $("input:radio[name=color_room_type]:checked").attr("value");
    }
    var product_id = fls_getParameterByName("product");
    if ($.isNumeric(product_id)) {
      $(".zone-filter").addClass("hidden");
    }
    var surface_filter_item = fls_get_surface_filter_area();
  
    surface_id = surface_filter_item[0].id;
    surface_label = surface_filter_item[0].label;
  
    //get selected finish
    finish_id = $("input:radio[name=color_finish]:checked").val();
    if (finish_id != "all") {
      finish_label = $("input:radio[name=color_finish]:checked").attr("value");
    }
  
    //Show the selected filters on top
    fls_set_filter_area(product_type_id, product_type_label, room_type_id, room_type_label, surface_filter_item, finish_id, finish_label);
  }
  
  function fls_getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  
  
  // Function to join all selected surfaces
  function get_surface_value() {
    var surface_value = [];
    $("input[name=\"surface_usage\"]:checked").each(function () {
      surface_value.push(this.value);
    });
    return surface_value.join(",");
  }
  
  // Function to return surface filters selected
  function fls_get_surface_filter_area() {
    var surface_count = $("input:checkbox[name^='color_surface_usage']:checked").length;
    var surface_value = [];
    if (surface_count == 0) {
      surface_value.push({
        "id": "notset",
        "label": "notset"
      });
    } else if (surface_count >= 1) {
      $("input:checkbox[name^='color_surface_usage']:checked").each(function () {
        surface_value.push({
          "id": this.value,
          "label": $(this).attr("value")
        });
      });
    } else {
      surface_value.push({
        "id": "multiple",
        "label": Drupal.t("Surface")
      });
    }
    return surface_value;
  }
  
  // Function to assign filter names to filter area
  function fls_set_filter_area(product_type_id, product_type_label, room_type_id, room_type_label, surface_filter_item, finish_id, finish_label) {
    var label_content = "";
  
    if ($("input:radio[name=\"color_product_type\"]").length) {
      if (typeof product_type_id != 'undefined' && product_type_label != 'notset' && product_type_id != 'All')
        label_content += "<a class=\"remove reset-filter reset-color-filter-product-type\" id=\"" + product_type_id + "\" data-tid=\"" + product_type_id + " data-field=\"selected_product_type\" data-fname=\"" + product_type_label + "\"><div id=\"selected_product_type\" class=\"fl-color-selections label\"><span class=\"fltr-selection\" id=\"" + product_type_id + "\" data-tid=\"" + product_type_id + "\">" +
        Drupal.settings.flourish_color_lsiting_solr.prod_type_label[product_type_label] + "<svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2\"></use></svg></span></div></a>";
    }
  
    if ($("input:radio[name=\"color_room_type\"]").length) {
      if (typeof room_type_id != 'undefined' && room_type_label != 'notset' && room_type_id != 'All')
        label_content += "<a class=\"remove reset-filter reset-color-filter-room-type\" id=\"" + room_type_id + "\" data-tid=\"" + room_type_id + " data-field=\"selected_room_type\" data-fname=\"" + room_type_label + "\"><div id=\"selected_room_type\" class=\"fl-color-selections label\"><span class=\"fltr-selection\" id=\"" + room_type_id + "\" data-tid=\"" + room_type_id + "\">" +
        room_type_label + "<svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2\"></use></svg></span></div></a>";
    }
  
    for (var i = 0; i < surface_filter_item.length; i++) {
      if (typeof surface_filter_item[i].id != 'undefined' && surface_filter_item[i].label != 'notset')
        label_content += "<a class=\"remove reset-filter reset-color-filter-surface\" id=\"" + surface_filter_item[i].id + "\" data-tid=\"" + surface_filter_item[i].id + "\" data-field=\"selected_surface\" data-fname=\"" + surface_filter_item[i].label + "\"><div id=\"selected_surface\" class=\"fl-color-selections label\"><span class=\"fltr-selection\" id=\"" + surface_filter_item[i].id + "\" data-tid=\"" + surface_filter_item[i].id + "\">" + surface_filter_item[i].label + "<svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2\"></use></svg></span></div></a>";
    }
  
    if ($("input:radio[name=\"color_finish\"]").length) {
      if (typeof finish_id != 'undefined' && finish_label != 'notset' && finish_id != 'All')
        label_content += "<a class=\"remove reset-filter reset-color-filter-finish\" id=\"" + finish_id + "\" data-tid=\"" + finish_id + " data-field=\"selected_finish\" data-fname=\"" + finish_label + "\"><div id=\"selected_finish\" class=\"fl-color-selections label\"><span class=\"fltr-selection\" id=\"" + finish_id + "\" data-tid=\"" + finish_id + "\">" +
        finish_label + "<svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2\"></use></svg></span></div></a>";
    }
  
    $(".page-colors-listing #filter-selections").html(label_content);
    if ($(".filter-selections .fltr-selection").length > 0) {
      $(".filter-region .filter-reset").show();
    } else {
      $(".filter-region .filter-reset").hide();
    }
  
  }
  
  function add_article_color_cookies_solr(article_id, type) {
    currentArticleId = article_id;
    if (type == "article") {
      cookieName = "recentArticle";
    } else if (type == "color") {
      cookieName = "recentColor";
    }
    howManyItems = 12;
    if (parseInt(currentArticleId) != "NaN" && typeof $.cookie(cookieName) == "undefined") {
      $.cookie(cookieName, currentArticleId, {
        expires: 70,
        path: "/"
      });
    } else {
      currentValues = $.cookie(cookieName);
      if (currentValues != null) {
        currentValues = currentValues.split(",");
        //remove item if it already exists
        if ($.inArray(currentArticleId, currentValues) > -1) {
          currentValues.splice($.inArray(currentArticleId, currentValues), 1)
        }
        currentValues.push(currentArticleId)
        if (currentValues.length > howManyItems) {
          $.cookie(cookieName, currentValues.splice(-howManyItems), {
            expires: 70,
            path: "/"
          });
        } else {
          $.cookie(cookieName, currentValues, {
            expires: 70,
            path: "/"
          });
        }
      }
    }
  }
  
  function set_filter_inspiration(room_type_id, room_type_label, color_family_id, color_family_label) {
    var label_content = "";
    label_content += '<div class="fl-color-filters">';
    if ($("input:radio[name=\"field_cateogry_tid_1\"]").length) {
      if (room_type_label != "notset")
        label_content += "<div id=\"selected_inspiration_room_type\" class=\"fl-color-selections\"><span class=\"fltr-selection\" id=\"" + room_type_id + "\" data-tid=\"" + room_type_id + "\">" + room_type_label + "<a class=\"remove reset-filter reset-color-filter-inspiration-room-type\" id=\"" + room_type_id + "\" data-tid=\"" + room_type_id + "\" data-field=\"selected_room_type\" data-fname=\"" + room_type_label + "\">x</a></span></div>";
    }
  
    if ($("input:radio[name=\"field_color_hue_tid\"]").length) {
      if (color_family_label != "notset")
        label_content += "<div id=\"selected_inspiration_family\" class=\"fl-color-selections\"><span class=\"fltr-selection\" id=\"" + color_family_id + "\" data-tid=\"" + color_family_id + "\">" + color_family_label + "<a class=\"remove reset-filter reset-color-filter-inspiration-family\" id=\"" + color_family_id + "\" data-tid=\"" + color_family_id + "\" data-field=\"selected_surface\" data-fname=\"" + color_family_label + "\">x</a></span></div>";
      label_content += "</div>";
    }
  
    $(".page-colour-inspiration #filter-selections").html(label_content);
    if ($(".filter-selections .fltr-selection").length > 0) {
      $(".filter-region .filter-reset").show();
    } else {
      $(".filter-region .filter-reset").hide();
    }
  
    if ($(window).width() < 768) {
      hideFilterOnSelection();
    }
  }
  
  /*Added for filter selection*/
  
  function hideFilterOnSelection() {
    if ((".not-logged-in").length) {
      $(".fl-filters .filter-tabs").hide();
      $(".fl-filter-item > div > label").each(function (i) {
        $(this).siblings().hide();
      });
      $(".filter-toggle").removeClass("fl-expanded");
      $(".main-container-accordion.fl-filters").removeClass("fl-child-visible");
    }
  }
  
  (function ($) {
    $.fn.show_filters_section_ajax = function () {
      show_filters_section();
    };
  }(jQuery));
  
  function checkColorInScrapbook(colorid) {
    var end_url = '/flourish-color-scrapbook-check/' + colorid;
    $.ajax({
      context: this,
      cache: false,
      type: 'POST',
      url: end_url,
      success: function (data) {
        if (data == "1") {
          $('div.row-swatch-info').find('.scrap-book-add-color').addClass("fl-in-sb");
        }
      },
      // Display Error Alert.
      error: Â functionÂ(request, Â status, Â error) Â {},
    });
  }
  
  function getRecentlyvisitedBlock() {
    var end_url = '/flourish-colors-listing-solr-recently-visited';
    $.ajax({
      cache: false,
      type: 'GET',
      url: end_url,
      success: function (data) {
        $('.node-type-color .block-flourish-recent-visited-colors').remove();
        $('.node-type-color .block-flourish-recent-visited-products').remove();
        $('.node-type-color .block-flourish-colors-listing-solr').append(data);
      },
      // Display Error Alert.
      error: Â functionÂ(request, Â status, Â error) Â {},
    });
  }
  
  function getUrlParams() {
    var vars = [],
      hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars[hash[0]] = hash[1];
    }
    return vars;
  }
  
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  
  /* Remove hash from URL */
  function remove_hash_from_url() {
    var uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
    }
  }
  
  ; /*})'"*/ ; /*})'"*/
  (function ($) {
    /***************************************************************************
     * Questions Ajax
     **************************************************************************/
    Drupal.behaviors.flQuestions = {
      attach: function (context, settings) {
        $('#color_yes', context).on('click', function (e) {
          //Analytics Event Question module
          dataLayer.push({
            'page.category.primaryCategory': 'Question module'
          });
          $('#zone-footer, .pane-bean:not(.pane-bean-color-question-block), .pane-node.panel-pane').hide();
  
          $('.front .pane-bean-color-question-block .first-item').css('background', 'none').removeClass("hero-large").addClass("first-item-slider");
          analyticsEventCall('Question module', 'Click', 'Yes', undefined, false);
          $.ajax({
            url: Drupal.settings.pathPrefix + "color-question-yes-slider",
            //dataType: 'html',
            success: function (jsonResult) {
              $('.color-quest-first-block').replaceWith(jsonResult);
              Drupal.attachBehaviors($('.color-quest-first-block'));
              $('#color-questions-slider').addClass('slide').addClass('slide1').addClass('no-colour');
              $('.slider-1 .color-box').removeClass('selected');
              dataLayer.push({
                'page.category.subCategory6': $('.active').find('.queston-slider-title').text()
              });
            },
            error: function () {}
          });
          return false;
        });
        $('.pane-bean-color-question-block').after('<a id="topContent"></a>');
        if ($('#email-error').length) {
          $('.page-node div.main-container div.alert.alert-block.alert-danger').hide();
        }
      }
    };
  }(jQuery));
  
  
  jQuery(document).ready(function ($) {
    $('#color_no').click(function () {
      //Analytics Event Question module
      dataLayer.push({
        'page.category.primaryCategory': 'Question module'
      });
      $('#zone-footer, .pane-bean:not(.pane-bean-color-question-block)').hide();
      $('.front .pane-bean-color-question-block .first-item').removeClass("hero-large");
      analyticsEventCall('Question module', 'Click', 'No', undefined, false);
      $.ajax({
        url: Drupal.settings.pathPrefix + "color-question-no-block",
        success: function (result) {
          $('.color-quest-first-block').replaceWith(result);
        },
        error: function () {}
      });
      // it's important to return false from the click
      // handler in order to cancel the default action
      // of the link which is to redirect to the url and
      // execute the AJAX request
      return false;
    });
  });; /*})'"*/ ; /*})'"*/
  var searchProducts = [];
  var prd_arr_search = 0;
  var cartProducts = [];
  var prd_arr_cart = 0;
  var listingProducts = [];
  var prd_arr_listing = 0;
  var recProducts = [];
  var prd_arr_rec = 0;
  var flourish_data_layer = {};
  var flourish_products_listing = [];
  var scrapBookProducts = [];
  var prd_arr_scrapbook = 0;
  var scrap_no_color = 0;
  var scrap_with_color = 0;
  var delta = 0;
  
  //The behaviors will be executed on every AJAX requests
  (function ($) {
    Drupal.behaviors.flourish_google_tag_manager = {
      attach: function (context, settings) {
        //data_layer.pageInstanceID
        if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.pageInstanceID != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.pageInstanceID != '') {
          flourish_data_layer.pageInstanceID = Drupal.settings.flourish_google_tag_manager.data_layer.pageInstanceID;
        }
        //data_layer.siteCode
        if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.siteCode != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.siteCode != '') {
          flourish_data_layer.siteCode = Drupal.settings.flourish_google_tag_manager.data_layer.siteCode;
        }
  
        if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.trafficClassificationID != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.trafficClassificationID != '') {
          flourish_data_layer.trafficClassificationID = Drupal.settings.flourish_google_tag_manager.data_layer.trafficClassificationID;
        }
  
        productFilterPageView();
        if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page != 'undefined') {
          if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.pageInfo != 'undefined') {
            //data_layer.page.pageInfo.pageID
            flourish_data_layer.page = {};
            flourish_data_layer.page.pageInfo = {};
            flourish_data_layer.page.pageInfo.pageID = Drupal.settings.flourish_google_tag_manager.data_layer.page.pageInfo.pageID;
  
            //data_layer.page.pageInfo.pageName
            flourish_data_layer.page.pageInfo.pageName = Drupal.settings.flourish_google_tag_manager.data_layer.page.pageInfo.pageName;
  
            //data_layer.page.pageInfo.destinationURL
            flourish_data_layer.page.pageInfo.destinationURL = Drupal.settings.flourish_google_tag_manager.data_layer.page.pageInfo.destinationURL;
  
            //data_layer.page.pageInfo.referringURL
            if (Drupal.settings.flourish_google_tag_manager.data_layer.page.pageInfo.referringURL == 'undefined') {
              flourish_data_layer.page.pageInfo.referringURL = undefined;
            } else {
              flourish_data_layer.page.pageInfo.referringURL = Drupal.settings.flourish_google_tag_manager.data_layer.page.pageInfo.referringURL;
            }
  
            //data_layer.page.pageInfo.language
            flourish_data_layer.page.pageInfo.language = Drupal.settings.flourish_google_tag_manager.data_layer.page.pageInfo.language;
  
            //data_layer.page.pageInfo.geoRegion
            flourish_data_layer.page.pageInfo.geoRegion = Drupal.settings.flourish_google_tag_manager.data_layer.page.pageInfo.geoRegion;
  
            //data_layer.page.category.pageType
            flourish_data_layer.page.category = {};
            flourish_data_layer.page.attributes = {};
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.category.pageType != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.page.category.pageType != '') {
              flourish_data_layer.page.category.pageType = Drupal.settings.flourish_google_tag_manager.data_layer.page.category.pageType;
            }
  
            //data_layer.page.category.primaryCategory
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.category.primaryCategory != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.page.category.primaryCategory != '') {
              flourish_data_layer.page.category.primaryCategory = Drupal.settings.flourish_google_tag_manager.data_layer.page.category.primaryCategory;
            }
            //data_layer.page.category.subCategory1
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory1 != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory1 != '') {
              flourish_data_layer.page.category.subCategory1 = Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory1;
            }
            //data_layer.page.category.subCategory2
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory2 != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory2 != '') {
              flourish_data_layer.page.category.subCategory2 = Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory2;
            }
            //data_layer.page.category.subCategory3
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory3 != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory3 != '') {
              flourish_data_layer.page.category.subCategory3 = Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory3;
            }
            //data_layer.page.category.subCategory4
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory4 != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory4 != '') {
              flourish_data_layer.page.category.subCategory4 = Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory4;
            }
            //data_layer.page.category.subCategory5
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory5 != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory5 != '') {
              flourish_data_layer.page.category.subCategory5 = Drupal.settings.flourish_google_tag_manager.data_layer.page.category.subCategory5;
            }
  
            //data_layer.page.attributes.functionalityVersion
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.page.attributes.functionalityVersion != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.page.attributes.functionalityVersion != '') {
              flourish_data_layer.page.attributes.functionalityVersion = Drupal.settings.flourish_google_tag_manager.data_layer.page.attributes.functionalityVersion;
            }
          }
        }
  
        if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.products != 'undefined') {
          flourish_data_layer.products = [];
          flourish_data_layer.products.productInfo = {};
          flourish_data_layer.products.category = {};
          if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo != 'undefined') {
            //data_layer.products.productInfo.productID
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.productID != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.productID != '') {
              flourish_data_layer.products.productInfo.productID = Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.productID;
            }
            //data_layer.products.productInfo.productName
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.productName != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.productName != '') {
              flourish_data_layer.products.productInfo.productName = Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.productName;
            }
  
            //data_layer.products.productInfo.colourID
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.colourID != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.colourID != '') {
              flourish_data_layer.products.productInfo.colourID = Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.colourID;
            }
            //data_layer.products.productInfo.colourName
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.colourName != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.colourName != '') {
              flourish_data_layer.products.productInfo.colourName = Drupal.settings.flourish_google_tag_manager.data_layer.products.productInfo.colourName;
            }
          }
  
          if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.products.category != 'undefined') {
            //data_layer.products.category.primaryCategory
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.products.category.primaryCategory != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.products.category.primaryCategory != '') {
              flourish_data_layer.products.category.primaryCategory = Drupal.settings.flourish_google_tag_manager.data_layer.products.category.primaryCategory;
            }
          }
        }
  
        if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.user != 'undefined') {
          //data_layer.user.userID
          flourish_data_layer.user = {};
          flourish_data_layer.user.segment = {};
  
          flourish_data_layer.user.userID = Drupal.settings.flourish_google_tag_manager.data_layer.user.userID;
  
          if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.user.segment != 'undefined') {
            //data_layer.user.segment.loginType
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.user.segment.loginType != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.user.segment.loginType != '') {
              flourish_data_layer.user.segment.loginType = Drupal.settings.flourish_google_tag_manager.data_layer.user.segment.loginType;
            }
  
            //data_layer.user.segment.registrationType
            if (typeof Drupal.settings.flourish_google_tag_manager.data_layer.user.segment.registrationType != 'undefined' && Drupal.settings.flourish_google_tag_manager.data_layer.user.segment.registrationType != '') {
              if (Drupal.settings.flourish_google_tag_manager.data_layer.user.segment.registrationType == 'undefined') {
                flourish_data_layer.user.segment.registrationType = undefined;
              } else {
                flourish_data_layer.user.segment.registrationType = Drupal.settings.flourish_google_tag_manager.data_layer.user.segment.registrationType;
              }
            }
          }
        }
  
        //Pagination Events
        $('.pagination > li > a', context).unbind().click(function () {
          if ($(this).parents('li').hasClass('pager-first')) {
            analyticsEventCall('Pagination', 'Click', 'First', undefined, false);
          } else if ($(this).parents('li').hasClass('pager-last')) {
            analyticsEventCall('Pagination', 'Click', 'Last', undefined, false);
          } else if ($(this).parents('li').hasClass('next')) {
            if ($('body').hasClass('page-colour-inspiration')) {
              if ($(window).width() < 768) {
                analyticsEventCall('Inspiration filter', 'View more', undefined, undefined, false);
              } else {
                analyticsEventCall('Pagination', 'Click', 'Next', undefined, false);
              }
            } else {
              analyticsEventCall('Pagination', 'Click', 'Next', undefined, false);
            }
          } else if ($(this).parents('li').hasClass('prev')) {
            analyticsEventCall('Pagination', 'Click', 'Back', undefined, false);
          } else if ($(this).not('li[class]')) {
            if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
              if (isNaN(parseInt($(this).text()))) {
                if ($(this).prev().hasClass('prev')) {
                  analyticsEventCall('Pagination', 'Click', 'Back', undefined, false);
                } else {
                  if ($('body').hasClass('page-colour-inspiration')) {
                    if ($(window).width() < 768) {
                      analyticsEventCall('Inspiration filter', 'View more', undefined, undefined, false);
                    } else {
                      analyticsEventCall('Pagination', 'Click', 'Next', undefined, false);
                    }
                  } else {
                    analyticsEventCall('Pagination', 'Click', 'Next', undefined, false);
                  }
                }
              } else {
                analyticsEventCall('Pagination', 'Click', $(this).text(), undefined, false);
              }
            }
          }
        });
  
        // Finish filter select - product.
        $(".form-item-product-finish [name=product_finish]").once("PLPproductFinishChange").on("change", function () {
          var selected_finish = $('.form-item-product-finish [name=product_finish]:checked').val();
          analyticsEventCall('Product filter', 'Change finish filter', 'Finish', selected_finish, false);
        });
  
        // Product Type filter select - product.
        $(".form-item-product-types [name=product_types]").once("PLPproductTypeChange").on("change", function () {
          var selected_product_type = $('.form-item-product-types [name=product_types]:checked').val();
          analyticsEventCall('Product filter', 'Change product type filter', 'Product type', selected_product_type, false);
        });
  
        // Surface filter select - product.
        $('.form-item-product-surface-usage input[type=checkbox]').once("PLPproductSurfaceChange").click(function () {
          var surfaces = [];
          $(".form-item-product-surface-usage input[type=checkbox]:checked").each(function () {
            surfaces.push($(this).val())
          });
          var all_surfaces = surfaces.join(',');
          analyticsEventCall('Product filter', 'Click surface filter', 'Surface', all_surfaces, false);
        });
  
        // Location filter select - product.
        $(".form-item-product-room-type [name=product_room_type]").once("PLPproductLocationChange").on("change", function () {
          var location = $('.form-item-product-room-type [name=product_room_type]:checked').val();
          analyticsEventCall('Product filter', 'Change location filter', 'Location', location, false);
        });
  
        // Product show more/less
        $('.product-listing-filters .btn-show-more').once("PLPShowMoreClick").click(function () {
          if ($(this).parent().find('.form-item-product-types').length > 0) {
            analyticsEventCall('Product filter', 'Click product type filter show more', 'Show more', 'Product type', false);
          }
  
          if ($(this).parent().find('.form-item-product-room-type').length > 0) {
            analyticsEventCall('Product filter', 'Click location filter show more', 'Show more', 'Location', false);
          }
  
          if ($(this).parent().find('.form-item-product-surface-usage').length > 0) {
            analyticsEventCall('Product filter', 'Click surface filter show more', 'Show more', 'Surface', false);
          }
  
          if ($(this).parent().find('.form-item-product-finish').length > 0) {
            analyticsEventCall('Product filter', 'Click finish filter show more', 'Show more', 'Finish', false);
          }
        });
  
        $('.product-listing-filters .btn-show-less').once("PLPShowLessClick").click(function () {
          if ($(this).parent().find('.form-item-product-types').length > 0) {
            analyticsEventCall('Product filter', 'Click product type filter show less', 'Show less', 'Product type', false);
          }
  
          if ($(this).parent().find('.form-item-product-room-type').length > 0) {
            analyticsEventCall('Product filter', 'Click location filter show less', 'Show less', 'Location', false);
          }
  
          if ($(this).parent().find('.form-item-product-surface-usage').length > 0) {
            analyticsEventCall('Product filter', 'Click surface filter show less', 'Show less', 'Surface', false);
          }
  
          if ($(this).parent().find('.form-item-product-finish').length > 0) {
            analyticsEventCall('Product filter', 'Click finish filter show less', 'Show less', 'Finish', false);
          }
        });
  
        // Color listing page filters.
  
        // Location filter select - Color.
        $(".flourish-colors-listing .form-item-color-room-type [name=color_room_type]").once("CLPLocationChange").on("change", function () {
          var location = $('.flourish-colors-listing .form-item-color-room-type [name=color_room_type]:checked').val();
          analyticsEventCall('Colour picker', 'Change location filter', 'Location', location, false);
        });
  
        // Surface filter select - Color.
        $('.flourish-colors-listing .color-surface input[type=checkbox]').once("CLPSurfaceChange").click(function () {
          var surfaces = [];
          $(".flourish-colors-listing .color-surface input[type=checkbox]:checked").each(function () {
            surfaces.push($(this).val())
          });
          var all_surfaces = surfaces.join(',');
          analyticsEventCall('Colour picker', 'Click surface filter', 'Surface', all_surfaces, false);
        });
  
        // Finish filter select - Color.
        $(".flourish-colors-listing .form-item-color-finish [name=color_finish]").once("CLPFinishChange").on("change", function () {
          var selected_finish = $('.flourish-colors-listing .form-item-color-finish [name=color_finish]:checked').val();
          analyticsEventCall('Colour picker', 'Change finish filter', 'Finish', selected_finish, false);
        });
  
        // Ideas page filters.
  
        // Location filter select - Ideas page.
        $(".page-colour-inspiration .form-item-article-room-type [name=article_room_type]").on("change", function (ev) {
          var location = $(this).attr('data-filter-name');
          location = upperFirsctchar(unescape(location.replace(/\+/g, " ")));
          analyticsEventCall('Inspiration filter', 'Change location filter', 'Location', location, false);
          ev.stopImmediatePropagation();
        });
  
        // Color hue filter - Ideas page.
        $('.page-colour-inspiration #hue-selector .solr-color-box-button').once("colorBoxBtn").on("click", function () {
          if ($(this).hasClass('not-available')) {} else {
            if ($('body').hasClass('page-colour-inspiration')) {
              var clssss_color_hue = $(this).attr('data-filter-name');
              clssss_color_hue = upperFirsctchar(unescape(clssss_color_hue.replace(/\+/g, " ")));
              if (typeof clssss_color_hue != 'undefined' && clssss_color_hue != '') {
                analyticsEventCall('Inspiration filter', 'Select hue', clssss_color_hue, undefined, false);
              }
            }
          }
        });
  
        //Product Type filter - Color
        $('#content_producttype_usage input.color-product-type').once('flourish_google_tag_manager').change(context, function (ev) {
          if (this.checked && typeof $(this).parent().find('label').text() != 'undefined' && $(this).parent().find('label').text() != '') {
            analyticsEventCall('Colour picker', 'Product Type', upperFirsctchar($(this).parent().find('label').text()), undefined, false);
          }
        });
  
        $('button[name="show_colors_link"], button[name="show_right_colors"]').once('flourish_google_tag_manager').click(context, function (ev) {
          if ($(this).attr("data-link") == 'popular') {
            //Colour picker Analytics Events
            analyticsEventCall('Colour picker', 'Select only popular colours', undefined, undefined, false);
          } else {
            //Colour picker Analytics Events
            analyticsEventCall('Colour picker', 'Select all colours', undefined, undefined, false);
          }
        });
  
        //Remedies DLR
        //Select your colour family : COlour Hue Selector
        $('#hue-selector .solr-color-box-button', context).once('flourish_google_tag_manager').click(function (ev) {
          if ($(this).hasClass('not-available')) {} else {
            if ($('body').hasClass('page-colors-listing')) {
              clssss_color_hue = upperFirsctchar($(this).val());
              if (typeof clssss_color_hue != 'undefined' && clssss_color_hue != '') {
                analyticsEventCall('Colour picker', 'Select hue', clssss_color_hue, undefined, false);
              }
            }
          }
        });
  
        $('.rowBox .color-box-child', context).once('flourish_google_tag_manager').click(function (ev) {
          //Redirect to color detail page
          if ($('body').hasClass('node-type-color')) {
            return true;
          }
          //Colour picker Analytics Events
          if (typeof $(this).data('title') != 'undefined' && $(this).data('title') != '') {
            analyticsEventCall('Colour picker', 'Select colour', upperFirsctchar($(this).data('title')) + "|" + $(this).data('colorid'), undefined, false);
          }
        });
  
  
        $('.colour-info-link', context).once('flourish_google_tag_manager').click(function (ev) {
          if (typeof $(this).attr("data-colorname") != "undefined" && $(this).attr("data-colorname") != "") {
            analyticsEventCall("Colour picker", "Read more", upperFirsctchar($(this).attr("data-colorname")) + "|" + $(this).attr("data-glcolorid"), undefined, false);
          }
        });
  
        //Collection picker Events
        $('.store-links .colors-ready-to-buy', context).once('flourish_google_tag_manager').click(function (e) {
          analyticsEventCall('Collection picker', 'Select colours off the shelf', undefined, undefined, false);
        });
        $('.store-links .colors-ready-to-mix', context).once('flourish_google_tag_manager').click(function (e) {
          analyticsEventCall('Collection picker', 'Select colours mixed for you', undefined, undefined, false);
        });
  
      },
      detach: function (context, settings, trigger) { //this function is option
        //$('.yourclass').unbind(); //or do whatever you want;
      }
    };
  })(jQuery);
  
  jQuery(document).ready(function () {
    $ = jQuery;
    /*
    $.get("http://ipinfo.io", function(response) {
      //alert(response.ip);
      dataLayer.push({'event':'user-event', 'trafficClassificationID':response.ip});
    }, "jsonp");
    
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
      dataLayer.push({'event':'user-event', 'trafficClassificationID':data.ip});
    });
    */
    productFilterPageView();
    //Search Page Datalayer Object Generate
    if (Drupal.settings.flourish_google_tag_manager.data_layer.page.category.pageType == 'Search') {
      var color_cnt = 0;
      var products_cnt = 0;
      var articles_cnt = 0;
      var total = 0;
  
      if ($('#color-results-value').length) {
        color_cnt = parseInt($('#color-results-value').text());
      }
      flourish_data_layer.page.attributes.searchResultCategory1 = color_cnt;
  
      if ($('#products-results-value').length) {
        products_cnt = parseInt($('#products-results-value').text());
      }
      flourish_data_layer.page.attributes.searchResultCategory2 = products_cnt;
  
      if ($('#articles-results-value').length) {
        articles_cnt = parseInt($('#articles-results-value').text());
      }
      flourish_data_layer.page.attributes.searchResultCategory3 = articles_cnt;
  
      total = parseInt(color_cnt) + parseInt(products_cnt) + parseInt(articles_cnt);
      flourish_data_layer.page.attributes.searchResultCategory5 = total;
  
      if ($('.view-display-id-view_searchproducts .view-content .item-list .views-row').length) {
        if (typeof flourish_data_layer.products == 'undefined') {
          flourish_data_layer['products'] = [];
        }
        $('.view-display-id-view_searchproducts .view-content .item-list .views-row').each(function () {
          var searchPrdName = $(this).find('.views-field.views-field-title-field .field-content > a').text();
          var searchPrdGlobalId = $(this).find('.product-global-id').text();
          var searchPrdCategory = $(this).find('.views-field.views-field-field-product-type .field-content').text();
  
          flourish_data_layer['products'][prd_arr_search] = {
            "productInfo": {
              "productID": searchPrdGlobalId,
              "productName": searchPrdName,
            },
            "category": {
              "primaryCategory": searchPrdCategory,
            }
          };
          prd_arr_search++;
        });
        //Pushing searchProducts to dataLayer
        if (typeof flourish_data_layer.products != 'undefined' || typeof flourish_data_layer.page.attributes != 'undefined') {
          if (Object.keys(flourish_data_layer.products).length == 0) {
            flourish_data_layer.products = undefined;
          }
          flourish_data_layer.event = 'ga-virtualPageView';
          dataLayer.push(flourish_data_layer);
        }
      } else {
        //Pushing searchProducts to dataLayer
        flourish_data_layer.event = 'ga-virtualPageView';
        dataLayer.push(flourish_data_layer);
      }
    }
  
    //Shopping cart Page Datalayer Object Generate
    if (flourish_data_layer.page.category.primaryCategory == 'Shopping list') {
      if ($('.basic-cart-cart .shoppinglist-google').length) {
        if (typeof flourish_data_layer.products == 'undefined') {
          flourish_data_layer['products'] = [];
        }
        $('.basic-cart-cart .shoppinglist-google').each(function () {
          var searchPrdGlobalId = $(this).attr('data-product-id');
          var searchPrdName = $(this).attr('data-product-name');
          var searchPrdSize = $(this).attr('data-product-size');
          var searchPrdCategory = $(this).attr('data-primary-category');
  
          flourish_data_layer['products'][prd_arr_cart] = {
            "productInfo": {
              "productID": searchPrdGlobalId,
              "productName": searchPrdName,
            },
            "category": {
              "primaryCategory": searchPrdCategory,
            }
          };
  
          if (searchPrdSize != '') {
            flourish_data_layer['products'][prd_arr_cart]["productInfo"]["size"] = searchPrdSize;
          }
  
          if ($(this).attr('data-color-id') != '') {
            var searchPrdColorid = $(this).attr('data-color-id');
            flourish_data_layer['products'][prd_arr_cart]['productInfo']['colourID'] = searchPrdColorid;
          }
          if ($(this).attr('data-color-id') != '') {
            var searchPrdColor = $(this).attr('data-color-name');
            flourish_data_layer['products'][prd_arr_cart]['productInfo']['colourName'] = searchPrdColor;
          }
          prd_arr_cart++;
        });
        //Pushing cartProducts to dataLayer
        if (typeof flourish_data_layer.products != 'undefined') {
          if (Object.keys(flourish_data_layer.products).length == 0) {
            flourish_data_layer.products = undefined;
          }
          flourish_data_layer.event = 'ga-virtualPageView';
          dataLayer.push(flourish_data_layer);
        }
      } else {
        flourish_data_layer.event = 'ga-virtualPageView';
        dataLayer.push(flourish_data_layer);
      }
    }
  
    //Recent products and Colour Testers product dataLayer
    if (($('section.testers-panels').length || $('section.testers-panels--2-col').length) || ($('.view-display-id-recent_product .view-content .product-item').length)) {
      if ($('.view-display-id-recent_product .view-content .product-item').length) {
        if (typeof flourish_data_layer.products == 'undefined') {
          flourish_data_layer['products'] = [];
        }
  
        if (Object.keys(flourish_data_layer.products).length > 0) {
          prd_arr_rec = Object.keys(flourish_data_layer.products).length;
        }
  
        $('.view-display-id-recent_product .view-content .product-item').each(function () {
          var recPrdName = $(this).find('.text-white a').text();
          var recPrdGlobalId = $(this).find('.views-field-field-product-global-id .field-content').text();
          var recPrdCategory = $(this).find('.views-field-field-product-type .google-analytics-listing-product-type').text();
          flourish_data_layer['products'][prd_arr_rec] = {
            "productInfo": {
              "productID": recPrdGlobalId,
              "productName": recPrdName,
            },
            "category": {
              "primaryCategory": recPrdCategory,
            }
          };
          prd_arr_rec++;
        });
      }
      // Colour Testers dataLayer
      if ($('section.testers-panels').length || $('section.testers-panels--2-col').length) {
        var testersPanel = $('section.testers-panels').length ? 'section.testers-panels' : 'section.testers-panels--2-col';
        if (typeof flourish_data_layer.products == 'undefined') {
          flourish_data_layer['products'] = [];
        }
  
        $(testersPanel + ' .row .testers-panel').each(function () {
          var testerPrdName = $(this).attr('data-tester-title');
          var testerPrdGlobalId = $(this).attr('data-tester-globalid');
          var testerCategory = $(this).attr('data-tester-type');
          var testerColorId = $('.scrap-book-add-color');
          var testerSize = $(this).find('.testers-panel__size').attr('data-tester-size');
  
          flourish_data_layer['products'][prd_arr_rec] = {
            "productInfo": {
              "productID": testerPrdGlobalId,
              "productName": testerPrdName,
              "size": testerSize,
              "colourID": testerColorId.data('colorid'),
              "colourName": $('.page-header > div').text(),
              "colourCollection": testerColorId.data('collection')
            },
            "category": {
              "primaryCategory": testerCategory
            }
          };
          prd_arr_rec++;
        });
  
      }
      //Pushing recent and colour tester products to dataLayer
      if (typeof flourish_data_layer.products != 'undefined') {
        if (Object.keys(flourish_data_layer.products).length > 0) {
          flourish_data_layer.event = 'ga-virtualPageView';
          dataLayer.push(flourish_data_layer);
        }
      }
    }
  
  
    //Scrapbook Page Datalayer Object Generate
    if (flourish_data_layer.page.category.pageType == 'Scrapbook' && flourish_data_layer.page.category.primaryCategory == 'Scrapbook') {
      if ($('.scrapbook-product-gtm').length) {
        scrap_no_color = 1;
        if (typeof flourish_data_layer.products == 'undefined') {
          flourish_data_layer['products'] = [];
        }
        $('.scrapbook-product-gtm').each(function () {
          var scrap_product_id = $(this).attr('data-product-id');
          var scrapProductName = $(this).attr('data-product-name');
          var scrapPrimaryCategory = $(this).attr('data-product-type');
  
          flourish_data_layer['products'][prd_arr_scrapbook] = {
            "productInfo": {
              "productID": scrap_product_id,
              "productName": scrapProductName
            },
            "category": {
              "primaryCategory": scrapPrimaryCategory
            }
          };
          prd_arr_scrapbook++;
        });
      }
  
  
      if ($('.scrapbook-product-color-gtm').length) {
        scrap_with_color = 1;
        if (typeof flourish_data_layer.products == 'undefined') {
          flourish_data_layer['products'] = [];
        }
        $('.scrapbook-product-color-gtm').each(function () {
          var scrap_product_id = $(this).attr('data-product-id');
          var scrapProductName = $(this).attr('data-product-name');
          var scrapPrimaryCategory = $(this).attr('data-product-type');
          var scrapColorId = $(this).attr('data-color-id');
          var scrapColorName = $(this).attr('data-color-name');
          var scrapColorcollection = $(this).attr('data-collection');
  
          flourish_data_layer['products'][prd_arr_scrapbook] = {
            "productInfo": {
              "productID": scrap_product_id,
              "productName": scrapProductName,
              "colourID": scrapColorId,
              "colourName": scrapColorName,
              "colourCollection": scrapColorcollection
            },
            "category": {
              "primaryCategory": scrapPrimaryCategory
            }
          };
          if (typeof $(this).attr('data-product-size') != 'undefined' && $(this).attr('data-product-size') != '') {
            flourish_data_layer['products'][prd_arr_scrapbook]['productInfo']['size'] = $(this).attr('data-product-size');
          }
          prd_arr_scrapbook++;
        });
      }
  
      //Pushing scrapBookProducts to dataLayer
      flourish_data_layer.event = 'ga-virtualPageView';
      dataLayer.push(flourish_data_layer);
    }
  
    //data_layer.page.category.subCategory6
    $('#color-questions-slider .n-slide,#color-questions-slider .p-slide').click(function (ev) {
      if (typeof $('.active').find('.queston-slider-title').text() == 'undefined') {
        dataLayer.push({
          'page.category.subCategory6': $('.active').find('.queston-slider-title').text()
        });
      }
    });
  
    $('#color-questions-slider .slider-indicators > li[data-target="#color-questions-slider"]').click(function (ev) {
      setTimeout(function () {
        dataLayer.push({
          'page.category.subCategory6': $('.active').find('.queston-slider-title').text()
        });
      }, 1500);
    });
  
    $(".add-top-shopping-list").click(function (ev) {
      //Shoppinglist Events
      if (typeof $('.product-name > div').text() != 'undefined' && $('.product-name > div').text() != '') {
        var productGlobalID = $('.white-box .scrap-book-add-product-color').attr('data-globalid');
        // Fetch product global ID for product without colors - e.g. Primer & Putty.
        if (typeof productGlobalID == 'undefined') {
          productGlobalID = $('.white-box .scrap-book-add-product').attr('data-globalid');
        }
        analyticsEventCall('Shoppinglist', 'Add product', upperFirsctchar($('.product-name > div').text()) + " | " + productGlobalID, undefined, false);
      }
      dataLayer.push({
        'products.productInfo.size': $('#edit-size').val()
      });
    });
  
    //Event data collection: Question module
    $('body').on('click', '#room-selector input', function (ev) {
      var room_name = $(this).val();
      if (typeof room_name != 'undefined' && room_name != '') {
        //Commented as Jurre asked to delete on 30/06/16
        //analyticsEventCall('Question module','Click','Rooms',undefined,false);
        analyticsEventCall('Question module', 'Select room', room_name, undefined, false);
      }
    });
  
    $('body').on('click', '#surface-selector input', function (ev) {
      var material_name = $(this).val();
      if (typeof material_name != 'undefined' && material_name != '') {
        //Commented as Jurre asked to delete on 30/06/16
        //analyticsEventCall('Question module','Click','Materials',undefined,false);
        analyticsEventCall('Question module', 'Select material', material_name, undefined, false);
      }
    });
  
    $('#color-questions-slider > a').click(function (ev) {
      analyticsEventCall('Question module', 'Click', 'See all colours', undefined, false);
    });
  
    $('#color_btn_all_ranges').click(function (ev) {
      analyticsEventCall('Question module', 'Click', 'See all colours', undefined, false);
    });
  
    $('#color_btn_products').click(function (ev) {
      analyticsEventCall('Question module', 'Click', 'See all products', undefined, false);
    });
  
    $('#color_btn_tips').click(function (ev) {
      analyticsEventCall('Question module', 'Click', 'Tips and advice', undefined, false);
    });
  
    $('#color_btn_inspiration').click(function (ev) {
      analyticsEventCall('Question module', 'Click', 'Inspiration page', undefined, false);
    });
  
    $('#color_btn_store').click(function (ev) {
      analyticsEventCall('Question module', 'Click', 'Storefinder', undefined, false);
    });
  
  
    //Contact Events 
    $('body').on('submit', '#contact-us-form', function (ev) {
      var contact_reason = $('#edit-submitted-your-reason-for-contacting-us option:selected').text();
      var mobNumb = $('#edit-submitted-phone-number').val();
      var email = $('#edit-submitted-email-address').val();
      if (typeof contact_reason != 'undefined' && contact_reason != '' && isEmail(email) && /^[0-9]*\.?[0-9]*$/.test(mobNumb)) {
        analyticsEventCall('Contact', 'Form submit', upperFirsctchar(contact_reason), undefined, false);
      }
    });
  
    $('body').on('submit', '#user-profile-list-form', function (ev) {
      var title = $('#edit-title').val();
      var firstname = $('#edit-first-name').val();
      var lastname = $('#edit-last-name').val();
      var eventvalue_string = '';
      if (title != '') {
        var title_label = $('#edit-title').prev('label').text();
        title_label = title_label.replace("*", "").trim();
        eventvalue_string = title_label + ', ';
      }
      if (firstname != '') {
        var first_name_label = $('#edit-first-name').prev('label').text();
        first_name_label = first_name_label.replace("*", "").trim();
        eventvalue_string = eventvalue_string + first_name_label + ', ';
      }
      if (lastname != '') {
        var last_name_label = $('#edit-last-name').prev('label').text();
        last_name_label = last_name_label.replace("*", "").trim();
        eventvalue_string = eventvalue_string + last_name_label;
      }
      analyticsEventCall('Account', 'Update', eventvalue_string, undefined, false);
    });
  
    $("#newsletter-subscription-form").on("submit", function () {
      analyticsEventCall('Account', 'Register', 'Newsletter footer', undefined, false);
    });
  
    $('body').on('click', '#accordionContactus-OLD > div > div', function (ev) {
      if ($(this).hasClass('current')) {
        if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
          analyticsEventCall('Contact', 'Click', upperFirsctchar($(this).find('h4').text().trim()), undefined, false);
        }
      }
    });
  
    //Shoppinglist Events
    $(".basic-cart-delete-image > a").on("click", function () {
      var lang = Drupal.settings.flourish_google_tag_manager.lang;
      var hreff = $(this).attr('href');
      var repl_str = Drupal.settings.basePath + 'cart/remove/';
      // Handle product delete from shopping list for multilingual sites.
      if (lang) {
        var repl_str = Drupal.settings.basePath + lang + '/cart/remove/';
      }
      hreff = hreff.replace(repl_str, "");
      if (typeof $('.form-item-cartcontents-' + hreff + ' .basic-cart-cart-node-title .shplst-title').text() != 'undefined' && $('.form-item-cartcontents-' + hreff + ' .basic-cart-cart-node-title .shplst-title').text() != '') {
        analyticsEventCall('Shoppinglist', 'Delete product', upperFirsctchar($('.form-item-cartcontents-' + hreff + ' .basic-cart-cart-node-title .shplst-title').text()) + ' | ' + $(this).data('glbid'), undefined, false);
      }
    });
  
    $(".page-shoppinglist .mp-icdiv-print > a").on("click", function () {
      analyticsEventCall('Shoppinglist', 'Print', undefined, undefined, false);
    });
  
    $(".page-shoppinglist .mp-icdiv-email > a").on("click", function () {
      analyticsEventCall('Shoppinglist', 'E-mail', undefined, undefined, false);
    });
  
    if ($('body').hasClass('page-shoppinglist')) {
      var flourish_shoppinglist = {};
    }
  
    $('.page-shoppinglist .basic-cart-cart-quantity select').focus(function (ev) {
      var shplistid = $(this).attr('id');
      shplistid = shplistid.split('edit-cartcontents-');
      flourish_shoppinglist[shplistid[1]] = $(this).val();
    });
  
    $('.page-shoppinglist .basic-cart-cart-quantity select').change(function (ev) {
      var shplistidchanged = $(this).attr('id');
      shplistidchanged = shplistidchanged.split('edit-cartcontents-');
      if ($(this).val() > flourish_shoppinglist[shplistidchanged[1]]) {
        analyticsEventCall('Shoppinglist', 'Plus quantity', $(this).val(), undefined, false);
      } else if ($(this).val() < flourish_shoppinglist[shplistidchanged[1]]) {
        analyticsEventCall('Shoppinglist', 'Minus quantity', $(this).val(), undefined, false);
      }
      flourish_shoppinglist[shplistidchanged[1]] = $(this).val();
    });
  
    //Product information Events
    $('body').on('click', '.node-type-platform-product .custom-tabs > li', function (ev) {
      if (!$(this).hasClass('active') && typeof $(this).text() != 'undefined' && $(this).text() != '') {
        analyticsEventCall('Product information', upperFirsctchar($(this).text().trim()), 'Open', undefined, false);
      }
    });
  
    //Social Events
    $(".social-media-links >li > a").on("click", function () {
      analyticsEventCall('Social', 'Visit', $(this).attr('title'), undefined, false);
    });
  
    $('body').on('click', '.front #color-question-show-me', function (ev) {
      analyticsEventCall('Question module', 'Click', 'See all colours', undefined, false);
    });
  
    $('body').on('click', '.front #color-question-no .fl-cq-btn-products', function (ev) {
      analyticsEventCall('Question module', 'Click', 'See all products', undefined, false);
    });
  
    $('body').on('click', '.front #color-question-no .fl-cq-btn-advise', function (ev) {
      analyticsEventCall('Question module', 'Click', 'Tips and advice', undefined, false);
    });
  
    $('body').on('click', '.front #color-question-no .fl-cq-btn-ideas', function (ev) {
      analyticsEventCall('Question module', 'Click', 'inspiration page', undefined, false);
    });
  
    $('body').on('click', '.front #color-question-no .fl-cq-btn-store', function (ev) {
      analyticsEventCall('Question module', 'Click', 'storefinder', undefined, false);
    });
  
    $('body').on('click', '.front .pane-content .field-name-node-link a', function (ev) {
      if (typeof $(this).parents('.pane-content').find('.field-name-title-field').text() != 'undefined' && $(this).parents('.pane-content').find('.field-name-title-field').text() != '') {
        analyticsEventCall('Content', 'Click', $(this).parents('.pane-content').find('.field-name-title-field').text(), undefined, false);
      }
    });
  
    $("#at_hover > a").on("click", function () {
      if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
        analyticsEventCall('Social', 'Share', upperFirsctchar($(this).text()), undefined, false);
      }
    });
  
    $(".article-share a").on("click", function () {
      analyticsEventCall('Social', 'Share', undefined, undefined, false);
    });
  
    $(".addthis_toolbox > a").on("click", function () {
      if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
        analyticsEventCall('Social', 'Share', upperFirsctchar($(this).text()), undefined, false);
      }
    });
  
    //Mobile Events
    $("#sidebar-btn").on("click", function () {
      analyticsEventCall('Mobile', 'Click', 'Menu', undefined, false);
    });
  
    $("#block-menu-menu-dulux .block-title").on("click", function () {
      if ($(this).hasClass('footer-menu-expanded')) {
        if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
          analyticsEventCall('Mobile', 'Click', upperFirsctchar($(this).text()), undefined, false);
        }
      }
    });
  
    $("#block-menu-menu-other-dulux .block-title").on("click", function () {
      if ($(this).hasClass('footer-menu-expanded')) {
        if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
          analyticsEventCall('Mobile', 'Click', upperFirsctchar($(this).text()), undefined, false);
        }
      }
    });
  
    $("#block-menu-menu-access .block-title").on("click", function () {
      if ($(this).hasClass('footer-menu-expanded')) {
        if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
          analyticsEventCall('Mobile', 'Click', upperFirsctchar($(this).text()), undefined, false);
        }
      }
    });
  
    $("#block-menu-menu-about-us .block-title").on("click", function () {
      if ($(this).hasClass('footer-menu-expanded')) {
        if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
          analyticsEventCall('Mobile', 'Click', upperFirsctchar($(this).text()), undefined, false);
        }
      }
    });
  
    $("#block-menu-menu-dulux-greece .block-title").on("click", function () {
      if ($(this).hasClass('footer-menu-expanded')) {
        if (typeof $(this).text() != 'undefined' && $(this).text() != '') {
          analyticsEventCall('Mobile', 'Click', upperFirsctchar($(this).text()), undefined, false);
        }
      }
    });
  
    $('body').on('click', '.page-colors-listing .filter-tabs .filter-tab', function (e) {
      if ($(this).hasClass('current')) {
        analyticsEventCall('Colour picker', 'Select filter category', upperFirsctchar($(this).text()), undefined, false);
      }
    });
  
  
    $('body').on('click', '#hue-collection > a', function (e) {
      if (typeof $(this).prev().text() != 'undefined' && $(this).prev().text() != '') {
        analyticsEventCall('Collection 