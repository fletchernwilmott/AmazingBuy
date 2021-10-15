package com.cogent.amazingbuy.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
	private Long id;
	
	@Column(name = "is_paid")
	private boolean paid;
	
	@Column(name = "is_shipped")
	private boolean shipped;
	
	@Column(name = "shipping_address")
	private String shippingAddress;
	
	@Column(name = "timestamp")
	private String timestamp;
	
	@ManyToMany
	@JoinTable(
			  name = "orders_products", 
			  joinColumns = @JoinColumn(name = "order_id"), 
			  inverseJoinColumns = @JoinColumn(name = "product_id"))
	private List<Product> products;
	
	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account account;

	public Long getId() {
		return id;
	}

	public void setId(Long orderId) {
		this.id = orderId;
	}



	public boolean isShipped() {
		return shipped;
	}

	public void setShipped(boolean shipped) {
		this.shipped = shipped;
	}

	public boolean isPaid() {
		return paid;
	}

	public void setPaid(boolean paid) {
		this.paid = paid;
	}


	public String getShippingAddress() {
		return shippingAddress;
	}

	public void setShippingAddress(String shippingAddress) {
		this.shippingAddress = shippingAddress;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

//	public List<Product> getProduct() {
//		return product;
//	}
//
//	public void setProduct(List<Product> product) {
//		this.product = product;
//	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public Order( boolean isPaid, boolean isShipped, String shippingAddress, String timestamp, Account account) {
		super();
		this.paid = isPaid;
		this.shipped = isShipped;
		this.shippingAddress = shippingAddress;
		this.timestamp = timestamp;
//		this.product = product;
		this.account = account;
	}

	@Override
	public String toString() {
		return "Order [ordertId=" + id + ", isPaid=" + paid + ", isShipped=" + shipped + ", shippingAddress="
				+ shippingAddress + ", timestamp=" + timestamp + ", account=" + account + "Products IDs: "+ products
				+ "]";
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

}
