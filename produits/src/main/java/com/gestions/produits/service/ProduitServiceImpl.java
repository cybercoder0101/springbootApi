package com.gestions.produits.service;

import com.gestions.produits.DTO.ProduitDTO;
import com.gestions.produits.entities.Categorie;
import com.gestions.produits.entities.Produit;
import com.gestions.produits.repositiries.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProduitServiceImpl implements ProduitService{
    @Autowired
    ProduitRepository produitRepository;
    public ProduitDTO saveProduit(Produit p) {
        return convertEntiyToDto(produitRepository.save(p));
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

    public ProduitDTO getProduit(Long id) {
        return convertEntiyToDto(produitRepository.findById(id).get());
    }

    public List<ProduitDTO> getAllProduits() {
        return produitRepository.findAll().stream()
                .map(this::convertEntiyToDto)
                .collect(Collectors.toList());
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

    @Override
    public ProduitDTO convertEntiyToDto(Produit p) {
//        classique
//        ProduitDTO produitDTO=new ProduitDTO();
//        produitDTO.setIdProduit(p.getIdProduit());
//        produitDTO.setNomProduit(p.getNomProduit());
//        produitDTO.setPrixProduit(p.getPrixProduit());
//        produitDTO.setCategorie(p.getCategorie());
//
//        return produitDTO;
        return ProduitDTO.builder()
                .idProduit(p.getIdProduit())
                .nomProduit(p.getNomProduit())
                .prixProduit(p.getPrixProduit())
                .categorie(p.getCategorie())
                .build();

    }
}
