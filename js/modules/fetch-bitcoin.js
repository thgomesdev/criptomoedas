export default async function fetchBitcoin(url, target) {
  function setBitcoinPrice(price) {
    const btcPreco = document.querySelector(target);
    btcPreco.innerText = (100 / price).toFixed(7);
  }

  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJSON = await bitcoinResponse.json();
    setBitcoinPrice(bitcoinJSON.BRL.buy);
  } catch (error) {
    console.log(error);
  }
}
