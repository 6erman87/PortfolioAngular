import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginUsuario } from '../model/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-buttonlogout',
  templateUrl: './buttonlogout.component.html',
  styleUrls: ['./buttonlogout.component.css']
})
export class ButtonlogoutComponent {

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){ }

  onLogOut(): void {
    this.tokenService.logout();
    window.location.reload();  
  }

}

// MODIFICACIÓN HECHA 24.04.23 (20:13hs) para que acepte 'onLogOut
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-buttonlogout',
//   templateUrl: './buttonlogout.component.html',
//   styleUrls: ['./buttonlogout.component.css']
// })
// export class ButtonlogoutComponent {

// }

