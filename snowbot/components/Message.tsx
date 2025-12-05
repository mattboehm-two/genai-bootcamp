
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Message as MessageType } from '../types.ts';
import { UserIcon, BotIcon, LinkIcon } from './icons.tsx';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
          <BotIcon className="w-5 h-5 text-slate-900" />
        </div>
      )}

      <div
        className={`rounded-lg px-4 py-3 max-w-lg break-words ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-slate-700 text-slate-200'
        }`}
      >
        <div className="prose prose-invert prose-sm max-w-none prose-p:my-2 prose-headings:my-3">
            {message.text}
            {/*
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.text}
            </ReactMarkdown>
            */}
        </div>
        
        {message.sources && message.sources.length > 0 && (
            <div className="mt-4 pt-3 border-t border-slate-600">
                <h4 className="text-xs font-semibold text-slate-400 mb-2">Sources:</h4>
                <ul className="space-y-1">
                    {message.sources.map((source, index) => (
                        <li key={index}>
                            <a 
                                href={source.uri} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 hover:underline truncate"
                                title={source.uri}
                            >
                                <LinkIcon className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{source.title || source.uri}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
          <UserIcon className="w-5 h-5 text-slate-200" />
        </div>
      )}
    </div>
  );
};

export default Message;
