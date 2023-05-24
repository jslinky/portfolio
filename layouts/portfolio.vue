<template>
    <main class="main-portfolio">        
        <header class="header" :class="{'header--project': isProjectPath}">
            <div class="header__inner">
                <nuxt-link to="/portfolio" title="Back to portfolio">
                    <Logo /><p style="position:fixed">{{ x }} {{ y }}</p>
                </nuxt-link> 
            </div>
        </header>
        <section ref="section">
            <NuxtPage />
        </section>
    </main>
</template>

<script setup>
const route = useRoute()

import { applySlidingAnimations } from '~/composables/scrollHeader';

const config = {
    value: true,
    scrollEl: 'section',
    elements: [".header"],
    keyframes: [
        [
            {
                transform: "translateY(0%)"
            },
            {
                transform: "translateY(-100%)"
            }
        ],
    ],
    animationOptions: {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
    }    
} 

const isProjectPath = computed(() => route.path.split('/').length > 2)

onMounted(() => {
    if (process.client) {
        applySlidingAnimations(config)       
    }
})


</script>