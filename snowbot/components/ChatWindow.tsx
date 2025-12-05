
import React, { useState, useRef, useEffect } from 'react';
import { Message as MessageType, GroundingSource } from '../types.ts';
import { INITIAL_MESSAGE } from '../constants.ts';
import { useGemini } from '../hooks/useGemini.ts';
import Message from './Message.tsx';
import InputBar from './InputBar.tsx';
import { TypingIndicator } from './icons.tsx';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const { getBotResponseStream } = useGemini();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSendMessage = async (inputText: string) => {
    if (!inputText.trim()) return;

    const userMessage: MessageType = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    
    // Add a placeholder for the bot's response
    setMessages((prev) => [...prev, { id: botMessageId, text: '', sender: 'bot', sources: [] }]);

    try {
      const stream = await getBotResponseStream(inputText);
      let fullText = '';
      const sources = new Map<string, GroundingSource>();

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        fullText += chunkText;

        const groundingMetadata = chunk.candidates?.[0]?.groundingMetadata;
        if (groundingMetadata?.groundingChunks) {
            for (const sourceChunk of groundingMetadata.groundingChunks) {
                if (sourceChunk.web && !sources.has(sourceChunk.web.uri)) {
                    sources.set(sourceChunk.web.uri, sourceChunk.web);
                }
            }
        }

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId ? { ...msg, text: fullText, sources: Array.from(sources.values()) } : msg
          )
        );
      }
    } catch (error) {
      console.error('Error getting bot response:', error);
      const errorMessage = 'I seem to be stuck in a snowdrift... Please check your API key or try again later.';
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId ? { ...msg, text: errorMessage } : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[700px] w-full max-w-4xl bg-slate-800 rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
      <div ref={messagesEndRef} className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
        {isLoading && messages[messages.length - 1]?.sender !== 'bot' && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-slate-700 rounded-lg px-4 py-3 max-w-lg">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>
      <InputBar onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;
