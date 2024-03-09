package com.gestions.produits.repositiries;

import com.gestions.produits.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String username);

}
