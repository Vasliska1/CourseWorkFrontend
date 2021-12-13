<template>
  <div class="header">
    <div class="container">
    </div>
    <div class="container">
      <div class="head">
        <div class=" logo">
          <a href=""><img src="../assets/images/logo.png" alt=""></a>
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

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapGetters([
      'BASKET',
    ]),
  },
}

</script>

<style scoped>

@import '../assets/css/bootstrap.css';
@import '../assets/css/style.css';
@import '../assets/css/style4.css';
</style>