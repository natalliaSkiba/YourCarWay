import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChatService } from '../chat.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
   standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string = '';
  messages: string[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((msg: string) => {
      this.messages.push(msg);
    });
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
