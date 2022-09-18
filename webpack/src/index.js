//使用ES6语法导入jquery
import $ from "jquery" 
//定义jquery的入口函数
$(function () {
    
    //实现功能
    $("li:odd").css("background-color","red")
    $("li:even").css("background-color","pink")
})