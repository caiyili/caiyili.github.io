---
layout: post
title: "让less&cat具有语法高亮功能"
date: 2015-02-02 13:20:18 +0800
comments: true
categories: [shell,less,cat]
---
### 让cat支持语法高亮

```sh
# Colored up cat!
# You must install Pygments first 
alias c='pygmentize -O style=monokai -f console256 -g'
```
其实是用pygmentize代替cat。这样查看一个文件`c index.php`就是带语法高亮的了。
<!-- more -->
首先要安装pygments，实际上下载一个就可以。

```sh
wget https://pypi.python.org/packages/source/P/Pygments/Pygments-2.0.2.tar.gz#md5=238587a1370d62405edabd0794b3ec4a
```
解压后就有一个`pygmentize`的脚本，就可以直接使用了。  
高亮后的结果可以用more翻页。

### 让less支持语法高亮
如果让`less`命令支持语法高亮，可以参考这篇文章[点击这里](http://blog.kuaiwan.com/less-with-syntax-highlight-and-line-number.html)，
这里面是结合`source-highlight`使`less`具有语法高亮功能。  
不过我尝试安装`source-highlight`失败了，因为要先安装`boost`，比较麻烦。。。  
看它的实现原理是，`less`支持一个叫做`input preprocessor`的东西，在`less`处理前对文件进行预处理，既然这样，那应该也可以用
`pygmentize`进行预处理吧，于是我改成了`pygmentize`。试了一下，果然可以，比安装`source-highlight`简单多了。  

```sh
# less hightlight
#export LESSOPEN="| /usr/share/source-highlight/src-hilite-lesspipe.sh %s"
export LESSOPEN="| pygmentize %s"
export LESS=" -R -N "
```

另外用`less`打开一个文件，按`v`可以直接进入以`vim`编辑的模式。
