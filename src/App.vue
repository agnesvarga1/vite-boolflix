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
    testApiCall() {
      const testUrl = store.movieUrl + store.queryMovie;

      axios.get(testUrl).then((res) => {
        store.movieResArr = res.data.results;
      });
    },
  },
  mounted() {
    this.testApiCall();
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
