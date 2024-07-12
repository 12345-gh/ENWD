<script setup>
import jobData from '@/jobs.json'
import {ref} from 'vue'
import JobListings from '@/components/JobListing.vue'

const jobs = ref(jobData);
console.log(`~~~~~ jobs ~~~~~`, jobs.value);
</script>

<template>
  <div>Jobs</div>
  <JobListings v-for="job in jobs.jobs" :key="job.id" :job="job"/>
</template>