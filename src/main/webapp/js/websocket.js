(function (global, $) {
    var WebsocketModel = Backbone.Model.extend({
        webSocket: '',
        url: 'ws://localhost:8080/websocket/actions'
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
            if (Modernizr.websockets) {
                this.websocketModel = new WebsocketModel();
            } else {
                writeResponse('您的瀏覽器不支援 Web Socket');
            }
            // this.cardModel = new CardModel();
        },
        el: $('#keyAction'),
        events: {
            'click #open': 'doOpen',
            'click #send': 'doSend',
            'click #close': 'doClose'
        },
        websocketModel: '',
        // cardModel: '',
        doOpen: function () {
            var view = this;
            this.websocketModel.webSocket = new WebSocket(this.websocketModel.url);
            this.websocketModel.webSocket.onopen = function (evt) {
                view.onOpen(evt);
            };
            this.websocketModel.webSocket.onclose = function (evt) {
                view.onClose(evt);
            };
            this.websocketModel.webSocket.onmessage = function (evt) {
                view.onMessage(evt);
            };
            this.websocketModel.webSocket.onerror = function (evt) {
                view.onError(evt);
            };
        },
        onOpen: function (evt) {
            writeResponse('連線已開啟');
        },
        onClose: function (evt) {
            writeResponse('連線已關閉');
        },
        onMessage: function (evt) {
            writeResponse('回應: ' + evt.data);
        },
        onError: function (evt) {
            writeResponse('錯誤: ' + evt.data);
        },
        doSend: function () {
            var cardAction = {
                action: "remove",
                name: $('#name').val(),
                type: $('#type').val()
            };
            this.websocketModel.webSocket.send(JSON.stringify(cardAction));
        },
        doClose: function () {
            this.websocketModel.webSocket.close();
        }
    });

    new WebsocketView();

    /**
     * 顯示訊息.
     * @param response 訊息內容
     */
    function writeResponse(response) {
        var messageView = {
            response: response
        };
        var messageTemplate = $('#messageTemplate').html();
        var render = Mustache.render(messageTemplate, messageView);
        $('#messages').html(render);
    }
})(this, jQuery);
