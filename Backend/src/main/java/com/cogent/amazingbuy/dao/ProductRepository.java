package com.cogent.amazingbuy.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.cogent.amazingbuy.model.Product;


// why do we need to keep this empty
@CrossOrigin
// collectionResourceRel is the requestMapping and path is the url
//@RepositoryRestResource(collectionResourceRel = "productsList", path = "product")
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	// findAll is pre-defined
	
	@Query("select * from products p where p.category_id = ?1")
	Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

	@Query("select * from products p where p.product_name = ?1")
	ResponseEntity<Product> findByProductName(String productName);
	
}
