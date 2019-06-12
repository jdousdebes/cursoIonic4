import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-my-subjects',
  templateUrl: './my-subjects.page.html',
  styleUrls: ['./my-subjects.page.scss'],
})
export class MySubjectsPage implements OnInit {
  subjects: any[];

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.subjectService.getSubjects().subscribe((response: any) => {
      this.subjects = response.data;
    });
  }
}
