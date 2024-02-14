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
  updateCatId!: number;

  constructor(
    private produitservice: ProduitService,
    private activedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.produitservice.listerCategories().subscribe((cats) => {
      this.Categories = cats;
    });
    this.produitservice
      .consulterProduit(this.activedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod;
        this.updateCatId = this.currentProduit.categorie.idCat;
      });
  }

  updateProduit() {
    this.currentProduit.categorie = this.Categories.find(
      (cat) => cat.idCat == this.updateCatId
    )!;
    this.produitservice.updateProduit(this.currentProduit).subscribe((prod) => {
      this.retourHome();
    });
  }

  retourHome() {
    this.route.navigate(['produits']);
  }
}
