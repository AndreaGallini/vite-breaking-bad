<template>
  <HeaderComponent />
  <div class="innerUno">
    <SearchComponent @filterchar="callApi" />
  </div>
  <div class="inner-container">
    <FoundComponent />
    <div v-if="store.loading">
      <div id="loading_screen">
        <h1>Loading...</h1>
        <p>
          La pagina è in caricamento<br />
          Resta connesso e non cambiare sito!
        </p>
      </div>
    </div>
    <div class="flex" v-if="!store.loading">
      <CardComponent v-for="(item, index) in store.caracter" :obj="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from "./components/CardComponent.vue";
import FoundComponent from "./components/FoundComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import { store } from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    callApi() {
      let options = null;
      if (store.searchstatus) {
        options = {
          params: {
            category: store.searchstatus,
          },
        };
      }
      store.loading = true;
      axios.get(store.apiURL, options).then((res) => {
        store.caracter.push(...res.data);
        console.log(store.caracter);
        store.loading = false;
      });
    },
  },
  mounted() {
    this.callApi();
  },
  components: {
    HeaderComponent,
    CardComponent,
    SearchComponent,
    FoundComponent,
  },
};
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;

.innerUno {
  width: 1170px;
  margin: 3rem auto;
}
.wrapper {
  max-width: 1300px;
  margin: 0 auto;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.inner-container {
  width: 1170px;
  background-color: white;
  min-height: 300px;
  margin: 0 auto;
}
.found {
  background-color: $InternoBackground;
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
#loading_screen {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  padding: 80px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}
</style>
