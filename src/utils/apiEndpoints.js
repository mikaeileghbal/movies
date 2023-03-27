const BASE_URL = "https://api.themoviedb.org/3/";

const apiEndpoint = {
  movie: {
    trending: {
      title: "trending movies",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/trending",
    },
    popular: {
      title: "popular movies",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/popular",
    },
    top_rated: {
      title: "top rated movies",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/top_rated",
    },
    upcoming: {
      title: "upcoming movies",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/upcoming",
    },
    now_playing: {
      title: "now playing movies",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/now_playing",
    },
  },
  tv: {
    trending: {
      title: "trending tv shows",
      url: `${BASE_URL}trending/tv/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/trending",
    },
    popular: {
      title: "popular tv shows",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/popular",
    },
    top_rated: {
      title: "top rated tv shows",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/top_rated",
    },
    on_the_air: {
      title: "currently airing tv shows",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/on_the_air",
    },
    airing_today: {
      title: "tv shows airing today",
      url: `${BASE_URL}trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/airing_today",
    },
  },
};

export default apiEndpoint;
