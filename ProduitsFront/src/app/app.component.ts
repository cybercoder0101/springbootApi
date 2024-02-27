import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  NgbAccordionModule,
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterLink,
    RouterOutlet,
    NgbDropdownModule,
    ProduitsComponent,
    AddProduitComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isMenuCollapsed = true;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let isLoggedIn: string | null;
    let loggedUser: string | null;
    isLoggedIn = localStorage.getItem('isLoggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isLoggedIn != 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }
}
