let manager = null;

Page({
  data: {
    resps: [],

    btnText: '长摁此处开始录制',

    serverTypeItems: [
      { name: 0, value: '英文'},
      { name: 1, value: '中文' , checked: 'true' }
    ],
    evalModeItems: [
      { name: 0, value: '显示单个词语得分（练习内容为“此处为练习内容”处显示多音节字）' , checked: 'true',},
      { name: 1, value: '显示总得分（将以上所有多音节字朗读完毕后显示得分）' },
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
    content: '损坏',
    serverType: 1,
    storageMode: 3,
    evalMode: 1,
    scoreCoeff: 2.0,
    textMode: 0,
    duration: 60000,
    num: 0
  },
  numChange: function(){
    var that = this;
    this.setData({
      num: that.data.num + 1,
    })
  },
  numChange2: function(){
    var that = this;
    this.setData({
      num: that.data.num - 1,
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
      secretId: 'AKIDte5RfjiV5XoskPwSnutkU1J7mDVmtpjU',
      secretKey: 'd3GG2at0wnTueBTaWGl6MQK4gFg1EJG1'
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


  rand: function () {
    this.numChange();
    var context = ["损坏","昆虫","兴奋","恶劣","挂帅","针鼻儿","排斥","采取","利索","荒谬","少女","电磁波","愿望","恰当","若干","加塞儿","浪费","苦衷","佛教","新娘","逗乐儿","全面","包括","不用","培养","编纂","扎实","推测","吵嘴","均匀","收成","然而","满口","怪异","听话","大学生",];
    this.setData({
      content: context[this.data.num]
    })
  },
  back: function () {
    var context = ["损坏","昆虫","兴奋","恶劣","挂帅","针鼻儿","排斥","采取","利索","荒谬","少女","电磁波","愿望","恰当","若干","加塞儿","浪费","苦衷","佛教","新娘","逗乐儿","全面","包括","不用","培养","编纂","扎实","推测","吵嘴","均匀","收成","然而","满口","怪异","听话","大学生",];
    this.numChange2();
    this.setData({
      content: context[this.data.num]
    })
  },


})
