import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Password Toggle
  hide: boolean = true;

  loginForm = this.builder.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', Validators.required]
  });

  constructor(private builder: FormBuilder, 
    private service: LoginService, 
    private router: Router,
    private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
  }

  login(data: any) {
    this.spinner.show();
    this.service.login(data.email, data.password).subscribe(response => {
      if(response) {
        setTimeout(() => {
          this.spinner.hide();
          this.service.setUser(response[0]);
          this.router.navigate(['/']);
        }, 5000)
      }
    });
  }
}