import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  @Input() data: any;

  @Output() onYell = new EventEmitter()

  fireYellEvent(e: any) {
    this.onYell.emit(e)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
