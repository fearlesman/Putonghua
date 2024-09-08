Page({

  /**
   * 页面的初始数据
   */
  /**
   * 生命周期函数--监听页面加载
   */
  coplay(){

  },
  bcPlay(){

  },
  audioPlay() {
    wx.vibrateShort();
    this.setData({
      isPlay: true
    })
  },
  bcPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src1 //设置音频地址
    this.innerAudioContext.play(); //播放音频
  },
  end: function (e) {
    let that = this
    if ((that.data.src) || (that.data.src != undefined)) return
    that.innerAudioContext.pause();//暂停音频 
  },
  coPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src2 //设置音频地址
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

  },
  data: {
    isPlay: true,
    src1: '/pages/sound/白菜.mp3',
    src2: '/pages/sound/葱.mp3',
    showModal: false, 
    showPrivacy: false
  },
  onLoad() {
    // 根据需要的触发时机，例如在某个按钮点击后显示弹窗
  },
  onAgreeButtonTap() {
    this.setData({
      showModal: true, // 隐藏弹窗
    });
    // 用户同意后的操作，例如记录用户同意状态
  }
})