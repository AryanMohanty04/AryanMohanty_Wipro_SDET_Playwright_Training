async function getFakePost(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            throw new Error("Failed to fetch data....");
        }

        const data = await response.json();
        console.log(`Generates random block of text:\n ${data.body}`);
    }
    catch(error){
        console.log(error);
    }
}

getFakePost();