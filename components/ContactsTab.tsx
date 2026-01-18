
import React from 'react';
import { MOCK_USERS } from '../constants';

export const ContactsTab: React.FC = () => {
  const topItems = [
    { icon: 'fa-user-plus', color: 'bg-orange-400', label: '新的朋友' },
    { icon: 'fa-users', color: 'bg-green-500', label: '群聊' },
    { icon: 'fa-tag', color: 'bg-blue-500', label: '标签' },
    { icon: 'fa-bullhorn', color: 'bg-blue-600', label: '公众号' },
  ];

  return (
    <div className="bg-white">
      {topItems.map((item, idx) => (
        <div key={idx} className="flex items-center p-3 border-b border-[#F0F0F0] active:bg-[#F2F2F2] cursor-pointer">
          <div className={`${item.color} w-9 h-9 rounded-md flex items-center justify-center text-white`}>
            <i className={`fas ${item.icon}`}></i>
          </div>
          <span className="ml-4 text-[15px]">{item.label}</span>
        </div>
      ))}
      <div className="bg-[#F7F7F7] px-3 py-1 text-[11px] text-[#999999] font-medium">我的好友</div>
      {MOCK_USERS.map((user) => (
        <div key={user.id} className="flex items-center p-3 border-b border-[#F0F0F0] active:bg-[#F2F2F2] cursor-pointer">
          <img src={user.avatar} alt={user.displayName} className="w-9 h-9 rounded-md object-cover" />
          <span className="ml-4 text-[15px]">{user.displayName}</span>
        </div>
      ))}
    </div>
  );
};
