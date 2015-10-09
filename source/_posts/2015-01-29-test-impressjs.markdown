---
layout: empty
title: "test-impress.js"
date: 2015-02-01 14:46:04 +0800
comments: false
meta: false
published: true
categories: []
---
<!-- more -->
<link href="/stylesheets/impress-demo.css" rel="stylesheet" />
<div class="impress-not-supported">
</div>
<div id="impress">

<div class="step slide" data-x="0" data-y="0" data-scale="1">
<h4> vim 输入完整路径 </h4>
 <ul>
  <li>vim /path/to/file; vim src/www.xxx/app/service/page/a/b.php</li>
  <li>vim /path/to/file +n; 打开指定文件，并跳转到第n行</li>
  <li>vim /path/to/file +/regexp; 打开指定文件，并跳转到搜索 regexp行</li>
 </ul>
</div>

<div class="step slide" data-x="1000" data-y="0">
  This is slide 2
</div>

<div class="step slide" data-x="2000" data-y="0">
This is slide 3
</div>

<div class="step slide" data-x="3000" data-y="0" data-scale="0.5">
This is slide 4
</div>

<div class="step slide" data-x="4000" data-y="0" data-rotate="90">
This is slide 5
</div>

<div class="step slide" data-x="5000" data-y="0" data-rotate-x="30" data-rotate-y="-30" data-rotate-z="90" data-scale="4">
　　This is slide 6
</div>

<div id="overview" class="step slide" data-x="0" data-y="0" data-scale="3">

</div>

</div>

<script src="/javascripts/libs/impress.js"></script>
<script>impress().init();</script>
