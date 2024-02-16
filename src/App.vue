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
        item.original_language === "en" && (item.original_language = "US");
        item.original_language === "ja" && (item.original_language = "JP");
        item.original_language === "ko" && (item.original_language = "KR");
        item.original_language === "he" && (item.original_language = "il");
        item.original_language === "zh" && (item.original_language = "cn");
        item.original_language === "hi" && (item.original_language = "in");
      });
    },

    trendingAll() {
      store.loading = true;
      axios.get(store.urlAll).then((res) => {
        store.allTrending = res.data.results;
        this.setLang(store.allTrending);
        store.loading = false;
      });
    },

    getMovies() {
      store.loading = true;
      //store.movieResArr = [];
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
