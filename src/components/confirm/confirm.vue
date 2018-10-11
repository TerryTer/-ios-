<template>
  <div class="relative" v-if="show">
    <div class="bg"></div>
    <div class="confirm-wrap flex flex-wrap align-items-center text-center">
      <h3 class="text-center">操作提示</h3>
      <p class="text-center">{{msg}}</p>
      <div class="opera-btn-wrap flex flex-grow border-top">
        <button type="button" class="opera-btn" @click="no">取消</button>
        <button type="button" class="opera-btn" @click="yes">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'confirm',
  data () {
    return {
      show: false,
      msg: ''
    }
  },
  methods: {
    yes () {
      this.yes()
    },
    no () {
      this.no()
    },
    close () {
      this.close()
    }
  }
}
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
@import '../../css/public.scss';

.confirm-wrap{
  @include center2(fixed, 90%, auto,3);
  border-radius: .5rem;
  background: #fff;
  h3{
    width: 100%;
    background: #ccc;
    padding: .75rem 0;
    color: #666;
    font-size: .88rem;
  }
  p{
    width: 92%;
    margin: 0 auto;
    padding: 1.5rem 0;
    line-height: 1.5;
    background: #fff;
    font-size: 1rem;
  }
  .opera-btn{
    width: 50%;
    height: 2.5rem;
    line-height: 2.5rem;
    color: #333;
    font-size: .88rem;
    &:first-child{
      background: #ccc;
      color: #666;
    }
  }
  .opera-btn-wrap{
    width: 100%;
  }
  .border-top{
    border-top: 1px solid #ccc;
  }
}
</style>
