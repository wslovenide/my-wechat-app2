
import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(onFinish, 500); // 等待淡出动画结束
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-[#1a1a1a] flex flex-col items-center justify-between py-20 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="flex-1 flex items-center justify-center">
        {/* 这里模仿微信的地球剪影 */}
        <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
           <i className="fas fa-globe-asia text-gray-700 text-[200px] opacity-20"></i>
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4 h-12 bg-gray-600 rounded-full opacity-30 transform -rotate-12"></div>
        </div>
      </div>
      <div className="text-gray-500 text-sm tracking-widest font-light">
        WeConnect
      </div>
    </div>
  );
};
