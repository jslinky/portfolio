// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        "~/assets/style/main.scss", // you should add main.scss somewhere in your app
      ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },      
    routeRules: {
        '/': { redirect: '/portfolio' },
    },    
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
      ],    
})
