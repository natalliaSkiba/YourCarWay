package com.yourcaryourway.pocchat;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // Конфигурация брокера сообщений
        config.enableSimpleBroker("/topic"); // Канал рассылки сообщений
        config.setApplicationDestinationPrefixes("/app"); // Префикс для сообщений от клиента
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // Регистрируем конечную точку для клиента (Angular)
        registry.addEndpoint("/chat")
                .setAllowedOriginPatterns("http://localhost:4200")
                .withSockJS();
    }

}
