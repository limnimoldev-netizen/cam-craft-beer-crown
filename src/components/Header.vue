<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Beer, Calendar, Trophy, Menu, X } from 'lucide-vue-next'

// Control mobile drawer visibility
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100  shadow-sm">
    <div class="max-w-[1280px] mx-auto px-4 md:px-12">
      <div class="flex h-20 items-center justify-between">
        
        <div class="flex items-center gap-2 sm:gap-3">
          <img src="../assets/logo1.png" alt="Cambodian Beer Crown" class="h-12 sm:h-14 w-auto object-contain" />
          <img src="../assets/logo2.png" alt="Cambodian Beer Crown" class="h-12 sm:h-14 w-auto object-contain" />
        </div>

        <nav class="hidden md:flex items-center gap-8 font-medium text-base">
          <RouterLink to="/" class="flex items-center gap-1.5 text-[#333333] hover:text-[#f0a22a] pb-1 transition-colors" active-class="border-b-2 border-[#f0a22a] text-black font-semibold">
            <i class="fa-regular fa-house"></i> Home
          </RouterLink>

          <RouterLink to="/breweries" class="flex items-center gap-1.5 text-[#333333] hover:text-[#f0a22a] pb-1 transition-colors" active-class="border-b-2 border-[#f0a22a] text-black font-semibold">
            <Beer class="w-4 h-4" /> Breweries
          </RouterLink>

          <RouterLink to="/schedule" class="flex items-center gap-1.5 text-[#333333] hover:text-[#f0a22a] pb-1 transition-colors" active-class="border-b-2 border-[#f0a22a] text-black font-semibold">
            <Calendar class="w-4 h-4" /> Schedule
          </RouterLink>

          <RouterLink to="/styles" class="flex items-center gap-1.5 text-[#333333] hover:text-[#f0a22a] pb-1 transition-colors" active-class="border-b-2 border-[#f0a22a] text-black font-semibold">
            <i class="fa-solid fa-award"></i> Styles
          </RouterLink>

          <RouterLink to="/awards" class="flex items-center gap-1.5 text-[#333333] hover:text-[#f0a22a] pb-1 transition-colors" active-class="border-b-2 border-[#f0a22a] text-black font-semibold">
            <i class="fa-solid fa-trophy"></i> Awards
          </RouterLink>

          <RouterLink to="/sponsors" class="flex items-center gap-1.5 text-[#333333] hover:text-[#f0a22a] pb-1 transition-colors" active-class="border-b-2 border-[#f0a22a] text-black font-semibold">
            <i class="fa-solid fa-handshake"></i> Sponsors
          </RouterLink>
        </nav>

        <div class="flex items-center gap-4">
          <div class="hidden md:block">
            <RouterLink to="/judge" class="inline-flex items-center bg-[#EE9F27] hover:bg-[#b57305] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md text-base tracking-wide gap-2">           
              <i class="fa-solid fa-check-to-slot"></i> Judge here
            </RouterLink>
          </div>

          <button @click="toggleMenu" class="block md:hidden p-2 text-gray-700 hover:text-amber-500 transition-colors focus:outline-none" aria-label="Toggle navigation menu">
            <Menu v-if="!isMenuOpen" class="w-8 h-8" />
            <X v-else class="w-8 h-8" />
          </button>
        </div>

      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden border-t border-gray-100 bg-white shadow-xl transition-all duration-300 ease-in-out">
      <div class="px-6 py-6 flex flex-col gap-5 font-medium text-lg">
        <RouterLink @click="isMenuOpen = false" to="/home" class="flex items-center gap-3 text-gray-800 py-1" active-class="text-[#f0a22a] font-bold">
          <i class="fa-regular fa-house w-5 text-center"></i> Home
        </RouterLink>

        <RouterLink @click="isMenuOpen = false" to="/breweries" class="flex items-center gap-3 text-gray-800 py-1" active-class="text-[#f0a22a] font-bold">
          <Beer class="w-5 h-5 text-center" /> Breweries
        </RouterLink>

        <RouterLink @click="isMenuOpen = false" to="/schedule" class="flex items-center gap-3 text-gray-800 py-1" active-class="text-[#f0a22a] font-bold">
          <Calendar class="w-5 h-5 text-center" /> Schedule
        </RouterLink>

        <RouterLink @click="isMenuOpen = false" to="/styles" class="flex items-center gap-3 text-gray-800 py-1" active-class="text-[#f0a22a] font-bold">
          <i class="fa-solid fa-award w-5 text-center"></i> Styles
        </RouterLink>

        <RouterLink @click="isMenuOpen = false" to="/awards" class="flex items-center gap-3 text-gray-800 py-1" active-class="text-[#f0a22a] font-bold">
          <Trophy class="w-5 h-5 text-center" /> Awards
        </RouterLink>

        <RouterLink @click="isMenuOpen = false" to="/sponsors" class="flex items-center gap-3 text-gray-800 py-1" active-class="text-[#f0a22a] font-bold">
          <i class="fa-solid fa-handshake w-5 text-center"></i> Sponsors
        </RouterLink>

        <hr class="border-gray-100 my-1" />

        <RouterLink @click="isMenuOpen = false" to="/judge" class="w-full justify-center inline-flex items-center bg-[#d48806] hover:bg-[#b57305] text-white px-6 py-3 rounded-xl font-bold transition-all text-center gap-2">           
          <i class="fa-solid fa-check-to-slot"></i> Judge here
        </RouterLink>
      </div>
    </div>
  </header>
</template>