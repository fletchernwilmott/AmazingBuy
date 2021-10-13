package com.cogent.amazingbuy.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.amazingbuy.dao.AccountRepository;
import com.cogent.amazingbuy.dao.CategoryRepository;
import com.cogent.amazingbuy.dao.OrderRepository;
import com.cogent.amazingbuy.dao.ProductRepository;
import com.cogent.amazingbuy.model.Account;
import com.cogent.amazingbuy.model.Category;
import com.cogent.amazingbuy.model.Order;
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
	@Autowired
	private OrderRepository oR;
	
	Account a = new Account("Rob", "rob@gmail.com", "rob", "Buyer", "11-05-1989");
	Account b = new Account("Zack", "zack@gmail.com", "1234", "Buyer", "05-09-1999");
	Category c1 = new Category(101,"Fruits");
	Category c2 = new Category(102,"Vegetables");
	Product p1 = new Product("Orange", "image", 0.77, 20,"1-long descrption", "5-short description", 4.8);
	Product p2 = new Product("Apple", "image", 0.99, 280,"2-long descrption", "6-short description", 5);
	Product p3 = new Product("Potato", "image", 1.57, 40,"3-long descrption", "7-short description", 3.8);
	Product p4 = new Product("Carrot", "image", 2.67, 204,"4-long descrption", "8-short description", 4.4);
	Order o1 = new Order(false, false, "123 main st", "11-11-2020",a );

	
	
	@RequestMapping("/sa")
	public void accountStarter() {
		aR.save(a);
		aR.save(b);
	}
	@RequestMapping("/sc")
	public void categoryStarter() {
		cR.save(c1);
		cR.save(c2);
	}
//	@RequestMapping("/sp")
//	public void productStarter() {
//		pR.save(p1);
//		pR.save(p2);
//		pR.save(p3);
//		pR.save(p4);
//	}
	@RequestMapping("/so")
	public void orderStarter() {
		oR.save(o1);
	}
	
	@RequestMapping("/testorder") 
	public void modifyOrder() throws Exception{
		Order oldOrder = oR.findById(1L)
				.orElseThrow(()-> new Exception
			            ("Account not found for this id "));
		List<Product> p = new ArrayList();
		p.add(p1);
		p.add(p3);
		oldOrder.setProducts(p);
//		oldOrder.getProducts().add(p3);		
		oR.save(oldOrder);
		
	}
	@RequestMapping("/tlo")
	public void plistorder() {
		
	}

}
