
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (success: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // 模拟网络延迟
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        onLogin(true);
      } else {
        setError('用户名或密码错误');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 max-w-md mx-auto border-x border-gray-100">
      <div className="w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-[#07C160] rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
            <i className="fas fa-comment-dots text-white text-5xl transform -rotate-12"></i>
          </div>
          <h2 className="mt-8 text-3xl font-bold text-[#191919]">欢迎回来</h2>
          <p className="mt-2 text-sm text-[#999999]">登录您的“微连”账号</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 ml-1 mb-1">用户名</label>
              <input
                type="text"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#07C160] focus:border-[#07C160] focus:outline-none bg-gray-50 transition-all"
                placeholder="请输入用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 ml-1 mb-1">密码</label>
              <input
                type="password"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#07C160] focus:border-[#07C160] focus:outline-none bg-gray-50 transition-all"
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white wechat-bg-green hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#07C160] transition-all ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <i className="fas fa-circle-notch animate-spin text-xl"></i>
            ) : (
              '登 录'
            )}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm">
          <a href="#" className="text-[#576B95] hover:underline">忘记密码？</a>
          <a href="#" className="text-[#576B95] hover:underline">立即注册</a>
        </div>
        
        <div className="mt-12 text-center text-xs text-gray-400">
          <p>登录即表示您同意我们的条款和隐私政策</p>
          <p className="mt-1">© 2024 微连科技有限公司</p>
        </div>
      </div>
    </div>
  );
};
