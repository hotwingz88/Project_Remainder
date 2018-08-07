import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../services/user.service.client'
import { User } from '../../models/user.model.client'
import { NgForm } from '@angular/forms'
import { SharedService} from '../../services/shared.service.client'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm: NgForm;

    user: User = {
      _id: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email:""
    };
    uid: string;
     _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    oldUsername: string;
    usernameTaken: boolean;
    submitSuccess: boolean;
    aUser: User;

  constructor(private router: Router,private sharedService: SharedService,private activatedRoute: ActivatedRoute, private userService: UserService) { }

  editable: boolean;

  ngOnInit() {
  	this.editable = false;
    this.usernameTaken = false;
    this.submitSuccess = false;
    this.user = this.sharedService.user;
    this.uid = this.user._id;
    this.username = this.user.username;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.oldUsername = this.user.username;
  }

  edit() {
  	this.editable = true;
  }

    update(){
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;

       //check if the new username was taken or the username was not changed
       this.userService.findUserByUsername(this.username).subscribe(
           (user:User) => {
              this.aUser = user;
            }
        );
        if(this.aUser && this.oldUsername !== this.username){
                 this.usernameTaken = true;
                 this.submitSuccess = false;
        } else {
                  const updatedUser: User = {
                     _id: this.user._id,
                     username: this.username,
                     password: this.user.password,
                     firstName: this.firstName,
                     lastName: this.lastName,
                     email: this.email
                  };
                  this.userService.updateUser(this.uid, updatedUser).subscribe(
                   (res: any) => {
                     this.sharedService.user = updatedUser;
                     this.ngOnInit();
                     this.submitSuccess = true;
                   }
                  );
            }
  }
       
  logout() {
    this.userService.logout().subscribe(
      (data: any) => {
        this.router.navigate(['homepage'])
      }
    );
  }

}