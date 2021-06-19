import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  dataSource: any = [];

   displayedColumns: string[] = ['Profile', 'Name', 'Gender', 'Age', 'Phone', 'Address', 'Action'];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.service.fetchUsers().subscribe(users => {
      this.dataSource = users;
    })
  }
}