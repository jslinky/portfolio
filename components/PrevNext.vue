<template>
    <div class="main-portfolio__nav">
        <ul>
        <li><nuxt-link to="/portfolio" class="main-portfolio__back button">Back to portfolio</nuxt-link></li>
        <li>
          <nuxt-link :to="props.config.prevLink" class="main-portfolio__prev button">
            <span class="button__title">Prev</span>
            <!-- <span class="button__subtitle">{{ config.prevTitle }}</span>  -->
        </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="props.config.nextLink" class="main-portfolio__next button">
            <span class="button__title">Next</span>
            <!-- <span class="button_subtitle">{{ config.nextTitle }}</span> -->
        </nuxt-link>
        </li>
        </ul>
    </div>    
</template>

<script setup>

const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
});

</script>