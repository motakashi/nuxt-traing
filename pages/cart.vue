<template>
  <section class="cart">
    <h1>{{title}}</h1>
    <div>
      <p>購入商品数
      {{$store.state.cartdata.count}}
      <button v-on:click="$store.dispatch('cartdata/updateCountAction')">商品を追加</button>
      <button v-on:click="$store.dispatch('cartdata/resetCountAction')">リセット</button>
      </p>
    </div>
    <hr>
    <div>
      <p>購入商品数
      {{$store.state.cartdata.count}}
      <button v-on:click="$store.dispatch('cartdata/updateCountAction')">商品を追加</button>
      <button v-on:click="$store.dispatch('cartdata/resetCountAction')">リセット</button>
      </p>
    </div>
    <hr>
    <div>
      <p>購入商品数
      {{$store.state.cartdata.count}}
      <button v-on:click="$store.dispatch('cartdata/updateCountAction')">商品を追加</button>
      <button v-on:click="$store.dispatch('cartdata/resetCountAction')">リセット</button>
      </p>
    </div>

  </section>
</template>

<script>
export default {
    data: function () {
    return {
      title: "ショッピングカート",
    };
  }
};
</script>
