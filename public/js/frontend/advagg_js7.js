/**
 * @file
 * Gigya functions from Drupal
 */
(function($) {

  /**
   * @todo Undocumented Code!
   */
  $.extend({
      getUrlVars: function() {
          var vars = [],
              hash;
          var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
          for (var i = 0; i < hashes.length; i++) {
              hash = hashes[i].split('=');
              vars.push(hash[0]);
              vars[hash[0]] = hash[1];
          }
          return vars;
      },
      getUrlVar: function(name) {
          return $.getUrlVars()[name];
      }
  });

  Drupal.gigya = Drupal.gigya || {};

  Drupal.gigya.hideLogin = function() {
      $('#user-login').hide();
  }

  /**
   * @todo Undocumented Code!
   */
  Drupal.gigya.logoutResponse = function(response) {
      if (response['status'] == 'OK') {
          document.getElementById('logoutMessage').innerHTML = "Successfully logged out, redirecting";
          window.location = Drupal.settings.gigya.logoutLocation;
      }
  };

  Drupal.gigya.addEmail = function(email) {
      if (typeof Drupal.gigya.toPost !== 'undefined') {
          Drupal.gigya.toPost.user.email = email;
          Drupal.gigya.login(Drupal.gigya.toPost);
      }
  }

  Drupal.gigya.login = function(post) {
      if (typeof post.context !== 'undefined') {
          var base = post.context.id
      } else {
          var base = $('.gigya-social-login').eq(0).attr('id');
      }
      var element_settings = {};
      element_settings.url = Drupal.settings.basePath + 'socialize-login';
      element_settings.event = 'gigyaLogin';
      var ajax = new Drupal.ajax(base, $('#' + base), element_settings);
      ajax.options.data = post;
      $(ajax.element).trigger('gigyaLogin');
  }

  // Send the account object that is returned in the onLogin event to Drupal.
  Drupal.gigya.raasRegLogin = function(data) {
      var base = Drupal.settings.gigya.raas.linkId || $('.gigya-raas-login').attr('id');
      var element_settings = {};
      element_settings.url = Drupal.settings.basePath + 'raas-login';
      element_settings.event = 'gigyaLogin';
      var ajax = new Drupal.ajax(base, $('#' + base), element_settings);
      ajax.options.data = data;
      $(ajax.element).trigger('gigyaLogin');
  }

  Drupal.gigya.profileUpdated = function(data) {
      console.log(data);
      var base = 'gigyaRequestForms',
          element_settings = {};
      element_settings.url = Drupal.settings.basePath + 'raas-profile-update';
      element_settings.event = 'gigyaProfileUp';
      var ajax = new Drupal.ajax(base, $('#' + base), element_settings);
      ajax.options.data = data.profile;
      $(ajax.element).trigger('gigyaProfileUp');
  }

  /**
   * @todo Undocumented Code!
   */
  Drupal.gigya.loginCallback = function(response) {
      Drupal.gigya.toPost = response;
      /*if ((response.user.email.length === 0) && (response.user.isSiteUID !== true)) {
        var html = '<div class="form-item form-type-textfield form-item-email"><div class="description">Additional information is required in order to complete your registeration. Please fill-in the following info:</div><label for="email" style="float: none;">Email <span class="form-required" title="This field is required.">*</span></label><input type="text" id="email" name="email" value="" size="20" maxlength="60" class="form-text required"><button type="button" class="button" onClick="Drupal.gigya.addEmail(jQuery(this).prev().val())">' + Drupal.t('Submit') + '</button></div>';
        Drupal.CTools.Modal.show();
        $('#modal-title').html('Please fill-in missing details');
        $('#modal-content').html(html);
        $('#modalContent .close').click(function() {
          gigya.socialize.logout();
        });
        return false;
      }*/
      if (response.provider === 'site') {
          return false;
      }
      Drupal.gigya.login(response);
  };

  /**
   * Callback for the getUserInfo function.
   *
   * Takes the getUserInfo object and renders the HTML to display an array
   * of the user object
   *
   * TODO: probably should be removed in production, since its just for dumping
   * user output.
   */
  Drupal.gigya.getUserInfoCallback = function(response) {
      if (response.status == 'OK') {
          var user = response['user'];
          // Variable which will hold property values.
          var str = "<pre>";
          for (prop in user) {
              if (prop == 'birthYear' && user[prop] == 2009) {
                  user[prop] = '';
              }
              if (prop == 'identities') {
                  for (ident in user[prop]) {
                      for (provide in user[prop][ident]) {
                          str += provide + " SUBvalue :" + user[prop][ident][provide] + "\n";
                      }
                  }
              }
              // Concate prop and its value from object.
              str += prop + " value :" + user[prop] + "\n";
          }
          str += "</pre>";

          document.getElementById('userinfo').innerHTML = str;
      }
  };

  /**
   * @todo Undocumented Code!
   */
  Drupal.gigya.showAddConnectionsUI = function(connectUIParams) {
      gigya.services.socialize.showAddConnectionsUI(connectUIParams);
  };

  /**
   * @todo Undocumented Code!
   */
  Drupal.gigya.notifyLoginCallback = function(response) {
      if (response['status'] == 'OK') {
          setTimeout("$.get(Drupal.settings.basePath + 'socialize-ajax/notify-login')", 1000);
      }
  };


  /**
   * @todo Undocumented Code!
   */
  Drupal.gigya.initResponse = function(response) {
      if (null != response.user) {
          if (response.user.UID != Drupal.settings.gigya.notifyLoginParams.siteUID || !response.user.isLoggedIn) {
              gigya.services.socialize.notifyLogin(Drupal.settings.gigya.notifyLoginParams);
          }
      }
  }
  /**
   * this function checks if the user is looged in at gigya if so it renders the Gamification Plugin
   */
  Drupal.gigya.gmInit = function(response) {
      if (response.errorCode === 0) {
          if (typeof response.UID !== 'undefined') {
              Drupal.gigya.gmRender();
          }
      }
      return false;
  };

  /**
   * function that renders the Gamification Plugin
   */
  Drupal.gigya.gmRender = function() {
      $.each(Drupal.settings.gigyaGM, function(key, block) {
          $.each(block, function(name, params) {
              switch (name) {
                  case 'challengeStatusParams':
                      gigya.gm.showChallengeStatusUI(params);
                      break;
                  case 'userStatusParams':
                      gigya.gm.showUserStatusUI(params);
                      break;
                  case 'achievementsParams':
                      gigya.gm.showAchievementsUI(params);
                      break;
                  case 'leaderboardParams':
                      gigya.gm.showLeaderboardUI(params);
                      break;
              }
          });
      });
  }
  /**
   * this function checks if the user is looged in at gigya if so it renders the Gamification notification Plugin
   */
  Drupal.gigya.gmNotiInit = function(response) {
      if (response.errorCode === 0) {
          if (typeof response.UID !== 'undefined') {
              var params = Drupal.settings.gigyaGMnotification;
              delete params.enable;
              gigya.gm.showNotifications(params);
          }
      }
      return false;
  };
  Drupal.gigya.logoutCallback = function(res) {
      if (typeof res.context.id !== 'undefined') {
          document.location = Drupal.settings.basePath + 'user/logout';
      }
  }


})(jQuery);


