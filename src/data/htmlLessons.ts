import { Lesson } from '../types/curriculum';

export const htmlLessons: Lesson[] = [
  {
    "id": "html-1",
    "moduleId": "html",
    "level": 1,
    "title": "Знакомство с HTML",
    "subtitle": "Как устроен веб, клиент-серверная архитектура и роль HTML",
    "description": "Глубокое погружение в основы интернета: как работают браузеры, что такое DNS, HTTP/HTTPS, как строится DOM-дерево и почему HTML является фундаментом фронтенда.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "Web",
      "HTTP",
      "DOM",
      "Architecture"
    ],
    "theory": {
      "overview": "HTML (HyperText Markup Language — язык гипертекстовой разметки) — это базовый стандарт, на котором держится вся Всемирная паутина. Каждый раз, когда вы открываете любой сайт в браузере, от ленты новостей до сложнейшего банковского интерфейса, первым делом клиент загружает и парсит именно HTML-документ.\n\nHTML не является языком программирования — в нём нет переменных, циклов или математических функций. Это декларативный язык разметки, задача которого — описать структуру, смысл и иерархию элементов на странице. Он говорит браузеру: «это главный заголовок», «это абзац текста», «это навигационная ссылка», а «это форма авторизации пользователя».",
      "sections": [
        {
          "title": "Как браузер получает и открывает сайт (Клиент-Сервер)",
          "content": "Взаимодействие пользователя с сайтом строится по модели «Клиент — Сервер»:\n- 1. Пользователь вводит адрес (URL) в браузере, например `https://company.com`.\n- 2. Браузер обращается к DNS-серверу (Domain Name System), чтобы перевести доменное имя в цифровой IP-адрес сервера (например, 192.0.2.1).\n- 3. Устанавливается защищённое TCP-соединение и TLS-рукопожатие по протоколу HTTPS.\n- 4. Браузер отправляет HTTP-запрос (GET) на сервер.\n- 5. Сервер возвращает ответ со статус-кодом (200 OK) и телом ответа — строкой HTML-кода.\n- 6. Браузерный движок (Blink в Chrome, Gecko в Firefox, WebKit в Safari) начинает посимвольный парсинг полученного документа.",
          "codeExample": {
            "language": "html",
            "title": "Минимальный валидный HTML-документ",
            "code": "<!DOCTYPE html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Мой первый сайт</title>\n  </head>\n  <body>\n    <h1>Добро пожаловать в веб-разработку!</h1>\n    <p>Браузер прочитал этот HTML и отобразил текст.</p>\n  </body>\n</html>",
            "explanation": "DOCTYPE объявляет стандарт HTML5, html lang задает язык, head хранит метаданные для браузера, а body содержит видимый контент."
          }
        },
        {
          "title": "Что такое DOM (Document Object Model)",
          "content": "Браузер не может работать с голым текстом HTML напрямую. В процессе парсинга он преобразует текст HTML в древовидную объектную структуру в оперативной памяти — Document Object Model (DOM):\n- HTML-код превращается в набор узлов (Nodes) и элементов (Elements).\n- Корнем дерева всегда является объект `document` (и тег `<html>`).\n- Каждый вложенный тег становится дочерним узлом (Child Node).\n- JavaScript взаимодействует со страницей именно через DOM, динамически добавляя, удаляя и модифицируя элементы.",
          "codeExample": {
            "language": "html",
            "title": "Иерархия тегов и вложенность DOM",
            "code": "<div class=\"user-card\">\n  <h2 class=\"user-name\">Иван Иванов</h2>\n  <p class=\"user-role\">Frontend Developer</p>\n</div>",
            "explanation": "Элемент <div> является родителем (parent) для <h2> и <p>, которые являются соседями (siblings) в DOM-дереве."
          }
        },
        {
          "title": "Анатомия HTML-элемента: Теги, контент и атрибуты",
          "content": "Элемент состоит из открывающего тега, атрибутов, текстового или вложенного содержимого и закрывающего тега:\n- Открывающий тег: `<tagname>` — сообщает браузеру о начале элемента.\n- Атрибуты: `name=\"value\"` — дополнительные свойства и настройки элемента (например, `class`, `id`, `src`, `href`).\n- Содержимое: текст или другие теги внутри.\n- Закрывающий тег: `</tagname>` — завершает границы элемента.\n- Одиночные (Void) теги: не имеют закрывающего тега и содержимого (`<meta>`, `<img>`, `<input>`, `<br>`, `<hr>`).",
          "codeExample": {
            "language": "html",
            "title": "Пример тега с атрибутами",
            "code": "<a href=\"https://google.com\" target=\"_blank\" class=\"external-link\" title=\"Перейти в Google\">\n  Поисковая система Google\n</a>",
            "explanation": "Тег <a> (ссылка) содержит атрибут href (адрес), target (открытие в новой вкладке), class (для стилей) и всплывающую подсказку title."
          }
        }
      ],
      "seniorTips": [
        "Всегда соблюдайте строгую вложенность тегов (LIFO: Last In, First Out). Нельзя закрывать родительский тег раньше дочернего.",
        "Имена тегов и стандартных атрибутов всегда пишите в нижнем регистре (lowercase) — это индустриальный стандарт.",
        "Значения всех атрибутов всегда оборачивайте в двойные кавычки (например: class=\"card-title\")."
      ],
      "commonMistakes": [
        {
          "bad": "<h1>Заголовок <p>Текст абзаца</h1></p>",
          "good": "<h1>Заголовок</h1>\n<p>Текст абзаца</p>",
          "reason": "Перекрещивание тегов ломает построение DOM-дерева и заставляет браузер включать механизм исправления ошибок (Error Recovery)."
        },
        {
          "bad": "<IMG SRC=photo.jpg ALIGN=CENTER>",
          "good": "<img src=\"photo.jpg\" alt=\"Фотография профиля\" class=\"profile-photo\" />",
          "reason": "Теги в верхнем регистре и атрибуты без кавычек считаются устаревшим стилем 90-х годов и нарушают чистоту кода."
        }
      ],
      "keyTakeaways": [
        "HTML отвечает за структуру и смысл документа, а не за визуальное оформление.",
        "Браузер считывает HTML-код по протоколу HTTP и строит в памяти дерево DOM.",
        "Корректный синтаксис, правильная вложенность и указание DOCTYPE гарантируют стандартизированный рендеринг во всех браузерах."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"welcome-box\">\n  <h1>Привет, стажёр! 👋</h1>\n  <p>Это твоя первая интерактивная песочница.</p>\n  <p>Измени этот текст, нажми <strong>«Запустить»</strong> и наблюдай изменения в реальном времени!</p>\n  <button class=\"action-btn\">Нажми на меня</button>\n</div>",
      "initialCss": ".welcome-box {\n  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);\n  color: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4);\n}\nh1 { margin-top: 0; font-size: 22px; }\np { font-size: 14px; line-height: 1.6; opacity: 0.95; }\n.action-btn {\n  background: #ffffff; color: #4f46e5; border: none;\n  padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;\n}",
      "initialJs": "console.log('Песочница Уровня 1 готова к работе!');",
      "instructions": "Попробуйте изменить текст заголовка <h1>, добавить новый параграф <p> и нажать «Запустить»."
    },
    "task": {
      "title": "Создание визитки стажера",
      "scenario": "Вам необходимо создать персональную карточку-визитку стажёра на HTML с именем, должностью и кратким описанием целей обучения.",
      "criteria": [
        "Присутствует главный заголовок <h1> с вашим именем",
        "Использован параграф <p> с должностью «Junior Frontend Developer»",
        "Использован параграф <p> со списком ключевых технологий (HTML, CSS, JavaScript)"
      ],
      "starterCode": {
        "html": "<!-- Создайте карточку-визитку -->\n<div class=\"business-card\">\n  \n</div>",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте теги <h1>, <p> и <strong> для выделения ключевых слов.",
        "Оберните всю карточку в тег <div> с классом business-card."
      ],
      "solution": {
        "html": "<div class=\"business-card\">\n  <h1>Алексей Смирнов</h1>\n  <p><strong>Должность:</strong> Стажёр Frontend-разработчик</p>\n  <p><strong>Цель:</strong> Освоить современный стек веб-разработки (HTML5, CSS3, ES6+, React).</p>\n</div>",
        "css": "/* Решение */\n",
        "explanation": "Разметка содержит чёткую семантическую структуру: заголовок h1 для имени и абзацы p со strong для логических акцентов."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h1-q1",
          "question": "Что означает аббревиатура HTML?",
          "options": [
            "HighText Machine Language",
            "HyperText Markup Language",
            "Hyperlink and Text Management Language",
            "Home Tool Markup Language"
          ],
          "correctIndex": 1,
          "explanation": "HTML расшифровывается как HyperText Markup Language (язык гипертекстовой разметки)."
        },
        {
          "id": "h1-q2",
          "question": "Какую древовидную структуру строит браузер из HTML-кода?",
          "options": [
            "JSON Tree",
            "DOM (Document Object Model)",
            "CSSOM",
            "AST (Abstract Syntax Tree)"
          ],
          "correctIndex": 1,
          "explanation": "Браузер парсит HTML и формирует в памяти объектную модель документа — DOM."
        },
        {
          "id": "h1-q3",
          "question": "Какой из перечисленных тегов является одиночным (void element)?",
          "options": [
            "<p>",
            "<div>",
            "<img>",
            "<span>"
          ],
          "correctIndex": 2,
          "explanation": "Тег <img> не имеет закрывающего тега и содержимого (является void-элементом)."
        }
      ]
    }
  },
  {
    "id": "html-2",
    "moduleId": "html",
    "level": 2,
    "title": "Знакомство с CSS и JavaScript",
    "subtitle": "Три кита фронтенда и Critical Rendering Path",
    "description": "Разделение ответственности: как взаимодействуют HTML, CSS и JS, как браузер вычисляет стили (CSSOM) и формирует Render Tree.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Rendering"
    ],
    "theory": {
      "overview": "Любое современное веб-приложение строится на фундаменте трёх технологий, каждая из которых решает строго свою задачу (принцип Separation of Concerns):\n\n- 1. **HTML (Структура и смысл)**: каркас страницы, текстовый контент, элементы форм, ссылки, таблицы.\n- 2. **CSS (Оформление и эстетика)**: цвета, сетки (Flexbox/Grid), типографика, адаптивность под мобильные устройства, тени, анимации.\n- 3. **JavaScript (Поведение и динамика)**: обработка кликов, валидация полей без перезагрузки, асинхронные Fetch-запросы к API, управление состоянием приложения.",
      "sections": [
        {
          "title": "Critical Rendering Path: Как браузер рисует пиксели",
          "content": "Чтобы отобразить страницу на экране, браузер выполняет цепочку шагов (Critical Rendering Path):\n- 1. **Парсинг HTML -> DOM**: браузер читает HTML и строит дерево DOM.\n- 2. **Парсинг CSS -> CSSOM**: считываются таблицы стилей, формируется дерево стилей (CSS Object Model).\n- 3. **Построение Render Tree**: браузер объединяет DOM и CSSOM, отсекая невидимые элементы (например, со стилем `display: none`).\n- 4. **Layout (Reflow)**: рассчитываются точные геометрические координаты и размеры каждого прямоугольного блока на экране (в пикселях).\n- 5. **Paint (Repaint)**: происходит растровая отрисовка фонов, границ, текста и теней в слои пикселей.\n- 6. **Composite**: слои накладываются друг на друга на GPU и выводятся на монитор.",
          "codeExample": {
            "language": "html",
            "title": "Подключение CSS и JS к HTML",
            "code": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <!-- Внешний файл стилей -->\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <button id=\"theme-btn\">Сменить тему</button>\n\n  <!-- Подключение скрипта с атрибутом defer -->\n  <script src=\"app.js\" defer></script>\n</body>\n</html>",
            "explanation": "Стили подключаются в <head> через <link>, а скрипты с атрибутом defer выполняются после построения DOM, не блокируя рендеринг."
          }
        },
        {
          "title": "Способы подключения стилей и скриптов",
          "content": "В веб-разработке используются разные способы связки технологий:\n- **Внешний файл (Best Practice)**: `<link rel=\"stylesheet\" href=\"style.css\">` и `<script src=\"main.js\" defer></script>`. Обеспечивает кэширование браузером и чистую модульную архитектуру.\n- **Встроенные стили (Internal)**: `<style>...</style>` внутри `<head>` — используется для критического CSS (Critical CSS).\n- **Инлайновые стили (Inline)**: `style=\"color: red;\"` прямо в теге — считается плохой практикой из-за невозможности переиспользования и высокой специфичности.",
          "codeExample": {
            "language": "javascript",
            "title": "Взаимодействие JS с DOM и классами CSS",
            "code": "// Находим кнопку в DOM\nconst btn = document.getElementById('theme-btn');\n\n// Навешиваем слушатель клика\nbtn.addEventListener('click', () => {\n  // Модифицируем классы элемента <body>\n  document.body.classList.toggle('dark-theme');\n});",
            "explanation": "JavaScript не меняет CSS-свойства вручную, а переключает класс, делегируя оформление чистому CSS."
          }
        }
      ],
      "seniorTips": [
        "Никогда не используйте инлайновый JavaScript в HTML-атрибутах вроде `<button onclick=\"doSomething()\">`. Всегда вешайте обработчики через `addEventListener` в JS-файлах.",
        "Скрипты всегда подключайте с атрибутом `defer` или `type=\"module\"`, чтобы парсер HTML не останавливался при загрузке тяжелых JS-файлов."
      ],
      "commonMistakes": [
        {
          "bad": "<p style=\"font-size: 18px; color: blue; font-family: Arial;\">Текст</p>",
          "good": "<p class=\"lead-text\">Текст</p>\n/* В CSS: */\n.lead-text { font-size: 1.125rem; color: var(--color-primary); }",
          "reason": "Инлайновые стили невозможно переопределить через темы и медиа-запросы, они раздувают размер HTML-файла."
        }
      ],
      "keyTakeaways": [
        "HTML отвечает за разметку, CSS — за оформление, JS — за динамическое поведение.",
        "Рендеринг страницы включает построение DOM + CSSOM, расчет Layout и фазу Paint.",
        "Внешние файлы стилей и модульные скрипты — стандарт коммерческой разработки."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"card\">\n  <h2 id=\"card-title\">Интерактивная карточка</h2>\n  <p id=\"card-desc\">Нажмите кнопку ниже, чтобы изменить состояние через JavaScript.</p>\n  <button id=\"toggle-btn\">Активировать</button>\n</div>",
      "initialCss": ".card {\n  padding: 24px;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.card.active {\n  background: #ecfdf5;\n  border-color: #10b981;\n  transform: translateY(-4px);\n}\n#toggle-btn {\n  padding: 8px 16px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}",
      "initialJs": "const btn = document.getElementById('toggle-btn');\nconst card = document.querySelector('.card');\nbtn.addEventListener('click', () => {\n  card.classList.toggle('active');\n  console.log('Toggled active class');\n});",
      "instructions": "Нажмите «Активировать» и посмотрите, как JS переключает класс, а CSS анимирует состояние."
    },
    "task": {
      "title": "Связка HTML + CSS + JS",
      "scenario": "Создайте интерактивный блок уведомления со статусом успешного действия и кнопкой закрытия.",
      "criteria": [
        "Создан блок уведомления с заголовком и текстом",
        "Использован семантический тег <button>",
        "Разметка готова для управления классами через стили"
      ],
      "starterCode": {
        "html": "<div class=\"alert alert-success\">\n  <!-- Добавьте заголовок, текст и кнопку -->\n</div>",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте класс .alert-success для фона и тег <button> с type=\"button\"."
      ],
      "solution": {
        "html": "<div class=\"alert alert-success\">\n  <h4 class=\"alert-title\">Успешно!</h4>\n  <p class=\"alert-message\">Данные профиля были сохранены.</p>\n  <button type=\"button\" class=\"alert-close\">Закрыть</button>\n</div>",
        "css": "/* Решение */\n",
        "explanation": "Чистая семантическая разметка, готовая к динамическому переключению видимости."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h2-q1",
          "question": "Какая фаза отвечает за расчет координат и геометрии блоков на странице?",
          "options": [
            "HTML",
            "Layout (Reflow)",
            "SQL",
            "DNS"
          ],
          "correctIndex": 1,
          "explanation": "На этапе Layout браузер рассчитывает ширину, высоту и позицию каждого элемента."
        },
        {
          "id": "h2-q2",
          "question": "Какой атрибут откладывает выполнение скрипта до полной готовности DOM?",
          "options": [
            "async",
            "defer",
            "lazy",
            "preload"
          ],
          "correctIndex": 1,
          "explanation": "Атрибут defer гарантирует выполнение скрипта после завершения парсинга HTML."
        }
      ]
    }
  },
  {
    "id": "html-3",
    "moduleId": "html",
    "level": 3,
    "title": "Frontend IDE и окружение разработчика",
    "subtitle": "VS Code, расширения, Emmet и инструменты Chrome DevTools",
    "description": "Профессиональная настройка редактора кода, плагины для ускорения верстки, сниппеты Emmet и отладка верстки в панели разработчика браузера.",
    "estimatedMinutes": 30,
    "difficulty": "beginner",
    "tags": [
      "IDE",
      "VSCode",
      "Emmet",
      "DevTools",
      "Tools"
    ],
    "theory": {
      "overview": "Эффективность фронтенд-инженера напрямую зависит от владения инструментами разработки. Современная среда — это не просто блокнот, а мощная экосистема:\n\n- **VS Code**: де-факто мировой стандарт редактора кода для фронтенда с поддержкой TypeScript, автодополнения и Git.\n- **Emmet**: встроенный синтаксис сокращений, ускоряющий написание разметки в 5–10 раз.\n- **Chrome / Firefox DevTools**: встроенная в браузер панель инспекции элементов, отладки скриптов и профилирования сетевых запросов.",
      "sections": [
        {
          "title": "Сниппеты Emmet: Как писать HTML со скоростью мысли",
          "content": "Emmet преобразует простые CSS-подобные селекторы в полноценную HTML-разметку по нажатию клавиши Tab:\n- `!` -> генерирует полный базовый HTML5-скелет страницы.\n- `div.card` -> `<div class=\"card\"></div>`\n- `h1#title` -> `<h1 id=\"title\"></h1>`\n- `ul>li*3` -> список `<ul>` с тремя элементами `<li>` внутри (оператор `>` — вложенность, `*` — умножение).\n- `h2+p` -> заголовок и следующий за ним параграф (оператор `+` — соседи).\n- `a[href=\"https://google.com\"]{Поиск}` -> ссылка с атрибутом и текстом внутри фигурных скобок `{}`.\n- `.item-$*3` -> создаст `.item-1`, `.item-2`, `.item-3` (оператор `$` — счетчик).",
          "codeExample": {
            "language": "html",
            "title": "Пример сокращения Emmet",
            "code": "<!-- Введите в VS Code: header.header>nav.nav>ul.menu>li.menu-item*3>a[href=\"#\"]{Пункт $} -->\n\n<!-- Результат по нажатию Tab: -->\n<header class=\"header\">\n  <nav class=\"nav\">\n    <ul class=\"menu\">\n      <li class=\"menu-item\"><a href=\"#\">Пункт 1</a></li>\n      <li class=\"menu-item\"><a href=\"#\">Пункт 2</a></li>\n      <li class=\"menu-item\"><a href=\"#\">Пункт 3</a></li>\n    </ul>\n  </nav>\n</header>",
            "explanation": "Одна строчка Emmet мгновенно разворачивается в 10 строк валидной семантической верстки."
          }
        },
        {
          "title": "Chrome DevTools: Инспекция и отладка верстки",
          "content": "Горячие клавиши для вызова: `F12` или `Ctrl + Shift + I` (на Mac: `Cmd + Option + I`):\n- **Вкладка Elements (Инспектор DOM)**: показывает живое DOM-дерево. Вы можете на лету редактировать текст, добавлять атрибуты, менять стили в панели Styles.\n- **Панель Computed**: показывает итоговые вычисленные размеры (margin, border, padding, width, height) элемента.\n- **Device Mode (`Ctrl + Shift + M`)**: эмуляция экранов мобильных телефонов (iPhone, Pixel, iPad) для проверки адаптивности.\n- **Console**: вывод сообщений console.log, ошибок JS и выполнение произвольного кода.",
          "codeExample": {
            "language": "bash",
            "title": "Полезные шорткаты DevTools",
            "code": "Ctrl + Shift + C  # Режим выбора элемента со страницы кликом мыши\nCtrl + Shift + M  # Включение мобильного режима (Device Toolbar)\nEsc               # Открыть/закрыть встроенную консоль на любой вкладке",
            "explanation": "Использование горячих клавиш экономит часы времени при верстке и поиске багов."
          }
        }
      ],
      "seniorTips": [
        "Обязательно установите расширение Prettier в VS Code и включите настройку Editor: Format On Save — ваш код всегда будет идеально отформатирован.",
        "Изучите вкладку Network в DevTools: она показывает, какие картинки или шрифты грузятся слишком долго и тормозят сайт."
      ],
      "commonMistakes": [
        {
          "bad": "Писать все HTML-теги вручную символ за символом",
          "good": "Использовать сокращения Emmet (nav>ul>li*4>a)",
          "reason": "Ручной набор медленный и приводит к случайным опечаткам в именах тегов и незакрытым скобкам."
        }
      ],
      "keyTakeaways": [
        "VS Code + Emmet — базовый стандарт скорости и комфорта веб-разработчика.",
        "DevTools позволяет исследовать DOM любого сайта в интернете и тестировать стили на лету."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"devtools-playground\">\n  <h2>Песочница для тренировки</h2>\n  <p class=\"hint\">Попробуйте поменять классы и структуру прямо в этом редакторе.</p>\n  <ul class=\"features-list\">\n    <li class=\"feature\">Быстрый ввод через Emmet</li>\n    <li class=\"feature\">Live Reload сервер</li>\n    <li class=\"feature\">Инспекция в DevTools</li>\n  </ul>\n</div>",
      "initialCss": ".devtools-playground {\n  padding: 20px;\n  background: #1e1e2e;\n  color: #cdd6f4;\n  border-radius: 10px;\n  font-family: monospace;\n}\nh2 { color: #89b4fa; font-size: 18px; }\n.features-list { padding-left: 20px; }\n.feature { color: #a6e3a1; margin-bottom: 6px; }",
      "initialJs": "console.log('IDE Tools Sandbox loaded!');",
      "instructions": "Добавьте еще один элемент <li> в список и проверьте результат."
    },
    "task": {
      "title": "Разметка навигационного меню через Emmet",
      "scenario": "Создайте шапку сайта с логотипом и навигацией из 4 ссылок (Главная, О нас, Услуги, Контакты).",
      "criteria": [
        "Использован тег <header>",
        "Внутри находится логотип в виде ссылки",
        "Использован тег <nav> со списком <ul> из 4 ссылок <a>"
      ],
      "starterCode": {
        "html": "<!-- Создайте header с навигацией -->\n",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте структуру header>a.logo+nav>ul>li*4>a."
      ],
      "solution": {
        "html": "<header class=\"site-header\">\n  <a href=\"/\" class=\"logo\">MyCompany</a>\n  <nav class=\"main-nav\">\n    <ul>\n      <li><a href=\"/\">Главная</a></li>\n      <li><a href=\"/about\">О нас</a></li>\n      <li><a href=\"/services\">Услуги</a></li>\n      <li><a href=\"/contact\">Контакты</a></li>\n    </ul>\n  </nav>\n</header>",
        "css": "/* Решение */\n",
        "explanation": "Идеальная семантическая структура для шапки любого коммерческого сайта."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h3-q1",
          "question": "Какая клавиша развернет сокращение Emmet в VS Code?",
          "options": [
            "Tab или Enter",
            "Ctrl + Shift + P",
            "Alt + F4",
            "Shift + Space"
          ],
          "correctIndex": 0,
          "explanation": "Клавиша Tab или Enter разворачивает аббревиатуру Emmet в HTML-код."
        }
      ]
    }
  },
  {
    "id": "html-4",
    "moduleId": "html",
    "level": 4,
    "title": "Анатомия HTML-документа",
    "subtitle": "DOCTYPE, head, meta-теги, body и глобальные атрибуты",
    "description": "Полный разбор каркаса HTML5: зачем нужен DOCTYPE, как работают метатеги viewport и charset, что хранится в head, а что в body, и как устроены глобальные атрибуты (id, class, data-*).",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "DOCTYPE",
      "Head",
      "Meta",
      "Attributes"
    ],
    "theory": {
      "overview": "Каждый HTML-документ имеет строгую иерархическую структуру, состоящую из двух главных зон: служебной части `<head>` (метаданные для браузера и поисковиков) и контентной части `<body>` (всё, что видит пользователь на экране).\n\nНарушение базового скелета приводит к тому, что браузер переходит в так называемый **Quirks Mode** (режим совместимости), где верстка может отображаться непредсказуемо, ломаются шрифты и адаптивность.",
      "sections": [
        {
          "title": "Строение базового шаблона HTML5",
          "content": "Разбор ключевых элементов каркаса:\n- `<!DOCTYPE html>` — обязательный пролог, указывающий браузеру рендерить страницу по стандарту HTML5 (Standards Mode).\n- `<html lang=\"ru\">` — корневой элемент. Атрибут `lang` критически важен: он помогает скринридерам правильно озвучивать буквы и подсказывает поисковикам язык страницы.\n- `<head>` — контейнер служебной информации:\n  • `<meta charset=\"UTF-8\">` — кодировка символов (поддерживает кириллицу, эмодзи и спецсимволы).\n  • `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` — включает корректный масштаб на мобильных устройствах.\n  • `<title>` — заголовок вкладки браузера и сниппета в поисковой выдаче.\n- `<body>` — тело документа, где размещается весь видимый интерфейс.",
          "codeExample": {
            "language": "html",
            "title": "Эталонный шаблон HTML5",
            "code": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Обучающая платформа для фронтенд-стажёров\">\n  <title>Frontend Intern Academy</title>\n  <link rel=\"icon\" href=\"/favicon.ico\">\n  <link rel=\"stylesheet\" href=\"/css/style.css\">\n</head>\n<body>\n  <main>\n    <h1>Привет, мир!</h1>\n  </main>\n</body>\n</html>",
            "explanation": "Полная валидная структура страницы со всеми обязательными мета-тегами для десктопов и мобильных устройств."
          }
        },
        {
          "title": "Глобальные атрибуты HTML-элементов",
          "content": "Глобальные атрибуты можно применять абсолютно к любому HTML-тегу:\n- `id` — уникальный идентификатор элемента на странице (не должен повторяться!). Используется для якорей и обращения из JS.\n- `class` — список классов через пробел (`class=\"btn btn-primary\"`), используется для стилизации в CSS и группировки элементов.\n- `title` — всплывающая текстовая подсказка (tooltip) при наведении курсора мыши.\n- `data-*` — пользовательские атрибуты для хранения данных прямо в DOM (например: `data-user-id=\"42\"`, `data-status=\"active\"`), легко читаются через JS (`element.dataset.userId`).\n- `hidden` — логический атрибут, скрывающий элемент от отображения (эквивалентен `display: none`).\n- `tabindex` — управляет порядком фокусировки элемента при нажатии клавиши `Tab`.",
          "codeExample": {
            "language": "html",
            "title": "Пример использования глобальных атрибутов",
            "code": "<button \n  id=\"submit-order-btn\"\n  class=\"btn btn-success ripple\"\n  data-order-id=\"1084\"\n  data-action=\"checkout\"\n  title=\"Нажмите для подтверждения заказа\"\n>\n  Оформить заказ\n</button>",
            "explanation": "Кнопка содержит id для скрипта, классы для CSS, data-атрибуты для передачи параметров заказа и подсказку title."
          }
        }
      ],
      "seniorTips": [
        "Всегда проверяйте наличие `<meta name=\"viewport\">` — без него мобильные браузеры отобразят сайт в масштабе 980px как уменьшенную копию десктопа.",
        "Никогда не дублируйте `id` на одной странице — валидатор выдаст ошибку, а `document.getElementById` найдет только первый элемент."
      ],
      "commonMistakes": [
        {
          "bad": "<div id=\"btn\"></div>\n<div id=\"btn\"></div> <!-- Дублирование id -->",
          "good": "<button class=\"btn\"></button>\n<button class=\"btn\"></button>",
          "reason": "ID обязан быть уникальным в пределах всей страницы. Для множественных элементов используйте class."
        }
      ],
      "keyTakeaways": [
        "DOCTYPE html переключает браузер в стандартизированный режим рендеринга.",
        "Тег <head> содержит метаданные, <title> и ссылки на ресурсы; <body> — видимую часть.",
        "Атрибуты class и data-* — основные инструменты взаимодействия с CSS и JS."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"user-profile\" data-user-role=\"admin\">\n  <h2 id=\"profile-name\">Александр Петров</h2>\n  <p class=\"badge\">Администратор</p>\n  <p>Email: alex@example.com</p>\n</div>",
      "initialCss": ".user-profile {\n  padding: 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.badge {\n  display: inline-block;\n  background: #dbeafe;\n  color: #1d4ed8;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n}",
      "initialJs": "const profile = document.querySelector('.user-profile');\nconsole.log('Роль пользователя:', profile.dataset.userRole);",
      "instructions": "Изучите, как в консоли выводится значение data-атрибута dataset.userRole."
    },
    "task": {
      "title": "Создание базового каркаса страницы",
      "scenario": "Напишите полный валидный скелет HTML5-документа с заголовком вкладки, кодировкой UTF-8 и метатегом viewport.",
      "criteria": [
        "Указан <!DOCTYPE html>",
        "Тег <html> содержит lang=\"ru\"",
        "В <head> присутствуют meta charset, viewport и title",
        "В <body> размещен заголовок первого уровня <h1>"
      ],
      "starterCode": {
        "html": "<!-- Напишите полный HTML5 скелет -->\n",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте <!DOCTYPE html>, <html>, <head>, <meta charset=\"UTF-8\">, <meta name=\"viewport\"...>, <title>, <body>."
      ],
      "solution": {
        "html": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Моя первая страница</title>\n</head>\n<body>\n  <h1>Добро пожаловать!</h1>\n  <p>Страница сверстана по стандартам HTML5.</p>\n</body>\n</html>",
        "css": "/* Решение */\n",
        "explanation": "Идеальный каркас со всеми обязательными стандартами W3C."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h4-q1",
          "question": "Зачем в начале документа указывается <!DOCTYPE html>?",
          "options": [
            "Для подключения стилей",
            "Чтобы переключить браузер в современный режим рендеринга (Standards Mode)",
            "Для загрузки картинок",
            "Для отправки на сервер"
          ],
          "correctIndex": 1,
          "explanation": "DOCTYPE объявляет версию HTML5 и предотвращает Quirks Mode."
        },
        {
          "id": "h4-q2",
          "question": "Какой атрибут позволяет безопасно хранить пользовательские данные в теге для JS?",
          "options": [
            "href",
            "src",
            "data-*",
            "style"
          ],
          "correctIndex": 2,
          "explanation": "Префикс data-* предназначен специально для хранения кастомных данных в DOM."
        }
      ]
    }
  },
  {
    "id": "html-5",
    "moduleId": "html",
    "level": 5,
    "title": "Форматирование текста и типографика",
    "subtitle": "Заголовки h1-h6, параграфы, семантическое выделение и цитаты",
    "description": "Изучение текстовой семантики: строгая иерархия заголовков, разница между strong/b и em/i, цитирование через blockquote, вывод кода через pre/code.",
    "estimatedMinutes": 30,
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "Typography",
      "Headings",
      "Formatting"
    ],
    "theory": {
      "overview": "Текст — главное средство передачи информации в вебе. Грамотная разметка текста решает сразу три критические задачи:\n\n- 1. **Читаемость (UX)**: человек не читает страницу целиком, а сканирует глазами заголовки, списки и смысловые акценты.\n- 2. **Доступность (Accessibility)**: незрячие пользователи используют скринридеры, которые перемещаются по заголовкам от `<h1>` к `<h6>`.\n- 3. **SEO-оптимизация**: поисковые роботы Яндекса и Google придают наивысший вес тексту внутри `<h1>` и `<strong>`.",
      "sections": [
        {
          "title": "Иерархия заголовков: Правила и ошибки",
          "content": "HTML предоставляет 6 уровней заголовков: от `<h1>` (самый важный) до `<h6>` (наименее важный):\n- `<h1>` — главный заголовок страницы. **Правило №1: ровно один `<h1>` на всю страницу!** Он отражает суть документа.\n- `<h2>` — заголовки основных тематических секций страницы.\n- `<h3>` — подзаголовки внутри секций.\n- `<h4>`–`<h6>` — заголовки глубокой вложенности (виджеты, сайдбары, футеры).\n- **Запрещено перескакивать уровни**: после `<h2>` должен идти `<h3>`, а не `<h5>`.",
          "codeExample": {
            "language": "html",
            "title": "Правильная иерархия заголовков",
            "code": "<article>\n  <h1>Руководство по веб-разработке</h1>\n  \n  <section>\n    <h2>1. Основы фронтенда</h2>\n    <p>Фронтенд включает HTML, CSS и JS.</p>\n    \n    <h3>1.1. Роль языка HTML</h3>\n    <p>HTML задает структуру документа.</p>\n  </section>\n</article>",
            "explanation": "Логическая древовидная структура заголовков без перескакивания уровней."
          }
        },
        {
          "title": "Семантическое vs Визуальное выделение текста",
          "content": "В HTML есть теги со схожим визуальным эффектом, но совершенно разным смыслом:\n- `<strong>` — **важный контент** (браузер выделяет жирным шрифтом, скринридер повышает интонацию).\n- `<b>` — просто жирный текст без смысловой нагрузки (Bold).\n- `<em>` — *логическое ударение* (курсив с акцентом, скринридер меняет тональность).\n- `<i>` — наклонный текст без акцента (Italic, часто для названий книг, терминов, иконок).\n- `<mark>` — текст, выделенный маркером (подсветка результатов поиска).\n- `<del>` и `<ins>` — удаленный и добавленный текст (история правок).\n- `<blockquote>` и `<cite>` — длинные цитаты и указание автора/источника.\n- `<code>` и `<pre>` — программный код (моноширинный шрифт с сохранением пробелов).",
          "codeExample": {
            "language": "html",
            "title": "Примеры цитирования и программного кода",
            "code": "<blockquote cite=\"https://w3.org\">\n  <p>Веб должен быть доступен каждому человеку на планете.</p>\n  <cite>Тим Бернерс-Ли</cite>\n</blockquote>\n\n<p>Для вывода логов используйте команду <code>console.log()</code>.</p>",
            "explanation": "Тег <blockquote> оформляет блок цитаты со ссылкой на источник, а <code> выделяет фрагменты кода."
          }
        }
      ],
      "seniorTips": [
        "Никогда не выбирайте тег заголовка ради размера шрифта (например: «хочу крупный текст — поставлю <h1>»). Размер задается в CSS через `font-size`, а тег выбирается исключительно по смыслу.",
        "Используйте `<pre><code>` в связке для вывода многострочных блоков программного кода."
      ],
      "commonMistakes": [
        {
          "bad": "<p class=\"h1\">Главный заголовок</p> <!-- Без h1 -->\n<h4>Сразу четвертый</h4>",
          "good": "<h1>Главный заголовок</h1>\n<h2>Подзаголовок секции</h2>",
          "reason": "Поисковики и экранные дикторы не понимают CSS-классы, им нужны нативные теги <h1>-<h6>."
        }
      ],
      "keyTakeaways": [
        "На странице всегда должен быть ровно один заголовок <h1>.",
        "Теги strong и em несут семантическую важность, в то время как b и i — чисто стилистические.",
        "Для кода используются <code> и <pre>, для цитат — <blockquote> и <cite>."
      ]
    },
    "sandbox": {
      "initialHtml": "<article class=\"blog-post\">\n  <h1>Архитектура чистого кода</h1>\n  <p>Принципы разработки от <em>Senior инженеров</em>.</p>\n  <blockquote>\n    <p>Любой дурак может написать код, понятный компьютеру. Хорошие программисты пишут код, понятный людям.</p>\n    <cite>Мартин Фаулер</cite>\n  </blockquote>\n  <p>Пример использования функции: <code>calcTotal(items)</code>.</p>\n</article>",
      "initialCss": ".blog-post { padding: 24px; background: #fff; border-radius: 12px; font-family: Georgia, serif; line-height: 1.8; }\nh1 { font-size: 24px; color: #1e293b; font-family: sans-serif; }\nblockquote { margin: 16px 0; padding: 12px 20px; border-left: 4px solid #6366f1; background: #f5f3ff; font-style: italic; }\ncite { display: block; margin-top: 8px; font-size: 13px; font-weight: bold; color: #4f46e5; }\ncode { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; color: #e11d48; }",
      "initialJs": "console.log('Typography level loaded');",
      "instructions": "Попробуйте добавить тег <mark> для подсветки ключевого слова."
    },
    "task": {
      "title": "Верстка статьи блога",
      "scenario": "Оформите текстовую статью блога с правильной иерархией заголовков, цитатой автора и фрагментом кода.",
      "criteria": [
        "Присутствует <h1> заголовок статьи",
        "Использован подзаголовок <h2>",
        "Присутствует цитата <blockquote> с автором в <cite>",
        "Использован тег <code>"
      ],
      "starterCode": {
        "html": "<!-- Сверстайте статью -->\n",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте <h1>, <h2>, <p>, <blockquote>, <cite>, <code>."
      ],
      "solution": {
        "html": "<article class=\"post\">\n  <h1>Введение в JavaScript</h1>\n  <h2>Переменные и константы</h2>\n  <p>Для объявления констант используйте ключевое слово <code>const</code>.</p>\n  <blockquote>\n    <p>Простота — необходимое условие надежности.</p>\n    <cite>Эдсгер Дейкстра</cite>\n  </blockquote>\n</article>",
        "css": "/* Решение */\n",
        "explanation": "Отличная статья с безупречной текстовой семантикой."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h5-q1",
          "question": "Сколько заголовков <h1> рекомендуется размещать на одной странице?",
          "options": [
            "Сколько угодно",
            "Ровно один",
            "Минимум 5",
            "Ни одного"
          ],
          "correctIndex": 1,
          "explanation": "Стандарт SEO и доступности предписывает ровно один главный заголовок <h1> на страницу."
        },
        {
          "id": "h5-q2",
          "question": "В чем разница между <strong> и <b>?",
          "options": [
            "Разницы нет",
            "strong придает семантическую важность для поисковиков и скринридеров, а b — только жирный стиль",
            "b сильнее выделяет текст",
            "strong устарел"
          ],
          "correctIndex": 1,
          "explanation": "strong — смысловой тег важности, b — визуальный тег оформления."
        }
      ]
    }
  },
  {
    "id": "html-6",
    "moduleId": "html",
    "level": 6,
    "title": "Ссылки и адресация (URL)",
    "subtitle": "Тег a, абсолютные и относительные пути, якоря и безопасность",
    "description": "Изучение гипертекста: принципы адресации в вебе, связывание страниц, навигационные якоря, схемы mailto/tel и обязательные атрибуты безопасности target blank.",
    "estimatedMinutes": 30,
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "Links",
      "URL",
      "Navigation",
      "Security"
    ],
    "theory": {
      "overview": "Ссылки (`<a>` — anchor, якорь) превращают разрозненные страницы в единую паутину — гипертекстовое пространство (HyperText). С помощью ссылок пользователь переходит между страницами, скачивает файлы, звонит по телефону или перемещается к нужному разделу длинного документа.\n\nНеправильная работа с ссылками приводит к критическим уязвимостям безопасности (табджекинг) и потере позиций в поисковой выдаче из-за битых ссылок (ошибки 404).",
      "sections": [
        {
          "title": "Абсолютные vs Относительные пути",
          "content": "В атрибуте `href` используются два типа путей:\n- **Абсолютные URL**: полный адрес в сети с протоколом (`https://google.com/search`, `https://cdn.example.com/logo.png`). Используются для внешних ресурсов.\n- **Относительные пути**: путь от текущего файла к целевому внутри вашего проекта:\n  • `about.html` или `./about.html` — файл в той же папке.\n  • `images/photo.jpg` — файл в подпапке `images`.\n  • `../index.html` — подняться на один уровень вверх к родительской папке (`..`).\n  • `/contacts` — путь от корня веб-сервера (Root-relative).",
          "codeExample": {
            "language": "html",
            "title": "Примеры путей к файлам",
            "code": "<!-- Внешняя ссылка -->\n<a href=\"https://github.com/facebook/react\">Репозиторий React</a>\n\n<!-- Относительная ссылка внутри проекта -->\n<a href=\"/docs/getting-started.html\">Начать обучение</a>\n\n<!-- Переход на уровень выше -->\n<a href=\"../index.html\">Вернуться на главную</a>",
            "explanation": "Различие между внешними абсолютными и локальными относительными путями."
          }
        },
        {
          "title": "Безопасность target=\"_blank\" и специальные схемы",
          "content": "Критически важные атрибуты и протоколы:\n- **Открытие в новой вкладке**: `target=\"_blank\"`. **ВАЖНО:** Всегда добавляйте `rel=\"noopener noreferrer\"`! Без этого открытая вкладка получает доступ к объекту `window.opener` родительской страницы и может подменить исходный сайт на фишинговый (уязвимость Reverse Tabnabbing).\n- **Якорные ссылки (Smooth Scroll)**: `href=\"#contacts\"` — плавный переход к элементу с `id=\"contacts\"` на той же странице.\n- **Телефонный звонок**: `href=\"tel:+79991234567\"` — открывает звонилку на смартфоне.\n- **Электронная почта**: `href=\"mailto:hr@company.com?subject=Стажировка\"` — открывает почтовый клиент.\n- **Скачивание файла**: атрибут `download` (`<a href=\"book.pdf\" download>Скачать PDF</a>`).",
          "codeExample": {
            "language": "html",
            "title": "Безопасные внешние и сервисные ссылки",
            "code": "<!-- Безопасное открытие внешней ссылки -->\n<a href=\"https://react.dev\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Официальная документация React\n</a>\n\n<!-- Сервисные ссылки для связи -->\n<a href=\"tel:+78005553535\">Позвонить в поддержку</a>\n<a href=\"mailto:team@frontend.academy\">Написать нам</a>\n<a href=\"#pricing\">Посмотреть тарифы</a>",
            "explanation": "Атрибут rel=\"noopener noreferrer\" защищает от вредоносного перехвата окна, а tel/mailto вызывают системные приложения."
          }
        }
      ],
      "seniorTips": [
        "Всегда добавляйте `rel=\"noopener noreferrer\"` при использовании `target=\"_blank\"`.",
        "Для кнопок интерфейса (открыть модалку, удалить элемент) используйте `<button>`, а не `<a href=\"#\">`! Ссылка должна вести на ресурс или якорь."
      ],
      "commonMistakes": [
        {
          "bad": "<a href=\"https://evil.com\" target=\"_blank\">Опасная ссылка</a>",
          "good": "<a href=\"https://partner.com\" target=\"_blank\" rel=\"noopener noreferrer\">Безопасная ссылка</a>",
          "reason": "Без rel=\"noopener noreferrer\" создается уязвимость безопасности tabnabbing."
        },
        {
          "bad": "<a href=\"#\" onclick=\"deleteItem()\">Удалить</a>",
          "good": "<button type=\"button\" onclick=\"deleteItem()\">Удалить</button>",
          "reason": "Действия приложения должны выполняться кнопками button, а не псевдо-ссылками a."
        }
      ],
      "keyTakeaways": [
        "Относительные пути позволяют сайту работать на любом домене и локально.",
        "target=\"_blank\" всегда сопровождается rel=\"noopener noreferrer\".",
        "Схемы tel: и mailto: вызывают телефон и почту на мобильных устройствах."
      ]
    },
    "sandbox": {
      "initialHtml": "<nav class=\"demo-links\">\n  <a href=\"#section1\" class=\"link-pill\">Секция 1</a>\n  <a href=\"#section2\" class=\"link-pill\">Секция 2</a>\n  <a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"link-pill external\">GitHub ↗</a>\n  <a href=\"mailto:test@example.com\" class=\"link-pill\">Написать email</a>\n</nav>\n<div style=\"margin-top: 30px;\">\n  <section id=\"section1\" style=\"padding: 15px; background: #e0e7ff; margin-bottom: 10px; border-radius: 8px;\">Контент первой секции</section>\n  <section id=\"section2\" style=\"padding: 15px; background: #fef3c7; border-radius: 8px;\">Контент второй секции</section>\n</div>",
      "initialCss": ".demo-links { display: flex; gap: 10px; flex-wrap: wrap; }\n.link-pill { display: inline-block; padding: 8px 16px; background: #4f46e5; color: white; text-decoration: none; border-radius: 20px; font-size: 13px; font-weight: 600; }\n.link-pill:hover { background: #4338ca; }\n.link-pill.external { background: #0f172a; }",
      "initialJs": "console.log('Links sandbox ready');",
      "instructions": "Проверьте работу якорных ссылок при клике на «Секция 1» и «Секция 2»."
    },
    "task": {
      "title": "Создание блока контактов",
      "scenario": "Создайте контактный блок с номером телефона, email и ссылкой на соцсети в новой вкладке.",
      "criteria": [
        "Использована ссылка tel: с номером телефона",
        "Использована ссылка mailto: с email",
        "Использована внешняя ссылка с target=\"_blank\" и rel=\"noopener noreferrer\""
      ],
      "starterCode": {
        "html": "<!-- Создайте ссылки контактов -->\n<div class=\"contacts-block\">\n  \n</div>",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте href=\"tel:+...\", href=\"mailto:...\", target=\"_blank\" rel=\"noopener noreferrer\"."
      ],
      "solution": {
        "html": "<div class=\"contacts-block\">\n  <p>Телефон: <a href=\"tel:+79990001122\">+7 (999) 000-11-22</a></p>\n  <p>Email: <a href=\"mailto:intern@academy.ru\">intern@academy.ru</a></p>\n  <p><a href=\"https://t.me/frontend\" target=\"_blank\" rel=\"noopener noreferrer\">Наш Telegram-канал</a></p>\n</div>",
        "css": "/* Решение */\n",
        "explanation": "Полный набор контактных ссылок по стандартам безопасности и доступности."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h6-q1",
          "question": "Какой атрибут безопасности обязателен при target=\"_blank\"?",
          "options": [
            "rel=\"noopener noreferrer\"",
            "alt=\"blank\"",
            "type=\"secure\"",
            "download=\"true\""
          ],
          "correctIndex": 0,
          "explanation": "rel=\"noopener noreferrer\" блокирует доступ к window.opener и защищает от tabnabbing."
        },
        {
          "id": "h6-q2",
          "question": "Как оформить ссылку для совершения звонка с телефона?",
          "options": [
            "href=\"call:123\"",
            "href=\"phone:123\"",
            "href=\"tel:+79991234567\"",
            "href=\"#call\""
          ],
          "correctIndex": 2,
          "explanation": "Схема tel: используется для телефонных номеров."
        }
      ]
    }
  },
  {
    "id": "html-7",
    "moduleId": "html",
    "level": 7,
    "title": "Изображения, мультимедиа и адаптивная графика",
    "subtitle": "Теги img, picture, source, WebP, SVG, video и audio",
    "description": "Медиа-контент в современном вебе: предотвращение сдвига верстки (CLS) через width/height, отложенная загрузка loading=\"lazy\", адаптивные форматы WebP/AVIF через picture, векторный SVG и видеоплееры.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "Images",
      "Media",
      "SVG",
      "Performance"
    ],
    "theory": {
      "overview": "Медиа-файлы (изображения, аудио, видео) составляют до 70–80% общего веса веб-страницы. Неумение оптимизировать графику приводит к медленной загрузке сайта, ухудшению Core Web Vitals и раздражению пользователей.\n\nСовременный HTML предоставляет мощные инструменты: от нативного Lazy Loading до тега `<picture>`, отдающего Retina-качество для iPhone и сжатые WebP-файлы для обычных мониторов.",
      "sections": [
        {
          "title": "Тег <img>: Атрибуты alt, loading и предотвращение CLS",
          "content": "Базовый синтаксис изображения:\n- `src` — путь к файлу изображения (JPG, PNG, WebP, SVG).\n- `alt` — **обязательный альтернативный текст**. Описывает, что изображено. Нужен для:\n  1. Скринридеров (незрячие пользователи «видят» картинку ушами).\n  2. Отображения, если картинка не загрузилась из-за сбоя сети.\n  3. Поисковой индексации в Google/Яндекс Картинках.\n- `width` и `height` — указание исходных пропорций. Браузер сразу резервирует место под картинку, предотвращая дергание страницы (Cumulative Layout Shift, CLS).\n- `loading=\"lazy\"` — браузер загружает картинку только тогда, когда пользователь доскроллил до неё (экономит гигабайты мобильного трафика).",
          "codeExample": {
            "language": "html",
            "title": "Оптимизированный тег img",
            "code": "<img \n  src=\"/images/developer-workspace.webp\"\n  alt=\"Рабочее место программиста с двумя мониторами и клавиатурой\"\n  width=\"800\"\n  height=\"600\"\n  loading=\"lazy\"\n  class=\"responsive-img\"\n/>",
            "explanation": "Присутствуют все атрибуты производительности: alt для a11y, width/height против CLS, loading=lazy для скорости."
          }
        },
        {
          "title": "Адаптивные изображения с тегом <picture> и современные форматы",
          "content": "Форматы графики:\n- **WebP и AVIF**: современные форматы сжатия (на 30–50% легче PNG/JPG при том же качестве).\n- **SVG (Scalable Vector Graphics)**: векторный формат на основе XML. Идеален для логотипов и иконок: бесконечная четкость на любом масштабе и микроскопический вес.\n- **Тег `<picture>`**: позволяет браузеру выбрать лучший формат и размер в зависимости от разрешения экрана и поддержки браузером.",
          "codeExample": {
            "language": "html",
            "title": "Адаптивный тег picture с fallback",
            "code": "<picture>\n  <!-- Для современных браузеров с поддержкой AVIF -->\n  <source srcset=\"hero.avif\" type=\"image/avif\">\n  <!-- Для браузеров с поддержкой WebP -->\n  <source srcset=\"hero.webp\" type=\"image/webp\">\n  <!-- Резервный вариант (Fallback) для старых браузеров -->\n  <img src=\"hero.jpg\" alt=\"Главный баннер стажировки\" width=\"1200\" height=\"600\">\n</picture>",
            "explanation": "Браузер выберет самый легкий поддерживаемый формат (AVIF -> WebP -> JPG)."
          }
        },
        {
          "title": "Встраивание видео и аудио (HTML5 Media)",
          "content": "Нативные медиаплееры без внешних плагинов:\n- `<video controls poster=\"cover.jpg\" preload=\"metadata\">` — видеоплеер. Атрибуты: `controls` (панель управления), `autoplay`, `muted` (без звука, обязательно для автозапуска!), `loop` (зацикливание), `playsinline` (воспроизведение на iPhone внутри страницы, а не в полноэкранном режиме).\n- `<audio controls src=\"podcast.mp3\">` — аудиоплеер для подкастов и музыки.\n- `<iframe src=\"...\" loading=\"lazy\">` — встраивание сторонних сервисов (YouTube, Яндекс Карты).",
          "codeExample": {
            "language": "html",
            "title": "HTML5 Видеоплеер",
            "code": "<video \n  controls \n  poster=\"/preview.jpg\"\n  width=\"640\"\n  height=\"360\"\n  playsinline\n>\n  <source src=\"intro.mp4\" type=\"video/mp4\">\n  <source src=\"intro.webm\" type=\"video/webm\">\n  Ваш браузер не поддерживает видео HTML5.\n</video>",
            "explanation": "Полноценный нативный видеоплеер с обложкой poster и несколькими форматами для совместимости."
          }
        }
      ],
      "seniorTips": [
        "Всегда указывайте атрибуты `width` и `height` у тегов `<img>`, а в CSS задавайте `max-width: 100%; height: auto;` для адаптивности.",
        "Никогда не оставляйте `alt` пустым у контентных изображений. Если картинка чисто декоративная (узор, фоновая линия), указывайте `alt=\"\"` с атрибутом `aria-hidden=\"true\"`."
      ],
      "commonMistakes": [
        {
          "bad": "<img src=\"cat.jpg\"> <!-- Нет alt, width, height -->",
          "good": "<img src=\"cat.jpg\" alt=\"Рыжий кот спит на диване\" width=\"400\" height=\"300\" loading=\"lazy\">",
          "reason": "Отсутствие alt ломает доступность для незрячих, а отсутствие размеров вызывает дергание страницы (CLS)."
        }
      ],
      "keyTakeaways": [
        "WebP и AVIF уменьшают вес страниц в 2 раза по сравнению с JPG/PNG.",
        "SVG идеален для логотипов, так как не теряет четкости на экранах Retina.",
        "loading=\"lazy\" откладывает загрузку изображений ниже первого экрана."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"media-card\">\n  <h3>Интерактивная демонстрация медиа</h3>\n  <!-- SVG иконка -->\n  <svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4f46e5\" stroke-width=\"2\">\n    <rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\"></rect>\n    <circle cx=\"12\" cy=\"12\" r=\"4\"></circle>\n    <line x1=\"18\" y1=\"6\" x2=\"18.01\" y2=\"6\"></line>\n  </svg>\n  <p>Векторный SVG масштабируется без потери качества.</p>\n</div>",
      "initialCss": ".media-card { padding: 20px; background: #fff; border-radius: 12px; text-align: center; border: 1px solid #e2e8f0; }\nsvg { margin: 10px auto; }",
      "initialJs": "console.log('Media sandbox loaded');",
      "instructions": "Изучите, как SVG-код рендерится напрямую в HTML без внешних картинок."
    },
    "task": {
      "title": "Вставка адаптивного медиа-блока",
      "scenario": "Разместите изображение с атрибутами alt, размерами width/height и отложенной загрузкой lazy.",
      "criteria": [
        "Тег <img> содержит корректный src и alt",
        "Указаны width и height",
        "Добавлен атрибут loading=\"lazy\""
      ],
      "starterCode": {
        "html": "<!-- Вставьте оптимизированное изображение -->\n",
        "css": "/* Стили задания */\n"
      },
      "hints": [
        "Используйте <img src=\"...\" alt=\"...\" width=\"600\" height=\"400\" loading=\"lazy\">."
      ],
      "solution": {
        "html": "<figure class=\"photo-card\">\n  <img src=\"/images/team.jpg\" alt=\"Команда фронтенд-разработчиков за обсуждением проекта\" width=\"600\" height=\"400\" loading=\"lazy\">\n  <figcaption>Наша дружная команда разработки</figcaption>\n</figure>",
        "css": "/* Решение */\n",
        "explanation": "Эталонное оформление изображения с семантическим описанием figcaption."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "h7-q1",
          "question": "Зачем у тега <img> указываются атрибуты width и height?",
          "options": [
            "Только для красоты",
            "Чтобы браузер заранее выделил место в Layout и предотвратил сдвиг верстки (CLS)",
            "Это обязательно для загрузки файла",
            "Для сжатия картинки на сервере"
          ],
          "correctIndex": 1,
          "explanation": "Атрибуты width и height задают соотношение сторон, предотвращая Layout Shift при загрузке."
        },
        {
          "id": "h7-q2",
          "question": "Какой формат графики является векторным и не теряет резкости при увеличении?",
          "options": [
            "JPEG",
            "PNG",
            "GIF",
            "SVG"
          ],
          "correctIndex": 3,
          "explanation": "SVG — это векторный формат на основе математических кривых XML."
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
