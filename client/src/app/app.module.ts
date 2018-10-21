import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ContactService} from './contact.service';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {Http, Headers} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
