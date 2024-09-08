Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: true,
    src: '/pages/sound/ch.mp3'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  audioPlay() {
    this.yuyinPlay();
    wx.vibrateShort();
    this.setData({
      isPlay: true
    })
  },
  onLoad(options) {
    this.audioPlay();
  },
  yuyinPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src //设置音频地址
    this.innerAudioContext.play(); //播放音频
  },
  end: function (e) {
    let that = this
    if ((that.data.src) || (that.data.src != undefined)) return
    that.innerAudioContext.pause();//暂停音频 
  },

  onHide: function () {
    this.end();//暂停音频
  },
  onUnload: function () {
    this.end();//暂停音频
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