<template>
  <div class="er-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { COLLAPSE_CTX_KEY } from "./constants";
import type { CollapseProps, CollapseEmits, CollapseContext, CollapseItemName } from "./types";
import { provide, ref } from "vue";

defineOptions({
  name: "ErCollapse",
});
const props = defineProps<CollapseProps>();
const emit = defineEmits<CollapseEmits>();
const activeNames = ref(props.modelValue);

if (props.accordion && activeNames.value.length > 1) {
  console.warn("accordion mode must set only one active item");
}

function handleItemClick(name: CollapseItemName) {
  //todo  
}

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
</script>
