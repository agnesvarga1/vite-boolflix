<script>
import { store } from "../store";
import CardComp from "./CardComp.vue";
export default {
  name: "AppMain",
  components: {
    CardComp,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container">
    <h2>Films</h2>
    <div class="cards">
      <CardComp
        v-for="(movie, index) in store.queryMovie == ``
          ? store.allTrending
          : store.movieResArr"
        :key="index"
        :propsMovies="movie"
      />
    </div>
    <h2>TV Series</h2>
    <div class="cards">
      <CardComp
        v-for="(serie, index) in store.queryMovie == ``
          ? store.allTrending
          : store.seriesArr"
        :key="index"
        :propsMovies="serie"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  h2 {
    margin-block: 1rem;
  }
  .cards {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
}
</style>
