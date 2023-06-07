<template>
    <main class="main-portfolio">        
        <header class="header" :class="{'header--project': store.projectPath.length > 1 }">
            <!-- <header class="header"> -->
            <!-- <header class="header"> -->
            <div class="header__inner">
                <nuxt-link to="/portfolio" title="Back to portfolio" class="c-logo-link">
                    <Logo />
                    <div class="c-logo-name">Justin Small</div>
                </nuxt-link> 
            </div>
        </header>
        <section ref="section">
            <FilterMenu v-if="!store.portfolioIndexLoading" />
            <NuxtPage />            
        </section>
    </main>
</template>

<script setup>
import { useMainStore } from '~/store/index'
import { applySlidingAnimations } from '~/composables/scrollHeader';

const store = useMainStore()

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

onMounted(() => {
    applySlidingAnimations(config)
})


</script>