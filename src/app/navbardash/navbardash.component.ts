
import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-navbardash',
  templateUrl: './navbardash.component.html',
  styleUrls: ['./navbardash.component.css']
})

export class NavbardashComponent {


  constructor(private tokenService: TokenService) { }


  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}  