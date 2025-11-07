
import React, { useState, useEffect, useCallback } from 'react';
import { Message } from './types';
import { useLocalization } from './hooks/useLocalization';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import InputBar from './components/InputBar';
import { generateResponse, startChat } from './services/geminiService';
import { LANGUAGES } from './services/constants';

const App: React.FC = () => {
  const { t, language } = useLocalization();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatInitialized, setIsChatInitialized] = useState(false);

  useEffect(() => {
    const currentLanguageName = LANGUAGES.find(l => l.code === language)?.name || 'English';
    startChat(currentLanguageName);
    const initialMessage: Message = { role: 'model', text: t('greeting') };
    setMessages([initialMessage]);
    setIsChatInitialized(true);
  }, [t, language]);
  
  const handleSendMessage = useCallback(async (text: string) => {
    if (!isChatInitialized) return;

    const userMessage: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const responseText = await generateResponse(text);
      const modelMessage: Message = { role: 'model', text: responseText };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = { role: 'model', text: t('error') };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isChatInitialized, t]);

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col font-sans">
      <Header />
      <ChatWindow messages={messages} isLoading={isLoading} />
      <InputBar onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default App;
