export default {
    title: 'Justin Small Portfolio',
    portfolio: [
        {
            title: "Competition framework",
            slug: "competition-framework",
            description: `<h3>Overview</h3>
            <p>One of Holograph's key offerings has been creating end-to-end consumer competition campaigns. A QR code takes the consumer to a form which collates data for the competition including name, age range, location, purchase location etc. Redeemable codes can be sent out as instant prize wins or winners can be selected using a fulfilment interface. Associated branded dashboards give valuable insight into key metric campaign data.</p>
            <details open>
            <summary>
            Role
            </summary>
            <div>
            <p>With the company having had some experience in creating a number of these campaigns in the past, each offering was a bespoke project. This became a time-consuming process. We wanted to move away from this custom, somewhat ad hoc approach and produce a competition framework, in which a new instance could be spun up in moments, while at the same time being highly configurable from a config file. </p>
            <p>I set up to identify and produce a report on what steps we could take to realize this vision. At the same time, I produced a <a href="https://cdpn.io/wvxRjRB/b1ffaf0ebef20339c779ab1672b12b20" title="competition prototype">prototype</a> of what this might look like from a front-end perspective.</p>
            <ul>
            <li>A new core page layout structure</li>
            <li>A new style-config JSON file allowing for layout and styling configuration</li>
            <li>A core SCSS codebase built alongside the template for quick CSS property overrides</li>
            <li>Extensive use of CSS custom properties for theming and global style values</li>
            <li>Codebase rewritten using Vue 3 with components and Pinia for global storage.</li>
            </ul>
            </div>
            </details>
            `,
            images: [
              { url: "/img/competition-form.png", alt: "" },
              { url: "/img/comp-template-option-1.png", alt: "" },
              { url: "/img/comp-template-option-2.png", alt: "" }
            ],
            tags: ['design', 'html', 'scss', 'typescript', 'vue', 'pinia', 'UI']
        },
        {
            title: "Competition dashboard",
            slug: "competition-dashboard",
            description: `<h3>Overview</h3>
            <p>An important recent project at Holograph is our comprehensive dashboard designed to support our online competition offerings. This dynamic dashboard provides real-time data on key metrics, such as the number of QR code scans, unique website visitors, competition entries, new subscriptions, claimed and expired prizes, as well as wins distributed throughout the day. Additionally, the dashboard presents an easy-to-understand visual timeline of the competition campaign. The dashboard, adorned with associated branding, is a powerful tool for gaining valuable insights into campaign performance and customer behavior.</p>
            <details open>
            <summary>
            Role
            </summary>
            <div>
            <p>In this project, I played a pivotal role as the principal designer of the default dashboard, as well as designing themes for some of clients including Listerine, Lucozade and Ribena. This entailed integrating versatile design elements and accommodating aesthetic adjustments in line with the branding of each unique competition campaign.</p>
            <p>In addition to designing these dashboards, I also crafted the underlying HTML and CSS structures of the dashboard, ensuring a solid and well-optimized foundation for the interface.</p><p>I also developed the dashboard to be theme-compatible with the associated competition so that variable definitions for the look and feel carried across both projects.</p>
            </div>
            </details>
            `,
            images: [
              { url: "/img/starfield-dashboard.jpg", alt: "Lucozade Starfield Competition Dashboard" },
              { url: "/img/holo-dashboard.jpg", alt: "" }
            ],
            tags: ['design', 'html', 'scss', 'UI']
        },
        {
            title: "Xbox / Starfield Competition",
            slug: "xbox-starfield",
            description: `<h3>Overview</h3>
            <p>Designing and implementing an online competition in collaboration with Xbox and the release of their highly anticipated game, Starfield. The competition allowed participants to enter for a chance to win exclusive Xbox merchandise, including limited-edition Starfield consoles and accessories. The competition page featured stunning visual artwork inspired by the game, engaging animations, and a user-friendly interface to maximize user participation and excitement.</p>
            <details>
            <summary>
            Role
            </summary>
            <div>
            <p>As the lead front-end developer and designer, I spearheaded the implementation of the competition page. Leveraging my experience in design, SCSS / CSS, TypeScript, and Vue.js, I crafted a visually appealing and responsive web experience that captured the essence of Starfield's captivating universe. The result was an immersive and engaging competition page that successfully generated buzz and drove participation among Xbox and Starfield enthusiasts.</p>
            </div>
            </details>
            `,
            images: [
              { url: "/img/starfield-entry.jpg", alt: "", videoId: "829192342" },
              { url: "/img/starfield-entry.jpg", alt: "", }
            ],
            url: ["https://www.lucozade.com/competitions/energy/starfield/form/"],
            tags: ['design', 'scss', 'typescript', 'vue', 'UI', 'animation', 'gsap']
        },
        {
            title: "Ribena",
            slug: "ribena",
            description: `
            <h3>Overview</h3>
            <p>We were tasked with designing and building a revamped website for Ribena - home of the original much loved blackcurrant soft drink. This coincided with their shift in branding to a cartoony, self-deprecating, playful new marketing campaign. This new site would include home, about and sustainability pages aswell as a rebuild e-commerce shop.</p>
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <p>I worked on aspects of the design and did all the work in relation to building the pages, including styling and animations.</p>
            </div>
            </details>
            `,
            images: [
                { url: "/img/ribena-home.png", alt: "" }
            ],
            url: ["https://www.ribena.co.uk/"],
            tags: ['html', 'scss', 'typescript', 'UI', 'animation', 'gsap']        
        },
        {
            title: "Lucozade Megabrand",
            slug: "lucozade-megabrand",
            description: `
            <h3>Overview</h3>
            <p>Lucozade tasked us to develop a new website which would bring each of their core brands (Energy, Sport, Zero and Alert) under one site. This would include home, product landing pages, contact and a e-commerce shop.</p>            
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <p>I worked on the front-end development of the site, utilising the core SCSS framework I had developed for Holograph sites. I build each of the pages including templating all the components and styled all aspects of the site, including animations.</p>
            </div>
            </details>            
            `,
            images: [ { url: "/img/lucozade-home.png", alt: "" } ],
            url: ["https://www.lucozade.com/"],
            tags: ['html', 'scss', 'typescript', 'UI', 'animation']
        },
        {
            title: "Holograph DXP / DAM",
            slug: "holograph-dxp",
            description: `
            <h3>Overview</h3>
            <p>Tasked with reimagining Holograph Digital Experience Platform (DXP), comprising a suite of tools such as  Page Editor, Content Manager, and Form Builder. The brief was to think of this as a DAM, in which types of content were manageable assets.</p>          
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <p>This involved a complete visual language redesign, coupled with the creation of a fresh, user-centric interface (UI) and an optimized user experience. The goal was to provide a seamless, efficient, and intuitive platform that streamlines digital content management and enhances user engagement, successfully driving the digital transformation efforts of our clients.</p>
            </div>
            </details>                          
            `,
            images: [ 
                { url: "/img/holo-design-lanaguage-1.jpg", alt:"" }, 
                { url: "/img/holo-design-lanaguage-2.jpg", alt: "" }, 
                { url: "/img/holo-design-lanaguage-3.jpg", alt: "" }
            ],
            tags: ['design', 'UI', 'UX']
        },  
        {
            title: "One Suntory",
            slug: "one-suntory",
            // description: `                         
            // `,
            images: [
                { url: "/img/one-suntory-news.jpg", alt: "" }, 
                { url: "/img/one-suntory-news-page.jpg", alt: ""}
            ],
            tags: ['scss']
        },                
        {
            title: "EHS",
            slug: "ehs",
            description: `
            <h3>Overview</h3>
            <p>This project involved the Holograph team and the client, Suntory Beverage & Food Europe (SBFE), collaborating to develop a new Quality Environment Health & Safety (QEHS) reporting system and Environment Health & Safety (EHS) incident management system. Aimed at quickly sharing and managing any incidents that occur, replacing the old Lotus notes systems and reducing reliance on excel spreadsheets for managing corrective actions.</p>
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <p>My role in this project was to work alongside our dev team and produce the HTML structure within each component and apply styling to the entire application. This project used Angular alongside the Ionic framework.</p>
            </div>
            </details>             
            `,
            images: [ { url: "/img/ehs-incident.png", alt: "" }],
            // url: [],
            tags: ['html', 'scss', 'UI', 'design']
        },
        {
            title: "Holo promo",
            slug: "holo-promo",
            description: `
            <h3>Overview</h3>
            <p>Holo.promo is intended as a new brand for Holograph with our instant win competition mechanic as the product. The intention being that it will serve as a SAAS product.</p>
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <p>This was a new theme I created for one of Holograph's internal websites, holo.promo. It utilized our content manager software to create a list of articles.</p>            
            </div>
            </details>                         
            `,
            images: [ { url: "/img/holo-promo.jpg", alt: "" }],
            url: ["https://holo.promo/articles/published"],
            tags: ['html', 'scss', 'UI']
        },
        {
            title: "Listerine competition",
            slug: "listerine-competition",
            // description: "This is project 2.",
            images: [{ url: "/img/listerine.jpg", alt: ""}],
            // url: ["http://project2.example.com"],
            tags: ['html', 'scss', 'UI'],
            description: `<h3>Overview</h3>
            <p>This was a digital campaign for JnJ's new in-store activation, the Listerine Donkey Campaign, launched on September 12, 2022. This was a unique campaign with dual competitions, an 'Instant Win' and a 'Grand Prize' draw. My role was multi-faceted and instrumental in this project's success.</p>
            <p>As part of the campaign, we developed a bespoke microsite which hosted the competition's entry form, accessed by scanning a QR code at the point of sale, or through social and online channels. This ensured an accessible and seamless user experience for all entrants.</p>
            <p>The entry form was carefully crafted to gather essential data from participants such as their name, email, postcode, and age confirmation.</p>            
            <p>Our team built an efficient entry flow and deployed the form to the website. The back-end was designed to allocate prizes through a non-guaranteed 'winning moments mechanic', which provided instant confirmation to winners. We effectively managed nearly 10,000 digital voucher prizes and close to 800 Donkey toy prizes.</p>            
            <p>After the 'Instant Win' period, all participants were automatically entered into the 'Grand Prize' draw. This two-stage competition approach boosted the engagement and longevity of the campaign.</p>                        
            <details open>
            <summary>
            Role
            </summary>
            <div>
            <p>I took charge in implementing the design of the landing page, including the application of CSS and other styling techniques, ensuring the page's aesthetic was in-line with JnJ's branding and the campaign's theme.</p>
            <p>For ease of tracking the campaign's progress, I was also responsible for building a campaign reporting dashboard, offering real-time insights to the client.</p>
            </div>
            </details>
            `,            
        },
        {
            title: "Content Manager",
            slug: "content-manager",
            description: `
            <h3>Overview</h3>
            <p>Content Manager was one of Holograph's key software offerings. As a concept it allowed for the creation of articles or content. The content would of a particular type eg (listing) which could be categorised and tagged. That content can they be pushed live to a "stream" which would display on the front-end. It aimed to greatly simplify the creation of content for non-technical content creators.</p>  
            <details open>
            <summary>
            Role
            </summary>
            <div>
            <p>I joined the Holograph team midway through the development roadmap of the Content Manager project, a software solution aimed at simplifying content creation for non-technical creators. At the time of my joining, there were no UI designs in place, presenting a unique challenge and an opportunity for me to truly make an impact.</p>
            <p>My main objective was to devise an intuitive and user-friendly experience for the software users. Crafting an easy-to-use UX was paramount to the project's success, and it fell to me to conceptualize, design, and iterate over numerous ideas until the optimal solution was found. This process was iterative, involving substantial trial and error, user testing, and feedback integration to ensure the final product truly addressed user needs and was a pleasure to interact with.</p>
            <p>In tandem with developing the UI/UX design, I had the responsibility to build out SCSS and components. Utilizing SCSS enabled the creation of efficient and maintainable stylesheets, while the design and implementation of reusable components ensured consistency and further increased maintainability.</p>
            <p>The Content Manager project was comprised of a management system for the backend, and a front-end display system for pushing content live to a stream. To build these systems, we leveraged the capabilities of Angular, a robust and widely-used framework for building dynamic web applications.</p>
            <p>In this role, my contributions to the project ensured not only the smooth development and implementation of key features, but also significantly enhanced the user experience, which was central to the Content Manager's success. By putting the needs of non-technical content creators first, we were able to deliver a product that truly simplified content creation and management.</p>
            </div>
            </details>            
            `,
            images: [ 
                { url: "/img/content-manager-template.png", alt: "" }, 
                { url: "/img/content-manager-listing.png", alt: "" }
            ],
            tags: ['html', 'scss', 'UI', 'design']
        },
        {
            title: "Holograph Entry System prototype",
            slug: "entry-system",
            // description: `
            // <h3>Overview</h3>
            // <p></p>
            // <details open>
            // <summary>
            // My Role
            // </summary>
            // <div>
            // <p></p>
            // </div>
            // </details>                         
            // `,
            images: [ { url:"/img/entry-system.png", alt: "Holograph Entry System Prototype" }],
            tags: ['design', 'html', 'css', 'UI', 'javascript', 'vue'],
            url: ["https://mystifying-saha-e0c2d5.netlify.app/"]      
        },          
        {
            title: "Jack Wills",
            slug: "jack-wills",
            description: `
            <h3>Overview</h3>
            <p>Website development and on-going campaign and content for Jack Wills.</p>
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <ul>
            <li>Building and developing the core custom SCSS framework</li>
            <li>Developing campaign pages for each new range / season</li>
            <li>Working alongside our e-commerce development service provider to further develop and improve our e-com proposition.</li>
            </div>
            </details>                         
            `,
            images: [ { url:"/img/jack-wills-1.jpg", alt: "" }],
            tags: ['html', 'scss', 'UI', 'javascript']      
        },  
        {
            title: "Fortitude Fitness",
            slug: "fortitude-fitness",
            description: `
            <h3>Overview</h3>
            <p>Website design for personal trainer company</p>
            `,
            images: [{ url: "/img/fortitude-fitness.jpg", alt: "" }],
            tags: ['design', 'logo', 'html', 'scss', 'javascript', 'animation'] 
        },  
        {
            title: "Small Works",
            slug: "small-works",
            description: `
            <h3>Overview</h3>
            <p>Logo design for small local building company</p>
            `,
            images: [{ url: "/img/smallworks.png", alt: ""}],
            tags: ['design', 'logo'] 
        }, 
        {
            title: "Mix / Flyer artwork",
            slug: "mix-designs",
            description: `
            <h3>Overview</h3>
            <p>Various personal mix covers and music related artwork</p>
            `,
            images: [{ url: "/img/music-artwork.jpg", alt: ""}],
            tags: ['design'] 
        },                     
        {
            title: "RAD Space",
            slug: "rad-space",
            // description: "This is project 2.",
            images: [{ url: "/img/radspace.jpg", alt: ""}],
            tags: ['design']      
        },
        {
            title: "Arts Alliance Media",
            slug: "arts-alliance-media",
            description: `
            <h3>Overview</h3>
            <p>AAM are the global leader in digital cinema software and services, offering a wide range of solutions to exhibitors which enable them to reduce costs, increase efficiency, and improve the cinematic experience for their customers. Their software reaches over 42,000 digital screens worldwide, while our network operations centre (NOC) supports several thousand screens.</p>
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <p>As a significant contributor to a diverse project portfolio, I was responsible for the design and front-end styling of white label dating websites tailored to meet the distinct needs of various clients. This project required meticulous attention to detail and an understanding of diverse branding requirements to ensure each site's aesthetics resonated with the unique identity of our clients. The role encompassed theme conceptualization, responsive design development, and implementing front-end web technologies, all aimed at creating an engaging, user-friendly dating platform that successfully captured the essence of each brand.</p>
            </div>
            </details>               
            `,
            images: [
                { url: "/img/arts-alliance-media.jpg", alt: ""}, 
                { url: '/img/vizumi.jpg', alt: ""}
            ],
            tags: ['design', 'html', 'css'],
            url: ['https://www.artsalliancemedia.com/']
        },  
        {
            title: "Planet Recruit",
            slug: "planet-recruit",
            description: `
            <h3>Overview</h3>            
            <p>My role within The Hot Group, of which PlanetRecruit was one of their brands. A matchmaking service for recruiters and job seekers. Recruiters advertised their vacancies on the site and job seekers upload their CVs and review the jobs on offer. A subscription service aimed exclusively at agencies. It was an aggregator of recruitment agency vacancies and and covered a broad selection of job sectors, offering both UK and international jobs.</p>
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <p>Working within their web design team I was responsible for coming up with new designs for their range of job portal brands. This also working with the marketing department for online and print ads.</p>
            </div>
            </details>              
            `,
            images: [{ url: "/img/planet-recruit.jpg", alt: ""}],
            tags: ['design', 'html', 'css']
        },             
        {
            title: "Wyatt Hughes",
            slug: "wyatt-hughes",
            description: `
            <h3>Overview</h3>
            <p>Website design for estate agent</p>
            `,
            images: [{ url: "/img/wyatt-hughes.jpg", alt: ""}],
            tags: ['design'] 
        }, 
        {
            title: "Dating",
            slug: "dating",
            description: `
            <h3>Overview</h3>
            <p>The project involved the creation of white label dating websites, each uniquely themed to match the distinct branding requirements of various high-profile clients, including Telegraph and SAGA.</p>
            <details open>
            <summary>
            My Role
            </summary>
            <div>
            <p>As a significant contributor to a diverse project portfolio, I was responsible for the design and front-end styling of white label dating websites tailored to meet the distinct needs of various clients. This project required meticulous attention to detail and an understanding of diverse branding requirements to ensure each site's aesthetics resonated with the unique identity of our clients. The role encompassed theme conceptualization, responsive design development, and implementing front-end web technologies, all aimed at creating an engaging, user-friendly dating platform that successfully captured the essence of each brand.</p>
            </div>
            </details>              

            `,
            images: [{ url: "/img/dating.jpg", alt: ""}],
            tags: ['design', 'html', 'css']      
        },                            
        {
            title: "Sky Mobile",
            slug: "sky-mobile",
            // description: "This is project 2.",
            images: [{ url: "/img/sky-mobile.jpg", alt: ""}],
            tags: ['design', 'html', 'css']   
        },  
        {
            title: "Smirnoff Engagement Tool",
            slug: "smirnoff-engagement-tool",
            // description: "This is project 2.",
            images: [{ url: "/img/smirnoff.jpg", alt: ""}],
            tags: ['design', 'html', 'css']     
        }, 
        {
            title: "Reed Creative",
            slug: "reed-creative",
            // description: "This is project 2.",
            images: [{ url: "/img/reed-creative.jpg", alt: ""}],
            tags: ['design', 'html', 'css']      
        },                                                     
      ]
}

