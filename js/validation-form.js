const pricePerNight = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const adForm = document.querySelector('.ad-form');
const inputTitle = adForm.querySelector('#title');
const inputPrice = adForm.querySelector('#price');
const inputRoomNumber = adForm.querySelector('#room_number');
const rooms = inputRoomNumber.querySelectorAll('option');
const inputGuests = adForm.querySelector('#capacity');
const guests = inputGuests.querySelectorAll('option');

inputTitle.addEventListener('invalid', () => {
  if (inputTitle.validity.tooShort) {
    inputTitle.setCustomValidity('Сообщение должно состоять минимум из 30 символов');
  } else if (inputTitle.validity.tooLong) {
    inputTitle.setCustomValidity('Имя не должно превышать 100 символов');
  } else if (inputTitle.validity.valueMissing) {
    inputTitle.setCustomValidity('Обязательное поле');
  } else {
    inputTitle.setCustomValidity('');
  }
});

inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    inputTitle.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    inputTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    inputTitle.setCustomValidity('');
  }

  inputTitle.reportValidity();
});

inputPrice.addEventListener('input', () => {
  if (inputPrice.value === '') {
    inputPrice.value === 0;
  } if (inputPrice.value.length > 7) {
    inputPrice.value === '1000000';
  }
});

inputRoomNumber.addEventListener('input', () => {
  for (const guest of guests) {
    if (inputRoomNumber.value + 1 <= guest.dataset.sence) {
      guest.setAttribute('disabled', true);
    } else {
      guest.removeAttribute('disabled', true);
    }
  }
});

inputGuests.addEventListener('input', () => {
  for (const room of rooms) {
    if (inputGuests.value > room.dataset.sence) {
      room.setAttribute('disabled', true);
    } else {
      room.removeAttribute('disabled', true);
    }
  }
});
