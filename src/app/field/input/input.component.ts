import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: any;
  @Input() disabled: boolean;
  @Input() max: number;
  @Input() min: number;
  @Input() pattern: string;
  @Input() readOnly: boolean;
  @Input() required: boolean;
  @Input() step: number;

  constructor() {
    this.type = this.type || 'text';
    this.label = this.label || 'label';
    this.name = this.name || 'name';
    this.placeholder = this.placeholder || 'placeholder';
    this.value = this.value || 'value';
  }

  ngOnInit() {
  }

}
