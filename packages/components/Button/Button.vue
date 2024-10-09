<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { ref } from 'vue';
import { throttle } from 'lodash-es'

defineOptions({
  name: 'ErButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
})

const emits = defineEmits<ButtonEmits>()

const _ref = ref<HTMLElement>()
defineExpose<ButtonInstance>({
  ref: _ref
})

const slots = defineSlots()

// 点击事件
const handleClick = (e: MouseEvent) => emits('click', e)
const throttleClick = throttle(handleClick, props.throttleDuration)
</script>

<template>
  <component ref="_ref" :is="props.tag" :type="props.tag === 'button' ? props.nativeType : void 0" class="er-button"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-circle': circle,
      'is-round': round,
      'is-loading': loading,
      'is-disabled': disabled
    }" :disabled="props.disabled || loading ? true : void 0"
     @click="(e:MouseEvent)=>props.useThrottle ? throttleClick(e) : handleClick(e)"    >
    <slot></slot>
  </component>
</template>
<style scoped>
@import "./style.css";
</style>