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
	private int category_id;
	
	@Column(name="category_name")
	private String category_name;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
	private List<Product> category_products;

	
}
