package com.cogent.amazingbuy.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
//404
@ResponseStatus(value = HttpStatus.NOT_FOUND)// if not aable to retrive it
public class ResourceNotFoundException extends Exception{

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message){
System.out.println("Message is "+message);    }
}