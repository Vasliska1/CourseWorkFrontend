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
        </div>
      </div>
      <div class="container">
        <div class="head-top">
          <div class="col-sm-8 col-md-offset-2 h_menu4">
            <nav class="navbar nav_bottom" role="navigation">
              <div class="navbar-header nav_2">
                <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse"
                        data-target="#bs-megadropdown-tabs">
                  <span class="sr-only"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>

              </div>
              <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul class="nav navbar-nav nav_1">
                  <li><a class="color" @click.prevent="loginRoute" href="javascript:void(0)">Выйти</a></li>
                </ul>
                <ul class="nav navbar-nav nav_1">
                  <li><a class="color" @click.prevent="catalog" href="javascript:void(0)">На главную</a></li>
                </ul>
                <ul class="nav navbar-nav nav_1">
                  <li><a class="color" href="../../assets/account.html">Личный кабинет</a></li>
                </ul>
              </div>

            </nav>
          </div>
          <div class="col-sm-2 search-right">
            <div class="cart box_1">
              <h3>
                <div class="total">
                  <span class="simpleCart_total"></span>
                </div>
                <img src="../../assets/images/cart.png" alt=""/>
              </h3>
              <p><a @click="restore" class="simpleCart_empty">Очистить корзину</a></p>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="check-out">
      <div class="container">

        <div class="bs-example4" data-example-id="simple-responsive-table">
          <div class="table-responsive">
            <table class="table-heading simpleCart_shelfItem">
              <tr>
                <th class="table-grid"> Товар</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Количество</th>
              </tr>
              <tr class="cart-header2" v-for="item in this.basket" :key="item">
                <td class="ring-in"><a class="at-in"><img :src="require('@/assets/images/' + item.image)"
                                                          class="img-responsive" alt=""/></a>
                  <div class="sed">
                    <h4 style="color: black"> {{ item.title }}</h4>
                    <p>{{ item.stress }} </p>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="add-check">
                  <div class="quantity">
                    <div class="quantity-select">
                      <div class="img ">
                        <button @click="decrement(item.id)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[item.id].count }} </span>
                        <button @click="increment(item.id)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

            </table>
          </div>
        </div>

        <div class="login-error" v-if="errors.length">
          <p v-for="error in errors" v-bind:key="error" class="red">{{ error }} <br></p>
        </div>
        <form v-on:submit.prevent="checkForm">
          <div class="produced">
            <input type="submit" class="hvr-skew-backward" value="Оформить заказ">
          </div>
        </form>
      </div>
      <div class="container">
        <div class="brand">
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Store from "@/vuex/store";
import {addOrder} from "./Response";

export default {
  name: "Basket",
  computed: {},
  data() {
    return {
      basket: [],
      store: Store,
      allProd: [],
      img: '@/assets/images/кролик1',
      tmpImg: '',
      count: JSON.parse(localStorage.getItem('basket')),
      response: [],
      errors: [],
      request: []

    }
  }, methods: {
    increment: function (id) {
      Store.increment(id)
      this.count = JSON.parse(localStorage.getItem('basket'));
    },
    decrement: function (id) {
      Store.decrement(id)
      this.count = JSON.parse(localStorage.getItem('basket'));
    },
    restore: function () {
      Store.restore();
      window.location.reload();
    },
    catalog: function () {
      this.$router.push('/catalog');
    },
    loginRoute: function () {
      this.$router.push('/login');
    },
    request_list: function (name, count) {
      console.log({name: name, count: count})
      return {name: name, count: count}
    },
    checkForm: function () {
      this.errors = [];
      var tmp = [];
      var _this = this;
      this.basket.forEach(function (item) {
        tmp.push(_this.request_list(item.title, item.count));
      })
      this.request = tmp;

      this.send()
    },
    send: function () {
      addOrder(this.request).then((response) => {
        if (response.ok) {
          response.text().then(text => {
            console.log(text);
            Store.restore();
            this.$router.push('/thanks')
          });
        } else {

          var _this = this;

          response.text().then(function (text) {
            _this.response = (JSON.parse(text));

            _this.errors.push("На складе только: ")

            _this.response.forEach(function (item) {
              _this.errors.push(item.count + " " + item.name);
            })
            _this.errors.push("Пожалуйста, уменьшите количество выбранного товара")
          });
        }
      })
    },
    getCheckPopit: function () {
      this.allProd = JSON.parse(localStorage.getItem('basket'))
      var tmp = [];
      this.allProd.forEach(function (item) {
        if (item.count !== 0) {
          tmp.push(item);
        }
      });
      return tmp;
    }
  },
  mounted() {
    console.log(JSON.parse(localStorage.getItem('basket')))

    this.basket = this.getCheckPopit();
    console.log(this.basket)
  },
}
</script>