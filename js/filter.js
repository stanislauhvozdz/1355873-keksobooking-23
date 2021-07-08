// import {createMarkersGroup} from './map.js';
// import {removeMarkersGroup} from './map.js';


function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const filterForm = document.querySelector('.map__filters');
const filterType = filterForm.querySelector('#housing-type');
const filterPrice = filterForm.querySelector('#housing-price');
const filterRooms = filterForm.querySelector('#housing-rooms');
const filterGuestsNumber = filterForm.querySelector('#housing-guests');
const selectFilters = filterForm.querySelectorAll('.map__filter');
const inputFilters = filterForm.querySelectorAll('[type="checkbox"]');
const PRICE_RANGE = {
  LOW: 10000,
  MIDDLE: 50000,
  HIGH: 999999,
};

const any = 'any';
const low = 'low';
const high = 'high';
const middle = 'middle';


const getCurrentFilterValue = (filter, value) => {
  filter = value;
  debounce();
};

selectFilters.forEach((elem) => {
  elem.addEventListener('change', (evt) => {
    getCurrentFilterValue(elem.value, evt.target.value);
  });
});

inputFilters.forEach((elem) => {
  elem.addEventListener('change', () => {
    getCurrentFilterValue(elem, elem.checked);
  });
});


const filterAdvertisement = (advertisement) => {
  const advertisementOffer = advertisement.offer;
  const advertisementFeatures = advertisementOffer.features;
  const advertisementPrice = advertisementOffer.price;

  for (let index = 0; index < selectFilters.length; index++) {
    if (selectFilters[index] === filterType) {
      if (selectFilters[index].value !== any && advertisementOffer.type !== selectFilters[index].value) {
        return false;
      }
    }
    if (selectFilters[index] === filterPrice) {
      if (selectFilters[index].value !== any &&
        (selectFilters[index].value === low && advertisementPrice >= PRICE_RANGE.LOW.MAX
        || selectFilters[index].value === middle && (advertisementPrice <= PRICE_RANGE.LOW.MAX || advertisementPrice >= PRICE_RANGE.MIDDLE.MAX)
        || selectFilters[index].value === high && advertisementPrice <= PRICE_RANGE.MIDDLE.MAX)
      ) {
        return false;
      }
    }
    if (selectFilters[index] === filterRooms || selectFilters[index] === filterGuestsNumber) {
      if (selectFilters[index].value !== any && advertisementOffer.guests !== selectFilters[index].value * 1) {
        return false;
      }
    }
  }

  for (let j = 0; j < inputFilters.length; j++) {
    if (inputFilters[j].checked === true && advertisementFeatures.indexOf(inputFilters[j].value) === -1) {
      return false;
    }
  }
};

export {filterAdvertisement};
