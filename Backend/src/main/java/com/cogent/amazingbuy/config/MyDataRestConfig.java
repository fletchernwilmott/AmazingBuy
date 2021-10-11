package com.cogent.amazingbuy.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.cogent.amazingbuy.model.Category;
import com.cogent.amazingbuy.model.Product;



@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		Class[] domainTypes = {Product.class, Category.class};
		config.exposeIdsFor(domainTypes);
	}

	


}
