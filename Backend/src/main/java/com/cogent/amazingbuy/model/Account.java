package com.cogent.amazingbuy.model;
import java.util.*;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name="account")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
private long id;
	@Column(name = "full_name")
private String fullName;
	@Column(name = "email")
private String email;
	@Column(name = "password")
private String password;
	@Column(name = "account_type")
private String accountType;
	@Column(name = "date_of_birth")
private String dateOfBirth;
@OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
private List<Order> orders;
public Account(long id, String fullName, String email, String password, String accountType, String dateOfBirth,
		List<Order> orders) {
	super();
	this.id = id;
	this.fullName = fullName;
	this.email = email;
	this.password = password;
	this.accountType = accountType;
	this.dateOfBirth = dateOfBirth;
	this.orders = orders;
}
public Account() {
	super();
	// TODO Auto-generated constructor stub
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getFullName() {
	return fullName;
}
public void setFullName(String fullName) {
	this.fullName = fullName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getAccountType() {
	return accountType;
}
public void setAccountType(String accountType) {
	this.accountType = accountType;
}
public String getDateOfBirth() {
	return dateOfBirth;
}
public void setDateOfBirth(String dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
}
public List<Order> getOrders() {
	return orders;
}
public void setOrders(List<Order> orders) {
	this.orders = orders;
}
@Override
public String toString() {
	return "Account [id=" + id + ", fullName=" + fullName + ", email=" + email + ", password=" + password
			+ ", accountType=" + accountType + ", dateOfBirth=" + dateOfBirth + "]";
}


}
