import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { produitGuard } from '../guards/produit.guard';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur: number = 0;
  constructor(private authService: AuthService, private router: Router) {}
  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwtToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwtToken);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.erreur = 1;
      },
    });
  }

  ngOnInit(): void {}
}
