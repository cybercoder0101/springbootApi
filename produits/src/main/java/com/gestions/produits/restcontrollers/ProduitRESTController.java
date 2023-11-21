package com.gestions.produits.restcontrollers;

import com.gestions.produits.entities.Produit;
import com.gestions.produits.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProduitRESTController {
    @Autowired
    ProduitService produitService;

    @RequestMapping(method = RequestMethod.GET)
    List<Produit> getAllProduits(){
        return produitService.getAllProduits();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Produit getProduitById(@PathVariable("id") Long id){
        return produitService.getProduit(id);
    }
    @RequestMapping(method = RequestMethod.POST)
    public Produit createProduit(@RequestBody Produit p){
        return produitService.saveProduit(p);
    }

    @RequestMapping(method=RequestMethod.PUT)
    public Produit updateProduit(@RequestBody Produit p){
        return produitService.updateproduit(p);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void deleteProduit(@PathVariable("id") Long id)
    {
        produitService.deleteproduitById(id);
    }

    @RequestMapping(value="/prodscat/{idCat}", method = RequestMethod.GET)
    List<Produit> getProduitsByCategorie(@PathVariable("idCat") Long id){
        return produitService.findByCategorieIdCat(id);
    }



}
