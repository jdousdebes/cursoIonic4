import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../services/subject.service';
import {Storage} from '@ionic/storage';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-available-subjects',
  templateUrl: './available-subjects.page.html',
  styleUrls: ['./available-subjects.page.scss'],
})
export class AvailableSubjectsPage implements OnInit {

  subjects: any;

  constructor(
    private subjectService: SubjectService,
    private storage: Storage,
  ) { }

  async ngOnInit() {
    const token = await this.storage.get('token');
    console.log('token: ', token);
    const headers = new HttpHeaders().set('Authorization', token ? `Bearer ${token.token}` : null);

    this.subjectService.getAvailableSubjects()
      .subscribe((response: any) => {
        console.log('responsePage: ', response.data);
        this.subjects = response.data;
      });
  }

  seeSubjectDetail(subject: any) {
    console.log('seeSubjectDetail: ', subject);

  }

}
