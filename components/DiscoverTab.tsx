
import React from 'react';

export const DiscoverTab: React.FC = () => {
  const sections = [
    [{ icon: 'fa-camera-retro', color: 'text-blue-500', label: '朋友圈' }],
    [
      { icon: 'fa-qrcode', color: 'text-blue-400', label: '扫一扫' },
      { icon: 'fa-hand-holding-heart', color: 'text-orange-400', label: '摇一摇' }
    ],
    [
      { icon: 'fa-search', color: 'text-red-400', label: '看一看' },
      { icon: 'fa-users-viewfinder', color: 'text-green-500', label: '附近的人' }
    ],
    [{ icon: 'fa-gamepad', color: 'text-orange-500', label: '游戏' }]
  ];

  return (
    <div className="bg-[#EDEDED] min-h-full pb-20">
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
    </div>
  );
};
