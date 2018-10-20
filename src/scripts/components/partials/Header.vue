<template>
    <header class="bg-green font-white py-3 lg:py-6 scroll-header">
      <div class="container flex justify-between">
        <router-link :to="{ name: 'home' }"><div class="py-1"><img src="static/img/header_logo.svg" class="h-16"/></div></router-link>
        <nav class="flex">
          <button class="z-50 hamburger hamburger--collapse lg:hidden" type="button" aria-label="Menu" aria-controls="navigation" aria-expanded="true/false" v-bind:class="{ 'is-active': mobileNavActive }" @click='toggle()'>
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <ul class="z-10 lg:flex fixed lg:relative pin bg-dark h-screen lg:h-auto w-screen lg:w-auto flex-col lg:flex-row lg:bg-transparent list-reset font-light uppercase text-2xl" v-bind:class="{'hidden': !mobileNavActive}">
            <li><router-link v-bind:to="{ name: 'services' }" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Diensten</div></router-link></li>
            <li><router-link v-bind:to="{ name: 'testimonials' }" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Getuigenissen</div></router-link></li>
            <li><router-link v-bind:to="{ name: 'about' }" active-class="navbtn-active" class="navbtn trans"><div class="navbtn-label trans">Over mij</div></router-link></li>
            <li><router-link v-bind:to="{ name: 'contact' }" active-class="navbtn-active" class="navbtn -mr-4 trans"><div class="navbtn-label trans">Contact</div></router-link></li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return{
      mobileNavActive: false
    }
  },
  methods: {
    toggle() {
      this.mobileNavActive = !this.mobileNavActive;
    }
  }
};
</script>