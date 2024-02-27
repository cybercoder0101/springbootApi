import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur = 0;
  constructor(private authService: AuthService, private router: Router) {}
  onLoggedin() {
    console.log(this.user);
    let isValiduser: Boolean = this.authService.SignIn(this.user);
    if (isValiduser) {
      this.router.navigate(['/']);
    } else {
      this.erreur = 1;
    }
  }
  ngOnInit(): void {}
}
