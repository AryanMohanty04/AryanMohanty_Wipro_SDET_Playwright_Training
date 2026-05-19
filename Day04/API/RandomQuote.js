fetch("https://api.adviceslip.com/advice")
  .then(res => {
    if (!res.ok) throw new Error("Failed to fetch advice");
    return res.json();
  })
  .then(data => {
    console.log(`${data.slip.advice}`);
  })
  .catch(err => console.log("Error: ", err.message));