@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('cssPage')
  @include('frontend.includes.css.homeCss')
@endsection
@section('content')
<div id="zone-content" class="zone-content home_dulux">
  <div class="main-container container">
    <!-- /#page-header -->
    <div class="row">
      <section class="col-sm-12">
        <!--   -->
        <a id="main-content"></a>
        <div class="region region-content">
          <section id="block-system-main" class="block block-system clearfix" role="navigation">
            <div data-quickedit-entity-id="node/2">
              <div class="panel-display boxton clearfix radix-boxton">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 radix-layouts-content panel-panel">
                      <div class="panel-panel-inner">
                        <div class="panel-pane pane-block pane-bean-color-question-block pane-bean">
                          <div class="pane-content">
                            <div class="first-item hero-image hero-large" style="background-image:url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/stalen.jpg');">
                              <div class="wrapper_header_dulux field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                <div class="field-items">
                                  <div class="field-item even">
                                    <div class="color-quest-first-block question-module">
                                      <h1 class="fl-question-title">Chào mừng bạn đến với thế giới sắc màu</h1>
                                      <!-- <h2>Do you have a specific colour in mind?</h2> -->
                                      <div class="scroll-down-icon"><a href="#topContent" tabindex="25"><img alt="scroll down" src=""></a></div>
                                      <ul class="button_header_dulux">
                                        <li><a class="flQuestion-processed" href="#" id="color_yes" title="Tôi đang nghĩ đến một vài màu sắc" tabindex="26">Tôi đang nghĩ đến một vài màu sắc</a></li>
                                        <li><a href="#" id="color_no" title="Tôi không chắc nên bắt đầu từ đâu" tabindex="27">Tôi không chắc nên bắt đầu từ đâu</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a id="topContent"></a>
                        <div class="panel-separator"></div>
                        <div class="panel-pane pane-block pane-platform-flex-camp-builder-home-page-multiple-blocks pane-platform-flex-camp-builder">
                          <div class="pane-content">
                            <a class="entry-image-link" href="https://www.dulux.vn/vi/mau-sac-chu-dao-cua-nam-2019" tabindex="29">
                              <div class="col-xs-6 col-md-3 vr-margin-bottom-5">
                                <div class="entry-point">
                                  <div class="entry-image" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/key-entry.jpg')"></div>
                                  <div class="post_hot entry-content fl-equi-height" style="height: 82px;">
                                    Màu Dulux của Năm 2019
                                    <button class="home_list_item bttn squared right" tabindex="30">
                                      <i class='fas fa-arrow-right' style='font-size:15px;'></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a class="entry-image-link" href="https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha" tabindex="31">
                              <div class="col-xs-6 col-md-3 vr-margin-bottom-5">
                                <div class="entry-point">
                                  <div class="entry-image" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/image-entrypoint-xl2x_1.png')"></div>
                                  <div class="post_hot entry-content fl-equi-height" style="height: 82px;">
                                    Trợ giúp về mẹo &amp; bí quyết
                                    <button class="home_list_item bttn squared right" tabindex="30">
                                      <i class='fas fa-arrow-right' style='font-size:15px;'></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a class="entry-image-link" href="https://www.dulux.vn/vi/san-pham" tabindex="33">
                              <div class="col-xs-6 col-md-3 vr-margin-bottom-5">
                                <div class="entry-point">
                                  <div class="entry-image" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/fc_hero/entrypoint_img_products2x.png')"></div>
                                  <div class="post_hot entry-content fl-equi-height" style="height: 82px;">
                                    Chọn sản phẩm phù hợp để sơn
                                    <button class="home_list_item bttn squared right" tabindex="30">
                                      <i class='fas fa-arrow-right' style='font-size:15px;'></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a class="entry-image-link" href="https://www.dulux.vn/vi/storefinder" tabindex="35">
                              <div class="col-xs-6 col-md-3 vr-margin-bottom-5">
                                <div class="entry-point">
                                  <div class="entry-image" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/fc_hero/image-entrypoint-xl2x.png')"></div>
                                  <div class="post_hot entry-content fl-equi-height" style="height: 82px;">
                                    Tìm điểm bán gần bạn
                                    <button class="home_list_item bttn squared right" tabindex="30">
                                      <i class='fas fa-arrow-right' style='font-size:15px;'></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="panel-separator"></div>
                        @for ($i = 0; $i < count($posts); $i++)
                        <div class="panel-pane pane-block pane-bean">
                          <div class="pane-content">
                            <div class="entity entity-bean bean-bean-block clearfix" about="/block/cf19-promoblock" typeof="">
                              <div class="content">
                                <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even">
                                      <div class="col-md-12 img-left-block">
                                        <div class="group-left-code  image-left col-md-7 col-sm-8 col-xs-12">
                                          <div class="media media-element-container media-default">
                                            <div id="file-4404" class="file file-image file-image-jpeg">
                                              <h2 class="element-invisible"><a href="/files/dulux-cf-2019jpg" tabindex="37">dulux-cf-2019.jpg</a></h2>
                                              <div class="content">
                                                <img alt="Màu Dulux năm 2019 - Màu Nâu Mật Nồng" title="Màu Dulux năm 2019 - Màu Nâu Mật Nồng" height="454" width="695" class="media-element file-default" typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/wysiwyg/dulux-cf-2019.jpg">
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="group-right-code  content-right col-md-5 col-sm-4 col-xs-12">
                                          <h2 class="fl-block-title focus-outline" style="font-family: colour-sans, open_sans_regular, Helvetica, Arial, sans-serif; line-height: 36px; color: rgb(51, 51, 51); margin: 0px; font-size: 28px; padding: 0px;  outline: none !important;">Màu Dulux&nbsp;năm 2019 - Màu Nâu Mật Nồng</h2>
                                          <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); font-size: 1.6rem; line-height: 2.4rem;">&nbsp;</p>
                                          <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); font-size: 1.6rem; line-height: 2.4rem; ">Hàng năm, các chuyên gia về màu sắc của Dulux sẽ đón đầu các xu hướng sắp tới để định hình nên Màu sắc chủ đạo mới của năm. Nâu mật nồng là tông màu hổ phách lấy cảm hứng từ tinh thần lạc quan mà chúng tôi muốn truyền tải. Hãy khám phá xem sắc thái màu linh hoạt này cùng bốn bảng màu pa-lét bổ sung có thể giúp bạn biến đổi không gian nhà mình như thế nào.</p>
                                          <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); font-size: 1.6rem; line-height: 2.4rem; ">&nbsp;</p>
                                          <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); font-size: 1.6rem; line-height: 2.4rem; "><span style="font-family: Helvetica, sans-serif; font-size: 15.5pt;"><a href="https://www.dulux.vn/vi/mau-sac-chu-dao-cua-nam-2019" style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); text-decoration-line: underline; font-size: 14px; padding: 8px 24px; outline: 0px; cursor: pointer; border-radius: 0px 10px; border: 2px solid rgb(47, 196, 141); font-weight: bold; float: left;" tabindex="38">Tìm hiểu thêm</a></span></p>
                                        </div>
                                      </div>
                                      <p class="promo-block-break">&nbsp;</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="field field-name-title-field field-type-text field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="panel-separator"></div>
                        <div class="panel-pane pane-node">
                          <h2 class="pane-title">
                            Thấm Tường – Chủ Quan Lúc Đầu - Hệ Lụy Dài Lâu
                          </h2>
                          <div class="pane-content">
                            <div about="/vi/y-tuong/th%E1%BA%A5m-t%C6%B0%E1%BB%9Dng-%E2%80%93-ch%E1%BB%A7-quan-l%C3%BAc-%C4%91%E1%BA%A7u-h%E1%BB%87-l%E1%BB%A5y-d%C3%A0i-l%C3%A2u" typeof="sioc:Item foaf:Document" class="article_left_image image-flip-lyout ds-2col node node-article view-mode-article_left_image clearfix">
                              <div class="group-left-code  image-left col-xs-12 col-md-7">
                                <div class="field field-name-field-hero-image field-type-image field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/homepage_article_blocks/rcf/article/dulux-tac-hai-do-tham-tuong.jpg?itok=8y9D7zY_" width="695" height="391" alt="Dulux thấm tường chủ quan lúc đầu hệ lụy dài lâu" title="Dulux thấm tường chủ quan lúc đầu hệ lụy dài lâu"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="group-right-code  content-right col-xs-12 col-md-5">
                                <div class="field field-name-title-field field-type-text field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even">
                                      <h2 class="fl-block-title">Thấm Tường – Chủ Quan Lúc Đầu - Hệ Lụy Dài Lâu</h2>
                                    </div>
                                  </div>
                                </div>
                                <div class="field field-name-field-teaser field-type-text-long field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even">Thấm ẩm luôn được ví như “căn bệnh ung thư” ám ảnh mọi công trình khi khả năng xảy ra cao nhưng lại khó phát hiện và “chữa trị”. Một khi tường ngoại thất bị thấm, các hệ lụy đi kèm sẽ khiến tổ ấm của bạn không thể đứng vững cùng thời gian.</div>
                                  </div>
                                </div>
                                <div class="field field-name-node-link field-type-ds field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even"><a href="/vi/y-tuong/th%E1%BA%A5m-t%C6%B0%E1%BB%9Dng-%E2%80%93-ch%E1%BB%A7-quan-l%C3%BAc-%C4%91%E1%BA%A7u-h%E1%BB%87-l%E1%BB%A5y-d%C3%A0i-l%C3%A2u" class="" tabindex="39">Hãy cho tôi biết thêm về các bản tin</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="panel-separator"></div>
                        @endfor
                        <!-- <div class="panel-pane pane-block pane-bean-picture-it-block-cf2019 pane-bean">
                          <div class="pane-content">
                            <div class="entity entity-bean bean-bean-block clearfix" about="/block/picture-it-block-cf2019" typeof="">
                              <div class="content">
                                <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even">
                                      <div style="width: 853.328px;">
                                        <span class="store-links" style="text-align: left;">
                                          <a href="https://itunes.apple.com/vn/app/dulux-visualizer-vn/id862447000?mt=8">
                                          <img alt="download from apple app store"
                                                src="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_rem/images/app-store-btn.jpg"
                                                style="width: 100px;position: absolute;margin-top: 230px;margin-left: 175px;" title="Download from Apple App Store" /></a>
                                          <a href="https://play.google.com/store/apps/details?id=com.akzonobel.cooper.vn.dulux" title="Get it on Google Play">
                                          <img alt="Get it on Google Play"
                                                src="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_rem/images/google-store-btn.jpg"
                                                style="width: 100px;position: absolute;margin-top: 230px;margin-left: 20px;" />
                                          </a>
                                        </span>
                                        <center>
                                          <img alt="Hình ảnh căn nhà tương lai trong tầm tay với ứng dụng Visualizer 3.0" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/visualizer-promo-block-crf19_2.jpg" style="">
                                          <center>&nbsp;</center>
                                        </center>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="field field-name-title-field field-type-text field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        <!-- </div> -->
                        <!-- <div class="panel-separator"></div> -->
                        <!-- <div class="panel-pane pane-node">
                          <h2 class="pane-title">
                            Let’s Colour Promoblock
                          </h2>
                          <div class="pane-content">
                            <div class="flex-campaign">
                              <div class="row">
                                <div class="col-sm-12 margin-top-40">
                                  <!-- Promo block -->
                                  <!-- <div class="promo-block" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/fc-generic/brand-lets-colour-full-story-video-market-302.jpg')">
                                    <div class="aspect-ratio">
                                      <img class="hidden-sm hidden-md hidden-lg full-width sixteen-nine" alt="" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/fc-generic/brand-lets-colour-full-story-video-market-302.jpg">
                                      <div class="promo-content promo-pos-bottom promo-pos-left txt-light" style="background-color: #0D2B60;">
                                        <h5 class="margin-bottom-xxxs" style="color: #ffffff">Chiến dịch Let’s Colour</h5>
                                        <h2 class="margin-bottom-xs" style="color: #ffffff">Điểm tô thêm sắc màu cho cuộc sống</h2>
                                        <p class="margin-bottom-m" style="color: #ffffff">Không chỉ thay đổi diện mạo bức tường, sơn còn cải thiện chất lượng cuộc sống của hàng triệu người.</p>
                                        <a href="https://www.dulux.vn/vn/lets-colour" class="btn btn-primary " target="" title="Cách làm &amp; cảm hứng" tabindex="49">Cách làm &amp; cảm hứng</a>
                                      </div>
                                    </div>
                                  </div> -->
                                  <!-- //Promo block -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.boxton -->
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</div>
@endsection

@section('jsPage')
  @include('frontend.includes.js.homeJS')
@endsection
