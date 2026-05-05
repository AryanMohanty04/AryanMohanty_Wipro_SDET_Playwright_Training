fetch("https://restcountries.com/v3.1/name/india")
  .then(res => {
    if(!res.ok) throw new Error("Failed to fetch country");
    return res.json();
  })
  .then(data => {
    console.log(data[0].name.common);
    console.log("Capital:", data[0].capital[0]);
    console.log("Population:", data[0].population);
  })
  .catch(err => console.log("Error: ", err.message));