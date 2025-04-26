import { Component, Input, input } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversation',
  imports: [MessageComponent, FormsModule],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  @Input() contact: string | null = null;

  messages = [
    { fromMe: true, body: 'Oi!', type: 'text' },
    { fromMe: false, body: 'Olá, tudo bem?', type: 'text' },
  ];

  newMessage = '';

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({ fromMe: true, body: this.newMessage, type: 'text' });
    this.newMessage = '';
  }
}
