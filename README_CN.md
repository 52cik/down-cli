# down-cli

> 按目录下载资源的命令行工具


## 安装

环境依赖: Node.js (>=4.x, 6.x 优先), npm 3+ 版本

```
$ npm i -g down-cli
```


## 使用

```
$ down list.txt
```

列表文件 `list.txt` 内容格式如下:

```
https://c1.mifile.cn/f/i/15/stat/js/xmst.js
https://s01.mifile.cn/js/base.min.js?v2017a21
https://s01.mifile.cn/js/home.min.js?97bee1
https://c1.mifile.cn/f/i/15/stat/js/xmsg_ti.js

https://c1.mifile.cn/f/i/17/site/truste.png
https://s01.mifile.cn/i/v-logo-2.png
https://s01.mifile.cn/i/v-logo-1.png
https://s01.mifile.cn/i/v-logo-3.png
https://c1.mifile.cn/f/i/17/site/site-weixin.png
https://c1.mifile.cn/f/i/2014/cn/loading.gif
```

> 空行会被忽略。

**下载完成后的目录格式如下。**

```
res
├── c1.mifile.cn
│   └── f
│       └── i
│           ├── 15
│           │   └── stat
│           │       └── js
│           │           ├── xmsg_ti.js
│           │           └── xmst.js
│           ├── 17
│           │   └── site
│           │       ├── site-weixin.png
│           │       └── truste.png
│           └── 2014
│               └── cn
│                   └── loading.gif
└── s01.mifile.cn
    ├── i
    │   ├── v-logo-1.png
    │   ├── v-logo-2.png
    │   └── v-logo-3.png
    └── js
        ├── base.min.js
        └── home.min.js
```
