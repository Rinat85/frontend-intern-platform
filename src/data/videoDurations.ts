// Centralized duration catalog for all YouTube video lessons in the platform
export interface VideoDurationInfo {
  seconds: number;
  formatted: string; // e.g. "1:47:35" or "22:07"
  human: string;     // e.g. "1 ч 47 мин" or "22 мин"
  title?: string;
}

export const YOUTUBE_VIDEO_DURATIONS: Record<string, VideoDurationInfo> = {
  'sG12DK8vQTM': {
    seconds: 7853,
    formatted: '2:10:53',
    human: '2 ч 10 мин',
    title: 'Полный Курс CSS / Изучение в одном видео для начинающих с нуля'
  },
  'SpCUuyZZTp8': {
    seconds: 6455,
    formatted: '1:47:35',
    human: '1 ч 47 мин',
    title: 'CSS для Начинающих - Практический Курс'
  },
  'DhleEgRmWF8': {
    seconds: 1925,
    formatted: '32:05',
    human: '32 мин',
    title: 'Самый БЫСТРЫЙ путь до работы Frontend. Frontend Roadmap 2025'
  },
  'DOEtVdkKwcU': {
    seconds: 4763,
    formatted: '1:19:23',
    human: '1 ч 19 мин',
    title: 'Начни учить HTML с этого курса (Понятно даже чайнику)'
  },
  '8LOFZ0pQJ3E': {
    seconds: 1500,
    formatted: '25:00',
    human: '25 мин',
    title: 'Роадмап на WEB Разработчика (2026) - Все Изменилось'
  },
  'VRhuKMQz700': {
    seconds: 1099,
    formatted: '18:19',
    human: '18 мин',
    title: 'Как стать FRONT-END разработчиком: Чёткий путь от новичка до Middle [2025]'
  },
  'repA7DrmZPk': {
    seconds: 8730,
    formatted: '2:25:30',
    human: '2 ч 25 мин',
    title: 'Полный Курс HTML / Изучение в одном видео для начинающих с нуля'
  },
  'maPRR_jjyOE': {
    seconds: 24373,
    formatted: '6:46:13',
    human: '6 ч 46 мин',
    title: 'JavaScript для начинающих 2024. Полный курс за 6 часов. Уроки. Теория + практика'
  },
  '_jkiPoDmHnE': {
    seconds: 13721,
    formatted: '3:48:41',
    human: '3 ч 48 мин',
    title: 'Полный Курс JavaScript / Изучение в одном видео для начинающих с нуля'
  },
  'fcMcf_4PjfI': {
    seconds: 24931,
    formatted: '6:55:31',
    human: '6 ч 55 мин',
    title: 'JavaScript c Нуля - Курс для начинающих С ПРАКТИКОЙ (2025)'
  },
  'zyjhDRKpqm8': {
    seconds: 1361,
    formatted: '22:41',
    human: '22 мин',
    title: 'JavaScript [2021] оператор нулевого слияния и опциональной последовательности - на реальном примере'
  },
  '5fb2aPlgoys': {
    seconds: 9681,
    formatted: '2:41:21',
    human: '2 ч 41 мин',
    title: 'JavaScript DOM Manipulation – Full Course for Beginners'
  },
  'Z7V4ZtiF8Uc': {
    seconds: 2042,
    formatted: '34:02',
    human: '34 мин',
    title: 'Весь ООП в JavaScript за 35 мин'
  },
  'TxZwqVTaCmA': {
    seconds: 2736,
    formatted: '45:36',
    human: '45 мин',
    title: 'SOLID ПРИНЦИПЫ простым языком (много примеров)'
  },
  '-6DWwR_R4Xk': {
    seconds: 2393,
    formatted: '39:53',
    human: '39 мин',
    title: 'ООП на простых примерах. Объектно-ориентированное программирование'
  },
  'kZFLHCz2a30': {
    seconds: 3348,
    formatted: '55:48',
    human: '55 мин',
    title: 'Разбираем Event loop на примерах | микро, макро таски, nextTick, setImmediate | Уроки JavaScript'
  },
  'aq_chBS-OI0': {
    seconds: 789,
    formatted: '13:09',
    human: '13 мин',
    title: 'Why I No longer Hate CORS and Why you should too!'
  },
  'XuFaQSW79rM': {
    seconds: 847,
    formatted: '14:07',
    human: '14 мин',
    title: 'Лучший Гайд по Git Для Начинающих За 15 Минут'
  },
  'zZBiln_2FhM': {
    seconds: 2974,
    formatted: '49:34',
    human: '49 мин',
    title: 'Git и GitHub Курс Для Новичков'
  },
  'umiT0yIsSrc': {
    seconds: 703,
    formatted: '11:43',
    human: '11 мин',
    title: 'Что такое Git flow и когда использовать?'
  },
  'ANj7qUgzNq4': {
    seconds: 1327,
    formatted: '22:07',
    human: '22 мин',
    title: 'CI CD наглядные примеры'
  },
  'e0A2hDObLmg': {
    seconds: 6971,
    formatted: '1:56:11',
    human: '1 ч 56 мин',
    title: 'Github Actions - Введение в CI/CD'
  },
  'ZFzn2AQPwRA': {
    seconds: 1042,
    formatted: '17:22',
    human: '17 мин',
    title: 'ВСЁ Что нужно знать о БЕЗОПАСНОСТИ Фронтенд разработчику (XSS, CSRF)'
  },
  'eVZEwEQg4pg': {
    seconds: 389,
    formatted: '6:29',
    human: '6 мин',
    title: 'Flexbox CSS практический курс за 6 минут. Все свойства'
  },
};

export function getVideoDuration(videoId?: string): VideoDurationInfo | null {
  if (!videoId) return null;
  return YOUTUBE_VIDEO_DURATIONS[videoId] || null;
}

export function extractYouTubeVideoId(url: string): string {
  if (!url) return '';
  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1]?.split('?')[0] || '';
  }
  if (url.includes('v=')) {
    return url.split('v=')[1]?.split('&')[0] || '';
  }
  if (url.includes('/embed/')) {
    return url.split('/embed/')[1]?.split('?')[0] || '';
  }
  return '';
}
