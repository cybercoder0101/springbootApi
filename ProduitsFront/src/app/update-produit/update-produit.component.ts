import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './update-produit.component.html',
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  constructor(
    private produitservive: ProduitService,
    private activedRoute: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.currentProduit = this.produitservive.consulterProduit(
      this.activedRoute.snapshot.params['id']
    );
  }
  updateProduit() {
    this.produitservive.updateProduit(this.currentProduit);
    this.route.navigate(['produits']);
  }
}
