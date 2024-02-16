<script>
import { store } from "../store";
import CardComp from "./CardComp.vue";
import axios from "axios";
export default {
  name: "AppMain",
  components: {
    CardComp,
  },
  data() {
    return {
      store,
      idCard: "",
      typeCard: "",
    };
  },
  methods: {
    closeModal() {
      store.vidPath = "";
      store.video = [];
    },
    getVideoData() {
      console.log(this.idCard);

      if (store.movieResArr.length !== 0) {
        this.typeCard = "movie";
      } else if (store.seriesArr.length !== 0) {
        this.typeCard = "tv";
      }
      console.log(this.typeCard);
      console.log(
        `https://api.themoviedb.org/3/${this.typeCard}/${this.idCard}/videos?api_key=8655b08b460ad55dbe7c72cdc2e63fca`
      );
      axios
        .get(
          `https://api.themoviedb.org/3/${this.typeCard}/${this.idCard}/videos?api_key=8655b08b460ad55dbe7c72cdc2e63fca`
        )
        .then((res) => {
          store.video = res.data.results;
          console.log(store.video);
        });
      store.video.forEach((vid) => {
        if (vid.type === "Trailer" || vid.type === "Clip") {
          store.vidPath = vid.key;
        }
      });
      console.log(store.vidPath);
    },
    getID(id, type) {
      store.vidPath = "";
      //store.video = [];
      this.idCard = id;
      if (!type) {
        this.typeCard = "";
      } else {
        this.typeCard = type;
      }
      console.log(type);
      this.getVideoData();
    },
  },
};
</script>
<template>
  <div class="container">
    <h2 v-if="store.queryMovie !== ''">Films</h2>
    <h2 v-else>Trending Now</h2>
    <div class="cards">
      <div v-show="store.vidPath !== ''" class="video-window">
        <div @click="closeModal" class="close">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <iframe
          :src="`https://www.youtube.com/embed/${store.vidPath}?autoplay=1&mute=1`"
          frameborder="0"
        ></iframe>
      </div>
      <CardComp
        v-for="(movie, index) in store.queryMovie == ``
          ? store.allTrending
          : store.movieResArr"
        :key="index"
        :propsMovies="movie"
        @play="getID(movie.id, movie.media_type)"
      />
    </div>
    <h2 v-if="store.queryMovie !== ''">TV Series</h2>
    <div class="cards">
      <CardComp
        v-if="store.queryMovie !== ''"
        v-for="(serie, index) in store.seriesArr"
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
    gap: 1.1rem;
    flex-wrap: wrap;
    position: relative;
    padding-bottom: 1.5rem;

    .video-window {
      background-color: #121212b3;
      position: absolute;
      padding-block: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      margin: 0 auto;

      width: 100%;
      height: 80vh;
      .close {
        align-self: flex-start;
        cursor: pointer;

        i {
          font-size: 3rem;
          color: red;
          &:hover {
            color: #fff;
          }
        }
      }
      iframe {
        width: 80%;
        height: 80%;
      }
    }
  }
}
</style>
