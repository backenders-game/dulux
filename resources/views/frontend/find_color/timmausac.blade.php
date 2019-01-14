@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('cssPage')
  @include('frontend.includes.css.findColorCss')
  <style type="text/css">
    .main-container {
        padding-left: 1.08em !important;
        padding-right: 1.08em !important;
    }
    .colors-content {
        margin-top: 2.14em !important;
    }
  </style>
@endsection
@section('content')
<div id="zone-content" class="zone-content">
  <div class="main-container container">
    <!-- /#page-header -->
    <div class="row">
      <section class="col-sm-12">
        <!--   -->
        <a id="main-content"></a>
        <h1 class="page-header">Tìm màu sắc</h1>
        <div class="region region-content">
          <div id="full-form-wrapper">
            <form class="flourish-colors-listing form-counter" action="/vi/mau-sac-bang-mau" method="post" id="flourish-colors-listing-solr-form--2" accept-charset="UTF-8">
              <div>
                <button style="display:none" id="edit-filters-reset-link--2" name="filters_reset_link" value="Reset Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="25">Reset Filters</button>
                <button style="display:none" id="edit-finish-filters-reset-link--2" name="finish_filters_reset_link" value="Reset Finish Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="26">Reset Finish Filters</button>
                <button style="display:none" id="edit-surface-usage-filters-reset-link--2" name="surface_usage_filters_reset_link" value="Reset Surface Type Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="27">Reset Surface Type Filters</button>
                <button style="display:none" id="edit-room-type-filters-reset-link--2" name="room_type_filters_reset_link" value="Reset Room Type Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="28">Reset Room Type Filters</button>
                <div class="colour-palette-wrapper">
                  <div id="block-views-color-display-block" class="colors_fieldset">
                    <h2 class="block__title block-title block-title text-center">Tôi đang quan tâm đến tông màu…</h2>
                  </div>
                  @include('frontend.find_color.includes.color_hue_selector')
                  @include('frontend.find_color.includes.color_filters')
                  <div class="filter-section bar-desktop visible">
                    <div class="bar-title">Bộ lọc của tôi</div>
                    <div id="filter-selections" class="filter-labels">
                        <a class="remove reset-filter reset-color-filter-room-type" id="Hành lang" data-tid="Hành lang data-field=" selected_room_type "=" "
                            data-fname="Hành lang ">
                            <div id="selected_room_type "
                                class="fl-color-selections label ">
                                <span class="fltr-selection " id="Hành lang " data-tid="Hành lang ">
                                Hành lang
                                <svg class="icon ">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink " xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2 ">
                                    </use>
                                </svg>
                                </span>
                            </div>
                        </a>
                        <a class="remove reset-filter reset-color-filter-surface " id="Trần nhà " data-tid="Trần nhà " data-field="selected_surface " data-fname="Trần nhà ">
                            <div id="selected_surface " class="fl-color-selections label ">
                                <span class="fltr-selection " id="Trần nhà " data-tid="Trần nhà ">
                                Trần nhà
                                <svg class="icon ">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink " xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2 "></use>
                                </svg>
                                </span>
                            </div>
                        </a>
                        <a class="remove reset-filter reset-color-filter-finish " id="Bề Mặt Mờ " data-tid="Bề Mặt Mờ data-field=" selected_finish"="" data-fname="Bề Mặt Mờ">
                            <div id="selected_finish" class="fl-color-selections label">
                                <span class="fltr-selection" id="Bề Mặt Mờ" data-tid="Bề Mặt Mờ">
                                Bề Mặt Mờ
                                <svg class="icon">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2"></use>
                                </svg>
                                </span>
                            </div>
                        </a>
                    </div>
                    <a href="#" class="filter-reset inline-text-link primary btn-clear" tabindex="75" style="display: none;">Khởi tạo lại bộ lọc</a>
                  </div>
                  <div class="results-bar">
                    <a href="#" class="filter-reset inline-text-link primary btn-clear" tabindex="76" style="display: none;">Khởi tạo lại bộ lọc</a>
                    <button id="filter_results_btn" class="bttn primary bttn-auto-width pull-right" tabindex="77">  212 Kết quả</button>
                  </div>
                  <section class="filtering">
                    <div class="row">
                      <div class="filter-zone">
                        <section id="color-box-container" class="col-sm-12">
                          <div class="color-travels no-padding">
                            <ul class="color-travels-options">
                              <li class="first travel-list">
                                <a href="#" data-type="list" title="List View" class="travel-list-view travel-option" tabindex="78">List View</a>
                              </li>
                              <li class="first travel-grid">
                                <a href="#" data-type="grid" title="Grid View" class="travel-grid-view on travel-option" tabindex="79">Grid View</a>
                              </li>
                            </ul>
                          </div>
                          <div class="icon-plus-text ipt-icon-settings right">
                            Bộ lọc
                            <svg class="icon icon-settings">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-settings"></use>
                            </svg>
                          </div>
                          <span class="count-label totalInputCount">0</span>
                        </section>
                      </div>
                      <div class="sharktooth small white visible-xs"></div>
                    </div>
                  </section>
                </div>
                <div class="sharktooth brand-grey hidden-xs"></div>
                <div class="row colors-content focus-outline">
                  <div class="store-links-solr tabs col-xs-12">
                    <span class="store-links tab-link col-lg-6 col-md-6 col-sm-6 col-xs-6 boxshadow-class"
                        style="float:left" tabindex="80">
                        <button class="color-mixed-by-computer colors-ready-to-buy use-ajax  btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed" style="opacity: 1; height: 58px;"
                            id="edit-colors-ready-to-buy--2" name="colors_ready_to_buy"
                            value="0" type="button" tabindex="81">Màu pha sẵn
                        </button>
                    </span>
                    <span class="store-links tab-link col-lg-6 col-md-6 col-sm-6 col-xs-6 boxshadow-class" style="float:left" tabindex="82">
                        <button class="color-mixed-by-computer colors-ready-to-mix use-ajax active btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed" style="opacity: 4; height: 58px;"
                            id="edit-colors-ready-to-mix--2" name="colors_ready_to_mix"
                            value="1" type="button" tabindex="83">Màu pha bằng máy vi tính
                        </button>
                    </span>
                  </div>
                  <div class="container colors-listing-box" id="color-box-container">
                    <div id="hue-container" class="col-md-12 colors clearfix fl-overflow-visible">
                      <p class="h1"><span class="main-color-tab">Màu sắc phổ biến (25)</span><span class="link-gray pull-right hidden-xs sub-color-tab main"><button data-link="all" class="use-ajax btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed" style="opacity:4" id="edit-show-colors-link--2" name="show_colors_link" value="Xem tất cả các màu  (212)" type="button" tabindex="84">Xem tất cả các màu  (212)</button>
                        </span>
                      </p>
                      <div id="popular-colors-list">
                        <div class="solr-pure-color-list">
                          <div class="solr-pure-color-name">
                            <h2 class="color-type">Họ màu trắng</h2>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166298 colorBox-processed flourish_google_tag_manager-processed" style="background:#F4F0E4" data-title="61YY 89/040" data-id="F4F0E4" data-colorid="1166298" alt="61YY 89/040" tabindex="85">
                              <p class="cnme color-text" data-rgb="F4F0E4" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">61YY 89/040</p>
                            </a>
                          </div>
                        </div>
                        <div class="solr-muted-color-list">
                          <div class="solr-muted-color-name">
                            <h2 class="color-type muted_clrs">Trắng trầm</h2>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166302 colorBox-processed flourish_google_tag_manager-processed" style="background:#EFE8DF" data-title="20YY 83/038" data-id="EFE8DF" data-colorid="1166302" alt="20YY 83/038" tabindex="97">
                              <p class="cnme color-text" data-rgb="EFE8DF" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">20YY 83/038</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="color-lister-bottom-new colors-listing-box-bottom">
                        <h2>Tôi không thể tìm thấy màu sắc mong muốn</h2>
                        <button data-link="all" class="btn-normal-curve sub-color-tab use-ajax btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed" style="opacity:4" id="edit-show-right-colors--2" name="show_right_colors" value="Xem tất cả các màu  (212)" type="button" tabindex="110">Xem tất cả các màu  (212)</button>
                      </div>
                    </div>
                    <!-- Mau pha san -->
                    <div id="hue-collection" class="col-md-12 fl-lear colors clearfix fl-overflow-visible hidden">
                      <div class="solr-readymix-color-title focus-outline">
                          <h2 class="focus-outline">Dulux Colour Palette</h2>
                      </div>
                      <div class="solr-readymix-color-list">
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1170676 colorBox-processed flourish_google_tag_manager-processed" style="background:#F7E9D2" data-title="76824" data-id="F7E9D2" data-colorid="1170676" "="" alt="76824" tabindex="92">
                                <p class="cnme color-text" data-rgb="F7E9D2" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">76824</p>
                            </a>
                          </div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="form_build_id" value="form-1u-XodgutFL3jp1xLxdyOw8DZOqbqj2xQNAPhx04lVk" tabindex="111">
                  <input type="hidden" name="form_id" value="flourish_colors_listing_solr_form" tabindex="112">
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
@endsection
@section('jsPage')
<script type="text/javascript" src="{{asset('js/jquery.js')}}"></script>
<script type="text/javascript" src="{{asset('js/bootstrap3.js')}}"></script>
<script type="text/javascript">
var surfaces = @isset($surfaces) {!! json_encode($surfaces, JSON_HEX_TAG) !!} @else [] @endisset;
var projectTypes = @isset($projectTypes) {!! json_encode($projectTypes, JSON_HEX_TAG) !!} @else [] @endisset;
var colorGroups = @isset($colorGroups) {!! json_encode($colorGroups, JSON_HEX_TAG) !!}  @else [] @endisset;
var finishSurfaces = @isset($finishSurfaces) {!! json_encode($finishSurfaces, JSON_HEX_TAG) !!} @else [] @endisset;
var csrftoken = $('meta[name="csrf-token"]').attr('content');
var selectedColorGroupId = 0;
var selectedProjectType = 0;
var selectedFinish = 0;
var selectedSurfaces = [];

