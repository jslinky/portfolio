<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
  
</template>

<script setup>

const route = useRoute()
const layout = computed(() => route.path == '/' ? 'index' : 'portfolio')

</script>