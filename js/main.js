//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const randomNumber = (minValue, maxValue) => {
  if (minValue >=0 && maxValue >=0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  } else {
    return ('Диапазон может быть только положительный, включая ноль.');
  }
};
randomNumber();

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Будет использоваться для генерации временных географических координат в следующем задании.
const geographicalCoordinates = (latitude, longitude, toFloat) => {
  if (latitude >= 0 && longitude >= 0 && latitude < longitude) {
    return ((Math.random() * (longitude - latitude + 1)) + latitude).toFixed(toFloat);
  } else {
    return ('Данные некорректны, перечитайте задание.');
  }
};
geographicalCoordinates();
