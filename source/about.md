---
layout: about
date: 2014-10-06 14:46:04 +0800
comments: true
categories: []
---

### Changelog
* 2014-09-18: 开业
    - 选择了`octopress+github`搭建
    - 找了一个[whitespace主题](https://github.com/lucaslew/whitespace)，个人感觉比较简洁
* 2014-10-06：第一单买卖
  — 写下第一篇正式的博客，瞎扯的一些东西 
  - 开通了评论功能（其实就是在`disqus`上注册了一个shortname，然后填在`_config.yml`里面）
  - 添加了关于页面
  - 修改了时间显示格式，参考[https://github.com/octopress/date-format](https://github.com/octopress/date-format)
* 2014-12-31: 写下2014年年终总结
* 2015-01-28：买了一个域名[yilli.net](http://yilli.net)
  - 本来以为要备案什么的比较麻烦，发现其实在万网上买挺简单的
  - 用rake部署后发现yilli.net访问不了，因为rake deploy把仓库里面的CNAME给删除了，改了一下Rakefile解决了
```ruby
FileList["#{args.source}/**/.*"].exclude("**/.", "**/..", "**/.DS_Store", "**/._*").each do |file|
  cp_r file, file.gsub(/#{args.source}/, "#{args.dest}") unless File.directory?(file)
end
FileList["#{args.source}/CNAME"].each do |file|
  cp_r file, file.gsub(/#{args.source}/, "#{args.dest}") unless File.directory?(file)
end
```


### 友情链接
  - [markdown在线编辑器](http://mahua.jser.me/) 