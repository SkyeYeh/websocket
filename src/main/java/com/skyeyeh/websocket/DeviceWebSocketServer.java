package com.skyeyeh.websocket;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/actions")
public class DeviceWebSocketServer {
    public static final Logger LOGGER = LoggerFactory.getLogger(DeviceWebSocketServer.class);

    @OnOpen
    public void open(Session session) {
        LOGGER.info(session.toString());
    }

    @OnClose
    public void close(Session session) {
        LOGGER.info(session.toString());
    }

    @OnError
    public void onError(Throwable error) {
        LOGGER.error(error.toString());
    }

    @OnMessage
    public void handleMessage(String message, Session session) {
        LOGGER.info("message: " + message + ", session: " + session.toString());
    }
}
