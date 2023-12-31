import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorDetailsComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
