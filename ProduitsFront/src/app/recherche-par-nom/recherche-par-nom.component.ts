import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css',
})
export class RechercheParNomComponent implements OnInit {
  Listeprods!: Produit[];
  nomProd!: string;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {}

  rechercheNom() {
    this.produitService.rechercheParNom(this.nomProd).subscribe((data) => {
      this.Listeprods = data;
    });
  }
}
