import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  dataSource: any = [];

   displayedColumns: string[] = ['Profile', 'Name', 'Gender', 'Age', 'Phone', 'Address', 'Action'];

  constructor(private service: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadPatients();

    this.service.getTerm().subscribe(val => {
      if(val) {
        this.spinner.show();
        this.searchPatient(val);
      }
    })
  }

  loadPatients() {
    this.service.fetchPatients().subscribe(patients => {
      this.dataSource = patients;
    })
  }

  public searchPatient(name: string) {
    this.service.searchPatient(name).subscribe(response => {
      setTimeout(() => {
          this.dataSource = response;
          this.spinner.hide();
      }, 5000);
    })
  }
}