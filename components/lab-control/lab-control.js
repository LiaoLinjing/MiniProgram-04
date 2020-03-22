// components/lab-control/lab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    tts:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

    lab_currentindex:0,

  },

  /**
   * 组件的方法列表
   */
  methods: {

    handlelabitemclick(event){

      const index = event.currentTarget.dataset.index;
      // console.log(event)
      //1. 取出index
      console.log(index);

      // 2.修改index
      this.setData({
        lab_currentindex:index
        
      })

      // 3.通知页面，内部的点击事件
      this.triggerEvent('labitemclick',{index,labtitle:this.properties.tts[index]},{})
    }

  }
})
