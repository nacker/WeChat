//获取实例
var app = getApp();

Page({
    data: {
        inputValue: '',
        //用户名
        user: '',
        //消息记录
        historyMsgList: [],
        userInfo: ''
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

    onLoad: function(options) {
        var _self = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            _self.setData({
                user: userInfo.nickName
            })
        })
    },
    //设置input值
    bindKeyInput: function(e) {
        this.setData({
            inputValue: e.detail.value
        })
    },
    //发送消息
    sendtap: function() {
        console.log('发送消息001')
        var _self = this
        wx.sendSocketMessage({
            data: JSON.stringify({
                user: _self.data.user,
                content: _self.data.inputValue
            }),
            success: function(res) {
                console.log('发送消息002')
                var arr = _self.data.historyMsgList;
                arr.push('发送消息登录:' + _self.data.inputValue)
                _self.setData({
                    historyMsgList: arr
                });
            }
        })

    },
    //创建设置websocket连接
    onReady: function() {

        //定义初始值
        var _self = this
        var user = this.data.user;

        //发起socket连接
        wx.connectSocket({
            url: app.globalData.ws + '/WeApp_master_hail/service/api/websocket/index?name=' + user
        })

        //打开
        wx.onSocketOpen(function(res) {
            console.log('WebSocket连接已打开！');

            var arr = _self.data.historyMsgList

            arr.push(user + '登录成功')

            _self.setData({
                historyMsgList: arr
            })


        })

        //错误
        wx.onSocketError(function(res) {
            console.log('websocket连接打开失败')
        })

        //接受消息
        wx.onSocketMessage(function(res) {
            var data = Json.parse(res.data)
            var arr = _self.data.historyMsgList

            arr.push('接受到' + data.user + '的消息,Ta说' + data.content)

            _self.setData({
                historyMsgList: arr
            })

        })
    },
})