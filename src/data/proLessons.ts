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
  }
];
