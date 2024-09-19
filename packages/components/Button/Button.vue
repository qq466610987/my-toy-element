<script setup lang="ts">
import type { ButtonProps } from './types';
import { ref } from 'vue';

defineOptions({
  name: 'ErButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
})

const slots = defineSlots()
const _ref = ref<HTMLElement>()

</script>

<template>
  <component :is="props.tag" :type="props.tag === 'button' ? props.nativeType : void 0" class="er-button" :class="{
    [`er-button--${type}`]: type,
    [`er-button--${size}`]: size,
    'is-plain': plain,
    'is-circle': circle,
    'is-round': round,
    'is-loading': loading,
    'is-disabled': disabled
  }" :disabled="props.disabled || loading ? true : void 0" ref="_ref">
    <slot></slot>
  </component>
</template>