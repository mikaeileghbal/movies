const BASE_URL = "https://api.themoviedb.org/3/";

const apiEndpoint = {
  "trending movies": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
  "trending tv": `${BASE_URL}trending/tv/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,

  "popular movies": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
  "top rated movies": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
  "upcoming movies": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
  "now playing movies": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,

  "popular tv shows": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
  "top rated tv shows": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
  "currently airing tv shows": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
  "tv shows airing today": `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
};

export default apiEndpoint;
