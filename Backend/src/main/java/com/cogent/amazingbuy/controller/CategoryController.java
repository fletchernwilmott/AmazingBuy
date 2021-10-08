package com.cogent.amazingbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.amazingbuy.dao.CategoryRepository;
import com.cogent.amazingbuy.model.Category;

@CrossOrigin()
@RestController
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	//get all categories
	@GetMapping("/category")
	public List<Category> getAllCategories() {
		List<Category> category_list = categoryRepository.findAll();
		return category_list;
	}
	
	
	
	//Find by id
	@GetMapping("/category/{id}")
	public ResponseEntity<Category> getCategoryByID(long id) throws ResourceNotFoundException
	{
		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> 
				new ResourceNotFoundException
				("Category not found for this id : "+id));
		return ResponseEntity.ok().body(category);
	}
	
	
//	public ResponseEntity<List<Product>> getProductListFromCategory(List<Category> categorylist) 
//			throws ResourceNotFoundException
//			{
//				List<Product> productlist = categorylist.forEach(null); //needs work.
//				return ResponseEntity.ok().body(productlist);
//			}
//	
	//Find by name
	
//	public ResponseEntity<Category> getCategoryByName(String name) 
//			throws ResourceNotFoundException
//	{
//		List<Category> category_list = categoryRepository.findAll();
//		
//		Category category;
//		
//		category_list.forEach((m) -> {
//			if(m.getCategory_name().equals(name))
//			{
//				category = categoryRepository.findById(m.getCategory_id()).orElseThrow(() -> new ResourceNotFoundException("Category not found for this id :: "+m.getCategory_id()));
//			}
//			});
//		
//		return ResponseEntity.ok().body(category);
//	}
	
	
}