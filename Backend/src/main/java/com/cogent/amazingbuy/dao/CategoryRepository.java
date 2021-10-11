package com.cogent.amazingbuy.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.cogent.amazingbuy.model.Category;
import com.cogent.amazingbuy.model.Product;



@CrossOrigin()
@RepositoryRestResource(collectionResourceRel = "Category", path = "categories")
public interface CategoryRepository extends JpaRepository<Category, Long>{
}
