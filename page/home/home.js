// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleclick(){
    // 1.获取组件对象
    const my_sel = this.selectComponent('.my-sel-class')
    console.log(my_sel)

  // 2.修改组件内的数据
    // my_sel.setData({
    //   cn:my_sel.data.cn+1
    // })

    // 3.通过统一的方法去修改数据
    my_sel.incn(1)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})