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
