<!-- Options API -->

<script>
  export default {
    data() {
      return {
        name: 'John Doe',
        status: true,
        request: 'active',
        tasks: ['T1', 'T2', 'T3'],
        link: 'https://google.com'
      }
    },
    methods: {
      toggleStatus() {
        if (this.status) {
          this.status = false;
        } else {
          this.status = true;
        }
      }
    }
  }
</script>


<template>
  <div><h1>Vue_2024</h1></div>
  <div>{{ name }}</div>
  <p v-if="status">User is active</p>
  <p v-else="status">User is inactive</p>
  <p v-if="request === 'active'">Active</p>
  <p v-else-if="request === 'pending'">Pending</p>
  <p v-else>User is inactive</p>

  <h3>TASKS:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <a v-bind:href="link">link</a>
  <a :href="link">link</a>

  <button v-on:click="toggleStatus">Change Status</button>
  <button @click="toggleStatus">Change Status</button>
</template>

