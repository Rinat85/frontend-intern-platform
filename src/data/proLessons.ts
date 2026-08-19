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
    "title": "Современный инструментарий разработчика",
    "subtitle": "Git, ветвление, Conventional Commits, сборщики Vite/Webpack, npm/pnpm и CI/CD",
    "description": "Профессиональный арсенал: ветвление feature-branch в Git, стандарты коммитов Conventional Commits, сборщики проектов (Vite, Rollup), пакетные менеджеры npm/pnpm и пайплайны CI/CD.",
    "estimatedMinutes": 45,
    "difficulty": "intermediate",
    "tags": [
      "Pro",
      "Git",
      "Vite",
      "BuildTools",
      "CICD",
      "Workflow"
    ],
    "theory": {
      "overview": "Современный фронтенд давно перерос простую правку файлов в блокноте. Сегодня это зрелая инженерная дисциплина с развитой экосистемой сборщиков, автоматизированным тестированием, пакетными менеджерами и непрерывной интеграцией (CI/CD).\n\nВладение Git и инструментами сборки отличает профессионального разработчика от любителя.",
      "sections": [
        {
          "title": "Система контроля версий Git и Feature-Branch Workflow",
          "content": "- **Git**: распределенная система контроля версий, хранящая полную историю всех изменений кодовой базы.\n- **Feature-Branch подход**:\n  1. Основная ветка: `main` или `master` (всегда стабильный продакшен код).\n  2. Для новой задачи создается отдельная ветка: `git checkout -b feature/cart-modal`.\n  3. Вносятся изменения и коммитятся: `git commit -m 'feat(cart): add checkout modal'`.\n  4. Ветка пушится на сервер: `git push origin feature/cart-modal`.\n  5. Создается Pull Request (Merge Request) в `main` для проверки и слияния.",
          "codeExample": {
            "language": "bash",
            "title": "Базовые команды Git для ежедневной работы",
            "code": "git status                  # Проверить статус измененных файлов\ngit pull origin main        # Подтянуть свежие изменения из главной ветки\ngit checkout -b feature/nav # Создать и перейти в новую ветку\ngit add .                   # Добавить файлы в индекс\ngit commit -m \"feat: add mobile navigation\"\ngit push origin feature/nav # Отправить ветку на GitHub/GitLab",
            "explanation": "Ежедневный рабочий пайплайн разработчика."
          }
        },
        {
          "title": "Стандарт коммитов Conventional Commits",
          "content": "В профессиональных командах коммиты пишутся по международному стандарту `type(scope): description`:\n- `feat`: новая функциональность (`feat(auth): add google login`).\n- `fix`: исправление бага (`fix(button): prevent multiple clicks`).\n- `refactor`: рефакторинг кода без изменения логики (`refactor(api): simplify fetch client`).\n- `style`: правки форматирования, пробелов, CSS (`style(header): fix mobile alignment`).\n- `docs`: обновление документации (`docs(readme): add installation guide`).\n- `test`: добавление или правка тестов (`test(user): add unit tests for validation`).",
          "codeExample": {
            "language": "bash",
            "title": "Примеры качественных коммитов",
            "code": "feat(catalog): add price range filter slider\nfix(cart): resolve NaN calculation on empty discount\nrefactor(auth): migrate token storage to secure cookies",
            "explanation": "По таким коммитам легко строить автоматические списки изменений (Changelog)."
          }
        },
        {
          "title": "Сборщики проектов (Vite) и пакетные менеджеры",
          "content": "- **Пакетные менеджеры (npm, pnpm, yarn)**:\n  • `package.json`: манифест проекта со списком зависимостей (`dependencies`, `devDependencies`) и скриптами (`npm run dev`, `npm run build`).\n  • `node_modules`: папка со всеми установленными внешними библиотеками.\n  • `package-lock.json` / `pnpm-lock.yaml`: фиксирует точные версии пакетов для воспроизводимости сборки на сервере.\n- **Сборщик Vite**:\n  • Быстрый современный бандлер на основе нативных ES-модулей (ESM) и компилятора Rollup/esbuild.\n  • Предоставляет моментальный Hot Module Replacement (HMR) при сохранении файлов.\n  • Команда `npm run build` компилирует TypeScript, минифицирует CSS и генерирует оптимизированный бандл в папку `dist/`.",
          "codeExample": {
            "language": "bash",
            "title": "Скрипты в package.json",
            "code": "{\n  \"scripts\": {\n    \"dev\": \"vite\",             # Запуск локального сервера разработки\n    \"build\": \"tsc && vite build\",# Компиляция TypeScript и прод-сборка\n    \"lint\": \"eslint src/\",       # Проверка чистоты кода линтером\n    \"test\": \"vitest\"            # Запуск автотестов\n  }\n}",
            "explanation": "Стандартные команды автоматизации в веб-проекте."
          }
        }
      ],
      "seniorTips": [
        "Пишите атомарные коммиты: один коммит — одно логическое изменение. Не коммитьте в одну кучу верстку шапки, правку багов в корзине и обновление конфига!",
        "Никогда не коммитьте папку `node_modules` и файлы с секретами `.env` — они обязательно должны быть в `.gitignore`."
      ],
      "commonMistakes": [
        {
          "bad": "git commit -m 'fix' /* Бессмысленное сообщение */",
          "good": "git commit -m 'fix(checkout): validate promo code on input'",
          "reason": "Четкие сообщения коммитов экономят часы времени при поиске причин регрессионных багов (git bisect)."
        }
      ],
      "keyTakeaways": [
        "Git хранит историю изменений и позволяет безопасно вести параллельную разработку в ветках.",
        "Conventional Commits структурирует историю проекта (feat, fix, refactor, style).",
        "Vite собирает TypeScript и модули в оптимизированный production-бандл."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"git-tree-demo\"><div class=\"git-branch\"><span class=\"branch-tag\">main</span> — v1.0.0 (Production)</div><div class=\"git-branch feat\"><span class=\"branch-tag feat-tag\">feature/quiz</span> — Добавление тестов</div></div>",
      "initialCss": ".git-tree-demo { padding: 20px; background: #0f172a; color: white; border-radius: 12px; font-family: monospace; }\n.git-branch { margin-bottom: 10px; padding: 10px; background: #1e293b; border-radius: 6px; }\n.branch-tag { background: #10b981; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; }\n.feat-tag { background: #6366f1; }",
      "initialJs": "console.log('Tools demo loaded');",
      "instructions": "Посмотрите визуализацию веток Git."
    },
    "task": {
      "title": "Форматирование коммита по стандарту",
      "scenario": "Напишите функцию formatCommit(type, scope, message), возвращающую строку Conventional Commit.",
      "criteria": [
        "Функция формирует строку формата type(scope): message"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Инженерные задачи</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Следуйте инженерным стандартам и культуре чистого кода."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Инженерные задачи</div>",
        "js": "const formatCommit = (type, scope, message) => `${type}(${scope}): ${message}`;\nconsole.log(formatCommit('feat', 'navbar', 'add user profile dropdown'));",
        "explanation": "Стандартизированное форматирование коммитов."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "p2-q1",
          "question": "Какой префикс в Conventional Commits используется для новой функциональности?",
          "options": [
            "bugfix:",
            "feat:",
            "patch:",
            "update:"
          ],
          "correctIndex": 1,
          "explanation": "Префикс feat: обозначает новую фичу (Feature)."
        },
        {
          "id": "p2-q2",
          "question": "Какая папка содержит скомпилированные production-файлы после npm run build?",
          "options": [
            "node_modules/",
            "src/",
            "dist/ (или build/)",
            ".git/"
          ],
          "correctIndex": 2,
          "explanation": "Сборщики (Vite/Webpack) выводят готовый оптимизированный бандл в папку dist/."
        }
      ]
    }
  }
];
