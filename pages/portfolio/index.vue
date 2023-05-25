<template>
    <div class="main-portfolio__index" v-if="supportsContainers && !isLoading">
        <h1><span>My</span> portfolio</h1>
        <!-- <section>
            <nuxt-link v-for="(project, i) in projects.portfolio" :key="`project-${i}`" :to="`/portfolio/${project.slug}`">{{ project.title }}</nuxt-link>
        </section> -->
        <div class="main-portfolio__projects-container" :style="{ '--sectionNo': chunkedArrayLength }">
            <!-- <div > -->
                <TransitionGroup name="list" tag="div" v-for="(chunk, i) in chunkedArray" :key="i" class="main-portfolio__projects">
                <div v-for="(item, itemIndex) in chunk" :key="item" :style="{'--itemIndex': itemIndex }" class="main-portfolio__project-item">
                    <nuxt-link :to="`/portfolio/${item.slug}`" :title="item.title">
                        <span><strong>{{ item.title }}</strong></span>
                        <img :src="item.images[0].url" loading="lazy" :alt="item.title" />
                    </nuxt-link>                    
                </div>
                </TransitionGroup>
            <!-- </div> -->
        </div>
    </div>
    <div v-else class="not-supported container">
        <div v-if="isLoading">
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


const { useChunkArray } = ultil
const { chunkedArray } = useChunkArray(projects.portfolio, chunkSize);

const chunkedArrayLength = computed(() => chunkedArray.length)

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

let supportsContainers = ref(false)
let isLoading = ref(true)

const isProjectPath = computed(() => route.path.split('/').filter(part => part !== ""))

onMounted(() => {
    if (process.client) {
        store.projectPath = isProjectPath.value
        supportsContainers.value = window.CSS ? window.CSS.supports('font-size', '1cqw') : false
        window.setTimeout(() => {
            isLoading.value = false
        }, 1000)
    } 

})



</script>