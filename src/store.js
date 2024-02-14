import { reactive } from "vue";
export const store = reactive({
  urlFlag1: "https://flagsapi.com/",
  urlFlag2: "/shiny/16.png",
  movieResArr: [],
  queryMovie: "",
  seriesArr: [],
  allTrending: [],
  loading: true,
  myKey: "8655b08b460ad55dbe7c72cdc2e63fca",
  movieUrl: `https://api.themoviedb.org/3/search/movie`,
  seriesUrl: "https://api.themoviedb.org/3/search/tv",
  urlImg: "https://image.tmdb.org/t/p/w500",
  urlAll:
    "https://api.themoviedb.org/3/trending/all/week?api_key=8655b08b460ad55dbe7c72cdc2e63fca",
});
// `https://api.themoviedb.org/3/search/movie?api_key=8655b08b460ad55dbe7c72cdc2e63fca&query=`,
