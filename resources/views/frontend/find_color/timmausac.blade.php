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
    .solr-muted-color-name {
        margin-top: 8rem !important;
        margin-bottom: 2rem !important;
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

                    </div>
                    <a href="#" class="filter-reset inline-text-link primary btn-clear" tabindex="75">
                    Khởi tạo lại bộ lọc
                    </a>
                  </div>
                  <div class="results-bar">
                    <a href="#" class="filter-reset inline-text-link primary btn-clear" tabindex="76"
                    >Khởi tạo lại bộ lọc</a>
                    <button id="filter_results_btn" class="bttn primary bttn-auto-width pull-right"
                        tabindex="77"> @isset($colors) {{count($colors)}} @else 0 @endisset Kết quả</button>
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
                      <p class="h1"><span class="main-color-tab">Màu sắc phổ biến (@isset($colors){{count($colors)}}@else 0 @endisset)</span>
                      <span class="link-gray pull-right hidden-xs sub-color-tab main">
                      <button data-link="all"
                        class="use-ajax btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed"
                        style="opacity:4" id="edit-show-colors-link" name="show_colors_link"
                        value="Xem tất cả các màu ({{$numCounter}})" type="button" tabindex="84">Xem tất cả các màu  ({{$numCounter}})
                      </button>
                        </span>
                      </p>
                      <div id="popular-colors-list">
                        <div class="solr-pure-color-list">
                          <div class="solr-pure-color-name">
                            <h2 class="color-type">@isset($selectedClrGrp){{$selectedClrGrp->name}}@endisset</h2>
                          </div>
                          @isset($colors)
                          @foreach($colors as $color)
                          @if(!$color->is_deep_color)
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-{{$color->id}} colorBox-processed flourish_google_tag_manager-processed"
                                style="background:{{$color->color}}" data-title="{{$color->name}}" data-id="{{str_replace('#', '', $color->color)}}" data-colorid="{{$color->id}}" alt="{{$color->name}}" tabindex="85">
                              <p class="cnme color-text" data-rgb="{{str_replace('#', '', $color->color)}}" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">{{$color->name}}</p>
                            </a>
                          </div>
                          @endif
                          @endforeach
                          @endisset
                        </div>
                        <div class="solr-muted-color-list">
                          <div class="solr-muted-color-name">
                            <h2 class="color-type muted_clrs">
                            @isset($selectedClrGrp)
                                {{str_replace('Họ màu ', '', $selectedClrGrp->name)}}
                                @endisset trầm
                            </h2>
                          </div>
                          @isset($colors)
                          @foreach($colors as $color)
                          @if($color->is_deep_color)
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-{{$color->id}} colorBox-processed flourish_google_tag_manager-processed"
                                style="background:{{$color->color}}" data-title="{{$color->name}}" data-id="{{str_replace('#', '', $color->color)}}" data-colorid="{{$color->id}}" alt="{{$color->name}}" tabindex="85">
                              <p class="cnme color-text" data-rgb="{{str_replace('#', '', $color->color)}}" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">{{$color->name}}</p>
                            </a>
                          </div>
                          @endif
                          @endforeach
                          @endisset
                        </div>
                      </div>
                      <div class="color-lister-bottom-new colors-listing-box-bottom">
                        <h2>Tôi không thể tìm thấy màu sắc mong muốn</h2>
                        <button data-link="all"
                            class="btn-normal-curve sub-color-tab use-ajax btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed"
                            style="opacity:4" id="edit-show-right-colors--2" name="show_right_colors"
                            value="Xem tất cả các màu @isset($numCounter){{$numCounter}}@endisset" type="button" tabindex="110">Xem tất cả các màu  (@isset($numCounter){{$numCounter}}@endisset)</button>
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
<script type="text/javascript" src="{{asset('public/js/jquery.js')}}"></script>
<script type="text/javascript" src="{{asset('public/js/bootstrap3.js')}}"></script>
<script type="text/javascript">
var surfaces = @isset($surfaces) {!! json_encode($surfaces, JSON_HEX_TAG) !!} @else [] @endisset;
var projectTypes = @isset($projectTypes) {!! json_encode($projectTypes, JSON_HEX_TAG) !!} @else [] @endisset;
var colorGroups = @isset($colorGroups) {!! json_encode($colorGroups, JSON_HEX_TAG) !!}  @else [] @endisset;
var finishSurfaces = @isset($finishSurfaces) {!! json_encode($finishSurfaces, JSON_HEX_TAG) !!} @else [] @endisset;
var csrftoken = $('meta[name="csrf-token"]').attr('content');
var selectedColorGroupId = {{session('color_group_id', 1)}};
var selectedProjectType = {{$projectTypeId}};
var selectedFinish = {{session('color_finish_id', 0)}};
var selectedSurfaces = [];

$(document).ready(function() {
    let filterLabelHTML = renderFilterElem();
    $('.filter-labels').html(filterLabelHTML);
    // An hien filter section label
    toggleFilterSection();
    // Chuyển trang thái số filter projecttypes.
    $('.color-projecttype').each(function (idx, item) {
        if ($(item).is(':checked')) {
            let room = $(item).val();
            room = parseInt(room);
            if (room !== 0) {
                $('.counter-projecttype').addClass('visible');
            }
        }
    });

    // Kiểm tra số lượng counter
    $('.form-color-finish-item').each(function (idx, item) {
        if ($(item).is(':checked')) {
            let val = $(item).val();
            val = parseInt(val);
            if(val !== 0) {
                $('.counter-finish-surfaces').addClass('visible');
            }
        }
    });
    // Hiển thị so luong bề mặt cần sơn.
    let numSurfaces = 0;
    $('.form-color-surface-item').each(function (idx, item) {
        if ($(item).is(':checked')) {
            numSurfaces++;
        }
    });
    if (numSurfaces > 0) {
        $('.counter-label-surfaces').html(numSurfaces).addClass('visible');
    } else {
        $('.counter-label-surfaces').removeClass('visible');
    }

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
            if (selectedSurfaces.length > 0) {
                $('.counter-label-surfaces').html(selectedSurfaces.length);
                $('.counter-label-surfaces').addClass('visible');
            } else {
                $('.counter-label-surfaces').removeClass('visible');
            }
        } else {
            if (selectedSurfaces.includes(surfaceId)) {
                let idx = selectedSurfaces.indexOf(surfaceId)
                selectedSurfaces.splice(idx, 1);
            }

            if (selectedSurfaces.length > 0) {
                $('.counter-label-surfaces').html(selectedSurfaces.length);
                $('.counter-label-surfaces').addClass('visible');
            } else {
                $('.counter-label-surfaces').removeClass('visible');
            }
        }
        toggleFilterSection();
    });

    $('#edit-color-surface-usage-confirm--2').on('click', function (e) {
        e.preventDefault();
        findColor({
            group_id: selectedColorGroupId,
            finish_id: selectedFinish,
            project_id: selectedProjectType,
            surfaces_id: selectedSurfaces,
            is_mixed_by_comp: 1,
            is_popular: 1
        }, function (result) {
            displayPopularColorList(result.colors, result.num_all_colors);
            if (selectedSurfaces.length > 0) {
                $('.counter-label-surfaces').html(selectedSurfaces.length);
                $('.counter-label-surfaces').addClass('visible');
            } else {
                $('.counter-label-surfaces').removeClass('visible');
            }
            $('#hue-container').removeClass('hidden');
            $('#hue-collection').addClass('hidden');
            $('.colors-ready-to-mix').addClass('active');
            $('.colors-ready-to-buy').removeClass('active');
        });
    })


    // ẩn hiện select filter bề mặt hoàn thiện.
    $('#form-color-finish').on('click', function (e) {
        $(this).toggleClass('visible');
        $('.filter-finish-surfaces').toggleClass('hidden');
    });
    // Chọn loại phòng cần sơn.
    $('.color-projecttype').click(function(e) {
        selectedProjectType = $(this).val();
        selectedProjectType = parseInt(selectedProjectType);
        findColor({
            group_id: selectedColorGroupId,
            finish_id: selectedFinish,
            project_id: selectedProjectType,
            surfaces_id: selectedSurfaces,
            is_mixed_by_comp: 1,
            is_popular: 1
        }, function (result) {
            displayPopularColorList(result.colors, result.num_all_colors);
            $('#form-color-room-type').toggleClass('visible');
            $('.filter-projecttypes').toggleClass('hidden');
            if(selectedProjectType == 0) {
                $('.counter-projecttype').removeClass('visible');
            } else {
                $('.counter-projecttype').addClass('visible');
            }
            toggleFilterSection();
            $('#hue-container').removeClass('hidden');
            $('#hue-collection').addClass('hidden');
            $('.colors-ready-to-mix').addClass('active');
            $('.colors-ready-to-buy').removeClass('active');
        });
    });

    // Chọn loại bề mặt hoàn thiện.
    $('.form-color-finish-item').on('click', function (e) {
        selectedFinish = $(this).val();
        selectedFinish = parseInt(selectedFinish);
        findColor({
            group_id: selectedColorGroupId,
            finish_id: selectedFinish,
            project_id: selectedProjectType,
            surfaces_id: selectedSurfaces,
            is_mixed_by_comp: 1,
            is_popular: 1
        }, function (result) {
            displayPopularColorList(result.colors, result.num_all_colors);
            if (selectedFinish == 0) {
                $('.counter-finish-surfaces').removeClass('visible');
            } else {
                $('.counter-finish-surfaces').addClass('visible');
            }
            toggleFilterSection();
            $('#form-color-finish').toggleClass('visible');
            $('.filter-finish-surfaces').toggleClass('hidden');
            $('#hue-container').removeClass('hidden');
            $('#hue-collection').addClass('hidden');
            $('.colors-ready-to-mix').addClass('active');
            $('.colors-ready-to-buy').removeClass('active');
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
            surfaces_id: selectedSurfaces,
            is_mixed_by_comp: 1,
            is_popular: 1
        }, function (result) {
            displayPopularColorList(result.colors, result.num_all_colors);
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
            $('#hue-container').removeClass('hidden');
            $('#hue-collection').addClass('hidden');
            $('.colors-ready-to-mix').addClass('active');
            $('.colors-ready-to-buy').removeClass('active');
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
                surfaces_id: selectedSurfaces,
                is_mixed_by_comp: 1,
                is_popular: 1
            }, function (result) {
                displayPopularColorList(result.colors, result.num_all_colors);
                $('#hue-container').removeClass('hidden');
                $('#hue-collection').addClass('hidden');
            })
        }
        if ($(this).hasClass('colors-ready-to-buy')) {
            findColor({
                group_id: selectedColorGroupId,
                finish_id: selectedFinish,
                project_id: selectedProjectType,
                surfaces_id: selectedSurfaces,
                is_mixed_by_comp: 0
            }, function (result) {
                displayReadyToBuyColors(result.colors);
                $('#hue-collection').removeClass('hidden');
                $('#hue-container').addClass('hidden');
            });
        }
        $(this).addClass('active');
    });

    $('#edit-show-colors-link').on('click', function (e) {
        e.preventDefault();
        let type = $(this).data('link');
        if (type === 'all') {
            findColor({
                group_id: selectedColorGroupId,
                finish_id: selectedFinish,
                project_id: selectedProjectType,
                surfaces_id: selectedSurfaces,
                is_mixed_by_comp: 1,
                get_all: 1
            }, function (result) {
                $('#edit-show-colors-link').data('link', 'popular');
                displayAllColorList(result.colors, result.num_all_colors);
                $('#hue-container').removeClass('hidden');
                $('#hue-collection').addClass('hidden');
            });
        } else {
            findColor({
                group_id: selectedColorGroupId,
                finish_id: selectedFinish,
                project_id: selectedProjectType,
                surfaces_id: selectedSurfaces,
                is_mixed_by_comp: 1,
                is_popular: 1
            }, function (result) {
                displayPopularColorList(result.colors, result.num_all_colors);
                $('#hue-container').removeClass('hidden');
                $('#hue-collection').addClass('hidden');
            })
        }
    });
    $('.btn-normal-curve').on('click', function (e) {
        e.preventDefault();
        let type = $(this).data('link');
        if (type === 'all') {
            findColor({
                group_id: selectedColorGroupId,
                finish_id: selectedFinish,
                project_id: selectedProjectType,
                surfaces_id: selectedSurfaces,
                is_mixed_by_comp: 1,
                get_all: 1
            }, function (result) {
                $('.btn-normal-curve').data('link', 'popular');
                displayAllColorList(result.colors, result.num_all_colors);
                $('#hue-container').removeClass('hidden');
                $('#hue-collection').addClass('hidden');
            });
        } else {
            findColor({
                group_id: selectedColorGroupId,
                finish_id: selectedFinish,
                project_id: selectedProjectType,
                surfaces_id: selectedSurfaces,
                is_mixed_by_comp: 1,
                is_popular: 1
            }, function (result) {
                displayPopularColorList(result.colors, result.num_all_colors);
                $('#hue-container').removeClass('hidden');
                $('#hue-collection').addClass('hidden');
            })
        }
    });
    $('.btn-clear').on('click', function (e) {
        e.preventDefault();
        clearFilters();
        findColor({
            group_id: selectedColorGroupId,
            finish_id: selectedFinish,
            project_id: selectedProjectType,
            surfaces_id: selectedSurfaces,
            is_mixed_by_comp: 1,
            is_popular: 1
        }, function (result) {
            displayPopularColorList(result.colors, result.num_all_colors);
            $('#hue-container').removeClass('hidden');
            $('#hue-collection').addClass('hidden');
            $('.colors-ready-to-mix').addClass('active');
            $('.colors-ready-to-buy').removeClass('active');
        });
    });

    $(document).on('click', '.color-box-child', function (e) {
        e.preventDefault();
        let rowBoxClicked = $(this).parent();

        if (rowBoxClicked) {
            let colorBoxChild = this;
            if (!$(rowBoxClicked).next().hasClass('rowInfo')) {
                $('.rowInfo').remove();
                $(rowBoxClicked).addClass('focus-outline');
                let colorid = $(colorBoxChild).data('colorid');
                let colorcode = $(colorBoxChild).data('id');
                let colortitle = $(colorBoxChild).data('title');
                let detailHtml = showDetailColorBox(colorid, colortitle, colorcode);
                $(rowBoxClicked).after(detailHtml);
                setTimeout(function () {
                    $('.rowInfo').slideDown('slow');
                }, 800);
            }
        }
    });
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
            if (typeof afterError === 'function') {
                afterError(err);
            }
        }
    });
}
// toggle Filter Section
function toggleFilterSection () {
    if (selectedProjectType !== 0 || selectedFinish !== 0 || selectedSurfaces.length > 0) {
        $('.filter-section').addClass('visible');
    } else {
        $('.filter-section').removeClass('visible');
    }
}

