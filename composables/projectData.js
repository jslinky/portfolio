export default {
    title: 'Justin Small Portfolio',
    portfolio: [
        {
            title: "Competition framework",
            slug: "competition-framework",
            description: `<h3>Overview</h3>

            <p>One of Holograph's key offerings has been creating end-to-end consumer competition campaigns. A QR code takes the consumer to a form which collates data for the competition including name, age range, location, purchase location etc. Redeemable codes can be sent out as instant prize wins or winners can be selected using a fulfilment interface. Associated branded dashboards give valuable insight into key metric campaign data.</p>
            <details>
            <summary>
            Role
            </summary>
            <div>
            <p>With the company having had some experience in creating a number of these campaigns in the past, each offering was a bespoke project. This became a time-consuming process. We wanted to move away from this custom, somewhat ad hoc approach and produce a competition framework, in which a new instance could be spun up in moments, while at the same time being highly configurable from a config file. </p>
            
            <p>I set up to identify and produce a report on what steps we could take realise this vision. At the same time I produced a prototype from what this might look like from a front-end perspective.</p>
            
            <ul>
            <li>A new core page layout structure</li>
            <li>A new style-config JSON file allowing for layout and styling configuration</li>
            <li>A core SCSS codebase built alongside the template for quick CSS property overrides</li>
            <li>Extensive use of CSS custom properties for theming and global style values</li>
            <li>Codebase rewritten using vue3 with components and pinia for global storage.</li>
            </ul>
            </div>
            </details>
            `,
            image: ["./competition-form.png", "~/assets/comp-template-option-1.png", "/_nuxt/assets/comp-template-option-2.png"],
            // url: "http://project1.example.com",
            tags: ['design', 'html', 'css', 'typescript', 'vue', 'pinia', 'UI']
        },
        {
            title: "Competition dashboard",
            slug: "competition-dashboard",
            description: `<h3>Overview</h3>

            <p>An important recent project at Holograph is our comprehensive dashboard designed to support our online competition offerings. This dynamic dashboard provides real-time data on key metrics, such as the number of QR code scans, unique website visitors, competition entries, new subscriptions, claimed and expired prizes, as well as wins distributed throughout the day. Additionally, the dashboard presents an easy-to-understand visual timeline of the competition campaign. The dashboard, adorned with associated branding, is a powerful tool for gaining valuable insights into campaign performance and customer behaviour.</p>
            <details>
            <summary>
            Role
            </summary>
            <div>
            <p>In this project, I played a pivotal role as the principal designer of the default dashboard. My primary responsibilities involved crafting the underlying HTML and CSS structures of the dashboard, ensuring a solid and well-optimized foundation for the interface. Beyond this, I developed the dashboard to be theme-compatible with the associated competition. This entailed integrating versatile design elements and accommodating aesthetic adjustments in line with the branding of each unique competition campaign. </p>        
            </div>
            </details>
            `,
            image: ["/_nuxt/assets/starfield-dashboard.jpg", "/_nuxt/assets/holo-dashboard.jpg"],
            // url: "http://project1.example.com",
            tags: ['design', 'html', 'css', 'UI']
        },        
        {
            title: "Xbox / Starfield Competition",
            slug: "xbox-starfield",
            description: `
            <h3>Overview</h3>
            <p>Holograph developed an instant win and draw competition for Lucozade (Energy) and their XBox partnership, in association with Bethesda Softworks. This cross promotional tie-in focused on the highly anticipated upcoming game, Starfield.  Through the means of approximately 13,000 POS across UK & Ireland channels. Approximately 98 million on-pack bottles will contain a QR code linking to the competition, where the consumer is encouraged to ‘Scan to Win’.</p>            
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>I worked on aspects of the design, taking a rough low-fi flow and developing on loose but existing design guidelines. This afforded some level of create freedom.</p>            
            <p>This project was the first to incorporate many of the ideas I developed in my competition prototype, which at the time I was still working on. I worked on the general front-end (not relating to mechanics or user flow), styling and animation on the project.</p>                        
            </div>
            </details>
            `,
            image: ["/_nuxt/assets/starfield-entry.jpg"],
            url: ["https://www.lucozade.com/"],
            tags: ['design', 'css', 'typescript', 'vue', 'UI', 'animation']        
        },
        {
            title: "Ribena",
            slug: "ribena",
            description: `
            <h3>Overview</h3>
            <p>We were tasked with designing and building a revamped website for Ribena - home of the original much loved blackcurrant soft drink. This would include home, about and sustainability pages swell as a rebuild e-commerce shop.</p>
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>I worked on aspects of the design and did all the work in relation to building the pages, including styling and animations.</p>
            </div>
            </details>
            `,
            image: ["/_nuxt/assets/ribena-home.png"],
            url: ["https://www.ribena.co.uk/"],
            tags: ['html', 'css', 'typescript', 'UI', 'animation']        
        },
        {
            title: "Lucozade Megabrand",
            slug: "lucozade-megabrand",
            description: `
            <h3>Overview</h3>
            <p>Lucozade tasked us to develop a new website which would bring each of their core brands (Energy, Sport, Zero and Alert) under one site. This would include home, product landing pages, contact and a e-commerce shop.</p>            
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>Probably one of the largest projects I worked on at Holograph, this job had alot to it and a tight deadline. I worked on the front-end development of the site, templating components, styling all aspects of the site and crafting animations.</p>
            </div>
            </details>            
            `,
            image: ["/_nuxt/assets/lucozade-home.png"],
            url: ["https://www.lucozade.com/"],
            tags: ['html', 'css', 'typescript', 'UI', 'animation']
        },
        {
            title: "Holograph DXP / DAM",
            slug: "holograph-dxp",
            description: `
            <h3>Overview</h3>
            <p>Tasked with reimagining Holograph Digital Experience Platform (DXP), comprising a suite of tools such as  Page Editor, Content Manager, and Form Builder. The brief was to think of this as a DAM, in which types of content were manageable assets.</p>          
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>This involved a complete visual language redesign, coupled with the creation of a fresh, user-centric interface (UI) and an optimized user experience. The goal was to provide a seamless, efficient, and intuitive platform that streamlines digital content management and enhances user engagement, successfully driving the digital transformation efforts of our clients.</p>
            </div>
            </details>                          
            `,
            image: ["/_nuxt/assets/holo-design-lanaguage-1.jpg", "/_nuxt/assets/holo-design-lanaguage-2.jpg", "/_nuxt/assets/holo-design-lanaguage-3.jpg"],
            tags: ['design', 'UI', 'UX']
        },  
        {
            title: "One Suntory",
            slug: "one-suntory",
            // description: `                         
            // `,
            image: ["/_nuxt/assets/one-suntory-news.jpg", "/_nuxt/assets/one-suntory-news-page.jpg"],
            tags: ['css']
        },                
        {
            title: "EHS",
            slug: "ehs",
            description: `
            <h3>Overview</h3>
            <p>This project involved the Holograph team and the client, Suntory Beverage & Food Europe (SBFE), collaborating to develop a new Quality Environment Health & Safety (QEHS) reporting system and Environment Health & Safety (EHS) incident management system. Aimed at quickly sharing and managing any incidents that occur, replacing the old Lotus notes systems and reducing reliance on excel spreadsheets for managing corrective actions.</p>
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>My role in this project was to work alongside our dev team and produce the HTML structure within each component and apply styling. This project used Angular alongside the Ionic framework.</p>
            </div>
            </details>             
            `,
            image: ["/_nuxt/assets/ehs-incident.png"],
            // url: [],
            tags: ['html', 'css', 'UI', 'design']
        },
        {
            title: "Holo promo",
            slug: "holo-promo",
            description: `
            <h3>Overview</h3>
            <p>Holo.promo is intended as a new brand for Holograph with our instant win competition mechanic as the product. The intention being that it will serve as a SAAS product.</p>
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>This was a new theme I created for the holo.promo front-end of our content manager platform</p>            
            </div>
            </details>                         
            `,
            image: ["/_nuxt/assets/holo-promo.jpg"],
            url: ["https://holo.promo/articles/published"],
            tags: ['html', 'css', 'UI']
        },
        {
            title: "Listerine competition",
            slug: "listerine-competition",
            // description: "This is project 2.",
            image: ["/_nuxt/assets/listerine.jpg"],
            // url: ["http://project2.example.com"],
            tags: ['html', 'css', 'UI']
        },
        {
            title: "Content Manager",
            slug: "content-manager",
            // description: "This is project 2.",
            image: ["/_nuxt/assets/content-manager-template.png", "/_nuxt/assets/content-manager-listing.png"],
            tags: ['html', 'css', 'UI', 'design']
        },
        {
            title: "Jack Wills",
            slug: "jack-wills",
            description: `
            <h3>Overview</h3>
            <p>Website development and on-going campaign and content for Jack Wills.</p>
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <ul>
            <li>Building and developing the core custom CSS framework</li>
            <li>Developing campaign pages for each new range / season</li>
            <li>Working alongside our e-commerce development service provider to further develop and improve our e-com proposition.</li>
            </div>
            </details>                         
            `,
            image: ["/_nuxt/assets/jack-wills-1.jpg"],
            tags: ['html', 'css', 'UI', 'javascript']      
        },  
        {
            title: "Fortitude Fitness",
            slug: "fortitude-fitness",
            description: `
            <h3>Overview</h3>
            <p>Website design for personal trainer company</p>
            `,
            image: ["/_nuxt/assets/fortitude-fitness.jpg"],
            tags: ['design', 'logo', 'html', 'css', 'javascript', 'animation'] 
        },  
        {
            title: "Small Works",
            slug: "small-works",
            description: `
            <h3>Overview</h3>
            <p>Logo design for small local building company</p>
            `,
            image: ["/_nuxt/assets/smallworks.png"],
            tags: ['design', 'logo'] 
        }, 
        {
            title: "Mix / Flyer artwork",
            slug: "mix-designs",
            description: `
            <h3>Overview</h3>
            <p>Various personal mix covers and music related artwork</p>
            `,
            image: ["/_nuxt/assets/music-artwork.jpg"],
            tags: ['design'] 
        },                     
        {
            title: "RAD Space",
            slug: "rad-space",
            // description: "This is project 2.",
            image: ["/_nuxt/assets/radspace.jpg"],
            tags: ['design']      
        },
        {
            title: "Arts Alliance Media",
            slug: "arts-alliance-media",
            description: `
            <h3>Overview</h3>
            <p>AAM are the global leader in digital cinema software and services, offering a wide range of solutions to exhibitors which enable them to reduce costs, increase efficiency, and improve the cinematic experience for their customers. Their software reaches over 42,000 digital screens worldwide, while our network operations centre (NOC) supports several thousand screens.</p>
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>As a significant contributor to a diverse project portfolio, I was responsible for the design and front-end styling of white label dating websites tailored to meet the distinct needs of various clients. This project required meticulous attention to detail and an understanding of diverse branding requirements to ensure each site's aesthetics resonated with the unique identity of our clients. The role encompassed theme conceptualization, responsive design development, and implementing front-end web technologies, all aimed at creating an engaging, user-friendly dating platform that successfully captured the essence of each brand.</p>
            </div>
            </details>               
            `,
            image: ["/_nuxt/assets/arts-alliance-media.jpg", '/_nuxt/assets/vizumi.jpg'],
            tags: ['design', 'html', 'css'],
            url: ['https://www.artsalliancemedia.com/']
        },  
        {
            title: "Planet Recruit",
            slug: "planet-recruit",
            description: `
            <h3>Overview</h3>            
            <p>My role within The Hot Group, of which PlanetRecruit was one of their brands. A matchmaking service for recruiters and job seekers. Recruiters advertised their vacancies on the site and job seekers upload their CVs and review the jobs on offer. A subscription service aimed exclusively at agencies. It was an aggregator of recruitment agency vacancies and and covered a broad selection of job sectors, offering both UK and international jobs.</p>
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>Working within their web design team I was responsible for coming up with new designs for their range of job portal brands. This also working with the marketing department for online and print ads.</p>
            </div>
            </details>              
            `,
            image: ["/_nuxt/assets/planet-recruit.jpg"],
            tags: ['design', 'html', 'css']
        },             
        {
            title: "Wyatt Hughes",
            slug: "wyatt-hughes",
            description: `
            <h3>Overview</h3>
            <p>Website design for estate agent</p>
            `,
            image: ["/_nuxt/assets/wyatt-hughes.jpg"],
            tags: ['design'] 
        }, 
        {
            title: "Dating",
            slug: "dating",
            description: `
            <h3>Overview</h3>
            <p>The project involved the creation of white label dating websites, each uniquely themed to match the distinct branding requirements of various high-profile clients, including Telegraph and SAGA.</p>
            <details>
            <summary>
            My Role
            </summary>
            <div>
            <p>As a significant contributor to a diverse project portfolio, I was responsible for the design and front-end styling of white label dating websites tailored to meet the distinct needs of various clients. This project required meticulous attention to detail and an understanding of diverse branding requirements to ensure each site's aesthetics resonated with the unique identity of our clients. The role encompassed theme conceptualization, responsive design development, and implementing front-end web technologies, all aimed at creating an engaging, user-friendly dating platform that successfully captured the essence of each brand.</p>
            </div>
            </details>              

            `,
            image: ["/_nuxt/assets/dating.jpg"],
            tags: ['design', 'html', 'css']      
        },                            
        {
            title: "Sky Mobile",
            slug: "sky-mobile",
            // description: "This is project 2.",
            image: ["/_nuxt/assets/sky-mobile.jpg"],
            tags: ['design', 'html', 'css']   
        },  
        {
            title: "Smirnoff Engagement Tool",
            slug: "smirnoff-engagement-tool",
            // description: "This is project 2.",
            image: ["/_nuxt/assets/smirnoff.jpg"],
            tags: ['design', 'html', 'css']     
        }, 
        {
            title: "Reed Creative",
            slug: "reed-creative",
            // description: "This is project 2.",
            image: ["/_nuxt/assets/reed-creative.jpg"],
            tags: ['design', 'html', 'css']      
        },                                                     
      ]
}

