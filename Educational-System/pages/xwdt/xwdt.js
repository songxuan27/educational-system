// pages/xwdt/xwdt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.initData();
    this.setData({
      array: array
    })

  },
  initData: function () {
    var array = [];
    var object1 = new Object();
    object1.img = "../images/list1.png";
    object1.title = "2021课程项目";
    object1.type = "教改项目";
    object1.liulan = "1234浏览";
    object1.pinglun = "5评论";
    array[0] = object1;
  
    var object2 = new Object();
    object2.img = "../images/list2.png";
    object2.title = "2021课程工作顺利召开";
    object2.type = "课程建设";
    object2.liulan = "4721浏览";
    object2.pinglun = "11评论";
    array[1] = object2;
  
    var object3 = new Object();
    object3.img = "../images/list3.png";
    object3.title = "教务处成功举办思政教学沙龙";
    object3.type = "教学沙龙";
    object3.liulan = "8412浏览";
    object3.pinglun = "10评论";
    array[2] = object3;
    return array;
  }
})