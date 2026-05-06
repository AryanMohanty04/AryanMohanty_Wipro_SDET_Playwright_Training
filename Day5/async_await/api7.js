async function randomAdvice(){
    try{
        const response = await fetch("https://api.adviceslip.com/advice");

        if(!response.ok){
            throw new Error("Failed to fetch data!");
        }
        const data =  await response.json();
        console.log(data.slip.advice);
    }
    catch(error){
        console.log(error);
    }   
}
randomAdvice();