$(document).ready(function() {
    // Chuyển trang thái số filter projecttypes.
    $('.form-item-color-room-type').each(function (idx, item) {
        if ($(item).is(':checked')) {
            $('.counter-projecttype').addClass('visible');
        }
    });

    // Kiểm tra số lượng counter
    $('.form-color-finish-item').each(function (idx, item) {
        if ($(item).is(':checked')) {
            $('.counter-finish-surfaces').addClass('visible');
        }
    });

    // Ẩn hiện selector phòng cần sơn.
    $('#form-color-room-type').on('click', function(e) {
        $(this).toggleClass('visible');
        $('.filter-projecttypes').toggleClass('hidden');
    });

    // Ẩn hiện selector bề mặt cần sơn.
    $('#form-color-surface-usage').on('click', function (e) {
        $(this).toggleClass('visible');
        $('.filter-surfaces').toggleClass('hidden');
    });
    $('.color-surface').on('click', function (e) {
        let surfaceId = $(this).val();
        if ($(this).is(':checked')) {
            if (!selectedSurfaces.includes(surfaceId)) {
                selectedSurfaces.push(surfaceId);
            }
        } else {
            if (selectedSurfaces.includes(surfaceId)) {
                let idx = selectedSurfaces.indexOf(surfaceId)
                selectedSurfaces.splice(idx, 1);
            }
        }
    });

    // ẩn hiện select filter bề mặt hoàn thiện.
    $('#form-color-finish').on('click', function (e) {
        $(this).toggleClass('visible');
        $('.filter-finish-surfaces').toggleClass('hidden');
    });
    // Chọn loại phòng cần sơn.
    $('.color-projecttype').click(function(e) {
        selectedProjectType = $(this).val();
        findColor({
            group_id: selectedColorGroupId,
            finish_id: selectedFinish,
            project_id: selectedProjectType,
            surfaces_id: selectedSurfaces
        }, function () {
            $('#form-color-room-type').toggleClass('visible');
            $('.filter-projecttypes').toggleClass('hidden');
            $('.counter-projecttype').addClass('visible');
        });
    });

    // Chọn loại bề mặt hoàn thiện.
    $('.form-color-finish-item').on('click', function (e) {
        $('.counter-finish-surfaces').addClass('visible');
        selectedFinish = $(this).val();
        findColor({
            group_id: selectedColorGroupId,
            finish_id: selectedFinish,
            project_id: selectedProjectType,
            surfaces_id: selectedSurfaces
        }, function () {
            $(this).toggleClass('visible');
            $('.filter-finish-surfaces').toggleClass('hidden');
        });
    });
    // Thay đổi nhóm màu.
    $('.colors-hue-selector').on('click', function(e) {
        selectedColorGroupId = $(this).data('id');
        let selectedEle = this;
        findColor({
            group_id: selectedColorGroupId,
            finish_id: selectedFinish,
            project_id: selectedProjectType,
            surfaces_id: selectedSurfaces
        }, function (result) {
            displayPopularColorList(result.colors);
            $('.colors-hue-selector').each(function (idx, item) {
                if ($(item).hasClass('selected')) {
                    $(item).find('div .hue_span_selector').each(function (ix, spanItem) {
                        $(spanItem).find('i').remove();
                    });
                    $(item).removeClass('selected');
                }
            });
            $(selectedEle).find('div .hue_span_selector').prepend('<i class="fas fa-check" style="padding-top: 24px;color: #b7b0b0;"></i>');
            $(selectedEle).addClass('selected');
        });
    });

    // Chuyen tab mau pha san & mau tron bang may tinh.
    $('.color-mixed-by-computer').on('click', function (e) {
        $('.color-mixed-by-computer').each(function (idx, item) {
            if ($(item).hasClass('active')) {
                $(item).removeClass('active');
            }
        });
        if ($(this).hasClass('colors-ready-to-mix')) {
            findColor({
                group_id: selectedColorGroupId,
                finish_id: selectedFinish,
                project_id: selectedProjectType,
                surfaces_id: selectedSurfaces
            }, function (result) {
                let colorHtml = renderColorBoxChild(result.colors);
                $('#hue-container').removeClass('hidden');
                $('#hue-collection').addClass('hidden');
            })
        }
        if ($(this).hasClass('colors-ready-to-buy')) {
            findColor({
                group_id: selectedColorGroupId,
                finish_id: selectedFinish,
                project_id: selectedProjectType,
                surfaces_id: selectedSurfaces
            }, function () {
                $('#hue-collection').removeClass('hidden');
                $('#hue-container').addClass('hidden');
            });
        }
        $(this).addClass('active');
    })
});

