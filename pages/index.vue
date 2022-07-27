<template>
  <section class="container">
    <h1>{{ message }}</h1>
    <router-link to="/another">anotherPage</router-link>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}, {{ user.name }} ({{user.company.name}})
      </li>
    </ul>
    <img src="./../assets/cat.jpg" alt="画像テスト">
    <div>
      <!--p>Vuexクラシックモード</p-->
      <!--p>{{$store.state.message}}</p-->
      <!--button v-on:click="$store.commit('updateMessage', 'ミューテーションからペイロード引数で更新')">ミューテーションからのStoreデータの更新</button-->
      <!--button v-on:click="$store.dispatch('updateMessageAction', 'アクションからペイロード引数で更新')">アクションからのStoreデータの更新</button-->
    </div>
    <div>
      <p>Vuexモジュールモード</p>
      <p>{{$store.state.modulemode.message}}</p>
      <button v-on:click="$store.commit('modulemode/updateMessage', 'ミューテーションからペイロード引数で更新')">ミューテーションからのStoreデータの更新</button>
      <button v-on:click="$store.dispatch('modulemode/updateMessageAction', 'アクションからペイロード引数で更新')">アクションからのStoreデータの更新</button>
    </div>

  </section>

</template>

<script>
const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/users";

export default {
  asyncData({ params, error }) {
    return axios.get(url)
    .then((res) => {
      return { users: res.data };
    })
    .catch((e => {
      error({ statusCode: e.response.status, message: e.message})
    }))
  },
  data: function () {
    return {
      message: "Hello World",
    };
  },
};
</script>
