import { Lesson } from '../types/curriculum';

export const cssLessons: Lesson[] = [
  {
    "id": "css-1",
    "moduleId": "css",
    "level": 1,
    "title": "Основы CSS: Селекторы, Каскад и Специфичность",
    "subtitle": "Синтаксис CSS3, каскад, наследование, комбинаторы и математика специфичности",
    "description": "Глубокое освоение фундамента стилизации: анатомия CSS-правила, классификация селекторов, комбинаторы (> + ~), расчёт весов специфичности (Specificity Matrix), управление наследованием и глобальный сброс стилей.",
    "estimatedMinutes": 45,
    "difficulty": "beginner",
    "tags": [
      "CSS3",
      "Selectors",
      "Specificity",
      "Cascade",
      "Inheritance",
      "Box Sizing"
    ],
    "theory": {
      "overview": "CSS (`Cascading Style Sheets` — каскадные таблицы стилей) — это декларативный язык, отвечающий за визуальное представление, типографику, цвета и раскладку веб-документов. В то время как HTML задает *смысл и структуру*, CSS определяет *как эта структура выглядит на экране*.\n\nАрхитектура CSS строится на трёх фундаментальных концепциях:\n- **1. Каскад (The Cascade)**: набор строгих правил, по которым браузер разрешает конфликты, когда к одному и тому же элементу применяются взаимоисключающие стили из разных источников.\n- **2. Специфичность (Specificity)**: математический вес селектора, определяющий, какое правило имеет наивысший приоритет.\n- **3. Наследование (Inheritance)**: механизм автоматической передачи значений свойств (например, цвета текста `color` и шрифта `font-family`) от родительских элементов к дочерним.",
      "sections": [
        {
          "title": "Анатомия CSS-правила и способы подключения стилей",
          "content": "Каждое CSS-правило (Rule Set) состоит из двух частей:\n- **Селектор (Selector)**: указывает браузеру, к каким именно элементам в DOM-дереве применить стили.\n- **Блок объявлений (Declaration Block)**: обрамлён фигурными скобками `{ ... }` и содержит одно или несколько объявлений.\n- **Объявление (Declaration)**: состоит из имени свойства (`Property`), двоеточия, значения (`Value`) и обязательной точки с запятой (`;`).\n\nВ современной веб-разработке используются три способа подключения CSS:\n- 1. **Внешний файл (External Stylesheet — Best Practice)**: `<link rel=\"stylesheet\" href=\"style.css\">`. Стили кэшируются браузером, отделены от разметки и переиспользуются на всех страницах проекта.\n- 2. **Внутренний блок (Internal Styles)**: тег `<style>` в секции `<head>`. Применяется для критического CSS (Critical CSS) для ускорения первого экрана.\n- 3. **Встроенные стили (Inline Styles — Anti-pattern)**: атрибут `style=\"...\"` прямо в HTML-теге. Запрещены в промышленной разработке, так как создают гигантский вес специфичности и нарушают принцип разделения ответственности.",
          "codeExample": {
            "language": "css",
            "title": "Синтаксис CSS-правила и оформление компонента кнопки",
            "code": "/* Селектор класса с блоком свойств */\n.btn-primary {\n  background-color: #2dff8a;\n  color: #03060a;\n  padding: 10px 20px;\n  border: 1px solid #2dff8a;\n  border-radius: 4px;\n  font-family: 'JetBrains Mono', monospace;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n/* Псевдокласс состояния наведения */\n.btn-primary:hover {\n  background-color: #14b365;\n  box-shadow: 0 0 15px rgba(45, 255, 138, 0.4);\n}",
            "explanation": "Классы создают переиспользуемые UI-компоненты с четкой семантикой и состояниями."
          }
        },
        {
          "title": "Полная классификация селекторов: Базовые, Комбинаторы и Атрибуты",
          "content": "Селекторы позволяют точечно выбирать элементы любой сложности:\n- **Универсальный (`*`)**: выбирает абсолютно все элементы на странице (используется для сброса стилей).\n- **По тегу (`h1`, `p`, `button`)**: задает базовую типографику и стили по умолчанию.\n- **По классу (`.card`, `.badge`)**: основной инструмент фронтенд-инженера. Классы можно комбинировать и переиспользовать.\n- **По идентификатору (`#user-profile`)**: выбирает уникальный элемент. Имеет избыточно высокий вес специфичности, поэтому в современном CSS для стилизации не рекомендуется.\n\n**Комбинаторы связей между элементами:**\n- **Потомок (пробел `A B`)**: выбирает любой элемент `B`, вложенный внутрь `A` на любую глубину.\n- **Прямой дочерний (`A > B`)**: выбирает только непосредственных детей первого уровня. Защищает от случайного проваливания стилей во вложенные блоки.\n- **Смежный соседний (`A + B`)**: выбирает элемент `B`, который идет непосредственно сразу после `A` на том же уровне.\n- **Общий родственный (`A ~ B`)**: выбирает все элементы `B`, идущие после `A` внутри общего родителя.\n\n**Атрибутные селекторы:**\n- `[disabled]` — наличие атрибута.\n- `[type=\"email\"]` — точное совпадение значения.\n- `[href^=\"https\"]`: значение начинается с `https`.\n- `[href$=\".pdf\"]`: значение заканчивается на `.pdf`.\n- `[class*=\"icon-\"]`: значение содержит подстроку `icon-`.",
          "codeExample": {
            "language": "css",
            "title": "Практическое применение комбинаторов и атрибутных селекторов",
            "code": "/* Прямые дети карточки */\n.card-container > .card-item {\n  border: 1px solid #1a2230;\n  padding: 16px;\n}\n\n/* Заголовок, идущий сразу после баннера */\n.hero-banner + h1 {\n  margin-top: 24px;\n}\n\n/* Внешние защищенные ссылки */\n[target=\"_blank\"][rel*=\"noopener\"] {\n  color: #29e7ff;\n  text-decoration: underline;\n}\n\n/* Инпуты в состоянии ошибки */\ninput[data-valid=\"false\"] {\n  border-color: #ff3b5c;\n  background: rgba(255, 59, 92, 0.05);\n}",
            "explanation": "Комбинатор > выбирает прямых детей первого уровня, защищая вложенные компоненты от случайного наследования стилей."
          }
        },
        {
          "title": "Специфичность (Specificity): Математика приоритетов в CSS",
          "content": "Когда несколько правил претендуют на стилизацию одного свойства, браузер рассчитывает вектор специфичности из 4 уровней `(Inline, ID, Class, Element)`:\n- **Уровень 1 (Inline-стили, вес 1-0-0-0)**: атрибут `style=\"...\"` в HTML.\n- **Уровень 2 (Идентификаторы ID, вес 0-1-0-0)**: селекторы `#header`, `#nav`.\n- **Уровень 3 (Классы, Атрибуты, Псевдоклассы, вес 0-0-1-0)**: `.btn`, `[type=\"text\"]`, `:hover`, `:focus`.\n- **Уровень 4 (Теги и Псевдоэлементы, вес 0-0-0-1)**: `div`, `span`, `h1`, `::before`, `::after`.\n\n**Примеры расчета веса:**\n- `p` = `(0, 0, 0, 1)` (1 тег)\n- `.content p` = `(0, 0, 1, 1)` (1 класс + 1 тег)\n- `.sidebar .nav-list li.active a` = `(0, 0, 3, 2)` (3 класса + 2 тега)\n- `#main-nav .menu-item a:hover` = `(0, 1, 2, 1)` (1 ID + 1 класс + 1 псевдокласс + 1 тег)\n\n**Правило каскада при равном весе:**\nЕсли два селектора имеют абсолютно одинаковую специфичность, побеждает то правило, которое написано в коде **ниже (позже)**.\n\n**Опасность `!important`:**\nДиректива `!important` ломает нормальный каскад и перебивает любые веса. Её использование считается антипаттерном в архитектуре приложений, за исключением редких утилитных классов-хелперов.",
          "codeExample": {
            "language": "css",
            "title": "Демонстрация разрешения конфликтов специфичности",
            "code": "/* Вес: (0, 0, 0, 1) — проиграет */\np {\n  color: #a8c8b6;\n}\n\n/* Вес: (0, 0, 1, 0) — победит тег */\n.text-highlight {\n  color: #ffb02e;\n}\n\n/* Вес: (0, 1, 0, 0) — ID побеждает классы */\n#lead-paragraph {\n  color: #2dff8a;\n}\n\n/* Вес: (0, 1, 1, 1) — наивысший вес без !important */\n#main-content .card-body p {\n  color: #29e7ff;\n}",
            "explanation": "ID побеждает классы, а комбинация классов и тегов побеждает одиночные базовые селекторы."
          },
          "image": {
            "src": "/images/lessons/css-specificity-matrix.jpg",
            "alt": "CSS Specificity Matrix — визуализация расчёта приоритета селекторов по 4 уровням",
            "caption": "Специфичность CSS: Inline (1-0-0-0) > ID (0-1-0-0) > Class (0-0-1-0) > Element (0-0-0-1)"
          }
        },
        {
          "title": "Универсальный сброс стилей и модель Box-Sizing: Border-Box",
          "content": "Каждый браузер поставляется со встроенной таблицей стилей по умолчанию (`User Agent Stylesheet`). В разных браузерах (Chrome, Safari, Firefox) отступы заголовков, списков и кнопок по умолчанию различаются, создавая визуальную нестабильность.\n\n**Современный сброс стилей (CSS Reset):**\nПрофессиональные проекты начинаются с обязательного глобального правила:\n```css\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n```\n\n**Почему `box-sizing: border-box` критически важен?**\n- По умолчанию в CSS действует `content-box`: ширина элемента (`width`) задает только ширину контента. Если добавить `padding: 20px` и `border: 2px`, итоговая ширина элемента составит `width + 40px + 4px`, что приводит к вылезанию блоков за пределы экрана и горизонтальному скроллу.\n- В режиме `border-box` указанная ширина `width` фиксирует **внешний размер блока**, а внутренние отступы (`padding`) и рамка (`border`) вдавливаются внутрь, сохраняя предсказуемую геометрию верстки.",
          "codeExample": {
            "language": "css",
            "title": "Глобальный нормализатор стилей проекта",
            "code": "/* 1. Идеальный сброс боксовой модели */\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* 2. Базовые глобальные параметры типографики */\nhtml {\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  font-family: 'Inter', system-ui, sans-serif;\n  line-height: 1.5;\n  background-color: #06090d;\n  color: #d6f5e3;\n}\n\n/* 3. Медиа-элементы не должны вылезать за ширину контейнера */\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}",
            "explanation": "border-box фиксирует внешние габариты элемента, предотвращая поломку макета при добавлении padding и border."
          },
          "image": {
            "src": "/images/lessons/css-box-model.jpg",
            "alt": "Сравнение блочных моделей content-box vs border-box",
            "caption": "content-box vs border-box: border-box фиксирует общую ширину, предотвращая поломку верстки"
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: CSS для начинающих",
          "content": "Для наглядного закрепления синтаксиса CSS, селекторов, каскадности, блочной модели и практической стилизации рекомендуем видеоматериалы:\n\n- **[Полный Курс CSS / Изучение в одном видео для начинающих с нуля (YouTube)](https://youtu.be/sG12DK8vQTM?si=RBgvIW6z5sHqJi1W)** — всеобъемлющий видеокурс от школы itProger: подключение стилей, базовая стилизация текста и блоков, позиционирование, адаптивность и практические примеры верстки.\n- **[CSS для Начинающих - Практический Курс (YouTube)](https://youtu.be/SpCUuyZZTp8?si=B8mztYTL_fqIBBBp)** — фундаментальный практический видеокурс от Владилена Минина: синтаксис CSS, селекторы, специфичность, каскадность, блочная модель Box Model, Flexbox, позиционирование и верстка реального интерфейса."
        }
      ],
      "seniorTips": [
        "Старайтесь держать специфичность минимальной и плоской: стройте архитектуру стилей на одиночных классах (BEM: .block__element--modifier).",
        "Никогда не используйте идентификаторы (#id) для стилизации интерфейса. ID предназначены для JS-скриптов и якорей.",
        "Категорически избегайте использования !important в компонентах. Если стили не применяются — найдите и исправьте причину в специфичности селекторов.",
        "Используйте комбинатор прямого потомка (>), чтобы изолировать стили родителя от непреднамеренного влияния на вложенные дочерние компоненты.",
        "Помните о наследуемых свойствах: цвет (color), шрифт (font-family, font-size, font-weight) и межстрочный интервал (line-height) наследуются автоматически.",
        "Всегда включайте box-sizing: border-box для псевдоэлементов (*::before, *::after) тоже — иначе кастомные декоративные плашки сломают геометрию."
      ],
      "commonMistakes": [
        {
          "bad": "/* Селектор избыточной глубины */\n#main-wrapper div.container ul.menu-list li.item a.link span.text {\n  color: #2dff8a;\n}",
          "good": "/* Чистый компонентный класс по БЭМ */\n.menu-item__text {\n  color: #2dff8a;\n}",
          "reason": "Глубокая цепочка селекторов создает огромный вес специфичности, который невозможно переопределить, и замедляет работу парсера стилей браузера."
        },
        {
          "bad": ".modal-btn {\n  color: #ffffff !important;\n  background: #2dff8a !important;\n}",
          "good": ".modal-btn {\n  color: #ffffff;\n  background: #2dff8a;\n}",
          "reason": "Использование !important порождает «гонку вооружений» в CSS. В дальнейшем вам придется писать еще более перегруженный селектор с !important для любого изменения темы или состояния."
        },
        {
          "bad": "div {\n  width: 100%;\n  padding: 20px;\n  border: 5px solid #2dff8a;\n  /* Без box-sizing элемент станет шире 100% и вызовет горизонтальный скролл */\n}",
          "good": "div {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px;\n  border: 5px solid #2dff8a;\n}",
          "reason": "При стандартном content-box padding и border прибавляются к 100% ширины, что ломает контейнерную верстку на мобильных экранах."
        },
        {
          "bad": "/* Использование ID в CSS */\n#submit-btn {\n  background: #29e7ff;\n}",
          "good": "/* Использование класса */\n.submit-button {\n  background: #29e7ff;\n}",
          "reason": "ID невозможно переиспользовать для второй кнопки на странице, а его вес (0, 1, 0, 0) перебивает любые классовые модификаторы состояния."
        }
      ],
      "keyTakeaways": [
        "CSS-правило состоит из Селектора и Блока объявлений с парами свойство: значение.",
        "Специфичность рассчитывается по 4 уровням: (Inline, ID, Class, Element). Чем выше вес, тем приоритетнее правило.",
        "При равном весе специфичности побеждает правило, объявленное в CSS-файле ниже.",
        "Комбинатор > выбирает прямых детей, пробел выбирает всех потомков, + выбирает первого соседа, ~ выбирает всех соседей.",
        "box-sizing: border-box включает padding и border в общую ширину элемента, предотвращая выпадение за экран.",
        "Свойства типографики (color, font, line-height) наследуются дочерними узлами автоматически."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"product-card\">\n  <span class=\"badge badge-sale\">Sale -30%</span>\n  <h2 class=\"product-title\">Cyberpunk Terminal Keyboard</h2>\n  <p class=\"product-category\">Категория: <span>Периферия и аксессуары</span></p>\n  <p class=\"product-desc\">\n    Механическая клавиатура с RGB-подсветкой и переключателями Hot-Swap.\n  </p>\n  <div class=\"price-block\">\n    <span class=\"old-price\">$149</span>\n    <span class=\"new-price\">$99</span>\n  </div>\n  <button type=\"button\" class=\"btn btn-buy\">Добавить в корзину</button>\n</div>",
      "initialCss": "/* Базовый сброс */\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\n.product-card {\n  background: #0a0e13;\n  border: 1px solid #1a2230;\n  padding: 24px;\n  border-radius: 8px;\n  color: #d6f5e3;\n  font-family: 'Inter', sans-serif;\n  max-width: 400px;\n}\n\n.badge {\n  display: inline-block;\n  padding: 3px 8px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-radius: 3px;\n  margin-bottom: 12px;\n}\n\n.badge-sale {\n  background: rgba(255, 43, 214, 0.15);\n  color: #ff2bd6;\n  border: 1px solid rgba(255, 43, 214, 0.3);\n}\n\n.product-title {\n  font-size: 20px;\n  margin-bottom: 6px;\n  color: #ffffff;\n}\n\n.product-category {\n  font-size: 12px;\n  color: #6c8a7b;\n  margin-bottom: 12px;\n}\n\n.product-category span {\n  color: #29e7ff;\n  font-weight: 600;\n}\n\n.product-desc {\n  font-size: 13px;\n  line-height: 1.6;\n  color: #a8c8b6;\n  margin-bottom: 16px;\n}\n\n.price-block {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.old-price {\n  font-size: 14px;\n  color: #6c8a7b;\n  text-decoration: line-through;\n}\n\n.new-price {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2dff8a;\n  font-family: 'JetBrains Mono', monospace;\n}\n\n.btn-buy {\n  width: 100%;\n  background: #2dff8a;\n  color: #03060a;\n  border: none;\n  padding: 12px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn-buy:hover {\n  background: #14b365;\n  box-shadow: 0 0 15px rgba(45, 255, 138, 0.4);\n}",
      "initialJs": "console.log('Песочница CSS Уровень 1: Стили успешно применились!');",
      "instructions": "Попробуйте изменить селектор .new-price, перекрасить бейдж в другой цвет с помощью rgba() и настроить hover-эффект кнопки!"
    },
    "task": {
      "title": "Стилизация карточки товара интернет-магазина",
      "scenario": "Вам поручено стилизовать карточку товара для маркетплейса электроники. Необходимо применить классовые селекторы, настроить модель box-sizing, задать контрастные цвета цен и оформить кнопку покупки с плавным состоянием наведения :hover.",
      "criteria": [
        "Задан глобальный сброс box-sizing: border-box для всех элементов",
        "Карточка .product-card имеет темный фон #0a0e13 и рамку #1a2230",
        "Заголовок .product-title окрашен в белый цвет #ffffff",
        "Новая цена .new-price выделена неоновым цветом #2dff8a и увеличенным шрифтом",
        "Кнопка покупки .btn-buy имеет фон #2dff8a и состояние :hover"
      ],
      "starterCode": {
        "html": "<div class=\"product-card\">\n  <h2 class=\"product-title\">Беспроводные наушники</h2>\n  <p class=\"product-desc\">Hi-Res звук с активным шумоподавлением ANC.</p>\n  <div class=\"price-box\">\n    <span class=\"new-price\">$79</span>\n  </div>\n  <button type=\"button\" class=\"btn-buy\">Купить сейчас</button>\n</div>",
        "css": "/* Напишите ваши стили для карточки */\n* {\n  box-sizing: border-box;\n}\n\n.product-card {\n  \n}\n"
      },
      "hints": [
        "Используйте свойство cursor: pointer для кнопки покупки.",
        "Для плавного изменения цвета при :hover добавьте transition: all 0.2s ease.",
        "Используйте font-family: 'JetBrains Mono', monospace для форматирования цены."
      ],
      "solution": {
        "html": "<div class=\"product-card\">\n  <h2 class=\"product-title\">Беспроводные наушники</h2>\n  <p class=\"product-desc\">Hi-Res звук с активным шумоподавлением ANC.</p>\n  <div class=\"price-box\">\n    <span class=\"new-price\">$79</span>\n  </div>\n  <button type=\"button\" class=\"btn-buy\">Купить сейчас</button>\n</div>",
        "css": "* { box-sizing: border-box; margin: 0; padding: 0; }\n.product-card { background: #0a0e13; border: 1px solid #1a2230; padding: 24px; border-radius: 8px; color: #d6f5e3; font-family: sans-serif; }\n.product-title { font-size: 20px; color: #ffffff; margin-bottom: 8px; }\n.product-desc { font-size: 14px; color: #a8c8b6; line-height: 1.5; margin-bottom: 16px; }\n.price-box { margin-bottom: 16px; }\n.new-price { font-size: 24px; font-weight: bold; color: #2dff8a; font-family: monospace; }\n.btn-buy { width: 100%; background: #2dff8a; color: #03060a; border: none; padding: 10px 16px; border-radius: 4px; font-weight: bold; cursor: pointer; transition: background 0.2s; }\n.btn-buy:hover { background: #14b365; }",
        "explanation": "Чистая стилизация карточки с соблюдением box-sizing, селекторов классов и оформлением интерактивного состояния :hover."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "c1-q1",
          "question": "Какой селектор выберет ТОЛЬКО абзац с текстом «Первый»?",
          "codeSnippet": "<div class=\"article\">\n  <p>Первый</p>\n  <div><p>Второй</p></div>\n</div>\n<p>Третий</p>",
          "options": [
            "`.article p` — потомок на любой глубине вложенности",
            "`.article + p` — первый соседний абзац сразу после контейнера",
            "`.article > p` — только прямой дочерний элемент первого уровня",
            "`.article ~ p` — все абзацы-соседи, идущие после контейнера"
          ],
          "correctIndex": 2,
          "explanation": "Комбинатор `>` выбирает только непосредственных детей, поэтому под него попадает «Первый», но не «Второй» — тот лежит на уровень глубже. Селектор с пробелом захватил бы оба абзаца внутри контейнера. А `+` и `~` работают с соседями контейнера и выбрали бы «Третий», который лежит уже снаружи."
        },
        {
          "id": "c1-q2",
          "question": "Какой из селекторов обладает НАИБОЛЬШИМ весом специфичности?",
          "options": [
            "`body div.container p.text::before`",
            "`.header .menu-item.active a:hover`",
            "`#header .nav-link`",
            "`nav ul li a:not(.disabled)`"
          ],
          "correctIndex": 2,
          "explanation": "Специфичность сравнивается по разрядам слева направо, и разряд идентификаторов старше разряда классов при любом их количестве. Веса такие: `body div.container p.text::before` — (0,0,2,4), `#header .nav-link` — (0,1,1,0), `.header .menu-item.active a:hover` — (0,0,4,1), `nav ul li a:not(.disabled)` — (0,0,1,4), поскольку `:not()` сам по себе веса не имеет, а считается его аргумент. Единственный идентификатор перевешивает даже четыре класса."
        },
        {
          "id": "c1-q3",
          "question": "Блоку заданы `width: 200px; padding: 20px; border: 2px solid`. Какую ширину он займёт при `content-box` и при `border-box`?",
          "options": [
            "`content-box` — 200px, `border-box` — 244px",
            "Оба режима дадут 244px: `box-sizing` влияет только на высоту элемента",
            "`content-box` — 240px, `border-box` — 196px: рамка в расчёт не входит",
            "`content-box` — 244px, `border-box` — 200px"
          ],
          "correctIndex": 3,
          "explanation": "В режиме `content-box` заданная ширина относится только к содержимому, а отступы и рамки прибавляются снаружи: 200 + 20·2 + 2·2 = 244 пикселя. В режиме `border-box` число 200 фиксирует внешний габарит, и те же отступы с рамкой вдавливаются внутрь, оставляя содержимому 152 пикселя. Именно поэтому `border-box` включают глобально: ширина блока перестаёт зависеть от его внутренней отделки."
        },
        {
          "id": "c1-q4",
          "question": "Какая группа свойств наследуется дочерними элементами автоматически?",
          "options": [
            "`color`, `font-family`, `line-height`, `visibility`",
            "`color`, `margin`, `font-size`, `text-align`",
            "`background-color`, `font-weight`, `padding`, `color`",
            "`border`, `line-height`, `letter-spacing`, `display`"
          ],
          "correctIndex": 0,
          "explanation": "Наследуются в основном свойства текста: `color`, семейство и размер шрифта, `line-height`, `text-align`, `letter-spacing`, а также `visibility`, о котором часто забывают. Всё, что относится к геометрии и оформлению коробки, — `margin`, `padding`, `border`, `background`, `display` — не наследуется: иначе каждый вложенный блок повторял бы рамку и фон родителя."
        },
        {
          "id": "c1-q5",
          "question": "У элемента в разметке стоит `style=\"color: red\"`, а в таблице стилей объявлено `.title { color: blue !important; }`. Какой цвет победит?",
          "options": [
            "Красный: встроенный стиль имеет наивысший вес и перебивает любые селекторы",
            "Синий: `!important` перебивает встроенный стиль, у которого своего `!important` нет",
            "Красный: директива `!important` действует только внутри одной таблицы стилей",
            "Синий, но исключительно потому, что это правило объявлено ниже по каскаду"
          ],
          "correctIndex": 1,
          "explanation": "`!important` работает не как прибавка к специфичности, а как переход в более приоритетный слой каскада. Обычные объявления сравниваются между собой, и там встроенный стиль сильнее любого селектора. Но объявление с `!important` разбирается раньше и побеждает встроенный стиль — перебить его смог бы только `style=\"color: red !important\"`. Порядок строк в файле здесь ни при чём: он решает исход лишь при равном приоритете."
        }
      ]
    }
  },
  {
    "id": "css-2",
    "moduleId": "css",
    "level": 2,
    "title": "Flexbox и адаптивная верстка",
    "subtitle": "Одномерная раскладка, оси, выравнивание и медиа-запросы",
    "description": "Освойте CSS Flexbox для построения гибких одномерных раскладок, научитесь использовать медиа-запросы и создавать адаптивные интерфейсы по принципу Mobile First.",
    "estimatedMinutes": 60,
    "difficulty": "intermediate",
    "tags": [
      "flexbox",
      "responsive",
      "media-queries",
      "mobile-first",
      "layout"
    ],
    "theory": {
      "overview": "В первом уроке мы изучили селекторы, каскад и специфичность. Теперь настало время освоить Flexbox — главный инструмент одномерной раскладки в CSS. Flexbox (Flexible Box Layout Module) решает задачи, которые раньше требовали float-хаков, clearfix и абсолютного позиционирования: центрирование элементов, равномерное распределение пространства, выравнивание по осям и адаптивные сетки.\n\nFlexbox оперирует двумя осями: Main Axis (главная ось, по умолчанию горизонтальная) и Cross Axis (поперечная ось, перпендикулярная главной). Все свойства выравнивания привязаны к этим осям, и именно понимание осей — ключ к мастерству Flexbox.",
      "sections": [
        {
          "title": "Flex-контейнер: display:flex и управление осями",
          "content": "Для активации Flexbox достаточно одного свойства на родительском элементе: `display: flex`. Все прямые дочерние элементы автоматически становятся flex-items (гибкими элементами).\n\nСвойства flex-контейнера (родителя):\n\n`flex-direction` — определяет направление главной оси:\n- `row` (по умолчанию) — горизонтально, слева направо\n- `row-reverse` — горизонтально, справа налево\n- `column` — вертикально, сверху вниз\n- `column-reverse` — вертикально, снизу вверх\n\n`flex-wrap` — управляет переносом элементов:\n- `nowrap` (по умолчанию) — все элементы в одну линию, могут сжиматься\n- `wrap` — перенос на новую строку при нехватке места\n- `wrap-reverse` — перенос в обратном направлении\n\n`justify-content` — выравнивание вдоль ГЛАВНОЙ оси:\n- `flex-start` — прижать к началу\n- `flex-end` — прижать к концу\n- `center` — центрировать\n- `space-between` — крайние элементы к краям, остальные равномерно\n- `space-around` — равные отступы вокруг каждого элемента\n- `space-evenly` — абсолютно равные промежутки\n\n`align-items` — выравнивание вдоль ПОПЕРЕЧНОЙ оси:\n- `stretch` (по умолчанию) — растянуть на всю высоту контейнера\n- `flex-start` — прижать к верху\n- `flex-end` — прижать к низу\n- `center` — центрировать вертикально\n- `baseline` — выровнять по базовой линии текста\n\n`gap` — отступ между flex-items (заменяет margin-хаки):\n- `gap: 16px` — равный зазор\n- `row-gap: 16px; column-gap: 24px` — раздельные зазоры",
          "image": {
            "src": "/images/lessons/css-flexbox-layout.jpg",
            "alt": "Визуализация CSS Flexbox: main axis, cross axis, justify-content и align-items",
            "caption": "Flexbox: justify-content управляет главной осью, align-items — поперечной. gap задаёт отступы между элементами"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Навигационная панель с Flexbox */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: #0a0e13;\n  gap: 16px;\n}\n\n.navbar-logo {\n  font-size: 20px;\n  font-weight: 700;\n  color: #2dff8a;\n}\n\n.navbar-links {\n  display: flex;\n  gap: 24px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/* Абсолютное центрирование */\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}",
            "title": "Flexbox: навигация и центрирование",
            "explanation": "space-between прижимает логотип к левому краю, ссылки — к правому. Вложенный flex (navbar-links) выстраивает ссылки горизонтально с gap. Абсолютное центрирование достигается justify-content: center + align-items: center."
          }
        },
        {
          "title": "Flex-элементы: flex-grow, flex-shrink, flex-basis",
          "content": "Свойства flex-элементов (детей) определяют, как они делят доступное пространство внутри контейнера.\n\n`flex-grow` — коэффициент роста. Определяет, как элемент занимает СВОБОДНОЕ пространство:\n- `flex-grow: 0` (по умолчанию) — не растёт, сохраняет свой размер\n- `flex-grow: 1` — забирает всё доступное свободное пространство\n- Если у всех элементов `flex-grow: 1` — они делят пространство поровну\n- Если у одного `flex-grow: 2`, а у остальных `1` — он получит в 2 раза больше свободного пространства\n\n`flex-shrink` — коэффициент сжатия. Определяет, насколько элемент может сжиматься при нехватке места:\n- `flex-shrink: 1` (по умолчанию) — сжимается пропорционально\n- `flex-shrink: 0` — не сжимается (фиксированная ширина)\n\n`flex-basis` — начальный размер элемента до распределения свободного пространства:\n- `flex-basis: auto` (по умолчанию) — размер определяется контентом или width\n- `flex-basis: 200px` — начальная ширина 200px\n- `flex-basis: 0` — игнорировать размер контента, делить пространство только по flex-grow\n\nСокращённое свойство `flex` — комбинирует grow, shrink, basis:\n- `flex: 1` = `flex: 1 1 0%` — растёт, сжимается, basis = 0\n- `flex: 0 0 200px` — не растёт, не сжимается, фиксированная ширина 200px\n- `flex: auto` = `flex: 1 1 auto` — гибкий с учётом размера контента\n\nПолезные паттерны:\n- `flex: 1` на все элементы — равные колонки\n- Sidebar: `flex: 0 0 280px`, Main: `flex: 1` — фиксированный сайдбар + гибкий контент\n- `order: -1` — визуально переместить элемент в начало (не влияет на DOM и a11y)",
          "codeExample": {
            "language": "css",
            "code": "/* Классический layout: sidebar + main */\n.layout {\n  display: flex;\n  min-height: 100vh;\n}\n\n.sidebar {\n  flex: 0 0 260px;  /* фиксированная ширина */\n  background: #0d1117;\n  padding: 24px;\n}\n\n.content {\n  flex: 1;  /* занимает всё оставшееся место */\n  padding: 24px 32px;\n}\n\n/* Карточки равной ширины с переносом */\n.cards-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.card {\n  flex: 1 1 280px;\n  /* Растёт, сжимается, минимум 280px */\n  /* При нехватке места — перенос на новую строку */\n  padding: 20px;\n  border: 1px solid #2a2f38;\n  border-radius: 8px;\n}",
            "title": "Sidebar Layout + адаптивная сетка карточек на Flexbox",
            "explanation": "Sidebar с flex: 0 0 260px не растёт и не сжимается. Content с flex: 1 занимает всё остальное. Карточки с flex: 1 1 280px автоматически выстраиваются в сетку: при ширине > 280px × N+gap — N колонок, при нехватке места — перенос."
          }
        },
        {
          "title": "Медиа-запросы и подход Mobile First",
          "content": "Медиа-запросы (`@media`) позволяют применять CSS-правила условно, в зависимости от характеристик устройства: ширины viewport, ориентации экрана, предпочтений пользователя.\n\nПодход Mobile First — стандарт индустрии. Его суть: базовые стили пишутся для мобильных экранов (самый простой layout), затем через `@media (min-width: ...)` добавляются расширения для планшетов и десктоп.\n\nПочему Mobile First?\n1. Производительность: мобильные устройства получают минимум CSS, не загружая лишние правила\n2. Приоритизация контента: заставляет дизайнера показать только важное на маленьком экране\n3. Прогрессивное улучшение: базовый опыт работает везде, улучшения добавляются для мощных устройств\n\nСтандартные брейкпоинты (Bootstrap/Tailwind convention):\n- Мобильные: `0 - 639px` (базовые стили, без @media)\n- Планшеты: `@media (min-width: 640px)` — sm\n- Малые десктопы: `@media (min-width: 768px)` — md\n- Десктопы: `@media (min-width: 1024px)` — lg\n- Большие экраны: `@media (min-width: 1280px)` — xl\n\nПолезные медиа-фичи:\n\n`prefers-color-scheme: dark` — тёмная тема ОС\n`prefers-reduced-motion: reduce` — пользователь отключил анимации (a11y!)\n`hover: hover` — устройство поддерживает hover (десктоп)\n`orientation: landscape` / `portrait` — ориентация экрана",
          "codeExample": {
            "language": "css",
            "code": "/* Mobile First: базовые стили для мобильных */\n.container {\n  padding: 16px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.grid {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.card {\n  padding: 16px;\n  border: 1px solid #2a2f38;\n  border-radius: 8px;\n}\n\n/* Планшеты: 2 колонки */\n@media (min-width: 640px) {\n  .grid {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .card {\n    flex: 1 1 calc(50% - 8px);\n  }\n}\n\n/* Десктоп: 3 колонки */\n@media (min-width: 1024px) {\n  .card {\n    flex: 1 1 calc(33.333% - 11px);\n  }\n}\n\n/* Тёмная тема ОС */\n@media (prefers-color-scheme: dark) {\n  :root { --bg: #0a0e13; --fg: #e0e0e0; }\n}\n\n/* Отключение анимаций (a11y) */\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}",
            "title": "Mobile First адаптивная сетка с медиа-запросами",
            "explanation": "Базовые стили — одна колонка (мобильные). При 640px+ — 2 колонки через calc(50% - gap/2). При 1024px+ — 3 колонки. prefers-reduced-motion убирает анимации для пользователей с вестибулярными нарушениями."
          }
        },
        {
          "title": "CSS единицы измерения: px, em, rem, vw/vh, %, clamp()",
          "content": "Выбор единиц измерения напрямую влияет на адаптивность, доступность и масштабируемость верстки.\n\nАбсолютные единицы:\n`px` (пиксели) — фиксированный размер. Используйте для: border, box-shadow, мелких декоративных элементов. НЕ используйте для font-size (ломает zoom/accessibility).\n\nОтносительные единицы:\n`em` — относительно font-size РОДИТЕЛЬСКОГО элемента. 1em = размер шрифта родителя. Каскадируется: em внутри em = компounding (1.5em × 1.5em = 2.25 оригинала). Используйте для: padding и margin внутри компонентов (масштабируется пропорционально тексту).\n\n`rem` — относительно font-size корневого элемента `<html>`. 1rem = 16px по умолчанию. НЕ каскадируется. Используйте для: font-size, глобальные отступы, медиа-запросы. Это стандарт индустрии для типографики.\n\nViewport единицы:\n`vw` — 1% ширины viewport. 100vw = полная ширина экрана.\n`vh` — 1% высоты viewport. 100vh = полная высота экрана.\n`dvh` (Dynamic Viewport Height) — учитывает выдвижную адресную строку мобильных браузеров (в отличие от vh).\n`svh` / `lvh` — Small/Large Viewport Height.\n\n`%` — относительно размера родительского элемента.\n\nФункция `clamp(min, preferred, max)` — адаптивные значения БЕЗ медиа-запросов:\n`font-size: clamp(16px, 2.5vw, 24px)` — шрифт не менее 16px, идеально 2.5% ширины экрана, но не более 24px.\n\nФункция `calc()` — арифметика с разными единицами:\n`width: calc(100% - 260px)` — ширина минус фиксированный сайдбар.\n`padding: calc(1rem + 1vw)` — комбинация абсолютного и viewport отступа.",
          "codeExample": {
            "language": "css",
            "code": "/* Адаптивная типографика с clamp() */\n:root {\n  font-size: 16px; /* 1rem = 16px */\n}\n\nh1 {\n  /* min 28px, идеально 5vw, max 48px */\n  font-size: clamp(1.75rem, 5vw, 3rem);\n  line-height: 1.2;\n}\n\nh2 {\n  font-size: clamp(1.25rem, 3vw, 2rem);\n}\n\np {\n  font-size: 1rem; /* = 16px */\n  line-height: 1.6;\n  /* margin в em — масштабируется с font-size */\n  margin-bottom: 1em;\n}\n\n/* Hero на всю высоту экрана */\n.hero {\n  min-height: 100dvh; /* Dynamic Viewport Height */\n  padding: calc(2rem + 2vw);\n}\n\n/* Контейнер с максимальной шириной */\n.container {\n  width: min(1200px, 100% - 2rem);\n  margin-inline: auto; /* horizontal centering */\n}",
            "title": "Адаптивная типографика с clamp(), rem и dvh",
            "explanation": "clamp() обеспечивает плавное масштабирование шрифтов без @media. rem для типографики сохраняет доступность (настройки масштабирования пользователя). dvh решает проблему с адресной строкой мобильных браузеров. min() с вычитанием заменяет max-width + padding."
          }
        }
      ],
      "seniorTips": [
        "Никогда не используйте px для font-size — это ломает масштабирование для пользователей с нарушениями зрения. Используйте rem или clamp().",
        "Flexbox gap — современная замена margin-хаков между элементами. Поддержка gap в flex: 95%+ браузеров.",
        "Тестируйте адаптивность в Chrome DevTools (Ctrl+Shift+M) на реальных устройствах: iPhone SE (375px), iPad (768px), Desktop (1024px+).",
        "prefers-reduced-motion: reduce — обязательная проверка для a11y. Пользователи с вестибулярными нарушениями могут испытывать головокружение от анимаций."
      ],
      "commonMistakes": [
        {
          "bad": ".container {\n  width: 1200px;\n}\n.text {\n  font-size: 14px;\n}",
          "good": ".container {\n  width: min(1200px, 100% - 2rem);\n  margin-inline: auto;\n}\n.text {\n  font-size: 0.875rem;\n}",
          "reason": "Фиксированная width в px создаёт горизонтальный скролл на мобильных. font-size в px не масштабируется при изменении пользователем настроек размера текста в браузере."
        },
        {
          "bad": ".flex-item {\n  margin-right: 16px;\n}\n.flex-item:last-child {\n  margin-right: 0;\n}",
          "good": ".flex-container {\n  display: flex;\n  gap: 16px;\n}",
          "reason": "margin-хак для отступов между flex-items — устаревший паттерн. gap автоматически обрабатывает крайние элементы и работает с flex-wrap."
        },
        {
          "bad": "@media (max-width: 768px) {\n  /* мобильные стили */\n}",
          "good": "/* базовые мобильные стили */\n@media (min-width: 768px) {\n  /* расширения для планшетов */\n}",
          "reason": "Desktop First (max-width) — антипаттерн. Мобильные получают лишние CSS-правила, которые затем переопределяются. Mobile First (min-width) загружает минимум CSS для каждого устройства."
        }
      ],
      "keyTakeaways": [
        "Flexbox оперирует двумя осями: `justify-content` управляет главной (Main Axis), `align-items` — поперечной (Cross Axis). `gap` задаёт отступы между элементами.",
        "Свойство `flex: grow shrink basis` определяет поведение элемента: `flex: 1` — растёт и заполняет пространство, `flex: 0 0 260px` — фиксированный размер.",
        "Mobile First (`min-width`) — стандарт индустрии: базовые стили для мобильных, расширения через `@media (min-width: ...)` для планшетов и десктоп.",
        "Используйте `rem` для font-size (доступность), `clamp()` для адаптивной типографики, `dvh` для высоты viewport на мобильных, `gap` вместо margin-хаков.",
        "`prefers-reduced-motion: reduce` и `prefers-color-scheme: dark` — обязательные медиа-фичи для доступности и UX."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"card-grid\">\n  <div class=\"card\">\n    <h3>HTML</h3>\n    <p>Семантика и формы</p>\n  </div>\n  <div class=\"card\">\n    <h3>CSS</h3>\n    <p>Flexbox и Grid</p>\n  </div>\n  <div class=\"card\">\n    <h3>JavaScript</h3>\n    <p>ES6+ и DOM API</p>\n  </div>\n  <div class=\"card\">\n    <h3>React</h3>\n    <p>Компоненты и хуки</p>\n  </div>\n</div>",
      "initialCss": ".card-grid {\n  /* Добавьте flex-контейнер */\n}\n\n.card {\n  padding: 24px;\n  border: 1px solid #2a2f38;\n  border-radius: 8px;\n  background: #0d1117;\n  color: #e0e0e0;\n}",
      "initialJs": "",
      "instructions": "Постройте адаптивную сетку карточек на Flexbox:\n1. Активируйте flex на .card-grid с gap: 16px\n2. Сделайте карточки в одну колонку по умолчанию\n3. При >=640px — 2 колонки\n4. При >=1024px — 4 колонки\n5. Используйте flex-wrap и flex-basis\n6. Добавьте hover-эффект на карточки"
    },
    "task": {
      "title": "Адаптивная landing page на Flexbox",
      "scenario": "Клиент заказал адаптивную landing page для SaaS-продукта. Вам нужно сверстать layout по принципу Mobile First: навигация, hero-секция, блок преимуществ (3 карточки) и футер.",
      "criteria": [
        "Mobile First подход: базовые стили без @media, расширения через min-width",
        "Навигация: логотип слева, ссылки справа (space-between), на мобильных — колонкой",
        "Hero: контент отцентрирован вертикально и горизонтально (min-height: 100dvh)",
        "Карточки: 1 колонка на мобильных, 3 колонки на десктопе с gap",
        "Все font-size в rem или clamp(), ни одного px для шрифтов",
        "Добавить prefers-reduced-motion для отключения анимаций"
      ],
      "starterCode": {
        "html": "<header class=\"navbar\">\n  <span class=\"logo\">SaaSify</span>\n  <nav>\n    <a href=\"#\">Features</a>\n    <a href=\"#\">Pricing</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n</header>\n<section class=\"hero\">\n  <h1>Build faster with SaaSify</h1>\n  <p>The modern platform for developers</p>\n</section>\n<section class=\"features\">\n  <div class=\"card\">Feature 1</div>\n  <div class=\"card\">Feature 2</div>\n  <div class=\"card\">Feature 3</div>\n</section>\n<footer>© 2024 SaaSify</footer>",
        "css": "/* Напишите стили Mobile First */"
      },
      "hints": [
        "Начните с flex-direction: column для навигации, переключите на row при min-width: 768px",
        "Hero: display: flex, justify-content: center, align-items: center, min-height: 100dvh",
        "Карточки: flex-wrap: wrap с flex: 1 1 calc(33.333% - gap) на десктопе",
        "Используйте clamp() для h1: clamp(2rem, 5vw, 3.5rem)"
      ],
      "solution": {
        "css": ".navbar { display: flex; flex-direction: column; gap: 12px; padding: 16px; }\n.logo { font-size: 1.5rem; font-weight: 700; color: #2dff8a; }\nnav { display: flex; gap: 16px; }\n.hero { display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100dvh; text-align: center; padding: 2rem; }\nh1 { font-size: clamp(2rem, 5vw, 3.5rem); }\n.features { display: flex; flex-direction: column; gap: 16px; padding: 2rem; }\n.card { padding: 1.5rem; border: 1px solid #2a2f38; border-radius: 8px; }\n@media (min-width: 768px) { .navbar { flex-direction: row; justify-content: space-between; align-items: center; } .features { flex-direction: row; } .card { flex: 1; } }\n@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }",
        "explanation": "Mobile First: базовые стили — колонки. @media min-width 768px — строки. clamp() для адаптивного h1. dvh для hero. prefers-reduced-motion для a11y."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css2-q1",
          "question": "У контейнера задано `display: flex; flex-direction: column`. Что теперь делает `justify-content: center`?",
          "options": [
            "Центрирует элементы по вертикали: главная ось развернулась вместе с направлением",
            "Центрирует элементы по горизонтали: это свойство всегда работает вдоль горизонтали",
            "Ничего не делает: в колоночной раскладке применяется только `align-content`",
            "Центрирует каждый элемент внутри собственной строки сразу по обеим осям"
          ],
          "correctIndex": 0,
          "explanation": "`justify-content` управляет распределением вдоль главной оси, а направление этой оси задаёт `flex-direction`. При `row` главная ось горизонтальна, при `column` — вертикальна, и то же самое свойство начинает центрировать сверху вниз. Соответственно `align-items` при `column` переключается на горизонталь. Это главная причина путаницы в Flexbox: свойства привязаны к осям, а не к сторонам экрана."
        },
        {
          "id": "css2-q2",
          "question": "Как поведут себя эти два блока при сужении окна до 300px?",
          "codeSnippet": ".layout { display: flex; }\n.sidebar { flex: 0 0 260px; }\n.content { flex: 1; }",
          "options": [
            "Оба сожмутся пропорционально, сохранив соотношение между 260px и остатком ширины",
            "Контент сохранит ширину, а сайдбар уйдёт на новую строку из-за переполнения",
            "Сайдбар сожмётся первым, поскольку у него задан явный начальный размер `flex-basis`",
            "Сайдбар останется 260px, а контент сожмётся вплоть до ширины своего содержимого"
          ],
          "correctIndex": 3,
          "explanation": "Запись `flex: 0 0 260px` означает «не расти, не сжиматься, стартовать с 260 пикселей» — нулевой коэффициент сжатия делает сайдбар неприкосновенным. Запись `flex: 1` разворачивается в `1 1 0%`, поэтому всё давление при нехватке места принимает на себя контент. Ниже минимальной ширины содержимого он не сожмётся из-за `min-width: auto`, и тогда появится горизонтальная прокрутка. Переноса не будет: `flex-wrap` по умолчанию равен `nowrap`."
        },
        {
          "id": "css2-q3",
          "question": "Почему подход Mobile First на `min-width` считают лучше Desktop First на `max-width`?",
          "options": [
            "Запросы `min-width` браузер обрабатывает быстрее при пересчёте стилей страницы",
            "Только `min-width` можно комбинировать с медиа-фичей `prefers-color-scheme` в одном запросе",
            "`max-width` не поддерживается в Safari на iOS и молча игнорируется мобильными браузерами",
            "Базовые стили остаются простыми, а тяжёлые правила получает только тот, кому они нужны"
          ],
          "correctIndex": 3,
          "explanation": "При Mobile First базовый слой описывает самую простую одноколоночную раскладку, а всё усложнение живёт внутри `@media (min-width: ...)`, куда слабое устройство просто не заходит. При Desktop First наоборот: телефон сначала применяет весь десктопный набор правил, а затем переопределяет его сверху — лишняя работа и запутанный каскад. Скорость разбора самих медиа-запросов тут ни при чём, и поддержка у обоих вариантов полная."
        },
        {
          "id": "css2-q4",
          "question": "Какое значение даст `font-size: clamp(16px, 2.5vw, 24px)` при ширине окна 1920px?",
          "options": [
            "16px — на широких экранах применяется минимальное значение из набора",
            "20px — берётся среднее арифметическое между минимумом и максимумом",
            "48px — предпочтительное значение всегда имеет приоритет над границами",
            "24px — предпочтительные 48px упираются в верхнюю границу и обрезаются ею"
          ],
          "correctIndex": 3,
          "explanation": "`clamp` вычисляет среднее значение и затем зажимает его между границами. Здесь 2.5vw от 1920 пикселей даёт 48 пикселей, что больше максимума, поэтому результатом становится 24px. На узком экране шириной 480 пикселей предпочтительное значение составило бы 12px и подтянулось бы до минимальных 16px. Именно так `clamp` заменяет пару медиа-запросов одной строкой."
        },
        {
          "id": "css2-q5",
          "question": "Как правильно учесть настройку `prefers-reduced-motion: reduce` в проекте с анимациями?",
          "options": [
            "Полностью убрать анимации из проекта: половинчатые решения доступными не считаются",
            "Внутри такого медиа-запроса свести длительность переходов к минимуму и убрать движение",
            "Показать пользователю кнопку «Отключить анимации»: медиа-фича — это только подсказка",
            "Перевести анимации с CSS на JavaScript, поскольку эту настройку скрипты не затрагивают"
          ],
          "correctIndex": 1,
          "explanation": "Настройка приходит из операционной системы, и уважать её нужно автоматически, не заставляя человека искать переключатель. Обычная практика — глобальное правило внутри `@media (prefers-reduced-motion: reduce)`, которое сокращает `animation-duration` и `transition-duration` почти до нуля и отключает параллакс. Смысл не в отказе от анимации вообще: спокойное изменение прозрачности допустимо, проблемы вызывает именно движение. Проверить настройку из JavaScript тоже можно через `matchMedia`."
        }
      ]
    }
  },
  {
    "id": "css-3",
    "moduleId": "css",
    "level": 3,
    "title": "Блочная модель (Box Model) и управление геометрией",
    "subtitle": "Content, Padding, Border, Margin, схлопывание отступов и Block Formatting Context",
    "description": "Изучите фундаментальную блочную модель CSS: математику слоев content/padding/border/margin, влияние свойства box-sizing, тонкости схлопывания вертикальных отступов (Margin Collapse) и изоляцию макетов через BFC.",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "box-model",
      "margin-collapse",
      "bfc",
      "box-sizing",
      "layout",
      "padding",
      "margin"
    ],
    "theory": {
      "overview": "Каждый элемент на веб-странице — это прямоугольный бокс. Даже если кнопка выглядит как круг (`border-radius: 50%`), браузер рассчитывает её геометрию и положение как прямоугольник. Модель Box Model определяет, как эти прямоугольники формируются, как вычисляются их итоговые физические размеры и как элементы взаимодействуют друг с другом в нормальном потоке документа (Normal Flow).\n\nПонимание Box Model, природы схлопывания внешних отступов (Margin Collapsing) и контекста форматирования блока (Block Formatting Context / BFC) позволяет избегать 90% непредсказуемых багов в верстке.",
      "sections": [
        {
          "title": "Анатомия Box Model: 4 слоя элемента и глобальный box-sizing",
          "content": "Блочная модель CSS состоит из 4 концентрических слоёв (изнутри наружу):\n\n1. Content Box (Область контента) — ядро элемента, где отображается текст, дочерние узлы или медиа (`<img>`, `<video>`). Размеры задаются через `width`, `height`, `min-width`, `max-width`.\n\n2. Padding Box (Внутренние отступы) — прозрачное пространство вокруг контента внутри рамки. Фон элемента (`background-color`, `background-image`) распространяется на Content и Padding! Задаётся через `padding: 10px 20px;`.\n\n3. Border Box (Рамка элемента) — видимая или прозрачная граница, обрамляющая padding. Задаётся через `border: 2px solid #2dff8a;`.\n\n4. Margin Box (Внешние отступы) — прозрачное пространство вокруг рамки для создания дистанции до соседних элементов. Margin ВСЕГДА прозрачен (через него просвечивает фон родителя). Задаётся через `margin: 16px;`.\n\nРазница режимов `box-sizing`:\n\n`box-sizing: content-box` (по умолчанию в браузерах):\nШирина (`width`) задаёт размер ТОЛЬКО content-области. Итоговая ширина = `width + padding-left + padding-right + border-left + border-right`. Если у блока `width: 300px; padding: 20px; border: 2px solid red;` — его реальный размер составит `344px`!\n\n`box-sizing: border-box` (индустриальный стандарт):\nШирина (`width`) включает в себя `content + padding + border`. Если задано `width: 300px`, блок всегда останется ровно `300px`, а браузер сам сожмёт внутренний контент. Это делает верстку на 100% предсказуемой.",
          "codeExample": {
            "language": "css",
            "code": "/* Золотое правило современного CSS — глобальный border-box */\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\n/* Демонстрация предсказуемой геометрии */\n.card {\n  width: 320px;             /* Финальная ширина блока ровно 320px */\n  padding: 24px;            /* Внутренние отступы */\n  border: 2px solid #2dff8a; /* Рамка */\n  margin: 16px auto;        /* Внешний отступ и центрирование */\n  background: #0d1117;\n}",
            "title": "Глобальный сброс box-sizing через inherit",
            "explanation": "Паттерн box-sizing: inherit на * позволяет легко переопределять box-sizing у сторонних UI-виджетов, сохраняя border-box для всего остального приложения."
          }
        },
        {
          "title": "Схлопывание внешних отступов (Margin Collapsing) во всех деталях",
          "content": "Схлопывание внешних отступов (Margin Collapsing) — это поведение нормального потока CSS, при котором соседние вертикальные margin объединяются в один единственный отступ, равный максимальному из них.\n\nГоризонтальные отступы (`margin-left`, `margin-right`) НИКОГДА не схлопываются!\n\nТри сценария схлопывания вертикальных margin:\n\n1. Смежные элементы-соседи (Adjacent Siblings):\nЕсли у верхнего абзаца `<p>` задан `margin-bottom: 30px`, а у нижнего `margin-top: 20px` — расстояние между ними составит `30px` (Max(30, 20)), а НЕ `50px`.\n\n2. Родитель и первый/последний дочерний элемент (Parent & Child):\nЕсли у родителя нет `border-top`, `padding-top` или `inline-контента`, то `margin-top` его первого дочернего элемента «вываливается» наружу и объединяется с `margin-top` родителя!\n\n3. Пустые блоки (Empty Blocks):\nЕсли элемент не имеет высоты, контента, padding и border, его собственные `margin-top` и `margin-bottom` схлопываются между собой в один отступ.\n\nКак рассчитывается схлопывание с отрицательными margin:\n- Два положительных: `Max(A, B)` → `Max(30, 20) = 30px`\n- Положительный и отрицательный: `A + B` → `30px + (-10px) = 20px`\n- Два отрицательных: `Min(A, B)` (наибольший по модулю) → `Min(-20, -10) = -20px`",
          "image": {
            "src": "/images/lessons/css-margin-collapse.jpg",
            "alt": "Сравнение схлопывания Margin Collapse и предотвращения через BFC",
            "caption": "Margin Collapse объединяет вертикальные отступы в один. BFC и display: flow-root изолируют геометрию"
          },
          "codeExample": {
            "language": "html",
            "code": "<!-- Проблема: margin-top у h1 вываливается за пределы header -->\n<header class=\"problematic-header\">\n  <h1 style=\"margin-top: 40px;\">Заголовок страницы</h1>\n</header>\n\n<style>\n  /* ❌ Ошибка: header сместится вниз вместе с h1 */\n  .problematic-header {\n    background: #161b22;\n  }\n\n  /* ✅ Решение 1: display: flow-root (создание BFC) */\n  .fixed-header-1 {\n    display: flow-root;\n    background: #161b22;\n  }\n\n  /* ✅ Решение 2: добавить минимальный padding */\n  .fixed-header-2 {\n    padding-top: 1px;\n    background: #161b22;\n  }\n</style>",
            "title": "Проблема выпадающего margin и решения через BFC / padding",
            "explanation": "Без изоляции margin первого ребенка смещает весь родительский блок. display: flow-root создаёт Block Formatting Context и предотвращает вываливание margin наружу."
          }
        },
        {
          "title": "Block Formatting Context (BFC): Изоляция геометрии элементов",
          "content": "Block Formatting Context (BFC) — это независимая область страницы, внутри которой элементы позиционируются по правилам блочной раскладки и изолированы от внешнего мира.\n\nЗачем нужен BFC:\n1. Предотвращает схлопывание вертикальных margin между родителем и детьми.\n2. Содержит внутри себя плавающие элементы (`float`) — решает классическую проблему схлопывания высоты родителя (замена устаревшему `.clearfix`).\n3. Предотвращает обтекание плавающих элементов соседними блоками.\n\nКак активировать BFC в современном CSS:\n\n1. `display: flow-root` — современный, чистый и семантически нейтральный способ создания BFC без побочных эффектов!\n2. `overflow: hidden` / `overflow: auto` (традиционный способ, но может обрезать выпадающие меню и тени).\n3. `display: flex` / `display: grid` (дочерние элементы flex/grid контейнера никогда не подвергаются margin-collapsing!).\n4. `position: absolute` / `position: fixed`.\n5. `contain: layout` / `contain: paint`.",
          "codeExample": {
            "language": "css",
            "code": "/* Современный контейнер с гарантированной изоляцией BFC */\n.isolated-container {\n  display: flow-root; /* Создает BFC без обрезки теней и меню */\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 8px;\n  padding: 16px;\n}\n\n/* Flex/Grid контейнеры автоматически отключают margin collapsing */\n.flex-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px; /* gap полностью заменяет непредсказуемые margin! */\n}",
            "title": "Создание BFC через display: flow-root и flex gap",
            "explanation": "display: flow-root — стандарт создания BFC. В современных раскладках (Flex/Grid) свойство gap полностью исключает необходимость манипулировать сложными вертикальными margin."
          }
        },
        {
          "title": "Логические свойства (Logical Properties) и отрицательные Margin",
          "content": "В современном CSS физические направления (`top`, `bottom`, `left`, `right`) вытесняются логическими свойствами, зависящими от направления письма (LTR, RTL, вертикальное письмо).\n\nТаблица соответствия:\n- `margin-left` / `margin-right` → `margin-inline-start` / `margin-inline-end`\n- `margin-left + margin-right` → `margin-inline: auto;` (горизонтальное центрирование)\n- `margin-top + margin-bottom` → `margin-block: 24px;`\n- `padding-left + padding-right` → `padding-inline: 16px;`\n- `padding-top + padding-bottom` → `padding-block: 12px;`\n- `width` / `height` → `inline-size` / `block-size`\n\nОтрицательные Margin (Negative Margins):\nЗадание отрицательного margin (`margin-top: -20px;` или `margin-inline: -16px;`) сдвигает элемент в противоположную сторону или «затягивает» следующие за ним элементы на себя.\nПрименение:\n- «Вынос» изображения на всю ширину карточки вопреки padding родителя: `margin-inline: -24px;`.\n- Наложение карточек внахлёст для дизайнерских эффектов.\n\n`Outline` vs `Border`:\n- `border` занимает физическое место в Box Model и влияет на раскладку.\n- `outline` рисуется поверх элемента, НЕ занимает места в Box Model и не вызывает перерисовку геометрии (Reflow) — идеален для фокусных колец a11y (`outline: 2px solid #2dff8a; outline-offset: 4px;`).",
          "codeExample": {
            "language": "css",
            "code": "/* Карточка с выносом картинки на полную ширину через negative margin */\n.article-card {\n  padding: 24px;\n  background: #0d1117;\n  border-radius: 12px;\n}\n\n.article-card-img {\n  /* Отрицательный margin растягивает картинку в края карточки */\n  margin-inline: -24px;\n  margin-block-start: -24px;\n  margin-block-end: 16px;\n  width: calc(100% + 48px);\n  display: block;\n  border-radius: 12px 12px 0 0;\n}\n\n/* Доступное кольцо фокуса без искажения геометрии */\n.btn:focus-visible {\n  outline: 2px solid #2dff8a;\n  outline-offset: 3px; /* Зазор между кнопкой и рамкой */\n}",
            "title": "Логические свойства, отрицательный margin и outline-offset",
            "explanation": "margin-inline: -24px компенсирует padding карточки. outline-offset создаёт элегантный зазор для фокусного кольца клавиатурной навигации без сдвига верстки."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Размеры элементов и единицы измерения в CSS",
          "content": "Для глубокого и практического понимания единиц измерения (px, %, rem, em, vw, vh), управления геометрией блоков и отказа от жесткого хардкода рекомендуем подробный видеоурок:\n\n- **[Stop Using px: Everything You Need To Know About CSS Sizing and Units (YouTube)](https://youtu.be/EWA__M25pLs?si=nagH27-k8juwiF9F)** — комплексный разбор от Parham CodeLab: как на самом деле работают width/height, min/max ограничения, относительные единицы и функция calc()."
        }
      ],
      "seniorTips": [
        "Всегда используйте `*, *::before, *::after { box-sizing: border-box; }` во всех проектах. Это предотвращает 99% проблем с вылезанием блоков за пределы 100% ширины.",
        "Вместо вертикальных `margin-bottom` между карточками используйте Flexbox/Grid и свойство `gap` — оно не схлопывается и не требует зануления у `:last-child`.",
        "Для центрирования блока по горизонтали пишите `margin-inline: auto;` вместо устаревшего `margin: 0 auto;` — это сохраняет вертикальные отступы нетронутыми.",
        "Для фокуса всегда используйте `outline` или `box-shadow`, а не `border`. Добавление border при фокусе сдвигает соседний контент на 1-2 пикселя (layout shift)."
      ],
      "commonMistakes": [
        {
          "bad": ".box {\n  width: 100%;\n  padding: 20px;\n  /* content-box по умолчанию */\n  /* Итог: 100% + 40px -> горизонтальный скролл! */\n}",
          "good": ".box {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px;\n  /* Итог: ровно 100%, контент сжат внутрь */\n}",
          "reason": "При content-box добавление padding к width: 100% увеличивает суммарную ширину блока за пределы родителя, вызывая появление нежелательного горизонтального скроллбара."
        },
        {
          "bad": "/* Попытка добавить горизонтальный отступ к <span> */\nspan.badge {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  /* Не работает! */\n}",
          "good": "span.badge {\n  display: inline-block; /* или inline-flex */\n  margin-block: 20px;\n  /* Теперь вертикальные отступы работают */\n}",
          "reason": "Строчные элементы (display: inline) игнорируют вертикальные margin и padding при расчёте положения строк в потоке текста. Требуется display: inline-block или block."
        },
        {
          "bad": "/* Сброс фокуса без замены */\nbutton:focus {\n  outline: none; /* Грубейшее нарушение a11y! */\n}",
          "good": "button:focus-visible {\n  outline: 2px solid #2dff8a;\n  outline-offset: 2px;\n}",
          "reason": "Удаление outline: none делает сайт абсолютно непригодным для людей, управляющих компьютером с клавиатуры. Используйте :focus-visible с красивым кастомным outline."
        }
      ],
      "keyTakeaways": [
        "Box Model состоит из 4 концентрических слоёв: `content` → `padding` (с фоном) → `border` → `margin` (прозрачный зазор).",
        "`box-sizing: border-box` фиксирует суммарную геометрию блока (`width` = `content + padding + border`), предотвращая выталкивание элементов.",
        "Margin Collapse объединяет вертикальные отступы соседних элементов в один `Max(A, B)`. Горизонтальные марджины никогда не схлопываются.",
        "Block Formatting Context (BFC) создаётся через `display: flow-root`, `flex`, `grid` или `overflow: hidden` и полностью изолирует внутреннюю геометрию блока.",
        "Логические свойства (`margin-inline`, `padding-block`) делают код интернациональным и чистым, а `outline` обеспечивает доступный фокус без сдвига макета."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"box-demo\">\n  <div class=\"box content-box\">\n    <span>content-box (200px + padding + border)</span>\n  </div>\n  <div class=\"box border-box\">\n    <span>border-box (ровно 200px)</span>\n  </div>\n</div>",
      "initialCss": ".box-demo {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 20px;\n  background: #0a0e13;\n}\n\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 4px solid #2dff8a;\n  background: #161b22;\n  color: #e6edf3;\n  font-family: monospace;\n  font-size: 13px;\n}\n\n.content-box {\n  box-sizing: content-box;\n  /* Реальная ширина: 200 + 40 + 8 = 248px */\n}\n\n.border-box {\n  box-sizing: border-box;\n  /* Реальная ширина: ровно 200px */\n  border-color: #29e7ff;\n}",
      "initialJs": "// Интерактивный замер реальных физических размеров элементов в DOM:\nconst boxes = document.querySelectorAll('.box');\nboxes.forEach((box) => {\n  const rect = box.getBoundingClientRect();\n  console.log(`${box.className}: итоговая ширина в DOM = ${rect.width}px`);\n});",
      "instructions": "Интерактивная песочница Box Model:\n1. Изучите визуальную разницу между .content-box и .border-box в окне предпросмотра\n2. Добавьте к .box свойство margin-block: 16px и margin-inline: auto\n3. Добавьте hover-эффект с увеличением outline (outline: 2px solid #ffb02e, outline-offset: 4px)\n4. Посмотрите консоль — getBoundingClientRect() наглядно подтверждает математику вычисления размеров"
    },
    "task": {
      "title": "Верстка виджета профиля с точной геометрией Box Model",
      "scenario": "Вам необходимо сверстать компактный UI-виджет профиля разработчика с фото-обложкой, аватаркой внахлёст (отрицательный margin), тегами навыков и кнопкой действия. Вёрстка должна быть строго устойчива к переполнению контента и построена на принципах BFC и box-sizing: border-box.",
      "criteria": [
        "Глобальный box-sizing: border-box для виджета и всех его потомков",
        "Контейнер виджета изолирован через BFC (display: flow-root)",
        "Обложка вынесена в края карточки через логические отрицательные отступы (margin-inline, margin-block-start)",
        "Аватарка наложена на обложку внахлёст с помощью отрицательного margin-block-start",
        "Отступы между блоками информации заданы через логические свойства (margin-block)",
        "Кнопка 'Связаться' имеет доступный :focus-visible с outline-offset"
      ],
      "starterCode": {
        "html": "<div class=\"user-widget\">\n  <img class=\"cover-img\" src=\"/cover.jpg\" alt=\"Обложка профиля\" />\n  <img class=\"avatar-img\" src=\"/avatar.jpg\" alt=\"Аватар разработчика\" />\n  <h3 class=\"user-name\">Алексей Смирнов</h3>\n  <p class=\"user-bio\">Frontend Engineer & UI Architect</p>\n  <button type=\"button\" class=\"btn-contact\">Связаться</button>\n</div>",
        "css": "/* Реализуйте стилизацию Box Model */\n.user-widget {\n  max-width: 320px;\n}"
      },
      "hints": [
        "Задайте .user-widget: display: flow-root, padding: 20px, background, border-radius",
        "Для .cover-img: margin-inline: -20px, margin-block-start: -20px, width: calc(100% + 40px)",
        "Для .avatar-img: margin-block-start: -40px, border: 4px solid #bg, border-radius: 50%",
        "Используйте outline: 2px solid #neon и outline-offset: 3px для :focus-visible кнопки"
      ],
      "solution": {
        "css": ".user-widget {\n  box-sizing: border-box;\n  display: flow-root;\n  max-width: 320px;\n  padding: 20px;\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n  text-align: center;\n  color: #e6edf3;\n}\n.user-widget * {\n  box-sizing: border-box;\n}\n.cover-img {\n  display: block;\n  width: calc(100% + 40px);\n  height: 100px;\n  object-fit: cover;\n  margin-inline: -20px;\n  margin-block-start: -20px;\n  margin-block-end: 0;\n  border-radius: 12px 12px 0 0;\n}\n.avatar-img {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  border: 3px solid #0d1117;\n  margin-block-start: -36px;\n  position: relative;\n  display: inline-block;\n}\n.user-name {\n  margin-block: 12px 4px;\n  font-size: 1.25rem;\n}\n.user-bio {\n  margin-block: 0 16px;\n  color: #8b949e;\n  font-size: 0.875rem;\n}\n.btn-contact {\n  width: 100%;\n  padding-block: 10px;\n  background: #2dff8a;\n  color: #0a0e13;\n  border: none;\n  border-radius: 6px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.btn-contact:focus-visible {\n  outline: 2px solid #29e7ff;\n  outline-offset: 3px;\n}",
        "explanation": "Виджет использует display: flow-root (BFC), отрицательные margin-inline компенсируют padding родителя для обложки, аватарка изящно наложена на обложку через margin-block-start: -36px, кнопка защищена стилями a11y."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css3-q1",
          "question": "Элементу заданы `width: 300px; padding: 25px; border: 5px solid; margin: 10px; box-sizing: content-box`. Сколько места по горизонтали он займёт у родителя?",
          "options": [
            "300px — внешние отступы, рамка и внутренние поля в ширину не входят",
            "360px — содержимое, внутренние отступы и рамки, но без внешних отступов",
            "380px — содержимое, внутренние отступы, рамки и оба внешних отступа",
            "330px — к содержимому прибавляются только внутренние отступы"
          ],
          "correctIndex": 2,
          "explanation": "Считаем по слоям: содержимое 300, внутренние отступы 25·2 = 50, рамки 5·2 = 10 — сам блок занимает 360 пикселей. Внешние отступы 10·2 = 20 не входят в размер блока, но место у родителя забирают, поэтому строка в потоке занимает 380 пикселей. Различать эти две величины важно: `getBoundingClientRect` вернёт 360, а вот соседний блок отодвинется на 380."
        },
        {
          "id": "css3-q2",
          "question": "У верхнего блока `margin-bottom: 40px`, у нижнего `margin-top: 25px`. Какой зазор получится и когда правило перестанет работать?",
          "options": [
            "65px; отступы складываются всегда, а схлопывание касается лишь вложенных блоков",
            "40px; отменить схлопывание невозможно — это фундаментальное правило потока",
            "25px; побеждает отступ нижнего элемента, объявленный позже по ходу документа",
            "40px; но схлопывание пропадёт, если обернуть блоки во flex- или grid-контейнер"
          ],
          "correctIndex": 3,
          "explanation": "Соседние вертикальные отступы в обычном потоке схлопываются в один, равный большему из них, то есть 40 пикселей вместо суммы 65. Но правило действует только в блочном контексте: во flex- и grid-раскладке схлопывания нет, и отступы честно складываются. Поэтому вертикальные интервалы сегодня удобнее задавать через `gap` — он предсказуем и не требует обнулять отступ у последнего элемента."
        },
        {
          "id": "css3-q3",
          "question": "Контейнер должен охватить плавающих потомков, не обрезав при этом выпадающее меню. Что выбрать?",
          "options": [
            "`overflow: hidden` — контекст создаст, но обрежет всё, что выходит за границы",
            "`display: flow-root` — создаёт контекст форматирования без побочной обрезки",
            "`clear: both` на самом контейнере — отменит обтекание для его содержимого",
            "`float: left` на контейнере — он тоже станет плавающим и охватит своих детей"
          ],
          "correctIndex": 1,
          "explanation": "`display: flow-root` придуман ровно для этой задачи: он создаёт новый контекст блочного форматирования, из-за чего контейнер начинает учитывать высоту плавающих детей, и больше ничего не меняет. `overflow: hidden` даёт тот же контекст, но заодно режет тени, тултипы и выпадающие меню. `clear` работает на соседних элементах, а не на родителе, а превращение контейнера в плавающий лишь переносит проблему на уровень выше."
        },
        {
          "id": "css3-q4",
          "question": "Почему для оформления фокуса используют `outline`, а не `border`?",
          "options": [
            "`outline` не занимает места в раскладке, поэтому появление фокуса не сдвигает соседей",
            "`border` невозможно сделать пунктирным, а у `outline` стиль `dashed` задан по умолчанию",
            "`outline` рисуется самим браузером и не поддаётся стилизации средствами CSS",
            "`border` не сочетается с псевдоклассом `:focus-visible` в современных браузерах"
          ],
          "correctIndex": 0,
          "explanation": "Рамка — часть блочной модели: добавив её по `:focus`, вы увеличиваете блок на пару пикселей и сдвигаете весь соседний контент при каждом переходе по Tab. Обводка рисуется поверх раскладки и геометрию не трогает, поэтому и служит стандартным средством подсветки фокуса. Стилизуется она свободно — через `outline-color`, `outline-style` и `outline-offset`, а сочетать её с `:focus-visible` не только можно, но и нужно."
        },
        {
          "id": "css3-q5",
          "question": "Чем `margin-inline: auto` отличается от привычного `margin: 0 auto`?",
          "options": [
            "Ничем по сути: это синонимы, просто первая запись короче и современнее",
            "`margin-inline` задаёт только боковые отступы и не обнуляет вертикальные",
            "`margin-inline` центрирует по вертикали, тогда как `margin: 0 auto` — по горизонтали",
            "`margin-inline` работает исключительно внутри flex- и grid-контейнеров"
          ],
          "correctIndex": 1,
          "explanation": "Сокращение `margin: 0 auto` затрагивает все четыре стороны и попутно обнуляет вертикальные отступы, которые вы, возможно, задали раньше. `margin-inline` меняет только отступы вдоль строчной оси и вертикаль не трогает. Вдобавок это логическое свойство: в языках с письмом справа налево или при вертикальном письме оно само выберет нужные стороны, тогда как `left` и `right` останутся жёстко привязанными к физическим направлениям."
        }
      ]
    }
  },
  {
    "id": "css-4",
    "moduleId": "css",
    "level": 4,
    "title": "Типы отображения: display",
    "subtitle": "Block, Inline, Inline-Block, None vs Visibility, Contents и доступное скрытие",
    "description": "Освойте свойство display в деталях: поведение блочных, строчных и строчно-блочных элементов, 4 способа скрытия элементов и их влияние на Layout/a11y, современные значения display: contents и display: flow-root.",
    "estimatedMinutes": 55,
    "difficulty": "beginner",
    "tags": [
      "display",
      "inline",
      "block",
      "inline-block",
      "visibility",
      "opacity",
      "a11y",
      "visually-hidden"
    ],
    "theory": {
      "overview": "Свойство `display` — один из главных регуляторов рендеринга в CSS. Оно определяет, как элемент ведёт себя во внешнем контексте форматирования (начинается ли с новой строки, занимает ли всю ширину) и как организует пространство для своих дочерних элементов.\n\nВ этом уроке мы разберём классическую триаду `block` / `inline` / `inline-block`, решим проблему фантомных пробелов, сравним все техники скрытия элементов (`display: none` vs `visibility: hidden` vs `opacity: 0` vs класс `.visually-hidden` для скринридеров) и изучим современные значения `display: contents` и `display: flow-root`.",
      "sections": [
        {
          "title": "Block vs Inline vs Inline-Block: Полное сравнение",
          "content": "Каждый HTML-элемент имеет значение `display` по умолчанию (User Agent Stylesheet).\n\n1. `display: block` (`<div>`, `<p>`, `<h1>`-`<h6>`, `<section>`, `<article>`, `<header>`):\n- Всегда начинается с НОВОЙ строки в макете.\n- По умолчанию занимает 100% доступной ширины родителя (`width: auto`).\n- Полноценно принимает свойства `width`, `height`, `min-width`, `max-width`.\n- Все 4 отступа (`margin-top/bottom/left/right`, `padding`) работают корректно и раздвигают соседние блоки.\n\n2. `display: inline` (`<span>`, `<a>`, `<strong>`, `<em>`, `<code>`):\n- Располагается В СТРОКЕ вместе с окружающим текстом, не переносясь на новую строку.\n- Ширина и высота определяются исключительно контентом — свойства `width` и `height` ИГНОРИРУЮТСЯ!\n- Вертикальные отступы (`margin-top`, `margin-bottom`) НЕ РАБОТАЮТ.\n- Вертикальный `padding` визуально рисует фон, но НЕ раздвигает строки текста (текст наползает друг на друга!).\n- Горизонтальные `margin-left/right` и `padding-left/right` работают нормально.\n\n3. `display: inline-block` (`<img>`, `<input>`, `<button>`, `<select>`):\n- «Гибридный» режим: располагается в строке (inline), но внутри ведёт себя как блок (block)!\n- Находится в строке с текстом без принудительного переноса.\n- Полноценно поддерживает `width`, `height`, вертикальные и горизонтальные `margin` и `padding`.\n\nПроблема «Фантомных пробелов» (Whitespace Bug) у `inline-block`:\nПоскольку `inline-block` элементы являются частью текста, перенос строки или пробел между тегами в HTML рендерится как реальный пробел шириной ~4px! Если выставить двум карточкам `width: 50%` — они не поместятся в одну строку и перенесутся. Решения: Flexbox (лучшее решение), удаление пробелов в HTML или `font-size: 0` на родителе.",
          "codeExample": {
            "language": "css",
            "code": "/* Сравнение типов отображения */\n\n/* 1. Блочный элемент — заголовок/секция */\n.block-element {\n  display: block;\n  width: 100%;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n\n/* 2. Строчный элемент — подсветка ключевого слова */\n.inline-badge {\n  display: inline;\n  color: #2dff8a;\n  /* width, height, margin-top здесь игнорируются */\n}\n\n/* 3. Строчно-блочный элемент — интерактивная кнопка */\n.btn-action {\n  display: inline-block;\n  width: 160px;\n  height: 44px;\n  padding: 10px 20px;\n  margin-right: 12px;\n  text-align: center;\n  background: #29e7ff;\n}",
            "title": "Block vs Inline vs Inline-Block в стилях",
            "explanation": "Кнопка с display: inline-block остаётся в строке с другими кнопками, но чётко соблюдает заданные размеры width: 160px и высоту height: 44px."
          }
        },
        {
          "title": "4 способа скрыть элемент: display:none, visibility, opacity и a11y",
          "content": "Во фронтенде скрытие элементов требуется постоянно: закрытие модалок, скрытие выпадающих меню, табы, лоадеры. Однако выбор неверного способа может разрушить доступность (a11y) или сломать анимации.\n\nСравнительный анализ 4 техник скрытия:\n\n1. `display: none`:\n- Геометрия: 0×0 px, полностью удаляется из Normal Flow макета (Layout).\n- События: невозможно кликнуть, недоступен для фокуса с клавиатуры.\n- Доступность: ПОЛНОСТЬЮ удаляется из Accessibility Tree (скринридеры его игнорируют).\n- Анимация: НЕ анимируется плавно через `transition` (переключение дискретно).\n\n2. `visibility: hidden`:\n- Геометрия: СОХРАНЯЕТСЯ! Элемент становится невидимым, но продолжает занимать своё физическое место в макете.\n- События: клики не проходят, клавиатурный фокус не получает.\n- Доступность: скрыт от скринридеров.\n- Анимация: поддерживает transition с задержкой (идеально для выпадающих меню в связке с opacity).\n\n3. `opacity: 0`:\n- Геометрия: СОХРАНЯЕТСЯ на экране.\n- События: КЛИКАБЕЛЕН! Пользователь может случайно нажать на невидимую кнопку!\n- Доступность: СКРИНРИДЕР ЧИТАЕТ! Пользователь с клавиатурой может перейти на невидимый инпут.\n- Анимация: идеально анимируется на GPU (Composite layer, 60/120 FPS).\n- Важно: при `opacity: 0` всегда добавляйте `pointer-events: none;`, если клики не должны срабатывать.\n\n4. Класс `.visually-hidden` (sr-only — доступное скрытие для скринридеров):\n- Скрывает элемент визуально для зрячих пользователей (схлопывает в 1x1px с `clip-path`), но ПОЛНОСТЬЮ сохраняет для чтения скринридерами (необходим для скрытых заголовков `<h2>`, подписей иконок и ссылок «Skip to content»).",
          "image": {
            "src": "/images/lessons/css-display-visibility.svg",
            "alt": "Сравнение техник скрытия display: none, visibility, opacity и visually-hidden",
            "caption": "Четыре способа скрытия: display:none убирает из потока, visibility сохраняет место, .visually-hidden сохраняет доступность"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Стандартный класс доступного скрытия (WCAG / Tailwind sr-only) */\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n/* Плавное появление выпадающего меню без кликабельности в скрытом состоянии */\n.dropdown-menu {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transform: translateY(-8px);\n  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;\n}\n\n.dropdown:hover .dropdown-menu,\n.dropdown:focus-within .dropdown-menu {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: translateY(0);\n}",
            "title": "Паттерн доступного скрытия и безопасной анимации меню",
            "explanation": "Комбинация opacity: 0 + visibility: hidden + pointer-events: none обеспечивает плавную анимацию, блокирует случайные клики и предотвращает ложный фокус с клавиатуры."
          }
        },
        {
          "title": "Современные типы display: contents и display: flow-root",
          "content": "В современном CSS появились новые значения `display`, решающие сложные архитектурные задачи макетов.\n\n1. `display: contents`:\n- Элемент-обёртка визуально «растворяется» в DOM-дереве!\n- Сам контейнер не генерирует собственный бокс (Box Model), не имеет фона, рамок и отступов.\n- Все его прямые дочерние элементы становятся элементами родительского контейнера на уровень выше!\n- Применение: семантическая группировка тегов (`<section>`, `<form>`) внутри CSS Grid или Flexbox без нарушения сетки.\n- Внимание: будьте осторожны с доступностью в старых браузерах (может сбрасывать роли в Accessibility Tree).\n\n2. `display: flow-root`:\n- Создаёт новый Block Formatting Context (BFC).\n- Изолирует внутренние margin (предотвращает Margin Collapse).\n- Автоматически содержит внутри себя плавающие элементы (`float`).\n- Не имеет побочных эффектов обрезки контента, в отличие от `overflow: hidden`.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Пример display: contents в CSS Grid -->\n<div class=\"parent-grid\">\n  <div class=\"item\">1</div>\n  <!-- form растворяется, а ее дети становятся прямыми колонками грида -->\n  <form class=\"subgrid-form\" style=\"display: contents;\">\n    <input type=\"text\" placeholder=\"Поиск...\" />\n    <button type=\"submit\">Найти</button>\n  </form>\n  <div class=\"item\">4</div>\n</div>\n\n<style>\n  .parent-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px;\n  }\n</style>",
            "title": "Растворение контейнера с display: contents в сетке Grid",
            "explanation": "Свойство display: contents позволяет сохранить семантический тег <form>, при этом input и button ведут себя как прямые дочерние ячейки parent-grid."
          }
        },
        {
          "title": "Двухключевой синтаксис display (Multi-keyword display)",
          "content": "Современная спецификация CSS Display Module Level 3 разделяет значение `display` на два параметра:\n1. Внешний тип отображения (Outer display type) — как элемент участвует в потоке родителя (`block` или `inline`).\n2. Внутренний тип форматирования (Inner display type) — как форматируются дочерние элементы (`flow`, `flex`, `grid`).\n\nДвухключевой синтаксис:\n- `display: block flex;` (эквивалент `display: flex`) — блочный элемент снаружи, flex-контейнер внутри.\n- `display: inline flex;` (эквивалент `display: inline-flex`) — строчный элемент снаружи, flex-контейнер внутри.\n- `display: block grid;` (эквивалент `display: grid`).\n- `display: inline grid;` (эквивалент `display: inline-grid`).\n- `display: block flow;` (эквивалент `display: block`).\n- `display: inline flow-root;` — строчный элемент с собственным BFC (современный аналог `inline-block`).",
          "codeExample": {
            "language": "css",
            "code": "/* Двухключевой синтаксис display */\n.inline-flex-badge {\n  /* Строчный элемент в строке текста, */\n  /* но с выравниванием иконки и текста через flex внутри */\n  display: inline-flex; /* или display: inline flex; */\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  border-radius: 20px;\n}",
            "title": "Практическое использование inline-flex для бейджей",
            "explanation": "inline-flex позволяет идеально отцентрировать иконку и текст внутри компактного бейджа, не разрывая строку окружающего абзаца."
          }
        }
      ],
      "seniorTips": [
        "Никогда не используйте `opacity: 0` для полного скрытия элементов без `pointer-events: none` — невидимые элементы будут перехватывать клики мыши.",
        "Для скрытых заголовков страниц и секций используйте класс `.visually-hidden` вместо `display: none` — это сохраняет семантическую структуру для скринридеров и повышает Accessibility Score до 100.",
        "Для горизонтальных списков кнопок и меню используйте `display: flex` с `gap` вместо `display: inline-block` — это навсегда решает проблему паразитных пробелов в HTML.",
        "Если вам нужно, чтобы выпадающее меню плавно анимировалось, комбинируйте `opacity: 0` + `visibility: hidden` + `pointer-events: none`."
      ],
      "commonMistakes": [
        {
          "bad": "/* Попытка скрыть элемент с сохранением чтения скринридером */\n.screen-reader-text {\n  display: none; /* ❌ Скринридер НЕ прочитает! */\n}",
          "good": ".screen-reader-text {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n}",
          "reason": "display: none и visibility: hidden полностью исключают элемент из Accessibility Tree. Скринридер физически не видит этот текст. Для a11y используйте технику .visually-hidden."
        },
        {
          "bad": "<span style=\"width: 200px; height: 100px; padding-top: 30px;\">\n  Текст кнопки\n</span>",
          "good": "<span style=\"display: inline-block; width: 200px; height: 100px; padding-top: 30px;\">\n  Текст кнопки\n</span>",
          "reason": "Строчные элементы (display: inline по умолчанию) игнорируют width, height и вертикальные отступы. Требуется явный display: inline-block или inline-flex."
        },
        {
          "bad": "/* Скрытие меню только через opacity */\n.modal {\n  opacity: 0;\n  /* Модалка невидима, но блокирует клики по всему экрану! */\n}",
          "good": ".modal {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}",
          "reason": "Элемент с opacity: 0 остаётся физически на экране и перехватывает клики и фокус. visibility: hidden и pointer-events: none блокируют взаимодействие."
        }
      ],
      "keyTakeaways": [
        "`display: block` начинает с новой строки и занимает 100% ширины. `display: inline` обтекается текстом и игнорирует width/height.",
        "`display: inline-block` сочетает поведение в строке с полной поддержкой размеров и отступов блочной модели.",
        "`display: none` полностью удаляет узел из дерева рендеринга и a11y. `visibility: hidden` скрывает, но сохраняет занимаемое место.",
        "`opacity: 0` делает элемент прозрачным, но оставляет его кликабельным (требует `pointer-events: none`).",
        "Класс `.visually-hidden` скрывает контент визуально, но на 100% сохраняет его доступность для скринридеров."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"display-playground\">\n  <div class=\"demo-box box-block\">display: block</div>\n  <span class=\"demo-box box-inline\">display: inline (игнорирует width)</span>\n  <span class=\"demo-box box-inline-block\">display: inline-block</span>\n  <div class=\"demo-box box-hidden\">visibility: hidden (держит место)</div>\n  <div class=\"demo-box\">Следующий блок в потоке</div>\n</div>",
      "initialCss": ".display-playground {\n  padding: 16px;\n  background: #0a0e13;\n  color: #e6edf3;\n  font-family: monospace;\n}\n.demo-box {\n  background: #161b22;\n  border: 2px solid #2dff8a;\n  padding: 10px;\n  margin: 6px;\n}\n.box-block {\n  display: block;\n  width: 200px;\n}\n.box-inline {\n  display: inline;\n  width: 300px; /* Игнорируется! */\n  border-color: #ffb02e;\n}\n.box-inline-block {\n  display: inline-block;\n  width: 220px;\n  border-color: #29e7ff;\n}\n.box-hidden {\n  visibility: hidden;\n  border-color: #f85149;\n}",
      "initialJs": "// Проверка вычисленных стилей:\nconst boxes = document.querySelectorAll('.demo-box');\nboxes.forEach((b) => {\n  console.log(`${b.className} -> display: ${getComputedStyle(b).display}`);\n});",
      "instructions": "Практика со свойством display:\n1. Посмотрите, как ведут себя block, inline и inline-block в предпросмотре\n2. Замените у .box-hidden свойство с visibility: hidden на display: none — обратите внимание, как следующий блок мгновенно подтянется вверх\n3. Создайте кнопку с display: inline-flex и добавьте к ней выравнивание иконки"
    },
    "task": {
      "title": "Разработка доступного анимированного Dropdown-меню",
      "scenario": "Вам необходимо сверстать выпадающее меню пользователя с аватаркой. Меню должно плавно появляться при наведении и фокусе с клавиатуры, не ломать поток документа, блокировать случайные клики в скрытом состоянии и содержать скрытый для скринридеров заголовок (.visually-hidden).",
      "criteria": [
        "Кнопка-триггер меню оформлена как inline-flex с выравниванием по центру",
        "Выпадающий список скрыт через комбинацию opacity: 0 + visibility: hidden + pointer-events: none",
        "При наведении (:hover) и фокусе (:focus-within) список плавно появляется с анимацией transform и opacity",
        "Использовать класс .visually-hidden для заголовка меню, доступного скринридерам",
        "Корректный порядок фокуса клавишей Tab при открытии меню"
      ],
      "starterCode": {
        "html": "<div class=\"user-menu\">\n  <button class=\"user-btn\">Профиль</button>\n  <ul class=\"menu-list\">\n    <li><a href=\"#\">Настройки</a></li>\n    <li><a href=\"#\">Выход</a></li>\n  </ul>\n</div>",
        "css": "/* Напишите стили для доступного меню */"
      },
      "hints": [
        "Используйте transform: translateY(-10px) в скрытом состоянии и translateY(0) в активном",
        "Добавьте transition: opacity 0.2s, visibility 0.2s, transform 0.2s",
        "Селектор открытия: .user-menu:hover .menu-list, .user-menu:focus-within .menu-list"
      ],
      "solution": {
        "css": ".visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.user-menu {\n  position: relative;\n  display: inline-block;\n}\n.user-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: #161b22;\n  color: #2dff8a;\n  border: 1px solid #30363d;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.menu-list {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 180px;\n  margin-top: 8px;\n  padding: 8px 0;\n  background: #0d1117;\n  border: 1px solid #30363d;\n  border-radius: 8px;\n  list-style: none;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transform: translateY(-8px);\n  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;\n}\n.user-menu:hover .menu-list,\n.user-menu:focus-within .menu-list {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: translateY(0);\n}\n.menu-list a {\n  display: block;\n  padding: 8px 16px;\n  color: #e6edf3;\n  text-decoration: none;\n}\n.menu-list a:hover {\n  background: #161b22;\n  color: #29e7ff;\n}",
        "explanation": "Меню использует связку opacity: 0 + visibility: hidden + pointer-events: none для плавного появления без фантомных кликов. Селектор :focus-within обеспечивает доступность для навигации с клавиатуры."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css4-q1",
          "question": "Какие из этих объявлений браузер реально применит к строчному элементу?",
          "codeSnippet": ".badge {\n  display: inline;\n  width: 200px;\n  height: 80px;\n  margin: 20px;\n  padding: 20px;\n}",
          "options": [
            "Горизонтальные отступы сработают, вертикальные `margin` — нет, `width` и `height` игнорируются",
            "Все четыре свойства: строчный элемент отличается от блочного только положением в строке",
            "Отступы применятся полностью, а `width` и `height` браузер пересчитает по содержимому",
            "Применятся только `width` и `height`: отступы у строчных элементов не действуют"
          ],
          "correctIndex": 0,
          "explanation": "Строчный элемент не формирует собственный блок, поэтому явные `width` и `height` к нему не применяются — размер целиком диктуется содержимым. Горизонтальные отступы работают и раздвигают соседний текст. А вот вертикальный `margin` игнорируется полностью, и вертикальный `padding`, хотя и рисуется, высоту строки не увеличивает и наезжает на соседние строки. Нужны размеры — берите `inline-block`."
        },
        {
          "id": "css4-q2",
          "question": "Какой приём скрывает элемент визуально, сохраняет его для скринридера и не оставляет невидимой кликабельной области?",
          "options": [
            "`display: none` — узел остаётся в DOM, а значит остаётся и в дереве доступности",
            "Класс `.visually-hidden` — блок сжат до одного пикселя и убран из зоны видимости",
            "`visibility: hidden` — элемент лишь невидим, место и озвучивание при этом сохраняются",
            "`opacity: 0` — прозрачность меняет только отрисовку и больше ни на что не влияет"
          ],
          "correctIndex": 1,
          "explanation": "`display: none` и `visibility: hidden` выбрасывают элемент из дерева доступности: скринридер его попросту не найдёт. `opacity: 0` доступность сохраняет, но оставляет на экране полноразмерную невидимую область, которая перехватывает клики и фокус. Приём `.visually-hidden` — абсолютное позиционирование, размер в один пиксель и `clip-path` — убирает элемент с глаз, оставляя его в дереве доступности и не создавая ловушки для курсора."
        },
        {
          "id": "css4-q3",
          "question": "Выпадающее меню скрыто через `opacity: 0`, и пользователи жалуются, что нажимают на невидимые пункты. Что добавить?",
          "options": [
            "`pointer-events: none`, а чтобы убрать пункты из обхода по Tab — ещё и `visibility: hidden`",
            "`z-index: -1` — меню уйдёт под остальной контент и перестанет ловить нажатия",
            "`overflow: hidden` на родителе — содержимое меню будет обрезано по его границам",
            "`user-select: none` — элемент перестанет реагировать на действия пользователя"
          ],
          "correctIndex": 0,
          "explanation": "`pointer-events: none` снимает перехват мыши, но пункты меню остаются фокусируемыми с клавиатуры и видимыми для скринридера, поэтому в паре с ним добавляют `visibility: hidden`. Такая тройка ещё и анимируется, в отличие от `display: none`. Отрицательный `z-index` элемент не обезвредит, обрезка родителем — про переполнение, а `user-select` управляет только выделением текста."
        },
        {
          "id": "css4-q4",
          "question": "Что делает `display: contents` и в чём его главный риск?",
          "options": [
            "Контейнер превращается в строчный элемент, из-за чего его размеры перестают применяться",
            "Содержимое контейнера заменяется значением свойства `content`, а сам блок при этом скрывается",
            "Контейнер перестаёт рисовать свой бокс, дети поднимаются уровнем выше; теряются фон, рамки и роль",
            "Дети наследуют вычисленные стили контейнера целиком, включая его фон и рамку"
          ],
          "correctIndex": 2,
          "explanation": "Приём удобен, когда нужно сделать детей обёртки прямыми участниками grid- или flex-раскладки родителя. Но вместе с боксом пропадают фон, рамки, отступы и тени контейнера, а в ряде браузеров ещё и его семантическая роль: такой `<ul>` или `<button>` может исчезнуть из дерева доступности. Поэтому приём применяют к нейтральным обёрткам, а не к семантическим тегам."
        },
        {
          "id": "css4-q5",
          "question": "Что означает запись `display: inline flex` в двухключевом синтаксисе?",
          "options": [
            "Дочерние элементы раскладываются flex-ом, а сам контейнер остаётся блочным",
            "Элемент ведёт себя как строчный снаружи и создаёт flex-контекст для содержимого внутри",
            "Flex-контейнер, в котором элементы располагаются строго в одну строку без переноса",
            "Устаревшая форма записи `display: flex` — второе ключевое слово браузер игнорирует"
          ],
          "correctIndex": 1,
          "explanation": "Двухключевой синтаксис разделяет две независимые характеристики: первое слово описывает, как элемент ведёт себя во внешнем потоке, второе — по каким правилам раскладывается его содержимое. `inline flex` — это в точности старое `inline-flex`, а `block flow` — привычный `display: block`. Запрет переноса задаётся отдельным свойством `flex-wrap`."
        }
      ]
    }
  },
  {
    "id": "css-5",
    "moduleId": "css",
    "level": 5,
    "title": "Позиционирование (Position)",
    "subtitle": "Static, Relative, Absolute, Fixed, Sticky, Stacking Context и z-index",
    "description": "Освойте управление координатами элементов в CSS: 5 типов свойства position, тонкости работы с координатами top/right/bottom/left и свойством inset, правила создания Stacking Context и глубокую работу с z-index.",
    "estimatedMinutes": 60,
    "difficulty": "intermediate",
    "tags": [
      "position",
      "relative",
      "absolute",
      "fixed",
      "sticky",
      "z-index",
      "stacking-context",
      "inset"
    ],
    "theory": {
      "overview": "Свойство `position` определяет, по каким математическим правилам браузер вычисляет координаты элемента на экране и участвует ли он в стандартном потоке документа (Normal Flow).\n\nПозиционирование лежит в основе создания модальных окон, всплывающих подсказок (tooltips), бейджей на карточках, плавающих кнопок (FAB), липких шапок (Sticky Header) и многослойных интерфейсов. В этом уроке мы разберём все 5 типов `position`, разберёмся с контекстом наложения (Stacking Context) и навсегда устраним проблемы с `z-index`.",
      "sections": [
        {
          "title": "Пять режимов position: static, relative, absolute, fixed, sticky",
          "content": "Каждый режим `position` кардинально меняет поведение элемента:\n\n1. `position: static` (значение по умолчанию):\n- Элемент располагается в нормальном потоке документа (Normal Flow).\n- Координатные свойства `top`, `right`, `bottom`, `left` и `z-index` ПОЛНОСТЬЮ ИГНОРИРУЮТСЯ!\n\n2. `position: relative` (относительное позиционирование):\n- Элемент остаётся в нормальном потоке, сохраняя своё физическое место (соседние блоки не сдвигаются!).\n- Свойства `top`/`left`/`right`/`bottom` визуально сдвигают элемент относительно его СОБСТВЕННОГО исходного положения.\n- Главное назначение: служит координатной сеткой (якорем) для вложенных `absolute`-элементов!\n\n3. `position: absolute` (абсолютное позиционирование):\n- Элемент ВЫРЫВАЕТСЯ из потока документа (занимает 0px места, соседи подтягиваются вверх).\n- Позиционируется относительно БЛИЖАЙШЕГО предка, у которого `position` отличен от `static` (`relative`, `absolute`, `fixed`, `sticky`). Если такого предка нет — позиционируется относительно корневого контейнера `<html>` (Initial Containing Block).\n\n4. `position: fixed` (фиксированное позиционирование):\n- Вырывается из потока и привязывается строго к границам окна браузера (Viewport).\n- НЕ скроллится вместе со страницей. Идеально для шапки сайта, полноэкранных модалок и кнопки «Наверх».\n\n5. `position: sticky` (липкое позиционирование):\n- Гибрид: ведёт себя как `relative`, пока находится в поле зрения, но как только при скролле достигает заданного порога (`top: 0`), «прилипает» как `fixed`!\n- Прилипает ТОЛЬКО внутри своего родительского контейнера (как только родитель проскролливается — элемент уезжает вместе с ним).",
          "image": {
            "src": "/images/lessons/css-position-types.svg",
            "alt": "Сравнение 5 типов position: static, relative, absolute, fixed и sticky",
            "caption": "static находится в потоке, relative создает якорь, absolute и fixed вырываются из потока, sticky прилипает при скролле"
          },
          "codeExample": {
            "language": "css",
            "code": "/* 1. Карточка-родитель как якорь для бейджа */\n.product-card {\n  position: relative; /* Якорь для absolute */\n  width: 300px;\n  padding: 20px;\n  background: #161b22;\n  border-radius: 8px;\n}\n\n/* 2. Абсолютный бейдж скидки в правом верхнем углу */\n.badge-discount {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #2dff8a;\n  color: #0a0e13;\n  padding: 4px 8px;\n  font-weight: bold;\n  border-radius: 4px;\n}\n\n/* 3. Фиксированная шапка сайта */\n.site-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  z-index: 100;\n}\n\n/* 4. Липкая боковая панель */\n.sidebar-sticky {\n  position: sticky;\n  top: 80px; /* Прилипнет в 80px от верха экрана */\n}",
            "title": "Практическое применение relative, absolute, fixed и sticky",
            "explanation": "product-card с position: relative удерживает absolute-бейдж внутри своих границ. site-header зафиксирован на экране, а sidebar-sticky плавно прилипает при прокрутке."
          }
        },
        {
          "title": "Контекст наложения (Stacking Context) и z-index",
          "content": "Свойство `z-index` управляет порядком отрисовки элементов вдоль оси Z (перпендикулярно плоскости экрана). Чем больше число `z-index`, тем ближе элемент к пользователю.\n\nФундаментальные правила z-index:\n1. `z-index` работает ТОЛЬКО на позиционированных элементах (где `position` равен `relative`, `absolute`, `fixed` или `sticky`), а также на прямых flex/grid-дочерних элементах. На `position: static` он ИГНОРИРУЕТСЯ!\n\n2. Stacking Context (Контекст наложения):\nКонтекст наложения — это изолированная трехмерная группа слоев. Элементы внутри одного контекста наложения не могут «выглянуть» наружу и перекрыть элементы из более высокого контекста!\n\nЧто создаёт новый Stacking Context:\n- Корневой элемент документа `<html>`\n- `position` (`relative`/`absolute`/`fixed`/`sticky`) + `z-index` отличен от `auto`\n- `opacity` меньше `1` (например, `opacity: 0.99`)\n- `transform`, `filter`, `perspective`, `clip-path` отличные от `none`\n- `will-change` со значением любого свойства, создающего контекст\n- `contain: layout` или `container-type`\n\nКлассическая ловушка: если у родителя A `z-index: 1`, а у родителя B `z-index: 2`, то дочерний элемент A с `z-index: 999999` ВСЁ РАВНО окажется ПОД родителем B!",
          "codeExample": {
            "language": "css",
            "code": "/* Правильная иерархия слоев через дизайн-токены */\n:root {\n  --z-base: 0;\n  --z-card-badge: 10;\n  --z-dropdown: 50;\n  --z-sticky-header: 100;\n  --z-modal-backdrop: 500;\n  --z-modal-content: 510;\n  --z-toast-notification: 1000;\n}\n\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: var(--z-modal-backdrop);\n}\n\n.modal-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: var(--z-modal-content);\n}",
            "title": "Системное управление z-index через переменные",
            "explanation": "Использование CSS-переменных для z-index исключает хаос случайных чисел 999999 и гарантирует правильный порядок наложения модалок и уведомлений."
          }
        },
        {
          "title": "Свойство inset и центрирование через absolute",
          "content": "В современном CSS появилось логическое сокращение `inset`, объединяющее `top`, `right`, `bottom`, `left`:\n- `inset: 0;` эквивалентно `top: 0; right: 0; bottom: 0; left: 0;` (растягивание на 100% контейнера).\n- `inset: 10px 20px;` эквивалентно `top: 10px; bottom: 10px; left: 20px; right: 20px;`.\n\nТехники абсолютного центрирования:\n\n1. Абсолютное центрирование через transform (универсальный способ):\n`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`\nРаботает при любых неизвестных размерах элемента.\n\n2. Абсолютное центрирование через inset и margin: auto:\n`position: absolute; inset: 0; margin: auto; width: 200px; height: 100px;`\nИдеально выравнивает элемент точно по центру родителя без искажения субпиксельного сглаживания текста.",
          "codeExample": {
            "language": "css",
            "code": "/* 1. Полноэкранный оверлей на 100% родителя */\n.card-overlay {\n  position: absolute;\n  inset: 0; /* Растягивает на всю площадь карточки */\n  background: rgba(10, 14, 19, 0.75);\n  backdrop-filter: blur(4px);\n}\n\n/* 2. Центрирование модального окна без transform */\n.centered-box {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  width: 320px;\n  height: 200px;\n  background: #161b22;\n  border: 1px solid #2dff8a;\n}",
            "title": "Использование inset: 0 и центрирование через margin: auto",
            "explanation": "inset: 0 растягивает позиционированный блок на всю область родителя. В комбинации с margin: auto центрирует блок с фиксированными размерами."
          }
        },
        {
          "title": "Подводные камни position: sticky и fixed",
          "content": "Два самых коварных бага, с которыми сталкиваются даже Middle-разработчики:\n\n1. Почему ломается `position: sticky`:\n- Наличие `overflow: hidden`, `overflow: auto` или `overflow: scroll` на ЛЮБОМ из родительских контейнеров отменяет скролл-контекст окна, и sticky перестает прилипать!\n- Не задано координатное свойство (например, `top: 0`). Без указания `top`/`bottom` липкий элемент не знает, в какой точке фиксироваться.\n- Высота родителя равна высоте самого sticky-элемента (элементу негде скроллиться внутри родителя).\n\n2. Почему ломается `position: fixed`:\n- Если у ЛЮБОГО предка fixed-элемента задано свойство `transform` (например, `transform: scale(1)`), `filter`, `perspective` или `contain: paint`, то этот предок становится содержащим блоком (Containing Block)!\n- В результате `position: fixed` перестаёт фиксироваться относительно Viewport экрана и начинает скроллиться внутри этого предка как обычный `absolute`.",
          "codeExample": {
            "language": "css",
            "code": "/* ❌ Ошибка: fixed сломается, если у родителя есть transform */\n.parent-wrapper {\n  transform: translateZ(0); /* Создает containing block! */\n}\n.parent-wrapper .fixed-modal {\n  position: fixed; /* ❌ Будет позиционироваться по parent, а не по экрану! */\n  top: 0;\n  left: 0;\n}\n\n/* ✅ Правильно: модальные окна монтируются в корень <body> (React Portal) */\nbody > .modal-portal {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n}",
            "title": "Баг fixed внутри transform и решение через React Portal",
            "explanation": "Свойство transform на предке превращает его в контейнер для fixed. Решение — монтировать модалки в корень body через React Portal."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: CSS Positions за 4 минуты",
          "content": "Для быстрого и наглядного повторения всех типов позиционирования в CSS рекомендуем видеоматериал:\n\n- **[Learn CSS Positions in 4 minutes (YouTube)](https://youtu.be/YEmdHbQBCSQ?si=1uM-L6aOgA--vn3C)** — лаконичное визуальное руководство от Coding2GO, наглядно объясняющее разницу между static, relative, absolute, fixed и sticky за 4 минуты."
        }
      ],
      "seniorTips": [
        "Используйте современное свойство `inset: 0;` вместо громоздкой записи `top: 0; right: 0; bottom: 0; left: 0;` — это сокращает CSS и повышает читаемость.",
        "Для модальных окон и глобальных попапов всегда монтируйте DOM-узел в корень `<body>` (в React через `createPortal`). Это исключит баги с `transform` и Stacking Context родителей.",
        "Если `position: sticky` не прилипает — проверьте всех родителей элемента в DevTools: кто-то из них наверняка имеет `overflow: hidden` или `overflow: auto`.",
        "Всегда организуйте `z-index` через централизованную шкалу переменных (`--z-dropdown`, `--z-header`, `--z-modal`), чтобы избежать гонки неконтролируемых значений `9999`."
      ],
      "commonMistakes": [
        {
          "bad": "/* Забыли relative на карточке */\n.card { width: 300px; }\n.card .badge { position: absolute; top: 10px; right: 10px; }",
          "good": ".card { position: relative; width: 300px; }\n.card .badge { position: absolute; top: 10px; right: 10px; }",
          "reason": "Без position: relative на родительской карточке absolute-бейдж улетит в правый верхний угол всей страницы (к тегу <html>)."
        },
        {
          "bad": "/* z-index на элементе с position: static */\n.btn { position: static; z-index: 100; }",
          "good": ".btn { position: relative; z-index: 100; }",
          "reason": "Свойство z-index полностью игнорируется браузером на элементах со статическим позиционированием (static)."
        },
        {
          "bad": "/* sticky без указания координат */\n.sticky-nav { position: sticky; }",
          "good": ".sticky-nav { position: sticky; top: 0; }",
          "reason": "position: sticky не начнет прилипать, пока явно не указана координата фиксации (top, bottom, left или right)."
        }
      ],
      "keyTakeaways": [
        "`static` — стандартный поток. `relative` — сдвиг от себя + якорь для absolute. `absolute` — вырывается из потока и ищет relative-предка.",
        "`fixed` фиксируется относительно Viewport окна. `sticky` прилипает при скролле внутри родительского контейнера.",
        "`z-index` работает только на позиционированных элементах (relative, absolute, fixed, sticky).",
        "Stacking Context изолирует слои: дочерний элемент не может перекрыть внешний слой, если его родитель имеет меньший `z-index`.",
        "Свойство `inset: 0` растягивает позиционированный блок на 100% ширины и высоты содержащего блока."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"position-playground\">\n  <div class=\"parent-card\">\n    <span class=\"badge-abs\">NEW</span>\n    <h3>Карточка товара</h3>\n    <p>position: relative у родителя держит absolute-бейдж внутри.</p>\n  </div>\n\n  <div class=\"sticky-box\">Липкий заголовок (sticky top: 0)</div>\n  <div class=\"scroll-content\">Прокрутите вниз для проверки sticky...</div>\n</div>",
      "initialCss": ".position-playground {\n  height: 250px;\n  overflow-y: auto;\n  background: #0a0e13;\n  padding: 16px;\n  color: #e6edf3;\n  font-family: monospace;\n}\n.parent-card {\n  position: relative;\n  background: #161b22;\n  border: 1px solid #30363d;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.badge-abs {\n  position: absolute;\n  top: -10px;\n  right: 12px;\n  background: #2dff8a;\n  color: #0a0e13;\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: bold;\n  border-radius: 4px;\n}\n.sticky-box {\n  position: sticky;\n  top: 0;\n  background: #29e7ff;\n  color: #0a0e13;\n  padding: 8px 12px;\n  font-weight: bold;\n  border-radius: 4px;\n}\n.scroll-content {\n  height: 400px;\n  padding-top: 20px;\n  color: #8b949e;\n}",
      "initialJs": "console.log('Позиционирование активно');",
      "instructions": "Практика с position:\n1. Попробуйте убрать position: relative у .parent-card — посмотрите, куда улетит зеленый бейдж\n2. Прокрутите блок вниз и наблюдайте, как .sticky-box фиксируется в top: 0\n3. Измените координаты бейджа: bottom: -10px; left: 12px;"
    },
    "task": {
      "title": "Создание интерактивной карточки с бейджем, тултипом и липким футером",
      "scenario": "Вам необходимо сверстать карточку товара для каталога: в правом верхнем углу должен располагаться absolute-бейдж скидки, снизу — всплывающий тултип при наведении, а внизу экрана — фиксированная плашка с кнопкой покупки.",
      "criteria": [
        "Карточка товара имеет position: relative для создания содержащего блока",
        "Бейдж со скидкой позиционирован абсолютно в правом верхнем углу (top: 12px, right: 12px)",
        "Оверлей карточки растянут на 100% площади через inset: 0",
        "Плавающая плашка корзины зафиксирована снизу экрана (position: fixed, bottom: 0, z-index: 100)",
        "Соблюдена правильная иерархия z-index"
      ],
      "starterCode": {
        "html": "<div class=\"catalog-container\">\n  <div class=\"product-card\">\n    <span class=\"badge-sale\">-25%</span>\n    <h2>Игровая клавиатура CyberKey</h2>\n    <p>Механическая клавиатура с подсветкой.</p>\n  </div>\n  <div class=\"bottom-cart-bar\">\n    <span>В корзине 1 товар</span>\n    <button>Оформить заказ</button>\n  </div>\n</div>",
        "css": "/* Напишите стили позиционирования */"
      },
      "hints": [
        "Задайте .product-card { position: relative; }",
        "Используйте .badge-sale { position: absolute; top: 12px; right: 12px; }",
        "Используйте .bottom-cart-bar { position: fixed; bottom: 0; left: 0; right: 0; z-index: 100; }"
      ],
      "solution": {
        "css": ".product-card {\n  position: relative;\n  width: 320px;\n  padding: 24px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n  color: #e6edf3;\n}\n.badge-sale {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #ffb02e;\n  color: #0a0e13;\n  font-weight: bold;\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.bottom-cart-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background: #0d1117;\n  border-top: 1px solid #2dff8a;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  z-index: 100;\n}",
        "explanation": "product-card с relative удерживает absolute-бейдж внутри своих границ. bottom-cart-bar с position: fixed и z-index: 100 стабильно закреплена внизу экрана."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css5-q1",
          "question": "У карточки нет `position: relative`, но задан `transform: translateZ(0)`. Относительно чего спозиционируется вложенный в неё `position: absolute` бейдж?",
          "options": [
            "Относительно карточки: `transform` тоже создаёт содержащий блок для потомков",
            "Относительно `<html>`: содержащий блок определяется исключительно свойством `position`",
            "Относительно окна просмотра: `transform` переводит потомков в режим `fixed`",
            "Относительно ближайшего flex- или grid-контейнера в цепочке предков элемента"
          ],
          "correctIndex": 0,
          "explanation": "Обычно содержащий блок для абсолютного элемента ищется по ближайшему предку с `position`, отличным от `static`. Но не только: свойства `transform`, `filter`, `perspective`, `will-change` и `contain` тоже делают элемент содержащим блоком. Это частый источник загадочных багов — вроде «модалка внутри анимированной карточки вдруг перестала быть на весь экран», потому что и `position: fixed` внутри такого предка начинает отсчитываться от него."
        },
        {
          "id": "css5-q2",
          "question": "Блок сдвинут правилами `position: relative; top: 20px; left: 30px`. Что произойдёт с его соседями?",
          "options": [
            "Соседи подтянутся на освободившееся место, как это происходит при `position: absolute`",
            "Соседи останутся на местах, но сам блок будет обрезан по границе исходного положения",
            "Соседи сдвинутся на те же 20 и 30 пикселей, сохранив относительное расположение",
            "Соседи останутся на местах: исходное место блока в потоке продолжает за ним числиться"
          ],
          "correctIndex": 3,
          "explanation": "`relative` — единственный режим сдвига, при котором элемент не покидает поток: его прежнее место остаётся зарезервированным, а сам он лишь отрисовывается со смещением и может наехать на соседей. Именно поэтому такое смещение — плохой инструмент вёрстки и хороший способ задать точку отсчёта для абсолютных потомков. Освобождают место `absolute` и `fixed`."
        },
        {
          "id": "css5-q3",
          "question": "Модальное окно лежит внутри шапки, у него `z-index: 9999`, и всё равно его перекрывает блок с `z-index: 20`. Почему?",
          "codeSnippet": ".header { position: relative; z-index: 10; }\n.modal  { position: fixed;    z-index: 9999; } /* внутри .header */\n.banner { position: relative; z-index: 20; }  /* сосед .header */",
          "options": [
            "Шапка создала контекст наложения, и внутри него модалка не поднимается выше уровня 10",
            "`position: fixed` не поддерживает `z-index`, поэтому фиксированные элементы всегда внизу",
            "Значение 9999 выходит за допустимый диапазон, и браузер сбрасывает его к нулю",
            "`z-index` сравнивается только у элементов с одинаковым значением свойства `position`"
          ],
          "correctIndex": 0,
          "explanation": "Позиционированный элемент с числовым `z-index` создаёт контекст наложения, и все его потомки навсегда запираются внутри. Снаружи шапка участвует в сравнении со значением 10, поэтому баннер с 20 перекрывает её целиком вместе с содержимым — сколько бы там ни стояло девяток. Лечится это не увеличением числа, а выносом модалки в конец `<body>`, например через портал."
        },
        {
          "id": "css5-q4",
          "question": "Как отцентрировать блок известного размера внутри `position: relative` родителя, не прибегая к Flexbox?",
          "options": [
            "`position: absolute; inset: 0; margin: auto` — свободное место распределится поровну",
            "`position: absolute; inset: 50%` — блок встанет ровно в геометрический центр родителя",
            "`position: absolute; top: 50%; left: 50%` — координаты отсчитываются от центра блока",
            "`position: fixed; inset: 0` — блок растянется и выровняется по центру окна просмотра"
          ],
          "correctIndex": 0,
          "explanation": "Приём работает так: `inset: 0` растягивает зоны позиционирования во все стороны, а `margin: auto` при заданных размерах делит остаток пространства поровну — сразу по обеим осям. Вариант с `top: 50%; left: 50%` смещает блок его левым верхним углом, поэтому требует поправки `transform: translate(-50%, -50%)`. `inset: 50%` схлопнет блок, а `fixed` привяжет его к окну, а не к родителю."
        },
        {
          "id": "css5-q5",
          "question": "Элемент с `position: sticky; top: 0` не прилипает при прокрутке. Какая причина наиболее вероятна?",
          "options": [
            "Элементу не хватает `z-index`: без него липкий блок уезжает под соседний контент",
            "У одного из предков задан `overflow: hidden` или `auto` — прокрутку перехватил он",
            "Свойство `sticky` требует обязательного `position: relative` на прямом родителе",
            "Липкий элемент обязан быть единственным ребёнком внутри своего контейнера"
          ],
          "correctIndex": 1,
          "explanation": "Липкий элемент прилипает к ближайшему предку, создающему контекст прокрутки. Если кто-то выше по дереву получил `overflow`, отличный от `visible`, точкой отсчёта становится он, и относительно окна ничего не происходит. Проверять нужно всю цепочку предков в DevTools. Другие частые причины — не задана ни одна координата фиксации либо родитель по высоте равен самому элементу, и прокручивать внутри нечего."
        }
      ]
    }
  },
  {
    "id": "css-6",
    "moduleId": "css",
    "level": 6,
    "title": "Типографика и веб-шрифты",
    "subtitle": "font-family, @font-face, font-display: swap, Variable Fonts, line-height и адаптивный clamp()",
    "description": "Освойте профессиональную веб-типографику: подключение шрифтов через @font-face (формат WOFF2), устранение невидимого текста через font-display: swap, преимущества вариативных шрифтов (Variable Fonts), микротипографику и адаптивный clamp().",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "typography",
      "fonts",
      "font-face",
      "font-display",
      "variable-fonts",
      "clamp",
      "line-height",
      "rem"
    ],
    "theory": {
      "overview": "Типографика составляет более 90% любого веб-интерфейса. Правильно подобранный шрифт, выверенный межстрочный интервал (line-height) и адаптивный размер шрифта делают сайт удобным для чтения и формируют визуальную идентичность бренда.\n\nВ этом уроке мы разберём подключение кастомных шрифтов через современный формат WOFF2, разберёмся с поведением `font-display: swap` для предотвращения эффекта FOIT, изучим гибкость вариативных шрифтов (Variable Fonts) и настроим адаптивную типографику без медиа-запросов с помощью математической функции `clamp()`.",
      "sections": [
        {
          "title": "Семейства шрифтов, Fallback-стеки и Generic Families",
          "content": "Свойство `font-family` принимает упорядоченный список шрифтов (Font Stack), которые браузер пробует применить слева направо:\n\nБазовые универсальные семейства (Generic Font Families):\n1. `sans-serif` — шрифты без засечек (рубленые): Inter, Roboto, Arial, Helvetica. Стандарт для современных цифровых интерфейсов и чтения с экранов.\n2. `serif` — шрифты с засечками: Times New Roman, Georgia, Merriweather. Традиционно используются для длинных литературных текстов и премиальных изданий.\n3. `monospace` — моноширинные шрифты (все символы одинаковой ширины): JetBrains Mono, Fira Code, Courier. Стандарт для кода, терминалов и табличных данных.\n4. `system-ui` — системный шрифт текущей операционной системы пользователя (San Francisco на macOS/iOS, Segoe UI на Windows, Roboto на Android).\n\nПравило построения надёжного Font Stack:\nВсегда начинайте с желаемого кастомного шрифта, затем указывайте системные шрифты разных ОС и завершайте общим generic-семейством:\n`font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`.\nЕсли название шрифта содержит пробелы — его ОБЯЗАТЕЛЬНО нужно оборачивать в кавычки (`'JetBrains Mono'`).",
          "image": {
            "src": "/images/lessons/css-typography-fonts.svg",
            "alt": "CSS Типографика: font-face, font-display swap, Variable Fonts и clamp",
            "caption": "WOFF2 и font-display: swap ускоряют загрузку, Variable Fonts заменяют десятки файлов, а clamp() дает плавную адаптивность"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Идеальный стек шрифтов для интерфейса */\nbody {\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Helvetica, Arial, sans-serif;\n  font-size: 1rem; /* 16px по умолчанию */\n  line-height: 1.5; /* Относительный межстрочный интервал */\n  color: #e6edf3;\n}\n\n/* Моноширинный стек для блоков кода */\ncode, pre, kbd {\n  font-family: 'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas,\n    'Courier New', monospace;\n}",
            "title": "Настройка системного и моноширинного Font Stack",
            "explanation": "Если Inter не успел загрузиться, браузер мгновенно покажет системный шрифт Apple (-apple-system) или Windows (Segoe UI) без задержки."
          }
        },
        {
          "title": "Подключение шрифтов через @font-face и стратегия font-display",
          "content": "Директива `@font-face` позволяет загрузить и использовать любой кастомный шрифт на сайте.\n\nФорматы файлов шрифтов:\n- `WOFF2` (Web Open Font Format 2) — современный золотой стандарт индустрии. Имеет алгоритм сжатия Brotli (на 30% меньше WOFF), поддерживается 99%+ браузеров.\n- Форматы `.ttf`, `.otf`, `.eot`, `.svg` устарели для веба и НЕ должны использоваться в современном продакшене.\n\nСтратегия загрузки `font-display`:\nКогда браузер видит кастомный шрифт, он отправляет сетевой запрос. Что показывать пользователю, пока файл качается?\n1. `font-display: swap;` (Рекомендуется!):\nБраузер МГНОВЕННО рисует текст системным fallback-шрифтом (нет невидимого текста!), а когда WOFF2 скачался — плавно подменяет его на кастомный.\n2. `font-display: block;` (Антипаттерн FOIT — Flash of Invisible Text):\nБраузер скрывает текст на 3 секунды, показывая пустое место! Если интернет медленный — пользователь видит белый экран.\n3. `font-display: optional;`:\nБраузер дает 100 мс на загрузку. Не успел — оставляет системный шрифт навсегда на эту сессию (идеально для слабых мобильных сетей).",
          "codeExample": {
            "language": "css",
            "code": "/* Подключение кастомного шрифта Inter Regular (400) */\n@font-face {\n  font-family: 'Inter';\n  src: url('/fonts/inter-regular.woff2') format('woff2');\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap; /* Мгновенный показ без пустого экрана! */\n  unicode-range: U+0000-00FF, U+0400-045F; /* Только латиница и кириллица */\n}\n\n/* Подключение Inter Bold (700) */\n@font-face {\n  font-family: 'Inter';\n  src: url('/fonts/inter-bold.woff2') format('woff2');\n  font-weight: 700;\n  font-style: normal;\n  font-display: swap;\n}",
            "title": "Правильное подключение WOFF2 шрифтов с font-display: swap",
            "explanation": "font-display: swap предотвращает невидимый текст. unicode-range отсекает ненужные иероглифы и спецсимволы, уменьшая вес файла до 15-20 КБ."
          }
        },
        {
          "title": "Вариативные шрифты (Variable Fonts)",
          "content": "Вариативный шрифт (Variable Font) — это революционная технология цифровой типографики (OpenType Font Variations).\n\nОбычные шрифты vs Вариативные шрифты:\n- В классическом подходе для каждого начертания нужен отдельный файл: `inter-light.woff2` (300), `inter-regular.woff2` (400), `inter-medium.woff2` (500), `inter-bold.woff2` (700). 5 начертаний = 5 HTTP-запросов и ~150 КБ.\n- В вариативном шрифте ВСЕ начертания упакованы в ОДИН компактный файл (~45 КБ), который поддерживает любую дробную жирность от 100 до 900 (`font-weight: 542;`), наклон и ширину символов!\n\nОси вариации (Variation Axes):\n- `wght` (Weight) — жирность от 100 до 900\n- `wdth` (Width) — ширина символов (от узкого condensed до широкого expanded)\n- `slnt` (Slant) / `ital` (Italic) — угол наклона курсива\n- Плавная CSS-анимация: жирность вариативного шрифта можно плавно анимировать через `transition: font-weight 0.2s ease`!",
          "codeExample": {
            "language": "css",
            "code": "/* Подключение одного вариативного файла шрифта */\n@font-face {\n  font-family: 'InterVariable';\n  src: url('/fonts/inter-variable.woff2') format('woff2-variations');\n  font-weight: 100 900; /* Диапазон доступной жирности */\n  font-display: swap;\n}\n\n.interactive-heading {\n  font-family: 'InterVariable', sans-serif;\n  font-weight: 400;\n  transition: font-weight 0.3s ease, letter-spacing 0.3s ease;\n}\n\n.interactive-heading:hover {\n  font-weight: 750; /* Плавное утолщение без скачков макета! */\n  letter-spacing: -0.01em;\n}",
            "title": "Подключение и плавная анимация Variable Font",
            "explanation": "Один файл inter-variable.woff2 заменяет 9 отдельных файлов шрифта и позволяет плавно анимировать жирность от 400 до 750."
          }
        },
        {
          "title": "Микротипографика: line-height, letter-spacing, rem и функция clamp()",
          "content": "Качественная типографика складывается из деталей:\n\n1. `line-height` (Межстрочный интервал):\n- ВСЕГДА задавайте безразмерным числом: `line-height: 1.5;` (а не `24px`!).\n- Множитель масштабируется автоматически при изменении `font-size`. Для основного текста оптимально `1.5`–`1.65`, для крупных заголовков `h1` — плотнее: `1.1`–`1.2`.\n\n2. `letter-spacing` (Межбуквенный интервал / трекинг):\n- Для больших заголовков (32px+) уменьшайте: `letter-spacing: -0.02em;` (делает заголовок собранным).\n- Для мелкого текста заглавными буквами (CAPS) увеличивайте: `text-transform: uppercase; letter-spacing: 0.08em;`.\n\n3. `rem` vs `px`:\n- Всегда используйте `rem` (Root EM) для размеров текста. `1rem` = базовый размер браузера (обычно 16px). Если слабовидящий пользователь увеличит базовый шрифт в браузере до 20px, весь интерфейс на `rem` пропорционально увеличится, а жесткие `px` останутся микроскопическими!\n\n4. Адаптивный размер текста через `clamp()`:\n`font-size: clamp(min, preferred, max);`\nПозволяет плавно масштабировать размер заголовка от мобильного экрана до 4K монитора без медиа-запросов:\n`font-size: clamp(1.5rem, 3vw + 1rem, 3rem);`.",
          "codeExample": {
            "language": "css",
            "code": "/* Адаптивный заголовок через clamp() */\n.hero-title {\n  /* Мин: 28px (1.75rem), плавно растет с шириной экрана 4vw, Макс: 56px (3.5rem) */\n  font-size: clamp(1.75rem, 4vw + 0.75rem, 3.5rem);\n  line-height: 1.15;\n  letter-spacing: -0.025em;\n  font-weight: 800;\n}\n\n/* Акцентный бейдж заглавными буквами с трекингом */\n.badge-caps {\n  font-size: 0.75rem; /* 12px */\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n  color: #2dff8a;\n}",
            "title": "Адаптивная типографика с clamp() и микротипографика",
            "explanation": "clamp() вычисляет идеальный размер шрифта для любой ширины вьюпорта без единого @media query. letter-spacing делает крупные заголовки аккуратными."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте безразмерный `line-height: 1.5;` вместо жестких пикселей `line-height: 24px;`. Безразмерный множитель наследуется корректно при любом `font-size`.",
        "Для веб-шрифтов подключайте ТОЛЬКО формат `format('woff2')`. Форматы `.eot`, `.ttf` и `.svg` шрифтов в современном вебе — мёртвый груз.",
        "Всегда прописывайте `font-display: swap;` внутри каждого блока `@font-face` — это гарантирует, что пользователь увидит текст мгновенно даже при медленном 3G-интернете.",
        "Используйте функцию `clamp(1.5rem, 3vw + 1rem, 3rem)` для заголовков лендингов — это исключает необходимость писать 5 медиа-запросов под разные разрешения экранов."
      ],
      "commonMistakes": [
        {
          "bad": "/* Жесткий line-height в пикселях на родительском блоке */\nbody { font-size: 16px; line-height: 22px; }\nh1 { font-size: 40px; /* line-height унаследуется 22px, строки склеятся! */ }",
          "good": "body { font-size: 1rem; line-height: 1.5; }\nh1 { font-size: 2.5rem; line-height: 1.2; }",
          "reason": "Пиксельный line-height наследуется дочерними заголовками без изменений, в результате чего крупный текст слипается в одну кашу."
        },
        {
          "bad": "/* Загрузка шрифта без font-display */\n@font-face {\n  font-family: 'Custom';\n  src: url('/font.woff2');\n  /* font-display отсутствует -> браузер скрывает текст на 3 сек! */\n}",
          "good": "@font-face {\n  font-family: 'Custom';\n  src: url('/font.woff2') format('woff2');\n  font-display: swap;\n}",
          "reason": "Без font-display: swap браузер применяет стратегию block, скрывая текст до завершения загрузки шрифта (эффект невидимого текста FOIT)."
        },
        {
          "bad": "/* Жесткие пиксели для размеров шрифтов */\np { font-size: 14px; }",
          "good": "p { font-size: 0.875rem; }",
          "reason": "Использование px игнорирует настройки масштабирования шрифта в браузере пользователя, нарушая требования доступности (a11y)."
        }
      ],
      "keyTakeaways": [
        "Font Stack строится от кастомного шрифта через системные (-apple-system, Segoe UI) к generic-классу (sans-serif, monospace).",
        "WOFF2 — единственный необходимый формат файлов шрифтов в современном вебе.",
        "`font-display: swap;` устраняет эффект невидимого текста (FOIT), показывая системный шрифт до загрузки кастомного.",
        "Вариативные шрифты (Variable Fonts) объединяют все начертания и жирности в один файл весом ~40 КБ.",
        "Функция `clamp(min, preferred, max)` обеспечивает плавное адаптивное масштабирование типографики."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"typography-sandbox\">\n  <span class=\"badge-tag\">Frontend Typography</span>\n  <h1 class=\"clamp-heading\">Современный CSS и Веб-шрифты</h1>\n  <p class=\"body-text\">\n    Типографика — это искусство оформления печатного и цифрового текста. \n    Используйте относительные единицы rem, выверенный line-height и адаптивный clamp.\n  </p>\n</div>",
      "initialCss": ".typography-sandbox {\n  padding: 20px;\n  background: #0a0e13;\n  color: #e6edf3;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n}\n.badge-tag {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #2dff8a;\n  font-weight: 700;\n}\n.clamp-heading {\n  font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);\n  line-height: 1.15;\n  letter-spacing: -0.02em;\n  color: #29e7ff;\n  margin: 12px 0;\n}\n.body-text {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #8b949e;\n  max-width: 60ch; /* Оптимальная длина строки для чтения */\n}",
      "initialJs": "console.log('Песочница типографики активна');",
      "instructions": "Практика с типографикой:\n1. Измените параметры функции clamp(1.2rem, 5vw, 3rem) у заголовка\n2. Добавьте свойство letter-spacing: 0.15em к бейджу\n3. Задайте тексту max-width: 45ch и проверьте читаемость"
    },
    "task": {
      "title": "Проектирование масштабируемой системы адаптивной типографики",
      "scenario": "Вам поручено разработать типографический фундамент дизайн-системы платформы: подключить кастомный шрифт через @font-face с WOFF2 и защитой font-display: swap, настроить адаптивный размер главного заголовка через clamp(), задать относительные line-height и оформить акцентные бейджи с трекингом letter-spacing.",
      "criteria": [
        "Объявлено правило @font-face с форматом woff2 и свойством font-display: swap",
        "Главный стек шрифтов body использует rem и безразмерный line-height: 1.5",
        "Заголовок h1 использует clamp() для адаптивного размера без медиа-запросов",
        "Крупный заголовок имеет отрицательный letter-spacing (-0.02em)",
        "Бейдж с text-transform: uppercase имеет увеличенный letter-spacing (0.08em)",
        "Длина строки текстового абзаца ограничена max-width в символьных единицах ch"
      ],
      "starterCode": {
        "css": "/* Разработайте типографическую дизайн-систему */\nbody {\n}\nh1 {\n}\n.badge {\n}"
      },
      "hints": [
        "В @font-face используйте src: url(...) format('woff2'); font-display: swap;",
        "Используйте font-size: clamp(1.75rem, 3vw + 1rem, 3rem);",
        "Ограничьте ширину текста: max-width: 65ch;"
      ],
      "solution": {
        "css": "@font-face {\n  font-family: 'PlatformSans';\n  src: url('/fonts/platform-sans.woff2') format('woff2');\n  font-weight: 400 800;\n  font-style: normal;\n  font-display: swap;\n}\n\nbody {\n  font-family: 'PlatformSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #e6edf3;\n  background: #0a0e13;\n}\n\nh1 {\n  font-size: clamp(1.75rem, 3vw + 1rem, 3rem);\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  font-weight: 800;\n  color: #29e7ff;\n}\n\np {\n  font-size: 1rem;\n  line-height: 1.6;\n  max-width: 65ch;\n  color: #8b949e;\n}\n\n.badge {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 700;\n  color: #2dff8a;\n}",
        "explanation": "Система использует формат WOFF2 с font-display: swap, адаптивную функцию clamp(), относительный line-height, безопасный font-stack и оптимальную ширину строки 65ch."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css6-q1",
          "question": "Почему в современном `@font-face` достаточно одного формата `woff2`?",
          "options": [
            "Только он допускает встраивание кириллических глифов без дополнительной лицензии",
            "Он поддерживается всеми актуальными браузерами и сжат заметно лучше остальных форматов",
            "Остальные форматы запрещены к использованию спецификацией CSS Fonts Level 4",
            "Только он позволяет браузеру догружать начертания по частям, экономя трафик"
          ],
          "correctIndex": 1,
          "explanation": "WOFF2 использует сжатие Brotli и весит примерно на треть меньше, чем WOFF, при полной поддержке во всех браузерах, которые вообще встречаются в продакшене. Перечислять рядом `ttf`, `eot` и `svg` — наследие эпохи Internet Explorer: эти файлы только раздувают репозиторий. Загрузка по частям — это отдельный механизм `unicode-range`, который работает с любым форматом."
        },
        {
          "id": "css6-q2",
          "question": "Чем `font-display: swap` отличается от поведения по умолчанию?",
          "options": [
            "По умолчанию браузер прячет текст на время загрузки шрифта, а `swap` сразу показывает запасной",
            "По умолчанию браузер показывает запасной шрифт, а `swap` дожидается загрузки основного",
            "`swap` заставляет браузер загружать файл шрифта раньше всех остальных ресурсов страницы",
            "`swap` разрешает подмену шрифта только при соединении медленнее, чем 3G"
          ],
          "correctIndex": 0,
          "explanation": "Значение по умолчанию в большинстве браузеров ведёт себя как `block`: текст остаётся невидимым примерно три секунды, пока грузится файл — это и есть эффект невидимого текста. `swap` сокращает окно блокировки почти до нуля: человек сразу читает текст системным шрифтом, а затем начертание подменяется. Расплата — заметный скачок вёрстки, который смягчают подбором метрик запасного шрифта."
        },
        {
          "id": "css6-q3",
          "question": "В чём практическая выгода вариативного шрифта с точки зрения производительности?",
          "options": [
            "Браузер кеширует его бессрочно, игнорируя заголовки управления кешем сервера",
            "Он отрисовывается на видеокарте и снижает нагрузку на процессор при прокрутке",
            "Один файл заменяет набор отдельных начертаний, убирая лишние сетевые запросы",
            "Он не требует блока `@font-face` и подключается обычным тегом `<link>`"
          ],
          "correctIndex": 2,
          "explanation": "Обычный набор из светлого, обычного, полужирного и жирного начертаний плюс курсивы — это восемь отдельных файлов и восемь запросов. Вариативный шрифт хранит непрерывную ось насыщенности в одном файле порядка сорока килобайт, и любое промежуточное значение доступно без дозагрузки. Бонусом появляется возможность плавно анимировать насыщенность через `font-variation-settings`."
        },
        {
          "id": "css6-q4",
          "question": "Какой межстрочный интервал получит дочерний элемент и как это исправить?",
          "codeSnippet": ".parent { font-size: 16px; line-height: 24px; }\n.child  { font-size: 32px; }",
          "options": [
            "24px, но только в блочных элементах; в строчных интервал будет пересчитан заново",
            "48px — браузер пересчитывает интервал пропорционально размеру шрифта потомка",
            "32px — интервал автоматически приравнивается к размеру шрифта дочернего элемента",
            "24px — пиксельное значение наследуется как есть, и крупный текст начинает слипаться"
          ],
          "correctIndex": 3,
          "explanation": "Наследуется вычисленное значение, а 24px вычислены раз и навсегда: потомок с кеглем 32 пикселя получит те же 24 пикселя между строками, и строки наедут друг на друга. Безразмерная запись ведёт себя иначе — наследуется сам множитель, и каждый элемент умножает его на свой размер шрифта. Поэтому в проектах пишут `line-height: 1.5`, а не `line-height: 24px`."
        },
        {
          "id": "css6-q5",
          "question": "Почему в `font-size: clamp(1.5rem, 3vw + 1rem, 3rem)` к `vw` добавляют слагаемое в `rem`?",
          "options": [
            "Чтобы значение оставалось кратным базовому кеглю и не давало дробных пикселей",
            "Чтобы браузер выбирал среднее значение, а не прижимался к одной из границ диапазона",
            "Чтобы избежать деления на ноль при нулевой ширине области просмотра",
            "Чтобы размер реагировал на масштабирование страницы: чистый `vw` при увеличении не меняется"
          ],
          "correctIndex": 3,
          "explanation": "Единицы `vw` привязаны к ширине окна, а не к настройкам пользователя: если человек увеличит масштаб или базовый кегль в браузере, текст на чистом `vw` останется прежним. Это прямое нарушение критерия WCAG о двукратном масштабировании. Слагаемое в `rem` возвращает зависимость от пользовательских настроек, поэтому формулу и пишут в виде суммы, а не одним значением в `vw`."
        }
      ]
    }
  },
  {
    "id": "css-7",
    "moduleId": "css",
    "level": 7,
    "title": "Цвета и фоны в CSS",
    "subtitle": "RGB, HSL, революция OKLCH, градиенты, background-size, multiple backgrounds и color-scheme",
    "description": "Освойте профессиональную работу с цветом и фонами: современные цветовые пространства (RGB Color 4, HSL, перцептивно-равномерный OKLCH с поддержкой Wide Gamut P3), сложные линейные, радиальные и конические градиенты, градиентный текст и системную тёмную тему color-scheme: dark.",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "colors",
      "oklch",
      "hsl",
      "rgb",
      "gradients",
      "backgrounds",
      "color-scheme",
      "dark-mode"
    ],
    "theory": {
      "overview": "Цвет и фон — главные выразительные средства веб-дизайна, формирующие настроение, контрастность и визуальную глубину интерфейса.\n\nВ современном CSS произошла революция цветовых пространств: на смену классическим HEX и RGB пришел перцептивно-равномерный стандарт **OKLCH**, позволяющий отображать ультрасочные цвета широкого охвата Display P3 на современных OLED и Retina экранах. В этом уроке мы научимся строить палитры дизайн-систем на HSL и OKLCH, создавать сложные многослойные градиенты, градиентный текст и настраивать нативную тёмную тему через `color-scheme: dark`.",
      "sections": [
        {
          "title": "Цветовые пространства: HEX, RGB, HSL и революция OKLCH",
          "content": "Эволюция представления цвета в CSS:\n\n1. HEX и RGB (sRGB пространство):\n- Шестнадцатеричный формат: `#2dff8a` или `#0a0e13ee` (8 знаков, последние 2 — альфа-канал прозрачности).\n- Современный синтаксис CSS Color Module 4: `rgb(45 255 138 / 0.8)` (без запятых, прозрачность через слеш `/`).\n\n2. HSL (Hue, Saturation, Lightness):\n- `hsl(146 100% 59% / 0.9)` — интуитивно понятное пространство для разработчиков:\n  • `Hue` (Оттенок): угол на цветовом круге от 0° до 360° (0 = красный, 120 = зеленый, 240 = синий).\n  • `Saturation` (Насыщенность): от 0% (серый) до 100% (чистый цвет).\n  • `Lightness` (Светлота): от 0% (черный) до 50% (чистый оттенок) и 100% (белый).\n- Идеален для дизайн-систем: изменение одной переменной `--h: 210` мгновенно меняет весь акцентный цвет бренда!\n\n3. OKLCH — Революция в CSS (Стандарт 2024–2026 гг.):\n- Синтаксис: `oklch(0.85 0.22 142 / 0.9)` — `L` (Lightness: 0-1), `C` (Chroma: насыщенность), `H` (Hue: 0-360).\n- **Перцептивная равномерность (Perceptually Uniform)**: В HSL чистый жёлтый цвет кажется глазу в 3 раза ярче чистого синего при одинаковом `L: 50%`. В OKLCH одинаковая светлота `L: 0.7` воспринимается человеческим глазом абсолютно одинаково для любого оттенка!\n- **P3 Wide Color Gamut**: OKLCH умеет выводить сочные неоновые оттенки, недоступные в старом sRGB.",
          "image": {
            "src": "/images/lessons/css-colors-backgrounds.svg",
            "alt": "Цветовые пространства в CSS: RGB, HSL, OKLCH и градиенты",
            "caption": "OKLCH обеспечивает перцептивную равномерность и охват Display P3, HSL идеален для палитр, а color-scheme окрашивает нативные скроллбары"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Генерация палитры кнопок через CSS-переменные HSL */\n:root {\n  --primary-h: 146; /* Зеленый неоновый оттенок */\n  --primary-s: 100%;\n  --primary-l: 59%;\n  \n  --color-btn: hsl(var(--primary-h) var(--primary-s) var(--primary-l));\n  --color-btn-hover: hsl(var(--primary-h) var(--primary-s) calc(var(--primary-l) + 8%));\n  --color-btn-active: hsl(var(--primary-h) var(--primary-s) calc(var(--primary-l) - 10%));\n  \n  /* Сверхсочный неоновый акцент в пространстве OKLCH */\n  --neon-cyan: oklch(0.88 0.24 200);\n  --neon-pink: oklch(0.72 0.28 340);\n}",
            "title": "Построение палитры состояний через HSL и OKLCH",
            "explanation": "Математика HSL и OKLCH позволяет динамически вычислять цвета hover и active состояний простым сложением светлоты без ручного подбора HEX-кодов."
          }
        },
        {
          "title": "Градиенты: linear, radial, conic и градиентный текст",
          "content": "Градиенты в CSS являются генерируемыми изображениями (`<gradient>`), применяемыми в свойстве `background`:\n\n1. Линейный градиент (`linear-gradient`):\n- Направление: угол в градусах (`135deg`, `45deg`) или ключевые слова (`to right`, `to bottom right`).\n- Точки остановки (Color Stops): `linear-gradient(90deg, #2dff8a 0%, #29e7ff 50%, #ff2bd6 100%)`.\n\n2. Радиальный градиент (`radial-gradient`):\n- Распространяется кругом или эллипсом из центра: `radial-gradient(circle at center, #29e7ff 0%, transparent 70%)`.\n- Незаменим для создания эффекта неонового свечения (Glow Effect) вокруг кнопок и карточек.\n\n3. Конический градиент (`conic-gradient`):\n- Цвета вращаются вокруг центральной точки (как стрелка часов).\n- Идеален для круговых диаграмм (Pie Charts), неоновых анимированных рамок и радужных индикаторов загрузки.\n\n4. Эффект градиентного текста (Gradient Text):\nСвязка свойств: `background: linear-gradient(90deg, #2dff8a, #29e7ff); -webkit-background-clip: text; color: transparent;` окрашивает сам текст в цвета градиента!",
          "codeExample": {
            "language": "css",
            "code": "/* 1. Эффектный градиентный заголовок */\n.neon-gradient-title {\n  font-size: 2.5rem;\n  font-weight: 800;\n  background: linear-gradient(135deg, #2dff8a 0%, #29e7ff 50%, #ff2bd6 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent; /* Делаем текст прозрачным, открывая градиент */\n}\n\n/* 2. Конический градиент для неонового бейджа */\n.radar-badge {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: conic-gradient(from 0deg, #2dff8a, #29e7ff, transparent 80%);\n}",
            "title": "Градиентный текст и конический градиент conic-gradient",
            "explanation": "background-clip: text обрезает градиентный фон строго по контуру букв, создавая стильный неоновый заголовок."
          }
        },
        {
          "title": "Управление фоновыми изображениями: cover, contain, multiple backgrounds",
          "content": "Свойства семейства `background` определяют геометрию отрисовки фонов:\n\n1. `background-size`:\n- `cover` — масштабирует изображение так, чтобы оно ПОЛНОСТЬЮ закрыло всю площадь контейнера (лишнее обрезается). Идеально для фоновых баннеров.\n- `contain` — масштабирует изображение так, чтобы оно ПОЛНОСТЬЮ поместилось внутри контейнера без обрезки.\n\n2. `background-position`:\nВыравнивание фона: `center`, `top right`, `50% 20%`.\n\n3. Множественные фоны (Multiple Backgrounds):\nСвойство `background` принимает список слоев через запятую. Первый слой рисуется ПОВЕРХ остальных!\n`background: radial-gradient(...) , url('/grid.svg') , #0a0e13;`.\n\n4. `background-attachment: fixed` — фиксирует фон относительно экрана при скролле (параллакс-эффект).",
          "codeExample": {
            "language": "css",
            "code": "/* Многослойный киберпанк-фон карточки */\n.cyber-card {\n  background:\n    /* Слой 1: Радиальное неоновое пятно в правом верхнем углу */\n    radial-gradient(circle at top right, rgba(41, 231, 255, 0.2) 0%, transparent 60%),\n    /* Слой 2: Векторная сетка */\n    url('/images/cyber-grid.svg') repeat center / 40px 40px,\n    /* Слой 3: Базовый цвет подложки */\n    #0a0e13;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n  padding: 24px;\n}",
            "title": "Комбинация множественных фонов: градиент + сетка + цвет",
            "explanation": "Три слоя фона накладываются друг на друга, создавая глубокую трехмерную киберпанк-текстуру."
          }
        },
        {
          "title": "Тёмная тема и системный режим: color-scheme и prefers-color-scheme",
          "content": "Управление темами оформления в современном CSS:\n\n1. Свойство `color-scheme: dark;`:\nСообщает браузеру, что страница оптимизирована под тёмный режим. Браузер АВТОМАТИЧЕСКИ окрашивает нативные системные скроллбары, форму ввода текста, чекбоксы и селекты в темные тона без сложных кастомных стилей!\n\n2. Медиа-запрос `@media (prefers-color-scheme: dark)`:\nОпределяет системную тему операционной системы пользователя (Windows / macOS / iOS / Android) и автоматически применяет темные CSS-переменные.\n\n3. Переключение тем через `data-theme=\"dark\"`:\nСтандартный подход в SPA: класс или атрибут на теге `<html>`, управляемый через JS, с сохранением в `localStorage`.",
          "codeExample": {
            "language": "css",
            "code": "/* Базовая конфигурация цветовой схемы */\n:root {\n  color-scheme: dark light; /* Поддержка обеих тем */\n  \n  /* Светлая тема по умолчанию */\n  --bg: #ffffff;\n  --fg: #0a0e13;\n  --card-bg: #f6f8fa;\n}\n\n/* Автоматическая адаптация под темную тему ОС */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #0a0e13;\n    --fg: #e6edf3;\n    --card-bg: #161b22;\n  }\n}\n\n/* Принудительное переключение через data-theme */\n[data-theme=\"dark\"] {\n  --bg: #0a0e13;\n  --fg: #e6edf3;\n  --card-bg: #161b22;\n}",
            "title": "Настройка системной и принудительной тёмной темы",
            "explanation": "color-scheme окрашивает системные контролы, а prefers-color-scheme синхронизирует палитру с операционной системой."
          }
        }
      ],
      "seniorTips": [
        "Используйте цветовое пространство `oklch()` или `hsl()` в CSS-переменных — это позволяет генерировать палитры состояний (:hover, :active, :disabled) простым изменением светлоты `L` без ручного подбора десятков HEX-кодов.",
        "Добавляйте `color-scheme: dark;` в `:root` при создании тёмных тем — это автоматически делает нативные системные скроллбары браузера и элементы ввода тёмными.",
        "Для создания градиентного текста используйте связку: `background: linear-gradient(...); -webkit-background-clip: text; color: transparent;`.",
        "При установке фонового изображения всегда задавайте фоновый цвет `background-color: #0a0e13;` схожего оттенка, чтобы текст оставался читаемым до загрузки тяжелой картинки."
      ],
      "commonMistakes": [
        {
          "bad": "/* Использование чистого #000000 для темного фона и #ffffff для текста */\nbody { background: #000000; color: #ffffff; }",
          "good": "body { background: #0a0e13; color: #e6edf3; }",
          "reason": "Максимальный контраст 100% черного и 100% белого вызывает сильное зрительное утомление (эффект гало). Профессиональный UI использует мягкие темные оттенки."
        },
        {
          "bad": "/* Градиентный текст без прозрачного цвета */\n.title { background: linear-gradient(90deg, red, blue); -webkit-background-clip: text; }",
          "good": ".title { background: linear-gradient(90deg, red, blue); -webkit-background-clip: text; color: transparent; }",
          "reason": "Без color: transparent собственный сплошной цвет текста перекрывает вырезанный градиентный фон."
        },
        {
          "bad": "/* Забыли background-size: cover */\n.banner { background: url('/bg.jpg') no-repeat; }",
          "good": ".banner { background: #0a0e13 url('/bg.jpg') no-repeat center / cover; }",
          "reason": "Без cover картинка не растянется на всю площадь контейнера на больших экранах, оставив пустые поля."
        }
      ],
      "keyTakeaways": [
        "OKLCH — самое передовое перцептивно-равномерное цветовое пространство с охватом Display P3.",
        "HSL идеален для алгоритмической генерации палитр дизайн-систем через CSS-переменные.",
        "Градиентный текст создается через `-webkit-background-clip: text; color: transparent;`.",
        "Множественные фоны позволяют комбинировать градиентные пятна, векторные сетки и базовые цвета.",
        "`color-scheme: dark` автоматически переключает оформление нативных скроллбаров и контролов формы в тёмный цвет."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"color-playground\">\n  <h1 class=\"grad-text\">Неоновый Киберпанк</h1>\n  <div class=\"glow-card\">\n    <p>Карточка с OKLCH цветами и радиальным свечением.</p>\n    <button class=\"glow-btn\">OKLCH Action</button>\n  </div>\n</div>",
      "initialCss": ".color-playground {\n  padding: 24px;\n  background: #0a0e13;\n  color: #e6edf3;\n  font-family: monospace;\n  color-scheme: dark;\n}\n.grad-text {\n  font-size: 2rem;\n  font-weight: 800;\n  background: linear-gradient(135deg, oklch(0.85 0.22 142) 0%, oklch(0.88 0.24 200) 100%);\n  -webkit-background-clip: text;\n  color: transparent;\n  margin-bottom: 16px;\n}\n.glow-card {\n  background: radial-gradient(circle at top right, rgba(45, 255, 138, 0.15), transparent 70%), #161b22;\n  border: 1px solid #30363d;\n  border-radius: 10px;\n  padding: 20px;\n}\n.glow-btn {\n  background: oklch(0.85 0.22 142);\n  color: #0a0e13;\n  font-weight: bold;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  box-shadow: 0 0 15px rgba(45, 255, 138, 0.4);\n}",
      "initialJs": "console.log('Песочница цветов активна');",
      "instructions": "Практика с цветом и фонами:\n1. Измените угол линейного градиента текста на 45deg\n2. Попробуйте настроить конический градиент для обводки карточки\n3. Поэкспериментируйте со значениями светлоты L и хромы C в oklch()"
    },
    "task": {
      "title": "Создание неоновой киберпанк-карточки с OKLCH, градиентным текстом и свечением",
      "scenario": "Вам необходимо сверстать карточку тарифа для Web3/Cyberpunk платформы: заголовок должен быть оформлен градиентным текстом, фон карточки должен комбинировать радиальное неоновое свечение и темную подложку, акцентная кнопка должна использовать цвет в пространстве OKLCH, а в корне должна быть включена поддержка color-scheme: dark.",
      "criteria": [
        "Задано свойство color-scheme: dark на корневом элементе",
        "Заголовок карточки оформлен градиентным текстом через background-clip: text и color: transparent",
        "Фон карточки использует многослойный фон с радиальным градиентом radial-gradient",
        "Акцентные элементы используют цветовое пространство oklch()",
        "Кнопка имеет неоновое свечение через box-shadow с альфа-каналом",
        "Использованы переменные дизайн-системы для управления цветом"
      ],
      "starterCode": {
        "css": "/* Разработайте стили неоновой карточки */\n.cyber-pricing-card {\n}\n.card-title {\n}\n.btn-buy {\n}"
      },
      "hints": [
        "Для градиентного текста: background: linear-gradient(...); -webkit-background-clip: text; color: transparent;",
        "Используйте background: radial-gradient(circle at top right, ...), #161b22;",
        "Задайте цвет кнопки: background: oklch(0.85 0.22 142);"
      ],
      "solution": {
        "css": ":root {\n  color-scheme: dark;\n  --neon-green: oklch(0.85 0.22 142);\n  --neon-cyan: oklch(0.88 0.24 200);\n  --bg-dark: #0a0e13;\n}\n\n.cyber-pricing-card {\n  width: 320px;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid rgba(45, 255, 138, 0.3);\n  background:\n    radial-gradient(circle at top right, rgba(41, 231, 255, 0.2) 0%, transparent 65%),\n    #161b22;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);\n  color: #e6edf3;\n}\n\n.card-title {\n  font-size: 1.75rem;\n  font-weight: 800;\n  background: linear-gradient(135deg, var(--neon-green), var(--neon-cyan));\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  margin-bottom: 12px;\n}\n\n.btn-buy {\n  width: 100%;\n  padding: 10px;\n  background: var(--neon-green);\n  color: #0a0e13;\n  font-weight: 800;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  box-shadow: 0 0 20px rgba(45, 255, 138, 0.35);\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n\n.btn-buy:hover {\n  box-shadow: 0 0 30px rgba(45, 255, 138, 0.6);\n  transform: translateY(-2px);\n}",
        "explanation": "Стилистика использует современный стек CSS: перцептивные OKLCH переменные, двухслойный фон с радиальным свечением, градиентный текст и неоновые тени."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css7-q1",
          "question": "Цвета `hsl(60 100% 50%)` и `hsl(240 100% 50%)` записаны с одинаковой светлотой. Что покажет сравнение на экране?",
          "options": [
            "Оба воспринимаются одинаково светлыми: параметр L в HSL перцептивно точен",
            "Синий выглядит светлее жёлтого из-за большей длины волны в видимом спектре",
            "Жёлтый выглядит заметно светлее синего — L в HSL не отражает восприятие глазом",
            "Разница проявится только на мониторах с расширенным охватом Display P3"
          ],
          "correctIndex": 2,
          "explanation": "Число 50% в HSL — чисто геометрическая середина цветового круга, а не характеристика яркости для человеческого глаза. Жёлтый на этой отметке кажется почти белым, синий — почти чёрным, поэтому палитра, построенная перебором оттенков при фиксированной L, выглядит рвано. OKLCH создан именно как перцептивно-равномерное пространство: одинаковая светлота там действительно читается одинаково, и это позволяет генерировать состояния кнопок простым сдвигом одного параметра."
        },
        {
          "id": "css7-q2",
          "question": "Градиентный текст собран из `background: linear-gradient(...)` и `background-clip: text`, но виден только сплошной цвет. Чего не хватает?",
          "options": [
            "`display: inline-block` — обрезка по тексту работает лишь на строчно-блочных элементах",
            "`color: transparent` — собственный цвет глифов перекрывает вырезанный градиент",
            "`background-size: cover` — без явного размера градиент не покрывает глифы целиком",
            "`mix-blend-mode: multiply` — без режима наложения фон остаётся позади текста"
          ],
          "correctIndex": 1,
          "explanation": "`background-clip: text` действительно обрезает фон по форме букв, но сами буквы по-прежнему залиты своим цветом и полностью закрывают результат. Поэтому приём всегда состоит из трёх частей: градиент в фоне, обрезка по тексту и `color: transparent`, открывающий вид на фон. В проектах рядом обычно ставят и префиксную запись `-webkit-background-clip` для совместимости."
        },
        {
          "id": "css7-q3",
          "question": "Тёмная тема применена, но системная полоса прокрутки и календарь в поле `type=\"date\"` остались светлыми. Что добавить?",
          "options": [
            "`filter: invert(1)` на `:root` — инвертирует нативные контролы вместе со страницей",
            "`color-scheme: dark` в `:root` — сообщает браузеру, что оформление страницы тёмное",
            "`accent-color: dark` — переключает палитру нативных элементов управления формы",
            "`forced-colors: active` — включает режим принудительных цветов операционной системы"
          ],
          "correctIndex": 1,
          "explanation": "Полоса прокрутки, календарь, выпадающий список и подсветка автозаполнения рисуются не вашим CSS, а самим браузером, и он выбирает их палитру по объявленному `color-scheme`. Одна строка в `:root` решает вопрос целиком. `accent-color` принимает конкретный цвет и влияет только на чекбоксы, радиокнопки и ползунки, `filter: invert` испортит изображения, а `forced-colors` — это медиа-фича режима высокой контрастности, а не переключатель."
        },
        {
          "id": "css7-q4",
          "question": "Нужен круговой индикатор прогресса без SVG и растровых картинок. Какой градиент подойдёт?",
          "options": [
            "`linear-gradient` с поворотом на 360 градусов и жёсткими цветовыми остановками",
            "`radial-gradient` — цвет расходится от центра к краям вдоль радиуса окружности",
            "`conic-gradient` — цвет меняется по кругу вокруг центральной точки элемента",
            "`repeating-linear-gradient` — повторяющиеся полосы сворачиваются в кольцо"
          ],
          "correctIndex": 2,
          "explanation": "Конический градиент меняет цвет при обходе вокруг центра, поэтому одной строкой даёт круговую диаграмму, индикатор заполнения или вращающуюся рамку: достаточно поставить резкую границу на нужном проценте. Радиальный градиент меняет цвет по мере удаления от центра и даёт свечение, а линейный идёт вдоль прямой, и поворот оси на этом ничего не меняет."
        },
        {
          "id": "css7-q5",
          "question": "Какой слой окажется сверху в этой записи и зачем так пишут?",
          "codeSnippet": "background:\n  linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),\n  url(\"photo.jpg\");",
          "options": [
            "Градиент: первый слой в списке ближе к зрителю и затемняет фотографию",
            "Фотография: последний слой в списке рисуется поверх всех предыдущих",
            "Слои смешиваются поровну, и порядок перечисления ни на что не влияет",
            "Градиент окажется снизу, но благодаря прозрачности будет просвечивать сквозь фото"
          ],
          "correctIndex": 0,
          "explanation": "В множественных фонах слои перечисляются сверху вниз: первый в списке ближе к зрителю, последний лежит в самом низу. Здесь полупрозрачная чёрная заливка ложится поверх снимка и приглушает его — стандартный приём, чтобы белый текст оставался читаемым на любой фотографии, без дополнительного элемента-подложки в разметке."
        }
      ]
    }
  },
  {
    "id": "css-8",
    "moduleId": "css",
    "level": 8,
    "title": "Оформление рамок и теней",
    "subtitle": "border, border-radius, outline vs border, box-shadow, drop-shadow, неоновые свечения и Glassmorphism",
    "description": "Освойте стилизацию границ, теней и глубины в CSS: свойства border и логические границы border-inline, сложные эллиптические скругления border-radius, доступный фокус :focus-visible и outline-offset, многослойные тени (Layered Elevation), контурные тени filter: drop-shadow() и эффект матового стекла (Glassmorphism).",
    "estimatedMinutes": 60,
    "difficulty": "beginner",
    "tags": [
      "borders",
      "shadows",
      "box-shadow",
      "drop-shadow",
      "border-radius",
      "glassmorphism",
      "outline",
      "focus-visible"
    ],
    "theory": {
      "overview": "Рамки, скругления и тени создают пространственную иерархию (Elevation), визуальный объем и ощущение материальности интерфейса.\n\nВ современном веб-дизайне плоские однослойные тени уступили место реалистичным многослойным теням (Layered Shadows), неоновым киберпанк-свечениям и эффекту матового стекла (**Glassmorphism**). В этом уроке мы изучим геометрию `border-radius`, разберём принципиальную разницу между `box-shadow` и `filter: drop-shadow()`, настроим доступный фокус через `:focus-visible` и создадим интерфейс в стиле матового стекла с помощью `backdrop-filter`.",
      "sections": [
        {
          "title": "Рамки и скругления: border, border-radius и сложные формы",
          "content": "Свойства оформления границ элементов:\n\n1. Семейство `border`:\n- Сокращение: `border: 1px solid #30363d;` (`border-width`, `border-style`, `border-color`).\n- Стили границ: `solid`, `dashed`, `dotted`, `double`.\n- Логические свойства (Logical Properties): `border-inline-start`, `border-block-end` (адаптируются под направление письма RTL/LTR).\n\n2. Геометрия `border-radius`:\n- 1 значение: `border-radius: 12px;` (скругляет все 4 угла одинаково).\n- 2 значения: `border-radius: 12px 24px;` (верх-лево/низ-право и верх-право/низ-лево).\n- 4 значения: `border-radius: 10px 20px 30px 40px;` (по часовой стрелке от верхнего левого угла).\n- `border-radius: 50%;` — идеальный круг (если у элемента равны `width` и `height`).\n- `border-radius: 9999px;` — таблетка (Pill shape для кнопок и тегов).\n\n3. Эллиптические скругления через слеш `/`:\n`border-radius: 50px / 25px;` — задает раздельные радиусы скругления по горизонтальной оси X и вертикальной оси Y! Позволяет создавать органические природные формы, капли и асимметричные кляксы.",
          "image": {
            "src": "/images/lessons/css-borders-shadows.svg",
            "alt": "CSS Рамки, Тени и Glassmorphism: box-shadow, drop-shadow, border-radius",
            "caption": "Многослойные тени создают реалистичную глубину, drop-shadow повторяет прозрачный контур, а backdrop-filter создает эффект стекла"
          },
          "codeExample": {
            "language": "css",
            "code": "/* 1. Кнопка-таблетка (Pill button) */\n.btn-pill {\n  border-radius: 9999px;\n  padding: 10px 24px;\n  border: 1px solid #2dff8a;\n  background: #161b22;\n  color: #2dff8a;\n}\n\n/* 2. Органическая форма бейджа с эллиптическими углами */\n.organic-badge {\n  border-radius: 40px 15px 35px 15px / 15px 35px 15px 40px;\n  background: linear-gradient(135deg, #2dff8a, #29e7ff);\n  color: #0a0e13;\n  padding: 8px 16px;\n  font-weight: bold;\n}",
            "title": "Скругление border-radius: таблетки и эллиптические формы",
            "explanation": "border-radius: 9999px гарантирует круглые бока при любой ширине. Синтаксис со слешем / создает асимметричные капли."
          }
        },
        {
          "title": "Фокус и доступность: outline vs border и псевдокласс :focus-visible",
          "content": "Управление рамкой фокуса элемента:\n\n1. `outline` vs `border`:\n- `border` участвует в блочной модели Box Model (увеличивает физический размер элемента и может вызывать Reflow).\n- `outline` рисуется поверх элемента, НЕ занимает физического места в геометрии и поддерживает свойство `outline-offset: 4px;` (отступ рамки от границ элемента).\n\n2. Антипаттерн `outline: none`:\nУдаление `outline: none` без предоставления альтернативного стиля — грубейшее нарушение доступности (WCAG)! Люди с ограниченной моторикой, пользующиеся клавишей `Tab`, теряют фокус и не видят, на каком элементе находятся.\n\n3. Современный псевдокласс `:focus-visible`:\n- Отображает рамку фокуса ТОЛЬКО тогда, когда пользователь перемещается с клавиатуры (клавишами `Tab` или стрелками).\n- При клике мышью рамка НЕ появляется, сохраняя идеальную визуальную чистоту интерфейса!",
          "codeExample": {
            "language": "css",
            "code": "/* Идеальная доступная настройка фокуса в дизайн-системе */\nbutton, a, input {\n  /* Скрываем рамку при обычном клике мышью */\n  outline: none;\n}\n\n/* Показываем неоновый фокус ТОЛЬКО при навигации с клавиатуры */\nbutton:focus-visible,\na:focus-visible,\ninput:focus-visible {\n  outline: 2px solid #2dff8a;\n  outline-offset: 4px; /* Отступ рамки от кнопки */\n  box-shadow: 0 0 12px rgba(45, 255, 138, 0.5);\n  border-radius: 4px;\n}",
            "title": "Настройка доступного фокуса через :focus-visible и outline-offset",
            "explanation": ":focus-visible сохраняет красивый вид для пользователей мыши и гарантирует четкую неоновую рамку с отступом для навигации с клавиатуры."
          }
        },
        {
          "title": "Всё о тенях: box-shadow, inset и многослойные тени (Layered Elevation)",
          "content": "Синтаксис свойства `box-shadow`:\n`box-shadow: [inset] x-offset y-offset blur-radius spread-radius color;`\n\n1. Параметры тени:\n- `x-offset`, `y-offset` — смещение тени по горизонтали и вертикали.\n- `blur-radius` — степень размытия тени (0 = жесткая тень).\n- `spread-radius` — увеличение или сжатие размера тени.\n- `inset` — переключает внешнюю тень на внутреннюю (эффект вдавленности в поля ввода).\n\n2. Секрет профессионального дизайна: Многослойные тени (Layered Elevation):\nВ реальном мире свет рассеивается мягко. Одна черная тень `0 10px 20px black` выглядит грязной и плоской. Профессиональный UI комбинирует 2–3 полупрозрачных слоя:\n`box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.2);`.\n\n3. Неоновое киберпанк-свечение (Glow):\nТень с нулевым смещением (`x=0, y=0`), большим радиусом `blur: 25px` и цветом в пространстве OKLCH создает эффект яркого неонового ореола!",
          "codeExample": {
            "language": "css",
            "code": "/* 1. Многослойная парящая карточка (Layered Shadow) */\n.elevated-card {\n  background: #161b22;\n  border-radius: 12px;\n  box-shadow:\n    0 2px 4px rgba(0, 0, 0, 0.2),\n    0 8px 16px rgba(0, 0, 0, 0.3),\n    0 24px 48px rgba(0, 0, 0, 0.4);\n}\n\n/* 2. Неоновая киберпанк-кнопка со свечением */\n.cyber-glow-btn {\n  background: #2dff8a;\n  color: #0a0e13;\n  border: none;\n  box-shadow:\n    0 0 10px oklch(0.85 0.22 142 / 0.8),\n    0 0 30px oklch(0.85 0.22 142 / 0.4);\n}",
            "title": "Многослойная тень карточки и неоновое свечение кнопки",
            "explanation": "Многослойная тень elevated-card создает ощущение физического объема. cyber-glow-btn использует двойной ореол свечения."
          }
        },
        {
          "title": "Контурная тень filter: drop-shadow() и матовое стекло Glassmorphism",
          "content": "Разница между `box-shadow` и `filter: drop-shadow()`:\n\n1. `box-shadow`:\n- Всегда отбрасывает строго прямоугольную тень коробки контейнера (Box Model).\n- Если у вас есть SVG-иконка, прозрачный PNG или стрелочка тултипа `::after`, `box-shadow` проигнорирует прозрачность и нарисует сплошной квадрат!\n\n2. `filter: drop-shadow(x y blur color)`:\n- Тень отрисовывается на GPU по реальному альфа-каналу пикселей! Она ТОЧНО обтекает сложную форму SVG-иконки, прозрачный логотип и треугольник тултипа.\n\n3. Эффект матового стекла (**Glassmorphism**):\nСоздает иллюзию полупрозрачного стекла, сквозь которое размывается фоновый контент страницы:\n- `background: rgba(22, 27, 34, 0.75);` (полупрозрачная подложка)\n- `backdrop-filter: blur(16px) saturate(180%);` (размытие того, что ПОД элементом!)\n- `border: 1px solid rgba(255, 255, 255, 0.1);` (тонкая светящаяся стеклянная грань)",
          "codeExample": {
            "language": "css",
            "code": "/* Тултип с идеальной контурной тенью через drop-shadow */\n.tooltip-bubble {\n  position: relative;\n  background: #161b22;\n  border-radius: 8px;\n  padding: 12px 16px;\n  /* drop-shadow обтекает и саму плашку, и треугольную стрелочку! */\n  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5));\n}\n.tooltip-bubble::after {\n  content: '';\n  position: absolute;\n  bottom: -8px;\n  left: 24px;\n  border-width: 8px 8px 0;\n  border-style: solid;\n  border-color: #161b22 transparent;\n}\n\n/* Модальное окно в стиле Glassmorphism */\n.glass-modal {\n  background: rgba(10, 14, 19, 0.7);\n  backdrop-filter: blur(20px) saturate(180%);\n  border: 1px solid rgba(45, 255, 138, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);\n}",
            "title": "Контурная тень drop-shadow на тултипе и Glassmorphism",
            "explanation": "drop-shadow отбрасывает тень вокруг стрелочки ::after. backdrop-filter: blur(20px) размывает фон под модальным окном glass-modal."
          }
        }
      ],
      "seniorTips": [
        "Всегда используйте многослойные тени (Layered Shadows) из 2–3 слоев для создания реалистичной глубины и воздушности карточек.",
        "Используйте `filter: drop-shadow()` вместо `box-shadow` для тултипов с треугольными стрелочками и SVG-иконок с прозрачностью.",
        "Никогда не пишите `outline: none` без предоставления альтернативного `:focus-visible` стиля для доступности.",
        "Для эффекта Glassmorphism обязательно добавляйте тонкую полупрозрачную границу `border: 1px solid rgba(255, 255, 255, 0.1)` — это придает стеклу четкие физические грани."
      ],
      "commonMistakes": [
        {
          "bad": "/* box-shadow на тултипе со стрелочкой */\n.tooltip { box-shadow: 0 4px 12px black; }\n.tooltip::after { /* Стрелочка отбросит квадратную тень на сам тултип! */ }",
          "good": ".tooltip { filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); }",
          "reason": "box-shadow рисует тень только для прямоугольника, игнорируя псевдоэлемент стрелочки. filter: drop-shadow обтекает всю фигуру целиком."
        },
        {
          "bad": "/* Грубая жесткая черная тень */\n.card { box-shadow: 0 10px 20px #000000; }",
          "good": ".card { box-shadow: 0 4px 6px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.25); }",
          "reason": "Однослойная черная тень выглядит грязно и неестественно. Многослойная полупрозрачная тень создает чистый эффект парения."
        },
        {
          "bad": "/* Отключение outline без замены */\nbutton:focus { outline: none; }",
          "good": "button:focus-visible { outline: 2px solid #2dff8a; outline-offset: 4px; }",
          "reason": "Полное отключение outline делает интерфейс невозможным для управления с клавиатуры, нарушая стандарты доступности WCAG."
        }
      ],
      "keyTakeaways": [
        "`border-radius: 9999px` создает форму таблетки, а синтаксис со слешем `/` — эллиптические органические формы.",
        "`outline` не занимает места в Box Model, а `:focus-visible` показывает рамку только при навигации с клавиатуры.",
        "Многослойные тени (Layered Elevation) из 2–3 слоев обеспечивают реалистичный объем и воздушность.",
        "`filter: drop-shadow()` повторяет контур прозрачных PNG, SVG-иконок и стрелочек тултипов.",
        "Glassmorphism строится на триаде: полупрозрачный фон, `backdrop-filter: blur()` и светящаяся граница `border`."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"shadow-playground\">\n  <div class=\"glass-card\">\n    <h3>Glassmorphism Card</h3>\n    <p>Матовое стекло с backdrop-filter: blur(12px).</p>\n    <button class=\"neon-btn\">Focus Me (Tab)</button>\n  </div>\n</div>",
      "initialCss": ".shadow-playground {\n  padding: 30px;\n  background: radial-gradient(circle at top left, #29e7ff22, transparent), #0a0e13;\n  min-height: 200px;\n  font-family: monospace;\n}\n.glass-card {\n  background: rgba(22, 27, 34, 0.7);\n  backdrop-filter: blur(12px) saturate(180%);\n  border: 1px solid rgba(45, 255, 138, 0.2);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n  color: #e6edf3;\n}\n.neon-btn {\n  background: #2dff8a;\n  color: #0a0e13;\n  font-weight: bold;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 9999px;\n  cursor: pointer;\n  box-shadow: 0 0 15px rgba(45, 255, 138, 0.4);\n}\n.neon-btn:focus-visible {\n  outline: 2px solid #29e7ff;\n  outline-offset: 4px;\n}",
      "initialJs": "console.log('Песочница рамок и теней активна');",
      "instructions": "Практика с тенями и стеклом:\n1. Нажмите Tab на клавиатуре и проверьте работу :focus-visible с outline-offset\n2. Измените степень размытия backdrop-filter: blur(24px)\n3. Настройте многослойную тень box-shadow из 3 уровней глубины"
    },
    "task": {
      "title": "Создание интерфейса карточки в стиле Glassmorphism с неоновым свечением и :focus-visible",
      "scenario": "Вам необходимо сверстать карточку профиля разработчика в стиле Glassmorphism: блок должен иметь полупрозрачную подложку с размытием фона backdrop-filter, аккуратную световую грань, многослойную тень парения, круглую аватарку с border-radius: 50% и интерактивные кнопки с доступным :focus-visible и outline-offset.",
      "criteria": [
        "Карточка использует эффект Glassmorphism (backdrop-filter: blur() и полупрозрачный фон)",
        "Применена многослойная тень парения box-shadow (не менее 2 слоев)",
        "Аватарка оформлена через border-radius: 50%",
        "Кнопка действия оформлена в форме таблетки (border-radius: 9999px)",
        "Настроен доступный фокус :focus-visible с outline-offset: 4px",
        "Применены тонкие границы border со светлым полупрозрачным оттенком"
      ],
      "starterCode": {
        "css": "/* Разработайте стили Glassmorphism карточки */\n.glass-profile-card {\n}\n.avatar {\n}\n.action-btn {\n}"
      },
      "hints": [
        "Используйте backdrop-filter: blur(16px) saturate(180%);",
        "Для многослойной тени: box-shadow: 0 4px 6px rgba(0,0,0,0.2), 0 16px 32px rgba(0,0,0,0.4);",
        "Для фокуса: button:focus-visible { outline: 2px solid #2dff8a; outline-offset: 4px; }"
      ],
      "solution": {
        "css": ".glass-profile-card {\n  width: 320px;\n  padding: 24px;\n  background: rgba(13, 17, 23, 0.75);\n  backdrop-filter: blur(16px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  box-shadow:\n    0 4px 8px rgba(0, 0, 0, 0.3),\n    0 16px 36px rgba(0, 0, 0, 0.5);\n  color: #e6edf3;\n  text-align: center;\n}\n\n.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 2px solid #2dff8a;\n  box-shadow: 0 0 15px rgba(45, 255, 138, 0.35);\n  margin-bottom: 12px;\n}\n\n.action-btn {\n  border-radius: 9999px;\n  padding: 10px 24px;\n  background: #2dff8a;\n  color: #0a0e13;\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 0 20px rgba(45, 255, 138, 0.3);\n  outline: none;\n}\n\n.action-btn:focus-visible {\n  outline: 2px solid #29e7ff;\n  outline-offset: 4px;\n}",
        "explanation": "Стилистика полностью реализует Glassmorphism: размытие фона backdrop-filter, многослойная тень глубины, круглая аватарка 50%, кнопка-таблетка 9999px и доступный :focus-visible."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css8-q1",
          "question": "У тултипа есть треугольная стрелка на псевдоэлементе. Почему тень от `box-shadow` выглядит неправильно?",
          "options": [
            "`box-shadow` не учитывает `border-radius`, поэтому углы остаются квадратными",
            "`box-shadow` вообще не применяется к псевдоэлементам `::before` и `::after`",
            "`box-shadow` повторяет прямоугольник блока и контур стрелки не обводит",
            "`box-shadow` рисуется под фоном элемента и полностью перекрывается им"
          ],
          "correctIndex": 2,
          "explanation": "`box-shadow` работает с блочной коробкой: он знает про её размеры и скругления, но ничего не знает про фигуру, нарисованную прозрачными границами псевдоэлемента. В результате стрелка остаётся без тени, а по краю тултипа проходит лишняя прямая линия. `filter: drop-shadow()` обводит контур реально непрозрачных пикселей, поэтому и применяется для стрелок, SVG-иконок и прозрачных PNG."
        },
        {
          "id": "css8-q2",
          "question": "Чем `:focus-visible` отличается от `:focus` на кнопке?",
          "options": [
            "`:focus-visible` срабатывает и при клике мышью, и при переходе по Tab — это расширение `:focus`",
            "`:focus-visible` работает только на полях ввода, тогда как `:focus` — на любых элементах",
            "`:focus-visible` применяется, когда браузер считает подсветку уместной: как правило, при клавиатуре",
            "`:focus-visible` показывает рамку лишь при программной фокусировке через `element.focus()`"
          ],
          "correctIndex": 2,
          "explanation": "Браузер сам решает, нужна ли видимая подсветка, опираясь на способ получения фокуса: после Tab обводка появляется, после клика мышью по кнопке — нет. Это снимает старый конфликт, из-за которого дизайнеры писали `outline: none` и ломали навигацию с клавиатуры. У полей ввода подсветка появляется в любом случае: там она осмысленна и при клике."
        },
        {
          "id": "css8-q3",
          "question": "Для матового стекла применили `backdrop-filter: blur(12px)`, но размытия не видно. Что вероятнее всего не так?",
          "options": [
            "Значения размытия меньше 20 пикселей браузер к фону не применяет",
            "`backdrop-filter` требует обязательного `position: absolute` на элементе",
            "Фон самого элемента полностью непрозрачен — размывать под собой попросту нечего",
            "`backdrop-filter` действует только внутри контейнеров с `overflow: hidden`"
          ],
          "correctIndex": 2,
          "explanation": "`backdrop-filter` размывает то, что находится позади элемента, и результат виден только сквозь него. Если фон задан сплошным цветом, размытая картинка полностью им перекрыта. Поэтому эффект строится на триаде: полупрозрачный фон вроде `rgba(255, 255, 255, .08)`, само размытие фона и тонкая светлая граница, задающая стеклу физический край."
        },
        {
          "id": "css8-q4",
          "question": "Почему дизайн-системы задают тень карточки несколькими слоями вместо одного?",
          "options": [
            "Многослойные тени браузер отрисовывает на видеокарте, а однослойные считает процессором",
            "Короткий плотный слой даёт контакт с поверхностью, длинный мягкий — рассеянный свет",
            "Один слой ограничен непрозрачностью в 50 процентов, поэтому нужны дополнительные",
            "Каждый слой отвечает за свою сторону элемента: верх, низ и боковые грани"
          ],
          "correctIndex": 1,
          "explanation": "В реальности предмет отбрасывает не одну тень, а несколько: плотную и узкую у самой поверхности и широкую размытую от рассеянного света. Одиночная чёрная тень с большим радиусом выглядит грязным пятном, а два-три полупрозрачных слоя с разными смещениями и радиусами дают чистое ощущение высоты. На этом и построены шкалы уровней в дизайн-системах."
        },
        {
          "id": "css8-q5",
          "question": "Что задаёт запись `border-radius: 50px / 25px`?",
          "options": [
            "Скругление радиусом 50px сверху элемента и 25px снизу",
            "Скругление 50px с плавным переходом к 25px по всему периметру",
            "Эллиптические углы: 50px по горизонтали и 25px по вертикали",
            "Радиус 50px для внешней рамки и 25px для внутреннего фона"
          ],
          "correctIndex": 2,
          "explanation": "Слеш разделяет горизонтальные и вертикальные радиусы: до него идут полуоси по горизонтали, после — по вертикали. Угол перестаёт быть дугой окружности и становится частью эллипса, что позволяет получать вытянутые органические формы — лепестки, капли, мягкие «подушки». Разные скругления для отдельных углов задаются перечислением четырёх значений до и после слеша."
        }
      ]
    }
  },
  {
    "id": "css-9",
    "moduleId": "css",
    "level": 9,
    "title": "Flexbox: Контейнер (Flex Container)",
    "subtitle": "display: flex, flex-direction, justify-content, align-items, flex-wrap, gap и margin: auto",
    "description": "Освойте модуль CSS Flexible Box Layout: оси Main Axis и Cross Axis, свойства контейнера flex-direction, justify-content, align-items, flex-wrap, gap, а также волшебный margin: auto для прижатия элементов к краям без Spacer-хаков.",
    "estimatedMinutes": 60,
    "difficulty": "intermediate",
    "tags": [
      "flexbox",
      "flex-container",
      "justify-content",
      "align-items",
      "flex-wrap",
      "gap",
      "flex-direction"
    ],
    "theory": {
      "overview": "Flexbox (Flexible Box Layout) — одномерная система раскладки в CSS, решающая задачи выравнивания, распределения пространства и адаптивного переноса элементов внутри контейнера.\n\nFlexbox произвел революцию в верстке, заменив хрупкие конструкции из `float`, `inline-block`, отрицательных `margin` и `vertical-align` на простые декларативные свойства. В этом уроке мы освоим свойства flex-контейнера (родителя): `flex-direction`, `justify-content`, `align-items`, `flex-wrap` и `gap`.",
      "sections": [
        {
          "title": "Оси Flexbox: Main Axis и Cross Axis",
          "content": "Активация Flexbox: `display: flex;` на родительском элементе превращает его в flex-контейнер, а все прямые дочерние элементы автоматически становятся flex-элементами (flex items).\n\nДве оси Flexbox:\n1. **Main Axis (Главная ось)** — направление раскладки элементов. По умолчанию направлена горизонтально слева направо (`flex-direction: row`).\n2. **Cross Axis (Поперечная ось)** — всегда перпендикулярна Main Axis. При `flex-direction: row` Cross Axis направлена сверху вниз.\n\nСвойство `flex-direction` задает направление Main Axis:\n- `row` (по умолчанию) — горизонтально слева направо.\n- `row-reverse` — горизонтально справа налево.\n- `column` — вертикально сверху вниз (Main Axis = вертикаль!).\n- `column-reverse` — вертикально снизу вверх.\n\n⚠️ Критический момент: при `flex-direction: column` свойства `justify-content` и `align-items` МЕНЯЮТСЯ МЕСТАМИ! `justify-content` начинает управлять ВЕРТИКАЛЬНЫМ положением, а `align-items` — ГОРИЗОНТАЛЬНЫМ!",
          "image": {
            "src": "/images/lessons/css-flexbox-container.svg",
            "alt": "CSS Flexbox: Main Axis, Cross Axis, justify-content и align-items",
            "caption": "Main Axis управляется через justify-content, Cross Axis через align-items. flex-wrap переносит элементы на новую строку. gap задает отступы"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Идеальное горизонтальное и вертикальное центрирование */\n.centered-container {\n  display: flex;\n  justify-content: center; /* Main Axis → горизонталь */\n  align-items: center;     /* Cross Axis ↓ вертикаль  */\n  height: 100vh;           /* Контейнер на весь экран */\n}\n\n/* Вертикальная раскладка (column) */\n.sidebar {\n  display: flex;\n  flex-direction: column;  /* Main Axis ↓ теперь вертикаль */\n  justify-content: space-between; /* Распределение по вертикали! */\n  height: 100vh;\n}",
            "title": "Центрирование через flex и вертикальная column-раскладка",
            "explanation": "display: flex + justify-content: center + align-items: center — каноническое решение задачи идеального центрирования в CSS."
          }
        },
        {
          "title": "justify-content: Распределение по главной оси (Main Axis)",
          "content": "Свойство `justify-content` управляет положением flex-элементов вдоль Main Axis:\n\n1. `flex-start` (по умолчанию) — элементы прижаты к началу оси.\n2. `flex-end` — элементы прижаты к концу оси.\n3. `center` — элементы сгруппированы в центре.\n4. `space-between` — первый элемент прижат к левому краю, последний — к правому, остальные равномерно распределены. Нет отступов по бокам!\n5. `space-around` — отступы вокруг каждого элемента равны, но по краям контейнера отступы вдвое меньше.\n6. `space-evenly` — абсолютно одинаковые промежутки между элементами и по краям контейнера (идеально ровная сетка).\n\nТипичные сценарии:\n- `space-between` — навигация Header (лого слева, меню справа).\n- `center` — центрирование модального окна.\n- `space-evenly` — сетка карточек с ровными отступами.",
          "codeExample": {
            "language": "css",
            "code": "/* Header: лого слева, навигация справа */\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  height: 64px;\n  background: #0d1117;\n  border-bottom: 1px solid #30363d;\n}\n\n/* Группа действий карточки (кнопки по центру) */\n.card-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px; /* Отступы между кнопками */\n}",
            "title": "justify-content: space-between для хедера и center для кнопок",
            "explanation": "space-between расталкивает лого и навигацию к противоположным краям. center группирует кнопки действий по центру."
          }
        },
        {
          "title": "align-items: Выравнивание по поперечной оси (Cross Axis)",
          "content": "Свойство `align-items` управляет положением flex-элементов вдоль Cross Axis:\n\n1. `stretch` (по умолчанию) — элементы растягиваются на всю высоту контейнера (если не заданы явные `height`).\n2. `flex-start` — элементы прижаты к верху контейнера.\n3. `flex-end` — элементы прижаты к низу контейнера.\n4. `center` — элементы выровнены по центру поперечной оси (идеально для вертикального центрирования!).\n5. `baseline` — элементы выровнены по базовой линии текста. Критически важно, когда рядом стоят элементы с разным `font-size` (логотип + заголовок + значок).\n\nРазница между `align-items` и `align-content`:\n- `align-items` — выравнивает элементы ВНУТРИ одной строки.\n- `align-content` — управляет распределением ЦЕЛЫХ СТРОК при `flex-wrap: wrap` (работает аналогично `justify-content`, но по Cross Axis).",
          "codeExample": {
            "language": "css",
            "code": "/* Навигация с иконкой, текстом и бейджом разных размеров */\n.nav-item {\n  display: flex;\n  align-items: center; /* Вертикальное центрирование */\n  gap: 8px;\n}\n\n/* Сетка карточек с равной высотой (stretch) */\n.cards-grid {\n  display: flex;\n  align-items: stretch; /* Все карточки растянутся до высоты самой высокой */\n  gap: 16px;\n}\n\n/* Выравнивание по базовой линии текста */\n.price-block {\n  display: flex;\n  align-items: baseline; /* Рубль 199 и копейки .00 выровнены по базовой линии */\n  gap: 2px;\n}",
            "title": "align-items: center, stretch и baseline для разных сценариев",
            "explanation": "center центрирует вертикально, stretch растягивает карточки до одинаковой высоты, baseline выравнивает шрифты разных размеров."
          }
        },
        {
          "title": "flex-wrap, gap и волшебный margin: auto",
          "content": "Свойства для управления переносом и промежутками:\n\n1. `flex-wrap`:\n- `nowrap` (по умолчанию) — все элементы в одну строку (могут сжиматься или выпадать за пределы).\n- `wrap` — элементы переносятся на новую строку, когда не помещаются.\n- `wrap-reverse` — перенос снизу вверх.\n\n2. `gap` (современный стандарт отступов):\n- `gap: 16px;` — единый отступ между всеми элементами.\n- `gap: 16px 24px;` — разные отступы (`row-gap` и `column-gap`).\n- Преимущество перед `margin`: `gap` не создает лишних внешних отступов по краям контейнера!\n\n3. Волшебный `margin: auto` во Flexbox:\n- `margin-left: auto;` на элементе «съедает» всё свободное пространство слева, прижимая элемент к правому краю.\n- `margin-top: auto;` прижимает элемент к нижнему краю контейнера `flex-direction: column`.\n- Идеальная техника для прижатия кнопки «Выход» к низу боковой панели или иконки уведомлений к правому краю хедера.",
          "codeExample": {
            "language": "css",
            "code": "/* 1. Адаптивная сетка тегов с переносом */\n.tags-cloud {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n/* 2. Хедер: лого — навигация — [margin:auto] — иконка уведомлений */\n.header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.header .notifications-icon {\n  margin-left: auto; /* Прижатие к правому краю */\n}\n\n/* 3. Sidebar: навигация вверху, кнопка 'Выход' внизу */\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.sidebar .logout-btn {\n  margin-top: auto; /* Прижатие к низу */\n}",
            "title": "flex-wrap, gap и margin: auto для прижатия элементов",
            "explanation": "margin-left: auto на notifications-icon съедает свободное пространство, прижимая иконку к правому краю без пустых Spacer-div'ов."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Flexbox CSS",
          "content": "Для наглядного закрепления Flexbox, осей, выравнивания и практики верстки рекомендуем видеоматериал:\n\n- **[Flexbox CSS практический курс за 6 минут. Все свойства (YouTube)](https://youtu.be/eVZEwEQg4pg?si=xiBIbltHQhxSgfLB)** — компактный и насыщенный видеокурс от Ulbi TV: все свойства Flexbox-контейнера и flex-элементов за 6 минут с визуальными примерами."
        }
      ],
      "seniorTips": [
        "Для вертикального и горизонтального центрирования используйте каноническую тройку: `display: flex; justify-content: center; align-items: center;`.",
        "Используйте `gap` вместо `margin` для отступов между flex-элементами — gap не создает лишних внешних отступов по краям контейнера.",
        "Используйте `margin-left: auto` или `margin-top: auto` для прижатия элементов к краям контейнера вместо создания пустых `<div class=\"spacer\">`.",
        "При `flex-direction: column` помните, что `justify-content` управляет ВЕРТИКАЛЬНЫМ распределением, а `align-items` — ГОРИЗОНТАЛЬНЫМ!"
      ],
      "commonMistakes": [
        {
          "bad": "/* Пустой Spacer для прижатия элемента к краю */\n<div class=\"spacer\" style=\"flex-grow:1;\"></div>",
          "good": ".logout-btn { margin-left: auto; }",
          "reason": "margin: auto во Flexbox поглощает свободное пространство без создания бессмысленных пустых элементов в DOM."
        },
        {
          "bad": "/* Использование margin для отступов между flex-элементами */\n.card { margin: 0 8px; } /* Лишний отступ по краям! */",
          "good": ".cards-container { display: flex; gap: 16px; }",
          "reason": "gap создает отступы ТОЛЬКО между элементами, не добавляя лишнего пространства по краям контейнера."
        },
        {
          "bad": "/* Центрирование без понимания осей */\n.container { display: flex; align-items: center; /* Не по центру по горизонтали! */ }",
          "good": ".container { display: flex; justify-content: center; align-items: center; }",
          "reason": "align-items центрирует только по Cross Axis (вертикаль при row). Для полного центрирования нужны оба свойства."
        }
      ],
      "keyTakeaways": [
        "`display: flex` превращает элемент в flex-контейнер, дочерние элементы становятся flex-items.",
        "`justify-content` управляет раскладкой по Main Axis, `align-items` — по Cross Axis.",
        "`flex-direction: column` разворачивает Main Axis вертикально, МЕНЯЯ МЕСТАМИ оси для justify/align.",
        "`gap` задает промежутки без лишних внешних отступов по краям контейнера.",
        "`margin: auto` поглощает свободное пространство, прижимая элементы к краям без хаков."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"flex-demo\">\n  <div class=\"flex-container\" id=\"fc\">\n    <div class=\"flex-item\" style=\"background:#2dff8a33; border-color:#2dff8a;\">Item 1</div>\n    <div class=\"flex-item\" style=\"background:#29e7ff33; border-color:#29e7ff;\">Item 2 — Long Content</div>\n    <div class=\"flex-item\" style=\"background:#ffb02e33; border-color:#ffb02e;\">Item 3</div>\n    <div class=\"flex-item\" style=\"background:#ff2bd633; border-color:#ff2bd6;\">Item 4</div>\n  </div>\n</div>",
      "initialCss": ".flex-demo { padding: 16px; background: #0a0e13; font-family: monospace; }\n.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 16px;\n  min-height: 120px;\n  background: #0d1117;\n  border: 1px dashed #30363d;\n  border-radius: 8px;\n}\n.flex-item {\n  padding: 12px 16px;\n  border: 1px solid;\n  border-radius: 6px;\n  color: #e6edf3;\n  font-size: 13px;\n}",
      "initialJs": "console.log('Песочница Flexbox активна');",
      "instructions": "Практика с Flexbox:\n1. Измените justify-content: попробуйте center, flex-end, space-evenly\n2. Измените flex-direction на column и посмотрите, как перевернутся оси\n3. Добавьте margin-left: auto на третий элемент и наблюдайте за прижатием"
    },
    "task": {
      "title": "Верстка адаптивного хедера и карточной сетки на чистом Flexbox",
      "scenario": "Вам необходимо сверстать хедер сайта с лого, навигацией и иконкой профиля (прижатой к правому краю через margin-left: auto), а также адаптивную карточную сетку с flex-wrap: wrap и gap для каталога курсов.",
      "criteria": [
        "Хедер использует display: flex с align-items: center",
        "Лого и навигация расположены слева, иконка профиля прижата к правому краю через margin-left: auto",
        "Карточная сетка использует flex-wrap: wrap и gap для адаптивного переноса",
        "Карточки имеют одинаковую высоту благодаря align-items: stretch",
        "Кнопка внутри карточки прижата к нижнему краю через margin-top: auto в column-контейнере"
      ],
      "starterCode": {
        "css": "/* Разработайте стили хедера и карточной сетки */\n.site-header {\n}\n.course-grid {\n}\n.course-card {\n}"
      },
      "hints": [
        "Для хедера: display: flex; align-items: center; gap: 16px;",
        "Для иконки: .profile-icon { margin-left: auto; }",
        "Для сетки: display: flex; flex-wrap: wrap; gap: 16px;"
      ],
      "solution": {
        "css": ".site-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 24px;\n  height: 56px;\n  background: #0d1117;\n  border-bottom: 1px solid #30363d;\n  color: #e6edf3;\n}\n\n.profile-icon {\n  margin-left: auto; /* Прижимает к правому краю */\n}\n\n.course-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 24px;\n}\n\n.course-card {\n  display: flex;\n  flex-direction: column; /* Вертикальная раскладка */\n  width: 280px;\n  padding: 16px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n}\n\n.course-card .enroll-btn {\n  margin-top: auto; /* Кнопка прижата к низу */\n  padding: 10px;\n  background: #2dff8a;\n  color: #0a0e13;\n  border: none;\n  border-radius: 6px;\n  font-weight: bold;\n  cursor: pointer;\n}",
        "explanation": "Хедер использует space-between-эффект через margin-left: auto. Карточная сетка адаптивно переносит карточки через flex-wrap: wrap + gap. Кнопка внутри column-контейнера прижата к низу через margin-top: auto."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css9-q1",
          "question": "У единственного дочернего элемента flex-контейнера задано `margin: auto`. Что произойдёт?",
          "options": [
            "Элемент прижмётся к левому верхнему углу: значение `auto` во flex равносильно нулю",
            "Элемент центрируется сразу по обеим осям — свободное место делится поровну",
            "Элемент растянется на весь контейнер, поглотив всё свободное пространство",
            "Ничего не изменится: во flex-раскладке автоматические отступы игнорируются"
          ],
          "correctIndex": 1,
          "explanation": "Автоматические отступы во flex-раскладке забирают всё свободное место на своей стороне, и когда они стоят со всех четырёх сторон, остаток делится поровну — элемент оказывается ровно в центре по обеим осям. Это единственный способ центрирования, работающий без `justify-content` и `align-items`. В обычном потоке так центрировать по вертикали нельзя: там `margin: auto` сверху и снизу равносилен нулю."
        },
        {
          "id": "css9-q2",
          "question": "Во flex-контейнере с `flex-wrap: wrap` элементы встали в три строки. Чем `align-content` отличается от `align-items`?",
          "options": [
            "Свойства идентичны: `align-content` — устаревший синоним для `align-items`",
            "`align-content` работает вдоль главной оси, а `align-items` — вдоль поперечной",
            "`align-content` задаётся на контейнере, а `align-items` — на каждом элементе отдельно",
            "`align-content` распределяет строки целиком, `align-items` выравнивает элементы внутри строки"
          ],
          "correctIndex": 3,
          "explanation": "Когда строк несколько, у контейнера появляются два уровня выравнивания. `align-content` работает с блоком строк как с целым: прижимает их к верху, центрирует или распределяет промежутки между ними. `align-items` действует внутри каждой строки, выравнивая элементы по её высоте. При `nowrap` строка одна, и `align-content` просто не на что влиять — отсюда и частая путаница."
        },
        {
          "id": "css9-q3",
          "question": "Чем `gap: 16px` лучше, чем `margin-right: 16px` на каждом flex-элементе?",
          "options": [
            "`gap` отрисовывается быстрее, так как не участвует в расчёте блочной модели",
            "`gap` наследуется вложенными контейнерами и задаёт единый ритм всей странице",
            "`gap` поддаётся анимации, а внешние отступы изменять по времени нельзя",
            "`gap` ставит отступ только между элементами и корректно работает при переносе строк"
          ],
          "correctIndex": 3,
          "explanation": "Отступ на каждом элементе добавляет лишний зазор после последнего, из-за чего появляется правило для `:last-child`. При переносе строк проблем становится больше: горизонтальные и вертикальные интервалы приходится разводить отдельными хаками. `gap` описывает расстояние именно между соседями, честно работает по обеим осям и не требует исключений. Анимировать, кстати, можно и его, и обычные отступы."
        },
        {
          "id": "css9-q4",
          "question": "В шапке навигации нужно прижать последнюю кнопку к правому краю, оставив остальные слева. Что написать?",
          "options": [
            "`justify-content: space-between` на контейнере — крайние элементы разойдутся по краям",
            "`float: right` на последней кнопке — она выйдет из flex-потока и уйдёт вправо",
            "`margin-left: auto` на последней кнопке — автоотступ поглотит всё свободное место",
            "`position: absolute; right: 0` на кнопке — она встанет у правой границы шапки"
          ],
          "correctIndex": 2,
          "explanation": "Автоматический отступ слева от последнего элемента забирает весь свободный остаток строки и отталкивает кнопку к правому краю, а остальные пункты остаются плотной группой слева. `space-between` раздвинул бы все пункты по всей ширине, а не только последний. `float` во flex-раскладке просто игнорируется, абсолютное же позиционирование выключает кнопку из потока и ломает реакцию на сужение окна."
        },
        {
          "id": "css9-q5",
          "question": "Три элемента, задано `justify-content: space-around`. Как распределятся промежутки?",
          "options": [
            "У каждого элемента равный отступ с обеих сторон, поэтому между соседями зазор вдвое шире краевого",
            "Все промежутки одинаковы, включая отступы у левого и правого краёв контейнера",
            "Крайние элементы прижаты к границам, а свободное место поровну поделено между ними",
            "Промежутки нарастают слева направо пропорционально порядковому номеру элемента"
          ],
          "correctIndex": 0,
          "explanation": "`space-around` выдаёт каждому элементу собственный отступ с двух сторон. У краёв стоит по одному такому отступу, а между соседями они складываются, и зазор выходит вдвое больше — из-за этого края выглядят поджатыми. Абсолютно равные промежутки, включая краевые, даёт `space-evenly`, а вариант с прижатыми к границам крайними элементами — это `space-between`."
        }
      ]
    }
  },
  {
    "id": "css-10",
    "moduleId": "css",
    "level": 10,
    "title": "Flexbox: Свойства элементов (Flex Items)",
    "subtitle": "flex-grow, flex-shrink, flex-basis, сокращение flex: 1, align-self и order",
    "description": "Освойте управление дочерними flex-элементами: распределение свободного пространства через flex-grow, защиту от сплющивания аватарок и иконок через flex-shrink: 0, базовый размер flex-basis, сокращения flex: 1 / flex: auto, индивидуальное выравнивание align-self и изменение порядка order.",
    "estimatedMinutes": 60,
    "difficulty": "intermediate",
    "tags": [
      "flexbox",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-items",
      "align-self",
      "order"
    ],
    "theory": {
      "overview": "В предыдущем уроке мы изучили flex-контейнер (родителя). Теперь мы переходим к свойствам самих flex-элементов (flex items) — дочерних блоков.\n\nПонимание триады `flex-grow`, `flex-shrink` и `flex-basis` — граница между новичком и опытным фронтенд-инженером. В этом уроке мы научимся точно управлять тем, как элементы делят свободное пространство, защищать иконки и аватарки от сплющивания (`flex-shrink: 0`), выравнивать отдельные элементы через `align-self` и менять визуальный порядок через `order`.",
      "sections": [
        {
          "title": "Триада Flex-элемента: flex-grow, flex-shrink и flex-basis",
          "content": "Как браузер вычисляет итоговый размер flex-элемента:\n\n1. **`flex-basis` (Базовый размер)**:\n- Задает начальный размер элемента вдоль Main Axis ДО ТОГО, как начнет распределяться свободное пространство.\n- Значения: `auto` (берется свойство `width`/`height` или размер контента), `200px`, `30%`, `0`.\n- Приоритет размеров: `min-width` / `max-width` > `flex-basis` > `width`.\n\n2. **`flex-grow` (Коэффициент расширения)**:\n- Определяет, какую долю ПОЛОЖИТЕЛЬНОГО свободного пространства (если контейнер шире суммы элементов) заберет данный элемент.\n- `flex-grow: 0` (по умолчанию) — элемент не увеличивается, сохраняя свой `flex-basis`.\n- Если у элемента A `flex-grow: 1`, а у B `flex-grow: 2`, то B получит в 2 раза больше свободного места, чем A!\n\n3. **`flex-shrink` (Коэффициент сжатия)**:\n- Определяет, насколько элемент ужмется при ДЕФИЦИТЕ места (если элементы не помещаются в контейнер при `flex-wrap: nowrap`).\n- `flex-shrink: 1` (по умолчанию) — элемент сжимается пропорционально.\n- **`flex-shrink: 0`** — КРИТИЧЕСКИ ВАЖНО: полностью ЗАПРЕЩАЕТ элементу сжиматься меньше его `flex-basis`!",
          "image": {
            "src": "/images/lessons/css-flexbox-items.svg",
            "alt": "CSS Flexbox свойства элементов: flex-grow, flex-shrink, flex-basis, align-self",
            "caption": "flex-grow забирает свободное место, flex-shrink: 0 защищает аватарки от сплющивания, flex: 1 1 0% создает равные колонки, align-self переопределяет выравнивание"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Защита иконки от сплющивания при длинном тексте */\n.user-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.user-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  /* БЕЗ flex-shrink: 0 длинное имя сожмет аватарку в овал! */\n  flex-shrink: 0;\n}\n\n.user-info {\n  /* Занимает всё оставшееся свободное пространство */\n  flex-grow: 1;\n}",
            "title": "Защита аватарки от сплющивания через flex-shrink: 0",
            "explanation": "flex-shrink: 0 гарантирует идеальный круг 48x48px даже если текст в user-info очень длинный. flex-grow: 1 отдает тексту всё свободное место."
          }
        },
        {
          "title": "Сокращение flex: flex: 1 vs flex: auto vs flex: initial vs flex: none",
          "content": "Спецификация W3C настоятельно рекомендует использовать сокращенное свойство `flex: grow shrink basis;` вместо раздельных свойств:\n\n1. **`flex: 1;` (`flex: 1 1 0%;`)** — САМОЕ ПОПУЛЯРНОЕ СОКРАЩЕНИЕ:\n- `grow: 1, shrink: 1, basis: 0%`.\n- Все элементы делят ширину контейнера СТРОГО ПОРОВНУ, независимо от объема контента внутри них!\n- Идеально для равных колонок сетки (2, 3, 4 колонки).\n\n2. **`flex: auto;` (`flex: 1 1 auto;`)**:\n- `grow: 1, shrink: 1, basis: auto`.\n- Элементы растут и сжимаются, но с учетом исходного размера содержимого (элемент с длинным текстом будет шире).\n\n3. **`flex: initial;` (`flex: 0 1 auto;`)** — поведение по умолчанию:\n- Элемент не растет (`grow: 0`), но может сжиматься (`shrink: 1`), размер по контенту (`basis: auto`).\n\n4. **`flex: none;` (`flex: 0 0 auto;`)**:\n- Элемент абсолютно жесткий: не растет, не сжимается, размер строго по `width`/контенту.",
          "codeExample": {
            "language": "css",
            "code": "/* Идеальная 3-колоночная сетка с абсолютно равной шириной колонок */\n.equal-grid {\n  display: flex;\n  gap: 16px;\n}\n\n.equal-grid .column {\n  /* flex: 1 задает flex-basis: 0%, поэтому колонки строго равны! */\n  flex: 1;\n  background: #161b22;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n/* Сайдбар фиксированной ширины + гибкий контент */\n.layout {\n  display: flex;\n  gap: 24px;\n}\n.layout .sidebar {\n  /* Фиксированные 260px, не сжимается и не растет */\n  flex: 0 0 260px;\n}\n.layout .content {\n  /* Забирает всё оставшееся место */\n  flex: 1;\n}",
            "title": "Сетка с равными колонками flex: 1 и связка фикс-сайдбар + контент",
            "explanation": "flex: 1 делает все колонки одинаковыми независимо от длины текста внутри. flex: 0 0 260px жестко фиксирует ширину сайдбара."
          }
        },
        {
          "title": "align-self: Индивидуальное выравнивание отдельного элемента",
          "content": "Свойство `align-self` позволяет ОДНОМУ конкретному flex-элементу переопределить общее выравнивание `align-items`, заданное на контейнере:\n\nЗначения `align-self`:\n- `auto` (по умолчанию) — наследует значение `align-items` родителя.\n- `flex-start` — прижимает этот конкретный элемент к верху поперечной оси.\n- `flex-end` — прижимает к низу.\n- `center` — центрирует только данный элемент.\n- `stretch` — растягивает элемент на всю высоту.\n- `baseline` — выравнивает по базовой линии.\n\nТипичный сценарий: контейнер имеет `align-items: center`, но кнопка «Закрыть ✕» в углу карточки должна быть прижата к самому верху через `align-self: flex-start`.",
          "codeExample": {
            "language": "css",
            "code": ".notification-banner {\n  display: flex;\n  align-items: center; /* Все центрированы по вертикали */\n  gap: 16px;\n  padding: 16px;\n  background: #161b22;\n}\n\n.notification-text {\n  flex: 1;\n}\n\n/* Кнопка закрытия прижата к верхнему правому углу */\n.close-btn {\n  align-self: flex-start; /* Переопределяет align-items: center! */\n  background: transparent;\n  border: none;\n  color: #8b949e;\n  cursor: pointer;\n}",
            "title": "Переопределение выравнивания через align-self: flex-start",
            "explanation": "Все элементы баннера отцентрированы по вертикали, но кнопка close-btn благодаря align-self: flex-start прижата к верхнему краю."
          }
        },
        {
          "title": "order: Управление порядком и доступность",
          "content": "Свойство `order` изменяет ВИЗУАЛЬНЫЙ порядок отображения flex-элементов без изменения их позиции в HTML-разметке:\n\n1. Значение: целое число (положительное, отрицательное или 0). По умолчанию у всех элементов `order: 0`.\n2. Элементы с меньшим `order` отображаются раньше: элемент с `order: -1` встанет в самое начало, а с `order: 1` — в конец.\n\n⚠️ Предупреждение Accessibility (a11y):\nСвойство `order` меняет ТОЛЬКО визуальное отображение на экране! Порядок навигации клавишей `Tab` с клавиатуры и порядок чтения скринридером ОСТАЮТСЯ прежними (по DOM-дереву HTML!).\nЗолотое правило: никогда не используйте `order` для исправления кривой HTML-разметки — меняйте порядок в самом HTML, а `order` используйте только для адаптивной смены блоков на мобилках.",
          "codeExample": {
            "language": "css",
            "code": "/* Адаптивная смена порядка: на мобилках сайдбар идет ПОД контентом */\n.layout-container {\n  display: flex;\n  gap: 20px;\n}\n\n.main-content {\n  flex: 1;\n  order: 1; /* Контент идет первым */\n}\n\n.sidebar {\n  width: 240px;\n  order: 2; /* Сайдбар идет вторым */\n}\n\n/* На десктопе сайдбар ставим слева */\n@media (min-width: 1024px) {\n  .sidebar {\n    order: 0; /* Сайдбар перемещается влево! */\n  }\n}",
            "title": "Адаптивное управление визуальным порядком через order",
            "explanation": "order: 0 перемещает сайдбар влево на больших экранах без дублирования HTML-разметки."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Flexbox и свойства элементов",
          "content": "Для глубокого закрепления работы с Flexbox, понимания flex-grow, flex-shrink, flex-basis и выравнивания элементов рекомендуем видеоматериал:\n\n- **[Learn CSS Flexbox in 20 Minutes (YouTube)](https://youtu.be/wsTv9y931o8?si=VYdLtAl6Hkmtncs7)** — подробный и наглядный видеокурс от Coding2GO: полное руководство по свойствам Flexbox с практическими примерами за 20 минут."
        }
      ],
      "seniorTips": [
        "ВСЕГДА ставьте `flex-shrink: 0;` на иконки, аватарки и бейджи внутри flex-контейнеров — это спасет их от сплющивания при переполнении соседнего текста.",
        "Используйте `flex: 1;` (эквивалент `flex: 1 1 0%`) для создания сеток с абсолютно равными колонками, не зависящими от объема содержимого.",
        "Для фиксированных колонок (сайдбар) используйте `flex: 0 0 280px;` — это гарантирует точный размер без сжатия и роста.",
        "Не используйте `order` без крайней необходимости — расхождение визуального порядка и порядка навигации с клавиатуры (Tab) нарушает доступность WCAG."
      ],
      "commonMistakes": [
        {
          "bad": "/* Забыли flex-shrink: 0 на аватарке */\n.avatar { width: 50px; height: 50px; border-radius: 50%; }",
          "good": ".avatar { width: 50px; height: 50px; border-radius: 50%; flex-shrink: 0; }",
          "reason": "При длинном тексте рядом flex-shrink: 1 по умолчанию сплющит круглую аватарку в овал."
        },
        {
          "bad": "/* flex-grow: 1 для равных колонок с разным контентом */\n.col { flex-grow: 1; } /* Колонки будут разной ширины! */",
          "good": ".col { flex: 1; } /* flex-basis: 0% гарантирует строго равную ширину */",
          "reason": "flex-grow: 1 распределяет остаток поверх flex-basis: auto (размера контента). Колонка с 100 словами станет шире колонки с 2 словами. flex: 1 стартует с basis: 0%."
        },
        {
          "bad": "/* Изменение порядка табуляции через order */\n.btn-submit { order: -1; }",
          "good": "<!-- Измените порядок кнопок в самом HTML-коде -->",
          "reason": "order меняет только картинку на экране. Пользователь с клавиатуры всё равно попадет на кнопку в порядке DOM."
        }
      ],
      "keyTakeaways": [
        "`flex-basis` — базовый размер, `flex-grow` — расширение, `flex-shrink` — сжатие.",
        "`flex-shrink: 0` защищает иконки и аватарки от искажения пропорций.",
        "`flex: 1` (`1 1 0%`) создает идеально равные колонки независимо от длины текста.",
        "`align-self` позволяет отдельному элементу переопределить родительский `align-items`.",
        "`order` меняет визуальный порядок, но не влияет на фокус клавиатуры и скринридеры."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"items-sandbox\">\n  <div class=\"flex-row\">\n    <img src=\"/images/lessons/html-semantic-architecture.svg\" class=\"box-avatar\" alt=\"demo\" />\n    <div class=\"box-content\">\n      <h4 style=\"margin:0; color:#2dff8a;\">Алексей Архитектор</h4>\n      <p style=\"margin:4px 0 0; color:#8b949e; font-size:12px;\">Длинное описание роли разработчика на проекте с Flexbox...</p>\n    </div>\n    <button class=\"box-action\">✕</button>\n  </div>\n</div>",
      "initialCss": ".items-sandbox { padding: 16px; background: #0a0e13; font-family: monospace; }\n.flex-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #161b22;\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #30363d;\n}\n.box-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0; /* Защита от сжатия! */\n  border: 1px solid #2dff8a;\n}\n.box-content {\n  flex: 1;\n}\n.box-action {\n  align-self: flex-start;\n  background: transparent;\n  border: none;\n  color: #f85149;\n  font-size: 16px;\n  cursor: pointer;\n}",
      "initialJs": "console.log('Песочница свойств flex-элементов готова');",
      "instructions": "Практика с flex-элементами:\n1. Удалите flex-shrink: 0 с .box-avatar и добавьте много текста в .box-content — посмотрите на сплющивание\n2. Измените align-self на .box-action: попробуйте center, flex-end\n3. Задайте order: -1 для .box-action и посмотрите на перемещение в начало"
    },
    "task": {
      "title": "Верстка сложной карточки товара со сплющиванием, бейджами и align-self",
      "scenario": "Вам необходимо сверстать карточку товара в интернет-магазине: карточка должна содержать защищенную от сжатия миниатюру товара (flex-shrink: 0), гибкий блок описания с flex: 1, ценник, прижатую к верхнему углу иконку избранного через align-self: flex-start, и адаптивную сетку характеристик с равными колонками flex: 1.",
      "criteria": [
        "Миниатюра товара защищена от сжатия через flex-shrink: 0",
        "Текстовый блок занимает свободное пространство через flex: 1 / flex-grow: 1",
        "Кнопка 'В избранное' прижата к верхнему углу через align-self: flex-start",
        "Нижний блок характеристик разбит на 3 равные колонки через flex: 1",
        "Применен правильный шортхэнд flex"
      ],
      "starterCode": {
        "css": "/* Разработайте стили карточки товара */\n.product-item {\n}\n.product-thumb {\n}\n.product-details {\n}\n.btn-favorite {\n}\n.specs-row {\n}"
      },
      "hints": [
        "Для миниатюры: width: 80px; height: 80px; flex-shrink: 0;",
        "Для описания: flex: 1;",
        "Для избранного: align-self: flex-start;"
      ],
      "solution": {
        "css": ".product-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 10px;\n  color: #e6edf3;\n}\n\n.product-thumb {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0; /* Не сжимается! */\n  border: 1px solid #30363d;\n}\n\n.product-details {\n  flex: 1; /* Занимает всю ширину */\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.btn-favorite {\n  align-self: flex-start; /* В верхний правый угол */\n  background: transparent;\n  border: 1px solid #30363d;\n  color: #ffb02e;\n  padding: 6px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.specs-row {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.specs-row .spec-col {\n  flex: 1; /* Равные 3 колонки */\n  background: #0d1117;\n  padding: 6px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  text-align: center;\n}",
        "explanation": "Стилистика использует передовые практики Flexbox: flex-shrink: 0 спасает превью от сжатия, flex: 1 отдает место контенту, align-self: flex-start позиционирует кнопку, а spec-col делит сетку строго поровну."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css10-q1",
          "question": "Аватарка 48×48 рядом с длинным текстом во flex-строке превращается в овал. Почему и как чинить?",
          "options": [
            "По умолчанию действует `flex-shrink: 1`, и при нехватке места аватарка сжимается",
            "Ширина задана в процентах — достаточно перевести её в пиксели",
            "Контейнеру не хватает `align-items: center`, без него элементы растягиваются",
            "У аватарки не задан `flex-basis`, поэтому размер вычисляется по содержимому"
          ],
          "correctIndex": 0,
          "explanation": "Каждый flex-элемент по умолчанию готов сжиматься, и заданная ширина для него лишь пожелание: когда соседний текст требует места, картинка честно отдаёт своё и теряет пропорции. Лечится это явным `flex-shrink: 0` — привычка ставить его на аватарки, иконки и бейджи экономит часы отладки. Вертикальное растяжение — отдельная история, за неё отвечает `align-items`."
        },
        {
          "id": "css10-q2",
          "question": "Почему эти две колонки получились разной ширины и как сделать их одинаковыми?",
          "codeSnippet": ".a { flex-grow: 1; } /* внутри 2 слова */\n.b { flex-grow: 1; } /* внутри 100 слов */",
          "options": [
            "Не хватает `flex-wrap: nowrap` — без него колонки делят место непредсказуемо",
            "Колонки равны по определению, различается лишь высота из-за значения `align-items`",
            "Нужно задать обеим `width: 50%` — коэффициент роста на итоговую ширину не влияет",
            "`flex-grow` делит только остаток поверх размера содержимого; равные колонки даёт `flex: 1`"
          ],
          "correctIndex": 3,
          "explanation": "При `flex-basis: auto` стартовой шириной служит естественный размер содержимого, и коэффициент роста делит между колонками только то, что осталось сверху. Колонка со ста словами стартует шире и такой и остаётся. Сокращение `flex: 1` разворачивается в `1 1 0%`: стартовая ширина обнуляется, и всё пространство делится поровну независимо от объёма текста."
        },
        {
          "id": "css10-q3",
          "question": "В ряду карточек одна должна прижиматься к низу, а остальные — центрироваться по вертикали. Что использовать?",
          "options": [
            "`align-content: flex-end` на контейнере — он сдвинет вниз только нужный элемент",
            "`align-self: flex-end` на этой карточке — она переопределит выравнивание контейнера",
            "`justify-self: end` на карточке — это свойство работает и во flex, и в grid",
            "`vertical-align: bottom` на карточке — классический способ выравнивания по нижнему краю"
          ],
          "correctIndex": 1,
          "explanation": "`align-self` задаётся на самом элементе и перекрывает для него значение `align-items` родителя — ровно то, что нужно для одного исключения из общего правила. `align-content` управляет всеми строками сразу и в одну строку ничего не даст. `justify-self` во flex-раскладке не работает вовсе, это свойство grid, а `vertical-align` относится к строчным элементам и ячейкам таблиц."
        },
        {
          "id": "css10-q4",
          "question": "Сайдбар должен быть ровно 280px при любой ширине окна. Почему одного `width: 280px` мало?",
          "options": [
            "`width` во flex-контейнере игнорируется: размер задаётся исключительно через `flex-basis`",
            "`width` задаёт лишь максимальный размер, а фактический вычисляется по содержимому",
            "`width` вступает в силу только после того, как контейнер получит `flex-wrap: wrap`",
            "По умолчанию действует `flex-shrink: 1`, и при нехватке места сайдбар всё равно сожмётся"
          ],
          "correctIndex": 3,
          "explanation": "Ширина честно применяется и служит стартовым размером, но защиты от сжатия в ней нет: как только контейнеру станет тесно, сайдбар начнёт отдавать пиксели. Надёжная запись — `flex: 0 0 280px`: нулевые коэффициенты роста и сжатия фиксируют размер жёстко. Эквивалент — `flex: none` вместе с `width: 280px`."
        },
        {
          "id": "css10-q5",
          "question": "Кнопку «Купить» подняли визуально наверх с помощью `order: -1`. Что при этом ломается?",
          "options": [
            "Кнопка выпадает из потока и перестаёт реагировать на нажатия мышью",
            "Кнопка теряет доступное имя, поскольку выносится за пределы своего контейнера",
            "Отрицательные значения `order` не поддерживаются и трактуются браузером как ноль",
            "Порядок обхода по Tab и чтения скринридером остаётся прежним, по дереву документа"
          ],
          "correctIndex": 3,
          "explanation": "`order` меняет только визуальную последовательность отрисовки. Навигация с клавиатуры и чтение скринридером по-прежнему идут по порядку элементов в разметке, поэтому пользователь видит кнопку первой, а добирается до неё последней. Критерий WCAG о согласованном порядке чтения такое расхождение прямо запрещает. Если порядок важен, меняют разметку, а не раскладку."
        }
      ]
    }
  },
  {
    "id": "css-11",
    "moduleId": "css",
    "level": 11,
    "title": "CSS Grid: Основы и двумерные сетки",
    "subtitle": "display: grid, фракции fr, repeat(), minmax(), gap и auto-fit/auto-fill",
    "description": "Освойте мощнейшую систему раскладки в CSS: модуль CSS Grid. Двумерная система координат (Rows & Columns), гибкие единицы fr, функции repeat() и minmax(), адаптивные сетки без медиа-запросов через auto-fit/auto-fill и управление отступами gap.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "css-grid",
      "grid-container",
      "fr-units",
      "minmax",
      "auto-fit",
      "repeat",
      "gap",
      "layout"
    ],
    "theory": {
      "overview": "CSS Grid Layout — самая мощная и совершенная система верстки в современном CSS. В отличие от Flexbox, который работает только в одном измерении (либо строка, либо колонка), CSS Grid является **двумерной (2D)** системой, позволяя одновременно управлять и строками, и столбцами.\n\nGrid полностью устраняет потребность в сторонних CSS-фреймворках (Bootstrap, Tailwind Grid), позволяя создавать адаптивные каталоги товаров, сложные асимметричные дашборды и макеты страниц всего в пару строк декларативного кода. В этом уроке мы изучим фундаментальные свойства grid-контейнера.",
      "sections": [
        {
          "title": "Двумерная координатная сетка: Grid vs Flexbox",
          "content": "Принципиальное отличие Grid от Flexbox:\n\n1. **Flexbox (1D — одномерный)**:\n- Элементы выстраиваются вдоль ОДНОЙ оси (Main Axis). Перенос на новую строку (`flex-wrap`) создает независимые строки, ячейки которых не выравниваются по колонкам с соседними строками.\n- Идеален для: компонентов (кнопка с иконкой, строка навбара, аватарка + имя).\n\n2. **CSS Grid (2D — двумерный)**:\n- Управляет СТРОКАМИ И СТОЛБЦАМИ ОДНОВРЕМЕННО в единой координатной сетке.\n- Все ячейки строго согласованы по вертикальным и горизонтальным направляющим (Grid Lines).\n- Идеален для: общего каркаса страницы (Header/Sidebar/Content/Footer), каталогов карточек, дашбордов и фотогалерей.\n\n3. Активация Grid:\n`display: grid;` на родительском элементе превращает его в grid-контейнер, а всех прямых потомков — в grid-элементы (grid items).",
          "image": {
            "src": "/images/lessons/css-grid-fundamentals.svg",
            "alt": "CSS Grid основы: двумерные сетки, fr, repeat, minmax и auto-fit",
            "caption": "CSS Grid управляет строками и столбцами одновременно. auto-fit + minmax создают адаптивную сетку без единого media-запроса"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Базовый 3-колоночный Grid-контейнер */\n.dashboard-grid {\n  display: grid;\n  /* 3 колонки: левая 200px, центральная гибкая, правая 300px */\n  grid-template-columns: 200px 1fr 300px;\n  /* 2 строки: шапка 60px, контент по размеру */\n  grid-template-rows: 60px auto;\n  gap: 20px; /* Отступы между ячейками */\n}",
            "title": "Создание двумерной координатной сетки через grid-template",
            "explanation": "grid-template-columns задает ширину 3 колонок, grid-template-rows — высоту строк, а gap — отступы между всеми ячейками."
          }
        },
        {
          "title": "Единица измерения fr (Fraction) и функция repeat()",
          "content": "Специализированные инструменты CSS Grid:\n\n1. **Единица `fr` (Fractional Unit — Доля свободного места)**:\n- Представляет собой долю ДОСТУПНОГО свободного пространства внутри grid-контейнера.\n- `grid-template-columns: 1fr 2fr 1fr;` — делит свободное место на 4 части: центральная колонка получит 2/4 (50%), а боковые — по 1/4 (25%).\n- В отличие от процентов (`%`), `fr` автоматически вычитает размер `gap` и фиксированных колонок (`px`), исключая появление горизонтального скролла!\n\n2. **Функция `repeat(count, track)`**:\n- Избавляет от дублирования значений:\n- `grid-template-columns: repeat(4, 1fr);` — создает 4 равные колонки по `1fr`.\n- `grid-template-columns: repeat(3, 100px 1fr);` — чередует: `100px 1fr 100px 1fr 100px 1fr`.",
          "codeExample": {
            "language": "css",
            "code": "/* 1. Сетка из 4 абсолютно равных адаптивных колонок */\n.pricing-table {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n/* 2. Комбинация фиксированного сайдбара и гибких колонок */\n.admin-layout {\n  display: grid;\n  grid-template-columns: 260px repeat(2, 1fr);\n  gap: 24px;\n}",
            "title": "Использование единиц fr и функции repeat()",
            "explanation": "repeat(4, 1fr) лаконично создает 4 равные колонки, автоматически пересчитывающие размер при изменении ширины окна."
          }
        },
        {
          "title": "Функция minmax() и неявная сетка (Implicit Grid)",
          "content": "Управление диапазонами размеров ячеек:\n\n1. **Функция `minmax(min, max)`**:\n- Задает диапазон допустимого размера трека: размер не может быть меньше `min` и больше `max`.\n- `minmax(200px, 1fr)` — колонка не сожмется меньше 200px, но сможет расти и забирать свободное место.\n- `minmax(100px, auto)` — минимальная высота строки 100px, но если контента много — строка плавно увеличится под контент.\n\n2. **Явная (Explicit) vs Неявная (Implicit) сетка**:\n- Явная сетка: строки и столбцы, явно объявленные через `grid-template-columns` и `grid-template-rows`.\n- Неявная сетка: если элементов больше, чем объявлено ячеек, браузер автоматически создает новые строки.\n- Свойство `grid-auto-rows: 250px;` — задает высоту для всех АВТОМАТИЧЕСКИ создаваемых строк неявной сетки!",
          "codeExample": {
            "language": "css",
            "code": ".cards-container {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(200px, 1fr));\n  /* Все автоматически создаваемые строки будут высотой не менее 180px */\n  grid-auto-rows: minmax(180px, auto);\n  gap: 16px;\n}",
            "title": "Использование minmax() и grid-auto-rows для неявной сетки",
            "explanation": "grid-auto-rows гарантирует аккуратную высоту для любых новых карточек, пришедших из API, даже если их 100 штук."
          }
        },
        {
          "title": "Революция адаптивности: auto-fit vs auto-fill БЕЗ медиа-запросов",
          "content": "Самый знаменитый и мощный однострочник в истории CSS:\n`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`\n\nКак работает эта магия:\n1. Браузер сам вычисляет, сколько колонок минимальной шириной 280px помещается в контейнер:\n- На смартфоне 360px: помещается 1 колонка -> растягивается на 100% (1fr).\n- На планшете 768px: помещаются 2 колонки по 370px.\n- На ноутбуке 1200px: помещаются 4 колонки по 285px.\n- На 4K мониторе: помещаются 8 колонок.\n2. **БЕЗ ЕДИНОГО `@media` запроса!** Сетка полностью адаптивна от мобилок до 8K экранов!\n\nРазница между `auto-fit` и `auto-fill`:\n- **`auto-fit`** (используется в 95% случаев): если элементов меньше, чем колонок (например, всего 2 карточки на 4K экране), `auto-fit` схлопывает пустые треки и РАСТЯГИВАЕТ существующие карточки на всю ширину.\n- **`auto-fill`**: оставляет пустые невидимые колонки справа, сохраняя жесткий размер карточек.",
          "codeExample": {
            "language": "css",
            "code": "/* Идеальная самоадаптирующаяся сетка каталога товаров */\n.product-catalog {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.product-card {\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n  padding: 16px;\n}",
            "title": "Адаптивная сетка repeat(auto-fit, minmax(260px, 1fr))",
            "explanation": "Эта строка заменяет десятки строк media-запросов, автоматически перестраивая количество колонок под любую ширину экрана."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: CSS Grid Layout",
          "content": "Для наглядного закрепления CSS Grid, работы с колонками, строками, областями (grid-template-areas) и создания адаптивных сеток рекомендуем видеоматериал:\n\n- **[Grid CSS полный курс за 13 минут. Все свойства (YouTube)](https://youtu.be/MEOR2b69Pl4?si=yw0WgI6B-Me1fTFa)** — быстрый и подробный практический курс от Ulbi TV: все свойства Grid-контейнера и grid-элементов за 13 минут на наглядных примерах."
        }
      ],
      "seniorTips": [
        "Используйте `repeat(auto-fit, minmax(280px, 1fr))` для всех каталогов карточек — это адаптивный стандарт де-факто, избавляющий от десятков хрупких `@media` брейкпоинтов.",
        "Всегда используйте единицы `fr` вместо процентов `%` внутри Grid — `fr` автоматически учитывает отступы `gap`, предотвращая выпадение элементов за край.",
        "Задавайте `grid-auto-rows: minmax(100px, auto)` при динамической подгрузке данных, чтобы новые строки автоматически получали правильную высоту.",
        "Помните: Flexbox — для одномерных компонентов (кнопки, навбар), а CSS Grid — для двумерных каркасов страниц и сеток карточек."
      ],
      "commonMistakes": [
        {
          "bad": "/* Проценты в Grid с отступами gap */\n.grid { grid-template-columns: 33.3% 33.3% 33.3%; gap: 20px; } /* Горизонтальный скролл! */",
          "good": ".grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }",
          "reason": "33.3% * 3 = 100% + gap (40px) превышает ширину контейнера, вызывая горизонтальную прокрутку. fr автоматически вычитает gap."
        },
        {
          "bad": "/* Куча media-запросов для сетки */\n@media (max-width: 600px) { ... }\n@media (max-width: 900px) { ... }\n@media (max-width: 1200px) { ... }",
          "good": ".grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }",
          "reason": "repeat(auto-fit, minmax(...)) заменяет все эти медиа-запросы одной строкой, работая плавно на любых нестандартных разрешениях."
        },
        {
          "bad": "/* Использование Flexbox там, где нужен Grid */\n/* Попытки выровнять карточки в 3 колонки через flex-basis: 30% + margin */",
          "good": "display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;",
          "reason": "Flexbox не гарантирует выравнивание колонок между разными строками при переносе. Grid создает строгую координатную сетку."
        }
      ],
      "keyTakeaways": [
        "CSS Grid — двумерная система верстки, управляющая строками и колонками одновременно.",
        "`fr` (Fraction) делит свободное место, автоматически вычитая отступы `gap`.",
        "`repeat(auto-fit, minmax(280px, 1fr))` создает идеальную адаптивную сетку без медиа-запросов.",
        "`minmax()` задает минимальные и максимальные границы размеров ячеек.",
        "`grid-auto-rows` управляет геометрией автоматически генерируемых строк неявной сетки."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"grid-sandbox\">\n  <div class=\"grid-box\" id=\"gb\">\n    <div class=\"g-cell\">Card 1</div>\n    <div class=\"g-cell\">Card 2</div>\n    <div class=\"g-cell\">Card 3</div>\n    <div class=\"g-cell\">Card 4</div>\n    <div class=\"g-cell\">Card 5</div>\n    <div class=\"g-cell\">Card 6</div>\n  </div>\n</div>",
      "initialCss": ".grid-sandbox { padding: 16px; background: #0a0e13; font-family: monospace; }\n.grid-box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n  background: #0d1117;\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px dashed #30363d;\n}\n.g-cell {\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  border-radius: 6px;\n  padding: 16px;\n  color: #2dff8a;\n  text-align: center;\n}",
      "initialJs": "console.log('Песочница CSS Grid активна');",
      "instructions": "Практика с CSS Grid:\n1. Измените размер окна браузера и наблюдайте, как карточки плавно перестраиваются\n2. Измените grid-template-columns на 1fr 2fr 1fr\n3. Замените auto-fit на auto-fill и посмотрите на разницу"
    },
    "task": {
      "title": "Верстка адаптивного каталога курсов на CSS Grid без медиа-запросов",
      "scenario": "Вам необходимо сверстать каталог курсов Академии стажёров: карточки должны быть размещены в двумерной сетке CSS Grid с автоматической адаптивностью repeat(auto-fit, minmax(260px, 1fr)), отступами gap: 20px, минимальной высотой строк grid-auto-rows: minmax(200px, auto) и стильной киберпанк-стилизацией.",
      "criteria": [
        "Каталог использует display: grid",
        "Применена адаптивная формула repeat(auto-fit, minmax(260px, 1fr))",
        "Заданы отступы через свойство gap",
        "Настроена высота неявных строк через grid-auto-rows: minmax()",
        "Сетка работает адаптивно без единого @media запроса"
      ],
      "starterCode": {
        "css": "/* Разработайте Grid-сетку каталога */\n.courses-catalog {\n}\n.course-item {\n}"
      },
      "hints": [
        "Используйте display: grid;",
        "Колонки: grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));",
        "Отступы: gap: 20px;"
      ],
      "solution": {
        "css": ".courses-catalog {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  grid-auto-rows: minmax(200px, auto);\n  gap: 20px;\n  padding: 24px;\n  background: #0a0e13;\n}\n\n.course-item {\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  color: #e6edf3;\n  transition: border-color 0.2s ease, transform 0.2s ease;\n}\n\n.course-item:hover {\n  border-color: #2dff8a;\n  transform: translateY(-2px);\n}",
        "explanation": "Сетка построена на чистом CSS Grid с авто-адаптацией через auto-fit + minmax, едиными отступами gap и гибкой высотой строк grid-auto-rows."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css11-q1",
          "question": "Карточки во flex-контейнере с `flex-wrap: wrap` переносятся на новые строки, но колонки в разных строках не совпадают по ширине. Почему Grid решает эту задачу?",
          "options": [
            "Flexbox раскладывает каждую строку независимо, а Grid строит общую сетку колонок",
            "Flexbox всегда сжимает элементы, а Grid запрещает сжатие и держит размеры фиксированными",
            "Flexbox не поддерживает `gap`, из-за чего отступы накапливаются в строках по-разному",
            "Flexbox считает раскладку до загрузки шрифтов, а Grid пересчитывает её после"
          ],
          "correctIndex": 0,
          "explanation": "Flexbox одномерен: перенос создаёт новую независимую строку, которая заново делит место между своими элементами, поэтому вертикального выравнивания между строками не возникает. Grid двумерен и сначала строит координатную сетку из строк и колонок, а уже потом расставляет по ней элементы — колонки совпадают по определению. Отсюда практическое правило: компоненты в ряд — Flexbox, каркасы и сетки карточек — Grid."
        },
        {
          "id": "css11-q2",
          "question": "Почему такая сетка даёт горизонтальную прокрутку и как это исправить?",
          "codeSnippet": ".grid {\n  display: grid;\n  grid-template-columns: 33.33% 33.33% 33.33%;\n  gap: 20px;\n}",
          "options": [
            "Проценты округляются с погрешностью; помогает повысить точность до 33.333%",
            "Трём колонкам нужен явный `grid-template-rows`, иначе ширина считается неверно",
            "Свойство `gap` в Grid не поддерживается — нужны внешние отступы у каждой ячейки",
            "Проценты не учитывают `gap`: выходит 100% плюс 40px. Спасает `repeat(3, 1fr)`"
          ],
          "correctIndex": 3,
          "explanation": "Проценты считаются от ширины контейнера и ничего не знают о промежутках: три колонки уже занимают все 100%, а два зазора по 20 пикселей добавляются сверху и выталкивают сетку за край. Единица `fr` делит именно свободное место, то есть остаток после вычитания всех промежутков, поэтому `repeat(3, 1fr)` всегда помещается ровно. Это главная причина предпочитать `fr` процентам внутри Grid."
        },
        {
          "id": "css11-q3",
          "question": "Что делает объявление `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`?",
          "options": [
            "Создаёт ровно столько колонок, сколько карточек, растягивая каждую минимум на 280px",
            "Фиксирует ширину колонки в 280px, а лишнее пространство оставляет пустым справа",
            "Помещает максимум колонок шириной не менее 280px и делит остаток между ними поровну",
            "Создаёт 280 колонок по одной доле и прячет лишние за границей контейнера"
          ],
          "correctIndex": 2,
          "explanation": "Браузер сам считает, сколько треков шириной от 280 пикселей помещается в текущую ширину контейнера, а затем растягивает их до `1fr`, чтобы не осталось пустот. При сужении окна число колонок уменьшается плавно и без единого медиа-запроса. Эта строка де-факто стала стандартом для каталогов карточек."
        },
        {
          "id": "css11-q4",
          "question": "В контейнере шириной 1200px с правилом `repeat(?, minmax(200px, 1fr))` лежат всего две карточки. Чем результат `auto-fit` отличается от `auto-fill`?",
          "options": [
            "Оба варианта дадут одинаковый результат: разница заметна только при переполнении",
            "`auto-fill` схлопнет пустые треки, а `auto-fit` оставит их пустыми в правой части",
            "`auto-fit` схлопнет пустые треки, и две карточки растянутся на всю ширину контейнера",
            "`auto-fit` перенесёт карточки на новую строку, а `auto-fill` оставит их в одной"
          ],
          "correctIndex": 2,
          "explanation": "Оба ключевых слова создают одинаковое количество треков, но дальше ведут себя по-разному. `auto-fill` сохраняет пустые треки, и две карточки остаются узкими, а справа зияет пустота. `auto-fit` схлопывает незанятые треки до нуля, после чего `1fr` раздаёт освободившееся место оставшимся карточкам. Для каталогов обычно нужен именно `auto-fit`, а `auto-fill` полезен, когда важно сохранить ритм сетки."
        },
        {
          "id": "css11-q5",
          "question": "Задано `grid-template-rows: 100px`, но элементов хватило на три строки. Какой высоты окажутся вторая и третья?",
          "options": [
            "Тоже 100px — шаблон строк повторяется для всех последующих автоматически",
            "Нулевой: строки без явного описания не создаются, и элементы накладываются друг на друга",
            "По содержимому: неявные строки получают `auto`, пока не задан `grid-auto-rows`",
            "Равной высоте контейнера, поделённой на итоговое количество строк сетки"
          ],
          "correctIndex": 2,
          "explanation": "Шаблон описал только первую строку, остальные Grid достраивает сам — это и есть неявная сетка. По умолчанию такие строки получают высоту `auto`, то есть подстраиваются под содержимое, из-за чего строки выходят разной высоты. Управляет ими отдельное свойство `grid-auto-rows`: например, `minmax(100px, auto)` задаёт нижнюю границу и разрешает расти при необходимости."
        }
      ]
    }
  },
  {
    "id": "css-12",
    "moduleId": "css",
    "level": 12,
    "title": "CSS Grid: Раскладка, области (grid-template-areas) и наложение",
    "subtitle": "grid-template-areas, grid-area, grid-column / grid-row, span, линии 1 / -1 и наложение слоев",
    "description": "Освойте архитектурную раскладку на CSS Grid: визуальное проектирование макетов страниц через grid-template-areas, позиционирование по именованным областям grid-area, точное управление линиями сетки (grid-column: 1 / -1, span 2) и наложение элементов (Grid Overlap) без position: absolute.",
    "estimatedMinutes": 65,
    "difficulty": "advanced",
    "tags": [
      "css-grid",
      "grid-template-areas",
      "grid-area",
      "grid-lines",
      "span",
      "grid-overlap",
      "layout"
    ],
    "theory": {
      "overview": "В предыдущем уроке мы изучили фундамент CSS Grid (fr, repeat, minmax, auto-fit). Теперь мы переходим к самому выразительному инструменту Grid — **раскладке по именованным областям (`grid-template-areas`)** и точному позиционированию элементов по линиям сетки.\n\n`grid-template-areas` позволяет декларативно описывать геометрию всей веб-страницы в виде ASCII-арт схемы прямо в CSS, а также легко менять расположение сайдбаров, шапок и контента для мобильных экранов в одну строчку. Кроме того, Grid предоставляет нативный механизм **наложения элементов (Grid Overlap)** без ломких костылей `position: absolute`.",
      "sections": [
        {
          "title": "Визуальная раскладка макета через grid-template-areas",
          "content": "Свойство `grid-template-areas` позволяет нарисовать карту страницы словами:\n\n1. Декларация областей на контейнере:\n```css\n.page-layout {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  grid-template-rows: 64px 1fr 50px;\n  grid-template-areas:\n    \"header  header\"\n    \"sidebar main\"\n    \"footer  footer\";\n  min-height: 100vh;\n}\n```\n- Каждая строка в кавычках `\"...\"` представляет одну строку сетки.\n- Каждое слово задает имя ячейки.\n- Повторение имени (`\"header header\"`) объединяет ячейки в единую неразрывную область на 2 колонки!\n\n2. Привязка дочерних элементов через `grid-area`:\n- `.site-header { grid-area: header; }`\n- `.site-sidebar { grid-area: sidebar; }`\n- `.site-main { grid-area: main; }`\n- `.site-footer { grid-area: footer; }`\n\n3. Пустые ячейки (Пропуски):\nТочка `.` обозначает пустую ячейку без контента: `\"sidebar . main\"`.",
          "image": {
            "src": "/images/lessons/css-grid-areas-layout.svg",
            "alt": "CSS Grid раскладка макета через grid-template-areas и наложение слоев",
            "caption": "grid-template-areas рисует визуальный макет страницы, grid-column: 1 / -1 растягивает на всю ширину, а Grid Overlap заменяет position: absolute"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Десктопный макет портала */\n.app-layout {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header  header\"\n    \"sidebar content\"\n    \"footer  footer\";\n  min-height: 100vh;\n  gap: 16px;\n}\n\n.header  { grid-area: header;  background: #161b22; }\n.sidebar { grid-area: sidebar; background: #0d1117; }\n.content { grid-area: content; background: #0a0e13; }\n.footer  { grid-area: footer;  background: #161b22; }\n\n/* Мобильная адаптация — перестройка в 1 колонку одной строкой! */\n@media (max-width: 768px) {\n  .app-layout {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"content\"\n      \"sidebar\"\n      \"footer\";\n  }\n}",
            "title": "Макет страницы на grid-template-areas с адаптацией под мобилки",
            "explanation": "В @media блоке порядок блоков перестраивается одной текстовой схемой: sidebar перемещается ПОД content без изменения HTML-кода."
          }
        },
        {
          "title": "Позиционирование по линиям сетки (Grid Lines) и ключевое слово span",
          "content": "Координатная сетка Grid нумеруется линиями (Grid Lines) от `1` до `N+1` (а также отрицательными индексами от `-1` с правого края):\n\n1. Синтаксис `grid-column: start / end;`:\n- `grid-column: 1 / 3;` — элемент занимает ячейки от 1-й до 3-й вертикальной линии (2 колонки).\n- `grid-row: 2 / 4;` — элемент занимает ячейки со 2-й по 4-ю горизонтальную линию.\n\n2. Растяжение на ВСЮ ширину сетки (`1 / -1`):\n- **`grid-column: 1 / -1;`** — мощнейший приём: элемент растягивается от САМОЙ ПЕРВОЙ (1) до САМОЙ ПОСЛЕДНЕЙ (-1) линии сетки, независимо от того, сколько колонок в сетке (3, 6 или 12)!\n- Идеально для полноэкранных баннеров (Hero Banner) и футеров.\n\n3. Ключевое слово `span` (Охват):\n- `grid-column: span 2;` — растянуть элемент на 2 колонки вправо от текущей позиции.\n- `grid-row: span 3;` — растянуть элемент на 3 строки вниз.",
          "codeExample": {
            "language": "css",
            "code": "/* Сетка дашборда с карточками разного размера */\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n/* Большая главная аналитическая карточка (на 2 колонки и 2 строки) */\n.main-chart {\n  grid-column: span 2;\n  grid-row: span 2;\n  background: #161b22;\n  border: 1px solid #2dff8a;\n}\n\n/* Полноширинный баннер уведомления */\n.alert-banner {\n  grid-column: 1 / -1; /* На все 4 колонки! */\n  background: #ffb02e22;\n  border: 1px solid #ffb02e;\n}",
            "title": "Использование grid-column: span 2 и grid-column: 1 / -1",
            "explanation": "span 2 объединяет две ячейки для графика, а 1 / -1 гарантирует, что alert-banner займет 100% ширины сетки."
          }
        },
        {
          "title": "Наложение элементов (Grid Overlap) без position: absolute",
          "content": "В CSS Grid несколько элементов могут занимать ОДНУ И ТУ ЖЕ ячейку сетки, накладываясь друг на друга слоями!\n\nПочему это лучше `position: absolute`:\n- При `position: absolute` родитель теряет высоту (Height Collapse), из-за чего нижележащий контент наезжает на баннер.\n- В CSS Grid контейнер автоматически рассчитывает высоту по содержимому обоих слоев!\n\nКак реализовать Grid Overlap:\n1. Задаем одинаковые координаты ячейки для обоих элементов: `grid-area: 1 / 1;` (или `grid-column: 1 / 2; grid-row: 1 / 2;`).\n2. Фоновое изображение: `.banner-img { grid-area: 1 / 1; width: 100%; object-fit: cover; }`.\n3. Текстовый блок поверх: `.banner-text { grid-area: 1 / 1; z-index: 2; align-self: center; justify-self: center; }`.",
          "codeExample": {
            "language": "css",
            "code": "/* Карточка промо-баннера с текстом поверх картинки */\n.hero-card {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n/* Слой 1: Фоновое изображение */\n.hero-bg {\n  grid-area: 1 / 1; /* Первая ячейка */\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n/* Слой 2: Градиентный оверлей */\n.hero-overlay {\n  grid-area: 1 / 1; /* Та же самая ячейка! */\n  background: linear-gradient(to top, rgba(10,14,19,0.9), transparent);\n  z-index: 1;\n}\n\n/* Слой 3: Текст и кнопка */\n.hero-content {\n  grid-area: 1 / 1; /* Та же самая ячейка! */\n  z-index: 2;\n  align-self: end; /* Прижат к низу карточки */\n  padding: 24px;\n  color: #e6edf3;\n}",
            "title": "Grid Overlap: Картинка + Затемнение + Текст в одной ячейке",
            "explanation": "Все 3 слоя привязаны к grid-area: 1 / 1 и упорядочены по z-index без использования position: absolute."
          }
        },
        {
          "title": "Плотная упаковка сетки (grid-auto-flow: dense)",
          "content": "Управление алгоритмом авторазмещения элементов:\n\n1. `grid-auto-flow: row;` (по умолчанию) — элементы заполняют строки слева направо. Если элемент `span 2` не помещается в текущей строке, браузер переносит его на следующую строку, оставляя в предыдущей строке «дыру» (пустую ячейку).\n\n2. **`grid-auto-flow: dense;` (Плотная упаковка)**:\n- Браузер включает умный алгоритм: если в сетке образовалась пустая ячейка, он ищет дальше по DOM-дереву меньшие элементы (размером в 1 ячейку) и **заполняет ими образовавшиеся пустоты**!\n- Идеально для: фотогалерей (Pinterest-style), каталогов с баннерами и медиа-плиток.",
          "codeExample": {
            "language": "css",
            "code": "/* Плотная галерея без дырок */\n.masonry-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  grid-auto-rows: 150px;\n  /* dense заполняет все пустые ячейки маленькими карточками */\n  grid-auto-flow: dense;\n  gap: 12px;\n}\n\n.photo-landscape { grid-column: span 2; }\n.photo-portrait  { grid-row: span 2; }\n.photo-featured  { grid-column: span 2; grid-row: span 2; }",
            "title": "Плотная раскладка плитки через grid-auto-flow: dense",
            "explanation": "grid-auto-flow: dense устраняет дыры в сетке, автоматически переставляя маленькие фотографии в свободные ячейки."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Flexbox и Grid",
          "content": "Для закрепления понимания того, когда использовать Flexbox, а когда Grid, и освоения продвинутых приемов работы с ними, рекомендуем видеоматериалы:\n\n- **[CSS Flexbox vs Grid - Are you using them right? (YouTube)](https://youtu.be/aEj6k-gi9-s?si=nT0KUT5tHhQ0g9vg)** — наглядное практическое руководство от Coding2GO о ключевых различиях одномерных (Flexbox) и двумерных (Grid) сеток и правильном выборе инструментов.\n- **[The Best Flexbox & Grid Tricks You Need to Start Using (YouTube)](https://youtu.be/yNyR_A73eTI?si=huAALpeRrn4To8XX)** — подборка лучших трюков и практических фишек по Flexbox и CSS Grid от Coding2GO для создания современных макетов."
        }
      ],
      "seniorTips": [
        "Используйте `grid-template-areas` для макета всей страницы — это делает код самодокументируемым и позволяет мгновенно менять расположение сайдбаров на мобилках в `@media`.",
        "Для растяжения элементов на всю ширину сетки (Header, Footer, Alert) используйте `grid-column: 1 / -1;` вместо хардкода номеров колонок.",
        "Применяйте Grid Overlap (`grid-area: 1 / 1`) для карточек с текстом поверх картинки — это предотвращает схлопывание высоты, характерное для `position: absolute`.",
        "Используйте `grid-auto-flow: dense` для галерей и каталогов с разноразмерными баннерами, чтобы избежать пустых дыр в сетке."
      ],
      "commonMistakes": [
        {
          "bad": "/* Ошибочная форма grid-template-areas (не прямоугольник) */\n.grid {\n  grid-template-areas:\n    \"header header\"\n    \"sidebar\"\n    \"footer footer\"; /* ❌ Ошибка! Разное число колонок */\n}",
          "good": ".grid {\n  grid-template-areas:\n    \"header  header\"\n    \"sidebar main\"\n    \"footer  footer\"; /* ✅ Ровно по 2 колонки в каждой строке */\n}",
          "reason": "grid-template-areas требует строгой прямоугольной матрицы: каждая строка обязана содержать одинаковое количество ячеек."
        },
        {
          "bad": "/* Использование position: absolute для текста на картинке */\n.card-text { position: absolute; bottom: 0; } /* Высота карточки схлопывается в 0! */",
          "good": ".card-img, .card-text { grid-area: 1 / 1; }",
          "reason": "Grid Overlap автоматически растягивает контейнер по максимальной высоте любого из слоев."
        },
        {
          "bad": "/* Попытка сделать L-образную область в grid-template-areas */\n\"nav main\"\n\"nav nav\" /* ❌ Область nav не может быть L-образной, только прямоугольной! */",
          "good": "/* Разделяйте L-образные зоны на отдельные именованные блоки */",
          "reason": "Спецификация CSS Grid строго запрещает непрямоугольные области в grid-template-areas."
        }
      ],
      "keyTakeaways": [
        "`grid-template-areas` описывает геометрию страницы в виде читаемого ASCII-арт макета.",
        "Элементы привязываются к областям через `grid-area: areaName;`.",
        "`grid-column: 1 / -1` растягивает блок на всю ширину сетки от первой до последней линии.",
        "Grid Overlap (`grid-area: 1 / 1`) позволяет накладывать слои друг на друга без потери высоты контейнера.",
        "`grid-auto-flow: dense` автоматически заполняет дыры в сетке меньшими элементами."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"areas-sandbox\">\n  <div class=\"layout-box\">\n    <header class=\"box-h\">HEADER (1 / -1)</header>\n    <aside class=\"box-s\">SIDEBAR</aside>\n    <main class=\"box-m\">MAIN CONTENT</main>\n    <footer class=\"box-f\">FOOTER</footer>\n  </div>\n</div>",
      "initialCss": ".areas-sandbox { padding: 16px; background: #0a0e13; font-family: monospace; }\n.layout-box {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  grid-template-rows: 40px 100px 35px;\n  grid-template-areas:\n    \"header  header\"\n    \"sidebar main\"\n    \"footer  footer\";\n  gap: 8px;\n  color: #0a0e13;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n}\n.box-h { grid-area: header;  background: #2dff8a; padding: 10px; border-radius: 4px; }\n.box-s { grid-area: sidebar; background: #ffb02e; padding: 10px; border-radius: 4px; }\n.box-m { grid-area: main;    background: #29e7ff; padding: 10px; border-radius: 4px; }\n.box-f { grid-area: footer;  background: #d2a8ff; padding: 8px;  border-radius: 4px; }",
      "initialJs": "console.log('Песочница Grid Areas активна');",
      "instructions": "Практика с Grid Areas:\n1. Измените схему grid-template-areas: поменяйте местами sidebar и main\n2. Добавьте пустую ячейку через точку: 'sidebar . main'\n3. Сделайте карточку с наложением текста поверх фонового цвета через grid-area: 1 / 1"
    },
    "task": {
      "title": "Верстка сложного адаптивного дашборда на grid-template-areas с оверлеем",
      "scenario": "Вам необходимо сверстать дашборд аналитики: шапка header (на всю ширину), сайдбар sidebar слева, основной контент main по центру, блок виджетов widgets справа, и футер footer внизу. Кроме того, внутри main должна быть Hero-карточка с эффектом Grid Overlap (картинка + темный оверлей + текст поверх в ячейке 1 / 1).",
      "criteria": [
        "Использовано свойство grid-template-areas для 3-колоночного макета (sidebar, main, widgets)",
        "Header и Footer растянуты на всю ширину макета",
        "Применен эффект Grid Overlap (картинка и текст в grid-area: 1 / 1) внутри Hero-блока",
        "На мобильных разрешениях (@media max-width: 768px) макет перестраивается в одну колонку через переопределение grid-template-areas"
      ],
      "starterCode": {
        "css": "/* Разработайте стили дашборда на Grid Areas */\n.dashboard-layout {\n}\n.dash-header {\n}\n.dash-sidebar {\n}\n.dash-main {\n}\n.dash-widgets {\n}\n.dash-footer {\n}"
      },
      "hints": [
        "Схема: 'header header header' 'sidebar main widgets' 'footer footer footer'",
        "Для оверлея: .hero-img, .hero-txt { grid-area: 1 / 1; }",
        "На мобилках: grid-template-columns: 1fr; grid-template-areas: 'header' 'main' 'widgets' 'sidebar' 'footer';"
      ],
      "solution": {
        "css": ".dashboard-layout {\n  display: grid;\n  grid-template-columns: 240px 1fr 280px;\n  grid-template-rows: 60px 1fr 40px;\n  grid-template-areas:\n    \"header  header  header\"\n    \"sidebar main    widgets\"\n    \"footer  footer  footer\";\n  min-height: 100vh;\n  gap: 16px;\n  padding: 16px;\n  background: #0a0e13;\n  color: #e6edf3;\n}\n\n.dash-header  { grid-area: header;  background: #161b22; border-radius: 8px; padding: 16px; }\n.dash-sidebar { grid-area: sidebar; background: #161b22; border-radius: 8px; padding: 16px; }\n.dash-main    { grid-area: main;    background: #0d1117; border-radius: 8px; padding: 16px; }\n.dash-widgets { grid-area: widgets; background: #161b22; border-radius: 8px; padding: 16px; }\n.dash-footer  { grid-area: footer;  background: #161b22; border-radius: 8px; padding: 10px; text-align: center; }\n\n/* Hero Banner с Grid Overlap */\n.hero-banner {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 160px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.hero-banner-img { grid-area: 1 / 1; width: 100%; height: 100%; object-fit: cover; }\n.hero-banner-txt { grid-area: 1 / 1; z-index: 2; align-self: center; padding: 20px; color: #2dff8a; font-weight: bold; }\n\n@media (max-width: 900px) {\n  .dashboard-layout {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"widgets\"\n      \"sidebar\"\n      \"footer\";\n  }\n}",
        "explanation": "Дашборд безупречно структурирован: grid-template-areas наглядно описывает 3-колоночный каркас, Hero-баннер использует Grid Overlap без absolute, а адаптация под мобилки выполнена декларативно."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css12-q1",
          "question": "Почему браузер целиком отбросит это объявление?",
          "codeSnippet": "grid-template-areas:\n  \"header header\"\n  \"sidebar main main\"\n  \"footer footer\";",
          "options": [
            "Строки содержат разное число ячеек — матрица обязана оставаться прямоугольной",
            "Имена областей должны заключаться в кавычки по отдельности, а не строкой целиком",
            "Имя `main` совпадает с названием HTML-тега и потому считается зарезервированным",
            "Области `header` и `footer` не могут повторяться дважды внутри одной строки"
          ],
          "correctIndex": 0,
          "explanation": "Схема областей — это буквально таблица, поэтому во всех строках обязано быть одинаковое количество ячеек: здесь две, три и снова две. Достаточно привести первую и последнюю строки к трём ячейкам, повторив имя ещё раз. Повторение имени как раз и есть механизм объединения соседних ячеек в одну область, а любые имена, включая `main`, разрешены."
        },
        {
          "id": "css12-q2",
          "question": "Что сделает запись `grid-column: 1 / -1` с элементом сетки?",
          "options": [
            "Поместит его в первую колонку и скроет все оставшиеся справа от него",
            "Растянет его от первой до последней линии, то есть на всю ширину сетки",
            "Сдвинет элемент на одну колонку назад относительно его места в потоке",
            "Создаст новую неявную колонку в конце сетки и перенесёт элемент туда"
          ],
          "correctIndex": 1,
          "explanation": "Линии сетки нумеруются с обеих сторон: слева направо положительными числами, справа налево — отрицательными, поэтому `-1` всегда указывает на самую последнюю линию, сколько бы колонок ни было. Запись растягивает элемент во всю ширину и, в отличие от жёстко зашитого `1 / 4`, продолжает работать после изменения числа колонок. Так обычно размечают шапку, подвал и полноширинные плашки уведомлений."
        },
        {
          "id": "css12-q3",
          "question": "Текст нужно положить поверх картинки. Чем приём `grid-area: 1 / 1` для обоих слоёв лучше, чем `position: absolute`?",
          "options": [
            "В сетке слои автоматически получают одинаковую прозрачность и мягко сливаются",
            "Абсолютное позиционирование не поддерживает `z-index` внутри grid-контейнера",
            "Абсолютный слой выпадает из потока, и контейнер теряет высоту; в сетке она сохраняется",
            "Абсолютный слой нельзя отцентрировать без `transform`, а в сетке это в принципе невозможно"
          ],
          "correctIndex": 2,
          "explanation": "Абсолютный элемент перестаёт участвовать в расчёте размеров родителя, и карточка схлопывается, если картинка тоже позиционирована — приходится подпирать высоту вручную. Когда оба слоя занимают одну и ту же ячейку сетки, они остаются в потоке, и контейнер честно принимает высоту самого высокого из них. Вдобавок выравнивать содержимое внутри ячейки можно через `align-self` и `justify-self`, без `transform`."
        },
        {
          "id": "css12-q4",
          "question": "Что делает `grid-auto-flow: dense` и какой у этого побочный эффект?",
          "options": [
            "Уплотняет отступы между ячейками; побочный эффект — слипание содержимого соседей",
            "Заполняет дыры элементами, идущими дальше по разметке; порядок на экране расходится с DOM",
            "Сжимает ячейки по содержимому; побочный эффект — строки получаются разной высоты",
            "Отключает неявную сетку; побочный эффект — элементы вне шаблона перестают отображаться"
          ],
          "correctIndex": 1,
          "explanation": "Обычный алгоритм размещения идёт строго по порядку и оставляет пустоты, если очередной широкий элемент не помещается в остаток строки. Режим плотной упаковки возвращается назад и затыкает эти дыры элементами, которые в разметке идут позже. Галерея выглядит аккуратнее, но визуальный порядок перестаёт совпадать с порядком обхода по Tab — как и в случае с `order`, это вопрос доступности."
        },
        {
          "id": "css12-q5",
          "question": "Что означает точка в строке `\"sidebar .\"` внутри `grid-template-areas`?",
          "options": [
            "Пустая ячейка: место в сетке резервируется, но никакой области не присваивается",
            "Ячейка объединяется с соседней слева и образует вместе с ней одну общую область",
            "Разделитель между именами областей внутри одной строки шаблона раскладки",
            "Ссылка на область из предыдущей строки шаблона, продлевающая её на строку вниз"
          ],
          "correctIndex": 0,
          "explanation": "Точка обозначает намеренно пустую ячейку: сетка сохраняет её как место, но ни один элемент туда по имени не попадёт. Подряд идущие точки читаются как несколько пустых ячеек, а `...` тоже допустимо и означает то же самое. Объединение ячеек делается повторением одного имени, а не точкой."
        }
      ]
    }
  },
  {
    "id": "css-13",
    "moduleId": "css",
    "level": 13,
    "title": "Адаптивный дизайн и Media Queries",
    "subtitle": "Mobile First, @media min-width, viewport, clamp(), Container Queries и адаптивные изображения",
    "description": "Освойте полный арсенал адаптивного дизайна: подход Mobile First, систему брейкпоинтов @media min-width, функцию clamp() для плавного масштабирования без медиа-запросов, Container Queries для компонентной адаптивности, адаптивные изображения <picture> и srcset, а также правильную настройку viewport.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "responsive",
      "media-queries",
      "mobile-first",
      "clamp",
      "container-queries",
      "viewport",
      "srcset",
      "breakpoints"
    ],
    "theory": {
      "overview": "Более 60% мирового веб-трафика приходится на смартфоны. Сайт, который выглядит идеально только на мониторе 1920×1080, теряет большинство своей аудитории.\n\nВ этом уроке мы освоим полный арсенал адаптивного дизайна: от классических `@media` запросов с подходом **Mobile First** до революционных современных техник — функции `clamp()`, Container Queries (`@container`) и адаптивных изображений через `<picture>` и `srcset`.",
      "sections": [
        {
          "title": "Подход Mobile First и система брейкпоинтов",
          "content": "Два подхода к адаптивному дизайну:\n\n1. **Desktop First (устаревший подход ❌)**:\n- Базовые стили пишутся для десктопа, затем сужаются через `@media (max-width: ...)`. Проблема: на мобилках загружаются все тяжелые десктопные стили, а потом перезаписываются — это расточительно и медленно.\n\n2. **Mobile First (индустриальный стандарт ✅)**:\n- Базовые CSS-стили (без `@media`) пишутся для самого маленького экрана (смартфон).\n- Стили для более широких экранов РАСШИРЯЮТСЯ через `@media (min-width: ...)` — от меньшего к большему.\n- Преимущества: быстрая загрузка на слабых устройствах, естественная прогрессивность, меньше CSS-кода.\n\n3. Стандартные брейкпоинты (Bootstrap/Tailwind style):\n- `576px` — Ландшафтный телефон (sm)\n- `768px` — Планшет портрет (md)\n- `1024px` — Планшет ландшафт / Ноутбук (lg)\n- `1280px` — Десктоп (xl)\n- `1536px` — Большой экран (2xl)",
          "image": {
            "src": "/images/lessons/css-responsive-media-queries.svg",
            "alt": "Адаптивный дизайн: Mobile First брейкпоинты, clamp(), Container Queries",
            "caption": "Mobile First: базовые стили для мобилок, расширение через min-width. Современные техники: clamp() и Container Queries"
          },
          "codeExample": {
            "language": "css",
            "code": "/* ===== MOBILE FIRST: Базовые стили для смартфонов (0px) ===== */\n.catalog {\n  display: grid;\n  grid-template-columns: 1fr; /* 1 колонка на телефоне */\n  gap: 16px;\n  padding: 16px;\n}\n\n.card {\n  border-radius: 12px;\n  background: #161b22;\n  padding: 16px;\n}\n\n/* ===== ПЛАНШЕТ (768px+) ===== */\n@media (min-width: 768px) {\n  .catalog {\n    grid-template-columns: repeat(2, 1fr); /* 2 колонки */\n    gap: 20px;\n    padding: 24px;\n  }\n}\n\n/* ===== ДЕСКТОП (1024px+) ===== */\n@media (min-width: 1024px) {\n  .catalog {\n    grid-template-columns: repeat(3, 1fr); /* 3 колонки */\n    gap: 24px;\n    padding: 32px;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}",
            "title": "Mobile First каталог карточек: от 1 колонки к 3-м через min-width",
            "explanation": "Базовые стили (без @media) рассчитаны на мобилку с 1 колонкой. По мере расширения экрана добавляются колонки и отступы."
          }
        },
        {
          "title": "Viewport Meta и единицы измерения vw, vh, dvh",
          "content": "Обязательная настройка для корректного отображения на мобильных устройствах:\n\n1. **Viewport Meta-тег (обязательный)**:\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n```\n- `width=device-width` — ширина страницы равна ширине экрана устройства (а не 980px по умолчанию).\n- `initial-scale=1` — начальный масштаб 100%.\n- Без этого тега смартфоны симулируют десктопную ширину ~980px и показывают уменьшенную версию сайта!\n\n2. Единицы измерения вьюпорта:\n- `vw` / `vh` — 1% ширины/высоты окна браузера.\n- `dvh` (Dynamic Viewport Height) — учитывает скрытие/появление адресной строки Safari на iOS! (100vh в Safari может быть длиннее видимого экрана, а 100dvh — точно видимая область).\n- `svh` / `lvh` — Short/Large Viewport Height для предсказуемости.",
          "codeExample": {
            "language": "css",
            "code": "/* Hero-секция на полный экран */\n.hero {\n  min-height: 100dvh; /* dvh учитывает адресную строку Safari iOS! */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Полноэкранный фон с ограничением */\n.fullscreen-bg {\n  width: 100vw;\n  height: 100svh; /* svh — без учета адресной строки */\n}\n\n/* Адаптивный заголовок (размер зависит от ширины экрана) */\n.hero-title {\n  font-size: clamp(1.5rem, 5vw, 3.5rem);\n  /* На экране 320px: 5vw = 16px → clamp выберет 1.5rem (24px)\n     На экране 1920px: 5vw = 96px → clamp ограничит до 3.5rem (56px) */\n}",
            "title": "Единицы vw, dvh и функция clamp() для адаптивной типографики",
            "explanation": "dvh решает проблему 100vh в мобильном Safari (где адресная строка скрывается при скролле), а clamp() плавно масштабирует шрифт."
          }
        },
        {
          "title": "Функция clamp() — адаптивность без медиа-запросов",
          "content": "Революционная CSS-функция, устраняющая до 80% медиа-запросов:\n\n**Синтаксис: `clamp(MIN, PREFERRED, MAX)`**\n- `MIN` — минимальное значение (нижняя граница, обычно в rem).\n- `PREFERRED` — предпочтительное значение (гибкое, обычно в vw).\n- `MAX` — максимальное значение (верхняя граница, обычно в rem).\n\nКак работает:\n- На узких экранах `PREFERRED` (в `vw`) будет маленьким, и clamp() автоматически выберет `MIN`.\n- На средних экранах `PREFERRED` находится между `MIN` и `MAX` — и именно оно применяется.\n- На широких экранах `PREFERRED` превысит `MAX`, и clamp() ограничит значение до `MAX`.\n\nГде использовать:\n- `font-size: clamp(1rem, 2.5vw, 2rem);` — типографика.\n- `padding: clamp(16px, 4vw, 48px);` — отступы.\n- `gap: clamp(12px, 2vw, 32px);` — промежутки в Grid.\n- `max-width: clamp(280px, 90vw, 1200px);` — ширина контейнера.",
          "codeExample": {
            "language": "css",
            "code": "/* Полностью адаптивная карточка БЕЗ единого @media запроса! */\n.fluid-card {\n  /* Ширина: от 280px до 600px, плавно по вьюпорту */\n  width: clamp(280px, 90vw, 600px);\n  margin: 0 auto;\n  \n  /* Отступы: от 16px до 40px */\n  padding: clamp(16px, 4vw, 40px);\n  \n  /* Текст: от 14px до 18px */\n  font-size: clamp(0.875rem, 1.5vw, 1.125rem);\n  \n  /* Заголовок: от 24px до 48px */\n  & h2 {\n    font-size: clamp(1.5rem, 4vw, 3rem);\n    line-height: 1.2;\n  }\n  \n  background: #161b22;\n  border-radius: clamp(8px, 1.5vw, 16px);\n  border: 1px solid #30363d;\n}",
            "title": "Полностью адаптивная карточка на clamp() без единого @media",
            "explanation": "Каждое свойство плавно масштабируется между минимумом и максимумом. На экране 320px текст будет 14px, а на 1920px — 18px, без резких переходов."
          }
        },
        {
          "title": "Container Queries (@container) и адаптивные изображения (srcset, <picture>)",
          "content": "Следующее поколение адаптивности:\n\n1. **Container Queries (`@container`) — CSS Containment Level 3**:\nПроблема классических Media Queries: они реагируют на ширину ВСЕГО ОКНА браузера. Но компонент (карточка, виджет) может размещаться в боковой панели шириной 300px или в основном блоке шириной 900px. При одинаковой ширине окна карточка должна выглядеть по-разному!\n\nContainer Queries решают эту задачу:\n- Компонент адаптируется к размеру СВОЕГО КОНТЕЙНЕРА, а не к размеру экрана.\n- Синтаксис: родитель — `container-type: inline-size;`, стили — `@container (min-width: 400px) { ... }`.\n\n2. **Адаптивные изображения**:\n- `srcset` — набор изображений разных разрешений: браузер автоматически выбирает подходящее по DPR (Device Pixel Ratio: 1x, 2x, 3x).\n- `<picture>` — выбор формата (WebP, AVIF, JPEG) и размера в зависимости от ширины экрана.\n- `sizes` — подсказка браузеру: какую ширину займёт изображение на разных экранах.",
          "codeExample": {
            "language": "css",
            "code": "/* ===== Container Queries ===== */\n/* 1. Контейнер — любой родитель карточки */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* 2. Компактный вид (контейнер < 400px — например, в сайдбаре) */\n.product-card {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n/* 3. Расширенный вид (контейнер >= 400px — в основном блоке) */\n@container card (min-width: 400px) {\n  .product-card {\n    flex-direction: row; /* Горизонтальная раскладка */\n    align-items: center;\n    gap: 20px;\n  }\n  .product-card img {\n    width: 200px;\n    height: 200px;\n    object-fit: cover;\n  }\n}",
            "title": "Container Queries: карточка адаптируется к контейнеру, а не к окну",
            "explanation": "В сайдбаре (300px) карточка будет вертикальной, а в основном блоке (700px) — горизонтальной. Оба варианта на одном экране!"
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: Советы по адаптивному дизайну",
          "content": "Для закрепления лучших практик отзывчивой верстки, использования современных приемов и функций адаптивного дизайна рекомендуем видеоматериалы:\n\n- **[5 CSS Tips & Tricks for better Responsive Web Design (YouTube)](https://youtu.be/2IV08sP9m3U?si=xW6CG_NrwxMlWZOz)** — 5 практических советов и приемов от Coding2GO для создания чистого, гибкого и современного адаптивного интерфейса.\n- **[How to create RESPONSIVE Layouts with CSS GRID (YouTube)](https://youtu.be/S9OiWe5iBYo?si=CPEDbAmSMvXMUeBo)** — практическое руководство от Coding2GO по созданию полностью адаптивных сеток на CSS Grid без громоздких медиа-запросов."
        }
      ],
      "seniorTips": [
        "Всегда используйте подход Mobile First (`@media (min-width: ...)`) — это индустриальный стандарт, обеспечивающий быструю загрузку на слабых устройствах.",
        "Используйте `clamp()` для шрифтов, отступов и ширин — это устраняет до 80% ненужных @media запросов и обеспечивает плавное масштабирование.",
        "Для полноэкранных секций используйте `100dvh` вместо `100vh` — это единственный способ корректно заполнить видимую область в мобильном Safari.",
        "Container Queries (`@container`) — будущее компонентного дизайна: один и тот же компонент автоматически адаптируется под размер родителя, а не экрана."
      ],
      "commonMistakes": [
        {
          "bad": "/* Desktop First — устаревший подход */\n.grid { grid-template-columns: repeat(3, 1fr); }\n@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }",
          "good": "/* Mobile First — современный стандарт */\n.grid { grid-template-columns: 1fr; }\n@media (min-width: 768px) { .grid { grid-template-columns: repeat(3, 1fr); } }",
          "reason": "Mobile First загружает лёгкие стили по умолчанию и расширяет их для крупных экранов. Desktop First заставляет мобилки загрузить и перезаписать тяжёлые стили."
        },
        {
          "bad": ".hero { height: 100vh; } /* На iOS Safari страница длиннее видимой области! */",
          "good": ".hero { height: 100dvh; } /* dvh учитывает динамическую адресную строку Safari */",
          "reason": "100vh на мобильном Safari включает область за адресной строкой, создавая скролл. 100dvh решает проблему."
        },
        {
          "bad": "/* Жесткие пиксели для шрифта — не масштабируется */\nh1 { font-size: 48px; }",
          "good": "h1 { font-size: clamp(1.75rem, 5vw, 3rem); } /* Плавное масштабирование */",
          "reason": "Жесткие пиксели не адаптируются. clamp() обеспечивает плавное и контролируемое изменение от мобилки до десктопа."
        }
      ],
      "keyTakeaways": [
        "Mobile First (`@media min-width`) — индустриальный стандарт адаптивного дизайна.",
        "Viewport Meta (`width=device-width, initial-scale=1`) обязателен для корректного отображения на мобилках.",
        "`clamp(min, preferred, max)` плавно масштабирует шрифты, отступы и размеры без @media.",
        "Container Queries (`@container`) адаптируют компонент к размеру контейнера, а не окна.",
        "`dvh` решает проблему `100vh` в мобильном Safari с динамической адресной строкой."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"responsive-demo\">\n  <div class=\"demo-card\">\n    <h2>Адаптивная карточка</h2>\n    <p>Текст плавно масштабируется через clamp()</p>\n    <span class=\"badge\">Mobile First</span>\n  </div>\n  <div class=\"demo-card\">\n    <h2>Вторая карточка</h2>\n    <p>Измените ширину окна для проверки!</p>\n    <span class=\"badge\">clamp()</span>\n  </div>\n</div>",
      "initialCss": ".responsive-demo {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: clamp(12px, 2vw, 24px);\n  padding: clamp(12px, 3vw, 32px);\n  background: #0a0e13;\n  font-family: system-ui;\n}\n\n.demo-card {\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: clamp(8px, 1.5vw, 16px);\n  padding: clamp(12px, 3vw, 32px);\n  color: #e6edf3;\n}\n\n.demo-card h2 {\n  font-size: clamp(1.1rem, 3vw, 1.8rem);\n  color: #2dff8a;\n  margin: 0 0 8px;\n}\n\n.demo-card p {\n  font-size: clamp(0.8rem, 1.8vw, 1rem);\n  color: #8b949e;\n  margin: 0 0 12px;\n}\n\n.badge {\n  background: #2dff8a22;\n  color: #2dff8a;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n@media (min-width: 600px) {\n  .responsive-demo { grid-template-columns: repeat(2, 1fr); }\n}",
      "initialJs": "console.log('Песочница Responsive Design активна');",
      "instructions": "Практика с адаптивностью:\n1. Измените значения в clamp() и наблюдайте за масштабированием\n2. Добавьте третий брейкпоинт @media (min-width: 900px) с 3 колонками\n3. Попробуйте заменить @media на grid: repeat(auto-fit, minmax(250px, 1fr))"
    },
    "task": {
      "title": "Верстка полностью адаптивного лендинга на Mobile First с clamp() и Container Queries",
      "scenario": "Вам необходимо сверстать адаптивный лендинг учебного курса: Hero-секция на 100dvh с адаптивным заголовком через clamp(), каталог преимуществ на CSS Grid с auto-fit, и карточки-отзывы с Container Queries (горизонтальный вид в широком блоке, вертикальный — в узком).",
      "criteria": [
        "Подход Mobile First с @media (min-width: 768px) и (min-width: 1024px)",
        "Hero-секция использует 100dvh и clamp() для адаптивного заголовка",
        "Каталог использует repeat(auto-fit, minmax(280px, 1fr)) для автоадаптации",
        "Карточки отзывов адаптируются через Container Queries (@container)"
      ],
      "starterCode": {
        "css": "/* Разработайте стили адаптивного лендинга по Mobile First */\n.hero {\n}\n.features-grid {\n}\n.testimonial-wrapper {\n}\n.testimonial-card {\n}"
      },
      "hints": [
        "Hero: min-height: 100dvh; font-size: clamp(2rem, 6vw, 4rem);",
        "Grid: repeat(auto-fit, minmax(280px, 1fr))",
        "Container: .testimonial-wrapper { container-type: inline-size; }"
      ],
      "solution": {
        "css": "/* Hero-секция */\n.hero {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: clamp(24px, 6vw, 64px);\n  background: linear-gradient(135deg, #0a0e13 0%, #161b22 100%);\n}\n\n.hero h1 {\n  font-size: clamp(2rem, 6vw, 4rem);\n  color: #2dff8a;\n  margin-bottom: clamp(12px, 2vw, 24px);\n}\n\n.hero p {\n  font-size: clamp(1rem, 2.5vw, 1.5rem);\n  color: #8b949e;\n  max-width: 600px;\n}\n\n/* Каталог преимуществ (без @media!) */\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: clamp(16px, 3vw, 32px);\n  padding: clamp(24px, 5vw, 64px);\n}\n\n/* Container Queries для отзывов */\n.testimonial-wrapper {\n  container-type: inline-size;\n  container-name: testimonial;\n}\n\n.testimonial-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  background: #161b22;\n  border-radius: 12px;\n  border: 1px solid #30363d;\n}\n\n@container testimonial (min-width: 500px) {\n  .testimonial-card {\n    flex-direction: row;\n    align-items: center;\n    gap: 24px;\n  }\n  .testimonial-card .avatar {\n    width: 80px;\n    height: 80px;\n    flex-shrink: 0;\n  }\n}",
        "explanation": "Лендинг использует все 3 уровня адаптивности: clamp() для плавного масштабирования, auto-fit для автоматической сетки, и Container Queries для компонентной адаптации."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css13-q1",
          "question": "Откуда правильнее брать значения брейкпоинтов для проекта?",
          "options": [
            "Из списка популярных устройств: 375px для телефона, 768px для планшета, 1024px для ноутбука",
            "Из спецификации CSS: она фиксирует четыре стандартных значения ширины экрана",
            "Из самого макета: брейкпоинт ставится там, где раскладка начинает выглядеть плохо",
            "Из настроек используемого фреймворка: менять значения по умолчанию не рекомендуется"
          ],
          "correctIndex": 2,
          "explanation": "Подгонка под конкретные модели устройств устаревает вместе с устройствами и всё равно не покрывает планшеты в альбомной ориентации, разделённый экран и окна произвольной ширины. Практичный подход — тянуть окно и ставить брейкпоинт там, где колонки становятся слишком узкими или строка слишком длинной. Наборы значений из Bootstrap и Tailwind — разумная отправная точка, но не догма, и спецификация никаких чисел не фиксирует."
        },
        {
          "id": "css13-q2",
          "question": "Чем единица `dvh` отличается от `svh` и `lvh`?",
          "options": [
            "`dvh` меняется вместе с адресной строкой, а `svh` и `lvh` фиксируют её крайние положения",
            "`dvh` учитывает плотность пикселей, тогда как `svh` и `lvh` — физический размер экрана",
            "`dvh` работает только в портретной ориентации, а остальные две — в альбомной",
            "`dvh` измеряется в процентах, а `svh` и `lvh` — в абсолютных пикселях устройства"
          ],
          "correctIndex": 0,
          "explanation": "Мобильные браузеры прячут адресную строку при прокрутке, из-за чего видимая высота непостоянна. `svh` соответствует наименьшей высоте, то есть с развёрнутой панелью, `lvh` — наибольшей, а `dvh` меняется динамически вслед за интерфейсом. Для полноэкранной секции обычно берут `100dvh`: старый `100vh` в Safari равен большему значению и порождает лишнюю прокрутку."
        },
        {
          "id": "css13-q3",
          "question": "В `srcset` перечислены файлы с дескрипторами ширины `w`. Зачем дополнительно нужен атрибут `sizes`?",
          "options": [
            "Он сообщает браузеру, какую ширину займёт картинка в макете, ещё до расчёта стилей",
            "Он задаёт максимальный вес файла, который браузеру разрешено скачивать по сети",
            "Он перечисляет допустимые форматы изображений в порядке убывания приоритета",
            "Он включает ленивую загрузку для файлов крупнее указанного в нём размера"
          ],
          "correctIndex": 0,
          "explanation": "Дескрипторы `w` описывают, какой ширины сами файлы, но выбрать из них подходящий браузер может, только зная, сколько места картинка займёт в вёрстке. Решение принимается в самом начале загрузки, когда CSS ещё не применён, поэтому разметка обязана сообщить это отдельно: например, `sizes=\"(min-width: 768px) 50vw, 100vw\"`. Без `sizes` браузер считает, что картинка шириной во весь экран, и качает избыточно тяжёлый файл."
        },
        {
          "id": "css13-q4",
          "question": "Одна и та же карточка товара стоит в широком каталоге и в узком сайдбаре. Почему медиа-запросы здесь не помогают?",
          "options": [
            "Они измеряют окно, а не место, отведённое карточке; нужен запрос `@container`",
            "Медиа-запросы не поддерживают вложенность и потому не срабатывают внутри компонента",
            "Медиа-запросы применяются только к корневым элементам страницы и их прямым детям",
            "Они срабатывают однократно при загрузке и не реагируют на изменение размеров"
          ],
          "correctIndex": 0,
          "explanation": "Окно широкое в обоих случаях, поэтому медиа-запрос одинаково включает «десктопный» вариант карточки — и в сайдбаре шириной 300 пикселей она разваливается. Контейнерные запросы решают ровно эту задачу: родитель объявляется через `container-type: inline-size`, и правила внутри `@container (min-width: 400px)` смотрят на его ширину, а не на ширину экрана. Компонент становится по-настоящему переносимым."
        },
        {
          "id": "css13-q5",
          "question": "Что произойдёт со страницей на смартфоне, если забыть метатег `viewport`?",
          "options": [
            "Браузер применит масштаб 1:1, но заблокирует возможность зумирования пальцами",
            "Медиа-запросы перестанут работать полностью, останутся только базовые стили",
            "Страница отрендерится в виртуальном окне около 980px и будет целиком уменьшена",
            "Страница займёт ширину экрана, однако текст будет отрисован системным шрифтом"
          ],
          "correctIndex": 2,
          "explanation": "Мобильный браузер по умолчанию притворяется широким экраном около 980 пикселей, чтобы старые нерезиновые сайты не разъезжались, а потом вписывает результат в физический экран. Текст получается микроскопическим, а медиа-запросы сравниваются именно с этой виртуальной шириной, поэтому мобильные правила не включаются. Метатег `width=device-width, initial-scale=1` сообщает браузеру, что сайт адаптивен, и отменяет подмену."
        }
      ]
    }
  },
  {
    "id": "css-14",
    "moduleId": "css",
    "level": 14,
    "title": "CSS Переменные (Custom Properties) и Дизайн-системы",
    "subtitle": ":root, var(), каскад, fallback, переключение тем Dark/Light и управление через JavaScript",
    "description": "Освойте фундамент современных дизайн-систем — CSS Custom Properties: объявление глобальных дизайн-токенов в :root, локальный каскад и переопределение переменных в дочерних блоках, архитектуру бесшовного переключения тем (Dark / Light / High-Contrast) и реактивное управление стилями через JavaScript в реальном времени.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "css-variables",
      "custom-properties",
      "themes",
      "dark-mode",
      "design-systems",
      "tokens",
      "javascript-css"
    ],
    "theory": {
      "overview": "CSS Custom Properties (пользовательские свойства, или переменные CSS) — это фундаментальная технология, изменившая подход к стилизации веб-приложений.\n\nВ отличие от статических переменных препроцессоров (Sass/SCSS), которые вычисляются один раз при сборке проекта, **CSS-переменные живут в DOM-дереве браузера в рантайме**! Они подчиняются правилам каскада и наследования, мгновенно реагируют на изменение атрибутов (Dark/Light темы) и могут динамически изменяться из JavaScript с производительностью 60–120 FPS.",
      "sections": [
        {
          "title": "Синтаксис, объявление в :root и функция var()",
          "content": "Как устроены CSS-переменные:\n\n1. **Объявление переменных (`--имя-переменной`)**:\n- Имя переменной ВСЕГДА начинается с двух дефисов: `--primary-color: #2dff8a;`.\n- Переменные **чувствительны к регистру** (`--color` и `--Color` — это две разные переменные!).\n- Псевдокласс `:root` представляет корневой элемент документа (`<html>`) и служит глобальным хранилищем дизайн-токенов всего сайта.\n\n2. **Использование через функцию `var()`**:\n- `color: var(--primary-color);`\n- **Fallback (значение по умолчанию)**: второй аргумент `var(--primary-color, #ffffff)` применяется, если переменная не была объявлена.\n- Цепочки fallback: `var(--accent, var(--primary, #2dff8a))`.\n\n3. Почему CSS-переменные превосходят Sass-переменные ($color):\n- Sass-переменные компилируются в фиксированные цвета на этапе сборки.\n- CSS Custom Properties вычисляются браузером в реальном времени и мгновенно перекрашивают интерфейс без перезагрузки CSS!",
          "image": {
            "src": "/images/lessons/css-custom-properties-themes.svg",
            "alt": "CSS Custom Properties: дизайн-токены, переключение тем и управление через JS",
            "caption": "CSS Custom Properties: токены в :root, переключение тем через data-theme, локальный каскадный оверрайд и динамическое управление из JS"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Глобальная система дизайн-токенов в :root */\n:root {\n  /* Цветовая палитра */\n  --color-brand: #2dff8a;\n  --color-brand-glow: rgba(45, 255, 138, 0.25);\n  --color-bg-base: #0a0e13;\n  --color-bg-surface: #161b22;\n  --color-text-primary: #e6edf3;\n  --color-text-muted: #8b949e;\n  \n  /* Типографика и сетка */\n  --font-main: 'JetBrains Mono', monospace;\n  --space-unit: 8px;\n  --radius-md: 12px;\n  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/* Использование дизайн-токенов в компонентах */\n.btn-primary {\n  background: var(--color-brand);\n  color: var(--color-bg-base);\n  font-family: var(--font-main);\n  padding: calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3);\n  border-radius: var(--radius-md);\n  transition: box-shadow var(--transition-fast);\n}\n\n.btn-primary:hover {\n  box-shadow: 0 0 20px var(--color-brand-glow);\n}",
            "title": "Система дизайн-токенов в :root и расчет отступов через calc()",
            "explanation": "Дизайн-токены в :root стандартизируют отступы, цвета и анимации. Изменение одного токена в :root автоматически обновляет сотни компонентов."
          }
        },
        {
          "title": "Каскад, область видимости (Scope) и локальное переопределение",
          "content": "CSS-переменные наследуются дочерними элементами в DOM-дереве:\n\n1. **Локальный оверрайд (Local Override)**:\n- Если объявить переменную внутри класса `.card { --accent: #ffb02e; }`, то для всех вложенных элементов `.card .btn` значение `var(--accent)` будет равно `#ffb02e`, а для всего остального сайта — значением из `:root`!\n\n2. **Устранение дублирования CSS-классов**:\n- Вместо создания десятков классов-модификаторов (`.btn-danger`, `.btn-success`, `.btn-warning` с дублированием всех правил padding/border/hover), мы объявляем ОДИН базовый класс кнопки `.btn { background: var(--btn-color); }`, а модификаторы меняют ТОЛЬКО одну переменную: `.btn-danger { --btn-color: #f85149; }`!",
          "codeExample": {
            "language": "css",
            "code": "/* Базовый компонент кнопки */\n.btn {\n  --btn-bg: var(--color-brand);\n  --btn-text: #0a0e13;\n  \n  background: var(--btn-bg);\n  color: var(--btn-text);\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n/* Модификаторы переопределяют ТОЛЬКО значение переменной! */\n.btn-danger  { --btn-bg: #f85149; --btn-text: #ffffff; }\n.btn-warning { --btn-bg: #ffb02e; --btn-text: #0a0e13; }\n.btn-info    { --btn-bg: #29e7ff; --btn-text: #0a0e13; }\n\n/* Карточка с переопределением цвета всех вложенных кнопок */\n.danger-zone {\n  --color-brand: #f85149; /* Все кнопки внутри автоматически станут красными! */\n  border: 1px solid var(--color-brand);\n  padding: 24px;\n}",
            "title": "Паттерн локального переопределения переменных (Local Scope)",
            "explanation": "Вместо десятков строк повторяющегося CSS-кода модификаторы состоят из 1 строки переопределения переменной."
          }
        },
        {
          "title": "Архитектура темной и светлой тем (Theming Engine)",
          "content": "Как построить промышленную систему переключения тем:\n\n1. **Селекторы тем через Data-атрибуты**:\n- Переключение атрибута `<html data-theme=\"dark\">` на `<html data-theme=\"light\">` мгновенно меняет значения всех переменных.\n\n2. **Поддержка системной темы (`prefers-color-scheme`)**:\n- Медиа-запрос `@media (prefers-color-scheme: dark)` позволяет сайту автоматически повторять выбор пользователя в настройках Windows/macOS/iOS/Android.\n\n3. Цветовые пространства OKLCH и HSL:\n- Использование современных цветовых моделей позволяет генерировать оттенки динамически: `--primary-h: 150; --color-brand: hsl(var(--primary-h), 100%, 50%);`.",
          "codeExample": {
            "language": "css",
            "code": "/* 1. Светлая тема (дефолтная) */\n:root, [data-theme=\"light\"] {\n  --bg-app: #ffffff;\n  --bg-surface: #f8fafc;\n  --text-main: #0f172a;\n  --text-muted: #64748b;\n  --border-color: #e2e8f0;\n  --color-accent: #2563eb;\n}\n\n/* 2. Тёмная тема */\n[data-theme=\"dark\"] {\n  --bg-app: #0a0e13;\n  --bg-surface: #161b22;\n  --text-main: #e6edf3;\n  --text-muted: #8b949e;\n  --border-color: #30363d;\n  --color-accent: #2dff8a;\n}\n\n/* 3. Автоматическая системная тема при отсутствии явного выбора */\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme]) {\n    --bg-app: #0a0e13;\n    --bg-surface: #161b22;\n    --text-main: #e6edf3;\n    --text-muted: #8b949e;\n    --border-color: #30363d;\n    --color-accent: #2dff8a;\n  }\n}\n\n/* Все элементы сайта используют ТОЛЬКО переменные */\nbody {\n  background-color: var(--bg-app);\n  color: var(--text-main);\n  transition: background-color 0.3s ease, color 0.3s ease;\n}",
            "title": "Полноценный Theming Engine с поддержкой data-theme и prefers-color-scheme",
            "explanation": "При смене data-theme браузер плавно интерполирует цвета благодаря transition на body."
          }
        },
        {
          "title": "Динамическое управление CSS-переменными через JavaScript",
          "content": "JavaScript имеет полный доступ к CSS Custom Properties в рантайме:\n\n1. **Установка значения**:\n- `document.documentElement.style.setProperty('--primary-color', '#ff2bd6');` — глобально на всем сайте!\n- `element.style.setProperty('--mouse-x', `${x}px`);` — на конкретном элементе.\n\n2. **Чтение значения**:\n- `getComputedStyle(element).getPropertyValue('--color-brand').trim();`\n\n3. Практические применения связки JS + CSS Variables:\n- **Интерактивное свечение за курсором мыши (Radial Glow Effect)**.\n- **Индикатор прогресса чтения статьи при скролле**.\n- **Кастомные ползунки громкости/яркости**.",
          "codeExample": {
            "language": "javascript",
            "code": "// Эффект интерактивного неонового свечения карточки за курсором\nconst card = document.querySelector('.interactive-card');\n\ncard.addEventListener('mousemove', (e) => {\n  const rect = card.getBoundingClientRect();\n  const x = e.clientX - rect.left;\n  const y = e.clientY - rect.top;\n  \n  // Передаем точные координаты мыши прямо в CSS переменные элемента!\n  card.style.setProperty('--mouse-x', `${x}px`);\n  card.style.setProperty('--mouse-y', `${y}px`);\n});\n\n/* В CSS карточки используем эти координаты для градиента:\n.interactive-card {\n  background: radial-gradient(\n    600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),\n    rgba(45, 255, 138, 0.15),\n    transparent 40%\n  ), #161b22;\n}\n*/",
            "title": "Связка JS и CSS: передача координат мыши в CSS Custom Properties",
            "explanation": "JavaScript выполняет минимум работы (только обновляет 2 переменные), а отрисовку тяжелого радиального градиента берет на себя GPU браузера."
          }
        }
      ],
      "seniorTips": [
        "Стройте архитектуру проекта на CSS Custom Properties с самого первого дня: все цвета, радиусы, шрифты и отступы должны быть дизайн-токенами в `:root`.",
        "Для переключения тем используйте селектор `[data-theme=\"dark\"]` на элементе `<html>` — это позволяет мгновенно менять тему одной строчкой `document.documentElement.dataset.theme = 'dark'`.",
        "Вместо создания десятков громоздких классов-модификаторов меняйте только значение переменной: `.btn-danger { --btn-bg: red; }`.",
        "Для интерактивных визуальных эффектов (параллакс, свечение за мышью) передавайте координаты в CSS-переменные — это разгружает JavaScript и даёт 120 FPS анимацию на GPU."
      ],
      "commonMistakes": [
        {
          "bad": "/* Забыт двойной дефис -- при объявлении */\n:root {\n  primary-color: #2dff8a; /* ❌ Браузер проигнорирует это как неизвестное свойство! */\n}",
          "good": ":root {\n  --primary-color: #2dff8a; /* ✅ С двумя дефисами в начале */\n}",
          "reason": "Спецификация CSS строго требует, чтобы имя пользовательского свойства начиналось с двух дефисов --."
        },
        {
          "bad": "/* Прямой хардкод цветов в темной теме вместо переопределения переменных */\n[data-theme=\"dark\"] .card { background: #161b22; }\n[data-theme=\"dark\"] .header { background: #0a0e13; } /* ❌ Придется переписать 500 селекторов! */",
          "good": "/* Меняем только значения переменных в одном месте */\n[data-theme=\"dark\"] {\n  --bg-card: #161b22;\n  --bg-header: #0a0e13;\n}",
          "reason": "Переопределение переменных в селекторе темы централизует стили. Компонентам вообще не нужно знать о существовании темной темы."
        },
        {
          "bad": "/* Ошибка регистра букв */\n:root { --mainColor: #2dff8a; }\n.text { color: var(--maincolor); /* ❌ undefined! Регистр важен! */ }",
          "good": ":root { --main-color: #2dff8a; }\n.text { color: var(--main-color); }",
          "reason": "CSS Custom Properties чувствительны к регистру символов (case-sensitive)."
        }
      ],
      "keyTakeaways": [
        "CSS Custom Properties (`--var`) живут в DOM-дереве в рантайме и поддерживают каскад и наследование.",
        "Функция `var(--name, fallback)` поддерживает безопасные значения по умолчанию.",
        "Переключение тем реализуется через смену переменных в `[data-theme=\"dark\"]` и `@media (prefers-color-scheme)`.",
        "JavaScript может читать и записывать CSS-переменные в реальном времени через `setProperty()`.",
        "Локальное переопределение переменных сокращает объем CSS-кода в разы."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"theme-sandbox\" id=\"sandbox-root\" data-theme=\"dark\">\n  <div class=\"theme-header\">\n    <h3>Дизайн-система на CSS Variables</h3>\n    <button id=\"theme-toggle-btn\" class=\"btn\">Сменить тему (Dark/Light)</button>\n  </div>\n  <div class=\"cards-grid\">\n    <div class=\"card\">\n      <h4>Стандартная карточка</h4>\n      <p>Использует токен --accent-color</p>\n      <button class=\"btn btn-action\">Действие</button>\n    </div>\n    <div class=\"card card-danger\">\n      <h4>Опасная зона</h4>\n      <p>Локальный оверрайд: --accent-color</p>\n      <button class=\"btn btn-action\">Удалить</button>\n    </div>\n  </div>\n</div>",
      "initialCss": ".theme-sandbox {\n  --bg-app: #ffffff;\n  --bg-card: #f8fafc;\n  --text-main: #0f172a;\n  --text-muted: #64748b;\n  --border: #e2e8f0;\n  --accent-color: #2563eb;\n  --btn-text: #ffffff;\n  \n  padding: 20px;\n  background: var(--bg-app);\n  color: var(--text-main);\n  font-family: monospace;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.theme-sandbox[data-theme=\"dark\"] {\n  --bg-app: #0a0e13;\n  --bg-card: #161b22;\n  --text-main: #e6edf3;\n  --text-muted: #8b949e;\n  --border: #30363d;\n  --accent-color: #2dff8a;\n  --btn-text: #0a0e13;\n}\n\n.theme-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }\n.cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\n.card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 16px;\n  border-radius: 8px;\n}\n.card p { color: var(--text-muted); font-size: 12px; margin: 8px 0 12px; }\n\n/* Локальный оверрайд */\n.card-danger {\n  --accent-color: #f85149;\n  --btn-text: #ffffff;\n  border-color: var(--accent-color);\n}\n\n.btn {\n  background: var(--accent-color);\n  color: var(--btn-text);\n  border: none;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-weight: bold;\n  cursor: pointer;\n}",
      "initialJs": "const root = document.getElementById('sandbox-root');\nconst btn = document.getElementById('theme-toggle-btn');\n\nbtn.onclick = () => {\n  const current = root.getAttribute('data-theme');\n  const next = current === 'dark' ? 'light' : 'dark';\n  root.setAttribute('data-theme', next);\n  btn.textContent = `Текущая: ${next.toUpperCase()}`;\n};",
      "instructions": "Практика с CSS-переменными:\n1. Нажмите 'Сменить тему' — всё приложение плавно переключится между Dark и Light\n2. Обратите внимание: кнопка в 'Опасной зоне' автоматически красная благодаря локальному оверрайду\n3. Попробуйте добавить третью тему [data-theme='cyberpunk'] с неоновыми цветами"
    },
    "task": {
      "title": "Создание многоуровневой дизайн-системы с темами и интерактивным JS-свечением",
      "scenario": "Вам необходимо спроектировать дизайн-систему на CSS Custom Properties: объявить палитру в :root, реализовать поддержку тем [data-theme=\"light\"] и [data-theme=\"dark\"], создать компонент интерактивной карточки со свечением за курсором мыши через JS (переменные --mouse-x, --mouse-y) и реализовать локальные модификаторы кнопок.",
      "criteria": [
        "Объявлены дизайн-токены в :root и переопределены для [data-theme=\"dark\"]",
        "Реализованы компоненты карточки и кнопки, использующие исключительно CSS-переменные",
        "Реализован эффект свечения карточки с динамической передачей координат мыши из JS",
        "Применен паттерн локального оверрайда для карточки с предупреждением"
      ],
      "starterCode": {
        "css": "/* Разработайте систему дизайн-токенов и стили карточек */\n:root {\n}\n[data-theme=\"dark\"] {\n}\n.glow-card {\n}\n.glow-btn {\n}",
        "js": "// Реализуйте передачу координат мыши в CSS переменные карточки"
      },
      "hints": [
        "В :root: --bg-page, --bg-card, --text, --accent, --glow-color",
        "В JS: card.style.setProperty('--mouse-x', `${e.offsetX}px`);",
        "В CSS свечения: radial-gradient(circle at var(--mouse-x, 0) var(--mouse-y, 0), var(--glow-color), transparent 60%)"
      ],
      "solution": {
        "css": ":root {\n  --bg-page: #ffffff;\n  --bg-card: #f8fafc;\n  --text-main: #0f172a;\n  --text-muted: #64748b;\n  --accent: #2563eb;\n  --accent-text: #ffffff;\n  --glow: rgba(37, 99, 235, 0.15);\n}\n\n[data-theme=\"dark\"] {\n  --bg-page: #0a0e13;\n  --bg-card: #161b22;\n  --text-main: #e6edf3;\n  --text-muted: #8b949e;\n  --accent: #2dff8a;\n  --accent-text: #0a0e13;\n  --glow: rgba(45, 255, 138, 0.2);\n}\n\n.glow-card {\n  position: relative;\n  background: radial-gradient(\n    400px circle at var(--mouse-x, -999px) var(--mouse-y, -999px),\n    var(--glow),\n    transparent 70%\n  ), var(--bg-card);\n  border: 1px solid var(--accent);\n  border-radius: 12px;\n  padding: 24px;\n  color: var(--text-main);\n  overflow: hidden;\n}\n\n.glow-btn {\n  background: var(--accent);\n  color: var(--accent-text);\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n}",
        "js": "const card = document.querySelector('.glow-card');\nif (card) {\n  card.addEventListener('mousemove', (e) => {\n    const rect = card.getBoundingClientRect();\n    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);\n    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);\n  });\n}",
        "explanation": "Дизайн-система полностью изолирована и масштабируема: смена темы перекрашивает карточку и кнопку, а JS-свечение работает плавно за счет GPU-рендеринга радиального градиента."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css14-q1",
          "question": "Почему тему нельзя переключить на лету, если все цвета заданы переменными Sass?",
          "options": [
            "Sass-переменные подставляются при сборке, и в готовом CSS их уже не существует",
            "Sass-переменные не наследуются дочерними элементами по дереву документа",
            "Sass-переменные не поддерживают запись цветов в форматах `hsl` и `oklch`",
            "Sass-переменные доступны только внутри того файла, в котором объявлены"
          ],
          "correctIndex": 0,
          "explanation": "Препроцессор работает до того, как код попадёт в браузер: на выходе получается обычный CSS с уже подставленными значениями, менять там нечего. Пользовательские свойства CSS живут в дереве документа во время работы страницы, наследуются вниз, подчиняются каскаду и доступны из JavaScript. Поэтому токены дизайн-системы сегодня держат именно в них, оставляя препроцессору миксины и вложенность."
        },
        {
          "id": "css14-q2",
          "question": "Какой цвет применится, если `--btn-color` не объявлена, а `--brand` равна `red`?",
          "codeSnippet": ".btn { color: var(--btn-color, var(--brand, #2dff8a)); }",
          "options": [
            "`#2dff8a` — при отсутствии первой переменной сразу берётся последнее значение цепочки",
            "`red` — запасные значения проверяются по очереди, и переменная `--brand` найдена",
            "Свойство будет пропущено: вложенные вызовы `var()` спецификацией не поддерживаются",
            "Цвет сбросится в `unset` и унаследуется от ближайшего родительского элемента"
          ],
          "correctIndex": 1,
          "explanation": "Второй аргумент `var()` — это просто значение, и внутри него спокойно помещается ещё один вызов `var()`. Цепочка разбирается слева направо: первой переменной нет, поэтому берётся запасной вариант, а там находится объявленная `--brand`, и до `#2dff8a` дело не доходит. Такая многоуровневая подстановка — стандартный приём: токен компонента, затем токен темы, затем жёсткий запасной цвет."
        },
        {
          "id": "css14-q3",
          "question": "Как из JavaScript изменить глобальную CSS-переменную и как прочитать её текущее значение?",
          "options": [
            "Записать `documentElement.style.setProperty`, прочитать `getComputedStyle().getPropertyValue`",
            "Записать `document.style['--color']`, прочитать через метод `document.style.getVar`",
            "Записать через `CSS.variables.set`, прочитать через парный метод `CSS.variables.get`",
            "Записать в `documentElement.dataset`, прочитать через `element.style.color`"
          ],
          "correctIndex": 0,
          "explanation": "Запись идёт во встроенные стили корневого элемента: `document.documentElement.style.setProperty('--color', 'red')`. Читать оттуда же бесполезно, если переменная объявлена в таблице стилей, — нужны вычисленные стили: `getComputedStyle(document.documentElement).getPropertyValue('--color')`. Через точечную нотацию пользовательские свойства недоступны из-за дефисов в имени, а объекта `CSS.variables` в платформе нет."
        },
        {
          "id": "css14-q4",
          "question": "Почему тему переключают атрибутом на теге `<html>`, а не классом на каждом компоненте?",
          "options": [
            "Переменные наследуются вниз по дереву, поэтому достаточно переопределить их в одной точке",
            "Классы на компонентах медленнее обрабатываются селекторным движком браузера",
            "Атрибуты обладают более высокой специфичностью, чем классы, и всегда побеждают в каскаде",
            "Класс компонента нельзя поменять из JavaScript без перерисовки всего дерева документа"
          ],
          "correctIndex": 0,
          "explanation": "Пользовательские свойства наследуются, поэтому блок `[data-theme=\"dark\"] { --bg: #0a0e13; ... }` на корне мгновенно меняет значения во всём поддереве. Компоненты продолжают ссылаться на те же имена токенов и вообще ничего не знают о существовании тем — переключение сводится к одной строке в JavaScript. Специфичность у атрибута и класса, к слову, одинаковая."
        },
        {
          "id": "css14-q5",
          "question": "Переменная объявлена внутри правила `.card { --gap: 12px }`. Где её можно использовать?",
          "options": [
            "Везде на странице: пользовательские свойства по своей природе всегда глобальны",
            "Только в том же правиле `.card`: наследование на такие свойства не распространяется",
            "Внутри `.card` и во всех её потомках — переменная наследуется вниз по дереву",
            "Везде, кроме псевдоэлементов: они пользовательские свойства не получают"
          ],
          "correctIndex": 2,
          "explanation": "Пользовательское свойство подчиняется обычным правилам наследования: оно видно элементу, где объявлено, и всему его поддереву, включая псевдоэлементы, но недоступно снаружи. Глобальными переменные становятся, когда их объявляют в `:root`. Локальная область видимости — сильная сторона механизма: она позволяет переопределить один токен внутри компонента вместо десятка классов-модификаторов."
        }
      ]
    }
  },
  {
    "id": "css-15",
    "moduleId": "css",
    "level": 15,
    "title": "CSS Трансформации: 2D и 3D Transform, Матрицы и GPU-композитинг",
    "subtitle": "translate, scale, rotate, skew, transform-origin, perspective, preserve-3d, backface-visibility и 60 FPS на GPU",
    "description": "Освойте пространственные трансформации в CSS: 2D-преобразования (translate, rotate, scale, skew), точку трансформации transform-origin, 3D-сцены (perspective, transform-style: preserve-3d, backface-visibility: hidden), эффект переворачивающейся 3D-карточки (Card Flip) и аппаратный GPU-композитинг со скоростью 60–120 FPS.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "css-transform",
      "2d-transform",
      "3d-transform",
      "perspective",
      "preserve-3d",
      "card-flip",
      "gpu-acceleration",
      "matrix"
    ],
    "theory": {
      "overview": "Свойство `transform` — самый мощный инструмент для создания плавных и высокопроизводительных визуальных эффектов в веб-дизайне.\n\nВ отличие от изменения геометрических свойств (`top`, `left`, `margin`, `width`, `height`), которые вызывают тяжелый перерасчет макета страницы (**Reflow / Layout Thrashing**) и перерисовку (**Repaint**), трансформации `transform` обрабатываются **напрямую графическим процессором (GPU) на отдельном композитном слое** со стабильной частотой 60–120 кадров в секунду.\n\nВ этом уроке мы изучим полный спектр 2D и 3D трансформаций, принципы работы с перспективой и научимся создавать сложные 3D-интерфейсы.",
      "sections": [
        {
          "title": "2D-трансформации и аппаратное ускорение на GPU",
          "content": "Четыре базовые функции 2D-трансформаций:\n\n1. **`translate(X, Y)` (Смещение)**:\n- `transform: translate(20px, -10px);` или раздельно `translateX(50%)`, `translateY(100px)`.\n- **Ключевое отличие от `top / left`**: процентные значения `translate(-50%, -50%)` рассчитываются от **СОБСТВЕННОГО размера элемента**, а не от размера родительского контейнера! Это делает `translate` идеальным для центрирования.\n- Не сдвигает соседние элементы в потоке документа.\n\n2. **`scale(X, Y)` (Масштабирование)**:\n- `transform: scale(1.1);` — увеличение на 10%.\n- `transform: scaleX(-1);` — зеркальное отражение по горизонтали!\n\n3. **`rotate(deg | rad | turn)` (Вращение)**:\n- `transform: rotate(45deg);` или `rotate(0.5turn);` (половина оборота на 180°).\n\n4. **`skew(X, Y)` (Скос)**:\n- `transform: skewX(15deg);` — наклон граней для создания динамичных параллелограммов и скошенных неоновых бейджей.\n\n5. **Почему GPU любит transform**:\n- Изменение `transform` и `opacity` не триггерит Reflow (перерасчет геометрии DOM). Браузер выносит элемент на текстуру GPU и просто двигает/крутит эту текстуру на экране.",
          "image": {
            "src": "/images/lessons/css-transform-2d-3d.svg",
            "alt": "CSS Трансформации: 2D и 3D Transform, perspective и GPU композитинг",
            "caption": "2D/3D Transform: translate/scale/rotate, порядок функций, perspective, preserve-3d и аппаратный GPU композитинг"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Идеальное абсолютное центрирование через translate */\n.modal-window {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  /* -50% смещает ровно на половину собственной ширины и высоты модала! */\n  transform: translate(-50%, -50%);\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  border-radius: 12px;\n  padding: 24px;\n}\n\n/* Интерактивная карточка с микро-анимацией на GPU */\n.interactive-card {\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform; /* Подсказка браузеру вынести слой на GPU */\n}\n\n.interactive-card:hover {\n  /* Комбинированная трансформация: подъем на 6px и легкое увеличение на 3% */\n  transform: translateY(-6px) scale(1.03);\n}",
            "title": "Центрирование через translate(-50%, -50%) и hover-эффект на GPU",
            "explanation": "translate(-50%, -50%) гарантирует безупречное центрирование модалки любого размера, а hover-анимация работает на GPU без лагов."
          }
        },
        {
          "title": "Точка трансформации (transform-origin) и порядок применения функций",
          "content": "Управление центром и очередностью трансформаций:\n\n1. **Свойство `transform-origin`**:\n- Задает опорную точку (якорь), относительно которой происходят поворот, масштабирование и скос.\n- По умолчанию: `transform-origin: 50% 50%` (точный геометрический центр элемента).\n- Ключевые слова: `top left`, `center bottom`, `right center` или точные пиксели `transform-origin: 0 0;`.\n- Примеры: часы (стрелка вращается вокруг `transform-origin: bottom center;`), открывающаяся дверь (`transform-origin: left center;`).\n\n2. **Критическое правило: Порядок функций имеет значение!**\n- Функции в свойстве `transform` применяются **СПРАВА НАЛЕВО** (матричное умножение):\n  `transform: rotate(45deg) translateX(100px);` сначала поворачивает локальные оси координат элемента на 45 градусов, а затем сдвигает элемент на 100px вдоль **УЖЕ ПОВЕРНУТОЙ** оси X!\n  `transform: translateX(100px) rotate(45deg);` сначала сдвигает элемент вправо, а затем вращает его на месте.",
          "codeExample": {
            "language": "css",
            "code": "/* Стрелка часов (вращение вокруг нижнего края) */\n.clock-hand {\n  width: 4px;\n  height: 80px;\n  background: #2dff8a;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  /* Точка вращения в самом низу стрелки */\n  transform-origin: bottom center;\n  transform: rotate(90deg); /* 15 минут / 3 часа */\n}\n\n/* Выпадающее меню с анимацией раскрытия от левого верхнего угла */\n.dropdown-menu {\n  transform-origin: top left;\n  transform: scale(0);\n  opacity: 0;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n\n.dropdown-menu.open {\n  transform: scale(1);\n  opacity: 1;\n}",
            "title": "Использование transform-origin для анимации стрелки и выпадающего меню",
            "explanation": "transform-origin: bottom center заставляет стрелку вращаться вокруг своей нижней оси, создавая реалистичный циферблат."
          }
        },
        {
          "title": "3D-пространство в CSS: perspective, preserve-3d и rotateX/Y/Z",
          "content": "Переход в трехмерное пространство (3D CSS):\n\n1. **`perspective` (Глубина сцены)**:\n- Задается на **родительском контейнере**: `.scene { perspective: 1000px; }`.\n- Определяет расстояние от глаз зрителя до плоскости экрана.\n- **Чем МЕНЬШЕ значение perspective** (например, 300px), тем ближе наблюдатель и тем сильнее искажение (агрессивный 3D-эффект).\n- **Чем БОЛЬШЕ значение** (1500px), тем дальше наблюдатель и тем мягче изометрическая перспектива.\n\n2. **`transform-style: preserve-3d`**:\n- Без этого свойства все 3D-трансформации дочерних элементов сплющиваются в плоскую 2D-картинку (режим `flat`).\n- `preserve-3d` указывает браузеру честно рендерить вложенные элементы в едином трехмерном объеме!\n\n3. **3D-функции**:\n- `rotateX(60deg)` — наклон вперед/назад (эффект лежащей 3D-плитки).\n- `rotateY(45deg)` — поворот влево/вправо вокруг вертикальной оси.\n- `translateZ(50px)` — приближение к зрителю (выход из плоскости экрана!).",
          "codeExample": {
            "language": "css",
            "code": "/* 3D Сцена */\n.viewport-3d {\n  perspective: 800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 300px;\n}\n\n/* Изометрическая 3D-карточка с эффектом глубины */\n.isometric-card {\n  width: 240px;\n  height: 160px;\n  background: linear-gradient(135deg, #161b22, #0d1117);\n  border: 1px solid #2dff8a;\n  border-radius: 12px;\n  /* Поворот в 3D пространстве */\n  transform: rotateX(25deg) rotateY(-20deg) rotateZ(5deg);\n  transform-style: preserve-3d;\n  box-shadow: -20px 20px 30px rgba(0, 0, 0, 0.6);\n  transition: transform 0.4s ease;\n}\n\n.isometric-card:hover {\n  /* Выравнивание при наведении */\n  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(30px);\n}",
            "title": "Создание изометрической 3D-карточки с глубиной perspective: 800px",
            "explanation": "perspective на родителе создает перспективное сокращение, а поворот по X/Y формирует реалистичный объем."
          }
        },
        {
          "title": "Архитектура переворачивающейся 3D-карточки (3D Card Flip)",
          "content": "Классический индустриальный паттерн интерактивной карточки товара или флеш-карточки:\n\nАнатомия 3D Card Flip:\n1. **Родитель (Сцена)**: `perspective: 1000px;`.\n2. **Вращающийся контейнер (`.card-flipper`)**: `transform-style: preserve-3d; transition: transform 0.6s;`.\n3. **Две грани (`.card-front` и `.card-back`)**:\n   - Обе грани занимают одну позицию через `position: absolute; top: 0; left: 0; width: 100%; height: 100%;`.\n   - **`backface-visibility: hidden;`** — скрывает грань, когда она повернута спиной к зрителю!\n   - Задняя грань изначально повернута на 180 градусов: `.card-back { transform: rotateY(180deg); }`.\n4. **Переворот при ховере или клике**: `.card-flipper:hover { transform: rotateY(180deg); }`.",
          "codeExample": {
            "language": "css",
            "code": "/* 1. Контейнер сцены */\n.flip-scene {\n  width: 300px;\n  height: 200px;\n  perspective: 1000px;\n}\n\n/* 2. Вращающийся блок */\n.flip-card {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n\n.flip-scene:hover .flip-card {\n  transform: rotateY(180deg);\n}\n\n/* 3. Лицевая и обратная стороны */\n.card-face {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden; /* КРИТИЧЕСКИ ВАЖНО: скрывает изнанку! */\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-front {\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  color: #2dff8a;\n}\n\n.card-back {\n  background: #0d1117;\n  border: 1px solid #29e7ff;\n  color: #29e7ff;\n  transform: rotateY(180deg); /* Изначально перевернута назад */\n}",
            "title": "Полная реализация 3D Card Flip с backface-visibility: hidden",
            "explanation": "backface-visibility: hidden скрывает изнанку при повороте, обеспечивая гладкую смену лицевой и обратной сторон без артефактов."
          }
        }
      ],
      "seniorTips": [
        "Никогда не анимируйте свойства геометрии `top`, `left`, `margin`, `width`, `height` — анимируйте ТОЛЬКО `transform` и `opacity` для гарантированных 60–120 FPS.",
        "Для центрирования модальных окон используйте `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);` — это работает для элементов динамической высоты.",
        "Помните про порядок функций: `rotate(45deg) translate(100px)` вращает координатную сетку ПЕРЕД сдвигом, меняя направление движения.",
        "При создании 3D-переворотов карточек всегда задавайте `backface-visibility: hidden` на обеих гранях и `transform-style: preserve-3d` на вращающемся родителе."
      ],
      "commonMistakes": [
        {
          "bad": "/* Анимация смещения через left (тяжелый Reflow / просадки FPS) */\n.box:hover { left: 100px; }",
          "good": "/* Анимация через transform на GPU */\n.box:hover { transform: translateX(100px); }",
          "reason": "Изменение left вызывает пересчет макета всей страницы (Reflow). transform выполняется на видеокарте без задержек."
        },
        {
          "bad": "/* Забытый preserve-3d при 3D анимации карточки */\n.card { transform: rotateY(180deg); /* ❌ Дочерние элементы сплющиваются в 2D плоскую текстуру */ }",
          "good": ".card { transform-style: preserve-3d; }",
          "reason": "По умолчанию transform-style имеет значение flat, что ломает трехмерную вложенность элементов."
        },
        {
          "bad": "/* Забытый backface-visibility: hidden в 3D Card Flip */\n// Обратная сторона просвечивает сквозь лицевую или зеркалится с артефактами",
          "good": ".card-front, .card-back { backface-visibility: hidden; }",
          "reason": "Без backface-visibility: hidden браузер продолжит рендерить зеркальный текст изнанки повернутого элемента."
        }
      ],
      "keyTakeaways": [
        "CSS Transform (translate, rotate, scale, skew) обрабатывается на GPU со скоростью 60–120 FPS.",
        "translate(-50%, -50%) вычисляет сдвиг от собственного размера элемента.",
        "transform-origin управляет опорной точкой вращения и масштабирования.",
        "perspective на родителе задает глубину трехмерного пространства.",
        "3D Card Flip требует связки perspective + preserve-3d + backface-visibility: hidden."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"transform-sandbox\">\n  <div class=\"flip-container\" id=\"demo-flipper\">\n    <div class=\"flipper\">\n      <div class=\"face front\">\n        <h3>Лицевая грань</h3>\n        <p>Наведите или нажмите</p>\n        <span class=\"badge\">FRONT</span>\n      </div>\n      <div class=\"face back\">\n        <h3>3D Оборот</h3>\n        <p>backface-visibility: hidden</p>\n        <span class=\"badge\" style=\"background:#29e7ff22; color:#29e7ff;\">BACK</span>\n      </div>\n    </div>\n  </div>\n</div>",
      "initialCss": ".transform-sandbox { padding: 30px; background: #0a0e13; display: flex; justify-content: center; font-family: monospace; }\n.flip-container {\n  width: 240px;\n  height: 150px;\n  perspective: 800px;\n}\n.flipper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.flip-container:hover .flipper, .flipper.flipped {\n  transform: rotateY(180deg);\n}\n.face {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden;\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.front {\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  color: #2dff8a;\n}\n.back {\n  background: #0d1117;\n  border: 1px solid #29e7ff;\n  color: #29e7ff;\n  transform: rotateY(180deg);\n}\n.badge {\n  background: #2dff8a22;\n  color: #2dff8a;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  margin-top: 8px;\n  font-weight: bold;\n}",
      "initialJs": "const flipper = document.getElementById('demo-flipper').querySelector('.flipper');\nflipper.onclick = () => flipper.classList.toggle('flipped');\nconsole.log('3D Transform песочница готова');",
      "instructions": "Практика с 3D Transform:\n1. Наведите курсор на карточку — она плавно перевернется в 3D на 180°\n2. Кликните по карточке для фиксации переворота\n3. Попробуйте изменить perspective с 800px на 300px и оцените усиление 3D-искажения"
    },
    "task": {
      "title": "Верстка интерактивной 3D-визитки с переворачиванием и параллакс-наклоном",
      "scenario": "Создайте компонент 3D-карточки товара: карточка должна переворачиваться на 180 градусов при наведении с показом характеристик на обороте, использовать perspective: 1000px, preserve-3d и backface-visibility: hidden, а также иметь микро-анимацию подъема по оси Z (translateZ).",
      "criteria": [
        "Родительский контейнер имеет perspective: 1000px",
        "Вращающийся блок использует transform-style: preserve-3d и transition",
        "Обе стороны (front и back) имеют backface-visibility: hidden",
        "Обратная сторона карточки повернута на rotateY(180deg)",
        "При наведении карточка переворачивается на 180deg с эффектом подъема"
      ],
      "starterCode": {
        "css": "/* Разработайте стили 3D Card Flip */\n.card-scene {\n}\n.card-3d {\n}\n.card-face-front {\n}\n.card-face-back {\n}"
      },
      "hints": [
        "Сцена: perspective: 1000px; width: 280px; height: 180px;",
        "Карточка: transform-style: preserve-3d; transition: transform 0.6s;",
        "Грани: position: absolute; inset: 0; backface-visibility: hidden;"
      ],
      "solution": {
        "css": ".card-scene {\n  width: 300px;\n  height: 200px;\n  perspective: 1000px;\n  margin: 0 auto;\n}\n\n.card-3d {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 16px;\n}\n\n.card-scene:hover .card-3d {\n  transform: rotateY(180deg) translateZ(20px);\n}\n\n.card-face {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden;\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n}\n\n.card-face-front {\n  background: linear-gradient(135deg, #161b22, #0d1117);\n  border: 1px solid #2dff8a;\n  color: #e6edf3;\n}\n\n.card-face-back {\n  background: linear-gradient(135deg, #0d1117, #161b22);\n  border: 1px solid #29e7ff;\n  color: #e6edf3;\n  transform: rotateY(180deg);\n}",
        "explanation": "3D-карточка переворачивается плавно с аппаратным ускорением GPU, исключая любые визуальные артефакты благодаря backface-visibility: hidden."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css15-q1",
          "question": "Какие этапы конвейера отрисовки пропускает анимация `transform` по сравнению с анимацией `left`?",
          "options": [
            "Layout и Paint — изменение обрабатывается сразу на этапе композитинга слоёв",
            "Ни одного: браузер всё равно пересчитывает раскладку страницы на каждом кадре",
            "Только Paint — геометрия всё равно пересчитывается при каждом смещении элемента",
            "Composite — трансформации применяются прямо на этапе Layout, без сборки слоёв"
          ],
          "correctIndex": 0,
          "explanation": "Смена `left` меняет положение элемента в потоке, поэтому браузер заново считает геометрию соседей, перерисовывает пиксели и только потом собирает кадр — и так шестьдесят раз в секунду. `transform` не трогает поток: элемент уже лежит на собственном композитном слое, и его достаточно сдвинуть при сборке слоёв силами видеокарты. Поэтому в анимациях используют только `transform` и `opacity`."
        },
        {
          "id": "css15-q2",
          "question": "Модалка центрируется правилами `top: 50%; left: 50%; transform: translate(-50%, -50%)`. От чего считаются проценты в каждой из двух частей?",
          "options": [
            "И координаты, и сдвиг отсчитываются от размеров содержащего блока",
            "Координаты — от содержащего блока, сдвиг — от собственных размеров элемента",
            "И координаты, и сдвиг отсчитываются от собственных размеров элемента",
            "Координаты — от размеров элемента, а сдвиг — от размеров области просмотра"
          ],
          "correctIndex": 1,
          "explanation": "В этом и весь фокус. Координаты в процентах берутся от содержащего блока, поэтому левый верхний угол модалки встаёт в центр экрана. Проценты в `translate` считаются от самого элемента, поэтому обратный сдвиг на половину ширины и высоты доводит центр окна до центра экрана. Размеры при этом знать не нужно — приём работает для блоков любой высоты."
        },
        {
          "id": "css15-q3",
          "question": "В 3D-перевороте карточки забыли `backface-visibility: hidden`. Что увидит пользователь?",
          "options": [
            "Карточка вообще не повернётся: без этого свойства поворот в пространстве невозможен",
            "Обе грани окажутся видны одновременно, изнанка проступит зеркально перевёрнутой",
            "Поворот произойдёт, но потеряет плавность и станет заметно ступенчатым",
            "Карточка развернётся вокруг неверной оси — вертикальной вместо горизонтальной"
          ],
          "correctIndex": 1,
          "explanation": "По умолчанию браузер рисует обратную сторону повёрнутого элемента, показывая её зеркальное отражение. Обе грани карточки лежат в одной точке пространства, поэтому лицевая сторона просвечивает сквозь оборотную, а текст выглядит вывернутым. Значение `hidden` на обеих гранях скрывает то, что отвёрнуто от зрителя. Вместе с ним нужен `transform-style: preserve-3d` на вращающемся родителе."
        },
        {
          "id": "css15-q4",
          "question": "Значение `perspective` на родителе уменьшили с 1500px до 300px. Что изменится?",
          "options": [
            "Трёхмерный эффект ослабнет: чем меньше значение, тем дальше виртуальная камера",
            "Трёхмерный эффект станет резче: наблюдатель словно подошёл к объекту вплотную",
            "Элемент уменьшится ровно в пять раз пропорционально изменению значения",
            "Ничего не изменится: свойство влияет лишь на потомков с `position: absolute`"
          ],
          "correctIndex": 1,
          "explanation": "`perspective` задаёт расстояние от зрителя до плоскости экрана: чем оно меньше, тем ближе камера и тем сильнее схождение линий. При 1500 пикселях поворот выглядит сдержанным, при 300 — грани разъезжаются резко, как при широкоугольном объективе. Отрицательных значений и нуля здесь не бывает, а на размер элемента свойство не влияет."
        },
        {
          "id": "css15-q5",
          "question": "Окажутся ли эти два элемента в одной и той же точке экрана?",
          "codeSnippet": ".a { transform: rotate(45deg) translateX(100px); }\n.b { transform: translateX(100px) rotate(45deg); }",
          "options": [
            "Да: трансформации коммутативны, и порядок перечисления функций на результат не влияет",
            "Нет, но разница будет только в угле поворота — итоговые координаты всё же совпадут",
            "Нет: функции применяются слева направо, и поворот у `.a` разворачивает оси до сдвига",
            "Да, при условии что у обоих элементов задан одинаковый `transform-origin`"
          ],
          "correctIndex": 2,
          "explanation": "Функции в `transform` применяются по очереди и каждая работает уже в изменённой системе координат. У первого элемента сначала поворачиваются оси, поэтому сдвиг на сто пикселей уходит по диагонали. У второго сдвиг происходит по горизонтали, а поворот затем вращает элемент вокруг его новой точки. Итог — разные места на экране, хотя набор функций одинаков."
        }
      ]
    }
  },
  {
    "id": "css-16",
    "moduleId": "css",
    "level": 16,
    "title": "Плавные переходы (Transition) и функции плавности (Easing)",
    "subtitle": "transition-property, duration, timing-function, delay, cubic-bezier, step-функции и анимации состояния",
    "description": "Освойте плавные переходы между состояниями элементов в CSS: анатомию свойства transition, опасность transition: all, функции плавности timing-function, математику кастомных кривых cubic-bezier (эффекты пружины Spring/Bounce), пошаговые анимации steps() и технику каскадных задержек Staggered Delays.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "css-transition",
      "easing",
      "cubic-bezier",
      "timing-function",
      "steps",
      "staggered-delay",
      "micro-interactions",
      "ui-animation"
    ],
    "theory": {
      "overview": "Интерфейс без плавных переходов ощущается статичным и резким. Мгновенная смена цвета кнопки или резкое появление модального окна ухудшают пользовательский опыт (UX).\n\nСвойство `transition` позволяет браузеру **плавно интерполировать числовые значения CSS-свойств** во времени при смене состояния элемента (псевдоклассы `:hover`, `:focus-visible`, `:active` или добавление класса через JavaScript).\n\nВ этом уроке мы разберём анатомию переходов, математику кривых Безье (`cubic-bezier`), покадровые `steps()` и правила оптимизации для сохранения стабильных 60–120 FPS.",
      "sections": [
        {
          "title": "Анатомия свойства transition и критическая ловушка transition: all",
          "content": "Свойство `transition` объединяет 4 параметра:\n\n1. **Составные подсвойства**:\n- `transition-property` — анимируемое свойство (`transform`, `opacity`, `background-color`).\n- `transition-duration` — длительность перехода (`0.3s`, `250ms`).\n- `transition-timing-function` — функция ускорения (`ease`, `linear`, `cubic-bezier(...)`).\n- `transition-delay` — задержка перед стартом анимации (`0.1s`).\n- **Сокращенный синтаксис (Shorthand)**: `transition: transform 0.3s ease-out 0.05s;`.\n\n2. **Критическая ловушка: Почему `transition: all` — антипаттерн ⚠️**:\n- Значение `all` заставляет браузер отслеживать и интерполировать **ВСЕ свойства элемента**.\n- Если скрипт изменит `width`, `margin` или `border`, браузер запустит тяжелую анимацию геометрии (Reflow / Layout Thrashing) на каждый кадр, что приведет к лагам и просадке FPS на мобильных устройствах.\n- **Индустриальный стандарт ✅**: ВСЕГДА явно перечисляйте анимируемые свойства через запятую: `transition: transform 0.2s ease, opacity 0.2s ease;`.",
          "image": {
            "src": "/images/lessons/css-transitions-easing.svg",
            "alt": "CSS Плавные переходы: transition, timing-function и кривые Безье",
            "caption": "Анатомия transition, опасность transition: all, кривые cubic-bezier с эффектом пружины и Staggered Delays"
          },
          "codeExample": {
            "language": "css",
            "code": "/* ❌ Плохо: transition: all вызывает неконтролируемый Reflow */\n/* .bad-button { transition: all 0.3s ease; } */\n\n/* ✅ Отлично: явное перечисление свойств с разными длительностями */\n.modern-button {\n  background: #161b22;\n  color: #e6edf3;\n  border: 1px solid #30363d;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  \n  /* Анимируем ТОЛЬКО то, что меняется, и с нужной кривой */\n  transition:\n    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 0.25s ease,\n    border-color 0.25s ease,\n    box-shadow 0.25s ease;\n}\n\n.modern-button:hover {\n  background: #2dff8a;\n  color: #0a0e13;\n  border-color: #2dff8a;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(45, 255, 138, 0.3);\n}\n\n.modern-button:active {\n  transform: translateY(0) scale(0.98); /* Тактильный отклик на клик */\n}",
            "title": "Профессиональная настройка transition с раздельными таймингами",
            "explanation": "Явное перечисление свойств transform, background-color и box-shadow дает плавный и производительный отклик интерфейса."
          }
        },
        {
          "title": "Функции плавности (Timing Functions) и магия cubic-bezier",
          "content": "Как меняется скорость анимации во времени:\n\n1. **Стандартные функции плавности**:\n- `linear` — постоянная скорость (анимация выглядит неестественно, идеально только для вращающихся спиннеров-лоадеров).\n- `ease` (по умолчанию) — медленный старт, ускорение в середине, медленный финиш.\n- `ease-in` — медленный старт с ускорением к концу (для исчезающих элементов).\n- `ease-out` — быстрый старт с мягким торможением (золотой стандарт для появления модалок, тултипов и ховеров кнопок — интерфейс ощущается отзывчивым!).\n- `ease-in-out` — симметричное замедление в начале и в конце.\n\n2. **Кастомные кривые Безье `cubic-bezier(x1, y1, x2, y2)`**:\n- Позволяют задать любую физику движения.\n- **Эффект пружины (Spring / Bounce / Overshoot)**:\n  Если значение `y2 > 1` (например, `cubic-bezier(0.34, 1.56, 0.64, 1)`), элемент в конце анимации слегка «перелетает» целевую точку и пружинит назад, создавая ультра-современный тактильный микровзаимодействующий эффект (как в iOS).",
          "codeExample": {
            "language": "css",
            "code": "/* Пружинящая всплывающая подсказка (Tooltip / Notification) */\n.spring-popup {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  color: #e6edf3;\n  padding: 16px 24px;\n  border-radius: 12px;\n  \n  /* Исходное состояние: скрыт и уменьшен */\n  transform: translateY(100px) scale(0.8);\n  opacity: 0;\n  \n  /* Кривая с перелетом (y1 = 1.56) создает реалистичную пружину! */\n  transition:\n    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),\n    opacity 0.25s ease-out;\n}\n\n.spring-popup.visible {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}",
            "title": "Эффект пружины (Spring Bounce) через cubic-bezier(0.34, 1.56, 0.64, 1)",
            "explanation": "Кривая Безье с y > 1 заставляет модалку слегка выскочить за границу и плавно встать на место, создавая эффект упругости."
          }
        },
        {
          "title": "Пошаговая дискретная анимация: steps() и step-end",
          "content": "Не все анимации должны быть непрерывными:\n\n1. **Функция `steps(n, jump-term)`**:\n- Разбивает переход на `n` дискретных равных шагов без промежуточных сглаживаний.\n- `steps(1, end)` или ключевое слово `step-end` — меняет значение мгновенно в самом конце интервала.\n\n2. **Практические применения `steps()`**:\n- **Мигающий курсор в ретро-терминале** (`opacity` переключается шагами между 1 и 0).\n- **Покадровая спрайтовая анимация персонажей** (смещение `background-position` на фиксированное число кадров спрайта).\n- **Часы с дискретным ходом секундной стрелки** (`steps(60)` за 60 секунд делает стрелку тикающей как в настоящих механических часах!).",
          "codeExample": {
            "language": "css",
            "code": "/* Мигающий курсор терминала без JavaScript */\n.terminal-cursor {\n  display: inline-block;\n  width: 10px;\n  height: 1.2em;\n  background: #2dff8a;\n  vertical-align: middle;\n  margin-left: 4px;\n  \n  /* steps(1, start) переключает opacity дискретно: 1 -> 0 -> 1 */\n  animation: blink 1s steps(1, start) infinite;\n}\n\n@keyframes blink {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0; }\n}\n\n/* Механическая тикающая стрелка часов на 60 шагов */\n.ticking-second-hand {\n  transition: transform 1s steps(60);\n}",
            "title": "Использование steps(1, start) для мигающего терминального курсора",
            "explanation": "Функция steps(1, start) исключает плавное затухание, обеспечивая дискретное мигание курсора."
          }
        },
        {
          "title": "Каскадные задержки (Staggered Delays) и анимация псевдоэлементов",
          "content": "Продвинутые техники создания премиальных микровзаимодействий:\n\n1. **Каскадное появление списков (Staggered Delays)**:\n- Если анимировать появление 5 карточек одновременно — это выглядит скучно.\n- Задавая каждому следующему элементу нарастающую задержку `transition-delay: calc(var(--i) * 50ms)`, мы получаем эффект **плавной волны появления**!\n\n2. **Анимация подчеркивания ссылок через `::after`**:\n- Классический эффект: полоса подчеркивания вырастает из центра при наведении через `transform: scaleX(0)` → `scaleX(1)`.",
          "codeExample": {
            "language": "css",
            "code": "/* Эффектное подчеркивание ссылки из центра на GPU */\n.nav-link {\n  position: relative;\n  color: #e6edf3;\n  text-decoration: none;\n  padding-bottom: 4px;\n}\n\n.nav-link::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #2dff8a;\n  /* Изначально сжато до 0 в центре */\n  transform: scaleX(0);\n  transform-origin: center;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.nav-link:hover::after {\n  transform: scaleX(1); /* Плавное расширение на 100% ширины */\n}\n\n/* Каскадное появление списка меню через задержки */\n.stagger-menu li {\n  opacity: 0;\n  transform: translateX(-20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n/* Задержки по очереди */\n.stagger-menu.open li:nth-child(1) { transition-delay: 50ms; opacity: 1; transform: none; }\n.stagger-menu.open li:nth-child(2) { transition-delay: 100ms; opacity: 1; transform: none; }\n.stagger-menu.open li:nth-child(3) { transition-delay: 150ms; opacity: 1; transform: none; }\n.stagger-menu.open li:nth-child(4) { transition-delay: 200ms; opacity: 1; transform: none; }",
            "title": "Подчеркивание ссылки через scaleX(0) и каскадная задержка списка",
            "explanation": "scaleX(0) анимируется на GPU без сдвига текста, а Staggered Delays создают динамичный эффект каскадной волны."
          }
        }
      ],
      "seniorTips": [
        "Никогда не пишите `transition: all` — это приводит к скрытым просадкам производительности. Явно указывайте анимируемые свойства: `transition: transform 0.2s, opacity 0.2s`.",
        "Для появления элементов используйте `ease-out` (быстрый отклик с мягким финишем), а для исчезновения — `ease-in`.",
        "Используйте кастомный `cubic-bezier(0.34, 1.56, 0.64, 1)` для кнопок и модальных окон — легкий пружинящий овершут делает UI живым и премиальным.",
        "Соблюдайте баланс длительности: идеальное время микро-анимаций кнопок и тултипов — 150–250 мс. Анимации длиннее 400 мс раздражают пользователей медлительностью."
      ],
      "commonMistakes": [
        {
          "bad": "/* Использование transition: all 0.5s на всех элементах */\n* { transition: all 0.5s ease; /* ❌ Тормозит скролл, ресайз и выпадающие списки! */ }",
          "good": ".btn { transition: transform 0.2s ease, background-color 0.2s ease; }",
          "reason": "transition: all заставляет браузер интерполировать даже свойства, которые не должны анимироваться, перегружая CPU."
        },
        {
          "bad": "/* Слишком долгая анимация кнопок (1 секунда) */\n.btn:hover { transition: transform 1s; /* Пользователь успеет кликнуть до завершения анимации */ }",
          "good": ".btn:hover { transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1); }",
          "reason": "UI-анимации должны быть быстрыми (150–250 мс), не задерживая взаимодействие пользователя с сайтом."
        },
        {
          "bad": "/* Попытка анимировать display: none -> display: block через transition */\n.modal { display: none; transition: opacity 0.3s; }\n.modal.open { display: block; opacity: 1; /* ❌ Переход не сработает! */ }",
          "good": "/* Использование opacity + visibility + pointer-events */\n.modal { opacity: 0; visibility: hidden; pointer-events: none; transition: opacity 0.3s, visibility 0.3s; }\n.modal.open { opacity: 1; visibility: visible; pointer-events: auto; }",
          "reason": "Свойство display не интерполируется числами. Для плавного скрытия используют связку opacity + visibility: hidden."
        }
      ],
      "keyTakeaways": [
        "transition интерполирует свойства при смене псевдоклассов (:hover, :focus) или классов.",
        "Никогда не используйте transition: all — перечисляйте конкретные свойства явно.",
        "ease-out обеспечивает быстрый отклик для появления, ease-in — для скрытия.",
        "cubic-bezier с Y > 1 создает эффект упругой пружины (Spring).",
        "Staggered Delays создают каскадную волну появления элементов списка."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"transition-sandbox\">\n  <div class=\"cards-row\">\n    <button class=\"demo-btn btn-linear\">Linear (Спид)</button>\n    <button class=\"demo-btn btn-ease-out\">Ease-Out (Мягко)</button>\n    <button class=\"demo-btn btn-spring\">Spring (Пружина ⚡)</button>\n  </div>\n  <p style=\"color:#8b949e; font-size:12px; margin-top:16px;\">Наведите курсор на кнопки для сравнения физики движения кривых Безье</p>\n</div>",
      "initialCss": ".transition-sandbox { padding: 24px; background: #0a0e13; font-family: monospace; text-align: center; }\n.cards-row { display: flex; gap: 16px; justify-content: center; }\n.demo-btn {\n  background: #161b22;\n  color: #e6edf3;\n  border: 1px solid #30363d;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.btn-linear {\n  transition: transform 0.4s linear, background 0.2s;\n}\n.btn-linear:hover {\n  background: #29e7ff;\n  color: #0a0e13;\n  transform: translateY(-12px);\n}\n.btn-ease-out {\n  transition: transform 0.4s ease-out, background 0.2s;\n}\n.btn-ease-out:hover {\n  background: #ffb02e;\n  color: #0a0e13;\n  transform: translateY(-12px);\n}\n.btn-spring {\n  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s;\n}\n.btn-spring:hover {\n  background: #2dff8a;\n  color: #0a0e13;\n  transform: translateY(-12px) scale(1.08);\n}",
      "initialJs": "console.log('Transition & Easing песочница готова');",
      "instructions": "Практика с Easing кривыми:\n1. Наведите на кнопку 'Linear' — движение равномерное и механическое\n2. Наведите на 'Ease-Out' — мягкое торможение вверху\n3. Наведите на 'Spring' — пружинящий эффект с овершутом"
    },
    "task": {
      "title": "Разработка набора интерактивных кнопок с кастомными кривыми Безье и подчеркиванием",
      "scenario": "Создайте интерактивную карточку со ссылкой и кнопкой действия: ссылка должна плавно подчеркиваться из центра через псевдоэлемент ::after и transform: scaleX, а кнопка должна использовать кастомную кривую cubic-bezier(0.34, 1.56, 0.64, 1) для пружинящего эффекта подъема и скейла при ховере и клике.",
      "criteria": [
        "Ссылка использует ::after с transform: scaleX(0) и transform-origin: center",
        "При наведении на ссылку полоса расширяется до scaleX(1) за 0.3s",
        "Кнопка использует transition с кастомной кривой cubic-bezier для эффекта пружины",
        "Реализован тактильный отклик на нажатие :active (scale: 0.96)",
        "Не используется антипаттерн transition: all"
      ],
      "starterCode": {
        "css": "/* Разработайте стили для плавных переходов */\n.animated-link {\n}\n.animated-link::after {\n}\n.spring-button {\n}"
      },
      "hints": [
        "Ссылка: position: relative; ::after: position: absolute; bottom: 0; left: 0; width: 100%; transform: scaleX(0);",
        "Кнопка: transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s ease;"
      ],
      "solution": {
        "css": ".animated-link {\n  position: relative;\n  color: #2dff8a;\n  text-decoration: none;\n  font-weight: bold;\n  padding-bottom: 4px;\n  display: inline-block;\n}\n\n.animated-link::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #2dff8a;\n  transform: scaleX(0);\n  transform-origin: center;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.animated-link:hover::after {\n  transform: scaleX(1);\n}\n\n.spring-button {\n  background: #161b22;\n  color: #e6edf3;\n  border: 1px solid #2dff8a;\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  transition:\n    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),\n    background-color 0.25s ease,\n    box-shadow 0.25s ease;\n}\n\n.spring-button:hover {\n  background-color: #2dff8a;\n  color: #0a0e13;\n  transform: translateY(-4px) scale(1.05);\n  box-shadow: 0 10px 25px rgba(45, 255, 138, 0.35);\n}\n\n.spring-button:active {\n  transform: translateY(0) scale(0.96);\n}",
        "explanation": "Переходы оптимизированы для GPU: подчеркивание анимируется через scaleX(0) без сдвига верстки, а кнопка пружинит при наведении и прожимается при клике."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css16-q1",
          "question": "Чем плоха запись `transition: all 0.3s` на карточке с эффектом при наведении?",
          "options": [
            "Браузер станет интерполировать любое изменившееся свойство, включая геометрические",
            "Ключевое слово `all` поддерживается не всеми браузерами и местами молча игнорируется",
            "`all` увеличивает длительность перехода пропорционально количеству свойств элемента",
            "`all` отключает аппаратное ускорение и переводит анимацию на центральный процессор"
          ],
          "correctIndex": 0,
          "explanation": "С `all` под анимацию попадает всё, что вообще изменится, — включая `width`, `height` и отступы, каждое изменение которых запускает пересчёт раскладки на каждом кадре. Вдобавок переход начинает срабатывать в неожиданных местах: при смене класса, при загрузке шрифта, при добавлении модификатора. Явное перечисление вроде `transition: transform .2s, opacity .2s` и быстрее, и предсказуемее."
        },
        {
          "id": "css16-q2",
          "question": "Что означает вторая координата больше единицы в записи `cubic-bezier(0.34, 1.56, 0.64, 1)`?",
          "options": [
            "Анимация длится дольше заданного времени пропорционально величине превышения",
            "Скорость остаётся постоянной, а сглаживание на концах отключается полностью",
            "Анимация стартует раньше указанного момента на соответствующую долю длительности",
            "Промежуточное значение выходит за конечное и возвращается — получается пружина"
          ],
          "correctIndex": 3,
          "explanation": "Кривая описывает, какая доля пути пройдена к каждому моменту времени, и значения выше единицы означают, что элемент проскакивает конечную точку, а затем возвращается к ней. Визуально это упругий отскок, который делает кнопки и модалки живыми. Симметрично, отрицательные значения дают лёгкий замах в обратную сторону перед началом движения."
        },
        {
          "id": "css16-q3",
          "question": "Почему для появления тултипа берут `ease-out`, а для его исчезновения — `ease-in`?",
          "options": [
            "Так предписано спецификацией: другие функции плавности к переходам не применяются",
            "`ease-in` не работает, когда анимируемое свойство уменьшается до нулевого значения",
            "`ease-out` короче `ease-in` по длительности примерно на треть при равном значении времени",
            "Появление должно начинаться резко и мягко тормозить, а уход — наоборот, плавно разгоняться"
          ],
          "correctIndex": 3,
          "explanation": "Интерфейс ощущается отзывчивым, когда реакция на действие начинается мгновенно: `ease-out` стартует быстро и мягко тормозит у цели. При исчезновении спешить незачем, но и задерживать внимание не нужно, поэтому `ease-in` начинает медленно и ускоряется к концу. Длительность обе функции имеют одинаковую — различается только распределение скорости внутри неё."
        },
        {
          "id": "css16-q4",
          "question": "Как сделать каскадное появление пунктов списка, не описывая задержку для каждого вручную?",
          "options": [
            "Задать всем одинаковый `transition-delay`, но разную длительность `transition-duration`",
            "Поставить `animation-direction: alternate` — тогда пункты проявятся по очереди",
            "Вычислять задержку из порядкового номера: передать `--i` в разметке и умножить в `calc()`",
            "Применить `transition: all` — браузер сам расставит задержки в порядке следования"
          ],
          "correctIndex": 2,
          "explanation": "Волна получается, когда каждый следующий элемент стартует чуть позже предыдущего. Номер элемента передают в пользовательском свойстве прямо в разметке, а в стилях пишут `transition-delay: calc(var(--i) * 60ms)`. Для небольших списков ту же роль сыграет `:nth-child`. Разная длительность даёт не сдвиг старта, а рассинхрон финиша, а `alternate` управляет направлением проходов анимации."
        },
        {
          "id": "css16-q5",
          "question": "Модалка должна плавно исчезать, но `display: none` обрывает переход мгновенно. Как поступить?",
          "options": [
            "Анимировать `opacity` и `visibility`, а взаимодействие снять через `pointer-events: none`",
            "Анимировать `width` и `height` до нуля — эти свойства интерполируются корректно",
            "Отказаться от перехода и удалять узел из разметки через `setTimeout` нужной длительности",
            "Заменить `display: none` на `display: contents` — это значение поддаётся анимации"
          ],
          "correctIndex": 0,
          "explanation": "`display` переключается скачком между дискретными значениями, промежуточных состояний у него нет. Классическое решение — плавно гасить `opacity`, а `visibility` переводить в `hidden` с задержкой на длительность перехода, чтобы элемент исчез из дерева доступности уже после затухания. `pointer-events: none` снимает перехват курсора на время анимации. Схлопывание размеров выглядит как сжатие, а не как исчезновение."
        }
      ]
    }
  },
  {
    "id": "css-17",
    "moduleId": "css",
    "level": 17,
    "title": "CSS Анимации: Директива @keyframes, сложные сценарии и оптимизация",
    "subtitle": "@keyframes, animation-fill-mode, iteration-count, direction, play-state, FLIP и prefers-reduced-motion",
    "description": "Освойте покадровые анимации в CSS: директиву @keyframes, полное семейство свойств animation, фиксацию стилей через animation-fill-mode (forwards, both), паузу по ховеру через animation-play-state, события жизненного цикла в JS, паттерн FLIP и обязательную адаптацию под prefers-reduced-motion (WCAG доступность).",
    "estimatedMinutes": 65,
    "difficulty": "advanced",
    "tags": [
      "css-animations",
      "keyframes",
      "animation-fill-mode",
      "animation-play-state",
      "flip-animation",
      "prefers-reduced-motion",
      "gpu-compositing"
    ],
    "theory": {
      "overview": "В то время как `transition` умеет лишь плавно переходить из состояния А в состояние Б при воздействии пользователя, **CSS Анимации (`@keyframes`)** позволяют создавать полноценные многошаговые сценарии, циклические эффекты (пульсация, вращение, бегущие строки) и управлять сложными цепочками кадров вообще без JavaScript.\n\nВ этом уроке мы разберём синтаксис `@keyframes`, тонкости `animation-fill-mode` (почему элементы сбрасываются после завершения), управление паузой в рантайме и стандарты доступности.",
      "sections": [
        {
          "title": "Директива @keyframes и шортхенд свойства animation",
          "content": "Как устроена покадровая анимация в CSS:\n\n1. **Директива `@keyframes <имя>`**:\n- Задает ключевые точки во времени от `0%` (или `from`) до `100%` (или `to`).\n- Можно указывать любые промежуточные точки: `0%, 50%, 75%, 100%`.\n\n2. **Семейство свойств `animation`**:\n- `animation-name` — имя сценария из `@keyframes`.\n- `animation-duration` — время одного полного цикла (например, `2s`).\n- `animation-timing-function` — физика ускорения (`ease-in-out`, `cubic-bezier(...)`).\n- `animation-delay` — задержка перед первым запуском.\n- `animation-iteration-count` — количество повторов (`1`, `3`, `infinite` для бесконечной анимации).\n- `animation-direction` — направление движения: `normal`, `reverse`, `alternate` (движение вперед-назад без рывка!), `alternate-reverse`.\n- **Сокращенный синтаксис**: `animation: pulse 1.5s ease-in-out 0.2s infinite alternate both;`.",
          "image": {
            "src": "/images/lessons/css-keyframes-animations.svg",
            "alt": "CSS Анимации @keyframes, fill-mode, play-state и prefers-reduced-motion",
            "caption": "Анатомия @keyframes, фиксация стилей через animation-fill-mode: forwards, пауза play-state и адаптация под prefers-reduced-motion"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Бесконечная неоновая пульсация на GPU */\n@keyframes neonGlow {\n  0% {\n    transform: scale(1);\n    box-shadow: 0 0 10px rgba(45, 255, 138, 0.2);\n  }\n  50% {\n    transform: scale(1.05);\n    box-shadow: 0 0 30px rgba(45, 255, 138, 0.6);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 10px rgba(45, 255, 138, 0.2);\n  }\n}\n\n.status-badge {\n  background: #161b22;\n  color: #2dff8a;\n  border: 1px solid #2dff8a;\n  padding: 6px 14px;\n  border-radius: 20px;\n  display: inline-block;\n  \n  /* Запуск анимации: 2 секунды, бесконечно, мягкий переход */\n  animation: neonGlow 2s ease-in-out infinite;\n}",
            "title": "Сценарий @keyframes neonGlow с бесконечным циклом infinite",
            "explanation": "Ключевые кадры 0% и 100% согласованы по значениям, гарантируя бесшовный бесконечный цикл пульсации без резких скачков."
          }
        },
        {
          "title": "Магия animation-fill-mode: forwards, backwards и both",
          "content": "Управление стилями элемента ДО и ПОСЛЕ анимации:\n\n1. **Проблема по умолчанию (`animation-fill-mode: none`)**:\n- Когда однократная анимация завершается (100%), браузер **мгновенно сбрасывает все свойства к исходным стилям в CSS**, и элемент некрасиво «отпрыгивает» назад!\n- Во время `animation-delay` элемент отображается со своими дефолтными стилями, а не со стилями кадра `0%`.\n\n2. **Значения `animation-fill-mode`**:\n- **`forwards` (Самое популярное)**: элемент **НАВСЕГДА сохраняет стили последнего кадра (100%)** после завершения анимации (модальное окно остается открытым, плашка остается на месте).\n- **`backwards`**: применяет стили первого кадра (`0%`) **НЕМЕДЛЕННО**, в том числе во время ожидания задержки `animation-delay`!\n- **`both`**: объединяет `backwards` (применяет 0% в период delay) и `forwards` (сохраняет 100% после финиша).",
          "codeExample": {
            "language": "css",
            "code": "/* Плавное выплывание плашки уведомления с фиксацией в конце */\n@keyframes slideInNotification {\n  0% {\n    opacity: 0;\n    transform: translateY(-40px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.notification-toast {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background: #161b22;\n  border: 1px solid #29e7ff;\n  padding: 16px 20px;\n  border-radius: 8px;\n  \n  /* both: во время задержки 0.3s плашка невидима (0%), а после финиша остается на экране (100%)! */\n  animation: slideInNotification 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;\n}",
            "title": "Использование animation-fill-mode: both для точного контроля задержки и финала",
            "explanation": "both предотвращает мигание элемента до старта задержки и фиксирует его на экране после завершения анимации."
          }
        },
        {
          "title": "Пауза (animation-play-state) и JS-события жизненного цикла",
          "content": "Интерактивное управление анимацией:\n\n1. **Свойство `animation-play-state`**:\n- Принимает значения `running` (воспроизводится) или `paused` (на паузе).\n- **Идеальный UX для бегущих строк (Marquee) и каруселей**:\n  `.marquee-track:hover { animation-play-state: paused; }` — анимация плавно замирает ровно в том месте, где находилась, позволяя пользователю прочитать текст или кликнуть на карточку!\n\n2. **События жизненного цикла в JavaScript**:\n- `animationstart` — анимация началась (после окончания delay).\n- `animationiteration` — завершился очередной цикл в многократной анимации.\n- `animationend` — анимация полностью завершилась (идеально для удаления уведомления из DOM: `el.remove()`).\n- `animationcancel` — анимация была прервана.",
          "codeExample": {
            "language": "javascript",
            "code": "// Удаление уведомления из DOM сразу после окончания анимации исчезновения\nconst toast = document.querySelector('.fade-out-toast');\n\n// Запускаем CSS анимацию исчезновения\ntoast.classList.add('animate-leave');\n\n// Ловим событие окончания CSS-анимации в JS:\ntoast.addEventListener('animationend', (event) => {\n  if (event.animationName === 'fadeOut') {\n    console.log('CSS Анимация завершилась, безопасно удаляем DOM-узел');\n    toast.remove(); // Полное освобождение памяти\n  }\n});",
            "title": "Связка JS и CSS: удаление элемента по событию animationend",
            "explanation": "Событие animationend позволяет JavaScript точно узнать момент завершения визуального эффекта без хрупких таймеров setTimeout."
          }
        },
        {
          "title": "Доступность (prefers-reduced-motion) и FLIP-анимации",
          "content": "Стандарты доступности WCAG и высокая производительность:\n\n1. **Медиа-запрос `prefers-reduced-motion`**:\n- У многих пользователей анимация движения (зум, вращение, параллакс) вызывает головокружение, тошноту и приступы вестибулярных расстройств.\n- В настройках Windows/macOS/iOS пользователи могут включить «Уменьшение движения».\n- **Требование доступности (WCAG 2.1 AA)**: отключать резкие перемещения и заменять их на плавное затухание `opacity`.\n\n2. **Паттерн FLIP (First, Last, Invert, Play)**:\n- Техника для плавной анимации элементов при пересортировке списка в React/Vue:\n  - **First**: запоминаем начальную позицию (`getBoundingClientRect()`).\n  - **Last**: перерисовываем DOM и запоминаем новую позицию.\n  - **Invert**: мгновенно сдвигаем элемент назад через `transform: translate(ΔX, ΔY)`.\n  - **Play**: анимируем `transform` в 0 на GPU!",
          "codeExample": {
            "language": "css",
            "code": "/* Обязательная адаптация для людей с вестибулярными расстройствами */\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    /* Отключаем непрерывные перемещения, заменяя на минимальную длительность */\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n  \n  /* Для критических элементов оставляем только мягкое затухание прозрачности */\n  .important-alert {\n    animation: simpleFade 0.2s ease !important;\n  }\n}\n\n@keyframes simpleFade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}",
            "title": "Поддержка prefers-reduced-motion для доступности WCAG",
            "explanation": "prefers-reduced-motion отключает тяжелые вращения и сдвиги, сохраняя доступность интерфейса для всех категорий пользователей."
          }
        },
        {
          "title": "Рекомендуемые видеоматериалы: CSS Animations за 9 минут",
          "content": "Для быстрого и наглядного закрепления синтаксиса @keyframes, свойств animation и создания плавных эффектов рекомендуем видеоматериал:\n\n- **[Learn CSS Animations in 9 Minutes (YouTube)](https://youtu.be/z2LQYsZhsFw?si=p8J_ZGvLkz5fKjhm)** — экспресс-руководство от Coding2GO по созданию анимаций на чистом CSS: от базовых ключевых кадров до интерактивных эффектов."
        }
      ],
      "seniorTips": [
        "Внутри `@keyframes` анимируйте исключительно свойства композитинга GPU: `transform` (translate, scale, rotate) и `opacity` — это сохранит стабильные 60–120 FPS.",
        "Всегда используйте `animation-fill-mode: forwards` (или `both`), если элемент должен остаться в конечном состоянии после завершения анимации.",
        "Для бегущих строк и бесконечных каруселей добавляйте `:hover { animation-play-state: paused; }` — это признак заботы о пользователе.",
        "Всегда внедряйте `@media (prefers-reduced-motion: reduce)` — это обязательное требование для соответствия стандартам доступности WCAG 2.1 AA.",
        "Слушайте событие `animationend` в JavaScript для удаления отработавших модалок и уведомлений из DOM без использования ненадежных `setTimeout`."
      ],
      "commonMistakes": [
        {
          "bad": "/* Анимация тяжелых свойств геометрии в @keyframes */\n@keyframes pulse { 0% { width: 100px; } 50% { width: 120px; } } /* ❌ Reflow на каждый кадр! */",
          "good": "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.2); } }",
          "reason": "Изменение width/height/top/left в анимации пересчитывает макет всей страницы 60 раз в секунду, вызывая жуткие тормоза."
        },
        {
          "bad": "/* Забытый animation-fill-mode: forwards */\n.toast { animation: slideIn 0.5s ease; /* ❌ После завершения плашка мгновенно исчезает/отпрыгивает */ }",
          "good": ".toast { animation: slideIn 0.5s ease forwards; }",
          "reason": "По умолчанию (fill-mode: none) после завершения анимации элемент возвращается к исходным CSS стилям."
        },
        {
          "bad": "/* Использование setTimeout для удаления элемента вместо события animationend */\nsetTimeout(() => el.remove(), 500); // Если в CSS поменяют duration на 0.7s, элемент удалится недоиграв!",
          "good": "el.addEventListener('animationend', () => el.remove());",
          "reason": "Событие animationend синхронизировано с реальным временем завершения CSS-анимации в браузере."
        }
      ],
      "keyTakeaways": [
        "@keyframes описывает многошаговый сценарий анимации от 0% до 100%.",
        "animation-fill-mode: forwards фиксирует стили последнего кадра после завершения.",
        "animation-play-state: paused позволяет ставить анимацию на паузу при наведении курсора.",
        "prefers-reduced-motion защищает пользователей от вестибулярного дискомфорта.",
        "События animationstart и animationend связывают CSS-анимации с логикой JavaScript."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"keyframes-sandbox\">\n  <div class=\"marquee-container\">\n    <div class=\"marquee-track\">\n      <span class=\"marquee-item\">🚀 FRONTEND INTERN ACADEMY</span>\n      <span class=\"marquee-item\">⚡ 60 FPS GPU ANIMATIONS</span>\n      <span class=\"marquee-item\">💎 SENIOR CURRICULUM</span>\n      <span class=\"marquee-item\">🚀 FRONTEND INTERN ACADEMY</span>\n      <span class=\"marquee-item\">⚡ 60 FPS GPU ANIMATIONS</span>\n    </div>\n  </div>\n  <p style=\"color:#8b949e; font-size:12px; margin-top:16px;\">Наведите курсор на бегущую строку: свойство animation-play-state: paused остановит ленту без рывка!</p>\n</div>",
      "initialCss": ".keyframes-sandbox { padding: 24px; background: #0a0e13; font-family: monospace; overflow: hidden; }\n.marquee-container {\n  width: 100%;\n  overflow: hidden;\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  border-radius: 8px;\n  padding: 12px 0;\n}\n.marquee-track {\n  display: flex;\n  gap: 32px;\n  white-space: nowrap;\n  width: max-content;\n  animation: marqueeScroll 10s linear infinite;\n}\n.marquee-track:hover {\n  animation-play-state: paused; /* Пауза при наведении! */\n  cursor: pointer;\n}\n.marquee-item {\n  color: #2dff8a;\n  font-weight: bold;\n  font-size: 14px;\n}\n@keyframes marqueeScroll {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(-50%); }\n}",
      "initialJs": "console.log('Keyframes & Marquee песочница готова');",
      "instructions": "Практика с @keyframes:\n1. Наблюдайте за плавной бесконечной бегущей строкой на GPU\n2. Наведите курсор на строку — animation-play-state: paused плавно остановит ленту на месте\n3. Уберите курсор — анимация продолжится с той же миллисекунды"
    },
    "task": {
      "title": "Создание бесконечного пульсирующего индикатора статуса и модалки с animation-fill-mode",
      "scenario": "Создайте два компонента: 1) Бесконечный пульсирующий индикатор активного сервера (.pulse-indicator) с анимацией scale и box-shadow; 2) Всплывающее модальное окно (.modal-entry), которое плавно выезжает сверху за 0.4s и сохраняет свое конечное положение на экране с помощью animation-fill-mode: forwards, а также поддерживает prefers-reduced-motion.",
      "criteria": [
        "Объявлены сценарии @keyframes pulse и @keyframes modalSlideDown",
        "Индикатор использует animation с infinite и alternate для бесшовной пульсации на GPU",
        "Модальное окно использует animation-fill-mode: forwards для фиксации в конечной точке",
        "Добавлена адаптация @media (prefers-reduced-motion: reduce)"
      ],
      "starterCode": {
        "css": "/* Разработайте CSS-анимации */\n@keyframes pulse {\n}\n@keyframes modalSlideDown {\n}\n.pulse-indicator {\n}\n.modal-entry {\n}"
      },
      "hints": [
        "@keyframes pulse: 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.15); opacity: 1; }",
        ".modal-entry { animation: modalSlideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }"
      ],
      "solution": {
        "css": "@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(45, 255, 138, 0.5);\n  }\n  70% {\n    transform: scale(1.1);\n    box-shadow: 0 0 0 12px rgba(45, 255, 138, 0);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(45, 255, 138, 0);\n  }\n}\n\n@keyframes modalSlideDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-50px) scale(0.95);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n.pulse-indicator {\n  width: 14px;\n  height: 14px;\n  background: #2dff8a;\n  border-radius: 50%;\n  display: inline-block;\n  animation: pulse 2s ease-in-out infinite;\n}\n\n.modal-entry {\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  color: #e6edf3;\n  padding: 24px;\n  border-radius: 12px;\n  animation: modalSlideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .pulse-indicator,\n  .modal-entry {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n  }\n}",
        "explanation": "Анимации выполняются на GPU: индикатор пульсирует плавно без джанка, модалка фиксируется через forwards, а prefers-reduced-motion гарантирует доступность."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css17-q1",
          "question": "Анимация появления отработала, и элемент скачком вернулся в прозрачное состояние. Что добавить?",
          "options": [
            "`animation-iteration-count: infinite` — тогда анимация просто не будет завершаться",
            "`animation-direction: reverse` — элемент завершит проход в начальном состоянии",
            "`animation-play-state: paused` — анимация замрёт на своём финальном кадре",
            "`animation-fill-mode: forwards` — стили последнего кадра сохранятся после окончания"
          ],
          "correctIndex": 3,
          "explanation": "По умолчанию анимация влияет на элемент только пока идёт: как только она заканчивается, действуют обычные правила из таблицы стилей, и элемент отпрыгивает обратно. `forwards` фиксирует значения последнего кадра, `backwards` применяет первый кадр ещё до старта на время задержки, а `both` делает и то, и другое. Ставить бесконечное повторение ради удержания состояния — расход ресурсов впустую."
        },
        {
          "id": "css17-q2",
          "question": "Бегущую строку нужно останавливать при наведении курсора. Что написать в правиле `:hover`?",
          "options": [
            "`animation: none` — анимация снимется, но строка скачком вернётся в исходную точку",
            "`transition: none` — переход отключится, и анимация встанет на паузу",
            "`animation-duration: 0s` — скорость обнулится, и прокрутка остановится",
            "`animation-play-state: paused` — движение замрёт ровно в текущем положении"
          ],
          "correctIndex": 3,
          "explanation": "`animation-play-state` замораживает проигрывание в текущей точке и так же плавно возобновляет его, когда курсор уходит. Снятие анимации целиком действительно останавливает движение, но строка прыгает в начало — резко и неаккуратно. Нулевая длительность приводит к тому же скачку, а `transition` к ключевым кадрам отношения не имеет."
        },
        {
          "id": "css17-q3",
          "question": "Уведомление нужно удалять из разметки сразу после завершения анимации ухода. Что надёжнее таймера?",
          "options": [
            "Событие `transitionend` — оно срабатывает на завершение любых визуальных изменений",
            "Вызов `requestAnimationFrame` — он выполняется ровно в момент последнего кадра",
            "Событие `animationiteration` — оно наступает в конце каждого отдельного прохода",
            "Событие `animationend` — оно наступает в момент реального окончания анимации"
          ],
          "correctIndex": 3,
          "explanation": "`animationend` приходит от браузера тогда, когда анимация действительно закончилась, и остаётся точным при любой задержке, паузе или смене длительности в стилях. Таймер же дублирует число из CSS, и стоит дизайнеру поменять длительность, как удаление рассинхронизируется. `transitionend` относится к переходам, а не к ключевым кадрам, а `animationiteration` срабатывает между повторами, но не в конце."
        },
        {
          "id": "css17-q4",
          "question": "Что делает `animation-direction: alternate` при бесконечном числе повторов?",
          "options": [
            "Один раз меняет направление на противоположное и дальше играет только назад",
            "Чередует направление проходов, поэтому движение выглядит маятниковым",
            "Проигрывает анимацию вперёд и назад одновременно, смешивая соседние кадры",
            "Разворачивает кривую плавности, не затрагивая порядок самих ключевых кадров"
          ],
          "correctIndex": 1,
          "explanation": "Нечётные проходы идут от нуля к ста процентам, чётные — обратно, поэтому элемент плавно возвращается в исходную точку вместо резкого скачка в начало. Это стандартный способ сделать пульсацию или покачивание бесшовными. Значение `reverse` проигрывает все проходы задом наперёд, а `alternate-reverse` начинает с обратного."
        },
        {
          "id": "css17-q5",
          "question": "Какая пара свойств внутри `@keyframes` даёт стабильные шестьдесят кадров в секунду?",
          "options": [
            "`transform` и `opacity` — они обрабатываются на этапе композитинга слоёв",
            "`width` и `height` — размеры пересчитываются быстрее, чем координаты положения",
            "`top` и `left` — смещение по координатам не требует перерисовки содержимого",
            "`margin` и `padding` — отступы не затрагивают положение соседних элементов"
          ],
          "correctIndex": 0,
          "explanation": "Только эти два свойства браузер умеет менять, не пересчитывая раскладку и не перерисовывая содержимое: элемент уже растрирован на собственном слое, и его достаточно сдвинуть, повернуть или притушить на видеокарте. Любые размеры, координаты и отступы запускают Layout для всей ветки дерева на каждом кадре, и анимация начинает захлёбываться на слабых устройствах."
        }
      ]
    }
  },
  {
    "id": "css-18",
    "moduleId": "css",
    "level": 18,
    "title": "Псевдоклассы и псевдоэлементы: полное руководство",
    "subtitle": ":hover, :focus-visible, :has(), :is(), :where(), :nth-child(), ::before, ::after, ::placeholder, ::backdrop",
    "description": "Освойте всю палитру псевдоклассов (состояния, структурные, валидационные, CSS4-селекторы :has(), :is(), :where()) и псевдоэлементов (::before, ::after, ::placeholder, ::selection, ::marker, ::backdrop) для создания интерактивных и декоративных интерфейсов без лишнего JavaScript.",
    "estimatedMinutes": 65,
    "difficulty": "intermediate",
    "tags": [
      "pseudo-classes",
      "pseudo-elements",
      "focus-visible",
      "has-selector",
      "is-where",
      "nth-child",
      "before-after",
      "form-validation-css",
      "css4-selectors"
    ],
    "theory": {
      "overview": "Псевдоклассы и псевдоэлементы — одни из самых мощных и недооценённых инструментов CSS. Они позволяют стилизовать элементы **по их состоянию** (наведение, фокус, валидация), **по позиции в DOM** (первый ребёнок, чётная строка) и даже **создавать виртуальные декоративные узлы** (`::before`, `::after`) без единой строчки HTML или JavaScript.\n\nВ этом уроке мы разберём классические псевдоклассы, революционные CSS4-селекторы `:has()` (первый «родительский селектор» в истории CSS!), `:is()`, `:where()` и `:not()`, а также практики создания иконок, бейджиков и стилизации форм через псевдоэлементы.",
      "sections": [
        {
          "title": "Псевдоклассы состояния: :hover, :active, :focus-visible и :target",
          "content": "Стилизация элементов в зависимости от действий пользователя:\n\n1. **Классические интерактивные псевдоклассы**:\n- `:hover` — курсор мыши над элементом.\n- `:active` — элемент зажат (кнопка мыши нажата).\n- `:focus` — элемент получил фокус (клавиатура ИЛИ клик мыши).\n- `:visited` — посещённая ссылка (ограниченный набор стилей из-за безопасности!).\n\n2. **`:focus-visible` — Современный стандарт фокуса (CSS Level 4)**:\n- Проблема `:focus`: при клике мышью на кнопку появляется некрасивое кольцо обводки, которое раздражает дизайнеров → разработчики ставят `outline: none` → клавиатурные пользователи теряют навигацию!\n- Решение: `:focus-visible` показывает кольцо обводки **ТОЛЬКО при навигации с клавиатуры (Tab)**, но не при клике мышью.\n\n3. **`:target` — Стилизация по якорному хешу URL**:\n- Если URL содержит `#section-2`, элемент с `id=\"section-2\"` можно подсветить через `:target { background: yellow; }`.",
          "image": {
            "src": "/images/lessons/css-pseudo-classes-elements.svg",
            "alt": "CSS Псевдоклассы и псевдоэлементы: :has(), :is(), ::before, ::after",
            "caption": "Классификация псевдоклассов (состояния, структурные, валидационные, CSS4) и псевдоэлементов (::before, ::after, ::backdrop)"
          },
          "codeExample": {
            "language": "css",
            "code": "/* ✅ Правильная стратегия фокуса: :focus-visible вместо :focus */\n.nav-button {\n  background: #161b22;\n  color: #e6edf3;\n  border: 1px solid #30363d;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  /* Убираем стандартный outline */\n  outline: none;\n}\n\n/* Кольцо фокуса показывается ТОЛЬКО при клавиатурной навигации (Tab) */\n.nav-button:focus-visible {\n  outline: 2px solid #2dff8a;\n  outline-offset: 3px;\n  box-shadow: 0 0 0 4px rgba(45, 255, 138, 0.15);\n}\n\n/* Стиль ховера — отдельно */\n.nav-button:hover {\n  background: #21262d;\n  border-color: #2dff8a;\n}\n\n/* Стиль активного нажатия */\n.nav-button:active {\n  transform: scale(0.97);\n}",
            "title": "Профессиональная стратегия фокуса через :focus-visible",
            "explanation": ":focus-visible показывает визуальный индикатор фокуса только при табуляции клавиатурой, исключая раздражающее кольцо от кликов мышью."
          }
        },
        {
          "title": "Структурные псевдоклассы: :nth-child(), :first-of-type и :empty",
          "content": "Выбор элементов по их положению в DOM-дереве:\n\n1. **Семейство `:nth-child(An+B)`**:\n- `:nth-child(odd)` / `:nth-child(even)` — нечётные/чётные строки (зебра-полосы таблиц).\n- `:nth-child(3n)` — каждый третий элемент.\n- `:nth-child(-n+3)` — первые 3 элемента.\n- `:nth-last-child(1)` — последний ребёнок (аналог `:last-child`).\n\n2. **Типизированные селекторы**:\n- `:first-of-type` / `:last-of-type` — первый/последний элемент **данного типа** среди братьев.\n- `:only-child` — единственный потомок у родителя.\n\n3. **`:empty` — Стилизация пустых контейнеров**:\n- Позволяет скрывать или стилизовать контейнеры, которые не содержат ни текста, ни дочерних узлов:\n  `.message-list:empty::after { content: 'Нет сообщений'; color: #8b949e; }`.",
          "codeExample": {
            "language": "css",
            "code": "/* Зебра-полоски таблицы через :nth-child(even) */\n.data-table tbody tr:nth-child(even) {\n  background: rgba(45, 255, 138, 0.04);\n}\n\n/* Убираем нижний бордер у последнего элемента списка */\n.sidebar-nav li:last-child {\n  border-bottom: none;\n}\n\n/* Первые 3 позиции с акцентным маркером */\n.leaderboard li:nth-child(-n+3) {\n  font-weight: bold;\n  color: #2dff8a;\n}\n\n/* Пустой список с плейсхолдером через ::after */\n.task-list:empty {\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.task-list:empty::after {\n  content: '📋 Задач пока нет';\n  color: #8b949e;\n  font-style: italic;\n}",
            "title": "Структурные псевдоклассы для таблиц, списков и пустых контейнеров",
            "explanation": ":nth-child(even) создаёт полосатые таблицы, :empty показывает плейсхолдер для пустого списка."
          }
        },
        {
          "title": "CSS4-селекторы: :has() — революция, :is(), :where() и :not()",
          "content": "Современные логические селекторы уровня CSS Selectors Level 4:\n\n1. **`:has()` — Первый в истории CSS «родительский селектор»!**:\n- До `:has()` стилизовать **родительский** элемент на основе состояния **потомка** было невозможно без JavaScript.\n- `form:has(input:invalid)` — обведёт форму красной рамкой, если хотя бы одно поле невалидно!\n- `.card:has(img)` — добавляет отступы только карточкам, содержащим изображение.\n- `.sidebar:has(.active)` — подсветит сайдбар, если в нём есть активный пункт меню.\n\n2. **`:is()` — Группировка без дублирования**:\n- Объединяет несколько селекторов: `:is(h1, h2, h3) { color: #2dff8a; }` вместо трёх отдельных правил.\n- Специфичность `:is()` равна **самому специфичному** аргументу внутри.\n\n3. **`:where()` — Группировка с нулевой специфичностью**:\n- Аналогичен `:is()`, но имеет специфичность **0** — идеально для сброса стилей (CSS Reset), которые легко переопределить.\n\n4. **`:not()` — Отрицание**:\n- `.list-item:not(:last-child)` — все элементы списка кроме последнего.",
          "codeExample": {
            "language": "css",
            "code": "/* ── :has() — Родительский селектор (CSS4) ── */\n\n/* Форма подсвечивается красным, если ЛЮБОЕ поле невалидно */\n.login-form:has(input:invalid) {\n  border-color: #f85149;\n  box-shadow: 0 0 0 3px rgba(248, 81, 73, 0.15);\n}\n\n/* Карточка без изображения получает увеличенный паддинг */\n.product-card:not(:has(img)) {\n  padding: 32px;\n}\n\n/* Навигация подсвечивается при наличии активной ссылки */\nnav:has(.nav-link.active) {\n  border-left: 3px solid #2dff8a;\n}\n\n/* ── :is() и :where() — Группировка ── */\n\n/* :is() — группировка заголовков (специфичность сохраняется) */\n:is(h1, h2, h3, h4) {\n  font-family: 'Inter', sans-serif;\n  line-height: 1.3;\n}\n\n/* :where() — базовые стили ссылок с нулевой специфичностью (легко переопределить) */\n:where(a) {\n  color: #29e7ff;\n  text-decoration: none;\n}",
            "title": "Революционный :has() — стилизация родителя по состоянию потомка",
            "explanation": ":has() превращает CSS из однонаправленного языка в двунаправленный: теперь родитель может реагировать на состояние детей без JavaScript."
          }
        },
        {
          "title": "Псевдоэлементы: ::before, ::after, ::placeholder, ::selection и ::backdrop",
          "content": "Генерация виртуальных узлов и стилизация нативных элементов браузера:\n\n1. **`::before` и `::after` — Декоративные вставки**:\n- Генерируют виртуальные `inline`-дочерние элементы перед и после содержимого.\n- **Обязательное свойство**: `content: ''` (без `content` псевдоэлемент не создаётся!).\n- Используются для: декоративных иконок, индикаторов «Новое!», анимированных подчёркиваний, счётчиков.\n- **Ограничение**: НЕ работают на **замещаемых элементах** (`<img>`, `<input>`, `<br>`, `<hr>`), потому что эти элементы не содержат дочерний контент.\n\n2. **`::placeholder` — Стилизация текста-подсказки в полях ввода**.\n\n3. **`::selection` — Цвет выделения текста мышкой**:\n- `::selection { background: #2dff8a; color: #0a0e13; }` — брендовое выделение.\n\n4. **`::marker` — Стилизация маркеров списков (`<li>`, `<summary>`)**.\n\n5. **`::backdrop` — Фон за нативным `<dialog>` и Fullscreen API**.",
          "codeExample": {
            "language": "css",
            "code": "/* Бейджик «Новое!» через ::after без HTML-элемента */\n.feature-card.is-new::after {\n  content: 'NEW';\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #2dff8a;\n  color: #0a0e13;\n  font-size: 10px;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 4px;\n  letter-spacing: 0.5px;\n}\n\n/* Стилизация placeholder в полях ввода */\n.search-input::placeholder {\n  color: #484f58;\n  font-style: italic;\n  font-size: 14px;\n}\n\n/* Брендовое выделение текста */\n::selection {\n  background: rgba(45, 255, 138, 0.3);\n  color: #e6edf3;\n}\n\n/* Стилизация маркеров списков */\n.feature-list li::marker {\n  content: '✅ ';\n  font-size: 14px;\n}\n\n/* Фон за нативным модальным окном <dialog> */\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(4px);\n}",
            "title": "Практические паттерны: бейджик ::after, ::placeholder, ::selection и ::backdrop",
            "explanation": "Псевдоэлементы генерируют декоративный контент без засорения HTML-разметки, а ::backdrop стилизует нативный фон <dialog>."
          }
        }
      ],
      "seniorTips": [
        "Используйте `:focus-visible` вместо `:focus` для всех интерактивных элементов — это стандарт современной доступности, который не раздражает дизайнеров при клике мышью.",
        "`:has()` — мощнейший инструмент, но используйте его с осторожностью: сложные цепочки `:has(:has(...))` могут замедлить рендеринг на страницах с тысячами DOM-узлов.",
        "Всегда указывайте `content: ''` для `::before`/`::after`, даже если псевдоэлемент служит чисто визуальным блоком — без этого свойства он не создастся.",
        "Разница `:is()` и `:where()`: `:is()` сохраняет максимальную специфичность аргументов, `:where()` всегда имеет специфичность 0. Используйте `:where()` в CSS-reset и utility-классах."
      ],
      "commonMistakes": [
        {
          "bad": "/* Использование :focus вместо :focus-visible */\n.button:focus { outline: 2px solid blue; /* ❌ Некрасивое кольцо при клике мышью */ }",
          "good": ".button:focus-visible { outline: 2px solid #2dff8a; outline-offset: 2px; }",
          "reason": ":focus-visible показывает обводку фокуса только при клавиатурной навигации, улучшая UX для всех пользователей."
        },
        {
          "bad": "/* Забытое content: '' у ::before */\n.icon-box::before { width: 20px; height: 20px; background: red; /* ❌ Ничего не отрендерится! */ }",
          "good": ".icon-box::before { content: ''; display: block; width: 20px; height: 20px; background: red; }",
          "reason": "Без свойства content псевдоэлемент не генерируется в DOM."
        },
        {
          "bad": "/* ::before на замещаемых элементах */\nimg::before { content: 'Loading...'; /* ❌ Не работает! */ }",
          "good": "/* Используйте обёрточный <div> для декорации замещаемых элементов */\n.img-wrapper::before { content: ''; /* ✅ Работает на обёртке */ }",
          "reason": "Элементы <img>, <input>, <br> не имеют дочернего содержимого, поэтому ::before/::after игнорируются."
        }
      ],
      "keyTakeaways": [
        ":focus-visible показывает фокусное кольцо только при клавиатурной навигации (Tab).",
        ":has() — первый в истории CSS «родительский селектор», позволяющий стилизовать родителя по состоянию потомка.",
        ":is() группирует селекторы с сохранением специфичности, :where() — с нулевой специфичностью.",
        "::before и ::after требуют обязательного content: '' и не работают на замещаемых элементах.",
        "::backdrop стилизует нативный фон за <dialog> и Fullscreen без JS-оверлеев."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"pseudo-sandbox\">\n  <form class=\"demo-form\">\n    <label>Email:</label>\n    <input type=\"email\" class=\"demo-input\" placeholder=\"user@example.com\" required />\n    <label>Имя:</label>\n    <input type=\"text\" class=\"demo-input\" placeholder=\"Ваше имя\" required minlength=\"2\" />\n    <button type=\"submit\" class=\"demo-submit-btn\">Отправить</button>\n  </form>\n  <p style=\"color:#8b949e; font-size:11px; margin-top:12px;\">Введите невалидный email — форма подсветится красным через :has(input:invalid)</p>\n</div>",
      "initialCss": ".pseudo-sandbox { padding: 20px; background: #0a0e13; font-family: monospace; color: #e6edf3; }\n.demo-form { display: flex; flex-direction: column; gap: 8px; padding: 16px; border: 2px solid #30363d; border-radius: 10px; transition: border-color 0.3s, box-shadow 0.3s; max-width: 300px; }\n.demo-form:has(input:invalid) { border-color: #f85149; box-shadow: 0 0 0 3px rgba(248,81,73,0.15); }\n.demo-form:has(input:valid:not(:placeholder-shown)) { border-color: #2dff8a; box-shadow: 0 0 0 3px rgba(45,255,138,0.1); }\n.demo-input { background: #161b22; border: 1px solid #30363d; color: #e6edf3; padding: 8px 12px; border-radius: 6px; outline: none; }\n.demo-input:focus-visible { border-color: #29e7ff; box-shadow: 0 0 0 2px rgba(41,231,255,0.2); }\n.demo-input:invalid { border-color: #f85149; }\n.demo-input::placeholder { color: #484f58; font-style: italic; }\n::selection { background: rgba(45,255,138,0.3); color: #e6edf3; }\n.demo-submit-btn { background: #2dff8a; color: #0a0e13; border: none; padding: 10px; border-radius: 6px; font-weight: bold; cursor: pointer; }\n.demo-submit-btn:focus-visible { outline: 2px solid #29e7ff; outline-offset: 3px; }",
      "initialJs": "document.querySelector('.demo-form').addEventListener('submit', e => { e.preventDefault(); console.log('Форма отправлена!'); });",
      "instructions": "Практика с псевдоклассами:\n1. Введите невалидный email — :has(input:invalid) подсветит ВСЕЮ ФОРМУ красным!\n2. Заполните оба поля корректно — рамка формы станет зелёной\n3. Нажмите Tab для навигации — :focus-visible покажет голубое кольцо фокуса\n4. Выделите текст мышкой — ::selection покажет брендовый зелёный цвет"
    },
    "task": {
      "title": "Создание интерактивной формы с :has(), :focus-visible, :invalid и ::after бейджиками",
      "scenario": "Создайте CSS-стилизацию формы регистрации: при наличии невалидного поля (input:invalid) вся форма подсвечивается красным через :has(), при всех валидных полях — зелёным. Каждое обязательное поле помечено звёздочкой через label::after. Кнопка отправки использует :focus-visible для клавиатурного фокуса.",
      "criteria": [
        "form:has(input:invalid) подсвечивает рамку формы красным",
        "label::after с content: ' *' для обязательных полей",
        "input:focus-visible показывает кольцо фокуса без вмешательства мышиного клика",
        "::placeholder стилизует текст подсказки",
        "::selection настроен с брендовым выделением"
      ],
      "starterCode": {
        "css": "/* Стилизуйте форму с псевдоклассами и псевдоэлементами */\n.register-form {\n}\n.register-form:has(input:invalid) {\n}\nlabel.required::after {\n}\ninput:focus-visible {\n}"
      },
      "hints": [
        "form:has(input:invalid) { border-color: #f85149; box-shadow: 0 0 0 3px rgba(248,81,73,0.15); }",
        "label.required::after { content: ' *'; color: #f85149; font-weight: bold; }"
      ],
      "solution": {
        "css": ".register-form {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 24px;\n  border: 2px solid #30363d;\n  border-radius: 12px;\n  background: #0d1117;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n\n.register-form:has(input:invalid) {\n  border-color: #f85149;\n  box-shadow: 0 0 0 3px rgba(248, 81, 73, 0.15);\n}\n\n.register-form:has(input:valid:not(:placeholder-shown)) {\n  border-color: #2dff8a;\n}\n\nlabel.required::after {\n  content: ' *';\n  color: #f85149;\n  font-weight: bold;\n}\n\ninput {\n  background: #161b22;\n  border: 1px solid #30363d;\n  color: #e6edf3;\n  padding: 10px 14px;\n  border-radius: 8px;\n  outline: none;\n}\n\ninput:focus-visible {\n  border-color: #2dff8a;\n  box-shadow: 0 0 0 3px rgba(45, 255, 138, 0.15);\n}\n\ninput:invalid {\n  border-color: #f85149;\n}\n\ninput::placeholder {\n  color: #484f58;\n  font-style: italic;\n}\n\n::selection {\n  background: rgba(45, 255, 138, 0.3);\n  color: #e6edf3;\n}",
        "explanation": ":has(input:invalid) стилизует родительскую форму по состоянию дочерних полей, ::after создаёт звёздочку обязательности, :focus-visible обеспечивает доступность."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css18-q1",
          "question": "Какие элементы выберет селектор `li:nth-child(2n + 3)`?",
          "options": [
            "Только второй и третий элементы списка",
            "Элементы с третьего по второй с конца списка включительно",
            "Каждый второй, начиная с третьего: третий, пятый, седьмой и далее",
            "Каждый третий, начиная со второго: второй, пятый, восьмой и далее"
          ],
          "correctIndex": 2,
          "explanation": "Формула читается как последовательность: коэффициент перед `n` задаёт шаг, а свободный член — точку старта. Подставляя `n = 0, 1, 2`, получаем номера 3, 5, 7 и так далее. Элементы до третьего не попадают, потому что отрицательные значения `n` дают номера меньше единицы. Отсюда и знакомые частные случаи: `2n` — чётные, `2n+1` — нечётные."
        },
        {
          "id": "css18-q2",
          "question": "Что делает селектор `.card:has(img)` и чем он принципиально нов?",
          "options": [
            "Выбирает картинки внутри карточки — это краткая запись для `.card img`",
            "Выбирает первую карточку с картинкой, пропуская все последующие такие же",
            "Выбирает карточки, у которых изображение уже полностью загружено и отрисовано",
            "Выбирает саму карточку, если внутри есть картинка: стилизация родителя по потомку"
          ],
          "correctIndex": 3,
          "explanation": "До появления `:has()` CSS умел спускаться по дереву, но не подниматься: узнать о содержимом родителя можно было только скриптом. Теперь стилизуется именно карточка, и лишь при условии, что внутри найдётся изображение. Отсюда приёмы вроде `form:has(input:invalid)` или `label:has(input:checked)`. Состояние загрузки картинки селектору недоступно — он смотрит на структуру документа."
        },
        {
          "id": "css18-q3",
          "question": "Псевдоэлементу `::after` заданы размеры и фон, но на странице он не появляется. Чего не хватает?",
          "options": [
            "`position: absolute` — псевдоэлементы отображаются только вне общего потока",
            "`content: ''` — без этого свойства псевдоэлемент вообще не создаётся",
            "`display: block` — по умолчанию у псевдоэлементов нулевая высота строки",
            "`z-index: 1` — без явного слоя псевдоэлемент рисуется под своим родителем"
          ],
          "correctIndex": 1,
          "explanation": "Свойство `content` — не украшение, а условие существования: пока оно не задано, узел просто не генерируется, и никакие размеры с фоном к нему не применятся. Для чисто декоративных элементов пишут пустую строку `content: ''`. Уже после этого можно назначать `display`, позиционирование и всё остальное."
        },
        {
          "id": "css18-q4",
          "question": "Почему `::before` не работает на `<img>`, но прекрасно работает на `<div>`?",
          "options": [
            "Псевдоэлементы работают только на блочных элементах, а `<img>` является строчным",
            "У `<img>` нет закрывающего тега, поэтому браузеру некуда вставить псевдоузел",
            "`<img>` — замещаемый элемент: его содержимое рисует не разметка, а внешний ресурс",
            "У `<img>` нет собственного контекста форматирования для вложенных узлов"
          ],
          "correctIndex": 2,
          "explanation": "Псевдоэлементы вставляются в начало и конец содержимого элемента, а у замещаемых элементов собственного содержимого нет: браузер целиком подменяет их внешним ресурсом — картинкой, видео, нативным контролом. По той же причине приём не работает с `<input>` и `<video>`. Отсутствие закрывающего тега тут ни при чём: у `<input>` он тоже отсутствует, но проблема не в этом, а строчные элементы вроде `<span>` псевдоэлементы принимают прекрасно."
        },
        {
          "id": "css18-q5",
          "question": "Чем `:where(.a, .b) .title` отличается от `:is(.a, .b) .title` по весу специфичности?",
          "options": [
            "Ничем: обе конструкции считаются как один класс плюс ещё один класс",
            "`:where()` добавляет нулевой вес, а `:is()` — вес самого тяжёлого из аргументов",
            "`:where()` суммирует вес всех перечисленных аргументов, а `:is()` берёт только первый",
            "`:where()` весит как идентификатор, а `:is()` — как обычный класс"
          ],
          "correctIndex": 1,
          "explanation": "Обе конструкции группируют селекторы, но по-разному влияют на вес. `:is()` принимает специфичность самого «тяжёлого» аргумента в скобках, поэтому один идентификатор внутри поднимет вес всего правила. `:where()` всегда весит ноль, и переопределить такое правило можно одним классом. Именно поэтому `:where()` применяют в сбросах стилей и базовых слоях библиотек — чтобы не мешать прикладному коду."
        }
      ]
    }
  },
  {
    "id": "css-19",
    "moduleId": "css",
    "level": 19,
    "title": "Математические функции CSS: clamp(), min(), max(), calc() и Fluid Typography",
    "subtitle": "Адаптивная верстка без медиа-запросов: fluid типографика, адаптивные отступы, сравнение min/max и математика динамических интерфейсов",
    "description": "Освойте современную математику в CSS: возможности и синтаксические ловушки функции calc(), установку верхней и нижней границ через min() и max(), динамическое масштабирование через clamp(), формулу Fluid Typography для плавного изменения размеров шрифта от мобильных до 4K мониторов без ступенчатых медиа-запросов.",
    "estimatedMinutes": 65,
    "difficulty": "advanced",
    "tags": [
      "css-math",
      "clamp",
      "calc",
      "min-max-css",
      "fluid-typography",
      "fluid-spacing",
      "responsive-design",
      "modern-css"
    ],
    "theory": {
      "overview": "Раньше для создания адаптивного дизайна верстальщики писали десятки ступенчатых медиа-запросов (`@media (min-width: 768px)`, `@media (min-width: 1024px)`...). На каждом брейкпоинте шрифты и отступы резко «прыгали» в размере.\n\nСовременные математические функции CSS — **`clamp()`**, **`min()`**, **`max()`** и **`calc()`** — совершили революцию в адаптивности: они позволяют создавать **по-настоящему плавный дизайн (Fluid Responsive Design)**, где размеры элементов непрерывно и пропорционально подстраиваются под любой экран от Apple Watch до 4K-монитора без единого `@media`!\n\nВ этом уроке мы разберём математику этих функций и научимся проектировать флюидные системы.",
      "sections": [
        {
          "title": "Функция calc(): смешивание единиц и критическое правило пробелов",
          "content": "Возможности вычислений в CSS:\n\n1. **Смешивание разнородных единиц измерения**:\n- Главная сила `calc()` — возможность комбинировать фиксированные и относительные величины: пиксели, проценты, viewport-единицы и rem:\n  `width: calc(100% - 40px);`\n  `height: calc(100vh - 80px);` (высота экрана минус шапка сайта).\n\n2. **Критическое синтаксическое правило пробелов ⚠️**:\n- Операторы сложения `+` и вычитания `-` **ОБЯЗАТЕЛЬНО должны быть отделены пробелами с обеих сторон**!\n- `calc(100% - 20px)` — ✅ Корректно.\n- `calc(100%-20px)` — ❌ Синтаксическая ошибка! Браузер воспримет `-20px` как отрицательное число и проигнорирует всё свойство.\n- Для умножения `*` и деления `/` пробелы не обязательны, но рекомендуются для читаемости.",
          "image": {
            "src": "/images/lessons/css-math-clamp-calc.svg",
            "alt": "CSS Математические функции clamp, min, max, calc и Fluid Typography",
            "caption": "Сравнение min(), max(), синтаксис clamp(MIN, PREFERRED, MAX) и плавная типографика Fluid Typography"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Расчет высоты главного экрана за вычетом фиксированного хедера (70px) и паддингов */\n.hero-section {\n  /* 100vh минус хедер и отступы */\n  min-height: calc(100vh - 70px - 2rem);\n  \n  /* Расчет ширины колонок в сетке с учетом зазора */\n  width: calc((100% - 3 * 16px) / 4);\n  \n  /* Вложенные расчеты calc() поддерживаются нативно */\n  padding: calc(1rem + 2 * (100vw - 320px) / (1200 - 320));\n}\n\n/* ❌ Ошибка: отсутствие пробелов вокруг минуса ломает свойство! */\n/* .bad-example { width: calc(100%-40px); } */",
            "title": "Использование calc() со смешиванием vh, rem, px и процентов",
            "explanation": "calc() динамически высчитывает точные размеры прямо в браузере при любом изменении размеров окна."
          }
        },
        {
          "title": "Функции min() и max(): ограничение диапазонов",
          "content": "Интуиция работы функций `min()` и `max()` в CSS:\n\n1. **`min(значение1, значение2, ...)` — Задает ВЕРХНЮЮ границу (Потолок)**:\n- Функция возвращает **наименьшее** из переданных значений.\n- **Современный эталон адаптивного контейнера**:\n  `width: min(100% - 32px, 1200px);`\n  - На смартфоне (`width < 1200px`): `100% - 32px` меньше, чем `1200px` → ширина равна `100% - 32px` (с боковыми полями 16px).\n  - На широком мониторе: `1200px` меньше, чем `100% - 32px` → ширина зафиксирована на `1200px`!\n  - Заменяет связку `width: 100%; max-width: 1200px; padding: 0 16px;` в **одну строчку кода**!\n\n2. **`max(значение1, значение2, ...)` — Задает НИЖНЮЮ границу (Пол)**:\n- Возвращает **наибольшее** из значений.\n- `padding: max(16px, 4vw);` — отступ динамически растет с шириной экрана (4vw), но **никогда не станет меньше 16px** даже на самом узком экране смартфона.",
          "codeExample": {
            "language": "css",
            "code": "/* Современный центрированный контейнер в 2 строки без медиа-запросов */\n.modern-container {\n  /* Ширина: 100% минус боковые отступы на мобилке, но не более 1280px на десктопе */\n  width: min(100% - 32px, 1280px);\n  margin-inline: auto;\n}\n\n/* Безопасные отступы секции: динамические 5vw, но не менее 24px */\n.section-wrapper {\n  padding-block: max(24px, 5vw);\n}",
            "title": "Адаптивный контейнер через min() и безопасный отступ через max()",
            "explanation": "min() устанавливает верхний предел ширины контента, а max() предотвращает чрезмерное сжатие отступов на мобильных."
          }
        },
        {
          "title": "Функция clamp(): 3 параметра и идеальный баланс",
          "content": "Как устроена функция `clamp(MIN, PREFERRED, MAX)`:\n\n1. **Синтаксис**:\n- `MIN` (Минимум) — нижний предел (пол), ниже которого значение не опустится.\n- `PREFERRED` (Желаемое значение) — динамическое плавающее значение (обычно с `vw` или `rem`).\n- `MAX` (Максимум) — верхний предел (потолок), выше которого значение не поднимется.\n\n2. **Эквивалент через max и min**:\n- Запись `clamp(16px, 4vw, 40px)` абсолютно эквивалентна `max(16px, min(4vw, 40px))`.\n\n3. **Внутри `clamp()`, `min()`, `max()` не нужен `calc()`**:\n- Математические операторы `+`, `-`, `*`, `/` вычисляются внутри этих функций автоматически:\n  `font-size: clamp(1rem, 0.8rem + 1.5vw, 2.5rem);` — валидный и чистый синтаксис!",
          "codeExample": {
            "language": "css",
            "code": "/* Динамический размер карточки: от 280px до 420px */\n.responsive-card {\n  width: clamp(280px, 30vw, 420px);\n  \n  /* Динамические внутренние отступы карточки */\n  padding: clamp(16px, 2.5vw, 32px);\n  \n  /* Динамический радиус скругления углов */\n  border-radius: clamp(8px, 1.2vw, 16px);\n  \n  background: #161b22;\n  border: 1px solid #30363d;\n}",
            "title": "Плавное масштабирование ширины, паддингов и скруглений карточки",
            "explanation": "clamp() удерживает размеры в строгих границах безопасности, плавно интерполируя промежуточные значения."
          }
        },
        {
          "title": "Fluid Typography (Плавная типографика) на практике",
          "content": "Математика идеального шрифта без ступенчатых медиа-запросов:\n\n1. **Проблема традиционной верстки**:\n- На мобильном `h1 = 24px`, на планшете `h1 = 36px`, на десктопе `h1 = 56px`.\n- При ресайзе окна шрифт резко «прыгает» в размерах на каждом брейкпоинте.\n\n2. **Формула Fluid Typography**:\n- Используем базовый размер в `rem` плюс динамическую добавку в `vw`:\n  `h1 { font-size: clamp(1.75rem, 1.2rem + 2.5vw, 3.5rem); }`\n- **На смартфонах (320px)**: `font-size` зафиксирован на `1.75rem` (28px) — текст не вылезает за экран.\n- **На планшетах и ноутбуках**: размер плавно и непрерывно масштабируется пиксель за пикселем.\n- **На 4K мониторах (> 2000px)**: зафиксирован на `3.5rem` (56px) — заголовок не раздувается до гигантских размеров!",
          "codeExample": {
            "language": "css",
            "code": "/* Полная дизайн-система плавной типографики (Fluid Typography Scale) */\n:root {\n  /* Основной текст: от 15px до 18px */\n  --text-base: clamp(0.9375rem, 0.9rem + 0.2vw, 1.125rem);\n  \n  /* Подзаголовки h3: от 18px до 24px */\n  --text-h3: clamp(1.125rem, 1rem + 0.6vw, 1.5rem);\n  \n  /* Заголовки секций h2: от 22px до 36px */\n  --text-h2: clamp(1.375rem, 1.1rem + 1.4vw, 2.25rem);\n  \n  /* Главные заголовки h1: от 28px до 56px */\n  --text-h1: clamp(1.75rem, 1.2rem + 2.5vw, 3.5rem);\n  \n  /* Флюидный межэлементный зазор (Gap) */\n  --space-grid: clamp(16px, 2vw + 8px, 48px);\n}\n\nh1 { font-size: var(--text-h1); line-height: 1.15; }\nh2 { font-size: var(--text-h2); line-height: 1.25; }\np  { font-size: var(--text-base); line-height: 1.6; }\n\n.catalog-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: var(--space-grid);\n}",
            "title": "Дизайн-система Fluid Typography на CSS Custom Properties",
            "explanation": "Все уровни типографики и отступы сетки масштабируются согласованно и гармонично на экранах любого разрешения."
          }
        }
      ],
      "seniorTips": [
        "При создании Fluid Typography никогда не используйте чистый `vw` без базы в `rem` (например, `font-size: 3vw`), иначе пользователи с нарушением зрения не смогут увеличить шрифт в настройках браузера (нарушение критериев WCAG). Всегда пишите `clamp(1rem, 0.8rem + 1.5vw, 2.5rem)`.",
        "Внутри функций `min()`, `max()` и `clamp()` не нужно писать `calc()` — выражения вычисляются автоматически.",
        "Замените устаревшую конструкцию `width: 100%; max-width: 1200px; padding: 0 16px; margin: 0 auto;` на современную: `width: min(100% - 32px, 1200px); margin-inline: auto;`.",
        "Помните о пробелах в `calc()`: `calc(100% - 20px)` работает, а `calc(100%-20px)` полностью ломает рендеринг свойства."
      ],
      "commonMistakes": [
        {
          "bad": "/* calc без пробелов вокруг операторов */\n.sidebar { width: calc(100%-250px); /* ❌ Браузер бракует всё свойство! */ }",
          "good": ".sidebar { width: calc(100% - 250px); }",
          "reason": "Спецификация CSS требует пробелов вокруг операторов + и -, чтобы не путать их со знаками отрицательных величин."
        },
        {
          "bad": "/* Использование чистого vw для размера шрифта */\nh1 { font-size: 5vw; /* ❌ На мобильном 320px шрифт станет 16px (микроскопический), а на 4K — 192px! */ }",
          "good": "h1 { font-size: clamp(1.75rem, 1.2rem + 2.5vw, 3.5rem); }",
          "reason": "Чистый vw не имеет ограничений минимума и максимума и ломает масштабирование для слабовидящих людей."
        },
        {
          "bad": "/* Избыточная вложенность calc() внутри clamp() */\nh1 { font-size: clamp(16px, calc(1rem + 2vw), 32px); }",
          "good": "h1 { font-size: clamp(16px, 1rem + 2vw, 32px); }",
          "reason": "Функции clamp(), min() и max() уже умеют выполнять математические операции без вызова calc()."
        }
      ],
      "keyTakeaways": [
        "calc() смешивает разнородные единицы, но требует обязательных пробелов вокруг + и -.",
        "min() задает верхнюю границу (потолок), max() — нижнюю границу (пол).",
        "clamp(MIN, PREFERRED, MAX) удерживает значение в безопасном диапазоне.",
        "Fluid Typography масштабирует текст плавно без резких скачков медиа-запросов.",
        "width: min(100% - 32px, 1200px) создает идеальный адаптивный контейнер в одну строку."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"fluid-sandbox\">\n  <h1 class=\"fluid-title\">Fluid Typography ⚡</h1>\n  <p class=\"fluid-desc\">Этот заголовок плавно масштабируется от 20px до 48px в зависимости от ширины экрана без единого @media query!</p>\n  <div class=\"fluid-box\">\n    <span>Контейнер: width: min(100% - 32px, 600px)</span>\n  </div>\n</div>",
      "initialCss": ".fluid-sandbox { padding: 20px; background: #0a0e13; font-family: monospace; color: #e6edf3; }\n.fluid-title {\n  font-size: clamp(1.25rem, 1rem + 2.5vw, 3rem);\n  color: #2dff8a;\n  line-height: 1.2;\n  margin-bottom: 12px;\n}\n.fluid-desc {\n  font-size: clamp(0.875rem, 0.8rem + 0.5vw, 1.125rem);\n  color: #8b949e;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.fluid-box {\n  width: min(100% - 32px, 600px);\n  padding: clamp(12px, 2vw, 24px);\n  background: #161b22;\n  border: 1px solid #29e7ff;\n  border-radius: clamp(6px, 1vw, 12px);\n  text-align: center;\n}",
      "initialJs": "console.log('Fluid Math песочница готова');",
      "instructions": "Практика с clamp() и min():\n1. Изменяйте размер окна браузера или ширину контейнера\n2. Наблюдайте, как размер шрифта плавно и непрерывно масштабируется без рывков\n3. Блок fluid-box адаптируется по формуле min(100% - 32px, 600px)"
    },
    "task": {
      "title": "Разработка флюидной адаптивной карточки профиля на clamp(), min() и calc()",
      "scenario": "Создайте адаптивную карточку пользователя без единого медиа-запроса @media: ширина карточки должна вычисляться через min(100% - 24px, 480px) с центрированием, размер аватара должен быть clamp(60px, 8vw, 100px), заголовок имени — clamp(1.25rem, 1rem + 1.5vw, 2rem), а внутренние отступы — clamp(16px, 3vw, 32px).",
      "criteria": [
        "Карточка использует width: min(100% - 24px, 480px) и margin-inline: auto",
        "Аватар масштабируется через clamp(60px, 8vw, 100px) для ширины и высоты",
        "Заголовок имени масштабируется через clamp(1.25rem, 1rem + 1.5vw, 2rem)",
        "Внутренние отступы карточки настроены через clamp(16px, 3vw, 32px)",
        "Не используются медиа-запросы @media"
      ],
      "starterCode": {
        "css": "/* Разработайте флюидную карточку без @media */\n.fluid-profile-card {\n}\n.profile-avatar {\n}\n.profile-name {\n}"
      },
      "hints": [
        ".fluid-profile-card { width: min(100% - 24px, 480px); margin-inline: auto; padding: clamp(16px, 3vw, 32px); }",
        ".profile-avatar { width: clamp(60px, 8vw, 100px); height: clamp(60px, 8vw, 100px); border-radius: 50%; }"
      ],
      "solution": {
        "css": ".fluid-profile-card {\n  width: min(100% - 24px, 480px);\n  margin-inline: auto;\n  padding: clamp(16px, 3vw, 32px);\n  background: #161b22;\n  border: 1px solid #2dff8a;\n  border-radius: clamp(8px, 1.5vw, 16px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: clamp(12px, 2vw, 20px);\n}\n\n.profile-avatar {\n  width: clamp(60px, 8vw, 100px);\n  height: clamp(60px, 8vw, 100px);\n  border-radius: 50%;\n  border: 2px solid #2dff8a;\n  object-fit: cover;\n}\n\n.profile-name {\n  font-size: clamp(1.25rem, 1rem + 1.5vw, 2rem);\n  color: #e6edf3;\n  line-height: 1.2;\n  font-weight: bold;\n}\n\n.profile-bio {\n  font-size: clamp(0.875rem, 0.8rem + 0.4vw, 1rem);\n  color: #8b949e;\n  line-height: 1.5;\n}",
        "explanation": "Все элементы карточки (размеры, аватар, шрифты, зазоры) непрерывно и пропорционально масштабируются на экранах любой ширины."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css19-q1",
          "question": "Какие из этих объявлений с calc() браузер реально применит?",
          "codeSnippet": ".a { width: calc(100%-20px); }\n.b { width: calc(100% -20px); }\n.c { width: calc(100% - 20px); }",
          "options": [
            "Все три: пробелы вокруг операторов носят чисто рекомендательный характер",
            "Только `.c` — знак вычитания обязан быть отделён пробелами с обеих сторон",
            "`.b` и `.c` — достаточно одного пробела перед знаком операции",
            "Только `.a` — как раз лишние пробелы внутри `calc()` и ломают выражение"
          ],
          "correctIndex": 1,
          "explanation": "Без пробелов парсер не может отличить знак операции от знака числа: `100%-20px` он читает как одно непонятное значение, а `100% -20px` — как два значения подряд, то есть тоже ошибку. Оба объявления отбрасываются целиком. Правило касается только сложения и вычитания: `calc(100%/3)` и `calc(2*1rem)` допустимы и без пробелов, но ставить их всё равно стоит для единообразия."
        },
        {
          "id": "css19-q2",
          "question": "Почему `width: min(100%, 1200px)` задаёт МАКСИМАЛЬНУЮ ширину контейнера, хотя функция называется `min`?",
          "options": [
            "Имя функции историческое: фактически она возвращает наибольшее из значений",
            "Она берёт меньшее из двух, поэтому выше 1200px ширина подняться уже не может",
            "Она берёт меньшее, но для свойства `width` браузер инвертирует результат",
            "Она возвращает среднее, которое на широких экранах стремится к 1200px"
          ],
          "correctIndex": 1,
          "explanation": "Здесь легко запутаться, пока не проследить оба случая. На узком экране меньшим оказывается `100%`, и контейнер занимает всю доступную ширину. На широком меньшим становится `1200px`, и рост останавливается — получается верхняя граница, то есть привычный `max-width`. Симметрично, `max()` задаёт нижнюю границу, работая как `min-width`."
        },
        {
          "id": "css19-q3",
          "question": "Какое значение даст `font-size: clamp(1rem, 2vw, 3rem)` при ширине окна 320px?",
          "options": [
            "1rem — предпочтительные 6.4px оказались ниже минимума и подтянулись до него",
            "2vw, то есть 6.4px — предпочтительное значение всегда имеет приоритет",
            "3rem — на узких экранах применяется верхняя граница диапазона",
            "2rem — берётся середина между минимальным и максимальным значениями"
          ],
          "correctIndex": 0,
          "explanation": "Два процента от 320 пикселей дают всего 6.4 пикселя — текст такого размера прочитать невозможно. Именно от этого и защищает нижняя граница: результат поднимается до 1rem, то есть 16 пикселей. Ровно так же верхняя граница не даёт заголовку разрастись на большом мониторе. Предпочтительное значение действует только внутри диапазона."
        },
        {
          "id": "css19-q4",
          "question": "Почему `font-size: 4vw` для основного текста нарушает требования доступности?",
          "options": [
            "Единица `vw` не поддерживается при системном увеличении шрифта в мобильных браузерах",
            "Значения в `vw` округляются до целых пикселей, из-за чего текст становится нечитаемым",
            "Размер привязан только к ширине окна и не реагирует на настройку кегля в браузере",
            "`vw` отключает перенос строк, и длинные слова выходят за пределы экрана"
          ],
          "correctIndex": 2,
          "explanation": "Человек со слабым зрением обычно увеличивает базовый размер шрифта в настройках браузера, и все размеры в `rem` послушно растут. Значение в `vw` считается от ширины окна и на эту настройку не реагирует вовсе — текст остаётся прежним. Поэтому плавную типографику пишут суммой: `clamp(1rem, 0.8rem + 1.5vw, 2.5rem)`, где слагаемое в `rem` сохраняет зависимость от пользовательских настроек."
        },
        {
          "id": "css19-q5",
          "question": "Нужно ли писать `calc()` внутри выражения `clamp(1rem, calc(0.8rem + 1.5vw), 3rem)`?",
          "options": [
            "Да, иначе сложение разных единиц не выполнится и объявление будет отброшено",
            "Да, но лишь когда складываются единицы разных типов, например `rem` и `vw`",
            "Нет, но только для сложения; умножение и деление по-прежнему требуют `calc()`",
            "Нет, математика внутри этих функций работает и без обёртки — вызов здесь лишний"
          ],
          "correctIndex": 3,
          "explanation": "Функции `clamp()`, `min()` и `max()` сами являются математическими: внутри их аргументов доступны все четыре операции по тем же правилам, что и в `calc()`, включая обязательные пробелы вокруг плюса и минуса. Запись без лишней обёртки короче и читается лучше: `clamp(1rem, 0.8rem + 1.5vw, 3rem)`. Вложенный `calc()` не ошибка, но и смысла в нём нет."
        }
      ]
    }
  },
  {
    "id": "css-20",
    "moduleId": "css",
    "level": 20,
    "title": "Методологии CSS: БЭМ (BEM), CSS Modules, CSS-in-JS, Tailwind и Архитектура стилей",
    "subtitle": "Изоляция глобального скоупа: Блок-Элемент-Модификатор, Scoped CSS Modules, Runtime vs Zero-Runtime CSS-in-JS и Utility-First подход",
    "description": "Освойте эволюцию и архитектуру стилизации в веб-разработке: методологию БЭМ для устранения каскадных конфликтов, локальный скоупинг через CSS Modules с хешированием классов, возможности и ограничения CSS-in-JS (Emotion, Styled Components, Zero-Runtime Vanilla Extract), и философию Utility-First (Tailwind CSS, UnoCSS) для создания масштабируемых дизайн-систем.",
    "estimatedMinutes": 70,
    "difficulty": "intermediate",
    "tags": [
      "css-methodologies",
      "bem",
      "css-modules",
      "css-in-js",
      "tailwind",
      "styled-components",
      "vanilla-extract",
      "design-tokens",
      "architecture"
    ],
    "theory": {
      "overview": "Главная историческая проблема CSS — **глобальная область видимости (Global Scope)**. Правило `.btn { color: red; }`, написанное для всплывающего окна, случайно перекрашивает все кнопки оформления заказа на сайте. В крупных проектах это приводило к «войнам специфичности» с десятками `!important` и страху трогать старый CSS-код.\n\nИндустрия прошла путь эволюции от методологий соглашений об именах (**БЭМ**) до автоматической изоляции сборщиками (**CSS Modules**), стилей внутри компонентов (**CSS-in-JS**) и атомарного подхода (**Tailwind CSS**).\n\nВ этом уроке мы разберём каждую парадигму, их плюсы, минусы и критерии выбора под конкретный проект.",
      "sections": [
        {
          "title": "Методология БЭМ: Блок, Элемент, Модификатор и плоская специфичность",
          "content": "Как соглашение об именах решило проблему каскада:\n\n1. **3 Сущности БЭМ**:\n- **Блок (`block`)**: функционально независимый компонент страницы (кнопка, форма, карточка товара). Может вкладываться в другие блоки: `.product-card`, `.nav-menu`.\n- **Элемент (`block__elem`)**: составная часть блока, которая не может существовать отдельно от него. Обозначается двойным подчеркиванием: `.product-card__title`, `.product-card__price`.\n- **Модификатор (`block_mod` или `block__elem_mod`)**: флаг состояния, темы или размера. Обозначается подчеркиванием (или двойным дефисом): `.product-card_featured`, `.product-card__btn_disabled`.\n\n2. **Главное преимущество БЭМ — Плоская специфичность (0-1-0)**:\n- Селекторы никогда не вкладываются друг в друга (`.header .nav .item .link` ❌).\n- Каждый селектор состоит из **ОДНОГО класса**: `.header__link` ✅. Это исключает каскадные конфликты и делает переопределение стилей предсказуемым без `!important`.",
          "image": {
            "src": "/images/lessons/css-methodologies-bem-tailwind.svg",
            "alt": "Методологии CSS: БЭМ, CSS Modules, CSS-in-JS и Tailwind",
            "caption": "Эволюция изоляции стилей: БЭМ соглашения, автоматический скоуп CSS Modules, CSS-in-JS и Utility-First Tailwind"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Блок: Карточка пользователя */\n.user-card {\n  background: #161b22;\n  border: 1px solid #30363d;\n  border-radius: 12px;\n  padding: 20px;\n}\n\n/* Элементы блока */\n.user-card__avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n}\n\n.user-card__title {\n  font-size: 18px;\n  color: #e6edf3;\n  margin-top: 12px;\n}\n\n.user-card__bio {\n  color: #8b949e;\n  font-size: 14px;\n}\n\n/* Модификаторы темы и состояния */\n.user-card_premium {\n  border-color: #2dff8a;\n  box-shadow: 0 0 20px rgba(45, 255, 138, 0.15);\n}\n\n.user-card__btn_disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}",
            "title": "Чистая архитектура БЭМ с плоской специфичностью селекторов",
            "explanation": "Все селекторы односложные (специфичность 0-1-0), что исключает случайные каскадные перекрытия."
          }
        },
        {
          "title": "CSS Modules: локальный скоуп на уровне файлов сборщика",
          "content": "Автоматическая изоляция стилей без ручного следования соглашениям:\n\n1. **Принцип работы CSS Modules (`.module.css`)**:\n- Вы пишете обычный короткий CSS в файле `Button.module.css` (например, `.btn { ... }`, `.primary { ... }`).\n- При сборке (Vite, Webpack) инструмент компилирует эти классы в **уникальные глобальные хеши**: `.Button_btn__a1b2c`, `.Button_primary__f9e8d`.\n- JavaScript импортирует объект маппинга: `import styles from './Button.module.css'` → `styles.btn` вернет сгенерированное уникальное имя!\n\n2. **Преимущества CSS Modules**:\n- **100% изоляция**: два разных компонента могут иметь класс `.title`, и они гарантированно не пересекутся.\n- **Мертвый код**: сборщик предупреждает о неиспользуемых классах.\n- **Композиция стилей (`composes`)**: возможность наследовать стили из других файлов без дублирования кода.",
          "codeExample": {
            "language": "typescript",
            "code": "// 1. Button.module.css\n/*\n.button {\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n}\n.primary {\n  composes: button; // Композиция базового класса!\n  background: #2dff8a;\n  color: #0a0e13;\n}\n*/\n\n// 2. Button.tsx (React компонент)\nimport React from 'react';\nimport styles from './Button.module.css';\n\ninterface ButtonProps {\n  variant?: 'primary' | 'secondary';\n  children: React.ReactNode;\n}\n\nexport function Button({ variant = 'primary', children }: ButtonProps) {\n  // styles.primary компилируется в 'Button_primary__a1b2c Button_button__x8y9z'\n  return (\n    <button className={styles[variant]}>\n      {children}\n    </button>\n  );\n}",
            "title": "Использование CSS Modules с автоматическим хешированием классов",
            "explanation": "CSS Modules изолирует стили на уровне сборщика, исключая конфликты имен между независимыми компонентами."
          }
        },
        {
          "title": "CSS-in-JS: Styled Components против Zero-Runtime (Vanilla Extract)",
          "content": "Объединение логики компонентов и стилей в едином JavaScript файле:\n\n1. **Runtime CSS-in-JS (Styled Components, Emotion)**:\n- Стили объявляются прямо в JS через шаблонные строки: `styled.button`.\n- **Плюс**: прямая привязка к React-пропсам (`color: ${props => props.theme.primary}`) и динамическая смена тем.\n- **Минус ⚠️**: накладные расходы на парсинг CSS и инъекцию тегов `<style>` в браузере в рантайме (Runtime Cost); несовместимость с React Server Components (RSC) в Next.js App Router!\n\n2. **Zero-Runtime CSS-in-JS (Vanilla Extract, StyleX, Panda CSS) ⚡**:\n- Вы пишете стили на TypeScript с автокомплитом и строгой типизацией дизайн-токенов.\n- На этапе сборки компилятор превращает TS-стили в **обычный статический `.css` файл** с нулевым рантайм-оверхедом (Zero-Runtime) и 100% поддержкой SSR/RSC!",
          "codeExample": {
            "language": "typescript",
            "code": "// 1. Zero-Runtime стилизация через Vanilla Extract (button.css.ts)\nimport { style } from '@vanilla-extract/css';\n\nexport const baseButton = style({\n  padding: '10px 20px',\n  borderRadius: '8px',\n  fontWeight: 'bold',\n  cursor: 'pointer',\n  transition: 'transform 0.2s ease',\n  ':hover': {\n    transform: 'translateY(-2px)',\n  },\n});\n\nexport const primaryVariant = style([\n  baseButton,\n  {\n    backgroundColor: '#2dff8a',\n    color: '#0a0e13',\n  }\n]);\n\n// На этапе сборки этот код превратится в чистый статический CSS без JS-библиотеки в бандле!",
            "title": "Zero-Runtime CSS-in-JS на Vanilla Extract: типизация без оверхеда",
            "explanation": "Vanilla Extract объединяет строгую типизацию TypeScript и производительность чистого статического CSS."
          }
        },
        {
          "title": "Utility-First парадигма: Tailwind CSS и UnoCSS",
          "content": "Почему атомарные классы стали стандартом современной разработки:\n\n1. **Философия Utility-First**:\n- Вместо написания уникального CSS-класса для каждой карточки (`.user-profile-header-card`), верстка собирается из готовых атомарных утилит: `flex items-center gap-4 p-6 bg-slate-900 rounded-xl`.\n- **JIT (Just-In-Time) компилятор**: сканирует исходный код и генерирует CSS **ТОЛЬКО для реально используемых классов**. Результирующий CSS-бандл всего огромного сайта весит **менее 15–20 КБ в gzip**!\n\n2. **Преимущества Tailwind CSS**:\n- **Скорость**: не нужно тратить время на придумывание имен классов (`.wrapper-inner-container-box`).\n- **Строгая дизайн-система**: отступы (`p-4`, `p-6`), цвета и шрифты берутся из единого конфига `tailwind.config.js`.\n- **Отсутствие мертвого CSS**: при удалении компонента лишний CSS не остается в бандле.",
          "codeExample": {
            "language": "html",
            "code": "<!-- Компонент профиля на чистом Tailwind CSS -->\n<div class=\"flex items-center gap-4 p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl hover:border-emerald-500 transition-colors duration-200\">\n  <!-- Аватар со статусом -->\n  <div class=\"relative\">\n    <img class=\"w-14 h-14 rounded-full object-cover border-2 border-emerald-400\" src=\"/avatar.jpg\" alt=\"Аватар\" />\n    <span class=\"absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full\"></span>\n  </div>\n  \n  <!-- Текстовый блок -->\n  <div class=\"flex flex-col\">\n    <h3 class=\"text-lg font-bold text-slate-100\">Алексей Иванов</h3>\n    <p class=\"text-sm text-slate-400\">Senior Frontend Engineer</p>\n  </div>\n</div>",
            "title": "Компонент на Tailwind CSS: компактность, адаптивность и темы",
            "explanation": "Tailwind генерирует строго ограниченный атомарный CSS прямо на лету без необходимости писать кастомные файлы стилей."
          }
        }
      ],
      "seniorTips": [
        "Для современных проектов на Next.js / Astro выбирайте **Tailwind CSS** или **CSS Modules** — они идеально поддерживают React Server Components (RSC) и потоковый стриминг HTML.",
        "Избегайте Runtime CSS-in-JS (Styled Components / Emotion) в новых проектах — они увеличивают вес JS-бандла и вызывают задержки рендеринга при частой смене пропсов.",
        "В БЭМ никогда не используйте каскадные селекторы вида `.block .elem` — всегда пишите плоский селектор `.block__elem` для сохранения минимальной специфичности (0-1-0).",
        "При использовании Tailwind не злоупотребляйте директивой `@apply` в CSS-файлах — это возвращает вас к проблемам именования классов и лишает преимуществ атомарной верстки."
      ],
      "commonMistakes": [
        {
          "bad": "/* Нарушение БЭМ: элемент элемента в имени класса */\n.header__nav__item__link { ... } /* ❌ Глубокая вложенность имен ломает модульность */",
          "good": ".header__link { ... } /* ✅ Элемент принадлежит напрямую блоку */",
          "reason": "В БЭМ элементы всегда привязаны к блоку (block__elem), независимо от реальной вложенности DOM-дерева."
        },
        {
          "bad": "/* Смешивание селекторов тегов с БЭМ классами */\n.card h2 { font-size: 20px; } /* ❌ Создает каскадную зависимость */",
          "good": ".card__title { font-size: 20px; }",
          "reason": "Селектор по тегу увеличивает специфичность и ломает верстку, если заголовок h2 заменят на h3 ради семантики."
        },
        {
          "bad": "/* Использование Runtime Styled Components в серверных компонентах Next.js (RSC) */",
          "good": "/* Использование CSS Modules, Tailwind или Zero-Runtime Vanilla Extract */",
          "reason": "Runtime CSS-in-JS требует React Context, который не поддерживается в чистых Server Components."
        }
      ],
      "keyTakeaways": [
        "БЭМ устраняет войны каскада за счет соглашений об именах и плоской специфичности (0-1-0).",
        "CSS Modules автоматически генерирует уникальные хеши классов на уровне сборщика.",
        "Zero-Runtime CSS-in-JS компилирует стили в статический CSS без нагрузки на браузер.",
        "Tailwind CSS генерирует атомарный CSS на лету, сокращая итоговый бандл до 15 КБ.",
        "Выбор методологии зависит от архитектуры: Tailwind/CSS Modules для SSR/RSC, BEM для дизайн-систем."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"methodology-sandbox\">\n  <h3>Сравнение подходов стилизации</h3>\n  <div class=\"cards-comparison\">\n    <!-- БЭМ Card -->\n    <div class=\"bem-card bem-card_active\">\n      <div class=\"bem-card__title\">📦 БЭМ Компонент</div>\n      <div class=\"bem-card__text\">Плоская специфичность .bem-card__text</div>\n    </div>\n    \n    <!-- Utility-First Card -->\n    <div class=\"p-4 bg-slate-900 border border-emerald-500 rounded-xl shadow-lg\">\n      <div class=\"text-emerald-400 font-bold\">⚡ Tailwind Style</div>\n      <div class=\"text-xs text-slate-400 mt-1\">Атомарные классы в HTML</div>\n    </div>\n  </div>\n</div>",
      "initialCss": ".methodology-sandbox { padding: 20px; background: #0a0e13; font-family: monospace; color: #e6edf3; }\n.cards-comparison { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 12px; }\n/* BEM стили */\n.bem-card { background: #161b22; border: 1px solid #30363d; padding: 16px; border-radius: 12px; min-width: 220px; }\n.bem-card_active { border-color: #29e7ff; box-shadow: 0 0 15px rgba(41,231,255,0.15); }\n.bem-card__title { color: #29e7ff; font-weight: bold; }\n.bem-card__text { color: #8b949e; font-size: 12px; margin-top: 4px; }\n/* Имитация Utility классов */\n.p-4 { padding: 16px; }\n.bg-slate-900 { background: #0f172a; }\n.border { border-width: 1px; border-style: solid; }\n.border-emerald-500 { border-color: #10b981; }\n.rounded-xl { border-radius: 12px; }\n.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5); }\n.text-emerald-400 { color: #34d399; }\n.font-bold { font-weight: bold; }\n.text-xs { font-size: 12px; }\n.text-slate-400 { color: #94a3b8; }\n.mt-1 { margin-top: 4px; }",
      "initialJs": "console.log('Methodologies песочница готова');",
      "instructions": "Практика с методологиями:\n1. Изучите структуру БЭМ карточки (.bem-card, .bem-card__title, .bem-card_active)\n2. Изучите Utility-First карточку — все стили собраны из атомарных классов"
    },
    "task": {
      "title": "Проектирование компонента баннера оповещения по методологии БЭМ",
      "scenario": "Создайте стили для компонента уведомления (.alert-banner) строго по правилам БЭМ: блок .alert-banner, элементы .alert-banner__icon, .alert-banner__content, .alert-banner__title, .alert-banner__close, и модификаторы темы .alert-banner_success и .alert-banner_warning с плоской специфичностью 0-1-0.",
      "criteria": [
        "Объявлены базовые стили блока .alert-banner",
        "Элементы используют синтаксис block__elem (.alert-banner__icon, .alert-banner__title)",
        "Модификаторы используют синтаксис block_mod (.alert-banner_success, .alert-banner_warning)",
        "Все селекторы плоские (специфичность 0-1-0), нет вложенных селекторов по тегам",
        "Модификатор success задает зеленую тему (#2dff8a), warning — янтарную (#ffb02e)"
      ],
      "starterCode": {
        "css": "/* Разработайте компонент alert-banner по БЭМ */\n.alert-banner {\n}\n.alert-banner__icon {\n}\n.alert-banner__title {\n}\n.alert-banner_success {\n}\n.alert-banner_warning {\n}"
      },
      "hints": [
        ".alert-banner { display: flex; align-items: center; padding: 16px; border-radius: 8px; }",
        ".alert-banner_success { border: 1px solid #2dff8a; background: rgba(45, 255, 138, 0.08); }"
      ],
      "solution": {
        "css": ".alert-banner {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 10px;\n  background: #161b22;\n  border: 1px solid #30363d;\n  color: #e6edf3;\n}\n\n.alert-banner__icon {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.alert-banner__content {\n  flex-grow: 1;\n}\n\n.alert-banner__title {\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n\n.alert-banner__description {\n  font-size: 12px;\n  color: #8b949e;\n}\n\n.alert-banner__close-btn {\n  background: transparent;\n  border: none;\n  color: #8b949e;\n  cursor: pointer;\n  padding: 4px;\n}\n\n/* Модификаторы тем */\n.alert-banner_success {\n  border-color: #2dff8a;\n  background: rgba(45, 255, 138, 0.06);\n}\n\n.alert-banner_warning {\n  border-color: #ffb02e;\n  background: rgba(255, 176, 46, 0.06);\n}",
        "explanation": "Специфичность всех селекторов строго равна 0-1-0. Модификаторы темы легко комбинируются с базовым блоком."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css20-q1",
          "question": "Почему в БЭМ пишут `.card__title`, а не вложенный селектор `.card .title`?",
          "options": [
            "Один класс даёт вес 0-1-0, поэтому модификатор переопределяет стиль без борьбы",
            "Составное имя короче и быстрее разбирается селекторным движком браузера",
            "Вложенные селекторы запрещены спецификацией для классов с нижним подчёркиванием",
            "Такая запись позволяет переиспользовать класс `.title` в других блоках без конфликтов"
          ],
          "correctIndex": 0,
          "explanation": "Вложенный селектор весит два класса, и чтобы перебить его модификатором, приходится писать ещё более длинную цепочку — так и начинается гонка специфичности, которая заканчивается расстановкой `!important`. Плоское имя всегда весит ровно один класс, поэтому любой модификатор, объявленный ниже, спокойно выигрывает. Скорость разбора селекторов на современных движках роли не играет."
        },
        {
          "id": "css20-q2",
          "question": "Как CSS Modules гарантируют, что класс `.button` из двух разных файлов не конфликтует?",
          "options": [
            "Стили переносятся в атрибут `style` каждого элемента на этапе отрисовки страницы",
            "Браузер применяет правило из того файла, который был импортирован последним",
            "Каждый файл оборачивается в Shadow DOM с собственной областью видимости стилей",
            "Сборщик переименовывает классы в уникальные имена вроде `Button_button__a1b2c`"
          ],
          "correctIndex": 3,
          "explanation": "Изоляция здесь целиком на стороне сборки: имена классов заменяются на уникальные с хешем от пути к файлу и содержимого, а импорт возвращает объект соответствия, откуда берётся настоящее имя. В браузер попадает обычный статический CSS без накладных расходов во время работы — в этом и отличие от CSS-in-JS. Shadow DOM — механизм веб-компонентов и к CSS Modules отношения не имеет."
        },
        {
          "id": "css20-q3",
          "question": "Почему Runtime CSS-in-JS плохо сочетается с React Server Components?",
          "options": [
            "Серверные компоненты не поддерживают шаблонные строки в коде на JavaScript",
            "Такие библиотеки опираются на контекст и состояние, которых в серверных компонентах нет",
            "Стили собираются в тег `<style>`, который сервер не умеет отдавать в потоке ответа",
            "Такие библиотеки требуют отдельного шага сборки и не работают с TypeScript"
          ],
          "correctIndex": 1,
          "explanation": "Styled Components и Emotion генерируют классы во время работы приложения и опираются на React Context для темы, а серверные компоненты выполняются без клиентского рантайма и контекста. Отсюда и сдвиг индустрии к вариантам, где стили превращаются в статический CSS на этапе сборки: CSS Modules, Tailwind, Vanilla Extract. Все перечисленные инструменты отлично дружат и с TypeScript, и с шаблонными строками."
        },
        {
          "id": "css20-q4",
          "question": "За счёт чего итоговый CSS проекта на Tailwind весит десятки килобайт, а не мегабайты?",
          "options": [
            "Файл стилей дополнительно сжимается алгоритмом Brotli при отдаче с сервера",
            "Повторяющиеся объявления автоматически объединяются в один общий служебный класс",
            "Браузер подгружает классы по требованию, по мере появления элементов на экране",
            "Сборщик сканирует исходники и генерирует правила только для встреченных классов"
          ],
          "correctIndex": 3,
          "explanation": "Полный набор утилит действительно огромен, но целиком он никогда не попадает в сборку: компилятор проходит по файлам разметки и шаблонов, собирает реально встреченные имена и выпускает правила только для них. Отсюда важное следствие — имена классов нельзя склеивать из кусков в рантайме, иначе сканер их не найдёт. Сжатие при передаче применяется поверх и к самому подходу отношения не имеет."
        },
        {
          "id": "css20-q5",
          "question": "Какая из этих записей нарушает соглашения БЭМ?",
          "options": [
            "`.card__title`",
            "`.card__header__title`",
            "`.card__title--large`",
            "`.card--featured`"
          ],
          "correctIndex": 1,
          "explanation": "Элементы в БЭМ не вкладываются друг в друга: имя всегда строится от блока, каким бы глубоким ни было реальное дерево, поэтому правильной формой будет `.card__header-title` или отдельный блок. Остальные записи корректны: элемент блока, элемент с модификатором и модификатор самого блока. Вложенные цепочки элементов делают имена ломкими — любое изменение разметки требует переименования."
        }
      ]
    }
  },
  {
    "id": "css-21",
    "moduleId": "css",
    "level": 21,
    "title": "CSS Фильтры, Режимы наложения, backdrop-filter (Glassmorphism) и маскирование (clip-path)",
    "subtitle": "filter, backdrop-filter, drop-shadow vs box-shadow, mix-blend-mode, clip-path (polygon) и mask-image",
    "description": "Освойте передовые визуальные эффекты в CSS: семейство функций filter (blur, brightness, contrast, drop-shadow по прозрачному контуру), эффект матового стекла Glassmorphism через backdrop-filter с надежными фолбеками @supports, режимы наложения mix-blend-mode и background-blend-mode, геометрическую обрезку clip-path и градиентное маскирование mask-image.",
    "estimatedMinutes": 70,
    "difficulty": "advanced",
    "tags": [
      "css-filters",
      "backdrop-filter",
      "glassmorphism",
      "mix-blend-mode",
      "clip-path",
      "mask-image",
      "drop-shadow",
      "visual-effects",
      "modern-css"
    ],
    "theory": {
      "overview": "Современный CSS позволяет создавать сложнейшие графические эффекты, которые раньше требовали экспорта тяжелых картинок из графических редакторов или написания сложных шейдеров WebGL.\n\nФункции **`filter`**, эффект матового стекла **`backdrop-filter` (Glassmorphism)**, режимы наложения пикселей **`mix-blend-mode`** и геометрическая обрезка **`clip-path`** исполняются напрямую на графическом процессоре (GPU), обеспечивая плавные 60 FPS анимации и кинематографичный дизайн интерфейсов.\n\nВ этом уроке мы разберём каждый инструмент и научимся создавать премиальные визуальные эффекты.",
      "sections": [
        {
          "title": "Семейство функций filter и магия drop-shadow()",
          "content": "Преобразование пикселей элемента на уровне GPU:\n\n1. **Базовые функции `filter`**:\n- `blur(px)` — размытие изображения или блока.\n- `brightness(%)` / `contrast(%)` — яркость и контрастность (`brightness(1.2)` = +20% яркости).\n- `grayscale(%)` / `sepia(%)` — обесцвечивание и эффект сепии.\n- `hue-rotate(deg)` — поворот цветового круга (`hue-rotate(90deg)`).\n- `invert(%)` — инвертирование цветов (быстрое создание темных иконок).\n\n2. **`drop-shadow()` против `box-shadow` (Критическая разница!) 💡**:\n- `box-shadow` отбрасывает тень от **прямоугольной рамки (Box Model)** элемента, даже если PNG-картинка или SVG-иконка имеет прозрачный фон!\n- `filter: drop-shadow(x y blur color)` анализирует альфа-канал и отбрасывает тень **ТОЧНО ПО КОНТУРУ НЕПРОЗРАЧНЫХ ПИКСЕЛЕЙ** PNG-логотипа, стрелки или SVG-иконки!",
          "image": {
            "src": "/images/lessons/css-filters-glassmorphism.svg",
            "alt": "CSS Фильтры, Glassmorphism, Blend-mode и clip-path",
            "caption": "CSS фильтры, эффект матового стекла backdrop-filter, режимы наложения и векторная обрезка clip-path"
          },
          "codeExample": {
            "language": "css",
            "code": "/* Сравнение теней для прозрачной SVG-иконки или PNG */\n.logo-icon {\n  width: 80px;\n  height: 80px;\n  \n  /* ❌ box-shadow создаст некрасивый серый квадрат вокруг прозрачной иконки! */\n  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); */\n  \n  /* ✅ drop-shadow отбросит красивую тень точно по контурам логотипа! */\n  filter: drop-shadow(0 8px 16px rgba(45, 255, 138, 0.4));\n  \n  /* Комбинирование нескольких фильтров в одну строку: */\n  filter: brightness(1.1) contrast(105%) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));\n  transition: filter 0.3s ease;\n}\n\n.logo-icon:hover {\n  filter: brightness(1.3) drop-shadow(0 0 20px rgba(45, 255, 138, 0.8));\n}",
            "title": "Использование filter: drop-shadow() для прозрачной графики",
            "explanation": "drop-shadow повторяет реальный альфа-контур изображения, создавая реалистичное неоновое свечение."
          }
        },
        {
          "title": "Эффект матового стекла (Glassmorphism) через backdrop-filter",
          "content": "Как работает размытие фона под полупрозрачным элементом:\n\n1. **Разница между `filter: blur()` и `backdrop-filter: blur()`**:\n- `filter: blur(10px)` размывает **САМ ЭЛЕМЕНТ** и весь его внутренний текст (текст становится нечитаемым!).\n- `backdrop-filter: blur(10px)` оставляет текст элемента идеально резким, но **РАЗМЫВАЕТ СЛОЙ ПОД ЭТИМ ЭЛЕМЕНТОМ**!\n\n2. **3 Правила создания идеального Glassmorphism**:\n- 1. Полупрозрачный фон: `background: rgba(22, 27, 34, 0.6)` (или с saturation).\n- 2. Размытие фона: `backdrop-filter: blur(16px) saturate(180%)`.\n- 3. Тонкая светлая граница: `border: 1px solid rgba(255, 255, 255, 0.12)`.\n\n3. **Фолбек через `@supports`**:\n- Для браузеров без поддержки `backdrop-filter` задается непрозрачный цвет фона.",
          "codeExample": {
            "language": "css",
            "code": "/* Премиальная стеклянная карточка в стиле Apple Glassmorphism */\n.glass-panel {\n  /* 1. Полупрозрачный фон */\n  background: rgba(13, 17, 23, 0.65);\n  \n  /* 2. Размытие и насыщенность подложки */\n  backdrop-filter: blur(20px) saturate(190%);\n  -webkit-backdrop-filter: blur(20px) saturate(190%); /* Для Safari */\n  \n  /* 3. Тонкая стеклянная фаска */\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n}\n\n/* Запасной непрозрачный фон для старых сред */\n@supports not (backdrop-filter: blur(10px)) {\n  .glass-panel {\n    background: #0d1117;\n  }\n}",
            "title": "Стеклянная карточка Glassmorphism с поддержкой Safari и @supports",
            "explanation": "backdrop-filter создает глубину интерфейса, размывая фоновый контент при скролле без потери резкости текста."
          }
        },
        {
          "title": "Режимы наложения: mix-blend-mode и background-blend-mode",
          "content": "Математическое смешивание цветов слоев как в Photoshop:\n\n1. **`mix-blend-mode` (Смешивание элемента с подлежащим фоном)**:\n- **`multiply` (Умножение)**: перемножает цвета. Белый цвет становится полностью прозрачным (идеально для удаления белого фона у логотипов на темном сайте!).\n- **`screen` (Осветление)**: противоположность multiply. Черный цвет становится прозрачным (идеально для наложения световых лучей, огня и дыма).\n- **`difference` (Разница)**: вычитает цвета. Текст белого цвета поверх светлого фона станет черным, а поверх темного — белым (динамический контрастный текст!).\n- **`overlay`**: комбинирует multiply и screen, усиливая контраст.\n\n2. **`background-blend-mode`**:\n- Смешивает несколько фоновых слоев внутри одного элемента (`background-image` и `background-color`).",
          "codeExample": {
            "language": "css",
            "code": "/* Динамический контрастный курсор или текст поверх любого фона */\n.invert-cursor {\n  position: fixed;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #ffffff;\n  \n  /* Режим difference: инвертирует цвета того, над чем находится! */\n  mix-blend-mode: difference;\n  pointer-events: none;\n  z-index: 9999;\n}\n\n/* Удаление белого фона у отсканированного логотипа */\n.scanned-logo {\n  mix-blend-mode: multiply; /* Белые пиксели фона исчезают! */\n}",
            "title": "Использование mix-blend-mode: difference для динамического инвертирования",
            "explanation": "Режимы наложения вычисляют цвет каждого пикселя на лету без необходимости готовить отдельные ассеты под светлую и темную темы."
          }
        },
        {
          "title": "Геометрическое маскирование: clip-path и mask-image",
          "content": "Вырезание нестандартных форм и плавное растворение краев:\n\n1. **`clip-path` (Векторная обрезка геометрии)**:\n- Обрезает видимую область элемента по заданной фигуре. Области за пределами контура становятся прозрачными и не реагируют на клики мыши.\n- **Фигуры**:\n  - `circle(50% at center)` — круг.\n  - `polygon(x1 y1, x2 y2, ...)` — многоугольник с любым числом вершин (треугольники, скошенные углы киберпанк-кнопок, шевроны, звезды).\n- **GPU Анимация**: если количество точек в `polygon()` совпадает, `clip-path` плавно интерполируется в анимациях `@keyframes`!\n\n2. **`mask-image` (Растворение градиентом)**:\n- Использует альфа-канал маски: где маска черная — контент виден, где прозрачная — контент исчезает.\n- Идеально для плавного растворения краев длинных скроллируемых списков: `mask-image: linear-gradient(to bottom, black 80%, transparent 100%)`.",
          "codeExample": {
            "language": "css",
            "code": "/* Скошенная киберпанк-кнопка через clip-path: polygon() */\n.cyber-btn {\n  background: #2dff8a;\n  color: #0a0e13;\n  padding: 12px 28px;\n  font-weight: 800;\n  border: none;\n  \n  /* Срезаем левый верхний и правый нижний углы под 45 градусов: */\n  clip-path: polygon(\n    14px 0%,\n    100% 0%,\n    100% calc(100% - 14px),\n    calc(100% - 14px) 100%,\n    0% 100%,\n    0% 14px\n  );\n  \n  transition: clip-path 0.3s ease, transform 0.2s ease;\n}\n\n.cyber-btn:hover {\n  /* Плавная трансформация геометрии формы при наведении! */\n  clip-path: polygon(\n    0% 0%,\n    100% 0%,\n    100% 100%,\n    100% 100%,\n    0% 100%,\n    0% 0%\n  );\n  transform: scale(1.05);\n}",
            "title": "Киберпанк-кнопка со скошенными углами и анимацией clip-path",
            "explanation": "clip-path позволяет создавать сложные дизайнерские формы без использования громоздких SVG картинок."
          }
        }
      ],
      "seniorTips": [
        "При создании эффекта Glassmorphism всегда добавляйте свойство `-webkit-backdrop-filter` — оно обязательно для корректной работы в браузере Safari на iOS и macOS.",
        "Для полупрозрачного стекла используйте `backdrop-filter: blur(...) saturate(180%)` — увеличение насыщенности `saturate` делает цвета под стеклом живыми и сочными, как в дизайне Apple iOS.",
        "При анимировании `clip-path: polygon()` убедитесь, что исходное и конечное состояния имеют **абсолютно одинаковое количество точек**, иначе браузер не сможет интерполировать вершины.",
        "Не злоупотребляйте `backdrop-filter: blur()` на десятках элементов одновременно на слабых мобильных устройствах — это создает дополнительную нагрузку на видеопамять (GPU VRAM).",
        "Всегда используйте `filter: drop-shadow()` вместо `box-shadow` для прозрачных PNG картинок и SVG иконок."
      ],
      "commonMistakes": [
        {
          "bad": "/* Использование filter: blur() вместо backdrop-filter */\n.modal-card { filter: blur(10px); /* ❌ Размоет весь текст и кнопки внутри модалки! */ }",
          "good": ".modal-card { backdrop-filter: blur(10px); background: rgba(0,0,0,0.5); }",
          "reason": "filter: blur() размывает сам элемент, а backdrop-filter размывает слой позади элемента."
        },
        {
          "bad": "/* backdrop-filter с полностью непрозрачным фоном */\n.glass { background: #161b22; backdrop-filter: blur(10px); /* ❌ Эффекта не видно, фон глухой! */ }",
          "good": ".glass { background: rgba(22, 27, 34, 0.6); backdrop-filter: blur(10px); }",
          "reason": "backdrop-filter виден только сквозь полупрозрачный фон (rgba / hsla)."
        },
        {
          "bad": "/* Анимация clip-path между полигонами с разным числом вершин */\n@keyframes morph { from { clip-path: polygon(0 0, 100% 0, 100% 100%); } to { clip-path: circle(50%); } } /* ❌ Резкий скачок без плавности */",
          "good": "/* Анимация между полигонами с одинаковым числом точек */",
          "reason": "Браузер может плавно интерполировать вершины только при равном количестве координат в полигоне."
        }
      ],
      "keyTakeaways": [
        "filter: drop-shadow() отбрасывает тень по контуру альфа-канала прозрачных PNG/SVG.",
        "backdrop-filter создает эффект матового стекла Glassmorphism под полупрозрачным слоем.",
        "mix-blend-mode позволяет смешивать слои (multiply удаляет белый фон, screen — черный).",
        "clip-path: polygon() вырезает векторные геометрические формы без SVG файлов.",
        "mask-image с linear-gradient создает плавное растворение краев интерфейса."
      ]
    },
    "sandbox": {
      "initialHtml": "<div class=\"fx-sandbox\">\n  <div class=\"fx-bg-decor\"></div>\n  <div class=\"glass-card\">\n    <h3 class=\"glass-title\">💎 Glassmorphism Panel</h3>\n    <p class=\"glass-text\">Эффект матового стекла через backdrop-filter: blur(16px) saturate(180%). Обратите внимание на размытие светящихся кругов под карточкой!</p>\n    <button class=\"cyber-btn\">СКОШЕННАЯ КНОПКА (clip-path)</button>\n  </div>\n</div>",
      "initialCss": ".fx-sandbox { padding: 30px; background: #0a0e13; font-family: monospace; position: relative; overflow: hidden; min-height: 240px; }\n.fx-bg-decor {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n  width: 120px;\n  height: 120px;\n  background: radial-gradient(circle, #2dff8a, #29e7ff);\n  border-radius: 50%;\n  filter: blur(20px);\n  opacity: 0.8;\n}\n.glass-card {\n  position: relative;\n  z-index: 2;\n  background: rgba(22, 27, 34, 0.55);\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 420px;\n  box-shadow: 0 15px 35px rgba(0,0,0,0.5);\n}\n.glass-title { color: #2dff8a; font-size: 16px; margin-bottom: 8px; }\n.glass-text { color: #e6edf3; font-size: 12px; line-height: 1.5; margin-bottom: 16px; }\n.cyber-btn {\n  background: #2dff8a;\n  color: #0a0e13;\n  font-weight: bold;\n  font-size: 11px;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);\n  transition: transform 0.2s;\n}\n.cyber-btn:hover { transform: scale(1.05); }",
      "initialJs": "console.log('Filters & Glassmorphism песочница готова');",
      "instructions": "Практика с визуальными эффектами:\n1. Оцените размытие светящегося градиентного шара сквозь панель Glassmorphism\n2. Изучите скошенные углы киберпанк-кнопки, вырезанные через clip-path: polygon()"
    },
    "task": {
      "title": "Создание премиальной Glassmorphism карточки со скошенной кнопкой и drop-shadow",
      "scenario": "Создайте стили для карточки товара: 1) Карточка .glass-product-card с полупрозрачным фоном, размытием backdrop-filter: blur(16px) saturate(180%) и тонкой стеклянной границей; 2) Логотип .product-badge с эффектом неонового свечения через filter: drop-shadow(); 3) Кнопку .cta-clip-btn со скошенными углами через clip-path: polygon().",
      "criteria": [
        "Карточка использует background с rgba и backdrop-filter: blur(16px) saturate(180%)",
        "Добавлен префикс -webkit-backdrop-filter для поддержки Safari",
        "Логотип использует filter: drop-shadow(0 0 12px rgba(45, 255, 138, 0.6))",
        "Кнопка использует clip-path: polygon() для срезания углов"
      ],
      "starterCode": {
        "css": "/* Разработайте Glassmorphism карточку и clip-path кнопку */\n.glass-product-card {\n}\n.product-badge {\n}\n.cta-clip-btn {\n}"
      },
      "hints": [
        ".glass-product-card { background: rgba(22, 27, 34, 0.6); backdrop-filter: blur(16px) saturate(180%); -webkit-backdrop-filter: blur(16px) saturate(180%); border: 1px solid rgba(255,255,255,0.12); }",
        ".cta-clip-btn { clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px); }"
      ],
      "solution": {
        "css": ".glass-product-card {\n  background: rgba(22, 27, 34, 0.6);\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n  color: #e6edf3;\n}\n\n.product-badge {\n  display: inline-block;\n  filter: drop-shadow(0 0 12px rgba(45, 255, 138, 0.6));\n}\n\n.cta-clip-btn {\n  background: #2dff8a;\n  color: #0a0e13;\n  padding: 12px 24px;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n  clip-path: polygon(\n    12px 0,\n    100% 0,\n    100% calc(100% - 12px),\n    calc(100% - 12px) 100%,\n    0 100%,\n    0 12px\n  );\n  transition: transform 0.2s ease, filter 0.2s ease;\n}\n\n.cta-clip-btn:hover {\n  transform: translateY(-2px);\n  filter: drop-shadow(0 4px 12px rgba(45, 255, 138, 0.4));\n}",
        "explanation": "Стили создают премиальный эффект матового стекла Apple Glassmorphism с поддержкой Safari, неоновым свечением drop-shadow и векторной геометрией clip-path."
      }
    },
    "quiz": {
      "questions": [
        {
          "id": "css21-q1",
          "question": "Чем `filter: blur(10px)` отличается от `backdrop-filter: blur(10px)` на одном и том же элементе?",
          "options": [
            "Первый размывает сам элемент вместе с содержимым, второй — то, что лежит позади него",
            "Первый работает только с изображениями, второй — с любым содержимым блока",
            "Первый выполняется силами процессора, а второй обрабатывается на видеокарте",
            "Первый действует на весь элемент, а второй — только на его границы и тени"
          ],
          "correctIndex": 0,
          "explanation": "`filter` применяется к самому элементу: размытым окажется и фон, и текст внутри, читать его станет невозможно. `backdrop-filter` не трогает содержимое, а обрабатывает подложку — всё, что видно сквозь элемент. Именно поэтому матовое стекло строится на втором варианте: панель остаётся чёткой, а размывается только картинка под ней."
        },
        {
          "id": "css21-q2",
          "question": "Применили `backdrop-filter: blur(16px)`, но никакого эффекта не видно. Что проверить в первую очередь?",
          "options": [
            "Задан ли элементу `overflow: hidden` — без него размытие обрезается по границам",
            "Больше ли радиус двадцати пикселей — меньшие значения браузер не применяет",
            "Прозрачен ли фон элемента — сквозь непрозрачную заливку размытие попросту не видно",
            "Есть ли у элемента `z-index` — без него слой не попадает в композитинг страницы"
          ],
          "correctIndex": 2,
          "explanation": "Размытая подложка рисуется под элементом, и увидеть её можно только через него. Сплошной фон закрывает результат полностью, поэтому нужен полупрозрачный цвет вроде `rgba(255, 255, 255, .08)`. Вторая частая причина — забытый префикс `-webkit-backdrop-filter`, без которого эффект не работает в Safari."
        },
        {
          "id": "css21-q3",
          "question": "У отсканированного логотипа белый фон, который нужно убрать поверх цветной подложки. Какой режим наложения подойдёт?",
          "options": [
            "`screen` — он убирает чёрные области, оставляя нетронутыми светлые",
            "`difference` — он инвертирует участки, совпадающие по цвету со слоем ниже",
            "`multiply` — белый становится прозрачным, а тёмные пиксели сохраняются",
            "`overlay` — он усиливает контраст и подавляет светлые тона изображения"
          ],
          "correctIndex": 2,
          "explanation": "Режим умножения перемножает значения каналов: умножение на белый оставляет нижний слой без изменений, поэтому белый фон визуально исчезает, а тёмный рисунок остаётся. Зеркальный случай — `screen`, который тем же образом «съедает» чёрный фон и подходит для светлых логотипов на тёмной подложке. Способ выручает, когда исходника с прозрачностью под рукой нет."
        },
        {
          "id": "css21-q4",
          "question": "Что происходит с частями элемента, оказавшимися за границей фигуры `clip-path: polygon(...)`?",
          "options": [
            "Они становятся полупрозрачными, но продолжают принимать нажатия мышью",
            "Они обрезаются визуально, но по-прежнему перехватывают события мыши",
            "Они переносятся внутрь фигуры и сжимаются пропорционально её размерам",
            "Они не отрисовываются и не реагируют на курсор, хотя место в раскладке сохраняется"
          ],
          "correctIndex": 3,
          "explanation": "Обрезка влияет и на отрисовку, и на попадание курсора: за пределами фигуры элемент не виден и клики сквозь него проходят к тому, что лежит ниже. При этом блочная модель не меняется — элемент занимает в раскладке прежнее место, и соседи ведут себя так, будто ничего не обрезано. Этим `clip-path` и отличается от изменения размеров."
        },
        {
          "id": "css21-q5",
          "question": "Переход между двумя значениями `clip-path: polygon(...)` происходит скачком вместо плавной анимации. Почему?",
          "options": [
            "Координаты заданы в процентах, а интерполируются только пиксельные значения",
            "Свойство `clip-path` в принципе не поддаётся анимации через `transition`",
            "Количество вершин в начальном и конечном многоугольнике не совпадает",
            "Многоугольник обязан быть выпуклым, иначе браузер отключает интерполяцию"
          ],
          "correctIndex": 2,
          "explanation": "Браузер анимирует фигуру, попарно сдвигая соответствующие вершины, и для этого их число должно совпадать. Если в одном состоянии четыре точки, а в другом шесть, сопоставлять нечего, и свойство переключается мгновенно. Приём прост: в обоих состояниях держат одинаковое количество вершин, при необходимости дублируя координаты. Невыпуклые фигуры и проценты анимации не мешают."
        }
      ]
    }
  }
];
