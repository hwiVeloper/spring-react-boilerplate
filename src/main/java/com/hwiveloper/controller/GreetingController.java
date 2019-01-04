package com.hwiveloper.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
	@GetMapping("/api/greeting")
	public String greeting() {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd (E) HH:mm:ss");
		dateFormat.setTimeZone(TimeZone.getTimeZone("Asia/Seoul"));
		
		return "Hello! The server's current time is " + dateFormat.format(new Date());
	}
}
