<template>
    <div class="main-portfolio__index">
        <h1><span>My</span> portfolio</h1>
        <img src="~/assets/arts-alliance-media.jpg" alt="Discover Nuxt 3" style="position:fixed" />
        <!-- <section>
            <nuxt-link v-for="(project, i) in projects.portfolio" :key="`project-${i}`" :to="`/portfolio/${project.slug}`">{{ project.title }}</nuxt-link>
        </section> -->
        <div class="main-portfolio__projects-container" :style="{ '--sectionNo': chunkedArrayLength }">
            <!-- <div > -->
                <TransitionGroup name="list" tag="div" v-for="(chunk, i) in chunkedArray" :key="i" class="main-portfolio__projects">
                <div v-for="(item, itemIndex) in chunk" :key="item" :style="{'--itemIndex': itemIndex }" class="main-portfolio__project-item">
                    <nuxt-link :to="`/portfolio/${item.slug}`" :title="item.title">
                        <span><strong>{{ item.title }}</strong></span>
                        <img :src="item.image[0]" loading="lazy" :alt="item.title" />
                    </nuxt-link>                    
                </div>
                </TransitionGroup>
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup>

const ultil = useUtil()
const projects = useProjectData()
const chunkSize = 6;


const { useChunkArray } = ultil
const { chunkedArray } = useChunkArray(projects.portfolio, chunkSize);

const chunkedArrayLength = computed(() => chunkedArray.length)

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})


</script>