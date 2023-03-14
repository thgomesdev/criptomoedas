export default async function initFetchBitcoin() {
  function setBitcoinPrice(price) {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (100 / price).toFixed(7);
  }

  try {
    const bitcoinResponse = await fetch('https://blockchain.info/ticker');
    const bitcoinJSON = await bitcoinResponse.json();
    setBitcoinPrice(bitcoinJSON.BRL.buy);
  } catch (error) {
    console.log(error);
  }
}
