package com.gestions.produits.service;

import com.gestions.produits.entities.Categorie;
import com.gestions.produits.entities.Produit;
import com.gestions.produits.repositiries.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProduitServiceImpl implements ProduitService{
    @Autowired
    ProduitRepository produitRepository;
    public Produit saveProduit(Produit p) {
        return produitRepository.save(p);
    }

    public Produit updateproduit(Produit p) {
        return produitRepository.save(p);
    }

    public void deleteProduit(Produit p) {
        produitRepository.delete(p);
    }

    public void deleteproduitById(Long id) {
         produitRepository.deleteById(id);
    }

    public Produit getProduit(Long id) {
        return produitRepository.findById(id).get();
    }

    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    @Override
    public List<Produit> findByNomProduit(String nom) {
        return produitRepository.findByNomProduit(nom);
    }

    @Override
    public List<Produit> findByNomProduitContains(String nom) {
        return produitRepository.findByNomProduitContains(nom);
    }

    @Override
    public List<Produit> findByNomPrix(String nom, Double prix) {
        return produitRepository.findByNomPrix(nom,prix);
    }

    @Override
    public List<Produit> findByCategorie(Categorie categorie) {
        return produitRepository.findByCategorie(categorie);
    }

    @Override
    public List<Produit> findByCategorieIdCat(Long id) {
        return produitRepository.findByCategorieIdCat(id);
    }

    @Override
    public List<Produit> findByOrderByNomProduitAsc() {
        return produitRepository.findByOrderByNomProduitAsc();
    }

    @Override
    public List<Produit> trierOrderByNomASCprixDESC() {
        return produitRepository.trierOrderByNomASCprixDES();
    }
}
