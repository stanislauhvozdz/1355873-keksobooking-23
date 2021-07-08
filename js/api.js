import {resetForms} from './validation-form.js';
import {resetMap} from './map.js';
import {filterAdvertisement} from'./filter.js';
const cachedData = [];

const getData = (onSucces, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      filterAdvertisement();
      throw new Error('Произошла непредвиденая проблема');
    })
    // .then(onSucces)
    .then((dataArray) => {
      dataArray.forEach((item) => {
        cachedData.push(item);
      });
      return dataArray;
    })
    .catch(onFail);
};
getData();

const sendData = (onSucces, onFail, body) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSucces();
        resetForms();
        resetMap();
      } else {
        onFail();
      }
    })
    .catch(onFail);
};


export {getData, sendData, cachedData};
