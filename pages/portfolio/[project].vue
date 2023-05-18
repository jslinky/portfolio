<template>
    
    <article class="main-portfolio__article">
        <div class="main-portfolio__article-container">
            <div class="main-portfolio__visual">
                <!-- <img src="~/assets/placeholder/mitchell-luo-SEuldZb2Avc-unsplash.jpg" /> -->
                <swiper-container
                :slides-per-view="1"
                :space-between="spaceBetween"
                :navigation="true"
                :fadeEffect= "{
                    crossFade: true
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

                <swiper-slide>
                    <img :src="image" />
                </swiper-slide>                
            </swiper-container>            
            </div> 
            <div class="main-portfolio__content flow">
                <h2 class="main-portfolio__title">{{ title }}</h2>
                <div class="main-portfolio__tags">
                    <button v-for="(tag, i) in tags" :key="i">{{ tag }}</button>
                </div>            
                <div v-html="description" class="main-portfolio__desc"></div>
                <p>{{ image }}</p>
                <h3>URLs</h3>
                <a :href="link" rel="external" v-for="(link, i) in url" :key="i">{{ link }}</a>
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

const spaceBetween = 10;
const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress)
};

const onSlideChange = (e) => {
    console.log('slide changed')
}

const project = computed(() => projects.portfolio.find((proj) => proj.slug === route.params.project)) 
const { title, description, image, url } = project.value

const projectIndex = computed(() => projects.portfolio.map((proj) => proj.slug).indexOf(project.value.slug))
const projectsLength = computed(() => projects.portfolio.length - 1)

const isNext = computed(() => projectIndex.value + 1 <= projectsLength.value)
const isPrev = computed(() => projectIndex.value - 1 >= 0)

const nextLink = computed(() => isNext.value ? `/portfolio/${projects.portfolio[projectIndex.value + 1].slug}` : `/portfolio/${projects.portfolio[0].slug}`)
const prevLink = computed(() => isPrev.value ? `/portfolio/${projects.portfolio[projectIndex.value - 1].slug}` : `/portfolio/${projects.portfolio[0].slug}`)

const nextTitle = computed(() => isNext.value ? `${projects.portfolio[projectIndex.value + 1].title}` : `${projects.portfolio[0].title}`)
const prevTitle = computed(() => isPrev.value ? `${projects.portfolio[projectIndex.value - 1].title}` : `${projects.portfolio[0].title}`)

const tags = computed(() => {
    return project.value.tags
})


</script>