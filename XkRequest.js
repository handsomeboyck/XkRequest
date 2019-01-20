//js脚本代码
//抢课版本
var i = 1;
setInterval(function () {
  window.alert = function () { }; //屏蔽弹出框
  console.log("正在进行第" + i + "次选课");
 
  xkRquest('20182019221110300311303', ""); //单片机
  xkRquest('20182019221110300091302'); //嵌入式  
  
  i++;
}, 1200) 



//捡漏版本

var i = 1;//计数初值
var ck_btn1 = document.getElementById("dataView_length");

setInterval(function () {
  window.alert = function () { }; //屏蔽弹出框
  console.log("正在进行第" + i + "次选课");
  window.alert = function () { }; //屏蔽弹出框
  // xkRquest('20182019221110300841304', ""); //通信原理测试
  // setTimeout(function () {  //延时函数

  // }, 500)

  xkRquest('20182019221110300151301', ""); //多媒体
  setTimeout(function () {  //延时函数

  }, 500)
  xkRquest('20182019221110001021301', ""); //固态与照明
  setTimeout(function () {  //延时函数

  }, 500)
  xkRquest('20182019221110300251301', ""); //计算机网络--王文珍
  setTimeout(function () {  //延时函数

  }, 500)
  xkRquest('20182019221110300251302', ""); //计算机网络--李
  setTimeout(function () {  //延时函数

  }, 500)
  xkRquest('20182019221110300251303', ""); //计算机网络--代
  setTimeout(function () {  //延时函数

  }, 500)
  xkRquest('20182019221110300421301'); //软件工程
  setTimeout(function () {  //延时函数

  }, 500)
  xkRquest('20182019221110300791302'); //数字图像处理   
  setTimeout(function () {  //延时函数

  }, 500)
  
  if (i % 20 == 0) {
    ck_btn1.click(); //防掉线

  }

  i++;
}, 5000)