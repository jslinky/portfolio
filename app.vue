<template>
  
    <!-- <NuxtWelcome /> -->
    <!-- <p>Hello world</p> -->
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
  
</template>

<script setup>

const route = useRoute()
const layout = computed(() => route.path == '/' ? 'index' : 'portfolio')

</script>

<style>

.rotate-enter-active,
.rotate-leave-active {
  transition: all 2.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.rotate-enter-from .main-portfolio__index > h1,
.rotate-leave-to .main-portfolio__index > h1,
.page-enter-from .main-portfolio__index > h1,
.page-leave-to .main-portfolio__index > h1 {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}

</style>