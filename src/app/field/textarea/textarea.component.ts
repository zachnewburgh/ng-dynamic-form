import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() cols: number;
  @Input() disabled: boolean;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() readOnly: boolean;
  @Input() required: boolean;
  @Input() rows: number;
  @Input() wrap: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
