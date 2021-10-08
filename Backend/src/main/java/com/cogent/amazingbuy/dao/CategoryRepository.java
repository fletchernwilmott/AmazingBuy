package com.cogent.amazingbuy.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cogent.amazingbuy.model.Category;

@CrossOrigin()
@RepositoryRestResource(collectionResourceRel = "Category", path = "category")
public interface CategoryRepository extends JpaRepository<Category, Long>{}
