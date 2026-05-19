fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch price");
    }
    return response.json();
  })
  .then(data => {
    console.log("BTC Price: $", data.bitcoin.usd);
  })
  .catch(error => console.log("Error: ", error.message));