<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>


<template>
    <nav class="top-nav" flex="~ items-center" h-15 z-10 fixed top-0 inset-x-0 mx-4 backdrop-blur-lg>
        <section class="logo" mr-auto aspect-square h-full flex-center>
            <a href="/" font-display text-lg>Ree</a>
        </section>
        <section class="navigations" grid="~ gap-6 flow-col place-items-center" text-sm>
            <a href="/posts" class="<sm:i-ph-article <sm:text-lg">Posts</a>
            <button class="icon" @click="toggleDark()" i-ph-sun dark:i-ph-moon>
            </button>
        </section>
    </nav>
</template>


<style lang="scss" scoped>
.navigations {
    * {
        --at-apply: color-contrast-medium hover:color-contrast-higher ease duration-300;
    }

    .icon {
        --at-apply: text-lg;
    }
}
</style>


