fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch dog image");
    }
    return response.json();
  })
  .then(data => {
    console.log("URL for the image of the dog:- ")
    console.log(data.message);
  })
  .catch(error => console.log("Error: ", error.message));