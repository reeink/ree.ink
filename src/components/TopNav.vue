<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Icon from './Icon.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>


<template>
    <nav class="top-nav" flex="~ items-center" h-15 z-10 fixed top-0 inset-x-0 px-6 backdrop-blur-md>
        <section class="logo" mr-auto flex-center>
            <a href="/" title="Home">
                <Icon h-8 w-8 ease-out duration-500
                fill-color="var(--color-contrast-medium)" />
            </a>
        </section>
        <section class="navigations" grid="~ gap-4 flow-col place-items-center" text-sm>
            <a href="/posts" class="<sm:i-ph-article <sm:text-lg">Posts</a>
            <a href="https://github.com/reeink" class="icon i-ph-github-logo" rel="me" title="Github" target="_blank">Github</a>
            <a href="https://ree.zone/@reeink" class="icon i-ri-mastodon-line" title="Mastodon: @reeink@ree.zone" target="_blank">Mastodon</a>
            <a href="/rss.xml" class="icon i-ph-rss" title="RSS" data-astro-reload />
            <button class="icon" @click="toggleDark()" i-ph-sun dark:i-ph-moon :title="isDark ? 'dark theme' : 'light theme'">
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


