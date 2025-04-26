import { Component, signal } from "@angular/core";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ConversationComponent } from "./conversation/conversation.component";

@Component({
    selector: 'app-conversations',
    templateUrl: './conversations.component.html',
    styleUrls: ['./conversations.component.scss'],
    imports: [ContactsListComponent, ConversationComponent]
})
export class ConversationsComponent {
    selectedContact = signal<string | null>(null);

    onContactSelected(contact: any) {
      this.selectedContact.set(contact);
    }
}