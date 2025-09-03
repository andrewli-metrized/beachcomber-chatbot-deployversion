
import React, { useState, useEffect, useRef } from 'react';
import { Message, Sender } from './types';
import { getChatbotResponse } from './services/geminiService';
import ChatMessage from './components/ChatMessage';
import UserInput from './components/UserInput';
import Header from './components/Header';
import TypingIndicator from './components/TypingIndicator';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial greeting message from the bot
    setMessages([
      {
        id: Date.now(),
        text: "Hello! I'm the Beachcomber Hot Tubs assistant. How can I help you today? Feel free to ask me anything about choosing, maintaining, or ordering a hot tub.",
        sender: 'bot',
      },
    ]);
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the message list when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: userMessage,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const botResponseText = await getChatbotResponse(userMessage);
      const newBotMessage: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Sorry, I couldn't get a response. ${errorMessage}`);
      const errorBotMessage: Message = {
        id: Date.now() + 1,
        text: `Sorry, something went wrong. Please check your connection or API key and try again.`,
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      {error && <div className="p-4 text-center text-red-500 bg-red-100">{error}</div>}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <UserInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
