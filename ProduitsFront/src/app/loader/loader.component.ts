import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { ProduitsComponent } from '../produits/produits.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  template: `<div class="alert alert-danger col-8" role="alert">
    <h2>Erreur 404</h2>
    <div>
      <a routerLink="produits">Menu</a>
    </div>
  </div>`,
  standalone: true,
  imports: [RouterLink, ProduitsComponent, CommonModule],
})
export class LoaderComponent {}
