<%--
  WebSocket 測試頁面.
  Date: 2016/3/18
  Time: 下午 02:25
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Websocket</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-md-4">
            <div class="form-inline">
                <div class="form-group">
                    <label for="messageinput">輸入</label>
                    <input type="text" id="messageinput" class="form-control"/>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-4">
            <div class="form-group">
                <button type="button" id="open" class="btn btn-default">開啟 (Open)</button>
                <button type="button" id="send" class="btn btn-primary">送出 (Send)</button>
                <button type="button" id="close" class="btn btn-default">關閉 (Close)</button>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-4">
            <%-- 回應 --%>
            <div id="messages">
            </div>
        </div>
    </div>
</div>

<!-- Javascript. -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"
        defer></script>
<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"
        defer></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
        defer></script>
<script type="text/javascript" src="js/websocket.js" defer></script>
</body>
</html>
