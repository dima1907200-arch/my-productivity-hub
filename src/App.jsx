import React from 'react';
import { LayoutDashboard, CheckSquare, Clock, Settings, User } from 'lucide-react';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="flex h-screen bg-[#020617] text-white font-sans overflow-hidden relative">
      {/* Левая панель (Sidebar) */}
      <aside className="w-20 border-r border-white/5 flex flex-col items-center py-8 justify-between bg-black/20 backdrop-blur-xl z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black font-bold shadow-lg shadow-white/10">
            P
          </div>
          <nav className="flex flex-col gap-6">
            <LayoutDashboard className="text-white/40 hover:text-white cursor-pointer transition-colors" size={24} />
            <CheckSquare className="text-white/40 hover:text-white cursor-pointer transition-colors" size={24} />
            <Clock className="text-white/40 hover:text-white cursor-pointer transition-colors" size={24} />
          </nav>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Settings className="text-white/40 hover:text-white cursor-pointer transition-colors" size={24} />
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
            <User size={20} />
          </div>
        </div>
      </aside>

      {/* Основной контент */}
      <main className="flex-1 p-10 overflow-y-auto z-10">
        <header className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-slate-500 text-sm font-medium uppercase tracking-[0.2em] mb-2">Обзор</h2>
            <h1 className="text-4xl font-semibold">Привет, Мастер</h1>
          </div>
          <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="text-slate-300">17 Марта, Вторник</span>
          </div>
        </header>

        {/* Сетка карточек (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Карточка 1: Список задач */}
          <div className="group p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 flex flex-col h-[450px]">
            <h3 className="text-xl font-medium mb-6">Список задач</h3>
            <TodoList />
          </div>

          {/* Карточка 2: Таймер */}
          <div className="group p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 h-[450px]">
            <h3 className="text-xl font-medium mb-4">Таймер Помодоро</h3>
            <div className="h-64 rounded-2xl bg-black/20 border border-white/5 flex items-center justify-center text-slate-600 italic">
              Таймер будет здесь...
            </div>
          </div>

          {/* Карточка 3: Погода */}
          <div className="group p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 h-[450px]">
            <h3 className="text-xl font-medium mb-4">Погода</h3>
            <div className="h-64 rounded-2xl bg-black/20 border border-white/5 flex items-center justify-center text-slate-600 italic">
              Загрузка API...
            </div>
          </div>
        </div>
      </main>

      {/* Элементы декора (Свечение на фоне) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] z-0"></div>
    </div>
  );
}