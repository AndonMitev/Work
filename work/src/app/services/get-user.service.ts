import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewUserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  public fetchUserData(username: string): Observable<ViewUserModel> {
    return this.http.get<ViewUserModel>(`https://api.github.com/users/${username}`);
  }
}
