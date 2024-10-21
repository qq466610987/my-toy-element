<script setup lang="ts">
import { COLLAPSE_CTX_KEY } from "./constants";
import type { CollapseProps, CollapseEmits, CollapseContext, CollapseItemName } from "./types";
import { provide, ref, watch } from "vue";

defineOptions({
  name: "ErCollapse",
});
const props = defineProps<CollapseProps>();
const emit = defineEmits<CollapseEmits>();
const activeNames = ref(props.modelValue);

if (props.accordion && activeNames.value.length > 1) {
  console.warn("accordion mode must set only one active item");
}

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value]
  // 手风琴模式
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item]
    updateActiveNames(_activeNames)
    return;
  }
  // 正常模式
  const index = _activeNames.indexOf(item)
  if (index > -1) {
    _activeNames.slice(index, 1)
  } else {
    _activeNames.push(item)
  }
  updateActiveNames(_activeNames)
}

function updateActiveNames(newNames: CollapseItemName[]) {
  activeNames.value = newNames;
  emit("update:modelValue", newNames)
  emit("change", newNames)
}

watch(
  () => props.modelValue,
  (newNames) => updateActiveNames(newNames)
);

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
</script>

<template>
  <div class="er-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import url('./style.css');
</style>
