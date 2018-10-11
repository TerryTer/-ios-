<template>
  <div class="deblock-wrap">
    <h3 class="text-center deblock-title">解锁密码</h3>
    <div class="deblock-val-list flex justify-content-sa">
      <label v-for="(item, index) in checkboxList" :key="index * 10">
        <input class="input-checkbox" type="checkbox" :checked="item"><span></span>
      </label>
    </div>
    <div class="text-center" v-if="isShow">{{errorText}}</div>
    <div class="deblock-key-list flex flex-wrap justify-content-sa">
      <button class="btn-item" type="button" :disabled="isDisabled" @click="getNum(item)" v-for="(item, index) in 9" :key="item">{{item}}</button>
      <button class="btn-item" type="button" :disabled="isDisabled" @click="getNum(0)" :key="0">0</button>
    </div>
    <div class="deblock-opera flex justify-content-sa">
      <button type="button" class="btn-opera" :disabled="isDisabled" @click="linkTo">忘记密码</button>
      <button type="button" class="btn-opera" :disabled="isDisabled" @click="del">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Deblock',
  data () {
    return {
      count: 5, // 最多输入5次，5次不通过后，不能输入，60秒后才能输入
      isShow: false,
      checkboxList: [false,false,false,false,false,false],
      password: [],
      getPassword: window.localStorage.getItem('password').split(''),
      tt: 60,
      timer: null,
      errorText: '密码错误，请重新输入'
    }
  },
  computed: {
    isDisabled () {
      return this.count === 0;
    }
  },
  methods: {
    linkTo () {
      this.$router.push({
        path: '/SetPassword'
      })
    },
    getNum (item) {
      let that = this;

      that.isShow = false

      that.password.push(item)
      that.checkboxList[that.password.length - 1] = true
      that.checkboxList = that.clone(that.checkboxList)

      if(that.password.length >= 6){
        that.password = that.password.slice(0,6);

        if (that.checkPswRight(that.password)) {
          that.$router.push({
            path: '/Success'
          })
        } else {
          that.count = that.count - 1;
          that.isShow = true;
          that.password = [];
          that.checkboxList = that.checkboxList.map((v,i) => {
            return v = false;
          })
        }
      }

      if (that.count === 0) {
        that.countdown();
      }
    },
    checkPswRight (arr) {
      let that = this;

      return arr.every((v, i) => {
        return v === +that.getPassword[i]
      })
    },
    del () {
      let that = this,
          len = that.password.length - 1;

      that.checkboxList[len] = false
      that.checkboxList = that.clone(that.checkboxList)

      that.password.splice(len,1)

      that.isShow = false;
    },
    countdown () {
      let that = this;
      
      that.timer = setInterval(() => {
        if (that.tt === 0) {
          clearInterval(that.timer)
          that.count = 5;
          that.tt = 60;
          that.isShow = false;
        } else {
          that.tt--;
          that.errorText = '密码输入错误已满5次，' + that.tt + '秒后再尝试'
        }
      }, 1000)
    },
    cloneArr (obj) {
      let that = this;

      //通过深拷贝来拷贝出新的数组
      return obj.map((n) => that.clone(n))
    },
    cloneObj (obj) {
      let that = this;

      //将对象变成数组并组合成新对象
      return Object.keys(obj).reduce((v, i) => (v[i] = that.clone(obj[i]), v), {});
    },
    //参考sg社区的某个帖子：深拷贝，当vue返回的数组中带着__ob__:observe时，表明数据被监控着，会拿不到值，所以添加一个简单的深拷贝（这里没有循环引用）
    clone (obj) {
      let that = this;

      if (obj instanceof Array) {
        return that.cloneArr(obj);
      } else if (obj instanceof Object) {
        return that.cloneObj(obj);
      } else {
        return obj
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
  .deblock-wrap{
    margin: 10% auto 0;
  }
  .deblock-key-list{
    width: 60%;
    margin: 0 auto;
  }
  .btn-item{
    display: block;
    width: 4rem;
    height: 4rem;
    margin-top: 4%;
    border: 1px solid #eee;
    border-radius: 4rem;
    font-size: 1rem;
    background: none;
    &:active{
      background: #eee;
    }
  }
  .deblock-title{
    font-size: 1rem;
    padding: 1rem 0;
  }
  .deblock-opera{
    margin-top: 10%;
    .btn-opera{
      background: none;
      font-size: 1rem;
    }
  }
  .deblock-val-list{
    width: 60%;
    margin: 5% auto;
    label{
      margin-right: 2%;
    }
    span{
      display: block;
      width: .5rem;
      height: .5rem;
      border: 1px solid #333;
      background: transparent;
      border-radius: 50%;
    }
    .input-checkbox{
      display: none;
      &:checked + span{
        background: #333;
      }
    }
  }
  
</style>
