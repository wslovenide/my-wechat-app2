
export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  status?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
  isMe: boolean;
}

export interface Chat {
  id: string;
  user: User;
  lastMessage: string;
  lastTime: string;
  unreadCount: number;
}

export enum TabType {
  CHATS = 'chats',
  CONTACTS = 'contacts',
  DISCOVER = 'discover',
  ME = 'me'
}
