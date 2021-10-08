package com.cogent.amazingbuy.model;

import java.util.List;

import javax.persistence.CascadeType;
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
	private Long orderId;
	
	@Column(name = "is_paid")
	private boolean isPaid;
	
	@Column(name = "is_shipped")
	private boolean isShipped;
	
	@Column(name = "shipping_address")
	private String shippingAddress;
	
	@Column(name = "timestamp")
	private String timestamp;
	
	@Column(name = "products")
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	private List<Product> product;
	
	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account account;

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
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

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	public Long getAccount() {
		return account.getId();
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	@Override
	public String toString() {
		return "Order [ordertId=" + orderId + ", isPaid=" + isPaid + ", isShipped=" + isShipped + ", shippingAddress="
				+ shippingAddress + ", timestamp=" + timestamp + ", products=" + product + ", account=" + account
				+ "]";
	}

}
