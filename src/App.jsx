import React from 'react';
import { LayoutDashboard, CheckSquare, Clock, Settings, User, Quote } from 'lucide-react';
import TodoList from './components/TodoList';
import QuoteWidget from './components/QuoteWidget';

export default function App() {
  return (
    <div className="flex h-screen bg-[#020617] text-white font-sans overflow-hidden relative text-left">
      {/* Sidebar */}
      <aside className="w-20 border-r border-white/5 flex flex-col items-center py-8 justify-between bg-black/20 backdrop-blur-xl z-10 shrink-0">
        <div className="flex flex-col items-center gap-8">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black font-bold shadow-lg shadow-white/10 text-xl leading-none">
            P
          </div>
          <nav className="flex flex-col gap-6">
            <LayoutDashboard className="text-white/40 hover:text-white cursor-pointer transition-all" size={24} />
            <CheckSquare className="text-white/40 hover:text-white cursor-pointer transition-all" size={24} />
            <Clock className="text-white/40 hover:text-white cursor-pointer transition-all" size={24} />
          </nav>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Settings className="text-white/40 hover:text-white cursor-pointer transition-all" size={24} />
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
            <User size={20} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto z-10">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-slate-500 text-sm font-medium uppercase tracking-[0.2em] mb-2">Обзор</h2>
            <h1 className="text-4xl font-semibold text-white">Привет, Мастер</h1>
          </div>
          <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="text-slate-300">17 Марта, Вторник</span>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          
          {/* Card 1: Список задач */}
          <div className="group p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 flex flex-col h-[500px]">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2 shrink-0">
              <CheckSquare size={20} className="text-slate-400" />
              Задачи
            </h3>
            <div className="flex-1 overflow-hidden">
               <TodoList />
            </div>
          </div>

          {/* Card 2: Таймер */}
          <div className="group p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 h-[500px] flex flex-col">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2 shrink-0">
              <Clock size={20} className="text-slate-400" />
              Фокус
            </h3>
            <div className="flex-1 rounded-3xl bg-black/20 border border-white/5 flex flex-col items-center justify-center text-slate-600 italic gap-4">
              <div className="text-6xl font-thin tracking-tighter opacity-20">25:00</div>
              <p className="text-xs uppercase tracking-widest font-normal">Скоро здесь будет таймер</p>
            </div>
          </div>

          {/* Card 3: Цитата дня */}
          <div className="group p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 h-[500px] flex flex-col overflow-hidden">
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2 shrink-0">
              <Quote size={20} className="text-slate-400" />
              Вдохновение
            </h3>
            <div className="flex-1 overflow-hidden">
              <QuoteWidget />
            </div>
          </div>

        </div>
      </main>

      {/* Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
    </div>
  );
}