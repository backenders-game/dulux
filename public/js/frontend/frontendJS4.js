/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.16
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
/*(function () {
    'use strict';
    if (window && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems,
            tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function () {
            return;
        };
        var observeChanges = function () {
            var observer;
            window.addEventListener('resize', debouncedCheck, false);
            window.addEventListener('orientationchange', debouncedCheck, false);
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                unobserveChanges = function () {
                    try {
                        observer.disconnect();
                        window.removeEventListener('resize', debouncedCheck, false);
                        window.removeEventListener('orientationchange', debouncedCheck, false);
                    } catch (ignore) {}
                };
            } else {
                document.documentElement.addEventListener('DOMSubtreeModified', debouncedCheck, false);
                unobserveChanges = function () {
                    document.documentElement.removeEventListener('DOMSubtreeModified', debouncedCheck, false);
                    window.removeEventListener('resize', debouncedCheck, false);
                    window.removeEventListener('orientationchange', debouncedCheck, false);
                };
            }
        };
        var xlinkNS = 'http://www.w3.org/1999/xlink';
        checkUseElems = function () {
            var base,
                bcr,
                fallback = 'https://i.icomoon.io/public/a9f818e185/Flourish-feature-icons/symbol-defs.svg?872760b0', // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
                hash,
                i,
                Request,
                inProgressCount = 0,
                isHidden,
                url,
                uses,
                xhr;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                if (Request.withCredentials !== undefined) {
                    Request = XMLHttpRequest;
                } else {
                    Request = XDomainRequest || undefined;
                }
            }
            if (Request === undefined) {
                return;
            }
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
                    observeChanges(); // watch for changes to DOM
                }
            }
            function attrUpdateFunc(spec) {
                return function () {
                    if (cache[spec.base] !== true) {
                        spec.useEl.setAttributeNS(xlinkNS, 'xlink:href', '#' + spec.hash);
                    }
                };
            }
            function onloadFunc(xhr) {
                return function () {
                    var body = document.body;
                    var x = document.createElement('x');
                    var svg;
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    svg = x.getElementsByTagName('svg')[0];
                    if (svg) {
                        svg.setAttribute('aria-hidden', 'true');
                        svg.style.position = 'absolute';
                        svg.style.width = 0;
                        svg.style.height = 0;
                        svg.style.overflow = 'hidden';
                        body.insertBefore(svg, body.firstChild);
                    }
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName('use');
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (ignore) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                url = uses[i].getAttributeNS(xlinkNS, 'href').split('#');
                base = url[0];
                hash = url[1];
                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (base.length) {
                        // schedule updating xlink:href
                        xhr = cache[base];
                        if (xhr !== true) {
                            // true signifies that prepending the SVG was not required
                            setTimeout(attrUpdateFunc({
                                useEl: uses[i],
                                base: base,
                                hash: hash
                            }), 0);
                        }
                        if (xhr === undefined) {
                            xhr = new Request();
                            cache[base] = xhr;
                            xhr.onload = onloadFunc(xhr);
                            xhr.onerror = onErrorTimeout(xhr);
                            xhr.ontimeout = onErrorTimeout(xhr);
                            xhr.open('GET', base);
                            xhr.send();
                            inProgressCount += 1;
                        }
                    }
                } else {
                    if (!isHidden) {
                        if (cache[base] === undefined) {
                            // remember this URL if the use element was not empty and no request was sent
                            cache[base] = true;
                        } else if (cache[base].onload) {
                            // if it turns out that prepending the SVG is not necessary,
                            // abort the in-progress xhr.
                            cache[base].abort();
                            cache[base].onload = undefined;
                            cache[base] = true;
                        }
                    }
                }
            }
            uses = '';
            inProgressCount += 1;
            observeIfDone();
        };
        // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
        window.addEventListener('load', function winLoad() {
            window.removeEventListener('load', winLoad, false); // to prevent memory leaks
            tid = setTimeout(checkUseElems, 0);
        }, false);
    }
}()); */

//svg performance js

