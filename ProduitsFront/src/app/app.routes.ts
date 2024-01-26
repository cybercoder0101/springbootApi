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
    path: 'updateProduit/:id',
    loadComponent: () =>
      import('./update-produit/update-produit.component').then(
        (module) => module.UpdateProduitComponent
      ),
  },

  {
    path: '',
    redirectTo: 'produits',
    pathMatch: 'full',
  },
];
