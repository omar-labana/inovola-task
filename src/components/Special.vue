<script setup>
import { SpecialHeader, SpeciaSublHeader, SpeacialCard, HeroButton } from '../../text'

</script>

<template>
    <section class="py-20">
        <h2 class="text-3xl font-bold text-center text-pri">{{ SpecialHeader }}</h2>
        <h3 class="text-center">{{ SpeciaSublHeader }}</h3>
        <ul class="flex gap-2 items-center justify-center my-10">
            <li class="flex flex-row-reverse bg-spec p-3 rounded-lg" v-for="i in 4">
                <img
                    src="../assets/store.svg"
                    alt="Cool descriptive alt attr"
                    class="self-start p-3 bg-tert rounded-lg"
                />
                <div class="pr-2">
                    <div>
                        <div class="flex gap-3 flex-row-reverse">
                            <h4 class="text-pri font-bold">{{ SpeacialCard.name }}</h4>
                            <p>{{ SpeacialCard.nos }}</p>
                        </div>
                        <p class="text-sm text-right">تطوير: <span>{{ SpeacialCard.creator }}</span></p>
                    </div>
                    <div class="flex flex-col text-xs text-right">
                        <p>{{ SpeacialCard.description }}</p>
                        <p>{{ SpeacialCard.description }}</p>
                    </div>
                </div>
            </li>
        </ul>
        <a href="#" class="text-xl text-center block text-sec font-bold rounded-lg px-20 py-4">
            <span class="mr-3">&#60;</span>
            {{ HeroButton }}
        </a>
    </section>
</template>

<style scoped>
</style>
