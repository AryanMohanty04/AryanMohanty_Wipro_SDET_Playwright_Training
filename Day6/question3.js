const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500",
];

const finalMovies = rawMovies.map((movie) => {
  const [name, genre, rawViews] = movie.split("|");
  let views = Number(rawViews);
  if (isNaN(views)) {
    views = 0;
  }

  return {
    name,
    genre,
    views,
  };
}) 
    .filter(movie => 
    (movie.genre === "Action" || movie.genre === "Sci-Fi") && movie.views > 5000
    )
    .sort((a,b) => b.views - a.views);

const result = JSON.stringify(finalMovies);
console.log(result);
