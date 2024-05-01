import { Component, OnInit } from '@angular/core';
import { Consultation } from 'src/app/models/consultation.model';
import { ConsultationService } from 'src/app/services/consultation.service';

@Component({
  selector: 'app-consultations-list',
  templateUrl: './consultations-list.component.html',
  styleUrls: ['./consultations-list.component.css']
})
export class ConsultationsListComponent implements OnInit {

  consultations?: Consultation[];
  currentConsultation: Consultation = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: ConsultationService) { }

  ngOnInit(): void {
    this.retrieveConsultations();
  }

  retrieveConsultations(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data: any) => {
          this.consultations = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveConsultations();
    this.currentConsultation = {};
    this.currentIndex = -1;
  }

  setActiveConsultation(consultation: Consultation, index: number): void {
    this.currentConsultation = consultation;
    this.currentIndex = index;
  }

  removeAllConsultations(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.refreshList();
        },
        error: (e: any) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentConsultation = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data: any) => {
          this.consultations = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }

}