import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import {UserService} from '../../services/user.service.client'
import { User } from '../../models/user.model.client'
import { Router } from '@angular/router'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

	@ViewChild('f') homepageForm: NgForm;

	username: string;
	password: string;
	errorFlag: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
  }

  login() {
  	this.username = this.homepageForm.value.username;
  	this.password = this.homepageForm.value.password;

  	this.userService.findUserByCredentials(this.username, this.password).subscribe(
      (user: User) => {
        this.errorFlag= false;
        this.router.navigate(['profile', user._id]);
      },
      
      (error: any) => {
         this.errorFlag = true;
      }
    );
  }

}
