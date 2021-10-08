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
	@JoinColumn(name = "categoryId")
	private Category category;
	
	// order_id is the foreign key 
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order order;

	public Product() {}

	public Product(String productName, String productImageURL, double productPrice, int productQuantity,
			String productLongDescription, String productShortDescription, double productRating) {
		super();
		this.productName = productName;
		this.productImageURL = productImageURL;
		this.productPrice = productPrice;
		this.productQuantity = productQuantity;
		this.productLongDescription = productLongDescription;
		this.productShortDescription = productShortDescription;
		this.productRating = productRating;
		this.category = category;
//		this.order = order;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
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

	public String getCategory() {
		return category.getName();
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productImageURL="
				+ productImageURL + ", productPrice=" + productPrice + ", productQuantity=" + productQuantity
				+ ", productLongDescription=" + productLongDescription + ", productShortDescription="
				+ productShortDescription + ", productRating=" + productRating + "]";
	}

}
