import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-in-use';
  name :string= ''; 

  onNameChange(value:any){
    this.name = value.target.value;
  }
}
