package com.cogent.amazingbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
	
	// get one product by categoryId
	// for viewing product details
	
	
	// add
	@PostMapping("/addProduct")
	public String addProduct(@RequestBody Product p){
		productRepository.save(p);
		return "success";
	}
	
	
	

}
