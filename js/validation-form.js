const adForm = document.querySelector('.ad-form');
const inputPrice = adForm.querySelector('#price');
const roomsInputElement = adForm.querySelector('#room_number');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const pricePerNight = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const housingType = adForm.querySelector('#type');
const housingPrice = adForm.querySelector('#price');


inputPrice.addEventListener('input', () => {
  if (inputPrice.value === '') {
    inputPrice.value === 0;
  }
  if (inputPrice.value.length > 7) {
    inputPrice.value === 1000000;
  }
});

const setDisabledValue = (elements, values) => {
  for (let item = 0; item < elements.length; item++) {
    elements[item].disabled = values.indexOf(elements[item].value) > -1;
  }
};

const calculateRoomsAndCapacity = () => {
  const capacityInputSelect = adForm.querySelector('select[name="capacity"]');
  const capacityOptionOptions = capacityInputSelect.querySelectorAll('option');
  const roomsInputValue = roomsInputElement.value;

  switch (roomsInputValue) {
    case '1':
      setDisabledValue(capacityOptionOptions, ['0', '2', '3']);
      capacityOptionOptions[0].selected = true;
      break;
    case '2':
      setDisabledValue(capacityOptionOptions, ['0', '3']);
      capacityOptionOptions[1].selected = true;
      break;
    case '3':
      setDisabledValue(capacityOptionOptions, ['0']);
      capacityOptionOptions[2].selected = true;
      break;
    case '100':
      setDisabledValue(capacityOptionOptions, ['1', '2', '3']);
      capacityOptionOptions[3].selected = true;
      break;
  }
};

const roomsInputChangeHandler = () => {
  calculateRoomsAndCapacity();
};

roomsInputElement.addEventListener('change', roomsInputChangeHandler);

housingType.addEventListener('change', () => {
  switch(housingType.value) {
    case 'bungalow':
      housingPrice.placeholder = pricePerNight.bungalow;
      break;
    case 'flat':
      housingPrice.placeholder = pricePerNight.flat;
      break;
    case 'hotel':
      housingPrice.placeholder = pricePerNight.hotel;
      break;
    case 'house':
      housingPrice.placeholder = pricePerNight.house;
      break;
    case 'palace':
      housingPrice.placeholder = pricePerNight.palace;
      break;
    default:
      housingPrice.placeholder = '0';
      break;
  }
});

housingType.addEventListener('input', () => {
  if (housingType.value === 'bungalow') {
    housingPrice.setAttribute('min', '0');
  } else if (housingType.value === 'flat') {
    housingPrice.setAttribute('min', '1000');
  } else if (housingType.value === 'hotel') {
    housingPrice.setAttribute('min', '3000');
  } else if (housingType.value === 'house') {
    housingPrice.setAttribute('min', '5000');
  } else if (housingType.value === 'palace') {
    housingPrice.setAttribute('min', '10000');
  } else {
    housingPrice.setAttribute('min', '0');
  }
});


const onTimeChange = function (evt) {
  const select = evt.target === timeIn ? timeOut : timeIn;
  select.value = evt.target.value;
};

timeIn.addEventListener('change', onTimeChange);
timeOut.addEventListener('change', onTimeChange);
