<template>
  <section class="px-4 py-6 min-h-screen bg-[#FAF9F5]">
    <div class="mx-auto max-w-5xl">
      <!-- link icon -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

        <!-- Hero Header -->
        <section class="max-w-4xl mx-auto px-3 pb-5 text-center relative">
          <div class="absolute inset-0 bg-radial from-amber-500/5 to-transparent blur-3xl -z-10"></div>
          <span class="inline-flex items-center gap-2 text-amber-600 font-extrabold uppercase tracking-[3px] text-base animate-fade-in-up">
            Competition Categories
          </span>
          <h1 class=" text-3xl font-bold text-gray-900 sm:text-4xl animate-fade-in-up" style="animation-delay: 0.1s;">
            Competition Awards
          </h1>
          <p class="max-w-2xl mx-auto text-slate-500 mt-3 text-sm md:text-base animate-fade-in-up" style="animation-delay: 0.2s;">
            Three prestigious categories await our winners
          </p>
        </section>

        <!-- Main Content Container -->
        <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-6">
          
          <!-- Card 1: Main Award -->
          <div class="group bg-white rounded-2xl border-l-4 border-[#f0a53b] shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up" style="animation-delay: 0.3s;">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left max-w-2xl">
              <div class="w-14 h-14 bg-amber-50 rounded-4xl flex items-center justify-center shrink-0 border border-amber-100 text-[#f0a53b] text-2xl">
                <i class="fa-solid fa-crown"></i>
              </div>
              <div>
                <h2 class="text-xl font-bold text-slate-900">Main Award</h2>
                <span class="inline-block text-[#d48c29] font-bold text-[10px] tracking-widest uppercase mt-0.5 mb-3">
                  GOLD, SILVER & BRONZE
                </span>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  This award is judged by a group of six international experts, according to the BJCP 
                  score sheet in a blind tasting mode. Some of the judges are BJCP certified.
                </p>
              </div>
            </div>
        
            <div class="bg-slate-50 rounded-xl px-6 py-4 flex gap-6 border border-slate-100 shrink-0 w-full md:w-auto justify-center items-center">
              <div class="text-center">
                <div class="text-xs font-bold text-amber-600"><i class="fa-solid fa-medal mr-1"></i> Gold</div>
              </div>
              <div class="text-center border-x border-slate-200 px-6">
                <div class="text-xs font-bold text-slate-500"><i class="fa-solid fa-medal mr-1"></i> Silver</div>
              </div>
              <div class="text-center">
                <div class="text-xs font-bold text-orange-600"><i class="fa-solid fa-medal mr-1"></i> Bronze</div>
              </div>
            </div>
          </div>

          <!-- Card 2: People's Choice Award -->
          <div class="group bg-white rounded-2xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up" style="animation-delay: 0.4s;">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left max-w-2xl">
              <div class="w-14 h-14 bg-green-50 rounded-4xl flex items-center justify-center shrink-0 border border-green-100 text-green-500 text-2xl">
                <i class="fa-solid fa-users"></i>
              </div>
              <div>
                <h2 class="text-xl font-bold text-slate-900">People's Choice Award</h2>
                <span class="inline-block text-green-600 font-bold text-[10px] tracking-widest uppercase mt-0.5 mb-3">
                  VOTED BY THE PUBLIC
                </span>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  This award is decided completely by our attendees. Every festival-goer gets 
                  a chance to taste and cast their vote for their ultimate favorite beer of the competition.
                </p>
              </div>
            </div>
        
            <div class="bg-[#f4fbf7] rounded-xl p-4 flex items-center gap-4 border border-green-100/50 shrink-0 w-full md:w-56 justify-start">
              <div class="text-green-600 text-2xl flex items-center justify-center pl-1">
                <i class="fa-solid fa-check-to-slot"></i>
              </div>
              <div class="text-left">
                <div class="text-sm font-bold text-green-600 tracking-wide leading-none">YOUR VOTE</div>
                <div class="text-[10px] text-green-600/80 font-medium tracking-tight mt-1 leading-none">Makes A Difference</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Brewer's Choice Award -->
          <div class="group bg-white rounded-2xl border-l-4 text-amber-700 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up" style="animation-delay: 0.5s;">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left max-w-2xl">
              <div class="w-14 h-14 bg-orange-50 rounded-4xl flex items-center justify-center shrink-0 border border-orange-100 text-amber-700 text-2xl">
                <i class="fa-solid fa-gift"></i>
              </div>
              <div>
                <h2 class="text-xl font-bold text-slate-900">Brewer's Choice Award</h2>
                <span class="inline-block text-amber-700 font-bold text-[10px] tracking-widest uppercase mt-0.5 mb-3">
                  VOTED BY PARTICIPATING BREWERS
                </span>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  The ultimate peer recognition. Voted on exclusively by fellow participating brewers, 
                  evaluating technical excellence, style accuracy, and pure brewing craftsmanship.
                </p>
              </div>
            </div>
        
            <div class="bg-[#fefaf4] rounded-xl p-4 flex items-center gap-4 border border-amber-100/50 shrink-0 w-full md:w-56 justify-start">
              <div class="text-amber-700 text-xl flex items-center justify-center pl-1">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div class="text-left">
                <div class="text-sm font-bold text-amber-700 tracking-wide leading-none">RESPECT.SUPPORT</div>
                <div class="text-[10px] text-amber-700 font-medium tracking-tight mt-1 leading-none">Celebrate Together</div>
              </div>
            </div>
          </div>

        </main>

        <!-- Bottom Ribbon -->
        <section class="max-w-5xl mx-auto px-4 py-3">
          <div class="bg-[#f3edd7]/40 p-5 sm:p-8 rounded-lg flex flex-row items-center gap-4 text-left animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="text-[#f7c200] text-4xl sm:text-5xl flex items-center justify-center">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">Celebrating Excellence In Craft Beer</h3>
              <p class="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-snug">Honoring passion, creativity and the community that makes it all possible.</p>
            </div>
          </div>
        </section>

    </div>
  </section>
</template>

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

/* Pulse Soft Animation */
@keyframes pulseSoft {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
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

/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Glow Pulse */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(238, 159, 39, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(238, 159, 39, 0.6);
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

.animate-pulse-soft {
  animation: pulseSoft 3s ease-in-out infinite;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-glow {
  animation: glowPulse 2s ease-in-out infinite;
}

.animate-elastic {
  animation: elasticBounce 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Professional Card Hover Effects */
.group {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
}

.group:hover {
  transform: translateY(-12px) rotateX(5deg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Border Left Color Animation on Hover */
.border-l-4:hover {
  border-left-width: 6px;
}

/* Icon Container Hover */
.w-14:hover {
  transform: scale(1.15) rotate(5deg);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px -10px rgba(238, 159, 39, 0.4);
}

/* Medal Badge Animation */
.bg-slate-50:hover {
  background-color: #f8fafc;
  transform: scale(1.03);
}

.bg-\[\#f4fbf7\]:hover {
  background-color: #f0fdf4;
  transform: scale(1.03);
}

.bg-\[\#fefaf4\]:hover {
  background-color: #fefce8;
  transform: scale(1.03);
}

/* Bottom Ribbon Hover */
.bg-\[\#f3edd7\]\/40:hover {
  background-color: rgba(243, 237, 215, 0.5);
  transform: scale(1.02);
}

/* Trophy Icon Animation */
.text-\[\#f7c200\] {
  animation: float 3s ease-in-out infinite;
}

/* Badge Shimmer */
.inline-block {
  position: relative;
  overflow: hidden;
}

.inline-block::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 3s infinite;
}

/* Mobile Optimization */
@media (max-width: 768px) {
  .group:hover,
  .group:active {
    transform: translateY(-6px);
  }
  
  .w-14:hover,
  .w-14:active {
    transform: scale(1.05);
  }
  
  .bg-slate-50:hover,
  .bg-slate-50:active,
  .bg-\[\#f4fbf7\]:hover,
  .bg-\[\#f4fbf7\]:active,
  .bg-\[\#fefaf4\]:hover,
  .bg-\[\#fefaf4\]:active {
    transform: scale(1.01);
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