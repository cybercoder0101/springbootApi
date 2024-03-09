import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {LoaderComponent} from "../loader/loader.component";
import {LoginComponent} from "../login/login.component";

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
  constructor(
    private produitService: ProduitService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerProduit();
  }

  chargerProduit() {
    this.produitService.listeproduits().subscribe((prods) => {
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sur de la suppression');
    if (conf) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        this.chargerProduit();
      });
    }
  }

  goToProduit(p: Produit) {
    this.router.navigate(['/updateProduit', p.idProduit]);
  }
}
