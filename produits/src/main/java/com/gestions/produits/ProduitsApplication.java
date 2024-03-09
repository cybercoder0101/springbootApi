package com.gestions.produits;

import com.gestions.produits.entities.Categorie;
import com.gestions.produits.entities.Produit;
import com.gestions.produits.entities.Role;
import com.gestions.produits.entities.User;
import com.gestions.produits.service.UserService;
import jakarta.annotation.PostConstruct;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ProduitsApplication  implements CommandLineRunner {
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;
	@Autowired
	UserService userService;
	public static void main(String[] args) {
		SpringApplication.run(ProduitsApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfiguration.exposeIdsFor(Produit.class, Categorie.class);
	}
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

/*	@PostConstruct
	void init_users() {
//add roles
		userService.addRole(new Role(null,"ADMIN"));
		userService.addRole(new Role(null,"USER"));
		userService.saveUser(new User(null,"admin","123",true,null));
		userService.saveUser(new User(null,"salif","123",true,null));
		userService.saveUser(new User(null,"c18","123",true,null));

//ajouter les rôles aux users
		userService.addRoleToUser("admin", "ADMIN");
		userService.addRoleToUser("admin", "USER");
		userService.addRoleToUser("salif", "USER");
		userService.addRoleToUser("c18", "USER");
	}*/


}
