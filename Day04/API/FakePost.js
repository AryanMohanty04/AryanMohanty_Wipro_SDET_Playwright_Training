fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => {
    if (!res.ok) throw new Error("Failed to fetch post");
    return res.json();
  })
  .then(data => {
    console.log("Title:", data.title);
    console.log("Body:", data.body);
    console.log("User ID:", data.userId);
  })
  .catch(err => console.log("Error:", err.message));