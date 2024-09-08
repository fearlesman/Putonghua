const jzplay = wx.createInnerAudioContext();
const ljplay = wx.createInnerAudioContext();
const lhplay = wx.createInnerAudioContext();
const mlplay = wx.createInnerAudioContext();
const mhplay = wx.createInnerAudioContext();
const meplay = wx.createInnerAudioContext();
const ngplay = wx.createInnerAudioContext();
const wdplay = wx.createInnerAudioContext();
const xrplay = wx.createInnerAudioContext();
const ysplay = wx.createInnerAudioContext();
const yssplay = wx.createInnerAudioContext();
const mgplay = wx.createInnerAudioContext();
const cmplay = wx.createInnerAudioContext();
const gjplay = wx.createInnerAudioContext();
const liplay = wx.createInnerAudioContext();
const pgplay = wx.createInnerAudioContext();
const ptplay = wx.createInnerAudioContext();
const xjplay = wx.createInnerAudioContext();
const zmplay = wx.createInnerAudioContext();


// 为两个音频对象分别设置 src 属性
jzplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/jz.mp4';
ljplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/lj.mp4';
lhplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/lh.mp4';
mlplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/ml.mp4';
mhplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/mh.mp4';
meplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/me.mp4';
ngplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/ng.mp4';
wdplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/wd.mp4';
xrplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/xr.mp4';
ysplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/ys.mp4';
yssplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/yss.mp4';
mgplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/mg.mp3';
cmplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/cm.mp3';
gjplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/gj.mp3';
liplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/li.mp3';
pgplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/pg.mp3';
ptplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/葡萄.mp3';
xjplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/xj.mp3';
zmplay.src = 'cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/芝麻.mp3';
Page({
  Play1: function() {
    wx.vibrateShort();
    jzplay.play();
  },
  Play2: function() {
    wx.vibrateShort();
    ljplay.play();
  },
  Play3: function() {
    wx.vibrateShort();
    lhplay.play();
  },
  Play4: function() {
    wx.vibrateShort();
    mlplay.play();
  },
  Play5: function() {
    wx.vibrateShort();
    mhplay.play();
  },
  Play6: function() {
    wx.vibrateShort();
    meplay.play();
  },
  Play7: function() {
    wx.vibrateShort();
    ngplay.play();
  },
  Play8: function() {
    wx.vibrateShort();
    wdplay.play();
  },
  Play9: function() {
    wx.vibrateShort();
    xrplay.play();
  },
  Play10: function() {
    wx.vibrateShort();
    ysplay.play();
  },
  Play11: function() {
    wx.vibrateShort();
    yssplay.play();
  },
  Play12: function() {
    wx.vibrateShort();
    mgplay.play();
  },
  Play13: function() {
    wx.vibrateShort();
    cmplay.play();
  },
  Play14: function() {
    wx.vibrateShort();
    gjplay.play();
  },
  Play15: function() {
    wx.vibrateShort();
    liplay.play();
  },
  Play16: function() {
    wx.vibrateShort();
    pgplay.play();
  },
  Play17: function() {
    wx.vibrateShort();
    ptplay.play();
  },
  Play18: function() {
    wx.vibrateShort();
    xjplay.play();
  },
  Play19: function() {
    wx.vibrateShort();
    zmplay.play();
  },

  /**
   * 页面的初始数据
   */
  /**
   * 生命周期函数--监听页面加载
   */
  audioPlay() {
    this.setData({
      isPlay: true
    })
  },
  onLoad(options) {
  },
  bcPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src1 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  coPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src2 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  dsPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src3 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  daPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src4 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  djPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src5 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  fqPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src6 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  fsPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src7 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  glPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src8 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  hqPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src9 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  hlPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src10 //设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  hyPlay: function (e) {
    let that = this
    //创建内部 audio 上下文 InnerAudioContext 对象。
    that.innerAudioContext = wx.createInnerAudioContext();

    that.innerAudioContext.src = this.data.src11//设置音频地址
    this.innerAudioContext.play(); //播放音频
    wx.vibrateShort();
  },
  data: {
    isPlay: true,
    src1: '/pages/sound/白菜.mp3',
    src2: '/pages/sound/葱.mp3',
    src3: '/pages/sound/ds.mp3',
    src4: '/pages/sound/da.mp3',
    src5: '/pages/sound/dj.mp3',
    src6: '/pages/sound/fq.mp3',
    src7: '/pages/sound/fs.mp3',
    src8: '/pages/sound/高粱.mp3',
    src9: '/pages/sound/hq.mp3',
    src10: '/pages/sound/hl.mp3',
    src11: '/pages/sound/hy.mp3',
  }
})