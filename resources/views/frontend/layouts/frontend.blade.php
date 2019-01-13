<!DOCTYPE html>
<html lang="vi-VN" dir="ltr"
  xmlns:fb="http://www.facebook.com/2008/fbml"
  xmlns:og="http://ogp.me/ns#"
  xmlns:article="http://ogp.me/ns/article#"
  xmlns:book="http://ogp.me/ns/book#"
  xmlns:profile="http://ogp.me/ns/profile#"
  xmlns:video="http://ogp.me/ns/video#"
  xmlns:product="http://ogp.me/ns/product#"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:sioc="http://rdfs.org/sioc/ns#"
  xmlns:sioct="http://rdfs.org/sioc/types#"
  xmlns:skos="http://www.w3.org/2004/02/skos/core#"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="smartbanner:button-url-apple" content="https://itunes.apple.com/vn/app/dulux-visualizer-vn/id862447000?mt=8" />
    <meta name="smartbanner:button-url-google" content="https://play.google.com/store/apps/details?id=com.akzonobel.cooper.vn.dulux" />
    <meta name="smartbanner:icon-apple" content="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/duluxvalentine-visualizer.jpg" />
    <link rel="shortcut icon" href="https://www.dulux.vn/sites/www.dulux.vn/files/logo_0.png" type="image/png" />
    <meta name="smartbanner:title" content="Dulux Visualizer" />
    <script type="text/javascript">dataLayer = [{"pageInstanceID":"live","siteCode":"avndlx","trafficClassificationID":"127.0.0.1","page":{"pageInfo":{"pageID":"2","pageName":"Homepage","destinationURL":"https:\/\/www.dulux.vn\/vi","language":"vi-VN","geoRegion":"VN"},"category":{"pageType":"Homepage","primaryCategory":"Home"},"attributes":{"functionalityVersion":"1"}}}];</script>
    <meta name="smartbanner:icon-google" content="https://383195fa362279d182f5-837f1281aae466a1e3ac27b4004c7f6b.ssl.cf3.rackcdn.com/duluxvalentine-visualizer.jpg" />
    <meta name="smartbanner:button" content="Tải Về" />
    <meta name="smartbanner:custom-design-modifier" content="ios" />
    <link rel="alternate" href="https://www.dulux.vn/vi" hreflang="vi-VN" />
    <link rel="shortcut icon" href="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_rem/images/logos/avndlx/favicon.ico" type="image/png" />
    <link rel="icon" type="image/png" sizes="32x32" href="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_rem/images/logos/avndlx/favicon.ico" />
    <meta name="smartbanner:enabled-platforms" content="android,ios" />
    <meta name="smartbanner:hide-ttl" content="2000" />
    <link name="msapplication-TileImage" content="https://www.dulux.vn/profiles/flourish/themes/custom/flourish_rem/images/logos/avndlx/favicon.ico" />
    <meta name="smartbanner:author" content="Chọn màu sắc ưa thích và mô phỏng trên tường nhà bạn ngay!" />
    <meta name="keywords" content="dulux paint, home painting solution, dulux paint colour, painting solution, decorating painting ideas, wall painting, wood &amp; metal painting" />
    <link rel="canonical" href="www.dulux.vn/vi" />
    <meta http-equiv="content-language" content="vi" />
    <meta property="og:title" content="Homepage" />
    <meta property="og:updated_time" content="2019-01-08T02:52:13+00:00" />
    <meta name="twitter:title" content="Homepage" />
    <meta property="article:published_time" content="2016-07-14T09:23:31+00:00" />
    <meta property="article:modified_time" content="2019-01-08T02:52:13+00:00" />
    <meta itemprop="name" content="Homepage" />
    <title>Homepage | Dulux</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    @yield('cssPage')
  </head>
  <body class="html not-front not-logged-in no-sidebars page-node page-node- page-node-2 node-type-panopoly-landing-page panopoly-landing-page region-content i18n-vi fl-vi front fl-avndlx page-node-3 node-type-panopoly-landing-page panopoly-landing-page products-overview region-content i18n-vi fl-vi fl-san-pham fl-avndlx" >
    
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-K6DGC7" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script type="text/javascript">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0];var j=d.createElement(s);var dl=l!='dataLayer'?'&l='+l:'';j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;j.type='text/javascript';j.async=true;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K6DGC7');</script>
    <!-- 1.header -->
    @include('frontend.includes.header')
    <!-- 1.End header -->
    @yield('content')
    @include('frontend.includes.footer')
      @include('frontend.includes.js.homeJS')
    @yield('jsPage')
  </body>
</html>