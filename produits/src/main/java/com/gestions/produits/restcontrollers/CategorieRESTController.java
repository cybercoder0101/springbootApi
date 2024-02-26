package com.gestions.produits.restcontrollers;

import com.gestions.produits.entities.Categorie;
import com.gestions.produits.repositiries.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cat")
@CrossOrigin("*")
public class CategorieRESTController {
    @Autowired
    CategorieRepository categorieRepository;
    @RequestMapping(method = RequestMethod.GET)
    public List<Categorie> getAllCategories(){
        return categorieRepository.findAll();
    }

    @RequestMapping(value="/{id}", method= RequestMethod.GET)
    public Categorie getCategorieById(@PathVariable("id")Long id){
        return categorieRepository.findById(id).get();
    }

    @RequestMapping(value = "/{id}", method=RequestMethod.DELETE)
    public void deleteCategorieById(@PathVariable("id")Long id){
        categorieRepository.deleteById(id);
    }
}
