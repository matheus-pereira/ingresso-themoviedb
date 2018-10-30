const service = new Service();

function getImagePath(image) {
    return (image) ? `https://image.tmdb.org/t/p/w185/${image}` : 'assets/img/no-image.jpg';
}

function renderMovies(movies) {
    if (!movies.length) {
        return document.querySelector('#movies').innerHTML = '<p class="text-center text-muted mt-2">Nenhum título foi encontrado</p>';
    }
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

function getPopular() {
    service.getPopular().then(({ results }) => renderMovies(results));
}

function getMoviesByGenre(genre) {
    $('.navbar-toggler[aria-expanded="true"]').click();
    service.getMoviesByGenre(genre).then(({ results }) => renderMovies(results));
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let search = document.querySelector('input').value;
    if (search) {
        service.searchMovies(search).then(({ results }) => renderMovies(results));
        $('.navbar-toggler[aria-expanded="true"]').click();
    }
});

window.addEventListener('load', function (event) {
    getPopular();
});