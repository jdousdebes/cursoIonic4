import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../services/subject.service";
import {Storage} from "@ionic/storage";
import {HttpHeaders} from "@angular/common/http";
import {PopoverController} from "@ionic/angular";
import {SubjectDetailComponent} from "../../shared/components/subject-detail/subject-detail.component";

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
    private popoverController: PopoverController,
  ) { }

  async ngOnInit() {
    const token = await this.storage.get('token');
    const headers = new HttpHeaders().set('Authorization', token ? `Bearer ${token.token}` : null);

    this.subjectService.getAvailableSubjects(headers)
      .subscribe((response: any) => {
        console.log('response: ', response.data);
        this.subjects = response.data;
      });
  }

  async seeSubjectDetail(subject: any) {
    console.log('seeSubjectDetail: ', subject);
    const popover = await this.popoverController.create({
      component: SubjectDetailComponent,
      componentProps: {
        subject: subject,
      },
    });

    return await popover.present();
  }

}
