async function getGhibliInfo(){
    try{
        const response = await fetch("https://ghibliapi.vercel.app/films");
        if(!response.ok){
            throw new Error("Error while fetching Data!");
        }

        const data = await response.json();
        console.log(`Title of the movie: ${data[0].title}`);
        console.log(data[0].description);

    }
    catch(error){
        console.log(error);
    }
}

getGhibliInfo();