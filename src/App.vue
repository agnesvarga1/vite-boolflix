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
    emptyArr() {
      store.queryMovie = "";
      store.movieResArr = [];
      store.seriesArr = [];
    },
    setLang(arr) {
      arr.forEach((item) => {
        item.original_language === "en" ? (item.original_language = "US") : 0;
        item.original_language === "ja" ? (item.original_language = "JP") : 0;
        item.original_language === "ko" ? (item.original_language = "KR") : 0;
      });
    },

    trendingAll() {
      axios.get(store.urlAll).then((res) => {
        store.allTrending = res.data.results;
        this.setLang(store.allTrending);
      });
    },
    getMovies() {
      store.loading = true;
      store.movieResArr = [];
      const optionsPerAxios = {
        params: {
          query: store.queryMovie,
          api_key: store.myKey,
          adult: "false",
        },
      };
      axios.get(store.movieUrl, optionsPerAxios).then((res) => {
        store.movieResArr = res.data.results;
        this.setLang(store.movieResArr);
        store.loading = false;
      });
    },
    getSeries() {
      store.loading = true;
      store.seriesArr = [];
      const optionsPerAxios = {
        params: {
          query: store.queryMovie,
          api_key: store.myKey,
          adult: "false",
        },
      };
      axios.get(store.seriesUrl, optionsPerAxios).then((res) => {
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
  <AppHeader @search="searchAll" @clx="emptyArr" @sub="searchAll" />
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
