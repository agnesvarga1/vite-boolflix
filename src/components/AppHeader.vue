<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <header>
    <nav>
      <div>
        <h1>BOOLFLIX</h1>
        <ul>
          <li><a href="#">Movie</a></li>
          <li><a href="#">TV Serie</a></li>
        </ul>
      </div>
      <div class="search-field">
        <input
          @keyup.delete="$emit('clx')"
          @keyup.enter="$emit('sub')"
          v-model="store.queryMovie"
          type="text"
          placeholder="search for..."
        />
        <button @click="$emit('search')">Search</button>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  min-height: 80px;
  background-color: #ffffff72;
  display: flex;
  align-items: center;

  nav {
    width: 80%;
    margin: 0 auto;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      gap: 30px;
      h1 {
        color: red;
        font-size: 2.2rem;
      }
      ul {
        display: flex;
        height: 80px;
        gap: 15px;
        li {
          height: inherit;

          a {
            display: flex;
            align-items: center;
            font-size: 1.5em;
            padding-inline: 0.2rem;
            color: #fff;
            height: inherit;

            &:hover {
              border-bottom: 5px solid red;
            }
          }
        }
      }
    }

    div.search-field {
      gap: 10px;
      justify-content: flex-end;
      width: 30%;
      input {
        padding: 0.5rem;
        min-width: 85px;
      }
      button {
        padding: 8px;

        background-color: #2a2929;
        color: #fff;
        cursor: pointer;
        border: none;
        &:hover {
          background-color: #636262;
        }
      }
    }
  }
}
</style>
