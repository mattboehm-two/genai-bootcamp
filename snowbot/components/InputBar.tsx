
import React, { useState } from 'react';
import { SendIcon } from './icons.tsx';

interface InputBarProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="p-4 bg-slate-800 border-t border-slate-700">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask about plowing, closures, or weather..."
          className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          disabled={isLoading}
          aria-label="Chat input"
        />
        <button
          type="submit"
          disabled={isLoading || !text.trim()}
          className="bg-blue-600 text-white rounded-lg p-2.5 flex items-center justify-center transition-colors duration-200 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500"
          aria-label="Send message"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default InputBar;