/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    'use strict';
    if (window && window.addEventListener) {
      var cache = Object.create(null); // holds xhr objects to prevent multiple requests
      var checkUseElems,
        tid; // timeout id
      var debouncedCheck = function () {
        clearTimeout(tid);
        tid = setTimeout(checkUseElems, 100);
      };
      var unobserveChanges = function () {
        return;
      };
      var observeChanges = function () {
        var observer;
        window.addEventListener('resize', debouncedCheck, false);
        window.addEventListener('orientationchange', debouncedCheck, false);
        if (window.MutationObserver) {
          observer = new MutationObserver(debouncedCheck);
          observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true
          });
          unobserveChanges = function () {
            try {
              observer.disconnect();
              window.removeEventListener('resize', debouncedCheck, false);
              window.removeEventListener('orientationchange', debouncedCheck, false);
            } catch (ignore) {}
          };
        } else {
          document.documentElement.addEventListener('DOMSubtreeModified', debouncedCheck, false);
          unobserveChanges = function () {
            document.documentElement.removeEventListener('DOMSubtreeModified', debouncedCheck, false);
            window.removeEventListener('resize', debouncedCheck, false);
            window.removeEventListener('orientationchange', debouncedCheck, false);
          };
        }
      };
      var xlinkNS = 'http://www.w3.org/1999/xlink';
      checkUseElems = function () {
        var base,
          bcr,
          //fallback = 'https://i.icomoon.io/public/a9f818e185/Flourish-Icons/symbol-defs.svg?917cc761', // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
          fallback = Drupal.settings.basePath + 'profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg', // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
          hash,
          i,
          Request,
          inProgressCount = 0,
          isHidden,
          url,
          uses,
          xhr;
        if (window.XMLHttpRequest) {
          Request = new XMLHttpRequest();
          if (Request.withCredentials !== undefined) {
            Request = XMLHttpRequest;
          } else {
            Request = XDomainRequest || undefined;
          }
        }
        if (Request === undefined) {
          return;
        }
  
        function observeIfDone() {
          // If done with making changes, start watching for chagnes in DOM again
          inProgressCount -= 1;
          if (inProgressCount === 0) { // if all xhrs were resolved
            observeChanges(); // watch for changes to DOM
          }
        }
  
        function attrUpdateFunc(spec) {
          return function () {
            if (cache[spec.base] !== true) {
              spec.useEl.setAttributeNS(xlinkNS, 'xlink:href', '#' + spec.hash);
            }
          };
        }
  
        function onloadFunc(xhr) {
          return function () {
            var body = document.body;
            var x = document.createElement('x');
            var svg;
            xhr.onload = null;
            x.innerHTML = xhr.responseText;
            svg = x.getElementsByTagName('svg')[0];
            if (svg) {
              svg.setAttribute('aria-hidden', 'true');
              svg.style.position = 'absolute';
              svg.style.width = 0;
              svg.style.height = 0;
              svg.style.overflow = 'hidden';
              body.insertBefore(svg, body.firstChild);
            }
            observeIfDone();
          };
        }
  
        function onErrorTimeout(xhr) {
          return function () {
            xhr.onerror = null;
            xhr.ontimeout = null;
            observeIfDone();
          };
        }
        unobserveChanges(); // stop watching for changes to DOM
        // find all use elements
        uses = document.getElementsByTagName('use');
        for (i = 0; i < uses.length; i += 1) {
          try {
            bcr = uses[i].getBoundingClientRect();
          } catch (ignore) {
            // failed to get bounding rectangle of the use element
            bcr = false;
          }
          url = uses[i].getAttributeNS(xlinkNS, 'href').split('#');
          base = url[0];
          hash = url[1];
          isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
          if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
            // the use element is empty
            // if there is a reference to an external SVG, try to fetch it
            // use the optional fallback URL if there is no reference to an external SVG
            if (fallback && !base.length && hash && !document.getElementById(hash)) {
              base = fallback;
            }
            if (base.length) {
              // schedule updating xlink:href
              xhr = cache[base];
              if (xhr !== true) {
                // true signifies that prepending the SVG was not required
                setTimeout(attrUpdateFunc({
                  useEl: uses[i],
                  base: base,
                  hash: hash
                }), 0);
              }
              if (xhr === undefined) {
                xhr = new Request();
                cache[base] = xhr;
                xhr.onload = onloadFunc(xhr);
                xhr.onerror = onErrorTimeout(xhr);
                xhr.ontimeout = onErrorTimeout(xhr);
                xhr.open('GET', base);
                xhr.send();
                inProgressCount += 1;
              }
            }
          } else {
            if (!isHidden) {
              if (cache[base] === undefined) {
                // remember this URL if the use element was not empty and no request was sent
                cache[base] = true;
              } else if (cache[base].onload) {
                // if it turns out that prepending the SVG is not necessary,
                // abort the in-progress xhr.
                cache[base].abort();
                cache[base].onload = undefined;
                cache[base] = true;
              }
            }
          }
        }
        uses = '';
        inProgressCount += 1;
        observeIfDone();
      };
      // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
      window.addEventListener('load', function winLoad() {
        window.removeEventListener('load', winLoad, false); // to prevent memory leaks
        tid = setTimeout(checkUseElems, 0);
      }, false);
    }
  }());
  
  /*jslint browser: true */
  /*global XDomainRequest, MutationObserver, window */
  (function () {
    'use strict';
    if (window && window.addEventListener) {
      var cache = Object.create(null); // holds xhr objects to prevent multiple requests
      var checkUseElems,
        tid; // timeout id
      var debouncedCheck = function () {
        clearTimeout(tid);
        tid = setTimeout(checkUseElems, 100);
      };
      var unobserveChanges = function () {
        return;
      };
      var observeChanges = function () {
        var observer;
        window.addEventListener('resize', debouncedCheck, false);
        window.addEventListener('orientationchange', debouncedCheck, false);
        if (window.MutationObserver) {
          observer = new MutationObserver(debouncedCheck);
          observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true
          });
          unobserveChanges = function () {
            try {
              observer.disconnect();
              window.removeEventListener('resize', debouncedCheck, false);
              window.removeEventListener('orientationchange', debouncedCheck, false);
            } catch (ignore) {}
          };
        } else {
          document.documentElement.addEventListener('DOMSubtreeModified', debouncedCheck, false);
          unobserveChanges = function () {
            document.documentElement.removeEventListener('DOMSubtreeModified', debouncedCheck, false);
            window.removeEventListener('resize', debouncedCheck, false);
            window.removeEventListener('orientationchange', debouncedCheck, false);
          };
        }
      };
      var xlinkNS = 'http://www.w3.org/1999/xlink';
      checkUseElems = function () {
        var base,
          bcr,
          //fallback = 'https://i.icomoon.io/public/a9f818e185/Flourish-feature-icons/symbol-defs.svg?872760b0', // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
          fallback = Drupal.settings.basePath + 'profiles/flourish/themes/custom/flourish_rem/images/svg/defs/feature-icons-symbol-defs.svg', // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
          hash,
          i,
          Request,
          inProgressCount = 0,
          isHidden,
          url,
          uses,
          xhr;
        if (window.XMLHttpRequest) {
          Request = new XMLHttpRequest();
          if (Request.withCredentials !== undefined) {
            Request = XMLHttpRequest;
          } else {
            Request = XDomainRequest || undefined;
          }
        }
        if (Request === undefined) {
          return;
        }
  
        function observeIfDone() {
          // If done with making changes, start watching for chagnes in DOM again
          inProgressCount -= 1;
          if (inProgressCount === 0) { // if all xhrs were resolved
            observeChanges(); // watch for changes to DOM
          }
        }
  
        function attrUpdateFunc(spec) {
          return function () {
            if (cache[spec.base] !== true) {
              spec.useEl.setAttributeNS(xlinkNS, 'xlink:href', '#' + spec.hash);
            }
          };
        }
  
        function onloadFunc(xhr) {
          return function () {
            var body = document.body;
            var x = document.createElement('x');
            var svg;
            xhr.onload = null;
            x.innerHTML = xhr.responseText;
            svg = x.getElementsByTagName('svg')[0];
            if (svg) {
              svg.setAttribute('aria-hidden', 'true');
              svg.style.position = 'absolute';
              svg.style.width = 0;
              svg.style.height = 0;
              svg.style.overflow = 'hidden';
              body.insertBefore(svg, body.firstChild);
            }
            observeIfDone();
          };
        }
  
        function onErrorTimeout(xhr) {
          return function () {
            xhr.onerror = null;
            xhr.ontimeout = null;
            observeIfDone();
          };
        }
        unobserveChanges(); // stop watching for changes to DOM
        // find all use elements
        uses = document.getElementsByTagName('use');
        for (i = 0; i < uses.length; i += 1) {
          try {
            bcr = uses[i].getBoundingClientRect();
          } catch (ignore) {
            // failed to get bounding rectangle of the use element
            bcr = false;
          }
          url = uses[i].getAttributeNS(xlinkNS, 'href').split('#');
          base = url[0];
          hash = url[1];
          isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
          if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
            // the use element is empty
            // if there is a reference to an external SVG, try to fetch it
            // use the optional fallback URL if there is no reference to an external SVG
            if (fallback && !base.length && hash && !document.getElementById(hash)) {
              base = fallback;
            }
            if (base.length) {
              // schedule updating xlink:href
              xhr = cache[base];
              if (xhr !== true) {
                // true signifies that prepending the SVG was not required
                setTimeout(attrUpdateFunc({
                  useEl: uses[i],
                  base: base,
                  hash: hash
                }), 0);
              }
              if (xhr === undefined) {
                xhr = new Request();
                cache[base] = xhr;
                xhr.onload = onloadFunc(xhr);
                xhr.onerror = onErrorTimeout(xhr);
                xhr.ontimeout = onErrorTimeout(xhr);
                xhr.open('GET', base);
                xhr.send();
                inProgressCount += 1;
              }
            }
          } else {
            if (!isHidden) {
              if (cache[base] === undefined) {
                // remember this URL if the use element was not empty and no request was sent
                cache[base] = true;
              } else if (cache[base].onload) {
                // if it turns out that prepending the SVG is not necessary,
                // abort the in-progress xhr.
                cache[base].abort();
                cache[base].onload = undefined;
                cache[base] = true;
              }
            }
          }
        }
        uses = '';
        inProgressCount += 1;
        observeIfDone();
      };
      // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
      window.addEventListener('load', function winLoad() {
        window.removeEventListener('load', winLoad, false); // to prevent memory leaks
        tid = setTimeout(checkUseElems, 0);
      }, false);
    }
  }());; /*})'"*/ ; /*})'"*/
  /*! enscroll - v0.6.2 - 2016-03-24
   * Copyright (c) 2016 ; Licensed  */
  ! function (a, b, c, d) {
    var e = {
        verticalScrolling: !0,
        horizontalScrolling: !1,
        verticalScrollerSide: "right",
        showOnHover: !1,
        scrollIncrement: 20,
        minScrollbarLength: 40,
        pollChanges: !0,
        drawCorner: !0,
        drawScrollButtons: !1,
        clickTrackToScroll: !0,
        easingDuration: 500,
        propagateWheelEvent: !0,
        verticalTrackClass: "vertical-track",
        horizontalTrackClass: "horizontal-track",
        horizontalHandleClass: "horizontal-handle",
        verticalHandleClass: "vertical-handle",
        scrollUpButtonClass: "scroll-up-btn",
        scrollDownButtonClass: "scroll-down-btn",
        scrollLeftButtonClass: "scroll-left-btn",
        scrollRightButtonClass: "scroll-right-btn",
        cornerClass: "scrollbar-corner",
        zIndex: 1,
        addPaddingToPane: !0,
        horizontalHandleHTML: '<div class="left"></div><div class="right"></div>',
        verticalHandleHTML: '<div class="top"></div><div class="bottom"></div>'
      },
      f = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
      },
      g = b.requestAnimationFrame || b.mozRequestAnimationFrame || b.webkitRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
        setTimeout(a, 17)
      },
      h = function (b, c) {
        var d = a(b).css(c),
          e = /^-?\d+/.exec(d);
        return e ? +e[0] : 0
      },
      i = function (a) {
        var b, c, d = {
            width: "5px",
            height: "1px",
            overflow: "hidden",
            padding: "8px 0",
            visibility: "hidden",
            whiteSpace: "pre-line",
            font: "10px/1 serif"
          },
          e = document.createElement(a),
          f = document.createTextNode("a\na");
        for (c in d) e.style[c] = d[c];
        return e.appendChild(f), document.body.appendChild(e), b = e.scrollHeight < 28, document.body.removeChild(e), b
      },
      j = .5 * Math.PI,
      k = 10 * Math.log(2),
      l = function (a, b, c) {
        var d = j / b,
          e = a * d;
        return Math.round(e * Math.cos(d * c))
      },
      m = function (a, b, c) {
        return Math.round(a * k * Math.pow(2, -10 * c / b + 1) / b)
      },
      n = function (a, b, c, d) {
        return 2 * c / Math.PI * Math.asin((d - a) / b)
      },
      o = function (b) {
        var c = a(this).data("enscroll"),
          d = this,
          e = c.settings,
          f = function () {
            var b = a(this).data("enscroll"),
              c = b.settings;
            b && c.showOnHover && (c.verticalScrolling && a(b.verticalTrackWrapper).is(":visible") && a(b.verticalTrackWrapper).stop().fadeTo(275, 0), c.horizontalScrolling && a(b.horizontalTrackWrapper).is(":visible") && a(b.horizontalTrackWrapper).stop().fadeTo(275, 0), b._fadeTimer = null)
          };
        c && e.showOnHover && (c._fadeTimer ? clearTimeout(c._fadeTimer) : (e.verticalScrolling && a(c.verticalTrackWrapper).is(":visible") && a(c.verticalTrackWrapper).stop().fadeTo(275, 1), e.horizontalScrolling && a(c.horizontalTrackWrapper).is(":visible") && a(c.horizontalTrackWrapper).stop().fadeTo(275, 1)), b !== !1 && (c._fadeTimer = setTimeout(function () {
          f.call(d)
        }, 1750)))
      },
      p = function (b, c) {
        var d = a(b),
          e = d.data("enscroll"),
          f = d.scrollTop();
        e && e.settings.verticalScrolling && (d.scrollTop(f + c), e.settings.showOnHover && o.call(b))
      },
      q = function (b, c) {
        var d = a(b),
          e = d.data("enscroll"),
          f = d.scrollLeft();
        e && e.settings.horizontalScrolling && (d.scrollLeft(f + c), e.settings.showOnHover && o.call(b))
      },
      r = function (b) {
        if (1 === b.which) {
          var d, e, f, h, i, j, k, l, m, n = b.data.pane,
            p = a(n),
            q = p.data("enscroll"),
            r = !0,
            s = function () {
              r && (f !== h && (q._scrollingY || (q._scrollingY = !0, q._startY = p.scrollTop(), g(function () {
                t(p)
              })), e.style.top = f + "px", q._endY = f * m / l, h = f), g(s), q.settings.showOnHover && o.call(n))
            },
            u = function (a) {
              return r && (f = a.clientY - j - i, f = Math.min(0 > f ? 0 : f, l)), !1
            },
            v = function () {
              return r = !1, c.body.style.cursor = k, this.style.cursor = "", d.removeClass("dragging"), a(c.body).off("mousemove.enscroll.vertical").off("mouseup.enscroll.vertical"), a(c).off("mouseout.enscroll.vertical"), p.on("scroll.enscroll.pane", function (a) {
                x.call(this, a)
              }), !1
            };
          return d = a(q.verticalTrackWrapper).find(".enscroll-track"), e = d.children().first()[0], f = parseInt(e.style.top, 10), m = n.scrollHeight - (q._scrollHeightNoPadding ? a(n).height() : a(n).innerHeight()), i = b.clientY - a(e).offset().top, l = d.height() - a(e).outerHeight(), j = d.offset().top, p.off("scroll.enscroll.pane"), a(c.body).on({
            "mousemove.enscroll.vertical": u,
            "mouseup.enscroll.vertical": function (a) {
              v.call(e, a)
            }
          }), a(c).on("mouseout.enscroll.vertical", function (a) {
            a.target.nodeName && "HTML" === a.target.nodeName.toUpperCase() && v.call(e, a)
          }), d.hasClass("dragging") || (d.addClass("dragging"), k = a(c.body).css("cursor"), this.style.cursor = c.body.style.cursor = "ns-resize"), g(s), !1
        }
      },
      s = function (b) {
        if (1 === b.which) {
          var d, e, f, h, i, j, k, l, m, n = b.data.pane,
            p = a(n),
            q = a(n).data("enscroll"),
            r = !0,
            s = function () {
              r && (f !== h && (q._scrollingX || (q._scrollingX = !0, q._startX = p.scrollLeft(), g(function () {
                t(p)
              })), e.style.left = f + "px", q._endX = f * i / m, h = f), g(s), q.settings.showOnHover && o.call(n))
            },
            u = function (a) {
              return r && (f = a.clientX - k - j, f = Math.min(0 > f ? 0 : f, m)), !1
            },
            v = function () {
              return r = !1, d.removeClass("dragging"), c.body.style.cursor = l, this.style.cursor = "", d.removeClass("dragging"), a(c.body).off("mousemove.enscroll.horizontal").off("mouseup.enscroll.horizontal"), a(c).off("mouseout.enscroll.horizontal"), p.on("scroll.enscroll.pane", function (a) {
                x.call(this, a)
              }), !1
            };
          return d = a(q.horizontalTrackWrapper).find(".enscroll-track"), e = d.children().first()[0], f = parseInt(e.style.left, 10), i = n.scrollWidth - a(n).innerWidth(), j = b.clientX - a(e).offset().left, m = d.width() - a(e).outerWidth(), k = d.offset().left, p.off("scroll.enscroll.pane"), a(c.body).on({
            "mousemove.enscroll.horizontal": u,
            "mouseup.enscroll.horizontal": function (a) {
              v.call(e, a)
            }
          }), a(c).on("mouseout.enscroll.horizontal", function (a) {
            a.target.nodeName && "HTML" === a.target.nodeName.toUpperCase() && v.call(e, a)
          }), d.hasClass("dragging") || (d.addClass("dragging"), l = a("body").css("cursor"), this.style.cursor = c.body.style.cursor = "ew-resize"), g(s), !1
        }
      },
      t = function (a) {
        var b, c, d, e = a.data("enscroll"),
          f = e._duration;
        e._scrollingX === !0 && (b = e._endX - e._startX, 0 === b ? e._scrollingX = !1 : (c = a.scrollLeft(), d = n(e._startX, b, f, c), b > 0 ? c >= e._endX || c < e._startX ? e._scrollingX = !1 : (q(a, Math.max(1, l(b, f, d))), g(function () {
          t(a)
        })) : c <= e._endX || c > e._startX ? e._scrollingX = !1 : (q(a, Math.min(-1, l(b, f, d))), g(function () {
          t(a)
        })))), e._scrollingY === !0 && (b = e._endY - e._startY, 0 === b ? e._scrollingY = !1 : (c = a.scrollTop(), d = n(e._startY, b, f, c), b > 0 ? c >= e._endY || c < e._startY ? e._scrollingY = !1 : (p(a, Math.max(1, l(b, f, d))), g(function () {
          t(a)
        })) : c <= e._endY || c > e._startY ? e._scrollingY = !1 : (p(a, Math.min(-1, l(b, f, d))), g(function () {
          t(a)
        }))))
      },
      u = function (a, b) {
        var c = a.data("enscroll"),
          d = a.scrollLeft(),
          e = a[0].scrollWidth - a.innerWidth();
        return !c.settings.horizontalScrolling || c._scrollingY ? !1 : (c._scrollingX || (c._scrollingX = !0, c._startX = d, c._endX = c._startX, g(function () {
          t(a)
        })), c._endX = b > 0 ? Math.min(d + b, e) : Math.max(0, d + b), 0 > b && d > 0 || b > 0 && e > d)
      },
      v = function (a, b) {
        var c = a.data("enscroll"),
          d = a.scrollTop(),
          e = a[0].scrollHeight - (c._scrollHeightNoPadding ? a.height() : a.innerHeight());
        return !c.settings.verticalScrolling || c._scrollingX ? !1 : (c._scrollingY || (c._scrollingY = !0, c._startY = d, c._endY = c._startY, g(function () {
          t(a)
        })), c._endY = b > 0 ? Math.min(d + b, e) : Math.max(0, d + b), 0 > b && d > 0 || b > 0 && e > d)
      },
      w = function (b) {
        var c, d = a(this),
          e = d.data("enscroll"),
          g = e.settings.scrollIncrement,
          h = "deltaX" in b ? -b.deltaX : "wheelDeltaX" in b ? b.wheelDeltaX : 0,
          i = "deltaY" in b ? -b.deltaY : "wheelDeltaY" in b ? b.wheelDeltaY : "wheelDelta" in b ? b.wheelDelta : 0;
        Math.abs(h) > Math.abs(i) && 0 !== h ? (c = (h > 0 ? -g : g) << 2, (u(d, c) || !e.settings.propagateWheelEvent) && f(b)) : 0 !== i && (c = (i > 0 ? -g : g) << 2, (v(d, c) || !e.settings.propagateWheelEvent) && f(b))
      },
      x = function () {
        var b, c, d, e = a(this),
          f = e.data("enscroll");
        f && (f.settings.verticalScrolling && (c = a(f.verticalTrackWrapper).find(".enscroll-track")[0], b = c.firstChild, d = e.scrollTop() / (this.scrollHeight - (f._scrollHeightNoPadding ? e.height() : e.innerHeight())), d = isNaN(d) ? 0 : d, b.style.top = d * (a(c).height() - a(b).outerHeight()) + "px"), f.settings.horizontalScrolling && (c = a(f.horizontalTrackWrapper).find(".enscroll-track")[0], b = c.firstChild, d = e.scrollLeft() / (this.scrollWidth - e.innerWidth()), d = isNaN(d) ? 0 : d, b.style.left = d * (a(c).width() - a(b).innerWidth()) + "px"))
      },
      y = function (b) {
        var c, d = a(this),
          e = d.data("enscroll");
        if (!/(input)|(select)|(textarea)/i.test(this.nodeName) && b.target === this && e) {
          switch (c = e.settings.scrollIncrement, b.keyCode) {
            case 32:
            case 34:
              return v(d, d.height()), !1;
            case 33:
              return v(d, -d.height()), !1;
            case 35:
              return v(d, this.scrollHeight), !1;
            case 36:
              return v(d, -this.scrollHeight), !1;
            case 37:
              return u(d, -c), !1;
            case 38:
              return v(d, -c), !1;
            case 39:
              return u(d, c), !1;
            case 40:
              return v(d, c), !1
          }
          return !0
        }
      },
      z = function () {
        var b = this,
          d = a(b).data("enscroll").settings,
          e = !0,
          f = 0,
          h = 0,
          i = a(b).offset().top,
          j = i + a(b).outerHeight(),
          k = a(b).offset().left,
          l = k + a(b).outerWidth(),
          m = function (a) {
            var b = a.pageX,
              c = a.pageY;
            f = k > b ? b - k : b > l ? b - l : 0, h = i > c ? c - i : c > j ? c - j : 0
          },
          n = function () {
            d.horizontalScrolling && f && q(b, parseInt(f / 4, 10)), d.verticalScrolling && h && p(b, parseInt(h / 4, 10)), e && g(n)
          },
          o = function () {
            e = !1, a(c).off("mousemove.enscroll.pane").off("mouseup.enscroll.pane")
          };
        g(n), a(c).on({
          "mousemove.enscroll.pane": m,
          "mouseup.enscroll.pane": o
        })
      },
      A = function (a) {
        var b, c, e, h, i, j, k, l = this,
          n = function (a) {
            b = a.touches[0].clientX, c = a.touches[0].clientY, e || (e = c === i && b === h ? d : Math.abs(i - c) > Math.abs(h - b) ? "y" : "x"), f(a)
          },
          o = function () {
            j && ("y" === e ? (p(l, i - c), k = i - c, i = c) : "x" === e && (q(l, h - b), k = h - b, h = b), g(o))
          },
          r = function () {
            var a = 0,
              b = Math.abs(1.5 * k);
            this.removeEventListener("touchmove", n, !1), this.removeEventListener("touchend", r, !1), j = !1, g(function c() {
              var d;
              a === b || j || (d = m(k, b, a), isNaN(d) || 0 === d || (a += 1, "y" === e ? p(l, d) : q(l, d), g(c)))
            })
          };
        1 === a.touches.length && (h = a.touches[0].clientX, i = a.touches[0].clientY, j = !0, this.addEventListener("touchmove", n, !1), this.addEventListener("touchend", r, !1), g(o))
      },
      B = {
        reposition: function () {
          return this.each(function () {
            var b, c, d, e = a(this),
              f = e.data("enscroll"),
              g = function (a, b, c) {
                a.style.left = b + "px", a.style.top = c + "px"
              };
            f && (d = e.position(), b = f.corner, f.settings.verticalScrolling && (c = f.verticalTrackWrapper, g(c, "right" === f.settings.verticalScrollerSide ? d.left + e.outerWidth() - a(c).width() - h(this, "border-right-width") : d.left + h(this, "border-left-width"), d.top + h(this, "border-top-width"))), f.settings.horizontalScrolling && (c = f.horizontalTrackWrapper, g(c, d.left + h(this, "border-left-width"), d.top + e.outerHeight() - a(c).height() - h(this, "border-bottom-width"))), b && g(b, d.left + e.outerWidth() - a(b).outerWidth() - h(this, "border-right-width"), d.top + e.outerHeight() - a(b).outerHeight() - h(this, "border-bottom-width")))
          })
        },
        resize: function () {
          return this.each(function () {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r = a(this),
              s = r.data("enscroll");
            return s ? (b = s.settings, void(r.is(":visible") ? (b.verticalScrolling && (e = s.verticalTrackWrapper, c = r.innerHeight(), f = c / this.scrollHeight, g = a(e).find(".enscroll-track")[0], j = a(e).find("." + b.scrollUpButtonClass), k = a(e).find("." + b.scrollDownButtonClass), i = b.horizontalScrolling ? c - a(s.horizontalTrackWrapper).find(".enscroll-track").outerHeight() : c, i -= a(g).outerHeight() - a(g).height() + j.outerHeight() + k.outerHeight(), n = g.firstChild, p = Math.max(f * i, b.minScrollbarLength), p -= a(n).outerHeight() - a(n).height(), e.style.display = "none", g.style.height = i + "px", n.style.height = p + "px", 1 > f && (f = r.scrollTop() / (this.scrollHeight - r.height()), n.style.top = f * (i - p) + "px", e.style.display = "block")), b.horizontalScrolling && (e = s.horizontalTrackWrapper, d = r.innerWidth(), f = d / this.scrollWidth, g = a(e).find(".enscroll-track")[0], l = a(e).find("." + b.scrollLeftButtonClass), m = a(e).find("." + b.scrollRightButtonClass), h = b.verticalScrolling ? d - a(s.verticalTrackWrapper).find(".enscroll-track").outerWidth() : d, h -= a(g).outerWidth() - a(g).width() + l.outerWidth() + m.outerWidth(), n = g.firstChild, o = Math.max(f * h, b.minScrollbarLength), o -= a(n).outerWidth() - a(n).width(), e.style.display = "none", g.style.width = h + "px", n.style.width = o + "px", 1 > f && (f = r.scrollLeft() / (this.scrollWidth - r.width()), n.style.left = f * (h - o) + "px", e.style.display = "block"), s._prybar && (q = s._prybar, this.removeChild(q), b.verticalScrolling && (q.style.width = this.scrollWidth + a(s.verticalTrackWrapper).find(".enscroll-track").outerWidth() + "px", this.appendChild(q)))), s.corner && (s.corner.style.display = s.verticalTrackWrapper && s.horizontalTrackWrapper && a(s.verticalTrackWrapper).is(":visible") && a(s.horizontalTrackWrapper).is(":visible") ? "" : "none")) : (b.verticalScrolling && (s.verticalTrackWrapper.style.display = "none"), b.horizontalScrolling && (s.horizontalTrackWrapper.style.display = "none"), s.corner && (s.corner.style.display = "none")))) : !0
          })
        },
        startPolling: function () {
          return this.each(function () {
            var b, c = a(this).data("enscroll"),
              d = this,
              e = a(d),
              f = -1,
              g = -1,
              h = -1,
              i = -1,
              j = function () {
                if (c.settings.pollChanges) {
                  var a = d.scrollWidth,
                    k = d.scrollHeight,
                    l = e.width(),
                    m = e.height(),
                    n = e.offset();
                  (c.settings.verticalScrolling && (m !== g || k !== i) || c.settings.horizontalScrolling && (l !== f || a !== h)) && (h = a, i = k, B.resize.call(e)), (b.left !== n.left || b.top !== n.top || l !== f || m !== g) && (b = n, f = l, g = m, B.reposition.call(e)), setTimeout(j, 350)
                }
              };
            c && (c.settings.pollChanges = !0, i = d.scrollHeight, h = d.scrollWidth, b = e.offset(), j())
          })
        },
        stopPolling: function () {
          return this.each(function () {
            var b = a(this).data("enscroll");
            b && (b.settings.pollChanges = !1)
          })
        },
        destroy: function () {
          return this.each(function () {
            var c, d, e = a(this),
              f = e.data("enscroll");
            f && (B.stopPolling.call(e), d = f._mouseScrollHandler, f.settings.verticalScrolling && (c = f.verticalTrackWrapper, a(c).remove(), c = null), f.settings.horizontalScrolling && (c = f.horizontalTrackWrapper, a(c).remove(), c = null), f._fadeTimer && clearTimeout(f._fadeTimer), f.corner && a(f.corner).remove(), f._prybar && f._prybar.parentNode && f._prybar.parentNode === this && a(f._prybar).remove(), this.setAttribute("style", f._style || ""), f._hadTabIndex || e.removeAttr("tabindex"), e.off("scroll.enscroll.pane").off("keydown.enscroll.pane").off("mouseenter.enscroll.pane").off("mousedown.enscroll.pane").data("enscroll", null), this.removeEventListener ? (this.removeEventListener("wheel", d, !1), this.removeEventListener("mousewheel", d, !1), this.removeEventListener("touchstart", A, !1)) : this.detachEvent && this.detachEvent("onmousewheel", d), a(b).off("resize.enscroll.window"))
          })
        }
      };
    a.fn.enscroll = function (d) {
      var f;
      return B[d] ? B[d].call(this) : (f = a.extend({}, e, d), this.each(function () {
        if (f.verticalScrolling || f.horizontalScrolling) {
          var d, e, g, j, k, l, m, n, t, C, D, E, F, G, H, I, J, K, L = a(this),
            M = this,
            N = L.attr("style"),
            O = !0,
            P = {
              position: "absolute",
              "z-index": f.zIndex,
              margin: 0,
              padding: 0
            },
            Q = function (a) {
              w.call(M, a)
            },
            R = function (b, c) {
              "string" == typeof c ? a(b).html(c) : b.appendChild(c)
            };
          if (f.verticalScrolling) {
            e = c.createElement("div"), j = c.createElement("div"), l = c.createElement("a"), a(j).css("position", "relative").addClass("enscroll-track").addClass(f.verticalTrackClass).appendTo(e), f.drawScrollButtons && (m = c.createElement("a"), n = c.createElement("a"), a(m).css({
              display: "block",
              "text-decoration": "none"
            }).attr("href", "").html("&nbsp;").addClass(f.scrollUpButtonClass).on("click", function () {
              return p(M, -f.scrollIncrement), !1
            }).insertBefore(j), a(n).css({
              display: "block",
              "text-decoration": "none"
            }).attr("href", "").html("&nbsp;").on("click", function () {
              return p(M, f.scrollIncrement), !1
            }).addClass(f.scrollDownButtonClass).appendTo(e)), f.clickTrackToScroll && a(j).on("click", function (b) {
              b.target === this && v(L, b.pageY > a(l).offset().top ? L.height() : -L.height())
            }), a(l).css({
              position: "absolute",
              "z-index": 1
            }).attr("href", "").addClass(f.verticalHandleClass).mousedown({
              pane: this
            }, r).click(function () {
              return !1
            }).appendTo(j), R(l, f.verticalHandleHTML), a(e).css(P).insertAfter(this), f.showOnHover && a(e).css("opacity", 0).on("mouseover.enscroll.vertical", function () {
              o.call(M, !1)
            }).on("mouseout.enscroll.vertical", function () {
              o.call(M)
            }), E = a(j).outerWidth(), f.addPaddingToPane && (K = "right" === f.verticalScrollerSide ? {
              "padding-right": h(this, "padding-right") + E + "px"
            } : {
              "padding-left": h(this, "padding-left") + E + "px"
            }, L.css(a.extend({
              width: L.width() - E + "px"
            }, K)));
            try {
              I = parseInt(L.css("outline-width"), 10), 0 !== I && !isNaN(I) || "none" !== L.css("outline-style") || L.css("outline", "none")
            } catch (S) {
              L.css("outline", "none")
            }
          }
          f.horizontalScrolling && (d = c.createElement("div"), g = c.createElement("div"), k = c.createElement("a"), a(g).css({
            position: "relative",
            "z-index": 1
          }).addClass("enscroll-track").addClass(f.horizontalTrackClass).appendTo(d), f.drawScrollButtons && (t = c.createElement("a"), C = c.createElement("a"), a(t).css("display", "block").attr("href", "").on("click", function () {
            return q(M, -f.scrollIncrement), !1
          }).addClass(f.scrollLeftButtonClass).insertBefore(g), a(C).css("display", "block").attr("href", "").on("click", function () {
            return q(M, f.scrollIncrement), !1
          }).addClass(f.scrollRightButtonClass).appendTo(d)), f.clickTrackToScroll && a(g).on("click", function (b) {
            b.target === this && u(L, b.pageX > a(k).offset().left ? L.width() : -L.width())
          }), a(k).css({
            position: "absolute",
            "z-index": 1
          }).attr("href", "").addClass(f.horizontalHandleClass).click(function () {
            return !1
          }).mousedown({
            pane: this
          }, s).appendTo(g), R(k, f.horizontalHandleHTML), a(d).css(P).insertAfter(this), f.showOnHover && a(d).css("opacity", 0).on("mouseover.enscroll.horizontal", function () {
            o.call(M, !1)
          }).on("mouseout.enscroll.horizontal", function () {
            o.call(M)
          }), D = a(g).outerHeight(), f.addPaddingToPane && L.css({
            height: L.height() - D + "px",
            "padding-bottom": parseInt(L.css("padding-bottom"), 10) + D + "px"
          }), f.verticalScrolling && (J = document.createElement("div"), a(J).css({
            width: "1px",
            height: "1px",
            visibility: "hidden",
            padding: 0,
            margin: "-1px"
          }).appendTo(this))), f.verticalScrolling && f.horizontalScrolling && f.drawCorner && (F = c.createElement("div"), a(F).addClass(f.cornerClass).css(P).insertAfter(this)), H = L.attr("tabindex"), H || (L.attr("tabindex", 0), O = !1);
          try {
            G = L.css("outline"), (!G || G.length < 1) && L.css("outline", "none")
          } catch (S) {
            L.css("outline", "none")
          }
          L.on({
            "scroll.enscroll.pane": function (a) {
              x.call(this, a)
            },
            "keydown.enscroll.pane": y,
            "mousedown.enscroll.pane": z
          }).css("overflow", "hidden").data("enscroll", {
            settings: f,
            horizontalTrackWrapper: d,
            verticalTrackWrapper: e,
            corner: F,
            _prybar: J,
            _mouseScrollHandler: Q,
            _hadTabIndex: O,
            _style: N,
            _scrollingX: !1,
            _scrollingY: !1,
            _startX: 0,
            _startY: 0,
            _endX: 0,
            _endY: 0,
            _duration: parseInt(f.easingDuration / 16.66666, 10),
            _scrollHeightNoPadding: i(this.nodeName)
          }), a(b).on("resize.enscroll.window", function () {
            B.reposition.call(L)
          }), f.showOnHover && L.on("mouseenter.enscroll.pane", function () {
            o.call(this)
          }), this.addEventListener ? ("onwheel" in this || "WheelEvent" in b && navigator.userAgent.toLowerCase().indexOf("msie") >= 0 ? this.addEventListener("wheel", Q, !1) : "onmousewheel" in this && this.addEventListener("mousewheel", Q, !1), this.addEventListener("touchstart", A, !1)) : this.attachEvent && this.attachEvent("onmousewheel", Q), f.pollChanges && B.startPolling.call(L), B.resize.call(L), B.reposition.call(L)
        }
      }))
    }
  }(jQuery, window, document);; /*})'"*/ ; /*})'"*/
  /*!
   * typeahead.js 0.11.1
   * https://github.com/twitter/typeahead.js
   * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
   */
  
  (function (root, factory) {
    if (typeof define === "function" && define.amd) {
      define("bloodhound", ["jquery"], function (a0) {
        return root["Bloodhound"] = factory(a0);
      });
    } else if (typeof exports === "object") {
      module.exports = factory(require("jquery"));
    } else {
      root["Bloodhound"] = factory(jQuery);
    }
  })(window, function ($) {
    var _ = function () {
      "use strict";
      return {
        isMsie: function () {
          return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
        },
        isBlankString: function (str) {
          return !str || /^\s*$/.test(str);
        },
        escapeRegExChars: function (str) {
          return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        isString: function (obj) {
          return typeof obj === "string";
        },
        isNumber: function (obj) {
          return typeof obj === "number";
        },
        isArray: $.isArray,
        isFunction: $.isFunction,
        isObject: $.isPlainObject,
        isUndefined: function (obj) {
          return typeof obj === "undefined";
        },
        isElement: function (obj) {
          return !!(obj && obj.nodeType === 1);
        },
        isJQuery: function (obj) {
          return obj instanceof $;
        },
        toStr: function toStr(s) {
          return _.isUndefined(s) || s === null ? "" : s + "";
        },
        bind: $.proxy,
        each: function (collection, cb) {
          $.each(collection, reverseArgs);
  
          function reverseArgs(index, value) {
            return cb(value, index);
          }
        },
        map: $.map,
        filter: $.grep,
        every: function (obj, test) {
          var result = true;
          if (!obj) {
            return result;
          }
          $.each(obj, function (key, val) {
            if (!(result = test.call(null, val, key, obj))) {
              return false;
            }
          });
          return !!result;
        },
        some: function (obj, test) {
          var result = false;
          if (!obj) {
            return result;
          }
          $.each(obj, function (key, val) {
            if (result = test.call(null, val, key, obj)) {
              return false;
            }
          });
          return !!result;
        },
        mixin: $.extend,
        identity: function (x) {
          return x;
        },
        clone: function (obj) {
          return $.extend(true, {}, obj);
        },
        getIdGenerator: function () {
          var counter = 0;
          return function () {
            return counter++;
          };
        },
        templatify: function templatify(obj) {
          return $.isFunction(obj) ? obj : template;
  
          function template() {
            return String(obj);
          }
        },
        defer: function (fn) {
          setTimeout(fn, 0);
        },
        debounce: function (func, wait, immediate) {
          var timeout, result;
          return function () {
            var context = this,
              args = arguments,
              later, callNow;
            later = function () {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
              }
            };
            callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
              result = func.apply(context, args);
            }
            return result;
          };
        },
        throttle: function (func, wait) {
          var context, args, timeout, result, previous, later;
          previous = 0;
          later = function () {
            previous = new Date();
            timeout = null;
            result = func.apply(context, args);
          };
          return function () {
            var now = new Date(),
              remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
              clearTimeout(timeout);
              timeout = null;
              previous = now;
              result = func.apply(context, args);
            } else if (!timeout) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
        },
        stringify: function (val) {
          return _.isString(val) ? val : JSON.stringify(val);
        },
        noop: function () {}
      };
    }();
    var VERSION = "0.11.1";
    var tokenizers = function () {
      "use strict";
      return {
        nonword: nonword,
        whitespace: whitespace,
        obj: {
          nonword: getObjTokenizer(nonword),
          whitespace: getObjTokenizer(whitespace)
        }
      };
  
      function whitespace(str) {
        str = _.toStr(str);
        return str ? str.split(/\s+/) : [];
      }
  
      function nonword(str) {
        str = _.toStr(str);
        return str ? str.split(/\W+/) : [];
      }
  
      function getObjTokenizer(tokenizer) {
        return function setKey(keys) {
          keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
          return function tokenize(o) {
            var tokens = [];
            _.each(keys, function (k) {
              tokens = tokens.concat(tokenizer(_.toStr(o[k])));
            });
            return tokens;
          };
        };
      }
    }();
    var LruCache = function () {
      "use strict";
  
      function LruCache(maxSize) {
        this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
        this.reset();
        if (this.maxSize <= 0) {
          this.set = this.get = $.noop;
        }
      }
      _.mixin(LruCache.prototype, {
        set: function set(key, val) {
          var tailItem = this.list.tail,
            node;
          if (this.size >= this.maxSize) {
            this.list.remove(tailItem);
            delete this.hash[tailItem.key];
            this.size--;
          }
          if (node = this.hash[key]) {
            node.val = val;
            this.list.moveToFront(node);
          } else {
            node = new Node(key, val);
            this.list.add(node);
            this.hash[key] = node;
            this.size++;
          }
        },
        get: function get(key) {
          var node = this.hash[key];
          if (node) {
            this.list.moveToFront(node);
            return node.val;
          }
        },
        reset: function reset() {
          this.size = 0;
          this.hash = {};
          this.list = new List();
        }
      });
  
      function List() {
        this.head = this.tail = null;
      }
      _.mixin(List.prototype, {
        add: function add(node) {
          if (this.head) {
            node.next = this.head;
            this.head.prev = node;
          }
          this.head = node;
          this.tail = this.tail || node;
        },
        remove: function remove(node) {
          node.prev ? node.prev.next = node.next : this.head = node.next;
          node.next ? node.next.prev = node.prev : this.tail = node.prev;
        },
        moveToFront: function (node) {
          this.remove(node);
          this.add(node);
        }
      });
  
      function Node(key, val) {
        this.key = key;
        this.val = val;
        this.prev = this.next = null;
      }
      return LruCache;
    }();
    var PersistentStorage = function () {
      "use strict";
      var LOCAL_STORAGE;
      try {
        LOCAL_STORAGE = window.localStorage;
        LOCAL_STORAGE.setItem("~~~", "!");
        LOCAL_STORAGE.removeItem("~~~");
      } catch (err) {
        LOCAL_STORAGE = null;
      }
  
      function PersistentStorage(namespace, override) {
        this.prefix = ["__", namespace, "__"].join("");
        this.ttlKey = "__ttl__";
        this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
        this.ls = override || LOCAL_STORAGE;
        !this.ls && this._noop();
      }
      _.mixin(PersistentStorage.prototype, {
        _prefix: function (key) {
          return this.prefix + key;
        },
        _ttlKey: function (key) {
          return this._prefix(key) + this.ttlKey;
        },
        _noop: function () {
          this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
        },
        _safeSet: function (key, val) {
          try {
            this.ls.setItem(key, val);
          } catch (err) {
            if (err.name === "QuotaExceededError") {
              this.clear();
              this._noop();
            }
          }
        },
        get: function (key) {
          if (this.isExpired(key)) {
            this.remove(key);
          }
          return decode(this.ls.getItem(this._prefix(key)));
        },
        set: function (key, val, ttl) {
          if (_.isNumber(ttl)) {
            this._safeSet(this._ttlKey(key), encode(now() + ttl));
          } else {
            this.ls.removeItem(this._ttlKey(key));
          }
          return this._safeSet(this._prefix(key), encode(val));
        },
        remove: function (key) {
          this.ls.removeItem(this._ttlKey(key));
          this.ls.removeItem(this._prefix(key));
          return this;
        },
        clear: function () {
          var i, keys = gatherMatchingKeys(this.keyMatcher);
          for (i = keys.length; i--;) {
            this.remove(keys[i]);
          }
          return this;
        },
        isExpired: function (key) {
          var ttl = decode(this.ls.getItem(this._ttlKey(key)));
          return _.isNumber(ttl) && now() > ttl ? true : false;
        }
      });
      return PersistentStorage;
  
      function now() {
        return new Date().getTime();
      }
  
      function encode(val) {
        return JSON.stringify(_.isUndefined(val) ? null : val);
      }
  
      function decode(val) {
        return $.parseJSON(val);
      }
  
      function gatherMatchingKeys(keyMatcher) {
        var i, key, keys = [],
          len = LOCAL_STORAGE.length;
        for (i = 0; i < len; i++) {
          if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
            keys.push(key.replace(keyMatcher, ""));
          }
        }
        return keys;
      }
    }();
    var Transport = function () {
      "use strict";
      var pendingRequestsCount = 0,
        pendingRequests = {},
        maxPendingRequests = 6,
        sharedCache = new LruCache(10);
  
      function Transport(o) {
        o = o || {};
        this.cancelled = false;
        this.lastReq = null;
        this._send = o.transport;
        this._get = o.limiter ? o.limiter(this._get) : this._get;
        this._cache = o.cache === false ? new LruCache(0) : sharedCache;
      }
      Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
        maxPendingRequests = num;
      };
      Transport.resetCache = function resetCache() {
        sharedCache.reset();
      };
      _.mixin(Transport.prototype, {
        _fingerprint: function fingerprint(o) {
          o = o || {};
          return o.url + o.type + $.param(o.data || {});
        },
        _get: function (o, cb) {
          var that = this,
            fingerprint, jqXhr;
          fingerprint = this._fingerprint(o);
          if (this.cancelled || fingerprint !== this.lastReq) {
            return;
          }
          if (jqXhr = pendingRequests[fingerprint]) {
            jqXhr.done(done).fail(fail);
          } else if (pendingRequestsCount < maxPendingRequests) {
            pendingRequestsCount++;
            pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
          } else {
            this.onDeckRequestArgs = [].slice.call(arguments, 0);
          }
  
          function done(resp) {
            cb(null, resp);
            that._cache.set(fingerprint, resp);
          }
  
          function fail() {
            cb(true);
          }
  
          function always() {
            pendingRequestsCount--;
            delete pendingRequests[fingerprint];
            if (that.onDeckRequestArgs) {
              that._get.apply(that, that.onDeckRequestArgs);
              that.onDeckRequestArgs = null;
            }
          }
        },
        get: function (o, cb) {
          var resp, fingerprint;
          cb = cb || $.noop;
          o = _.isString(o) ? {
            url: o
          } : o || {};
          fingerprint = this._fingerprint(o);
          this.cancelled = false;
          this.lastReq = fingerprint;
          if (resp = this._cache.get(fingerprint)) {
            cb(null, resp);
          } else {
            this._get(o, cb);
          }
        },
        cancel: function () {
          this.cancelled = true;
        }
      });
      return Transport;
    }();
    var SearchIndex = window.SearchIndex = function () {
      "use strict";
      var CHILDREN = "c",
        IDS = "i";
  
      function SearchIndex(o) {
        o = o || {};
        if (!o.datumTokenizer || !o.queryTokenizer) {
          $.error("datumTokenizer and queryTokenizer are both required");
        }
        this.identify = o.identify || _.stringify;
        this.datumTokenizer = o.datumTokenizer;
        this.queryTokenizer = o.queryTokenizer;
        this.reset();
      }
      _.mixin(SearchIndex.prototype, {
        bootstrap: function bootstrap(o) {
          this.datums = o.datums;
          this.trie = o.trie;
        },
        add: function (data) {
          var that = this;
          data = _.isArray(data) ? data : [data];
          _.each(data, function (datum) {
            var id, tokens;
            that.datums[id = that.identify(datum)] = datum;
            tokens = normalizeTokens(that.datumTokenizer(datum));
            _.each(tokens, function (token) {
              var node, chars, ch;
              node = that.trie;
              chars = token.split("");
              while (ch = chars.shift()) {
                node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                node[IDS].push(id);
              }
            });
          });
        },
        get: function get(ids) {
          var that = this;
          return _.map(ids, function (id) {
            return that.datums[id];
          });
        },
        search: function search(query) {
          var that = this,
            tokens, matches;
          tokens = normalizeTokens(this.queryTokenizer(query));
          _.each(tokens, function (token) {
            var node, chars, ch, ids;
            if (matches && matches.length === 0) {
              return false;
            }
            node = that.trie;
            chars = token.split("");
            while (node && (ch = chars.shift())) {
              node = node[CHILDREN][ch];
            }
            if (node && chars.length === 0) {
              ids = node[IDS].slice(0);
              matches = matches ? getIntersection(matches, ids) : ids;
            } else {
              matches = [];
              return false;
            }
          });
          return matches ? _.map(unique(matches), function (id) {
            return that.datums[id];
          }) : [];
        },
        all: function all() {
          var values = [];
          for (var key in this.datums) {
            values.push(this.datums[key]);
          }
          return values;
        },
        reset: function reset() {
          this.datums = {};
          this.trie = newNode();
        },
        serialize: function serialize() {
          return {
            datums: this.datums,
            trie: this.trie
          };
        }
      });
      return SearchIndex;
  
      function normalizeTokens(tokens) {
        tokens = _.filter(tokens, function (token) {
          return !!token;
        });
        tokens = _.map(tokens, function (token) {
          return token.toLowerCase();
        });
        return tokens;
      }
  
      function newNode() {
        var node = {};
        node[IDS] = [];
        node[CHILDREN] = {};
        return node;
      }
  
      function unique(array) {
        var seen = {},
          uniques = [];
        for (var i = 0, len = array.length; i < len; i++) {
          if (!seen[array[i]]) {
            seen[array[i]] = true;
            uniques.push(array[i]);
          }
        }
        return uniques;
      }
  
      function getIntersection(arrayA, arrayB) {
        var ai = 0,
          bi = 0,
          intersection = [];
        arrayA = arrayA.sort();
        arrayB = arrayB.sort();
        var lenArrayA = arrayA.length,
          lenArrayB = arrayB.length;
        while (ai < lenArrayA && bi < lenArrayB) {
          if (arrayA[ai] < arrayB[bi]) {
            ai++;
          } else if (arrayA[ai] > arrayB[bi]) {
            bi++;
          } else {
            intersection.push(arrayA[ai]);
            ai++;
            bi++;
          }
        }
        return intersection;
      }
    }();
    var Prefetch = function () {
      "use strict";
      var keys;
      keys = {
        data: "data",
        protocol: "protocol",
        thumbprint: "thumbprint"
      };
  
      function Prefetch(o) {
        this.url = o.url;
        this.ttl = o.ttl;
        this.cache = o.cache;
        this.prepare = o.prepare;
        this.transform = o.transform;
        this.transport = o.transport;
        this.thumbprint = o.thumbprint;
        this.storage = new PersistentStorage(o.cacheKey);
      }
      _.mixin(Prefetch.prototype, {
        _settings: function settings() {
          return {
            url: this.url,
            type: "GET",
            dataType: "json"
          };
        },
        store: function store(data) {
          if (!this.cache) {
            return;
          }
          this.storage.set(keys.data, data, this.ttl);
          this.storage.set(keys.protocol, location.protocol, this.ttl);
          this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
        },
        fromCache: function fromCache() {
          var stored = {},
            isExpired;
          if (!this.cache) {
            return null;
          }
          stored.data = this.storage.get(keys.data);
          stored.protocol = this.storage.get(keys.protocol);
          stored.thumbprint = this.storage.get(keys.thumbprint);
          isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
          return stored.data && !isExpired ? stored.data : null;
        },
        fromNetwork: function (cb) {
          var that = this,
            settings;
          if (!cb) {
            return;
          }
          settings = this.prepare(this._settings());
          this.transport(settings).fail(onError).done(onResponse);
  
          function onError() {
            cb(true);
          }
  
          function onResponse(resp) {
            cb(null, that.transform(resp));
          }
        },
        clear: function clear() {
          this.storage.clear();
          return this;
        }
      });
      return Prefetch;
    }();
    var Remote = function () {
      "use strict";
  
      function Remote(o) {
        this.url = o.url;
        this.prepare = o.prepare;
        this.transform = o.transform;
        this.transport = new Transport({
          cache: o.cache,
          limiter: o.limiter,
          transport: o.transport
        });
      }
      _.mixin(Remote.prototype, {
        _settings: function settings() {
          return {
            url: this.url,
            type: "GET",
            dataType: "json"
          };
        },
        get: function get(query, cb) {
          var that = this,
            settings;
          if (!cb) {
            return;
          }
          query = query || "";
          settings = this.prepare(query, this._settings());
          return this.transport.get(settings, onResponse);
  
          function onResponse(err, resp) {
            err ? cb([]) : cb(that.transform(resp));
          }
        },
        cancelLastRequest: function cancelLastRequest() {
          this.transport.cancel();
        }
      });
      return Remote;
    }();
    var oParser = function () {
      "use strict";
      return function parse(o) {
        var defaults, sorter;
        defaults = {
          initialize: true,
          identify: _.stringify,
          datumTokenizer: null,
          queryTokenizer: null,
          sufficient: 5,
          sorter: null,
          local: [],
          prefetch: null,
          remote: null
        };
        o = _.mixin(defaults, o || {});
        !o.datumTokenizer && $.error("datumTokenizer is required");
        !o.queryTokenizer && $.error("queryTokenizer is required");
        sorter = o.sorter;
        o.sorter = sorter ? function (x) {
          return x.sort(sorter);
        } : _.identity;
        o.local = _.isFunction(o.local) ? o.local() : o.local;
        o.prefetch = parsePrefetch(o.prefetch);
        o.remote = parseRemote(o.remote);
        return o;
      };
  
      function parsePrefetch(o) {
        var defaults;
        if (!o) {
          return null;
        }
        defaults = {
          url: null,
          ttl: 24 * 60 * 60 * 1e3,
          cache: true,
          cacheKey: null,
          thumbprint: "",
          prepare: _.identity,
          transform: _.identity,
          transport: null
        };
        o = _.isString(o) ? {
          url: o
        } : o;
        o = _.mixin(defaults, o);
        !o.url && $.error("prefetch requires url to be set");
        o.transform = o.filter || o.transform;
        o.cacheKey = o.cacheKey || o.url;
        o.thumbprint = VERSION + o.thumbprint;
        o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
        return o;
      }
  
      function parseRemote(o) {
        var defaults;
        if (!o) {
          return;
        }
        defaults = {
          url: null,
          cache: true,
          prepare: null,
          replace: null,
          wildcard: null,
          limiter: null,
          rateLimitBy: "debounce",
          rateLimitWait: 300,
          transform: _.identity,
          transport: null
        };
        o = _.isString(o) ? {
          url: o
        } : o;
        o = _.mixin(defaults, o);
        !o.url && $.error("remote requires url to be set");
        o.transform = o.filter || o.transform;
        o.prepare = toRemotePrepare(o);
        o.limiter = toLimiter(o);
        o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
        delete o.replace;
        delete o.wildcard;
        delete o.rateLimitBy;
        delete o.rateLimitWait;
        return o;
      }
  
      function toRemotePrepare(o) {
        var prepare, replace, wildcard;
        prepare = o.prepare;
        replace = o.replace;
        wildcard = o.wildcard;
        if (prepare) {
          return prepare;
        }
        if (replace) {
          prepare = prepareByReplace;
        } else if (o.wildcard) {
          prepare = prepareByWildcard;
        } else {
          prepare = idenityPrepare;
        }
        return prepare;
  
        function prepareByReplace(query, settings) {
          settings.url = replace(settings.url, query);
          return settings;
        }
  
        function prepareByWildcard(query, settings) {
          settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
          return settings;
        }
  
        function idenityPrepare(query, settings) {
          return settings;
        }
      }
  
      function toLimiter(o) {
        var limiter, method, wait;
        limiter = o.limiter;
        method = o.rateLimitBy;
        wait = o.rateLimitWait;
        if (!limiter) {
          limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
        }
        return limiter;
  
        function debounce(wait) {
          return function debounce(fn) {
            return _.debounce(fn, wait);
          };
        }
  
        function throttle(wait) {
          return function throttle(fn) {
            return _.throttle(fn, wait);
          };
        }
      }
  
      function callbackToDeferred(fn) {
        return function wrapper(o) {
          var deferred = $.Deferred();
          fn(o, onSuccess, onError);
          return deferred;
  
          function onSuccess(resp) {
            _.defer(function () {
              deferred.resolve(resp);
            });
          }
  
          function onError(err) {
            _.defer(function () {
              deferred.reject(err);
            });
          }
        };
      }
    }();
    var Bloodhound = function () {
      "use strict";
      var old;
      old = window && window.Bloodhound;
  
      function Bloodhound(o) {
        o = oParser(o);
        this.sorter = o.sorter;
        this.identify = o.identify;
        this.sufficient = o.sufficient;
        this.local = o.local;
        this.remote = o.remote ? new Remote(o.remote) : null;
        this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
        this.index = new SearchIndex({
          identify: this.identify,
          datumTokenizer: o.datumTokenizer,
          queryTokenizer: o.queryTokenizer
        });
        o.initialize !== false && this.initialize();
      }
      Bloodhound.noConflict = function noConflict() {
        window && (window.Bloodhound = old);
        return Bloodhound;
      };
      Bloodhound.tokenizers = tokenizers;
      _.mixin(Bloodhound.prototype, {
        __ttAdapter: function ttAdapter() {
          var that = this;
          return this.remote ? withAsync : withoutAsync;
  
          function withAsync(query, sync, async) {
            return that.search(query, sync, async);
          }
  
          function withoutAsync(query, sync) {
            return that.search(query, sync);
          }
        },
        _loadPrefetch: function loadPrefetch() {
          var that = this,
            deferred, serialized;
          deferred = $.Deferred();
          if (!this.prefetch) {
            deferred.resolve();
          } else if (serialized = this.prefetch.fromCache()) {
            this.index.bootstrap(serialized);
            deferred.resolve();
          } else {
            this.prefetch.fromNetwork(done);
          }
          return deferred.promise();
  
          function done(err, data) {
            if (err) {
              return deferred.reject();
            }
            that.add(data);
            that.prefetch.store(that.index.serialize());
            deferred.resolve();
          }
        },
        _initialize: function initialize() {
          var that = this,
            deferred;
          this.clear();
          (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
          return this.initPromise;
  
          function addLocalToIndex() {
            that.add(that.local);
          }
        },
        initialize: function initialize(force) {
          return !this.initPromise || force ? this._initialize() : this.initPromise;
        },
        add: function add(data) {
          this.index.add(data);
          return this;
        },
        get: function get(ids) {
          ids = _.isArray(ids) ? ids : [].slice.call(arguments);
          return this.index.get(ids);
        },
        search: function search(query, sync, async) {
          var that = this,
            local;
          local = this.sorter(this.index.search(query));
          sync(this.remote ? local.slice() : local);
          if (this.remote && local.length < this.sufficient) {
            this.remote.get(query, processRemote);
          } else if (this.remote) {
            this.remote.cancelLastRequest();
          }
          return this;
  
          function processRemote(remote) {
            var nonDuplicates = [];
            _.each(remote, function (r) {
              !_.some(local, function (l) {
                return that.identify(r) === that.identify(l);
              }) && nonDuplicates.push(r);
            });
            async && async(nonDuplicates);
          }
        },
        all: function all() {
          return this.index.all();
        },
        clear: function clear() {
          this.index.reset();
          return this;
        },
        clearPrefetchCache: function clearPrefetchCache() {
          this.prefetch && this.prefetch.clear();
          return this;
        },
        clearRemoteCache: function clearRemoteCache() {
          Transport.resetCache();
          return this;
        },
        ttAdapter: function ttAdapter() {
          return this.__ttAdapter();
        }
      });
      return Bloodhound;
    }();
    return Bloodhound;
  });
  
  (function (root, factory) {
    if (typeof define === "function" && define.amd) {
      define("typeahead.js", ["jquery"], function (a0) {
        return factory(a0);
      });
    } else if (typeof exports === "object") {
      module.exports = factory(require("jquery"));
    } else {
      factory(jQuery);
    }
  })(this, function ($) {
    var _ = function () {
      "use strict";
      return {
        isMsie: function () {
          return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
        },
        isBlankString: function (str) {
          return !str || /^\s*$/.test(str);
        },
        escapeRegExChars: function (str) {
          return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        isString: function (obj) {
          return typeof obj === "string";
        },
        isNumber: function (obj) {
          return typeof obj === "number";
        },
        isArray: $.isArray,
        isFunction: $.isFunction,
        isObject: $.isPlainObject,
        isUndefined: function (obj) {
          return typeof obj === "undefined";
        },
        isElement: function (obj) {
          return !!(obj && obj.nodeType === 1);
        },
        isJQuery: function (obj) {
          return obj instanceof $;
        },
        toStr: function toStr(s) {
          return _.isUndefined(s) || s === null ? "" : s + "";
        },
        bind: $.proxy,
        each: function (collection, cb) {
          $.each(collection, reverseArgs);
  
          function reverseArgs(index, value) {
            return cb(value, index);
          }
        },
        map: $.map,
        filter: $.grep,
        every: function (obj, test) {
          var result = true;
          if (!obj) {
            return result;
          }
          $.each(obj, function (key, val) {
            if (!(result = test.call(null, val, key, obj))) {
              return false;
            }
          });
          return !!result;
        },
        some: function (obj, test) {
          var result = false;
          if (!obj) {
            return result;
          }
          $.each(obj, function (key, val) {
            if (result = test.call(null, val, key, obj)) {
              return false;
            }
          });
          return !!result;
        },
        mixin: $.extend,
        identity: function (x) {
          return x;
        },
        clone: function (obj) {
          return $.extend(true, {}, obj);
        },
        getIdGenerator: function () {
          var counter = 0;
          return function () {
            return counter++;
          };
        },
        templatify: function templatify(obj) {
          return $.isFunction(obj) ? obj : template;
  
          function template() {
            return String(obj);
          }
        },
        defer: function (fn) {
          setTimeout(fn, 0);
        },
        debounce: function (func, wait, immediate) {
          var timeout, result;
          return function () {
            var context = this,
              args = arguments,
              later, callNow;
            later = function () {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
              }
            };
            callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
              result = func.apply(context, args);
            }
            return result;
          };
        },
        throttle: function (func, wait) {
          var context, args, timeout, result, previous, later;
          previous = 0;
          later = function () {
            previous = new Date();
            timeout = null;
            result = func.apply(context, args);
          };
          return function () {
            var now = new Date(),
              remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
              clearTimeout(timeout);
              timeout = null;
              previous = now;
              result = func.apply(context, args);
            } else if (!timeout) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
        },
        stringify: function (val) {
          return _.isString(val) ? val : JSON.stringify(val);
        },
        noop: function () {}
      };
    }();
    var WWW = function () {
      "use strict";
      var defaultClassNames = {
        wrapper: "twitter-typeahead",
        input: "tt-input",
        hint: "tt-hint",
        menu: "tt-menu",
        dataset: "tt-dataset",
        suggestion: "tt-suggestion",
        selectable: "tt-selectable",
        empty: "tt-empty",
        open: "tt-open",
        cursor: "tt-cursor",
        highlight: "tt-highlight"
      };
      return build;
  
      function build(o) {
        var www, classes;
        classes = _.mixin({}, defaultClassNames, o);
        www = {
          css: buildCss(),
          classes: classes,
          html: buildHtml(classes),
          selectors: buildSelectors(classes)
        };
        return {
          css: www.css,
          html: www.html,
          classes: www.classes,
          selectors: www.selectors,
          mixin: function (o) {
            _.mixin(o, www);
          }
        };
      }
  
      function buildHtml(c) {
        return {
          wrapper: '<span class="' + c.wrapper + '"></span>',
          menu: '<div class="' + c.menu + '"></div>'
        };
      }
  
      function buildSelectors(classes) {
        var selectors = {};
        _.each(classes, function (v, k) {
          selectors[k] = "." + v;
        });
        return selectors;
      }
  
      function buildCss() {
        var css = {
          wrapper: {
            position: "relative",
            display: "inline-block"
          },
          hint: {
            position: "absolute",
            top: "0",
            left: "0",
            borderColor: "transparent",
            boxShadow: "none",
            opacity: "1"
          },
          input: {
            position: "relative",
            verticalAlign: "top",
            backgroundColor: "transparent"
          },
          inputWithNoHint: {
            position: "relative",
            verticalAlign: "top"
          },
          menu: {
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "100",
            display: "none"
          },
          ltr: {
            left: "0",
            right: "auto"
          },
          rtl: {
            left: "auto",
            right: " 0"
          }
        };
        if (_.isMsie()) {
          _.mixin(css.input, {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
          });
        }
        return css;
      }
    }();
    var EventBus = function () {
      "use strict";
      var namespace, deprecationMap;
      namespace = "typeahead:";
      deprecationMap = {
        render: "rendered",
        cursorchange: "cursorchanged",
        select: "selected",
        autocomplete: "autocompleted"
      };
  
      function EventBus(o) {
        if (!o || !o.el) {
          $.error("EventBus initialized without el");
        }
        this.$el = $(o.el);
      }
      _.mixin(EventBus.prototype, {
        _trigger: function (type, args) {
          var $e;
          $e = $.Event(namespace + type);
          (args = args || []).unshift($e);
          this.$el.trigger.apply(this.$el, args);
          return $e;
        },
        before: function (type) {
          var args, $e;
          args = [].slice.call(arguments, 1);
          $e = this._trigger("before" + type, args);
          return $e.isDefaultPrevented();
        },
        trigger: function (type) {
          var deprecatedType;
          this._trigger(type, [].slice.call(arguments, 1));
          if (deprecatedType = deprecationMap[type]) {
            this._trigger(deprecatedType, [].slice.call(arguments, 1));
          }
        }
      });
      return EventBus;
    }();
    var EventEmitter = function () {
      "use strict";
      var splitter = /\s+/,
        nextTick = getNextTick();
      return {
        onSync: onSync,
        onAsync: onAsync,
        off: off,
        trigger: trigger
      };
  
      function on(method, types, cb, context) {
        var type;
        if (!cb) {
          return this;
        }
        types = types.split(splitter);
        cb = context ? bindContext(cb, context) : cb;
        this._callbacks = this._callbacks || {};
        while (type = types.shift()) {
          this._callbacks[type] = this._callbacks[type] || {
            sync: [],
            async: []
          };
          this._callbacks[type][method].push(cb);
        }
        return this;
      }
  
      function onAsync(types, cb, context) {
        return on.call(this, "async", types, cb, context);
      }
  
      function onSync(types, cb, context) {
        return on.call(this, "sync", types, cb, context);
      }
  
      function off(types) {
        var type;
        if (!this._callbacks) {
          return this;
        }
        types = types.split(splitter);
        while (type = types.shift()) {
          delete this._callbacks[type];
        }
        return this;
      }
  
      function trigger(types) {
        var type, callbacks, args, syncFlush, asyncFlush;
        if (!this._callbacks) {
          return this;
        }
        types = types.split(splitter);
        args = [].slice.call(arguments, 1);
        while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
          syncFlush = getFlush(callbacks.sync, this, [type].concat(args));
          asyncFlush = getFlush(callbacks.async, this, [type].concat(args));
          syncFlush() && nextTick(asyncFlush);
        }
        return this;
      }
  
      function getFlush(callbacks, context, args) {
        return flush;
  
        function flush() {
          var cancelled;
          for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
            cancelled = callbacks[i].apply(context, args) === false;
          }
          return !cancelled;
        }
      }
  
      function getNextTick() {
        var nextTickFn;
        if (window.setImmediate) {
          nextTickFn = function nextTickSetImmediate(fn) {
            setImmediate(function () {
              fn();
            });
          };
        } else {
          nextTickFn = function nextTickSetTimeout(fn) {
            setTimeout(function () {
              fn();
            }, 0);
          };
        }
        return nextTickFn;
      }
  
      function bindContext(fn, context) {
        return fn.bind ? fn.bind(context) : function () {
          fn.apply(context, [].slice.call(arguments, 0));
        };
      }
    }();
    var highlight = function (doc) {
      "use strict";
      var defaults = {
        node: null,
        pattern: null,
        tagName: "strong",
        className: null,
        wordsOnly: false,
        caseSensitive: false
      };
      return function hightlight(o) {
        var regex;
        o = _.mixin({}, defaults, o);
        if (!o.node || !o.pattern) {
          return;
        }
        o.pattern = _.isArray(o.pattern) ? o.pattern : [o.pattern];
        regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
        traverse(o.node, hightlightTextNode);
  
        function hightlightTextNode(textNode) {
          var match, patternNode, wrapperNode;
          if (match = regex.exec(textNode.data)) {
            wrapperNode = doc.createElement(o.tagName);
            o.className && (wrapperNode.className = o.className);
            patternNode = textNode.splitText(match.index);
            patternNode.splitText(match[0].length);
            wrapperNode.appendChild(patternNode.cloneNode(true));
            textNode.parentNode.replaceChild(wrapperNode, patternNode);
          }
          return !!match;
        }
  
        function traverse(el, hightlightTextNode) {
          var childNode, TEXT_NODE_TYPE = 3;
          for (var i = 0; i < el.childNodes.length; i++) {
            childNode = el.childNodes[i];
            if (childNode.nodeType === TEXT_NODE_TYPE) {
              i += hightlightTextNode(childNode) ? 1 : 0;
            } else {
              traverse(childNode, hightlightTextNode);
            }
          }
        }
      };
  
      function getRegex(patterns, caseSensitive, wordsOnly) {
        var escapedPatterns = [],
          regexStr;
        for (var i = 0, len = patterns.length; i < len; i++) {
          escapedPatterns.push(_.escapeRegExChars(patterns[i]));
        }
        regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
        return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
      }
    }(window.document);
    var Input = function () {
      "use strict";
      var specialKeyCodeMap;
      specialKeyCodeMap = {
        9: "tab",
        27: "esc",
        37: "left",
        39: "right",
        13: "enter",
        38: "up",
        40: "down"
      };
  
      function Input(o, www) {
        o = o || {};
        if (!o.input) {
          $.error("input is missing");
        }
        www.mixin(this);
        this.$hint = $(o.hint);
        this.$input = $(o.input);
        this.query = this.$input.val();
        this.queryWhenFocused = this.hasFocus() ? this.query : null;
        this.$overflowHelper = buildOverflowHelper(this.$input);
        this._checkLanguageDirection();
        if (this.$hint.length === 0) {
          this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
        }
      }
      Input.normalizeQuery = function (str) {
        return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
      };
      _.mixin(Input.prototype, EventEmitter, {
        _onBlur: function onBlur() {
          this.resetInputValue();
          this.trigger("blurred");
        },
        _onFocus: function onFocus() {
          this.queryWhenFocused = this.query;
          this.trigger("focused");
        },
        _onKeydown: function onKeydown($e) {
          var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
          this._managePreventDefault(keyName, $e);
          if (keyName && this._shouldTrigger(keyName, $e)) {
            this.trigger(keyName + "Keyed", $e);
          }
        },
        _onInput: function onInput() {
          this._setQuery(this.getInputValue());
          this.clearHintIfInvalid();
          this._checkLanguageDirection();
        },
        _managePreventDefault: function managePreventDefault(keyName, $e) {
          var preventDefault;
          switch (keyName) {
            case "up":
            case "down":
              preventDefault = !withModifier($e);
              break;
  
            default:
              preventDefault = false;
          }
          preventDefault && $e.preventDefault();
        },
        _shouldTrigger: function shouldTrigger(keyName, $e) {
          var trigger;
          switch (keyName) {
            case "tab":
              trigger = !withModifier($e);
              break;
  
            default:
              trigger = true;
          }
          return trigger;
        },
        _checkLanguageDirection: function checkLanguageDirection() {
          var dir = (this.$input.css("direction") || "ltr").toLowerCase();
          if (this.dir !== dir) {
            this.dir = dir;
            this.$hint.attr("dir", dir);
            this.trigger("langDirChanged", dir);
          }
        },
        _setQuery: function setQuery(val, silent) {
          var areEquivalent, hasDifferentWhitespace;
          areEquivalent = areQueriesEquivalent(val, this.query);
          hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
          this.query = val;
          if (!silent && !areEquivalent) {
            this.trigger("queryChanged", this.query);
          } else if (!silent && hasDifferentWhitespace) {
            this.trigger("whitespaceChanged", this.query);
          }
        },
        bind: function () {
          var that = this,
            onBlur, onFocus, onKeydown, onInput;
          onBlur = _.bind(this._onBlur, this);
          onFocus = _.bind(this._onFocus, this);
          onKeydown = _.bind(this._onKeydown, this);
          onInput = _.bind(this._onInput, this);
          this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
          if (!_.isMsie() || _.isMsie() > 9) {
            this.$input.on("input.tt", onInput);
          } else {
            this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function ($e) {
              if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                return;
              }
              _.defer(_.bind(that._onInput, that, $e));
            });
          }
          return this;
        },
        focus: function focus() {
          this.$input.focus();
        },
        blur: function blur() {
          this.$input.blur();
        },
        getLangDir: function getLangDir() {
          return this.dir;
        },
        getQuery: function getQuery() {
          return this.query || "";
        },
        setQuery: function setQuery(val, silent) {
          this.setInputValue(val);
          this._setQuery(val, silent);
        },
        hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
          return this.query !== this.queryWhenFocused;
        },
        getInputValue: function getInputValue() {
          return this.$input.val();
        },
        setInputValue: function setInputValue(value) {
          this.$input.val(value);
          this.clearHintIfInvalid();
          this._checkLanguageDirection();
        },
        resetInputValue: function resetInputValue() {
          this.setInputValue(this.query);
        },
        getHint: function getHint() {
          return this.$hint.val();
        },
        setHint: function setHint(value) {
          this.$hint.val(value);
        },
        clearHint: function clearHint() {
          this.setHint("");
        },
        clearHintIfInvalid: function clearHintIfInvalid() {
          var val, hint, valIsPrefixOfHint, isValid;
          val = this.getInputValue();
          hint = this.getHint();
          valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
          isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
          !isValid && this.clearHint();
        },
        hasFocus: function hasFocus() {
          return this.$input.is(":focus");
        },
        hasOverflow: function hasOverflow() {
          var constraint = this.$input.width() - 2;
          this.$overflowHelper.text(this.getInputValue());
          return this.$overflowHelper.width() >= constraint;
        },
        isCursorAtEnd: function () {
          var valueLength, selectionStart, range;
          valueLength = this.$input.val().length;
          selectionStart = this.$input[0].selectionStart;
          if (_.isNumber(selectionStart)) {
            return selectionStart === valueLength;
          } else if (document.selection) {
            range = document.selection.createRange();
            range.moveStart("character", -valueLength);
            return valueLength === range.text.length;
          }
          return true;
        },
        destroy: function destroy() {
          this.$hint.off(".tt");
          this.$input.off(".tt");
          this.$overflowHelper.remove();
          this.$hint = this.$input = this.$overflowHelper = $("<div>");
        }
      });
      return Input;
  
      function buildOverflowHelper($input) {
        return $('<pre aria-hidden="true"></pre>').css({
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "pre",
          fontFamily: $input.css("font-family"),
          fontSize: $input.css("font-size"),
          fontStyle: $input.css("font-style"),
          fontVariant: $input.css("font-variant"),
          fontWeight: $input.css("font-weight"),
          wordSpacing: $input.css("word-spacing"),
          letterSpacing: $input.css("letter-spacing"),
          textIndent: $input.css("text-indent"),
          textRendering: $input.css("text-rendering"),
          textTransform: $input.css("text-transform")
        }).insertAfter($input);
      }
  
      function areQueriesEquivalent(a, b) {
        return Input.normalizeQuery(a) === Input.normalizeQuery(b);
      }
  
      function withModifier($e) {
        return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
      }
    }();
    var Dataset = function () {
      "use strict";
      var keys, nameGenerator;
      keys = {
        val: "tt-selectable-display",
        obj: "tt-selectable-object"
      };
      nameGenerator = _.getIdGenerator();
  
      function Dataset(o, www) {
        o = o || {};
        o.templates = o.templates || {};
        o.templates.notFound = o.templates.notFound || o.templates.empty;
        if (!o.source) {
          $.error("missing source");
        }
        if (!o.node) {
          $.error("missing node");
        }
        if (o.name && !isValidName(o.name)) {
          $.error("invalid dataset name: " + o.name);
        }
        www.mixin(this);
        this.highlight = !!o.highlight;
        this.name = o.name || nameGenerator();
        this.limit = o.limit || 5;
        this.displayFn = getDisplayFn(o.display || o.displayKey);
        this.templates = getTemplates(o.templates, this.displayFn);
        this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
        this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
        this._resetLastSuggestion();
        this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
      }
      Dataset.extractData = function extractData(el) {
        var $el = $(el);
        if ($el.data(keys.obj)) {
          return {
            val: $el.data(keys.val) || "",
            obj: $el.data(keys.obj) || null
          };
        }
        return null;
      };
      _.mixin(Dataset.prototype, EventEmitter, {
        _overwrite: function overwrite(query, suggestions) {
          suggestions = suggestions || [];
          if (suggestions.length) {
            this._renderSuggestions(query, suggestions);
          } else if (this.async && this.templates.pending) {
            this._renderPending(query);
          } else if (!this.async && this.templates.notFound) {
            this._renderNotFound(query);
          } else {
            this._empty();
          }
          this.trigger("rendered", this.name, suggestions, false);
        },
        _append: function append(query, suggestions) {
          suggestions = suggestions || [];
          if (suggestions.length && this.$lastSuggestion.length) {
            this._appendSuggestions(query, suggestions);
          } else if (suggestions.length) {
            this._renderSuggestions(query, suggestions);
          } else if (!this.$lastSuggestion.length && this.templates.notFound) {
            this._renderNotFound(query);
          }
          this.trigger("rendered", this.name, suggestions, true);
        },
        _renderSuggestions: function renderSuggestions(query, suggestions) {
          var $fragment;
          $fragment = this._getSuggestionsFragment(query, suggestions);
          this.$lastSuggestion = $fragment.children().last();
          this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
        },
        _appendSuggestions: function appendSuggestions(query, suggestions) {
          var $fragment, $lastSuggestion;
          $fragment = this._getSuggestionsFragment(query, suggestions);
          $lastSuggestion = $fragment.children().last();
          this.$lastSuggestion.after($fragment);
          this.$lastSuggestion = $lastSuggestion;
        },
        _renderPending: function renderPending(query) {
          var template = this.templates.pending;
          this._resetLastSuggestion();
          template && this.$el.html(template({
            query: query,
            dataset: this.name
          }));
        },
        _renderNotFound: function renderNotFound(query) {
          var template = this.templates.notFound;
          this._resetLastSuggestion();
          template && this.$el.html(template({
            query: query,
            dataset: this.name
          }));
        },
        _empty: function empty() {
          this.$el.empty();
          this._resetLastSuggestion();
        },
        _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
          var that = this,
            fragment;
          fragment = document.createDocumentFragment();
          _.each(suggestions, function getSuggestionNode(suggestion) {
            var $el, context;
            context = that._injectQuery(query, suggestion);
            $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
            fragment.appendChild($el[0]);
          });
          this.highlight && highlight({
            className: this.classes.highlight,
            node: fragment,
            pattern: query
          });
          return $(fragment);
        },
        _getFooter: function getFooter(query, suggestions) {
          return this.templates.footer ? this.templates.footer({
            query: query,
            suggestions: suggestions,
            dataset: this.name
          }) : null;
        },
        _getHeader: function getHeader(query, suggestions) {
          return this.templates.header ? this.templates.header({
            query: query,
            suggestions: suggestions,
            dataset: this.name
          }) : null;
        },
        _resetLastSuggestion: function resetLastSuggestion() {
          this.$lastSuggestion = $();
        },
        _injectQuery: function injectQuery(query, obj) {
          return _.isObject(obj) ? _.mixin({
            _query: query
          }, obj) : obj;
        },
        update: function update(query) {
          var that = this,
            canceled = false,
            syncCalled = false,
            rendered = 0;
          this.cancel();
          this.cancel = function cancel() {
            canceled = true;
            that.cancel = $.noop;
            that.async && that.trigger("asyncCanceled", query);
          };
          this.source(query, sync, async);
          !syncCalled && sync([]);
  
          function sync(suggestions) {
            if (syncCalled) {
              return;
            }
            syncCalled = true;
            suggestions = (suggestions || []).slice(0, that.limit);
            rendered = suggestions.length;
            that._overwrite(query, suggestions);
            if (rendered < that.limit && that.async) {
              that.trigger("asyncRequested", query);
            }
          }
  
          function async(suggestions) {
            suggestions = suggestions || [];
            if (!canceled && rendered < that.limit) {
              that.cancel = $.noop;
              rendered += suggestions.length;
              that._append(query, suggestions.slice(0, that.limit - rendered));
              that.async && that.trigger("asyncReceived", query);
            }
          }
        },
        cancel: $.noop,
        clear: function clear() {
          this._empty();
          this.cancel();
          this.trigger("cleared");
        },
        isEmpty: function isEmpty() {
          return this.$el.is(":empty");
        },
        destroy: function destroy() {
          this.$el = $("<div>");
        }
      });
      return Dataset;
  
      function getDisplayFn(display) {
        display = display || _.stringify;
        return _.isFunction(display) ? display : displayFn;
  
        function displayFn(obj) {
          return obj[display];
        }
      }
  
      function getTemplates(templates, displayFn) {
        return {
          notFound: templates.notFound && _.templatify(templates.notFound),
          pending: templates.pending && _.templatify(templates.pending),
          header: templates.header && _.templatify(templates.header),
          footer: templates.footer && _.templatify(templates.footer),
          suggestion: templates.suggestion || suggestionTemplate
        };
  
        function suggestionTemplate(context) {
          return $("<div>").text(displayFn(context));
        }
      }
  
      function isValidName(str) {
        return /^[_a-zA-Z0-9-]+$/.test(str);
      }
    }();
    var Menu = function () {
      "use strict";
  
      function Menu(o, www) {
        var that = this;
        o = o || {};
        if (!o.node) {
          $.error("node is required");
        }
        www.mixin(this);
        this.$node = $(o.node);
        this.query = null;
        this.datasets = _.map(o.datasets, initializeDataset);
  
        function initializeDataset(oDataset) {
          var node = that.$node.find(oDataset.node).first();
          oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
          return new Dataset(oDataset, www);
        }
      }
      _.mixin(Menu.prototype, EventEmitter, {
        _onSelectableClick: function onSelectableClick($e) {
          this.trigger("selectableClicked", $($e.currentTarget));
        },
        _onRendered: function onRendered(type, dataset, suggestions, async) {
          this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
          this.trigger("datasetRendered", dataset, suggestions, async);
        },
        _onCleared: function onCleared() {
          this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
          this.trigger("datasetCleared");
        },
        _propagate: function propagate() {
          this.trigger.apply(this, arguments);
        },
        _allDatasetsEmpty: function allDatasetsEmpty() {
          return _.every(this.datasets, isDatasetEmpty);
  
          function isDatasetEmpty(dataset) {
            return dataset.isEmpty();
          }
        },
        _getSelectables: function getSelectables() {
          return this.$node.find(this.selectors.selectable);
        },
        _removeCursor: function _removeCursor() {
          var $selectable = this.getActiveSelectable();
          $selectable && $selectable.removeClass(this.classes.cursor);
        },
        _ensureVisible: function ensureVisible($el) {
          var elTop, elBottom, nodeScrollTop, nodeHeight;
          elTop = $el.position().top;
          elBottom = elTop + $el.outerHeight(true);
          nodeScrollTop = this.$node.scrollTop();
          nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
          if (elTop < 0) {
            this.$node.scrollTop(nodeScrollTop + elTop);
          } else if (nodeHeight < elBottom) {
            this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
          }
        },
        bind: function () {
          var that = this,
            onSelectableClick;
          onSelectableClick = _.bind(this._onSelectableClick, this);
          this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
          _.each(this.datasets, function (dataset) {
            dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
          });
          return this;
        },
        isOpen: function isOpen() {
          return this.$node.hasClass(this.classes.open);
        },
        open: function open() {
          this.$node.addClass(this.classes.open);
        },
        close: function close() {
          this.$node.removeClass(this.classes.open);
          this._removeCursor();
        },
        setLanguageDirection: function setLanguageDirection(dir) {
          this.$node.attr("dir", dir);
        },
        selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
          var $selectables, $oldCursor, oldIndex, newIndex;
          $oldCursor = this.getActiveSelectable();
          $selectables = this._getSelectables();
          oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
          newIndex = oldIndex + delta;
          newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
          newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
          return newIndex === -1 ? null : $selectables.eq(newIndex);
        },
        setCursor: function setCursor($selectable) {
          this._removeCursor();
          if ($selectable = $selectable && $selectable.first()) {
            $selectable.addClass(this.classes.cursor);
            this._ensureVisible($selectable);
          }
        },
        getSelectableData: function getSelectableData($el) {
          return $el && $el.length ? Dataset.extractData($el) : null;
        },
        getActiveSelectable: function getActiveSelectable() {
          var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
          return $selectable.length ? $selectable : null;
        },
        getTopSelectable: function getTopSelectable() {
          var $selectable = this._getSelectables().first();
          return $selectable.length ? $selectable : null;
        },
        update: function update(query) {
          var isValidUpdate = query !== this.query;
          if (isValidUpdate) {
            this.query = query;
            _.each(this.datasets, updateDataset);
          }
          return isValidUpdate;
  
          function updateDataset(dataset) {
            dataset.update(query);
          }
        },
        empty: function empty() {
          _.each(this.datasets, clearDataset);
          this.query = null;
          this.$node.addClass(this.classes.empty);
  
          function clearDataset(dataset) {
            dataset.clear();
          }
        },
        destroy: function destroy() {
          this.$node.off(".tt");
          this.$node = $("<div>");
          _.each(this.datasets, destroyDataset);
  
          function destroyDataset(dataset) {
            dataset.destroy();
          }
        }
      });
      return Menu;
    }();
    var DefaultMenu = function () {
      "use strict";
      var s = Menu.prototype;
  
      function DefaultMenu() {
        Menu.apply(this, [].slice.call(arguments, 0));
      }
      _.mixin(DefaultMenu.prototype, Menu.prototype, {
        open: function open() {
          !this._allDatasetsEmpty() && this._show();
          return s.open.apply(this, [].slice.call(arguments, 0));
        },
        close: function close() {
          this._hide();
          return s.close.apply(this, [].slice.call(arguments, 0));
        },
        _onRendered: function onRendered() {
          if (this._allDatasetsEmpty()) {
            this._hide();
          } else {
            this.isOpen() && this._show();
          }
          return s._onRendered.apply(this, [].slice.call(arguments, 0));
        },
        _onCleared: function onCleared() {
          if (this._allDatasetsEmpty()) {
            this._hide();
          } else {
            this.isOpen() && this._show();
          }
          return s._onCleared.apply(this, [].slice.call(arguments, 0));
        },
        setLanguageDirection: function setLanguageDirection(dir) {
          this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
          return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
        },
        _hide: function hide() {
          this.$node.hide();
        },
        _show: function show() {
          this.$node.css("display", "block");
        }
      });
      return DefaultMenu;
    }();
    var Typeahead = function () {
      "use strict";
  
      function Typeahead(o, www) {
        var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
        o = o || {};
        if (!o.input) {
          $.error("missing input");
        }
        if (!o.menu) {
          $.error("missing menu");
        }
        if (!o.eventBus) {
          $.error("missing event bus");
        }
        www.mixin(this);
        this.eventBus = o.eventBus;
        this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
        this.input = o.input;
        this.menu = o.menu;
        this.enabled = true;
        this.active = false;
        this.input.hasFocus() && this.activate();
        this.dir = this.input.getLangDir();
        this._hacks();
        this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
        onFocused = c(this, "activate", "open", "_onFocused");
        onBlurred = c(this, "deactivate", "_onBlurred");
        onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
        onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
        onEscKeyed = c(this, "isActive", "_onEscKeyed");
        onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
        onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
        onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
        onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
        onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
        onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
        this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
      }
      _.mixin(Typeahead.prototype, {
        _hacks: function hacks() {
          var $input, $menu;
          $input = this.input.$input || $("<div>");
          $menu = this.menu.$node || $("<div>");
          $input.on("blur.tt", function ($e) {
            var active, isActive, hasActive;
            active = document.activeElement;
            isActive = $menu.is(active);
            hasActive = $menu.has(active).length > 0;
            if (_.isMsie() && (isActive || hasActive)) {
              $e.preventDefault();
              $e.stopImmediatePropagation();
              _.defer(function () {
                $input.focus();
              });
            }
          });
          $menu.on("mousedown.tt", function ($e) {
            $e.preventDefault();
          });
        },
        _onSelectableClicked: function onSelectableClicked(type, $el) {
          this.select($el);
        },
        _onDatasetCleared: function onDatasetCleared() {
          this._updateHint();
        },
        _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
          this._updateHint();
          this.eventBus.trigger("render", suggestions, async, dataset);
        },
        _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
          this.eventBus.trigger("asyncrequest", query, dataset);
        },
        _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
          this.eventBus.trigger("asynccancel", query, dataset);
        },
        _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
          this.eventBus.trigger("asyncreceive", query, dataset);
        },
        _onFocused: function onFocused() {
          this._minLengthMet() && this.menu.update(this.input.getQuery());
        },
        _onBlurred: function onBlurred() {
          if (this.input.hasQueryChangedSinceLastFocus()) {
            this.eventBus.trigger("change", this.input.getQuery());
          }
        },
        _onEnterKeyed: function onEnterKeyed(type, $e) {
          var $selectable;
          if ($selectable = this.menu.getActiveSelectable()) {
            this.select($selectable) && $e.preventDefault();
          }
        },
        _onTabKeyed: function onTabKeyed(type, $e) {
          var $selectable;
          if ($selectable = this.menu.getActiveSelectable()) {
            this.select($selectable) && $e.preventDefault();
          } else if ($selectable = this.menu.getTopSelectable()) {
            this.autocomplete($selectable) && $e.preventDefault();
          }
        },
        _onEscKeyed: function onEscKeyed() {
          this.close();
        },
        _onUpKeyed: function onUpKeyed() {
          this.moveCursor(-1);
        },
        _onDownKeyed: function onDownKeyed() {
          this.moveCursor(+1);
        },
        _onLeftKeyed: function onLeftKeyed() {
          if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
            this.autocomplete(this.menu.getTopSelectable());
          }
        },
        _onRightKeyed: function onRightKeyed() {
          if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
            this.autocomplete(this.menu.getTopSelectable());
          }
        },
        _onQueryChanged: function onQueryChanged(e, query) {
          this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
        },
        _onWhitespaceChanged: function onWhitespaceChanged() {
          this._updateHint();
        },
        _onLangDirChanged: function onLangDirChanged(e, dir) {
          if (this.dir !== dir) {
            this.dir = dir;
            this.menu.setLanguageDirection(dir);
          }
        },
        _openIfActive: function openIfActive() {
          this.isActive() && this.open();
        },
        _minLengthMet: function minLengthMet(query) {
          query = _.isString(query) ? query : this.input.getQuery() || "";
          return query.length >= this.minLength;
        },
        _updateHint: function updateHint() {
          var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
          $selectable = this.menu.getTopSelectable();
          data = this.menu.getSelectableData($selectable);
          val = this.input.getInputValue();
          if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
            query = Input.normalizeQuery(val);
            escapedQuery = _.escapeRegExChars(query);
            frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
            match = frontMatchRegEx.exec(data.val);
            match && this.input.setHint(val + match[1]);
          } else {
            this.input.clearHint();
          }
        },
        isEnabled: function isEnabled() {
          return this.enabled;
        },
        enable: function enable() {
          this.enabled = true;
        },
        disable: function disable() {
          this.enabled = false;
        },
        isActive: function isActive() {
          return this.active;
        },
        activate: function activate() {
          if (this.isActive()) {
            return true;
          } else if (!this.isEnabled() || this.eventBus.before("active")) {
            return false;
          } else {
            this.active = true;
            this.eventBus.trigger("active");
            return true;
          }
        },
        deactivate: function deactivate() {
          if (!this.isActive()) {
            return true;
          } else if (this.eventBus.before("idle")) {
            return false;
          } else {
            this.active = false;
            this.close();
            this.eventBus.trigger("idle");
            return true;
          }
        },
        isOpen: function isOpen() {
          return this.menu.isOpen();
        },
        open: function open() {
          if (!this.isOpen() && !this.eventBus.before("open")) {
            this.menu.open();
            this._updateHint();
            this.eventBus.trigger("open");
          }
          return this.isOpen();
        },
        close: function close() {
          if (this.isOpen() && !this.eventBus.before("close")) {
            this.menu.close();
            this.input.clearHint();
            this.input.resetInputValue();
            this.eventBus.trigger("close");
          }
          return !this.isOpen();
        },
        setVal: function setVal(val) {
          this.input.setQuery(_.toStr(val));
        },
        getVal: function getVal() {
          return this.input.getQuery();
        },
        select: function select($selectable) {
          var data = this.menu.getSelectableData($selectable);
          if (data && !this.eventBus.before("select", data.obj)) {
            this.input.setQuery(data.val, true);
            this.eventBus.trigger("select", data.obj);
            this.close();
            return true;
          }
          return false;
        },
        autocomplete: function autocomplete($selectable) {
          var query, data, isValid;
          query = this.input.getQuery();
          data = this.menu.getSelectableData($selectable);
          isValid = data && query !== data.val;
          if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
            this.input.setQuery(data.val);
            this.eventBus.trigger("autocomplete", data.obj);
            return true;
          }
          return false;
        },
        moveCursor: function moveCursor(delta) {
          var query, $candidate, data, payload, cancelMove;
          query = this.input.getQuery();
          $candidate = this.menu.selectableRelativeToCursor(delta);
          data = this.menu.getSelectableData($candidate);
          payload = data ? data.obj : null;
          cancelMove = this._minLengthMet() && this.menu.update(query);
          if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
            this.menu.setCursor($candidate);
            if (data) {
              this.input.setInputValue(data.val);
            } else {
              this.input.resetInputValue();
              this._updateHint();
            }
            this.eventBus.trigger("cursorchange", payload);
            return true;
          }
          return false;
        },
        destroy: function destroy() {
          this.input.destroy();
          this.menu.destroy();
        }
      });
      return Typeahead;
  
      function c(ctx) {
        var methods = [].slice.call(arguments, 1);
        return function () {
          var args = [].slice.call(arguments);
          _.each(methods, function (method) {
            return ctx[method].apply(ctx, args);
          });
        };
      }
    }();
    (function () {
      "use strict";
      var old, keys, methods;
      old = $.fn.typeahead;
      keys = {
        www: "tt-www",
        attrs: "tt-attrs",
        typeahead: "tt-typeahead"
      };
      methods = {
        initialize: function initialize(o, datasets) {
          var www;
          datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
          o = o || {};
          www = WWW(o.classNames);
          return this.each(attach);
  
          function attach() {
            var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
            _.each(datasets, function (d) {
              d.highlight = !!o.highlight;
            });
            $input = $(this);
            $wrapper = $(www.html.wrapper);
            $hint = $elOrNull(o.hint);
            $menu = $elOrNull(o.menu);
            defaultHint = o.hint !== false && !$hint;
            defaultMenu = o.menu !== false && !$menu;
            defaultHint && ($hint = buildHintFromInput($input, www));
            defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
            $hint && $hint.val("");
            $input = prepInput($input, www);
            if (defaultHint || defaultMenu) {
              $wrapper.css(www.css.wrapper);
              $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
              $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
            }
            MenuConstructor = defaultMenu ? DefaultMenu : Menu;
            eventBus = new EventBus({
              el: $input
            });
            input = new Input({
              hint: $hint,
              input: $input
            }, www);
            menu = new MenuConstructor({
              node: $menu,
              datasets: datasets
            }, www);
            typeahead = new Typeahead({
              input: input,
              menu: menu,
              eventBus: eventBus,
              minLength: o.minLength
            }, www);
            $input.data(keys.www, www);
            $input.data(keys.typeahead, typeahead);
          }
        },
        isEnabled: function isEnabled() {
          var enabled;
          ttEach(this.first(), function (t) {
            enabled = t.isEnabled();
          });
          return enabled;
        },
        enable: function enable() {
          ttEach(this, function (t) {
            t.enable();
          });
          return this;
        },
        disable: function disable() {
          ttEach(this, function (t) {
            t.disable();
          });
          return this;
        },
        isActive: function isActive() {
          var active;
          ttEach(this.first(), function (t) {
            active = t.isActive();
          });
          return active;
        },
        activate: function activate() {
          ttEach(this, function (t) {
            t.activate();
          });
          return this;
        },
        deactivate: function deactivate() {
          ttEach(this, function (t) {
            t.deactivate();
          });
          return this;
        },
        isOpen: function isOpen() {
          var open;
          ttEach(this.first(), function (t) {
            open = t.isOpen();
          });
          return open;
        },
        open: function open() {
          ttEach(this, function (t) {
            t.open();
          });
          return this;
        },
        close: function close() {
          ttEach(this, function (t) {
            t.close();
          });
          return this;
        },
        select: function select(el) {
          var success = false,
            $el = $(el);
          ttEach(this.first(), function (t) {
            success = t.select($el);
          });
          return success;
        },
        autocomplete: function autocomplete(el) {
          var success = false,
            $el = $(el);
          ttEach(this.first(), function (t) {
            success = t.autocomplete($el);
          });
          return success;
        },
        moveCursor: function moveCursoe(delta) {
          var success = false;
          ttEach(this.first(), function (t) {
            success = t.moveCursor(delta);
          });
          return success;
        },
        val: function val(newVal) {
          var query;
          if (!arguments.length) {
            ttEach(this.first(), function (t) {
              query = t.getVal();
            });
            return query;
          } else {
            ttEach(this, function (t) {
              t.setVal(newVal);
            });
            return this;
          }
        },
        destroy: function destroy() {
          ttEach(this, function (typeahead, $input) {
            revert($input);
            typeahead.destroy();
          });
          return this;
        }
      };
      $.fn.typeahead = function (method) {
        if (methods[method]) {
          return methods[method].apply(this, [].slice.call(arguments, 1));
        } else {
          return methods.initialize.apply(this, arguments);
        }
      };
      $.fn.typeahead.noConflict = function noConflict() {
        $.fn.typeahead = old;
        return this;
      };
  
      function ttEach($els, fn) {
        $els.each(function () {
          var $input = $(this),
            typeahead;
          (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
        });
      }
  
      function buildHintFromInput($input, www) {
        return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
          autocomplete: "off",
          spellcheck: "false",
          tabindex: -1
        });
      }
  
      function prepInput($input, www) {
        $input.data(keys.attrs, {
          dir: $input.attr("dir"),
          autocomplete: $input.attr("autocomplete"),
          spellcheck: $input.attr("spellcheck"),
          style: $input.attr("style")
        });
        $input.addClass(www.classes.input).attr({
          autocomplete: "off",
          spellcheck: false
        });
        try {
          !$input.attr("dir") && $input.attr("dir", "auto");
        } catch (e) {}
        return $input;
      }
  
      function getBackgroundStyles($el) {
        return {
          backgroundAttachment: $el.css("background-attachment"),
          backgroundClip: $el.css("background-clip"),
          backgroundColor: $el.css("background-color"),
          backgroundImage: $el.css("background-image"),
          backgroundOrigin: $el.css("background-origin"),
          backgroundPosition: $el.css("background-position"),
          backgroundRepeat: $el.css("background-repeat"),
          backgroundSize: $el.css("background-size")
        };
      }
  
      function revert($input) {
        var www, $wrapper;
        www = $input.data(keys.www);
        $wrapper = $input.parent().filter(www.selectors.wrapper);
        _.each($input.data(keys.attrs), function (val, key) {
          _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
        });
        $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
        if ($wrapper.length) {
          $input.detach().insertAfter($wrapper);
          $wrapper.remove();
        }
      }
  
      function $elOrNull(obj) {
        var isValid, $el;
        isValid = _.isJQuery(obj) || _.isElement(obj);
        $el = isValid ? $(obj).first() : [];
        return $el.length ? $el : null;
      }
    })();
  });
  
  ; /*})'"*/ ; /*})'"*/
  /* Notify.js - http://notifyjs.com/ Copyright (c) 2015 MIT */
  (function (factory) {
      // UMD start
      // https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js
      if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
      } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function (root, jQuery) {
          if (jQuery === undefined) {
            // require('jQuery') returns a factory that requires window to
            // build a jQuery instance, we normalize how we use modules
            // that require this pattern but the window provided is a noop
            // if it's defined (how jquery works)
            if (typeof window !== 'undefined') {
              jQuery = require('jquery');
            } else {
              jQuery = require('jquery')(root);
            }
          }
          factory(jQuery);
          return jQuery;
        };
      } else {
        // Browser globals
        factory(jQuery);
      }
    }
    (function ($) {
      //IE8 indexOf polyfill
      var indexOf = [].indexOf || function (item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }
        return -1;
      };
  
      var pluginName = "notify";
      var pluginClassName = pluginName + "js";
      var blankFieldName = pluginName + "!blank";
  
      var positions = {
        t: "top",
        m: "middle",
        b: "bottom",
        l: "left",
        c: "center",
        r: "right"
      };
      var hAligns = ["l", "c", "r"];
      var vAligns = ["t", "m", "b"];
      var mainPositions = ["t", "b", "l", "r"];
      var opposites = {
        t: "b",
        m: null,
        b: "t",
        l: "r",
        c: null,
        r: "l"
      };
  
      var parsePosition = function (str) {
        var pos;
        pos = [];
        $.each(str.split(/\W+/), function (i, word) {
          var w;
          w = word.toLowerCase().charAt(0);
          if (positions[w]) {
            return pos.push(w);
          }
        });
        return pos;
      };
  
      var styles = {};
  
      var coreStyle = {
        name: "core",
        html: "<div class=\"" + pluginClassName + "-wrapper\">\n	<div class=\"" + pluginClassName + "-arrow\"></div>\n	<div class=\"" + pluginClassName + "-container\"></div>\n</div>",
        css: "." + pluginClassName + "-corner {\n	position: fixed;\n	margin: 5px;\n	z-index: 1050;\n}\n\n." + pluginClassName + "-corner ." + pluginClassName + "-wrapper,\n." + pluginClassName + "-corner ." + pluginClassName + "-container {\n	position: relative;\n	display: block;\n	height: inherit;\n	width: inherit;\n	margin: 3px;\n}\n\n." + pluginClassName + "-wrapper {\n	z-index: 1;\n	position: absolute;\n	display: inline-block;\n	height: 0;\n	width: 0;\n}\n\n." + pluginClassName + "-container {\n	display: none;\n	z-index: 1;\n	position: absolute;\n}\n\n." + pluginClassName + "-hidable {\n	cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n	position: relative;\n}\n\n." + pluginClassName + "-arrow {\n	position: absolute;\n	z-index: 2;\n	width: 0;\n	height: 0;\n}"
      };
  
      var stylePrefixes = {
        "border-radius": ["-webkit-", "-moz-"]
      };
  
      var getStyle = function (name) {
        return styles[name];
      };
  
      var removeStyle = function (name) {
        if (!name) {
          throw "Missing Style name";
        }
        if (styles[name]) {
          delete styles[name];
        }
      };
  
      var addStyle = function (name, def) {
        if (!name) {
          throw "Missing Style name";
        }
        if (!def) {
          throw "Missing Style definition";
        }
        if (!def.html) {
          throw "Missing Style HTML";
        }
        //remove existing style
        var existing = styles[name];
        if (existing && existing.cssElem) {
          if (window.console) {
            console.warn(pluginName + ": overwriting style '" + name + "'");
          }
          styles[name].cssElem.remove();
        }
        def.name = name;
        styles[name] = def;
        var cssText = "";
        if (def.classes) {
          $.each(def.classes, function (className, props) {
            cssText += "." + pluginClassName + "-" + def.name + "-" + className + " {\n";
            $.each(props, function (name, val) {
              if (stylePrefixes[name]) {
                $.each(stylePrefixes[name], function (i, prefix) {
                  return cssText += "	" + prefix + name + ": " + val + ";\n";
                });
              }
              return cssText += "	" + name + ": " + val + ";\n";
            });
            return cssText += "}\n";
          });
        }
        if (def.css) {
          cssText += "/* styles for " + def.name + " */\n" + def.css;
        }
        if (cssText) {
          def.cssElem = insertCSS(cssText);
          def.cssElem.attr("id", "notify-" + def.name);
        }
        var fields = {};
        var elem = $(def.html);
        findFields("html", elem, fields);
        findFields("text", elem, fields);
        def.fields = fields;
      };
  
      var insertCSS = function (cssText) {
        var e, elem, error;
        elem = createElem("style");
        elem.attr("type", 'text/css');
        $("head").append(elem);
        try {
          elem.html(cssText);
        } catch (_) {
          elem[0].styleSheet.cssText = cssText;
        }
        return elem;
      };
  
      var findFields = function (type, elem, fields) {
        var attr;
        if (type !== "html") {
          type = "text";
        }
        attr = "data-notify-" + type;
        return find(elem, "[" + attr + "]").each(function () {
          var name;
          name = $(this).attr(attr);
          if (!name) {
            name = blankFieldName;
          }
          fields[name] = type;
        });
      };
  
      var find = function (elem, selector) {
        if (elem.is(selector)) {
          return elem;
        } else {
          return elem.find(selector);
        }
      };
  
      var pluginOptions = {
        clickToHide: true,
        autoHide: true,
        autoHideDelay: 5000,
        arrowShow: true,
        arrowSize: 5,
        breakNewLines: true,
        elementPosition: "bottom",
        globalPosition: "top right",
        style: "bootstrap",
        className: "error",
        showAnimation: "slideDown",
        showDuration: 400,
        hideAnimation: "slideUp",
        hideDuration: 200,
        gap: 5
      };
  
      var inherit = function (a, b) {
        var F;
        F = function () {};
        F.prototype = a;
        return $.extend(true, new F(), b);
      };
  
      var defaults = function (opts) {
        return $.extend(pluginOptions, opts);
      };
  
      var createElem = function (tag) {
        return $("<" + tag + "></" + tag + ">");
      };
  
      var globalAnchors = {};
  
      var getAnchorElement = function (element) {
        var radios;
        if (element.is('[type=radio]')) {
          radios = element.parents('form:first').find('[type=radio]').filter(function (i, e) {
            return $(e).attr("name") === element.attr("name");
          });
          element = radios.first();
        }
        return element;
      };
  
      var incr = function (obj, pos, val) {
        var opp, temp;
        if (typeof val === "string") {
          val = parseInt(val, 10);
        } else if (typeof val !== "number") {
          return;
        }
        if (isNaN(val)) {
          return;
        }
        opp = positions[opposites[pos.charAt(0)]];
        temp = pos;
        if (obj[opp] !== undefined) {
          pos = positions[opp.charAt(0)];
          val = -val;
        }
        if (obj[pos] === undefined) {
          obj[pos] = val;
        } else {
          obj[pos] += val;
        }
        return null;
      };
  
      var realign = function (alignment, inner, outer) {
        if (alignment === "l" || alignment === "t") {
          return 0;
        } else if (alignment === "c" || alignment === "m") {
          return outer / 2 - inner / 2;
        } else if (alignment === "r" || alignment === "b") {
          return outer - inner;
        }
        throw "Invalid alignment";
      };
  
      var encode = function (text) {
        encode.e = encode.e || createElem("div");
        return encode.e.text(text).html();
      };
  
      function Notification(elem, data, options) {
        if (typeof options === "string") {
          options = {
            className: options
          };
        }
        this.options = inherit(pluginOptions, $.isPlainObject(options) ? options : {});
        this.loadHTML();
        this.wrapper = $(coreStyle.html);
        if (this.options.clickToHide) {
          this.wrapper.addClass(pluginClassName + "-hidable");
        }
        this.wrapper.data(pluginClassName, this);
        this.arrow = this.wrapper.find("." + pluginClassName + "-arrow");
        this.container = this.wrapper.find("." + pluginClassName + "-container");
        this.container.append(this.userContainer);
        if (elem && elem.length) {
          this.elementType = elem.attr("type");
          this.originalElement = elem;
          this.elem = getAnchorElement(elem);
          this.elem.data(pluginClassName, this);
          this.elem.before(this.wrapper);
        }
        this.container.hide();
        this.run(data);
      }
  
      Notification.prototype.loadHTML = function () {
        var style;
        style = this.getStyle();
        this.userContainer = $(style.html);
        this.userFields = style.fields;
      };
  
      Notification.prototype.show = function (show, userCallback) {
        var args, callback, elems, fn, hidden;
        callback = (function (_this) {
          return function () {
            if (!show && !_this.elem) {
              _this.destroy();
            }
            if (userCallback) {
              return userCallback();
            }
          };
        })(this);
        hidden = this.container.parent().parents(':hidden').length > 0;
        elems = this.container.add(this.arrow);
        args = [];
        if (hidden && show) {
          fn = "show";
        } else if (hidden && !show) {
          fn = "hide";
        } else if (!hidden && show) {
          fn = this.options.showAnimation;
          args.push(this.options.showDuration);
        } else if (!hidden && !show) {
          fn = this.options.hideAnimation;
          args.push(this.options.hideDuration);
        } else {
          return callback();
        }
        args.push(callback);
        return elems[fn].apply(elems, args);
      };
  
      Notification.prototype.setGlobalPosition = function () {
        var p = this.getPosition();
        var pMain = p[0];
        var pAlign = p[1];
        var main = positions[pMain];
        var align = positions[pAlign];
        var key = pMain + "|" + pAlign;
        var anchor = globalAnchors[key];
        if (!anchor || !document.body.contains(anchor[0])) {
          anchor = globalAnchors[key] = createElem("div");
          var css = {};
          css[main] = 0;
          if (align === "middle") {
            css.top = '45%';
          } else if (align === "center") {
            css.left = '45%';
          } else {
            css[align] = 0;
          }
          anchor.css(css).addClass(pluginClassName + "-corner");
          $("body").append(anchor);
        }
        return anchor.prepend(this.wrapper);
      };
  
      Notification.prototype.setElementPosition = function () {
        var arrowColor, arrowCss, arrowSize, color, contH, contW, css, elemH, elemIH, elemIW, elemPos, elemW, gap, j, k, len, len1, mainFull, margin, opp, oppFull, pAlign, pArrow, pMain, pos, posFull, position, ref, wrapPos;
        position = this.getPosition();
        pMain = position[0];
        pAlign = position[1];
        pArrow = position[2];
        elemPos = this.elem.position();
        elemH = this.elem.outerHeight();
        elemW = this.elem.outerWidth();
        elemIH = this.elem.innerHeight();
        elemIW = this.elem.innerWidth();
        wrapPos = this.wrapper.position();
        contH = this.container.height();
        contW = this.container.width();
        mainFull = positions[pMain];
        opp = opposites[pMain];
        oppFull = positions[opp];
        css = {};
        css[oppFull] = pMain === "b" ? elemH : pMain === "r" ? elemW : 0;
        incr(css, "top", elemPos.top - wrapPos.top);
        incr(css, "left", elemPos.left - wrapPos.left);
        ref = ["top", "left"];
        for (j = 0, len = ref.length; j < len; j++) {
          pos = ref[j];
          margin = parseInt(this.elem.css("margin-" + pos), 10);
          if (margin) {
            incr(css, pos, margin);
          }
        }
        gap = Math.max(0, this.options.gap - (this.options.arrowShow ? arrowSize : 0));
        incr(css, oppFull, gap);
        if (!this.options.arrowShow) {
          this.arrow.hide();
        } else {
          arrowSize = this.options.arrowSize;
          arrowCss = $.extend({}, css);
          arrowColor = this.userContainer.css("border-color") || this.userContainer.css("border-top-color") || this.userContainer.css("background-color") || "white";
          for (k = 0, len1 = mainPositions.length; k < len1; k++) {
            pos = mainPositions[k];
            posFull = positions[pos];
            if (pos === opp) {
              continue;
            }
            color = posFull === mainFull ? arrowColor : "transparent";
            arrowCss["border-" + posFull] = arrowSize + "px solid " + color;
          }
          incr(css, positions[opp], arrowSize);
          if (indexOf.call(mainPositions, pAlign) >= 0) {
            incr(arrowCss, positions[pAlign], arrowSize * 2);
          }
        }
        if (indexOf.call(vAligns, pMain) >= 0) {
          incr(css, "left", realign(pAlign, contW, elemW));
          if (arrowCss) {
            incr(arrowCss, "left", realign(pAlign, arrowSize, elemIW));
          }
        } else if (indexOf.call(hAligns, pMain) >= 0) {
          incr(css, "top", realign(pAlign, contH, elemH));
          if (arrowCss) {
            incr(arrowCss, "top", realign(pAlign, arrowSize, elemIH));
          }
        }
        if (this.container.is(":visible")) {
          css.display = "block";
        }
        this.container.removeAttr("style").css(css);
        if (arrowCss) {
          return this.arrow.removeAttr("style").css(arrowCss);
        }
      };
  
      Notification.prototype.getPosition = function () {
        var pos, ref, ref1, ref2, ref3, ref4, ref5, text;
        text = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition);
        pos = parsePosition(text);
        if (pos.length === 0) {
          pos[0] = "b";
        }
        if (ref = pos[0], indexOf.call(mainPositions, ref) < 0) {
          throw "Must be one of [" + mainPositions + "]";
        }
        if (pos.length === 1 || ((ref1 = pos[0], indexOf.call(vAligns, ref1) >= 0) && (ref2 = pos[1], indexOf.call(hAligns, ref2) < 0)) || ((ref3 = pos[0], indexOf.call(hAligns, ref3) >= 0) && (ref4 = pos[1], indexOf.call(vAligns, ref4) < 0))) {
          pos[1] = (ref5 = pos[0], indexOf.call(hAligns, ref5) >= 0) ? "m" : "l";
        }
        if (pos.length === 2) {
          pos[2] = pos[1];
        }
        return pos;
      };
  
      Notification.prototype.getStyle = function (name) {
        var style;
        if (!name) {
          name = this.options.style;
        }
        if (!name) {
          name = "default";
        }
        style = styles[name];
        if (!style) {
          throw "Missing style: " + name;
        }
        return style;
      };
  
      Notification.prototype.updateClasses = function () {
        var classes, style;
        classes = ["base"];
        if ($.isArray(this.options.className)) {
          classes = classes.concat(this.options.className);
        } else if (this.options.className) {
          classes.push(this.options.className);
        }
        style = this.getStyle();
        classes = $.map(classes, function (n) {
          return pluginClassName + "-" + style.name + "-" + n;
        }).join(" ");
        return this.userContainer.attr("class", classes);
      };
  
      Notification.prototype.run = function (data, options) {
        var d, datas, name, type, value;
        if ($.isPlainObject(options)) {
          $.extend(this.options, options);
        } else if ($.type(options) === "string") {
          this.options.className = options;
        }
        if (this.container && !data) {
          this.show(false);
          return;
        } else if (!this.container && !data) {
          return;
        }
        datas = {};
        if ($.isPlainObject(data)) {
          datas = data;
        } else {
          datas[blankFieldName] = data;
        }
        for (name in datas) {
          d = datas[name];
          type = this.userFields[name];
          if (!type) {
            continue;
          }
          if (type === "text") {
            d = encode(d);
            if (this.options.breakNewLines) {
              d = d.replace(/\n/g, '<br/>');
            }
          }
          value = name === blankFieldName ? '' : '=' + name;
          find(this.userContainer, "[data-notify-" + type + value + "]").html(d);
        }
        this.updateClasses();
        if (this.elem) {
          this.setElementPosition();
        } else {
          this.setGlobalPosition();
        }
        this.show(true);
        if (this.options.autoHide) {
          clearTimeout(this.autohideTimer);
          this.autohideTimer = setTimeout(this.show.bind(this, false), this.options.autoHideDelay);
        }
      };
  
      Notification.prototype.destroy = function () {
        this.wrapper.data(pluginClassName, null);
        this.wrapper.remove();
      };
  
      $[pluginName] = function (elem, data, options) {
        if ((elem && elem.nodeName) || elem.jquery) {
          $(elem)[pluginName](data, options);
        } else {
          options = data;
          data = elem;
          new Notification(null, data, options);
        }
        return elem;
      };
  
      $.fn[pluginName] = function (data, options) {
        $(this).each(function () {
          var prev = getAnchorElement($(this)).data(pluginClassName);
          if (prev) {
            prev.destroy();
          }
          var curr = new Notification($(this), data, options);
        });
        return this;
      };
  
      $.extend($[pluginName], {
        defaults: defaults,
        addStyle: addStyle,
        removeStyle: removeStyle,
        pluginOptions: pluginOptions,
        getStyle: getStyle,
        insertCSS: insertCSS
      });
  
      //always include the default bootstrap style
      addStyle("bootstrap", {
        html: "<div>\n<span data-notify-text></span>\n</div>",
        classes: {
          base: {
            "font-weight": "bold",
            "padding": "8px 15px 8px 14px",
            "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
            "background-color": "#fcf8e3",
            "border": "1px solid #fbeed5",
            "border-radius": "4px",
            "white-space": "nowrap",
            "padding-left": "25px",
            "background-repeat": "no-repeat",
            "background-position": "3px 7px"
          },
          error: {
            "color": "#B94A48",
            "background-color": "#F2DEDE",
            "border-color": "#EED3D7",
            "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
          },
          success: {
            "color": "#468847",
            "background-color": "#DFF0D8",
            "border-color": "#D6E9C6",
            "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
          },
          info: {
            "color": "#3A87AD",
            "background-color": "#D9EDF7",
            "border-color": "#BCE8F1",
            "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
          },
          warn: {
            "color": "#C09853",
            "background-color": "#FCF8E3",
            "border-color": "#FBEED5",
            "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
          }
        }
      });
  
      $(function () {
        insertCSS(coreStyle.css).attr("id", "core-notify");
        $(document).on("click", "." + pluginClassName + "-hidable", function (e) {
          $(this).trigger("notify-hide");
        });
        $(document).on("notify-hide", "." + pluginClassName + "-wrapper", function (e) {
          var elem = $(this).data(pluginClassName);
          if (elem) {
            elem.show(false);
          }
        });
      });
  
    }));
  
  ; /*})'"*/ ; /*})'"*/