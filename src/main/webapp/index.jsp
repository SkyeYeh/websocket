<%--
  WebSocket 測試頁面.
  Date: 2016/3/18
  Time: 下午 02:25
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Websocket</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-4">
            <form id="cardForm" class="form-horizontal">
                <div class="form-group">
                    <label for="name">名稱</label>
                    <input type="text" id="name" name="name" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="type">類型</label>
                    <input type="text" id="type" name="type" class="form-control"/>
                </div>
                <div id="keyAction" class="form-group">
                    <button type="button" id="open" class="btn btn-default">開啟 (Open)</button>
                    <button type="button" id="send" class="btn btn-primary">送出 (Send)</button>
                    <button type="button" id="close" class="btn btn-default">關閉 (Close)</button>
                </div>
                <div class="form-group">
                    <%-- 回應 --%>
                    <div id="messages">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Template -->
<script type="text/html" id="messageTemplate">
    <div class="alert alert-info alert-dismissible">
        {{response}}
        <button class="close" data-dismiss="alert">&times;</button>
    </div>
</script>

<!-- Javascript. -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"
        defer></script>
<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"
        defer></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
        defer></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.1/mustache.min.js"
        defer></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"
        defer></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js"
        defer></script>
<script type="text/javascript" src="js/websocket.js" defer></script>
</body>
</html>
