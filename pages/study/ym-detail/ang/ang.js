const ymplay = wx.createInnerAudioContext();
ymplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/ang.mp3';
// pages/study/ym-detail/an/an.js
Page({

  /**
   * 页面的初始数据
   */
  
  audioPlay: function() {
    wx.vibrateShort();
    ymplay.play();
  },
  onLoad(options) {
    this.audioPlay();
  },
  onLoad(options) {
    this.audioPlay();
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

  },
  data: {
    isPlay: true,
    word:"ang",
    hearder:'后鼻音韵母',
    detail:"发音时，舌尖抵住上齿龈，嘴巴稍微张开，气息通过鼻腔发出。发音时要注意舌尖与上齿龈的接触，同时保持口腔的开放状态。",
  },
})