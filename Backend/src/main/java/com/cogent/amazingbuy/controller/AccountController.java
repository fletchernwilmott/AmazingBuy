package com.cogent.amazingbuy.controller;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cogent.amazingbuy.dao.AccountRepository;
import com.cogent.amazingbuy.model.Account;



@CrossOrigin()
@RestController
public class AccountController {
	@Autowired
	private AccountRepository accountRepository;
	
	@GetMapping("/account/{id}")
	public ResponseEntity<Optional<Account>> retrieveAccount(@PathVariable long id)throws ResourceNotFoundException {
	    Optional<Account> account = Optional.ofNullable(accountRepository.findById(id)
	            .orElseThrow(() -> 
	            new ResourceNotFoundException
	            ("Account not found for this id : " + id)));
	          return ResponseEntity.ok().body(account);
	      	}
	
	@GetMapping("/account/{name}")
		public Account getStudentByName(@PathVariable String name) {
		Account account= accountRepository.findByName(name);
          return account;	
	}
	
	@PostMapping("/account")
	public String createStudent(@RequestBody Account account) {
		Account accountDetails = accountRepository.save(account);
		return "Added successfully!";
	}
	
	@PutMapping("/account/{id}")
	public String updateAccount(@RequestBody Account account, @PathVariable long id) throws ResourceNotFoundException{
		 Account accountDetails = accountRepository.findById(id)
				 .orElseThrow(() -> 
		            new ResourceNotFoundException
		            ("Account not found for this id : " + id));
		accountDetails.setFullName(account.getFullName());
		accountDetails.setEmail(account.getEmail());
		accountDetails.setPassword(account.getPassword());
		accountRepository.save(accountDetails);

		return "Updated successfully!";
	}
}
