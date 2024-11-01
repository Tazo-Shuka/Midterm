import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
//TASK 3 -----------------
@Input() parentUser:ParentUser[] = [];
//TASK 4 -----------------
@Output() userArray = new EventEmitter<ChildUser[]>();
childUser:ChildUser[]=[
  {
    Id: 1,
    FirstName: 'Fifqia',
    LastName: 'Witelqudashvili',
    DateOfBirth: new Date(1980,1,1),
    PhoneNumber: 542314521,
    Email: 'Fifqo@yahoo.com'
  },
  {
    Id: 2,
    FirstName: 'Yba',
    LastName: 'Gamezardashvili',
    DateOfBirth: new Date(2011,1,1),
    PhoneNumber: 599748232,
    Email: 'Y-bacho@gmail.com'
  },
]
// TASK 6 -------------------------------
constructor(private displayService: DisplayService){
  this.userArray.emit(this.childUser);

}
displayUsers(){
  this.displayService.displayArray(this.childUser);
}
}
