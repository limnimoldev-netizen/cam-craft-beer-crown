<template>
  <section class="py-6 bg-[#FAF9F5] min-h-screen font-sans">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      
      <header class="mb-10 text-center">
        <span class="inline-flex items-center gap-2 text-amber-600 font-extrabold uppercase tracking-[3px] text-base animate-fade-in-up">
          Event Day
        </span>
        <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl animate-fade-in-up" style="animation-delay: 0.1s;">
          Schedule
        </h1>
        <p class="max-w-2xl mx-auto text-slate-500 mt-3 text-sm md:text-base animate-fade-in-up" style="animation-delay: 0.2s;">
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

/* Pulse Animation for Timeline Dot */
@keyframes pulseDot {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(245, 158, 11, 0);
  }
}

/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
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
  transform-origin: left;
}

.animate-slide-left {
  opacity: 0;
  animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-elastic {
  animation: elasticBounce 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Timeline Card Hover Effects */
.group {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
}

.group:hover {
  transform: translateX(8px) translateY(-4px);
}

.group:hover .bg-white {
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.15);
}

/* Timeline Dot Animation */
.w-3 {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.group:hover .w-3 {
  animation: pulseDot 1.5s ease-in-out infinite;
  transform: scale(1.3);
}

/* Timeline Line Animation */
.border-l-2 {
  transition: border-color 0.3s ease;
}

.group:hover ~ .border-l-2 {
  border-color: #d97706;
}

/* Time Badge Hover */
.group:hover .text-amber-600 {
  color: #d97706;
  transform: scale(1.05);
}

/* Title Hover Effect */
.group:hover h3 {
  color: #d97706;
  transform: translateX(4px);
  transition: all 0.3s ease;
}

/* Staggered Animation Delays */
.group:nth-child(1) { animation-delay: 0.1s; }
.group:nth-child(2) { animation-delay: 0.2s; }
.group:nth-child(3) { animation-delay: 0.3s; }
.group:nth-child(4) { animation-delay: 0.4s; }
.group:nth-child(5) { animation-delay: 0.5s; }
.group:nth-child(6) { animation-delay: 0.6s; }
.group:nth-child(7) { animation-delay: 0.7s; }

/* Mobile Optimization */
@media (max-width: 768px) {
  .group:hover,
  .group:active {
    transform: translateX(4px) translateY(-2px);
  }
  
  .group:hover .w-3,
  .group:active .w-3 {
    transform: scale(1.1);
  }
  
  .group:hover h3,
  .group:active h3 {
    transform: translateX(2px);
  }
  
  /* Touch feedback for mobile */
  .group {
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