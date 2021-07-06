import {getIncludedForm} from './form.js';
import {createCard} from './card.js';


const settingsMap = {
  DEFAULT_COORDS: {
    lat: 35.68911,
    lng: 139.69211,
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
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const mainMarker = L.marker (
  {
    lat: 35.68911,
    lng: 139.69211,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainMarker.addTo(map);

const adForm = document.querySelector('.ad-form');
const inputAddress = adForm.querySelector('#address');
inputAddress.setAttribute('placeholder', `${settingsMap.DEFAULT_COORDS.lat}, ${settingsMap.DEFAULT_COORDS.lat}`);
const getAddress = ({lat, lng}) => {
  inputAddress.value = `${Number(lat.toFixed(5))}, ${Number(lng.toFixed(5))}`;
};

mainMarker.on('dragend', (evt) => {
  getAddress(evt.target.getLatLng());
});


const markerGroup = L.layerGroup().addTo(map);

const createMarker = (currentAdvertising) => {
  const {lat, lng} = currentAdvertising.location;

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      createCard(currentAdvertising),
      {
        keepInView: true,
      },
    );
};

const createMarkersGroup = (similarAds) => {
  similarAds.forEach((currentAdvertising) => {
    createMarker(currentAdvertising);
  });
};


const resetMap = () => {
  map.setView(
    {
      lat: settingsMap.DEFAULT_COORDS.lat,
      lng: settingsMap.DEFAULT_COORDS.lng,
    }, 15);
  mainMarker.setLatLng(
    [settingsMap.DEFAULT_COORDS.lat,
      settingsMap.DEFAULT_COORDS.lng,
    ]);
};


export {activationMap, resetMap, createMarkersGroup};
