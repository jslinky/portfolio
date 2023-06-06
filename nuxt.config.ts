// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        "~/assets/style/main.scss", // you should add main.scss somewhere in your app
      ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'Justin Small - Front End Developer & Designer',
            meta: [
                { name: 'description', content: 'My portfolio - a showcase of my work from past to present'}
            ],
            link: [
                { rel: 'icon', sizes: 'any', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
              ],            
        }
    },      
    routeRules: {
        '/': { redirect: '/portfolio' },
    },    
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon'
    ],    
})
