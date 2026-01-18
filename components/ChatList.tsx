
import React from 'react';
import { MOCK_CHATS } from '../constants';
import { Chat } from '../types';

interface ChatListProps {
  onChatSelect: (chat: Chat) => void;
}

export const ChatList: React.FC<ChatListProps> = ({ onChatSelect }) => {
  return (
    <div className="bg-white">
      {MOCK_CHATS.map((chat) => (
        <div 
          key={chat.id} 
          onClick={() => onChatSelect(chat)}
          className="flex items-center p-3 border-b border-[#F0F0F0] active:bg-[#F2F2F2] cursor-pointer"
        >
          <div className="relative">
            <img 
              src={chat.user.avatar} 
              alt={chat.user.displayName} 
              className="w-12 h-12 rounded-md object-cover" 
            />
            {chat.unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {chat.unreadCount}
              </span>
            )}
          </div>
          <div className="ml-3 flex-1 overflow-hidden">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-[#191919]">{chat.user.displayName}</h3>
              <span className="text-xs text-[#999999]">{chat.lastTime}</span>
            </div>
            <p className="text-sm text-[#999999] truncate mt-0.5">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
