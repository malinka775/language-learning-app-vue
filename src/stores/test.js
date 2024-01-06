import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
  const testId = ref('malinka')
  

  return { testId }
})
