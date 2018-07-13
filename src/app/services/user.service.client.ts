import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class UserService {
	
	baseUrl = environment.baseUrl;
	constructor(private http: Http) { }

	findUserByCredentials(username: string, password: string) { 
    const url =  this.baseUrl + '/api/user?username='+username + '&password=' + password;
    return this.http.get(url).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ))
  }

}