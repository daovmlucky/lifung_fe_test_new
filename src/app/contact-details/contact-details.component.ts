import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model'; // Assuming Contact model is defined

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | undefined;

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    const contactId = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactService.getContactById(contactId);
  }
}
