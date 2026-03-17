import React, { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('hub-todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('hub-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex flex-col h-full">
      <form onSubmit={addTodo} className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Новая задача..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-white/20 transition-all text-white"
        />
        <button type="submit" className="p-2 bg-white text-black rounded-xl hover:bg-slate-200 transition-colors">
          <Plus size={20} />
        </button>
      </form>

      <div className="space-y-3 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
        {todos.length === 0 && (
          <p className="text-slate-500 text-center text-sm py-4 italic">Задач пока нет...</p>
        )}
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-white/10 transition-all">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 
                <CheckCircle2 className="text-emerald-500" size={18} /> : 
                <Circle className="text-slate-600 group-hover:text-slate-400" size={18} />
              }
              <span className={`text-sm transition-all ${todo.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                {todo.text}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}