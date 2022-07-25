<template>
  <section>
    <h1>{{ message }}</h1>
    <router-link to="/another">anotherPage</router-link>
    <p>{{users[0].name}}</p>
  </section>
</template>

<script>
const axios = require('axios');
let url = 'https://jsonplaceholder.typicode.com/users'

export default {
  asyncData({params}){
    return axios.get(url)
      .then((res) => {
        return {users: res.data}
      })
  },
  data: function () {
    return {
      message: "Hello World",
    };
  },
};
</script>
