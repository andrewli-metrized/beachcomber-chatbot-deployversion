
import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const BotAvatar: React.FC = () => (
    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
      B
    </div>
);

const UserAvatar: React.FC = () => (
    <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
      U
    </div>
);

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex items-start gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      {isBot ? <BotAvatar /> : <UserAvatar />}
      <div
        className={`max-w-md rounded-xl px-4 py-3 shadow ${
          isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-500 text-white'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
