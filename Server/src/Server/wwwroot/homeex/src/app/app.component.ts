import {Input, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  testProp: string;

  constructor(){
    this.testProp = 'test';
    this.title  = 'app'; 
  }
}

export class TestObject{

}
