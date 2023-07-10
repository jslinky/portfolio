<template>
    <article class="main-portfolio__article" :class="{'next': store.step === 'next', 'prev': store.step === 'prev'}">
        <div class="main-portfolio__article-container">
            <div class="main-portfolio__visual">                
                <!-- <img src="~/assets/placeholder/mitchell-luo-SEuldZb2Avc-unsplash.jpg" /> -->
                <swiper-container
                    v-if="images.length > 1"
                    :slides-per-view="1"
                    :space-between="spaceBetween"
                    :navigation="true"
                    :centered-slides="true"
                    :autoplay = "{
                        delay: 5000,
                    }"                        
                >                
                    <swiper-slide v-for="(img, i) in images" :key="i">                        
                        <VideoPlayer :videoId="img.videoId" v-if="img.videoId" />                        
                        <img v-else :src="img.url" :alt="img.alt.length > 0 ? img.alt : title" />
                    </swiper-slide>  
                </swiper-container>                          
                <template v-else>
                    <VideoPlayer :videoId="images[0].videoId" v-if="images[0].videoId" />
                    <img v-else :src="images[0].url" :alt="images[0].alt.length > 0 ? images[0].alt : title" />
                </template>
                <Spinner />
            </div> 
            <div class="main-portfolio__content">
                <Transition>
                <h2 class="main-portfolio__title">{{ title }}</h2>
                </Transition>
                <ul class="main-portfolio__tags">                    
                    <li v-for="(tag, i) in tags" :key="i">
                        <Icon v-if="tag === 'html'" name="devicon-plain:html5-wordmark" color="black" />
                        <Icon v-if="tag === 'typescript'" name="simple-icons:typescript" color="black" />       
                        <Icon v-if="tag === 'design'" name="ci:figma" color="black" />   
                        <Icon v-if="tag === 'scss'" name="bi:filetype-scss" color="black" />
                        <Icon v-if="tag === 'css'" name="bi:filetype-css" color="black" />
                        <Icon v-if="tag === 'vue'" name="ph:file-vue" color="black" />
                        <Icon v-if="tag === 'pinia'" name="logos:pinia" color="black" /> 
                        <Icon v-if="tag === 'animation'" name="clarity:animation-line" color="black" /> 
                        <Icon v-if="tag === 'javascript'" name="mdi:language-javascript" color="black" />                                               
                        {{ tag }}
                    </li>
                </ul>            
                <div v-if="description" v-html="description" class="main-portfolio__desc flow"></div>
                <div v-if="url" class="main-portfolio__url">
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

/// get projects data
const projects = useProjectData()
/// route composable 
const route = useRoute()
/// store composable 
const store = useMainStore()

/// value for swiper space-between slides
const spaceBetween = 0;

/// create a new project array for portfolio data 
const projArr = computed(() => {
    let portfolio = null
    if(store.filterBy !== 'all') {
        portfolio = projects.portfolio.filter(proj => proj.tags.some((entry) => entry.includes(store.filterBy)))
    } else {
        portfolio = projects.portfolio   
    }
    /// improvement - could use indexOf instead?
    return portfolio.map((proj, index) => {
        proj.id = index
        return proj
    })
})

/// Was doing the same as in projArr computed prop - the only function for this watcher is to redirect to /portfolio
watchEffect(() => {
//   let portfolio = null
//   if(store.filterBy !== 'all') {
//     portfolio = projects.portfolio.filter(proj => proj.tags.some((entry) => entry.includes(store.filterBy)))
//   } else {
//     portfolio = projects.portfolio   
//   }
  
//   const projArr = portfolio.map((proj, index) => {
//     proj.id = index
//     return proj
//   })

  const project = projArr.value.find((proj) => proj.slug === route.params.project)

  if (!project) {
    navigateTo('/portfolio')  // Or push to the route you prefer
  }
})




/// comp prop which returns the currently viewed project (based on the project slug matching the route params)
const project = computed(() => projArr.value.find((proj) => proj.slug === route.params.project)) 
/// destructure bits and bots for template
const { title, description, images, url } = project.value

/// Get index of project from projArr
/// improvement - could use indexOf method instead. eg. computed(() => projArr.value.indexOf(project.value))
const projectIndex = computed(() => project.value.id)
const projectsLength = computed(() => projArr.value.length - 1)

/// is there a next project in projArr?
const isNext = computed(() => projectIndex.value + 1 <= projectsLength.value)
/// is there a prev project in projArr?
const isPrev = computed(() => projectIndex.value - 1 >= 0)
/// set URL for next link
const nextLink = computed(() => isNext.value ? `/portfolio/${projArr.value[projectIndex.value + 1].slug}` : `/portfolio/${projArr.value[0].slug}`)
/// set URL for prev link
const prevLink = computed(() => isPrev.value ? `/portfolio/${projArr.value[projectIndex.value - 1].slug}` : `/portfolio/${projArr.value[projArr.value.length - 1].slug}`)

const nextTitle = computed(() => isNext.value ? `${projArr.value[projectIndex.value + 1].title}` : `${projArr.value[0].title}`)
const prevTitle = computed(() => isPrev.value ? `${projArr.value[projectIndex.value - 1].title}` : `${projArr.value[0].title}`)

const tags = computed(() => {
    return project.value.tags
})

/// project currently consists on root path and /portfolio. Test to see if on root or not.
/// used to set value within pinia store
const isProjectPath = computed(() => route.path.split('/').filter(part => part !== ""))

onMounted(() => {
    store.projectPath = isProjectPath.value
})

/// is the route going next or prev? setting a class to change route animation
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