export interface ChatMessage {
  from: 'client' | 'support';
  content: string;
  timestamp: string;
}
