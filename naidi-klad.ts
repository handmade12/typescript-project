//Здесь будет Код игры
var getRandomNumber = function (size: number): number {
  return Math.floor(Math.random() * size);
};

//Вычеслить расстояние от клика (event) до клада (target)
var getDistance = function (
  event: any,
  target: { x: number; y: number }
): number {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

//Получить для расстояния строку подсказки
var getDistanceHint = function (distance: number): string {
  if (distance < 30) {
    return "Обожжёшься!";
  } else if (distance < 50) {
    return "Очень горячо";
  } else if (distance < 80) {
    return "Горячо";
  } else if (distance < 160) {
    return "Тепло";
  } else if (distance < 320) {
    return "Холодно";
  } else if (distance < 500) {
    return "Очень холодно";
  } else {
    return "Замёрзнешь!";
  }
};

//Создаём переменные
var width = 400;
var height = 400;
var clicks = 0;

//Случайная позиция клада
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

//добавляем элементу img обработчик клика
$("#map").click(function (event: any) {
  clicks++;

  //Получаем расстояние от места клика до клада
  var distance = getDistance(event, target);

  //Преобразуем расстояние в подсказку
  var distanceHint = getDistanceHint(distance);

  // Записываем в элемент #distance новую подсказку
  setHintText(distanceHint);

  // Если клик бы л достаточно близко,  поздравляем с победой
  if (distance < 25) {
    alert("Клад найден! Сделано кликов: " + clicks);
  }
});

function setHintText(text: string): void {
  $("#distance").text(text);
}
