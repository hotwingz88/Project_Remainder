import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../services/user.service.client'
import { User } from '../../models/user.model.client'
import { Router } from '@angular/router'
import { SharedService} from '../../services/shared.service.client'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']     
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  username: string;
  password: string;
  verifyPassword: string;
  usernameError: boolean;
  passwordError: boolean;
  usernameTaken: boolean;


  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.passwordError = false;
    this.usernameError = false;
  }

  register(){

  	this.username = this.registerForm.value.username;
  	this.password = this.registerForm.value.password;
  	this.verifyPassword = this.registerForm.value.verifyPassword;

    // console.log(this.username)
    // console.log(this.password)
    // console.log(this.verifyPassword)

    if(this.password !== this.verifyPassword) {
      this.passwordError = true;
    } else {
      this.passwordError = false;
      this.userService.findUserByUsername(this.username).subscribe(
       (data: any) => {
          if(!data) {
            const newUser: User = {
              username: this.username,
              password: this.password,
              firstName: "",
              lastName: ""
            };
            this.userService.register(this.username, this.password).subscribe(
              (user: User) => {
                this.sharedService.user = user;
                this.router.navigate(['/profile/']);
              },
              (error: any) => {
                this.usernameError = true;
              }
            );
          } else {
            this.usernameError = true;
          }
    }
  );
  }
}

}