package com.textilia.assignment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AssignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(AssignmentApplication.class, args);
		System.out.println("Om Ganeshaya Namah");
	}

}

//for the error "port is already in use"
//open command prompt
//netstat -ao |find /i "listening"
//givs the list of ports running in the system. Find 8080 port and its ID called PID
//Taskkill /F /IM (PID)
