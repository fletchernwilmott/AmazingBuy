package com.cogent.amazingbuy.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasAuthority('USER') or hasAuthority('MODERATOR') or hasAuthority('ADMIN')")
	public String userAccess() {
		// to connect service or JPA respository
		return "User Content.";
	}

	@GetMapping("/seller")
	@PreAuthorize("hasAuthority('seller')")
	public String sellerAccess() {
		return "Seller Board.";
	}

	@GetMapping("/buyer")
	@PreAuthorize("hasAuthority('buyer')")
	public String buyerAccess() {
		return "Buyer Board.";
	}
}
