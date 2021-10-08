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
@Table(name="Order_List")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="order_id")
	private long id;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
	private List<Product> products;
	
	@ManyToOne
	@JoinColumn(name = "account_id", nullable = false)
	private Account account;
}
