import { Component, OnInit } from '@angular/core';
import { Authenticate } from "../../../../../libs/data-models/src/lib/data-models.module";
import { AuthService } from "../../../../../libs/auth/src/lib/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public username: any;
  constructor(authService: AuthService) {
    this.username = authService.userName;
  }

  ngOnInit() {


  }
}
