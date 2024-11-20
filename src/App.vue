<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div v-if="!gameStarted" class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-5xl mb-8">Vue Poker Game</h1>
      <button 
        @click="startGame"
        class="px-8 py-4 text-xl bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
      >
        Start New Game
      </button>
    </div>
    <GameBoard v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GameBoard from './components/GameBoard.vue'
import { useGameStore } from './stores/gameStore'

const gameStore = useGameStore()
const gameStarted = ref(false)

const startGame = () => {
  try {
    console.log('Starting game...')
    gameStore.initializeGame(4)
    gameStarted.value = true
    console.log('Game started successfully')
  } catch (error) {
    console.error('Error starting game:', error)
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
}

.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 2rem;
}

h1 {
  font-size: 3rem;
  margin: 0;
}

.start-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.start-button:hover {
  background: #45a049;
}
</style>
