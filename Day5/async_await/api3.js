async function getCryptoValue() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    );
    if (!response.ok) {
      throw new Error("Error while fetching data...");
    }
    const data = await response.json();
    console.log(`BTC Price in $:${data.bitcoin.usd}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getCryptoValue();
