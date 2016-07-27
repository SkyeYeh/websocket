package com.skyeyeh.websocket;

import javax.enterprise.context.ApplicationScoped;
import javax.websocket.Session;
import java.util.HashSet;
import java.util.Set;

/**
 * Handler card and session.
 */
@ApplicationScoped
public class CardSessionHandler {
    private Set<Session> sessionSet = new HashSet<>();
    private Set<Card> cardSet = new HashSet<>();

    public void addSessionSet(Session session) {
        sessionSet.add(session);
    }

    public void removeSessionSet(Session session) {
        sessionSet.remove(session);
    }

    public void addCardSet(Card card) {
        cardSet.add(card);
    }

    public void removeCardSet(Card card) {
        cardSet.remove(card);
    }
}
