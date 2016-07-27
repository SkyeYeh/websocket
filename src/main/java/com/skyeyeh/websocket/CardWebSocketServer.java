package com.skyeyeh.websocket;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.context.ApplicationScoped;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;

@ApplicationScoped
@ServerEndpoint(value = "/actions")
public class CardWebSocketServer {
    public static final Logger LOGGER = LoggerFactory.getLogger(CardWebSocketServer.class);

    //    @Inject
    private CardSessionHandler cardSessionHandler = new CardSessionHandler();

    @OnOpen
    public void open(Session session) {
        cardSessionHandler.addSessionSet(session);
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
