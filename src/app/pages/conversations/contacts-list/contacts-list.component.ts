import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-contacts-list',
  imports: [],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {
  @Output() selectContact = new EventEmitter<string>();
  private messageService = inject(MessagesService)

  contacts = this.messageService.getContacts()



  select(number: string) {
    this.selectContact.emit(number);
  }
}
