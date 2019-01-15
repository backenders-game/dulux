@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('cssPage')
@include('frontend.includes.css.detailProductCss')
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
          <section id="block-system-main" class="block block-system clearfix focus-outline" role="navigation">
            <div class="container focus-outline" about="/vi/san-pham/dulux-weathershield-powerflexx" typeof="sioc:Item foaf:Document" role="article">
              <div class="product-detail focus-outline">
                <div class="row row-1 no-padding no-marging with-color color-not-selected focus-outline">
                  <div class="col-1 col-md-6 col-sm-4 no-padding">
                    <div class="color-info-wrapper">
                      <h2 class="color-name ">Không có màu nào được chọn</h2>
                      <span class="color-listing-page"><a href="/vi/mau-sac-bang-mau?product=69313&amp;fl-stickey=1" tabindex="25">Chọn 1 màu</a></span>
                    </div>
                  </div>
                  <div class="popout-module">
                    <div class="col-2 col-md-6 col-sm-8 col-xs-12 pull-right">
                      <div class="white-box">
                        <div class="row no-margin">
                          <h1 class="float1 product-name fl-product-title">Dulux Weathershield Powerflexx</h1>
                          <span class ="float2"><i class="far fa-heart focus-outline" style="font-size:20px"></i></span>
                          <div class="float3 product-slogan">Chống rạn nứt - Chống thấm vượt trội</div>
                          <p class="fs16"></p>
                        </div>
                        <div class="row no-margin paint-box-holder prod-info-container">
                          <div class="float-left col-md-4 col-sm-4 col-xs-6 no-padding prod-image-container">
                            <span class="img-responsive">
                              <div class="field field-name-field-packshots-s-url field-type-image field-label-hidden">
                                <div class="field-items">
                                  <div class="field-item even"><img typeof="foaf:Image" title="Dulux Weathershield Powerflexx" alt="Dulux Weathershield Powerflexx" src="https://31fc8ad09e49483b220c-ba33b5880d166b057491bd70be456089.ssl.cf3.rackcdn.com/dulux-weathershield-powerflexx_s.png"></div>
                                </div>
                              </div>
                            </span>
                          </div>
                          <div class="float-left col-md-8 col-sm-8 col-xs-6 prod-quantity-container no-padding desktop-cart-view">
                            <div class="find-color-btn hidden-xs"><a href="/vi/mau-sac-bang-mau?product=69313&amp;fl-stickey=1" tabindex="26">Tìm màu sơn theo sản phẩm này</a></div>
                          </div>
                        </div>
                        <div class="row no-margin buton-holder mobile-view visible-xs">
                          <div class="buton-holder">
                            <div class="find-color-btn"><a href="/vi/mau-sac-bang-mau?product=69313&amp;fl-stickey=1">Tìm màu sơn theo sản phẩm này</a></div>
                          </div>
                        </div>
                        <section id="block-platform-paint-calculator-paint-calculator-block" class="block block-platform-paint-calculator clearfix">
                          <!-- Paint calculator -->
                          <div class="paint-calculator-module">
                            <div class="paint-calculator-tab js-paint-calculator-toggle">
                              <div class="paint-calculator-icon">Tôi cần bao nhiêu sơn?</div>
                            </div>
                            <div class="paint-calculator-container">
                              <div class="paint-calculator-content">
                                <!-- Paint calculator - Forms -->							
                                <div class="paint-calculator text-center center-block">
                                  <div class="center-block">
                                    <h6 class="margin-bottom-s js-showHideItem">Bạn có biết diện tích cần sơn không?</h6>
                                    <div class="js-toggle js-showHideItem">
                                      <button class="btn btn-primary btn-pill btn-auto-width js-btn-no js-toggle-btn js-toggle-btn-style" tabindex="28">Không</button>
                                      <button class="btn btn-quaternary btn-pill btn-auto-width js-btn-yes js-toggle-btn js-toggle-btn-style" tabindex="29">Có</button>
                                      <div class="margin-bottom-m"></div>
                                      <div id="toggle-items">
                                        <form class="lh-form js-toggle-item form-reset margin-bottom-l" data-id="0">
                                          <ul class="default-list text-left">
                                            <li class="text-center margin-bottom-xs">Hãy nhập chiều cao và chiều dài của bề mặt bạn muốn sơn.</li>
                                            <li class="margin-bottom-xs js-input-validate">
                                              <div class="input-label">
                                                <b>Chiều cao</b> <span class="measurement">tính bằng mét</span>
                                                <span class="pull-right js-tooltip-toggle tooltip-questionmark">?</span>
                                              </div>
                                              <input class="show" type="text" data-v-max="999999.99" data-m-dec="2" data-a-dec="." data-a-sep="" name="height" placeholder="Nhập chiều cao" tabindex="30">
                                              <span class="error" title="Please enter a numeric value">Please enter a numeric value</span>
                                            </li>
                                            <li class="js-input-validate">
                                              <div class="input-label">
                                                <b>Chiều dài</b> <span class="measurement">tính bằng mét</span>
                                                <span class="pull-right js-tooltip-toggle tooltip-questionmark">?</span>
                                              </div>
                                              <input class="show" type="text" data-v-max="999999.99" data-m-dec="2" data-a-dec="." data-a-sep="" name="length" placeholder="Nhập chiều dài" tabindex="31">
                                              <span class="error" title="Please enter a numeric value">Please enter a numeric value</span>
                                            </li>
                                            <li><input type="hidden" name="product_nid" value="69313" tabindex="32"></li>
                                            <li>
                                            </li>
                                            <li><input type="hidden" name="calculate_by" value="L&amp;H" tabindex="33"></li>
                                            <li>
                                            </li>
                                          </ul>
                                        </form>
                                        <form class="area-form js-toggle-item form-reset margin-bottom-l" style="display: none;" data-id="1">
                                          <ul class="default-list text-left">
                                            <li class="text-center margin-bottom-s">Tuyệt! Chỉ cần cộng vào bên dưới và xem xem bạn sẽ cần bao nhiêu sơn</li>
                                            <li class="js-direct-validate">
                                              <div class="input-label">
                                                <b>Diện tích</b> <span class="measurement"> tính bằng mét vuông</span>
                                              </div>
                                              <input class="show" type="text" data-v-max="999999.99" data-m-dec="2" data-a-dec="." data-a-sep="" name="area" placeholder="Nhập mét vuông" tabindex="34">
                                              <span class="error" title="Please enter a numeric value">Please enter a numeric value</span>
                                            </li>
                                            <li><input type="hidden" name="product_nid" value="69313" tabindex="35"></li>
                                            <li>
                                            </li>
                                            <li><input type="hidden" name="calculate_by" value="AREA" tabindex="36"></li>
                                            <li>
                                            </li>
                                          </ul>
                                        </form>
                                      </div>
                                    </div>
                                    <div class="total-result js-showHideItem hide">
                                      <div class="total-squircle margin-bottom-m">
                                        <div class="squircle-top">
                                          <div class="subtitle"><b>Kích thước của bạn</b></div>
                                          <table class="margin-top-20" align="center">
                                            <tbody>
                                              <tr class="heightVal">
                                                <td><b>Chiều cao</b>&nbsp;</td>
                                                <td class="subtitle"></td>
                                              </tr>
                                              <tr class="lengthVal">
                                                <td><b>Chiều dài</b>&nbsp;</td>
                                                <td class="subtitle"></td>
                                              </tr>
                                              <tr class="areaVal">
                                                <td><b>Diện tích</b>&nbsp;</td>
                                                <td class="subtitle"></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div class="squircle-bottom">
                                          <div class="triangle center-block margin-bottom-xs"></div>
                                          Bạn sẽ cần                                
                                          <h3 class="margin-bottom-xxxs"></h3>
                                          Dựa trên việc sơn 2 lớp                            
                                        </div>
                                      </div>
                                      <i>Đây là lượng sơn ước lượng dựa trên khả năng sẽ tiến hành sơn 2 lớp. Lớp phủ thực tế sẽ tùy thuộc vào điều kiện của bề mặt. Nếu thay đổi sang màu sắc khác biệt, có thể cần thêm nhiều lớp sơn.</i>
                                    </div>
                                    <div class="margin-bottom-xxs">
                                      <button class="btn btn-full-width btn-primary js-toggleShowHide js-showHideItem js-btn-disabled disabled" tabindex="37">Tính toán</button>
                                    </div>
                                  </div>
                                  <div class="js-tooltip hide tooltip-content">
                                    <div class="vertical-align center-block tooltip-content__inner">
                                      <div class="margin-bottom-xl">Đo chiều cao và chiều dài của bề mặt bạn muốn sơn (mét).</div>
                                      <div class="row">
                                        <div class="col-xs-12 col-sm-6">
                                          <span class="calulator-length calculator-dimensions">Chiều dài </span>
                                          <img class="img-responsive margin-bottom-xl center-block" src="https://www.dulux.vn/sites/all/modules/custom/platform_paint_calculator/images/length.png">
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                          <span class="calulator-height calculator-dimensions">Chiều cao </span>
                                          <img class="img-responsive margin-bottom-xl center-block" src="https://www.dulux.vn/sites/all/modules/custom/platform_paint_calculator/images/height.png">
                                        </div>
                                      </div>
                                      <div>
                                        <a class="btn btn-primary btn-dark-bg btn-ghost js-tooltip-toggle btn-auto-width" tabindex="38">Được rồi, bắt đầu thôi</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- Paint calculator - Forms -->			
                              </div>
                              <div class="paint-calculator-footer">
                                <a class="paint-calculator-refresh js-toggleShowHide" tabindex="39">Tính toán lại</a>
                              </div>
                            </div>
                          </div>
                          <!-- Paint calculator -->
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- BLOCK 2-->
                <div class="row no-margin no-padding">
                  <div class="row-2">
                    <div class="col-md-4 col-sm-4 center-block key-facts">
                      <div class="content">
                        <h2 class="fl-prod-key-facts">Thông tin chung</h2>
                        <div class="pd-facts-lists-cntr">
                          <ul class="pd-facts-lists no-margin no-padding">
                            <li>
                              <span class="icon_detail_product">
                                <svg id="icon-feat-finish" viewBox="0 0 32 32" width="100%" height="100%">
                                  <title>feat-finish</title>
                                  <path class="path1" d="M27.446 12.911c0.279-0.214 0.233-0.661-0.063-0.829-0.439-0.248-0.877 0.297-1.186 0.511-1.146 0.794-1.8 0.488-2.646-0.531-0.236-0.285-0.565-0.811-1.007-0.466-0.519 0.406 0.151 0.999 0.385 1.335 0.794 1.146 0.489 1.799-0.53 2.644-0.887 0.736-0.396 1.558 0.568 0.839 1.007-0.75 1.742-1.029 2.667-0.007 0.28 0.309 0.738 1.209 1.283 0.788 0.566-0.442-0.328-1.23-0.563-1.607-0.766-1.231 0.133-1.931 1.092-2.677 0.053-0.040-0.547 0.426 0 0zM24.391 14.666c0.090-0.204 0.114-0.409 0.072-0.613 0.203 0.091 0.408 0.115 0.613 0.072-0.090 0.204-0.114 0.409-0.072 0.613-0.203-0.091-0.408-0.114-0.613-0.072 0.051-0.167 0.032-0.002 0 0z"></path>
                                  <path class="path2" d="M4.518 12.552c0.521 0.493 1.943 0.052 2.639 0.267 0.663 0.191-0.36 1.667-0.538 1.993-0.187 0.34-0.577 1.384 0.334 1.156 0.826-0.24 0.887-1.859 1.707-2.263 0.375-0.185 1.175 1.36 1.317 1.595 0.101 0.283 0.283 0.493 0.546 0.63 0.425 0.109 0.777-0.362 0.554-0.739-0.344-0.581-0.722-1.174-0.958-1.81-0.333-0.9 0.947-0.736 1.557-0.757 0.402-0.014 1.36 0.157 1.35-0.523-0.011-0.719-1.095-0.487-1.511-0.496-0.628-0.013-1.728 0.146-1.418-0.736 0.166-0.472 1.617-2.426 0.537-2.556-0.783-0.094-1.238 1.822-1.854 2.251-0.561 0.096-1.12-1.159-1.369-1.569-0.181-0.3-0.897-1.176-1.149-0.28-0.189 0.662 0.923 1.758 1.085 2.456 0.177 0.756-4.023 0.187-2.829 1.381zM8.677 11.615c0.617 0.002 0.271 0.151 0.71 0.522-0.444 0.393-0.052 0.541-0.675 0.541-0.614-0.002-0.273-0.152-0.71-0.523 0.456-0.385 0.041-0.54 0.675-0.54 0.128 0.001-0.122 0 0 0z"></path>
                                  <path class="path3" d="M20.895 18.178c0.426-0.049 0.59-0.615 0.258-0.886-0.835-0.668-2.346-0.393-3.11-1.262-0.337-0.671 1.232-1.904 1.653-2.313 0.868-0.844 0.198-1.567-0.688-0.73-0.449 0.423-1.689 1.884-2.379 1.566-0.796-0.692-0.674-2.201-1.093-3.083-0.201-0.43-0.861-0.365-0.938 0.132-0.084 0.535 0.277 1.312 0.378 1.849 0.182 0.971 0.38 1.829-0.862 1.646-0.534-0.078-3.108-1.144-2.985-0.044 0.087 0.755 2.486 1.009 3.122 1.449 0.767 0.531-0.781 1.764-1.165 2.145-0.229 0.227-1.511 1.481-0.331 1.508 0.523 0.012 1.216-0.953 1.593-1.276 0.954-0.819 1.491-1.203 1.961 0.159 0.239 0.677 0.408 1.38 0.578 2.076 0.101 0.289 0.302 0.412 0.605 0.367 0.545-0.135 0.338-0.719 0.254-1.070-0.1-0.418-0.773-2.493-0.229-2.803 0.96-0.545 2.417 0.678 3.378 0.57zM15.677 17.051c-0.073 0.010-0.146 0.021-0.22 0.031 0.077-0.381 0.002-0.728-0.249-1.035 0.378-0.118 0.626-0.388 0.761-0.747 0.294 0.271 0.654 0.357 1.037 0.296-0.077 0.381-0.002 0.727 0.249 1.035-0.38 0.118-0.624 0.389-0.761 0.747-0.231-0.212-0.503-0.321-0.817-0.327-0.075 0.002 0.302-0.004 0 0z"></path>
                                  <path class="path4" d="M22.063 8.689c1.061-0.79-1.469-1.082-1.779-1.326-0.739-0.559 0.155-1.654-0.284-2.268-0.264-0.353-0.832-0.198-0.895 0.229-0.148 1.084-0.299 1.911-1.557 1.825-0.367-0.025-0.951-0.256-1.232 0.096-0.237 0.297-0.056 0.752 0.319 0.806 1.085 0.15 1.912 0.3 1.826 1.558-0.027 0.401-0.313 1.244 0.335 1.336 0.727 0.106 0.664-1.143 0.81-1.581 0.439-1.322 1.699-0.106 2.457-0.675 0.105-0.079-0.106 0.079 0 0zM19.267 7.698c0.278 0.191 0.258 0.341-0.063 0.449-0.278-0.191-0.258-0.341 0.063-0.449 0.055 0.092-0.079 0.073 0 0z"></path>
                                  <path class="path5" d="M12.51 8.289c0.37 0.713 0.875-0.026 1.029-0.381 0.179-0.413 0.929 0.363 1.155-0.354 0.19-0.597-0.473-0.568-0.761-0.807-0.014-0.378 0.358-0.901-0.219-1.084-0.473-0.15-0.598 0.306-0.736 0.626-0.155 0.358-0.727-0.213-1.061 0.185-0.222 0.262-0.102 0.693 0.232 0.799 0.811 0.246 0.052 0.417 0.361 1.016 0.060 0.116-0.061-0.118 0 0z"></path>
                                  <path class="path6" d="M26.137 22.289c-0.189-0.258-0.777-0.263-0.707-0.584 0.064-0.292 0.197-0.604-0.072-0.831-0.207-0.175-0.53-0.146-0.703 0.060-0.58 0.682-0.036 0.402-0.926 0.482-0.939 0.084-0.195 0.914 0.195 1.082 0.274 0.117-0.251 1.635 0.735 1.123 0.313-0.164 0.235-0.5 0.425-0.73 0.225-0.008 0.426 0.147 0.653 0.127 0.345-0.031 0.564-0.416 0.4-0.729z"></path>
                                  <path class="path7" d="M11.957 26.986c0.471 0.393 0.755-0.18 0.908-0.531 0.18-0.416 0.93 0.363 1.156-0.356 0.23-0.722-0.839-0.509-0.739-0.964 0.083-0.377 0.159-1.088-0.504-0.938-0.431 0.098-0.326 0.832-0.704 0.75-0.374-0.082-1-0.162-0.947 0.438 0.035 0.396 0.373 0.422 0.648 0.54 0.355 0.153-0.212 0.727 0.182 1.061 0.050 0.043-0.101-0.085 0 0z"></path>
                                  <path class="path8" d="M10.958 19.133c0.461-0.453-0.242-1.166-0.702-0.712-0.349 0.345-0.756 0.788-1.233 0.96-0.886 0.32-1.669-1.68-2.375-0.988-0.704 0.695 1.5 1.628 0.79 2.688-0.199 0.297-1.577 1.352-0.658 1.737 0.731 0.307 1.226-1.107 1.997-1.107 0.792 0.003 1.131 1.245 1.86 1.16 0.875-0.1 0.214-0.916-0.040-1.195-0.963-1.054-0.58-1.618 0.361-2.543 0.196-0.194-0.382 0.375 0 0zM8.628 20.738c0.027-0.113 0.024-0.224-0.010-0.333 0.112 0.026 0.223 0.024 0.333-0.010-0.027 0.118-0.023 0.234 0.013 0.35-0.112-0.043-0.224-0.046-0.336-0.007 0.007-0.061 0.050-0.006 0 0z"></path>
                                  <path class="path9" d="M20.732 22.395c0.313-0.309 0.090-0.854-0.348-0.856-0.466-0.003-0.909 0.7-1.278 0.942-1.118 0.732-1.396-0.961-2.327-0.969-1.332-0.010 0.64 1.861 0.642 2.304-0.003 0.79-1.16 1.081-1.171 1.798 0 0.426 0.532 0.681 0.85 0.362 0.713-0.704 1.333-1.351 2.24-0.597 0.32 0.266 0.875 1.106 1.365 0.622 0.489-0.481-0.337-1.044-0.598-1.367-0.744-0.921-0.093-1.532 0.625-2.239 0.198-0.195-0.38 0.375 0 0zM18.387 24.004c0.044-0.118 0.046-0.236 0.004-0.354 0.118 0.045 0.235 0.045 0.354 0.004-0.043 0.111-0.046 0.225-0.008 0.336-0.119-0.027-0.235-0.023-0.35 0.014 0.008-0.065 0.055-0.007 0 0z"></path>
                                </svg>
                              </span>
                              <div>
                                <span class="text"> <strong>Bề mặt hoàn thiện</strong> Bề Mặt Bóng Mờ
                                </span>
                              </div>
                            </li>
                            <li>
                              <span class="icon_detail_product">
                                <svg id="icon-feat-coverage" viewBox="0 0 32 32" width="100%" height="100%">
                                  <title>feat-coverage</title>
                                  <path class="path1" d="M25.438 22.326h-18.875c-1.095-0.002-1.988-0.895-1.991-1.988v-8.674c0.003-1.095 0.896-1.988 1.991-1.991h18.875c1.095 0.003 1.987 0.896 1.99 1.99v8.674c-0.001 1.095-0.894 1.987-1.99 1.989zM22.997 20.727h2.441c0.212-0.001 0.391-0.18 0.391-0.39v-8.673c0-0.211-0.179-0.39-0.391-0.39h-18.875c-0.211 0-0.391 0.179-0.392 0.391v8.673c0.001 0.21 0.181 0.389 0.392 0.39h2.102v-4.728c0-0.441 0.359-0.8 0.801-0.8 0.44 0 0.799 0.359 0.799 0.8v4.726h2.645v-2.575c0-0.441 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v2.575h2.645v-4.726c0-0.441 0.358-0.8 0.8-0.8s0.8 0.359 0.8 0.8v4.726h2.645v-2.575c0-0.441 0.358-0.8 0.799-0.8s0.801 0.358 0.801 0.8v2.576z"></path>
                                </svg>
                              </span>
                              <div>
                                <span class="text"> <strong>Độ bao phủ</strong> ≈ 13 m²/L
                                </span>
                              </div>
                            </li>
                            <li>
                              <span class="icon_detail_product">
                                <svg id="icon-feat-drying-time" viewBox="0 0 32 32" width="100%" height="100%">
                                  <title>feat-drying-time</title>
                                  <path class="path1" d="M5.753 21.51v0c0.61 1.166 1.415 2.223 2.37 3.119 0.924 0.867 1.985 1.582 3.135 2.104 0.96 0.437 1.978 0.738 3.016 0.896v0c0.389 0.060 0.78 0.098 1.171 0.117h-0.002c0.178 0.008 0.353 0.012 0.525 0.013h0.008l0.211-0.002 0.005-0.001c0.198-0.002 0.396-0.011 0.595-0.024 0.363-0.024 0.729-0.065 1.093-0.127h-0.002c1.037-0.171 2.047-0.487 2.997-0.933h0.002c1.163-0.549 2.232-1.292 3.156-2.191 0.939-0.914 1.726-1.988 2.316-3.166 0.506-1.010 0.864-2.092 1.064-3.203 0.124-0.698 0.187-1.405 0.187-2.112 0-0.562-0.039-1.125-0.118-1.681-0.169-1.195-0.521-2.359-1.042-3.446v0c-0.61-1.273-1.447-2.429-2.46-3.403-1.051-1.010-2.285-1.817-3.628-2.369h-0.001c-0.729-0.299-1.489-0.523-2.266-0.666h0.001c-0.69-0.128-1.39-0.191-2.090-0.191h-0.115c-0.732 0.009-1.467 0.087-2.187 0.235h0.002c-0.772 0.157-1.526 0.396-2.247 0.708h-0.001c-1.332 0.578-2.549 1.408-3.579 2.434h-0.001c-0.978 0.977-1.785 2.126-2.37 3.388-0.509 1.095-0.847 2.268-1.001 3.469-0.064 0.505-0.098 1.015-0.098 1.525 0 0.783 0.077 1.565 0.229 2.334v0.001c0.222 1.103 0.601 2.176 1.125 3.172zM5.886 14.655v0c0.136-1.059 0.435-2.095 0.882-3.058l0.001-0.001c0.513-1.109 1.228-2.125 2.089-2.986v0c0.906-0.903 1.979-1.635 3.147-2.141h-0.001c0.635-0.274 1.297-0.484 1.972-0.621h0.001c0.631-0.13 1.276-0.199 1.921-0.207h-0.001l0.1-0.001c0.615 0 1.229 0.056 1.835 0.168v0c0.68 0.125 1.348 0.322 1.989 0.585h-0.001c1.178 0.484 2.266 1.195 3.189 2.083 0.892 0.857 1.631 1.878 2.168 3v0c0.459 0.957 0.77 1.985 0.919 3.038 0.069 0.492 0.104 0.989 0.104 1.486 0 0.625-0.056 1.25-0.165 1.865-0.177 0.979-0.493 1.935-0.938 2.823-0.52 1.037-1.214 1.984-2.041 2.79-0.813 0.791-1.756 1.446-2.777 1.927h0.001c-0.835 0.393-1.723 0.67-2.63 0.818l-0.002 0.001c-0.315 0.054-0.635 0.089-0.957 0.111-0.174 0.012-0.348 0.019-0.521 0.022l0.005-0.001-0.205 0.002c-0.154-0.001-0.306-0.003-0.455-0.011h-0.002c-0.344-0.018-0.688-0.051-1.027-0.103h-0.001c-0.91-0.139-1.805-0.403-2.646-0.786-1.009-0.458-1.944-1.086-2.758-1.851h-0.001c-0.84-0.787-1.55-1.721-2.088-2.748v0c-0.461-0.877-0.796-1.824-0.99-2.798v0.001c-0.135-0.677-0.202-1.37-0.202-2.061 0-0.45 0.028-0.9 0.086-1.346z"></path>
                                  <path class="path2" d="M21.554 17.504v0h-0.003l-6.062-0.017c-0.21-0.001-0.417-0.087-0.564-0.236s-0.233-0.355-0.233-0.566l0.023-8.378c0.002-0.44 0.361-0.798 0.8-0.798 0.443 0.002 0.801 0.362 0.8 0.803l-0.021 7.578 5.263 0.014c0.44 0.002 0.799 0.362 0.797 0.803 0 0.439-0.36 0.797-0.8 0.797z"></path>
                                </svg>
                              </span>
                              <div>
                                <span class="text"> <strong>Thời gian khô </strong> Khô bề mặt 30 phút
                                </span>
                              </div>
                            </li>
                            <li>
                              <span class="icon_detail_product">
                                <svg id="icon-feat-coats" viewBox="0 0 32 32" width="100%" height="100%">
                                  <title>feat-coats</title>
                                  <path class="path1" d="M24.256 4.795h-13.644c-0.998 0.002-1.81 0.826-1.812 1.835v1.203h-1.737l-0.026 0.004c-0.083 0.023-0.23 0.093-0.375 0.214-0.162 0.133-0.287 0.333-0.351 0.562-0.053 0.184-0.077 0.383-0.079 0.665 0 0.809 0.008 1.639 0.017 2.313l0.010 1.155c-0.004 0.295 0.105 0.617 0.284 0.838 0.249 0.309 0.55 0.453 0.84 0.564 0.12 0.043 0.229 0.074 0.346 0.107l0.228 0.070c0.27 0.087 2.132 0.668 4.151 1.291 0.313 0.096 0.859 0.245 1.438 0.403 1.059 0.289 2.656 0.724 2.792 0.844 0.069 0.095 0.048 0.636-0.011 1.109l-0.226 0.050c-0.191 0.076-0.354 0.178-0.485 0.307-0.315 0.313-0.415 0.674-0.464 0.926l-0.015 0.123c-0.016 0.188-0.046 0.713-0.085 1.479-0.107 2.021-0.311 6.199-0.311 6.222v0.037c0 0.311 0.059 0.577 0.181 0.813 0.102 0.2 0.266 0.388 0.448 0.514 0.273 0.191 0.546 0.252 0.753 0.285 0.219 0.031 0.422 0.035 0.611 0.035h0.578c0.308-0.012 0.634 0.031 1.102-0.169 0.269-0.118 0.522-0.364 0.647-0.624 0.151-0.305 0.169-0.598 0.169-0.791v-0.042c0 0-0.085-1.923-0.178-3.87l-0.008-0.182c-0.043-0.912-0.087-1.818-0.124-2.523l-0.028-0.502c-0.010-0.162-0.018-0.306-0.026-0.424-0.004-0.082-0.009-0.152-0.013-0.215l-0.060-0.404c-0.069-0.229-0.219-0.551-0.531-0.793-0.104-0.080-0.22-0.145-0.384-0.205l-0.273-0.049-0.062-1.057-0.004-0.035c-0.037-0.339-0.119-0.8-0.404-0.925-0.178-0.141-0.856-0.344-0.995-0.385-0.79-0.229-2.343-0.702-4.615-1.403l-3.345-1.043-0.221-0.063c-0.173-0.048-0.347-0.122-0.416-0.176l-0.082-0.062c-0.001-0.178-0.004-0.793-0.009-1.18-0.008-0.688-0.018-1.535-0.017-2.396l0.025-0.225 0.219 0.011c0.104 0.005 0.228 0.010 0.375 0.011l0.746-0.006v1.28c0.001 1.011 0.813 1.834 1.813 1.835l13.644-0.001c0.997 0 1.81-0.823 1.811-1.834v-3.686c-0.004-1.011-0.816-1.835-1.812-1.835zM24.716 6.626v3.567c0 0.328-0.264 0.595-0.587 0.596h-13.35c-0.324 0-0.589-0.268-0.589-0.597v-3.567c0.001-0.329 0.266-0.596 0.59-0.597h13.35c0.322 0 0.585 0.268 0.586 0.598zM17.615 20.921c0.028 0.644 0.104 2.476 0.104 2.476 0.070 1.777 0.135 3.531 0.136 3.545-0.001 0.105-0.023 0.308-0.060 0.395-0.019 0.044-0.066 0.096-0.088 0.107-0.13 0.066-0.22 0.066-0.385 0.067l-0.585 0.003c-0.112-0.002-0.219-0.003-0.335-0.022-0.084-0.017-0.153-0.037-0.219-0.091-0.031-0.025-0.064-0.070-0.080-0.107s-0.036-0.209-0.036-0.407c0.003-0.128 0.157-3.86 0.239-5.696 0.028-0.664 0.052-1.148 0.063-1.326l0.022-0.274c0.020-0.115 0.060-0.209 0.114-0.272 0.001-0.002 0.002-0.002 0.003-0.004l0.953 0.002c0.041 0.045 0.073 0.112 0.1 0.203v0.301l0.054 1.1z"></path>
                                </svg>
                              </span>
                              <div>
                                <span class="text"> <strong>Số lớp</strong> 2 </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="text-holder hidden-xs product-description flex-campaign">
                          <h2 class="no-margin fl-prod-key-facts">Giới thiệu sản phẩm</h2>
                          <p>Dulux Weathershield Powerflexx mới là sơn ngoại thất siêu cao cấp, với màng sơn co giãn gấp 3 lần giúp chống rạn nứt &amp; chống thấm vượt trội.</p>
                          <h2 class="no-margin fl-prod-key-app-desc">Hướng dẫn thi công</h2>
                          <p>Điều kiện thi công: Độ ẩm của bề mặt dưới 16% theo máy  đo độ ẩm Protimeter hay  để bề mặt tường khô từ 21 đến 28 ngày trong điều kiện bình thường (nhiệt độ trung bình 30 độ C, độ ẩm môi trường 80%). Không sơn nếu nhiệt  độ thời tiết dưới 10 độ C. Bảo đảm bề mặt  sơn phải sạch, khô, không có tạp chất làm giảm độ bám dính như bụi, dầu mỡ hay  sáp. Dùng hóa chất thích hợp để xử lý  bề mặt có rêu mốc. Đối với bề mặt  cũ bị phấn hóa, cần loại bỏ màng sơn cũ bằng dụng cụ thích hợp trước khi thi công. Xử lý  triệt để các vết  nứt tường trước khi thi công.</p>
                          <h2>Thông Tin Về An Toàn, Sức Khỏe Và Môi Trường</h2>
                          <p><strong>Hazard warnings</strong></p>
                          Việc xả nhám khô, cắt và/hoặc hàn màng sơn khô bằng khí ga sẽ tạo bụi và/hoặc khói độc. Nên xả nhám ướt nếu có thể. Nếu điều kiện làm việc tại chỗ không thông thoáng để tránh tiếp xúc với khói độc, nên sử dụng thiết bị bảo vệ đường hô hấp thích hợp • Chỉ sử dụng ở nơi thông thoáng. Tránh hít bụi sơn • Tránh tiếp xúc với da hoặc mắt • Mang găng tay, khẩu trang và kính bảo vệ mắt thích hợp khi thi công •  Khi bị dính sơn vào mắt, lập tức rửa  mắt với nhiều nước sạch và đến gặp bác sĩ ngay • Nếu nuốt phải, đến gặp bác sĩ ngay và mang theo thùng sơn hoặc nhãn sản phẩm • Để xa tầm tay trẻ em • Không tái sử dụng thùng sơn để chứa thực phẩm hay đồ uống • Lấy lại lượng sơn còn dư trên cọ hoặc rulô càng nhiều càng tốt trước khi rửa • Không đổ sơn vào cống rãnh hay nguồn nước. Tránh thải sơn ra môi trường. Nên tham khảo hướng dẫn đặc biệt/ thông tin an toàn sản phẩm • Độc đối với sinh vật sống dưới nước. Có thể gây tác hại lâu dài đối với môi trường nước • Khi bị đổ sơn, thu gom bằng đất hoặc cát. Tất cả các vật liệu thải bỏ và thùng chứa, phải được xử lý theo quy định hiện hành của nước sở tại 
                        </div>
                      </div>
                    </div>
                    <!-- Desktop View -->
                    <div class="col-sm-8 col-md-8 hidden-xs">
                      <div class="content">
                        <div class="custom-tab-holder">
                          <!-- Nav tabs -->
                          <ul class="nav nav-tabs custom-tabs" role="tablist">
                            <li role="presentation" class="tab-1 active">
                              <a href="#tab-1" aria-controls="tab-1" role="tab" data-toggle="tab" tabindex="40">Thông tin sản phẩm</a>
                              <div class="trnMark"></div>
                            </li>
                            <li role="presentation" class="tab-3">
                              <a href="#tab-3" aria-controls="tab-3" class="tab-3" role="tab" data-toggle="tab" tabindex="41">Hướng dẫn sử dụng</a>
                              <div class="trnMark"></div>
                            </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active no-margin" id="tab-1">
                              <div class="tab-item">
                                <div class="col-md-12 no-padding">
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-chống-loang-màu"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Chống loang màu</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-bền-màu"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Bền màu</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-che-lấp-khe-nứt-nhỏ"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Che lấp khe nứt nhỏ</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-chống-bám-bụi"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Chống bám bụi</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-chống-nấm-mốc"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Chống nấm mốc</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-làm-mát"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Làm mát</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-lượng-voc-thấp"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Lượng VOC thấp</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-không-thêm-chì-và-thủy-ngân"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Không thêm chì và thủy ngân</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-chống-bong-tróc"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Chống bong tróc</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-mặt-sơn-nhẵn-mịn"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Mặt sơn nhẵn mịn</strong>                                                      
                                    </div>
                                  </div>
                                  <div class="col-md-6 tab-cnt-part">
                                    <div class="col-md-2 col-sm-2 no-padding">
                                      <i class="feature-symbol-chống-thấm"></i>
                                    </div>
                                    <div class="tab-text-holder col-md-10 col-sm-10">
                                      <strong class="fs16">Chống thấm</strong>                                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab-3">
                              <div class="tab-item">
                                <h3>Hướng dẫn sử dụng</h3>
                                <div class="tips-content">
                                  <div>
                                    <span class="title"><strong class="fs16">Chuẩn bị bề mặt trước khi sơn</strong></span>
                                    <div class="tab-description">Bề Mặt Bóng Mờ</div>
                                    <br>
                                  </div>
                                  <div>
                                    <span class="title"><strong class="fs16">Làm sạch</strong></span>
                                    <div class="tab-description">Rửa sạch dụng cụ với nước ngay sau khi sử dụng</div>
                                    <br>
                                  </div>
                                  <div>
                                    <strong class="fs16">Cách lưu trữ</strong>
                                    <div class="tab-description">Bảo quản sơn ở nơi khô, mát.  Đặt thùng sơn ở vị trí thẳng đứng an toàn và đậy chặt nắp</div>
                                    <br>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- MOBILE VIEW -->
                    <div class="pd-cstm-col-8 mobile-view no-margin  visible-xs">
                      <div class="row no-padding no-margin  accordion-holder">
                        <div class="panel-group" id="accordion">
                          <div id="ProductDescription" class="panel panel-default">
                            <div class="panel-heading">
                              <div class="pull-left">
                                <h4 class="fs19 no-padding no-margin  accordion-lbl">Giới thiệu sản phẩm</h4>
                              </div>
                              <div class="pull-right">
                                <a class="accordion-icon-holder collapsed" data-toggle="collapse" data-parent="#accordion" href="#ProductDescription" aria-expanded="false">
                                  <span class="sr-only">accordion images</span>
                                  <span>
                                    <svg class="icon icon-open icon-sm-plus">
                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-open"></use>
                                    </svg>
                                    <svg class="icon icon-close icon-sm-minus" style="display:none">
                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div class="panel-collapse collapse" style="height: 0px;">
                              <div class="panel-body  no-margin accordion-panel-body">
                                <p>Dulux Weathershield Powerflexx mới là sơn ngoại thất siêu cao cấp, với màng sơn co giãn gấp 3 lần giúp chống rạn nứt &amp; chống thấm vượt trội.</p>
                              </div>
                            </div>
                          </div>
                          <div id="ProductFeatures" class="panel panel-default">
                            <div class="panel-heading">
                              <div class="pull-left">
                                <h4 class="fs19 no-padding no-margin  accordion-lbl">Thông tin sản phẩm</h4>
                              </div>
                              <div class="pull-right">
                                <a class="accordion-icon-holder collapsed" data-toggle="collapse" data-parent="#accordion" href="#ProductFeatures" aria-expanded="false">
                                  <span class="sr-only">accordion images</span> 
                                  <span>
                                    <svg class="icon icon-open icon-sm-plus">
                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-open"></use>
                                    </svg>
                                    <svg class="icon icon-close icon-sm-minus" style="display:none">
                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div class="panel-collapse collapse" style="height: 0px;">
                              <div class="panel-body  no-margin accordion-panel-body">
                                <div class="prod-features">
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-chống-loang-màu"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Chống loang màu</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-bền-màu"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Bền màu</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-che-lấp-khe-nứt-nhỏ"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Che lấp khe nứt nhỏ</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-chống-bám-bụi"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Chống bám bụi</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-chống-nấm-mốc"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Chống nấm mốc</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-làm-mát"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Làm mát</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-lượng-voc-thấp"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Lượng VOC thấp</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-không-thêm-chì-và-thủy-ngân"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Không thêm chì và thủy ngân</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-chống-bong-tróc"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Chống bong tróc</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-mặt-sơn-nhẵn-mịn"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Mặt sơn nhẵn mịn</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6 col-xs-12 no-padding pane-left">
                                    <div class="row no-margin  tab-content-wrapper">
                                      <div class="col-xs-12 no-padding">
                                        <div class="pd-icon-holder  col-md-3 col-xs-3 no-padding">
                                          <i class="feature-symbol-chống-thấm"></i>
                                        </div>
                                        <div class="pull-left col-xs-9 pd-title-holder">
                                          <strong class="fs16">Chống thấm</strong><br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="tips-advice" class="panel panel-default">
                            <div class="panel-heading">
                              <div class="pull-left">
                                <h4 class="fs19 no-padding no-margin  accordion-lbl">Hướng dẫn sử dụng</h4>
                              </div>
                              <div class="pull-right">
                                <a class="accordion-icon-holder" data-toggle="collapse" data-parent="#accordion" href="#tips-advice">
                                  <span class="sr-only">accordion images</span>
                                  <span>
                                    <svg class="icon icon-open icon-sm-plus">
                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-open"></use>
                                    </svg>
                                    <svg class="icon icon-close icon-sm-minus" style="display:none">
                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div class="panel-collapse collapse" style="height: 0px;">
                              <div class="panel-body  no-margin accordion-panel-body">
                                <div class="tips-content">
                                  <div>
                                    <span class="title"><strong class="fs16">Chuẩn bị bề mặt trước khi sơn</strong></span>
                                    <div class="tab-description">Bề Mặt Bóng Mờ</div>
                                    <br>
                                  </div>
                                  <div>
                                    <span class="title"><strong class="fs16">Làm sạch</strong></span>
                                    <div class="tab-description">Rửa sạch dụng cụ với nước ngay sau khi sử dụng</div>
                                    <br>
                                  </div>
                                  <div>
                                    <span class="title"><strong class="fs16">Cách lưu trữ</strong></span>
                                    <div class="tab-description">Bảo quản sơn ở nơi khô, mát.  Đặt thùng sơn ở vị trí thẳng đứng an toàn và đậy chặt nắp</div>
                                    <br>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="margin-top-20 padding-15">
                            <h4 class="margin-top-xxl margin-bottom-s"><strong>Thông Tin Về An Toàn, Sức Khỏe Và Môi Trường
                              </strong>
                            </h4>
                            <div class="margin-bottom-xxxs"><span class="semibold">Hazard warnings</span></div>
                            Việc xả nhám khô, cắt và/hoặc hàn màng sơn khô bằng khí ga sẽ tạo bụi và/hoặc khói độc. Nên xả nhám ướt nếu có thể. Nếu điều kiện làm việc tại chỗ không thông thoáng để tránh tiếp xúc với khói độc, nên sử dụng thiết bị bảo vệ đường hô hấp thích hợp • Chỉ sử dụng ở nơi thông thoáng. Tránh hít bụi sơn • Tránh tiếp xúc với da hoặc mắt • Mang găng tay, khẩu trang và kính bảo vệ mắt thích hợp khi thi công •  Khi bị dính sơn vào mắt, lập tức rửa  mắt với nhiều nước sạch và đến gặp bác sĩ ngay • Nếu nuốt phải, đến gặp bác sĩ ngay và mang theo thùng sơn hoặc nhãn sản phẩm • Để xa tầm tay trẻ em • Không tái sử dụng thùng sơn để chứa thực phẩm hay đồ uống • Lấy lại lượng sơn còn dư trên cọ hoặc rulô càng nhiều càng tốt trước khi rửa • Không đổ sơn vào cống rãnh hay nguồn nước. Tránh thải sơn ra môi trường. Nên tham khảo hướng dẫn đặc biệt/ thông tin an toàn sản phẩm • Độc đối với sinh vật sống dưới nước. Có thể gây tác hại lâu dài đối với môi trường nước • Khi bị đổ sơn, thu gom bằng đất hoặc cát. Tất cả các vật liệu thải bỏ và thùng chứa, phải được xử lý theo quy định hiện hành của nước sở tại 
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- MOBILE VIEW END-->
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</div>
@endsection

@section('jsPage')
  <!-- @include('frontend.includes.js.detailProductJS') -->
@endsection