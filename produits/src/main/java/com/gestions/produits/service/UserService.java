package com.gestions.produits.service;

import com.gestions.produits.entities.Role;
import com.gestions.produits.entities.User;

public interface UserService  {
    User saveUser(User user);
    User findUserByUserName(String username);
    Role addRole(Role role);
    User addRoleToUser(String username, String rolename);
}
