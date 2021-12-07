<script setup>
import { HeroHeader, HeroSubHeader, HeroButton } from '../../text'
import Circle from './fragments/Circle.vue'
import Grid from './fragments/Grid.vue'

</script>

<template>
    <section class="flex flex-col gap-10 items-center justify-center my-20">
        <h1 class="text-4xl font-bold text-center text-pri">{{ HeroHeader }}</h1>
        <h2 class="w-2/5 text-center text-lg font-semibold">{{ HeroSubHeader }}</h2>
        <a href="#" class="text-xl bg-pri text-sec font-bold rounded-lg px-20 py-4">
            <span class="mr-3">&#60;</span>
            {{ HeroButton }}
        </a>
        <div class="relative my-16 z-0 flex justify-center">
            <img src="../assets/hero.gif" class="relative rounded-3xl z-10 w-3/4" alt="Cool gif card" /> 
            <Circle />
            <Grid />
        </div>
    </section>
</template>

<style scoped>
</style>
