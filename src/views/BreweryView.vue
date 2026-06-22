<template>
  <section class=" px-4 py-16 md:py-20 min-h-screen bg-[#FAF9F5]">
    <div class="mx-auto max-w-5xl">
      <!-- Header -->
      <div class="text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          CAMBODIAN <span class="text-[#EE9F27]">BREWERIES</span>
        </p>
        <h1 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Breweries at the Cambodian Craft Beer Crown 2025
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-sm text-gray-500 leading-relaxed">
          These craft breweries are bringing their finest European-style beers to the competition.
          Visit each one, taste their entry, and decide your champion.
        </p>
        <div class="w-52 h-[3px] bg-[#EE9F27] mx-auto mt-6"></div>
      </div>

      <!-- Brewery Grid -->
      <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="brewery in breweries"
          :key="brewery.name"
          class="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md brew-card"
        >
          <!-- Brewery Logo -->
          <div class="mb-4 flex justify-center">
            <img 
              v-if="brewery.logo" 
              :src="brewery.logo" 
              :alt="brewery.name + ' logo'"
              class="h-30 w-30 object-contain rounded-full border border-gray-200 p-2"
            />
            <div v-else class="h-30 w-30 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-2xl">
              {{ brewery.name.charAt(0) }}
            </div>
          </div>

          <h3 class="text-xl font-semibold text-[#EE9F27] text-center">{{ brewery.name }}</h3>
          <p class="mt-2 text-sm text-gray-500 leading-relaxed text-center">
            {{ brewery.description }}
          </p>
  
          <!-- Facebook Button -->
          <div class="mt-4 flex justify-center">
            <a
              :href="brewery.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full bg-[#EE9F27] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-600 hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="white">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.41c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.62h-1.2c-1.18 0-1.55.73-1.55 1.49v1.79h2.64l-.42 2.91h-2.22V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Brewery data with logos
const breweries = [
  {
    name: 'Projekt Brew Co.',
    description: 'Projekt brews is a small microbrewery based in Kampot. A Kampot-based microbrewery making modern hoppy beers since 2020.',
    facebook: 'https://www.facebook.com/profile.php?id=100063463360069',
    logo: '/src/assets/projectbrews.webp' // Add your image URL here
  },
  {
    name: 'Sak Pub',
    description: 'SAK PUB Craft Beer & Bites opened its taproom and kitchen in October 2021, serving handcrafted in small batch craft beer.',
    facebook: 'https://www.facebook.com/SakPubCraftBeerBites',
    logo:'/src/assets/sakpub.webp'
  },
  {
    name: 'Botanico Brewing Company',
    description: 'Located in the heart of Phnom Penh, Botanico is one of the oldest craft breweries in the country, creating a big beers.',
    facebook: 'https://www.facebook.com/botanicobrewingco',
    logo: '/src/assets/botanico.webp'
  },
  {
    name: 'Riel Brewing and Distilling',
    description: 'Riel Brewing is a pioneering craft brewery located right here in Phnom Penh, celebrated for helping to establish the locale.',
    facebook: 'https://www.facebook.com/rielbrewing',
    logo: '/src/assets/rielbrewing.webp'
  },
  {
    name: 'Fuzzy Logic',
    description: 'Established in 2014, Fuzzy Logic Brewing Co. is one of the pioneers in introducing craft beer to Cambodia and South East Asia.',
    facebook: 'https://www.facebook.com/FuzzyLogicCambodia',
    logo: '/src/assets/fuzzylogic.webp'
  },
  {
    name: 'brew Khnear',
    description: 'At Brew Khnear, (loosely translated as ‘Brew Together,’) our focus is on getting that work/life balance right.With solid. hahaha',
    facebook: '#',
    logo: '/src/assets/brewkhnear.webp'
  },
  {
    name: 'Funghi Art',
    description: 'Create new value for Cambodian rice through fermentation technology. All made from Cambodian Rice. ',
    facebook: 'https://www.facebook.com/profile.php?id=100069892638809',
    logo: '/src/assets/funghiart.webp'
  },
  {
    name: 'Jaya-Vara Meadery',
    description: 'Jaya-Vara Meadery has been crafting unique meads and beers in Cambodia for the past 3 years.',
    facebook: 'https://www.facebook.com/profile.php?id=100080223013722',
    logo: '/src/assets/jayavara.webp'
  },
  {
    name: 'Krama Craft Brewery',
    description: 'Krama Craft Brewery is a cozy craft brewery located in Siem Reap, founded by two partners — one French,',
    facebook: 'https://www.facebook.com/profile.php?id=100095224728868',
    logo: '/src/assets/kramacraft.webp'
  },
  {
    name: ' Himawari Microbrewery',
    description: 'Himawari Microbrewery is the 1st and only microbrewery launched by it’s 5-star hotel-apartments in Cambodia.',
    facebook: 'https://www.facebook.com/HimawariHotelMicrobrewery',
    logo: '/src/assets/Himawari Microbrewery.png'
  },
  {
    name: '  Chug Lab',
    description: 'Chug Brew is a very small nano brewery located in Phnom Penh with the focus on high quality modern craft beers.',
    facebook: 'https://www.facebook.com/thechuglab',
    logo: '/src/assets/chuglab.webp'
  },
  {
    name: '  Bash Brewing',
    description: 'is one of the Kingdom’s original craft breweries, creating some of the finest all-natural craft beer in Cambodia.',
    facebook: 'https://www.facebook.com/bashbrewingkh',
    logo: '/src/assets/Bash Brewing.png'
  }
  

]
</script>

<style scoped>
.brew-card {
  transition: all 0.15s ease;
}
.brew-card:hover {
  background-color: #faf9f6;
  transform: translateY(-2px);
}
</style>