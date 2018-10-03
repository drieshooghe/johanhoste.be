<template>
    <header class="bg-green font-white py-3 lg:py-6 mb-6 lg:mb-12">
      <div class="container flex justify-between">
        <div class="flex">JH</div>
        <nav class="flex">
          <button class="flex lg:hidden">
            <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
          </button>
          <ul class="hidden lg:flex fixed lg:relative pin bg-green h-screen lg:h-auto w-screen lg:w-auto flex-col lg:flex-row lg:bg-transparent list-reset font-light uppercase text-2xl">
            <li><router-link v-bind:to="'/diensten'" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Diensten</div></router-link></li>
            <li><router-link v-bind:to="'/getuigenissen'" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Getuigenissen</div></router-link></li>
            <li><router-link v-bind:to="'/over-mij'" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Over mij</div></router-link></li>
            <li><router-link v-bind:to="'/contact'" active-class="navbtn-active" class="navbtn -mr-4 trans"><div class="navbtn-label trans">Contact</div></router-link></li>
          </ul>
        </nav>
      </div>
    </header>
</template>