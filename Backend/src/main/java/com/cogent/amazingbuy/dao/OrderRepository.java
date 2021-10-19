package com.cogent.amazingbuy.dao;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.cogent.amazingbuy.model.Account;
import com.cogent.amazingbuy.model.Order;
import com.cogent.amazingbuy.model.Product;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "orders", path = "order")
public interface OrderRepository extends JpaRepository<Order, Long> {
	Page<Order> findByAccountId(@RequestParam("id") Long id, Pageable pageable);
	@Query
	(value="FROM Order o WHERE o.timestamp= :timestamp")
	public Optional<Order> findOrderByTimeStamp(@Param("timestamp") String timestamp);
	
}
