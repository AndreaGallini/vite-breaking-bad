<template>
  <HeaderComponent />
  <div class="innerUno">
    <SearchComponent />
  </div>
  <div class="inner-container">
    <div class="found">
      <p class="textfound">Found {{ caracter.length }} Characters</p>
    </div>
    <div v-if="loading">
      <div id="loading_screen">
        <h1>Loading...</h1>
        <p>
          La pagina è in caricamento<br />
          Resta connesso e non cambiare sito!
        </p>
      </div>
    </div>
    <div class="flex" v-if="!loading">
      <CardComponent v-for="(item, index) in caracter" :obj="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from "./components/CardComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";

export default {
  data() {
    return {
      caracter: [],
      loading: false,
    };
  },
  methods: {
    callApi() {
      this.loading = true;
      axios.get("https://www.breakingbadapi.com/api/characters").then((res) => {
        console.log(res.data);
        this.caracter.push(...res.data);
        console.log(this.caracter);
        this.loading = false;
      });
    },
  },
  mounted() {
    this.callApi();
  },
  components: { HeaderComponent, CardComponent, SearchComponent },
};
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
.textfound {
  color: white;
  font-weight: 700;
}
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
