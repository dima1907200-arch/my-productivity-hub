import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee, Edit2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Timer() {
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('25');

  // Синхронизация таймера при изменении настроек времени
  useEffect(() => {
    if (!isActive) {
      setSeconds(focusMinutes * 60);
    }
  }, [focusMinutes]);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
      // Тут можно добавить звук уведомления в будущем
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    if (seconds === 0) reset();
    setIsActive(!isActive);
    setIsEditing(false);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(focusMinutes * 60);
    setIsEditing(false);
  };

  const handleEditSubmit = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num) && num > 0 && num <= 120) {
      setFocusMinutes(num);
      setIsEditing(false);
    } else {
      setInputValue(focusMinutes.toString());
      setIsEditing(false);
    }
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-between h-full py-4">
      <div className="relative flex flex-col items-center justify-center w-full">
        {/* Анимированный фон при работе */}
        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-48 h-48 bg-blue-500 rounded-full blur-3xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Область времени */}
        <div className="relative z-10 cursor-pointer group" onClick={() => !isActive && setIsEditing(true)}>
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                autoFocus
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.replace(/\D/g, ''))}
                onBlur={handleEditSubmit}
                onKeyDown={(e) => e.key === 'Enter' && handleEditSubmit()}
                className="w-24 bg-white/10 border-b-2 border-white text-5xl font-thin text-center focus:outline-none py-1"
              />
              <Check size={24} className="text-emerald-500" onClick={handleEditSubmit} />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="text-7xl font-thin tracking-tighter tabular-nums flex items-baseline">
                {formatTime(seconds)}
                {!isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -right-8 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    <Edit2 size={16} />
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full z-10">
        <div className="flex justify-center gap-4">
          <button 
            onClick={toggle}
            disabled={isEditing}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-white/10 text-white' : 'bg-white text-black hover:scale-105 active:scale-95 shadow-lg shadow-white/5'}`}
          >
            {isActive ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
          </button>
          
          <button 
            onClick={reset}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all active:scale-95"
          >
            <RotateCcw size={20} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-500 text-xs uppercase tracking-widest mt-2 font-medium">
          <Coffee size={14} className={isActive ? 'animate-pulse' : ''} />
          <span>{isActive ? 'Фокусировка...' : `Цель: ${focusMinutes} мин`}</span>
        </div>
      </div>
    </div>
  );
}