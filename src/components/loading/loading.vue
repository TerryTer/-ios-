<template>
  <div class="relative" v-if="show">
    <div class="bg"></div>
    <div class="loading-wrap flex justify-content-center align-items-center text-center">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
@import '../../css/public.scss';

.loading-wrap{
  @include center2(fixed,100%,100vh,3);
  .loader {
    font-size: 1rem;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    z-index: 3;
    text-indent: -9999em;
    @include animation(loading, 1.1s, ease, normal, infinite);
  }
}

@include keyframes(loading) {
  0%,
  100% {
    box-shadow: 
    0 -2.6em 0 0 #fff, 
    1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2), 
    2.5em 0 0 0 rgba(235, 235, 235, 0.2), 
    1.75em 1.75em 0 0 rgba(235, 235, 235, 0.2), 
    0 2.5em 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em 1.8em 0 0 rgba(235, 235, 235, 0.2), 
    -2.6em 0 0 0 rgba(235, 235, 235, 0.5), 
    -1.8em -1.8em 0 0 rgba(235, 235, 235, 0.7);
  }
  12.5% {
    box-shadow: 
    0 -2.6em 0 0 rgba(235, 235, 235, 0.7), 
    1.8em -1.8em 0 0 #fff, 
    2.5em 0 0 0 rgba(235, 235, 235, 0.2), 
    1.75em 1.75em 0 0 rgba(235, 235, 235, 0.2), 
    0 2.5em 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em 1.8em 0 0 rgba(235, 235, 235, 0.2), 
    -2.6em 0 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em -1.8em 0 0 rgba(235, 235, 235, 0.5);
  }
  25% {
    box-shadow: 
    0 -2.6em 0 0 rgba(235, 235, 235, 0.5), 
    1.8em -1.8em 0 0 rgba(235, 235, 235, 0.7), 
    2.5em 0 0 0 #fff, 
    1.75em 1.75em 0 0 rgba(235, 235, 235, 0.2), 
    0 2.5em 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em 1.8em 0 0 rgba(235, 235, 235, 0.2), 
    -2.6em 0 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2);
  }
  37.5% {
    box-shadow: 
    0 -2.6em 0 0 rgba(235, 235, 235, 0.2), 
    1.8em -1.8em 0 0 rgba(235, 235, 235, 0.5), 
    2.5em 0 0 0 rgba(235, 235, 235, 0.7), 
    1.75em 1.75em 0 0 rgba(235, 235, 235, 0.2), 
    0 2.5em 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em 1.8em 0 0 rgba(235, 235, 235, 0.2), 
    -2.6em 0 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2);
  }
  50% {
    box-shadow: 
    0 -2.6em 0 0 rgba(235, 235, 235, 0.2), 
    1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2), 
    2.5em 0 0 0 rgba(235, 235, 235, 0.5), 
    1.75em 1.75em 0 0 rgba(235, 235, 235, 0.7), 
    0 2.5em 0 0 #fff, 
    -1.8em 1.8em 0 0 rgba(235, 235, 235, 0.2), 
    -2.6em 0 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2);
  }
  62.5% {
    box-shadow: 
    0 -2.6em 0 0 rgba(235, 235, 235, 0.2), 
    1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2), 
    2.5em 0 0 0 rgba(235, 235, 235, 0.2), 
    1.75em 1.75em 0 0 rgba(235, 235, 235, 0.5), 
    0 2.5em 0 0 rgba(235, 235, 235, 0.7), 
    -1.8em 1.8em 0 0 #fff, 
    -2.6em 0 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2);
  }
  75% {
    box-shadow: 
    0 -2.6em 0 0 rgba(235, 235, 235, 0.2), 
    1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2), 
    2.5em 0 0 0 rgba(235, 235, 235, 0.2), 
    1.75 1.75 0 0 rgba(235, 235, 235, 0.2), 
    0 2.5em 0 0 rgba(235, 235, 235, 0.5), 
    -1.8em 1.8em 0 0 rgba(235, 235, 235, 0.7), 
    -2.6em 0 0 0 #fff, 
    -1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2);
  }
  87.5% {
    box-shadow: 
    0 -2.6em 0 0 rgba(235, 235, 235, 0.2), 
    1.8em -1.8em 0 0 rgba(235, 235, 235, 0.2), 
    2.5em 0 0 0 rgba(235, 235, 235, 0.2), 
    1.75em 1.75em 0 0 rgba(235, 235, 235, 0.2), 
    0 2.5em 0 0 rgba(235, 235, 235, 0.2), 
    -1.8em 1.8em 0 0 rgba(235, 235, 235, 0.5), 
    -2.6em 0 0 0 rgba(235, 235, 235, 0.7), 
    -1.8em -1.8em 0 0 #fff;
  }
}
</style>
