package com.cogent.amazingbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.amazingbuy.model.*;

@RestController
public class CategoryController {
	
	@Autowired
	CategoryRepository cRep;
	
	//get all categories
	
	public List<Category> getAllCategories()
	{
		List<Category> category_list = cRep.findAll();
		return category_list;
	}
	
	
	
	//Find by id
	public ResponseEntity<Category> getCategoryByID(long id) 
	throws ResourceNotFoundException
	{
		Category category = cRep.findById(id).orElseThrow(() -> new ResourceNotFoundException("Category not found for this id :: "+id));
		return ResponseEntity.ok().body(category);
	}
	
	
	public ResponseEntity<List<Product>> getProductListFromCategory(List<Category> categorylist) 
			throws ResourceNotFoundException
			{
				List<Product> productlist = categorylist.forEach(null); //needs work.
				return ResponseEntity.ok().body(productlist);
			}
	
	//Find by name
	
	public ResponseEntity<Category> getCategoryByName(String name) 
			throws ResourceNotFoundException
	{
		List<Category> category_list = cRep.findAll();
		
		Category category;
		
		category_list.forEach((m) -> {
			if(m.getCategory_name().equals(name))
			{
				category = cRep.findById(m.getCategory_id()).orElseThrow(() -> new ResourceNotFoundException("Category not found for this id :: "+m.getCategory_id()));
			}
			});
		
		return ResponseEntity.ok().body(category);
	}
	
	
}
