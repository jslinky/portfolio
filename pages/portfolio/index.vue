<template>
    <div class="main-portfolio__index" v-if="supportsContainers">
        <h1><span>My</span> portfolio</h1>
        <CvIcon />
        <div v-if="!store.portfolioIndexLoading" class="main-portfolio__projects-container" :class="{ 'main-portfolio__projects-container--fade': store.isFilterOpen }">
                <TransitionGroup name="list" tag="div" v-for="(chunk, i) in chunkedArray" :key="i" :data-index="i" class="main-portfolio__projects" ref="portfolioProjectGroup">
                <div v-for="(item, itemIndex) in chunk" :key="item" :style="{'--itemIndex': itemIndex }" class="main-portfolio__project-item">
                    <nuxt-link :to="`/portfolio/${item.slug}`" :title="item.title">
                        <span><strong>{{ item.title }}</strong></span>
                        <img :src="item.images[0].url" :alt="item.title" />
                    </nuxt-link>                    
                </div>
                </TransitionGroup>
        </div>
        <div class="spinner-invert" v-else>
            <Spinner />
        </div> 
        <div class="main-portfolio__markers" v-if="!store.portfolioIndexLoading">
            <ul>
                <li v-for="(no, i) in markerRange" :key="no" :class="{ 'active': i === parseInt(projectGroupIndex)}"><span>{{ i }}</span></li>
            </ul>
        </div>            
    </div>
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
import { useIntersectionObserver } from '@vueuse/core'

const ultil = useUtil()
const projects = useProjectData()
const route = useRoute()
const store = useMainStore()
const chunkSize = 6;
let supportsContainers = ref(false)

// Intersection observer
const portfolioProjectGroup = ref();
const targetIsVisible = ref(false)
const projectGroupIndex = ref(0)

const isProjectPath = computed(() => route.path.split('/').filter(part => part !== ""))

const portfolio = ref([])
const filterProjects = computed(() => store.filterBy !== 'all' ? portfolio.value.filter(proj => proj.tags.some((entry) => entry.includes(store.filterBy)) ) : portfolio.value)


const { useChunkArray } = ultil
// const { chunkedArray } = useChunkArray(projects.portfolio, chunkSize);
const chunkedArray = computed(() => useChunkArray(filterProjects.value, chunkSize).chunkedArray)

const chunkedArrayLength = computed(() => chunkedArray.value.length)

const markerRange = computed(() => {
    return Array.from({ length: chunkedArrayLength.value }, (value, index) => index)
})


watch(filterProjects, (oldX, newX) => {
//   console.log(`filterProjects old is ${oldX}. filterProjects new is ${newX.length}`)
})

const { stop } = useIntersectionObserver(
    portfolioProjectGroup,
    ([{ isIntersecting, target }], observerElement) => {
        if(isIntersecting) {
            projectGroupIndex.value = target.dataset.index 
            console.log(projectGroupIndex.value)
        }
    targetIsVisible.value = isIntersecting
    // console.log(targetIsVisible.value, target.dataset.index)
    },
    {
        /// fix for iOS safari
        threshold: 0.9,
    }
)

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