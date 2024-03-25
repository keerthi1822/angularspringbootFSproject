package com.textilia.assignment.controller;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.textilia.assignment.model.TextilaToj;
import com.textilia.assignment.services.TextiliaService;


@RestController
public class TextiliaRestController {
	
	@Autowired
	private TextiliaService service;
    //insert into CLOTH ( id, size ,name, color, CREATE_DATE) 
	// values (3, 35 ,'hello1', 76, curtime()) 
	
 	@GetMapping("/getTextiliatojList")
 	@CrossOrigin(origins = "http://localhost:4200/")
	public List<TextilaToj> fetchTextilaTojList(){
		List<TextilaToj> cloths = new ArrayList<TextilaToj>();
		//logic to fetch from DB
		cloths = service.fetchTextilaTojList();
		return cloths;
	}
	
	@PostMapping("/addTextiliatoj")
	@CrossOrigin(origins = "http://localhost:4200/")
	public TextilaToj saveTextilaToj(@RequestBody TextilaToj cloth)
	{
		return service.saveTextiliaTojToDB(cloth);
	}
	
	@GetMapping("/getTextiliatojById/{id}")
	@CrossOrigin(origins = "http://localhost:4200/")
	public TextilaToj fetchTextilaTojByID(@PathVariable("id") BigInteger Id){
		return service.fetchTextiliaTojById(Id).get();
	
	}
	
	@GetMapping("/deleteTextiliatojById/{id}")
	@CrossOrigin(origins = "http://localhost:4200/")
	public String DeleteTextiliaTojById (@PathVariable("id") BigInteger Id)
	{
		return service.deleteTextiliaTojById(Id);
	}
	
	
}
