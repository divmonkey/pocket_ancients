import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    player: {
      name: 'Hero',
      level: 1,
      experience: 0
    },
    inventory: []
  }),
  actions: {
    addExperience(amount) {
      this.player.experience += amount
      if (this.player.experience >= 100) {
        this.player.level++
        this.player.experience = 0
      }
    }
  }
})
