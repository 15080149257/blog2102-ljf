layui.use('layer', function(){ //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句

    //触发事件
    var active = {
        wechat: function(){
            //配置一个透明的询问框
            layer.msg('<img src="../image/wx.jpg" height="100" width="100"/>', {
                time: 20000, //20s后自动关闭
                btn: ['立即关闭']
            });
        }
        ,github: function(){
            //示范一个公告层
            layer.open({
                type: 1
                ,title: false //不显示标题栏
                ,closeBtn: false
                ,area: '300px;'
                ,shade: 0.8
                ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
                ,btn: ['火速围观', '残忍拒绝']
                ,btnAlign: 'c'
                ,moveType: 1 //拖拽模式，0或者1
                ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">你知道吗？亲！<br>通过这道传送门，可直接抵达博主的Github仓库哦！<br>如果你觉得很赞的话请给博主点个star哦 ^_^<br></div>'
                ,success: function(layero){
                    var btn = layero.find('.layui-layer-btn');
                    btn.find('.layui-layer-btn0').attr({
                        href: 'http://www.layui.com/'
                        ,target: '_blank'
                    });
                }
            });
        }
        ,qq: function(){
            //配置一个透明的询问框
            layer.msg('<img src="../image/qq.jpg" height="100" width="100"/>', {
                time: 20000, //20s后自动关闭
                btn: ['立即关闭']
            });
        }
        , weibo: function(){
            //配置一个透明的询问框
            layer.msg('亲,尚未开通微博哦！！！', {
                time: 20000, //20s后自动关闭
                btn: ['立即关闭']
            });
        }
        , user: function(){
            //配置一个透明的询问框
            layer.msg('亲,尚未开通个人众号哦！！！', {
                time: 20000, //20s后自动关闭
                btn: ['立即关闭']
            });
        }

    };

    $('#layerDemo .layui-btn').on('click', function(){
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });

});