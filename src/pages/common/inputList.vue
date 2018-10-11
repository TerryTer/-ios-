<template>
  <div class="input-wrap flex align-items-center">
    <span class="icon" :class="item"></span>
    <slot name="afterContent"></slot>
  </div>
</template>

<script>
export default {
  name: 'input-list',
  props: ['item']
}
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
.input-wrap{
  width: 90%;
  margin: 0 auto;
  padding: .5rem 0;
  border-bottom: 1px solid #ccc;
  &:nth-child(3), &.no-border{
    border-bottom: none;
  }
}
.input-label{
  width: 30%;
  font-size: 1rem;
  color: #333;
  text-indent: .5rem;
}
.input-text{
  width: 85%;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1rem;
  &::placeholder{
    font-size: .88rem;
    color: #999;
  }
  &:disabled{
    background: #fff;
    opacity: 1
  }
}
</style>
