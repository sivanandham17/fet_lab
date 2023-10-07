import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { ImageComponent } from './image/image.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { BikeComponent } from './bike/bike.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ImageComponent,
    FormComponent,
    BikeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
