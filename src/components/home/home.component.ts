import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  user: any;
  overlay: boolean = false;
  page: string;

  constructor(private service: LoginService, private router: Router, private route: ActivatedRoute) {
    this.route.url.subscribe(val => {
      
    })
  }

  ngOnInit(): void {
    this.user = this.service.getUser();
  }

  toggle() {
    this.overlay = true;
  }
}