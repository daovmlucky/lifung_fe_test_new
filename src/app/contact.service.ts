// src/app/contact.service.ts
import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
    { id: 1, name: 'Bryan', email: 'bryan@example.com', phone: '123-456-7890' },
    { id: 2, name: 'John', email: 'john@example.com', phone: '234-567-8901' },
    { id: 3, name: 'Smith', email: 'smith@example.com', phone: '235-567-8901' },
    { id: 4, name: 'Daniel', email: 'daniel@example.com', phone: '236-567-8901' },
    { id: 5, name: 'Johnathan', email: 'johnathan@example.com', phone: '234-567-8901'},
    { id: 6, name: 'Johnwitch', email: 'johnwitch@example.com', phone: '234-567-8901'}
  ];

  constructor() { }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
}
