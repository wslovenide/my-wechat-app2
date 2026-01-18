
import React from 'react';

interface TopBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightIcons?: React.ReactNode;
}

export const TopBar: React.FC<TopBarProps> = ({ title, showBack, onBack, rightIcons }) => {
  return (
    <div className="sticky top-0 z-50 bg-[#EDEDED] border-b border-[#E1E1E1] h-14 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        {showBack && (
          <button onClick={onBack} className="text-xl">
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        <h1 className="text-lg font-medium">{title}</h1>
      </div>
      <div className="flex items-center space-x-5 text-xl">
        {rightIcons || (
          <>
            <i className="fas fa-search cursor-pointer"></i>
            <i className="fas fa-plus-circle cursor-pointer"></i>
          </>
        )}
      </div>
    </div>
  );
};
