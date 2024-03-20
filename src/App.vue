<template>
  <div id="app">
    <NavigationBar v-if="$route.meta.requiresHeader" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import router from './router/index.js';
import NavigationBar from './components/NavigationBar.vue';

const isAuthenticated = ref(false);

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isAuthenticated.value = !!user;
    if (user) {
      if (route.path === '/login') {
        router.push('/');
      }
    } else {
      if (route.path !== '/login') {
        router.push('/login');
      }
    }
  });
});
</script>

<style>

</style>