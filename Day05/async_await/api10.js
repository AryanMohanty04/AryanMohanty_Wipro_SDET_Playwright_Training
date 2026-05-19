async function getCountryInfo() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/name/india");

    if (!response.ok) {
      throw new Error("Failed to fetch country");
    }

    const data = await response.json();

    console.log(data[0].name.common);
    console.log("Capital:", data[0].capital[0]);
    console.log("Population:", data[0].population);

  } catch (err) {
    console.log("Error:", err.message);
  }
}

getCountryInfo();