import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteService } from '../../services/note.service.client'
import { Note } from '../../models/note.model.client'
import { SharedService } from '../../services/shared.service.client'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

declare var jQuery: any;


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @ViewChild('f') noteForm: NgForm;

	notes: Note[];
	uid: string;
  new: string;
  newDescription: string;
  description: string;
  editNote: string;
  textEdit: string;
  deleteNote: string;
  note: Note = {
    _id: "",
    description: "",
    developerId: ""
  };

  editDescription: string;

  SaveNotes: string;
  


  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

   editable: boolean;

  ngOnInit() {
  	this.uid = this.sharedService.user._id;
  	jQuery(".note-list").sortable();
  	this.noteService.findNotesForUser(this.uid).subscribe(
  		(notes) => {
  			this.notes = notes;
        this.newDescription = "";
  		}
  	)
  }
// this function will allow you to create new notes so you will never "forget" what you need to do today.
  createnew(){
    const newNote = {
      developerId: this.uid,
      description: this.newDescription
    }
    
    this.noteService.createNote(newNote).subscribe(
       (note: Note) => {
         this.ngOnInit();
       }
    )
  }
 // this function will display the current date and time after you submit your note
  convertDate(date) {
    return new Date(date);
  }
// this function will allow you to save your current note after you've edited it. 
  SaveNote(note) {
    this.SaveNotes = note.save
    this.newDescription = note.save
  }    
  // this function will delete the current note on screen
  delete(noteId: string){
    this.noteService.deleteNote(noteId).subscribe(
          (data: any) => {
            this.noteService.findNotesForUser(this.uid).subscribe(
                  (notes) => {
                    this.notes = notes;
                    this.newDescription = "";
                  }
             )
          }
      );
    }

    selectNote(note) {
      this.editDescription = note.description
    }

  }
