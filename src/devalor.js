import axios from 'axios';

const getURL = ()=>"https://api.exchangerate.host/latest"

const getAllRates= async (url =getURL())=>{
  const {data} = await axios.get("https://api.exchangerate.host/latest")
  return data.rates
}

const getRatesAfterFilter= async ()=>{
  const rates = await getAllRates();
return Object.values(rates).filter((value)=> value <=10)
}

console.log(await getRatesAfterFilter())