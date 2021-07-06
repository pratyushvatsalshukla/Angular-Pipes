import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-in-use';
  name :string= ''; 
  dateInput:string='' ;
  amountInput:string = '' ;

  onNameChange(value:any){
    this.name = value.target.value;
  }
  onDateChange(value:any){
    this.dateInput = value.target.value ;
  }
  onAmountChange(value:any){
    this.amountInput = value.target.value ;

  }
}
