package com.cogent.amazingbuy.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cogent.amazingbuy.model.Order;

@CrossOrigin
public interface OrderRepository extends JpaRepository<Order, Long> {

}
