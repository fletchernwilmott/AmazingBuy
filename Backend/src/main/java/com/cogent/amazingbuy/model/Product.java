package com.cogent.amazingbuy.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "product")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
	private Long id;
	
	@Column(name = "product_name")
	private String name;
	
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
	@JsonManagedReference
	@JoinColumn(name = "categoryId")
	private Category category;
	
//	// order_id is the foreign key 
	@JsonIgnore
	@ManyToMany(mappedBy ="products")
	private List<Order> orders;

	public Product() {}

	public Product(String name, String productImageURL, double productPrice, int productQuantity,
			String productLongDescription, String productShortDescription, double productRating) {
		super();
		this.name = name;
		this.productImageURL = productImageURL;
		this.productPrice = productPrice;
		this.productQuantity = productQuantity;
		this.productLongDescription = productLongDescription;
		this.productShortDescription = productShortDescription;
		this.productRating = productRating;
//		this.category = category;
//		this.order = order;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long productId) {
		this.id = productId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProductImageURL() {
		return productImageURL;
	}

	public void setProductImageURL(String productImageURL) {
		this.productImageURL = productImageURL;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	public String getProductLongDescription() {
		return productLongDescription;
	}

	public void setProductLongDescription(String productLongDescription) {
		this.productLongDescription = productLongDescription;
	}

	public String getProductShortDescription() {
		return productShortDescription;
	}

	public void setProductShortDescription(String productShortDescription) {
		this.productShortDescription = productShortDescription;
	}

	public double getProductRating() {
		return productRating;
	}

	public void setProductRating(double productRating) {
		this.productRating = productRating;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> order) {
		this.orders = order;
	}

	@Override
	public String toString() {
		return "Product [productId=" + id + ", name=" + name + ", productImageURL="
				+ productImageURL + ", productPrice=" + productPrice + ", productQuantity=" + productQuantity
				+ ", productLongDescription=" + productLongDescription + ", productShortDescription="
				+ productShortDescription + ", productRating=" + productRating + "]";
	}

}
