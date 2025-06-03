<script setup lang="ts">
const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <header class="py-5 bg-gray-100">
    <nav class="container mx-auto">
      <ul class="flex space-x-6">
        <li v-for="page in pages">
          <NuxtLink :to="page.path">
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
