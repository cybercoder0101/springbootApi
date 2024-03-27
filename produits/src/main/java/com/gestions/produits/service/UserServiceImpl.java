package com.gestions.produits.service;


import com.gestions.produits.entities.Role;
import com.gestions.produits.entities.User;
import com.gestions.produits.repositiries.RoleRepository;
import com.gestions.produits.repositiries.UserRepository;
import com.gestions.produits.service.exceptions.EmailAlreadyExistsException;
import com.gestions.produits.service.register.RegistrationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserServiceImpl implements  UserService{
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User saveUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return  userRepository.save(user);
    }

    @Override
    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }


    @Override
    public Role addRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public User addRoleToUser(String username, String rolename) {
        User usr=userRepository.findByUsername(username);
        Role role=roleRepository.findByRole(rolename);
        usr.getRoles().add(role);

        return usr ;
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User registerUser(RegistrationRequest request) {
        Optional<User> OptionalUser= userRepository.findByEmail(request.getEmail());
        if(OptionalUser.isPresent())
            throw new EmailAlreadyExistsException("Email deja existant");
        User newuser = new User();
        newuser.setUsername(request.getUsername());
        newuser.setEmail(request.getEmail());
        newuser.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));
        newuser.setEnabled(false);
        userRepository.save(newuser);
        Role r= roleRepository.findByRole("USER");
        List<Role> roles =new ArrayList<>();
        roles.add(r);
        newuser.setRoles(roles);
        return userRepository.save(newuser);
    }
}
