//console.log(__dirname);

const fs = require("fs");
var message = "__dirname解决路径拼接问题"
fs.writeFile(__dirname + "/txt/__dirname.txt", message, (err) => {
    if (err) {
        return console.log("写入文件失败" + err.message);
    }
    console.log("写入文件成功") ;
})