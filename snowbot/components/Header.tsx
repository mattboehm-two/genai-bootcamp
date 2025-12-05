
import React from 'react';
import { SnowflakeIcon } from './icons.tsx';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <SnowflakeIcon className="w-8 h-8 text-cyan-400" />
        <h1 className="text-xl font-bold text-slate-100 tracking-wide">
          Alaska Department of Snow
        </h1>
      </div>
    </header>
  );
};

export default Header;
