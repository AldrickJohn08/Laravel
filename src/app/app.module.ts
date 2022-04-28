import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { RecordsComponent } from './pages/records/records.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon';
// material button\
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ConsultancyComponent } from './pages/consultancy/consultancy.component';
import { TbiComponent } from './pages/tbi/tbi.component';
import { RdfComponent } from './pages/rdf/rdf.component';
import { NcComponent } from './pages/nc/nc.component';
import { SsfComponent } from './pages/ssf/ssf.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { HeiComponent } from './pages/hei/hei.component';
import { ResearchesComponent } from './pages/researches/researches.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MsmeComponent } from './pages/msme/msme.component';
import { PriorityComponent } from './pages/priority/priority.component';
import { EconomicComponent } from './pages/economic/economic.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { NgChartsModule } from 'ng2-charts';
import { LinechartComponent } from './charts/linechart/linechart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageroleComponent } from './pages/pagerole/pagerole.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AddprogramsdialogComponent } from './dialogs/addprogramsdialog/addprogramsdialog.component';
import { AddconsultancyComponent } from './pages/addconsultancy/addconsultancy.component';
import { AddtbiComponent } from './pages/addtbi/addtbi.component';
import { AddrdfComponent } from './pages/addrdf/addrdf.component';
import { AddnegosyoComponent } from './pages/addnegosyo/addnegosyo.component';
import { AddssfComponent } from './pages/addssf/addssf.component';
import { AddheiComponent } from './dialogs/addhei/addhei.component';
import { AddmsmeComponent } from './dialogs/addmsme/addmsme.component';
import { AddpriorityComponent } from './dialogs/addpriority/addpriority.component';
import { AddeconomicComponent } from './dialogs/addeconomic/addeconomic.component'

//import {BrowserAnimationsModule} from 
    //'@angular/platform-browser/animations';
//import { FormsModule } from '@angular/forms';
//import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    RecordsComponent,
    LoginComponent,
    ConsultancyComponent,
    TbiComponent,
    RdfComponent,
    NcComponent,
    SsfComponent,
    ProgramsComponent,
    HeiComponent,
    ResearchesComponent,
    AboutComponent,
    HomeComponent,
    MsmeComponent,
    PriorityComponent,
    EconomicComponent,
    PaymentComponent,
    LinechartComponent,
    ProfileComponent,
    PageroleComponent,
    AddprogramsdialogComponent,
    AddconsultancyComponent,
    AddtbiComponent,
    AddrdfComponent,
    AddnegosyoComponent,
    AddssfComponent,
    AddheiComponent,
    AddmsmeComponent,
    AddpriorityComponent,
    AddeconomicComponent
   
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgChartsModule,
    HttpClientModule,
    MatDialogModule


    


  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
