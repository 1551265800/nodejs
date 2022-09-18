const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    //请求的url地址
    const url = req.url;
    //method类型
    const method = req.method;
    //设置请求头防止中文显示乱码
    res.setHeader("Content-Type","text/html;charset=utf-8")
    //res.end() 向客户端发送内容并结束响应
    res.end(`此次请求的url地址是:${url}请求类型是:${method}`); 
})

server.listen(8080, () => {
    console.log("服务器已运行 http://127.0.0.1:8080");
})
