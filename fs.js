const fs = require('fs');
var path = './测试/fs';
fs.writeFile(path + '/fs.txt', '我的老家,在东北的那个屯', 'utf-8', function (err) {
    console.log(err);
    console.log('---1---');
})
//模拟处理成绩,先写入成绩
fs.writeFile(path + '/待处理成绩.txt', '小红=78,小绿=24,小黑=12,小蓝=99', 'utf-8', function (err) {
    console.log('---3---');
    console.log(err);
})
fs.readFile(path + '/fs.txt', 'utf-8', function (err, data) {
    console.log(err);
    console.log('---2---');
    console.log(data);
})



// 读取待处理成绩
fs.readFile(path + '/待处理成绩.txt', 'utf-8', function (err, data) {
    console.log('---4---');
    if (err)
        return console.log('读取文件失败' + err.message);
    console.log('--文件读取成功---');
    let arrGrades = data.split(',').map((v) => { return v.replace('=', ':') }).join('\r\n')
    fs.writeFile(path + '/已处理成绩.txt', arrGrades, 'utf-8', (err) => {
        if (err) {
            return console.log('写入程序出错' + err.message)
        }
        console.log('成绩处理完成')
        console.log(__dirname)
    })
})

let dateStr = require('./timeshift_jm')
var aaa = new Object();
var a = 'a';
var b = 1;
aaa = { 'c': a, 'd': b }

console.log(aaa)
console.log(dateStr.timeStringFormat(new Date, 'yy-MM-DD hh:mm:ss'))