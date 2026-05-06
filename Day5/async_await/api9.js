async function getTemp(city){
    try{
        if(!city){
            console.log("Error, Enter valid city name....");
            return;
        }

        console.log("Fetching data.............")

        const geo = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        ).then(res => res.json());

        if(!geo.results){
            console.log("City not found");
            return;
        }

        const { latitude, longitude } = geo.results[0];
        const weather = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        ).then(res => res.json());

        console.log(`Current temp of ${city} is ${weather.current_weather.temperature}°C"`);
        console.log("Data fetched successfully!")

    } catch(err){
        console.log(err);
    }
   
}``

getTemp("Bhubaneswar");