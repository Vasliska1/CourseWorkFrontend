<template>
<div>
  <div class="header">
    <div class="container">
    </div>
    <div class="container">
      <div class="head">
        <div class=" logo">
          <a @click.prevent="catalog" href="javascript:void(0)"><img src="../../assets/images/logo.png" alt=""></a>
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

  </div>
  <div class="banner-thanks">
    <div class="container">
    </div>
  </div>
  <div class="container">
    <div class="login">
      <div class="col-md-4 login-right">
      </div>
      <div class="col-md-6 login-right">
        <h2>Спасибо за заказ!</h2>
        <br>
        <h4>Скоро курьер прибудет по вашему адресу</h4>
        <br>
        <p></p>
        <a @click.prevent="catalog" href="javascript:void(0)" class=" hvr-skew-backward">На главную</a>
      </div>

    </div>
  </div>
  <div class="container">
    <div class="brand">
      <img src="../../assets/images/thanks2.png">
    </div>
  </div>
  <Foother/>
  </div>
</template>

<script>

import Foother from "@/components/Foother";
export default {
  name: "Thanks",
  components: {Foother},
  methods:{
    catalog: function () {
      this.$router.push('/catalog');
    }
  }
}

</script>