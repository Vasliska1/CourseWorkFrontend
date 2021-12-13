<template>

  <div>
    <Header/>
    <div class="container">
      <div class="login">
        <form v-on:submit.prevent="checkForm">
          <div class="col-md-6 login-do">
            <div class="layer2">
            </div>
            <h3>Выберите район</h3>
            <div class="layer2">
            </div>
            <div class="custom-dropdown big">
              <select v-model="selectedDistrict">
                <option v-for="city in districts" v-bind:value="city" :key="city">{{ city }}</option>
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
import {getDistrictbyCity} from './Response'

export default {

  name: "Register_district",
  data() {
    return {
      selectedDistrict: '',
      errors: [],
      districts: []
    }
  },
  components: {Header, Foother},
  methods: {
    getDistrict: function () {
      this.errors = [];
      getDistrictbyCity(localStorage.getItem("city")).then(response => {
        this.districts = response
        if (!response.length) {
          this.errors.push('В выбранном городе нет районов, вернитесь назад и выберите другой город');
        }
      })

    },
    checkForm: function () {
      this.errors = [];
      if (this.selectedDistrict === '') {
        this.errors.push('Выберите Район!');
      }
      if (!this.errors.length) {
        localStorage.setItem("district", this.selectedDistrict);
        this.$router.push('/register_end');
      }
    },
    loginRoute: function () {
      this.$router.push('/login');
    },

  },
  mounted() {
    this.getDistrict()

  }
}


</script>

