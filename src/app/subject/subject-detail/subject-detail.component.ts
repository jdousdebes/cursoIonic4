import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss'],
})
export class SubjectDetailComponent implements OnInit {

  subject: any;

  constructor(
    private navParams: NavParams,
    private popoverController: PopoverController,
    private subjectService: SubjectService,
  ) { }

  async ngOnInit() {
    this.subject = this.navParams.get('subject');

    this.subjectService.getSubjectDetail(null, this.subject.id)
      .subscribe((response: any) => {
        console.log('response: ', response);
        this.subject = response.subject;
      });
  }


  closePopover() {
    this.popoverController.dismiss();
  }

}
