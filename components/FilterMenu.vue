<template>
    <div style="position:fixed; inset:0; width:100%; height:100%; z-index:2" :style="{'pointer-events': store.isFilterOpen ? 'all' : 'none' }">
    <div class="main-portfolio__filter" ref="filter" :class="{'main-portfolio__filter--isOpen': store.isFilterOpen}">
      <div class="main-portfolio__filter__inner">
        <div class="main-portfolio__filterClose" ref="filterClose" v-if="store.isFilterOpen" @click="menuToggle()">
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.879 14.121L12 12m2.121-2.121L12 12m0 0L9.879 9.879M12 12l2.121 2.121M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div class="main-portfolio__filterPanel" ref="filterButton">
            <h3>Filter</h3>                                       
        </div>            
        <div class="main-portfolio__filterButton" @click="menuToggle()">
            <a href="#">
                <FilterIcon />
            </a>
        </div>
        <TransitionGroup name="filterList" tag="div" class="main-portfolio__filterRadioGroup">
            <div v-for="option in filterOptionLabels" :key="option" :data-option="option">
                    <input type="radio" :value="option" v-model="store.filterBy" :id="option" :checked="option === store.filterBy" @change="changeFilter" /> 
                    <label :for="option" @click="radioMenuToggle(option)">
                      <span v-if="!option.includes('css')">{{option}}</span>
                      <span v-else-if="option.includes('css')">dev</span>
                    </label>                    
                </div>
        </TransitionGroup>             
      </div>
      <!-- <Teleport to="section"> -->
        
      <!-- </Teleport> -->
    </div>
    
      <div ref="filterBackdrop" class="main-portfolio__filterBackdrop" :style="{'pointer-events': store.isFilterOpen ? 'all' : 'none' }" @click="menuAnimateClose()"></div>           
    
  </div> 

</template>

<script setup>

import { useMainStore } from '~/store/index'
const store = useMainStore()

/// template ref for .main-portfolio__filter
const filter = ref(null);
/// template ref for .main-portfolio__filterRadioGroup > div
const radioGroupDivs = ref([]);
/// template ref for .main-portfolio__filterPanel
const filterButton = ref(null);
/// template ref for .main-portfolio__filterClose
const filterClose = ref(null);
/// template ref for .main-portfolio__filterBackdrop
const filterBackdrop = ref(null);

/// array of filter options for radio inputs. selected option is returned as 1st in the array (UI / design requirement)
const filterOptionLabels = computed(() => store.sortArrayWithVariableFirst([...store.filterOptions], store.filterBy));
/// comp prop of array of unselected options
const unSelectedOptions = computed(() => radioGroupDivs.value.filter(entry => entry.dataset.option !== store.filterBy))

/// Close menu if selected option is clicked
function radioMenuToggle(option) {
  if(option === store.filterBy) {
    menuToggle()
  } else {
    return
  }
}

/// Open / close menu
function menuToggle() {
  store.isFilterOpen ? menuAnimateClose() : menuAnimateOpen()
}

/// change event for radio input - set loading and close menu
function changeFilter() {
    store.portfolioIndexLoading = true
    window.setTimeout(() => {
                store.portfolioIndexLoading = false
        }, 500)     
    menuAnimateClose()
}

function menuSetState() {
    filter.value.style.transform = 'translateY(50%)';
    unSelectedOptions.value.forEach(div => {
        div.style.opacity = '0';
        div.style.transform = 'scale(0.75)';
  });    
  filterBackdrop.value.style.clipPath  = 'circle(0% at 100% 100%)';
}

function menuAnimateOpen() {
    // Animate filter
    let filterAnimation = filter.value.animate([
      { transform: 'translateY(50%)' },
      { transform: 'translateY(0)' }
    ], {
      duration: 500, // Adjust as needed
      easing: 'ease' // Adjust as needed
    });

    filterAnimation.onfinish = () => {
        filter.value.style.transform = 'translateY(0)';
    };

    // Animate each radio group div with staggered delay
    unSelectedOptions.value.forEach((div, index) => {
      let divAnimation = div.animate([
        { opacity: '0', transform: 'scale(0.75)' },
        { opacity: '1', transform: 'scale(1)' }
      ], {
        delay: index * 100, // Adjust delay as needed
        duration: 500, // Adjust as needed
        easing: 'ease' // Adjust as needed
      });

      divAnimation.onfinish = () => {
        div.style.opacity = '1';
        div.style.transform = 'scale(1)';
      };
    });

    let filterBackdropAnimation = filterBackdrop.value.animate([
      { clipPath: 'circle(0% at 100% 100%)'  },
      { clipPath: 'circle(min(30rem, 100vw) at 100% 100%)'  }
    ], {
      duration: 500,
      easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
    })

    filterBackdropAnimation.onfinish = () => {
      filterBackdrop.value.style.clipPath  = 'circle(min(30rem, 100vw) at 100% 100%)';
    }

    store.isFilterOpen = !store.isFilterOpen
}

function menuAnimateClose() {
    // Reverse animate filter
    let filterAnimation = filter.value.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(50%)' }
    ], {
      duration: 500, // Adjust as needed
      easing: 'ease' // Adjust as needed
    });

    filterAnimation.onfinish = () => {
        filter.value.style.transform = 'translateY(50%)';
    };

    // Reverse animate each radio group div with staggered delay
    unSelectedOptions.value.reverse().forEach((div, index) => {
      let divAnimation = div.animate([
        { opacity: '1', transform: 'scale(1)' },
        { opacity: '0', transform: 'scale(0.75)' }
      ], {
        delay: index * 100, // Adjust delay as needed
        duration: 500, // Adjust as needed
        easing: 'ease' // Adjust as needed
      });

      divAnimation.onfinish = () => {
        div.style.opacity = '0';
        div.style.transform = 'scale(0.75)';
      };
    });

    let filterBackdropAnimation = filterBackdrop.value.animate([
      { clipPath: 'circle(min(30rem, 100vw) at 100% 100%)'  },
      { clipPath: 'circle(0% at 100% 100%)'  }
    ], {
      duration: 500,
      easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
    })

    filterBackdropAnimation.onfinish = () => {
      filterBackdrop.value.style.clipPath  = 'circle(0% at 100% 100%)';
    }    

    store.isFilterOpen = !store.isFilterOpen
}


onMounted(() => {
    radioGroupDivs.value = Array.from(filter.value.querySelectorAll('.main-portfolio__filterRadioGroup > div'))
    menuSetState()
    // console.log(unSelectedOptions.value)
})

</script>