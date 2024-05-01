import { Component, Input, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/services/consultation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/app/models/consultation.model';

@Component({
  selector: 'app-consultation-details',
  templateUrl: './consultation-details.component.html',
  styleUrls: ['./consultation-details.component.css']
})
export class ConsultationDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentConsultation: Consultation = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getConsultation(this.route.snapshot.params["id"]);
    }
  }

  getConsultation(id: string): void {
    this.consultationService.get(id)
      .subscribe({
        next: (data: any) => {
          this.currentConsultation = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentConsultation.title,
      description: this.currentConsultation.description,
      published: status
    };

    this.message = '';

    this.consultationService.update(this.currentConsultation.id, data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.currentConsultation.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e: any) => console.error(e)
      });
  }

  updateConsultation(): void {
    this.message = '';

    this.consultationService.update(this.currentConsultation.id, this.currentConsultation)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.message = res.message ? res.message : 'This consultation was updated successfully!';
        },
        error: (e: any) => console.error(e)
      });
  }

  deleteConsultation(): void {
    this.consultationService.delete(this.currentConsultation.id)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.router.navigate(['/consultations']);
        },
        error: (e: any) => console.error(e)
      });
  }

}