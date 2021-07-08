import './card.js';
import './form.js';
import './validation-form.js';
import './render-message.js';
import {filterAdvertisement} from'./filter.js';
import {cachedData} from './api.js';
import {createMarkersGroup} from './map.js';

const updateAdvertisement = () => {
  const filteredAdvertisement = filterAdvertisement(cachedData);
  createMarkersGroup(filteredAdvertisement.slice(0, 10));
};
updateAdvertisement();
