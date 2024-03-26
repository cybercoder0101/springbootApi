import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../config';
import { CategorieWrapper } from '../model/categorieWrapper.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits!: Produit[];
  apiURLCat: string = 'http://localhost:8080/produits/cat';

  constructor(private http: HttpClient, private authService: AuthService) {}

  listeproduits(): Observable<Produit[]> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpheaders = new HttpHeaders({ Authorization: jwt });
    const url = apiURL + '/all';
    return this.http.get<Produit[]>(url, { headers: httpheaders });
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post<Produit>(apiURL + '/addprod', prod, {
      headers: httpHeaders,
    });
  }
  supprimerProduit(id: number) {
    const url = `${apiURL}/delprod/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.delete(url, { headers: httpHeaders });
  }
  consulterProduit(id: number): Observable<Produit> {
    const url = `${apiURL}/getById/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<Produit>(url, { headers: httpHeaders });
  }
  updateProduit(prod: Produit): Observable<Produit> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.put<Produit>(apiURL + '/updateprod', prod, {
      headers: httpHeaders,
    });
  }
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => n1.idProduit - n2.idProduit);
  }

  listerCategories(): Observable<CategorieWrapper> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<CategorieWrapper>(this.apiURLCat, {
      headers: httpHeaders,
    });
  }

  consulterCategorie(id: number) {
    const url = `${apiURL}/cat/${id}`;
    return this.http.get<Categorie>(url);
  }

  RechercheParCategorie(idCat: number): Observable<Produit[]> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    const url = `${apiURL}/prodscat/${idCat}`;
    return this.http.get<Produit[]>(url, {headers:httpHeaders});
  }
  rechercheParNom(nom: string): Observable<Produit[]> {

    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    const url = `${apiURL}/prodByNom/${nom}`;
    return this.http.get<Produit[]>(url,{ headers: httpHeaders });
  }

  ajouterCategorie(cat: Categorie): Observable<Categorie> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post<Categorie>(this.apiURLCat, cat, {headers:httpHeaders});
  }

  supprimerCategorie(id: number) {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    const url = `${this.apiURLCat}/${id}`;
    return this.http.delete<Categorie>(url, {headers:httpHeaders});
  }
}
