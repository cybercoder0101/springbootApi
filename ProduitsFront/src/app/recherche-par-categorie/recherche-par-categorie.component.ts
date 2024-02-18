import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { CategorieWrapper } from '../model/categorieWrapper.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-categorie.component.html',
  styleUrl: './recherche-par-categorie.component.css',
})
export class RechercheParCategorieComponent implements OnInit {
  Listeproduits!: Produit[];
  iDcatSelected!: number;
  cats!: Categorie[];
  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {
    this.produitService
      .listerCategories()
      .subscribe((category) => (this.cats = category._embedded.categories));
  }

  RechercheBycat() {
    console.log('Recherche par catégorie : ' + this.iDcatSelected);
    this.produitService
      .RechercheParCategorie(this.iDcatSelected)
      .subscribe((prodbycat) => {
        this.Listeproduits = prodbycat;
      });
  }
}
