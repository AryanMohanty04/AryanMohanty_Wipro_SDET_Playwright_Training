async function getPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!response.ok) {
      throw new Error("Error! while fetching data....");
    }
    const data = await response.json();
    console.log(`Printing name of the Pokemon: ${data.name}`);
    console.log(`Weight of ${data.name} is ${data.weight}`);
  } catch (error) {
    console.log(error);
  }
}

getPokemonData();
