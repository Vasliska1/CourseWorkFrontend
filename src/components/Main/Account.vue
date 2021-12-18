<template>
  <div>
    <div class="header">
      <div class="container">
      </div>
      <div class="container">
        <div class="head">
          <div class=" logo">
            <a  @click.prevent="catalog" href="javascript:void(0)"><img src="../../assets/images/logo.png" alt=""></a>
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
          <div class="clearfix"> </div>
        </div>
      </div>
      <div class="container">

        <div class="head-top">

          <div class="col-sm-8 col-md-offset-2 h_menu4">
            <nav class="navbar nav_bottom" role="navigation">

              <div class="navbar-header nav_2">
                <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>

              </div>
              <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul class="nav navbar-nav nav_1">
                  <li><a class="color"  @click.prevent="login" href="javascript:void(0)">Выйти</a></li>
                </ul>
                <ul class="nav navbar-nav nav_1">
                  <li><a class="color"  @click.prevent="catalog" href="javascript:void(0)">На главную</a></li>
                </ul>
                <ul class="nav navbar-nav nav_1">
                  <li><a class="color" @click.prevent="backet" href="javascript:void(0)">Корзина</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

    </div>
    <div class="banner-account">
      <div class="container">
      </div>
    </div>
    <div class="container">
      <div class="login">
        <div class="col-md-2 login-right">
          <h3>Имя: </h3>
          <h3>Фамилия: </h3>
          <h3>Телефон: </h3>
          <h3>Адрес: </h3>
          <p></p>
        </div>
        <div class="col-md-3 login-right">
          <h3>*** </h3>
          <h3>*** </h3>
          <h3>*** </h3>
          <h3>*** </h3>
          <p></p>
          <a href="" class=" hvr-skew-backward">изменить</a>
        </div>
        <div class="col-md-2 login-right">
          <h3>Город: </h3>
          <h3>Район: </h3>
          <p></p>
        </div>
        <div class="col-md-3 login-right">
          <h3>*** </h3>
          <h3>*** </h3>
          <p></p>
          <a href="" class=" hvr-skew-backward">изменить</a>
        </div>
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

import Foother from "@/components/Foother";
export default {
  name: "Account",
  components: {Foother},
  methods:{
    catalog: function () {
      this.$router.push('/catalog');
    }, login: function () {
      this.$router.push('/login');
    },
    basket: function () {
      this.$router.push('/basket');
    }
  }
}
</script>