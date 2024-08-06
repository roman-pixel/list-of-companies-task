import { format, formatISO, isValid, parseISO } from 'date-fns';

export function formatDate(date: string) {
  const parsedDate = parseISO(date);

  if (isValid(parsedDate)) {
    return format(parsedDate, 'dd.MM.yyyy HH:mm');
  }

  return;
}

export function sliceText(value: string) {
  const textLenght = 25;
  const sliceLenght = 20;

  if (value.length >= textLenght) {
    return value.slice(0, sliceLenght).trimEnd() + '...';
  }

  return value;
}

export function getCurrentDateTime(): string {
  return formatISO(new Date(), { representation: 'complete' });
}

// Функция для генерации случайного id
export const generateRandomId = () => Math.floor(Math.random() * 1000000);
