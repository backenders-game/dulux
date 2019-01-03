//-

jQuery(document).ready(function () {
    var xhr;
    $ = jQuery;
  
    setTextColor();
  
  
    //    $(".scrapbook-box").hover(function(){    	
    //        $('.scrapbook-remove').each(function(index, value) {
    //            $(this).css('visibility','hidden');                
    //        });
    //    	   
    //    	$(this).find('.scrapbook-remove').css('visibility','visible');
    //    });  
    //    
  
    //Scrap book enable close button in mobile and tablet view 
    var windoWidth = $(window).width();
    if (windoWidth < 786) {
  
      $('.scrapbook-remove').each(function (index, value) {
        $(this).css('visibility', 'visible');
      });
  
    }
  
    $('body').on('click', '.scrap-book-add-color', function (e) {
      var cid = $(this).attr('data-colorid');
      var type = $(this).attr('data-type');
      if ($('body').hasClass('page-node')) {
        if (typeof $('.page-header').text() != 'undefined' && $('.page-header').text() != '') {
          analyticsEventCall('Scrapbook', 'Save colour', $('.page-header').text() + " | " + cid, undefined, false);
        }
      } else if ($('body').hasClass('page-colors-listing')) {
        if (typeof $('.colour-info-link').attr('data-colorname') != 'undefined' && $('.colour-info-link').attr('data-colorname') != '') {
          analyticsEventCall('Scrapbook', 'Save colour', $('.colour-info-link').attr('data-colorname') + " | " + cid, undefined, false);
        }
      }
  
      var url = Drupal.settings.basePath + "platform-scrapbook-add-ajax?cid=" + cid + "&type=" + type;
  
  
      //        Drupal.theme('flmsg',$type);
      //        if(xhr && xhr.readystate != 4){
      //            xhr.abort();
      //        }        
      xhr = $.ajax({
        type: 'GET',
        dataType: "html",
        context: this,
        url: url,
        success: function (data) {
          var objColor = JSON.parse(data);
          var objSize = objColor.data.size;
          $('.desktop-icon div a span').html(objSize);
          notificationBars.notifyFavourites(Drupal.settings.navbar_details.sb_color_notification_text,
            Drupal.settings.navbar_details.sb_notification_link_text,
            Drupal.settings.navbar_details.sb_url);
          $(this).addClass("active fl-in-sb");
          $('.scrap-color-' + cid).addClass("fl-in-sb");
          $('.color-box-child-' + cid).attr("data-scrap", "set").addClass("fl-cb-in-sb");
  
        }
      });
  
      //avoid redirect to colour detail page		
      if ($(this).hasClass("colour-combinations__sb-icon")) {
        e.preventDefault();
        e.stopPropagation();
      }
  
    });
  
    $('body').on('click', '.scrap-book-add-product-color', function () {
      var pid = $(this).attr('data-globalid');
      var cid = $(this).attr('data-colorid');
      var type = $(this).attr('data-type');
      var articleid = $(this).attr('data-articleid');
      if ($('body').hasClass('node-type-platform-product')) {
        var prdname = $('.product-name > div').text();
      } else if ($('body').hasClass('page-products-listing')) {
        var prdname = $(this).parents('.views-row').find('.views-field-title-field .prd-dtls h3').text();
      }
  
      if (typeof prdname != 'undefined' && prdname != '') {
        analyticsEventCall('Scrapbook', 'Save product', prdname + " | " + pid, undefined, false);
      }
      var url = Drupal.settings.basePath + "platform-scrapbook-add-ajax?cid=" + cid + "&type=" + type + "&pid=" + pid;
      if (typeof articleid != 'undefined' && articleid != '') {
        url = url + "&articleid=" + articleid;
      }
      xhr = $.ajax({
        type: 'GET',
        dataType: "html",
        context: this,
        url: url,
        success: function (data) {
          var objColor = JSON.parse(data);
          var objSize = objColor.data.size;
          $('.desktop-icon div a span').html(objSize);
          notificationBars.notifyFavourites(Drupal.settings.navbar_details.sb_product_notification_text,
            Drupal.settings.navbar_details.sb_notification_link_text,
            Drupal.settings.navbar_details.sb_url);
          $(this).addClass("active fl-in-sb");
        }
      });
    });
  
    $('body').on('click', '.scrap-book-add-product', function () {
      var pid = $(this).attr('data-globalid');
      var type = $(this).attr('data-type');
      var articleid = $(this).attr('data-articleid');
      if ($('body').hasClass('node-type-platform-product')) {
        var prdname = $('.product-name > div').text();
      } else if ($('body').hasClass('page-products-listing')) {
        var prdname = $(this).parents('.views-row').find('.views-field-title-field .prd-dtls h3').text();
      }
  
      if (typeof prdname != 'undefined' && prdname != '') {
        analyticsEventCall('Scrapbook', 'Save product', prdname + " | " + pid, undefined, false);
      }
      var url = Drupal.settings.basePath + "platform-scrapbook-add-ajax?type=" + type + "&pid=" + pid;
      if (typeof articleid != 'undefined' && articleid != '') {
        url = url + "&articleid=" + articleid;
      }
      xhr = $.ajax({
        type: 'GET',
        dataType: "html",
        context: this,
        url: url,
        success: function (data) {
          var objColor = JSON.parse(data);
          var objSize = objColor.data.size;
          $('.desktop-icon div a span').html(objSize);
          notificationBars.notifyFavourites(Drupal.settings.navbar_details.sb_product_notification_text,
            Drupal.settings.navbar_details.sb_notification_link_text,
            Drupal.settings.navbar_details.sb_url);
          $(this).addClass("active fl-in-sb");
        }
      });
    });
  
    $('.scrap-book-add-od-products').click(function () {
      var pid = $(this).attr('data-globalid');
      var type = $(this).attr('data-type');
      var articleid = $(this).attr('data-articleid');
      var colorId = $(this).attr('data-colorid');
      if ($('body').hasClass('node-type-platform-product')) {
        var prdname = $('.product-name > div').text();
      } else if ($('body').hasClass('page-products-listing')) {
        var prdname = $(this).parents('.views-row').find('.product-card-container .product-card .product-card__content .product-card__title').text();
      }
  
      if (typeof prdname != 'undefined' && prdname != '') {
        analyticsEventCall('Scrapbook', 'Save product', prdname + " | " + pid, undefined, false);
      }
      var url = Drupal.settings.basePath + "platform-scrapbook-add-ajax?type=" + type + "&pid=" + pid;
      if (typeof articleid != 'undefined' && articleid != '') {
        url = url + "&articleid=" + articleid;
      }
      if (typeof colorId != 'undefined' && colorId != '') {
        url = url + "&cid=" + colorId;
      }
      xhr = $.ajax({
        type: 'GET',
        dataType: "html",
        context: this,
        url: url,
        success: function (data) {
          var objColor = JSON.parse(data);
          var objSize = objColor.data.size;
          $('.brandbar-controls-list__count').html(objSize);
          notificationBars.notifyFavourites(Drupal.settings.navbar_details.sb_product_notification_text,
            Drupal.settings.navbar_details.sb_notification_link_text,
            Drupal.settings.navbar_details.sb_url);
          $(this).addClass("fl-in-sb");
          $(this).addClass("active");
        }
      });
    });
  
    $('body').on('click', '.scrap-book-add-article', function () {
      var aid = $(this).attr('data-article-nid');
      var type = $(this).attr('data-type');
      if ($('body').hasClass('page-node')) {
        if (typeof $('.page-header').text() != 'undefined' && $('.page-header').text() != '') {
          var articleTitle = $('.page-header').text();
          analyticsEventCall('Scrapbook', 'Save article', articleTitle, undefined, false);
        }
      }
  
      var url = Drupal.settings.basePath + "platform-scrapbook-add-ajax?type=" + type + "&aid=" + aid;
      xhr = $.ajax({
        type: 'GET',
        dataType: "html",
        context: this,
        url: url,
        success: function (data) {
          var objColor = JSON.parse(data);
          var objSize = objColor.data.size;
          $('.desktop-icon div a span').html(objSize);
          notificationBars.notifyFavourites(Drupal.settings.navbar_details.sb_article_notification_text,
            Drupal.settings.navbar_details.sb_notification_link_text,
            Drupal.settings.navbar_details.sb_url);
          $(this).addClass("active fl-in-sb");
          //Drupal.theme('flmsg',data);            	
        }
      });
    });
  
    scrpShowLblFlg = true;
    $('div.show-more-lbl-holder').click(function () {
      $(this).parent().find('.scrp-book-mobile-text').toggleClass('expended');
      if (scrpShowLblFlg) {
        $(this).find('svg.icon-show-more').css('display', 'none');
        $(this).find('svg.icon-show-less').css('display', 'inline-block');
        scrpShowLblFlg = false;
        $(this).find('span.lbl').html(Drupal.t('Show less'));
  
      } else {
        $(this).find('svg.icon-show-more').css('display', 'inline-block');
        $(this).find('svg.icon-show-less').css('display', 'none');
        scrpShowLblFlg = true;
        $(this).find('span.lbl').html(Drupal.t('Show more'));
      }
    });
  
  
    $(".scrapbook-remove").on("click", function (e) {
      //Event triggers parent class click
      e.stopPropagation();
      Drupal.theme.addLoader();
      var scrapid = $(this).attr('data-scrapid');
      var itemid = $(this).attr('data-itemid');
      var itemType = $(this).attr('data-scrap-type');
      var eventAction = itemType;
      var itemTitle = $(this).attr('data-scrap-title');
      var itemGlobalId = $(this).attr('data-global-id');
      var itemValue = itemTitle + ' | ' + itemGlobalId;
  
      if (typeof itemType !== undefined && typeof itemGlobalId !== undefined) {
        //remove ID for article
        if (itemType == 'article') {
          itemValue = itemTitle;
        }
        if (itemType == 'product-color') {
          eventAction = 'product';
        }
        analyticsEventCall('Scrapbook', 'Delete ' + eventAction, itemValue, undefined, false);
      }
  
      var url = Drupal.settings.basePath + "platform-scrapbook-delete-ajax?scrapid=" + scrapid + "&itemid=" + itemid + "&itemtype=" + itemType;
      if (xhr && xhr.readystate != 4) {
        xhr.abort();
      }
      xhr = $.ajax({
        type: 'GET',
        dataType: "html",
        url: url,
        async: false,
        success: function (data) {
          //alert(data);
          // Drupal.theme('flmsg',data);
          location.reload();
          //$(".scrapbox-id-"+itemid).remove();
        }
      });
    });
  
    $("span#scrap-book-top-block-close").on("click", function () {
      $("#scrap-book-top-block").hide();
    });
  
  
    $("#scrap-book-messge-close").on("click", function () {
      $("#scrap-book-messge").hide();
    });
  
    // For the contact-us page : remove the text on click of the text area
    $("#edit-submitted-message").focus(function () {
      if (this.value == 'Reason for contacting us') {
        this.value = '';
      }
    });
  
    //redirect to color node on click of color in scrapbook listing
    $(".scrap-book-color-pallets-link").on("click", function () {
      if (typeof $(this).attr('data-url') !== undefined) {
        var url = Drupal.settings.basePath + $(this).attr('data-url');
        window.location.href = url;
      }
    });
  
    $('body').on('click', '.scrapbook-add-to-shoppinglist', function () {
      var colorRgb = $(this).attr('data-color-rgb');
      var colorName = $(this).attr('data-colorname');
      var colorNid = $(this).attr('data-color-nid');
      var productNid = $(this).attr('data-product-nid');
      $.cookie("product_color_rgb", null, {
        path: '/'
      });
      $.cookie("product_color_name", null, {
        path: '/'
      });
      $.cookie("product_color_nid", null, {
        path: '/'
      });
      $.cookie("product_nid", null, {
        path: '/'
      });
      $.cookie("product_color_rgb", colorRgb, {
        expires: 30,
        path: '/'
      });
      $.cookie("product_color_name", colorName, {
        expires: 30,
        path: '/'
      });
      $.cookie("product_color_nid", colorNid, {
        expires: 30,
        path: '/'
      });
      $.cookie("product_nid", productNid, {
        expires: 30,
        path: '/'
      });
      window.location.href = $(this).attr('data-url');
    });
  });
  
  
  function contrastingColor(color) {
    return (luma(color) >= 165) ? '666' : 'FFF';
  }
  
  // color can be a hx string or an array of RGB values 0-255
  function luma(color) {
    var rgb = (typeof color === 'string') ? hexToRGBArray(color) : color;
    return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]); // SMPTE C, Rec. 709 weightings
  }
  
  function flpad(str, max) {
    str = str.toString();
    return str.length < max ? flpad("0" + str, max) : str;
  }
  
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
    $ = jQuery;
    var cid = colorid;
    if ($('body').hasClass('page-colors-listing')) {
      if (typeof $('#colourInfo > a').data('colorname') != 'undefined' && $('#colourInfo > a').data('colorname') != '') {
        analyticsEventCall('Scrapbook', 'Save colour', upperFirsctchar($('#colourInfo > a').data('colorname')) + " | " + cid, undefined, false);
      }
    }
    ////        var type = data.attr('data-type');
    var url = Drupal.settings.basePath + "platform-scrapbook-add-ajax?cid=" + cid + "&type=" + type;
    ////        if(xhr && xhr.readystate != 4){
    ////            xhr.abort();
    ////        }        
    xhr = $.ajax({
      type: 'GET',
      dataType: "html",
      async: false,
      url: url,
      success: function (data) {
        var objColor = JSON.parse(data);
        var objSize = objColor.data.size;
        $('.desktop-icon div a span').html(objSize);
        notificationBars.notifyFavourites(Drupal.settings.navbar_details.sb_color_notification_text,
          Drupal.settings.navbar_details.sb_notification_link_text,
          Drupal.settings.navbar_details.sb_url);
        var currentclass = current.getAttribute("class");
        currentclass = currentclass + " fl-in-sb";
        current.setAttribute("class", currentclass);
        var currentdColorid = current.getAttribute("data-colorid");
        //set teal for info section
        $(".scrap-color-" + currentdColorid).addClass("fl-in-sb");
        $('.scrap-color-' + currentdColorid).addClass("fl-in-sb");
        $('.color-box-child-' + currentdColorid).attr("data-scrap", "set").addClass("fl-cb-in-sb");
      }
    });
  }
  
  function setTextColor() {
    //set color text
    $('.color-text').each(function (index, value) {
      var rgb = $(this).attr('data-rgb');
      var bg_text = contrastingColor(rgb);
      $(this).css("color", "#" + bg_text);
    });
  }; /*})'"*/ ; /*})'"*/
  /**
   * @file
   * Gigya comments
   */
  (function ($) {
    /**
     * @todo Undocumented Code!
     */
    Drupal.gigya.addDrupalComment = function (eventObj) {
      var data = {
        'commentText': eventObj.commentText,
        'UIDSignature': eventObj.user.UIDSignature,
        'uid': eventObj.user.UID,
        'timestamp': eventObj.user.signatureTimestamp,
        'nid': Drupal.settings.gigyaComments.commentsUIparams.streamID
      };
      var base = eventObj.context.id;
      var element_settings = {};
      element_settings.url = '/gigya/comments';
      element_settings.event = 'gigyaComments';
      var ajax = new Drupal.ajax(base, $('#' + eventObj.context.id), element_settings);
      ajax.options.data = data;
      $(ajax.element).trigger('gigyaComments');
    };
  
    /**
     * @todo Undocumented Code!
     */
    Drupal.behaviors.gigya_comments = {
      attach: function (context) {
        if (typeof gigya !== 'undefined') {
          if (typeof Drupal.settings.gigyaComments !== 'undefined') {
            Drupal.settings.gigyaComments.commentsUIparams.onCommentSubmitted = Drupal.gigya.addDrupalComment;
            gigya.comments.showCommentsUI(Drupal.settings.gigyaComments.commentsUIparams);
          } else {
            return false;
          }
        }
      }
    };
  })(jQuery);
  
  
  ; /*})'"*/ ; /*})'"*/
  /**
   * @file
   * AddThis javascript actions.
   */
  
  (function ($) {
    Drupal.behaviors.addthis = {
      scriptLoaded: false,
  
      attach: function (context, settings) {
  
        // The addthis configuration is not loaded but the settings are passed
        // to do so.
        if (!this.isConfigLoaded() && this.isSettingsLoaded()) {
          // Initialize config.
          this.initConfig();
  
          // Load widget js.
          if (!this.scriptLoaded) {
            this.loadDomready();
          }
        }
        // The addthis configuration is not loaded but no setting are available
        // to load anything.
        else if (!this.isConfigLoaded() && !this.isSettingsLoaded()) {
          // Do nothing
        }
  
        // Trigger ready on ajax attach.
        if (context != window.document) {
          Drupal.behaviors.addthis.ajaxLoad(context, settings);
        }
  
      },
  
      // Returns if the settings defined by the addthis module are loaded.
      isSettingsLoaded: function () {
        if (typeof Drupal.settings.addthis == 'undefined') {
          return false;
        }
        return true;
      },
  
      // Returns if the configuration variables needed for widget.js are defined.
      isConfigLoaded: function () {
        if (typeof addthis_config == 'undefined' || typeof addthis_share == 'undefined') {
          return false;
        }
        return true;
      },
  
      initConfig: function () {
        addthis_config = Drupal.settings.addthis.addthis_config;
        addthis_share = Drupal.settings.addthis.addthis_share;
      },
  
      // Load the js library when the dom is ready.
      loadDomready: function () {
        // If settings asks for loading the script after the dom is loaded, then
        // load the script here.
        if (!this.scriptLoaded &&
          this.isConfigLoaded() &&
          Drupal.settings.addthis.domready) {
          $.getScript(Drupal.settings.addthis.widget_url, Drupal.behaviors.addthis.scriptReady);
        }
      },
  
      // Callback for loading the widget.js dynamically.
      scriptReady: function () {
        this.scriptLoaded = true;
      },
  
      // Called when a ajax request returned.
      ajaxLoad: function (context, settings) {
        if (typeof window.addthis != 'undefined' &&
          typeof window.addthis.toolbox == 'function') {
          window.addthis.toolbox('.addthis_toolbox');
        }
      }
  
    };
  
    // This load the config in time to run any addthis functionality.
    if (Drupal.behaviors.addthis.isConfigLoaded()) {
      addthis_config = Drupal.settings.addthis.addthis_config;
      addthis_share = Drupal.settings.addthis.addthis_share;
    }
  
  }(jQuery));; /*})'"*/ ; /*})'"*/