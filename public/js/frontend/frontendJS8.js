// ### server injected code ###
var gigya = window.gigya;
if (typeof gigya == 'undefined' || !gigya.isGigya) {
  gigya = {
    isGigya: true
  }
};
gigya.env = 'prod';
gigya.gaeDomain = 'chat.gigya.com';
gigya.defaultApiDomain = 'gigya.com';
gigya.dataCenter = 'eu1';
gigya.build = {
  "number": 2155,
  "version": "latest",
  "chico": true
};

if (typeof gigya.partnerSettings == 'undefined') {
  gigya.partnerSettings = {
    "authMode": "cookie",
    "captchaProvider": "Google",
    "plugins": {
      "connectWithoutLoginBehavior": "alwaysLogin",
      "sessionExpiration": -2,
      "rememberSessionExpiration": 0,
      "apiDomain": "eu1.gigya.com"
    },
    "baseDomains": "dulux.vn,vn.mtpreprod.deco-columbus.com,vn.mtprod.deco-columbus.com,vn.mtqa.deco-columbus.com,od-*-dulux-vn.deco-columbus.com"
  };
}
gigya.providersConfig = {};
gigya.samlConfig = {
  "errorPageURL": null,
  "proxyPageURL": null
};
gigya.canary = gigya.canary || {
  isActive: false,
  config: {
    "version": "2155-1-25775535",
    "isEnabled": true,
    "probability": 1,
    "cookiesNames": {
      "isCanary": "gig_canary",
      "version": "gig_canary_ver"
    }
  }
};
gigya.errorReport = {
  "enabled": true,
  "probability": 2
};
gigya.bypassCaptchaV1 = true;
var gigya;
! function (gigya) {
  var canary;
  ! function (canary) {
    var CookieProvider = function () {
      function o() {}
      return o.prototype.get = function (o) {
        var a = document.cookie.match(new RegExp(o + "=([^$;]*)")),
          i = a ? a[1] : null;
        return i
      }, o.prototype.put = function (o, a) {
        document.cookie = o + "=" + a + ";path=/;domain=." + location.hostname
      }, o.prototype.remove = function (o) {
        document.cookie = o + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain=." + location.hostname
      }, o
    }();
    canary.CookieProvider = CookieProvider;
    var Canary = function () {
      function Canary(o, a, i, r, n, t) {
        void 0 === i && (i = new CookieProvider), void 0 === r && (r = o.cookiesNames), void 0 === n && (n = function () {
          return new XMLHttpRequest
        }), void 0 === t && (t = function () {
          return 100 * Math.random()
        }), this._config = o, this._scriptUrl = a, this._cookieProvider = i, this._cookiesNames = r, this._xhrFactory = n, this._random = t
      }
      return Canary.prototype.shouldCanary = function () {
        return this.wasCanarySet() ? "true" == this._cookieProvider.get(this._cookiesNames.isCanary) : this.rollCanary()
      }, Canary.prototype.wasCanarySet = function () {
        return this._cookieProvider.get(this._cookiesNames.isCanary) && this._cookieProvider.get(this._cookiesNames.version) == this._config.version
      }, Canary.prototype.rollCanary = function () {
        var o = this._random() <= this._config.probability;
        return this._cookieProvider.put(this._cookiesNames.isCanary, o.toString()), this._cookieProvider.put(this._cookiesNames.version, this._config.version), o
      }, Canary.prototype.onCanaryLoadFail = function () {
        canary.isActive = !1
      }, Canary.prototype.loadCanaryVersion = function () {
        var _this = this,
          xhr = this._xhrFactory();
        xhr.open("GET", this._scriptUrl + "&version=canary", !1), xhr.onload = function (res) {
          if (4 !== xhr.readyState || 200 !== xhr.status) _this.onCanaryLoadFail();
          else try {
            eval(xhr.responseText), canary.isActive = !0
          } catch (o) {
            _this.onCanaryLoadFail()
          }
        };
        try {
          xhr.send(null)
        } catch (o) {
          this.onCanaryLoadFail()
        }
      }, Canary.prototype.bootstrap = function (o) {
        void 0 === o && (o = !canary.isActive), this._config.probability ? o && this.shouldCanary() && this.loadCanaryVersion() : (this._cookieProvider.remove(this._cookiesNames.isCanary), this._cookieProvider.remove(this._cookiesNames.version))
      }, Canary
    }();
    canary.Canary = Canary
  }(canary = gigya.canary || (gigya.canary = {}))
}(gigya || (gigya = {}));
var gigya;
! function (o) {
  var a;
  ! function (o) {
    var a = document.currentScript,
      i = a && a.src,
      r = new o.Canary(o.config, i);
    r.bootstrap()
  }(a = o.canary || (o.canary = {}))
}(gigya || (gigya = {}));
if (gigya.canary && gigya.canary.isActive) {} else if (gigya.__initialized) {
  console.warn('**** gigya.js loaded twice ****');
} else {
  gigya.__initialized = true;
  // ### end server injected code ###
  // API adapters
  var __extends = this && this.__extends || function () {
      var e = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (e, t) {
        e.__proto__ = t
      } || function (e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
      };
      return function (t, i) {
        function o() {
          this.constructor = t
        }
        e(t, i), t.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
      }
    }(),
    __gig_awaiter = this && this.__gig_awaiter || function (e, t, i, o) {
      return new(i || (i = Promise))(function (n, r) {
        function s(e) {
          try {
            c(o.next(e))
          } catch (e) {
            r(e)
          }
        }

        function a(e) {
          try {
            c(o.throw(e))
          } catch (e) {
            r(e)
          }
        }

        function c(e) {
          e.done ? n(e.value) : new i(function (t) {
            t(e.value)
          }).then(s, a)
        }
        c((o = o.apply(e, t || [])).next())
      })
    },
    __gig_generator = this && this.__gig_generator || function (e, t) {
      function i(e) {
        return function (t) {
          return o([e, t])
        }
      }

      function o(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; c;) try {
          if (n = 1, r && (s = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(r, i[1])).done) return s;
          switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
              s = i;
              break;
            case 4:
              return c.label++, {
                value: i[1],
                done: !1
              };
            case 5:
              c.label++, r = i[1], i = [0];
              continue;
            case 7:
              i = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                c = 0;
                continue
              }
              if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                c.label = i[1];
                break
              }
              if (6 === i[0] && c.label < s[1]) {
                c.label = s[1], s = i;
                break
              }
              if (s && c.label < s[2]) {
                c.label = s[2], c.ops.push(i);
                break
              }
              s[2] && c.ops.pop(), c.trys.pop();
              continue
          }
          i = t.call(e, c)
        } catch (e) {
          i = [6, e], r = 0
        } finally {
          n = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        }
      }
      var n, r, s, a, c = {
        label: 0,
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1]
        },
        trys: [],
        ops: []
      };
      return a = {
        next: i(0),
        throw: i(1),
        return: i(2)
      }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
        return this
      }), a
    },
    gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        var i;
        ! function (t) {
          var i;
          ! function (t) {
            function i(t, i) {
              if (!e.partnerSettings.ssoKey) return void(i && i.callback && i.callback({}));
              var n;
              n = i ? e.utils.object.clone(i) : {};
              var r, s = function (t) {
                e.logger.debug("cleaning sso iframe"), r.parentNode.removeChild(r), t && (t.errorCode && "string" == typeof t.errorCode && (t.errorCode = Number(t.errorCode)), t.expires_in && "string" == typeof t.expires_in && (t.expires_in = Number(t.expires_in))), i && i.callback && i.callback(t)
              };
              n.m = t, n.d = e.localInfo.protocol + "://" + document.location.hostname, document.location.port && (n.d += ":" + document.location.port), n.lid = e.utils.xd._flashListenerID, "string" == typeof e.thisScript.globalConf.legacyCrossSiteMethod && "localstorage" !== e.thisScript.globalConf.legacyCrossSiteMethod.toLowerCase() && (n.lid = e.thisScript.globalConf.legacyCrossSiteMethod + ":" + e.utils.xd._flashListenerID), n.callbackID = "gig_sso_cb" + (new Date).getTime() + "_" + d++, e.utils.xd.addMessageListener(n.callbackID, {}, !1, s), n.sAPIKey = e.thisScript.APIKey, n[e.logger.configKey] = JSON.stringify(e.logger.getConfig());
              var a = e.utils.keyValue.serialize(n);
              r = o(n.callbackID);
              var c = function () {
                var t = e.utils.keyValue.serialize({
                  APIKey: e.partnerSettings.ssoKey,
                  ssoSegment: e.partnerSettings.ssoSegment || "",
                  version: e.build.version,
                  build: e.build.number || -1
                });
                r.src = "https://" + (e.thisScript.globalConf.storageDomainOverride || e._.getGigyaDomain("cdns")) + "/gs/sso.htm?" + t + "#" + a, e.utils.DOM.removeEventListener(r, "load", c)
              };
              e.utils.DOM.addEventListener(r, "load", c), e.logger.debug("opening sso iframe", n), document.body ? e.utils.DOM.appendToBody(r) : e.utils.functions.invokeOnPageLoad(function () {
                return e.utils.DOM.appendToBody(r)
              })
            }

            function o(t) {
              var i = document.getElementById("gig_sso");
              return i = document.createElement("iframe"), e.localInfo.isIOS || e.localInfo.isIOSChrome || e.localInfo.isAndroid ? (i.style.width = "0px", i.style.height = "0px", i.style.display = "none") : (i.style.width = "30px", i.style.height = "10px", i.style.position = "absolute", i.style.top = "-1000px", i.style.left = "-1000px"), i.id = "gig_sso_" + t, e.utils.functions.addSrcToIFrameIfNeeded(i), i
            }

            function n(i) {
              e.logger.info("trying to get sso group login token"), t._request("getToken", {
                callback: function (e) {
                  t._storedLoginTokenExp = e.gltexp, i && i.callback && i.callback(e)
                }
              })
            }

            function r(e, i, o) {
              var n;
              if (i = "string" == typeof i && i ? Number(i) : i, 0 === i) n = 0;
              else {
                var r = void 0;
                r = i ? 1e3 * Number(i) : 47304e7, n = Date.now() + r
              }
              t.setGroupToken({
                lt: e,
                expiration: n,
                callback: o
              })
            }

            function s(i) {
              i.gltexp || (i.gltexp = e.utils.cookie.get("gltexp_" + e.thisScript.APIKey)), t._request("setToken", i)
            }

            function a(e) {
              t._request("logout", e)
            }

            function c(e) {
              t._request("removeToken", e)
            }

            function u(e, i) {
              return void 0 === i && (i = !0), i && t._storedLoginTokenExp && e.loginTokenExp === t._storedLoginTokenExp ? void(e.callback && e.callback({
                gltexp: t._storedLoginTokenExp
              })) : (t._storedLoginTokenExp = e.loginTokenExp, void t._request("setLoginTokenExp", e))
            }

            function l(e) {
              t._request("getLoginTokenExp", e)
            }

            function g(i) {
              e.logger.info("verifying login token with sso group"), t._request("checkTokenRenew", i)
            }

            function p(e) {
              t._request("syncCanaryIndication", e)
            }
            var d = 0;
            t._request = i, t.getGroupToken = n, t.setGroupTokenFromResponse = r, t.setGroupToken = s, t.logout = a, t.removeGroupToken = c, t.setLoginTokenExp = u, t.getLoginTokenExp = l, t.checkTokenRenew = g, t.syncCanaryIndication = p
          }(i = t.sso || (t.sso = {}))
        }(i = t.web || (t.web = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (i) {
        var o;
        ! function (i) {
          var o;
          ! function (i) {
            function o(t) {
              return void 0 === t && (t = n()), !t || e.utils.gltexp.isValid(t)
            }

            function n(t) {
              return void 0 === t && (t = e.thisScript.APIKey), e.utils.cookie.get("gltexp_" + t)
            }

            function r(t, i) {
              void 0 === i && (i = e.thisScript.APIKey), t && !m() && (e.utils.cookie.remove("gltexp_" + i), e.utils.cookie.set("gltexp_" + i, t))
            }

            function s(t) {
              return void 0 === t && (t = e.thisScript.APIKey), t ? "glt_" + t : "_gig_lt"
            }

            function a(t) {
              void 0 === t && (t = e.thisScript.APIKey);
              var i = e.utils.cookie.get(s(t));
              return i ? i.split("|")[0] : null
            }

            function c(t, i, o, n) {
              e.utils.localStorage.removeItem("gigyaSettings"), e.logger.info("setting a new login token"), t || (t = e.thisScript.APIKey), t ? (e.utils.cookie.set("glt_" + t, i, o), e.utils.cookie.remove("gac_" + t)) : e.utils.cookie.set("_gig_lt", i, o), v = n
            }

            function u() {
              return v
            }

            function l(t, i) {
              if (e.thisScript.APIKey) {
                var o = e.utils.cookie.get("gac_" + e.thisScript.APIKey);
                if (o && !t.neverTryGAC) {
                  if ('"' === o.charAt(0) && '"' === o.charAt(o.length - 1) && (o = o.substring(1, o.length - 1)), y[o]) return void i();
                  y[o] = !0, e.socialize.updateRefUID(), e.socialize.notifyLogin({
                    ignoreApiQueue: !0,
                    neverTryGAC: !0,
                    authCode: o,
                    APIKey: e.thisScript.APIKey,
                    client_id: e.thisScript.APIKey
                  }, {
                    callback: function () {
                      e.utils.cookie.remove("gac_" + e.thisScript.APIKey), i(), e.socialize.refreshUI({
                        neverTryGAC: !0
                      })
                    }
                  })
                } else i()
              } else i()
            }

            function g(t, o) {
              if (void 0 === o && (o = e.thisScript.APIKey), t) switch (t.errorCode) {
                case 403005:
                  e.logger.info("no group session found"), i.remove(o);
                  break;
                case 403025:
                  e.logger.info("existing group session was revoked"), i.remove(o), e.events.global.dispatch({
                    eventName: "logout,accounts.logout"
                  });
                  break;
                case 403032:
                case 0:
                  if (!t.login_token) return;
                  e.logger.info("new session from group");
                  var n = void 0;
                  if (!m()) {
                    n = t.gltexp ? e.utils.cookie.getInfiniteExpirationTimeInSeconds() : t.expires_in, i.set(o, t.login_token, n);
                    var r = "gltexp_" + o;
                    t.gltexp && !e.utils.cookie.get(r) && e.utils.cookie.set(r, t.gltexp)
                  }
                  i.dispatchLoginEvent({
                    expires_in: n
                  });
                  break;
                default:
                  throw e.logger.error("sso: unsupported response"), "gigya: unsupported response from sso"
              }
            }

            function p(i) {
              void 0 === i && (i = {}), e.accounts.verifyLogin({
                include: "profile,data",
                extraProfileFields: "samlData",
                callback: function (o) {
                  0 == o.errorCode && (e._.apiAdapters.isSessionFromSso = !0), e.events.global.dispatchWhenHandlerAdded({
                    eventName: "socialize.login"
                  }, null, function (n, r) {
                    e.socialize.getUserInfo({
                      signIDs: !0,
                      extraFields: "samlData",
                      callback: function (s) {
                        n || (n = {}), n = e.utils.object.merge([n, i]), 0 == o.errorCode && 0 == s.errorCode ? (n = t.addUserInfoToEvent(s, {
                          eventName: "login"
                        }, !0), e.external.backplane.executeOnInit(function () {
                          var t = e.external.backplane.getChannelId();
                          t && e.socialize.notifySSOLogin({
                            bp_channel_url: t
                          })
                        })) : n.cancel = !0, r(n)
                      }
                    })
                  }), e.events.global.dispatchWhenHandlerAdded({
                    eventName: "accounts.login"
                  }, null, function (t, n) {
                    t || (t = {}), t = e.utils.object.merge([t, i]), 0 == o.errorCode ? (t.eventName = "accounts.login", e.utils.object.extractProperties(o, t, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data")) : t.cancel = !0, n(t)
                  })
                }
              })
            }

            function d(t) {
              void 0 === t && (t = e.thisScript.APIKey), e.partnerSettings.ssoKey && (e.logger.info("removing group login token"), e._.apiAdapters.web.sso.removeGroupToken()), a(t) && e.logger.info("removing login token"), e.utils.cookie.remove("glt_" + t), e.utils.cookie.remove("_gig_lt"), e.utils.cookie.remove("gltexp_" + t)
            }

            function f() {
              var t = e.utils.cookie.get("_gig_lt");
              t && e.thisScript.APIKey && !i.get(e.thisScript.APIKey) && (e.utils.cookie.remove("_gig_lt"), i.set(e.thisScript.APIKey, t))
            }

            function h(t, i) {
              var o = e.utils.cookie.get(s(t));
              if (o) {
                var n = o.split("|");
                return n.length > 1 ? e.utils.keyValue.deserialize(n[1])[i] : null
              }
            }

            function m() {
              var t = e.utils.cookie.getDefaultDomain();
              return e.utils.stringUtils.endsWith(t, e.defaultApiDomain)
            }
            var v, y = {};
            i.activeNamespaces = {}, i.isValidGltExp = o, i.getGltexpCookie = n, i.setGltexp = r, i.get = a, i.set = c, i.getCurrentSessionExpiration = u, i.setFromGAC = l, i.setFromSsoResponse = g, i.dispatchLoginEvent = p, i.remove = d, i.migrateExisting = f, i.getTokenParam = h
          }(o = i.tokenStore || (i.tokenStore = {}))
        }(o = i.web || (i.web = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        var i;
        ! function (t) {
          var i = 5,
            o = function () {
              function o(t, o, n, r, s) {
                void 0 === r && (r = {}), void 0 === s && (s = i), this.baseUrl = t, this.methodName = o, this.params = n, this.settings = r, this._maxTries = s, this._tries = 0, this.params.sdk = "js_" + e.build.version
              }
              return o.prototype.getUrl = function () {
                return this.baseUrl + "/" + this.methodName
              }, o.prototype.send = function (e) {
                this._tries++, this._tries <= this._maxTries ? this.sendAction() : e && e()
              }, o.prototype.getAuthParams = function () {
                var i = {};
                if (this.params.oauth_token) this.params.authMode = "token";
                else if (!this.params.noAuth && !this.params.regToken) {
                  var o = t.tokenStore.get(this.params.APIKey);
                  if (o) {
                    this.sentLoginToken = o;
                    var n = t.tokenStore.getGltexpCookie(this.params.APIKey);
                    null != n && (i.loginTokenExp = n), i.login_token = o
                  }
                  i.authMode = "cookie"
                }
                return delete this.params.noAuth, e.localInfo.isAndroidBrowser && (delete this.params.login_token, delete this.params.loginTokenExp, delete this.params.authMode), i
              }, o
            }();
          t.BaseRequest = o
        }(i = t.web || (t.web = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        var i;
        ! function (t) {
          var i = function (i) {
            function o(t, o, n, r) {
              void 0 === r && (r = {});
              var s = i.call(this, e.defaultApiDomain, t, o, r) || this;
              return s.methodName = t, s.params = o, s.callback = n, s.settings = r, s
            }
            return __extends(o, i), o.prototype.sendAction = function (i) {
              e.utils.object.add(this.params, this.getAuthParams()), t.apiService.sendRequest(this.json()).then(this.callback).catch(function (e) {
                return console.error(e)
              })
            }, o.prototype.json = function () {
              return {
                methodName: this.methodName,
                params: this.params,
                settings: this.settings
              }
            }, o
          }(t.BaseRequest);
          t.ApiRequest = i
        }(i = t.web || (t.web = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (i) {
        var o;
        ! function (i) {
          var o = function (i) {
            function o(e, t, o, n, r, s) {
              void 0 === s && (s = {});
              var a = i.call(this, t, o, n, s) || this;
              return a.id = e, a.baseUrl = t, a.methodName = o, a.params = n, a.callback = r, a.settings = s, a.windowName = a.methodName.replace(/\./g, "_").replace(/\//g, "") + "_" + (new Date).getTime(), a.requestID = a.windowName + (new Date).getTime(), a
            }
            return __extends(o, i), o.prototype.beforeRequest = function () {}, o.prototype.afterResponse = function (t) {
              t.dontClose && "false" !== t.dontClose || e.utils.win.close(this.windowName), this.callback(t)
            }, o.prototype.getAuthFlow = function () {
              return e.localInfo.isWindowsPhone || e.localInfo.isFacebookBrowser ? "redirect" : this.params.authFlow ? this.params.authFlow : "popup"
            }, o.prototype.getStateString = function () {
              var i = e.utils.xd._flashListenerID;
              (e.thisScript.globalConf.legacyCrossSiteMethod && "localstorage" !== e.thisScript.globalConf.legacyCrossSiteMethod.toLowerCase() || e.localInfo.isIE && window.navigator.msDoNotTrack) && (i = e.thisScript.globalConf.legacyCrossSiteMethod + ":" + e.utils.xd._flashListenerID);
              var o = this.getAuthFlow(),
                n = {
                  domain: document.location.href.split("?")[0].split("#")[0],
                  id: this.requestID,
                  lid: i,
                  messaging: e.localInfo.messagingMethod
                };
              e.localInfo.isIE11 && window.indexedDB && (n.messaging = t.MessagingMethod.LocalStorageListener), e.localInfo.isAndroid && this.params.provider && "line" == this.params.provider.toLowerCase() && (n.messaging = t.MessagingMethod.LocalStorageListener), "redirect" === o && (n.sourceURL = window.top.document.location.href, this.params.redirectURL ? (n.redirectURL = e.utils.URL.addParamsToURL(this.params.redirectURL, {
                gig_events: e.events.global.getEventsForOperation(this.methodName)
              }), this.params.redirectMethod && (n.redirectMethod = this.params.redirectMethod), n.addUserInfo = !0) : n.sourceURL = e.utils.URL.addParamsToURL(n.sourceURL, {
                gig_events: e.events.global.getEventsForOperation(this.methodName)
              })), this.params.provider && "facebook" == this.params.provider.toLowerCase() && (n.invite = this.params.invite);
              var r = e.external.backplane.getChannelId();
              return r && (n.bp_channel_url = r), e.utils.keyValue.serialize(n)
            }, o.prototype.getServerParamsString = function () {
              var t = {};
              for (var i in this.params) 0 !== i.indexOf("x_") && null != this.params[i] && (t["x_" + i] = this.params[i], delete t[i]);
              t.x_APIKey && (t.client_id = t.x_APIKey, delete t.x_APIKey), t.x_oauth_token && (t.oauth_token = t.x_oauth_token, delete t.x_oauth_token), t.redirect_uri = "/GS/AfterLogin.aspx", t.response_type = this.params.authCodeOnly ? "code" : "server_token", t.format = "jsonp", t.x_sdk = "js_" + e.build.version;
              var o = e.utils.cookie.get("_gigRefUid_" + this.params.APIKey);
              o && (t.x_refUID = o), t.state = this.getStateString(), e.utils.object.add(t, this.getAuthParams());
              var n = e._.apiAdapter.getGmidTicket();
              return n && (t.gmidTicket = n), delete t.redirectURL, this.sentLoginToken = t.login_token, e.utils.keyValue.serialize(t)
            }, o.prototype.sendAction = function () {
              var t = this;
              this.beforeRequest();
              var i, o = this.getServerParamsString();
              this.params.provider && (i = e.socialize._getProviderByName(this.params.provider));
              var n = {
                menubar: 0,
                resizable: 1,
                scrollbars: 1,
                width: i ? i.width : void 0,
                height: i ? i.height : void 0
              };
              this.params.enablePopupLocation ? (n.location = 1, n.toolbar = 1) : n.toolbar = 0;
              var r = this.methodName.split("."),
                s = this.params.originalMethodName || r[r.length - 1];
              e.reports.report(s, this.params.APIKey, this.params.cid, this.params.source, this.params.sourceData, {
                sn: i ? i.toString() : null
              });
              var a = this.getUrl() + "?" + o;
              "redirect" === this.getAuthFlow() ? window.top.document.location.href = a : (e.utils.xd.addMessageListener(this.requestID, this.params, !0, function (e) {
                t.afterResponse(e)
              }), e.utils.win.open(a, this.windowName, n))
            }, o
          }(i.BaseRequest);
          i.OauthRequest = o
        }(o = i.web || (i.web = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        var i;
        ! function (t) {
          t.getParentUrl = function (e, t) {
            return void 0 === e && (e = window), void 0 === t && (t = document), e.location != e.parent.location ? t.referrer : t.location.href
          }, t.getBodyElement = function (t) {
            return void 0 === t && (t = document), new e.Promise(function (e) {
              t.body ? e(t.body) : t.addEventListener("DOMContentLoaded", function () {
                return e(t.body)
              })
            })
          }, t.validateOrigin = function (e, t) {
            return 0 === e.toLowerCase().indexOf(t.toLowerCase())
          }, t.createIframe = function (e) {
            void 0 === e && (e = document);
            var t = e.createElement("iframe");
            return t.style.position = "absolute", t.style.height = "0px", t.style.width = "0px", t.style.display = "none", t
          };
          var i = 1;
          t.generateId = function () {
            return String(i++)
          }, t.getAllClassMethodsNames = function (e) {
            var t = [],
              i = e.prototype;
            do try {
              var o = Object.getOwnPropertyNames(i).map(function (e) {
                return e.toString()
              }).sort().filter(function (e, o, n) {
                return "function" == typeof i[e] && "constructor" !== e && (0 == o || e !== n[o - 1]) && t.indexOf(e) === -1
              });
              t = t.concat(o)
            } catch (e) {
              for (var n = Object.getOwnPropertyNames(i).map(function (e) {
                  return e.toString()
                }).sort(), o = [], r = 0; r < n.length; r++) {
                var s = n[r];
                "function" != typeof i[s] || "constructor" === s || 0 != r && s === n[r - 1] || t.indexOf(s) !== -1 || o.push(s)
              }
              t = t.concat(o)
            }
            while ((i = Object.getPrototypeOf(i)) && Object.getPrototypeOf(i));
            return t
          }
        }(i = t.utils || (t.utils = {}))
      }(i = t.proxy || (t.proxy = {}))
    }(t = e.services || (e.services = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e) {
          return Boolean(e.signal)
        }
        e.isSignalRequest = t
      }(t = e.proxy || (e.proxy = {}))
    }(t = e.services || (e.services = {}))
  }(gigya || (gigya = {})), ! function (e, t) {
    e.ES6Promise = t()
  }(window, function () {
    "use strict";

    function e(e) {
      return "function" == typeof e || "object" == typeof e && null !== e
    }

    function t(e) {
      return "function" == typeof e
    }

    function i(e) {
      W = e
    }

    function o(e) {
      B = e
    }

    function n() {
      return function () {}
    }

    function r() {
      var e = 0,
        t = new J(c),
        i = document.createTextNode("");
      return t.observe(i, {
          characterData: !0
        }),
        function () {
          i.data = e = ++e % 2
        }
    }

    function s() {
      var e = new MessageChannel;
      return e.port1.onmessage = c,
        function () {
          return e.port2.postMessage(0)
        }
    }

    function a() {
      var e = setTimeout;
      return function () {
        return e(c, 1)
      }
    }

    function c() {
      for (var e = 0; e < j; e += 2) {
        var t = Q[e],
          i = Q[e + 1];
        t(i), Q[e] = void 0, Q[e + 1] = void 0
      }
      j = 0
    }

    function u(e, t) {
      var i = arguments,
        o = this,
        n = new this.constructor(g);
      void 0 === n[$] && P(n);
      var r = o._state;
      return r ? ! function () {
        var e = i[r - 1];
        B(function () {
          return A(r, n, e, o._result)
        })
      }() : S(o, n, e, t), n
    }

    function l(e) {
      var t = this;
      if (e && "object" == typeof e && e.constructor === t) return e;
      var i = new t(g);
      return y(i, e), i
    }

    function g() {}

    function p() {
      return new TypeError("You cannot resolve a promise with itself")
    }

    function d() {
      return new TypeError("A promises callback cannot return that same promise.")
    }

    function f(e) {
      try {
        return e.then
      } catch (e) {
        return oe.error = e, oe
      }
    }

    function h(e, t, i) {
      B(function (e) {
        var o = !1,
          n = M(i, t, function (i) {
            o || (o = !0, t !== i ? y(e, i) : k(e, i))
          }, function (t) {
            o || (o = !0, b(e, t))
          }, "Settle: " + (e._label || " unknown promise"));
        !o && n && (o = !0, b(e, n))
      }, e)
    }

    function m(e, t) {
      t._state === te ? k(e, t._result) : t._state === ie ? b(e, t._result) : S(t, void 0, function (t) {
        return y(e, t)
      }, function (t) {
        return b(e, t)
      })
    }

    function v(e, i, o) {
      i.constructor === e.constructor && o === u && i.constructor.resolve === l ? m(e, i) : o === oe ? b(e, oe.error) : void 0 === o ? k(e, i) : t(o) ? h(e, i, o) : k(e, i)
    }

    function y(t, i) {
      t === i ? b(t, p()) : e(i) ? v(t, i, f(i)) : k(t, i)
    }

    function _(e) {
      e._onerror && e._onerror(e._result), T(e)
    }

    function k(e, t) {
      e._state === ee && (e._result = t, e._state = te, 0 !== e._subscribers.length && B(T, e))
    }

    function b(e, t) {
      e._state === ee && (e._state = ie, e._result = t, B(_, e))
    }

    function S(e, t, i, o) {
      var n = e._subscribers,
        r = n.length;
      e._onerror = null, n[r] = t, n[r + te] = i, n[r + ie] = o, 0 === r && e._state && B(T, e)
    }

    function T(e) {
      var t = e._subscribers,
        i = e._state;
      if (0 !== t.length) {
        for (var o = void 0, n = void 0, r = e._result, s = 0; s < t.length; s += 3) o = t[s], n = t[s + i], o ? A(i, o, n, r) : n(r);
        e._subscribers.length = 0
      }
    }

    function I() {
      this.error = null
    }

    function w(e, t) {
      try {
        return e(t)
      } catch (e) {
        return ne.error = e, ne
      }
    }

    function A(e, i, o, n) {
      var r = t(o),
        s = void 0,
        a = void 0,
        c = void 0,
        u = void 0;
      if (r) {
        if (s = w(o, n), s === ne ? (u = !0, a = s.error, s = null) : c = !0, i === s) return void b(i, d())
      } else s = n, c = !0;
      i._state !== ee || (r && c ? y(i, s) : u ? b(i, a) : e === te ? k(i, s) : e === ie && b(i, s))
    }

    function x(e, t) {
      try {
        t(function (t) {
          y(e, t)
        }, function (t) {
          b(e, t)
        })
      } catch (t) {
        b(e, t)
      }
    }

    function C() {
      return re++
    }

    function P(e) {
      e[$] = re++, e._state = void 0, e._result = void 0, e._subscribers = []
    }

    function D(e, t) {
      this._instanceConstructor = e, this.promise = new e(g), this.promise[$] || P(this.promise), q(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && k(this.promise, this._result))) : b(this.promise, E())
    }

    function E() {
      return new Error("Array Methods must be provided an Array")
    }

    function R(e) {
      return new D(this, e).promise
    }

    function O(e) {
      var t = this;
      return new t(q(e) ? function (i, o) {
        for (var n = e.length, r = 0; r < n; r++) t.resolve(e[r]).then(i, o)
      } : function (e, t) {
        return t(new TypeError("You must pass an array to race."))
      })
    }

    function K(e) {
      var t = this,
        i = new t(g);
      return b(i, e), i
    }

    function L() {
      throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }

    function G() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }

    function N() {
      var e = void 0;
      if ("undefined" != typeof self) e = self;
      else try {
        e = Function("return this")()
      } catch (e) {
        throw new Error("polyfill failed because global object is unavailable in this environment")
      }
      var t = e.Promise;
      if (t) {
        var i = null;
        try {
          i = Object.prototype.toString.call(t.resolve())
        } catch (e) {}
        if ("[object Promise]" === i && !t.cast) return
      }
      e.Promise = U
    }
    var M = function (e, t, i, o) {
        try {
          e.call(t, i, o)
        } catch (e) {
          return e
        }
      },
      U = function (e) {
        this[$] = C(), this._result = this._state = void 0, this._subscribers = [], g !== e && ("function" != typeof e && L(), this instanceof U ? x(this, e) : G())
      },
      F = void 0;
    F = Array.isArray ? Array.isArray : function (e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    };
    var q = F,
      j = 0,
      z = void 0,
      W = void 0,
      B = function (e, t) {
        Q[j] = e, Q[j + 1] = t, j += 2, 2 === j && (W ? W(c) : Z())
      },
      H = "undefined" != typeof window ? window : void 0,
      V = H || {},
      J = V.MutationObserver || V.WebKitMutationObserver,
      X = "undefined" == typeof self && !1 && "[object process]" === {}.toString.call({}),
      Y = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
      Q = new Array(1e3),
      Z = void 0;
    Z = X ? n() : J ? r() : Y ? s() : a();
    var $ = Math.random().toString(36).substring(16),
      ee = void 0,
      te = 1,
      ie = 2,
      oe = new I,
      ne = new I,
      re = 0;
    return D.prototype._enumerate = function () {
      for (var e = this.length, t = this._input, i = 0; this._state === ee && i < e; i++) this._eachEntry(t[i], i)
    }, D.prototype._eachEntry = function (e, t) {
      var i = this._instanceConstructor,
        o = i.resolve;
      if (o === l) {
        var n = f(e);
        if (n === u && e._state !== ee) this._settledAt(e._state, t, e._result);
        else if ("function" != typeof n) this._remaining--, this._result[t] = e;
        else if (i === U) {
          var r = new i(g);
          v(r, e, n), this._willSettleAt(r, t)
        } else this._willSettleAt(new i(function (t) {
          return t(e)
        }), t)
      } else this._willSettleAt(o(e), t)
    }, D.prototype._settledAt = function (e, t, i) {
      var o = this.promise;
      o._state === ee && (this._remaining--, e === ie ? b(o, i) : this._result[t] = i), 0 === this._remaining && k(o, this._result)
    }, D.prototype._willSettleAt = function (e, t) {
      var i = this;
      S(e, void 0, function (e) {
        return i._settledAt(te, t, e)
      }, function (e) {
        return i._settledAt(ie, t, e)
      })
    }, U.all = R, U.race = O, U.resolve = l, U.reject = K, U._setScheduler = i, U._setAsap = o, U._asap = B, U.prototype = {
      constructor: U,
      then: u,
      catch: function (e) {
        return this.then(null, e)
      }
    }, U.polyfill = N, U.Promise = U, U
  });
  var gigya;
  ! function (e) {
    e.Promise = window.ES6Promise
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        var i = function () {
          function i(i, o, n, r, s, a) {
            void 0 === o && (o = 6e4), void 0 === n && (n = t.utils.generateId), void 0 === r && (r = t.utils.createIframe), void 0 === s && (s = function () {
              return new e.Promise(function (e) {
                document.body ? e(document.body) : document.addEventListener("DOMContentLoaded", function () {
                  return e(document.body)
                })
              })
            }), void 0 === a && (a = window);
            var c = this;
            this.url = i, this.timeout = o, this._idCreator = n, this._iframeCreator = r, this.getIframeHost = s, this._win = a, this._pendingReqs = [], this._mutationObservers = [], this.onResponse = function (t) {
              var i = e.utils.JSON.parse(t.data);
              i && c._pendingReqs[i.id] && c.validateOrigin(t.origin) && (c._pendingReqs[i.id](i), delete c._pendingReqs[i.id])
            }
          }
          return Object.defineProperty(i.prototype, "isInit", {
            get: function () {
              return Boolean(this._iframe)
            },
            enumerable: !0,
            configurable: !0
          }), i.prototype.init = function () {
            var t = this;
            return this.isInit ? e.Promise.reject("proxy already initialized") : new e.Promise(function (i, o) {
              t._iframe = t._iframeCreator(), t._iframe.src = t.url, t.getIframeHost().then(function (n) {
                t._iframeHost = n, t._iframeHost.appendChild(t._iframe), e.logger.isEnabled && t.startObservingIFrameRemoval();
                var r = t._win.setTimeout(function () {
                    return o("proxy init timeout")
                  }, t.timeout),
                  s = function (e) {
                    if (t.validateOrigin(e.origin)) {
                      var n = JSON.parse(e.data);
                      if (n.signal) switch (t._win.clearTimeout(r), t._win.removeEventListener("message", s, !0), n.signal) {
                        case "listening":
                          t._win.addEventListener("message", t.onResponse, !0), i(n.res);
                          break;
                        case "error":
                        case "stop":
                          o(n.res);
                          break;
                        default:
                          o("unsupported response")
                      }
                    }
                  };
                t._win.addEventListener("message", s, !0)
              })
            })
          }, i.prototype.validateOrigin = function (e) {
            return t.utils.validateOrigin(this._iframe.src, e)
          }, i.prototype.postToIFrame = function (e) {
            var t = this.registerMessage(e),
              i = "object" == typeof e ? JSON.stringify(e) : e;
            return this._iframe.contentWindow.postMessage(i, this._iframe.src), t
          }, i.prototype.registerMessage = function (t, i) {
            var o = this;
            return void 0 === i && (i = this.timeout), new e.Promise(function (e, n) {
              var r = o._win.setTimeout(function () {
                n("proxy request timeout")
              }, i);
              o._pendingReqs[t.id] = function (t) {
                o._win.clearTimeout(r), "error" === t.signal ? n(t.res) : e(t.res)
              }
            })
          }, i.prototype.sendRequest = function (e, t) {
            return this.postToIFrame({
              id: this._idCreator(),
              methodName: e,
              params: t
            })
          }, i.prototype.stop = function (t) {
            return void 0 === t && (t = !1), __gig_awaiter(this, void 0, e.Promise, function () {
              var e, i;
              return __gig_generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (this.isInit) return [3, 1];
                    throw "proxy is not active";
                  case 1:
                    e = void 0, o.label = 2;
                  case 2:
                    return o.trys.push([2, 4, 5, 6]), [4, this.postToIFrame({
                      id: this._idCreator(),
                      signal: "stop"
                    })];
                  case 3:
                    return [2, o.sent()];
                  case 4:
                    throw i = o.sent(), e = i, i;
                  case 5:
                    return e && !t || (this._mutationObservers && this._mutationObservers.length && this.stopObservingIFrameRemoval(), this._win.removeEventListener("message", this.onResponse, !0), this._iframeHost.removeChild(this._iframe), delete this._iframe), [7];
                  case 6:
                    return [2]
                }
              })
            })
          }, i.prototype.wrapWith = function (e) {
            var i;
            if ("function" == typeof e) i = t.utils.getAllClassMethodsNames(e);
            else if (e instanceof Array) i = e;
            else {
              if ("object" != typeof e) throw "unsupported type for wrapper";
              i = Object.keys(e)
            }
            return this.proxyFromKeys(i)
          }, i.prototype.proxyFromKeys = function (e) {
            var t = this,
              i = {};
            return e.forEach(function (e) {
              return i[e] = function () {
                for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                return t.sendRequest(e, i)
              }
            }), i
          }, i.prototype.startObservingIFrameRemoval = function () {
            for (var e = this._iframe; e.parentElement;) this.addMutationObserver(e), e = e.parentElement
          }, i.prototype.stopObservingIFrameRemoval = function () {
            this._mutationObservers.forEach(function (e) {
              e && e.disconnect && e.disconnect()
            }), this._mutationObservers = []
          }, i.prototype.addMutationObserver = function (t) {
            var i = this,
              o = function (o) {
                for (var n = 0, r = o; n < r.length; n++) {
                  var s = r[n];
                  if ("childList" == s.type && s.removedNodes.length)
                    for (var a = 0; a < s.removedNodes.length; a++) {
                      var c = s.removedNodes.item(a);
                      if (c === t) return e.logger.warn("### Gigya's service proxy has been unexpectedly detached from the DOM. This may cause unexpected behavior including a complete loss of service. ###"), void i.stopObservingIFrameRemoval()
                    }
                }
              },
              n = new MutationObserver(o);
            n.observe(t.parentElement, {
              childList: !0,
              subtree: !1
            }), this._mutationObservers.push(n)
          }, i
        }();
        t.ServiceProxy = i
      }(i = t.proxy || (t.proxy = {}))
    }(t = e.services || (e.services = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    function t(e, t) {
      if (!t && e && (t = e.context), t) {
        var i = o[t];
        i && i.handleResponse(e)
      }
    }

    function i(t, i, o) {
      var n = o.jsSdkRequestId;
      if (n) return n;
      if (o.disableCache || e.localInfo.isSafari || e.localInfo.isIE10 && t.indexOf("accounts.getAccountInfo") > -1) return "R" + (new Date).getTime() + "_" + Math.random();
      var r = e.utils.object.clone(i);
      for (var s in r) r.hasOwnProperty(s) && (0 !== s.indexOf("fb_") && "source" !== s && "sourceData" !== s || delete r[s]);
      return "R" + e.utils.object.getMurmurHash(Math.random().toString() + t + e.utils.object.getHash(r))
    }
    e.callback = t;
    var o = {},
      n = function () {
        function t(e, t, o, n, r, s) {
          void 0 === r && (r = {}), void 0 === s && (s = i(t, o, r));
          var a = this;
          this.baseDomain = e, this.method = t, this.params = o, this.callback = n, this.settings = r, this.id = s, this.getUrl = function () {
            return a.baseDomain + "/" + a.method
          }, this.ifrName = "gigyaPostIframe_" + (new Date).getTime(), this.retry = 0
        }
        return t.prototype.send = function (t) {
          var i = this;
          if (!this.inProgress) {
            o[this.id] = this, this.inProgress = !0, this.addDefaultParams();
            var n = e.utils.keyValue.serialize(this.params);
            if (!t && this.settings.cacheTimeout) {
              var r = this.getCacheKey();
              return void e.utils.sessionCache.get(r, this.settings.cacheTimeout, function (t) {
                t ? (delete i.settings.cacheTimeout, e.callback(t, i.id)) : (i.inProgress = !1, i.send(!0))
              })
            }
            var s = 0,
              a = 4096;
            e.localInfo.isIE && (s = 2048);
            var c = this.getUrl() + "?" + n;
            c.length + s <= a && !this.settings.forcePost ? e.utils.script.load(c, function () {
              e.callback({
                context: i.id,
                errorCode: 500026,
                errorMessage: "Network_error"
              })
            }) : e.utils.functions.invokeOnPageLoad(function () {
              var t = document.getElementById("gigyaRequestForms");
              null == t && (t = document.createElement("span"), t.id = "gigyaRequestForms", t.style.display = "none", e.utils.DOM.appendToBody(t));
              var o = i.getPostContainer();
              t.appendChild(o)
            })
          }
        }, t.prototype.handleResponse = function (t) {
          var i = this;
          if (this.settings.cacheTimeout && e.utils.sessionCache.set(this.getCacheKey(), 0 == t.errorCode ? t : null), null != this.retryTimerID && window.clearTimeout(this.retryTimerID), this.inProgress = !1, 100001 == t.errorCode) {
            var o = this.getDataPendingTimeout(this.retry++);
            if (o > 0) return void window.setTimeout(function () {
              i.send()
            }, o)
          } else this.dispose(), this.callback(t)
        }, t.prototype.addDefaultParams = function () {
          this.params.format = "jsonp", this.params.callback = "gigya.callback", this.params.context = this.id
        }, t.prototype.getCacheKey = function () {
          return this.method + "_" + e.utils.keyValue.serialize(this.params)
        }, t.prototype.createParamFormElements = function () {
          var t = document.createDocumentFragment();
          for (var i in this.params) {
            var o = e.utils.DOM.createElementWithAttributes("textarea", {
              name: i,
              value: "object" == typeof this.params[i] ? e.utils.URL.URLEncode(e.utils.JSON.serialize(this.params[i])) : this.params[i]
            });
            t.appendChild(o)
          }
          return t
        }, t.prototype.getPostContainer = function () {
          var t, i = this;
          if (!this.postContainerElem) {
            t = document.createElement("span");
            var o = this.ifrName + "form",
              n = this.id,
              r = e.utils.DOM.createElementWithAttributes("form", {
                acceptCharset: "UTF-8",
                id: o,
                method: "post",
                action: this.getUrl() + "?context=" + this.id + "&&saveResponseID=" + this.id,
                target: this.ifrName
              }),
              s = e.utils.DOM.createElementWithAttributes("input", {
                type: "hidden",
                name: "utf8",
                value: "&#x2713;"
              }),
              a = e.utils.DOM.createElementWithAttributes("input", {
                type: "submit"
              });
            r.appendChild(this.createParamFormElements()), r.appendChild(s), r.appendChild(a), t.appendChild(r);
            var c, u = e.utils.DOM.createElement("iframe", this.ifrName);
            u.setAttribute("id", this.ifrName), e.utils.functions.addSrcToIFrameIfNeeded(u), e.utils.DOM.addEventListener(u, "load", function () {
              c ? i.getSavedFormResponse(n) : (window.setTimeout(function () {
                var e = document.getElementById(o);
                e && e.submit()
              }, 10), c = !0)
            }), t.appendChild(u), this.postContainerElem = t
          }
          return t
        }, t.prototype.getSavedFormResponse = function (i) {
          var o = this;
          new t(this.baseDomain, "socialize.getSavedResponse", {
            APIKey: this.params.APIKey,
            saveResponseID: this.id,
            ucid: this.params.ucid,
            noAuth: !0,
            sdk: "js_" + e.build.version
          }, function (e) {
            o.handleResponse(e)
          }, (void 0), i).send()
        }, t.prototype.getDataPendingTimeout = function (e) {
          return e <= 4 ? 500 : e <= 8 ? 1e3 : e <= 21 ? 2e3 : e <= 39 ? 5e3 : -1
        }, t.prototype.dispose = function () {
          delete o[this.id], this.postContainerElem && e.utils.DOM.removeElement(this.postContainerElem), delete this.postContainerElem
        }, t
      }();
    e.JsonpRequest = n
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i = "apiDomain",
        o = function () {
          function t(t, o) {
            void 0 === t && (t = e.partnerSettings.ssoKey), void 0 === o && (o = e.utils.localStorage.initializeAdapter(e.utils.localStorage.CookieStorageAdapter)), this._ssoKey = t, this._storage = o, this._cookieName = i + "_" + this._ssoKey
          }
          return t.prototype.get = function () {
            return this._ssoKey ? this._storage.getItem(this._cookieName) : void 0
          }, t.prototype.set = function (e) {
            this._ssoKey && this._storage.setItem(this._cookieName, e)
          }, t
        }();
      t.GroupApiDomainService = o
    }(t = e.services || (e.services = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i = 1;
      t.TokenKeys = {
        GMID: "gig_gmid",
        UCID: "gig_ucid",
        GMID_TICKET: "gmidTicket",
        GMID_TICKET_EXPIRATION_TIME: "gmidTicketExpiration"
      };
      var o = function () {
        function o(t, i, o, n, r, s) {
          void 0 === n && (n = new e.services.GroupApiDomainService), void 0 === r && (r = e.JsonpRequest), this._apiKey = t, this._hasGmid = i, this._domainResolver = o, this._groupApiDomainService = n, this._requestClass = r, s && (this._storage = s)
        }
        return o.prototype.getApiDomain = function (t) {
          return __gig_awaiter(this, void 0, e.Promise, function () {
            return __gig_generator(this, function (e) {
              return [2, this._domainResolver.getApiDomain(t)]
            })
          })
        }, o.prototype.bootstrap = function () {
          return __gig_awaiter(this, void 0, e.Promise, function () {
            var t, i, o, n;
            return __gig_generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return t = e.logger.group("bootstrap api service"), this._storage ? [3, 2] : (e.logger.debug("init storage"), i = this, [4, new e.Promise(function (t) {
                    e.utils.localStorage.waitForService(function (e) {
                      t(e)
                    })
                  })]);
                case 1:
                  i._storage = r.sent(), r.label = 2;
                case 2:
                  return this._hasGmid ? (e.logger.info("already has gmid"), [3, 7]) : [3, 3];
                case 3:
                  return e.logger.info("no gmid set"), this.canSaveGmidAsCookie() ? (e.logger.info("save gmid as cookie"), [4, this.sendRequest({
                    methodName: "accounts.webSdkBootstrap",
                    params: {
                      apiKey: this._apiKey
                    },
                    settings: {
                      forceHttps: !0
                    }
                  })]) : [3, 5];
                case 4:
                  if (o = r.sent(), 0 != o.errorCode) throw e.logger.error("error bootstrapping sdk", {
                    type: "bootstrap failed",
                    scope: "ApiService.bootstrap",
                    res: o
                  }), "error bootstrapping sdk\n" + JSON.stringify(o, null, 4);
                  return [3, 7];
                case 5:
                  return e.logger.info("save gmid in storage"), [4, this.setupWithStorage()];
                case 6:
                  r.sent(), this._useStorage = !0, r.label = 7;
                case 7:
                  return this._useStorage ? [4, this.getGmidTicket()] : [3, 9];
                case 8:
                  return n = r.sent(), [3, 10];
                case 9:
                  this.cleanStorage(), r.label = 10;
                case 10:
                  return t.end(), [2, {
                    ticketInfo: n
                  }]
              }
            })
          })
        }, o.prototype.setGroupApiDomain = function (t) {
          return __gig_awaiter(this, void 0, e.Promise, function () {
            return __gig_generator(this, function (e) {
              return this._groupApiDomainService.set(t), [2]
            })
          })
        }, o.prototype.canSaveGmidAsCookie = function () {
          return this._domainResolver.isApiDomainFirstParty || e.utils.cookie.canSaveCookie()
        }, o.prototype.sendRequest = function (i) {
          var o = this;
          return new e.Promise(function (n, r) {
            if (!i) {
              var s = "ApiService: request data must has methodName and params";
              return e.logger.error(s), r(s)
            }
            var a = i.methodName,
              c = e.utils.object.clone(i.params, !0, !0);
            c.pageURL = o._domainResolver.originDomain, o._useStorage && (c.gmid = o._storage.getItem(t.TokenKeys.GMID), c.ucid = o._storage.getItem(t.TokenKeys.UCID)), o.getApiDomain(a).then(function (t) {
              var r = new o._requestClass("https://" + t, a, c, function (t) {
                var i = e.utils.JSON.serialize(t);
                e.utils.JSON.deserialize(i, void 0) || (t = {
                  errorCode: 400004,
                  errorMessage: "Invalid parameter format.\nOne of the parameters of this request has been set with a value which is not in the expected format."
                }), n(t)
              }, i.settings);
              r.send()
            })
          })
        }, o.prototype.setupWithStorage = function () {
          return __gig_awaiter(this, void 0, e.Promise, function () {
            var i, o, n, r, s;
            return __gig_generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return i = Boolean(this._storage.getItem(t.TokenKeys.GMID)), o = parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME)), i ? [3, 2] : (e.logger.info("getting gmid by endpoint"), [4, this.getIds()]);
                case 1:
                  if (n = a.sent(), !n.gcid || !n.ucid) throw r = "ApiService getIDs: the request to the endpoint failed", e.logger.error(r), r;
                  return e.logger.info("setting gmid in storage"), this._storage.setItem(t.TokenKeys.GMID, n.gcid), this._storage.setItem(t.TokenKeys.UCID, n.ucid), s = this.createTicketResponse(n.gmidTicket), this.updateGmidTicket(s), [3, 3];
                case 2:
                  e.utils.validation.isLaterThanNow(o) ? e.logger.info("already has gmid in storage") : this.refreshGmidTicketFromServer(), a.label = 3;
                case 3:
                  return [2]
              }
            })
          })
        }, o.prototype.getGmidTicket = function (i) {
          return void 0 === i && (i = !1), __gig_awaiter(this, void 0, e.Promise, function () {
            var o, n;
            return __gig_generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return o = this._storage.getItem(t.TokenKeys.GMID_TICKET), o || i ? [3, 1] : [2, void 0];
                case 1:
                  return n = parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME)), !i && o && e.utils.validation.isLaterThanNow(n) ? [2, {
                    gmidTicket: o,
                    expirationTime: parseInt(this._storage.getItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME))
                  }] : [3, 2];
                case 2:
                  return this.deleteGmidTicket(), [4, this.refreshGmidTicketFromServer()];
                case 3:
                  return [2, r.sent()]
              }
            })
          })
        }, o.prototype.refreshGmidTicketFromServer = function () {
          return __gig_awaiter(this, void 0, e.Promise, function () {
            var i;
            return __gig_generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return e.logger.info("refreshing gmid ticket"), [4, this.createGmidTicket(this._storage.getItem(t.TokenKeys.GMID))];
                case 1:
                  return i = o.sent(), this.updateGmidTicket(i), [2, i]
              }
            })
          })
        }, o.prototype.updateGmidTicket = function (i) {
          e.logger.info("updating gmid ticket", i), this._storage.setItem(t.TokenKeys.GMID_TICKET, i.gmidTicket), this._storage.setItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME, String(i.expirationTime))
        }, o.prototype.deleteGmidTicket = function () {
          this._storage.removeItem(t.TokenKeys.GMID_TICKET), this._storage.removeItem(t.TokenKeys.GMID_TICKET_EXPIRATION_TIME)
        }, o.prototype.cleanStorage = function () {
          this._storage.removeItem(t.TokenKeys.GMID), this._storage.removeItem(t.TokenKeys.UCID), this.deleteGmidTicket()
        }, o.prototype.getIds = function () {
          return this.sendRequest({
            methodName: "socialize.getIDs",
            params: {
              APIKey: this._apiKey,
              includeTicket: !0
            },
            settings: {
              forceHttps: !0
            }
          })
        }, o.prototype.createGmidTicket = function (t, i) {
          var o = this;
          void 0 === i && (i = e.gmidTicketExpiration);
          var n = {
            apiKey: this._apiKey,
            expires: i
          };
          return t && (n.gmid = t), this.sendRequest({
            methodName: "socialize.getGmidTicket",
            params: n,
            settings: {
              forceHttps: !0
            }
          }).then(function (e) {
            return o.createTicketResponse(e.gmidTicket)
          })
        }, o.prototype.createTicketResponse = function (e) {
          var t = new Date;
          t.setHours(t.getHours() + i);
          var o = t.getTime();
          return {
            gmidTicket: e,
            expirationTime: o
          }
        }, o
      }();
      t.ApiService = o
    }(t = e.services || (e.services = {}))
  }(gigya || (gigya = {})), gigya.isGigya || (gigya.isGigya = !0);
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (i) {
        var o;
        ! function (i) {
          function o(e) {
            return new r(e)
          }
          var n = "gig_hasGmid";
          i.newApiAdapter = o;
          var r = function () {
            function o(e) {
              this.adapterSettings = e, this.name = "Web"
            }
            return o.prototype.init = function (t) {
              return __gig_awaiter(this, void 0, e.Promise, function () {
                var o, r, s, a, c, u, l = this;
                return __gig_generator(this, function (g) {
                  switch (g.label) {
                    case 0:
                      return g.trys.push([0, 3, , 4]), o = e.partnerSettings.customAPIDomainPrefix || "ver2", r = e.utils.cookie.get(n) === o, e.logger.info("has bootstrapped: " + r), s = e.logger.group("create api service"), a = i, [4, this.createApiService(r)];
                    case 1:
                      return a.apiService = g.sent(), s.end(), [4, i.apiService.bootstrap()];
                    case 2:
                      return c = g.sent(), c.ticketInfo ? this.setGmidTicket(c.ticketInfo) : e.utils.cookie.set(n, o), e.utils.functions.createAlias("gigya.auth.loginToken.get", i.tokenStore.get), e.partnerSettings.ssoKey && e.canary && e.canary.config.probability && this.syncCanaryWithSSO(), this.isSessionValid(void 0, function (o) {
                        if (o && e.services.accountService.verifyLogin().then(function (t) {
                            t || e.events.global.dispatch({
                              eventName: "logout,accounts.logout"
                            })
                          }), l.checkReturnFromURL(), e.logger.info("user is " + (o ? "" : "not ") + "logged-in"), e.partnerSettings.ssoKey) {
                          e.logger.info("sso group sync - " + e.partnerSettings.ssoKey);
                          var n = function (e) {
                            i.tokenStore.setFromSsoResponse(e), t()
                          };
                          if (o) {
                            var r = i.tokenStore.get();
                            i.sso.checkTokenRenew({
                              loginToken: r,
                              callback: n
                            })
                          } else i.sso.getGroupToken({
                            callback: n
                          })
                        } else t()
                      }), [3, 4];
                    case 3:
                      return u = g.sent(), e.logger.error("error bootstrapping sdk", {
                        type: "bootstrap failed",
                        scope: "WebAdapter.init",
                        error: u
                      }), e.events.dispatchErrorFromResponse({
                        eventName: "init"
                      }, {
                        status: "FAIL_TO_BOOTSTRAP",
                        statusMessage: "Web SDK failed to bootstrap",
                        errorCode: 500026,
                        errorMessage: "Web SDK failed to bootstrap: " + (u.message || u)
                      }), t(), [3, 4];
                    case 4:
                      return [2]
                  }
                })
              })
            }, o.prototype.syncCanaryWithSSO = function () {
              var t = e.utils.cookie.get(e.canary.config.cookiesNames.isCanary),
                o = e.utils.cookie.get(e.canary.config.cookiesNames.version);
              i.sso.syncCanaryIndication({
                isCanary: t,
                canaryVersion: o,
                callback: function (i) {
                  i && 0 === i.errorCode && (i.isCanary && i.isCanary !== t && e.utils.cookie.set(e.canary.config.cookiesNames.isCanary, i.isCanary), i.canaryVersion && i.canaryVersion !== o && e.utils.cookie.set(e.canary.config.cookiesNames.version, i.canaryVersion))
                }
              })
            }, o.prototype.createApiService = function (i) {
              return __gig_awaiter(this, void 0, e.Promise, function () {
                var o, n, r, s, a, c, u, l;
                return __gig_generator(this, function (g) {
                  switch (g.label) {
                    case 0:
                      return o = e.thisScript.globalConf.storageDomainOverride || "cdns." + e.dataCenter + "." + e.defaultApiDomain, n = e.thisScript.globalConf.storageProtocolOverride || "https", r = e.logger.configKey + "=" + encodeURIComponent(JSON.stringify(e.logger.getConfig())), s = n + "://" + o + "/gs/webSdk/Api.aspx?apiKey=" + encodeURIComponent(e.thisScript.APIKey) + "&version=" + e.build.version + "#origin=" + document.location.href + "&hasGmid=" + i + "&" + r, e.logger.info("opening api frame"), a = new e.services.proxy.ServiceProxy(s), e.logger.info("creating api service"), [4, a.init()];
                    case 1:
                      return c = g.sent(), e.partnerSettings.plugins.apiDomain = c.apiDomain, e._.getApiDomain = e._.apiDomainFactory(c.apiDomain, e.defaultApiDomain), u = t.Uri.parse(c.apiDomain), e.logger.info("api domain is: " + u), e.logger.info("api domain is " + (c.isGroupApiDomain ? "" : "not ") + "group domain"), l = "false" === e.thisScript.URLParams.bootstrap, u.isBaseOf(s) && !l ? (e.logger.info("api domain is gigya's so keep working with frame"), [2, a.wrapWith(e.services.ApiService)]) : (e.logger.info("closing api frame"), a.stop(!0), l ? i = !0 : c.hasGroupApiDomainChanged && (i = !1), e.logger.info("create and work with api service from top frame"), [2, new e.services.ApiService(e.thisScript.APIKey, i, {
                        originDomain: location.href,
                        isGroupApiDomain: c.isGroupApiDomain,
                        getApiDomain: e._.getApiDomain,
                        isApiDomainFirstParty: !0,
                        hasGroupApiDomainChanged: !1
                      })])
                  }
                })
              })
            }, o.prototype.isSessionValid = function (e, t) {
              void 0 === e && (e = {}), i.tokenStore.setFromGAC(e, function () {
                if (t) {
                  var o = null != i.tokenStore.get(e.APIKey) || null != e.oauth_token;
                  t(o)
                }
              })
            }, o.prototype.registerForNamespaceEvents = function (e) {}, o.prototype.onPluginEvent = function (e) {}, o.prototype.onJSLog = function (e, t) {}, o.prototype.sendRequest = function (o, n, r, s) {
              var a = this;
              void 0 === s && (s = {}), this.beforeRequest(o, n, s);
              var c = function (t, i) {
                  a.afterResponse(l, t, function () {
                    "function" == typeof i && i(e.utils.object.clone(t, !0))
                  })
                },
                u = function (e) {
                  c(e, r)
                },
                l = new i.ApiRequest(o, n, u, s);
              l.send(), t.logoutMethods[o] && t.logoutBehaviour.logoutBeforeServerResponse && this.clearSession(n)
            }, o.prototype.clearSession = function (e, t) {
              i.tokenStore.remove(e.APIKey), t && t()
            }, o.prototype.setGltexpFromSSO = function (t) {
              return void 0 === t && (t = e.thisScript.APIKey), e.partnerSettings.ssoKey && !i.tokenStore.isValidGltExp() ? new e.Promise(function (e) {
                i.sso.getLoginTokenExp({
                  callback: function (t) {
                    var o = !1;
                    t && 0 == t.errorCode && t.gltexp && i.tokenStore.isValidGltExp(t.gltexp) && (i.tokenStore.setGltexp(t.gltexp), o = !0), e(o)
                  }
                })
              }) : e.Promise.resolve(!1)
            }, o.prototype.sendOauthRequest = function (t, o, n, r) {
              var s = this;
              this.beforeRequest(t, o, r);
              var a = (r.forceHttps ? "https" : "http") + "://" + e._.getApiDomain("socialize"),
                c = new i.OauthRequest("", a, t, o, function (e) {
                  s.afterResponse(c, e, function (e) {
                    "0" != e.errorCode ? n(e) : i.apiService.bootstrap().then(function (t) {
                      s.setGmidTicket(t.ticketInfo), n(e)
                    })
                  })
                }, r);
              c.send()
            }, o.prototype.beforeRequest = function (o, n, r) {
              void 0 === r && (r = {}), (r.clearSession || r.clearSessionCondition && r.clearSessionCondition(n)) && (e.logger.info("clearing session before request for " + o), i.tokenStore.remove(n.APIKey)), !e.utils.localStorage.getItem("_gig_3pc_enabled") && e.thisScript.globalConf.enableSSOToken && t.loginMethods[o] && (n.includeSSOToken = !0), r.forceHttps = this.useHttps(n, r)
            }, o.prototype.afterResponse = function (e, t, i) {
              var o = this;
              this.handleTokenResponse(e, t, function () {
                o.logoutSsoIfNeeded(e, t, function () {
                  i(t)
                })
              })
            }, o.prototype.useHttps = function (t, o) {
              void 0 === o && (o = {});
              var n = t && (i.tokenStore.get() || t.regToken || t.oauth_token) && !t.noAuth || o.forceHttps || "https" === e.thisScript.protocol;
              return n
            }, o.prototype.onSDKEvent = function (e) {}, o.prototype.getTokenParam = function (e, t) {
              return i.tokenStore.getTokenParam(e, t)
            }, o.prototype.checkReturnFromURL = function () {
              var o = e.utils.URL.getParamsFromURL(document.location.href);
              o.gig_events && 0 == o.errorCode && null != i.tokenStore.get() && (e.logger.info("returned from redirection with error code"), i.sso.setGroupTokenFromResponse(i.tokenStore.get(), o.expires_in, function (i) {
                var n = o.gig_events.split(",");
                e.utils.array.indexOf(n, "accounts.login") !== -1 ? e.accounts.getAccountInfo({
                  extraProfileFields: "samlData",
                  include: "profile,data,userinfo",
                  callback: function (i) {
                    var o = {
                      errorCode: 0,
                      eventName: "accounts.login"
                    };
                    if (e.utils.object.extractProperties(i, o, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data"), e.events.global.dispatchWhenHandlerAdded(o), e.utils.array.indexOf(n, "socialize.login") !== -1) {
                      var r = t.addUserInfoToEvent(i, {
                        errorCode: 0,
                        eventName: "socialize.login"
                      }, !0);
                      e.events.global.dispatchWhenHandlerAdded(r)
                    }
                  }
                }) : e.socialize.getUserInfo({
                  signIDs: !0,
                  extraFields: "samlData",
                  callback: function (t) {
                    for (var i = 0; i < n.length; i++) {
                      var o = e._.addUserInfoToEvent(t, {
                        errorCode: 0,
                        eventName: n[i]
                      }, !0);
                      e.events.global.dispatchWhenHandlerAdded(o)
                    }
                  }
                })
              }))
            }, o.prototype.setNewLoginTokenFromResponse = function (t, o, n) {
              var r = o.sessionInfo ? o.sessionInfo.login_token : o.login_token;
              if (r) {
                var s = null != o.sessionInfo ? o.sessionInfo.expires_in : o.expires_in,
                  a = t.params.sessionExpiration;
                (!s || 0 == s) && a < 0 && (s = e.utils.cookie.getInfiniteExpirationTimeInSeconds()), i.tokenStore.set(t.params.APIKey, r, s, a), e.utils.cookie.remove("gltexp_" + t.params.APIKey), e.reports.trackAddressBarShares(), i.sso.setGroupTokenFromResponse(r, s, n)
              } else n()
            }, o.prototype.onInvalidTokenResponse = function (e, t) {
              return e.paramsLoginToken ? void t() : void i.sso.getGroupToken({
                callback: function (o) {
                  o && o.login_token && o.login_token.split("|")[0] !== e.sentLoginToken && !e.paramsLoginToken ? i.apiService.bootstrap().then(function (t) {
                    i.tokenStore.setFromSsoResponse(o, e.params.APIKey), e.params.login_token = void 0, e.send()
                  }, function (e) {}) : (i.tokenStore.remove(e.params.APIKey), e.settings.requiresSession() ? t() : (delete e.params.login_token, delete e.sentLoginToken, e.send(t)))
                }
              })
            }, o.prototype.handleTokenResponse = function (o, n, r) {
              var s = this;
              if (n = e.utils.object.clone(n), 403030 == n.errorCode) {
                if (this.shouldWaitForService(o, n)) return
              } else 409012 == n.errorCode && (this._gmidTicket = null, e.utils.localStorage.removeItem("_gig_gmidt"));
              o.sentLoginToken && t.logoutMethods[o.methodName] && 0 == n.errorCode && n.logoutActiveSession && this.clearSession(o.params), e.partnerSettings.ssoKey && o.sentLoginToken && 0 == n.errorCode && o.params.loginTokenExp && i.sso.setLoginTokenExp({
                loginTokenExp: o.params.loginTokenExp
              }), this.setNewLoginTokenFromResponse(o, n, function () {
                o.sentLoginToken && 403005 == n.errorCode ? s.onInvalidTokenResponse(o, r) : r()
              })
            }, o.prototype.logoutSsoIfNeeded = function (o, n, r) {
              var s = this;
              e.partnerSettings.ssoKey && t.logoutMethods[o.methodName] && 0 == n.errorCode && n.logoutActiveSession && document.location.href != e.partnerSettings.ssoLogoutUrl ? i.sso.logout({
                callback: function (e) {
                  var t;
                  void 0 !== o.params.sustainLogoutURLs && (t = !o.params.sustainLogoutURLs), s.loadLogoutUrls(e.logoutURLs, r, {
                    UID: n.UID,
                    UIDSignature: n.UIDSignature,
                    signatureTimestamp: n.signatureTimestamp
                  }, t)
                }
              }) : r()
            }, o.prototype.loadLogoutUrls = function (t, i, o, n) {
              for (var r = 0, s = t ? t.split(",") : [], a = function () {
                  r++, r > s.length && i()
                }, c = 0; c < s.length; c++)
                if (s[c]) {
                  var u = e.utils.URL.addParamsToURL(s[c], o);
                  this.loadLogoutUrl(u, a, n)
                } else a();
              a()
            }, o.prototype.loadLogoutUrl = function (t, i, o) {
              void 0 === o && (o = 5e3);
              var n = document.createElement("iframe");
              n.src = t, n.style.position = "absolute", n.style.top = "-1000px", n.style.left = "-1000px";
              var r = !1,
                s = function () {
                  r = !0, o !== !1 && n.parentElement.removeChild(n), i()
                };
              window.setTimeout(function () {
                r || s()
              }, o), n.onload = function () {
                s()
              }, e.utils.DOM.appendToBody(n)
            }, o.prototype.shouldWaitForService = function (t, i) {
              return !!t.params.retryPossible && (t.params.retryPossible = !1, e.external.facebook.runWhenLoaded(function () {
                t.send()
              }), !0)
            }, o.prototype.getGmidTicket = function () {
              return this._gmidTicket && this.refreshGmidTicket(), this._gmidTicket
            }, o.prototype.refreshGmidTicket = function () {
              var e = this;
              i.apiService.getGmidTicket(!0).then(function (t) {
                return e.setGmidTicket(t)
              })
            }, o.prototype.setGmidTicket = function (t) {
              var i = this;
              if (t && t.gmidTicket) {
                e.logger.info("set gmidTicket (set auto-refresh)"), this._gmidTicket = t.gmidTicket;
                var o = this.calculateGmidTicketNextRun(t.expirationTime);
                setTimeout(function () {
                  return i.refreshGmidTicket()
                }, o)
              } else e.logger.info("clean gmidTicket"), delete this._gmidTicket
            }, o.prototype.calculateGmidTicketNextRun = function (e) {
              var t = new Date(e).getTime();
              return t - (new Date).getTime()
            }, o
          }();
          i.WebAdapter = r
        }(o = i.web || (i.web = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        var i;
        ! function (t) {
          function i() {
            for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
            return __gig_awaiter(this, void 0, e.Promise, function () {
              var o, n, r, s, a, c, u;
              return __gig_generator(this, function (l) {
                switch (l.label) {
                  case 0:
                    return o = e.utils.object.merge([e.thisScript.globalConf, i]), n = o.redirectURL || document.location.href, r = e._.apiAdapter.getGmidTicket(), s = t.tokenStore.get(o.APIKey), s && !e._.apiAdapters.isSessionFromSso && (r || e.partnerSettings.ssoKey) ? [3, 1] : (e.utils.HTTP.redirect(n, [{}], "GET", "_top"), [3, 4]);
                  case 1:
                    return e.logger.info("retrieving gmid ticket"), a = r, a ? [3, 3] : [4, t.apiService.getGmidTicket(!0)];
                  case 2:
                    a = l.sent().gmidTicket, l.label = 3;
                  case 3:
                    r = a, c = {
                      apiKey: o.APIKey,
                      apiDomain: e._.getApiDomain(),
                      gmidTicket: r,
                      sessionExpiration: t.tokenStore.getCurrentSessionExpiration() || o.sessionExpiration,
                      loginToken: s,
                      redirectURL: n
                    }, e.logger.info("redirecting to SSOGateway"), u = "https://" + e._.getGigyaDomain("socialize") + "/gs/SSOGateway.aspx", e.utils.HTTP.redirect(u, [c], "POST", "_top"), l.label = 4;
                  case 4:
                    return [2]
                }
              })
            })
          }

          function o(i) {
            return void 0 === i && (i = t.tokenStore.getGltexpCookie()), e.partnerSettings.ssoKey ? new e.Promise(function (e) {
              return t.sso.setLoginTokenExp({
                loginTokenExp: i,
                callback: e
              }, !1)
            }).then(function (o) {
              var n = o.gltexp && o.gltexp !== i;
              return n && t.tokenStore.setGltexp(o.gltexp), {
                hasChanged: n,
                oldExpiration: e.utils.gltexp.getMillis(i),
                newExpiration: e.utils.gltexp.getMillis(o.gltexp || i)
              }
            }) : e.Promise.resolve()
          }
          t.setSSOToken = i, t.syncGroupGltExp = o
        }(i = t.web || (t.web = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {})),
  function (e) {
    e.setSSOToken = e._.apiAdapters.web.setSSOToken, e.syncGroupGltExp = e._.apiAdapters.web.syncGroupGltExp
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i = function () {
        function t() {}
        return t.prototype.verifyLogin = function () {
          return __gig_awaiter(this, void 0, e.Promise, function () {
            var t, i;
            return __gig_generator(this, function (o) {
              return t = Number(e.thisScript.globalConf.verifyLoginInterval), isNaN(t) ? [2, !0] : (t <= 0 && (t = 1), i = 3600 * Math.ceil(t) * 1e3, e.utils.date.now() < this.lastVerification + i ? [2, !0] : (this.lastVerification = e.utils.date.now(), [2, new e.Promise(function (t) {
                e.accounts.verifyLogin({
                  ignoreApiQueue: !0,
                  callback: function (e) {
                    t(0 === e.errorCode)
                  }
                })
              })]))
            })
          })
        }, Object.defineProperty(t.prototype, "lastVerification", {
          get: function () {
            return Number(e.utils.cookie.get("gig_last_ver_" + e.thisScript.APIKey))
          },
          set: function (t) {
            e.utils.cookie.set("gig_last_ver_" + e.thisScript.APIKey, String(t))
          },
          enumerable: !0,
          configurable: !0
        }), t
      }();
      t.AccountService = i, t.accountService = new i
    }(t = e.services || (e.services = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        e.isSessionFromSso = !1
      }(t = e.apiAdapters || (e.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var __gig_awaiter = this && this.__gig_awaiter || function (e, t, i, n) {
      return new(i || (i = Promise))(function (o, r) {
        function s(e) {
          try {
            u(n.next(e))
          } catch (e) {
            r(e)
          }
        }

        function a(e) {
          try {
            u(n.throw(e))
          } catch (e) {
            r(e)
          }
        }

        function u(e) {
          e.done ? o(e.value) : new i(function (t) {
            t(e.value)
          }).then(s, a)
        }
        u((n = n.apply(e, t || [])).next())
      })
    },
    __gig_generator = this && this.__gig_generator || function (e, t) {
      function i(e) {
        return function (t) {
          return n([e, t])
        }
      }

      function n(i) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; u;) try {
          if (o = 1, r && (s = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(r, i[1])).done) return s;
          switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
              s = i;
              break;
            case 4:
              return u.label++, {
                value: i[1],
                done: !1
              };
            case 5:
              u.label++, r = i[1], i = [0];
              continue;
            case 7:
              i = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                u = 0;
                continue
              }
              if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                u.label = i[1];
                break
              }
              if (6 === i[0] && u.label < s[1]) {
                u.label = s[1], s = i;
                break
              }
              if (s && u.label < s[2]) {
                u.label = s[2], u.ops.push(i);
                break
              }
              s[2] && u.ops.pop(), u.trys.pop();
              continue
          }
          i = t.call(e, u)
        } catch (e) {
          i = [6, e], r = 0
        } finally {
          o = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        }
      }
      var o, r, s, a, u = {
        label: 0,
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1]
        },
        trys: [],
        ops: []
      };
      return a = {
        next: i(0),
        throw: i(1),
        return: i(2)
      }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
        return this
      }), a
    },
    gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (i) {
        var n;
        ! function (i) {
          function n(e) {
            return new v(e)
          }
          i.newApiAdapter = n, i.mobileCallbacks = {};
          var o = "gsapi://",
            r = "is_session_valid",
            s = "send_request",
            a = "send_oauth_request",
            u = "get_ids",
            l = "on_plugin_event",
            c = "on_custom_event",
            p = "register_for_namespace_events",
            f = "clear_session",
            g = "on_js_log",
            d = [r, s, a, u, l, c, p],
            h = {
              logLevel: []
            },
            v = function () {
              function n(e) {
                this.nativeProxy = e, this.name = "Mobile"
              }
              return n.prototype.init = function (t) {
                return __gig_awaiter(this, void 0, e.Promise, function () {
                  var i = this;
                  return __gig_generator(this, function (n) {
                    return this.nativeProxy && "function" == typeof this.nativeProxy.getFeatures ? this.features = e.utils.JSON.deserialize(this.nativeProxy.getFeatures()) : this.features = d, this.nativeProxy && "function" == typeof this.nativeProxy.getSettings ? (this.settings = e.utils.JSON.deserialize(this.nativeProxy.getSettings()), this.settings.logLevel = e.utils.array.getArrayFromString(this.settings.logLevel || h.logLevel.join(","), ",")) : this.settings = h, this.nativeProxy && "function" == typeof this.nativeProxy.getObfuscationStrategy && (this.obfuscationStrategy = this.nativeProxy.getObfuscationStrategy()), e._.getApiDomain = e._.apiDomainFactory(e.partnerSettings.plugins.apiDomain, e.defaultApiDomain), e.events.addMap({
                      defaultMethod: function (e) {
                        i.onPluginEvent(e)
                      },
                      eventMap: [{
                        events: "*",
                        args: ["$event"]
                      }]
                    }), this.sendToMobile(u, {}, function (n) {
                      i.ucid = n.ucid, i.gcid = n.gcid;
                      for (var o in e.events.global._activeNamespaces) i.registerForNamespaceEvents(o);
                      e.localInfo.isNativeMobileApp = !0, t()
                    }), [2]
                  })
                })
              }, n.prototype.getTokenParam = function (e, t) {
                return ""
              }, n.prototype.onPluginEvent = function (e) {
                e.isGlobal || this.sendToMobile(l, e)
              }, n.prototype.onCustomEvent = function (e) {
                this.sendToMobile(c, e)
              }, n.prototype.onJSLog = function (e, t) {
                if (this.isLogLevelSupported(e)) {
                  var i = {
                    logType: e,
                    logInfo: t
                  };
                  this.sendToMobile(g, i)
                }
              }, n.prototype.registerForNamespaceEvents = function (e) {
                this.sendToMobile(p, {
                  namespace: e
                })
              }, n.prototype.getGmidTicket = function (e) {
                if (e) {
                  var t = {
                      expires: 30
                    },
                    i = {
                      forceHttps: !0
                    };
                  return this.sendRequest("socialize.getGmidTicket", t, function (t) {
                    e(t.gmidTicket)
                  }, i), ""
                }
              }, n.prototype.clearSession = function (e, t) {
                this.sendToMobile(f, e, t)
              }, n.prototype.isSessionValid = function (e, t) {
                this.sendToMobile(r, {}, t)
              }, n.prototype.sendRequest = function (e, t, i, n) {
                this.sendToMobile(s, t, i, e, n)
              }, n.prototype.sendOauthRequest = function (e, t, i, n) {
                this.sendToMobile(a, t, i, e, n)
              }, n.prototype.sendToMobile = function (t, n, o, r, s) {
                var a = this;
                if (void 0 === r && (r = ""), this.isActionSupported(t)) {
                  n && delete n.APIKey;
                  var u = "";
                  o && (u = (new Date).getTime() + "_" + Math.random(), i.mobileCallbacks[u] = function (e) {
                    o(a.unobfuscate(e, !0)), delete i.mobileCallbacks[u]
                  });
                  var l = this.obfuscate(e.utils.keyValue.serialize(n)),
                    c = e.utils.keyValue.serialize(s),
                    p = "callbackID=" + u + "&params=" + encodeURIComponent(l) + "&settings=" + encodeURIComponent(c);
                  if (this.nativeProxy.sendToMobile) {
                    var f = this.nativeProxy.sendToMobile(t, r, p);
                    if (!f) {
                      var g = "The Native Mobile SDK does not support feature " + t;
                      e.logger.error(g), i.mobileCallbacks[u]({
                        errorCode: 400096,
                        errorMessage: g
                      })
                    }
                  } else this.sendWithIframe(t, r, p, u)
                } else o && o({
                  errorCode: 400096,
                  errorMessage: "Mobile SDK does not support feature " + t
                })
              }, n.prototype.sendWithIframe = function (e, t, n, r) {
                function s() {
                  if (a) try {
                    document.documentElement.removeChild(a), a.remove()
                  } catch (e) {}
                }
                var a = document.createElement("iframe");
                if (a.style.display = "none", a.src = "" + o + e + "/" + t + "?" + n, r && i.mobileCallbacks[r]) {
                  var u = i.mobileCallbacks[r];
                  i.mobileCallbacks[r] = function (e) {
                    u(e), s()
                  }
                } else window.setTimeout(function () {
                  return s()
                }, 300);
                window.setTimeout(function () {
                  return document.documentElement.appendChild(a)
                }, 0)
              }, n.prototype.onSDKEvent = function (i) {
                i && i.user && t.convertIdentitiesArrayToObject(i.user), e.events.global.dispatch(i)
              }, n.prototype.isActionSupported = function (t) {
                return !!t && e.utils.array.indexOf(this.features, t) > -1
              }, n.prototype.isLogLevelSupported = function (t) {
                return e.utils.array.indexOf(this.settings.logLevel, "*") != -1 || e.utils.array.indexOf(this.settings.logLevel, t) != -1
              }, n.prototype.setGltexpFromSSO = function (t) {
                return e.Promise.resolve(!1)
              }, n.prototype.obfuscate = function (e) {
                return "base64" === this.obfuscationStrategy ? btoa(e) : e
              }, n.prototype.unobfuscate = function (e, t) {
                if ("base64" === this.obfuscationStrategy) {
                  var i = atob(e);
                  return t ? JSON.parse(i) : i
                }
                return e
              }, n
            }();
          i.MobileAdapter = v
        }(n = i.mobile || (i.mobile = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        var i;
        ! function (t) {
          function i(t, i) {
            var n = t.split("."),
              o = n.splice(n.length - 1, 1)[0];
            n.length || (n = ["socialize"]), "commentsUI" == t && (n = ["comments"]);
            var r = "show" + e.utils.stringUtils.capitalize(o);
            n.push(r);
            for (var s = e; s && n.length;) s = s[n.shift()];
            return "function" != typeof s ? e.events.dispatchInvalidParamError(e.utils.object.merge([{
              plugin: t
            }, i]), "plugin") : void s(i)
          }
          t.showPlugin = i
        }(i = t.mobile || (t.mobile = {}))
      }(i = t.apiAdapters || (t.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  // end API adapters
  var __extends = this && this.__extends || function () {
      var e = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (e, t) {
        e.__proto__ = t
      } || function (e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
      };
      return function (t, i) {
        function n() {
          this.constructor = t
        }
        e(t, i), t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
      }
    }(),
    __gig_awaiter = this && this.__gig_awaiter || function (e, t, i, n) {
      return new(i || (i = Promise))(function (o, r) {
        function a(e) {
          try {
            c(n.next(e))
          } catch (e) {
            r(e)
          }
        }

        function s(e) {
          try {
            c(n.throw(e))
          } catch (e) {
            r(e)
          }
        }

        function c(e) {
          e.done ? o(e.value) : new i(function (t) {
            t(e.value)
          }).then(a, s)
        }
        c((n = n.apply(e, t || [])).next())
      })
    },
    __gig_generator = this && this.__gig_generator || function (e, t) {
      function i(e) {
        return function (t) {
          return n([e, t])
        }
      }

      function n(i) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; c;) try {
          if (o = 1, r && (a = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(a = a.call(r, i[1])).done) return a;
          switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
              a = i;
              break;
            case 4:
              return c.label++, {
                value: i[1],
                done: !1
              };
            case 5:
              c.label++, r = i[1], i = [0];
              continue;
            case 7:
              i = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                c = 0;
                continue
              }
              if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                c.label = i[1];
                break
              }
              if (6 === i[0] && c.label < a[1]) {
                c.label = a[1], a = i;
                break
              }
              if (a && c.label < a[2]) {
                c.label = a[2], c.ops.push(i);
                break
              }
              a[2] && c.ops.pop(), c.trys.pop();
              continue
          }
          i = t.call(e, c)
        } catch (e) {
          i = [6, e], r = 0
        } finally {
          o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        }
      }
      var o, r, a, s, c = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return s = {
        next: i(0),
        throw: i(1),
        return: i(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
        return this
      }), s
    };
  ! function (e, t) {
    e.ES6Promise = t()
  }(window, function () {
    "use strict";

    function e(e) {
      return "function" == typeof e || "object" == typeof e && null !== e
    }

    function t(e) {
      return "function" == typeof e
    }

    function i(e) {
      V = e
    }

    function n(e) {
      K = e
    }

    function o() {
      return function () {}
    }

    function r() {
      var e = 0,
        t = new W(c),
        i = document.createTextNode("");
      return t.observe(i, {
          characterData: !0
        }),
        function () {
          i.data = e = ++e % 2
        }
    }

    function a() {
      var e = new MessageChannel;
      return e.port1.onmessage = c,
        function () {
          return e.port2.postMessage(0)
        }
    }

    function s() {
      var e = setTimeout;
      return function () {
        return e(c, 1)
      }
    }

    function c() {
      for (var e = 0; e < q; e += 2) {
        var t = Q[e],
          i = Q[e + 1];
        t(i), Q[e] = void 0, Q[e + 1] = void 0
      }
      q = 0
    }

    function l(e, t) {
      var i = arguments,
        n = this,
        o = new this.constructor(g);
      void 0 === o[Z] && D(o);
      var r = n._state;
      return r ? ! function () {
        var e = i[r - 1];
        K(function () {
          return P(r, o, e, n._result)
        })
      }() : S(n, o, e, t), o
    }

    function u(e) {
      var t = this;
      if (e && "object" == typeof e && e.constructor === t) return e;
      var i = new t(g);
      return y(i, e), i
    }

    function g() {}

    function d() {
      return new TypeError("You cannot resolve a promise with itself")
    }

    function p() {
      return new TypeError("A promises callback cannot return that same promise.")
    }

    function f(e) {
      try {
        return e.then
      } catch (e) {
        return ne.error = e, ne
      }
    }

    function h(e, t, i) {
      K(function (e) {
        var n = !1,
          o = M(i, t, function (i) {
            n || (n = !0, t !== i ? y(e, i) : w(e, i))
          }, function (t) {
            n || (n = !0, I(e, t))
          }, "Settle: " + (e._label || " unknown promise"));
        !n && o && (n = !0, I(e, o))
      }, e)
    }

    function v(e, t) {
      t._state === te ? w(e, t._result) : t._state === ie ? I(e, t._result) : S(t, void 0, function (t) {
        return y(e, t)
      }, function (t) {
        return I(e, t)
      })
    }

    function m(e, i, n) {
      i.constructor === e.constructor && n === l && i.constructor.resolve === u ? v(e, i) : n === ne ? I(e, ne.error) : void 0 === n ? w(e, i) : t(n) ? h(e, i, n) : w(e, i)
    }

    function y(t, i) {
      t === i ? I(t, d()) : e(i) ? m(t, i, f(i)) : w(t, i)
    }

    function b(e) {
      e._onerror && e._onerror(e._result), A(e)
    }

    function w(e, t) {
      e._state === ee && (e._result = t, e._state = te, 0 !== e._subscribers.length && K(A, e))
    }

    function I(e, t) {
      e._state === ee && (e._state = ie, e._result = t, K(b, e))
    }

    function S(e, t, i, n) {
      var o = e._subscribers,
        r = o.length;
      e._onerror = null, o[r] = t, o[r + te] = i, o[r + ie] = n, 0 === r && e._state && K(A, e)
    }

    function A(e) {
      var t = e._subscribers,
        i = e._state;
      if (0 !== t.length) {
        for (var n = void 0, o = void 0, r = e._result, a = 0; a < t.length; a += 3) n = t[a], o = t[a + i], n ? P(i, n, o, r) : o(r);
        e._subscribers.length = 0
      }
    }

    function _() {
      this.error = null
    }

    function C(e, t) {
      try {
        return e(t)
      } catch (e) {
        return oe.error = e, oe
      }
    }

    function P(e, i, n, o) {
      var r = t(n),
        a = void 0,
        s = void 0,
        c = void 0,
        l = void 0;
      if (r) {
        if (a = C(n, o), a === oe ? (l = !0, s = a.error, a = null) : c = !0, i === a) return void I(i, p())
      } else a = o, c = !0;
      i._state !== ee || (r && c ? y(i, a) : l ? I(i, s) : e === te ? w(i, a) : e === ie && I(i, a))
    }

    function k(e, t) {
      try {
        t(function (t) {
          y(e, t)
        }, function (t) {
          I(e, t)
        })
      } catch (t) {
        I(e, t)
      }
    }

    function L() {
      return re++
    }

    function D(e) {
      e[Z] = re++, e._state = void 0, e._result = void 0, e._subscribers = []
    }

    function x(e, t) {
      this._instanceConstructor = e, this.promise = new e(g), this.promise[Z] || D(this.promise), B(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && w(this.promise, this._result))) : I(this.promise, E())
    }

    function E() {
      return new Error("Array Methods must be provided an Array")
    }

    function U(e) {
      return new x(this, e).promise
    }

    function O(e) {
      var t = this;
      return new t(B(e) ? function (i, n) {
        for (var o = e.length, r = 0; r < o; r++) t.resolve(e[r]).then(i, n)
      } : function (e, t) {
        return t(new TypeError("You must pass an array to race."))
      })
    }

    function N(e) {
      var t = this,
        i = new t(g);
      return I(i, e), i
    }

    function T() {
      throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }

    function R() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }

    function z() {
      var e = void 0;
      if ("undefined" != typeof self) e = self;
      else try {
        e = Function("return this")()
      } catch (e) {
        throw new Error("polyfill failed because global object is unavailable in this environment")
      }
      var t = e.Promise;
      if (t) {
        var i = null;
        try {
          i = Object.prototype.toString.call(t.resolve())
        } catch (e) {}
        if ("[object Promise]" === i && !t.cast) return
      }
      e.Promise = j
    }
    var M = function (e, t, i, n) {
        try {
          e.call(t, i, n)
        } catch (e) {
          return e
        }
      },
      j = function (e) {
        this[Z] = L(), this._result = this._state = void 0, this._subscribers = [], g !== e && ("function" != typeof e && T(), this instanceof j ? k(this, e) : R())
      },
      F = void 0;
    F = Array.isArray ? Array.isArray : function (e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    };
    var B = F,
      q = 0,
      H = void 0,
      V = void 0,
      K = function (e, t) {
        Q[q] = e, Q[q + 1] = t, q += 2, 2 === q && (V ? V(c) : X())
      },
      G = "undefined" != typeof window ? window : void 0,
      J = G || {},
      W = J.MutationObserver || J.WebKitMutationObserver,
      $ = "undefined" == typeof self && !1 && "[object process]" === {}.toString.call({}),
      Y = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
      Q = new Array(1e3),
      X = void 0;
    X = $ ? o() : W ? r() : Y ? a() : s();
    var Z = Math.random().toString(36).substring(16),
      ee = void 0,
      te = 1,
      ie = 2,
      ne = new _,
      oe = new _,
      re = 0;
    return x.prototype._enumerate = function () {
      for (var e = this.length, t = this._input, i = 0; this._state === ee && i < e; i++) this._eachEntry(t[i], i)
    }, x.prototype._eachEntry = function (e, t) {
      var i = this._instanceConstructor,
        n = i.resolve;
      if (n === u) {
        var o = f(e);
        if (o === l && e._state !== ee) this._settledAt(e._state, t, e._result);
        else if ("function" != typeof o) this._remaining--, this._result[t] = e;
        else if (i === j) {
          var r = new i(g);
          m(r, e, o), this._willSettleAt(r, t)
        } else this._willSettleAt(new i(function (t) {
          return t(e)
        }), t)
      } else this._willSettleAt(n(e), t)
    }, x.prototype._settledAt = function (e, t, i) {
      var n = this.promise;
      n._state === ee && (this._remaining--, e === ie ? I(n, i) : this._result[t] = i), 0 === this._remaining && w(n, this._result)
    }, x.prototype._willSettleAt = function (e, t) {
      var i = this;
      S(e, void 0, function (e) {
        return i._settledAt(te, t, e)
      }, function (e) {
        return i._settledAt(ie, t, e)
      })
    }, j.all = U, j.race = O, j.resolve = u, j.reject = N, j._setScheduler = i, j._setAsap = n, j._asap = K, j.prototype = {
      constructor: j,
      then: l,
      catch: function (e) {
        return this.then(null, e)
      }
    }, j.polyfill = z, j.Promise = j, j
  });
  var gigya;
  ! function (e) {
    e.Promise = window.ES6Promise
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      e[e.disabled = 0] = "disabled", e[e.debug = 1] = "debug", e[e.info = 2] = "info", e[e.warn = 3] = "warn", e[e.error = 4] = "error"
    }(t = e.LogLevel || (e.LogLevel = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      function t(e, t, i) {
        void 0 === i && (i = "&");
        var n = e.match(new RegExp(t + "=([^" + i + "]*)"));
        return n ? n[1] : null
      }

      function i(e, i) {
        var n = t(e, i);
        return n ? decodeURIComponent(n) : null
      }
      e.getParamValue = t, e.getReqParamValue = i
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      function t() {
        for (var e, t = document.getElementsByTagName("script"), o = function (o) {
            var r = t[o],
              a = r.src.toLowerCase();
            if ("" !== a && (i.test(a) || a.indexOf("?apikey=") > -1)) {
              var s = 0 === n.length || n.some(function (e) {
                return a.indexOf(e) > -1
              });
              if (s) return e = r, "break"
            }
          }, r = t.length - 1; r >= 0; r--) {
          var a = o(r);
          if ("break" === a) break
        }
        return e
      }
      var i = /\/\/cdn(s)?\.(ru1\.)?gigya.com/,
        n = ["gigya.js", "socialize.js", "socialize2.js", "gsjssdk.js"];
      e.getGigyaScriptElement = t
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    e.gigErrorReport = "gigErrorReport";
    var t = {
        logLevel: e.LogLevel.disabled,
        clientMuteLevel: 0,
        logTheme: 1
      },
      i = (l = {}, l[0] = [""], l[1] = ["38f689", "009FD4", "b381b3", "71b6ef", "64c162", "977bd8", "d168a4", "4c71d2", "84b466", "7d638a", "799fb7", "8fdf98", "dc7767", "0a70f5", "38b159", "af721b", "bfaf6f"], l[2] = ["40806A", "003636", "9B59B6", "DB0A5B", "7928A1", "522032", "0000E0", "00202A", "000036", "005555", "1D781D", "4F5A65", "765AB0", "000000", "3C1362", "000060", "591D77"], l),
      n = "color: #b0b0b0b0;",
      o = "",
      r = e.LogLevel.warn,
      a = 1,
      s = function (e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i]
      },
      c = function () {
        function c(e) {
          this._global = e, this._groupsStack = [], this._currColorIdx = 0, this.configKey = "gig_loggerConfig", this._console = this._global.console, this.isEnabled && this.overrideClientLogs()
        }
        return c.prototype.getConfig = function () {
          return this._config || (this._config = this.readLoggerConfigFromHash() || this.readLoggerConfigFromCookie() || t), this._config
        }, Object.defineProperty(c.prototype, "isEnabled", {
          get: function () {
            return this.getConfig().logLevel > e.LogLevel.disabled
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(c.prototype, "logLevel", {
          get: function () {
            return this.getConfig().logLevel
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(c.prototype, "palette", {
          get: function () {
            return i[this.getConfig().logTheme]
          },
          enumerable: !0,
          configurable: !0
        }), c.prototype.getNextColor = function () {
          return 0 === this.getConfig().logTheme ? "" : (this._currColorIdx >= this.palette.length && (this._currColorIdx = 0), "#" + this.palette[this._currColorIdx++])
        }, Object.defineProperty(c.prototype, "currentGroup", {
          get: function () {
            return this._groupsStack[this._groupsStack.length - 1]
          },
          enumerable: !0,
          configurable: !0
        }), c.prototype.readLoggerConfigFromHash = function () {
          var t = null,
            i = e.utils.getReqParamValue(location.hash, this.configKey);
          if (i) try {
            t = JSON.parse(decodeURIComponent(i))
          } catch (e) {
            console.error("[Gigya]: exception while trying to parse logger config from hash", e)
          }
          return t
        }, c.prototype.readLoggerConfigFromCookie = function () {
          var t = null,
            i = e.utils.getParamValue(document.cookie, this.configKey, ";");
          if (i) try {
            t = JSON.parse(i)
          } catch (e) {
            console.error("[Gigya]: exception while trying to parse logger config from cookie", e)
          }
          return t
        }, c.prototype.setLoggerConfigCookie = function (e) {
          document.cookie = this.configKey + "=" + JSON.stringify(e)
        }, c.prototype.overrideClientLogs = function () {
          var e = this,
            t = this._global.Proxy;
          if (t) switch (this.getConfig().clientMuteLevel) {
            case 0:
              break;
            case 2:
              this._global.console = new t(this._global.console, {
                get: function () {
                  return s
                }
              });
              break;
            case 1:
            default:
              this._global.console = new t(this._global.console, {
                get: function (t, i) {
                  return ["group", "groupCollapsed", "groupEnd"].indexOf(i) !== -1 ? function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return (o = e._console).log.apply(o, ["client has called console." + i].concat(t));
                    var o
                  } : t[i]
                }
              })
          }
        }, c.prototype.getFormattedLogArgs = function (e, t) {
          return void 0 === e && (e = ""), void 0 === t && (t = this.currentGroup), {
            text: t ? "%c█" + e : "%c" + e,
            css: t ? "color: " + t.color + ";" : ""
          }
        }, c.prototype.restoreHangingGroups = function (e) {
          for (; e.length;) {
            var t = e.shift();
            this._groupsStack.push(t);
            var i = this.getFormattedLogArgs(" %c[RESTORED - " + t.groupTitle + "]");
            this._console.groupCollapsed(i.text, i.css, n)
          }
        }, c.prototype.endGroup = function (e) {
          var t = this.getFormattedLogArgs(" [END - " + e.groupTitle + "]", e);
          this._console.log(t.text, t.css), this._console.groupEnd()
        }, c.prototype.log = function (t) {
          if (this.isEnabled && t >= this.logLevel || t >= r && this.logLevel < r) {
            var i = e.LogLevel[t],
              a = t === e.LogLevel.debug ? e.LogLevel[e.LogLevel.info] : i,
              c = this.getFormattedLogArgs(" %c[" + i + "]");
            return this._console[a].bind(this._console, c.text, c.css, t <= e.LogLevel.info ? n : o)
          }
          return s
        }, c.prototype.getJsonFromError = function (e) {
          return {
            name: e.name,
            message: e.message,
            stack: e.stack
          }
        }, Object.defineProperty(c.prototype, "debug", {
          get: function () {
            return this.log(e.LogLevel.debug)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(c.prototype, "info", {
          get: function () {
            return this.log(e.LogLevel.info)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(c.prototype, "warn", {
          get: function () {
            return this.log(e.LogLevel.warn)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(c.prototype, "error", {
          get: function () {
            var t = this;
            return function (i, n) {
              n && "object" == typeof n && Object.keys(n).forEach(function (e) {
                n[e] instanceof Error && (n[e] = t.getJsonFromError(n[e]))
              }), t.log(e.LogLevel.error).apply(t, [i].concat([n])), t.report(i, n)
            }
          },
          enumerable: !0,
          configurable: !0
        }), c.prototype.group = function (e, t) {
          var i = this;
          if (void 0 === t && (t = 1 === a), this.isEnabled) {
            var n = this.getNextColor(),
              o = function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return t ? (o = i._console).groupCollapsed.apply(o, e) : (r = i._console).group.apply(r, e);
                var o, r
              };
            this._groupsStack.push({
              groupTitle: e,
              color: n
            });
            var r = this.getFormattedLogArgs(" [START - " + e + "]");
            o(r.text, r.css)
          }
          return {
            end: function () {
              return i.groupEnd(e)
            },
            endWhen: function (t) {
              "function" == typeof t && (t = t()), t && t.then ? t.then(function () {
                return i.groupEnd(e)
              }) : i.groupEnd(e)
            }
          }
        }, c.prototype.groupEnd = function (e) {
          if (this.isEnabled) {
            for (var t = [], i = this._groupsStack.pop(); i.groupTitle !== e && this._groupsStack.length;) t.unshift(i), i = this._groupsStack.pop(), this._console.groupEnd();
            this.endGroup(i), t.length && this.restoreHangingGroups(t)
          }
        }, c.prototype.enable = function (t, i, n) {
          void 0 === t && (t = e.LogLevel.info), void 0 === i && (i = 1), void 0 === n && (n = 1), this.setLoggerConfigCookie({
            logLevel: t,
            clientMuteLevel: i,
            logTheme: n
          })
        }, c.prototype.disable = function () {
          this.setLoggerConfigCookie({
            logLevel: e.LogLevel.disabled,
            clientMuteLevel: t.clientMuteLevel,
            logTheme: t.logTheme
          })
        }, c
      }();
    e.BaseLogger = c;
    var l
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t = function (t) {
      function i(e) {
        void 0 === e && (e = window);
        var i = t.call(this, e) || this;
        return i._global = e, i
      }
      return __extends(i, t), i.prototype.report = function (t, i) {
        try {
          var n = document.createElement("a");
          n.href = e.utils.getReqParamValue(location.hash, "origin") || e.utils.getReqParamValue(location.hash, "d");
          var o = n.protocol + "//" + n.hostname + (n.port ? ":" + n.port : "");
          this._global.top.postMessage(JSON.stringify({
            type: e.gigErrorReport,
            message: t,
            details: i
          }), o)
        } catch (e) {
          console.error(e)
        }
      }, i
    }(e.BaseLogger);
    e.IFrameLogger = t
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    function t(e, t) {
      var i = document.createElement("script");
      i.src = e + "?" + t, i.type = "text/javascript", i.onload = function () {
        document.getElementsByTagName("head")[0].removeChild(i)
      }, document.getElementsByTagName("head")[0].appendChild(i)
    }
    e.loggerJsonp = t
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t = function (t) {
      function i(i, n, o, r, a) {
        void 0 === i && (i = window), void 0 === n && (n = e.errorReport), void 0 === o && (o = e.canary), void 0 === r && (r = function () {
          return 100 * Math.random()
        }), void 0 === a && (a = e.loggerJsonp);
        var s = t.call(this, i) || this;
        s._global = i, s._errorReportConfig = n, s._canaryConfig = o, s._random = r, s._jsonp = a;
        var c = s._errorReportConfig && s._errorReportConfig.enabled,
          l = s._canaryConfig && s._canaryConfig.isActive,
          u = s.enrollErrorReporting();
        return c && (l || u) && (s._isErrorReporter = !0, s.setupMessageListener()), s
      }
      return __extends(i, t), i.prototype.enrollErrorReporting = function () {
        return (this._errorReportConfig && this._errorReportConfig.probability) >= this._random()
      }, i.prototype.setupMessageListener = function () {
        var t = this,
          i = function (i) {
            var n = e.dataCenter,
              o = e.defaultApiDomain.replace(/\./g, "."),
              r = new RegExp("cdns?." + n + "." + o + "$");
            if (i.origin.match(r)) try {
              var a = JSON.parse(i.data);
              a.type === e.gigErrorReport && t.report(a.message, a.details)
            } catch (e) {}
          };
        this._global.addEventListener("message", i, !1)
      }, i.prototype.getApiKey = function () {
        var t = e.thisScript && e.thisScript.APIKey;
        if (!t) {
          var i = e.utils.getGigyaScriptElement(),
            n = e.utils.URL.getParamsFromURL(i && i.src, !0) || {};
          t = n.apikey
        }
        return t
      }, i.prototype.createReportParams = function (t, i) {
        var n = {
          message: t,
          apiKey: this.getApiKey(),
          stack: (new Error).stack,
          page: e.localInfo && e.localInfo.pageDomain,
          browser: e.localInfo && e.localInfo.currentBrowser,
          buildVersion: e.build.version,
          buildNumber: e.build.number,
          callback: "gigya.callback",
          format: "jsonp",
          sdk: "web"
        };
        return i && (n.details = JSON.stringify(i)), Object.keys(n).map(function (e) {
          return e + "=" + encodeURIComponent(n[e])
        }).join("&")
      }, i.prototype.report = function (t, i) {
        if (this._isErrorReporter) try {
          var n = this.createReportParams(t, i),
            o = location.protocol + "//accounts." + e.dataCenter + "." + e.defaultApiDomain + "/sdk.errorReport";
          this._jsonp(o, n)
        } catch (e) {}
      }, i
    }(e.BaseLogger);
    e.ParentLogger = t
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    e.logger = window === window.top ? new e.ParentLogger : new e.IFrameLogger
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i = function () {
        function t(t, i) {
          void 0 === i && (i = !0), this._anchor = document.createElement("a"), i && t.indexOf("://") === -1 && "/" !== t.charAt(0) && (t = e.localInfo.protocol + "://" + t), this._anchor.href = t
        }
        return Object.defineProperty(t.prototype, "domain", {
          get: function () {
            return this._anchor.hostname
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "path", {
          get: function () {
            return this._anchor.pathname
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "search", {
          get: function () {
            return this._anchor.search.slice(1)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "hash", {
          get: function () {
            return this._anchor.hash.slice(1)
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.toString = function () {
          return this._anchor.href
        }, t.prototype.addToSearch = function (e) {
          for (var t in e) {
            var i = e[t];
            if (("boolean" == typeof i || "number" == typeof i || "string" == typeof i) && "eventName" != t) {
              var n = this._anchor.search ? "&" : "";
              this._anchor.search += "" + n + t + "=" + encodeURIComponent(e[t])
            }
          }
        }, t.prototype.isBaseOf = function (e) {
          return t.parse(e).isIn(this)
        }, t.prototype.isIn = function (e) {
          return "string" == typeof e && (e = t.parse(e)), (this.domain == e.domain || this.isSubDomainOf(e)) && (!e.path || 0 == this.path.indexOf(e.path))
        }, t.prototype.isForSubDomains = function () {
          return 0 == this.domain.indexOf(".")
        }, t.prototype.isSubDomainOf = function (t) {
          var i = "";
          return t.isForSubDomains() || (i = "."), i += t.domain, e.utils.stringUtils.endsWith(this.domain, i)
        }, t.parse = function (e, i) {
          if (void 0 === i && (i = !0), e) return new t(e, i)
        }, t
      }();
      t.Uri = i
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e) {
          return e.replace(/^\s*(\S*(.*\S)?)\s*$/, "$1")
        }

        function i(e) {
          for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
          for (var n = 0; n < arguments.length - 1; n++) null != arguments[n + 1] && (e = e.split("{" + n + "}").join(arguments[n + 1]));
          return e
        }

        function n(e) {
          return e.substring(0, 1).toUpperCase() + e.substring(1)
        }

        function o(e, t) {
          return e.indexOf(t, e.length - t.length) !== -1
        }

        function r(e) {
          return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
        }

        function a(e, t, i) {
          return t ? e.replace(new RegExp(r(t), "g"), i) : e
        }
        e.trim = t, e.format = i, e.capitalize = n, e.endsWith = o, e.escapeRegExp = r, e.replaceAll = a
      }(t = e.stringUtils || (e.stringUtils = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      function i(i, n) {
        void 0 === i && (i = r()), void 0 === n && (n = e.defaultApiDomain);
        var o = t.Uri.parse(i).isIn(t.Uri.parse(n));
        return function (t) {
          if (t && o) {
            var n = t.split(".")[0];
            return a.indexOf(n) == -1 && (e.logger.error("trying to send request to an invalid domain"), n = a[0]), n + "." + i
          }
          return i
        }
      }

      function n(t, i, n) {
        void 0 === i && (i = e.dataCenter), void 0 === n && (n = e.defaultApiDomain);
        var o = i + "." + n;
        return t ? t + "." + o : o
      }

      function o(i, n, o) {
        if (void 0 === i && (i = e.partnerSettings.baseDomains.split(",")), void 0 === n && (n = location.hostname), void 0 === o && (o = ["gigya.com", "gigya-api.cn", e.defaultApiDomain]), !n) return "";
        var r = t.Uri.parse(n);
        o && (i = i.concat(o));
        for (var a = 0; a < i.length; a++) {
          var s = e.utils.stringUtils.replaceAll(i[a], "*", ""),
            c = t.Uri.parse(s);
          if (r.isIn(c)) return c.isForSubDomains() ? r.domain : c.domain
        }
        return r.domain
      }

      function r(t, i, o, r) {
        return void 0 === t && (t = e.partnerSettings && e.partnerSettings.customAPIDomainPrefix), void 0 === i && (i = e.localInfo.baseDomain), void 0 === o && (o = e.dataCenter), void 0 === r && (r = e.defaultApiDomain), t && i && i !== r ? t + "." + i : n(void 0, o, r)
      }
      var a = ["socialize", "accounts", "fidm", "gm", "comments", "gcs", "ids", "ds", "gscounters"];
      t.apiDomainFactory = i, t.getGigyaDomain = n, t.getBaseDomain = o, t.resolveApiDomain = r
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i() {
          return e.localInfo.baseDomain || ""
        }

        function n(t, n) {
          void 0 === t && (t = e.localInfo.pageDomain), void 0 === n && (n = i());
          var o;
          return o = n.length > 0 && t.length >= n.length && t.lastIndexOf(n) === t.length - n.length ? n : t
        }

        function o(e) {
          e = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1").replace(/^[ \t]+|[ \t]+$/g, "");
          var t = new RegExp("(?:^|;)\\s?" + e + "=(.*?)(?:;|$)"),
            i = document.cookie.match(t);
          return i && unescape(i[1])
        }

        function r(i, o, r, a, c) {
          var l = e.localInfo.pageDomain;
          null == a && (a = n());
          var u;
          u = null == r || "" === r || isNaN(r) ? 1e3 * s() : 0 == r ? null : 1e3 * r;
          var g = new Date;
          g.setTime(g.getTime() + u);
          var d = i + "=" + escape(o) + (c ? "" : "; path=/") + (null == u ? "" : "; expires=" + g.toUTCString()) + (a && "" != a && a.indexOf(".") != -1 ? "; domain=" + a : "");
          document.cookie = d, u && !(u > 0) || t.get(i) || (d = i + "=" + escape(o) + (c ? "" : "; path=/") + (null == u ? "" : "; expires=" + g.toUTCString()) + (l && "" != l && l.indexOf(".") != -1 ? "; domain=" + l : ""), document.cookie = d)
        }

        function a(i) {
          var n = e.localInfo.pageDomain,
            o = t._getBaseDomain();
          o.length > 0 && n.length >= o.length && n.lastIndexOf(o) === n.length - o.length && (r(i, "", -1, o), r(i, "", -1, o, !0)), r(i, "", -1, e.localInfo.pageDomain), r(i, "", -1, e.localInfo.pageDomain, !0), r(i, "", -1, ""), r(i, "", -1, "", !0)
        }

        function s() {
          return 31536e3
        }

        function c(e) {
          void 0 === e && (e = document);
          var t = new Date((new Date).getTime() + 1e3);
          return e.cookie = "gig3pctest=true;expires=" + t.toGMTString(), e.cookie.indexOf("gig3pctest") !== -1
        }
        t._getBaseDomain = i, t.getDefaultDomain = n, t.get = o, t.set = r, t.remove = a, t.getInfiniteExpirationTimeInSeconds = s, t.canSaveCookie = c
      }(i = t.cookie || (t.cookie = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t = navigator.userAgent.toLowerCase();
    e.localInfo = {
      baseDomain: "",
      isBrowserSupportsFilesAPI: function () {
        return "function" == typeof FileReader || "object" == typeof FileReader
      }(),
      initTime: new Date,
      version: 0,
      pageDomain: document.location.hostname,
      protocol: "http:" == document.location.protocol ? "http" : "https",
      userAgent: t,
      isWin: t.indexOf("win") != -1,
      isIE: t.indexOf("msie") != -1 || t.indexOf("mozilla") != -1 && t.indexOf("trident") != -1,
      isIE6: t.indexOf("msie 6.") != -1,
      isIE7: t.indexOf("msie 7.") != -1,
      isIE8: t.indexOf("msie 8.") != -1,
      isIE9: t.indexOf("msie 9.") != -1,
      isIE10: t.indexOf("msie 10.") != -1,
      isIE11: t.indexOf("mozilla") != -1 && t.indexOf("trident/7.0") != -1,
      isEdge: t.indexOf("edge") != -1,
      isIOS: t.indexOf("iphone") != -1 || t.indexOf("ipad") != -1 || t.indexOf("ipod") != -1,
      isSafari534: t.indexOf("safari/534") != -1,
      isWeChat: t.indexOf("micromessenger") != -1,
      iosVersion: function () {
        return t.indexOf("applewebkit") != -1 && t.indexOf("version/") != -1 ? parseInt(t.split("version/")[1].split(" ")[0]) : 0
      }(),
      isAndroid: t.indexOf("android") != -1,
      isAndroidBrowser: function (e) {
        if (e.indexOf("mozilla/5.0") === -1) return !1;
        if (e.indexOf("android 4") === -1) return !1;
        if (e.indexOf("applewebkit") === -1) return !1;
        if (e.indexOf("windows phone") !== -1) return !1;
        var t = /chrome\/(\d+)/.exec(e);
        if (!t) return !0;
        var i = parseInt(t[1]);
        return i < 20
      }(t),
      currentBrowser: "",
      androidVersion: function () {
        return t.indexOf("android") != -1 ? parseFloat(t.slice(t.indexOf("android") + 8)) : 0
      }(),
      isChrome: t.indexOf("chrome") != -1 && t.indexOf("edge") == -1,
      isGoogleBot: t.indexOf("googlebot") != -1,
      isFF: t.indexOf("firefox") != -1,
      isOpera: t.indexOf("opera") != -1,
      isSafari: navigator.appVersion && navigator.appVersion.toLowerCase().indexOf("safari") != -1 && navigator.appVersion.toLowerCase().indexOf("chrome") == -1 && t.indexOf("android") == -1,
      isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
      isIOSChrome: t.indexOf("crios") != -1,
      isMAC: !(!navigator.appVersion || navigator.appVersion.toLowerCase().indexOf("mac") == -1),
      isWindowsPhone: t.indexOf("windows phone") != -1,
      isFacebookBrowser: t.indexOf("fban") != -1 || t.indexOf("fbav") != -1,
      supportsPostMessage: null != window.postMessage && (t.indexOf("msie") == -1 || t.indexOf("iemobile") != -1),
      supportsLocalStorage: !1,
      supportsSessionStorage: !1,
      supportsFlash: function () {
        var e = !1;
        try {
          if (navigator.mimeTypes && void 0 != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) e = !0;
          else {
            var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            t && (e = !0)
          }
        } catch (e) {}
        return e
      }(),
      quirksMode: "BackCompat" == document.compatMode && t.indexOf("msie") != -1,
      backCompat: "BackCompat" == document.compatMode,
      isMobile: function () {
        var e = ["iphone", "ipod", "android", "midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "htc"];
        for (var i in e)
          if (t.indexOf(e[i]) != -1) return !0;
        return !1
      }(),
      isMobileApp: function () {
        if (!document.getElementsByTagName) return !1;
        for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++)
          if ("viewport" == e[t].getAttribute("name")) {
            var i = e[t].getAttribute("content");
            if (i && i.indexOf("width=device-width") !== -1) return !0
          }
        return !1
      }(),
      isNativeMobileApp: !1,
      isTouch: function () {
        if ("ontouchstart" in window) return !0;
        if ("onmsgesturechange" in window) try {
          return new ActiveXObject("htmlfile"), !1
        } catch (e) {
          return !0
        }
        return !1
      }(),
      messagingMethod: 0
    };
    var i = function (e) {
      try {
        var t = window[e];
        if (!t) return !1;
        var i = "_gig_localStorage_test",
          n = "just checking for localStorage";
        t.setItem(i, n);
        var o = t.getItem(i) === n;
        return t.removeItem(i), o
      } catch (e) {
        return !1
      }
    };
    e.localInfo.supportsLocalStorage = i("localStorage"), e.localInfo.supportsSessionStorage = i("sessionStorage"), e.localInfo.isIE11 && !window.indexedDB && (e.localInfo.supportsPostMessage = !1), e.localInfo.isMAC = e.localInfo.isMAC && !e.localInfo.isIOS;
    var n = e.localInfo.isWin ? "windows" : e.localInfo.isWindowsPhone ? "winphone" : e.localInfo.isIOS ? "ios-v" + e.localInfo.iosVersion : e.localInfo.isMAC ? "mac" : e.localInfo.isAndroid ? "android" : "";
    n && (n += " ");
    var o = e.localInfo.isChrome ? "chrome" : e.localInfo.isFF ? "firefox" : e.localInfo.isSafari ? "safari" : e.localInfo.isEdge ? "edge" : e.localInfo.isIE11 ? "ie11" : e.localInfo.isIE10 ? "ie10" : e.localInfo.isIE9 ? "ie9" : e.localInfo.isIE8 ? "ie8" : "";
    e.localInfo.currentBrowser = n + o;
    var r;
    e.partnerSettings && e.partnerSettings.baseDomains ? r = e.partnerSettings.baseDomains.split(",") : (window.self === window.top && console.log("gigya: missing base domains for site"), r = [document.location.hostname]), e.localInfo.baseDomain = e._.getBaseDomain(r)
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      function i(i) {
        var n = e.thisScript ? e.thisScript.baseDomain : "",
          r = e.thisScript ? e.thisScript.protocol : e.localInfo.protocol;
        if (!n || /cdns?\.gigya\.com$/.test(n)) {
          var a = t.CDN_HOSTS[r];
          a.length <= o && (o = 0), n = a[o++]
        }
        return i && 0 !== i.indexOf("/") && (i = "/" + i), r + "://" + n + (i || "")
      }

      function n() {
        return i("/gs/i/")
      }
      var o = 0;
      t.CDN_HOSTS = {
        http: ["cdn.gigya.com", "cdn1.gigya.com", "cdn2.gigya.com", "cdn3.gigya.com"],
        https: ["cdns.gigya.com", "cdns1.gigya.com", "cdns2.gigya.com", "cdns3.gigya.com"]
      }, t.getCdnResource = i, t.getImgCdnResource = n
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e, t) {
          for (var i = 0; i < e.length; i++)
            if (e[i] == t) return i;
          return -1
        }

        function i(e) {
          for (var t = [], i = 0; i < e.length; i++) t[i] = e[i];
          return t
        }

        function n(e, t) {
          if (e)
            for (var i = e.length - 1; i >= 0; i--) e[i] == t && e.splice(i, 1)
        }

        function o(e, t, i) {
          if (e)
            for (var n = e.length - 1; n >= 0; n--) e[n][t] == i && e.splice(n, 1)
        }

        function r(e, t, i) {
          return e && "string" == typeof e ? (i && (e = e.toLowerCase()), e = e.replace(/[ ]/g, "").replace(/,,/g, ","), e ? e.split(t) : []) : []
        }

        function a(e) {
          for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
          if (null == e) return [];
          for (var n = [], o = arguments.length, r = 0, a = e.length; r < a; r++) {
            var s = e[r];
            if (this.indexOf(n, s) == -1) {
              for (var c = 1; c < o; c++) {
                var l = arguments[c];
                if (null == l || this.indexOf(l, s) == -1) break
              }
              c === o && n.push(s)
            }
          }
          return n
        }

        function s(e, t, i) {
          void 0 === i && (i = 0);
          for (var n = e.length; --n >= i;)
            if (e[n] === t) return n;
          return -1
        }

        function c(e, t) {
          for (var i = 0; i < e.length; ++i) t(e[i], i, e)
        }

        function l(e, t) {
          for (var i in e) e.hasOwnProperty(i) && t(e[i], i, e)
        }

        function u(e, t) {
          for (var i = 0; i < e.length; ++i)
            if (t(e[i], i, e)) return !0;
          return !1
        }

        function g(e, t) {
          for (var i = 0; i < e.length; ++i)
            if (!t(e[i], i, e)) return !1;
          return !0
        }

        function d(e, t) {
          for (var i in e)
            if (e.hasOwnProperty(i) && !t(e[i], i, e)) return !1;
          return !0
        }

        function p(e, t) {
          var i = new Array;
          return c(e, function (e, n, o) {
            return i.push(t(e, n, o))
          }), i
        }

        function f(e, t) {
          var i = -1;
          return u(e, function (e, n, o) {
            return !!t(e, n, o) && (i = n, !0)
          }), i
        }

        function h(e, t) {
          return e[f(e, t)]
        }

        function v(e) {
          var t = [];
          for (var i in e) "number" == typeof e[i] && t.push(e[i]);
          return t
        }

        function m(e) {
          for (var t = 0; t < e.length; ++t)
            for (var i = t + 1; i < e.length; i++) e[t] === e[i] && e.splice(i, 1);
          return e
        }
        e.indexOf = t, e.clone = i, e.removeByValue = n, e.removeByProperty = o, e.getArrayFromString = r, e.intersect = a, e.lastIndexOf = s, e.forEach = c, e.forEachProp = l, e.some = u, e.every = g, e.everyProp = d, e.map = p, e.firstIndex = f, e.first = h, e.getAllEnumValues = v, e.getUniqueValues = m
      }(t = e.array || (e.array = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t() {
          return Date.now()
        }
        e.now = t
      }(t = e.date || (e.date = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e, t) {
          return function () {
            for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
            return t.apply(e, i)
          }
        }
        e.create = t
      }(t = e.delegate || (e.delegate = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(t, i) {
          "function" == typeof t && (t = t(i)), t instanceof Array && (t = t.join(""));
          var n = /(\$)(!?)([a-z_][a-z_.\d]*)([(][^()]*[)])?|(\$)(!?)\{([a-z_][a-z_.\d]*)([(][^()]*[)])?\}/gi;
          n.lastIndex = 0;
          for (var o, r = t, a = n.exec(r); null != a;) {
            o = "$" == a[1] ? 0 : 4;
            var s = "!" == a[2 + o],
              c = a[3 + o],
              l = a[4 + o];
            null == l && (l = "");
            var u = 0;
            "." == c.substring(0, 1) && (c = c.substring(1)), "DBG" == c.substring(0, 3) && (c = c.substring(3), u = 1);
            for (var g = "", d = c + l; d != g;) {
              g = d;
              var p = n.lastIndex;
              d = e.utils.templates.fill(g, i), n.lastIndex = p
            }
            var f = "",
              h = 0;
            if (null != i[c.split(".")[0]]) try {
              f = new Function("o", "p", 'return eval("o." + p)')(i, d)
            } catch (e) {} else f = "$" + (s ? "!" : "") + d, h = 1;
            r = s ? r.replace(a[0], "") : r.substr(0, a.index) + f + r.substr(a.index + a[0].length), n.lastIndex = a.index + h, a = n.exec(r)
          }
          return r
        }
        t.fill = i
      }(i = t.templates || (t.templates = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t() {
          var e = 0,
            t = 0;
          return "number" == typeof window.pageYOffset ? (t = window.pageYOffset, e = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (t = document.body.scrollTop, e = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft), {
            left: e,
            top: t
          }
        }

        function i() {
          var e = document.documentElement,
            t = document.body,
            i = e.clientHeight;
          0 == i && (i = t.clientHeight);
          var n = e.clientWidth;
          return 0 == n && (n = t.clientWidth), {
            w: n,
            h: i
          }
        }

        function n() {
          var e = parseInt(window.orientation || "0");
          return e < 0 && (e += 360), e
        }

        function o() {
          var e, t, i = document.documentElement,
            n = document.body;
          return window.innerHeight ? (e = window.innerHeight, t = window.innerWidth) : (e = i.clientHeight, 0 == e && (e = n.clientHeight), t = i.clientWidth, 0 == t && (t = n.clientWidth)), {
            w: t,
            h: e
          }
        }

        function r() {
          var e = t(),
            i = o();
          return {
            top: e.top + Math.floor(i.h / 2),
            left: e.left + Math.floor(i.w / 2)
          }
        }

        function a(e) {
          var i = t(),
            n = o();
          return e.left >= i.left && e.right <= i.left + n.w
        }

        function s(e) {
          var i = t(),
            n = o();
          return e.top >= i.top && e.bottom <= i.top + n.h && e.left >= i.left && e.right <= i.left + n.w
        }

        function c(e) {
          e && e.scrollIntoView && e.scrollIntoView();
        }
        e.getScroll = t, e.getFullSize = i, e.getOrientation = n, e.getInnerSize = o, e.getMiddleCenter = r, e.isRectHorizontallyVisible = a, e.isRectFullyVisible = s, e.scrollIntoView = c
      }(t = e.viewport || (e.viewport = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (gigya) {
    var utils;
    ! function (utils) {
      var JSON;
      ! function (JSON) {
        function serialize(e, t, i, n, o) {
          if (void 0 === t && (t = !1), void 0 === i && (i = !1), void 0 === n && (n = 0), void 0 === o && (o = 20), gigya.localInfo.isIE8) {
            if (n || (n = 0), n > o) return "[Too deep]";
            var r = "",
              a = "",
              s = "";
            if (i) {
              s = "\t", a = "\n";
              for (var c = 0; c < n + 1; c++) r += s
            }
            var l = typeof e;
            if ("function" == l) return l.toString();
            if ("object" != l || null === e) return "string" == l && (e = '"' + e.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"'), String(e);
            var u, g, d = [],
              p = e && e.constructor == Array;
            if (p)
              for (var c = 0; c < e.length; c++) g = e[c], l = typeof g, null == g || "undefined" == l ? g = "" : "string" == l ? g = '"' + g.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == l ? g = t ? "Function" : "" : g.parentNode && g.innerHTML ? g = "HTMLElement" : g.constructor == Date ? g = "" : "object" == l && null !== g && (g = serialize(g, t, i, n + 1)), "" != String(g) && d.push(r + s + String(g));
            else
              for (u in e) g = e[u], l = typeof g, null == g || "undefined" == l ? g = String(g) : "string" == l ? g = '"' + g.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '"' : "function" == l ? g = t ? "Function" : "" : g.parentNode && g.innerHTML ? g = "HTMLElement" : g.constructor == Date ? g = "" : "object" == l && null !== g && (g = a + serialize(g, t, i, n + 1)), "" != String(g) && d.push(r + s + '"' + u.replace(/(\"|\\)/g, "\\$1").replace(/\r\n|\r|\n/g, "\\n") + '":' + String(g));
            return a + r + (p ? "[" : "{") + a + d.join("," + a) + a + r + (p ? "]" : "}")
          }
          return window.JSON.stringify(e)
        }

        function deserialize(json, defaultValue, scope) {
          if (!json || !json.replace(/^\s+|\s+$/g, "")) return defaultValue || {};
          try {
            var keys = [],
              values = [];
            if (scope)
              for (var key in scope) keys.push(key), values.push(scope[key]);
            var fn = eval("(function(" + keys.join(",") + ") { return " + json.trim() + "; })");
            return fn.apply(void 0, values)
          } catch (e) {
            return console.warn("Error deserializing JavaScript", e), defaultValue || {}
          }
        }

        function parse(e, t) {
          if (gigya.localInfo.isIE8) return deserialize(e, t);
          try {
            return window.JSON.parse(e)
          } catch (e) {
            return t || {}
          }
        }
        JSON.serialize = serialize, JSON.deserialize = deserialize, JSON.parse = parse
      }(JSON = utils.JSON || (utils.JSON = {}))
    }(utils = gigya.utils || (gigya.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (i) {
        function n() {
          return z++, z
        }

        function o(e) {
          for (var t, i = document.getElementsByTagName("script"), n = /\/\/cdn(s)?\.(ru1\.)?gigya.com/, o = i.length - 1; o >= 0; o--) {
            var r = i[o],
              a = r.src.toLowerCase();
            if ("" !== a && (n.test(a) || a.indexOf("?apikey=") > -1)) {
              var s = 0 === e.length || e.some(function (e) {
                return a.indexOf(e) > -1
              });
              if (s) {
                t = r;
                break
              }
            }
          }
          return t
        }

        function r(e, t) {
          var i;
          try {
            i = new Event(t)
          } catch (e) {
            i = document.createEvent("CustomEvent"), i.initCustomEvent(t, !0, !0, {})
          }
          e.dispatchEvent(i)
        }

        function a(t, i, n, o) {
          void 0 === n && (n = "click"), t && (t.setAttribute("role", "button"), "-1" != t.getAttribute("tabindex") && t.setAttribute("tabindex", "0"), e.utils.DOM.addEventListener(t, n, function (e) {
            return i(e)
          }), e.utils.DOM.addEventListener(t, "keydown", function (e) {
            13 == (e.which || e.keyCode) && (e.preventDefault(), i(e))
          }))
        }

        function s(e, t, i) {
          e && i && (e.addEventListener ? e.addEventListener(t, i, !0) : e.attachEvent("on" + t, i))
        }

        function c(e, t, i) {
          i && (e.removeEventListener ? e.removeEventListener(t, i, !0) : e.detachEvent("on" + t, i))
        }

        function l(e) {
          e.preventDefault ? e.preventDefault() : window.event && (window.event.returnValue = !1)
        }

        function u(t) {
          e.utils.DOM._removeDialogBackListener(), M = function (i) {
            i && i.newURL && i.newURL.indexOf("|gigyaMobileDialog") == -1 && (t(i), e.utils.DOM._removeDialogBackListener())
          }, window.setTimeout(function () {
            window.location.hash.indexOf("|gigyaMobileDialog") == -1 && (window.location.hash = window.location.hash + "|gigyaMobileDialog"), e.utils.DOM.addEventListener(window, "hashchange", M)
          }, 50)
        }

        function g() {
          M && (e.utils.DOM.removeEventListener(window, "hashchange", M), M = null, window.location.hash = window.location.hash.replace("|gigyaMobileDialog", ""))
        }

        function d(e) {
          document.body && (document.body.insertBefore && document.body.firstChild ? document.body.insertBefore(e, document.body.firstChild) : document.body.appendChild(e))
        }

        function p(e) {
          e && e.parentElement && e.parentElement.removeChild(e)
        }

        function f(e, t) {
          for (var i = e.parentNode; i;) {
            if (t == i) return !0;
            i = i.parentNode
          }
          return !1
        }

        function h(e) {
          for (; e;) {
            var t = getComputedStyle(e);
            if ("none" === t.display || "hidden" === t.visibility) return !1;
            e = e.parentElement
          }
          return !0
        }

        function v(t) {
          return "gig_" + e.localInfo.initTime.getTime().toString() + "_" + t
        }

        function m(e, t) {
          var i = document.createElement(e);
          if (t)
            for (var n in t) i[n] = t[n];
          return i
        }

        function y(t) {
          var i = document.createElement("div");
          return null != i.style.zIndex && (i.style.zIndex = "" + e.utils.DOM.getNextZIndex()), i.innerHTML = "", t && (i.id = t), document.body && (document.body.insertBefore && document.body.firstChild ? document.body.insertBefore(i, document.body.firstChild) : document.body.appendChild && document.body.appendChild(i)), i
        }

        function b(e) {
          var t = document.getElementById(e);
          t && (t.style.display = "none")
        }

        function w(t) {
          var i = document.getElementById(t);
          i && (i.style.display = e.localInfo.isIE6 ? "TD" == i.tagName ? "table-cell" : "TR" == i.tagName ? "" : "TABLE" == i.tagName ? "" : "block" : "")
        }

        function I(e) {
          try {
            var t = document.getElementById(e);
            null != t && (t.innerHTML = "")
          } catch (e) {}
        }

        function S(e, t) {
          var i = document.createElement("div");
          i.style.position = "absolute", i.style.left = "-1000px", i.innerHTML = e, t.appendChild(i);
          var n = i.offsetWidth,
            o = i.offsetHeight;
          return i.parentNode.removeChild(i), {
            w: n,
            h: o
          }
        }

        function A(e, t, i) {
          if (!e) return [];
          var n = [];
          i && D(e, t) && n.push(e);
          for (var o = e.getElementsByTagName("*"), r = 0; r < o.length; r++) D(o[r], t) && n.push(o[r]);
          return n || []
        }

        function _(e, t, i, n) {
          for (var o = [], r = e.getElementsByTagName(t), a = 0; a < r.length; a++) r[a].getAttribute(i) == n && o.push(r[a]);
          return o
        }

        function C(t) {
          if (!t) return {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
          };
          var i = t.getBoundingClientRect(),
            n = e.utils.viewport.getScroll(),
            o = i.left + n.left,
            r = i.top + n.top;
          return {
            left: o,
            top: r,
            right: o + i.width,
            bottom: r + i.height
          }
        }

        function P(e, t) {
          if (e) {
            var i = e.className ? L(e) : [],
              n = i.length,
              o = t.split(" ");
            for (var r in o) {
              var a = !1;
              if (!o[r]) break;
              for (var s in i)
                if (i[s] === o[r]) {
                  a = !0;
                  break
                }
              a || i.push(o[r])
            }
            i.length !== n && (e.className = i.join(" "))
          }
        }

        function k(e, t, i) {
          if (void 0 === i && (i = !1), e) {
            for (var n = L(e), o = n.length - 1; o >= 0; o--)(n[o] === t || i && n[o].indexOf(t) !== -1) && n.splice(o, 1);
            e.className = n.join(" ")
          }
        }

        function L(e) {
          var t = [];
          return "string" == typeof e.className && (t = e.className.split(" ")), t
        }

        function D(e, t) {
          if (!e) return !1;
          if (!t) return !0;
          if (!e.className) return !1;
          for (var i = !1, n = L(e), o = 0; o < n.length; o++)
            if (n[o] === t) {
              i = !0;
              break
            }
          return i
        }

        function x(e) {
          e && ("cancelable" in e ? e.preventDefault() : e.returnValue = !1)
        }

        function E(e, t) {
          var i = document.createElement("div");
          return t = t || "", i.innerHTML = "<" + e + ' name="' + t + '" id="' + t + '"></' + e + ">", i.firstChild
        }

        function U(i, n, o, r) {
          if (null != i && null != i.style) {
            if (n) {
              n = "" + n;
              var a = n.indexOf("%") > 0;
              if (!isNaN(n) || a) {
                var s = "" + (a ? n : n + "px");
                i.style.width != s && (i.style.width = s)
              }
            }
            if (o) {
              o = "" + o;
              var c = o.indexOf("%") > 0;
              if (!isNaN(n) || c) {
                var l = "" + (c ? o : o + "px");
                i.style.height !== l && (i.style.height = l)
              }
            }
            if (r && n && o) {
              (null == i.style.zIndex || r) && (i.style.zIndex = "" + e.utils.DOM.getNextZIndex());
              var u = t.viewport.getInnerSize(),
                g = e.utils.viewport.getScroll(),
                d = g.top,
                p = g.left;
              i.style.top = "" + Math.max(0, d + Math.floor((u.h - o) / 2)) + "px", i.style.left = "" + Math.max(0, p + Math.floor((u.w - n) / 2)) + "px", i.style.visibility = ""
            }
          }
        }

        function O(t) {
          var i = document.createElement("iframe");
          return i.src = t, i.style.width = "30px", i.style.height = "10px", i.style.position = "absolute", i.style.top = "-1000px", i.style.left = "-1000px", document.body ? e.utils.DOM.appendToBody(i) : e.utils.functions.invokeOnPageLoad(function () {
            e.utils.DOM.appendToBody(i)
          }), i
        }

        function N(e) {
          return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;")
        }

        function T(e, t, i, n) {
          void 0 === n && (n = function () {
            return !0
          }), e.forEach(function (e) {
            e.attributes && Array.prototype.slice.call(e.attributes).forEach(function (e) {
              n(e) && (e.value = e.value.replace(t, i))
            })
          })
        }

        function R(e) {
          return ["autocomplete", "autofocus", "checked", "disabled", "hidden", "readonly", "required", "selected"].indexOf(e) > -1
        }
        i._popupContainers = [], i._pseudoContainers = [];
        var z = 999999999,
          M = null;
        i.getNextZIndex = n, i.getGigyaScriptElement = o, i.dispatch = r, i.addButtonSubmitListener = a, i.addEventListener = s, i.removeEventListener = c, i.disableDefaultEventHandling = l, i.addDialogBackListener = u, i._removeDialogBackListener = g, i.appendToBody = d, i.removeElement = p, i.isChildOf = f, i.isVisible = h, i.getCenteredDivID = v, i.createElementWithAttributes = m, i.createTopLevelDiv = y, i.hideByID = b, i.showByID = w, i.clearByID = I, i.getHTMLSize = S, i.getElementsByClass = A, i.getElementsByAttribute = _, i.getElementPosition = C, i.addClassToElement = P, i.removeClassFromElement = k, i.getClassNames = L, i.isElementClass = D, i.cancelEvent = x, i.createElement = E, i.setSize = U, i.createHiddenIframe = O, i.attributeEncode = N, i.manipulateAttributes = T, i.isHTMLBooleanAttribute = R
      }(i = t.DOM || (t.DOM = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (gigya) {
    var utils;
    ! function (utils) {
      var functions;
      ! function (functions) {
        function callFunction(name, arParams) {
          var fn = eval(name),
            arParts = name.split(".");
          arParts.splice(arParts.length - 1, 1);
          var scope = eval(arParts.join("."));
          fn.apply(scope, arParams)
        }

        function invokeOnPageLoad(e, t) {
          if (!document.readyState && document.body || "loaded" === document.readyState || "complete" === document.readyState || !t && "interactive" === document.readyState && document.body) e();
          else {
            var i = !1,
              n = function () {
                i || (i = !0, e())
              };
            window.setTimeout(n, 2e4), gigya.utils.DOM.addEventListener(window, "load", n), gigya.utils.DOM.addEventListener(document, "DOMContentLoaded", n)
          }
        }

        function createAlias(e, t) {
          for (var i = e.split("."), n = window, o = 0; o < i.length - 1; o++) {
            var r = i[o];
            n[r] || (n[r] = {}), n = n[r]
          }
          n[i[i.length - 1]] = t
        }

        function debounce(e, t) {
          var i = void 0;
          return function () {
            void 0 !== i && clearTimeout(i), i = setTimeout(function () {
              i = void 0, e()
            }, t)
          }
        }

        function addSrcToIFrameIfNeeded(e, t) {
          void 0 === t && (t = gigya._.getCdnResource("/")), (gigya.localInfo.isIOSWebView || gigya.localInfo.isIOS && gigya.localInfo.isWeChat) && e.setAttribute("src", t)
        }
        functions.callFunction = callFunction, functions.invokeOnPageLoad = invokeOnPageLoad, functions.createAlias = createAlias, functions.debounce = debounce, functions.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded
      }(functions = utils.functions || (utils.functions = {}))
    }(utils = gigya.utils || (gigya.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(e, t, n, o) {
          var r;
          return "string" == typeof e ? (r = parseInt(e), e.indexOf("%") !== -1 && (r = .01 * parseInt(e) * t, o && (r -= o / 2))) : r = e, r = Math.round(r), isNaN(r) && void 0 !== n && (r = i(n, t, void 0, o)), r
        }

        function n(n, o, r) {
          r || (r = {
            menubar: 0,
            toolbar: 0,
            resizable: 1,
            scrollbars: 1
          }), r.width = i(r.width, screen.width, 960), r.height = i(r.height, screen.height, 680), r.left = i(r.left, screen.width, "50%", r.width), r.top = i(r.top, screen.height, "50%", r.height);
          var a = "";
          for (var s in r) a += "," + s + "=" + r[s];
          a = a.substr(1);
          var c = e.localInfo.isIE && n.length > 2048 || n.length > 4096,
            l = n;
          c && (l = "", e.localInfo.isIE && (l = "about:blank")), o || (o = "_gigWindow_" + (new Date).getTime() + "_" + ++t._uniqueWindowCounter);
          var u = window.open(l, o, a);
          u && u.focus && u.focus(), t._openedWindows[o] = u;
          var g = e.utils.URL.getParamsFromURL(n);
          return c && e.utils.HTTP.redirect(n.split("?")[0], [g], "POST", o), e.events.global.dispatch({
            eventName: "windowOpened",
            url: n,
            params: g
          }), null != t._openedWindows[o]
        }

        function o(i) {
          if (null != t._openedWindows[i]) {
            var n = function () {
              try {
                null != t._openedWindows[i] && t._openedWindows[i].close(), delete t._openedWindows[i]
              } catch (e) {}
            };
            e.localInfo.iosVersion >= 6 ? n() : window.setTimeout(n, 10)
          }
        }
        t._openedWindows = {}, t._uniqueWindowCounter = 0, t._calcPixels = i, t.open = n, t.close = o
      }(i = t.win || (t.win = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e) {
          var t = ("" + e).toLowerCase();
          return "true" == t || "1" == t
        }

        function i(e) {
          var t = ("" + e).toLowerCase();
          return "false" == t || "0" == t
        }

        function n(e) {
          return e > (new Date).getTime()
        }

        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var i = e.some(function (e) {
              return "undefined" == typeof e
            }),
            n = e.some(function (e) {
              return "undefined" != typeof e
            });
          return n && !i || !n && i
        }
        e.isExplicitTrue = t, e.isExplicitFalse = i, e.isLaterThanNow = n, e.allDefinedOrAllUndefined = o
      }(t = e.validation || (e.validation = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(e) {
          var t = {};
          for (var i in e) null != e[i] && void 0 != e[i] && (t[i] = e[i]);
          return t
        }

        function n(e) {
          return e = e || {}, {
            getField: function (t) {
              if (t) {
                var i, n = t.split("."),
                  o = e;
                for (i = 0; i < n.length; ++i) {
                  if (void 0 == o[n[i]]) return;
                  o = o[n[i]]
                }
                return o
              }
            }
          }
        }

        function o(e, t, i) {
          if (!t) return e;
          for (var n = e, o = t.split("."), r = 0; r < o.length; r++) {
            var a = o[r],
              s = null;
            a.match(/\[[0-9]]/) && (s = Number(a.match(/\[[0-9]]/)[0].replace(/[\[\]]/g, ""))), a = a.split(/\[[0-9]]/).join("");
            var c = (s || 0 === s) && n[a] ? n[a][s] : n[a];
            if (i && !n[a] ? n[a] = {} : i && !c && c !== !1 && (n[a] = []), !c && c !== !1) return null;
            n = c
          }
          return n
        }

        function r(e, t, i) {
          var n = t.split("."),
            r = n.pop();
          o(e, n.join("."), !0)[r] = i
        }

        function a(e, t, i) {
          for (var n in t) i && "undefined" != typeof e[n] || (e[n] = t[n])
        }

        function s(t) {
          var i = [];
          for (var n in t) {
            var o;
            "object" == typeof t[n] ? o = e.utils.JSON.serialize(t[n], !1) : t[n] && (o = t[n].toString()), i.push(n + "=" + o)
          }
          return i.sort().join("&")
        }

        function c(e, t) {
          t || (t = 0);
          var i, n, o, r, a, s, c, l;
          for (i = 3 & e.length, n = e.length - i, o = t, a = 3432918353, s = 461845907, l = 0; l < n;) c = 255 & e.charCodeAt(l) | (255 & e.charCodeAt(++l)) << 8 | (255 & e.charCodeAt(++l)) << 16 | (255 & e.charCodeAt(++l)) << 24, ++l, c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295, c = c << 15 | c >>> 17, c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295, o ^= c, o = o << 13 | o >>> 19, r = 5 * (65535 & o) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295, o = (65535 & r) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);
          switch (c = 0, i) {
            case 3:
              c ^= (255 & e.charCodeAt(l + 2)) << 16;
            case 2:
              c ^= (255 & e.charCodeAt(l + 1)) << 8;
            case 1:
              c ^= 255 & e.charCodeAt(l), c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295, c = c << 15 | c >>> 17, c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295, o ^= c
          }
          return o ^= e.length, o ^= o >>> 16, o = 2246822507 * (65535 & o) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o ^= o >>> 13, o = 3266489909 * (65535 & o) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, o ^= o >>> 16, o >>> 0
        }

        function l(e, t, i, n, o, r) {
          if (void 0 === n && (n = 20), void 0 === o && (o = 0), o > n) return null;
          if ("undefined" == typeof e || null == e) return null;
          if ("function" == typeof e && i) return null;
          if (e.constructor == Array) {
            for (var a = [], s = 0; s < e.length; s++) i && "function" == typeof e[s] || (t ? a[s] = l(e[s], t, i, n, o + 1, r) : a[s] = e[s]);
            return a
          }
          if ("object" == typeof e) {
            var c = {};
            for (var u in e) r && "context" == u || i && "function" == typeof e[u] || (t ? c[u] = l(e[u], t, i, n, o + 1, r) : c[u] = e[u]);
            return c
          }
          return e
        }

        function u(e, t) {
          for (var i = {}, n = 0; n < e.length; n++)
            if (e[n] && e[n].length)
              for (var o = 0; o < e[n].length; o++)
                for (var r in e[n][o]) i[r] = e[n][o][r];
            else if (t)
            for (var r in e[n]) "object" != typeof i[r] || i[r] instanceof Array ? i[r] = e[n][r] : i[r] = u([i[r], e[n][r]], !0);
          else
            for (var r in e[n]) i[r] = e[n][r];
          return i
        }

        function g(e) {
          if (Object(e) !== e || Array.isArray(e)) return e;
          var t = {};
          for (var i in e) {
            for (var n = t, o = "", r = i.split("."), a = 0; a < r.length; a++) {
              var s = !isNaN(Number(r[a]));
              n = n[o] || (n[o] = s ? [] : {}), o = r[a]
            }
            n[o] = e[i]
          }
          return t[""] || {}
        }

        function d(e, t) {
          function i(e, o) {
            if (Object(e) !== e) n[o] = e;
            else if (Array.isArray(e)) {
              for (var r = e.length, a = 0; a < r; a++) {
                var s = t ? o + "[" + a + "]" : o + "." + a;
                i(e[a], o ? s : String(a))
              }
              0 === r && (n[o] = [])
            } else {
              var c = !0;
              for (var l in e) c = !1, i(e[l], o ? o + "." + l : l);
              c && "" !== o && (n[o] = {})
            }
          }
          void 0 === t && (t = !1);
          var n = {};
          return i(e, ""), n
        }

        function p(t, i, n) {
          if (null != t) {
            if (null == i && (i = {}), t.constructor == Array)
              for (var o = 0; o < t.length; o++) p(t[o], i, n);
            else if (n) {
              var r = n.split("|"),
                a = {};
              for (var s in t) a[s.toLowerCase()] = 1;
              for (var c = 0; c < r.length; c++) {
                var l = r[c];
                a[l.toLowerCase()] && (i[l] = t[l])
              }
            } else i = e.utils.object.clone(t, !1);
            return i
          }
        }

        function f(e, t) {
          var i;
          return p(e, i, t)[t]
        }

        function h(e) {
          try {
            var t = window.JSON.parse(e);
            if ("object" == typeof t) return t
          } catch (e) {}
        }
        t.removeUndefined = i, t.expressionHelper = n, t.getPropertyBySerializedName = o, t.setPropertyBySerializedName = r, t.add = a, t.getHash = s, t.getMurmurHash = c, t.clone = l, t.merge = u, t.unflatten = g, t.flatten = d, t.extractProperties = p, t.extractProperty = f, t.parseToObject = h
      }(i = t.object || (t.object = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e) {
          return null == e || "undefined" == typeof e ? e : e.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\"/g, "&#34;").replace(/'/g, "&#39;").replace(/&#38;#173;/g, "&#173;")
        }

        function i(e) {
          return null == e || "undefined" == typeof e ? e : e.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\"/g, "&#34;").replace(/\=/g, "&#61;")
        }
        e.sanitizeHTML = t, e.sanitizeAttribute = i
      }(t = e.sanitize || (e.sanitize = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t() {
          var e = 0,
            t = 0;
          if (document.body) {
            var n = i;
            return n || (n = {
              clientX: 0,
              clientY: 0
            }), n.pageX || n.pageY ? (e = n.pageX, t = n.pageY) : (n.clientX || n.clientY) && (e = n.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, t = n.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
              x: e,
              y: t
            }
          }
        }
        var i = null;
        e.getPosition = t
      }(t = e.mouse || (e.mouse = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(e) {
          return encodeURIComponent(e)
        }

        function n(e) {
          return decodeURIComponent(e.replace(/\+/g, " "))
        }

        function o(e) {
          for (var t = "", i = e; i != t;) t = i, i = n(t);
          return i
        }

        function r(t, i) {
          return t && t.indexOf("?") !== -1 ? e.utils.keyValue.deserialize(t.split("#")[0].split("?")[1], "&", i) : {}
        }

        function a(e, t, i) {
          if (null == t || "" == t) return i;
          var n = t.indexOf("?");
          if (n === -1) return i;
          var o = "&" + t.substr(n + 1),
            r = o.toLowerCase().indexOf("&" + e.toLowerCase() + "=");
          if (r === -1) return i;
          var a = o.substr(r + (1 + e.length + 1)) + "&";
          return r = a.indexOf("&"), a.substr(0, r)
        }

        function s(t, i) {
          var n = e.utils.URL.getParamsFromURL(t);
          e.utils.object.add(n, i);
          var o = t.split("#"),
            r = o[0].split("?")[0] + "?" + e.utils.keyValue.serialize(n, "&");
          return o.length > 1 && (r += "#" + o[1]), r
        }
        t.URLEncode = i, t.URLDecode = n, t.URLDecodeRecursive = o, t.getParamsFromURL = r, t.getParamValueFromURL = a, t.addParamsToURL = s
      }(i = t.URL || (t.URL = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(t, i) {
          var n = [];
          i || (i = "&");
          for (var o in t) switch (typeof t[o]) {
            case "function":
              break;
            case "object":
              null != t[o] && n.push(o + "=" + e.utils.URL.URLEncode(e.utils.JSON.serialize(t[o])));
              break;
            case "undefined":
              break;
            default:
              n.push(o + "=" + e.utils.URL.URLEncode(t[o]))
          }
          var r = n.join(i);
          return r
        }

        function n(t, i, n, o) {
          var r = {};
          if (!t) return r;
          i || (i = "&");
          for (var a = t.split(i), s = 0; s < a.length; s++) {
            var c = a[s],
              l = c.indexOf("=");
            if (l === -1) {
              var u = n ? c.toLowerCase() : c;
              r[u] = "1"
            } else {
              var u = c.substr(0, l);
              n && (u = u.toLowerCase());
              var g = c.substr(l + 1).replace(/\+/g, " ");
              try {
                r[u] = o ? unescape(g) : e.utils.URL.URLDecode(g)
              } catch (e) {
                r[u] = unescape(g)
              }
            }
          }
          return r
        }
        t.serialize = i, t.deserialize = n
      }(i = t.keyValue || (t.keyValue = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (i) {
        function n(t) {
          var i = e._.Uri.parse(t);
          return i.addToSearch({
            version: e.build.version
          }), i.toString()
        }

        function o(e) {
          return e.replace(/^http(s?):\/\/cdn(s?)[0-9]*.gigya.com\//, "http$1://cdn$2.gigya.com/")
        }

        function r(e) {
          var t = o(e);
          return Boolean(g[t] && g[t].loaded)
        }

        function a(t, i, r, a, s, c) {
          void 0 === s && (s = 5e3);
          var l;
          if (0 === t.indexOf("//") && (t = e.localInfo.protocol + ":" + t), a) {
            var u = o(t);
            if (g[u]) return void(g[u].loaded ? (e.logger.debug("script was already loaded:", {
              src: t
            }), r && r()) : (g[u].onLoad.push(r), g[u].onError.push(i)));
            l = g[u] = {
              loaded: !1,
              onLoad: [r],
              onError: [i]
            }, c && c.length > 0 && e.utils.array.forEach(c, function (e) {
              g[e] = l
            })
          } else l = {
            loaded: !1,
            onLoad: [r],
            onError: [i]
          };
          var d = function () {
            var i = document.createElement("script");
            i.async = !0, i.type = "text/javascript", i.charset = "UTF-8";
            var o = !1,
              r = function () {
                if (!o) {
                  if (l.onLoad && l.onLoad.length)
                    for (var e = 0; e < l.onLoad.length; e++) "function" == typeof l.onLoad[e] && l.onLoad[e]();
                  l.loaded = !0, l.onError = l.onLoad = null, o = !0, s === !0 && (s = 0), s !== !1 && setTimeout(function () {
                    i.parentNode && i.parentNode.removeChild(i)
                  }, s)
                }
              };
            i.onload = r, i.onreadystatechange = function () {
              "loaded" === this.readyState && r()
            }, i.onerror = function () {
              for (var e = 0; e < l.onError.length; e++) "function" == typeof l.onError[e] && l.onError[e]();
              delete g[t]
            };
            var a = document.getElementsByTagName("head");
            a && a.length > 0 && a[0].appendChild(i);
            var c = function () {
              var o = new RegExp("^https?://cdns?.*" + e.defaultApiDomain),
                r = o.test(t) ? n(t) : t;
              i.src = r
            };
            e.localInfo.iosVersion >= 6 ? c() : setTimeout(c, 1)
          };
          e.localInfo.isIE ? e.utils.functions.invokeOnPageLoad(d) : d()
        }

        function s(e, t, i, n) {
          switch (void 0 === i && (i = d.image), void 0 === n && (n = 5e3), i) {
            case d.script:
              a(e, t, t, !1, n);
              break;
            case d.image:
              c(e, t);
              break;
            case d.iframe:
              l(e, t, n);
              break;
            default:
              throw new Error("Unsupported resource type")
          }
        }

        function c(e, t) {
          var i = new Image,
            n = !1,
            o = function () {
              n || (n = !0, t())
            };
          i.onload = i.onerror = o, i.src = e
        }

        function l(i, n, o) {
          void 0 === o && (o = 5e3);
          var r = document.createElement("iframe");
          r.style.width = "30px", r.style.height = "10px", r.style.position = "absolute", r.style.top = "-1000px", r.style.left = "-1000px", o === !0 && (o = 0);
          var a = function (e) {
            var t;
            t = e && e.srcElement ? e.srcElement : e && e.target ? e.target : this, !t.loaded && t.parentNode && (t.loaded = !0, n(), o !== !1 && window.setTimeout(function () {
              try {
                document.body.removeChild(t)
              } catch (e) {}
            }, o))
          };
          t.DOM.addEventListener(r, "load", a), t.DOM.addEventListener(r, "error", a), r.onload = function (e) {
            a(e)
          }, r.onerror = a, r.src = i, e.utils.DOM.appendToBody(r)
        }

        function u(t, i, n) {
          var o = e._.getCdnResource() + "/js/gigya.services." + t + ".js";
          a(o, function () {
            "object" == typeof console && console.error && (console.error("error loading gigya service " + t + " from url: " + o), i && i())
          }, n, !0)
        }
        var g = {};
        i.isLoaded = r, i.load = a;
        var d;
        ! function (e) {
          e[e.script = 0] = "script", e[e.image = 1] = "image", e[e.iframe = 2] = "iframe"
        }(d = i.ResourceTypes || (i.ResourceTypes = {})), i.triggerResource = s, i.loadService = u
      }(i = t.script || (t.script = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(e) {
          var i = e.getName() || e.name;
          return t.instances[i] || (t.instances[i] = new e), t.instances[i]
        }

        function n(e) {
          for (var n, o = 0, r = t.adapters; o < r.length; o++) {
            var a = r[o];
            if (a.isAvailable()) {
              if (a.prototype instanceof u && !e) continue;
              n = i(a);
              break
            }
          }
          return n || (n = i(m)), e && (n instanceof u ? n.waitForService(function () {
            e(n)
          }) : e(n)), n
        }

        function o(e) {
          return y.getItem(e)
        }

        function r(e, t, i) {
          return y.setItem(e, t, i)
        }

        function a(e) {
          return y.removeItem(e)
        }

        function s(e, t) {
          return y.setObject(e, t)
        }

        function c(e, t) {
          return y.getObject(e, t)
        }
        var l = function () {
          function t() {}
          return t.getName = function () {
            return "AbstractAdapter"
          }, t.prototype.setObject = function (t, i) {
            this.setItem(t, e.utils.JSON.serialize(i))
          }, t.prototype.getObject = function (t, i) {
            return e.utils.JSON.deserialize(this.getItem(t), i)
          }, t.prototype.isPersistent = function () {
            return !0
          }, t
        }();
        t.AbstractLocalStorageAdapter = l;
        var u = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t.isLoaded = !1, t
          }
          return __extends(t, e), t.prototype.isReady = function () {
            return this.isLoaded
          }, t.prototype.waitForService = function (e) {
            var t = this;
            return this.isReady() ? void e() : void setTimeout(function () {
              return t.waitForService(e)
            }, 50)
          }, t
        }(l);
        t.AbstractAsyncLocalStorageAdapter = u;
        var g = function (e) {
            function t() {
              return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.getItem = function (e) {
              return this.storage[e]
            }, t.prototype.setItem = function (e, t, i) {
              try {
                this.storage[e] = t
              } catch (e) {}
            }, t.prototype.removeItem = function (e) {
              this.storage.removeItem(e)
            }, t
          }(l),
          d = function (t) {
            function i() {
              var e = t.call(this) || this;
              return e.storage = window.localStorage, e
            }
            return __extends(i, t), i.getName = function () {
              return "LocalStorageAdapter"
            }, i.isAvailable = function () {
              return e.localInfo.supportsLocalStorage
            }, i
          }(g),
          p = function (t) {
            function i() {
              var e = t.call(this) || this;
              return e.storage = window.sessionStorage, e
            }
            return __extends(i, t), i.getName = function () {
              return "SessionStorageAdapter"
            }, i.isAvailable = function () {
              return e.localInfo.supportsSessionStorage
            }, i
          }(g),
          f = function (t) {
            function i() {
              return null !== t && t.apply(this, arguments) || this
            }
            return __extends(i, t), i.isAvailable = function () {
              return e.localInfo.isFF && window.globalStorage
            }, i.getName = function () {
              return "FirefoxStorageAdapter"
            }, i.prototype.getItem = function (e) {
              return window.globalStorage[location.hostname][e]
            }, i.prototype.setItem = function (e, t, i) {
              try {
                window.globalStorage[location.hostname][e] = t
              } catch (e) {}
            }, i.prototype.removeItem = function (e) {
              delete window.globalStorage[location.hostname][e]
            }, i
          }(l),
          h = function (t) {
            function i() {
              var e = t.call(this) || this;
              return e.loadSwfStore(function (t) {
                e.isLoaded = !0
              }), e
            }
            return __extends(i, t), i.isAvailable = function () {
              return e.localInfo.supportsFlash && (e.localInfo.isIE || e.localInfo.isEdge)
            }, i.getName = function () {
              return "FlashAsyncStorageAdapter"
            }, i.prototype.loadSwfStore = function (t) {
              var i = this;
              return window.SwfStore ? void this.initializeSwfStore(function () {
                return i.loadSwfStore(t)
              }) : void e.utils.script.load("https://cdns.gigya.com/gs/js/swfstore.min.js", function () {
                console.log("Failed to load Gigya SwfStore."), t(!1)
              }, function () {
                i.initializeSwfStore(t)
              }, !0)
            }, i.prototype.initializeSwfStore = function (e) {
              this.swfStore = new SwfStore({
                namespace: "gigSSO",
                swf_url: "https://cdns.gigya.com/gs/swf/swfstore.swf",
                onready: function () {
                  e(!0)
                },
                onerror: function () {
                  console.log("Failed to initialize Gigya SwfStore."), e(!1)
                }
              })
            }, i.prototype.getItem = function (e) {
              return this.swfStore.get(e)
            }, i.prototype.setItem = function (e, t, i) {
              this.swfStore.set(e, t)
            }, i.prototype.removeItem = function (e) {
              this.swfStore.clear(e)
            }, i
          }(u),
          v = function (t) {
            function i() {
              return null !== t && t.apply(this, arguments) || this
            }
            return __extends(i, t), i.isAvailable = function () {
              return e.utils.cookie.canSaveCookie()
            }, i.getName = function () {
              return "CookieStorageAdapter"
            }, i.prototype.getItem = function (t) {
              return e.utils.cookie.get(t)
            }, i.prototype.setItem = function (t, i, n) {
              e.utils.cookie.set(t, i, n)
            }, i.prototype.removeItem = function (t) {
              e.utils.cookie.remove(t)
            }, i
          }(l);
        t.CookieStorageAdapter = v;
        var m = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t.memory = {}, t
          }
          return __extends(t, e), t.isAvailable = function () {
            return !0
          }, t.getName = function () {
            return "MemoryStorageAdapter"
          }, t.prototype.getItem = function (e) {
            return this.memory[e]
          }, t.prototype.setItem = function (e, t, i) {
            this.memory[e] = t
          }, t.prototype.removeItem = function (e) {
            delete this.memory[e]
          }, t.prototype.isPersistent = function () {
            return !1
          }, t
        }(l);
        t.adapters = [d, p, f, h, v, m], t.instances = {}, t.initializeAdapter = i, t.waitForService = n;
        var y = n();
        t.getItem = o, t.setItem = r, t.removeItem = a, t.setObject = s, t.getObject = c
      }(i = t.localStorage || (t.localStorage = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(t) {
          var i = e.utils.keyValue.deserialize(t, null, null, !0),
            n = i.id,
            o = s[n];
          if (null != o) {
            if ("function" == typeof o.callback) {
              var r = o.context;
              o.callback(i, r)
            }
            a(n)
          }
        }

        function n(t) {
          t = e.utils.object.clone(t);
          var i = function () {
            var i = t.data.split("="),
              n = s[i[0]];
            if (null != n) {
              if ("function" == typeof n.callback) {
                var o = unescape(i[1]),
                  r = e.utils.keyValue.deserialize(o, null, null, !0),
                  c = n.context;
                n.callback(r, c)
              }
              a(i[0]);
              var l = document.getElementById(i[0]);
              l && l.parentElement && l.parentElement.removeChild(l)
            }
          };
          t && t.data && t.data.split && (e.localInfo.iosVersion >= 6 ? i() : window.setTimeout(i, 100))
        }

        function o(t) {
          var i = document.createElement("iframe");
          return i.style.width = "30px", i.style.height = "10px", i.style.position = "absolute", i.style.top = "-1000px", i.style.left = "-1000px", i.id = t, i.src = "https://cdns.gigya.com/gs/LocalStorageListener.htm?mode=receive&id=" + encodeURIComponent(t), e.utils.DOM.appendToBody(i), i
        }

        function r(i, r, a, u) {
          s[i] = {
            callback: u,
            context: r,
            t: (new Date).getTime()
          };
          var g = e.localInfo.messagingMethod;
          if (e.localInfo.isIE11 && a && window.indexedDB && (g = e._.MessagingMethod.LocalStorageListener), e.localInfo.isAndroid && r && r.provider && "line" == r.provider.toLowerCase() && (g = e._.MessagingMethod.LocalStorageListener), g == e._.MessagingMethod.LocalStorageListener || g == e._.MessagingMethod.PostMessage) {
            if (g == e._.MessagingMethod.LocalStorageListener && a) {
              o(i)
            }
            if (!c) {
              var d = function (e) {
                if (e && e.data && "string" == typeof e.data) {
                  var t = e.data.split("=")[0];
                  s[t] && n(e)
                }
              };
              window.addEventListener ? window.addEventListener("message", d, !1) : window.attachEvent && window.attachEvent("onmessage", d), c = !0
            }
          } else {
            var p = "localstorage";
            e.thisScript.globalConf.legacyCrossSiteMethod && "localstorage" != e.thisScript.globalConf.legacyCrossSiteMethod.toLowerCase() && (p = e.thisScript.globalConf.legacyCrossSiteMethod), l[p] || window.setTimeout(function () {
              var i = document.createElement("div");
              i.style.width = "1px", i.style.height = "1px", i.style.overflow = "hidden", i.style.position = "absolute", i.style.left = "-1000px";
              var n = t._flashListenerID;
              "localstorage" != p && (n = p + ":" + t._flashListenerID);
              var o = e.localInfo.protocol + "://" + document.location.href.split("?")[0].split("#")[0].split("/")[2],
                r = (new Date).getTime(),
                a = document.createElement("object"),
                s = "https://cdns.gigya.com/GS/swf/eventsBroadcaster2.swf";
              a.setAttribute("id", "eventsBroadcaster" + r), a.setAttribute("codebase", "https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"), a.setAttribute("width", "50"), a.setAttribute("height", "50"), a.setAttribute("src", s), a.setAttribute("data", s), a.setAttribute("style", "display:inline");
              var c;
              c = document.createElement("param"), c.name = "movie", c.setAttribute("value", s), a.appendChild(c), c = document.createElement("param"), c.setAttribute("name", "allowScriptAccess"), c.setAttribute("value", "always"), a.appendChild(c), c = document.createElement("param"), c.setAttribute("name", "FlashVars"), c.setAttribute("value", "action=listen&id=" + n + "&eventName=loginComplete&callback=gigya.utils.xd._onFlashMessage&domain=" + o), a.appendChild(c), i.appendChild(a), e.utils.functions.invokeOnPageLoad(function () {
                e.utils.DOM.appendToBody(i), a.setAttribute("type", "application/x-shockwave-flash"), a.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000")
              }), l[p] = !0
            }, 500)
          }
        }

        function a(e) {
          delete s[e]
        }
        var s = {};
        t._flashListenerID = "flid" + (new Date).getTime();
        var c = !1,
          l = {};
        t._onFlashMessage = i, t.addMessageListener = r, t.removeMessageListener = a
      }(i = t.xd || (t.xd = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i() {
          var e = {};
          for (var t in c) {
            var i = n(t);
            i ? e[t] = {
              active: !0,
              waitingFor: c[t].ids,
              queuedCount: c[t].q.length
            } : e[t] = {
              active: !1
            }
          }
          return e
        }

        function n(e) {
          if (!c[e]) return !1;
          for (var t in c[e].ids) return !0;
          return !1
        }

        function o(t, i) {
          if (e.logger.debug("releasing " + i + " queue by " + t), c[i] && (delete c[i].ids[t], !n(i))) {
            var o = c[i].q;
            for (c[i].q = []; o.length > 0;) {
              var r = o.splice(0, 1)[0];
              try {
                r.func.apply(this, r.args)
              } catch (e) {
                "object" == typeof console && console.log && console.log("Gigya: Exception while invoking queued method (" + i + ": " + t + ")")
              }
              if (n(i)) {
                c[i].q = o;
                break
              }
            }
          }
        }

        function r(t, i) {
          e.logger.debug("locking queue " + i + " by " + t), c[i] || (c[i] = {
            q: [],
            ids: {}
          }), c[i].ids[t] = !0
        }

        function a(e, t, i) {
          c[e] || (c[e] = {
            q: [],
            ids: {}
          }), c[e].q.push({
            func: t,
            args: i
          })
        }

        function s(t, i, n) {
          n = n || [], e.utils.queue.isActive(t) ? e.utils.queue.waitFor(t, i, n) : i.apply(this, n)
        }
        var c = {};
        t._servicesStatus = i, t.isActive = n, t.release = o, t.hold = r, t.waitFor = a, t.queueForExecution = s
      }(i = t.queue || (t.queue = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(t, i) {
          if (r) {
            var n;
            try {
              n = e.utils.JSON.deserialize(window.sessionStorage.getItem("gigyaCache")), null == i && n[t] ? delete n[t] : n[t] = {
                response: i,
                time: (new Date).getTime()
              }, window.sessionStorage.setItem("gigyaCache", e.utils.JSON.serialize(n))
            } catch (e) {}
            e.utils.queue.release("cache", "cache_" + t)
          }
        }

        function n(t, i, n) {
          if (!r) return void("function" == typeof n && n(null));
          try {
            if (!e.utils.queue.isActive("cache_" + t)) {
              var o = window.sessionStorage.getItem("gigyaCache"),
                a = e.utils.JSON.deserialize(o),
                s = a[t];
              if (s) {
                if (i && i + s.time > (new Date).getTime()) return void n(s.response);
                e.utils.sessionCache.remove(t), s = null
              }
              if (!s) return e.utils.queue.hold("cache", "cache_" + t), void n(null)
            }
            if (e.utils.queue.isActive("cache_" + t)) return void e.utils.queue.waitFor("cache_" + t, e.utils.sessionCache.get, arguments)
          } catch (e) {
            n(null)
          }
        }

        function o(t) {
          e.utils.sessionCache.set(t, null)
        }
        var r;
        try {
          r = Boolean(window.sessionStorage)
        } catch (e) {
          r = !1
        }
        t.set = i, t.get = n, t.remove = o
      }(i = t.sessionCache || (t.sessionCache = {}))
    }(t = e.utils || (e.utils = {}));
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i() {
          return e.localInfo.isChrome || e.localInfo.isFF || e.localInfo.isOpera || e.localInfo.isIOSWebView || e.localInfo.isIE && e.utils.browser.getVersion() >= 9 || e.localInfo.isEdge || e.localInfo.isSafari && e.utils.browser.getVersion() >= 4 || e.localInfo.isGoogleBot
        }

        function n() {
          if (r.version) return r.version;
          try {
            var e = o.match(/(opera|chrome|safari|firefox|msie|trident.*rv:)\/?\s*(\.?\d+(\.\d+)*)/i);
            if (e[2]) {
              var t = e[2].split(".")[0];
              if (!isNaN(parseInt(t))) return r.version = parseInt(t)
            }
          } catch (e) {}
          return 0
        }
        var o = navigator.userAgent.toLowerCase(),
          r = {
            version: null
          };
        t.isModern = i, t.getVersion = n
      }(i = t.browser || (t.browser = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(t, i, n, o, r) {
          if (void 0 === r && (r = document.location), n && "post" == n.toLowerCase()) {
            var a = document.createElement("form"),
              s = [];
            a.setAttribute("accept-charset", "UTF-8"), a.setAttribute("method", "POST"), a.setAttribute("action", t), o && a.setAttribute("target", o);
            var c = e.utils.object.merge(i);
            for (var l in c) "number" != typeof c[l] && "boolean" != typeof c[l] && "string" != typeof c[l] || "eventName" == l || s.push('<textarea name="' + encodeURIComponent(l) + '">' + c[l].toString().replace(/\&/g, "&amp;") + "</textarea>");
            a.innerHTML = s.join(""), a.style.display = "none", e.utils.DOM.appendToBody(a), a.submit()
          } else {
            for (var u = new e._.Uri(t), g = {}, d = 0; d < i.length; d++) {
              var p = i[d];
              for (var f in p)
                if (p.hasOwnProperty(f)) {
                  var h = p[f];
                  g[f] = h
                }
            }
            u.addToSearch(g), r.href = u.toString()
          }
        }
        t.redirect = i
      }(i = t.HTTP || (t.HTTP = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(t, i) {
          var n = t.elementContext ? t.elementContext : document.body;
          e.utils.DOM.addEventListener(n, "keyup", function (e) {
            e.which == t.key && i()
          })
        }
        t.onHotKeyClicked = i
      }(i = t.keyboard || (t.keyboard = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i = function () {
        function t() {
          this.bindings = []
        }
        return t.getInstance = function () {
          return t.self || (t.self = new t), t.self
        }, t.prototype.bindTabLooping = function (e, t) {
          if (!this.getListenerByContainer(e)) {
            var i = this.createListener(e, t);
            window.addEventListener("keydown", i, !0)
          }
        }, t.prototype.unbindTabLooping = function (e) {
          var t = this.getListenerByContainer(e);
          t && window.removeEventListener("keydown", t, !0)
        }, t.prototype.getSortedTabbableElements = function (e, i) {
          for (var n = this, o = 0, r = e.querySelectorAll(t.selector), a = [], s = 0; s < r.length; ++s) {
            var c = r[s];
            this.isTabbable(c, i) && (c.setAttribute(t.naturalTabOrder, String(o)), o++, a.push(c))
          }
          return a.sort(function (e, t) {
            return n.sort(e, t)
          }), a
        }, t.prototype.createListener = function (t, i) {
          var n = this,
            o = function (o) {
              var r = document.activeElement;
              if (9 === o.keyCode && t.contains(r)) {
                var a = o.shiftKey ? n.getPreviousTabbableElement(t, r, i) : n.getNextTabbableElement(t, r, i);
                a && (a.focus(), e.utils.DOM.cancelEvent(o))
              }
            };
          return this.bindings.push({
            container: t,
            listener: o
          }), o
        }, t.prototype.isTabbable = function (e, t) {
          var i = e.matches || e.msMatchesSelector;
          return e.tabIndex !== -1 && (e.offsetWidth > 0 || e.offsetHeight > 0) && (!t || i.call(e, t))
        }, t.prototype.getNextTabbableElement = function (e, t, i) {
          var n = this.getSortedTabbableElements(e, i),
            o = n.indexOf(t);
          return o === -1 ? void 0 : o !== n.length - 1 ? n[o + 1] : n[0]
        }, t.prototype.getPreviousTabbableElement = function (e, t, i) {
          var n = this.getSortedTabbableElements(e, i),
            o = n.indexOf(t);
          return o === -1 ? void 0 : 0 !== o ? n[o - 1] : n[n.length - 1]
        }, t.prototype.sort = function (e, i) {
          var n = this.getTabIndex(e) - this.getTabIndex(i);
          return 0 !== n ? n : Number(e.getAttribute(t.naturalTabOrder)) - Number(i.getAttribute(t.naturalTabOrder))
        }, t.prototype.getTabIndex = function (e) {
          return 0 === e.tabIndex ? 99999999 : e.tabIndex
        }, t.prototype.getListenerByContainer = function (e) {
          for (var t = 0, i = this.bindings; t < i.length; t++) {
            var n = i[t];
            if (n.container === e) return n.listener
          }
        }, t.naturalTabOrder = "data-natural-tab-order", t.selector = ["a:not([disabled])", "button:not([disabled])", "input:not([disabled])", "[tabindex]:not([disabled])"].join(","), t
      }();
      t.Tabbable = i, t.tabbable = i.getInstance()
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e) {
          return n(e) > Date.now()
        }

        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          if (e && e.length) return e.sort(function (e, t) {
            return n(t) - n(e)
          })[0]
        }

        function n(e) {
          return e ? 1e3 * Number(e.substr(0, e.indexOf("_"))) : 0
        }
        e.isValid = t, e.getMax = i, e.getMillis = n
      }(t = e.gltexp || (e.gltexp = {}))
    }(t = e.utils || (e.utils = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    e.socialize = {}, e.gcs = {}, e.gm = {}, e.comments = {}, e.accounts = {}, e.gscounters = {}
  }(gigya || (gigya = {})),
  function (e) {
    var t;
    ! function (t) {
      function i(e) {
        return n[e]
      }
      var n = {};
      t.getApi = i;
      var o = function () {
        function t(e, t) {
          this.methodName = e, this.settings = t, this.addAlias(), n[e] = this
        }
        return t.prototype.preprocessRequest = function (e, t) {
          this.settings.preprocessor ? this.settings.preprocessor(e, t) : t()
        }, t.prototype.addAlias = function () {
          var t = this;
          e.utils.functions.createAlias("gigya." + this.methodName, function () {
            for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
            var o = e.utils.object.merge([i]),
              r = function () {
                var i = e.utils.object.merge([e.thisScript.globalConf, o]);
                t.run(i, o)
              };
            e.thisScript && e.thisScript.globalConf ? r() : e.utils.queue.queueForExecution("API", r)
          })
        }, t
      }();
      t.BaseApi = o
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    e.defaultEventMaps = e.defaultEventMaps || []
  }(gigya || (gigya = {})),
  function (e) {
    var t;
    ! function (t) {
      function i(e) {
        return "on" === e.substring(0, 2) ? e : "on" + e.substring(0, 1).toUpperCase() + e.substring(1)
      }

      function n(t) {
        e.defaultEventMaps.splice(0, 0, t)
      }

      function o(t, i, n) {
        i || (i = {});
        var o = i;
        o.response && (o = o.response);
        var r = {
          eventName: "error",
          status: o.status ? o.status : "FAIL",
          statusMessage: o.statusMessage ? o.statusMessage : "General Server Error",
          errorMessage: o.errorMessage ? o.errorMessage : "General Server Error",
          errorDetails: o.errorDetails ? o.errorDetails : "",
          errorCode: o.errorCode ? o.errorCode : 500001,
          response: i
        };
        e.utils.object.add(r, n), e.events.dispatchForWidget(r, t)
      }

      function r(t, i) {
        var n = {
          eventName: "error"
        };
        "undefined" == typeof t[i] || null == t[i] ? (n.errorCode = 400002, n.errorMessage = "Missing_required_parameter (" + i + ")") : (n.errorCode = 400006, n.errorMessage = "Invalid_parameter_value (" + i + ")"), n.status = n.errorCode, n.statusMessage = n.errorMessage, e.events.dispatchForWidget(n, t)
      }

      function a(t, n) {
        if (t && t.eventName) {
          var o = t.eventName;
          e.log.addLog('Dispatching widget event "' + o + '" for ' + n.lastSource + " with this event object", t), e._.handleSpecialFields(t);
          for (var r, a = o.split(","), c = 0; c < a.length; c++) {
            var o = a[c],
              l = i(o);
            if (n && (n.context && (t.context = n.context), n.source && (t.source = n.source), n.sourceData && (t.sourceData = n.sourceData), n.containerID && (t.sourceContainerID = n.containerID), n.instanceID && (t.instanceID = n.instanceID)), n[l] && (r = s(n[l], t)), "undefined" == typeof r && (r = !0), o.indexOf("login") == -1 && o.indexOf("logout") == -1 && "connectionRemoved" != o && "connectionAdded" != o) {
              this._dispatchFromMaps(t);
              var u = window.GenesisExchange_Gigya,
                g = window.gigya_omniture_conf,
                d = window.myOmnitureIntegrationFunc;
              if ("undefined" != typeof u && "undefined" != typeof g) {
                var p = new u(g);
                p.processAction(t), "undefined" != typeof d && d(g, t)
              }
            }
          }
          return r
        }
      }

      function s(t, i) {
        var n;
        try {
          "function" == typeof t ? n = t(i) : t instanceof Array ? e.utils.array.forEach(t, function (t) {
            "function" == typeof t ? t(i) : e.log.addLog("Not a function registered to event: " + t, t)
          }) : e.log.addLog("Not a function or function array registered to event", t)
        } catch (i) {
          e.log.addLog("Error invoking function registered to event", t)
        }
        return n
      }

      function c(t, i) {
        for (var n = [], o = !1, r = 0; r < e.defaultEventMaps.length; r++) {
          for (var a = e.defaultEventMaps[r].eventMap, s = e.defaultEventMaps[r].defaultMethod, c = 0; c < a.length; c++) {
            var l = a[c],
              u = [];
            l.args || (l.args = []);
            for (var g = 0; g < l.args.length; g++) "$event" == l.args[g] ? u.push(t) : u.push(e.utils.templates.fill(l.args[g], t));
            var d = (l.events.split(","), "," + l.events.toLowerCase() + ",");
            if (d.indexOf(",*,") != -1 || (d.indexOf(",on" + t.eventName.toLowerCase() + ",") != -1 || d.indexOf("," + t.eventName.toLowerCase() + ",") != -1) && (!t.source && !l.sources || !l.sources || l.sources.indexOf(t.source) != -1)) {
              n.push(l);
              var p = l.method ? l.method : s;
              try {
                p.apply(this, u)
              } catch (t) {
                e.log.addLog("Error invoking function registered to events map's method", p)
              }
              l.override && (o = !0)
            }
          }
          if (o) break
        }
      }
      var l;
      ! function (t) {
        function n(t, n, o, r, a, c) {
          void 0 === o && (o = "other"), void 0 === a && (a = "socialize");
          var g = a + "_" + i(t);
          l[g] || (l[g] = []);
          var d = {
            handler: n,
            type: o,
            context: r,
            params: c,
            fullEventName: g
          };
          l[g].push(d), !this._activeNamespaces[a] && e._.apiAdapter && e._.apiAdapter.registerForNamespaceEvents(a), this._activeNamespaces[a] = 1;
          var p = u[g];
          if (p && "other" == o) {
            u[g] = [];
            for (var f = 0; f < p.length; f++) {
              var h = p[f];
              s(h.eventObj, h.params, h.preProcess)
            }
          }
          return d
        }

        function o(t, i) {
          l[t] && e.utils.array.removeByValue(l[t], i)
        }

        function r(t, n) {
          var o = 0,
            r = t.isInternal,
            a = t.eventName.split(",");
          e.log.addLog('Dispatching global event "' + t.eventName + '" with this event object', t);
          for (var s = 0; s < a.length; s++) {
            var c = a[s].split("."),
              u = c.length > 1 ? c.shift() : "socialize",
              g = c[0],
              d = i(g),
              p = u + "_" + d,
              f = e.utils.object.clone(l[p]);
            f || (f = []);
            var h = e.utils.object.clone(t);
            h.isGlobal = !0, h.eventName = g, h.fullEventName = a[s], n && (n.source && (h.source = n.source), n.sourceData && (h.sourceData = n.sourceData), n.context && (h.context = n.context));
            var v = ["component"];
            r || v.push("other");
            for (var m = 0; m < v.length; m++)
              for (var y = v[m], b = 0; b < f.length; b++) {
                var w = f[b];
                if (w.type == y) {
                  var I = e.utils.object.clone(h);
                  null == I.context && null != w.context && (I.context = w.context), null == I.context && delete I.context, "component" != y && (o++, e._.handleSpecialFields(I)), w.params && w.params.signKey && (I.UIDSignature = t.signKeysUIDSignature[w.params.signKey], delete I.signKeysUIDSignature);
                  try {
                    w.handler(I)
                  } catch (i) {
                    e.log.addLog('Error while trying to invoke "' + t.eventName + '" global event handler', i)
                  }
                }
              }
            r || e.events._dispatchFromMaps(h, !0);
            var S = window.GenesisExchange_Gigya,
              A = window.gigya_omniture_conf,
              _ = window.myOmnitureIntegrationFunc;
            if (!r && "undefined" != typeof S && "undefined" != typeof A && "socialize" == u) {
              var C = new S(A);
              C.processAction(h), "undefined" != typeof _ && _(A, h)
            }
          }
          return o
        }

        function a(e, t, i) {
          void 0 === t && (t = {});
          var n = e.eventName.split("."),
            o = n.length > 1 ? n.shift() : "socialize",
            r = n[0];
          s(e, t, i, function (n) {
            if (0 == n) {
              var a = "on" + r.substring(0, 1).toUpperCase() + r.substring(1),
                s = o + "_" + a;
              u[s] || (u[s] = []), u[s].push({
                eventObj: e,
                params: t,
                preProcess: i
              })
            }
          })
        }

        function s(t, i, n, o) {
          var r = function (t) {
            var n = 0;
            t.cancel || (n = e.events.global.dispatch(t, i)), o && o(n)
          };
          n ? n(t, r) : r(t)
        }

        function c(e) {
          var t = [];
          return e.toLowerCase().indexOf("login") != -1 ? (this._activeNamespaces.socialize && t.push("socialize.login"), this._activeNamespaces.accounts && t.push("accounts.login")) : e.toLowerCase().indexOf("addconnection") != -1 && this._activeNamespaces.socialize && t.push("socialize.connectionAdded"), t.join(",")
        }
        var l = {},
          u = {};
        t._activeNamespaces = {}, t.add = n, t.remove = o, t.dispatch = r, t.dispatchWhenHandlerAdded = a, t.getEventsForOperation = c
      }(l = t.global || (t.global = {})), t.addMap = n, t.dispatchErrorFromResponse = o, t.dispatchInvalidParamError = r, t.dispatchForWidget = a, t.dispatchEventObject = s, t._dispatchFromMaps = c
    }(t = e.events || (e.events = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i = function (i) {
        function n(e, t, n, o, r, a) {
          void 0 === o && (o = {}), void 0 === r && (r = {});
          var s = i.call(this, e, o) || this;
          return s.schema = t, s.requiresSession = n, s.settings = o, s.adapterSettings = r, s.altSessionParams = a, "undefined" == typeof r.requiresSession && (r.requiresSession = function () {
            return n
          }), s
        }
        return __extends(n, i), n.prototype.run = function (i, n) {
          var o = this,
            r = function () {
              new t.ServerApiRequest(o, i).start()
            };
          i.ignoreApiQueue ? r() : e.utils.queue.queueForExecution("API", function () {
            r()
          })
        }, n
      }(t.BaseApi);
      t.ServerApi = i
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      function i() {
        return e.utils.object.clone({
          status: "FAIL",
          errorMessage: "Unauthorized user",
          statusMessage: "Unauthorized user",
          errorCode: 403005
        })
      }

      function n(e) {
        return {
          status: "OK",
          statusMessage: "",
          errorCode: 0,
          statusCode: 0,
          errorMessage: "",
          errorDetails: "",
          statusReason: "",
          originalResponse: e
        }
      }
      var o;
      e.events.global.add("onFBCRefreshed", function () {
        o = !1
      }, "component");
      var r;
      ! function (e) {
        e[e._unknown = 0] = "_unknown", e[e.facebook = 1] = "facebook", e[e.linkedin = 2] = "linkedin", e[e.samlProvider = 3] = "samlProvider", e[e.samlSession = 4] = "samlSession"
      }(r || (r = {}));
      var a = [{
          methodName: "accounts.verifyLogin",
          restriction: "suppressLoginEvent"
        }],
        s = function () {
          function s(t, i) {
            this.api = t, this.params = e.utils.object.merge([e.utils.object.clone(i), t.settings.defaultParams]), this.originalParams = e.utils.object.clone(i), this.callback = i.callback
          }
          return s.prototype.start = function () {
            var n = this;
            t.apiAdapter.isSessionValid(this.params, function (o) {
              return __gig_awaiter(n, void 0, e.Promise, function () {
                var n, r, a;
                return __gig_generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return !this.api.adapterSettings.requiresSession() || o || this.doesHaveAltSessionParam() ? [3, 1] : (e.logger.debug(this.api.methodName + ": missing required session"), this.afterServerApiResponse(i(), !1), [3, 6]);
                    case 1:
                      return e.logger.debug("server request: " + this.api.methodName, this.params), this.api.adapterSettings.requiresSession() ? [4, t.apiAdapter.setGltexpFromSSO(this.params.APIKey)] : [3, 3];
                    case 2:
                      return r = s.sent(), [3, 4];
                    case 3:
                      r = !1, s.label = 4;
                    case 4:
                      return n = r, [4, this.sendRequest(o)];
                    case 5:
                      a = s.sent(), n && 403005 !== a.errorCode && this.dispatchAccountsLoginEvent(a), s.label = 6;
                    case 6:
                      return [2]
                  }
                })
              })
            })
          }, s.prototype.sendRequest = function (i) {
            var n = this,
              o = e.utils.object.merge([this.api.adapterSettings, {
                cacheTimeout: this.params.cacheTimeout,
                forceGigyaDomain: !i && this.api.adapterSettings.forceGigyaDomain
              }]);
            return new e.Promise(function (r) {
              n.beforeRequest(i, function (a) {
                a ? n.afterServerApiResponse(a, i, r) : (e.events.global.dispatch({
                  eventName: "beforeRequest",
                  methodName: n.api.methodName,
                  rawParams: n.originalParams,
                  params: n.params
                }, n.originalParams), n.api.settings.oauth ? t.apiAdapter.sendOauthRequest(n.api.methodName, n.params, function (e) {
                  n.afterServerApiResponse(e, i, r)
                }, o) : t.apiAdapter.sendRequest(n.api.methodName, n.params, function (e) {
                  n.afterServerApiResponse(e, i, r)
                }, o))
              })
            })
          }, s.prototype.beforeRequest = function (i, o) {
            var r = this;
            if (e.external.backplane.isLoaded() && !e.external.backplane._ready && t.loginMethods[this.api.methodName]) return void e.external.backplane.executeOnInit(function () {
              r.beforeRequest(i, o)
            });
            e._.logoutMethods[this.api.methodName] && (!i && !this.params.regToken || e.partnerSettings.ssoLogoutUrl && document.location.href == e.partnerSettings.ssoLogoutUrl) && o(n(null)), this.handleDeprecatedParams(), this.handleCollections(), this.handleConnectWithoutLoginBehavior(i);
            var a = this.params[this.params.provider + "ExtraPermissions"];
            this.params.extraPermissions = a || this.params.permissions, this._initialMethod = this.params.initialMethod, this.api.preprocessRequest(this.params, function () {
              r.setOverridableParams(function () {
                r.setNonOverridableParams(i, function () {
                  r.filterParams(r.params), e.log.logCall(r.api.methodName, r.originalParams, r.originalParams.lastSource), o()
                })
              })
            })
          }, s.prototype.setOverridableParams = function (t) {
            var i = {};
            e.utils.object.merge([i, this.params]), t()
          }, s.prototype.doesHaveAltSessionParam = function () {
            if (this.api.altSessionParams) {
              for (var e = this.api.altSessionParams.split("|"), t = 0; t < e.length; t++)
                if (this.params[e[t]]) return !0;
              return !1
            }
          }, s.prototype.setNonOverridableParams = function (i, n) {
            if (null != this.params.APIKey) {
              var r = e.utils.cookie.get("gltexp_" + this.params.APIKey);
              null != r && (this.params.loginTokenExp = r)
            }
            var a = e.utils.cookie.get("_gigRefUid_" + this.params.APIKey);
            if (a && (i || t.loginMethods[this.api.methodName]) && (this.params.refUID = a), e.providersConfig.facebook && !o) {
              var s = e.external.facebook.getParams();
              for (var c in s) this.params[c] = s[c];
              o = !0
            }
            0 === this.api.methodName.indexOf("accounts.") && (e.events.global._activeNamespaces.socialize && null == this.params.includeUserInfo && (this.params.includeUserInfo = !0), this.params.include = this.params.include ? this.params.include + "," : "profile,data"), "accounts.getSchema" === this.api.methodName && (this.params.includeDynamicSchema = "clientOnly");
            var l = e.external.backplane.getChannelId();
            l && (this.params.bp_channel_url = l), this.params.targetEnv = "jssdk", n()
          }, s.prototype.handleDeprecatedParams = function () {
            this.params.pendingRegistration ? this.params.pending_registration = this.params.pendingRegistration : this.params.newUsersPendingRegistration && (this.params.pending_registration = this.params.newUsersPendingRegistration), this.params.alwaysForceAuthentication && (this.params.forceAuthentication = !0), this.params.timestamp && (this.params.UIDTimestamp = this.params.timestamp, delete this.params.timestamp), this.params.signature && 0 === this.api.methodName.indexOf("socialize.") && (this.params.UIDSig = this.params.signature, delete this.params.signature), this.params.nonce && (this.params.UIDNonce = this.params.nonce, delete this.params.nonce), this.params.format && !this.params.dataFormat && (this.params.dataFormat = this.params.format, delete this.params.format)
          }, s.prototype.handleCollections = function () {
            if (this.params.recipients && (this.params.recipients = this.extractListOfGIGUIDs(this.params.recipients)), this.params.friends) {
              var e = this.extractListOfGIGUIDs(this.params.friends);
              this.params.UIDs.length > 0 && (this.params.UIDs += ","), this.params.UIDs += e
            }
          }, s.prototype.extractListOfGIGUIDs = function (t) {
            var i = this;
            switch (typeof t) {
              case "string":
                return t;
              case "object":
                if ("undefined" != typeof t.UID) return t.UID;
                if (t instanceof e.socialize.Collection) {
                  var n = [];
                  return t.each(function (e, t) {
                    var o = i.extractListOfGIGUIDs(e);
                    null != o && "" != o && n.push(o)
                  }), n.join(",")
                }
            }
          }, s.prototype.handleConnectWithoutLoginBehavior = function (e) {
            if ("socialize.addConnection" === this.api.methodName) {
              var i = this.params.connectWithoutLoginBehavior;
              "string" == typeof i && (i = i.toLowerCase()), "loginexistinguser" === i && (this.params.loginIfExists = !0), e || (this.api = t.getApi("socialize.login"), "alwayslogin" !== i && (this.params.temporary_account = !0))
            }
          }, s.prototype.filterParams = function (t) {
            this.params = e.utils.object.extractProperties(t, {}, this.getFullSchema())
          }, s.prototype.getFullSchema = function () {
            if (null == this.api.schema) return "";
            for (var t = (this.api.schema + "|" + e._.defaultApiSchema).split("|"), i = 0; i < t.length; i++) {
              var n = t[i];
              if (n.toLowerCase().indexOf("[providercapability=") !== -1) {
                for (var o = n.toLowerCase().split("=")[1].split("]")[0], r = n.split("]")[1], a = e.socialize.getProvidersForRequiredCapabilities(e.socialize.getProvidersByName("*"), [o]), s = [], c = 0; c < a.length; c++) s.push(a[c].name + r);
                t[i] = s.join("|")
              }
            }
            return t.join("|")
          }, s.prototype.preprocessServerResponse = function (t) {
            t.userInfo && 0 !== this.api.methodName.indexOf("accounts.") && ("string" == typeof t.userInfo && (t.userInfo = e.utils.JSON.parse(t.userInfo, void 0)), t.userInfo && (t = e.utils.object.merge([t.userInfo, t]), t.errorCode = t.userInfo.errorCode, delete t.userInfo)), t.accountInfo && "string" == typeof t.accountInfo && (t.accountInfo = e.utils.JSON.parse(t.accountInfo, void 0), t.accountInfo && (t = e.utils.object.merge([t.accountInfo, t]), delete t.accountInfo));
            try {
              t.settings && "string" == typeof t.settings && (t.settings = e.utils.JSON.parse(t.settings))
            } catch (e) {}
            return t
          }, s.prototype.onAfterLogoutMethod = function () {
            e.external.backplane.resetChannel()
          }, s.prototype.getExpiredSessionResponse = function (e) {
            switch (this.api.methodName) {
              case "socialize.setUserSettings":
                this.originalParams.disableLocalSettings || (t.setGigyaSettings(this.params.group, this.params.settings), e = n(e));
                break;
              case "socialize.delUserSettings":
                this.originalParams.disableLocalSettings || (t.delGigyaSettings(this.params.group), e = n(e));
                break;
              case "socialize.getUserSettings":
                if (!this.originalParams.disableLocalSettings) {
                  var i = t.getGigyaSettings(this.params.group);
                  e = n(e), e.settings = i
                }
                break;
              case "socialize.getUserInfo":
                e.status = "OK", e.statusMessage = "", e.errorCode = 0, e.statusCode = 0, e.errorMessage = "", e.errorDetails = "", e.statusReason = "";
                break;
              case "accounts.logout":
              case "socialize.logout":
                e = n(e)
            }
            return e
          }, s.prototype.afterServerApiResponse = function (i, n, o) {
            var r = this;
            isNaN(Number(e.thisScript.globalConf.verifyLoginInterval)) || "accounts.verifyLogin" !== this.api.methodName || 0 === i.errorCode || t.apiAdapter.clearSession({
              APIKey: e.thisScript.APIKey
            }), t.checkCompleteRegistration(i, this.originalParams, this.api.methodName, function (a, s, c) {
              i = a, i = r.preprocessServerResponse(i), t.logoutMethods[r.api.methodName] && 0 == i.errorCode && i.logoutActiveSession && r.onAfterLogoutMethod(), 403005 == i.errorCode && (i = r.getExpiredSessionResponse(i)), 0 == i.errorCode && (n || t.loginMethods[r.api.methodName]) && e.utils.cookie.remove("_gigRefUid_" + r.originalParams.APIKey), r.handleMethodResponse(i, function (a) {
                i = a, r.addDefaultResponseProperties(i), t.handleSpecialFields(i), r.logoutFromProvidersIfNeeded(i, function (t) {
                  if (t) return void r.sendRequest(n).then(o);
                  if (s || r.generateEventsFromResponse(i, n), c) return e.logger.info("retrying request"), void r.sendRequest(n).then(o);
                  if (e.events.global.dispatch({
                      eventName: "afterResponse",
                      methodName: r.api.methodName,
                      filteredParams: r.params,
                      response: i
                    }, r.originalParams), "function" == typeof r.callback) {
                    e.log.addLog("Calling callback for " + r.api.methodName + " with this response object", i);
                    try {
                      r.callback(i)
                    } catch (e) {
                      console.error(e)
                    }
                  }
                  r.api.settings.postprocessor && r.api.settings.postprocessor(r.originalParams, i), o && o(i)
                })
              })
            })
          }, s.prototype.addDefaultResponseProperties = function (e) {
            delete e.statusCode, delete e.statusReason, e.errorCode = e.errorCode || 0, e.status = e.status || (0 == e.errorCode ? "OK" : "FAIL"), e.errorMessage = e.errorMessage || "", e.statusMessage = e.statusMessage || e.errorMessage, e.requestParams = this.originalParams, e.requestParams.password && delete e.requestParams.password, e.context = this.originalParams.context;
            var t = this.api.methodName.split(".")[0];
            e.operation = "socialize" == t ? this.api.methodName.split(".")[1] : "/" + this.api.methodName
          }, s.prototype.handleMethodResponse = function (i, n) {
            if (0 == i.errorCode) switch (this.api.methodName) {
              case "accounts.socialLogin":
              case "socialize.login":
                i.newUser = "true" == String(i.x_newUser), delete i.x_newUser;
              case "socialize.notifyLogin":
              case "socialize.addConnection":
              case "accounts.linkAccounts":
              case "accounts.finalizeRegistration":
              case "accounts.login":
              case "accounts.register":
              case "socialize.getUserInfo":
                if (delete i.login_token, delete i.expires_in, delete i.id, i.code && (i.authCode = i.code, delete i.code), !(i.authCode || "socialize.notifyLogin" == this.api.methodName && this.params.authCode)) {
                  var o = i;
                  if (i.userInfo && (o = i.userInfo, delete i.userInfo), this.api.methodName.indexOf("accounts.") == -1 ? (i = {
                      user: o
                    }, e.utils.object.extractProperties(o, i, "status|statusMessage|callId|errorCode|errorMessage|errorDetails|settings|context|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|newUser|signKeysUIDSignature"), i.user.hasOwnProperty("UIDSig") && (i.signature = i.user.UIDSig), o.profile && delete o.profile, o.data && delete o.data, delete o.status, delete o.statusMessage, delete o.callId, delete o.errorCode, delete o.errorMessage, delete o.errorDetails, delete o.settings, delete o.context) : i != o && (i.user = o), "" == o.age || isNaN(parseInt(o.age)) || (o.age = parseInt(o.age)), o.suppressEvents && (i.suppressEvents = !0), "string" == typeof o.capabilities) {
                    var r = o.capabilities;
                    r || (r = ""), "object" != typeof o.capabilities && (o.capabilities = {}), r = r.toLowerCase(), o.capabilities = {
                      actions: r.indexOf("actions") > -1,
                      friends: r.indexOf("friends") > -1,
                      login: r.indexOf("login") > -1,
                      status: r.indexOf("status") > -1,
                      notifications: r.indexOf("notifications") > -1,
                      contacts: r.indexOf("contacts") > -1,
                      photos: r.indexOf("photos") > -1
                    }
                  }
                  if (t.convertIdentitiesArrayToObject(o), "string" == typeof o.providers && (o.providers = o.providers.split(",")), this.params.group && !i.settings) {
                    var a = t.getGigyaSettings(this.params.group);
                    i.settings = a
                  }
                }
                break;
              case "socialize.getAvailableProviders":
                for (var s = {}, c = 0; c < i.availableProviders.length; c++) s[i.availableProviders[c].name] = i.availableProviders[c];
                i.availableProviders = s
            }
            "socialize.removeConnection" === this.api.methodName && 0 == i.errorCode ? e.socialize.getUserInfo(this.originalParams, {
              callback: function (e) {
                n(e)
              }
            }) : n(i)
          }, s.prototype.logoutFromProvidersIfNeeded = function (i, n) {
            var o = 5e3,
              a = 1e4,
              s = i.errorCode;
            if (t.logoutMethods[this.api.methodName] && 0 == s) {
              i.logoutActiveSession && e._.apiAdapter.clearSession(this.params.APIKey);
              var c, l = new Array,
                u = o,
                g = 0;
              if (i.connectedProviders ? c = i.connectedProviders.toLowerCase() : i.provider && (c = i.provider.toLowerCase()), c && !e.utils.validation.isExplicitFalse(this.originalParams.forceProvidersLogout))
                for (var d = c.split(","), p = 0; p < d.length; ++p) {
                  var f = d[p],
                    h = r[f],
                    v = null,
                    m = o;
                  0 === f.indexOf("saml-") && (h = r.samlProvider, v = f.substring("saml-".length), m = !1, u = a, g = o), l.push({
                    type: h,
                    data: v,
                    removeAfter: m
                  })
                }
              if (i.samlContext && i.connectedSamlSessions)
                for (var y = i.samlContext, b = i.connectedSamlSessions.split(","), p = 0; p < b.length; ++p) l.push({
                  type: r.samlSession,
                  data: {
                    samlContext: y,
                    samlSession: b[p]
                  },
                  removeAfter: !1
                }), u = a, g = o;
              if (l.length) {
                var w = 0,
                  I = !1,
                  S = function () {
                    I || (I = !0, n(!1))
                  };
                window.setTimeout(S, u);
                for (var A = function () {
                    w++, w === l.length && window.setTimeout(S, g)
                  }, p = 0; p < l.length; p++) this.logoutFromProvider(l[p], A)
              } else n(!1)
            } else 403013 == i.errorCode && "accounts.verifyLogin" !== this.api.methodName ? e.accounts.verifyLogin({
              callback: function (e) {
                n(0 == e.errorCode ? !0 : !1)
              }
            }) : n(!1)
          }, s.prototype.logoutFromProvider = function (t, i) {
            var n = "",
              o = !1,
              a = !0,
              s = "" + e._.getApiDomain("fidm");
            switch (t.type) {
              case r.facebook:
                if (e.providersConfig.facebook) return void e.socialize.waitForService({
                  service: "facebook",
                  callback: function () {
                    e.external.facebook.isLoggedIn && FB.logout ? FB.logout(function () {
                      e.external.facebook.refreshSession(), e.utils.cookie.remove("fblo_" + e.providersConfig.facebook.appID), i()
                    }) : i()
                  }
                });
                break;
              case r.samlProvider:
                n = e.utils.URL.addParamsToURL("https://" + s + "/saml/v2.0/" + this.params.APIKey + "/sp/jsslo", {
                  name: t.data
                }), o = !0, a = !1;
                break;
              case r.samlSession:
                n = e.utils.URL.addParamsToURL("https://" + s + "/saml/v2.0/" + this.params.APIKey + "/idp/slo/continue/", t.data), o = !0, a = !1
            }
            if (n) {
              a && (n += (new Date).getTime());
              var c, l = o ? e.utils.script.ResourceTypes.iframe : e.utils.script.ResourceTypes.image;
              c = t.removeAfter, e.utils.script.triggerResource(n, i, l, c)
            } else i()
          }, s.prototype.generateEventsFromResponse = function (i, n) {
            var o, r = this;
            if (0 == i.errorCode) switch (this.api.methodName) {
              case "accounts.logout":
              case "socialize.logout":
              case "socialize.unlinkAccounts":
              case "socialize.deleteAccount":
                o = {
                  eventName: "logout,accounts.logout"
                };
                break;
              case "socialize.linkAccounts":
              case "socialize.setUID":
                t.addUserInfoToEvent(i, o, !0);
                break;
              case "socialize.removeConnection":
                o = {
                  eventName: "connectionRemoved,disconnect",
                  provider: this.params.provider || ""
                }, t.addUserInfoToEvent(i, o);
                break;
              case "socialize.addConnection":
                !n && i.user.isLoggedIn ? (o = {
                  eventName: "login",
                  provider: this.params.provider
                }, t.addUserInfoToEvent(i, o, !0)) : (o = {
                  eventName: "connectionAdded,connect",
                  provider: this.params.provider
                }, t.addUserInfoToEvent(i, o));
                break;
              case "accounts.linkAccounts":
              case "accounts.finalizeRegistration":
              case "accounts.login":
              case "accounts.register":
              case "accounts.socialLogin":
                this.hasRestrictionForInitialMethod(this._initialMethod, "suppressLoginEvent") || this.dispatchAccountsLoginEvent(i);
              case "socialize.finalizeRegistration":
              case "socialize.register":
              case "socialize.login":
                if (!i.user && !i.authCode) break;
                o = {
                  eventName: "login"
                };
                var a = this.params.provider;
                if (!a && i.providerSessions)
                  for (var s in i.providerSessions) {
                    a = s;
                    break
                  }
                o.provider = a || "site", o.loginMode = this.originalParams.loginMode || "standard", o.newUser = i.newUser || !1, i.authCode && (o.authCode = i.authCode), t.addUserInfoToEvent(i, o, !0), i.user && a && (a = a.toLowerCase(), e.utils.cookie.set("_gig_llp", a), e.utils.cookie.set("_gig_llu", i.user.firstName || ""));
                break;
              case "socialize.notifyLogin":
                this.params.authCode || (o || (o = {
                  eventName: "login"
                }), o.provider = "site", t.addUserInfoToEvent(i, o, !0));
                break;
              case "gm.notifyAction":
                e.events.global.dispatch({
                  eventName: "actionNotified",
                  isInternal: !0
                })
            }
            t.loginMethods[this.api.methodName] && this.originalParams.redirectURL && o && o.user && 0 == i.errorCode && e.utils.HTTP.redirect(this.originalParams.redirectURL, [o, o.user], this.originalParams.redirectMethod), 0 == i.errorCode && o && "login" === o.eventName && !i.profile && e.events.global._activeNamespaces.accounts && this.api.methodName.indexOf("accounts") === -1 && e.accounts.getAccountInfo(this.originalParams, {
              include: "profile,data",
              includeUserInfo: !1,
              callback: function (e) {
                r.dispatchAccountsLoginEvent(e)
              }
            }), null != o && (o.context = this.originalParams.context, e.events.global.dispatch(o, this.originalParams))
          }, s.prototype.dispatchAccountsLoginEvent = function (t) {
            var i = {
              eventName: "accounts.login",
              remember: e.utils.validation.isExplicitTrue(this.originalParams.remember),
              provider: this.originalParams.provider ? this.originalParams.provider.toLowerCase() : "",
              loginMode: this.originalParams.loginMode || "standard"
            };
            e.utils.object.extractProperties(t, i, "newUser|signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|signKeysUIDSignature"), e.events.global.dispatch(i, this.originalParams)
          }, s.prototype.hasRestrictionForInitialMethod = function (e, t) {
            var i = a.map(function (e) {
              return e.methodName
            }).indexOf(e);
            return i >= 0 && a[i].restriction === t
          }, s
        }();
      t.ServerApiRequest = s
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      t.__pluginsCoreLoaded = !1;
      var i = {
          showReactionsBarUI: ["barID"],
          showCommentsUI: ["categoryID", "streamID"]
        },
        n = function (n) {
          function o(e, t, i, r, a, s) {
            void 0 === i && (i = {}), void 0 === r && (r = {}), void 0 === a && (a = ""), void 0 === s && (s = {});
            var c = n.call(this, o.getApiName(t, e, s), s) || this;
            return c.methodName = e, c.jsName = t, c.settings = s, s.defaultParams = i || {}, s.defaultPopupParams = r || {}, s.requiredParams = a || "", c
          }
          return __extends(o, n), o.getApiName = function (e, t, i) {
            return void 0 === i && (i = {}), i.apiName || e.split(".")[0] + "." + t
          }, o.versionSelector = function (i, n, o, r, a) {
            void 0 === a && (a = "version");
            var s = new t.api.VersionSelector(i, r, o);
            return e.utils.functions.createAlias("gigya." + n + "." + i, function () {
              for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
              var n = t[0],
                o = t[1];
              o || (o = n, n = null), o || (o = {}, t.push(o));
              var r = e.utils.object.merge([{}, n, o]);
              s.callVersion("" + r[a], o, t)
            }), s
          }, o.createApi = function (e, t, i, n, r, a) {
            void 0 === r && (r = {}), r.useBasePlugin = !0;
            var s = new o(e, n, null, null, null, r);
            return s.namespace = t, s.className = i, s.instanceMethods = a || [], s.addInstanceMethodsAliases(), s
          }, o.prototype.addInstanceMethodsAliases = function () {
            for (var e = 0; e < this.instanceMethods.length; e++) this.createInstanceMethodAlias(this.instanceMethods[e])
          }, o.prototype.createInstanceMethodAlias = function (i) {
            var n = this;
            e.utils.functions.createAlias("gigya." + this.namespace + "." + i, function (o) {
              if (!n.injectionInfo) return void e.log.addLog("invalid injection info", n, !1);
              var r = n.getPublicMethod(i),
                a = t.plugins.getPluginInstance(o, n.injectionInfo);
              if (a) {
                var s = [];
                e.utils.array.forEach(r.argNames, function (e) {
                  e && void 0 !== o[e] && s.push(o[e])
                }), a[r.instanceMethod].apply(a, s)
              } else e.log.addLog("couldn't find instance", n, !1)
            })
          }, o.prototype.getPublicMethod = function (e) {
            var t;
            if (this.injectionInfo.publicMethods && (t = this.injectionInfo.publicMethods[e]), !t) throw new Error("public method " + e + " is not configured for " + this.injectionInfo.name);
            return t
          }, o.prototype.preprocessRequest = function (e, t) {
            var i = this;
            n.prototype.preprocessRequest.call(this, e, function () {
              e.source || i.setSourceData(e), t && t()
            })
          }, o.prototype.run = function (t, i) {
            var n = this;
            !this.settings.waitForAPIQueue || t.ignoreApiQueue ? this.startUI(t, i) : e.utils.queue.queueForExecution("API", function () {
              n.startUI(t, i)
            })
          }, o.prototype.startUI = function (t, i) {
            var n = this;
            t = e.utils.object.clone(t), this.prepareParameters(t), this.preprocessRequest(t, function () {
              n.settings.useBasePlugin ? (e.logger.info("loading modern plugin"), n.loadPluginJS(t, function (o) {
                e.utils.queue.queueForExecution("UI", function () {
                  o && n.className && (n.pluginType = n.getPluginType(), n.injectionInfo = n.pluginType.injectionInfo(n));
                  var r = function () {
                    n.startPlugin(t, i)
                  };
                  0 == t.waitForDebug ? r() : e.utils.queue.queueForExecution("debug", r)
                })
              })) : (e.logger.info("loading legacy plugin"), n.legacyStartUI(t, i))
            })
          }, o.prototype.startPlugin = function (i, n) {
            var o = this;
            e.events.global.dispatch({
              eventName: "beforePluginRequest",
              methodName: this.methodName,
              params: i,
              explicitParams: n
            }, i);
            var r = i.originalMethodName || this.methodName;
            if (e.log.logCall(r, i), e.reports.reportLoad(r, i), this.pluginType) {
              if (i) {
                var a = t.plugins.getPluginInstance(i, this.injectionInfo);
                a && a.dispose && !i._allowMultipleInstances && !i.newModal && a.dispose()
              }
              var s = new this.pluginType(i, n, this.injectionInfo);
              if (t.plugins.setPluginInstance(i, this.injectionInfo, s),
                s.onDisposedEvent().add(function () {
                  return t.plugins.removePluginInstance(i, o.injectionInfo)
                }), e.logger.info("starting plugin " + this.injectionInfo.name + " with params", s.params), s.start(), s.containerID) {
                var c = document.getElementById(s.containerID);
                c && (c.gigyaPluginInstance = s)
              }
              i.getInstance && i.getInstance(s)
            } else e.utils.functions.callFunction("gigya." + this.jsName + "." + this.methodName, [i, i, i])
          }, o.prototype.loadPluginJS = function (i, n) {
            if (this.wasPluginJSLoaded(i)) e.logger.info("plugin was already loaded"), n && n(!1);
            else {
              var o, r = !1,
                a = e._.getCdnResource("/js/"),
                s = "gigya.services." + this.jsName,
                c = a + s + ".min.js" + (i.lang ? "?lang=" + i.lang : ""),
                l = a + "gigya.services.plugins.base.min.js?services=" + s + (i.lang ? "&lang=" + i.lang : "");
              t.__pluginsCoreLoaded ? o = c : (e.logger.debug("locking queue to fetch basePlugin"), o = l, t.__pluginsCoreLoaded = !0, r = !0, e.utils.queue.hold("pluginsJS", "UI")), e.logger.info("loading " + s), e.utils.script.load(o, null, function () {
                r && e.utils.queue.release("pluginsJS", "UI"), n && n(!0)
              }, !0, void 0, [c, l])
            }
          }, o.prototype.wasPluginJSLoaded = function (t) {
            var i = ("gigya." + this.jsName + "." + this.methodName, "gigya.services." + this.jsName + ".js");
            try {
              var n = this.getPluginType(),
                o = e.i18n[i][t.lang]
            } catch (e) {
              return !1
            }
            return "undefined" != typeof n && "undefined" != typeof o
          }, o.prototype.getPluginType = function () {
            for (var t = e.utils.object.expressionHelper(e), i = ["_.plugins." + this.className, this.jsName + "." + this.methodName], n = 0, o = i; n < o.length; n++) {
              var r = o[n],
                a = t.getField(r);
              if (a) return a
            }
          }, o.prototype.setSourceData = function (e) {
            if ("socialize.showSimpleShareUI" == this.methodName ? e.source = "socialize.showShareUI" : e.source = e.originalMethodName || this.methodName, !e.sourceData && i[this.methodName]) {
              for (var t, n = {}, o = 0; o < i[this.methodName].length; o++) {
                var r = i[this.methodName][o];
                null != e[r] && (t = !0, n[r] = e[r])
              }
              t && (e.sourceData = n)
            }
            e.pluginsStack || (e.pluginsStack = []), e.pluginsStack.push({
              source: this.methodName
            }), e.lastSource = this.methodName
          }, o.prototype.validateRequiredParams = function (t) {
            for (var i = this.settings.requiredParams.split("|"), n = 0; n < i.length; n++) {
              var o = i[n];
              if ("" != o && (null == t[o] || "" == t[o])) return e.events.dispatchInvalidParamError(t, o), !1
            }
            return !0
          }, o.prototype.setDefaultParams = function (e) {
            var t = !e.containerID || e.isPopup;
            for (var i in this.settings.defaultParams) null == e[i] && (t && this.settings.defaultPopupParams[i] ? e[i] = this.settings.defaultPopupParams[i] : e[i] = this.settings.defaultParams[i]);
            if (t)
              for (var i in this.settings.defaultPopupParams) e[i] || (e[i] = this.settings.defaultParams[i])
          }, o.prototype.prepareParameters = function (t) {
            for (var i in t) i.toLowerCase().indexOf("provider") != -1 && "string" == typeof t[i] && (t[i] = e._.providers.replaceProviderAliases(t[i]));
            t.lang || (t.lang = e.thisScript.lang.langCode), t.source ? t.isPopup = !1 : this.setSourceData(t)
          }, o.prototype.legacyStartUI = function (t, i) {
            var n = this,
              o = t.containerID;
            if (this.settings.ignoreContainerId) t.containerID = "", o = "";
            else if (null == t.containerID && !this.settings.allowPopup || t.containerID && !document.getElementById(t.containerID)) return void e.events.dispatchInvalidParamError(t, "containerID");
            var r = this.settings.allowPopup && (!o || t.isPopup);
            r && this.settings.useNewModal && (t.useNewModal = !0), this.setDefaultParams(t), this.settings.allowPopup || r || e.utils.DOM.clearByID(o), this.validateRequiredParams(t) && this.loadPluginJS(t, function () {
              var o = function () {
                n.prepareContainer(t, r, function () {
                  n.startPlugin(t, i)
                })
              };
              e.utils.queue.queueForExecution("UI", function () {
                0 == t.waitForDebug ? o() : e.utils.queue.queueForExecution("debug", o)
              })
            })
          }, o.prototype.prepareContainer = function (t, i, n) {
            var o = this;
            if (document.body) {
              var r, a = t.containerID;
              if (i && (a = e.utils.DOM.getCenteredDivID(this.methodName), t.newModal && (a += (new Date).getTime()), t.containerID = a, t.isPopup = !0, document.getElementById(a) || (r = e.utils.DOM.createTopLevelDiv(a), r.style.position = "absolute")), r = r || document.getElementById(a), !r) return e.events.dispatchInvalidParamError(t, "containerID"), void n();
              var s = r.Reqs ? r.Reqs : r.Reqs = [],
                c = s.length + "@0@" + a;
              t.rid = c;
              s[s.length] = {
                rid: c,
                container: r,
                method: this.methodName,
                context: t.context,
                c: t,
                p: t,
                i: t,
                operation: this.methodName,
                isHTML: !0
              };
              if (r && r.style) {
                r.style.display = "", r.style.visibility = "";
                var l = document.getElementById("gigya_ifr_" + a);
                l && (l.style.display = "", l.style.visibility = "");
                var u = function () {
                  null != l && (e.utils.DOM.setSize(l, t.width, t.height, i), l.style.visibility = "visible"), e.utils.DOM.setSize(r, t.width, t.height, i)
                };
                u()
              }
              var g = this.methodName.split(".").pop();
              r.setAttribute && r.setAttribute("gigid", (t.source && t.source != g ? t.source + "_" : "") + g), n()
            } else window.setTimeout(function () {
              o.prepareContainer(t, i, n)
            }, 200)
          }, o
        }(t.BaseApi);
      t.UiApi = n
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {})),
  function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e, t) {
          return e.instanceID ? e.instanceID : e.isPopup ? "gigya-modal-plugin-container-" + t.methodName : e.containerID ? e.containerID : t.name
        }

        function i(i, n) {
          var o = t(i, n);
          return e.instances[o]
        }

        function n(i, n, o, r) {
          void 0 === r && (r = !1);
          var a = t(i, n);
          if (!r)
            for (var s = a, c = 2; e.instances[a]; c++) a = s + c.toString();
          i.instanceID = a, e.instances[a] = o
        }

        function o(i, n) {
          delete e.instances[t(i, n)], delete i.instanceID
        }
        e.instances = {}, e.getPluginInstance = i, e.setPluginInstance = n, e.removePluginInstance = o
      }(t = e.plugins || (e.plugins = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {})),
  function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(t) {
          e.utils.queue.queueForExecution("UI", t)
        }

        function n(t, i, n, o) {
          i || (i = "socialize"), e[i] || (e[i] = {}), e[i].plugins || (e[i].plugins = {}), e[i].plugins[n] || (e[i].plugins[n] = {
            instances: []
          });
          var r = e[i].plugins[n];
          if (r[o] || (r[o] = function (e) {
              var o = "gigya." + i + ".plugins." + n + ".instances[" + r.instances.length + "]",
                a = new t(e, o);
              r.instances.push(a)
            }), t.StaticApi)
            for (var a in t.StaticApi) {
              var s = t.StaticApi[a],
                c = t[s];
              e.utils.functions.createAlias("gigya." + i + ".plugins." + n + "." + a, c)
            }
        }
        t.registerPlugin = i, t.attachPlugin = n
      }(i = t.UI || (t.UI = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (gigya) {
    var _;
    ! function (_) {
      var api;
      ! function (api) {
        var VersionSelector = function () {
          function VersionSelector(e, t, i) {
            if (this.methodName = e, this._versions = t, !this._versions || this._versions.length < 1) throw new Error(this.methodName + ": required at least one valid version");
            if (i) {
              if (this._defaultVersionIndex = this.findVersionIndexOrDefault(i), this._defaultVersionIndex == -1) throw new Error(this.methodName + ": default version is not defined as a version")
            } else this._defaultVersionIndex = 0
          }
          return VersionSelector.prototype.callVersion = function (e, t, i) {
            void 0 === t && (t = {}), void 0 === i && (i = [t]);
            var n = this.findVersionIndexOrDefault(e);
            if (n == -1) throw Error("gigya plugin version doesn't exist");
            var o = this.findSupportedVersion(n);
            if (!o) throw new Error(e + ": could not find supported version for this browser");
            this.invokeVersionMethod(o, t, i)
          }, VersionSelector.prototype.findSupportedVersion = function (e) {
            for (var t = this._versions.length, i = 0; i < t; ++i) {
              var n = this._versions[(e - i + t) % t];
              if (!n.isSupported || n.isSupported({
                  directCall: 0 == i
                })) return n
            }
          }, VersionSelector.prototype.findVersionIndexOrDefault = function (e) {
            var t = -1;
            return e && (t = gigya.utils.array.firstIndex(this._versions, function (t) {
              return t.versionName == e
            })), t == -1 && (t = void 0 !== this._defaultVersionIndex ? this._defaultVersionIndex : -1), t
          }, VersionSelector.prototype.invokeVersionMethod = function (version, params, args) {
            void 0 === params && (params = {}), void 0 === args && (args = [params]);
            var versionMethod;
            switch (typeof version.method) {
              case "function":
                versionMethod = version.method;
                break;
              case "string":
                versionMethod = eval(version.method), params.selectedMethodName = version.method;
                break;
              default:
                throw Error(this.methodName + " " + version.versionName + ": unsupported gigya-version method")
            }
            for (var field in version.additionalParams) params[field] = version.additionalParams[field];
            params.originalMethodName = this.methodName, versionMethod.apply(this, args)
          }, VersionSelector
        }();
        api.VersionSelector = VersionSelector
      }(api = _.api || (_.api = {}))
    }(_ = gigya._ || (gigya._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      t.defaultApiSchema = "ctag|APIKey|cid|oauth_token|source|sourceData|usePost|refUID|fb_UID|fb_at|fb_exp|environment|noAuth", t.defaultOauthSchema = "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys", t.postBookmarkSchema = "provider|URL|url|title|description|target|cid|APIKey|shortURLs|source|sourceData|providerKey|thumbnailURL|tags|userAction|[providerCapability=actions]UserAction|actionAttributes|facebookDialogType", t.loginMethods = {
        "socialize.login": 1,
        "socialize.addConnection": 1,
        "socialize.notifyLogin": 1,
        "socialize.linkAccounts": 1,
        "accounts.login": 1,
        "accounts.socialLogin": 1,
        "accounts.linkAccounts": 1,
        "accounts.register": 1,
        "accounts.finalizeRegistration": 1
      };
      var i = function (e) {
          return "link" !== e.loginMode && "reAuth" !== e.loginMode
        },
        n = function (e, t) {
          t()
        },
        o = function (e, t) {
          e.noAuth = !0, t()
        };
      t.logoutBehaviour = {
        logoutBeforeServerResponse: !0,
        alwaysSendLogoutToServer: !1
      }, t.logoutMethods = {
        "socialize.logout": 1,
        "accounts.logout": 1,
        "socialize.deleteAccount": 1,
        "socialize.unlinkAccounts": 1
      };
      var r = function (t, i) {
          e.partnerSettings.ssoKey && (t.signIDs = !0), i()
        },
        a = function () {
          return !t.logoutBehaviour.alwaysSendLogoutToServer
        };
      t.arApiList = [new t.ServerApi("socialize.login", t.defaultOauthSchema, (!1), {
        oauth: !0
      }, {
        preprocessor: n,
        clearSessionCondition: i,
        forceHttps: !0
      }), new t.ServerApi("socialize.addConnection", t.defaultOauthSchema, (!1), {
        oauth: !0
      }, {
        forceHttps: !0
      }), new t.ServerApi("socialize.requestPermissions", t.defaultOauthSchema, (!0), {
        oauth: !0,
        defaultParams: {
          forcePermissions: !0
        }
      }), new t.ServerApi("accounts.socialLogin", t.defaultOauthSchema, (!1), {
        oauth: !0
      }, {
        preprocessor: n,
        clearSessionCondition: i,
        forceHttps: !0
      }), new t.UiApi("showDebugUI", "socialize.plugins.debug", {}, {}, "", {
        allowPopup: !0
      }), t.UiApi.createApi("showMyPhotoUI", "accounts", "profilePhoto.MyPhotoPlugin", "accounts.plugins.profilePhoto"), t.UiApi.createApi("showRatingUI", "comments", "rating.RatingPlugin", "comments.plugins.rating"), t.UiApi.createApi("runJsUnitTests", "_", "JsUtRunner.Jasmine.JasmineUtRunnerPlugin", "_.plugins.jsUtRunner"), t.UiApi.createApi("loadBasePlugin", "_", "Mock.MockPlugin", "_.plugins.mock"), new t.UiApi("showCommentsUI", "comments.plugins.comments", {
        width: 500
      }, {}, "", {
        apiName: "comments.showCommentsUI1"
      }), new t.UiApi("showCommentsUI", "comments.plugins.comments2", {
        width: 500
      }, {}, "", {
        apiName: "comments.showCommentsUI2"
      }), t.UiApi.versionSelector("showCommentsUI", "comments", "2", [{
        versionName: "1",
        method: e.comments.showCommentsUI1,
        additionalParams: {
          ctag: "comments_v1"
        }
      }, {
        versionName: "2",
        method: e.comments.showCommentsUI2,
        additionalParams: {
          ctag: "comments_v2"
        },
        isSupported: function () {
          return e.utils.browser.isModern()
        }
      }]), new t.UiApi("showShareUI", "socialize.plugins.share", {
        width: 520,
        height: 320
      }, {
        width: 595,
        height: 324
      }, "userAction", {
        allowPopup: !0,
        preprocessor: function (i, n) {
          var o = i.operationMode;
          o && (o = o.toLowerCase().replace(/ /g, "")), i.containerID || (delete i.width, delete i.height), t.apiAdapter.isSessionValid(i, function (t) {
            "simpleshare" == o || "autodetect" == o && !t ? e.socialize.showSimpleShareUI(i) : n()
          })
        }
      }), t.UiApi.createApi("showMessageUI", "_", "messages.MessagesPlugin", "_.plugins.messages"), new t.UiApi("showLoginUI_v1", "socialize.plugins.login", {
        width: 120,
        height: 110
      }, {
        width: 280,
        height: 220
      }, "", {
        allowPopup: !0
      }), t.UiApi.createApi("showLoginUI_v2", "socialize", "login_v2.LoginPlugin", "socialize.plugins.login_v2"), t.UiApi.versionSelector("showLoginUI", "socialize", "1", [{
        versionName: "1",
        method: e.socialize.showLoginUI_v1
      }, {
        versionName: "2",
        method: e.socialize.showLoginUI_v2
      }]), new t.UiApi("showAddConnectionsUI_v1", "socialize.plugins.login", {
        width: 110,
        height: 65
      }, {
        width: 250,
        height: 200
      }, "", {
        allowPopup: !0
      }), t.UiApi.createApi("showAddConnectionsUI_v2", "socialize", "login_v2.LoginPlugin", "socialize.plugins.login_v2"), t.UiApi.versionSelector("showAddConnectionsUI", "socialize", "1", [{
        versionName: "1",
        method: e.socialize.showAddConnectionsUI_v1
      }, {
        versionName: "2",
        method: e.socialize.showAddConnectionsUI_v2
      }]), t.UiApi.createApi("showEditConnectionsUI", "socialize", "editConnections.EditConnectionPlugin", "socialize.plugins.edit"), new t.UiApi("showShareBarUI", "socialize.plugins.reactions", {
        shareCountCacheTimeout: 30
      }, {}, "userAction|shareButtons"), new t.UiApi("showReactionsBarUI", "socialize.plugins.reactions", {}, {}, "userAction|barID|reactions", {
        preprocessor: function (e, t) {
          e.barID || (e.barID = e.itemID), t()
        }
      }), new t.UiApi("showMiniShareUI", "socialize.plugins.minishare", {
        width: 320,
        height: 153
      }, {}, "", {
        allowPopup: !0
      }), new t.UiApi("showBookmarkUI", "socialize.plugins.bookmark", {
        width: 310,
        height: 250
      }, {
        width: 310,
        height: 310
      }), new t.UiApi("showSimpleShareUI", "socialize.plugins.simpleShare", {
        width: 280,
        height: 175
      }, {}, "userAction", {
        allowPopup: !0,
        dontLoadPluginsCore: !0,
        waitForAPIQueue: !0
      }), new t.UiApi("showShareMobileUI", "socialize.plugins.shareMobile", {}, {}, "userAction", {
        allowPopup: !0
      }), new t.UiApi("showUserStatusUI", "gm.plugins.userStatus", {
        width: 300,
        hidePoints: !1,
        hideActions: !1
      }, {}, "", {
        requireSession: !0
      }), new t.UiApi("showAchievementsUI", "gm.plugins.achievements", {
        width: 300,
        height: 100,
        excludeChallenges: "_default"
      }), new t.UiApi("showChallengeStatusUI", "gm.plugins.achievements", {
        width: 300,
        height: 100,
        challenge: "_default"
      }), new t.UiApi("showLeaderboardUI", "gm.plugins.leaderboard", {
        width: 300
      }, {}, "", {
        preprocessor: function (e, t) {
          e && e.height && (e.height = null), t()
        }
      }), new t.UiApi("showNotifications", "gm.plugins.notifications", {}, {}, "", {
        preprocessor: function (t, i) {
          var n = e.utils.localStorage.getObject("gmSettings");
          if (!n || !n.disableNotifications) {
            if (t.containerID = "gigNotifications", !document.getElementById(t.containerID)) {
              var o = document.createElement("div");
              o.id = t.containerID, o.style.position = "absolute", o.style.left = "-1000px", o.setAttribute("role", "alert"), o.setAttribute("aria-live", "polite"), o.setAttribute("aria-atomic", "true"), e.utils.DOM.appendToBody(o)
            }
            i()
          }
        }
      }), new t.UiApi("showTfaUI", "accounts.plugins.tfa", {
        width: 325
      }), t.UiApi.createApi("showScreenSet", "accounts", "ScreenSet.ScreenSetPlugin", "accounts.plugins.screenSet", void 0, ["hideScreenSet", "switchScreen"]), new t.ServerApi("socialize.getAvailableProviders", "enabledProviders|disabledProviders|requiredCapabilities"), new t.ServerApi("socialize.notifyLogin", "siteUID|UIDTimestamp|UIDSig|UIDNonce|provider|authToken|tokenSecret|regSource|tokenExpiration|sessionHandle|sessionHandleExpiration|userInfo|providerSessions|sessionExpiration|authCode|includeAllIdentitiesincludeiRank|group|settings|extraFields|signIDs|newUser|actionAttributes|profileAttributes|bp_channel_url|signKeys", (!1), (void 0), {
        forceHttps: !0,
        clearSession: !0
      }), new t.ServerApi("socialize.shortenURL", "URL"), new t.ServerApi("socialize.convertAction", "userAction|[providerCapability=actions]UserAction|provider"), new t.ServerApi("socialize.getReactionsCount", "barID|buttonIDs|reportLoad"), new t.ServerApi("socialize.incrementReactionsCount", "barID|buttonID|count|actionAttributes|profileAttributes"), new t.ServerApi("socialize.deleteAccount", (void 0), (!0)), new t.ServerApi("socialize.delUserSettings", "group|settings", (!0)), new t.ServerApi("socialize.getContacts", "enabledProviders|disabledProviders", (!0)), new t.ServerApi("socialize.getFriendsInfo", "enabledProviders|disabledProviders|detailLevel|UIDs|siteUsersOnly|requiredCapabilities|signIDs", (!0)), new t.ServerApi("socialize.getRawData", "provider|UID|fields|dataFormat|path", (!0)), new t.ServerApi("socialize.getSessionInfo", "provider|paddingMode|encrypt|signIDs|encryptAll", (!0)), new t.ServerApi("socialize.getUserInfo", "enabledProviders|disabledProviders|signIDs|includeiRank|includeAllIdentities|extraFields|group|settings|includeOpenidUID", (!0)), new t.ServerApi("socialize.getUserSettings", "group|settings|regToken", (!0), (void 0), {
        forceHttps: !0
      }, "regToken"), new t.ServerApi("socialize.checkin", "enabledProviders|disabledProviders|placeID|comment|latitude|longitude|actionAttributes|profileAttributes", (!0)), new t.ServerApi("socialize.logout", "signIDs|samlContext|sustainLogoutURLs", (!0), {
        preprocessor: r,
        disableCache: !0
      }, {
        requiresSession: a
      }), new t.ServerApi("socialize.notifyRegistration", "siteUID|UIDTimestamp|UIDSig", (!0)), new t.ServerApi("socialize.publishUserAction", "userAction|[providerCapability=actions]UserAction|enabledProviders|disabledProviders|target|shortURLs|userLocation|tags|actionAttributes|profileAttributes", (!0)), new t.ServerApi("socialize.removeConnection", "provider|lastIdentityHandling|removeLoginID", (!0)), new t.ServerApi("socialize.setStatus", "shortURLs|status|[providerCapability=status]Status|enabledProviders|disabledProviders|userLocation|actionAttributes|profileAttributes", (!0)), new t.ServerApi("socialize.setUID", "siteUID|UIDTimestamp|UIDSig", (!0)), new t.ServerApi("socialize.setUserSettings", "group|settings|regToken", (!0), (void 0), {
        forceHttps: !0
      }, "regToken"), new t.ServerApi("socialize.unlinkAccounts", (void 0), (!0)), new t.ServerApi("socialize.sendEmail", "dontSendEmail|companyName|lang|emails|emailSubject|emailBody|linkBack|senderEmail|senderName|userMsg|shortURLs|userAction|[providerCapability=actions]UserAction|actionAttributes|profileAttributes|captchaTicket|lang", (!1), (void 0), {
        forceHttps: !0
      }), new t.ServerApi("socialize.facebookGraphOperation", "graphPath|graphParams|authRequired|method|authType"), new t.ServerApi("socialize.getTopShares", "age|tag|limit"), new t.ServerApi("socialize.notifySSOLogin", "bp_channel_url"), new t.ServerApi("gm.getChallengeStatus", "UID|includeChallenges|excludeChallenges|details|lang|actionAttributes|profileAttributes"), new t.ServerApi("gm.resetLevelStatus", "challenges|actionAttributes|profileAttributes", (!0)), new t.ServerApi("gm.getTopUsers", "challenge|totalCount|friendsCount|includeSelf|period|lang|actionAttributes|profileAttributes"), new t.ServerApi("gm.getChallengeConfig", "UID|includeChallenges|excludeChallenges|lang|actionAttributes|profileAttributes|expandActions"), new t.ServerApi("gm.notifyAction", "action|operation|challengeIDs|actionAttributes|profileAttributes", (!0)), new t.ServerApi("comments.updateComment", "categoryID|streamID|commentID|commentText|commentTitle|ratings|mediaItems|taggedUsers"), new t.ServerApi("comments.postComment", "categoryID|streamID|parentID|guestName|guestEmail|commentText|anonymous|mediaItems|privacy|feedID|userAction|[providerCapability=actions]UserAction|scope|enabledProviders|disabledProviders|shortURLs|commentTitle|ratings|tags|taggedUsers|streamTags|actionAttributes|profileAttributes"), new t.ServerApi("comments.getComments", "categoryID|streamID|includeSettings|start|startTS|threadLimit|sort|threaded|threadDepth|includeStreamInfo|includeOpenidUID|includeUID|includeReplies|tags|dataFormat|markupType|includeUserOptions|includeUserComments|includeRatingsDims|includeUserHighlighting|pinnedCommentID|lang"), new t.ServerApi("comments.setStreamInfo", "categoryID|streamID|streamTitle|streamURL|streamInfoSig|streamTags"), new t.ServerApi("comments.getTopStreams", "categoryID|limit|maxStreamAge|includeLastComment|streamTag|minRatingsCount"), new t.ServerApi("comments.getTopRatedStreams", "categoryID|limit|maxStreamAge|ratingClass|minRatingsCount|streamTag"), new t.ServerApi("comments.getStreamInfo", "categoryID|streamID|streamIDs|includeLastComment|includeRatingsDims|includeRatingDetails"), new t.ServerApi("comments.flagComment", "categoryID|streamID|commentID|actionAttributes|profileAttributes"), new t.ServerApi("comments.vote", "categoryID|streamID|commentID|vote|actionAttributes|profileAttributes", (!0)), new t.ServerApi("comments.getUserVotes", "categoryID|streamID", (!0)), new t.ServerApi("comments.getUserComments", "categoryID|streamID|tag|senderUID|start|limit|sort|includeReplies|includeStreamInfo|includeUserHighlighting", (!0)), new t.ServerApi("comments.getFriendsComments", "categoryID|streamID|start|limit|includeUID|sort|includeReplies|includeStreamInfo", (!0)), new t.ServerApi("comments.getThread", "categoryID|streamID|commentID|start|includeUID|limit|threadDepth|sort"), new t.ServerApi("comments.deleteComment", "categoryID|streamID|commentID", (!0)), new t.ServerApi("comments.getRelatedUsers", "categoryID|streamID|parentCommentID|usernamePrefix|limit"), new t.ServerApi("comments.analyzeMediaItem", "categoryID|urls"), new t.ServerApi("comments.subscribe", "categoryID|streamID|email|lang"), new t.ServerApi("comments.unsubscribe", "categoryID|streamID|unsubscribeToken"), new t.ServerApi("comments.setUserOptions", "replyNotifications|notificationsEmail|notificationsLanguage", (!0)), new t.ServerApi("comments.getUserOptions", "ServerApiKey", (!0)), new t.ServerApi("gcs.getUserData", "type|fields", (!0)), new t.ServerApi("gcs.setUserData", "data|type|updateBehavior", (!0)), new t.ServerApi("gcs.search", "expTime|querySig|query"), new t.ServerApi("gcs.getSchema", "schemaType"), new t.ServerApi("accounts.login", "loginID|password|sessionExpiration|targetEnv|regToken|include|actionAttributes|profileAttributes|includeUserInfo|includeDynamicSchema|bp_channel_url|captchaToken|captchaText|loginMode|signKeys|lang", (!1), (void 0), {
        preprocessor: n,
        clearSessionCondition: i,
        forceHttps: !0,
        forcePost: !0
      }), new t.ServerApi("accounts.linkAccounts", "loginID|password|sessionExpiration|targetEnv|include|regToken|includeUserInfo|bp_channel_url|signKeys", (!1), (void 0), {
        forceHttps: !0,
        forcePost: !0
      }), new t.ServerApi("accounts.initRegistration", "sdk|isLite", (!1), (void 0), {
        clearSession: !0
      }), new t.ServerApi("accounts.register", "username|email|password|UID|regToken|siteUID|secretQuestion|secretAnswer|regSource|profile|preferences|displayedPreferences|data|captchaText|captchaToken|lang|hashedPassword|pwHashAlgorithm|skipVerification|finalizeRegistration|targetEnv|sessionExpiration|include|actionAttributes|profileAttributes|includeUserInfo|bp_channel_url|signKeys|subscriptions", (!1), (void 0), {
        forceHttps: !0,
        forcePost: !0
      }), new t.ServerApi("accounts.finalizeRegistration", "regToken|targetEnv|include|includeUserInfo|bp_channel_url|allowAccountsLinking|signKeys|subscriptions"), new t.ServerApi("accounts.captchaImage", "regToken"), new t.ServerApi("accounts.importProfilePhoto", "regToken|URL|publish"), new t.ServerApi("accounts.setProfilePhoto", "regToken|publish|photoBytes"), new t.ServerApi("accounts.resetPassword", "lang|loginID|passwordResetToken|secretAnswer|securityFields|newPassword|email", (!1), (void 0), {
        forceHttps: !0,
        forcePost: !0
      }), new t.ServerApi("accounts.isAvailableLoginID", "loginID"), new t.ServerApi("accounts.resendVerificationCode", "regToken|email"), new t.ServerApi("accounts.getCaptcha", ""), new t.ServerApi("accounts.getPolicies", "sections"), new t.ServerApi("accounts.getSchema", "sections|schemaType", (!1), {
        preprocessor: o
      }), new t.ServerApi("accounts.verifyLogin", "include|extraProfileFields|targetEnv", (!0)), new t.ServerApi("accounts.getAccountInfo", "include|extraProfileFields|regToken", (!0), {}, {}, "regToken"), new t.ServerApi("accounts.setAccountInfo", "profile|preferences|displayedPreferences|data|regToken|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|conflictHandling|tfaStatus|rba|subscriptions|preferences|lang", (!0), (void 0), {
        forceHttps: !0,
        forcePost: !0
      }, "regToken"), new t.ServerApi("accounts.logout", "signIDs|samlContext|sustainLogoutURLs", (!0), {
        preprocessor: r,
        disableCache: !0
      }, {
        requiresSession: a
      }), new t.ServerApi("accounts.search", "expTime|querySig|query"), new t.ServerApi("accounts.getScreenSets", "screenSetIDs|include|lang|screenSetVersion", (!1), {
        preprocessor: o
      }, {
        forceHttps: !0
      }), new t.ServerApi("accounts.getConflictingAccount", "regToken|loginID"), new t.ServerApi("accounts.incrementCounters", "counters", (!0), {
        preprocessor: function (e, t) {
          var i = e.actionCounterPath,
            n = e.counters;
          if (i && n)
            for (var o = 0; o < n.length; o++) {
              var r = n[o];
              "object" != typeof r || r.path || (r.path = i)
            }
          t()
        }
      }), new t.ServerApi("accounts.getCounters", "counters", (!0)), new t.ServerApi("accounts.getJWT", "fields|expiration", (!0)), new t.ServerApi("accounts.tfa.getProviders", "regToken", (!0), {}, {}, "regToken"), new t.ServerApi("accounts.tfa.initTFA", "provider|mode|regToken", (!1), {}, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.finalizeTFA", "gigyaAssertion|providerAssertion|tempDevice|regToken", (!0), {}, {}, "regToken"), new t.ServerApi("accounts.tfa.deactivateProvider", "provider", (!0)), new t.ServerApi("accounts.tfa.unregisterDevice", "allDevices", (!0)), new t.ServerApi("accounts.tfa.phone.getRegisteredPhoneNumbers", "gigyaAssertion", (!1), {
        preprocessor: o
      }, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.phone.removePhone", "gigyaAssertion|phoneId", (!1), {}, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.phone.sendVerificationCode", "gigyaAssertion|lang|phoneID|phone|method|regToken", (!1), {}, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.phone.completeVerification", "gigyaAssertion|phvToken|code|regToken", (!1), {}, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.email.getEmails", "gigyaAssertion", (!1), {
        preprocessor: o
      }, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.email.sendVerificationCode", "emailID|gigyaAssertion|lang|regToken", (!1), {}, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.email.completeVerification", "gigyaAssertion|phvToken|code|regToken", (!1), {}, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.totp.register", "gigyaAssertion", (!1), {}, {
        forceHttps: !0
      }), new t.ServerApi("accounts.tfa.totp.verify", "gigyaAssertion|sctToken|code|regToken", (!1), {}, {
        forceHttps: !0
      }), new t.ServerApi("ds.store", "type|data|oid|updateBehavior"), new t.ServerApi("ds.get", "type|data|oid|fields"), new t.ServerApi("ds.search", "expTime|querySig|query"), new t.ServerApi("ds.getSchema", ""), new t.ServerApi("ds.delete", "type|oid|fields"), new t.ServerApi("ids.getAccountInfo", "include|extraProfileFields", (!0)), new t.ServerApi("ids.setAccountInfo", "profile|preferences|data|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|lang", (!1), (void 0), {
        forceHttps: !0,
        forcePost: !0
      }), new t.ServerApi("ids.search", "expTime|querySig|query"), new t.ServerApi("gscounters.sendReport", "reports", (!1), (void 0), {
        forceGigyaDomain: !0
      })], e.utils.functions.createAlias("gigya.socialize.showCommentsUI", e.comments.showCommentsUI), e.utils.functions.createAlias("gigya.socialize.showRatingUI", e.comments.showRatingUI), e.utils.functions.createAlias("gigya.services.socialize", e.socialize), e.utils.functions.createAlias("gigya.services.gcs", e.gcs), e.utils.functions.createAlias("gigya.services.gm", e.gm), e.utils.functions.createAlias("gigya.services.comments", e.comments), e.utils.functions.createAlias("gigya.services.accounts", e.accounts), e.utils.functions.createAlias("gigya.socialize.connect", e.socialize.addConnection), e.utils.functions.createAlias("gigya.socialize.disconnect", e.socialize.removeConnection), e.utils.functions.createAlias("gigya.socialize.linkAccounts", e.socialize.setUID), e.utils.functions.createAlias("gigya.socialize.showConnectUI", e.socialize.showAddConnectionsUI), e.utils.functions.createAlias("gigya.showDebugUI", e.socialize.showDebugUI)
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      e.socialize.addEventHandlers = function () {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
        var n = e.utils.object.merge([e.thisScript.globalConf, t]),
          o = n.namespace ? n.namespace : "socialize";
        for (var r in n) 0 == r.indexOf("on") && e.events.global.add(r, n[r], n.listenerType, n.context, o, n);
        "function" == typeof n.callback && n.callback({
          status: "OK",
          statusMessage: "",
          errorCode: 0,
          errorMessage: "",
          operation: "addEventHandlers",
          context: n.context
        })
      }, e.accounts.addEventHandlers = function () {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
        var n = e.utils.object.merge([t, {
          namespace: "accounts"
        }]);
        e.socialize.addEventHandlers(n)
      }, e.socialize.isLoggedIn = function () {
        var t = e.utils.object.merge([e.thisScript.globalConf, arguments]);
        e.socialize.getUserInfo(t, {
          callback: function (i) {
            var n = i.user,
              o = {
                loggedIn: !!n && e.utils.validation.isExplicitTrue(n.isLoggedIn)
              };
            e.utils.object.extractProperties(i, o, "status|statusMessage|callId|errorCode|errorMessage|errorDetails|context"), t.callback && t.callback(o)
          }
        })
      }, e.socialize.waitForService = function () {
        var t = e.utils.object.merge([e.thisScript.globalConf, arguments]),
          i = t.service;
        if (i) {
          i = i.toLowerCase();
          var n = t.callback;
          "fbconnect" != i && "facebook" != i || (e.external.facebook.isLoaded() ? n({
            context: t.context
          }) : e.socialize.addEventHandlers({
            listenerType: "component"
          }, {
            onFacebookLoaded: n,
            context: t.context
          })), "googleplus" == i && (e.external.googlePlus.isLoaded() ? n({
            context: t.context
          }) : e.socialize.addEventHandlers({
            listenerType: "component"
          }, {
            onGooglePlusLoaded: n,
            context: t.context
          }))
        }
      }, t.bookmarkSize = {
        facebook: {
          w: 640,
          h: 370
        },
        twitter: {
          w: 880,
          h: 585
        },
        messenger: {
          w: 710,
          h: 905
        },
        linkedin: {
          w: 560,
          h: 500
        },
        yahoobookmarks: {
          w: 840,
          h: 975
        },
        digg: {
          w: 1010,
          h: 1045
        },
        googlebookmarks: {
          w: 710,
          h: 905
        },
        mixi: {
          w: 640,
          h: 470
        },
        googleplus: {
          w: 496,
          h: 420
        }
      }, e.socialize.postBookmark = function () {
        var i = e.utils.object.merge([e.thisScript.globalConf, arguments]);
        i.APIKey || (i.APIKey = e.thisScript.APIKey);
        var n = {};
        if (e.utils.object.extractProperties([i], n, t.postBookmarkSchema), !n.url && n.URL && (n.url = n.URL, delete n.URL), n.sdk = "js_" + e.build.version, !n.url && n.userAction && !n.userAction.linkBack)
          for (var o = document.getElementsByTagName("meta"), r = 0; r < o.length; r++)
            if ("og:url" === o[r].getAttribute("property") && o[r].getAttribute("content")) {
              n.url = o[r].getAttribute("content");
              break
            }
        n.url || !n.userAction || n.userAction.linkBack || (n.url = document.location.href), n.provider = n.provider ? (n.provider + "").toLowerCase() : "", "facebook" === n.provider && (n.providerKey = e.external.opengraph.getMetaTag("fb:app_id"));
        var a = e._.apiAdapter.getGmidTicket();
        a && (n.gmidTicket = a);
        var s = t.bookmarkSize[n.provider] || {},
          c = {
            width: i.popupWidth || s.w,
            height: i.popupHeight || s.h,
            top: i.popupPositionY,
            left: i.popupPositionX,
            menubar: 0,
            resizable: 1,
            scrollbars: 1
          };
        i.enablePopupLocation ? (c.location = 1, c.toolbar = 1) : c.toolbar = 0;
        var l = e._.apiAdapters.web ? e._.apiAdapters.web.tokenStore : void 0;
        l && (n.login_token = l.get());
        var u;
        if ("twitter" === n.provider && e.localInfo.isIOS) {
          var g = n.userAction || {},
            d = {
              url: g.linkBack || n.url,
              text: g.title || n.title
            },
            p = "https://twitter.com/intent/tweet?{0}";
          u = e.utils.stringUtils.format(p, e.utils.keyValue.serialize(d));
          var f = i.sourceData ? e.utils.object.clone(i.sourceData) : {};
          f.provider = n.provider, f.url = d.url, e.reports.report("share", i.APIKey, i.cid, i.source, f, {
            tags: i.tags
          })
        } else {
          var d = e.utils.keyValue.serialize(n),
            p = "https://" + e._.getApiDomain("socialize") + "/gs/bookmark.aspx?{0}";
          u = e.utils.stringUtils.format(p, d)
        }
        e.log.logCall("postBookmark", n), e.events.global.dispatch({
          eventName: "beforeRequest",
          methodName: "socialize.postBookmark",
          rawParams: i,
          params: n
        }), e.utils.win.open(u, "gs_bookmark_" + n.provider, c)
      }, e.socialize.refreshUI = function () {
        var i = e.utils.object.merge([e.thisScript.globalConf, arguments]),
          n = i.callback;
        e.socialize.getUserInfo(i, {
          callback: function (o) {
            var r = {
              eventName: "login",
              isInternal: !0
            };
            i.provider && (r.provider = i.provider), t.addUserInfoToEvent(o, r, !0), i.context && (r.context = i.context), e.events.global.dispatch(r), "function" == typeof n && n(o)
          }
        })
      };
      var i, n = {
        "digg.com": "digg",
        "stumbleupon.com": "stumbleupon",
        "technorati.com": "technorati",
        "t.co": "twitter",
        "plus.url.google.com": "googlePlus",
        "facebook.com": "facebook",
        "linkedin.com": "linkedIn",
        "pinterest.com": "pinterest",
        "mixi.jp": "mixi",
        "b.hatena.ne.jp": "hatena",
        "line.me": "line"
      };
      e.socialize.trackReferrals = function () {
        var o = e.utils.object.merge([e.thisScript.globalConf, arguments]),
          r = {
            eventName: "linkback",
            CID: o.cid
          },
          a = {},
          s = {};
        document.location.href.indexOf("#") != -1 && (s = e.utils.keyValue.deserialize(document.location.href.split("#")[1])), document.location.href.indexOf("?") != -1 && (a = e.utils.keyValue.deserialize(document.location.href.split("?")[1].split("#")[0])), e.socialize.updateRefUID(o.APIKey, s, a);
        var c = null != s._gus || null != a._gus;
        if (c && (r.CID = s._gucid || a._gucid, r.shortCode = s._gsc || a._gsc, r.provider = s._gup || a._gup), !i) {
          var l, u = {
            url: document.location.href,
            ref: document.referrer
          };
          if (a.fb_ref) {
            var g = e.utils.keyValue.deserialize(a.fb_ref, ":");
            u.uuid = g.uu, u.sn = g.p, l = g.s
          } else if (document.referrer && document.referrer.indexOf("://") != -1) {
            var d = document.referrer.split("://")[1].split("/")[0];
            0 == d.indexOf("www.") && (d = d.split("www.")[1]), n[d] && (r.provider = u.sn = n[d])
          }
          if (!u.sn && (!document.referrer || document.referrer.indexOf("http://soc.li") == -1 && document.referrer.indexOf("https://shr.gs") == -1)) {
            var p = document.location.href.split("#guid=");
            if (p.length > 1) {
              var f = p[1].split("#")[0].split("&")[0];
              f != t.apiAdapter.getTokenParam(o.APIKey, "UUID") && (u.sn = "AddressBarShares", u.uuid = f, "_" == f && delete u.uuid, document.location.replace("#"), e.reports.trackAddressBarShares(), u.url = document.location.href.split("#")[0])
            }
          }
          u.uuid && e.utils.cookie.set("_gigRefUid_" + o.APIKey, u.uuid), u.sn && !c && e.reports.report("linkback", o.APIKey, o.cid, l, null, u), (u.sn || c) && e.events.global.dispatch(e.utils.object.removeUndefined(r)), i = !0
        }
        "function" == typeof o.callback && o.callback({
          status: "OK",
          statusMessage: "",
          operation: "trackReferrals",
          context: o.context,
          errorMessage: "",
          errorCode: 0
        })
      }, e.socialize.updateRefUID = function (t, i, n) {
        t || (t = e.thisScript.globalConf.APIKey), i || (i = {}, document.location.href.indexOf("#") != -1 && (i = e.utils.keyValue.deserialize(document.location.href.split("#")[1]))), n || (n = {}, document.location.href.indexOf("?") != -1 && (n = e.utils.keyValue.deserialize(document.location.href.split("?")[1].split("#")[0]))), i.guid && "_" != i.guid && e.utils.cookie.set("_gigRefUid_" + t, i.guid);
        var o = i._giguuid || n._giguuid;
        o && e.utils.cookie.set("_gigRefUid_" + t, o)
      }, e.socialize.hideUI = function () {
        var t = e.utils.object.merge([e.thisScript.globalConf, arguments]);
        if ("function" == typeof t.callback) {
          var i = {
            status: "OK",
            statusMessage: "",
            operation: "hideUI",
            context: t.context,
            errorMessage: "",
            errorCode: 0
          };
          t.callback(i)
        }
      }, e.gcs.submitUserForm = function () {
        var t = {},
          i = e.utils.object.merge([e.thisScript.globalConf, arguments]),
          n = document.getElementById(i.form);
        if (!n) {
          var o = document.getElementsByName(i.form);
          o && o.length > 0 && (i.form = o[0])
        }
        for (var r = 0; r < n.elements.length; r++) {
          var a = n.elements[r];
          if (a.name) {
            for (var s = a.name.split("."), c = t, l = 0; l < s.length - 1; l++) {
              var u = s[l];
              c[u] || (c[u] = {}), c = c[u]
            }
            c[s[s.length - 1]] = a.value
          }
        }
        i.data = t, e.gcs.setUserData(i)
      }, e.socialize.getProviderShareCounts = function () {
        var t = e.utils.object.merge([e.thisScript.globalConf, arguments]);
        e.utils.script.load(e._.getCdnResource("/js/gigya.services.socialize.plugins.shareCounts.min.js"), null, function () {
          e.socialize.plugins.shareCounts.getProviderShareCounts(t)
        }, !0)
      }, e.utils.functions.createAlias("gigya.accounts.setSSOToken", e.setSSOToken)
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i() {
          var t = e.samlConfig && e.samlConfig.proxyPageURL;
          return t || e.logger.warn("missing proxy page url"), t
        }

        function n(t) {
          var n = i(),
            o = e.utils.URL.addParamsToURL(n, e.utils.object.merge([{
              mode: "initSSO"
            }, t]));
          e.thisScript.globalConf.enableSSOToken ? e.setSSOToken({
            redirectURL: o
          }) : window.location.href = o
        }

        function o() {
          var t = i(),
            n = e.utils.URL.getParamsFromURL(location.href),
            o = e.utils.URL.addParamsToURL(t, {
              mode: "afterLogin",
              samlContext: n.samlContext
            });
          window.location.href = o
        }
        t.initSSO = n, t.continueSSO = o
      }(i = t.saml || (t.saml = {}))
    }(t = e.fidm || (e.fidm = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        e.isSessionFromSso = !1
      }(t = e.apiAdapters || (e.apiAdapters = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i() {
          return null != t.initializedTime
        }

        function n(i) {
          if (!t.initializedTime) {
            t.initializedTime = null, window.setInterval(function () {
              e.external.facebook.refreshSession()
            }, 27e5), window.fbAsyncInit = function () {
              var n = e.utils.object.clone(e.thisScript.globalConf.facebookInitParams);
              n || (n = {}), e.providersConfig.facebook ? (n.appId = e.providersConfig.facebook.appID, n.version = e.providersConfig.facebook.version) : n.version = "v1.0", n.status = !1, n.cookie = !0, n.xfbml = !0, n.oauth = !0, FB.init(n), 1 != i ? FB.getLoginStatus(function (i) {
                t.initializedTime = new Date, t.isConnected = "connected" == i.status, t.isLoggedIn = "unknown" != i.status, e.events.global.dispatch({
                  eventName: "facebookLoaded",
                  isLoggedIn: t.isLoggedIn,
                  isConnected: t.isConnected
                }), e.socialize.addEventHandlers({
                  listenerType: "component"
                }, {
                  listenerDescription: "listener for updating Facebook Connect session",
                  onLogin: function () {
                    o()
                  },
                  onConnect: function () {
                    o()
                  },
                  onLogout: function () {
                    o()
                  }
                })
              }, !0) : (t.initializedTime = new Date, e.events.global.dispatch({
                eventName: "facebookLoaded",
                isLoggedIn: t.isLoggedIn,
                isConnected: t.isConnected
              }))
            };
            var n = document.createElement("div");
            n.id = "fb-root", e.utils.DOM.appendToBody(n), e.utils.script.load(e.localInfo.protocol + "://connect.facebook.net/" + e.thisScript.lang.full.replace("-", "_") + "/sdk.js", null, function () {
              "none" == document.documentElement.style.display && (document.documentElement.style.display = "")
            }, !0)
          }
        }

        function o() {
          if ("undefined" != typeof FB) {
            var i = function (i) {
              t.initializedTime = new Date, t.isConnected = "connected" == i.status, t.isLoggedIn = "unknown" != i.status, e.events.global.dispatch({
                eventName: "FBCRefreshed"
              })
            };
            e.providersConfig.facebook && e.providersConfig.facebook.appID && FB && FB.getLoginStatus && FB.getLoginStatus(i, !0)
          }
        }

        function r() {
          for (var e = l, t = 0; t < e.length; t++) e[t]();
          l = []
        }

        function a(e) {
          l.push(e)
        }

        function s() {
          var e = {};
          if ("undefined" != typeof FB && FB.getAuthResponse) try {
            var t = FB.getAuthResponse();
            t && (null != t.userID && (e.fb_UID = t.userID), null != t.accessToken && (e.fb_at = t.accessToken), null != t.expiresIn && (e.fb_exp = t.expiresIn))
          } catch (e) {}
          return e
        }

        function c() {
          e.socialize.waitForService({
            service: "facebook",
            callback: function () {
              e._.apiAdapter.isSessionValid(e.thisScript.globalConf, function (t) {
                var i = e.external.facebook.getParams();
                !t && i && i.fb_at && !e._.autoLoginInProgress && (e._.autoLoginInProgress = !0, e.socialize.notifyLogin({
                  providerSessions: {
                    facebook: {
                      authToken: i.fb_at,
                      tokenExpiresIn: i.fb_exp
                    }
                  }
                }))
              })
            }
          })
        }
        var l = [];
        t.isLoggedIn = !1, t.isConnected = !1, t.isLoaded = i, t.load = n, t.refreshSession = o, t.retryPending = r, t.runWhenLoaded = a, t.getParams = s, t.autoLogin = c, e.events.global.add("facebookLoaded", r, "component"), e.events.global.add("onFBCRefreshed", r, "component")
      }(i = t.facebook || (t.facebook = {}))
    }(t = e.external || (e.external = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i() {
          return null != t.initializedTime
        }

        function n() {
          var i = this;
          if (!t.initializedTime && e.providersConfig.googlePlus) {
            t.initializedTime = null;
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, window.__gigya_handleClientLoad = function () {
              return i.handleClientLoad()
            }, n.src = "https://apis.google.com/js/client.js?onload=__gigya_handleClientLoad";
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(n, o)
          }
        }

        function o() {
          try {
            delete window.__gigya_handleClientLoad
          } catch (e) {
            window.__gigya_handleClientLoad = void 0
          }
          t.initializedTime = new Date, e.events.global.dispatch({
            eventName: "googlePlusLoaded"
          })
        }

        function r() {
          "undefined" == typeof gapi
        }

        function a() {
          e.socialize.waitForService({
            service: "googlePlus",
            callback: function () {
              e._.apiAdapter.isSessionValid(e.thisScript.globalConf, function (t) {
                t || gapi.auth.authorize({
                  client_id: e.providersConfig.googlePlus.clientId,
                  scope: e.providersConfig.googlePlus.scopes,
                  immediate: !0,
                  response_type: "code"
                }, function (t) {
                  t && t.code && !e._.autoLoginInProgress && (e._.autoLoginInProgress = !0, e.socialize.notifyLogin({
                    providerSessions: {
                      googlePlus: {
                        code: t.code
                      }
                    }
                  }))
                })
              })
            }
          })
        }
        t.isLoaded = i, t.load = n, t.handleClientLoad = o, t.refreshSession = r, t.autoLogin = a
      }(i = t.googlePlus || (t.googlePlus = {}))
    }(t = e.external || (e.external = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (t) {
        function i(t, i) {
          t && (i || (i = 2e3), e.external.backplane.isLoaded() ? e.external.backplane.getChannelId() || e.external.backplane._ready ? (e.external.backplane._ready = !0, t()) : (window.setTimeout(function () {
            e.external.backplane._ready || (e.external.backplane._ready = !0, t())
          }, i), Backplane(function () {
            e.external.backplane._ready = !0, t()
          })) : t())
        }

        function n() {
          return "undefined" != typeof Backplane
        }

        function o() {
          if (e.external.backplane.isLoaded()) return Backplane.getChannelID()
        }

        function r() {
          e.external.backplane.isLoaded() && Backplane.resetCookieChannel()
        }
        t._ready = null, t.executeOnInit = i, t.isLoaded = n, t.getChannelId = o, t.resetChannel = r, e.events.global.add("logout", e.external.backplane.resetChannel)
      }(i = t.backplane || (t.backplane = {}))
    }(t = e.external || (e.external = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        function t(e) {
          for (var t = document.getElementsByTagName("meta"), i = 0; i < t.length; i++)
            if (t[i].getAttribute("property") == e && t[i].getAttribute("content")) return t[i].getAttribute("content")
        }
        e.getMetaTag = t
      }(t = e.opengraph || (e.opengraph = {}))
    }(t = e.external || (e.external = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      function i(t, i, n, o) {
        var r, a, s = !1;
        if (206005 == t.errorCode) e.logger.info("finalizing registration after email verification"), s = !0, e.accounts.finalizeRegistration({
          regToken: t.regToken,
          ignoreApiQueue: !0,
          callback: o
        });
        else if (!i.dontHandleScreenSet && ((t.regToken || i.regToken) && (200010 == t.errorCode || 403043 == t.errorCode) || 206001 == t.errorCode || 206002 == t.errorCode || 206003 == t.errorCode || 403101 == t.errorCode || 403102 == t.errorCode || 403110 == t.errorCode || 403100 == t.errorCode)) {
          var c;
          403110 == t.errorCode && (a = !0, c = !0), i.defaultMobileRegScreenSet && e.localInfo.isMobile ? r = i.defaultMobileRegScreenSet : i.defaultRegScreenSet && (r = i.defaultRegScreenSet)
        }
        r ? (e.logger.info("showing screenset '" + r + "' for errorCode " + t.errorCode), e.logger.group(r), e.accounts.showScreenSet({
          ignoreApiQueue: !0,
          newModal: c,
          screenSet: r,
          initialMethod: n,
          initialResponse: t,
          onError: function (e) {
            o(t)
          },
          onHide: function (i) {
            if (e.logger.groupEnd(r), "finished" === i.reason && i.user) {
              var n = {
                errorCode: 0,
                userInfo: i.user
              };
              o(n, !0, a)
            } else o(t)
          }
        })) : s || o(t)
      }

      function n(t) {
        var i = e.utils.localStorage.getObject("gigyaSettings");
        return e.utils.JSON.serialize(i[t])
      }

      function o(t, i) {
        var n = e.utils.localStorage.getObject("gigyaSettings", (r = {}, r[t] = {}, r));
        for (var o in i) n[t][o] = i[o];
        e.utils.localStorage.setItem("gigyaSettings", e.utils.JSON.serialize(n));
        var r
      }

      function r(t) {
        if (t) {
          var i = e.utils.localStorage.getObject("gigyaSettings");
          i && (delete i[t], e.utils.localStorage.setItem("gigyaSettings", e.utils.JSON.serialize(i)))
        } else e.utils.localStorage.removeItem("gigyaSettings")
      }

      function a(i) {
        var n = e.socialize.Collection,
          o = function (e, i) {
            for (var n = [], o = 0, r = e[o]; r;) n.push(new i(r)), n[o].identities && t.convertIdentitiesArrayToObject(n[o]), r = e[++o];
            return n
          };
        if (i.photos && (i.photos = new n(i.photos, "photoID")), i.albums && (i.albums = new n(i.albums, "albumID")), i.contacts && (i.contacts = new n(o(i.contacts, e.socialize.Contact), "email")), i.friend && (i.friend = new n(o(i.friend, e.socialize.Friend), "UID")), i.user && (i.user = new e.socialize.User(i.user)), i.friends && i.friends instanceof Array) {
          for (var r = [], a = 0; a < i.friends.length; a++) r.push(i.friends[a].UID);
          i.UIDs = r.join(","), i.friends = new n(o(i.friends, e.socialize.Friend), "UID")
        }
      }

      function s(t) {
        if (null == t.identities) return void(t.identities = {});
        if (t.identities.constructor == Array) {
          var i = t.identities;
          t.identities = {};
          for (var n = 0; n < i.length; n++) t.identities[i[n].provider] = new e.socialize.Identity(i[n])
        }
      }

      function c(t, i, n, o) {
        var r = t.user || t.userInfo;
        return null == i && (i = {}), null != r && (i.user = e.utils.object.clone(r), null != t.isLoggedIn && (i.user.isLoggedIn = t.isLoggedIn), null != t.isSiteUID && (i.user.isSiteUID = t.isSiteUID), null != t.iRank && (i.user.iRank = t.iRank)), n && (e.utils.object.extractProperties(t, i, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|signKeysUIDSignature"), null != i.user && (i.UID = r.UID, i.isSiteUID = r.isSiteUID)), i
      }

      function l(t) {
        var i = t.userAction || {},
          n = i.title || "",
          o = i.linkBack || "";
        document.location.href = "mailto:?to=&subject=" + e.utils.URL.URLEncode(n) + "&body=" + e.utils.URL.URLEncode(o), e.socialize.sendEmail(t, {
          dontSendEmail: !0
        })
      }
      var u;
      ! function (e) {
        e[e.LocalStorageListener = 0] = "LocalStorageListener", e[e.PostMessage = 1] = "PostMessage", e[e.Flash = 2] = "Flash"
      }(u = t.MessagingMethod || (t.MessagingMethod = {})), t.checkCompleteRegistration = i, t.getGigyaSettings = n, t.setGigyaSettings = o, t.delGigyaSettings = r, t.handleSpecialFields = a, t.convertIdentitiesArrayToObject = s, t.addUserInfoToEvent = c, t.sendEmailNative = l
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {})),
  function (e) {
    var t;
    ! function (t) {
      function i() {
        e.utils.cookie.set("_gig_dbgConsole_log", "1", null)
      }

      function n() {
        e.utils.cookie.set("_gig_dbgConsole_log", "0", null)
      }

      function o() {
        var i = e.utils.cookie.get("_gig_dbgConsole_log");
        return "undefined" != typeof i && null != i ? "1" === i : t.selectedConsoleLogLevels.length > 0
      }

      function r(i, n, o) {
        if (void 0 === o && (o = !1), e.log._isEnabled() || o) {
          var r = i;
          if (n = e.utils.object.clone(n, !0, !1, 4, null, !0), null != n && (r += ":" + ("object" == typeof n ? "\n" : "") + e.utils.JSON.serialize(n, !0, !0)), o && "object" == typeof console && console.log && console.log(r), e.log._isEnabled()) {
            t._log.push(r), null != document.getElementById("gigya_log") && e.log.show && e.log.show();
            var a;
            a = e.utils.array.indexOf(e.log.CONSOLE_LOG_LEVELS, i) != -1 ? i : "log", e._.apiAdapter.onJSLog(a, r)
          }
        }
      }

      function a(t, i, n) {
        n || (n = i.lastSource), e.log.addLog("Calling " + t + (n && n != t ? " for " + n : "") + (i.source && n != i.source ? " initiated from " + i.source : "") + " with these params", i)
      }

      function s() {
        e.utils.script.load(e._.getCdnResource("/js/gigya.services.socialize.plugins.log.min.js"), null, function () {
          e.log.showConfig()
        }, !0)
      }

      function c() {
        e.utils.script.load(e._.getCdnResource("/js/gigya.services.socialize.plugins.log.min.js"), null, function () {
          e.log.show()
        }, !0)
      }

      function l() {}

      function u() {}
      t.CONSOLE_LOG_LEVELS = ["debug", "info", "log", "warn", "error"], t.selectedConsoleLogLevels = [], t._log = [], t.enable = i, t.disable = n, t._isEnabled = o, t.addLog = r, t.logCall = a, t.debug = s, t.showLog = c, t.show = l, t.showConfig = u, e.utils.functions.createAlias("gigya.debug", s)
    }(t = e.log || (e.log = {}))
  }(gigya || (gigya = {}));
  var defaultObjects = {},
    defaultObjectsDef = {
      User: "personwithuid+isLoggedIn|false,isConnected|false,isSiteUser|false,identities|{},providers|[],timestamp,UIDSig,UIDSignature,signatureTimestamp,loginProvider,loginProviderUID,capabilities|{}",
      Friend: "personwithuid+timestamp,friendshipSig,friendshipSignature,signatureTimestamp,timestamp,isSiteUser|false,identities|{}",
      Identity: "person+isExpiredSession|false,allowsLogin|false,providerUID,provider,isLoginIdentity|false,missingPermissions",
      Contact: "provider,firstName,lastName,nickname,email,photoURL",
      person: "nickname,photoURL,thumbnailURL,birthDay|0,birthMonth|0,birthYear|0,gender,email,proxiedEmail,country,state,city,zip,firstName,lastName,profileURL,age|0",
      personwithuid: "person+UID,isSiteUID|false",
      UserAction: "actorUID,actorNickname,actionName,date|new Date(),targets|[],images|[],actionData1,actionData2,iconURL,title,linkBack,userMessage,description,actionLinks|[],mediaItems|[],subtitle"
    },
    createDefaultObject = function (e) {
      var t = {},
        i = defaultObjectsDef[e];
      i.indexOf("+") != -1 && (t = createDefaultObject(i.split("+")[0]), i = i.split("+")[1]);
      for (var n = i.split(","), o = 0; o < n.length; o++) {
        var r = "",
          a = n[o].split("|");
        if (a.length > 1) try {
          r = gigya.utils.JSON.deserialize(a[1], "")
        } catch (e) {}
        t[a[0]] = r || ""
      }
      return t
    },
    _createConstructor = function (e) {
      return function (t) {
        var i = defaultObjects[e];
        for (var n in i) this[n] = gigya.utils.object.clone(i[n]);
        if ("object" == typeof t)
          for (var n in t) "function" != typeof t[n] && (this[n] = gigya.utils.object.clone(t[n]))
      }
    };
  for (var def in defaultObjectsDef) defaultObjects[def] = createDefaultObject(def), gigya.socialize[def] = _createConstructor(def);
  gigya.socialize.Collection = function (e, t) {
    this.arr = e, this._key = t ? t : ""
  }, gigya.socialize.Collection.prototype = {
    asArray: function () {
      return this.arr
    },
    each: function (e) {
      for (var t = 0, i = this.arr[t]; i;) e(i, t), t++, i = this.arr[t]
    },
    getById: function (e) {
      return "undefined" == typeof this._hash && this._buildHash(), (this._hash ? this._hash : this.arr)[e]
    },
    getSize: function () {
      return this.arr.length
    },
    _buildHash: function () {
      var e = this._hash = {},
        t = this._key;
      this.each(function (i, n) {
        e["function" == typeof i[t] ? i[t]() : i[t]] = i
      })
    }
  }, gigya.socialize.UserAction.prototype = {
    clone: function () {
      return new gigya.socialize.UserAction(gigya.utils.object.clone(this, !0, !0))
    },
    getTemplate: function () {
      return this.titleTemplate
    },
    setTemplate: function (e) {
      this.titleTemplate = e
    },
    getActor: function (e) {
      return {
        UID: this.actorUID,
        nickname: this.actorNickname
      }
    },
    setActionName: function (e) {
      return this.actionName = e, this
    },
    getActionName: function (e) {
      return this.actionName
    },
    getTemplateFields: function () {
      var e = [];
      for (var t in this.templateFields) e.push(this.templateFields[t]);
      return new gigya.socialize.Collection(e, "fieldName")
    },
    setTemplateField: function (e, t, i) {
      return this.templateFields[e] = {
        fieldName: e,
        text: t,
        href: i
      }, this
    },
    getTemplateField: function (e) {
      return this.templateFields[e] ? this.templateFields[e] : null
    },
    addTarget: function (e) {
      return "object" == typeof e ? (this.targets.push({
        UID: e.UID,
        nickname: e.nickname ? e.nickname : ""
      }), this) : "string" == typeof e ? (this.targets.push({
        UID: e,
        nickname: ""
      }), this) : void 0
    },
    addActionLink: function (e, t) {
      return this.actionLinks.push({
        text: e,
        href: t ? t : ""
      }), this
    },
    addMediaItem: function (e) {
      return this.mediaItems.push(e), this
    },
    setTitle: function (e) {
      return e && (this.title = e), this
    },
    setLinkBack: function (e) {
      return e && e.toString && (e = e.toString()), e && (this.linkBack = e), this
    },
    setUserMessage: function (e) {
      return this.userMessage = e ? e : "", this
    },
    setDescription: function (e) {
      return this.description = e ? e : "", this
    },
    addImage: function (e, t) {
      this.addMediaItem({
        type: "image",
        src: e,
        href: t
      })
    },
    getImages: function () {
      return new gigya.socialize.Collection(this.images, "")
    },
    getTargets: function () {
      return new gigya.socialize.Collection(this.targets, "UID")
    },
    setIconURL: function (e) {
      return this.iconURL = e, this
    },
    getIconURL: function () {
      return this.iconURL
    },
    getDate: function () {
      return this.date
    },
    setActionData1: function (e) {
      return this.actionData1 = e, this
    },
    getActionData1: function (e) {
      return this.actionData1
    },
    setActionData2: function (e) {
      return this.actionData2 = e, this
    },
    getActionData2: function (e) {
      return this.actionData2
    },
    setSubtitle: function (e) {
      return this.subtitle = e, this
    },
    getSubtitle: function () {
      return this.subtitle
    }
  };
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i;
      ! function (i) {
        function n(e, t) {
          void 0 === t && (t = i.arProviders);
          for (var n = 0; n < t.length; n++)
            if (t[n].name.toLowerCase() === e.toLowerCase()) return t[n]
        }

        function o(e) {
          if (null != e) {
            for (var i = e.split(","), n = 0; n < i.length; n++) {
              var o = i[n].replace(/^\s+|\s+$/g, "");
              t.providers._aliases[o] && (i[n] = t.providers._aliases[o])
            }
            return i.join(",")
          }
        }

        function r(e, t) {
          void 0 === t && (t = i.arProviders);
          for (var n = 0; n < t.length; n++)
            if (t[n].ID === e) return t[n]
        }

        function a(e, t, n) {
          void 0 === t && (t = ""), void 0 === n && (n = i.arProviders), t = t.toLowerCase();
          var o = t.split(" ").join("").split(".").join("").toLowerCase().split(",");
          o = u(o, n);
          for (var r = 0; r < o.length; r++)
            for (var a = 0; a < e.length; a++) {
              var s = e[a],
                c = s.name || s.toString();
              c && (c = c.toLowerCase()), c === o[r] && e.splice(a, 1)
            }
          return e
        }

        function s(e, t) {
          null == t && (t = []);
          for (var i = [], n = 0; n < e.length; n++) {
            for (var o = e[n], r = !0, a = 0; a < t.length; a++) {
              for (var s = !1, c = 0; c < o.arDefaultCapabilities.length; c++)
                if (o.arDefaultCapabilities[c].toLowerCase() == t[a].toLowerCase()) {
                  s = !0;
                  break
                }
              if (!s) {
                r = !1;
                break
              }
            }
            r && i.push(o)
          }
          return i
        }

        function c() {
          return i.arProviders.concat()
        }

        function l(t, r) {
          void 0 === r && (r = i.arProviders), t = ("" + t).split(" ").join("").split(".").join("").toLowerCase(), t = o(t);
          var a = ("" + t).split(",");
          a = u(a, r);
          for (var s = [], c = 0; c < a.length; c++) {
            var l = n(a[c], r);
            null != l && e.utils.array.indexOf(s, l) == -1 && s.push(l)
          }
          return s
        }

        function u(e, t) {
          t || (t = i.arProviders);
          for (var n = [], o = 0; o < e.length; o++)
            if ("*" == e[o])
              for (var r = 0; r < t.length; r++) {
                for (var a = !1, s = 0; s < e.length; s++) e[s].toLowerCase() === t[r].name.toLowerCase() && (a = !0);
                a || t[r].explicitOnly || n.push(t[r].name)
              } else n.push(e[o]);
          return n
        }
        i._aliases = {};
        var g = function () {
          function e(e, t, n, o, r, a, s) {
            if (this.ID = e, this.displayName = t, this.width = n, this.height = o, this.explicitOnly = a, this.aliases = s, this.arDefaultCapabilities = r.split(","), this.name = t.toLowerCase().split(" ").join("").split("!").join("").split(".").join("").split("+").join("plus"), s) {
              i._aliases || (i._aliases = {});
              for (var c = s.split("|"), l = 0; l < c.length; l++) i._aliases[c[l]] = this.name
            }
            switch (this.name) {
              case "messenger":
                this.displayName = "Microsoft";
                break;
              case "customopenid":
                this.displayName = "OpenID";
                break;
              case "paypaloauth":
                this.displayName = "PayPal"
            }
          }
          return e.prototype.toString = function () {
            return this.name
          }, e
        }();
        i.Provider = g, i.arProviders = [new g(64, "Facebook", 650, 400, "login,friends,places,status,actions,photos"), new g(9012, "Twitter", 800, 440, "login,friends,notifications,actions,status,places,checkins"), new g(72, "Google+", 560, 600, "login,friends,contacts", (!1), "google|googleplus"), new g(9042, "LinkedIn", 865, 450, "login,friends,status,actions,notifications,contacts"), new g(9058, "Amazon", 785, 510, "login"), new g(9803, "Yahoo", 500, 567, "login,friends,contacts,notifications"), new g(1047, "Messenger", 380, 540, "login, friends", (!1), "messenger|microsoft"), new g(9832, "Instagram", 440, 420, "login,photos"), new g(9222, "Odnoklassniki", 888, 425, "login"), new g(9007, "FourSquare", 1e3, 650, "login,friends,places,checkins"), new g(8191, "Renren", 450, 350, "login,friends,status,actions"), new g(8203, "QQ", 570, 460, "login,actions"), new g(9821, "Sina", 640, 380, "login,status,actions"), new g(4228, "Mixi", 1e3, 720, "login,friends,actions,photos", (!0)), new g(9830, "Yahoo! JAPAN", 980, 700, "login", (!0)), new g(8205, "Spiceworks", 640, 380, "login", (!0)), new g(9041, "VKontakte", 610, 510, "login,friends,photos,status,actions"), new g(9800, "AOL", 530, 720, "login"), new g(4096, "WordPress", 700, 540, "login"), new g(256, "Blogger", 760, 400, "login"), new g(4218, "Netlog", 730, 590, "login", (!0)), new g(4224, "Orange France", 730, 590, "login", (!0)), new g(5002, "Livedoor", 970, 700, "login", (!0)), new g(5004, "Fox News", 730, 590, "login", (!0)), new g(1051, "PayPal", 400, 550, "login", (!0)), new g(9219, "Xing", 785, 510, "login,friends", (!0)), new g(8206, "WeChat", 730, 590, "login", (!1), "wechat|weixin"), new g(4121, "Custom OpenID", 730, 590, "login", (!0)), new g(4122, "Custom SAML", 730, 590, "login", (!0)), new g(10001, "OpenID Connect", 730, 590, "login", (!0)), new g(6002, "Site", 730, 590, "", (!0)), new g(1052, "PayPalOAuth", 730, 590, "login", (!0)), new g(8207, "Line", 730, 590, "login"), new g(20001, "Kakao", 500, 600, "login", (!0)), new g(20002, "Naver", 780, 555, "login", (!0)), new g(20003, "DocCheck", 874, 844, "login", (!0))], i.getProviderByName = n, i.replaceProviderAliases = o, i.getProviderById = r, i.hideProvidersByName = a, i.getProvidersForRequiredCapabilities = s, i.getAllProviders = c, i.getProvidersByName = l, i.replaceWildcard = u, e.utils.functions.createAlias("gigya.socialize.getAllProviders", c), e.utils.functions.createAlias("gigya.socialize.replaceProviderAliases", o), e.utils.functions.createAlias("gigya.socialize.getProvidersByName", l), e.utils.functions.createAlias("gigya.socialize._getProviderByName", n), e.utils.functions.createAlias("gigya.socialize.hideProvidersByName", a), e.utils.functions.createAlias("gigya.socialize._getProviderByID", r), e.utils.functions.createAlias("gigya.socialize.getProvidersForRequiredCapabilities", s)
      }(i = t.providers || (t.providers = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      function i() {
        if (e.thisScript.globalConf.trackAddressBarShares) {
          var t = e._.apiAdapter.getTokenParam(e.thisScript.APIKey, "UUID"),
            i = document.location.href.split("#");
          1 != i.length && "" != i[1] && "guid=_" != i[1] || document.location.replace("#guid=" + (t ? t : "_"))
        }
      }

      function n(i, n, o, r, s, c, l) {
        void 0 === c && (c = {}), void 0 === l && (l = !1);
        var u = e.utils.object.removeUndefined({
          name: i,
          time: (new Date).getTime().toString(),
          source: r,
          sourceData: s,
          reportData: c,
          cid: o
        });
        if (l) {
          var g = [u];
          e.gscounters.sendReport({
            reports: g,
            noAuth: !a(g)
          })
        } else t.queue || (t.queue = []), t.queue.push(u)
      }

      function o() {
        setInterval(r, 5e3)
      }

      function r() {
        for (; t.queue && t.queue.length > 0;) {
          var i = e.utils.object.clone(t.queue.splice(0, 5), !0, !0);
          e.gscounters.sendReport({
            reports: i,
            noAuth: !a(i)
          })
        }
      }

      function a(e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          if ("loadc" !== i.name && "load" !== i.name || "loadc" === i.name && i.reportData && i.reportData.actionCounterPath) return !0
        }
        return !1
      }

      function s(e, t) {
        if (!t._reportedLoad) {
          t._reportedLoad = !0;
          var i = "load";
          if ("gigya.socialize.plugins.reactions.showReactionsBarUI" == e) return;
          "gigya.socialize.plugins.simpleshare.showSimpleShareUI" == e && (i = "loadSimple"), this.report(i, t.APIKey, t.cid, t.source, t.sourceData)
        }
      }
      t.trackAddressBarShares = i, t.report = n, t.init = o, t.reportLoad = s
    }(t = e.reports || (e.reports = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (t) {
      var i = function () {
        function i(t, n, o) {
          void 0 === o && (o = !0), this.params = t, this.explicitParams = n, this._logger = e.logger, this._eventDispatcher = function (t, i) {
            return e.events.dispatchForWidget(t, i)
          }, this._errorDispatcher = e.events, this._globalEventsManager = e.events.global, this._isDisposed = !1, this._eventWrappers = {}, this._globalEventHandlers = {}, this._id = ++i.instanceCounter, this.params = t ? e.utils.object.clone(t) : {}, this.explicitParams = n ? e.utils.object.clone(n) : {}, o && this.validateParams();
          for (var r in t) this[r] && (this[r] = t[r])
        }
        return i.prototype.onErrorEvent = function () {
          return this.getEvent("onError")
        }, i.prototype.onDisposedEvent = function () {
          return this.getEvent("onDisposed")
        }, i.prototype.getType = function () {
          return this.constructor.name || this.getFunctionName(this.constructor)
        }, i.prototype.getFunctionName = function (e) {
          var t = e.toString();
          return t = t.substr("function ".length), t = t.substr(0, t.indexOf("("))
        }, i.prototype.getConfig = function () {
          return this.error(i.NOT_IMPLEMENTED_ERROR, 400096), {}
        }, i.prototype.toString = function () {
          return this.getType() + " " + this.id()
        }, i.prototype.id = function () {
          return this._id
        }, i.prototype.warn = function (e, t) {
          var i = this.id() + " " + this.getType() + " - " + e;
          this._logger.info(i, t)
        }, i.prototype.error = function (e, t, i) {
          void 0 === t && (t = 300001);
          var n = {
            errorMessage: e,
            errorCode: t,
            errorDetails: this.id(),
            info: i
          };
          this.warn(e, n), this.dispatchEvent("error", n)
        }, i.prototype.validateParams = function (t) {
          t || (t = this.getConfig().requiredParams || []), this.getConfig().defaultParams && (this.params = e.utils.object.merge([this.getConfig().defaultParams, this.params]));
          var i = [];
          if (t.length > 0)
            for (var n in t)
              if (t.hasOwnProperty(n)) {
                var o = t[n];
                this.params[o] || i.push(o)
              }
          return !(i.length > 0) || (this.dispatchInvalidParamError(i[0]), !1)
        }, i.prototype.dispatchEvent = function (e, t) {
          return void 0 === t && (t = {}), t.eventName = e, this._eventDispatcher(t, this.params)
        }, i.prototype.dispatchErrorFromResponse = function (e) {
          this._errorDispatcher.dispatchErrorFromResponse(this.params, e)
        }, i.prototype.dispatchInvalidParamError = function (e) {
          this._errorDispatcher.dispatchInvalidParamError(this.params, e)
        }, i.prototype.getEvent = function (e) {
          return this._eventWrappers[e] || (this.params[e] ? this.params[e] instanceof Array || (this.params[e] = [this.params[e]]) : this.params[e] = [], this._eventWrappers[e] = new t.EventWrapper(this.params[e])), this._eventWrappers[e]
        }, i.prototype.addGlobalEventHandlers = function (e) {
          for (var t in e) e.hasOwnProperty(t) && this.addGlobalEventHandler(t, e[t])
        }, i.prototype.addGlobalEventHandler = function (e, t, i, n) {
          void 0 === i && (i = null), void 0 === n && (n = "socialize"), this._globalEventHandlers[e] || (this._globalEventHandlers[e] = []);
          var o = this._globalEventsManager.add(e, t, "component", i, n, this.params);
          this._globalEventHandlers[e].push(o)
        }, i.prototype.removeGlobalEventHandlers = function (e) {
          for (var t in e) e.hasOwnProperty(t) && this.removeGlobalEventHandler(t, e[t])
        }, i.prototype.removeGlobalEventHandler = function (t, i, n, o) {
          void 0 === n && (n = null), void 0 === o && (o = "socialize");
          var r = this._globalEventHandlers[t];
          if (r) {
            var a = e.utils.array.firstIndex(r, function (e) {
              return e.handler == i
            });
            if (a > -1) {
              var s = r[a];
              this._globalEventsManager.remove(s.fullEventName, s), r.splice(a, 1)
            }
          }
        }, i.prototype.prepareCallback = function (e) {
          var t = this;
          return function () {
            for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
            if (!t._isDisposed) return e.apply(this, i)
          }
        }, i.prototype.dispose = function () {
          for (var e in this._globalEventHandlers)
            if (this._globalEventHandlers.hasOwnProperty(e))
              for (var t in this._globalEventHandlers[e]) {
                var i = this._globalEventHandlers[e][t];
                this._globalEventsManager.remove(i.fullEventName, i)
              }
          this._globalEventHandlers = {}, this._eventWrappers = {}, this.params = {}, this._isDisposed = !0
        }, i.instanceCounter = 0, i.NOT_IMPLEMENTED_ERROR = "Abstract method not implemented", i
      }();
      t.BaseObject = i
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t;
      ! function (e) {
        e[e._undefined = 0] = "_undefined", e[e.desktop = 1] = "desktop", e[e.mobile = 2] = "mobile", e[e.auto = 3] = "auto"
      }(t = e.DeviceTypes || (e.DeviceTypes = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    var t;
    ! function (e) {
      var t = function () {
        function e(e) {
          void 0 === e && (e = []), this._handlers = e
        }
        return e.prototype.add = function (e) {
          this._handlers.push(e)
        }, e.prototype.remove = function (e) {
          var t = this._handlers.indexOf(e);
          t > -1 && this._handlers.splice(t, 1)
        }, e
      }();
      e.EventWrapper = t
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
  var gigya;
  ! function (e) {
    e.logger.group("websdk root"), e.logger.info("partner settings:", e.partnerSettings), e.logger.info("local info:", e.localInfo), e.isReady = !1, e.build || (e.build = {
      version: "",
      number: 0
    }), e.providersConfig || (e.providersConfig = {}), e.isGigya || (e.isGigya = !0), e.partnerSettings || (e.partnerSettings = {
      authMode: "cookie",
      baseDomains: "",
      captchaProvider: "Google",
      plugins: {
        apiDomain: "us1.gigya-api.com"
      },
      invisibleRecaptcha: {
        siteKey: ""
      },
      recaptchaV2: {
        siteKey: ""
      },
      funCaptcha: {
        siteKey: ""
      }
    });
    var t;
    ! function (e) {}(t = e._ || (e._ = {})),
    function (t) {
      var i;
      ! function (i) {
        function n() {
          var t = e.logger.group("bootstrap websdk");
          e.utils.queue.hold("bootstrap", "API"), (e.localInfo.isIE6 || e.localInfo.isIE7 || e.localInfo.isIE8 || e.localInfo.isIE9 || e.localInfo.isIE10) && "undefined" != typeof console && "undefined" != typeof console.log && console.log("Gigya: It looks like you're using an old version of Internet Explorer. This browser is not supported. Please upgrade to a newer version of IE."), e.reports.init(), l(function () {
            p();
            var i = e.thisScript.globalConf.customEventMap;
            i && (e.logger.info("adding custom event map"), e.events.addMap(i)), e.logger.group("init api adapter"), u(function () {
              if (e.logger.groupEnd("init api adapter"), e.isReady = !0, "function" == typeof onGigyaServiceReady) {
                e.logger.info("invoke local onGigyaServiceReady event");
                try {
                  onGigyaServiceReady("socialize")
                } catch (t) {
                  e.logger.warn("gigya: error while invoking onGigyaServiceReady", t)
                }
              }
              if ("function" == typeof e.thisScript.globalConf.onGigyaServiceReady) {
                e.logger.info("invoke globalconf's onGigyaServiceReady event");
                try {
                  e.thisScript.globalConf.onGigyaServiceReady("socialize")
                } catch (t) {
                  e.logger.warn("gigya: error while invoking onGigyaServiceReady injected from server", t)
                }
              }
              d(function () {
                e.utils.queue.release("bootstrap", "API"), f(), g(), e.reports.trackAddressBarShares(), e.utils.functions.invokeOnPageLoad(function () {
                  return window.setTimeout(e.socialize.trackReferrals, 1e3)
                }), t.end()
              })
            }), o(), s(), r();
            var n = {
              sref: document.referrer
            };
            e.thisScript.globalConf.actionCounterPath && (n.actionCounterPath = e.thisScript.globalConf.actionCounterPath), e.reports.report("loadc", e.thisScript.APIKey, null, null, null, n)
          })
        }

        function o() {}

        function r() {
          if (e.abTesting)
            for (var t in e.abTesting)
              if ("optimizely" === t) {
                var i = e.abTesting[t];
                if (i.serviceParams && i.serviceParams.hasOwnProperty("apiKey")) {
                  var n = window.location.pathname,
                    o = !1;
                  if (i.disabledPaths)
                    for (var r = 0; r < i.disabledPaths.length; r++)
                      if (i.disabledPaths[r].indexOf(n) > -1) {
                        o = !0;
                        break
                      }
                  if (!o)
                    for (var r = 0; r < i.enabledPaths.length; r++) n.indexOf(i.enabledPaths[r]) > -1 && e.utils.script.load("//cdn.optimizely.com/js/" + i.serviceParams.apiKey + ".js")
                }
              }
        }

        function a(t) {
          "1" == e.utils.cookie.get("gig_debug") ? e.socialize.showDebugUI({
            ignoreApiQueue: !0,
            waitForDebug: !1,
            onLoad: t
          }) : t()
        }

        function s() {
          e.utils.functions.invokeOnPageLoad(function () {
            "undefined" != typeof window.gigya_omniture_conf && e.utils.script.load(e._.getCdnResource("/js/GenesisExchange_Gigya.min.js"))
          })
        }

        function c(e) {
          e || (e = "en-US"), e = e.replace("_", "-").toLowerCase();
          var t, i = e.split("-"),
            n = i[0];
          t = i.length > 1 ? i[1] : n, t = t.toUpperCase();
          var o;
          switch (e) {
            case "es-mx":
              o = e, t = "ES";
              break;
            case "pt-br":
            case "zh-cn":
            case "zh-hk":
            case "zh-tw":
            case "te-st":
            case "fr-inf":
            case "de-inf":
            case "es-inf":
            case "nl-inf":
            case "lt-lt":
            case "lv-lv":
            case "et-ee":
              o = e;
              break;
            default:
              o = n
          }
          return {
            full: n + "-" + t,
            langCode: o,
            countryCode: t
          }
        }

        function l(t) {
          var n = e.utils.getGigyaScriptElement();
          if (n && !window.__gig_hidescript) {
            e.logger.info("parsing gigya script");
            var o = e.utils.URL.getParamsFromURL(n.src, !0) || {},
              r = e.utils.JSON.deserialize(e.partnerSettings.siteGroupGlobalConf) || {},
              a = e.utils.JSON.deserialize(e.partnerSettings.globalConf, {}, {
                siteGroupGlobalConf: r
              }) || {},
              s = e.utils.JSON.deserialize(n.innerHTML) || {},
              u = window.__gigyaConf || {};
            e.thisScript = {
              scriptElement: n,
              protocol: 0 === n.src.indexOf("https:") ? "https" : "http",
              baseDomain: n.src.split("/")[2],
              APIKey: o.apikey,
              lang: c(o.lang || u.lang || s.lang || a.lang || r.lang),
              globalConf: e.utils.object.merge([e.partnerSettings.plugins || {}, r, a, s, u], !1),
              URLParams: o
            }, e.thisScript.globalConf.lang = e.thisScript.lang.langCode, !e.thisScript.APIKey && "object" == typeof console && console.warn ? console.warn("**** WARNING - Loading socialize.js without an APIKey parameter is unsupported and may result in an unexpected behavior.  ****") : e.thisScript.globalConf.APIKey = e.thisScript.APIKey, t()
          } else i.parseScriptRetries < 10 ? (i.parseScriptRetries++, window.setTimeout(function () {
            l(t)
          }, 200)) : (e.thisScript = {
            scriptElement: null,
            protocol: e.localInfo.protocol,
            baseDomain: "https" === e.localInfo.protocol ? "https://cdns.gigya.com" : "http://cdn.gigya.com",
            APIKey: "",
            lang: c(""),
            globalConf: {},
            URLParams: {}
          }, t())
        }

        function u(i) {
          var n = "web",
            o = window.__gigAPIAdapterSettings,
            r = e.localInfo.supportsLocalStorage,
            s = "__gigAPIAdapterSettings_" + e.thisScript.APIKey + "_" + e.build.version;
          if (o && "mobile" == o.getAdapterName() && o.getAPIKey() == e.thisScript.APIKey) {
            if (n = "mobile", r) {
              var c = {
                apiKey: o.getAPIKey ? o.getAPIKey() : null,
                adapterName: o.getAdapterName ? o.getAdapterName() : null,
                features: o.getFeatures ? o.getFeatures() : null,
                settings: o.getSettings ? o.getSettings() : null
              };
              e.utils.localStorage.setItem(s, e.utils.JSON.serialize(c))
            }
          } else if (r) {
            var l = e.utils.JSON.deserialize(e.utils.localStorage.getItem(s));
            "mobile" === l.adapterName && (n = "mobile", o = {}, l.apiKey && (o.getAPIKey = function () {
              return l.apiKey
            }), l.adapterName && (o.getAdapterName = function () {
              return l.adapterName
            }), l.features && (o.getFeatures = function () {
              return l.features
            }), l.settings && (o.getSettings = function () {
              return l.settings
            }))
          }
          e.logger.info("selecting api adapter: " + n), t.apiAdapter = t.apiAdapters[n].newApiAdapter(o), e.utils.functions.createAlias("gigya.auth.loginToken.getTokenParam", t.apiAdapter.getTokenParam), a(function () {
            t.apiAdapter.init(i)
          })
        }

        function g() {
          e.thisScript.globalConf.autoLogin && (e.logger.info("triggering auto-login"), e.external.facebook.autoLogin(), e.external.googlePlus.autoLogin())
        }

        function d(i) {
          var n = e.utils.URL.getParamsFromURL(document.location.href);
          n.errorCode && n.regToken ? t.checkCompleteRegistration(n, e.thisScript.globalConf, "", function () {
            return i()
          }) : i()
        }

        function p() {
          var i, n = e.localInfo;
          n.isIE11 && !window.indexedDB ? (i = t.MessagingMethod.Flash, e.thisScript.globalConf.legacyCrossSiteMethod = "localConnection") : i = n.supportsPostMessage ? t.MessagingMethod.PostMessage : t.MessagingMethod.Flash, n.messagingMethod = i, e.logger.info("selected messaging method is: " + t.MessagingMethod[i])
        }

        function f() {
          e.utils.queue.queueForExecution("API", function () {
            e.utils.functions.invokeOnPageLoad(function () {
              e.providersConfig.facebook && (e.logger.info("loading facebook sdk"), e.external.facebook.load(!1)), e.providersConfig.googlePlus && (e.logger.info("loading google plus sdk"), e.external.googlePlus.load())
            })
          })
        }
        i.parseScriptRetries = 0, i.init = n, i.warnOnUnsupportedBrowser = o, i.loadABTesting = r, i.startDebugIfNeeded = a, i.loadOmniture = s, i.parseLang = c, i.parseScriptElement = l, i.initApiAdapter = u, i.autoLogin = g, i.checkReturnFromRedirect = d, i.setMessagingMethod = p, i.injectExternalSdks = f, n()
      }(i = t.bootstrap || (t.bootstrap = {}))
    }(t = e._ || (e._ = {}))
  }(gigya || (gigya = {}));
}