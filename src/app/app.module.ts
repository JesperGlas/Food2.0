import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Materials imports */
import {
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FetchJsonService } from './shared/fetch-json.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [FetchJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
