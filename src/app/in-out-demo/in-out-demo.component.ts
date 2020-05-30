import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-in-out-demo',
  templateUrl: './in-out-demo.component.html',
  styleUrls: ['./in-out-demo.component.css']
})
export class InOutDemoComponent implements OnInit {

  selectedUser: User;
  enableComponent = true;
  userInfo: User[] =[
    {
      id: 1,
      name: 'Annika',
       age: 20

    },
    {
      id: 2,
      name: 'William',
       age: 30

    },
    {
      id: 3,
      name: 'Janeway',
       age: 30

    },
    {
      id: 4,
      name: 'Chakotay',
       age: 30

    }
  ] ;
  constructor() { }

  ngOnInit() {
  }

  public setUser(selUser: User){
    this.selectedUser = selUser;
    this.enableComponent = false;
  }

  public updateUserArr(user){
    let index = this.userInfo.indexOf(this.selectedUser);
    this.userInfo[index] = user;
  }
}
