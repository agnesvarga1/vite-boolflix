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
  <div class="card-wrapper">
    <div class="card">
      <div class="card-top">
        <figure>
          <img :src="store.urlImg + propsMovies.poster_path" alt="" />
        </figure>
        <div class="card-info">
          <h3>{{ propsMovies.title || propsMovies.name }}</h3>
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
          <span>Rating: {{ addStars(propsMovies.vote_average) }}</span>
        </div>
      </div>
    </div>
    <div class="card-bottom">
      <h3>{{ propsMovies.title || propsMovies.name }}</h3>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-wrapper {
  width: calc(100% / 5 - 1.1rem);
  .card-bottom {
    text-align: center;
    height: 30px;
    h3 {
      font-weight: 100;
    }
  }
  &:hover .card-bottom {
    display: none;
  }
  .card {
    width: 100%;
    aspect-ratio: 1/1.5;
    perspective: 1000px;
    &:hover .card-top {
      transform: rotateY(180deg);
    }

    .card-top {
      background-color: pink;
      position: relative;
      width: 100%;

      transition: transform 0.6s;
      transform-style: preserve-3d;
      figure {
        img {
          width: 100%;
        }
      }
      figure,
      .card-info {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .card-info {
        padding-top: 4rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        font-size: 1rem;
        transform: rotateY(180deg);

        #lang {
          display: flex;
          justify-content: center;
          gap: 0.2rem;
        }
      }
    }
  }
}
</style>
