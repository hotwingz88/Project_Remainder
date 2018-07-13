import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	jQuery(".note-list").sortable();
  }

}
