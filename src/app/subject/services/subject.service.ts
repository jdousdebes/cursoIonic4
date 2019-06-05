import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Storage} from '@ionic/storage';
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) { }

  getAvailableSubjects(headers: HttpHeaders) {
    return this.http
      .get(environment.api + 'subjects/all');
    // return this.http
    //   .get(environment.api + 'subjects/all', {headers});
  }

  getSubjectDetail(headers: HttpHeaders, subjectId) {
    return this.http
      .get(environment.api + 'subjects/' + subjectId);
    // return this.http
    //   .get(environment.api + 'subjects/' + subjectId, {headers});
  }

}
