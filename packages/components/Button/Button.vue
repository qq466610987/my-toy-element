<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { computed, ref } from 'vue';
import { throttle } from 'lodash-es'
import ErIcon from '../Icon/Icon.vue'


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

const iconStyle = computed(() => {
  {
    marginRight: slots.default ? '6px' : '0px'
  }
})
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
    }" :autofocus="autofocus" :disabled="props.disabled || loading ? true : void 0"
    @click="(e: MouseEvent) => props.useThrottle ? throttleClick(e) : handleClick(e)">
    <template v-if="loading">
      <slot name="loading">
        <er-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" spin :style="iconStyle" size="1x" />
      </slot>
    </template>
    <er-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle" />
    <slot></slot>
  </component>
</template>
<style scoped>
@import "./style.css";
</style>