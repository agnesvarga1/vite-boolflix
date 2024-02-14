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
      ratingStars: {
        rate1: "⭐",
        rate2: "⭐⭐",
        rate3: "⭐⭐⭐",
        rate4: "⭐⭐⭐⭐",
        rate5: "⭐⭐⭐⭐⭐",
      },
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
        item.vote_average = Math.floor(item.vote_average);
        if (item.vote_average <= 2 && item.vote_average !== 0) {
          item.vote_average = this.ratingStars.rate1;
        } else if (item.vote_average > 2 && item.vote_average < 5) {
          item.vote_average = this.ratingStars.rate2;
        } else if (item.vote_average === 5 || item.vote_average === 6) {
          item.vote_average = this.ratingStars.rate3;
        } else if (item.vote_average === 7 || item.vote_average === 8) {
          item.vote_average = this.ratingStars.rate4;
        } else if (item.vote_average === 10 || item.vote_average === 9) {
          item.vote_average = this.ratingStars.rate5;
        } else {
          item.vote_average = "No votes";
        }
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
