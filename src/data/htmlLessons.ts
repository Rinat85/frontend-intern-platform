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
        },
        {
          "title": "Рекомендуемые видеоматериалы: Дорожная карта и основы HTML",
          "content": "Для комплексного понимания веб-разработки, роли HTML в стеке и практического закрепления верстки рекомендуем изучить видеоматериалы:\n\n- **[Frontend Roadmap 2025 (YouTube)](https://youtu.be/DhleEgRmWF8?si=s0WXuYtmX1orv5AO)** — актуальная дорожная карта фронтенд-разработчика на 2025 год: стек технологий, базовые фундаментальные навыки (HTML, CSS, JS), современные инструменты и траектория роста от стажёра до Senior.\n- **[Начни учить HTML с этого курса (YouTube)](https://youtu.be/DOEtVdkKwcU?si=omoGe7g8mi7Q35C3)** — фундаментальный практический видеокурс по HTML от Владилена Минина: структура документа, теги, семантика, ссылки, изображения и создание разметки с нуля.\n- **[Роадмап на WEB-Разработчика — Все Изменилось (YouTube)](https://youtu.be/8LOFZ0pQJ3E?si=ikrCnUtJhk4noM10)** — актуальный разбор пути в веб-разработку: новые стандарты индустрии, ключевые навыки, современные инструменты разработки и стратегия входа в профессию.\n- **[Как стать Front-End разработчиком: Путь от новичка до Middle (YouTube)](https://youtu.be/VRhuKMQz700?si=K4jLJCfDMC3yFAIi)** — пошаговый практический план развития во фронтенде: фундаментальные основы веба, стек технологий, портфолио проектов, частые ошибки начинающих и переход на уровень Middle."
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
        },
        {
          "title": "Рекомендуемые видеоматериалы: Полный курс HTML с нуля",
          "content": "Для наглядного изучения семантики, тегов, форм и создания полноценных веб-страниц рекомендуем видеоурок:\n\n- **[Полный Курс HTML / Изучение в одном видео для начинающих с нуля (YouTube)](https://youtu.be/repA7DrmZPk?si=t6mc1oxFCTtoiMFf)** — подробный видеокурс от школы itProger: базовый синтаксис, структура страницы, работа с заголовками, списками, таблицами, мультимедиа и формами от новичка до практического применения."
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
    "subtitle": "ul, ol, dl, семантические таблицы (thead, tbody, tfoot), colspan/rowspan, scope и адаптивные таблицы",
    "description": "Освойте структурирование сложных данных в HTML5: маркированные, нумерованные и ассоциативные списки описаний (dl/dt/dd), анатомию доступных таблиц с thead, tbody, tfoot, caption, scope, объединение ячеек colspan/rowspan и адаптивные техники.",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "tables",
      "lists",
      "ul",
      "ol",
      "dl",
      "colspan",
      "rowspan",
      "accessibility",
      "responsive-tables"
    ],
    "theory": {
      "overview": "Отображение структурированных данных — списков, меню, характеристик товаров, финансовых отчетов и расписаний — базовая задача фронтенд-разработчика.\n\nВ этом уроке мы разберём 3 типа списков в HTML5 (`<ul>`, `<ol>`, `<dl>`), изучим семантическую анатомию таблиц (`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`), освоим слияние ячеек по вертикали и горизонтали через `rowspan` и `colspan`, а также научимся делать таблицы адаптивными для мобильных экранов с полной поддержкой доступности (a11y).",
      "sections": [
        {
          "title": "Виды списков в HTML5: <ul>, <ol>, <dl> (Списки описаний)",
          "content": "HTML5 предоставляет три типа списков под разные семантические задачи:\n\n1. `<ul>` (Unordered List — Маркированный список):\n- Порядок элементов не имеет значения. Используется для навигационных меню, списков преимуществ, тегов карточек.\n- Элементы списка размечаются строго тегами `<li>` (List Item).\n\n2. `<ol>` (Ordered List — Нумерованный список):\n- Порядок элементов строго фиксирован (инструкции, рецепты, топ-рейтинги, этапы оформления заказа).\n- Атрибуты `<ol>`: `start=\"5\"` (начать нумерацию с 5), `reversed` (обратный отсчёт от N до 1), `type=\"A|a|I|i|1\"`.\n\n3. `<dl>`, `<dt>`, `<dd>` (Description List — Список описаний):\n- Специализированный список пар «ключ-значение» / «термин-определение».\n- `<dt>` (Description Term) — термин или название свойства.\n- `<dd>` (Description Details) — значение, описание или характеристика.\n- Идеален для: характеристик товаров (Процессор: M3 Max, ОЗУ: 64 ГБ), метаданных статьи, глоссариев и словарей терминов.",
          "image": {
            "src": "/images/lessons/html-tables-lists.svg",
            "alt": "Списки ul ol dl и семантическая таблица данных в HTML",
            "caption": "ul/ol/dl для списков, thead/tbody/tfoot с атрибутом scope для доступности и colspan/rowspan для слияния ячеек"
          },
          "codeExample": {
            "language": "html",
            "code": "<!-- 1. Нумерованный список с обратным отсчетом -->\n<ol reversed start=\"3\">\n  <li>Запуск ракеты</li>\n  <li>Зажигание двигателей</li>\n  <li>Предстартовая проверка</li>\n</ol>\n\n<!-- 2. Семантический список характеристик товара (dl/dt/dd) -->\n<dl class=\"specs-list\">\n  <dt>Диагональ экрана:</dt>\n  <dd>16.2 дюйма Liquid Retina XDR</dd>\n  \n  <dt>Процессор:</dt>\n  <dd>Apple M3 Max (16 ядер)</dd>\n  \n  <dt>Объем накопителя:</dt>\n  <dd>1 ТБ SSD</dd>\n</dl>",
            "title": "Использование списков ol (reversed) и списка описаний dl/dt/dd",
            "explanation": "ol reversed автоматически нумерует 3, 2, 1. dl/dt/dd семантически связывает свойства с их значениями для скринридеров и SEO."
          }
        },
        {
          "title": "Анатомия семантической таблицы: <table>, <caption>, <thead>, <tbody>, <tfoot>",
          "content": "Таблица данных в HTML5 — это строгая семантическая структура, предназначенная ТОЛЬКО для табличных данных (никогда не используйте таблицы для верстки сетки сайта!):\n\n1. `<caption>` — название таблицы. Обязано быть ПЕРВЫМ дочерним тегом внутри `<table>`. Скринридеры зачитывают `<caption>` перед началом чтения таблицы, сообщая незрячему пользователю контекст данных.\n\n2. `<thead>` — заголовочная секция таблицы. Содержит строки `<tr>` с заголовочными ячейками `<th>` (Table Header).\n\n3. `<tbody>` — основное тело таблицы со строками `<tr>` и ячейками данных `<td>` (Table Data).\n\n4. `<tfoot>` — итоговая строка подвала (суммы, средние значения, примечания).\n\n5. Атрибут `scope=\"col | row\"` на тегах `<th>`:\nКритически важен для доступности (WCAG)! `scope=\"col\"` сообщает скринридеру, что ячейка является заголовком столбца, а `scope=\"row\"` — заголовком текущей строки.",
          "codeExample": {
            "language": "html",
            "code": "<table class=\"finance-table\">\n  <caption>Отчет о доходах и расходах за Q1 2026 года</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Месяц</th>\n      <th scope=\"col\">Доходы (₽)</th>\n      <th scope=\"col\">Расходы (₽)</th>\n      <th scope=\"col\">Прибыль (₽)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Январь</th>\n      <td>1 500 000</td>\n      <td>900 000</td>\n      <td>+600 000</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Февраль</th>\n      <td>1 850 000</td>\n      <td>1 100 000</td>\n      <td>+750 000</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <th scope=\"row\">Итого за квартал</th>\n      <td>3 350 000</td>\n      <td>2 000 000</td>\n      <td>+1 350 000</td>\n    </tr>\n  </tfoot>\n</table>",
            "title": "Полная семантическая структура таблицы данных с caption и scope",
            "explanation": "caption задает название таблицы, thead/tbody/tfoot четко разделяют слои, а scope='col/row' связывает данные с заголовками для голосового чтения."
          }
        },
        {
          "title": "Объединение ячеек: colspan и rowspan",
          "content": "Для построения сложных многоуровневых отчетов ячейки можно объединять по горизонтали и вертикали:\n\n1. `colspan=\"N\"` (Column Span — объединение столбцов):\n- Растягивает текущую ячейку на `N` столбцов вправо.\n- Внимание: в этой же строке `<tr>` необходимо удалить `N - 1` ячеек `<td>`, иначе таблица перекосится и вылезет вправо!\n\n2. `rowspan=\"N\"` (Row Span — объединение строк):\n- Растягивает текущую ячейку на `N` строк вниз.\n- Внимание: в следующих `N - 1` строках `<tr>` нужно удалить по одной ячейке на соответствующей позиции столбца!\n\n3. Теги `<colgroup>` и `<col>`:\nПозволяют централизованно задавать ширину и фоновые стили целым столбцам таблицы без добавления CSS-классов на каждую отдельную ячейку `<td>`:\n`<colgroup><col style=\"width: 30%;\"><col style=\"width: 70%;\"></colgroup>`.",
          "codeExample": {
            "language": "html",
            "code": "<table class=\"schedule-table\">\n  <caption>Расписание занятий стажёров</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">День</th>\n      <th scope=\"col\">Время</th>\n      <th scope=\"col\">Тема модуля</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <!-- Объединение на 2 строки вниз по вертикали -->\n      <th scope=\"row\" rowspan=\"2\">Понедельник</th>\n      <td>10:00 - 12:00</td>\n      <td>HTML5: Списки и таблицы</td>\n    </tr>\n    <tr>\n      <!-- Ячейка дня удалена, так как ее занял rowspan! -->\n      <td>14:00 - 16:00</td>\n      <td>CSS3: Рамки и тени</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Вторник</th>\n      <!-- Объединение на 2 колонки вправо -->\n      <td colspan=\"2\">Хакатон по верстке интерфейсов (весь день)</td>\n    </tr>\n  </tbody>\n</table>",
            "title": "Использование rowspan для слияния строк и colspan для колонок",
            "explanation": "rowspan='2' растягивает 'Понедельник' на 2 строки, а colspan='2' объединяет ячейки времени и темы во вторник."
          }
        },
        {
          "title": "Адаптивность таблиц и CSS-стилизация: border-collapse",
          "content": "Таблицы по умолчанию имеют фиксированную ширину содержимого и на мобильных экранах шириной 360–400px выпадают за границы экрана (Overflow).\n\nДва стандарта адаптивности таблиц:\n\n1. Горизонтальный скролл-контейнер (Scrollable Container):\nОберните таблицу в `<div class=\"table-responsive\" tabindex=\"0\" role=\"region\" aria-label=\"Таблица данных\">` со стилями `overflow-x: auto; -webkit-overflow-scrolling: touch;`. `tabindex=\"0\"` позволяет пользователям прокручивать таблицу клавишами стрелок с клавиатуры!\n\n2. Трансформация таблицы в карточки (Table to Cards via CSS):\nНа мобильных экранах через `@media (max-width: 600px)` таблица переключается в `display: block`, а названия столбцов выводятся через `td::before { content: attr(data-label); font-weight: bold; }`.\n\n3. Свойство `border-collapse: collapse;`:\nПо умолчанию браузер рисует двойные рамки с зазором (`border-collapse: separate; border-spacing: 2px;`). Свойство `border-collapse: collapse;` схлопывает соседние границы ячеек в аккуратную единую линию 1px.",
          "codeExample": {
            "language": "html",
            "code": "<div class=\"table-container\" tabindex=\"0\" role=\"region\" aria-label=\"Финансовая сводка\">\n  <table class=\"modern-table\">\n    <caption>Статистика посещаемости</caption>\n    <thead>\n      <tr>\n        <th scope=\"col\">Дата</th>\n        <th scope=\"col\">Уникальные визиты</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>19.08.2026</td>\n        <td>14 250</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<style>\n  .modern-table {\n    width: 100%;\n    border-collapse: collapse; /* Схлопывание рамок в 1px */\n    color: #e6edf3;\n  }\n  .modern-table th, .modern-table td {\n    border: 1px solid #30363d;\n    padding: 10px 14px;\n    text-align: left;\n  }\n  .modern-table thead {\n    background: #161b22;\n    color: #2dff8a;\n  }\n  .table-container {\n    overflow-x: auto; /* Плавный скролл на смартфонах */\n  }\n</style>",
            "title": "Адаптивный скролл-контейнер и border-collapse: collapse",
            "explanation": "border-collapse схлопывает рамки. Контейнер с overflow-x: auto и tabindex='0' делает прокрутку плавной и доступной с клавиатуры."
          }
        }
      ],
      "seniorTips": [
        "Всегда добавляйте `<caption>` и `scope=\"col|row\"` на тегах `<th>` для таблиц данных — это ключевое требование доступности WCAG для скринридеров.",
        "Оборачивайте таблицы в контейнер `<div class=\"table-responsive\" tabindex=\"0\" role=\"region\" aria-label=\"...\">` с `overflow-x: auto;` — это обеспечивает плавную прокрутку на смартфонах и доступность с клавиатуры.",
        "Используйте список описаний `<dl><dt>Ключ</dt><dd>Значение</dd></dl>` для характеристик товаров и профилей пользователей вместо обычных `div`.",
        "Для обратного отсчёта в `<ol>` используйте булев атрибут `reversed` — браузер сам пронумерует элементы от N до 1."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Использование таблиц для раскладки сетки страницы -->\n<table><tr><td width=\"200\">Sidebar</td><td>Content</td></tr></table>",
          "good": "<div class=\"layout-grid\"><aside>Sidebar</aside><main>Content</main></div>",
          "reason": "Табличная верстка ломает семантику, разрушает мобильную адаптивность и блокирует нормальную работу скринридеров. Для сеток используйте CSS Grid и Flexbox."
        },
        {
          "bad": "<!-- Невалидная вложенность ul напрямую внутрь ul -->\n<ul>\n  <ul><li>Подпункт</li></ul>\n</ul>",
          "good": "<ul>\n  <li>Главный пункт\n    <ul><li>Подпункт</li></ul>\n  </li>\n</ul>",
          "reason": "Тег <ul> может содержать прямыми потомками ТОЛЬКО теги <li>. Вложенный список обязан находиться внутри родительского <li>."
        },
        {
          "bad": "<!-- Таблица без thead и scope -->\n<table><tr><td>Имя</td><td>Балл</td></tr><tr><td>Иван</td><td>95</td></tr></table>",
          "good": "<table><thead><tr><th scope=\"col\">Имя</th><th scope=\"col\">Балл</th></tr></thead><tbody><tr><td>Иван</td><td>95</td></tr></tbody></table>",
          "reason": "Без thead и th scope скринридер не может связать данные ячеек со столбцами, превращая чтение таблицы в бессмысленный набор цифр."
        }
      ],
      "keyTakeaways": [
        "`<ul>` — для маркированных списков, `<ol>` — для нумерованных с атрибутом `reversed`, `<dl>/<dt>/<dd>` — для пар ключ-значение.",
        "Анатомия таблицы включает `<caption>`, `<thead>`, `<tbody>`, `<tfoot>` и строки `<tr>`.",
        "Атрибут `scope=\"col|row\"` на тегах `<th>` связывает данные со структурой для доступности скринридеров.",
        "`colspan` объединяет столбцы по горизонтали, `rowspan` объединяет строки по вертикали.",
        "Свойство `border-collapse: collapse;` объединяет двойные рамки ячеек в аккуратную сетку 1px."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"table-sandbox\">\n  <table class=\"cyber-table\">\n    <caption>Рейтинг стажёров платформы</caption>\n    <thead>\n      <tr>\n        <th scope=\"col\">Ранг</th>\n        <th scope=\"col\">Стажёр</th>\n        <th scope=\"col\">Модуль</th>\n        <th scope=\"col\">Баллы</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\">#1</th>\n        <td>Александр К.</td>\n        <td>JavaScript Master</td>\n        <td>98 / 100</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">#2</th>\n        <td>Мария В.</td>\n        <td>CSS Core</td>\n        <td>95 / 100</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
      "initialCss": ".table-sandbox {\n  padding: 16px;\n  background: #0a0e13;\n  color: #e6edf3;\n  font-family: monospace;\n}\n.cyber-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.cyber-table caption {\n  text-align: left;\n  padding-bottom: 8px;\n  color: #2dff8a;\n  font-weight: bold;\n}\n.cyber-table th, .cyber-table td {\n  padding: 10px 14px;\n  border-bottom: 1px solid #30363d;\n  text-align: left;\n}\n.cyber-table thead {\n  background: #0d1117;\n  color: #29e7ff;\n}",
      "initialJs": "console.log('Песочница таблиц активна');",
      "instructions": "Практика с таблицами и списками:\n1. Добавьте итоговую строку <tfoot> со средним баллом стажёров\n2. Объедините ячейки через colspan='2' в новой строке\n3. Добавьте список характеристик <dl><dt>Уровень:</dt><dd>Senior Intern</dd></dl>"
    },
    "task": {
      "title": "Верстка финансовой сводки с объединением ячеек, caption, scope и списком dl",
      "scenario": "Вам необходимо сверстать финансовый виджет для личного кабинета: отчет о расходах проекта с семантической таблицей (caption, thead, tbody, tfoot, scope, слияние строк rowspan и колонок colspan) и блоком метаданных проекта на базе списка описаний <dl>.",
      "criteria": [
        "Таблица оформлена с тегами <caption>, <thead>, <tbody>, <tfoot>",
        "Все заголовки <th> содержат атрибуты scope='col' или scope='row'",
        "Использовано объединение ячеек по горизонтали (colspan) и по вертикали (rowspan)",
        "Таблица обернута в адаптивный скролл-контейнер с tabindex='0' и aria-label",
        "Метаданные проекта размечены через список описаний <dl> с тегами <dt> и <dd>",
        "Задано свойство border-collapse: collapse"
      ],
      "starterCode": {
        "html": "<div class=\"widget-card\">\n  <!-- Разметьте таблицу и список dl -->\n</div>"
      },
      "hints": [
        "Используйте <caption>Отчет о расходах</caption>",
        "Используйте <th scope='col'>Статья</th> и <th scope='row'>Итого</th>",
        "Оберните таблицу в <div class='table-responsive' tabindex='0' role='region'>"
      ],
      "solution": {
        "html": "<div class=\"widget-card\">\n  <dl class=\"project-meta\">\n    <dt>Проект:</dt>\n    <dd>Frontend Intern Academy 2026</dd>\n    <dt>Руководитель:</dt>\n    <dd>Lead Architect</dd>\n  </dl>\n\n  <div class=\"table-responsive\" tabindex=\"0\" role=\"region\" aria-label=\"Финансовый отчет проекта\">\n    <table class=\"finance-table\">\n      <caption>Сводная смета расходов на инфраструктуру</caption>\n      <thead>\n        <tr>\n          <th scope=\"col\">Категория</th>\n          <th scope=\"col\">Сервис</th>\n          <th scope=\"col\">Стоимость (₽)</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\" rowspan=\"2\">Хостинг &amp; CDN</th>\n          <td>Vercel Enterprise</td>\n          <td>45 000</td>\n        </tr>\n        <tr>\n          <td>Cloudflare Pro</td>\n          <td>15 000</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">База данных</th>\n          <td>PostgreSQL Cluster</td>\n          <td>30 000</td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <th scope=\"row\" colspan=\"2\">Итоговая сумма:</th>\n          <td><strong>90 000 ₽</strong></td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>",
        "explanation": "Разметка полностью соответствует стандартам: dl/dt/dd размечает метаданные, таблица содержит caption, thead/tbody/tfoot, scope, слияния rowspan='2' и colspan='2', а контейнер гарантирует доступность и скролл."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html8-q1",
          "question": "Зачем в таблицах данных на тегах <th> обязательно указывать атрибуты scope='col' и scope='row'?",
          "options": [
            "Для изменения цвета шрифта заголовков",
            "Для доступности (a11y): сообщает скринридеру, к чему относится заголовок (к целому столбцу или к строке), позволяя незрячим пользователям понимать смысл каждой ячейки",
            "Для автоматического выравнивания по центру",
            "Без scope таблица не отобразится в браузере"
          ],
          "correctIndex": 1,
          "explanation": "Атрибут scope задает направление заголовка для голосовых программ чтения с экрана, связывая ячейку данных td со смысловым заголовком th."
        },
        {
          "id": "html8-q2",
          "question": "Какой тег списка в HTML5 предназначен для семантической разметки пар «ключ-значение» (характеристики товаров, словарь терминов)?",
          "options": [
            "<ul> с тегами <li>",
            "<dl> с парами <dt> (термин) и <dd> (значение)",
            "<ol> с атрибутом type='key'",
            "<datalist>"
          ],
          "correctIndex": 1,
          "explanation": "Тег <dl> (Description List) с потомками <dt> (Description Term) и <dd> (Description Details) — единственный семантический стандарт для пар ключ-значение."
        },
        {
          "id": "html8-q3",
          "question": "Что произойдет при установке атрибута colspan='3' на ячейке <td>?",
          "options": [
            "Ячейка разделится на 3 строки",
            "Ячейка растянется по горизонтали на 3 столбца, и в этой строке нужно удалить 2 соседние ячейки td",
            "Текст ячейки повторится 3 раза",
            "Ширина ячейки увеличится на 3 пикселя"
          ],
          "correctIndex": 1,
          "explanation": "colspan='3' объединяет 3 колонки в одну. Чтобы таблица не перекосилась, в этой же строке tr удаляют 2 лишние ячейки td."
        },
        {
          "id": "html8-q4",
          "question": "Какое свойство CSS объединяет двойные рамки соседних ячеек таблицы в единую аккуратную линию?",
          "options": [
            "border-style: single;",
            "border-collapse: collapse;",
            "table-layout: fixed;",
            "border-spacing: 0px;"
          ],
          "correctIndex": 1,
          "explanation": "По умолчанию таблицы имеют border-collapse: separate (двойные границы). Значение border-collapse: collapse схлопывает границы ячеек в аккуратную сетку 1px."
        },
        {
          "id": "html8-q5",
          "question": "Где внутри тега <table> должен располагаться заголовочный тег <caption> по спецификации HTML5?",
          "options": [
            "В самом конце таблицы после <tfoot>",
            "Строго первым дочерним элементом сразу после открывающего тега <table>",
            "Внутри <thead>",
            "В любом месте таблицы"
          ],
          "correctIndex": 1,
          "explanation": "По стандарту HTML5 тег <caption> обязан быть самым первым дочерним элементом внутри <table>, чтобы скринридеры сразу сообщили пользователю название таблицы."
        }
      ]
    }
  },
  {
    "id": "html-9",
    "moduleId": "html",
    "level": 9,
    "title": "HTML-формы и элементы ввода",
    "subtitle": "form, input types, label, fieldset/legend, нативная HTML5 валидация, FormData API и datalist",
    "description": "Освойте создание профессиональных HTML5-форм: семантическую связку label + input, группировку полей fieldset/legend, все типы input (email, tel, date, file, range, color), нативную валидацию (required, pattern, minlength), сбор данных через FormData API и автоподсказки через datalist.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "forms",
      "input",
      "label",
      "fieldset",
      "validation",
      "pattern",
      "required",
      "formdata",
      "datalist"
    ],
    "theory": {
      "overview": "Формы — единственный стандартный механизм сбора данных от пользователя в HTML: регистрация, авторизация, оформление заказа, настройки профиля, поиск и фильтры.\n\nВ этом уроке мы изучим семантическую анатомию формы (`<form>`, `<fieldset>`, `<legend>`), разберём все современные типы `<input>` (включая специализированные мобильные клавиатуры для `type=\"email\"`, `type=\"tel\"` и `type=\"url\"`), научимся настраивать нативную HTML5 валидацию через `required`, `pattern` и `minlength`, а также собирать данные формы для отправки на сервер через объект `FormData`.",
      "sections": [
        {
          "title": "Анатомия формы: <form>, <label>, <fieldset> и <legend>",
          "content": "Семантическая структура HTML5-формы:\n\n1. Тег `<form>`:\n- `action=\"/api/register\"` — URL для отправки данных.\n- `method=\"POST\"` — HTTP-метод (GET помещает данные в URL-строку, POST — в тело запроса; для конфиденциальных данных ВСЕГДА используйте POST!).\n- `novalidate` — отключает встроенную браузерную валидацию (если вы хотите обрабатывать ошибки кастомно через JavaScript).\n\n2. Связка `<label for=\"id\">` + `<input id=\"id\">`:\n- Клик по тексту `<label>` автоматически фокусирует связанный `<input>` — увеличивает зону касания (Touch Target) на смартфонах на 300%!\n- Скринридеры озвучивают текст `<label>` при фокусе на поле.\n\n3. Группировка полей: `<fieldset>` и `<legend>`:\n- `<fieldset>` визуально и семантически объединяет группу связанных полей («Контактные данные», «Адрес доставки», «Способ оплаты»).\n- `<legend>` — заголовок группы, озвучиваемый скринридерами.\n\n4. Атрибут `autocomplete`:\nПозволяет браузерам автозаполнять поля из сохранённых данных пользователя:\n`autocomplete=\"name\"`, `autocomplete=\"email\"`, `autocomplete=\"tel\"`, `autocomplete=\"street-address\"`.",
          "image": {
            "src": "/images/lessons/html-forms-inputs.svg",
            "alt": "HTML формы, типы input и валидация: label, fieldset, required, pattern",
            "caption": "Связка label+input увеличивает зону касания, fieldset/legend группирует поля, а type='email' подключает мобильную клавиатуру с @"
          },
          "codeExample": {
            "language": "html",
            "code": "<form action=\"/api/register\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Регистрация стажёра</legend>\n\n    <label for=\"reg-name\">Полное имя:</label>\n    <input id=\"reg-name\" type=\"text\" name=\"fullName\"\n           required minlength=\"2\" autocomplete=\"name\" />\n\n    <label for=\"reg-email\">Электронная почта:</label>\n    <input id=\"reg-email\" type=\"email\" name=\"email\"\n           required autocomplete=\"email\"\n           placeholder=\"intern@academy.dev\" />\n\n    <label for=\"reg-pass\">Пароль:</label>\n    <input id=\"reg-pass\" type=\"password\" name=\"password\"\n           required minlength=\"8\" autocomplete=\"new-password\" />\n  </fieldset>\n\n  <button type=\"submit\">Зарегистрироваться</button>\n</form>",
            "title": "Семантическая форма с fieldset, legend, label и autocomplete",
            "explanation": "Каждый input связан с label через for/id, поля объединены в fieldset с заголовком legend, а autocomplete ускоряет заполнение."
          }
        },
        {
          "title": "Типы <input>: от текста и пароля до даты, файла и цвета",
          "content": "HTML5 предоставляет десятки специализированных типов полей ввода:\n\n1. Текстовые типы:\n- `type=\"text\"` — универсальное текстовое поле.\n- `type=\"password\"` — маскирует ввод символами ●●●●.\n- `type=\"email\"` — на смартфоне показывает клавиатуру с кнопкой `@`. Браузер проверяет формат email.\n- `type=\"tel\"` — на смартфоне открывает цифровую клавиатуру. Браузер НЕ валидирует формат (телефоны слишком разнообразны).\n- `type=\"url\"` — мобильная клавиатура с кнопками `.com` и `/`.\n- `type=\"search\"` — поле поиска с кнопкой очистки «✕».\n\n2. Числовые и временные типы:\n- `type=\"number\"` — поле с кнопками-спиннерами ▲▼. Атрибуты: `min`, `max`, `step`.\n- `type=\"range\"` — ползунок (Slider). Используется для громкости, яркости, рейтинга.\n- `type=\"date\"` / `type=\"time\"` / `type=\"datetime-local\"` — нативный выбор даты/времени (календарь) без сторонних библиотек!\n\n3. Переключатели и выбор:\n- `type=\"checkbox\"` — множественный выбор (одна или несколько опций из набора).\n- `type=\"radio\"` — единственный выбор из группы (связаны общим атрибутом `name`).\n\n4. Специальные типы:\n- `type=\"file\"` — загрузка файлов. Атрибут `accept=\"image/*\"` ограничивает только изображениями.\n- `type=\"color\"` — нативная пипетка выбора цвета!\n- `type=\"hidden\"` — скрытое поле для CSRF-токенов и идентификаторов.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Числа, даты, файлы и цвет -->\n<label for=\"budget\">Бюджет проекта (₽):</label>\n<input id=\"budget\" type=\"number\" name=\"budget\"\n       min=\"10000\" max=\"10000000\" step=\"5000\" />\n\n<label for=\"deadline\">Дедлайн:</label>\n<input id=\"deadline\" type=\"date\" name=\"deadline\"\n       min=\"2026-08-01\" max=\"2027-12-31\" />\n\n<label for=\"avatar\">Аватарка:</label>\n<input id=\"avatar\" type=\"file\" name=\"avatar\"\n       accept=\"image/png, image/jpeg, image/webp\" />\n\n<label for=\"brand-color\">Цвет бренда:</label>\n<input id=\"brand-color\" type=\"color\" name=\"brandColor\"\n       value=\"#2dff8a\" />",
            "title": "Числовые поля, выбор даты, загрузка файлов и пипетка цвета",
            "explanation": "type='number' получает спиннер с ограничениями min/max/step. type='date' отображает нативный календарь. type='file' с accept фильтрует форматы."
          }
        },
        {
          "title": "Нативная HTML5 валидация: required, pattern, minlength и Constraint Validation API",
          "content": "HTML5 предоставляет мощную встроенную валидацию БЕЗ JavaScript:\n\n1. Базовые атрибуты валидации:\n- `required` — поле обязательно для заполнения.\n- `minlength=\"8\"` / `maxlength=\"100\"` — ограничения длины строки.\n- `min=\"1\"` / `max=\"999\"` — ограничения числовых значений и дат.\n- `pattern=\"[A-Z]{2}\\d{4}\"` — валидация по регулярному выражению (например, формат авиабилета: AB1234).\n\n2. Визуальные псевдоклассы CSS:\n- `:valid` — стиль для корректного поля (зеленая рамка ✓).\n- `:invalid` — стиль для некорректного поля (красная рамка ✕).\n- `:required` — стилизация обязательных полей (звездочка *).\n- `:placeholder-shown` — стиль, пока поле пустое (текст подсказки виден).\n\n3. JavaScript: Constraint Validation API:\n- `input.checkValidity()` — возвращает `true/false`.\n- `input.validity.valueMissing` / `.typeMismatch` / `.patternMismatch` — детализированный объект ошибки.\n- `input.setCustomValidity('Пароль слишком слабый')` — установка кастомного сообщения об ошибке.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Валидация промокода через pattern -->\n<label for=\"promo\">Промокод (3 буквы + 4 цифры):</label>\n<input id=\"promo\" type=\"text\" name=\"promoCode\"\n       pattern=\"[A-Z]{3}\\d{4}\"\n       title=\"Формат: три заглавные буквы и четыре цифры (например, ABC1234)\"\n       placeholder=\"ABC1234\"\n       required />\n\n<style>\n  input:valid   { border-color: #2dff8a; }\n  input:invalid { border-color: #f85149; }\n</style>",
            "title": "Валидация промокода по регулярному выражению pattern",
            "explanation": "Атрибут pattern задает маску ввода, title показывает подсказку при ошибке, а CSS-псевдоклассы :valid/:invalid подсвечивают поле в реальном времени."
          }
        },
        {
          "title": "Сбор данных FormData API, тег <select>, <textarea> и автоподсказки <datalist>",
          "content": "Работа с данными формы и дополнительными элементами ввода:\n\n1. `FormData API` — современный способ сбора данных формы в JavaScript:\n`const data = new FormData(formElement);`\n`const obj = Object.fromEntries(data);`\nFormData автоматически собирает значения ВСЕХ полей формы по атрибуту `name` в пары ключ-значение, включая загруженные файлы!\n\n2. Тег `<select>` (Выпадающий список):\n- `<option value=\"js\">JavaScript</option>`\n- Группировка опций через `<optgroup label=\"Frontend\">`.\n- Атрибут `multiple` позволяет выбрать несколько опций (через Ctrl/Cmd+Click).\n\n3. Тег `<textarea>` (Многострочное текстовое поле):\n- Атрибуты `rows` и `cols` задают видимые размеры.\n- CSS-свойство `resize: vertical;` ограничивает изменение размера только по вертикали.\n\n4. Тег `<datalist>` (Автоподсказки):\n- Связывается с `<input>` через атрибут `list=\"id\"`.\n- Браузер показывает выпадающий список подсказок, но пользователь может ввести произвольное значение (в отличие от `<select>`)!",
          "codeExample": {
            "language": "javascript",
            "code": "const form = document.querySelector('#order-form');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault(); // Отмена перезагрузки страницы\n\n  // 1. Сбор ВСЕХ данных формы через FormData\n  const formData = new FormData(form);\n  \n  // 2. Преобразование в обычный объект\n  const orderData = Object.fromEntries(formData);\n  console.log(orderData);\n  // { fullName: 'Иван', email: 'ivan@dev.ru', plan: 'pro' }\n\n  // 3. Отправка на сервер через Fetch API\n  fetch('/api/orders', {\n    method: 'POST',\n    body: formData // FormData автоматически устанавливает Content-Type!\n  });\n});",
            "title": "Сбор и отправка данных формы через FormData API",
            "explanation": "FormData собирает значения всех полей по атрибуту name. Object.fromEntries преобразует FormData в обычный объект."
          }
        }
      ],
      "seniorTips": [
        "ВСЕГДА связывайте `<label for=\"id\">` с `<input id=\"id\">` — это увеличивает зону касания на мобилках и критически важно для доступности скринридеров.",
        "Используйте `type=\"email\"`, `type=\"tel\"`, `type=\"url\"` — на смартфонах браузер автоматически подключает специализированную клавиатуру с символами `@`, `.com` и цифровой панелью.",
        "Для формы с кастомной JavaScript-валидацией добавляйте атрибут `novalidate` на тег `<form>`, чтобы отключить стандартные всплывающие сообщения браузера.",
        "Используйте `FormData` вместо ручного чтения `input.value` для каждого поля — это автоматически обрабатывает файлы, чекбоксы и множественные значения."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Input без label -->\n<input type=\"email\" placeholder=\"Введите email\" />",
          "good": "<label for=\"user-email\">Электронная почта:</label>\n<input id=\"user-email\" type=\"email\" placeholder=\"name@company.com\" />",
          "reason": "Без связки с label скринридер не сможет озвучить назначение поля. Placeholder НЕ является заменой label (он исчезает при вводе!)."
        },
        {
          "bad": "<!-- Пароли через GET -->\n<form action=\"/login\" method=\"GET\">\n  <input type=\"password\" name=\"pass\" />\n</form>",
          "good": "<form action=\"/login\" method=\"POST\">\n  <input type=\"password\" name=\"pass\" autocomplete=\"current-password\" />\n</form>",
          "reason": "GET-метод помещает пароль в URL строку (?pass=secret), который сохраняется в истории браузера, логах серверов и аналитике."
        },
        {
          "bad": "<!-- Радиокнопки с разными name -->\n<input type=\"radio\" name=\"option1\" value=\"a\" />\n<input type=\"radio\" name=\"option2\" value=\"b\" />",
          "good": "<input type=\"radio\" name=\"plan\" value=\"free\" />\n<input type=\"radio\" name=\"plan\" value=\"pro\" />",
          "reason": "Радиокнопки с одинаковым атрибутом name образуют группу взаимоисключающего выбора. Разные name позволяют выбрать оба варианта, превращая радио в чекбоксы."
        }
      ],
      "keyTakeaways": [
        "Связка `<label for>` + `<input id>` критически важна для доступности и увеличивает Touch Target на мобилках.",
        "`<fieldset>` и `<legend>` семантически группируют поля формы для скринридеров.",
        "Типы `email`, `tel`, `url` активируют специализированные клавиатуры на смартфонах.",
        "Атрибуты `required`, `pattern`, `minlength` обеспечивают нативную HTML5 валидацию без JavaScript.",
        "`FormData API` автоматически собирает данные всех полей формы по атрибуту `name`."
      ]
    },
    "sandbox": {
      "initialHtml": "<form id=\"sandbox-form\" novalidate>\n  <fieldset>\n    <legend>Заявка стажёра</legend>\n    <div style=\"margin-bottom:10px;\">\n      <label for=\"sf-name\">Имя:</label><br/>\n      <input id=\"sf-name\" type=\"text\" name=\"fullName\" required minlength=\"2\" style=\"width:100%; padding:6px; background:#0d1117; color:#2dff8a; border:1px solid #30363d; font-family:monospace;\" />\n    </div>\n    <div style=\"margin-bottom:10px;\">\n      <label for=\"sf-email\">Email:</label><br/>\n      <input id=\"sf-email\" type=\"email\" name=\"email\" required style=\"width:100%; padding:6px; background:#0d1117; color:#2dff8a; border:1px solid #30363d; font-family:monospace;\" />\n    </div>\n    <div style=\"margin-bottom:10px;\">\n      <label for=\"sf-lang\">Предпочитаемый язык:</label><br/>\n      <input id=\"sf-lang\" list=\"langs\" name=\"language\" style=\"width:100%; padding:6px; background:#0d1117; color:#e6edf3; border:1px solid #30363d; font-family:monospace;\" />\n      <datalist id=\"langs\">\n        <option value=\"JavaScript\" />\n        <option value=\"TypeScript\" />\n        <option value=\"Python\" />\n      </datalist>\n    </div>\n  </fieldset>\n  <button type=\"submit\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer; margin-top:8px;\">Отправить</button>\n  <pre id=\"output\" style=\"margin-top:12px; color:#8b949e; font-size:12px;\"></pre>\n</form>",
      "initialCss": "form { font-family: monospace; color: #e6edf3; padding: 16px; background: #0a0e13; border-radius: 8px; }\nfieldset { border: 1px solid #30363d; border-radius: 6px; padding: 12px; }\nlegend { color: #2dff8a; font-weight: bold; }\nlabel { color: #29e7ff; font-size: 13px; }\ninput:valid { border-color: #2dff8a !important; }\ninput:invalid:not(:placeholder-shown) { border-color: #f85149 !important; }",
      "initialJs": "document.getElementById('sandbox-form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const data = new FormData(e.target);\n  const obj = Object.fromEntries(data);\n  document.getElementById('output').textContent = JSON.stringify(obj, null, 2);\n});",
      "instructions": "Практика с формами:\n1. Заполните форму и нажмите 'Отправить' — данные отобразятся в JSON\n2. Попробуйте ввести невалидный email и посмотрите на :invalid стили\n3. Начните вводить текст в поле языка — появятся подсказки datalist"
    },
    "task": {
      "title": "Верстка формы регистрации с группировкой fieldset, нативной валидацией и FormData",
      "scenario": "Вам необходимо разработать форму регистрации участника хакатона: форма должна содержать группировку полей в fieldset/legend (Личные данные и Настройки), типы input email/tel/date/file, нативную валидацию required/pattern/minlength, выпадающий select для выбора трека, datalist для навыков, и обработку submit через FormData API.",
      "criteria": [
        "Форма содержит минимум 2 группы fieldset с legend",
        "Все input связаны с label через for/id",
        "Используются типы input: email, tel, date, file и text",
        "Настроена нативная валидация: required, pattern и minlength",
        "Обработка submit использует e.preventDefault() и FormData API",
        "Есть select для выбора трека и datalist для навыков"
      ],
      "starterCode": {
        "html": "<form id=\"hackathon-form\" novalidate>\n  <!-- Разметьте форму -->\n</form>"
      },
      "hints": [
        "Используйте <fieldset><legend>Личные данные</legend>...</fieldset>",
        "Свяжите: <label for='phone'>Телефон:</label> <input id='phone' type='tel' />",
        "Обработка: const fd = new FormData(form); const data = Object.fromEntries(fd);"
      ],
      "solution": {
        "html": "<form id=\"hackathon-form\" novalidate>\n  <fieldset>\n    <legend>Личные данные</legend>\n    <label for=\"h-name\">ФИО:</label>\n    <input id=\"h-name\" type=\"text\" name=\"fullName\" required minlength=\"3\" autocomplete=\"name\" />\n\n    <label for=\"h-email\">Email:</label>\n    <input id=\"h-email\" type=\"email\" name=\"email\" required autocomplete=\"email\" />\n\n    <label for=\"h-tel\">Телефон:</label>\n    <input id=\"h-tel\" type=\"tel\" name=\"phone\" pattern=\"\\+7\\d{10}\" title=\"Формат: +7XXXXXXXXXX\" />\n\n    <label for=\"h-bday\">Дата рождения:</label>\n    <input id=\"h-bday\" type=\"date\" name=\"birthday\" />\n  </fieldset>\n\n  <fieldset>\n    <legend>Хакатон</legend>\n    <label for=\"h-track\">Трек:</label>\n    <select id=\"h-track\" name=\"track\" required>\n      <option value=\"\">Выберите трек</option>\n      <option value=\"frontend\">Frontend</option>\n      <option value=\"backend\">Backend</option>\n      <option value=\"design\">UI/UX Design</option>\n    </select>\n\n    <label for=\"h-skills\">Навыки:</label>\n    <input id=\"h-skills\" list=\"skill-list\" name=\"skills\" />\n    <datalist id=\"skill-list\">\n      <option value=\"React\" />\n      <option value=\"TypeScript\" />\n      <option value=\"Node.js\" />\n    </datalist>\n\n    <label for=\"h-resume\">Резюме (PDF):</label>\n    <input id=\"h-resume\" type=\"file\" name=\"resume\" accept=\".pdf\" />\n  </fieldset>\n\n  <button type=\"submit\">Подать заявку</button>\n</form>",
        "js": "document.getElementById('hackathon-form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const formData = new FormData(e.target);\n  const data = Object.fromEntries(formData);\n  console.log('Заявка:', data);\n});",
        "explanation": "Форма полностью семантична: 2 fieldset с legend, все input связаны с label, нативная валидация required/pattern/minlength, select для треков, datalist для навыков и обработка через FormData."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html9-q1",
          "question": "Почему критически важно связывать каждый <input> с тегом <label> через атрибуты for и id?",
          "options": [
            "Label изменяет цвет шрифта",
            "Клик по тексту label фокусирует связанный input (увеличивает Touch Target на смартфонах на 300%), а скринридеры озвучивают назначение поля для незрячих пользователей",
            "Без label input не работает",
            "Label обязателен только для чекбоксов"
          ],
          "correctIndex": 1,
          "explanation": "Связка label + input критически важна для доступности (скринридеры) и UX на сенсорных экранах (увеличение области нажатия)."
        },
        {
          "id": "html9-q2",
          "question": "Какое преимущество дает использование type='email' и type='tel' на мобильных устройствах?",
          "options": [
            "Меняет цвет курсора",
            "Браузер на смартфоне автоматически подключает специализированную клавиатуру: с символом @ для email и цифровую панель для tel",
            "Шифрует ввод пользователя",
            "Отправляет данные через WebSocket"
          ],
          "correctIndex": 1,
          "explanation": "Мобильные ОС (iOS и Android) адаптируют виртуальную клавиатуру под тип поля, добавляя кнопки @, .com, цифры и т.д."
        },
        {
          "id": "html9-q3",
          "question": "Что делает атрибут pattern на теге <input>?",
          "options": [
            "Применяет CSS-фон",
            "Задает регулярное выражение для валидации формата ввода (например, pattern='[A-Z]{3}\\d{4}' для кода ABC1234)",
            "Добавляет звуковой сигнал",
            "Автоматически форматирует номер телефона"
          ],
          "correctIndex": 1,
          "explanation": "Атрибут pattern принимает регулярное выражение JavaScript и блокирует отправку формы, если введенное значение не соответствует маске."
        },
        {
          "id": "html9-q4",
          "question": "Чем тег <datalist> отличается от тега <select>?",
          "options": [
            "datalist является устаревшим элементом",
            "datalist предлагает автоподсказки при вводе, но пользователь может ввести произвольное значение, а select ограничивает выбор только предложенными опциями",
            "datalist не поддерживается в Chrome",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "datalist показывает выпадающий список подсказок, но не ограничивает ввод. select строго ограничивает выбор заданными option."
        },
        {
          "id": "html9-q5",
          "question": "Как объект FormData собирает данные из HTML-формы?",
          "options": [
            "Парсит innerHTML формы",
            "Автоматически собирает значения всех полей формы по атрибуту name в пары ключ-значение, включая файлы",
            "Считывает только первый input",
            "Отправляет запрос на сервер при создании"
          ],
          "correctIndex": 1,
          "explanation": "new FormData(formElement) сканирует все поля с атрибутом name внутри формы и формирует коллекцию пар 'имя поля: значение' для передачи на сервер."
        }
      ]
    }
  },
  {
    "id": "html-10",
    "moduleId": "html",
    "level": 10,
    "title": "Семантическая верстка и структура веб-документа",
    "subtitle": "header, nav, main, article, section, aside, footer, WAI-ARIA ориентиры и SEO-иерархия",
    "description": "Освойте семантическую архитектуру HTML5: правильное использование структурных ориентиров (header, nav, main, article, section, aside, footer), смысловых тегов (time, address, figure, details), WAI-ARIA Landmark ролей и строгой иерархии заголовков h1-h6 для доступности (WCAG) и максимального SEO-ранжирования.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "semantics",
      "html5",
      "accessibility",
      "seo",
      "article",
      "section",
      "main",
      "nav",
      "wai-aria"
    ],
    "theory": {
      "overview": "Семантическая верстка (Semantic HTML) — это использование HTML-тегов в строгом соответствии с их смысловым назначением, а не только для визуального оформления.\n\nЗамена бессмысленных `<div>` на семантические ориентиры (`<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`) кардинально улучшает доступность (Accessibility WCAG 2.2) для сотен миллионов людей с программами чтения с экрана (Screen Readers), повышает позиции сайта в поисковых системах Google и Яндекс, активирует режим чтения (Reader Mode в Safari и Firefox) и структурирует кодовую базу для командной разработки.",
      "sections": [
        {
          "title": "Зачем нужна семантика: Доступность (a11y), SEO и Safari Reader Mode",
          "content": "Почему профессиональная разработка не использует «div-ный суп»:\n\n1. **Доступность (Accessibility / WCAG 2.2)**:\n- Незрячие пользователи используют скринридеры (NVDA, VoiceOver, JAWS).\n- Скринридер позволяет мгновенно «перепрыгивать» между ключевыми областями страницы (Landmarks): сразу к `<nav>` (меню), к `<main>` (главному контенту) или к поиску, пропуская десятки повторяющихся ссылок шапки.\n\n2. **Поисковая оптимизация (SEO & Rich Snippets)**:\n- Поисковые роботы Googlebot и Яндекс парсят семантическое дерево документа.\n- Текст внутри `<article>` и `<header>` индексируется с повышенным приоритетом для быстрых ответов и расширенных сниппетов.\n\n3. **Режим чтения (Safari Reader Mode)**:\n- Браузеры автоматически генерируют чистый режим для чтения статьи без рекламы, основываясь на наличии тегов `<article>`, `<header>`, `<h1>` и `<time>`.\n\n4. **Правило единственного `<h1>`**:\nНа странице ДОЛЖЕН быть строго ОДИН тег `<h1>`, выражающий главную тему документа. Все остальные заголовки строго следуют иерархии: `h1 → h2 → h3` (никогда не перепрыгивайте с `h1` сразу на `h3`!).",
          "image": {
            "src": "/images/lessons/html-semantic-architecture.svg",
            "alt": "Семантическая архитектура HTML5: header, nav, main, article, section, aside, footer",
            "caption": "Анатомия семантической страницы: header (шапка), nav (меню), main (один на страницу), article (автономный пост), section (раздел), aside (сайдбар), footer (подвал)"
          },
          "codeExample": {
            "language": "html",
            "code": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>Руководство по CSS Grid — Академия стажёров</title>\n</head>\n<body>\n  <!-- Шапка сайта с навигацией -->\n  <header role=\"banner\">\n    <a href=\"/\" class=\"logo\">DevAcademy</a>\n    <nav role=\"navigation\" aria-label=\"Основная навигация\">\n      <ul>\n        <li><a href=\"/courses\">Курсы</a></li>\n        <li><a href=\"/blog\">Блог</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <!-- Главный уникальный контент страницы -->\n  <main id=\"main-content\" role=\"main\">\n    <article>\n      <header>\n        <h1>Полное руководство по CSS Grid 2026</h1>\n        <p>Автор: <a href=\"/authors/alex\">Алекс Смирнов</a></p>\n        <time datetime=\"2026-08-19T14:30:00Z\">19 августа 2026</time>\n      </header>\n      <section>\n        <h2>Концепция двумерной сетки</h2>\n        <p>CSS Grid позволяет строить сложные макеты...</p>\n      </section>\n    </article>\n  </main>\n\n  <!-- Подвал сайта -->\n  <footer role=\"contentinfo\">\n    <p>&copy; 2026 Frontend Intern Academy.</p>\n  </footer>\n</body>\n</html>",
            "title": "Идеальная семантическая структура страницы документа",
            "explanation": "header, nav, main, article, section и footer четко размечают зоны. role атрибуты усиливают семантику для старых скринридеров."
          }
        },
        {
          "title": "Анатомия страницы: <header>, <nav>, <main>, <article>, <section>, <aside>, <tfoot>",
          "content": "Назначение ключевых ориентиров HTML5:\n\n1. `<header>` — вводная часть страницы или секции. Обычно содержит логотип, поиск, навигацию или заголовок статьи `<h1>`.\n\n2. `<nav>` — блок главных навигационных ссылок сайта или подраздела. Используйте атрибут `aria-label=\"Главное меню\"`, если на странице несколько `<nav>`.\n\n3. `<main>` — ГЛАВНЫЙ уникальный контент страницы. Правило: на странице может быть ТОЛЬКО ОДИН видимый тег `<main>` (он не должен содержать повторяющиеся шапки, футеры или сайдбары)!\n\n4. `<article>` vs `<section>` vs `<div>`:\n- `<article>` — **автономный, самодостаточный материал**, который имеет смысл сам по себе и может быть повторно опубликован на другом ресурсе (пост в блоге, новость, карточка товара, комментарий).\n- `<section>` — **тематический смысловой раздел документа**, который ОБЯЗАТЕЛЬНО должен иметь собственный заголовок (`<h2>`–`<h6>`). Не используйте `<section>` как простую обертку для стилей!\n- `<div>` — чисто визуальный контейнер без семантического значения (для стилизации Flexbox/Grid, анимаций и оберток).\n\n5. `<aside>` — контент, косвенно связанный с основным (сайдбар, блок «Похожие статьи», список популярных тегов, рекламный баннер).\n\n6. `<footer>` — завершающая часть страницы или статьи (копирайты, юридическая информация, ссылки на соцсети, информация об авторе).",
          "codeExample": {
            "language": "html",
            "code": "<div class=\"layout-grid\">\n  <!-- 1. Основной поток статьи -->\n  <main>\n    <article class=\"blog-post\">\n      <h1>Архитектура Feature-Sliced Design</h1>\n      <section class=\"content-section\">\n        <h2>Слои приложения</h2>\n        <p>FSD делит кодовую базу на 6 слоев...</p>\n      </section>\n      <section class=\"comments-section\">\n        <h2>Комментарии (2)</h2>\n        <article class=\"comment\">\n          <h4>Иван Иванов</h4>\n          <p>Отличная статья, внедряем на проекте!</p>\n        </article>\n      </section>\n    </article>\n  </main>\n\n  <!-- 2. Боковая панель -->\n  <aside class=\"sidebar\" aria-label=\"Дополнительные материалы\">\n    <section class=\"related-posts\">\n      <h3>Похожие статьи</h3>\n      <ul>\n        <li><a href=\"/fsd-vs-clean\">FSD vs Clean Architecture</a></li>\n      </ul>\n    </section>\n  </aside>\n</div>",
            "title": "Вложенность article, section и aside внутри main",
            "explanation": "Каждый комментарий размечен как отдельный вложенный <article>. Секции содержат смысловые заголовки h2/h3. aside вынесен в сайдбар."
          }
        },
        {
          "title": "Специализированные смысловые теги: time, address, figure, details/summary",
          "content": "HTML5 содержит богатый набор микро-семантических элементов:\n\n1. `<time datetime=\"2026-08-19T14:00:00Z\">19 августа 2026</time>`:\n- Атрибут `datetime` задает машиночитаемый формат ISO 8601.\n- Позволяет календарям и поисковым роботам безошибочно определять дату публикации статьи или проведения вебинара.\n\n2. `<address>`:\n- Содержит контактную информацию автора статьи или владельца сайта (email, телефон, физический адрес, ссылка на профиль).\n\n3. `<figure>` и `<figcaption>`:\n- Семантическая обертка для иллюстраций, графиков, диаграмм или фрагментов кода с официальной подписью `<figcaption>`.\n\n4. `<details>` и `<summary>` (Нативный аккордеон без JavaScript!):\n- `<details><summary>Часто задаваемые вопросы</summary><p>Ответ на вопрос...</p></details>`.\n- Браузер нативно сворачивает/разворачивает контент по клику и поддерживает атрибут `open`.\n\n5. `<mark>` — подсветка совпадений поискового запроса в тексте.\n6. `<dialog>` — нативное модальное окно с методами `.showModal()` и `.close()`.",
          "codeExample": {
            "language": "html",
            "code": "<!-- 1. Иллюстрация с подписью -->\n<figure class=\"diagram-figure\">\n  <img src=\"/images/lessons/html-semantic-architecture.svg\" alt=\"Схема семантических тегов\" width=\"800\" height=\"440\" />\n  <figcaption>Рис. 1: Структурная схема разметки страницы HTML5</figcaption>\n</figure>\n\n<!-- 2. Нативный интерактивный FAQ (аккордеон) -->\n<section class=\"faq-section\">\n  <h2>FAQ для поступающих</h2>\n  <details>\n    <summary>Нужен ли опыт коммерческой разработки?</summary>\n    <p>Нет, программа рассчитана на уверенную базу HTML, CSS и JavaScript.</p>\n  </details>\n</section>\n\n<!-- 3. Контактный блок автора -->\n<footer>\n  <address>\n    Статью подготовил: <a href=\"mailto:lead@dev.ru\">Lead Frontend Architect</a><br />\n    Офис: г. Москва, ул. Разработчиков, д. 42\n  </address>\n</footer>",
            "title": "Использование figure/figcaption, details/summary и address",
            "explanation": "figure связывает изображение с подписью. details/summary создает интерактивный аккордеон без единой строчки JS. address размечает контакты."
          }
        },
        {
          "title": "WAI-ARIA ориентиры (Landmarks) и доступность клавиатуры",
          "content": "Спецификация WAI-ARIA (Accessible Rich Internet Applications) дополняет HTML5 ролями доступности:\n\n1. **Landmark Roles (Ориентиры страницы)**:\n- `<header>` неявно имеет `role=\"banner\"`.\n- `<nav>` неявно имеет `role=\"navigation\"`.\n- `<main>` неявно имеет `role=\"main\"`.\n- `<aside>` неявно имеет `role=\"complementary\"`.\n- `<footer>` неявно имеет `role=\"contentinfo\"`.\n- `<form role=\"search\">` — явная роль формы поиска.\n\n2. **Skip Links (Ссылка для пропуска навигации)**:\nПервый элемент в `<body>`: `<a href=\"#main-content\" class=\"skip-link\">Перейти к основному контенту</a>`.\nПозволяет незрячим пользователям и людям, управляющим сайтом с клавиатуры (`Tab`), мгновенно перепрыгнуть через 50 ссылок меню прямо к чтению статьи!\n\n3. Правило доступных кнопок и ссылок:\n- `<button>` — выполняет действие на текущей странице (открыть модалку, добавить в корзину, отправить форму).\n- `<a>` — осуществляет ПЕРЕХОД по URL адресу (на новую страницу или якорь `#section`).\n- ❌ Никогда не делайте `<div onclick=\"...\">` или `<a href=\"javascript:void(0)\">`!",
          "codeExample": {
            "language": "html",
            "code": "<body>\n  <!-- 1. Ссылка быстрого перехода для доступности (Skip Link) -->\n  <a href=\"#main-article\" class=\"skip-link\">Перейти к контенту (Tab)</a>\n\n  <header role=\"banner\">\n    <!-- 2. Форма поиска с явной ролью search -->\n    <form role=\"search\" action=\"/search\" method=\"GET\">\n      <label for=\"search-input\" class=\"visually-hidden\">Поиск по платформе:</label>\n      <input id=\"search-input\" type=\"search\" name=\"q\" placeholder=\"Поиск уроков...\" />\n      <button type=\"submit\">Найти</button>\n    </form>\n  </header>\n\n  <main id=\"main-article\" role=\"main\" tabindex=\"-1\">\n    <!-- Контент -->\n  </main>\n</body>\n\n<style>\n  /* Skip-link видна ТОЛЬКО при фокусе с клавиатуры */\n  .skip-link {\n    position: absolute;\n    top: -100px;\n    left: 16px;\n    background: #2dff8a;\n    color: #0a0e13;\n    padding: 8px 16px;\n    font-weight: bold;\n    z-index: 9999;\n  }\n  .skip-link:focus {\n    top: 16px;\n  }\n</style>",
            "title": "Реализация Skip-Link и формы поиска role='search'",
            "explanation": "Skip Link появляется в левом верхнем углу при первом нажатии клавиши Tab, позволяя пропустить шапку и сразу перейти к тегу main."
          }
        }
      ],
      "seniorTips": [
        "Строго соблюдайте иерархию заголовков: ровно один `<h1>` на страницу, разделы второго уровня размечаются `<h2>`, подразделы — `<h3>`. Никогда не перепрыгивайте уровни (например, с h1 сразу на h4) ради размера шрифта (размер меняется в CSS!).",
        "Используйте `<article>` для карточек товаров в каталоге и комментариев — это автономные блоки, которые скринридеры воспринимают как отдельные сущности.",
        "Добавляйте Skip Link (`<a href=\"#main\" class=\"skip-link\">`) в самом начале `<body>` для мгновенной доступности с клавиатуры.",
        "Используйте тег `<time datetime=\"2026-08-19\">` для всех дат — это улучшает Rich Snippets в поисковых системах Google и Яндекс."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Множественные h1 на странице -->\n<section><h1>Новости</h1></section>\n<section><h1>Статьи</h1></section>",
          "good": "<h1>Блог Академии</h1>\n<section><h2>Новости</h2></section>\n<section><h2>Статьи</h2></section>",
          "reason": "Множественные h1 разрушают структуру документа для скринридеров и ухудшают SEO-индексацию. Тег h1 должен быть строго один."
        },
        {
          "bad": "<!-- div с onclick вместо кнопки или ссылки -->\n<div class=\"btn\" onclick=\"openModal()\">Подробнее</div>",
          "good": "<button type=\"button\" class=\"btn\" onclick=\"openModal()\">Подробнее</button>",
          "reason": "div недоступен с клавиатуры (на него нельзя нажать Tab или Enter) и не распознается скринридером как интерактивный элемент."
        },
        {
          "bad": "<!-- Использование section без заголовка -->\n<section class=\"sidebar-wrapper\"><p>Рекламный блок</p></section>",
          "good": "<aside aria-label=\"Реклама\"><p>Рекламный блок</p></aside>",
          "reason": "Тег section по спецификации обязан иметь смысловой заголовок (h2-h6). Для сайдбаров и рекламы предназначен aside, а для декораций — div."
        }
      ],
      "keyTakeaways": [
        "`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` задают семантическую структуру веб-страницы.",
        "На странице должен быть строго один тег `<main>` и строго один тег `<h1>`.",
        "`<article>` — для независимого контента (посты, карточки, комментарии), `<section>` — для тематических блоков с заголовками.",
        "`<time datetime=\"...\">` связывает отображаемую дату с машиночитаемым форматом ISO 8601.",
        "Skip Link и правильные Landmark роли обеспечивают высший уровень доступности WCAG 2.2."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"semantic-preview\">\n  <header style=\"background:#161b22; padding:12px; border-bottom:1px solid #30363d;\">\n    <h1 style=\"color:#2dff8a; font-size:18px; margin:0;\">Семантический Блог</h1>\n    <nav style=\"margin-top:8px;\">\n      <a href=\"#\" style=\"color:#29e7ff; margin-right:12px;\">Главная</a>\n      <a href=\"#\" style=\"color:#29e7ff;\">Статьи</a>\n    </nav>\n  </header>\n  <main style=\"padding:16px;\">\n    <article style=\"background:#0d1117; border:1px solid #30363d; border-radius:6px; padding:16px;\">\n      <h2 style=\"color:#e6edf3; font-size:16px; margin-top:0;\">Архитектура Web-приложений 2026</h2>\n      <time datetime=\"2026-08-19\" style=\"color:#8b949e; font-size:12px;\">19 августа 2026</time>\n      <p style=\"color:#8b949e; font-size:13px; margin:8px 0;\">Семантика улучшает a11y и SEO...</p>\n      <details style=\"margin-top:12px; color:#2dff8a; cursor:pointer;\">\n        <summary>Подробнее о преимуществах</summary>\n        <p style=\"color:#e6edf3; font-size:12px; margin-top:6px;\">Поддержка скринридеров, Safari Reader Mode и снижение расходов на SEO.</p>\n      </details>\n    </article>\n  </main>\n</div>",
      "initialCss": ".semantic-preview { font-family: monospace; color: #e6edf3; background: #0a0e13; border-radius: 8px; overflow: hidden; }",
      "initialJs": "console.log('Песочница семантики готова');",
      "instructions": "Практика с семантикой:\n1. Кликните по элементу <details> — проверьте нативное раскрытие аккордеона\n2. Добавьте боковую панель <aside> с блоком похожих статей\n3. Добавьте подвал <footer> с тегом <address>"
    },
    "task": {
      "title": "Верстка эталонного семантического макета статьи блога с комментариями и FAQ",
      "scenario": "Вам необходимо сверстать страницу публикации в блоге: разметка должна содержать Skip Link, header с навигацией, единственный main, статью article с заголовком h1 и временем time datetime, секции section с заголовками h2, вложенные карточки комментариев article, сайдбар aside, интерактивный FAQ на details/summary и подвал footer с address.",
      "criteria": [
        "Присутствует Skip Link в начале документа для перехода к #main-content",
        "Присутствует ровно один тег <main id='main-content'> и ровно один <h1>",
        "Статья размечена в <article> с указанием даты через <time datetime='...'>",
        "Секции комментариев и FAQ содержат заголовки <h2>",
        "Каждый комментарий размечен как отдельный вложенный <article>",
        "Присутствует <aside> для боковой панели и <footer> с тегом <address>"
      ],
      "starterCode": {
        "html": "<!-- Разработайте эталонную семантическую страницу -->\n<body>\n</body>"
      },
      "hints": [
        "В начале: <a href='#main-content' class='skip-link'>Перейти к контенту</a>",
        "Используйте <time datetime='2026-08-19T10:00:00Z'>19 августа 2026</time>",
        "Для контактов: <footer><address>...</address></footer>"
      ],
      "solution": {
        "html": "<body>\n  <a href=\"#main-content\" class=\"skip-link\">Перейти к основному контенту</a>\n\n  <header role=\"banner\">\n    <a href=\"/\" class=\"brand-logo\">DevPortal</a>\n    <nav role=\"navigation\" aria-label=\"Основное меню\">\n      <ul>\n        <li><a href=\"/\">Главная</a></li>\n        <li><a href=\"/articles\">Статьи</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <div class=\"page-layout\">\n    <main id=\"main-content\" role=\"main\">\n      <article class=\"post-entry\">\n        <header class=\"post-header\">\n          <h1>Глубокое погружение в семантическую верстку</h1>\n          <p>Опубликовано: <time datetime=\"2026-08-19T10:00:00Z\">19 августа 2026</time></p>\n        </header>\n\n        <section>\n          <h2>Зачем нужна семантика</h2>\n          <p>Семантический HTML делает сайт доступным для всех пользователей...</p>\n        </section>\n\n        <section class=\"faq-block\">\n          <h2>Частые вопросы</h2>\n          <details>\n            <summary>Что важнее: div или section?</summary>\n            <p>Section используется для смысловых блоков с заголовками, а div — для чистого CSS.</p>\n          </details>\n        </section>\n\n        <section class=\"comments-block\">\n          <h2>Комментарии</h2>\n          <article class=\"user-comment\">\n            <h3>Михаил С.</h3>\n            <p>Спасибо за отличный структурированный материал!</p>\n          </article>\n        </section>\n      </article>\n    </main>\n\n    <aside aria-label=\"Связанный контент\">\n      <section>\n        <h3>Популярное за неделю</h3>\n        <ul>\n          <li><a href=\"#\">Flexbox vs Grid</a></li>\n        </ul>\n      </section>\n    </aside>\n  </div>\n\n  <footer role=\"contentinfo\">\n    <address>\n      Контакты редакции: <a href=\"mailto:editor@devportal.ru\">editor@devportal.ru</a>\n    </address>\n    <p>&copy; 2026 DevPortal. Все права защищены.</p>\n  </footer>\n</body>",
        "explanation": "Разметка безупречно семантична: Skip Link, единственный main и h1, article с time, секции с h2, вложенные article для комментариев, aside, details/summary и footer с address."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html10-q1",
          "question": "Сколько тегов <main> и <h1> должно быть на одной HTML-странице по стандартам W3C и SEO?",
          "options": [
            "Сколько угодно",
            "Строго по одному тегу <main> (уникальный контент) и строго по одному <h1> (главная тема документа)",
            "Ровно 5",
            "Минимум 3"
          ],
          "correctIndex": 1,
          "explanation": "По спецификации HTML5 и правилам SEO страница должна иметь ровно один <main> и один <h1>, задающий тему документа."
        },
        {
          "id": "html10-q2",
          "question": "В чём принципиальное различие между тегами <article> и <section>?",
          "options": [
            "Они одинаковые",
            "<article> — это самостоятельный, автономный материал (пост, карточка товара), а <section> — смысловой раздел документа с обязательным заголовком",
            "<section> используется только для видео",
            "<article> устарел"
          ],
          "correctIndex": 1,
          "explanation": "<article> самодостаточен (его можно вырезать и опубликовать отдельно). <section> группирует связанный контент внутри документа и требует заголовка."
        },
        {
          "id": "html10-q3",
          "question": "Зачем в теге <time> указывать атрибут datetime='2026-08-19T14:00:00Z'?",
          "options": [
            "Для изменения цвета текста",
            "Предоставляет дату в стандартном машиночитаемом формате ISO 8601 для поисковых систем, календарей и скринридеров",
            "Для автоматического запуска таймера",
            "Для перевода времени в секунды"
          ],
          "correctIndex": 1,
          "explanation": "Атрибут datetime переводит дату в формат ISO 8601, понятный роботам поисковиков (для сниппетов) и программам чтения."
        },
        {
          "id": "html10-q4",
          "question": "Что такое Skip Link в веб-разработке и какую проблему доступности она решает?",
          "options": [
            "Ссылка для пропуска рекламы на YouTube",
            "Скрытая ссылка в самом начале страницы, позволяющая пользователям с клавиатурой (Tab) и скринридерами пропустить повторяющуюся шапку и сразу перейти к <main>",
            "Кнопка быстрого закрытия сайта",
            "Скрипт для ускорения загрузки"
          ],
          "correctIndex": 1,
          "explanation": "Skip Link — ключевой стандарт WCAG: позволяет человеку с клавиатурой нажать Tab и сразу перейти к основному тексту, не прокликивая 50 ссылок меню."
        },
        {
          "id": "html10-q5",
          "question": "Какой HTML5 тег позволяет создать раскрывающийся аккордеон (FAQ) нативно БЕЗ единой строчки JavaScript?",
          "options": [
            "<accordion> и <item>",
            "<details> с вложенным заголовком <summary>",
            "<toggle> и <content>",
            "<dropdown>"
          ],
          "correctIndex": 1,
          "explanation": "Связка <details><summary>Заголовок</summary><p>Контент</p></details> поддерживается всеми браузерами нативно без JavaScript."
        }
      ]
    }
  },
  {
    "id": "html-11",
    "moduleId": "html",
    "level": 11,
    "title": "Микроразметка, SEO и продвинутые метаданные",
    "subtitle": "Schema.org (JSON-LD), Open Graph, Canonical URL, robots.txt, sitemap.xml и Rich Snippets",
    "description": "Завершите трек HTML5 профессиональным освоением микроразметки и технического SEO: внедрение Schema.org через JSON-LD (Course, Article, Product, FAQPage), генерация расширенных сниппетов (Rich Snippets) в Google/Яндекс, полный стек Open Graph и Twitter Cards, защита от дублей через Canonical URL и настройка robots.txt/sitemap.xml.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "seo",
      "schema-org",
      "json-ld",
      "open-graph",
      "rich-snippets",
      "canonical",
      "robots-txt",
      "sitemap"
    ],
    "theory": {
      "overview": "Поздравляем с выходом на финальный 11-й уровень трека HTML5! На этом этапе вы уже умеете писать чистую, семантичную и доступную разметку. Финальный шаг — сделать сайт видимым для алгоритмов поисковых систем и привлекательным для пользователей в социальных сетях.\n\nВ этом уроке мы изучим семантическую микроразметку по стандарту **Schema.org** с использованием формата **JSON-LD** (рекомендованного Google), настроим расширенные сниппеты (звёзды рейтинга, цены, вопросы FAQ прямо в поиске), внедрим протокол **Open Graph** для идеального шеринга в Telegram, VK и Twitter, а также разберём технические файлы `robots.txt` и `sitemap.xml`.",
      "sections": [
        {
          "title": "Что такое микроразметка и зачем бизнесу Rich Snippets",
          "content": "Поисковые роботы видят текст страницы, но не всегда понимают его точный смысл: где здесь цена, где отзывы, а где дата проведения вебинара.\n\n1. Что дает семантическая микроразметка:\n- **Rich Snippets (Расширенные сниппеты)**: в поисковой выдаче Google и Яндекс под ссылкой на ваш сайт появляются звёздочки рейтинга (⭐️ 4.9/5), количество отзывов, цена товара («от 4 500 ₽»), статус «В наличии», раскрывающиеся ответы FAQ или видео-превью.\n- **Рост CTR (Click-Through Rate)**: карточки с расширенными сниппетами получают на **+30–35% больше кликов** из органического поиска при тех же позициях!\n\n2. Стандарты микроразметки:\n- **JSON-LD (JavaScript Object Notation for Linked Data)** — СОВРЕМЕННЫЙ ЗОЛОТОЙ СТАНДАРТ (рекомендован Google). Разметка размещается в отдельном блоке `<script type=\"application/ld+json\">` в `<head>` или в конце `<body>`, не смешиваясь с визуальным HTML-кодом!\n- **Microdata (itemscope, itemtype, itemprop)** — устаревший подход, загромождающий атрибутами обычные HTML-теги.\n- **Open Graph (OG)** — стандарт метаданных для социальных сетей и мессенджеров.",
          "image": {
            "src": "/images/lessons/html-microdata-seo.svg",
            "alt": "Микроразметка Schema.org JSON-LD, Open Graph и SEO оптимизация",
            "caption": "Schema.org через JSON-LD формирует привлекательные Rich Snippets со звёздами рейтинга, Open Graph генерирует превью в соцсетях, а Canonical защищает от дублей"
          },
          "codeExample": {
            "language": "html",
            "code": "<!-- Пример Schema.org JSON-LD разметки обучающего курса -->\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Course\",\n  \"name\": \"Frontend Intern: От Стажёра до Джуниора\",\n  \"description\": \"Интерактивная платформа обучения фронтенд-разработке с тренажёрами.\",\n  \"provider\": {\n    \"@type\": \"Organization\",\n    \"name\": \"Frontend Intern Academy\",\n    \"sameAs\": \"https://frontend-intern.dev\"\n  },\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"4.9\",\n    \"ratingCount\": \"148\",\n    \"bestRating\": \"5\"\n  },\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"price\": \"0\",\n    \"priceCurrency\": \"RUB\",\n    \"availability\": \"https://schema.org/InStock\"\n  }\n}\n</script>",
            "title": "Разметка курса через Schema.org JSON-LD",
            "explanation": "Блок JSON-LD сообщает поисковому роботу Google/Яндекс тип сущности Course, рейтинг 4.9 из 5 и бесплатную стоимость, формируя богатый сниппет в выдаче."
          }
        },
        {
          "title": "Популярные схемы Schema.org: Course, Article, Product и FAQPage",
          "content": "Ключевые типы данных Schema.org для коммерческих сайтов:\n\n1. **`FAQPage` (Вопросы и ответы)**:\nПозволяет отображать гармошку вопросов и ответов прямо в результатах поиска Google под ссылкой на сайт!\n```json\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [{\n    \"@type\": \"Question\",\n    \"name\": \"Сколько длится стажировка?\",\n    \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Программа рассчитана на 60 часов.\" }\n  }]\n}\n```\n\n2. **`Article` / `BlogPosting`**:\nРазмечает статьи блога: заголовок `headline`, автор `author`, дата публикации `datePublished`, логотип издателя `publisher`.\n\n3. **`Product` (Интернет-магазины)**:\nРазмечает карточки товаров: название, изображение, бренд, отзывы `review`, цену и статус наличия `offers`.\n\n4. **`BreadcrumbList` (Хлебные крошки)**:\nПоисковик показывает красивую навигационную цепочку: `site.dev › Каталог › Frontend › React` вместо длинного URL.",
          "codeExample": {
            "language": "json",
            "code": "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 1,\n      \"name\": \"Главная\",\n      \"item\": \"https://frontend-intern.dev\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 2,\n      \"name\": \"Курсы\",\n      \"item\": \"https://frontend-intern.dev/courses\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 3,\n      \"name\": \"HTML5 Master\",\n      \"item\": \"https://frontend-intern.dev/courses/html\"\n    }\n  ]\n}",
            "title": "Разметка хлебных крошек (BreadcrumbList) в JSON-LD",
            "explanation": "Хлебные крошки отображаются в сниппете поиска в виде понятного иерархического пути по разделам сайта."
          }
        },
        {
          "title": "Протокол Open Graph и Twitter Cards для шеринга в соцсетях",
          "content": "Когда пользователь отправляет ссылку на ваш сайт в Telegram, WhatsApp, VK или Twitter, мессенджер парсит мета-теги Open Graph в `<head>`:\n\n1. Обязательные теги Open Graph (`og:`):\n- `<meta property=\"og:title\" content=\"Заголовок статьи\" />`\n- `<meta property=\"og:description\" content=\"Краткое описание...\" />`\n- `<meta property=\"og:type\" content=\"website | article | product\" />`\n- `<meta property=\"og:url\" content=\"https://site.dev/page\" />`\n- `<meta property=\"og:image\" content=\"https://site.dev/og-banner.png\" />` (СТРОГО абсолютный URL! Рекомендуемый размер: **1200 × 630 px**).\n\n2. Twitter Cards (`twitter:`):\n- `<meta name=\"twitter:card\" content=\"summary_large_image\" />` (большой привлекательный баннер).\n- `<meta name=\"twitter:title\" content=\"...\" />`\n- `<meta name=\"twitter:image\" content=\"...\" />`\n\n3. Favicon стек и PWA Manifest:\n- `<link rel=\"icon\" href=\"/favicon.ico\" sizes=\"32x32\" />`\n- `<link rel=\"icon\" href=\"/icon.svg\" type=\"image/svg+xml\" />` (векторный SVG favicon!)\n- `<link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\" />` (для экрана iPhone).\n- `<meta name=\"theme-color\" content=\"#0a0e13\" />` (окрашивает шапку браузера на смартфонах).",
          "codeExample": {
            "language": "html",
            "code": "<head>\n  <!-- 1. Базовые SEO теги -->\n  <title>Frontend Intern Academy — Платформа для стажёров</title>\n  <meta name=\"description\" content=\"Интерактивная платформа обучения фронтенд-разработке с тренажёрами.\" />\n\n  <!-- 2. Open Graph (Telegram, VK, Facebook) -->\n  <meta property=\"og:site_name\" content=\"Frontend Intern Academy\" />\n  <meta property=\"og:title\" content=\"Frontend Intern Academy — Обучение фронтенду\" />\n  <meta property=\"og:description\" content=\"Тренажеры, теория уровня Senior и автопроверка кода.\" />\n  <meta property=\"og:image\" content=\"https://frontend-intern.dev/images/og-preview.png\" />\n  <meta property=\"og:image:width\" content=\"1200\" />\n  <meta property=\"og:image:height\" content=\"630\" />\n  <meta property=\"og:type\" content=\"website\" />\n\n  <!-- 3. Twitter Card -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\" />\n  <meta name=\"twitter:title\" content=\"Frontend Intern Academy\" />\n  <meta name=\"twitter:image\" content=\"https://frontend-intern.dev/images/og-preview.png\" />\n</head>",
            "title": "Полный комплект мета-тегов Open Graph и Twitter Cards",
            "explanation": "При отправке ссылки в Telegram или VK отобразится сочный баннер 1200x630, заголовок и описание проекта."
          }
        },
        {
          "title": "Техническое SEO: Canonical URL, robots.txt и sitemap.xml",
          "content": "Инфраструктурные аспекты поисковой оптимизации:\n\n1. **Канонический URL (`rel=\"canonical\"`)**:\n- Проблема: одна и та же страница доступна по разным адресам (`site.dev/course`, `site.dev/course?ref=tg`, `site.dev/course?utm_source=vk`). Поисковик считает это дублями и снижает позиции сайта!\n- Решение: `<link rel=\"canonical\" href=\"https://site.dev/course\" />` на каждой версии страницы сообщает роботу, какой URL является главным эталоном.\n\n2. **Файл `robots.txt`** (в корне сайта `/robots.txt`):\n- Сообщает поисковым роботам, какие разделы сайта МОЖНО или НЕЛЬЗЯ индексировать:\n```text\nUser-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nDisallow: /checkout/\nSitemap: https://site.dev/sitemap.xml\n```\n\n3. **Карта сайта `sitemap.xml`**:\n- XML-список всех страниц сайта с датами их последнего обновления (`<lastmod>`), приоритетом (`<priority>`) и частотой изменения (`<changefreq>`). Помогает роботам быстро обойти весь контент.",
          "codeExample": {
            "language": "html",
            "code": "<!-- 1. Канонический URL в теге head -->\n<link rel=\"canonical\" href=\"https://frontend-intern.dev/catalog/javascript\" />\n\n<!-- 2. Мета-тег управления роботами для служебных страниц -->\n<meta name=\"robots\" content=\"noindex, nofollow\" />\n<!-- noindex запрещает показ страницы в поиске, nofollow запрещает переход по ссылкам -->",
            "title": "Использование rel='canonical' и meta robots",
            "explanation": "rel='canonical' объединяет ссылочный вес со всех дублей и UTM-меток, а noindex скрывает приватные страницы корзины и админки от индексации."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте JSON-LD формат для Schema.org разметки вместо устаревших атрибутов Microdata — JSON-LD легче генерировать, тестировать и поддерживать.",
        "Для мета-тега `og:image` ВСЕГДА указывайте полный абсолютный URL (с `https://`), а не относительный путь `/og.png`, иначе Telegram и мессенджеры не смогут загрузить картинку.",
        "Добавляйте `<link rel=\"canonical\">` на ВСЕ страницы сайта — это предотвращает потерю позиций из-за дублей с рекламными UTM-метками.",
        "Валидируйте разметку в официальном валидаторе Google Rich Results Test (https://search.google.com/test/rich-results) перед релизом в продакшн."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- Относительный путь в og:image -->\n<meta property=\"og:image\" content=\"/images/banner.jpg\" />",
          "good": "<meta property=\"og:image\" content=\"https://site.dev/images/banner.jpg\" />",
          "reason": "Спецификация Open Graph строго требует абсолютный URL с протоколом https://. Мессенджеры проигнорируют относительный путь."
        },
        {
          "bad": "<!-- Отсутствие canonical на страницах с UTM -->\n<!-- Пользователь переходит по ?utm_source=tg, и поисковик индексирует дубль -->",
          "good": "<link rel=\"canonical\" href=\"https://site.dev/articles/css-grid\" />",
          "reason": "Без canonical поисковые системы считают каждую страницу с UTM-меткой отдельным дублем, размывая ссылочный вес."
        },
        {
          "bad": "<!-- Синтаксическая ошибка в JSON-LD (лишняя запятая в конце) -->\n{\n  \"name\": \"Курс\",\n  \"price\": \"0\",\n}",
          "good": "{\n  \"name\": \"Курс\",\n  \"price\": \"0\"\n}",
          "reason": "JSON-LD является строгим JSON форматом. Лишняя запятая перед закрывающей фигурной скобкой приводит к ошибке парсинга роботом."
        }
      ],
      "keyTakeaways": [
        "Schema.org через JSON-LD формирует привлекательные Rich Snippets (звёзды, цены, FAQ) в поиске Google/Яндекс.",
        "Open Graph и Twitter Cards создают красивые карточки-превью со ссылками в Telegram, VK и соцсетях.",
        "`rel=\"canonical\"` защищает от дублей страниц с рекламными метками и объединяет ссылочный вес.",
        "`robots.txt` управляет доступом роботов, а `sitemap.xml` ускоряет индексацию всех страниц.",
        "Поздравляем с полным прохождением всех 11 уровней трека HTML5!"
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"seo-sandbox\">\n  <h3>Превью сниппета в поиске Google</h3>\n  <div class=\"google-card\">\n    <div class=\"url\">https://frontend-intern.dev › courses › web-dev</div>\n    <div class=\"title\">Frontend Intern Academy: Курсы для стажёров 2026</div>\n    <div class=\"rating\">⭐️⭐️⭐️⭐️⭐️ Рейтинг: 4.9 • 148 отзывов • Бесплатно</div>\n    <div class=\"desc\">Интерактивная платформа обучения фронтенд-разработке с тренажёрами, теорией и автопроверкой заданий.</div>\n  </div>\n</div>",
      "initialCss": ".seo-sandbox { padding: 16px; background: #0a0e13; font-family: monospace; color: #e6edf3; border-radius: 8px; }\n.google-card { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 16px; margin-top: 10px; }\n.google-card .url { font-size: 11px; color: #8b949e; }\n.google-card .title { font-size: 16px; color: #29e7ff; font-weight: bold; margin: 4px 0; }\n.google-card .rating { font-size: 12px; color: #ffb02e; margin-bottom: 6px; }\n.google-card .desc { font-size: 13px; color: #8b949e; }",
      "initialJs": "console.log('Песочница SEO и микроразметки активна');",
      "instructions": "Практика с SEO:\n1. Изучите, как данные из JSON-LD превращаются в Rich Snippet\n2. Добавьте в JSON-LD разметку FAQPage с вопросом и ответом\n3. Настройте Open Graph теги для шеринга в Telegram"
    },
    "task": {
      "title": "Внедрение полного пакета SEO, Open Graph и Schema.org JSON-LD микроразметки",
      "scenario": "Вам необходимо оформить head-секцию и микроразметку для лендинга курса: настроить title, description, канонический URL, мета-теги Open Graph (title, description, absolute image, url) и блок Schema.org JSON-LD с типом Course (название, провайдер, рейтинг 4.9 и бесплатное предложение).",
      "criteria": [
        "Присутствуют базовые теги title, description и rel='canonical'",
        "Настроен полный стек Open Graph тегов с абсолютным URL картинки",
        "Присутствует Twitter Card тег summary_large_image",
        "Внедрен блок <script type='application/ld+json'> с валидным JSON-LD",
        "JSON-LD размечает сущность Course со свойствами name, provider, aggregateRating и offers"
      ],
      "starterCode": {
        "html": "<head>\n  <!-- Настройте метаданные и JSON-LD -->\n</head>"
      },
      "hints": [
        "Используйте <link rel='canonical' href='https://site.dev/course' />",
        "Для Open Graph: <meta property='og:image' content='https://site.dev/og.png' />",
        "В JSON-LD укажите @context: 'https://schema.org' и @type: 'Course'"
      ],
      "solution": {
        "html": "<head>\n  <meta charset=\"UTF-8\" />\n  <title>Курс Frontend-разработчик 2026 — Академия стажёров</title>\n  <meta name=\"description\" content=\"Интерактивное обучение фронтенд-разработке: HTML5, CSS3, JavaScript и Web Pro.\" />\n  <link rel=\"canonical\" href=\"https://frontend-intern.dev/courses/frontend\" />\n\n  <!-- Open Graph -->\n  <meta property=\"og:site_name\" content=\"Frontend Intern Academy\" />\n  <meta property=\"og:type\" content=\"website\" />\n  <meta property=\"og:url\" content=\"https://frontend-intern.dev/courses/frontend\" />\n  <meta property=\"og:title\" content=\"Курс Frontend-разработчик 2026 — Академия стажёров\" />\n  <meta property=\"og:description\" content=\"Обучение с нуля до оффера с тренажёрами и теорией.\" />\n  <meta property=\"og:image\" content=\"https://frontend-intern.dev/images/og-frontend.png\" />\n  <meta property=\"og:image:width\" content=\"1200\" />\n  <meta property=\"og:image:height\" content=\"630\" />\n\n  <!-- Twitter Card -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\" />\n  <meta name=\"twitter:title\" content=\"Курс Frontend-разработчик 2026\" />\n  <meta name=\"twitter:image\" content=\"https://frontend-intern.dev/images/og-frontend.png\" />\n\n  <!-- Schema.org JSON-LD -->\n  <script type=\"application/ld+json\">\n  {\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"Frontend-разработчик 2026\",\n    \"description\": \"Полный курс подготовки фронтенд-инженеров.\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"Frontend Intern Academy\"\n    },\n    \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"4.9\",\n      \"reviewCount\": \"148\"\n    },\n    \"offers\": {\n      \"@type\": \"Offer\",\n      \"price\": \"0\",\n      \"priceCurrency\": \"RUB\",\n      \"availability\": \"https://schema.org/InStock\"\n    }\n  }\n  </script>\n</head>",
        "explanation": "Разметка полностью укомплектована для поисковиков и соцсетей: canonical предотвращает дублирование, Open Graph генерирует превью в Telegram/VK, а JSON-LD формирует Rich Snippet с рейтингом в Google."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "html11-q1",
          "question": "Какой формат микроразметки Schema.org официально рекомендован Google и поисковыми системами?",
          "options": [
            "Microformats",
            "JSON-LD (<script type='application/ld+json'>)",
            "Microdata в атрибутах тегов",
            "RDFa"
          ],
          "correctIndex": 1,
          "explanation": "Google официально рекомендует формат JSON-LD, так как он изолирован в теге script, легко генерируется сервером и не ломается при изменении HTML верстки."
        },
        {
          "id": "html11-q2",
          "question": "Почему в мета-теге <meta property='og:image'> ОБЯЗАТЕЛЬНО указывать абсолютный URL (с https://)?",
          "options": [
            "Чтобы картинка не сжималась",
            "Мессенджеры (Telegram, WhatsApp) и соцсети парсят метаданные со сторонних серверов и не знают базовый домен сайта, поэтому относительные пути (/og.png) не загружаются",
            "Относительные пути запрещены в HTML5",
            "Для ускорения анимации"
          ],
          "correctIndex": 1,
          "explanation": "Боты социальных сетей и мессенджеров требуют полный абсолютный URL протокола Open Graph, иначе изображение в превью ссылки не отобразится."
        },
        {
          "id": "html11-q3",
          "question": "Какую проблему решает тег <link rel='canonical' href='...'>?",
          "options": [
            "Ускоряет работу JavaScript",
            "Предотвращает появление дублей страниц в поиске (из-за параметров ?utm_source=..., сортировок и слешей) и объединяет ссылочный вес на эталонном URL",
            "Шифрует пароли пользователей",
            "Создает карту сайта"
          ],
          "correctIndex": 1,
          "explanation": "Canonical указывает поисковику главный канонический URL документа, защищая сайт от санкций за дублирование контента при рекламных кампаниях с UTM-метками."
        },
        {
          "id": "html11-q4",
          "question": "Какой тип Schema.org позволяет отображать раскрывающийся блок вопросов и ответов прямо в сниппете поисковой выдачи Google?",
          "options": [
            "QnAPage",
            "FAQPage",
            "AccordionList",
            "AnswerBlock"
          ],
          "correctIndex": 1,
          "explanation": "Схема FAQPage размечает сущности Question и Answer, позволяя поисковикам выводить раскрывающиеся ответы прямо под ссылкой на сайт в результатах поиска."
        },
        {
          "id": "html11-q5",
          "question": "Что произойдет, если в файле robots.txt указать директиву Disallow: /admin/?",
          "options": [
            "Папка admin удалится с сервера",
            "Поисковые роботы не будут сканировать и индексировать страницы, находящиеся по адресу /admin/",
            "Закроется доступ для всех пользователей",
            "Включится двухфакторная аутентификация"
          ],
          "correctIndex": 1,
          "explanation": "robots.txt с директивой Disallow: /admin/ запрещает поисковым краулерам заходить в административный раздел, экономя краулинговый бюджет и скрывая служебные страницы."
        }
      ]
    }
  }
];
