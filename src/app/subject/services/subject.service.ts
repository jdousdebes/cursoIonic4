import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  getAvailableSubjects() {
    return this.http.get(environment.api + 'subjects/all');
  }

  getSubjectDetail(subjectId) {
    return this.http.get(environment.api + 'subjects/' + subjectId + '/see');
  }

  joinSubject(subjectId) {
    return this.http.post(environment.api + 'subjects/' + subjectId + '/join', {});
  }
}
