const rawFlights = [
    "London-Paris: 150",
    "New York-Tokyo: invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
];

const cleanedData = rawFlights.map((flight)=>{
    const [route,rawPrice] = flight.split(":");
    const [from, to] = route.split("-");
    let price = Number(rawPrice);

    if(isNaN(price)){
        price = 0;
    }

    return {
        from,
        to,
        price
    };
})
    .filter((flight)=> flight.price >= 100 && flight.price <= 500)
    .sort((a,b) => a.price - b.price);

const finalData = JSON.stringify(cleanedData,null,2);
console.log(finalData);