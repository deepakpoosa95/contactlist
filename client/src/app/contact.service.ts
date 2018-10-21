 import { Injectable } from '@angular/core';
  import { Headers} from '@angular/http';
 import { HttpClient,HttpHeaders } from '@angular/common/http';
 import {Contact} from './contact';
 import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts(){
    //return this.http.get('http://localhost:3000/api/contacts')
    return this.http.get('api/contacts')

    .map(res=>res);
  }


  addContact(newContact){
   // var headers = new Headers();
   var headers = new HttpHeaders({"Content-Type": "application/json"});
  //  headers.append({'Content-Type','application/json'});
    //return this.http.post('http://localhost:3000/api/contact',newContact,{headers:headers})
    return this.http.post('api/contact',newContact,{headers:headers})
    .map(res=>res);
    
  }

  deleteContact(id){
    //return this.http.delete('http://localhost:3000/api/contact/'+id)
    return this.http.delete('api/contact/'+id)
    .map(res=> res);
  }
}
