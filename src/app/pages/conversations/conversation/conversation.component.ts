import { Component, inject, Input, input } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-conversation',
  imports: [MessageComponent, FormsModule],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  @Input() contact: string | null = null;
  private messagesService = inject(MessagesService)

  
  messages = this.messagesService.getContacts()
  newMessage = '';

  sendMessage() {
    if (!this.newMessage.trim()) return;
    this.messagesService.setMessages([this.newMessage, ...this.messages()])
    this.newMessage = '';
  }
}
