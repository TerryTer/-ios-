<template>
  <div class="relative" v-if="show">
    <div class="bg"></div>
    <div class="toast-wrap text-center">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      show: false,
      message: ""
    }
  }
}
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
@import '../../css/public.scss';

.toast-wrap{
  @include center2(fixed,90%,auto,3);
  background: #fff;
  max-height: 80%;
  padding: 1.25rem 0;
  font-size: 1rem;
  border-radius: .5rem;
} 
</style>
