import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ChatComponent } from './app/chat/chat.component';
import { routes } from './app/app.routes';

bootstrapApplication(ChatComponent, {
  providers: [provideRouter(routes)]
});
