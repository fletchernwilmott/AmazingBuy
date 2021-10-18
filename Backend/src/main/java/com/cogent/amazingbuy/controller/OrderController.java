package com.cogent.amazingbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.amazingbuy.dao.OrderRepository;
import com.cogent.amazingbuy.model.Order;

@CrossOrigin()
@RestController
public class OrderController {
	
	@Autowired
	OrderRepository orderRepository;
	
	// get all orders for seller
	@GetMapping("/orders")
	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}
	
	// get order by id
	@GetMapping("/orders/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable(value = "id") Long orderId) throws ResourceNotFoundException {
		Order o = orderRepository.findById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Couldn't find an order with that Id number"));
		return ResponseEntity.ok().body(o);
	}
	
	// we need to fix the relationship
	// create order
	@PostMapping("/orders")
	public String createOrder(@RequestBody Order o) {
		System.out.println(1);
		orderRepository.save(o);
		return "order created";
	}
	
	// update order // is shipped // is paid
	@PutMapping("/orders/{id}")
	public ResponseEntity<Order> updateOrder(@PathVariable(value = "id") Long orderId, @RequestBody Order orderDetails) throws ResourceNotFoundException {
		Order oldOrder = orderRepository.findById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Couldn't find an order with that Id number"));
		oldOrder.setId(orderDetails.getId());
		oldOrder.setPaid(orderDetails.isPaid());
		oldOrder.setShipped(orderDetails.isShipped());
		Order updatedOrder = orderRepository.save(oldOrder);
		return ResponseEntity.ok(updatedOrder);
	}
	
	// 
	// cancel order / delete
	@DeleteMapping("/orders/{id}")
	public String deleteOrder(@PathVariable(value = "id") Long orderId) throws ResourceNotFoundException {
		Order selectedOrder = orderRepository.findById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Couldn't find an order with that id"));
		orderRepository.delete(selectedOrder);
		return "order deleted";
	}

}
