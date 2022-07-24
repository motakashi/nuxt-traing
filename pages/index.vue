<template>
  <section>
    <h1>{{ message }}</h1>
    <router-link to="/another">anotherPage</router-link>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello World",
    };
  },
};
</script>
