import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Authenticate } from "../../../../../data-models/src/lib/authenticate";

@Component({
  selector: 'micro-frontend-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor() {}
  @Output() submit = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
  ngOnInit(): void {}
}
