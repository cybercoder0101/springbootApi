package com.gestions.produits.service;

import com.gestions.produits.entities.Role;
import com.gestions.produits.entities.User;
import com.gestions.produits.service.register.RegistrationRequest;

import java.util.List;

public interface UserService  {
    User saveUser(User user);
    User findUserByUsername(String username);
    Role addRole(Role role);
    User addRoleToUser(String username, String rolename);
    List<User> findAllUsers();
    User registerUser(RegistrationRequest request);
}
