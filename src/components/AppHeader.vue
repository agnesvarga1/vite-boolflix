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
          v-model="store.queryMovie"
          type="text"
          placeholder="search for..."
          required
        />
        <button @click="$emit('search')">Search</button>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  min-height: 80px;
  background-color: #ffffff84;
  display: flex;
  align-items: center;

  nav {
    width: 80%;
    margin: 0 auto;
    padding-block: 1rem;
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
      }
      ul {
        display: flex;
        gap: 15px;
        li {
          a {
            font-size: 1.5em;
            color: #000;
            padding: 0.5rem;
            &:hover {
              color: red;
              border: 2px solid red;
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
