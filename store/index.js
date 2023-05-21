// store/index.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    step: '',
  }),
  actions: {
    setStep(value) {
      this.step = value
    },
  },
})
