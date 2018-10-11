<template>
  <div id="app" v-cloak>
    <modal v-if="isLoad" :modal-type="type"></modal>
    <div class="container" v-if="!isLoad">
      <slot name="container"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common',
  props: {
    type: {
      type: Number,
      default: 2
    },
    isLoad: {
      type: Boolean,
      default: false
    }
  }
}
</script>
