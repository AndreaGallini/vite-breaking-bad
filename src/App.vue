<template>
  <HeaderComponent />
  <div class="inner-container">
    <div class="found">
      <p>Found</p>
    </div>
    <div class="flex">
      <CardComponent v-for="(item, index) in caracter" :obj="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from "./components/CardComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  data() {
    return {
      caracter: [],
    };
  },
  methods: {
    callApi() {
      axios.get("https://www.breakingbadapi.com/api/characters").then((res) => {
        console.log(res.data);
        this.caracter.push(...res.data);
        console.log(this.caracter);
      });
    },
  },
  mounted() {
    this.callApi();
  },
  components: { HeaderComponent, CardComponent },
};
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
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
  min-height: 100px;
}
</style>
