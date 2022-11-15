<template>
  <div>
    <select name="" id="" v-model="store.searchstatus" @change="searchStatus">
      <option selected value="">All</option>
      <option
        v-for="(status, index) in statusOptions"
        :key="index"
        :value="status"
      >
        {{ status }}
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
      statusOptions: ["Alive", "Presumed Dead", "Deceased"],
    };
  },
  methods: {
    searchStatus() {
      this.$emit("filterchar");
    },
  },
  props: {
    searchstatus: String,
  },
};
</script>

<style lang="scss" scoped></style>
