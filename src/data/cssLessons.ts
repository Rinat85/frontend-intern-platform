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
          "question": "Какой селектор выберет только те элементы <p>, которые являются ПРЯМЫМИ дочерними элементами <div class=\"article\"> первого уровня?",
          "options": [
            ".article p",
            ".article > p",
            ".article + p",
            ".article ~ p"
          ],
          "correctIndex": 1,
          "explanation": "Комбинатор > выбирает исключительно прямых детей первого уровня, не затрагивая глубже вложенные теги <p>."
        },
        {
          "id": "c1-q2",
          "question": "Какой из представленных селекторов обладает НАИБОЛЬШИМ весом специфичности?",
          "options": [
            "body div.container p.text",
            "#header .nav-link",
            ".header .menu-item.active a:hover",
            "div#main-header"
          ],
          "correctIndex": 1,
          "explanation": "#header .nav-link имеет вес (0, 1, 1, 0) — наличие ID перебивает любое количество классов и тегов."
        },
        {
          "id": "c1-q3",
          "question": "Что произойдет с геометрией блока шириной width: 200px при добавлении padding: 20px и border: 2px в режиме box-sizing: border-box?",
          "options": [
            "Итоговая ширина увеличится до 244px",
            "Итоговая ширина останется ровно 200px, а отступы и рамка ужмутся внутрь блока",
            "Ширина уменьшится до 156px",
            "Браузер выдаст синтаксическую ошибку в консоль"
          ],
          "correctIndex": 1,
          "explanation": "В режиме border-box указанная ширина фиксирует внешний контур, а padding и border размещаются внутри этой ширины."
        },
        {
          "id": "c1-q4",
          "question": "Какое из перечисленных свойств НЕ наследуется дочерними элементами от родителя автоматически?",
          "options": [
            "color",
            "font-family",
            "margin",
            "line-height"
          ],
          "correctIndex": 2,
          "explanation": "Свойства внешних и внутренних отступов (margin, padding) и границ (border) не наследуются, в отличие от шрифтов и цвета текста."
        },
        {
          "id": "c1-q5",
          "question": "Какое правило победит, если два селектора .card-title { color: red; } и .card-title { color: green; } имеют одинаковую специфичность?",
          "options": [
            "Победит правило, объявленное в CSS-файле позже (ниже по коду) — цвет green",
            "Победит первое правило — цвет red",
            "Цвета смешаются и дадут коричневый оттенок",
            "Браузер отменит оба правила и применит цвет по умолчанию"
          ],
          "correctIndex": 0,
          "explanation": "По правилу каскада (Cascade), при абсолютно равном весе специфичности всегда побеждает правило, объявленное в коде ниже (позже)."
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
          "question": "Какое свойство Flexbox управляет выравниванием элементов вдоль ГЛАВНОЙ (main) оси?",
          "options": [
            "align-items",
            "align-content",
            "justify-content",
            "flex-direction"
          ],
          "correctIndex": 2,
          "explanation": "justify-content управляет распределением и выравниванием flex-items вдоль главной оси (main axis). align-items управляет поперечной осью (cross axis). flex-direction определяет направление главной оси."
        },
        {
          "id": "css2-q2",
          "question": "Что означает запись flex: 0 0 260px?",
          "options": [
            "Элемент растёт с коэффициентом 260",
            "Элемент НЕ растёт, НЕ сжимается, фиксированная ширина 260px",
            "Элемент сжимается до 260px",
            "Элемент имеет padding 260px"
          ],
          "correctIndex": 1,
          "explanation": "flex — сокращение для flex-grow, flex-shrink, flex-basis. flex: 0 0 260px означает: grow=0 (не растёт), shrink=0 (не сжимается), basis=260px (фиксированная начальная ширина). Идеально для сайдбаров."
        },
        {
          "id": "css2-q3",
          "question": "Какой подход к адаптивной верстке является стандартом индустрии?",
          "options": [
            "Desktop First — @media (max-width: ...)",
            "Mobile First — @media (min-width: ...)",
            "Fluid — только vw/vh без @media",
            "Fixed — фиксированная ширина 1200px"
          ],
          "correctIndex": 1,
          "explanation": "Mobile First (min-width) — стандарт. Базовые стили для мобильных (без @media), расширения через min-width для планшетов/десктоп. Desktop First (max-width) нагружает мобильные лишними CSS-правилами."
        },
        {
          "id": "css2-q4",
          "question": "Что делает CSS-функция clamp(16px, 2.5vw, 24px)?",
          "options": [
            "Устанавливает фиксированный размер 16px",
            "Масштабирует значение от 16px (минимум) до 24px (максимум), предпочитая 2.5vw",
            "Умножает 16px на 2.5 и вычитает 24px",
            "Применяет анимацию от 16px до 24px"
          ],
          "correctIndex": 1,
          "explanation": "clamp(min, preferred, max) ограничивает значение: не менее 16px, идеально 2.5vw (2.5% ширины viewport), но не более 24px. Позволяет создавать адаптивную типографику без @media."
        },
        {
          "id": "css2-q5",
          "question": "Для чего используется медиа-фича prefers-reduced-motion: reduce?",
          "options": [
            "Для ускорения анимаций на мощных устройствах",
            "Для отключения анимаций по запросу пользователя с вестибулярными нарушениями",
            "Для замедления загрузки страницы",
            "Для блокировки видео-контента"
          ],
          "correctIndex": 1,
          "explanation": "prefers-reduced-motion: reduce срабатывает, когда пользователь включил 'Reduce motion' в настройках ОС. Это критически важно для a11y: пользователи с вестибулярными нарушениями могут испытывать головокружение от анимаций."
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
          "question": "Какова будет реальная ширина элемента в DOM, если ему задано: width: 300px; padding: 25px; border: 5px solid red; box-sizing: content-box?",
          "options": [
            "300px",
            "330px",
            "360px",
            "270px"
          ],
          "correctIndex": 2,
          "explanation": "При content-box итоговая ширина вычисляется по формуле: width + padding-left + padding-right + border-left + border-right = 300 + 25 + 25 + 5 + 5 = 360px."
        },
        {
          "id": "css3-q2",
          "question": "Какое расстояние будет между двумя соседними блоками, если у верхнего margin-bottom: 40px, а у нижнего margin-top: 25px в нормальном потоке документа?",
          "options": [
            "65px",
            "40px",
            "15px",
            "25px"
          ],
          "correctIndex": 1,
          "explanation": "В CSS вертикальные внешние отступы соседних элементов схлопываются (Margin Collapse) в один общий отступ, равный наибольшему из них: Max(40px, 25px) = 40px."
        },
        {
          "id": "css3-q3",
          "question": "Какой современный метод позволяет создать Block Formatting Context (BFC) без обрезки выпадающих теней и меню?",
          "options": [
            "overflow: hidden",
            "display: flow-root",
            "clear: both",
            "float: left"
          ],
          "correctIndex": 1,
          "explanation": "display: flow-root — стандартное современное свойство CSS, специально созданное для активации Block Formatting Context без побочных эффектов обрезки контента (как у overflow: hidden)."
        },
        {
          "id": "css3-q4",
          "question": "В чём ключевое различие между свойствами border и outline?",
          "options": [
            "border не поддерживает цвет",
            "border занимает физическое место в Box Model и влияет на раскладку, а outline рисуется поверх без изменения геометрии",
            "outline работает только на ссылках",
            "Нет разницы — это синонимы"
          ],
          "correctIndex": 1,
          "explanation": "Border является неотъемлемой частью Box Model и при динамическом изменении сдвигает соседние элементы (вызывает Layout/Reflow). Outline рисуется над элементом без изменения геометрии, что делает его идеальным для индикаторов фокуса."
        },
        {
          "id": "css3-q5",
          "question": "Что делает логическое свойство margin-inline: auto?",
          "options": [
            "Центрирует элемент по вертикали",
            "Центрирует элемент по горизонтали, устанавливая margin-inline-start и margin-inline-end в auto",
            "Удаляет все внешние отступы",
            "Делает элемент плавающим"
          ],
          "correctIndex": 1,
          "explanation": "margin-inline: auto является современным логическим аналогом margin-left: auto; margin-right: auto; и центрирует блочный элемент по горизонтальной оси, не затрагивая вертикальные отступы margin-block."
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
          "question": "Какое поведение характерно для элемента со свойством display: inline?",
          "options": [
            "Начинается с новой строки и занимает 100% ширины родителя",
            "Располагается в одной строке с текстом, а свойства width, height и вертикальные margin игнорируются",
            "Полностью исчезает со страницы",
            "Создаёт гибкую flex-сетку"
          ],
          "correctIndex": 1,
          "explanation": "Строчные элементы (display: inline) встраиваются в текстовую строку, не создают разрывов строк и не реагируют на попытки задать width, height или вертикальные внешние отступы (margin-top/bottom)."
        },
        {
          "id": "css4-q2",
          "question": "В чём заключается ключевое отличие display: none от visibility: hidden?",
          "options": [
            "display: none удаляет элемент из потока макета (0px), а visibility: hidden скрывает элемент визуально, но сохраняет занимаемое им физическое место",
            "visibility: hidden удаляет элемент из DOM",
            "display: none работает только на ссылках",
            "Между ними нет никакой разницы"
          ],
          "correctIndex": 0,
          "explanation": "При display: none элемент не генерирует бокс и не занимает места на странице (соседние блоки сдвигаются). При visibility: hidden элемент невидим, но продолжает занимать свою изначальную ширину и высоту в макете."
        },
        {
          "id": "css4-q3",
          "question": "Почему скрытие интерактивных кнопок только с помощью opacity: 0 без дополнительных свойств является грубой ошибкой?",
          "options": [
            "opacity: 0 замедляет работу процессора",
            "Элемент с opacity: 0 остаётся физически на экране, кликабелен мышью и фокусируется с клавиатуры",
            "opacity нельзя анимировать",
            "opacity не поддерживается мобильными браузерами"
          ],
          "correctIndex": 1,
          "explanation": "opacity: 0 делает элемент полностью прозрачным, но он остаётся интерактивным: пользователь может случайно нажать невидимую кнопку, а клавиатурный фокус Tab будет попадать в пустое место экрана."
        },
        {
          "id": "css4-q4",
          "question": "Для чего применяется CSS-класс .visually-hidden (sr-only)?",
          "options": [
            "Для ускорения загрузки изображений",
            "Для скрытия элементов от зрячих пользователей с полным сохранением их доступности для чтения скринридерами (a11y)",
            "Для создания 3D-анимаций",
            "Для удаления скриптов из страницы"
          ],
          "correctIndex": 1,
          "explanation": "Класс .visually-hidden сжимает элемент до 1x1 пикселя с clip: rect(0,0,0,0), делая его невидимым на экране, но оставляя в дереве доступности (Accessibility Tree) для скринридеров незрячих пользователей."
        },
        {
          "id": "css4-q5",
          "question": "Что происходит с элементом при применении свойства display: contents?",
          "options": [
            "Элемент становится модальным окном",
            "Сам контейнер перестаёт генерировать прямоугольный бокс, а его дочерние элементы ведут себя так, будто они напрямую вложены в родителя уровнем выше",
            "Все шрифты внутри элемента становятся полужирными",
            "Элемент масштабируется на весь экран"
          ],
          "correctIndex": 1,
          "explanation": "display: contents визуально «растворяет» сам тег-контейнер: он не имеет собственных рамок, фона и отступов, а его дети поднимаются на уровень выше в сетках Grid и Flexbox."
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
