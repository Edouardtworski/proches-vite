import React from 'react';
import MaCave from './MaCave';

export default function App() {
  return (
    <div className="bg-[#FAF7EF] min-h-screen p-6">
      <header className="flex items-center justify-start mb-6">
        <img src="/logo192.png" alt="Proches Logo" className="h-20" />
      </header>
      <MaCave />
    </div>
  );
}