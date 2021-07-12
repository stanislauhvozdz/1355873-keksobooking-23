import './card.js';
import './form.js';
import './validation-form.js';
import './render-message.js';
import './filter.js';
import {getData} from './api.js';
import {createMarkersGroup} from './map.js';
import {saveAdsData} from './map.js';
import {setFilterFormChange} from './filter.js';


const getSimilarAds =() => {
  getData((adsList) => {
    saveAdsData(adsList);
    createMarkersGroup(adsList);
    setFilterFormChange(()=>createMarkersGroup(adsList));
  });
};

getSimilarAds();
