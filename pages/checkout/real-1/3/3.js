let manager = null;

Page({
  data: {
    remainTime: 240 ,// 初始时间为240m
    
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
    duration: 240000,
    num: 0,
  },
//创建定时器
    timer: null, // 定时器变量
  countdown: function() { // 倒计时函数
    const that = this;
    if (this.timer) { // 如果定时器已经存在，则不需要再次触发
      return;
    }
    this.timer = setInterval(function() {
      if (that.data.remainTime <= 0) {
        clearInterval(that.timer); // 清除定时器
        that.timer = null; // 重置定时器变量
        return;
      }
      that.setData({
        remainTime: that.data.remainTime - 1 // 每隔1秒更新一次剩余时间
      });
    }, 1000);
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
      secretKey: '4wa4NTL0Wv88yfASWfgV6Yq12sXyB9vU'
    });

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
  goBack: function() {
    wx.navigateBack({
      delta: 1 // 返回上一页
    })
  },
  ontouchstart: function () {
    this.countdown();//定时器
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

})
