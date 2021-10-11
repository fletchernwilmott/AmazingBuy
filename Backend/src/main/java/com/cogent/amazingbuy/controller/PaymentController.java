package com.cogent.amazingbuy.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.amazingbuy.service.StripeClient;
import com.stripe.model.Charge;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    private StripeClient stripeClient;

    @Autowired
    PaymentController(StripeClient stripeClient) {
        this.stripeClient = stripeClient;
    }

    @PostMapping("/charge")
    public String chargeCard(HttpServletRequest request) throws Exception {
        String token = request.getHeader("token");
        Double amount = Double.parseDouble(request.getHeader("amount"));
        Charge c = this.stripeClient.chargeCreditCard(token, amount);
        System.out.println(c);
        return "Done!";
    }
}