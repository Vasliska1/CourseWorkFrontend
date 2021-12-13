<template>
  <div>


    <div class="header">
      <div class="container">
      </div>
      <div class="container">
        <div class="head">
          <div class=" logo">
            <a href="main.html"><img src="../../assets/images/logo.png" alt=""></a>
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
                  <li><a class="color" href="login.html">Выйти</a></li>
                </ul>
                <ul class="nav navbar-nav nav_1">
                  <li><a class="color" href="main.html">На главную</a></li>
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
                <img src="../../assets/images/cart.png" alt="" />
              </h3>
              <p><a class="simpleCart_empty">Очистить корзину</a></p>

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
                <th class="table-grid">Товар</th>
                <th>Количество</th>
              </tr>
              <tr class="cart-header">

                <td class="ring-in"><a href="product.html" class="at-in"><img src="../../assets/images/попит1.jpg"
                                                                              class="img-responsive" alt=""></a>
                  <div class="sed">
                    <h5><a href="product.html">Название</a></h5>
                    <p>Уровень стресса: ** </p>

                  </div>
                </td>

                <td class="item_price">ххх</td>
                <td class="add-check"><a class="item_add hvr-skew-backward" href="#">Удалить</a></td>
              </tr>
              <tr class="cart-header1">
                <td class="ring-in"><a href="product.html" class="at-in"><img src="../../assets/images/симпл-димпл1.jpg"
                                                                              class="img-responsive" alt=""></a>
                  <div class="sed">
                    <h5><a href="product.html">Название</a></h5>
                    <p>Уровень стресса: ** </p>
                  </div>
                </td>

                <td class="item_price">ххх</td>
                <td class="add-check"><a class="item_add hvr-skew-backward" href="#">Удалить</a></td>
              </tr>
              <tr class="cart-header2">
                <td class="ring-in"><a href="product.html" class="at-in"><img src="../../assets/images/сквиш1.jpg"
                                                                              class="img-responsive" alt=""></a>
                  <div class="sed">
                    <h5><a href="product.html">Название</a></h5>
                    <p>Уровень стресса: ** </p>
                  </div>
                </td>

                <td class="item_price">ххх</td>
                <td class="add-check"><a class="item_add hvr-skew-backward" href="#">Удалить</a></td>
              </tr>

            </table>
          </div>
        </div>
        <div class="produced">
          <a class="hvr-skew-backward">Оформить заказ</a>
        </div>
      </div>
      <div class="container">
        <div class="brand">
        </div>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "Basket"
}
</script>