---
layout: empty
title: "test-impress.js"
date: 2015-02-01 14:46:04 +0800
comments: false
meta: false
published: true
nostyle: true
categories: []
---

<!-- more -->
<link href="/stylesheets/impress-demo.css" rel="stylesheet" />
<div class="impress-not-supported">
</div>
<div id="impress">

<div class="step slide" data-x="0" data-y="0" data-scale="1">
<h4> <strong>输入完整路径 </strong></h4>
<p>
 <ul>
  <li>vim /path/to/file; vim src/www.xxx/app/service/page/a/b.php</li> <br />
  <li>vim /path/to/file +n; 打开指定文件，并跳转到第n行</li><br />
  <li>vim /path/to/file +/regexp; 打开指定文件，并跳转到搜索 regexp行</li><br />
 </ul>
 </p>
</div>

<div class="step slide" data-x="1000" data-y="0">
<h4> vim 内部的find命令</h4>
<ul>
<li> vim :find/:sfind/:tabfind $filename; 根据文件名称查找，会查找$path(:h path)目录下的。 </li>
<li> `:set path+=**`, 设备path包含的目录。通配符`*`配置所有文件名，`**`配置所有递归目录。具体的可以(:h wildcard) </li>
<li> 如果查找到多个，可以使用 [n]find 定位到第几个——无法直接把所有查到的结果列出来，但可以使用模糊匹配选择 </li>
<li> 命令行模糊补全 </li>
    - <c-d> 列出候选列表,<tab>选择列表
    - set wildmenu|nowildmenu; 是否开启模糊查找
    - set wildmode=full|longest|list; 候选列表的模式
    - set wildchar=<tab> ;开始补全的起始键
<li> 与内部的gf(:h gf)命令一致 </li>
    - ~/.vimrc:4
    - ~/.bash_profile 在新窗口中打开可以 <ctrl-w>gf
</ul>
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
