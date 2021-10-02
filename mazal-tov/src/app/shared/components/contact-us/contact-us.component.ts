import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contactus } from 'src/app/classes/contactus';
import { ContactusService } from '../../services/contactus.service';
import { MessageOkComponent } from './message-ok/message-ok.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contact: Contactus = new Contactus();

  constructor(public router: Router,
    public contactService: ContactusService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  send() {
    this.contactService.create(this.contact).subscribe(res => {
      const modalRef = this.modalService.open(MessageOkComponent,
        {
          size: 'xl'
        });
      this.router.navigate([""]);
    })
  }

}
