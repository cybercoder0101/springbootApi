package com.gestions.produits;

import com.gestions.produits.entities.Categorie;
import com.gestions.produits.entities.Produit;
import com.gestions.produits.repositiries.ProduitRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
class ProduitsApplicationTests {

	@Autowired
	private ProduitRepository produitRepository;




	@Test
	public void testCreateProduit(){
		Produit prod=new Produit("trottinette electricque",1775.500,new Date());

		produitRepository.save(prod);
	}
	@Test
	public void testFindProduit(){
		Produit p=produitRepository.findById(2L).get();
		System.out.println(p);
	}

	@Test
	public void testUpdateProduit(){
		Produit p=produitRepository.findById(2L).get();
		p.setPrixProduit(2000.00);
		produitRepository.save(p);
		System.out.println(p);
	}
	@Test
	public void testDeleteProduit(){
	produitRepository.deleteById(5L);
	}
	@Test
	public void testFindAllproduit(){
		List<Produit> prods=produitRepository.findAll();
		for (Produit p: prods) {
			System.out.println(p);

		}

	}
	@Test
	public void testFindProduitByNom(){
		List<Produit> prods=produitRepository.findByNomProduit("Asus Rog");
		for (Produit p:prods){
		System.out.println(p);
		}
	}

	@Test
	public void testFindProduitByNomContains(){
		List<Produit> prods=produitRepository.findByNomProduitContains("a");
		for (Produit p:prods){
			System.out.println(p);
		}
	}

	@Test
	public void testFindProduitByPrix(){
		List<Produit> prods=produitRepository.findByPrixProduit(2200.5);
		for (Produit p:prods){
			System.out.println(p);
		}
	}

	@Test
	public void testFindProduitByNomPrix(){
		List<Produit> prods=produitRepository.findByNomPrixx("ps4", 3000.5);
		for (Produit p:prods){
			System.out.println(p);
		}
	}


	@Test
	public void testFindProduitByCategorie(){
		Categorie cat = new Categorie();
		cat.setIdCat(1L);

		List<Produit> prods =produitRepository.findByCategorie(cat);

		for(Produit p:prods){
			System.out.println(p);
		}
	}

	@Test
	public void testFindProduitByIdCategorie(){
		Categorie cat = new Categorie();
		cat.setIdCat(1L);


		List<Produit> prods =produitRepository.findByCategorieIdCat(2L);

		for(Produit p:prods){
			System.out.println(p);
		}
	}


	@Test
	public void testFindByOrderAS(){


		List<Produit> prods =produitRepository.findByOrderByNomProduitAsc();

		for(Produit p:prods){
			System.out.println(p);
		}
	}

	@Test
	public void testFindProduitByNomASCprixDES(){



		List<Produit> prods =produitRepository.trierOrderByNomASCprixDES();

		for(Produit p:prods){
			System.out.println(p);
		}
	}


	@Test
	public void testFindProduitByNomprixASC(){



		List<Produit> prods =produitRepository.trierOrderByNomprixASC();

		for(Produit p:prods){
			System.out.println(p);
		}
	}

	@Test
	public void testFindProduitByNomprixDESC(){



		List<Produit> prods =produitRepository.trierOrderByNomprixDES();

		for(Produit p:prods){
			System.out.println(p);
		}
	}

	@Test
	public void testFindProduitByNomDESCprixASC(){



		List<Produit> prods =produitRepository.trierOrderByNomDESCprixASC();

		for(Produit p:prods){
			System.out.println(p);
		}
	}




}
