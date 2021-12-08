<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue';
import Featured from './components/Featured.vue';
import Special from './components/Special.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <Hero />
  <Featured />
  <Special />
  <Footer />
  <button class="fixed bottom-4 right-4 p-4 rounded-full bg-tert">
    <img src="./assets/chat.svg" alt="" class="w-8">
  </button>
  <button class="fixed bottom-4 left-4 p-3 rounded-full bg-tert">
    <img src="./assets/arrow.svg" alt="" class="w-6">
  </button>
</template>

<style>
</style>
