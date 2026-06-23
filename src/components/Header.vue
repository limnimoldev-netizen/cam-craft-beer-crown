<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Beer, Calendar, Trophy, Award, Handshake, House, Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-lg transition-all duration-300">
    <div class="max-w-[1280px] mx-auto px-4 md:px-12">
      <div class="flex h-20 items-center justify-between">
        
        <div class="flex items-center gap-2 sm:gap-3 group cursor-pointer">
          <img src="../assets/logo1.png" alt="Cambodian Beer Crown" class="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
          <img src="../assets/logo2.png" alt="Cambodian Beer Crown" class="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
        </div>

        <nav class="hidden md:flex items-center gap-8 font-medium text-base">
          <RouterLink to="/" class="nav-link flex items-center gap-1.5 bg-gradient-to-r from-[#5b0014] to-[#7b1d1d] bg-clip-text text-transparent hover:from-[#f0a22a] hover:to-[#EE9F27] pb-1 transition-all duration-300 relative group" active-class="border-b-2 border-[#f0a22a] from-[#f0a22a] to-[#EE9F27] font-bold">
            <House class="w-5 h-5 text-center transition-transform duration-300 group-hover:scale-125" /> 
            <span class="relative">
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f0a22a] to-[#EE9F27] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </RouterLink>

          <RouterLink to="/breweries" class="nav-link flex items-center gap-1.5 bg-gradient-to-r from-[#5b0014] to-[#7b1d1d] bg-clip-text text-transparent hover:from-[#f0a22a] hover:to-[#EE9F27] pb-1 transition-all duration-300 relative group" active-class="border-b-2 border-[#f0a22a] from-[#f0a22a] to-[#EE9F27] font-bold">
            <Beer class="w-4 h-4 transition-transform duration-300 group-hover:scale-125" /> 
            <span class="relative">
              Breweries
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f0a22a] to-[#EE9F27] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </RouterLink>

          <RouterLink to="/schedule" class="nav-link flex items-center gap-1.5 bg-gradient-to-r from-[#5b0014] to-[#7b1d1d] bg-clip-text text-transparent hover:from-[#f0a22a] hover:to-[#EE9F27] pb-1 transition-all duration-300 relative group" active-class="border-b-2 border-[#f0a22a] from-[#f0a22a] to-[#EE9F27] font-bold">
            <Calendar class="w-4 h-4 transition-transform duration-300 group-hover:scale-125" /> 
            <span class="relative">
              Schedule
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f0a22a] to-[#EE9F27] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </RouterLink>

          <RouterLink to="/awards" class="nav-link flex items-center gap-1.5 bg-gradient-to-r from-[#5b0014] to-[#7b1d1d] bg-clip-text text-transparent hover:from-[#f0a22a] hover:to-[#EE9F27] pb-1 transition-all duration-300 relative group" active-class="border-b-2 border-[#f0a22a] from-[#f0a22a] to-[#EE9F27] font-bold">
           <Trophy class="w-5 h-5 text-center transition-transform duration-300 group-hover:scale-125" /> 
           <span class="relative">
             Awards
             <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f0a22a] to-[#EE9F27] transition-all duration-300 group-hover:w-full"></span>
           </span>
          </RouterLink>

          <RouterLink to="/styles" class="nav-link flex items-center gap-1.5 bg-gradient-to-r from-[#5b0014] to-[#7b1d1d] bg-clip-text text-transparent hover:from-[#f0a22a] hover:to-[#EE9F27] pb-1 transition-all duration-300 relative group" active-class="border-b-2 border-[#f0a22a] from-[#f0a22a] to-[#EE9F27] font-bold">
            <Award class="w-5 h-5 text-center transition-transform duration-300 group-hover:scale-125" /> 
            <span class="relative">
              Styles
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f0a22a] to-[#EE9F27] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </RouterLink>

          <RouterLink to="/sponsors" class="nav-link flex items-center gap-1.5 bg-gradient-to-r from-[#5b0014] to-[#7b1d1d] bg-clip-text text-transparent hover:from-[#f0a22a] hover:to-[#EE9F27] pb-1 transition-all duration-300 relative group" active-class="border-b-2 border-[#f0a22a] from-[#f0a22a] to-[#EE9F27] font-bold">
            <Handshake class="w-5 h-5 text-center transition-transform duration-300 group-hover:scale-125" /> 
            <span class="relative">
              Sponsors
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f0a22a] to-[#EE9F27] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </RouterLink>                                                 
        </nav>

        <div class="flex items-center gap-4">
          <div class="hidden md:block">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="group inline-flex items-center bg-gradient-to-r from-[#EE9F27] to-[#d97706] hover:from-[#d97706] hover:to-[#b57305] text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base tracking-wide gap-2 relative overflow-hidden">           
              <span class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
              <i class="fa-solid fa-check-to-slot transition-transform duration-300 group-hover:rotate-12"></i> 
              <span class="relative z-10">Judge here</span>
            </a>
          </div>

          <button @click="toggleMenu" class="block md:hidden p-2 text-gray-700 hover:text-amber-500 transition-all duration-300 hover:bg-amber-50 rounded-lg focus:outline-none" aria-label="Toggle navigation menu">
            <Menu v-if="!isMenuOpen" class="w-8 h-8 transition-transform duration-300 hover:scale-110" />
            <X v-else class="w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </button>
        </div>

      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden border-t border-gray-100/50 bg-white/95 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out">
      <div class="px-6 py-6 flex flex-col gap-4 font-medium text-lg">

        <RouterLink
          @click="isMenuOpen = false"
          to="/"
          class="mobile-nav-link flex items-center gap-3 text-gray-800 py-3 px-4 rounded-xl hover:bg-amber-50 transition-all duration-300"
          active-class="text-[#f0a22a] font-bold bg-amber-50"
        >
          <House class="w-5 h-5 transition-transform duration-300" />
          Home
        </RouterLink>

        <RouterLink
          @click="isMenuOpen = false"
          to="/breweries"
          class="mobile-nav-link flex items-center gap-3 text-gray-800 py-3 px-4 rounded-xl hover:bg-amber-50 transition-all duration-300"
          active-class="text-[#f0a22a] font-bold bg-amber-50"
        >
          <Beer class="w-5 h-5 transition-transform duration-300" />
          Breweries
        </RouterLink>

        <RouterLink
          @click="isMenuOpen = false"
          to="/schedule"
          class="mobile-nav-link flex items-center gap-3 text-gray-800 py-3 px-4 rounded-xl hover:bg-amber-50 transition-all duration-300"
          active-class="text-[#f0a22a] font-bold bg-amber-50"
        >
          <Calendar class="w-5 h-5 transition-transform duration-300" />
          Schedule
        </RouterLink>

        <RouterLink
          @click="isMenuOpen = false"
          to="/awards"
          class="mobile-nav-link flex items-center gap-3 text-gray-800 py-3 px-4 rounded-xl hover:bg-amber-50 transition-all duration-300"
          active-class="text-[#f0a22a] font-bold bg-amber-50"
        >
          <Trophy class="w-5 h-5 transition-transform duration-300" />
          Awards
        </RouterLink>

        <RouterLink
          @click="isMenuOpen = false"
          to="/styles"
          class="mobile-nav-link flex items-center gap-3 text-gray-800 py-3 px-4 rounded-xl hover:bg-amber-50 transition-all duration-300"
          active-class="text-[#f0a22a] font-bold bg-amber-50"
        >
          <Award class="w-5 h-5 transition-transform duration-300" />
          Styles
        </RouterLink>

        <RouterLink
          @click="isMenuOpen = false"
          to="/sponsors"
          class="mobile-nav-link flex items-center gap-3 text-gray-800 py-3 px-4 rounded-xl hover:bg-amber-50 transition-all duration-300"
          active-class="text-[#f0a22a] font-bold bg-amber-50"
        >
          <Handshake class="w-5 h-5 transition-transform duration-300" />
          Sponsors
        </RouterLink>

        <hr class="border-gray-100 my-2" />

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full justify-center inline-flex items-center bg-gradient-to-r from-[#EE9F27] to-[#d97706] hover:from-[#d97706] hover:to-[#b57305] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 text-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <i class="fa-solid fa-check-to-slot transition-transform duration-300"></i>
          <span>Judge Here</span>
        </a>

      </div>
    </div>
  </header>
</template>