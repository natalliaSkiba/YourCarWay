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
     * @param message The ChatMessage object received from the client
     * @return The same ChatMessage object to be broadcast to subscribers
     */
    @MessageMapping("/sendMessage")
    @SendTo("/topic/messages")
    public ChatMessage sendMessage(ChatMessage message) {
        log.info("Received message from {}: {}", message.getFrom(), message.getContent());
        return message;
    }
}
