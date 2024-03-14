package com.gestions.produits.restcontrollers;

import com.gestions.produits.DTO.ProduitDTO;
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

    @RequestMapping(path = "all",method = RequestMethod.GET)
    List<ProduitDTO> getAllProduits(){
        return produitService.getAllProduits();
    }

    @RequestMapping(value = "/getById/{id}", method = RequestMethod.GET)
    public ProduitDTO getProduitById(@PathVariable("id") Long id){
        return produitService.getProduit(id);
    }


    //@RequestMapping(method = RequestMethod.POST)
    @PostMapping("/addprod")
    public ProduitDTO createProduit(@RequestBody ProduitDTO produitDTO){
        return produitService.saveProduit(produitDTO);
    }

    @RequestMapping(path = "/updateprod",method=RequestMethod.PUT)
    public ProduitDTO updateProduit(@RequestBody ProduitDTO produitDTO){
        return produitService.updateproduit(produitDTO);
    }

    @RequestMapping(value="/delprod/{id}",method = RequestMethod.DELETE)
    public void deleteProduit(@PathVariable("id") Long id)
    {
        produitService.deleteproduitById(id);
    }

    @RequestMapping(value="/prodscat/{idCat}", method = RequestMethod.GET)
    List<Produit> getProduitsByCategorie(@PathVariable("idCat") Long id){
        return produitService.findByCategorieIdCat(id);
    }

    @RequestMapping(value = "/prodByNom/{nom}", method= RequestMethod.GET)
    List<Produit>getProduitByNom(@PathVariable("nom") String nom){
        return produitService.findByNomProduitContains(nom);
    }



}
