import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FieldComponent } from './dynamic-form/field/field.component';
import { InputComponent } from './dynamic-form/field/input/input.component';
import { TextareaComponent } from './dynamic-form/field/textarea/textarea.component';
import { SelectComponent } from './dynamic-form/field/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    InputComponent,
    TextareaComponent,
    DynamicFormComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
