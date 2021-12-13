<template>

  <div class="auth">
    <Header/>
    <div class="container">
      <div class="login">
        <form v-on:submit.prevent="checkForm">
          <div class="col-md-6 login-do">
            <div class="login-mail">
              <input v-model="name" type="text" placeholder="Придумайте логин">
            </div>
            <div class="login-mail">
              <input v-model="password" type="password" placeholder="Придумайте пароль">
            </div>

            <div class="login-error" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error" class="red">{{ error }} <br></p>
            </div>
            <br>
            <label class="hvr-skew-backward">
              <input type="submit" value="Зарегистрироваться">
            </label>
          </div>
        </form>

        <div class="col-md-6 login-right">
          <h3>Уже есть аккаунт?</h3>
          <p></p>
          <a @click.prevent="loginRoute" class=" hvr-skew-backward">Войти</a>
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
import Foother from "@/components/Foother";
import {login, registration} from './Response'

export default {
  name: "Register",

  computed: {
    request: function () {
      return {login: this.name, password: this.password, role: 'ROLE_USER'}
    },
  },
  components: {Header, Foother},
  data() {
    return {
      response: null,
      action: 'login',
      errors: [],
      name: null,
      password: null,
      repassword: null
    }
  },
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
        this.registerRequest();
      }
    },
    registerRequest: function () {
      registration(this.request).then((response) => {
        if (response.ok) {
          login(this.request).then((response) => {
            if (response.ok) {
              response.text().then(text => {
                localStorage.setItem("auth", text);
                localStorage.setItem("userName", this.name)
                this.$router.push('/register_city')
              });
            } else
              response.text().then(text => this.errors.push(text));
          })

        } else
          response.text().then(text => this.errors.push(text));
      })
    },
    loginRoute: function () {
      this.$router.push('/login');
    }
  }
}
</script>