<script>
import { store } from "../store";
export default {
  name: "CardComp",
  data() {
    return {
      store,
      // ratingStars: {
      //   rate1: "⭐",
      //   rate2: "⭐⭐",
      //   rate3: "⭐⭐⭐",
      //   rate4: "⭐⭐⭐⭐",
      //   rate5: "⭐⭐⭐⭐⭐",
      // },
    };
  },
  props: ["propsMovies"],
  methods: {
    addStars(num) {
      num = Math.round(num);
      if (num <= 2 && num !== 0) {
        return 1;
      } else if (num > 2 && num < 5) {
        return 2;
      } else if (num === 5 || num === 6) {
        return 3;
      } else if (num === 7 || num === 8) {
        return 4;
      } else if (num === 10 || num === 9) {
        return 5;
      } else {
        return "No votes";
      }
      // return num;
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
        <!-- card back-face -->
        <div class="card-info">
          <h3>{{ propsMovies.title || propsMovies.name }}</h3>
          <span
            >Original Title:
            {{ propsMovies.original_title || propsMovies.original_name }}</span
          >
          <div class="ratings">
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
            <span v-if="addStars(propsMovies.vote_average) === 1"
              >Rating:<i class="fa-solid fa-star"></i
              ><i
                v-for="(item, index) in 4"
                :key="index"
                class="fa-regular fa-star"
              ></i>
            </span>
            <span v-else-if="addStars(propsMovies.vote_average) === 2"
              >Rating:<i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i
              ><i
                v-for="(item, index) in 3"
                :key="index"
                class="fa-regular fa-star"
              ></i>
            </span>
            <span v-else-if="addStars(propsMovies.vote_average) === 3"
              >Rating:<i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <i
                v-for="(item, index) in 2"
                :key="index"
                class="fa-regular fa-star"
              ></i>
            </span>
            <span v-else-if="addStars(propsMovies.vote_average) === 4"
              >Rating:<i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="addStars(propsMovies.vote_average) === 5"
              >Rating:<i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </span>
            <span v-else
              >Rating:
              <i
                v-for="(item, index) in 5"
                :key="index"
                class="fa-regular fa-star"
              ></i
            ></span>
          </div>
          <button @click="$emit('play')" class="btn-trailer">
            Play trailer
          </button>
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
    padding-top: 0.2rem;
    font-size: 12px;
    h3 {
      font-weight: 100;
    }
  }
  &:hover .card-bottom {
    display: none;
  }

  button {
    margin-top: 1rem;
    padding-block: 0.3rem;
    background-color: rgb(144, 1, 1);
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 3px;
    &:hover {
      background-color: #6e6e6e;
    }
  }
  .card {
    width: 100%;
    aspect-ratio: 1/1.5;
    perspective: 1000px;
    &:hover .card-top {
      transform: rotateY(180deg);
    }

    .card-top {
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
@media only screen and (max-width: 950px) {
  .card-info,
  .ratings,
  button {
    font-size: 14px;
    padding: 0;
    bottom: 0;
  }
}
@media only screen and (max-width: 600px) {
  .card-wrapper {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
