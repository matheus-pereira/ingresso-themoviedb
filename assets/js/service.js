const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f72a3415735c8b772cfe41d9adb743db';

class Service {
    getPopular() {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
                .then(data => resolve(data.json()))
                .catch(error => console.log(error) && reject(error));
        });
    }

    searchMovie(query) {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`)
                .then(data => resolve(data.json()))
                .catch(error => console.log(error) && reject(error));
        });
    }
}