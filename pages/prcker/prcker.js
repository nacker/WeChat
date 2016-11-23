Page({
    data: {
        array: ['美国', '英国', '俄国', '泰国', '中国'],
        index: 0,
        data: '2016-09-01',
        time: '11:11'
    },
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },

    bindpicker: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindtime: function(e) {
        this.setData({
            date: e.detail.value
        })
    },
    binddate: function(e) {
        this.setData({
            time: e.detail.value
        })
    },
})