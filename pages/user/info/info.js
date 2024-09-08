// pages/personal.js
// 在小程序页面的 JavaScript 代码中定义清理缓存的事件处理函数
const app = getApp(); // 获取小程序实例
Page({


// 在需要获取整体高度的地方调用该函数
getFullPageHeight: function() {
  const that = this;

  wx.getSystemInfo({
    success: function(res) {
      const windowHeight = res.windowHeight; // 窗口高度

      // 使用 wx.createSelectorQuery 创建查询对象
      const query = wx.createSelectorQuery().in(that);

      // 查询页面主体的高度
      query.select('.body').boundingClientRect(function(rect) {
        const bodyHeight = rect.height; // 页面主体的高度

        // 计算并获取页面的整体高度
        const fullPageHeight = windowHeight > bodyHeight ? windowHeight : bodyHeight;

        console.log('页面整体高度：', fullPageHeight);
      }).exec();
    }
  });
}

});
