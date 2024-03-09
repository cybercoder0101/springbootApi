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
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faCoffee, faUser} from '@fortawesome/free-solid-svg-icons';


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
    FontAwesomeModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isMenuCollapsed = true;
  constructor(public authService: AuthService, private router: Router) {}
facoff=faUser;
  ngOnInit(): void {
    let isLoggedIn: string ;
    let loggedUser: string;
    // @ts-ignore
    isLoggedIn = localStorage.getItem('isLoggedIn');
    // @ts-ignore
    loggedUser = localStorage.getItem('loggedUser');
    if (isLoggedIn != 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }
}
