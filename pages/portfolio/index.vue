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
/// main pinia store
import { useMainStore } from '~/store/index'
/// intersection observer composable
import { useIntersectionObserver } from '@vueuse/core'

/// utilities composable 
const ultil = useUtil()
/// project data composable
const projects = useProjectData()
/// route composable
const route = useRoute()
/// store composable
const store = useMainStore()

/// split value for project array
const chunkSize = 6;

/// does browser support @container
let supportsContainers = ref(false)

/// Intersection observer - on each of the project chunks
/// template ref for each array item in chunkedArray
const portfolioProjectGroup = ref();
/// not used - remove?
const targetIsVisible = ref(false)
/// index of currently intersecting portfolioProjectGroup
const projectGroupIndex = ref(0)

/// project currently consists on root path and /portfolio. Test to see if on root or not.
/// used to set value within pinia store
const isProjectPath = computed(() => route.path.split('/').filter(part => part !== ""))

// create a reactive state to store all projects - this is assigned onMounted
const portfolio = ref([])

/// filter portfolio based on value of store.filterBy
const filterProjects = computed(() => store.filterBy !== 'all' ? portfolio.value.filter(proj => proj.tags.some((entry) => entry.includes(store.filterBy)) ) : portfolio.value)

/// destructure useChunkArray function 
const { useChunkArray } = ultil
/// create comp prop for chunked portfolio 
const chunkedArray = computed(() => useChunkArray(filterProjects.value, chunkSize).chunkedArray)
/// length of chunkedArray
const chunkedArrayLength = computed(() => chunkedArray.value.length)

/// create a array of numbers based on chunkedArrayLength for use by dot indicators 
const markerRange = computed(() => {
    return Array.from({ length: chunkedArrayLength.value }, (value, index) => index)
})

/// create intersection observer to watch what chunked section is intersecting to update marker
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

/// set page transition name
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

onMounted(() => {    
    /// assign project portfolio data to portfolio state
    portfolio.value = projects.portfolio
    if (process.client) {
        // set project path - are we in portfolio
        store.projectPath = isProjectPath.value
        /// does client support container queries 
        supportsContainers.value = window.CSS ? window.CSS.supports('font-size', '1cqw') : false
        /// fake a loading screen
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