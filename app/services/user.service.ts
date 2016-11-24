import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

//Models
import { User } from '../models/user';

@Injectable()
export class UserService {
  private userUrl = 'http://192.168.178.31:3000/user';

  constructor(private http: Http) {  }

  signup(user: User): void {
    
  }
}