; /*})'"*/ ; /*})'"*/
/**
* @file
* Drupal behaviors for gigya.
*/

(function($) {
  /**
   * @todo Undocumented Code!
   */
  Drupal.behaviors.gigyaNotifyFriends = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              $('.friends-ui:not(.gigyaNotifyFriends-processed)', context).addClass('gigyaNotifyFriends-processed').each(
                  function() {
                      gigya.services.socialize.getUserInfo({
                          callback: Drupal.gigya.notifyFriendsCallback
                      });
                      gigya.services.socialize.addEventHandlers({
                          onConnect: Drupal.gigya.notifyFriendsCallback,
                          onDisconnect: Drupal.gigya.notifyFriendsCallback
                      });
                  }
              );
          }
      }
  };

  /**
   * @todo Undocumented Code!
   */
  Drupal.behaviors.gigyaInit = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              if (typeof Drupal.settings.gigya.notifyLoginParams !== 'undefined') {
                  Drupal.settings.gigya.notifyLoginParams.callback = Drupal.gigya.notifyLoginCallback;
                  gigya.services.socialize.getUserInfo({
                      callback: Drupal.gigya.initResponse
                  });
              }

              // Attach event handlers.
              if (typeof Drupal.settings.gigya.regEvents === 'undefined') {
                  // If we are in RaaS mode register the RaaS login function.
                  if (Drupal.settings.gigya.loginMode === 'raas') {
                      gigya.accounts.addEventHandlers({
                          onLogin: Drupal.gigya.raasRegLogin,
                          onLogout: Drupal.gigya.logoutCallback
                      });
                  }
                  // If we are in socialize mode register the socialize login function.
                  else {
                      gigya.socialize.addEventHandlers({
                          onLogin: Drupal.gigya.loginCallback,
                          onLogout: Drupal.gigya.logoutCallback
                      });
                  }
                  Drupal.settings.gigya.regEvents = true;
              }

              // Display LoginUI if necessary.
              if (typeof Drupal.settings.gigya.loginUIParams !== 'undefined') {
                  $.each(Drupal.settings.gigya.loginUIParams, function(index, value) {
                      value.context = {
                          id: value.containerID
                      };
                      gigya.services.socialize.showLoginUI(value);
                  });
              }

              // Display ConnectUI if necessary.
              if (typeof Drupal.settings.gigya.connectUIParams !== 'undefined') {
                  gigya.services.socialize.showAddConnectionsUI(Drupal.settings.gigya.connectUIParams);
              }

              // Call ShareUI if it exists.
              if (typeof Drupal.settings.gigya.shareUIParams !== 'undefined') {
                  //build a media object
                  var mediaObj = {
                      type: 'image',
                      href: Drupal.settings.gigya.shareUIParams.linkBack
                  };
                  if ((Drupal.settings.gigya.shareUIParams.imageBhev === 'url') && (Drupal.settings.gigya.shareUIParams.imageUrl !== '')) {
                      mediaObj.src = Drupal.settings.gigya.shareUIParams.imageUrl;
                  } else if (Drupal.settings.gigya.shareUIParams.imageBhev === 'default') {
                      if ($('meta[property="og:image"]').length > 0) {
                          mediaObj.src = $('meta[property="og:image"]').attr('content');
                      } else {
                          mediaObj.src = $('#block-system-main img').eq(0).attr('src') || $('img').eq(0).attr('src');
                      }
                  } else {
                      mediaObj.src = $('#block-system-main img').eq(0).attr('src') || $('img').eq(0).attr('src');
                  }
                  // Step 1: Construct a UserAction object and fill it with data.
                  var ua = new gigya.services.socialize.UserAction();
                  if (typeof Drupal.settings.gigya.shareUIParams.linkBack !== 'undefined') {
                      ua.setLinkBack(Drupal.settings.gigya.shareUIParams.linkBack);
                  }
                  if (typeof Drupal.settings.gigya.shareUIParams.title !== 'undefined') {
                      ua.setTitle(Drupal.settings.gigya.shareUIParams.title);
                  }
                  if (typeof Drupal.settings.gigya.shareUIParams.description !== 'undefined') {
                      ua.setDescription(Drupal.settings.gigya.shareUIParams.description);
                  }
                  ua.addMediaItem(mediaObj);
                  var params = {};
                  if (typeof Drupal.settings.gigya.shareUIParams.extraParams !== 'undefined') {
                      params = Drupal.settings.gigya.shareUIParams.extraParams;
                  }
                  params.userAction = ua;
                  gigya.services.socialize.showShareUI(params);
              }
          }
      }
  };

  /**
   * @todo Undocumented Code!
   */
  Drupal.behaviors.gigyaLogut = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              if ($.cookie('Drupal.visitor.gigya') == 'gigyaLogOut') {
                  if (Drupal.settings.gigya.loginMode === 'raas') {
                      gigya.accounts.logout();
                  } else {
                      gigya.services.socialize.logout();
                  }
                  $.cookie('Drupal.visitor.gigya', null);
              }
          }
      }
  };
  /**
   * initiate Gamification
   */

  Drupal.behaviors.gamification = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              if (typeof Drupal.settings.gigyaGM !== 'undefined') {
                  gigya.services.socialize.getUserInfo({
                      callback: Drupal.gigya.gmInit
                  });
              }
          }
      }
  };
  Drupal.behaviors.GMnotifications = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              if (typeof Drupal.settings.gigyaGMnotification !== 'undefined') {
                  gigya.services.socialize.getUserInfo({
                      callback: Drupal.gigya.gmNotiInit
                  });
              }
          }
      }
  };
  /**
   * initiate Activity Feed
   */
  Drupal.behaviors.gigyaActivityFeed = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              if (typeof Drupal.settings.gigyaActivityFeed !== 'undefined') {
                  gigya.socialize.showFeedUI(Drupal.settings.gigyaActivityFeed);
              }
          }
      }
  };
  Drupal.behaviors.addGigyaUidToForm = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              if ($('#gigya-link-accounts-form .gigyaUid').length > 0) {
                  $('#gigya-link-accounts-form .gigyaUid').val(Drupal.gigya.toPost.user.UID);
              }
              if ($('#modal-content form .gigyaUid').length > 0) {
                  $('#modal-content form .gigyaUid').val(Drupal.gigya.toPost.user.UID);
              }
              $('#modal-content form .close-modal').once().click(function(e) {
                  e.preventDefault();
                  Drupal.CTools.Modal.dismiss();
              });
          }
      }
  };
  Drupal.behaviors.gigyaFillRegForm = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              if ($('.modal-content #user-register-form').length > 0) {
                  if (typeof Drupal.gigya.toPost !== 'undefined') {
                      $('.modal-content #user-register-form input:[name=mail]').val(Drupal.gigya.toPost.user.email);
                      $('.modal-content #user-register-form input:[name=name]').val(Drupal.gigya.toPost.user.email);
                  }
                  jQuery('#gigya-link-accounts-form').parent().prev().find('.close').click(function() {
                      gigya.socialize.logout();
                  });
              }
          }
      }
  };

  Drupal.behaviors.gigyaRaas = {
      attach: function(context, settings) {
          if (typeof gigya !== 'undefined') {
              if (Drupal.settings.gigya.loginMode == 'raas') {
                  $('.gigya-raas-login').once('gigya-raas').click(function(e) {
                      e.preventDefault();
                      gigya.accounts.showScreenSet(Drupal.settings.gigya.raas.login);
                      Drupal.settings.gigya.raas.linkId = $(this).attr('id');
                  });
                  $('.gigya-raas-reg').once('gigya-raas').click(function(e) {
                      e.preventDefault();
                      gigya.accounts.showScreenSet(Drupal.settings.gigya.raas.register);
                      Drupal.settings.gigya.raas.linkId = $(this).attr('id');
                  });
                  $('.gigya-raas-prof, a[href="/user"]').once('gigya-raas').click(function(e) {
                      e.preventDefault();
                      Drupal.settings.gigya.raas.profile.onAfterSubmit = Drupal.gigya.profileUpdated;
                      gigya.accounts.showScreenSet(Drupal.settings.gigya.raas.profile);
                  });
                  var loginDiv = $('#gigya-raas-login-div');
                  if (loginDiv.size() > 0 && (typeof Drupal.settings.gigya.raas.login !== 'undefined')) {
                      var id = loginDiv.eq(0).attr('id');
                      Drupal.settings.gigya.raas.login.containerID = id;
                      Drupal.settings.gigya.raas.linkId = id;
                      gigya.accounts.showScreenSet(Drupal.settings.gigya.raas.login);
                  }
                  var regDiv = $('#gigya-raas-register-div');
                  if (regDiv.size() > 0 && (typeof Drupal.settings.gigya.raas.register !== 'undefined')) {
                      var id = regDiv.eq(0).attr('id');
                      Drupal.settings.gigya.raas.register.containerID = id;
                      Drupal.settings.gigya.raas.linkId = id;
                      gigya.accounts.showScreenSet(Drupal.settings.gigya.raas.register);
                  }
                  var profDiv = $('#gigya-raas-profile-div');
                  if ((profDiv.size() > 0) && (typeof Drupal.settings.gigya.raas.profile !== 'undefined')) {
                      Drupal.settings.gigya.raas.profile.containerID = profDiv.eq(0).attr('id');
                      Drupal.settings.gigya.raas.profile.onAfterSubmit = Drupal.gigya.profileUpdated;
                      gigya.accounts.showScreenSet(Drupal.settings.gigya.raas.profile);
                  }
              }
          }
      }
  };
})(jQuery);


