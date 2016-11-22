Page({
    data: {
        markers: [{
            latitude: 31.200000,
            longitude: 121.400000,
            name: '上海',
            desc: '我现在的位置'
        }],
        convers: [{
            latitude: 31.200000,
            longitude: 121.400000,
            iconPath: '/image/photo.png',
            rotate: 10
        }, {
            latitude: 31.200000,
            longitude: 121.400000,
            iconPath: '/image/photo.png',
            rotate: 90
        }]
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
    }
})