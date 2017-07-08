import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { InputComponent } from './field/input/input.component';
import { TextareaComponent } from './field/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    InputComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
