import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm) {
    let reqBody = {
      name: formData.value?.name,
      email: formData.value?.email,
      password: formData.value?.passwords?.password,
    }
    this._auth.signup(reqBody);
  }
}
