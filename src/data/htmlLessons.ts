import { Lesson } from '../types/curriculum';

export const htmlLessons: Lesson[] = [
  {
    "id": "html-1",
    "moduleId": "html",
    "level": 1,
    "title": "Знакомство с HTML",
    "subtitle": "Как устроен веб, клиент-серверная архитектура, Critical Rendering Path и анатомия HTML",
    "description": "Глубокое погружение в основы интернета: как работают браузеры, что такое DNS, TCP/TLS, HTTP-запросы, как строится DOM-дерево, как работает Critical Rendering Path и почему HTML является фундаментом современного фронтенда.",
    "estimatedMinutes": 45,
    "difficulty": "beginner",
    "tags": [
      "HTML5",
      "Web Architecture",
      "HTTP/HTTPS",
      "DOM",
      "Critical Rendering Path",
      "Browser Engine"
    ],
    "theory": {
      "overview": "HTML (`HyperText Markup Language` — язык гипертекстовой разметки) — это глобальный фундамент, на котором построена вся Всемирная паутина. Каждый раз, когда вы открываете любой веб-сервис — от поисковика до высоконагруженного финтех-интерфейса — первым делом браузер получает и парсит именно HTML-документ.\n\nHTML не является языком программирования — в нём нет переменных, вычислений или циклов. Это **декларативный язык семантической разметки**, задача которого — строго описать структуру, смысл и иерархию информации. Он сообщает браузеру, поисковым роботам и скринридерам (системам экранного доступа для людей с ограниченными возможностями): «это главный заголовок документа», «это навигационное меню», «это форма оплаты», а «это таблица с финансовыми данными».",
      "sections": [
        {
          "title": "Как браузер загружает и открывает сайт: Полный цикл Request-Response",
          "content": "Взаимодействие пользователя с веб-сайтом строится по фундаментальной модели «Клиент — Сервер» через цепочку последовательных этапов:\n- 1. **Парсинг URL**: пользователь вводит адрес (например, `https://octo-intern.vercel.app/lessons`). Браузер извлекает протокол (`https`), доменное имя хоста (`octo-intern.vercel.app`) и путь к ресурсу (`/lessons`).\n- 2. **DNS-резолвинг (Domain Name System)**: браузер проверяет локальный DNS-кэш, обращается к системному резолверу и иерархии DNS-серверов, чтобы преобразовать человекочитаемый домен в IP-адрес сервера (например, `76.76.21.21`).\n- 3. **Установка сетевого соединения (TCP + TLS Handshake)**: выполняется тройное рукопожатие TCP (`SYN` -> `SYN-ACK` -> `ACK`) и шифрованное согласование ключей TLS 1.3 по защищённому протоколу HTTPS (порт 443).\n- 4. **Отправка HTTP-запроса**: браузер формирует и отправляет на сервер HTTP-запрос (метод `GET /lessons`, заголовки `Host`, `User-Agent`, `Accept`, `Cookie`).\n- 5. **Ответ сервера**: веб-сервер обрабатывает запрос и возвращает статус-код (`200 OK`), заголовки (`Content-Type: text/html; charset=UTF-8`) и тело ответа — поток байтов HTML-документа.",
          "codeExample": {
            "language": "html",
            "title": "Минимальный валидный HTML5-документ",
            "code": "<!DOCTYPE html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Мой первый сайт</title>\n  </head>\n  <body>\n    <h1>Добро пожаловать в веб-разработку!</h1>\n    <p>Браузер прочитал этот HTML и отобразил текст.</p>\n  </body>\n</html>",
            "explanation": "DOCTYPE объявляет стандарт HTML5, html lang задает язык, head хранит метаданные для браузера, а body содержит видимый контент."
          },
          "image": {
            "src": "/images/lessons/http-request-cycle.jpg",
            "alt": "Диаграмма полного цикла HTTP Request-Response между браузером и сервером",
            "caption": "Полный цикл сетевого взаимодействия: DNS-резолвинг → TCP + TLS Handshake → HTTP GET → 200 OK + HTML"
          }
        },
        {
          "title": "Critical Rendering Path: Как браузер превращает HTML в пиксели на экране",
          "content": "Браузерный движок (Blink в Chrome/Edge, Gecko в Firefox, WebKit в Safari) не может отобразить голый текст напрямую. Он выполняет конвейер Critical Rendering Path (CRP):\n- 1. **Bytes -> Characters -> Tokens -> Nodes -> DOM**: Браузер считывает байты из сети, декодирует символы по UTF-8, токенизирует теги и строит в оперативной памяти древовидную объектную модель — `Document Object Model (DOM)`.\n- 2. **CSSOM Construction**: Параллельно парсятся CSS-стили и создаётся `CSS Object Model (CSSOM)`.\n- 3. **Render Tree (Дерево рендеринга)**: DOM и CSSOM объединяются в единое дерево. Элементы с `display: none` и теги `<head>` исключаются из Render Tree, так как не занимают места на экране.\n- 4. **Layout (Reflow / Компоновка)**: Браузер рассчитывает точные геометрические координаты (`x, y, width, height`) каждого прямоугольного бокса в пикселях экрана.\n- 5. **Paint (Растеризация)**: Векторные боксы, текст, тени и цвета отрисовываются в пиксели в памяти графических слоёв.\n- 6. **Composite (Композитинг)**: Слои сводятся графическим процессором (GPU) и выводятся на физический монитор с частотой 60/120 кадров в секунду.",
          "codeExample": {
            "language": "html",
            "title": "Иерархия элементов и построение DOM-дерева",
            "code": "<div class=\"card\">\n  <h2 class=\"card-title\">Объектная модель DOM</h2>\n  <p class=\"card-desc\">Каждый тег становится узлом (Node) в памяти браузера.</p>\n  <button class=\"card-btn\" type=\"button\">Подробнее</button>\n</div>",
            "explanation": "Элемент <div> является родителем (parent) для <h2>, <p> и <button>, которые являются дочерними узлами (children) и соседями (siblings) в DOM-дереве."
          },
          "image": {
            "src": "/images/lessons/critical-rendering-path.jpg",
            "alt": "Конвейер Critical Rendering Path: Bytes → Tokens → DOM + CSSOM → Render Tree → Layout → Paint + Composite",
            "caption": "Critical Rendering Path: как браузер превращает HTML-байты из сети в пиксели на экране пользователя"
          }
        },
        {
          "title": "Анатомия HTML-элемента: Теги, Атрибуты и Void Elements",
          "content": "Любая разметка состоит из строительных кирпичиков — HTML-элементов:\n- **Открывающий тег (`<tagname>`)**: обозначает начало элемента и может содержать атрибуты.\n- **Закрывающий тег (`</tagname>`)**: обозначает конец элемента (содержит косую черту `/`).\n- **Содержимое (Content)**: вложенный текст или другие дочерние элементы между тегами.\n- **Атрибуты (`name=\"value\"`)**: пары имя-значение, передающие браузеру дополнительные параметры (например, адрес ссылки `href`, путь к картинке `src`, классы для стилизации `class`).\n- **Булевы атрибуты (Boolean attributes)**: атрибуты, значение которых определяется самим фактом их присутствия (`disabled`, `required`, `checked`, `readonly`, `hidden`, `defer`).\n- **Void Elements (Одиночные теги)**: элементы, которые не имеют закрывающего тега и не могут содержать текста или вложенных тегов: `<img>`, `<input>`, `<meta>`, `<link>`, `<br>`, `<hr>`, `<source>`.\n- **Дата-атрибуты (`data-*`)**: кастомные атрибуты для безопасной передачи параметров в JavaScript без нарушения спецификации HTML (например, `data-user-id=\"101\"`, `data-role=\"admin\"`).",
          "codeExample": {
            "language": "html",
            "title": "Комплексный пример тега со всеми типами атрибутов",
            "code": "<a href=\"https://github.com/octo\"\n   target=\"_blank\"\n   rel=\"noopener noreferrer\"\n   class=\"profile-link btn-primary\"\n   id=\"octo-profile-btn\"\n   data-user-id=\"4092\"\n   data-analytics=\"profile_click\"\n   title=\"Перейти в GitHub профиль\">\n  <span>Открыть профиль инженера</span>\n</a>",
            "explanation": "Тег <a> (ссылка) содержит адрес href, атрибуты безопасности rel, идентификатор id, CSS-классы, пользовательские дата-атрибуты data-* и всплывающую подсказку title."
          }
        },
        {
          "title": "Обязательный скелет документа HTML5 и метаданные в <head>",
          "content": "Каждый профессиональный веб-документ обязан содержать стандартный каркас:\n- `<!DOCTYPE html>` — директива, сообщающая браузеру, что документ написан по современному стандарту HTML5. Без неё браузер переходит в режим обратной совместимости (`Quirks Mode`), что приводит к багам отрисовки и ломает блочную модель CSS.\n- `<html lang=\"ru\">` — корневой элемент. Атрибут `lang` критически важен для скринридеров (выбор правильного голосового движка), поисковых систем и систем автоматического перевода.\n- `<meta charset=\"UTF-8\">` — объявляет универсальную кодировку символов Unicode (поддерживает кириллицу, латиницу, эмодзи). Должен идти первым в теге `<head>`.\n- `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` — включает корректную адаптивную верстку на смартфонах и планшетах, синхронизируя ширину вьюпорта с физическим экраном устройства.\n- `<title>` — задает название вкладки в браузере, имя в закладках и заголовок сниппета в поисковой выдаче.\n- `<link rel=\"stylesheet\" href=\"styles.css\">` — подключает внешнюю таблицу стилей.\n- `<script defer src=\"app.js\">` — подключает JavaScript. Атрибут `defer` загружает скрипт асинхронно в фоне и выполняет его строго после построения DOM-дерева, не блокируя начальный рендеринг страницы.",
          "codeExample": {
            "language": "html",
            "title": "Промышленный шаблон HTML5-документа",
            "code": "<!DOCTYPE html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Личный кабинет стажёра — Frontend Academy</title>\n    <link rel=\"stylesheet\" href=\"styles/main.css\">\n    <script defer src=\"scripts/app.js\"></script>\n  </head>\n  <body>\n    <header class=\"app-header\">\n      <h1>Frontend Intern Academy</h1>\n    </header>\n    <main class=\"app-content\">\n      <p>Добро пожаловать в учебную программу!</p>\n    </main>\n  </body>\n</html>",
            "explanation": "Стили подключаются в <head> через <link>, а скрипты с атрибутом defer выполняются после построения DOM, не блокируя рендеринг."
          }
        }
      ],
      "seniorTips": [
        "Всегда соблюдайте строгую иерархию вложенности тегов (LIFO: Last In, First Out). Тег, открытый последним, обязан закрываться первым.",
        "Имена всех тегов и стандартных атрибутов всегда пишите строго в нижнем регистре (lowercase) — это общепринятый стандарт индустрии и спецификации WHATWG.",
        "Значения всех атрибутов всегда оборачивайте в двойные кавычки: class=\"card-header\", а не class=card-header.",
        "Всегда указывайте директиву <!DOCTYPE html> первой строкой файла, чтобы предотвратить включение Quirks Mode (режима багов 90-х годов).",
        "Никогда не забывайте указывать атрибут lang в теге <html> — это базовое требование доступности (Web Accessibility) и международного стандарта WCAG 2.1.",
        "Подключайте внешние скрипты в <head> с атрибутом defer — это устраняет блокировку парсинга HTML и ускоряет метрику First Contentful Paint (FCP)."
      ],
      "commonMistakes": [
        {
          "bad": "<h1>Заголовок <p>Текст абзаца</h1></p>",
          "good": "<h1>Заголовок</h1>\n<p>Текст абзаца</p>",
          "reason": "Перекрещивание тегов ломает построение DOM-дерева и заставляет браузер включать механизм исправления ошибок (Error Recovery), что замедляет рендеринг и приводит к непредсказуемым багам."
        },
        {
          "bad": "<IMG SRC=photo.jpg ALIGN=CENTER WIDTH=300>",
          "good": "<img src=\"photo.jpg\" alt=\"Фотография профиля стажёра\" width=\"300\" height=\"300\" class=\"profile-photo\" />",
          "reason": "Теги в верхнем регистре и атрибуты без кавычек нарушают чистоту кода. Отсутствие обязательного атрибута alt ломает доступность для незрячих пользователей со скринридерами."
        },
        {
          "bad": "<html>\n<head>\n  <title>Страница</title>\n</head>\n<body>...</body>\n</html>",
          "good": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Страница</title>\n</head>\n<body>...</body>\n</html>",
          "reason": "Отсутствие DOCTYPE включает режим Quirks Mode. Отсутствие meta charset приводит к кракозябрам на серверах с нестандартной кодировкой, а отсутствие meta viewport ломает мобильное отображение."
        },
        {
          "bad": "<head>\n  <script src=\"heavy-bundle.js\"></script>\n</head>",
          "good": "<head>\n  <script defer src=\"heavy-bundle.js\"></script>\n</head>",
          "reason": "Синхронный скрипт без defer или async полностью останавливает HTML-парсер до тех пор, пока файл не скачается по сети и не выполнится, создавая белый экран для пользователя."
        }
      ],
      "keyTakeaways": [
        "HTML отвечает исключительно за семантическую структуру и смысл документа, а CSS — за его визуальное представление.",
        "Браузер считывает HTML по протоколу HTTP(S) и строит в оперативной памяти древовидную объектную модель — DOM (Document Object Model).",
        "Critical Rendering Path состоит из последовательных шагов: Bytes -> Tokens -> DOM + CSSOM -> Render Tree -> Layout -> Paint -> Composite.",
        "Директива <!DOCTYPE html> обязательна в первой строке для включения стандартного режима рендеринга Standards Mode.",
        "Атрибуты meta charset=\"UTF-8\" и meta viewport критически важны для корректной кодировки и адаптивности на мобильных устройствах.",
        "Для безопасного хранения пользовательских данных в DOM используются кастомные data-* атрибуты."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"developer-card\">\n  <div class=\"badge\">Junior Engineer</div>\n  <h1 class=\"dev-name\">Алексей Смирнов</h1>\n  <p class=\"dev-role\">Frontend Developer Intern @ Octo Platform</p>\n  <p class=\"dev-bio\">\n    Изучаю фундаментальный стек веб-разработки: <strong>HTML5</strong>, <strong>CSS3</strong> и <strong>JavaScript ES6+</strong>.\n  </p>\n  <div class=\"tech-stack\">\n    <span class=\"tech-tag\">HTML5</span>\n    <span class=\"tech-tag\">CSS Grid</span>\n    <span class=\"tech-tag\">TypeScript</span>\n    <span class=\"tech-tag\">React</span>\n  </div>\n  <button class=\"action-btn\" id=\"status-btn\" data-active=\"true\" onclick=\"toggleStatus()\">\n    ⚡ Проверить статус онбординга\n  </button>\n  <div id=\"status-output\" class=\"status-box\">Статус: Активный стажёр курса</div>\n</div>",
      "initialCss": ".developer-card {\n  background: #0a0e13;\n  border: 1px solid #1a2230;\n  border-left: 4px solid #2dff8a;\n  color: #d6f5e3;\n  padding: 24px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  font-family: 'Inter', sans-serif;\n  max-width: 480px;\n}\n.badge {\n  display: inline-block;\n  background: rgba(45, 255, 138, 0.12);\n  color: #2dff8a;\n  border: 1px solid rgba(45, 255, 138, 0.3);\n  padding: 3px 8px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  border-radius: 4px;\n  margin-bottom: 12px;\n}\n.dev-name {\n  margin: 0 0 4px 0;\n  font-size: 24px;\n  font-weight: 800;\n  color: #ffffff;\n}\n.dev-role {\n  font-size: 13px;\n  color: #29e7ff;\n  margin: 0 0 16px 0;\n  font-weight: 500;\n}\n.dev-bio {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #a8c8b6;\n  margin-bottom: 18px;\n}\n.tech-stack {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.tech-tag {\n  background: #0f141a;\n  border: 1px solid #233044;\n  color: #d6f5e3;\n  font-family: 'JetBrains Mono', monospace;\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.action-btn {\n  background: #2dff8a;\n  color: #03060a;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 100%;\n}\n.action-btn:hover {\n  background: #14b365;\n  box-shadow: 0 0 15px rgba(45, 255, 138, 0.4);\n}\n.status-box {\n  margin-top: 14px;\n  padding: 10px 14px;\n  background: #0f141a;\n  border: 1px dashed #2dff8a;\n  font-size: 12px;\n  font-family: 'JetBrains Mono', monospace;\n  color: #2dff8a;\n  text-align: center;\n  border-radius: 4px;\n}",
      "initialJs": "function toggleStatus() {\n  const box = document.getElementById('status-output');\n  const btn = document.getElementById('status-btn');\n  const isActive = btn.getAttribute('data-active') === 'true';\n  \n  if (isActive) {\n    btn.setAttribute('data-active', 'false');\n    box.innerText = '🚀 Статус: Выполняет практическое задание уровня 1';\n    box.style.borderColor = '#29e7ff';\n    box.style.color = '#29e7ff';\n  } else {\n    btn.setAttribute('data-active', 'true');\n    box.innerText = 'Статус: Активный стажёр курса';\n    box.style.borderColor = '#2dff8a';\n    box.style.color = '#2dff8a';\n  }\n}\nconsole.log('Песочница Уровня 1: DOM и события готовы!');",
      "instructions": "Попробуйте изменить имя стажера в <h1>, добавьте новые теги в стек технологий <span class=\"tech-tag\">, нажмите «Запустить» и протестируйте клик по кнопке!"
    },
    "task": {
      "title": "Разработка карточки-профиля стажёра платформы",
      "scenario": "Команда онбординга поручила вам создать персональную семантическую карточку стажёра на чистом HTML для отображения в корпоративном реестре инженеров. Карточка должна строго следовать стандартам W3C, содержать корректную семантическую структуру, дата-атрибуты и теги выделения текста.",
      "criteria": [
        "Контейнер карточки обёрнут в тег <div> с классом business-card",
        "Присутствует главный заголовок <h1> с вашим именем и фамилией",
        "Добавлена должность в параграфе <p> с использованием тега <strong>",
        "Добавлен список ключевых технологий с тегами <span> и классами tech-badge",
        "Присутствует кнопка <button> с атрибутом type=\"button\" и кастомным data-статусом"
      ],
      "starterCode": {
        "html": "<!-- Создайте семантическую карточку стажёра -->\n<div class=\"business-card\">\n  \n</div>",
        "css": "/* Стили карточки */\n.business-card {\n  background: #0a0e13;\n  border: 1px solid #1a2230;\n  padding: 24px;\n  border-radius: 8px;\n  color: #d6f5e3;\n}\n.tech-badge {\n  background: rgba(45, 255, 138, 0.1);\n  color: #2dff8a;\n  padding: 2px 8px;\n  border-radius: 4px;\n  margin-right: 6px;\n  font-size: 12px;\n}\n"
      },
      "hints": [
        "Используйте теги <h1>, <p>, <strong> и <span> для соблюдения семантической иерархии.",
        "Не забудьте указать атрибут type=\"button\" у тега <button>, чтобы кнопка не вызывала непреднамеренную отправку формы.",
        "Добавьте data-атрибут, например data-status=\"intern\", для передачи параметров в JavaScript."
      ],
      "solution": {
        "html": "<div class=\"business-card\" data-user-role=\"intern\">\n  <h1>Иван Петров</h1>\n  <p><strong>Должность:</strong> Junior Frontend Developer</p>\n  <p><strong>Цель:</strong> Освоить архитектуру веб-приложений (HTML5, CSS3, ES6+, TypeScript, React).</p>\n  <div class=\"skills-row\">\n    <span class=\"tech-badge\">HTML5</span>\n    <span class=\"tech-badge\">CSS3</span>\n    <span class=\"tech-badge\">JavaScript</span>\n    <span class=\"tech-badge\">Git</span>\n  </div>\n  <button type=\"button\" class=\"action-btn\" data-action=\"contact\">Связаться с наставником</button>\n</div>",
        "css": ".business-card { background: #0a0e13; border: 1px solid #2dff8a; padding: 24px; border-radius: 8px; color: #d6f5e3; }\n.tech-badge { background: rgba(45, 255, 138, 0.15); color: #2dff8a; padding: 3px 8px; border-radius: 4px; margin-right: 6px; font-size: 12px; }\n.action-btn { margin-top: 16px; background: #2dff8a; color: #03060a; border: none; padding: 8px 16px; font-weight: 700; border-radius: 4px; cursor: pointer; }",
        "explanation": "Разметка содержит чёткую семантическую структуру: заголовок h1 для имени, абзацы со strong для ключевых данных, теги span для навыков и кнопку с атрибутом type=button."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h1-q1",
          "question": "Что означает аббревиатура HTML и в чём его ключевое назначение?",
          "options": [
            "HighText Machine Language — компилируемый язык для создания веб-серверов",
            "HyperText Markup Language — декларативный язык для описания структуры и смысла веб-документа",
            "Hyperlink and Text Management Language — язык запросов к базам данных в браузере",
            "Home Tool Markup Language — формат конфигурационных файлов для сборщиков"
          ],
          "correctIndex": 1,
          "explanation": "HTML расшифровывается как HyperText Markup Language (язык гипертекстовой разметки) и отвечает за семантическую структуру веб-страницы."
        },
        {
          "id": "h1-q2",
          "question": "Какую древовидную структуру в оперативной памяти строит браузерный движок в процессе парсинга HTML?",
          "options": [
            "JSON-RPC Tree",
            "DOM (Document Object Model)",
            "AST (Abstract Syntax Tree)",
            "Shadow Virtual Stack"
          ],
          "correctIndex": 1,
          "explanation": "Браузер парсит байты HTML и формирует в оперативной памяти древовидную объектную модель документа — DOM."
        },
        {
          "id": "h1-q3",
          "question": "Какой из перечисленных тегов является одиночным (void element) и НЕ может иметь закрывающего тега?",
          "options": [
            "<p>",
            "<div>",
            "<img>",
            "<span>"
          ],
          "correctIndex": 2,
          "explanation": "Тег <img> является void-элементом (самозакрывающимся). Он не имеет содержимого и закрывающего тега."
        },
        {
          "id": "h1-q4",
          "question": "Что произойдёт, если не указать директиву <!DOCTYPE html> в первой строке документа?",
          "options": [
            "Браузер выдаст фатальную ошибку 500 и откажется открывать страницу",
            "Браузер перейдёт в режим Quirks Mode (режим обратной совместимости со старыми багами 90-х годов)",
            "Весь JavaScript-код будет автоматически отключен из соображений безопасности",
            "Страница автоматически переключится в полноэкранный режим"
          ],
          "correctIndex": 1,
          "explanation": "Директива <!DOCTYPE html> сообщает браузеру о стандарте HTML5. Без неё включается Quirks Mode, ломающий блочную модель CSS и стандарты отображения."
        },
        {
          "id": "h1-q5",
          "question": "Зачем в теге <script> рекомендуется указывать атрибут defer при подключении в <head>?",
          "options": [
            "Чтобы скрипт выполнялся только в фоновом сервис-воркере",
            "Чтобы скрипт загружался асинхронно и выполнялся строго после завершения парсинга DOM, не блокируя начальный рендеринг страницы",
            "Чтобы полностью отключить обработку ошибок в скрипте",
            "Чтобы автоматически преобразовать JavaScript в WebAssembly"
          ],
          "correctIndex": 1,
          "explanation": "Атрибут defer гарантирует, что скрипт скачивается параллельно с парсингом HTML и запускается строго после того, как DOM-дерево полностью построено."
        }
      ]
    }
  },
  {
    "id": "html-2",
    "moduleId": "html",
    "level": 2,
    "title": "Семантическая разметка и формы",
    "subtitle": "HTML5 Semantic Elements, доступность WCAG, формы и валидация",
    "description": "Научитесь строить семантически правильные и доступные веб-страницы с помощью HTML5-элементов, создавать формы с нативной валидацией и понимать принципы WCAG 2.1.",
    "estimatedMinutes": 55,
    "difficulty": "beginner",
    "tags": [
      "semantic",
      "forms",
      "accessibility",
      "WCAG",
      "validation",
      "HTML5"
    ],
    "theory": {
      "overview": "В первом уроке мы разобрали анатомию HTML-документа и сетевой цикл Request-Response. Теперь пришло время углубиться в смысловое (семантическое) наполнение страницы. Семантика HTML — это не просто \"красивый код\". Это фундаментальный принцип, который напрямую влияет на три критически важные области: SEO (поисковая оптимизация), Accessibility (доступность для людей с ограниченными возможностями) и Maintainability (читаемость и поддерживаемость кода командой).\n\nПочему это важно для стажёра? На код-ревью senior-разработчики в первую очередь обращают внимание именно на семантику. Использование `<div>` и `<span>` вместо `<nav>`, `<article>`, `<section>` — один из самых частых красных флагов, который сразу показывает уровень понимания HTML.",
      "sections": [
        {
          "title": "HTML5 Семантические элементы: Структурная разметка страницы",
          "content": "Семантические элементы HTML5 несут в себе смысловую нагрузку — они описывают не то, КАК контент выглядит (за это отвечает CSS), а то, ЧЕМ он является. Браузеры, поисковые роботы (Googlebot, Yandex-bot) и ассистивные технологии (скринридеры JAWS, NVDA, VoiceOver) используют семантику для построения модели accessibility tree.\n\nОсновные семантические теги-лэндмарки (ARIA Landmarks):\n\n`<header>` — шапка страницы или секции. Обычно содержит логотип, навигацию и поисковую форму. Может быть несколько `<header>` на странице (например, header страницы и header внутри `<article>`). Скринридер объявляет: \"banner landmark\".\n\n`<nav>` — основная навигация сайта. Содержит ссылки на ключевые разделы. Рекомендуется использовать не более 2-3 на странице (основная навигация, навигация в подвале, хлебные крошки). Скринридер объявляет: \"navigation landmark\".\n\n`<main>` — главный контент страницы. Допускается только ОДИН на странице. Контент внутри `<main>` должен быть уникальным — не повторяться на других страницах. Скринридер объявляет: \"main landmark\".\n\n`<article>` — самодостаточная единица контента, которая имеет смысл вне контекста страницы (статья блога, пост в ленте, карточка товара, комментарий). Рекомендация: если контент можно вырезать и вставить на другой сайт и он сохранит смысл — используйте `<article>`.\n\n`<section>` — тематическая группировка контента, обычно с заголовком. Отличие от `<div>`: `<section>` несёт семантический смысл и должна иметь заголовок (`<h2>`-`<h6>`). Если заголовка нет, вероятно, нужен `<div>`.\n\n`<aside>` — побочный контент, косвенно связанный с основным: боковая панель, виджеты, рекламные блоки, блок \"Похожие статьи\".\n\n`<footer>` — подвал страницы или секции. Содержит копирайт, контакты, ссылки на политику конфиденциальности. Может быть несколько (footer страницы и footer внутри `<article>`).",
          "image": {
            "src": "/images/lessons/html-semantic-layout.jpg",
            "alt": "Сравнение семантической HTML5-структуры с div-разметкой",
            "caption": "Семантическая структура помогает поисковым системам, скринридерам и разработчикам понимать контент страницы"
          },
          "codeExample": {
            "language": "html",
            "code": "<body>\n  <header>\n    <nav aria-label=\"Основная навигация\">\n      <a href=\"/\">Главная</a>\n      <a href=\"/courses\">Курсы</a>\n      <a href=\"/about\">О нас</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <h1>Как стать Frontend-разработчиком</h1>\n      <section>\n        <h2>Шаг 1: Изучите HTML и CSS</h2>\n        <p>Начните с основ семантической разметки...</p>\n      </section>\n      <section>\n        <h2>Шаг 2: Освойте JavaScript</h2>\n        <p>JavaScript — язык интерактивности...</p>\n      </section>\n    </article>\n    <aside aria-label=\"Полезные ресурсы\">\n      <h3>Рекомендуемые материалы</h3>\n      <ul>\n        <li><a href=\"#\">MDN Web Docs</a></li>\n      </ul>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2024 Frontend Academy</p>\n  </footer>\n</body>",
            "title": "Семантический каркас страницы с ARIA-метками",
            "explanation": "Каждый landmark-элемент получает aria-label для уникальной идентификации скринридером. Обратите внимание: <main> один на странице, <article> содержит самостоятельный контент, <section> группирует тематически связанные блоки."
          }
        },
        {
          "title": "Доступность (Accessibility / a11y) и стандарт WCAG 2.1",
          "content": "Accessibility (сокращённо a11y — потому что между 'a' и 'y' ровно 11 символов) — это практика создания веб-сайтов, доступных для всех людей, включая пользователей с нарушениями зрения, слуха, моторики и когнитивных функций.\n\nWCAG 2.1 (Web Content Accessibility Guidelines) определяет 4 принципа, известных как POUR:\n\n1. Perceivable (Воспринимаемость): информация должна быть представлена в форме, доступной всем органам чувств. Пример: атрибут `alt` у `<img>` описывает содержимое для скринридеров и отображается при невозможности загрузить изображение.\n\n2. Operable (Управляемость): интерфейс должен быть полностью управляем с клавиатуры (Tab, Shift+Tab, Enter, Escape, стрелки). Фокус должен быть видимым (CSS `outline`).\n\n3. Understandable (Понятность): контент и навигация должны быть предсказуемыми. Формы должны давать чёткие инструкции и сообщения об ошибках.\n\n4. Robust (Надёжность): контент должен корректно интерпретироваться различными user agents, включая ассистивные технологии.\n\nКлючевые ARIA-атрибуты для стажёра:\n\n`aria-label` — текстовая метка для элемента без видимого текста (иконки-кнопки): `<button aria-label=\"Закрыть модальное окно\"><svg>...</svg></button>`.\n\n`aria-hidden=\"true\"` — скрывает декоративный элемент от скринридеров: `<span aria-hidden=\"true\">🎉</span>`.\n\n`aria-required=\"true\"` — указывает обязательное поле формы.\n\n`aria-live=\"polite\"` — объявляет динамические изменения содержимого (уведомления, счётчики).\n\n`role=\"alert\"` — мгновенно объявляет важное сообщение (ошибка валидации).",
          "codeExample": {
            "language": "html",
            "code": "<!-- Доступная карточка товара -->\n<article aria-labelledby=\"product-title\">\n  <img\n    src=\"/images/keyboard.jpg\"\n    alt=\"Механическая клавиатура Keychron K8\n    с подсветкой RGB, 87 клавиш, TKL\"\n    width=\"400\" height=\"300\"\n    loading=\"lazy\"\n  />\n  <h3 id=\"product-title\">Keychron K8 Pro</h3>\n  <p>Цена: <strong>12 990 ₽</strong></p>\n  <button\n    type=\"button\"\n    aria-label=\"Добавить Keychron K8 Pro в корзину\"\n  >\n    В корзину\n  </button>\n</article>\n\n<!-- Доступное уведомление -->\n<div role=\"alert\" aria-live=\"assertive\">\n  Товар добавлен в корзину!\n</div>",
            "title": "Доступная карточка товара с ARIA-атрибутами",
            "explanation": "alt у img описывает содержимое подробно. aria-labelledby связывает article с заголовком. aria-label у кнопки-иконки дает текст для скринридера. role='alert' мгновенно объявляет обновление."
          }
        },
        {
          "title": "HTML-формы: элементы, атрибуты и нативная валидация",
          "content": "Формы (`<form>`) — это основной механизм сбора данных от пользователя в вебе. Каждая форма авторизации, регистрации, поиска, оформления заказа и обратной связи построена на HTML-формах.\n\nАнатомия HTML-формы:\n\n`<form>` — контейнер формы. Ключевые атрибуты: `action` (URL для отправки), `method` (GET/POST), `novalidate` (отключает нативную валидацию, если нужна кастомная).\n\n`<label>` — текстовая метка, связанная с полем. Связь через `for=\"id-поля\"` или оборачиванием поля внутрь `<label>`. Клик по label фокусирует соответствующее поле — это критически важно для мобильных устройств и a11y.\n\n`<input>` — универсальный элемент ввода. Тип определяет поведение:\n- `type=\"text\"` — строка текста\n- `type=\"email\"` — валидация формата email\n- `type=\"password\"` — маскировка символов\n- `type=\"number\"` — числовой ввод с min/max/step\n- `type=\"tel\"` — номер телефона (мобильная клавиатура)\n- `type=\"url\"` — валидация URL\n- `type=\"date\"` — нативный дейтпикер\n- `type=\"checkbox\"` / `type=\"radio\"` — чекбоксы и радиокнопки\n- `type=\"file\"` — загрузка файлов (`accept=\".jpg,.png\"`)\n- `type=\"hidden\"` — скрытое поле (CSRF-токен)\n\n`<textarea>` — многострочный текстовый ввод с `rows` и `cols`.\n\n`<select>` + `<option>` + `<optgroup>` — выпадающий список с группировкой.\n\n`<fieldset>` + `<legend>` — визуальная и семантическая группировка полей.\n\nАтрибуты нативной валидации HTML5:\n\n`required` — поле обязательно для заполнения.\n`minlength` / `maxlength` — минимальная/максимальная длина текста.\n`min` / `max` — диапазон для числовых значений.\n`pattern` — регулярное выражение для валидации (например, `pattern=\"[A-Za-z]{3,}\"`).\n`placeholder` — подсказка в поле (НЕ замена `<label>`!).\n`autocomplete` — подсказка браузеру для автозаполнения (`autocomplete=\"email\"`).",
          "codeExample": {
            "language": "html",
            "code": "<form action=\"/api/register\" method=\"POST\">\n  <fieldset>\n    <legend>Регистрация стажёра</legend>\n\n    <label for=\"fullname\">ФИО</label>\n    <input\n      type=\"text\" id=\"fullname\" name=\"fullname\"\n      required minlength=\"5\" maxlength=\"100\"\n      autocomplete=\"name\"\n      placeholder=\"Иванов Иван Иванович\"\n    />\n\n    <label for=\"email\">Email</label>\n    <input\n      type=\"email\" id=\"email\" name=\"email\"\n      required\n      autocomplete=\"email\"\n      placeholder=\"intern@company.ru\"\n    />\n\n    <label for=\"phone\">Телефон</label>\n    <input\n      type=\"tel\" id=\"phone\" name=\"phone\"\n      pattern=\"\\+7[0-9]{10}\"\n      placeholder=\"+79001234567\"\n      title=\"Формат: +7XXXXXXXXXX\"\n    />\n\n    <label for=\"position\">Направление</label>\n    <select id=\"position\" name=\"position\" required>\n      <option value=\"\">Выберите...</option>\n      <optgroup label=\"Разработка\">\n        <option value=\"frontend\">Frontend</option>\n        <option value=\"backend\">Backend</option>\n      </optgroup>\n      <optgroup label=\"Дизайн\">\n        <option value=\"ui\">UI/UX Design</option>\n      </optgroup>\n    </select>\n\n    <label for=\"motivation\">Мотивация</label>\n    <textarea\n      id=\"motivation\" name=\"motivation\"\n      rows=\"4\" minlength=\"50\" maxlength=\"1000\"\n      required\n      placeholder=\"Расскажите, почему хотите стажировку...\"\n    ></textarea>\n\n    <button type=\"submit\">Отправить заявку</button>\n  </fieldset>\n</form>",
            "title": "Форма регистрации с нативной валидацией HTML5",
            "explanation": "Каждый input привязан к label через for/id. Валидация работает нативно: required, type='email', pattern для телефона. fieldset + legend семантически группируют поля. optgroup создаёт разделы в select."
          }
        },
        {
          "title": "Мультимедиа в HTML5: <picture>, <video>, <audio> и адаптивные изображения",
          "content": "Современный веб — это мультимедиа. HTML5 предоставляет нативные элементы для встраивания изображений, видео и аудио без сторонних плагинов.\n\nАдаптивные изображения — один из ключевых аспектов производительности. Основные инструменты:\n\n1. `<img>` с атрибутами `srcset` и `sizes` — позволяет браузеру самому выбрать оптимальное разрешение изображения:\n- `srcset` перечисляет варианты изображений с указанием ширины (`200w`, `400w`, `800w`)\n- `sizes` описывает, какую ширину элемент займёт на экране при разных viewport\n- Браузер автоматически выбирает наиболее подходящий файл на основе DPR (Device Pixel Ratio) устройства и доступной ширины\n\n2. `<picture>` — предоставляет полный контроль с помощью `<source>`: разные форматы (WebP, AVIF, JPEG), разные кадрирования для мобильных и десктоп, и поддержка art direction (разные изображения для разных экранов).\n\n3. Атрибуты `width` и `height` — предотвращают CLS (Cumulative Layout Shift, визуальный скачок) при загрузке.\n\n4. `loading=\"lazy\"` — отложенная загрузка для изображений за пределами viewport.\n\n5. `<video>` — нативный видеоплеер с атрибутами `controls`, `autoplay`, `muted`, `loop`, `poster`, `preload`.\n\n6. `<audio>` — нативный аудиоплеер с аналогичными атрибутами.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Адаптивное изображение с WebP fallback -->\n<picture>\n  <source\n    type=\"image/avif\"\n    srcset=\"hero-400.avif 400w,\n            hero-800.avif 800w,\n            hero-1200.avif 1200w\"\n    sizes=\"(max-width: 768px) 100vw, 50vw\"\n  />\n  <source\n    type=\"image/webp\"\n    srcset=\"hero-400.webp 400w,\n            hero-800.webp 800w\"\n    sizes=\"(max-width: 768px) 100vw, 50vw\"\n  />\n  <img\n    src=\"hero-800.jpg\"\n    alt=\"Рабочее место frontend-разработчика\"\n    width=\"800\" height=\"450\"\n    loading=\"lazy\"\n    decoding=\"async\"\n  />\n</picture>\n\n<!-- Встроенное видео с субтитрами -->\n<video\n  controls\n  width=\"640\" height=\"360\"\n  poster=\"preview.jpg\"\n  preload=\"metadata\"\n>\n  <source src=\"intro.mp4\" type=\"video/mp4\" />\n  <source src=\"intro.webm\" type=\"video/webm\" />\n  <track\n    kind=\"subtitles\"\n    src=\"subs-ru.vtt\"\n    srclang=\"ru\"\n    label=\"Русские субтитры\"\n    default\n  />\n</video>",
            "title": "Адаптивные изображения и видео с мультиформатной поддержкой",
            "explanation": "picture предоставляет браузеру AVIF → WebP → JPEG фолбэк. srcset + sizes позволяет браузеру выбрать оптимальный размер. width/height предотвращает CLS. video с track обеспечивает субтитры для a11y."
          }
        }
      ],
      "seniorTips": [
        "Используйте HTML Validator (W3C) и axe DevTools для автоматической проверки семантики и a11y. Lighthouse в Chrome DevTools показывает Accessibility Score — стремитесь к 100/100.",
        "Каждый интерактивный элемент (кнопка, ссылка, поле ввода) должен быть фокусируемым с клавиатуры и иметь видимый фокус (outline). Никогда не используйте outline: none без альтернативы.",
        "Атрибут alt — обязательный для всех <img>. Для декоративных изображений используйте alt='' (пустой), чтобы скринридер их пропустил, а не aria-hidden на img.",
        "Используйте heading hierarchy (h1 → h2 → h3) строго по вложенности. Не пропускайте уровни (h1 → h3). Это критически важно для навигации скринридеров."
      ],
      "commonMistakes": [
        {
          "bad": "<div class=\"header\">\n  <div class=\"nav\">\n    <div class=\"link\">Главная</div>\n  </div>\n</div>",
          "good": "<header>\n  <nav aria-label=\"Главное меню\">\n    <a href=\"/\">Главная</a>\n  </nav>\n</header>",
          "reason": "div-суп (div soup) уничтожает семантику. Скринридеры не могут определить роли элементов. Поисковые роботы не понимают структуру контента. CSS-классы не заменяют семантические теги."
        },
        {
          "bad": "<input type=\"text\" placeholder=\"Email\">\n<button>▶</button>",
          "good": "<label for=\"email\">Email</label>\n<input type=\"email\" id=\"email\" required>\n<button type=\"submit\"\n  aria-label=\"Отправить форму\">\n  ▶\n</button>",
          "reason": "Placeholder не заменяет label — он исчезает при вводе. Input без label невидим для скринридеров. Кнопка-иконка без aria-label не имеет доступного имени."
        },
        {
          "bad": "<img src=\"photo.jpg\">",
          "good": "<img src=\"photo.jpg\"\n  alt=\"Команда разработчиков на митинге\"\n  width=\"800\" height=\"450\"\n  loading=\"lazy\"\n/>",
          "reason": "Без alt скринридер озвучит имя файла ('photo.jpg'). Без width/height произойдёт CLS (скачок контента) при загрузке. Без loading='lazy' изображения за viewport нагружают сеть."
        }
      ],
      "keyTakeaways": [
        "Семантические теги HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) описывают СМЫСЛ контента, а не его внешний вид — это критически важно для SEO и доступности.",
        "WCAG 2.1 определяет 4 принципа доступности (POUR): Perceivable, Operable, Understandable, Robust. Каждый интерактивный элемент должен быть фокусируемым с клавиатуры и иметь доступное имя.",
        "HTML-формы используют нативную валидацию (`required`, `type`, `pattern`, `minlength`/`maxlength`) — это первая линия защиты. `<label>` обязателен для каждого поля ввода.",
        "`<picture>` с `<source>` предоставляет мультиформатный фолбэк (AVIF → WebP → JPEG). `srcset` + `sizes` позволяет браузеру автоматически выбрать оптимальный размер изображения.",
        "Всегда указывайте `alt` для `<img>`, `width`/`height` для предотвращения CLS, и `loading=\"lazy\"` для изображений за пределами viewport."
      ]
    },
    "sandbox": {
      "initialHtml": "<form id=\"contact-form\">\n  <!-- Создайте форму обратной связи -->\n  <!-- с полями: имя, email, тема, сообщение -->\n  <!-- и кнопкой отправки -->\n</form>",
      "initialCss": "form {\n  max-width: 480px;\n  margin: 0 auto;\n  font-family: system-ui, sans-serif;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 4px;\n  font-weight: 600;\n  font-size: 14px;\n}\n\ninput, textarea, select {\n  width: 100%;\n  padding: 8px 12px;\n  margin-bottom: 16px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\nbutton[type='submit'] {\n  background: #2dff8a;\n  color: #0a0e13;\n  border: none;\n  padding: 10px 24px;\n  border-radius: 6px;\n  font-weight: 700;\n  cursor: pointer;\n}",
      "initialJs": "document.getElementById('contact-form')\n  .addEventListener('submit', (e) => {\n    e.preventDefault();\n    alert('Форма отправлена!');\n  });",
      "instructions": "Создайте семантическую форму обратной связи:\n1. Оберните всё в <fieldset> с <legend>\n2. Добавьте поля: ФИО (text, required), Email (email, required), Тема (select с 3 вариантами), Сообщение (textarea, minlength=20)\n3. Каждое поле должно иметь <label> с for/id связью\n4. Добавьте кнопку submit\n5. Проверьте, что нативная валидация работает"
    },
    "task": {
      "title": "Семантическая страница портфолио",
      "scenario": "Вам поручили создать Landing Page портфолио frontend-разработчика с правильной семантической структурой. Страница должна быть полностью доступна с клавиатуры и корректно восприниматься скринридерами.",
      "criteria": [
        "Использовать все основные landmark-элементы: header, nav, main, article, section, aside, footer",
        "Навигация содержит минимум 3 ссылки-якоря (<a href=\"#skills\">)",
        "Секция 'Обо мне' оформлена как <article> с <h1> внутри",
        "Секция 'Навыки' содержит <ul> или <dl> (definition list)",
        "Форма обратной связи с label, required, type=email и pattern для телефона",
        "Все изображения имеют alt, width, height и loading='lazy'",
        "Heading hierarchy строго соблюдена (h1 → h2 → h3, без пропусков)"
      ],
      "starterCode": {
        "html": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Портфолио — Иван Петров</title>\n</head>\n<body>\n  <!-- Создайте семантическую структуру -->\n</body>\n</html>"
      },
      "hints": [
        "Начните с <header> содержащей <nav> с якорными ссылками",
        "Используйте <main> с несколькими <section> для разных блоков",
        "Для списка навыков попробуйте <dl><dt>HTML</dt><dd>Семантика, формы, a11y</dd></dl>",
        "Форму оберните в <section> и добавьте fieldset + legend"
      ],
      "solution": {
        "html": "<header>\n  <nav aria-label=\"Основная навигация\">\n    <a href=\"#about\">Обо мне</a>\n    <a href=\"#skills\">Навыки</a>\n    <a href=\"#contact\">Контакт</a>\n  </nav>\n</header>\n<main>\n  <article id=\"about\">\n    <h1>Иван Петров — Frontend Developer</h1>\n    <p>Стажёр с опытом HTML, CSS, JavaScript</p>\n  </article>\n  <section id=\"skills\">\n    <h2>Навыки</h2>\n    <dl>\n      <dt>HTML</dt><dd>Семантика, формы, WCAG 2.1</dd>\n      <dt>CSS</dt><dd>Flexbox, Grid, анимации</dd>\n      <dt>JavaScript</dt><dd>ES6+, DOM API, fetch</dd>\n    </dl>\n  </section>\n  <section id=\"contact\">\n    <h2>Связаться</h2>\n    <form>\n      <fieldset>\n        <legend>Форма обратной связи</legend>\n        <label for=\"name\">Имя</label>\n        <input type=\"text\" id=\"name\" required />\n        <label for=\"email\">Email</label>\n        <input type=\"email\" id=\"email\" required />\n        <label for=\"msg\">Сообщение</label>\n        <textarea id=\"msg\" required minlength=\"20\"></textarea>\n        <button type=\"submit\">Отправить</button>\n      </fieldset>\n    </form>\n  </section>\n</main>\n<footer><p>&copy; 2024 Иван Петров</p></footer>",
        "explanation": "Все landmark-элементы на месте: header, nav, main, article, section, footer. Heading hierarchy: h1 → h2. Форма с fieldset, legend, label+for, required, type=email. Навигация с якорными ссылками."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html2-q1",
          "question": "Какой HTML5-элемент обозначает самостоятельную единицу контента, которая имеет смысл вне контекста страницы?",
          "options": [
            "<section>",
            "<article>",
            "<aside>",
            "<div>"
          ],
          "correctIndex": 1,
          "explanation": "<article> обозначает самодостаточный контент: статью блога, пост в соцсети, комментарий, карточку товара. Его можно вырезать и вставить на другой сайт, и он сохранит смысл. <section> группирует тематически связанные блоки, но не является самодостаточным."
        },
        {
          "id": "html2-q2",
          "question": "Сколько элементов <main> допускается на одной HTML-странице?",
          "options": [
            "Неограниченно",
            "Максимум 2",
            "Ровно 1",
            "Ровно 0 — это устаревший тег"
          ],
          "correctIndex": 2,
          "explanation": "Согласно спецификации HTML5, на странице допускается ровно один видимый <main>. Его контент должен быть уникальным и не повторяться на других страницах сайта (в отличие от header и footer)."
        },
        {
          "id": "html2-q3",
          "question": "Для чего нужен атрибут `for` у элемента <label>?",
          "options": [
            "Для указания CSS-стилей",
            "Для связи метки с полем ввода по его id — клик по label фокусирует поле",
            "Для отправки данных на сервер",
            "Для SEO-оптимизации"
          ],
          "correctIndex": 1,
          "explanation": "Атрибут for связывает <label> с <input> через его id. Это позволяет: 1) кликнуть по тексту метки для фокуса на поле (важно для мобильных), 2) скринридерам объявить имя поля, 3) улучшить UX за счёт увеличения области клика."
        },
        {
          "id": "html2-q4",
          "question": "Что произойдёт, если у <img> не указан атрибут alt?",
          "options": [
            "Изображение не загрузится",
            "Страница не пройдёт HTML-валидацию, скринридер озвучит имя файла",
            "Ничего — alt не влияет на работу страницы",
            "Браузер автоматически сгенерирует alt из имени файла"
          ],
          "correctIndex": 1,
          "explanation": "Без alt: 1) HTML-валидатор выдаст ошибку, 2) скринридер озвучит путь к файлу ('images/photo_2024_final_v3.jpg'), 3) пользователи с медленным интернетом не поймут, что изображено. Для декоративных изображений используйте alt='' (пустой)."
        },
        {
          "id": "html2-q5",
          "question": "Какой атрибут input позволяет указать регулярное выражение для нативной валидации?",
          "options": [
            "regex",
            "validate",
            "pattern",
            "mask"
          ],
          "correctIndex": 2,
          "explanation": "Атрибут pattern принимает регулярное выражение. Браузер проверяет введённое значение при submit. Используется для кастомных форматов: телефон (pattern='\\+7[0-9]{10}'), почтовый индекс, номер документа. Работает совместно с title для пользовательской подсказки."
        }
      ]
    }
  },
  {
    "id": "html-3",
    "moduleId": "html",
    "level": 3,
    "title": "Frontend IDE, Emmet и Chrome DevTools",
    "subtitle": "VS Code, скоростная верстка с Emmet, DOM & a11y инспекция, консоль и Lighthouse",
    "description": "Освойте профессиональный инструментарий фронтенд-инженера: настройку VS Code, скоростную генерацию HTML с помощью Emmet, отладку стилей и DOM-дерева в Chrome DevTools и проведение аудита доступности и производительности.",
    "estimatedMinutes": 55,
    "difficulty": "beginner",
    "tags": [
      "ide",
      "vscode",
      "emmet",
      "devtools",
      "debugging",
      "lighthouse",
      "performance"
    ],
    "theory": {
      "overview": "Профессионализм frontend-разработчика определяется не только знанием синтаксиса тегов, но и скоростью и качеством работы в инструментах разработки. В этом уроке мы детально разберём рабочее окружение современного инженера: редактор кода Visual Studio Code, синтаксис Emmet для мгновенной генерации комплексной разметки, и панель Chrome DevTools — главный инструмент отладки, профилирования и инспекции DOM/CSS.\n\nУмение читать стили в DevTools, использовать Live Expressions в консоли, переключать состояния псевдоклассов (`:hover`, `:active`, `:focus-visible`) и находить утечки производительности через Lighthouse — базовые требования на позиции стажёра и джуниора.",
      "sections": [
        {
          "title": "VS Code для Frontend-разработчика: расширения, шорткаты и профили",
          "content": "Visual Studio Code (VS Code) — де-факто индустриальный стандарт IDE для фронтенда (более 75% разработчиков по опросам State of JS и StackOverflow).\n\nКлючевые расширения для ежедневной работы:\n\n1. ESLint — статический анализ JS/TS кода в реальном времени, подсветка ошибок и подсказки по лучшим практикам.\n2. Prettier — автоматическое форматирование кода при сохранении (`editor.formatOnSave: true`).\n3. Auto Rename Tag — синхронное переименование парных HTML-тегов: меняете открывающий тег — закрывающий обновляется мгновенно.\n4. Color Highlight / Tailwind CSS IntelliSense — визуальное отображение HEX/RGB цветов прямо в коде и подсказки классов.\n5. Error Lens — вывод текста ошибок компилятора TypeScript и линтера прямо в строке кода без наведения курсора.\n\nТоп шорткатов для максимальной скорости:\n\n`Ctrl + P` (Cmd+P на Mac) — быстрый поиск и открытие любого файла по названию (Fuzzy Search).\n`Ctrl + Shift + P` — командная палитра (Command Palette) — доступ ко всем командам и настройкам редактора.\n`Alt + Up / Down` — перемещение текущей строки или выделенного блока вверх/вниз.\n`Shift + Alt + Down / Up` — дублирование строки вверх/вниз.\n`Ctrl + D` — мультивыделение следующего совпадения текущего слова (супер-быстрый локальный рефакторинг).\n`Alt + Click` — установка нескольких курсоров для параллельного редактирования в разных местах.\n`Ctrl + /` — закомментировать/раскомментировать строку или выделенный блок.",
          "codeExample": {
            "language": "javascript",
            "code": "// .vscode/settings.json — рекомендуемый конфиг для проекта\n{\n  \"editor.formatOnSave\": true,\n  \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",\n  \"editor.tabSize\": 2,\n  \"editor.insertSpaces\": true,\n  \"editor.linkedEditing\": true,\n  \"editor.bracketPairColorization.enabled\": true,\n  \"editor.guides.bracketPairs\": \"active\",\n  \"files.autoSave\": \"onFocusChange\",\n  \"emmet.includeLanguages\": {\n    \"javascript\": \"javascriptreact\",\n    \"typescript\": \"typescriptreact\"\n  }\n}",
            "title": "Профессиональная конфигурация .vscode/settings.json",
            "explanation": "linkedEditing автоматически синхронизирует переименование парных тегов. bracketPairColorization подсвечивает вложенные скобки цветом. emmet.includeLanguages включает поддержку Emmet в JSX/TSX."
          }
        },
        {
          "title": "Emmet: Скоростная генерация сложной разметки",
          "content": "Emmet — встроенный в VS Code движок аббревиатур, трансформирующий короткие CSS-подобные выражения в полноценные блоки HTML-разметки при нажатии клавиши `Tab` или `Enter`.\n\nБазовый синтаксис операторов Emmet:\n\n1. Вложенность `>` (дочерний элемент):\n`nav>ul>li` → `<nav><ul><li></li></ul></nav>`\n\n2. Соседство `+` (сиблинг):\n`header+main+footer` → три последовательных блока на одном уровне\n\n3. Подъем на уровень вверх `^`:\n`div>p>span^a` → span внутри p, а ссылка `<a>` на уровне p внутри div\n\n4. Умножение `*` (тиражирование):\n`ul>li*4` → список с четырьмя элементами `<li>`\n\n5. Нумерация `$`, `$$` (инкремент чисел):\n`ul>li.item-$*3` → `<li class=\"item-1\">`, `<li class=\"item-2\">`, `<li class=\"item-3\">`\n\n6. Классы `.` и Идентификаторы `#`:\n`article#post-1.card.card--featured` → `<article id=\"post-1\" class=\"card card--featured\"></article>`\n\n7. Пользовательские атрибуты `[...]`:\n`input[type=\"email\" required name=\"user_email\" placeholder=\"Email\"]`\n\n8. Текстовое содержимое `{...}`:\n`a[href=\"/about\"]{Подробнее о курсе}` → `<a href=\"/about\">Подробнее о курсе</a>`\n\n9. Группировка `(...)`:\n`div>(header>h1)+main+footer` — создание сложных комбинированных поддеревьев.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Аббревиатура Emmet: -->\n<!-- main.catalog>h1{Каталог товаров}+div.grid>(article.card>img[src=\"img/$.jpg\" alt=\"Товар $\"]+h2{Товар $}+p.price{$$$ руб.}+button[type=\"button\"]{Купить})*3 -->\n\n<!-- Результат после нажатия Tab: -->\n<main class=\"catalog\">\n  <h1>Каталог товаров</h1>\n  <div class=\"grid\">\n    <article class=\"card\">\n      <img src=\"img/1.jpg\" alt=\"Товар 1\" />\n      <h2>Товар 1</h2>\n      <p class=\"price\">001 руб.</p>\n      <button type=\"button\">Купить</button>\n    </article>\n    <article class=\"card\">\n      <img src=\"img/2.jpg\" alt=\"Товар 2\" />\n      <h2>Товар 2</h2>\n      <p class=\"price\">002 руб.</p>\n      <button type=\"button\">Купить</button>\n    </article>\n    <article class=\"card\">\n      <img src=\"img/3.jpg\" alt=\"Товар 3\" />\n      <h2>Товар 3</h2>\n      <p class=\"price\">003 руб.</p>\n      <button type=\"button\">Купить</button>\n    </article>\n  </div>\n</main>",
            "title": "Генерация каталога карточек в одну строчку Emmet",
            "explanation": "Всего одна строка Emmet-кода мгновенно генерирует 25 строк семантического HTML с классами, атрибутами, путями к изображениям, ценниками и кнопками."
          }
        },
        {
          "title": "Chrome DevTools: Инспекция DOM, принудительные состояния и Box Model",
          "content": "Chrome DevTools (вызывается по `F12` или `Ctrl + Shift + I`) — это швейцарский нож фронтендера, работающий напрямую с живым представлением страницы в движке Chromium.\n\nВкладка Elements:\n- Инспекция DOM-дерева: наведите курсор со стрелкой инспектора (`Ctrl + Shift + C`) на любой элемент страницы для мгновенного перехода к нему в кодовой иерархии.\n- Live Editing: двойной клик по тегу или атрибуту позволяет менять разметку на лету без перезагрузки страницы.\n- Break on... (DOM Breakpoints): правый клик по элементу → Break on subtree modifications/attribute modifications — остановит выполнение JavaScript ровно в тот момент, когда скрипт попытается изменить выбранный DOM-узел.\n\nВкладка Styles и Computed:\n- Force element state (`:hov`): принудительное включение псевдоклассов `:hover`, `:active`, `:focus`, `:focus-visible`, `:visited` — незаменимо для отладки интерактивных состояний кнопок, меню и ссылок.\n- Box Model Diagram: интерактивная схема внизу вкладки Styles, показывающая точные вычисленные размеры margin, border, padding и content в пикселях.\n- Computed tab: алфавитный список финальных стилей, применённых к элементу после разрешения всех каскадных правил, специфичности и наследования.\n\nAccessibility Inspector:\n- Вкладка Accessibility в боковой панели Elements отображает полное Accessibility Tree (дерево доступности), вычисленное имя (Accessible Name), роль (Role) и свойства элемента для скринридеров.",
          "image": {
            "src": "/images/lessons/devtools-inspection-flow.jpg",
            "alt": "Архитектура Chrome DevTools: Elements DOM Tree, Styles, Computed Box Model и Console",
            "caption": "Chrome DevTools: полная инспекция DOM, каскада CSS, вычисленных отступов Box Model и консоли"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// Продвинутые приёмы работы с Chrome DevTools Console API:\n\n// 1. $0 — быстрый доступ к текущему выбранному элементу в Elements panel\nconsole.log($0); // возвращает выбранный DOM-узел\n$0.style.border = '2px solid red'; // подсветить на экране\n\n// 2. Красивый вывод массивов и объектов таблицей\nconst users = [\n  { id: 1, name: 'Анна', role: 'Team Lead', score: 98 },\n  { id: 2, name: 'Олег', role: 'Senior Frontend', score: 94 },\n  { id: 3, name: 'Иван', role: 'Intern', score: 85 }\n];\nconsole.table(users, ['name', 'role', 'score']);\n\n// 3. Замер производительности участков кода\nconsole.time('DOM-Render-Timer');\n// выполнение тяжелой операции...\nconsole.timeEnd('DOM-Render-Timer'); // DOM-Render-Timer: 4.28ms",
            "title": "Chrome DevTools Console API: $0, console.table и таймеры",
            "explanation": "Переменная $0 ссылается на выделенный в инспекторе узел. console.table делает анализ массивов мгновенно читаемым. console.time/timeEnd позволяют точно измерять время исполнения участков кода."
          }
        },
        {
          "title": "Network Waterfall, throttling и аудит Lighthouse",
          "content": "Для создания быстрого и доступного продукта стажёр обязан понимать, как страница загружается по сети и как браузер распределяет ресурсы.\n\nВкладка Network:\n- Waterfall (водопад загрузки): графическая шкала времени загрузки каждого ресурса. Ключевые фазы:\n  - Queueing / Stalled — ожидание в очереди браузера (лимит 6 одновременных TCP-соединений на хост в HTTP/1.1)\n  - DNS Lookup — резолвинг IP-адреса\n  - Initial Connection + SSL Handshake — установка защищённого соединения\n  - TTFB (Time to First Byte) — время ожидания первого байта от сервера (критичный серверный показатель, норма < 200ms)\n  - Content Download — передача тела ответа по каналу связи\n\n- Network Throttling: симуляция медленного интернета ('Fast 3G', 'Slow 3G', 'Offline') для проверки поведения лоадеров, скелетонов и обработки ошибок сети.\n- Disable Cache: отключение кэша при открытом DevTools для тестирования «холодного старта» первого визита.\n\nВкладка Lighthouse:\nLighthouse — автоматизированный инструмент Google для оценки качества страницы по 5 метрикам:\n1. Performance (FCP, LCP, CLS, TBT, Speed Index)\n2. Accessibility (контрастность текста, ARIA-метки, heading hierarchy, alt у картинок)\n3. Best Practices (HTTPS, современные форматы изображений, отсутствие устаревших API)\n4. SEO (наличие `<title>`, `<meta name=\"description\">`, тегов Open Graph, читаемые URL)\n5. PWA (манифест, Service Worker, адаптивность под мобильные экраны)",
          "codeExample": {
            "language": "html",
            "code": "<!-- Оптимальный <head> для 100/100 в Lighthouse SEO & Accessibility -->\n<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Frontend Academy — Платформа для стажёров</title>\n  <meta\n    name=\"description\"\n    content=\"Интерактивная образовательная платформа для стажёров frontend-разработки: HTML, CSS, JavaScript и Git.\"\n  />\n  <!-- Open Graph для красивых превью в соцсетях -->\n  <meta property=\"og:title\" content=\"Frontend Academy\" />\n  <meta property=\"og:description\" content=\"Интерактивные курсы и тренажёры\" />\n  <meta property=\"og:image\" content=\"https://intern.dev/og.png\" />\n  <link rel=\"icon\" href=\"/favicon.ico\" sizes=\"any\" />\n  <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\" />\n</head>\n<body>\n  <main>\n    <h1>Frontend Intern Academy</h1>\n    <p>Добро пожаловать в систему практического обучения.</p>\n  </main>\n</body>\n</html>",
            "title": "Метаданные для идеального скоринга Lighthouse",
            "explanation": "Обязательные метатеги charset, viewport, description и title, а также Open Graph атрибуты для социальных сетей гарантируют прохождение тестов Lighthouse SEO на высший балл."
          }
        }
      ],
      "seniorTips": [
        "Используйте `console.table()` вместо бесконечных `console.log()` для анализа массивов объектов — это экономит часы времени при дебаггинге данных от API.",
        "Включайте `Coverage` (Command Palette в DevTools → Show Coverage) для поиска неиспользуемого CSS и JavaScript кода, раздувающего размер бандла.",
        "Для отладки верстки без мышки используйте клавишу `Tab` прямо в браузере: если фокус пропадает или перескакивает в нелогичном порядке — вы нарушили порядок DOM или сломали доступность.",
        "Никогда не коммитьте `debugger;` и отладочные `console.log` в ветку `main`. Настройте правило ESLint `no-debugger` и `no-console: warn`."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Набор HTML вручную с опечатками -->\n<div class=\"nav\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n</div>",
          "good": "<!-- Сниппет Emmet: nav.nav>ul>li.item{$$}*2 -->\n<nav class=\"nav\">\n  <ul>\n    <li class=\"item\">01</li>\n    <li class=\"item\">02</li>\n  </ul>\n</nav>",
          "reason": "Ручной набор разметки занимает в 10 раз больше времени и часто приводит к div-супу. Emmet автоматически генерирует семантически корректные теги с правильной вложенностью за доли секунды."
        },
        {
          "bad": "/* Тестирование hover-состояний через наведение мышки */\n.button:hover {\n  /* не удаётся рассмотреть стили в DevTools, */\n  /* так как курсор уходит с кнопки */\n}",
          "good": "/* Использование Force element state (:hov) в DevTools */\n/* Ставим галочку :hover прямо в панели Styles */\n/* Состояние зафиксировано навсегда для инспекции */",
          "reason": "Попытки поймать hover-эффекты и тултипы курсором мыши приводят к потере фокуса. Кнопка ':hov' в Chrome DevTools принудительно фиксирует псевдокласс на выбранном элементе."
        },
        {
          "bad": "<head>\n  <!-- Отсутствует viewport и description -->\n  <title>Мой сайт</title>\n</head>",
          "good": "<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Каталог курсов — Frontend Academy</title>\n  <meta name=\"description\" content=\"Интерактивное обучение фронтенду с нуля.\" />\n</head>",
          "reason": "Без тега meta viewport мобильные браузеры отрендерят страницу в десктопном масштабе 980px с микроскопическим шрифтом. Без description страница получит штраф в Lighthouse SEO."
        }
      ],
      "keyTakeaways": [
        "VS Code с расширениями ESLint, Prettier и Auto Rename Tag обеспечивает автоматическое форматирование и подсветку синтаксических ошибок на лету.",
        "Синтаксис Emmet (`>`, `+`, `*`, `$`, `.`, `#`, `[]`, `{}`) позволяет собирать масштабные семантические структуры за 1 секунду по нажатию `Tab`.",
        "Chrome DevTools (Elements, Styles, Computed, Accessibility) предоставляет инструменты инспекции каскада стилей, отладки Box Model и принудительной фиксации псевдоклассов (`:hov`).",
        "Вкладка Network и шкала Waterfall позволяют диагностировать сетевые задержки (TTFB, Stalled, Content Download) и эмулировать медленное соединение через Throttling.",
        "Lighthouse — стандарт комплексного аудита качества веб-приложения по метрикам Performance, Accessibility, Best Practices и SEO."
      ]
    },
    "sandbox": {
      "initialHtml": "<!-- Потренируйтесь в Emmet-генерации: -->\n<!-- Напишите структуру статьи блога с автором, датой, тегами и кнопкой 'Поделиться' -->\n<div id=\"sandbox-preview\">\n  \n</div>",
      "initialCss": "#sandbox-preview {\n  font-family: system-ui, -apple-system, sans-serif;\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 8px;\n  color: #e6edf3;\n}\n\n.card-author {\n  color: #2dff8a;\n  font-weight: bold;\n}\n\n.tag {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #161b22;\n  border: 1px solid #29e7ff;\n  border-radius: 4px;\n  font-size: 12px;\n  margin-right: 6px;\n}",
      "initialJs": "// Консоль песочницы:\nconsole.log('Песочница Emmet & DevTools готова к работе!');\nconsole.table([\n  { shortcut: 'Ctrl + P', action: 'Быстрый поиск файла' },\n  { shortcut: 'Ctrl + D', action: 'Мультивыделение совпадений' },\n  { shortcut: '$0', action: 'Выделенный узел в Chrome DevTools' }\n]);",
      "instructions": "Практика работы с разметкой:\n1. Сформируйте внутри #sandbox-preview семантическую карточку статьи <article class=\"article-card\">\n2. Добавьте заголовок <h2>, метаданные автора (<span class=\"card-author\">) и дату (<time>)\n3. Добавьте список тегов (<div class=\"tags\"><span class=\"tag\">HTML</span><span class=\"tag\">DevTools</span></div>)\n4. Добавьте кнопку <button type=\"button\">Поделиться</button>\n5. Откройте вкладку консоли и изучите вывод console.table()"
    },
    "task": {
      "title": "Оптимизация доступности и SEO карточки товара",
      "scenario": "Вы получили вёрстку карточки товара интернет-магазина, созданную начинающим стажёром. Аудит Lighthouse показывает 45/100 по Accessibility и 50/100 по SEO из-за отсутствия семантики, отсутствия alt, неправильных тегов заголовков и плохой доступности для скринридеров. Вам необходимо полностью переписать карточку по стандартам WCAG 2.1 и лучшим практикам.",
      "criteria": [
        "Обернуть карточку в семантический тег <article> с aria-labelledby",
        "Изображение товара имеет подробный alt, атрибуты width, height и loading='lazy'",
        "Заголовок оформлен тегом <h2> с уникальным id",
        "Цена выделена тегом <data> или <strong class='price'> с указанием валюты",
        "Характеристики товара оформлены списком определений <dl> (<dt>, <dd>)",
        "Кнопка 'Купить' имеет четкий aria-label с названием товара",
        "Все интерактивные элементы доступны для фокуса с клавиатуры"
      ],
      "starterCode": {
        "html": "<!-- Исходный несемантичный код -->\n<div class=\"item\">\n  <img src=\"/headphones.jpg\">\n  <div class=\"title\">Беспроводные наушники Sony WH-1000XM5</div>\n  <div class=\"cost\">29990</div>\n  <div class=\"specs\">Автономность: 30 часов, Шумоподавление: активное</div>\n  <div class=\"btn\" onclick=\"buy()\">Купить</div>\n</div>"
      },
      "hints": [
        "Замените внешний <div> на <article aria-labelledby='item-title'>",
        "Замените <div class='title'> на <h2 id='item-title'>",
        "Используйте <dl> для характеристик: <dt>Автономность:</dt><dd>30 часов</dd>",
        "Замените <div class='btn'> на настоящий доступный тег <button type='button'>"
      ],
      "solution": {
        "html": "<article class=\"product-card\" aria-labelledby=\"prod-101\">\n  <img\n    src=\"/headphones.jpg\"\n    alt=\"Беспроводные полноразмерные наушники Sony WH-1000XM5 черного цвета\"\n    width=\"360\"\n    height=\"270\"\n    loading=\"lazy\"\n  />\n  <h2 id=\"prod-101\">Беспроводные наушники Sony WH-1000XM5</h2>\n  <p class=\"product-price\"><data value=\"29990\">29 990 ₽</data></p>\n  <dl class=\"product-specs\">\n    <dt>Автономность:</dt>\n    <dd>до 30 часов</dd>\n    <dt>Шумоподавление:</dt>\n    <dd>Активное цифровое (ANC)</dd>\n  </dl>\n  <button\n    type=\"button\"\n    class=\"btn-buy\"\n    aria-label=\"Добавить наушники Sony WH-1000XM5 в корзину за 29 990 рублей\"\n  >\n    Купить\n  </button>\n</article>",
        "explanation": "Код полностью соответствует стандартам WCAG: article с aria-labelledby связывает карточку с h2; img содержит подробное описание alt и размеры; dl/dt/dd структурирует свойства; настоящий button с детальным aria-label гарантирует доступность для скринридеров."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html3-q1",
          "question": "Какое сокращение Emmet сгенерирует ненумерованный список из трёх элементов с классом menu-item и текстом Ссылка 1, Ссылка 2, Ссылка 3?",
          "options": [
            "ul>li.menu-item{Ссылка $}*3",
            "ul+li.menu-item*3{Ссылка $}",
            "ul.menu-item>li*3{Ссылка}",
            "ul*(li.menu-item$3)"
          ],
          "correctIndex": 0,
          "explanation": "Синтаксис 'ul>li.menu-item{Ссылка $}*3' означает: создать тег <ul>, внутри него '>' 3 элемента <li> '*' 3 с классом '.menu-item' и текстом '{}', в котором '$' автоматически заменяется на порядковый номер (1, 2, 3)."
        },
        {
          "id": "html3-q2",
          "question": "Что позволяет сделать панель ':hov' (Force element state) во вкладке Styles панели Chrome DevTools?",
          "options": [
            "Удалить все стили элемента",
            "Принудительно зафиксировать псевдоклассы (:hover, :active, :focus, :focus-visible) на выбранном узле",
            "Замедлить рендеринг страницы в 10 раз",
            "Автоматически перевести CSS-стили в SASS"
          ],
          "correctIndex": 1,
          "explanation": "Функция ':hov' (Toggle Element State) позволяет принудительно включить псевдоклассы (:hover, :active, :focus, :focus-visible, :visited), что даёт возможность спокойно отлаживать выпадающие меню, анимации кнопок и фокусные рамки без необходимости держать мышь на элементе."
        },
        {
          "id": "html3-q3",
          "question": "Что означает показатель TTFB (Time to First Byte) в шкале Network Waterfall браузера?",
          "options": [
            "Общее время полной загрузки всего сайта",
            "Время от момента отправки запроса клиентом до получения первого байта ответа от веб-сервера",
            "Скорость рендеринга CSS-анимации",
            "Время компиляции JavaScript в байт-код"
          ],
          "correctIndex": 1,
          "explanation": "TTFB (Time to First Byte) измеряет время, которое проходит от отправки HTTP-запроса браузером до прихода первого байта данных от сервера. Высокий TTFB указывает на медленную обработку на бэкенде или задержки в сетевом канале."
        },
        {
          "id": "html3-q4",
          "question": "Какая команда консоли Chrome DevTools позволяет быстро обратиться к DOM-узлу, который прямо сейчас выделен в дереве Elements?",
          "options": [
            "$$('current')",
            "$0",
            "document.selected",
            "this.node"
          ],
          "correctIndex": 1,
          "explanation": "Специальная переменная $0 в консоли Chrome DevTools всегда ссылается на текущий DOM-элемент, выбранный курсором в панели Elements ($1, $2, $3 ссылаются на ранее выбранные элементы)."
        },
        {
          "id": "html3-q5",
          "question": "Для чего используется инструмент Google Lighthouse в Chrome DevTools?",
          "options": [
            "Только для проверки орфографии текста на странице",
            "Для автоматизированного комплексного аудита производительности (Performance), доступности (Accessibility), SEO и лучших практик",
            "Для генерации паролей пользователей",
            "Для блокировки рекламных баннеров"
          ],
          "correctIndex": 1,
          "explanation": "Google Lighthouse проводит автоматизированный аудит качества страницы по 5 категориям: производительность (Core Web Vitals), доступность (WCAG a11y), SEO-оптимизация, соблюдение Best Practices и PWA."
        }
      ]
    }
  },
  {
    "id": "html-4",
    "moduleId": "html",
    "level": 4,
    "title": "Анатомия HTML-документа и метаданные",
    "subtitle": "DOCTYPE, head, meta-теги, Open Graph, Favicons, body и глобальные атрибуты",
    "description": "Изучите фундаментальное строение HTML-документа: режимы рендеринга Standards vs Quirks Mode, теги заголовка <head>, протокол Open Graph для красивых превью в соцсетях и мессенджерах, фавиконки и глобальные атрибуты HTML5.",
    "estimatedMinutes": 55,
    "difficulty": "beginner",
    "tags": [
      "doctype",
      "head",
      "meta",
      "opengraph",
      "seo",
      "favicon",
      "global-attributes"
    ],
    "theory": {
      "overview": "Каждая веб-страница начинается с технического фундамента — тегов заголовка `<head>` и декларации `<!DOCTYPE html>`. Пользователь почти не видит эти теги в окне браузера (за исключением вкладки и фавиконки), но именно они определяют, как поисковые системы индексируют сайт, как мессенджеры (Telegram, WhatsApp, VK) генерируют красивые карточки-превью при шеринге ссылок, как страница масштабируется на мобильных устройствах и в каком режиме браузерный движок рендерит DOM.\n\nВ этом уроке мы разберём каждый элемент идеального `<head>`, микроразметку Open Graph, настройку иконок для всех платформ и глобальные атрибуты HTML5, которые работают на любых элементах.",
      "sections": [
        {
          "title": "DOCTYPE, режимы рендеринга и корневой тег <html>",
          "content": "Декларация `<!DOCTYPE html>` — обязательная первая строка любого HTML-документа.\n\nЗачем нужен DOCTYPE:\nВ 1990-х годах браузеры рендерили страницы по старым нестандартным правилам (Netscape/IE). Чтобы сохранить обратную совместимость со старыми сайтами и одновременно внедрить стандарты W3C, создатели браузеров ввели два режима рендеринга:\n1. Standards Mode (Режим стандартов) — включается при наличии `<!DOCTYPE html>`. Браузер строго следует спецификациям W3C/WHATWG.\n2. Quirks Mode (Режим совместимости / «причуд») — включается, если DOCTYPE забыт или опечатан. Браузер эмулирует поведение Internet Explorer 5: ломается Box Model, не работают современные CSS-свойства, размеры шрифтов плывут.\n\nКорневой элемент `<html lang=\"ru\">`:\nАтрибут `lang` критически важен:\n- Скринридеры используют `lang` для переключения языкового движка и правильного синтеза речи (правильные ударения и интонации).\n- Поисковые системы (Google, Yandex) используют `lang` для геотаргетинга и языковой выдачи.\n- Браузеры (Chrome) определяют, нужно ли предлагать встроенный перевод страницы.\n\nРазделение `<head>` и `<body>`:\n- `<head>` — контейнер метаданных для браузера, поисковиков и соцсетей (не отображается на экране).\n- `<body>` — видимое тело документа со всем контентом и интерфейсом.",
          "codeExample": {
            "language": "html",
            "code": "<!DOCTYPE html>\n<html lang=\"ru\" dir=\"ltr\">\n  <head>\n    <!-- Метаданные страницы -->\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Анатомия документа — Frontend Academy</title>\n  </head>\n  <body>\n    <!-- Видимый контент страницы -->\n    <main>\n      <h1>Стандарты HTML5</h1>\n    </main>\n  </body>\n</html>",
            "title": "Минимальный валидный каркас HTML5 документа",
            "explanation": "DOCTYPE гарантирует Standards Mode. lang='ru' сообщает скринридерам и поисковикам язык контента. dir='ltr' указывает направление письма (слева направо)."
          }
        },
        {
          "title": "Метатеги <head>: Charset, Viewport, SEO и Фавиконки",
          "content": "Тег `<head>` сообщает браузеру технические параметры страницы до начала парсинга контента.\n\nОбязательные метатеги:\n\n1. `<meta charset=\"UTF-8\">` — кодировка символов. UTF-8 поддерживает все языки мира, эмодзи и спецсимволы. Должен стоять ПЕРВЫМ внутри `<head>` (в пределах первых 1024 байт), чтобы браузер не начал парсить текст в неверной кодировке (знаменитые «кракозябры» Windows-1251 / ISO-8859).\n\n2. `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` — адаптивный viewport:\n- `width=device-width` — ширина области просмотра равна физической ширине экрана устройства в CSS-пикселях.\n- `initial-scale=1.0` — начальный масштаб 1:1 без зума.\n- Без этого тега мобильные браузеры откроют сайт в виртуальном разрешении 980px с микроскопическим текстом!\n\n3. `<title>` — заголовок страницы:\n- Отображается на вкладке браузера, в закладках и как главный заголовок ссылки в поисковой выдаче Google/Яндекс.\n- Длина: 50–60 символов. Ключевые слова ставьте в начало.\n\n4. `<meta name=\"description\" content=\"...\">` — краткое описание страницы (150–160 символов). Используется поисковиками для формирования сниппета под ссылкой в результатах поиска.\n\n5. `<link rel=\"canonical\" href=\"https://...\">` — указывает поисковому роботу основной (канонический) URL страницы, предотвращая пессимизацию сайта за дубли контента (например, версии с UTM-метками).\n\nФавиконки и иконки для устройств:\n- `<link rel=\"icon\" href=\"/favicon.ico\" sizes=\"any\">` — классический favicon\n- `<link rel=\"icon\" href=\"/icon.svg\" type=\"image/svg+xml\">` — векторный масштабируемый SVG favicon\n- `<link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\">` — иконка для домашнего экрана iOS\n- `<link rel=\"manifest\" href=\"/manifest.webmanifest\">` — манифест для PWA (Progressive Web Apps)",
          "image": {
            "src": "/images/lessons/html-meta-opengraph.svg",
            "alt": "Анатомия тегов head и протокол Open Graph для превью",
            "caption": "Метаданные head обеспечивают корректный рендеринг, мобильную адаптивность и красивые превью в соцсетях"
          },
          "codeExample": {
            "language": "html",
            "code": "<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Курс Frontend-разработки — Академия Стажёров</title>\n  <meta\n    name=\"description\"\n    content=\"Практический интенсивный курс по HTML5, CSS3, JavaScript и React с нуля до реального оффера.\"\n  />\n  <link rel=\"canonical\" href=\"https://intern-academy.ru/courses/frontend\" />\n\n  <!-- Иконки для всех платформ -->\n  <link rel=\"icon\" href=\"/favicon.ico\" sizes=\"any\" />\n  <link rel=\"icon\" href=\"/favicon.svg\" type=\"image/svg+xml\" />\n  <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\" />\n  <meta name=\"theme-color\" content=\"#0a0e13\" />\n</head>",
            "title": "Идеальная секция <head> для современного продакшена",
            "explanation": "Полный набор метатегов для SEO, векторные и растровые фавиконки, канонический URL и theme-color для окрашивания адресной строки мобильного браузера."
          }
        },
        {
          "title": "Протоколы Open Graph и Twitter Cards: Красивые превью ссылок",
          "content": "Когда пользователь отправляет ссылку на ваш сайт в Telegram, VK, WhatsApp, Discord, Slack или Twitter, мессенджер отправляет фоновый бот-запрос (crawler) к вашей странице, чтобы извлечь метаданные Open Graph и сгенерировать визуальную карточку (Rich Snippet).\n\nОсновные теги протокола Open Graph (`og:`):\n\n`og:title` — заголовок карточки в соцсети (обычно совпадает с `<title>` или короче и кликабельнее).\n`og:description` — краткое пояснение к ссылке (1–2 предложения).\n`og:image` — абсолютный URL изображения для баннера (Обязательно абсолютный: `https://site.ru/og.png`, а не `/og.png`!). Рекомендуемый размер: `1200 × 630 px` (соотношение 1.91:1).\n`og:image:alt` — текстовое описание картинки для скринридеров.\n`og:url` — канонический адрес страницы.\n`og:type` — тип контента (`website`, `article`, `video.movie`, `book`).\n`og:site_name` — название бренда/портала.\n\nTwitter Cards (`twitter:`):\n`twitter:card` — тип отображения карточки (`summary_large_image` — большой баннер, `summary` — квадратная миниатюра слева).\n`twitter:title`, `twitter:description`, `twitter:image`.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Open Graph метаданные (Telegram, VK, Facebook, Discord) -->\n<meta property=\"og:type\" content=\"website\" />\n<meta property=\"og:url\" content=\"https://intern.dev/lessons/html-4\" />\n<meta property=\"og:title\" content=\"Анатомия HTML-документа — Практический урок\" />\n<meta\n  property=\"og:description\"\n  content=\"Разбор DOCTYPE, Open Graph, meta-тегов и глобальных атрибутов в интерактивном тренажёре.\"\n/>\n<meta property=\"og:image\" content=\"https://intern.dev/images/og-html-4.jpg\" />\n<meta property=\"og:image:width\" content=\"1200\" />\n<meta property=\"og:image:height\" content=\"630\" />\n<meta property=\"og:site_name\" content=\"Frontend Intern Academy\" />\n\n<!-- Twitter Cards -->\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:title\" content=\"Анатомия HTML-документа\" />\n<meta name=\"twitter:image\" content=\"https://intern.dev/images/og-html-4.jpg\" />",
            "title": "Разметка Open Graph и Twitter Cards для привлекательных превью",
            "explanation": "og:image с размером 1200x630 гарантирует чёткое отображение баннера на экранах Retina. og:url защищает от потери статистики шеринга."
          }
        },
        {
          "title": "Глобальные атрибуты HTML5: id, class, data-*, tabindex и hidden",
          "content": "Глобальные атрибуты (Global Attributes) — это атрибуты, которые допустимо указывать на АБСОЛЮТНО ЛЮБОМ элементе HTML5.\n\nКлючевые глобальные атрибуты:\n\n1. `id` — уникальный идентификатор элемента на всей странице. Используется для: якорей в URL (`#section-3`), связки `<label for=\"id\">`, ARIA-атрибутов (`aria-labelledby=\"id\"`) и точечных скриптов. Дублирование id — грубая ошибка валидации.\n\n2. `class` — список CSS-классов через пробел для стилизации и группировки элементов.\n\n3. `data-*` (Пользовательские data-атрибуты) — механизм сохранения произвольных данных прямо в DOM-узле. В JavaScript доступны через объект `element.dataset`:\n`<button data-user-id=\"42\" data-role=\"admin\">` → `btn.dataset.userId === '42'`, `btn.dataset.role === 'admin'`.\n\n4. `tabindex` — управление порядком фокуса при навигации клавишей `Tab`:\n- `tabindex=\"0\"` — делает обычный элемент (например, `<div>`) фокусируемым в естественном порядке потока документа.\n- `tabindex=\"-1\"` — делает элемент фокусируемым ТОЛЬКО программно через `element.focus()`, но исключает из обхода клавишей Tab.\n- `tabindex=\"1..N\"` (положительные числа) — СТРОГИЙ АНТИПАТТЕРН! Ломает естественный порядок навигации для людей с клавиатурой.\n\n5. `hidden` (булев атрибут) — скрывает элемент от пользователя и скринридеров (эквивалентен `display: none`).\n\n6. `title` — всплывающая подсказка при наведении мыши (НЕ используйте как замену доступному тексту, так как недоступен на тач-устройствах).\n\n7. `contenteditable=\"true\"` — превращает любой элемент в поле редактируемого текста.\n\n8. `inputmode` — переключает виртуальную клавиатуру на смартфонах (`numeric`, `decimal`, `tel`, `email`, `url`).",
          "codeExample": {
            "language": "html",
            "code": "<!-- Пример использования глобальных атрибутов -->\n<div\n  id=\"card-profile-101\"\n  class=\"user-card user-card--active\"\n  data-user-id=\"101\"\n  data-status=\"online\"\n  data-points=\"450\"\n  tabindex=\"0\"\n  role=\"region\"\n  aria-label=\"Карточка пользователя\"\n>\n  <h3>Алексей Смирнов</h3>\n  <p>Статус: В сети</p>\n</div>\n\n<!-- Поле только для чисел без стрелок спиннера -->\n<input\n  type=\"text\"\n  inputmode=\"numeric\"\n  pattern=\"[0-9]*\"\n  placeholder=\"Код из СМС\"\n/>",
            "title": "Глобальные атрибуты data-*, tabindex и inputmode",
            "explanation": "data-* сохраняет метаданные для JS. tabindex='0' делает карточку доступной для клавиатурного фокуса. inputmode='numeric' открывает цифровую клавиатуру на мобильных телефонах."
          }
        }
      ],
      "seniorTips": [
        "Всегда ставьте `<meta charset=\"UTF-8\">` первой строкой внутри `<head>`, до тегов `<title>` и скриптов. Это исключает перепарсинг документа браузером.",
        "В атрибуте `og:image` всегда указывайте абсолютный URL с протоколом (`https://...`). Относительные пути (`/og.png`) не распознаются ботами Telegram и VK.",
        "Никогда не используйте положительный `tabindex` (`tabindex=\"1\"`, `tabindex=\"5\"`). Если нужно настроить порядок фокуса — измените физический порядок элементов в DOM.",
        "Используйте `inputmode=\"numeric\"` в комбинации с `pattern=\"[0-9]*\"` для полей ввода номеров банковских карт и СМС-кодов — это даёт идеальный UX на смартфонах без багов числового `type=\"number\"`."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Отсутствие DOCTYPE -->\n<html>\n  <head><title>Сайт</title></head>\n  <body>...</body>\n</html>",
          "good": "<!DOCTYPE html>\n<html lang=\"ru\">\n  <head><title>Сайт</title></head>\n  <body>...</body>\n</html>",
          "reason": "Без <!DOCTYPE html> браузер переключается в Quirks Mode, где Box Model работает по устаревшим правилам IE5, а современные CSS-свойства ведут себя непредсказуемо."
        },
        {
          "bad": "<meta property=\"og:image\" content=\"/images/preview.jpg\" />",
          "good": "<meta property=\"og:image\" content=\"https://academy.dev/images/preview.jpg\" />",
          "reason": "Относительный путь в og:image приводит к тому, что краулеры мессенджеров (Telegram, VK, WhatsApp) не могут загрузить картинку и карточка ссылки отображается без баннера."
        },
        {
          "bad": "<button tabindex=\"3\">Кнопка 1</button>\n<button tabindex=\"1\">Кнопка 2</button>",
          "good": "<button>Кнопка 1</button>\n<button>Кнопка 2</button>",
          "reason": "Положительный tabindex ломает естественный порядок клавиатурного фокуса страницы, создавая катастрофический пользовательский опыт для незрячих пользователей и управления с клавиатуры."
        }
      ],
      "keyTakeaways": [
        "`<!DOCTYPE html>` переводит браузер в Standards Mode, гарантируя строгое следование спецификациям W3C.",
        "`<html lang=\"ru\">` необходим для правильного синтеза речи скринридерами, корректного переноса слов и поисковой оптимизации.",
        "`<meta name=\"viewport\">` предотвращает сжатие верстки на мобильных экранах, устанавливая масштаб 1:1 по ширине устройства.",
        "Протокол Open Graph (`og:title`, `og:description`, `og:image`) формирует привлекательные визуальные карточки ссылок в соцсетях и мессенджерах.",
        "Глобальные атрибуты (`id`, `class`, `data-*`, `tabindex=\"0\"/\"-1\"`, `hidden`, `inputmode`) работают на любых элементах HTML5."
      ]
    },
    "sandbox": {
      "initialHtml": "<!-- Изучите работу dataset и inputmode: -->\n<div class=\"user-item\"\n     data-id=\"usr_99\"\n     data-role=\"Senior\"\n     data-salary=\"250000\"\n     tabindex=\"0\">\n  <span>Нажмите на карточку или используйте Tab + Enter</span>\n</div>\n\n<div id=\"console-log\"></div>",
      "initialCss": ".user-item {\n  padding: 16px 20px;\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 8px;\n  color: #2dff8a;\n  font-family: monospace;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.user-item:focus-visible {\n  outline: 2px solid #29e7ff;\n  outline-offset: 3px;\n}\n#console-log {\n  margin-top: 16px;\n  padding: 12px;\n  background: #03060a;\n  border: 1px dashed #2dff8a;\n  color: #e6edf3;\n  font-family: monospace;\n  white-space: pre-wrap;\n}",
      "initialJs": "const card = document.querySelector('.user-item');\nconst log = document.getElementById('console-log');\n\ncard.addEventListener('click', () => {\n  log.textContent = 'Данные из dataset:\\n' +\n    JSON.stringify(card.dataset, null, 2);\n});\n\ncard.addEventListener('keydown', (e) => {\n  if (e.key === 'Enter' || e.key === ' ') {\n    card.click();\n  }\n});",
      "instructions": "Практика с DOM и атрибутами:\n1. Кликните по карточке или перейдите на неё клавишей Tab и нажмите Enter\n2. Добавьте к карточке атрибуты data-team=\"Platform\" и data-skills=\"HTML,CSS,JS\"\n3. Проверьте, как обновился объект dataset в окне вывода"
    },
    "task": {
      "title": "Комплексная настройка метаданных и Open Graph для портала",
      "scenario": "Вы запускаете новый образовательный портал. Маркетинговый отдел требует, чтобы при шеринге ссылки в Telegram и VK появлялся фирменный баннер с логотипом, заголовок и описание курса. SEO-специалист требует канонические ссылки и идеальный мобильный viewport, а отдел доступности — корректный тег языка и фавиконки.",
      "criteria": [
        "Корректный <!DOCTYPE html> и тег <html> с атрибутом lang='ru'",
        "Секция <head> содержит charset='UTF-8' и адаптивный meta viewport",
        "Присутствуют метатеги title (до 60 символов) и meta description (до 160 символов)",
        "Полный набор Open Graph тегов: og:title, og:description, og:image (абсолютный URL!), og:url, og:type, og:site_name",
        "Twitter Card метатег summary_large_image",
        "Канонический тег <link rel='canonical'>",
        "Фавиконки для браузера и Apple touch icon"
      ],
      "starterCode": {
        "html": "<!DOCTYPE html>\n<!-- Настройте метаданные страницы -->\n<html>\n<head>\n</head>\n<body>\n  <h1>Frontend Academy</h1>\n</body>\n</html>"
      },
      "hints": [
        "Всегда указывайте абсолютный протокол в og:image: https://academy.dev/og.jpg",
        "Добавьте <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "Используйте <link rel='canonical' href='https://academy.dev/course'>"
      ],
      "solution": {
        "html": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Frontend Intern Academy — Онлайн-курс с нуля</title>\n  <meta\n    name=\"description\"\n    content=\"Интерактивная платформа подготовки frontend-разработчиков: HTML5, CSS3, JavaScript и архитектура проекта.\"\n  />\n  <link rel=\"canonical\" href=\"https://intern-academy.dev/\" />\n  \n  <!-- Open Graph -->\n  <meta property=\"og:type\" content=\"website\" />\n  <meta property=\"og:site_name\" content=\"Frontend Academy\" />\n  <meta property=\"og:url\" content=\"https://intern-academy.dev/\" />\n  <meta property=\"og:title\" content=\"Frontend Intern Academy — Онлайн-курс\" />\n  <meta\n    property=\"og:description\"\n    content=\"Интерактивная платформа подготовки frontend-разработчиков.\"\n  />\n  <meta property=\"og:image\" content=\"https://intern-academy.dev/images/og-banner.jpg\" />\n  <meta property=\"og:image:width\" content=\"1200\" />\n  <meta property=\"og:image:height\" content=\"630\" />\n\n  <!-- Twitter Cards -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\" />\n  <meta name=\"twitter:image\" content=\"https://intern-academy.dev/images/og-banner.jpg\" />\n\n  <!-- Icons -->\n  <link rel=\"icon\" href=\"/favicon.ico\" sizes=\"any\" />\n  <link rel=\"icon\" href=\"/icon.svg\" type=\"image/svg+xml\" />\n  <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\" />\n</head>\n<body>\n  <h1>Frontend Academy</h1>\n</body>\n</html>",
        "explanation": "Секция head полностью укомплектована по мировым стандартам: содержит DOCTYPE, lang, viewport, SEO-описание, канонический URL, абсолютные ссылки Open Graph и фавиконки для всех типов устройств."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html4-q1",
          "question": "Что произойдёт с браузерным рендерингом, если в самом начале HTML-файла забыть объявить <!DOCTYPE html>?",
          "options": [
            "Страница вообще не загрузится и покажет белый экран",
            "Браузер переключится в Quirks Mode (режим совместимости), где Box Model и шрифты работают по устаревшим правилам IE5",
            "Браузер автоматически исправит ошибку без каких-либо последствий",
            "Скрипты JavaScript перестанут выполняться"
          ],
          "correctIndex": 1,
          "explanation": "Без DOCTYPE браузер активирует Quirks Mode для обратной совместимости с сайтами 1990-х годов. В этом режиме ширина и высота элементов вычисляются по старой блочной модели IE5, а многие современные CSS-правила игнорируются."
        },
        {
          "id": "html4-q2",
          "question": "Почему в метатеге <meta property='og:image' content='...'> необходимо указывать строго абсолютный URL?",
          "options": [
            "Абсолютный URL загружается быстрее",
            "Краулеры и парсеры соцсетей/мессенджеров (Telegram, VK, Discord) работают вне контекста страницы и не умеют резолвить относительные пути",
            "Относительные пути запрещены стандартом W3C",
            "Для защиты от взлома"
          ],
          "correctIndex": 1,
          "explanation": "Боты мессенджеров и соцсетей скачивают разметку для построения сниппета и требуют полный абсолютный URL (с https://), чтобы скачать изображение баннера напрямую со стороннего сервера."
        },
        {
          "id": "html4-q3",
          "question": "Как в JavaScript получить значение пользовательского data-атрибута: <div id='card' data-user-role='admin'>?",
          "options": [
            "card.dataset.userRole",
            "card.data.user_role",
            "card.getAttributeData('role')",
            "card.userRole"
          ],
          "correctIndex": 0,
          "explanation": "HTML5 DataSet API автоматически конвертирует дефис-нотацию data-* в camelCase: 'data-user-role' становится свойством 'element.dataset.userRole'."
        },
        {
          "id": "html4-q4",
          "question": "Что делает атрибут tabindex='-1' на элементе?",
          "options": [
            "Делает элемент невидимым",
            "Исключает элемент из последовательного обхода клавишей Tab, но позволяет фокусировать его программно через JS: element.focus()",
            "Перемещает элемент в конец страницы",
            "Блокирует клики мышью"
          ],
          "correctIndex": 1,
          "explanation": "tabindex='-1' удаляет элемент из естественного порядка навигации клавиатуры (клавиша Tab его пропускает), однако позволяет установить на него фокус из кода через element.focus() (идеально для открывающихся модалок и сообщений об ошибках)."
        },
        {
          "id": "html4-q5",
          "question": "Какое значение тега <meta name='viewport'> предотвращает нежелательное автоматическое уменьшение масштаба страницы на смартфонах?",
          "options": [
            "content='scale=none'",
            "content='width=device-width, initial-scale=1.0'",
            "content='responsive=true'",
            "content='mobile-first'"
          ],
          "correctIndex": 1,
          "explanation": "Директива 'width=device-width, initial-scale=1.0' указывает мобильному браузеру установить ширину области просмотра равной физической ширине экрана устройства и установить базовый масштаб 1:1."
        }
      ]
    }
  },
  {
    "id": "html-5",
    "moduleId": "html",
    "level": 5,
    "title": "Форматирование текста и типографика",
    "subtitle": "Семантическое выделение, цитаты, код, аббревиатуры и правила веб-типографики",
    "description": "Изучите все теги форматирования текста в HTML5: разницу между strong/b и em/i, цитирование blockquote и q, оформление программного кода и горячих клавиш pre/code/kbd/samp, семантическую дату time и типографику.",
    "estimatedMinutes": 55,
    "difficulty": "beginner",
    "tags": [
      "typography",
      "text-formatting",
      "semantic-tags",
      "code",
      "blockquote",
      "time",
      "accessibility"
    ],
    "theory": {
      "overview": "Текст — основной носитель информации в вебе. От правильного выбора тегов форматирования зависит не только визуальный вид страницы, но и доступность (a11y) для незрячих пользователей со скринридерами, корректное понимание смысловых акцентов поисковыми роботами (SEO) и читаемость кода.\n\nВ этом уроке мы разберём принципиальную разницу между семантическими и презентационными тегами, научимся правильно размечать цитаты, фрагменты кода, горячие клавиши, машинный вывод, аббревиатуры и даты по стандарту ISO 8601.",
      "sections": [
        {
          "title": "Семантические vs Презентационные теги: strong vs b, em vs i",
          "content": "Исторически в HTML существовали только визуальные теги оформления (`<b>` — bold, `<i>` — italic). В современном HTML5 введён строгий принцип разделения структуры/смысла (HTML) и визуального стиля (CSS).\n\nСемантические теги (передают смысл):\n\n1. `<strong>` — логическая важность, серьёзность или срочность контента (например, предупреждение об опасности). Скринридеры читают текст внутри `<strong>` с более сильным голосовым ударением.\n\n2. `<em>` (emphasis) — смысловой акцент фразы, меняющий значение предложения при интонационном выделении. Скринридеры меняют тон и тембр голоса.\n\nПрезентационные / стилистические теги (без семантической важности):\n\n1. `<b>` (Bring Attention To) — привлекает визуальное внимание к тексту без придания ему дополнительной важности (например, ключевые слова в лиде статьи, названия продуктов в обзоре, артикулы товаров).\n\n2. `<i>` (Idiomatic Text) — текст, отличающийся от основного повествования: технические термины, иностранные слова и фразы (*et cetera*, *de facto*), мысли персонажа, названия морских судов (*«Титаник»*).\n\n3. `<s>` (strikethrough) — текст, который больше не актуален или не верен (например, старая зачёркнутая цена товара: `<s>10 000 ₽</s> <strong>7 500 ₽</strong>`).\n\n4. `<small>` — вторичный текст: юридические дисклеймеры, копирайты, сноски, условия пользовательского соглашения.",
          "image": {
            "src": "/images/lessons/html-text-formatting.svg",
            "alt": "Семантические и презентационные теги форматирования текста в HTML5",
            "caption": "Семантические теги (strong, em, mark, abbr) передают смысл для скринридеров и SEO, а b, i, s, small служат для стилистического оформления"
          },
          "codeExample": {
            "language": "html",
            "code": "<article class=\"article-post\">\n  <!-- strong: важное предупреждение безопасности -->\n  <p class=\"warning\">\n    <strong>Внимание:</strong> Никогда не передавайте пароль третьим лицам.\n  </p>\n\n  <!-- em: изменение смыслового акцента фразы -->\n  <p>Мы должны сделать релиз <em>сегодня</em>, а не завтра.</p>\n\n  <!-- i: иностранный термин, b: артикул -->\n  <p>Паттерн проектирования <i>Singleton</i> для компонента <b>#A-402</b>.</p>\n\n  <!-- s: старая цена, small: копирайт -->\n  <p class=\"price\">Цена: <s>12 000 ₽</s> <strong>8 990 ₽</strong></p>\n  <small>© 2026 Frontend Intern Academy. Все права защищены.</small>\n</article>",
            "title": "Семантическая разметка текстовых блоков",
            "explanation": "strong используется для предупреждения, em меняет интонацию, i выделяет иностранный термин, а s отображает перечеркнутую старую цену."
          }
        },
        {
          "title": "Цитаты, аббревиатуры и правки: blockquote, q, cite, abbr, del и ins",
          "content": "Разметка цитирования и метаданных цитат в HTML5 требует соблюдения строгих семантических связей:\n\n1. `<blockquote>` — блочная цитата из внешнего источника. Обычно отображается с левым отступом. Принимает атрибут `cite=\"https://...\"` (URL-адрес источника, не виден пользователю, но парсится поисковиками).\n\n2. `<q>` — строчная (инлайн) цитата внутри абзаца. Браузер АВТОМАТИЧЕСКИ оборачивает текст в кавычки в зависимости от атрибута `lang` страницы (в русском `« »`, в английском `“ ”`). Не нужно вручную писать кавычки внутри `<q>`!\n\n3. `<cite>` — название цитируемого произведения (книги, статьи, фильма, песни) или имя автора.\n\n4. `<abbr>` — аббревиатура или акроним. Атрибут `title=\"...\"` содержит полную расшифровку, которая показывается в виде всплывающей подсказки при наведении и читается скринридером:\n`<abbr title=\"HyperText Markup Language\">HTML</abbr>`.\n\n5. `<del>` и `<ins>` — разметка правок и редактуры документа. `<del>` (удалённый текст) и `<ins>` (вставленный текст) поддерживают атрибуты `datetime=\"2026-08-19\"` и `cite=\"...\"` для фиксации времени правок (идеально для договоров, логов изменений changelog и документов).",
          "codeExample": {
            "language": "html",
            "code": "<!-- Блочная цитата с указанием источника и автора -->\n<blockquote cite=\"https://www.w3.org/WAI/fundamentals/accessibility-intro/\">\n  <p>\n    Доступность веба означает, что люди с ограниченными возможностями могут\n    воспринимать, понимать, ориентироваться и взаимодействовать с вебом.\n  </p>\n  <footer>\n    — <cite>W3C Web Accessibility Initiative (WAI)</cite>\n  </footer>\n</blockquote>\n\n<!-- Аббревиатура и строчная цитата -->\n<p>\n  По спецификации <abbr title=\"World Wide Web Consortium\">W3C</abbr>,\n  каждый сайт должен следовать принципу <q>Accessibility for all</q>.\n</p>\n\n<!-- Редакционные правки документа -->\n<p>\n  Срок сдачи проекта: <del datetime=\"2026-08-01\">1 августа</del> \n  <ins datetime=\"2026-08-19\">19 августа 2026 года</ins>.\n</p>",
            "title": "Оформление цитат blockquote, аббревиатур abbr и правок del/ins",
            "explanation": "cite внутри footer указывает источник. q автоматически подставляет кавычки. abbr даёт подсказку с расшифровкой термина."
          }
        },
        {
          "title": "Технический и программный текст: code, pre, kbd, samp, var",
          "content": "Для отображения фрагментов исходного кода, терминальных команд и интерфейсных клавиш в HTML5 выделено целое семейство специализированных тегов:\n\n1. `<code>` — инлайн-фрагмент программного кода или имя переменной/функции внутри предложения. По умолчанию отображается моноширинным шрифтом.\n\n2. `<pre>` — предварительно форматированный блок текста (Preformatted Text). Сохраняет ВСЕ пробелы, отступы и переносы строк точно так, как они написаны в HTML. Для многострочных блоков кода ВСЕГДА используется связка `<pre><code>...</code></pre>`.\n\n3. `<kbd>` — ввод с клавиатуры или горячие клавиши (Keyboard Input). Например: `<kbd>Ctrl</kbd> + <kbd>C</kbd>`. Стилизуется в CSS под объёмные кнопки клавиатуры.\n\n4. `<samp>` — машинный вывод (Sample Output): результат выполнения консольной программы, текст ошибки или системное сообщение: `<samp>404 Not Found</samp>`.\n\n5. `<var>` — математическая или программная переменная (Variable): `В уравнении <var>E</var> = <var>m</var><var>c</var><sup>2</sup>`.",
          "codeExample": {
            "language": "html",
            "code": "<div class=\"terminal-guide\">\n  <p>Для сохранения файла нажмите комбинацию <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>\n  \n  <p>Функция <code>calculateTotal(price, tax)</code> принимает аргумент <var>tax</var>.</p>\n\n  <!-- Многострочный блок кода с сохранением форматирования -->\n  <pre><code class=\"language-js\">function greet(name) {\n  // Пробелы и табы сохраняются на 100%\n  console.log(`Привет, ${name}!`);\n}</code></pre>\n\n  <p>Вывод консоли: <samp>Привет, Стажёр! [Finished in 0.2s]</samp></p>\n</div>",
            "title": "Технические теги code, pre, kbd, samp и var",
            "explanation": "Связка pre+code сохраняет отступы кода. kbd размечает хоткеи. samp выводит результат работы терминала."
          }
        },
        {
          "title": "Специальное форматирование и типографика: mark, time, sub, sup, wbr",
          "content": "HTML5 включает мощные инструменты для точной типографики и семантического обогащения:\n\n1. `<mark>` — подсветка текста жёлтым маркером. Используется для выделения результатов поиска по запросу пользователя или цитируемых фрагментов, на которые нужно обратить внимание.\n\n2. `<time>` — семантическое представление даты и времени. Атрибут `datetime` в формате ISO 8601 (`YYYY-MM-DD` или `YYYY-MM-DDTHH:MM:SSZ`) критически важен: поисковые роботы парсят дату публикации статьи, а браузеры и календари предлагают добавить событие:\n`<time datetime=\"2026-08-19T15:00\">19 августа в 15:00</time>`.\n\n3. `<sub>` (Subscript — нижний индекс) и `<sup>` (Superscript — верхний индекс): формулы и сноски (`H<sub>2</sub>O`, `10<sup>6</sup>`, `Статья<sup>[1]</sup>`).\n\n4. `<wbr>` (Word Break Opportunity) — указывает браузеру безопасное место для переноса сверхдлинного слова или URL-адреса без дефиса, если оно не помещается в ширину контейнера.\n\n5. Неразрывный пробел `&nbsp;` (Non-Breaking Space) — предотвращает перенос коротких предлогов (в, на, с, по, от), союзов и единиц измерения на новую строку (`100&nbsp;рублей`, `в&nbsp;интерфейсе`).",
          "codeExample": {
            "language": "html",
            "code": "<div class=\"search-result\">\n  <h3>\n    Результаты поиска по запросу: <mark>Frontend</mark>\n  </h3>\n  \n  <p>\n    Опубликовано: <time datetime=\"2026-08-19\">19 августа 2026 г.</time>\n  </p>\n  \n  <p>Формула этанола: C<sub>2</sub>H<sub>5</sub>OH, плотность: 10<sup>3</sup> кг/м³.</p>\n  \n  <p class=\"url-link\">\n    Ссылка: https://intern-academy.ru/courses/<wbr>frontend-developer-master-class\n  </p>\n</div>",
            "title": "Специальные теги mark, time, sub, sup и wbr",
            "explanation": "mark подсвечивает совпадение в поиске, time передает дату в машиночитаемом формате datetime, wbr обеспечивает безопасный перенос длинной ссылки."
          }
        }
      ],
      "seniorTips": [
        "Для блоков кода ВСЕГДА используйте вложенность `<pre><code>...</code></pre>`. Тег `<pre>` сохраняет переносы и пробелы, а `<code>` сообщает скринридерам и парсерам подсветки синтаксиса (Prism/Highlight.js), что внутри находится код.",
        "Всегда заполняйте атрибут `datetime` у тега `<time>`. Текст внутри тега может быть любым («3 дня назад», «в прошлый вторник»), но `datetime=\"2026-08-19\"` позволяет роботам и ассистентам однозначно понять точную дату.",
        "Никогда не ставьте кавычки вручную внутри тега `<q>`. Браузер подставит корректные языковые кавычки автоматически на основе атрибута `lang` документа.",
        "Используйте неразрывные пробелы `&nbsp;` после коротких союзов и предлогов (в, на, с, из, от, под) в заголовках `<h1>`-`<h3>`, чтобы избежать висячих строк на мобильных экранах."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Использование визуального b вместо семантического strong для важной ошибки -->\n<p><b>ОШИБКА:</b> База данных недоступна!</p>",
          "good": "<p><strong>ОШИБКА:</strong> База данных недоступна!</p>",
          "reason": "Тег <b> делает текст жирным чисто визуально, но скринридер не передаст важность голосом, а поисковик не учтет значимость фразы. Для предупреждений и важности используйте <strong>."
        },
        {
          "bad": "<!-- Отображение кода без тега pre -->\n<code>\n  const x = 10;\n  const y = 20;\n</code>",
          "good": "<pre><code class=\"language-js\">\nconst x = 10;\nconst y = 20;\n</code></pre>",
          "reason": "Тег <code> является строчным (inline) и схлопывает все переносы строк и пробелы в один пробел. Без тега <pre> весь многострочный код сольется в одну нечитаемую строку."
        },
        {
          "bad": "<!-- Дата обычным текстом без семантики -->\n<span>Дата обновления: 19.08.2026</span>",
          "good": "<span>Дата обновления: <time datetime=\"2026-08-19\">19.08.2026</time></span>",
          "reason": "Без тега <time datetime='...'> поисковые роботы не могут извлечь точную дату публикации статьи для формирования расширенного сниппета в поиске."
        }
      ],
      "keyTakeaways": [
        "`<strong>` означает смысловую важность и акцентируется скринридерами, а `<b>` — лишь визуальное утолщение шрифта.",
        "`<em>` задает смысловой акцент и интонацию, а `<i>` — стилистический курсив для терминов и иностранных слов.",
        "Для блоков кода используется связка `<pre><code>...</code></pre>`, для клавиш — `<kbd>`, для вывода программ — `<samp>`.",
        "Тег `<time datetime=\"YYYY-MM-DD\">` передает дату в стандарте ISO 8601 для поисковиков и голосовых помощников.",
        "Тег `<abbr title=\"...\">` раскрывает расшифровку аббревиатур при наведении и озвучивается скринридерами."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"typography-demo\">\n  <h2>Документация по хоткеям</h2>\n  <p>Для открытия терминала нажмите <kbd>Ctrl</kbd> + <kbd>`</kbd>.</p>\n  \n  <p>Статус сервера на <time datetime=\"2026-08-19T12:00\">сегодня 12:00</time>:</p>\n  <pre><code class=\"code-box\">HTTP/1.1 200 OK\nStatus: <mark>HEALTHY</mark>\nUptime: 99.98%</code></pre>\n\n  <p>Аббревиатура: <abbr title=\"Application Programming Interface\">API</abbr> v2.0</p>\n</div>",
      "initialCss": ".typography-demo {\n  padding: 16px;\n  background: #0a0e13;\n  color: #e6edf3;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n}\nkbd {\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-bottom: 2px solid #2dff8a;\n  border-radius: 4px;\n  padding: 2px 6px;\n  font-family: monospace;\n  font-size: 12px;\n  color: #2dff8a;\n}\n.code-box {\n  display: block;\n  background: #03060a;\n  border: 1px solid #30363d;\n  padding: 12px;\n  border-radius: 6px;\n  color: #29e7ff;\n  font-family: monospace;\n}\nmark {\n  background: #2dff8a;\n  color: #03060a;\n  padding: 1px 4px;\n  border-radius: 2px;\n  font-weight: bold;\n}\nabbr {\n  text-decoration: underline dotted #29e7ff;\n  cursor: help;\n}",
      "initialJs": "const time = document.querySelector('time');\nconsole.log('Семантическое время ISO:', time.getAttribute('datetime'));",
      "instructions": "Практика с типографикой:\n1. Посмотрите, как стилизованы теги <kbd>, <mark> и <abbr>\n2. Добавьте в разметку цитату с <blockquote> и <cite>\n3. Добавьте химическую формулу воды с тегом <sub> (H2O)"
    },
    "task": {
      "title": "Разметка страницы технической документации с типографикой",
      "scenario": "Вы верстаете раздел документации для внутренней библиотеки компонентов. Требуется разметить руководство пользователя с правильным использованием семантических тегов текста: важные предупреждения, горячие клавиши, блок кода с сохранением отступов, цитату архитектора с указанием источника, аббревиатуры и дату релиза.",
      "criteria": [
        "Критическое предупреждение оформлено через <strong>",
        "Горячие клавиши для поиска размечены через теги <kbd>",
        "Блок кода оформлен через связку <pre><code> с сохранением форматирования",
        "Цитата архитектора оформлена через <blockquote> с тегом <cite>",
        "Аббревиатура DOM или API оформлена через <abbr title='...'>",
        "Дата последнего обновления размечена тегом <time datetime='2026-08-19'>",
        "Химическая формула или математическая степень с sub/sup"
      ],
      "starterCode": {
        "html": "<article class=\"docs-page\">\n  <!-- Разметьте техническую документацию -->\n  <h1>Руководство разработчика</h1>\n</article>"
      },
      "hints": [
        "Используйте <kbd>Ctrl</kbd> + <kbd>K</kbd> для вызова строки поиска",
        "Оберните цитату в <blockquote><p>...</p><cite>...</cite></blockquote>",
        "Для даты используйте <time datetime='2026-08-19'>19 августа 2026</time>"
      ],
      "solution": {
        "html": "<article class=\"docs-page\">\n  <h1>Руководство разработчика</h1>\n  \n  <p class=\"alert\">\n    <strong>Важно:</strong> Перед деплоем запустите проверку типов.\n  </p>\n\n  <p>\n    Для быстрого поиска по документации используйте сочетание \n    клавиш <kbd>Ctrl</kbd> + <kbd>K</kbd>.\n  </p>\n\n  <p>\n    Библиотека построена на базе <abbr title=\"Application Programming Interface\">API</abbr> \n    браузерного <abbr title=\"Document Object Model\">DOM</abbr>.\n  </p>\n\n  <pre><code class=\"language-js\">// Инициализация модуля\nconst app = new CoreModule({\n  version: '2.0.0',\n  debug: false\n});</code></pre>\n\n  <blockquote cite=\"https://standards.dev/architecture\">\n    <p>Чистая семантика — это фундамент масштабируемого интерфейса.</p>\n    <footer>— <cite>Главный архитектор платформы</cite></footer>\n  </blockquote>\n\n  <p>Максимальная сложность алгоритма: O(N<sup>2</sup>).</p>\n\n  <footer class=\"docs-footer\">\n    <p>Дата релиза: <time datetime=\"2026-08-19\">19 августа 2026 г.</time></p>\n  </footer>\n</article>",
        "explanation": "Документация размечена с полным соблюдением спецификации HTML5: strong для критических предупреждений, kbd для хоткеев, pre+code для многострочного кода, blockquote+cite для цитаты, abbr для терминов и time с атрибутом datetime."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html5-q1",
          "question": "В чём заключается принципиальная разница между тегами <strong> и <b> в HTML5?",
          "options": [
            "Тег <b> делает текст жирнее, чем <strong>",
            "Тег <strong> передаёт семантическую важность/срочность и акцентируется скринридерами, а <b> служит лишь для визуального привлечения внимания без дополнительной важности",
            "Тег <strong> устарел и больше не поддерживается",
            "Разницы нет, они абсолютно идентичны"
          ],
          "correctIndex": 1,
          "explanation": "<strong> указывает на смысловую важность содержимого (скринридеры читают с ударением, поисковики повышают вес ключевых слов). Тег <b> привлекает визуальное внимание (например, артикул или ключевое слово) без смысловой нагрузки."
        },
        {
          "id": "html5-q2",
          "question": "Какая комбинация тегов является стандартом для отображения многострочных блоков программного кода?",
          "options": [
            "<code-block>...</code-block>",
            "<p><code>...</code></p>",
            "<pre><code>...</code></pre>",
            "<samp><kbd>...</kbd></samp>"
          ],
          "correctIndex": 2,
          "explanation": "Тег <pre> сохраняет все отступы, табуляции и переносы строк, а вложенный тег <code> указывает браузеру и скринридерам, что внутри содержится машинный программный код."
        },
        {
          "id": "html5-q3",
          "question": "Зачем тегу <time> необходим атрибут datetime (например, <time datetime='2026-08-19'>сегодня</time>)?",
          "options": [
            "Чтобы дата автоматически обновлялась на компьютере пользователя",
            "Чтобы предоставить машиночитаемый стандартизированный формат (ISO 8601) для поисковых систем, календарей и скринридеров, пока внутри тега написан человекочитаемый текст",
            "Без атрибута datetime тег <time> не отобразится",
            "Для подключения стилей CSS"
          ],
          "correctIndex": 1,
          "explanation": "Текст внутри тега может быть относительным ('вчера', '3 часа назад'), а атрибут datetime='2026-08-19' даёт точное время по стандарту ISO 8601 для поисковых роботов (SEO) и календарных систем."
        },
        {
          "id": "html5-q4",
          "question": "Какое поведение обеспечивает тег <q> при отображении строчной цитаты?",
          "options": [
            "Делает текст полужирным",
            "Браузер автоматически оборачивает текст цитаты в кавычки согласно правилам языка текущей страницы (атрибут lang)",
            "Переносит текст на новую строку",
            "Удаляет цитату из страницы"
          ],
          "correctIndex": 1,
          "explanation": "Тег <q> предназначен для инлайн-цитат. Браузер сам генерирует нужные кавычки («елочки» для lang='ru', “лапки” для lang='en'), поэтому писать кавычки внутри тега вручную не нужно."
        },
        {
          "id": "html5-q5",
          "question": "Для чего используется тег <abbr> с атрибутом title?",
          "options": [
            "Для создания анимации текста",
            "Для разметки аббревиатур и акронимов с предоставлением их полной расшифровки при наведении курсора и для скринридеров",
            "Для удаления текста",
            "Для вывода цитат из книг"
          ],
          "correctIndex": 1,
          "explanation": "Тег <abbr title='HyperText Markup Language'>HTML</abbr> размечает аббревиатуру, показывая расшифровку во всплывающей подсказке при наведении мыши и передавая ее голосовым синтезаторам доступности."
        }
      ]
    }
  },
  {
    "id": "html-6",
    "moduleId": "html",
    "level": 6,
    "title": "Ссылки и адресация (URL)",
    "subtitle": "Абсолютные и относительные пути, якоря, протоколы mailto/tel, атрибуты target, rel и download",
    "description": "Освойте фундаментальный механизм гипертекста в HTML5: структуру URL, абсолютные vs относительные пути, якорную навигацию с плавной прокруткой, протоколы mailto/tel/sms, безопасность target='_blank' с rel='noopener noreferrer' и атрибут download.",
    "estimatedMinutes": 55,
    "difficulty": "beginner",
    "tags": [
      "links",
      "url",
      "anchors",
      "navigation",
      "security",
      "noopener",
      "mailto",
      "tel"
    ],
    "theory": {
      "overview": "Гиперссылка (Hyperlink, тег `<a>` — anchor) — основа Всемирной паутины (WWW). Именно ссылки связывают миллиарды разрозненных веб-страниц, документов и медиафайлов в единую глобальную паутину.\n\nВ этом уроке мы детально изучим анатомию URL-адреса, разберёмся с подводными камнями абсолютных и относительных путей, научимся строить доступную якорную навигацию («Skip to content»), использовать протоколы `mailto:` и `tel:` для мобильных устройств, а также защитим приложение от критической уязвимости Tabnabbing с помощью `rel=\"noopener noreferrer\"`.",
      "sections": [
        {
          "title": "Анатомия гиперссылки: тег <a> и структура URL",
          "content": "Тег `<a>` (Anchor) превращает любой вложенный текст или медиаэлемент в кликабельную ссылку.\n\nПолная структура URL-адреса (Uniform Resource Locator):\n`https://sub.domain.com:443/catalog/items?sort=price&page=2#item-42`\n1. Протокол / Схема (`https://`, `http://`, `ftp://`): определяет протокол передачи данных. Всегда используйте безопасный HTTPS.\n2. Доменное имя и порт (`domain.com:443`): адрес сервера (порт 443 для HTTPS и 80 для HTTP опускаются по умолчанию).\n3. Путь к ресурсу (Path: `/catalog/items`): иерархическое расположение страницы на веб-сервере.\n4. Query-параметры (`?sort=price&page=2`): пары `ключ=значение`, передающие фильтры, пагинацию или UTM-метки.\n5. Хэш-фрагмент / Якорь (`#item-42`): идентификатор узла внутри текущей страницы (браузер скроллит к элементу с соответствующим `id`).\n\nАбсолютные vs Относительные пути:\n- Абсолютный URL (`https://site.ru/about`): содержит полный адрес с протоколом и доменом. Обязателен для внешних ссылок на сторонние ресурсы.\n- Относительный от корня (`/about`): начинается со слеша, ищет файл от корня текущего домена. Идеален для внутренней навигации сайта.\n- Относительный к текущей папке (`./images/pic.png` или `../doc.pdf`): ищет ресурс относительно текущей директории страницы (`..` поднимается на уровень выше).",
          "image": {
            "src": "/images/lessons/html-links-url.svg",
            "alt": "Анатомия URL и безопасность гиперссылок target blank noopener",
            "caption": "Полная структура URL: протокол, домен, путь, query-параметры и якорный хэш. Безопасность внешних ссылок через rel='noopener'"
          },
          "codeExample": {
            "language": "html",
            "code": "<!-- Внешняя абсолютная ссылка -->\n<a href=\"https://developer.mozilla.org/ru/\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Документация MDN Web Docs\n</a>\n\n<!-- Внутренние относительные ссылки -->\n<nav>\n  <!-- От корня домена -->\n  <a href=\"/\">Главная</a>\n  <a href=\"/catalog/frontend\">Курсы Frontend</a>\n  <!-- Подъем на 1 уровень выше в файловой структуре -->\n  <a href=\"../assets/curriculum.pdf\" download=\"curriculum-2026.pdf\">\n    Скачать программу курса (PDF)\n  </a>\n</nav>",
            "title": "Примеры абсолютных, относительных ссылок и скачивания",
            "explanation": "Внешняя ссылка на MDN использует target='_blank' и защитный rel='noopener'. Ссылка на программу использует атрибут download для сохранения PDF-файла."
          }
        },
        {
          "title": "Якорные ссылки, плавная прокрутка и доступность (Skip to content)",
          "content": "Якорная ссылка (Anchor Link) позволяет мгновенно перемещаться к определенной секции внутри текущей веб-страницы.\n\nМеханизм работы якоря:\n1. Целевой блок размечается уникальным атрибутом `id`: `<section id=\"pricing\">`.\n2. Ссылка указывает на этот `id` через символ решетки `#`: `<a href=\"#pricing\">Тарифы</a>`.\n3. При клике браузер плавно скроллит страницу так, чтобы блок `id=\"pricing\"` оказался в верхней части экрана, и добавляет `#pricing` в адресную строку URL.\n\nПроблема перекрытия фиксированной шапкой (Sticky/Fixed Header Problem):\nЕсли на сайте закреплена шапка высотой 70px, то якорь скроллится под шапку и заголовок оказывается скрыт! Решение в современном CSS:\n`html { scroll-behavior: smooth; scroll-padding-top: 80px; }`.\n\nПаттерн доступности «Skip to content» (Пропустить навигацию):\nПервой ссылкой на странице размещают невидимую для зрячих ссылку `<a href=\"#main-content\" class=\"skip-link\">Перейти к основному контенту</a>`. Незрячие пользователи, перемещающиеся клавишей `Tab`, могут одним нажатием пропустить повторяющуюся шапку с 20 ссылками меню и сразу перейти к чтению статьи.",
          "codeExample": {
            "language": "html",
            "code": "<!-- 1. Ссылка Skip to content для доступности (a11y) -->\n<a href=\"#main-content\" class=\"skip-link\">Пропустить навигацию</a>\n\n<!-- 2. Фиксированное меню со ссылками на секции -->\n<header class=\"sticky-nav\">\n  <a href=\"#overview\">Обзор</a>\n  <a href=\"#curriculum\">Программа</a>\n  <a href=\"#reviews\">Отзывы</a>\n</header>\n\n<!-- 3. Основной контент и секции с уникальными id -->\n<main id=\"main-content\">\n  <section id=\"overview\"><h2>Обзор курса</h2></section>\n  <section id=\"curriculum\"><h2>Программа обучения</h2></section>\n  <section id=\"reviews\"><h2>Отзывы выпускников</h2></section>\n</main>\n\n<style>\n  html {\n    scroll-behavior: smooth;\n    scroll-padding-top: 80px; /* Отступ от липкой шапки */\n  }\n  .skip-link {\n    position: absolute;\n    top: -100px;\n    left: 16px;\n    padding: 8px 16px;\n    background: #2dff8a;\n    color: #0a0e13;\n    font-weight: bold;\n    z-index: 1000;\n  }\n  .skip-link:focus {\n    top: 16px; /* Появляется только при фокусе клавишей Tab */\n  }\n</style>",
            "title": "Якорная навигация и доступная ссылка Skip to content",
            "explanation": "scroll-padding-top гарантирует, что секции не скроллятся под шапку. skip-link всплывает при фокусе Tab и ускоряет навигацию для людей с клавиатурой."
          }
        },
        {
          "title": "Специальные протоколы: mailto, tel, sms, geo и мессенджеры",
          "content": "Гиперссылки умеют не только открывать веб-страницы, но и взаимодействовать с нативными приложениями смартфона и операционной системы:\n\n1. `tel:` (Телефонные звонки):\n- Синтаксис: `<a href=\"tel:+78005553535\">8 (800) 555-35-35</a>`.\n- На смартфонах открывает стандартное приложение «Телефон» с набранным номером.\n- Внимание: в значении атрибута `href` номер ВСЕГДА указывается строго в международном стандарте (`+7...` без пробелов, скобок и тире!). Текст внутри тега может содержать любое форматирование.\n\n2. `mailto:` (Электронная почта):\n- Синтаксис: `<a href=\"mailto:support@academy.ru?subject=Вопрос&body=Здравствуйте\">Написать в поддержку</a>`.\n- Открывает почтовый клиент пользователя (Outlook, Apple Mail, Gmail) с предзаполненной темой (`subject`), текстом (`body`) и копией (`cc`, `bcc`).\n\n3. Ссылки на мессенджеры и социальные сети:\n- Telegram: `href=\"https://t.me/username\"` (универсальный web-линк) или `href=\"tg://resolve?domain=username\"` (нативное приложение).\n- WhatsApp: `href=\"https://wa.me/79991234567?text=Привет\"`.",
          "codeExample": {
            "language": "html",
            "code": "<div class=\"contact-widget\">\n  <h3>Служба поддержки стажёров</h3>\n  \n  <!-- Звонок в 1 клик -->\n  <p>\n    Телефон: <a href=\"tel:+78005553535\">+7 (800) 555-35-35</a> (бесплатно по РФ)\n  </p>\n  \n  <!-- Письмо с предзаполненной темой -->\n  <p>\n    Email: <a href=\"mailto:help@intern.dev?subject=Помощь%20с%20Уроком%206&body=Здравствуйте,%20у%20меня%20вопрос...\">\n      help@intern.dev\n    </a>\n  </p>\n\n  <!-- Чат в Telegram -->\n  <a href=\"https://t.me/frontend_interns_bot\" class=\"btn-tg\" target=\"_blank\" rel=\"noopener noreferrer\">\n    Открыть чат в Telegram\n  </a>\n</div>",
            "title": "Разметка звонков tel:, писем mailto: и чатов Telegram",
            "explanation": "Атрибут tel: содержит чистый номер для автоматического набора. mailto: содержит URL-encoded параметры subject и body."
          }
        },
        {
          "title": "Безопасность и SEO: target=\"_blank\", noopener, noreferrer, nofollow",
          "content": "Атрибут `target` управляет контекстом открытия страницы (`_self` — в текущей вкладке по умолчанию, `_blank` — в новой вкладке, `_parent`, `_top`).\n\nКритическая уязвимость Tabnabbing (Reverse Tabnabbing):\nКогда вы открываете ссылку `<a href=\"https://evil.com\" target=\"_blank\">`, открывшаяся страница `evil.com` в старых браузерах получала доступ к объекту `window.opener` родительской страницы!\nХакерский сайт мог выполнить `window.opener.location = 'https://fake-login-bank.ru'`, незаметно подменив исходную вкладку пользователя на фишинговую страницу ввода пароля.\n\nЗащита через атрибут `rel`:\n1. `rel=\"noopener\"` — полностью обнуляет `window.opener` (`window.opener === null`), изолируя процесс новой вкладки.\n2. `rel=\"noreferrer\"` — блокирует отправку HTTP-заголовка `Referer` (скрывает от стороннего сервера, с какого URL пришел пользователь), а также автоматически включает `noopener`.\n\nSEO-атрибуты `rel` для поисковых систем (Google / Яндекс):\n- `rel=\"nofollow\"` — указывает поисковому роботу не передавать ссылочный вес (PageRank) целевой странице (для непроверенного контента).\n- `rel=\"sponsored\"` — для рекламных и платных партнерских ссылок.\n- `rel=\"ugc\"` (User Generated Content) — для ссылок, оставленных пользователями в комментариях и на форумах.\n\nАтрибут `download`:\nПринудительно скачивает файл вместо открытия в браузере: `<a href=\"/reports/2026.pdf\" download=\"final-report.pdf\">Скачать</a>`.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Безопасная внешняя партнерская ссылка -->\n<a\n  href=\"https://partner-tools.com/ide-pro\"\n  target=\"_blank\"\n  rel=\"noopener noreferrer sponsored\"\n>\n  Купить профессиональную IDE со скидкой (Партнёр)\n</a>\n\n<!-- Скачивание архива с кастомным именем файла -->\n<a href=\"/builds/v1.0.4.zip\" download=\"frontend-platform-v1.0.4.zip\">\n  Скачать релизный архив (.ZIP)\n</a>",
            "title": "Безопасные внешние ссылки и принудительное скачивание",
            "explanation": "Комбинация target='_blank' + rel='noopener noreferrer sponsored' защищает от фишинга и корректно размечает рекламу для поисковиков."
          }
        }
      ],
      "seniorTips": [
        "При любом использовании `target=\"_blank\"` ВСЕГДА явно пишите `rel=\"noopener noreferrer\"`. В современных браузерах noopener включен по умолчанию, но на старых мобильных WebKit это защищает пользователей от фишинга.",
        "Всегда добавляйте в CSS свойство `scroll-padding-top: var(--header-height);` на селектор `html` — это навсегда решает проблему перекрытия якорных заголовков фиксированной шапкой сайта.",
        "Никогда не используйте ссылки-пустышки `<a href=\"#\">` или `<a href=\"javascript:void(0)\">` для открытия модалок или переключения табов. Если элемент выполняет действие в JS, а не переходит по URL — это семантический `<button type=\"button\">`!",
        "Для телефонных номеров в `href=\"tel:...\"` всегда используйте международный формат `+7...` без пробелов и скобок — это гарантирует корректный набор номера на любых устройствах."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Внешняя ссылка без защиты -->\n<a href=\"https://external-resource.com\" target=\"_blank\">Перейти на сайт</a>",
          "good": "<a href=\"https://external-resource.com\" target=\"_blank\" rel=\"noopener noreferrer\">Перейти на сайт</a>",
          "reason": "Без rel='noopener noreferrer' целевая страница может получить доступ к window.opener и скрытно подменить родительскую вкладку на фишинговую страницу."
        },
        {
          "bad": "<!-- Использование ссылки вместо кнопки -->\n<a href=\"#\" onclick=\"openAuthModal()\">Войти в аккаунт</a>",
          "good": "<button type=\"button\" onclick=\"openAuthModal()\">Войти в аккаунт</button>",
          "reason": "Ссылка предназначена для перехода по URL. Использование <a> для JS-действий ломает доступность (скринридер ждёт перехода) и скроллит страницу вверх при клике на '#'."
        },
        {
          "bad": "<a href=\"tel:8 (800) 555-35-35\">Позвонить</a>",
          "good": "<a href=\"tel:+78005553535\">8 (800) 555-35-35</a>",
          "reason": "Пробелы и скобки в href='tel:...' ломают автоматический набор номера на многих моделях Android и iOS. Номер в href должен быть чистым и в международном формате."
        }
      ],
      "keyTakeaways": [
        "Тег `<a>` связывает страницы через абсолютные и относительные URL-адреса.",
        "Якорные ссылки `href=\"#id\"` скроллят к элементу с соответствующим `id`, требуя `scroll-padding-top` для компенсации шапки.",
        "Паттерн доступности `Skip to content` позволяет пользователям с клавиатурой быстро перейти к главному контенту.",
        "Протоколы `tel:` и `mailto:` активируют нативные звонки и почтовые клиенты.",
        "Для всех внешних ссылок с `target=\"_blank\"` обязателен атрибут `rel=\"noopener noreferrer\"` для защиты от Tabnabbing."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"links-playground\">\n  <nav class=\"demo-nav\">\n    <a href=\"#section-features\">Возможности</a>\n    <a href=\"#section-pricing\">Цены</a>\n    <a href=\"tel:+78001234567\">📞 Позвонить</a>\n    <a href=\"mailto:test@intern.dev?subject=Вопрос\">✉️ Написать</a>\n  </nav>\n\n  <div style=\"height: 120px;\"></div>\n  <section id=\"section-features\" class=\"demo-sec\"><h3>Раздел: Возможности</h3></section>\n  <div style=\"height: 120px;\"></div>\n  <section id=\"section-pricing\" class=\"demo-sec\"><h3>Раздел: Тарифы и цены</h3></section>\n</div>",
      "initialCss": ".links-playground {\n  height: 250px;\n  overflow-y: auto;\n  background: #0a0e13;\n  padding: 16px;\n  color: #e6edf3;\n  font-family: monospace;\n  scroll-behavior: smooth;\n}\n.demo-nav {\n  position: sticky;\n  top: 0;\n  background: #161b22;\n  padding: 10px;\n  border: 1px solid #30363d;\n  display: flex;\n  gap: 12px;\n  border-radius: 6px;\n  z-index: 10;\n}\n.demo-nav a {\n  color: #2dff8a;\n  text-decoration: none;\n}\n.demo-nav a:hover {\n  text-decoration: underline;\n  color: #29e7ff;\n}\n.demo-sec {\n  padding: 16px;\n  background: #0d1117;\n  border: 1px dashed #29e7ff;\n  border-radius: 6px;\n}",
      "initialJs": "console.log('Песочница ссылок готова');",
      "instructions": "Практика со ссылками:\n1. Кликните по ссылкам 'Возможности' и 'Цены' — проверьте плавный якорный переход\n2. Добавьте ссылку на скачивание файла с атрибутом download='document.pdf'\n3. Добавьте внешнюю ссылку с target='_blank' и rel='noopener noreferrer'"
    },
    "task": {
      "title": "Разработка доступного навигационного меню и контактного хаба",
      "scenario": "Вам необходимо сверстать навигационный хаб для корпоративного лендинга: добавить доступную скрытую ссылку «Skip to content», главное якорное меню с компенсацией липкой шапки, безопасные ссылки на внешних партнеров и кликабельные контакты (телефон и email).",
      "criteria": [
        "Добавлена ссылка 'Skip to content' с href='#main' и доступным поведением при фокусе",
        "Якорные ссылки ведут к секциям с соответствующими id",
        "Внешняя ссылка на партнера открывается в новой вкладке с target='_blank' и rel='noopener noreferrer'",
        "Телефон размечен через tel: в международном формате +7...",
        "Email размечен через mailto: с темой письма",
        "Кнопка скачивания прайс-листа содержит атрибут download"
      ],
      "starterCode": {
        "html": "<header>\n  <!-- Разметьте навигацию и контакты -->\n  <nav></nav>\n</header>\n<main id=\"main\">\n  <section id=\"services\"><h2>Услуги</h2></section>\n  <section id=\"contacts\"><h2>Контакты</h2></section>\n</main>"
      },
      "hints": [
        "Используйте <a href='#main' class='skip-link'>Пропустить к контенту</a>",
        "Для звонков: <a href='tel:+78005553535'>8 (800) 555-35-35</a>",
        "Для внешней ссылки: <a href='https://partner.com' target='_blank' rel='noopener noreferrer'>Партнёр</a>"
      ],
      "solution": {
        "html": "<a href=\"#main\" class=\"skip-link\">Пропустить навигацию</a>\n\n<header class=\"header-nav\">\n  <nav>\n    <a href=\"#services\">Услуги</a>\n    <a href=\"#contacts\">Контакты</a>\n    <a href=\"/docs/price.pdf\" download=\"price-2026.pdf\">Скачать прайс (.PDF)</a>\n    <a href=\"https://partner-portal.com\" target=\"_blank\" rel=\"noopener noreferrer sponsored\">Партнёры</a>\n  </nav>\n  <div class=\"contacts-bar\">\n    <a href=\"tel:+78005553535\">8 (800) 555-35-35</a>\n    <a href=\"mailto:sales@company.ru?subject=Заказ%20услуг\">sales@company.ru</a>\n  </div>\n</header>\n\n<main id=\"main\">\n  <section id=\"services\"><h2>Услуги</h2><p>Разработка веб-приложений.</p></section>\n  <section id=\"contacts\"><h2>Контакты</h2><p>Свяжитесь с нами любым удобным способом.</p></section>\n</main>",
        "explanation": "Разметка полностью соответствует стандартам доступности и безопасности: содержит skip-link, чистый номер tel:, mailto: с темой, безопасный target='_blank' с rel='noopener noreferrer' и атрибут download."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html6-q1",
          "question": "В чём заключается опасность уязвимости Tabnabbing при использовании ссылки <a href='...' target='_blank'> без дополнительных атрибутов?",
          "options": [
            "Сторонняя страница может прочитать пароли из cookies пользователя",
            "Сторонняя страница может через свойство window.opener.location незаметно перенаправить исходную родительскую вкладку на фишинговый сайт",
            "Страница зависает и перестает отвечать",
            "Уязвимости не существует"
          ],
          "correctIndex": 1,
          "explanation": "При target='_blank' без rel='noopener' открывшаяся страница имеет ссылку на родительское окно через window.opener и может скрытно изменить адрес родительской вкладки на фальшивую форму входа."
        },
        {
          "id": "html6-q2",
          "question": "Какая комбинация атрибутов rel полностью устраняет уязвимость Tabnabbing и скрывает реферер?",
          "options": [
            "rel='safe external'",
            "rel='noopener noreferrer'",
            "rel='nofollow hide'",
            "rel='target-parent'"
          ],
          "correctIndex": 1,
          "explanation": "rel='noopener' обнуляет window.opener (защищая от Tabnabbing), а 'noreferrer' дополнительно блокирует отправку заголовка Referer со страницей-источником."
        },
        {
          "id": "html6-q3",
          "question": "Как правильно оформить телефонный номер для безошибочного набора со смартфонов?",
          "options": [
            "<a href='phone:8-800-555-35-35'>Позвонить</a>",
            "<a href='tel:+78005553535'>8 (800) 555-35-35</a>",
            "<a href='call:+7 (800) 555-35-35'>8 (800) 555-35-35</a>",
            "<button type='phone'>+78005553535</button>"
          ],
          "correctIndex": 1,
          "explanation": "Протокол tel: требует в значении href строго международный формат (+7...) без пробелов, скобок и дефисов, в то время как текст ссылки внутри тега может быть красиво отформатирован для пользователя."
        },
        {
          "id": "html6-q4",
          "question": "Какое CSS-свойство предотвращает перекрытие якорных заголовков фиксированной шапкой сайта?",
          "options": [
            "scroll-behavior: auto;",
            "scroll-padding-top: 80px; (на селекторе html)",
            "margin-top: 80px;",
            "z-index: 1000;"
          ],
          "correctIndex": 1,
          "explanation": "Свойство scroll-padding-top на селекторе html задает отступ от верхнего края viewport при прокрутке к якорю, гарантируя, что заголовок секции не окажется под фиксированной шапкой."
        },
        {
          "id": "html6-q5",
          "question": "Зачем на странице используется скрытая ссылка «Skip to content» (<a href='#main'>)?",
          "options": [
            "Для ускорения загрузки JavaScript",
            "Для доступности: позволяет незрячим пользователям и людям, управляющим сайтом с клавиатуры (Tab), одним нажатием пропустить шапку и перейти сразу к главному контенту",
            "Для индексации сайта поисковыми ботами",
            "Для закрытия модальных окон"
          ],
          "correctIndex": 1,
          "explanation": "Skip-link — ключевое требование стандарта доступности WCAG. Она дает возможность пользователям с клавиатурой не проходить через десятки ссылок в шапке на каждой странице."
        }
      ]
    }
  },
  {
    "id": "html-7",
    "moduleId": "html",
    "level": 7,
    "title": "Изображения, мультимедиа и адаптивная графика",
    "subtitle": "img, picture, video, audio, форматы AVIF/WebP/SVG, srcset, sizes и ленивая загрузка",
    "description": "Освойте современную работу с медиаконтентом в HTML5: разницу между растром и вектором (SVG), адаптивную графику через srcset и sizes, арт-дирекшн и фоллбэки в теге <picture>, автоплей видео на смартфонах и оптимизацию Core Web Vitals.",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "images",
      "multimedia",
      "picture",
      "video",
      "audio",
      "avif",
      "webp",
      "svg",
      "srcset",
      "lazy-loading"
    ],
    "theory": {
      "overview": "Изображения и видео составляют до 70% общего веса средней веб-страницы. От правильного выбора форматов сжатия, адаптивной сетки разрешений и отложенной загрузки напрямую зависят оценка LCP в Google Core Web Vitals, трафик пользователей и конверсия.\n\nВ этом уроке мы разберём современные форматы графики (AVIF, WebP, SVG), научимся отдавать адаптивные изображения под экраны Retina через `srcset` и `sizes`, настраивать арт-дирекшн (Art Direction) в теге `<picture>` и правильно внедрять фоновое видео с учётом ограничений мобильных ОС iOS и Android.",
      "sections": [
        {
          "title": "Анатомия <img> и форматы графики: Растр (AVIF/WebP) vs Вектор (SVG)",
          "content": "Форматы графики делятся на два принципиальных класса:\n\n1. Растровая графика (сетка пикселей):\n- `AVIF` (AV1 Image File Format) — новейший стандарт 2024–2026 гг. Имеет непревзойденное сжатие (на 50% легче JPEG и на 20% легче WebP при том же качестве). Поддерживает HDR и прозрачность.\n- `WebP` — современный стандарт от Google. Поддерживается 98%+ браузеров, на 30% легче JPEG/PNG, поддерживает альфа-канал (прозрачность) и анимацию.\n- `JPEG/JPG` — классический формат для фотографий без прозрачности.\n- `PNG` — сжатие без потерь (Lossless) с поддержкой прозрачности. Идеален для скриншотов с текстом и графиков с четкими линиями.\n\n2. Векторная графика (`SVG` — Scalable Vector Graphics):\n- Текстовый XML-код, описывающий геометрические примитивы (линии, кривые Безье, круги).\n- Бесконечно масштабируется без потери четкости на любых 4K/8K экранах при микроскопическом весе (1–5 КБ).\n- Идеален для логотипов, иконок и UI-элементов.\n\nКритическая важность атрибута `alt`:\n- Текст `alt` озвучивается скринридерами для незрячих пользователей (Accessibility WCAG).\n- Отображается вместо картинки при медленном соединении или ошибке 404.\n- Индексируется поисковыми роботами для поиска по картинкам (SEO).\n- Золотое правило: если картинка чисто декоративная (фоновый узор, разделитель) — ОБЯЗАТЕЛЬНО ставьте пустой `alt=\"\"` (скринридер пропустит её без звука). Если атрибут `alt` отсутствует вовсе — скринридер прочитает имя файла (`banner-v2_final_2026.jpg`), что ужасно для пользователя!\n\nАтрибуты `width` и `height`:\nВСЕГДА указывайте атрибуты `width` и `height` на теге `<img>`! Браузер использует их для мгновенного резервирования соотношения сторон (Aspect Ratio), полностью исключая сдвиг макета (CLS = 0).",
          "image": {
            "src": "/images/lessons/html-multimedia-responsive.svg",
            "alt": "Адаптивная графика в HTML: тег picture, srcset, sizes и видео video",
            "caption": "Тег picture обеспечивает прогрессивную отдачу форматов AVIF/WebP/JPG и арт-дирекшн. srcset и sizes выбирают размер под экран"
          },
          "codeExample": {
            "language": "html",
            "code": "<!-- Идеальная разметка адаптивной картинки с защитой от CLS -->\n<img\n  src=\"/images/products/keyboard.jpg\"\n  alt=\"Механическая клавиатура с RGB-подсветкой и тихими свитчами\"\n  width=\"800\"\n  height=\"450\"\n  loading=\"lazy\"\n  decoding=\"async\"\n  class=\"product-thumb\"\n/>\n\n<!-- Декоративный векторный разделитель (пустой alt!) -->\n<img src=\"/icons/divider-neon.svg\" alt=\"\" aria-hidden=\"true\" />",
            "title": "Семантическая разметка img с alt, размерами и lazy-loading",
            "explanation": "Указание width и height предотвращает сдвиг макета CLS. loading='lazy' откладывает загрузку до скролла. Пустой alt='' скрывает декоративную графику от скринридеров."
          }
        },
        {
          "title": "Адаптивная графика: дескрипторы srcset и атрибут sizes",
          "content": "Один и тот же файл изображения не может идеально подходить одновременно для старого смартфона 360px и для монитора 4K 3840px (для смартфона файл будет избыточно тяжелым, а на 4K — размытым).\n\n1. Адаптация под Retina-дисплеи (дескрипторы плотности `1x`, `2x`, `3x`):\n`srcset=\"logo.png 1x, logo-2x.png 2x, logo-3x.png 3x\"`\nБраузер с экраном Retina (DPR = 2) автоматически скачает четкую версию `logo-2x.png`.\n\n2. Адаптация под ширину экрана (дескрипторы ширины `w` + атрибут `sizes`):\n- `srcset` перечисляет доступные файлы и их физическую ширину в пикселях: `srcset=\"photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w\"`.\n- `sizes` сообщает браузеру, какую долю ширины экрана займет элемент ДО ТОГО, как загрузится и применится CSS-файл:\n`sizes=\"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\"`.\n- Браузер умножает ширину слота из `sizes` на Device Pixel Ratio (DPR) экрана и выбирает минимально достаточный по весу файл из `srcset`!",
          "codeExample": {
            "language": "html",
            "code": "<img\n  src=\"/images/catalog/item-800.jpg\"\n  srcset=\"\n    /images/catalog/item-400.jpg   400w,\n    /images/catalog/item-800.jpg   800w,\n    /images/catalog/item-1200.jpg 1200w\n  \"\n  sizes=\"(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 400px\"\n  alt=\"Карточка курса Frontend-разработчик\"\n  width=\"800\"\n  height=\"450\"\n  loading=\"lazy\"\n/>",
            "title": "Использование srcset с дескрипторами ширины w и атрибутом sizes",
            "explanation": "На мобилке 390px браузер выберет файл 400w (или 800w на Retina 2x), сэкономив до 80% мобильного интернет-трафика пользователя."
          }
        },
        {
          "title": "Тег <picture>: Прогрессивные форматы (AVIF/WebP) и Арт-дирекшн",
          "content": "Тег `<picture>` — это контейнер-обёртка для нескольких тегов `<source>` и одного обязательного тега `<img>` в конце.\n\nДва главных сценария использования `<picture>`:\n\n1. Прогрессивная отдача форматов (Format Switching):\nБраузер читает список `<source>` сверху вниз и выбирает ПЕРВЫЙ формат, который он поддерживает:\n- Если браузер поддерживает `AVIF` — качает AVIF (максимальная экономия трафика!).\n- Если нет — проверяет следующий `<source type=\"image/webp\">`.\n- Если браузер очень старый — игнорирует `<source>` и загружает классический `<img>` в формате JPEG/PNG.\n\n2. Арт-дирекшн (Art Direction — смена кадрирования под экран):\nНа десктопе баннер часто широкий и горизонтальный (16:9), а на смартфонах детали теряются, и нужен квадратный или вертикальный кроп (1:1 или 4:5):\n`<source media=\"(max-width: 600px)\" srcset=\"hero-mobile-square.avif\">`.",
          "codeExample": {
            "language": "html",
            "code": "<picture class=\"hero-banner\">\n  <!-- 1. Мобильная версия (Art Direction: квадратный кроп для экранов <= 640px) -->\n  <source\n    media=\"(max-width: 640px)\"\n    type=\"image/avif\"\n    srcset=\"/images/hero-square.avif\"\n  />\n  <source\n    media=\"(max-width: 640px)\"\n    type=\"image/webp\"\n    srcset=\"/images/hero-square.webp\"\n  />\n\n  <!-- 2. Десктопные форматы (горизонтальный 16:9) -->\n  <source type=\"image/avif\" srcset=\"/images/hero-wide.avif\" />\n  <source type=\"image/webp\" srcset=\"/images/hero-wide.webp\" />\n\n  <!-- 3. Обязательный fallback img с размерами -->\n  <img\n    src=\"/images/hero-wide.jpg\"\n    alt=\"Главный баннер Академии стажёров\"\n    width=\"1200\"\n    height=\"600\"\n    fetchpriority=\"high\"\n    decoding=\"async\"\n  />\n</picture>",
            "title": "Идеальная структура picture: Art Direction + AVIF/WebP Fallbacks",
            "explanation": "Браузер на смартфоне скачает квадратный hero-square.avif, десктопный Chrome скачает hero-wide.avif, а старый браузер отобразит hero-wide.jpg."
          }
        },
        {
          "title": "Мультимедиа: <video>, <audio> и мобильные ограничения",
          "content": "Для воспроизведения видео и звука без сторонних плагинов используются нативные теги HTML5:\n\n1. Тег `<video>` и мобильные ограничения iOS/Android:\n- `controls` — отображает стандартную панель управления (play, pause, volume, fullscreen).\n- `autoplay` — автозапуск видео. ВНИМАНИЕ: на ВСЕХ смартфонах и в современных браузерах автоплей СТРОГО ЗАБЛОКИРОВАН, если не указан атрибут `muted` (без звука)!\n- `playsinline` — критически важный атрибут для iOS Safari! Без него видео на iPhone при старте принудительно разворачивается на весь экран, ломая дизайн сайта.\n- `loop` — зацикливание воспроизведения.\n- `poster=\"thumb.jpg\"` — заставка-превью до старта воспроизведения.\n\n2. Тег `<audio>`: воспроизведение аудиофайлов (MP3, AAC, WAV, OGG) с поддержкой нескольких `<source>`.\n\n3. Вложенные субтитры через тег `<track>`:\n`<track kind=\"subtitles\" src=\"/subs-ru.vtt\" srclang=\"ru\" label=\"Русский\" default>` — стандарт доступности для людей с нарушением слуха.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Фоновое промо-видео без звука для первого экрана -->\n<video\n  autoplay\n  muted\n  loop\n  playsinline\n  poster=\"/video/preview-poster.jpg\"\n  width=\"1280\"\n  height=\"720\"\n  class=\"hero-bg-video\"\n>\n  <source src=\"/video/promo.webm\" type=\"video/webm\" />\n  <source src=\"/video/promo.mp4\" type=\"video/mp4\" />\n  <track kind=\"subtitles\" src=\"/video/subs-ru.vtt\" srclang=\"ru\" label=\"Русский\" />\n  <p>Ваш браузер не поддерживает HTML5 видео.</p>\n</video>",
            "title": "Разметка видео с автозапуском, постером и субтитрами",
            "explanation": "Комбинация autoplay + muted + playsinline гарантирует запуск фонового видео на iPhone и смартфонах Android без всплытия на полный экран."
          }
        }
      ],
      "seniorTips": [
        "Всегда оборачивайте форматы AVIF и WebP в тег `<picture>` с фоллбэком на классический JPEG/PNG для старых браузеров.",
        "На смартфонах автоплей видео `autoplay` заблокирован браузерами, если не указан атрибут `muted` и `playsinline`.",
        "Всегда указывайте `width` и `height` на всех тегах `<img>` — в современном HTML они сообщают браузеру соотношение сторон и сводят CLS к нулю.",
        "Если изображение является декоративным фоном или иконкой-разделителем, ставьте пустой `alt=\"\"` (скринридер пропустит её без звука), но никогда не удаляйте атрибут `alt` целиком (иначе скринридер прочитает имя файла)."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Фоновое видео без muted и playsinline -->\n<video autoplay loop src=\"/promo.mp4\"></video>",
          "good": "<video autoplay muted loop playsinline poster=\"/poster.jpg\" src=\"/promo.mp4\"></video>",
          "reason": "Без muted браузер заблокирует автозапуск из-за политик безопасности звука, а без playsinline видео на iPhone раскроется на весь экран."
        },
        {
          "bad": "<!-- Отсутствие атрибута alt -->\n<img src=\"/team-photo.jpg\" />",
          "good": "<img src=\"/team-photo.jpg\" alt=\"Команда инженеров Frontend Academy на митапе\" width=\"800\" height=\"400\" />",
          "reason": "Без alt скринридер начнет читать вслух имя файла 'team-photo.jpg', а поисковые роботы не смогут проиндексировать изображение."
        },
        {
          "bad": "<!-- loading='lazy' на главном LCP-баннере первого экрана -->\n<picture><img src=\"/hero.jpg\" loading=\"lazy\" /></picture>",
          "good": "<picture><img src=\"/hero.jpg\" fetchpriority=\"high\" width=\"1200\" height=\"600\" /></picture>",
          "reason": "loading='lazy' на первом экране откладывает загрузку главного LCP-изображения, обрушивая метрики Core Web Vitals на 1.5–2 секунды."
        }
      ],
      "keyTakeaways": [
        "AVIF и WebP — стандарты растрового сжатия, а SVG — бесконечно масштабируемый вектор для иконок и логотипов.",
        "`srcset` и `sizes` позволяют браузеру выбирать оптимальный по размеру файл под ширину экрана и плотность Retina (DPR 2x).",
        "Тег `<picture>` обеспечивает прогрессивную отдачу форматов и арт-дирекшн кадрирование.",
        "Автозапуск `<video>` на смартфонах работает только при наличии атрибутов `autoplay muted playsinline`.",
        "Явные `width` и `height` на тегах `<img>` задают Aspect Ratio и устраняют сдвиг макета (CLS = 0)."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"media-playground\">\n  <h3>Демонстрация тега &lt;picture&gt;</h3>\n  <picture>\n    <source type=\"image/svg+xml\" srcset=\"/images/lessons/html-multimedia-responsive.svg\" />\n    <img\n      src=\"/images/lessons/html-multimedia-responsive.svg\"\n      alt=\"Схема адаптивной графики\"\n      width=\"600\"\n      height=\"330\"\n      style=\"width:100%; height:auto; border-radius:6px; border:1px solid #30363d;\"\n    />\n  </picture>\n</div>",
      "initialCss": ".media-playground {\n  padding: 16px;\n  background: #0a0e13;\n  color: #e6edf3;\n  font-family: monospace;\n}",
      "initialJs": "console.log('Песочница медиа готова');",
      "instructions": "Практика с мультимедиа:\n1. Изучите структуру тега <picture>\n2. Добавьте разметку видео с атрибутами autoplay, muted, loop и playsinline\n3. Добавьте тег <audio controls> с несколькими источниками <source>"
    },
    "task": {
      "title": "Верстка адаптивной медиа-карточки товара с арт-дирекшн баннером и видео",
      "scenario": "Вы разрабатываете промо-карточку флагманского товара: карточка должна содержать адаптивный баннер в теге <picture> с форматами AVIF/WebP и квадратным кадрированием для мобилок, промо-видео с постером и автоплеем без звука, а также декоративные иконки с правильными alt-атрибутами.",
      "criteria": [
        "Главный баннер оформлен через тег <picture> с источниками type='image/avif' и type='image/webp'",
        "Реализован арт-дирекшн для мобильных экранов media='(max-width: 640px)'",
        "Обязательный fallback <img> содержит информативный alt и явные width/height",
        "Промо-видео <video> содержит атрибуты autoplay, muted, loop, playsinline и poster",
        "Декоративные элементы содержат пустой alt='' и aria-hidden='true'"
      ],
      "starterCode": {
        "html": "<article class=\"product-promo-card\">\n  <!-- Разметьте адаптивный медиа-блок -->\n</article>"
      },
      "hints": [
        "В <picture> поместите <source media='(max-width: 640px)' ...> перед десктопными источниками",
        "Для видео используйте <video autoplay muted loop playsinline poster='/poster.jpg'>",
        "На <img> укажите fetchpriority='high' для главного баннера"
      ],
      "solution": {
        "html": "<article class=\"product-promo-card\">\n  <picture class=\"promo-banner\">\n    <source media=\"(max-width: 640px)\" type=\"image/avif\" srcset=\"/images/phone-sq.avif\" />\n    <source media=\"(max-width: 640px)\" type=\"image/webp\" srcset=\"/images/phone-sq.webp\" />\n    <source type=\"image/avif\" srcset=\"/images/phone-wide.avif\" />\n    <source type=\"image/webp\" srcset=\"/images/phone-wide.webp\" />\n    <img\n      src=\"/images/phone-wide.jpg\"\n      alt=\"Флагманский смартфон CyberPhone с титановым корпусом\"\n      width=\"1200\"\n      height=\"600\"\n      fetchpriority=\"high\"\n      decoding=\"async\"\n    />\n  </picture>\n\n  <div class=\"promo-content\">\n    <h2>CyberPhone Ultra 2026</h2>\n    <p>Непревзойденная производительность и OLED дисплей.</p>\n    <img src=\"/icons/sparkle.svg\" alt=\"\" aria-hidden=\"true\" class=\"deco-icon\" />\n  </div>\n\n  <div class=\"promo-video-wrap\">\n    <video\n      autoplay\n      muted\n      loop\n      playsinline\n      poster=\"/video/phone-poster.jpg\"\n      width=\"640\"\n      height=\"360\"\n    >\n      <source src=\"/video/phone-demo.webm\" type=\"video/webm\" />\n      <source src=\"/video/phone-demo.mp4\" type=\"video/mp4\" />\n    </video>\n  </div>\n</article>",
        "explanation": "Разметка полностью оптимизирована: <picture> поддерживает AVIF/WebP и мобильный арт-дирекшн, видео безопасно запускается на iOS благодаря muted + playsinline, декоративные иконки скрыты от скринридеров."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html7-q1",
          "question": "Почему на всех тегах <img> критически важно явно указывать атрибуты width и height?",
          "options": [
            "Чтобы картинка не скачивалась слишком долго",
            "Браузер вычисляет соотношение сторон (Aspect Ratio) и сразу резервирует место в макете до загрузки файла, сводя сдвиг верстки (CLS) к нулю",
            "Без них картинка не отобразится в браузере",
            "Для подключения стилей CSS"
          ],
          "correctIndex": 1,
          "explanation": "Явные width и height позволяют браузеру моментально зарезервировать прямоугольную область точных пропорций, предотвращая скачки макета (CLS)."
        },
        {
          "id": "html7-q2",
          "question": "Какая комбинация атрибутов ОБЯЗАТЕЛЬНА для автозапуска фонового <video> на смартфонах iPhone (iOS) и Android?",
          "options": [
            "autoplay controls",
            "autoplay muted loop playsinline",
            "autoplay volume='0'",
            "preload='auto' start='0'"
          ],
          "correctIndex": 1,
          "explanation": "Мобильные браузеры блокируют автоплей со звуком (требуется muted), а iOS Safari без атрибута playsinline развернет видео на весь экран."
        },
        {
          "id": "html7-q3",
          "question": "Как правильно разметить чисто декоративное изображение (фоновый узор, разделитель), чтобы не мешать незрячим пользователям со скринридерами?",
          "options": [
            "Удалить атрибут alt полностью",
            "Указать пустой атрибут alt='' (и опционально aria-hidden='true')",
            "Написать alt='декорация'",
            "Использовать тег <object>"
          ],
          "correctIndex": 1,
          "explanation": "Пустой alt='' сообщает скринридеру, что изображение декоративное, и его нужно пропустить. Без атрибута alt скринридер зачитает вслух техническое имя файла."
        },
        {
          "id": "html7-q4",
          "question": "В чём заключается концепция Арт-дирекшн (Art Direction) при использовании тега <picture>?",
          "options": [
            "Автоматическое наложение водяного знака",
            "Смена кадрирования, пропорций и композиции изображения под разные размеры экранов (например, широкий баннер 16:9 на десктопе и квадратный кроп 1:1 на мобилке)",
            "Показ рекламы поверх картинки",
            "Автоматическая цветокоррекция в CSS"
          ],
          "correctIndex": 1,
          "explanation": "Арт-дирекшн через <source media='...'> позволяет отдавать разные кадрированные версии одного изображения, сохраняя фокус на главном объекте на узких мобильных экранах."
        },
        {
          "id": "html7-q5",
          "question": "Какой формат растровой графики обеспечивает наилучшее сжатие (на 50% легче JPEG) и поддерживает HDR и прозрачность?",
          "options": [
            "GIF",
            "AVIF",
            "BMP",
            "TIFF"
          ],
          "correctIndex": 1,
          "explanation": "Формат AVIF на базе видеокодека AV1 обеспечивает максимальную степень сжатия при превосходном качестве, поддержку альфа-канала и 10/12-битного HDR цвета."
        }
      ]
    }
  },
  {
    "id": "html-8",
    "moduleId": "html",
    "level": 8,
    "title": "Списки и таблицы данных",
    "subtitle": "Теги ul, ol, dl, table, thead, tbody, th, colspan и rowspan",
    "description": "Структурирование данных: маркированные и нумерованные списки, списки определений, анатомия сложных таблиц с шапкой, подвалом и объединением ячеек.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "Lists",
      "Tables",
      "Data",
      "Accessibility"
    ],
    "theory": {
      "overview": "Списки и таблицы — базовые строительные блоки для систематизации любой информации: меню навигации, каталогов товаров, финансовых отчетов, расписаний и списков характеристик.\n\nИспользование таблиц для раскладки страниц (Table Layout) давно устарело, но для отображения настоящих табличных данных (Tabular Data) тег `<table>` незаменим и должен верстаться с соблюдением стандартов доступности.",
      "sections": [
        {
          "title": "Типы списков: ul, ol и dl",
          "content": "В HTML существует три типа списков:\n- **Неупорядоченный список `<ul>` (Unordered List)**: маркированный список маркерами-точками. Используется везде, где порядок пунктов не имеет значения (меню сайта, список преимуществ, теги). Дочерними элементами могут быть **только `<li>`**.\n- **Упорядоченный список `<ol>` (Ordered List)**: нумерованный список (1, 2, 3...). Используется для пошаговых инструкций, рецептов, рейтингов. Атрибуты: `start=\"5\"` (начать с 5), `reversed` (обратный отсчет), `type=\"A|a|I|i|1\"`.\n- **Список определений `<dl>` (Description List)**: список пар «термин — описание». Состоит из `<dt>` (термин) и `<dd>` (описание). Идеален для характеристик товара (Вес: 1.5 кг, Цвет: Черный) и FAQ.",
          "codeExample": {
            "language": "html",
            "title": "Примеры списков всех типов",
            "code": "<!-- Список определений (Характеристики товара) -->\n<dl class=\"specs-list\">\n  <dt>Процессор</dt>\n  <dd>Apple M3 Pro (12 ядер)</dd>\n  \n  <dt>Оперативная память</dt>\n  <dd>36 ГБ Unified Memory</dd>\n</dl>\n\n<!-- Пошаговый нумерованный список -->\n<ol class=\"steps-list\">\n  <li>Установите Node.js</li>\n  <li>Склонируйте репозиторий</li>\n  <li>Выполните npm install</li>\n</ol>",
            "explanation": "Список <dl> идеально связывает термины <dt> и их значения <dd>."
          }
        },
        {
          "title": "Анатомия таблицы данных: table, thead, tbody, th, td",
          "content": "Таблица строится из строгой иерархии элементов:\n- `<table>` — контейнер таблицы.\n- `<caption>` — заголовок/название таблицы (располагается первым тегом внутри table).\n- `<thead>` — шапка таблицы со строкой заголовков колонок.\n- `<tbody>` — тело таблицы с основными строками данных.\n- `<tfoot>` — подвал таблицы (итоговые суммы, средние значения).\n- `<tr>` (Table Row) — строка таблицы.\n- `<th>` (Table Header) — заголовочная ячейка (жирный текст, центрирование). Обязательно указывать атрибут `scope=\"col\"` (для колонок) или `scope=\"row\"` (для строк) для экранных дикторов.\n- `<td>` (Table Data) — обычная ячейка с данными.",
          "codeExample": {
            "language": "html",
            "title": "Доступная семантическая таблица",
            "code": "<table class=\"data-table\">\n  <caption>Отчет по продажам за 1 квартал</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Месяц</th>\n      <th scope=\"col\">Заказы</th>\n      <th scope=\"col\">Выручка</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Январь</th>\n      <td>120</td>\n      <td>$45,000</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Февраль</th>\n      <td>150</td>\n      <td>$58,000</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <th scope=\"row\">Итого</th>\n      <td>270</td>\n      <td>$103,000</td>\n    </tr>\n  </tfoot>\n</table>",
            "explanation": "Полная семантика: thead/tbody/tfoot, th с атрибутами scope и подвал tfoot."
          }
        },
        {
          "title": "Объединение ячеек: colspan и rowspan",
          "content": "Для сложных многоуровневых отчетов используются атрибуты объединения:\n- `colspan=\"N\"` — объединяет N ячеек **по горизонтали** (вдоль колонок).\n- `rowspan=\"N\"` — объединяет N ячеек **по вертикали** (вдоль строк).\n- При объединении ячеек важно убрать лишние теги `<td>` из соседних строк, иначе таблица «поедет».",
          "codeExample": {
            "language": "html",
            "title": "Пример объединения colspan и rowspan",
            "code": "<tr>\n  <!-- Объединение на 2 колонки -->\n  <th colspan=\"2\">Пользователь</th>\n  <th>Баланс</th>\n</tr>\n<tr>\n  <!-- Объединение на 2 строки -->\n  <td rowspan=\"2\">Фото</td>\n  <td>Иван Иванов</td>\n  <td>$500</td>\n</tr>",
            "explanation": "colspan расширяет ячейку по ширине, rowspan — по высоте."
          }
        }
      ],
      "seniorTips": [
        "Прямыми потомками `<ul>` и `<ol>` могут быть **исключительно теги `<li>`**. Нельзя вставлять `<div>` или `<p>` напрямую в `<ul>`.",
        "Всегда используйте `<thead>`, `<tbody>` и `<th scope=\"col\">` для таблиц данных."
      ],
      "commonMistakes": [
        {
          "bad": "<ul>\n  <div>Пункт меню</div> <!-- Ошибка! div внутри ul -->\n</ul>",
          "good": "<ul>\n  <li><div class=\"menu-item\">Пункт меню</div></li>\n</ul>",
          "reason": "Спецификация HTML запрещает любые прямые дочерние теги внутри ul/ol кроме li."
        }
      ],
      "keyTakeaways": [
        "ul — для списков без порядка, ol — для нумерованных последовательностей, dl — для пар ключ/значение.",
        "Таблицы должны содержать caption, thead, tbody и th со scope.",
        "colspan объединяет по колонкам, rowspan — по строкам."
      ]
    },
    "sandbox": {
      "initialHtml": "<table class=\"demo-table\">\n  <thead>\n    <tr>\n      <th>Уровень</th>\n      <th>Тема</th>\n      <th>Статус</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>HTML Basics</td>\n      <td><span class=\"badge-done\">Пройден</span></td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>CSS & JS</td>\n      <td><span class=\"badge-done\">Пройден</span></td>\n    </tr>\n  </tbody>\n</table>",
      "initialCss": ".demo-table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; }\n.demo-table th, .demo-table td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #e2e8f0; }\n.demo-table th { background: #f8fafc; font-weight: 600; color: #475569; }\n.badge-done { background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }",
      "initialJs": "console.log('Lists and tables sandbox loaded');",
      "instructions": "Попробуйте добавить третью строку в таблицу <tbody>."
    },
    "task": {
      "title": "Создание таблицы тарифов",
      "scenario": "Сверстайте таблицу тарифов с колонками: Название плана, Цена, Количество пользователей и Кнопка выбора.",
      "criteria": [
        "Использованы теги <table>, <thead>, <tbody>, <tr>, <th>, <td>",
        "Шапка содержит <th> с атрибутом scope=\"col\"",
        "В теле таблицы минимум 2 строки с тарифами"
      ],
      "starterCode": {
        "html": "<!-- Создайте таблицу тарифов -->\n",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте <table><thead><tr><th scope=\"col\">..."
      ],
      "solution": {
        "html": "<table class=\"pricing-table\">\n  <caption>Тарифные планы сервиса</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Тариф</th>\n      <th scope=\"col\">Цена</th>\n      <th scope=\"col\">Пользователи</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Старт</th>\n      <td>0 ₽/мес</td>\n      <td>1 пользователь</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Про</th>\n      <td>990 ₽/мес</td>\n      <td>До 10 пользователей</td>\n    </tr>\n  </tbody>\n</table>",
        "css": "/* Решение */\n",
        "explanation": "Превосходная доступная таблица с caption и правильными scope."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h8-q1",
          "question": "Какие элементы могут быть прямыми потомками тегов <ul> и <ol>?",
          "options": [
            "Любые теги",
            "Только <li>",
            "<div> и <span>",
            "<p> и <a>"
          ],
          "correctIndex": 1,
          "explanation": "По спецификации HTML прямыми дочерними элементами списков могут быть только <li>."
        },
        {
          "id": "h8-q2",
          "question": "Какой атрибут объединяет ячейки таблицы по горизонтали?",
          "options": [
            "rowspan",
            "colspan",
            "merge",
            "span"
          ],
          "correctIndex": 1,
          "explanation": "colspan (Column Span) объединяет ячейки вдоль колонок."
        }
      ]
    }
  },
  {
    "id": "html-9",
    "moduleId": "html",
    "level": 9,
    "title": "HTML-формы и элементы ввода",
    "subtitle": "Теги form, input, label, textarea, select, кнопки и валидация",
    "description": "Создание интерактивных форм сбора данных: правильная связка label + input для доступности, все типы полей, чекбоксы, радиокнопки, селекты, кнопки submit и нативная валидация HTML5.",
    "estimatedMinutes": 40,
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "Forms",
      "Inputs",
      "Validation",
      "UX"
    ],
    "theory": {
      "overview": "Формы (`<form>`) — главный способ взаимодействия пользователя с бэкендом: авторизация, регистрация, оформление заказа в интернет-магазине, фильтрация товаров, отправка сообщений и загрузка файлов.\n\nКачественная форма должна быть не просто красивой, но и доступной с клавиатуры, понятной скринридерам и обладать встроенной валидацией, предотвращающей отправку некорректных данных на сервер.",
      "sections": [
        {
          "title": "Анатомия формы: action, method и обязательный тег <label>",
          "content": "Ключевые элементы управления формой:\n- `<form action=\"/api/login\" method=\"POST\">`:\n  • `action` — URL адрес эндпоинта на сервере, куда отправятся данные.\n  • `method` — HTTP-метод (`GET` — данные передаются в URL параметрах, `POST` — данные передаются в теле запроса).\n  • `enctype=\"multipart/form-data\"` — обязателен, если форма содержит загрузку файлов (`<input type=\"file\">`).\n- **Тег `<label>`**: связывает текстовую подпись с полем ввода. **Правило доступности:** клик по тексту label обязан ставить фокус в связанное поле! Связка делается через `for=\"inputId\"` и `id=\"inputId\"`.",
          "codeExample": {
            "language": "html",
            "title": "Правильная связка label и input",
            "code": "<form action=\"/api/register\" method=\"POST\" class=\"auth-form\">\n  <div class=\"form-group\">\n    <!-- Атрибут for совпадает с id у input -->\n    <label for=\"user-email\">Электронная почта:</label>\n    <input \n      id=\"user-email\"\n      type=\"email\"\n      name=\"email\"\n      required\n      placeholder=\"name@example.com\"\n      autocomplete=\"email\"\n    />\n  </div>\n  <button type=\"submit\">Зарегистрироваться</button>\n</form>",
            "explanation": "Связка label for + input id увеличивает зону клика на смартфонах и озвучивает поле скринридерам."
          }
        },
        {
          "title": "Типы полей <input> и элементы управления",
          "content": "Основные типы инпутов (`type=\"...\"`):\n- `text` — обычная однострочная строка.\n- `password` — маскированный ввод пароля (точки/звездочки).\n- `email`, `tel`, `url` — специализированные типы (на смартфонах вызывают удобную клавиатуру с `@` или цифрами).\n- `number` — числовой ввод с атрибутами `min`, `max`, `step`.\n- `checkbox` — независимый флажок (галочка).\n- `radio` — радиокнопка переключения (для выбора одного из группы у всех кнопок должен быть **одинаковый атрибут `name`**).\n- `file` — загрузка файлов с атрибутом `accept=\"image/*,.pdf\"`.\n- `date`, `time`, `color`, `range` — нативные виджеты календаря, выбора цвета и ползунка.\n- `<textarea rows=\"4\" cols=\"50\">` — многострочное текстовое поле.\n- `<select>` и `<option>` — выпадающий список выбора.",
          "codeExample": {
            "language": "html",
            "title": "Примеры радиокнопок, чекбоксов и select",
            "code": "<!-- Группа радиокнопок (выбор доставки) -->\n<fieldset>\n  <legend>Способ доставки:</legend>\n  <label>\n    <input type=\"radio\" name=\"delivery\" value=\"courier\" checked> Курьер\n  </label>\n  <label>\n    <input type=\"radio\" name=\"delivery\" value=\"pickup\"> Самовывоз\n  </label>\n</fieldset>\n\n<!-- Выпадающий список -->\n<label for=\"city-select\">Город:</label>\n<select id=\"city-select\" name=\"city\">\n  <option value=\"\">-- Выберите город --</option>\n  <option value=\"msk\">Москва</option>\n  <option value=\"spb\">Санкт-Петербург</option>\n</select>",
            "explanation": "Теги fieldset и legend логически группируют радиокнопки с единым именем name=\"delivery\"."
          }
        },
        {
          "title": "Нативная валидация HTML5: UX без единой строчки JS",
          "content": "Браузер умеет автоматически валидировать форму перед отправкой:\n- `required` — поле обязательно для заполнения.\n- `minlength=\"8\"` и `maxlength=\"32\"` — ограничения на длину строки.\n- `min=\"18\"` и `max=\"99\"` — числовые границы.\n- `pattern=\"[0-9]{4}-[0-9]{4}\"` — проверка по регулярному выражению (RegEx).\n- `placeholder` — пример заполнения (не должен заменять label!).\n- `novalidate` — атрибут у `<form>`, отключающий браузерную валидацию (нужен, если вы валидируете форму через React/JS).",
          "codeExample": {
            "language": "html",
            "title": "Поле с комплексной валидацией",
            "code": "<input \n  type=\"password\"\n  id=\"pwd\"\n  name=\"password\"\n  required\n  minlength=\"8\"\n  pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\"\n  title=\"Пароль должен содержать минимум 8 символов, цифру, заглавную и строчную буквы\"\n/>",
            "explanation": "Браузер сам покажет красивый тултип ошибки при несоответствии регулярному выражению."
          }
        }
      ],
      "seniorTips": [
        "Всегда указывайте `type=\"submit\"` или `type=\"button\"` у тегов `<button>`. По умолчанию кнопка внутри формы имеет тип `submit` и непреднамеренно перезагрузит страницу при клике!",
        "Никогда не используйте `placeholder` вместо `<label>` — как только пользователь начинает ввод, плейсхолдер исчезает, и контекст поля теряется."
      ],
      "commonMistakes": [
        {
          "bad": "<input type=\"text\" placeholder=\"Ваше имя\"> <!-- Без label -->",
          "good": "<label for=\"name-field\">Ваше имя</label>\n<input id=\"name-field\" type=\"text\" placeholder=\"Например, Иван\">",
          "reason": "Без label поле недоступно для пользователей с экранными дикторами и нарушает стандарты WCAG."
        },
        {
          "bad": "<form>\n  <button onclick=\"doSomething()\">Клик</button> <!-- Перезагрузит форму! -->\n</form>",
          "good": "<form>\n  <button type=\"button\" onclick=\"doSomething()\">Клик</button>\n</form>",
          "reason": "Кнопка без явного type=\"button\" по умолчанию работает как submit и отправляет форму."
        }
      ],
      "keyTakeaways": [
        "Связка label for + input id обязательна для каждого интерактивного поля.",
        "Радиокнопки объединяются в группу с помощью общего атрибута name.",
        "Нативная валидация required, pattern, min/max защищает от отправки пустых полей."
      ]
    },
    "sandbox": {
      "initialHtml": "<form class=\"demo-form\" onsubmit=\"event.preventDefault(); alert('Форма успешно прошла валидацию!');\">\n  <div class=\"form-row\">\n    <label for=\"demo-name\">Имя *</label>\n    <input id=\"demo-name\" type=\"text\" required placeholder=\"Иван Иванов\">\n  </div>\n  <div class=\"form-row\">\n    <label for=\"demo-email\">Email *</label>\n    <input id=\"demo-email\" type=\"email\" required placeholder=\"ivan@mail.ru\">\n  </div>\n  <div class=\"form-row\">\n    <label>\n      <input type=\"checkbox\" required> Согласен с условиями\n    </label>\n  </div>\n  <button type=\"submit\" class=\"btn-submit\">Отправить форму</button>\n</form>",
      "initialCss": ".demo-form { padding: 20px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; }\n.form-row { margin-bottom: 14px; display: flex; flex-direction: column; gap: 6px; }\n.form-row label { font-size: 13px; font-weight: 600; color: #334155; }\n.form-row input[type=\"text\"], .form-row input[type=\"email\"] { padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; }\n.form-row input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15); }\n.btn-submit { padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; }",
      "initialJs": "console.log('Forms sandbox ready');",
      "instructions": "Попробуйте нажать «Отправить форму» с пустыми полями и проверьте встроенную валидацию браузера."
    },
    "task": {
      "title": "Создание формы авторизации",
      "scenario": "Сверстайте форму входа с полями email, пароль, чекбоксом «Запомнить меня» и кнопкой отправки.",
      "criteria": [
        "Использован тег <form> с методом POST",
        "Поля email и password имеют связанные <label>",
        "Присутствует нативная валидация required",
        "Использована кнопка <button type=\"submit\">"
      ],
      "starterCode": {
        "html": "<!-- Создайте форму входа -->\n",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте <form method=\"POST\"><label for=\"email\">...<input id=\"email\" type=\"email\" required>..."
      ],
      "solution": {
        "html": "<form action=\"/login\" method=\"POST\" class=\"login-form\">\n  <h2>Вход в систему</h2>\n  <div class=\"field\">\n    <label for=\"login-email\">Электронная почта:</label>\n    <input id=\"login-email\" type=\"email\" name=\"email\" required placeholder=\"user@company.com\">\n  </div>\n  <div class=\"field\">\n    <label for=\"login-pwd\">Пароль:</label>\n    <input id=\"login-pwd\" type=\"password\" name=\"password\" required minlength=\"6\">\n  </div>\n  <div class=\"checkbox-field\">\n    <label>\n      <input type=\"checkbox\" name=\"remember\"> Запомнить меня\n    </label>\n  </div>\n  <button type=\"submit\">Войти</button>\n</form>",
        "css": "/* Решение */\n",
        "explanation": "Идеальная доступная форма авторизации со всеми необходимыми типами полей."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h9-q1",
          "question": "Как связать тег <label> с полем <input>?",
          "options": [
            "Через атрибут class",
            "Через атрибут for у label и атрибут id у input",
            "Через имя name",
            "Они связываются автоматически"
          ],
          "correctIndex": 1,
          "explanation": "Атрибут for у label должен точно совпадать со значением id целевого поля input."
        },
        {
          "id": "h9-q2",
          "question": "Какой тип кнопки по умолчанию внутри тега <form>?",
          "options": [
            "type=\"button\"",
            "type=\"submit\"",
            "type=\"reset\"",
            "type=\"menu\""
          ],
          "correctIndex": 1,
          "explanation": "По умолчанию любая кнопка внутри формы имеет type=\"submit\" и пытается отправить форму."
        }
      ]
    }
  },
  {
    "id": "html-10",
    "moduleId": "html",
    "level": 10,
    "title": "Семантическая верстка (HTML5)",
    "subtitle": "header, nav, main, article, section, aside, footer и доступность a11y",
    "description": "Переход от «div-верстки» к профессиональной семантической структуре: иерархия блоков, ориентиры страницы (Landmarks), теги figure, details/summary и стандарты доступности WCAG.",
    "estimatedMinutes": 40,
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "Semantic",
      "HTML5",
      "Accessibility",
      "A11y",
      "SEO"
    ],
    "theory": {
      "overview": "В эпоху HTML4 сайты верстались сплошным нагромождением тегов `<div class=\"header\">`, `<div class=\"content\">`, `<div class=\"footer\">` — так называемый **Div Soup** (суп из дивов). Для браузеров и поисковых роботов такая страница была бессмысленной кашей из прямоугольников.\n\nСтандарт HTML5 ввел семантические элементы, каждый из которых сообщает точный смысл своего содержимого. Семантика — это фундамент **доступности (A11y)**, поискового продвижения (SEO) и чистоты архитектуры веб-приложений.",
      "sections": [
        {
          "title": "Карта семантических блоков страницы (Landmarks)",
          "content": "Главные ориентиры страницы:\n- `<header>` — вводная часть страницы или секции (логотип, поиск, навигация, имя автора статьи).\n- `<nav>` — блок основных навигационных ссылок (главное меню, пагинация, хлебные крошки).\n- `<main>` — **главное уникальное содержимое страницы**. **Правило:** на странице может быть строго **один тег `<main>`**, не вложенный в header или footer!\n- `<article>` — самостоятельный, независимый блок контента, который имеет смысл сам по себе (пост в блоге, новость, карточка товара, комментарий пользователя).\n- `<section>` — смысловой раздел документа или статьи (например: секция «О компании», секция «Тарифы», секция «Отзывы»). Обычно содержит заголовок h2–h6.\n- `<aside>` — дополнительный или косвенный контент (боковая панель, похожие статьи, баннер, плашка с подсказкой).\n- `<footer>` — подвал страницы или статьи (копирайт, ссылки на политику конфиденциальности, контакты).",
          "codeExample": {
            "language": "html",
            "title": "Каркас семантической страницы",
            "code": "<header class=\"header\">\n  <a href=\"/\" class=\"logo\">MyLogo</a>\n  <nav class=\"nav\">\n    <ul><li><a href=\"/catalog\">Каталог</a></li></ul>\n  </nav>\n</header>\n\n<main class=\"main-content\">\n  <article class=\"product-card\">\n    <h2>Курс Frontend Pro</h2>\n    <p>Полная программа стажировки.</p>\n  </article>\n  \n  <aside class=\"sidebar\">\n    <h3>Популярные темы</h3>\n  </aside>\n</main>\n\n<footer class=\"footer\">\n  <p>© 2026 Frontend Academy. Все права защищены.</p>\n</footer>",
            "explanation": "Четкая разбивка страницы на ориентиры header, nav, main, article, aside и footer."
          }
        },
        {
          "title": "Продвинутые семантические теги: figure, details, dialog",
          "content": "Специализированные интерактивные и контентные теги:\n- `<figure>` и `<figcaption>` — иллюстрация, диаграмма или скриншот с официальной подписью.\n- `<details>` и `<summary>` — **нативный аккордеон (спойлер)** без единой строчки JS! Клик по `<summary>` плавно раскрывает содержимое `<details>`.\n- `<dialog>` — нативное модальное окно с методами JS `.showModal()` и `.close()`.\n- `<time datetime=\"2026-08-18\">18 августа 2026</time>` — машиночитаемая дата для поисковиков.",
          "codeExample": {
            "language": "html",
            "title": "Нативный аккордеон (details/summary)",
            "code": "<details class=\"faq-item\">\n  <summary>Нужно ли знать JavaScript перед началом стажировки?</summary>\n  <p>Желательно знать основы, но мы начинаем с фундаментального HTML и CSS.</p>\n</details>",
            "explanation": "Элемент details раскрывается и сворачивается нативно силами браузера."
          }
        }
      ],
      "seniorTips": [
        "Используйте `<div>` только тогда, когда элемент нужен исключительно как обертка для стилей (Flex-контейнер, CSS Grid обертка, декоративная подложка). Если у элемента есть смысловая роль — используйте семантический тег.",
        "Никогда не вкладывайте тег `<main>` внутрь `<header>`, `<footer>` или `<nav>`."
      ],
      "commonMistakes": [
        {
          "bad": "<div class=\"header\">\n  <div class=\"menu\">...</div>\n</div>",
          "good": "<header class=\"site-header\">\n  <nav class=\"site-nav\">...</nav>\n</header>",
          "reason": "Дивы лишают браузер семантической карты и делают сайт невидимым для скринридеров."
        }
      ],
      "keyTakeaways": [
        "Семантика HTML5 делает сайт доступным (WCAG) и поднимает его в рейтинге поисковых систем (SEO).",
        "Ориентиры header, nav, main, article, section, aside, footer задают каркас веб-приложения.",
        "Теги details/summary и dialog предоставляют нативную интерактивность."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"semantic-demo\">\n  <header style=\"background: #e0e7ff; padding: 12px; border-radius: 8px; margin-bottom: 10px;\">\n    <strong>&lt;header&gt; Шапка страницы</strong>\n  </header>\n  <main style=\"background: #dbeafe; padding: 12px; border-radius: 8px; margin-bottom: 10px;\">\n    <strong>&lt;main&gt; Основной контент</strong>\n    <details style=\"margin-top: 10px; background: white; padding: 8px; border-radius: 6px;\">\n      <summary>Нажмите, чтобы раскрыть &lt;details&gt;</summary>\n      <p style=\"margin-top: 8px;\">Это нативный аккордеон без JavaScript!</p>\n    </details>\n  </main>\n  <footer style=\"background: #f1f5f9; padding: 12px; border-radius: 8px;\">\n    <strong>&lt;footer&gt; Подвал</strong>\n  </footer>\n</div>",
      "initialCss": ".semantic-demo { font-family: sans-serif; }\ndetails summary { cursor: pointer; font-weight: bold; color: #4f46e5; }",
      "initialJs": "console.log('Semantic level loaded');",
      "instructions": "Кликните по аккордеону <summary> и убедитесь в нативной интерактивности."
    },
    "task": {
      "title": "Верстка семантического макета страницы",
      "scenario": "Соберите полноценную структуру страницы блога с использованием header, nav, main, article, aside и footer.",
      "criteria": [
        "Использованы <header>, <nav>, <main>, <footer>",
        "Внутри <main> расположен <article> и <aside>",
        "Присутствует ровно один тег <main>"
      ],
      "starterCode": {
        "html": "<!-- Соберите семантический скелет -->\n",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте <header><nav>...</nav></header><main><article>...</article><aside>...</aside></main><footer>...</footer>"
      ],
      "solution": {
        "html": "<header>\n  <a href=\"/\">Портал разработчиков</a>\n  <nav>\n    <ul><li><a href=\"/articles\">Статьи</a></li></ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>Все о семантике HTML5</h1>\n    <p>Семантический код повышает доступность.</p>\n  </article>\n  <aside>\n    <h3>Об авторе</h3>\n    <p>Senior Frontend Engineer</p>\n  </aside>\n</main>\n<footer>\n  <p>© 2026 TechBlog</p>\n</footer>",
        "css": "/* Решение */\n",
        "explanation": "Безупречная семантическая структура промышленного уровня."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h10-q1",
          "question": "Сколько тегов <main> допускается на одной HTML-странице?",
          "options": [
            "Сколько угодно",
            "Ровно один",
            "Минимум 2",
            "В каждой секции по одному"
          ],
          "correctIndex": 1,
          "explanation": "Тег <main> обозначает уникальный центральный контент документа и должен быть в единственном числе."
        },
        {
          "id": "h10-q2",
          "question": "Какой тег создает нативный раскрывающийся аккордеон без JavaScript?",
          "options": [
            "<accordion>",
            "<details> и <summary>",
            "<collapse>",
            "<dropdown>"
          ],
          "correctIndex": 1,
          "explanation": "Теги <details> и <summary> реализуют нативный виджет раскрытия содержимого."
        }
      ]
    }
  },
  {
    "id": "html-11",
    "moduleId": "html",
    "level": 11,
    "title": "Микроразметка, SEO и метаданные",
    "subtitle": "Meta description, Open Graph, Twitter Cards, Schema.org JSON-LD и фавиконки",
    "description": "Профессиональная поисковая оптимизация и сниппеты в соцсетях: настройка Open Graph для Telegram/VK/WhatsApp, структурированные данные Schema.org JSON-LD и адаптивные favicon.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "SEO",
      "OpenGraph",
      "Schema",
      "JSON-LD",
      "Metadata"
    ],
    "theory": {
      "overview": "Создать красивый интерфейс — лишь половина задачи. Если поисковые роботы Яндекса и Google не могут правильно проиндексировать сайт, а при отправке ссылки в Telegram или VK отображается серая пустая плашка без картинки и описания — сайт теряет львиную долю аудитории.\n\nУправление метаданными в `<head>` и внедрение микроразметки Schema.org превращают сайт в привлекательный сниппет в поисковой выдаче со звездами рейтинга, ценами и автором.",
      "sections": [
        {
          "title": "Базовые SEO мета-теги в <head>",
          "content": "Обязательный джентльменский набор каждого сайта:\n- `<title>` — заголовок страницы до 60–70 символов. Самый важный SEO-фактор.\n- `<meta name=\"description\" content=\"...\">` — краткое резюме страницы (140–160 символов). Формирует сниппет описания в поисковой выдаче.\n- `<meta name=\"robots\" content=\"index, follow\">` — разрешает роботам индексировать страницу и переходить по ссылкам.\n- `<link rel=\"canonical\" href=\"https://site.com/page\">` — указывает канонический (основной) адрес страницы, исключая дубли контента.",
          "codeExample": {
            "language": "html",
            "title": "Базовые мета-теги SEO",
            "code": "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Курсы фронтенд разработки с нуля | Frontend Academy</title>\n  <meta name=\"description\" content=\"Практическая программа стажировки по HTML, CSS и JavaScript с ментором и реальными проектами.\">\n  <link rel=\"canonical\" href=\"https://academy.frontend.ru/internship\">\n</head>",
            "explanation": "Полный комплект метаданных для правильной поисковой индексации."
          }
        },
        {
          "title": "Протокол Open Graph (OG) для мессенджеров и соцсетей",
          "content": "Когда вы отправляете ссылку в Telegram, WhatsApp, Discord или ВКонтакте, мессенджер парсит специальные `og:*` теги:\n- `og:title` — заголовок карточки в превью.\n- `og:description` — краткое описание превью.\n- `og:image` — абсолютный URL баннера/картинки (рекомендуемый размер 1200x630px).\n- `og:url` — постоянная ссылка на страницу.\n- `og:type` — тип контента (`website`, `article`, `product`).\n- Для Twitter/X используются зеркальные теги: `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:image`.",
          "codeExample": {
            "language": "html",
            "title": "Настройка Open Graph карточки",
            "code": "<!-- Open Graph для Telegram, VK, WhatsApp -->\n<meta property=\"og:type\" content=\"article\">\n<meta property=\"og:title\" content=\"Гайд по семантическому HTML5\">\n<meta property=\"og:description\" content=\"Узнайте, как правильно верстать доступные интерфейсы по стандартам WCAG.\">\n<meta property=\"og:image\" content=\"https://site.com/assets/og-cover.png\">\n<meta property=\"og:url\" content=\"https://site.com/articles/html-semantic\">\n\n<!-- Twitter Cards -->\n<meta name=\"twitter:card\" content=\"summary_large_image\">",
            "explanation": "При отправке ссылки сформируется привлекательная кликабельная карточка с большим баннером."
          }
        },
        {
          "title": "Микроразметка Schema.org в формате JSON-LD",
          "content": "Schema.org — международный словарь семантической разметки сущностей (товары, статьи, курсы, персоны, рецепты).\n- **Формат JSON-LD (рекомендация Google)**: разметка вставляется единым блоком `<script type=\"application/ld+json\">` в `<head>` или `<body>`.\n- Позволяет поисковикам формировать расширенные сниппеты (Rich Snippets): звездочки рейтинга, цену товара, наличие на складе, дату публикации и аватар автора.",
          "codeExample": {
            "language": "html",
            "title": "Пример JSON-LD микроразметки статьи",
            "code": "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"TechArticle\",\n  \"headline\": \"Знакомство с HTML Fundamentals\",\n  \"author\": {\n    \"@type\": \"Person\",\n    \"name\": \"Алексей Смирнов\"\n  },\n  \"publisher\": {\n    \"@type\": \"Organization\",\n    \"name\": \"Frontend Intern Academy\"\n  },\n  \"datePublished\": \"2026-08-18\"\n}\n</script>",
            "explanation": "Структурированные данные сообщают Google и Яндексу точный контекст статьи."
          }
        }
      ],
      "seniorTips": [
        "Всегда указывайте **абсолютный адрес** (с `https://`) в `og:image`. Относительный путь вроде `/image.png` мессенджеры не смогут загрузить!",
        "Используйте валидаторы разметки: OpenGraph Previewers и Google Rich Results Test для проверки сниппетов перед релизом."
      ],
      "commonMistakes": [
        {
          "bad": "<meta property=\"og:image\" content=\"banner.jpg\"> <!-- Относительный путь -->",
          "good": "<meta property=\"og:image\" content=\"https://mycompany.com/images/banner.jpg\">",
          "reason": "Telegram и соцсети требуют исключительно абсолютный URL для загрузки картинки превью."
        }
      ],
      "keyTakeaways": [
        "meta description формирует сниппет в поисковиках и привлекает клики пользователей.",
        "Теги Open Graph обеспечивают сочные превью при шеринге ссылки в Telegram и соцсетях.",
        "JSON-LD Schema.org дает поисковикам структурированную информацию о товарах и статьях."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"seo-preview-card\">\n  <div class=\"seo-mock-google\">\n    <div class=\"google-url\">https://academy.frontend.ru › internship</div>\n    <div class=\"google-title\">Обучение Frontend разработке | Стажировка с ментором</div>\n    <div class=\"google-desc\">Практическая программа обучения с интерактивной песочницей, тестами и сертификацией для начинающих разработчиков.</div>\n  </div>\n</div>",
      "initialCss": ".seo-preview-card { padding: 20px; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; }\n.google-url { font-size: 12px; color: #202124; margin-bottom: 4px; }\n.google-title { font-size: 18px; color: #1a0dab; font-weight: 500; margin-bottom: 4px; cursor: pointer; }\n.google-title:hover { text-decoration: underline; }\n.google-desc { font-size: 14px; color: #4d5156; line-height: 1.5; }",
      "initialJs": "console.log('SEO level loaded');",
      "instructions": "Посмотрите, как правильный title и meta description формируют сниппет в Google."
    },
    "task": {
      "title": "Настройка Open Graph метатегов",
      "scenario": "Опишите в теге <head> карточку Open Graph для статьи блога с заголовком, описанием и абсолютным URL картинки.",
      "criteria": [
        "Указан og:title",
        "Указан og:description",
        "Указан абсолютный og:image с https://",
        "Указан og:type"
      ],
      "starterCode": {
        "html": "<!-- Напишите Open Graph мета-теги -->\n",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте <meta property=\"og:title\" content=\"...\">..."
      ],
      "solution": {
        "html": "<head>\n  <title>Гайд по чистому коду</title>\n  <meta name=\"description\" content=\"Советы по написанию чистого и поддерживаемого кода.\">\n  <!-- Open Graph -->\n  <meta property=\"og:type\" content=\"article\">\n  <meta property=\"og:title\" content=\"Гайд по чистому коду\">\n  <meta property=\"og:description\" content=\"Советы по написанию чистого и поддерживаемого кода.\">\n  <meta property=\"og:image\" content=\"https://site.ru/images/clean-code-cover.jpg\">\n  <meta property=\"og:url\" content=\"https://site.ru/blog/clean-code\">\n</head>",
        "css": "/* Решение */\n",
        "explanation": "Идеальная карточка метаданных для поисковых систем и всех современных мессенджеров."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h11-q1",
          "question": "Какой формат микроразметки официально рекомендует Google?",
          "options": [
            "Microdata",
            "JSON-LD (<script type=\"application/ld+json\">)",
            "RDFa",
            "XML Schema"
          ],
          "correctIndex": 1,
          "explanation": "Google официально рекомендует формат JSON-LD для структурированных данных Schema.org."
        },
        {
          "id": "h11-q2",
          "question": "Каким должен быть URL в атрибуте og:image?",
          "options": [
            "Относительным (/img.jpg)",
            "Абсолютным с протоколом (https://domain.com/img.jpg)",
            "Без разницы",
            "В формате Base64"
          ],
          "correctIndex": 1,
          "explanation": "Соцсети и мессенджеры парсят картинку удаленно, поэтому og:image обязан быть абсолютным URL."
        }
      ]
    }
  }
];
