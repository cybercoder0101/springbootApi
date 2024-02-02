import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Produit } from '../model/produit.model';
import { ProduitsComponent } from '../produits/produits.component';
import { ProduitService } from '../services/produit.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [CommonModule, FormsModule, ProduitsComponent, NgbAlertModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css',
})
export class AddProduitComponent {
  constructor(private produitService: ProduitService, private route: Router) {}
  newProduit = new Produit();
  message: string = '';
  addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
    this.message = this.newProduit.nomProduit + ' ajouté avec succes';
  }
  retourHome() {
    this.route.navigate(['produits']);
  }
}
