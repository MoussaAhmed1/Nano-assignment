import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../../environments/environment.development';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) {}

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrl}/users`)
  }

  signup(data: User):Observable<User|string> {
    return this.getUsers().pipe(
      map((usersList) => usersList.find((user) => user.email === data.email)),
      switchMap((existingUser) => {
        if (existingUser) {
          return throwError(() => new Error('User already exists'));
        }
        return this.http.post<User>(`${environment.baseUrl}/users`, data);
      })
    );
  }
 
}
