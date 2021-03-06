# down-cli

> Command-line tool for downloading resources by directory

[中文说明](/README_CN.md)

## Installation

Prerequisites: Node.js (>=4.x, 6.x preferred), npm version 3+

```
$ npm i -g down-cli
```


## Usage

```
$ down list.txt
```

The `list.txt` file format is as follows:

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

> Blank lines will be ignored.

**Download the completed file tree.**

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
