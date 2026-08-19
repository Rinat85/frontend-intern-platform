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
          "question": "В чем ключевое отличие const от let в стандарте ES6+?",
          "options": [
            "const работает только в серверном Node.js, а let — только в браузере",
            "const запрещает переприсваивание привязки к значению, а let позволяет перезаписывать переменную",
            "const имеет глобальную область видимости, а let — функциональную",
            "const автоматически замораживает все вложенные свойства объектов от мутации"
          ],
          "correctIndex": 1,
          "explanation": "const запрещает повторное присваивание переменной (Assignment to constant variable), но позволяет мутировать внутренние свойства объектов, если объект не заморожен через Object.freeze."
        },
        {
          "id": "j1-q2",
          "question": "Что выведет в консоль выражение: typeof null?",
          "options": [
            "'null'",
            "'undefined'",
            "'object'",
            "'boolean'"
          ],
          "correctIndex": 2,
          "explanation": "typeof null возвращает 'object' — это широко известный исторический баг в первой реализации JavaScript 1995 года, оставленный ради обратной совместимости."
        },
        {
          "id": "j1-q3",
          "question": "Что произойдет при попытке обратиться к переменной let myVar = 10 ДО строки её объявления в коде?",
          "options": [
            "Вернется значение undefined",
            "Переменная автоматически создастся в глобальном объекте window",
            "Выбросится фатальная ошибка ReferenceError из-за нахождения переменной в Temporal Dead Zone (TDZ)",
            "Код молча проигнорирует команду и вернет null"
          ],
          "correctIndex": 2,
          "explanation": "Переменные let и const попадают во Временную мертвую зону (TDZ) от начала блока до строки объявления. Обращение к ним до инициализации вызывает ReferenceError."
        },
        {
          "id": "j1-q4",
          "question": "Какой метод является единственно надежным стандартом для проверки, является ли переменная массивом?",
          "options": [
            "typeof val === 'array'",
            "Array.isArray(val)",
            "val instanceof String",
            "val.getType() === 'array'"
          ],
          "correctIndex": 1,
          "explanation": "Статический метод Array.isArray(val) — стандарт языка для точной проверки массивов, так как оператор typeof [] возвращает 'object'."
        },
        {
          "id": "j1-q5",
          "question": "Что произойдет при выполнении следующего кода: const x = [1, 2]; const y = x; y.push(3); console.log(x.length);?",
          "options": [
            "Выведет 2 (массив x останется без изменений)",
            "Выведет 3 (массив x мутирует, так как массивы передаются по ссылке)",
            "Выбросится ошибка TypeError: Assignment to constant variable",
            "Выведет undefined"
          ],
          "correctIndex": 1,
          "explanation": "Массивы являются ссылочным типом данных. Переменные x и y указывают на один и тот же участок в Memory Heap, поэтому мутация через y.push(3) изменит и x."
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
          "question": "В чём ключевое отличие Arrow Function от Function Declaration?",
          "options": [
            "Arrow Function быстрее выполняется",
            "Arrow Function не имеет собственного this — наследует его лексически",
            "Arrow Function не может принимать параметры",
            "Arrow Function автоматически возвращает undefined"
          ],
          "correctIndex": 1,
          "explanation": "Arrow Function не создаёт собственный this, arguments, super и new.target. Она наследует this из окружающего лексического контекста. Это делает arrow идеальной для callback-ов, но непригодной для методов объектов."
        },
        {
          "id": "js2-q2",
          "question": "Что такое замыкание (Closure) в JavaScript?",
          "options": [
            "Блокировка доступа к переменным",
            "Функция, которая сохраняет доступ к переменным родительского скоупа после его завершения",
            "Автоматическое удаление неиспользуемых переменных",
            "Механизм наследования между классами"
          ],
          "correctIndex": 1,
          "explanation": "Замыкание возникает, когда внутренняя функция сохраняет ссылку на Lexical Environment родительского скоупа. Даже после завершения родительской функции, внутренняя продолжает иметь доступ к её переменным."
        },
        {
          "id": "js2-q3",
          "question": "Что выведет код: for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }",
          "options": [
            "0, 1, 2",
            "3, 3, 3",
            "undefined, undefined, undefined",
            "0, 0, 0"
          ],
          "correctIndex": 1,
          "explanation": "var имеет function scope — одна переменная i для всего цикла. setTimeout callback-и выполняются после завершения цикла, когда i === 3. Все три вызова замыкаются на одну и ту же переменную i. Решение: используйте let."
        },
        {
          "id": "js2-q4",
          "question": "Что возвращает выражение: 0 || 'default' и 0 ?? 'default'?",
          "options": [
            "Оба возвращают 'default'",
            "|| возвращает 'default', ?? возвращает 0",
            "Оба возвращают 0",
            "|| возвращает 0, ?? возвращает 'default'"
          ],
          "correctIndex": 1,
          "explanation": "|| (OR) проверяет на falsy: 0, '', false, null, undefined, NaN. 0 — falsy, поэтому возвращает 'default'. ?? (nullish coalescing) проверяет только null и undefined. 0 — не null и не undefined, поэтому возвращает 0."
        },
        {
          "id": "js2-q5",
          "question": "Что делает оператор ...args в параметрах функции: function sum(...args) {}?",
          "options": [
            "Разворачивает массив args в отдельные аргументы",
            "Собирает все переданные аргументы в массив args (rest parameter)",
            "Создаёт копию объекта args",
            "Удаляет первый аргумент из массива"
          ],
          "correctIndex": 1,
          "explanation": "В параметрах функции ...args — это rest parameter, он собирает все оставшиеся аргументы в массив. В вызове функции или в литералах массивов/объектов ... — это spread operator, он разворачивает массив/объект."
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
          "question": "В чём заключается ключевое преимущество паттерна Guard Clauses перед вложенными конструкциями if-else?",
          "options": [
            "Guard Clauses ускоряют загрузку скрипта по сети",
            "Guard Clauses проверяют граничные условия и ошибки в начале функции с ранним возвратом, устраняя вложенность кода",
            "Guard Clauses автоматически превращают функцию в асинхронную",
            "Guard Clauses запрещают использование оператора return"
          ],
          "correctIndex": 1,
          "explanation": "Паттерн Guard Clauses (защитные условия / ранний возврат) позволяет обработать невалидные параметры и ошибки на входе в функцию с немедленным выходом (return / throw). Это сохраняет основную бизнес-логику на нулевом уровне отступа и делает код плоским и читаемым."
        },
        {
          "id": "js3-q2",
          "question": "Что произойдёт при выполнении цикла: for (const key in ['HTML', 'CSS']) { console.log(key); }?",
          "options": [
            "Выведет: 'HTML', 'CSS'",
            "Выведет строковые индексы: '0', '1'",
            "Произойдет ошибка TypeError",
            "Выведет: undefined, undefined"
          ],
          "correctIndex": 1,
          "explanation": "Цикл for...in перебирает имена перечисляемых свойств (ключей) объекта. Для массива ключами являются строковые индексы ('0', '1'). Чтобы перебирать значения элементов массива, необходимо использовать for...of."
        },
        {
          "id": "js3-q3",
          "question": "Что необходимо реализовать в объекте, чтобы он стал итерируемым (Iterable) и поддерживал цикл for...of и spread-оператор?",
          "options": [
            "Метод .forEach()",
            "Метод [Symbol.iterator](), возвращающий объект с функцией .next()",
            "Свойство length",
            "Метод .toString()"
          ],
          "correctIndex": 1,
          "explanation": "Согласно спецификации ECMAScript, объект считается итерируемым (Iterable), если он имеет метод с системным символьным ключом [Symbol.iterator](), который возвращает итератор с методом next() -> { value, done }."
        },
        {
          "id": "js3-q4",
          "question": "Что вернет выражение: false ?? 'По умолчанию' и false || 'По умолчанию'?",
          "options": [
            "Оба вернут false",
            "?? вернет false, а || вернет 'По умолчанию'",
            "Оба вернут 'По умолчанию'",
            "?? вернет 'По умолчанию', а || вернет false"
          ],
          "correctIndex": 1,
          "explanation": "Оператор ?? (Nullish Coalescing) проверяет значение исключительно на null и undefined. Поскольку false не является null/undefined, ?? возвращает false. Оператор || проверяет на любое falsy значение (false, 0, '', null, undefined), поэтому возвращает правую часть 'По умолчанию'."
        },
        {
          "id": "js3-q5",
          "question": "Какая алгоритмическая сложность поиска обработчика в паттерне Lookup Table по сравнению с цепочкой из N условий else-if?",
          "options": [
            "O(N) против O(1)",
            "O(1) против O(N)",
            "O(log N) против O(N^2)",
            "Одинаковая сложность"
          ],
          "correctIndex": 1,
          "explanation": "В паттерне Lookup Table доступ к обработчику по ключу объекта (хэш-таблице) выполняется за константное время O(1), в то время как длинная цепочка if-else / switch в худшем случае последовательно проверяет все N условий со сложностью O(N)."
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
          "question": "Какая функция называется чистой (Pure Function)?",
          "options": [
            "Функция, написанная без использования ключевого слова function",
            "Функция, которая при одинаковых аргументах всегда возвращает одинаковый результат и не имеет побочных эффектов (Side Effects)",
            "Функция, которая не содержит комментариев",
            "Функция, выполняющаяся асинхронно"
          ],
          "correctIndex": 1,
          "explanation": "Чистая функция удовлетворяет двум свойствам: детерминированность (одинаковый вход -> одинаковый выход) и отсутствие побочных эффектов (не мутирует аргументы, внешние переменные, DOM и хранилища)."
        },
        {
          "id": "js4-q2",
          "question": "Что произойдёт при вызове функции: function init(mode = 'dark') {}; init(null)?",
          "options": [
            "Переменная mode получит значение 'dark'",
            "Переменная mode получит значение null",
            "Произойдёт ошибка TypeError",
            "Переменная mode станет undefined"
          ],
          "correctIndex": 1,
          "explanation": "Параметры по умолчанию срабатывают ИСКЛЮЧИТЕЛЬНО при передаче undefined (или при отсутствии аргумента). Значение null считается явно переданным значением и перезаписывает дефолт."
        },
        {
          "id": "js4-q3",
          "question": "Что такое функция высшего порядка (Higher-Order Function / HOF)?",
          "options": [
            "Функция, которая выполняется быстрее всех остальных",
            "Функция, которая принимает другие функции в качестве аргументов или возвращает новую функцию",
            "Функция с наивысшим приоритетом в Call Stack",
            "Функция, объявленная на глобальном уровне"
          ],
          "correctIndex": 1,
          "explanation": "HOF (Higher-Order Function) — это функция, которая оперирует другими функциями: принимает их как колбэки (map, filter, reduce) или возвращает новые функции в результате своей работы (фабрики, замыкания, pipe)."
        },
        {
          "id": "js4-q4",
          "question": "В чём главное преимущество паттерна Options Object перед позиционными параметрами функции?",
          "options": [
            "Options Object уменьшает размер JavaScript-файла",
            "Параметры передаются по именам свойств объекта, что исключает ошибки порядка аргументов и позволяет легко задавать дефолты",
            "Options Object запрещает передачу строк",
            "Функция автоматически становится чистой"
          ],
          "correctIndex": 1,
          "explanation": "Options Object ({ a, b, c } = {}) даёт именованные параметры: разработчик видит, какое значение за что отвечает, может передавать их в любом порядке и не обязан передавать null для пропуска параметров."
        },
        {
          "id": "js4-q5",
          "question": "Что делает утилита композиции pipe(f, g, h)(x)?",
          "options": [
            "Вызывает функции параллельно",
            "Последовательно передаёт результат работы функции слева направо: h(g(f(x)))",
            "Удаляет дубликаты из массива",
            "Останавливает выполнение программы"
          ],
          "correctIndex": 1,
          "explanation": "Утилита pipe выстраивает конвейер функций слева направо: сначала выполняется f(x), затем результат передаётся в g, а затем результат g передаётся в h: h(g(f(x)))."
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
          "question": "Что выведет в консоль следующий код: const a = { x: 1 }; const b = a; b.x = 2; console.log(a.x);?",
          "options": [
            "1",
            "2",
            "undefined",
            "TypeError"
          ],
          "correctIndex": 1,
          "explanation": "Объекты в JavaScript передаются по ссылке. Переменные a и b указывают на один и тот же объект в памяти Heap. Мутация b.x = 2 изменяет свойство и для переменной a."
        },
        {
          "id": "js5-q2",
          "question": "Какое ключевое ограничение имеет поверхностное клонирование через spread const copy = { ...user }?",
          "options": [
            "Spread-оператор работает медленнее, чем ручной цикл",
            "Копируются только свойства первого уровня. Все вложенные объекты и массивы копируются как ссылки на старую память",
            "Spread не умеет копировать строковые значения",
            "Spread превращает числа в строки"
          ],
          "correctIndex": 1,
          "explanation": "Spread { ...obj } производит Shallow Copy. Если внутри user есть вложенный объект user.address или массив user.skills, то copy.address будет указывать на тот же адрес памяти, что и в оригинале."
        },
        {
          "id": "js5-q3",
          "question": "Какой нативный метод JavaScript является современным стандартом глубокого клонирования объектов?",
          "options": [
            "Object.clone()",
            "JSON.clone()",
            "structuredClone()",
            "Object.deepAssign()"
          ],
          "correctIndex": 2,
          "explanation": "structuredClone() — это нативный стандарт глубокого клонирования в JS, корректно обрабатывающий вложенные объекты, массивы, Date, Set, Map и циклические ссылки."
        },
        {
          "id": "js5-q4",
          "question": "Почему Object.hasOwn(obj, 'prop') предпочтительнее устаревшего obj.hasOwnProperty('prop')?",
          "options": [
            "Object.hasOwn выполняется в 100 раз быстрее",
            "Object.hasOwn корректно работает на объектах, созданных через Object.create(null) и на объектах, где свойство hasOwnProperty переопределено",
            "Object.hasOwn автоматически создает свойство, если его нет",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "Если объект создан через Object.create(null), у него нет прототипа Object.prototype, и вызов obj.hasOwnProperty() вызовет падение TypeError. Статический метод Object.hasOwn(obj, key) полностью защищен от этого."
        },
        {
          "id": "js5-q5",
          "question": "В чём преимущество метода массива toSorted() из стандарта ES2023 перед классическим sort()?",
          "options": [
            "toSorted() работает только со строками",
            "toSorted() не мутирует исходный массив, а возвращает новый отсортированный массив",
            "toSorted() удаляет дубликаты",
            "toSorted() сортирует асинхронно"
          ],
          "correctIndex": 1,
          "explanation": "Классический метод sort() мутирует исходный массив на месте, что ломает стейт в React. Метод toSorted() является иммутабельным и возвращает новый массив."
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
          "question": "Что произойдет при вызове [].reduce((sum, item) => sum + item) на пустом массиве без передачи initialValue?",
          "options": [
            "Метод вернет 0",
            "Метод выбросит фатальную ошибку TypeError: Reduce of empty array with no initial value",
            "Метод вернет undefined",
            "Метод вернет NaN"
          ],
          "correctIndex": 1,
          "explanation": "Если у массива нет элементов и не задан initialValue, reduce не может инициализировать аккумулятор и выбрасывает исключение TypeError."
        },
        {
          "id": "js6-q2",
          "question": "Чем метод flatMap() превосходит связку .map().flat()?",
          "options": [
            "flatMap работает только с числами",
            "flatMap объединяет маппинг и уплощение за 1 проход, работая быстрее и не создавая промежуточный временный массив в памяти",
            "flatMap удаляет отрицательные числа",
            "Разницы в производительности нет"
          ],
          "correctIndex": 1,
          "explanation": "flatMap() выполняет трансформацию и уплощение за единый проход по массиву, предотвращая создание промежуточного массива в памяти кучи (Heap)."
        },
        {
          "id": "js6-q3",
          "question": "Какое ключевое преимущество имеет метод findLast() стандарта ES2023 перед связкой arr.reverse().find()?",
          "options": [
            "findLast() работает асинхронно",
            "findLast() ищет элемент с конца массива БЕЗ мутации исходного массива (reverse мутирует исходный массив)",
            "findLast() возвращает массив совпадений",
            "findLast() удаляет найденный элемент"
          ],
          "correctIndex": 1,
          "explanation": "Метод reverse() мутирует исходный массив на месте, приводя к скрытым багам. Метод findLast() производит чистый поиск с конца массива без каких-либо побочных эффектов."
        },
        {
          "id": "js6-q4",
          "question": "Почему методы some() и every() работают быстрее, чем filter().length > 0?",
          "options": [
            "some() и every() написаны на языке C++",
            "some() и every() поддерживают short-circuiting: они немедленно останавливают итерацию, как только результат становится очевиден",
            "filter() всегда проверяет типы данных",
            "some() работает в фоновом потоке"
          ],
          "correctIndex": 1,
          "explanation": "Методы some() и every() прекращают обход массива при первом нахождении true (для some) или false (для every), в то время как filter() вынужден обойти абсолютно весь массив до самого конца."
        },
        {
          "id": "js6-q5",
          "question": "Как быстро сгенерировать массив чисел от 1 до 50 без использования цикла for и push?",
          "options": [
            "new Array(50).fill(1..50)",
            "Array.from({ length: 50 }, (_, i) => i + 1)",
            "Array.generate(1, 50)",
            "[1...50]"
          ],
          "correctIndex": 1,
          "explanation": "Array.from({ length: 50 }, (_, i) => i + 1) создает массив из 50 элементов и инициализирует каждый элемент значением его индекса + 1."
        }
      ]
    }
  },
  {
    "id": "javascript-7",
    "moduleId": "javascript",
    "level": 7,
    "title": "DOM и манипуляция элементами",
    "subtitle": "QuerySelector, textContent, classList, createElement и append",
    "description": "Управление страницей: поиск элементов через querySelector / querySelectorAll, чтение и запись textContent, управление классами classList.add/remove/toggle, создание узлов createElement.",
    "estimatedMinutes": 40,
    "difficulty": "intermediate",
    "tags": [
      "JavaScript",
      "DOM",
      "Elements",
      "Manipulation"
    ],
    "theory": {
      "overview": "Document Object Model (DOM) — объектное представление HTML-страницы. С помощью JS можно на лету изменять текст, структуру и стили любых элементов без перезагрузки.",
      "sections": [
        {
          "title": "Поиск и изменение элементов",
          "content": "- `document.querySelector('.card')`: находит **первый** элемент по CSS-селектору.\n- `document.querySelectorAll('.item')`: находит **все** элементы (NodeList).\n- `element.textContent = 'Текст'`: безопасная запись текста (защита от XSS!).\n- `element.classList.add('active')` / `remove()` / `toggle()`: управление классами.\n- `document.createElement('div')` + `parent.appendChild(elem)`: создание новых узлов.",
          "codeExample": {
            "language": "javascript",
            "title": "Манипуляция DOM",
            "code": "const card = document.querySelector('.card');\ncard.classList.toggle('active');\n\nconst newBadge = document.createElement('span');\nnewBadge.className = 'badge';\nnewBadge.textContent = 'Новинка';\ncard.appendChild(newBadge);",
            "explanation": "Динамическое добавление бейджа в карточку."
          }
        }
      ],
      "seniorTips": [
        "Используйте `textContent` вместо `innerHTML`, если вы вставляете текст от пользователя. `innerHTML` уязвим для XSS-атак."
      ],
      "commonMistakes": [
        {
          "bad": "elem.innerHTML = userComment; /* Уязвимость XSS */",
          "good": "elem.textContent = userComment;",
          "reason": "innerHTML выполняет внедренные вредоносные теги <script>."
        }
      ],
      "keyTakeaways": [
        "querySelector находит элемент по CSS-селектору.",
        "classList.toggle переключает классы.",
        "createElement создает новые узлы DOM."
      ]
    },
    "sandbox": {
      "initialHtml": "<div id=\"dom-card\" class=\"card-box\"><h4 id=\"dom-title\">Заголовок</h4><button id=\"btn-dom\">Изменить DOM</button></div>",
      "initialCss": ".card-box { padding: 20px; background: white; border-radius: 12px; text-align: center; border: 1px solid #e2e8f0; }\n.card-box.active { background: #ecfdf5; border-color: #10b981; }\n#btn-dom { margin-top: 10px; padding: 8px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer; }",
      "initialJs": "document.getElementById('btn-dom').addEventListener('click', () => {\n  const card = document.getElementById('dom-card');\n  const title = document.getElementById('dom-title');\n  card.classList.toggle('active');\n  title.textContent = card.classList.contains('active') ? 'Карточка активирована!' : 'Заголовок';\n});",
      "instructions": "Нажмите «Изменить DOM» и проверьте переключение классов и текста."
    },
    "task": {
      "title": "Динамическое добавление элемента",
      "scenario": "Создайте параграф с классом .notice и текстом «Успешно», добавьте его в конец контейнера.",
      "criteria": [
        "Использован createElement",
        "Задан класс и textContent",
        "Элемент добавлен через appendChild"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const p = document.createElement('p');\np.className = 'notice';\np.textContent = 'Успешно!';\ndocument.body.appendChild(p);",
        "explanation": "Динамическое создание и вставка узла в DOM."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j7-q1",
          "question": "Какое свойство безопасно вставляет текст без риска XSS-атак?",
          "options": [
            "innerHTML",
            "textContent",
            "outerHTML",
            "document.write"
          ],
          "correctIndex": 1,
          "explanation": "textContent безопасно экранирует спецсимволы и защищает от XSS."
        }
      ]
    }
  },
  {
    "id": "javascript-8",
    "moduleId": "javascript",
    "level": 8,
    "title": "События в браузере (Events)",
    "subtitle": "AddEventListener, объект Event, всплытие (bubbling) и делегирование событий",
    "description": "Интерактивность: регистрация слушателей addEventListener, объект Event (target vs currentTarget), фазы Bubbling/Capturing, отмена действий preventDefault и паттерн Event Delegation.",
    "estimatedMinutes": 40,
    "difficulty": "intermediate",
    "tags": [
      "JavaScript",
      "Events",
      "Bubbling",
      "Delegation"
    ],
    "theory": {
      "overview": "События (Events) — это сигналы браузера о действиях пользователя: клик мыши (`click`), ввод текста (`input`), отправка формы (`submit`), скролл (`scroll`) или нажатие клавиши (`keydown`).",
      "sections": [
        {
          "title": "addEventListener и всплытие (Bubbling)",
          "content": "- `element.addEventListener('click', (event) => { ... })`.\n- **Объект `event`**:\n  • `event.target`: элемент, на который **фактически кликнули**.\n  • `event.currentTarget`: элемент, на котором **висит обработчик**.\n  • `event.preventDefault()`: отменяет стандартное действие браузера (например, переход по ссылке или перезагрузку формы).\n- **Всплытие (Bubbling)**: событие поднимается от кликнутого элемента вверх по дереву до `document`.\n- **Делегирование событий (Event Delegation)**: один обработчик вешается на родительский список `<ul>` вместо навешивания 1000 обработчиков на каждый `<li>`!",
          "codeExample": {
            "language": "javascript",
            "title": "Делегирование событий",
            "code": "const list = document.querySelector('.todo-list');\n\n// Один обработчик на весь список!\nlist.addEventListener('click', (e) => {\n  if (e.target.matches('.delete-btn')) {\n    const item = e.target.closest('.todo-item');\n    item.remove();\n    console.log('Элемент удален через делегирование');\n  }\n});",
            "explanation": "Делегирование событий экономит память и работает для динамически добавленных элементов."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте делегирование событий для списков и таблиц с динамическими строками."
      ],
      "commonMistakes": [
        {
          "bad": "form.onsubmit = fn; /* Старый синтаксис, перезаписывает другие обработчики */",
          "good": "form.addEventListener('submit', fn);",
          "reason": "addEventListener позволяет навешивать несколько независимых слушателей."
        }
      ],
      "keyTakeaways": [
        "addEventListener регистрирует событие.",
        "event.preventDefault() отменяет дефолтное действие.",
        "Делегирование слушает события на родителе."
      ]
    },
    "sandbox": {
      "initialHtml": "<ul id=\"d-list\"><li data-id=\"1\">Пункт 1 <button class=\"d-btn\">Удалить</button></li><li data-id=\"2\">Пункт 2 <button class=\"d-btn\">Удалить</button></li></ul>",
      "initialCss": "#d-list { list-style: none; padding: 0; }\n#d-list li { display: flex; justify-content: space-between; padding: 8px; background: white; margin-bottom: 6px; border-radius: 6px; }\n.d-btn { background: #ef4444; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; }",
      "initialJs": "document.getElementById('d-list').addEventListener('click', (e) => {\n  if (e.target.classList.contains('d-btn')) {\n    e.target.closest('li').remove();\n  }\n});",
      "instructions": "Кликните «Удалить» на любом пункте списка."
    },
    "task": {
      "title": "Отмена отправки формы",
      "scenario": "Навесьте слушатель submit на форму и отмените перезагрузку страницы через event.preventDefault().",
      "criteria": [
        "Использован addEventListener('submit', ...)",
        "Вызван event.preventDefault()"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const form = document.querySelector('form');\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n  console.log('Отправка формы перехвачена в JS');\n});",
        "explanation": "Отмена стандартного поведения формы."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j8-q1",
          "question": "Какой метод отменяет стандартное действие браузера (например, перезагрузку страницы при submit формы)?",
          "options": [
            "event.stopPropagation()",
            "event.preventDefault()",
            "event.cancel()",
            "return false"
          ],
          "correctIndex": 1,
          "explanation": "event.preventDefault() отменяет действие браузера по умолчанию."
        }
      ]
    }
  },
  {
    "id": "javascript-9",
    "moduleId": "javascript",
    "level": 9,
    "title": "Замыкания (Closures) и область видимости",
    "subtitle": "Scope Chain, Lexical Environment и инкапсуляция состояния",
    "description": "Глубокое понимание языка: как работает лексическое окружение Lexical Environment, область видимости (глобальная, блочная), механизм замыканий и фабрики функций.",
    "estimatedMinutes": 40,
    "difficulty": "advanced",
    "tags": [
      "JavaScript",
      "Closures",
      "Scope",
      "Advanced"
    ],
    "theory": {
      "overview": "Замыкание (Closure) — это способность функции запоминать и иметь доступ к переменным из своего внешнего лексического окружения (Lexical Environment) даже после того, как внешняя функция завершила свое выполнение.",
      "sections": [
        {
          "title": "Как работает замыкание",
          "content": "- Каждая функция в JS при рождении получает ссылку на внешнее лексическое окружение `[[Environment]]`.\n- Когда функция выполняется в другом месте программы, она всё равно сохраняет доступ к своим исходным внешним переменным.\n- **Применение:** инкапсуляция приватных переменных, фабричные функции, мемоизация и кастомные React-хуки (например, `useState`).",
          "codeExample": {
            "language": "javascript",
            "title": "Фабрика счетчиков на замыкании",
            "code": "function createCounter(initialValue = 0) {\n  let count = initialValue; // Приватная переменная!\n  \n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getValue: () => count\n  };\n}\n\nconst counter1 = createCounter(10);\nconsole.log(counter1.increment()); // 11\nconsole.log(counter1.increment()); // 12\nconsole.log(counter1.getValue());  // 12 (count недоступен напрямую извне!)",
            "explanation": "Переменная count полностью изолирована внутри замыкания."
          }
        }
      ],
      "seniorTips": [
        "Используйте замыкания для создания приватного состояния модулей и утилитарных функций."
      ],
      "commonMistakes": [
        {
          "bad": "let globalCounter = 0; /* Глобальная переменная, доступная для перезаписи любому скрипту */",
          "good": "const createCounter = () => { let count = 0; return () => ++count; };",
          "reason": "Глобальные переменные загрязняют window и приводят к конфликтам имен."
        }
      ],
      "keyTakeaways": [
        "Замыкание помнит переменные из места своего создания.",
        "Замыкания обеспечивают приватность данных."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"closure-demo\"><h3>Счетчик на замыкании</h3><button id=\"c-inc\">+1</button> <span id=\"c-val\">0</span></div>",
      "initialCss": ".closure-demo { padding: 20px; background: white; border-radius: 12px; }\n#c-inc { padding: 8px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer; }\n#c-val { font-size: 20px; font-weight: bold; margin-left: 10px; color: #4f46e5; }",
      "initialJs": "const createCounter = () => {\n  let val = 0;\n  return () => ++val;\n};\nconst inc = createCounter();\ndocument.getElementById('c-inc').addEventListener('click', () => {\n  document.getElementById('c-val').textContent = inc();\n});",
      "instructions": "Кликайте на кнопку +1 и наблюдайте работу изолированного счетчика."
    },
    "task": {
      "title": "Генератор префиксов на замыкании",
      "scenario": "Напишите функцию createGreeter(greeting), которая возвращает функцию, принимающую имя.",
      "criteria": [
        "Создана функция, возвращающая другую функцию через замыкание"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const createGreeter = (greeting) => (name) => `${greeting}, ${name}!`;\nconst sayHello = createGreeter('Привет');\nconsole.log(sayHello('Алексей')); // 'Привет, Алексей!'",
        "explanation": "Классический пример каррирования на замыканиях."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j9-q1",
          "question": "Что такое замыкание (Closure) в JavaScript?",
          "options": [
            "Ошибка переполнения стека",
            "Комбинация функции и лексического окружения, в котором она была объявлена",
            "Завершение программы",
            "Специальный цикл"
          ],
          "correctIndex": 1,
          "explanation": "Замыкание — это функция вместе со всеми внешними переменными, которые ей доступны."
        }
      ]
    }
  },
  {
    "id": "javascript-10",
    "moduleId": "javascript",
    "level": 10,
    "title": "Контекст выполнения (this) и прототипы",
    "subtitle": "Ключевое слово this, call, apply, bind и прототипное наследование",
    "description": "Понимание контекста: как определяется this при вызове функции, потеря контекста в колбэках, явная привязка через bind, call, apply и цепочка прототипов Prototype Chain.",
    "estimatedMinutes": 40,
    "difficulty": "advanced",
    "tags": [
      "JavaScript",
      "This",
      "Prototypes",
      "OOP"
    ],
    "theory": {
      "overview": "Значение `this` в JavaScript вычисляется **в момент вызова функции** (Runtime Binding), а не в момент ее объявления. Понимание правил определения `this` — один из главных критериев Middle-разработчика.",
      "sections": [
        {
          "title": "Правила определения this и методы привязки",
          "content": "- **Метод объекта**: `obj.method()` -> `this` указывает на `obj`.\n- **Простой вызов функции**: `fn()` -> `this` равен `undefined` в строгом режиме (или `window`).\n- **Стрелочные функции**: не имеют своего `this`, берут его из внешнего лексического окружения!\n- **Явная привязка**:\n  • `fn.call(context, arg1, arg2)`: вызывает функцию с указанным `this`.\n  • `fn.apply(context, [args])`: передает аргументы массивом.\n  • `fn.bind(context)`: возвращает **новую функцию** с навсегда привязанным `this`.",
          "codeExample": {
            "language": "javascript",
            "title": "Потеря и привязка контекста",
            "code": "const user = {\n  name: 'Ольга',\n  greet() {\n    console.log(`Привет, я ${this.name}`);\n  }\n};\n\n// Потеря контекста при передаче в setTimeout:\nsetTimeout(user.greet, 100); // 'Привет, я undefined'\n\n// Решение через .bind():\nsetTimeout(user.greet.bind(user), 100); // 'Привет, я Ольга'\n\n// Решение через стрелочную функцию:\nsetTimeout(() => user.greet(), 100);   // 'Привет, я Ольга'",
            "explanation": "bind(user) жестко фиксирует контекст для отложенного вызова."
          }
        }
      ],
      "seniorTips": [
        "Внутри колбэков и обработчиков событий передавайте стрелочные функции `() => this.method()`, чтобы не терять контекст класса."
      ],
      "commonMistakes": [
        {
          "bad": "setTimeout(this.handleClick, 1000); /* Потеря this */",
          "good": "setTimeout(() => this.handleClick(), 1000);",
          "reason": "Стрелочная функция сохраняет контекст родительского класса."
        }
      ],
      "keyTakeaways": [
        "this определяется в момент вызова.",
        "bind() возвращает функцию с привязанным контекстом.",
        "Стрелочные функции берут this снаружи."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"this-demo\"><h3>Контекст this</h3><button id=\"btn-this\">Вызвать метод с bind</button></div>",
      "initialCss": ".this-demo { padding: 20px; background: white; border-radius: 12px; text-align: center; }",
      "initialJs": "const dev = {\n  name: 'Анна',\n  show() { alert(`Разработчик: ${this.name}`); }\n};\ndocument.getElementById('btn-this').addEventListener('click', dev.show.bind(dev));",
      "instructions": "Нажмите кнопку и проверьте привязанный контекст объекта dev."
    },
    "task": {
      "title": "Привязка контекста через bind",
      "scenario": "Привяжите контекст объекта к функции с помощью метода .bind().",
      "criteria": [
        "Использован метод .bind()"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const car = { brand: 'Tesla' };\nfunction showBrand() { return `Авто: ${this.brand}`; }\nconst bound = showBrand.bind(car);\nconsole.log(bound()); // 'Авто: Tesla'",
        "explanation": "Корректное использование .bind()."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j10-q1",
          "question": "Что возвращает вызов метода fn.bind(context)?",
          "options": [
            "Результат выполнения функции",
            "Новую функцию с зафиксированным контекстом this",
            "undefined",
            "true"
          ],
          "correctIndex": 1,
          "explanation": "bind() создает и возвращает новую функцию с жестко привязанным контекстом this."
        }
      ]
    }
  },
  {
    "id": "javascript-11",
    "moduleId": "javascript",
    "level": 11,
    "title": "Классы в ES6+ (ООП)",
    "subtitle": "Class, constructor, методы, static, getters/setters, наследование extends и super",
    "description": "Объектно-ориентированное программирование: синтаксический сахар class над прототипами, метод constructor, инкапсуляция get/set, статические методы static и наследование через extends/super.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "JavaScript",
      "Classes",
      "OOP",
      "ES6"
    ],
    "theory": {
      "overview": "Классы в ES6+ предоставляют элегантный и удобный синтаксис для объектно-ориентированного программирования, построения моделей данных и сервисов.",
      "sections": [
        {
          "title": "Синтаксис классов и наследование",
          "content": "- `class User { constructor(name) { this.name = name; } }`.\n- `extends` — наследование от базового класса.\n- `super()` — вызов конструктора родительского класса (обязателен на первой строчке конструктора наследника!).\n- `static` — метод принадлежит самому классу, а не его экземплярам (`User.compareUsers(...)`).\n- `get / set` — геттеры и сеттеры для контролируемого доступа к полям.",
          "codeExample": {
            "language": "javascript",
            "title": "Класс и наследование",
            "code": "class Employee {\n  constructor(name, salary) {\n    this.name = name;\n    this.salary = salary;\n  }\n  getInfo() {\n    return `${this.name} — зарплата: ${this.salary} ₽`;\n  }\n}\n\nclass Developer extends Employee {\n  constructor(name, salary, tech) {\n    super(name, salary); // Вызов конструктора Employee\n    this.tech = tech;\n  }\n  getInfo() {\n    return `${super.getInfo()} (Стек: ${this.tech})`;\n  }\n}\n\nconst dev = new Developer('Максим', 180000, 'React, TS');\nconsole.log(dev.getInfo());",
            "explanation": "extends и super реализуют чистое полиморфное наследование."
          }
        }
      ],
      "seniorTips": [
        "Используйте классы для создания сервисов работы с API (например, `ApiService`, `StorageManager`)."
      ],
      "commonMistakes": [
        {
          "bad": "class Dev extends User { constructor() { /* Забыт super() -> ReferenceError! */ } }",
          "good": "class Dev extends User { constructor(name) { super(name); } }",
          "reason": "В производных классах вызов super() строго обязателен перед использованием this."
        }
      ],
      "keyTakeaways": [
        "class создает шаблон объектов.",
        "extends и super реализуют наследование.",
        "static методы вызываются через имя класса."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"cls-demo\"><h3>Классы ES6</h3><p id=\"cls-out\"></p></div>",
      "initialCss": ".cls-demo { padding: 20px; background: white; border-radius: 12px; }",
      "initialJs": "class Product {\n  constructor(name, price) { this.name = name; this.price = price; }\n  format() { return `${this.name} стоит ${this.price} ₽`; }\n}\nconst p = new Product('Монитор 4K', 45000);\ndocument.getElementById('cls-out').textContent = p.format();",
      "instructions": "Посмотрите создание экземпляра класса через new Product()."
    },
    "task": {
      "title": "Создание класса с наследованием",
      "scenario": "Создайте класс Vehicle и производный класс Car с вызовом super.",
      "criteria": [
        "Созданы классы с extends и super"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "class Vehicle {\n  constructor(brand) { this.brand = brand; }\n}\nclass Car extends Vehicle {\n  constructor(brand, model) {\n    super(brand);\n    this.model = model;\n  }\n}\nconst c = new Car('Audi', 'RS6');\nconsole.log(`${c.brand} ${c.model}`);",
        "explanation": "Наследование классов ES6."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j11-q1",
          "question": "Какое ключевое слово вызывает конструктор родительского класса?",
          "options": [
            "parent()",
            "super()",
            "base()",
            "this()"
          ],
          "correctIndex": 1,
          "explanation": "super() вызывает конструктор родительского класса."
        }
      ]
    }
  },
  {
    "id": "javascript-12",
    "moduleId": "javascript",
    "level": 12,
    "title": "Асинхронный JS: Promises, Async/Await",
    "subtitle": "Event Loop, Call Stack, Microtasks, промисы и async/await",
    "description": "Асинхронное программирование: архитектура Event Loop (Call Stack, Task Queue, Microtasks), состояния промисов pending/fulfilled/rejected, синтаксис async/await, try/catch и Promise.all.",
    "estimatedMinutes": 45,
    "difficulty": "advanced",
    "tags": [
      "JavaScript",
      "Async",
      "Promises",
      "AsyncAwait",
      "EventLoop"
    ],
    "theory": {
      "overview": "JavaScript — однопоточный язык, но благодаря механизму **Event Loop** он может выполнять неблокирующие асинхронные операции: сетевые запросы к API, таймеры и чтение файлов.",
      "sections": [
        {
          "title": "Event Loop, Promises и async/await",
          "content": "- **Call Stack**: стек синхронного выполнения функций.\n- **Microtask Queue (Микротаски)**: промисы (`Promise.then`, `queueMicrotask`) имеют **наивысший приоритет** перед макротасками (`setTimeout`)!\n- **Promise**: объект отложенного результата со статусами `pending` -> `fulfilled` или `rejected`.\n- **async/await**: синтаксический сахар над промисами, делающий асинхронный код линейным и понятным.\n- **Обработка ошибок**: блоки `try { const data = await fetch(...); } catch (err) { ... }`.",
          "codeExample": {
            "language": "javascript",
            "title": "Асинхронная функция с async/await",
            "code": "const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\nasync function loadUserData() {\n  try {\n    console.log('Загрузка пользователя...');\n    await delay(1000); // Имитация задержки сети 1 сек\n    return { id: 1, name: 'Елена' };\n  } catch (error) {\n    console.error('Ошибка загрузки:', error);\n  }\n}\n\nloadUserData().then(user => console.log('Готово:', user));",
            "explanation": "async/await позволяет писать асинхронный код так же просто, как синхронный."
          }
        }
      ],
      "seniorTips": [
        "Всегда оборачивайте вызовы `await` в блок `try...catch`, чтобы непредвиденные ошибки сети не роняли всё приложение."
      ],
      "commonMistakes": [
        {
          "bad": "async function getData() { const res = await fetch('/api'); } /* Без обработки ошибок */",
          "good": "async function getData() { try { const res = await fetch('/api'); } catch(e) { console.error(e); } }",
          "reason": "Непойманный rejected промис вызывает UnhandledPromiseRejection."
        }
      ],
      "keyTakeaways": [
        "Event Loop обеспечивает неблокирующий асинхронный ввод/вывод.",
        "Микротаски (промисы) выполняются раньше таймеров.",
        "async/await делает асинхронный код читаемым."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"async-demo\"><h3>Асинхронный лоадер</h3><button id=\"btn-async\">Загрузить с задержкой</button><p id=\"async-status\"></p></div>",
      "initialCss": ".async-demo { padding: 20px; background: white; border-radius: 12px; text-align: center; }\n#async-status { margin-top: 10px; font-weight: bold; color: #4f46e5; }",
      "initialJs": "document.getElementById('btn-async').addEventListener('click', async () => {\n  const status = document.getElementById('async-status');\n  status.textContent = '⏳ Загрузка (1.5 сек)...';\n  await new Promise(r => setTimeout(r, 1500));\n  status.textContent = '✅ Данные успешно получены через async/await!';\n});",
      "instructions": "Нажмите кнопку и проверьте асинхронную задержку через await Promise."
    },
    "task": {
      "title": "Параллельная загрузка через Promise.all",
      "scenario": "Запустите два промиса параллельно через Promise.all и выведите объединенный результат.",
      "criteria": [
        "Использован Promise.all([p1, p2])",
        "Обработан массив результатов"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const p1 = Promise.resolve('Данные пользователя');\nconst p2 = Promise.resolve('Список заказов');\nPromise.all([p1, p2]).then(([user, orders]) => {\n  console.log(`Получено: ${user} и ${orders}`);\n});",
        "explanation": "Параллельное выполнение асинхронных задач."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j12-q1",
          "question": "Что возвращает любая функция, объявленная с ключевым словом async?",
          "options": [
            "Строку",
            "Promise",
            "Число",
            "Ошибку"
          ],
          "correctIndex": 1,
          "explanation": "Любая async функция автоматически оборачивает возвращаемое значение в Promise."
        }
      ]
    }
  },
  {
    "id": "javascript-13",
    "moduleId": "javascript",
    "level": 13,
    "title": "Работа с сетью (Fetch API) и JSON",
    "subtitle": "HTTP запросы, методы GET/POST, response.json() и обработка ошибок",
    "description": "Связь с сервером: HTTP-запросы через fetch(url), проверка response.ok, сериализация и парсинг JSON (JSON.parse / JSON.stringify), отправка заголовков headers и POST-запросов.",
    "estimatedMinutes": 40,
    "difficulty": "intermediate",
    "tags": [
      "JavaScript",
      "Fetch",
      "API",
      "HTTP",
      "JSON"
    ],
    "theory": {
      "overview": "Fetch API — стандартный браузерный интерфейс для отправки сетевых HTTP-запросов (AJAX) к REST API серверам без сторонних библиотек.",
      "sections": [
        {
          "title": "GET и POST запросы через Fetch API",
          "content": "- `fetch(url)`: по умолчанию отправляет `GET` запрос.\n- **Проверка статуса**: `if (!response.ok) throw new Error(...)` (**Важно:** fetch НЕ отклоняет промис при ошибках 404 или 500!).\n- `const data = await response.json()`: парсит JSON-тело ответа в JS-объект.\n- **POST запрос**: передача `method: 'POST'`, `headers: { 'Content-Type': 'application/json' }` и `body: JSON.stringify(payload)`.",
          "codeExample": {
            "language": "javascript",
            "title": "Эталонная функция GET запроса",
            "code": "async function fetchUsers() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');\n    \n    if (!response.ok) {\n      throw new Error(`HTTP ошибка! Статус: ${response.status}`);\n    }\n    \n    const user = await response.json();\n    console.log('Пользователь получен:', user.name);\n    return user;\n  } catch (error) {\n    console.error('Сетевой сбой:', error.message);\n  }\n}",
            "explanation": "Полная цепочка обработки: fetch -> response.ok -> response.json -> catch."
          }
        }
      ],
      "seniorTips": [
        "Помните: fetch отклоняет промис (reject) ТОЛЬКО при физическом разрыве сети (DNS сбой, оффлайн). При HTTP ошибках 404 и 500 промис успешно резолвится, поэтому проверка `response.ok` строго обязательна!"
      ],
      "commonMistakes": [
        {
          "bad": "const res = await fetch('/api'); const data = await res.json(); /* Без проверки response.ok */",
          "good": "if (!res.ok) throw new Error(res.statusText);",
          "reason": "Без проверки response.ok при 404 парсинг JSON упадет с синтаксической ошибкой."
        }
      ],
      "keyTakeaways": [
        "fetch отправляет асинхронный HTTP-запрос.",
        "Проверка response.ok обязательна для статусов 200-299.",
        "JSON.stringify сериализует в строку."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"fetch-demo\"><h3>Fetch API Demo</h3><button id=\"btn-fetch\">Запросить пользователя</button><pre id=\"fetch-res\"></pre></div>",
      "initialCss": ".fetch-demo { padding: 20px; background: white; border-radius: 12px; }\n#fetch-res { margin-top: 10px; background: #f1f5f9; padding: 12px; border-radius: 6px; font-size: 12px; }",
      "initialJs": "document.getElementById('btn-fetch').addEventListener('click', async () => {\n  const out = document.getElementById('fetch-res');\n  out.textContent = 'Загрузка с публичного API...';\n  try {\n    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n    const data = await res.json();\n    out.textContent = JSON.stringify(data, null, 2);\n  } catch(e) {\n    out.textContent = 'Ошибка: ' + e.message;\n  }\n});",
      "instructions": "Нажмите кнопку для отправки реального сетевого GET запроса."
    },
    "task": {
      "title": "Отправка POST запроса через fetch",
      "scenario": "Напишите функцию отправки POST запроса с объектом данных в формате JSON.",
      "criteria": [
        "Указан method: 'POST'",
        "Заданы headers Content-Type: application/json",
        "Тело сериализовано через JSON.stringify"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "async function sendData(url, data) {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(data)\n  });\n  return response.json();\n}",
        "explanation": "Стандартная отправка POST запроса."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j13-q1",
          "question": "Отклоняет ли fetch() промис при HTTP статусе 404 (Not Found)?",
          "options": [
            "Да, сразу переходит в catch",
            "Нет, промис успешно резолвится, статус нужно проверять через response.ok",
            "Браузер зависает",
            "Выбрасывает alert"
          ],
          "correctIndex": 1,
          "explanation": "fetch отклоняет промис только при сбое сети. Статусы 404 и 500 требуют проверки response.ok."
        }
      ]
    }
  },
  {
    "id": "javascript-14",
    "moduleId": "javascript",
    "level": 14,
    "title": "WebAPI, localStorage и WebSocket",
    "subtitle": "LocalStorage, sessionStorage, Geolocation, IntersectionObserver и WebSockets",
    "description": "Продвинутые браузерные API: сохранение данных в localStorage/sessionStorage, отслеживание видимости элементов через IntersectionObserver и двусторонняя связь WebSocket.",
    "estimatedMinutes": 40,
    "difficulty": "advanced",
    "tags": [
      "JavaScript",
      "WebAPI",
      "LocalStorage",
      "WebSocket",
      "IntersectionObserver"
    ],
    "theory": {
      "overview": "Современный браузер — это полноценная операционная система с богатым набором Web API для хранения данных, геолокации, ленивой загрузки и сокет-соединений.",
      "sections": [
        {
          "title": "localStorage и IntersectionObserver",
          "content": "- **localStorage**: постоянное клиентское хранилище ключ-значение (до 5–10 МБ). Данные сохраняются после перезагрузки браузера.\n  • `localStorage.setItem('theme', 'dark')`\n  • `localStorage.getItem('theme')`\n  • `localStorage.removeItem('theme')`\n- **IntersectionObserver**: высокопроизводительный API для отслеживания момента, когда элемент попадает в зону видимости экрана (идеален для бесконечного скролла и ленивой загрузки картинок без тормозов!).\n- **WebSocket**: протокол постоянного полнодуплексного соединения для онлайн-чатов и котировок (`const ws = new WebSocket('wss://...')`).",
          "codeExample": {
            "language": "javascript",
            "title": "Работа с localStorage для сохранения темы",
            "code": "// Сохранение объекта в localStorage через JSON\nconst settings = { theme: 'dark', fontSize: 16 };\nlocalStorage.setItem('user_settings', JSON.stringify(settings));\n\n// Чтение с безопасным парсингом\nconst saved = localStorage.getItem('user_settings');\nif (saved) {\n  const parsed = JSON.parse(saved);\n  console.log('Тема:', parsed.theme); // 'dark'\n}",
            "explanation": "Объекты обязательно сериализуются в JSON-строку перед сохранением в localStorage."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте `try...catch` вокруг `JSON.parse(localStorage.getItem(...))`, так как поврежденные данные в хранилище вызовут фатальную ошибку приложения."
      ],
      "commonMistakes": [
        {
          "bad": "localStorage.setItem('user', { id: 1 }); /* Сохранит '[object Object]'! */",
          "good": "localStorage.setItem('user', JSON.stringify({ id: 1 }));",
          "reason": "localStorage сохраняет ТОЛЬКО строки. Объекты нужно превращать в JSON."
        }
      ],
      "keyTakeaways": [
        "localStorage сохраняет данные навсегда, sessionStorage — до закрытия вкладки.",
        "IntersectionObserver заменяет тяжелый scroll-слушатель.",
        "WebSocket обеспечивает связь в реальном времени."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"store-demo\"><h3>localStorage Демо</h3><input id=\"store-inp\" placeholder=\"Введите заметку\"><button id=\"btn-store\">Сохранить</button><p id=\"store-val\"></p></div>",
      "initialCss": ".store-demo { padding: 20px; background: white; border-radius: 12px; }\n#store-inp { padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; }\n#btn-store { padding: 8px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; margin-left: 6px; cursor: pointer; }\n#store-val { margin-top: 10px; font-weight: bold; color: #10b981; }",
      "initialJs": "const inp = document.getElementById('store-inp');\nconst out = document.getElementById('store-val');\nout.textContent = 'Сохранено: ' + (localStorage.getItem('my_note') || 'пусто');\ndocument.getElementById('btn-store').addEventListener('click', () => {\n  localStorage.setItem('my_note', inp.value);\n  out.textContent = 'Сохранено: ' + inp.value;\n});",
      "instructions": "Введите текст, нажмите «Сохранить» — данные сохранятся в браузере."
    },
    "task": {
      "title": "Сохранение настроек в localStorage",
      "scenario": "Напишите функцию saveTheme(themeName), сохраняющую тему в localStorage.",
      "criteria": [
        "Использован метод localStorage.setItem"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "function saveTheme(theme) {\n  localStorage.setItem('app_theme', theme);\n  console.log(`Тема ${theme} сохранена`);\n}\nsaveTheme('dark');",
        "explanation": "Клиентское сохранение состояния."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j14-q1",
          "question": "В каком формате данные сохраняются в localStorage?",
          "options": [
            "В бинарном",
            "Исключительно в виде строк (String)",
            "В виде объектов",
            "В XML"
          ],
          "correctIndex": 1,
          "explanation": "localStorage принимает только строковые значения. Объекты преобразуются через JSON.stringify."
        }
      ]
    }
  }
];
