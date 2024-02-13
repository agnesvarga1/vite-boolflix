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
        <img
          src="https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg"
          alt=""
        />
      </figure>
    </div>
    <div class="card-bottom">
      <span>Title:{{ propsMovies.title }}</span>
      <span>Title:{{ propsMovies.original_title }}</span>
      <span>Language:{{ propsMovies.original_language }}</span>
      <span>Vote:{{ propsMovies.vote_average }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 20%;
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
  }
}
</style>
