package com.yourcaryourway.pocchat;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.sql.DataSource;

@SpringBootApplication
public class PocChatApplication {

	public static void main(String[] args) {
		SpringApplication.run(PocChatApplication.class, args);
	}


}
