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
    path: 'rechercheParcategorie',
    loadComponent: () =>
      import(
        './recherche-par-categorie/recherche-par-categorie.component'
      ).then((module) => module.RechercheParCategorieComponent),
  },

  {
    path: '',
    redirectTo: 'produits',
    pathMatch: 'full',
  },
];
