<template>
  <div>
    <div class="form">
      <ul>
        <li v-for="todo in todos.todos" :key="todo.id">
          <span v-if="todo.created">
            <input type="checkbox" v-bind="todo.done" @change="toggle(todo)">
            <span v-bind:class="{done:todo.done}">{{ todo.done }} {{ todo.name }} {{ todo.created.toDate() | dateFilter }}</span>
            <button v-on:click="remove(todo.id)">削除</button>
          </span>
        </li>
      </ul>
      <!--preventによりページがリロードされない形になります。-->
      <form v-on:submit.prevent="add" >
        <input v-model="name">
        <button>追加</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment"
import { getters } from '~/store/todos'

  export default {
    data: function(){
      return {
        name: "",
        done: false
      }
    },
    // createdはページが読み込まれた時にアクションが実行される
    created: function() {
      this.$store.dispatch('todos/init')
    },
    methods: {
      add() {
        this.$store.dispatch('todos/add', this.name)
        this.name = ""
      },
      remove(id){
        this.$store.dispatch('todos/remove', id)
      },
      toggle(todo){
        this.$store.dispatch('todos/toggle', todo)
      }
    },
    // 表示時にデータを加工するためcomputedで処理
    computed: {
      todos(){
        return this.$store.state.todos
      }
    },
    filters:{
      dateFilter: function(date){
        return moment(date).format('YYYY/MM/DD HH:mm:ss')
      }
    }
  }
</script>


<style>
  li > span > span.done{
    text-decoration: line-through;
  }
</style>