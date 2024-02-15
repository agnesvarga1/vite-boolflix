<script>
import { store } from "../store";
export default {
  name: "CardComp",
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
  props: ["propsMovies"],
  methods: {
    addStars(num) {
      num = Math.floor(num);
      if (num <= 2 && num !== 0) {
        num = this.ratingStars.rate1;
      } else if (num > 2 && num < 5) {
        num = this.ratingStars.rate2;
      } else if (num === 5 || num === 6) {
        num = this.ratingStars.rate3;
      } else if (num === 7 || num === 8) {
        num = this.ratingStars.rate4;
      } else if (num === 10 || num === 9) {
        num = this.ratingStars.rate5;
      } else {
        num = "No votes";
      }
      return num;
    },
  },
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
      <span>{{ propsMovies.title || propsMovies.name }}</span>
      <span
        >Original Title:
        {{ propsMovies.original_title || propsMovies.original_name }}</span
      >
      <span id="lang"
        >Language:
        <img
          :src="
            store.urlFlag1 +
            propsMovies.original_language.toUpperCase() +
            store.urlFlag2
          "
        />
      </span>
      <span>{{ addStars(propsMovies.vote_average) }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: calc(100% / 5 - 10px);
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
    #lang {
      display: flex;
      gap: 0.2rem;
    }
  }
}
</style>
