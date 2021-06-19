import {ViewChild, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

import { Step1Component } from '../steps/step1/step1.component';
import { Step2Component } from '../steps/step2/step2.component';
import { Step3Component } from '../steps/step3/step3.component';
import { Step4Component } from '../steps/step4/step4.component';

import Swal from 'sweetalert2';

import { MatStepper } from '@angular/material/stepper';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  personalDataGroup: FormGroup;
  otherDataGroup: FormGroup;
  nokDataGroup: FormGroup;
  hmoDataGroup: FormGroup;

  public files: NgxFileDropEntry[] = [];

  constructor(private builder: FormBuilder, private service: DataService) {
    this.personalDataGroup = this.builder.group({
      title: ['', Validators.required],
      surname: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.otherDataGroup = this.builder.group({
      ethnicity: ['', Validators.required],
      religion: ['', Validators.required],
      status: ['', Validators.required],
      occupation: ['', Validators.required],
      bgroup: ['', Validators.required],
      type: ['', Validators.required],
      nationality: ['', Validators.required],
      state: ['', Validators.required],
      local: ['', Validators.required],
      sor: ['', Validators.required]
    });

    this.nokDataGroup = this.builder.group({
      fullname: ['', Validators.required],
      relationship: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.hmoDataGroup = this.builder.group({
      billing: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }


  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;

    // 
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }

  public addPatient() {
    
    const patent = {
      personal: this.personalDataGroup.value,
      other: this.otherDataGroup.value,
      nok: this.nokDataGroup.value,
      hmo: this.hmoDataGroup.value
    }

    this.service.createPatient(patent).subscribe(response => {
      Swal.fire('Patient Registered');
      this.stepper.reset();
    })
  }
}
