import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'produits',
    loadComponent: () =>
      import('./produits/produits.component').then(
        (module) => module.ProduitsComponent
      ),
  },
  {
    path: 'add-produit',
    loadComponent: () =>
      import('./add-produit/add-produit.component').then(
        (module) => module.AddProduitComponent
      ),
  },
  {
    path: '',
    redirectTo: 'produits',
    pathMatch: 'full',
  },
];
