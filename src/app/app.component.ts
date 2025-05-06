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
  title = 'Wenvia';
  private messageService = inject(MessagesService)

  ngOnInit(): void {
    this.messageService.fetchMessages()
  }
}
