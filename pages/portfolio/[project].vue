<template>
    
    <article class="main-portfolio__article">
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
                    <img :src="image" />
                </template>
                <Spinner />
            </div> 
            <div class="main-portfolio__content flow">
                <h2 class="main-portfolio__title">{{ title }}</h2>
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

import { register } from 'swiper/element/bundle';

register();

const projects = useProjectData()
const route = useRoute()

// definePageMeta({
//   pageTransition: {
//     name: 'custom-flip',
//     mode: 'out-in',
//     onBeforeEnter: (el) => {},
//     onEnter: (el, done) => {},
//     onAfterEnter: (el) => {}
//   }
// })


const spaceBetween = 0;
// const onProgress = (e) => {
//     const [swiper, progress] = e.detail;
//     console.log(progress)
// };

// const onSlideChange = (e) => {
//     console.log('slide changed')
// }

const project = computed(() => projects.portfolio.find((proj) => proj.slug === route.params.project)) 
const { title, description, image, url } = project.value

const projectIndex = computed(() => projects.portfolio.map((proj) => proj.slug).indexOf(project.value.slug))
const projectsLength = computed(() => projects.portfolio.length - 1)

const isNext = computed(() => projectIndex.value + 1 <= projectsLength.value)
const isPrev = computed(() => projectIndex.value - 1 >= 0)

const nextLink = computed(() => isNext.value ? `/portfolio/${projects.portfolio[projectIndex.value + 1].slug}` : `/portfolio/${projects.portfolio[0].slug}`)
const prevLink = computed(() => isPrev.value ? `/portfolio/${projects.portfolio[projectIndex.value - 1].slug}` : `/portfolio/${projects.portfolio[projects.portfolio.length - 1].slug}`)

const nextTitle = computed(() => isNext.value ? `${projects.portfolio[projectIndex.value + 1].title}` : `${projects.portfolio[0].title}`)
const prevTitle = computed(() => isPrev.value ? `${projects.portfolio[projectIndex.value - 1].title}` : `${projects.portfolio[0].title}`)

const tags = computed(() => {
    return project.value.tags
})

function getPageIndex(route) {
    return projects.portfolio.findIndex((proj) => proj.slug === route.params.project)
}

</script>