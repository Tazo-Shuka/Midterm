import { Component } from '@angular/core';
import { Users } from './users';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tazo Shukakidze';
// TASK 2 -----------------------
  users=[
    {
      firstName: 'Tazo',
      lastName: 'Shukakidze',
      age: 19
    },
    {
      firstName: 'Giorgi',
      lastName: 'Shukakidze',
      age: 21
    },
    {
      firstName: 'Luka',
      lastName: 'Shukakidze',
      age: 40
    },
  ]
  //TASK 3 ------------------------
  Users:ParentUser[]=[
    {
      Id: 1,
      FirstName: 'Shvidi',
      LastName: 'Juja',
      DateOfBirth: new Date(2000,1,1),
      PhoneNumber: 514652241,
      Email: 'Giorga@gmail.com'
    },
    {
      Id: 2,
      FirstName: 'Gela',
      LastName: 'Gnolidze',
      DateOfBirth: new Date(2010,1,1),
      PhoneNumber: 594652241,
      Email: 'Gnola@gmail.com'
    },
  ]
// TASK 4 ---------------------
childUser:ChildUser[]=[];
  
  recieveUsers(data:ChildUser[]){
    this.childUser = data;
  }

// TASK 5 ---------------------
user:Users[]=[
  {
    Id: null,
    FirstName: '',
    LastName: '',
    DateOfBirth: null,
    PhoneNumber: null,
    Email: ''
  }
];
constructor(private fb: FormBuilder){
};
  registrationForm = this.fb.group({
    Id: [1,[Validators.required]],
    FirstName: ['Tazo',[Validators.required, Validators.minLength(3)]],
    LastName: ['Shukakidze',[Validators.required, Validators.minLength(3)]],
    DateOfBirth: [new Date],
    PhoneNumber: [574229558,[Validators.required, Validators.minLength(9)]],
    Email: ['tazo@gmail.com',[Validators.required, Validators.minLength(8)]]
  });

  // addUser() {
//   if (this.registrationForm.valid) {
//     this.user.push(this.registrationForm.value);
//     this.registrationForm.reset();
//   };

}
  

