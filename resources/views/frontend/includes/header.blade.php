<section class="header-wrapper ">
  <!-- Brand bar start :: brand-bar.tpl-->
  <section class="brand-bar-section js-header-menu-toggle-class">
    <div class="main-container container">
      <div class="row">
        <div class="col-xs-12">
          <div class="brand-bar">
            <div class="brand-bar__logo">
              <a href="https://www.akzonobel.com" class="link-icon link-icon-akzo">
                <svg class="icon icon-akzo">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- //Brand bar end-->
  <!-- Sidebar start :: slide-navbar.tpl-->
  <section class="navigation-bar-section">
    <div class="fl-content-width container">
      <div class="row">
        <div class="col-xs-12">
          <header class="navigation-bar">
            <div class="hamburger-menu">
              <div class="nav-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="brand-logo">
              <a class="brand-logo__link" href="{{route('frontend.home')}}" title="Trở về trang chủ" tabindex="2">
              <img class="brand-logo__img focus-outline" src="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_rem/images/logos/avndlx/logo_2x.png" alt="">
              </a>
            </div>
            <nav class="main-nav">
              <ul class="menu nav navbar-nav">
                <li class="first leaf header__main-nav-item"><a href="{{route('frontend.mau_sac_bang_mau')}}" title="Tìm màu sắc" class="m-color header__main-nav-link clear-filter" tabindex="3">Tìm màu sắc</a></li>
                <li class="leaf header__main-nav-item"><a href="{{route('frontend.san_pham')}}" title="Chọn sản phẩm" class="m-products header__main-nav-link clear-filter" tabindex="4">Chọn sản phẩm</a></li>
                <li class="leaf header__main-nav-item"><a href="{{route('frontend.y_tuong')}}" title="Ý tưởng" class="m-inspiration header__main-nav-link clear-filter" tabindex="5">Ý tưởng</a></li>
                <li class="leaf header__main-nav-item"><a href="{{route('frontend.loi_khuyen')}}" title="Trợ giúp từ Chuyên gia" class="m-tips header__main-nav-link clear-filter" tabindex="6">Trợ giúp từ chuyên gia</a></li>
                <li class="leaf header__main-nav-item hide-in-sitemap hide-in-sitemap m-store-item"><a href="{{route('frontend.storefinder')}}" title="Find a store" class="m-store header__main-nav-link clear-filter" tabindex="7">Tìm một cửa hàng</a></li>
                <li class="last leaf  hide-in-sitemap hide-in-sitemap m-scrapbook-item header__main-nav-item"><a href="/vi/so-tay" title="Ghi chú của Tôi" class="m-scrapbook visible-xs-block hide-in-sitemap hide-in-sitemap header__main-nav-link clear-filter">Ghi chú của tôi</a></li>
              </ul>
            </nav>
            <nav class="secondary-nav">
              <ul class="secondary-nav__nav">
                <li>
                  <svg class="icon icon-search icon--medium js-navigation-search-open ">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                  </svg>
                </li>
                <li>
                  <a href="/vi/danh-sach-mua-hang" data-counter="" class="bubble-counter" title="shopping-list icon">
                    <svg class="icon icon-shoppinglist ">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                    </svg>
                  </a>
                </li>
                <li class="my-account__nav type-small js-header-menu-my-account">
                  <svg class="icon icon-user-login loggedIn-content hide">
                    <use xlink:href=""></use>
                  </svg>
                  <span class="my-account__span loggedIn-content hide">Tài khoản của Tôi</span>
                  <svg class="icon icon-user loggedOut-content">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                  </svg>
                  <span class="my-account__span loggedOut-content">Đăng nhập</span>
                  <!-- My account nav logged in content start -->
                  <div class="account-section loggedIn-content hide">
                    <svg class="icon icon-close ">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                    </svg>
                    <div class="account-section__details account-section__loggedin">
                      <a href="/vi/my-account">
                        <svg class="icon icon-user">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                        </svg>
                        <h2 class="h5">Tài khoản của Tôi</h2>
                        <span class="type-small user-mail"></span>
                      </a>
                    </div>
                    <ul class="account-section__options">
                      <li>
                        <a href="/vi/so-tay" title="Ghi chú của tôi">
                          <svg class="icon icon-favourite-empty ">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                          </svg>
                          Ghi chú của tôi
                        </a>
                      </li>
                      <li>
                        <a href="/user/sm-logout">
                          <svg class="icon icon-log-out">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                          </svg>
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- My account nav logged out content -->
                  <div class="account-section loggedOut-content">
                    <svg class="icon icon-close ">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                    </svg>
                    <div class="account-section__details">
                      <a href="/user/login" class="account-section__login">
                      <button id="" class="bttn account full-width">Login to My Account</button>
                      </a>
                      <span class="type-small">No account? <a href="/user/register" class="inline-text-link primary">Đăng ký ở đây</a></span>
                    </div>
                    <ul class="account-section__options">
                      <li>
                        <a href="/vi/so-tay" title="Ghi chú của tôi">
                          <svg class="icon icon-favourite-empty ">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                          </svg>
                          Ghi chú của tôi
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
            <div class="search-bar">
              <div class="search-bar__start animation-loaded">
                <svg class="icon icon-search icon--medium icon-search ">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                </svg>
                <form  id="flsearch_header" method="" class="search-bar__form">
                  <input type="search" id="nav-search" class="fl-search-text typeahead" placeholder="Search for…">
                  <button type="submit" class="search-bar__submit" style="display:none;" tabindex="17">sumbit</button>
                </form>
              </div>
              <div class="search-bar__end">
                <button id="button-typeahead-search" class="bttn primary hidden-md-down">Tìm kiếm </button>                    
                <a href="" class="inline-text-link clear-search js-header-clear-search">Clear</a>
                <span class="vertical-divider"></span>
                <svg class="icon icon-close icon--medium js-navigation-search-close ">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=""></use>
                </svg>
              </div>
              <div class="search-bar_results">
                <!-- Quick Links -->
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  </section>
  <!-- //Sidebar end-->
</section>
<div class="zone-filter">
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
          <section id="block-flourish-search-solr-flourish-search-overlay" class="block block-flourish-search-solr clearfix">
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
