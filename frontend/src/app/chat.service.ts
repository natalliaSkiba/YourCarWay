import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any;
  private messageSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.connect();
  }

  private connect(): void {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/chat'),
      debug: (str: string) => console.log(str)
    });

    this.stompClient.onConnect = () => {
      this.stompClient.subscribe('/topic/messages', (message: any) => {
        this.messageSubject.next(message.body);
      });
    };

    this.stompClient.activate();
  }

  public sendMessage(message: string): void {
    this.stompClient.publish({
      destination: '/app/sendMessage',
      body: message
    });
  }

  public getMessages(): Observable<string> {
    return this.messageSubject.asObservable();
  }
}