function clearFilters () {
    selectedFinish = 0;
    selectedProjectType = 0;
    selectedSurfaces = [];
    toggleFilterSection();
    $('.color-projecttype').each(function (idx, item) {
        if ($(item).is(':checked')) {
            $(item).prop('checked', false);
        }
    });
    $('.counter-projecttype').removeClass('visible');

    // Kiểm tra số lượng counter
    $('.form-color-finish-item').each(function (idx, item) {
        if ($(item).is(':checked')) {
            $(item).prop('checked', false);
        }
    });
    $('.counter-finish-surfaces').removeClass('visible');
    // Hiển thị so luong bề mặt cần sơn.
    $('.form-color-surface-item').each(function (idx, item) {
        if ($(item).is(':checked')) {
            $(item).prop('checked', false);
        }
    });
    $('.counter-label-surfaces').removeClass('visible');
}

function displayAllColorList (colors, numAllColors) {
    let colorGrp = colorGroups.filter(function (grp) {
        if (grp.id == selectedColorGroupId) return grp;
    });
    colorGrp = colorGrp.length ? colorGrp[0] : null;

    let normalColors = [];
    let deepColors = [];
    let numPopular = 0;
    $('.rowInfo').remove();
    colors.forEach(function (color) {
        if (color.is_popular == 1) {
            numPopular++;
        }
        if (color.is_deep_color == '1') {
            deepColors.push(color);
        } else {
            normalColors.push(color);
        }
    });

    let normalColorHtml = renderColorBoxChild(normalColors);
    let deepColorHtml = renderColorBoxChild(deepColors);
    $('#popular-colors-list .solr-pure-color-list').find('.rowBox').each(function (idx, box) {
        $(box).remove();
    });
    $('#popular-colors-list .solr-muted-color-list').find('.rowBox').each(function (idx, box) {
        $(box).remove();
    });
    if (colorGrp) {
        $('.filter-labels').removeClass('visible');
        // Hiển thị title màu thường.
        $('.solr-pure-color-name .color-type').html(colorGrp.name);
        // Hiển thị title màu trầm.
        $('.solr-muted-color-name .color-type').html(colorGrp.name.replace('Họ màu ', '') + ' Trầm');
        // Hiển thị button list tất cả màu trong kết quả tìm được.
        $('#edit-show-colors-link').val('Xem tất cả các maù (' + numAllColors + ')' )
            .html('Xem các màu phổ biến (' + numPopular + ')' );
        $('.btn-normal-curve').val('Xem tất cả các maù (' + numAllColors + ')' )
            .html('Xem các màu phổ biến (' + numPopular + ')' );
        // Hiển thị số lượng màu phổ biến
        $('.main-color-tab').html('Tất cả các màu (' + colors.length + ')');
        // Màu thường.
        $('#popular-colors-list .solr-pure-color-list').append(normalColorHtml);
        // Maù trầm
        $('#popular-colors-list .solr-muted-color-list').append(deepColorHtml);

        setClickEventColorBoxChild();
    }
}
// Hiển thị bảng màu pha bằng máy tính.
function displayPopularColorList (colors, numAllColors) {
    let colorGrp = colorGroups.filter(function (grp) {
        if (grp.id == selectedColorGroupId) return grp;
    });
    colorGrp = colorGrp.length ? colorGrp[0] : null;
    $('.rowInfo').remove();
    let normalColors = [];
    let deepColors = [];
    colors.forEach(function (color) {
        if (color.is_deep_color == '1') {
            deepColors.push(color);
        } else {
            normalColors.push(color);
        }
    });

    let normalColorHtml = renderColorBoxChild(normalColors);
    let deepColorHtml = renderColorBoxChild(deepColors);
    $('.solr-pure-color-list').find('.rowBox').each(function (idx, box) {
        $(box).remove();
    });
    $('.solr-muted-color-list').find('.rowBox').each(function (idx, box) {
        $(box).remove();
    });
    if (colorGrp) {
        let filterLabelHtml = renderFilterElem();
        $('.filter-labels').html(filterLabelHtml);
        // Hiển thị title màu thường.
        $('.solr-pure-color-name .color-type').html(colorGrp.name);
        // Hiển thị title màu trầm.
        $('.solr-muted-color-name .color-type').html(colorGrp.name.replace('Họ màu ', '') + ' Trầm');

        // Hiển thị button list tất cả màu trong kết quả tìm được.
        $('#edit-show-colors-link').val('Xem tất cả các maù (' + numAllColors + ')' )
            .html('Xem tất cả các maù (' + numAllColors + ')' );
        $('#edit-show-colors-link').data('link', 'all');

        $('.btn-normal-curve').val('Xem tất cả các maù (' + numAllColors + ')' )
            .html('Xem tất cả các maù (' + numAllColors + ')' );
        $('.btn-normal-curve').data('link', 'all');

        // Hiển thị số lượng màu phổ biến
        $('.main-color-tab').html('Màu sắc phổ biến ' + '(' + colors.length + ')');
        // Màu thường.
        // #popular-colors-list
        $('.solr-pure-color-list').append(normalColorHtml);
        // Maù trầm
        $('.solr-muted-color-list').append(deepColorHtml);

        setClickEventColorBoxChild();

    }
}

