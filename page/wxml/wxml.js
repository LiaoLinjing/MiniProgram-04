// page/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好，小程序',
    firstname:'liao',
    lastname:'linjing',
    age:20,
    nowtime:new Date().toLocaleString(),
    ispressed:false,
    isshow:true,
    score:88,
    movies:['盗墓笔记','大话西游','星际穿越'],
    num:[
      [1,2,3],
      [4,5,6],
      [7,8,9],
    ]

  },

  handlebtn(){
    console.log('点击按钮'),
    this.setData({
      ispressed:!this.data.ispressed
    })

  },

  handle_btn_show(){
    this.setData({
      isshow: !this.data.isshow
    })
  },

  onLoad(){

    setInterval(()=>{//定时器，1s执行一i

      this.setData({
        nowtime:new Date().toLocaleString()
      })

    },1000)

  },

 
})