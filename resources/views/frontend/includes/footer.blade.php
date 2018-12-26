<!-- 3.1.Footer1 =>bản tin của chúng tôi-->
@include('frontend.includes.footer.receive_newsletter')
<!-- 3.1.End Footer1 -->
<!-- 3.2.Footer2==>logo,link menu và footer -->
<div class="onedomain-component">
  <footer class="v2-footer">
    <div class="v2-footer-container">
      <div class="container">
        <div class="region region-footer-bottom">
          <section id="block-flourish-listing-solr-footer-payment-visualizer-social" class="block block-flourish-listing-solr clearfix" id="block-flourish-listing-solr-footer-payment-visualizer-social" class="block--flourish-listing-solr-footer-payment-visualizer-social">
            @include('frontend.includes.footer.app_and_social')
            @include('frontend.includes.footer.list_menu')
            <!--    brands section start     -->
            @include('frontend.includes.footer.footer_bottom')
            <!--    copyright section end     -->
          </section>
        </div>
      </div>
    </div>
  </footer>
</div>
<!-- 3.2.EndFooter2 -->
<div class="page-overlay--typeahead"></div>