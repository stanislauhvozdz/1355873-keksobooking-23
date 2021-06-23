const getRandomNumber = (minValue, maxValue) => {
  if (minValue >=0 && maxValue >=0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
};

const getGeographicalCoordinates = (latitude, longitude, toFloat) => {
  if (latitude >= 0 && longitude >= 0 && latitude < longitude) {
    return ((Math.random() * (longitude - latitude + 1)) + latitude).toFixed(toFloat);
  }
};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

function getRandomArray(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

export {getRandomNumber, getGeographicalCoordinates, getRandomArray, getRandomArrayElement};
