import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-available-subjects',
  templateUrl: './available-subjects.page.html',
  styleUrls: ['./available-subjects.page.scss'],
})
export class AvailableSubjectsPage implements OnInit {
  subjects: any;

  constructor(private subjectService: SubjectService) {}

  async ngOnInit() {
    this.subjectService.getAvailableSubjects().subscribe((response: any) => {
      this.subjects = response.data;
    });
  }
}
