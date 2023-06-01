// store/index.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    step: '',
    projectPath: [],
    filterOptions: ref(['all', 'design', 'css']),
    filterBy: ref('all'),
    portfolioIndexLoading: ref(true),
    isFilterOpen: ref(false)
  }),
  actions: {
    setStep(value) {
      this.step = value
    },
    setProjectPath(value) {
      this.projectPath = value
    },
    sortArrayWithVariableFirst(array, variable) {
      const arrayCopy = [...array];
      const index = arrayCopy.indexOf(variable);
    
      if (index > -1) {
        arrayCopy.splice(index, 1);
        arrayCopy.unshift(variable);
      }
    
      return arrayCopy;
    }    
  },
})
