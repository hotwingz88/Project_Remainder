import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service.client'
import { Note } from '../../models/note.model.client'
import { SharedService } from '../../services/shared.service.client'

declare var jQuery: any;


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

	notes: Note[];
	uid: string;
  new: string;
  newDescription: string;

  constructor(private noteService: NoteService, private sharedService: SharedService) { }

   editable: boolean;

  ngOnInit() {
  	this.uid = this.sharedService.user._id;
  	jQuery(".note-list").sortable();
  	this.noteService.findNotesForUser(this.uid).subscribe(
  		(notes) => {
  			this.notes = notes;
  		}
  	)
  }

  create(){
    console.log("creating");
  }

  convertDate(date) {
    return new Date(date);
  }

}
