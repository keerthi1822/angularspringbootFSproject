package com.textilia.assignment.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigInteger;
import java.time.LocalDateTime;


@jakarta.persistence.Entity
@Table(name = "cloth")
public class TextilaToj {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "BIGINT")
	private BigInteger id;
	
	@Column(nullable = false)
	private String name; 
	
	@Column(nullable = false)
	private String size;
	
	@Column(nullable = false)
	private String color;
	
	@CreationTimestamp
	@Column(name="create_date", updatable = false, nullable = false)
	private LocalDateTime created_timestamp;
	
	@UpdateTimestamp
	private LocalDateTime updated_timestamp;
	
	
	public TextilaToj() {
		
	}
	
	

	public TextilaToj(BigInteger id, String name, String size, String color, LocalDateTime created_timestamp,
			LocalDateTime updated_timestamp) {
		super();
		this.id = id;
		this.name = name;
		this.size = size;
		this.color = color;
		this.created_timestamp = created_timestamp;
		this.updated_timestamp = updated_timestamp;
	}
	
	

	public BigInteger getId() {
		return id;
	}

	public void setId(BigInteger id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public LocalDateTime getCreated_timestamp() {
		return created_timestamp;
	}

	public void setCreated_timestamp(LocalDateTime created_timestamp) {
		this.created_timestamp = created_timestamp;
	}

	public LocalDateTime getUpdated_timestamp() {
		return updated_timestamp;
	}

	public void setUpdated_timestamp(LocalDateTime updated_timestamp) {
		this.updated_timestamp = updated_timestamp;
	}
	
	
	
}
