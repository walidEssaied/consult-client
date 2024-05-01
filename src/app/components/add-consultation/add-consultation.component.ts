import { Component } from '@angular/core';
import { Consultation } from 'src/app/models/consultation.model';
import { ConsultationService } from 'src/app/services/consultation.service';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.css']
})
export class AddConsultationComponent {

  consultation: Consultation = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private consultationService: ConsultationService) { }

  saveConsultation(): void {
    const data = {
      title: this.consultation.title,
      description: this.consultation.description
    };

    this.consultationService.create(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e: any) => console.error(e)
      });
  }

  newConsultation(): void {
    this.submitted = false;
    this.consultation = {
      title: '',
      description: '',
      published: false
    };
  }

}