<template>
  <button type="button" class="btn-set-password" @click="linkTo">设置密码</button>
</template>

<script>
export default {
  name: 'Link',
  methods: {
    linkTo () {
      let that = this;

      that.$router.push({
        path: '/SetPassword'
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
  .btn-set-password{
    width: 100%;
    display: block;
    font-size: 1rem;
    padding: 1rem 0;
    cursor: pointer;
    background: #ff5206;
    color: #fff;
  }
</style>
