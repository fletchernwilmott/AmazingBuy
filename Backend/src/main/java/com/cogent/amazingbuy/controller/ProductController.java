package com.cogent.amazingbuy.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.amazingbuy.dao.ProductRepository;
import com.cogent.amazingbuy.model.Product;

@CrossOrigin
@RestController
public class ProductController {
	
	@Autowired
	ProductRepository productRepository;
	
	
	// get all products
	// pre-defined by (collectionResourceRel = "productsList", path = "product")
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	
	// get products by productId
	// needs to throw custom ResourceNotFoundException
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable(value = "id") Long productId) throws ResourceNotFoundException {
		Product p = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Couldn't find a product with that Id number")) ;
		
		// return a responseEntity with ok status code
		// and a body containing product p to display its info on Angular
		return ResponseEntity.ok().body(p);
	}
	
	
	// UNFINISHED
	// get products by categoryId
	@GetMapping("/products/category/{id}")
	public List<Product> getProductsByCaregoryId(@PathVariable(value = "id") Long id) {
		Pageable pageable = PageRequest.of(0, 20);
		//why do i need to cast to list
		return (List<Product>) productRepository.findByCategoryId(id, pageable);
	}
	
	
	// SHOULD THIS BE PAGEABLE
	// get product by name
	// we want to find by approximate name and do we want to return a pageable?
	@GetMapping("/products/name/{name}")
	public ResponseEntity<Product> getProductsByName(@PathVariable(value = "name") String productName) {
		return productRepository.findByProductName(productName);
	}
	
	// add product
	// seller only
	@PostMapping("/addProduct")
	public String addProduct(@RequestBody Product p){
		productRepository.save(p);
		return "product added";
	}
	
	// update
	// seller only
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") Long productId, @RequestBody Product productDetails) throws ResourceNotFoundException {
		Product oldProduct = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Couldn't find a product with that Id number"));
		oldProduct.setProductPrice(productDetails.getProductPrice());
		oldProduct.setProductQuantity(productDetails.getProductQuantity());
		oldProduct.setProductImageURL(productDetails.getProductImageURL());
		Product updatedProduct = productRepository.save(oldProduct);
		return ResponseEntity.ok(updatedProduct);
	}
	
	// delete product
	// seller only
	// dimple returns a map here instead, not sure why
	@DeleteMapping("/products/{id}")
	public String deleteProduct(@PathVariable(value = "id") Long productId) throws ResourceNotFoundException {
		Product p = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Couldn't find a product with that Id number"));
		productRepository.delete(p);
		return "product deleted";
	}

}
