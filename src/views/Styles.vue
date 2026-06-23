<template>
  <section class="px-4 py-6 min-h-screen bg-[#FAF9F5]">
    <div class="mx-auto max-w-5xl">

        <!-- Header -->
        <div class="text-center mb-10">
          <span class="inline-flex items-center gap-2 text-amber-600 font-extrabold uppercase tracking-[3px] text-base animate-fade-in-up">
            Beer Categories
          </span>
          <h1 class="text-3xl font-bold text-gray-900 animate-fade-in-up" style="animation-delay: 0.1s;">Beer Styles</h1>
          <p class="max-w-2xl mx-auto text-slate-500 mt-3 text-sm md:text-base animate-fade-in-up" style="animation-delay: 0.2s;">
            Explore the different beer styles in the competition
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap gap-2 mb-6 animate-fade-in-up" style="animation-delay: 0.3s;">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-1.5 rounded-full font-semibold text-white text-sm transition',
              activeFilter === filter ? 'bg-amber-500' : 'bg-amber-400 hover:bg-amber-500'
            ]"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Beer Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(beer, index) in filteredBeers"
            :key="beer.id"
            class="bg-white rounded-2xl shadow-md p-4 animate-fade-in-up"
            :style="{ animationDelay: (0.1 * (index + 1)) + 's' }"
          >
            <!-- Beer Name + Country Badge -->
            <div class="flex items-start justify-between gap-2 mb-4">
              <h2 class="text-base font-bold text-gray-900 leading-snug">{{ beer.name }}</h2>
              <span class="bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                {{ beer.country }}
              </span>
            </div>

            <!-- Stats -->
            <div class="flex gap-3 mb-4">
              <div class="flex-1 bg-gray-100 rounded-xl p-2.5 text-center">
                <p class="text-xs text-gray-500">{{ beer.abvLabel }}</p>
                <p class="text-sm font-semibold text-gray-800 mt-1">{{ beer.abv }}</p>
              </div>
              <div class="flex-1 bg-gray-100 rounded-xl p-2.5 text-center">
                <p class="text-xs text-gray-500">{{ beer.ibuLabel }}</p>
                <p class="text-sm font-semibold text-gray-800 mt-1">{{ beer.ibu }}</p>
              </div>
            </div>

            <!-- Bitterness Bar -->
            <div class="mb-4">
              <p class="text-xs text-gray-600 mb-1">Bitterness Level</p>
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
                class="flex items-center gap-1 text-xs text-gray-500 hover:text-amber-500 transition w-full justify-end"
              >
                <span>{{ beer.expanded ? '▲' : '▼' }}</span>
                <span>tap for description</span>
              </button>

              <!-- Description -->
              <p v-if="beer.expanded" class="text-xs text-gray-600 mt-2 leading-relaxed">
                {{ beer.description }}
              </p>
            </div>

          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('All')

const filters = ['All', 'Germany', 'Belguim', 'England']

const beers = ref([
  {
    id: 1,
    name: 'Strong Bitter (ESB)',
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
    id: 6,
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
    id: 7,
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
    id: 8,
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

<style scoped>
/* Professional Fade In Up Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Professional Fade In Down Animation */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Professional Scale In Animation */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Scale X Animation */
@keyframes scaleX {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

/* Slide In From Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Bitterness Bar Animation */
@keyframes fillBar {
  from {
    width: 0;
  }
  to {
    width: var(--target-width);
  }
}

/* Flip Animation for Card */
@keyframes flipIn {
  from {
    opacity: 0;
    transform: perspective(1000px) rotateY(-10deg);
  }
  to {
    opacity: 1;
    transform: perspective(1000px) rotateY(0deg);
  }
}

/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Shimmer Effect */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Elastic Bounce */
@keyframes elasticBounce {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.25);
  }
  50% {
    transform: scale(0.95);
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-down {
  opacity: 0;
  animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-scale-in {
  opacity: 0;
  animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-scale-x {
  animation: scaleX 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform-origin: center;
}

.animate-slide-left {
  opacity: 0;
  animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-flip-in {
  opacity: 0;
  animation: flipIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-elastic {
  animation: elasticBounce 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Beer Card Hover Effects */
.bg-white {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
}

.bg-white:hover {
  transform: translateY(-12px) rotateX(5deg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
}

/* Filter Button Hover */
button {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 25px -5px rgba(238, 159, 39, 0.5);
  animation: elasticBounce 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

button:active {
  transform: translateY(-1px) scale(0.98);
}

/* Bitterness Bar Hover */
.bg-amber-400 {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.bg-amber-400:hover {
  filter: brightness(1.15);
  transform: scaleY(1.1);
}

/* Stats Box Hover */
.bg-gray-100 {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.bg-gray-100:hover {
  background-color: #f3f4f6;
  transform: scale(1.05);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Country Badge Hover */
.bg-amber-400 {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.bg-amber-400:hover {
  transform: scale(1.08) rotate(2deg);
}

/* Description Expand Animation */
.text-xs {
  transition: all 0.3s ease;
}

/* Card Title Hover */
.bg-white:hover h2 {
  color: #d97706;
  transition: color 0.3s ease;
}

/* Staggered Animation Delays */
.bg-white:nth-child(1) { animation-delay: 0.1s; }
.bg-white:nth-child(2) { animation-delay: 0.2s; }
.bg-white:nth-child(3) { animation-delay: 0.3s; }
.bg-white:nth-child(4) { animation-delay: 0.4s; }
.bg-white:nth-child(5) { animation-delay: 0.5s; }
.bg-white:nth-child(6) { animation-delay: 0.6s; }

/* Mobile Optimization */
@media (max-width: 768px) {
  .bg-white:hover,
  .bg-white:active {
    transform: translateY(-6px);
  }
  
  button:hover,
  button:active {
    transform: translateY(-2px) scale(1.02);
  }
  
  .bg-amber-400:hover,
  .bg-amber-400:active {
    transform: scale(1.02);
  }
  
  .bg-gray-100:hover,
  .bg-gray-100:active {
    transform: scale(1.02);
  }
  
  /* Touch feedback for mobile */
  .bg-white,
  button {
    -webkit-tap-highlight-color: rgba(238, 159, 39, 0.2);
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

</style>