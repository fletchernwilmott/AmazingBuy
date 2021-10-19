package com.cogent.amazingbuy.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cogent.amazingbuy.model.Account;

@CrossOrigin()
@RepositoryRestResource(collectionResourceRel = "accounts", path = "account")
public interface AccountRepository extends JpaRepository<Account,Long>{
	@Query
	(value="FROM Account a WHERE a.email= :email and a.password = :password")
	public Optional<Account> getOne(@Param("email") String email, 
			  @Param("password") String password);
	
	@Query
	(value="FROM Account a WHERE a.email= :email")
	public Optional<Account> findByEmail(@Param("email") String email);
	
	Boolean existsByEmail(String email);
	
}
