const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

const getDisabledForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  [...adForm.items].forEach((item) => item.setAttribute('disabled'));
  [...mapFilter.items].forEach((item) => item.setAttribute('disabled'));
};

const getIncludedForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  [...adForm.items].forEach((item) => item.removeAttribute('disabled'));
  [...mapFilter.items].forEach((item) => item.removeAttribute('disabled'));
};
