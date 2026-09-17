/**
 * Русская плюрализация по числу.
 *
 * Русский язык требует три формы существительного в зависимости от числа:
 *   1 уровень, 2 уровня, 5 уровней, 21 уровень, 23 уровня, 111 уровней.
 * Без этого интерфейс выдаёт «21 уровней» и «23 уровней».
 *
 * @param count число
 * @param forms [для 1, для 2-4, для 5-20]
 */
export function pluralRu(count: number, forms: [string, string, string]): string {
  const n = Math.abs(count) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
}

/** Число вместе с правильной формой слова: `12 уровней`. */
export function withPluralRu(count: number, forms: [string, string, string]): string {
  return `${count} ${pluralRu(count, forms)}`;
}

export const LEVEL_FORMS: [string, string, string] = ['уровень', 'уровня', 'уровней'];
export const LESSON_FORMS: [string, string, string] = ['уроку', 'урокам', 'урокам'];
export const TASK_FORMS: [string, string, string] = ['задача', 'задачи', 'задач'];
