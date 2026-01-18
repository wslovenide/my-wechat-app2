
import React, { useState, useEffect, useRef } from 'react';
import { User, Message } from '../types';
import { TopBar } from './TopBar';
import { getGeminiResponse } from '../services/geminiService';

interface ChatDetailProps {
  user: User;
  onBack: () => void;
}

export const ChatDetail: React.FC<ChatDetailProps> = ({ user, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', senderId: user.id, text: `你好！我是 ${user.displayName}。今天过得怎么样？`, timestamp: Date.now() - 100000, isMe: false }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: inputText,
      timestamp: Date.now(),
      isMe: true
    };

    setMessages(prev => [...prev, userMessage]);
    const originalText = inputText;
    setInputText('');
    
    if (user.id === 'gemini') {
      setIsTyping(true);
      const history = messages.slice(-5).map(m => ({
        role: m.isMe ? 'user' as const : 'model' as const,
        parts: [{ text: m.text }]
      }));
      
      const aiReply = await getGeminiResponse(originalText, history);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        senderId: user.id,
        text: aiReply,
        timestamp: Date.now(),
        isMe: false
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#EDEDED] flex flex-col z-[60] overflow-hidden">
      <TopBar 
        title={user.displayName} 
        showBack 
        onBack={onBack} 
        rightIcons={<i className="fas fa-ellipsis-h cursor-pointer"></i>}
      />
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 pb-24"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'} items-start space-x-2`}
          >
            {!msg.isMe && (
              <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
            )}
            <div 
              className={`max-w-[70%] p-3 rounded-lg text-sm relative ${
                msg.isMe ? 'message-bubble-user text-[#191919]' : 'message-bubble-ai text-[#191919]'
              }`}
            >
              {msg.text}
            </div>
            {msg.isMe && (
              <img src="https://picsum.photos/seed/me/200" alt="me" className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start items-center space-x-2">
            <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-md object-cover" />
            <div className="message-bubble-ai p-3 rounded-lg text-sm flex space-x-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#F7F7F7] border-t border-[#E1E1E1] p-3 flex items-end space-x-3 fixed bottom-0 left-0 right-0">
        <button className="text-2xl pb-1"><i className="far fa-smile"></i></button>
        <textarea
          rows={1}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
          className="flex-1 bg-white border border-[#E1E1E1] rounded-md py-2 px-3 focus:outline-none resize-none overflow-hidden text-sm"
          placeholder="发送消息..."
        />
        {inputText ? (
          <button 
            onClick={handleSend}
            className="wechat-bg-green text-white px-4 py-1.5 rounded-md font-medium text-sm transition-opacity"
          >
            发送
          </button>
        ) : (
          <button className="text-2xl pb-1"><i className="fas fa-plus-circle"></i></button>
        )}
      </div>
    </div>
  );
};
