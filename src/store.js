import { reactive } from "vue";
export const store = reactive({
  queryMovie: "",
  movieResArr: [],
  loading: true,
  myKey: "api_key=8655b08b460ad55dbe7c72cdc2e63fca",
  movieUrl: `https://api.themoviedb.org/3/search/movie?api_key=8655b08b460ad55dbe7c72cdc2e63fca&query=`,
  urlImg: "https://image.tmdb.org/t/p/w500",
});
