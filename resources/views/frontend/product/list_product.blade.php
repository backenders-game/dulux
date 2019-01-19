@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('cssPage')
<!-- @include('frontend.includes.css.listProductCss') -->
@include('frontend.includes.css.listProductCss')

@endsection
@section('content')
<div id="zone-content" class="zone-content focus-outline">
  <div class="main-container container focus-outline">
    <!-- /#page-header -->
    <div class="row focus-outline">
      <section class="col-sm-12 focus-outline">
        <!--   -->
        <a id="main-content"></a>
        <div class="region region-content focus-outline">
          <div id="full-form-wrapper" class="focus-outline">
            <section id="block-system-main" class="block block-system clearfix focus-outline" role="navigation">
              <form class="form-counter focus-outline" action="/vi/san-pham/son-phu" method="post" id="flourish-product-listing-filters-solr-form" accept-charset="UTF-8">
                <div class="focus-outline">
                  <button style="display:none" id="edit-filters-reset-link" name="filters_reset_link" value="Reset Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="25">Reset Filters</button>
                  <button style="display:none" id="edit-room-type-filters-reset-link" name="room_type_filters_reset_link" value="Reset Room Type Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="26">Reset Room Type Filters</button>
                  <button style="display:none" id="edit-surface-usage-filters-reset-link" name="surface_usage_filters_reset_link" value="Reset Surface Usage Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="27">Reset Surface Usage Filters</button>
                  <button style="display:none" id="edit-finish-filters-reset-link" name="finish_filters_reset_link" value="Reset Finish Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="28">Reset Finish Filters</button>
                  <div id="product-listing-filters-wrapper" class="focus-outline">
                    <div class="row plp-color-bar-show">
                      <div class="col-sm-12">
                        <div class="clearfix">
                          <a class="swatch-close vr-margin-top-4 right close-color" data-close="#swatch-bar" tabindex="29">
                            <svg class="icon icon-close">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                            </svg>
                          </a>
                        </div>
                        <div id="swatch-bar" class="swatch-bar squircle vr-margin-top-1">
                          <p class="h4 plp-color-name"></p>
                          <a class="inline-text-link pick-a-colour change-color" tabindex="30">
                            Thay đổi màu này    
                            <svg class="icon icon-arrow-right ">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="product-listing-filters fl-equi-height-container vr-margin-top-7 focus-outline">
                      <div class="row focus-outline">
                        <div class="col-md-3">
                          <div id="filter-wrapper-plp" class="filter-wrapper filter-wrapper-plp">
                            <div class="title-section hidden-sm-up">
                              <h2 class="text-center">Bộ lọc</h2>
                              <svg class="icon icon-close right">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
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
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                                  </svg>
                                </div>
                                <div class="collapse-content amountCount" style="display: block;">
                                </div>
                              </div>
                              <div class="form-collapse collapse-area visible" style="order:;-webkit-order:;">
                                <div class="collapse-trigger general-collapse-trigger-processed">
                                  Project Type                <span class="count-label input-counter">0</span>
                                  <img class="icon_collapse_arrow" src="https://img.icons8.com/ios/50/000000/collapse-arrow.png">
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
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Nhà bếp" disabled="1" type="radio" id="edit-product-room-type-nh-bp" name="product_room_type" value="Nhà bếp" tabindex="34">  <label class="option" for="edit-product-room-type-nh-bp">Nhà bếp </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Nhà văn phòng" disabled="1" type="radio" id="edit-product-room-type-nh-vn-phng" name="product_room_type" value="Nhà văn phòng" tabindex="35">  <label class="option" for="edit-product-room-type-nh-vn-phng">Nhà văn phòng </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng khách" disabled="1" type="radio" id="edit-product-room-type-phng-khch" name="product_room_type" value="Phòng khách" tabindex="36">  <label class="option" for="edit-product-room-type-phng-khch">Phòng khách </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: none;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng ngủ" disabled="1" type="radio" id="edit-product-room-type-phng-ng" name="product_room_type" value="Phòng ngủ" tabindex="37">  <label class="option" for="edit-product-room-type-phng-ng">Phòng ngủ </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: none;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng trẻ em" disabled="1" type="radio" id="edit-product-room-type-phng-tr-em" name="product_room_type" value="Phòng trẻ em" tabindex="38">  <label class="option" for="edit-product-room-type-phng-tr-em">Phòng trẻ em </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: none;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng tắm" disabled="1" type="radio" id="edit-product-room-type-phng-tm" name="product_room_type" value="Phòng tắm" tabindex="39">  <label class="option" for="edit-product-room-type-phng-tm">Phòng tắm </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-room-type form-disabled form-item radio append-outline-processed" style="display: none;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductLocationChange-processed" data-label="Phòng ăn" disabled="1" type="radio" id="edit-product-room-type-phng-n" name="product_room_type" value="Phòng ăn" tabindex="40">  <label class="option" for="edit-product-room-type-phng-n">Phòng ăn </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <a href="javascript:void(0)" class="more-less btn-show-more margin-bottom-l PLPShowMoreClick-processed" tabindex="41" style="display: inline;">Show more [+]</a>
                                  <a href="javascript:void(0)" class="more-less btn-show-less margin-bottom-l PLPShowLessClick-processed" tabindex="42" style="display: none;">Show less [–]</a>
                                </div>
                              </div>
                              <div class="form-collapse collapse-area visible" style="order:;-webkit-order:;">
                                <div class="collapse-trigger general-collapse-trigger-processed">
                                  Bề mặt cần sơn                <span class="count-label input-counter">0</span>
                                
                                  <img class="icon_collapse_arrow" src="https://img.icons8.com/ios/50/000000/collapse-arrow.png">

                                </div>
                                <div class="collapse-content amountCount" style="display: block;">
                                  <div class="form-type-checkboxes form-item-product-surface-usage form-item form-group append-outline-processed">
                                    <div id="edit-product-surface-usage" class="form-checkboxes product-surface-usage">
                                      <div class="form-type-checkbox form-item-product-surface-usage-Trần-nhà form-disabled form-item checkbox append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-checkbox ajax-processed PLPproductSurfaceChange-processed" data-label="Trần nhà" disabled="1" type="checkbox" id="edit-product-surface-usage-trn-nh" name="product_surface_usage[Trần nhà]" value="Trần nhà" tabindex="43">  <label class="option" for="edit-product-surface-usage-trn-nh">Trần nhà </label>
                                        <span class="checkbox-outline"></span>
                                      </div>
                                      <div class="form-type-checkbox form-item-product-surface-usage-Tường form-disabled form-item checkbox append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-checkbox ajax-processed PLPproductSurfaceChange-processed" data-label="Tường" disabled="1" type="checkbox" id="edit-product-surface-usage-tng" name="product_surface_usage[Tường]" value="Tường" tabindex="44">  <label class="option" for="edit-product-surface-usage-tng">Tường </label>
                                        <span class="checkbox-outline"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <a href="javascript:void(0)" class="more-less btn-show-more margin-bottom-l PLPShowMoreClick-processed" tabindex="45" style="display: none;">Show more [+]</a>
                                  <a href="javascript:void(0)" class="more-less btn-show-less margin-bottom-l PLPShowLessClick-processed" tabindex="46" style="display: none;">Show less [–]</a>
                                </div>
                              </div>
                              <div class="form-collapse collapse-area visible" style="order:;-webkit-order:;">
                                <div class="collapse-trigger general-collapse-trigger-processed">
                                  Bề mặt hoàn thiện                <span class="count-label input-counter">0</span>
                                  <img class="icon_collapse_arrow" src="https://img.icons8.com/ios/50/000000/collapse-arrow.png">

                                </div>
                                <div class="collapse-content amountCount" style="display: block;">
                                  <div class="form-type-radios form-item-product-finish form-item form-group append-outline-processed">
                                    <div id="edit-product-finish" class="form-radios product-finish">
                                      <div class="form-type-radio form-item-product-finish form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductFinishChange-processed" data-label="Tất cả các" disabled="1" type="radio" id="edit-product-finish-all" name="product_finish" value="All" checked="checked" tabindex="47">  <label class="option" for="edit-product-finish-all">Tất cả các </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-finish form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductFinishChange-processed" data-label="Bề Mặt Bóng Mờ" disabled="1" type="radio" id="edit-product-finish-b-mt-bng-m" name="product_finish" value="Bề Mặt Bóng Mờ" tabindex="48">  <label class="option" for="edit-product-finish-b-mt-bng-m">Bề Mặt Bóng Mờ </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-finish form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductFinishChange-processed" data-label="Bề Mặt Mờ" disabled="1" type="radio" id="edit-product-finish-b-mt-m" name="product_finish" value="Bề Mặt Mờ" tabindex="49">  <label class="option" for="edit-product-finish-b-mt-m">Bề Mặt Mờ </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                      <div class="form-type-radio form-item-product-finish form-disabled form-item radio append-outline-processed" style="display: block;">
                                        <input class="disable-filter form-radio ajax-processed PLPproductFinishChange-processed" data-label="Bề mặt bóng" disabled="1" type="radio" id="edit-product-finish-b-mt-bng" name="product_finish" value="Bề mặt bóng" tabindex="50">  <label class="option" for="edit-product-finish-b-mt-bng">Bề mặt bóng </label>
                                        <span class="radio-outline"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <a href="javascript:void(0)" class="more-less btn-show-more margin-bottom-l PLPShowMoreClick-processed" tabindex="51" style="display: none;">Show more [+]</a>
                                  <a href="javascript:void(0)" class="more-less btn-show-less margin-bottom-l PLPShowLessClick-processed" tabindex="52" style="display: none;">Show less [–]</a>
                                </div>
                              </div>
                            </div>
                            <!-- collapse-wrap -->
                          </div>
                          <div class="results-bar">
                            <a href="javascript:void(0)" class="filter-reset filter-reset inline-text-link primary btn-clear" tabindex="53" style="display: none;">Khởi tạo lại bộ lọc</a>
                            <button id="filter_results_btn" class="bttn primary bttn-auto-width pull-right" tabindex="54">  <span>11</span> Kết quả</button>                            
                          </div>
                        </div>
                        <div class="product-listing-markup-wrapper col-md-9 view-content focus-outline">
                          <div class="col-sm-12 focus-outline">
                            <h1 class="h2 vr-margin-bottom-0">Tìm sản phẩm cho dự án của bạn</h1>
                            <div class="product-listing-information focus-outline">
                              <div class="product-amount vr-padding-vertical-4 focus-outline"><span>11</span> Đã tìm thấy sản phẩm</div>
                              <section class="filtering">
                                <div class="filter-zone">
                                  <div class="icon-plus-text ipt-icon-settings right ">
                                    Bộ lọc 
                                    <svg class="icon icon-settings ">
                                      <use xlink:href=""></use>
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
                              <a href="javascript:void(0)" class="filter-reset inline-text-link primary btn-clear" tabindex="55" style="display: none;">Khởi tạo lại bộ lọc</a>
                            </div>
                            <div class="onedomain-component">
                              <div class="row">
                                <div class="view view-product-listing-solr view-id-product_listing_solr view-display-id-page_6 view-product-Listing view-dom-id-e4171de6da4a3743e0859efe66332447">
                                  <div class="view-header">
                                    <!-- <p class="h1 fl-prod-page-header">11 Products found</p> -->
                                  </div>
                                  <div class="view-content">
                                  <div class="row vr-margin-top-7">
                                   
                                   <div class="col-xs-12 col-md-4">
                                     <div class="product-card-container">
                                       <section class="product-card js-product-card">
                                         <div class="product-card__underlay"></div>
                                         <span id="65622" class=" scrap-book-add-product focus-outline product-card__button js-notify icon-heart js-toggle-class" data-type="product" data-categorytype="Primer" data-globalid="9ca1c08e-b004-4ef7-9726-a2d001199474" data-colorid="" data-colorcollection="" data-colorname="" data-tc-class="active">
                                         <i class='far fa-heart' style='font-size:20px'></i>
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
                                               <i class="fas fa-check check_list_product"></i>
                                                 Độ bám dính cao
                                               </li>
                                               <li>
                                               <i class="fas fa-check check_list_product"></i>
                                                 Giữ màu sắc bền lâu cho lớp sơn phủ
                                               </li>
                                             </ul>
                                             <button type="button" class="button  button--grey button--square" tabindex="55">
                                               <span class="button-text-label">
                                               <i class="fas fa-arrow-right focus-outline" style="font-size:15px;"></i>
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
                                         <i class='far fa-heart' style='font-size:20px'></i>
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
                                               <i class="fas fa-check check_list_product"></i>
                                                 Độ bám dính cao
                                               </li>
                                               <li>
                                               <i class="fas fa-check check_list_product"></i>
                                                 Giữ màu sắc bền lâu cho lớp sơn phủ
                                               </li>
                                             </ul>
                                             <button type="button" class="button  button--grey button--square" tabindex="55">
                                               <span class="button-text-label">
                                               <i class="fas fa-arrow-right focus-outline" style="font-size:15px;"></i>
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
                                         <i class='far fa-heart' style='font-size:20px'></i>
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
                                               <i class="fas fa-check check_list_product"></i>
                                                 Độ bám dính cao
                                               </li>
                                               <li>
                                               <i class="fas fa-check check_list_product"></i>
                                                 Giữ màu sắc bền lâu cho lớp sơn phủ
                                               </li>
                                             </ul>
                                             <button type="button" class="button  button--grey button--square" tabindex="55">
                                               <span class="button-text-label">
                                               <i class="fas fa-arrow-right focus-outline" style="font-size:15px;"></i>
                                               </span>
                                             </button>
                                           </article>
                                         </a>
                                       </section>
                                     </div>
                                   </div>
                                 </div>
                                  </div>
                                  <div class="text-center pagination-clone-processed">
                                    <ul class="pagination">
                                      <li class="active first"><a href="#" tabindex="74">1</a></li>
                                      <li><a title="Đi tới trang 2" href="/vi/san-pham/son-phu?page=1" tabindex="75">2</a></li>
                                      <li class="next last"><a href="/vi/san-pham/son-phu?page=1" tabindex="76">❭</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="plp-pagination">
                          <div class="text-center pagination-clone-processed">
                            <ul class="pagination">
                              <li class="active first"><a href="#" tabindex="74">1</a></li>
                              <li><a title="Đi tới trang 2" href="/vi/san-pham/son-phu?page=1" tabindex="75">2</a></li>
                              <li class="next last"><a href="/vi/san-pham/son-phu?page=1" tabindex="76">❭</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="form_build_id" value="form-mxktfzk_3XvKXvoDm3QzXY8WC22wYAcsHgAESQB_Bus" tabindex="77">
                  <input type="hidden" name="form_id" value="flourish_product_listing_filters_solr_form" tabindex="78">
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
