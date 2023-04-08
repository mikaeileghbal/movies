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
      url: `${BASE_URL}movie/popular?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/popular",
    },
    top_rated: {
      title: "top rated movies",
      url: `${BASE_URL}movie/top_rated?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/top_rated",
    },
    upcoming: {
      title: "upcoming movies",
      url: `${BASE_URL}movie/upcoming?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/upcoming",
    },
    now_playing: {
      title: "now playing movies",
      url: `${BASE_URL}movie/now_playing?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/movie/category/now_playing",
    },
    cast: {
      title: "cast",
      url: `${BASE_URL}movie/{_id}/credits?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: null,
    },
    like: {
      title: "more like this",
      url: `${BASE_URL}movie/{_id}/similar?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: null,
    },
    video: {
      url: `${BASE_URL}movie/{_id}/videos?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
    },
    images: {
      url: `${BASE_URL}movie/{_id}/images?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
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
      url: `${BASE_URL}tv/popular?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/popular",
    },
    top_rated: {
      title: "top rated tv shows",
      url: `${BASE_URL}tv/top_rated?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/top_rated",
    },
    on_the_air: {
      title: "currently airing tv shows",
      url: `${BASE_URL}tv/on_the_air?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/on_the_air",
    },
    airing_today: {
      title: "tv shows airing today",
      url: `${BASE_URL}tv/airing_today?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: "/tv/category/airing_today",
    },
    cast: {
      title: "cast",
      url: `${BASE_URL}tv/{_id}/credits?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: null,
    },
    like: {
      title: "more like this",
      url: `${BASE_URL}tv/{_id}/similar?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
      exploreUrl: null,
    },
    video: {
      url: `${BASE_URL}tv/{_id}/videos?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
    },
    images: {
      url: `${BASE_URL}tv/{_id}/images?api_key=3e35d5ea16674bcc971aee7ed10f0919`,
    },
  },
};

export default apiEndpoint;
