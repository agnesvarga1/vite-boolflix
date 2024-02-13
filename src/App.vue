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
    getMovies() {
      const fullUrl = store.movieUrl + store.queryMovie;
      let temp = store.queryMovie.split(" ");
      temp = temp.join("+");
      store.queryMovie = temp;

      axios.get(fullUrl).then((res) => {
        store.movieResArr = res.data.results;
        console.log(store.movieResArr);
      });
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<template>
  <AppHeader @searchInMovies="getMovies" />
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
