package com.gestions.produits.repositiries;

import com.gestions.produits.entities.Categorie;
import com.gestions.produits.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
@RepositoryRestResource(path = " rest " )
public interface ProduitRepository extends JpaRepository <Produit, Long>{


    List<Produit> findByNomProduit(String nom);
    List<Produit> findByNomProduitContains(String nom);
    List<Produit> findByPrixProduit(Double prix);
    @Query("select p from Produit p where p.nomProduit like %?1 and p.prixProduit > ?2")
    List<Produit>findByNomPrix( String nom, Double prix);
    @Query("select p from Produit p where p.nomProduit like %:nom and p.prixProduit > :prix ")
    List<Produit> findByNomPrixx(@Param("nom") String nom, @Param("prix") Double prix);

    @Query("select p from Produit p where p.categorie =?1")
    List<Produit> findByCategorie(Categorie categorie);


    List<Produit> findByCategorieIdCat(Long id);

    List<Produit> findByOrderByNomProduitAsc();

    @Query("select p from Produit p order by p.nomProduit ASC, p.prixProduit DESC")
    List<Produit> trierOrderByNomASCprixDES();

    @Query("select p from Produit p order by p.nomProduit ASC, p.prixProduit ASC")
    List<Produit> trierOrderByNomprixASC();

    @Query("select p from Produit p order by p.nomProduit DESC, p.prixProduit DESC")
    List<Produit> trierOrderByNomprixDES();

    @Query("select p from Produit p order by p.nomProduit DESC, p.prixProduit ASC")
    List<Produit> trierOrderByNomDESCprixASC();
}