function displayReadyToBuyColors (colors) {
    $('.rowInfo').remove();
    $('.solr-readymix-color-list').find('.rowBox').each(function (idx, item) {
        $(item).remove();
    });
    let colorHtml = renderColorBoxChild(colors);
    $('.solr-readymix-color-list').html(colorHtml);
    setTimeout(function () {
        setClickEventColorBoxChild();
    }, 10)

}

function renderColorBoxChild (colors) {
    let html = '';
    if (Array.isArray(colors)) {
        for (let i = 0; i < colors.length; i++) {
            let colorCode = colors[i].color;
            colorCode = colorCode.replace('#', '');
            let textColor = genTextColor(colors[i].color);
            html += '<div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">'
            + '<a class="color-box-child  color-box-child-' + colors[i].id + ' colorBox-processed flourish_google_tag_manager-processed" '
            + 'style="background:'+ colors[i].color + '" data-title="' + colors[i].name + '" data-id="' + colorCode + '" '
            + 'data-colorid="'+ colors[i].id + '" alt="' + colors[i].name + '" tabindex="85">'
            + '<p class="cnme color-text" data-rgb="' + colorCode +'" style="color: '+ textColor + '; stroke: '+ textColor + ';">'
            + colors[i].name
            + '</p>'
            + '</a>'
            + '</div>';
        }
    }
    return html;
}