function findColor (filters, afterSuccess = null, afterError = null) {
    let url = "{{route('frontend.find_color')}}";
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            _token: csrftoken,
            filters: filters
        },
        success: function (result) {
            if (typeof afterSuccess === 'function') {
                afterSuccess(result);
            }
        },
        error: function (err) {
            console.log(err);
            if (typeof afterError === 'function') {
                afterError();
            }
        }
    })
}
// Hiển thị bảng màu pha bằng máy tính.
function displayPopularColorList (colors) {
    console.log('colors', colors);
    let colorGrpId = colors[0].color_group_id;
    let colorGrp = colorGroups.filter(function (grp) {
        if (grp.id == colorGrpId) return grp;
    });
    colorGrp = colorGrp.length ? colorGrp[0] : null;
    if (colorGrp) {

    }
    let normalColors = colors.filter(function (color) {
        if (color.is_deep_color == 0) return color;
    });
    console.log('normal colors', normalColors);
    let deepColors = colors.filter(function (color) {
        if (color.is_deep_color != 0) return color;
    });
    let normalColorHtml = renderColorBoxChild(normalColors);
    let deepColorHtml = renderColorBoxChild(deepColors);
    // Màu thường.
    $('#popular-colors-list .solr-pure-color-list').find('.rowBox').each(function (idx, box) {
        $(box).remove();
    });
    $('#popular-colors-list .solr-pure-color-list').append(normalColorHtml);
    // Maù trầm
    $('#popular-colors-list .solr-muted-color-list').find('.rowBox').each(function (idx, box) {
        $(box).remove();
    });
    $('#popular-colors-list .solr-muted-color-list').append(normalColorHtml);
}
function renderColorBoxChild (colors) {
    let html = '';
    for (let i = 0; i < colors.length; i++) {
        html += '<div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">'
                    + '<a class="color-box-child  color-box-child-' + colors[i].id + ' colorBox-processed flourish_google_tag_manager-processed" '
                    + 'style="background:'+ colors[i].color + '" data-title="' + colors[i].name + '" data-id="F4F0E4" '
                    + 'data-colorid="'+ colors[i].id + '" alt="' + colors[i].name + '" tabindex="85">'
                        + '<p class="cnme color-text" data-rgb="' + colors[i].color.replace('#', '') +'" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">'
                        + colors[i].name
                        + '</p>'
                    + '</a>'
              + '</div>'
    }
    return html;
}
</script>
@endsection
