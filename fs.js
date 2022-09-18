const fs = require("fs");
fs.readFile("./txt/me.txt", "utf8", (err, str) => {
    //失败的结果
    if (err) { //判断文件是否读取成功
        return console.log(err);
    }
    //成功之后的结果
    console.log("文件读取成功:" + str);
})
fs.writeFile("./txt/write.txt", "Hello Node.js", (err) => {
    if (err) {
        return console.log("文件写入失败"+err);
    }
    console.log("文件写入成功");
})
