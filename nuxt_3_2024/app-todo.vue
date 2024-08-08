<script>
import { defineNuxtComponent } from '#app';


export default defineNuxtComponent({
  data: () => ({
    todoList: [],
  }),
  computed: {
    completedItems() {
      return this.todoList.filter(item => item.completed === true)
    }
  },
  methods: {
    fetchTodoList() {
      fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => this.todoList = json)
    }
  },
  mounted() {
    this.fetchTodoList();
  }
})
</script>

<template>
  <div>
    <img src="/photo1.avif" width="600" height="300" />
    <p>{{ completedItems.length }} completed</p>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <input type="checkbox" :checked="todo.completed">
        {{ todo.title }}
      </li>
    </ul>

    <pre>
      {{ todoList }}
    </pre>
  </div>
</template>
