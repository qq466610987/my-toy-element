<template>
  <div class="er-collapse-item" :class="{ 'is-disabled': disabled }">
    <div class="er-collapse-item__header" :id="`item-header-${name}`" :class="{
      'is-disabled': disabled,
      'is-active': isActive
    }" @click="handleClick">
      <span class="er-collapse-item__title">
        <slot name="title">
          {{ props.title }}
        </slot>
      </span>
      <er-icon icon="angle-right" class="header-angle" />
    </div>
    <div class="er-collapse-item__wrapper" v-show="isActive">
      <div class="er-collapse-item__content" :id="`item-content-${name}`">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from "./types";
import { COLLAPSE_CTX_KEY } from "./constants";
import { computed, inject } from "vue";
import ErIcon from '../Icon/Icon.vue'

defineOptions({ 
  name: "ErCollapseItem",
});
const ctx = inject(COLLAPSE_CTX_KEY);
const props = defineProps<CollapseItemProps>();
const isActive = computed(() => ctx?.activeNames.value.includes(props.name));

const handleClick = () => {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
};
</script>

<style scoped>
@import url('./style.css');
</style>
