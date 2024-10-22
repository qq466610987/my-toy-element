<script setup lang="ts">
import { ref } from "vue";

const activeNames = ref(["a"]);
</script>

<template>
  <article>
    <er-button type="primary">toy-element</er-button>
    <er-collapse v-model="activeNames">
      <er-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </er-collapse-item>
      <er-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </er-collapse-item>
      <er-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </er-collapse-item>
    </er-collapse>
  </article>
</template>

<style scoped></style>
