Page({
    data: {
        list: [{
            list_tool: [{
                img: "/image/newFriend.png",
                name: "新的朋友",
                url: "../newfriend/newfriend"
            }, {
                img: "/image/friends.png",
                name: "群聊"
            }, {
                img: "/image/label.png",
                name: "标签"
            }, {
                img: "/image/friends_2.png",
                name: "公众号"
            }]
        }, {
            text: "C",
            list_tool: [{
                img: "/image/ben.png",
                name: "承远风"
            }]
        }, {
            text: "D",
            list_tool: [{
                img: "/image/ben.png",
                name: "大老舅"
            }]
        }, {
            text: "H",
            list_tool: [{
                img: "/image/perry.png",
                name: "海浪"
            }]
        }, {
            text: "L",
            list_tool: [{
                img: "/image/max.png",
                name: "刘三姐"
            }, {
                img: "/image/mike.png",
                name: "廖芳樱"
            }]
        }, {
            text: "W",
            list_tool: [{
                img: "/image/adam.jpg",
                name: "王浩"
            }]
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
    },

    goPage: function(e) {
        var url = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: url
        })

    }
})