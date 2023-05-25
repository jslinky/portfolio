// store/index.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    step: '',
    projectPath: []
  }),
  actions: {
    setStep(value) {
      this.step = value
    },
    setProjectPath(value) {
      this.projectPath = value
    }
  },
})
