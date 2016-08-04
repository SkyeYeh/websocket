(function (global, $) {
    var WebsocketModel = Backbone.Model.extend({
        webSocket: '',
        url: 'ws://localhost:8080/websocket/actions',
        initialize: function () {
            if (Modernizr.websockets) {
                this.webSocket = new WebSocket(this.url);
                this.webSocket.onopen = function (event) {
                    if (event.data) {
                        writeResponse(event.data);
                    }
                };
                this.webSocket.onmessage = function (event) {
                    if (event.data) {
                        writeResponse(event.data);
                    }
                };
                console.log('已開啟 Web Socket 連線');
            } else {
                console.error('您的瀏覽器不支援 Web Socket');
            }
        }
    });

    // var CardModel = Backbone.Model.extend({
    //     name: $('#name').val(),
    //     type: $('#type').val()
    // });

    // var CardCollection = Backbone.Collection.extend({
    //     model: CardModel
    // });

    var WebsocketView = Backbone.View.extend({
        initialize: function () {
            this.websocketModel = new WebsocketModel();
            // this.cardModel = new CardModel();
        },
        el: $('#keyAction'),
        events: {
            'click #open': 'open',
            'click #send': 'send',
            'click #close': 'close'
        },
        websocketModel: '',
        // cardModel: '',
        /**
         * 送出.
         */
        send: function () {
            if (Modernizr.websockets) {
                var cardAction = {
                    action: "remove",
                    name: $('#name').val(),
                    type: $('#type').val()
                };
                this.websocketModel.webSocket.send(JSON.stringify(cardAction));
            } else {
                writeResponse('您的瀏覽器不支援 Web Socket');
            }
        },
        /**
         * 關閉 Web Socket 連線.
         */
        close: function () {
            if (Modernizr.websockets) {
                this.websocketModel.webSocket.close();
                writeResponse('連線已關閉');
            } else {
                writeResponse('您的瀏覽器不支援 Web Socket');
            }
        }
    });

    new WebsocketView();

    /**
     * 顯示訊息.
     * @param response 訊息內容
     */
    var writeResponse = function (response) {
        var messageView = {
            response: response
        };
        var messageTemplate = $('#messageTemplate').html();
        var render = Mustache.render(messageTemplate, messageView);
        $('#messages').html(render);
    }
})(this, jQuery);
