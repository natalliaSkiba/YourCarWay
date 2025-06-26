package com.yourcaryourway.pocchat;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration class to set up CORS (Cross-Origin Resource Sharing) settings.
 * Allows requests from Angular frontend running at http://localhost:4200
 * with all HTTP methods and supports credentials.
 */
@Configuration
public class CorsConfig {

    /**
     * Configures CORS mappings for the application.
     *
     * @return WebMvcConfigurer instance with CORS settings
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("*")
                        .allowCredentials(true);
            }
        };
    }
}