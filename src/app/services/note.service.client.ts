import { Injectable } from '@angular/core';
// import { User } from '../models/user.model.client';
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'
// import {SharedService} from './shared.service.client';
// import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class NoteService {

	baseUrl = environment.baseUrl;
	constructor(private http: Http) { }

	findNotesForUser(uid: string){
		const url = this.baseUrl + '/api/notes/' + uid;
   		return this.http.get(url).pipe(map(
       		(response: Response) => {
         		return response.json();
       		}
     	));
	}

}