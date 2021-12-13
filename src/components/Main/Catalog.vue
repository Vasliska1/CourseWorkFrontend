<template>

  <div>
    <HeaderMain/>
    <div class="banner">
      <div class="container">
        <section class="rw-wrapper">
          <h1 class="rw-sentence">
            <div class="rw-words rw-words-2">
              <span>Игрушки-антистресс</span>
              <span>Уникальный ассортимент</span>
              <span>Огромный выбор</span>
              <span>Разный уровень стресса</span>
              <span>Доставка прямо домой</span>
            </div>
          </h1>
        </section>
      </div>
    </div>
    <div class="container">
      <div class="single">
        <div class="container">
          <div class="col-md-9">
            <div class="col-md-5 grid">
              <div class="flexslider">
                <ul class="slides">
                  <div><img src="../../assets/images/попит1.jpg" data-imagezoom="true"
                            class="thumb-image img-responsive"></div>
                </ul>
              </div>
            </div>
            <div class="col-md-7 single-top-in">
              <div class="span_2_of_a1 simpleCart_shelfItem">
                <h3>По нашей статистике вам лучше всего подойдет этот антистресс</h3>
                <p class="in-para">{{count[bestpop].stress}}</p>
                <h4 class="quick">{{count[bestpop].title}}</h4>
                <div class="quantity">
                  <div class="quantity-select">
                    <div class="img ">
                      <button @click="decrement(bestpop)"><img src="../../assets/images/minus.png" alt=""></button>
                      <span> {{ count[bestpop].count}} </span>
                      <button @click="increment(bestpop)"><img src="../../assets/images/plus.png" alt=""></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container">
          <div class="brand">
          </div>
        </div>
        <div class="container">
          <div class="content-mid">
            <h3>Игрушки</h3>
            <label class="line"></label>
            <div class="mid-popular">
              <div class="col-md-3 item-grid simpleCart_shelfItem">
                <div class=" mid-pop">
                  <div class="pro-img">
                    <img src="../../assets/images/попит1.jpg" class="img-responsive" alt="">
                    <div class="zoom-icon">
                      <a href="../../assets/images/попит1.jpg" rel="title"
                         class="picture b-link-stripe b-animate-go  thickbox"></a>

                    </div>
                  </div>
                  <div class="mid-1">
                    <div class="women">
                      <div class="women-top">
                        <span>{{ count[0].stress}}</span>
                        <h6>Попит</h6>
                      </div>
                      <div class="img item_add">
                        <button @click="decrement(0)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[0].count}} </span>
                        <button @click="increment(0)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 item-grid simpleCart_shelfItem">
                <div class=" mid-pop">
                  <div class="pro-img">
                    <img src="../../assets/images/симпл-димпл1.jpg" class="img-responsive" alt="">
                    <div class="zoom-icon ">
                      <a href="../../assets/images/симпл-димпл1.jpg" rel="title"
                         class="picture b-link-stripe b-animate-go  thickbox"></a>

                    </div>
                  </div>
                  <div class="mid-1">
                    <div class="women">
                      <div class="women-top">
                        <span>{{ count[1].stress}}</span>
                        <h6>Симпл-димпл</h6>
                      </div>
                      <div class="img item_add">
                        <button @click="decrement(1)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[1].count}} </span>
                        <button @click="increment(1)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 item-grid simpleCart_shelfItem">
                <div class=" mid-pop">
                  <div class="pro-img">
                    <img src="../../assets/images/сквиш1.jpg" class="img-responsive" alt="">
                    <div class="zoom-icon ">
                      <a href="../../assets/images/сквиш1.jpg" rel="title"
                         class="picture b-link-stripe b-animate-go  thickbox"></a>
                    </div>
                  </div>
                  <div class="mid-1">
                    <div class="women">
                      <div class="women-top">
                        <span>  {{ count[2].stress}}&nbsp;&nbsp;&nbsp; </span>
                        <h6>Сквиш </h6>
                      </div>
                      <div class="img item_add">
                        <button @click="decrement(2)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[2].count}} </span>
                        <button @click="increment(2)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                      <div class="clearfix"></div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-md-3 item-grid simpleCart_shelfItem">
                <div class=" mid-pop">
                  <div class="pro-img">
                    <img src="../../assets/images/йо-йо.jpg" class="img-responsive" alt="">
                    <div class="zoom-icon ">
                      <a href="../../assets/images/йо-йо.jpg" rel="title"
                         class="picture b-link-stripe b-animate-go  thickbox"></a>
                    </div>
                  </div>
                  <div class="mid-1">
                    <div class="women">
                      <div class="women-top">
                        <span>{{ count[3].stress}}</span>
                        <h6>Йо-йо</h6>
                      </div>
                      <div class="img item_add">
                        <button @click="decrement(3)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[3].count}} </span>
                        <button @click="increment(3)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="mid-popular">
              <div class="col-md-3 item-grid simpleCart_shelfItem">
                <div class=" mid-pop">
                  <div class="pro-img">
                    <img src="../../assets/images/снаперс.jpg" class="img-responsive" alt="">
                    <div class="zoom-icon ">
                      <a href="../../assets/images/снаперс.jpg" rel="title"
                         class="picture b-link-stripe b-animate-go  thickbox"></a>
                    </div>
                  </div>
                  <div class="mid-1">
                    <div class="women">
                      <div class="women-top">
                        <span>{{ count[4].stress}}</span>
                        <h6>Снаперс</h6>
                      </div>
                      <div class="img item_add">
                        <button @click="decrement(4)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[4].count}} </span>
                        <button @click="increment(4)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 item-grid simpleCart_shelfItem">
                <div class=" mid-pop">
                  <div class="pro-img">
                    <img src="../../assets/images/кубик.jpg" class="img-responsive" alt="">
                    <div class="zoom-icon ">
                      <a href="../../assets/images/кубик.jpg" rel="title"
                         class="picture b-link-stripe b-animate-go  thickbox"></a>
                    </div>
                  </div>
                  <div class="mid-1">
                    <div class="women">
                      <div class="women-top">
                        <span>{{ count[5].stress}}</span>
                        <h6>Кубик</h6>
                      </div>
                      <div class="img item_add">
                        <button @click="decrement(5)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[5].count}} </span>
                        <button @click="increment(5)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 item-grid simpleCart_shelfItem">
                <div class=" mid-pop">
                  <div class="pro-img">
                    <img src="../../assets/images/осьминог-перевертыш.jpg" class="img-responsive" alt="">
                    <div class="zoom-icon ">
                      <a href="../../assets/images/осьминог-перевертыш.jpg" rel="title"
                         class="picture b-link-stripe b-animate-go  thickbox"></a>
                    </div>
                  </div>
                  <div class="mid-1">
                    <div class="women">
                      <div class="women-top">
                        <span>{{ count[6].stress}}</span>
                        <h6>Осьминог</h6>
                      </div>
                      <div class="img item_add">
                        <button @click="decrement(6)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[6].count}} </span>
                        <button @click="increment(6)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 item-grid simpleCart_shelfItem">
                <div class=" mid-pop">
                  <div class="pro-img">
                    <img src="../../assets/images/спиннер.jpg" class="img-responsive" alt="">
                    <div class="zoom-icon ">
                      <a href="../../assets/images/спиннер.jpg" rel="title"
                         class="picture b-link-stripe b-animate-go  thickbox"></a>

                    </div>
                  </div>
                  <div class="mid-1">
                    <div class="women">
                      <div class="women-top">
                        <span>{{ count[7].stress}}</span>
                        <h6>Спиннер</h6>
                      </div>
                      <div class="img item_add">
                        <button @click="decrement(7)"><img src="../../assets/images/minus.png" alt=""></button>
                        <span> {{ count[7].count}} </span>
                        <button @click="increment(7)"><img src="../../assets/images/plus.png" alt=""></button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>


          </div>
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

import HeaderMain from "./HeaderMain";
import Foother from "@/components/Foother";

import Store from '../../vuex/store.js'
//import {getBestPopit} from "Response";

export default {
  name: "Catalog",
  data() {
    return {
      count: JSON.parse(localStorage.getItem('basket')),
      store: Store,
      bestpop: 0
    }
  },
  components: {HeaderMain, Foother},

  methods: {
    increment: function (id) {
      Store.increment(id)
      this.count = JSON.parse(localStorage.getItem('basket'));
    },
    decrement: function (id) {
      Store.decrement(id)
      this.count = JSON.parse(localStorage.getItem('basket'));
    },
    getBestPopit: function (){
      this.bestpop = 1/*.then((response) => {
        if (response.ok) {
          response.text().then(text => {
            this.bestpop =text+1
          });
        }
      })*/

    }


  },mounted() {

    console.log(Store.state)
    this.getBestPopit();
  }
}
</script>