@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('cssPage')
  @include('frontend.includes.css.findColorCss')
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
                  <div id="hue-selector" class="colors-hue-selectors clearfix">
                    <div class="no-gutter col-xs-2">
                      <div class="cid-white  selected product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="29">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu trắng" id="edit-palette-white--2" name="color" value="white" type="button" tabindex="30">white</button>
                          </span>
                        </div>
                      </div>
                      <div class="cid-red  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="31">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu đỏ" id="edit-palette-red--2" name="color" value="red" type="button" tabindex="32">red</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="no-gutter col-xs-2">
                      <div class="cid-orange  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="33">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu cam" id="edit-palette-orange--2" name="color" value="orange" type="button" tabindex="34">orange</button>
                          </span>
                        </div>
                      </div>
                      <div class="cid-gold  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="35">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu vàng kim" id="edit-palette-gold--2" name="color" value="gold" type="button" tabindex="36">gold</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="no-gutter col-xs-2">
                      <div class="cid-yellow  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="37">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu vàng" id="edit-palette-yellow--2" name="color" value="yellow" type="button" tabindex="38">yellow</button>
                          </span>
                        </div>
                      </div>
                      <div class="cid-lime  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="39">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu vàng chanh" id="edit-palette-lime--2" name="color" value="lime" type="button" tabindex="40">lime</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="no-gutter col-xs-2">
                      <div class="cid-green  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="41">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu xanh lá" id="edit-palette-green--2" name="color" value="green" type="button" tabindex="42">green</button>
                          </span>
                        </div>
                      </div>
                      <div class="cid-teal  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="43">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu xanh mòng két" id="edit-palette-teal--2" name="color" value="teal" type="button" tabindex="44">teal</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="no-gutter col-xs-2">
                      <div class="cid-blue  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="45">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu xanh dương" id="edit-palette-blue--2" name="color" value="blue" type="button" tabindex="46">blue</button>
                          </span>
                        </div>
                      </div>
                      <div class="cid-violet  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="47">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu tím" id="edit-palette-violet--2" name="color" value="violet" type="button" tabindex="48">violet</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="no-gutter col-xs-2">
                      <div class="cid-cool neutral  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="49">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu thiên nhiên" id="edit-palette-cool-neutral--2" name="color" value="cool neutral" type="button" tabindex="50">cool neutral</button>
                          </span>
                        </div>
                      </div>
                      <div class="cid-warm neutral  product-available color-box colors-hue-selector col-sm-6 col-xs-12 hue-selected-processed" tabindex="51">
                        <div class="color-box-inner text-center">
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="use-ajax-submit solr-color-box-button btn btn-default form-submit ajax-processed colorHue-processed flourish_google_tag_manager-processed" style="opacity:0" title="Họ màu vàng đất" id="edit-palette-warm-neutral--2" name="color" value="warm neutral" type="button" tabindex="52">warm neutral</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="filter-wrapper-clp" class="filter-wrapper filter-wrapper-clp filter-wrapper-fullwidth active">
                    <div class="title-section">
                      <h2 class="text-center">Bộ lọc</h2>
                      <svg class="icon icon-close right">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-close">
                        <symbol viewBox="0 0 32 19.91" id="icon-collapse-arrow" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path d="M31.17.62a2.46 2.46 0 0 0-3.48.2L16 14 4.3.83A2.46 2.46 0 1 0 .62 4.1L14 19.09a2.46 2.46 0 0 0 1.84.83h.38a2.46 2.46 0 0 0 1.78-.83l13.35-15a2.46 2.46 0 0 0-.18-3.47z" data-name="Layer 1"></path></g></symbol>
                        </use>
                      </svg>
                    </div>
                    <div class="clp-wrap collapse-wrap accordeon">
                      <div id="form-color-room-type" class="form-color-room-type form-collapse collapse-area focus-outline">
                        <div class="collapse-trigger accordeon-collapse-trigger-processed">
                          Nơi cần sơn<span class="count-label input-counter counter-projecttype">1</span>
                          <svg class="icon icon-collapse-arrow right">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow">
                                <!-- <symbol viewBox="0 0 32 19.91" id="icon-collapse-arrow" xmlns="http://www.w3.org/2000/svg">
                                <g data-name="Layer 2"><path d="M31.17.62a2.46 2.46 0 0 0-3.48.2L16 14 4.3.83A2.46 2.46 0 1 0 .62 4.1L14 19.09a2.46 2.46 0 0 0 1.84.83h.38a2.46 2.46 0 0 0 1.78-.83l13.35-15a2.46 2.46 0 0 0-.18-3.47z" data-name="Layer 1"></path></g></symbol> -->
                            </use>
                          </svg>
                        </div>
                        <div class="collapse-content amountCount filter-projecttypes hidden">
                          <div class="form-type-radios form-item-color-room-type form-item form-group append-outline-processed">
                            <div id="edit-color-room-type--2" class="form-radios color-room-type">
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Tất cả các phòng" type="radio" value="0"
                                    id="edit-color-room-type-all--2" name="color_room_type"
                                    class="color-projecttype form-radio ajax-processed CLPLocationChange-processed"
                                    tabindex="53">
                                <label class="option" for="edit-color-room-type-all--2">Tất cả các phòng</label>
                                <span class="radio-outline"></span>
                              </div>
                              @foreach($projectTypes as $projectType)
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="{{$projectType->name}}" type="radio" value="{{$projectType->id}}"
                                    id="edit-color-room-type-{{$projectType->id}}--2" name="color_room_type"
                                    class="color-projecttype form-radio ajax-processed CLPLocationChange-processed"
                                    tabindex="54">
                                    <label class="option" for="edit-color-room-type-{{$projectType->id}}--2">{{$projectType->name}}</label>
                                <span class="radio-outline"></span>
                              </div>
                              @endforeach
                            </div>
                          </div>
                          <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="62">Show more [+]</a>
                          <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="63">Show less [-]</a>
                        </div>
                      </div>
                      <div id="form-color-surface-usage" class="form-color-surface-usage form-collapse collapse-area">
                        <div class="collapse-trigger accordeon-collapse-trigger-processed">
                          Bề mặt cần sơn<span class="count-label input-counter">0</span>
                          <svg class="icon icon-collapse-arrow right">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                          </svg>
                        </div>
                        <div class="collapse-content amountCount filter-surfaces hidden">
                          <div id="edit-color-surface-usage--2" class="form-checkboxes color-surface">
                            @foreach($surfaces as $surface)
                            <div class="form-type-checkbox form-item-color-surface-usage-Trần-nhà form-item checkbox append-outline-processed">
                              <input data-label="{{$surface->name}}" type="checkbox"
                                id="edit-color-surface-usage-{{$surface->id}}--2" name="color_surface_usage[{{$surface->id}}]"
                                value="Trần nhà" class="form-checkbox CLPSurfaceChange-processed"
                                tabindex="64">
                                <label class="option" for="edit-color-surface-usage-{{$surface->id}}--2">{{$surface->name}}</label>
                              <span class="checkbox-outline"></span>
                            </div>
                            @endforeach
                            <button class="bttn primary hidden-xs full-width btn-filter-confirm btn btn-default form-submit ajax-processed" id="edit-color-surface-usage-confirm--2" name="color_surface_usage_button" value="Xác nhận" type="button" tabindex="66">Xác nhận</button>
                          </div>
                          <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="67">Show more [+]</a>
                          <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="68">Show less [-]</a>
                        </div>
                      </div>
                      <div id="form-color-finish" class="form-color-finish form-collapse collapse-area">
                        <div class="collapse-trigger accordeon-collapse-trigger-processed">
                          Bề mặt hoàn thiện<span class="count-label input-counter counter-finish-surfaces">1</span>
                          <svg class="icon icon-collapse-arrow right">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                          </svg>
                        </div>
                        <div class="collapse-content amountCount filter-finish-surfaces hidden">
                          <div class="form-type-radios form-item-color-finish form-item form-group append-outline-processed">
                            <div id="edit-color-finish--2" class="form-radios color-finish">
                              <div class="form-type-radio form-item-color-finish form-item radio append-outline-processed">
                                <input data-label="Tất cả các" type="radio" id="edit-color-finish-all--2"
                                name="color_finish" value="0" class="form-radio form-color-finish-item ajax-processed CLPFinishChange-processed" tabindex="69">  <label class="option" for="edit-color-finish-all--2">Tất cả các </label>
                                <span class="radio-outline"></span>
                              </div>
                              @foreach($finishSurfaces as $finishSurface)
                              <div class="form-type-radio form-item-color-finish form-item radio append-outline-processed">
                                <input data-label="{{$finishSurface->name}}"
                                    type="radio" id="edit-color-finish-{{$finishSurface->id}}--2"
                                    name="color_finish" value="{{$finishSurface->id}}"
                                    class="form-radio form-color-finish-item ajax-processed CLPFinishChange-processed" tabindex="70">
                                    <label class="option" for="edit-color-finish-{{$finishSurface->id}}--2">{{$finishSurface->name}}</label>
                                <span class="radio-outline"></span>
                              </div>
                              @endforeach
                            </div>
                          </div>
                          <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="73">Show more [+]</a>
                          <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="74">Show less [-]</a>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div class="row colors-content">
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
$(document).ready(function() {
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

    // ẩn hiện select filter bề mặt hoàn thiện.
    $('#form-color-finish').on('click', function (e) {
        $(this).toggleClass('visible');
        $('.filter-finish-surfaces').toggleClass('hidden');
    });
    // Chọn loại phòng cần sơn.
    $('.form-item-color-room-type').on('click', function(e) {
        $('.counter-projecttype').addClass('visible');
    });

    // Chọn loại bề mặt hoàn thiện.
    $('.form-color-finish-item').on('click', function (e) {
        $('.counter-finish-surfaces').addClass('visible');
    });
    // Thay đổi nhóm màu.
    $('.colors-hue-selector').on('click', function(e) {
        $('.colors-hue-selector').each(function (idx, item) {
            $(item).removeClass('selected');
        });
        $(this).addClass('selected');
    });

    // Chuyen tab mau pha san & mau tron bang may tinh.
    $('.color-mixed-by-computer').on('click', function (e) {
        $('.color-mixed-by-computer').each(function (idx, item) {
            $(item).removeClass('active');
        });
        if ($(this).hasClass('colors-ready-to-mix')) {
            console.log('tron mau')
            $('#hue-container').removeClass('hidden');
            $('#hue-collection').addClass('hidden');
        }
        if ($(this).hasClass('colors-ready-to-buy')) {
            console.log('co san');
            $('#hue-collection').removeClass('hidden');
            $('#hue-container').addClass('hidden')
        }
        $(this).addClass('active');
    })
});
</script>
@endsection
