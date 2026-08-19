import { Module } from '../types/curriculum';
import { htmlLessons } from './htmlLessons';
import { cssLessons } from './cssLessons';
import { jsLessons } from './jsLessons';
import { proLessons } from './proLessons';

export const modulesData: Module[] = [
  {
    id: 'html',
    title: 'HTML Fundamentals',
    subtitle: '11 уровней мастерства',
    description: 'Изучите фундамент веб-разработки: семантическую разметку, формы, таблицы, мультимедиа, доступность и поисковую оптимизацию (SEO).',
    iconName: 'Code',
    accentColor: '#ea580c',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    levelsCount: 11,
    lessons: htmlLessons
  },
  {
    id: 'css',
    title: 'CSS Core',
    subtitle: '21 уровень мастерства',
    description: 'Погрузитесь в стилизацию: Flexbox, CSS Grid, адаптивность, анимации, CSS-переменные, трансформации и современные эффекты.',
    iconName: 'Palette',
    accentColor: '#2563eb',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    levelsCount: 21,
    lessons: cssLessons
  },
  {
    id: 'javascript',
    title: 'JavaScript Master',
    subtitle: '14 уровней мастерства',
    description: 'Освойте язык интерактивности: типы данных, методы массивов, работу с DOM, события, замыкания, асинхронность, Fetch API и WebSockets.',
    iconName: 'Zap',
    accentColor: '#eab308',
    gradient: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
    levelsCount: 14,
    lessons: jsLessons
  },
  {
    id: 'pro',
    title: 'Web Development Pro',
    subtitle: '5 уровней мастерства',
    description: 'Узнайте о работе в ИТ-команде, Agile/Scrum процессах, Git workflow, архитектуре FSD, веб-безопасности, Core Web Vitals, тестах и Code Review.',
    iconName: 'Award',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    levelsCount: 5,
    lessons: proLessons
  }
];
