@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('cssPage')
<link type="text/css" rel="stylesheet" href="https://www.dulux.vn/sites/www.dulux.vn/files/advagg_css/css__iW147tHv1qaS4jveQgrzW-4C-hZq8stS3RMnloRkg6Q__uqcVND_Mvj1baBqjCyS9glvlkzJ4vG9UTLjj6vGbsak__IY9epI-mj_jUyCKMTKnYycFqUe7k0NLtv13O2_s2fYI.css" media="all" />
@endsection

@section('content')
<div id="zone-content" class="zone-content focus-outline">
  <div class="main-container container focus-outline">
    <!-- /#page-header -->
    <div class="row focus-outline">
      <section class="col-sm-12 focus-outline">
        <!--   -->
        <a id="main-content"></a>
        <h1 class="page-header">Ý tưởng</h1>
        <div class="region region-content focus-outline">
          <div id="full-form-wrapper" class="focus-outline">
            <section id="block-system-main" class="block block-system clearfix focus-outline" role="navigation">
              <form class="flourish-articles-listing form-counter focus-outline" action="/vi/y-tuong" method="post" id="flourish-article-listing-filters-form" accept-charset="UTF-8">
                <div class="focus-outline">
                  <button style="display:none" id="edit-filters-reset-link" name="filters_reset_link" value="Reset Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="24">Reset Filters</button>
                  <button style="display:none" id="edit-room-type-filters-reset-link" name="room_type_filters_reset_link" value="Reset Location Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="25">Reset Location Filters</button>
                  <button style="display:none" id="edit-color-family-filters-reset-link" name="color_family_filters_reset_link" value="Reset Color Family Filters" type="button" class="btn btn-default form-submit ajax-processed" tabindex="26">Reset Color Family Filters</button>
                  <div class="colour-palette-wrapper focus-outline">
                    <div id="block-views-color-display-block" class="colors_fieldset focus-outline">
                      <h2 class="block__title block-title block-title text-center">Ý tưởng trang trí</h2>
                    </div>
                    <div id="hue-selector" class="colors-hue-selectors clearfix">
                      <div class="cid-all selected not-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="27">
                        <div class="color-box-inner text-center">
                          <div class="icon-crossmark"></div>
                          <svg class="icon icon-checkmark">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                          </svg>
                          <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="All" data-label="Tất cả các" data-filter-type="colorFamily" data-filter-name="all" data-has-combination="YES" disabled="disabled" id="edit-palette-all" name="article_color_family" value="all" type="button" tabindex="28">all</button>
                          </span>
                        </div>
                      </div>
                      <div class="no-gutter col-xs-2">
                        <div class="cid-white  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="29">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu trắng" data-label="Họ màu trắng" data-filter-type="colorFamily" data-filter-name="white" data-has-combination="YES" id="edit-palette-white" name="article_color_family" value="37" type="button" tabindex="30">37</button>
                            </span>
                          </div>
                        </div>
                        <div class="cid-red  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="31">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu đỏ" data-label="Họ màu đỏ" data-filter-type="colorFamily" data-filter-name="red" data-has-combination="YES" id="edit-palette-red" name="article_color_family" value="24" type="button" tabindex="32">24</button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="no-gutter col-xs-2">
                        <div class="cid-orange  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="33">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu cam" data-label="Họ màu cam" data-filter-type="colorFamily" data-filter-name="orange" data-has-combination="YES" id="edit-palette-orange" name="article_color_family" value="27" type="button" tabindex="34">27</button>
                            </span>
                          </div>
                        </div>
                        <div class="cid-gold  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="35">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu vàng kim" data-label="Họ màu vàng kim" data-filter-type="colorFamily" data-filter-name="gold" data-has-combination="YES" id="edit-palette-gold" name="article_color_family" value="22" type="button" tabindex="36">22</button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="no-gutter col-xs-2">
                        <div class="cid-yellow  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="37">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu vàng" data-label="Họ màu vàng" data-filter-type="colorFamily" data-filter-name="yellow" data-has-combination="YES" id="edit-palette-yellow" name="article_color_family" value="48" type="button" tabindex="38">48</button>
                            </span>
                          </div>
                        </div>
                        <div class="cid-lime  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="39">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu vàng chanh" data-label="Họ màu vàng chanh" data-filter-type="colorFamily" data-filter-name="lime" data-has-combination="YES" id="edit-palette-lime" name="article_color_family" value="26" type="button" tabindex="40">26</button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="no-gutter col-xs-2">
                        <div class="cid-green  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="41">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu xanh lá" data-label="Họ màu xanh lá" data-filter-type="colorFamily" data-filter-name="green" data-has-combination="YES" id="edit-palette-green" name="article_color_family" value="52" type="button" tabindex="42">52</button>
                            </span>
                          </div>
                        </div>
                        <div class="cid-teal  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="43">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu xanh mòng két" data-label="Họ màu xanh mòng két" data-filter-type="colorFamily" data-filter-name="teal" data-has-combination="YES" id="edit-palette-teal" name="article_color_family" value="29" type="button" tabindex="44">29</button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="no-gutter col-xs-2">
                        <div class="cid-blue  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="45">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu xanh dương" data-label="Họ màu xanh dương" data-filter-type="colorFamily" data-filter-name="blue" data-has-combination="YES" id="edit-palette-blue" name="article_color_family" value="36" type="button" tabindex="46">36</button>
                            </span>
                          </div>
                        </div>
                        <div class="cid-violet  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="47">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu tím" data-label="Họ màu tím" data-filter-type="colorFamily" data-filter-name="violet" data-has-combination="YES" id="edit-palette-violet" name="article_color_family" value="31" type="button" tabindex="48">31</button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="no-gutter col-xs-2">
                        <div class="cid-cool neutral  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="49">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu thiên nhiên" data-label="Họ màu thiên nhiên" data-filter-type="colorFamily" data-filter-name="cool+neutral" data-has-combination="YES" id="edit-palette-cool-neutral" name="article_color_family" value="44" type="button" tabindex="50">44</button>
                            </span>
                          </div>
                        </div>
                        <div class="cid-warm neutral  product-available color-box colors-hue-selector col-sm-6 col-xs-12" tabindex="51">
                          <div class="color-box-inner text-center">
                            <div class="icon-crossmark"></div>
                            <svg class="icon icon-checkmark">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/defs/icons-symbol-defs.svg#icon-checkmark"></use>
                            </svg>
                            <span><button class="solr-color-box-button article-filter-section btn btn-default form-submit colorBoxBtn-processed flourish_google_tag_manager-processed" title="Họ màu vàng đất" data-label="Họ màu vàng đất" data-filter-type="colorFamily" data-filter-name="warm+neutral" data-has-combination="YES" id="edit-palette-warm-neutral" name="article_color_family" value="23" type="button" tabindex="52">23</button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="filter-wrapper-fullwidth" class="filter-wrapper filter-wrapper-fullwidth filter-ideas focus-outline">
                      <div class="title-section">
                        <h2 class="text-center">Bộ lọc</h2>
                        <svg class="icon icon-close right">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-close"></use>
                        </svg>
                      </div>
                      <div class="clp-wrap collapse-wrap accordeon focus-outline">
                        <div class="form-collapse collapse-area focus-outline">
                          <div class="collapse-trigger accordeon-collapse-trigger-processed focus-outline">
                            Nơi cần sơn          <span class="count-label input-counter">0</span>
                            <svg class="icon icon-collapse-arrow right">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/profiles/flourish/themes/custom/flourish_rem/images/svg/svgsprite/sprite.svg#icon-collapse-arrow"></use>
                            </svg>
                          </div>
                          <div class="collapse-content amountCount" style="overflow: hidden; display: none;">
                            <div class="form-type-radios form-item-article-room-type form-item form-group append-outline-processed">
                              <div id="edit-article-room-type" class="form-radios article-room-types">
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Tất cả các" data-filter-type="articleTypes" data-filter-name="all" data-has-combination="YES" type="radio" id="edit-article-room-type-all" name="article_room_type" value="all" checked="checked" tabindex="53">  <label class="option" for="edit-article-room-type-all">Tất cả các </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Các họ màu" data-filter-type="articleTypes" data-filter-name="colour+families" data-has-combination="YES" type="radio" id="edit-article-room-type-15" name="article_room_type" value="15" tabindex="54">  <label class="option" for="edit-article-room-type-15">Các họ màu </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Phòng trẻ em" data-filter-type="articleTypes" data-filter-name="kid%27s+room" data-has-combination="YES" type="radio" id="edit-article-room-type-351" name="article_room_type" value="351" tabindex="55">  <label class="option" for="edit-article-room-type-351">Phòng trẻ em </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Phòng học" data-filter-type="articleTypes" data-filter-name="study" data-has-combination="YES" type="radio" id="edit-article-room-type-350" name="article_room_type" value="350" tabindex="56">  <label class="option" for="edit-article-room-type-350">Phòng học </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Phòng khách" data-filter-type="articleTypes" data-filter-name="living+room" data-has-combination="YES" type="radio" id="edit-article-room-type-11" name="article_room_type" value="11" tabindex="57">  <label class="option" for="edit-article-room-type-11">Phòng khách </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Xu hướng thiết kế" data-filter-type="articleTypes" data-filter-name="decoration+trends" data-has-combination="YES" type="radio" id="edit-article-room-type-2" name="article_room_type" value="2" tabindex="58">  <label class="option" for="edit-article-room-type-2">Xu hướng thiết kế </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Phòng làm việc" data-filter-type="articleTypes" data-filter-name="home+office" data-has-combination="YES" type="radio" id="edit-article-room-type-3" name="article_room_type" value="3" tabindex="59">  <label class="option" for="edit-article-room-type-3">Phòng làm việc </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Phòng ăn" data-filter-type="articleTypes" data-filter-name="dining+room" data-has-combination="YES" type="radio" id="edit-article-room-type-5" name="article_room_type" value="5" tabindex="60">  <label class="option" for="edit-article-room-type-5">Phòng ăn </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Phòng bếp" data-filter-type="articleTypes" data-filter-name="kitchen" data-has-combination="YES" type="radio" id="edit-article-room-type-8" name="article_room_type" value="8" tabindex="61">  <label class="option" for="edit-article-room-type-8">Phòng bếp </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Làm mới lại không gian sống" data-filter-type="articleTypes" data-filter-name="renewal+stories" data-has-combination="YES" type="radio" id="edit-article-room-type-14" name="article_room_type" value="14" tabindex="62">  <label class="option" for="edit-article-room-type-14">Làm mới lại không gian sống </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-disabled form-item radio append-outline-processed">
                                  <input class="article-filter-section disable-filter form-radio" data-label="Children's room" data-filter-type="articleTypes" data-filter-name="children%27s+room" data-has-combination="YES" disabled="1" type="radio" id="edit-article-room-type-897" name="article_room_type" value="897" tabindex="63">  <label class="option" for="edit-article-room-type-897">Children's room </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Cảm hứng thiết kế không gian sống" data-filter-type="articleTypes" data-filter-name="room+inspiration" data-has-combination="YES" type="radio" id="edit-article-room-type-6" name="article_room_type" value="6" tabindex="64">  <label class="option" for="edit-article-room-type-6">Cảm hứng thiết kế không gian sống </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Phòng ngủ" data-filter-type="articleTypes" data-filter-name="bedroom" data-has-combination="YES" type="radio" id="edit-article-room-type-4" name="article_room_type" value="4" tabindex="65">  <label class="option" for="edit-article-room-type-4">Phòng ngủ </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Xu hướng màu sắc" data-filter-type="articleTypes" data-filter-name="colour+trends" data-has-combination="YES" type="radio" id="edit-article-room-type-13" name="article_room_type" value="13" tabindex="66">  <label class="option" for="edit-article-room-type-13">Xu hướng màu sắc </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Hành lang" data-filter-type="articleTypes" data-filter-name="hallway" data-has-combination="YES" type="radio" id="edit-article-room-type-7" name="article_room_type" value="7" tabindex="67">  <label class="option" for="edit-article-room-type-7">Hành lang </label>
                                  <span class="radio-outline"></span>
                                </div>
                                <div class="form-type-radio form-item-article-room-type form-item radio append-outline-processed">
                                  <input class="article-filter-section form-radio" data-label="Phòng tắm" data-filter-type="articleTypes" data-filter-name="bathroom" data-has-combination="YES" type="radio" id="edit-article-room-type-9" name="article_room_type" value="9" tabindex="68">  <label class="option" for="edit-article-room-type-9">Phòng tắm </label>
                                  <span class="radio-outline"></span>
                                </div>
                              </div>
                            </div>
                            <a href="javascript:void(0)" class="more-less btn-show-more margin-bottom-l" tabindex="69">Show more [+]</a>
                            <a href="javascript:void(0)" class="more-less btn-show-less margin-bottom-l" tabindex="70">Show less [-]</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filter-section bar-desktop">
                      <div class="bar-title">Bộ lọc của tôi</div>
                      <div id="filter-selections" class="filter-labels"></div>
                      <a href="javascript:void(0)" class="inline-text-link primary btn-clear filter-reset" tabindex="71" style="display: none;">Khởi tạo lại bộ lọc</a>
                    </div>
                    <div class="results-bar">
                      <a href="javascript:void(0)" class="inline-text-link primary btn-clear filter-reset" tabindex="72" style="display: none;">Khởi tạo lại bộ lọc</a>
                    </div>
                    <section class="filtering">
                      <div class="row">
                        <div class="filter-zone">
                          <section id="color-box-container" class="col-sm-12">
                            <div class="icon-plus-text ipt-icon-settings right">
                              Bộ lọc            
                              <svg class="icon icon-settings ">
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
                  <div class="article-listing-markup-wrapper">
                    <h1 class="view-page-header">Các ý tưởng trang trí ngôi nhà của bạn</h1>
                    <div class="view view-inspiration-articles view-id-inspiration_articles view-display-id-page view-dom-id-598901a3552d085643c361beacf37458">
                      <div class="view-content">
                        <div class="views-row ">
                          <div class="views-field views-field-field-hero-image">
                            <div class="field-content">
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/y-tuong/4-g%E1%BB%A3i-%C3%BD-ph%E1%BB%91i-m%C3%A0u-v%E1%BB%9Bi-%E2%80%9Cn%C3%A2u-m%E1%BA%ADt-n%E1%BB%93ng%E2%80%9D-cho-ng%C3%B4i-nh%C3%A0-theo-t%C3%ADnh-c%C3%A1ch-ch%E1%BB%A7-nh%C3%A2n" tabindex="74"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/article/cong_bo_xu_huong_mau_sac_2019.jpg?itok=9blU7zpM" width="450" height="253" alt="Đón nắng vào nhà cùng Nâu mật nồng – Spiced Honey" title="Đón nắng vào nhà cùng Nâu mật nồng – Spiced Honey"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #; width: ; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/y-tuong/4-g%E1%BB%A3i-%C3%BD-ph%E1%BB%91i-m%C3%A0u-v%E1%BB%9Bi-%E2%80%9Cn%C3%A2u-m%E1%BA%ADt-n%E1%BB%93ng%E2%80%9D-cho-ng%C3%B4i-nh%C3%A0-theo-t%C3%ADnh-c%C3%A1ch-ch%E1%BB%A7-nh%C3%A2n" tabindex="75">4 gợi ý phối màu với “Nâu mật nồng” cho ngôi nhà theo tính cách chủ nhân <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/y-tuong/ph%C3%B9-ph%C3%A9p-di%E1%BB%87n-m%E1%BA%A1o-ng%C3%B4i-nh%C3%A0-v%E1%BB%9Bi-s%E1%BA%AFc-m%C3%A0u-ch%E1%BB%A7-%C4%91%E1%BA%A1o-n%C4%83m-2019" tabindex="76"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/wysiwyg/1.dulux-phu-phep-dien-mao-ngoi-nha-voi-sac-mau-chu-dao-nam-2019.jpg?itok=eEz5uV25" width="450" height="253" alt="Phù phép diện mạo ngôi nhà với sắc màu chủ đạo năm 2019" title="Phù phép diện mạo ngôi nhà với sắc màu chủ đạo năm 2019"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #; width: ; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/y-tuong/ph%C3%B9-ph%C3%A9p-di%E1%BB%87n-m%E1%BA%A1o-ng%C3%B4i-nh%C3%A0-v%E1%BB%9Bi-s%E1%BA%AFc-m%C3%A0u-ch%E1%BB%A7-%C4%91%E1%BA%A1o-n%C4%83m-2019" tabindex="77">Phù phép diện mạo ngôi nhà với sắc màu chủ đạo năm 2019 <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/articles/%E2%80%9C%C4%91%C3%B3n-n%E1%BA%AFng-v%C3%A0o-nh%C3%A0%E2%80%9D-c%C3%B9ng-n%C3%A2u-m%E1%BA%ADt-n%E1%BB%93ng-%E2%80%93-spiced-honey" tabindex="78"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/article/cong_bo_xu_huong_mau_sac_2019.jpg?itok=9blU7zpM" width="450" height="253" alt="Đón nắng vào nhà cùng Nâu mật nồng – Spiced Honey" title="Đón nắng vào nhà cùng Nâu mật nồng – Spiced Honey"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #; width: ; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/articles/%E2%80%9C%C4%91%C3%B3n-n%E1%BA%AFng-v%C3%A0o-nh%C3%A0%E2%80%9D-c%C3%B9ng-n%C3%A2u-m%E1%BA%ADt-n%E1%BB%93ng-%E2%80%93-spiced-honey" tabindex="79">“Đón nắng vào nhà” cùng Nâu Mật Nồng – Spiced Honey <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/y-tuong/b%C3%AD-quy%E1%BA%BFt-gi%C3%BAp-c%C4%83n-nh%C3%A0-c%E1%BB%A7a-b%E1%BA%A1n-b%E1%BB%ABng-s%C3%A1ng-trong-m%C3%B9a-gi%C3%A1ng-sinh" tabindex="80"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/wysiwyg/7.jpg?itok=bwxoX9ZC" width="450" height="253" alt="y tuong trang tri tuong doc dao" title="y tuong trang tri tuong doc dao"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #; width: ; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/y-tuong/b%C3%AD-quy%E1%BA%BFt-gi%C3%BAp-c%C4%83n-nh%C3%A0-c%E1%BB%A7a-b%E1%BA%A1n-b%E1%BB%ABng-s%C3%A1ng-trong-m%C3%B9a-gi%C3%A1ng-sinh" tabindex="81">Bí quyết giúp căn nhà của bạn bừng sáng trong mùa Giáng sinh <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/articles/7-%C3%BD-t%C6%B0%E1%BB%9Fng-trang-tr%C3%AD-t%C6%B0%E1%BB%9Dng-%C4%91%E1%BB%99c-%C4%91%C3%A1o-cho-b%E1%BB%91-m%E1%BA%B9-v%C3%A0-b%C3%A9-trong-k%E1%BB%B3-ngh%E1%BB%89-l%E1%BB%85" tabindex="82"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/article/4_0.jpg?itok=6jzfhoUx" width="450" height="253" alt="y tuong trang tri tuong doc dao" title="y tuong trang tri tuong doc dao"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #; width: ; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/articles/7-%C3%BD-t%C6%B0%E1%BB%9Fng-trang-tr%C3%AD-t%C6%B0%E1%BB%9Dng-%C4%91%E1%BB%99c-%C4%91%C3%A1o-cho-b%E1%BB%91-m%E1%BA%B9-v%C3%A0-b%C3%A9-trong-k%E1%BB%B3-ngh%E1%BB%89-l%E1%BB%85" tabindex="83">7 ý tưởng trang trí tường độc đáo cho bố mẹ và bé trong kỳ nghỉ lễ <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/y-tuong/b%E1%BB%99-ba-v%E1%BB%87-s%C4%A9-cho-ng%C3%B4i-nh%C3%A0-b%E1%BB%81n-%C4%91%E1%BA%B9p-d%C3%A0i-l%C3%A2u" tabindex="84"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/article/dulux_nha_da_co_weathershied.jpg?itok=zC2DzLRn" width="450" height="253" alt="Dulux bộ ba vệ sĩ cho ngôi nhà đẹp bền lâu" title="Dulux bộ ba vệ sĩ cho ngôi nhà đẹp bền lâu"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #; width: ; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/y-tuong/b%E1%BB%99-ba-v%E1%BB%87-s%C4%A9-cho-ng%C3%B4i-nh%C3%A0-b%E1%BB%81n-%C4%91%E1%BA%B9p-d%C3%A0i-l%C3%A2u" tabindex="85">Bộ ba "vệ sĩ" cho ngôi nhà bền đẹp dài lâu <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/y-tuong/khi-c%C3%A1c-%C3%B4ng-ch%E1%BB%93ng-%C4%91%E1%BA%A1i-chi%E1%BA%BFn-m%E1%BA%B7t-ti%E1%BB%81n-v%C3%A0o-ng%C3%A0y-t%E1%BA%BFt" tabindex="86"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/article/dulux_hero_tet.png?itok=L25yeFlj" width="450" height="253" alt="Dulux khi các ông chồng đại chiến mặt tiền vào ngày tết" title="Dulux khi các ông chồng đại chiến mặt tiền vào ngày tết"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #FF0000; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #FFA500; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #FFD700; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #ffff00; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #32cd32; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #008000; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #008080; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #0000FF; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #800080; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #ECC; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #D49000; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #F2EEE5; width: 8.33%; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/y-tuong/khi-c%C3%A1c-%C3%B4ng-ch%E1%BB%93ng-%C4%91%E1%BA%A1i-chi%E1%BA%BFn-m%E1%BA%B7t-ti%E1%BB%81n-v%C3%A0o-ng%C3%A0y-t%E1%BA%BFt" tabindex="87">Khi các ông chồng đại chiến "mặt tiền" vào ngày tết <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/y-tuong/4-cach-khoac-mau-ao-moi-cho-phong-ngu-cua-tre-voi-mau-nau-mat-ong-nhat" tabindex="88"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/article/dulux-cf19-khong-gian-im-diu-khoi-goi-nguon-cam-hung-phong-cua-be-9_0.jpg?itok=ZUyFJW0D" width="450" height="253" alt="Dulux làm mới phòng của bé với màu nâu mật nồng" title="Dulux làm mới phòng của bé với màu nâu mật nồng"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #; width: ; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/y-tuong/4-cach-khoac-mau-ao-moi-cho-phong-ngu-cua-tre-voi-mau-nau-mat-ong-nhat" tabindex="89">4 cách làm mới phòng ngủ cho bé với màu Nâu Mật Nồng <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 dcvr chk">
                                <div class="rowss">
                                  <a href="/vi/y-tuong/cach-su-dung-mau-dulux-cua-nam-2019-trong-nha-ban" tabindex="90"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/article_listing_16_9/rcf/article/dulux-mau-tuong-lai-mau-chu-dao-nam-2019-mot-khong-gian-khoi-goi-tri-tuong-tuong-phong-khach-cam-hung-viet-nam-21.jpg?itok=ZF2Px1p4" width="450" height="253"></a>
                                  <div class="color-badging">
                                    <div class="badging" style="background-color: #FF0000; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #FFA500; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #FFD700; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #ffff00; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #32cd32; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #008000; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #008080; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #0000FF; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #800080; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #ECC; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #D49000; width: 8.33%; float:left;">&nbsp;</div>
                                    <div class="badging" style="background-color: #F2EEE5; width: 8.33%; float:left;">&nbsp;</div>
                                  </div>
                                  <h2 class="s-hdlne" style="height: 86px;"> 
                                    <a href="/vi/y-tuong/cach-su-dung-mau-dulux-cua-nam-2019-trong-nha-ban" tabindex="91">Cách sử dụng Màu sơn Dulux của năm 2019 cho ngôi nhà của bạn <span class="chevron right"></span></a>
                                  </h2>
                                </div>
                              </div>
                              <div class="text-center">
                                <ul class="pagination">
                                  <li class="active first"><a href="#" tabindex="92">1</a></li>
                                  <li><a title="Đi tới trang 2" href="/vi/y-tuong?page=1" tabindex="93">2</a></li>
                                  <li><a title="Đi tới trang 3" href="/vi/y-tuong?page=2" tabindex="94">3</a></li>
                                  <li><a title="Đi tới trang 4" href="/vi/y-tuong?page=3" tabindex="95">4</a></li>
                                  <li><a title="Đi tới trang 5" href="/vi/y-tuong?page=4" tabindex="96">5</a></li>
                                  <li class="pager-ellipsis disabled"><span>…</span></li>
                                  <li class="pager-last"><a title="Đi tới trang 43" href="/vi/y-tuong?page=42" tabindex="97">43</a></li>
                                  <li class="next last"><a href="/vi/y-tuong?page=1" tabindex="98">❭</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input id="article-page-current-url" data-url="/vi/y-tuong" type="hidden" name="current_url" value="/vi/y-tuong" tabindex="99">
                  <input type="hidden" name="form_build_id" value="form-oxPqtWcwGLdN10hV9VllqrupBwudtZu_p-rqS_XzT0c" tabindex="100">
                  <input type="hidden" name="form_id" value="flourish_article_listing_filters_form" tabindex="101">
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


