---
layout: post
title: "linux-command-join"
date: 2017-04-07 20:14:13 +0800
published: true
categories: ["shell", "join"]
---

## join命令的使用

有时候，我们可能需要对多个文件进行类似`mysql`的`join`操作，`linux`的`join`命令可以帮助我们实现。

先看下`join`命令的帮助文档：

```
join [-i][-a<1或2>][-e<字符串>][-o<格式>][-t<字符>][-v<1或2>][-1<栏位>][-2<栏位>][--help][--version][文件1][文件2]

-a<1或2> 除了显示原来的输出内容之外，还显示指令文件中没有相同栏位的行。
-e<字符串> 若[文件1]与[文件2]中找不到指定的栏位，则在输出中填入选项中的字符串。
-i或--igore-case 比较栏位内容时，忽略大小写的差异。
-o<格式> 按照指定的格式来显示结果。
-t<字符> 使用栏位的分隔字符。
-v<1或2> 跟-a相同，但是只显示文件中没有相同栏位的行。
-1<栏位> 连接[文件1]指定的栏位。
-2<栏位> 连接[文件2]指定的栏位。
--help 显示帮助。
--version 显示版本信息。
```

需要注意的是，两个文件要关联的列，必须是排好序的，在`join`的帮忙文档里有这个提示。

> Important: FILE1 and FILE2 must be sorted on the join fields.  E.g., use ‘sort -k 1b,1’ if ‘join’ has no options.  Note, comparisons honor the rules specified by ‘LC_COLLATE’.  
If the input is not sorted and some lines cannot be joined, a warning message will be given.

比如有如下两文件

* `room_user.txt` number号对应`user_id`的信息

```
160719547073	878110
160724952431	86
16082441307553	5033669
16082641610921	3279165
16082741569921	5033669
16092049685147	216444
16092053864843	216444
16092053944715	216444
```

* `user_info.txt` 用户信息

```
86	37151288	1581124978	老齐	齐华
378140	41545878	1877133072	蒙智	智
402724	66743288	1710031217	岑sir	岑
216444	91080968	1001362269	牛牛老师	牛莉
449475	62210648	1021949151	王一老师	王一
575000	43516818	1012348103	希姐	王于
628525	51932118	1892710438	湛Sky	黄兰
1107410	79346968	1523486315	Nancy	龚霞
1753240	43787538	1681681549	郭老	郭强
```

现需要把两个文件关联起来，即`room_user.txt`中的第二列与`user_info.txt`中的第一列关联。

1. 先把两个文件按关联字段排序

```
sort -k 2 -n -o room_user.txt room_user.txt
sort -k 1 -n -o user_info.txt user_info.txt
```

2. 如果第一个文件中用户ID不在第二个文件中则过滤的话（即类似数据库的内联接）

```
join -1 2 -2 1 room_user.txt user_info.txt
```

3. 如果需要指定输出列

```
join -1 2 -2 1 -o 1.1 -o 1.2 -o 2.2 -o 2.3 -o 2.4 -o 2.5 room_user.txt user_info.txt
```

4. 如果保留文件1中所有列，关联不上的标记为NULL

```
join -a 1 -e NULL -1 2 -2 1 -o 1.1 -o 1.2 -o 2.2 -o 2.3 -o 2.4 -o 2.5 room_user.txt user_info.txt

-a <1|2> 是指定保留哪个文件中没有关联上的，类似`mysql`中的`left join`
-e <string> 是指定没有关联上的字段显示什么字符串
```

5. 如果要查找文件1中不存在的用户（即`user_id`在第二个文件中不存在）

```
join -v 1 -1 2 -2 1 -o 1.2 room_user.txt user_info.txt
```

用这个方法也可以来对比两个文件的差异

6. 指定分隔符号

```
join -t $'\t' -v 1 -1 2 -2 1 -o 1.2 room_user.txt user_info.txt
```

如要指定tab分隔符号，需要用`$'\t'`这种方式。关于转义符号，参考[这里](http://www.gnu.org/software/bash/manual/bashref.html#ANSI_002dC-Quoting)

