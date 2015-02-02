---
layout: post
title: "cat-with-color"
date: 2015-02-02 13:20:18 +0800
comments: true
categories: [shell,less,cat]
---
让cat出来的结果有语法高亮功能。
```sh
# Colored up cat!
# You must install Pygments first 
alias c='pygmentize -O style=monokai -f console256 -g'
```
其实不是用pygmentize代替cat。这样查看一个文件`c index.php`就是带语法高亮的了。

首先要安装pygments，实际上下载一个就可以。

```sh
wget https://pypi.python.org/packages/source/P/Pygments/Pygments-2.0.2.tar.gz#md5=238587a1370d62405edabd0794b3ec4a
```
解压后就有一个`pygmentize`的脚本，就可以直接使用了

高亮后的结果可以用more页，我这环境用less好像有点问题，以后再看吧。

另外让less出来的结果显示文件行号，可以在.bashrc中添加如下：
```sh
export LESS=" -R -N "
```
还有一堆其它的系统变量可以控制`less`显示，比如结合`source-highlight`让`less`支持语法高亮。
(以后再研究。。。)

另外用`less`打开一个文件，按`v`可以直接进入以`vim`编辑的模式。
