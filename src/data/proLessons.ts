import { Lesson } from '../types/curriculum';

export const proLessons: Lesson[] = [
  {
    "id": "pro-1",
    "moduleId": "pro",
    "level": 1,
    "title": "ИТ-индустрия и командная разработка",
    "subtitle": "Роли в команде, Agile, Scrum, Kanban, Code Review и софт-скиллы",
    "description": "Как устроена коммерческая разработка: роли (Frontend, Backend, QA, PM, UI/UX), спринты, дейли, планирование, культура Code Review и искусство эффективной коммуникации.",
    "estimatedMinutes": 45,
    "difficulty": "intermediate",
    "tags": [
      "Pro",
      "Agile",
      "Scrum",
      "CodeReview",
      "SoftSkills",
      "Teamwork"
    ],
    "theory": {
      "overview": "Написание кода — лишь часть работы инженера. В коммерческой продуктовой разработке успех проекта зависит от слаженности команды, прозрачности процессов и зрелой инженерной культуры.\n\nПонимание ролей в компании и методологий разработки (Scrum/Kanban) помогает стажёру быстро адаптироваться в коллективе, уверенно проходить испытательный срок и расти до уровня Middle.",
      "sections": [
        {
          "title": "Роли в продуктовой IT-команде",
          "content": "- **Product Manager (PM) / Product Owner**: определяет, ЧТО и ЗАЧЕМ нужно бизнесу и пользователям, формирует продуктовый бэклог (Backlog).\n- **UI/UX Designer**: исследует пользовательский опыт, проектирует макеты в Figma и дизайн-систему.\n- **Frontend Developer**: превращает дизайн в быстрый, доступный и надежный интерактивный веб-интерфейс.\n- **Backend Developer**: проектирует архитектуру баз данных, бизнес-логику и REST/GraphQL API.\n- **QA Engineer (Тестировщик)**: ищет краевые случаи, пишет автоматизированные тесты и гарантирует качество релиза.\n- **DevOps / SRE**: настраивает CI/CD пайплайны, облачные серверы и мониторинг отказоустойчивости.",
          "codeExample": {
            "language": "bash",
            "title": "Жизненный цикл фичи (Feature Lifecycle)",
            "code": "1. [Бэклог]     -> ТЗ от Product Manager в Jira/Linear\n2. [Дизайн]     -> Макеты и UI-кит от дизайнера в Figma\n3. [Разработка] -> Ветка feature/auth в Git, написание кода и тестов\n4. [Code Review]-> Проверка кода двумя Senior разработчиками\n5. [QA Testing] -> Тестирование на staging-сервере\n6. [Release]    -> Автоматический деплой на Production",
            "explanation": "Стандартный путь любой фичи от идеи до релиза."
          }
        },
        {
          "title": "Методологии: Scrum vs Kanban",
          "content": "- **Scrum**:\n  • Работа ведется фиксированными отрезками времени — **Спринтами** (обычно 2 недели).\n  • Регулярные церемонии:\n    1. *Sprint Planning* — выбор задач из бэклога в спринт.\n    2. *Daily Standup* (15 мин) — что сделал вчера, что сделаю сегодня, какие есть блокеры.\n    3. *Sprint Demo* — демонстрация готового функционала заказчикам.\n    4. *Retrospective (Ретро)* — анализ успехов и ошибок для улучшения процессов команды.\n- **Kanban**:\n  • Непрерывный поток задач без жестких спринтов. Главный фокус — ограничение задач «в работе» (WIP Limits) и скорость прохождения по колонкам доски (To Do -> In Progress -> Review -> Done).",
          "codeExample": {
            "language": "bash",
            "title": "Шаблон Daily Standup ответа стажера",
            "code": "1. Вчера: закончил верстку карточки товара и настроил адаптив под мобилки.\n2. Сегодня: подключу отправку данных формы заказа к API.\n3. Блокеры: жду от бэкенда тестовый токен авторизации для Swagger.",
            "explanation": "Краткий, емкий и понятный отчет на дейли-митинге."
          }
        },
        {
          "title": "Культура Code Review и Софт-скиллы",
          "content": "- **Code Review**: взаимная проверка Pull Request'ов перед слиянием в основную ветку `main`:\n  • Цель ревью — не «найти виноватого», а повысить качество кода, найти архитектурные ошибки и обменяться знаниями.\n  • **Правило стажёра:** если вам оставили замечание на ревью — поблагодарите за подсказку, задайте уточняющие вопросы и внесите правки.\n- **Правило 15 минут (Как задавать вопросы)**:\n  Если вы застряли на задаче, потратьте 15 минут на самостоятельный поиск (DevTools, документация, Google, поиск по кодовой базе). Если решения нет — обратитесь к ментору со структурированным вопросом: «Я решаю задачу X. Попробовал варианты A и B, получаю ошибку Y. Помоги понять, куда смотреть».",
          "codeExample": {
            "language": "bash",
            "title": "Чеклист перед отправкой Pull Request",
            "code": "[x] Код отформатирован через Prettier и линтер ESLint прошел без ошибок\n[x] Нет закомментированного кода и мусорных console.log\n[x] Проверена адаптивность в DevTools на экранах 375px, 768px и 1440px\n[x] Написаны понятные комментарии к сложным местам логики",
            "explanation": "Самоконтроль перед ревью экономит время команды."
          }
        }
      ],
      "seniorTips": [
        "Никогда не бойтесь задавать вопросы ментору! Самый худший стажёр — тот, кто молча сидит 3 дня над одной строчкой кода и боится показаться некомпетентным.",
        "Оставляйте полезные описания к своим Pull Request: прикрепляйте скриншоты интерфейса и кратко перечисляйте сделанные изменения."
      ],
      "commonMistakes": [
        {
          "bad": "Прятать свои ошибки и до последнего скрывать проблемы от команды",
          "good": "Сразу подсвечивать блокеры на Daily Standup",
          "reason": "Раннее обнаружение проблемы позволяет ментору быстро направить вас в нужное русло."
        }
      ],
      "keyTakeaways": [
        "Продуктовая разработка — это командный спорт, где софт-скиллы так же важны, как знание синтаксиса.",
        "Scrum структурирует работу спринтами, дейли и ретроспективами.",
        "Code Review — главный инструмент профессионального роста разработчика."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"scrum-board\"><div class=\"col\"><h5>To Do</h5><div class=\"task\">Авторизация</div></div><div class=\"col\"><h5>In Progress</h5><div class=\"task\">Корзина</div></div><div class=\"col\"><h5>Done</h5><div class=\"task\">Шапка</div></div></div>",
      "initialCss": ".scrum-board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 20px; background: white; border-radius: 12px; }\n.col { background: #f1f5f9; padding: 12px; border-radius: 8px; }\n.col h5 { margin: 0 0 10px; font-size: 13px; color: #475569; text-transform: uppercase; }\n.task { padding: 10px; background: white; border-radius: 6px; font-size: 13px; font-weight: bold; border-left: 3px solid #4f46e5; }",
      "initialJs": "console.log('Agile board ready');",
      "instructions": "Изучите структуру колонок Kanban/Scrum доски."
    },
    "task": {
      "title": "Составление идеального отчета на Standup",
      "scenario": "Сформируйте структурированный объект отчета для дейли-митинга с полями yesterday, today и blockers.",
      "criteria": [
        "Создан объект отчета",
        "Заполнены поля yesterday, today, blockers"
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
        "js": "const standupReport = {\n  yesterday: 'Сверстал адаптивную сетку каталога',\n  today: 'Интегрирую Fetch-запросы к API товаров',\n  blockers: null\n};\nconsole.log('Дейли отчет готов:', standupReport);",
        "explanation": "Структурированный отчет по стандарту Agile."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "p1-q1",
          "question": "Какова главная цель регулярного Code Review в IT-команде?",
          "options": [
            "Найти повод для штрафа",
            "Повысить качество и безопасность кода, обучить разработчиков и избежать багов в продакшене",
            "Замедлить релиз",
            "Переписать чужой код заново"
          ],
          "correctIndex": 1,
          "explanation": "Code Review направлен на взаимный обмен знаниями и обеспечение высокого качества продукта."
        },
        {
          "id": "p1-q2",
          "question": "Что входит в классический формат ответа на Daily Standup?",
          "options": [
            "Планы на отпуск",
            "Что сделано вчера, что планируется сегодня, есть ли блокеры",
            "Жалобы на погоду",
            "Пересказ всего проекта"
          ],
          "correctIndex": 1,
          "explanation": "Классический стендап отвечает на 3 вопроса: вчера, сегодня, блокеры."
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
