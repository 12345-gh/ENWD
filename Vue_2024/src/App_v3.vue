<!-- Composition API -->

<!-- LONG Version -->
<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('John Doe');
    const status = ref(true);
    const request = ref('active');
    const tasks = ref(['T1', 'T2', 'T3']);

    const toggleStatus = () => {
      if (status.value) {
        status.value = false;
      } else {
        status.value = true;
      }
    };


    return {
      name,
      status,
      request,
      tasks,
      toggleStatus
    }
  }
}
</script> -->

<!-- SHORT Version -->
<script setup>
import { ref } from 'vue';

const name = ref('John Doe');
const status = ref(true);
const request = ref('active');
const tasks = ref(['T1', 'T2', 'T3']);

const toggleStatus = () => {
  if (status.value) {
    status.value = false;
  } else {
    status.value = true;
  }
};
</script>



<template>
  <div>
    <h1>Vue_2024</h1>
  </div>
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

  <button v-on:click="toggleStatus">Change Status</button>
  <button @click="toggleStatus">Change Status</button>

</template>
