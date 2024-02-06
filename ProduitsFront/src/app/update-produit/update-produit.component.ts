import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './update-produit.component.html',
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  Categories!: Categorie[];
  catID!: number;
  constructor(
    private produitservive: ProduitService,
    private activedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    //this.Categories = this.produitservive.listerCategories();
    this.currentProduit = this.produitservive.consulterProduit(
      this.activedRoute.snapshot.params['id']
    );
    // this.catID = this.currentProduit.categorie.idCat;
  }

  updateProduit() {
    //this.currentProduit.categorie = this.produitservive.consulterCategorie(this.catID);
    this.produitservive.updateProduit(this.currentProduit);
    this.retourHome();
  }

  retourHome() {
    this.route.navigate(['produits']);
  }
}
