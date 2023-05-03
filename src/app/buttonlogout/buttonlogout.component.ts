import { Component } from '@angular/core';
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
    this.tokenService.logOut();
    window.location.reload();  
  }

}

// MODIFICACION EN LA QUE AGREGO LO SIGUIENTE:

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// // import { LoginUsuario } from '../model/login-usuario';
// import { AuthService } from '../services/auth.service';
// import { TokenService } from '../services/token.service';

// @Component({
//   selector: 'app-buttonlogout',
//   templateUrl: './buttonlogout.component.html',
//   styleUrls: ['./buttonlogout.component.css']
// })
// export class ButtonlogoutComponent implements OnInit {
//   isLogged = false;

//   constructor(private router: Router, private tokenService: TokenService) {

//   }
//   ngOnInit(): void {
//     if(this.tokenService.getToken()){
//       this.isLogged=true;
//     }else{
//       this.isLogged = false;
//     }
//   }

//   onLogOut():void{
//     this.tokenService.logout();
//     window.location.reload();
//   }

//   login(){
//     this.router.navigate(['/dashboard'])
//   }  

// }

