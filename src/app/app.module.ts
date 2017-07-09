import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FieldComponent } from './dynamic-form/field/field.component';
import { InputComponent } from './dynamic-form/field/input/input.component';
import { TextareaComponent } from './dynamic-form/field/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    InputComponent,
    TextareaComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
