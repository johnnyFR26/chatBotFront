import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  imports: [],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {
  @Output() selectContact = new EventEmitter<string>();

  contacts = [
    { number: '5511999999999', unread: 2 },
    { number: '5511888888888', unread: 5 },
    { number: '5511777777777', unread: 0 }
  ];

  select(number: string) {
    this.selectContact.emit(number);
  }
}
