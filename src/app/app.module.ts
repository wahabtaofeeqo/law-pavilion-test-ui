import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, Components } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'; 


import { NgxFileDropModule } from 'ngx-file-drop';

import { HttpClientModule } from '@angular/common/http';

// Services
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';

//
import { Step1Component } from '../components/steps/step1/step1.component';
import { Step2Component } from '../components/steps/step2/step2.component';
import { Step3Component } from '../components/steps/step3/step3.component';
import { Step4Component } from '../components/steps/step4/step4.component';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    NgxFileDropModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [LoginService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
