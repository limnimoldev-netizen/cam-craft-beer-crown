<template>
  <section class="py-6 bg-[#FAF9F5] min-h-screen font-sans">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      
      <header class="mb-7 text-center sm:text-left">
        <p class="text-xs uppercase tracking-widest text-amber-600 font-bold  animate-fade-in-up">
          Event Day
        </p>
        <h1 class="text-3xl font-black text-gray-900 sm:text-4xl tracking-tight mb-1 animate-fade-in-up" style="animation-delay: 0.1s;">
          Schedule
        </h1>
        <div class="w-16 h-1 bg-amber-500 rounded mx-auto sm:mx-0 animate-scale-x" style="animation-delay: 0.2s;"></div>
        
        <p class="text-gray-600 text-sm leading-relaxed mt-4 max-w-2xl animate-fade-in-up" style="animation-delay: 0.3s;">
          Join us for an evening of craft beer tasting, food pairing, brewery stories, and networking with fellow beer enthusiasts. Explore unique flavors and discover the art of Cambodian craft brewing.
        </p>
      </header>

      <div class="relative border-l-2 border-amber-200 ml-4 sm:ml-32 space-y-8">
        
        <div 
          v-for="(item, index) in schedules" 
          :key="index"
          class="relative pl-6 sm:pl-8 group animate-fade-in-up"
          :style="{ animationDelay: (0.1 * (index + 1)) + 's' }"
        >
          <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-[#FAF9F5] group-hover:bg-amber-600 group-hover:scale-125 transition-all duration-200"></div>

          <div class="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-200">
            
            <div class="sm:col-span-3">
              <span class="text-amber-600 font-bold text-sm tracking-wide sm:absolute sm:left-[-120px] sm:w-24 sm:text-right sm:top-[22px]">
                {{ item.time }}
              </span>
            </div>

            <div class="sm:col-span-9 flex flex-col justify-center">
              <h3 class="text-base font-semibold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                {{ item.title }}
              </h3>
              <p class="text-xs text-gray-500 mt-1 leading-relaxed">
                {{ item.desc }}
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const schedules = [
  {
    time: '2:00 PM',
    title: 'Event Begins',
    desc: 'Guests arrive and collect their tasting packages.',
  },
  {
    time: '3:15 PM',
    title: 'Introduction by the MC',
    desc: 'A brief presentation about the brewery, our unique brewing process, and the roadmap for today’s event.',
  },
  {
    time: '3:30 PM',
    title: 'DJ Wha-wah Set',
    desc: 'Live ambient vibes and music entertainment running until 6:30 PM.',
  },
  {
    time: '6:40 PM',
    title: 'Blind Tasting Live Session',
    desc: 'Put your palate to the test in our interactive live blind-tasting challenge.',
  },
  {
    time: '7:30 PM',
    title: 'Awards Ceremony',
    desc: 'Celebrating the top brews and honoring special guest recognitions.',
  },
  {
    time: '8:30 PM',
    title: 'Live Music: The Broken Cymbal',
    desc: 'Enjoy a live concert performance closing out the night until 11:00 PM.',
  },
  {
    time: '11:30 PM',
    title: 'Event Concludes',
    desc: 'Thank you for joining us! Drive safely and see you next time.',
  },
]
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleX {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-scale-x {
  animation: scaleX 0.5s ease-out forwards;
  transform-origin: left;
}
</style>