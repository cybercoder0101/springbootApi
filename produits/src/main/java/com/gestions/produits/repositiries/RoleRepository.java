package com.gestions.produits.repositiries;

import com.gestions.produits.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;



public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByRole(String role);

}