import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() options: any;
  cols: number;
  disabled: boolean;
  elementClass: string;
  label: string;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  wrap: string;
  value: string;

  constructor() { }

  ngOnInit() {
    this.cols = this.options['cols'];
    this.disabled = this.options['disabled'];
    this.elementClass = this.options['elementClass'];
    this.label = this.options['label'];
    this.name = this.options['name'];
    this.placeholder = this.options['placeholder'] || '';
    this.readOnly = this.options['readOnly'];
    this.required = this.options['required'];
    this.rows = this.options['rows'];
    this.wrap = this.options['wrap'];
    this.value = this.options['value'];
  }

}
