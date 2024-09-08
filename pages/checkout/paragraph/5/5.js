let manager = null;

Page({
  data: {
    src: "cloud://gpt-0grastut6153c6bb.6770-gpt-0grastut6153c6bb-1316585463/sounds/no5\.mp3",
    resps: [],

    btnText: '长摁此处开始录制',

    serverTypeItems: [
      { name: 0, value: '英文'},
      { name: 1, value: '中文' , checked: 'true' }
    ],
    evalModeItems: [
      { name: 0, value: '词模式' },
      { name: 1, value: '句子模式' },
      { name: 2, value: '段落模式' ,checked: 'true'},
      { name: 3, value: '自由说模式' }
    ],
    storageModeItems: [
      { name: 0, value: '放弃存储', checked: 'true' },
      { name: 1, value: '存储音频' }
    ],
    textModeItems: [
      { name: 0, value: '普通文本', checked: 'true' },
      { name: 1, value: '音素结构文本' }
    ],

    soeAppId: '',
    content: '请朗读此处内容',
    serverType: 1,
    storageMode: 3,
    evalMode: 3,
    scoreCoeff: 2.0,
    textMode: 0,
    duration: 300000,
    num: 0,
    collected: true
  },
  numChange: function(){
    var that = this;
    this.setData({
      num: that.data.num + 1,
    })
  },
  contentBindKeyInput(e) {
    this.setData({
      content: e.detail.value
    })
  },

  soeAppIdBindKeyInput(e) {
    this.setData({
      soeAppId: e.detail.value
    })
  },

  scoreCoeffBindKeyInput(e) {
    this.setData({
      scoreCoeff: e.detail.value
    })
  },

  durationBindKeyInput(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  serverTypeChange(e) {
    this.setData({
      serverType: e.detail.value
    })
  },

  evalModeChange(e) {
    this.setData({
      evalMode: e.detail.value
    })
  },

  storageModeChange(e) {
    this.setData({
      storageMode: e.detail.value
    })
  },

  textModeChange(e) {
    this.setData({
      textMode: e.detail.value
    })
  },

  onLoad: function () {
    let plugin = requirePlugin("myPlugin");
    manager = plugin.getSoeRecorderManager({
      secretId: 'AKIDHPJTRBgxfEajfceTBgx2xjKm493mLk19',
      secretKey: '4wa4NTL0Wv88yfASWfgV6Yq12sXyB9vU',
      
    });

    this.yuyinPlay();
    this.setData({
      collected: true
    })
    this.innerAudioContext.pause();

    manager.onSuccess((res) => {
      console.log('test-onSuccess');
      this.setData({
        PronAccuracy: res.PronAccuracy,
        PronFluency: res.PronFluency*100,
        PronCompletion: res.PronCompletion
      })
    });

    manager.onStart(() => {
      console.log('test-onstart');
      wx.vibrateShort();
      this.setData({
        resps: [],
        btnText: '录制中'
      })
    })

    manager.onStop(() => {
      this.setData({
        btnText: '长摁此处开始录制'
      })
    })


    manager.onResponse((res) => {
      let array = this.data.resps
      array.push(JSON.stringify(res))
      this.setData({ resps: array })
    })

    manager.onError((res) => {
      console.log(res)
    })
  },

  ontouchstart: function () {
    manager.start({
      content: this.data.content,
      evalMode: this.data.evalMode,
      scoreCoeff: this.data.scoreCoeff,
      serverType: this.data.serverType,
      storageMode: this.data.storageMode,
      soeAppId: this.data.soeAppId,
      textMode: this.data.textMode,
      duration: this.data.duration
    })
  },
  ontouchend: function () {
    manager.stop()
  },
  audioPlay() {
    this.yuyinPlay();
    this.setData({
      isPlay: true
    })
  },
  yuyinPlay: function (e) {
    this.setData({
      collected: false
    })
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
  pause: function () {
    isPlay:false,
    this.setData({
      collected: true
    })
    this.innerAudioContext.pause();
  },
  onHide: function () {
    this.pause()
    this.innerAudioContext.pause();
  },
  onUnload: function () {
    this.pause()
    this.innerAudioContext.pause();
  },
})
