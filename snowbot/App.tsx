
import React from 'react';
import ChatWindow from './components/ChatWindow.tsx';
import Header from './components/Header.tsx';

function App() {
  return (
    <div className="flex flex-col h-screen font-sans antialiased text-slate-200 bg-slate-900">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <ChatWindow />
      </main>
    </div>
  );
}

export default App;
