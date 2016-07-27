(function () {
    $(function () {
        $('#open').on('click', openSocket);
        $('#send').on('click', send);
        $('#close').on('click', closeSocket);
    });

    var webSocket;
    var webSocketUrl = 'ws://localhost:8080/websocket/actions';

    /**
     * 建立連線.
     */
    function openSocket() {
        if (Modernizr.websockets) {
            // Ensures only one connection is open at a time
            if (webSocket && webSocket.readyState !== WebSocket.CLOSED) {
                writeResponse("已開啟 Web Socket 連線");
                return;
            } else {
                webSocket = new WebSocket(webSocketUrl);
            }

            webSocket.onopen = function (event) {
                if (event.data) {
                    writeResponse(event.data);
                }
            };

            webSocket.onmessage = function (event) {
                if (event.data) {
                    writeResponse(event.data);
                }
            };

            webSocket.onclose = function () {
                writeResponse("連線已關閉");
            };
        } else {
            writeResponse("您的瀏覽器不支援 Web Socket");
        }
    }

    /**
     * 送出.
     */
    function send() {
        if (Modernizr.websockets) {
            var cardAction = {
                action: "remove",
                name: $('#name').val(),
                type: $('#type').val()
            };
            webSocket.send(JSON.stringify(cardAction));
        } else {
            writeResponse("您的瀏覽器不支援 Web Socket");
        }
    }

    /**
     * 關閉 Web Socket 連線.
     */
    function closeSocket() {
        if (Modernizr.websockets) {
            webSocket.close();
        } else {
            writeResponse("您的瀏覽器不支援 Web Socket");
        }
    }

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
})();