; /*})'"*/ ; /*})'"*/
/**
* @file
*
* CTools flexible AJAX responder object.
*/

(function($) {
  Drupal.CTools = Drupal.CTools || {};
  Drupal.CTools.AJAX = Drupal.CTools.AJAX || {};
  /**
   * Grab the response from the server and store it.
   *
   * @todo restore the warm cache functionality
   */
  Drupal.CTools.AJAX.warmCache = function() {
      // Store this expression for a minor speed improvement.
      $this = $(this);
      var old_url = $this.attr('href');
      // If we are currently fetching, or if we have fetched this already which is
      // ideal for things like pagers, where the previous page might already have
      // been seen in the cache.
      if ($this.hasClass('ctools-fetching') || Drupal.CTools.AJAX.commandCache[old_url]) {
          return false;
      }

      // Grab all the links that match this url and add the fetching class.
      // This allows the caching system to grab each url once and only once
      // instead of grabbing the url once per <a>.
      var $objects = $('a[href="' + old_url + '"]')
      $objects.addClass('ctools-fetching');
      try {
          url = old_url.replace(/\/nojs(\/|$)/g, '/ajax$1');
          $.ajax({
              type: "POST",
              url: url,
              data: {
                  'js': 1,
                  'ctools_ajax': 1
              },
              global: true,
              success: function(data) {
                  Drupal.CTools.AJAX.commandCache[old_url] = data;
                  $objects.addClass('ctools-cache-warmed').trigger('ctools-cache-warm', [data]);
              },
              complete: function() {
                  $objects.removeClass('ctools-fetching');
              },
              dataType: 'json'
          });
      } catch (err) {
          $objects.removeClass('ctools-fetching');
          return false;
      }

      return false;
  };

  /**
   * Cachable click handler to fetch the commands out of the cache or from url.
   */
  Drupal.CTools.AJAX.clickAJAXCacheLink = function() {
      $this = $(this);
      if ($this.hasClass('ctools-fetching')) {
          $this.bind('ctools-cache-warm', function(event, data) {
              Drupal.CTools.AJAX.respond(data);
          });
          return false;
      } else {
          if ($this.hasClass('ctools-cache-warmed') && Drupal.CTools.AJAX.commandCache[$this.attr('href')]) {
              Drupal.CTools.AJAX.respond(Drupal.CTools.AJAX.commandCache[$this.attr('href')]);
              return false;
          } else {
              return Drupal.CTools.AJAX.clickAJAXLink.apply(this);
          }
      }
  };

  /**
   * Find a URL for an AJAX button.
   *
   * The URL for this gadget will be composed of the values of items by
   * taking the ID of this item and adding -url and looking for that
   * class. They need to be in the form in order since we will
   * concat them all together using '/'.
   */
  Drupal.CTools.AJAX.findURL = function(item) {
      var url = '';
      var url_class = '.' + $(item).attr('id') + '-url';
      $(url_class).each(
          function() {
              var $this = $(this);
              if (url && $this.val()) {
                  url += '/';
              }
              url += $this.val();
          });
      return url;
  };

  // Hide these in a ready to ensure that Drupal.ajax is set up first.
  $(function() {
      Drupal.ajax.prototype.commands.attr = function(ajax, data, status) {
          $(data.selector).attr(data.name, data.value);
      };


      Drupal.ajax.prototype.commands.redirect = function(ajax, data, status) {
          if (data.delay > 0) {
              setTimeout(function() {
                  location.href = data.url;
              }, data.delay);
          } else {
              location.href = data.url;
          }
      };

      Drupal.ajax.prototype.commands.reload = function(ajax, data, status) {
          location.reload();
      };

      Drupal.ajax.prototype.commands.submit = function(ajax, data, status) {
          $(data.selector).submit();
      }
  });
})(jQuery);

