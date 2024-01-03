import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contactus } from 'src/app/classes/contactus';
import { ContactusService } from 'src/app/shared/services/contactus.service';

@Component({
  selector: 'app-contactus-list',
  templateUrl: './contactus-list.component.html',
  styleUrls: ['./contactus-list.component.scss']
})
export class ContactusListComponent implements OnInit {

  contactsList: Contactus[] = [];

  constructor(public router: Router,
    public contactService: ContactusService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContactus().subscribe(res => {
      this.contactsList = res;
    })
  }

  okStatus(h: Contactus) {
    h.status = 2;
    this.contactService.updateStatus(h).subscribe(res => {
      this.getContacts();
    })
  }

}
