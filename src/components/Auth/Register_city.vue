<template>

  <div>
    <Header/>
    <div class="container">
      <div class="login">
        <form v-on:submit.prevent="checkForm">
          <div class="col-md-6 login-do">
            <div class="layer2">
            </div>
            <h3>Выберите город</h3>
            <div class="layer2">
            </div>
            <div class="custom-dropdown big">
              <select v-model="selectedCity">
                <option v-for="city in cities" v-bind:value="city" :key="city">{{ city }}</option>
              </select>
            </div>
            <div class="layer2">
            </div>

            <div class="login-error" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error" class="red">{{ error }} <br></p>
            </div>
            <br>
            <label class="hvr-skew-backward">
              <input type="submit" value="Далее">
            </label>
          </div>
          <div class="layer2">
          </div>
          <div class="col-md-6 login-right">
            <h3>Уже есть аккаунт?</h3>
            <p></p>
            <a @click.prevent="loginRoute" class=" hvr-skew-backward">Войти</a>
          </div>
        </form>
      </div>
    </div>
    <div class="layer3">
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
import {getCity} from './Response'

export default {

  name: "Register_city",
  data() {
    return {
      selectedCity: '',
      errors: [],
      cities: []
    }
  },
  components: {Header, Foother},
  methods: {
    getCity: function () {
      getCity().then(response => {
        console.log(response)
        this.cities = response
      })
    },
    checkForm: function () {
      this.errors = [];
      if (this.selectedCity === '') {
        this.errors.push('Выберите город!');
      }
      if (!this.errors.length) {
        localStorage.setItem("city", this.selectedCity);
        this.$router.push('/register_district');
      }
    },
    loginRoute: function () {
      this.$router.push('/login');
    }
  },
  beforeMount() {
    this.getCity()
  }
}


</script>

