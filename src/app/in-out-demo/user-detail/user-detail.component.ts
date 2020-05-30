import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { User } from '../user';



@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private _setUser: User;
  username: string;
  age: number;
  userid: number;

  @Input('selUser') set setUser(user: User) {
  
    if(user!==null && user!==undefined){
      
      this.username = user.name;
      this.userid = user.id;
      this.age = user.age;
    }
    
  }
  
  @Output() updateUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
    
  }

  saveUser(){
    let userDetail = new User();

    userDetail.name= this.username;
    userDetail.age = this.age;
    userDetail.id = this.userid;
    
    this.updateUser.emit(userDetail);

    this.username = '';
    this.userid = null;
    this.age = null;
    
  }

}
