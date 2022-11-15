<template>
  <div class="found">
    <p class="textfound">Found {{ store.caracter.length }} Characters</p>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.textfound {
  color: white;
  font-weight: 700;
}
</style>
