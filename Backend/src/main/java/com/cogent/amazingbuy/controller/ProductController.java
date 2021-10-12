package com.cogent.amazingbuy.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable(value = "id") Long productId) throws ResourceNotFoundException {
		Product p = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Couldn't find a product with that Id number")) ;
		
		// return a responseEntity with ok status code
		// and a body containing product p to display its info on Angular
		return ResponseEntity.ok().body(p);
	}
	
	
	// get products by categoryId
	// figure out pageable later
//	@GetMapping("/products/category/{id}")
//	public List<Product> getProductsByCaregoryId(@PathVariable(value = "id") Long id) {
//		return productRepository.findByCategoryId(id);
//	}


	// this was previously mapped to @GetMapping("/products/{name}")
	// this was causing an error with the already mapped @GetMapping("/products/{id}")
	// so we had to re-map this @GetMapping("/productname/{name}")
	@GetMapping("/productName/{name}")
	public List<Product> getProductsByName(@PathVariable("name") String name) {
		return productRepository.findProductByName(name);
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