function renderFilterElem () {
    let filterLabelHtml = '';
    if (selectedProjectType !== 0) {
        projectTypes.map(function (selctProjType) {
            if (selctProjType.id == selectedProjectType) {
                filterLabelHtml += '<a class="remove reset-filter reset-color-filter-room-type" '
                + 'id="Hành lang" data-tid="'+ selctProjType.name + '" data-field=" selected_room_type "'
                + 'data-fname="' + selctProjType.name + ' ">'
                + '<div id="selected_room_type "'
                + 'class="fl-color-selections label ">'
                +    '<span class="fltr-selection " id="' + selctProjType.name + ' " data-tid="' + selctProjType.name + '">'
                +     selctProjType.name
                +    '<svg class="icon ">'
                +        '<use xmlns:xlink="http://www.w3.org/1999/xlink " xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2 ">'
                +        '</use>'
                +    '</svg>'
                +    '</span>'
                +   '</div>'
                + '</a>';
            }
        });
    }
    if (selectedSurfaces.length > 0) {
        for (let surface of surfaces) {
            if (selectedSurfaces.includes("" + surface.id)) {
                filterLabelHtml += '<a class="remove reset-filter reset-color-filter-surface " id="'+ surface.name + ' " data-tid="' + surface.name
                + ' " data-field="selected_surface " data-fname="' + surface.name + ' ">'
                +    '<div id="selected_surface " class="fl-color-selections label ">'
                +        '<span class="fltr-selection " id="'+ surface.name + ' " data-tid="' + surface.name + ' ">'
                + surface.name
                + '<svg class="icon ">'
                +    '<use xmlns:xlink="http://www.w3.org/1999/xlink " xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2 "></use>'
                + '</svg>'
                + '</span>'
                +'</div>'
                + '</a>';
            }
        }
    }
    if (selectedFinish) {
        for (let finish of finishSurfaces) {
            if (selectedFinish == finish.id) {
                filterLabelHtml += '<a class="remove reset-filter reset-color-filter-finish " id="'
                + finish.name + ' " data-tid="' + finish.name + '" data-field="" selected_finish"="" data-fname="'+ finish.name + '">'
                +        '<div id="selected_finish" class="fl-color-selections label">'
                +           '<span class="fltr-selection" id="' + finish.name + '"'
                +                'data-tid="' + finish.name + '">'
                +            finish.name
                +            '<svg class="icon">'
                +                '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-close-2"></use>'
                +        '</svg>'
                +        '</span>'
                +      '</div>'
                +    '</a>';
            }
        }
    }

    return filterLabelHtml;
}

