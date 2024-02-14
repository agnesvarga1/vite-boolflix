<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    setUpquery() {
      let temp = store.queryMovie.split(" ");
      temp = temp.join("+");
      store.queryMovie = temp;
      return store.queryMovie;
    },
    setLang(arr) {
      arr.forEach((item) => {
        item.original_language === "en" ? (item.original_language = "US") : 0;
        item.original_language === "ja" ? (item.original_language = "JP") : 0;
      });
    },
    trendingAll() {
      axios.get(store.urlAll).then((res) => {
        // console.log(res.data.results);
        store.allTrending = res.data.results;
        this.setLang(store.allTrending);
      });
    },
    getMovies() {
      store.loading = true;
      const fullUrl = store.movieUrl + this.setUpquery();
      console.log(fullUrl);
      axios.get(fullUrl).then((res) => {
        store.movieResArr = res.data.results;
        this.setLang(store.movieResArr);
        store.loading = false;
      });
      store.loading = false ? (store.movieResArr = []) : 0;
    },
    getSeries() {
      store.seriesArr = [];
      store.loading = true;
      const fullUrl = store.seriesUrl + this.setUpquery();
      console.log(fullUrl);
      axios.get(fullUrl).then((res) => {
        store.seriesArr = res.data.results;
        this.setLang(store.seriesArr);
        store.loading = false;
      });
    },
    searchAll() {
      this.getMovies();
      this.getSeries();
    },
  },
  mounted() {
    this.trendingAll();
  },
};
</script>

<template>
  <AppHeader @search="searchAll" />
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
