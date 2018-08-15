import { Injectable } from '@angular/core';
// import { User } from '../models/user.model.client';
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'
import { Note } from '../models/note.model.client'
// import {SharedService} from './shared.service.client';
// import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class NoteService {

	baseUrl = environment.baseUrl;
	constructor(private http: Http) { }

	editNote(note: Note) {
		const url = this.baseUrl + '/api/edit';
		return this.http.put(url, note).pipe(map(
	        (response: Response) => {
	         	 return response.json();
	        }
	    ));
	}

	findNotesForUser(uid: string){
		const url = this.baseUrl + '/api/notes/' + uid;
   		return this.http.get(url).pipe(map(
       		(response: Response) => {
         		return response.json();
       		}
     	));
	}

	createNote(note: Note) {
		const url = this.baseUrl + '/api/note';
		return this.http.post(url, note).pipe(map(
       		(response: Response) => {
         		return response.json();
       		}
     	));
	}

	deleteNote(noteId: string) {
		const url = this.baseUrl + '/api/note/' + noteId;
		return this.http.delete(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
}
