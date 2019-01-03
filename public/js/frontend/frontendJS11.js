/***
 * @file: flourish-utils.js
 * @desc API functions from flourish theme
 **/
(function ($) {
    //Flourish theme specific scripts
    Drupal.behaviors.flourishContactUsForm = {
      attach: function (context, settings) {
  
        $("body.fl-contact-us").find("div.content form").attr("id", "contact-us-form");
        $(".mobile-contact-us-view .call-us-block").html($(".contact-us-call-us-block").html());
        $(".mobile-contact-us-view .write-us-block").html($(".contact-us-write-us-block").html());
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          $(".contact-us-write-us-block").html('')
        }
  
        $(".mobile-view-bottom-info div.need-more-help-block").html($(".contact-us-form-right-bottom").html());
        $(".fl-check-empty .form-text").focusout(function () {
          $(this).addClass("border-color-ccc");
          $val_div = $(this).parents(".fl-check-empty").find(".fl-check-message");
          var name = $(this).val();
          $field_type = $(this).attr("type");
          if ($field_type == "email") {
            if (name.length > 0) {
              $val_div.addClass("fl-chk-ok");
            } else {
              $val_div.removeClass("fl-chk-ok");
            }
            if (validateEmail(name)) {
              $val_div.addClass("fl-chk-ok");
            } else {
              $val_div.removeClass("fl-chk-ok");
            }
          } else {
            if (name.length > 0) {
              $val_div.addClass("fl-chk-ok");
            } else {
              $val_div.removeClass("fl-chk-ok");
            }
          }
          return true;
        });
      }
    };
    //Flourish theme specific scripts
    Drupal.behaviors.flourishUtils = {
      attach: function (context, settings) {
        var secondItemLeft = $(".second-itemleft"),
          boxCImage = $(".box-c-image"),
          productOverviewImHolder = $(".prdct-overview .row-5 .img-holder"),
          nodeArticleHeroImage = $(".node-type-article .field-hero-image img"),
          nodeArticleAdvImage = $(".node-type-article #block-views-advisory-stubs-block .view-advisory-stubs .views-field-field-adv-image img"),
          nodeArticleIframe = $(".node-type-article iframe");
  
        //Media : video
        var $allVideos = $("iframe[src^='//www.youtube.com']");
        $allVideos.each(function () {
          if ($('body').hasClass('node-type-campaign-content') === false) {
            $(this)
              .data("aspectRatio", this.height / this.width)
              .removeAttr("height")
              .removeAttr("width");
          }
        });
  
        //Fix video heights
        $fluidEl = $(".field-article-body .field-items");
        if ($fluidEl.length > 0) {
          $(window).resize(function () {
            var newWidth = $fluidEl.width();
            $allVideos.each(function () {
              var $el = $(this);
              $el
                .width(newWidth)
                .height(newWidth * $el.data("aspectRatio"));
            });
          }).resize();
        }
  
        //Fix Video heights for campaign content
        var $fluidElCC = '';
        $fluidElCC = $(".node-type-campaign-content .campaign-content .field-items");
        if ($fluidElCC.length > 0) {
          $(window).resize(function () {
            var newWidthCC = $fluidElCC.width();
            $allVideos.each(function () {
              var $elCC = $(this);
              $elCC
                .width(newWidthCC)
                .height(newWidthCC * $elCC.data("aspectRatio"));
            });
          });
        }
  
        //MyAccount Read More
        $(".page-my-account .acc-form-main .form-item-privacy a").click(function () {
          $(".page-my-account .acc-form-main .form-item-privacy label").html(Drupal.settings.subscription_consent_expand);
        });
        //Site promo blocks
        if (secondItemLeft.children().length > 0) {
          secondItemLeft.removeClass("second-itemleft").addClass("second-itemleft-js");
        }
        if (boxCImage.children().length > 0) {
          boxCImage.removeClass("box-c-image").addClass("box-c-image-js");
        }
        if (productOverviewImHolder.children().length > 0) {
          productOverviewImHolder.removeClass("img-holder").addClass("img-holder-js");
        }
        //Color Detail page
        if ($("body.node-type-color").length) {
          var icon = $(".color-swatch div.scrap-book-add-color.desktop-icon.sprite-icon.header-fav").detach(),
            // Add JS to hide the label elements and change colour
            labels = $(".field-label"),
            icons = $("svg.fl-svg");
          $("h1.page-header div").prepend(icon);
          $.each(labels, function () {
            this.innerHTML = this.innerHTML.replace(":", "");
          });
          $.each(icons, function () {
            var colorRGB = $(this).parents("div.color-text").attr("data-rgb"),
              fillText = contrastingColor(colorRGB);
            $(this).css("fill", "#" + fillText);
          });
        }
  
        //Tips and advice detail page
        if ($(".node-type-article").length) {
          nodeArticleHeroImage.addClass("img-responsive").removeAttr("width height");
          nodeArticleAdvImage.removeAttr("width height");
        }
  
        if (nodeArticleIframe.length > 0) {
          nodeArticleIframe.parent("p").addClass("iframe-p-align-center");
        }
  
        //Campaign page
        $(".node-type-article h2").filter(function () {
          var emptyTag = $(this).html();
          if (emptyTag == "" || emptyTag == "&nbsp;")
            return true;
        }).remove();
  
        //Product detail Page Tabs
        $("#collapseOne,#collapseTwo,.collapse").collapse("hide");
  
        $("#ProductDescription .panel-heading").toggle(
          function () {
            $('html, body').animate({
              scrollTop: $("#ProductDescription").offset().top
            }, 200);
            if (typeof $(this).find(".pull-left").text() != "undefined" && $(this).find(".pull-left").text() != "") {
              analyticsEventCall("Product information", upperFirsctchar($(this).find(".pull-left").text().trim()), "Open", undefined, false);
            }
            $("svg.icon-open", this).hide();
            $("svg.icon-close", this).show();
            $(this).find(".accordion-lbl").css("color", "#2fc48d");
            $(this).css("border-bottom", "none");
            $(this).next(".panel-collapse").removeClass("collapse").addClass("in").css("height", "auto");
          },
          function () {
            $('html, body').animate({
              scrollTop: $("#ProductDescription").offset().top
            }, 200);
            $("svg.icon-open", this).show();
            $("svg.icon-close", this).hide();
            $(this).find(".accordion-lbl").css("color", "#666");
            $(this).css("border-bottom", "1px solid");
            $(this).next(".panel-collapse").removeClass("in").addClass("collapse").css("height", "0");
          });
  
        $("#ProductFeatures .panel-heading").toggle(
          function () {
            $('html, body').animate({
              scrollTop: $("#ProductFeatures").offset().top
            }, 200);
            if (typeof $(this).find(".pull-left").text() != "undefined" && $(this).find(".pull-left").text() != "") {
              analyticsEventCall("Product information", upperFirsctchar($(this).find(".pull-left").text().trim()), "Open", undefined, false);
            }
            $("svg.icon-open", this).hide();
            $("svg.icon-close", this).show();
            $(this).find(".accordion-lbl").css("color", "#2fc48d");
            $(this).css("border-bottom", "none");
            $(this).next(".panel-collapse").removeClass("collapse").addClass("in").css("height", "auto");
          },
          function () {
            $('html, body').animate({
              scrollTop: $("#ProductFeatures").offset().top
            }, 200);
            $("svg.icon-open", this).show();
            $("svg.icon-close", this).hide();
            $(this).find(".accordion-lbl").css("color", "#666");
            $(this).css("border-bottom", "1px solid");
            $(this).next(".panel-collapse").removeClass("in").addClass("collapse").css("height", "0");
          });
  
        $("#Documentation .panel-heading").toggle(
          function () {
            $('html, body').animate({
              scrollTop: $("#Documentation").offset().top
            }, 200);
            if (typeof $(this).find(".pull-left").text() != "undefined" && $(this).find(".pull-left").text() != "") {
              analyticsEventCall("Product information", upperFirsctchar($(this).find(".pull-left").text().trim()), "Open", undefined, false);
            }
            $("svg.icon-open", this).hide();
            $("svg.icon-close", this).show();
            $(this).find(".accordion-lbl").css("color", "#2fc48d");
            $(this).css("border-bottom", "none");
            $(this).next(".panel-collapse").removeClass("collapse").addClass("in").css("height", "auto");
          },
          function () {
            $('html, body').animate({
              scrollTop: $("#Documentation").offset().top
            }, 200);
            $("svg.icon-open", this).show();
            $("svg.icon-close", this).hide();
            $(this).find(".accordion-lbl").css("color", "#666");
            $(this).css("border-bottom", "1px solid");
            $(this).next(".panel-collapse").removeClass("in").addClass("collapse").css("height", "0");
          });
  
        $("#tips-advice .panel-heading").toggle(
          function () {
            $('html, body').animate({
              scrollTop: $("#tips-advice").offset().top
            }, 200);
            if (typeof $(this).find(".pull-left").text() != "undefined" && $(this).find(".pull-left").text() != "") {
              analyticsEventCall("Product information", upperFirsctchar($(this).find(".pull-left").text().trim()), "Open", undefined, false);
            }
            $("svg.icon-open", this).hide();
            $("svg.icon-close", this).show();
            $(this).find(".accordion-lbl").css("color", "#2fc48d");
            $(this).css("border-bottom", "none");
            $(this).next(".panel-collapse").removeClass("collapse").addClass("in").css("height", "auto");
          },
          function () {
            $('html, body').animate({
              scrollTop: $("#tips-advice").offset().top
            }, 200);
            $("svg.icon-open", this).show();
            $("svg.icon-close", this).hide();
            $(this).find(".accordion-lbl").css("color", "#666");
            $(this).css("border-bottom", "1px solid");
            $(this).next(".panel-collapse").removeClass("in").addClass("collapse").css("height", "0");
          });
  
        $("#flourish-product-listing-filters-form .ui-dropdownchecklist-selector .ui-dropdownchecklist-text").hide();
        if ($(window).width() >= 992) {
          $("#sidebar").remove();
          $("select,textarea,radio,checkbox,input,a,.header-search,.color-box,button,.icon-scrap-book,.tab-link").attr("tabindex", function (index, attr) {
            return index + 1;
          });
          $(".brand-bar__language-link,.logo img,iframe,.modal,.search-top-center a,.search-top-center input,.visible-xs-block a,.dropdown-menu a,.visible-xs a,.front .zone-filter a,.visible-xs-block,.visible-xs,#main-content,#topContent").removeAttr("tabindex")
  
        }
  
      }
    };
  }(jQuery));; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-media.js
   * @desc Responsive media & browser width related code
   * - Bind onResize events
   **/
  (function ($) {
    var windowSelector = $(window);
    Drupal.flourishMedia = {};
    Drupal.flourishMedia.onResize = function () {
      var navTabs = $(".nav-tabs"),
        footerH2MenuToggle = $(".footer .region-footer section#block-menu-menu-dulux h2"),
        footerH2OtherToggle = $(".footer .region-footer section#block-menu-menu-other-dulux h2"),
        footerH2AccessToggle = $(".footer .region-footer section#block-menu-menu-access h2"),
        footerLiMenuDulux = $(".footer .region-footer section#block-menu-menu-dulux ul li"),
        footerLiOtherDulux = $(".footer .region-footer section#block-menu-menu-other-dulux ul li"),
        footerLiaccessDulux = $(".footer .region-footer section#block-menu-menu-access ul li");
      $(".footer .region-footer section h2").once("flFooterClick").on("click", function () {
        if (windowSelector.width() <= 767) {
          if ($(this).hasClass("footer-menu-expanded")) {
            $(this).removeClass("footer-menu-expanded");
          } else {
            $(this).addClass("footer-menu-expanded");
          }
        }
      });
  
      if (windowSelector.width() <= 767) {
        footerH2MenuToggle.toggle(
          function () {
            footerLiMenuDulux.show();
            footerH2MenuToggle.addClass("footer-menu-expanded");
            $(".footer .region-footer section#block-menu-menu-other-dulux h2, .footer .region-footer section#block-menu-menu-access h2").removeClass("footer-menu-expanded");
            footerLiOtherDulux.hide();
            footerLiaccessDulux.hide();
          },
          function () {
            footerLiMenuDulux.hide();
            footerH2MenuToggle.removeClass("footer-menu-expanded");
          });
        footerH2OtherToggle.toggle(
          function () {
            footerLiOtherDulux.show();
            footerH2OtherToggle.addClass("footer-menu-expanded");
            $(".footer .region-footer section#block-menu-menu-dulux h2, .footer .region-footer section#block-menu-menu-access h2").removeClass("footer-menu-expanded");
            footerLiMenuDulux.hide();
            footerLiaccessDulux.hide();
          },
          function () {
            footerLiOtherDulux.hide();
            footerH2OtherToggle.removeClass("footer-menu-expanded");
          });
        footerH2AccessToggle.toggle(
          function () {
            footerLiaccessDulux.show();
            footerH2AccessToggle.addClass("footer-menu-expanded");
            $(".footer .region-footer section#block-menu-menu-dulux h2, .footer .region-footer section#block-menu-menu-other-dulux h2").removeClass("footer-menu-expanded");
            footerLiMenuDulux.hide();
            footerLiOtherDulux.hide();
          },
          function () {
            footerLiaccessDulux.hide();
            footerH2AccessToggle.removeClass("footer-menu-expanded");
          });
      }
      //Mobile Social media icon position
      if (windowSelector.width() <= 766) {
        var showText = Drupal.t("More results");
        $("ul.pagination li.next.last a").text(showText);
      }
  
      //Product listing available colours
      if ($(window).width() <= 767) {
        if ($(".view-product-Listing .product-bar-inner h2").height() > 61) {
          $(".view-product-Listing  .view-content").addClass("available_link_3");
        } else if ($(".view-product-Listing .product-bar-inner h2").height() > 31) {
          $(".view-product-Listing  .view-content").addClass("available_link_2");
        }
      }
  
      //Product listing available colours
      if (windowSelector.width() <= 767 && $(".view-product-Listing .product-bar-inner h2").height() > 30) {
        $(".view-product-Listing  .view-content").addClass("product-Listing-content-position");
      }
  
      //Login-register overlay
      if (windowSelector.width() > 767) {
        $(".ctools-use-modal").click(function () {
          $(".ctools-modal-content").parent().addClass("ctools-overlay");
        });
      }
  
      //Store finder - Show More
      if (windowSelector.width() <= 767) {
        $(".locationContent .fdrcw .s-hdlne .store-name").click(function () {
          $(".lm-odiv .ld-mre").addClass("sm-btn-hide");
        });
        $(".store-list-back .larrbck").click(function () {
          $(".lm-odiv .ld-mre").removeClass("sm-btn-hide");
        });
      }
    };
  
    //Responsive media behaviour
    Drupal.behaviors.flourishMediaEvents = {
      attach: function (context, settings) {
        Drupal.flourishMedia.onResize();
        windowSelector.resize(function () {
          Drupal.flourishMedia.onResize();
        });
      }
    };
  }(jQuery));; /*})'"*/ ; /*})'"*/
  /*!
   * UAParser.js v0.7.18
   * Lightweight JavaScript-based User-Agent string parser
   * https://github.com/faisalman/ua-parser-js
   *
   * Copyright Â© 2012-2016 Faisal Salman <fyzlman@gmail.com>
   * Dual licensed under GPLv2 or MIT
   */
  
  ! function (r, u) {
    "use strict";
    var c = "function",
      i = "undefined",
      m = "object",
      s = "model",
      e = "name",
      o = "type",
      n = "vendor",
      a = "version",
      d = "architecture",
      t = "console",
      l = "mobile",
      w = "tablet",
      b = "smarttv",
      p = "wearable",
      g = {
        extend: function (i, s) {
          var e = {};
          for (var o in i) s[o] && s[o].length % 2 == 0 ? e[o] = s[o].concat(i[o]) : e[o] = i[o];
          return e
        },
        has: function (i, s) {
          return "string" == typeof i && -1 !== s.toLowerCase().indexOf(i.toLowerCase())
        },
        lowerize: function (i) {
          return i.toLowerCase()
        },
        major: function (i) {
          return "string" == typeof i ? i.replace(/[^\d\.]/g, "").split(".")[0] : u
        },
        trim: function (i) {
          return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
      },
      f = {
        rgx: function (i, s) {
          for (var e, o, r, n, a, d, t = 0; t < s.length && !a;) {
            var l = s[t],
              w = s[t + 1];
            for (e = o = 0; e < l.length && !a;)
              if (a = l[e++].exec(i))
                for (r = 0; r < w.length; r++) d = a[++o], typeof (n = w[r]) === m && 0 < n.length ? 2 == n.length ? typeof n[1] == c ? this[n[0]] = n[1].call(this, d) : this[n[0]] = n[1] : 3 == n.length ? typeof n[1] !== c || n[1].exec && n[1].test ? this[n[0]] = d ? d.replace(n[1], n[2]) : u : this[n[0]] = d ? n[1].call(this, d, n[2]) : u : 4 == n.length && (this[n[0]] = d ? n[3].call(this, d.replace(n[1], n[2])) : u) : this[n] = d || u;
            t += 2
          }
        },
        str: function (i, s) {
          for (var e in s)
            if (typeof s[e] === m && 0 < s[e].length) {
              for (var o = 0; o < s[e].length; o++)
                if (g.has(s[e][o], i)) return "?" === e ? u : e
            } else if (g.has(s[e], i)) return "?" === e ? u : e;
          return i
        }
      },
      h = {
        browser: {
          oldsafari: {
            version: {
              "1.0": "/8",
              1.2: "/1",
              1.3: "/3",
              "2.0": "/412",
              "2.0.2": "/416",
              "2.0.3": "/417",
              "2.0.4": "/419",
              "?": "/"
            }
          }
        },
        device: {
          amazon: {
            model: {
              "Fire Phone": ["SD", "KF"]
            }
          },
          sprint: {
            model: {
              "Evo Shift 4G": "7373KT"
            },
            vendor: {
              HTC: "APA",
              Sprint: "Sprint"
            }
          }
        },
        os: {
          windows: {
            version: {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            }
          }
        }
      },
      v = {
        browser: [
          [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
          [e, a],
          [/(opios)[\/\s]+([\w\.]+)/i],
          [
            [e, "Opera Mini"], a
          ],
          [/\s(opr)\/([\w\.]+)/i],
          [
            [e, "Opera"], a
          ],
          [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
          [e, a],
          [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
          [
            [e, "IE"], a
          ],
          [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
          [
            [e, "Edge"], a
          ],
          [/(yabrowser)\/([\w\.]+)/i],
          [
            [e, "Yandex"], a
          ],
          [/(puffin)\/([\w\.]+)/i],
          [
            [e, "Puffin"], a
          ],
          [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
          [
            [e, "UCBrowser"], a
          ],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [
            [e, /_/g, " "], a
          ],
          [/(micromessenger)\/([\w\.]+)/i],
          [
            [e, "WeChat"], a
          ],
          [/(qqbrowserlite)\/([\w\.]+)/i],
          [e, a],
          [/(QQ)\/([\d\.]+)/i],
          [e, a],
          [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
          [e, a],
          [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
          [e, a],
          [/(2345Explorer)[\/\s]?([\w\.]+)/i],
          [e, a],
          [/(MetaSr)[\/\s]?([\w\.]+)/i],
          [e],
          [/(LBBROWSER)/i],
          [e],
          [/xiaomi\/miuibrowser\/([\w\.]+)/i],
          [a, [e, "MIUI Browser"]],
          [/;fbav\/([\w\.]+);/i],
          [a, [e, "Facebook"]],
          [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
          [e, a],
          [/headlesschrome(?:\/([\w\.]+)|\s)/i],
          [a, [e, "Chrome Headless"]],
          [/\swv\).+(chrome)\/([\w\.]+)/i],
          [
            [e, /(.+)/, "$1 WebView"], a
          ],
          [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
          [
            [e, /(.+(?:g|us))(.+)/, "$1 $2"], a
          ],
          [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
          [a, [e, "Android Browser"]],
          [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
          [e, a],
          [/(dolfin)\/([\w\.]+)/i],
          [
            [e, "Dolphin"], a
          ],
          [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
          [
            [e, "Chrome"], a
          ],
          [/(coast)\/([\w\.]+)/i],
          [
            [e, "Opera Coast"], a
          ],
          [/fxios\/([\w\.-]+)/i],
          [a, [e, "Firefox"]],
          [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
          [a, [e, "Mobile Safari"]],
          [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
          [a, e],
          [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
          [
            [e, "GSA"], a
          ],
          [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
          [e, [a, f.str, h.browser.oldsafari.version]],
          [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
          [e, a],
          [/(navigator|netscape)\/([\w\.-]+)/i],
          [
            [e, "Netscape"], a
          ],
          [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
          [e, a]
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
          [
            [d, "amd64"]
          ],
          [/(ia32(?=;))/i],
          [
            [d, g.lowerize]
          ],
          [/((?:i[346]|x)86)[;\)]/i],
          [
            [d, "ia32"]
          ],
          [/windows\s(ce|mobile);\sppc;/i],
          [
            [d, "arm"]
          ],
          [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
          [
            [d, /ower/, "", g.lowerize]
          ],
          [/(sun4\w)[;\)]/i],
          [
            [d, "sparc"]
          ],
          [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
          [
            [d, g.lowerize]
          ]
        ],
        device: [
          [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
          [s, n, [o, w]],
          [/applecoremedia\/[\w\.]+ \((ipad)/],
          [s, [n, "Apple"],
            [o, w]
          ],
          [/(apple\s{0,1}tv)/i],
          [
            [s, "Apple TV"],
            [n, "Apple"]
          ],
          [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
          [n, s, [o, w]],
          [/(kf[A-z]+)\sbuild\/.+silk\//i],
          [s, [n, "Amazon"],
            [o, w]
          ],
          [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
          [
            [s, f.str, h.device.amazon.model],
            [n, "Amazon"],
            [o, l]
          ],
          [/android.+aft([bms])\sbuild/i],
          [s, [n, "Amazon"],
            [o, b]
          ],
          [/\((ip[honed|\s\w*]+);.+(apple)/i],
          [s, n, [o, l]],
          [/\((ip[honed|\s\w*]+);/i],
          [s, [n, "Apple"],
            [o, l]
          ],
          [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
          [n, s, [o, l]],
          [/\(bb10;\s(\w+)/i],
          [s, [n, "BlackBerry"],
            [o, l]
          ],
          [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
          [s, [n, "Asus"],
            [o, w]
          ],
          [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
          [
            [n, "Sony"],
            [s, "Xperia Tablet"],
            [o, w]
          ],
          [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
          [s, [n, "Sony"],
            [o, l]
          ],
          [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
          [n, s, [o, t]],
          [/android.+;\s(shield)\sbuild/i],
          [s, [n, "Nvidia"],
            [o, t]
          ],
          [/(playstation\s[34portablevi]+)/i],
          [s, [n, "Sony"],
            [o, t]
          ],
          [/(sprint\s(\w+))/i],
          [
            [n, f.str, h.device.sprint.vendor],
            [s, f.str, h.device.sprint.model],
            [o, l]
          ],
          [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
          [n, s, [o, w]],
          [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
          [n, [s, /_/g, " "],
            [o, l]
          ],
          [/(nexus\s9)/i],
          [s, [n, "HTC"],
            [o, w]
          ],
          [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
          [s, [n, "Huawei"],
            [o, l]
          ],
          [/(microsoft);\s(lumia[\s\w]+)/i],
          [n, s, [o, l]],
          [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
          [s, [n, "Microsoft"],
            [o, t]
          ],
          [/(kin\.[onetw]{3})/i],
          [
            [s, /\./g, " "],
            [n, "Microsoft"],
            [o, l]
          ],
          [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
          [s, [n, "Motorola"],
            [o, l]
          ],
          [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
          [s, [n, "Motorola"],
            [o, w]
          ],
          [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
          [
            [n, g.trim],
            [s, g.trim],
            [o, b]
          ],
          [/hbbtv.+maple;(\d+)/i],
          [
            [s, /^/, "SmartTV"],
            [n, "Samsung"],
            [o, b]
          ],
          [/\(dtv[\);].+(aquos)/i],
          [s, [n, "Sharp"],
            [o, b]
          ],
          [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
          [
            [n, "Samsung"], s, [o, w]
          ],
          [/smart-tv.+(samsung)/i],
          [n, [o, b], s],
          [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
          [
            [n, "Samsung"], s, [o, l]
          ],
          [/sie-(\w*)/i],
          [s, [n, "Siemens"],
            [o, l]
          ],
          [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
          [
            [n, "Nokia"], s, [o, l]
          ],
          [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
          [s, [n, "Acer"],
            [o, w]
          ],
          [/android.+([vl]k\-?\d{3})\s+build/i],
          [s, [n, "LG"],
            [o, w]
          ],
          [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
          [
            [n, "LG"], s, [o, w]
          ],
          [/(lg) netcast\.tv/i],
          [n, s, [o, b]],
          [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
          [s, [n, "LG"],
            [o, l]
          ],
          [/android.+(ideatab[a-z0-9\-\s]+)/i],
          [s, [n, "Lenovo"],
            [o, w]
          ],
          [/linux;.+((jolla));/i],
          [n, s, [o, l]],
          [/((pebble))app\/[\d\.]+\s/i],
          [n, s, [o, p]],
          [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
          [n, s, [o, l]],
          [/crkey/i],
          [
            [s, "Chromecast"],
            [n, "Google"]
          ],
          [/android.+;\s(glass)\s\d/i],
          [s, [n, "Google"],
            [o, p]
          ],
          [/android.+;\s(pixel c)\s/i],
          [s, [n, "Google"],
            [o, w]
          ],
          [/android.+;\s(pixel [xl2]{1,2}|pixel)\s/i],
          [s, [n, "Google"],
            [o, l]
          ],
          [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
          [
            [s, /_/g, " "],
            [n, "Xiaomi"],
            [o, l]
          ],
          [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
          [
            [s, /_/g, " "],
            [n, "Xiaomi"],
            [o, w]
          ],
          [/android.+;\s(m[1-5]\snote)\sbuild/i],
          [s, [n, "Meizu"],
            [o, w]
          ],
          [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
          [s, [n, "OnePlus"],
            [o, l]
          ],
          [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
          [s, [n, "RCA"],
            [o, w]
          ],
          [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
          [s, [n, "Dell"],
            [o, w]
          ],
          [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
          [s, [n, "Verizon"],
            [o, w]
          ],
          [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
          [
            [n, "Barnes & Noble"], s, [o, w]
          ],
          [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
          [s, [n, "NuVision"],
            [o, w]
          ],
          [/android.+;\s(k88)\sbuild/i],
          [s, [n, "ZTE"],
            [o, w]
          ],
          [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
          [s, [n, "Swiss"],
            [o, l]
          ],
          [/android.+[;\/]\s*(zur\d{3})\s+build/i],
          [s, [n, "Swiss"],
            [o, w]
          ],
          [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
          [s, [n, "Zeki"],
            [o, w]
          ],
          [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
          [
            [n, "Dragon Touch"], s, [o, w]
          ],
          [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
          [s, [n, "Insignia"],
            [o, w]
          ],
          [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
          [s, [n, "NextBook"],
            [o, w]
          ],
          [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
          [
            [n, "Voice"], s, [o, l]
          ],
          [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
          [
            [n, "LvTel"], s, [o, l]
          ],
          [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
          [s, [n, "Envizen"],
            [o, w]
          ],
          [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
          [n, s, [o, w]],
          [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
          [s, [n, "MachSpeed"],
            [o, w]
          ],
          [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
          [n, s, [o, w]],
          [/android.+[;\/]\s*TU_(1491)\s+build/i],
          [s, [n, "Rotor"],
            [o, w]
          ],
          [/android.+(KS(.+))\s+build/i],
          [s, [n, "Amazon"],
            [o, w]
          ],
          [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
          [n, s, [o, w]],
          [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
          [
            [o, g.lowerize], n, s
          ],
          [/(android[\w\.\s\-]{0,9});.+build/i],
          [s, [n, "Generic"]]
        ],
        engine: [
          [/windows.+\sedge\/([\w\.]+)/i],
          [a, [e, "EdgeHTML"]],
          [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
          [e, a],
          [/rv\:([\w\.]{1,9}).+(gecko)/i],
          [a, e]
        ],
        os: [
          [/microsoft\s(windows)\s(vista|xp)/i],
          [e, a],
          [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
          [e, [a, f.str, h.os.windows.version]],
          [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
          [
            [e, "Windows"],
            [a, f.str, h.os.windows.version]
          ],
          [/\((bb)(10);/i],
          [
            [e, "BlackBerry"], a
          ],
          [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
          [e, a],
          [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
          [
            [e, "Symbian"], a
          ],
          [/\((series40);/i],
          [e],
          [/mozilla.+\(mobile;.+gecko.+firefox/i],
          [
            [e, "Firefox OS"], a
          ],
          [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
          [e, a],
          [/(cros)\s[\w]+\s([\w\.]+\w)/i],
          [
            [e, "Chromium OS"], a
          ],
          [/(sunos)\s?([\w\.\d]*)/i],
          [
            [e, "Solaris"], a
          ],
          [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
          [e, a],
          [/(haiku)\s(\w+)/i],
          [e, a],
          [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
          [
            [a, /_/g, "."],
            [e, "iOS"]
          ],
          [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
          [
            [e, "Mac OS"],
            [a, /_/g, "."]
          ],
          [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
          [e, a]
        ]
      },
      x = function (i, s) {
        if ("object" == typeof i && (s = i, i = u), !(this instanceof x)) return new x(i, s).getResult();
        var e = i || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
          o = s ? g.extend(v, s) : v;
        return this.getBrowser = function () {
          var i = {
            name: u,
            version: u
          };
          return f.rgx.call(i, e, o.browser), i.major = g.major(i.version), i
        }, this.getCPU = function () {
          var i = {
            architecture: u
          };
          return f.rgx.call(i, e, o.cpu), i
        }, this.getDevice = function () {
          var i = {
            vendor: u,
            model: u,
            type: u
          };
          return f.rgx.call(i, e, o.device), i
        }, this.getEngine = function () {
          var i = {
            name: u,
            version: u
          };
          return f.rgx.call(i, e, o.engine), i
        }, this.getOS = function () {
          var i = {
            name: u,
            version: u
          };
          return f.rgx.call(i, e, o.os), i
        }, this.getResult = function () {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          }
        }, this.getUA = function () {
          return e
        }, this.setUA = function (i) {
          return e = i, this
        }, this
      };
    x.VERSION = "0.7.18", x.BROWSER = {
      NAME: e,
      MAJOR: "major",
      VERSION: a
    }, x.CPU = {
      ARCHITECTURE: d
    }, x.DEVICE = {
      MODEL: s,
      VENDOR: n,
      TYPE: o,
      CONSOLE: t,
      MOBILE: l,
      SMARTTV: b,
      TABLET: w,
      WEARABLE: p,
      EMBEDDED: "embedded"
    }, x.ENGINE = {
      NAME: e,
      VERSION: a
    }, x.OS = {
      NAME: e,
      VERSION: a
    }, typeof exports !== i ? (typeof module !== i && module.exports && (exports = module.exports = x), exports.UAParser = x) : typeof define === c && define.amd ? define(function () {
      return x
    }) : r && (r.UAParser = x);
    var k = r && (r.jQuery || r.Zepto);
    if (typeof k !== i && !k.ua) {
      var y = new x;
      k.ua = y.getResult(), k.ua.get = function () {
        return y.getUA()
      }, k.ua.set = function (i) {
        y.setUA(i);
        var s = y.getResult();
        for (var e in s) k.ua[e] = s[e]
      }
    }
  }("object" == typeof window ? window : this);; /*})'"*/ ; /*})'"*/
  /*!
   * OneDomain components - userAgentToClass - START
   */
  
  var userAgentToClass = function ($) {
    "use strict";
  
    var parser = new UAParser();
    var browser = $.ua.browser.name;
    var browser_version = $.ua.browser.major;
    var os = $.ua.os.name;
    var device = $.ua.device;
    var model = $.ua.device.model;
  
    function addBodyClasses() {
  
      // Custom conditions to verify and than add to body class
      if (browser == 'Mobile Safari' || browser == 'Safari') $('body').addClass('browser--safari');
  
      if (browser == 'IE') {
        $('body').addClass('IE IE--' + browser_version.toString());
      }
  
      if (browser == 'Edge') {
        $('body').addClass('Edge Edge--' + browser_version.toString());
      }
  
      if (os == 'iOS') $('body').addClass('os--ios');
      if (os == 'Android') $('body').addClass('os--android');
  
      //set global
      window.os = os;
  
      if (model == 'iPhone') $('body').addClass('model--iphone');
    }
  
    function hideSpecificElements() {
  
      if (os == 'iOS') $('.hide-on-ios').hide();
  
      if (os == 'Android') $('.hide-on-android').hide();
    }
  
    return {
      init: function init() {
        addBodyClasses();
        hideSpecificElements();
      }
    };
  }(jQuery);
  
  jQuery(function () {
    userAgentToClass.init();
  });
  
  /*!
   * OneDomain components - userAgentToClass - END
   */
  ; /*})'"*/ ; /*})'"*/
  /**
   * @file
   *
   * Overrides for ctools modal.
   *
   */
  
  (function ($) {
    /**
     * Override CTools modal show function so it can recognize the Bootstrap modal classes correctly
     */
    Drupal.CTools.Modal.show = function (choice) {
      var opts = {};
  
      if (choice && typeof choice == 'string' && Drupal.settings[choice]) {
        // This notation guarantees we are actually copying it.
        $.extend(true, opts, Drupal.settings[choice]);
      } else if (choice) {
        $.extend(true, opts, choice);
      }
  
      var defaults = {
        modalTheme: 'CToolsModalDialog',
        throbberTheme: 'CToolsModalThrobber',
        animation: 'show',
        animationSpeed: 'fast',
        modalSize: {
          type: 'scale',
          width: .8,
          height: .8,
          addWidth: 0,
          addHeight: 0,
          // How much to remove from the inner content to make space for the
          // theming.
          contentRight: 25,
          contentBottom: 45
        },
        modalOptions: {
          opacity: .55,
          background: '#fff'
        }
      };
  
      var settings = {};
      $.extend(true, settings, defaults, Drupal.settings.CToolsModal, opts);
  
      if (Drupal.CTools.Modal.currentSettings && Drupal.CTools.Modal.currentSettings != settings) {
        Drupal.CTools.Modal.modal.remove();
        Drupal.CTools.Modal.modal = null;
      }
  
      Drupal.CTools.Modal.currentSettings = settings;
  
      var resize = function (e) {
        // When creating the modal, it actually exists only in a theoretical
        // place that is not in the DOM. But once the modal exists, it is in the
        // DOM so the context must be set appropriately.
        var context = e ? document : Drupal.CTools.Modal.modal;
  
        if (Drupal.CTools.Modal.currentSettings.modalSize.type == 'scale') {
          var width = $(window).width() * Drupal.CTools.Modal.currentSettings.modalSize.width;
          var height = $(window).height() * Drupal.CTools.Modal.currentSettings.modalSize.height;
        } else {
          var width = Drupal.CTools.Modal.currentSettings.modalSize.width;
          var height = Drupal.CTools.Modal.currentSettings.modalSize.height;
        }
  
        // Use the additionol pixels for creating the width and height.
        $('div.ctools-modal-dialog', context).css({
          'width': width + Drupal.CTools.Modal.currentSettings.modalSize.addWidth + 'px',
          'height': height + Drupal.CTools.Modal.currentSettings.modalSize.addHeight + 'px'
        });
        $('div.ctools-modal-dialog .modal-body', context).css({
          'width': (width - Drupal.CTools.Modal.currentSettings.modalSize.contentRight) + 'px',
          'height': (height - Drupal.CTools.Modal.currentSettings.modalSize.contentBottom) + 'px'
        });
      }
  
      if (!Drupal.CTools.Modal.modal) {
        Drupal.CTools.Modal.modal = $(Drupal.theme(settings.modalTheme));
        if (settings.modalSize.type == 'scale') {
          $(window).bind('resize', resize);
        }
      }
  
      resize();
  
      $('.modal-title', Drupal.CTools.Modal.modal).html(Drupal.CTools.Modal.currentSettings.loadingText);
      Drupal.CTools.Modal.modalContent(Drupal.CTools.Modal.modal, settings.modalOptions, settings.animation, settings.animationSpeed);
      $('#modalContent .modal-body').html(Drupal.theme(settings.throbberTheme));
    };
  
    /**
     * Provide the HTML to create the modal dialog in the Bootstrap style.
     */
    Drupal.theme.prototype.CToolsModalDialog = function () {
      var html = ''
      html += '  <div id="ctools-modal">'
      html += '    <div class="ctools-modal-dialog">'
      html += '      <div class="modal-content">'
      html += '        <div class="modal-header">';
      html += '          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
      html += '          <h4 id="modal-title" class="modal-title">&nbsp;</h4>';
      html += '        </div>';
      html += '        <div id="modal-content" class="modal-body">';
      html += '        </div>';
      html += '      </div>';
      html += '    </div>';
      html += '  </div>';
  
      return html;
    }
  
    /**
     * Provide the HTML to create a nice looking loading progress bar.
     */
    Drupal.theme.prototype.CToolsModalThrobber = function () {
      var html = '';
      html += '  <div class="loading-spinner" style="width: 200px; margin: -20px 0 0 -100px; position: absolute; top: 45%; left: 50%">';
      html += '    <div class="progress progress-striped active">';
      html += '      <div class="progress-bar" style="width: 100%;"></div>';
      html += '    </div>';
      html += '  </div>';
  
      return html;
    };
  
  
  })(jQuery);; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-scripts.js
   * @desc necessary scripts for theme
   **/
  (function ($) {
    //Flourish theme specific scripts
    Drupal.behaviors.flourishScripts = {
      attach: function (context, settings) {
        //Make Views page blocks of equal height.
        $(".products-overview h1.page-header div:empty").parent().hide();
        //Adjust H3 titles
        $(".view-product-Listing .view-content .views-row .phdn").matchHeight();
        //Adjust product description
        $(".view-product-Listing .sdes").matchHeight();
        $(".campaign-color-collection-block .campaign-equi-height").matchHeight();
        //Adjust product features
        $(".view-product-Listing .view-content .views-row .pfeatures").matchHeight();
        $(".view-product-Listing .view-content .views-row").matchHeight();
        //Color collections page
        $(".node-color-collection .group-hero-area-desc,.node-color-collection .group-hero-area-image").matchHeight();
        //Inder: Can we apply after keeping boxes in a single wrapper .. may be grid?
        //Product overview page fixes
        $(".fl-product-overview .prdct-overview .row-3 .cstm-col-md-4").matchHeight();
        $(".prdct-overview .product-overview-right,.prdct-overview  .product-overview-left").matchHeight();
        //Toggle preview & swatch for mobile
        Drupal.theme.svgReplace(".color-share .addthis_button img", "icon-share");
        Drupal.theme.svgAppend(".color-email .addthis_button_email", "icon-email-item");
        //Icomoon SVG replace
        Drupal.theme.icoSvgReplace(".pinterest a img", "icon-pinterest");
        //Drupal.theme.icoSvgReplace(".instagram a img", "icon-instagram");
        //Tips and Advice detail Page
        Drupal.theme.svgReplace(".article-share .addthis_button img", "icon-share");
        $(".prdct-overview .cstm-col-md-4").once("flourishProducts").on("click", function () {
          window.location.href = "/" + $(this).find("a").attr("href");
        });
        $(".page-scrapbook .paint-box-holder.right-border ,.page-scrapbook .no-color-selected-blk.left-border.hidden-xs").matchHeight();
        $(".page-scrapbook .view-display-id-block_3 .img-hldr,.page-scrapbook .view-display-id-block_3 .text-hldr").matchHeight();
        $(".views-search-page .view-search-color-articles .views-field").matchHeight();
        $(".views-search-page .view-search-color-articles .views-row").matchHeight();
        $(".views-search-page .view-search-color-products .views-row").matchHeight();
        //scrapbook page
        $(".yes-color-selected-blk, .paint-box-holder").matchHeight();
        //Advisory-stubs
        $(".view-advisory-stubs .views-row").matchHeight();
        //Promo-blocks
        $(".pane-bean-office-colours-yellow img, .second-itemright").matchHeight();
        //Planet possible embed blocks
        $(".embed .art-article").matchHeight();
        //Product listing page image
        $(".page-products-listing .prd-image img").matchHeight();
        //Expert help and Ideas page
        $(".s-hdlne").matchHeight();
        $(".page-tips-and-advice .first-block, .page-tips-and-advice .views-row .rowss").matchHeight();
        $('.colors-ready-to-buy, .colors-ready-to-mix').matchHeight();
        // Lets color page - Squircle cards.
        $(".node-type-lets-color-article .squircle-card__content").matchHeight();
        $(".node-type-lets-color-article .squircle-card").matchHeight();
        $(".node-type-lets-color-article .counter-top").matchHeight();
        $(".node-type-lets-color-article .counter-top__img").matchHeight();
        $(".node-type-lets-color-article .counter-bottom").matchHeight();
        // Entry blocks on home page.
        $(".entry-point .entry-content").matchHeight({
          byRow: false
        });
  
        $(".flsticky.product-bar-fixed").affix({
          offset: {
            top: function () {
              return (this.top = $(".zone-filter").outerHeight(true) + $("#navbar").outerHeight(true) + 65);
            }
          }
        });
        $(".fl-sticky-affix").affix({
          offset: {
            top: 0
          }
        });
  
        //home page promo blocks
        $(".front .pane-content .image-right.col-md-8").addClass("col-md-7").removeClass("col-md-8");
        $(".front .pane-content .image-right.col-md-push-4").addClass("col-md-push-5").removeClass("col-md-push-4");
  
        $(".front .pane-content .content-left.col-md-4").addClass("col-md-5").removeClass("col-md-4");
        $(".front .pane-content .content-left.col-md-pull-8").addClass("col-md-pull-7").removeClass("col-md-pull-8");
  
        $(".front .pane-content .image-left.col-md-8").addClass("col-md-7").removeClass("col-md-8");
  
        $(".front .pane-content .content-right.col-md-4").addClass("col-md-5").removeClass("col-md-4");
  
        // Remove focus border on clickable elements.
        $("body").on("mousedown", "*", function (e) {
          $(this).addClass("focus-outline");
          if ($(this).hasClass("focus-outline")) {
            $(this).on("blur", function () {
              $(this).off("blur").removeClass("focus-outline");
            });
          }
        });
  
        // Wrap footer elements to content width.		
        $('.region-footer > section:gt(0)').wrapAll('<div class="fl-content-width"></div>');
  
      }
    };
  
  }(jQuery));; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-login-register.js
   * @desc necessary scripts for login and registration flow.
   **/
  (function ($) {
  
    // My account nav details.
    myAccount_nav_details();
  
    $(document).ajaxSuccess(function () {
      if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {
        var consent_popup_form = $.cookie('consent_popup_form');
  
        if (typeof consent_popup_form != 'undefined' && consent_popup_form == 'YES') {
          $('.consent_popup_link a').trigger('click');
        }
  
        var consent_popup_social = $.cookie('consent_popup_social');
        if (typeof consent_popup_social != 'undefined' && consent_popup_social == 1) {
          $('.consent_popup_social_link a').trigger('click');
        }
  
        var gigya_no_mail = $.cookie('gigya_no_mail');
        if (typeof gigya_no_mail != 'undefined' && gigya_no_mail == 1) {
          var url = Drupal.settings.basePath + 'modal_forms/nojs/register';
          var link = $("<a></a>").attr('href', url).addClass('ctools-use-modal ctools-modal-modal-popup-small').click(Drupal.CTools.Modal.clickAjaxLink);
          setTimeout(function () {
            $.fn.triggerRegisterPopup(url, link);
          }, 100);
        }
      }
  
  
      //Checking email already registered
      var email_already_exits = $.cookie('email_already_exits');
      if (email_already_exits == 1) {
        var triggerLogin = "onclick='triggerLogin();'";
        var tgrLoginbtn = '';
        var hreflink = '';
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == true) {
          $('.fl-consent-popup .alert-block').css('display', 'none');
          hreflink = 'href="user/login"';
          triggerLogin = '';
          tgrLoginbtn = "onclick='tgrLoginbtn();'";
  
  
        }
        $('#termsEmail .form-group').replaceWith("<div class='.form-group email_already_exits'></div>");
        var usr_email = $("input[name='mail']").val();
        $('.email_already_exits:first').html('<div align="center">' + Drupal.t(usr_email + ' already registered. Please login <a ' + triggerLogin + '   ' + hreflink + '>here</a><div></br>'));
        $('#termsEmail button').replaceWith("<a " + tgrLoginbtn + " " + triggerLogin + " " + hreflink + "><button type='submit' class='bttn primary full-width'>" + Drupal.t('Back to login') + "</button></a>");
        return false;
      }
  
      var err_status = $.cookie('err_status');
      if (err_status == 1) {
        $('#modal-content .alert-block').css('display', 'none');
        $('#loginModal .user_lgn_frm .form-type-textfield').addClass('has-error');
        $('#loginModal .user_lgn_frm .help-block-name .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.login_invalid_email_or_password) + '</li>');
        return false;
      }
  
    });
  
    Drupal.behaviors.flourishLoginRegister = {
      attach: function (context, settings) {
  
        $('.consent_popup_link').css('display', 'none');
        $('.consent_popup_social_link').css('display', 'none');
        // Login-Register password validation.
        $("body").on("keyup", "#registerModal .user_regn_frm .form-item-pass input", function (e) {
          validate($(this).val());
        });
  
        // Toggle password view and hide.
        $(".js-show-password").unbind("click");
        $(".js-show-password").on("click", togglePassword);
  
        var forgot_password_cntr = '#modal-content';
        var login_container = '#modal-content';
        var regn_container = '#modal-content';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          forgot_password_cntr = '#forgotPassword';
          login_container = '#loginModal';
          regn_container = '#registerModal';
        }
  
        // Registration form validation.
        $("body").on("focusout", "" + regn_container + " .user_regn_frm .form-item-mail input[type='text']", function (e) {
          var email_address = $.trim(($(this).val()));
          $('' + regn_container + ' .user_regn_frm .help-block-name .list-unstyled').html('');
          $('' + regn_container + ' .user_regn_frm .form-type-textfield').removeClass('has-error');
          if (email_address == '') {
            $('' + regn_container + ' .user_regn_frm .form-type-textfield').addClass('has-error');
            $('' + regn_container + ' .user_regn_frm .help-block-name .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.register_error_message_email) + '</li>');
            return false;
          }
          if (email_address != '') {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email_address)) {
              $('' + regn_container + ' .user_regn_frm .form-type-textfield').addClass('has-error');
              $('' + regn_container + ' .user_regn_frm .help-block-name .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.register_email_invalid) + '</li>');
              return false;
            }
          }
        });
  
        // Registration form validation password.
        $("body").on("focusout", "" + regn_container + "  .user_regn_frm .form-item-pass input", function (e) {
          var password = $.trim(($(this).val()));
          $('' + regn_container + ' .user_regn_frm .help-block-pass ul').html('');
          $('' + regn_container + ' .user_regn_frm .form-type-password').removeClass('has-error');
          if (password == '') {
            $('' + regn_container + ' .user_regn_frm .form-type-password').addClass('has-error');
            $('' + regn_container + ' .user_regn_frm .help-block-pass ul').html('<li>' + Drupal.t(Drupal.settings.register_error_message_password) + '</li>');
            return false;
          }
          if (validate(password) == true) {
            $('' + regn_container + ' .user_regn_frm .form-type-password').addClass('has-error');
            $('' + regn_container + ' .user_regn_frm .help-block-pass ul').html('<li>' + Drupal.t(Drupal.settings.password_requirement_format) + '</li>');
            return false;
          }
        });
  
        $("body").on("focusin", "" + regn_container + "  .user_regn_frm .form-item-mail input[type='text']", function (e) {
          $('' + regn_container + ' .user_regn_frm .help-block-name .list-unstyled').html('');
          $('' + regn_container + ' .user_regn_frm .form-type-textfield').removeClass('has-error');
        });
  
        $("body").on("focusin", "" + regn_container + "  .user_regn_frm .form-item-pass input[type='password']", function (e) {
          $('' + regn_container + ' .user_regn_frm .help-block-pass ul').html('');
          $('' + regn_container + ' .user_regn_frm .form-type-password').removeClass('has-error');
        });
  
        // Validation on registration submit
        $("body").on("click", "" + regn_container + "  .user_regn_frm button", function (e) {
          var email_address = $.trim(($('' + regn_container + ' .user_regn_frm .form-item-mail input[type="text"]').val()));
          $('' + regn_container + ' .user_regn_frm .help-block-name .list-unstyled').html('');
          $('' + regn_container + ' .user_regn_frm .form-type-textfield').removeClass('has-error');
          var is_error_reg = false;
          if (email_address == '') {
            $('' + regn_container + ' .user_regn_frm .form-type-textfield').addClass('has-error');
            $('' + regn_container + ' .user_regn_frm .help-block-name .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.register_error_message_email) + '</li>');
            is_error_reg = true;
          }
          if (email_address != '') {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email_address)) {
              $('' + regn_container + ' .user_regn_frm .form-type-textfield').addClass('has-error');
              $('' + regn_container + ' .user_regn_frm .help-block .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.register_email_invalid + '</li>'));
              is_error_reg = true;
            }
          }
          var password = $.trim(($('' + regn_container + ' .user_regn_frm .form-item-pass input').val()));
          $('' + regn_container + ' .user_regn_frm .help-block-pass ul').html('');
          $('' + regn_container + ' .user_regn_frm .form-type-password').removeClass('has-error');
          if (password == '') {
            $('' + regn_container + ' .user_regn_frm .form-type-password').addClass('has-error');
            $('' + regn_container + ' .user_regn_frm .help-block-pass ul').html('<li>' + Drupal.settings.register_error_message_password + '</li>');
            is_error_reg = true;
          }
  
          if (validate(password) == true) {
            $('' + regn_container + ' .user_regn_frm .form-type-password').addClass('has-error');
            $('' + regn_container + ' .user_regn_frm .help-block-pass ul').html('<li>' + Drupal.t(Drupal.settings.password_requirement_format) + '</li>');
            is_error_reg = true;
          }
  
          if (is_error_reg == true) {
            return false;
          }
        });
  
        // Forgot password validation. 
        $("body").on("focusout", "" + forgot_password_cntr + " .user_frgtpswrd_frm .form-item-name input[type='text']", function (e) {
          var email_address = $.trim(($(this).val()));
          $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .help-block .list-unstyled').html('');
          $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .form-type-textfield').removeClass('has-error');
          if (email_address == '') {
            $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .form-type-textfield').addClass('has-error');
            $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .help-block .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.forgot_password_error_message_email) + '</li>');
            return false;
          }
          if (email_address != '') {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email_address)) {
              $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .form-type-textfield').addClass('has-error');
              $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .help-block .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.forgot_password_email_invalid) + '</li>');
              return false;
            }
          }
        });
  
        $("body").on("focusin", "" + forgot_password_cntr + " .user_frgtpswrd_frm .form-item-name input[type='text']", function (e) {
          $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .help-block .list-unstyled').html('');
          $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .form-type-textfield').removeClass('has-error');
        });
  
        $("body").on("click", "" + forgot_password_cntr + " .user_frgtpswrd_frm button", function (e) {
          var email_address = $.trim(($('' + forgot_password_cntr + ' .user_frgtpswrd_frm .form-item-name input[type="text"]').val()));
          $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .help-block .list-unstyled').html('');
          $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .form-type-textfield').removeClass('has-error');
          if (email_address == '') {
            $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .form-type-textfield').addClass('has-error');
            $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .help-block .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.forgot_password_error_message_email) + '</li>');
            return false;
          }
          if (email_address != '') {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email_address)) {
              $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .form-type-textfield').addClass('has-error');
              $('' + forgot_password_cntr + ' .user_frgtpswrd_frm .help-block .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.forgot_password_email_invalid) + '</li>');
              return false;
            }
          }
        });
  
  
        // Login form validation email. 
        $("body").on("focusout", "" + login_container + " .user_lgn_frm .form-item-name input[type='text']", function (e) {
          var email_address = $.trim(($(this).val()));
          $('' + login_container + ' .user_lgn_frm .help-block-name .list-unstyled').html('');
          $('' + login_container + ' .user_lgn_frm .form-type-textfield').removeClass('has-error');
          if (email_address == '') {
            $('' + login_container + ' .user_lgn_frm .form-type-textfield').addClass('has-error');
            $('' + login_container + ' .user_lgn_frm .help-block-name .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.login_error_message_email) + '</li>');
            return false;
          }
  
          if (email_address != '') {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email_address)) {
              $('' + login_container + ' .user_lgn_frm .form-type-textfield').addClass('has-error');
              $('' + login_container + ' .user_lgn_frm .help-block-name .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.login_email_invalid) + '</li>');
              return false;
            }
          }
  
        });
  
        // Login form validation password.
        $("body").on("focusout", "" + login_container + " .user_lgn_frm .form-item-pass input", function (e) {
          var password = $.trim(($(this).val()));
          $('' + login_container + ' .user_lgn_frm .help-block-pass ul').html('');
          $('' + login_container + ' .user_lgn_frm .form-type-password').removeClass('has-error');
          if (password == '') {
            $('' + login_container + ' .user_lgn_frm .form-type-password').addClass('has-error');
            $('' + login_container + ' .user_lgn_frm .help-block-pass ul').html('<li>' + Drupal.t(Drupal.settings.login_error_message_password) + '</li>');
            return false;
          }
        });
  
        $("body").on("focusin", "" + login_container + " .user_lgn_frm .form-item-name input[type='text']", function (e) {
          $('' + login_container + ' .user_lgn_frm .help-block-name .list-unstyled').html('');
          $('' + login_container + ' .user_lgn_frm .form-type-textfield').removeClass('has-error');
        });
  
        $("body").on("focusin", "" + login_container + " .user_lgn_frm .form-item-name input[type='text']", function (e) {
          $('' + login_container + ' .user_lgn_frm .help-block-pass ul').html('');
          $('' + login_container + ' .user_lgn_frm .form-type-password').removeClass('has-error');
        });
  
        // Validation on login submit
        $("body").on("click", "" + login_container + " .user_lgn_frm button", function (e) {
          var email_address = $.trim(($('' + login_container + ' .user_lgn_frm .form-item-name input[type="text"]').val()));
          $('' + login_container + ' .user_lgn_frm .help-block-name .list-unstyled').html('');
          $('' + login_container + ' .user_lgn_frm .form-type-textfield').removeClass('has-error');
          var is_error = false;
          if (email_address == '') {
            $('' + login_container + ' .user_lgn_frm .form-type-textfield').addClass('has-error');
            $('' + login_container + ' .user_lgn_frm .help-block-name .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.login_error_message_email) + '</li>');
            is_error = true;
          }
  
          if (email_address != '') {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email_address)) {
              $('' + login_container + ' .user_lgn_frm .form-type-textfield').addClass('has-error');
              $('' + login_container + ' .user_lgn_frm .help-block-name .list-unstyled').html('<li>' + Drupal.t(Drupal.settings.login_email_invalid) + '</li>');
              is_error = true;
            }
          }
  
          var password = $.trim(($('' + login_container + ' .user_lgn_frm .form-item-pass input').val()));
          $('' + login_container + ' .user_lgn_frm .help-block-pass ul').html('');
          $('' + login_container + ' .user_lgn_frm .form-type-password').removeClass('has-error');
          if (password == '') {
            is_error = true;
            $('' + login_container + ' .user_lgn_frm .form-type-password').addClass('has-error');
            $('' + login_container + ' .user_lgn_frm .help-block-pass ul').html('<li>' + Drupal.t(Drupal.settings.login_error_message_password) + '</li>');
          }
          if (is_error) {
            return false;
          }
        });
  
        $("body").on("keyup", "" + login_container + " .user_lgn_frm .form-item-name input[type='text']", function (e) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          $.removeCookie("frgt_pswrd_email");
          if (regex.test($.trim(($(this).val())))) {
            $.cookie("frgt_pswrd_email", $.trim(($(this).val())));
          }
        });
  
        //Hiding drupal default password suggestions in change password 
        $('#change-password-form .password-suggestions').remove();
  
        // Validation Consent boxes social
        $("body").on("click", "#platform-user-integration-consent-social-form button", function (e) {
          $('.signup-privacy').html('');
          $('.form-item-signup-privacy').removeClass('err-signup-privacy');
          if ($(".form-item-signup-privacy input[type='checkbox']").attr("checked") !== 'checked') {
            $('.form-item-signup-privacy').addClass('err-signup-privacy');
            $('.form-item-signup-privacy label').prepend("<p class='signup-privacy'>" + Drupal.t('You must agree to the Terms and Conditions') + "</p>");
            return false;
          }
        });
  
        // Validation Consent boxes email
        $("body").on("click", "#platform-user-integration-consent-popup-form button", function (e) {
          $('.signup-privacy').html('');
          $('.form-item-signup-privacy').removeClass('err-signup-privacy');
          if ($(".form-item-signup-privacy input[type='checkbox']").attr("checked") !== 'checked') {
            $('.form-item-signup-privacy').addClass('err-signup-privacy');
            $('.form-item-signup-privacy label').prepend("<p class='signup-privacy'>" + Drupal.t('You must agree to the Terms and Conditions') + "</p>");
            return false;
          }
        });
  
        $.fn.extend({
          consentPopup: function (url, link) {
            Drupal.ajax[url] = new Drupal.ajax(url, link.get(0), {
              url: url,
              event: 'click',
              progress: {
                type: Drupal.theme.addLoader()
              }
            });
            link.click();
            $("#modalContent").addClass("consent-modal__content");
          }
        });
  
        $.fn.extend({
          consentPopupSocial: function (url, link) {
            Drupal.ajax[url] = new Drupal.ajax(url, link.get(0), {
              url: url,
              event: 'click',
              progress: {
                type: Drupal.theme.addLoader()
              }
            });
            link.click();
            $("#modalContent").addClass("consent-modal__content_social");
          }
        });
  
        $.fn.extend({
          triggerRegisterPopup: function (url, link) {
            Drupal.ajax[url] = new Drupal.ajax(url, link.get(0), {
              url: url,
              event: 'click',
              progress: {
                type: Drupal.theme.addLoader()
              }
            });
            link.click();
            $("#modalContent").addClass("modal__content_register");
          }
        });
  
      }
    };
  }(jQuery));
  
  // Login-Register password validation.
  function validate(content) {
    var psswrdfailed = false;
    if (new RegExp('[A-Z]').test(content)) {
      $(".information-block li:nth-child(1)").addClass("passed");
    } else {
      psswrdfailed = true;
      $(".information-block li:nth-child(1)").removeClass("passed");
    }
    if (new RegExp('[0-9!@#\$%\^\&*\)\(+=._-]').test(content)) {
      $(".information-block li:nth-child(2)").addClass("passed");
    } else {
      psswrdfailed = true;
      $(".information-block li:nth-child(2)").removeClass("passed");
    }
    if (content.length < 8) {
      psswrdfailed = true;
      $(".information-block li:nth-child(3)").removeClass("passed");
    } else {
      $(".information-block li:nth-child(3)").addClass("passed");
    }
    return psswrdfailed;
  }
  
  /**
   * Shows the uncensored password in the view.
   * @param evt
   */
  function togglePassword(evt) {
    var passwordInput = $(".login-register-modal .form-item-pass input");
    var passwordStatus = $(".js-show-password");
    if ($(".icon-view").css("display") == "none") {
      $(".icon-view").css("display", "inline-block");
      $(".icon-hide").hide();
    } else {
      $(".icon-hide").css("display", "inline-block");
      $(".icon-view").hide();
    }
    if (passwordInput[0].type == "password") {
      passwordInput[0].type = "text";
    } else {
      passwordInput[0].type = "password";
    }
  }
  
  /**
   * Function to trigger login popup.
   * @param evt
   */
  function triggerLogin() {
    var url = Drupal.settings.basePath + 'modal_forms/nojs/login';
    var link = $("<a></a>").attr('href', url).addClass('ctools-use-modal ctools-modal-modal-popup-small').click(Drupal.CTools.Modal.clickAjaxLink);
    Drupal.ajax[url] = new Drupal.ajax(url, link.get(0), {
      url: url,
      event: 'click',
      progress: {
        type: Drupal.theme.addLoader()
      }
    });
    link.click();
    $("#modalContent").addClass("modal__content_login");
  }
  
  function tgrLoginbtn() {
    window.location.href = 'user/login';
  }
  
  // Function to update my account nav details.
  function myAccount_nav_details() {
    $.ajax({
      method: "GET",
      url: Drupal.settings.basePath + "my-account-details/ajax",
      dataType: "json",
      cache: false,
      success: function (data) {
        if (typeof (data.logged_in) !== "undefined") {
          $(".my-account__nav").find(".loggedIn-content").removeClass("hide");
          $(".my-account__nav").find("svg.loggedIn-content").attr("class", "icon icon-user-login loggedIn-content");
          $(".my-account__nav").find(".loggedOut-content").addClass("hide");
          $(".my-account__nav").find("svg.loggedOut-content").attr("class", "icon icon-user loggedOut-content hide");
          $(".my-account__nav").find(".user-mail").html(data.display_email_or_name);
        } else {
          $(".my-account__nav").find(".loggedIn-content").addClass("hide");
          $(".my-account__nav").find("svg.loggedIn-content").attr("class", "icon icon-user-login loggedIn-content hide");
          $(".my-account__nav").find(".loggedOut-content").removeClass("hide");
          $(".my-account__nav").find("svg.loggedOut-content").attr("class", "icon icon-user loggedOut-content");
        }
  
        //Hiding newsletter block if not subscribed
        if (data.newsletter_subscribed) {
          $("section#block-flourish-newsletter-subscription-flourish-newsletter-subscription").hide();
        } else {
          $("section#block-flourish-newsletter-subscription-flourish-newsletter-subscription").show();
        }
      },
      error: Â functionÂ(error) Â {
        console.log("Error fetching my account details : " + error.status + " " + error.statusText);
      }
    });
  }
  
  ; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-navbar.js
   * @desc necessary scripts for navbar.
   **/
  (function ($) {
    Drupal.behaviors.flourishNavbar = {
      attach: function (context, settings) {
  
        // On click hamburger menu, open menu and toggle icon.
        $(".nav-icon").click(function () {
          $(this).toggleClass("open");
          $(".main-nav").toggleClass("open");
          $(".brand-bar-section").toggleClass("open");
          $("html,body").toggleClass("fl-body-fixed");
          $(".page-overlay--typeahead").fadeToggle();
        });
  
        // On click of the search icon, fade out the navigation and slideAnimate the search bar.
        $(".secondary-nav .icon-search").on("click", function () {
          if ($(window).width() < 1024) {
            $("html,body").addClass("fl-body-fixed");
            $(".nav-icon, .brand-bar-section, .main-nav").removeClass("open");
          }
          $(".navigation-bar").addClass("search-active");
          $(".page-overlay--typeahead").fadeIn();
          $("#nav-search").focus();
          setTimeout(function () {
            $(".search-bar__start").addClass("animation-loaded");
          }, 1000);
        });
        $(".search-bar .icon-close").on("click", resetNavbar);
  
        // Clear the search field with the clear button.
        $(".clear-search").on("click", function (e) {
          e.preventDefault();
          $(this).closest(".search-bar").find("#nav-search").val("").focus();
        });
  
        // Scroll function for sticky header.
        $(window).scroll(function () {
          var sticky = $(".navigation-bar-section");
          var scroll = $(window).scrollTop();
          if ($(window).width() < 768) {
            var scrollTrigger = 1;
          } else {
            var scrollTrigger = 36;
          }
          if (scroll >= scrollTrigger) {
            sticky.addClass("fixed");
          } else {
            sticky.removeClass("fixed");
          }
        });
  
        // Open the My Account section.
        $(".my-account__nav").once("myAccountNavClick").on("click", function (e) {
          $(".account-section").toggleClass("active");
          $(".nav-icon").removeClass("open");
          $(".main-nav").removeClass("open");
          $(".brand-bar-section").removeClass("open");
          $("html,body").removeClass("fl-body-fixed");
          e.stopPropagation();
        });
  
        // Close the My Account section.
        $(".account-section .icon-close").on("click", function () {
          $(".account-section").removeClass("active");
        });
  
        // Close My Account section when clicked outside of the div.
        $(document).click(function () {
          $(".account-section").removeClass("active");
          $(document).ajaxStart(function () {
            $(".account-section").removeClass("active");
          });
        });
  
        // Close the My Account section.
        $(".account-section").on("click", function (e) {
          e.stopPropagation();
        });
        // My Account hover changes.
        var mouseenterStyles = {
          "fill": "#2FC48D",
          "color": "#2FC48D",
          "text-decoration": "underline"
        };
        var mouseleaveStyles = {
          "fill": "#012169",
          "color": "#012169",
          "text-decoration": "none"
        };
        $(".account-section__loggedin").mouseenter(function () {
          $(this).find(".icon, .h5, .type-small").css(mouseenterStyles);
        });
        $(".account-section__loggedin").mouseleave(function () {
          $(this).find(".icon, .h5, .type-small").css(mouseleaveStyles);
        });
  
        $(".account-section").mouseenter(function () {
          $(".my-account__nav").find(".icon-user, .my-account__span").css(mouseleaveStyles);
        });
        $(".account-section").mouseleave(function () {
          $(".my-account__nav").find(".icon-user, .my-account__span").removeAttr("style");
        });
  
        // Show clear button when text is entered or focus is provided.
        $('#nav-search').on('focus keyup', function () {
          if ($(this).val().length == 0) {
            $(".clear-search").hide();
            $("#button-typeahead-search").hide();
          } else {
            $(".clear-search").show();
            $("#button-typeahead-search").show();
          }
        });
  
      }
    };
  
    // Get shopping list count.
    if (!Drupal.settings.platform_ecom.FlEcomEnabled) {
      get_shoppinglist_count();
    }
  }(jQuery));
  
  // Get shopping list count.
  function get_shoppinglist_count() {
    $.ajax({
      cache: false,
      type: 'GET',
      url: Drupal.settings.basePath + "ajax/get-shoppinglist-count",
      success: function (data) {
        if (data > 0) {
          $(".bubble-counter").attr('data-counter', data);
          $(".bubble-counter").addClass("bubble-counter__primary");
        }
      },
    });
  }
  
  
  // Clears the input and closes the search bar.
  function resetNavbar() {
    clearInput(false);
    $('.search-bar__start').removeClass('animation-loaded');
    $('.navigation-bar').removeClass('search-active');
    $('.page-overlay--typeahead').fadeOut();
    $('#nav-search').val('');
    $('.nav-icon').removeClass('open');
    $('.main-nav').removeClass('open');
    $('.brand-bar-section').removeClass('open');
    $("html,body").removeClass("fl-body-fixed");
  }
  
  
  // Function to reset the search input field.
  function clearInput(bFocus) {
    bFocus = bFocus || true;
    $(".clear-search").hide();
    $("#button-typeahead-search").hide();
    $('#search-bar .typeahead').typeahead("val", null);
    if (bFocus) {
      $("#nav-search").focus();
    }
  }
  
  ; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-search.js
   * @desc necessary scripts for search.
   **/
  (function ($) {
    Drupal.behaviors.flourishSearch = {
      attach: function (context, settings) {
  
        var searchColorSelected = $(".views-search-page .view-search-color-colors .selected"),
          colorResultValue = $("#color-results-value"),
          productResultValue = $("#products-results-value"),
          articleResultValue = $("#articles-results-value"),
          searchJumpText = $("#search-jumpto-text"),
          colorResultExpand = $("#color-results-expand a"),
          searchColorViewFooter = $(".views-search-page .view-search-color-colors .view-footer"),
          searchColorViewContent = $(".views-search-page .view-search-color-colors .view-content"),
          searchProductViewFooter = $(".views-search-page .view-search-color-products .view-footer"),
          searchProductViewContent = $(".views-search-page .view-search-color-products .view-content"),
          searchProductViewRow = $(".view-display-id-view_searchproducts .view-content .item-list .views-row"),
          searchArticleViewFooter = $(".views-search-page .view-search-color-articles .view-footer"),
          searchArticleViewContent = $(".views-search-page .view-search-color-articles .view-content");
  
        // Onfocus set/unset default text.
        $(".fl-search-text").once("flSearchFocus").on("focus", function () {
          var inputtext = $(this).val(),
            defaulttext = Drupal.t("Type here...");
          if (inputtext == defaulttext) {
            $(this).val("");
          }
        });
  
        // If submit is clicked.
        $('#fl-search-form').live("submit", function () {
          flSearchResult($("#fl-search-form .fl-search-text").val());
        });
  
        // If enter is pressed submit the form.
        $(".fl-search-text").once("flSearchSubmit").on("keypress", function (event) {
          if (event.which == 13) {
            flSearchResult($(this).val());
          }
        });
  
        $(".fl-search-text").once("flSearchFocusOut").on("focusout", function (event) {
          var inputtext = $(this).val(),
            defaulttext = Drupal.t("");
          if (inputtext == "") {
            $(this).val(defaulttext);
          }
        });
  
        $("body").once("flSearchClick").on("click", ".search-bar #fl-search-btn, .search-bar .icon-search", function () {
          flSearchResult($(".fl-search-text").val());
        });
  
        if ($(window).width() > 767) {
          $("li.desktop-icon.header-search").click(function () {
            $(this).addClass("active");
          });
          $(".views-search-page span#searchagain-button").click(function () {
            $(".secondary-nav .icon-search").trigger("click");
          });
          $(".search-Modal").on("hidden.bs.modal").click(function () {
            $("li.desktop-icon.header-search").removeClass("active");
          });
        }
  
        // Search page - scroll in ios.
        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
          $("#search-color-li	 a").click(function () {
            htmlBody.animate({
              scrollTop: $("#color-results-summary").offset().top
            }, 400);
          });
          $("#search-products-li a").click(function () {
            htmlBody.animate({
              scrollTop: $("#products-results-summary").offset().top
            }, 400);
          });
          $("#search-articles-li a").click(function () {
            htmlBody.animate({
              scrollTop: $("#articles-results-summary").offset().top
            }, 400);
          });
        }
  
        // No result search-page block :: START.
        $("body").on("click", ".page-search .flex-campaign .hero-image", function (e) {
          $(this).find(".btn")[0].click();
        }).on('click', '.page-search .flex-campaign .hero-image a', function (e) {
          // Child div <a> stop from triggering.
          e.stopPropagation();
        });
        // No result search-page block :: STOP.
  
        // Hiding search mobile dialog box on clicking search box.
        $("body").on("click", "#myModalLabel-search", function () {
          $(".secondary-nav .icon-search").click();
        });
  
        // Search results page.
        if ($(".views-search-page").length) {
          renderColors();
          $(".view-search-colors ul.pager ").remove();
          $(".view-multilingual-search ul.pager ").remove();
          if (colorResultValue) {
            var colval = colorResultValue.html();
            var colorResultHeader = colorResultValue.text();
            colval = parseInt(colorResultHeader.replace(/[^0-9\.]/g, ''), 10);
            if (colval == 1) {
              $("#color-show-results").hide();
            }
            if (colval > 0) {
              $("#color-results").html(colval);
              if (colval < 7) {
                $("#color-results-expand").remove();
              }
            } else {
              $("#search-color-li").remove();
              $(".view-search-color-colors").remove();
              colval = 0;
            }
          }
          if ($(".view-search-color-products").length) {
            //Unset the cookies
            $.cookie("product_color_rgb", null, {
              path: "/"
            });
            $.cookie("product_color_name", null, {
              path: "/"
            });
            $.cookie("product_color_nid", null, {
              path: "/"
            });
            $.cookie("product_nid", null, {
              path: "/"
            });
          }
          if (productResultValue) {
            var proval = productResultValue.html();
            var productResultHeader = productResultValue.text();
            proval = parseInt(productResultHeader.replace(/[^0-9\.]/g, ''), 10);
            if (proval == 1) {
              $("#product-show-results").hide();
            }
            if (proval > 0) {
              $("#products-results").html(proval);
              if (proval < 5) {
                $("#products-results-expand").remove();
              }
            } else {
              $("#search-products-li").remove();
              $(".view-search-color-products").remove();
              proval = 0;
            }
          }
          if (articleResultValue) {
            var artval = articleResultValue.html();
            var articleResultHeader = articleResultValue.text();
            artval = parseInt(articleResultHeader.replace(/[^0-9\.]/g, ''), 10);
            if (artval == 1) {
              $("#article-show-results").hide();
              $('#zone-content .page-header').show();
            }
            if (artval > 0) {
              $("#articles-results").html(artval);
              if (artval < 7) {
                $("#articles-results-expand").remove();
              }
            } else {
              $("#search-articles-li").remove();
              $(".view-search-color-articles").remove();
              artval = 0;
            }
          }
          if (colval == 0 && proval == 0 && artval == 0) {
            $("body.page-search div.zone-filter").hide();
          }
          $(".view-search-color-colors .view-content .views-row").click(function () {
            var link = $(this).find(".views-row a").attr("href");
            window.location.href = link;
          });
          $(".view-search-color-products .view-content .views-row").click(function () {
            var link = $(this).find(".views-field-node-field-packshots-s-url .field-content a").attr("href");
            window.location.href = link;
          });
          $(".view-search-color-products .view-content .views-row").click(function () {
            var link = $(this).find("views-field-node-field-packshots-s-url .field-content a").attr("href");
            window.location.href = link;
          });
          $("body").on("click", ".views-search-page .view-display-id-view_searchproducts_all .view-content .views-row", function (ev) {
            var link = $(this).find(".views-field-node-field-packshots-s-file .element-invisible a").attr("href");
            window.location.href = link;
          });
          $("body").on("click", ".views-search-page .view-display-id-view_searchproducts_all .view-content .views-row", function (ev) {
            var link = $(this).find(".views-field-title-field a").attr("href");
            window.location.href = link;
          });
          $(".view-search-color-articles .view-content .views-row").click(function () {
            var link = $(this).find(".views-field-node-title a").attr("href");
            window.location.href = link;
          });
          $(".view-search-color-articles .view-content .views-row").click(function () {
            var link = $(this).find(".views-field-title-field a").attr("href");
            window.location.href = link;
          });
          $("body").on("click", ".views-search-page .view-display-id-view_searcharticles_all .view-content .views-row", function (ev) {
            var link = $(this).find(".views-field-node-title a").attr("href");
            window.location.href = link;
          });
          $("body").on("click", ".views-search-page .view-display-id-view_searcharticles_all .view-content .views-row", function (ev) {
            var link = $(this).find(".views-field-title-field a").attr("href");
            window.location.href = link;
          });
          $("#color-results-expand > a").on("click", function () {
            var s = getQueryParameterByName("s");
            $.ajax({
              type: "GET",
              dataType: "html",
              async: true,
              url: Drupal.settings.basePath + "search-getall-colors-ajax?s=" + s,
              success: function (data) {
                $("#color-results-all").html(data);
                renderColors();
                colorResultExpand.hide();
                $("#color-results-summary-value").text(colval);
                searchColorViewFooter.addClass("color-footer-ie searchColorViewFooterDesktop");
                searchColorViewContent.addClass("searchColorViewContentBoxShadow");
                $(".views-search-page .view-search-color-colors > .view-content").addClass("searchColorViewContentPadding");
                $(".views-search-page .view-search-color-colors .view-footer .view-content").addClass("searchColorViewFooterContentPadding");
                if ($(window).width() <= 767) {
                  colorResultExpand.hide();
                  searchColorViewFooter.addClass("searchColorViewFooterMobile");
                  searchColorViewContent.addClass("searchColorViewContentBoxShadow");;
                  $(".views-search-page .view-search-color-colors .view-content .views-row:nth-child(6)").show();
                }
                //set color text
                $(".color-text").each(function (index, value) {
                  var rgb = $(this).attr("data-rgb");
                  var bg_text = contrastingColor(rgb);
                  $(this).css("color", "#" + bg_text);
                });
              }
            });
          });
          $("#products-results-expand > a").on("click", function () {
            var s = getQueryParameterByName("s");
            var prd_arr_searchajax = 0;
            if (typeof flourish_data_layer.products == "undefined") {
              flourish_data_layer.products = {};
            }
            $.ajax({
              type: "GET",
              dataType: "html",
              async: true,
              url: Drupal.settings.basePath + "search-getall-products-ajax?s=" + s,
              success: function (data) {
                $("#products-results-all").html(data);
                $("#products-results-expand a").hide();
                $("#products-results-summary-value").text(proval);
                searchProductViewFooter.addClass("searchProductViewFooterDesktop");
                searchProductViewContent.addClass("searchProductViewContentBoxShadow");
                if ($(window).width() <= 767) {
                  $("#products-results-expand a").hide();
                  searchProductViewFooter.addClass("searchProductViewFooterMobile");
                  searchProductViewContent.addClass("searchProductViewContentBoxShadow");
                  $(".views-search-page .view-search-color-products .view-content .item-list ul li:nth-child(4)").show();
                  $(".views-search-page .view-search-color-products .view-content .item-list ul li:nth-child(4),.views-search-page .view-search-color-products .view-content .item-list ul li:nth-child(3)").addClass("search-color-products-li-child4-3");
                }
                if (searchProductViewRow.length) {
                  searchProductViewRow.each(function () {
                    var searchPrdName = $(this).find(".views-field-title-field .field-content > a").text();
                    var searchPrdGlobalId = $(this).find(".product-global-id").text();
                    var searchPrdCategory = $(this).find(".views-field-field-product-type .field-content").text();
                    flourish_data_layer["products"][prd_arr_searchajax] = {
                      "productInfo": {
                        "productID": searchPrdGlobalId,
                        "productName": searchPrdName
                      },
                      "category": {
                        "primaryCategory": searchPrdCategory
                      }
                    };
                    prd_arr_searchajax++;
                  });
                }
  
                $(".views-search-page #products-results-all .view-content .views-row").matchHeight();
                //Pushing searchProductsAjax to dataLayer
                if (typeof flourish_data_layer.products != "undefined") {
                  flourish_data_layer.event = "ga-virtualPageView";
                  dataLayer.push(flourish_data_layer);
                }
              }
            });
          });
          $("#articles-results-expand > a").on("click", function () {
            var s = getQueryParameterByName("s");
            $.ajax({
              type: "GET",
              dataType: "html",
              async: true,
              url: Drupal.settings.basePath + Drupal.settings.pathPrefix + "search-getall-articles-ajax?s=" + s,
              success: function (data) {
                $("#articles-results-all").html(data);
                //Changing Image redirect URL
                $(".views-search-page .view-display-id-view_searcharticles .view-content .views-row").each(function () {
                  var article_href = $(this).find(".views-field-node-title .field-content a").attr("href");
                  $(this).find(".views-field-node-field-hero-image-file .field-content .content a").attr("href", article_href);
                });
                $("#articles-results-expand a").hide();
                $("#articles-results-summary-value").text(artval);
                searchArticleViewFooter.addClass("searchArticleViewFooterDesktop");
                searchArticleViewContent.addClass("searchArticleViewContentBoxShadow");
                if ($(".views-search-page .view-search-color-articles .item-list ul li:nth-last-child(2)").hasClass("views-row-odd")) {
                  $(".views-search-page .view-search-color-articles .item-list ul li:nth-last-child(2)").addClass("search-color-articles-li-last-child2-odd");
                }
                if ($(".views-search-page .view-search-color-articles .item-list ul li:nth-last-child(2)").hasClass("views-row-even")) {
                  $(".views-search-page .view-search-color-articles .item-list ul li:nth-last-child(2)").addClass("search-color-articles-li-last-child2-even");
                }
                $(".views-search-page .view-search-color-articles .views-field").matchHeight();
                $(".views-search-page .view-search-color-articles .item-list ul li:nth-last-child(2)").removeClass("block-h");
                var articleHeight = $(".views-search-page .view-search-color-articles .views-field").height();
                $(".views-search-page .view-search-color-articles .views-field").height(articleHeight);
                if ($(window).width() <= 767) {
                  $("#articles-results-expand a").hide();
                  searchArticleViewFooter.addClass("searchArticleViewFooterMobile");
                  searchArticleViewContent.addClass("searchArticleViewContentBoxShadow");
                  $(".views-search-page .view-search-color-articles .view-content .views-row:nth-child(5), .views-search-page .view-search-color-articles .view-content .views-row:nth-child(6)").show();
                  $(".views-search-page .view-search-color-articles .item-list ul li:nth-last-child(2)").addClass("search-color-articles-li-last-child2-mobile");
                  $(".views-search-page .view-search-color-articles .views-field").matchHeight();
                }
              }
            });
          });
        }
  
        // Changing Search Articles Image href links.
        Drupal.behaviors.searchProductHref = {
          attach: function (context, settings) {
            $(".views-search-page .view-display-id-view_searcharticles .view-content .views-row").each(function () {
              var article_href = $(this).find(".views-field-node-title .field-content a").attr("href");
              $(this).find(".views-field-node-field-hero-image-file .field-content .content a").attr("href", article_href);
            });
          }
        };
  
        // Search color redirect one.
        searchColorSelected.click(function () {
          var colorurl = searchColorSelected.attr("data-url");
          window.location.href = colorurl;
        });
  
        // Jira issue fix no SHKSP-3161.
        if ($(".views-search-page .view-search-color-articles .view-content ul").children().length == 1) {
          $(".views-search-page .view-search-color-articles .view-content ul li").addClass("border-none");
        }
  
        // Search result page.
        if ($(window).width() > 766) {
          $(".views-search-page .view-search-color-articles .item-list ul li:nth-last-child(2)").addClass("block-h");
        }
  
      }
    };
  }(jQuery));
  
  
  // Search result.
  function flSearchResult(keyword) {
    var inputtext = $.trim(keyword);
    var search_params = Drupal.t("search?s=");
    var theLanguage = $("html").attr("lang");
    var get_lang = theLanguage.split("-");
    var link = Drupal.settings.basePath + get_lang[0] + "/" + search_params + inputtext;
    if (inputtext == "") {
      Drupal.theme("flmsg", Drupal.t("Please enter a keyword for search."));
    } else {
      window.location.href = link;
    }
  }; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-multilingual.js
   * @desc necessary scripts for multilingual.
   **/
  (function ($) {
    Drupal.behaviors.flourishMultilingual = {
      attach: function (context, settings) {
  
        // Multilingual Code.
        var multilingulaData = [];
        if (typeof Drupal.settings.drupal_multilingual != 'undefined' && Drupal.settings.drupal_multilingual) {
          // 1st Check for COOKIE if not Then Check from Browser if not Show POPUP and Set COOKIES.
          // If Site multilingual do redirection based on language selected.
          multilingulaData = flourishMultilingualSetting();
          if (typeof multilingulaData != 'undefined' && multilingulaData != null) {
            if (typeof multilingulaData['langSelectorPopup'] != 'undefined' && multilingulaData['langSelectorPopup'] == 'YES') {
              Drupal.theme.languageSelector(multilingulaData);
              $("body").on("click", ".language-modal__change", function () {
                Drupal.theme.addLoader();
                var langSelected = $(this).attr("value");
                $.ajax({
                  context: this,
                  type: 'GET',
                  data: {
                    language_selected: langSelected,
                  },
                  url: '/language_selector',
                  success: function (data) {
                    var data_lang = data;
                    var lang_url = '';
                    var protocol = window.location.protocol + '//';
                    lang_url = protocol + window.location.host + '/' + data_lang;
                    window.location.href = lang_url;
                  },
                  error: function (request, Â status, Â error) {
                    console.log(error);
                  }
                });
              });
            }
            if (typeof multilingulaData['lang_path'] != 'undefined') {
              var lang_url = '';
              lang_url = multilingulaData['lang_path'];
              window.location.href = lang_url;
            }
          }
        }
  
      }
    };
  }(jQuery));
  
  /**
   * To get multilingual redirection setting.
   */
  function flourishMultilingualSetting() {
    var flMultilingual = [];
    // Ajax request to get multilingual redirection setting.
    var request_path = Drupal.settings.request_path
    if (request_path === '') {
      request_path = 0;
    }
    jQuery.ajax({
      type: 'GET',
      dataType: "json",
      async: false,
      cache: false,
      contentType: "application/json",
      data: {
        site_lang: Drupal.settings.site_lang,
        request_path: request_path
      },
      url: '/flourish_multilingual',
      success: function (data) {
        flMultilingual = data;
      },
      error: function (request, Â status, Â error) {
        console.log(error);
      }
    });
    return flMultilingual;
  }; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-color-swatch.js
   * @desc necessary scripts for color swatch.
   **/
  (function ($) {
    Drupal.behaviors.flourishColorSwatch = {
      attach: function (context, settings) {
  
        calculateHeight();
  
        // On screen resize maintain height.
        $(window).resize(function () {
          calculateHeight();
        });
  
        // Set height for color swatches.
        $(".modal").on("shown.bs.modal", function () {
          $(".js-modal-setHeight").on("click", function () {
            var $setModalHeight = $(this).children().outerHeight() * 2.75;
            $(this).height($setModalHeight + 'px');
          });
          $(".js-modal-setHeight").click();
          $(window).resize(function () {
            $(".js-modal-setHeight").click();
          });
  
          $(".setSelectorHeight").on("click", function () {
            var $setModalHeight = $(this).children().outerHeight() * 2.3;
            $(this).height($setModalHeight + 'px');
          });
          $(".setSelectorHeight").click();
          $(window).resize(function () {
            $(".setSelectorHeight").click();
          });
        });
  
      }
    };
  }(jQuery));
  
  // Function to set height of color swatches.
  function calculateHeight() {
    var $setHeight = $(".active .js-setHeight").children().outerHeight() * 2.75;
    $(".js-setHeight").height($setHeight + 'px');
  }
  
  // Function to update the scrapbook icon.
  function updateScrapbookIcon(scrapbookColorID) {
    $.getJSON(Drupal.settings.basePath + "color/ajax/sb-colors", function (scrapbookColors) {
      if (scrapbookColors != null) {
        if (typeof scrapbookColors.sess_scrap_book_colors[scrapbookColorID] !== "undefined") {
          $(".sb-status").addClass("fl-in-sb");
        } else {
          $(".sb-status").removeClass("fl-in-sb");
        }
      }
    });
  }; /*})'"*/ ; /*})'"*/
  /***
   * @file: theme-custom.js
   * @desc Moved file from custom.js to theme-cstom.js
   **/
  (function ($) {
  
    var htmlBody = $("html,body");
    /***************************************************************************
     * Attaches the sidebar toggle behavior to theme.
     **************************************************************************/
    Drupal.behaviors.flFooterBlocks = {
      attach: function (context, settings) {
        $(".mobile-view .add-top-shopping-list").click(function () {
          $(".desktop-cart-view .add-top-shopping-list").trigger("click");
          return false;
        });
        /*** Fixes for dynamic product block ***/
        $(".embed .color-box-child p").each(function () {
          hexCol = "#" + $(this).attr("data-rgb");
          rgb = hexToRgb(hexCol);
          var o = Math.round(((parseInt(rgb.r) * 299) + (parseInt(rgb.g) * 587) + (parseInt(rgb.b) * 114)) / 1000);
          if (o > 125) {
            $(this).css("color", "black");
          } else {
            $(this).css("color", "white");
          }
        });
      }
    };
    // Newsletter.
    $(".form-item-email").attr("data-cta-msg", Drupal.t("(Can not be changed)"));
    /***************************************************************************
     * Navigation related JS
     *************************************************************************/
    Drupal.behaviors.flNavigation = {
      attach: function (context, settings) {
        $(".navbar-nav .m-account-item").once("flNavOpen").on("click", function () {
          if ($("body").hasClass("logged-in")) {
            analyticsEventCall("Account", "Click", "Open", undefined, false);
          }
        });
        //Remove sticky class (if view is cached)
        if (!$("body").hasClass("fl-with-navbar-stickey")) {
          $(".view-product-Listing .product-bar-fixed.sticky").removeClass("sticky");
        }
        //If sticky we need to redirect to normal page with filters
        $("body.fl-with-navbar-stickey .view-product-Listing .product-bar-fixed.sticky .close-color").once("flSticky").on("click", function (e) {
          window.location.href = decodeURIComponent($(this).data("uri"));
          e.preventDefault();
        });
      }
    };
    /***************************************************************************
     * Contact us page Tabs
     *************************************************************************/
    Drupal.behaviors.flContactTabs = {
      attach: function (context, settings) {
        var panelHeading = $(".fl-panel .fl-panel-heading");
        panelHeading.once("flContactTabs").on("click", function () {
          if ($(this).hasClass("current")) {
            $(this).removeClass("current").removeClass("fl-expanded");
            if ($(this).data("target")) {
              $("." + $(this).data("target")).removeClass("fl-expanded-content");
            }
          } else {
            panelHeading.removeClass("current").removeClass("fl-expanded");
            $(this).addClass("current").addClass("fl-expanded");
            if ($(this).data("target")) {
              $("." + $(this).data("target")).addClass("fl-expanded-content");
            }
          }
        });
      }
    };
  
    //product detail modal - addClass
    Drupal.behaviors.productDetailModal = {
      attach: function (context, settings) {
        $(".paint-box-holder__cta.ctools-use-modal").click(function () {
          $("#modalContent").addClass("product-details-modal__content");
        });
        $(".js-showHideReadMore a").click(function () {
          $("#modalContent").addClass("what-does-it-mean-popup");
        });
        $(".what-does-it-mean-popup .node__title a").click(function () {
          return false;
        });
      }
    };
  
    // Contact us
    $(".contact-us-form-left .form-submit").click(function () {
      $(".contact-us-form-left").addClass("contact-us-validation");
    });
  
    //product detail modal close
    $("body").on("click", ".product-details-modal__content .btn-cart-js", function () {
      $("#modalBackdrop,.product-details-modal__content").hide();
    });
  
    //product detail and login modal ajax loader
    $(document).on("focus", ".paint-box-holder__cta.ctools-use-modal", function (e) {
      $(".paint-box-holder__cta.ctools-use-modal").data("add_loader", true);
    });
  
    var modalSizeVal = 0;
    $(document).on("focus", ".form-item-size select", function (e) {
      $(this).data("add_loader", true);
      modalSizeVal = $(".product-details-modal__content .form-item-size select").val();
    });
  
    $(document).ajaxStart(function () {
      if (($('.paint-box-holder__cta.ctools-use-modal').data('add_loader'))) {
        $('#modalBackdrop').hide();
        $('#modalContent').hide();
        Drupal.theme.addLoader();
      }
      if (($('.product-details-modal__content .form-item-size select').data('add_loader')) && (modalSizeVal != $('.product-details-modal__content .form-item-size select').val())) {
        $('#modalBackdrop').show();
        $('#modalContent').show();
        Drupal.theme.addLoader();
      }
    });
  
    $(document).ajaxSuccess(function () {
      if (($('.paint-box-holder__cta.ctools-use-modal').data('add_loader'))) {
        Drupal.theme.removeLoader();
        $('#modalBackdrop').show();
        $('#modalContent').show();
        $('.paint-box-holder__cta.ctools-use-modal').data('add_loader', false);
      }
      if (($('.product-details-modal__content .form-item-size select').data('add_loader')) && (modalSizeVal != $('.product-details-modal__content .form-item-size select').val())) {
        $('#modalBackdrop').show();
        $('#modalContent').show();
        Drupal.theme.removeLoader();
        $('.product-details-modal__content .form-item-size select').data('add_loader', false);
      }
    });
  
    //product status modal
    $("body").on("click", ".productStatus-modal__close", function () {
      $("#productStatusModal").modal("hide");
      $(".modal-backdrop,#productStatusModal").remove();
      $("body").removeClass("modal-open");
    });
  
    //Testers Modal
    $("body").on("click", ".btn-information.wet-tester", function () {
      Drupal.theme.addLoader();
      $.getJSON(Drupal.settings.basePath + "flourish-tester-info?cnid=" + $(this).data("nid"), function (tester_data) {
        Drupal.theme.removeLoader();
        $(".testers-modal").modal();
        $(".testers-modal__content img").attr("src", tester_data.dry_tester.tester_image.src);
        $(".testers-modal__title").html(tester_data.wet_tester.title);
        $(".testers-modal__size").html(Drupal.t("Size") + ": " + tester_data.wet_tester.size);
        $(".testers-modal__description").html(tester_data.wet_tester.tester_body);
      });
    });
  
    $("body").on("click", ".btn-information.dry-tester", function () {
      Drupal.theme.addLoader();
      $.getJSON(Drupal.settings.basePath + "flourish-tester-info?cnid=" + $(this).data("nid"), function (tester_data) {
        Drupal.theme.removeLoader();
        $(".testers-modal").modal();
        $(".testers-modal__img").attr("src", tester_data.dry_tester.tester_image.src);
        $(".testers-modal__title").html(tester_data.dry_tester.title);
        $(".testers-modal__size").html(Drupal.t("Size") + ": " + tester_data.dry_tester.size);
        $(".testers-modal__description").html(tester_data.dry_tester.tester_body);
      });
    });
  
    // Dont allow users to enter characaters other than digits.
    $("body").on("keydown", ".basic-cart-cart-contents .shop-divs .basic-cart-cart-quantity .cell > input", function (e) {
      // Allow: backspace, delete, tab, escape, enter.
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
        // Allow: home, end, left, right.
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything.
        return;
      }
      // Ensure that it is a number and stop the keypress.
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });
  
    //Changing Product type layout
    Drupal.behaviors.changeProductType = {
      attach: function (context, settings) {
        $(".view-id-product_type_blocks").addClass("row");
        var product_types = $(".view-id-product_type_blocks .view-content").children(".views-row").length;
        if (product_types > 4) {
          $(".col-prod-type").removeClass("col-sm-6,col-prod-type-hide").addClass("col-sm-4");
        } else {
          $(".col-prod-type").removeClass("col-prod-type-hide");
        }
      }
    };
  
    //Size dropdown value font size
    if ((($(".white-box .pd-col-drop-down .form-item-size .form-select").children("option").filter(":selected").text().length) / 2) > 6) {
      $(".white-box .pd-col-drop-down .form-item-size .form-select").css("font-size", "10px")
    }
  
    // Checkout page cart quantity validation. 
    $("body").on("keyup", ".basic-cart-cart-contents .shop-divs .basic-cart-cart-quantity .cell > input", function (e) {
      if ($(this).val() == 0) {
        $(this).val('');
      }
    });
  
    //Product detail page - tabs  
    if ($(".tab-content #tab-1").length == 0) {
      $(".tab-content #tab-2").addClass("active");
      $(".nav-tabs .tab-2").addClass("active");
    }
    if (($(".tab-content #tab-1").length == 0) && ($(".tab-content #tab-2").length == 0)) {
      $(".tab-content #tab-3").addClass("active");
      $(".nav-tabs .tab-3").addClass("active");
    }
  
    //Colour Detail page share and mail icons overlap issue fix - ipad	
    if ($(".mail-share .color-email .field-label").text().length > 15 || $(".mail-share .color-share .field-label").text().length > 6) {
      $(".mail-share .color-email, .mail-share .color-share").addClass("cd-full-width");
    }
  
    //GQ modal - addClass
    Drupal.behaviors.gqModal = {
      attach: function (context, settings) {
        var nr = -1;
        var validate = 0;
  
        $(".form-content__fields > div").each(function (index) {
          validate = index++;
          $(this).click(function () {
            if ($(this).val() == "") {
              if ($(this).find("input").is(":checked")) {
                nr = nr + 1;
                $(this).val(1);
              };
              if (nr == validate) {
                $(".js-btn-disabled").removeClass("no_action").removeAttr("onclick");
              } else {
                $(".js-btn-disabled").attr("onclick", "return false");
              };
            };
          })
          $(this).change(function () {
            if ($(this).val() == "") {
              if ($(this).find("input").val()) {
                nr = nr + 1;
                $(this).val(1);
              };
              if (nr == validate) {
                $(".js-btn-disabled").removeClass("no_action").removeAttr("onclick");
              } else {
                $(".js-btn-disabled").attr("onclick", "return false");
              };
            };
          });
        });
        $(".gq-modal__content #modal-content").scroll(function () {
          $(".scrolldown").hide();
        });
      }
    };
  
    // Lets color video.	
    $(".node-type-lets-color-article .js-play-button").click(function () {
      $(this).hide();
      $(this).closest(".video-container").find(".js-video-overlay").hide();
      $(this).closest(".video-container").find(".js-video-play").click();
    });
    $(".node-type-lets-color-article .js-video-play").click(function () {
      var $this = $(this),
        $videoPlayer = $this.closest(".video-container"),
        $videoPlayerIframe = $(".video-iframe", $videoPlayer);
      $videoPlayerIframe.prop("src", $(this).data("src"));
      $this.addClass("hide");
      if (($this).hasClass("youku")) {
        $videoPlayerIframe.prop("src", $videoPlayerIframe.prop("src")).removeClass("hide");
      } else {
        $videoPlayerIframe.prop("src", $videoPlayerIframe.prop("src") + "&autoplay=1").removeClass("hide");
      }
    });
    // Lets color replace share image.
    $(".node-type-lets-color-article .addthis_button img").attr("src", "/profiles/flourish/themes/custom/flourish_rem/images/icon_share.png");
    // Lets color - Avoid featured colors swatch-info overlap.
    $(".featured-colours__row .swatch-wrapper").on("click", function () {
      var swatchInfoHeight = $(this).find(".swatch-info").height();
      if (swatchInfoHeight > 72) {
        $(".row.bg-off-white").removeClass("margin-bottom-40").addClass("js-marginBottom-85");
      }
    });
  
    // Back to top scroll behaviour.	
    $(".back-to-top").on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > $(window).height()) {
        $(".back-to-top").fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });
  
  }(jQuery));
  
  //Function to convert hex format to a rgb color
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  // Reset filter for all main menu.
  $("body").on("click", ".clear-filter", function (e) {
    clear_filters();
    $.cookie("PlpActiveFilterCategory", null);
  });
  
  // PLP page title height
  var productTiles = function () {
  
    var cardTitle = ".js-product-card-title",
      productCard = ".js-product-card",
      iCount = 3;
  
    function _init() {
      $(window).on("resize", function (e) {
        if ($(window).width() >= 768) {
          $(cardTitle).css('height', "auto");
          setMinHeight();
        } else {
          $(cardTitle).css('height', "auto");
        }
      }).resize();
    }
  
    /**
     * Function to compare the height of an X amount of elements
     * Then, set the X amount of elements height to the biggest height found
     *
     */
    function setMinHeight() {
      var a_eJsProductCard = $(productCard);
      for (var i = 0; i < a_eJsProductCard.length; i += iCount) {
        // slice the array in chunks of iCount, to compare heights within a new array
        var a_eCurrentProductCard = a_eJsProductCard.slice(i, i + iCount),
          iHeightTitle = 0;
        a_eCurrentProductCard.each(function () {
          // Compare the current Height with the newest height to see which one is the biggest
          iHeightTitle = Math.max(iHeightTitle, $(this).find(cardTitle).height());
        });
        a_eCurrentProductCard.find(cardTitle).css('height', iHeightTitle);
      }
    };
  
    return {
      init: function init() {
        _init();
      }
    };
  }(jQuery);
  jQuery(function () {
    if (jQuery('body.page-products-listing').length) {
      productTiles.init();
    }
  })
  
  ; /*})'"*/ ; /*})'"*/
  const odOpenModal = (function ($) {
  
    /**
     * Init function
     */
    function init() {
  
      $('.onedomain-modal').children('.modal').bind('modalDisplayChanged', function () {
        // Show/hide od-modal depending on its child .modal
        $('.onedomain-modal').hide();
  
        setTimeout(function () {
          if ($(this).hasClass('in')) {
            $(this).parent().show()
          } else {
            $(this).parent().hide()
          }
        }.bind(this), 0);
      });
  
      // @todo: make function to close modal,
      // when click on <a class="modal__close-btn close" data-dismiss="modal" aria-label="Close">
  
      $('.onedomain-component [data-toggle="modal"]').on('click', function () {
        $($(this).attr('data-target')).trigger('modalDisplayChanged');
      })
    }
  
    return {
      init: function () {
        init();
      }
    };
  })(jQuery);
  
  jQuery(function () {
    odOpenModal.init();
  });
  
  ; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-notifications.js
   * @desc necessary scripts for notifications.
   **/
  
  var notificationBars = (function () {
  
    var dataURL = "",
      dataLink = "",
      dataText = "",
      sClassName = "";
  
    function initNotify() {
      // Set defaults for Notify.js.
      $.notify.defaults({
        // Whether to hide the notification on click.
        clickToHide: true,
        // Whether to auto-hide the notification || note:(put on TRUE after testing).
        autoHide: true,
        // If autoHide, hide after milliseconds.
        autoHideDelay: 4000,
        // Show the arrow pointing at the element.
        arrowShow: false,
        // Default style.
        style: 'notification',
        // Show animation.
        showAnimation: 'slideDown',
        // Show animation duration.
        showDuration: 400,
        // Hide animation.
        hideAnimation: 'slideUp',
        // Hide animation duration.
        hideDuration: 200,
      });
    }
  
    /**
     * Trigger
     */
    function triggerNotification() {
      // Remove style before creating it.
      $.notify.removeStyle("notification");
  
      // Add custom styles to Notify.js.
      $.notify.addStyle('notification', {
        html: "<div><span>" + dataText + "</span> " + "<a href='" + dataURL + "' class='inverted'>" + dataLink + "</a><div class='close-div'></div></div>",
        classes: {
          base: {},
          cart: {},
          shoppinglist: {},
          favourites: {}
        }
      });
  
      // Trigger the notification.
      $.notify({}, {
        style: 'notification',
        className: sClassName,
        position: 'top right'
      });
  
      // Wrapper is made after click by notify.js, so hence the timeout function.
      if ($(".notifyjs-corner").length) {
        $(".notifyjs-corner").insertAfter(".secondary-nav__nav");
      }
    }
  
    /**
     * @param $element
     * @param p_sClassName
     */
    function notifyByElement($element, p_sClassName) {
      dataURL = $element.data("url");
      dataLink = $element.data("link");
      dataText = $element.data("text");
      sClassName = p_sClassName;
  
      triggerNotification();
    }
  
    /**
     * @param sDataText
     * @param sDataLink
     * @param sURL
     */
    function notifyByInput(sDataText, sDataLink, sURL, p_sClassName) {
      dataURL = sURL;
      dataLink = sDataLink;
      dataText = sDataText;
      sClassName = p_sClassName;
  
      triggerNotification();
    }
  
    function init() {
  
      // Initiate the notify.js configuration settings.
      initNotify();
  
      // Click handler for ecom button interaction + notification.
      $(".js-notify[data-notify='cart']").on("click", function () {
        notifyByElement($(this), "cart");
      });
  
      // Click handler for shopping list button interaction + notification.
      $(".js-notify[data-notify='shopping-list']").on("click", function () {
        notifyByElement($(this), "shoppinglist");
      });
  
      // Click handler for favourite button(product) interaction + notification.
      $(".js-notify[data-notify='favourites']").on("click", function () {
        if (!$(this).hasClass("active")) {
          notifyByElement($(this), "favourites");
        }
      });
    }
  
    return {
      init: function () {
        init();
      },
      notifyCart: function (dataText, dataLink, sURL) {
        notifyByInput(dataText, dataLink, sURL, "cart");
      },
      notifyShoppingList: function (dataText, dataLink, sURL) {
        notifyByInput(dataText, dataLink, sURL, "shoppinglist");
      },
      notifyFavourites: function (dataText, dataLink, sURL) {
        notifyByInput(dataText, dataLink, sURL, "favourites");
      }
    };
  
  })(jQuery);
  
  jQuery(function () {
    notificationBars.init();
    // notificationBars.notifyShoppingList("test", "link", "url"); Use this to make your own notification.
  
    // PDP notification.
    if ($("body").hasClass("node-type-platform-product") && $(".alert.alert-success").length) {
      notificationBars.notifyShoppingList(Drupal.settings.navbar_details.sl_notification_text,
        Drupal.settings.navbar_details.sl_notification_link_text,
        Drupal.settings.navbar_details.sl_url);
    }
  
    // Shopping list page notification.
    if ($("body").hasClass("page-shoppinglist") && $(".alert.alert-success").length) {
      notificationBars.notifyShoppingList(Drupal.settings.navbar_details.sl_page_notification_text, "");
    }
  
  });
  
  ; /*})'"*/ ; /*})'"*/
  const deviceDetect = (function ($) {
  
    "use strict";
  
    const ua = window.navigator.userAgent;
    const iPad = !!ua.match(/iPad/i)
    const iPhone = !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const android = !!ua.match(/Android/i);
  
    const iPhoneSafari = iPhone && webkit && !ua.match(/CriOS/i) && !ua.match(/FxiOS/i);
  
    const iPadSafari = iPad && webkit && !ua.match(/CriOS/i) && !ua.match(/FxiOS/i);
  
    const iPhoneChrome = iPhone && ua.match(/CriOS/i);
  
    function init() {
  
      // detect iPhoneSafari
      if (iPhoneSafari) {
        $('body').addClass('os--ios iPhoneSafari')
      }
  
      // detect iPadSafari
      // if (iPadSafari) {
      //     $('body').addClass('iOS iPadSafari')
      // }
  
      // detect Android
      if (android) {
        $('body').addClass('os--android');
      }
  
  
      // detect iphonechrome
      if (iPhoneChrome) {
        $('body').addClass('os--ios iPhoneChrome');
      }
  
    }
  
    return {
      init: function () {
        init();
      }
    };
  
  })(jQuery);
  
  
  jQuery(function () {
    deviceDetect.init();
  });; /*})'"*/ ; /*})'"*/
  var JSvideo = (function ($) {
    "use strict";
  
    var sBtnSelector = ".js-video__play",
      sJSvideoWrapper = ".js-video",
      sJSvideoUrl = ".js-video__url",
      sJSvideoIframe = ".js-video__iframe",
      //hide after is used when the button play is clicked
      sHideAfter = ".js-video__hide-after";
  
    function init() {
      $(sBtnSelector).click(function (e) {
        var $videoJSWrapper = $(this).closest(sJSvideoWrapper),
          sVideoUrl = $videoJSWrapper.find(sJSvideoUrl).val(),
          $videoIFRAME = $videoJSWrapper.find(sJSvideoIframe);
  
        $videoJSWrapper.find(sHideAfter).hide();
  
        if (sVideoUrl.indexOf("autoplay=") == -1) {
          //autoplay not present in src; so lets add it
          sVideoUrl = sVideoUrl + '?autoplay=1';
        } else if (sVideoUrl.indexOf("autoplay=1") > -1) {
          //replace autoplay=1 with autoplay=0
          sVideoUrl = sVideoUrl.replace('autoplay=1', 'autoplay=0');
        } else {
          //replace autoplay=0 with autoplay=1
          sVideoUrl = sVideoUrl.replace('autoplay=0', 'autoplay=1');
        }
        $videoIFRAME.prop('src', sVideoUrl).removeClass('hide');
        e.preventDefault();
        //$videoIFRAME.prop('src', sVideoUrl + '&autoplay=1').removeClass('hide');
      });
    }
  
    return {
      init: init
    }
  
  })(jQuery);
  
  JSvideo.init();
  
  ; /*})'"*/ ; /*})'"*/
  /***
   * @file: flourish-color-detection.js
   * @desc necessary scripts for color detection.
   **/
  (function ($) {
    Drupal.behaviors.flourishColorDetection = {
      attach: function (context, settings) {
  
        // This variable will be eventually filled with the correct HEX color.
        var color = '';
        var options = ["dark-txt", "light-txt"];
  
        // Convert RGB to HEX.
        function rgbToHex(colorval) {
          var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
          if (parts != null) {
            delete(parts[0]);
            for (var i = 1; i <= 3; ++i) {
              parts[i] = parseInt(parts[i]).toString(16);
              if (parts[i].length == 1) {
                parts[i] = '0' + parts[i];
              }
            }
            color = '' + parts.join('');
          }
        }
  
        // Decide which classname to use based on YIQ contrast.
        function getContrastYIQ(hexcolor) {
          var r = parseInt(hexcolor.substr(0, 2), 16);
          var g = parseInt(hexcolor.substr(2, 2), 16);
          var b = parseInt(hexcolor.substr(4, 2), 16);
          var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
          return (yiq >= 128) ? options[0] : options[1];
        }
  
        // Find the current background-color and get a contrast outcome.
        window.getContrastClass = function (el) {
          var x = $(el).css("backgroundColor");
          rgbToHex(x);
          var answer = getContrastYIQ(color);
          $(el).removeClass(options[0]);
          $(el).removeClass(options[1]);
          $(el).addClass(answer);
        };
  
        // Check every element whith a class of "contrast-check" and bind the right classname to it.
        $(".contrast-check").each(function () {
          getContrastClass($(this));
        });
  
      }
    };
  }(jQuery));; /*})'"*/ ; /*})'"*/
  /*!
   * OneDomain components - Footer copyright current year - START
   */
  var Footer = function () {
    'use strict';
  
    function init() {
      updateCopyrightYear();
    }
  
    function updateCopyrightYear() {
      var yearLabels = document.getElementsByClassName('v2-footer-copyright-bar__current-year');
      [].forEach.call(yearLabels, function (elm) {
        if (elm.innerText !== new Date().getFullYear().toString()) {
          elm.innerText = new Date().getFullYear();
        }
      });
    }
  
    return {
      init: init
    };
  }(jQuery);
  
  jQuery(function () {
    Footer.init();
  });
  /*!
   * OneDomain components - Footer copyright current year - END
   */
  
  /*
   * toggleAccordion
   *
   * toggles the accordion state inside a group of accordions.
   *
   * requires an element with the class `js-toggle-accordion` and the attributes:
   * - `data-ta-selector-parent`: the selector of the parent, used to close the other contents
   * - `data-ta-selector-group`: the selecter for the element which will have the class toggled on
   *
   * see accordion material.
   *
   */
  var toggleAccordion = function () {
  
    var selectorToggle = '.js-toggle-accordion';
  
    function _init() {
      if ($(selectorToggle).length == 0) {
        return;
      }
  
      var classActive = 'accordion__group--active',
        classAccordionContent = 'js-accordion__group';
  
      $(selectorToggle).on('click', function () {
        var $this = $(this),
          selectorParent = $this.data('ta-selector-parent'),
          selectorGroup = $this.data('ta-selector-group'),
          allowMultipleOpened = $this.closest('#footer-accordion').data('ta-allow-multiple-opened') ? $this.closest('#footer-accordion').data('ta-allow-multiple-opened') : false,
          selectorAccordionContent = '.' + classAccordionContent;
  
        var targetContentWasOpen = $(selectorGroup).hasClass(classActive);
  
        if (!allowMultipleOpened) {
          // Close all content in this group
          $(selectorAccordionContent, $(selectorParent)).removeClass(classActive);
          $(selectorAccordionContent, $(selectorParent)).find('.accordion__content').slideUp(300);
        }
  
        // Open the targeted content if the user intended to open it
        if (!targetContentWasOpen) {
          $(selectorGroup).addClass(classActive);
          $(selectorGroup).find('.accordion__content').slideDown(300);
        } else {
          $(selectorGroup).removeClass(classActive);
          $(selectorGroup).find('.accordion__content').slideUp(300);
        }
      });
    }
  
    return {
      init: function init() {
        _init();
      }
    };
  }(jQuery);
  
  jQuery(function () {
    toggleAccordion.init();
  });; /*})'"*/ ; /*})'"*/
  /*!
   * OneDomain components - Smart app banner - START
   */
  var smartAppBannerActive = function () {
  
    function addObserverIfDesiredNodeAvailable() {
      var target = document.querySelector('div.js_smartbanner');
      var config = {
        attributes: false,
        childList: true,
        characterData: false
      };
      var observer = new MutationObserver(function (mutations) {
  
        var targetRemoved = mutations.some(function (mutation) {
          return mutation.removedNodes[0] === target;
        });
  
        if (targetRemoved) document.querySelector('body').classList.remove('smartbanner-present');
      });
  
      if (!target) {
        window.setTimeout(addObserverIfDesiredNodeAvailable, 500);
        return;
      }
      observer.observe(target.parentNode, config);
  
      document.querySelector('body').classList.add('smartbanner-present');
  
      $(".smartbanner__button").click(function () {
        analyticsEventCall('App banner', 'Click', window.os, undefined, false);
      });
    }
  
    function _init() {
      addObserverIfDesiredNodeAvailable();
    }
  
    return {
      init: function init() {
        _init();
      }
    };
  }(jQuery);
  
  jQuery(function () {
    smartAppBannerActive.init();
  });
  
  /*!
   * OneDomain components - Smart app banner - END
   */
  
  
  /*!
   * OneDomain components - VENDOR - Smart app banner - START
   */
  
  /*!
   * smartbanner.js v1.10.0 <https://github.com/ain/smartbanner.js>
   * Copyright Ă‚Â© 2018 Ain Tohvri, contributors. Licensed under GPL-3.0.
   */
  (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return require(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }
        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }
    return s;
  })({
    1: [function (require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
  
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var Bakery = function () {
        function Bakery() {
          _classCallCheck(this, Bakery);
        }
        _createClass(Bakery, null, [{
          key: "getCookieExpiresString",
          value: function getCookieExpiresString(hideTtl) {
            var now = new Date();
            var expireTime = new Date(now.getTime() + hideTtl);
            return "expires=" + expireTime.toGMTString() + ";";
          }
        }, {
          key: "getPathString",
          value: function getPathString(path) {
            return "path=" + path + ";";
          }
        }, {
          key: "bake",
          value: function bake(hideTtl) {
            var hidePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            document.cookie = "smartbanner_exited=1; " + (hideTtl ? Bakery.getCookieExpiresString(hideTtl) : "") + " " + (hidePath ? Bakery.getPathString(hidePath) : "");
          }
        }, {
          key: "unbake",
          value: function unbake() {
            document.cookie = "smartbanner_exited=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
          }
        }, {
          key: "baked",
          get: function get() {
            var value = document.cookie.replace(/(?:(?:^|.*;\s*)smartbanner_exited\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            return value === "1";
          }
        }]);
        return Bakery;
      }();
      exports.default = Bakery;
    }, {}],
    2: [function (require, module, exports) {
      (function (global) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
  
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var Detector = function () {
          function Detector() {
            _classCallCheck(this, Detector);
          }
          _createClass(Detector, null, [{
            key: "platform",
            value: function platform() {
              if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
                return "ios";
              } else if (/Android/i.test(window.navigator.userAgent)) {
                return "android";
              }
            }
          }, {
            key: "userAgentMatchesRegex",
            value: function userAgentMatchesRegex(regexString) {
              return new RegExp(regexString).test(window.navigator.userAgent);
            }
          }, {
            key: "jQueryMobilePage",
            value: function jQueryMobilePage() {
              return typeof global.$ !== "undefined" && global.$.mobile !== "undefined" && document.querySelector(".ui-page") !== null;
            }
          }, {
            key: "wrapperElement",
            value: function wrapperElement() {
              var selector = Detector.jQueryMobilePage() ? ".ui-page" : "html";
              return document.querySelectorAll(selector);
            }
          }]);
          return Detector;
        }();
        exports.default = Detector;
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    3: [function (require, module, exports) {
      "use strict";
      var _smartbanner = require("./smartbanner.js");
      var _smartbanner2 = _interopRequireDefault(_smartbanner);
  
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var smartbanner = void 0;
      window.addEventListener("load", function () {
        smartbanner = new _smartbanner2.default();
        smartbanner.publish();
      });
    }, {
      "./smartbanner.js": 5
    }],
    4: [function (require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
  
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
  
      function valid(name) {
        return name.indexOf("smartbanner:") !== -1 && name.split(":")[1].length > 0;
      }
  
      function convertToCamelCase(name) {
        var parts = name.split("-");
        parts.map(function (part, index) {
          if (index > 0) {
            parts[index] = part.charAt(0).toUpperCase() + part.substring(1);
          }
        });
        return parts.join("");
      }
      var OptionParser = function () {
        function OptionParser() {
          _classCallCheck(this, OptionParser);
        }
        _createClass(OptionParser, [{
          key: "parse",
          value: function parse() {
            var metas = document.getElementsByTagName("meta");
            var options = {};
            var optionName = null;
            Array.from(metas).forEach(function (meta) {
              var name = meta.getAttribute("name");
              var content = meta.getAttribute("content");
              if (name && content && valid(name) && content.length > 0) {
                optionName = name.split(":")[1];
                if (Array.from(optionName).includes("-")) {
                  optionName = convertToCamelCase(optionName);
                }
                options[optionName] = content;
              }
            });
            return options;
          }
        }]);
        return OptionParser;
      }();
      exports.default = OptionParser;
    }, {}],
    5: [function (require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _optionparser = require("./optionparser.js");
      var _optionparser2 = _interopRequireDefault(_optionparser);
      var _detector = require("./detector.js");
      var _detector2 = _interopRequireDefault(_detector);
      var _bakery = require("./bakery.js");
      var _bakery2 = _interopRequireDefault(_bakery);
  
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
  
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var DEFAULT_PLATFORMS = "android,ios";
      var datas = {
        originalTop: "data-smartbanner-original-top",
        originalMarginTop: "data-smartbanner-original-margin-top"
      };
  
      function handleExitClick(event, self) {
        self.exit();
        event.preventDefault();
      }
  
      function handleJQueryMobilePageLoad(event) {
        if (!this.positioningDisabled) {
          setContentPosition(event.data.height);
        }
      }
  
      function addEventListeners(self) {
        var closeIcon = document.querySelector(".js_smartbanner__exit");
        closeIcon.addEventListener("click", function (event) {
          return handleExitClick(event, self);
        });
        if (_detector2.default.jQueryMobilePage()) {
          $(document).on("pagebeforeshow", self, handleJQueryMobilePageLoad);
        }
      }
  
      function removeEventListeners() {
        if (_detector2.default.jQueryMobilePage()) {
          $(document).off("pagebeforeshow", handleJQueryMobilePageLoad);
        }
      }
  
      function setContentPosition(value) {
        var wrappers = _detector2.default.wrapperElement();
        for (var i = 0, l = wrappers.length, wrapper; i < l; i++) {
          wrapper = wrappers[i];
          if (_detector2.default.jQueryMobilePage()) {
            if (wrapper.getAttribute(datas.originalTop)) {
              continue;
            }
            var top = parseFloat(getComputedStyle(wrapper).top);
            wrapper.setAttribute(datas.originalTop, isNaN(top) ? 0 : top);
            wrapper.style.top = value + "px";
          } else {
            if (wrapper.getAttribute(datas.originalMarginTop)) {
              continue;
            }
            var margin = parseFloat(getComputedStyle(wrapper).marginTop);
            wrapper.setAttribute(datas.originalMarginTop, isNaN(margin) ? 0 : margin);
            wrapper.style.marginTop = value + "px";
          }
        }
      }
  
      function restoreContentPosition() {
        var wrappers = _detector2.default.wrapperElement();
        for (var i = 0, l = wrappers.length, wrapper; i < l; i++) {
          wrapper = wrappers[i];
          if (_detector2.default.jQueryMobilePage() && wrapper.getAttribute(datas.originalTop)) {
            wrapper.style.top = wrapper.getAttribute(datas.originalTop) + "px";
          } else if (wrapper.getAttribute(datas.originalMarginTop)) {
            wrapper.style.marginTop = wrapper.getAttribute(datas.originalMarginTop) + "px";
          }
        }
      }
      var SmartBanner = function () {
        function SmartBanner() {
          _classCallCheck(this, SmartBanner);
          var parser = new _optionparser2.default();
          this.options = parser.parse();
          this.platform = _detector2.default.platform();
        }
        _createClass(SmartBanner, [{
          key: "publish",
          value: function publish() {
            if (Object.keys(this.options).length === 0) {
              throw new Error("No options detected. Please consult documentation.");
            }
            if (_bakery2.default.baked) {
              return false;
            }
            if (this.userAgentExcluded) {
              return false;
            }
            if (!(this.platformEnabled || this.userAgentIncluded)) {
              return false;
            }
            var bannerDiv = document.createElement("div");
            document.querySelector("body").appendChild(bannerDiv);
            bannerDiv.outerHTML = this.html;
            if (!this.positioningDisabled) {
              setContentPosition(this.height);
            }
            addEventListeners(this);
          }
        }, {
          key: "exit",
          value: function exit() {
            removeEventListeners();
            if (!this.positioningDisabled) {
              restoreContentPosition();
            }
            var banner = document.querySelector(".js_smartbanner");
            document.querySelector("body").removeChild(banner);
            _bakery2.default.bake(this.hideTtl, this.hidePath);
          }
        }, {
          key: "originalTop",
          get: function get() {
            var wrapper = _detector2.default.wrapperElement()[0];
            return parseFloat(wrapper.getAttribute(datas.originalTop));
          }
        }, {
          key: "originalTopMargin",
          get: function get() {
            var wrapper = _detector2.default.wrapperElement()[0];
            return parseFloat(wrapper.getAttribute(datas.originalMarginTop));
          }
        }, {
          key: "priceSuffix",
          get: function get() {
            if (this.platform === "ios") {
              return this.options.priceSuffixApple;
            } else if (this.platform === "android") {
              return this.options.priceSuffixGoogle;
            }
            return "";
          }
        }, {
          key: "icon",
          get: function get() {
            if (this.platform === "android") {
              return this.options.iconGoogle;
            } else {
              return this.options.iconApple;
            }
          }
        }, {
          key: "buttonUrl",
          get: function get() {
            if (this.platform === "android") {
              return this.options.buttonUrlGoogle;
            } else if (this.platform === "ios") {
              return this.options.buttonUrlApple;
            }
            return "#";
          }
        }, {
          key: "html",
          get: function get() {
            var modifier = !this.options.customDesignModifier ? this.platform : this.options.customDesignModifier;
            return '<div class="smartbanner smartbanner--' + modifier + ' js_smartbanner">\n      <a href="javascript:void();" class="smartbanner__exit js_smartbanner__exit"></a>\n      <div class="smartbanner__icon" style="background-image: url(' + this.icon + ');"></div>\n      <div class="smartbanner__info">\n        <div>\n          <div class="smartbanner__info__title">' + this.options.title + '</div>\n          <div class="smartbanner__info__author">' + this.options.author + '</div>\n          <div class="smartbanner__info__price">' + this.options.price + this.priceSuffix + '</div>\n        </div>\n      </div>\n      <a href="' + this.buttonUrl + '" target="_blank" class="smartbanner__button"><span class="smartbanner__button__label">' + this.options.button + "</span></a>\n    </div>";
          }
        }, {
          key: "height",
          get: function get() {
            var height = document.querySelector(".js_smartbanner").offsetHeight;
            return height !== undefined ? height : 0;
          }
        }, {
          key: "platformEnabled",
          get: function get() {
            var enabledPlatforms = this.options.enabledPlatforms || DEFAULT_PLATFORMS;
            return enabledPlatforms && enabledPlatforms.replace(/\s+/g, "").split(",").indexOf(this.platform) !== -1;
          }
        }, {
          key: "positioningDisabled",
          get: function get() {
            return this.options.disablePositioning === "true";
          }
        }, {
          key: "userAgentExcluded",
          get: function get() {
            if (!this.options.excludeUserAgentRegex) {
              return false;
            }
            return _detector2.default.userAgentMatchesRegex(this.options.excludeUserAgentRegex);
          }
        }, {
          key: "userAgentIncluded",
          get: function get() {
            if (!this.options.includeUserAgentRegex) {
              return false;
            }
            return _detector2.default.userAgentMatchesRegex(this.options.includeUserAgentRegex);
          }
        }, {
          key: "hideTtl",
          get: function get() {
            return this.options.hideTtl ? parseInt(this.options.hideTtl) : false;
          }
        }]);
        return SmartBanner;
      }();
      exports.default = SmartBanner;
    }, {
      "./bakery.js": 1,
      "./detector.js": 2,
      "./optionparser.js": 4
    }]
  }, {}, [3]);
  
  /*!
   * OneDomain components - VENDOR - Smart app banner - END
   */
  ; /*})'"*/ ; /*})'"*/
  (function ($) {
    'use strict';
  
    Drupal.behaviors.eu_cookie_compliance_popup = {
      attach: function (context, settings) {
        $('body', context).once('eu-cookie-compliance', function () {
          // If configured, check JSON callback to determine if in EU.
          if (Drupal.settings.eu_cookie_compliance.popup_eu_only_js) {
            if (Drupal.eu_cookie_compliance.showBanner()) {
              var url = Drupal.settings.basePath + Drupal.settings.pathPrefix + 'eu-cookie-compliance-check';
              var data = {};
              $.getJSON(url, data, function (data) {
                // If in the EU, show the compliance banner.
                if (data.in_eu) {
                  Drupal.eu_cookie_compliance.execute();
                }
  
                // If not in EU, set an agreed cookie automatically.
                else {
                  Drupal.eu_cookie_compliance.setStatus(2);
                }
              });
            }
          }
  
          // Otherwise, fallback to standard behavior which is to render the banner.
          else {
            Drupal.eu_cookie_compliance.execute();
          }
        });
      }
    };
  
    Drupal.eu_cookie_compliance = {};
  
    Drupal.eu_cookie_compliance.execute = function () {
      try {
        if (!Drupal.settings.eu_cookie_compliance.popup_enabled) {
          return;
        }
  
        if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
          return;
        }
  
        Drupal.eu_cookie_compliance.updateCheck();
        var status = Drupal.eu_cookie_compliance.getCurrentStatus();
        if ((status === 0 && Drupal.settings.eu_cookie_compliance.method === 'default') || status === null) {
          if (!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
            // Detect mobile here and use mobile_popup_html_info, if we have a mobile device.
            if (window.matchMedia('(max-width: ' + Drupal.settings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && Drupal.settings.eu_cookie_compliance.use_mobile_message) {
              Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.mobile_popup_html_info);
            } else {
              Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_info);
            }
  
            Drupal.eu_cookie_compliance.attachAgreeEvents();
          }
        } else if (status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) {
          Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_agreed);
          Drupal.eu_cookie_compliance.attachHideEvents();
        } else if (status === 2 && Drupal.settings.eu_cookie_compliance.withdraw_enabled) {
          Drupal.eu_cookie_compliance.createWithdrawBanner(Drupal.settings.eu_cookie_compliance.withdraw_markup);
          Drupal.eu_cookie_compliance.attachWithdrawEvents();
        }
      } catch (e) {}
    };
  
    Drupal.eu_cookie_compliance.createWithdrawBanner = function (html) {
      var $html = $('<div></div>').html(html);
      var $banner = $('.eu-cookie-withdraw-banner', $html);
      $html.attr('id', 'sliding-popup');
      $html.addClass('eu-cookie-withdraw-wrapper');
  
      if (!Drupal.settings.eu_cookie_compliance.popup_use_bare_css) {
        $banner.height(Drupal.settings.eu_cookie_compliance.popup_height)
          .width(Drupal.settings.eu_cookie_compliance.popup_width);
      }
      $html.hide();
      var height = 0;
      if (Drupal.settings.eu_cookie_compliance.popup_position) {
        $html.prependTo('body');
        height = $html.outerHeight();
  
        $html.show()
          .addClass('sliding-popup-top')
          .addClass('clearfix')
          .css({
            top: -1 * height
          });
        // For some reason, the tab outerHeight is -10 if we don't use a timeout
        // function to reveal the tab.
        setTimeout(function () {
          $html.animate({
            top: -1 * height
          }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
            $html.trigger('eu_cookie_compliance_popup_open');
          });
        }.bind($html, height), 0);
      } else {
        if (Drupal.settings.eu_cookie_compliance.better_support_for_screen_readers) {
          $html.prependTo('body');
        } else {
          $html.appendTo('body');
        }
        height = $html.outerHeight();
        $html.show()
          .addClass('sliding-popup-bottom')
          .css({
            bottom: -1 * height
          });
        // For some reason, the tab outerHeight is -10 if we don't use a timeout
        // function to reveal the tab.
        setTimeout(function () {
          $html.animate({
            bottom: -1 * height
          }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
            $html.trigger('eu_cookie_compliance_popup_open');
          });
        }.bind($html, height), 0);
      }
    };
  
    Drupal.eu_cookie_compliance.toggleWithdrawBanner = function () {
      var $wrapper = $('#sliding-popup');
      var $tab = $('.eu-cookie-withdraw-tab');
      var $bannerIsShowing = Drupal.settings.eu_cookie_compliance.popup_position ? parseInt($wrapper.css('top')) === 0 : parseInt($wrapper.css('bottom')) === 0;
      var topBottom = (Drupal.settings.eu_cookie_compliance.popup_position ? 'top' : 'bottom');
      var height = $wrapper.outerHeight();
      if (Drupal.settings.eu_cookie_compliance.popup_position) {
        if ($bannerIsShowing) {
          $wrapper.animate({
            'top': -1 * height
          }, Drupal.settings.eu_cookie_compliance.popup_delay);
        } else {
          $wrapper.animate({
            'top': 0
          }, Drupal.settings.eu_cookie_compliance.popup_delay);
        }
      } else {
        if ($bannerIsShowing) {
          $wrapper.animate({
            'bottom': -1 * height
          }, Drupal.settings.eu_cookie_compliance.popup_delay);
        } else {
          $wrapper.animate({
            'bottom': 0
          }, Drupal.settings.eu_cookie_compliance.popup_delay);
        }
      }
    };
  
    Drupal.eu_cookie_compliance.createPopup = function (html) {
      // This fixes a problem with jQuery 1.9.
      var $popup = $('<div></div>').html(html);
      $popup.attr('id', 'sliding-popup');
      if (!Drupal.settings.eu_cookie_compliance.popup_use_bare_css) {
        $popup.height(Drupal.settings.eu_cookie_compliance.popup_height)
          .width(Drupal.settings.eu_cookie_compliance.popup_width);
      }
  
      $popup.hide();
      var height = 0;
      if (Drupal.settings.eu_cookie_compliance.popup_position) {
        $popup.prependTo('body');
        height = $popup.outerHeight();
        $popup.show()
          .attr({
            class: 'sliding-popup-top clearfix'
          })
          .css({
            top: -1 * height
          })
          .animate({
            top: 0
          }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
            $popup.trigger('eu_cookie_compliance_popup_open');
          });
      } else {
        if (Drupal.settings.eu_cookie_compliance.better_support_for_screen_readers) {
          $popup.prependTo('body');
        } else {
          $popup.appendTo('body');
        }
  
        height = $popup.outerHeight();
        $popup.show()
          .attr({
            class: 'sliding-popup-bottom'
          })
          .css({
            bottom: -1 * height
          })
          .animate({
            bottom: 0
          }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
            $popup.trigger('eu_cookie_compliance_popup_open');
          });
      }
    };
  
    Drupal.eu_cookie_compliance.attachAgreeEvents = function () {
      var clickingConfirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
      var scrollConfirms = Drupal.settings.eu_cookie_compliance.popup_scrolling_confirmation;
  
      $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAction);
      $('.decline-button').click(Drupal.eu_cookie_compliance.declineAction);
  
      if (clickingConfirms) {
        $('a, input[type=submit], button[type=submit]').bind('click.euCookieCompliance', Drupal.eu_cookie_compliance.acceptAction);
      }
  
      if (scrollConfirms) {
        var alreadyScrolled = false;
        var scrollHandler = function () {
          if (alreadyScrolled) {
            Drupal.eu_cookie_compliance.acceptAction();
            $(window).off('scroll', scrollHandler);
          } else {
            alreadyScrolled = true;
          }
        };
  
        $(window).bind('scroll', scrollHandler);
      }
  
      $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
    };
  
    Drupal.eu_cookie_compliance.attachHideEvents = function () {
      var popupHideAgreed = Drupal.settings.eu_cookie_compliance.popup_hide_agreed;
      var clickingConfirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
      $('.hide-popup-button').click(function () {
        Drupal.eu_cookie_compliance.changeStatus(2);
      });
      if (clickingConfirms) {
        $('a, input[type=submit], button[type=submit]').unbind('click.euCookieCompliance');
      }
  
      if (popupHideAgreed) {
        $('a, input[type=submit], button[type=submit]').bind('click.euCookieComplianceHideAgreed', function () {
          Drupal.eu_cookie_compliance.changeStatus(2);
        });
      }
  
      $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
    };
  
    Drupal.eu_cookie_compliance.attachWithdrawEvents = function () {
      $('.eu-cookie-withdraw-button').click(Drupal.eu_cookie_compliance.withdrawAction);
      $('.eu-cookie-withdraw-tab').click(Drupal.eu_cookie_compliance.toggleWithdrawBanner);
    };
  
    Drupal.eu_cookie_compliance.acceptAction = function () {
      var agreedEnabled = Drupal.settings.eu_cookie_compliance.popup_agreed_enabled;
      var nextStatus = 1;
      if (!agreedEnabled) {
        Drupal.eu_cookie_compliance.setStatus(1);
        nextStatus = 2;
      }
  
      if (!euCookieComplianceHasLoadedScripts) {
        euCookieComplianceLoadScripts();
      }
  
      if (typeof euCookieComplianceBlockCookies !== 'undefined') {
        clearInterval(euCookieComplianceBlockCookies);
      }
  
      Drupal.eu_cookie_compliance.changeStatus(nextStatus);
    };
  
    Drupal.eu_cookie_compliance.declineAction = function () {
      Drupal.eu_cookie_compliance.setStatus(0);
      let popup = $('#sliding-popup');
      if (popup.hasClass('sliding-popup-top')) {
        popup.animate({
          top: popup.outerHeight() * -1
        }).trigger('eu_cookie_compliance_popup_close');
      } else {
        popup.animate({
          bottom: popup.outerHeight() * -1
        }).trigger('eu_cookie_compliance_popup_close');
      }
    };
  
    Drupal.eu_cookie_compliance.withdrawAction = function () {
      Drupal.eu_cookie_compliance.setStatus(null);
      location.reload();
    };
  
    Drupal.eu_cookie_compliance.moreInfoAction = function () {
      if (Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup) {
        Drupal.eu_cookie_compliance.setStatus(0);
        $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
      } else {
        if (Drupal.settings.eu_cookie_compliance.popup_link_new_window) {
          window.open(Drupal.settings.eu_cookie_compliance.popup_link);
        } else {
          window.location.href = Drupal.settings.eu_cookie_compliance.popup_link;
        }
      }
    };
  
    Drupal.eu_cookie_compliance.getCurrentStatus = function () {
      var cookieName = (typeof eu_cookie_compliance_cookie_name === 'undefined' || eu_cookie_compliance_cookie_name === '') ? 'cookie-agreed' : eu_cookie_compliance_cookie_name;
      var value = $.cookie(cookieName);
      value = parseInt(value);
      if (isNaN(value)) {
        value = null;
      }
  
      return value;
    };
  
    Drupal.eu_cookie_compliance.changeStatus = function (value) {
      var status = Drupal.eu_cookie_compliance.getCurrentStatus();
      var reloadPage = Drupal.settings.eu_cookie_compliance.reload_page;
      if (status === value) {
        return;
      }
  
      if (Drupal.settings.eu_cookie_compliance.popup_position) {
        $('.sliding-popup-top').animate({
          top: $('#sliding-popup').outerHeight() * -1
        }, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
          if (status === null && !reloadPage) {
            $('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({
              top: 0
            }, Drupal.settings.eu_cookie_compliance.popup_delay);
            Drupal.eu_cookie_compliance.attachHideEvents();
          } else if (status === 1) {
            $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
          }
        });
      } else {
        $('.sliding-popup-bottom').animate({
          bottom: $('#sliding-popup').outerHeight() * -1
        }, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
          if (status === null && !reloadPage) {
            $('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({
              bottom: 0
            }, Drupal.settings.eu_cookie_compliance.popup_delay);
            Drupal.eu_cookie_compliance.attachHideEvents();
          } else if (status === 1) {
            $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
          }
        });
      }
  
      if (reloadPage) {
        location.reload();
      }
  
      if (value === 2 && Drupal.settings.eu_cookie_compliance.withdraw_enabled) {
        Drupal.eu_cookie_compliance.createWithdrawBanner(Drupal.settings.eu_cookie_compliance.withdraw_markup);
        Drupal.eu_cookie_compliance.attachWithdrawEvents();
      }
  
      Drupal.eu_cookie_compliance.setStatus(value);
    };
  
    Drupal.eu_cookie_compliance.setStatus = function (status) {
      var date = new Date();
      var domain = Drupal.settings.eu_cookie_compliance.domain ? Drupal.settings.eu_cookie_compliance.domain : '';
      var path = Drupal.settings.basePath;
      var cookieName = (typeof eu_cookie_compliance_cookie_name === 'undefined' || eu_cookie_compliance_cookie_name === '') ? 'cookie-agreed' : eu_cookie_compliance_cookie_name;
      if (path.length > 1) {
        var pathEnd = path.length - 1;
        if (path.lastIndexOf('/') === pathEnd) {
          path = path.substring(0, pathEnd);
        }
      }
  
  
      var cookieSession = parseInt(Drupal.settings.eu_cookie_compliance.cookie_session);
      if (cookieSession) {
        $.cookie(cookieName, status, {
          path: path,
          domain: domain
        });
      } else {
        var lifetime = parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime);
        date.setDate(date.getDate() + lifetime);
        $.cookie(cookieName, status, {
          expires: date,
          path: path,
          domain: domain
        });
      }
      $(document).trigger('eu_cookie_compliance.changeStatus', [status]);
  
      // Store consent if applicable.
      if (Drupal.settings.eu_cookie_compliance.store_consent && ((status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) || (status === 2 && !Drupal.settings.eu_cookie_compliance.popup_agreed_enabled))) {
        var url = Drupal.settings.basePath + Drupal.settings.pathPrefix + 'eu-cookie-compliance/store_consent/banner';
        $.post(url, {}, function (data) {});
      }
    };
  
    Drupal.eu_cookie_compliance.hasAgreed = function () {
      var status = Drupal.eu_cookie_compliance.getCurrentStatus();
      return (status === 1 || status === 2);
    };
  
    Drupal.eu_cookie_compliance.showBanner = function () {
      var showBanner = false;
      var status = Drupal.eu_cookie_compliance.getCurrentStatus();
      if ((status === 0 && Drupal.settings.eu_cookie_compliance.method === 'default') || status === null) {
        if (!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
          showBanner = true;
        }
      } else if (status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) {
        showBanner = true;
      }
  
      return showBanner;
    };
  
    Drupal.eu_cookie_compliance.cookiesEnabled = function () {
      var cookieEnabled = navigator.cookieEnabled;
      if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
        document.cookie = 'testCookie';
        cookieEnabled = (document.cookie.indexOf('testCookie') !== -1);
      }
  
      return cookieEnabled;
    };
  
    // This code upgrades the cookie agreed status when upgrading for an old version.
    Drupal.eu_cookie_compliance.updateCheck = function () {
      var legacyCookie = 'cookie-agreed-' + Drupal.settings.eu_cookie_compliance.popup_language;
      var domain = Drupal.settings.eu_cookie_compliance.domain ? Drupal.settings.eu_cookie_compliance.domain : '';
      var path = Drupal.settings.basePath;
      var cookie = $.cookie(legacyCookie);
      var date = new Date();
      var cookieName = (typeof eu_cookie_compliance_cookie_name === 'undefined' || eu_cookie_compliance_cookie_name === '') ? 'cookie-agreed' : eu_cookie_compliance_cookie_name;
  
      // jQuery.cookie 1.0 (bundled with Drupal) returns null,
      // jQuery.cookie 1.4.1 (bundled with some themes) returns undefined.
      // We had a 1.4.1 related bug where the value was set to 'null' (string).
      if (cookie !== undefined && cookie !== null && cookie !== 'null') {
        date.setDate(date.getDate() + parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime));
        $.cookie(cookieName, cookie, {
          expires: date,
          path: path,
          domain: domain
        });
  
        // Use removeCookie if the function exists.
        if (typeof $.removeCookie !== 'undefined') {
          $.removeCookie(legacyCookie);
        } else {
          $.cookie(legacyCookie, null, {
            path: path,
            domain: domain
          });
        }
      }
    };
  
    // Load blocked scripts if the user has agreed to being tracked.
    var euCookieComplianceHasLoadedScripts = false;
    $(function () {
      if (Drupal.eu_cookie_compliance.hasAgreed() ||
        (Drupal.eu_cookie_compliance.getCurrentStatus() === null && Drupal.settings.eu_cookie_compliance.method !== 'opt_in')
      ) {
        euCookieComplianceLoadScripts();
        euCookieComplianceHasLoadedScripts = true;
      }
    });
  
    // Block cookies when the user hasn't agreed.
    Drupal.behaviors.eu_cookie_compliance_popup_block_cookies = {
      attach: function (context, settings) {
        $(document).ready(function () {
          if ((settings.eu_cookie_compliance.method === 'opt_in' && (Drupal.eu_cookie_compliance.getCurrentStatus() === null || !Drupal.eu_cookie_compliance.hasAgreed())) ||
            (settings.eu_cookie_compliance.method === 'opt_out' && !Drupal.eu_cookie_compliance.hasAgreed() && Drupal.eu_cookie_compliance.getCurrentStatus() !== null)
          ) {
            // Split the white-listed cookies.
            var euCookieComplianceWhitelist = settings.eu_cookie_compliance.whitelisted_cookies.split(/\r\n|\n|\r/g);
  
            // Add the EU Cookie Compliance cookie.
            euCookieComplianceWhitelist.push((settings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : settings.eu_cookie_compliance.cookie_name);
            var euCookieComplianceBlockCookies = setInterval(function () {
              // Load all cookies from jQuery.
              var cookies = $.cookie();
  
              // Check each cookie and try to remove it if it's not white-listed.
              for (var i in cookies) {
                var remove = true;
                var hostname = window.location.hostname;
                var cookieRemoved = false;
                var index = 0;
  
                // Skip the PHP session cookie.
                if (i.indexOf('SESS') === 0 || i.indexOf('SSESS') === 0) {
                  remove = false;
                }
  
                // Check if the cookie is white-listed.
                for (var item in euCookieComplianceWhitelist) {
                  if (i === euCookieComplianceWhitelist[item]) {
                    remove = false;
                  }
                }
  
                // Remove the cookie if it's not white-listed.
                if (remove) {
                  while (!cookieRemoved && hostname !== '') {
                    // Attempt to remove.
                    cookieRemoved = $.removeCookie(i, {
                      domain: '.' + hostname,
                      path: '/'
                    });
                    if (!cookieRemoved) {
                      cookieRemoved = $.removeCookie(i, {
                        domain: hostname,
                        path: '/'
                      });
                    }
  
                    index = hostname.indexOf('.');
  
                    // We can be on a sub-domain, so keep checking the main domain as well.
                    hostname = (index === -1) ? '' : hostname.substring(index + 1);
                  }
                }
              }
            }, 5000);
          }
        });
      }
    }
  
  })(jQuery);
  
  ; /*})'"*/ ; /*})'"*/