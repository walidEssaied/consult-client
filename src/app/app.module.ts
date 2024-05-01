import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddConsultationComponent } from './components/add-consultation/add-consultation.component';
import { ConsultationDetailsComponent } from './components/consultation-details/consultation-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ConsultationsListComponent } from './components/consultation-list/consultations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddConsultationComponent,
    ConsultationDetailsComponent,
    ConsultationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
