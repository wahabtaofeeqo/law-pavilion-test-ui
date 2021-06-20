import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';

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

  constructor(private service: LoginService, private router: Router, private data: DataService) {
    let temp = window.location.href.split("/");
    this.page = temp[temp.length - 1];
  }

  ngOnInit(): void {
    this.user = this.service.getUser();
  }

  toggle() {
    this.overlay = true;
  }

  public logout() {
    this.service.logout();
    this.router.navigate(['/']);
  }

  public search(event: any) {
    this.data.setTerm(event);
  }

  goto(page: any) {
    this.page = page;
  }
}