
import React from 'react';

export const MeTab: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const sections = [
    [
      { icon: 'fa-wallet', color: 'text-green-500', label: '服务' }
    ],
    [
      { icon: 'fa-bookmark', color: 'text-blue-500', label: '收藏' },
      { icon: 'fa-image', color: 'text-green-600', label: '朋友圈' },
      { icon: 'fa-credit-card', color: 'text-yellow-500', label: '卡包' },
      { icon: 'fa-smile', color: 'text-orange-500', label: '表情' }
    ],
    [
      { icon: 'fa-cog', color: 'text-blue-600', label: '设置' }
    ]
  ];

  return (
    <div className="bg-[#EDEDED] min-h-full pb-20">
      <div className="bg-white flex items-center p-6 mb-2 cursor-pointer border-b border-[#F0F0F0]">
        <img src="https://picsum.photos/seed/me/200" alt="avatar" className="w-16 h-16 rounded-lg object-cover" />
        <div className="ml-4 flex-1">
          <h2 className="text-xl font-bold">管理员用户</h2>
          <div className="flex items-center text-[#999999] text-sm mt-1">
            <span>微连号: admin_123</span>
            <i className="fas fa-qrcode ml-2 text-gray-400"></i>
          </div>
        </div>
        <i className="fas fa-chevron-right text-gray-300"></i>
      </div>

      {sections.map((section, sIdx) => (
        <div key={sIdx} className="mb-2 bg-white border-y border-[#F0F0F0]">
          {section.map((item, iIdx) => (
            <div key={iIdx} className={`flex items-center p-4 active:bg-[#F2F2F2] cursor-pointer ${iIdx !== section.length - 1 ? 'border-b border-[#F0F0F0]' : ''}`}>
              <i className={`fas ${item.icon} ${item.color} text-lg w-6`}></i>
              <span className="ml-4 flex-1 text-[15px]">{item.label}</span>
              <i className="fas fa-chevron-right text-gray-300 text-sm"></i>
            </div>
          ))}
        </div>
      ))}

      <div className="mt-4 px-4">
        <button 
          onClick={onLogout}
          className="w-full bg-white text-red-500 font-medium py-3 rounded-md active:bg-gray-100 transition-colors border border-[#F0F0F0]"
        >
          退出登录
        </button>
      </div>
    </div>
  );
};
