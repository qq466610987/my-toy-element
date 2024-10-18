<script setup lang="ts">
import type { ButtonGroupProps, ButtonGroupContext } from './types'
import { BUTTON_GROUP_CTX } from './constants'
import { provide, reactive, toRef } from 'vue';

defineOptions({ name: 'ErButtonGroup' })
const props = defineProps<ButtonGroupProps>()
provide(
  BUTTON_GROUP_CTX,
  reactive({
    size: toRef(props.size),
    type: toRef(props.type),
    disabled: toRef(props.disabled)
  })
)

</script>

<template>
  <div class="er-button-group">
    <slot></slot>
  </div>
</template>

<style scoped>
@import './style.css'
</style>