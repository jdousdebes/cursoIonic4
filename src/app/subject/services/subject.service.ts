import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Storage} from '@ionic/storage';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  headers: any;

  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) {
    this.init();
  }

  async init() {
    const token = await this.storage.get('token');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    });
  }

  getAvailableSubjects() {
    const headers = this.headers;
    return this.http
      .get(environment.api + 'subjects/all', {headers});
  }

  getSubjectDetail(subjectId) {
    const headers = this.headers;
    return this.http
      .get(environment.api + 'subjects/' + subjectId + '/see', {headers});
  }

  joinSubject(subjectId) {
    const headers = this.headers;
    return this.http
      .post(environment.api + 'subjects/' + subjectId + '/join', {headers});
  }

}
