<script setup>
import { HeaderNavigation } from '../../text'
</script>

<template>
  <header class="flex items-center flex-row-reverse gap-10 my-4 max-w-5xl mx-auto md:px-10">
    <img src="../assets/header-ar.png" alt="Main logo image" class="w-40"/>
    <ul class="flex items-center gap-10 flex-row-reverse text-lg font-medium">
      <li v-for="link in HeaderNavigation">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
</style>
