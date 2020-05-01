<template>
  <div id="app" class="font-sans bg-gray-900 text-white ">
    <navbar />
    <router-view class=""/>
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
