const fs = require('fs');
const url = require('url');
const request = require('request');
const mkdirp = require('mkdirp');
const async = require('async');

const resDir = 'resources'; // 资源存储目录
const asyncCount = 10; // 并发下载数量

// 获取资源列表
const content = fs.readFileSync('list.txt', 'utf8');
const list = content.split(/[\r\n]+/).filter(it => it.trim() !== '');
const listLen = list.length;
let count = 0; // 下载计数


/**
 * 统一错误信息显示
 *
 * @param {any} err
 * @param {any} src
 */
function showErr(err, src) {
  console.log(`资源: ${src} 下载失败!`);
  console.log('\x1b[31m错误原因:\x1b[0m', err.message);
}

/**
 * 所有完成后显示
 */
function showDone() {
  count += 1;
  if (count === listLen) {
    console.log('\x1b[32m资源下载完成!\x1b[0m');
  }
}

/**
 * 下载资源
 *
 * @param {String} src 资源地址
 * @param {Function} fn 回调函数
 */
function download(src, fn) {
  const uri = url.parse(src.trim());
  const host = uri.host;
  const path = uri.path.split('?')[0];
  const file = `${resDir}/${host}${path}`;
  const pathname = file.replace(/\/[^/]+$/, '');

  mkdirp(pathname, (err) => {
    showDone();
    if (err) {
      showErr(err, src);
      fn(); // 失败后使用成功回调，否则 async.eachLimit 会中断
    } else {
      request(src)
        .on('end', fn)
        .on('error', (er) => {
          showErr(er, src);
          fn(); // 失败后使用成功回调
        })
        .pipe(fs.createWriteStream(file));
    }
  });
}

// 控制线程下载，不少服务器控制并发数的，多了容易出错
async.eachLimit(list, asyncCount, download);
