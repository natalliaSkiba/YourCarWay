import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { ChatMessage } from './chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any; 
  private messageSubject = new Subject<ChatMessage>();
  private serverUrl = 'http://localhost:8080/chat'; // замени на свой эндпоинт

  constructor() {
    this.connect();
  }

  private connect(): void {
    //const socket = new SockJS(this.serverUrl);
    //this.stompClient = Stomp.over(socket);
    this.stompClient = Stomp.over(() => new SockJS(this.serverUrl));

    this.stompClient.debug = () => {}; // отключить лог

    this.stompClient.connect({}, (frame: any) => {
      console.log('[ChatService] Connected:', frame);

      this.stompClient.subscribe('/topic/messages', (message: any) => {
        try {
          const parsed: ChatMessage = JSON.parse(message.body);
          this.messageSubject.next(parsed);
        } catch (err: any) {
          console.error('[ChatService] Failed to parse message:', err);
        }
      });
    }, (error: any) => {
      console.error('[ChatService] Connection error:', error);
    });
  }

  public sendMessage(content: string, from: 'client' | 'support'): void {
    if (!this.stompClient || !this.stompClient.connected) {
      console.warn('[ChatService] Not connected, cannot send.');
      return;
    }

    const message: ChatMessage = {
      from,
      content,
      timestamp: new Date().toISOString()
    };

    this.stompClient.send('/app/sendMessage', {}, JSON.stringify(message));
  }

  public getMessages(): Observable<ChatMessage> {
    return this.messageSubject.asObservable();
  }

  public disconnect(): void {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.disconnect(() => {
        console.log('[ChatService] Disconnected.');
      });
    }
  }
}
