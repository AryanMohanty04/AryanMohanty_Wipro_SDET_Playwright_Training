async function getDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error("Error while fetching data..");
    }

    const data = await response.json();
    console.log(`Giving url for a random Dog breed ${data.message}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getDogImage();