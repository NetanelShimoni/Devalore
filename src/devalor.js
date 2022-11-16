require('dotenv').config()
const axios = require('axios');
const mockData = require('./data/mockData.json');
const isPROD = process.env.env === "prod"

const getURL = () => isPROD ? "https://api.exchangerate.host/latest" : undefined

const getAllRates = async (url = getURL()) => {
  if(url){
  const { data } = await axios.get(url)
  return data.rates
  }else{
    return mockData.data;
  }
}

const getRatesAfterFilter = async () => {
  const rates = await getAllRates();
  return Object.values(rates).filter((value) => value <= 10)
}

// getAllRates().then(console.log)

module.exports = {
  getAllRates,
  getURL,
  getRatesAfterFilter
};

