  async function getCatFact(){
    try{
      const response = await fetch("https://catfact.ninja/fact");
      if(!response.ok){
        throw new Error("Failed to fetch fact...");
      }
      const data = await response.json();

      console.log("Stating cat facts....")
      console.log(data.fact);
    }
    catch(error){
      console.log(error);
    }
  }

  getCatFact();