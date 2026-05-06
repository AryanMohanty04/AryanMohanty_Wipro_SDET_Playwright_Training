async function getRandomJoke() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );

    if (!response.ok) {
      throw new Error("Error while fetching data....");
    }

    const data = await response.json();
    console.log(data.setup);
    console.log(data.punchline)
  } catch (error) {
    console.log(error);
  }
}

getRandomJoke();
