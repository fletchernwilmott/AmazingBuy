package com.cogent.amazingbuy.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="product_category")

public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="category_id")
	private long category_id;
	
	@Column(name="category_name")
	private String category_name;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
	private List<Product> category_products;

	public Category() {
		
	}
	
	public Category(long category_id, String category_name, List<Product> category_products) {
		super();
		this.category_id = category_id;
		this.category_name = category_name;
		this.category_products = category_products;
	}

	public long getCategory_id() {
		return category_id;
	}

	public void setCategory_id(long category_id) {
		this.category_id = category_id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public List<Product> getCategory_products() {
		return category_products;
	}

	public void setCategory_products(List<Product> category_products) {
		this.category_products = category_products;
	}

	
	
}
