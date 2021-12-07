<script setup>
import { HeroButton, FeaturedHeading, FeaturedSubHeading, FeaturedList } from '../../text'
import Circle from './fragments/Circle.vue'
import Grid from './fragments/Grid.vue'

</script>

<template>
    <section class="flex flex-row-reverse justify-between bg-feat py-20">
        <div class="flex-1 text-right my-10 p-10">
            <h2 class="text-pri text-3xl font-bold">{{ FeaturedHeading }}</h2>
            <ul class="flex flex-col gap-5 items-end my-5 font-medium">
                <li v-for="item in FeaturedList" class="flex gap-3 items-center">
                    <p>{{ item.title }}</p>
                    <img :src="`/src/assets/${item.icon}.svg`" :alt="item.icon" class="bg-white p-4 rounded-full filter drop-shadow-2xlnp"/>
                </li>
            </ul>
        </div>
        <div class="relative my-10 z-0 flex justify-center flex-1">
            <img
                src="../assets/hero.gif"
                class="relative rounded-3xl z-10 w-3/4"
                alt="Cool gif card"
            />
            <Circle />
            <Grid />
        </div>
    </section>
</template>

<style scoped>
</style>
