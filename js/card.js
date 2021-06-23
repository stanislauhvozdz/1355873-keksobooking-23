import {createAnAdvertisement} from './data.js';

// console.log(createAnAdvertisement());

const mapCanvas = document.querySelector('.map__canvas');
const cardTemplateFragment = document.querySelector('#card').content;
const templateCard = cardTemplateFragment.querySelector('.popup');
const featureListElement = templateCard.querySelector('.popup__features');

const createCard = (data) => {
  const clone = templateCard.cloneNode(true);
  if (data.author.avatar) {
    clone.querySelector('.popup__avatar').src = data.author.avatar;
  } else {
    clone.querySelector('.popup__avatar').style = 'display: none';
  }

  if (data.offer.title) {
    clone.querySelector('.popup__title').textContent = data.offer.title;
  } else {
    clone.querySelector('.popup__title').style = 'display: none';
  }

  if (data.offer.adress) {
    clone.querySelector('.popup__text--address').textContent = data.offer.adress;
  } else {
    clone.querySelector('.popup__text--address').style = 'display: none';
  }

  if (data.offer.price) {
    clone.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
  } else {
    clone.querySelector('.popup__text--price').style = 'display: none';
  }
  const type = data.offer.type;
  const typeList = {
    'palace': 'Дворец',
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalow': 'Бунгало',
    'hotel': 'Отель',
  };

  if (type) {
    clone.querySelector('.popup__type').textContent = typeList[type];
  } else {
    clone.querySelector('.popup__type').style = 'display: none';
  }

  if (data.offer.rooms && data.offer.guests) {
    clone.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  } else {
    clone.querySelector('.popup__text--capacity').style = 'display: none';
  }

  if (data.offer.checkin && data.offer.checkout) {
    clone.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  } else {
    clone.querySelector('.popup__text--time').style = 'display: none';
  }

  // FEATUREs
  const features = data.offer.features;
  const modifiers = features.map((feature) => `popup__feature--${feature}`);

  featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  // clone.querySelector('.popup__features').textContent = ;
  if (data.offer.description) {
    clone.querySelector('.popup__description').textContent = data.offer.description;
  } else {
    clone.querySelector('.popup__description').style = 'display: none';
  }

  const popupPhotos = clone.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('.popup__photo');

  const photos = data.offer.photo;
  const getCardPhotos = function (photoArray) {
    photoArray.forEach((item) => {
      const newImg = popupPhoto.cloneNode(true);
      newImg.src = item;
      popupPhotos.append(newImg);
    });
    const photoCollection = popupPhotos.querySelectorAll('.popup__photo');
    photoCollection[0].remove();
  };
  getCardPhotos(photos);

  mapCanvas.appendChild(clone);
};
createCard(createAnAdvertisement());
