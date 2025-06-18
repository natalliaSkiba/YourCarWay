import { Component } from '@angular/core';
import { ClientChatComponent } from './client-chat/client-chat.component';
import { SupportChatComponent } from './support-chat/support-chat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ClientChatComponent, SupportChatComponent],
  template: `
    <ng-container *ngIf="role === 'client'">
      <app-client-chat></app-client-chat>
    </ng-container>
    <ng-container *ngIf="role === 'support'">
      <app-support-chat></app-support-chat>
    </ng-container>
  `
})
export class AppComponent {
  role: 'client' | 'support' = window.location.href.includes('support') ? 'support' : 'client';
}
