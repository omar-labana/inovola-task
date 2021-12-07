<script setup>
</script>

<template>
    <div class="absolute left-14 -top-9 flex gap-2">
        <div class="flex flex-col gap-2" v-for="i in 12">
            <svg height="6" width="6" v-for="i in 12">
                <circle cx="3" cy="3" r="3" fill="#42A584" />
            </svg>
        </div>
    </div>
</template>

