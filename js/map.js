import {getIncludedForm} from './form.js';
// import {createCard} from './card.js';
// import {createAnAdvertisement} from './data.js';

const settingsMap = {
  DEFAULT_COORDS: {
    lat: 35.689,
    lng: 139.692,
  },
};

const map = L.map('map-canvas');
map.setView({
  lat: settingsMap.DEFAULT_COORDS.lat,
  lng: settingsMap.DEFAULT_COORDS.lng,
}, 15);

const activationMap = () => {
  map.on('load', () => {
    getIncludedForm();
  });
  map.setView({
    lat: settingsMap.DEFAULT_COORDS.lat,
    lng: settingsMap.DEFAULT_COORDS.lng,
  }, 15);
};

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mainPinIcon = L.icon ({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const secondPinIcon = L.icon ({
  iconUrl: '../img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const mainMarker = L.marker (
  {
    lat: 35.689,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainMarker.addTo(map);

const adForm = document.querySelector('.ad-form');
const inputAddress = adForm.querySelector('#address');
const getAddress = ({lat, lng}) => {
  inputAddress.value = `${Number(lat.toFixed(5))}, ${Number(lng.toFixed(5))}`;
};

mainMarker.on('dragend', (evt) => {
  getAddress(evt.target.getLatLng());
});

const secondMarker = L.marker (
  {
    lat: 35.691,
    lng: 139.695,
  },
  {
    draggable: true,
    icon: secondPinIcon,
  },
);

secondMarker.bindPopup(price, {
  keepInView: true,
});
secondMarker.addTo(map);

export {activationMap};
