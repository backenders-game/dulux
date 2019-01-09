<!DOCTYPE html>
<html lang="vi-VN" dir="ltr"
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Homepage | Dulux</title>
  @yield('cssPage')
</head>
<body class="html not-front not-logged-in no-sidebars page-node page-node- page-node-3 node-type-panopoly-landing-page panopoly-landing-page products-overview region-content i18n-vi fl-vi fl-san-pham fl-avndlx jquery-once-1-processed flSearchClick-processed eu-cookie-compliance-processed" style="">
<!-- 1.Header -->
  @include('frontend.includes.header')
  <!-- 1.End header -->
  <!-- 2.Main content -->
  @yield('content')
  <!-- 2.End Main Content -->
  @include('frontend.includes.footer')
  <!-- JS at footer start-->
  @include('frontend.includes.partials.fontendJS')
  @yield('jsPage')
  <!-- Core footer JS END-->
</body>
</html>