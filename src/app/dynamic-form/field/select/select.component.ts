import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() data: any;
  @Input() options: any;
  autofocus: boolean;
  dataAttr: string;
  disabled: boolean;
  elementClass: string;
  label: string;
  labelClass: string;
  multiple: boolean;
  name: string;
  optClass: string;
  optDisabled: boolean;
  required: boolean;
  selectOptions: {key: string, label: string}[];
  size: number;
  wrapperClass: string;

  constructor() { }

  ngOnInit() {
    this.autofocus = this.options['autofocus'];
    this.dataAttr = this.options['dataAttr'];
    this.disabled = this.options['disabled'];
    this.elementClass = this.options['elementClass'];
    this.label = this.options['label'];
    this.labelClass = this.options['labelClass'];
    this.multiple = this.options['multiple'];
    this.name = this.options['name'];
    this.optClass = this.options['optClass'];
    this.optDisabled = this.options['optDisabled'];
    this.required = this.options['required'];
    this.selectOptions = this.options['selectOptions'];
    this.size = this.options['size'];
    this.wrapperClass = this.options['wrapperClass'];
  }

}
