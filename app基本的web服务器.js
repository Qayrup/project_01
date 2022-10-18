// 1.导入http模块
// 2.创建web实例
// 3.为服务器绑定request事件, 监听客户端请求
// 4.启动服务器
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log('hello node')
    //定义一个字符串,包含中文的内容
    const str = `请求的url地址是${req.url},请求的method类型为${req.method}`;
    // 设置响应头,解决中文乱码问题
    res.setHeader('Content-Type', `text/html;charset=utf-8`);
    //res.end()将内容响应给客户端
    res.end(str);
})
server.listen(80, () => { console.log(module) })