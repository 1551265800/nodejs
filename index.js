const fs = require("fs");
fs.readFile("./me.txt","utf8",(err,str)=>{
    //失败的结果
    if (err) { //判断文件是否读取成功
        return console.log(err);
    }
    //成功之后的结果
    console.log(str);
})