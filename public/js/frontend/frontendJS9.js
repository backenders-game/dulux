(function ($) {

    //flex - video	
    $('.two-havles-video .js-play-button').click(function () {
      $(this).hide();
      $(this).closest('.video-container').find('.js-video-overlay').hide();
      $(this).closest('.video-container').find('.js-video-play').click();
    });
  
    $(".two-havles-video .js-video-play").click(function () {
      var $this = $(this),
        $videoPlayer = $this.closest('.video-container'),
        $videoPlayerIframe = $('.video-iframe', $videoPlayer);
  
      $videoPlayerIframe.prop('src', $(this).data('src'));
  
      $this.addClass('hide');
      $videoPlayerIframe.prop('src', $videoPlayerIframe.prop('src') + '&autoplay=1').removeClass('hide');
    });
  
    $(".full-hero-video .js-play-button").click(function () {
      var $this = $(this),
        $videoPlayer = $this.closest('.video-container'),
        $videoPlayerIframe = $('.video-iframe', $videoPlayer);
  
      $videoPlayerIframe.prop('src', $(this).data('src'));
  
      $this.addClass('hide');
      $videoPlayerIframe.prop('src', $videoPlayerIframe.prop('src') + '&autoplay=1').removeClass('hide');
  
      $(this).closest('.video-container').find('.js-video-overlay').hide();
      $(this).closest('.video-container').find('.js-video-play').click();
      $(".full-hero-video .video-placeholder").hide();
  
    });
  
    // Multi-cards match height.
    $(".multi-card .duo-card, .multi-card .promo-block, .multi-card .hero-content, .multi-card .hero-promo-block, .multi-card .promo-block-text").matchHeight();
    $(".multi-card .duo-card__txt, .multi-card .promo-content").matchHeight();
  
    // Add button container for multi-cards.
    $(".multi-card .flex-campaign .btn").wrap('<div class="btn_container">');
  
    //promo-block background fix in landing page
    $(".multi-card .promo-block").each(function () {
      var color = $(this).find(".promo-content").css("background-color");
      $(this).css("background-image", "none");
      $(this).css("background-color", color);
    });
  
    //hero-promo-block background fix in landing page
    $(".multi-card .hero-promo-block").each(function () {
      var color = $(this).find(".hero-promo-content").css("background-color");
      $(this).css("background-color", color);
    });
  
    //flex camp text only js 	
    $(".toggle-readmore").click(function () {
      $(this).hide();
      $(this).parent().parent().parent().find(".promo-block-text__intro").css("margin-top", "0");
      $(this).siblings(".ellipsis").hide();
      var readmore_text = $(this).parent().parent().parent().find(".toggle-readmoredetails").html();
      $(this).replaceWith(readmore_text);
      $(".multi-card .promo-block-text").css("height", "auto");
    });
  
  }(jQuery));
  
  ; /*})'"*/ ; /*})'"*/
  (function ($) {
  
    //Image gallery images height
    $(".image-gallery-detail").matchHeight({
      byRow: false
    });
    setTimeout(show_available_filters, 400);
  
    // 11 Images per gallery.
    $(".image-gallery").each(function () {
      if ($(this).find(".image-gallery-detail").length > 11) {
        $(this).find(".image-gallery-detail:gt(10)").hide();
        $(this).parent().find(".btn.btn-cf-showmoreimg").css("display", "inline-block");
      }
    });
  
    // Show more images button click.
    $("body").on("click", ".active .btn.btn-cf-showmoreimg", function (e) {
      e.preventDefault();
      $(".active .btn.btn-cf-showmoreimg").hide();
      filter_applied = $(".category-filter__item.filter-selected").data("filter");
      execute_cf_filter(filter_applied, true);
    });
  
    // Filter button click
    $(".image-gallery-filter .category-filter__item").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("filter-selected")) {
        $(this).removeClass("filter-selected");
        $(this).find("button").removeClass("btn-primary").addClass("btn-quaternary");
        $('.category-filter__item[data-filter="All"]').addClass("filter-selected");
        execute_cf_filter("All");
      } else {
        $(".image-gallery-filter .category-filter__item").removeClass("filter-selected");
        $(".image-gallery-filter .category-filter__item button").removeClass("btn-primary").addClass("btn-quaternary");
        $(this).addClass("filter-selected");
        $(this).find("button").removeClass("btn-quaternary").addClass("btn-primary");
        execute_cf_filter($(this).data("filter"));
      }
    });
  
    // Filter dropdown select
    $(".image-gallery-filter select").on("change", function (e) {
      e.preventDefault();
      $(e.currentTarget).find("option").removeClass("filter-selected");
      $(e.currentTarget).find("option:selected").addClass("filter-selected");
      execute_cf_filter($(e.currentTarget).find("option:selected").data("filter"));
    });
  
  }(jQuery));
  
  function show_available_filters() {
    var filter_values_available = [];
    var show_filter_values = [];
  
    $(".active .image-gallery-detail").each(function (index) {
      filter_values_available[index] = $.trim($(this).find(".image-gallery-item").data("filter"));
    });
  
    $(".category-filter__item").each(function (index) {
      show_filter_values[index] = $.trim($(this).data("filter"));
    });
  
    filter_values_available = array_remove_duplicates(filter_values_available);
    filter_values_available.push("All");
  
    show_filter_values = array_remove_duplicates(show_filter_values);
  
    if (filter_values_available.length > 2) {
      $(".image-gallery-filter .category-filter__label").css("display", "inline-block");
    } else {
      $(".image-gallery-filter .category-filter__label").hide();
    }
  
    $.each(show_filter_values, function (i, e) {
      if (filter_values_available.indexOf(e) > -1) {
        $('.category-filter__item[data-filter="' + e + '"]').show();
        if ($('.category-filter__item[data-filter="' + e + '"]').parent().is("span")) {
          $('.category-filter__item[data-filter="' + e + '"]').unwrap();
        }
      } else {
        $('.category-filter__item[data-filter="' + e + '"]').hide();
        if (!$('.category-filter__item[data-filter="' + e + '"]').parent().is("span")) {
          $('.category-filter__item[data-filter="' + e + '"]').wrap("<span>");
        }
      }
    });
  
    if ($('ul.category-filter__items > li').length < 3) {
      $('div.category-filter__content').hide();
      $('div.image-gallery-filter.category-filter-xs').hide();
    }
  
    // Desktop - Hide "All" filter.
    $('.image-gallery-filter.category-filter .category-filter__items .category-filter__item[data-filter="All"]').hide();
    // Desktop - 5 filters in a row.
    if ($(".image-gallery-filter.category-filter .category-filter__items .category-filter__item:visible").length > 5 && $(window).width() >= 991) {
      $(".image-gallery-filter.category-filter .category-filter__items .category-filter__item:visible:eq(4)").after("<br>");
    } else {
      $(".image-gallery-filter.category-filter .category-filter__items > br").remove();
    }
  
  }
  
  function execute_cf_filter(filter_value_selected, showmore) {
    if (!showmore) {
      showmore = false;
    }
  
    var filter_value;
    var filter_segments;
    var multiple_filter_values = [];
  
    Drupal.theme.addLoader();
    if (filter_value_selected == "All") {
      $(".active .image-gallery-detail").show();
    } else {
      $(".active .image-gallery-detail").each(function (index) {
        filter_value = $.trim($(this).find(".image-gallery-item").data("filter"));
  
        if (filter_value.indexOf(',') > -1) {
          multiple_filter_values = filter_value.split(',');
        } else {
          multiple_filter_values = [];
        }
  
        if (filter_value == filter_value_selected || multiple_filter_values.indexOf(filter_value_selected) > -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
    if (showmore == false) {
      showmoreimg_btn_display();
    }
    setTimeout(function () {
      rearrange_cf_grid_layout();
      back_to_top_button();
    }, 300);
    $(".image-gallery-detail").matchHeight({
      byRow: false
    });
    Drupal.theme.removeLoader();
  }
  
  var classes = ["color_futures_large_size col-sm-6", "color_futures_small_size col-sm-2", "color_futures_medium_size col-sm-4", "color_futures_small_size col-sm-2", "color_futures_large_size col-sm-6", "color_futures_medium_size col-sm-4", "color_futures_large_size col-sm-6", "color_futures_large_size col-sm-6", "color_futures_large_size col-sm-6", "color_futures_small_size col-sm-2", "color_futures_medium_size col-sm-4"];
  var i = 0;
  
  function rearrange_cf_grid_layout() {
    $(".active .image-gallery-detail:visible").each(function (index) {
      if (index % 11 == 0) {
        i = 0;
      }
      if ($(this).hasClass("col-sm-6") || $(this).hasClass("col-sm-4") || $(this).hasClass("col-sm-2")) {
        $(this).removeClass("col-sm-6 col-sm-4 col-sm-2 color_futures_large_size color_futures_medium_size color_futures_small_size");
      }
      $(this).addClass(classes[i]);
      i++;
    });
  }
  
  function showmoreimg_btn_display() {
    if ($(".active .image-gallery .image-gallery-detail:visible").length > 11) {
      $(".active .image-gallery .image-gallery-detail:visible:gt(10)").hide();
      $(".active .btn.btn-cf-showmoreimg").css("display", "inline-block");
    } else {
      $(".active .btn.btn-cf-showmoreimg").hide();
    }
  }
  
  function array_remove_duplicates(array) {
    var result = [];
    var comma_values = [];
    $.each(array, function (i, e) {
      if (e.indexOf(',') > -1) {
        comma_values = e.split(',');
        $.merge(result, comma_values);
      }
      if ($.inArray(e, result) == -1) {
        result.push(e);
      }
    });
    return result;
  }
  
  function reset_cf_filters() {
    //buttons
    $(".image-gallery-filter .category-filter__item").removeClass("filter-selected");
    $(".image-gallery-filter .category-filter__item button").removeClass("btn-primary").addClass("btn-quaternary");
    $('.image-gallery-filter .category-filter__item[data-filter="All"]').addClass("filter-selected");
    $('.image-gallery-filter .category-filter__item[data-filter="All"]').find("button").removeClass("btn-quaternary").addClass("btn-primary");
    //dropdown
    $(".category-filter-xs__item").prop("selected", true);
  }
  
  function back_to_top_button() {
    if ($(".active .image-gallery .back-to-top").length > 0) {
      if ($(".active .image-gallery-detail:visible").length > 6) {
        $(".active .image-gallery .back-to-top").css("display", "inline-block");
      } else {
        $(".active .image-gallery .back-to-top").hide();
      }
    }
  }; /*})'"*/ ; /*})'"*/
  (function ($) {
  
    var palette_indicator__markup;
    var image_indicators__markup;
    var next_palette;
    var next_gallery;
    var palette_title;
    var palette_number;
    var slide_number;
  
    if ($(".cf-container").length == 1) {
      $(".palette-indicators, .hue-selector__nav").hide();
      $(".carousel-inner > .item").addClass("active");
    } else {
  
      $(".cf-container").each(function (index) {
        $(this).addClass("cf-" + index);
        palette_number = index + 1;
        //#number for palette title
        palette_title = $(this).find(".color_palette_title").html();
        $(this).find(".color_palette_title").html("#" + palette_number + " " + palette_title);
  
        if (index == 0) {
          $(this).show();
          $(".cf-0 .carousel-inner > .item").addClass("active");
  
          //consecutive pallete indicators markup 
          palette_indicator__markup = '<li data-target="#palette-carousel" data-slide-to="' + index + '" class="active"></li>';
          $(".cf-0 .palette-indicators").append(palette_indicator__markup);
  
          //consecutive gallery indicators markup 
          image_indicators__markup = '<li data-target="#image-carousel" data-slide-to="' + index + '" class="active"></li>';
          $(".cf-0 .image-indicators").append(image_indicators__markup);
  
        } else {
          $(this).hide();
  
          //consecutive pallete indicators markup 
          palette_indicator__markup = '<li data-target="#palette-carousel" data-slide-to="' + index + '"></li>';
          $(".cf-0 .palette-indicators").append(palette_indicator__markup);
  
          //consecutive gallery indicators markup 
          image_indicators__markup = '<li data-target="#image-carousel" data-slide-to="' + index + '"></li>';
          $(".cf-0 .image-indicators").append(image_indicators__markup);
  
          //consecutive pallete markup 
          next_palette = $(this).find("#palette-carousel .carousel-inner > .item").detach();
          $(".cf-0 #palette-carousel .carousel-inner").append(next_palette);
  
          //consecutive gallery markup
          next_gallery = $(this).find("#image-carousel .carousel-inner > .item").detach();
          $(".cf-0 #image-carousel .carousel-inner").append(next_gallery);
  
        }
      });
    }
  
    //Click of palette indicators
    $(".palette-indicators li").click(function () {
      slide_number = $(this).data("slide-to");
      $('.image-indicators li[data-slide-to="' + slide_number + '"]').trigger("click");
      show_available_filters();
    });
  
    //On slide of pallette
    $('#palette-carousel').on('slide.bs.carousel', function (e) {
      slide_number = $(e.relatedTarget).index();
      change_img_gallery(slide_number);
    });
  
  
    /*  *******Colour Future container********  */
  
    //Change container for CF page
  
    var second_text_module_color;
  
    if ($(".cf-container").length > 0) {
      $(".panel-separator").hide();
      $("body").addClass("cf-page");
      $(".flex-campaign .margin-top-40").removeClass("margin-top-40");
      $(".flex-campaign.image-squircle-text-block").find(".hero-promo-content").removeClass("margin-bottom-xl");
  
      //Add colour future container class
      $(".flex-campaign").each(function (index) {
        if (index == 1) {
          second_text_module_color = $(this).find(".row > div").css("background-color");
        }
        if (index > 2) {
          $(this).addClass("cf-container");
        }
      });
  
      //Apply background color for pallete and image gallery
      $(".cf-container:eq(0)").parent().addClass("cf-container");
      $(".cf-container:eq(0)").parent().css("background-color", second_text_module_color);
  
      //last row
      $(".panels-flexible-row-last").addClass("cf-container");
      $(".panels-flexible-row-last").find(".flex-campaign").removeClass("cf-container");
  
      //hide multiple modals
      $(".image-gallery-modal").each(function (index) {
        if (index > 0) {
          $(this).remove();
        } else {
          $(this).removeClass("cf-container");
        }
      });
  
      //palette carousel margin
      $("#palette-carousel").addClass("margin-top-40");
    }
  
    // Back-to-top behaviour.
    $(".image-gallery .back-to-top").on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
    $(window).scroll(function () {
      $("#image-carousel .carousel-inner .item").addClass("js-no-transform");
      if ($(this).scrollTop() > $(window).height()) {
        $(".image-gallery .back-to-top").fadeIn();
      } else {
        $(".image-gallery .back-to-top").fadeOut();
      }
    });
  
  }(jQuery));
  
  function change_img_gallery(current_slide_number) {
    $('.image-indicators [data-slide-to="' + current_slide_number + '"]').trigger("click");
    show_available_filters();
    back_to_top_button();
    if ($(".active .image-gallery-detail:visible").length > 0) {
      reset_cf_filters();
      execute_cf_filter("All");
    }
  }; /*})'"*/ ; /*})'"*/
  (function ($) {
    $("body").on("click", ".cf-page .hue-selector__row .hue-selector__swatch", function () {
      // Get colorID and paletteId.
      var attr = $(this).attr('id');
      if (typeof attr !== typeof undefined && attr !== false) {
        var colorId_paletteId = $(this).attr("id");
        var splitId = colorId_paletteId.split("_");
        var colorId = splitId[0];
        var paletteId = splitId[1];
        // Add loader.
        Drupal.theme.addLoader();
  
        $.getJSON(Drupal.settings.basePath + Drupal.settings.pathPrefix + "color-palette/ajax?colorid=" + colorId + "&palletid=" + paletteId, function (color_palette_data) {
          // Open modal.
          $("#flex-modal-colour").modal();
          // Remove loader.
          Drupal.theme.removeLoader();
  
          // Color palette title.
          var colorPaletteTitle = color_palette_data.color_palette_title;
          if (colorPaletteTitle != null) {
            $(".cp-title").html(colorPaletteTitle);
          }
  
          // Color swatch title.
          var colorSwatchTitle = color_palette_data.colour_swatch_title;
          if (colorSwatchTitle != null) {
            $(".colour-information__title").html(colorSwatchTitle);
          }
  
          // Get the order for color swatches to be printed.
          var colorIdArr = [];
          $(".active .hue-selector__row .hue-selector__swatch").each(function () {
            var cId_pId = $(this).attr("id");
            var splitVal = cId_pId.split("_");
            var cId = splitVal[0];
            colorIdArr.push(cId);
          });
  
          // Print color swatches.
          var colorPaletteColors = color_palette_data.color_palette_colors;
          // Clear the swatch node.
          $(".swatch-selector").empty();
          var colorIdArrIndex = 0;
          for (var colorPaletteColor in colorPaletteColors) {
            var colorIdArrVal = colorIdArr[colorIdArrIndex];
            var colorSwatchData = {
              rgb: colorPaletteColors[colorIdArrVal].rgb,
              id: colorPaletteColors[colorIdArrVal].id
            }
            printColorSwatchMarkup(colorSwatchData);
            colorIdArrIndex++;
          }
  
          // On modal load update the swatch preview.
          var initial_colorSwatchPreviewData = {
            id: colorPaletteColors[colorId].id,
            rgb: colorPaletteColors[colorId].rgb,
            name: colorPaletteColors[colorId].name,
            cdpUrl: colorPaletteColors[colorId].color_url,
            plpUrl: colorPaletteColors[colorId].cta_url,
            ctaText: color_palette_data.cta_text
          };
          updateSwatchPreview(initial_colorSwatchPreviewData);
  
          // On modal load update the swatch checkmark.
          updateSwatchCheckMark(colorId);
  
          // On modal load update the tester block.
          var initial_colorTesterData = {
            testerAvailable: colorPaletteColors[colorId].tester_details.tester,
            testerTitle: color_palette_data.tester_title,
            testerImage: colorPaletteColors[colorId].tester_details.tester_image.src,
            testerImageAlt: colorPaletteColors[colorId].tester_details.tester_image.alt,
            testerPrice: colorPaletteColors[colorId].tester_details.price,
            ecomValid: colorPaletteColors[colorId].tester_details.validEcomData,
            testerColorId: colorPaletteColors[colorId].tester_details.color_id,
            testerArticleNumber: colorPaletteColors[colorId].tester_details.articlenumber
          };
          updateColorTesterBlock(initial_colorTesterData);
  
          // Changes on click of color swatch.
          $(".swatch-selector .swatch").on("click", function () {
            swatchColorId = $(this).attr("id");
  
            // Get respective swatch preview data.
            var colorSwatchPreviewData = {
              id: colorPaletteColors[swatchColorId].id,
              rgb: colorPaletteColors[swatchColorId].rgb,
              name: colorPaletteColors[swatchColorId].name,
              cdpUrl: colorPaletteColors[swatchColorId].color_url,
              plpUrl: colorPaletteColors[swatchColorId].cta_url,
              ctaText: color_palette_data.cta_text
            };
  
            // Update the swatch preview.
            updateSwatchPreview(colorSwatchPreviewData);
  
            // Handle checkmark.
            updateSwatchCheckMark(swatchColorId);
  
            // Get respective swatch tester data.
            var colorTesterData = {
              testerAvailable: colorPaletteColors[swatchColorId].tester_details.tester,
              testerTitle: color_palette_data.tester_title,
              testerImage: colorPaletteColors[swatchColorId].tester_details.tester_image.src,
              testerImageAlt: colorPaletteColors[swatchColorId].tester_details.tester_image.alt,
              testerPrice: colorPaletteColors[swatchColorId].tester_details.price,
              ecomValid: colorPaletteColors[swatchColorId].tester_details.validEcomData,
              testerColorId: colorPaletteColors[swatchColorId].tester_details.color_id,
              testerArticleNumber: colorPaletteColors[swatchColorId].tester_details.articlenumber
            };
  
            // Update the tester block.
            updateColorTesterBlock(colorTesterData);
          });
  
          // Get visualizer data and display the block.
          var visualizerData = {
            visualizerAvailable: color_palette_data.visualizer.visualizer_available,
            visualizerDetail: color_palette_data.visualizer.visualizer_detail,
            title: color_palette_data.visualizer.visualizer_title,
            playStoreUrl: color_palette_data.visualizer.playstore_url,
            appStoreUrl: color_palette_data.visualizer.appstore_url
          };
          updateVisualizerBlock(visualizerData);
  
        });
      }
    });
  }(jQuery));
  
  // Function to print color swatch markup.
  function printColorSwatchMarkup(colorSwatchData) {
    if (colorSwatchData.id != "" && colorSwatchData.rgb != "") {
      var colorSwatchMarkup = '<div id="' + colorSwatchData.id + '" class="swatch seven-five contrast-check contrast-check" style="background-color:#' + colorSwatchData.rgb + ';">' +
        '<div class="">' +
        '<div class="swatch__checkmark">' +
        '<span></span>' +
        '<svg class="icon icon-checkmark">' +
        '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-checkmark"></use>' +
        '</svg>' +
        '</div>' +
        '</div>' +
        '</div>';
  
      $(".swatch-selector").append(colorSwatchMarkup);
      $(".swatch-selector .swatch").each(function () {
        getContrastClass($(this)[0]);
      });
    }
  }
  
  // Function to update the color swatch checkmark.
  function updateSwatchCheckMark(colorSwatchId) {
    $(".swatch__checkmark").hide();
    $(".swatch-selector #" + colorSwatchId).find(".swatch__checkmark").show();
  }
  
  // Function to update color swatch preview.
  function updateSwatchPreview(colorSwatchPreviewData) {
    var swatchPreviewer = $(".swatch-overview");
    swatchPreviewer.css("background-color", "#" + colorSwatchPreviewData.rgb);
    swatchPreviewer.find(".swatch-name").html(colorSwatchPreviewData.name);
    swatchPreviewer.find(".swatch-cdp-link").attr("href", colorSwatchPreviewData.cdpUrl);
    swatchPreviewer.find(".swatch-cta-link-m").attr("href", colorSwatchPreviewData.plpUrl);
    swatchPreviewer.find(".swatch-cta-link").attr("onClick", "window.location.href='" + colorSwatchPreviewData.plpUrl + "'");
    swatchPreviewer.find(".swatch-cta").html(colorSwatchPreviewData.ctaText);
    swatchPreviewer.find(".colorModal-sb").attr("data-colorid", colorSwatchPreviewData.id);
    getContrastClass(swatchPreviewer[0]);
    updateScrapbookIcon(colorSwatchPreviewData.id);
  }
  
  // Function to update color tester block.
  function updateColorTesterBlock(colorTesterData) {
    if (colorTesterData.testerAvailable) {
      $(".colour-tester-block").show();
      var colorTesterBlock = $(".colour-tester");
      colorTesterBlock.find(".colour-tester__title").html(colorTesterData.testerTitle);
      colorTesterBlock.find(".colour-tester__img img").attr("src", colorTesterData.testerImage);
      colorTesterBlock.find(".colour-tester__img img").attr("alt", colorTesterData.testerImageAlt);
      if (colorTesterData.testerPrice != null) {
        colorTesterBlock.find(".tester-price").show();
        colorTesterBlock.find(".tester-price").html(colorTesterData.testerPrice);
      } else {
        colorTesterBlock.find(".tester-price").hide();
      }
      if (colorTesterData.ecomValid != null) {
        colorTesterBlock.find(".bttn.ecom").show();
        colorTesterBlock.find(".bttn.primary").hide();
        colorTesterBlock.find(".bttn.ecom").attr("data-colorid", colorTesterData.testerColorId);
        colorTesterBlock.find(".bttn.ecom").attr("data-articlenumber", colorTesterData.testerArticleNumber);
      } else {
        colorTesterBlock.find(".bttn.ecom").hide();
        colorTesterBlock.find(".bttn.primary").show();
      }
    } else {
      $(".colour-tester-block").hide();
    }
  }
  
  // Function to update visualizer block.
  function updateVisualizerBlock(visualizerData) {
    if (visualizerData.visualizerAvailable && visualizerData.visualizerDetail != null) {
      $(".visualizer-block").show();
      var visualizerBlock = $(".visualizer-app");
      visualizerBlock.find(".visualizer-title").html(visualizerData.title);
      if (typeof visualizerData.playStoreUrl !== "undefined") {
        visualizerBlock.find(".link-download-google").show();
        visualizerBlock.find(".link-download-google").attr("href", visualizerData.playStoreUrl);
      } else {
        visualizerBlock.find(".link-download-google").hide();
      }
      if (typeof visualizerData.appStoreUrl !== "undefined") {
        visualizerBlock.find(".link-download-apple").show();
        visualizerBlock.find(".link-download-apple").attr("href", visualizerData.appStoreUrl);
      } else {
        visualizerBlock.find(".link-download-apple").hide();
        visualizerBlock.find(".link-download-google .download-google").css({
          "left": "auto",
          "right": "20px"
        });
      }
    } else {
      $(".visualizer-block").hide();
    }
  }; /*})'"*/ ; /*})'"*/