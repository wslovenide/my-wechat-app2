
import { User, Chat } from './types';

export const MOCK_USERS: User[] = [
  { id: 'gemini', username: 'gemini', displayName: '智能助手 Gemini', avatar: 'https://picsum.photos/seed/gemini/200', status: '正在思考...' },
  { id: 'lily', username: 'lily', displayName: '陈莉莉', avatar: 'https://picsum.photos/seed/lily/200', status: '开会中' },
  { id: 'david', username: 'david', displayName: '大卫·史密斯', avatar: 'https://picsum.photos/seed/david/200', status: '咖啡时间！' },
  { id: 'sarah', username: 'sarah', displayName: '王莎莎', avatar: 'https://picsum.photos/seed/sarah/200' },
  { id: 'team', username: 'team', displayName: '项目开发组', avatar: 'https://picsum.photos/seed/team/200' },
];

export const MOCK_CHATS: Chat[] = [
  { id: 'gemini', user: MOCK_USERS[0], lastMessage: '你好！今天有什么我可以帮你的吗？', lastTime: '上午 10:45', unreadCount: 1 },
  { id: 'lily', user: MOCK_USERS[1], lastMessage: '今晚晚餐见！', lastTime: '昨天', unreadCount: 0 },
  { id: 'david', user: MOCK_USERS[2], lastMessage: '你能看下最新的报告吗？', lastTime: '星期二', unreadCount: 3 },
];

export const APP_THEME = {
  primary: '#07C160',
  background: '#EDEDED',
  textMain: '#191919',
  textSecondary: '#999999',
  border: '#E1E1E1'
};
