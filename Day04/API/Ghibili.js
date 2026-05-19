fetch("https://ghibliapi.vercel.app/films")
  .then(res => {
    if(!res.ok) throw new Error("Failed to fetch films");
    return res.json();
  })
  .then(data => {
    console.log(data[0].title);
    console.log(data[0].description);
  })
  .catch(err => console.log("Error: ", err.message));