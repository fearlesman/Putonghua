// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
data:{
  playFlag:false,
  [
    {
      Va:0,
      maxTime:0,
      currentTime:0,
      formattingMaxTime:"00:00",
      formattingCurrentTime:"00:00",
      playFlag:false,
      firstPlayFlag:true,
      url:""
    },
    {
      Va:0,
      maxTime:0,
      currentTime:0,
      formattingMaxTime:"00:00",
      formattingCurrentTime:"00:00",
      playFlag:false,
      firstPlayFlag:true,
      url:""
    }
  ]
}
