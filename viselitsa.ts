function start() {
  // Создаём массив со словами
  const words = ["программа", "макака", "прекрасный", "оладушек"];

  // Выбираем случайное слово
  const word = words[Math.floor(Math.random() * words.length)];

  // создаём итоговый массив
  let answer = "_".repeat(word.length);

  // Игровой цикл
  while (answer.indexOf("_") >= 0) {
    // Показываем состояние игры
    alert(answer.split("").join(" "));

    // Запрашиваем вариант ответа
    const letter = prompt(
      "Угадайте букву, или нажмите Отмена для выхода из игры."
    );
    if (!letter) {
      // Пользователь ничего не ввел или нажал "Отмена". Выходим из игрового цикла
      break;
    }
    if (letter.length === 1) {
      // Обновляем состояние игры
      for (let index = 0; index < word.length; index++) {
        if (word[index] === letter) {
          answer = replaceCharAt(answer, index, letter);
        }
      }
    } else {
      alert("Пожалуйста, введите одиночную букву.");
    }
    // Конец игрового цикла
  }

  // Отображаем ответ и поздравляем игрока
  alert("Отлично! Было загадано слово " + word);
}

function replaceCharAt(
  str: string,
  index: number,
  replacement: string
): string {
  return (
    str.substr(0, index) + replacement + str.substr(index + replacement.length)
  );
}
