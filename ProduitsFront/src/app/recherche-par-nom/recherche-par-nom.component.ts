import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [],
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css',
})
export class RechercheParNomComponent implements OnInit {
  Listeprods!: Produit[];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService
      .listeproduits()
      .subscribe((prods) => (this.Listeprods = prods));
  }

  rechercheNom() {}
}
