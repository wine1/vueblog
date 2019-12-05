<template>
  <div id="login">
    <section class="login-box">
      <h1>系统登录</h1>
      <div class="wrap-input">
        <input type="text" placeholder="请输入用户名" v-model='username' />
      </div>
      <div class="wrap-input">
        <input type="password" placeholder="请输入密码" v-model="password"/>
      </div>
      <div class="checkbox" @click="check">
        <i :class="{checked:ischecked}"></i>
        <span>记住密码</span>
      </div>
      <div class="submit" @click="submit_login">登录</div>
    </section>
  </div>
</template>

<script>
// import { postRequest } from "../utils/api";
// import { putRequest } from "../utils/api";
export default {
  data() {
    return {
      ischecked: false,
      username:'12345',
      password:'12345'
    };
  },
  methods: {
    check() {
      this.ischecked = this.ischecked ? false : true;
    },
    submit_login: () => {}
  }
};
</script>

<style scoped lang="scss">
.login-box {
  position: relative;
  width: 400px;
  margin: 20% auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 10px 10px #eee;
  border-radius: 10px;
  // transform: translateY(-50%);

  .wrap-input {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 6px;
    input {
      width: 100%;
      font-size: 16px;
      border: 0;
      -webkit-appearance: none;
    }
    inputinput:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    }
    ::-webkit-input-placeholder {
      color: #999;
    }
  }

  .checkbox {
    cursor: pointer;
    i {
      display: inline-block;
      height: 10px;
      width: 10px;
      border: 1px solid #3381e3;
      border-radius: 3px;
      vertical-align: middle;
      &.checked {
        background: #3381e3;
      }
    }
    span {
      font-size: 15px;
      color: #333;
    }
  }

  .submit {
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    text-align: center;
    background: #3381e3;
    color: #fff;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
  }
}
</style>