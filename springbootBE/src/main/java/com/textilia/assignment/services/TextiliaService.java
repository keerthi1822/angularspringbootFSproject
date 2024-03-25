package com.textilia.assignment.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.math.BigInteger;


import com.textilia.assignment.model.TextilaToj;
import com.textilia.assignment.repository.TextiliaRepo;


@Service
public class TextiliaService {
	 
	@Autowired
	private TextiliaRepo repo;
	
	public List<TextilaToj> fetchTextilaTojList(){
		return repo.findAll();
	}
	
	public TextilaToj saveTextiliaTojToDB(TextilaToj cloth) 
	{
		return repo.save(cloth);
	}
	
	public Optional<TextilaToj>  fetchTextiliaTojById(BigInteger id) 
	{
		return repo.findById(id);
	}
	
	public String deleteTextiliaTojById(BigInteger id) 
	{
		String result;
		try {
			repo.deleteById(id);
			result = "toj successfully deleted";
		}
		catch (Exception e)  {
			result = "toj with id is not deleted";
		}
	    return result;
	}
	
}
