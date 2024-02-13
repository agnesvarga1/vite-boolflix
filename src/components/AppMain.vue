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
    <div class="cards">
      <CardComp v-for="(movie, index) in store.movieResArr" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
  .cards {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
}
</style>
