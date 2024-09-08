Page({
  data: {
    audioCtx: null,
    poster: '',
    name: '标准儿化音',
    author: '',
    srcMic: 'https://music.gimhoy.com/?url=https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VZN2NpVEFiNWJSS3ZqcUtuTjBoNlM0Ql9CYkd4X1JyWkVRZGMtbGRBdEdWeVE.m4a&name=er1.m4a',
  },
  //播放语音
    yuyinPlay: function (e) {
      let that = this
      //创建内部 audio 上下文 InnerAudioContext 对象。
      that.innerAudioContext = wx.createInnerAudioContext();
      that.innerAudioContext.onError(function (res) {
      })
      if ((that.data.srcMic == '') || (that.data.srcMic == undefined)) return;
  
      that.innerAudioContext.src = that.data.srcMic //设置音频地址
      this.innerAudioContext.play(); //播放音频
    },
    //播放
    audioPlay() {
      this.yuyinPlay();
      this.setData({
        isPlay: true
      })
    },
    // 停止播放
    audioPause() {
      this.setData({
        isPlay: false
      })
      this.innerAudioContext.pause();//暂停音频 
  
    },
    // 结束语音
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
})