<script>
import { store } from "../store";
export default {
  name: "CardComp",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="card">
    <div class="card-top">
      <p>card head</p>
    </div>
    <div class="card-bottom">card-deatails</div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  flex-basis: calc(100% / 5 - 10px);
  display: flex;
  flex-direction: column;
}
</style>
