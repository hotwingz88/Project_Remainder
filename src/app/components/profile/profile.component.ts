import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  editable: boolean;

  ngOnInit() {
  	this.editable = false;
  }

  edit() {
  	this.editable = true;
  }

  update() {
  	this.editable = false;
  }

}
