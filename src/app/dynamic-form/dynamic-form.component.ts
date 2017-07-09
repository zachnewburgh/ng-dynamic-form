import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../app.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [AppService]
})
export class DynamicFormComponent implements OnInit {
  @Input() data: any;
  @Input() form: any[];
  formClass: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getFormData().subscribe(data => this.form = data);
  }

}

