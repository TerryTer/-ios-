<template>
  <div class="set-password-wrap">
    <form id="form">
      <div class="input-col flex justify-content-center align-items-center">
        <label class="input-label text-right">密码：</label>
        <input type="password" class="input-text" placeholder="请输入密码" maxlength="6" v-model="dataObj.psw">
      </div>
      <div class="input-col flex justify-content-center align-items-center">
        <label class="input-label text-right">确认密码：</label>
        <input type="password" class="input-text" placeholder="请再次输入密码" maxlength="6" v-model="dataObj.pswAgain">
      </div>
      <button type="button" class="btn-sure" :disabled="isDisabled" @click="linkTo">确定</button>
      <!-- <router-link class="btn-sure" to="/Deblock" :disabled="isDisabled" tag="button" name="Deblock">确定</router-link> -->
    </form>
  </div>
</template>

<script>
export default {
  name: 'SetPassword',
  data () {
    return {
      dataObj: {
        psw: '',
        pswAgain: ''
      }
    }
  },
  computed: {
    isDisabled () {
      let that = this,
          condition = (
              that.dataObj.psw === '' || 
              that.dataObj.pswAgain === '' || 
              that.dataObj.psw.length < 6 || 
              that.dataObj.psw !== that.dataObj.pswAgain);

      return condition
    }
  },
  methods: {
    linkTo () {
      let that = this;

      localStorage.setItem('password', that.dataObj.psw)

      that.$router.push({
        path: '/Deblock'
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
  .title{
    padding: 1.5rem 0;
    font-size: 1rem;
  }
  #form{
    width: 90%;
    margin: 0 auto;
  }
  .input-col{
    border-bottom: 1px solid #eee;
    margin-bottom: 1rem;
  }
  .input-label{
    width: 23%;
    margin-right: 2%;
    font-size: 1rem;
  }
  .input-text{
    width: 75%;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1rem;
  }
  .btn-sure{
    display: block;
    width: 100%;
    height: 2.5rem;
    background: #f4984e;
    color: #fff;
    margin: 0 auto;
    font-size: 1rem;
    &:disabled{
      background: #ccc;
    }
  }
  
</style>
