package com.cogent.amazingbuy.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
	private Long ordertId;
	
	@Column(name = "is_paid")
	private boolean isPaid;
	
	@Column(name = "is_shipped")
	private boolean isShipped;
	
	@Column(name = "shipping_address")
	private String shippingAddress;
	
	@Column(name = "timestamp")
	private String timestamp;
	
	@OneToMany(mappedBy = "products")
	private List<Product> products;
	
	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account accountId;

	public Long getOrdertId() {
		return ordertId;
	}

	public void setOrdertId(Long ordertId) {
		this.ordertId = ordertId;
	}

	public boolean isPaid() {
		return isPaid;
	}

	public void setPaid(boolean isPaid) {
		this.isPaid = isPaid;
	}

	public boolean isShipped() {
		return isShipped;
	}

	public void setShipped(boolean isShipped) {
		this.isShipped = isShipped;
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

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public Account getAccountId() {
		return accountId;
	}

	public void setAccountId(Account accountId) {
		this.accountId = accountId;
	}

	@Override
	public String toString() {
		return "Order [ordertId=" + ordertId + ", isPaid=" + isPaid + ", isShipped=" + isShipped + ", shippingAddress="
				+ shippingAddress + ", timestamp=" + timestamp + ", products=" + products + ", accountId=" + accountId
				+ "]";
	}
	
}
