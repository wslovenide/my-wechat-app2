
import React, { useState } from 'react';

export const MeTab: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [showBuildInfo, setShowBuildInfo] = useState(false);

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
      { 
        icon: 'fa-robot', 
        color: 'text-indigo-500', 
        label: 'APK 构建中心', 
        onClick: () => setShowBuildInfo(true) 
      },
      { icon: 'fa-cog', color: 'text-blue-600', label: '设置' }
    ]
  ];

  return (
    <div className="bg-[#EDEDED] min-h-full pb-20">
      <div className="bg-white flex items-center p-6 mb-2 cursor-pointer border-b border-[#F0F0F0] active:bg-gray-50">
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
            <div 
              key={iIdx} 
              onClick={item.onClick}
              className={`flex items-center p-4 active:bg-[#F2F2F2] cursor-pointer ${iIdx !== section.length - 1 ? 'border-b border-[#F0F0F0]' : ''}`}
            >
              <i className={`fas ${item.icon} ${item.color} text-lg w-6 text-center`}></i>
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

      {/* APK 构建说明弹窗 */}
      {showBuildInfo && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-6" onClick={() => setShowBuildInfo(false)}>
          <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">APK 构建中心</h3>
                <i className="fas fa-times text-gray-400" onClick={() => setShowBuildInfo(false)}></i>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-blue-700 text-sm leading-relaxed">
                    <strong>提示：</strong> AI 无法直接生成二进制文件。已为您配置好 <strong>GitHub Actions</strong> 自动化构建环境。
                  </p>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>1. 将代码上传至您的 GitHub 仓库。</p>
                  <p>2. 点击仓库的 <strong>Actions</strong> 页面。</p>
                  <p>3. 自动运行完成后即可下载 APK。</p>
                </div>
                <div className="pt-2 text-xs text-gray-400">当前版本: v1.0.2 (Build 20241220)</div>
              </div>
              <button 
                onClick={() => setShowBuildInfo(false)}
                className="w-full mt-6 bg-[#07C160] text-white py-3 rounded-lg font-bold"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
