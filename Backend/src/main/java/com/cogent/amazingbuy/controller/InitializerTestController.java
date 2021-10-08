package com.cogent.amazingbuy.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.amazingbuy.dao.AccountRepository;
import com.cogent.amazingbuy.dao.CategoryRepository;
import com.cogent.amazingbuy.dao.ProductRepository;
import com.cogent.amazingbuy.model.Account;
import com.cogent.amazingbuy.model.Category;
import com.cogent.amazingbuy.model.Product;

@CrossOrigin()
@RestController
public class InitializerTestController {
	@Autowired
	private AccountRepository aR;
	@Autowired
	private CategoryRepository cR;
	@Autowired
	private ProductRepository pR;
	
	
	@RequestMapping("/")
	public void starterValue() {
//		Account a = new Account("Mike", "mike@gmail.com", "1234", "Seller", "11-05-1989");
//		Account b = new Account("Zack", "zack@gmail.com", "1234", "Buyer", "05-09-1999");
//		aR.save(a);
//		aR.save(b);
//		List<Product> pList1 = new ArrayList<>();
//		List<Product> pList2 = new ArrayList<>();
//		Category c1 = new Category(101,"Fruits");
//		Category c2 = new Category(102,"Vegetables");
//		cR.save(c1);
//		cR.save(c2);
		
//		Product p1 = new Product("Orange", "image", 0.77, 20,"1-long descrption", "5-short description", 4.8);
//		Product p2 = new Product("Apple", "image", 0.99, 280,"2-long descrption", "6-short description", 5);
//		Product p3 = new Product("Potato", "image", 1.57, 40,"3-long descrption", "7-short description", 3.8);
//		Product p4 = new Product("Carrot", "image", 2.67, 204,"4-long descrption", "8-short description", 4.4);
//	
//		pR.save(p1);
//		pR.save(p2);
//		pR.save(p3);
//		pR.save(p4);
//		
		
	}

}
