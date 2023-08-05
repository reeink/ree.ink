<script setup lang="ts">
import Giscus from "@giscus/vue";
import config from "@config";
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>

<template>
    <Giscus v-if="config.comments.type === 'giscus'" 
        id="giscus-comments"
        :host="config.comments.host"
        :repo="config.comments.repo"
        :repoId="config.comments.repoId"
        :category="config.comments.category"
        :categoryId="config.comments.categoryId"
        :mapping="config.comments.mapping"
        :term="config.comments.term"
        :theme="isDark ? config.comments.darkTheme : config.comments.lightTheme"
        :strict="config.comments.strict"
        :reactionsEnabled="config.comments.reactionsEnabled"
        :emitMetadata="config.comments.emitMetadata"
        :inputPosition="config.comments.inputPosition"
        :lang="config.comments.lang"
        :loading="config.comments.loading" />
</template>
