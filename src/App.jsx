import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white font-sans px-4 text-center">
      {/* Мягкое свечение на фоне */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
        Productivity Hub
      </h1>
      
      <p className="text-slate-400 text-lg md:text-xl font-light max-w-md">
        Твой эстетичный центр управления делами
      </p>
      
      <div className="mt-12 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-500 backdrop-blur-sm shadow-2xl">
        День 1: Фундамент заложен
      </div>
    </div>
  );
}

export default App;