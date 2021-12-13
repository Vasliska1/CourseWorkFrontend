<template>

  <div>
    <Header/>
    <div class="container">
      <div class="login">
        <form v-on:submit.prevent="checkForm">
          <div class="col-md-6 login-do">
            <div class="login-mail">
              <input v-model="name" type="text" placeholder="Имя" required="">
            </div>
            <div class="login-mail">
              <input v-model="lastname" type="text" placeholder="Фамилия" required="">
            </div>
            <div class="login-mail">
              <input v-model="phone" maxlength=11 type="text" placeholder="Номер телефона" required="">
            </div>
            <div class="login-mail">
              <input v-model="email" type="text" placeholder="E-mail" required="">
            </div>
            <div class="login-mail">
              <input v-model="address" type="text" placeholder="Адрес" required="">
            </div>

            <div class="login-error" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error" class="red">{{ error }} <br></p>
            </div>
            <br>
            <label class="hvr-skew-backward">
              <input type="submit" value="Зарегистрироваться">
            </label>
          </div>
          <div class="col-md-6 login-right">
            <h3>Уже есть аккаунт?</h3>
            <p></p>
            <a @click.prevent="loginRoute" class=" hvr-skew-backward">Войти</a>
            <img src="../../assets/images/back-register.png">
          </div>
        </form>
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
import {addClient} from './Response'

export default {
  name: "Register_end",
  computed: {
    requestHuman: function () {
      return {name: this.name, surname: this.lastname, phone_number: this.phone}
    },
  },
  data() {
    return {
      response: null,
      errors: [],
      name: null,
      lastname: null,
      address: null,
      phone: null,
      email: null
    }
  },
  components: {Header, Foother},
  methods: {
    checkForm: function () {
      this.errors = [];
      if (!this.name && !this.lastname && !this.phone && !this.email && !this.address) {
        this.errors.push('Все поля должны быть заполнены!');
      }

      if (this.phone.match(/[a-z]/)) {
        this.errors.push('Номер телефона может содеражть только цифры')
      }
      if (!this.errors.length) {
        this.addClientRequest();
      }
    },
    addClientRequest: function () {
      addClient(localStorage.getItem("city"), localStorage.getItem("district"), this.address, this.requestHuman).then((response) => {
        if (response.ok) {
          this.$router.push('/catalog')
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