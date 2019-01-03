@extends('frontend.layouts.frontend')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('cssPage')
<link type="text/css" rel="stylesheet" href="https://www.dulux.vn/sites/www.dulux.vn/files/advagg_css/css__Qwv3FSuQxvY_EUgLPr942BlSyUYD8-bp5eHg9WQw7ME__3mVeFPA7xLFSQ7I3cQ76Wbgy_S9D_WDIO7VAUsX3iY4__IY9epI-mj_jUyCKMTKnYycFqUe7k0NLtv13O2_s2fYI.css" media="all" />
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
        <h1 class="page-header focus-outline">Tìm cửa hàng</h1>
        <div class="region region-content">
          <section id="block-system-main" class="block block-system clearfix" role="navigation">
            <form action="/vi/storefinder" method="post" id="platform-store-locator-form" accept-charset="UTF-8">
              <div>
                <div class="indnc col-md-4 col-sm-6 col-xs-12">
                  <div style="">
                    <div class="ser-frm ">
                      <div class="form-type-textfield form-item-geocode-address form-item form-group append-outline-processed">
                        <input placeholder="Vị trí hiện tại của bạn" title="Vị trí hiện tại của bạn" class="form-control form-text" type="text" id="edit-geocode-address" name="geocode_address" value="" size="60" maxlength="128" tabindex="24"><span class="close-icn" id="searchclear"></span>
                      </div>
                      <button class=" btn btn-default form-submit" id="edit-geocode-submit" name="op" value="Tìm kiếm " type="submit" tabindex="25">Tìm kiếm </button>
                      <div class="form-type-checkboxes form-item-collection-availability form-item form-group append-outline-processed">
                        <label for="edit-collection-availability">
                          <h3 class="title-collection-availability">Lọc danh sách cửa hàng</h3>
                        </label>
                        <div id="edit-collection-availability" class="form-checkboxes">
                          <div class="form-type-checkbox form-item-collection-availability-READY-MIX form-item checkbox append-outline-processed">
                            <input type="checkbox" id="edit-collection-availability-ready-mix" name="collection_availability[READY_MIX]" value="READY_MIX" class="form-checkbox" tabindex="26">  <label class="option" for="edit-collection-availability-ready-mix">có sơn pha sẵn </label>
                            <span class="checkbox-outline"></span>
                          </div>
                          <div class="form-type-checkbox form-item-collection-availability-MIX-MACHINE form-item checkbox append-outline-processed">
                            <input type="checkbox" id="edit-collection-availability-mix-machine" name="collection_availability[MIX_MACHINE]" value="MIX_MACHINE" class="form-checkbox" tabindex="27">  <label class="option" for="edit-collection-availability-mix-machine">có máy pha sơn </label>
                            <span class="checkbox-outline"></span>
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="form_build_id" value="form-Nx8oZNH3y7DA-DkQCdkHmVHy5HD95x0dYUEeGw4bIUU" tabindex="28">
                      <input type="hidden" name="form_id" value="platform_store_locator_form" tabindex="29">
                    </div>
                    <div class="visible-xs color-travels pull-right col-xs-12 no-padding">
                      <ul class="find-store">
                        <li class="first find-store-grid active"><a href="#" data-type="grid" title="Grid View" class="travel-grid-view on travel-option">Grid View</a></li>
                        <li class="first find-store-list"><a href="#" data-type="list" title="List View" class="travel-list-view travel-option">List View</a></li>
                      </ul>
                    </div>
                    <div id="store-lists-results" style="display:none"></div>
                    <div class="store-lists-innr">
                      <div id="store-lists" class="scrollbox" style="display: none; width: 433px; padding-right: 10px; outline: none; overflow: hidden;" tabindex="0"></div>
                      <div style="position: absolute; z-index: 1; margin: 0px; padding: 0px; display: none; left: 413px; top: 0px;">
                        <div class="enscroll-track vertical-track" style="position: relative;">
                          <a href="" class="vertical-handle" style="position: absolute; z-index: 1;">
                            <div class="top"></div>
                            <div class="bottom"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="lm-odiv"><button class="ld-mre" style="display:none" tabindex="32">Hiển thị thêm </button></div>
                  <div id="store-lists-info" style="display:none"></div>
                </div>
                <!-- google map will be shown here -->
                <div class="tdcvover">
                  <div id="gmap_canvas" class="col-xs-12" style="position: relative; overflow: hidden;">
                    <div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
                      <div class="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;">
                        <div tabindex="0" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;), default; touch-action: pan-x pan-y;">
                          <div style="z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);">
                            <div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;">
                              <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                                <div style="position: absolute; z-index: 992; transform: matrix(1, 0, 0, 1, -255, -231);">
                                  <div style="position: absolute; left: 256px; top: 256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 256px; top: 0px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 512px; top: 0px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 512px; top: 256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 512px; top: 512px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 256px; top: 512px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 0px; top: 512px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: -256px; top: 512px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 256px; top: -256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 512px; top: -256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 768px; top: -256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 768px; top: 0px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 768px; top: 256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: 768px; top: 512px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: -512px; top: 512px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: -512px; top: 256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: -512px; top: 0px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                  <div style="position: absolute; left: -512px; top: -256px; width: 256px; height: 256px;">
                                    <div style="width: 256px; height: 256px;"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div>
                            <div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div>
                            <div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;"></div>
                            <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                              <div style="position: absolute; z-index: 992; transform: matrix(1, 0, 0, 1, -255, -231);">
                                <div style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i204!3i118!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=92634" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i205!3i118!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=95279" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i205!3i117!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=123662" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i204!3i117!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=121017" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 512px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i206!3i117!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=126307" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 768px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i207!3i118!4i256!2m3!1e0!2sm!3i448153254!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=95303" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i204!3i116!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=18329" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i203!3i118!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=89989" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 768px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i207!3i117!4i256!2m3!1e0!2sm!3i448153254!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=123686" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 512px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i206!3i118!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=97924" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 512px; top: 512px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i206!3i119!4i256!2m3!1e0!2sm!3i448156050!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=97323" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 768px; top: 512px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i207!3i119!4i256!2m3!1e0!2sm!3i448153254!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=66920" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 768px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i207!3i116!4i256!2m3!1e0!2sm!3i448153254!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=20998" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: -256px; top: 512px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i203!3i119!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=61606" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 256px; top: 512px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i205!3i119!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=66896" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i205!3i116!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=20974" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 512px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i206!3i116!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=23619" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: 0px; top: 512px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i204!3i119!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=64251" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i203!3i116!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=15684" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i203!3i117!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=118372" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: -512px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i202!3i118!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=87344" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: -512px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i202!3i116!4i256!2m3!1e0!2sm!3i448155918!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=61831" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: -512px; top: 512px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i202!3i119!4i256!2m3!1e0!2sm!3i448156062!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=58961" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                                <div style="position: absolute; left: -512px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;"><img draggable="false" alt="" role="presentation" src="https://maps.google.com/maps/vt?pb=!1m5!1m4!1i8!2i202!3i117!4i256!2m3!1e0!2sm!3i448156002!3m9!2svi!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&amp;key=AIzaSyBIEzHq20kp2on5yQ2y-QUChZD8W5ABrqY&amp;token=38030" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
                              </div>
                            </div>
                          </div>
                          <div class="gm-style-pbc" style="z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;">
                            <p class="gm-style-pbt"></p>
                          </div>
                          <div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;">
                            <div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);">
                              <div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div>
                              <div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div>
                              <div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"></div>
                              <div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div>
                            </div>
                          </div>
                        </div>
                        <iframe aria-hidden="true" frameborder="0" style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none;" src="about:blank"></iframe>
                        <div style="margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;">
                          <a target="_blank" rel="noopener" href="https://maps.google.com/maps?ll=14.0583,108.2772&amp;z=8&amp;t=m&amp;hl=vi&amp;gl=US&amp;mapclient=apiv3" title="Open this area in Google Maps (opens a new window)" style="position: static; overflow: visible; float: none; display: inline;">
                            <div style="width: 66px; height: 26px; cursor: pointer;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google4.png" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; user-select: none; border: 0px; padding: 0px; margin: 0px;"></div>
                          </a>
                        </div>
                        <div style="background-color: white; padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 300px; height: 180px; position: absolute; left: 495px; top: 216px;">
                          <div style="padding: 0px 0px 10px; font-size: 16px;">Dữ liệu Bản đồ</div>
                          <div style="font-size: 13px;">Dữ liệu bản đồ ©2019 Google</div>
                          <button draggable="false" title="Close" aria-label="Close" type="button" class="gm-ui-hover-effect" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: absolute; cursor: pointer; user-select: none; top: 0px; right: 0px; width: 37px; height: 37px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="pointer-events: none; display: block; width: 13px; height: 13px; margin: 12px;"></button>
                        </div>
                        <div class="gmnoprint" style="z-index: 1000001; position: absolute; right: 106px; bottom: 0px; width: 151px;">
                          <div draggable="false" class="gm-style-cc" style="user-select: none; height: 14px; line-height: 14px;">
                            <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                              <div style="width: 1px;"></div>
                              <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
                            </div>
                            <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a style="text-decoration: none; cursor: pointer; display: none;">Dữ liệu Bản đồ</a><span>Dữ liệu bản đồ ©2019 Google</span></div>
                          </div>
                        </div>
                        <div class="gmnoscreen" style="position: absolute; right: 0px; bottom: 0px;">
                          <div style="font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);">Dữ liệu bản đồ ©2019 Google</div>
                        </div>
                        <div class="gmnoprint gm-style-cc" draggable="false" style="z-index: 1000001; user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;">
                          <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                            <div style="width: 1px;"></div>
                            <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
                          </div>
                          <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a href="https://www.google.com/intl/vi_US/help/terms_maps.html" target="_blank" rel="noopener" style="text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);">Điều khoản sử dụng</a></div>
                        </div>
                        <button draggable="false" title="Chuyển đổi chế độ xem toàn màn hình" aria-label="Chuyển đổi chế độ xem toàn màn hình" type="button" class="gm-control-active gm-fullscreen-control" style="background: none rgb(255, 255, 255); border: 0px; margin: 10px; padding: 0px; position: absolute; cursor: pointer; user-select: none; border-radius: 2px; height: 40px; width: 40px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; overflow: hidden; top: 0px; right: 0px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"></button>
                        <div draggable="false" class="gm-style-cc" style="user-select: none; height: 14px; line-height: 14px; display: none; position: absolute; right: 0px; bottom: 0px;">
                          <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                            <div style="width: 1px;"></div>
                            <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
                          </div>
                          <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a target="_blank" rel="noopener" title="Báo cáo lỗi trong bản đồ đường hoặc hình ảnh đến Google" href="https://www.google.com/maps/@14.0583,108.2772,8z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3" style="font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); text-decoration: none; position: relative;">Báo cáo một lỗi bản đồ</a></div>
                        </div>
                        <div class="gmnoprint gm-bundled-control" draggable="false" controlwidth="40" controlheight="81" style="margin: 10px; user-select: none; position: absolute; top: 60px; right: 40px;">
                          <div class="gmnoprint" controlwidth="40" controlheight="81" style="position: absolute; left: 0px; top: 0px;">
                            <div draggable="false" style="user-select: none; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255); width: 40px; height: 81px;">
                              <button draggable="false" title="Phóng to" aria-label="Phóng to" type="button" class="gm-control-active" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; overflow: hidden; width: 40px; height: 40px; top: 0px; left: 0px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"></button>
                              <div style="position: relative; overflow: hidden; width: 30px; height: 1px; margin: 0px 5px; background-color: rgb(230, 230, 230); top: 0px;"></div>
                              <button draggable="false" title="Thu nhỏ" aria-label="Thu nhỏ" type="button" class="gm-control-active" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; overflow: hidden; width: 40px; height: 40px; top: 0px; left: 0px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"></button>
                            </div>
                          </div>
                        </div>
                        <div class="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth="0" controlheight="0" style="margin: 10px; user-select: none; position: absolute; display: none; bottom: 14px; right: 0px;">
                          <div class="gmnoprint" controlwidth="40" controlheight="40" style="display: none; position: absolute;">
                            <div style="width: 40px; height: 40px;"><button draggable="false" title="Rotate map 90 degrees" aria-label="Rotate map 90 degrees" type="button" class="gm-control-active" style="background: none rgb(255, 255, 255); display: none; border: 0px; margin: 0px 0px 32px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 40px; height: 40px; top: 0px; left: 0px; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 18px; width: 18px;"></button><button draggable="false" title="Tilt map" aria-label="Tilt map" type="button" class="gm-tilt gm-control-active" style="background: none rgb(255, 255, 255); display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 40px; height: 40px; top: 0px; left: 0px; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="width: 18px;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="width: 18px;"></button></div>
                          </div>
                        </div>
                        <div class="gmnoprint" style="margin: 10px; z-index: 0; position: absolute; cursor: pointer; left: 0px; top: 0px;">
                          <div class="gm-style-mtc" style="float: left; position: relative;">
                            <div role="button" tabindex="0" title="Hiển thị bản đồ phố" aria-label="Hiển thị bản đồ phố" aria-pressed="true" draggable="false" style="direction: ltr; overflow: hidden; text-align: center; height: 40px; display: table-cell; vertical-align: middle; position: relative; color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; user-select: none; font-size: 18px; background-color: rgb(255, 255, 255); padding: 0px 17px; border-bottom-left-radius: 2px; border-top-left-radius: 2px; background-clip: padding-box; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; min-width: 57px; font-weight: 500;">Bản đồ</div>
                            <div style="background-color: white; z-index: -1; padding: 2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; position: absolute; left: 0px; top: 40px; text-align: left; display: none;">
                              <div draggable="false" title="Hiển thị bản đồ phố với địa hình" style="color: black; font-family: Roboto, Arial, sans-serif; user-select: none; font-size: 18px; background-color: rgb(255, 255, 255); padding: 5px 8px 5px 5px; direction: ltr; text-align: left; white-space: nowrap;"><span role="checkbox" style="vertical-align: middle;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 1em; width: 1em; transform: translateY(0.15em); display: none;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 1em; width: 1em; transform: translateY(0.15em);"></span><label style="vertical-align: middle; cursor: pointer;">Địa hình</label></div>
                            </div>
                          </div>
                          <div class="gm-style-mtc" style="float: left; position: relative;">
                            <div role="button" tabindex="0" title="Hiển thị hình ảnh qua vệ tinh" aria-label="Hiển thị hình ảnh qua vệ tinh" aria-pressed="false" draggable="false" style="direction: ltr; overflow: hidden; text-align: center; height: 40px; display: table-cell; vertical-align: middle; position: relative; color: rgb(86, 86, 86); font-family: Roboto, Arial, sans-serif; user-select: none; font-size: 18px; background-color: rgb(255, 255, 255); padding: 0px 17px; border-bottom-right-radius: 2px; border-top-right-radius: 2px; background-clip: padding-box; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; min-width: 56px; border-left: 0px;">Vệ tinh</div>
                            <div style="background-color: white; z-index: -1; padding: 2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; position: absolute; right: 0px; top: 40px; text-align: left; display: none;">
                              <div draggable="false" title="Hiển thị hình ảnh có tên phố" style="color: black; font-family: Roboto, Arial, sans-serif; user-select: none; font-size: 18px; background-color: rgb(255, 255, 255); padding: 5px 8px 5px 5px; direction: ltr; text-align: left; white-space: nowrap;"><span role="checkbox" style="vertical-align: middle;"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 1em; width: 1em; transform: translateY(0.15em);"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style="height: 1em; width: 1em; transform: translateY(0.15em); display: none;"></span><label style="vertical-align: middle; cursor: pointer;">Nhãn</label></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  </div>
</div>
@endsection




