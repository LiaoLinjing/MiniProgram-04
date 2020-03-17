// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子']

  },

  btnclick(){
    console.log('按钮被点击')
  },

  handletouchstart() { console.log('touchstart')},
  handletouchmove() { console.log('touchmove')},
  handletouchend() { console.log('touchend')},
  handletap() { console.log('tap') },
  handlelongpress() { console.log('longpress')},

  eventbtnclick(event){
    console.log('事件对象')
    console.log(event)
  },

  handleitemclick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset;//要先在组件里面添加data-的属性，才能在currentarget里面显示数据
    const title =dataset.item;
    const index = dataset.index;
    console.log(title,index)
  },

})