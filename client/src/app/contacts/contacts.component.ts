import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact'


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact : Contact;
  first_name : string;
  last_name : string;
  phone : string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe(data=>{
      this.contacts = data as any;
    });
  }

  addContact(){
    const newContact = {
      first_name: this.first_name,
      last_name:this.last_name,
      phone:this.phone
    }

    this.contactService.addContact(newContact)
    .subscribe(contact=>{
      console.log(contact)
      this.contactService.getContacts()
    .subscribe(data=>{
      this.contacts = data as any;
    })
    });
  }

  deleteContact(id:any)
  {
    var contacts= this.contacts;
    this.contactService.deleteContact(id)
    .subscribe(data=>{
      // if(data.n==1){
      //   console.log(data)
      //   for(var i=0; i< this.contacts.length; i++)
      //   {
      //     if(contacts[i]._id == id)
      //     {
      //       contacts.splice(i,1);
      //     }
      //   }
      // }
      this.contactService.getContacts()
    .subscribe(data=>{
      this.contacts = data as any;
    });
    })
  }

}
