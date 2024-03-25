package com.textilia.assignment.repository;

import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;

import com.textilia.assignment.model.TextilaToj;

public interface TextiliaRepo extends JpaRepository<TextilaToj, BigInteger>{

}
