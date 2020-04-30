<template>
  <div id="app" class="font-sans bg-gray-900 text-white h-screen">
    <navbar />
    <router-view class="bg-gray-900 " />
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
</style>
