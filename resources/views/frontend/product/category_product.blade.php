@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('cssPage')
@include('frontend.includes.css.categoryProductCss')
<style type="text/css">
    .main-container {
        max-width: 1360px !important;
        padding-left: 1em !important;
        padding-right: 1em !important;
    }
</style>
@endsection
@section('content')
<div id="zone-content" class="zone-content product_dulux_responsive">
  <div class="main-container container">
    <!-- /#page-header -->
    <div class="row">
      <section class="col-sm-12">
        <!--   -->
        <a id="main-content"></a>
        <h1 class="page-header">Nội thất</h1>
        <div class="region region-content">
          <section id="block-system-main" class="block block-system clearfix" role="navigation">
            <div data-quickedit-entity-id="node/3">
              <div class="panel-display boxton clearfix radix-boxton">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 radix-layouts-content panel-panel">
                      <div class="panel-panel-inner">
                        <div class="panel-pane pane-block pane-bean-product-overview-top pane-bean">
                          <div class="pane-content">
                            <div class="entity entity-bean bean-bean-block clearfix" about="/block/product-overview-top" typeof="">
                              <div class="content">
                                <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even">
                                      <div class="container-cstm">
                                        <div class="prdct-overview">
                                          <div class="row no-margin no-padding">
                                            <div class="col-md-12 col-sm-12 col-xs-12 no-padding no-margin">
                                              <div class="row-2">
                                                <img alt="Product Overview" class="img-responsive center-block" src="https://26142aa8525275a5e77e-a5f2420f98275e911de8525ef724fa69.ssl.cf3.rackcdn.com/prod-overview-product-desktop_th.jpg">
                                                <div class="text-holder">
                                                  <h1><span style="font-size:36px;">SÁNG TẠO KHÔNG GIAN SỐNG&nbsp;</span></h1>
                                                  <h1><span style="font-size:36px;">ĐẬM PHONG CÁCH RIÊNG&nbsp;</span></h1>
                                                  <p class="fs16">Hãy sáng tạo không gian sống đẳng cấp với sự kết hợp tinh tế</p>
                                                  <p class="fs16">và sáng tạo vô tận từ những gam màu sắc nét cùng hiệu ứng đặc biệt từ Ambiance&nbsp;</p>
                                                  <a href="https://www.dulux.vn/vi/articles/ambiance" tabindex="25">Xem thêm</a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
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
                        <div class="panel-pane pane-block pane-bean-product-overview-middle pane-bean">
                          <div class="pane-content">
                            <div class="entity entity-bean bean-bean-block clearfix" about="/block/product-overview-middle" typeof="">
                              <div class="content">
                                <div class="field field-name-field-bean-body-text field-type-text-with-summary field-label-hidden">
                                  <div class="field-items">
                                    <div class="field-item even">
                                      <div class="container-cstm">
                                        <div class="prdct-overview">
                                          <div class="row no-margin no-padding">
                                            <div class="row-3">
                                            @isset($categories)
                                            @foreach($categories as $category)
                                              <div class="cstm-col-md-4 flourishProducts-processed" style="height: 239px;">
                                                <div class="img-holder "><a href="{{route('frontend.danh_sach_san_pham', ['id' => $category->id])}}" title="{{$category->name}}" tabindex="26">
                                                    <img alt="" class="img-responsive center-block" src="{{asset('/'). $category->img_path}}"></a></div>
                                                <div class="text-holder">
                                                  <p class="text-center fs24">
                                                    <a href="{{route('frontend.danh_sach_san_pham', ['id' => $category->id])}}" title="{{$category->name}}" tabindex="27">{{$category->name}}
                                                    </a>
                                                  </p>
                                                </div>
                                              </div>
                                            @endforeach
                                            @endisset
                                            </div>
                                          </div>
                                          <div class="row-4">
                                            <div class="col-sm-12 no-padding no-margin">
                                              <hr>
                                            </div>
                                          </div>
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
