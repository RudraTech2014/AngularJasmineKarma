import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutDemoComponent } from './in-out-demo.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { User } from './user';

describe('Testing @Input & @Output', () => {
  let userListcomponent: InOutDemoComponent;
  let userDetailComponent: UserDetailComponent;

  let listfixture: ComponentFixture<InOutDemoComponent>;
  let detailFixture: ComponentFixture<UserDetailComponent>;

  let listDebugEl: DebugElement;
  let detailDebugEl: DebugElement;

  let user: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InOutDemoComponent, UserDetailComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    listfixture = TestBed.createComponent(InOutDemoComponent);
    userListcomponent = listfixture.componentInstance;

    listDebugEl = listfixture.debugElement;
     user = new User();
    user.name = 'Aanika';
    user.id = 1;
    user.age = 30;
    userListcomponent.selectedUser = user;
    listfixture.detectChanges();

    detailFixture = TestBed.createComponent(UserDetailComponent);
    userDetailComponent = detailFixture.componentInstance;
    detailFixture.detectChanges();
    detailDebugEl = listfixture.debugElement;
  });

  it('[input] - Should test the input changes', async(() => {
   
    let idDiv = listDebugEl.query(By.css('#userid')).nativeElement.innerText;      
    expect(idDiv).toContain('1');

  listfixture.whenStable().then(()=>{
    let inputEl = listDebugEl.query(By.css('#username')).nativeElement.value;      
    expect(inputEl).toContain('Aanika');
  });
}));

it('[output] - Should check output changes are working',()=>{
  user.age = 100;
  let selectedUser: User;
  userDetailComponent.updateUser.subscribe((data)=>{
    selectedUser = data;
  });

  userDetailComponent.userid = user.id;
  userDetailComponent.username = user.name;
  userDetailComponent.age = user.age;

  userDetailComponent.saveUser();
  expect(selectedUser.age).toBe(user.age);
});

 
});
