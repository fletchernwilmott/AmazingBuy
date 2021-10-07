package com.cogent.amazingbuy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
	private Long productId;
	
	@Column(name = "product_name")
	private String productName;
	
	@Column(name = "product_image_url")
	private String productImageURL;
	
	@Column(name = "product_price")
	private double productPrice;
	
	@Column(name = "product_quantity")
	private int productQuantity;
	
	@Column(name = "product_long_description")
	private String productLongDescription;
	
	@Column(name = "product_short_description")
	private String productShortDescription;
	
	@Column(name = "product_rating")
	private double productRating;
	
	// this is the foreign key
	@ManyToOne
	@JoinColumn(name = "category_id", nullable = false)
	private Category category;
	
	// order_id is the foreign key 
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order order;

}
