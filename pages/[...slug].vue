<script setup lang="ts">
const route = useRoute();

const story = await useAsyncStoryblok(route.path, {
  version: "draft",
});

if (!story.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
