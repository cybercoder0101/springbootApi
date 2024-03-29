import { Routes, CanActivateFn } from '@angular/router';
import { produitGuard } from './guards/produit.guard';


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
    canActivate: [produitGuard],
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
    path: 'rechercheParNom',
    loadComponent: () =>
      import('./recherche-par-nom/recherche-par-nom.component').then(
        (module) => module.RechercheParNomComponent
      ),
  },
  {
    path: 'ListeCategories',
    loadComponent: () =>
      import('./liste-categorie/liste-categorie.component').then(
        (module) => module.ListeCategorieComponent
      ),
  },
  {
    path: 'detailCategorie',
    loadComponent: () =>
      import('./details-categorie/details-categorie.component').then(
        (module) => module.DetailsCategorieComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((module) => module.LoginComponent),
  },
  {
    path:'register',
    loadComponent:()=>
      import('./register/register.component').then((module)=>module.RegisterComponent)
  },

  {
    path: '',
    redirectTo: 'produits',
    pathMatch: 'full',
  },
];
