<template>
  <div>
    <select name="" id="" v-model="store.searchstatus" @change="searchStatus">
      <option selected value="">Select Category</option>
      <option
        v-for="(category, index) in categoryOptions"
        :key="index"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      categoryOptions: ["Breaking Bad", "Better Call Saul"],
    };
  },
  methods: {
    searchStatus() {
      this.$emit("filterchar");
      store.caracter = [];
    },
  },
  props: {
    searchstatus: String,
  },
};
</script>

<style lang="scss" scoped></style>
