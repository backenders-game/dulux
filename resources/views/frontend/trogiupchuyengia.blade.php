@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('cssPage')
<link type="text/css" rel="stylesheet" href="https://www.dulux.vn/sites/www.dulux.vn/files/advagg_css/css__WATnv9nlz6llU3Se2BCSDY309d4IG6FiMjoPiUT1cLM__98Rqz7CLn2EGkqmEekCr-brCVMwZ1AOtooy39ZWeUdo__IY9epI-mj_jUyCKMTKnYycFqUe7k0NLtv13O2_s2fYI.css" media="all" />
@endsection

@section('content')
<div class="zone-filter">
  <div class="hdr-mx container-filter">
    <div class="filter-region">
      <a href="#" class="filter-toggle filter-toggle-touch pull-left no-padding col-xs-6 col-sm-2 visible-xs">Bộ lọc</a>
      <a href="#" class="filter-toggle filter-toggle-normal pull-left no-padding col-xs-6 col-sm-2 hidden-xs fl-expanded" tabindex="21">Bộ lọc</a>
      <a href="#" class="filter-reset pull-right fl-right col-xs-6 col-sm-2" style="display: none;" tabindex="22">Khởi tạo lại bộ lọc </a>
      <div class="col-xs-12  col-sm-8 filter-selections" id="filter-selections">
        <div class="fl-current-selections"></div>
      </div>
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
        <h1 class="page-header focus-outline">Trợ giúp từ Chuyên gia</h1>
        <div class="region region-content">
          <section id="block-system-main" class="block block-system clearfix" role="navigation">
            <div class="view view-tips-and-advice view-id-tips-and-advice view-display-id-page view-dom-id-2a4a07193976728d0cad6a7fc55238c1">
              <div class="attachment attachment-before">
                <div class="view view-tips-and-advice view-id-tips-and-advice view-display-id-attachment_1">
                  <div class="view-content">
                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
                      <div class="views-field views-field-block">
                        <span class="field-content">
                          <div class="col-md-8">
                            <section id="block-block-2" class="block block-block clearfix">
                              <div class="first-block" style="height: 520px;">
                                <div class="text-div">
                                  <h2>Cần giúp đỡ? Thảo luận với chuyên gia</h2>
                                  <p>Trò chuyện với chuyên gia.</p>
                                  <p>Liên hệ với chúng tôi tại 1900 555 561</p>
                                  <p>Làm viêc từ 8.00 - 17h30</p>
                                </div>
                              </div>
                            </section>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="view-content">
                <div class="views-row views-row-1 views-row-odd views-row-first">
                  <div class="views-field views-field-nothing">
                    <span class="field-content">
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="rowss" style="height: 520px;">
                          <a href="/vi/articles/cac-buoc-trang-tri-trong-mot-ngay-cua-chung-toi" tabindex="24"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/articles_listing/rcf/article/2016/Augchuan-bi-son-tuong.jpg?itok=UkT60tZR" width="424" height="438" alt="Giống như nướng bánh, chìa khóa mang lại kết quả trang trí thành công nằm ở việc lập kế hoạch và chuẩn bị cẩn thận." title="Chuan bi son tuong"></a> 
                          <h2 class="s-hdlne" style=""><a href="/vi/articles/cac-buoc-trang-tri-trong-mot-ngay-cua-chung-toi" tabindex="25">Các bước để trang trí trong một ngày của chúng tôi</a></h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div class="views-row views-row-2 views-row-even">
                  <div class="views-field views-field-nothing">
                    <span class="field-content">
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="rowss" style="height: 438px;">
                          <a href="/vi/articles/tao-bat-ngo-bien-doi-can-phong-ban-khong-thich" tabindex="26"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/articles_listing/rcf/article/2016/Augphoi-mau-xanh-da-troi-thanh-lich-cho-phong-ngu.jpg?itok=UbD76bD0" width="424" height="438" alt="Thêm một lớp sơn đơn giản là cách nhanh chóng, dễ dàng và hợp túi tiền để biến đổi không gian bạn không thích với kết quả tức thì." title="Phoi mau xanh da troi thanh lich cho phong ngu"></a> 
                          <h2 class="s-hdlne" style="height: 132px;"><a href="/vi/articles/tao-bat-ngo-bien-doi-can-phong-ban-khong-thich" tabindex="27">Tạo bất ngờ: biến đổi căn phòng bạn không thích</a></h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div class="views-row views-row-3 views-row-odd">
                  <div class="views-field views-field-nothing">
                    <span class="field-content">
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="rowss" style="height: 438px;">
                          <a href="/vi/articles/cach-thuc-chia-se-y-tuong-voi-nhan-vien-trang-tri" tabindex="28"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/articles_listing/rcf/article/2016/Augchon-mau-voi-ung-dung-visualizer.jpg?itok=JsHOK1dH" width="424" height="438" alt="Ứng dụng Visualizer của Dulux cho phép bạn tạo hình ảnh trực quan về căn phòng khi được sơn, nhờ đó bạn có thể dễ dàng chia sẻ ý tưởng của mình với nhân viên trang trí." title="Chon mau voi ung dung Visualizer "></a> 
                          <h2 class="s-hdlne" style="height: 132px;"><a href="/vi/articles/cach-thuc-chia-se-y-tuong-voi-nhan-vien-trang-tri" tabindex="29">Cách thức chia sẻ ý tưởng với nhà thiết kế nội thất</a></h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div class="views-row views-row-4 views-row-even">
                  <div class="views-field views-field-nothing">
                    <span class="field-content">
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="rowss" style="height: 438px;">
                          <a href="/vi/articles/ban-khong-con-phai-cho-doi-de-co-mot-phong-tam-xinh-dep" tabindex="30"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/articles_listing/rcf/article/2016/Augphong-tam-thu-gian-giong-nhu-phong-spa.jpg?itok=EwYvQUvX" width="424" height="438" alt="Sơn phòng tắm của bạn là một cách nhanh chóng và tiết kiệm để tạo nên diện mạo mới khiến cả gia đình đều yêu thích." title="Phong tam thu gian, giong nhu phong spa"></a> 
                          <h2 class="s-hdlne" style="height: 132px;"><a href="/vi/articles/ban-khong-con-phai-cho-doi-de-co-mot-phong-tam-xinh-dep" tabindex="31">Bạn không còn phải chờ đợi để có một phòng tắm xinh đẹp</a></h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div class="views-row views-row-5 views-row-odd">
                  <div class="views-field views-field-nothing">
                    <span class="field-content">
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="rowss" style="height: 438px;">
                          <a href="/vi/articles/l%C3%A0m-th%E1%BA%BF-n%C3%A0o-%C4%91%E1%BB%83-c%C3%B3-hi%E1%BB%87u-%E1%BB%A9ng-%C4%91%C6%A1n-s%E1%BA%AFc" tabindex="32"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/articles_listing/rcf/article/2016/Augphoi-mau-phong-cach.jpg?itok=gJdG7BaU" width="424" height="438" alt="Nếu bạn lo lắng màu đen và trắng trông sẽ thô cứng trong ngôi nhà mới của bạn, tại sao bạn không thử làm căn phòng nền nã hơn bằng cách sử dụng các cặp màu tương đồng, linh hoạt hơn?" title="Phoi mau phong cach"></a> 
                          <h2 class="s-hdlne" style="height: 132px;"><a href="/vi/articles/l%C3%A0m-th%E1%BA%BF-n%C3%A0o-%C4%91%E1%BB%83-c%C3%B3-hi%E1%BB%87u-%E1%BB%A9ng-%C4%91%C6%A1n-s%E1%BA%AFc" tabindex="33">Làm thế nào để có hiệu ứng đơn sắc</a></h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div class="views-row views-row-6 views-row-even">
                  <div class="views-field views-field-nothing">
                    <span class="field-content">
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="rowss" style="height: 438px;">
                          <a href="/vi/articles/lam-nao-de-khong-gian-toi-tro-nen-sang-hon" tabindex="34"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/articles_listing/rcf/article/2016/Augsu-dung-mau-dam-cho-phong-khach-mau-cam.jpg?itok=_lMmfwUO" width="424" height="438" alt="Nếu bạn muốn sự ấm áp, đừng ngại sử dụng màu nâu đỏ nhẹ hoặc màu cam – màu nắng có thể giúp không gian tối và u ám trở nên tươi sáng và ấm áp hơn." title="Su dung mau dam cho phong khach mau cam"></a> 
                          <h2 class="s-hdlne" style="height: 132px;"><a href="/vi/articles/lam-nao-de-khong-gian-toi-tro-nen-sang-hon" tabindex="35">Làm thế nào để làm bừng sáng không gian tối </a></h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div class="views-row views-row-7 views-row-odd views-row-last">
                  <div class="views-field views-field-nothing">
                    <span class="field-content">
                      <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="rowss" style="height: 438px;">
                          <a href="/vi/articles/nam-bi-quyet-su-dung-stencil-tuong-nhu-dan-chuyen-nghiep" tabindex="36"><img typeof="foaf:Image" src="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/styles/articles_listing/rcf/article/2016/Augnam-bi-quyet-su-dung-stencil-tuong.jpg?itok=MrgcjiOU" width="424" height="438" alt="Từ những đường viền trang trí cho đến các hình vẽ độc đáo, stencil sơn tường là cách tuyệt vời để khiến căn phòng thêm hấp dẫn." title="Nam bi quyet su dung stencil tuong"></a> 
                          <h2 class="s-hdlne" style="height: 132px;"><a href="/vi/articles/nam-bi-quyet-su-dung-stencil-tuong-nhu-dan-chuyen-nghiep" tabindex="37">Năm bí quyết sử dụng stencil tường như dân chuyên nghiệp </a></h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <ul class="pagination">
                  <li class="active first"><a href="#" tabindex="38">1</a></li>
                  <li><a title="Đi tới trang 2" href="/vi/meo-va-loi-khuyen-trang-tri-nha?page=1" tabindex="39">2</a></li>
                  <li><a title="Đi tới trang 3" href="/vi/meo-va-loi-khuyen-trang-tri-nha?page=2" tabindex="40">3</a></li>
                  <li class="pager-ellipsis disabled"><span>…</span></li>
                  <li class="pager-last"><a title="Đi tới trang 8" href="/vi/meo-va-loi-khuyen-trang-tri-nha?page=7" tabindex="41">8</a></li>
                  <li class="next last"><a href="/vi/meo-va-loi-khuyen-trang-tri-nha?page=1" tabindex="42">❭</a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</div>
@endsection


