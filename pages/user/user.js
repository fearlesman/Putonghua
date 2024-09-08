const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
 
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
  },
  agree(e){
    console.log("用户同意隐私授权, 接下来可以调用隐私协议中声明的隐私接口")
  },
  disagree(e){
    console.log("用户拒绝隐私授权, 未同意过的隐私协议中的接口将不能调用")
  },
  onFeedback: function () {
    wx.navigateTo({
      url: '/pages/user/feedback/feedback'
    })
  },
  onInfo: function () {
    wx.navigateTo({
      url: '/pages/user/info/info'
    })
  },
  onShare: function () {
    wx.showShareMenu({
      withShareTicket: true,
      success: function () {
        console.log('分享成功');
      }
    });
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  }
})