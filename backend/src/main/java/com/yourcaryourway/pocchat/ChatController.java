package com.yourcaryourway.pocchat;

import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

/**
 * Controller for handling WebSocket chat messages.
 * Receives messages sent to "/sendMessage" and broadcasts them
 * to all subscribers of the "/topic/messages" topic.
 */
@Slf4j
@Controller
public class ChatController {

    /**
     * Processes incoming chat messages sent to "/sendMessage".
     * Logs the received message and broadcasts it to "/topic/messages".
     *
     * @param message The chat message sent by the client
     * @return The same message to be broadcast to subscribers
     */
    @MessageMapping("/sendMessage")
    @SendTo("/topic/messages")
    public String sendMessage(String message) {
        log.info("Received message: {}", message);
        return message;
    }
}
