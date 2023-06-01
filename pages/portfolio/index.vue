<template>
    <div class="main-portfolio__index" v-if="supportsContainers">
        <h1><span>My</span> portfolio</h1>
        <!-- <section>
            <nuxt-link v-for="(project, i) in projects.portfolio" :key="`project-${i}`" :to="`/portfolio/${project.slug}`">{{ project.title }}</nuxt-link>
        </section> -->
        <div v-if="!store.portfolioIndexLoading" class="main-portfolio__projects-container" :class="{ 'main-portfolio__projects-container--fade': store.isFilterOpen }" :style="{ '--sectionNo': chunkedArrayLength }">
                <TransitionGroup name="list" tag="div" v-for="(chunk, i) in chunkedArray" :key="i" class="main-portfolio__projects">
                <div v-for="(item, itemIndex) in chunk" :key="item" :style="{'--itemIndex': itemIndex }" class="main-portfolio__project-item">
                    <nuxt-link :to="`/portfolio/${item.slug}`" :title="item.title">
                        <span><strong>{{ item.title }}</strong></span>
                        <img :src="item.images[0].url" loading="lazy" :alt="item.title" />
                    </nuxt-link>                    
                </div>
                </TransitionGroup>
        </div>
        <div class="spinner-invert" v-else>
            <Spinner />
        </div>     
    </div>
    <!-- <NotSupported v-else /> -->
    <div v-else class="not-supported container">
        <div v-if="store.portfolioIndexLoading">
            <Spinner />
        </div> 
        <div v-else>
            <h2 class="heading heading--6xl">Whoa, dude!</h2>
            <p class="text-m">Your browser's like, totally outta time, man. It's missing out on our cool container queries. Time for a journey, upgrade that bad boy to the here and now. Surf the web waves with us, man!</p>
        </div>
    </div>
</template>


<script setup>
import { useMainStore } from '~/store/index'
const ultil = useUtil()
const projects = useProjectData()
const route = useRoute()
const store = useMainStore()
const chunkSize = 6;
let supportsContainers = ref(false)
const isVisible = ref(false)

const isProjectPath = computed(() => route.path.split('/').filter(part => part !== ""))

const portfolio = ref([])
const filterProjects = computed(() => store.filterBy !== 'all' ? portfolio.value.filter((proj) => proj.tags.indexOf(store.filterBy) !== -1) : portfolio.value)

const { useChunkArray } = ultil
// const { chunkedArray } = useChunkArray(projects.portfolio, chunkSize);
const chunkedArray = computed(() => useChunkArray(filterProjects.value, chunkSize).chunkedArray)

const chunkedArrayLength = computed(() => chunkedArray.value.length)

watch(filterProjects, (oldX, newX) => {
//   console.log(`filterProjects old is ${oldX}. filterProjects new is ${newX.length}`)
})

// const { stop } = useIntersectionObserver(
//     target,
//     ([{ isIntersecting }], observerElement) => {
//     targetIsVisible.value = isIntersecting
//     },
// )

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

onMounted(() => {    
    portfolio.value = projects.portfolio
    if (process.client) {
        store.projectPath = isProjectPath.value
        supportsContainers.value = window.CSS ? window.CSS.supports('font-size', '1cqw') : false
        window.setTimeout(() => {
            store.portfolioIndexLoading = false
        }, 1000)
    } 
})


</script>

<style>

.filterList-enter-active, .filterList-leave-active {
    transition: all 0.3s ease;
}
  
.filterList-enter, .filterList-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.filterList-move {
    transition: transform 0.5s;
}

</style>