import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from "@ionic/angular";

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
  ) {
    this.subject = this.navParams.get('branch');
  }

  ngOnInit() {
  }

  close() {
    this.popoverController.dismiss();
  }

}
