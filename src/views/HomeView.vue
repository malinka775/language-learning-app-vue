<template>
  <main>
    <base-card class="">Hello gnjknvd</base-card>
  </main>
</template>

<script setup>
import { useTestStore } from '../stores/test';
import {test} from '../api/testApi';

const testStore = useTestStore();

console.log('test id is',testStore.testId);

test()

</script>
