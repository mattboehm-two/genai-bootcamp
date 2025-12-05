
import React from 'react';

export const SnowflakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l1.5-1.5L15 21m-9-3.75h.008v.008H6V17.25m.375 0A7.5 7.5 0 0012 21a7.5 7.5 0 005.625-2.75M17.25 17.25h.008v.008h-.008v-.008zM12 15a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM3 12h3.75m11.25 0H21m-9-9l1.5 1.5L15 3m-9 3.75h.008v.008H6V6.75m7.5 0A7.5 7.5 0 0012 3a7.5 7.5 0 00-5.625 2.75M3.75 6.75h.008v.008H3.75V6.75z" />
  </svg>
);

export const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.574l3.597-.922a.75.75 0 01.387.387l-.922 3.597a.75.75 0 00.574.95l4.949 1.414a.75.75 0 00.95-.826l-2.289-8.011a.75.75 0 00-.715-.715L3.105 2.289z" />
  </svg>
);

export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412A9.957 9.957 0 0010 12c-2.31 0-4.438.784-6.131 2.095z" />
  </svg>
);

export const BotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.39 6.39a.75.75 0 011.06 0l.07.07a.75.75 0 010 1.06l-.07.07a.75.75 0 01-1.06 0l-.07-.07a.75.75 0 010-1.06l.07-.07zm6.16 0a.75.75 0 011.06 0l.07.07a.75.75 0 010 1.06l-.07.07a.75.75 0 01-1.06 0l-.07-.07a.75.75 0 010-1.06l.07-.07zM6 12a4 4 0 008 0H6z" clipRule="evenodd" />
  </svg>
);

export const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.665l3-3z" />
        <path d="M8.603 14.397a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 00-.225-5.865.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.665l-3 3z" />
    </svg>
);

export const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
    </div>
);
