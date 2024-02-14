import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits!: Produit[];

  /* categories: Categorie[]; */

  constructor(private http: HttpClient) {}

  listeproduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(apiURL);
  }
  ajouterProduit(prod: Produit) {
    return this.http.post<Produit>(apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterProduit(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }
  updateProduit(p: Produit): Observable<Produit> {
    return this.http.put<Produit>(apiURL, p, httpOptions);
  }
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => n1.idProduit - n2.idProduit);
  }
  listerCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(apiURL + '/cat');
  }

  consulterCategorie(id: number) {
    const url = `${apiURL}+"/cat/"+${id}`;
    return this.http.get<Categorie>(url);
  }
}
