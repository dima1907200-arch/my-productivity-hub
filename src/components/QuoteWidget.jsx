import React, { useState, useEffect } from 'react';
import { MessageSquare, RefreshCw } from 'lucide-react';

const russianQuotes = [
  { text: "Работать нужно не 12 часов, а головой.", author: "Стив Джобс" },
  { text: "Ваше время ограничено, не тратьте его, живя чужой жизнью.", author: "Стив Джобс" },
  { text: "Лучший способ предсказать будущее — создать его.", author: "Питер Друкер" },
  { text: "Сложность — это ваш враг. Трудно сделать что-то простым.", author: "Ричард Брэнсон" },
  { text: "Успех — это способность идти от одной неудачи к другой.", author: "Уинстон Черчилль" },
  { text: "Простота — это высшая форма утонченности.", author: "Леонардо да Винчи" },
  { text: "Качество — это делать что-то правильно, даже когда никто не смотрит.", author: "Генри Форд" },
  { text: "Инновация отличает лидера от последователя.", author: "Стив Джобс" },
  { text: "Будьте голодными. Будьте безрассудными.", author: "Стив Джобс" },
  { text: "Единственный способ делать великие дела — любить то, что вы делаете.", author: "Стив Джобс" },
  { text: "Детали имеют значение. Стоит подождать, чтобы сделать всё правильно.", author: "Стив Джобс" },
  { text: "Фокус — это умение говорить 'нет' сотне хороших идей.", author: "Стив Джобс" },
  { text: "Если вы еще не нашли свое дело — ищите. Не останавливайтесь.", author: "Стив Джобс" },
  { text: "Сделайте это настолько простым, насколько возможно, но не проще.", author: "Альберт Эйнштейн" },
  { text: "Логика может привести вас от А к Б. Воображение — куда угодно.", author: "Альберт Эйнштейн" },
  { text: "Тот, кто никогда не ошибался, никогда не пробовал ничего нового.", author: "Альберт Эйнштейн" },
  { text: "Дисциплина — это решение делать то, чего очень не хочется, чтобы достичь того, чего очень хочется.", author: "Джон Максвелл" },
  { text: "Если вы хотите идти быстро — идите один. Если хотите идти далеко — идите вместе.", author: "Африканская пословица" },
  { text: "Не то, что вы делаете время от времени, а то, что вы делаете постоянно, формирует вашу жизнь.", author: "Тони Роббинс" },
  { text: "Сначала делайте то, что необходимо, затем — то, что возможно. И вдруг вы сможете сделать невозможное.", author: "Франциск Ассизский" },
  { text: "Ваш мозг предназначен для того, чтобы рождать идеи, а не хранить их.", author: "Дэвид Аллен" },
  { text: "Мелкие детали важны. Именно из них складываются великие дела.", author: "Уинстон Черчилль" },
  { text: "У совершенства нет предела. Но оно должно быть целью.", author: "Фердинанд Порше" },
  { text: "Дизайн — это не то, как предмет выглядит, а то, как он работает.", author: "Стив Джобс" },
  { text: "Самое сложное — начать действовать, остальное зависит только от упорства.", author: "Амелия Эрхарт" },
  { text: "Двигайтесь быстро и разрушайте старое. Если вы ничего не разрушаете, вы движетесь недостаточно быстро.", author: "Марк Цукерберг" },
  { text: "Если что-то достаточно важно, вы должны попробовать, даже если вероятный исход — неудача.", author: "Илон Маск" },
  { text: "Ошибка — это не провал. Это возможность начать заново, но уже более мудро.", author: "Генри Форд" },
  { text: "Лучшее время, чтобы посадить дерево, было 20 лет назад. Следующее лучшее время — сегодня.", author: "Китайская пословица" },
  { text: "Путь в тысячу миль начинается с первого шага.", author: "Лао-Цзы" }
];

export default function QuoteWidget() {
  const [quote, setQuote] = useState(russianQuotes[0]);
  const [loading, setLoading] = useState(false);

  const getRandomQuote = () => {
    setLoading(true);
    setTimeout(() => {
      let newIndex;
      // Цикл гарантирует, что новая цитата не будет такой же, как текущая
      do {
        newIndex = Math.floor(Math.random() * russianQuotes.length);
      } while (russianQuotes[newIndex].text === quote.text);
      
      setQuote(russianQuotes[newIndex]);
      setLoading(false);
    }, 400);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <MessageSquare className="text-white/20 mb-2 shrink-0" size={28} />
        <div className="overflow-y-auto max-h-[220px] custom-scrollbar pr-2">
          <p className="text-lg font-light leading-relaxed mb-4 italic text-slate-100">
            "{quote.text}"
          </p>
        </div>
        <p className="text-slate-500 text-sm mt-2 shrink-0">— {quote.author}</p>
      </div>

      <button 
        onClick={getRandomQuote}
        disabled={loading}
        className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all active:scale-95 disabled:opacity-50 shrink-0"
      >
        <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        <span className="text-sm font-medium uppercase tracking-wider">Обновить</span>
      </button>
    </div>
  );
}