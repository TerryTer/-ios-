<template>
  <div class="dialog-wrap">
    <div class="bg" v-if="isClose"></div>
    <div class="dialog-content">
      <slot name="dialog-slot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    isClose: {
      type: Boolean,
      default: true
    },
    toastContent: {
      type: String,
      default: '提示信息'
    },
    isCancel: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
@import '../../css/public.scss';

.bg{
  @include fixed(fixed,left,top,0,0,100%,100%,2);
  background: rgba(0,0,0,.7);
}

.toast-wrap{
  @include center2(fixed,90%,auto,3);
  background: #fff;
  p{
    width: 90%;
    margin: 0 auto;
    padding: .62rem 0;
    font-size: 1rem;
  }
}

.btn-list{
  button{
    flex-grow: 1;
    width: 50%;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    font-size: .88rem;
  }
} 

.loading-wrap{
  height: 100vh;
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
