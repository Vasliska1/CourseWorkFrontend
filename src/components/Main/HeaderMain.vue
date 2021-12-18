<template>
  <div class="header">
    <div class="container">
      <div class="head">
        <div class=" logo">
          <a><img src="../../assets/images/logo.png" alt=""></a>
        </div>
      </div>
    </div>
    <div class="header-top">
      <div class="container">
        <div class="col-sm-5 col-md-offset-2  header-login">
        </div>

        <div class="col-sm-5 header-social">
          <ul>
            <li><a href="#"><i></i></a></li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>

    <div class="container">

      <div class="head-top">

        <div class="col-sm-8 col-md-offset-2 h_menu4">
          <nav class="navbar nav_bottom" role="navigation">

            <div class="navbar-header nav_2">
              <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse"
                      data-target="#bs-megadropdown-tabs">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

            </div>
            <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul class="nav navbar-nav nav_1">
                <li><a class="color" @click.prevent="loginRoute" href="javascript:void(0);">Выйти</a></li>
              </ul>
              <ul class="nav navbar-nav nav_1">
                <li><a class="color" @click.prevent="basketRoute" href="javascript:void(0);">Корзина</a></li>
              </ul>
              <ul class="nav navbar-nav nav_1">
                <li><a class="color" @click.prevent="accountRoute" href="javascript:void(0);">Личный кабинет</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderMain",

  computed: {
    ...mapGetters([
      'BASKET',
    ]),
  },
  methods:{
    loginRoute: function () {
      localStorage.setItem("auth", '');
      this.$router.push('/login');
    },
    basketRoute: function () {

      this.$router.push('/basket');
    },
    accountRoute(){
      this.$router.push('/account');
    }
  }
}

</script>