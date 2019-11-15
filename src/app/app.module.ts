import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// common modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// user custom modules
import { PagesModule } from './pages/pages.module';

// material modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // core modules
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // material modules
    // MatCheckboxModule,
    // MatCardModule, 
    // MatButtonModule,
    // MatDialogModule,

    // user custom modules
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
