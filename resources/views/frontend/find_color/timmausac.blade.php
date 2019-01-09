@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('cssPage')
<style type="text/css" media="all">
/* <![CDATA[ */
#sliding-popup.sliding-popup-bottom,#sliding-popup.sliding-popup-bottom .eu-cookie-withdraw-banner,.eu-cookie-withdraw-tab{background:#0779BF;}#sliding-popup.sliding-popup-bottom.eu-cookie-withdraw-wrapper{background:transparent}#sliding-popup .popup-content #popup-text h1,#sliding-popup .popup-content #popup-text h2,#sliding-popup .popup-content #popup-text h3,#sliding-popup .popup-content #popup-text p,.eu-cookie-compliance-more-button,.eu-cookie-compliance-secondary-button,.eu-cookie-withdraw-tab{color:#ffffff !important;}.eu-cookie-withdraw-tab{border-color:#ffffff;}

/* ]]> */
</style>
@include('frontend.find_color.includes.findColorCss')

@endsection
@section('content')
<div class="zone-filter">
  <div class="hdr-mx container-filter">
    <div class="filter-region">
      <a href="#" class="filter-toggle filter-toggle-touch pull-left no-padding col-xs-6 col-sm-2 visible-xs">Bộ lọc</a>
      <a href="#" class="filter-toggle filter-toggle-normal pull-left no-padding col-xs-6 col-sm-2 hidden-xs fl-expanded" tabindex="21">Bộ lọc</a>
      <a href="#" class="filter-reset pull-right fl-right col-xs-6 col-sm-2" style="display: none;" tabindex="22">Khởi tạo lại bộ lọc </a>
      <div class="col-xs-12  col-sm-8 filter-selections" id="filter-selections"></div>
      <div id="page-filters">
        <div class="region region-filters">
          <section id="block-flourish-search-solr-flourish-search-overlay" class="block block-flourish-search-solr clearfix">
          </section>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="zone-content" class="zone-content focus-outline">
  <div class="main-container container focus-outline">
    <!-- /#page-header -->
    <div class="row focus-outline">
      <section class="col-sm-12 focus-outline">
        <!--   -->
        <a id="main-content"></a>
        <h1 class="page-header">Tìm màu sắc</h1>
        <div class="region region-content focus-outline">
          <div id="full-form-wrapper" class="focus-outline">
            <form class="flourish-colors-listing form-counter focus-outline" action="/vi/mau-sac-bang-mau" method="post" id="flourish-colors-listing-solr-form--2" accept-charset="UTF-8">
              <div class="focus-outline">
                <button style="display:none" id="edit-filters-reset-link--2" name="filters_reset_link" value="Reset Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="24">Reset Filters</button>
                <button style="display:none" id="edit-finish-filters-reset-link--2" name="finish_filters_reset_link" value="Reset Finish Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="25">Reset Finish Filters</button>
                <button style="display:none" id="edit-surface-usage-filters-reset-link--2" name="surface_usage_filters_reset_link" value="Reset Surface Type Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="26">Reset Surface Type Filters</button>
                <button style="display:none" id="edit-room-type-filters-reset-link--2" name="room_type_filters_reset_link" value="Reset Room Type Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="27">Reset Room Type Filters</button>
                <div class="colour-palette-wrapper focus-outline">
                  <div id="block-views-color-display-block" class="colors_fieldset focus-outline">
                    <h2 class="block__title block-title block-title text-center">Tôi đang quan tâm đến tông màu…</h2>
                  </div>
                  @include('frontend.find_color.includes.color_hue_selector')
                  <div id="filter-wrapper-clp" class="filter-wrapper filter-wrapper-clp filter-wrapper-fullwidth active">
                    <div class="title-section">
                      <h2 class="text-center">Bộ lọc</h2>
                      <svg class="icon icon-close right">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-close"></use>
                      </svg>
                    </div>
                    <div class="clp-wrap collapse-wrap accordeon">
                      <div id="form-color-room-type" class="form-color-room-type form-collapse collapse-area">
                        <div class="collapse-trigger accordeon-collapse-trigger-processed">
                          Nơi cần sơn<span class="count-label input-counter">0</span>
                          <svg class="icon icon-collapse-arrow right">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                          </svg>
                        </div>
                        <div class="collapse-content amountCount" style="display: none;">
                          <div class="form-type-radios form-item-color-room-type form-item form-group append-outline-processed">
                            <div id="edit-color-room-type--2" class="form-radios color-room-type">
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Tất cả các" type="radio" id="edit-color-room-type-all--2" name="color_room_type" value="All" checked="checked" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="52">  <label class="option" for="edit-color-room-type-all--2">Tất cả các </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Hành lang" type="radio" id="edit-color-room-type-hnh-lang--2" name="color_room_type" value="Hành lang" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="53">  <label class="option" for="edit-color-room-type-hnh-lang--2">Hành lang </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Nhà bếp" type="radio" id="edit-color-room-type-nh-bp--2" name="color_room_type" value="Nhà bếp" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="54">  <label class="option" for="edit-color-room-type-nh-bp--2">Nhà bếp </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Nhà văn phòng" type="radio" id="edit-color-room-type-nh-vn-phng--2" name="color_room_type" value="Nhà văn phòng" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="55">  <label class="option" for="edit-color-room-type-nh-vn-phng--2">Nhà văn phòng </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Phòng khách" type="radio" id="edit-color-room-type-phng-khch--2" name="color_room_type" value="Phòng khách" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="56">  <label class="option" for="edit-color-room-type-phng-khch--2">Phòng khách </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Phòng ngủ" type="radio" id="edit-color-room-type-phng-ng--2" name="color_room_type" value="Phòng ngủ" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="57">  <label class="option" for="edit-color-room-type-phng-ng--2">Phòng ngủ </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Phòng trẻ em" type="radio" id="edit-color-room-type-phng-tr-em--2" name="color_room_type" value="Phòng trẻ em" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="58">  <label class="option" for="edit-color-room-type-phng-tr-em--2">Phòng trẻ em </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Phòng tắm" type="radio" id="edit-color-room-type-phng-tm--2" name="color_room_type" value="Phòng tắm" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="59">  <label class="option" for="edit-color-room-type-phng-tm--2">Phòng tắm </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-room-type form-item radio append-outline-processed">
                                <input data-label="Phòng ăn" type="radio" id="edit-color-room-type-phng-n--2" name="color_room_type" value="Phòng ăn" class="form-radio ajax-processed CLPLocationChange-processed" tabindex="60">  <label class="option" for="edit-color-room-type-phng-n--2">Phòng ăn </label>
                                <span class="radio-outline"></span>
                              </div>
                            </div>
                          </div>
                          <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="61">Show more [+]</a>
                          <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="62">Show less [-]</a>
                        </div>
                      </div>
                      <div id="form-color-surface-usage" class="form-color-surface-usage form-collapse collapse-area">
                        <div class="collapse-trigger accordeon-collapse-trigger-processed">
                          Bề mặt cần sơn<span class="count-label input-counter">0</span>
                          <svg class="icon icon-collapse-arrow right">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                          </svg>
                        </div>
                        <div class="collapse-content amountCount" style="display: none;">
                          <div id="edit-color-surface-usage--2" class="form-checkboxes color-surface">
                            <div class="form-type-checkbox form-item-color-surface-usage-Trần-nhà form-item checkbox append-outline-processed">
                              <input data-label="Trần nhà" type="checkbox" id="edit-color-surface-usage-trn-nh--2" name="color_surface_usage[Trần nhà]" value="Trần nhà" class="form-checkbox CLPSurfaceChange-processed" tabindex="63">  <label class="option" for="edit-color-surface-usage-trn-nh--2">Trần nhà </label>
                              <span class="checkbox-outline"></span>
                            </div>
                            <div class="form-type-checkbox form-item-color-surface-usage-Tường form-item checkbox append-outline-processed">
                              <input data-label="Tường" type="checkbox" id="edit-color-surface-usage-tng--2" name="color_surface_usage[Tường]" value="Tường" class="form-checkbox CLPSurfaceChange-processed" tabindex="64">  <label class="option" for="edit-color-surface-usage-tng--2">Tường </label>
                              <span class="checkbox-outline"></span>
                            </div>
                            <button class="bttn primary hidden-xs full-width btn-filter-confirm btn btn-default form-submit ajax-processed" id="edit-color-surface-usage-confirm--2" name="color_surface_usage_button" value="Xác nhận" type="button" tabindex="65">Xác nhận</button>
                          </div>
                          <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="66">Show more [+]</a>
                          <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="67">Show less [-]</a>
                        </div>
                      </div>
                      <div id="form-color-finish" class="form-color-finish form-collapse collapse-area">
                        <div class="collapse-trigger accordeon-collapse-trigger-processed">
                          Bề mặt hoàn thiện<span class="count-label input-counter">0</span>
                          <svg class="icon icon-collapse-arrow right">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                          </svg>
                        </div>
                        <div class="collapse-content amountCount" style="display: none;">
                          <div class="form-type-radios form-item-color-finish form-item form-group append-outline-processed">
                            <div id="edit-color-finish--2" class="form-radios color-finish">
                              <div class="form-type-radio form-item-color-finish form-item radio append-outline-processed">
                                <input data-label="Tất cả các" type="radio" id="edit-color-finish-all--2" name="color_finish" value="All" checked="checked" class="form-radio ajax-processed CLPFinishChange-processed" tabindex="68">  <label class="option" for="edit-color-finish-all--2">Tất cả các </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-finish form-item radio append-outline-processed">
                                <input data-label="Bề Mặt Mờ" type="radio" id="edit-color-finish-b-mt-m--2" name="color_finish" value="Bề Mặt Mờ" class="form-radio ajax-processed CLPFinishChange-processed" tabindex="69">  <label class="option" for="edit-color-finish-b-mt-m--2">Bề Mặt Mờ </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-finish form-item radio append-outline-processed">
                                <input data-label="Bề Mặt Bóng Mờ" type="radio" id="edit-color-finish-b-mt-bng-m--2" name="color_finish" value="Bề Mặt Bóng Mờ" class="form-radio ajax-processed CLPFinishChange-processed" tabindex="70">  <label class="option" for="edit-color-finish-b-mt-bng-m--2">Bề Mặt Bóng Mờ </label>
                                <span class="radio-outline"></span>
                              </div>
                              <div class="form-type-radio form-item-color-finish form-item radio append-outline-processed">
                                <input data-label="Bề mặt bóng" type="radio" id="edit-color-finish-b-mt-bng--2" name="color_finish" value="Bề mặt bóng" class="form-radio ajax-processed CLPFinishChange-processed" tabindex="71">  <label class="option" for="edit-color-finish-b-mt-bng--2">Bề mặt bóng </label>
                                <span class="radio-outline"></span>
                              </div>
                            </div>
                          </div>
                          <a href="#" class="more-less btn-show-more margin-bottom-l" tabindex="72">Show more [+]</a>
                          <a href="#" class="more-less btn-show-less margin-bottom-l" tabindex="73">Show less [-]</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="filter-section bar-desktop">
                    <div class="bar-title">Bộ lọc của tôi</div>
                    <div id="filter-selections" class="filter-labels"></div>
                    <a href="#" class="filter-reset inline-text-link primary btn-clear" tabindex="74" style="display: none;">Khởi tạo lại bộ lọc</a>
                  </div>
                  <div class="results-bar">
                    <a href="#" class="filter-reset inline-text-link primary btn-clear" tabindex="75" style="display: none;">Khởi tạo lại bộ lọc</a>
                    <button id="filter_results_btn" class="bttn primary bttn-auto-width pull-right" tabindex="76">  212 Kết quả</button>
                  </div>
                  <section class="filtering">
                    <div class="row">
                      <div class="filter-zone">
                        <section id="color-box-container" class="col-sm-12">
                          <div class="color-travels no-padding">
                            <ul class="color-travels-options">
                              <li class="first travel-list">
                                <a href="#" data-type="list" title="List View" class="travel-list-view travel-option" tabindex="77">List View</a>
                              </li>
                              <li class="first travel-grid">
                                <a href="#" data-type="grid" title="Grid View" class="travel-grid-view on travel-option" tabindex="78">Grid View</a>
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
                  <div class="store-links-solr tabs col-xs-12"><span class="store-links tab-link col-lg-6 col-md-6 col-sm-6 col-xs-6 boxshadow-class" style="float:left" tabindex="79"><button class="colors-ready-to-buy use-ajax  btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed" style="opacity: 1; height: 58px;" id="edit-colors-ready-to-buy--2" name="colors_ready_to_buy" value="Màu pha sẵn" type="button" tabindex="80">Màu pha sẵn</button>
                    </span><span class="store-links tab-link col-lg-6 col-md-6 col-sm-6 col-xs-6 boxshadow-class" style="float:left" tabindex="81"><button class="colors-ready-to-mix use-ajax active btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed" style="opacity: 4; height: 58px;" id="edit-colors-ready-to-mix--2" name="colors_ready_to_mix" value="Màu pha bằng máy vi tính" type="button" tabindex="82">Màu pha bằng máy vi tính</button>
                    </span>
                  </div>
                  <div class="container colors-listing-box" id="color-box-container">
                    <div id="hue-container" class="col-md-12 colors clearfix fl-overflow-visible">
                      <p class="h1"><span class="main-color-tab">Màu sắc phổ biến (25)</span><span class="link-gray pull-right hidden-xs sub-color-tab main"><button data-link="all" class="use-ajax btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed" style="opacity:4" id="edit-show-colors-link--2" name="show_colors_link" value="Xem tất cả các màu  (212)" type="button" tabindex="83">Xem tất cả các màu  (212)</button>
                        </span>
                      </p>
                      <div id="popular-colors-list">
                        <div class="solr-pure-color-list">
                          <div class="solr-pure-color-name">
                            <h2 class="color-type">Họ màu trắng</h2>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166298 colorBox-processed flourish_google_tag_manager-processed" style="background:#F4F0E4" data-title="61YY 89/040" data-id="F4F0E4" data-colorid="1166298" alt="61YY 89/040" tabindex="84">
                              <p class="cnme color-text" data-rgb="F4F0E4" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">61YY 89/040</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166294 colorBox-processed flourish_google_tag_manager-processed" style="background:#F2EAD9" data-title="53YY 87/070" data-id="F2EAD9" data-colorid="1166294" alt="53YY 87/070" tabindex="85">
                              <p class="cnme color-text" data-rgb="F2EAD9" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">53YY 87/070</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166292 colorBox-processed flourish_google_tag_manager-processed" style="background:#F2E8D9" data-title="20YY 83/075" data-id="F2E8D9" data-colorid="1166292" alt="20YY 83/075" tabindex="86">
                              <p class="cnme color-text" data-rgb="F2E8D9" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">20YY 83/075</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166295 colorBox-processed flourish_google_tag_manager-processed" style="background:#F1E9DC" data-title="40YY 83/064" data-id="F1E9DC" data-colorid="1166295" alt="40YY 83/064" tabindex="87">
                              <p class="cnme color-text" data-rgb="F1E9DC" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">40YY 83/064</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166300 colorBox-processed flourish_google_tag_manager-processed" style="background:#F0EEE3" data-title="81YY 87/031" data-id="F0EEE3" data-colorid="1166300" alt="81YY 87/031" tabindex="88">
                              <p class="cnme color-text" data-rgb="F0EEE3" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">81YY 87/031</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166297 colorBox-processed flourish_google_tag_manager-processed" style="background:#F0EDE2" data-title="66YY 85/045" data-id="F0EDE2" data-colorid="1166297" alt="66YY 85/045" tabindex="89">
                              <p class="cnme color-text" data-rgb="F0EDE2" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">66YY 85/045</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166299 colorBox-processed flourish_google_tag_manager-processed" style="background:#EFEDE2" data-title="82YY 85/038" data-id="EFEDE2" data-colorid="1166299" alt="82YY 85/038" tabindex="90">
                              <p class="cnme color-text" data-rgb="EFEDE2" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">82YY 85/038</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166293 colorBox-processed flourish_google_tag_manager-processed" style="background:#EFE9DF" data-title="40YY 83/043" data-id="EFE9DF" data-colorid="1166293" alt="40YY 83/043" tabindex="91">
                              <p class="cnme color-text" data-rgb="EFE9DF" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">40YY 83/043</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1904350 colorBox-processed flourish_google_tag_manager-processed" style="background:#EEEFEA" data-title="White On White" data-id="EEEFEA" data-colorid="1904350" alt="White On White" tabindex="92">
                              <p class="cnme color-text" data-rgb="EEEFEA" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">White On White</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166296 colorBox-processed flourish_google_tag_manager-processed" style="background:#EEEFEA" data-title="30GY 88/014" data-id="EEEFEA" data-colorid="1166296" alt="30GY 88/014" tabindex="93">
                              <p class="cnme color-text" data-rgb="EEEFEA" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">30GY 88/014</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166291 colorBox-processed flourish_google_tag_manager-processed" style="background:#EEE7DF" data-title="90YR 83/035" data-id="EEE7DF" data-colorid="1166291" alt="90YR 83/035" tabindex="94">
                              <p class="cnme color-text" data-rgb="EEE7DF" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">90YR 83/035</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166290 colorBox-processed flourish_google_tag_manager-processed" style="background:#E9E7E6" data-title="50RB 83/005" data-id="E9E7E6" data-colorid="1166290" alt="50RB 83/005" tabindex="95">
                              <p class="cnme color-text" data-rgb="E9E7E6" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">50RB 83/005</p>
                            </a>
                          </div>
                        </div>
                        <div class="solr-muted-color-list">
                          <div class="solr-muted-color-name">
                            <h2 class="color-type muted_clrs">Trắng trầm</h2>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166302 colorBox-processed flourish_google_tag_manager-processed" style="background:#EFE8DF" data-title="20YY 83/038" data-id="EFE8DF" data-colorid="1166302" alt="20YY 83/038" tabindex="96">
                              <p class="cnme color-text" data-rgb="EFE8DF" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">20YY 83/038</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166306 colorBox-processed flourish_google_tag_manager-processed" style="background:#EDE8E2" data-title="80YR 83/017" data-id="EDE8E2" data-colorid="1166306" alt="80YR 83/017" tabindex="97">
                              <p class="cnme color-text" data-rgb="EDE8E2" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">80YR 83/017</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166304 colorBox-processed flourish_google_tag_manager-processed" style="background:#ECE8E5" data-title="90RR 83/009" data-id="ECE8E5" data-colorid="1166304" alt="90RR 83/009" tabindex="98">
                              <p class="cnme color-text" data-rgb="ECE8E5" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">90RR 83/009</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166301 colorBox-processed flourish_google_tag_manager-processed" style="background:#EBE8E1" data-title="40YY 83/021" data-id="EBE8E1" data-colorid="1166301" alt="40YY 83/021" tabindex="99">
                              <p class="cnme color-text" data-rgb="EBE8E1" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">40YY 83/021</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166307 colorBox-processed flourish_google_tag_manager-processed" style="background:#E8E0D8" data-title="98YR 78/041" data-id="E8E0D8" data-colorid="1166307" alt="98YR 78/041" tabindex="100">
                              <p class="cnme color-text" data-rgb="E8E0D8" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">98YR 78/041</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1904380 colorBox-processed flourish_google_tag_manager-processed" style="background:#E6E9E6" data-title="Snowed In" data-id="E6E9E6" data-colorid="1904380" alt="Snowed In" tabindex="101">
                              <p class="cnme color-text" data-rgb="E6E9E6" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">Snowed In</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166309 colorBox-processed flourish_google_tag_manager-processed" style="background:#E4E7E9" data-title="59BB 81/022" data-id="E4E7E9" data-colorid="1166309" alt="59BB 81/022" tabindex="102">
                              <p class="cnme color-text" data-rgb="E4E7E9" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">59BB 81/022</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1904351 colorBox-processed flourish_google_tag_manager-processed" style="background:#E4E1DB" data-title="Winter Bird" data-id="E4E1DB" data-colorid="1904351" alt="Winter Bird" tabindex="103">
                              <p class="cnme color-text" data-rgb="E4E1DB" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">Winter Bird</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166303 colorBox-processed flourish_google_tag_manager-processed" style="background:#E3DDD2" data-title="40YY 74/056" data-id="E3DDD2" data-colorid="1166303" alt="40YY 74/056" tabindex="104">
                              <p class="cnme color-text" data-rgb="E3DDD2" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">40YY 74/056</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1904349 colorBox-processed flourish_google_tag_manager-processed" style="background:#E0DAD5" data-title="Heatherbelle" data-id="E0DAD5" data-colorid="1904349" alt="Heatherbelle" tabindex="105">
                              <p class="cnme color-text" data-rgb="E0DAD5" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">Heatherbelle</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166305 colorBox-processed flourish_google_tag_manager-processed" style="background:#DFDAD5" data-title="10YY 72/021" data-id="DFDAD5" data-colorid="1166305" alt="10YY 72/021" tabindex="106">
                              <p class="cnme color-text" data-rgb="DFDAD5" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">10YY 72/021</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166308 colorBox-processed flourish_google_tag_manager-processed" style="background:#DBDCE2" data-title="70BB 74/040" data-id="DBDCE2" data-colorid="1166308" alt="70BB 74/040" tabindex="107">
                              <p class="cnme color-text" data-rgb="DBDCE2" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">70BB 74/040</p>
                            </a>
                          </div>
                          <div class="rowBox col-xs-3 col-sm-2 col-md-2 col-lg-2">
                            <a class="color-box-child  color-box-child-1166310 colorBox-processed flourish_google_tag_manager-processed" style="background:#D8D8D7" data-title="00NN 72/000" data-id="D8D8D7" data-colorid="1166310" alt="00NN 72/000" tabindex="108">
                              <p class="cnme color-text" data-rgb="D8D8D7" style="color: rgb(102,102,102); stroke: rgb(102,102,102)">00NN 72/000</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="color-lister-bottom-new colors-listing-box-bottom">
                        <h2>Tôi không thể tìm thấy màu sắc mong muốn</h2>
                        <button data-link="all" class="btn-normal-curve sub-color-tab use-ajax btn btn-default form-submit ajax-processed flourish_google_tag_manager-processed" style="opacity:4" id="edit-show-right-colors--2" name="show_right_colors" value="Xem tất cả các màu  (212)" type="button" tabindex="109">Xem tất cả các màu  (212)</button>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="form_build_id" value="form-Bkk1XnDF727QZ3GClb94Dhcjei4BPBNt8Wr0Ojbzmh4" tabindex="110">
                  <input type="hidden" name="form_id" value="flourish_colors_listing_solr_form" tabindex="111">
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
