<template>
    <article class="main-portfolio__article" :class="{'next': store.step === 'next', 'prev': store.step === 'prev'}">
        <div class="main-portfolio__article-container">
            <div class="main-portfolio__visual">                
                <!-- <img src="~/assets/placeholder/mitchell-luo-SEuldZb2Avc-unsplash.jpg" /> -->
                <swiper-container
                    v-if="image.length > 1"
                    :slides-per-view="1"
                    :space-between="spaceBetween"
                    :navigation="false"
                    :effect= "fade"
                    :autoplay = "{
                        delay: 3000,
                    }"                
                    :centered-slides="true"
                    :pagination="{
                    hideOnClick: true
                    }"
                    :breakpoints="{
                    768: {
                        slidesPerView: 1,
                    },
                    }"
                    @progress="onProgress"
                    @slidechange="onSlideChange"
                >                
                    <swiper-slide v-for="(img, i) in image" :key="i">
                        <img :src="img" />
                    </swiper-slide>  
                </swiper-container>                          
                <template v-else>
                    <img :src="image[0]" />
                </template>
                <Spinner />
            </div> 
            <div class="main-portfolio__content flow">
                <Transition
                    @before-enter="onBeforeEnter"
                    @enter="onEnter"
                    @leave="onLeave"
                    @after-leave="onAfterLeave"
                    >
                <h2 class="main-portfolio__title">{{ title }}</h2>
                </Transition>
                <div class="main-portfolio__tags">
                    <button v-for="(tag, i) in tags" :key="i">{{ tag }}</button>
                </div>            
                <div v-if="description" v-html="description" class="main-portfolio__desc"></div>
                <div v-if="url">
                <h3>URLs</h3>
                <a :href="link" rel="external" v-for="(link, i) in url" :key="i">{{ link }}</a>
                </div>
            </div>
        </div>

        <PrevNext :config="{nextLink, prevLink, nextTitle, prevTitle}" />        

    </article>
</template>

<script setup>

import { useMainStore } from '~/store/index'
import { register } from 'swiper/element/bundle';

register();

const projects = useProjectData()
const route = useRoute()
const store = useMainStore()


const spaceBetween = 0;

const projArr = computed(() => {
    return projects.portfolio.map((proj, index) => {
        proj.id = index
        return proj
    })
})

const project = computed(() => projArr.value.find((proj) => proj.slug === route.params.project)) 
const { title, description, image, url } = project.value

// const projectIndex = computed(() => prodArr.value.map((proj) => proj.slug).indexOf(project.value.slug))
const projectIndex = computed(() => project.value.id)
const projectsLength = computed(() => projArr.value.length - 1)


const isNext = computed(() => projectIndex.value + 1 <= projectsLength.value)
const isPrev = computed(() => projectIndex.value - 1 >= 0)

const nextLink = computed(() => isNext.value ? `/portfolio/${projArr.value[projectIndex.value + 1].slug}` : `/portfolio/${projArr.value[0].slug}`)
const prevLink = computed(() => isPrev.value ? `/portfolio/${projArr.value[projectIndex.value - 1].slug}` : `/portfolio/${projArr.value[projArr.value.length - 1].slug}`)

const nextTitle = computed(() => isNext.value ? `${projArr.value[projectIndex.value + 1].title}` : `${projArr.value[0].title}`)
const prevTitle = computed(() => isPrev.value ? `${projArr.value[projectIndex.value - 1].title}` : `${projArr.value[0].title}`)

const tags = computed(() => {
    return project.value.tags
})

// function getPageIndex(route) {
//     return projects.portfolio.findIndex((proj) => proj.slug === route.params.project)
// }

onBeforeRouteUpdate((to, from) => {
    const fromId = projArr.value.find((proj) => from.params.project === proj.slug).id
    const toId = projArr.value.find((proj) => to.params.project === proj.slug).id
    toId > fromId ? store.setStep('next') : store.setStep('prev')
})


</script>

<style scoped>

.article-root {
    height:100%;
}

</style>