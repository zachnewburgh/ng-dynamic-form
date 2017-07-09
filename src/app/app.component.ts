import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  form: any[];

  ngOnInit() {
    this.data = {
      exampleAttribute: 'Example Value',
      exampleSelect: ['exampleValue2']
    }
  }
}
