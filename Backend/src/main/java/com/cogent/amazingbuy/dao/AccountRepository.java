package com.cogent.amazingbuy.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cogent.amazingbuy.model.Account;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "account", path = "account")
public interface AccountRepository extends JpaRepository<Account,Long>{
	@Query
	(value="select a from Account a where a.name=:name")
	
	public Account findByName(@Param("name")String name);

}
