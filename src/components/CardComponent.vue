<template>
  <div class="card">
    <img :src="obj.img" alt="" />
    <p class="title">{{ obj.name }}</p>
    <p class="subtitleUno">{{ obj.category }}</p>
    <p class="subtitleDue">{{ obj.status }}</p>
  </div>
</template>

<script>
import { store } from "../assets/store";
export default {
  props: ["obj"],
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.title {
  color: white;
  text-transform: uppercase;
  font-weight: 700;
}
.subtitleUno,
.subtitleDue {
  color: $text;
  text-transform: capitalize;
}

.card {
  width: 250px;
  height: 500px;
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}
img {
  width: 200px;
}
</style>
