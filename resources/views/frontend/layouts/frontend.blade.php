<!DOCTYPE html>
<html lang="vi-VN" dir="ltr"
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Homepage | Dulux</title>
  @yield('cssPage')
</head>
<body class="html not-front not-logged-in no-sidebars page-node page-node- page-node-2 node-type-panopoly-landing-page panopoly-landing-page region-content i18n-vi fl-vi front fl-avndlx" >
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
