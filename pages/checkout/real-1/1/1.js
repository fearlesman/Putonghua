let manager = null;

Page({
  data: {
    remainTime: 210 ,// 初始时间为210m

    resps: [],

    btnText: '长摁此处开始录制',

    serverTypeItems: [
      { name: 0, value: '英文'},
      { name: 1, value: '中文' , checked: 'true' }
    ],
    evalModeItems: [
      { name: 0, value: '显示单字得分（练习内容为“此处为练习内容”处显示单音节字）' , checked: 'true',},
      { name: 1, value: '显示总得分（将以上所有单音节字朗读完毕后显示得分）' },
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
    content: '卧',
    serverType: 1,
    storageMode: 3,
    evalMode: 2,
    scoreCoeff: 2.0,
    textMode: 0,
    duration: 210000,
    num: 0
  },
  goBack: function() {
    wx.navigateBack({
      delta: 1 // 返回上一页
    })
  },
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
    this.countdown();//定时器
  },
  ontouchend: function () {
    manager.stop()
  },


  rand: function () {
    this.numChange();
    var context = ["卧 鸟 纱 悔 掠 酉 终 撤 甩 蓄 秧 四 仍 叫 台 婶 贼 耕 半 掐 布 癣 翁 弱 刷 允 床 改 逃 舂 驳 纯 导 虽 棒 伍 知 末 枪 蹦 港 评 犬 课 淮 炯 循 纺 拴 李 赛 捡 梯 呕 绳 揭 陇 搓二 棉 桩 皿 宋 狭 内 啃 字 环 州 秒 抛 代 关 停 祛 德 孙 旧 崔 凝 烈 倪 荆 擒 案 砸 垮 焚 帝 聊 颠 涌 牛 汝 粤 篇 竹 草 迟 泛",];
    this.setData({
      content: context[this.data.num]
    })
  },
  back: function () {
    var context = ["卧 鸟 纱 悔 掠 酉 终 撤 甩 蓄 秧 四 仍 叫 台 婶 贼 耕 半 掐 布 癣 翁 弱 刷 允 床 改 逃 舂 驳 纯 导 虽 棒 伍 知 末 枪 蹦 港 评 犬 课 淮 炯 循 纺 拴 李 赛 捡 梯 呕 绳 揭 陇 搓二 棉 桩 皿 宋 狭 内 啃 字 环 州 秒 抛 代 关 停 祛 德 孙 旧 崔 凝 烈 倪 荆 擒 案 砸 垮 焚 帝 聊 颠 涌 牛 汝 粤 篇 竹 草 迟 泛"];
    this.numChange2();
    this.setData({
      content: context[this.data.num]
    })
  },
})

