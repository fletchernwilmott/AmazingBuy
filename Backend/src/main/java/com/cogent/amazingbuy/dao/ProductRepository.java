package com.cogent.amazingbuy.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.cogent.amazingbuy.model.Product;


// why do we need to keep this empty
@CrossOrigin()
// collectionResourceRel is the requestMapping and path is the url
@RepositoryRestResource(collectionResourceRel = "products", path = "product")
public interface ProductRepository extends JpaRepository<Product, Long> {
	// findAll is pre-defined
	@Query("from Product p where p.name LIKE '%'||:name||'%'")
	public List<Product> findProductByName(@Param("name") String name);
	
	Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

	Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
	
	Page<Product> findByOrdersId(@RequestParam("id") Long id, Pageable pageable);
}
