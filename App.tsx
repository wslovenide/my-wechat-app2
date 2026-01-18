
import React, { useState, useEffect } from 'react';
import { TabType, Chat, User } from './types';
import { Login } from './components/Login';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { ChatList } from './components/ChatList';
import { ContactsTab } from './components/ContactsTab';
import { DiscoverTab } from './components/DiscoverTab';
import { MeTab } from './components/MeTab';
import { ChatDetail } from './components/ChatDetail';
import { SplashScreen } from './components/SplashScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>(TabType.CHATS);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleLogin = (success: boolean) => {
    if (success) setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab(TabType.CHATS);
    setSelectedUser(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case TabType.CHATS:
        return <ChatList onChatSelect={(chat) => setSelectedUser(chat.user)} />;
      case TabType.CONTACTS:
        return <ContactsTab />;
      case TabType.DISCOVER:
        return <DiscoverTab />;
      case TabType.ME:
        return <MeTab onLogout={handleLogout} />;
      default:
        return <ChatList onChatSelect={(chat) => setSelectedUser(chat.user)} />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case TabType.CHATS: return '微信';
      case TabType.CONTACTS: return '通讯录';
      case TabType.DISCOVER: return '发现';
      case TabType.ME: return '';
      default: return '微信';
    }
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-2xl relative overflow-hidden border-x border-gray-200">
      {/* 聊天详情遮罩层 */}
      {selectedUser && (
        <ChatDetail 
          user={selectedUser} 
          onBack={() => setSelectedUser(null)} 
        />
      )}

      {/* 主界面 */}
      <TopBar title={getTitle()} />
      <div className="flex-1 overflow-y-auto bg-[#F7F7F7] pb-20">
        {renderContent()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
