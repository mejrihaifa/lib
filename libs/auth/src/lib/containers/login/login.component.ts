import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micro-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  login(authenticate: any) {
    console.log(authenticate);
  }
}
