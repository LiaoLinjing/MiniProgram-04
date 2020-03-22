// oomponents/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cn:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    incn(num){
      this.setData({
        cn:this.data.cn+num
      })
    }

  }
})
