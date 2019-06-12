import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  subject: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private subjectService: SubjectService) {}

  ngOnInit() {
    const subjectId = this.route.snapshot.paramMap.get('subjectId');
    this.subjectService.getSubjectDetail(subjectId).subscribe((response: any) => {
      this.subject = response.data;
      console.log('this.subject', this.subject);
    });
  }

  joinSubject(subjectId) {
    this.subjectService.joinSubject(subjectId).subscribe((response: any) => {
      this.subject = response.data;
    });
  }
}