; /*})'"*/ ; /*})'"*/
/**
* @file Common data layer helper.
*/

(function($) {
  Drupal.behaviors.dataLayer = {

      /**
       * The language prefix list (no blank).
       *
       * @return {array}
       */
      langPrefixes: function langPrefixes() {
          var languages = Drupal.settings.dataLayer.languages,
              langList = [];

          for (var lang in languages) {
              if (languages[lang].prefix !== '') {
                  langList.push(languages[lang].prefix);
              }
          }
          return langList;

          // With Underscore.js dependency.
          //var list = _.pluck(Drupal.settings.datalayer.languages, 'prefix');
          //return _.filter(list, function(lang) { return lang });
      },

      /**
       * Drupal behavior.
       */
      attach: function() {
          return
      }

  };
})(jQuery);

; /*})'"*/ ; /*})'"*/
(function($) {
  Drupal.behaviors.colorboxNode = {
      // Lets find our class name and change our URL to
      // our defined menu path to open in a colorbox modal.
      attach: function(context, settings) {
          // Make sure colorbox exists.
          if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
              return;
          }

          // Mobile detection extracted from the colorbox module.
          // If the mobile setting is turned on, it will turn off the colorbox modal for mobile devices.
          if (settings.colorbox.mobiledetect && window.matchMedia) {
              // Disable Colorbox for small screens.
              var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
              if (mq.matches) {
                  return;
              }
          }

          $('.colorbox-node', context).once('init-colorbox-node-processed', function() {
              $(this).colorboxNode({
                  'launch': false
              });
          });

          // When using contextual links and clicking from within the colorbox
          // we need to close down colorbox when opening the built in overlay.
          $('ul.contextual-links a', context).once('colorboxNodeContextual').click(function() {
              $.colorbox.close();
          });
      }
  };

  // Bind our colorbox node functionality to an anchor
  $.fn.colorboxNode = function(options) {
      var settings = {
          'launch': true,
          'width': Drupal.settings.colorbox_node.width,
          'height': Drupal.settings.colorbox_node.height
      };

      $.extend(settings, options);

      var href = $(this).attr('data-href');
      if (typeof href == 'undefined' || href == false) {
          href = $(this).attr('href');
      }
      // Create an element so we can parse our a URL no matter if its internal or external.
      var parse = document.createElement('a');
      parse.href = href;

      if (!href) {
          alert(Drupal.t('No url found on element'));
      }

      // Lets add our colorbox link after the base path if necessary.
      var base_path = Drupal.settings.basePath;
      var path_prefix = Drupal.settings.pathPrefix;
      var pathname = parse.pathname;

      // Lets check to see if the pathname has a forward slash.
      // This problem happens in IE7/IE8
      if (pathname.charAt(0) != '/') {
          pathname = '/' + parse.pathname;
      }

      // If clean URL's are not turned on, lets check for that.
      var url = $.getParameterByName('q', href);
      if (base_path != '/') {
          if (url != '') {
              var link = pathname.replace(base_path, base_path + parse.search.replace('?q=', '?q=/' + path_prefix + 'colorbox/'));
          } else {
              var link = pathname.replace(base_path, base_path + path_prefix + 'colorbox/') + parse.search;
          }
      } else {
          if (url != '') {
              var link = base_path + parse.search.replace('?q=', '?q=/' + path_prefix + 'colorbox/');
          } else {
              var link = base_path + path_prefix + 'colorbox' + pathname + parse.search;
          }
      }

      // Bind Ajax behaviors to all items showing the class.
      var element_settings = {};

      // This removes any loading/progress bar on the clicked link
      // and displays the colorbox loading screen instead.
      element_settings.progress = {
          'type': 'none'
      };
      // For anchor tags, these will go to the target of the anchor rather
      // than the usual location.
      if (href) {
          element_settings.url = link;
          element_settings.event = 'click';
      }

      $(this).click(function() {
          var $this = $(this).clone();

          // Clear out the rel to prevent any confusion if not using the gallery class.
          if (!$this.hasClass('colorbox-node-gallery')) {
              $this.attr('rel', '');
          }

          // Lets extract our width and height giving priority to the data attributes.
          var innerWidth = $this.data('inner-width');
          var innerHeight = $this.data('inner-height');
          if (typeof innerWidth != 'undefined' && typeof innerHeight != 'undefined') {
              var params = $.urlDataParams(innerWidth, innerHeight);
          } else {
              var params = $.urlParams(href);
          }

          // If we did not find a width or height, lets use the default.
          if (params.innerHeight == undefined) params.innerHeight = settings.height;
          if (params.innerWidth == undefined) params.innerWidth = settings.width;

          params.html = '<div id="colorboxNodeLoading"></div>';
          params.onComplete = function() {
              $this.colorboxNodeGroup();
          }
          params.open = true;

          // Launch our colorbox with the provided settings
          $this.colorbox($.extend({}, Drupal.settings.colorbox, params));
      });

      // Log our click handler to our ajax object
      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);

      // Default to auto click for manual call to this function.
      if (settings.launch) {
          Drupal.ajax[base].eventResponse(this, 'click');
          $(this).click();
      }
  }

  // Allow for grouping on links to showcase a gallery with left/right arrows.
  // This function will find the next index of each link on the page by the rel
  // and manually force a click on the link to call that AJAX and update the
  // modal window.
  $.fn.colorboxNodeGroup = function() {
      // Lets do setup our gallery type of functions.
      var $this = $(this);
      var rel = $this.attr('rel');
      if (rel && $this.hasClass('colorbox-node-gallery')) {
          if ($('a.colorbox-node-gallery[rel="' + rel + '"]:not("#colorbox a[rel="' + rel + '"]")').length > 1) {
              $related = $('a.colorbox-node-gallery[rel="' + rel + '"]:not("#colorbox a[rel="' + rel + '"]")');

              // filter $related array by href, to have mutliple colorbox links to the same target
              // appear as one item in the gallery only
              var $related_unique = [];
              $related.each(function() {
                  $.findHref($related_unique, this.href);
                  if (!$.findHref($related_unique, this.href).length) {
                      $related_unique.push(this);
                  }
              });
              // we have to get the actual used element from the filtered list in order to get it's relative index
              var current = $.findHref($related_unique, $this.get(0).href);
              $related = $($related_unique);
              var idx = $related.index($(current));
              var tot = $related.length;

              // Show our gallery buttons
              $('#cboxPrevious, #cboxNext').show();
              $.colorbox.next = function() {
                  index = getIndex(1);
                  $related[index].click();
              };
              $.colorbox.prev = function() {
                  index = getIndex(-1);
                  $related[index].click();
              };

              // Setup our current HTML
              $('#cboxCurrent').html(Drupal.settings.colorbox.current.replace('{current}', idx + 1).replace('{total}', tot)).show();
              $('#cboxNext').html(Drupal.settings.colorbox.next).show();
              $('#cboxPrevious').html(Drupal.settings.colorbox.previous).show();

              var prefix = 'colorbox';
              // Remove Bindings and re-add
              // @TODO: There must be a better way?  If we don't remove it causes a memory to be exhausted.
              $(document).unbind('keydown.' + prefix);

              // Add Key Bindings
              $(document).bind('keydown.' + prefix, function(e) {
                  var key = e.keyCode;
                  if ($related[1] && !e.altKey) {
                      if (key === 37) {
                          e.preventDefault();
                          $.colorbox.prev();
                      } else if (key === 39) {
                          e.preventDefault();
                          $.colorbox.next();
                      }
                  }
              });
          }

          function getIndex(increment) {
              var max = $related.length;
              var newIndex = (idx + increment) % max;
              return (newIndex < 0) ? max + newIndex : newIndex;
          }

      }
  }

  // Find a colorbox link by href in an array
  $.findHref = function(items, href) {
      return $.grep(items, function(n, i) {
          return n.href == href;
      });
  };

  // Utility function to parse out our width/height from our url params
  $.urlParams = function(url) {
      var p = {},
          e,
          a = /\+/g, // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function(s) {
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

  // Utility function to return our data attributes for width/height
  $.urlDataParams = function(innerWidth, innerHeight) {
      return {
          'innerWidth': innerWidth,
          'innerHeight': innerHeight
      };
  };

  $.getParameterByName = function(name, href) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexString = "[\\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexString);
      var found = regex.exec(href);
      if (found == null)
          return "";
      else
          return decodeURIComponent(found[1].replace(/\+/g, " "));
  }

})(jQuery);

; /*})'"*/ ; /*})'"*/