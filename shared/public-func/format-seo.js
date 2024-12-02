export default function formatForSEO(text) {
    // Убираем все Markdown символы, оставляя только текст
    const cleanText = text
    .replace(/([*#_~`>+!\[\]\(\)])/g, '') // Убираем Markdown символы
    .replace(/\t+/g, ' ') // Заменяем табуляции на пробелы
    .replace(/\n+/g, ' ') // Заменяем новые строки на пробелы
    .replace(/\s{2,}/g, ' ') // Заменяем несколько пробелов на один
    .trim(); // Убираем пробелы в начале и конце
  
    // Разбиваем текст на предложения (по точке)
    const sentences = cleanText.split('.').map(sentence => sentence.trim()).filter(sentence => sentence);;
  
    // Оставляем только первые два предложения
    return sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '...' : '');
  }
  