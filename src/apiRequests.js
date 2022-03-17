
const api_key= '6f26fd536dd6192ec8a57e94141f8b20'

const apiRequests = {
    fetchFeatMovie: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`,
    fetchPopMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
};

export default apiRequests;

