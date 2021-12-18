<template>

  <div class="auth">
    <Header/>
    <div class="container">
      <div class="login">
        <form v-on:submit.prevent="checkForm">
          <div class="col-md-6 login-do">
            <div class="login-mail">
              <input v-model="name" type="text" placeholder="Логин" required="">
            </div>
            <div class="login-mail">
              <input v-model="password" type="password" placeholder="Пароль" required="">
            </div>
            <div class="login-error" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error" class="red">{{ error }} <br></p>
            </div>
            <br>
            <label class="hvr-skew-backward">
              <input type="submit" value="Войти">
            </label>
          </div>

        </form>
        <div class="col-md-6 login-right">
          <h3>Ещё нет аккаунта?</h3>
          <p></p>
          <a @click.prevent="registerRoute" class=" hvr-skew-backward">Зарегистрироваться</a>
        </div>

      </div>

    </div>
    <div class="container">
      <div class="brand">
        <img src="../../assets/images/register123.png">
      </div>
    </div>
    <div class="container">
      <div class="brand">
      </div>
    </div>
    <Foother/>
  </div>

</template>

<script>
import Header from "../Header";
import Foother from "../Foother";
import {login} from './Response'
import Store from "@/vuex/store";

export default {
  name: "Auth",
  computed: {
    request: function () {
      return {login: this.name, password: this.password}
    },
  },
  data() {
    return {
      response: null,
      action: 'login',
      errors: [],
      name: null,
      password: null,
      repassword: null,
      store: Store
    }
  },
  components: {Header, Foother},
  methods: {
    checkForm: function () {
      this.errors = [];
      if (!this.name) {
        this.errors.push('Введите имя пользователя');
      }
      if (!this.name.match(/^[A-Za-z0-9]*$/)) {
        this.errors.push('Имя пользователя должен быть только из латинский символов или цифр');
      }
      if (!this.password) {
        this.errors.push('Введите пароль');
      }
      if (!this.password.match(/^[A-Za-z0-9]*$/)) {
        this.errors.push('Пароль должен быть только из латинский символов или цифр');
      }

      if (!this.errors.length) {
        this.loginRequest();
      }
    },
    loginRequest: function () {
      login(this.request).then((response) => {
        if (response.ok) {
          response.text().then(text => {
            localStorage.setItem("auth", text);
            localStorage.setItem("userName", this.name)
            Store.restore()
            this.$router.push('/catalog')
          });
        } else
          response.text().then(text => this.errors.push(text));
      })
    },
    registerRoute: function () {
      this.$router.push('/register');
    }
  },mounted() {
    localStorage.setItem('basket','null');
  }
}
</script>

<style scoped>


@import '../../assets/css/bootstrap.css';
@import '../../assets/css/style.css';
@import '../../assets/css/style4.css';

</style>