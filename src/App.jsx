import React, { useState } from 'react';
import Chatbot from './components/chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">E-commerce Chatbot</h1>
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
