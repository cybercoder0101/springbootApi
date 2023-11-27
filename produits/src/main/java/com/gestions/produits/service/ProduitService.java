package com.gestions.produits.service;

import com.gestions.produits.DTO.ProduitDTO;
import com.gestions.produits.entities.Categorie;
import com.gestions.produits.entities.Produit;

import java.util.List;

public interface ProduitService {
    ProduitDTO saveProduit(ProduitDTO p);
    ProduitDTO updateproduit(ProduitDTO p);
    void deleteProduit(Produit p);
    void deleteproduitById(Long id);
    ProduitDTO getProduit(Long id);
    List<ProduitDTO> getAllProduits();
    List<Produit> findByNomProduit(String nom);
    List<Produit> findByNomProduitContains(String nom);
    List<Produit> findByNomPrix(String nom,Double prix);
    List<Produit> findByCategorie(Categorie categorie);
    List<Produit> findByCategorieIdCat(Long id);
    List<Produit> findByOrderByNomProduitAsc();
    List<Produit> trierOrderByNomASCprixDESC();
    public ProduitDTO convertEntiyToDto(Produit p);

    public Produit converDtoToEntity(ProduitDTO produitDTO);

}
