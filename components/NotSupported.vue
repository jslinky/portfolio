<template>
    <div class="not-supported container">
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
const store = useMainStore()

</script>