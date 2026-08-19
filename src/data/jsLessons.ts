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
    "title": "Типы данных и операторы",
    "subtitle": "7 примитивов, Object, typeof, строгое сравнение === и nullish coalescing ??",
    "description": "Система типов: String, Number, BigInt, Boolean, Symbol, null, undefined и Object, оператор typeof, строгое сравнение === vs == и операторы &&, ||, ??.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "JavaScript",
      "Types",
      "Operators",
      "Coercion"
    ],
    "theory": {
      "overview": "В JavaScript динамическая типизация: переменная может хранить данные любого типа. В языке существует 8 типов данных: 7 примитивов и сложный тип Object.",
      "sections": [
        {
          "title": "7 примитивов и Object",
          "content": "- Примитивы: `string`, `number`, `bigint`, `boolean`, `null`, `undefined`, `symbol`.\n- `===`: строгое сравнение без приведения типов.\n- `??`: nullish coalescing (возвращает правое значение только для null / undefined).",
          "codeExample": {
            "language": "javascript",
            "title": "Сравнение и оператор ??",
            "code": "const count = 0;\nconst val1 = count || 10; // 10 (ошибка, 0 посчитан ложным)\nconst val2 = count ?? 10; // 0 (правильно!)\nconsole.log(typeof 42); // 'number'",
            "explanation": "Оператор ?? корректно работает с нулями."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте строгое равенство `===` вместо `==`."
      ],
      "commonMistakes": [
        {
          "bad": "if (userId == 5)",
          "good": "if (userId === 5)",
          "reason": "Нестрогое сравнение == неявно приводит типы, порождая баги."
        }
      ],
      "keyTakeaways": [
        "В JS 7 примитивов и тип Object.",
        "=== сравнивает значение и тип.",
        "?? защищает значение 0."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"type-demo\"><h3>Проверка типов</h3><button id=\"btn-type\">Проверить typeof</button><pre id=\"type-log\"></pre></div>",
      "initialCss": ".type-demo { padding: 20px; background: white; border-radius: 12px; }\n#type-log { margin-top: 10px; background: #f8fafc; padding: 12px; border-radius: 6px; font-family: monospace; }",
      "initialJs": "document.getElementById('btn-type').addEventListener('click', () => {\n  const log = document.getElementById('type-log');\n  log.textContent = `typeof 42: ${typeof 42}\ntypeof 'text': ${typeof 'text'}\ntypeof true: ${typeof true}`;\n});",
      "instructions": "Нажмите кнопку для просмотра работы оператора typeof."
    },
    "task": {
      "title": "Безопасная установка настроек через ??",
      "scenario": "Напишите функцию, возвращающую значение по умолчанию через оператор ??.",
      "criteria": [
        "Использован оператор ??"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте современные стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "function getPort(customPort) {\n  return customPort ?? 3000;\n}\nconsole.log(getPort(8080)); // 8080\nconsole.log(getPort(null)); // 3000",
        "explanation": "Оператор ?? надежно подставляет дефолтные значения."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j2-q1",
          "question": "Что вернет выражение (0 ?? 50)?",
          "options": [
            "50",
            "0",
            "null",
            "NaN"
          ],
          "correctIndex": 1,
          "explanation": "Оператор ?? возвращает правый операнд только для null и undefined. Число 0 сохраняется."
        }
      ]
    }
  },
  {
    "id": "javascript-3",
    "moduleId": "javascript",
    "level": 3,
    "title": "Управляющие конструкции",
    "subtitle": "If/else, тернарный оператор ? :, switch/case и циклы for/while/for..of",
    "description": "Логика и алгоритмы: ветвление if/else, тернарный оператор для условий, switch/case, циклы for, while и современный for..of.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "JavaScript",
      "Logic",
      "Loops"
    ],
    "theory": {
      "overview": "Управляющие конструкции задают порядок выполнения инструкций и обрабатывают наборы данных в циклах.",
      "sections": [
        {
          "title": "Ветвление и циклы",
          "content": "- `if/else`, тернарный `const status = ok ? 'Да' : 'Нет';`.\n- `for..of`: лучший цикл для обхода массивов.",
          "codeExample": {
            "language": "javascript",
            "title": "Тернарный оператор и for..of",
            "code": "const role = 'admin';\nconst access = role === 'admin' ? 'Полный' : 'Чтение';\nconst skills = ['HTML', 'CSS', 'JS'];\nfor (const s of skills) console.log(s);",
            "explanation": "for..of обходит массив."
          }
        }
      ],
      "seniorTips": [
        "Используйте for..of для перебора массивов."
      ],
      "commonMistakes": [
        {
          "bad": "let msg; if (ok) msg = 'Да'; else msg = 'Нет';",
          "good": "const msg = ok ? 'Да' : 'Нет';",
          "reason": "Тернарный оператор позволяет объявить const."
        }
      ],
      "keyTakeaways": [
        "Тернарный оператор компактно вычисляет значение.",
        "for..of перебирает элементы массива."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"loop-demo\"><h3>Список</h3><ul id=\"skill-ul\"></ul></div>",
      "initialCss": ".loop-demo { padding: 20px; background: white; border-radius: 12px; }\n#skill-ul li { color: #4f46e5; font-weight: bold; }",
      "initialJs": "const list = document.getElementById('skill-ul');\nfor (const item of ['HTML5', 'CSS3', 'JavaScript']) {\n  const li = document.createElement('li');\n  li.textContent = item;\n  list.appendChild(li);\n}",
      "instructions": "Посмотрите добавление элементов через for..of."
    },
    "task": {
      "title": "Фильтрация чисел через цикл",
      "scenario": "Напишите цикл for..of, суммирующий положительные числа.",
      "criteria": [
        "Использован цикл for..of"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте современные стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const numbers = [10, -5, 20, -30, 15];\nlet sum = 0;\nfor (const num of numbers) {\n  if (num > 0) sum += num;\n}\nconsole.log('Сумма:', sum); // 45",
        "explanation": "Корректный обход и агрегация данных."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j3-q1",
          "question": "Какой цикл рекомендуется для обхода массива?",
          "options": [
            "for..in",
            "for..of",
            "goto",
            "loop"
          ],
          "correctIndex": 1,
          "explanation": "for..of перебирает значения элементов массива."
        }
      ]
    }
  },
  {
    "id": "javascript-4",
    "moduleId": "javascript",
    "level": 4,
    "title": "Функции: Declaration, Expression, Arrow",
    "subtitle": "Стрелочные функции, параметры по умолчанию, rest-параметры и чистые функции",
    "description": "Фундамент функционального программирования: Function Declaration vs Expression, стрелочные функции () => {}, лексический this, rest ...args и чистые функции.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "JavaScript",
      "Functions",
      "ArrowFunctions"
    ],
    "theory": {
      "overview": "Функции — главные строительные блоки программ в JavaScript.",
      "sections": [
        {
          "title": "Стрелочные функции",
          "content": "- `const sum = (a, b) => a + b;`\n- Не имеют собственного `this` (берут из внешнего контекста).\n- Параметры по умолчанию: `(name = 'Гость') => ...`\n- Rest: `(...args) => ...`",
          "codeExample": {
            "language": "javascript",
            "title": "Стрелочная функция",
            "code": "const multiply = (x, y = 2) => x * y;\nconsole.log(multiply(5)); // 10",
            "explanation": "Краткий синтаксис стрелочной функции."
          }
        }
      ],
      "seniorTips": [
        "Пишите чистые функции (Pure Functions) без побочных эффектов."
      ],
      "commonMistakes": [
        {
          "bad": "function add(a, b) { window.total = a + b; }",
          "good": "const add = (a, b) => a + b;",
          "reason": "Чистые функции легко тестировать."
        }
      ],
      "keyTakeaways": [
        "Стрелочные функции не имеют своего this.",
        "Rest собирает аргументы в массив."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"fn-demo\"><h3>Калькулятор</h3><p>5 * 8 = <strong id=\"fn-res\"></strong></p></div>",
      "initialCss": ".fn-demo { padding: 20px; background: white; border-radius: 12px; }\n#fn-res { color: #4f46e5; font-size: 20px; }",
      "initialJs": "const multiply = (a, b) => a * b;\ndocument.getElementById('fn-res').textContent = multiply(5, 8);",
      "instructions": "Посмотрите вычисление результата."
    },
    "task": {
      "title": "Функция форматирования цены",
      "scenario": "Напишите стрелочную функцию formatPrice(amount, currency = '₽').",
      "criteria": [
        "Создана стрелочная функция с параметром по умолчанию"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте современные стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const formatPrice = (amount, currency = '₽') => `${amount.toLocaleString('ru-RU')} ${currency}`;\nconsole.log(formatPrice(15000)); // '15 000 ₽'",
        "explanation": "Стрелочная функция с параметром по умолчанию."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j4-q1",
          "question": "Чем стрелочные функции отличаются от обычных?",
          "options": [
            "Работают медленнее",
            "Не имеют собственного this",
            "Не возвращают значения",
            "Ничем"
          ],
          "correctIndex": 1,
          "explanation": "Стрелочные функции не создают собственного контекста this."
        }
      ]
    }
  },
  {
    "id": "javascript-5",
    "moduleId": "javascript",
    "level": 5,
    "title": "Объекты и массивы: Базовые операции",
    "subtitle": "Литералы, деструктуризация, spread-оператор и иммутабельность",
    "description": "Хранение структур данных: свойства объектов, деструктуризация { name, age } и [first, second], оператор расширения spread (...), методы slice и splice.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "JavaScript",
      "Objects",
      "Arrays",
      "Spread"
    ],
    "theory": {
      "overview": "Объекты и массивы — основные структуры данных в JavaScript.",
      "sections": [
        {
          "title": "Деструктуризация и Spread",
          "content": "- Деструктуризация: `const { name, role } = user;`\n- Spread: `const copy = { ...user, active: true };` (иммутабельное обновление).",
          "codeExample": {
            "language": "javascript",
            "title": "Spread копирование",
            "code": "const user = { name: 'Алексей', role: 'Intern' };\nconst updated = { ...user, role: 'Senior' };\nconsole.log(updated);",
            "explanation": "Создание нового объекта без мутации оригинала."
          }
        }
      ],
      "seniorTips": [
        "В React всегда используйте иммутабельное обновление через { ...obj }."
      ],
      "commonMistakes": [
        {
          "bad": "user.role = 'Admin'; /* Мутация */",
          "good": "const updated = { ...user, role: 'Admin' };",
          "reason": "Мутация ломает реактивность."
        }
      ],
      "keyTakeaways": [
        "Деструктуризация извлекает поля в переменные.",
        "Spread создает поверхностную копию."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"obj-demo\"><h3>Профиль</h3><p id=\"obj-info\"></p></div>",
      "initialCss": ".obj-demo { padding: 20px; background: white; border-radius: 12px; }",
      "initialJs": "const intern = { name: 'Иван', score: 95 };\nconst { name, score } = intern;\ndocument.getElementById('obj-info').textContent = `${name} — ${score} баллов`;",
      "instructions": "Посмотрите работу деструктуризации."
    },
    "task": {
      "title": "Объединение массивов",
      "scenario": "Объедините два массива через spread-оператор.",
      "criteria": [
        "Использован spread [...arr1, ...arr2]"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте современные стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const a = ['HTML', 'CSS'];\nconst b = ['JS', 'React'];\nconst all = [...a, ...b];\nconsole.log(all);",
        "explanation": "Иммутабельное объединение."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j5-q1",
          "question": "Какой оператор создает поверхностную копию?",
          "options": [
            "Spread (...)",
            "&&",
            "~",
            "->"
          ],
          "correctIndex": 0,
          "explanation": "Spread-оператор (...) копирует свойства объекта/массива."
        }
      ]
    }
  },
  {
    "id": "javascript-6",
    "moduleId": "javascript",
    "level": 6,
    "title": "Продвинутая работа с массивами",
    "subtitle": "Функциональные методы map, filter, reduce, find, some, every и sort",
    "description": "Сердце современного JS: трансформация через map, фильтрация через filter, агрегация через reduce, поиск find, проверка условий some/every и сортировка sort.",
    "estimatedMinutes": 40,
    "difficulty": "intermediate",
    "tags": [
      "JavaScript",
      "Arrays",
      "FunctionalProgramming",
      "MapFilterReduce"
    ],
    "theory": {
      "overview": "Методы высшего порядка (map, filter, reduce) позволяют обрабатывать списки данных декларативно.",
      "sections": [
        {
          "title": "map, filter и reduce",
          "content": "- `map(fn)`: возвращает новый массив той же длины.\n- `filter(fn)`: фильтрует по условию true/false.\n- `reduce(fn, initVal)`: сворачивает массив в единое значение.",
          "codeExample": {
            "language": "javascript",
            "title": "Цепочка методов",
            "code": "const items = [{ price: 100 }, { price: 200 }];\nconst total = items.map(i => i.price).reduce((a, b) => a + b, 0);\nconsole.log(total); // 300",
            "explanation": "Трансформация и суммирование."
          }
        }
      ],
      "seniorTips": [
        "sort() мутирует массив! Всегда копируйте: [...arr].sort((a, b) => a - b)."
      ],
      "commonMistakes": [
        {
          "bad": "[10, 5, 20].sort() /* [10, 20, 5] */",
          "good": "[10, 5, 20].sort((a, b) => a - b)",
          "reason": "sort() по умолчанию сортирует как строки."
        }
      ],
      "keyTakeaways": [
        "map трансформирует элементы.",
        "filter оставляет нужные.",
        "reduce сворачивает массив."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"arr-demo\"><h3>Товары</h3><ul id=\"prod-list\"></ul></div>",
      "initialCss": ".arr-demo { padding: 20px; background: white; border-radius: 12px; }",
      "initialJs": "const goods = [{ name: 'Клавиатура', price: 4500 }, { name: 'ПК', price: 120000 }];\nconst cheap = goods.filter(g => g.price < 5000);\nconst ul = document.getElementById('prod-list');\ncheap.forEach(g => {\n  const li = document.createElement('li');\n  li.textContent = `${g.name} — ${g.price} ₽`;\n  ul.appendChild(li);\n});",
      "instructions": "Посмотрите работу метода filter."
    },
    "task": {
      "title": "Подсчет среднего балла",
      "scenario": "Напишите расчет среднего балла массива оценок через reduce.",
      "criteria": [
        "Использован метод reduce"
      ],
      "starterCode": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "// Напишите решение\n"
      },
      "hints": [
        "Используйте современные стандарты ES6+."
      ],
      "solution": {
        "html": "<div class=\"task-box\">Вывод скрипта</div>",
        "js": "const scores = [80, 90, 100, 70, 85];\nconst avg = scores.reduce((a, b) => a + b, 0) / scores.length;\nconsole.log('Средний:', avg);",
        "explanation": "Расчет среднего через reduce."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "j6-q1",
          "question": "Какой метод возвращает НОВЫЙ массив преобразованных элементов?",
          "options": [
            "forEach",
            "filter",
            "map",
            "reduce"
          ],
          "correctIndex": 2,
          "explanation": "map возвращает новый массив той же длины с трансформированными элементами."
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
