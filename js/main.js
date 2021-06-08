//  Все переменные - константы
const title = ['Лучшее предложение в этом районе!', 'Сдается шикарная, просторная квартира в новом, элитном доме', 'Сдается на длительный срок квартира в самом центре столицы', 'Два уровня комфорта в центре'];
// const address = {{location.x}}, {{location.y}};
const minPrice = 100;
const maxPrice = 100000;
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const minNumberOfRooms = 1;
const maxNumberOfRooms = 6;
const minNumberOfGuests = 1;
const maxNumberOfGuests = 12;
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = [' сделан хороший ремонт', 'сдам квартиру семейной паре', 'без животных'];
const photo = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const minLatitude = 35.6500;
const maxLatitude = 35.7000;
const minLongitude = 139.7500;
const maxLongitude = 139.8000;


//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const randomNumber = (minValue, maxValue) => {
  if (minValue >=0 && maxValue >=0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
  return ('Диапазон может быть только положительный, включая ноль.');
};
randomNumber();

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Будет использоваться для генерации временных географических координат в следующем задании.
const geographicalCoordinates = (latitude, longitude, toFloat) => {
  if (latitude >= 0 && longitude >= 0 && latitude < longitude) {
    return ((Math.random() * (longitude - latitude + 1)) + latitude).toFixed(toFloat);
  }
  return ('Данные некорректны, перечитайте задание.');
};
geographicalCoordinates();

// Функция, возвращающая случайный элемент из массива
function randomArrayElement(array) {
  return array[randomNumber(0, array.length - 1)];
}

const createAnAdvertisement = {
  'author': {
    avatar: `img/avatars/user0${  randomNumber(1, 8)  }.png`,
  },
  'offer': {
    'title': randomArrayElement(title),
    'price': randomNumber(minPrice, maxPrice),
    'type': randomArrayElement(type),
    'rooms': randomNumber(minNumberOfRooms, maxNumberOfRooms),
    'guests': randomNumber(minNumberOfGuests, maxNumberOfGuests),
    'checkin':randomArrayElement(checkin),
    'checkout':randomArrayElement(checkout),
    'features': randomArrayElement(features),
    'description': randomArrayElement(description),
    'photo': randomArrayElement(photo),
  },
  'location': {
    'lat': geographicalCoordinates(minLatitude, maxLatitude, 4),
    'lng': geographicalCoordinates(minLongitude, maxLongitude, 4),
  },
};
