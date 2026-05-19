fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.name);
    console.log(data.weight);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });