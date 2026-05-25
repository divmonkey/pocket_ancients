<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
    <h1 class="text-6xl font-bold mb-8 text-blue-500">Pocket Ancients</h1>
    <p class="text-xl mb-12 text-gray-400 text-center max-w-2xl">
      An epic adventure awaits. Collect, battle, and explore in this ancient world.
    </p>
    <router-link 
      to="/game" 
      class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-2xl transition duration-300 transform hover:scale-105 shadow-lg"
    >
      Start Game
    </router-link>
  </div>
</template>

<script setup>
</script>
