<template>
  <!-- link icon -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <div class="min-h-screen bg-[#FAF9F5] font-sans text-slate-800 antialiased selection:bg-amber-100">
    
    <!-- Hero Header -->
    <section class="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center relative">
        <div class="absolute inset-0 bg-radial from-amber-500/5 to-transparent blur-3xl -z-10"></div>
        <h1 class="text-3xl  font-black tracking-tight text-slate-900 ">
            Competition <span class="bg-gradient-to-r from-[#c58b38] to-[#EE9F27] bg-clip-text text-[#EE9F27]">Awards</span>
        </h1>
        <p class="text-sm text-slate-500  mt-1">
            Three prestigious categories await our winners
        </p>
        <div class="w-40 h-[2px] bg-[#EE9F27] mx-auto mt-4"></div>
    </section>

    <!-- Main Content Container -->
    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      
      <!-- Card 1: Main Award -->
        <div class="group bg-white rounded-2xl border-l-4 border-[#f0a53b] shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
        <div class="group bg-white rounded-2xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
      <div class="group bg-white rounded-2xl border-l-4 text-amber-700 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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

    <!-- Bottom Ribbon (Styled exactly like image_528d64.png) -->
    <section class="max-w-5xl mx-auto px-4 py-2">
        <div class="bg-[#f3edd7]/40 p-6 sm:p-8 rounded-lg flex flex-row items-center gap-6 text-left">
            <div class="text-[#f7c200] text-4xl sm:text-5xl flex items-center justify-center ">
                <i class="fa-solid fa-trophy"></i>
            </div>
            <div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">Celebrating Excellence In Craft Beer</h3>
                <p class="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-snug">Honoring passion, creativity and the community that makes it all possible.</p>
            </div>
        </div>
    </section>
    
  </div>
</template>

