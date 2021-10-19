package com.cogent.amazingbuy.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cogent.amazingbuy.dao.AccountRepository;
import com.cogent.amazingbuy.model.Account;

@CrossOrigin()
@RequestMapping("/api")
@RestController
public class AccountController {
	@Autowired
	private AccountRepository accountRepository;
	@GetMapping("/accounts")
	public List<Account> getAccounts() {
		List<Account> accountsList = accountRepository.findAll();
		return accountsList;
	}
	
	@GetMapping("/accounts/{id}")
	public Optional<Account> retrieveAccount(@PathVariable long id)throws ResourceNotFoundException {
	    Optional<Account> account = Optional.ofNullable(accountRepository.findById(id)
	            .orElseThrow(() -> 
	            new ResourceNotFoundException
	            ("Account not found for this id : " + id)));
	          return account;
	}
	
	@GetMapping("accounts/{email}/{password}")
		public Optional<Account> getAccountByNameAndEmail(
				@PathVariable String email,@PathVariable String password
				) throws ResourceNotFoundException {
		Optional<Account> account= Optional.ofNullable(accountRepository.getOne(email,password).orElseThrow(() ->
		new ResourceNotFoundException
		("No account found under this name: "+email)));
          return account;	
	}
	
	@PostMapping("/accounts")
	public String createStudent(@RequestBody Account account) {
		accountRepository.save(account);
		return "Added successfully!";
	}
	
	@PutMapping("/accounts/{id}")
	public String updateAccount(@RequestBody Account account, @PathVariable long id) throws ResourceNotFoundException{
		 Account accountDetails = accountRepository.findById(id)
				 .orElseThrow(()-> new ResourceNotFoundException
		            ("Account not found for this id : " + id));
		accountDetails.setFullName(account.getFullName());
		accountDetails.setEmail(account.getEmail());
		accountDetails.setPassword(account.getPassword());
		accountRepository.save(accountDetails);
		return "Updated successfully!";
	}
}
