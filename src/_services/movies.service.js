import config from 'config';

export const moviesService = {
    getGenres,
    getMovies
};


function getGenres() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/api/v1/movies/genres`, requestOptions).then(handleResponse);
}

function getMovies() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/api/v1/movies`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        console.log(data);
        return data;
    });
}