function showDetailColorBox (colorId, colorName, colorCode) {
    colorCode = '' + colorCode;
    let textColor = genTextColor(colorCode);
    let detail = '<div class="rowInfo row-swatch-info fl-color-expend-box" style="display: none;">'
    +  '<div class="color-header-wrap">'
    +    '<h2 class="color-title visible-xs col-xs-8" data-rgb="' + colorCode + '">'
    +      colorName
    +      '</h2>'
    +    '<div class="pull-right color-options col-xs-4 col-sm-12">'
    +      '<div class="scrap-book-color scrap-book-add-color icon-scrap-book visible-xs color-text fl-mobile-scrapbook-icon " '
    +        'scrap-color-' + colorId + '="" data-type="color" data-colorid="' + colorId + '" data-rgb="'+ colorCode + '" '
    +            'style="color: rgb(102,102,102)">'
    +      '</div>'
    +      '<div class="color-detail-close" data-colorname="' + colorName + '" data-glcolorid="' + colorId + '">'
    +      '</div>'
    +    '</div>'
    +  '</div>'
    +  '<div class="fl-color-swatch-wrap" style="background-color:#' + colorCode + '">'
    +    '<div class="color-image equi-height col-xs-12 col-sm-8 col-md-8 col-lg-8" style="background-color: #' + colorCode + '; height: 400px;">'
    +    '</div>'
    +    '<div class="color-swatch equi-height col-xs-12 col-sm-4 col-md-4 col-lg-4" '
    +        'style="background-color: #' + colorCode + '; height: 400px;">'
    +      '<div class="reset-filter" data-field="field_room_type_tid" type="radio">X</div>'
    +      '<div class="color-swatch-top hidden-xs">'
    +        '<h2 class="color-text" data-rgb="' + colorCode + '" style="color: ' + textColor + ';">'
    +          colorName + '</h2>'
    +      '</div>'
    +      '<div class="color-swatch-bottom">'
    +        '<div id="colourInfo" class="col-xs-6 pull-right">'
    +        '</div>'
    +        '<div id="findColour">'
    +          '<a href="#" class="rounded-link button-a">'
    +          'Tôi muốn tìm sản phẩm có màu này'
    +          '</a>'
    +        '</div>'
    +      '</div>'
    +    '</div>'
    +  '</div>'
    +'</div>';

    return detail;
}

