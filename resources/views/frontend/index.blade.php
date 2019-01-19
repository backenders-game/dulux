@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('cssPage')
@include('frontend.includes.partials.fontendCss')
@endsection
@section('content')
<div class="zone-filter" >
    <div class="hdr-mx container-filter">
      <div class="filter-region">
        <a href="#" class="filter-toggle filter-toggle-touch pull-left no-padding col-xs-6 col-sm-2 visible-xs">Bộ lọc</a>
        <a href="#" class="filter-toggle filter-toggle-normal pull-left no-padding col-xs-6 col-sm-2 hidden-xs fl-expanded">Bộ lọc</a>
        <a href="#" class="filter-reset pull-right fl-right col-xs-6 col-sm-2" style="display: none;">Khởi tạo lại bộ lọc </a>
        <div class="col-xs-12  col-sm-8 filter-selections" id="filter-selections">
          <div class="fl-current-selections"></div>
        </div>
        <div id="page-filters">
          <div class="region region-filters">
            <section id="block-flourish-search-solr-flourish-search-overlay" class="block block-flourish-search-solr clearfix" id="block-flourish-search-solr-flourish-search-overlay" class="block--flourish-search-solr-flourish-search-overlay">
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="zone-content" class="zone-content">
    <div class="main-container container">
      <!-- /#page-header -->
      <div class="row">
        <section class="col-sm-12">
          <a id="main-content"></a>
          <div class="region region-content">
            <section id="block-system-main" class="block block-system clearfix" role="navigation">
              <div data-quickedit-entity-id="node/2">
                <div class="panel-display boxton clearfix radix-boxton" >
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-12 radix-layouts-content panel-panel">
                        <div class="panel-panel-inner">
                          <div class="panel-pane pane-block pane-bean-color-question-block pane-bean"  >
                            <div class="pane-content">
                              <div class="first-item hero-image hero-large" style="background-image:url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/stalen.jpg');">
                                <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even">
                                      <div class="color-quest-first-block question-module">
                                        <h1 class="fl-question-title">Chào mừng bạn đến với thế giới sắc màu</h1>
                                        <!-- <h2>Do you have a specific colour in mind?</h2> -->
                                        <div class="scroll-down-icon"><a href="#topContent"><img alt="scroll down" src="" /></a></div>
                                        <ul>
                                          <li><a class="flQuestion-processed" href="#" id="color_yes" title="Tôi đang nghĩ đến một vài màu sắc">Tôi đang nghĩ đến một vài màu sắc</a></li>
                                          <li><a href="#" id="color_no" title="Tôi không chắc nên bắt đầu từ đâu">Tôi không chắc nên bắt đầu từ đâu</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-block pane-platform-flex-camp-builder-home-page-multiple-blocks pane-platform-flex-camp-builder"  >
                            <div class="pane-content">
                              <a class="entry-image-link" href="https://www.dulux.vn/vi/mau-sac-chu-dao-cua-nam-2019">
                                <div class="col-xs-6 col-md-3 vr-margin-bottom-5">
                                  <div class="entry-point">
                                    <div class="entry-image" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/key-entry.jpg')"></div>
                                    <div class="entry-content fl-equi-height">
                                      Màu Dulux của Năm 2019
                                      <button class="bttn squared right">
                                        <svg class="icon icon-arrow-right right">
                                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a class="entry-image-link" href="https://www.dulux.vn/vi/meo-va-loi-khuyen-trang-tri-nha">
                                <div class="col-xs-6 col-md-3 vr-margin-bottom-5">
                                  <div class="entry-point">
                                    <div class="entry-image" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/image-entrypoint-xl2x_1.png')"></div>
                                    <div class="entry-content fl-equi-height">
                                      Trợ giúp về mẹo & bí quyết
                                      <button class="bttn squared right">
                                        <svg class="icon icon-arrow-right right">
                                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a class="entry-image-link" href="https://www.dulux.vn/vi/san-pham">
                                <div class="col-xs-6 col-md-3 vr-margin-bottom-5">
                                  <div class="entry-point">
                                    <div class="entry-image" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/fc_hero/entrypoint_img_products2x.png')"></div>
                                    <div class="entry-content fl-equi-height">
                                      Chọn sản phẩm phù hợp để sơn
                                      <button class="bttn squared right">
                                        <svg class="icon icon-arrow-right right">
                                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a class="entry-image-link" href="https://www.dulux.vn/vi/storefinder">
                                <div class="col-xs-6 col-md-3 vr-margin-bottom-5">
                                  <div class="entry-point">
                                    <div class="entry-image" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/fc_hero/image-entrypoint-xl2x.png')"></div>
                                    <div class="entry-content fl-equi-height">
                                      Tìm điểm bán gần bạn
                                      <button class="bttn squared right">
                                        <svg class="icon icon-arrow-right right">
                                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-block pane-bean-cf19-promoblock pane-bean"  >
                            <div class="pane-content">
                              <div class="entity entity-bean bean-bean-block clearfix" about="/block/cf19-promoblock" typeof="">
                                <div class="content">
                                  <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">
                                        <div class="col-md-12 img-left-block">
                                          <div class="group-left-code  image-left col-md-7 col-sm-8 col-xs-12">
                                            <div class="media media-element-container media-default">
                                              <div id="file-4341" class="file file-image file-image-jpeg">
                                                <h2 class="element-invisible"><a href="/files/promoblock-image-no1jpg">Dulux-Mau-tuong-lai-Mau-chu-dao-nam-2019-Mot-khong-gian-khoi-goi-tri-tuong-tuong-Phong-khach-Cam-hung-Viet-nam-01.jpg</a></h2>
                                                <div class="content">
                                                  <img alt="Dulux-Mau-tuong-lai-Mau-chu-dao-nam-2019-Mot-khong-gian-khoi-goi-tri-tuong-tuong-Phong-khach-Cam-hung-Viet-nam-01.jpg" title="Dulux-Mau-tuong-lai-Mau-chu-dao-nam-2019-Mot-khong-gian-khoi-goi-tri-tuong-tuong-Phong-khach-Cam-hung-Viet-nam-01.jpg" height="390" width="695" class="media-element file-default" typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/wysiwyg/promoblock-image-no_1.jpg" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="group-right-code  content-right col-md-5 col-sm-4 col-xs-12">
                                            <h2 class="fl-block-title focus-outline" style="font-family: colour-sans, open_sans_regular, Helvetica, Arial, sans-serif; line-height: 36px; color: rgb(51, 51, 51); margin: 0px; font-size: 28px; padding: 0px;  outline: none !important;">Màu Dulux năm 2019 - Màu Nâu Mật Nồng</h2>
                                            <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); font-size: 1.6rem; line-height: 2.4rem;"> </p>
                                            <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); font-size: 1.6rem; line-height: 2.4rem; ">Hàng năm, các chuyên gia về màu sắc của Dulux sẽ đón đầu các xu hướng sắp tới để định hình nên Màu sắc chủ đạo mới của năm. Nâu mật nồng là tông màu hổ phách lấy cảm hứng từ tinh thần lạc quan mà chúng tôi muốn truyền tải. Hãy khám phá xem sắc thái màu linh hoạt này cùng bốn bảng màu pa-lét bổ sung có thể giúp bạn biến đổi không gian nhà mình như thế nào.</p>
                                            <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); font-size: 1.6rem; line-height: 2.4rem; "> </p>
                                            <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); font-size: 1.6rem; line-height: 2.4rem; "><span style="font-family: Helvetica, sans-serif; font-size: 15.5pt;"><a href="https://www.dulux.vn/vi/mau-sac-chu-dao-cua-nam-2019" style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102); text-decoration-line: underline; font-size: 14px; padding: 8px 24px; outline: 0px; cursor: pointer; border-radius: 0px 10px; border: 2px solid rgb(47, 196, 141); font-weight: bold; float: left;" tabindex="281">Tìm hiểu thêm</a></span></p>
                                          </div>
                                        </div>
                                        <p class="promo-block-break"> </p>
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
                          <div class="panel-pane pane-node"  >
                            <h2 class="pane-title">
                              Thấm Tường – Chủ Quan Lúc Đầu - Hệ Lụy Dài Lâu
                            </h2>
                            <div class="pane-content">
                              <div   about="/vi/y-tuong/th%E1%BA%A5m-t%C6%B0%E1%BB%9Dng-%E2%80%93-ch%E1%BB%A7-quan-l%C3%BAc-%C4%91%E1%BA%A7u-h%E1%BB%87-l%E1%BB%A5y-d%C3%A0i-l%C3%A2u" typeof="sioc:Item foaf:Document" class="article_left_image image-flip-lyout ds-2col node node-article view-mode-article_left_image clearfix">
                                <div class="group-left-code  image-left col-md-8 col-xs-12" >
                                  <div class="field field-name-field-hero-image field-type-image field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/homepage_article_blocks/rcf/article/dulux-tac-hai-do-tham-tuong.jpg?itok=yyY8KQfR" width="695" height="391" alt="Dulux thấm tường chủ quan lúc đầu hệ lụy dài lâu" title="Dulux thấm tường chủ quan lúc đầu hệ lụy dài lâu" /></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="group-right-code  content-right col-md-4 col-xs-12" >
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
                                      <div class="field-item even"><a href="/vi/y-tuong/th%E1%BA%A5m-t%C6%B0%E1%BB%9Dng-%E2%80%93-ch%E1%BB%A7-quan-l%C3%BAc-%C4%91%E1%BA%A7u-h%E1%BB%87-l%E1%BB%A5y-d%C3%A0i-l%C3%A2u" class="">Hãy cho tôi biết thêm về các bản tin</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div >
                            </div>
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-block pane-bean-shop-block pane-bean"  >
                            <div class="pane-content">
                              <div class="entity entity-bean bean-bean-block clearfix" about="/block/shop-block" typeof="">
                                <div class="content">
                                  <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">
                                        <div class="col-md-12 img-right-block">
                                          <div class="group-right-code  image-right col-md-8 col-sm-8 col-xs-12 col-sm-push-4 col-md-push-4">
                                            <div class="media media-element-container media-default">
                                              <div id="file-3634" class="file file-image file-image-jpeg">
                                                <h2 class="element-invisible"><a href="/files/duluxtuongbiettacjpg">dulux_tuong_biet_tac.jpg</a></h2>
                                                <div class="content">
                                                  <img alt="Dulux_tuong_biet_tac" title="Dulux_tuong_biet_tac" height="436" width="652" class="media-element file-default" typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/wysiwyg/dulux_tuong_biet_tac.jpg" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <h2 class="group-left-code  content-left col-md-4 col-sm-4 col-xs-12 col-sm-pull-8 col-md-pull-8" style="line-height: 20px;"><br />Tường biệt tác với Dulux<br /><br /><span style="color: rgb(102, 102, 102); font-family: &quot;Open Sans&quot;, sans-serif; font-size: 16px;">Liệu bức tường đơn điệu của ngôi nhà bạn đang chờ một sự phá cách?<br />Hãy cùng Dulux xem qua những bí quyết để biến hóa ngôi nhà bạn thành một không gian sống tuyệt vời, với sự sáng tạo từ nghệ thuật "Tường biệt tác".</span><br /><br /><a class="btn-grn-br-crvd" href="/vi/y-tuong/tường-biệt-tác-với-dulux-3-cách-thức-mới-lạ-để-trang-trí-tường-nội-thất" style="background-color: rgb(255, 255, 255); font-family: &quot;Open Sans&quot;, sans-serif; font-size: 16px;">Khám phá ngay</a><br /> </h2>
                                          <p> </p>
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
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-node"  >
                            <h2 class="pane-title">
                              Dulux Ambiance - Sáng tạo không gian sống đậm phong cách riêng
                            </h2>
                            <div class="pane-content">
                              <div   about="/vi/y-tuong/ambiance" typeof="sioc:Item foaf:Document" class="article_right_image image-flip-lyout ds-2col node node-article view-mode-article_right_image clearfix">
                                <div class="group-left-code  content-left col-md-4 col-xs-12" >
                                  <div class="field field-name-title-field field-type-text field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">
                                        <h2 class="fl-block-title">Dulux Ambiance - Sáng tạo không gian sống đậm phong cách riêng</h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field field-name-field-teaser field-type-text-long field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">Hãy sáng tạo không gian sống của bạn với sự kết hợp độc đáo, vô tận từ những gam màu sắc nét và các hiệu ứng đặc biệt từ Dulux Ambiance</div>
                                    </div>
                                  </div>
                                  <div class="field field-name-node-link field-type-ds field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even"><a href="/vi/y-tuong/ambiance" class="">Hãy cho tôi biết thêm về các bản tin</a></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="group-right-code  image-right col-md-8 col-xs-12" >
                                  <div class="field field-name-field-hero-image field-type-image field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/homepage_article_blocks/rcf/article/2016/Augambiance-all---vn.jpg?itok=s4Vo_DoG" width="695" height="391" alt="ambiance all - VN " title="ambiance all - VN " /></div>
                                    </div>
                                  </div>
                                </div>
                              </div >
                            </div>
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-block pane-bean-dulux-easyclean-lau-chui-vuot-1 pane-bean"  >
                            <div class="pane-content">
                              <div class="entity entity-bean bean-bean-block clearfix" about="/block/dulux-easyclean-lau-chui-vuot--1" typeof="">
                                <div class="content">
                                  <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">
                                        <div class="col-md-12 img-left-block" style="width: 1267px;">
                                          <div class="group-left-code  image-left col-md-7 col-sm-8 col-xs-12" style="width: 720.406px;">
                                            <div class="media media-element-container media-default">
                                              <div id="file-4278" class="file file-image file-image-jpeg">
                                                <h2 class="element-invisible"><a href="/files/duluxeasycleanjpg">dulux_easyclean.jpg</a></h2>
                                                <div class="content">
                                                  <img alt="Dulux EasyClean lau chùi vượt trội" title="Dulux EasyClean lau chùi vượt trội" height="539" width="1030" class="media-element file-default" typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/wysiwyg/dulux_easyclean.jpg" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="group-right-code  content-right col-md-5 col-sm-4 col-xs-12" style="width: 514.578px;">
                                            <h2 class="focus-outline" style="font-family: open_sans_regular, arial, sans-serif; color: rgb(51, 51, 51); margin: 0px; padding: 0px; outline: none !important;">Bé vui chơi thỏa thích, vết bẩn để mẹ lo</h2>
                                            <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102);"> </p>
                                            <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102);">Nói không với vết bẩn và vi khuẩn, cả nhà đều vui cùng Dulux EasyClean!</p>
                                            <p style="font-family: open_sans_regular, arial, sans-serif; color: rgb(102, 102, 102);"> </p>
                                            <br style="font-family: open_sans_regular, arial, sans-serif;" /><span style="font-family: open_sans_regular, arial, sans-serif; font-size: 26px;"><span style="color: rgb(0, 0, 0);"> <a href="http://dulux.com.vn/son-noi-that/son-lau-chui-Dulux-EasyClean.htm" style="color: rgb(102, 102, 102); text-decoration-line: underline; outline: 0px; font-size: 16px; padding: 8px 24px; border-radius: 0px 10px; border: 2px solid rgb(47, 196, 141); font-weight: bold; float: left;" tabindex="38"><font style="vertical-align: inherit;">Xem thêm  </font></a></span></span>
                                            <div> </div>
                                          </div>
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
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-node"  >
                            <h2 class="pane-title">
                              Dịch vụ Phối màu nhà online
                            </h2>
                            <div class="pane-content">
                              <div   about="/vi/y-tuong/dich-vu-phoi-mau" typeof="sioc:Item foaf:Document" class="article_right_image image-flip-lyout ds-2col node node-article view-mode-article_right_image clearfix">
                                <div class="group-left-code  content-left col-md-4 col-xs-12" >
                                  <div class="field field-name-title-field field-type-text field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">
                                        <h2 class="fl-block-title">Dịch vụ Phối màu nhà online</h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field field-name-field-teaser field-type-text-long field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">Bạn chưa biết sơn màu gì dành cho nhà mình? Bạn muốn thử những cách phối màu khác nhau cho ngôi nhà của mình? </div>
                                    </div>
                                  </div>
                                  <div class="field field-name-node-link field-type-ds field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even"><a href="/vi/y-tuong/dich-vu-phoi-mau" class="">Hãy cho tôi biết thêm về các bản tin</a></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="group-right-code  image-right col-md-8 col-xs-12" >
                                  <div class="field field-name-field-hero-image field-type-image field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/homepage_article_blocks/rcf/article/2016/Augdich-vu-phoi-mau-nha.jpg?itok=aylQIisZ" width="695" height="391" alt="Dich vu Phoi mau nha " title="Dich vu Phoi mau nha " /></div>
                                    </div>
                                  </div>
                                </div>
                              </div >
                            </div>
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-node"  >
                            <h2 class="pane-title">
                              Bạn muốn trở thành Nhà Thầu Chuyên Nghiệp Dulux?
                            </h2>
                            <div class="pane-content">
                              <div   about="/vi/y-tuong/bn-ang-mun-tr-thanh-nha-thu-chuyen-nghip-dulux" typeof="sioc:Item foaf:Document" class="article_left_image image-flip-lyout ds-2col node node-article view-mode-article_left_image clearfix">
                                <div class="group-left-code  image-left col-md-8 col-xs-12" >
                                  <div class="field field-name-field-hero-image field-type-image field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/homepage_article_blocks/rcf/article/2016/Augntcn.jpg?itok=l6e25O82" width="695" height="391" alt="NTCN" title="NTCN" /></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="group-right-code  content-right col-md-4 col-xs-12" >
                                  <div class="field field-name-title-field field-type-text field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">
                                        <h2 class="fl-block-title">Bạn muốn trở thành Nhà Thầu Chuyên Nghiệp Dulux?</h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field field-name-field-teaser field-type-text-long field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">Hãy gia nhập hội Nhà thầu chuyên nghiệp để nhận được các ưu đãi đặc quyền từ Dulux.</div>
                                    </div>
                                  </div>
                                  <div class="field field-name-node-link field-type-ds field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even"><a href="/vi/y-tuong/bn-ang-mun-tr-thanh-nha-thu-chuyen-nghip-dulux" class="">Hãy cho tôi biết thêm về các bản tin</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div >
                            </div>
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-block pane-bean-picture-it-block pane-bean"  >
                            <div class="pane-content">
                              <div class="entity entity-bean bean-bean-block clearfix" about="/block/picture-it-block" typeof="">
                                <div class="content">
                                  <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                    <div class="field-items">
                                      <div class="field-item even">
                                        <div class="row third-item">
                                          <div class="col-lg-4 col-md-6 col-xs-12 third-itemleft text-block">
                                            <h2>Hình ảnh căn nhà tương lai trong tầm tay với ứng dụng Visualizer 3.0</h2>
                                            <p>
                                              <span style="color: rgb(67, 70, 73); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif; font-size: 16px; line-height: 24px;">
                                                <!--Việc hình dung ngôi nhà tương lai trong lớp sơn mới nay dễ dàng hơn bao giờ hết với ứng dụng Dulux Visualizer mới. Ứng dụng giúp&nbsp;người dùng &nbsp;lựa chọn màu sắc phù hợp cho tổ ấm của mình một cách nhanh chóng và dễ dàng. Ứng dụng có mặt trên&nbsp;cả 2 hệ điều hành iOS và Android và hoàn toàn MIỄN PHÍ.&nbsp;-->
                                              </span>
                                              <br style="margin: 0px; padding: 0px; color: rgb(67, 70, 73); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif; font-size: 16px; line-height: 24px;" /><br style="margin: 0px; padding: 0px; color: rgb(67, 70, 73); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif; font-size: 16px; line-height: 24px;" /><span style="color: rgb(67, 70, 73); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif; font-size: 16px; line-height: 24px;">Hãy tải ngay ứng dụng Dulux Visualizer về cho điện thoại và máy tính bảng của bạn. </span>
                                            </p>
                                            <span class="store-links"><a href="https://itunes.apple.com/vn/app/dulux-visualizer-vn/id862447000?mt=8"><img alt="download from apple app store" src="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_rem/images/app-store-btn.jpg" title="Download from Apple App Store" /></a> <a href="https://play.google.com/store/apps/details?id=com.akzonobel.cooper.vn.dulux" title="Get it on Google Play"><img alt="Get it on Google Play" src="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_rem/images/google-store-btn.jpg" /></a> </span>
                                          </div>
                                          <div class="col-md-8 col-md-8 col-xs-12 third-itemright"><img alt="Hình ảnh căn nhà tương lai trong tầm tay với ứng dụng Visualizer 3.0" src="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_theme/images/live-mobile.png" /></div>
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
                          </div>
                          <div class="panel-separator"></div>
                          <div class="panel-pane pane-node"  >
                            <h2 class="pane-title">
                              Let’s Colour Promoblock
                            </h2>
                            <div class="pane-content">
                              <div class="flex-campaign">
                                <div class="row">
                                  <div class="col-sm-12 margin-top-40">
                                    <!-- Promo block -->
                                    <div class="promo-block" style="background-image: url('https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/fc-generic/brand-lets-colour-full-story-video-market-302.jpg')">
                                      <div class="aspect-ratio">
                                        <img class="hidden-sm hidden-md hidden-lg full-width sixteen-nine" alt="" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/fc-generic/brand-lets-colour-full-story-video-market-302.jpg">
                                        <div class="promo-content promo-pos-bottom promo-pos-left txt-light" style="background-color: #0D2B60;">
                                          <h5 class="margin-bottom-xxxs" style="color: #ffffff">Chiến dịch Let’s Colour</h5>
                                          <h2 class="margin-bottom-xs" style="color: #ffffff">Điểm tô thêm sắc màu cho cuộc sống</h2>
                                          <p class="margin-bottom-m" style="color: #ffffff">Không chỉ thay đổi diện mạo bức tường, sơn còn cải thiện chất lượng cuộc sống của hàng triệu người.</p>
                                          <a href="https://www.dulux.vn/vn/lets-colour" class="btn btn-primary "target="" title="Cách làm &amp; cảm hứng">Cách làm &amp; cảm hứng</a>
                                        </div>
                                      </div>
                                    </div>
                                    <!-- //Promo block -->
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
