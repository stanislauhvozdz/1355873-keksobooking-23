import './card.js';
import './form.js';
import './validation-form.js';
import './render-message.js';
import './filter.js';
import {getData} from './api.js';
import {createMarkersGroup} from './map.js';

const ADVERTISING_COUNT = 10; //пока тут, это количество объявлений
getData((advertising) => {
  createMarkersGroup(advertising.slice(0, ADVERTISING_COUNT));
});
