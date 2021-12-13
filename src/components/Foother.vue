<template>
  <div class="footer">
    <div class="footer-middle">
      <div class="container">
        <div class="col-md-3 footer-middle-in">
          <a href="main.html"><img src="images/logo2.png" alt=""></a>
          <p>Надо придумать описание нашего великолепного магазина</p>
        </div>

        <div class="col-md-3 footer-middle-in">
          <h6>Контакты</h6>
          <ul class=" in">
            <li><span>Телефон: 8(913)-773-02-51</span></li>
            <li><span>E-mail: vladislava.birikh@yandex.ru</span></li>
            <li><span>Адрес: Россия, Санкт-Петербург</span></li>
            <li><span>Что-нибудь</span></li>
          </ul>
        </div>
        <div class="col-md-3 footer-middle-in">
          <h6>Соцсети</h6>
          <ul class=" in">
            <li><a>Tiktok</a></li>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
            <li><a>Twitter</a></li>
          </ul>
        </div>
        <div class="col-md-3 footer-middle-in">

        </div>
        <div class="col-md-3 footer-middle-in">
          <h6>Новости</h6>
          <span>Подписаться на новостную рассылку</span>
          <form>
            <input type="text" value="e-mail" onfocus="this.value='';" onblur="if (this.value == '') {this.value ='e-mail';}">
            <input type="submit" value="подписаться">
          </form>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "Foother",

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