function genTextColor (colorCode) {
    if (colorCode.indexOf('#') !== -1) {
        colorCode = colorCode.replace('#', '');
    }
    let bigEndian = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let numBigEndian = 0;
    let index0 = bigEndian.includes(colorCode[0]);
    let index2 = bigEndian.includes(colorCode[2]);
    let index4 = bigEndian.includes(colorCode[4]);
    if (index0) {
        numBigEndian++;
    }
    if (index2) {
        numBigEndian++;
    }
    if (index4) numBigEndian++;
    if (numBigEndian >= 2) {
        return 'rgb(102, 102, 102)';
    } else {
        return 'rgb(255, 255, 255)';
    }
}

function setClickEventColorBoxChild() {
    $('.color-box-child').on('click', function (e) {
        e.preventDefault();
        let rowBoxClicked = $(this).parent();
        if (rowBoxClicked) {
            let colorBoxChild = this;
            if (!$(rowBoxClicked).next().hasClass('rowInfo')) {
                $('.rowInfo').remove();
                $(rowBoxClicked).addClass('focus-outline');
                let colorid = $(colorBoxChild).data('colorid');
                let colorcode = $(colorBoxChild).data('id');
                let colortitle = $(colorBoxChild).data('title');
                let detailHtml = showDetailColorBox(colorid, colortitle, colorcode);
                $(rowBoxClicked).after(detailHtml);
                setTimeout(function () {
                    $('.rowInfo').slideDown('slow');
                }, 800);
            }
        }
    });
}
</script>
@endsection
