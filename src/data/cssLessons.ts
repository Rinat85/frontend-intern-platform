import { Lesson } from '../types/curriculum';

export const cssLessons: Lesson[] = [
  {
    "id": "css-1",
    "moduleId": "css",
    "level": 1,
    "title": "Основы CSS: Селекторы и правила",
    "subtitle": "Синтаксис CSS3, базовые и комбинаторные селекторы",
    "description": "Фундамент стилизации: анатомия правила, классы, идентификаторы, универсальный селектор, селекторы потомков, дочерние, соседние и атрибутные селекторы.",
    "estimatedMinutes": 30,
    "difficulty": "beginner",
    "tags": [
      "CSS",
      "Selectors",
      "Syntax",
      "Styling"
    ],
    "theory": {
      "overview": "CSS (Cascading Style Sheets) отвечает за визуальное представление HTML. Каждое CSS-правило состоит из Селектора и Блока объявлений { property: value; }.",
      "sections": [
        {
          "title": "Базовые селекторы",
          "content": "- `*` (универсальный): выбирает все элементы.\n- `tag` (теговый): выбирает по тегу (`h1`, `p`).\n- `.class` (классовый): основной инструмент (`.card`, `.btn`).\n- `#id` (идентификатор): уникальный выбор (высокий вес).\n- `A, B` (группировка): общие стили для нескольких селекторов.",
          "codeExample": {
            "language": "css",
            "title": "Примеры",
            "code": "* { box-sizing: border-box; }\n.btn { padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; }\n.btn.btn-primary { background: #4f46e5; color: white; }",
            "explanation": "Классы создают переиспользуемые UI-компоненты."
          }
        },
        {
          "title": "Комбинаторы",
          "content": "- `A B`: потомок на любой глубине.\n- `A > B`: прямой потомок 1-го уровня.\n- `A + B`: смежный сосед сразу за элементом.\n- `A ~ B`: все соседи после элемента.\n- `[attr=\"val\"]`: по значению атрибута.",
          "codeExample": {
            "language": "css",
            "title": "Комбинаторы",
            "code": ".card-list > .card-item { border-bottom: 1px solid #e2e8f0; }\np + p { margin-top: 16px; }",
            "explanation": "Комбинаторы точно выбирают элементы в DOM."
          }
        }
      ],
      "seniorTips": [
        "Стилизуйте компоненты исключительно через классы (.class-name).",
        "Не делайте селекторы длиннее 2–3 уровней."
      ],
      "commonMistakes": [
        {
          "bad": "#btn { background: blue; }",
          "good": ".btn { background: blue; }",
          "reason": "ID сложно переопределить из-за высокого веса."
        }
      ],
      "keyTakeaways": [
        "Классы — основа масштабируемой верстки.",
        "Комбинатор > выбирает прямых детей."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"demo\"><h2 class=\"title\">Каталог</h2><ul class=\"list\"><li class=\"item\"><a href=\"#\">HTML</a></li></ul></div>",
      "initialCss": ".demo { padding: 20px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; }\n.title { color: #1e293b; }\n.list { list-style: none; padding: 0; }\n.list > .item { padding: 8px 12px; background: #f8fafc; border-radius: 6px; }\n.list a { color: #4f46e5; font-weight: 600; text-decoration: none; }",
      "initialJs": "console.log('Selectors loaded');",
      "instructions": "Попробуйте изменить цвет .title."
    },
    "task": {
      "title": "Стилизация карточки товара",
      "scenario": "Оформите карточку товара с ценой, скидкой и кнопкой покупки.",
      "criteria": [
        "Стилизован .product-card",
        "Цене .price задан жирный шрифт",
        "Кнопка .btn-buy оформлена"
      ],
      "starterCode": {
        "html": "<div class=\"product-card\"><span class=\"badge-sale\">-20%</span><h3>Наушники</h3><p class=\"price\">12 990 ₽</p><button class=\"btn-buy\">Купить</button></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Используйте классы .product-card, .badge-sale, .price, .btn-buy."
      ],
      "solution": {
        "html": "<div class=\"product-card\"><span class=\"badge-sale\">-20%</span><h3>Наушники</h3><p class=\"price\">12 990 ₽</p><button class=\"btn-buy\">Купить</button></div>",
        "css": ".product-card { padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0; }\n.badge-sale { background: #ef4444; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }\n.price { font-size: 20px; font-weight: bold; color: #4f46e5; margin: 12px 0; }\n.btn-buy { width: 100%; padding: 10px; background: #4f46e5; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; }",
        "explanation": "Чистая стилизация карточки."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c1-q1",
          "question": "Какой комбинатор выбирает только прямых детей?",
          "options": [
            ".a .b",
            ".a > .b",
            ".a + .b",
            ".a ~ .b"
          ],
          "correctIndex": 1,
          "explanation": "Комбинатор > выбирает прямых детей первого уровня."
        }
      ]
    }
  },
  {
    "id": "css-2",
    "moduleId": "css",
    "level": 2,
    "title": "Каскад, специфичность и наследование",
    "subtitle": "Как браузер вычисляет вес селекторов и разрешает конфликты",
    "description": "Математика CSS: Specificity (inline > ID > class > tag), правила каскада, наследуемые свойства и почему !important разрушает архитектуру.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Cascade",
      "Specificity",
      "Inheritance"
    ],
    "theory": {
      "overview": "Каскадность определяет победу правил при конфликте стилей. Браузер вычисляет специфичность каждого правила.",
      "sections": [
        {
          "title": "Матрица специфичности",
          "content": "- Inline: вес 1000\n- ID: вес 100\n- Class, attribute, pseudo-class: вес 10\n- Tag, pseudo-element: вес 1\n- Побеждает наивысший вес.",
          "codeExample": {
            "language": "css",
            "title": "Веса селекторов",
            "code": "p { color: black; } /* 1 */\n.text { color: green; } /* 10 */\n#main { color: red; } /* 100 -> ПОБЕДИТЕЛЬ */",
            "explanation": "ID побеждает классы."
          }
        }
      ],
      "seniorTips": [
        "Никогда не используйте !important для решения проблем каскада."
      ],
      "commonMistakes": [
        {
          "bad": ".btn { color: red !important; }",
          "good": ".btn-danger { color: red; }",
          "reason": "!important создает техдолг."
        }
      ],
      "keyTakeaways": [
        "Inline (1000) > ID (100) > Class (10) > Tag (1).",
        "Текстовые свойства наследуются."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"cascade-demo\" id=\"box\"><p class=\"text\">Текст</p></div>",
      "initialCss": ".cascade-demo p { color: #3b82f6; }\n#box .text { color: #6366f1; font-weight: bold; }",
      "initialJs": "console.log('Cascade loaded');",
      "instructions": "Посмотрите приоритет ID."
    },
    "task": {
      "title": "Модификатор ошибки",
      "scenario": "Сверстайте карточку ошибки без !important.",
      "criteria": [
        "Определен базовый класс",
        "Создан модификатор ошибки"
      ],
      "starterCode": {
        "html": "<div class=\"status-card status-card--error\"><h4>Ошибка</h4><p>Сбой сети.</p></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Объявите модификатор ниже в коде."
      ],
      "solution": {
        "html": "<div class=\"status-card status-card--error\"><h4>Ошибка</h4><p>Сбой сети.</p></div>",
        "css": ".status-card { padding: 16px; background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; }\n.status-card--error { background: #fef2f2; border-left-color: #ef4444; }",
        "explanation": "БЭМ модификатор без !important."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c2-q1",
          "question": "Какой вес имеет класс в CSS?",
          "options": [
            "1",
            "10",
            "100",
            "1000"
          ],
          "correctIndex": 1,
          "explanation": "Класс имеет вес 10."
        }
      ]
    }
  },
  {
    "id": "css-3",
    "moduleId": "css",
    "level": 3,
    "title": "Блочная модель (Box Model)",
    "subtitle": "Content, padding, border, margin и box-sizing",
    "description": "Фундамент геометрии в CSS: почему стандартная модель ломает верстку, как работает box-sizing: border-box, схлопывание отступов margin collapse и правильный расчет ширины.",
    "estimatedMinutes": 35,
    "difficulty": "beginner",
    "tags": [
      "CSS",
      "BoxModel",
      "Geometry"
    ],
    "theory": {
      "overview": "Каждый элемент на странице — это прямоугольник из 4 слоев: Content, Padding, Border, Margin.",
      "sections": [
        {
          "title": "border-box",
          "content": "- `border-box` включает padding и border в общую ширину width.\n- Сброс: `* { box-sizing: border-box; }`.",
          "codeExample": {
            "language": "css",
            "title": "border-box",
            "code": "* { box-sizing: border-box; }\n.box { width: 300px; padding: 20px; border: 2px solid blue; /* Итого 300px */ }",
            "explanation": "Размер блока строго 300px."
          }
        }
      ],
      "seniorTips": [
        "Всегда задавайте box-sizing: border-box глобально."
      ],
      "commonMistakes": [
        {
          "bad": "* { box-sizing: content-box; }",
          "good": "* { box-sizing: border-box; }",
          "reason": "content-box распирает ширину блоков."
        }
      ],
      "keyTakeaways": [
        "border-box включает padding и border в ширину.",
        "Вертикальные margin схлопываются."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"box-demo\"><p>Ширина 250px с padding 20px</p></div>",
      "initialCss": ".box-demo { width: 250px; padding: 20px; border: 4px solid #4f46e5; background: #e0e7ff; box-sizing: border-box; border-radius: 8px; font-weight: bold; text-align: center; }",
      "initialJs": "console.log('Box loaded');",
      "instructions": "Попробуйте изменить padding."
    },
    "task": {
      "title": "Фиксированная карточка",
      "scenario": "Создайте карточку шириной 300px с padding 24px.",
      "criteria": [
        "Использован border-box",
        "Задана ширина 300px"
      ],
      "starterCode": {
        "html": "<div class=\"user-card\"><h3>Профиль</h3></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте width: 300px; padding: 24px; box-sizing: border-box;"
      ],
      "solution": {
        "html": "<div class=\"user-card\"><h3>Профиль</h3></div>",
        "css": ".user-card { box-sizing: border-box; width: 300px; padding: 24px; border: 1px solid #cbd5e1; border-radius: 12px; background: white; }",
        "explanation": "Идеальный блок."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c3-q1",
          "question": "Что делает box-sizing: border-box?",
          "options": [
            "Удаляет рамку",
            "Включает padding и border в width",
            "Увеличивает margin",
            "Ничего"
          ],
          "correctIndex": 1,
          "explanation": "border-box включает padding и border в общую ширину."
        }
      ]
    }
  },
  {
    "id": "css-4",
    "moduleId": "css",
    "level": 4,
    "title": "Типы отображения: display",
    "subtitle": "Block, inline, inline-block, none и visibility",
    "description": "Поведение потока: отличия строчных и блочных элементов, создание inline-block кнопок, сокрытие через display: none vs visibility: hidden.",
    "estimatedMinutes": 30,
    "difficulty": "beginner",
    "tags": [
      "CSS",
      "Display",
      "Layout"
    ],
    "theory": {
      "overview": "Свойство display определяет поведение элемента в потоке страницы и управление его размерами.",
      "sections": [
        {
          "title": "Block vs Inline vs Inline-Block",
          "content": "- `block`: на всю строку, принимает width/height.\n- `inline`: в строке по контенту, игнорирует width/height.\n- `inline-block`: в строке, но принимает width/height/padding.",
          "codeExample": {
            "language": "css",
            "title": "inline-block",
            "code": "a.btn { display: inline-block; padding: 10px 20px; background: #4f46e5; color: white; border-radius: 6px; }",
            "explanation": "Кнопка в строке с отступами."
          }
        }
      ],
      "seniorTips": [
        "Превращайте ссылки в кнопки через inline-block или inline-flex."
      ],
      "commonMistakes": [
        {
          "bad": "span { width: 100px; } /* Игнорируется на inline */",
          "good": "span { display: inline-block; width: 100px; }",
          "reason": "inline элементы игнорируют размеры."
        }
      ],
      "keyTakeaways": [
        "block на всю строку, inline в строке без размеров, inline-block в строке с размерами."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"demo\"><span class=\"ib\">Inline-block</span><div class=\"b\">Block</div></div>",
      "initialCss": ".demo { padding: 16px; background: white; border-radius: 8px; }\n.ib { display: inline-block; padding: 8px 16px; background: #c7d2fe; color: #3730a3; border-radius: 6px; font-weight: bold; margin-bottom: 10px; }\n.b { display: block; padding: 12px; background: #e0e7ff; color: #312e81; border-radius: 6px; }",
      "initialJs": "console.log('Display loaded');",
      "instructions": "Измените display у .ib."
    },
    "task": {
      "title": "Теги в одну строку",
      "scenario": "Оформите список плашек через inline-block.",
      "criteria": [
        "Задан display: inline-block",
        "Применены padding"
      ],
      "starterCode": {
        "html": "<div class=\"tags\"><span class=\"t\">React</span><span class=\"t\">TS</span></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .t { display: inline-block; padding: 6px 12px; }"
      ],
      "solution": {
        "html": "<div class=\"tags\"><span class=\"t\">React</span><span class=\"t\">TS</span></div>",
        "css": ".t { display: inline-block; padding: 6px 12px; background: #e0e7ff; color: #4338ca; border-radius: 16px; font-weight: bold; margin-right: 6px; }",
        "explanation": "Теги в одну строку."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c4-q1",
          "question": "Какой display принимает размеры в строке?",
          "options": [
            "inline",
            "block",
            "inline-block",
            "none"
          ],
          "correctIndex": 2,
          "explanation": "inline-block принимает размеры и остается в строке."
        }
      ]
    }
  },
  {
    "id": "css-5",
    "moduleId": "css",
    "level": 5,
    "title": "Позиционирование (Position)",
    "subtitle": "Static, relative, absolute, fixed, sticky и z-index",
    "description": "Управление координатами: привязка absolute к relative родителю, fixed шапки, sticky меню и слои z-index.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Position",
      "ZIndex"
    ],
    "theory": {
      "overview": "Position позволяет размещать элементы с точностью до пикселя по координатам top/left/right/bottom.",
      "sections": [
        {
          "title": "Режимы position",
          "content": "- `relative`: смещение от места; точка отсчета для absolute потомков!\n- `absolute`: позиция относительно ближайшего relative предка.\n- `fixed`: зафиксирован на экране при скролле.\n- `sticky`: прилипает при скролле внутри родителя.",
          "codeExample": {
            "language": "css",
            "title": "Relative + absolute",
            "code": ".btn { position: relative; }\n.badge { position: absolute; top: -6px; right: -6px; background: red; color: white; border-radius: 10px; padding: 2px 6px; }",
            "explanation": "Бейдж в углу кнопки."
          }
        }
      ],
      "seniorTips": [
        "Всегда задавайте position: relative родителю для привязки position: absolute детей."
      ],
      "commonMistakes": [
        {
          "bad": ".badge { position: absolute; top: 0; } /* Нет relative у родителя */",
          "good": ".card { position: relative; }\n.badge { position: absolute; top: 0; }",
          "reason": "Без relative у родителя элемент позиционируется от body."
        }
      ],
      "keyTakeaways": [
        "relative задает точку отсчета для absolute.",
        "fixed прибивает к окну."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"p-card\"><button class=\"p-btn\">Кнопка<span class=\"p-badge\">1</span></button></div>",
      "initialCss": ".p-card { padding: 30px; background: white; border-radius: 12px; text-align: center; }\n.p-btn { position: relative; padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }\n.p-badge { position: absolute; top: -8px; right: -8px; background: #ef4444; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; }",
      "initialJs": "console.log('Position loaded');",
      "instructions": "Попробуйте изменить top/right."
    },
    "task": {
      "title": "Бейдж на карточке",
      "scenario": "Разместите бейдж в углу карточки.",
      "criteria": [
        "Родителю задан position: relative",
        "Бейджу задан position: absolute"
      ],
      "starterCode": {
        "html": "<div class=\"card\"><span class=\"b\">Хит</span><h3>Товар</h3></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .card { position: relative; } и .b { position: absolute; top: 10px; left: 10px; }."
      ],
      "solution": {
        "html": "<div class=\"card\"><span class=\"b\">Хит</span><h3>Товар</h3></div>",
        "css": ".card { position: relative; padding: 30px 20px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; }\n.b { position: absolute; top: 10px; left: 10px; background: #f59e0b; color: white; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: bold; }",
        "explanation": "Связка relative + absolute."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c5-q1",
          "question": "Относительно чего позиционируется absolute элемент?",
          "options": [
            "Всегда body",
            "Ближайшего предка с non-static position",
            "Экрана",
            "Соседа"
          ],
          "correctIndex": 1,
          "explanation": "absolute ищет ближайшего предка с non-static position."
        }
      ]
    }
  },
  {
    "id": "css-6",
    "moduleId": "css",
    "level": 6,
    "title": "Типографика и веб-шрифты",
    "subtitle": "Шрифтовые пары, @font-face, Google Fonts, rem, em и line-height",
    "description": "Работа с текстом: подключение шрифтов через @font-face, font-display: swap, расчет пропорций rem/em, межстрочные интервалы line-height.",
    "estimatedMinutes": 30,
    "difficulty": "beginner",
    "tags": [
      "CSS",
      "Typography",
      "Fonts"
    ],
    "theory": {
      "overview": "Типографика формирует характер интерфейса. Правильный подбор гарнитуры и межстрочных интервалов делает чтение комфортным.",
      "sections": [
        {
          "title": "Подключение веб-шрифтов",
          "content": "- `@font-face`: подключение WOFF2 файлов.\n- `font-display: swap`: устраняет невидимый текст (FOIT) во время загрузки.\n- Единицы `rem` (от html) vs `em` (от родителя). Рекомендуется `rem`.",
          "codeExample": {
            "language": "css",
            "title": "Подключение шрифта",
            "code": "@font-face {\n  font-family: 'Inter';\n  src: url('/fonts/inter.woff2') format('woff2');\n  font-display: swap;\n}\nbody { font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.6; }",
            "explanation": "WOFF2 шрифт с swap."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте rem для font-size."
      ],
      "commonMistakes": [
        {
          "bad": "p { font-size: 16px; }",
          "good": "p { font-size: 1rem; }",
          "reason": "px игнорирует настройки пользователя в браузере."
        }
      ],
      "keyTakeaways": [
        "rem зависит от html font-size.",
        "font-display: swap убирает задержку рендеринга."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"font-demo\"><h2>Типографика</h2><p>Текст с line-height 1.6.</p></div>",
      "initialCss": ".font-demo { padding: 20px; background: white; border-radius: 12px; font-family: sans-serif; }\nh2 { font-size: 1.5rem; color: #0f172a; }\np { font-size: 1rem; line-height: 1.6; color: #475569; }",
      "initialJs": "console.log('Typography loaded');",
      "instructions": "Попробуйте изменить line-height."
    },
    "task": {
      "title": "Настройка типографики",
      "scenario": "Оформите заголовок в rem и параграф с line-height: 1.7.",
      "criteria": [
        "Заголовку задан font-size в rem",
        "Параграфу задан line-height: 1.7"
      ],
      "starterCode": {
        "html": "<article class=\"art\"><h2>Заголовок</h2><p>Текст статьи.</p></article>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .art h2 { font-size: 1.5rem; } .art p { line-height: 1.7; }."
      ],
      "solution": {
        "html": "<article class=\"art\"><h2>Заголовок</h2><p>Текст статьи.</p></article>",
        "css": ".art { padding: 20px; background: white; border-radius: 8px; }\n.art h2 { font-size: 1.5rem; color: #1e293b; }\n.art p { font-size: 1rem; line-height: 1.7; color: #475569; }",
        "explanation": "Читаемая типографика."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c6-q1",
          "question": "Относительно чего считается 1rem?",
          "options": [
            "Ширины экрана",
            "font-size тега <html> (16px)",
            "Родителя",
            "Окна"
          ],
          "correctIndex": 1,
          "explanation": "rem (Root EM) зависит от font-size тега html."
        }
      ]
    }
  },
  {
    "id": "css-7",
    "moduleId": "css",
    "level": 7,
    "title": "Цвета и фоны в CSS",
    "subtitle": "HEX, RGB, HSL, градиенты и background-size",
    "description": "Цветовые модели: HEX, RGB, HSL, прозрачность альфа-канала, linear-gradient, radial-gradient, background-size cover/contain.",
    "estimatedMinutes": 30,
    "difficulty": "beginner",
    "tags": [
      "CSS",
      "Colors",
      "Gradients"
    ],
    "theory": {
      "overview": "Цвет и фоны создают визуальную глубину интерфейса.",
      "sections": [
        {
          "title": "Цветовые модели и градиенты",
          "content": "- `HEX`: `#4f46e5`, `RGB`: `rgba(79, 70, 229, 0.9)`.\n- `HSL`: `hsl(245, 75%, 59%)` (Hue, Saturation, Lightness).\n- `linear-gradient(135deg, #6366f1, #a855f7)`.",
          "codeExample": {
            "language": "css",
            "title": "Градиент",
            "code": ".hero { background: linear-gradient(135deg, #4f46e5, #06b6d4); color: white; padding: 40px; border-radius: 12px; }",
            "explanation": "Линейный градиент."
          }
        }
      ],
      "seniorTips": [
        "Используйте HSL для создания гармоничных оттенков."
      ],
      "commonMistakes": [
        {
          "bad": "background: red;",
          "good": "background: #ef4444;",
          "reason": "Чистые спектральные цвета режут глаз."
        }
      ],
      "keyTakeaways": [
        "HSL интуитивен для оттенков.",
        "linear-gradient создает плавные переходы."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"color-demo\"><h3>Градиент</h3></div>",
      "initialCss": ".color-demo { padding: 30px; background: linear-gradient(135deg, #4f46e5, #9333ea); color: white; border-radius: 12px; text-align: center; }",
      "initialJs": "console.log('Colors loaded');",
      "instructions": "Измените угол градиента."
    },
    "task": {
      "title": "Градиентный баннер",
      "scenario": "Оформите баннер с градиентом и белым текстом.",
      "criteria": [
        "Задан linear-gradient",
        "Цвет текста белый"
      ],
      "starterCode": {
        "html": "<div class=\"banner\"><h2>Акция</h2></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте background: linear-gradient(135deg, #f59e0b, #ef4444); color: white; padding: 24px; border-radius: 8px;"
      ],
      "solution": {
        "html": "<div class=\"banner\"><h2>Акция</h2></div>",
        "css": ".banner { padding: 30px; background: linear-gradient(135deg, #f59e0b, #ef4444); color: white; border-radius: 12px; text-align: center; }",
        "explanation": "Яркий баннер."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c7-q1",
          "question": "Что означает H в модели HSL?",
          "options": [
            "Height",
            "Hue (Цветовой тон 0-360)",
            "Hex",
            "Hardness"
          ],
          "correctIndex": 1,
          "explanation": "Hue — цветовой тон."
        }
      ]
    }
  },
  {
    "id": "css-8",
    "moduleId": "css",
    "level": 8,
    "title": "Оформление рамок и теней",
    "subtitle": "Border, border-radius, outline и box-shadow",
    "description": "Объем интерфейса: скругления border-radius, стек мягких теней box-shadow, разница между outline и border.",
    "estimatedMinutes": 30,
    "difficulty": "beginner",
    "tags": [
      "CSS",
      "Borders",
      "Shadows"
    ],
    "theory": {
      "overview": "Тени и скругления углов создают глубину и слои в интерфейсе.",
      "sections": [
        {
          "title": "Стек теней",
          "content": "- `border-radius: 12px`, `border-radius: 50%` (круг).\n- `box-shadow`: комбинация нескольких слоев теней через запятую дает реалистичную мягкую тень.",
          "codeExample": {
            "language": "css",
            "title": "Мягкая тень",
            "code": ".card { background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.1); }",
            "explanation": "Двойная тень."
          }
        }
      ],
      "seniorTips": [
        "Не удаляйте outline: none без добавления :focus-visible."
      ],
      "commonMistakes": [
        {
          "bad": "box-shadow: 0 0 10px black;",
          "good": "box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);",
          "reason": "Грубые черные тени выглядят устаревшими."
        }
      ],
      "keyTakeaways": [
        "border-radius: 50% делает круг.",
        "Стек теней создает глубину."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"shadow-card\"><div class=\"av\">👨‍💻</div><h3>Карточка</h3></div>",
      "initialCss": ".shadow-card { width: 220px; padding: 24px; background: white; border-radius: 16px; text-align: center; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); }\n.av { width: 48px; height: 48px; border-radius: 50%; background: #e0e7ff; line-height: 48px; margin: 0 auto 10px; }",
      "initialJs": "console.log('Shadows loaded');",
      "instructions": "Попробуйте изменить blur радиус."
    },
    "task": {
      "title": "Парящая карточка",
      "scenario": "Оформите карточку с круглым аватаром и мягкой тенью.",
      "criteria": [
        "Задан border-radius: 16px",
        "Применен box-shadow",
        "Аватар с border-radius: 50%"
      ],
      "starterCode": {
        "html": "<div class=\"float-card\"><div class=\"av\">🚀</div><h4>Старт</h4></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Примените .float-card { border-radius: 16px; box-shadow: 0 10px 20px rgba(0,0,0,0.08); } .av { border-radius: 50%; }"
      ],
      "solution": {
        "html": "<div class=\"float-card\"><div class=\"av\">🚀</div><h4>Старт</h4></div>",
        "css": ".float-card { padding: 24px; background: white; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); text-align: center; }\n.av { width: 48px; height: 48px; border-radius: 50%; background: #fee2e2; line-height: 48px; margin: 0 auto 10px; }",
        "explanation": "Объемная карточка."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c8-q1",
          "question": "Как сделать квадратную картинку круглой?",
          "options": [
            "border-radius: 10px",
            "border-radius: 50%",
            "clip: circle",
            "overflow: round"
          ],
          "correctIndex": 1,
          "explanation": "border-radius: 50% делает круг."
        }
      ]
    }
  },
  {
    "id": "css-9",
    "moduleId": "css",
    "level": 9,
    "title": "Flexbox: Контейнер",
    "subtitle": "Display: flex, оси, выравнивание justify-content, align-items и gap",
    "description": "Одномерная раскладка: главная и поперечная оси, flex-direction, выравнивание по центру, space-between, flex-wrap и gap.",
    "estimatedMinutes": 40,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Flexbox",
      "Layout"
    ],
    "theory": {
      "overview": "Flexbox — модуль одномерной раскладки в строках или колонках.",
      "sections": [
        {
          "title": "Оси и выравнивание",
          "content": "- `justify-content`: выравнивание по главной оси (`center`, `space-between`).\n- `align-items`: выравнивание по поперечной оси (`center`, `stretch`).\n- `gap: 16px`: отступ между элементами.\n- `flex-direction: row | column`.",
          "codeExample": {
            "language": "css",
            "title": "Центрирование",
            "code": ".center { display: flex; justify-content: center; align-items: center; min-height: 150px; gap: 16px; }",
            "explanation": "Идеальное центрирование."
          }
        }
      ],
      "seniorTips": [
        "Используйте gap вместо margin между flex-детьми."
      ],
      "commonMistakes": [
        {
          "bad": ".child { margin-right: 10px; }",
          "good": ".parent { display: flex; gap: 10px; }",
          "reason": "gap не создает лишнего отступа у последнего элемента."
        }
      ],
      "keyTakeaways": [
        "justify-content по главной оси, align-items по поперечной.",
        "gap задает расстояние."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"flex-demo\"><div class=\"f\">1</div><div class=\"f\">2</div></div>",
      "initialCss": ".flex-demo { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 20px; background: white; border-radius: 12px; }\n.f { padding: 12px 20px; background: #4f46e5; color: white; border-radius: 6px; font-weight: bold; }",
      "initialJs": "console.log('Flex loaded');",
      "instructions": "Попробуйте поменять justify-content на center."
    },
    "task": {
      "title": "Навигационная шапка",
      "scenario": "Выровняйте логотип слева, а ссылки справа через space-between.",
      "criteria": [
        "Задан display: flex",
        "Использован justify-content: space-between"
      ],
      "starterCode": {
        "html": "<header class=\"bar\"><div class=\"logo\">Logo</div><nav class=\"links\"><a href=\"#\">О нас</a></nav></header>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .bar { display: flex; justify-content: space-between; align-items: center; } .links { display: flex; gap: 16px; }"
      ],
      "solution": {
        "html": "<header class=\"bar\"><div class=\"logo\">Logo</div><nav class=\"links\"><a href=\"#\">О нас</a></nav></header>",
        "css": ".bar { display: flex; justify-content: space-between; align-items: center; padding: 16px; background: white; border-radius: 8px; }\n.logo { font-weight: bold; color: #4f46e5; }\n.links { display: flex; gap: 16px; }\n.links a { color: #334155; text-decoration: none; }",
        "explanation": "Шапка на Flexbox."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c9-q1",
          "question": "Какое свойство выравнивает по главной оси?",
          "options": [
            "align-items",
            "justify-content",
            "align-content",
            "flex-wrap"
          ],
          "correctIndex": 1,
          "explanation": "justify-content выравнивает по главной оси."
        }
      ]
    }
  },
  {
    "id": "css-10",
    "moduleId": "css",
    "level": 10,
    "title": "Flexbox: Элементы",
    "subtitle": "Flex-grow, flex-shrink, flex-basis, align-self и order",
    "description": "Управление flex-элементами: распределение свободного места grow, сжатие shrink, базовый размер basis, сокращение flex: 1.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Flexbox",
      "FlexItems"
    ],
    "theory": {
      "overview": "Свойства дочерних элементов определяют, как каждый блок растягивается и сжимается.",
      "sections": [
        {
          "title": "grow, shrink, basis",
          "content": "- `flex-grow: 1`: занимает всё свободное место.\n- `flex-shrink: 0`: запрещает сжиматься (для иконок).\n- `flex: 1`: shorthand для равного деления колонок.\n- `align-self`: индивидуальное выравнивание.",
          "codeExample": {
            "language": "css",
            "title": "Строка поиска",
            "code": ".search { display: flex; gap: 10px; }\n.input { flex-grow: 1; }\n.btn { flex-shrink: 0; }",
            "explanation": "Инпут растягивается, кнопка фиксирована."
          }
        }
      ],
      "seniorTips": [
        "Для иконок всегда пишите flex-shrink: 0."
      ],
      "commonMistakes": [
        {
          "bad": ".icon { width: 24px; } /* Сожмется при нехватке места */",
          "good": ".icon { width: 24px; flex-shrink: 0; }",
          "reason": "flex-shrink: 0 защищает от сплющивания."
        }
      ],
      "keyTakeaways": [
        "flex: 1 делит место поровну.",
        "flex-shrink: 0 защищает от сжатия."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"grow-demo\"><div class=\"f-fix\">100px</div><div class=\"f-grow\">flex: 1</div></div>",
      "initialCss": ".grow-demo { display: flex; gap: 10px; padding: 20px; background: white; border-radius: 12px; }\n.f-fix { width: 100px; flex-shrink: 0; padding: 12px; background: #94a3b8; color: white; border-radius: 6px; text-align: center; }\n.f-grow { flex: 1; padding: 12px; background: #4f46e5; color: white; border-radius: 6px; text-align: center; }",
      "initialJs": "console.log('Flex items loaded');",
      "instructions": "Посмотрите растягивание второго блока."
    },
    "task": {
      "title": "Строка поиска с flex: 1",
      "scenario": "Сделайте инпут растягивающимся на всю ширину.",
      "criteria": [
        "Контейнеру задан display: flex",
        "Инпуту задан flex: 1",
        "Кнопке задан flex-shrink: 0"
      ],
      "starterCode": {
        "html": "<div class=\"search\"><input type=\"text\"><button>Поиск</button></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .search { display: flex; gap: 8px; } .search input { flex: 1; } .search button { flex-shrink: 0; }"
      ],
      "solution": {
        "html": "<div class=\"search\"><input type=\"text\" placeholder=\"Поиск...\"><button>Поиск</button></div>",
        "css": ".search { display: flex; gap: 8px; padding: 16px; background: white; border-radius: 8px; }\n.search input { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; }\n.search button { flex-shrink: 0; padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 6px; }",
        "explanation": "Адаптивная строка поиска."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c10-q1",
          "question": "Как запретить элементу сжиматься?",
          "options": [
            "flex-grow: 0",
            "flex-shrink: 0",
            "width: fixed",
            "no-shrink"
          ],
          "correctIndex": 1,
          "explanation": "flex-shrink: 0 запрещает сжатие."
        }
      ]
    }
  },
  {
    "id": "css-11",
    "moduleId": "css",
    "level": 11,
    "title": "CSS Grid: Основы",
    "subtitle": "Display: grid, фракции fr, repeat(), сетки колонок и gap",
    "description": "Двумерная система раскладки: создание сеток строк и колонок, единицы fr, функция repeat(), линии сетки и gap.",
    "estimatedMinutes": 40,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Grid",
      "Layout"
    ],
    "theory": {
      "overview": "CSS Grid Layout — система двумерной раскладки строк и колонок одновременно.",
      "sections": [
        {
          "title": "Сетки и fr",
          "content": "- `display: grid`: активирует grid.\n- `grid-template-columns: repeat(3, 1fr)`: 3 равные колонки.\n- `fr`: доля свободного пространства.\n- `gap: 20px`: отступ между ячейками.",
          "codeExample": {
            "language": "css",
            "title": "Сетка из 3 колонок",
            "code": ".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }",
            "explanation": "3 равные колонки."
          }
        }
      ],
      "seniorTips": [
        "Используйте Grid для 2D каркасов, Flexbox — для выравнивания внутри."
      ],
      "commonMistakes": [
        {
          "bad": "Верстать 2D сетки вложенными flexbox",
          "good": "display: grid; grid-template-columns: repeat(3, 1fr);",
          "reason": "Grid требует меньше кода и проще в поддержке."
        }
      ],
      "keyTakeaways": [
        "Grid управляет 2D сеткой (строки + колонки).",
        "repeat(N, 1fr) создает N равных колонок."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"grid-demo\"><div class=\"g\">1</div><div class=\"g\">2</div><div class=\"g\">3</div></div>",
      "initialCss": ".grid-demo { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 20px; background: white; border-radius: 12px; }\n.g { padding: 20px; background: #e0e7ff; color: #3730a3; border-radius: 8px; font-weight: bold; text-align: center; }",
      "initialJs": "console.log('Grid loaded');",
      "instructions": "Измените repeat(3, 1fr) на repeat(2, 1fr)."
    },
    "task": {
      "title": "Сетка карточек",
      "scenario": "Создайте сетку из 3 колонок с gap: 16px.",
      "criteria": [
        "Задан display: grid",
        "Колонки repeat(3, 1fr)",
        "Задан gap: 16px"
      ],
      "starterCode": {
        "html": "<div class=\"grid-box\"><div>1</div><div>2</div><div>3</div></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .grid-box { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }"
      ],
      "solution": {
        "html": "<div class=\"grid-box\"><div>1</div><div>2</div><div>3</div></div>",
        "css": ".grid-box { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 16px; background: white; border-radius: 8px; }\n.grid-box > div { padding: 20px; background: #f1f5f9; border-radius: 8px; text-align: center; font-weight: bold; }",
        "explanation": "3-колоночная сетка."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c11-q1",
          "question": "Что означает 1fr?",
          "options": [
            "1px",
            "1 доля свободного места",
            "1 фрейм",
            "1%"
          ],
          "correctIndex": 1,
          "explanation": "fr — доля свободного пространства."
        }
      ]
    }
  },
  {
    "id": "css-12",
    "moduleId": "css",
    "level": 12,
    "title": "CSS Grid: Раскладка и области",
    "subtitle": "Grid-template-areas, auto-fit, auto-fill и minmax()",
    "description": "Продвинутый Grid: именованные области grid-template-areas, адаптивная сетка без медиа-запросов auto-fit + minmax().",
    "estimatedMinutes": 40,
    "difficulty": "advanced",
    "tags": [
      "CSS",
      "Grid",
      "Areas",
      "Responsive"
    ],
    "theory": {
      "overview": "Grid позволяет создавать адаптивные каталоги без единого медиа-запроса через связку auto-fit + minmax().",
      "sections": [
        {
          "title": "auto-fit + minmax",
          "content": "- `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`.\n- Карточки автоматически перестраиваются: 1 на мобилке, 2 на планшете, 4 на десктопе.",
          "codeExample": {
            "language": "css",
            "title": "Адаптивная сетка",
            "code": ".gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }",
            "explanation": "Адаптив без медиа-запросов."
          }
        }
      ],
      "seniorTips": [
        "Используйте repeat(auto-fit, minmax(280px, 1fr)) для всех каталогов."
      ],
      "commonMistakes": [
        {
          "bad": "Писать 10 медиа-запросов для колонок",
          "good": "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
          "reason": "auto-fit перестраивает колонки математически."
        }
      ],
      "keyTakeaways": [
        "repeat(auto-fit, minmax(...)) создает автоматический адаптив."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"g-auto\"><div class=\"c\">A</div><div class=\"c\">B</div><div class=\"c\">C</div></div>",
      "initialCss": ".g-auto { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; padding: 20px; background: white; border-radius: 12px; }\n.c { padding: 20px; background: #c7d2fe; color: #312e81; border-radius: 8px; font-weight: bold; text-align: center; }",
      "initialJs": "console.log('Grid advanced loaded');",
      "instructions": "Измените размер окна для проверки переноса."
    },
    "task": {
      "title": "Адаптивный каталог",
      "scenario": "Создайте адаптивную сетку с auto-fit и minmax(200px, 1fr).",
      "criteria": [
        "Задан display: grid",
        "Использован repeat(auto-fit, minmax(200px, 1fr))"
      ],
      "starterCode": {
        "html": "<div class=\"cat\"><div>A</div><div>B</div></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .cat { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }"
      ],
      "solution": {
        "html": "<div class=\"cat\"><div>Товар 1</div><div>Товар 2</div></div>",
        "css": ".cat { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; padding: 16px; background: white; border-radius: 8px; }\n.cat > div { padding: 24px; background: #e0e7ff; color: #3730a3; border-radius: 8px; text-align: center; font-weight: bold; }",
        "explanation": "Адаптивная сетка."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c12-q1",
          "question": "Какая функция Grid задает диапазон размера колонки?",
          "options": [
            "clamp()",
            "minmax(min, max)",
            "range()",
            "bound()"
          ],
          "correctIndex": 1,
          "explanation": "minmax(min, max) задает диапазон трека."
        }
      ]
    }
  },
  {
    "id": "css-13",
    "moduleId": "css",
    "level": 13,
    "title": "Адаптивный дизайн и Media Queries",
    "subtitle": "Mobile-first, @media, брейкпоинты и prefers-color-scheme",
    "description": "Верстка под все устройства: mobile-first подход через min-width, стандартные брейкпоинты sm/md/lg/xl, адаптивные таблицы.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Responsive",
      "MediaQueries"
    ],
    "theory": {
      "overview": "Адаптивная верстка гарантирует удобный интерфейс на экранах от смартфонов до десктопов.",
      "sections": [
        {
          "title": "Mobile-first и брейкпоинты",
          "content": "- Mobile-first: базовые стили для мобилок, расширение через `@media (min-width: 768px)`.\n- Брейкпоинты: 640px (sm), 768px (md), 1024px (lg), 1280px (xl).",
          "codeExample": {
            "language": "css",
            "title": "Mobile-first",
            "code": ".grid { display: grid; grid-template-columns: 1fr; gap: 16px; }\n@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }\n@media (min-width: 1024px) { .grid { grid-template-columns: repeat(4, 1fr); } }",
            "explanation": "Плавный рост колонок."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте min-width для Mobile-first."
      ],
      "commonMistakes": [
        {
          "bad": "@media (max-width: 768px)",
          "good": "@media (min-width: 768px)",
          "reason": "Mobile-first легче оптимизировать."
        }
      ],
      "keyTakeaways": [
        "Mobile-first строится на min-width.",
        "Базовые стили мобильные."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"r-demo\"><p class=\"r-t\">Измените размер окна</p></div>",
      "initialCss": ".r-demo { padding: 20px; background: #e0e7ff; border-radius: 12px; text-align: center; }\n.r-t { font-weight: bold; color: #3730a3; }\n@media (min-width: 600px) { .r-demo { background: #dcfce7; } .r-t { color: #166534; } }",
      "initialJs": "console.log('Responsive loaded');",
      "instructions": "Измените размер окна."
    },
    "task": {
      "title": "Адаптивное меню",
      "scenario": "Сделайте меню в колонку для мобилок и в строку от 768px.",
      "criteria": [
        "Базовый flex-direction: column",
        "В min-width: 768px задан flex-direction: row"
      ],
      "starterCode": {
        "html": "<nav class=\"m\"><a>Главная</a><a>О нас</a></nav>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .m { display: flex; flex-direction: column; } @media (min-width: 768px) { .m { flex-direction: row; } }"
      ],
      "solution": {
        "html": "<nav class=\"m\"><a>Главная</a><a>О нас</a></nav>",
        "css": ".m { display: flex; flex-direction: column; gap: 8px; padding: 16px; background: white; border-radius: 8px; }\n.m a { padding: 8px 16px; background: #f1f5f9; border-radius: 6px; text-decoration: none; color: #334155; }\n@media (min-width: 768px) { .m { flex-direction: row; } }",
        "explanation": "Адаптивное меню."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c13-q1",
          "question": "Какой запрос используется в Mobile-first?",
          "options": [
            "max-width",
            "min-width",
            "screen-only",
            "portrait"
          ],
          "correctIndex": 1,
          "explanation": "Mobile-first использует min-width."
        }
      ]
    }
  },
  {
    "id": "css-14",
    "moduleId": "css",
    "level": 14,
    "title": "CSS Переменные (Custom Properties)",
    "subtitle": "Объявление :root, var(), реализация светлой и темной тем",
    "description": "Динамические стили: объявление переменных в :root, резервные значения var(--name, fallback), темная тема.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Variables",
      "Theming"
    ],
    "theory": {
      "overview": "CSS-переменные централизуют палитру цветов, скругления и шрифты.",
      "sections": [
        {
          "title": "Объявление и var()",
          "content": "- `:root { --primary: #4f46e5; }`\n- `color: var(--primary, #000);`\n- Смена темы: переопределение переменных в `body.dark`.",
          "codeExample": {
            "language": "css",
            "title": "Смена тем",
            "code": ":root { --bg: #ffffff; --text: #0f172a; }\nbody.dark { --bg: #0f172a; --text: #ffffff; }\nbody { background: var(--bg); color: var(--text); }",
            "explanation": "Мгновенная сменяемость темы."
          }
        }
      ],
      "seniorTips": [
        "Храните все дизайн-токены в :root."
      ],
      "commonMistakes": [
        {
          "bad": "Дублировать #4f46e5 в 100 местах",
          "good": "var(--primary-color)",
          "reason": "Переменные упрощают редизайн."
        }
      ],
      "keyTakeaways": [
        "Переменные объявляются через --name.",
        "Смена темы переопределяет токены."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"t-demo\"><p>Управляется переменными</p></div>",
      "initialCss": ":root { --t-bg: #e0e7ff; --t-color: #3730a3; }\n.t-demo { padding: 24px; background: var(--t-bg); color: var(--t-color); border-radius: 12px; font-weight: bold; text-align: center; }",
      "initialJs": "console.log('Variables loaded');",
      "instructions": "Измените --t-bg."
    },
    "task": {
      "title": "Дизайн-токены кнопки",
      "scenario": "Создайте кнопку на CSS-переменных.",
      "criteria": [
        "Определены переменные в :root",
        "Кнопка использует var()"
      ],
      "starterCode": {
        "html": "<button class=\"t-btn\">Токены</button>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте :root { --btn-bg: #4f46e5; } .t-btn { background: var(--btn-bg); }"
      ],
      "solution": {
        "html": "<button class=\"t-btn\">Токены</button>",
        "css": ":root { --btn-bg: #4f46e5; --btn-rad: 8px; }\n.t-btn { padding: 10px 24px; background: var(--btn-bg); color: white; border: none; border-radius: var(--btn-rad); font-weight: bold; cursor: pointer; }",
        "explanation": "Кнопка на переменных."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c14-q1",
          "question": "С чего начинается имя переменной в CSS?",
          "options": [
            "$",
            "@",
            "--",
            "var-"
          ],
          "correctIndex": 2,
          "explanation": "Переменные начинаются с двух дефисов --."
        }
      ]
    }
  },
  {
    "id": "css-15",
    "moduleId": "css",
    "level": 15,
    "title": "Трансформации (Transform 2D/3D)",
    "subtitle": "Translate, rotate, scale, skew и аппаратное ускорение",
    "description": "Анимация геометрии: смещение translate, вращение rotate, масштабирование scale, рендеринг на GPU.",
    "estimatedMinutes": 30,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Transform",
      "Animation"
    ],
    "theory": {
      "overview": "Свойство transform изменяет форму и положение элемента без вызова Reflow на GPU.",
      "sections": [
        {
          "title": "Функции transform",
          "content": "- `translate(x, y)`: смещение по осям.\n- `scale(1.1)`: увеличение.\n- `rotate(45deg)`: поворот.\n- Выполняется на GPU со 120 FPS!",
          "codeExample": {
            "language": "css",
            "title": "Hover карточки",
            "code": ".card { transition: transform 0.3s ease; }\n.card:hover { transform: translateY(-6px) scale(1.02); }",
            "explanation": "Плавное всплытие на GPU."
          }
        }
      ],
      "seniorTips": [
        "Для анимации движения используйте translate(), а не top/left."
      ],
      "commonMistakes": [
        {
          "bad": ".card:hover { top: -10px; }",
          "good": ".card:hover { transform: translateY(-10px); }",
          "reason": "top/left вызывают тяжелый Reflow."
        }
      ],
      "keyTakeaways": [
        "transform работает на видеокарте.",
        "translateY(-4px) идеален для hover."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"tr-demo\"><button class=\"tr-btn\">Взлет 🚀</button></div>",
      "initialCss": ".tr-demo { padding: 40px; background: white; border-radius: 12px; text-align: center; }\n.tr-btn { padding: 12px 24px; background: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: transform 0.3s; }\n.tr-btn:hover { transform: translateY(-6px) scale(1.05); }",
      "initialJs": "console.log('Transform loaded');",
      "instructions": "Наведите на кнопку."
    },
    "task": {
      "title": "Всплытие карточки",
      "scenario": "Сделайте подъем карточки при наведении через translateY(-8px).",
      "criteria": [
        "Задан transition для transform",
        "В :hover применен translateY(-8px)"
      ],
      "starterCode": {
        "html": "<div class=\"lift\"><h4>Карточка</h4></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .lift { transition: transform 0.3s; } .lift:hover { transform: translateY(-8px); }"
      ],
      "solution": {
        "html": "<div class=\"lift\"><h4>Карточка</h4></div>",
        "css": ".lift { padding: 24px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; transition: transform 0.3s ease; }\n.lift:hover { transform: translateY(-8px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }",
        "explanation": "Всплытие карточки."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c15-q1",
          "question": "Почему transform работает быстрее top/left?",
          "options": [
            "Пишется короче",
            "Вычисляется на GPU без Reflow",
            "Удаляет DOM",
            "Блокирует скролл"
          ],
          "correctIndex": 1,
          "explanation": "transform вычисляется на GPU."
        }
      ]
    }
  },
  {
    "id": "css-16",
    "moduleId": "css",
    "level": 16,
    "title": "Плавные переходы (Transition)",
    "subtitle": "Duration, timing-function, cubic-bezier и задержка",
    "description": "Микроанимации: длительность duration (150-300ms), функции плавности ease, cubic-bezier() и задержка.",
    "estimatedMinutes": 30,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "Transition",
      "Easing"
    ],
    "theory": {
      "overview": "CSS Transitions плавно анимируют свойства при смене состояний.",
      "sections": [
        {
          "title": "Анатомия transition",
          "content": "- `transition: transform 0.2s ease, background 0.2s ease`.\n- Оптимальная длительность UI микроанимаций: 150–300ms.",
          "codeExample": {
            "language": "css",
            "title": "Плавная кнопка",
            "code": ".btn { background: #4f46e5; transition: background 0.2s ease, transform 0.2s ease; }\n.btn:hover { background: #4338ca; transform: translateY(-2px); }",
            "explanation": "Плавный hover отклик."
          }
        }
      ],
      "seniorTips": [
        "Анимируйте только конкретные свойства (opacity, transform), а не all."
      ],
      "commonMistakes": [
        {
          "bad": ".card { transition: all 0.5s; }",
          "good": ".card { transition: transform 0.2s ease; }",
          "reason": "transition: all снижает производительность."
        }
      ],
      "keyTakeaways": [
        "Длительность микроанимаций 150–300ms."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"trans-d\"><button class=\"s-btn\">Кликни</button></div>",
      "initialCss": ".trans-d { padding: 30px; background: white; border-radius: 12px; text-align: center; }\n.s-btn { padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: background 0.2s, transform 0.1s; }\n.s-btn:hover { background: #1d4ed8; }\n.s-btn:active { transform: scale(0.95); }",
      "initialJs": "console.log('Transition loaded');",
      "instructions": "Кликните на кнопку."
    },
    "task": {
      "title": "Плавная ссылка",
      "scenario": "Настройте переход цвета ссылки за 0.2s.",
      "criteria": [
        "Задан transition: color 0.2s ease",
        "В :hover цвет меняется"
      ],
      "starterCode": {
        "html": "<a class=\"nl\" href=\"#\">Ссылка</a>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .nl { color: #64748b; transition: color 0.2s ease; } .nl:hover { color: #4f46e5; }"
      ],
      "solution": {
        "html": "<a class=\"nl\" href=\"#\">Ссылка</a>",
        "css": ".nl { font-size: 16px; color: #64748b; text-decoration: none; font-weight: bold; transition: color 0.2s ease; }\n.nl:hover { color: #4f46e5; }",
        "explanation": "Плавная ссылка."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c16-q1",
          "question": "Какая оптимальная длительность микроанимации кнопок?",
          "options": [
            "2-3 с",
            "150-300 мс",
            "5 с",
            "50 мс"
          ],
          "correctIndex": 1,
          "explanation": "150-300ms воспринимается мгновенно."
        }
      ]
    }
  },
  {
    "id": "css-17",
    "moduleId": "css",
    "level": 17,
    "title": "CSS Анимации (@keyframes)",
    "subtitle": "Директива @keyframes, animation-name, infinite и forwards",
    "description": "Покадровые анимации: спиннеры загрузки, пульсация бейджей, зацикливание infinite и fill-mode forwards.",
    "estimatedMinutes": 35,
    "difficulty": "advanced",
    "tags": [
      "CSS",
      "Keyframes",
      "Animation"
    ],
    "theory": {
      "overview": "Директива @keyframes создает сложные покадровые анимации без JS.",
      "sections": [
        {
          "title": "@keyframes и спиннеры",
          "content": "- `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`.\n- `animation: spin 0.8s linear infinite`.",
          "codeExample": {
            "language": "css",
            "title": "Спиннер",
            "code": "@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n.loader {\n  width: 36px; height: 36px;\n  border: 4px solid #e2e8f0; border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}",
            "explanation": "Плавный лоадер."
          }
        }
      ],
      "seniorTips": [
        "Используйте forwards, чтобы сохранить финальное состояние анимации."
      ],
      "commonMistakes": [
        {
          "bad": "@keyframes bad { to { left: 50px; } }",
          "good": "@keyframes good { to { transform: translateX(50px); } }",
          "reason": "transform работает на GPU."
        }
      ],
      "keyTakeaways": [
        "@keyframes задает кадры.",
        "infinite зацикливает анимацию."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"spin-d\"><div class=\"sp\"></div></div>",
      "initialCss": "@keyframes sp-rot { to { transform: rotate(360deg); } }\n.spin-d { padding: 30px; background: white; border-radius: 12px; text-align: center; }\n.sp { width: 32px; height: 32px; border: 4px solid #e0e7ff; border-top-color: #4f46e5; border-radius: 50%; animation: sp-rot 0.8s linear infinite; margin: 0 auto; }",
      "initialJs": "console.log('Keyframes loaded');",
      "instructions": "Посмотрите вращение спиннера."
    },
    "task": {
      "title": "Пульсирующая точка",
      "scenario": "Создайте точку со статусом онлайн и анимацией pulse.",
      "criteria": [
        "Описан @keyframes pulse",
        "Применено animation: pulse 1.2s infinite alternate"
      ],
      "starterCode": {
        "html": "<div class=\"st\"><span class=\"dot\"></span> Live</div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте @keyframes pulse { from { transform: scale(1); } to { transform: scale(1.3); } } .dot { animation: pulse 1.2s infinite alternate; }"
      ],
      "solution": {
        "html": "<div class=\"st\"><span class=\"dot\"></span> Live</div>",
        "css": "@keyframes pulse { from { transform: scale(1); opacity: 0.8; } to { transform: scale(1.3); opacity: 1; } }\n.st { display: flex; align-items: center; gap: 8px; padding: 16px; background: white; border-radius: 8px; font-weight: bold; }\n.dot { width: 10px; height: 10px; background: #10b981; border-radius: 50%; animation: pulse 1.2s infinite alternate; }",
        "explanation": "Пульсирующий бейдж."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c17-q1",
          "question": "Какое свойство зацикливает анимацию?",
          "options": [
            "animation-loop",
            "animation-iteration-count: infinite",
            "repeat: true",
            "forever"
          ],
          "correctIndex": 1,
          "explanation": "animation-iteration-count: infinite."
        }
      ]
    }
  },
  {
    "id": "css-18",
    "moduleId": "css",
    "level": 18,
    "title": "Псевдоклассы и псевдоэлементы",
    "subtitle": ":hover, :focus-visible, :nth-child(), ::before и ::after",
    "description": "Продвинутая селекция: состояния :hover/:active/:focus-visible, псевдоклассы :nth-child(2n), декорации ::before/::after.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "PseudoClasses",
      "PseudoElements"
    ],
    "theory": {
      "overview": "Псевдоклассы выбирают по состоянию, а псевдоэлементы создают декоративные блоки без лишнего HTML.",
      "sections": [
        {
          "title": "::before, ::after и content",
          "content": "- Обязательно `content: \"\"`.\n- `:nth-child(even)` — четные строки зебры.\n- `:focus-visible` — рамка только для клавиатуры.",
          "codeExample": {
            "language": "css",
            "title": "Подчеркивание ::after",
            "code": ".link { position: relative; color: #4f46e5; text-decoration: none; }\n.link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: #4f46e5; transition: width 0.3s; }\n.link:hover::after { width: 100%; }",
            "explanation": "Подчеркивание ссылки."
          }
        }
      ],
      "seniorTips": [
        "Используйте :focus-visible вместо :focus."
      ],
      "commonMistakes": [
        {
          "bad": ".card::before { width: 10px; } /* Забыт content */",
          "good": ".card::before { content: ''; width: 10px; }",
          "reason": "Без content псевдоэлемент не отрендерится."
        }
      ],
      "keyTakeaways": [
        "::before требует content: ''.",
        ":nth-child(even) раскрашивает зебру."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"p-demo\"><a class=\"c-link\" href=\"#\">Наведите мышь</a></div>",
      "initialCss": ".p-demo { padding: 30px; background: white; border-radius: 12px; text-align: center; }\n.c-link { position: relative; text-decoration: none; color: #4f46e5; font-size: 18px; font-weight: bold; }\n.c-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 3px; background: #4f46e5; transition: width 0.3s; }\n.c-link:hover::after { width: 100%; }",
      "initialJs": "console.log('Pseudo loaded');",
      "instructions": "Наведите на ссылку."
    },
    "task": {
      "title": "Маркер списка через ::before",
      "scenario": "Замените маркеры списка на галочки с помощью ::before.",
      "criteria": [
        "Список list-style: none",
        "Применен ::before с content: '✓ '"
      ],
      "starterCode": {
        "html": "<ul class=\"cl\"><li>Чистый код</li></ul>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .cl { list-style: none; } .cl li::before { content: '✓ '; color: #10b981; }"
      ],
      "solution": {
        "html": "<ul class=\"cl\"><li>Чистый код</li></ul>",
        "css": ".cl { list-style: none; padding: 0; }\n.cl li { font-weight: bold; }\n.cl li::before { content: '✓ '; color: #10b981; margin-right: 6px; }",
        "explanation": "Кастомный маркер."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c18-q1",
          "question": "Какое свойство обязательно для ::before?",
          "options": [
            "display",
            "content: ''",
            "position",
            "width"
          ],
          "correctIndex": 1,
          "explanation": "Свойство content обязательно."
        }
      ]
    }
  },
  {
    "id": "css-19",
    "moduleId": "css",
    "level": 19,
    "title": "Современный CSS: clamp, min, max и calc",
    "subtitle": "Адаптивные вычисления calc(), fluid typography через clamp()",
    "description": "Математика CSS: смешанные единицы calc(100% - 40px), адаптивный fluid-текст clamp(1rem, 2.5vw, 2.5rem), min() и max().",
    "estimatedMinutes": 35,
    "difficulty": "advanced",
    "tags": [
      "CSS",
      "Math",
      "Clamp",
      "Calc"
    ],
    "theory": {
      "overview": "clamp() и calc() создают плавную адаптивную типографику без медиа-запросов.",
      "sections": [
        {
          "title": "clamp(min, val, max)",
          "content": "- `font-size: clamp(1.2rem, 3vw, 2.5rem)`: плавное масштабирование шрифта от 1.2rem до 2.5rem.\n- `calc(100vh - 70px)`: высота экрана за вычетом шапки.",
          "codeExample": {
            "language": "css",
            "title": "Fluid текст",
            "code": "h1 { font-size: clamp(1.5rem, 3vw + 1rem, 3rem); line-height: 1.2; }",
            "explanation": "Плавный размер заголовка."
          }
        }
      ],
      "seniorTips": [
        "Ставьте пробелы вокруг знаков в calc()."
      ],
      "commonMistakes": [
        {
          "bad": "calc(100%-20px)",
          "good": "calc(100% - 20px)",
          "reason": "Обязательны пробелы вокруг знаков."
        }
      ],
      "keyTakeaways": [
        "clamp() ограничивает значение диапазоном."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"cl-demo\"><h2 class=\"fl-t\">Fluid текст</h2></div>",
      "initialCss": ".cl-demo { padding: 20px; background: white; border-radius: 12px; text-align: center; }\n.fl-t { font-size: clamp(1.2rem, 4vw, 2.2rem); color: #4f46e5; }",
      "initialJs": "console.log('Math loaded');",
      "instructions": "Попробуйте изменить clamp."
    },
    "task": {
      "title": "Адаптивный заголовок",
      "scenario": "Задайте заголовок через clamp(1.25rem, 3vw, 2.5rem).",
      "criteria": [
        "Использован clamp()"
      ],
      "starterCode": {
        "html": "<h1 class=\"bt\">Заголовок</h1>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте .bt { font-size: clamp(1.25rem, 3vw, 2.5rem); }"
      ],
      "solution": {
        "html": "<h1 class=\"bt\">Заголовок</h1>",
        "css": ".bt { font-size: clamp(1.25rem, 3vw, 2.5rem); color: #0f172a; font-weight: 800; text-align: center; }",
        "explanation": "Fluid заголовок."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c19-q1",
          "question": "Сколько аргументов у clamp()?",
          "options": [
            "1",
            "2",
            "3 (min, val, max)",
            "4"
          ],
          "correctIndex": 2,
          "explanation": "clamp(min, preferred, max) принимает 3 аргумента."
        }
      ]
    }
  },
  {
    "id": "css-20",
    "moduleId": "css",
    "level": 20,
    "title": "Методологии CSS (BEM) и организация кода",
    "subtitle": "Блок-Элемент-Модификатор, модульность и архитектура стилей",
    "description": "Архитектура стилей: БЭМ (Block, Element, Modifier), правила именования, плоская специфичность 10.",
    "estimatedMinutes": 35,
    "difficulty": "intermediate",
    "tags": [
      "CSS",
      "BEM",
      "Architecture"
    ],
    "theory": {
      "overview": "БЭМ решает проблему конфликтов имен классов в больших командах.",
      "sections": [
        {
          "title": "Блок, Элемент, Модификатор",
          "content": "- Блок: `.card`\n- Элемент: `.card__title` (через `__`)\n- Модификатор: `.card--featured` (через `--`)\n- Плоская специфичность: всегда вес 10!",
          "codeExample": {
            "language": "html",
            "title": "БЭМ разметка",
            "code": "<div class=\"card card--featured\">\n  <h3 class=\"card__title\">Заголовок</h3>\n  <button class=\"btn btn--primary\">Купить</button>\n</div>",
            "explanation": "Понятная структура компонентов."
          }
        }
      ],
      "seniorTips": [
        "Не делайте вложенных элементов вроде .card__header__title."
      ],
      "commonMistakes": [
        {
          "bad": ".header .nav ul li a { ... }",
          "good": ".nav__link { ... }",
          "reason": "БЭМ сохраняет плоский вес 10."
        }
      ],
      "keyTakeaways": [
        "Блок (.card), Элемент (.card__title), Модификатор (.card--dark)."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"c-card c-card--feat\"><h3 class=\"c-card__title\">Премиум</h3></div>",
      "initialCss": ".c-card { padding: 20px; background: white; border-radius: 12px; border: 2px solid #e2e8f0; }\n.c-card--feat { border-color: #4f46e5; }\n.c-card__title { color: #1e293b; margin: 0; }",
      "initialJs": "console.log('BEM loaded');",
      "instructions": "Изучите БЭМ классы."
    },
    "task": {
      "title": "Карточка по БЭМ",
      "scenario": "Назовите классы карточки по БЭМ: блок .card, __title, __date, --urgent.",
      "criteria": [
        "Использованы классы по БЭМ"
      ],
      "starterCode": {
        "html": "<div class=\"news news--urgent\"><h3 class=\"news__title\">Новость</h3></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Примените стили к .news, .news--urgent, .news__title."
      ],
      "solution": {
        "html": "<div class=\"news news--urgent\"><h3 class=\"news__title\">Новость</h3></div>",
        "css": ".news { padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #94a3b8; }\n.news--urgent { border-left-color: #ef4444; background: #fef2f2; }\n.news__title { margin: 0; color: #1e293b; }",
        "explanation": "БЭМ структура."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c20-q1",
          "question": "Чем отделяется элемент от блока в БЭМ?",
          "options": [
            ".",
            "__ (двойным подчеркиванием)",
            "--",
            "/"
          ],
          "correctIndex": 1,
          "explanation": "Двойным подчеркиванием (__)."
        }
      ]
    }
  },
  {
    "id": "css-21",
    "moduleId": "css",
    "level": 21,
    "title": "CSS-фильтры и современные эффекты",
    "subtitle": "Backdrop-filter, glassmorphism, blur, clip-path и mix-blend-mode",
    "description": "Графические эффекты: матовое стекло Glassmorphism через backdrop-filter: blur(), обрезки clip-path, drop-shadow.",
    "estimatedMinutes": 35,
    "difficulty": "advanced",
    "tags": [
      "CSS",
      "Filters",
      "Glassmorphism"
    ],
    "theory": {
      "overview": "CSS фильтры создают эффекты уровня графических редакторов прямо в браузере.",
      "sections": [
        {
          "title": "Glassmorphism (Матовое стекло)",
          "content": "- `background: rgba(255, 255, 255, 0.65)`\n- `backdrop-filter: blur(16px)`\n- `border: 1px solid rgba(255, 255, 255, 0.4)`",
          "codeExample": {
            "language": "css",
            "title": "Glassmorphism",
            "code": ".glass {\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 16px;\n}",
            "explanation": "Матовое стекло."
          }
        }
      ],
      "seniorTips": [
        "Добавляйте -webkit-backdrop-filter для поддержки в Safari."
      ],
      "commonMistakes": [
        {
          "bad": "backdrop-filter: blur(10px); /* Без webkit префикса */",
          "good": "-webkit-backdrop-filter: blur(10px);\nbackdrop-filter: blur(10px);",
          "reason": "Safari требует webkit префикс."
        }
      ],
      "keyTakeaways": [
        "backdrop-filter: blur() размывает фон под элементом."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"g-bg\"><div class=\"g-card\"><h4>Glassmorphism</h4></div></div>",
      "initialCss": ".g-bg { padding: 30px; background: linear-gradient(135deg, #6366f1, #ec4899); border-radius: 16px; }\n.g-card { padding: 20px; background: rgba(255, 255, 255, 0.25); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 12px; color: white; text-align: center; }",
      "initialJs": "console.log('Filters loaded');",
      "instructions": "Оцените эффект стекла."
    },
    "task": {
      "title": "Модалка Glassmorphism",
      "scenario": "Оформите блок с backdrop-filter: blur(12px) и полупрозрачным фоном.",
      "criteria": [
        "Применен backdrop-filter: blur(12px)",
        "Задан полупрозрачный rgba фон"
      ],
      "starterCode": {
        "html": "<div class=\"gm\"><h3>Уведомление</h3></div>",
        "css": "/* Стили */\n"
      },
      "hints": [
        "Задайте background: rgba(255,255,255,0.7); backdrop-filter: blur(12px); border-radius: 12px;"
      ],
      "solution": {
        "html": "<div class=\"gm\"><h3>Уведомление</h3></div>",
        "css": ".gm { padding: 24px; background: rgba(255, 255, 255, 0.7); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }",
        "explanation": "Стильное стекло."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c21-q1",
          "question": "Какое свойство размывает фон ПОД элементом?",
          "options": [
            "filter: blur()",
            "backdrop-filter: blur()",
            "background-blur",
            "blur()"
          ],
          "correctIndex": 1,
          "explanation": "backdrop-filter: blur() размывает подложку под элементом."
        }
      ]
    }
  }
];
