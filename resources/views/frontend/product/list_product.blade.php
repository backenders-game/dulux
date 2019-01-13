@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('cssPage')
@include('frontend.includes.css.listProductCss')
@endsection
@section('content')
<div id="zone-content" class="zone-content">
  <div class="main-container container">
    <!-- /#page-header -->
    <div class="row">
      <section class="col-sm-12">
        <!--   -->
        <a id="main-content"></a>
        <div class="region region-content">
          <div id="full-form-wrapper">
            <section id="block-system-main" class="block block-system clearfix" role="navigation">
              <form class="form-counter" action="/vi/san-pham/san-pham-phu-tro" method="post" id="flourish-product-listing-filters-solr-form" accept-charset="UTF-8">
                <div>
                  <button style="display:none" id="edit-filters-reset-link" name="filters_reset_link" value="Reset Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="25">Reset Filters</button>
                  <button style="display:none" id="edit-room-type-filters-reset-link" name="room_type_filters_reset_link" value="Reset Room Type Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="26">Reset Room Type Filters</button>
                  <button style="display:none" id="edit-surface-usage-filters-reset-link" name="surface_usage_filters_reset_link" value="Reset Surface Usage Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="27">Reset Surface Usage Filters</button>
                  <button style="display:none" id="edit-finish-filters-reset-link" name="finish_filters_reset_link" value="Reset Finish Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="28">Reset Finish Filters</button>
                  <div id="product-listing-filters-wrapper">
                    <div class="row plp-color-bar-show">
                      <div class="col-sm-12">
                        <div class="clearfix">
                          <a class="swatch-close vr-margin-top-4 right close-color" data-close="#swatch-bar" tabindex="29">
                            <svg class="icon icon-close">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-close"></use>
                            </svg>
                          </a>
                        </div>
                        <div id="swatch-bar" class="swatch-bar squircle vr-margin-top-1">
                          <p class="h4 plp-color-name"></p>
                          <a class="inline-text-link pick-a-colour change-color" tabindex="30">
                            Thay đổi màu này    
                            <svg class="icon icon-arrow-right ">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-arrow-right"></use>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-listing-filters fl-equi-height-container vr-margin-top-7">
                      <div class="row">
                        <div class="col-md-3">
                          <div id="filter-wrapper-plp" class="filter-wrapper filter-wrapper-plp">
                            <div class="title-section hidden-sm-up">
                              <h2 class="text-center">Bộ lọc</h2>
                              <svg class="icon icon-close right">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-close"></use>
                              </svg>
                            </div>
                            <div class="title-section hidden-sm-down">
                              <h2 class="h5">Bộ lọc</h2>
                              <a href="javascript:void(0)" class="filter-reset inline-text-link primary btn-clear" tabindex="31" style="display: none;">Khởi tạo lại bộ lọc</a>                              
                            </div>
                            <div class="clp-wrap collapse-wrap general">
                              <div class="form-collapse collapse-area visible" style="display: none;">
                                <div class="collapse-trigger general-collapse-trigger-processed">
                                  Nơi cần sơn                <span class="count-label input-counter">0</span>
                                  <svg class="icon icon-collapse-arrow right">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                                  </svg>
                                </div>
                                <div class="collapse-content amountCount" style="display: block;">
                                </div>
                              </div>
                              <div class="form-collapse collapse-area visible" style="order:;-webkit-order:;">
                                <div class="collapse-trigger general-collapse-trigger-processed">
                                  Project Type                <span class="count-label input-counter">0</span>
                                  <svg class="icon icon-collapse-arrow right">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                                  </svg>
                                </div>
                                <div class="collapse-content amountCount" style="display: block;">
                                  <div class="form-type-radios form-item-product-room-type form-item form-group append-outline-processed">
                                    <div id="edit-product-room-type" class="form-radios product-room-types">
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Tất cả các" disabled="1" type="radio" id="edit-product-room-type-all" name="product_room_type" value="All" checked="checked" tabindex="32">  <label class="option" for="edit-product-room-type-all">Tất cả các </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Hành lang" disabled="1" type="radio" id="edit-product-room-type-hnh-lang" name="product_room_type" value="Hành lang" tabindex="33">  <label class="option" for="edit-product-room-type-hnh-lang">Hành lang </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Nhà văn phòng" disabled="1" type="radio" id="edit-product-room-type-nh-vn-phng" name="product_room_type" value="Nhà văn phòng" tabindex="34">  <label class="option" for="edit-product-room-type-nh-vn-phng">Nhà văn phòng </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng khách" disabled="1" type="radio" id="edit-product-room-type-phng-khch" name="product_room_type" value="Phòng khách" tabindex="35">  <label class="option" for="edit-product-room-type-phng-khch">Phòng khách </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng ngủ" disabled="1" type="radio" id="edit-product-room-type-phng-ng" name="product_room_type" value="Phòng ngủ" tabindex="36">  <label class="option" for="edit-product-room-type-phng-ng">Phòng ngủ </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: none;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng trẻ em" disabled="1" type="radio" id="edit-product-room-type-phng-tr-em" name="product_room_type" value="Phòng trẻ em" tabindex="37">  <label class="option" for="edit-product-room-type-phng-tr-em">Phòng trẻ em </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: none;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng ăn" disabled="1" type="radio" id="edit-product-room-type-phng-n" name="product_room_type" value="Phòng ăn" tabindex="38">  <label class="option" for="edit-product-room-type-phng-n">Phòng ăn </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <a href="javascript:void(0)" class="more-less btn-show-more margin-bottom-l PLPShowMoreClick-processed" tabindex="39" style="display: inline;">Show more [+]</a>
                                  <a href="javascript:void(0)" class="more-less btn-show-less margin-bottom-l PLPShowLessClick-processed" tabindex="40" style="display: none;">Show less [–]</a>
                                </div>
                              </div>
                              <div class="form-collapse collapse-area visible" style="order:;-webkit-order:;">
                                <div class="collapse-trigger general-collapse-trigger-processed">
                                  Bề mặt cần sơn                <span class="count-label input-counter">0</span>
                                  <svg class="icon icon-collapse-arrow right">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                                  </svg>
                                </div>
                                <div class="collapse-content amountCount" style="display: block;">
                                  <div class="form-type-checkboxes form-item-product-surface-usage form-item form-group append-outline-processed">
                                    <div id="edit-product-surface-usage" class="form-checkboxes product-surface-usage">
                                      <div class="form-type-checkbox form-item-product-surface-usage-Tường form-disabled form-item checkbox append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-checkbox ajax-processed PLPproductSurfaceChange-processed" data-label="Tường" disabled="1" type="checkbox" id="edit-product-surface-usage-tng" name="product_surface_usage[Tường]" value="Tường" tabindex="41">  <label class="option" for="edit-product-surface-usage-tng">Tường </label>
                                        <span class="checkbox-outline"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <a href="javascript:void(0)" class="more-less btn-show-more margin-bottom-l PLPShowMoreClick-processed" tabindex="42" style="display: none;">Show more [+]</a>
                                  <a href="javascript:void(0)" class="more-less btn-show-less margin-bottom-l PLPShowLessClick-processed" tabindex="43" style="display: none;">Show less [–]</a>
                                </div>
                              </div>
                              <div class="form-collapse collapse-area visible" style="order:;-webkit-order:;">
                                <div class="collapse-trigger general-collapse-trigger-processed">
                                  Bề mặt hoàn thiện                <span class="count-label input-counter">0</span>
                                  <svg class="icon icon-collapse-arrow right">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                                  </svg>
                                </div>
                                <div class="collapse-content amountCount" style="display: block;">
                                  <div class="form-type-radios form-item-product-finish form-item form-group append-outline-processed">
                                    <div id="edit-product-finish" class="form-radios product-finish">
                                      <div class="form-type-radio form-item-product-finish form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductFinishChange-processed" data-label="Tất cả các" disabled="1" type="radio" id="edit-product-finish-all" name="product_finish" value="All" checked="checked" tabindex="44">  <label class="option" for="edit-product-finish-all">Tất cả các </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-finish form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductFinishChange-processed" data-label="Bề Mặt Mờ" disabled="1" type="radio" id="edit-product-finish-b-mt-m" name="product_finish" value="Bề Mặt Mờ" tabindex="45">  <label class="option" for="edit-product-finish-b-mt-m">Bề Mặt Mờ </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-finish form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductFinishChange-processed" data-label="NA" disabled="1" type="radio" id="edit-product-finish-na" name="product_finish" value="NA" tabindex="46">  <label class="option" for="edit-product-finish-na">NA </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <a href="javascript:void(0)" class="more-less btn-show-more margin-bottom-l PLPShowMoreClick-processed" tabindex="47" style="display: none;">Show more [+]</a>
                                  <a href="javascript:void(0)" class="more-less btn-show-less margin-bottom-l PLPShowLessClick-processed" tabindex="48" style="display: none;">Show less [–]</a>
                                </div>
                              </div>
                            </div>
                            <!-- collapse-wrap -->
                          </div>
                          <div class="results-bar">
                            <a href="javascript:void(0)" class="filter-reset filter-reset inline-text-link primary btn-clear" tabindex="49" style="display: none;">Khởi tạo lại bộ lọc</a>
                            <button id="filter_results_btn" class="bttn primary bttn-auto-width pull-right" tabindex="50">  <span>4</span> Kết quả</button>                            
                          </div>
                        </div>
                        <div class="product-listing-markup-wrapper col-md-9 view-content">
                          <div class="col-sm-12">
                            <h1 class="h2 vr-margin-bottom-0">Tìm sản phẩm cho dự án của bạn</h1>
                            <div class="product-listing-information">
                              <div class="product-amount vr-padding-vertical-4"><span>4</span> Đã tìm thấy sản phẩm</div>
                              <section class="filtering">
                                <div class="filter-zone">
                                  <div class="icon-plus-text ipt-icon-settings right ">
                                    Bộ lọc 
                                    <svg class="icon icon-settings ">
                                      <use xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-settings"></use>
                                    </svg>
                                  </div>
                                  <span class="count-label totalInputCount">0</span> 
                                  <div class="clearfix"></div>
                                </div>
                              </section>
                            </div>
                            <div class="filter-section bar-desktop vr-padding-vertical-4">
                              <div class="bar-title">Bộ lọc của tôi</div>
                              <div id="filter-selections" class="filter-labels"></div>
                              <a href="javascript:void(0)" class="filter-reset inline-text-link primary btn-clear" tabindex="51" style="display: none;">Khởi tạo lại bộ lọc</a>
                            </div>
                            <div class="onedomain-component">
                              <div class="row">
                                <div class="view view-product-listing-solr view-id-product_listing_solr view-display-id-page_6 view-product-Listing view-dom-id-b2e9d994009973b89b4cf4157c435860">
                                  <div class="view-header">
                                    <p class="h1 fl-prod-page-header">4 Products found</p>
                                  </div>
                                  <div class="view-content">
                                    <div class="row vr-margin-top-7">
                                      <div class="col-xs-12 col-md-4">
                                        <div class="product-card-container">
                                          <section class="product-card js-product-card">
                                            <div class="product-card__underlay"></div>
                                            <span id="65614" class=" scrap-book-add-product focus-outline product-card__button js-notify icon-heart js-toggle-class" data-type="product" data-categorytype="Primer" data-globalid="f613d792-50de-4828-a1c7-a2d0011995dd" data-colorid="" data-colorcollection="" data-colorname="" data-tc-class="active">
                                              <span class="icon-heart-empty">
                                                <svg class="icon  icon--fill" alt="" title="">
                                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-favourite-empty"></use>
                                                </svg>
                                              </span>
                                              <span class="icon-heart-filled">
                                                <svg class="icon  icon--fill" alt="" title="">
                                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-heart-fill"></use>
                                                </svg>
                                              </span>
                                            </span>
                                            <a class="product-card__link" href="{{route('frontend.chi_tiet_san_pham')}}" title="Bột trét cao cấp Dulux" tabindex="52">
                                              <article class="product-card__content">
                                                <p class="product-card__title js-product-card-title" style="height: 48px;">Bột trét cao cấp Dulux</p>
                                                <div class="product-card__image-wrapper">
                                                  <div class="product-card__image">
                                                    <img src="https://31fc8ad09e49483b220c-ba33b5880d166b057491bd70be456089.ssl.cf3.rackcdn.com/bt-tret-cao-cp-dulux_m.png">
                                                  </div>
                                                </div>
                                                <ul class="icon-list product-card__features">
                                                </ul>
                                                <button type="button" class="button  button--grey button--square" tabindex="53">
                                                  <span class="button-text-label">
                                                    <svg class="icon icon--medium icon--fill" title="">
                                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-arrow-right">
                                                      </use>
                                                    </svg>
                                                  </span>
                                                </button>
                                              </article>
                                            </a>
                                          </section>
                                        </div>
                                      </div>
                                      <div class="col-xs-12 col-md-4">
                                        <div class="product-card-container">
                                          <section class="product-card js-product-card">
                                            <div class="product-card__underlay"></div>
                                            <span id="65622" class=" scrap-book-add-product focus-outline product-card__button js-notify icon-heart js-toggle-class" data-type="product" data-categorytype="Primer" data-globalid="9ca1c08e-b004-4ef7-9726-a2d001199474" data-colorid="" data-colorcollection="" data-colorname="" data-tc-class="active">
                                              <span class="icon-heart-empty">
                                                <svg class="icon  icon--fill" alt="" title="">
                                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-favourite-empty"></use>
                                                </svg>
                                              </span>
                                              <span class="icon-heart-filled">
                                                <svg class="icon  icon--fill" alt="" title="">
                                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-heart-fill"></use>
                                                </svg>
                                              </span>
                                            </span>
                                            <a class="product-card__link" href="{{route('frontend.chi_tiet_san_pham')}}" title="Dulux Weathershield Sơn lót chống kiềm" tabindex="54">
                                              <article class="product-card__content">
                                                <p class="product-card__title js-product-card-title" style="height: 48px;">Dulux Weathershield Sơn lót chống kiềm</p>
                                                <div class="product-card__image-wrapper">
                                                  <div class="product-card__image">
                                                    <img src="https://31fc8ad09e49483b220c-ba33b5880d166b057491bd70be456089.ssl.cf3.rackcdn.com/dulux-weathershield-son-lot-chng-kim_m.png">
                                                  </div>
                                                </div>
                                                <ul class="icon-list product-card__features">
                                                  <li>
                                                    <span>
                                                      <svg class="icon icon--small " alt="" title="" fill="#2fc48d">
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-checkmark"></use>
                                                      </svg>
                                                    </span>
                                                    <span>
                                                    Độ bám dính cao
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      <svg class="icon icon--small " alt="" title="" fill="#2fc48d">
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-checkmark"></use>
                                                      </svg>
                                                    </span>
                                                    <span>
                                                    Giữ màu sắc bền lâu cho lớp sơn phủ
                                                    </span>
                                                  </li>
                                                </ul>
                                                <button type="button" class="button  button--grey button--square" tabindex="55">
                                                  <span class="button-text-label">
                                                    <svg class="icon icon--medium icon--fill" title="">
                                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-arrow-right">
                                                      </use>
                                                    </svg>
                                                  </span>
                                                </button>
                                              </article>
                                            </a>
                                          </section>
                                        </div>
                                      </div>
                                      <div class="col-xs-12 col-md-4">
                                        <div class="product-card-container">
                                          <section class="product-card js-product-card">
                                            <div class="product-card__underlay"></div>
                                            <span id="65626" class=" scrap-book-add-product focus-outline product-card__button js-notify icon-heart js-toggle-class" data-type="product" data-categorytype="Primer" data-globalid="81f899b9-5b9a-485c-a611-a2d001199251" data-colorid="" data-colorcollection="" data-colorname="" data-tc-class="active">
                                              <span class="icon-heart-empty">
                                                <svg class="icon  icon--fill" alt="" title="">
                                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-favourite-empty"></use>
                                                </svg>
                                              </span>
                                              <span class="icon-heart-filled">
                                                <svg class="icon  icon--fill" alt="" title="">
                                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-heart-fill"></use>
                                                </svg>
                                              </span>
                                            </span>
                                            <a class="product-card__link" href="{{route('frontend.chi_tiet_san_pham')}}" title="Sơn Lót Nội Thất Cao Cấp Dulux" tabindex="56">
                                              <article class="product-card__content">
                                                <p class="product-card__title js-product-card-title" style="height: 48px;">Sơn Lót Nội Thất Cao Cấp Dulux</p>
                                                <div class="product-card__image-wrapper">
                                                  <div class="product-card__image">
                                                    <img src="https://31fc8ad09e49483b220c-ba33b5880d166b057491bd70be456089.ssl.cf3.rackcdn.com/son-lot-ni-tht-cao-cp-dulux_m.png">
                                                  </div>
                                                </div>
                                                <ul class="icon-list product-card__features">
                                                  <li>
                                                    <span>
                                                      <svg class="icon icon--small " alt="" title="" fill="#2fc48d">
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-checkmark"></use>
                                                      </svg>
                                                    </span>
                                                    <span>
                                                    Bảo vệ cả trong lẫn ngoài
                                                    </span>
                                                  </li>
                                                </ul>
                                                <button type="button" class="button  button--grey button--square" tabindex="57">
                                                  <span class="button-text-label">
                                                    <svg class="icon icon--medium icon--fill" title="">
                                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-arrow-right">
                                                      </use>
                                                    </svg>
                                                  </span>
                                                </button>
                                              </article>
                                            </a>
                                          </section>
                                        </div>
                                      </div>
                                      <div class="col-xs-12 col-md-4">
                                        <div class="product-card-container">
                                          <section class="product-card js-product-card">
                                            <div class="product-card__underlay"></div>
                                            <span id="97503" class=" scrap-book-add-product focus-outline product-card__button js-notify icon-heart js-toggle-class" data-type="product" data-categorytype="Primer" data-globalid="9e8eebbd-1cd2-4a55-8eb1-a2d001199896" data-colorid="" data-colorcollection="" data-colorname="" data-tc-class="active">
                                              <span class="icon-heart-empty">
                                                <svg class="icon  icon--fill" alt="" title="">
                                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-favourite-empty"></use>
                                                </svg>
                                              </span>
                                              <span class="icon-heart-filled">
                                                <svg class="icon  icon--fill" alt="" title="">
                                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-heart-fill"></use>
                                                </svg>
                                              </span>
                                            </span>
                                            <a class="product-card__link" href="{{route('frontend.chi_tiet_san_pham')}}" title="Maxilite Sơn Lót Chống Rỉ" tabindex="58">
                                              <article class="product-card__content">
                                                <p class="product-card__title js-product-card-title" style="height: 24px;">Maxilite Sơn Lót Chống Rỉ</p>
                                                <div class="product-card__image-wrapper">
                                                  <div class="product-card__image">
                                                    <img src="https://31fc8ad09e49483b220c-ba33b5880d166b057491bd70be456089.ssl.cf3.rackcdn.com/maxilite-son-lot-chng-r_m.png">
                                                  </div>
                                                </div>
                                                <ul class="icon-list product-card__features">
                                                  <li>
                                                    <span>
                                                      <svg class="icon icon--small " alt="" title="" fill="#2fc48d">
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-checkmark"></use>
                                                      </svg>
                                                    </span>
                                                    <span>
                                                    Độ bám dính cao
                                                    </span>
                                                  </li>
                                                </ul>
                                                <button type="button" class="button  button--grey button--square" tabindex="59">
                                                  <span class="button-text-label">
                                                    <svg class="icon icon--medium icon--fill" title="">
                                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-arrow-right">
                                                      </use>
                                                    </svg>
                                                  </span>
                                                </button>
                                              </article>
                                            </a>
                                          </section>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="plp-pagination"></div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="form_build_id" value="form-MUCopGzi4tPhl33Ow9BqbZgui6TBVwH9UAVoi7sEWeE" tabindex="60">
                  <input type="hidden" name="form_id" value="flourish_product_listing_filters_solr_form" tabindex="61">
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
@endsection
