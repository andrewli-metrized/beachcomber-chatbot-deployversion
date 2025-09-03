
import React from 'react';

const BotAvatar: React.FC = () => (
    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
      B
    </div>
);

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3">
       <BotAvatar />
      <div className="max-w-md rounded-xl px-4 py-3 shadow bg-gray-100 text-gray-800 flex items-center space-x-1.5">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default TypingIndicator;
