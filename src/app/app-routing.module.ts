import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultationComponent } from './components/add-consultation/add-consultation.component';
import { ConsultationsListComponent } from './components/consultation-list/consultations-list.component';
import { ConsultationDetailsComponent } from './components/consultation-details/consultation-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'consultations', pathMatch: 'full' },
  { path: 'consultations', component: ConsultationsListComponent },
  { path: 'consultations/:id', component: ConsultationDetailsComponent },
  { path: 'add', component: AddConsultationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }