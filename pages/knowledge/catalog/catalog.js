// pages/knowledge/catalog/catalog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 在页面中调用云函数
    wx.cloud.init({
      env: 'gpt-0grastut6153c6bb' // 替换为您自己的云环境 ID
    });
  
    wx.cloud.callFunction({
      name: 'first', // 云函数的名称
      data: {
        name:"first"
        },
      success: res => {
        const result = res.result.result1;
        this.setData({
          show : result
        })
        // 处理云函数调用成功的结果
        console.log(result);
      },
      fail: err => {
        const result = res.result.result1;
        this.setData({
          show : result
        })
        // 处理云函数调用失败的错误
        console.error(err);
      }
    });
  },
  


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})