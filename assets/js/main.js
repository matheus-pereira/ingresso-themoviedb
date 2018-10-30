const service = new Service();

function getImagePath(image) {
    return (image) ? `https://image.tmdb.org/t/p/w185/${image}` : 'assets/img/no-image.jpg';
}

function renderMovies(movies) {
    document.querySelector('#movies').innerHTML = movies.map(movie => `
        <div class="row mt-2">
            <div class="col-sm-12">
                <img class="rounded float-left mr-2" src="${getImagePath(movie.poster_path)}">
                <h5>${movie.title}</h5>
                <p>${movie.overview}</p>
            </div>
        </div>
    `).join('<hr>');
    window.scrollTo(0, 0);
}

function searchMovie(event) {
    service.searchMovie(event.target.value).then(({ results }) => renderMovies(results));
}

window.addEventListener("load", function (event) {
    service.getPopular().then(({ results }) => renderMovies(results));
});