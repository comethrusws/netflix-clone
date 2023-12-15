import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state: ()=> ({
    movie: null,
    showFullVideo: false,
  }),
})
