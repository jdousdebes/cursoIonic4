import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-my-subjects',
  templateUrl: './my-subjects.page.html',
  styleUrls: ['./my-subjects.page.scss'],
})
export class MySubjectsPage implements OnInit {
  subjects: any[];

  mySubjectsOnly = false;

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.check();
  }

  changeSubjects() {
    console.log('mySubjectsOnly: ', this.mySubjectsOnly);
    this.check();
  }

  check() {
    if (this.mySubjectsOnly) {
      this.subjectService.getSubjects().subscribe((response: any) => {
        this.subjects = response.data;
      });
    } else {
      this.subjectService.getAvailableSubjects().subscribe((response: any) => {
        this.subjects = response.data;
      });
    }
  }
}
