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
          "question": "Относительно какого элемента позиционируется блок с position: absolute?",
          "options": [
            "Всегда относительно окна браузера (Viewport)",
            "Относительно ближайшего предка, у которого position отличен от static (relative, absolute, fixed, sticky), либо относительно <html>",
            "Всегда относительно своего прямого родителя, независимо от его стилей",
            "Относительно предыдущего соседнего элемента"
          ],
          "correctIndex": 1,
          "explanation": "position: absolute ищет ближайшего предка в дереве DOM с position != static. Если ни у одного предка позиционирование не задано, то отсчёт ведётся от Initial Containing Block (тег <html>)."
        },
        {
          "id": "css5-q2",
          "question": "Что произойдет с местом в потоке документа, которое занимал элемент, если ему задать position: relative и сдвинуть через top: 20px; left: 30px;?",
          "options": [
            "Место освободится, и соседние элементы сдвинутся вверх",
            "Физическое место в потоке полностью сохраняется, а элемент сдвигается только визуально поверх соседей",
            "Элемент исчезнет из DOM",
            "Ширина элемента сожмётся до 0px"
          ],
          "correctIndex": 1,
          "explanation": "При position: relative элемент сохраняет исходное физическое пространство в Normal Flow. Соседние блоки не двигаются, а сам элемент лишь визуально смещается относительно своего исходного положения."
        },
        {
          "id": "css5-q3",
          "question": "Почему свойство z-index: 9999 не работает на обычном блоке div?",
          "options": [
            "Число 9999 слишком велико для CSS",
            "Свойство z-index работает только на позиционированных элементах (relative, absolute, fixed, sticky) и flex/grid-детях, а по умолчанию у div стоит position: static",
            "z-index работает только на ссылках и кнопках",
            "z-index требует обязательного указания цвета фона"
          ],
          "correctIndex": 1,
          "explanation": "По умолчанию у элементов задано position: static. В этом режиме браузер игнорирует z-index. Чтобы z-index заработал, достаточно добавить хотя бы position: relative."
        },
        {
          "id": "css5-q4",
          "question": "Какое свойство CSS является современным эквивалентом записи top: 0; right: 0; bottom: 0; left: 0;?",
          "options": [
            "all: 0;",
            "box-align: 0;",
            "inset: 0;",
            "position-all: 0;"
          ],
          "correctIndex": 2,
          "explanation": "Свойство inset — это логическое CSS-сокращение для одновременной установки top, right, bottom и left. inset: 0 растягивает позиционированный блок по всем 4 сторонам."
        },
        {
          "id": "css5-q5",
          "question": "Почему элемент со свойством position: sticky может перестать прилипать при прокрутке страницы?",
          "options": [
            "Если у одного из родительских контейнеров задано свойство overflow: hidden, auto или scroll",
            "Если не задано координатное свойство (например, top: 0)",
            "Если высота родителя равна высоте самого липкого элемента",
            "Все вышеперечисленные причины могут сломать position: sticky"
          ],
          "correctIndex": 3,
          "explanation": "position: sticky очень чувствителен к контексту: overflow: hidden/auto/scroll на предках отменяет скролл-контекст окна, отсутствие top не задает точку залипания, а равная высота родителя не оставляет пространства для скролла."
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
          "question": "Какой формат файлов веб-шрифтов является современным стандартом благодаря алгоритму сжатия Brotli и поддержке во всех браузерах?",
          "options": [
            "TTF (TrueType Font)",
            "WOFF2 (Web Open Font Format 2)",
            "EOT (Embedded OpenType)",
            "SVG Font"
          ],
          "correctIndex": 1,
          "explanation": "Формат WOFF2 использует алгоритм сжатия Brotli, обеспечивая минимальный размер файлов (на 30% меньше WOFF) и поддерживается более чем 99% браузеров."
        },
        {
          "id": "css6-q2",
          "question": "Что делает директива font-display: swap в правиле @font-face?",
          "options": [
            "Меняет шрифт каждые 5 секунд",
            "Мгновенно отображает текст системным fallback-шрифтом и плавно заменяет его на кастомный сразу после завершения загрузки файла",
            "Скрывает текст до тех пор, пока кастомный шрифт полностью не загрузится",
            "Отключает сглаживание шрифтов"
          ],
          "correctIndex": 1,
          "explanation": "font-display: swap полностью устраняет эффект невидимого текста (FOIT), гарантируя, что пользователь мгновенно увидит контент системным шрифтом без задержек."
        },
        {
          "id": "css6-q3",
          "question": "В чём главное преимущество вариативных шрифтов (Variable Fonts) перед классическими наборами шрифтов?",
          "options": [
            "Они не требуют подключения CSS",
            "Один компактный файл содержит все вариации жирности (100–900), наклона и ширины, позволяя плавно анимировать начертание",
            "Они работают без интернета",
            "Они всегда бесплатные"
          ],
          "correctIndex": 1,
          "explanation": "Variable Font упаковывает непрерывный спектр жирностей, ширин и наклонов в один легкий файл (~40 КБ), заменяя 8–10 отдельных файлов обычных шрифтов."
        },
        {
          "id": "css6-q4",
          "question": "Почему line-height для текста рекомендуется указывать безразмерным множителем (line-height: 1.5;), а не в пикселях?",
          "options": [
            "Пиксели запрещены стандартом CSS3",
            "Безразмерный множитель автоматически и пропорционально масштабирует межстрочный интервал при любом изменении font-size у дочерних элементов",
            "Безразмерный множитель ускоряет работу видеокарты",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "line-height: 1.5 вычисляет интервал как 150% от текущего font-size элемента. Если дочерний заголовок имеет font-size: 32px, его line-height станет 48px, а жесткие пиксели склеили бы строки."
        },
        {
          "id": "css6-q5",
          "question": "Как работает функция font-size: clamp(1.5rem, 3vw + 1rem, 3rem)?",
          "options": [
            "Всегда возвращает среднее арифметическое",
            "Ограничивает размер шрифта минимумом 1.5rem и максимумом 3rem, плавно масштабируя текст пропорционально ширине экрана (3vw + 1rem)",
            "Выбирает случайный размер при каждом обновлении",
            "Работает только на планшетах"
          ],
          "correctIndex": 1,
          "explanation": "clamp(MIN, PREFERRED, MAX) держит размер не меньше MIN (1.5rem на мобилках) и не больше MAX (3rem на десктопах), плавно меняя размер в зависимости от вьюпорта без медиа-запросов."
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
          "question": "В чём заключается фундаментальное преимущество цветового пространства OKLCH перед классическим HSL?",
          "options": [
            "OKLCH поддерживает меньше цветов для экономии памяти",
            "OKLCH перцептивно-равномерен (одинаковая светлота L действительно воспринимается глазом одинаково для любых оттенков) и поддерживает широкий цветовой охват Display P3",
            "OKLCH работает только в Photoshop",
            "OKLCH не поддерживает прозрачность"
          ],
          "correctIndex": 1,
          "explanation": "В HSL жёлтый цвет при Lightness: 50% кажется гораздо ярче синего при 50%. В OKLCH светлота L перцептивно выверена с учетом восприятия человеческого глаза, плюс поддерживается Wide Gamut P3."
        },
        {
          "id": "css7-q2",
          "question": "Какая связка CSS-свойств необходима для создания градиентного текста?",
          "options": [
            "color: gradient(red, blue);",
            "background: linear-gradient(...); -webkit-background-clip: text; color: transparent;",
            "text-fill: linear-gradient(...);",
            "filter: hue-rotate(90deg);"
          ],
          "correctIndex": 1,
          "explanation": "Градиент задается свойством background, свойство -webkit-background-clip: text вырезает фон по контуру букв, а color: transparent делает заливку текста прозрачной."
        },
        {
          "id": "css7-q3",
          "question": "Что делает свойство color-scheme: dark; в CSS?",
          "options": [
            "Перекрашивает все картинки в черно-белый цвет",
            "Сообщает браузеру, что страница тёмная, и автоматически окрашивает нативные системные скроллбары, поля ввода и контролы формы в тёмный стиль",
            "Инвертирует все цвета на странице",
            "Удаляет тени у кнопок"
          ],
          "correctIndex": 1,
          "explanation": "color-scheme: dark нативно включает тёмное оформление для элементов операционной системы (скроллбары, date-picker, селекты, чекбоксы)."
        },
        {
          "id": "css7-q4",
          "question": "Какой градиент в CSS используется для круговых диаграмм, спиннеров загрузки и вращающихся рамок?",
          "options": [
            "linear-gradient()",
            "radial-gradient()",
            "conic-gradient()",
            "mesh-gradient()"
          ],
          "correctIndex": 2,
          "explanation": "Конический градиент conic-gradient распределяет цвета по кругу вокруг центральной точки (от 0 до 360 градусов), идеально подходя для индикаторов и круговых графиков."
        },
        {
          "id": "css7-q5",
          "question": "Какой порядок наложения слоев применяется при использовании множественных фонов background: layer1, layer2, layer3;?",
          "options": [
            "Слой layer1 рисуется самым нижним (под всеми)",
            "Слой layer1 рисуется самым верхним (поверх layer2 и layer3)",
            "Порядок определяется случайным образом",
            "Слои автоматически объединяются в один"
          ],
          "correctIndex": 1,
          "explanation": "В CSS Multiple Backgrounds первый указанный слой (layer1) всегда рендерится самым верхним, перекрывая последующие слои (как слои в графическом редакторе)."
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
          "question": "В чём заключается принципиальная разница между box-shadow и filter: drop-shadow()?",
          "options": [
            "box-shadow работает только со шрифтами",
            "box-shadow отбрасывает строго прямоугольную тень коробки блока, а filter: drop-shadow() точно обтекает реальный контур непрозрачных пикселей (стрелочки тултипов, SVG-иконки, прозрачные PNG)",
            "filter: drop-shadow() запрещен на мобильных устройствах",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "filter: drop-shadow() вычисляет тень на основе альфа-канала изображения, идеально повторяя силуэты прозрачных PNG, векторных SVG и псевдоэлементов ::after."
        },
        {
          "id": "css8-q2",
          "question": "Какое поведение обеспечивает псевдокласс :focus-visible?",
          "options": [
            "Показывает элемент только при прокрутке",
            "Отображает индикатор фокуса ТОЛЬКО при навигации с клавиатуры (клавишами Tab/стрелками), скрывая рамку при клике мышью",
            "Удаляет элемент со страницы",
            "Делает текст полужирным"
          ],
          "correctIndex": 1,
          "explanation": ":focus-visible — стандарт доступности: он не раздражает пользователей мыши появлением рамок при клике, но обеспечивает четкую рамку фокуса для людей, использующих клавиатуру."
        },
        {
          "id": "css8-q3",
          "question": "Какая комбинация свойств создает эффект матового стекла (Glassmorphism)?",
          "options": [
            "opacity: 0.5; filter: blur(5px);",
            "Полупрозрачный фон rgba(...) + backdrop-filter: blur(...) + тонкая полупрозрачная граница border",
            "background: black; box-shadow: 0 0 10px white;",
            "display: grid; overflow: hidden;"
          ],
          "correctIndex": 1,
          "explanation": "Glassmorphism требует трех компонентов: полупрозрачного фона, backdrop-filter: blur() для размытия лежащего ПОД элементом контента и тонкого светящегося border."
        },
        {
          "id": "css8-q4",
          "question": "Почему outline предпочтительнее border для отображения фокуса интерактивных элементов?",
          "options": [
            "outline не поддерживается в Firefox",
            "outline не участвует в геометрии Box Model (не сдвигает соседние элементы и не вызывает Reflow) и поддерживает отступ outline-offset",
            "outline меняет цвет фона",
            "border нельзя анимировать"
          ],
          "correctIndex": 1,
          "explanation": "outline рисуется поверх элемента, не влияя на размеры контейнера и не расталкивая соседей, а outline-offset позволяет отодвинуть рамку фокуса от кнопки для лучшей видимости."
        },
        {
          "id": "css8-q5",
          "question": "Как создать эллиптическое скругление углов с разными радиусами по горизонтали и вертикали?",
          "options": [
            "border-radius: 50%;",
            "border-radius: 50px / 25px; (через символ слеша /)",
            "border-ellipse: 50px 25px;",
            "border-round: horizontal 50px vertical 25px;"
          ],
          "correctIndex": 1,
          "explanation": "Синтаксис со слешем (border-radius: 50px / 25px) задает горизонтальный радиус 50px и вертикальный радиус 25px, создавая органические эллиптические формы."
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
          "question": "Какая комбинация CSS-свойств обеспечивает идеальное горизонтальное и вертикальное центрирование элемента?",
          "options": [
            "text-align: center; vertical-align: middle;",
            "display: flex; justify-content: center; align-items: center;",
            "margin: 0 auto; padding: auto;",
            "float: center;"
          ],
          "correctIndex": 1,
          "explanation": "Тройка display: flex + justify-content: center + align-items: center — каноническое решение задачи полного центрирования в CSS."
        },
        {
          "id": "css9-q2",
          "question": "Что произойдет со свойствами justify-content и align-items при установке flex-direction: column?",
          "options": [
            "Ничего не изменится",
            "justify-content начнет управлять ВЕРТИКАЛЬНЫМ положением элементов, а align-items — ГОРИЗОНТАЛЬНЫМ, так как Main Axis становится вертикальной",
            "Свойства перестанут работать",
            "Оба свойства начнут управлять только цветом"
          ],
          "correctIndex": 1,
          "explanation": "При column Main Axis разворачивается вертикально, поэтому justify-content распределяет элементы по вертикали, а align-items выравнивает по горизонтали."
        },
        {
          "id": "css9-q3",
          "question": "Какое преимущество свойства gap перед margin для создания отступов между flex-элементами?",
          "options": [
            "gap не поддерживается в Chrome",
            "gap создает отступы ТОЛЬКО между элементами, не добавляя лишнего пространства по внешним краям контейнера",
            "gap анимирует элементы",
            "gap работает только с числовыми значениями"
          ],
          "correctIndex": 1,
          "explanation": "gap идеален для Flexbox-сеток: он генерирует аккуратные промежутки только между соседними элементами, в то время как margin создает лишние отступы по краям."
        },
        {
          "id": "css9-q4",
          "question": "Как прижать элемент к правому краю flex-контейнера без создания пустых Spacer-элементов?",
          "options": [
            "float: right;",
            "Установить margin-left: auto на элементе — авто-отступ поглотит всё свободное пространство, прижав элемент к правому краю",
            "text-align: right;",
            "position: absolute; right: 0;"
          ],
          "correctIndex": 1,
          "explanation": "margin: auto во Flexbox поглощает всё доступное свободное пространство в указанном направлении, автоматически прижимая элемент к противоположному краю."
        },
        {
          "id": "css9-q5",
          "question": "Какое значение justify-content создает абсолютно одинаковые промежутки между элементами и по краям контейнера?",
          "options": [
            "space-between",
            "space-evenly",
            "flex-start",
            "center"
          ],
          "correctIndex": 1,
          "explanation": "space-evenly распределяет абсолютно равные промежутки и между элементами, и от элементов до краёв контейнера (в отличие от space-between и space-around)."
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
          "question": "Зачем на круглые аватарки и иконки внутри flex-контейнеров ВСЕГДА нужно ставить flex-shrink: 0?",
          "options": [
            "Чтобы сделать их круглыми",
            "Чтобы при переполнении соседнего текста flex-shrink: 1 по умолчанию не сплющивал изображение в овал",
            "Для изменения цвета иконки",
            "Для ускорения загрузки картинки"
          ],
          "correctIndex": 1,
          "explanation": "По умолчанию у flex-элементов flex-shrink: 1. Если текст рядом слишком длинный, браузер сжимает соседние элементы. flex-shrink: 0 гарантирует сохранение точных размеров."
        },
        {
          "id": "css10-q2",
          "question": "В чём преимущество сокращения flex: 1 (1 1 0%) перед flex-grow: 1 для создания равных колонок сетки?",
          "options": [
            "flex: 1 работает в 2 раза быстрее",
            "flex: 1 сбрасывает flex-basis в 0%, поэтому колонки делят ширину строго поровну независимо от объема текста, в то время как flex-grow: 1 делает колонку с большим текстом шире",
            "flex-grow: 1 устарел",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "flex: 1 задает flex-basis: 0%, распределяя 100% ширины поровну. flex-grow: 1 сохраняет flex-basis: auto (размер контента), делая колонки с длинным текстом шире остальных."
        },
        {
          "id": "css10-q3",
          "question": "Какое свойство позволяет ОДНОМУ конкретному flex-элементу переопределить выравнивание align-items контейнера?",
          "options": [
            "align-content",
            "align-self",
            "justify-self",
            "vertical-align"
          ],
          "correctIndex": 1,
          "explanation": "Свойство align-self задается непосредственно на flex-элементе и переопределяет родительское правило align-items только для этого узла."
        },
        {
          "id": "css10-q4",
          "question": "Как задать жесткий сайдбар шириной 280px, который не сжимается и не растет при любых размерах окна?",
          "options": [
            "width: 280px;",
            "flex: 0 0 280px; (или flex: none; width: 280px;)",
            "flex-grow: 280;",
            "flex: 1 280px;"
          ],
          "correctIndex": 1,
          "explanation": "flex: 0 0 280px задает flex-grow: 0 (не расти), flex-shrink: 0 (не сжиматься) и flex-basis: 280px, фиксируя размер намертво."
        },
        {
          "id": "css10-q5",
          "question": "Почему изменение визуального порядка через свойство order может нарушить доступность (Accessibility WCAG)?",
          "options": [
            "order удаляет текст",
            "order меняет только картинку на экране, но порядок навигации с клавиатуры (Tab) и порядок чтения скринридером остаются прежними по DOM-дереву, создавая рассинхрон",
            "order не поддерживается на мобильных",
            "order замедляет GPU"
          ],
          "correctIndex": 1,
          "explanation": "Спецификация CSS указывает, что order влияет только на визуальный рендеринг. Фокус клавиатуры Tab и скринридеры следуют порядку узлов в HTML-коде."
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
          "question": "В чём заключается фундаментальное отличие CSS Grid от Flexbox?",
          "options": [
            "Flexbox работает только со шрифтами",
            "CSS Grid — двумерная (2D) система, управляющая строками и столбцами одновременно, а Flexbox — одномерная (1D) система, выстраивающая элементы вдоль одной главной оси",
            "Grid работает только в Firefox",
            "Grid устарел"
          ],
          "correctIndex": 1,
          "explanation": "Flexbox управляет элементами вдоль одной линии (1D). CSS Grid создает двумерную матрицу (2D), согласуя положение ячеек по строкам и столбцам одновременно."
        },
        {
          "id": "css11-q2",
          "question": "Что означает единица измерения 1fr в CSS Grid?",
          "options": [
            "1 фрейм анимации",
            "1 доля (Fraction) доступного свободного пространства внутри grid-контейнера после вычета фиксированных колонок и gap",
            "1 физический миллиметр",
            "100 пикселей"
          ],
          "correctIndex": 1,
          "explanation": "1fr представляет собой одну долю свободного места. Две колонки по 1fr разделят доступное пространство поровну (50% на 50%)."
        },
        {
          "id": "css11-q3",
          "question": "Как работает формула grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));?",
          "options": [
            "Создает ровно 280 колонок",
            "Автоматически вычисляет максимальное число колонок минимальной шириной 280px, помещающихся в контейнер, и растягивает их на всю ширину БЕЗ медиа-запросов",
            "Отключает адаптивность",
            "Фиксирует размер экрана"
          ],
          "correctIndex": 1,
          "explanation": "auto-fit динамически подбирает количество колонок под ширину экрана. На мобилке будет 1 колонка, на планшете 2, на 4K мониторе 6 — полностью без @media."
        },
        {
          "id": "css11-q4",
          "question": "В чём разница между auto-fit и auto-fill при малом количестве элементов?",
          "options": [
            "Разницы нет",
            "auto-fit схлопывает пустые неиспользуемые колонки и растягивает существующие карточки на всю ширину, а auto-fill оставляет пустые слоты справа",
            "auto-fill запрещен стандартом W3C",
            "auto-fit не поддерживает minmax"
          ],
          "correctIndex": 1,
          "explanation": "Если у вас всего 2 карточки на широком экране, auto-fit растянет их на весь экран, а auto-fill сохранит их компактными, оставив пустые ячейки справа."
        },
        {
          "id": "css11-q5",
          "question": "Какое свойство задает высоту для автоматически создаваемых строк неявной сетки (Implicit Grid)?",
          "options": [
            "grid-auto-rows",
            "implicit-height",
            "row-auto-size",
            "grid-row-gap"
          ],
          "correctIndex": 0,
          "explanation": "Свойство grid-auto-rows определяет размер для всех строк, которые браузер генерирует автоматически при добавлении новых элементов сверх объявленных в grid-template-rows."
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
          "question": "Какое главное правило необходимо соблюдать при составлении схемы grid-template-areas?",
          "options": [
            "Названия областей должны быть написаны заглавными буквами",
            "Каждая строка схемы обязана содержать одинаковое количество ячеек, образуя строгую прямоугольную матрицу",
            "Схема не может содержать больше 3 строк",
            "В схеме запрещены точки"
          ],
          "correctIndex": 1,
          "explanation": "Спецификация CSS Grid требует, чтобы каждая строка в grid-template-areas имела равное число столбцов, а все именованные области были прямоугольными."
        },
        {
          "id": "css12-q2",
          "question": "Что делает запись grid-column: 1 / -1; на элементе сетки?",
          "options": [
            "Скрывает элемент с экрана",
            "Растягивает элемент на ВСЮ ширину сетки от самой первой (1) до самой последней (-1) направляющей линии",
            "Уменьшает элемент на 1 пиксель",
            "Перемещает элемент в левый верхний угол"
          ],
          "correctIndex": 1,
          "explanation": "Отрицательный индекс -1 указывает на последнюю линию сетки. grid-column: 1 / -1 заставляет блок занять 100% ширины колонок."
        },
        {
          "id": "css12-q3",
          "question": "В чём преимущество Grid Overlap (grid-area: 1 / 1) перед position: absolute для наложения текста поверх картинки?",
          "options": [
            "Grid Overlap не работает в Safari",
            "При position: absolute родительский блок схлопывается по высоте в 0, а в Grid Overlap контейнер автоматически сохраняет правильную высоту по содержимому",
            "Grid Overlap автоматически анимирует слои",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "position: absolute вырывает элемент из потока, ломая геометрию страницы. Grid Overlap держит все слои в потоке ячейки, вычисляя правильную высоту."
        },
        {
          "id": "css12-q4",
          "question": "Что делает свойство grid-auto-flow: dense?",
          "options": [
            "Увеличивает плотность пикселей",
            "Включает алгоритм плотной упаковки: браузер автоматически заполняет пустые дыры в сетке меньшими элементами, идущими дальше по DOM-дереву",
            "Запрещает перенос элементов",
            "Сжимает изображения"
          ],
          "correctIndex": 1,
          "explanation": "dense устраняет пустоты, образующиеся при переносе крупных элементов span 2, аккуратно подтягивая на их место компактные ячейки."
        },
        {
          "id": "css12-q5",
          "question": "Что означает символ точки '.' в свойстве grid-template-areas: 'header header' 'sidebar .' 'footer footer';?",
          "options": [
            "Синтаксическая ошибка",
            "Пустая незаполненная ячейка (пропуск в сетке)",
            "Точка останова адаптивности",
            "Конец строки"
          ],
          "correctIndex": 1,
          "explanation": "Точка . в спецификации grid-template-areas служит заполнителем для пустых ячеек, в которые не привязывается ни одна именованная область."
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
          "question": "В чём главное отличие подхода Mobile First от Desktop First в адаптивном дизайне?",
          "options": [
            "Mobile First использует @media max-width",
            "Mobile First пишет базовые стили для мобилок и РАСШИРЯЕТ их через @media (min-width: ...) для больших экранов",
            "Mobile First запрещает использование Grid",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "Mobile First: базовый CSS — для мобилки, усложнение через min-width. Desktop First делает наоборот через max-width, что расточительно."
        },
        {
          "id": "css13-q2",
          "question": "Что делает CSS-функция clamp(1rem, 3vw, 2rem)?",
          "options": [
            "Устанавливает фиксированный размер 3vw",
            "Плавно масштабирует значение между 1rem (минимум) и 2rem (максимум), используя 3vw как предпочтительное гибкое значение",
            "Обрезает текст",
            "Устанавливает размер 1rem"
          ],
          "correctIndex": 1,
          "explanation": "clamp(MIN, PREFERRED, MAX) ограничивает значение в диапазоне [MIN, MAX], используя PREFERRED (в vw) для плавного масштабирования между ними."
        },
        {
          "id": "css13-q3",
          "question": "Почему на мобильных устройствах рекомендуется использовать 100dvh вместо 100vh?",
          "options": [
            "dvh работает быстрее",
            "100vh в мобильном Safari включает область за динамической адресной строкой, создавая нежелательный скролл. 100dvh учитывает текущую видимую область",
            "dvh поддерживается только в Chrome",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "В мобильном Safari адресная строка скрывается при скролле. 100vh считает полную высоту включая эту зону, а 100dvh — только видимую часть."
        },
        {
          "id": "css13-q4",
          "question": "Чем Container Queries (@container) принципиально отличаются от Media Queries (@media)?",
          "options": [
            "Container Queries реагируют на ширину КОНТЕЙНЕРА (родителя компонента), а не на ширину окна браузера",
            "Container Queries быстрее работают",
            "Container Queries используют JavaScript",
            "Разницы нет"
          ],
          "correctIndex": 0,
          "explanation": "Container Queries позволяют компоненту адаптироваться к размеру его конкретного контейнера, делая его по-настоящему переиспользуемым в разных контекстах."
        },
        {
          "id": "css13-q5",
          "question": "Зачем нужен meta-тег viewport width=device-width, initial-scale=1?",
          "options": [
            "Для подключения JavaScript",
            "Чтобы мобильный браузер использовал реальную ширину экрана устройства, а не симулировал десктопную ширину ~980px",
            "Для анимаций",
            "Для подключения шрифтов"
          ],
          "correctIndex": 1,
          "explanation": "Без viewport meta мобильные браузеры рендерят страницу в виртуальном окне ~980px и масштабируют её — текст становится нечитаемо мелким."
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
          "question": "В чём фундаментальное отличие CSS Custom Properties (--var) от переменных препроцессоров (Sass/SCSS $var)?",
          "options": [
            "CSS-переменные работают только с цветами",
            "Sass-переменные вычисляются один раз при сборке, а CSS Custom Properties живут в DOM-дереве браузера в рантайме, наследуются и динамически меняются через JS",
            "Sass-переменные поддерживают fallback, а CSS — нет",
            "Разницы нет"
          ],
          "correctIndex": 1,
          "explanation": "CSS Custom Properties работают в браузере в реальном времени, подчиняются каскаду DOM и могут изменяться из JavaScript без пересборки CSS."
        },
        {
          "id": "css14-q2",
          "question": "Что произойдет при вызове color: var(--brand-color, #2dff8a);, если переменная --brand-color не была объявлена?",
          "options": [
            "Свойство color будет проигнорировано",
            "Применится fallback-значение #2dff8a (второй аргумент функции var)",
            "Браузер выдаст ошибку в консоль",
            "Текст станет прозрачным"
          ],
          "correctIndex": 1,
          "explanation": "Второй аргумент функции var() служит запасным значением (fallback), которое применяется при отсутствии объявленной переменной."
        },
        {
          "id": "css14-q3",
          "question": "Как из JavaScript динамически изменить значение глобальной CSS-переменной на всем сайте?",
          "options": [
            "document.style['--color'] = 'red'",
            "document.documentElement.style.setProperty('--color', 'red')",
            "window.setCSS('--color', 'red')",
            "CSS.variables.set('--color', 'red')"
          ],
          "correctIndex": 1,
          "explanation": "Метод document.documentElement.style.setProperty('--name', 'val') устанавливает значение свойства на корневом элементе <html> (:root)."
        },
        {
          "id": "css14-q4",
          "question": "Какой селектор является стандартом для объявления темы в современных веб-приложениях?",
          "options": [
            ".dark-theme-all-elements",
            "[data-theme=\"dark\"] на корневом теге <html>",
            "#dark",
            "@dark"
          ],
          "correctIndex": 1,
          "explanation": "Селектор data-атрибута [data-theme='dark'] на <html> позволяет переключать тему одной строчкой JS без коллизий классов."
        },
        {
          "id": "css14-q5",
          "question": "Чувствительны ли имена CSS Custom Properties к регистру символов?",
          "options": [
            "Нет, регистр не имеет значения",
            "Да, --primary-color и --Primary-Color — это две совершенно разные переменные",
            "Только в браузере Safari",
            "Только если они объявлены в :root"
          ],
          "correctIndex": 1,
          "explanation": "В отличие от обычных CSS-свойств, пользовательские переменные (Custom Properties) строго чувствительны к регистру (case-sensitive)."
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
          "question": "Почему анимации на основе transform (translate, scale, rotate) работают значительно плавнее, чем анимации top/left/margin?",
          "options": [
            "transform написан на языке C++",
            "transform вычисляется напрямую на графическом процессоре (GPU) на отдельном композитном слое, не вызывая тяжелого перерасчета макета страницы (Reflow) и перерисовки (Repaint)",
            "transform работает только в браузерах на базе Chromium",
            "Разницы в производительности нет"
          ],
          "correctIndex": 1,
          "explanation": "Свойства transform и opacity не влияют на геометрию соседних элементов, что позволяет браузеру анимировать их на GPU с частотой 60–120 FPS."
        },
        {
          "id": "css15-q2",
          "question": "От чего вычисляются процентные значения в свойстве transform: translate(-50%, -50%)?",
          "options": [
            "От ширины и высоты родительского контейнера",
            "От СОБСТВЕННОЙ ширины и высоты самого трансформируемого элемента",
            "От размеров окна браузера (viewport)",
            "От размера шрифта (font-size)"
          ],
          "correctIndex": 1,
          "explanation": "В отличие от top/left (где % берутся от родителя), translate(-50%, -50%) берет 50% от собственного размера элемента, что делает его идеальным для центрирования."
        },
        {
          "id": "css15-q3",
          "question": "Зачем необходимо свойство backface-visibility: hidden при создании эффекта 3D Card Flip?",
          "options": [
            "Для ускорения загрузки картинок",
            "Чтобы скрыть оборотную сторону (изнанку) элемента, когда он повернут спиной к зрителю на 180 градусов",
            "Чтобы отключить скролл страницы",
            "Чтобы удалить тень карточки"
          ],
          "correctIndex": 1,
          "explanation": "backface-visibility: hidden скрывает грань, когда нормаль ее плоскости направлена от зрителя, предотвращая наложение перевернутого текста."
        },
        {
          "id": "css15-q4",
          "question": "Что произойдет, если изменить значение perspective на родителе с 1500px до 300px?",
          "options": [
            "Элемент станет невидимым",
            "3D-искажение станет намного сильнее и агрессивнее, так как виртуальная камера наблюдателя приблизится вплотную к объекту",
            "Элемент уменьшится в 5 раз",
            "Ничего не изменится"
          ],
          "correctIndex": 1,
          "explanation": "perspective задает дистанцию от зрителя до плоскости Z=0. Чем меньше расстояние (300px), тем более выражена перспектива и глубина."
        },
        {
          "id": "css15-q5",
          "question": "Что делает свойство transform-origin: top left;?",
          "options": [
            "Перемещает элемент в левый верхний угол экрана",
            "Устанавливает точку привязки (якорь), вокруг которой происходят поворот (rotate) и масштабирование (scale), в левый верхний угол элемента",
            "Обрезает левый верхний угол",
            "Удаляет border-radius"
          ],
          "correctIndex": 1,
          "explanation": "transform-origin определяет центр трансформации. По умолчанию это центр (50% 50%), но его можно сместить в любой угол или точку."
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
