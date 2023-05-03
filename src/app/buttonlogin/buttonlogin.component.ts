import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonlogin',
  templateUrl: './buttonlogin.component.html',
  styleUrls: ['./buttonlogin.component.css']
})
export class ButtonloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// CON EL LOGIN MODAL EN EL HTML
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { TokenService } from '../services/token.service';

// @Component({
//   selector: 'app-buttonlogin',
//   templateUrl: './buttonlogin.component.html',
//   styleUrls: ['./buttonlogin.component.css']
// })
// export class ButtonloginComponent implements OnInit {
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
//     this.router.navigate([''])
//   }  

// }