<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <AppHeader />
  <main></main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
