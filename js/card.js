import {createAnAdvertisement} from './data.js';

const mapCanvas = document.querySelector('.map__canvas');
const cardTemplateFragment = document.querySelector('#card').content;
const templateCard = cardTemplateFragment.querySelector('.popup');

const createCard = (data) => {
  const clone = templateCard.cloneNode(true);
  clone.querySelector('.popup__title').textContent = data.offer.title;
  clone.querySelector('.popup__text--address').textContent = data.offer.adress;
  clone.querySelector('.popup__text--price').textContent = `${data.offer.adress} ₽/ночь`;
  clone.querySelector('.popup__type').textContent = data.offer.type;
  clone.querySelector('.popup__text--capacity').textContent = `${data.offer.room} комнаты для ${data.offer.guests} гостей`;
  clone.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;


  clone.querySelector('.popup__description').textContent = data.offer.description;
  const popupPhotos = clone.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('.popup__photo');
  popupPhoto.src = data.offer.photo;

};

// mapCanvas.appendChild(createCard);

