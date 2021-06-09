//  Все переменные - константы
const titles = ['Лучшее предложение в этом районе!', 'Сдается шикарная, просторная квартира в новом, элитном доме', 'Сдается на длительный срок квартира в самом центре столицы', 'Два уровня комфорта в центре'];
const MIN_PRICE = 100;
const MAX_PRICE = 100000;
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const MIN_NUMBERS_OF_ROOMS = 1;
const MAX_NUMBERS_OF_ROOMS = 6;
const MIN_NUMBER_OF_GUESTS = 1;
const MAX_NUMBER_OF_GUESTS = 12;
const TIMES = {
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
};
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = [' сделан хороший ремонт', 'сдам квартиру семейной паре', 'без животных'];
const photo = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const MIN_LATITUDE = 35.6500;
const MAX_LATITUDE = 35.7000;
const MIN_LONGITUDE = 139.7500;
const MAX_LONGITUDE = 139.8000;


//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomNumber = (minValue, maxValue) => {
  if (minValue >=0 && maxValue >=0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
  return ('Диапазон может быть только положительный, включая ноль.');
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Будет использоваться для генерации временных географических координат в следующем задании.
const getGeographicalCoordinates = (latitude, longitude, toFloat) => {
  if (latitude >= 0 && longitude >= 0 && latitude < longitude) {
    return ((Math.random() * (longitude - latitude + 1)) + latitude).toFixed(toFloat);
  }
  return ('Данные некорректны, перечитайте задание.');
};

// Функция, возвращающая случайный элемент из массива
const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const LAT = getGeographicalCoordinates(MIN_LATITUDE, MAX_LATITUDE, 4);
const LNG = getGeographicalCoordinates(MIN_LONGITUDE, MAX_LONGITUDE, 4);

const createAnAdvertisement = {
  'author': {
    avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
  },
  'offer': {
    'title': getRandomArrayElement(titles),
    'adress': `location.x = ${LAT}, location.y = ${LNG}`,
    'price': getRandomNumber(MIN_PRICE, MAX_PRICE),
    'type': getRandomArrayElement(type),
    'rooms': getRandomNumber(MIN_NUMBERS_OF_ROOMS, MAX_NUMBERS_OF_ROOMS),
    'guests': getRandomNumber(MIN_NUMBER_OF_GUESTS, MAX_NUMBER_OF_GUESTS),
    'checkin':getRandomArrayElement(TIMES.checkin),
    'checkout':getRandomArrayElement(TIMES.checkout),
    'features': getRandomArrayElement(features),
    'description': getRandomArrayElement(description),
    'photo': getRandomArrayElement(photo),
  },
  'location': {
    'lat': `${LAT}`,
    'lng': `${LNG}`,
  },
};

const getGenerateAnArray = new Array(5).fill().map(() => createAnAdvertisement);

console.log(getGenerateAnArray);
