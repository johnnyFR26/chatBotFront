import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chatBot';
  private messageService = inject(MessagesService)

  ngOnInit(): any {
    this.messageService.getMessages()
  }
}
