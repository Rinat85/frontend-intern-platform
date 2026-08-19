import { Lesson, CheatSheetCategory, Module } from '../types/curriculum';

export const cheatSheetsData: CheatSheetCategory[] = [
  {
    "id": "html-cheatsheet",
    "title": "HTML5 Шпаргалка",
    "icon": "Code",
    "items": [
      {
        "name": "Базовая структура",
        "syntax": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Заголовок</title>\n</head>\n<body>\n</body>\n</html>",
        "description": "Минимальный валидный HTML5-документ"
      },
      {
        "name": "Семантические теги",
        "syntax": "<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>",
        "description": "Смысловая разметка страницы для доступности и SEO"
      },
      {
        "name": "Формы",
        "syntax": "<form action=\"/api\" method=\"POST\">\n  <label for=\"name\">Имя:</label>\n  <input id=\"name\" type=\"text\" required />\n  <button type=\"submit\">Отправить</button>\n</form>",
        "description": "Форма с валидацией и связкой label + input"
      }
    ]
  },
  {
    "id": "css-flexbox-cheatsheet",
    "title": "CSS Flexbox Шпаргалка",
    "icon": "Layout",
    "items": [
      {
        "name": "Контейнер",
        "syntax": "display: flex;\nflex-direction: row | column;\njustify-content: flex-start | center | space-between;\nalign-items: stretch | center;\ngap: 16px;",
        "description": "Основные свойства flex-контейнера"
      },
      {
        "name": "Элементы",
        "syntax": "flex: 1 1 auto; /* grow shrink basis */\nalign-self: center;\norder: 2;",
        "description": "Управление поведением flex-элементов"
      }
    ]
  },
  {
    "id": "css-grid-cheatsheet",
    "title": "CSS Grid Шпаргалка",
    "icon": "Grid",
    "items": [
      {
        "name": "Сетка колонок",
        "syntax": "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 24px;",
        "description": "Адаптивная сетка без медиа-запросов"
      },
      {
        "name": "Именованные области",
        "syntax": "grid-template-areas:\n  'header header'\n  'sidebar main'\n  'footer footer';",
        "description": "Раскладка страницы по областям"
      }
    ]
  },
  {
    "id": "js-cheatsheet",
    "title": "JavaScript Методы",
    "icon": "Zap",
    "items": [
      {
        "name": "Методы массивов",
        "syntax": "arr.map(x => x * 2);\narr.filter(x => x > 10);\narr.reduce((acc, x) => acc + x, 0);\narr.find(x => x.id === 5);",
        "description": "Основные методы функциональной обработки массивов"
      },
      {
        "name": "Async / Await",
        "syntax": "async function fetchData(url) {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) throw new Error('HTTP error');\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n  }\n}",
        "description": "Асинхронный запрос данных с обработкой ошибок"
      }
    ]
  },
  {
    "id": "git-cheatsheet",
    "title": "Git Команды",
    "icon": "GitBranch",
    "items": [
      {
        "name": "Ветки и коммиты",
        "syntax": "git checkout -b feature/my-feature\ngit add .\ngit commit -m \"feat: add new feature\"\ngit push origin feature/my-feature",
        "description": "Создание ветки, фиксация и отправка изменений"
      },
      {
        "name": "Синхронизация",
        "syntax": "git pull --rebase origin main\ngit stash\ngit stash pop",
        "description": "Подтягивание свежих изменений и временное сохранение"
      }
    ]
  }
];
