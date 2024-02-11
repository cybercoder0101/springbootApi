import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits!: Produit[];
  /* categories: Categorie[]; */
  apiURL: string = 'http://localhost:8080/produits/api';

  constructor(private http: HttpClient) {
    // this.categories = [
    //   { idCat: 1, nomCat: 'PC' },
    //   { idCat: 2, nomCat: 'Imprimante' },
    // ];
    /*  this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC Asus',
        prixProduit: 3000.6,
        dateCreation: new Date('01/14/2011'),
        categorie: { idCat: 1, nomCat: 'PC' },
      },
      {
        idProduit: 2,
        nomProduit: 'Imprimante Epson',
        prixProduit: 450,
        dateCreation: new Date('12/17/2010'),
        categorie: { idCat: 2, nomCat: 'Imprimante' },
      },
      {
        idProduit: 3,
        nomProduit: 'Tablette Samsung',
        prixProduit: 900.123,
        dateCreation: new Date('02/20/2020'),
        categorie: { idCat: 1, nomCat: 'PC' },
      },
    ]; */
  }

  listeproduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }
  ajouterProduit(prod: Produit) {
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterProduit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }
  updateProduit(p: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiURL, p, httpOptions);
  }
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => n1.idProduit - n2.idProduit);
  }
  /*  listerCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    return this.listerCategories().find((c) => c.idCat == id)!;
  } */
}
