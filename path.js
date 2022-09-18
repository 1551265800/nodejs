const path = require("path");

var path1 = path.join(__dirname,"./txt/me.txt");
console.log(path1);//E:\WEB前端\nodejs\txt\me.txt  完整路径
console.log(path.basename(path1));//me.txt  文件名字
console.log(path.extname(path1));//.txt 文件扩展名