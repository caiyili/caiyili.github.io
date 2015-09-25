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
<div class="step" data-x="0" data-y="0">
    slide1
</div>
<div class="step" data-x="1500" data-y="0">
This is slide 2
</div>
<div class="step" data-x="2500" data-y="-400">
This is slide 3
</div>
<div class="step" data-x="3500" data-y="-800" data-scale="0.5">
This is slide 4
</div>
<div class="step" data-x="10000" data-y="-800" data-rotate="90">
This is slide 5
</div>
<div class="step" data-x="-1200" data-y="0" 
data-rotate-x="30" data-rotate-y="-30" data-rotate-z="90" data-scale="4">
　　This is slide 6
</div>
<div id="overview" class="step" data-x="-200" data-y="-500" data-scale="3"></div>
</div>
<script src="/javascripts/libs/impress.js"></script>
<script>impress().init();</script>
