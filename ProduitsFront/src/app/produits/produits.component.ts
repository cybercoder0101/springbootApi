import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [NgFor, CommonModule, NgbToastModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css',
})
export class ProduitsComponent implements OnInit {
  show = false;
  produits?: Produit[];
  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.produits = this.produitService.listeproduits();
  }

  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sur de la suppression');
    if (conf) {
      this.produitService.supprimerProduit(p);
    }
  }

  goToProduit(p: Produit) {
    this.router.navigate(['/updateProduit', p.idProduit]);
  }
}
