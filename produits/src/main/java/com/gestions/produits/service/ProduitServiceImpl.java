package com.gestions.produits.service;

import com.gestions.produits.DTO.ProduitDTO;
import com.gestions.produits.entities.Categorie;
import com.gestions.produits.entities.Produit;
import com.gestions.produits.repositiries.ProduitRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.modelmapper.spi.MatchingStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProduitServiceImpl implements ProduitService{
    @Autowired
    ProduitRepository produitRepository;
    @Autowired
    ModelMapper modelMapper;
    public ProduitDTO saveProduit(ProduitDTO p) {
        return convertEntiyToDto(produitRepository.save(converDtoToEntity(p)));
    }

    public ProduitDTO updateproduit(ProduitDTO p) {
        return convertEntiyToDto(produitRepository.save(converDtoToEntity(p)));
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
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
        ProduitDTO produitDTO = modelMapper.map(p,ProduitDTO.class);
//        classique
//        ProduitDTO produitDTO=new ProduitDTO();
//        produitDTO.setIdProduit(p.getIdProduit());
//        produitDTO.setNomProduit(p.getNomProduit());
//        produitDTO.setPrixProduit(p.getPrixProduit());
//        produitDTO.setCategorie(p.getCategorie());
//
//        return produitDTO;
//        return ProduitDTO.builder()
//                .idProduit(p.getIdProduit())
//                .nomProduit(p.getNomProduit())
//                .prixProduit(p.getPrixProduit())
//                .dateCreation(p.getDateCreation())
//                .categorie(p.getCategorie())
//                .build();
        return produitDTO;

    }

    @Override
    public Produit converDtoToEntity(ProduitDTO produitDTO) {
        Produit p=new Produit();
        p=modelMapper.map(produitDTO,Produit.class);
        return p;
//        Produit p=new Produit();
//        p.setIdProduit(produitDTO.getIdProduit());
//        p.setNomProduit(produitDTO.getNomProduit());
//        p.setPrixProduit(produitDTO.getPrixProduit());
//        p.setDateCreation(produitDTO.getDateCreation());
//        p.setCategorie(produitDTO.getCategorie());
//        return p;
    }
}
