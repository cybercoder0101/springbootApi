import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { DetailsCategorieComponent } from '../details-categorie/details-categorie.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-categorie',
  standalone: true,
  imports: [DetailsCategorieComponent, FormsModule],
  templateUrl: './liste-categorie.component.html',
  styleUrl: './liste-categorie.component.css',
})
export class ListeCategorieComponent implements OnInit {
  ListesCats!: Categorie[];
  updatedCat: Categorie = { idCat: 0, nomCat: '' };
  ajout: boolean = true;
  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {
    this.produitService
      .listerCategories()
      .subscribe(
        (categories) => (this.ListesCats = categories._embedded.categories)
      );
  }
  categorieUp(cat: Categorie) {
    this.produitService
      .ajouterCategorie(cat)
      .subscribe(() => this.chargerCategorie());
  }

  chargerCategorie() {
    this.produitService
      .listerCategories()
      .subscribe((res) => (this.ListesCats = res._embedded.categories));
  }

  categorieUpdate(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }
  supprimerCat(cat: Categorie) {
    this.produitService
      .supprimerCategorie(cat.idCat)
      .subscribe(() => this.chargerCategorie());
  }
}
