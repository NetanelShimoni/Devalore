const axios = require('axios');
const getURL = () => "https://api.exchangerate.host/latest"

const getAllRates = async (url = getURL()) => {
  const { data } = await axios.get(url)
  return data.rates
}

const getRatesAfterFilter = async () => {
  const rates = await getAllRates();
  return Object.values(rates).filter((value) => value <= 10)
}

//  getRatesAfterFilter().then(console.log)

 module.exports = {
  getAllRates,
  getURL,
  getRatesAfterFilter
};

