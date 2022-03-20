import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './info-table/models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  getData() {
    return this.http.get<User[]>('http://localhost:3000/info');
  }

  removeUser() {}

  addUser() {}
}
