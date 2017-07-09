import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() options: any;
  disabled: boolean;
  elementClass: string;
  label: string;
  labelClass: string;
  max: number;
  min: number;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  step: number;
  type: string;
  value: string;
  wrapperClass: string;

  constructor() {
  }

  ngOnInit() {
    this.disabled = this.options['disabled'];
    this.elementClass = this.options['elementClass'];
    this.label = this.options['label'];
    this.labelClass = this.options['labelClass'];
    this.max = this.options['max'];
    this.min = this.options['mim'];
    this.name = this.options['name'];
    this.pattern = this.options['pattern'];
    this.placeholder = this.options['placeholder'] || '';
    this.readOnly = this.options['readOnly'];
    this.required = this.options['required'];
    this.step = this.options['step'];
    this.type = this.options['type'];
    this.value = this.options['value'] || '';
    this.wrapperClass = this.options['wrapperClass'];
  }

}
