fetch("https://catfact.ninja/fact")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch fact");
    }
    return response.json();
  })
  .then(data => {
    console.log("Printing random cat facts.....")
    console.log(data.fact);
  })
  .catch(error => console.log("Error: ", error.message));