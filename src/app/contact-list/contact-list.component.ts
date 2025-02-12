import { Component,OnInit  } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  filteredContacts: Contact[] = [];
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.filteredContacts = this.contactService.getContacts();
  }


  filterContacts(event: any) { // Adjust the event type if needed
    const query = event.target.value.toLowerCase();
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.phone.includes(query)
    );
  }
}
