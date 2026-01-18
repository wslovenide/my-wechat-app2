
import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { type: TabType.CHATS, label: '微信', icon: 'fa-comment' },
    { type: TabType.CONTACTS, label: '通讯录', icon: 'fa-address-book' },
    { type: TabType.DISCOVER, label: '发现', icon: 'fa-compass' },
    { type: TabType.ME, label: '我', icon: 'fa-user' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#F7F7F7] border-t border-[#E1E1E1] h-16 flex items-center justify-around pb-1">
      {tabs.map((tab) => (
        <button
          key={tab.type}
          onClick={() => onTabChange(tab.type)}
          className={`flex flex-col items-center justify-center w-full transition-colors ${
            activeTab === tab.type ? 'text-[#07C160]' : 'text-[#666666]'
          }`}
        >
          <i className={`fas ${tab.icon} text-2xl`}></i>
          <span className="text-xs mt-1">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
