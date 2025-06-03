<script setup lang="ts">
const story = await useAsyncStoryblok("home", {
  version: "draft",
});

if (!story.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
