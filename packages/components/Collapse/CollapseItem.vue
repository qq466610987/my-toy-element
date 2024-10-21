<template>
  <div class="er-collapse-item">
    <div class="er-collapse-item__header">
      <span class="er-collapse-item__title">{{ props.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from "./types";

defineOptions({
  name: "ErCollapseItem",
});

const props = defineProps<CollapseItemProps>();
</script>
