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

<style lang="scss">

.rotate-enter-active,
.rotate-leave-active {
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
  .main-portfolio__projects-container {
    transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  .main-portfolio__projects-container {
    transform: rotate3d(1, 1, 1, 15deg);
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
  .main-portfolio__visual {
    transition: all 0.4s ease-in;
  }
}
/*.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  &.next main-portfolio__visual img {
    transform: translateX(-100%)
  }  
  .main-portfolio__visual img {
    transform: translateX(-100%)
  }  
  &.prev .main-portfolio__visual img {
    transform: translateX(100%)
  }    
}*/


.page-enter-from.next {
  .main-portfolio__visual {
    transform: translateY(100%) translateZ(1000px);
  }
}

.page-enter-to.next {
  .main-portfolio__visual {
    transform: translateY(0%);
  }
}

.page-leave-to.next {
  .main-portfolio__visual {
    transform: translateY(-300%) translateZ(-1000px);

  }
}



.page-enter-from.prev {
  .main-portfolio__visual {
    transform: translateY(-300%) translateZ(-1000px);    
  }
}

.page-enter-to.prev {
  .main-portfolio__visual {
    transform: translateY(0%);
  }
}

.page-leave-to.prev {
  .main-portfolio__visual {
    transform: translateY(100%) translateZ(1000px);
  }
}


</style>