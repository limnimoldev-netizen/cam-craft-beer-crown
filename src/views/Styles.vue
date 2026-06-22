<template>
  <div class="min-h-screen bg-gray-50 px-24 py-10">

    <!-- Filter Buttons -->
    <div class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="activeFilter = filter"
        :class="[
          'px-6 py-2 rounded-full font-semibold text-white transition',
          activeFilter === filter ? 'bg-amber-500' : 'bg-amber-400 hover:bg-amber-500'
        ]"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Beer Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div
        v-for="beer in filteredBeers"
        :key="beer.id"
        class="bg-white rounded-2xl shadow-md p-5 relative"
      >
        <!-- Country Badge -->
        <span class="absolute top-4 right-4 bg-amber-400 text-white text-sm font-semibold px-4 py-1 rounded-full">
          {{ beer.country }}
        </span>

        <!-- Beer Name -->
        <h2 class="text-xl font-bold text-gray-900 mb-4">{{ beer.name }}</h2>

        <!-- Stats -->
        <div class="flex gap-4 mb-4">
          <div class="flex-1 bg-gray-100 rounded-xl p-3 text-center">
            <p class="text-sm text-gray-500">{{ beer.abvLabel }}</p>
            <p class="text-base font-semibold text-gray-800 mt-1">{{ beer.abv }}</p>
          </div>
          <div class="flex-1 bg-gray-100 rounded-xl p-3 text-center">
            <p class="text-sm text-gray-500">{{ beer.ibuLabel }}</p>
            <p class="text-base font-semibold text-gray-800 mt-1">{{ beer.ibu }}</p>
          </div>
        </div>

        <!-- Bitterness Bar -->
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-1">Bitterness Level</p>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-amber-400 h-2 rounded-full transition-all duration-500"
              :style="{ width: beer.bitterness + '%' }"
            ></div>
          </div>
        </div>

        <!-- Tap for Description -->
        <div>
          <button
            @click="beer.expanded = !beer.expanded"
            class="flex items-center gap-1 text-sm text-gray-500 hover:text-amber-500 transition w-full justify-end"
          >
            <span>{{ beer.expanded ? '▲' : '▼' }}</span>
            <span>tap for description</span>
          </button>

          <!-- Description -->
          <p v-if="beer.expanded" class="text-sm text-gray-600 mt-2 leading-relaxed">
            {{ beer.description }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('All')

const filters = ['All', 'Germany', 'Belguim', 'England']

const beers = ref([
  {
    id: 1,
    name: 'Strong Bitter (ESB',
    country: 'England',
    abvLabel: 'Alcohol',
    abv: '4.6%-6.2%',
    ibuLabel: 'Bitterness',
    ibu: '30-50 IBU',
    bitterness: 40,
    expanded: false,
    description: 'An average- to strong-strength English ale featuring a nice balance between leafy, earthy British hops and a solid malt backbone. Expect notes of biscuit, nut, or caramel with a dry, clean finish.',
  },
  {
    id: 2,
    name: 'English IPA',
    country: 'England',
    abvLabel: 'Alcohol',
    abv: '5.0%-7.5%',
    ibuLabel: 'Bitterness',
    ibu: '40-60 IBU',
    bitterness: 55,
    expanded: false,
    description: 'A hoppy, moderately strong British pale ale that leans into herbal, floral, and spicy wood qualities rather than the bright citrus of its American cousin. The malt profile is often more prominent here, presenting toasted, bready, or caramel layers.',
  },
  {
    id: 3,
    name: 'Witbier',
    country: 'Belgium',
    abvLabel: 'Alcohol',
    abv: '4.5%-5.5%',
    ibuLabel: 'Bitterness',
    ibu: '8-20 IBU',
    bitterness: 60,
    expanded: false,
    description: 'A remarkably refreshing, pale wheat ale brewed with coriander and curaçao orange peel. It is intentionally hazy from unmalted wheat and yeast, offering a bright, citrusy, and subtly spicy flavor profile.',
  },
  {
    id: 4,
    name: 'Saison',
    country: 'Belguim',
    abvLabel: 'Alcohol',
    abv: '3.5%-9.5%',
    ibuLabel: 'Bitterness',
    ibu: '20-35 IBU',
    bitterness: 75,
    expanded: false,
    description: 'An artisanal, highly carbonated Belgian farmhouse ale with a distinctive dry, fruity, and peppery character. It balances complex esters and phenols with a prominent hop bitterness and an incredibly crisp finish.',
  },
   {
    id: 5,
    name: 'Weissibier',
    country: 'Germany',
    abvLabel: 'Alcohol',
    abv: '4.3%-5.6%',
    ibuLabel: 'Bitterness',
    ibu: '8-15 IBU',
    bitterness: 75,
    expanded: false,
    description: 'A traditional South German wheat beer famous for its cloudy appearance and dramatic yeast-driven aromas of banana and clove. It has low bitterness, high carbonation, and a fluffy, creamy mouthfeel.',
  },
  {
    id:6 ,
    name: 'German Pils',
    country: 'Germany',
    abvLabel: 'Alcohol',
    abv: '4.4%-5.2%',
    ibuLabel: 'Bitterness',
    ibu: '22-40 IBU',
    bitterness: 75,
    expanded: false,
    description: 'A crisp, clean, and highly attenuated gold-colored lager that highlights noble German hops like Hallertau or Tettnanger. It features a distinctive, snappy floral aroma and a firm, lingering bitterness.',
  },
   {
    id:7 ,
    name: 'Munich Dunkel',
    country: 'Germany',
    abvLabel: 'Alcohol',
    abv: '4.5%-5.6%',
    ibuLabel: 'Bitterness',
    ibu: '18-28 IBU',
    bitterness: 75,
    expanded: false,
    description: 'A classic, deeply comforting dark lager from Bavaria that celebrates rich, bready, and toasty Munich malts. It tastes of bread crusts, nuts, or mild chocolate without ever feeling heavy, overly sweet, or roasted like a stout.',
  },
  {
    id:8 ,
    name: 'Blank',
    country: 'Country Name',
    abvLabel: 'Alcohol',
    abv: '00',
    ibuLabel: 'Bitterness',
    ibu: '00',
    bitterness: 75,
    expanded: false,
    description: 'for more .....',
  },
])

const filteredBeers = computed(() => {
  if (activeFilter.value === 'All') return beers.value
  return beers.value.filter(b => b.country === activeFilter.value)
})
</script>