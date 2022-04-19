import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  obj = {
    name: 'Joe',
    age: 31,
    location: 'San Diego',
    belt: 'Red'
  }

  yell(e: any){
    alert('AAAAAAAAAHHHHHHHHHH!!!')
    console.log(e)
  }

  
}
