fetch("https://official-joke-api.appspot.com/random_joke")
  .then(res => {
    if (!res.ok) throw new Error("Failed to fetch joke");
    return res.json();
  })
  .then(data => {
    console.log("Setup:", data.setup);
    console.log("Punchline:", data.punchline);
  })
  .catch(err => console.log("Error:", err.message));