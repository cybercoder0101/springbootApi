package com.gestions.produits.restcontrollers;

import com.gestions.produits.entities.User;
import com.gestions.produits.repositiries.UserRepository;
import com.gestions.produits.service.UserService;
import com.gestions.produits.service.register.RegistrationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserRestController {
    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @GetMapping("all")
    public List<User> getAllUsers(){
        return userService.findAllUsers();
    }

    @PostMapping("/register")
    public User register(RegistrationRequest request){
     return userService.registerUser(request);
    }

}
