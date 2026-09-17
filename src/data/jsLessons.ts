import { Lesson } from '../types/curriculum';

export const jsLessons: Lesson[] = [
  {
    "id": "javascript-1",
    "moduleId": "javascript",
    "level": 1,
    "title": "Знакомство с JavaScript и среда исполнения",
    "subtitle": "Движок V8, модель памяти, типы данных и эволюция переменных ES6+",
    "description": "Фундаментальное погружение в JavaScript: как движок V8 исполняет код, Call Stack и Memory Heap, строгий режим 'use strict', 8 типов данных, разница между передачей по значению и по ссылке, а также let/const против устаревшего var.",
    "estimatedMinutes": 45,
    "difficulty": "beginner",
    "tags": [
      "JavaScript",
      "V8 Engine",
      "Memory Model",
      "Data Types",
      "let/const",
      "Hoisting",
      "TDZ"
    ],
    "theory": {
      "overview": "JavaScript — это высокоуровневый, однопоточный, динамически типизированный язык программирования с неблокирующим циклом событий (`Event Loop`). Это единственный язык в мире, который нативно исполняется всеми браузерами без необходимости установки сторонних плагинов.\n\nВ современной разработке JavaScript запускается внутри сред исполнения (`Runtime Environment`):\n- **В браузере (Client-side)**: среда предоставляет доступ к `Web APIs` — DOM-дереву, сетевым запросам `fetch`, таймерам `setTimeout` и локальному хранилищу `localStorage`.\n- **На сервере (Node.js / Bun / Deno)**: среда предоставляет доступ к файловой системе (`fs`), операционной системе и сетевым сокетам.\n\nВ основе Chrome, Edge и Node.js лежит сверхбыстрый движок **Google V8**, который транслирует исходный JavaScript-код в оптимизированный машинный код процессора с помощью JIT-компиляции (`Just-In-Time Compilation`).",
      "sections": [
        {
          "title": "Как работает движок V8: Call Stack, Memory Heap и консоль DevTools",
          "content": "Исполнение кода внутри движка V8 опирается на две ключевые структуры данных:\n- **1. Call Stack (Стек вызовов)**: структура данных, работающая по принципу LIFO (`Last In, First Out` — последним вошел, первым вышел). В стек помещаются контексты выполнения функций в момент их вызова. JavaScript однопоточен — у него ровно один стек вызовов, поэтому в один момент времени выполняется только одна операция.\n- **2. Memory Heap (Куча памяти)**: неструктурированная область оперативной памяти, в которой выделяется место под сложные объекты, массивы и функции.\n\n**Инструменты отладки Console API:**\n- `console.log(...)` — базовый вывод информации.\n- `console.warn(...)` — предупреждение (желтый фон в консоли браузера).\n- `console.error(...)` — ошибка с трассировкой стека (Stack Trace).\n- `console.table(data)` — форматированный вывод массива объектов в виде наглядной таблицы.\n- `console.time('timer')` и `console.timeEnd('timer')` — точный замер времени выполнения участка кода в миллисекундах.",
          "codeExample": {
            "language": "javascript",
            "title": "Отладка с помощью Console API",
            "code": "// 1. Замер скорости выполнения цикла\nconsole.time('array-generation');\nconst internList = [\n  { id: 101, name: 'Алексей', score: 95, status: 'Active' },\n  { id: 102, name: 'Мария', score: 88, status: 'Active' }\n];\nconsole.timeEnd('array-generation');\n\n// 2. Красивый табличный вывод в консоль\nconsole.table(internList);\n\n// 3. Предупреждение и логирование\nconsole.warn('Внимание: Проверяется статус готовности к стажировке');",
            "explanation": "Console API предоставляет профессиональные методы отладки: табличный вывод console.table и высокоточные таймеры производительности console.time."
          },
          "image": {
            "src": "/images/lessons/js-memory-model.jpg",
            "alt": "Модель памяти V8: Call Stack (стек вызовов LIFO) и Memory Heap (куча для объектов)",
            "caption": "V8 Memory Model: примитивы хранятся в Call Stack (по значению), объекты — в Memory Heap (по ссылке)"
          }
        },
        {
          "title": "Переменные в современном JS: const, let против устаревшего var",
          "content": "В стандарте ES6 (ECMAScript 2015) были представлены ключевые слова `const` и `let`, полностью заменившие устаревший `var`:\n- **`const` (Константа)**: объявляет неизменяемую привязку идентификатора к значению. Переприсвоить переменную нельзя (`TypeError`). **Индустриальный стандарт: объявляйте через const 90% всех переменных по умолчанию!**\n- **`let` (Изменяемая переменная)**: объявляет переменную, значение которой можно перезаписывать (счётчики циклов, флаги состояния, накапливаемые суммы).\n\n**Почему `var` категорически запрещён в современном коде?**\n- 1. **Область видимости (Scope)**: `const` и `let` имеют **блочную область видимости** (`Block Scope` — ограничены фигурными скобками `{ ... }` блоков `if`, `for`, `while`). Переменная `var` имеет функциональную область видимости и игнорирует блоки условий и циклов, протекая наружу.\n- 2. **Поднятие (Hoisting) и TDZ**: переменная `var` при поднятии инициализируется со значением `undefined`, что скрывает баги. Переменные `let` и `const` также поднимаются, но попадают во **Временную мёртвую зону (Temporal Dead Zone, TDZ)**: попытка обратиться к ним до строки объявления вызовет мгновенную ошибку `ReferenceError`.\n- 3. **Загрязнение глобального объекта**: объявление `var name = 'Alex'` на верхнем уровне создает глобальное свойство `window.name`, перезаписывая системные свойства браузера.",
          "codeExample": {
            "language": "javascript",
            "title": "Разница между блочной областью видимости и мутацией объектов",
            "code": "// 1. const фиксирует ссылку, но свойства объекта можно мутировать\nconst intern = {\n  name: 'Иван',\n  level: 1\n};\nintern.level = 2; // ✅ Разрешено: мутация внутреннего свойства\n// intern = {};   // ❌ Ошибка TypeError: Assignment to constant variable\n\n// 2. Блочная область видимости let\nlet totalScore = 0;\nif (true) {\n  const bonusPoints = 15;\n  totalScore += bonusPoints;\n}\n// console.log(bonusPoints); // ❌ Ошибка ReferenceError: bonusPoints is not defined",
            "explanation": "const для неизменяемых сущностей, let для счетчиков. const запрещает переприсваивание ссылки, но позволяет изменять внутренние свойства объектов."
          }
        },
        {
          "title": "Система 8 типов данных в JavaScript: Примитивы vs Объекты",
          "content": "Все значения в JavaScript делятся на 8 типов данных (7 примитивов + 1 ссылочный тип):\n\n**7 Примитивных типов данных (Хранятся в Stack, передаются по значению):**\n- 1. `string` — строки текста (`'Hello'`, `\"World\"`, шаблонные строки `` `Score: ${score}` ``).\n- 2. `number` — 64-битные числа с плавающей точкой по стандарту IEEE 754 (целые, дробные, а также спецзначения `NaN` и `Infinity`).\n- 3. `bigint` — целые числа произвольной точности для криптографии и финансов (`9007199254740991n`).\n- 4. `boolean` — логические значения (`true` или `false`).\n- 5. `null` — специальное значение, обозначающее явное и намеренное отсутствие объекта.\n- 6. `undefined` — значение переменной, которой еще не было присвоено значение.\n- 7. `symbol` — уникальный и неизменяемый идентификатор (используется для скрытых свойств объектов).\n\n**1 Ссылочный тип данных (Хранится в Heap, передается по ссылке):**\n- 8. `object` — комплексные структуры данных (простые объекты `{}`, массивы `[]`, функции `function`, даты `Date`, коллекции `Map` и `Set`).\n\n**Критическая разница:**\n- Примитивы сравниваются и копируются **по значению** (`by value`).\n- Объекты сравниваются и копируются **по ссылке** (`by reference`) на ячейку в памяти.",
          "codeExample": {
            "language": "javascript",
            "title": "Сравнение передачи по значению и по ссылке",
            "code": "// 1. Примитивы: копирование по значению\nlet a = 42;\nlet b = a;\nb = 100;\nconsole.log(a); // 42 (оригинал не изменился)\n\n// 2. Объекты: копирование по ссылке на один и тот же адрес в Heap\nconst user1 = { name: 'Алексей', score: 10 };\nconst user2 = user1; // user2 указывает на тот же объект в памяти!\nuser2.score = 99;\nconsole.log(user1.score); // 99 (оригинал мутировал!)",
            "explanation": "Примитивы копируются по значению, а объекты по ссылке в оперативной памяти."
          }
        },
        {
          "title": "Оператор typeof, исторические особенности и строгий режим 'use strict'",
          "content": "Для проверки типа значения используется оператор `typeof`:\n- `typeof 'text'` -> `'string'`\n- `typeof 42` -> `'number'`\n- `typeof true` -> `'boolean'`\n- `typeof undefined` -> `'undefined'`\n- `typeof {}` -> `'object'`\n- `typeof []` -> `'object'` (массивы в JS — это разновидность объектов)\n- `typeof function(){}` -> `'function'` (специальный подтип объекта)\n- `typeof null` -> `'object'` ⚠️ **Исторический баг JavaScript с 1995 года**, который невозможно исправить из-за обратной совместимости всего интернета.\n\n**Строгий режим (`'use strict'`):**\nДиректива `'use strict'` в начале файла или функции включает современный строгий режим:\n- Запрещает случайное создание глобальных переменных при опечатке (`mistypedVar = 10` вызовет ошибку, а не создаст переменную в `window`).\n- Превращает скрытые неудачные операции (например, запись в `read-only` свойство) в фатальные ошибки.\n- Запрещает дублирование имен параметров в функциях.\n*В современных ES6-модулях (`import/export`) и React строгий режим включен по умолчанию.*",
          "codeExample": {
            "language": "javascript",
            "title": "Безопасная проверка типов и строгий режим",
            "code": "'use strict';\n\nfunction checkType(value) {\n  // Корректная проверка на null (обход бага typeof)\n  if (value === null) {\n    return 'null';\n  }\n  // Проверка на массив\n  if (Array.isArray(value)) {\n    return 'array';\n  }\n  return typeof value;\n}\n\nconsole.log(checkType(null));        // 'null'\nconsole.log(checkType([1, 2, 3]));   // 'array'\nconsole.log(checkType('Octo'));      // 'string'",
            "explanation": "Оператор typeof корректно определяет примитивы, а для массивов и null требуются специальные проверки Array.isArray и прямое сравнение."
          }
        },
        {
          "title": "Рекомендуемые видеоуроки и практические материалы по JavaScript",
          "content": "Для закрепления фундаментальных основ JavaScript, наглядного знакомства со средой исполнения и закрепления тем первого уровня рекомендуем изучить следующие видеоматериалы:\n\n- **[Полный курс по основам JavaScript с нуля (YouTube)](https://youtu.be/maPRR_jjyOE?si=GeU3ZDeas59Non4w)** — фундаментальный видеоурок с детальным разбором синтаксиса, типов данных, переменных и базовых алгоритмических конструкций.\n- **[JavaScript для начинающих: ключевые концепции и практика (YouTube)](https://youtu.be/_jkiPoDmHnE?si=oGH4dyRr8O8zs18h)** — практический видеоурок с разбором работы среды исполнения, функций, объектов и типичных ошибок начинающих разработчиков.\n- **[JavaScript: основы для начинающих и практика написания кода (YouTube)](https://youtu.be/fcMcf_4PjfI?si=EyzPgUUxoz-taLyG)** — детальный видеоурок с пошаговыми примерами, закреплением синтаксиса, работой с функциями и решением практических задач."
        }
      ],
      "seniorTips": [
        "Всегда пишите const по умолчанию. Используйте let только тогда, когда переменная действительно будет перезаписана (например, счетчик i в цикле for).",
        "Никогда не используйте var. В современных проектах линтер ESLint обязан быть настроен с правилом no-var: error.",
        "Для проверки массивов всегда используйте статический метод Array.isArray(val), так как typeof [] возвращает 'object'.",
        "Для проверки на null используйте прямое строгое равенство val === null, так как typeof null возвращает 'object'.",
        "Всегда используйте строгое равенство (===) вместо нестрогого (==), чтобы исключить неявное приведение типов (Type Coercion).",
        "Помните, что const защищает только саму ссылку на объект. Чтобы сделать объект по-настоящему неизменяемым, используйте Object.freeze(obj)."
      ],
      "commonMistakes": [
        {
          "bad": "/* Использование var и утечка из блока */\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n// Выведет: 3, 3, 3",
          "good": "/* Использование let создает новую переменную на каждой итерации */\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n// Выведет: 0, 1, 2",
          "reason": "var имеет функциональную область видимости — все замыкания в setTimeout ссылаются на одну и ту же переменную i. let имеет блочную область видимости и создает отдельную привязку для каждого шага цикла."
        },
        {
          "bad": "/* Неявное создание глобальной переменной */\nfunction calculateTotal(price) {\n  tax = price * 0.2; // забыли const/let — утечка в window.tax!\n  return price + tax;\n}",
          "good": "function calculateTotal(price) {\n  'use strict';\n  const tax = price * 0.2;\n  return price + tax;\n}",
          "reason": "Без 'use strict' присваивание необъявленной переменной не выдает ошибки, а неявно создает свойство в глобальном объекте window, порождая трудноуловимые баги."
        },
        {
          "bad": "const original = { theme: 'dark', score: 100 };\nconst duplicate = original;\nduplicate.score = 200; // Мутировал original!",
          "good": "const original = { theme: 'dark', score: 100 };\nconst duplicate = { ...original }; // Поверхностное иммутабельное копирование\nduplicate.score = 200; // original.score остался 100",
          "reason": "Копирование объекта через знак = копирует только ссылку в памяти. Изменение дубликата неизбежно мутирует исходный объект."
        },
        {
          "bad": "if (typeof data === 'object') {\n  console.log(data.length); // Упадет с TypeError, если data === null!\n}",
          "good": "if (data !== null && typeof data === 'object') {\n  console.log(Array.isArray(data) ? data.length : Object.keys(data).length);\n}",
          "reason": "Исторический баг typeof null === 'object' приводит к падению приложения при попытке прочитать свойства у значения null."
        }
      ],
      "keyTakeaways": [
        "JavaScript — однопоточный язык с единым Call Stack и асинхронным циклом событий Event Loop.",
        "Движок V8 преобразует JS в машинный код с помощью JIT-компиляции (Ignition + TurboFan).",
        "В JS существует 7 примитивных типов (передаются по значению) и 1 ссылочный тип Object (передается по ссылке).",
        "const объявляет константу (90% кода), let объявляет изменяемую переменную с блочной областью видимости.",
        "var устарел и опасен из-за функциональной области видимости и поднятия без Temporal Dead Zone.",
        "typeof null возвращает 'object' — это исторический баг языка, требующий проверки val === null."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"js-inspector-card\">\n  <h2>Инспектор типов и памяти V8</h2>\n  <p class=\"desc\">Тестирование типов данных, мутации ссылок и работы 'use strict'.</p>\n  \n  <div class=\"controls-grid\">\n    <button type=\"button\" class=\"btn\" onclick=\"runPrimitivesDemo()\">1. Примитивы (По значению)</button>\n    <button type=\"button\" class=\"btn\" onclick=\"runObjectsDemo()\">2. Объекты (По ссылке)</button>\n    <button type=\"button\" class=\"btn\" onclick=\"runTypeofInspector()\">3. Проверить 8 типов</button>\n  </div>\n\n  <div class=\"console-window\">\n    <div class=\"console-title\">Терминал вывода DevTools:</div>\n    <pre id=\"js-log\" class=\"log-output\">Нажмите кнопку для запуска кода...</pre>\n  </div>\n</div>",
      "initialCss": ".js-inspector-card {\n  background: #0a0e13;\n  border: 1px solid #1a2230;\n  border-left: 4px solid #eab308;\n  padding: 24px;\n  border-radius: 8px;\n  color: #d6f5e3;\n  font-family: 'Inter', sans-serif;\n  max-width: 540px;\n}\nh2 { font-size: 20px; margin-bottom: 6px; color: #ffffff; }\n.desc { font-size: 13px; color: #a8c8b6; margin-bottom: 20px; line-height: 1.5; }\n.controls-grid { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }\n.btn {\n  background: #0f141a;\n  border: 1px solid #233044;\n  color: #2dff8a;\n  padding: 10px 16px;\n  border-radius: 4px;\n  font-family: 'JetBrains Mono', monospace;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.2s;\n}\n.btn:hover {\n  background: rgba(45, 255, 138, 0.1);\n  border-color: #2dff8a;\n}\n.console-window {\n  background: #03060a;\n  border: 1px solid #1a2230;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.console-title {\n  background: #0f141a;\n  padding: 6px 12px;\n  font-size: 11px;\n  font-family: 'JetBrains Mono', monospace;\n  color: #6c8a7b;\n  text-transform: uppercase;\n  border-bottom: 1px solid #1a2230;\n}\n.log-output {\n  padding: 14px;\n  font-family: 'JetBrains Mono', monospace;\n  font-size: 12px;\n  line-height: 1.6;\n  color: #2dff8a;\n  margin: 0;\n  white-space: pre-wrap;\n  max-height: 180px;\n  overflow-y: auto;\n}",
      "initialJs": "function log(msg) {\n  document.getElementById('js-log').innerText = msg;\n}\n\nfunction runPrimitivesDemo() {\n  let x = 100;\n  let y = x;\n  y = 500;\n  log('[Примитив number - по значению]\\nlet x = 100;\\nlet y = x;\\ny = 500;\\n\\nРезультат: x = ' + x + ', y = ' + y + '\\nОригинал x остался 100!');\n}\n\nfunction runObjectsDemo() {\n  const userA = { name: 'Ольга', score: 50 };\n  const userB = userA;\n  userB.score = 99;\n  log('[Объект object - по ссылке]\\nconst userA = { score: 50 };\\nconst userB = userA;\\nuserB.score = 99;\\n\\nРезультат: userA.score = ' + userA.score + '\\nuserA изменился, так как userB ссылается на тот же объект!');\n}\n\nfunction runTypeofInspector() {\n  const results = [\n    'typeof \\'hello\\'      -> ' + typeof 'hello',\n    'typeof 42           -> ' + typeof 42,\n    'typeof true         -> ' + typeof true,\n    'typeof undefined    -> ' + typeof undefined,\n    'typeof null         -> ' + typeof null + ' (⚠️ баг JS)',\n    'typeof Symbol(\\'id\\') -> ' + typeof Symbol('id'),\n    'typeof [1, 2]       -> ' + typeof [1, 2] + ' (массив)',\n    'typeof function(){} -> ' + typeof function(){}\n  ].join('\\n');\n  log('[Инспекция 8 типов данных]\\n' + results);\n}\nconsole.log('Песочница JavaScript Уровень 1 готова к тестам!');",
      "instructions": "Нажимайте на интерактивные кнопки песочницы, чтобы наглядно увидеть разницу между передачей примитивов по значению и объектов по ссылке."
    },
    "task": {
      "title": "Разработка модуля валидации стажёра на ES6+",
      "scenario": "Вам необходимо написать чистую функцию инициализации и валидации профиля стажёра. Функция должна строго использовать const и let, проверять типы входных данных с помощью typeof и Array.isArray, и возвращать иммутабельный объект карточки инженера.",
      "criteria": [
        "Использован строгий режим 'use strict'",
        "Все переменные объявлены исключительно через const или let (без var)",
        "Реализована проверка типов (name — string, score — number, skills — массив)",
        "Функция возвращает новый объект профиля без мутации входных данных"
      ],
      "starterCode": {
        "html": "<div id=\"app\"></div>",
        "css": "body { font-family: monospace; padding: 20px; background: #0a0e13; color: #2dff8a; }",
        "js": "'use strict';\n\nfunction createInternProfile(name, score, skills) {\n  // 1. Проверьте типы данных\n  \n  // 2. Верните иммутабельный объект профиля\n}\n\nconst profile = createInternProfile('Алексей', 95, ['HTML5', 'CSS3', 'JS']);\nconsole.log(profile);\n"
      },
      "hints": [
        "Для проверки массива используйте Array.isArray(skills).",
        "Для создания копии массива навыков используйте спред-оператор [...skills].",
        "Выбрасывайте исключение throw new TypeError(...) при некорректных типах аргументов."
      ],
      "solution": {
        "html": "<div id=\"app\">Профиль успешно создан</div>",
        "css": "body { font-family: monospace; color: #2dff8a; }",
        "js": "'use strict';\n\nfunction createInternProfile(name, score, skills) {\n  if (typeof name !== 'string') {\n    throw new TypeError('Имя должно быть строкой');\n  }\n  if (typeof score !== 'number' || Number.isNaN(score)) {\n    throw new TypeError('Баллы должны быть валидным числом');\n  }\n  if (!Array.isArray(skills)) {\n    throw new TypeError('Навыки должны быть массивом');\n  }\n\n  return {\n    name,\n    score,\n    skills: [...skills],\n    createdAt: new Date().toISOString(),\n    status: score >= 70 ? 'passed' : 'in-progress'\n  };\n}\n\nconst intern = createInternProfile('Алексей', 95, ['HTML5', 'CSS3', 'ES6+']);\nconsole.log('Создан профиль:', intern);",
        "explanation": "Использование const и let по стандартам ES6+, строгая проверка типов и иммутабельное создание структуры данных."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j1-q1",
          "question": "Какая из отмеченных строк выбросит ошибку и почему?",
          "codeSnippet": "const config = { theme: 'dark' };\nconfig.theme = 'light';        // (1)\nconfig = { theme: 'light' };   // (2)",
          "options": [
            "Первая: объявление через `const` запрещает изменять свойства объекта",
            "Вторая: `const` запрещает переприсваивать привязку, но не менять содержимое",
            "Обе: объект, объявленный через `const`, становится полностью неизменяемым",
            "Ни одна: ошибка возникнет только при включённом строгом режиме"
          ],
          "correctIndex": 1,
          "explanation": "`const` защищает саму привязку имени к значению, а не данные по ссылке. Менять свойства, добавлять и удалять их можно сколько угодно — запрещено лишь присвоить переменной другое значение, что и делает вторая строка, получая `TypeError`. Чтобы запретить изменение содержимого, нужен `Object.freeze`, причём он работает только на верхнем уровне."
        },
        {
          "id": "j1-q2",
          "question": "Что вернёт каждое из этих четырёх выражений typeof?",
          "codeSnippet": "typeof null\ntypeof []\ntypeof NaN\ntypeof function () {}",
          "options": [
            "`'null'`, `'array'`, `'NaN'`, `'function'`",
            "`'object'`, `'array'`, `'number'`, `'object'`",
            "`'object'`, `'object'`, `'number'`, `'function'`",
            "`'undefined'`, `'object'`, `'number'`, `'function'`"
          ],
          "correctIndex": 2,
          "explanation": "Здесь собраны сразу три ловушки. `typeof null` даёт `'object'` — историческая ошибка первой реализации языка, которую не стали исправлять ради совместимости. Массив — это объект, отдельного типа для него нет, поэтому проверяют через `Array.isArray`. `NaN` формально относится к числам, ведь это «не число» внутри числового типа, и ловят его через `Number.isNaN`. Функция — единственный объект, для которого `typeof` возвращает особое значение."
        },
        {
          "id": "j1-q3",
          "question": "Что произойдёт на каждой из первых двух строк?",
          "codeSnippet": "console.log(a); // (1)\nconsole.log(b); // (2)\nvar a = 1;\nlet b = 2;",
          "options": [
            "Первая выведет `undefined`, вторая выбросит `ReferenceError` из-за мёртвой зоны",
            "Обе выведут `undefined`: объявления поднимаются в начало области видимости",
            "Обе выбросят `ReferenceError`: до строки объявления переменных не существует",
            "Первая выбросит `ReferenceError`, а вторая спокойно выведет `undefined`"
          ],
          "correctIndex": 0,
          "explanation": "Поднимаются оба объявления, но по-разному. Переменная, объявленная через `var`, сразу инициализируется значением `undefined`, поэтому обращение к ней проходит молча и порождает трудноуловимые баги. Объявленная через `let` существует, но остаётся неинициализированной до самой строки объявления — этот участок и называют временной мёртвой зоной, а обращение к переменной в нём немедленно даёт `ReferenceError`."
        },
        {
          "id": "j1-q4",
          "question": "Почему для проверки массива используют `Array.isArray(v)`, а не `v instanceof Array`?",
          "options": [
            "`instanceof` работает только с литералами и не распознаёт результат `new Array()`",
            "`instanceof` возвращает строку, а не логическое значение, и требует сравнения",
            "`instanceof` ломается на массивах из другого контекста, например пришедших из iframe",
            "`instanceof` вообще не умеет отличать массивы от обычных объектов"
          ],
          "correctIndex": 2,
          "explanation": "`instanceof` сверяет цепочку прототипов с конкретным конструктором, а у каждого окна и фрейма свой собственный `Array` со своим прототипом. Массив, созданный в iframe и переданный наружу, проверку не пройдёт, хотя массивом является. `Array.isArray` опирается на внутреннюю метку значения и работает одинаково в любом контексте."
        },
        {
          "id": "j1-q5",
          "question": "Что выведет этот код при копировании объекта через оператор расширения?",
          "codeSnippet": "const a = { list: [1, 2] };\nconst b = { ...a };\nb.list.push(3);\nconsole.log(a.list.length);",
          "options": [
            "3 — копия поверхностная, и вложенный массив остался общим для обоих объектов",
            "2 — оператор расширения создаёт полностью независимую копию объекта",
            "Ошибка `TypeError`: объект, объявленный через `const`, изменять нельзя",
            "`undefined` — после копирования исходный объект теряет свои свойства"
          ],
          "correctIndex": 0,
          "explanation": "Оператор расширения копирует свойства на один уровень вглубь. Значением свойства `list` является ссылка на массив, и в копию попадает та же самая ссылка — оба объекта указывают на один массив в памяти. Для по-настоящему независимой копии нужен глубокий клон: `structuredClone(a)` в современных средах или рекурсивный обход."
        }
      ]
    }
  },
  {
    "id": "javascript-2",
    "moduleId": "javascript",
    "level": 2,
    "title": "Функции, область видимости и замыкания",
    "subtitle": "Function Declaration vs Expression, Arrow Functions, Scope Chain и Closures",
    "description": "Изучите все виды функций в JavaScript, разберитесь в цепочке областей видимости (Scope Chain), освойте замыкания (Closures) и научитесь использовать параметры по умолчанию, rest/spread и деструктуризацию.",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "functions",
      "scope",
      "closures",
      "arrow-functions",
      "destructuring",
      "ES6+"
    ],
    "theory": {
      "overview": "Функции — это фундаментальный строительный блок JavaScript. Они позволяют инкапсулировать логику, переиспользовать код и создавать абстракции. В JavaScript функции являются объектами первого класса (First-Class Citizens): их можно присваивать переменным, передавать как аргументы, возвращать из других функций и хранить в структурах данных.\n\nПонимание области видимости (Scope) и замыканий (Closures) — один из ключевых водоразделов между junior и middle уровнем. Эти концепции лежат в основе модульности, приватности данных, React-хуков, middleware и большинства паттернов проектирования.",
      "sections": [
        {
          "title": "Виды функций в JavaScript: Declaration, Expression, Arrow",
          "content": "JavaScript предоставляет несколько способов объявления функций, каждый со своими особенностями:\n\n1. Function Declaration (объявление функции):\n`function greet(name) { return 'Hello, ' + name; }`\nОсобенности:\n- Hoisting: доступна ДО объявления (поднимается вместе с телом)\n- Имеет собственный `this`, определяемый вызовом\n- Имеет объект `arguments`\n- Может быть использована как конструктор (`new`)\n\n2. Function Expression (функциональное выражение):\n`const greet = function(name) { return 'Hello, ' + name; };`\nОсобенности:\n- НЕ поднимается (hoisting работает только для переменной, не для значения)\n- Присваивается в переменную — можно передавать и возвращать\n- Может быть именованной (Named Function Expression) для дебаггинга: `const greet = function greeting(name) {...}`\n\n3. Arrow Function (стрелочная функция, ES6+):\n`const greet = (name) => 'Hello, ' + name;`\nОсобенности:\n- Краткий синтаксис: без `function`, если одно выражение — без `return` и `{}`\n- НЕ имеет собственного `this` — наследует `this` из окружающего лексического контекста (Lexical `this`)\n- НЕ имеет `arguments` (используйте rest: `...args`)\n- НЕ может быть конструктором (`new`)\n- Идеальна для callback-ов: `.map()`, `.filter()`, `.reduce()`, обработчики событий\n\n4. IIFE (Immediately Invoked Function Expression):\n`(function() { /* код */ })();`\nНемедленно выполняется и создаёт изолированную область видимости. Использовалась до ES6-модулей для инкапсуляции.\n\nКогда что использовать?\n- Методы объектов, конструкторы → Function Declaration (нужен `this`)\n- Callback-ы, .map/.filter/.reduce → Arrow Function (краткий синтаксис, нет `this`)\n- Экспортируемые функции → `export const fn = () => {}` или `export function fn() {}`",
          "image": {
            "src": "/images/lessons/js-functions-scope.jpg",
            "alt": "Цепочка областей видимости JavaScript: Global Scope → Function Scope → Block Scope и замыкание",
            "caption": "Scope Chain: каждая функция сохраняет ссылку на родительский скоуп. Замыкание позволяет функции запоминать переменные даже после завершения родительского контекста."
          },
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Function Declaration — hoisting работает\nconsole.log(add(2, 3)); // 5 — доступна до объявления\nfunction add(a, b) {\n  return a + b;\n}\n\n// 2. Function Expression — hoisting НЕ работает\n// console.log(multiply(2, 3)); // ReferenceError!\nconst multiply = function(a, b) {\n  return a * b;\n};\n\n// 3. Arrow Function — краткий синтаксис\nconst square = (x) => x * x;\nconst sum = (a, b) => a + b;\nconst greet = (name) => {\n  const greeting = `Привет, ${name}!`;\n  return greeting;\n};\n\n// 4. Arrow vs Regular: поведение this\nconst user = {\n  name: 'Алексей',\n  // Regular: this = user (объект вызова)\n  sayHi() { console.log(this.name); },  // 'Алексей'\n  // Arrow: this = внешний контекст (window/undefined)\n  sayBye: () => { console.log(this.name); }  // undefined!\n};",
            "title": "4 вида функций: Declaration, Expression, Arrow, Method",
            "explanation": "Declaration поднимается целиком. Expression поднимает только переменную (TDZ для const). Arrow наследует this лексически — нельзя использовать как метод объекта, где нужен this."
          }
        },
        {
          "title": "Scope Chain: глобальная, функциональная и блочная область видимости",
          "content": "Область видимости (Scope) определяет, какие переменные доступны в конкретном месте кода. JavaScript использует лексическую (статическую) область видимости — она определяется при НАПИСАНИИ кода, а не при выполнении.\n\nТри уровня scope:\n\n1. Global Scope — переменные, объявленные вне любой функции или блока. Доступны везде. В браузере привязаны к объекту `window`.\nОпасность: загрязнение глобальной области видимости (Global Scope Pollution) приводит к конфликтам имён между библиотеками.\n\n2. Function Scope — переменные внутри функции. Создаётся заново при каждом вызове функции. `var` имеет function scope.\n\n3. Block Scope (ES6+) — переменные внутри блока `{ }`: if, for, while, обычный блок. `let` и `const` имеют block scope.\n\nScope Chain (цепочка областей видимости):\nКогда движок V8 встречает переменную, он ищет её последовательно:\n1. В текущем скоупе\n2. В родительском скоупе\n3. В глобальном скоупе\n4. Если не найдена — `ReferenceError`\n\nПоиск идёт ВВЕРХ по цепочке (от внутреннего к внешнему), но НИКОГДА вниз. Функция может читать переменные родителя, но родитель не может читать переменные дочерней функции.\n\n`var` vs `let`/`const` — ключевые отличия:\n- `var`: function scope, hoisting с `undefined`, можно переобъявить\n- `let`: block scope, TDZ (Temporal Dead Zone), нельзя переобъявить\n- `const`: block scope, TDZ, нельзя переприсвоить ссылку (но свойства объекта мутабельны!)",
          "codeExample": {
            "language": "javascript",
            "code": "// Scope Chain демонстрация\nconst globalVar = 'Я глобальная';  // Global scope\n\nfunction outer() {\n  const outerVar = 'Я из outer';  // Function scope\n\n  function inner() {\n    const innerVar = 'Я из inner';  // Function scope\n\n    if (true) {\n      const blockVar = 'Я блочная';  // Block scope\n      // Доступно всё: blockVar, innerVar, outerVar, globalVar\n      console.log(globalVar);  // ✅ Scope Chain ↑\n      console.log(outerVar);   // ✅ Scope Chain ↑\n      console.log(innerVar);   // ✅ Текущий function scope\n      console.log(blockVar);   // ✅ Текущий block scope\n    }\n\n    // console.log(blockVar); // ❌ ReferenceError!\n  }\n\n  inner();\n  // console.log(innerVar); // ❌ ReferenceError!\n}\n\nouter();\n\n// var vs let в цикле\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log('var:', i), 100);  // 3, 3, 3\n}\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log('let:', j), 100);  // 0, 1, 2\n}",
            "title": "Scope Chain и var vs let в цикле",
            "explanation": "Scope Chain ищет переменные вверх по цепочке вложенности. var i — один экземпляр для всего цикла (function scope), setTimeout замыкается на финальное значение 3. let j — новый экземпляр для каждой итерации (block scope), корректно замыкается."
          }
        },
        {
          "title": "Замыкания (Closures): приватность, фабрики и каррирование",
          "content": "Замыкание (Closure) — это фундаментальная концепция JavaScript. Замыкание возникает, когда функция запоминает и продолжает иметь доступ к переменным своей лексической области видимости, даже после того как родительская функция завершила выполнение.\n\nТехнически: при создании функции движок V8 сохраняет ссылку на Lexical Environment родительского скоупа. Эта ссылка НЕ очищается сборщиком мусора (Garbage Collector), пока замыкающая функция существует.\n\nПрактическое применение замыканий:\n\n1. Приватные переменные — инкапсуляция состояния, недоступного извне:\nФункция-фабрика возвращает объект/функцию с доступом к внутренним переменным, при этом сами переменные скрыты от внешнего кода.\n\n2. Функции-фабрики — создание настроенных функций:\n`function createMultiplier(factor)` возвращает функцию, которая умножает на factor.\n\n3. Каррирование (Currying) — трансформация функции с несколькими аргументами в последовательность функций с одним:\n`const add = (a) => (b) => a + b; add(5)(3) // 8`\n\n4. Мемоизация — кэширование результатов вычислений в замыкании.\n\n5. Event handlers и callback-ы — обработчики событий замыкаются на переменные из окружающего скоупа.\n\n6. React Hooks — useState, useEffect, useCallback — все основаны на замыканиях. Каждый рендер создаёт новое замыкание с актуальным состоянием.",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Приватный счётчик (инкапсуляция)\nfunction createCounter(initial = 0) {\n  let count = initial;  // Приватная переменная\n\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount: () => count,\n    reset: () => { count = initial; }\n  };\n}\n\nconst counter = createCounter(10);\ncounter.increment(); // 11\ncounter.increment(); // 12\n// counter.count — undefined! Приватная!\n\n// 2. Фабрика функций\nconst createGreeter = (greeting) => {\n  return (name) => `${greeting}, ${name}!`;\n};\nconst helloRu = createGreeter('Привет');\nconst helloEn = createGreeter('Hello');\nhelloRu('Алексей');  // 'Привет, Алексей!'\nhelloEn('Alex');      // 'Hello, Alex!'\n\n// 3. Мемоизация\nfunction memoize(fn) {\n  const cache = new Map();\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n}\nconst expensiveCalc = memoize((n) => {\n  console.log('Вычисляю...');\n  return n * n;\n});\nexpensiveCalc(5); // 'Вычисляю...' → 25\nexpensiveCalc(5); // из кэша → 25",
            "title": "Замыкания: приватность, фабрики и мемоизация",
            "explanation": "createCounter замыкает count — она приватна и недоступна извне. createGreeter замыкает greeting — каждый вызов фабрики создаёт новое замыкание. memoize замыкает cache (Map) — кэш живёт между вызовами."
          }
        },
        {
          "title": "ES6+ синтаксис: деструктуризация, rest/spread, параметры по умолчанию",
          "content": "ES6 (ECMAScript 2015) и последующие версии значительно расширили синтаксис JavaScript. Эти фичи — стандарт в продакшен-коде и React-разработке.\n\nДеструктуризация — извлечение значений из объектов и массивов в отдельные переменные:\n\nОбъектная деструктуризация: `const { name, age } = user;`\n- Переименование: `const { name: userName } = user;`\n- Значения по умолчанию: `const { role = 'intern' } = user;`\n- Вложенная: `const { address: { city } } = user;`\n\nМассивная деструктуризация: `const [first, second, ...rest] = items;`\n- Пропуск элементов: `const [, second] = items;`\n- Обмен значений: `[a, b] = [b, a];`\n\nRest-параметры (`...args`) — сбор оставшихся аргументов в массив:\n`function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }`\n\nSpread-оператор (`...`) — разворачивание массивов и объектов:\n- Копирование массива: `const copy = [...original]`\n- Объединение: `const merged = [...arr1, ...arr2]`\n- Копирование объекта: `const copy = { ...original }`\n- Расширение: `const updated = { ...user, role: 'senior' }` — shallow copy!\n\nПараметры по умолчанию:\n`function createUser(name, role = 'intern', active = true) { ... }`\nВычисляются при каждом вызове. Могут зависеть от предыдущих параметров:\n`function createId(prefix, index = 0) { return prefix + '-' + index; }`\n\nОператор Optional Chaining (`?.`):\n`user?.address?.city` — безопасный доступ к вложенным свойствам. Возвращает `undefined` вместо TypeError.\n\nNullish Coalescing (`??`):\n`const name = user.name ?? 'Аноним'` — возвращает правую часть ТОЛЬКО при `null` или `undefined` (в отличие от `||`, который также реагирует на `0`, `''`, `false`).",
          "codeExample": {
            "language": "javascript",
            "code": "// Деструктуризация в параметрах функции\nfunction displayProfile({\n  name,\n  role = 'Intern',\n  skills = [],\n  contact: { email, phone = 'не указан' } = {}\n}) {\n  console.log(`${name} (${role})`);\n  console.log(`Email: ${email}, Тел: ${phone}`);\n  console.log(`Навыки: ${skills.join(', ')}`);\n}\n\ndisplayProfile({\n  name: 'Алексей',\n  skills: ['HTML', 'CSS', 'JS'],\n  contact: { email: 'alex@dev.ru' }\n});\n\n// Rest + Spread\nconst [lead, ...team] = ['Мария', 'Олег', 'Анна'];\nconsole.log(lead);  // 'Мария'\nconsole.log(team);  // ['Олег', 'Анна']\n\n// Immutable update (React-паттерн)\nconst state = { count: 5, theme: 'dark' };\nconst newState = { ...state, count: state.count + 1 };\n// { count: 6, theme: 'dark' }\n\n// Optional Chaining + Nullish Coalescing\nconst city = user?.address?.city ?? 'Не указан';\nconst score = response?.data?.score ?? 0;",
            "title": "Деструктуризация, rest/spread и optional chaining",
            "explanation": "Деструктуризация в параметрах функции — стандартный паттерн React-компонентов ({ props }). Spread для immutable updates — основа Redux и React state. ?. и ?? — безопасный доступ к вложенным данным."
          }
        },
        {
          "title": "Рекомендуемые видеоуроки по ES6+, Optional Chaining и Nullish Coalescing",
          "content": "Для наглядного закрепления синтаксиса ES6+, безопасной работы со свойствами и значениями по умолчанию рекомендуем изучить видеоурок:\n\n- **[Операторы Nullish Coalescing (??) и Optional Chaining (?.) в JavaScript простыми словами (YouTube)](https://youtu.be/zyjhDRKpqm8?si=O-yqKG6a4W8XaCzZ)** — подробный видеоразбор оператора нулевого слияния `??` и опциональной цепочки `?.`, разница с логическим ИЛИ `||` и защита от ошибок `TypeError: Cannot read properties of undefined`."
        }
      ],
      "seniorTips": [
        "Arrow functions наследуют this лексически. Никогда не используйте arrow для методов объекта, где нужен this (obj.method = () => {} — антипаттерн).",
        "Замыкания в цикле с var — классический вопрос на собеседовании. Используйте let (block scope) или IIFE для создания нового скоупа на каждой итерации.",
        "Spread-оператор создаёт SHALLOW (неглубокую) копию. Для deep copy используйте structuredClone() (ES2022) или рекурсию.",
        "Деструктуризация параметров с default values — стандарт React-компонентов: function Button({ variant = 'primary', size = 'md', children }) {...}"
      ],
      "commonMistakes": [
        {
          "bad": "const user = {\n  name: 'Алексей',\n  greet: () => {\n    console.log(this.name); // undefined!\n  }\n};",
          "good": "const user = {\n  name: 'Алексей',\n  greet() {\n    console.log(this.name); // 'Алексей'\n  }\n};",
          "reason": "Arrow function не имеет собственного this — она наследует его из внешнего лексического контекста (в данном случае window/global). Для методов объекта используйте сокращённый синтаксис метода."
        },
        {
          "bad": "for (var i = 0; i < 5; i++) {\n  setTimeout(() => console.log(i), 100);\n  // Выведет: 5, 5, 5, 5, 5\n}",
          "good": "for (let i = 0; i < 5; i++) {\n  setTimeout(() => console.log(i), 100);\n  // Выведет: 0, 1, 2, 3, 4\n}",
          "reason": "var имеет function scope — одна переменная i для всего цикла. К моменту выполнения setTimeout, i === 5. let создаёт новый block scope на каждой итерации — замыкание захватывает актуальное значение."
        },
        {
          "bad": "const copy = original;\ncopy.name = 'Новое имя';\n// original.name тоже изменился!",
          "good": "const copy = { ...original };\ncopy.name = 'Новое имя';\n// original.name не изменился",
          "reason": "Присвоение объекта копирует ССЫЛКУ, а не данные. Оба имени указывают на один объект в памяти. Spread создаёт новый объект с копиями свойств (shallow copy)."
        }
      ],
      "keyTakeaways": [
        "Function Declaration поднимается целиком (hoisting), Expression и Arrow — нет. Arrow не имеет собственного `this` и `arguments`.",
        "Scope Chain ищет переменные от текущего скоупа вверх: Block → Function → Global. `let`/`const` — block scope, `var` — function scope.",
        "Замыкание (Closure) — функция сохраняет доступ к переменным родительского скоупа даже после его завершения. Применение: приватность, фабрики, мемоизация, React hooks.",
        "Деструктуризация, rest (`...args`), spread (`{...obj}`) и optional chaining (`?.`) — стандартный синтаксис ES6+ в продакшен-коде.",
        "`??` (nullish coalescing) реагирует только на `null`/`undefined`, в отличие от `||`, который также проглатывает `0`, `''` и `false`."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"output\"></div>",
      "initialCss": "#output { font-family: monospace; white-space: pre-wrap; padding: 16px; color: #2dff8a; background: #0a0e13; min-height: 200px; }",
      "initialJs": "const out = document.getElementById('output');\nconst log = (msg) => out.textContent += msg + '\\n';\n\n// Задание: создайте функцию createCounter\n// с методами increment, decrement, getCount, reset\n\n// const counter = createCounter(10);\n// log(counter.increment()); // 11\n// log(counter.increment()); // 12\n// log(counter.decrement()); // 11\n// log(counter.getCount());  // 11\n// counter.reset();\n// log(counter.getCount());  // 10",
      "instructions": "Реализуйте функцию-фабрику createCounter с замыканием:\n1. Принимает начальное значение (default = 0)\n2. Возвращает объект с методами: increment, decrement, getCount, reset\n3. Переменная count должна быть приватной (недоступной извне)\n4. Раскомментируйте тестовый код и проверьте результат"
    },
    "task": {
      "title": "Модуль валидации форм на замыканиях",
      "scenario": "Вам поручили создать модуль валидации форм с использованием замыканий. Модуль должен создавать валидаторы для разных полей формы, кэшировать результаты и предоставлять API для проверки.",
      "criteria": [
        "Функция createValidator(rules) принимает объект с правилами валидации",
        "Возвращает объект с методом validate(fieldName, value) → { valid, errors }",
        "Правила поддерживают: required, minLength, maxLength, pattern (regex), custom (функция)",
        "Результаты кэшируются в замыкании (мемоизация) — повторная проверка того же значения берётся из кэша",
        "Используйте деструктуризацию в параметрах и rest/spread операторы",
        "Метод getErrors() возвращает все текущие ошибки"
      ],
      "starterCode": {
        "js": "function createValidator(rules) {\n  // Ваш код здесь\n  // Используйте замыкание для хранения кэша и ошибок\n}"
      },
      "hints": [
        "Используйте Map() в замыкании для кэширования: const cache = new Map()",
        "Ключ кэша: JSON.stringify({ field, value })",
        "Деструктурируйте правила: const { required, minLength, ...rest } = rules[fieldName]",
        "Каждое правило — отдельная проверка, ошибки собираются в массив"
      ],
      "solution": {
        "js": "function createValidator(rules) {\n  const cache = new Map();\n  const allErrors = {};\n\n  return {\n    validate(field, value) {\n      const key = JSON.stringify({ field, value });\n      if (cache.has(key)) return cache.get(key);\n\n      const { required, minLength, maxLength, pattern, custom } = rules[field] ?? {};\n      const errors = [];\n\n      if (required && !value?.trim()) errors.push('Обязательное поле');\n      if (minLength && value.length < minLength) errors.push(`Минимум ${minLength} символов`);\n      if (maxLength && value.length > maxLength) errors.push(`Максимум ${maxLength} символов`);\n      if (pattern && !pattern.test(value)) errors.push('Неверный формат');\n      if (custom && !custom(value)) errors.push('Не прошло проверку');\n\n      const result = { valid: errors.length === 0, errors };\n      cache.set(key, result);\n      allErrors[field] = errors;\n      return result;\n    },\n    getErrors: () => ({ ...allErrors }),\n    clearCache: () => cache.clear()\n  };\n}",
        "explanation": "cache (Map) и allErrors хранятся в замыкании — приватные. validate деструктурирует правила из rules[field]. Каждая проверка добавляет ошибку в массив. Результат кэшируется по ключу field+value. getErrors возвращает shallow copy через spread."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js2-q1",
          "question": "Что выведет этот код со стрелочным методом и обычным методом объекта?",
          "codeSnippet": "const counter = {\n  count: 0,\n  incArrow: () => { this.count++; },\n  incMethod() { this.count++; }\n};\ncounter.incArrow();\ncounter.incMethod();\nconsole.log(counter.count);",
          "options": [
            "2 — оба метода успешно увеличили счётчик внутри объекта",
            "1 — стрелочная функция взяла `this` из внешнего контекста, а не из объекта",
            "0 — обе функции работали с копией объекта, а не с оригиналом",
            "Ошибка `TypeError`: стрелочная функция не может быть методом объекта"
          ],
          "correctIndex": 1,
          "explanation": "У стрелочной функции нет собственного `this`: она берёт его из того места, где объявлена, а объявлена она в модуле или глобальной области, но никак не «внутри объекта» — объектный литерал своей области видимости не создаёт. Поэтому увеличивается свойство постороннего объекта, а счётчик остаётся нетронутым. Сокращённый синтаксис метода получает `this` из вызова, то есть сам объект, и отрабатывает верно."
        },
        {
          "id": "js2-q2",
          "question": "Что выведет этот код с двумя счётчиками, созданными одной фабрикой?",
          "codeSnippet": "function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\nconsole.log(a(), a(), b());",
          "options": [
            "1 2 1 — каждый вызов фабрики создаёт собственное независимое замыкание",
            "1 2 3 — переменная `count` общая для всех созданных счётчиков",
            "1 1 1 — переменная пересоздаётся при каждом вызове самого счётчика",
            "`undefined undefined undefined` — после возврата из функции `count` недоступна"
          ],
          "correctIndex": 0,
          "explanation": "Каждый вызов фабрики порождает новое лексическое окружение со своей переменной `count`, и возвращённая функция удерживает именно его — это и есть замыкание. Счётчики `a` и `b` ведут независимый подсчёт: первый досчитал до двух, второй начал с единицы. На этом механизме строятся приватные данные, мемоизация и хуки состояния в React."
        },
        {
          "id": "js2-q3",
          "question": "Что выведет этот код с таймерами внутри двух циклов?",
          "codeSnippet": "for (var i = 0; i < 3; i++) setTimeout(() => console.log(i));\nfor (let j = 0; j < 3; j++) setTimeout(() => console.log(j));",
          "options": [
            "3 3 3, затем 0 1 2 — у `var` одна привязка, а `let` создаёт новую на каждом шаге",
            "0 1 2, затем 0 1 2 — обе переменные ведут себя совершенно одинаково",
            "3 3 3, затем 3 3 3 — таймеры в обоих случаях срабатывают уже после цикла",
            "0 1 2, затем 3 3 3 — блочная область видимости фиксирует конечное значение"
          ],
          "correctIndex": 0,
          "explanation": "Колбэки таймеров выполняются после завершения цикла, и вопрос лишь в том, на что они смотрят. Переменная, объявленная через `var`, одна на всю функцию, поэтому все три замыкания видят её финальное значение — тройку. Спецификация предписывает для `let` создавать свежую привязку на каждой итерации и копировать в неё текущее значение, поэтому каждое замыкание удерживает собственное число."
        },
        {
          "id": "js2-q4",
          "question": "Чему будут равны эти три переменные?",
          "codeSnippet": "const a = 0 || 10;\nconst b = 0 ?? 10;\nconst c = null ?? 10;",
          "options": [
            "10, 10, 10",
            "10, 0, 10",
            "0, 0, 10",
            "0, 10, null"
          ],
          "correctIndex": 1,
          "explanation": "Оператор `||` смотрит на ложность значения, а ноль ложен, поэтому подставляется запасной вариант — классическая причина, по которой нулевая цена или пустая строка внезапно заменяются умолчанием. Оператор `??` реагирует только на `null` и `undefined`, поэтому ноль он пропускает как вполне осмысленное значение, а `null` заменяет. Для значений по умолчанию сегодня берут именно его."
        },
        {
          "id": "js2-q5",
          "question": "Что выведет этот код и какую роль играют троеточия в каждом месте?",
          "codeSnippet": "function f(first, ...rest) { return rest.length; }\nconst nums = [1, 2, 3, 4];\nconsole.log(f(...nums));",
          "options": [
            "4 — оба троеточия собирают переданные значения в один массив",
            "1 — в функцию передаётся ровно один аргумент, сам массив целиком",
            "3 — при вызове массив разворачивается, а в сигнатуре остаток собирается обратно",
            "Ошибка синтаксиса: остаточный параметр нельзя сочетать с развёртыванием"
          ],
          "correctIndex": 2,
          "explanation": "Синтаксис один, а смысл зависит от позиции. В месте вызова троеточие разворачивает массив в четыре отдельных аргумента. В объявлении функции то же троеточие работает наоборот: первый аргумент попадает в `first`, а оставшиеся три собираются в настоящий массив `rest`, у которого есть и `length`, и все методы массива — в отличие от устаревшего объекта `arguments`."
        }
      ]
    }
  },
  {
    "id": "javascript-3",
    "moduleId": "javascript",
    "level": 3,
    "title": "Управляющие конструкции, циклы и итераторы",
    "subtitle": "Ветвления if/else, Guard Clauses, switch-case, циклы for/while/for..of/for..in и протокол итерации",
    "description": "Освойте управление потоком выполнения в JavaScript: логические ветвления, паттерн Guard Clauses против глубокой вложенности, устройство switch/case, сравнение for..of и for..in, а также протокол итерации Symbol.iterator.",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "control-flow",
      "loops",
      "iterables",
      "guard-clauses",
      "switch-case",
      "for-of",
      "for-in"
    ],
    "theory": {
      "overview": "Управляющие конструкции (Control Flow) определяют порядок и условия выполнения инструкций в программе. Без них код выполнялся бы строго линейно сверху вниз. В реальных frontend-приложениях логика ветвления пронизывает всё: проверку авторизации, обработку состояний загрузки/ошибки от API, фильтрацию списков и роутинг.\n\nВ этом уроке мы не просто повторим базовый синтаксис `if` и `for`, а разберём архитектурные паттерны чистого кода (Guard Clauses, Lookup Tables), особенности работы движка V8 с циклами и протокол итерации ES6.",
      "sections": [
        {
          "title": "Ветвления и паттерн Guard Clauses (Ранний возврат)",
          "content": "Традиционная условная конструкция `if...else` проверяет условие на истинность (truthy/falsy).\n\nАнтипаттерн «Вложенная пирамида условий» (Arrow Anti-pattern / Pyramid of Doom):\nКогда внутри `if` пишется ещё один `if`, а внутри третий — код смещается вправо, становится трудным для чтения, тестирования и рефакторинга.\n\nПаттерн Guard Clauses (Защитные условия / Ранний возврат):\nСуть паттерна: сначала проверяем все граничные случаи, ошибки и условия невозможности выполнения — и сразу делаем `return`, `throw` или `continue`. Основная бизнес-логика остаётся на верхнем (нулевом) уровне вложенности функции.\n\nТернарный оператор (`условие ? выражение1 : выражение2`):\nЛаконичный способ условного присвоения. Правило Senior: используйте тернарник ТОЛЬКО для простых выражений из одной строки. Вложенные тернарники (`a ? b : c ? d : e`) — строгий антипаттерн на код-ревью!\n\nКороткое замыкание (Short-Circuit Evaluation):\n- `A && B` — возвращает A (если A falsy) или B (если A truthy). Используется для условного выполнения: `isLoggedIn && renderDashboard()`.\n- `A || B` — возвращает первое truthy значение или последнее: `const port = process.env.PORT || 3000`.\n- `A ?? B` — Nullish Coalescing: возвращает B ТОЛЬКО при `null` или `undefined`. Безопасен для чисел `0` и пустых строк `''`.",
          "codeExample": {
            "language": "javascript",
            "code": "// ❌ Плохо: 'Пирамида условий' с глубокой вложенностью\nfunction processPaymentBad(user, amount) {\n  if (user) {\n    if (user.isActive) {\n      if (user.balance >= amount) {\n        user.balance -= amount;\n        return { success: true, balance: user.balance };\n      } else {\n        return { error: 'Недостаточно средств' };\n      }\n    } else {\n      return { error: 'Аккаунт заблокирован' };\n    }\n  } else {\n    return { error: 'Пользователь не найден' };\n  }\n}\n\n// ✅ Хорошо: Чистый код с Guard Clauses (Ранний возврат)\nfunction processPaymentGood(user, amount) {\n  if (!user) return { error: 'Пользователь не найден' };\n  if (!user.isActive) return { error: 'Аккаунт заблокирован' };\n  if (user.balance < amount) return { error: 'Недостаточно средств' };\n\n  // Основная логика на чистом 0-м уровне отступа:\n  user.balance -= amount;\n  return { success: true, balance: user.balance };\n}",
            "title": "Рефакторинг: вложенный if-else в элегантные Guard Clauses",
            "explanation": "Guard Clauses проверяют все ошибки на входе и немедленно выходят. Код читается линейно сверху вниз без смещения вправо."
          }
        },
        {
          "title": "switch...case и паттерн Lookup Table (Объектные словари)",
          "content": "Конструкция `switch...case` сравнивает значение выражения с кандидатами по строгому равенству (`===`).\n\nОсобенности switch:\n- `break` обязателен! Без `break` управление проваливается в следующий кейс (Fall-through), даже если условие не совпало.\n- Секция `default` выполняется, если ни один case не подошёл.\n- Группировка кейсов: несколько case подряд перед одним телом выполняют общий блок кода.\n\nПаттерн Lookup Table (Словарь обработчиков):\nВ современном JS громоздкие конструкции `switch` с десятками case часто заменяют на объекты-словари (Lookup Table) или коллекции `Map`. Это делает код расширяемым (принцип Open/Closed из SOLID), позволяет легко выносить логику в отдельные модули и избавляет от ошибок с забытым `break`.",
          "codeExample": {
            "language": "javascript",
            "code": "// Паттерн Lookup Table вместо switch\nconst NOTIFICATION_HANDLERS = {\n  email: (user, msg) => `Email отправлен на ${user.email}: ${msg}`,\n  sms: (user, msg) => `SMS отправлено на ${user.phone}: ${msg}`,\n  push: (user, msg) => `Push-уведомление для ${user.name}: ${msg}`,\n  telegram: (user, msg) => `Telegram бот оповестил @${user.tg}: ${msg}`\n};\n\nfunction sendNotification(type, user, message) {\n  const handler = NOTIFICATION_HANDLERS[type];\n  if (!handler) {\n    throw new Error(`Неизвестный тип уведомления: ${type}`);\n  }\n  return handler(user, message);\n}\n\nconst user = { name: 'Алексей', email: 'alex@dev.ru', phone: '+79991234567' };\nsendNotification('email', user, 'Урок 3 успешно пройден!');",
            "title": "Паттерн Lookup Table для масштабируемых обработчиков",
            "explanation": "Lookup Table имеет сложность доступа O(1), легко масштабируется добавлением новых ключей и исключает баги с fall-through."
          }
        },
        {
          "title": "Циклы в JavaScript: for, while, for...of vs for...in",
          "content": "Циклы позволяют повторять блок кода заданное число раз или пока истинно условие.\n\nВиды циклов в JavaScript:\n\n1. Классический `for (let i = 0; i < len; i++)` — максимальная скорость и контроль над шагом индекса.\n2. `while (condition)` — цикл с предусловием: повторяет, пока условие истинно.\n3. `do...while (condition)` — цикл с постусловием: гарантированно выполнится минимум один раз!\n4. `for...of` (ES6+) — цикл по ЗНАЧЕНИЯМ итерируемых объектов (Iterables: массивы, строки, Map, Set, NodeList). Поддерживает `break`, `continue`, `return` и работу с `await`.\n5. `for...in` — цикл по КЛЮЧАМ (именам свойств) объекта. Внимание: перебирает свойства не только самого объекта, но и всей его прототипной цепочки! Строго НЕ рекомендуется использовать для массивов (индексы возвращаются как строки, порядок не гарантирован).\n\nУправление циклом:\n- `break` — немедленно прерывает выполнение цикла и передаёт управление следующей за циклом инструкции.\n- `continue` — немедленно завершает текущую итерацию и переходит к следующей.\n- Метки циклов (`outerLoop: for (...)`) — позволяют прерывать внешний вложенный цикл из внутреннего.",
          "image": {
            "src": "/images/lessons/js-control-flow.svg",
            "alt": "Сравнение циклов JavaScript: for...of по значениям против for...in по ключам",
            "caption": "for...of перебирает значения итерируемых коллекций. for...in перебирает строковые ключи объектов"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// Сравнение for...of и for...in\nconst technologies = ['HTML5', 'CSS3', 'JavaScript'];\ntechnologies.customProperty = 'Не элемент массива';\n\n// 1. for...of — чистый перебор значений элементов:\nfor (const tech of technologies) {\n  console.log(tech); // 'HTML5', 'CSS3', 'JavaScript'\n}\n\n// 2. for...in — обход всех ключей + прототипных свойств:\nfor (const key in technologies) {\n  console.log(key, typeof key); // '0' (string), '1', '2', 'customProperty'\n}\n\n// 3. Быстрый и безопасный обход объектов:\nconst stats = { views: 1250, likes: 340, shares: 89 };\nfor (const [metric, value] of Object.entries(stats)) {\n  console.log(`${metric}: ${value}`);\n}",
            "title": "for...of vs for...in на практическом примере",
            "explanation": "for...of игнорирует кастомные свойства и возвращает значения. for...in возвращает все строковые ключи. Для объектов используйте Object.entries() с for...of."
          }
        },
        {
          "title": "Протокол итерации (Iteration Protocols) и Symbol.iterator",
          "content": "В ES6 введён официальный протокол итерации, определяющий, как любой объект в JavaScript может стать итерируемым (Iterable).\n\nОбъект является Iterable, если у него реализован метод с ключом `[Symbol.iterator]`.\nЭтот метод должен возвращать Iterator — объект с методом `next()`, возвращающим объект формата:\n`{ value: любое_значение, done: boolean }`.\n\nКогда цикл `for...of` начинает работу, он:\n1. Вызывает метод `[Symbol.iterator]()` у коллекции.\n2. В цикле вызывает `.next()` до тех пор, пока `done !== true`.\n3. Извлекает поле `value` на каждой итерации.\n\nГде работают Iterables:\n- Цикл `for...of`\n- Spread-оператор: `[...iterable]`\n- Деструктуризация: `const [a, b] = iterable`\n- `Array.from(iterable)`\n- Конструкторы `new Set(iterable)`, `new Map(iterable)`\n- `Promise.all(iterable)`",
          "codeExample": {
            "language": "javascript",
            "code": "// Создание собственного итерируемого диапазона чисел (Range Iterable)\nconst range = (from, to) => ({\n  from,\n  to,\n  [Symbol.iterator]() {\n    let current = this.from;\n    const last = this.to;\n    return {\n      next() {\n        if (current <= last) {\n          return { value: current++, done: false };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n});\n\n// Теперь наш range работает во всех конструкциях ES6:\nfor (const num of range(1, 5)) {\n  console.log(num); // 1, 2, 3, 4, 5\n}\n\nconst numbersArray = [...range(10, 14)];\nconsole.log(numbersArray); // [10, 11, 12, 13, 14]",
            "title": "Реализация протокола Symbol.iterator для числового диапазона",
            "explanation": "Реализовав [Symbol.iterator], объект range() стал полноценным Iterable и может использоваться в for...of, spread-операторе и Array.from()."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Частые ошибки новичков в JavaScript",
          "content": "Для закрепления пройденного материала и предотвращения типовых багов рекомендуем посмотреть практический разбор:\n\n- **[5 JavaScript Mistakes Beginners Make (And How to Avoid Them) (YouTube)](https://youtu.be/h784nJ5_-7E?si=DvjSvdusvpGdj5xA)** — наглядный 6-минутный гайд по 5 самым распространённым ошибкам начинающих разработчиков: проблемы сравнения (== vs ===), некорректная работа с областями видимости, мутация данных и логические просчёты в управляющих конструкциях."
        }
      ],
      "seniorTips": [
        "Применяйте Guard Clauses в начале функций: это сокращает вложенность кода до 1 уровня и делает функции кристально чистыми для чтения.",
        "Никогда не используйте `for...in` для итерации по массивам. Для массивов используйте `for...of` или методы `.map()`, `.filter()`, `.reduce()`.",
        "Для ветвлений с большим количеством условий предпочитайте Lookup Tables (словари на объектах или `Map`), а не 10 блоков `else if` или `switch`.",
        "Избегайте создания функций внутри классических циклов `for` — на каждой итерации выделяется новый контекст памяти. Выносите колбэки наружу."
      ],
      "commonMistakes": [
        {
          "bad": "const status = isAuth ? hasAccess ? 'admin' : 'user' : 'guest';",
          "good": "function getStatus(isAuth, hasAccess) {\n  if (!isAuth) return 'guest';\n  return hasAccess ? 'admin' : 'user';\n}",
          "reason": "Вложенные тернарные операторы нечитаемы и вызывают ошибки на код-ревью. Выносите сложную логику условий в понятные функции с Guard Clauses."
        },
        {
          "bad": "switch(type) {\n  case 'A':\n    handleA();\n    // Забыт break! Провалится в case 'B'!\n  case 'B':\n    handleB();\n    break;\n}",
          "good": "switch(type) {\n  case 'A':\n    handleA();\n    break;\n  case 'B':\n    handleB();\n    break;\n}",
          "reason": "Забытый break вызывает эффект Fall-through: код следующего кейса выполнится непреднамеренно. Используйте eslint правило no-fallthrough."
        },
        {
          "bad": "for (const key in arr) {\n  // key является строкой ('0', '1', '2')\n  console.log(key + 1); // '01', '11', '21' — конкатенация строк!\n}",
          "good": "for (const item of arr) {\n  console.log(item);\n}",
          "reason": "Цикл for...in возвращает строковые имена ключей, а не числовые индексы. Сложение строк с числами приводит к багам конкатенации."
        }
      ],
      "keyTakeaways": [
        "Guard Clauses (ранний возврат) устраняют глубокую вложенность `if...else` и делают код плоским и читаемым.",
        "Тернарный оператор `? :` предназначен исключительно для простых однострочных выражений. Вложенные тернарники запрещены.",
        "Паттерн Lookup Table (объектные словари) заменяет громоздкие конструкции `switch` и масштабируется со сложностью доступа `O(1)`.",
        "`for...of` перебирает значения коллекций с `[Symbol.iterator]`. `for...in` перебирает строковые ключи свойств объекта.",
        "Любой объект можно сделать итерируемым, реализовав метод `[Symbol.iterator]()`, возвращающий итератор с методом `.next()`."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"js-output\"></div>",
      "initialCss": "#js-output {\n  font-family: 'JetBrains Mono', monospace;\n  background: #0a0e13;\n  color: #2dff8a;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #30363d;\n  min-height: 220px;\n  white-space: pre-wrap;\n}",
      "initialJs": "const out = document.getElementById('js-output');\nconst log = (text) => out.textContent += text + '\\n';\n\n// Задание: реализуйте генератор диапазона чисел с Symbol.iterator\nconst range = (start, end) => ({\n  [Symbol.iterator]() {\n    let current = start;\n    return {\n      next() {\n        return current <= end\n          ? { value: current++, done: false }\n          : { done: true };\n      }\n    };\n  }\n});\n\nlog('Итерация range(1, 5) через for...of:');\nfor (const n of range(1, 5)) {\n  log(`> Число: ${n}`);\n}\n\nlog('\\nПревращение в массив через spread: ' + JSON.stringify([...range(10, 15)]));",
      "instructions": "Практика управляющих конструкций:\n1. Запустите код и посмотрите, как работает Symbol.iterator с for...of и spread-оператором\n2. Напишите функцию classifyScore(score) с Guard Clauses: если score < 0 или > 100 — ошибка, >= 90 — 'Отлично', >= 75 — 'Хорошо', иначе 'Требуется доработка'\n3. Реализуйте функцию через Lookup Table и вызовите для тестовых значений"
    },
    "task": {
      "title": "Пайплайн валидации и фильтрации данных пользователей",
      "scenario": "Вы разрабатываете модуль фильтрации пользователей для административной панели. Модуль должен принимать массив профилей, валидировать поля через Guard Clauses, применять фильтры по статусам через Lookup Table и возвращать итерируемый результат с постраничной пагинацией.",
      "criteria": [
        "Функция validateUser(user) использует Guard Clauses для валидации",
        "Фильтрация по ролям ('admin', 'mentor', 'intern') реализована через Lookup Table",
        "Функция paginate(items, pageSize) возвращает кастомный Iterable объект с [Symbol.iterator]",
        "Каждая страница итератора возвращает срез массива { pageNumber, data }",
        "Использовать for...of и деструктуризацию параметров",
        "Обработать некорректные входные данные без падения программы"
      ],
      "starterCode": {
        "js": "// Реализуйте модуль обработки данных\nfunction createDataPipeline(users) {\n  // Ваш код здесь\n}"
      },
      "hints": [
        "Используйте Guard Clauses: if (!user || typeof user !== 'object') return false;",
        "Lookup Table ролей: const ROLE_FILTERS = { admin: u => u.role === 'admin', ... }",
        "Для paginate создайте объект с [Symbol.iterator], который вычисляет срезы items.slice(start, end)"
      ],
      "solution": {
        "js": "function createDataPipeline(users = []) {\n  const ROLE_FILTERS = {\n    admin: (u) => u.role === 'admin',\n    mentor: (u) => u.role === 'mentor',\n    intern: (u) => u.role === 'intern',\n    all: () => true\n  };\n\n  const validateUser = (user) => {\n    if (!user || typeof user !== 'object') return false;\n    if (!user.id || typeof user.name !== 'string') return false;\n    if (user.age !== undefined && user.age < 18) return false;\n    return true;\n  };\n\n  return {\n    filterByRole(role = 'all') {\n      const filterFn = ROLE_FILTERS[role] || ROLE_FILTERS.all;\n      const validUsers = users.filter(validateUser);\n      return validUsers.filter(filterFn);\n    },\n    paginate(items, pageSize = 2) {\n      return {\n        [Symbol.iterator]() {\n          let page = 0;\n          const totalPages = Math.ceil(items.length / pageSize);\n          return {\n            next() {\n              if (page < totalPages) {\n                const start = page * pageSize;\n                const data = items.slice(start, start + pageSize);\n                page++;\n                return { value: { pageNumber: page, totalPages, data }, done: false };\n              }\n              return { done: true };\n            }\n          };\n        }\n      };\n    }\n  };\n}",
        "explanation": "Код использует Guard Clauses для валидации пользователей, Lookup Table для фильтрации ролей O(1) и кастомный протокол Symbol.iterator для итерации по страницам данных."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js3-q1",
          "question": "Что даёт приём раннего возврата помимо уменьшения вложенности?",
          "options": [
            "Он превращает функцию в чистую, автоматически убирая побочные эффекты",
            "Основной сценарий остаётся на одном уровне отступа, а исключения собраны сверху",
            "Он избавляет от необходимости обрабатывать ошибки через конструкцию `try/catch`",
            "Он ускоряет выполнение, так как движок пропускает неиспользуемые ветви кода"
          ],
          "correctIndex": 1,
          "explanation": "Проверки аргументов, прав доступа и граничных случаев уезжают в начало функции и заканчиваются немедленным возвратом, а дальше идёт непрерывный основной сценарий без единой вложенности. Читать такой код легче: видно, при каких условиях функция не работает, и отдельно — что она делает. На чистоту функции и на скорость выполнения приём не влияет."
        },
        {
          "id": "js3-q2",
          "question": "Что выведет каждый из этих циклов?",
          "codeSnippet": "const arr = ['HTML', 'CSS'];\narr.extra = 'JS';\nfor (const k in arr) console.log(k);\nfor (const v of arr) console.log(v);",
          "options": [
            "Первый: `'HTML'`, `'CSS'`, `'JS'`. Второй: `'0'`, `'1'`, `'extra'`",
            "Оба выведут `'HTML'` и `'CSS'` — разница только в типе ключа",
            "Первый: `0`, `1`. Второй: `'HTML'`, `'CSS'`, `'JS'`",
            "Первый: `'0'`, `'1'`, `'extra'`. Второй: `'HTML'`, `'CSS'`"
          ],
          "correctIndex": 3,
          "explanation": "`for...in` перебирает перечислимые строковые ключи объекта, а массив — тоже объект: сюда попадают и индексы в виде строк, и дописанное свойство `extra`. Отсюда два классических бага: конкатенация вместо сложения при работе с ключами и внезапные посторонние свойства. `for...of` работает через протокол итерации массива и выдаёт именно значения элементов, игнорируя всё остальное."
        },
        {
          "id": "js3-q3",
          "question": "Что нужно добавить обычному объекту, чтобы он заработал в `for...of` и с оператором расширения?",
          "options": [
            "Свойство `length` и числовые ключи — этого достаточно для перебора значений",
            "Наследование от `Array.prototype` через вызов `Object.create`",
            "Метод `forEach()` с сигнатурой, полностью совпадающей с массивом",
            "Метод `[Symbol.iterator]()`, возвращающий объект с методом `next()`"
          ],
          "correctIndex": 3,
          "explanation": "И цикл `for...of`, и оператор расширения, и деструктуризация массива опираются на один протокол: объект обязан иметь метод под символом `Symbol.iterator`, возвращающий итератор — объект с методом `next()`, который отдаёт пары значения и признака завершения. Проще всего реализовать его функцией-генератором. Массивоподобные объекты со свойством `length` этому протоколу не удовлетворяют, их приводят через `Array.from`."
        },
        {
          "id": "js3-q4",
          "question": "Что выведет эта конструкция switch?",
          "codeSnippet": "switch (2) {\n  case 1: console.log('one');\n  case 2: console.log('two');\n  case 3: console.log('three'); break;\n  case 4: console.log('four');\n}",
          "options": [
            "`two`, `three` — без `break` управление проваливается в следующую ветку",
            "`two` — выполняется только та ветка, значение которой совпало",
            "`two`, `three`, `four` — выполняются все ветки, идущие после совпавшей",
            "`one`, `two` — выполнение всегда начинается с самой первой ветки"
          ],
          "correctIndex": 0,
          "explanation": "Конструкция находит совпавшую метку и дальше выполняет код подряд, не обращая внимания на следующие `case`, пока не встретит `break` или конец блока. Отсюда вывод двух строк и остановка на третьей ветке. Иногда таким проваливанием пользуются намеренно, объединяя несколько меток, но чаще это забытый `break` — правило `no-fallthrough` в линтере ловит именно его."
        },
        {
          "id": "js3-q5",
          "question": "Чем словарь-объект лучше длинной цепочки `else if` при выборе обработчика?",
          "options": [
            "Объект автоматически проверяет типы ключей и защищает от опечаток в названиях",
            "Доступ по ключу выполняется за постоянное время, а сам словарь легко расширять",
            "Цепочка условий по спецификации языка не поддерживает более десяти ветвей",
            "Словарь выполняет все обработчики сразу и выбирает из них лучший результат"
          ],
          "correctIndex": 1,
          "explanation": "Цепочка условий проверяет варианты по очереди, и в худшем случае работа линейна по их количеству, а новый вариант требует правки самой логики. Словарь достаёт нужный обработчик по ключу за постоянное время, а добавление варианта превращается в добавление строки данных — структуру даже можно получить с сервера. От опечаток это, разумеется, не спасает: за этим следят TypeScript и линтер."
        }
      ]
    }
  },
  {
    "id": "javascript-4",
    "moduleId": "javascript",
    "level": 4,
    "title": "Функции: Pure Functions, HOF и функциональный подход",
    "subtitle": "Параметры по умолчанию, Rest/Spread, Pure Functions, Side Effects, HOF и композиция",
    "description": "Освойте функциональную парадигму в JavaScript: принципы чистых функций (Pure Functions) и иммутабельности, работу с побочными эффектами (Side Effects), функции высшего порядка (map/filter/reduce, compose, pipe) и продвинутую работу с аргументами.",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "functions",
      "pure-functions",
      "side-effects",
      "hof",
      "functional-programming",
      "immutability",
      "rest-spread"
    ],
    "theory": {
      "overview": "В JavaScript функции — это объекты первого класса (First-Class Citizens). Это означает, что функции можно присваивать переменным, сохранять в массивах и объектах, передавать как аргументы в другие функции и возвращать из функций.\n\nФункциональный подход (Functional Programming) лежит в основе всей современной экосистемы React (хуки, чистые компоненты, useMemo/useCallback), Redux (редьюсеры — чистые функции), RxJS и Node.js middleware. В этом уроке мы глубоко разберём разницу между чистыми функциями и побочными эффектами, научимся проектировать функции высшего порядка (HOF) и применять продвинутые техники передачи аргументов.",
      "sections": [
        {
          "title": "Анатомия функции и First-Class Citizens",
          "content": "Функция в JavaScript — это вызываемый объект (Callable Object), инкапсулирующий блок инструкций.\n\nКлючевые концепции:\n\n1. First-Class Functions (Функции первого класса):\n- Присваивание переменной: `const sum = (a, b) => a + b;`\n- Передача аргументом (Callback): `[1, 2, 3].map(x => x * 2)`\n- Возврат из другой функции (Фабрика/Замыкание): `const createMultiplier = (x) => (y) => x * y;`\n- Хранение в структурах данных: `const actions = [fn1, fn2, fn3];`\n\n2. Parameters vs Arguments:\n- Параметры (Parameters) — имена переменных, указанные в объявлении функции (`function greet(name, role) {}`).\n- Аргументы (Arguments) — реальные значения, переданные функции при вызове (`greet('Иван', 'Senior')`).\n\n3. Return Statement:\n- Инструкция `return` немедленно завершает выполнение функции и возвращает значение.\n- Если `return` не указан или пуст — функция неявно возвращает `undefined`.\n- Автоматическая вставка точки с запятой (ASI): никогда не переносить возвращаемое выражение на новую строку после `return` без круглых скобок `return (`!",
          "codeExample": {
            "language": "javascript",
            "code": "// Функции как объекты первого класса\n\n// 1. Массив функций-трансформеров строки\nconst pipeline = [\n  (s) => s.trim(),\n  (s) => s.toLowerCase(),\n  (s) => s.replace(/\\s+/g, '-')\n];\n\n// 2. Применение цепочки через reduce\nconst slugify = (input) => pipeline.reduce((text, fn) => fn(text), input);\nconsole.log(slugify('  Урок 4: Чистые Функции в JS  '));\n// Результат: 'урок-4:-чистые-функции-в-js'",
            "title": "Пайплайн обработки данных на массиве функций",
            "explanation": "Функции хранятся в массиве pipeline и последовательно применяются через reduce. Это классический пример First-Class Functions."
          }
        },
        {
          "title": "Чистые функции (Pure Functions) и побочные эффекты (Side Effects)",
          "content": "Чистая функция (Pure Function) — это функция, удовлетворяющая двум строгим математическим критериям:\n\n1. Детерминированность (Determinism):\nПри одинаковых входных аргументах функция ВСЕГДА возвращает одинаковый результат. Она не зависит от внешнего состояния, системного времени `Date.now()`, случайных чисел `Math.random()` или глобальных переменных.\n\n2. Отсутствие побочных эффектов (No Side Effects):\nФункция не изменяет внешнее окружение при выполнении:\n- НЕ мутирует переданные аргументы (соблюдает Immutability)\n- НЕ изменяет глобальные переменные\n- НЕ делает сетевых запросов (`fetch`, `WebSocket`)\n- НЕ мутирует DOM-дерево и не пишет в `localStorage`/куки\n- НЕ вызывает `console.log()` (технически лог в консоль — это I/O Side Effect!)\n\nПочему чистые функции критически важны:\n- 100% тестируемость: чтобы протестировать чистую функцию, не нужны моки и подготовка окружения (просто `expect(fn(a)).toBe(b)`).\n- Предсказуемость и защита от багов «эффекта бабочки».\n- Мемоизация и оптимизация: результат можно безопасно кэшировать по аргументам.\n- Параллелизм и React Concurrent Mode: чистые функции можно вызывать повторно без риска сломать состояние.",
          "image": {
            "src": "/images/lessons/js-pure-functions-hof.svg",
            "alt": "Сравнение Pure Functions и Higher-Order Functions HOF",
            "caption": "Чистые функции детерминированы и не имеют побочных эффектов. HOF принимают и возвращают функции"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// ❌ Нечистая функция (мутирует аргумент и зависит от внешнего state)\nlet bonus = 500;\nfunction calculateSalaryBad(user, baseRate) {\n  user.lastCalculated = Date.now(); // ❌ Side Effect: мутация аргумента\n  return baseRate + bonus;          // ❌ Зависимость от глобальной переменной\n}\n\n// ✅ Чистая функция (Pure Function)\nfunction calculateSalaryPure(baseRate, bonusAmount) {\n  return baseRate + bonusAmount;\n}\n\n// Добавление элемента без мутации исходного массива:\nconst addItem = (cart, newItem) => [...cart, { ...newItem, addedAt: '2026-08-19' }];",
            "title": "Чистая функция vs функция с побочными эффектами",
            "explanation": "calculateSalaryPure зависит исключительно от переданных аргументов и ничего не меняет вне своей области видимости. addItem возвращает новый массив через spread-оператор."
          }
        },
        {
          "title": "Функции высшего порядка (Higher-Order Functions / HOF)",
          "content": "Функция высшего порядка (HOF) — это функция, которая принимает одну или несколько функций в качестве аргументов ИЛИ возвращает новую функцию.\n\nВстроенные HOF в JavaScript:\n- `Array.prototype.map(fn)` — трансформация элементов\n- `Array.prototype.filter(fn)` — отбор элементов по предикату\n- `Array.prototype.reduce(fn, init)` — агрегация массива в единое значение\n- `Array.prototype.find()`, `some()`, `every()`, `sort()`\n\nСоздание собственных HOF:\n1. Паттерн Декоратора (Decorator / Wrapper):\nОборачивает целевую функцию, добавляя логирование, замер времени или обработку ошибок.\n\n2. Мемоизация (Memoization):\nКэширование результатов вычислений функции в замыкании.\n\n3. Каррирование (Currying) и частичное применение (Partial Application):\nТрансформация функции `f(a, b, c)` в цепочку `f(a)(b)(c)`.\n\n4. Debounce и Throttle:\nHOF для ограничения частоты вызова функций при скролле, ресайзе окна или вводе текста в поисковую строку.",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. HOF-декоратор для безопасного выполнения с fallback:\nfunction withErrorHandling(fn, fallbackValue = null) {\n  return (...args) => {\n    try {\n      return fn(...args);\n    } catch (error) {\n      console.error(`Ошибка при выполнении ${fn.name}:`, error.message);\n      return fallbackValue;\n    };\n  };\n}\n\nconst parseJSON = withErrorHandling(JSON.parse, {});\nconsole.log(parseJSON('{\"valid\": true}')); // { valid: true }\nconsole.log(parseJSON('НЕВАЛИДНЫЙ JSON')); // {} (без падения приложения!)\n\n// 2. Функциональная композиция (pipe: слева направо)\nconst pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);\nconst double = (x) => x * 2;\nconst addTen = (x) => x + 10;\nconst format = (x) => `$${x}`;\n\nconst calculate = pipe(double, addTen, format);\nconsole.log(calculate(5)); // 5 * 2 = 10 -> 10 + 10 = 20 -> '$20'",
            "title": "Создание HOF: декоратор обработки ошибок и утилита pipe",
            "explanation": "withErrorHandling оборачивает опасную функцию, предотвращая сбои. pipe объединяет независимые чистые функции в конвейер вычислений."
          }
        },
        {
          "title": "Продвинутая работа с аргументами: Rest, Defaults и Options Pattern",
          "content": "Современный JavaScript предоставляет мощные механизмы для гибкой передачи параметров:\n\n1. Параметры по умолчанию (Default Parameters):\n- Вычисляются в момент вызова (runtime evaluation).\n- Могут ссылаться на предыдущие параметры функции: `function createUser(name, nickname = name.toLowerCase()) {}`.\n- Срабатывают ТОЛЬКО при значении `undefined` (значения `null`, `false`, `0`, `''` НЕ вызывают замену на дефолт!).\n\n2. Rest-параметры (`...args`):\n- Собирают произвольное число оставшихся аргументов в настоящий массив `Array`.\n- Заменили устаревший объект `arguments` (который не работал в стрелочных функциях и не был массивом).\n\n3. Паттерн Options Object (Именованные параметры через деструктуризацию):\nКогда функция принимает более 2–3 параметров, передача их позиционно (`createModal('Вход', true, false, 300, 'red', null)`) приводит к ошибкам. Паттерн Options Object передаёт один объект конфигурации с деструктуризацией и дефолтными значениями:\n`function createModal({ title, isOpen = false, width = 400, theme = 'dark' } = {}) {}`.",
          "codeExample": {
            "language": "javascript",
            "code": "// Паттерн Options Object с вложенными дефолтами\nfunction fetchUserData({\n  endpoint,\n  method = 'GET',\n  headers = {},\n  timeout = 5000,\n  retries = 3\n} = {}) {\n  if (!endpoint) throw new Error('Endpoint обязателен!');\n  \n  return {\n    url: `https://api.dev${endpoint}`,\n    config: { method, headers: { 'Content-Type': 'application/json', ...headers } },\n    timeout,\n    retries\n  };\n}\n\n// Вызов: параметры именованы, порядок не имеет значения!\nconst request = fetchUserData({\n  endpoint: '/users/42',\n  retries: 5,\n  headers: { 'Authorization': 'Bearer token123' }\n});\nconsole.log(request);",
            "title": "Паттерн Options Object для масштабируемых функций",
            "explanation": "Именованные параметры через объект избавляют от необходимости помнить порядок аргументов и передавать null/undefined для пропуска промежуточных параметров."
          }
        }
      ],
      "seniorTips": [
        "Стремитесь к тому, чтобы 80% вашей кодовой базы составляли Чистые Функции (Pure Functions). Это делает приложение масштабируемым и тривиальным для unit-тестирования.",
        "Для функций с 3+ параметрами ВСЕГДА используйте паттерн Options Object (`function fn({ a, b, c } = {})`). Это исключает ошибки порядка аргументов на код-ревью.",
        "Помните: параметры по умолчанию срабатывают ТОЛЬКО при значении `undefined`. Если передать `null`, дефолт НЕ применится!",
        "Используйте `Object.freeze()` в тестах для гарантии того, что ваша чистая функция случайно не мутирует входные объекты-аргументы."
      ],
      "commonMistakes": [
        {
          "bad": "function addTag(item, tag) {\n  item.tags.push(tag); // ❌ Мутация входного объекта!\n  return item;\n}",
          "good": "function addTag(item, tag) {\n  return {\n    ...item,\n    tags: [...(item.tags || []), tag]\n  };\n}",
          "reason": "Мутация аргументов (Side Effect) приводит к скрытым багам в React/Redux, когда интерфейс не обновляется из-за того, что ссылка на объект осталась прежней."
        },
        {
          "bad": "function connect(url, port = 8080) {}\nconnect('http://localhost', null); // port останется null!",
          "good": "function connect(url, port) {\n  const finalPort = port ?? 8080;\n}",
          "reason": "Дефолтные параметры в сигнатуре функции срабатывают только на undefined. Передача null перезаписывает дефолт значением null."
        },
        {
          "bad": "// Функция с 6 позиционными аргументами\ninitSlider(true, 500, false, 3, true, 'slide');",
          "good": "initSlider({\n  autoplay: true,\n  speed: 500,\n  slidesToShow: 3,\n  effect: 'slide'\n});",
          "reason": "Позиционные булевы аргументы (Boolean Trap) делают код абсолютно нечитаемым. Невозможно понять, что значит true, false, 3 без перехода к объявлению функции."
        }
      ],
      "keyTakeaways": [
        "Функции в JS являются First-Class Citizens: их можно сохранять в переменные, передавать как аргументы и возвращать из функций.",
        "Чистая функция (Pure Function) строго детерминирована и не имеет побочных эффектов (Side Effects) — основа стабильности React и Redux.",
        "Функции высшего порядка (HOF) принимают функции как аргументы или возвращают их (map, filter, reduce, pipe, debounce).",
        "Паттерн Options Object (`function fn({ a, b = 1 } = {})`) обеспечивает именованные аргументы и защищает от ошибок сигнатуры.",
        "Параметры по умолчанию активируются только при значении `undefined`."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"js-output\"></div>",
      "initialCss": "#js-output {\n  font-family: 'JetBrains Mono', monospace;\n  background: #0a0e13;\n  color: #2dff8a;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #30363d;\n  min-height: 220px;\n  white-space: pre-wrap;\n}",
      "initialJs": "const out = document.getElementById('js-output');\nconst log = (text) => out.textContent += text + '\\n';\n\n// Задание: функциональный конвейер (pipe)\nconst pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);\n\nconst cleanString = (s) => s.trim();\nconst capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();\nconst addGreeting = (name) => `Привет, ${name}!`;\n\nconst greetUser = pipe(cleanString, capitalize, addGreeting);\n\nlog(greetUser('   иВАН   ')); // 'Привет, Иван!'\nlog(greetUser('  аЛЕКСЕЙ ')); // 'Привет, Алексей!'",
      "instructions": "Практика с чистыми функциями и HOF:\n1. Запустите код и посмотрите на результат работы утилиты pipe\n2. Напишите чистую функцию calculateDiscount(price, percent), возвращающую число\n3. Напишите HOF withCurrency(fn, currency = '₽'), которая форматирует результат в строку '1 000 ₽'"
    },
    "task": {
      "title": "Разработка функционального ядра обработки данных каталога",
      "scenario": "Вы разрабатываете модуль фильтрации, сортировки и форматирования каталога товаров интернет-магазина. Модуль должен быть построен строго на чистых функциях (Pure Functions), иммутабельности и композиции HOF-функций без мутации исходного массива товаров.",
      "criteria": [
        "Функция createFilter({ minPrice, maxPrice, inStockOnly, category }) возвращает чистую функцию-предикат",
        "Функция createSorter(field, order = 'asc') возвращает функцию сравнения для Array.prototype.sort",
        "Утилита pipe(...fns) объединяет функции трансформации в единый конвейер",
        "Все операции должны быть иммутабельными (исходный массив товаров не мутируется)",
        "Применить паттерн Options Object для передачи параметров конфигурации",
        "Покрыть код проверками на пустые массивы и некорректные параметры"
      ],
      "starterCode": {
        "js": "// Исходный массив товаров\nconst products = [\n  { id: 1, title: 'Клавиатура', price: 8000, inStock: true, category: 'tech' },\n  { id: 2, title: 'Мышь', price: 4000, inStock: false, category: 'tech' },\n  { id: 3, title: 'Книга CSS', price: 1500, inStock: true, category: 'books' }\n];\n\n// Напишите функциональные утилиты\nfunction processCatalog(items, filterOptions, sortOptions) {\n  // Ваш чистый код\n}"
      },
      "hints": [
        "Для сортировки без мутации создайте копию: [...items].sort()",
        "Используйте Array.prototype.filter() с предикатом, сгенерированным через createFilter",
        "Используйте Options Object с дефолтными значениями: function processCatalog(items = [], filterOpts = {}, sortOpts = {})"
      ],
      "solution": {
        "js": "const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);\n\nconst createFilter = ({\n  minPrice = 0,\n  maxPrice = Infinity,\n  inStockOnly = false,\n  category = null\n} = {}) => (item) => {\n  if (!item || typeof item !== 'object') return false;\n  if (item.price < minPrice || item.price > maxPrice) return false;\n  if (inStockOnly && !item.inStock) return false;\n  if (category && item.category !== category) return false;\n  return true;\n};\n\nconst createSorter = (field = 'id', order = 'asc') => (a, b) => {\n  const valA = a[field] ?? 0;\n  const valB = b[field] ?? 0;\n  if (valA === valB) return 0;\n  const diff = valA > valB ? 1 : -1;\n  return order === 'desc' ? -diff : diff;\n};\n\nfunction processCatalog(items = [], filterOpts = {}, sortOpts = {}) {\n  const filterFn = createFilter(filterOpts);\n  const sortFn = createSorter(sortOpts.field, sortOpts.order);\n\n  return [...items]\n    .filter(filterFn)\n    .sort(sortFn);\n}",
        "explanation": "Код написан по канонам FP: createFilter и createSorter являются HOF-фабриками чистых функций. Исходный массив не мутируется благодаря спреду [...items].filter().sort()."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js4-q1",
          "question": "Какая из этих функций является чистой?",
          "codeSnippet": "let total = 0;\nfunction addA(arr, x) { arr.push(x); return arr; }\nfunction addB(arr, x) { return [...arr, x]; }\nfunction addC(x) { total += x; return total; }",
          "options": [
            "`addA` — она возвращает результат и не обращается к внешним переменным",
            "`addB` — она не меняет аргумент и не трогает внешнее состояние программы",
            "`addC` — она детерминирована и при любом вызове возвращает число",
            "Все три: ни одна не ходит в сеть и ничего не пишет в консоль"
          ],
          "correctIndex": 1,
          "explanation": "Чистая функция обязана выполнять два условия: одинаковые аргументы дают одинаковый результат, и никакого влияния на внешний мир. Первая функция изменяет переданный массив — это побочный эффект, видимый вызывающему коду. Третья зависит от внешней переменной и меняет её, поэтому результат зависит от истории вызовов. Вторая создаёт новый массив и ничего не трогает — именно такой стиль требуется для состояния в React и Redux."
        },
        {
          "id": "js4-q2",
          "question": "Что выведет этот код при четырёх разных вызовах одной функции?",
          "codeSnippet": "function init(mode = 'dark') { return mode; }\nconsole.log(init(), init(undefined), init(null), init(''));",
          "options": [
            "`'dark'`, `'dark'`, `'dark'`, `'dark'`",
            "`'dark'`, `'dark'`, `null`, `''` — умолчание срабатывает только на `undefined`",
            "`'dark'`, `undefined`, `null`, `''` — явная передача всегда отменяет умолчание",
            "`'dark'`, `'dark'`, `'dark'`, `''` — пустая строка считается заданным значением, а `null` нет"
          ],
          "correctIndex": 1,
          "explanation": "Значение по умолчанию подставляется ровно в одном случае: когда аргумент равен `undefined`, будь то пропуск или явная передача. Любое другое значение, включая `null`, пустую строку и ноль, считается заданным и проходит как есть. Отсюда частый баг: с сервера приходит `null`, умолчание не срабатывает, и дальше по коду падает обращение к свойству."
        },
        {
          "id": "js4-q3",
          "question": "Что из перечисленного НЕ является функцией высшего порядка?",
          "options": [
            "`Array.prototype.map` — принимает функцию обратного вызова",
            "`setTimeout` — принимает функцию и задержку в миллисекундах",
            "`debounce` — возвращает новую функцию с отложенным вызовом",
            "`Array.prototype.join` — принимает строку-разделитель"
          ],
          "correctIndex": 3,
          "explanation": "Функция высшего порядка либо принимает функцию аргументом, либо возвращает функцию. Перебор с преобразованием и планировщик таймера принимают колбэк, а функция устранения дребезга возвращает новую обёртку — все трое подходят. Склейка массива в строку принимает обычную строку и возвращает строку, поэтому к высшему порядку не относится, хотя и является методом массива."
        },
        {
          "id": "js4-q4",
          "question": "Вызов выглядит как `createUser('Иван', true, false, 3)`. Чем плоха такая сигнатура?",
          "options": [
            "Передача логических значений вынуждает движок к неявному приведению типов",
            "Функция с четырьмя параметрами не может иметь значений по умолчанию",
            "Смысл логических аргументов не читается на месте вызова, а порядок легко перепутать",
            "Аргументы после третьего передаются через `arguments` и теряют свои имена"
          ],
          "correctIndex": 2,
          "explanation": "Глядя на такой вызов, невозможно понять, что означают `true` и `false`, — приходится открывать объявление функции. А поменяв два соседних логических аргумента местами, вы получите молча работающий, но неправильный код: типы совпадают, и ни линтер, ни TypeScript ошибки не увидят. Лечится это объектом настроек: `createUser({ name: 'Иван', isAdmin: true, notify: false, level: 3 })` — имена видны прямо в вызове, а порядок перестаёт иметь значение."
        },
        {
          "id": "js4-q5",
          "question": "Что выведет этот код с композицией функций через pipe?",
          "codeSnippet": "const pipe = (...fns) => x => fns.reduce((acc, f) => f(acc), x);\nconst double = n => n * 2;\nconst inc = n => n + 1;\nconsole.log(pipe(double, inc)(5));",
          "options": [
            "Ошибка: свёртка не может принимать функции в качестве значений",
            "12 — сначала прибавление единицы, затем удвоение",
            "10 — применяется только первая функция цепочки",
            "11 — сначала удвоение, затем прибавление единицы"
          ],
          "correctIndex": 3,
          "explanation": "Свёртка идёт по массиву функций слева направо, передавая накопленное значение дальше: пятёрка удваивается до десяти, затем прибавляется единица — итого одиннадцать. Именно порядком слева направо композиция через `pipe` отличается от классической `compose`, которая применяет функции справа налево и дала бы двенадцать. Читаемость `pipe` выше, поэтому в прикладном коде чаще встречается он."
        }
      ]
    }
  },
  {
    "id": "javascript-5",
    "moduleId": "javascript",
    "level": 5,
    "title": "Объекты и массивы: Базовые операции",
    "subtitle": "Модель памяти, передача по ссылке, методы Object, мутации vs иммутабельность и ES2023",
    "description": "Изучите фундаментальные структуры данных в JavaScript: устройство памяти Stack vs Heap, опасности передачи по ссылке, методы Object (keys, values, entries, fromEntries, hasOwn), Shallow vs Deep Clone (structuredClone) и иммутабельные методы массивов.",
    "estimatedMinutes": 65,
    "difficulty": "beginner",
    "tags": [
      "objects",
      "arrays",
      "references",
      "heap",
      "stack",
      "immutability",
      "structuredClone",
      "es2023"
    ],
    "theory": {
      "overview": "Объекты (`Object`) и массивы (`Array`) — главные составные структуры данных в JavaScript. В отличие от примитивов, объекты хранятся в куче (Heap), а переменные содержат лишь ссылки на адреса в оперативной памяти.\n\nПонимание разницы между передачей по значению и по ссылке — водораздел между новичком и квалифицированным инженером. Непонимание ссылочной модели приводит к багам мутаций в React/Redux, когда состояние изменяется «под капотом», но интерфейс не перерисовывается. В этом уроке мы разберём модель памяти, нативный `structuredClone()`, методы `Object` и иммутабельные операции ES2023.",
      "sections": [
        {
          "title": "Модель памяти: Примитивы (Stack) vs Ссылочные типы (Heap)",
          "content": "В JavaScript все типы данных делятся на две категории по способу хранения в памяти:\n\n1. Примитивные типы (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`):\n- Хранятся непосредственно в стеке вызовов (Stack Memory).\n- Передаются ПО ЗНАЧЕНИЮ (Pass by Value). При копировании переменной создаётся независимая копия битов в памяти.\n- Примитивы абсолютно неизменяемы (Immutable).\n\n2. Ссылочные типы (`Object`, `Array`, `Function`, `Map`, `Set`, `Date`):\n- Тело объекта хранится в динамической куче памяти (Heap Memory).\n- Переменная хранит лишь указатель (ссылку / Reference) на адрес ячейки в Heap.\n- Передаются ПО ССЫЛКЕ (Pass by Reference).\n\nОпасность мутаций по ссылке:\nЕсли вы присвоите `const user2 = user1;`, то `user2` указывает на ТОТ ЖЕ САМЫЙ объект в куче! Изменение `user2.name = 'Пётр'` мгновенно изменит и `user1.name`!\n\nСравнение по ссылке:\nДва разных объекта с одинаковым содержимым НЕ РАВНЫ друг другу: `{ a: 1 } === { a: 1 }` вернёт `false`, потому что они лежат по разным адресам в памяти Heap. Равенство `obj1 === obj2` истинно только тогда, когда обе переменные указывают на один и тот же адрес.",
          "image": {
            "src": "/images/lessons/js-objects-arrays.svg",
            "alt": "Модель памяти в JavaScript: Stack vs Heap и методы Object и Array",
            "caption": "Примитивы копируются по значению в Stack, а объекты передаются по ссылке в Heap. Для вложенных структур необходим deep clone"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Примитивы: независимые копии в Stack\nlet x = 42;\nlet y = x;\ny = 99;\nconsole.log(x); // 42 (x не изменился!)\n\n// 2. Объекты: общая ссылка в Heap\nconst devA = { name: 'Иван', role: 'Intern' };\nconst devB = devA; // Копируется ССЫЛКА, а не объект!\n\ndevB.role = 'Senior';\nconsole.log(devA.role); // 'Senior' ⚠️ (devA тоже изменился!)\n\n// 3. Сравнение по ссылке\nconsole.log({} === {}); // false (разные адреса в памяти)\nconsole.log(devA === devB); // true (один и тот же адрес)",
            "title": "Разница между копированием примитивов и ссылок",
            "explanation": "devA и devB ссылаются на один объект в куче. Мутация поля через devB мгновенно отражается на devA."
          }
        },
        {
          "title": "Клонирование данных: Поверхностное (Shallow) vs Глубокое (Deep)",
          "content": "Чтобы безопасно модифицировать объекты без мутации оригиналов, необходимо создавать их копии:\n\n1. Поверхностное копирование (Shallow Copy):\n- Создаёт новый внешний объект, но ВСЕ вложенные объекты и массивы копируются КАК ССЫЛКИ!\n- Синтаксис: Spread-оператор `{ ...obj }` или `Object.assign({}, obj)`.\n- Для массивов: `[...arr]` или `arr.slice()`.\n- Если объект плоский (без вложенности) — shallow copy идеален и максимально быстр.\n\n2. Глубокое копирование (Deep Copy):\n- Рекурсивно клонирует все уровни вложенности, создавая абсолютно независимое дерево объектов в памяти Heap.\n- `structuredClone(obj)` — современный нативный стандарт JavaScript (поддерживается всеми браузерами и Node.js 17+). Корректно копирует `Date`, `Set`, `Map`, `RegExp`, циклические ссылки.\n- `JSON.parse(JSON.stringify(obj))` — устаревший хак с критическими ограничениями (теряет методы/функции, превращает `undefined` в пропуск, ломает `Date` в строки, падает на циклических ссылках).",
          "codeExample": {
            "language": "javascript",
            "code": "const user = {\n  id: 101,\n  name: 'Анна',\n  skills: ['HTML', 'CSS'],\n  settings: { theme: 'dark' }\n};\n\n// 1. Shallow Copy через spread:\nconst shallow = { ...user };\nshallow.name = 'Ольга'; // user.name останется 'Анна'\nshallow.skills.push('JS'); // ⚠️ user.skills ТОЖЕ изменится, ссылка общая!\n\n// 2. Нативное Deep Copy через structuredClone:\nconst deep = structuredClone(user);\ndeep.settings.theme = 'light'; // user.settings.theme останется 'dark'!\ndeep.skills.push('React');     // user.skills не тронут!",
            "title": "Shallow Copy против нативного structuredClone",
            "explanation": "Spread { ...user } копирует только верхний уровень, массив skills остается общим. structuredClone создает 100% независимую копию на всех уровнях вложенности."
          }
        },
        {
          "title": "Статические методы Object: keys, values, entries, fromEntries, hasOwn",
          "content": "Для эффективной работы с объектами в JavaScript используется набор мощных статических методов:\n\n1. `Object.keys(obj)` — возвращает массив строковых ключей объекта: `['id', 'name']`.\n2. `Object.values(obj)` — возвращает массив значений свойств: `[101, 'Анна']`.\n3. `Object.entries(obj)` — возвращает массив пар `[ключ, значение]`: `[['id', 101], ['name', 'Анна']]`. Незаменим для фильтрации и трансформации объектов через методы массивов!\n4. `Object.fromEntries(entries)` — производит обратную операцию: собирает объект из массива пар `[ключ, значение]`.\n\n5. `Object.hasOwn(obj, 'prop')` (стандарт ES2022):\nБезопасная проверка наличия собственного свойства у объекта. Пришла на смену устаревшему `obj.hasOwnProperty()`, который падает с ошибкой, если объект создан через `Object.create(null)` или свойство `hasOwnProperty` переопределено пользователем.\n\n6. `Object.freeze(obj)` — «замораживает» объект: запрещает добавление, удаление и изменение свойств (делает объект иммутабельным на верхнем уровне).",
          "codeExample": {
            "language": "javascript",
            "code": "const inventory = {\n  apples: 15,\n  oranges: 0,\n  bananas: 8,\n  kiwi: 0\n};\n\n// Фильтрация объекта: оставляем только товары в наличии\nconst inStock = Object.fromEntries(\n  Object.entries(inventory).filter(([item, count]) => count > 0)\n);\nconsole.log(inStock); // { apples: 15, bananas: 8 }\n\n// Безопасная проверка наличия свойства\nconsole.log(Object.hasOwn(inventory, 'apples')); // true\nconsole.log(Object.hasOwn(inventory, 'mango'));  // false",
            "title": "Трансформация объектов через entries и fromEntries",
            "explanation": "Object.entries превращает объект в массив для фильтрации, а Object.fromEntries мгновенно восстанавливает отфильтрованный объект."
          }
        },
        {
          "title": "Массивы: Мутирующие vs Иммутабельные методы и новинки ES2023",
          "content": "Во фронтенд-разработке (особенно в React, Redux и Vue) критически важно различать методы массивов, которые мутируют исходный массив, и методы, возвращающие новый массив:\n\nМутирующие методы (изменяют исходный массив на месте — антипаттерн в React state!):\n- `push()`, `pop()`, `shift()`, `unshift()`\n- `splice()` (удаление/вставка по индексу)\n- `sort()`, `reverse()`\n\nИммутабельные методы (возвращают НОВЫЙ массив, сохраняя оригинал в безопасности):\n- `map()`, `filter()`, `slice()`, `concat()`, `flat()`, `flatMap()`\n\nРеволюционные иммутабельные методы ES2023 (Change Array by Copy):\n1. `arr.toSorted(compareFn)` — иммутабельная сортировка (вместо `[...arr].sort()`).\n2. `arr.toReversed()` — иммутабельный реверс (вместо `[...arr].reverse()`).\n3. `arr.toSpliced(start, deleteCount, ...items)` — иммутабельный `splice`.\n4. `arr.with(index, value)` — возвращает новый массив с заменённым элементом по индексу!",
          "codeExample": {
            "language": "javascript",
            "code": "const scores = [85, 92, 78, 99, 64];\n\n// ❌ Старый мутирующий способ:\n// scores.sort(); // ⚠️ Исходный массив scores безвозвратно мутирован!\n\n// ✅ Современный иммутабельный стандарт ES2023:\nconst sortedScores = scores.toSorted((a, b) => b - a);\nconsole.log(sortedScores); // [99, 92, 85, 78, 64] (новый массив)\nconsole.log(scores);       // [85, 92, 78, 99, 64] (оригинал не тронут!)\n\n// Замена элемента по индексу без мутации (with):\nconst updatedScores = scores.with(0, 100); // [100, 92, 78, 99, 64]",
            "title": "Иммутабельные методы массивов стандарта ES2023",
            "explanation": "toSorted и with производят операции без мутации исходного массива scores, гарантируя надежность состояния в React."
          }
        },
        {
          "title": "Безопасная работа со свойствами: Опциональная последовательность (?.) и Нулевое слияние (??)",
          "content": "При работе с глубоко вложенными объектами и конфигурациями (например, ответами API) доступ к свойствам может привести к критической ошибке `TypeError: Cannot read properties of undefined/null` (краш приложения).\n\n### 1. Опциональная цепочка `?.` (Optional Chaining):\n- **Доступ к свойствам**: `user?.profile?.address?.city` — возвращает `undefined`, если любой промежуточный узел равен `null` или `undefined`, не выбрасывая ошибку.\n- **Доступ к массивам и динамическим ключам**: `items?.[0]` или `data?.[dynamicKey]`.\n- **Безопасный вызов методов**: `callback?.(payload)` или `user.getDiscount?.()`.\n- **Short-circuiting**: если левая часть `null/undefined`, правая часть выражения даже не вычисляется.\n\n### 2. Оператор нулевого слияния `??` (Nullish Coalescing):\n- Возвращает правый операнд **только** тогда, когда левый равен `null` или `undefined`.\n- **Критическое отличие от логического ИЛИ (`||`)**:\n  - `||` считает ложными (`falsy`) значения: `0`, `\"\"`, `false`, `NaN`, `null`, `undefined`.\n  - `??` считает пустыми (`nullish`) ТОЛЬКО: `null` и `undefined`.\n  - Пример: `const count = user.itemsCount ?? 10;` — если у пользователя 0 предметов (`itemsCount: 0`), оператор `??` корректно сохранит `0`, в то время как `||` ошибочно перезаписал бы его на `10`!\n\n### 3. Идеальный тандем `?.` и `??`:\n`const theme = user?.settings?.appearance?.theme ?? 'system';`"
        },
        {
          "title": "Рекомендуемые видеоуроки по объектам, Optional Chaining и Nullish Coalescing",
          "content": "Для детального визуального закрепления работы операторов нулевого слияния и опциональной цепочки рекомендуем изучить видеоурок:\n\n- **[Операторы Nullish Coalescing (??) и Optional Chaining (?.) в JavaScript простыми словами (YouTube)](https://youtu.be/zyjhDRKpqm8?si=O-yqKG6a4W8XaCzZ)** — подробный видеоразбор оператора нулевого слияния `??` и опциональной цепочки `?.`, разница с логическим ИЛИ `||` и защита от ошибок `TypeError: Cannot read properties of undefined`."
        }
      ],
      "seniorTips": [
        "Для глубокого клонирования сложных структур всегда используйте нативный `structuredClone()`. Откажитесь от устаревшего костыля `JSON.parse(JSON.stringify())`.",
        "Вместо `obj.hasOwnProperty('key')` всегда пишите современный `Object.hasOwn(obj, 'key')` — это стандарт безопасности в коммерческих проектах.",
        "Используйте новые методы ES2023 (`toSorted`, `toReversed`, `toSpliced`, `with`) вместо мутирующих аналогов для манипуляций с состоянием компонентов.",
        "Помните: spread `{ ...obj }` клонирует ТОЛЬКО первый уровень вложенности. Если внутри есть объекты или массивы — их ссылки останутся общими!"
      ],
      "commonMistakes": [
        {
          "bad": "const original = { user: { name: 'Иван' } };\nconst copy = { ...original };\ncopy.user.name = 'Ольга'; // ❌ Мутировал и original!",
          "good": "const original = { user: { name: 'Иван' } };\nconst copy = structuredClone(original);\ncopy.user.name = 'Ольга'; // ✅ original остался нетронутым",
          "reason": "Spread-оператор { ...obj } делает лишь поверхностную копию. Вложенный объект user скопировался по ссылке."
        },
        {
          "bad": "// Мутация массива прямо в функции\nfunction getTopUsers(users) {\n  return users.sort((a, b) => b.rating - a.rating);\n}",
          "good": "function getTopUsers(users) {\n  return users.toSorted((a, b) => b.rating - a.rating);\n}",
          "reason": "Метод sort() мутирует переданный аргумент users. Вызов такой функции ломает данные в других частях приложения."
        },
        {
          "bad": "if (user.hasOwnProperty('email')) { ... }",
          "good": "if (Object.hasOwn(user, 'email')) { ... }",
          "reason": "Если user создан через Object.create(null), у него нет прототипа и вызов .hasOwnProperty() выбросит фатальную ошибку TypeError."
        }
      ],
      "keyTakeaways": [
        "Примитивы хранятся в Stack и копируются по значению. Объекты хранятся в Heap и передаются по ссылке.",
        "`structuredClone()` — нативный стандарт глубокого клонирования сложных объектов со всеми уровнями вложенности.",
        "Комбинация `Object.entries()` + метод массива + `Object.fromEntries()` позволяет фильтровать и трансформировать объекты любой сложности.",
        "`Object.hasOwn(obj, key)` — безопасный стандарт проверки наличия свойств.",
        "Методы ES2023 `toSorted()`, `toReversed()`, `toSpliced()`, `with()` позволяют работать с массивами строго иммутабельно."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"js-box\"></div>",
      "initialCss": "#js-box {\n  font-family: 'JetBrains Mono', monospace;\n  background: #0a0e13;\n  color: #2dff8a;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #30363d;\n  min-height: 220px;\n  white-space: pre-wrap;\n}",
      "initialJs": "const out = document.getElementById('js-box');\nconst log = (t) => out.textContent += t + '\\n';\n\n// Демонстрация structuredClone и иммутабельности:\nconst original = {\n  title: 'Курс JS',\n  stats: { views: 1500, likes: 320 },\n  tags: ['web', 'frontend']\n};\n\nconst deep = structuredClone(original);\ndeep.stats.views = 9999;\ndeep.tags.push('react');\n\nlog('Original views: ' + original.stats.views + ' (не изменился!)');\nlog('Original tags: ' + original.tags.join(', '));\nlog('Deep clone views: ' + deep.stats.views);",
      "instructions": "Практика с объектами и массивами:\n1. Запустите код и убедитесь в надежности structuredClone\n2. Профильтруйте объект цен через Object.entries/fromEntries, оставив товары дороже 1000 руб\n3. Отсортируйте массив [50, 10, 80, 20] иммутабельным методом toSorted()"
    },
    "task": {
      "title": "Разработка модуля глубокой нормализации и иммутабельного обновления базы данных",
      "scenario": "Вы разрабатываете модуль управления состоянием пользователей. Модуль должен принимать сырой объект базы данных, нормализовать его структуру через Object.entries/fromEntries, обновлять данные пользователей строго иммутабельно без мутации исходного состояния и использовать нативное глубокое клонирование.",
      "criteria": [
        "Функция cloneDeep(data) использует нативный structuredClone с fallback-защитой",
        "Функция filterActiveUsers(usersById) фильтрует объект через Object.entries/fromEntries",
        "Функция updateUserSkill(usersById, userId, newSkill) возвращает обновленный объект без мутации оригинала",
        "Функция getSortedUsersByScore(usersArray) сортирует массив пользователей иммутабельно",
        "Использовать Object.hasOwn для проверки существования пользователя"
      ],
      "starterCode": {
        "js": "// Исходные данные\nconst usersDB = {\n  u1: { name: 'Иван', active: true, score: 85, skills: ['JS'] },\n  u2: { name: 'Ольга', active: false, score: 92, skills: ['HTML'] },\n  u3: { name: 'Петр', active: true, score: 78, skills: ['CSS'] }\n};\n\nfunction filterActiveUsers(users) {\n  // Ваш код\n}"
      },
      "hints": [
        "Используйте Object.fromEntries(Object.entries(users).filter(([id, u]) => u.active))",
        "Для обновления скилла используйте structuredClone или вложенный spread",
        "Для сортировки используйте массив.toSorted((a, b) => b.score - a.score)"
      ],
      "solution": {
        "js": "function cloneDeep(data) {\n  if (typeof structuredClone === 'function') {\n    return structuredClone(data);\n  }\n  return JSON.parse(JSON.stringify(data));\n}\n\nfunction filterActiveUsers(usersById = {}) {\n  return Object.fromEntries(\n    Object.entries(usersById).filter(([id, user]) => user && user.active)\n  );\n}\n\nfunction updateUserSkill(usersById = {}, userId, newSkill) {\n  if (!Object.hasOwn(usersById, userId)) return usersById;\n  \n  const cloned = cloneDeep(usersById);\n  const currentSkills = cloned[userId].skills || [];\n  if (!currentSkills.includes(newSkill)) {\n    cloned[userId].skills = [...currentSkills, newSkill];\n  }\n  return cloned;\n}\n\nfunction getSortedUsersByScore(usersArray = []) {\n  return usersArray.toSorted((a, b) => (b.score ?? 0) - (a.score ?? 0));\n}",
        "explanation": "Модуль строго следует принципам иммутабельности: filterActiveUsers трансформирует структуру через entries/fromEntries, updateUserSkill проверяет ключ через Object.hasOwn и клонирует объект, а getSortedUsersByScore использует toSorted."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js5-q1",
          "question": "Что выведет этот код после вызова функции с объектом и числом?",
          "codeSnippet": "function update(obj, num) {\n  obj.value = 100;\n  num = 100;\n}\nconst data = { value: 1 };\nlet count = 1;\nupdate(data, count);\nconsole.log(data.value, count);",
          "options": [
            "100 100 — все аргументы передаются в функцию по ссылке",
            "1 100 — объекты копируются, а примитивы передаются по ссылке",
            "1 1 — аргументы всегда копируются, изменения внутри функции наружу не видны",
            "100 1 — объект передан по ссылке, а примитив скопирован по значению"
          ],
          "correctIndex": 3,
          "explanation": "В параметр попала копия ссылки на объект, но ведёт она к тому же месту в куче, поэтому изменение свойства видно снаружи. Примитив копируется целиком, и присваивание внутри функции меняет только локальный параметр. Обратите внимание: если бы внутри стояло `obj = { value: 100 }`, исходный объект тоже остался бы прежним — переприсваивание меняет лишь локальную копию ссылки."
        },
        {
          "id": "js5-q2",
          "question": "Какие из способов копирования дают ПОВЕРХНОСТНУЮ копию объекта?",
          "options": [
            "`{ ...obj }` и `Object.assign({}, obj)` — оба копируют только верхний уровень",
            "`{ ...obj }` копирует поверхностно, а `Object.assign({}, obj)` — вглубь",
            "`structuredClone(obj)` и `{ ...obj }` — оба ограничены первым уровнем вложенности",
            "`Object.assign({}, obj)` копирует поверхностно, а оператор расширения — глубоко"
          ],
          "correctIndex": 0,
          "explanation": "Оператор расширения и присваивание свойств делают ровно одно и то же: переносят собственные перечислимые свойства на один уровень. Если значением свойства оказалась ссылка на вложенный объект или массив, копируется именно ссылка, и оба объекта продолжают делить эти данные. Единственный способ из перечисленных, копирующий всю структуру целиком, — `structuredClone`."
        },
        {
          "id": "js5-q3",
          "question": "Чем `structuredClone(obj)` лучше приёма `JSON.parse(JSON.stringify(obj))`?",
          "options": [
            "Он копирует объект синхронно, тогда как сериализация выполняется асинхронно",
            "Он сохраняет даты, коллекции и циклические ссылки, которые сериализация теряет",
            "Он сохраняет методы объекта и функции, записанные в его свойства",
            "Он не создаёт новый объект, а лишь помечает исходный как неизменяемый"
          ],
          "correctIndex": 1,
          "explanation": "Проход через JSON — лишь имитация клонирования: объект даты превращается в строку, коллекции `Map` и `Set` схлопываются в пустой объект, значение `undefined` и ключи-символы исчезают, а циклическая ссылка вызывает исключение. Встроенное клонирование всё это переносит корректно. Функции не копирует ни один из способов: для них структурированное клонирование выбросит ошибку."
        },
        {
          "id": "js5-q4",
          "question": "Что произойдёт при выполнении этих строк с объектом без прототипа?",
          "codeSnippet": "const dict = Object.create(null);\ndict.a = 1;\nconsole.log(Object.hasOwn(dict, 'a'));\nconsole.log(dict.hasOwnProperty('a'));",
          "options": [
            "Первая выведет `true`, вторая выбросит `TypeError`: у объекта нет прототипа",
            "Обе выведут `true` — эти два способа проверки полностью равноценны",
            "Первая выбросит `TypeError`, а вторая спокойно выведет `true`",
            "Обе выведут `false` — свойства объекта без прототипа собственными не считаются"
          ],
          "correctIndex": 0,
          "explanation": "`Object.create(null)` создаёт объект вообще без прототипа — приём, которым часто пользуются для словарей, чтобы ключ вроде `constructor` ничего не ломал. Побочный эффект: унаследованных методов у такого объекта нет, и вызов проверки как метода падает с ошибкой. Статический `Object.hasOwn` не зависит от прототипа и работает всегда, поэтому и стал рекомендуемой формой."
        },
        {
          "id": "js5-q5",
          "question": "Что выведет это сравнение ссылок после двух видов сортировки?",
          "codeSnippet": "const nums = [3, 1, 2];\nconst a = nums.sort();\nconst b = nums.toSorted();\nconsole.log(nums === a, nums === b);",
          "options": [
            "`false false` — оба метода всегда возвращают новые независимые массивы",
            "`true false` — сортировка на месте вернула тот же массив, а новая создала копию",
            "`true true` — оба метода изменяют исходный массив и возвращают ссылку на него",
            "`false true` — на месте работает второй метод, а первый создаёт копию"
          ],
          "correctIndex": 1,
          "explanation": "Классическая сортировка переставляет элементы прямо в исходном массиве и возвращает ссылку на него же — отсюда строгое равенство. Поэтому строка вида `const sorted = arr.sort()` создаёт опасную иллюзию: данные незаметно меняются во всём приложении. Методы стандарта ES2023 (`toSorted`, `toReversed`, `toSpliced`, `with`) возвращают новый массив и оставляют оригинал нетронутым."
        }
      ]
    }
  },
  {
    "id": "javascript-6",
    "moduleId": "javascript",
    "level": 6,
    "title": "Продвинутая работа с массивами",
    "subtitle": "map, filter, reduce, flatMap, findLast, Group By и оптимизация производительности",
    "description": "Освойте высший пилотаж работы с массивами в JavaScript: продвинутые паттерны метода reduce (Group By, Frequency Map), метод flatMap, новинки ES2023 findLast/findLastIndex и оптимизацию цепочек методов на больших объемах данных.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "arrays",
      "map",
      "filter",
      "reduce",
      "flatMap",
      "findLast",
      "groupBy",
      "performance",
      "es2023"
    ],
    "theory": {
      "overview": "Массивы в JavaScript — один из самых мощных и часто используемых инструментов. 80% задач фронтенд-инженера связаны с получением данных от API, их фильтрацией, сортировкой, группировкой и трансформацией в элементы пользовательского интерфейса.\n\nВ этом уроке мы досконально разберём метод `reduce` (швейцарский нож функционального JS), изучим метод `flatMap`, освоим новинки стандарта ES2023 (`findLast`, `findLastIndex`) и научимся избегать скрытых утечек памяти при работе с цепочками методов на больших массивах.",
      "sections": [
        {
          "title": "Итераторы и трансформации: map, filter, forEach, find и findLast",
          "content": "Сравнение методов обхода массивов:\n\n1. `forEach(fn)` vs `map(fn)`:\n- `forEach` выполняет колбэк для каждого элемента ради ПОБОЧНЫХ ЭФФЕКТОВ (логирование, мутация DOM). Всегда возвращает `undefined`. Нельзя прервать ключевым словом `break`!\n- `map` — чистая трансформация «1-в-1». Создаёт и возвращает НОВЫЙ массив той же длины, где каждый элемент трансформирован колбэком.\n\n2. `filter(predicate)`:\n- Возвращает новый массив, содержащий только те элементы, для которых колбэк вернул `true`.\n\n3. Поиск элементов: `find`, `findIndex`, `findLast`, `findLastIndex`:\n- `find(fn)` — возвращает ПЕРВЫЙ элемент, удовлетворяющий условию, или `undefined`.\n- `findIndex(fn)` — возвращает индекс первого совпадения или `-1`.\n- `findLast(fn)` и `findLastIndex(fn)` (стандарт ES2023) — ищут элемент С КОНЦА массива! Больше не нужно делать опасный `arr.reverse().find()`!\n\n4. Проверки `some()` и `every()` (Short-Circuiting):\n- `some(fn)` — возвращает `true`, если ХОТЯ БЫ ОДИН элемент подошел (останавливает цикл сразу после первого `true`).\n- `every(fn)` — возвращает `true`, если ВСЕ элементы подошли (останавливает цикл сразу при первом `false`).",
          "image": {
            "src": "/images/lessons/js-advanced-arrays.svg",
            "alt": "Продвинутые методы работы с массивами в JavaScript: reduce, flatMap, findLast",
            "caption": "map и filter трансформируют данные, reduce агрегирует в любые структуры, flatMap объединяет маппинг с уплощением"
          },
          "codeExample": {
            "language": "javascript",
            "code": "const transactions = [\n  { id: 1, type: 'pay', amount: 1500, status: 'ok' },\n  { id: 2, type: 'refund', amount: 500, status: 'ok' },\n  { id: 3, type: 'pay', amount: 3200, status: 'failed' },\n  { id: 4, type: 'pay', amount: 4100, status: 'ok' }\n];\n\n// 1. Поиск последней успешной оплаты с конца (ES2023 findLast)\nconst lastSuccessPay = transactions.findLast(\n  (t) => t.type === 'pay' && t.status === 'ok'\n);\nconsole.log(lastSuccessPay); // { id: 4, amount: 4100 }\n\n// 2. Проверка: есть ли хоть одна упавшая транзакция (some)\nconst hasFailures = transactions.some((t) => t.status === 'failed');\nconsole.log('Есть ошибки:', hasFailures); // true",
            "title": "Использование findLast и short-circuit проверки some",
            "explanation": "findLast находит последнюю оплату без мутации исходного массива. some останавливает проверку на элементе с id: 3."
          }
        },
        {
          "title": "Метод reduce: Швейцарский нож функционального JavaScript",
          "content": "Метод `reduce` агрегирует массив любой длины в ЕДИНОЕ результирующее значение (число, строку, объект, новый массив или Map).\n\nСигнатура метода:\n`arr.reduce((accumulator, currentValue, index, array) => { ... }, initialValue)`\n\nЗолотое правило: ВСЕГДА явно передавайте `initialValue`!\nЕсли не передать `initialValue`, то первым аккумулятором станет нулевой элемент массива `arr[0]`, а итерация начнется с 1-го индекса. Если массив окажется пустым `[]`, то вызов `[].reduce((a, b) => a + b)` вызовет фатальное падение: `TypeError: Reduce of empty array with no initial value`!\n\nКлючевые паттерны на `reduce`:\n1. Подсчет статистики и сумм.\n2. Frequency Map (подсчет частоты встречаемости элементов).\n3. Группировка объектов по ключу (Group By).\n4. Разворачивание сложных деревьев в плоский список.",
          "codeExample": {
            "language": "javascript",
            "code": "const orders = [\n  { id: 'o1', category: 'electronics', price: 12000 },\n  { id: 'o2', category: 'books', price: 1500 },\n  { id: 'o3', category: 'electronics', price: 45000 },\n  { id: 'o4', category: 'books', price: 800 }\n];\n\n// Паттерн Group By на reduce:\nconst ordersByCategory = orders.reduce((groups, order) => {\n  const cat = order.category;\n  if (!groups[cat]) groups[cat] = [];\n  groups[cat].push(order);\n  return groups;\n}, {});\n\nconsole.log(ordersByCategory);\n// {\n//   electronics: [ { id: 'o1', ... }, { id: 'o3', ... } ],\n//   books: [ { id: 'o2', ... }, { id: 'o4', ... } ]\n// }",
            "title": "Паттерн Group By на методе reduce",
            "explanation": "reduce группирует заказы по категориям в единый объект. Пустой объект {} в конце служит обязательным initialValue."
          }
        },
        {
          "title": "Вложенные массивы: flat и flatMap",
          "content": "Работа со вложенными структурами данных:\n\n1. `arr.flat(depth)`:\n- «Выпрямляет» вложенные массивы. По умолчанию `depth = 1`.\n- Для полного сглаживания массива любой глубины вложенности используйте `arr.flat(Infinity)`.\n- Автоматически удаляет пустые слоты (дыры) из разреженных массивов.\n\n2. `arr.flatMap(fn)` (Мощная связка map + flat):\n- Применяет функцию трансформации к каждому элементу и затем «схлопывает» результат на 1 уровень глубины.\n- Работает быстрее и эффективнее, чем отдельный `.map().flat()`, так как не создает промежуточный массив в памяти.\n- Позволяет одновременно модифицировать, размножать и удалять элементы (если вернуть пустой массив `[]`, элемент отфильтруется!).",
          "codeExample": {
            "language": "javascript",
            "code": "const users = [\n  { name: 'Иван', tags: ['javascript', 'react'] },\n  { name: 'Ольга', tags: ['html', 'css'] },\n  { name: 'Петр', tags: ['react', 'node'] }\n];\n\n// 1. Извлечение всех тегов в единый массив с flatMap\nconst allTags = users.flatMap((u) => u.tags);\nconsole.log(allTags); // ['javascript', 'react', 'html', 'css', 'react', 'node']\n\n// 2. Уникальные теги через Set:\nconst uniqueTags = [...new Set(allTags)];\nconsole.log(uniqueTags); // ['javascript', 'react', 'html', 'css', 'node']\n\n// 3. flatMap для одновременной фильтрации и модификации:\nconst prices = [10, 25, -5, 40, 0];\nconst doubledPositive = prices.flatMap((p) => (p > 0 ? [p * 2] : []));\nconsole.log(doubledPositive); // [20, 50, 80] (-5 и 0 отфильтрованы!)",
            "title": "Использование flatMap для тегов и условной фильтрации",
            "explanation": "flatMap извлекает вложенные массивы за один проход. Возврат пустого массива [] в колбэке удаляет нежелательные элементы."
          }
        },
        {
          "title": "Производительность и оптимизация работы с большими массивами",
          "content": "Во фронтенд-приложениях обработка массивов из 10 000+ элементов может заблокировать Main Thread, если писать код неэффективно:\n\n1. Проблема длинных цепочек методов (Method Chaining Overhead):\nЦепочка `items.filter(A).map(B).filter(C).map(D)` на массиве из 100 000 элементов создаст в памяти 3 огромных промежуточных массива и заставит сборщик мусора (Garbage Collector) непрерывно очищать память.\n✅ Решение: объединяйте операции в один проход через `reduce` или классический цикл `for (let i = 0; i < len; i++)` для критических участков.\n\n2. Генерация диапазонов чисел через `Array.from()`:\n`const range = Array.from({ length: 100 }, (_, i) => i + 1);` — создает массив чисел от 1 до 100 без ручных циклов `push`.\n\n3. Типизированные массивы (TypedArrays — `Uint8Array`, `Float32Array`):\nИспользуются для работы с бинарными данными, аудио, Canvas, WebGL и криптографией. Выделяют непрерывный блок памяти в Stack/Buffer и работают в 5–10 раз быстрее обычных массивов.",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Быстрая генерация пагинации (страницы от 1 до 10)\nconst pages = Array.from({ length: 10 }, (_, i) => i + 1);\nconsole.log(pages); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n// 2. Оптимизация 1 проходом (reduce вместо filter + map)\nconst rawData = [15, -4, 22, 0, 8, -12, 35];\n\n// Вместо: rawData.filter(x => x > 0).map(x => x * 10)\nconst optimized = rawData.reduce((acc, x) => {\n  if (x > 0) acc.push(x * 10);\n  return acc;\n}, []);\nconsole.log(optimized); // [150, 220, 80, 350]",
            "title": "Генерация диапазонов Array.from и оптимизация цепочек",
            "explanation": "Array.from генерирует массив с нужной длиной. reduce объединяет фильтрацию и маппинг в 1 проход без промежуточных массивов."
          }
        }
      ],
      "seniorTips": [
        "ВСЕГДА передавайте `initialValue` в `reduce(fn, initialValue)`. Это исключает ошибку `TypeError: Reduce of empty array with no initial value` при получении пустого массива с бэкенда.",
        "Используйте `flatMap()` вместо связки `.map().flat()` — это выполняется за один проход и экономит оперативную память.",
        "Для поиска последнего элемента массива используйте нативный `arr.findLast()` (ES2023) вместо опасного `arr.reverse().find()` (который мутирует массив!).",
        "Используйте `some()` и `every()` для раннего выхода (Short-circuiting): они прекращают итерацию сразу, как только результат становится известен."
      ],
      "commonMistakes": [
        {
          "bad": "// Использование map вместо forEach ради побочного эффекта\nusers.map(u => { saveToDB(u); });",
          "good": "users.forEach(u => { saveToDB(u); });",
          "reason": "Метод map создает новый массив в памяти. Если этот массив никуда не присваивается, создается бесполезная нагрузка на Garbage Collector."
        },
        {
          "bad": "// reduce без initialValue падает на пустом массиве\nconst total = [].reduce((sum, x) => sum + x.price); // 💥 TypeError!",
          "good": "const total = [].reduce((sum, x) => sum + x.price, 0); // ✅ 0",
          "reason": "Без initialValue метод reduce пытается взять первый элемент массива. На пустом массиве это приводит к фатальному сбою приложения."
        },
        {
          "bad": "// Поиск с конца через reverse мутирует оригинал\nconst last = items.reverse().find(x => x.active); // ❌ items развернулся!",
          "good": "const last = items.findLast(x => x.active); // ✅ Чистый поиск",
          "reason": "Метод reverse() мутирует исходный массив на месте, что ломает порядок элементов во всем остальном приложении."
        }
      ],
      "keyTakeaways": [
        "`map` преобразует элементы 1-в-1, `filter` отбирает подмножество, `flatMap` объединяет маппинг со сглаживанием.",
        "`reduce` агрегирует массив в единое значение (сумму, объект, дерево), требуя обязательного `initialValue`.",
        "`findLast` и `findLastIndex` (ES2023) нативно ищут элементы с конца массива без мутации через `reverse()`.",
        "`some()` и `every()` поддерживают short-circuit оптимизацию и мгновенно прерывают проверку.",
        "`Array.from({ length: N }, fn)` — лучший инструмент генерации массивов диапазонов."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"js-output-box\"></div>",
      "initialCss": "#js-output-box {\n  font-family: 'JetBrains Mono', monospace;\n  background: #0a0e13;\n  color: #2dff8a;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #30363d;\n  min-height: 220px;\n  white-space: pre-wrap;\n}",
      "initialJs": "const out = document.getElementById('js-output-box');\nconst log = (t) => out.textContent += t + '\\n';\n\nconst scores = [85, 42, 99, 73, 99, 64];\n\n// 1. Поиск с конца (ES2023 findLastIndex)\nconst lastMaxIdx = scores.findLastIndex(s => s === 99);\nlog('Индекс последней 99: ' + lastMaxIdx); // 4\n\n// 2. Frequency Map на reduce:\nconst freq = scores.reduce((acc, s) => {\n  acc[s] = (acc[s] || 0) + 1;\n  return acc;\n}, {});\nlog('Частота оценок: ' + JSON.stringify(freq));",
      "instructions": "Практика с массивами:\n1. Запустите код и посмотрите на работу findLastIndex и frequency map\n2. Напишите агрегацию reduce для подсчета средней оценки (average score)\n3. Используйте flatMap для извлечения массива подзадач из списка проектов"
    },
    "task": {
      "title": "Разработка аналитического ядра обработки логов финансовых транзакций",
      "scenario": "Вы разрабатываете модуль аналитики для финтех-платформы. Модуль принимает массив транзакций и должен сгруппировать их по валютам, подсчитать общую сумму и статистику через reduce, найти последнюю подозрительную операцию через findLast и извлечь список уникальных тегов через flatMap.",
      "criteria": [
        "Функция calculateTotals(transactions) возвращает общую сумму и количество через 1 проход reduce",
        "Функция groupTransactionsByCurrency(transactions) группирует операции по валюте (RUB, USD, EUR)",
        "Функция findLastFailedTransaction(transactions) ищет последнюю неудачную транзакцию через findLast",
        "Функция extractUniqueTags(transactions) извлекает уникальные теги через flatMap и Set",
        "Все методы должны быть чистыми и не мутировать входные массивы"
      ],
      "starterCode": {
        "js": "// Исходные данные\nconst logs = [\n  { id: 1, amount: 5000, currency: 'RUB', status: 'success', tags: ['food', 'card'] },\n  { id: 2, amount: 120, currency: 'USD', status: 'failed', tags: ['travel'] },\n  { id: 3, amount: 3500, currency: 'RUB', status: 'failed', tags: ['online'] },\n  { id: 4, amount: 80, currency: 'USD', status: 'success', tags: ['card'] }\n];\n\nfunction processAnalytics(transactions) {\n  // Ваш код\n}"
      },
      "hints": [
        "В calculateTotals используйте transactions.reduce((acc, t) => { ... }, { sum: 0, count: 0 })",
        "Используйте transactions.findLast(t => t.status === 'failed')",
        "Для тегов: [...new Set(transactions.flatMap(t => t.tags || []))]"
      ],
      "solution": {
        "js": "function calculateTotals(transactions = []) {\n  return transactions.reduce(\n    (acc, t) => {\n      acc.count += 1;\n      acc.totalAmount += (t.amount ?? 0);\n      return acc;\n    },\n    { count: 0, totalAmount: 0 }\n  );\n}\n\nfunction groupTransactionsByCurrency(transactions = []) {\n  return transactions.reduce((groups, t) => {\n    const curr = t.currency || 'UNKNOWN';\n    if (!groups[curr]) groups[curr] = [];\n    groups[curr].push(t);\n    return groups;\n  }, {});\n}\n\nfunction findLastFailedTransaction(transactions = []) {\n  return transactions.findLast((t) => t.status === 'failed') ?? null;\n}\n\nfunction extractUniqueTags(transactions = []) {\n  const allTags = transactions.flatMap((t) => t.tags || []);\n  return [...new Set(allTags)];\n}",
        "explanation": "Аналитическое ядро использует современные практики JS: reduce с явным initialValue для сумм и группировки, findLast для мгновенного поиска с конца и flatMap + Set для дедупликации тегов."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js6-q1",
          "question": "Что произойдёт при выполнении этих двух свёрток?",
          "codeSnippet": "const nums = [1, 2, 3];\nconst empty = [];\nconsole.log(nums.reduce((a, b) => a + b));\nconsole.log(empty.reduce((a, b) => a + b));",
          "options": [
            "Обе отработают: вторая вернёт `undefined` для пустого массива",
            "Первая выбросит ошибку: начальное значение обязательно в любом случае",
            "Первая выведет 6, вторая выбросит `TypeError` — нет начального значения",
            "Обе выведут `NaN` из-за сложения с неопределённым значением"
          ],
          "correctIndex": 2,
          "explanation": "Без начального значения свёртка берёт в качестве старта первый элемент массива, и на непустом наборе всё считается верно. На пустом массиве брать нечего, и метод выбрасывает исключение. Именно поэтому начальное значение передают всегда: массив с сервера вполне может прийти пустым, и приложение упадёт на ровном месте."
        },
        {
          "id": "js6-q2",
          "question": "Как одним вызовом получить из этих данных массив `['a', 'b', 'c']`?",
          "codeSnippet": "const rows = [{ tags: ['a', 'b'] }, { tags: ['c'] }];",
          "options": [
            "`rows.flatMap(r => r.tags)` — преобразование и уплощение за один проход",
            "`rows.flat().map(r => r.tags)` — сначала уплощение, затем выборка свойства",
            "`rows.map(r => r.tags).flat(2)` — здесь требуется уплощение на два уровня",
            "`rows.reduce((a, r) => a.concat(r), [])` — свёртка со склейкой объектов"
          ],
          "correctIndex": 0,
          "explanation": "Метод применяет функцию к каждому элементу и сразу раскрывает возвращённые массивы на один уровень, обходя исходные данные единожды и не создавая промежуточный массив массивов. Вариант с отдельными вызовами даёт тот же результат, но за два прохода, причём глубины уплощения достаточно обычной. Первый и четвёртый варианты просто неверны: уплощать нужно результат выборки, а не сами объекты."
        },
        {
          "id": "js6-q3",
          "question": "Чем `arr.findLast(fn)` безопаснее, чем связка `arr.reverse().find(fn)`?",
          "options": [
            "Второй вариант обходит массив дважды и потому работает примерно вдвое медленнее",
            "Второй вариант возвращает индекс, а не элемент, и требует дополнительного обращения",
            "Второй вариант не поддерживает функции обратного вызова с несколькими аргументами",
            "Второй вариант переворачивает исходный массив и ломает порядок для остального кода"
          ],
          "correctIndex": 3,
          "explanation": "Переворот выполняется на месте: массив остаётся перевёрнутым навсегда, и любой код, который держит на него ссылку, внезапно получает данные в обратном порядке. Отладить такое тяжело, ведь строка выглядит безобидно. Метод поиска с конца ничего не меняет и к тому же останавливается на первом совпадении. Если переворот всё же нужен, берите неразрушающий `toReversed`."
        },
        {
          "id": "js6-q4",
          "question": "Чем `arr.some(fn)` выгоднее, чем проверка `arr.filter(fn).length > 0`?",
          "options": [
            "Он выполняется в отдельном потоке и потому не блокирует основной поток браузера",
            "Он возвращает найденный элемент вместо логического значения, что удобнее в коде",
            "Он пропускает пустые ячейки разрежённого массива, а отбор их всё равно учитывает",
            "Перебор прерывается на первом совпадении, и промежуточный массив не создаётся"
          ],
          "correctIndex": 3,
          "explanation": "Отбор честно проходит весь массив и складывает подходящие элементы в новый, который тут же выбрасывается ради одного числа. Проверка на существование останавливается, как только нашла первое совпадение, и ничего не выделяет в памяти. Симметрично работает проверка «для всех»: она прерывается на первом элементе, не прошедшем условие."
        },
        {
          "id": "js6-q5",
          "question": "Почему `new Array(5).map((_, i) => i)` возвращает массив из пустот, а `Array.from({ length: 5 }, (_, i) => i)` работает?",
          "options": [
            "Первый создаёт массив строк, и перебор не может преобразовать их в числа",
            "Первый создаёт массив, доступный только для чтения, менять его элементы нельзя",
            "Первый создаёт разрежённый массив без ключей, а методы перебора пропускают дыры",
            "Первый принимает длину, а не элементы, поэтому перебор запускается ноль раз"
          ],
          "correctIndex": 2,
          "explanation": "Конструктор с числом задаёт только длину, не создавая самих ячеек: получается разрежённый массив, у которого нет ни одного ключа. Методы вроде преобразования и перебора такие дыры пропускают, поэтому колбэк не вызывается ни разу. Создание из массивоподобного объекта устроено иначе: оно честно обходит индексы от нуля до длины и вызывает функцию для каждого. Тот же эффект даёт предварительное заполнение через `fill`."
        }
      ]
    }
  },
  {
    "id": "javascript-7",
    "moduleId": "javascript",
    "level": 7,
    "title": "DOM и манипуляция элементами",
    "subtitle": "querySelector, DocumentFragment, template, closest(), dataset и оптимизация Reflow/Repaint",
    "description": "Освойте профессиональную работу с объектной моделью документа (DOM): поиск элементов через querySelector и closest(), массовую вставку узлов через DocumentFragment и <template>, управление classList и dataset, оптимизацию фаз рендеринга Reflow и Repaint.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "dom",
      "queryselector",
      "documentfragment",
      "template",
      "closest",
      "reflow",
      "repaint",
      "classlist"
    ],
    "theory": {
      "overview": "DOM (Document Object Model) — это программный мост между кодом на JavaScript и визуальным деревом HTML-документа. Любое интерактивное действие в вебе (добавление товара в корзину, открытие модального окна, рендеринг списка данных) происходит через манипуляции с узлами DOM.\n\nВ этом уроке мы разберём современные стандарты работы с DOM, изучим поиск предков через `element.closest()`, научимся безопасно и быстро рендерить тысячи элементов без лагов с помощью `DocumentFragment` и тега `<template>`, а также поймём, как браузер вычисляет геометрию (Reflow) и перерисовывает пиксели (Repaint).",
      "sections": [
        {
          "title": "Дерево DOM и современные методы поиска: querySelector и closest()",
          "content": "Браузер парсит HTML и строит дерево объектов Node:\n\n1. Поиск элементов:\n- `document.querySelector('css-селектор')` — возвращает ПЕРВЫЙ найденный элемент (или `null`, если элемент не найден).\n- `document.querySelectorAll('css-селектор')` — возвращает статический (не живой) список `NodeList`. Статический список безопасен при удалении/добавлении элементов в цикле.\n- Почему устарели `getElementsByClassName` и `getElementsByTagName`: они возвращают «живые» коллекции `HTMLCollection`, мутация которых во время цикла `for` приводит к бесконечным циклам и утечкам памяти!\n\n2. Навигация вверх по дереву: `element.closest('.card')`:\n- Ищет БЛИЖАЙШЕГО предка, соответствующего CSS-селектору, поднимаясь вверх от текущего элемента к корню документа.\n- Незаменим для делегирования событий (Event Delegation), когда клик произошел по вложенной иконке внутри кнопки `<button><svg>...</svg></button>`.\n\n3. Чтение и запись data-атрибутов: `element.dataset`:\n`<div data-user-id=\"42\" data-role=\"admin\">` -> в JS доступно как `element.dataset.userId` и `element.dataset.role` (автоматическая конвертация kebab-case в camelCase).",
          "image": {
            "src": "/images/lessons/js-dom-manipulation.svg",
            "alt": "Манипуляция DOM: DocumentFragment, template, closest и Reflow/Repaint",
            "caption": "DocumentFragment выполняет вставку за 1 Reflow, closest() находит предка для делегирования, а Composite ускоряет анимации на GPU"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Поиск элементов\nconst catalog = document.querySelector('#catalog-grid');\nconst cards = document.querySelectorAll('.product-card'); // NodeList\n\n// 2. Превращение NodeList в массив для использования методов массива:\nconst titles = [...cards].map((card) => card.querySelector('h3').textContent);\n\n// 3. Использование closest() при клике на дочерний элемент\ndocument.addEventListener('click', (e) => {\n  const deleteBtn = e.target.closest('.btn-delete');\n  if (deleteBtn) {\n    const card = deleteBtn.closest('.product-card');\n    const itemId = card.dataset.itemId;\n    console.log(`Удаление товара ID: ${itemId}`);\n    card.remove();\n  }\n});",
            "title": "Поиск элементов, NodeList и делегирование с closest()",
            "explanation": "closest('.btn-delete') безошибочно находит кнопку, даже если пользователь кликнул по иконке или тексту внутри неё. dataset.itemId извлекает значение атрибута data-item-id."
          }
        },
        {
          "title": "Создание и вставка узлов: createElement, append, insertAdjacentHTML",
          "content": "Методы создания и добавления DOM-узлов:\n\n1. Создание элемента: `const el = document.createElement('div');`\n\n2. Современные методы вставки (коллекция DOM Living Standard):\n- `parent.append(...nodesOrStrings)` — вставляет элементы или строки в конец родителя.\n- `parent.prepend(...nodesOrStrings)` — вставляет в начало родителя.\n- `node.before(...nodesOrStrings)` — вставляет перед текущим элементом.\n- `node.after(...nodesOrStrings)` — вставляет после текущего элемента.\n- В отличие от устаревшего `parent.appendChild(node)`, метод `.append()` умеет принимать несколько аргументов сразу и вставлять обычные строки текста без ручного создания `createTextNode`!\n\n3. Быстрая вставка HTML-строки: `element.insertAdjacentHTML(position, htmlString)`:\n- `position`: `'beforebegin'` (перед элементом), `'afterbegin'` (внутрь в начало), `'beforeend'` (внутрь в конец), `'afterend'` (после элемента).\n- Работает значительно быстрее `innerHTML += ...`, так как НЕ пересоздает уже существующие узлы внутри родителя!",
          "codeExample": {
            "language": "javascript",
            "code": "const list = document.querySelector('.todo-list');\n\n// 1. Создание элемента через createElement\nconst item = document.createElement('li');\nitem.className = 'todo-item is-new';\nitem.textContent = 'Изучить DocumentFragment';\n\nconst delBtn = document.createElement('button');\ndelBtn.textContent = '✕';\ndelBtn.onclick = () => item.remove(); // Удаление узла в 1 строку!\n\nitem.append(delBtn); // Вставка кнопки внутрь li\nlist.prepend(item);  // Добавление в самое начало списка\n\n// 2. Вставка HTML строки через insertAdjacentHTML\nlist.insertAdjacentHTML(\n  'beforeend',\n  `<li class=\"todo-item\"><span>Повторить CSS Grid</span></li>`\n);",
            "title": "Создание узлов createElement, методы append/prepend и insertAdjacentHTML",
            "explanation": "item.remove() удаляет элемент из DOM без родительских ссылок. append вставляет кнопку. insertAdjacentHTML вставляет строку без перезаписи существующих узлов."
          }
        },
        {
          "title": "Безопасность и массовый рендеринг: DocumentFragment и тег <template>",
          "content": "При работе с большими объемами данных классический подход приводит к фатальным тормозам интерфейса:\n\n1. Опасность `container.innerHTML += '...'` в цикле:\nПри каждом выполнении `innerHTML += ...` браузер ПОЛНОСТЬЮ уничтожает всё существующее DOM-дерево родителя, парсит новую строку и строит DOM с нуля! При 100 итерациях сбрасываются фокус, выделение текста и состояние всех инпутов!\n\n2. `DocumentFragment` (Виртуальный фрагмент документа):\n- Легковесный временный контейнер, существующий только в оперативной памяти (в куче Heap).\n- Вы наполняете `fragment` тысячами элементов в цикле `fragment.append(el)`, а затем вставляете фрагмент в DOM ОДНИМ действием: `container.append(fragment)`.\n- Браузер выполняет ровно ОДИН Reflow/Repaint вместо тысячи!\n\n3. HTML5 тег `<template>`:\n- Разметка внутри `<template>` парсится браузером, но НЕ отображается на странице (инертна: картинки не качаются, скрипты не исполняются).\n- В JS вы клонируете содержимое шаблона: `const clone = template.content.cloneNode(true);` и заполняете данными.",
          "codeExample": {
            "language": "javascript",
            "code": "// Массовый рендеринг 1000 элементов без лагов через DocumentFragment:\nfunction renderUsersFast(users, container) {\n  const fragment = document.createDocumentFragment();\n  const template = document.getElementById('user-card-template');\n\n  users.forEach((user) => {\n    // Глубокое клонирование шаблона (cloneNode(true))\n    const card = template.content.cloneNode(true);\n    card.querySelector('.user-name').textContent = user.name;\n    card.querySelector('.user-role').textContent = user.role;\n    card.querySelector('.user-card').dataset.userId = user.id;\n\n    fragment.append(card); // Добавление в виртуальный фрагмент в памяти\n  });\n\n  container.append(fragment); // Ровно 1 Reflow на 1000 элементов!\n}",
            "title": "Высокопроизводительный рендеринг через template и DocumentFragment",
            "explanation": "Все 1000 клонов собираются в виртуальном DocumentFragment в оперативной памяти и вставляются в DOM за одну миллисекунду."
          }
        },
        {
          "title": "Оптимизация рендеринга: Reflow, Repaint, Composite и Layout Thrashing",
          "content": "Как браузер выводит изменения на экран:\n\n1. **Reflow (Layout / Пересчет геометрии)** — самый тяжелый процесс:\n- Браузер вычисляет точные координаты и размеры каждого элемента на экране.\n- Вызывается изменением геометрических свойств: `width`, `height`, `margin`, `padding`, `top`, `left`, `fontSize`, `display`.\n\n2. **Repaint (Paint / Перерисовка пикселей)**:\n- Браузер заливает пиксели цветом без изменения геометрии блоков.\n- Вызывается свойствами: `color`, `background-color`, `visibility`, `box-shadow`, `border-color`.\n\n3. **Composite (Композиция слоев на GPU)** — самый быстрый процесс (60/120 FPS!):\n- Свойства `transform` (`translate`, `scale`, `rotate`) и `opacity` анимируются напрямую на видеокарте (GPU) БЕЗ вызова Reflow и Repaint!\n\n4. Опасность **Layout Thrashing** (Дребезг макета):\nВозникает, когда в цикле чередуются операции записи стилей и чтения свойств геометрии (`offsetHeight`, `offsetWidth`, `getBoundingClientRect()`):\n`for (...) { el.style.width = ...; console.log(el.offsetWidth); }`\nБраузер вынужден принудительно выполнять синхронный Reflow на КАЖДОЙ итерации цикла!\n✅ Решение: сначала прочитайте все размеры в переменные, а затем примените стили пакетно.",
          "codeExample": {
            "language": "javascript",
            "code": "// ❌ Layout Thrashing (катастрофическое падение FPS):\n// elements.forEach(el => {\n//   const w = el.offsetWidth; // ЧТЕНИЕ (вызывает принудительный Reflow!)\n//   el.style.width = (w + 10) + 'px'; // ЗАПИСЬ\n// });\n\n// ✅ Пакетная оптимизация (Fast & Smooth):\nconst widths = elements.map((el) => el.offsetWidth); // 1. Чтение всех размеров разом\nelements.forEach((el, i) => {\n  el.style.width = widths[i] + 10 + 'px'; // 2. Пакетная запись стилей\n});",
            "title": "Устранение Layout Thrashing пакетным разделением чтения и записи",
            "explanation": "Разделение чтения и записи геометрии позволяет браузеру оптимизировать пересчет макета и выполнить Reflow один раз."
          }
        },
        {
          "title": "Рекомендуемые видеоуроки по работе с DOM",
          "content": "Для закрепления практических навыков работы с объектной моделью документа (DOM), методами поиска, изменения атрибутов, динамического создания элементов и обработки событий рекомендуем изучить видеоматериал:\n\n- **[Манипуляция с DOM в JavaScript: поиск, создание и изменение элементов (YouTube)](https://youtu.be/5fb2aPlgoys?si=EA3j9IyuJIgx83l4)** — наглядный видеоурок с разбором структуры DOM-дерева, методов querySelector/querySelectorAll, манипуляции классами (classList), создания узлов и обновления интерфейса."
        }
      ],
      "seniorTips": [
        "Для массовой вставки элементов ВСЕГДА используйте `DocumentFragment` или массив строк с `insertAdjacentHTML`. Никогда не делайте `container.innerHTML += ...` в цикле.",
        "Используйте метод `element.closest('.selector')` для поиска родительских карточек и интерактивных контейнеров при обработке кликов.",
        "Избегайте Layout Thrashing: сгруппируйте все операции чтения свойств геометрии (`getBoundingClientRect`, `offsetHeight`) до операций записи стилей.",
        "При клонировании `<template>` всегда передавайте аргумент `cloneNode(true)` для глубокого копирования всего дерева потомков шаблона."
      ],
      "commonMistakes": [
        {
          "bad": "// innerHTML += в цикле уничтожает DOM\nusers.forEach(u => {\n  container.innerHTML += `<div class='card'>${u.name}</div>`;\n});",
          "good": "const frag = document.createDocumentFragment();\nusers.forEach(u => {\n  const d = document.createElement('div');\n  d.textContent = u.name;\n  frag.append(d);\n});\ncontainer.append(frag);",
          "reason": "innerHTML += пересоздает все DOM-узлы родителя на каждой итерации, сбрасывая введенные данные в формах и подвешивая браузер."
        },
        {
          "bad": "// Прямая модификация инлайн-стилей\nel.style.color = 'red';\nel.style.backgroundColor = '#000';",
          "good": "el.classList.add('is-error');",
          "reason": "Инлайн-стили имеют высокий приоритет специфичности, ломают CSS-каскад и загромождают разметку. Управляйте состояниями через classList."
        },
        {
          "bad": "const list = document.querySelectorAll('.item');\nlist.map(el => el.textContent); // ❌ Ошибка: list.map is not a function",
          "good": "const list = document.querySelectorAll('.item');\nconst texts = [...list].map(el => el.textContent); // ✅ Преобразовано в Array",
          "reason": "querySelectorAll возвращает NodeList, который не является массивом и не имеет методов map, filter, reduce."
        }
      ],
      "keyTakeaways": [
        "`querySelector` находит 1 узел, `querySelectorAll` возвращает статический `NodeList`, а `closest()` находит предка вверх по дереву.",
        "`append()`, `prepend()`, `before()`, `after()` поддерживают вставку нескольких узлов и строк одновременно.",
        "`DocumentFragment` и `<template>` позволяют рендерить тысячи элементов за 1 Reflow без лагов.",
        "`Reflow` пересчитывает геометрию, `Repaint` перерисовывает цвета, `Composite` плавно анимирует `transform/opacity` на GPU.",
        "Разделение операций чтения геометрии и записи стилей предотвращает Layout Thrashing."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"dom-app\">\n  <h3>Интерактивный список задач</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px;\">\n    <input id=\"todo-input\" placeholder=\"Новая задача...\" style=\"flex:1; padding:6px; background:#03060a; color:#2dff8a; border:1px solid #30363d; font-family:monospace;\" />\n    <button id=\"add-btn\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">Добавить</button>\n  </div>\n  <ul id=\"todo-list\" style=\"list-style:none; padding:0; margin:0;\"></ul>\n</div>",
      "initialCss": "#dom-app {\n  font-family: monospace;\n  color: #e6edf3;\n  padding: 16px;\n  background: #0d1117;\n  border-radius: 8px;\n}\n.todo-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 4px;\n  margin-bottom: 6px;\n}\n.del-btn {\n  background: #f85149;\n  color: white;\n  border: none;\n  padding: 2px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n}",
      "initialJs": "const input = document.getElementById('todo-input');\nconst addBtn = document.getElementById('add-btn');\nconst list = document.getElementById('todo-list');\n\nfunction addTodo(text) {\n  if (!text.trim()) return;\n  const li = document.createElement('li');\n  li.className = 'todo-row';\n  \n  const span = document.createElement('span');\n  span.textContent = text;\n  \n  const btn = document.createElement('button');\n  btn.className = 'del-btn';\n  btn.textContent = '✕';\n  btn.onclick = () => li.remove();\n  \n  li.append(span, btn);\n  list.prepend(li);\n  input.value = '';\n}\n\naddBtn.onclick = () => addTodo(input.value);\ninput.onkeydown = (e) => { if (e.key === 'Enter') addTodo(input.value); };",
      "instructions": "Практика с DOM:\n1. Добавьте несколько задач и удалите одну из них кнопкой ✕\n2. Перепишите добавление с использованием DocumentFragment для пакетной вставки 5 задач сразу\n3. Добавьте переключение класса .completed по клику на текст задачи"
    },
    "task": {
      "title": "Разработка высокопроизводительного менеджера карточек на DocumentFragment и template",
      "scenario": "Вам необходимо разработать модуль рендеринга каталога товаров: модуль должен принимать массив данных, использовать тег <template id='product-tpl'>, собирать элементы в DocumentFragment, поддерживать делегирование событий клика через closest() и безопасно экранировать данные через textContent.",
      "criteria": [
        "Функция renderProducts(items, container) использует DocumentFragment для единой вставки в DOM",
        "Клонирование шаблона выполняется через template.content.cloneNode(true)",
        "Текстовые поля заполняются безопасно через textContent (защита от XSS)",
        "Идентификаторы товаров сохраняются в dataset.productId",
        "Обработка кнопок 'Купить' и 'Удалить' реализована через единый слушатель с closest()"
      ],
      "starterCode": {
        "html": "<template id=\"product-tpl\">\n  <div class=\"item-card\">\n    <h4 class=\"item-title\"></h4>\n    <span class=\"item-price\"></span>\n    <button class=\"btn-buy\">Купить</button>\n    <button class=\"btn-del\">✕</button>\n  </div>\n</template>\n<div id=\"catalog-container\"></div>",
        "js": "// Реализуйте функцию рендеринга\nfunction renderProducts(items, container) {\n  // Ваш код\n}"
      },
      "hints": [
        "Используйте const frag = document.createDocumentFragment();",
        "Клонируйте: const clone = template.content.cloneNode(true);",
        "В обработчике клика: const buyBtn = e.target.closest('.btn-buy');"
      ],
      "solution": {
        "js": "function renderProducts(items = [], container) {\n  if (!container) return;\n  const template = document.getElementById('product-tpl');\n  const fragment = document.createDocumentFragment();\n\n  items.forEach((item) => {\n    const node = template.content.cloneNode(true);\n    const card = node.querySelector('.item-card');\n    card.dataset.productId = item.id;\n    \n    node.querySelector('.item-title').textContent = item.title;\n    node.querySelector('.item-price').textContent = `${item.price} ₽`;\n    \n    fragment.append(node);\n  });\n\n  container.innerHTML = ''; // Очистка\n  container.append(fragment); // 1 Reflow!\n}\n\n// Делегирование событий на контейнере\ndocument.getElementById('catalog-container').addEventListener('click', (e) => {\n  const card = e.target.closest('.item-card');\n  if (!card) return;\n  const id = card.dataset.productId;\n\n  if (e.target.closest('.btn-buy')) {\n    console.log(`Товар ${id} добавлен в корзину`);\n  } else if (e.target.closest('.btn-del')) {\n    card.remove();\n  }\n});",
        "explanation": "Модуль рендерит карточки через DocumentFragment за 1 пересчет макета, использует template с глубоким клонированием, защищен от XSS через textContent и управляет кликами через делегирование с closest()."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js7-q1",
          "question": "Тысяча элементов вставляется в цикле вызовом `container.appendChild(el)`. Что изменит перенос сборки в `DocumentFragment`?",
          "options": [
            "Вставка станет асинхронной и перестанет блокировать основной поток браузера",
            "Пересчёт раскладки произойдёт один раз вместо тысячи: фрагмент живёт вне документа",
            "Элементы получат уникальные идентификаторы и перестанут конфликтовать между собой",
            "Браузер закеширует готовую разметку и переиспользует её при следующих вставках"
          ],
          "correctIndex": 1,
          "explanation": "Каждая вставка в живой документ потенциально запускает пересчёт геометрии, и на тысяче итераций браузер ощутимо подвисает. Фрагмент не является частью документа, поэтому наполнение его ничего не пересчитывает, а при вставке фрагмента в контейнер переносятся сразу все его дети — раскладка считается один раз. Работа при этом остаётся синхронной."
        },
        {
          "id": "js7-q2",
          "question": "Зачем в этом обработчике используется `closest`, а не проверка `e.target.classList.contains('card')`?",
          "codeSnippet": "list.addEventListener('click', e => {\n  const card = e.target.closest('.card');\n  if (!card) return;\n  open(card.dataset.id);\n});",
          "options": [
            "Свойство `classList` недоступно у элементов, полученных через `target` события",
            "Клик может прийти на вложенный элемент внутри карточки, и такая проверка не сработает",
            "Метод работает быстрее, поскольку останавливается на первом найденном совпадении",
            "Без него обработчик не получит доступ к набору пользовательских данных элемента"
          ],
          "correctIndex": 1,
          "explanation": "Источником события становится самый глубокий элемент под курсором: заголовок, картинка или кнопка внутри карточки. Прямая проверка класса у него провалится, хотя клик по смыслу пришёлся на карточку. Поиск ближайшего предка поднимается вверх по дереву, начиная с самого элемента, и возвращает карточку либо `null`, если кликнули мимо, — отсюда и ранний выход."
        },
        {
          "id": "js7-q3",
          "question": "Чем опасна конструкция `container.innerHTML += '<li>...</li>'` в цикле?",
          "options": [
            "Браузер пересоздаёт всё содержимое заново, теряя обработчики и введённые данные",
            "Строка обрезается при превышении лимита в 64 килобайта на одно свойство",
            "Новая разметка вставляется перед существующей и нарушает исходный порядок",
            "Свойство доступно только для чтения, поэтому операция молча ничего не делает"
          ],
          "correctIndex": 0,
          "explanation": "Такая запись означает «прочитать всю разметку строкой, дописать кусок и разобрать заново». Все прежние узлы уничтожаются и создаются заново на каждой итерации: навешенные обработчики отваливаются, введённый в поля текст пропадает, состояние прокрутки сбрасывается, а время работы растёт квадратично. Правильные варианты — собрать разметку в одну строку и вставить через `insertAdjacentHTML` либо использовать фрагмент."
        },
        {
          "id": "js7-q4",
          "question": "Чем `<template>` отличается от блока разметки, скрытого правилом `display: none`?",
          "options": [
            "Содержимое разбирается, но остаётся инертным: картинки не грузятся, скрипты не выполняются",
            "Содержимое вообще не разбирается и хранится браузером как обычная текстовая строка",
            "Содержимое доступно только для чтения и не поддаётся клонированию через методы DOM",
            "Содержимое автоматически повторяется для каждого элемента переданного массива данных"
          ],
          "correctIndex": 0,
          "explanation": "Скрытый стилями блок — полноценная часть документа: его картинки скачиваются, видео предзагружается, а элементы попадают в выборки по селекторам. Содержимое шаблона разобрано в отдельный документ-фрагмент, доступный через свойство `content`, и до клонирования никакой активности не проявляет. Клонируют его глубоко, передавая `true`, иначе скопируется пустая оболочка."
        },
        {
          "id": "js7-q5",
          "question": "Почему этот цикл тормозит на большом списке и как его переписать?",
          "codeSnippet": "items.forEach(el => {\n  const h = el.offsetHeight;\n  el.style.height = h * 2 + 'px';\n});",
          "options": [
            "Обращение к стилям создаёт новый объект на каждой итерации и грузит сборщик мусора",
            "Чтение геометрии после записи заставляет пересчитывать раскладку на каждом шаге",
            "Перебор массива не позволяет браузеру распараллелить обработку элементов списка",
            "Единицы измерения приходится склеивать строкой, что заметно замедляет присваивание"
          ],
          "correctIndex": 1,
          "explanation": "Браузер откладывает пересчёт раскладки, пока это возможно, но запрос геометрии требует актуальных данных. Записав высоту на первой итерации, вы делаете раскладку устаревшей, и следующее чтение вынуждает пересчитать её немедленно — и так на каждом элементе. Лечится разделением фаз: сначала одним проходом собрать все высоты в массив, затем вторым проходом их записать."
        }
      ]
    }
  },
  {
    "id": "javascript-8",
    "moduleId": "javascript",
    "level": 8,
    "title": "События в браузере (Events)",
    "subtitle": "3 фазы событий (Capturing/Target/Bubbling), Делегирование, preventDefault и AbortController",
    "description": "Освойте событийную модель браузера: фазы погружения (Capturing) и всплытия (Bubbling), разницу e.target vs e.currentTarget, паттерн делегирования событий (Event Delegation), управление поведением preventDefault / stopPropagation, опции passive и отписку через AbortController.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "events",
      "bubbling",
      "capturing",
      "delegation",
      "preventDefault",
      "stopPropagation",
      "abortcontroller",
      "passive"
    ],
    "theory": {
      "overview": "Событийная модель (Event-Driven Architecture) — основа интерактивности браузера. Любое действие пользователя (клик мыши, ввод текста, скролл, отправка формы, свайп на тачскрине) порождает объект события `Event`, который путешествует по дереву DOM.\n\nВ этом уроке мы разберём 3 фазы распространения события, освоим паттерн делегирования событий (Event Delegation), научимся тонко управлять поведением через `preventDefault()` и `stopPropagation()`, оптимизировать мобильный скролл с помощью опции `{ passive: true }` и отписываться от сотен слушателей одной строкой через `AbortController`.",
      "sections": [
        {
          "title": "Механизм событий и 3 фазы распространения (Event Propagation)",
          "content": "Когда пользователь кликает по кнопке внутри сложного документа, событие проходит три последовательные фазы:\n\n1. **Фаза погружения (Capturing Phase)**:\nСобытие спускается от корня `window` вниз через `document`, `<html>`, `<body>` к предкам целевого элемента.\n- По умолчанию `addEventListener` игнорирует эту фазу. Чтобы поймать событие на спуске, передают флаг: `el.addEventListener('click', fn, { capture: true })`.\n\n2. **Фаза цели (Target Phase)**:\nСобытие достигает элемента, на котором произошел клик (`e.target`).\n\n3. **Фаза всплытия (Bubbling Phase — стандартный режим)**:\nСобытие «всплывает» от целевого элемента обратно вверх к `window`, последовательно вызывая обработчики на всех родительских узлах.\n\nРазница между `e.target` и `e.currentTarget`:\n- `e.target` — реальный самый глубокий элемент, по которому кликнули (например, иконка `<svg>` внутри кнопки).\n- `e.currentTarget` (или `this`) — элемент, к которому ПРИКРЕПЛЕН текущий обработчик `addEventListener` (например, родительский контейнер).",
          "image": {
            "src": "/images/lessons/js-browser-events.svg",
            "alt": "Событийная модель браузера: 3 фазы, делегирование и AbortController",
            "caption": "Событие погружается сверху вниз (Capturing), достигает цели (Target) и всплывает наверх (Bubbling). Делегирование использует всплытие"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// Демонстрация разницы target и currentTarget\nconst list = document.querySelector('.card-list');\n\nlist.addEventListener('click', function (e) {\n  console.log('e.target (по чему реально кликнули):', e.target);\n  console.log('e.currentTarget (где висит слушатель):', e.currentTarget); // === list\n  \n  // Определение нажатой кнопки через closest\n  const btn = e.target.closest('.btn-action');\n  if (btn) {\n    console.log('Клик по кнопке:', btn.dataset.action);\n  }\n});",
            "title": "Разница e.target и e.currentTarget при всплытии событий",
            "explanation": "e.target указывает на конкретный дочерний узел (текст/иконку), а e.currentTarget указывает на родительский list, где зарегистрирован обработчик."
          }
        },
        {
          "title": "Паттерн Делегирования событий (Event Delegation)",
          "content": "Делегирование событий — один из важнейших паттернов веб-разработки:\n\nПроблема:\nЕсли у вас есть таблица или каталог с 1 000 товаров, навешивание слушателя `card.addEventListener` на каждую карточку создаст 1 000 функций-замыканий в памяти кучи (Heap) и приведет к утечкам памяти при удалении/добавлении товаров.\n\nРешение (Делегирование):\nМы вешаем ВСЕГО ОДИН обработчик на общий родительский контейнер (`#catalog-grid`) и используем всплытие событий (Bubbling):\n1. Пользователь кликает по кнопке внутри карточки.\n2. Событие всплывает до контейнера каталога.\n3. В обработчике мы проверяем источник клика через `const card = e.target.closest('.product-card');`.\n\nОгромный бонус делегирования: новые товары, динамически добавленные через API или WebSocket, СРАЗУ становятся кликабельными без повторного вызова `addEventListener`!",
          "codeExample": {
            "language": "javascript",
            "code": "const table = document.querySelector('#users-table');\n\n// 1 слушатель на всю таблицу любого размера\ntable.addEventListener('click', (e) => {\n  // 1. Клик по кнопке редактирования\n  const editBtn = e.target.closest('.btn-edit');\n  if (editBtn) {\n    const row = editBtn.closest('tr');\n    openEditModal(row.dataset.userId);\n    return;\n  }\n\n  // 2. Клик по кнопке удаления\n  const delBtn = e.target.closest('.btn-delete');\n  if (delBtn) {\n    const row = delBtn.closest('tr');\n    row.remove();\n  }\n});",
            "title": "Делегирование событий в таблице через closest()",
            "explanation": "Один слушатель на таблице перехватывает клики по кнопкам редактирования и удаления в любых строках, экономя память."
          }
        },
        {
          "title": "Управление поведением: preventDefault vs stopPropagation",
          "content": "Управление стандартным и каскадным поведением событий:\n\n1. `e.preventDefault()`:\n- Отменяет СТАНДАРТНОЕ ДЕЙСТВИЕ браузера по умолчанию (отправку формы `<form>` с перезагрузкой страницы, переход по ссылке `<a>`, открытие контекстного меню по правому клику).\n- При этом всплытие события ПРОДОЛЖАЕТСЯ штатно!\n\n2. `e.stopPropagation()`:\n- Останавливает дальнейшее всплытие события вверх по DOM-дереву (родительские обработчики не сработают).\n- ⚠️ Золотое правило Senior: НЕ злоупотребляйте `stopPropagation()` без крайней необходимости! Это ломает глобальные клик-аутсайды (закрытие модалок/дропдаунов по клику вне) и сторонние системы аналитики (Яндекс Метрика, Google Analytics).\n\n3. `e.stopImmediatePropagation()`:\n- Не только останавливает всплытие вверх, но и БЛОКИРУЕТ выполнение других обработчиков этого же события, висящих на ТЕКУЩЕМ элементе.",
          "codeExample": {
            "language": "javascript",
            "code": "const form = document.querySelector('#auth-form');\n\nform.addEventListener('submit', (e) => {\n  // Отменяем перезагрузку страницы браузером\n  e.preventDefault();\n  \n  const formData = new FormData(form);\n  const credentials = Object.fromEntries(formData);\n  \n  // Отправляем данные асинхронно через AJAX/Fetch\n  sendLoginRequest(credentials);\n});",
            "title": "Отмена стандартной отправки формы через e.preventDefault()",
            "explanation": "preventDefault() блокирует перезагрузку страницы браузером, позволяя отправить форму в фоне через Fetch API."
          }
        },
        {
          "title": "Опции addEventListener: passive, once и AbortController",
          "content": "Третий аргумент `addEventListener(type, fn, options)` принимает объект мощных конфигураций:\n\n1. `{ once: true }`:\nОбработчик автоматически удалится после первого же срабатывания (идеально для анимаций завершения `animationend`, разовых подсказок).\n\n2. `{ passive: true }` (Критично для Mobile Performance):\n- Сообщает браузеру, что обработчик НИКОГДА не вызовет `e.preventDefault()`.\n- Браузер запускает прокрутку страницы параллельно в отдельном потоке Compositor БЕЗ ожидания выполнения JS-кода.\n- Гарантирует идеальные 60/120 FPS при скролле (`scroll`, `touchmove`, `wheel`).\n\n3. Массовая отписка через `AbortController` (Стандарт ES2022+):\nВместо ручного сохранения ссылок на функции и вызовов `removeEventListener`, вы передаете сигнал `signal: controller.signal`. Вызов `controller.abort()` мгновенно отписывает все слушатели разом!",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Использование passive: true для идеального скролла\nwindow.addEventListener('touchmove', handleTouch, { passive: true });\n\n// 2. Массовое управление событиями через AbortController в SPA:\nclass ModalWidget {\n  constructor() {\n    this.abortController = new AbortController();\n  }\n\n  mount() {\n    const { signal } = this.abortController;\n    \n    window.addEventListener('keydown', this.handleKey, { signal });\n    window.addEventListener('resize', this.handleResize, { signal });\n    document.addEventListener('click', this.handleClickOutside, { signal });\n  }\n\n  destroy() {\n    // Мгновенно удаляет ВСЕ 3 слушателя одной командой!\n    this.abortController.abort();\n  }\n}",
            "title": "Плавный скролл passive и массовая отписка через AbortController",
            "explanation": "controller.abort() предотвращает утечки памяти в SPA-приложениях, отписывая все слушатели при размонтировании виджета."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте делегирование событий через `e.target.closest('.item')` для списков, таблиц и галерей вместо циклов `addEventListener`.",
        "Для обработчиков скролла `wheel` и тача `touchmove` ВСЕГДА передавайте `{ passive: true }` — это устраняет задержки прокрутки на смартфонах.",
        "Используйте `AbortController` для массовой отписки от событий при размонтировании компонентов в SPA (`{ signal: controller.signal }`).",
        "Различайте `e.target` (источник клика) и `e.currentTarget` (элемент со слушателем события)."
      ],
      "commonMistakes": [
        {
          "bad": "// Навешивание слушателей в цикле без удаления\nitems.forEach(item => {\n  item.addEventListener('click', () => { ... });\n});",
          "good": "// 1 слушатель на контейнере (делегирование)\ncontainer.addEventListener('click', (e) => {\n  const item = e.target.closest('.item');\n  if (item) { ... }\n});",
          "reason": "Циклы addEventListener создают сотни дублирующихся замыканий в памяти и ломаются при динамическом добавлении новых элементов."
        },
        {
          "bad": "// Вызов stopPropagation без крайней необходимости\nbutton.addEventListener('click', (e) => { e.stopPropagation(); });",
          "good": "button.addEventListener('click', (e) => { e.preventDefault(); });",
          "reason": "stopPropagation ломает логику закрытия дропдаунов по клику вне (Click Outside) и блокирует работу систем веб-аналитики."
        },
        {
          "bad": "// Забыли preventDefault в submit формы\nform.onsubmit = () => { doLogin(); };",
          "good": "form.addEventListener('submit', (e) => { e.preventDefault(); doLogin(); });",
          "reason": "Без e.preventDefault() браузер перезагрузит страницу, сбросив состояние JavaScript и прервав асинхронный сетевой запрос."
        }
      ],
      "keyTakeaways": [
        "Событие проходит 3 фазы: Capturing (погружение) -> Target (цель) -> Bubbling (всплытие).",
        "Делегирование событий через `e.target.closest()` экономит память и поддерживает динамический DOM.",
        "`e.preventDefault()` отменяет действие браузера, а `e.stopPropagation()` останавливает всплытие.",
        "Опция `{ passive: true }` обеспечивает плавную прокрутку на смартфонах без блокировки потока.",
        "`AbortController` позволяет отписаться от десятков слушателей одной командой `abort()`."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"event-app\">\n  <h3>Интерактивное Делегирование и AbortController</h3>\n  <div style=\"display:flex; gap:8px; margin-bottom:12px;\">\n    <button id=\"add-item-btn\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">+ Добавить карточку</button>\n    <button id=\"abort-btn\" style=\"background:#f85149; color:#fff; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">Отписать слушатели (Abort)</button>\n  </div>\n  <div id=\"items-grid\" style=\"display:flex; flex-direction:column; gap:6px;\">\n    <div class=\"item-box\" data-id=\"1\">Карточка #1 <button class=\"del-btn\">✕</button></div>\n  </div>\n  <div id=\"log-box\" style=\"margin-top:12px; padding:8px; background:#161b22; border-radius:4px; font-size:12px;\"></div>\n</div>",
      "initialCss": "#event-app {\n  font-family: monospace;\n  color: #e6edf3;\n  padding: 16px;\n  background: #0d1117;\n  border-radius: 8px;\n}\n.item-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 4px;\n}\n.del-btn {\n  background: #ffb02e;\n  color: #0a0e13;\n  border: none;\n  padding: 2px 8px;\n  cursor: pointer;\n  border-radius: 2px;\n}",
      "initialJs": "const grid = document.getElementById('items-grid');\nconst logEl = document.getElementById('log-box');\nconst controller = new AbortController();\n\nlet count = 1;\n\n// Делегирование со связкой AbortController\ngrid.addEventListener('click', (e) => {\n  const del = e.target.closest('.del-btn');\n  if (del) {\n    const card = del.closest('.item-box');\n    logEl.textContent = `Удалена карточка ID: ${card.dataset.id}`;\n    card.remove();\n  }\n}, { signal: controller.signal });\n\ndocument.getElementById('add-item-btn').onclick = () => {\n  count++;\n  grid.insertAdjacentHTML('beforeend', `<div class=\"item-box\" data-id=\"${count}\">Карточка #${count} <button class=\"del-btn\">✕</button></div>`);\n};\n\ndocument.getElementById('abort-btn').onclick = () => {\n  controller.abort();\n  logEl.textContent = 'Слушатели удалены через AbortController! Кнопки больше не реагируют.';\n};",
      "instructions": "Практика с событиями:\n1. Добавьте новые карточки и удалите их — обратите внимание, что новые элементы сразу работают благодаря делегированию\n2. Нажмите кнопку 'Отписать слушатели (Abort)' и убедитесь в остановке обработки\n3. Изучите консоль и добавьте проверку e.target vs e.currentTarget"
    },
    "task": {
      "title": "Разработка модульной системы контекстного меню с делегированием и AbortController",
      "scenario": "Вам необходимо разработать модуль выпадающего меню / контекстного меню (Dropdown Menu): модуль должен открываться по клику на кнопки через делегирование, закрываться по клику вне (Click Outside) или клавише Escape, отменять стандартное контекстное меню preventDefault() и поддерживать полную очистку слушателей через AbortController.",
      "criteria": [
        "Обработка открытия меню реализована через делегирование событий с closest()",
        "Реализовано закрытие меню при клике вне элемента (Click Outside)",
        "Реализовано закрытие по нажатию клавиши Escape (keydown)",
        "Стандартное действие контекстного меню отменяется через e.preventDefault()",
        "Класс MenuManager использует AbortController для полного удаления всех слушателей в методе destroy()"
      ],
      "starterCode": {
        "html": "<div id=\"menu-container\">\n  <button class=\"menu-trigger\" data-menu-id=\"m1\">Действия ▾</button>\n  <div id=\"m1\" class=\"dropdown-menu\" hidden>\n    <button class=\"menu-item\" data-action=\"copy\">Копировать</button>\n    <button class=\"menu-item\" data-action=\"delete\">Удалить</button>\n  </div>\n</div>",
        "js": "// Реализуйте класс MenuManager\nclass MenuManager {\n  constructor(container) {\n    // Ваш код\n  }\n}"
      },
      "hints": [
        "Создайте this.controller = new AbortController();",
        "Передавайте { signal: this.controller.signal } во все addEventListener",
        "Для закрытия вне: if (!e.target.closest('.dropdown-menu') && !e.target.closest('.menu-trigger'))"
      ],
      "solution": {
        "js": "class MenuManager {\n  constructor(container) {\n    this.container = container;\n    this.activeMenu = null;\n    this.controller = new AbortController();\n    this.init();\n  }\n\n  init() {\n    const { signal } = this.controller;\n\n    // 1. Делегирование кликов открытия и действий меню\n    this.container.addEventListener('click', (e) => {\n      const trigger = e.target.closest('.menu-trigger');\n      if (trigger) {\n        const menuId = trigger.dataset.menuId;\n        this.toggleMenu(document.getElementById(menuId));\n        return;\n      }\n\n      const item = e.target.closest('.menu-item');\n      if (item) {\n        console.log(`Выполнено действие: ${item.dataset.action}`);\n        this.closeAll();\n      }\n    }, { signal });\n\n    // 2. Click Outside закрытие\n    document.addEventListener('click', (e) => {\n      if (!e.target.closest('.menu-trigger') && !e.target.closest('.dropdown-menu')) {\n        this.closeAll();\n      }\n    }, { signal });\n\n    // 3. Закрытие по Escape\n    window.addEventListener('keydown', (e) => {\n      if (e.key === 'Escape') {\n        this.closeAll();\n      }\n    }, { signal });\n  }\n\n  toggleMenu(menuEl) {\n    if (!menuEl) return;\n    const isOpened = !menuEl.hidden;\n    this.closeAll();\n    menuEl.hidden = isOpened;\n    this.activeMenu = isOpened ? null : menuEl;\n  }\n\n  closeAll() {\n    if (this.activeMenu) {\n      this.activeMenu.hidden = true;\n      this.activeMenu = null;\n    }\n  }\n\n  destroy() {\n    this.controller.abort(); // Мгновенное удаление всех слушателей\n    this.closeAll();\n  }\n}",
        "explanation": "MenuManager реализует промышленный паттерн: делегирование на контейнере, Click Outside, закрытие по Escape и гарантированную отписку через AbortController в методе destroy()."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js8-q1",
          "question": "Что выведется в консоль при клике по внутреннему элементу?",
          "codeSnippet": "outer.addEventListener('click', () => console.log('outer'), true);\ninner.addEventListener('click', () => console.log('inner'));\n// inner вложен в outer",
          "options": [
            "`inner`, затем `outer` — обработчики всегда срабатывают снизу вверх по дереву",
            "Только `outer` — фаза погружения прерывает дальнейшее распространение события",
            "Только `inner` — внешний обработчик сработает лишь при клике по самому контейнеру",
            "`outer`, затем `inner` — третий аргумент включил обработку на фазе погружения"
          ],
          "correctIndex": 3,
          "explanation": "Событие сначала спускается от корня документа к цели, затем поднимается обратно. Третий аргумент `true` переводит обработчик на фазу погружения, поэтому внешний элемент получает событие раньше цели. Внутренний обработчик зарегистрирован по умолчанию, то есть на всплытии, и срабатывает вторым. Порядок задаётся именно фазой, а не порядком регистрации."
        },
        {
          "id": "js8-q2",
          "question": "Список товаров подгружается уже после навешивания обработчиков, и новые карточки не реагируют на клик. Что поможет?",
          "options": [
            "Один обработчик на контейнере: события всплывают и от элементов, добавленных позже",
            "Повторно навешивать обработчики на все карточки после каждой подгрузки данных",
            "Передать опцию `once: true`, чтобы обработчик переустанавливал себя автоматически",
            "Перевести обработчики на фазу погружения, передав третьим аргументом `true`"
          ],
          "correctIndex": 0,
          "explanation": "Обработчик привязывается к конкретному узлу, и элементы, созданные позже, о нём ничего не знают. Делегирование снимает проблему: слушатель висит на постоянном контейнере, а событие всплывает к нему от любого потомка, когда бы тот ни появился. Бонусом вместо сотен замыканий в памяти остаётся одно. Переустановка обработчиков работает, но требует ручного снятия старых и легко приводит к утечкам."
        },
        {
          "id": "js8-q3",
          "question": "Форма должна отправляться через fetch, без перезагрузки страницы. Что вызвать в обработчике отправки?",
          "options": [
            "`e.stopPropagation()` — именно он отменяет действие браузера по умолчанию",
            "Оба метода вместе: по отдельности перезагрузку страницы остановить нельзя",
            "`e.preventDefault()` — он отменяет отправку, но не мешает событию всплывать",
            "`return false` — единственный надёжный способ в современном стандарте"
          ],
          "correctIndex": 2,
          "explanation": "Эти два метода решают разные задачи. Отмена действия по умолчанию запрещает браузеру выполнять встроенное поведение — отправку формы, переход по ссылке, открытие контекстного меню. Остановка распространения не трогает поведение браузера, зато обрывает путь события вверх и ломает делегирование и аналитику, поэтому без нужды её не применяют. `return false` работает только в старых обработчиках через атрибут."
        },
        {
          "id": "js8-q4",
          "question": "Что обещает браузеру опция `{ passive: true }` и что произойдёт, если обещание нарушить?",
          "options": [
            "Что обработчик не вызовет отмену действия; вызов проигнорируется с предупреждением",
            "Что обработчик выполнится в отдельном потоке; нарушение приведёт к ошибке выполнения",
            "Что обработчик сработает лишь один раз; повторные события будут отброшены",
            "Что обработчик не изменит документ; изменение приведёт к отмене прокрутки"
          ],
          "correctIndex": 0,
          "explanation": "Обычно браузер обязан дождаться завершения обработчика прокрутки или касания, ведь тот может отменить прокрутку, — отсюда заметные задержки на смартфонах. Опция снимает эту неопределённость: браузер прокручивает страницу сразу, параллельно с выполнением кода. Если внутри всё же вызвать отмену, она не сработает, а в консоли появится предупреждение."
        },
        {
          "id": "js8-q5",
          "question": "Что выведет обработчик при клике по элементу `<span>`, вложенному в `<li>` внутри `<ul id=\"list\">`?",
          "codeSnippet": "list.addEventListener('click', e => {\n  console.log(e.target.tagName, e.currentTarget.tagName);\n});",
          "options": [
            "`SPAN UL` — источник события и элемент, на котором висит слушатель",
            "`UL UL` — оба свойства указывают на элемент со слушателем события",
            "`SPAN SPAN` — оба свойства указывают на исходный источник события",
            "`SPAN LI` — второе свойство указывает на непосредственного родителя цели"
          ],
          "correctIndex": 0,
          "explanation": "Источник события — самый глубокий элемент под курсором, и он остаётся одним и тем же на всём пути распространения. Текущая цель меняется по мере движения события и всегда указывает на элемент, чей обработчик выполняется прямо сейчас. Именно на этой паре строится делегирование: слушатель висит на контейнере, а нужную карточку ищут от источника вверх."
        }
      ]
    }
  },
  {
    "id": "javascript-9",
    "moduleId": "javascript",
    "level": 9,
    "title": "Замыкания (Closures) и область видимости",
    "subtitle": "Scope Chain, Lexical Environment, var vs let vs const, TDZ, IIFE и приватность через замыкания",
    "description": "Освойте фундаментальный механизм JavaScript: замыкания (Closures) и цепочку областей видимости (Scope Chain). Разберём Lexical Environment, разницу var/let/const, Temporal Dead Zone (TDZ), паттерн модуля через IIFE и создание приватных переменных через замыкания.",
    "estimatedMinutes": 65,
    "difficulty": "advanced",
    "tags": [
      "closures",
      "scope",
      "lexical-environment",
      "var",
      "let",
      "const",
      "tdz",
      "iife",
      "module-pattern"
    ],
    "theory": {
      "overview": "Замыкание (Closure) — один из самых глубоких и мощных механизмов JavaScript. Без понимания замыканий невозможно освоить колбэки, промисы, обработчики событий, каррирование, фабричные функции, React хуки (`useState`, `useEffect`) и Redux.\n\nВ этом уроке мы разберём, как JavaScript определяет видимость переменных через Scope Chain и Lexical Environment, почему `var` утекает из циклов `for`, как `let`/`const` создают блочную область видимости с TDZ (Temporal Dead Zone) и как замыкания позволяют создавать приватные переменные и паттерн модуля.",
      "sections": [
        {
          "title": "Цепочка областей видимости (Scope Chain) и Lexical Environment",
          "content": "Область видимости (Scope) определяет, где в коде переменная доступна для чтения и записи:\n\n1. **Global Scope (Глобальная область)**:\nПеременные, объявленные вне любых функций и блоков. Доступны из любого места программы. Живут до закрытия вкладки.\n\n2. **Function Scope (Область функции)**:\nПеременные, объявленные внутри функции (через `var`, `let` или `const`), видны ТОЛЬКО внутри этой функции и её вложенных функций.\n\n3. **Block Scope (Блочная область)**:\nПеременные `let` и `const` ограничены ближайшими фигурными скобками `{ }` (`if`, `for`, `while`, блок `{ }`). Переменная `var` НЕ имеет блочной области!\n\nScope Chain (Цепочка областей видимости):\nКогда движок JavaScript встречает обращение к переменной, он ищет её сначала в текущей области видимости. Если не находит — поднимается на уровень вверх к родительской области. И так далее до Global Scope. Если переменная не найдена нигде — выбрасывается `ReferenceError`.",
          "image": {
            "src": "/images/lessons/js-closures-scope.svg",
            "alt": "Замыкания и Scope Chain: Global/Function/Block Scope, var vs let vs const",
            "caption": "Scope Chain ищет переменную снизу вверх по вложенности. Замыкание запоминает Lexical Environment родительской функции. let/const имеют TDZ"
          },
          "codeExample": {
            "language": "javascript",
            "code": "const globalVar = 'Глобальная';\n\nfunction outer() {\n  const outerVar = 'Внешняя функция';\n  \n  function inner() {\n    const innerVar = 'Внутренняя функция';\n    \n    // Scope Chain: inner → outer → global\n    console.log(innerVar);  // ✅ Найдена в текущей области\n    console.log(outerVar);  // ✅ Найдена на 1 уровень выше (outer)\n    console.log(globalVar); // ✅ Найдена на 2 уровня выше (global)\n  }\n  \n  inner();\n  // console.log(innerVar); // ❌ ReferenceError! innerVar не видна снаружи\n}\n\nouter();",
            "title": "Демонстрация Scope Chain: поиск переменной вверх по вложенности",
            "explanation": "inner() видит все переменные из своей области и из родительских областей. Но outer() не видит переменные inner() — поиск идёт ТОЛЬКО вверх."
          }
        },
        {
          "title": "var vs let vs const: Hoisting, TDZ и блочная область видимости",
          "content": "Три способа объявления переменных в JavaScript:\n\n1. `var` (устаревший, избегайте в новом коде!):\n- Область видимости: Function Scope (НЕ Block Scope!). `var` внутри `if` или `for` «утекает» наружу!\n- Hoisting (Подъём): Объявление `var` поднимается в начало функции и инициализируется значением `undefined`. Поэтому обращение к `var` до строки объявления НЕ вызывает ошибку, а возвращает `undefined`.\n\n2. `let` (современная переменная):\n- Область видимости: Block Scope `{ }`. `let` внутри `if` НЕ утекает наружу.\n- TDZ (Temporal Dead Zone): обращение к `let` ДО строки её объявления вызывает `ReferenceError` (а не тихий `undefined` как `var`).\n- Можно переприсваивать: `let x = 1; x = 2; // OK`.\n\n3. `const` (константа):\n- Идентичен `let` по Block Scope и TDZ.\n- Запрещает ПЕРЕПРИСВОЕНИЕ: `const x = 1; x = 2; // TypeError!`.\n- НО: объекты и массивы, объявленные через `const`, МУТИРУЮТСЯ! `const arr = [1]; arr.push(2); // OK!`. Замораживается только сама привязка имени, а не содержимое объекта.\n\nПравило Senior: по умолчанию ВСЕГДА используйте `const`. Используйте `let` ТОЛЬКО когда переменная будет переприсвоена (счетчик цикла, аккумулятор). Никогда не используйте `var`.",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. var утекает из блока (НЕ Block Scope!)\nif (true) {\n  var leaked = 'Я утёк из if!'; // ❌\n}\nconsole.log(leaked); // 'Я утёк из if!' — видна снаружи!\n\n// 2. let/const заперты в блоке (Block Scope!)\nif (true) {\n  let safe = 'Я внутри блока';\n  const alsoSafe = 'Тоже внутри';\n}\n// console.log(safe); // ❌ ReferenceError!\n\n// 3. Классическая ловушка var в цикле for:\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log('var:', i), 100);\n}\n// Выведет: var: 3, var: 3, var: 3 (одна общая переменная i!)\n\n// Решение: let создает ОТДЕЛЬНУЮ переменную для каждой итерации!\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log('let:', j), 100);\n}\n// Выведет: let: 0, let: 1, let: 2 ✅",
            "title": "Ловушка var в цикле for и её решение через let",
            "explanation": "var создает одну переменную i для всех итераций, а let создает отдельный экземпляр переменной j на каждой итерации цикла."
          }
        },
        {
          "title": "Замыкание (Closure): Функция запоминает Lexical Environment",
          "content": "Замыкание — это функция, которая «запоминает» переменные из Lexical Environment (лексического окружения) области видимости, в которой она была СОЗДАНА, даже после завершения вызова родительской функции.\n\nКак это работает:\n1. При вызове `createCounter()` движок JS создает Lexical Environment (LE) с переменной `count = 0`.\n2. Возвращенная стрелочная функция `() => ++count` хранит ссылку на этот LE.\n3. Когда `createCounter()` завершает выполнение, его LE НЕ удаляется сборщиком мусора (GC), потому что на него ссылается возвращенная функция.\n4. Каждый вызов `inc()` модифицирует `count` в сохранённом LE.\n\nПрактические применения замыканий:\n- **Приватные переменные**: эмуляция private-полей до появления `#privateField` в классах.\n- **Фабрики функций**: `createMultiplier(5)` -> `fn(x) => x * 5`.\n- **Каррирование**: `add(2)(3)` -> `5`.\n- **Мемоизация**: кэширование результатов дорогих вычислений.\n- **React хуки**: `useState` и `useEffect` работают через замыкания!",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Замыкание: приватный счетчик\nfunction createCounter(initial = 0) {\n  let count = initial; // Приватная переменная (не доступна снаружи!)\n\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount: () => count,\n    reset: () => { count = initial; }\n  };\n}\n\nconst counter = createCounter(10);\ncounter.increment(); // 11\ncounter.increment(); // 12\nconsole.log(counter.getCount()); // 12\n// console.log(counter.count); // undefined! (приватная переменная)\n\n// 2. Фабрика функций\nfunction createMultiplier(factor) {\n  return (value) => value * factor; // Замыкание над factor!\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\nconsole.log(double(5));  // 10\nconsole.log(triple(5));  // 15",
            "title": "Замыкание для приватных переменных и фабрика функций",
            "explanation": "Переменная count недоступна снаружи — она заперта в Lexical Environment функции createCounter. Каждый вызов createMultiplier создает независимое замыкание над factor."
          }
        },
        {
          "title": "IIFE, Модульный паттерн и утечки памяти через замыкания",
          "content": "Продвинутые применения и подводные камни замыканий:\n\n1. IIFE (Immediately Invoked Function Expression):\n`(function() { ... })();` — функция, которая создается и СРАЗУ вызывается.\nВ эпоху до модулей ES6 (`import/export`) IIFE были единственным способом изолировать переменные от глобальной области и избежать конфликтов имён между скриптами.\n\n2. Модульный паттерн (Module Pattern):\nIIFE, возвращающая объект с публичными методами, при этом приватные переменные скрыты в замыкании:\n`const module = (function() { let secret = '...'; return { getSecret: () => secret }; })();`\n\n3. Утечки памяти через замыкания:\nЕсли замыкание удерживает ссылку на большой массив данных, DOM-узел или тяжелый объект, сборщик мусора (Garbage Collector) не сможет освободить эту память!\nПравило: обнуляйте ссылки на тяжелые объекты после использования: `heavyData = null;`. При удалении DOM-узлов снимайте слушатели событий (или используйте `AbortController`).",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. IIFE: изоляция переменных от глобальной области\n(function() {\n  const SECRET_KEY = 'sk_abc123';\n  console.log('IIFE выполнена, SECRET_KEY изолирован');\n})();\n// console.log(SECRET_KEY); // ❌ ReferenceError!\n\n// 2. Модульный паттерн через IIFE\nconst AuthModule = (function() {\n  let token = null; // Приватная переменная\n\n  return {\n    login(credentials) {\n      token = `jwt_${Date.now()}`;\n      return true;\n    },\n    getToken() {\n      return token;\n    },\n    logout() {\n      token = null;\n    }\n  };\n})();\n\nAuthModule.login({ email: 'dev@intern.ru' });\nconsole.log(AuthModule.getToken()); // 'jwt_...'\nconsole.log(AuthModule.token);      // undefined (приватный!)",
            "title": "IIFE и Модульный паттерн для изоляции и приватности",
            "explanation": "IIFE создает изолированную область видимости. Модульный паттерн возвращает публичный API, скрывая token в замыкании."
          }
        }
      ],
      "seniorTips": [
        "По умолчанию ВСЕГДА используйте `const`. Используйте `let` ТОЛЬКО когда переменная будет переприсвоена. Никогда не используйте `var` в современном коде.",
        "Помните о ловушке `var` в циклах `for`: все итерации делят одну переменную. Используйте `let` для создания отдельной переменной на каждой итерации.",
        "Замыкания в обработчиках событий и таймерах могут вызывать утечки памяти, если удерживают ссылки на большие объекты или DOM-узлы. Обнуляйте ссылки и используйте AbortController.",
        "React хуки `useState` и `useEffect` работают через замыкания — понимание замыканий критически важно для отладки Stale Closure багов в React."
      ],
      "commonMistakes": [
        {
          "bad": "// Ловушка var в цикле: все колбэки ссылаются на одну переменную\nfor (var i = 0; i < 5; i++) {\n  setTimeout(() => console.log(i), 100); // 5, 5, 5, 5, 5\n}",
          "good": "for (let i = 0; i < 5; i++) {\n  setTimeout(() => console.log(i), 100); // 0, 1, 2, 3, 4\n}",
          "reason": "var создает одну переменную i в области видимости функции. К моменту срабатывания setTimeout цикл завершен и i === 5. let создает отдельный экземпляр i для каждой итерации."
        },
        {
          "bad": "// Попытка изменить привязку const\nconst status = 'active';\nstatus = 'inactive'; // ❌ TypeError!",
          "good": "let status = 'active';\nstatus = 'inactive'; // ✅ let разрешает переприсвоение\n\n// const с объектом — мутация разрешена!\nconst user = { name: 'Ivan' };\nuser.name = 'Oleg'; // ✅ Объект мутируется",
          "reason": "const запрещает переприсвоение привязки (=), но объекты и массивы в const можно свободно мутировать, т.к. ссылка на объект не меняется."
        },
        {
          "bad": "// Обращение к let/const до объявления (TDZ!)\nconsole.log(x); // ❌ ReferenceError! (Temporal Dead Zone)\nlet x = 42;",
          "good": "let x = 42;\nconsole.log(x); // 42 ✅ Объявлено до использования",
          "reason": "В отличие от var (undefined до объявления), let/const находятся в TDZ от начала блока до строки объявления. Обращение в TDZ немедленно выбрасывает ReferenceError."
        }
      ],
      "keyTakeaways": [
        "Scope Chain ищет переменную снизу вверх: Block → Function → Global.",
        "`var` имеет Function Scope и Hoisting (undefined), `let`/`const` имеют Block Scope и TDZ (ReferenceError).",
        "Замыкание — функция, запоминающая Lexical Environment родительской области даже после её завершения.",
        "Замыкания используются для приватных переменных, фабрик функций, каррирования и мемоизации.",
        "IIFE и Модульный паттерн изолируют переменные от глобальной области и скрывают приватные данные."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"closure-app\">\n  <h3>Замыкание: Приватный Счетчик</h3>\n  <div id=\"counter-display\" style=\"font-size:32px; font-weight:bold; color:#2dff8a; margin:12px 0;\">0</div>\n  <div style=\"display:flex; gap:8px;\">\n    <button id=\"inc-btn\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">+ Increment</button>\n    <button id=\"dec-btn\" style=\"background:#ffb02e; color:#0a0e13; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">- Decrement</button>\n    <button id=\"rst-btn\" style=\"background:#f85149; color:#fff; border:none; padding:8px 16px; font-weight:bold; cursor:pointer;\">Reset</button>\n  </div>\n  <pre id=\"closure-log\" style=\"margin-top:12px; color:#8b949e; font-size:11px;\"></pre>\n</div>",
      "initialCss": "#closure-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "function createCounter(start = 0) {\n  let count = start;\n  return {\n    inc: () => ++count,\n    dec: () => --count,\n    get: () => count,\n    reset: () => { count = start; return count; }\n  };\n}\n\nconst counter = createCounter(0);\nconst display = document.getElementById('counter-display');\nconst logEl = document.getElementById('closure-log');\n\nfunction update(action) {\n  display.textContent = counter.get();\n  logEl.textContent += `${action}: count = ${counter.get()}\\n`;\n}\n\ndocument.getElementById('inc-btn').onclick = () => { counter.inc(); update('inc'); };\ndocument.getElementById('dec-btn').onclick = () => { counter.dec(); update('dec'); };\ndocument.getElementById('rst-btn').onclick = () => { counter.reset(); update('reset'); };",
      "instructions": "Практика с замыканиями:\n1. Нажимайте кнопки и наблюдайте, как приватная переменная count изменяется через методы замыкания\n2. Попробуйте обратиться к counter.count в консоли — вы получите undefined (приватность!)\n3. Создайте второй независимый счетчик const c2 = createCounter(100); и убедитесь в независимости"
    },
    "task": {
      "title": "Разработка модуля авторизации с приватным токеном через замыкание",
      "scenario": "Вам необходимо разработать модуль управления авторизацией AuthModule через паттерн замыкания (Module Pattern): модуль должен хранить приватный JWT-токен и список прав доступа, предоставлять публичные методы login(), logout(), isAuthenticated(), getToken() и hasPermission(role), при этом прямой доступ к token и permissions должен быть невозможен извне.",
      "criteria": [
        "Переменные token и permissions приватны (недоступны через AuthModule.token)",
        "Метод login(credentials) устанавливает token и permissions",
        "Метод logout() обнуляет token и permissions",
        "Метод isAuthenticated() возвращает true/false",
        "Метод hasPermission(role) проверяет наличие роли в массиве permissions",
        "Реализован через IIFE или фабричную функцию"
      ],
      "starterCode": {
        "js": "// Реализуйте приватный AuthModule через замыкание\nconst AuthModule = (function() {\n  // Ваш код\n})();"
      },
      "hints": [
        "Объявите let token = null; и let permissions = []; внутри IIFE",
        "Верните объект с публичными методами: return { login, logout, isAuthenticated, ... }",
        "hasPermission: return permissions.includes(role);"
      ],
      "solution": {
        "js": "const AuthModule = (function() {\n  // Приватные переменные (скрыты в замыкании!)\n  let token = null;\n  let permissions = [];\n  let user = null;\n\n  return {\n    login(credentials) {\n      if (!credentials.email) throw new Error('Email обязателен');\n      token = `jwt_${Date.now()}_${Math.random().toString(36).slice(2)}`;\n      user = { email: credentials.email };\n      permissions = credentials.roles || ['viewer'];\n      return true;\n    },\n\n    logout() {\n      token = null;\n      permissions = [];\n      user = null;\n    },\n\n    isAuthenticated() {\n      return token !== null;\n    },\n\n    getToken() {\n      return token;\n    },\n\n    hasPermission(role) {\n      return permissions.includes(role);\n    },\n\n    getUser() {\n      return user ? { ...user } : null; // Возвращаем копию!\n    }\n  };\n})();\n\n// Тест\nAuthModule.login({ email: 'admin@intern.ru', roles: ['admin', 'editor'] });\nconsole.log(AuthModule.isAuthenticated());   // true\nconsole.log(AuthModule.hasPermission('admin')); // true\nconsole.log(AuthModule.token);               // undefined (приватно!)",
        "explanation": "IIFE создает замыкание, скрывающее token, permissions и user от внешнего кода. Публичный API предоставляет безопасные методы для работы с приватным состоянием."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js9-q1",
          "question": "Где хранится переменная `called` после того, как функция `once` завершила работу и вернула результат?",
          "codeSnippet": "function once(fn) {\n  let called = false;\n  return (...a) => {\n    if (called) return;\n    called = true;\n    return fn(...a);\n  };\n}",
          "options": [
            "В глобальной области: локальные переменные переносятся туда после возврата",
            "Нигде: сборщик мусора уничтожает её сразу после выхода из функции",
            "В лексическом окружении, ссылку на которое удерживает возвращённая функция",
            "В свойстве самой возвращённой функции, доступном снаружи как `result.called`"
          ],
          "correctIndex": 2,
          "explanation": "Вызов функции создаёт лексическое окружение с её локальными переменными. Обычно оно уничтожается после возврата, но здесь возвращённая функция продолжает на него ссылаться, поэтому сборщик мусора окружение не трогает — это и есть замыкание. Переменная остаётся живой и полностью недоступной снаружи: прочитать `called` через свойства функции невозможно."
        },
        {
          "id": "js9-q2",
          "question": "Как заставить цикл с `var` напечатать 0, 1, 2, не меняя объявление на `let`?",
          "codeSnippet": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i));\n}",
          "options": [
            "Обернуть тело цикла в немедленно вызываемую функцию, передав `i` её аргументом",
            "Добавить ожидание перед вызовом таймера, чтобы итерации шли строго по очереди",
            "Объявить `var i` ещё раз внутри тела цикла — так создастся отдельная переменная",
            "Вызвать таймер с нулевой задержкой: тогда колбэки выполнятся до конца цикла"
          ],
          "correctIndex": 0,
          "explanation": "Проблема в том, что все колбэки смотрят на одну переменную функциональной области видимости. Немедленно вызываемая функция создаёт на каждой итерации собственную область, а переданный аргумент становится копией текущего значения, которую и захватывает замыкание. Повторное объявление через `var` ничего не изменит: это по-прежнему та же переменная. Именно так писали до появления `let`, который решает задачу сам."
        },
        {
          "id": "js9-q3",
          "question": "Что произойдёт при выполнении этого блока с затенением переменной?",
          "codeSnippet": "let x = 'outer';\n{\n  console.log(x);\n  let x = 'inner';\n}",
          "options": [
            "Выведет `'outer'`: внутренняя переменная объявлена ниже и пока не перекрывает внешнюю",
            "Выбросит `ReferenceError`: внутренняя переменная затеняет внешнюю с начала блока",
            "Выведет `undefined`: объявление поднимается, а значение присваивается позже",
            "Выбросит `SyntaxError`: повторно объявлять имя в области видимости запрещено"
          ],
          "correctIndex": 1,
          "explanation": "Объявление внутри блока действует на весь блок целиком, начиная с открывающей скобки: внешняя переменная затеняется сразу. Но до строки объявления внутренняя находится во временной мёртвой зоне, и обращение к ней даёт ошибку. Получается контринтуитивно: внешнее значение уже недоступно, а внутреннее ещё не существует. С `var` такой код напечатал бы `undefined`, что не лучше."
        },
        {
          "id": "js9-q4",
          "question": "Почему замыкание может стать причиной утечки памяти?",
          "options": [
            "Каждое замыкание копирует все переменные родителя и тем самым удваивает расход памяти",
            "Замыкания не попадают в поле зрения сборщика мусора и живут до конца сессии",
            "Оно удерживает ссылку на лексическое окружение, а вместе с ним и на крупные объекты",
            "Замыкание создаёт циклическую ссылку на себя, которую движок не умеет разорвать"
          ],
          "correctIndex": 2,
          "explanation": "Пока жива функция, живо и захваченное ею окружение, а значит и всё, на что оно ссылается: массив на десятки тысяч записей, DOM-узел удалённого компонента, ответ сервера. Обработчик события, который забыли снять, легко удержит в памяти целый экран приложения. Отсюда практика снимать слушатели через `AbortController` при размонтировании и не захватывать лишнего в долгоживущих колбэках."
        },
        {
          "id": "js9-q5",
          "question": "Как извне получить доступ к массиву `items` в этом модуле?",
          "codeSnippet": "const store = (() => {\n  let items = [];\n  return {\n    add: v => items.push(v),\n    get size() { return items.length; }\n  };\n})();",
          "options": [
            "Через `store.items` — свойство существует, просто не перечисляется при обходе",
            "Через `Object.getOwnPropertyNames(store)` — этот приём раскрывает скрытые свойства",
            "Никак: массив живёт только в замыкании, наружу отдан ограниченный интерфейс",
            "Через прототип: обращение `Object.getPrototypeOf(store).items` вернёт исходную ссылку"
          ],
          "correctIndex": 2,
          "explanation": "Массив — обычная локальная переменная немедленно вызванной функции, а не свойство возвращённого объекта, поэтому никакой обход свойств или прототипов до неё не доберётся. Наружу выставлены только методы, которые сами решают, что можно делать с данными. Это классический модульный паттерн — способ получить настоящую приватность задолго до появления полей с решёткой."
        }
      ]
    }
  },
  {
    "id": "javascript-10",
    "moduleId": "javascript",
    "level": 10,
    "title": "Контекст выполнения (this), функции call/apply/bind и прототипы",
    "subtitle": "4 правила привязки this, стрелочные функции, call/apply/bind, Prototype Chain и Object.create()",
    "description": "Освойте контекст выполнения this и прототипное наследование в JavaScript: 4 правила привязки this (Default, Implicit, Explicit, new), лексический this в стрелочных функциях, методы call, apply, bind, скрытое свойство [[Prototype]], цепочку прототипов Prototype Chain и разницу с классами ES6.",
    "estimatedMinutes": 65,
    "difficulty": "advanced",
    "tags": [
      "this",
      "prototypes",
      "call",
      "apply",
      "bind",
      "prototype-chain",
      "classes",
      "oop"
    ],
    "theory": {
      "overview": "Ключевое слово `this` и прототипное наследование (Prototype-based Inheritance) — две фундаментальные опоры объектно-ориентированного JavaScript.\n\nВ отличие от большинства языков (Java, C++, C#), где `this` жестко привязан к экземпляру класса, в JavaScript значение `this` определяется динамически в МОМЕНТ ВЫЗОВА функции, а не в момент её объявления! В этом уроке мы разберём 4 правила вычисления `this`, научимся управлять контекстом через `call`, `apply` и `bind`, поймём, почему у стрелочных функций нет своего `this`, и разберём, как работает цепочка прототипов `[[Prototype]]` под капотом классов ES6.",
      "sections": [
        {
          "title": "4 Правила вычисления this в JavaScript",
          "content": "Значение `this` внутри функции определяется местом и способом её вызова (Call-Site):\n\n1. **Default Binding (Привязка по умолчанию)**:\nПростой вызов функции `showName()`.\n- В нестрогом режиме (Non-strict mode): `this === window` (в браузере) или `global` (в Node.js).\n- В строгом режиме (`'use strict'`): `this === undefined` (защита от случайной модификации глобального объекта!).\n\n2. **Implicit Binding (Неявная привязка)**:\nВызов функции как метода объекта: `user.getName()`.\n- `this` равен объекту, стоящему СЛЕВА ОТ ТОЧКИ в момент вызова (`this === user`).\n- ⚠️ Ловушка потери контекста (Losing this): если оторвать метод от объекта `const fn = user.getName; fn();`, `this` станет `undefined` (сработает Default Binding)!\n\n3. **Explicit Binding (Явная привязка)**:\nПринудительная передача контекста через методы `call`, `apply` или `bind`:\n`getName.call(admin, 'arg1')`.\n\n4. **new Binding (Конструктор)**:\nВызов функции с ключевым словом `new`: `const u = new User('Alex')`.\n- Движок создает новый пустой объект `{}`.\n- Привязывает его `[[Prototype]]` к `User.prototype`.\n- Устанавливает `this === новый объект`.\n- Возвращает этот объект.",
          "image": {
            "src": "/images/lessons/js-this-prototypes.svg",
            "alt": "Контекст this, call apply bind и Prototype Chain в JavaScript",
            "caption": "4 правила вычисления this: Default, Implicit, Explicit (call/apply/bind), new. Prototype Chain связывает объект с Object.prototype"
          },
          "codeExample": {
            "language": "javascript",
            "code": "'use strict';\n\n// 1. Default Binding\nfunction show() {\n  console.log('Default this:', this); // undefined\n}\nshow();\n\n// 2. Implicit Binding\nconst user = {\n  name: 'Александр',\n  greet() {\n    console.log(`Привет, я ${this.name}`);\n  }\n};\nuser.greet(); // 'Привет, я Александр' (this === user)\n\n// Ловушка потери контекста:\nconst detachedGreet = user.greet;\n// detachedGreet(); // ❌ TypeError: Cannot read properties of undefined (reading 'name')",
            "title": "Default и Implicit Binding и ловушка потери контекста",
            "explanation": "user.greet() привязывает this к user. Но detachedGreet() вызывается без объекта перед точкой, поэтому this становится undefined."
          }
        },
        {
          "title": "Стрелочные функции: Лексический this (Lexical this)",
          "content": "Стрелочные функции (`() => {}`) в ES6 принципиально отличаются от классических `function`:\n\n1. **У стрелочных функций НЕТ своего `this`!**\n- Они не имеют собственного контекста выполнения `this`.\n- Они берут `this` из ОХРУЖАЮЩЕЙ области видимости (Lexical Scope) в момент их СОЗДАНИЯ (точно так же, как обычные переменные в замыкании!).\n- Методы `call`, `apply` и `bind` БЕССИЛЬНЫ над стрелочными функциями — они игнорируют передаваемый контекст!\n\n2. У стрелочных функций также НЕТ:\n- Псевдомассива `arguments` (используйте `...args` rest-параметры).\n- Свойства `prototype` (стрелочную функцию нельзя вызвать с `new` — `TypeError: is not a constructor`).\n- Ключевого слова `super`.\n\n3. Идеальное применение стрелок: колбэки методов массивов (`map`, `filter`), таймеры `setTimeout` и слушатели событий внутри классов/объектов.",
          "codeExample": {
            "language": "javascript",
            "code": "const team = {\n  name: 'Frontend Core',\n  members: ['Иван', 'Мария'],\n  \n  // Классическая функция теряла this в setTimeout:\n  showMembers() {\n    // Стрелочная функция берет this из showMembers (this === team)!\n    this.members.forEach((member) => {\n      console.log(`${member} в команде ${this.name}`);\n    });\n  },\n  \n  showDelayed() {\n    setTimeout(() => {\n      console.log(`Команда с задержкой: ${this.name}`); // this === team ✅\n    }, 100);\n  }\n};\n\nteam.showMembers();\nteam.showDelayed();",
            "title": "Лексический this в стрелочных функциях внутри методов объекта",
            "explanation": "Стрелочная функция внутри forEach и setTimeout сохраняет this === team из внешнего метода showMembers."
          }
        },
        {
          "title": "Явная привязка: call, apply, bind и каррирование",
          "content": "Методы объекта `Function.prototype` для явного управления контекстом:\n\n1. **`fn.call(context, arg1, arg2, ...)`**:\nМгновенно вызывает функцию `fn`, устанавливая `this = context`. Аргументы передаются через запятую (списком).\n\n2. **`fn.apply(context, [arg1, arg2, ...])`**:\nМгновенно вызывает функцию `fn`, устанавливая `this = context`. Аргументы передаются в виде МАССИВА (или псевдомассива).\n\n3. **`fn.bind(context, arg1, arg2)`**:\nНЕ вызывает функцию сразу! Возвращает АБСОЛЮТНО НОВУЮ функцию с НАМЕРТВО привязанным `this = context` и возможностью частичного применения аргументов (Partial Application / Каррирование).\n- Новую привязанную функцию невозможно перепривязать другим `call` или `bind`!",
          "codeExample": {
            "language": "javascript",
            "code": "function printInfo(prefix, suffix) {\n  console.log(`${prefix} ${this.name} (${this.role}) ${suffix}`);\n}\n\nconst dev = { name: 'Алексей', role: 'Senior' };\nconst lead = { name: 'Елена', role: 'Team Lead' };\n\n// 1. call: передача аргументов списком\nprintInfo.call(dev, '👉', '✓');\n// 👉 Алексей (Senior) ✓\n\n// 2. apply: передача аргументов массивом\nprintInfo.apply(lead, ['⭐️', '✓']);\n// ⭐️ Елена (Team Lead) ✓\n\n// 3. bind: создание связанной функции\nconst printDev = printInfo.bind(dev, '📌');\nprintDev('Готов к релизу');\n// 📌 Алексей (Senior) Готов к релизу",
            "title": "Использование call, apply и bind для явной привязки контекста",
            "explanation": "call принимает аргументы списком, apply — массивом, а bind создает готовую функцию printDev с жестко зафиксированным dev в this."
          }
        },
        {
          "title": "Прототипы и цепочка наследования (Prototype Chain)",
          "content": "В JavaScript нет классического классового наследования — под капотом работает прототипное делегирование:\n\n1. Скрытое свойство `[[Prototype]]` (`__proto__`):\n- У КАЖДОГО объекта в JS есть скрытая ссылка на другой объект — его Прототип.\n- При обращении к `user.toString()`, если свойства `toString` нет в самом `user`, движок автоматически ищет его в прототипе `user.__proto__`. И так далее по цепочке до `Object.prototype`, чей прототип равен `null`.\n\n2. `Function.prototype` vs `__proto__`:\n- `Function.prototype` — это объект, который станет прототипом (`__proto__`) для всех экземпляров, созданных через `new Function()`.\n- Добавление методов в `User.prototype` экономит память: 10 000 пользователей делят ОДИН общий метод `login()` в памяти вместо создания 10 000 копий функции!\n\n3. `Object.create(proto)`:\nСоздает новый объект с явно заданным прототипом: `const admin = Object.create(userProto);`.\n\n4. Классы ES6 (`class User`):\nСинтаксический сахар над функциями-конструкторами и прототипами. Классы внутри работают ровно через ту же цепочку `Prototype Chain`!",
          "codeExample": {
            "language": "javascript",
            "code": "// Прототипное наследование в JavaScript\nfunction User(name, email) {\n  this.name = name;\n  this.email = email;\n}\n\n// Метод добавляется в прототип (1 экземпляр функции в памяти!)\nUser.prototype.sayHello = function () {\n  return `Привет, я ${this.name}`;\n};\n\nconst user1 = new User('Иван', 'ivan@dev.ru');\nconst user2 = new User('Мария', 'maria@dev.ru');\n\nconsole.log(user1.sayHello()); // 'Привет, я Иван'\nconsole.log(user1.sayHello === user2.sayHello); // true! (одна функция в памяти)\nconsole.log(user1.__proto__ === User.prototype); // true\nconsole.log(User.prototype.__proto__ === Object.prototype); // true\nconsole.log(Object.prototype.__proto__); // null (конец цепочки!)",
            "title": "Прототипное наследование через User.prototype и проверка цепочки",
            "explanation": "user1 и user2 делят один метод sayHello в User.prototype. Цепочка user1 → User.prototype → Object.prototype → null демонстрирует Prototype Chain."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Prototype, This, Наследование и Композиция",
          "content": "Для глубокого закрепления работы с контекстом, цепочкой прототипов и паттернами проектирования рекомендуем посмотреть практические уроки:\n\n- **[JavaScript Примеры. Prototype, This, Классы, Контекст, Наследование (YouTube)](https://youtu.be/cTlxzxsFbDQ?si=aXeMpb4ss4i1m75j)** — детальный 45-минутный разбор от Владилена Минина с наглядными примерами: как устроен `this`, привязка контекста (`call`, `apply`, `bind`), работа `prototype` и `__proto__`, реализация наследования и сравнение с классами ES6.\n- **[Композиция или Наследование в JavaScript? (YouTube)](https://youtu.be/v6AVfIupNB8?si=MAoLxZ5ED_F1g7dH)** — 18-минутный разбор фундаментального архитектурного выбора от Владилена Минина: почему в современном JS композиция функций/объектов часто предпочтительнее глубоких иерархий наследования."
        }
      ],
      "seniorTips": [
        "При передаче методов объекта в качестве колбэков (`setTimeout`, слушатели событий) ВСЕГДА оборачивайте их в стрелочную функцию `() => obj.method()` или используйте `obj.method.bind(obj)` для предотвращения потери `this`.",
        "Внутри стрелочных функций `this` берется из лексического окружения создания функции. Использовать `call/apply/bind` на стрелках бесполезно — они не имеют собственного `this`.",
        "Добавляйте общие методы в `Class.prototype`, а не создавайте их внутри конструктора `this.method = function` — это экономит мегабайты оперативной памяти при тысячах объектов.",
        "Для безопасной проверки наличия собственного свойства используйте `Object.hasOwn(obj, 'prop')` вместо устаревшего `obj.hasOwnProperty('prop')`."
      ],
      "commonMistakes": [
        {
          "bad": "// Потеря this при передаче метода в setTimeout\nconst timer = {\n  sec: 0,\n  start() {\n    setInterval(function() {\n      this.sec++; // ❌ this === window / undefined!\n    }, 1000);\n  }\n};",
          "good": "const timer = {\n  sec: 0,\n  start() {\n    setInterval(() => {\n      this.sec++; // ✅ Стрелочная функция сохраняет this === timer\n    }, 1000);\n  }\n};",
          "reason": "Обычная function() в setInterval вызывается в глобальном контексте. Стрелочная функция берет лексический this из метода start()."
        },
        {
          "bad": "// Стрелочная функция как метод объекта\nconst user = {\n  name: 'Alex',\n  getName: () => this.name // ❌ this === window!\n};",
          "good": "const user = {\n  name: 'Alex',\n  getName() { return this.name; } // ✅ Обычный метод\n};",
          "reason": "Объектные литералы { } НЕ создают область видимости! Стрелочная функция возьмет this из внешней глобальной области, где this.name === undefined."
        },
        {
          "bad": "// Создание методов внутри конструктора (утечка памяти)\nfunction User(name) {\n  this.name = name;\n  this.login = function() { ... }; // 1000 объектов = 1000 функций в памяти!\n}",
          "good": "function User(name) { this.name = name; }\nUser.prototype.login = function() { ... }; // 1 функция на всех в прототипе",
          "reason": "Методы в прототипе переиспользуются всеми экземплярами, экономя память кучи."
        }
      ],
      "keyTakeaways": [
        "`this` определяется в момент вызова по 4 правилам: Default, Implicit (точка), Explicit (call/apply/bind), new.",
        "Стрелочные функции не имеют своего `this` и берут его из окружающего лексического скоупа.",
        "`call` принимает аргументы списком, `apply` — массивом, а `bind` возвращает новую связанную функцию.",
        "Прототипное наследование работает через скрытую цепочку ссылок `[[Prototype]]` (`__proto__`).",
        "Методы в прототипе (`prototype`) разделяются всеми экземплярами, предотвращая дублирование в памяти."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"this-playground\">\n  <h3>Демонстрация работы this и bind</h3>\n  <button id=\"btn-broken\" style=\"background:#f85149; color:#fff; border:none; padding:8px 12px; font-weight:bold; cursor:pointer;\">Оторванный метод (this = ?)</button>\n  <button id=\"btn-fixed\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 12px; font-weight:bold; cursor:pointer; margin-left:8px;\">Связанный .bind(user)</button>\n  <pre id=\"this-log\" style=\"margin-top:12px; color:#8b949e; font-size:12px;\"></pre>\n</div>",
      "initialCss": "#this-playground { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const logger = document.getElementById('this-log');\n\nconst player = {\n  username: 'CyberNinja',\n  score: 100,\n  addScore() {\n    return `${this?.username || 'UNDEFINED'} набрал ${this?.score || 0} очков! (this = ${this})`;\n  }\n};\n\n// 1. Потеря контекста при передаче в слушатель\ndocument.getElementById('btn-broken').onclick = function() {\n  const detached = player.addScore;\n  logger.textContent = '❌ Потеря контекста: ' + detached();\n};\n\n// 2. Исправление через bind\ndocument.getElementById('btn-fixed').onclick = function() {\n  const bound = player.addScore.bind(player);\n  logger.textContent = '✅ С привязкой bind: ' + bound();\n};",
      "instructions": "Практика с контекстом this:\n1. Нажмите 'Оторванный метод' — посмотрите на потерю контекста\n2. Нажмите 'Связанный bind' — контекст восстановлен\n3. Попробуйте вызвать player.addScore.call({ username: 'Hacker', score: 999 })"
    },
    "task": {
      "title": "Реализация полифила Function.prototype.myBind и эмулятора EventEmitter с контекстом",
      "scenario": "Вам необходимо написать собственный полифил для метода bind — Function.prototype.myBind(context, ...args), поддерживающий частичное применение аргументов и сохранение контекста, а также протестировать его на обработчике событий.",
      "criteria": [
        "Метод myBind добавлен в Function.prototype",
        "Возвращает новую функцию с зафиксированным контекстом this",
        "Поддерживает частичное применение аргументов (Currying / Partial Application)",
        "Корректно передает аргументы при последующем вызове связанной функции",
        "Использует метод apply или call внутри"
      ],
      "starterCode": {
        "js": "// Реализуйте полифил myBind\nFunction.prototype.myBind = function(context, ...args) {\n  // Ваш код\n};"
      },
      "hints": [
        "Сохраните ссылку на исходную функцию: const originalFn = this;",
        "Верните функцию, принимающую ...laterArgs: return function(...laterArgs) { ... }",
        "Вызовите: return originalFn.apply(context, [...args, ...laterArgs]);"
      ],
      "solution": {
        "js": "Function.prototype.myBind = function (context, ...boundArgs) {\n  if (typeof this !== 'function') {\n    throw new TypeError('myBind must be called on a function');\n  }\n\n  const originalFunction = this;\n\n  return function (...callArgs) {\n    // Объединяем аргументы из bind и аргументы при вызове\n    const allArguments = [...boundArgs, ...callArgs];\n    return originalFunction.apply(context, allArguments);\n  };\n};\n\n// Тестирование полифила:\nfunction calculateSalary(base, bonus, taxPercent) {\n  const gross = base + bonus;\n  const net = gross - (gross * taxPercent) / 100;\n  return `${this.title} ${this.name}: ${net} ₽`;\n}\n\nconst employee = { name: 'Анна', title: 'Senior Engineer' };\n\n// Частичное применение: фиксируем context и base (200 000)\nconst calcAnna = calculateSalary.myBind(employee, 200000);\n\n// Передаем оставшиеся bonus (50 000) и tax (13%)\nconst result = calcAnna(50000, 13);\nconsole.log(result);\n// 'Senior Engineer Анна: 217500 ₽'",
        "explanation": "Полифил myBind сохраняет исходную функцию в замыкании, комбинирует предварительно связанные аргументы с аргументами вызова и вызывает оригинальную функцию через apply с переданным контекстом."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js10-q1",
          "question": "Почему счётчик в этом коде не растёт и как это починить?",
          "codeSnippet": "const timer = {\n  sec: 0,\n  start() {\n    setInterval(function () { this.sec++; }, 1000);\n  }\n};\ntimer.start();",
          "options": [
            "Обычная функция внутри таймера получает собственный `this`; нужна стрелочная функция",
            "Интервал не может менять свойства объекта, значение требуется возвращать наружу",
            "Свойство надо объявить через `let`, иначе оно оказывается доступным только для чтения",
            "Метод объявлен сокращённо и потому теряет привязку; следует писать полную форму"
          ],
          "correctIndex": 0,
          "explanation": "Значение `this` определяется способом вызова, а колбэк таймер вызывает сам по себе, без объекта слева от точки. В модуле `this` внутри такой функции окажется `undefined`, и увеличение свойства упадёт с ошибкой. Стрелочная функция собственного `this` не имеет и берёт его из метода, где объявлена, то есть сам объект. Альтернатива — привязать контекст заранее через `bind`."
        },
        {
          "id": "js10-q2",
          "question": "Что вернёт выражение `(() => this.x).bind({ x: 5 })()`, вызванное в модуле?",
          "options": [
            "5 — привязка задаёт контекст для любой функции без исключений",
            "Ссылку на объект `{ x: 5 }` целиком, а не на его отдельное свойство",
            "Ошибку `TypeError`: применять привязку к стрелочным функциям запрещено",
            "`undefined` — стрелочная функция игнорирует привязку и берёт внешний контекст"
          ],
          "correctIndex": 3,
          "explanation": "У стрелочной функции нет собственного `this`: это не значение, которое можно подменить, а обращение к внешней области видимости, зафиксированное в момент создания. Поэтому `call`, `apply` и `bind` на ней отрабатывают молча и без всякого эффекта. Ошибки не будет — будет тихо неверный результат, что коварнее. Для методов, чей контекст должен задаваться вызовом, используют обычные функции."
        },
        {
          "id": "js10-q3",
          "question": "Какой из вызовов вернёт готовую строку прямо сейчас, а не новую функцию?",
          "codeSnippet": "function greet(greeting, mark) {\n  return `${greeting}, ${this.name}${mark}`;\n}\nconst user = { name: 'Аня' };",
          "options": [
            "`greet.bind(user, 'Привет', '!')` — привязка выполняет функцию немедленно",
            "`greet.apply(user, 'Привет', '!')` — здесь аргументы передаются простым списком",
            "`greet.call(user, 'Привет', '!')` — вызов с контекстом и аргументами через запятую",
            "`greet.apply(user, ['Привет'], ['!'])` — каждый аргумент отдельным массивом"
          ],
          "correctIndex": 2,
          "explanation": "Все три метода задают контекст, но по-разному. Прямой вызов с перечислением аргументов через запятую выполняет функцию сразу — это и есть `call`. Метод `apply` тоже вызывает немедленно, но требует один массив аргументов, поэтому оба варианта с ним записаны неверно. Привязка же ничего не выполняет: она возвращает новую функцию с зафиксированным контекстом, которую нужно вызвать отдельно."
        },
        {
          "id": "js10-q4",
          "question": "Что находится в конце цепочки прототипов обычного объекта и как эту цепочку оборвать?",
          "options": [
            "`undefined`; цепочка обрывается сама, как только искомое свойство не найдено",
            "Глобальный объект окна; оборвать цепочку штатными средствами языка невозможно",
            "`Function.prototype`; оборвать можно, удалив у объекта свойство `constructor`",
            "`Object.prototype`, у которого прототип равен `null`; оборвать — `Object.create(null)`"
          ],
          "correctIndex": 3,
          "explanation": "Поиск свойства идёт вверх по цепочке и заканчивается на общем прототипе всех объектов, чей собственный прототип равен `null`. Именно оттуда берутся `toString`, `valueOf` и проверка собственных свойств. Создание объекта с прототипом `null` даёт чистый словарь без единого унаследованного свойства — удобно, когда ключами служат произвольные строки от пользователя."
        },
        {
          "id": "js10-q5",
          "question": "В чём практическая разница между этими двумя вариантами при создании миллиона экземпляров?",
          "codeSnippet": "function A(n) { this.n = n; this.get = function () { return this.n; }; }\n\nfunction B(n) { this.n = n; }\nB.prototype.get = function () { return this.n; };",
          "options": [
            "Разницы нет: движок сам распознаёт одинаковые функции и объединяет их в одну",
            "Первый вариант быстрее: поиск по цепочке прототипов требует лишних переходов",
            "У первого варианта миллион копий функции, у второго — одна общая в прототипе",
            "Второй вариант не позволит переопределить метод у отдельно взятого экземпляра"
          ],
          "correctIndex": 2,
          "explanation": "Функция, созданная в конструкторе, порождает новый объект функции при каждом вызове: на миллион экземпляров приходится миллион одинаковых функций и заметный расход памяти. Метод в прототипе существует в единственном экземпляре, а объекты находят его по ссылке — переход по цепочке стоит доли наносекунды и давно оптимизирован движком. Переопределить метод у конкретного экземпляра при этом никто не мешает."
        }
      ]
    }
  },
  {
    "id": "javascript-11",
    "moduleId": "javascript",
    "level": 11,
    "title": "Классы в ES6+ и Объектно-Ориентированное Программирование",
    "subtitle": "class, constructor, extends, super, приватные поля #private, get/set и static",
    "description": "Освойте современное ООП в JavaScript: синтаксис class, конструкторы, наследование через extends и super, настоящую инкапсуляцию через приватные поля (#private), аксессоры get/set, статические методы и фабричные паттерны.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "classes",
      "oop",
      "extends",
      "super",
      "private-fields",
      "getters-setters",
      "static-methods",
      "es6"
    ],
    "theory": {
      "overview": "Классы в ES6+ (Class Syntax) — это удобный, выразительный и безопасный синтаксис для объектно-ориентированного программирования (ООП) в JavaScript.\n\nХотя под капотом классы по-прежнему опираются на прототипное наследование (Prototype Chain), синтаксис `class` решает множество проблем старых функций-конструкторов: автоматически включает строгий режим `'use strict'`, защищает от вызова без `new`, вводит удобное наследование через `extends/super` и нативную поддержку **приватных полей (`#privateField`)** стандарта ES2022.",
      "sections": [
        {
          "title": "Анатомия класса: class, constructor и методы",
          "content": "Базовая структура класса в современном JavaScript:\n\n1. Объявление класса: `class User { ... }`\n- Тело класса ВСЕГДА выполняется в строгом режиме `'use strict'`.\n- Классы НЕ всплывают (No Hoisting): к классу нельзя обратиться до строки его объявления (`ReferenceError`).\n- Класс нельзя вызвать как простую функцию `User()` — только с ключевым словом `new User()` (`TypeError: Class constructor cannot be invoked without 'new'`).\n\n2. Конструктор `constructor(...args)`:\n- Специальный метод для инициализации свойств создаваемого объекта.\n- Вызывается автоматически в момент `new User('Alex')`.\n\n3. Методы класса:\n- Объявляются без ключевого слова `function`.\n- Автоматически помещаются в `User.prototype`, разделяясь между всеми экземплярами класса и экономя оперативную память!",
          "image": {
            "src": "/images/lessons/js-classes-oop.svg",
            "alt": "Классы ES6+ в JavaScript: constructor, extends, super, приватные поля #private, static",
            "caption": "Классы ES6: constructor инициализирует поля, extends и super реализуют наследование, #field гарантирует приватность, static методы вызываются у класса"
          },
          "codeExample": {
            "language": "javascript",
            "code": "class User {\n  // Конструктор экземпляра\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.createdAt = new Date();\n  }\n\n  // Метод экземпляра (сохраняется в User.prototype)\n  getProfile() {\n    return `${this.name} <${this.email}>`;\n  }\n}\n\nconst user1 = new User('Александр', 'alex@dev.ru');\nconsole.log(user1.getProfile()); // 'Александр <alex@dev.ru>'\nconsole.log(typeof User);        // 'function' (под капотом это функция!)",
            "title": "Синтаксис класса ES6 и методы прототипа",
            "explanation": "Метод getProfile() сохраняется в User.prototype. Вызов User() без new вызовет ошибку TypeError."
          }
        },
        {
          "title": "Наследование: extends и вызов родителя через super",
          "content": "Построение иерархии классов через наследование:\n\n1. Ключевое слово `extends`:\n- `class Admin extends User { ... }` — связывает прототип `Admin.prototype` с `User.prototype`.\n\n2. Ключевое слово `super`:\n- **`super(...args)` в конструкторе**: вызывает конструктор родительского класса `User`.\n- ⚠️ **Железное правило JS**: в конструкторе дочернего класса ОБЯЗАТЕЛЬНО вызвать `super()` ДО первого обращения к `this`! Попытка прочитать `this.role` до `super()` вызовет `ReferenceError: Must call super constructor in derived class`!\n- **`super.method()` в методах**: позволяет вызвать родительскую реализацию метода и дополнить её (Method Overriding / Переопределение методов).",
          "codeExample": {
            "language": "javascript",
            "code": "class Admin extends User {\n  constructor(name, email, permissions = ['read']) {\n    // 1. Вызов родительского конструктора ОБЯЗАТЕЛЕН до this!\n    super(name, email);\n    this.permissions = permissions;\n  }\n\n  // Переопределение родительского метода\n  getProfile() {\n    // Вызов родительской версии через super.getProfile()\n    const baseInfo = super.getProfile();\n    return `[ADMIN] ${baseInfo} | Права: ${this.permissions.join(', ')}`;\n  }\n\n  hasAccess(permission) {\n    return this.permissions.includes(permission);\n  }\n}\n\nconst superAdmin = new Admin('Елена', 'elena@dev.ru', ['read', 'write', 'delete']);\nconsole.log(superAdmin.getProfile());\n// '[ADMIN] Елена <elena@dev.ru> | Права: read, write, delete'",
            "title": "Наследование классов через extends и super",
            "explanation": "super(name, email) инициализирует базовые поля в User. super.getProfile() вызывает родительский метод внутри переопределенного метода Admin."
          }
        },
        {
          "title": "Приватные поля и методы (#private) стандарта ES2022",
          "content": "До стандарта ES2022 в JavaScript не было настоящей инкапсуляции (разработчики использовали соглашение `_privateName`, которое на самом деле было публичным).\n\nСтандарт ES2022 ввел **приватные поля и методы с префиксом `#`**:\n1. Приватное поле объявляется в теле класса: `#password;`\n2. Доступно ТОЛЬКО внутри методов этого же класса: `this.#password`.\n3. **Настоящая аппаратная приватность (Hard Privacy)**:\n- К полю `#password` НЕЛЬЗЯ обратиться снаружи: `user.#password` вызовет синтаксическую ошибку `SyntaxError: Private field '#password' must be declared in an enclosing class`!\n- Поле `#` не видно в `Object.keys(user)`, `for...in` и `JSON.stringify(user)`.\n- Дочерние классы `extends` также НЕ имеют доступа к приватным полям родителя (для доступа используют публичные геттеры).",
          "codeExample": {
            "language": "javascript",
            "code": "class BankAccount {\n  // 1. Приватные поля (доступны только внутри BankAccount)\n  #balance = 0;\n  #pinCode;\n\n  constructor(initialDeposit, pin) {\n    this.#balance = initialDeposit;\n    this.#pinCode = pin;\n  }\n\n  deposit(amount) {\n    if (amount <= 0) throw new Error('Некорректная сумма');\n    this.#balance += amount;\n    return this.#balance;\n  }\n\n  withdraw(amount, pin) {\n    if (pin !== this.#pinCode) throw new Error('Неверный PIN!');\n    if (amount > this.#balance) throw new Error('Недостаточно средств!');\n    this.#balance -= amount;\n    return this.#balance;\n  }\n\n  getBalance(pin) {\n    if (pin !== this.#pinCode) throw new Error('Доступ запрещен');\n    return this.#balance;\n  }\n}\n\nconst account = new BankAccount(10000, 1234);\naccount.deposit(5000);\nconsole.log(account.getBalance(1234)); // 15000\n// console.log(account.#balance); // ❌ SyntaxError! Приватно на уровне движка V8",
            "title": "Инкапсуляция данных через приватные поля #balance и #pinCode",
            "explanation": "Приватные поля с решеткой # физически защищены от прямого чтения и изменения снаружи класса движком JavaScript."
          }
        },
        {
          "title": "Геттеры, Сеттеры (get/set) и Статические методы (static)",
          "content": "Продвинутые механизмы классов:\n\n1. **Геттеры (`get`) и Сеттеры (`set`)**:\n- Позволяют управлять доступом к свойствам как к обычным полям (без круглых скобок `()`), добавляя валидацию и вычисляемую логику:\n```javascript\nclass Product {\n  #price = 0;\n  get price() { return `${this.#price} ₽`; }\n  set price(val) { if (val < 0) throw new Error('Цена < 0'); this.#price = val; }\n}\n```\n\n2. **Статические методы и поля (`static`)**:\n- Принадлежат САМОМУ КЛАССУ, а не его экземплярам!\n- Вызываются напрямую: `User.createGuest()` или `Math.max()`.\n- Внутри статического метода `this === сам класс User` (а не объект).\n- Применение: вспомогательные функции, фабричные методы (Factory Methods), кэши и счетчики экземпляров.",
          "codeExample": {
            "language": "javascript",
            "code": "class AppConfig {\n  // 1. Статическое поле\n  static API_VERSION = 'v2.4';\n  static #instancesCount = 0;\n\n  constructor(env = 'development') {\n    this.env = env;\n    AppConfig.#instancesCount++;\n  }\n\n  // 2. Геттер\n  get isProduction() {\n    return this.env === 'production';\n  }\n\n  // 3. Статический фабричный метод\n  static createProductionConfig() {\n    return new AppConfig('production');\n  }\n\n  static getCreatedCount() {\n    return AppConfig.#instancesCount;\n  }\n}\n\nconst cfg = AppConfig.createProductionConfig();\nconsole.log(cfg.isProduction);           // true (вызов геттера без скобок!)\nconsole.log(AppConfig.API_VERSION);      // 'v2.4'\nconsole.log(AppConfig.getCreatedCount()); // 1",
            "title": "Использование get, static полей и фабричных методов",
            "explanation": "Геттер isProduction читается как обычное свойство cfg.isProduction. Статический метод createProductionConfig вызывается у самого класса AppConfig."
          }
        },
        {
          "title": "Рекомендуемые видеоуроки по ООП и принципам SOLID",
          "content": "Для глубокого закрепления объектно-ориентированного программирования в JavaScript, понимания работы классов под капотом, принципов ООП и SOLID архитектуры рекомендуем изучить видеоматериалы:\n\n- **[Объектно-Ориентированное Программирование в JavaScript (ООП) с нуля (YouTube)](https://youtu.be/Z7V4ZtiF8Uc?si=U1q-QVCT7sYQ2w69)** — фундаментальный видеоурок с детальным разбором классов, прототипов, наследования через extends и super, инкапсуляции и практических архитектурных паттернов.\n- **[SOLID принципы разработки программного обеспечения простыми словами (YouTube)](https://youtu.be/TxZwqVTaCmA?si=r3G1_2tTERpVPYbn)** — подробный и понятный видеоразбор всех 5 принципов SOLID для создания масштабируемой и чистой архитектуры кода.\n- **[Объектно-Ориентированное Программирование (ООП) простыми словами (YouTube)](https://youtu.be/-6DWwR_R4Xk?si=4niBMqc4WD2eUZ6a)** — наглядное и понятное объяснение ключевых концепций ООП (инкапсуляция, полиморфизм, наследование, абстракция) на простых практических примерах."
        }
      ],
      "seniorTips": [
        "Используйте нативные приватные поля `#field` стандарта ES2022 вместо устаревшего соглашения `_field` — приватные поля гарантируют 100% инкапсуляцию.",
        "В конструкторе дочернего класса `extends` ВСЕГДА вызывайте `super()` первой строкой до любого обращения к `this`.",
        "Используйте статические фабричные методы (`static fromJSON(json)`) для создания объектов с комплексной валидацией.",
        "Геттеры `get` должны быть чистыми функциями без сайд-эффектов — они должны только возвращать значение, не мутируя состояние."
      ],
      "commonMistakes": [
        {
          "bad": "// this до вызова super() в дочернем классе\nclass Admin extends User {\n  constructor(name, role) {\n    this.role = role; // ❌ ReferenceError!\n    super(name);\n  }\n}",
          "good": "class Admin extends User {\n  constructor(name, role) {\n    super(name); // ✅ super вызывается первым\n    this.role = role;\n  }\n}",
          "reason": "В производных классах объект this создается родительским конструктором. До вызова super() ключевое слово this не существует."
        },
        {
          "bad": "// Вызов статического метода у экземпляра\nconst user = new User('Alex');\nuser.createGuest(); // ❌ TypeError: user.createGuest is not a function",
          "good": "User.createGuest(); // ✅ Вызывается у самого класса",
          "reason": "Статические методы static привязаны к функции-конструктору User, а не к его прототипу User.prototype."
        },
        {
          "bad": "// Рекурсивный сеттер (переполнение стека)\nclass Item {\n  set price(val) {\n    this.price = val; // ❌ Бесконечная рекурсия RangeError!\n  }\n}",
          "good": "class Item {\n  #price;\n  set price(val) {\n    this.#price = val; // ✅ Запись в приватное поле\n  }\n}",
          "reason": "this.price = val внутри сеттера price снова вызывает этот же сеттер, приводя к переполнению стека (Maximum call stack size exceeded)."
        }
      ],
      "keyTakeaways": [
        "`class` — удобный синтаксис над функциями-конструкторами со строгим режимом `'use strict'`.",
        "`extends` и `super()` обеспечивают наследование, при этом `super()` обязан вызываться до `this`.",
        "Приватные поля `#field` стандарта ES2022 обеспечивают настоящую аппаратную инкапсуляцию.",
        "Геттеры `get` и сеттеры `set` управляют свойствами с валидацией без вызова со скобками.",
        "`static` методы и поля принадлежат самому классу и служат фабриками и утилитами."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"class-app\">\n  <h3>Интерактивный Банковский Счёт (ООП)</h3>\n  <div id=\"balance-display\" style=\"font-size:24px; font-weight:bold; color:#2dff8a; margin:12px 0;\">Баланс: 0 ₽</div>\n  <div style=\"display:flex; gap:8px;\">\n    <button id=\"dep-btn\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 12px; font-weight:bold; cursor:pointer;\">+ Пополнить 1000 ₽</button>\n    <button id=\"wd-btn\" style=\"background:#ffb02e; color:#0a0e13; border:none; padding:8px 12px; font-weight:bold; cursor:pointer;\">- Снять 500 ₽</button>\n  </div>\n  <pre id=\"bank-log\" style=\"margin-top:12px; color:#8b949e; font-size:12px;\"></pre>\n</div>",
      "initialCss": "#class-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "class Account {\n  #balance = 0;\n  constructor(initial = 0) { this.#balance = initial; }\n  deposit(amt) { this.#balance += amt; return this.#balance; }\n  withdraw(amt) {\n    if (amt > this.#balance) throw new Error('Недостаточно средств');\n    this.#balance -= amt;\n    return this.#balance;\n  }\n  get balanceFormatted() { return `${this.#balance} ₽`; }\n}\n\nconst acc = new Account(1000);\nconst bEl = document.getElementById('balance-display');\nconst log = document.getElementById('bank-log');\nbEl.textContent = 'Баланс: ' + acc.balanceFormatted;\n\ndocument.getElementById('dep-btn').onclick = () => {\n  acc.deposit(1000);\n  bEl.textContent = 'Баланс: ' + acc.balanceFormatted;\n  log.textContent += '✓ Пополнение 1000 ₽\\n';\n};\n\ndocument.getElementById('wd-btn').onclick = () => {\n  acc.withdraw(500);\n  bEl.textContent = 'Баланс: ' + acc.balanceFormatted;\n  log.textContent += '✓ Снятие 500 ₽\\n';\n};",
      "instructions": "Практика с классами:\n1. Пополните и снимите средства с баланса\n2. Попробуйте прочитать acc.#balance в консоли — получите ошибку приватности\n3. Создайте класс PremiumAccount extends Account с кэшбэком"
    },
    "task": {
      "title": "Разработка модульной системы интернет-магазина на ES6+ классах с наследованием и приватностью",
      "scenario": "Вам необходимо спроектировать иерархию классов для корзины интернет-магазина: базовый класс Item с приватным полем #price, геттером/сеттером с валидацией, производный класс DiscountedItem extends Item со скидкой, и класс ShoppingCart со статическим методом createGuestCart().",
      "criteria": [
        "Класс Item содержит приватное поле #price и валидацию в сеттере (цена >= 0)",
        "Класс DiscountedItem наследуется через extends и вызывает super()",
        "DiscountedItem переопределяет геттер totalPrice с учетом процента скидки",
        "Класс ShoppingCart содержит методы addItem, removeItem, getCartTotal",
        "ShoppingCart имеет статический фабричный метод createGuestCart()"
      ],
      "starterCode": {
        "js": "// Реализуйте классы Item, DiscountedItem и ShoppingCart\nclass Item {\n  // Ваш код\n}"
      },
      "hints": [
        "Объявите #price; и геттер get price() { return this.#price; }",
        "В DiscountedItem: constructor(name, price, discount) { super(name, price); this.discount = discount; }",
        "В ShoppingCart: static createGuestCart() { return new ShoppingCart('guest'); }"
      ],
      "solution": {
        "js": "class Item {\n  #price = 0;\n\n  constructor(name, price) {\n    this.name = name;\n    this.price = price; // Вызов сеттера для валидации\n  }\n\n  get price() {\n    return this.#price;\n  }\n\n  set price(newPrice) {\n    if (typeof newPrice !== 'number' || newPrice < 0) {\n      throw new Error('Цена должна быть положительным числом');\n    }\n    this.#price = newPrice;\n  }\n\n  get totalPrice() {\n    return this.#price;\n  }\n}\n\nclass DiscountedItem extends Item {\n  constructor(name, price, discountPercent = 0) {\n    super(name, price);\n    this.discountPercent = discountPercent;\n  }\n\n  get totalPrice() {\n    const base = super.totalPrice;\n    return base - (base * this.discountPercent) / 100;\n  }\n}\n\nclass ShoppingCart {\n  #items = [];\n\n  constructor(userId) {\n    this.userId = userId;\n  }\n\n  addItem(item) {\n    if (!(item instanceof Item)) throw new TypeError('Item must be instance of Item');\n    this.#items.push(item);\n  }\n\n  removeItem(itemName) {\n    this.#items = this.#items.filter((i) => i.name !== itemName);\n  }\n\n  getCartTotal() {\n    return this.#items.reduce((sum, item) => sum + item.totalPrice, 0);\n  }\n\n  get itemsCount() {\n    return this.#items.length;\n  }\n\n  static createGuestCart() {\n    return new ShoppingCart('guest_' + Math.random().toString(36).slice(2, 7));\n  }\n}\n\n// Тест системы\nconst cart = ShoppingCart.createGuestCart();\ncart.addItem(new Item('Клавиатура', 5000));\ncart.addItem(new DiscountedItem('Мышь', 3000, 10)); // 2700 ₽\nconsole.log(cart.getCartTotal()); // 7700 ₽",
        "explanation": "Иерархия классов строго соблюдает принципы ООП: инкапсуляция через приватные поля #price и #items, полиморфизм геттера totalPrice, наследование через extends/super и статический фабричный метод."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js11-q1",
          "question": "Что не так с этим конструктором?",
          "codeSnippet": "class Admin extends User {\n  constructor(name) {\n    this.role = 'admin';\n    super(name);\n  }\n}",
          "options": [
            "Ничего: порядок строк внутри конструктора не имеет никакого значения",
            "Свойство нужно объявлять в теле класса, присваивать его в конструкторе нельзя",
            "Обращение к `this` до вызова родительского конструктора даёт `ReferenceError`",
            "Родительский конструктор вызывается автоматически, поэтому явный вызов лишний"
          ],
          "correctIndex": 2,
          "explanation": "В производном классе объект, на который указывает `this`, создаёт именно родительский конструктор. До его вызова ссылки просто не существует, и любое обращение немедленно даёт ошибку. Отсюда жёсткое правило: вызов родителя идёт первой строкой, а собственные свойства присваиваются после него."
        },
        {
          "id": "js11-q2",
          "question": "Что произойдёт при попытке обратиться к `a.#balance` за пределами класса?",
          "codeSnippet": "class Account {\n  #balance = 0;\n  top(v) { this.#balance += v; }\n}\nconst a = new Account();",
          "options": [
            "Вернётся 0 — приватность здесь остаётся лишь соглашением об именовании",
            "Код не запустится вовсе: обращение вне класса — ошибка на этапе разбора",
            "Вернётся `undefined`, как при обращении к любому несуществующему свойству",
            "Исключение возникнет во время выполнения, но только при строгом режиме"
          ],
          "correctIndex": 1,
          "explanation": "Приватные поля — не соглашение, а часть синтаксиса: имя с решёткой имеет смысл только внутри тела объявившего его класса. Встретив такое обращение снаружи, движок сообщает о синтаксической ошибке ещё до запуска, и падает весь модуль. Этим они принципиально отличаются от старого приёма с подчёркиванием, который любой желающий мог обойти."
        },
        {
          "id": "js11-q3",
          "question": "Где живут статические методы класса и откуда они доступны?",
          "options": [
            "На самом конструкторе; вызываются как `User.method()`, но не у экземпляра",
            "В прототипе класса; вызываются у любого экземпляра через обычную точку",
            "В глобальной области видимости; вызываются по имени без указания класса",
            "В приватной области класса; доступны только другим методам этого же класса"
          ],
          "correctIndex": 0,
          "explanation": "Статический метод принадлежит функции-конструктору, а не прототипу, поэтому экземпляры его в своей цепочке не находят и вызов через точку у объекта завершится ошибкой. Такие методы удобны для утилит и фабрик: например, `User.fromJSON(data)` разбирает ответ сервера и возвращает готовый экземпляр. Внутри статического метода `this` указывает на сам класс."
        },
        {
          "id": "js11-q4",
          "question": "Чем объявление класса отличается от старой функции-конструктора?",
          "options": [
            "Класс запрещает добавлять методы после объявления, а функция-конструктор — нет",
            "Класс не использует прототипное наследование и копирует методы в каждый объект",
            "Класс создаёт объекты быстрее, поскольку минует цепочку прототипов при поиске",
            "Класс нельзя вызвать без `new`, его тело всегда в строгом режиме, а поднятия нет"
          ],
          "correctIndex": 3,
          "explanation": "Класс — синтаксическая надстройка над тем же прототипным механизмом, но с защитными ограничениями. Вызов без `new` немедленно даёт ошибку вместо тихой порчи глобального объекта, тело выполняется в строгом режиме, а обращение к классу до объявления попадает во временную мёртвую зону. При этом методы по-прежнему лежат в прототипе, и добавить новый после объявления никто не мешает."
        },
        {
          "id": "js11-q5",
          "question": "Что произойдёт при выполнении `new Product().price = 10`?",
          "codeSnippet": "class Product {\n  set price(v) {\n    if (v < 0) throw new Error('bad');\n    this.price = v;\n  }\n}",
          "options": [
            "Свойство получит значение 10 — сеттер отработает совершенно штатно",
            "Ничего не произойдёт: сеттер без парного геттера браузер просто игнорирует",
            "Будет выброшена ошибка `bad`: проверка ошибочно срабатывает и на положительных",
            "Переполнение стека: присваивание внутри сеттера снова вызывает этот же сеттер"
          ],
          "correctIndex": 3,
          "explanation": "Присваивание свойству с тем же именем внутри сеттера снова вызывает сеттер — получается бесконечная рекурсия и падение с сообщением о превышении глубины стека. Значение нужно хранить в другом месте: в приватном поле с решёткой или в свойстве с подчёркиванием. Ошибка встречается настолько часто, что стала классическим вопросом на собеседовании."
        }
      ]
    }
  },
  {
    "id": "javascript-12",
    "moduleId": "javascript",
    "level": 12,
    "title": "Асинхронный JavaScript: Event Loop, Promises и Async/Await",
    "subtitle": "Event Loop, Call Stack, Microtasks vs Macrotasks, Promise API (all, allSettled, race, any) и Async/Await",
    "description": "Освойте асинхронную модель JavaScript: работу Event Loop, разницу между микротасками (Promises) и макротасками (Timers), состояния и цепочки промисов, синтаксис async/await с обработкой ошибок через try/catch, а также методы параллелизма Promise.all, Promise.allSettled, Promise.race и Promise.any.",
    "estimatedMinutes": 65,
    "difficulty": "advanced",
    "tags": [
      "async",
      "event-loop",
      "promises",
      "async-await",
      "microtasks",
      "macrotasks",
      "promise-all",
      "try-catch"
    ],
    "theory": {
      "overview": "JavaScript является однопоточным языком (Single-Threaded): в один момент времени движок JS может выполнять ровно одну инструкцию в Call Stack.\n\nОднако благодаря архитектуре **Event Loop** и фоновым потокам браузера (Web APIs), JavaScript с легкостью обрабатывает сотни параллельных сетевых запросов `fetch`, таймеров и событий пользователя без блокировки интерфейса. В этом уроке мы досконально разберём устройство Event Loop, очереди Microtasks/Macrotasks, промисы и современный синтаксис `async/await`.",
      "sections": [
        {
          "title": "Архитектура Event Loop: Call Stack, Web APIs, Microtasks и Macrotasks",
          "content": "Как движок V8 выполняет синхронный и асинхронный код:\n\n1. **Call Stack (Стек вызовов)**:\n- Место, где исполняется текущий синхронный JavaScript-код (LIFO — Last In, First Out).\n\n2. **Web APIs (Браузерные API / libuv в Node.js)**:\n- Когда движок встречает асинхронную операцию (`fetch`, `setTimeout`, `addEventListener`), он делегирует её выполнение фоновым системным потокам C++ браузера. Стек не блокируется!\n\n3. **Очереди задач (Queues)**:\n- **Microtask Queue (Очередь микротасок — VIP-приоритет!)**: колбэки промисов (`Promise.then/catch/finally`), `async/await`, `queueMicrotask`.\n- **Task Queue / Macrotask Queue (Очередь макротасок)**: таймеры `setTimeout`, `setInterval`, `setImmediate`, события I/O.\n\n4. **Правило работы Event Loop (Закон приоритетов)**:\n- 1. Полностью выполнить весь синхронный код в Call Stack до конца.\n- 2. **ОПУСТОШИТЬ ВСЮ очередь Microtasks** (все промисы выполняются немедленно!).\n- 3. Выполнить перерисовку страницы (Render / Paint), если подошло время кадра (60/120 fps).\n- 4. Взять **СТРОГО ОДНУ** макротаску из Macrotask Queue (например, один `setTimeout`) и поместить в стек.\n- 5. Повторить цикл заново!",
          "image": {
            "src": "/images/lessons/js-async-eventloop.svg",
            "alt": "Архитектура Event Loop: Call Stack, Web APIs, Microtasks и Promise Combinators",
            "caption": "Event Loop: Call Stack выполняет код, промисы идут в приоритетную Microtask Queue, а таймеры — в Macrotask Queue"
          },
          "codeExample": {
            "language": "javascript",
            "code": "console.log('1. Синхронный старт');\n\nsetTimeout(() => {\n  console.log('4. Макротаска (setTimeout 0мс)');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('3. Микротаска (Promise.then)');\n});\n\nconsole.log('2. Синхронный конец');\n\n// ПОРЯДОК ВЫВОДА В КОНСОЛЬ:\n// 1. Синхронный старт\n// 2. Синхронный конец\n// 3. Микротаска (Promise.then) — выполнилась ДО таймера!\n// 4. Макротаска (setTimeout 0мс)",
            "title": "Классический тест Event Loop на приоритет микротасок и макротасок",
            "explanation": "Синхронный код выполняется первым (1, 2). Затем Event Loop полностью опустошает очередь микротасок (3). И только потом выполняет макротаску таймера (4)."
          }
        },
        {
          "title": "Анатомия объекта Promise: состояния, then/catch/finally и чейнинг",
          "content": "Промис (Promise) — это объект, представляющий результат будущей асинхронной операции:\n\n1. 3 Состояния промиса:\n- `pending` (ожидание) — начальное состояние, операция в процессе.\n- `fulfilled` (выполнен успешно) — операция завершена, доступен результат `value` (вызов `resolve(value)`).\n- `rejected` (отклонен с ошибкой) — операция провалена, доступна причина `error` (вызов `reject(error)`).\n- Промис может изменить состояние ТОЛЬКО ОДИН РАЗ (из pending в fulfilled или rejected)!\n\n2. Методы подписки и Чейнинг (Promise Chaining):\n- `.then(onFulfilled, onRejected)` — вызывается при успехе. Возврат значения из `.then()` автоматически оборачивает его в НОВЫЙ промис, что позволяет строить цепочки без Callback Hell!\n- `.catch(onRejected)` — перехватывает ЛЮБУЮ ошибку, возникшую в любом месте цепочки выше.\n- `.finally(callback)` — выполняется ВСЕГДА (и при успехе, и при ошибке), идеален для выключения спиннера загрузки (`isLoading = false`).",
          "codeExample": {
            "language": "javascript",
            "code": "// Функция создания промиса таймера\nfunction wait(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\n// Цепочка промисов (Promise Chaining)\nfetch('/api/user/1')\n  .then((response) => {\n    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);\n    return response.json(); // Возвращает промис с распарсенным JSON\n  })\n  .then((user) => {\n    console.log('Пользователь получен:', user.name);\n    return fetch(`/api/posts?userId=${user.id}`); // Новый запрос в цепочке!\n  })\n  .then((postsRes) => postsRes.json())\n  .then((posts) => console.log('Посты пользователя:', posts.length))\n  .catch((error) => console.error('Ошибка в цепочке:', error.message))\n  .finally(() => console.log('Загрузка завершена (выключаем лоадер)'));",
            "title": "Цепочка промисов с последовательными запросами и обработкой ошибок",
            "explanation": "Каждый .then возвращает новый промис. Единый .catch в конце перехватывает сбои на любом шаге, а .finally гарантированно выключает спиннер."
          }
        },
        {
          "title": "Async / Await и элегантная обработка ошибок (try / catch)",
          "content": "Синтаксис `async/await` (ES2017) — синтаксический сахар над промисами, делающий асинхронный код визуально неотличимым от синхронного:\n\n1. Ключевое слово `async`:\n- Функция, объявленная как `async function foo() { ... }`, ВСЕГДА автоматически возвращает `Promise`.\n- Если функция возвращает простое число `return 42;`, JS обернет его в `Promise.resolve(42)`.\n\n2. Ключевое слово `await`:\n- Используется ТОЛЬКО внутри `async` функций.\n- Приостанавливает выполнение текущей функции до тех пор, пока промис справа не перейдет в состояние `fulfilled` или `rejected`.\n- При этом основной поток браузера НЕ БЛОКИРУЕТСЯ — Call Stack освобождается для других задач!\n\n3. Обработка ошибок:\n- Ошибки промисов (`rejected`) превращаются в нативные исключения, которые легко перехватываются классическим блоком `try { ... } catch (err) { ... }`.",
          "codeExample": {
            "language": "javascript",
            "code": "async function loadDashboardData(userId) {\n  setLoading(true);\n  \n  try {\n    // Асинхронный код выглядит как чистый синхронный код!\n    const userRes = await fetch(`/api/users/${userId}`);\n    if (!userRes.ok) throw new Error('Пользователь не найден');\n    const user = await userRes.json();\n\n    const statsRes = await fetch(`/api/stats/${user.id}`);\n    const stats = await statsRes.json();\n\n    return { user, stats };\n  } catch (error) {\n    console.error('Сбой загрузки дашборда:', error.message);\n    showToastNotification(error.message, 'error');\n    throw error; // Пробрасываем ошибку дальше при необходимости\n  } finally {\n    setLoading(false); // Выполняется всегда!\n  }\n}",
            "title": "Идеальный паттерн async/await с try/catch/finally",
            "explanation": "Код читается сверху вниз без вложенных колбэков. Блок catch ловит как сетевые ошибки fetch, так и ошибки парсинга json()."
          }
        },
        {
          "title": "Параллелизм: Promise.all, Promise.allSettled, Promise.race и Promise.any",
          "content": "Комбинаторы промисов (Promise Combinators) для параллельных операций:\n\n1. **`Promise.all([p1, p2, p3])` (Быстрый параллелизм)**:\n- Запускает ВСЕ промисы параллельно.\n- Возвращает массив результатов `[res1, res2, res3]` только когда ВСЕ завершились успешно.\n- **Fail-fast**: если хотя бы один промис падает с ошибкой — весь `Promise.all` мгновенно отклоняется с этой ошибкой!\n\n2. **`Promise.allSettled([p1, p2, p3])` (Надежный)**:\n- Дожидается завершения ВСЕХ промисов независимо от их исхода!\n- Возвращает массив объектов статусов: `[{ status: 'fulfilled', value }, { status: 'rejected', reason }]`.\n- Идеален для фоновых синхронизаций, где сбой одного запроса не должен ломать остальные.\n\n3. **`Promise.race([p1, p2])` (Гонка)**:\n- Возвращает результат ПЕРВОГО завершившегося промиса (успех или ошибка).\n- Применение: таймаут для запроса (`Promise.race([fetchData(), timeout(5000)])`).\n\n4. **`Promise.any([p1, p2])` (Первый успешный)**:\n- Возвращает результат первого УСПЕШНОГО промиса, игнорируя ошибки остальных.",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Параллельная загрузка (в 3 раза быстрее последовательных await!)\nasync function fetchUserProfile(id) {\n  // Все 3 запроса отправляются ОДНОВРЕМЕННО:\n  const [user, posts, followers] = await Promise.all([\n    fetch(`/api/users/${id}`).then(r => r.json()),\n    fetch(`/api/posts/${id}`).then(r => r.json()),\n    fetch(`/api/followers/${id}`).then(r => r.json())\n  ]);\n  return { user, posts, followers };\n}\n\n// 2. Таймаут для сетевого запроса через Promise.race\nfunction fetchWithTimeout(url, timeoutMs = 5000) {\n  const timeoutPromise = new Promise((_, reject) =>\n    setTimeout(() => reject(new Error('Превышен таймаут запроса')), timeoutMs)\n  );\n  return Promise.race([fetch(url), timeoutPromise]);\n}",
            "title": "Параллельная загрузка через Promise.all и таймаут через Promise.race",
            "explanation": "Promise.all выполняет запросы одновременно за время самого долгого запроса (например, 200мс вместо 200+200+200=600мс при последовательном await)."
          }
        },
        {
          "title": "Рекомендуемые видеоуроки по Event Loop и асинхронности",
          "content": "Для глубокого визуального понимания работы цикла событий (Event Loop), очередей микротасок (Promises, queueMicrotask) и макротасок (setTimeout, I/O), а также порядка выполнения асинхронного кода на реальных задачах рекомендуем изучить следующий видеоурок:\n\n- **[Разбор Event Loop в JavaScript на понятных примерах (YouTube)](https://youtu.be/kZFLHCz2a30?si=qaaNLt0M0jdhCeLZ)** — подробный интерактивный разбор работы Call Stack, Web APIs, Microtask Queue и Macrotask Queue с пошаговым решением типовых задач с собеседований."
        }
      ],
      "seniorTips": [
        "Никогда не используйте последовательные `await` для независимых запросов — объединяйте их в `Promise.all([req1, req2])` для 3–5 кратного ускорения загрузки страниц.",
        "Помните о приоритете Event Loop: микротаски (`Promise.then`, `async/await`) ВСЕГДА выполняются РАНЬШЕ любых макротасок (`setTimeout`).",
        "Используйте `Promise.allSettled()` вместо `Promise.all()`, если падение одного второстепенного виджета не должно ломать весь дашборд.",
        "Всегда оборачивайте код с `await` в блок `try/catch` или обрабатывайте ошибку на уровне вызова, чтобы избежать UnhandledPromiseRejection."
      ],
      "commonMistakes": [
        {
          "bad": "// Последовательные независимые await (медленно!)\nconst user = await fetchUser();\nconst config = await fetchConfig(); // Ждет завершения первого!",
          "good": "const [user, config] = await Promise.all([fetchUser(), fetchConfig()]); // В 2 раза быстрее!",
          "reason": "Последовательный await удваивает время ожидания. Независимые запросы должны отправляться параллельно."
        },
        {
          "bad": "// Забытый await в async функции\nconst res = fetch('/api/data'); // Возвращает Promise, а не данные!\nconsole.log(res.status); // undefined",
          "good": "const res = await fetch('/api/data');\nconsole.log(res.status); // 200",
          "reason": "Без await переменная получает объект Promise в состоянии pending, а не готовый Response."
        },
        {
          "bad": "// await внутри forEach (forEach не ждет промисы!)\nitems.forEach(async (item) => {\n  await saveItem(item);\n});\nconsole.log('Готово'); // Выведется ДО того, как items сохранятся!",
          "good": "for (const item of items) {\n  await saveItem(item); // Последовательно\n}\n// Или параллельно:\nawait Promise.all(items.map(saveItem));",
          "reason": "Array.prototype.forEach игнорирует промисы, возвращаемые колбэком. Для асинхронного перебора используйте for...of или Promise.all(map)."
        }
      ],
      "keyTakeaways": [
        "Event Loop управляет очередями: Call Stack → ВСЕ Microtasks (Promises) → Рендеринг → 1 Macrotask (Timers).",
        "Промисы имеют 3 состояния: `pending`, `fulfilled`, `rejected` и поддерживают чейнинг `.then()`.",
        "`async/await` — удобный синтаксис над промисами, синхронно-читаемый и безопасный с `try/catch`.",
        "`Promise.all` ускоряет загрузку благодаря параллелизму, а `Promise.allSettled` устойчив к ошибкам.",
        "`Promise.race` позволяет легко реализовать таймауты сетевых запросов."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"async-app\">\n  <h3>Event Loop & Async/Await Тренажер</h3>\n  <div style=\"display:flex; gap:8px;\">\n    <button id=\"btn-seq\" style=\"background:#ffb02e; color:#0a0e13; border:none; padding:8px 12px; font-weight:bold; cursor:pointer;\">1. Последовательно await</button>\n    <button id=\"btn-par\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 12px; font-weight:bold; cursor:pointer;\">2. Параллельно Promise.all</button>\n  </div>\n  <pre id=\"async-log\" style=\"margin-top:12px; color:#8b949e; font-size:12px; line-height:1.5;\"></pre>\n</div>",
      "initialCss": "#async-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const logEl = document.getElementById('async-log');\nconst sleep = (ms, name) => new Promise(r => setTimeout(() => r(name), ms));\n\nfunction log(txt) { logEl.textContent += txt + '\\n'; }\n\ndocument.getElementById('btn-seq').onclick = async () => {\n  logEl.textContent = '⏱ Запуск последовательного выполнения...\\n';\n  const t0 = performance.now();\n  const r1 = await sleep(500, 'Запрос 1 (500мс)');\n  log('✓ Получен ' + r1);\n  const r2 = await sleep(500, 'Запрос 2 (500мс)');\n  log('✓ Получен ' + r2);\n  log(`❌ Общее время: ${Math.round(performance.now() - t0)} мс (медленно!)\\n`);\n};\n\ndocument.getElementById('btn-par').onclick = async () => {\n  logEl.textContent = '🚀 Запуск параллельного Promise.all...\\n';\n  const t0 = performance.now();\n  const [r1, r2] = await Promise.all([sleep(500, 'Запрос 1 (500мс)'), sleep(500, 'Запрос 2 (500мс)')]);\n  log(`✓ Получены: ${r1} и ${r2}`);\n  log(`✅ Общее время: ${Math.round(performance.now() - t0)} мс (в 2 раза быстрее!)\\n`);\n};",
      "instructions": "Практика с асинхронностью:\n1. Нажмите 'Последовательно await' — операция займет ~1000 мс\n2. Нажмите 'Параллельно Promise.all' — операция выполнится параллельно за ~500 мс!\n3. Добавьте тест Promise.race с таймаутом"
    },
    "task": {
      "title": "Разработка асинхронного DataFetcher с параллельной загрузкой, таймаутом и повторными попытками (Retry)",
      "scenario": "Вам необходимо разработать профессиональный асинхронный модуль DataFetcher: модуль должен выполнять параллельную загрузку нескольких ресурсов через Promise.all, поддерживать отмену по таймауту через Promise.race и реализовывать механизм автоматических повторных попыток (Retry with Backoff) при сбое сети.",
      "criteria": [
        "Функция fetchWithRetry(fn, retries, delay) делает повторные попытки при ошибке",
        "Функция fetchWithTimeout(promise, timeoutMs) отклоняет промис при превышении лимита времени",
        "Метод fetchDashboard(userId) параллельно загружает пользователя и его заказы через Promise.all",
        "Реализована корректная обработка ошибок через try/catch/finally"
      ],
      "starterCode": {
        "js": "// Реализуйте асинхронный DataFetcher\nclass DataFetcher {\n  // Ваш код\n}"
      },
      "hints": [
        "Для retry: try { return await fn(); } catch (err) { if (retries <= 0) throw err; await sleep(delay); ... }",
        "Для timeout: Promise.race([promise, timeoutPromise])",
        "Для параллелизма: const [u, o] = await Promise.all([this.getUser(id), this.getOrders(id)]);"
      ],
      "solution": {
        "js": "class DataFetcher {\n  static sleep(ms) {\n    return new Promise((resolve) => setTimeout(resolve, ms));\n  }\n\n  static async fetchWithTimeout(asyncOperation, timeoutMs = 3000) {\n    const timeoutPromise = new Promise((_, reject) =>\n      setTimeout(() => reject(new Error(`Timeout: операция превысила ${timeoutMs} мс`)), timeoutMs)\n    );\n    return Promise.race([asyncOperation, timeoutPromise]);\n  }\n\n  static async fetchWithRetry(asyncFn, maxRetries = 3, baseDelay = 500) {\n    let lastError;\n    for (let attempt = 0; attempt <= maxRetries; attempt++) {\n      try {\n        return await asyncFn();\n      } catch (err) {\n        lastError = err;\n        if (attempt < maxRetries) {\n          const delay = baseDelay * Math.pow(2, attempt);\n          console.warn(`Попытка ${attempt + 1} провалена. Повтор через ${delay} мс...`);\n          await DataFetcher.sleep(delay);\n        }\n      }\n    }\n    throw lastError;\n  }\n\n  static async fetchDashboard(userId) {\n    // Имитация параллельных API-запросов\n    const getUser = () => DataFetcher.sleep(100).then(() => ({ id: userId, name: 'Алексей' }));\n    const getOrders = () => DataFetcher.sleep(150).then(() => [{ id: 101, total: 4500 }]);\n    const getStats = () => DataFetcher.sleep(80).then(() => ({ score: 98 }));\n\n    // Параллельная загрузка через Promise.all с общим таймаутом\n    const dashboardOperation = Promise.all([\n      DataFetcher.fetchWithRetry(getUser),\n      DataFetcher.fetchWithRetry(getOrders),\n      DataFetcher.fetchWithRetry(getStats)\n    ]);\n\n    const [user, orders, stats] = await DataFetcher.fetchWithTimeout(dashboardOperation, 2000);\n    return { user, orders, stats };\n  }\n}\n\n// Тест работы\nDataFetcher.fetchDashboard(1)\n  .then((data) => console.log('Дашборд успешно собран:', data))\n  .catch((err) => console.error('Сбой:', err.message));",
        "explanation": "DataFetcher объединяет все лучшие практики асинхронного JavaScript: параллелизм Promise.all, контроль таймаута через Promise.race и отказоустойчивость с экспоненциальным ретраем."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js12-q1",
          "question": "В каком порядке выведутся числа?",
          "codeSnippet": "console.log(1);\nsetTimeout(() => console.log(2));\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);",
          "options": [
            "1 4 3 2",
            "1 4 2 3",
            "1 2 3 4",
            "1 3 4 2"
          ],
          "correctIndex": 0,
          "explanation": "Сначала до конца отрабатывает синхронный код — отсюда единица и четвёрка. Затем цикл событий опустошает очередь микрозадач, куда попал обработчик промиса, и печатается тройка. Макрозадача таймера ждёт своей очереди последней, даже при нулевой задержке. Правило простое: все микрозадачи выполняются раньше любой макрозадачи."
        },
        {
          "id": "js12-q2",
          "question": "Один из трёх промисов в `Promise.all` отклонён. Что произойдёт с двумя остальными?",
          "options": [
            "Они будут отменены, и связанная с ними работа немедленно прекратится",
            "Их результаты попадут в итоговый массив рядом с описанием ошибки",
            "Они продолжат выполняться, но их результат уже никто не получит",
            "Они будут перезапущены с самого начала после обработки возникшей ошибки"
          ],
          "correctIndex": 2,
          "explanation": "Комбинатор отклоняется при первой же неудаче, но остановить остальные операции он не может: промис — это уведомление о результате, а не управление задачей. Запросы долетят до сервера, обработчики отработают, просто их значения уйдут в никуда. Чтобы реально прервать сетевой запрос, нужен `AbortController`, а чтобы дождаться всех исходов — `Promise.allSettled`."
        },
        {
          "id": "js12-q3",
          "question": "Что содержит массив, который возвращает `Promise.allSettled`?",
          "options": [
            "Только значения успешно выполненных промисов, а неудачные молча пропускаются",
            "Пары из самого промиса и его текущего состояния в виде двухэлементных массивов",
            "Объекты со статусом и полем `value` либо `reason` — по одному на каждый промис",
            "Общий объект с двумя полями: списком результатов и списком возникших ошибок"
          ],
          "correctIndex": 2,
          "explanation": "Этот комбинатор никогда не отклоняется: он дожидается всех и для каждого возвращает описание исхода. У успешного элемента статус `fulfilled` и поле со значением, у неудачного — статус `rejected` и поле с причиной. Порядок элементов совпадает с порядком входного массива. Именно так собирают дашборд, где падение одного виджета не должно ронять остальные."
        },
        {
          "id": "js12-q4",
          "question": "Что выведут эти две строки?",
          "codeSnippet": "async function f() { return 100; }\nconst r = f();\nconsole.log(r);\nconsole.log(await r);",
          "options": [
            "100 и 100 — асинхронная функция возвращает значение напрямую",
            "`Promise { 100 }` и 100 — функция всегда оборачивает результат в промис",
            "`undefined` и 100 — до ожидания результат остаётся недоступным",
            "Ошибку: возвращать примитив из асинхронной функции не разрешается"
          ],
          "correctIndex": 1,
          "explanation": "Пометка функции как асинхронной означает, что её возвращаемое значение всегда оборачивается в промис, а выброшенное исключение превращается в отклонение. Поэтому сразу после вызова в переменной лежит промис, и напечатается именно он. Достать значение можно ожиданием или обработчиком. Это же объясняет, почему забытое ожидание даёт в переменной объект промиса вместо данных."
        },
        {
          "id": "js12-q5",
          "question": "Почему строка «готово» печатается до того, как завершатся все сохранения?",
          "codeSnippet": "const ids = [1, 2, 3];\nids.forEach(async id => { await save(id); });\nconsole.log('готово');",
          "options": [
            "Ожидание внутри стрелочной функции работает только на верхнем уровне модуля",
            "Перебор игнорирует промисы, возвращаемые колбэком, и ничего не ждёт",
            "Массив из трёх элементов обрабатывается синхронно из-за оптимизации движка",
            "Вывод в консоль в любом случае выполняется раньше асинхронных операций"
          ],
          "correctIndex": 1,
          "explanation": "Обычный перебор массива был задуман до промисов: он вызывает колбэк и выбрасывает возвращённое значение, поэтому три промиса уходят в никуда, а выполнение продолжается немедленно. Нужно последовательно — берите цикл `for...of` с ожиданием внутри. Нужно параллельно — соберите промисы преобразованием и передайте в `Promise.all`."
        }
      ]
    }
  },
  {
    "id": "javascript-13",
    "moduleId": "javascript",
    "level": 13,
    "title": "Работа с сетью: Fetch API, HTTP-методы и JSON",
    "subtitle": "fetch(), GET/POST/PUT/DELETE, Headers, Response, JSON.parse/stringify, AbortController и обработка ошибок",
    "description": "Освойте работу с сетью в JavaScript: отправка HTTP-запросов через Fetch API, CRUD-операции (GET, POST, PUT, DELETE) с JSON-телом, обработка ответов (response.ok, status), парсинг JSON, отмена запросов через AbortController и архитектурный паттерн API-клиента.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "fetch",
      "http",
      "json",
      "rest-api",
      "crud",
      "abort-controller",
      "error-handling",
      "headers"
    ],
    "theory": {
      "overview": "Fetch API — это современный встроенный интерфейс JavaScript для выполнения HTTP-запросов к серверу. Он пришёл на замену устаревшему `XMLHttpRequest` (XHR) и обеспечивает чистый, промис-совместимый API для работы с REST-серверами.\n\nВ этом уроке мы разберём полный жизненный цикл запроса: от отправки `fetch()` до парсинга ответа `.json()`, научимся выполнять CRUD-операции (Create, Read, Update, Delete), правильно обрабатывать ошибки и отменять зависшие запросы через `AbortController`.",
      "sections": [
        {
          "title": "Жизненный цикл Fetch-запроса и критическая ловушка response.ok",
          "content": "Пошаговый разбор работы fetch:\n\n1. **Отправка запроса**: `fetch(url, options)` возвращает `Promise<Response>`.\n\n2. **Критическая ловушка Fetch API ⚠️**:\n- **`fetch()` НЕ бросает ошибку при HTTP 404 или 500!** Промис будет `fulfilled` (выполнен), а не `rejected`.\n- `fetch()` отклоняется (`reject`) ТОЛЬКО при сетевом сбое: нет интернета, DNS не найден, CORS заблокирован.\n- Поэтому ОБЯЗАТЕЛЬНА проверка `response.ok` (true для статусов 200–299).\n\n3. **Парсинг тела ответа**:\n- `response.json()` — парсинг JSON в объект JavaScript (возвращает промис!).\n- `response.text()` — текст.\n- `response.blob()` — бинарные данные (файлы, изображения).\n- `response.formData()` — данные формы.\n\n4. **Использование данных** — обновление DOM, стейта, UI.",
          "image": {
            "src": "/images/lessons/js-fetch-api-network.svg",
            "alt": "Жизненный цикл Fetch API и HTTP-методы CRUD",
            "caption": "fetch() → проверка response.ok → парсинг .json() → использование данных. HTTP-методы: GET, POST, PUT/PATCH, DELETE"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// Правильный паттерн Fetch-запроса с обработкой ошибок\nasync function fetchUsers() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n    \n    // КРИТИЧЕСКИ ВАЖНО: fetch НЕ бросает ошибку при 404/500!\n    if (!response.ok) {\n      throw new Error(`HTTP ошибка: ${response.status} ${response.statusText}`);\n    }\n    \n    const users = await response.json(); // Парсинг JSON (второй await!)\n    console.log('Получено пользователей:', users.length);\n    return users;\n    \n  } catch (error) {\n    // Ловит и сетевые ошибки, и наш throw из response.ok\n    console.error('Сбой загрузки:', error.message);\n    return []; // Возвращаем fallback\n  }\n}",
            "title": "Безопасный паттерн Fetch-запроса с проверкой response.ok",
            "explanation": "Двойная защита: проверка response.ok ловит серверные ошибки (404, 500), а catch — сетевые сбои (offline, DNS, CORS)."
          }
        },
        {
          "title": "CRUD-операции: GET, POST, PUT/PATCH, DELETE",
          "content": "Четыре основных HTTP-метода для работы с REST API:\n\n1. **GET** — Получить данные (Read):\n- Метод по умолчанию в `fetch()`. Запрос без тела (body).\n\n2. **POST** — Создать ресурс (Create):\n- Обязательно указать `method: 'POST'`, `body: JSON.stringify(data)` и заголовок `'Content-Type': 'application/json'`.\n\n3. **PUT / PATCH** — Обновить ресурс (Update):\n- `PUT` — полная замена ресурса (отправляем ВСЕ поля).\n- `PATCH` — частичное обновление (отправляем только изменённые поля).\n\n4. **DELETE** — Удалить ресурс (Delete):\n- `method: 'DELETE'` — обычно без тела (body).",
          "codeExample": {
            "language": "javascript",
            "code": "const API_BASE = 'https://jsonplaceholder.typicode.com';\n\n// ===== POST: Создать нового пользователя =====\nasync function createUser(userData) {\n  const response = await fetch(`${API_BASE}/users`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json', // ОБЯЗАТЕЛЬНЫЙ заголовок для JSON!\n    },\n    body: JSON.stringify(userData), // Сериализация JS-объекта в JSON-строку\n  });\n  \n  if (!response.ok) throw new Error(`Ошибка создания: ${response.status}`);\n  return response.json(); // Сервер обычно возвращает созданный объект с id\n}\n\n// ===== PATCH: Частично обновить имя =====\nasync function updateUserName(id, newName) {\n  const response = await fetch(`${API_BASE}/users/${id}`, {\n    method: 'PATCH',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ name: newName }), // Только изменяемое поле!\n  });\n  if (!response.ok) throw new Error(`Ошибка обновления: ${response.status}`);\n  return response.json();\n}\n\n// ===== DELETE: Удалить пользователя =====\nasync function deleteUser(id) {\n  const response = await fetch(`${API_BASE}/users/${id}`, {\n    method: 'DELETE', // Без body!\n  });\n  if (!response.ok) throw new Error(`Ошибка удаления: ${response.status}`);\n  return true;\n}",
            "title": "Полный набор CRUD-операций через Fetch API с обработкой ошибок",
            "explanation": "POST и PATCH требуют заголовок Content-Type и сериализацию body через JSON.stringify(). GET и DELETE отправляются без body."
          }
        },
        {
          "title": "Отмена запросов через AbortController и таймауты",
          "content": "Зачем отменять запросы:\n- Пользователь переключил страницу в SPA — предыдущие запросы уже не нужны, но ответы продолжат обновлять стейт \"фантомными\" данными.\n- Поиск с авто-дополнением: каждый новый символ отправляет запрос — предыдущие нужно отменить, чтобы не показать устаревший результат.\n- Таймаут: если сервер не ответил за 5 секунд, запрос нужно оборвать.\n\nAbortController — встроенный API для отмены Fetch-запросов:\n1. Создаём контроллер: `const controller = new AbortController();`\n2. Передаём сигнал в fetch: `fetch(url, { signal: controller.signal })`\n3. Отменяем: `controller.abort();` — fetch немедленно отклоняется с ошибкой `AbortError`.",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. Отмена запроса при навигации в SPA\nclass SearchService {\n  #currentController = null;\n\n  async search(query) {\n    // Отменяем ПРЕДЫДУЩИЙ запрос, если он ещё выполняется!\n    this.#currentController?.abort();\n    \n    this.#currentController = new AbortController();\n    \n    try {\n      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {\n        signal: this.#currentController.signal, // Привязка сигнала!\n      });\n      if (!response.ok) throw new Error(`HTTP ${response.status}`);\n      return await response.json();\n    } catch (error) {\n      if (error.name === 'AbortError') {\n        console.log('Предыдущий поиск отменен (новый запрос)');\n        return null; // Не показываем ошибку пользователю!\n      }\n      throw error; // Реальные ошибки пробрасываем дальше\n    }\n  }\n}\n\n// 2. Fetch с таймаутом через AbortSignal.timeout()\nasync function fetchWithTimeout(url, timeoutMs = 5000) {\n  const response = await fetch(url, {\n    signal: AbortSignal.timeout(timeoutMs), // Встроенный таймаут!\n  });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}",
            "title": "AbortController для отмены поиска и AbortSignal.timeout() для таймаутов",
            "explanation": "AbortController предотвращает гонку состояний: при быстром вводе в поиск каждый новый символ отменяет предыдущий запрос, показывая только актуальный результат."
          }
        },
        {
          "title": "Архитектурный паттерн API-клиента (apiClient)",
          "content": "В реальных проектах вместо вызова голого `fetch()` по всему приложению создаётся централизованный API-клиент:\n\nЗачем:\n- Базовый URL API не дублируется в каждом файле.\n- Заголовки авторизации (`Bearer token`) добавляются автоматически.\n- Ошибки обрабатываются единообразно (401 → редирект на логин).\n- Логирование и метрики запросов в одном месте.\n- При смене backend-URL или формата токена меняется один файл.",
          "codeExample": {
            "language": "javascript",
            "code": "// shared/api/apiClient.js — централизованный API-клиент\nconst API_BASE = 'https://api.example.com/v1';\n\nasync function apiClient(endpoint, options = {}) {\n  const token = localStorage.getItem('auth_token');\n\n  const config = {\n    ...options,\n    headers: {\n      'Content-Type': 'application/json',\n      ...(token ? { Authorization: `Bearer ${token}` } : {}),\n      ...options.headers, // Пользовательские заголовки перезаписывают дефолтные\n    },\n  };\n\n  // Автоматическая сериализация body\n  if (options.body && typeof options.body === 'object') {\n    config.body = JSON.stringify(options.body);\n  }\n\n  const response = await fetch(`${API_BASE}${endpoint}`, config);\n\n  // Автоматический редирект на логин при протухшем токене\n  if (response.status === 401) {\n    localStorage.removeItem('auth_token');\n    window.location.href = '/login';\n    throw new Error('Сессия истекла. Авторизуйтесь заново.');\n  }\n\n  if (!response.ok) {\n    const errorBody = await response.json().catch(() => null);\n    throw new Error(errorBody?.message || `HTTP ${response.status}`);\n  }\n\n  // 204 No Content (при DELETE)\n  if (response.status === 204) return null;\n  return response.json();\n}\n\n// Удобные CRUD-обёртки\nexport const api = {\n  get: (url) => apiClient(url),\n  post: (url, body) => apiClient(url, { method: 'POST', body }),\n  patch: (url, body) => apiClient(url, { method: 'PATCH', body }),\n  delete: (url) => apiClient(url, { method: 'DELETE' }),\n};\n\n// Использование:\n// const users = await api.get('/users');\n// await api.post('/users', { name: 'Алексей', email: 'a@b.com' });",
            "title": "Централизованный API-клиент с авторизацией и обработкой 401",
            "explanation": "Все запросы проходят через единый apiClient: токен добавляется автоматически, 401 перенаправляет на логин, тело сериализуется в JSON."
          }
        },
        {
          "title": "Политика Same-Origin, механизм CORS и решение ошибок запросов",
          "content": "При отправке сетевых запросов через fetch() браузер применяет политику безопасности **Same-Origin Policy (SOP)**: скрипт с источника http://localhost:3000 не может свободно читать данные с https://api.example.com, если сервер не разрешил это через механизм **CORS (Cross-Origin Resource Sharing)**.\n\n### Ключевые понятия CORS:\n1. **Заголовки ответа сервера**:\n- `Access-Control-Allow-Origin: *` (или конкретный домен приложения `https://app.dev`).\n- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`.\n- `Access-Control-Allow-Headers: Content-Type, Authorization`.\n- `Access-Control-Allow-Credentials: true` (для передачи cookies при `credentials: 'include'`).\n\n2. **Preflight-запросы (OPTIONS)**:\n- Перед отправкой «непростых» запросов (с методами PUT/DELETE, JSON заголовком `Content-Type: application/json` или авторизацией) браузер автоматически отправляет быстрый HTTP-запрос `OPTIONS` для предварительной проверки разрешений.\n\n3. **Как решать проблемы с CORS в разработке**:\n- Настроить CORS middleware на бэкенде (например, в Express через `app.use(cors())`).\n- В локальной разработке настроить dev-прокси (например, свойство `server.proxy` в Vite), чтобы браузер делал запрос к локальному порту, а сервер Vite перенаправлял его без ограничений CORS."
        },
        {
          "title": "Рекомендуемые видеоуроки по Fetch API и CORS",
          "content": "Для наглядного понимания работы CORS, политики Same-Origin, Preflight-запросов (OPTIONS) и исправления сетевых ошибок в Fetch рекомендуем изучить следующий видеоматериал:\n\n- **[CORS простыми словами: что это, как работает и как исправить ошибки (YouTube)](https://youtu.be/aq_chBS-OI0?si=1Ag2B47o5pZ2B8kV)** — наглядный и практический видеоразбор Cross-Origin Resource Sharing, заголовков Access-Control-Allow-Origin, механизмов безопасности браузера и способов настройки бэкенда и проксирования."
        }
      ],
      "seniorTips": [
        "ВСЕГДА проверяйте `response.ok` после fetch() — это единственная защита от тихих серверных ошибок (404, 500), которые fetch не бросает как исключения.",
        "Создавайте централизованный API-клиент (`apiClient`) для единообразной обработки авторизации, ошибок, базового URL и логирования.",
        "Используйте `AbortController` для отмены устаревших запросов при навигации в SPA и быстром вводе в поиске — это предотвращает гонку состояний (Race Condition).",
        "Для таймаута запросов используйте встроенный `AbortSignal.timeout(5000)` вместо самописного Promise.race."
      ],
      "commonMistakes": [
        {
          "bad": "// Забытая проверка response.ok\nconst data = await fetch('/api/users').then(r => r.json());\n// При 404 вернётся HTML-страница ошибки, и .json() выбросит SyntaxError!",
          "good": "const res = await fetch('/api/users');\nif (!res.ok) throw new Error(`HTTP ${res.status}`);\nconst data = await res.json();",
          "reason": "fetch() НЕ бросает ошибку при 404/500. Без проверки response.ok вы получите мусорные данные или SyntaxError при парсинге."
        },
        {
          "bad": "// Забытый Content-Type при POST\nfetch('/api/users', {\n  method: 'POST',\n  body: JSON.stringify({ name: 'Test' }) // Сервер получит пустой body!\n})",
          "good": "fetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Test' })\n})",
          "reason": "Без заголовка Content-Type: application/json сервер не знает, что body — это JSON, и не может его распарсить."
        },
        {
          "bad": "// Забытый JSON.stringify для body\nfetch('/api', { method: 'POST', body: { name: 'Test' } })\n// Тело будет '[object Object]' — строковое представление объекта!",
          "good": "fetch('/api', { method: 'POST', body: JSON.stringify({ name: 'Test' }) })",
          "reason": "fetch body принимает строку, Blob или FormData. Объект JavaScript автоматически не сериализуется — нужен JSON.stringify()."
        }
      ],
      "keyTakeaways": [
        "`fetch()` НЕ бросает ошибку при HTTP 404/500 — всегда проверяйте `response.ok`.",
        "POST/PUT/PATCH требуют заголовок `Content-Type: application/json` и `JSON.stringify(body)`.",
        "AbortController отменяет устаревшие запросы, предотвращая Race Conditions в поиске и навигации.",
        "Централизованный API-клиент (`apiClient`) автоматизирует авторизацию, обработку ошибок и сериализацию.",
        "`response.json()` возвращает промис — не забывайте второй `await`!"
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"fetch-app\">\n  <h3>Fetch API Тренажер</h3>\n  <button id=\"btn-get\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer; margin-right:8px;\">GET /users</button>\n  <button id=\"btn-post\" style=\"background:#29e7ff; color:#0a0e13; border:none; padding:8px 14px; font-weight:bold; cursor:pointer;\">POST /users</button>\n  <pre id=\"fetch-log\" style=\"margin-top:12px; color:#8b949e; font-size:11px; line-height:1.4; max-height:200px; overflow:auto;\"></pre>\n</div>",
      "initialCss": "#fetch-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "const log = document.getElementById('fetch-log');\n\ndocument.getElementById('btn-get').onclick = async () => {\n  log.textContent = '⏳ GET /users...\\n';\n  try {\n    const res = await fetch('https://jsonplaceholder.typicode.com/users');\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const users = await res.json();\n    log.textContent += `✅ Получено ${users.length} пользователей:\\n`;\n    users.slice(0, 3).forEach(u => log.textContent += `  • ${u.name} (${u.email})\\n`);\n  } catch (e) { log.textContent += `❌ ${e.message}\\n`; }\n};\n\ndocument.getElementById('btn-post').onclick = async () => {\n  log.textContent = '⏳ POST /users (создание)...\\n';\n  try {\n    const res = await fetch('https://jsonplaceholder.typicode.com/users', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ name: 'Стажёр', email: 'intern@academy.dev' })\n    });\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const created = await res.json();\n    log.textContent += `✅ Создан пользователь с id: ${created.id}\\n`;\n    log.textContent += JSON.stringify(created, null, 2);\n  } catch (e) { log.textContent += `❌ ${e.message}\\n`; }\n};",
      "instructions": "Практика с Fetch API:\n1. Нажмите 'GET /users' для получения данных с сервера\n2. Нажмите 'POST /users' для создания нового пользователя\n3. Добавьте кнопку DELETE для удаления по id"
    },
    "task": {
      "title": "Разработка централизованного API-клиента с CRUD-операциями, авторизацией и AbortController",
      "scenario": "Разработайте модуль apiClient для учебного приложения. Клиент должен автоматически подставлять базовый URL и токен авторизации, обрабатывать ошибки (включая 401 — протухший токен), поддерживать все CRUD-методы (get, post, patch, delete) и отменять зависшие запросы через AbortSignal.timeout.",
      "criteria": [
        "Реализована функция apiClient(endpoint, options) с автоматическим baseUrl и заголовками",
        "При 401 выполняется очистка токена и перенаправление на /login",
        "Экспортируются удобные методы: api.get(), api.post(), api.patch(), api.delete()",
        "Все методы с телом автоматически сериализуют body через JSON.stringify()"
      ],
      "starterCode": {
        "js": "// Разработайте централизованный API-клиент\nconst API_BASE = 'https://api.example.com';\n\nasync function apiClient(endpoint, options) {\n  // Ваш код\n}"
      },
      "hints": [
        "Токен из localStorage: const token = localStorage.getItem('auth_token');",
        "Проверка 401: if (response.status === 401) { ... redirect to /login }",
        "Обёртки: get: (url) => apiClient(url), post: (url, body) => apiClient(url, { method: 'POST', body })"
      ],
      "solution": {
        "js": "const API_BASE = 'https://api.example.com';\n\nasync function apiClient(endpoint, options = {}) {\n  const token = localStorage.getItem('auth_token');\n\n  const config = {\n    ...options,\n    headers: {\n      'Content-Type': 'application/json',\n      ...(token ? { Authorization: `Bearer ${token}` } : {}),\n      ...options.headers,\n    },\n    signal: options.signal || AbortSignal.timeout(10000),\n  };\n\n  if (options.body && typeof options.body === 'object') {\n    config.body = JSON.stringify(options.body);\n  }\n\n  const response = await fetch(`${API_BASE}${endpoint}`, config);\n\n  if (response.status === 401) {\n    localStorage.removeItem('auth_token');\n    window.location.href = '/login';\n    throw new Error('Сессия истекла');\n  }\n\n  if (!response.ok) {\n    const errBody = await response.json().catch(() => null);\n    throw new Error(errBody?.message || `HTTP ${response.status}`);\n  }\n\n  if (response.status === 204) return null;\n  return response.json();\n}\n\nconst api = {\n  get: (url) => apiClient(url),\n  post: (url, body) => apiClient(url, { method: 'POST', body }),\n  patch: (url, body) => apiClient(url, { method: 'PATCH', body }),\n  delete: (url) => apiClient(url, { method: 'DELETE' }),\n};\n\nconsole.log('API-клиент готов к использованию');",
        "explanation": "Централизованный apiClient автоматически добавляет токен, сериализует body, обрабатывает 401 и добавляет таймаут через AbortSignal.timeout."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js13-q1",
          "question": "Как поведёт себя этот код, если сервер ответит статусом 404 и отдаст HTML-страницу ошибки?",
          "codeSnippet": "try {\n  const res = await fetch('/api/unknown');\n  const data = await res.json();\n  render(data);\n} catch (e) {\n  showError(e);\n}",
          "options": [
            "Управление сразу уйдёт в обработчик ошибки: fetch отклоняется на кодах 4xx и 5xx",
            "Ответ разберётся успешно, и функция отрисовки получит пустой объект без ошибок",
            "Отклонения не будет; ошибка возникнет позже, при попытке разобрать тело как JSON",
            "Запрос будет автоматически повторён трижды, прежде чем выбросить исключение"
          ],
          "correctIndex": 2,
          "explanation": "Промис от `fetch` отклоняется только при сетевом сбое: недоступен хост, оборвалось соединение, запрос отменён. Ответ с кодом 404 — это успешно полученный ответ, и промис выполняется. Дальше разбор HTML-страницы ошибки как JSON падает с синтаксической ошибкой, и в обработчик попадает совершенно бессмысленное сообщение вместо внятного «не найдено». Отсюда обязательная проверка `response.ok` сразу после запроса."
        },
        {
          "id": "js13-q2",
          "question": "Что сломано в этом запросе?",
          "codeSnippet": "await fetch('/api/users', {\n  method: 'POST',\n  body: { name: 'Аня' }\n});",
          "options": [
            "Ничего: объект будет сериализован в JSON автоматически при отправке",
            "Метод записан не полностью: требуется указывать его в нижнем регистре",
            "Тело не сериализовано, и отсутствует заголовок с типом содержимого",
            "Не задан режим `mode: 'cors'`, без которого запрос вообще не уйдёт"
          ],
          "correctIndex": 2,
          "explanation": "В тело можно положить строку, `FormData`, `Blob` или типизированный массив, но не обычный объект: он молча приводится к строке `[object Object]`, и сервер получает мусор. Нужны две вещи — `body: JSON.stringify({ name: 'Аня' })` и заголовок `Content-Type: application/json`, по которому бэкенд поймёт, как разбирать тело. Режим по умолчанию и так `cors`, а регистр метода значения не имеет."
        },
        {
          "id": "js13-q3",
          "question": "Пользователь быстро печатает в поиске, ответы приходят вразнобой, и в списке остаётся результат устаревшего запроса. Что решает проблему?",
          "options": [
            "Задержка отправки на 300 миллисекунд — она полностью исключает гонку ответов",
            "Перевод запросов в синхронный режим, чтобы они уходили строго по очереди",
            "Отмена предыдущего запроса через `AbortController` перед отправкой нового",
            "Запрет кеширования через заголовки, чтобы ответы не путались между собой"
          ],
          "correctIndex": 2,
          "explanation": "Это состояние гонки: запрос по короткой строке отправлен раньше, но вернулся позже, и его ответ затирает актуальный. Отмена предыдущего запроса гарантирует, что в обработку попадёт только последний. Задержка ввода уменьшает число запросов и снижает вероятность проблемы, но не устраняет её: два оставшихся запроса всё равно могут прийти в обратном порядке. Поэтому оба приёма обычно применяют вместе."
        },
        {
          "id": "js13-q4",
          "question": "Почему в консоли окажется `undefined`?",
          "codeSnippet": "const res = await fetch('/api/user');\nconst data = res.json();\nconsole.log(data.name);",
          "options": [
            "Тело ответа читается только один раз, а оно уже израсходовано запросом",
            "Метод разбора возвращает промис, и его результат нужно дождаться отдельно",
            "Свойство становится доступным лишь после явной проверки успешности ответа",
            "Разбор выполняется лениво и заполняет объект только при первом обращении"
          ],
          "correctIndex": 1,
          "explanation": "Ожиданий в цепочке ровно два, и забывают обычно второе. Первое даёт объект ответа, у которого есть только заголовки и статус. Тело приходит потоком, поэтому его чтение асинхронно, и метод разбора возвращает промис — у промиса, разумеется, нет никакого свойства с именем. Правильная строка выглядит как `const data = await res.json()`."
        },
        {
          "id": "js13-q5",
          "question": "У пользователя есть имя, почта и роль, а запрос отправляет только новую почту. Какой HTTP-метод корректен?",
          "options": [
            "`PUT` — он предназначен для любого обновления уже существующего ресурса",
            "`POST` — изменение одного поля считается созданием новой версии записи",
            "`PATCH` — он описывает частичное изменение, тогда как `PUT` заменяет ресурс целиком",
            "`PUT` с заголовком `X-Partial: true`, который включает частичный режим обновления"
          ],
          "correctIndex": 2,
          "explanation": "Семантика `PUT` — «вот полное новое состояние ресурса», поэтому строгая реализация, получив одну только почту, вправе обнулить имя и роль. `PATCH` означает «примени вот эти изменения к существующему состоянию» и создан ровно для таких случаев. `POST` относится к созданию новых ресурсов, а заголовка, переключающего режим, в стандарте нет."
        }
      ]
    }
  },
  {
    "id": "javascript-14",
    "moduleId": "javascript",
    "level": 14,
    "title": "Продвинутые Web APIs: Хранилища и Observer API",
    "subtitle": "localStorage, sessionStorage, IndexedDB, IntersectionObserver, ResizeObserver и Web Workers",
    "description": "Финальный уровень трека JavaScript: освойте клиентские хранилища (localStorage, sessionStorage, Cookies, IndexedDB), событие storage для межвкладочной синхронизации, высокопроизводительные браузерные Observer APIs (IntersectionObserver для Lazy Loading и бесконечного скролла, ResizeObserver) и многопоточность через Web Workers.",
    "estimatedMinutes": 70,
    "difficulty": "advanced",
    "tags": [
      "web-apis",
      "localstorage",
      "sessionstorage",
      "indexeddb",
      "intersection-observer",
      "resize-observer",
      "web-workers",
      "storage-event"
    ],
    "theory": {
      "overview": "Поздравляем с выходом на **финальный 14-й уровень трека JavaScript**!\n\nСовременный браузер — это не просто среда для выполнения скриптов, а мощнейшая операционная система со своими базами данных (IndexedDB), многопоточными процессами (Web Workers) и оптимизированными аппаратными сенсорами (Observer API).\n\nВ этом заключительном уроке мы досконально разберём устройство всех 4 клиентских хранилищ, победим лаги скролла через `IntersectionObserver` и научимся синхронизировать вкладки в реальном времени.",
      "sections": [
        {
          "title": "Матрица клиентских хранилищ: localStorage, sessionStorage, Cookies и IndexedDB",
          "content": "Сравнение 4 способов хранения данных в браузере:\n\n1. **`localStorage` (5 МБ на домен)**:\n- Персистентное хранилище: данные сохраняются бессрочно (даже после перезагрузки компьютера).\n- Синхронный API (блокирует Call Stack при огромных объемах!).\n- Хранит ТОЛЬКО строки: требуется `JSON.stringify()` при записи и `JSON.parse()` при чтении.\n- Для чего: тема оформления, язык, черновики, токен авторизации.\n\n2. **`sessionStorage` (5 МБ на вкладку)**:\n- Живет ТОЛЬКО в пределах текущей вкладки браузера. Закрытие вкладки очищает данные.\n- Для чего: шаги многоэтапной анкеты (Wizard), несохраненный фильтр на время сессии.\n\n3. **`Cookies` (4 КБ)**:\n- Отправляются на сервер с КАЖДЫМ сетевым HTTP-запросом.\n- Флаг `HttpOnly` защищает от кражи через JavaScript (XSS-атаки).\n- Флаг `SameSite=Lax/Strict` защищает от CSRF-атак.\n- Для чего: сессионные токены авторизации от бэкенда.\n\n4. **`IndexedDB` (Сотни мегабайт / Гигабайты)**:\n- Полноценная асинхронная транзакционная NoSQL база данных прямо в браузере!\n- Поддерживает индексы, курсоры, бинарные файлы (Blobs).\n- Для чего: оффлайн-режим (PWA), кеш видео, аудио и тяжелых баз данных.",
          "image": {
            "src": "/images/lessons/js-web-apis-observers.svg",
            "alt": "Web APIs: матрица клиентских хранилищ и браузерные Observer APIs",
            "caption": "Клиентские хранилища (localStorage, sessionStorage, Cookies, IndexedDB) и Observer API (IntersectionObserver, ResizeObserver, MutationObserver)"
          },
          "codeExample": {
            "language": "javascript",
            "code": "// Безопасный типизированный менеджер localStorage с защитой от QuotaExceededError\nclass SafeStorage {\n  static set(key, value) {\n    try {\n      const serialized = JSON.stringify(value);\n      localStorage.setItem(key, serialized);\n      return true;\n    } catch (error) {\n      // В режиме Инкогнито или при переполнении (5 МБ) бросается QuotaExceededError\n      console.error(`Ошибка записи в localStorage [${key}]:`, error.message);\n      return false;\n    }\n  }\n\n  static get(key, defaultValue = null) {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : defaultValue;\n    } catch (error) {\n      console.error(`Ошибка парсинга localStorage [${key}]:`, error.message);\n      return defaultValue;\n    }\n  }\n\n  static remove(key) {\n    localStorage.removeItem(key);\n  }\n}\n\n// Использование:\nSafeStorage.set('user_settings', { theme: 'dark', volume: 80 });\nconst settings = SafeStorage.get('user_settings', { theme: 'light' });",
            "title": "Отказоустойчивый класс SafeStorage с защитой от переполнения квоты",
            "explanation": "Прямой вызов localStorage.setItem может уронить приложение в инкогнито-режиме или при лимите 5 МБ. SafeStorage гарантирует безопасность через try/catch."
          }
        },
        {
          "title": "Синхронизация вкладок через событие window.onstorage",
          "content": "Магический механизм коммуникации между вкладками одного сайта БЕЗ сервера:\n\n1. **Событие `'storage'`**:\n- Срабатывает в окне браузера, когда в ДРУГОЙ вкладке того же домена изменяется `localStorage`!\n- Вкладка, совершившая изменение, событие не получает (получают только соседние вкладки).\n\n2. Свойства события `StorageEvent`:\n- `e.key` — измененный ключ (`'auth_token'`).\n- `e.newValue` — новое значение.\n- `e.oldValue` — старое значение.\n\n3. Практические сценарии:\n- **Синхронный Logout**: пользователь нажал «Выйти» во вкладке А — вкладка Б моментально разлогинивается и редиректит на логин!\n- **Синхронизация корзины**: добавление товара во вкладке А мгновенно обновляет счетчик в шапке во вкладке Б.",
          "codeExample": {
            "language": "javascript",
            "code": "// Межвкладочный синхронизатор корзины и авторизации\nwindow.addEventListener('storage', (event) => {\n  console.log(`Изменение в соседней вкладке: ключ ${event.key}`);\n  \n  // 1. Если в соседней вкладке разлогинились — разлогиниваемся и тут!\n  if (event.key === 'auth_token' && !event.newValue) {\n    alert('Вы вышли из аккаунта в другой вкладке. Обновляем страницу...');\n    window.location.reload();\n  }\n  \n  // 2. Если в соседней вкладке изменилась тема — синхронизируем UI\n  if (event.key === 'theme' && event.newValue) {\n    document.documentElement.dataset.theme = event.newValue;\n  }\n  \n  // 3. Синхронизация счетчика корзины\n  if (event.key === 'cart_count') {\n    updateCartBadge(Number(event.newValue));\n  }\n});",
            "title": "Реалтайм синхронизация состояния между вкладками через StorageEvent",
            "explanation": "Браузер отправляет событие storage всем соседним вкладкам домена при любом изменении localStorage."
          }
        },
        {
          "title": "IntersectionObserver: Lazy Loading, бесконечный скролл и производительность",
          "content": "Революционный API для отслеживания видимости элементов на экране:\n\n1. **Проблема классического `window.addEventListener('scroll')`**:\n- Событие scroll стреляет 60–120 раз в секунду.\n- Вызов `el.getBoundingClientRect()` внутри скролла вызывает принудительный синхронный перерасчет геометрии (Forced Synchronous Layout / Layout Thrashing), что приводит к дерганиям (Jank) и греет процессор.\n\n2. **Преимущество `IntersectionObserver`**:\n- Браузер вычисляет пересечение элементов в фоновом потоке композитора GPU!\n- Колбэк вызывается ТОЛЬКО в момент, когда элемент пересекает границу экрана (0% → 10% → 100%).\n\n3. Ключевые опции:\n- `rootMargin: '200px'` — начинает подгружать изображение за 200px ДО того, как пользователь доскроллит до него (абсолютно бесшовный опыт!).\n- `threshold: 0.5` — срабатывает, когда видно 50% элемента.",
          "codeExample": {
            "language": "javascript",
            "code": "// Промышленный Lazy Loading картинок на IntersectionObserver\nfunction initLazyImages() {\n  const imageObserver = new IntersectionObserver((entries, observer) => {\n    entries.forEach((entry) => {\n      // Если картинка вошла в зону видимости (+200px запас):\n      if (entry.isIntersecting) {\n        const img = entry.target;\n        const realSrc = img.dataset.src;\n        \n        if (realSrc) {\n          img.src = realSrc; // Подгружаем настоящее тяжелое фото\n          img.classList.add('loaded');\n        }\n        \n        // Прекращаем наблюдение за этим элементом (экономим ресурсы!)\n        observer.unobserve(img);\n      }\n    });\n  }, {\n    rootMargin: '200px 0px', // Начинаем загрузку за 200px до экрана!\n    threshold: 0.01,\n  });\n\n  document.querySelectorAll('img[data-src]').forEach((img) => {\n    imageObserver.observe(img);\n  });\n}",
            "title": "Ленивая загрузка изображений (Lazy Loading) через IntersectionObserver",
            "explanation": "Картинка начинает загружаться заблаговременно (rootMargin 200px), а unobserve() освобождает память сразу после загрузки."
          }
        },
        {
          "title": "ResizeObserver и многопоточность через Web Workers",
          "content": "Продвинутые API для сложных веб-приложений:\n\n1. **`ResizeObserver`**:\n- Отслеживает изменение ширины/высоты КОНКРЕТНОГО DOM-элемента (а не окна `window.resize`!).\n- Идеален для адаптивных графиков, канвасов, ресайзабельных панелей дашборда.\n\n2. **`Web Workers` (Многопоточный JavaScript)**:\n- Позволяют вынести тяжелые CPU-вычисления (криптография, парсинг Excel/CSV файлов на 50 МБ, сжатие изображений, алгоритмы ИИ) в отдельный фоновый поток ОС.\n- **Главный UI-поток не блокируется ни на миллисекунду** — интерфейс сохраняет плавность 120 FPS!",
          "codeExample": {
            "language": "javascript",
            "code": "// 1. ResizeObserver: реакция на изменение размеров виджета\nconst chartWidget = document.querySelector('.chart-container');\nconst resizeObserver = new ResizeObserver((entries) => {\n  for (const entry of entries) {\n    const { width, height } = entry.contentRect;\n    console.log(`Размер контейнера графика: ${width}x${height}px`);\n    redrawChart(width, height); // Перерисовка Canvas\n  }\n});\nresizeObserver.observe(chartWidget);\n\n// 2. Web Worker: вынос тяжелых вычислений в фоновый поток\n// worker.js: onmessage = (e) => { const res = heavyCalculation(e.data); postMessage(res); };\nconst worker = new Worker('/workers/cryptoWorker.js');\nworker.postMessage({ largeDataArray });\nworker.onmessage = (e) => {\n  console.log('Результат фоновых вычислений получен:', e.data);\n};",
            "title": "ResizeObserver для адаптивных виджетов и Web Worker для многопоточности",
            "explanation": "ResizeObserver точно отслеживает размеры DOM-узла, а Web Worker гарантирует 0% фризов интерфейса при тяжелых расчетах."
          }
        }
      ],
      "seniorTips": [
        "Всегда оборачивайте обращения к `localStorage` в блок `try/catch` — в режиме Safari Private Browsing или при переполнении 5 МБ выброс `QuotaExceededError` может сломать всё приложение.",
        "Используйте `IntersectionObserver` вместо слушателей `scroll` для бесконечных списков (Infinite Scroll) и Lazy Loading картинок — это снижает нагрузку на CPU на 90%.",
        "Не забывайте вызывать `observer.unobserve(target)` или `observer.disconnect()` при размонтировании компонентов в SPA, чтобы предотвратить утечки памяти.",
        "Слушайте событие `window.addEventListener('storage', ...)` для мгновенной синхронизации выхода из аккаунта (Logout) и корзины между всеми открытыми вкладками."
      ],
      "commonMistakes": [
        {
          "bad": "// Запись объекта напрямую в localStorage\nlocalStorage.setItem('user', { id: 1, name: 'Анна' });\n// В хранилище запишется '[object Object]'!",
          "good": "localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Анна' }));",
          "reason": "localStorage принимает только строки. Несериализованные объекты автоматически преобразуются в строку '[object Object]'."
        },
        {
          "bad": "// Тяжелые расчеты в обработчике scroll\nwindow.addEventListener('scroll', () => {\n  cards.forEach(c => { if (c.getBoundingClientRect().top < window.innerHeight) load(); });\n}); // ❌ Фризы и просадка до 15 FPS!",
          "good": "const observer = new IntersectionObserver((entries) => { ... });\ncards.forEach(c => observer.observe(c));",
          "reason": "getBoundingClientRect() внутри scroll вызывает Layout Thrashing. IntersectionObserver работает на GPU без блокировки потока."
        },
        {
          "bad": "// Хранение конфиденциальных JWT-токенов в localStorage при наличии XSS-уязвимости",
          "good": "// Использование HttpOnly Cookies для сессионных токенов бэкенда",
          "reason": "К localStorage имеет доступ любой JS-код на странице (включая сторонние вредоносные скрипты). HttpOnly куки недоступны для JS."
        }
      ],
      "keyTakeaways": [
        "localStorage хранит 5 МБ данных бессрочно, sessionStorage — только до закрытия вкладки.",
        "Событие `storage` синхронизирует вкладки браузера в реальном времени.",
        "IntersectionObserver — самый быстрый и энергоэффективный способ реализации Lazy Loading и Infinite Scroll.",
        "ResizeObserver отслеживает изменения геометрии конкретных DOM-элементов.",
        "Web Workers обеспечивают истинную многопоточность в JavaScript для тяжелых задач."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"observer-app\">\n  <h3>IntersectionObserver & Storage Демо</h3>\n  <div style=\"margin-bottom:12px;\">\n    <button id=\"btn-save\" style=\"background:#2dff8a; color:#0a0e13; border:none; padding:6px 12px; font-weight:bold; cursor:pointer;\">Сохранить счетчик</button>\n    <span id=\"storage-val\" style=\"margin-left:12px; color:#29e7ff;\">Сохранено: 0</span>\n  </div>\n  <div id=\"scroll-box\" style=\"height:120px; overflow-y:auto; background:#161b22; padding:8px; border:1px solid #30363d;\">\n    <p style=\"color:#8b949e;\">Прокрутите вниз до маяка...</p>\n    <div style=\"height:200px;\"></div>\n    <div id=\"beacon\" style=\"background:#ffb02e; color:#0a0e13; padding:8px; text-align:center; font-weight:bold;\">🎯 МАЯК (Цель для Observer)</div>\n  </div>\n  <div id=\"observer-status\" style=\"margin-top:8px; color:#8b949e; font-size:12px;\">Статус: маяк скрыт</div>\n</div>",
      "initialCss": "#observer-app { font-family: monospace; color: #e6edf3; padding: 16px; background: #0d1117; border-radius: 8px; }",
      "initialJs": "let count = Number(localStorage.getItem('demo_count') || 0);\nconst valEl = document.getElementById('storage-val');\nvalEl.textContent = `Сохранено: ${count}`;\n\ndocument.getElementById('btn-save').onclick = () => {\n  count++;\n  localStorage.setItem('demo_count', String(count));\n  valEl.textContent = `Сохранено: ${count}`;\n};\n\n// IntersectionObserver для маяка внутри контейнера\nconst beacon = document.getElementById('beacon');\nconst statusEl = document.getElementById('observer-status');\nconst scrollBox = document.getElementById('scroll-box');\n\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      statusEl.style.color = '#2dff8a';\n      statusEl.textContent = '🟢 Статус: Маяк ПОПАЛ в зону видимости! (Триггер загрузки)';\n    } else {\n      statusEl.style.color = '#8b949e';\n      statusEl.textContent = '⚪ Статус: маяк скрыт (прокрутите контейнер вниз)';\n    }\n  });\n}, { root: scrollBox, threshold: 0.5 });\n\nobserver.observe(beacon);",
      "instructions": "Практика с Web APIs:\n1. Нажмите 'Сохранить счетчик' и перезагрузите страницу — значение сохранилось в localStorage\n2. Прокрутите блок вниз: маяк попадет в видимость, и IntersectionObserver мгновенно сработает\n3. Откройте вторую вкладку для проверки события storage"
    },
    "task": {
      "title": "Разработка модуля бесконечной ленты (Infinite Scroll) с кешированием в IndexedDB/Storage",
      "scenario": "Создайте класс InfiniteFeedManager: модуль должен использовать IntersectionObserver для отслеживания маяка в конце ленты и автоматической подгрузки следующей порции данных, сохранять прочитанные посты в localStorage с защитой от квот, и синхронизировать лайки между соседними вкладками через событие window.onstorage.",
      "criteria": [
        "Использован IntersectionObserver для детекции маяка внизу ленты",
        "Безопасная работа с localStorage через try/catch и JSON-сериализацию",
        "Подписка на событие window.addEventListener('storage') для синхронизации лайков",
        "Метод destroy() с вызовом unobserve и снятием обработчиков для предотвращения утечек памяти"
      ],
      "starterCode": {
        "js": "// Реализуйте InfiniteFeedManager\nclass InfiniteFeedManager {\n  // Ваш код\n}"
      },
      "hints": [
        "В конструкторе: this.observer = new IntersectionObserver(this.#handleIntersect.bind(this));",
        "Навесьте observer.observe(sentinelElement);",
        "В window.addEventListener('storage', (e) => { if (e.key === 'post_liked') ... });"
      ],
      "solution": {
        "js": "class InfiniteFeedManager {\n  #observer = null;\n  #sentinel = null;\n  #storageHandler = null;\n  #isLoading = false;\n  #page = 1;\n\n  constructor(sentinelElement, onFetchMore) {\n    this.#sentinel = sentinelElement;\n    this.onFetchMore = onFetchMore;\n    this.#initObserver();\n    this.#initStorageSync();\n  }\n\n  #initObserver() {\n    this.#observer = new IntersectionObserver(async (entries) => {\n      const [entry] = entries;\n      if (entry.isIntersecting && !this.#isLoading) {\n        this.#isLoading = true;\n        console.log(`Загрузка страницы ${this.#page}...`);\n        try {\n          await this.onFetchMore(this.#page);\n          this.#page++;\n        } finally {\n          this.#isLoading = false;\n        }\n      }\n    }, { rootMargin: '150px' });\n\n    if (this.#sentinel) {\n      this.#observer.observe(this.#sentinel);\n    }\n  }\n\n  #initStorageSync() {\n    this.#storageHandler = (event) => {\n      if (event.key === 'feed_sync_action') {\n        console.log('Синхронизация ленты с соседней вкладкой:', event.newValue);\n      }\n    };\n    window.addEventListener('storage', this.#storageHandler);\n  }\n\n  static saveDraft(key, data) {\n    try {\n      localStorage.setItem(key, JSON.stringify(data));\n      return true;\n    } catch (err) {\n      console.error('Ошибка сохранения драфта:', err);\n      return false;\n    }\n  }\n\n  destroy() {\n    if (this.#observer && this.#sentinel) {\n      this.#observer.unobserve(this.#sentinel);\n      this.#observer.disconnect();\n    }\n    if (this.#storageHandler) {\n      window.removeEventListener('storage', this.#storageHandler);\n    }\n    console.log('InfiniteFeedManager успешно очищен (нет утечек памяти)');\n  }\n}\n\nconsole.log('Финальный модуль трека JS готов к работе!');",
        "explanation": "InfiniteFeedManager воплощает все стандарты Senior-разработки: энергоэффективный IntersectionObserver с запасом rootMargin 150px, синхронизацию вкладок и полный метод destroy() для очистки ресурсов."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js14-q1",
          "question": "В каких вкладках сработает событие `storage` при вызове `localStorage.setItem` в текущей вкладке?",
          "options": [
            "Во всех вкладках этого домена, включая ту, где произошла сама запись",
            "Ни в одной: событие приходит лишь при полной очистке хранилища целиком",
            "Только в первой открытой вкладке домена — она считается ведущей для события",
            "Только в остальных вкладках того же источника; инициатор события не получает"
          ],
          "correctIndex": 3,
          "explanation": "Событие задумано как механизм оповещения соседей, поэтому вкладка-инициатор его не получает: она и так знает, что изменила. На этом строят синхронизацию выхода из аккаунта, корзины и переключения темы между вкладками. Если нужна реакция и в текущей вкладке, обработчик вызывают вручную рядом с записью либо используют `BroadcastChannel`."
        },
        {
          "id": "js14-q2",
          "question": "Чем `IntersectionObserver` выгоднее обычного обработчика прокрутки для ленивой загрузки картинок?",
          "options": [
            "Он срабатывает заметно чаще и потому точнее ловит момент появления элемента",
            "Он загружает изображения в отдельном потоке, минуя основной поток браузера",
            "Он не требует запрашивать геометрию на каждом кадре и не вызывает дребезг макета",
            "Он автоматически подменяет источник картинки на облегчённую версию файла"
          ],
          "correctIndex": 2,
          "explanation": "Обработчик прокрутки вызывается десятки раз в секунду, и внутри обычно запрашивают положение элементов, вынуждая браузер пересчитывать раскладку синхронно, — отсюда рывки при скролле. Наблюдатель пересечений устроен наоборот: браузер сам сообщает о попадании элемента в заданную область, вычисляя это в собственном конвейере. Колбэк вызывается редко и только по делу."
        },
        {
          "id": "js14-q3",
          "question": "Нужно хранить сотни мегабайт данных для работы приложения офлайн. Что подойдёт?",
          "options": [
            "`IndexedDB` — асинхронное транзакционное хранилище без лимита в единицы мегабайт",
            "Куки — они автоматически уходят на сервер и синхронизируются с ним",
            "`localStorage` — синхронный доступ и предельно простой строковый интерфейс",
            "`sessionStorage` — внутри одной вкладки он не имеет ограничений по объёму"
          ],
          "correctIndex": 0,
          "explanation": "Простые хранилища ключ-значение ограничены примерно пятью мегабайтами, работают синхронно и потому подвешивают поток на больших объёмах, а хранить умеют только строки. Куки ограничены четырьмя килобайтами и прикрепляются к каждому запросу. `IndexedDB` — полноценная база в браузере: асинхронные транзакции, индексы, хранение объектов и файлов, объём в сотни мегабайт. Работать с ней удобнее через обёртки вроде idb."
        },
        {
          "id": "js14-q4",
          "question": "Почему токен доступа не стоит держать в `localStorage`?",
          "options": [
            "Любой скрипт на странице может его прочитать, в том числе внедрённый через XSS",
            "Хранилище очищается при закрытии вкладки, и пользователь потеряет свою сессию",
            "Хранилище не передаёт значение на сервер, поэтому авторизация просто не сработает",
            "Записанные строки отображаются в адресной строке и попадают в историю браузера"
          ],
          "correctIndex": 0,
          "explanation": "Хранилище доступно любому коду на странице: собственному, библиотечному и внедрённому через межсайтовый скриптинг. Достаточно одной уязвимости в стороннем скрипте, чтобы токен утёк. Кука с признаком `HttpOnly` из JavaScript не читается вовсе, а вместе с `Secure` и `SameSite` даёт заметно лучшую защиту. При закрытии вкладки очищается `sessionStorage`, а не постоянное хранилище."
        },
        {
          "id": "js14-q5",
          "question": "Компонент со списком размонтирован, но наблюдатель пересечений так и не остановлен. К чему это приведёт?",
          "options": [
            "Ни к чему: сборщик мусора уберёт наблюдателя вместе с самим компонентом",
            "Наблюдатель удержит ссылки на узлы и колбэк — это утечка, нужен явный `disconnect`",
            "Браузер сам остановит наблюдение, как только узлы будут удалены из документа",
            "Наблюдатель переключится на ближайший существующий контейнер в документе"
          ],
          "correctIndex": 1,
          "explanation": "Живой наблюдатель держит и отслеживаемые узлы, и функцию обратного вызова, а та через замыкание — состояние всего компонента. Ни узлы, ни данные собраны не будут, и при каждом открытии экрана в памяти появляется очередная копия. Поэтому в функции очистки эффекта вызывают `disconnect` или снимают наблюдение с конкретного элемента."
        }
      ]
    }
  },
  {
    "id": "javascript-15",
    "moduleId": "javascript",
    "level": 15,
    "title": "Регулярные выражения (RegExp) и обработка строк",
    "subtitle": "Синтаксис шаблонов, флаги, квантификаторы, группы захвата, Lookaround и методы RegExp/String",
    "description": "Фундаментальное руководство по регулярным выражениям в JavaScript: создание через литерал и конструктор, флаги (g, i, m, s, u, y, d), символьные классы, жадные и ленивые квантификаторы, скобочные группы, именованный захват (?<name>), Lookahead и Lookbehind, методы test(), exec(), matchAll(), replace(), replaceAll(), split(), защита от катастрофического возврата (ReDoS) и практическая валидация данных.",
    "estimatedMinutes": 60,
    "difficulty": "intermediate",
    "tags": [
      "JavaScript",
      "RegExp",
      "RegEx",
      "Регулярные выражения",
      "Pattern Matching",
      "Lookahead",
      "Lookbehind",
      "String Methods",
      "ReDoS",
      "Validation"
    ],
    "theory": {
      "overview": "Регулярные выражения (Regular Expressions / RegExp) — это мощный формальный язык поиска, извлечения и трансформации текстовых данных по заданному шаблону. В JavaScript объект `RegExp` встроен на уровне спецификации ECMAScript и компилируется движком V8 в машинный байткод.\n\nВо фронтенд-разработке регулярные выражения применяются повсеместно: валидация пользовательского ввода (email, телефоны, пароли), маскирование полей ввода (банковские карты, ИНН), парсинг URL и search params, форматирование денежных сумм и дат, санация HTML от XSS-уязвимостей.",
      "sections": [
        {
          "title": "1. Создание RegExp и флаги сопоставления",
          "content": "В JS существует 2 способа создания регулярных выражений:\n\n1. **Литеральная нотация (`/pattern/flags`):** Компилируется один раз при загрузке скрипта. Идеально для статических шаблонов.\n2. **Конструктор `new RegExp('pattern', 'flags')`:** Позволяет динамически собирать шаблон из переменных во время выполнения (требует экранирования спецсимволов `\\\\d`).\n\n**Ключевые флаги:**\n- `g` (global) — поиск всех совпадений, а не только первого.\n- `i` (ignoreCase) — регистронезависимый поиск (`/a/i` совпадет с `A` и `a`).\n- `m` (multiline) — многострочный режим (якоря `^` и `$` срабатывают в начале и конце каждой строки, а не только всей строки).\n- `s` (dotAll) — символ точки `.` совпадает абсолютно с любым символом, включая перенос строки `\\n`.\n- `u` (unicode) — корректная обработка 4-байтовых символов Unicode (эмодзи 🚀, иероглифы).\n- `y` (sticky) — поиск строго с позиции `regex.lastIndex` без пропуска символов.\n- `d` (hasIndices) — генерация индексов начала и конца для всех групп захвата в `match.indices`.",
          "codeExample": {
            "language": "javascript",
            "title": "Создание RegExp и безопасная динамическая сборка",
            "code": "// Статический литерал\nconst emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\nconsole.log(emailRegex.test('intern@octobank.uz')); // true\n\n// Функция безопасного экранирования спецсимволов\nfunction escapeRegExp(string) {\n  return string.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');\n}\n\n// Динамический поиск с подсветкой\nfunction highlightSearch(text, query) {\n  if (!query.trim()) return text;\n  const safe = escapeRegExp(query);\n  const regex = new RegExp(`(${safe})`, 'gi');\n  return text.replace(regex, '<mark>$1</mark>');\n}\n\nconsole.log(highlightSearch('Frontend Academy от Octobank', 'octo'));\n// 'Frontend Academy от <mark>Octo</mark>bank'"
          }
        },
        {
          "title": "2. Символьные классы, квантификаторы и якоря",
          "content": "Регулярные выражения состоят из базовых строительных блоков:\n\n- **Символьные классы:**\n  - `\\d` — цифра `[0-9]`, `\\D` — не-цифра `[^0-9]`.\n  - `\\w` — латинская буква, цифра или знак подчеркивания `[a-zA-Z0-9_]`, `\\W` — не словарный символ.\n  - `\\s` — пробел, табуляция `\\t`, перенос строки `\\n`, `\\S` — не пробел.\n  - `.` — любой символ (кроме `\\n` без флага `s`).\n\n- **Квантификаторы (Жадные vs Ленивые):**\n  - `+` (1 или более), `*` (0 или более), `?` (0 или 1), `{n}` (ровно n раз), `{n,m}` (от n до m раз).\n  - По умолчанию все квантификаторы **жадные** — они захватывают максимальный объем текста. Добавление знака `?` (например, `.*?` или `+?`) делает квантификатор **ленивым**, заставляя его остановиться на первом подходящем совпадении.\n\n- **Якоря границ:**\n  - `^` — начало строки/текста.\n  - `$` — конец строки/текста.\n  - `\\b` — граница слова (граница между `\\w` и `\\W` или краем строки).\n  - `\\B` — позиция внутри слова (не граница).",
          "codeExample": {
            "language": "javascript",
            "title": "Жадный vs Ленивый поиск и границы слов",
            "code": "const html = '<div>Первый</div><div>Второй</div>';\n\n// Жадный квантификатор (захватит всё до последнего </div>)\nconsole.log(html.match(/<div>.*<\\/div>/)[0]);\n// '<div>Первый</div><div>Второй</div>'\n\n// Ленивый квантификатор (остановится на первом же </div>)\nconsole.log(html.match(/<div>.*?<\\/div>/)[0]);\n// '<div>Первый</div>'\n\n// Граница слова \\b\nconst text = 'Java и JavaScript — абсолютно разные языки';\nconsole.log(text.replace(/\\bJava\\b/g, 'TypeScript'));\n// 'TypeScript и JavaScript — абсолютно разные языки' (JavaScript не затронут!)"
          },
          "image": {
            "src": "/images/lessons/js-regexp-anatomy.svg",
            "alt": "Разбор регулярного выражения: якоря, символьные классы, квантификаторы, группы захвата, флаги и Lookaround",
            "caption": "Анатомия регулярного выражения: от якорей и классов символов до жадности, Lookaround и ловушек с флагом g"
          }
        },
        {
          "title": "3. Группы захвата, именованный захват и matchAll",
          "content": "Скобочные группы `(...)` решают две задачи:\n1. Применение квантификаторов к группе: `(ha)+` -> 'hahaha'.\n2. Захват подстрок для последующего использования в `match`, `replace` (`$1`, `$2`) или в самом шаблоне (`\\1`).\n\n**Виды групп:**\n- **Обычный захват `(pattern)`:** Сохраняет совпадение в `$1`, `$2`.\n- **Именованные группы `(?<name>pattern)` (ES2018+):** Сохраняет совпадение в объект `match.groups[name]` и доступен в `replace` через `$<name>`.\n- **Незахватывающие группы `(?:pattern)`:** Группирует логику без сохранения в память, ускоряя сопоставление.\n- **`str.matchAll(regex)`:** Возвращает итератор по всем совпадениям строки с группами захвата (требует флаг `g`).",
          "codeExample": {
            "language": "javascript",
            "title": "Именованные группы захвата и разбор данных",
            "code": "// Разбор строки даты\nconst datePattern = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;\nconst dateStr = '2026-08-26';\n\nconst match = dateStr.match(datePattern);\nif (match) {\n  const { year, month, day } = match.groups;\n  console.log(`День: ${day}, Месяц: ${month}, Год: ${year}`);\n  // 'День: 26, Месяц: 08, Год: 2026'\n}\n\n// Быстрая замена через именованные группы\nconst formatted = dateStr.replace(datePattern, '$<day>.$<month>.$<year>');\nconsole.log(formatted); // '26.08.2026'\n\n// Извлечение всех параметров через matchAll\nconst queryStr = 'filter=active&page=2&sort=desc';\nconst paramPattern = /(?<key>[^&=]+)=(?<value>[^&=]+)/g;\n\nconst params = {};\nfor (const m of queryStr.matchAll(paramPattern)) {\n  params[m.groups.key] = m.groups.value;\n}\nconsole.log(params); // { filter: 'active', page: '2', sort: 'desc' }"
          }
        },
        {
          "title": "4. Продвинутый Lookaround (Lookahead & Lookbehind)",
          "content": "Проверки Lookaround (опережающие и ретроспективные) позволяют искать совпадения на основе того, что находится **до** или **после** них, **не включая сами проверяемые символы в результат совпадения** (утверждения нулевой ширины):\n\n1. **Positive Lookahead `X(?=Y)`:** Находит `X`, только если за ним следует `Y`.\n2. **Negative Lookahead `X(?!Y)`:** Находит `X`, только если за ним НЕ следует `Y`.\n3. **Positive Lookbehind `(?<=Y)X`:** Находит `X`, только если перед ним стоит `Y`.\n4. **Negative Lookbehind `(?<!Y)X`:** Находит `X`, только если перед ним НЕ стоит `Y`.\n\nLookaround идеален для валидации сложности паролей, форматирования разрядов чисел и парсинга цен с валютами.",
          "codeExample": {
            "language": "javascript",
            "title": "Валидация пароля и форматирование валюты через Lookaround",
            "code": "// 1. Проверка надежности пароля одной регуляркой:\n// - минимум 8 символов\n// - хотя бы 1 строчная буква (?=.*[a-z])\n// - хотя бы 1 заглавная буква (?=.*[A-Z])\n// - хотя бы 1 цифра (?=.*\\d)\n// - хотя бы 1 спецсимвол (?=.*[@$!%*?&])\nconst passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;\n\nconsole.log(passwordRegex.test('OctoPass2026!')); // true\nconsole.log(passwordRegex.test('qwerty'));        // false\n\n// 2. Форматирование разрядов чисел (1 000 000)\nfunction formatThousands(num) {\n  return String(num).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');\n}\nconsole.log(formatThousands(15000000)); // '15 000 000'\n\n// 3. Извлечение только цен в долларах через Lookbehind\nconst prices = 'Товары: 100EUR, 250USD, 500UZS, 99USD';\nconst usdPrices = prices.match(/\\d+(?=USD)/g); // Positive Lookahead\nconsole.log(usdPrices); // ['250', '99']"
          }
        }
      ],
      "seniorTips": [
        "При валидации одиночных строк через regex.test() никогда не ставьте глобальный флаг /g — иначе мутирующее свойство lastIndex приведет к чередованию true/false на одинаковом вводе.",
        "Для простых проверок подстрок ('hello world'.includes('world')) используйте нативные строковые методы вместо RegExp — они в 5–10 раз быстрее и не нагружают память движка V8.",
        "Выносите константные регулярные выражения на уровень модуля (вне тел функций/компонентов), чтобы избежать их повторной компиляции на каждом рендере.",
        "Защищайтесь от ReDoS (Regular Expression Denial of Service): избегайте вложенных квантификаторов вида (a+)+$ и всегда ограничивайте максимальную длину входной строки перед regex-проверкой.",
        "Для маскирования номеров карт, телефонов и сумм используйте комбинацию String.prototype.replace() с функциями обратного вызова (replacer function)."
      ],
      "commonMistakes": [
        {
          "bad": "const emailReg = /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/gi;\nfunction validate(email) {\n  return emailReg.test(email); // Чередует true и false при одинаковом вводе!\n}",
          "good": "const emailReg = /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i; // БЕЗ флага g\nfunction validate(email) {\n  return emailReg.test(email);\n}",
          "reason": "Флаг 'g' включает сохранение состояния в свойстве regex.lastIndex. Следующий вызов .test() ищет совпадение с конца предыдущего совпадения."
        },
        {
          "bad": "const regex = new RegExp('\\d+\\.\\d+'); // Получится /d+.d+/, так как \\ съедается строкой",
          "good": "const regex = new RegExp('\\\\d+\\\\.\\\\d+'); // Двойное экранирование спецсимволов",
          "reason": "В строковых литералах обратный слэш экранирует сам себя. В конструктор new RegExp необходимо передавать '\\\\d', чтобы RegExp получил '\\d'."
        },
        {
          "bad": "const isNumber = (val) => /\\d+/.test(val); // 'abc 123 def' вернет true!",
          "good": "const isNumber = (val) => /^\\d+$/.test(val); // Строго от начала (^) до конца ($)",
          "reason": "Без якорей ^ и $ регулярное выражение сопоставляется с ЛЮБОЙ подстрокой, а не проверяет всю строку целиком."
        }
      ],
      "keyTakeaways": [
        "Литералы /.../ компилируются статически, new RegExp() — динамически с обязательным экранированием спецсимволов.",
        "Флаги g, i, m, s, u, y, d расширяют поведение поиска, но флаг g мутирует свойство lastIndex при вызове .test() и .exec().",
        "Жадные квантификаторы (+, *) берут максимум, ленивые (+?, *?) — минимум.",
        "Именованные группы (?<name>...) и метод matchAll() делают разбор сложных текстовых структур читаемым и надежным.",
        "Lookahead (?=...) и Lookbehind (?<=...) позволяют проверять контекст без включения его в результат совпадения."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"card-checker-app\">\n  <h2>💳 Валидатор и маскирование карт</h2>\n  <div class=\"input-group\">\n    <label>Номер карты:</label>\n    <input type=\"text\" id=\"cardInput\" placeholder=\"8600 1234 5678 9012\" maxlength=\"19\" />\n    <span id=\"cardStatus\" class=\"status-badge\">Ожидание ввода...</span>\n  </div>\n  <div class=\"result-box\">\n    <div><strong>Очищенный номер:</strong> <span id=\"cleanResult\">—</span></div>\n    <div><strong>Маскированный вид:</strong> <span id=\"maskedResult\">—</span></div>\n    <div><strong>Тип платежной системы:</strong> <span id=\"paymentSystem\">—</span></div>\n  </div>\n</div>",
      "initialCss": ".card-checker-app {\n  padding: 24px;\n  background: #06090d;\n  color: #e6edf3;\n  border-radius: 12px;\n  border: 1px solid #1c2c22;\n  font-family: 'JetBrains Mono', monospace;\n  max-width: 540px;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 16px 0;\n}\ninput {\n  padding: 10px 14px;\n  background: #0d1520;\n  border: 1px solid #2dff8a44;\n  color: #2dff8a;\n  font-size: 16px;\n  border-radius: 6px;\n  outline: none;\n  font-family: inherit;\n}\ninput:focus {\n  border-color: #2dff8a;\n  box-shadow: 0 0 10px rgba(45, 255, 138, 0.2);\n}\n.status-badge {\n  font-size: 12px;\n  color: #8b949e;\n}\n.status-badge.valid { color: #2dff8a; }\n.status-badge.invalid { color: #ff5555; }\n.result-box {\n  background: #0a0f16;\n  padding: 16px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n}",
      "initialJs": "const input = document.getElementById('cardInput');\nconst status = document.getElementById('cardStatus');\nconst cleanEl = document.getElementById('cleanResult');\nconst maskedEl = document.getElementById('maskedResult');\nconst systemEl = document.getElementById('paymentSystem');\n\nfunction detectSystem(digits) {\n  if (/^8600/.test(digits)) return 'Uzcard';\n  if (/^9860/.test(digits)) return 'Humo';\n  if (/^4/.test(digits)) return 'Visa';\n  if (/^5[1-5]/.test(digits)) return 'Mastercard';\n  return 'Неизвестно';\n}\n\ninput.addEventListener('input', (e) => {\n  const raw = e.target.value;\n  // Удаляем всё кроме цифр\n  const digits = raw.replace(/\\D/g, '');\n  \n  // Автоматическое форматирование ввода по 4 цифры\n  const formatted = digits.replace(/(\\d{4})(?=\\d)/g, '$1 ');\n  e.target.value = formatted;\n  \n  cleanEl.textContent = digits || '—';\n  \n  if (digits.length === 16) {\n    status.textContent = '✓ Номер карты валиден';\n    status.className = 'status-badge valid';\n    maskedEl.textContent = digits.replace(/^(\\d{4})(\\d{8})(\\d{4})$/, '$1 **** **** $3');\n    systemEl.textContent = detectSystem(digits);\n  } else {\n    status.textContent = `Введено цифр: ${digits.length}/16`;\n    status.className = 'status-badge invalid';\n    maskedEl.textContent = '—';\n    systemEl.textContent = detectSystem(digits);\n  }\n});",
      "instructions": "Интерактивная песочница демонстрирует работу регулярных выражений в реальном времени: форматирование ввода по 4 цифры через Lookahead `(\\d{4})(?=\\d)`, очистку от не-цифр `\\D`, маскирование номера и автоопределение типа карты (Uzcard/Humo/Visa/Mastercard)."
    },
    "task": {
      "title": "Разработка модуля валидации и парсера финансовых транзакций",
      "scenario": "Вы разрабатываете финансовый шлюз для интернет-банкинга Octobank. Вам необходимо реализовать надежный класс `TransactionProcessor` со строгой валидацией, безопасным маскированием и парсингом текстовых выписок.",
      "criteria": [
        "Метод isValidCard(cardNumber): возвращает true, если номер содержит ровно 16 цифр (слитно или по 4 через пробел)",
        "Метод maskCard(cardNumber): возвращает номер вида '8600 **** **** 9012' или 'INVALID', если карта невалидна",
        "Метод parseLog(logText): извлекает из логов массив объектов { id, user, amount, currency } с преобразованием amount в Number",
        "Метод sanitizeHtml(text): удаляет все теги <script>...</script> и опасные on-атрибуты через регулярные выражения"
      ],
      "starterCode": {
        "js": "class TransactionProcessor {\n  /**\n   * Проверяет валидность номера карты (16 цифр)\n   * @param {string} card\n   * @returns {boolean}\n   */\n  static isValidCard(card) {\n    // Ваш код\n  }\n\n  /**\n   * Маскирует номер карты: '8600 **** **** 9012'\n   * @param {string} card\n   * @returns {string}\n   */\n  static maskCard(card) {\n    // Ваш код\n  }\n\n  /**\n   * Парсит журнал транзакций вида 'TRX-101: USER=Anna, SUM=150000UZS'\n   * @param {string} logText\n   * @returns {Array<{id: string, user: string, amount: number, currency: string}>}\n   */\n  static parseLog(logText) {\n    // Ваш код\n  }\n\n  /**\n   * Очищает текст от опасных <script> тегов\n   * @param {string} html\n   * @returns {string}\n   */\n  static sanitizeHtml(html) {\n    // Ваш код\n  }\n}"
      },
      "hints": [
        "Для isValidCard используйте: /^\\d{4}\\s?\\d{4}\\s?\\d{4}\\s?\\d{4}$/.test(card?.trim())",
        "Для maskCard: очистите от \\D, проверьте длину 16, затем примените .replace(/^(\\d{4})\\d{8}(\\d{4})$/, '$1 **** **** $2')",
        "Для parseLog: используйте именованные группы /(?<id>\\d+):\\s*USER=(?<user>[^,]+),\\s*SUM=(?<amount>\\d+)(?<currency>[A-Z]{3})/g и matchAll",
        "Для sanitizeHtml: html.replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/\\s+on\\w+=\\S+/gi, '')"
      ],
      "solution": {
        "js": "class TransactionProcessor {\n  static isValidCard(card) {\n    if (typeof card !== 'string') return false;\n    const clean = card.trim();\n    return /^\\d{4}\\s?\\d{4}\\s?\\d{4}\\s?\\d{4}$/.test(clean);\n  }\n\n  static maskCard(card) {\n    if (!this.isValidCard(card)) return 'INVALID';\n    const digits = card.replace(/\\D/g, '');\n    return digits.replace(/^(\\d{4})\\d{8}(\\d{4})$/, '$1 **** **** $2');\n  }\n\n  static parseLog(logText) {\n    if (typeof logText !== 'string') return [];\n    const regex = /TRX-(?<id>\\d+):\\s*USER=(?<user>[A-Za-zа-яА-ЯёЁ]+),\\s*SUM=(?<amount>\\d+)(?<currency>[A-Z]{3})/g;\n    const results = [];\n    for (const match of logText.matchAll(regex)) {\n      const { id, user, amount, currency } = match.groups;\n      results.push({\n        id,\n        user,\n        amount: Number(amount),\n        currency\n      });\n    }\n    return results;\n  }\n\n  static sanitizeHtml(html) {\n    if (typeof html !== 'string') return '';\n    return html\n      .replace(/<script[\\s\\S]*?<\\/script>/gi, '')\n      .replace(/\\s+on\\w+=(['\"]).*?\\1/gi, '')\n      .replace(/\\s+on\\w+=\\S+/gi, '');\n  }\n}\n\nconsole.log('TransactionProcessor успешно инициализирован!');",
        "explanation": "TransactionProcessor использует современные возможности регулярных выражений: строгие якоря границ, именованные группы захвата с matchAll, ленивую очистку скриптов и защиту от инъекций."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "js15-q1",
          "question": "Что выведет этот код с глобальным флагом и почему?",
          "codeSnippet": "const re = /\\d+/g;\nconsole.log(re.test('abc123'));\nconsole.log(re.test('abc123'));",
          "options": [
            "`true true` — результат проверки не зависит от предыдущих вызовов",
            "`true false` — глобальный флаг сдвигает `lastIndex`, и второй поиск идёт с конца",
            "`false false` — без якорей совпадение в строке не находится вовсе",
            "`true` и исключение — повторно использовать объект выражения запрещено"
          ],
          "correctIndex": 1,
          "explanation": "Глобальный флаг делает объект выражения объектом с состоянием: после удачной проверки в свойстве `lastIndex` остаётся позиция конца совпадения, и следующий вызов начинает поиск оттуда. Дойдя до конца строки, метод возвращает ложь и сбрасывает позицию в ноль — отсюда чередование результатов на одном и том же вводе. Для проверок глобальный флаг просто не ставят."
        },
        {
          "id": "js15-q2",
          "question": "Что вернёт каждое из этих двух выражений — жадное и ленивое?",
          "codeSnippet": "const html = '<b>жирный</b> и <i>курсив</i>';\nhtml.match(/<.+>/)[0];\nhtml.match(/<.+?>/)[0];",
          "options": [
            "Первое вернёт всю строку до последнего `>`, второе — только `'<b>'`",
            "Оба вернут `'<b>'` — поиск в любом случае останавливается на первом закрытии",
            "Первое вернёт `'<b>'`, а второе захватит всю строку целиком",
            "Оба вернут строку целиком: разница проявляется только с глобальным флагом"
          ],
          "correctIndex": 0,
          "explanation": "Жадный квантификатор сначала забирает максимум, а затем отступает назад ровно настолько, чтобы совпадение состоялось, — последним закрывающим символом оказывается самый правый. Ленивый берёт минимум и расширяется только при необходимости, поэтому останавливается на первом же закрытии. Это классическая причина, по которой разбор разметки регулярными выражениями захватывает «слишком много»."
        },
        {
          "id": "js15-q3",
          "question": "Нужно найти число, за которым стоит знак рубля, не включая сам знак в результат. Какая конструкция подойдёт?",
          "options": [
            "`\\d+(?!₽)` — отрицательная проверка отбрасывает лишний символ справа",
            "`\\d+(?:₽)` — незахватывающая группа исключает символ из итогового результата",
            "`\\d+(?=₽)` — опережающая проверка, её содержимое в совпадение не входит",
            "`(?<=₽)\\d+` — ретроспективная проверка смотрит назад от найденного числа"
          ],
          "correctIndex": 2,
          "explanation": "Опережающая проверка лишь убеждается, что дальше идёт нужный символ, не сдвигая позицию и не включая его в совпадение. Незахватывающая группа — другое: она не создаёт отдельную группу захвата, но символ всё равно поглощает и в результат он попадает. Отрицательная проверка требует противоположного, а ретроспективная смотрела бы на символ слева, то есть искала бы число после знака."
        },
        {
          "id": "js15-q4",
          "question": "Как получить строку `'mail.ru'` из этого результата?",
          "codeSnippet": "const re = /(?<user>\\w+)@(?<domain>[\\w.]+)/;\nconst m = 'ann@mail.ru'.match(re);",
          "options": [
            "`m.getGroup('domain')` — стандартный геттер объекта результата поиска",
            "`m.named('domain')` — доступ к группам идёт через отдельный метод",
            "`m['domain']` — имя группы становится ключом самого объекта совпадения",
            "`m.groups.domain` — именованные группы собраны в свойстве `groups`"
          ],
          "correctIndex": 3,
          "explanation": "Именованные группы складываются в отдельный объект под свойством `groups`, а по числовым индексам они по-прежнему доступны как `m[1]` и `m[2]`. Имена делают разбор устойчивым: добавление новой группы в середину выражения не ломает код, завязанный на номера. Тот же объект приходит и в функцию замены при использовании метода `replace`."
        },
        {
          "id": "js15-q5",
          "question": "Почему выражение `/^(\\w+\\s?)+$/` опасно применять к длинной строке, которая ему не соответствует?",
          "options": [
            "Оно потребляет память пропорционально квадрату длины входной строки",
            "Вложенные квантификаторы порождают лавинный перебор и подвешивают поток",
            "Якоря начала и конца заставляют движок перезапускать поиск с каждой позиции",
            "Класс `\\w` не поддерживает кириллицу и вызывает повторный разбор всей строки"
          ],
          "correctIndex": 1,
          "explanation": "Квантификатор внутри квантификатора даёт экспоненциальное число способов разбить строку на части. Пока совпадение есть, движок находит его быстро, но на строке без совпадения он обязан перебрать все варианты, и время растёт лавинообразно — сотня символов способна занять процессор на минуты. На сервере это готовый отказ в обслуживании. Защита — не вкладывать квантификаторы друг в друга и ограничивать длину входной строки заранее."
        }
      ]
    }
  }
];
