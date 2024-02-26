import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-details-categorie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details-categorie.component.html',
  styleUrl: './details-categorie.component.css',
})
export class DetailsCategorieComponent implements OnInit {
  @Input()
  categorie!: Categorie;

  @Input()
  ajout!: boolean;

  @Output()
  categorieUp = new EventEmitter<Categorie>();

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {}

  saveCategorie() {
    this.categorieUp.emit(this.categorie);
  }
}
