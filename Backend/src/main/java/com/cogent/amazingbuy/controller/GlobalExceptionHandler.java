package com.cogent.amazingbuy.controller;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> resourceNotFoundException
	(ResourceNotFoundException ex, WebRequest request)
	{
		System.out.println("Exception handling for resource");
		ErrorDetails errordetails = new ErrorDetails (new Date(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errordetails, HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> Exception
	(Exception ex, WebRequest request)
	{
		System.out.println("Generic Exception handling");
		ErrorDetails errordetails = new ErrorDetails (new Date(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errordetails, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
}
