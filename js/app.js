// select the main tag, since we will inject our movies there
const $main = $("main")

// asynchronous request for the data in our json file
$.ajax("./json/data.json")
// when the data arrives, do stuff
.then((data) => {
    // loop over the array of movies
    data.forEach((movie, index) => {
        const $div = $("<div>")
        $div.html(`<h2 class="movie-title">${movie.title}</h2>
        <h3 class="movie-release">${movie.release_year}</h3>
        <img class="movie-image" src="${movie.image}" alt="poster image for ${movie.title}" />`)

        $main.append($div)
    });
})
.catch((error) => console.log(error))