<template>
  <div class="relative w-full h-screen overflow-hidden bg-black">
    <div id="phaser-container" class="w-full h-full"></div>
    <div class="absolute top-4 left-4">
      <router-link to="/" class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Phaser from 'phaser'

let game = null

onMounted(() => {
  const config = {
    type: Phaser.AUTO,
    parent: 'phaser-container',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 }
      }
    },
    scene: {
      preload,
      create,
      update
    }
  }

  game = new Phaser.Game(config)

  window.addEventListener('resize', () => {
    if (game) {
      game.scale.resize(window.innerWidth, window.innerHeight)
    }
  })
})

onUnmounted(() => {
  if (game) {
    game.destroy(true)
  }
})

function preload() {
  // Preload assets here
}

function create() {
  this.add.text(400, 300, 'Game Started', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5)
}

function update() {
  // Game loop
}
</script>
