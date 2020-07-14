//Global variable
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "rating": 5
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "rating": 9
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "rating": 7
    }
];


var sumRatings = watchList.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.rating;
}, 0); // 0 represents starting value
console.log(sumRatings);


var movieTitles = watchList.reduce((accumulator, currentItem) => {
  accumulator.push(currentItem.Title);
  return accumulator;
}, []); // An empty array reprsents starting valueS
console.log(movieTitles);
