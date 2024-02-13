<script>
import { store } from "../store";
export default {
  name: "CardComp",
  data() {
    return {
      store,
    };
  },
  props: ["propsMovies"],
};
</script>
<template>
  <div class="card">
    <div class="card-top">
      <figure>
        <img :src="store.urlImg + propsMovies.poster_path" alt="" />
      </figure>
    </div>
    <div class="card-bottom">
      <span>{{ propsMovies.title }}</span>
      <span>Original Title: {{ propsMovies.original_title }}</span>
      <span>Language:{{ propsMovies.original_language }}</span>
      <span>Vote:{{ propsMovies.vote_average }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 15%;
  display: flex;
  flex-direction: column;
  .card-top {
    figure {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .card-bottom {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
    padding-block: 0.4rem;
  }
}
</style>
