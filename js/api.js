import {resetForms} from './validation-form.js';
import {resetMap} from './map.js';

const getData = (onSucces, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Произошла непредвиденая проблема');
    })
    .then(onSucces)
    .catch(onFail);
};


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


export {getData, sendData};
